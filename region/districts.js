// Districts: the region cut into towns (町, about a square kilometre, named) and their blocks
// (丁目, a few hundred metres across, numbered), the way Japanese addresses divide a ward. Main
// roads, railways on the surface, the great river and steep slopes make the boundaries, so each
// district is a piece of town people would recognise as one. A 丁目 is also the unit the game
// hands to a player to manage.
//
// Towns grow from seeds: stations first (a town round a station takes the station's name), then
// the old centres (road junctions, village cores), then an even lattice for the rest. Every cell
// of the 40 m grid joins the seed it can reach most cheaply, where crossing a barrier costs
// extra. Blocks are grown the same way inside each town.
import { BUILT_USES, USE } from './develop.js?v=online-1794946480502'
import { D8L, D8X, D8Z } from './grid.js?v=online-1794946480502'
import { Heap } from './heap.js?v=online-1794946480502'
import { placeName } from './names.js?v=online-1794946480502'
import { unit } from './noise.js?v=online-1794946480502'
import { STRUCTURE } from './rail.js?v=online-1794946480502'
import { LAND } from './terrain.js?v=online-1794946480502'

export const DISTRICT_CELL = 40 // metres: districts are made of cells of the 40 m planning grid
export const TOWN_SPACING = 1100 // metres between town seeds
export const BLOCK_SPACING = 480 // metres between block seeds
const MIN_TOWN_AREA = 0.35e6
const MIN_BLOCK_AREA = 0.06e6

// What a cell of the 40 m grid holds that people do not build a district across.
const COLLECTOR = 1
const ARTERIAL = 2
const TRUNK = 4
const RAIL = 8
const RIVER = 16
const STEEP = 32

// Extra cost of stepping into a cell, by what it holds: towns are bounded by the big things,
// blocks inside a town by the smaller roads as well.
const PENALTY = {
  town: { [COLLECTOR]: 6, [ARTERIAL]: 30, [TRUNK]: 40, [RAIL]: 40, [RIVER]: 400, [STEEP]: 10 },
  block: { [COLLECTOR]: 25, [ARTERIAL]: 60, [TRUNK]: 60, [RAIL]: 60, [RIVER]: 400, [STEEP]: 12 },
}

function barriers(region, n) {
  const { terrain, city, rail } = region
  const { columns, cell } = terrain
  const factor = Math.round(DISTRICT_CELL / cell)
  const out = new Uint8Array(n * n)
  for (let z = 0; z < columns; z++) {
    for (let x = 0; x < columns; x++) {
      const index = x + z * columns
      const c = Math.floor(x / factor) + Math.floor(z / factor) * n
      const kind = city.majorMask[index]
      if (kind === 2) out[c] |= COLLECTOR
      else if (kind === 3) out[c] |= ARTERIAL
      else if (kind >= 4) out[c] |= TRUNK
      if (city.corridor[index] || terrain.land[index] === LAND.CHANNEL) out[c] |= RIVER
      if (terrain.slope[index] > 0.15) out[c] |= STEEP
    }
  }
  for (const line of rail?.lines ?? []) {
    const points = line.alignment.points
    for (let k = 0; k < points.length / 2; k++) {
      if (line.profile.structure[k] >= STRUCTURE.COVERED) continue
      const x = Math.floor(points[k * 2] / DISTRICT_CELL)
      const z = Math.floor(points[k * 2 + 1] / DISTRICT_CELL)
      if (x >= 0 && z >= 0 && x < n && z < n) out[x + z * n] |= RAIL
    }
  }
  return out
}

function penaltyField(barrier, table) {
  const out = new Float32Array(barrier.length)
  for (let c = 0; c < barrier.length; c++) {
    let worst = 0
    for (const [flag, value] of Object.entries(table)) if (barrier[c] & Number(flag)) worst = Math.max(worst, value)
    out[c] = worst
  }
  return out
}

