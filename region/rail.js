// Railway planning. Each line is laid out where it serves the most people for the least
// construction cost, given curves a train can run through, stations where the catchments are
// richest and a vertical profile that keeps within a 25‰ gradient. The profile decides each
// stretch's structure (viaduct, cutting, tunnel, bridge...) and so its cost. Lines are added
// one at a time, the best value first, while their benefits outweigh their costs.
import { Heap } from './heap.js?v=online-1794980046418'
import { BUILT_USES, ROAD, USE } from './develop.js?v=online-1794980046418'
import { activeShare } from './demand.js?v=online-1794980046418'
import { boxBlur } from './grid.js?v=online-1794980046418'
import { crossing, segmentDistance, segmentIndex, simplify } from './geometry.js?v=online-1794980046418'
import { createNamer } from './names.js?v=online-1794980046418'
import { LAND, bilinear, riverAlong } from './terrain.js?v=online-1794980046418'

export const STRUCTURE = { GRADE: 0, EMBANKMENT: 1, VIADUCT: 2, BRIDGE: 3, CUTTING: 4, COVERED: 5, TUNNEL: 6, SHIELD: 7 }
export const STRUCTURE_NAMES = ['地平', '盛土', '高架', '橋梁', '切土', '開削トンネル', '山岳トンネル', 'シールドトンネル']
export const LINE_COLORS = ['#e60033', '#0a7bc2', '#00995a', '#f08c00', '#8e60b5', '#00a7c4', '#c9a400', '#e0508c', '#6b7a8f']

const PLAN = 100 // planning grid (m)
const CATCHMENT = 800 // walking distance to a station (m)
const MAX_GRADE = 0.025
const SAMPLE = 20 // profile sample spacing (m)
const LEVEL = 0.25 // profile height step (m)
const CRUISE = 80 // km/h between stations
const STOP_LOSS = 1.1 // minutes lost per stop: braking, dwell, accelerating
const VALUE_OF_TIME = 40 // yen per minute
const PRESENT_VALUE = 18 // years of benefit counted: fifty years discounted at 4%
const OPERATING_MARGIN = 70 // yen per trip left of the fare after running costs
const OVERHEAD = 1.3 // track, power, signals, depots, trains and design on top of civil works
const MIN_RADIUS = 400
const WISH_RADIUS = 1200

// Land price (10,000 yen per m²) by use, and compensation for the buildings on it
// (100 million yen per km of a 15 m strip).
const LAND_PRICE = {
  [USE.COMMERCIAL]: 110, [USE.HIGH]: 90, [USE.MID]: 70, [USE.DENSE]: 58, [USE.LOW]: 52, [USE.PUBLIC]: 35,
  [USE.INDUSTRIAL]: 32, [USE.PARK]: 25, [USE.FIELD]: 12, [USE.PADDY]: 9, [USE.FOREST]: 7, [USE.GREEN]: 15,
  [USE.RIVERBED]: 0, [USE.WATER]: 0,
}
const COMPENSATION = {
  [USE.COMMERCIAL]: 140, [USE.HIGH]: 220, [USE.MID]: 120, [USE.DENSE]: 75, [USE.LOW]: 45, [USE.PUBLIC]: 30, [USE.INDUSTRIAL]: 35,
}
// Buildings per hectare, for counting how many a line displaces.
const BUILDINGS_PER_HA = { [USE.DENSE]: 38, [USE.LOW]: 26, [USE.MID]: 9, [USE.HIGH]: 3, [USE.COMMERCIAL]: 14, [USE.INDUSTRIAL]: 4, [USE.PUBLIC]: 1 }
// Width of land a structure takes for good (m).
const STRIP = [15, 22, 11, 0, 17, 0, 0, 0]
const STATION_COST = [22, 30, 48, 0, 50, 160, 120, 230]

// Cost of civil works in 100 million yen per km of double track, for the rail standing `h`
// metres above the ground at a site, and the structure that implies.
export function structureFor(h, site) {
  if (site.river) {
    if (h >= site.clearance) return STRUCTURE.BRIDGE
    if (h <= -18) return STRUCTURE.SHIELD
    return -1
  }
  // Big roads are crossed over or under, never on the level.
  if (site.road && h > -7 && h < 5.5) return -1
  if (h >= 1.5) {
    if (h >= 8 || (site.built && h >= 5)) return STRUCTURE.VIADUCT
    return STRUCTURE.EMBANKMENT
  }
  if (h > -1.5) return site.built ? -1 : STRUCTURE.GRADE // no level crossings among houses
  if (h > -12) return STRUCTURE.CUTTING
  if (!site.built) return STRUCTURE.TUNNEL
  return h > -22 ? STRUCTURE.COVERED : STRUCTURE.SHIELD
}

export function structureCost(structure, h, site) {
  const land = site.land
  switch (structure) {
    case STRUCTURE.GRADE: return 20 + land
    case STRUCTURE.EMBANKMENT: return 30 + 3 * h + 1.3 * land + (site.built ? 45 : 0)
    // Among dense buildings a viaduct also pays for lost sunlight, noise walls and the long
    // negotiations over every plot.
    case STRUCTURE.VIADUCT: return 85 + 4 * Math.max(0, h - 8) + (site.crowded ?? 0.6) * land + (site.built ? 20 : 0)
    case STRUCTURE.BRIDGE: return 230 + 3 * Math.max(0, h - site.clearance)
    case STRUCTURE.CUTTING: return 45 + 5 * -h + 1.2 * land + (site.built ? 35 : 0)
    case STRUCTURE.COVERED: return 260 + 3 * -h + 0.3 * land
    case STRUCTURE.TUNNEL: return 85
    case STRUCTURE.SHIELD: return 340
    default: return Infinity
  }
}

// Land cost in 100 million yen per km of a 15 m strip, dearer closer to the metropolis.
function landCost(use, minutes) {
  const reach = Math.min(1.5, Math.max(0.6, 1.7 - minutes / 45))
  return (LAND_PRICE[use] ?? 20) * 15 * 1000 / 10000 * reach + (COMPENSATION[use] ?? 0)
}

