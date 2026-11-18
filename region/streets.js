// Local streets and buildings. The main roads, the river and the railways cut the land into
// superblocks; each superblock gets a lattice of streets turned to fit it (along its length on
// level ground, along the contours on a hillside), irregular in old villages and regular in
// planned estates. Streets and buildings are generated only for the part of the map being
// looked at, and always come out the same for the same place.
import { BUILT_USES, ROAD, ROAD_WIDTH, USE } from './develop.js?v=online-1794980046418'
import { crossing } from './geometry.js?v=online-1794980046418'
import { fbm, hash3 } from './noise.js?v=online-1794980046418'

// Block shapes by the use that dominates a superblock: lattice spacing across (a) and along (b)
// in metres, how irregular the lattice is, the share of lattice streets left out, street width.
const LATTICE = {
  [USE.DENSE]: { a: 34, b: 58, wobble: 0.3, drop: 0.2, width: 4 },
  [USE.LOW]: { a: 42, b: 88, wobble: 0.16, drop: 0.12, width: 5 },
  [USE.MID]: { a: 72, b: 115, wobble: 0.08, drop: 0.1, width: 6 },
  [USE.HIGH]: { a: 90, b: 130, wobble: 0.05, drop: 0.05, width: 8 },
  [USE.COMMERCIAL]: { a: 46, b: 72, wobble: 0.1, drop: 0.08, width: 6 },
  [USE.INDUSTRIAL]: { a: 95, b: 170, wobble: 0.05, drop: 0.1, width: 8 },
  [USE.PUBLIC]: { a: 60, b: 100, wobble: 0.1, drop: 0.1, width: 6 },
  planned: { a: 46, b: 104, wobble: 0.05, drop: 0.04, width: 6 },
}

// Lots: street frontage in metres, how far the building stands back, floors, how much of the
// lot it fills, and the deepest a building of the kind gets (a house is some 8 to 12 m deep).
const LOTS = {
  [USE.DENSE]: { frontage: 8.5, setback: 0.8, floors: [2, 2, 2, 3], fill: 0.86, depth: 14 },
  [USE.LOW]: { frontage: 11.5, setback: 2, floors: [2, 2, 2, 3], fill: 0.72, depth: 12 },
  [USE.MID]: { frontage: 34, setback: 4, floors: [4, 5, 6, 8, 10], fill: 0.62, depth: 16 },
  [USE.HIGH]: { frontage: 50, setback: 8, floors: [14, 18, 22, 28], fill: 0.5, depth: 24 },
  [USE.COMMERCIAL]: { frontage: 13, setback: 0.3, floors: [3, 4, 5, 7, 9], fill: 0.92, depth: 20 },
  [USE.INDUSTRIAL]: { frontage: 45, setback: 6, floors: [1, 1, 2], fill: 0.7, depth: 45 },
}

