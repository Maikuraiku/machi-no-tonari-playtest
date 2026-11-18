// People settle and rebuild the land era by era. In the Edo period highways leave the metropolis
// beyond the east edge, and hamlets sit on dry ground above the paddies of the valley floors.
// From the 1920s the river gets levees, arterial and ring roads are built and the city spreads
// outwards from the metropolis; parts of the hills are graded into new towns, and the streams
// that run through built-up land are put into culverts.
import { chaikin, lengthOf, simplify } from './geometry.js'
import { boxBlur, costField, createPathFinder, distanceField, downsample, rasterizeLine, threshold } from './grid.js'
import { fbm, random, unit } from './noise.js'
import { LAND, riverAlong } from './terrain.js'

export const USE = {
  WATER: 0, RIVERBED: 1, FOREST: 2, GREEN: 3, FIELD: 4, PADDY: 5, PARK: 6,
  LOW: 7, DENSE: 8, MID: 9, HIGH: 10, COMMERCIAL: 11, INDUSTRIAL: 12, PUBLIC: 13,
}
export const BUILT_USES = new Set([USE.LOW, USE.DENSE, USE.MID, USE.HIGH, USE.COMMERCIAL, USE.INDUSTRIAL, USE.PUBLIC])

export const ROAD = { STREET: 1, COLLECTOR: 2, ARTERIAL: 3, TRUNK: 4 }
export const ROAD_WIDTH = [0, 5, 11, 20, 27] // metres from edge to edge, pavements included

// The years the simulation steps through. `built` stores an index into this list (0: never).
export const ERAS = [0, 1700, 1925, 1940, 1955, 1965, 1975, 1990, 2005, 2020]
const ERA = Object.fromEntries(ERAS.map((year, index) => [year, index]))
// Share of the buildable land that is built on by each year.
const GROWTH = [[1925, 0.07], [1940, 0.16], [1955, 0.31], [1965, 0.48], [1975, 0.64], [1990, 0.76], [2005, 0.82], [2020, 0.86]]

// Roads are planned as paths between the cells of a 40 m grid. Paths that share cells share
// road, and crossings always meet at a cell, so the network stays connected and planar.
function createRoadNetwork(grid) {
  const cells = grid * grid
  const kindAt = new Uint8Array(cells)
  const eraAt = new Uint8Array(cells)
  const edges = new Map()
  const key = (a, b) => (a < b ? a * cells + b : b * cells + a)
  function link(a, b, kind, era) {
    const k = key(a, b)
    const existing = edges.get(k)
    if (existing) {
      if (kind > existing.kind) existing.kind = kind
      return
    }
    edges.set(k, { a: Math.min(a, b), b: Math.max(a, b), kind, era })
  }
  function mark(cell, kind, era) {
    if (kindAt[cell] < kind) kindAt[cell] = kind
    if (!eraAt[cell]) eraAt[cell] = era
  }
  return {
    kindAt, eraAt, edges,
    add(path, kind, era) {
      if (!path || path.length < 2) return
      for (let index = 1; index < path.length; index++) {
        const a = path[index - 1]
        const b = path[index]
        const ax = a % grid
        const az = (a - ax) / grid
        const bx = b % grid
        const bz = (b - bx) / grid
        if (ax !== bx && az !== bz) {
          // Crossing another diagonal? Turn the corner through a cell of that road instead.
          const corner = bx + az * grid
          if (edges.has(key(corner, ax + bz * grid))) {
            link(a, corner, kind, era)
            link(corner, b, kind, era)
            mark(corner, kind, era)
            continue
          }
        }
        link(a, b, kind, era)
      }
      for (const cell of path) mark(cell, kind, era)
    },
  }
}

// Splits the network into runs between junctions and smooths each run into a curve.
function roadLinks(network, grid, step) {
  const adjacency = new Map()
  for (const edge of network.edges.values()) {
    for (const end of [edge.a, edge.b]) {
      let list = adjacency.get(end)
      if (!list) adjacency.set(end, list = [])
      list.push(edge)
    }
  }
  const nodeIds = new Map()
  const nodes = []
  const nodeOf = (cell) => {
    let id = nodeIds.get(cell)
    if (id === undefined) {
      id = nodes.length / 2
      nodeIds.set(cell, id)
      nodes.push((cell % grid + 0.5) * step, (Math.floor(cell / grid) + 0.5) * step)
    }
    return id
  }
  const junction = (cell) => {
    const list = adjacency.get(cell)
    return list.length !== 2 || list[0].kind !== list[1].kind
  }
  const used = new Set()
  const links = []
  function walk(start, first) {
    const cells = [start]
    let edge = first
    let at = start
    const era = first.era
    for (;;) {
      used.add(edge)
      at = edge.a === at ? edge.b : edge.a
      cells.push(at)
      if (junction(at) || at === start) break
      const next = adjacency.get(at).find((other) => other !== edge && !used.has(other))
      if (!next) break
      edge = next
    }
    const raw = []
    for (const cell of cells) raw.push((cell % grid + 0.5) * step, (Math.floor(cell / grid) + 0.5) * step)
    // Old lanes keep their small wanderings; engineered roads run in long straights and curves.
    const tolerance = first.era <= ERA[1700] && first.kind < ROAD.TRUNK ? 22 : 45
    const points = chaikin(simplify(raw, tolerance), 3)
    links.push({ from: nodeOf(start), to: nodeOf(at), kind: first.kind, era, points: Float64Array.from(points), length: lengthOf(points) })
  }
  for (const [cell, list] of adjacency) {
    if (!junction(cell)) continue
    for (const edge of list) if (!used.has(edge)) walk(cell, edge)
  }
  for (const [cell, list] of adjacency) {
    for (const edge of list) if (!used.has(edge)) walk(cell, edge)
  }
  return { nodes: Float64Array.from(nodes), links }
}

// Edo-period settlements, in metres. Old villages (古村) string out along the edge of a valley
// floor, on the dry ground just above their paddies; post towns (宿場) line a highway with town
// lots on both sides; new-field villages (新田) line a road across the dry plateau.
const VALLEY_VILLAGE = { reach: 110, length: [450, 950] } // band above the paddy edge; extent along it
const POST_TOWN = { depth: 42, length: [500, 1100], apart: 4000, near: 220 } // lot depth each side of the highway
const FIELD_VILLAGES = { count: 5, dry: 900, apart: 3500, depth: 60, length: [1200, 2200] }

