// Generates or loads the region away from the page and draws its map tiles on request.
// Automatically loads server-persisted Extreme Deep Simulation packs (5m terrain, 1700-2025
// 35-step history, 44-format commercial ecosystem, BPR traffic, grade separations) when available,
// and falls back seamlessly to in-browser generation otherwise.
import { boundarySegments } from './districts.js'
import { preloadBuildings } from './building-cache.js'
import { generateRegion, REGION_VERSION, summarizeRegion } from './region.js'
import { regionWindow } from './window.js'
import { regionFingerprint } from './fingerprint.js'
import { GAME } from './game-worker.js'
import { DETAIL_LEVEL, TILE, describePoint, drawFeatures, metresPerPixel, prepareRender, renderTile, tileFeatures } from './render.js'
import { tryLoadExtremeSim } from './sim-loader.js'

let region = null
let seed = null
let tileCanvas = null

try {
  if (typeof OffscreenCanvas === 'function' && typeof ImageData === 'function') {
    const canvas = new OffscreenCanvas(TILE, TILE)
    const context = canvas.getContext('2d')
    if (context && typeof canvas.transferToImageBitmap === 'function') tileCanvas = { canvas, context }
  }
} catch {
  // Some browsers expose OffscreenCanvas but cannot create a 2D canvas in a worker.
}

self.onmessage = async (event) => {
  const message = event.data
  try {
    if (message.type === 'generate') await generate(message)
    else if (message.type === 'tile') await tile(message)
    else if (message.type === 'point') point(message)
    else if (message.type === 'heights') heights(message)
    else if (message.type === 'window') await windowOf(message)
    else if (message.type === 'buildingTile') await buildingTileOf(message)
    else if (Object.prototype.hasOwnProperty.call(GAME, message.type)) {
      if (!region || message.seed !== seed) self.postMessage({ type: message.type, id: message.id, missing: true })
      else await GAME[message.type](region, message)
    }
  } catch (error) {
    self.postMessage({ type: 'error', id: message.id, request: message.type, message: String(error?.stack ?? error) })
  }
}

async function generate(message) {
  seed = message.seed
  region = null
  const started = performance.now()
  let lastPost = 0
  const progress = (label, fraction) => {
    const time = performance.now()
    if (time - lastPost < 60 && fraction < 1) return
    lastPost = time
    self.postMessage({ type: 'progress', seed, label, fraction, elapsed: time - started })
  }

  // 1. Try loading pre-generated Extreme Deep Simulation pack from the server first!
  if (!message.forceFallback && self.location?.hostname !== 'maikuraiku.github.io') {
    progress('超極限シミュレーション確認中', 0.02)
    region = await tryLoadExtremeSim(seed, {
      preloadParcels: Boolean(message.preloadBuildings),
      progress,
    })
  }

  // 2. Fallback to local browser generation if no server pack exists for this seed yet.
  if (!region) {
    const terrainShare = message.preloadBuildings ? 0.8 : 1
    region = generateRegion({ seed }, (label, fraction) => {
      progress(message.preloadBuildings && fraction === 1 ? '地形と地区の準備が完了' : label, fraction * terrainShare)
    })
    if (message.preloadBuildings) {
      region.buildingCache = preloadBuildings(region, (fraction) => {
        progress('全域の建物を読み込んでいます', terrainShare + fraction * (1 - terrainShare))
      })
    }
  }

  prepareRender(region)
  const summary = summarizeRegion(region)
  if (region.isExtremeSim && region.manifest) {
    summary.isExtremeSim = true
    summary.mode = region.manifest.mode
    summary.has5mTerrain = region.manifest.has5mTerrain
    summary.totalBuildings = region.manifest.totalBuildings
    summary.commerceSummary = region.manifest.commerceSummary
    summary.gradeSeparations = region.manifest.gradeSeparations
    summary.roadInvestments = region.manifest.roadInvestments
    summary.timeline = region.manifest.timeline
    summary.catalogs = region.manifest.catalogs
    summary.springs = region.terrain.springs?.length ?? 0
  }
  region.fingerprint = regionFingerprint(region)
  self.postMessage({
    type: 'ready',
    seed,
    isExtremeSim: Boolean(region.isExtremeSim),
    summary,
    overlay: overlayOf(region),
    fingerprint: region.fingerprint,
    version: REGION_VERSION,
  })
}