export function superblocks(terrain, city, rail) {
  const { columns, cell } = terrain
  const count = columns * columns
  const barrier = new Uint8Array(count)
  for (let index = 0; index < count; index++) {
    const use = city.use[index]
    if (city.majorMask[index] || use === USE.WATER || use === USE.RIVERBED) barrier[index] = 1
  }
  // Railways on the surface divide the land too (in tunnel they do not).
  for (const line of rail?.lines ?? []) {
    const points = line.alignment.points
    for (let k = 0; k < points.length / 2; k++) {
      if (line.profile.structure[k] >= 5) continue
      const x = Math.floor(points[k * 2] / cell)
      const z = Math.floor(points[k * 2 + 1] / cell)
      if (x >= 0 && z >= 0 && x < columns && z < columns) barrier[x + z * columns] = 1
    }
  }
  const id = new Int32Array(count).fill(-1)
  const queue = new Int32Array(count)
  const blocks = []
  for (let seed = 0; seed < count; seed++) {
    if (barrier[seed] || id[seed] >= 0) continue
    const block = blocks.length
    let head = 0
    let tail = 0
    queue[tail++] = seed
    id[seed] = block
    let sx = 0
    let sz = 0
    let sxx = 0
    let szz = 0
    let sxz = 0
    let gx = 0
    let gz = 0
    const uses = new Float64Array(16)
    let planned = 0
    while (head < tail) {
      const at = queue[head++]
      const x = at % columns
      const z = (at - x) / columns
      sx += x
      sz += z
      sxx += x * x
      szz += z * z
      sxz += x * z
      uses[city.use[at]]++
      if (city.newtown[at]) planned++
      const east = city.ground[at + (x < columns - 1 ? 1 : 0)] - city.ground[at - (x > 0 ? 1 : 0)]
      const south = city.ground[at + (z < columns - 1 ? columns : 0)] - city.ground[at - (z > 0 ? columns : 0)]
      // Gradients are folded onto one half-plane so opposite slopes add up rather than cancel.
      const sign = east < 0 || (east === 0 && south < 0) ? -1 : 1
      gx += east * sign
      gz += south * sign
      if (x > 0 && !barrier[at - 1] && id[at - 1] < 0) { id[at - 1] = block; queue[tail++] = at - 1 }
      if (x < columns - 1 && !barrier[at + 1] && id[at + 1] < 0) { id[at + 1] = block; queue[tail++] = at + 1 }
      if (z > 0 && !barrier[at - columns] && id[at - columns] < 0) { id[at - columns] = block; queue[tail++] = at - columns }
      if (z < columns - 1 && !barrier[at + columns] && id[at + columns] < 0) { id[at + columns] = block; queue[tail++] = at + columns }
    }
    const n = tail
    const mx = sx / n
    const mz = sz / n
    const cxx = sxx / n - mx * mx
    const czz = szz / n - mz * mz
    const cxz = sxz / n - mx * mz
    let dominant = USE.LOW
    let most = 0
    for (const use of BUILT_USES) {
      if (uses[use] > most) {
        most = uses[use]
        dominant = use
      }
    }
    const hilly = Math.hypot(gx, gz) / n / (2 * cell) > 0.05
    // Along the length of the block on level land, along the contours on a hillside.
    const angle = hilly ? Math.atan2(gz, gx) + Math.PI / 2 : 0.5 * Math.atan2(2 * cxz, cxx - czz)
    const kind = planned > n * 0.5 ? 'planned' : dominant
    blocks.push({ angle, x: (mx + 0.5) * cell, z: (mz + 0.5) * cell, cells: n, kind, use: dominant, built: most })
  }
  return { id, blocks }
}

// The street lattice of one superblock, as a function of lattice coordinates.
function latticeOf(seed, index, block) {
  const shape = LATTICE[block.kind] ?? LATTICE[USE.LOW]
  const ux = Math.cos(block.angle)
  const uz = Math.sin(block.angle)
  const vx = -uz
  const vz = ux
  const bend = shape.wobble > 0.12 ? 0.35 * shape.b : 0.12 * shape.b
  const node = (i, j) => {
    const bx = block.x + i * shape.a * ux + j * shape.b * vx
    const bz = block.z + i * shape.a * uz + j * shape.b * vz
    const h = hash3(seed + index, i, j)
    const jx = ((h & 1023) / 1023 - 0.5) * 2 * shape.wobble * shape.a
    const jz = (((h >>> 10) & 1023) / 1023 - 0.5) * 2 * shape.wobble * shape.a
    // A slow warp bends whole streets, not just single corners.
    const wx = bend * fbm(seed + 77, bx / 650, bz / 650, 2)
    const wz = bend * fbm(seed + 78, bx / 650, bz / 650, 2)
    return [bx + jx + wx, bz + jz + wz]
  }
  const toLattice = (x, z) => {
    const dx = x - block.x
    const dz = z - block.z
    return [(dx * ux + dz * uz) / shape.a, (dx * vx + dz * vz) / shape.b]
  }
  return { shape, node, toLattice }
}