const lerp = ([low, high], t) => low + (high - low) * t

// Where the houses of each Edo-period settlement stand, on the 20 m grid. Gives each village
// its kind ('valley', 'post' or 'field') on the way.
function settlementShapes({ villages, roads, grid, columns, cell, count, slope, hand, land, corridor, seed, toHighway }) {
  const mask = new Uint8Array(count)
  // The roads of the day, from the 40 m planning grid.
  const roadMask = new Uint8Array(count)
  const trunkMask = new Uint8Array(count)
  for (let c = 0; c < grid * grid; c++) {
    const kind = roads.kindAt[c]
    if (!kind) continue
    const x0 = (c % grid) * 2
    const z0 = Math.floor(c / grid) * 2
    for (let k = 0; k < 4; k++) {
      const index = x0 + (k & 1) + (z0 + (k >> 1)) * columns
      roadMask[index] = 1
      if (kind === ROAD.TRUNK) trunkMask[index] = 1
    }
  }
  const toRoad = distanceField(roadMask, columns, cell)
  const toTrunk = distanceField(trunkMask, columns, cell)
  const paddy = new Uint8Array(count)
  for (let index = 0; index < count; index++) {
    if (hand[index] < 1 && slope[index] < 0.04 && land[index] !== LAND.CHANNEL && !corridor[index]) paddy[index] = 1
  }
  const toPaddy = distanceField(paddy, columns, cell)

  // Post towns: the biggest hamlets on a highway, a few kilometres apart.
  const posts = []
  for (const village of villages.filter((v) => !v.kind && toHighway[v.cell] < POST_TOWN.near).sort((a, b) => b.size - a.size)) {
    if (posts.some((post) => Math.hypot(post.x - village.x, post.z - village.z) < POST_TOWN.apart)) continue
    village.kind = 'post'
    posts.push(village)
  }
  for (const village of villages) if (!village.kind) village.kind = 'valley'

  for (const village of villages) {
    const t = unit(seed + 53, village.cell)
    let length
    let houses
    if (village.kind === 'post') {
      length = lerp(POST_TOWN.length, t)
      houses = (index) => toTrunk[index] < POST_TOWN.depth && slope[index] < 0.1
    } else if (village.kind === 'field') {
      length = lerp(FIELD_VILLAGES.length, t)
      houses = (index) => toRoad[index] < FIELD_VILLAGES.depth && slope[index] < 0.06
    } else {
      length = lerp(VALLEY_VILLAGE.length, t) * Math.min(1.2, 0.6 + 0.2 * village.size)
      // Dry ground just above the paddies, and the lane through the middle of the village.
      houses = (index, d) => (!paddy[index] && toPaddy[index] < VALLEY_VILLAGE.reach && slope[index] < 0.12) || (toRoad[index] < 30 && d < length * 0.3)
    }
    village.length = length
    const cx = Math.floor(village.x / cell)
    const cz = Math.floor(village.z / cell)
    const r = Math.ceil(length / 2 / cell)
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        const x = cx + dx
        const z = cz + dz
        if (x < 0 || z < 0 || x >= columns || z >= columns) continue
        const d = Math.hypot(dx, dz) * cell
        if (d > length / 2) continue
        const index = x + z * columns
        if (corridor[index] || land[index] === LAND.CHANNEL) continue
        if (houses(index, d)) mask[index] = 1
      }
    }
  }
  return mask
}

// The direction of the field strips at every cell: away from the nearest houses, smoothed.
// Strips are lines, not arrows, so the smoothing works on the doubled angle.
function stripDirections(toVillage, columns) {
  const count = columns * columns
  const c2 = new Float32Array(count)
  const s2 = new Float32Array(count)
  for (let z = 0; z < columns; z++) {
    for (let x = 0; x < columns; x++) {
      const index = x + z * columns
      const east = toVillage[index + (x < columns - 1 ? 1 : 0)] - toVillage[index - (x > 0 ? 1 : 0)]
      const south = toVillage[index + (z < columns - 1 ? columns : 0)] - toVillage[index - (z > 0 ? columns : 0)]
      const angle = Math.atan2(south, east)
      c2[index] = Math.cos(angle * 2)
      s2[index] = Math.sin(angle * 2)
    }
  }
  const sc = boxBlur(c2, columns, 3, 2)
  const ss = boxBlur(s2, columns, 3, 2)
  const out = new Float32Array(count)
  for (let index = 0; index < count; index++) out[index] = Math.atan2(ss[index], sc[index]) / 2
  return out
}