// Every allowed cell joins the seed it reaches most cheaply.
function grow(n, seeds, penalty, allowed, label) {
  const cost = new Float64Array(n * n).fill(Infinity)
  const heap = new Heap(1 << 15)
  seeds.forEach((seed, index) => {
    if (allowed && !allowed(seed.cell)) return
    cost[seed.cell] = 0
    label[seed.cell] = seed.label ?? index
    heap.push(seed.cell, 0)
  })
  while (heap.size) {
    const c = heap.pop()
    const reached = heap.lastKey
    if (reached > cost[c]) continue
    const x = c % n
    const z = (c - x) / n
    for (let k = 0; k < 8; k++) {
      const nx = x + D8X[k]
      const nz = z + D8Z[k]
      if (nx < 0 || nz < 0 || nx >= n || nz >= n) continue
      const next = nx + nz * n
      if (allowed && !allowed(next)) continue
      const value = reached + D8L[k] * (1 + penalty[next])
      if (value < cost[next]) {
        cost[next] = value
        label[next] = label[c]
        heap.push(next, value)
      }
    }
  }
}

// Labels covering less than `least` square metres join the neighbour they share most border with.
function mergeSmall(n, label, ids, least, allowed) {
  for (let pass = 0; pass < 4; pass++) {
    const area = new Map()
    for (let c = 0; c < label.length; c++) {
      if (label[c] < 0 || (allowed && !allowed(c))) continue
      area.set(label[c], (area.get(label[c]) ?? 0) + DISTRICT_CELL * DISTRICT_CELL)
    }
    const small = ids.filter((id) => (area.get(id) ?? 0) > 0 && area.get(id) < least)
    if (!small.length) return
    const smallSet = new Set(small)
    const border = new Map()
    for (let c = 0; c < label.length; c++) {
      const own = label[c]
      if (!smallSet.has(own)) continue
      const x = c % n
      const z = (c - x) / n
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx
        const nz = z + dz
        if (nx < 0 || nz < 0 || nx >= n || nz >= n) continue
        const other = label[nx + nz * n]
        if (other < 0 || other === own || (allowed && !allowed(nx + nz * n))) continue
        const counts = border.get(own) ?? new Map()
        counts.set(other, (counts.get(other) ?? 0) + 1)
        border.set(own, counts)
      }
    }
    const into = new Map()
    for (const id of small) {
      const counts = border.get(id)
      if (!counts) continue
      let best = -1
      let most = 0
      for (const [other, count] of counts) {
        if (count > most || (count === most && other < best)) {
          most = count
          best = other
        }
      }
      if (best >= 0 && !(smallSet.has(best) && into.get(best) === id)) into.set(id, best)
    }
    if (!into.size) return
    for (let c = 0; c < label.length; c++) if (into.has(label[c])) label[c] = into.get(label[c])
  }
}

// A name not yet taken in this region.
function uniqueNamer(seed, taken) {
  return (x, z, kind) => {
    for (let attempt = 0; attempt < 16; attempt++) {
      const name = placeName(seed + attempt * 7919, x + attempt * 13, z - attempt * 17, kind)
      if (!taken.has(name)) {
        taken.add(name)
        return name
      }
    }
    const name = placeName(seed, x, z, kind) + taken.size
    taken.add(name)
    return name
  }
}