function blocksInBox(region, x0, z0, x1, z1) {
  const { columns, cell } = region.terrain
  const ids = new Set()
  const c0 = Math.max(0, Math.floor(x0 / cell) - 1)
  const c1 = Math.min(columns - 1, Math.floor(x1 / cell) + 1)
  const r0 = Math.max(0, Math.floor(z0 / cell) - 1)
  const r1 = Math.min(columns - 1, Math.floor(z1 / cell) + 1)
  for (let r = r0; r <= r1; r++) {
    for (let c = c0; c <= c1; c++) {
      const value = region.blocks.id[c + r * columns]
      if (value >= 0) ids.add(value)
    }
  }
  return ids
}

function cellAt(region, x, z) {
  const { columns, cell } = region.terrain
  const c = Math.floor(x / cell)
  const r = Math.floor(z / cell)
  if (c < 0 || r < 0 || c >= columns || r >= columns) return -1
  return c + r * columns
}

function latticeRange(lattice, x0, z0, x1, z1) {
  let i0 = Infinity
  let i1 = -Infinity
  let j0 = Infinity
  let j1 = -Infinity
  for (const [x, z] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1]]) {
    const [i, j] = lattice.toLattice(x, z)
    i0 = Math.min(i0, i)
    i1 = Math.max(i1, i)
    j0 = Math.min(j0, j)
    j1 = Math.max(j1, j)
  }
  return [Math.floor(i0) - 2, Math.ceil(i1) + 2, Math.floor(j0) - 2, Math.ceil(j1) + 2]
}

// Local streets crossing the box: [{ points: [x0, z0, x1, z1], width }].
export function streetsIn(region, x0, z0, x1, z1) {
  const seed = region.seed
  const out = []
  const inside = (block, x, z) => {
    const at = cellAt(region, x, z)
    return at >= 0 && region.blocks.id[at] === block && BUILT_USES.has(region.city.use[at])
  }
  for (const block of blocksInBox(region, x0, z0, x1, z1)) {
    const params = region.blocks.blocks[block]
    if (!params.built) continue
    const lattice = latticeOf(seed, block, params)
    const [i0, i1, j0, j1] = latticeRange(lattice, x0, z0, x1, z1)
    if ((i1 - i0) * (j1 - j0) > 40000) continue
    for (let i = i0; i <= i1; i++) {
      for (let j = j0; j <= j1; j++) {
        const a = lattice.node(i, j)
        const aIn = inside(block, a[0], a[1])
        for (const [di, dj, direction] of [[1, 0, 1], [0, 1, 2]]) {
          if (unitHash(seed + block, i * 2 + direction, j) < lattice.shape.drop) continue
          const b = lattice.node(i + di, j + dj)
          const bIn = inside(block, b[0], b[1])
          if (!aIn && !bIn) continue
          let from = a
          let to = b
          if (aIn !== bIn) {
            // Run on from the inside corner until the street meets a main road.
            const start = aIn ? a : b
            const end = aIn ? b : a
            const meet = meetRoad(region, start, end)
            if (!meet) continue
            from = start
            to = meet
          }
          const minX = Math.min(from[0], to[0])
          const maxX = Math.max(from[0], to[0])
          const minZ = Math.min(from[1], to[1])
          const maxZ = Math.max(from[1], to[1])
          if (maxX < x0 - 10 || minX > x1 + 10 || maxZ < z0 - 10 || minZ > z1 + 10) continue
          out.push({ points: [from[0], from[1], to[0], to[1]], width: lattice.shape.width })
        }
      }
    }
  }
  return out
}

function unitHash(seed, a, b) {
  return hash3(seed, a, b) / 4294967296
}

// Where the street from `start` towards `end` (extended a little) first meets a main road.
function meetRoad(region, start, end) {
  const dx = end[0] - start[0]
  const dz = end[1] - start[1]
  const far = [start[0] + dx * 1.4, start[1] + dz * 1.4]
  let best = null
  let bestT = Infinity
  region.roadIndex.near((start[0] + far[0]) / 2, (start[1] + far[1]) / 2, Math.hypot(dx, dz) * 0.8, (segment) => {
    const hit = crossing(start[0], start[1], far[0], far[1], segment.ax, segment.az, segment.bx, segment.bz)
    if (hit && hit.t < bestT) {
      bestT = hit.t
      best = [start[0] + (far[0] - start[0]) * hit.t, start[1] + (far[1] - start[1]) * hit.t]
    }
  })
  return best
}