export function developRegion(terrain, { seed = 1 } = {}, progress = () => {}) {
  const { size, cell, columns, slope, hand, land, river, valleyS, valleyD, elevation } = terrain
  const count = columns * columns
  const rand = random(seed ^ 0x5e771e)
  const step = cell * 2
  const grid = columns / 2
  const cells = grid * grid
  const coarseOf = (index) => {
    const x = index % columns
    const z = (index - x) / columns
    return (x >> 1) + (z >> 1) * grid
  }
  const cellAt = (x, z, n = grid, spacing = step) => {
    const cx = Math.min(n - 1, Math.max(0, Math.floor(x / spacing)))
    const cz = Math.min(n - 1, Math.max(0, Math.floor(z / spacing)))
    return cx + cz * n
  }

  // Between the levees (the corridor) the river may flood; nobody builds there.
  const corridor = new Uint8Array(count)
  for (let index = 0; index < count; index++) {
    const off = valleyD[index] - riverAlong(river.corridor, valleyS[index])
    if (Math.abs(off) < river.corridorHalf) corridor[index] = 1
  }

  // The 40 m planning grid.
  const slope40 = downsample(slope, columns, 2, 'max')
  const hand40 = downsample(hand, columns, 2, 'min')
  const kind40 = new Uint8Array(cells)
  const water40 = new Uint8Array(cells)
  const corridor40 = new Uint8Array(cells)
  const stream40 = new Uint8Array(cells)
  for (let index = 0; index < count; index++) {
    const c = coarseOf(index)
    if (index % 2 === 0 && Math.floor(index / columns) % 2 === 0) kind40[c] = land[index]
    if (land[index] === LAND.CHANNEL) water40[c] = 1
    if (corridor[index]) corridor40[c] = 1
    if (terrain.isStream[index] && terrain.area[index] > 0.3e6) stream40[c] = 1
  }

  // The metropolis lies beyond the east edge; everything is measured by the way there.
  const metropolis = { x: size + rand.range(5000, 9000), z: size * rand.range(0.18, 0.4) }
  const find = createPathFinder(grid, step)
  const roads = createRoadNetwork(grid)

  // Walking and carting before modern roads: slopes are hard work, marshy valley floors and the
  // flooding lowland are avoided, and the great river is crossed by ferry where it must be.
  // Unmapped local reasons (a shrine, a landowner, a boggy patch) bend the paths a little.
  const whim = new Float32Array(cells)
  for (let c = 0; c < cells; c++) {
    whim[c] = 0.5 + 0.5 * fbm(seed + 40, (c % grid) * step / 700, Math.floor(c / grid) * step / 700, 3)
  }
  const oldCost = new Float32Array(cells)
  const laneCost = new Float32Array(cells)
  for (let c = 0; c < cells; c++) {
    let cost = 1 + Math.min(40, (slope40[c] / 0.06) ** 2)
    if (water40[c]) cost += 45
    else if (corridor40[c]) cost += 6
    if (kind40[c] === LAND.LOWLAND) cost += 1.5
    else if (hand40[c] < 1.2) cost += 2.5
    if (stream40[c]) cost += 2
    oldCost[c] = cost * (0.7 + 0.6 * whim[c])
    // Village lanes never cross the great river: only the highways had ferries.
    laneCost[c] = water40[c] ? Infinity : oldCost[c]
  }

  // Highways (kaidō) leave the metropolis and cross the region to the far side.
  const entries = [0.1, 0.36, 0.62, 0.88].map((fraction) => Math.min(0.96, Math.max(0.04, fraction + rand.range(-0.05, 0.05))) * size)
  const highways = []
  for (const z of entries) {
    const x = size - step / 2
    const dx = x - metropolis.x
    const dz = z - metropolis.z
    const length = Math.hypot(dx, dz)
    let t = 0
    while (t < size * 2) {
      const px = x + dx / length * (t + 100)
      const pz = z + dz / length * (t + 100)
      if (px < step || pz < step || pz > size - step) break
      t += 100
    }
    const end = { x: x + dx / length * t, z: z + dz / length * t }
    const path = find(oldCost, cellAt(x, z), cellAt(end.x, end.z), { floor: 0.8 })
    roads.add(path, ROAD.TRUNK, ERA[1700])
    highways.push({ entry: { x, z }, end })
  }
  progress('街道', 0.1)

  // Hamlets: dry, level ground a short walk above the paddies, better still by a highway.
  const paddyLand = new Uint8Array(cells)
  for (let c = 0; c < cells; c++) {
    if (hand40[c] < 1 && slope40[c] < 0.04 && !water40[c] && !corridor40[c]) paddyLand[c] = 1
  }
  const toPaddy = distanceField(paddyLand, grid, step)
  const highwayMask = new Uint8Array(cells)
  for (let c = 0; c < cells; c++) if (roads.kindAt[c] === ROAD.TRUNK) highwayMask[c] = 1
  const toHighway = distanceField(highwayMask, grid, step)
  const candidates = []
  for (let c = 0; c < cells; c++) {
    if (slope40[c] > 0.05 || hand40[c] < 1 || corridor40[c] || water40[c]) continue
    const x = (c % grid + 0.5) * step
    const z = (Math.floor(c / grid) + 0.5) * step
    let score = 1 + 1.6 * Math.max(0, 1 - Math.abs(toPaddy[c] - 150) / 350)
    score += toHighway[c] < 250 ? 0.9 : toHighway[c] < 800 ? 0.3 : 0
    score += 0.7 * fbm(seed + 41, x / 2500, z / 2500, 2) + 0.25 * unit(seed + 42, c)
    if (kind40[c] === LAND.HILLS) score -= 0.35
    if (score > 1.25) candidates.push({ c, x, z, score })
  }
  candidates.sort((a, b) => b.score - a.score)
  const villages = []
  const spacing = 1600
  const buckets = new Map()
  const bucketKey = (x, z) => Math.floor(x / spacing) + Math.floor(z / spacing) * 1000
  for (const candidate of candidates) {
    // Hamlets keep their distance from one another, some more than others.
    const room = 950 + 600 * unit(seed + 39, candidate.c)
    let clear = true
    for (let bz = -1; bz <= 1 && clear; bz++) {
      for (let bx = -1; bx <= 1 && clear; bx++) {
        const list = buckets.get(bucketKey(candidate.x + bx * spacing, candidate.z + bz * spacing))
        if (list?.some((other) => Math.hypot(other.x - candidate.x, other.z - candidate.z) < (room + other.room) / 2)) clear = false
      }
    }
    if (!clear) continue
    const village = { x: candidate.x, z: candidate.z, cell: candidate.c, size: candidate.score, room }
    villages.push(village)
    const k = bucketKey(village.x, village.z)
    if (!buckets.has(k)) buckets.set(k, [])
    buckets.get(k).push(village)
  }

  // Village roads join each hamlet to its natural neighbours (a relative neighbourhood graph)
  // and wind along existing roads where they can, so the network grows like a tree of lanes.
  const reuse = new Float32Array(cells)
  const refreshReuse = (base, factor) => {
    for (let c = 0; c < cells; c++) reuse[c] = roads.kindAt[c] ? base[c] * factor : base[c]
  }
  const pairs = []
  for (let a = 0; a < villages.length; a++) {
    for (let b = a + 1; b < villages.length; b++) {
      const d = Math.hypot(villages[a].x - villages[b].x, villages[a].z - villages[b].z)
      if (d > 3600) continue
      let blocked = false
      for (let c = 0; c < villages.length && !blocked; c++) {
        if (c === a || c === b) continue
        const da = Math.hypot(villages[c].x - villages[a].x, villages[c].z - villages[a].z)
        const db = Math.hypot(villages[c].x - villages[b].x, villages[c].z - villages[b].z)
        if (Math.max(da, db) < d) blocked = true
      }
      if (!blocked) pairs.push([a, b, d])
    }
  }
  pairs.sort((p, q) => p[2] - q[2])
  refreshReuse(laneCost, 0.35)
  for (const [a, b] of pairs) {
    const path = find(reuse, villages[a].cell, villages[b].cell, { floor: 0.5 })
    roads.add(path, ROAD.COLLECTOR, ERA[1700])
    for (const c of path ?? []) reuse[c] = laneCost[c] * 0.35
  }
  for (const village of villages) {
    if (toHighway[village.cell] < 150 || toHighway[village.cell] > 2200) continue
    const path = find(reuse, village.cell, (c) => roads.kindAt[c] === ROAD.TRUNK, { limit: 4000 })
    roads.add(path, ROAD.COLLECTOR, ERA[1700])
  }
  // New-field villages (新田): once canals brought water to the dry plateau, settlers laid out
  // villages along a road far from any paddy, each house at the front of its own long strip of
  // field, the strips ending in coppice woods.
  for (let added = 0; added < FIELD_VILLAGES.count; added++) {
    const options = []
    for (let k = 0; k < cells; k++) {
      if (!roads.kindAt[k] || slope40[k] > 0.03 || kind40[k] !== LAND.PLATEAU) continue
      if (toPaddy[k] < FIELD_VILLAGES.dry || water40[k] || corridor40[k]) continue
      const x = (k % grid + 0.5) * step
      const z = (Math.floor(k / grid) + 0.5) * step
      if (x < 1500 || z < 1500 || x > size - 1500 || z > size - 1500) continue
      if (villages.some((v) => Math.hypot(v.x - x, v.z - z) < (v.kind === 'field' ? FIELD_VILLAGES.apart : 1300))) continue
      options.push({ k, x, z, score: toPaddy[k] / 1000 + 0.6 * unit(seed + 52, k) })
    }
    if (!options.length) break
    options.sort((a, b) => b.score - a.score)
    const best = options[0]
    villages.push({ x: best.x, z: best.z, cell: best.k, size: 1.6, room: 1500, kind: 'field' })
  }
  progress('集落と村道', 0.2)

  // The Edo-period land: paddies on wet valley floors, fields round the hamlets, woods beyond.
  const use = new Uint8Array(count)
  const built = new Uint8Array(count)
  const villageMask = settlementShapes({ villages, roads, grid, step, columns, cell, count, slope, hand, land, corridor, seed, toHighway })
  const toVillage = distanceField(villageMask, columns, cell)
  for (let index = 0; index < count; index++) {
    if (land[index] === LAND.CHANNEL) use[index] = USE.WATER
    else if (corridor[index]) use[index] = USE.RIVERBED
    else if (hand[index] < 1 && slope[index] < 0.04) use[index] = USE.PADDY
    else if (slope[index] > 0.15) use[index] = USE.FOREST
    else if (villageMask[index] && slope[index] < 0.1) {
      use[index] = USE.DENSE
      built[index] = ERA[1700]
    } else if (toVillage[index] < 1100 && slope[index] < 0.08) use[index] = USE.FIELD
    else use[index] = USE.FOREST
  }
  // Fields were laid out in long strips running back from the houses (短冊形地割): each field
  // cell keeps the direction away from the nearest houses, smoothed, for drawing the strips.
  const fieldAngle = stripDirections(toVillage, columns)

  // ---- The modern era ----

  // Engineered roads take gentler gradients through cuttings, bridge the river and avoid the
  // old village cores, where land is expensive.
  const modernCost = new Float32Array(cells)
  const streetCost = new Float32Array(cells)
  for (let c = 0; c < cells; c++) {
    let cost = 1 + Math.min(25, (slope40[c] / 0.1) ** 2)
    if (water40[c]) cost += 7
    else if (corridor40[c]) cost += 2.5
    if (hand40[c] < 1) cost += 0.4
    modernCost[c] = cost * (0.88 + 0.24 * whim[c])
  }
  for (let index = 0; index < count; index += 2) {
    if (villageMask[index]) modernCost[coarseOf(index)] += 1.2
  }
  // Ordinary town roads do not get a bridge over the great river.
  for (let c = 0; c < cells; c++) streetCost[c] = water40[c] || corridor40[c] ? Infinity : modernCost[c]

  // More radial arterials where the highways leave wide gaps at the east edge.
  const sortedEntries = [0, ...entries.slice().sort((a, b) => a - b), size]
  refreshReuse(modernCost, 0.75)
  for (let index = 1; index < sortedEntries.length; index++) {
    const gap = sortedEntries[index] - sortedEntries[index - 1]
    if (gap < 4200) continue
    const z = (sortedEntries[index] + sortedEntries[index - 1]) / 2 + rand.range(-0.1, 0.1) * gap
    const x = size - step / 2
    const dx = x - metropolis.x
    const dz = z - metropolis.z
    const length = Math.hypot(dx, dz)
    let t = 0
    while (t < size * 2) {
      const px = x + dx / length * (t + 100)
      const pz = z + dz / length * (t + 100)
      if (px < step || pz < step || pz > size - step || px > size) break
      t += 100
    }
    const path = find(reuse, cellAt(x, z), cellAt(x + dx / length * t, z + dz / length * t), { floor: 0.75 })
    roads.add(path, ROAD.ARTERIAL, ERA[1940])
    for (const c of path ?? []) reuse[c] = modernCost[c] * 0.75
  }

  // Ring roads at even distances round the metropolis.
  const offset = metropolis.x - size
  const rings = [4300, 9900, 15500].map((r) => r + offset)
  for (const [ringIndex, radius] of rings.entries()) {
    const waypoints = []
    const angleStep = 1400 / radius
    for (let angle = Math.PI / 2; angle < Math.PI * 1.5; angle += angleStep) {
      const x = metropolis.x + Math.cos(angle) * radius
      const z = metropolis.z + Math.sin(angle) * radius
      if (x < -1000 || z < -1000 || x > size + 1000 || z > size + 1000) continue
      let c = cellAt(Math.min(size - 1, Math.max(0, x)), Math.min(size - 1, Math.max(0, z)))
      // Waypoints on dry land.
      for (let tries = 0; tries < 40 && (water40[c] || corridor40[c]); tries++) c = Math.min(cells - 1, c + grid)
      waypoints.push(c)
    }
    refreshReuse(modernCost, 0.6)
    for (let index = 1; index < waypoints.length; index++) {
      if (waypoints[index] === waypoints[index - 1]) continue
      const path = find(reuse, waypoints[index - 1], waypoints[index], { floor: 0.6 })
      roads.add(path, ROAD.ARTERIAL, ERA[[1955, 1965, 1975][ringIndex]])
    }
  }

  // Where no road comes within reach, planners link the gap to the network.
  {
    const usable = new Uint8Array(cells)
    for (let c = 0; c < cells; c++) usable[c] = !water40[c] && !corridor40[c] && slope40[c] < 0.2 ? 1 : 0
    for (let round = 0; round < 60; round++) {
      const roadMask = new Uint8Array(cells)
      for (let c = 0; c < cells; c++) if (roads.kindAt[c]) roadMask[c] = 1
      const gap = distanceField(roadMask, grid, step)
      let worst = -1
      let worstDistance = 750
      for (let c = 0; c < cells; c++) {
        if (usable[c] && gap[c] > worstDistance) {
          worstDistance = gap[c]
          worst = c
        }
      }
      if (worst < 0) break
      refreshReuse(streetCost, 0.7)
      // Two arms from the gap's middle to the network, in roughly opposite directions.
      const first = find(reuse, worst, (c) => roads.kindAt[c] > 0, { limit: 6000 })
      if (!first) {
        usable[worst] = 0
        continue
      }
      roads.add(first, ROAD.COLLECTOR, ERA[1955])
      const end = first[first.length - 1]
      const ex = end % grid - worst % grid
      const ez = Math.floor(end / grid) - Math.floor(worst / grid)
      const second = find(reuse, worst, (c) => {
        if (!roads.kindAt[c] || first.includes(c)) return false
        const vx = c % grid - worst % grid
        const vz = Math.floor(c / grid) - Math.floor(worst / grid)
        return vx * ex + vz * ez < 0
      }, { limit: 6000 })
      roads.add(second, ROAD.COLLECTOR, ERA[1955])
    }
  }
  progress('幹線道路', 0.35)

  // Reserved open spaces: the green escarpments and a few large parks (old estates, military
  // land and golf courses that became parks).
  const reserved = new Uint8Array(count)
  const lowland = new Uint8Array(count)
  for (let index = 0; index < count; index++) if (land[index] === LAND.LOWLAND || land[index] === LAND.CHANNEL) lowland[index] = 1
  const toLowland = distanceField(lowland, columns, cell)
  for (let index = 0; index < count; index++) {
    if (slope[index] > 0.12 && toLowland[index] < 280 && land[index] !== LAND.HILLS) {
      reserved[index] = 1
      use[index] = USE.GREEN
    }
  }
  const parks = []
  for (let tries = 0; tries < 400 && parks.length < 4; tries++) {
    const x = rand.range(0.1, 0.9) * size
    const z = rand.range(0.1, 0.9) * size
    const index = Math.floor(x / cell) + Math.floor(z / cell) * columns
    if (land[index] !== LAND.PLATEAU || slope[index] > 0.05) continue
    if (parks.some((park) => Math.hypot(park.x - x, park.z - z) < 4000)) continue
    const radius = rand.range(300, 460)
    parks.push({ x, z, radius })
    const r = Math.ceil(radius * 1.4 / cell)
    const cx = Math.floor(x / cell)
    const cz = Math.floor(z / cell)
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        const px = cx + dx
        const pz = cz + dz
        if (px < 0 || pz < 0 || px >= columns || pz >= columns) continue
        const p = px + pz * columns
        const wobble = 1 + 0.28 * fbm(seed + 44 + parks.length, (px * cell) / 400, (pz * cell) / 400, 2)
        if (Math.hypot(dx, dz) * cell < radius * wobble && land[p] !== LAND.CHANNEL && !built[p]) {
          reserved[p] = 1
          use[p] = USE.PARK
        }
      }
    }
  }

  // ---- The city spreads ----
  const buildable = new Uint8Array(count)
  let buildableCount = 0
  for (let index = 0; index < count; index++) {
    if (land[index] === LAND.CHANNEL || corridor[index] || reserved[index] || slope[index] > 0.3) continue
    buildable[index] = 1
    buildableCount++
  }
  const newtown = new Uint8Array(count)
  const patch = new Float32Array(count)
  for (let index = 0; index < count; index++) {
    const x = (index % columns + 0.5) * cell
    const z = (Math.floor(index / columns) + 0.5) * cell
    patch[index] = 0.85 * fbm(seed + 45, x / 1400, z / 1400, 3) + 0.35 * unit(seed + 46, index)
  }
  const potential = new Float32Array(count)
  const open = new Uint8Array(count)
  let travel = null
  for (const [year, share] of GROWTH) {
    const era = ERA[year]
    // Travel time (minutes) to the metropolis over the roads of the day.
    const minutes = new Float32Array(cells)
    for (let c = 0; c < cells; c++) {
      const kind = roads.kindAt[c] && roads.eraAt[c] <= era ? roads.kindAt[c] : 0
      const speed = kind === ROAD.TRUNK ? 32 : kind === ROAD.ARTERIAL ? 28 : kind === ROAD.COLLECTOR ? 18 : 6
      minutes[c] = water40[c] && !kind ? Infinity : 60 / (speed * 1000)
    }
    for (let index = 0; index < count; index += 2) {
      if (index % columns % 2 || !built[index]) continue
      const c = coarseOf(index)
      if (!roads.kindAt[c]) minutes[c] = 60 / (12 * 1000)
    }
    const starts = []
    const initial = []
    for (let row = 0; row < grid; row++) {
      const c = grid - 1 + row * grid
      starts.push(c)
      const z = (row + 0.5) * step
      initial.push(Math.hypot(metropolis.x - size, metropolis.z - z) / 1000 / 30 * 60 + (roads.kindAt[c] >= ROAD.ARTERIAL ? 0 : 6))
    }
    travel = costField(minutes, grid, step, starts, initial)
    const developed = new Float32Array(count)
    for (let index = 0; index < count; index++) developed[index] = built[index] ? 1 : 0
    const nearby = boxBlur(developed, columns, 6, 2)
    const roadMask = new Uint8Array(count)
    for (let index = 0; index < count; index++) {
      const c = coarseOf(index)
      if (roads.kindAt[c] && roads.eraAt[c] <= era) roadMask[index] = 1
    }
    const toRoad = distanceField(roadMask, columns, cell)
    const leveed = year >= 1940
    let available = 0
    for (let index = 0; index < count; index++) {
      open[index] = buildable[index] && !built[index] ? 1 : 0
      if (!open[index]) continue
      available++
      const t = travel[coarseOf(index)]
      let p = -t / 14 + 2.2 * nearby[index] + 0.9 * Math.exp(-toRoad[index] / 160) + 0.5 * Math.exp(-toVillage[index] / 400)
      p -= Math.max(0, slope[index] - 0.04) * 15
      if (land[index] === LAND.LOWLAND) p -= leveed ? 0.5 : 3
      if (land[index] === LAND.HILLS) p -= year >= 1965 ? 0.2 : 1.6
      if (use[index] === USE.PADDY) p -= 0.4
      potential[index] = p + patch[index]
    }
    const wanted = Math.round(share * buildableCount) - (buildableCount - available)
    const cut = threshold(potential, open, wanted)
    for (let index = 0; index < count; index++) {
      if (open[index] && potential[index] >= cut) built[index] = era
    }

    // New towns: whole hillsides graded into planned estates once the hills come within reach.
    if (year === 1965 || year === 1975) {
      // A site well inside the untouched hills, yet as close to the metropolis as such a site gets.
      const builtMask = new Uint8Array(count)
      for (let index = 0; index < count; index++) if (built[index] || land[index] !== LAND.HILLS) builtMask[index] = 1
      const room = distanceField(builtMask, columns, cell)
      let best = -1
      let bestScore = -Infinity
      for (let index = 0; index < count; index += 7) {
        if (land[index] !== LAND.HILLS || built[index] || !buildable[index] || newtown[index]) continue
        if (room[index] < 450) continue
        const score = -travel[coarseOf(index)] + 4 * unit(seed + 47 + year, index) + room[index] / 150
        if (score > bestScore) {
          bestScore = score
          best = index
        }
      }
      if (best >= 0) {
        const target = Math.round(rand.range(1.6e6, 3.2e6) / (cell * cell))
        const queue = [best]
        newtown[best] = 1
        let grown = 0
        for (let head = 0; head < queue.length && grown < target; head++) {
          const index = queue[head]
          built[index] = era
          grown++
          const x = index % columns
          const z = (index - x) / columns
          for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const nx = x + dx
            const nz = z + dz
            if (nx < 0 || nz < 0 || nx >= columns || nz >= columns) continue
            const next = nx + nz * columns
            if (newtown[next] || land[next] !== LAND.HILLS || reserved[next] || built[next]) continue
            newtown[next] = 1
            queue.push(next)
          }
        }
        for (let head = Math.min(queue.length, grown); head < queue.length; head++) newtown[queue[head]] = 0
      }
    }
    progress('市街化 ' + year, 0.35 + 0.35 * (era - 1) / 8)
  }

  // ---- What stands where ----
  const majorMask = new Uint8Array(count)
  const network = roadLinks(roads, grid, step)
  for (const link of network.links) rasterizeLine(majorMask, columns, cell, link.points, link.kind)
  const arterialMask = new Uint8Array(count)
  for (let index = 0; index < count; index++) if (majorMask[index] >= ROAD.ARTERIAL) arterialMask[index] = 1
  const toArterial = distanceField(arterialMask, columns, cell)

  // Local centres: where the big roads meet, and the old highway towns.
  const centers = []
  {
    const degree = new Map()
    for (const link of network.links) {
      if (link.kind < ROAD.ARTERIAL) continue
      for (const node of [link.from, link.to]) degree.set(node, (degree.get(node) ?? 0) + 1)
    }
    for (const [node, links] of degree) {
      if (links < 3) continue
      const x = network.nodes[node * 2]
      const z = network.nodes[node * 2 + 1]
      if (centers.some((other) => Math.hypot(other.x - x, other.z - z) < 900)) continue
      centers.push({ x, z, weight: 1 + 0.25 * (links - 3), kind: 'junction' })
    }
    for (const village of villages) {
      if (toHighway[village.cell] > 200) continue
      if (centers.some((other) => Math.hypot(other.x - village.x, other.z - village.z) < 900)) continue
      centers.push({ x: village.x, z: village.z, weight: 0.8, kind: 'town' })
    }
  }
  const centerPull = new Float32Array(count)
  for (const center of centers) {
    const radius = 220 + 160 * center.weight
    const r = Math.ceil(radius * 1.5 / cell)
    const cx = Math.floor(center.x / cell)
    const cz = Math.floor(center.z / cell)
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        const x = cx + dx
        const z = cz + dz
        if (x < 0 || z < 0 || x >= columns || z >= columns) continue
        const value = Math.max(0, 1 - Math.hypot(dx, dz) * cell / (radius * 1.5))
        const index = x + z * columns
        centerPull[index] = Math.max(centerPull[index], value)
      }
    }
  }

  for (let index = 0; index < count; index++) {
    if (!built[index]) {
      // Land nobody built on: farms that held out, and woods.
      if (use[index] === USE.FIELD && patch[index] < -0.05) use[index] = USE.FOREST
      continue
    }
    const x = (index % columns + 0.5) * cell
    const z = (Math.floor(index / columns) + 0.5) * cell
    const pick = unit(seed + 48, index)
    const near = toArterial[index]
    if (centerPull[index] > 0.55 || (centerPull[index] > 0.2 && near < 50)) use[index] = USE.COMMERCIAL
    else if (newtown[index]) use[index] = fbm(seed + 51, x / 600, z / 600, 2) > -0.05 ? USE.MID : USE.LOW
    else if (near < 45) use[index] = pick < 0.55 ? USE.MID : USE.COMMERCIAL
    else if (land[index] === LAND.LOWLAND && near < 500 && built[index] >= ERA[1940] && built[index] <= ERA[1975] && fbm(seed + 49, x / 900, z / 900, 2) > 0.18) use[index] = USE.INDUSTRIAL
    else if (built[index] <= ERA[1940] || villageMask[index]) use[index] = USE.DENSE
    else if (built[index] >= ERA[1975] && fbm(seed + 50, x / 500, z / 500, 2) > 0.38) use[index] = USE.MID
    else use[index] = USE.LOW
  }

  // Schools about every kilometre, on level ground among the houses.
  const schools = []
  for (let bz = 0; bz < size; bz += 1000) {
    for (let bx = 0; bx < size; bx += 1000) {
      let best = -1
      let bestScore = -Infinity
      for (let tries = 0; tries < 30; tries++) {
        const x = bx + 150 + rand() * 700
        const z = bz + 150 + rand() * 700
        const index = Math.floor(x / cell) + Math.floor(z / cell) * columns
        const u = use[index]
        if (u !== USE.LOW && u !== USE.DENSE && u !== USE.MID) continue
        const score = -slope[index] * 50 + rand()
        if (score > bestScore) {
          bestScore = score
          best = index
        }
      }
      if (best < 0) continue
      const x0 = best % columns
      const z0 = Math.floor(best / columns)
      let fits = true
      for (let dz = 0; dz < 5 && fits; dz++) {
        for (let dx = 0; dx < 4 && fits; dx++) {
          const index = Math.min(columns - 1, x0 + dx) + Math.min(columns - 1, z0 + dz) * columns
          if (!built[index] || use[index] === USE.COMMERCIAL || majorMask[index]) fits = false
        }
      }
      if (!fits) continue
      for (let dz = 0; dz < 5; dz++) {
        for (let dx = 0; dx < 4; dx++) use[(x0 + dx) + (z0 + dz) * columns] = USE.PUBLIC
      }
      schools.push({ x: (x0 + 2) * cell, z: (z0 + 2.5) * cell })
    }
  }
  progress('土地利用', 0.78)

  // ---- Reshaping the ground ----
  const ground = Float32Array.from(elevation)
  // New towns are cut and filled into terraces a few metres apart, with retaining walls between.
  const smooth = boxBlur(elevation, columns, 4, 3)
  let cut = 0
  let fill = 0
  for (let index = 0; index < count; index++) {
    let target = ground[index]
    if (newtown[index]) target = Math.round(smooth[index] / 3) * 3
    else if (built[index] && slope[index] > 0.06) target = ground[index] * 0.5 + smooth[index] * 0.5
    if (built[index] && use[index] !== USE.PADDY && hand[index] < 1) target += 0.8
    const change = target - ground[index]
    if (change > 0) fill += change * cell * cell
    else cut -= change * cell * cell
    ground[index] = target
  }
  // Levees along both sides of the river's corridor.
  const levees = []
  for (const sign of [-1, 1]) {
    const points = []
    for (let s = Math.max(0, river.sIn - 600); s <= river.sOut + 600; s += 40) {
      const index = Math.min(river.valley.length / 2 - 1, Math.round(s / river.step))
      const off = riverAlong(river.corridor, s) + sign * river.corridorHalf
      points.push(river.valley[index * 2] + river.normal[index * 2] * off, river.valley[index * 2 + 1] + river.normal[index * 2 + 1] * off)
    }
    levees.push(Float64Array.from(chaikin(points, 2)))
  }
  for (let index = 0; index < count; index++) {
    const off = valleyD[index] - riverAlong(river.corridor, valleyS[index])
    const fromLevee = Math.abs(Math.abs(off) - river.corridorHalf)
    if (fromLevee < 16) ground[index] = Math.max(ground[index], riverAlong(river.level, valleyS[index]) + 7.5 - fromLevee * 0.25)
  }

  // Streams in built-up land go into culverts; the rest keep an open channel.
  for (const stream of terrain.streams) {
    let urban = 0
    for (let k = 0; k < stream.points.length; k += 2) {
      const index = Math.floor(stream.points[k] / cell) + Math.floor(stream.points[k + 1] / cell) * columns
      if (built[index]) urban++
    }
    const share = urban / (stream.points.length / 2)
    const area = stream.areas[stream.areas.length - 1]
    stream.covered = share > 0.55 && area < 12e6
  }
  progress('造成と河川', 0.9)

  // Initial land price simulation (万円/m²) before railway stations are known; refined once
  // railways and station boardings are calculated.
  const city = {
    metropolis, villages, highways, centers, schools, parks, levees,
    use, built, newtown, ground, corridor, fieldAngle,
    roads: network,
    majorMask,
    toArterial,
    centerPull,
    earthwork: { cut, fill },
    travel,
  }
  city.landPrice = simulateLandPrice(terrain, city, null, { seed })
  return city
}

