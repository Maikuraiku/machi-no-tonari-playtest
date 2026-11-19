// The whole region in one go: the land before people, how people developed it, who lives and
// works where, where they travel, and the railways planned for them. Then the indexes that the
// 1 m ground and the local streets ask, so any part of the map can be drawn down to the metre.
import { BUILT_USES, ERAS, ROAD, USE, developRegion, landPriceStats, simulateLandPrice } from './develop.js'
import { desireLines, travelDemand } from './demand.js'
import { divideRegion } from './districts.js'
import { createFineTerrain, streamGeometry } from './fine.js'
import { segmentIndex } from './geometry.js'
import { seedOf } from './noise.js'
import { densityStats, populate } from './population.js'
import { STRUCTURE_NAMES, planRailways } from './rail.js'
import { superblocks } from './streets.js'
import { createTerrain } from './terrain.js'

export const REGION_SIZE = 20000 // metres on a side
// Bumped whenever the generator's output changes, so towns, caches and fingerprints can tell.
export const REGION_VERSION = 1

// Half the width of the land a double track takes, by structure (地平, 盛土, 高架, 橋梁, 切土;
// the tunnels take none at the surface).
const RAIL_HALF_WIDTH = [7.5, 11, 5.5, 6, 8.5, 0, 0, 0]

// A seed from what the user typed: numbers stay numbers, anything else is hashed.
export function regionSeed(value) {
  const text = String(value ?? '').trim()
  if (/^\d{1,9}$/.test(text)) return Number(text)
  return seedOf(text || '1')
}

// `progress(label, fraction)` is told what is being worked on, with the share done so far.
export function generateRegion({ seed = 1, size = REGION_SIZE } = {}, progress = () => {}) {
  const started = now()
  const timings = {}
  let mark = started
  const lap = (name) => {
    const time = now()
    timings[name] = Math.round(time - mark)
    mark = time
  }
  const part = (from, to) => (label, fraction) => progress(label, from + (to - from) * Math.min(1, Math.max(0, fraction)))

  progress('地形', 0)
  const terrain = createTerrain({ seed, size }, part(0, 0.22))
  lap('terrain')
  const city = developRegion(terrain, { seed }, part(0.22, 0.42))
  lap('develop')
  progress('人口', 0.43)
  const people = populate(terrain, city, { seed })
  lap('population')
  progress('交通需要', 0.46)
  const demand = travelDemand(terrain, city, people)
  lap('demand')
  const rail = planRailways(terrain, city, people, demand, { seed }, part(0.5, 0.95))
  lap('rail')
  // Refine land price simulation with the planned railway stations and their ridership.
  city.landPrice = simulateLandPrice(terrain, city, rail, { seed })

  progress('生活道路と1m地形の準備', 0.96)
  const blocks = superblocks(terrain, city, rail, seed)
  const roadIndex = segmentIndex(size, 200)
  for (const link of city.roads.links) {
    for (let k = 2; k < link.points.length; k += 2) {
      roadIndex.add(link.points[k - 2], link.points[k - 1], link.points[k], link.points[k + 1], link.kind)
    }
  }
  const streams = streamGeometry(terrain, city, size)
  // The strip each railway stands on, for keeping buildings off it (tunnels need none).
  const railIndex = segmentIndex(size, 100)
  for (const line of rail.lines) {
    const points = line.alignment.points
    for (let k = 1; k < points.length / 2; k++) {
      const half = RAIL_HALF_WIDTH[line.profile.structure[k]]
      if (half > 0) railIndex.add(points[k * 2 - 2], points[k * 2 - 1], points[k * 2], points[k * 2 + 1], half)
    }
  }
  const region = { seed, size, terrain, city, people, demand, rail, blocks, roadIndex, railIndex, streams }
  region.fine = createFineTerrain(region)
  region.desire = desireLines(demand, 2000, 60)
  lap('detail')
  progress('地区わけ', 0.98)
  region.division = divideRegion(region)
  lap('districts')
  timings.total = Math.round(now() - started)
  region.timings = timings
  progress('完成', 1)
  return region
}

function now() {
  return globalThis.performance?.now() ?? Date.now()
}