export function divideRegion(region, { seed = region.seed } = {}) {
  const { size, terrain, city, people, rail } = region
  const n = Math.round(size / DISTRICT_CELL)
  const barrier = barriers(region, n)
  const cellAt = (x, z) => Math.min(n - 1, Math.max(0, Math.floor(x / DISTRICT_CELL))) + Math.min(n - 1, Math.max(0, Math.floor(z / DISTRICT_CELL))) * n

  // ---- Towns ----
  const seeds = []
  const take = (x, z, kind, name = null) => {
    if (!(x >= 0 && z >= 0 && x < size && z < size)) return
    const cell = cellAt(x, z)
    if (barrier[cell] & RIVER) return
    if (seeds.some((other) => Math.hypot(other.x - x, other.z - z) < TOWN_SPACING * 0.55)) return
    seeds.push({ x, z, cell, kind, name })
  }
  const stations = (rail?.lines ?? []).flatMap((line) => line.stations).sort((a, b) => (b.boardings ?? 0) - (a.boardings ?? 0))
  for (const station of stations) take(station.x, station.z, 'station', station.name)
  for (const center of city.centers) take(center.x, center.z, center.kind === 'town' ? 'town' : 'center')
  for (const village of [...city.villages].sort((a, b) => b.size - a.size)) take(village.x, village.z, village.kind === 'post' ? 'town' : 'village')
  for (let gz = 0; gz < size / TOWN_SPACING; gz++) {
    for (let gx = 0; gx < size / TOWN_SPACING; gx++) {
      const jx = (unit(seed + 1601, gx, gz) - 0.5) * 0.5
      const jz = (unit(seed + 1602, gx, gz) - 0.5) * 0.5
      take((gx + 0.5 + jx) * TOWN_SPACING, (gz + 0.5 + jz) * TOWN_SPACING, 'lattice')
    }
  }
  const townOf = new Int32Array(n * n).fill(-1)
  grow(n, seeds, penaltyField(barrier, PENALTY.town), null, townOf)
  mergeSmall(n, townOf, seeds.map((_, index) => index), MIN_TOWN_AREA)

  // Renumber the towns that survived, in reading order of their seeds.
  const survivors = [...new Set(townOf)].filter((id) => id >= 0).sort((a, b) => (seeds[a].z - seeds[b].z) || (seeds[a].x - seeds[b].x))
  const townIndex = new Map(survivors.map((id, index) => [id, index]))
  for (let c = 0; c < townOf.length; c++) townOf[c] = townOf[c] >= 0 ? townIndex.get(townOf[c]) : -1

  const taken = new Set(stations.map((station) => station.name))
  const namer = uniqueNamer(seed + 1700, taken)
  const kindAt = (x, z) => {
    const index = Math.min(terrain.columns - 1, Math.floor(x / terrain.cell)) + Math.min(terrain.columns - 1, Math.floor(z / terrain.cell)) * terrain.columns
    const land = terrain.land[index]
    if (land === LAND.LOWLAND || land === LAND.CHANNEL) return 'river'
    if (land === LAND.HILLS) return 'hills'
    if (terrain.hand[index] < 2.5) return 'valley'
    return 'plateau'
  }
  const towns = survivors.map((id, index) => {
    const seedOf = seeds[id]
    const name = seedOf.kind === 'station' ? seedOf.name : namer(seedOf.x, seedOf.z, seedOf.kind === 'town' ? 'town' : kindAt(seedOf.x, seedOf.z))
    return { id: index, name, x: seedOf.x, z: seedOf.z, kind: seedOf.kind, cell: seedOf.cell, districts: [] }
  })

  // ---- Blocks (丁目) inside each town ----
  const districtOf = new Int32Array(n * n).fill(-1)
  const blockPenalty = penaltyField(barrier, PENALTY.block)
  const cellsOf = towns.map(() => [])
  for (let c = 0; c < townOf.length; c++) if (townOf[c] >= 0) cellsOf[townOf[c]].push(c)
  const districts = []
  for (const town of towns) {
    const cells = cellsOf[town.id]
    if (!cells.length) continue
    const inside = (c) => townOf[c] === town.id
    // The town's own seed starts 1丁目; a jittered lattice adds the others.
    const own = inside(town.cell) ? town.cell : cells[0]
    const blockSeeds = [{ x: (own % n + 0.5) * DISTRICT_CELL, z: (Math.floor(own / n) + 0.5) * DISTRICT_CELL, cell: own }]
    let x0 = Infinity
    let z0 = Infinity
    let x1 = -Infinity
    let z1 = -Infinity
    for (const c of cells) {
      x0 = Math.min(x0, c % n)
      x1 = Math.max(x1, c % n)
      z0 = Math.min(z0, Math.floor(c / n))
      z1 = Math.max(z1, Math.floor(c / n))
    }
    const step = BLOCK_SPACING / DISTRICT_CELL
    for (let gz = z0 + step / 2; gz <= z1; gz += step) {
      for (let gx = x0 + step / 2; gx <= x1; gx += step) {
        const jx = (unit(seed + 1603 + town.id, Math.round(gx), Math.round(gz)) - 0.5) * step * 0.5
        const jz = (unit(seed + 1604 + town.id, Math.round(gx), Math.round(gz)) - 0.5) * step * 0.5
        const cx = Math.round(gx + jx)
        const cz = Math.round(gz + jz)
        if (cx < 0 || cz < 0 || cx >= n || cz >= n) continue
        const c = cx + cz * n
        if (!inside(c)) continue
        const x = (cx + 0.5) * DISTRICT_CELL
        const z = (cz + 0.5) * DISTRICT_CELL
        if (blockSeeds.some((other) => Math.hypot(other.x - x, other.z - z) < BLOCK_SPACING * 0.6)) continue
        blockSeeds.push({ x, z, cell: c })
      }
    }
    const local = new Int32Array(n * n).fill(-1)
    grow(n, blockSeeds, blockPenalty, inside, local)
    mergeSmall(n, local, blockSeeds.map((_, index) => index), MIN_BLOCK_AREA, inside)
    // 1丁目 is the block round the town's seed; the others are numbered outwards from it.
    const blockIds = [...new Set(cells.map((c) => local[c]))].filter((id) => id >= 0)
    const centroid = new Map(blockIds.map((id) => [id, { x: 0, z: 0, count: 0 }]))
    for (const c of cells) {
      const entry = centroid.get(local[c])
      if (!entry) continue
      entry.x += (c % n + 0.5) * DISTRICT_CELL
      entry.z += (Math.floor(c / n) + 0.5) * DISTRICT_CELL
      entry.count++
    }
    const ordered = blockIds.map((id) => {
      const entry = centroid.get(id)
      const x = entry.x / entry.count
      const z = entry.z / entry.count
      return { id, x, z, d: id === local[own] ? -1 : Math.hypot(x - town.x, z - town.z), angle: Math.atan2(z - town.z, x - town.x) }
    }).sort((a, b) => a.d - b.d || a.angle - b.angle)
    const numberOf = new Map()
    for (const [index, block] of ordered.entries()) {
      const id = districts.length
      numberOf.set(block.id, id)
      districts.push({
        id, town: town.id, number: index + 1,
        name: `${town.name}${index + 1}丁目`,
        x: block.x, z: block.z,
        area: 0, bbox: [Infinity, Infinity, -Infinity, -Infinity],
        residents: 0, households: 0, jobs: 0, built: 0, use: USE.LOW, stations: [], neighbours: [],
      })
      town.districts.push(id)
    }
    for (const c of cells) if (local[c] >= 0) districtOf[c] = numberOf.get(local[c])
  }

  // ---- What each district holds ----
  const factor = Math.round(DISTRICT_CELL / terrain.cell)
  const useCount = districts.map(() => new Float64Array(16))
  for (let z = 0; z < terrain.columns; z++) {
    for (let x = 0; x < terrain.columns; x++) {
      const id = districtOf[Math.floor(x / factor) + Math.floor(z / factor) * n]
      if (id < 0) continue
      const index = x + z * terrain.columns
      const district = districts[id]
      district.residents += people.residents[index]
      district.households += people.households[index]
      district.jobs += people.jobs[index]
      useCount[id][city.use[index]]++
      if (BUILT_USES.has(city.use[index])) district.built++
    }
  }
  for (let c = 0; c < districtOf.length; c++) {
    const id = districtOf[c]
    if (id < 0) continue
    const district = districts[id]
    district.area += DISTRICT_CELL * DISTRICT_CELL
    const x = (c % n) * DISTRICT_CELL
    const z = Math.floor(c / n) * DISTRICT_CELL
    const box = district.bbox
    box[0] = Math.min(box[0], x)
    box[1] = Math.min(box[1], z)
    box[2] = Math.max(box[2], x + DISTRICT_CELL)
    box[3] = Math.max(box[3], z + DISTRICT_CELL)
    // Neighbours across the four sides.
    const cx = c % n
    const cz = (c - cx) / n
    for (const [dx, dz] of [[1, 0], [0, 1]]) {
      if (cx + dx >= n || cz + dz >= n) continue
      const other = districtOf[c + dx + dz * n]
      if (other >= 0 && other !== id) {
        if (!district.neighbours.includes(other)) district.neighbours.push(other)
        if (!districts[other].neighbours.includes(id)) districts[other].neighbours.push(id)
      }
    }
  }
  for (const district of districts) {
    const cellsTotal = district.area / (terrain.cell * terrain.cell)
    district.built = cellsTotal ? district.built / cellsTotal : 0
    let best = 0
    for (let use = 0; use < 16; use++) if (useCount[district.id][use] > useCount[district.id][best]) best = use
    district.use = best
    district.neighbours.sort((a, b) => a - b)
  }
  for (const station of stations) {
    const id = districtOf[cellAt(station.x, station.z)]
    if (id >= 0 && !districts[id].stations.includes(station.name)) districts[id].stations.push(station.name)
  }
  for (const town of towns) {
    town.area = town.districts.reduce((sum, id) => sum + districts[id].area, 0)
    town.residents = town.districts.reduce((sum, id) => sum + districts[id].residents, 0)
  }
  return { cell: DISTRICT_CELL, columns: n, townOf, districtOf, towns, districts }
}