// Base land price multipliers by use (万円/m² at a standard suburban location ~25 min from metropolis).
const BASE_PRICE = {
  [USE.WATER]: 0, [USE.RIVERBED]: 0, [USE.FOREST]: 4.5, [USE.GREEN]: 9, [USE.FIELD]: 14, [USE.PADDY]: 11,
  [USE.PARK]: 22, [USE.LOW]: 48, [USE.DENSE]: 54, [USE.MID]: 68, [USE.HIGH]: 92,
  [USE.COMMERCIAL]: 125, [USE.INDUSTRIAL]: 34, [USE.PUBLIC]: 36,
}

// Simulates land price (地価, 万円/m²) across every 20 m cell of the region, accounting for:
// - Travel time to the metropolis (`city.travel`)
// - Proximity to railway stations and each station's daily boardings (when `rail` is given)
// - Proximity to arterial and trunk roads (`city.toArterial`) and local town/junction centres (`city.centerPull`)
// - Landform (`LAND.PLATEAU` premium vs `LOWLAND` flood risk and `HILLS` slope penalty)
// - Elevation above nearest drainage (`hand`) and micro-topographic amenity
// - Land use zoning (`city.use`) and era of development (`city.built`)
export function simulateLandPrice(terrain, city, rail = null, { seed = 1 } = {}) {
  const { columns, cell, land, slope, hand } = terrain
  const count = columns * columns
  const grid40 = columns / 2
  const price = new Float32Array(count)

  // Station proximity premium field on the 20 m grid.
  const stationBoost = new Float32Array(count)
  if (rail?.lines?.length) {
    const stations = rail.lines.flatMap((line) => line.stations)
    for (const station of stations) {
      const boardings = station.boardings ?? 15000
      const transferBonus = station.transfer ? 1.28 : 1.0
      const hubStrength = Math.min(2.4, (0.55 + 0.45 * Math.log10(Math.max(1000, boardings) / 1000)) * transferBonus)
      const reach = 1200
      const r = Math.ceil(reach / cell)
      const cx = Math.floor(station.x / cell)
      const cz = Math.floor(station.z / cell)
      for (let dz = -r; dz <= r; dz++) {
        const z = cz + dz
        if (z < 0 || z >= columns) continue
        for (let dx = -r; dx <= r; dx++) {
          const x = cx + dx
          if (x < 0 || x >= columns) continue
          const d = Math.hypot(dx, dz) * cell
          if (d > reach) continue
          // Strong peak in the station forecourt (<180 m) and walking catchment (<800 m).
          const core = d < 220 ? 0.85 * Math.exp(-(d * d) / (130 * 130)) : 0
          const walk = 0.65 * Math.max(0, 1 - d / reach) ** 1.6
          const val = hubStrength * (core + walk)
          const idx = x + z * columns
          if (val > stationBoost[idx]) stationBoost[idx] = val
        }
      }
    }
  }

  for (let index = 0; index < count; index++) {
    const u = city.use[index]
    if (u === USE.WATER || u === USE.RIVERBED || city.corridor[index]) {
      price[index] = 0
      continue
    }
    const x = index % columns
    const z = (index - x) / columns
    const base = BASE_PRICE[u] ?? 30
    const minutes = city.travel[(x >> 1) + (z >> 1) * grid40]
    // Distance decay from metropolis: 15 min -> ~1.55x, 30 min -> ~1.0x, 60 min -> ~0.52x.
    const access = Number.isFinite(minutes) ? Math.max(0.32, Math.min(1.95, 1.85 * Math.exp(-Math.max(0, minutes - 8) / 46))) : 0.4

    // Landform and hazard factor: Musashino-style plateau is stable and prized; lowland has flood risk.
    const lf = land[index]
    let landformFactor = 1.0
    if (lf === LAND.PLATEAU) landformFactor = 1.12
    else if (lf === LAND.TERRACE) landformFactor = 1.04
    else if (lf === LAND.LOWLAND) landformFactor = hand[index] < 1.5 ? 0.78 : 0.88
    else if (lf === LAND.HILLS) landformFactor = city.newtown[index] ? 0.98 : 0.90

    // Slope penalty: gentle south/plateau ground is preferred; steep slopes require retaining walls.
    const slopeFactor = Math.max(0.55, 1 - Math.max(0, slope[index] - 0.03) * 2.2)

    // Arterial road & commercial center pull.
    const nearArterial = city.toArterial ? Math.exp(-city.toArterial[index] / 180) : 0
    const center = city.centerPull ? city.centerPull[index] : 0
    const roadFactor = u === USE.COMMERCIAL || u === USE.HIGH || u === USE.MID
      ? 1 + 0.35 * nearArterial + 0.45 * center
      : 1 + 0.12 * nearArterial + 0.22 * center

    // Station catchment premium.
    const st = stationBoost[index]
    const stationFactor = u === USE.COMMERCIAL ? 1 + st * 1.35
      : (u === USE.HIGH || u === USE.MID) ? 1 + st * 0.95
      : BUILT_USES.has(u) ? 1 + st * 0.65
      : 1 + st * 0.35

    // Subtle neighbourhood prestige variation.
    const prestige = 1 + 0.14 * fbm(seed + 509, (x * cell) / 900, (z * cell) / 900, 2)

    price[index] = Math.round(base * access * landformFactor * slopeFactor * roadFactor * stationFactor * prestige * 10) / 10
  }
  return price
}