function prepare(terrain, city, people) {
  const { size, cell, columns } = terrain
  const n = Math.round(size / PLAN)
  const factor = Math.round(PLAN / cell)
  const count = n * n
  const weight = new Float32Array(count)
  const land = new Float32Array(count)
  const builtShare = new Float32Array(count)
  const water = new Uint8Array(count)
  const low = new Float32Array(count).fill(Infinity)
  const high = new Float32Array(count).fill(-Infinity)
  const grid40 = columns / 2
  const minutesAt = (index) => {
    const x = index % columns
    const z = (index - x) / columns
    return city.travel[(x >> 1) + (z >> 1) * grid40]
  }
  for (let index = 0; index < columns * columns; index++) {
    const x = index % columns
    const z = (index - x) / columns
    const p = Math.floor(x / factor) + Math.floor(z / factor) * n
    weight[p] += people.residents[index] + 0.6 * people.jobs[index]
    land[p] += landCost(city.use[index], minutesAt(index)) / (factor * factor)
    if (BUILT_USES.has(city.use[index])) builtShare[p] += 1 / (factor * factor)
    if (city.corridor[index]) water[p] = 1
    const g = city.ground[index]
    if (g < low[p]) low[p] = g
    if (g > high[p]) high[p] = g
  }
  // A rough idea of what building through each 100 m square costs, before the profile is known.
  const cost = new Float32Array(count)
  let cheapest = Infinity
  for (let z = 0; z < n; z++) {
    for (let x = 0; x < n; x++) {
      const p = x + z * n
      let lo = Infinity
      let hi = -Infinity
      for (let dz = -2; dz <= 2; dz++) {
        for (let dx = -2; dx <= 2; dx++) {
          const q = Math.min(n - 1, Math.max(0, x + dx)) + Math.min(n - 1, Math.max(0, z + dz)) * n
          lo = Math.min(lo, low[q])
          hi = Math.max(hi, high[q])
        }
      }
      let c = Math.min(85 + (0.6 + 0.3 * builtShare[p]) * land[p] + 20 * builtShare[p], builtShare[p] < 0.3 ? 20 + land[p] : Infinity, 340)
      const relief = hi - lo
      if (relief > 10) c += 5 * (relief - 10)
      // Crossing between the levees is a bridge; running along inside them is out of the question.
      if (water[p]) c = 650
      // A line hugging the region's edge would serve only half a catchment.
      if ((x < 3 || z < 3 || z >= n - 3) && x < n - 3) c += 500
      cost[p] = c
      cheapest = Math.min(cheapest, c)
    }
  }
  // People within walking distance of each square: a box of ±800 m scaled to a circle's area.
  const reach = Math.round(CATCHMENT / PLAN)
  const potential = boxBlur(weight, n, reach, 1)
  const scale = Math.PI * reach * reach
  for (let p = 0; p < count; p++) potential[p] *= scale
  return { n, factor, weight, land, builtShare, water, cost, cheapest, potential, size }
}

// Share of each square's catchment that existing lines already serve.
function servedShare(prep, lines) {
  const { n } = prep
  const served = new Float32Array(n * n)
  for (const line of lines) {
    for (const station of line.stations) {
      const r = Math.ceil(CATCHMENT * 1.6 / PLAN)
      const cx = Math.floor(station.x / PLAN)
      const cz = Math.floor(station.z / PLAN)
      for (let dz = -r; dz <= r; dz++) {
        for (let dx = -r; dx <= r; dx++) {
          const x = cx + dx
          const z = cz + dz
          if (x < 0 || z < 0 || x >= n || z >= n) continue
          const d = Math.hypot(dx, dz) * PLAN
          const share = d < CATCHMENT ? 1 : Math.max(0, 1 - (d - CATCHMENT) / (CATCHMENT * 0.6))
          const p = x + z * n
          if (share > served[p]) served[p] = share
        }
      }
    }
  }
  return served
}

// Sixteen headings 22.5° apart (knight's moves fill the gaps between the eight neighbours).
const H16X = Int8Array.of(1, 2, 1, 1, 0, -1, -1, -2, -1, -2, -1, -1, 0, 1, 1, 2)
const H16Z = Int8Array.of(0, 1, 1, 2, 1, 2, 1, 1, 0, -1, -1, -2, -1, -2, -1, -1)
const H16L = Float64Array.from(H16X, (x, index) => Math.hypot(x, H16Z[index]))
export const HEADING = { EAST: 0, SOUTH: 4, WEST: 8, NORTH: 12 }

const H16C = Float64Array.from(H16X, (x, index) => x / H16L[index])
const H16S = Float64Array.from(H16Z, (z, index) => z / H16L[index])

// Least-cost corridor on the planning grid. A state is a square and one of sixteen headings;
// each step may turn by at most 22.5°, and turning costs, which keeps the path fit for a
// railway. A step costs what building there costs, a charge for passing people by, a charge
// for straying from the line's natural direction (`bearing`: radial lines fan out from the
// metropolis, orbital ones run round it) and for crowding existing lines (`avoid`).
function searchCorridor(prep, starts, goal, guide, value, { charge = 260, turn = 9, bearing, stray = 70, avoid, allowed, greed = 1.6 } = {}) {
  const { n, cost } = prep
  const states = n * n * 16
  prep.search ??= { g: new Float32Array(states), previous: new Int32Array(states), closed: new Uint8Array(states), heap: new Heap(1 << 15) }
  const { g, previous, closed, heap } = prep.search
  g.fill(Infinity)
  previous.fill(-1)
  closed.fill(0)
  heap.clear()
  // The estimate of what remains is inflated a little (a weighted A* search): the corridor found
  // costs at most `greed` times the best one, and is found far sooner.
  for (const { cell, headings } of starts) {
    for (const heading of headings) {
      const state = cell * 16 + heading
      g[state] = 0
      heap.push(state, guide(cell) * greed)
    }
  }
  while (heap.size) {
    const state = heap.pop()
    if (closed[state]) continue
    closed[state] = 1
    const cell = state >> 4
    if (goal(cell)) {
      const cells = []
      for (let at = state; at !== -1; at = previous[at]) cells.push(at >> 4)
      cells.reverse()
      // What the corridor would cost to build, and how many people it passes.
      let build = 0
      let caught = 0
      for (let index = 1; index < cells.length; index++) {
        const a = cells[index - 1]
        const b = cells[index]
        const km = Math.hypot(b % n - a % n, Math.floor(b / n) - Math.floor(a / n)) * PLAN / 1000
        build += (cost[a] + cost[b]) * 0.5 * km
        caught += value[b] * km
      }
      return { cells, cost: g[state], build, caught }
    }
    const heading = state & 15
    const x = cell % n
    const z = (cell - x) / n
    for (let turnBy = -1; turnBy <= 1; turnBy++) {
      const next = (heading + turnBy + 16) & 15
      const dx = H16X[next]
      const dz = H16Z[next]
      const nx = x + dx
      const nz = z + dz
      if (nx < 0 || nz < 0 || nx >= n || nz >= n) continue
      const to = nx + nz * n
      if (allowed && !allowed[to]) continue
      // The squares a knight's move passes between.
      const a = (x + Math.trunc(dx / 2)) + (z + Math.trunc(dz / 2)) * n
      const b = (x + dx - Math.trunc(dx / 2)) + (z + dz - Math.trunc(dz / 2)) * n
      const km = H16L[next] * PLAN / 1000
      const build = (cost[cell] + cost[a] + cost[b] + cost[to]) * 0.25
      const missed = 1 - (value[a] + value[b] + value[to] * 2) * 0.25
      let step = build * km + charge * missed * km + (turnBy ? turn : 0)
      if (bearing) step += stray * (1 - (H16C[next] * bearing.x[to] + H16S[next] * bearing.z[to])) * km
      if (avoid) step += avoid[to] * km
      const nextState = to * 16 + next
      const total = g[state] + step
      if (total < g[nextState]) {
        g[nextState] = total
        previous[nextState] = state
        heap.push(nextState, total + guide(to) * greed)
      }
    }
  }
  return null
}