// Plain numbers about the region, for the panel and for the tests.
export function summarizeRegion(region) {
  const { terrain, city, people, demand, rail } = region
  const { columns, cell } = terrain
  const count = columns * columns
  const cellArea = cell * cell

  let lowest = Infinity
  let highest = -Infinity
  for (let index = 0; index < count; index++) {
    const h = terrain.elevation[index]
    if (h < lowest) lowest = h
    if (h > highest) highest = h
  }
  const landShare = new Float64Array(5)
  for (let index = 0; index < count; index++) landShare[terrain.land[index]] += 1 / count

  const useShare = {}
  for (const [name, value] of Object.entries(USE)) useShare[name] = 0
  const useNames = Object.fromEntries(Object.entries(USE).map(([name, value]) => [value, name]))
  let builtCells = 0
  const builtBy = ERAS.map(() => 0)
  for (let index = 0; index < count; index++) {
    useShare[useNames[city.use[index]]] += 1 / count
    if (BUILT_USES.has(city.use[index])) builtCells++
    builtBy[city.built[index]]++
  }
  // Built-up share by each year, counted as the land built on by then.
  const builtByYear = []
  let running = 0
  for (let era = 1; era < ERAS.length; era++) {
    running += builtBy[era]
    builtByYear.push({ year: ERAS[era], share: running / count })
  }

  const roads = { length: [0, 0, 0, 0, 0], links: city.roads.links.length }
  for (const link of city.roads.links) roads.length[link.kind] += link.length

  const density = densityStats(people.residents, columns, cell, 500)
  let peakLoad = 0
  for (const load of demand.linkLoad) peakLoad = Math.max(peakLoad, load)

  const lines = rail.lines.map((line) => ({
    id: line.id,
    name: line.name,
    kind: line.kind,
    color: line.color,
    length: line.length,
    stations: line.stations.length,
    stationNames: line.stations.map((station) => station.name),
    runMinutes: line.runMinutes,
    riders: line.riders,
    maxLoad: line.maxLoad,
    cost: line.cost.total,
    civil: line.cost.civil,
    displaced: line.cost.buildings,
    steepest: line.cost.steepest,
    ratio: line.marginal?.ratio ?? 0,
    structures: line.cost.byStructure
      .map((entry, index) => ({ name: STRUCTURE_NAMES[index], length: entry.length, cost: entry.cost * 1.3 }))
      .filter((entry) => entry.length > 0),
    difficulty: line.cost.difficulty,
    transfers: line.transfers,
  }))

  const division = region.division
  const blockAreas = division ? division.districts.map((district) => district.area).sort((a, b) => a - b) : []
  return {
    seed: region.seed,
    size: region.size,
    cell,
    timings: region.timings,
    districts: division ? {
      towns: division.towns.length,
      blocks: division.districts.length,
      medianArea: blockAreas[blockAreas.length >> 1] ?? 0,
    } : null,
    terrain: {
      lowest, highest,
      plateau: landShare[0], terrace: landShare[1], lowland: landShare[2], hills: landShare[3], channel: landShare[4],
      streams: terrain.streams.length,
    },
    city: {
      villages: city.villages.length,
      schools: city.schools.length,
      parks: city.parks.length,
      builtShare: builtCells / count,
      builtByYear,
      useShare,
      roads,
      earthwork: { cut: city.earthwork.cut, fill: city.earthwork.fill },
      newtownArea: city.newtown.reduce((sum, value) => sum + value, 0) * cellArea,
      culverts: terrain.streams.filter((stream) => stream.covered).length,
      landPrice: landPriceStats(terrain, city),
    },
    people: {
      residents: people.total,
      households: people.totalHouseholds,
      jobs: people.totalJobs,
      density,
    },
    demand: {
      trips: demand.totals.all,
      walked: demand.totals.walked,
      ridden: demand.totals.ridden,
      toMetropolis: sumToMetropolis(demand),
      peakRoadLoad: peakLoad,
    },
    rail: {
      lines,
      railTrips: rail.network.railTrips,
      benefit: rail.network.benefit,
      cost: rail.network.cost,
      ratio: rail.network.ratio,
      length: lines.reduce((sum, line) => sum + line.length, 0),
      stations: new Set(rail.lines.flatMap((line) => line.stations.map((station) => station.name))).size,
    },
  }
}

function sumToMetropolis(demand) {
  const { zones, trips, size: N, metropolisIndex: M } = demand
  let sum = 0
  for (let zone = 0; zone < zones.count; zone++) sum += trips[zone * N + M]
  return sum
}

export { ROAD }