// Summarizes the land price distribution across built-up and residential/commercial land (万円/m²).
export function landPriceStats(terrain, city) {
  const { columns } = terrain
  const count = columns * columns
  const price = city.landPrice
  if (!price) return { mean: 0, median: 0, p90: 0, max: 0, residentialMean: 0, commercialMean: 0 }
  const builtValues = []
  let sum = 0
  let resSum = 0
  let resCount = 0
  let comSum = 0
  let comCount = 0
  let max = 0
  for (let i = 0; i < count; i++) {
    const p = price[i]
    if (p <= 0 || !BUILT_USES.has(city.use[i])) continue
    builtValues.push(p)
    sum += p
    if (p > max) max = p
    const u = city.use[i]
    if (u === USE.LOW || u === USE.DENSE || u === USE.MID || u === USE.HIGH) {
      resSum += p
      resCount++
    } else if (u === USE.COMMERCIAL) {
      comSum += p
      comCount++
    }
  }
  builtValues.sort((a, b) => a - b)
  const q = (f) => builtValues.length ? builtValues[Math.min(builtValues.length - 1, Math.floor(f * builtValues.length))] : 0
  return {
    mean: builtValues.length ? Math.round(sum / builtValues.length * 10) / 10 : 0,
    median: Math.round(q(0.5) * 10) / 10,
    p90: Math.round(q(0.9) * 10) / 10,
    max: Math.round(max * 10) / 10,
    residentialMean: resCount ? Math.round(resSum / resCount * 10) / 10 : 0,
    commercialMean: comCount ? Math.round(comSum / comCount * 10) / 10 : 0,
  }
}
