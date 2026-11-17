// Generates the region away from the page and draws its map tiles on request. The page gets the
// numbers and the lines to draw (roads, streams, railways); the grids stay here.
import { boundarySegments } from './districts.js?v=online-1794946480502'
import { generateRegion, summarizeRegion } from './region.js?v=online-1794946480502'
import { TILE, describePoint, drawFeatures, prepareRender, renderTile, tileFeatures } from './render.js?v=online-1794946480502'

let region = null
let seed = null
const canvas = typeof OffscreenCanvas === 'function' ? new OffscreenCanvas(TILE, TILE) : null
const context = canvas ? canvas.getContext('2d') : null

self.onmessage = (event) => {
  const message = event.data
  try {
    if (message.type === 'generate') generate(message)
    else if (message.type === 'tile') tile(message)
    else if (message.type === 'point') point(message)
    else if (message.type === 'heights') heights(message)
  } catch (error) {
    self.postMessage({ type: 'error', id: message.id, request: message.type, message: String(error?.stack ?? error) })
  }
}

function generate(message) {
  seed = message.seed
  region = null
  const started = performance.now()
  let lastPost = 0
  region = generateRegion({ seed }, (label, fraction) => {
    const time = performance.now()
    if (time - lastPost < 60 && fraction < 1) return
    lastPost = time
    self.postMessage({ type: 'progress', seed, label, fraction, elapsed: time - started })
  })
  prepareRender(region)
  const summary = summarizeRegion(region)
  self.postMessage({ type: 'ready', seed, summary, overlay: overlayOf(region) })
}

// Everything the page draws as lines and points.
function overlayOf(region) {
  const { city, demand, rail, streams, terrain } = region
  const roads = city.roads.links.map((link, index) => ({
    kind: link.kind,
    era: link.era,
    points: Float32Array.from(link.points),
    load: demand.linkLoad[index] ?? 0,
  }))
  const streamLines = streams.list.map((stream) => ({
    points: Float32Array.from(stream.points),
    width: stream.width,
    covered: stream.covered,
    area: stream.area,
  }))
  const lines = rail.lines.map((line) => ({
    id: line.id,
    name: line.name,
    kind: line.kind,
    color: line.color,
    length: line.length,
    points: Float32Array.from(line.alignment.points),
    radius: Float32Array.from(line.alignment.radius),
    rail: Float32Array.from(line.profile.rail),
    ground: Float32Array.from(line.profile.ground),
    structure: Uint8Array.from(line.profile.structure),
    stations: line.stations.map((station) => ({
      name: station.name,
      x: station.x,
      z: station.z,
      s: station.s,
      structure: station.structure,
      height: station.height,
      boardings: station.boardings,
      transfer: station.transfer,
    })),
    loads: Array.from(line.loads),
    runMinutes: line.runMinutes,
    riders: line.riders,
    maxLoad: line.maxLoad,
    transfers: line.transfers,
    cost: {
      total: line.cost.total,
      civil: line.cost.civil,
      land: line.cost.land,
      stations: line.cost.stations,
      buildings: line.cost.buildings,
      steepest: line.cost.steepest,
      difficulty: Array.from(line.cost.difficulty),
      byStructure: line.cost.byStructure.map((entry) => ({ name: entry.name, length: entry.length, cost: entry.cost })),
    },
    ratio: line.marginal?.ratio ?? 0,
    benefit: line.marginal?.benefit ?? 0,
  }))
  const division = region.division
  return {
    size: region.size,
    districts: {
      cell: division.cell,
      columns: division.columns,
      districtOf: Int16Array.from(division.districtOf),
      towns: division.towns.map(({ id, name, x, z, area, residents, districts, kind }) => ({ id, name, x, z, area, residents, districts, kind })),
      list: division.districts,
      boundaries: boundarySegments(division),
    },
    metropolis: city.metropolis,
    roads,
    streams: streamLines,
    levees: city.levees.map((points) => Float32Array.from(points)),
    lines,
    desire: region.desire,
    centers: city.centers.map((center) => ({ x: center.x, z: center.z, kind: center.kind })),
    riverLevel: { in: terrain.river.level[Math.round(terrain.river.sIn / terrain.river.step)], out: terrain.river.level[Math.round(terrain.river.sOut / terrain.river.step)] },
  }
}

function tile(message) {
  if (!region || message.seed !== seed) {
    self.postMessage({ type: 'tile', id: message.id, seed: message.seed, missing: true })
    return
  }
  const rgba = new Uint8ClampedArray(TILE * TILE * 4)
  const info = renderTile(region, message.layer, message.level, message.tx, message.tz, rgba)
  const features = tileFeatures(region, message.layer, info)
  if (context) {
    context.putImageData(new ImageData(rgba, TILE, TILE), 0, 0)
    drawFeatures(context, features, message.layer)
    const bitmap = canvas.transferToImageBitmap()
    self.postMessage({ type: 'tile', id: message.id, seed, bitmap }, [bitmap])
  } else {
    self.postMessage({ type: 'tile', id: message.id, seed, rgba }, [rgba.buffer])
  }
}

function point(message) {
  if (!region || message.seed !== seed) return
  self.postMessage({ type: 'point', id: message.id, seed, info: describePoint(region, message.x, message.z) })
}

// The 1 m ground of a window, for saving.
function heights(message) {
  if (!region || message.seed !== seed) return
  const { x0, z0, step, width, height } = message
  const result = region.fine.heights(x0, z0, step, width, height)
  self.postMessage({ type: 'heights', id: message.id, seed, x0, z0, step, width, height, values: result.height, water: result.water }, [result.height.buffer, result.water.buffer])
}