// The borders between towns and between blocks as straight runs along the cell edges, in metres:
// [x0, z0, x1, z1, ...] for each kind. A town border is not repeated as a block border.
export function boundarySegments(division) {
  const { cell, columns: n, townOf, districtOf } = division
  const town = []
  const block = []
  // Vertical edges between cell (x - 1, z) and (x, z), joined down each column of edges.
  for (let x = 1; x < n; x++) {
    let runKind = 0
    let start = 0
    for (let z = 0; z <= n; z++) {
      let kind = 0
      if (z < n) {
        const a = x - 1 + z * n
        const b = x + z * n
        kind = townOf[a] !== townOf[b] ? 2 : districtOf[a] !== districtOf[b] ? 1 : 0
      }
      if (kind !== runKind) {
        if (runKind) (runKind === 2 ? town : block).push(x * cell, start * cell, x * cell, z * cell)
        runKind = kind
        start = z
      }
    }
  }
  // Horizontal edges between cell (x, z - 1) and (x, z), joined along each row of edges.
  for (let z = 1; z < n; z++) {
    let runKind = 0
    let start = 0
    for (let x = 0; x <= n; x++) {
      let kind = 0
      if (x < n) {
        const a = x + (z - 1) * n
        const b = x + z * n
        kind = townOf[a] !== townOf[b] ? 2 : districtOf[a] !== districtOf[b] ? 1 : 0
      }
      if (kind !== runKind) {
        if (runKind) (runKind === 2 ? town : block).push(start * cell, z * cell, x * cell, z * cell)
        runKind = kind
        start = x
      }
    }
  }
  return { town: Float32Array.from(town), block: Float32Array.from(block) }
}

// The district (丁目) at a point, or -1 outside the region.
export function districtAt(division, x, z) {
  const { cell, columns, districtOf } = division
  const cx = Math.floor(x / cell)
  const cz = Math.floor(z / cell)
  if (cx < 0 || cz < 0 || cx >= columns || cz >= columns) return -1
  return districtOf[cx + cz * columns]
}