// Distance from a building's corners and centre to the edge of the nearest segment in `index`
// (`halfWidth(data)` gives the segment's half width, or a negative number to ignore it).
function clearance(index, corners, halfWidth) {
  if (!index) return Infinity
  const cx = (corners[0] + corners[2] + corners[4] + corners[6]) / 4
  const cz = (corners[1] + corners[3] + corners[5] + corners[7]) / 4
  let best = Infinity
  index.near(cx, cz, 40, (segment) => {
    const half = halfWidth(segment.data)
    if (half < 0) return
    const dx = segment.bx - segment.ax
    const dz = segment.bz - segment.az
    const length = dx * dx + dz * dz
    for (let k = 0; k <= 8; k += 2) {
      const x = k < 8 ? corners[k] : cx
      const z = k < 8 ? corners[k + 1] : cz
      let t = length > 0 ? ((x - segment.ax) * dx + (z - segment.az) * dz) / length : 0
      t = t < 0 ? 0 : t > 1 ? 1 : t
      const d = Math.hypot(segment.ax + dx * t - x, segment.az + dz * t - z) - half
      if (d < best) best = d
    }
  })
  return best
}

// Open streams keep their banks; culverts are built over.
const streamClearance = (region, corners) => clearance(region.streams?.index, corners, (stream) => (stream.covered ? -1 : stream.width / 2))
// Railways on the surface keep the strip their structure stands on (`region.railIndex` holds
// the half width of that strip for each 20 m of track; tunnels are not in it).
const railClearance = (region, corners) => clearance(region.railIndex, corners, (half) => half)