// Straights joined by circular curves: each bend of the corridor gets the widest curve that fits,
// and bends that would need a curve tighter than the minimum radius are straightened out.
function fitAlignment(raw) {
  let vertices = simplify(raw, 200)
  const radiusAt = (points, index) => {
    const ax = points[index * 2 - 2]
    const az = points[index * 2 - 1]
    const bx = points[index * 2]
    const bz = points[index * 2 + 1]
    const cx = points[index * 2 + 2]
    const cz = points[index * 2 + 3]
    const l1 = Math.hypot(bx - ax, bz - az)
    const l2 = Math.hypot(cx - bx, cz - bz)
    const dot = ((bx - ax) * (cx - bx) + (bz - az) * (cz - bz)) / (l1 * l2)
    const angle = Math.acos(Math.min(1, Math.max(-1, dot)))
    if (angle < 0.004) return { radius: Infinity, angle: 0 }
    return { radius: Math.min(l1, l2) * 0.5 / Math.tan(angle / 2), angle }
  }
  for (let guard = 0; guard < 400; guard++) {
    const count = vertices.length / 2
    let worst = -1
    let worstRadius = MIN_RADIUS
    for (let index = 1; index < count - 1; index++) {
      const { radius } = radiusAt(vertices, index)
      if (radius < worstRadius) {
        worstRadius = radius
        worst = index
      }
    }
    if (worst < 0) break
    vertices = [...vertices.slice(0, worst * 2), ...vertices.slice(worst * 2 + 2)]
  }
  const count = vertices.length / 2
  const dense = [vertices[0], vertices[1]]
  const radii = [Infinity]
  const pushStraight = (x, z) => {
    const px = dense[dense.length - 2]
    const pz = dense[dense.length - 1]
    const steps = Math.max(1, Math.ceil(Math.hypot(x - px, z - pz) / SAMPLE))
    for (let step = 1; step <= steps; step++) {
      dense.push(px + (x - px) * step / steps, pz + (z - pz) * step / steps)
      radii.push(Infinity)
    }
  }
  for (let index = 1; index < count - 1; index++) {
    const { angle } = radiusAt(vertices, index)
    const bx = vertices[index * 2]
    const bz = vertices[index * 2 + 1]
    if (angle === 0) {
      pushStraight(bx, bz)
      continue
    }
    const radius = Math.min(WISH_RADIUS, radiusAt(vertices, index).radius)
    const ax = vertices[index * 2 - 2]
    const az = vertices[index * 2 - 1]
    const cx = vertices[index * 2 + 2]
    const cz = vertices[index * 2 + 3]
    const l1 = Math.hypot(bx - ax, bz - az)
    const l2 = Math.hypot(cx - bx, cz - bz)
    const d1x = (bx - ax) / l1
    const d1z = (bz - az) / l1
    const d2x = (cx - bx) / l2
    const d2z = (cz - bz) / l2
    const tangent = radius * Math.tan(angle / 2)
    const sx = bx - d1x * tangent
    const sz = bz - d1z * tangent
    pushStraight(sx, sz)
    // The centre lies to the inside of the bend.
    const right = d1x * d2z - d1z * d2x > 0 ? 1 : -1
    const ox = sx + -d1z * radius * right
    const oz = sz + d1x * radius * right
    const start = Math.atan2(sz - oz, sx - ox)
    const steps = Math.max(2, Math.ceil(radius * angle / SAMPLE))
    for (let step = 1; step <= steps; step++) {
      const a = start + right * angle * step / steps
      dense.push(ox + Math.cos(a) * radius, oz + Math.sin(a) * radius)
      radii.push(radius)
    }
  }
  pushStraight(vertices[count * 2 - 2], vertices[count * 2 - 1])
  // Even spacing along the line.
  const points = []
  const radius = []
  let carried = 0
  points.push(dense[0], dense[1])
  radius.push(radii[0])
  for (let index = 2; index < dense.length; index += 2) {
    const ax = dense[index - 2]
    const az = dense[index - 1]
    const length = Math.hypot(dense[index] - ax, dense[index + 1] - az)
    let along = SAMPLE - carried
    while (along <= length) {
      const t = along / length
      points.push(ax + (dense[index] - ax) * t, az + (dense[index + 1] - az) * t)
      radius.push(radii[index / 2])
      along += SAMPLE
    }
    carried = length - (along - SAMPLE)
  }
  return { points: Float64Array.from(points), radius: Float32Array.from(radius), length: (points.length / 2 - 1) * SAMPLE }
}