function overlayOf(region) {
  const { city, demand, rail, streams, terrain } = region
  const roads = city.roads.links.map((link, index) => ({
    kind: link.kind,
    simKind: link.simKind ?? link.kind,
    era: link.era,
    eraYear: link.eraYear ?? 1955,
    vcRatio: link.vcRatio ?? 0,
    legalSpeedKmh: link.legalSpeedKmh ?? 40,
    oneWay: link.oneWay ?? 0,
    oneWayYear: link.oneWayYear ?? 0,
    regFlags: link.regFlags ?? 0,
    zone30Year: link.zone30Year ?? 0,
    medianYear: link.medianYear ?? 0,
    bikeLaneYear: link.bikeLaneYear ?? 0,
    pedZoneYear: link.pedZoneYear ?? 0,
    points: Float32Array.from(link.points),
    load: link.load ?? demand.linkLoad[index] ?? 0,
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
    openedYear: line.openedYear ?? 1930,
    isTram: Boolean(line.isTram),
    quadTrack: Boolean(line.quadTrack),
    gradeSeparatedYear: line.gradeSeparatedYear ?? null,
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
      openedYear: station.openedYear ?? line.openedYear ?? 1930,
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

  // Compact commercial point table for map overlay & timeline filtering
  let shopsOverlay = null
  if (region.commerce) {
    const all = [
      ...(region.commerce.active ?? []),
      ...(region.commerce.shuttered ?? []),
      ...(region.commerce.closedHistory ?? []),
    ]
    shopsOverlay = all.map((s) => ({
      id: s.id,
      typeId: s.typeId,
      code: s.code,
      name: s.name,
      x: Math.round(s.x),
      z: Math.round(s.z),
      locKind: s.locKind,
      openedYear: s.openedYear,
      closedYear: s.closedYear || 0,
      closeReason: s.closeReason || '',
      convertedFrom: s.convertedFrom ?? -1,
      floorArea: s.floorArea ?? 50,
    }))
  }

  return {
    size: region.size,
    isExtremeSim: Boolean(region.isExtremeSim),
    years: region.manifest?.years ?? [1700, 1925, 1940, 1955, 1965, 1975, 1990, 2005, 2020, 2025],
    timeline: region.manifest?.timeline ?? null,
    catalogs: region.manifest?.catalogs ?? null,
    springs: terrain.springs ?? [],
    shops: shopsOverlay,
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
    intersections: city.roads.intersections ?? [],
    levelCrossings: city.roads.levelCrossings ?? [],
    slopes: region.slopes ?? [],
    urbanNodes: region.urbanNodes ?? [],
    trafficLawStats: region.trafficLawStats ?? city.roads?.trafficLaw ?? null,
    trafficLawEras: region.trafficLawEras ?? region.manifest?.trafficLawEras ?? null,
    buildingLawStats: region.buildingLawStats ?? region.manifest?.buildingLawStats ?? null,
    landMarketStats: region.landMarketStats ?? region.manifest?.landMarketStats ?? null,
    parcelStats: region.parcelStats ?? region.manifest?.parcelStats ?? null,
    streams: streamLines,
    levees: city.levees.map((points) => Float32Array.from(points)),
    lines,
    desire: region.desire,
    centers: city.centers.map((center) => ({ x: center.x, z: center.z, kind: center.kind })),
    riverLevel: { in: terrain.river.level[Math.round(terrain.river.sIn / terrain.river.step)], out: terrain.river.level[Math.round(terrain.river.sOut / terrain.river.step)] },
  }
}

async function ensureParcelTilesForBox(x0, z0, x1, z1) {
  if (!region?.isExtremeSim || !region.buildingCache?.fetchTile) return
  const { tileSize, columns } = region.buildingCache
  const tx0 = Math.max(0, Math.floor((x0 - 40) / tileSize))
  const tx1 = Math.min(columns - 1, Math.floor((x1 + 40) / tileSize))
  const tz0 = Math.max(0, Math.floor((z0 - 40) / tileSize))
  const tz1 = Math.min(columns - 1, Math.floor((z1 + 40) / tileSize))
  const fetches = []
  for (let tz = tz0; tz <= tz1; tz++) {
    for (let tx = tx0; tx <= tx1; tx++) {
      if (!region.buildingCache.tileAt(tx, tz)) fetches.push(region.buildingCache.fetchTile(tx, tz))
    }
  }
  if (fetches.length) await Promise.all(fetches)
}

async function tile(message) {
  if (!region || message.seed !== seed) {
    self.postMessage({ type: 'tile', id: message.id, seed: message.seed, missing: true })
    return
  }
  const year = message.year ?? 2025
  if (message.level >= DETAIL_LEVEL && region.isExtremeSim) {
    const mpp = metresPerPixel(region.size, message.level)
    const x0 = message.tx * TILE * mpp
    const z0 = message.tz * TILE * mpp
    await ensureParcelTilesForBox(x0, z0, x0 + TILE * mpp, z0 + TILE * mpp)
  }
  const rgba = new Uint8ClampedArray(TILE * TILE * 4)
  const info = renderTile(region, message.layer, message.level, message.tx, message.tz, rgba, { year })
  if (tileCanvas) {
    const { canvas, context } = tileCanvas
    const features = tileFeatures(region, message.layer, info)
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

async function windowOf(message) {
  if (!region || message.seed !== seed) {
    self.postMessage({ type: 'window', id: message.id, seed: message.seed, missing: true })
    return
  }
  const wait = []
  if (region.isExtremeSim && (message.buildings !== false || message.streets !== false)) {
    wait.push(ensureParcelTilesForBox(message.x0, message.z0, message.x1, message.z1))
  }
  if (region.isExtremeSim && region.terrain5mCache) {
    wait.push(region.terrain5mCache.ensureForBox(message.x0, message.z0, message.x1, message.z1))
  }
  if (wait.length) await Promise.all(wait)
  const win = regionWindow(region, message)
  const transfer = [win.heights.buffer, win.water.buffer, win.use.buffer, win.borders.town.buffer, win.borders.block.buffer]
  for (const list of [win.roads, win.streets, win.streams]) for (const item of list) transfer.push(item.points.buffer)
  for (const building of win.buildings) transfer.push(building.corners.buffer)
  self.postMessage({ type: 'window', id: message.id, seed, window: win }, transfer)
}

function heights(message) {
  if (!region || message.seed !== seed) return
  const { x0, z0, step, width, height } = message
  const result = region.fine.heights(x0, z0, step, width, height)
  self.postMessage({ type: 'heights', id: message.id, seed, x0, z0, step, width, height, values: result.height, water: result.water }, [result.height.buffer, result.water.buffer])
}

async function buildingTileOf(message) {
  if (!region || message.seed !== seed) {
    self.postMessage({ type: 'buildingTile', id: message.id, seed: message.seed, missing: true })
    return
  }
  region.buildingCache ??= preloadBuildings(region)
  const { tx, tz } = message
  let raw = region.buildingCache.tileAt(tx, tz)
  if (!raw && region.buildingCache.fetchTile) raw = await region.buildingCache.fetchTile(tx, tz)
  const tileSize = region.buildingCache.tileSize
  if (!raw || !raw.floors.length) {
    self.postMessage({ type: 'buildingTile', id: message.id, seed, tx, tz, tileSize, count: 0 })
    return
  }
  const n = raw.floors.length
  const corners = Float32Array.from(raw.corners)
  const tiers = Uint8Array.from(raw.tiers)
  const floors = Uint8Array.from(raw.floors)
  const uses = Uint8Array.from(raw.uses)
  const tones = Uint16Array.from(raw.tones)
  const shopTypes = raw.shopTypes ? Uint8Array.from(raw.shopTypes) : new Uint8Array(n).fill(255)
  const baseY = raw.baseY ? Float32Array.from(raw.baseY) : new Float32Array(n)
  const padY = raw.padY ? Float32Array.from(raw.padY) : new Float32Array(n)
  const eras = new Uint8Array(n)
  const { columns, cell } = region.terrain
  const built = region.city.built
  const fine = region.fine

  if (!raw.baseY) {
    for (let i = 0; i < n; i++) {
      const o = i * 8
      const c0x = corners[o], c0z = corners[o + 1]
      const c1x = corners[o + 2], c1z = corners[o + 3]
      const c2x = corners[o + 4], c2z = corners[o + 5]
      const c3x = corners[o + 6], c3z = corners[o + 7]
      const h0 = fine.heightAt(c0x, c0z).height
      const h1 = fine.heightAt(c1x, c1z).height
      const h2 = fine.heightAt(c2x, c2z).height
      const h3 = fine.heightAt(c3x, c3z).height
      baseY[i] = Math.min(h0, h1, h2, h3) - 0.45
      padY[i] = Math.max(h0, h1, h2, h3) + 0.04
      if (built) {
        const cx = (c0x + c1x + c2x + c3x) * 0.25
        const cz = (c0z + c1z + c2z + c3z) * 0.25
        const col = Math.min(columns - 1, Math.max(0, Math.floor(cx / cell)))
        const row = Math.min(columns - 1, Math.max(0, Math.floor(cz / cell)))
        eras[i] = built[col + row * columns]
      }
    }
  } else if (raw.builtYears) {
    for (let i = 0; i < n; i++) {
      const y = raw.builtYears[i]
      eras[i] = y <= 1750 ? 1 : y <= 1945 ? 3 : y <= 1975 ? 5 : 8
    }
  }

  self.postMessage(
    { type: 'buildingTile', id: message.id, seed, tx, tz, tileSize, count: n, corners, baseY, padY, floors, uses, tiers, eras, tones, shopTypes },
    [corners.buffer, baseY.buffer, padY.buffer, floors.buffer, uses.buffer, tiers.buffer, eras.buffer, tones.buffer, shopTypes.buffer],
  )
}