// Buildings in the box: [{ corners: [x0,z0,...x3,z3], floors, use, tone, cell }].
export function buildingsIn(region, x0, z0, x1, z1) {
  const seed = region.seed
  const out = []
  const { city } = region
  for (const block of blocksInBox(region, x0, z0, x1, z1)) {
    const params = region.blocks.blocks[block]
    if (!params.built) continue
    const lattice = latticeOf(seed, block, params)
    const [i0, i1, j0, j1] = latticeRange(lattice, x0, z0, x1, z1)
    if ((i1 - i0) * (j1 - j0) > 40000) continue
    const street = lattice.shape.width / 2
    for (let i = i0; i < i1; i++) {
      for (let j = j0; j < j1; j++) {
        const p00 = lattice.node(i, j)
        const p10 = lattice.node(i + 1, j)
        const p01 = lattice.node(i, j + 1)
        const p11 = lattice.node(i + 1, j + 1)
        const minX = Math.min(p00[0], p10[0], p01[0], p11[0])
        const maxX = Math.max(p00[0], p10[0], p01[0], p11[0])
        const minZ = Math.min(p00[1], p10[1], p01[1], p11[1])
        const maxZ = Math.max(p00[1], p10[1], p01[1], p11[1])
        if (maxX < x0 || minX > x1 || maxZ < z0 || minZ > z1) continue
        const at = (s, t) => [
          (p00[0] * (1 - s) + p10[0] * s) * (1 - t) + (p01[0] * (1 - s) + p11[0] * s) * t,
          (p00[1] * (1 - s) + p10[1] * s) * (1 - t) + (p01[1] * (1 - s) + p11[1] * s) * t,
        ]
        const centre = at(0.5, 0.5)
        const centreCell = cellAt(region, centre[0], centre[1])
        if (centreCell < 0) continue
        const blockUse = city.use[centreCell]
        const sideA = Math.hypot(p10[0] - p00[0], p10[1] - p00[1])
        const sideB = Math.hypot(p01[0] - p00[0], p01[1] - p00[1])
        // A school: one long building on the north side of the block, the playground south of it.
        if (blockUse === USE.PUBLIC) {
          if (!region.blocks.id || region.blocks.id[centreCell] !== block) continue
          const northFirst = p10[1] >= p00[1] // the side at s = 0 is the northern one
          const depth = Math.min(0.4, 15 / sideA)
          const edge = Math.min(0.3, (street + 6) / sideA)
          const ends = Math.min(0.3, (street + 8) / sideB)
          const [sa, sb] = northFirst ? [edge, edge + depth] : [1 - edge - depth, 1 - edge]
          out.push({
            corners: [...at(sa, ends), ...at(sa, 1 - ends), ...at(sb, 1 - ends), ...at(sb, ends)],
            floors: 4, use: USE.PUBLIC, tone: 0.5, cell: centreCell,
          })
          continue
        }
        // Two rows of lots back to back along the long sides of the block (lattice spacing b runs
        // along them), each lot facing its own street: the frontage runs along b, the depth is
        // half of a.
        for (const [s0, s1] of [[0, 0.5], [0.5, 1]]) {
          const lotUse = LOTS[blockUse] ? blockUse : USE.LOW
          const lots = Math.max(1, Math.round(sideB / LOTS[lotUse].frontage))
          // Insets as fractions of the block: the cross street at the block's ends.
          const edgeT = Math.min(0.24, (street + 0.6) / sideB)
          for (let k = 0; k < lots; k++) {
            const mid = at((s0 + s1) / 2, (k + 0.5) / lots)
            const cell = cellAt(region, mid[0], mid[1])
            if (cell < 0 || region.blocks.id[cell] !== block) continue
            const use = city.use[cell]
            const lot = LOTS[use]
            if (!lot) continue
            // A lot whose use differs from the block's (houses in a block of flats) is cut to
            // the frontage of its own use.
            const parts = Math.max(1, Math.round(sideB / lots / lot.frontage))
            for (let part = 0; part < parts; part++) {
              const t0 = (k + part / parts) / lots
              const t1 = (k + (part + 1) / parts) / lots
              const first = k === 0 && part === 0
              const last = k === lots - 1 && part === parts - 1
              const h = hash3(seed + 5, block * 7919 + i * 131 + k * 17 + part, j * 2 + (s0 ? 1 : 0))
              if ((h & 255) < 14) continue // a parking lot or an empty plot
              // Half the gap between neighbouring buildings on each side, the street and the
              // setback in front, a strip behind.
              const gap = Math.min(0.2 * (t1 - t0), (1.2 + (lot.fill < 0.8 ? 1.5 : 0)) / 2 / sideB)
              const front = Math.min(0.2, (street + lot.setback) / sideA)
              const back = Math.min(0.12, (lot.fill > 0.85 ? 0.3 : 1.6) / sideA)
              const ta = first ? Math.max(t0 + gap, edgeT) : t0 + gap
              const tb = last ? Math.min(t1 - gap, 1 - edgeT) : t1 - gap
              let sa = s0 === 0 ? front : 0.5 + back
              let sb = s0 === 0 ? 0.5 - back : 1 - front
              // Detached houses leave a garden at the back.
              if (lot.fill < 0.8) {
                const depth = (sb - sa) * (0.55 + 0.25 * ((h >>> 8 & 255) / 255))
                if (s0 === 0) sb = sa + depth
                else sa = sb - depth
              }
              const deepest = lot.depth * (0.85 + 0.15 * ((h >>> 12 & 255) / 255)) / sideA
              if (sb - sa > deepest) {
                if (s0 === 0) sb = sa + deepest
                else sa = sb - deepest
              }
              if (tb - ta < 0.02 || sb - sa < 0.03) continue
              const corners = [...at(sa, ta), ...at(sa, tb), ...at(sb, tb), ...at(sb, ta)]
              // Keep clear of the main roads, the open streams and the railways.
              if (clearance(region.roadIndex, corners, (kind) => ROAD_WIDTH[kind] / 2) < 1.5) continue
              if (streamClearance(region, corners) < 2) continue
              if (railClearance(region, corners) < 1) continue
              out.push({
                corners,
                floors: lot.floors[(h >>> 16) % lot.floors.length],
                use,
                tone: (h >>> 24) / 255,
                cell,
              })
            }
          }
        }
      }
    }
  }
  return out
}