// Stations: chosen among points every 50 m by dynamic programming, to catch the most people
// with stations 0.7 to 2.8 km apart. Catchments that overlap count once.
function placeStations(alignment, prep, value, { transfers = [], inside, first = 1600, lastGap = 1600 }) {
  const { points, length } = alignment
  const step = 50
  const candidates = []
  for (let s = 250; s <= length - 100; s += step) {
    const k = Math.round(s / SAMPLE)
    const x = points[k * 2]
    const z = points[k * 2 + 1]
    if (!inside(x, z)) continue
    const p = Math.min(prep.n - 1, Math.floor(x / PLAN)) + Math.min(prep.n - 1, Math.floor(z / PLAN)) * prep.n
    if (prep.water[p]) continue
    let worth = value(x, z)
    for (const t of transfers) if (Math.hypot(t.x - x, t.z - z) < 350) worth += 60000
    candidates.push({ s, x, z, worth })
  }
  if (!candidates.length) return []
  const best = new Float64Array(candidates.length).fill(-Infinity)
  const from = new Int32Array(candidates.length).fill(-1)
  const charge = 9500
  const opening = Math.max(first, candidates[0].s + 200)
  for (let j = 0; j < candidates.length; j++) {
    if (candidates[j].s <= opening) best[j] = candidates[j].worth - charge
    for (let i = j - 1; i >= 0; i--) {
      const gap = candidates[j].s - candidates[i].s
      if (gap < 800) continue
      if (gap > 2800) break
      if (best[i] === -Infinity) continue
      const overlap = Math.min(candidates[i].worth, candidates[j].worth) * Math.max(0, 1 - gap / (CATCHMENT * 2)) * 0.6
      const total = best[i] + candidates[j].worth - charge - overlap
      if (total > best[j]) {
        best[j] = total
        from[j] = i
      }
    }
  }
  // The last station near the far edge if one can be, otherwise as far out as the chain reaches.
  let end = -1
  for (let j = 0; j < candidates.length; j++) {
    if (best[j] === -Infinity || candidates[j].s < length - lastGap) continue
    if (end < 0 || best[j] > best[end]) end = j
  }
  if (end < 0) {
    for (let j = 0; j < candidates.length; j++) {
      if (best[j] > -Infinity && (end < 0 || candidates[j].s > candidates[end].s)) end = j
    }
  }
  const chosen = []
  for (let j = end; j >= 0; j = from[j]) chosen.push(candidates[j])
  return chosen.reverse()
}

// Sites along the line every 20 m: ground height and what a structure there must deal with.
function sitesAlong(alignment, terrain, city, majorIndex) {
  const { points } = alignment
  const { columns, cell, river, valleyS } = terrain
  const samples = points.length / 2
  const ground = new Float32Array(samples)
  const sites = []
  const grid40 = columns / 2
  for (let k = 0; k < samples; k++) {
    const x = points[k * 2]
    const z = points[k * 2 + 1]
    const cx = Math.min(columns - 1, Math.max(0, Math.floor(x / cell)))
    const cz = Math.min(columns - 1, Math.max(0, Math.floor(z / cell)))
    const index = cx + cz * columns
    const g = bilinear(city.ground, columns, cell, x, z)
    ground[k] = g
    const use = city.use[index]
    const minutes = city.travel[(cx >> 1) + (cz >> 1) * grid40]
    const crowded = use === USE.COMMERCIAL || use === USE.HIGH || use === USE.MID ? 1 : use === USE.DENSE ? 0.8 : 0.6
    const site = { use, built: BUILT_USES.has(use), land: landCost(use, minutes), crowded, river: false, clearance: 0, road: false }
    if (city.corridor[index]) {
      site.river = true
      // Over the levee crests with room for the girders.
      site.clearance = riverAlong(river.level, valleyS[index]) + 9.5 - g
    }
    sites.push(site)
  }
  // Where the line crosses a big road.
  for (let k = 1; k < samples; k++) {
    const ax = points[k * 2 - 2]
    const az = points[k * 2 - 1]
    const bx = points[k * 2]
    const bz = points[k * 2 + 1]
    majorIndex.near((ax + bx) / 2, (az + bz) / 2, 30, (segment) => {
      if (segment.data < ROAD.COLLECTOR) return
      if (crossing(ax, az, bx, bz, segment.ax, segment.az, segment.bx, segment.bz)) {
        for (const j of [k - 1, k]) sites[j].road = true
      }
    })
  }
  return { ground, sites }
}

// The cheapest vertical profile within the gradient limit, level through stations.
function profileLine(alignment, stations, siteInfo) {
  const { ground, sites } = siteInfo
  const samples = ground.length
  let lowest = Infinity
  let highest = -Infinity
  for (const g of ground) {
    lowest = Math.min(lowest, g)
    highest = Math.max(highest, g)
  }
  const base = Math.floor((lowest - 40) / LEVEL)
  const levels = Math.ceil((highest + 32) / LEVEL) - base + 1
  const maxStep = Math.round(MAX_GRADE * SAMPLE / LEVEL)
  const slopes = maxStep * 2 + 1
  const flat = new Uint8Array(samples)
  const stationAt = new Int8Array(samples)
  for (const station of stations) {
    const k = Math.round(station.s / SAMPLE)
    stationAt[Math.min(samples - 1, k)] = 1
    for (let j = Math.max(0, k - 5); j <= Math.min(samples - 1, k + 5); j++) flat[j] = 1
  }
  const width = levels * slopes
  let current = new Float64Array(width).fill(Infinity)
  let next = new Float64Array(width)
  const back = new Int8Array(samples * width)
  const sampleCost = (k, level) => {
    const h = (base + level) * LEVEL - ground[k]
    const site = sites[k]
    const structure = structureFor(h, site)
    if (structure < 0) return Infinity
    let cost = structureCost(structure, h, site) * SAMPLE / 1000
    if (stationAt[k]) cost += STATION_COST[structure] || 80
    return cost
  }
  for (let level = 0; level < levels; level++) {
    const cost = sampleCost(0, level)
    for (let slope = 0; slope < slopes; slope++) current[level * slopes + slope] = cost
  }
  for (let k = 1; k < samples; k++) {
    next.fill(Infinity)
    for (let level = 0; level < levels; level++) {
      const cost = sampleCost(k, level)
      if (cost === Infinity) continue
      for (let slope = -maxStep; slope <= maxStep; slope++) {
        if (flat[k] && slope !== 0) continue
        const from = level - slope
        if (from < 0 || from >= levels) continue
        let best = Infinity
        let arg = 0
        for (let before = Math.max(-maxStep, slope - 1); before <= Math.min(maxStep, slope + 1); before++) {
          const value = current[from * slopes + before + maxStep] + (before !== slope ? 0.04 : 0)
          if (value < best) {
            best = value
            arg = before
          }
        }
        if (best === Infinity) continue
        const state = level * slopes + slope + maxStep
        next[state] = best + cost
        back[k * width + state] = arg + maxStep
      }
    }
    const swap = current
    current = next
    next = swap
  }
  let bestState = -1
  let bestCost = Infinity
  for (let state = 0; state < width; state++) {
    if (current[state] < bestCost) {
      bestCost = current[state]
      bestState = state
    }
  }
  const rail = new Float32Array(samples)
  const structure = new Uint8Array(samples)
  if (bestState < 0) return null
  let state = bestState
  for (let k = samples - 1; k >= 0; k--) {
    const level = Math.floor(state / slopes)
    const slope = (state % slopes) - maxStep
    rail[k] = (base + level) * LEVEL
    if (k > 0) {
      const before = back[k * width + state] - maxStep
      state = (level - slope) * slopes + before + maxStep
    }
  }
  for (let k = 0; k < samples; k++) structure[k] = Math.max(0, structureFor(rail[k] - ground[k], sites[k]))
  return { rail, ground, structure, cost: bestCost }
}

// Totals for a line: lengths and costs by structure, land, displaced buildings, gradients.
function summarize(line, siteInfo, terrain) {
  const { profile } = line
  const samples = profile.rail.length
  const byStructure = STRUCTURE_NAMES.map((name) => ({ name, length: 0, cost: 0 }))
  let buildings = 0
  let landCostTotal = 0
  let steepest = 0
  for (let k = 0; k < samples; k++) {
    const site = siteInfo.sites[k]
    const h = profile.rail[k] - profile.ground[k]
    const structure = profile.structure[k]
    const cost = structureCost(structure, h, site) * SAMPLE / 1000
    byStructure[structure].length += SAMPLE
    byStructure[structure].cost += cost
    const strip = STRIP[structure]
    if (strip) {
      buildings += (BUILDINGS_PER_HA[site.use] ?? 0) * strip * SAMPLE / 10000
      landCostTotal += site.land * SAMPLE / 1000 * strip / 15
    }
    if (k > 0) steepest = Math.max(steepest, Math.abs(profile.rail[k] - profile.rail[k - 1]) / SAMPLE)
  }
  let stationCost = 0
  for (const station of line.stations) {
    const k = Math.min(samples - 1, Math.round(station.s / SAMPLE))
    station.structure = profile.structure[k]
    station.height = profile.rail[k] - profile.ground[k]
    stationCost += STATION_COST[station.structure] || 80
  }
  const civil = byStructure.reduce((sum, entry) => sum + entry.cost, 0) + stationCost
  // Difficulty of each 200 m stretch, 1 (easy) to 5 (very hard), from its cost per km.
  const difficulty = []
  for (let k = 0; k < samples; k += 10) {
    let sum = 0
    let n = 0
    for (let j = k; j < Math.min(samples, k + 10); j++) {
      sum += structureCost(profile.structure[j], profile.rail[j] - profile.ground[j], siteInfo.sites[j])
      n++
    }
    const perKm = sum / n
    difficulty.push(perKm < 60 ? 1 : perKm < 120 ? 2 : perKm < 200 ? 3 : perKm < 300 ? 4 : 5)
  }
  return {
    byStructure, buildings: Math.round(buildings), land: landCostTotal, stations: stationCost,
    civil, total: civil * OVERHEAD, steepest, difficulty,
  }
}

// Running time between stations from the curves on the way (speed limited to about
// 4.4 √R km/h) plus what each stop costs.
function runTimes(line) {
  const { radius } = line.alignment
  const times = []
  for (let index = 1; index < line.stations.length; index++) {
    const a = Math.round(line.stations[index - 1].s / SAMPLE)
    const b = Math.round(line.stations[index].s / SAMPLE)
    let minutes = 0
    for (let k = a; k < b; k++) {
      const speed = Math.min(CRUISE, 4.4 * Math.sqrt(radius[k] || Infinity))
      minutes += SAMPLE / 1000 / speed * 60
    }
    times.push(minutes + STOP_LOSS)
  }
  return times
}

// Ridership and benefit of a whole network. People choose between rail and road for each
// trip by a logit model of door-to-door times; time saved is the benefit.
export function evaluateNetwork(lines, demand, metropolis, { keepFlows = false } = {}) {
  const { zones, trips, roadTime, distance, size: N, metropolisIndex: M } = demand
  const Z = zones.count
  const stations = []
  for (const line of lines) {
    line.stations.forEach((station, index) => stations.push({ line, index, x: station.x, z: station.z }))
  }
  const S = stations.length
  const node = new Map()
  stations.forEach((station, id) => node.set(station.line.id + ':' + station.index, id))
  const metro = S
  const edges = Array.from({ length: S + 1 }, () => [])
  const addEdge = (a, b, minutes, kind, line, section) => {
    edges[a].push({ to: b, minutes, kind, line, section })
  }
  for (const line of lines) {
    const times = runTimes(line)
    for (let index = 1; index < line.stations.length; index++) {
      const a = node.get(line.id + ':' + (index - 1))
      const b = node.get(line.id + ':' + index)
      addEdge(a, b, times[index - 1], 'ride', line, index - 1)
      addEdge(b, a, times[index - 1], 'ride', line, index - 1)
    }
    if (line.kind === 'radial') {
      const first = line.stations[0]
      const km = (first.s + Math.hypot(metropolis.x - line.alignment.points[0], metropolis.z - line.alignment.points[1])) / 1000
      const a = node.get(line.id + ':0')
      addEdge(a, metro, km / 55 * 60 + 2, 'ride', line, -1)
      addEdge(metro, a, km / 55 * 60 + 2, 'ride', line, -1)
    }
  }
  for (let a = 0; a < S; a++) {
    for (let b = 0; b < S; b++) {
      if (stations[a].line === stations[b].line) continue
      const d = Math.hypot(stations[a].x - stations[b].x, stations[a].z - stations[b].z)
      if (d < 450) addEdge(a, b, 4 + d / 80, 'transfer')
    }
  }
  // Getting to and from stations: walking within 1.2 km, otherwise a feeder bus (with its wait).
  const reach = []
  for (let zone = 0; zone < Z; zone++) {
    const near = []
    for (let id = 0; id < S; id++) {
      const d = Math.hypot(stations[id].x - zones.x[zone], stations[id].z - zones.z[zone])
      if (d < 2800) near.push({ id, minutes: (d < 1200 ? d * 1.25 / 80 : 8 + d * 1.3 / 250) + 2.5 })
    }
    near.sort((a, b) => a.minutes - b.minutes)
    reach.push(near.slice(0, 4))
  }
  const boardings = new Float64Array(S)
  const sectionLoad = new Map(lines.map((line) => [line, new Float64Array(Math.max(1, line.stations.length))]))
  let railTrips = 0
  let saved = 0
  let passengerKm = 0
  const theta = 0.11
  const bias = 0.3
  const time = new Float64Array(S + 1)
  const via = new Array(S + 1)
  const heap = new Heap(64)
  const order = []
  for (let origin = 0; origin < Z; origin++) {
    if (!reach[origin].length) continue
    time.fill(Infinity)
    via.fill(null)
    heap.clear()
    order.length = 0
    for (const { id, minutes } of reach[origin]) {
      time[id] = minutes
      heap.push(id, minutes)
    }
    const done = new Uint8Array(S + 1)
    while (heap.size) {
      const at = heap.pop()
      if (done[at]) continue
      done[at] = 1
      order.push(at)
      for (const edge of edges[at]) {
        const value = time[at] + edge.minutes
        if (value < time[edge.to]) {
          time[edge.to] = value
          via[edge.to] = { from: at, edge }
          heap.push(edge.to, value)
        }
      }
    }
    const arrive = new Float64Array(S + 1)
    for (let destination = 0; destination < N; destination++) {
      if (destination === origin) continue
      const all = trips[origin * N + destination]
      if (all <= 0) continue
      const motor = all * (1 - activeShare(distance[origin * N + destination]))
      if (motor < 0.01) continue
      let railMinutes = Infinity
      let exit = -1
      if (destination === M) {
        railMinutes = time[metro] + 6
        exit = metro
      } else {
        for (const { id, minutes } of reach[destination]) {
          if (time[id] + minutes < railMinutes) {
            railMinutes = time[id] + minutes
            exit = id
          }
        }
      }
      if (exit < 0 || railMinutes === Infinity) continue
      const roadMinutes = roadTime[origin * N + destination] + 4
      const utilityRail = -theta * railMinutes - bias
      const utilityRoad = -theta * roadMinutes
      const top = Math.max(utilityRail, utilityRoad)
      const sum = Math.exp(utilityRail - top) + Math.exp(utilityRoad - top)
      const share = Math.exp(utilityRail - top) / sum
      const logsum = -(top + Math.log(sum)) / theta
      saved += motor * Math.max(0, roadMinutes - logsum)
      const riders = motor * share
      railTrips += riders
      arrive[exit] += riders
    }
    // Carry the riders back along the tree to where they boarded.
    for (let index = order.length - 1; index >= 0; index--) {
      const at = order[index]
      const load = arrive[at]
      if (!load) continue
      const step = via[at]
      if (!step) {
        boardings[at] += load
        continue
      }
      arrive[step.from] += load
      if (step.edge.kind === 'ride') {
        const loads = sectionLoad.get(step.edge.line)
        const section = step.edge.section
        if (section >= 0) {
          loads[section] += load
          const line = step.edge.line
          passengerKm += load * (line.stations[section + 1].s - line.stations[section].s) / 1000
        } else passengerKm += load * step.edge.minutes / 60 * 55
      } else if (step.edge.kind === 'transfer') boardings[step.edge.to] += load
    }
  }
  // Both directions of the day count.
  const perLine = new Map()
  for (const line of lines) {
    const loads = sectionLoad.get(line).map((value) => value * 2)
    let riders = 0
    const stationBoardings = line.stations.map((station, index) => {
      const value = boardings[node.get(line.id + ':' + index)] * 2
      riders += value
      return value
    })
    perLine.set(line, { riders, loads, stationBoardings, maxLoad: Math.max(0, ...loads) })
  }
  // Benefits, as railway appraisals in Japan count them: the time users save, and the
  // operator's margin on the fares.
  const userBenefit = saved * 2 * VALUE_OF_TIME * 365 * PRESENT_VALUE / 1e8
  const operatorBenefit = railTrips * 2 * OPERATING_MARGIN * 365 * PRESENT_VALUE / 1e8
  return {
    railTrips: railTrips * 2,
    passengerKm: passengerKm * 2,
    savedMinutes: saved * 2,
    userBenefit,
    operatorBenefit,
    benefit: userBenefit + operatorBenefit,
    perLine,
  }
}

export function planRailways(terrain, city, people, demand, { seed = 1, radials = 6, orbitals = 2, debug } = {}, progress = () => {}) {
  const { size } = terrain
  const prep = prepare(terrain, city, people)
  const { n } = prep
  const namer = createNamer(seed + 900)
  const majorIndex = segmentIndex(size, 200)
  for (const link of city.roads.links) {
    for (let k = 2; k < link.points.length; k += 2) {
      majorIndex.add(link.points[k - 2], link.points[k - 1], link.points[k], link.points[k + 1], link.kind)
    }
  }
  const inside = (x, z) => x > 60 && z > 60 && x < size - 60 && z < size - 60
  const valueAt = (field) => (x, z) => {
    const p = Math.min(n - 1, Math.max(0, Math.floor(x / PLAN))) + Math.min(n - 1, Math.max(0, Math.floor(z / PLAN))) * n
    return field[p]
  }
  const lines = []
  let network = { benefit: 0 }
  let reference = 0
  {
    const sorted = Array.from(prep.potential).sort((a, b) => a - b)
    reference = sorted[Math.floor(sorted.length * 0.97)]
  }

  function design(path, kind, served) {
    const raw = []
    for (const cell of path.cells) raw.push((cell % n + 0.5) * PLAN, (Math.floor(cell / n) + 0.5) * PLAN)
    // Run the ends out to the region's edge, where the line carries on.
    const extend = (ix, iz, jx, jz) => {
      const dx = ix - jx
      const dz = iz - jz
      const length = Math.hypot(dx, dz) || 1
      let t = 0
      while (t < 600 && inside(ix + dx / length * (t + 20), iz + dz / length * (t + 20))) t += 20
      return [ix + dx / length * t, iz + dz / length * t]
    }
    const head = extend(raw[0], raw[1], raw[2], raw[3])
    const tail = extend(raw[raw.length - 2], raw[raw.length - 1], raw[raw.length - 4], raw[raw.length - 3])
    raw.splice(0, 2, head[0], head[1])
    raw.splice(raw.length - 2, 2, tail[0], tail[1])
    const alignment = fitAlignment(raw)
    const unserved = new Float32Array(prep.potential.length)
    for (let p = 0; p < unserved.length; p++) unserved[p] = prep.potential[p] * (1 - 0.85 * served[p])
    const transfers = lines.flatMap((line) => line.stations)
    const stations = placeStations(alignment, prep, valueAt(unserved), { transfers, inside })
    if (stations.length < 3) {
      debug?.('too few stations', stations.length, alignment.length)
      return null
    }
    const siteInfo = sitesAlong(alignment, terrain, city, majorIndex)
    const line = { id: lines.length, kind, alignment, stations }
    const profile = profileLine(alignment, stations, siteInfo)
    if (!profile) {
      debug?.('no profile', alignment.length)
      return null
    }
    line.profile = profile
    line.cost = summarize(line, siteInfo, terrain)
    return line
  }

  // Directions lines like to keep: radial lines fan out from the metropolis, orbital lines run
  // round it (southwards, the way they are searched).
  const metropolis = city.metropolis
  const radialX = new Float32Array(n * n)
  const radialZ = new Float32Array(n * n)
  const roundX = new Float32Array(n * n)
  const roundZ = new Float32Array(n * n)
  for (let p = 0; p < n * n; p++) {
    const dx = (p % n + 0.5) * PLAN - metropolis.x
    const dz = (Math.floor(p / n) + 0.5) * PLAN - metropolis.z
    const length = Math.hypot(dx, dz)
    radialX[p] = dx / length
    radialZ[p] = dz / length
    const sign = dx / length > 0 ? 1 : -1
    roundX[p] = -dz / length * sign
    roundZ[p] = dx / length * sign
    if (roundZ[p] < 0) {
      roundX[p] = -roundX[p]
      roundZ[p] = -roundZ[p]
    }
  }
  // New lines keep clear of existing ones, except where they cross: two lines closer than
  // two catchments compete for the same passengers.
  const crowding = () => {
    const field = new Float32Array(n * n)
    const reach = 1500
    const r = Math.ceil(reach / PLAN)
    for (const line of lines) {
      const points = line.alignment.points
      for (let k = 0; k < points.length; k += 10) {
        const cx = Math.floor(points[k] / PLAN)
        const cz = Math.floor(points[k + 1] / PLAN)
        for (let dz = -r; dz <= r; dz++) {
          for (let dx = -r; dx <= r; dx++) {
            const x = cx + dx
            const z = cz + dz
            if (x < 0 || z < 0 || x >= n || z >= n) continue
            const d = Math.hypot(dx, dz) * PLAN
            if (d < reach) field[x + z * n] = Math.max(field[x + z * n], 180 * (1 - d / reach))
          }
        }
      }
    }
    return field
  }
  // A commuter from further out saves more time by train, so the far parts of a radial line
  // are worth more per resident.
  const farther = (p) => 0.55 + Math.hypot((p % n + 0.5) * PLAN - metropolis.x, (Math.floor(p / n) + 0.5) * PLAN - metropolis.z) / 30000

  // Radial lines leave the metropolis along rays a few degrees apart. Each candidate enters the
  // region where its ray does and must leave near where the ray leaves, but may bend in between
  // towards the people it can serve.
  const rays = []
  {
    const margin = 150
    for (let degrees = 92; degrees <= 268; degrees += 5) {
      const angle = degrees * Math.PI / 180
      const dx = Math.cos(angle)
      const dz = Math.sin(angle)
      let enter = -Infinity
      let leave = Infinity
      for (const [origin, direction] of [[metropolis.x, dx], [metropolis.z, dz]]) {
        if (Math.abs(direction) < 1e-9) {
          if (origin < margin || origin > size - margin) enter = Infinity
          continue
        }
        const a = (margin - origin) / direction
        const b = (size - margin - origin) / direction
        enter = Math.max(enter, Math.min(a, b))
        leave = Math.min(leave, Math.max(a, b))
      }
      if (!(leave - enter > size * 0.45)) continue
      const ray = {
        angle,
        enter: { x: metropolis.x + dx * enter, z: metropolis.z + dz * enter },
        exit: { x: metropolis.x + dx * leave, z: metropolis.z + dz * leave },
        heading: ((Math.round(Math.atan2(dz, dx) / (Math.PI / 8)) % 16) + 16) % 16,
      }
      // The line may wander up to 3.5 km either side of its ray, no further.
      ray.allowed = new Uint8Array(n * n)
      for (let p = 0; p < n * n; p++) {
        const x = (p % n + 0.5) * PLAN
        const z = (Math.floor(p / n) + 0.5) * PLAN
        const { squared } = segmentDistance(x, z, ray.enter.x, ray.enter.z, ray.exit.x, ray.exit.z)
        if (squared < 3500 * 3500) ray.allowed[p] = 1
      }
      rays.push(ray)
    }
  }
  const angles = []
  for (let round = 0; round < radials; round++) {
    const served = servedShare(prep, lines)
    const value = new Float32Array(prep.potential.length)
    for (let p = 0; p < value.length; p++) value[p] = Math.min(1, prep.potential[p] * (1 - 0.85 * served[p]) * farther(p) / reference)
    const avoid = crowding()
    const options = []
    for (const ray of rays) {
      if (angles.some((angle) => Math.abs(angle - ray.angle) < 0.13)) continue
      const start = Math.floor(ray.enter.x / PLAN) + Math.floor(ray.enter.z / PLAN) * n
      const goal = (cell) => {
        const x = (cell % n + 0.5) * PLAN
        const z = (Math.floor(cell / n) + 0.5) * PLAN
        return Math.hypot(x - ray.exit.x, z - ray.exit.z) < 1500 && (x < 700 || z < 700 || z > size - 700 || x > size - 700)
      }
      const guide = (cell) => Math.max(0, Math.hypot((cell % n + 0.5) * PLAN - ray.exit.x, (Math.floor(cell / n) + 0.5) * PLAN - ray.exit.z) - 1500) / 1000 * prep.cheapest
      const headings = [(ray.heading + 15) % 16, ray.heading, (ray.heading + 1) % 16]
      const path = searchCorridor(prep, [{ cell: start, headings }], goal, guide, value, { bearing: { x: radialX, z: radialZ }, stray: 120, avoid, allowed: ray.allowed })
      if (!path) continue
      options.push({ path, ray, z: ray.enter.z, score: path.caught / path.build })
    }
    options.sort((a, b) => b.score - a.score)
    debug?.('radial options', options.map((o) => `${Math.round(o.ray.angle * 180 / Math.PI)}°:${o.score.toFixed(4)}`).join(' '))
    let chosen = null
    for (const option of options.slice(0, 3)) {
      const line = design(option.path, 'radial', served)
      if (!line) {
        debug?.('radial design failed', option.path.cells.length)
        continue
      }
      line.id = lines.length
      const trial = evaluateNetwork([...lines, line], demand, city.metropolis)
      const gain = trial.benefit - network.benefit
      const ratio = gain / line.cost.total
      debug?.('radial option', Math.round(option.ray.angle * 180 / Math.PI), 'km', (line.alignment.length / 1000).toFixed(1), 'stations', line.stations.length, 'cost', Math.round(line.cost.total), 'gain', Math.round(gain), 'B/C', ratio.toFixed(2))
      if (!chosen || ratio > chosen.ratio) chosen = { line, trial, gain, ratio, angle: option.ray.angle }
    }
    debug?.('radial round', round, 'options', options.length)
    progress('鉄道路線の検討 ' + (round + 1), 0.1 + 0.6 * (round + 1) / radials)
    if (!chosen || chosen.ratio < 1) break
    chosen.line.marginal = { benefit: chosen.gain, ratio: chosen.ratio }
    lines.push(chosen.line)
    angles.push(chosen.angle)
    network = chosen.trial
  }

  // Orbital lines link the radials across the region, north to south.
  for (let round = 0; round < orbitals && lines.length >= 2; round++) {
    const served = servedShare(prep, lines)
    const value = new Float32Array(prep.potential.length)
    for (let p = 0; p < value.length; p++) value[p] = Math.min(1, prep.potential[p] * (1 - 0.6 * served[p]) / reference)
    // Being near a radial station (a transfer) is worth a lot to an orbital line.
    for (const line of lines) {
      for (const station of line.stations) {
        const cx = Math.floor(station.x / PLAN)
        const cz = Math.floor(station.z / PLAN)
        for (let dz = -3; dz <= 3; dz++) {
          for (let dx = -3; dx <= 3; dx++) {
            const x = cx + dx
            const z = cz + dz
            if (x < 0 || z < 0 || x >= n || z >= n) continue
            value[x + z * n] = Math.min(1, value[x + z * n] + 0.5 * Math.max(0, 1 - Math.hypot(dx, dz) / 3.5))
          }
        }
      }
    }
    const existing = lines.filter((line) => line.kind === 'orbital').map((line) => line.alignment.points[0])
    const avoid = crowding()
    const options = []
    for (let x = size * 0.3; x <= size * 0.85; x += 1500) {
      if (existing.some((other) => Math.abs(other - x) < 4000)) continue
      const start = Math.floor(x / PLAN)
      const goal = (cell) => Math.floor(cell / n) * PLAN > size - 900
      const guide = (cell) => Math.max(0, size - 900 - Math.floor(cell / n) * PLAN) / 1000 * prep.cheapest
      const path = searchCorridor(prep, [{ cell: start, headings: [2, 3, 4, 5, 6] }], goal, guide, value, { charge: 200, bearing: { x: roundX, z: roundZ }, stray: 150, avoid })
      if (!path) continue
      options.push({ path, score: path.caught / path.build })
    }
    options.sort((a, b) => b.score - a.score)
    let chosen = null
    for (const option of options.slice(0, 2)) {
      const line = design(option.path, 'orbital', served)
      if (!line) continue
      line.id = lines.length
      const trial = evaluateNetwork([...lines, line], demand, city.metropolis)
      const gain = trial.benefit - network.benefit
      const ratio = gain / line.cost.total
      if (!chosen || ratio > chosen.ratio) chosen = { line, trial, gain, ratio }
    }
    progress('環状路線の検討 ' + (round + 1), 0.75 + 0.15 * (round + 1) / orbitals)
    if (!chosen || chosen.ratio < 1) break
    chosen.line.marginal = { benefit: chosen.gain, ratio: chosen.ratio }
    lines.push(chosen.line)
    network = chosen.trial
  }

  // Names, colours and the final numbers.
  const final = lines.length ? evaluateNetwork(lines, demand, city.metropolis) : { perLine: new Map(), railTrips: 0, benefit: 0, passengerKm: 0, savedMinutes: 0 }
  const kindOf = (x, z) => {
    const index = Math.floor(x / terrain.cell) + Math.floor(z / terrain.cell) * terrain.columns
    const land = terrain.land[index]
    if (land === LAND.LOWLAND || land === LAND.CHANNEL) return 'river'
    if (land === LAND.HILLS) return 'hills'
    if (terrain.hand[index] < 2.5) return 'valley'
    return 'plateau'
  }
  const lineNames = new Set()
  lines.forEach((line, index) => {
    line.id = index
    line.color = LINE_COLORS[index % LINE_COLORS.length]
    for (const station of line.stations) {
      const shared = lines.slice(0, index).flatMap((other) => other.stations).find((other) => Math.hypot(other.x - station.x, other.z - station.z) < 450)
      station.name = shared ? shared.name : namer(station.x, station.z, kindOf(station.x, station.z))
      station.transfer = Boolean(shared)
    }
    // A line is named after its far end, or failing that after a station further in.
    const suffix = line.kind === 'orbital' ? '環状線' : '線'
    const stem = (name) => name.replace(/(ヶ丘|河原|尾根|本町|台|原|野|谷|沢|窪|下|川|島|瀬|浜|丘|山|坂|宿|町|辻)$/, '') || name
    for (let index = line.stations.length - 1; index >= 0; index--) {
      line.name = stem(line.stations[index].name) + suffix
      if (!lineNames.has(line.name)) break
    }
    lineNames.add(line.name)
    const stats = final.perLine.get(line)
    line.riders = stats?.riders ?? 0
    line.loads = stats?.loads ?? []
    line.maxLoad = stats?.maxLoad ?? 0
    line.stations.forEach((station, i) => { station.boardings = stats?.stationBoardings[i] ?? 0 })
    line.length = line.alignment.length
    line.runMinutes = runTimes(line).reduce((sum, value) => sum + value, 0)
  })
  for (const line of lines) {
    line.transfers = line.stations.filter((station) => lines.some((other) => other !== line && other.stations.some((o) => o.name === station.name))).length
  }
  const totalCost = lines.reduce((sum, line) => sum + line.cost.total, 0)
  progress('鉄道路線の決定', 1)
  return {
    lines,
    network: { ...final, perLine: undefined, cost: totalCost, ratio: totalCost ? final.benefit / totalCost : 0 },
    costSurface: prep.cost,
    potential: prep.potential,
    planCell: PLAN,
    planColumns: n,
  }
}
