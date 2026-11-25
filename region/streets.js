// Local streets and buildings. The main roads, the river and the railways cut the land into
// superblocks; large non-planned superblocks further subdivide along historical landowner tracts
// (耕地整理単位) separated by winding seam collector roads (字境道路 / 旧農道), each tract keeping
// its own contour/parcel orientation and organic staggered streets. High-land-price urban zones
// subdivide tightly with narrow Tokyo wall-to-wall gaps (民法234条緩和・準防火密着) and minimal vacancy.
import { BUILT_USES, ROAD_WIDTH, USE } from './develop.js'
import { chaikin, crossing, lengthOf, resample, segmentIndex, simplify } from './geometry.js'
import { fbm, hash3 } from './noise.js'
import { LAND } from './terrain.js'

// Block shapes by dominant use: realistic Japanese 4m+ local road widths (建築基準法第42条),
// straight surveyed blocks for planned/modern zones, and gentle organic curves only in historic cores.
const LATTICE = {
  [USE.DENSE]: { a: 28, b: 60, wobble: 0.022, dropCross: 0.28, dropLong: 0, width: 4.2 },
  [USE.LOW]: { a: 32, b: 72, wobble: 0.016, dropCross: 0.24, dropLong: 0, width: 4.8 },
  [USE.MID]: { a: 52, b: 92, wobble: 0.010, dropCross: 0.18, dropLong: 0, width: 5.8 },
  [USE.HIGH]: { a: 68, b: 108, wobble: 0.0, dropCross: 0.12, dropLong: 0, width: 7.5 },
  [USE.COMMERCIAL]: { a: 36, b: 64, wobble: 0.012, dropCross: 0.18, dropLong: 0, width: 5.5 },
  [USE.INDUSTRIAL]: { a: 74, b: 130, wobble: 0.0, dropCross: 0.14, dropLong: 0, width: 8.0 },
  [USE.PUBLIC]: { a: 56, b: 92, wobble: 0.0, dropCross: 0.14, dropLong: 0, width: 6.0 },
  planned: { a: 36, b: 84, wobble: 0.0, dropCross: 0.08, dropLong: 0, width: 6.0 },
}

// Lots: baseline suburban frontage, setback, floors, site coverage bias, max building depth.
const LOTS = {
  [USE.DENSE]: { frontage: 8.2, setback: 0.65, floors: [2, 2, 3, 3], fill: 0.90, depth: 12.285 },
  [USE.LOW]: { frontage: 11.4, setback: 1.55, floors: [2, 2, 2, 3], fill: 0.80, depth: 11.83 },
  [USE.MID]: { frontage: 24, setback: 2.4, floors: [3, 4, 5, 7, 10], fill: 0.72, depth: 14.5 },
  [USE.HIGH]: { frontage: 36, setback: 4.5, floors: [10, 14, 18, 24], fill: 0.60, depth: 22 },
  [USE.COMMERCIAL]: { frontage: 10.5, setback: 0.40, floors: [3, 4, 5, 7, 9], fill: 0.94, depth: 16.5 },
  [USE.INDUSTRIAL]: { frontage: 38, setback: 4.0, floors: [1, 1, 2], fill: 0.74, depth: 38 },
}

const SNAP_KEN = 0.455
const snapKen = (v, min = 3.64, max = 13.65) => Math.max(min, Math.min(max, Math.round(v / SNAP_KEN) * SNAP_KEN))
const floorKen = (v, min = 3.64, max = 13.65) => Math.max(min, Math.min(max, Math.floor((v + 1e-4) / SNAP_KEN) * SNAP_KEN))
const priceRatio = (price) => Math.max(0, Math.min(1, ((price || 48) - 45) / 115))

function unitHash(seed, a, b) {
  return hash3(seed, a, b) / 4294967296
}

function summarizeTract(terrain, city, cells, cellCount, seed, tractSeedX, tractSeedZ) {
  const { columns, cell } = terrain
  let sx = 0
  let sz = 0
  let sxx = 0
  let szz = 0
  let sxz = 0
  let gx = 0
  let gz = 0
  let minCX = Infinity
  let maxCX = -Infinity
  let minCZ = Infinity
  let maxCZ = -Infinity
  const uses = new Float64Array(16)
  let planned = 0
  let builtCells = 0
  let eraSum = 0
  for (let i = 0; i < cellCount; i++) {
    const at = cells[i]
    const x = at % columns
    const z = (at - x) / columns
    if (x < minCX) minCX = x
    if (x > maxCX) maxCX = x
    if (z < minCZ) minCZ = z
    if (z > maxCZ) maxCZ = z
    sx += x
    sz += z
    sxx += x * x
    szz += z * z
    sxz += x * z
    const use = city.use[at]
    uses[use]++
    if (BUILT_USES.has(use)) {
      builtCells++
      eraSum += city.built?.[at] || 4
    }
    if (city.newtown?.[at]) planned++
    const east = city.ground[at + (x < columns - 1 ? 1 : 0)] - city.ground[at - (x > 0 ? 1 : 0)]
    const south = city.ground[at + (z < columns - 1 ? columns : 0)] - city.ground[at - (z > 0 ? columns : 0)]
    const sign = east < 0 || (east === 0 && south < 0) ? -1 : 1
    gx += east * sign
    gz += south * sign
  }
  const n = cellCount
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
  // Flat residential blocks follow solar cardinal N-S / E-W orientation unless clearly elongated along an arterial corridor.
  const axisAngle = Math.abs(cxx - czz) < (cxx + czz) * 0.28 ? 0 : 0.5 * Math.atan2(2 * cxz, cxx - czz)
  const baseAngle = hilly ? Math.atan2(gz, gx) + Math.PI / 2 : axisAngle
  const kind = planned > n * 0.5 ? 'planned' : dominant
  const meanEra = builtCells > 0 ? eraSum / builtCells : 4
  let angle = baseAngle
  if (kind !== 'planned' && !hilly) {
    const rotHash = unitHash(seed + 881, Math.round(tractSeedX ?? mx), Math.round(tractSeedZ ?? mz))
    const spread = dominant === USE.DENSE || dominant === USE.LOW
      ? (meanEra <= 3.5 ? 0.20 : 0.09)
      : dominant === USE.COMMERCIAL ? 0.12 : 0.06
    angle += (rotHash - 0.5) * 2 * spread
  }
  const worldX = (mx + 0.5) * cell
  const worldZ = (mz + 0.5) * cell
  return {
    angle,
    x: worldX,
    z: worldZ,
    cells: n,
    kind,
    use: dominant,
    built: most,
    era: Math.round(meanEra) || 4,
    bbox: [minCX * cell, minCZ * cell, (maxCX + 1) * cell, (maxCZ + 1) * cell],
  }
}

function extractSeams(terrain, city, macroId, subId) {
  const { columns, cell } = terrain
  const vCols = columns + 1
  const adj = new Map()
  const edges = []

  const addEdge = (u, v, era) => {
    const idx = edges.length
    edges.push({ u, v, era, used: false })
    let lu = adj.get(u)
    if (!lu) adj.set(u, lu = [])
    lu.push(idx)
    let lv = adj.get(v)
    if (!lv) adj.set(v, lv = [])
    lv.push(idx)
  }

  for (let z = 0; z < columns; z++) {
    for (let x = 0; x < columns; x++) {
      const a = x + z * columns
      const sa = subId[a]
      if (sa < 0) continue
      const ma = macroId[a]
      const ua = city.use[a]
      const na = city.newtown?.[a] === 1
      const ba = BUILT_USES.has(ua) && ua !== USE.PUBLIC

      if (x + 1 < columns) {
        const b = a + 1
        const sb = subId[b]
        if (sb >= 0 && sb !== sa && macroId[b] === ma && !na && city.newtown?.[b] !== 1) {
          const ub = city.use[b]
          const bb = BUILT_USES.has(ub) && ub !== USE.PUBLIC
          if (ba || bb) {
            const u = (x + 1) + z * vCols
            const v = (x + 1) + (z + 1) * vCols
            addEdge(u, v, ((city.built?.[a] || 4) + (city.built?.[b] || 4)) * 0.5)
          }
        }
      }

      if (z + 1 < columns) {
        const b = a + columns
        const sb = subId[b]
        if (sb >= 0 && sb !== sa && macroId[b] === ma && !na && city.newtown?.[b] !== 1) {
          const ub = city.use[b]
          const bb = BUILT_USES.has(ub) && ub !== USE.PUBLIC
          if (ba || bb) {
            const u = x + (z + 1) * vCols
            const v = (x + 1) + (z + 1) * vCols
            addEdge(u, v, ((city.built?.[a] || 4) + (city.built?.[b] || 4)) * 0.5)
          }
        }
      }
    }
  }

  const seams = []
  const size = columns * cell
  const seamIndex = segmentIndex(size, 150)
  const tileStep = 200
  const tileCols = Math.ceil(size / tileStep) + 1
  const seamBuckets = new Map()

  const registerSeamBuckets = (id, minX, minZ, maxX, maxZ) => {
    const x0 = Math.max(0, Math.floor(minX / tileStep))
    const x1 = Math.min(tileCols - 1, Math.floor(maxX / tileStep))
    const z0 = Math.max(0, Math.floor(minZ / tileStep))
    const z1 = Math.min(tileCols - 1, Math.floor(maxZ / tileStep))
    for (let z = z0; z <= z1; z++) {
      for (let x = x0; x <= x1; x++) {
        const key = x + z * tileCols
        let list = seamBuckets.get(key)
        if (!list) seamBuckets.set(key, list = [])
        list.push(id)
      }
    }
  }

  const traceChain = (startV, firstEdgeIdx) => {
    const chain = [startV]
    let curV = startV
    let curEdgeIdx = firstEdgeIdx
    let eraSum = 0
    let eraCount = 0
    while (curEdgeIdx >= 0) {
      const e = edges[curEdgeIdx]
      if (e.used) break
      e.used = true
      eraSum += e.era
      eraCount++
      const nextV = e.u === curV ? e.v : e.u
      chain.push(nextV)
      curV = nextV
      const nextList = adj.get(curV)
      if (!nextList || nextList.length !== 2) break
      const nxt0 = nextList[0]
      const nxt1 = nextList[1]
      curEdgeIdx = !edges[nxt0].used ? nxt0 : (!edges[nxt1].used ? nxt1 : -1)
    }
    if (chain.length < 4) return
    const raw = []
    for (const vk of chain) {
      const vx = vk % vCols
      const vz = (vk - vx) / vCols
      raw.push(vx * cell, vz * cell)
    }
    const smoothed = resample(chaikin(simplify(raw, 14), 2), 14)
    if (lengthOf(smoothed) < 60) return
    let minX = Infinity
    let minZ = Infinity
    let maxX = -Infinity
    let maxZ = -Infinity
    for (let k = 0; k < smoothed.length; k += 2) {
      const px = smoothed[k]
      const pz = smoothed[k + 1]
      if (px < minX) minX = px
      if (px > maxX) maxX = px
      if (pz < minZ) minZ = pz
      if (pz > maxZ) maxZ = pz
    }
    const id = seams.length
    const avgEra = Math.round(eraSum / Math.max(1, eraCount)) || 4
    const width = avgEra <= 2 ? 4.2 : 4.8
    seams.push({ id, points: Float64Array.from(smoothed), width, kind: 'street', era: avgEra, bbox: [minX, minZ, maxX, maxZ] })
    registerSeamBuckets(id, minX, minZ, maxX, maxZ)
    for (let k = 2; k < smoothed.length; k += 2) {
      seamIndex.add(smoothed[k - 2], smoothed[k - 1], smoothed[k], smoothed[k + 1], id)
    }
  }

  for (const [v, list] of adj) {
    if (list.length === 2) continue
    for (const edgeIdx of list) {
      if (!edges[edgeIdx].used) traceChain(v, edgeIdx)
    }
  }
  for (let i = 0; i < edges.length; i++) {
    if (!edges[i].used) traceChain(edges[i].u, i)
  }
  return { seams, seamIndex, seamBuckets, seamTileStep: tileStep, seamTileCols: tileCols }
}

function seamsInBox(blocks, x0, z0, x1, z1) {
  const { seamBuckets, seamTileStep, seamTileCols, seams } = blocks
  if (!seams?.length) return []
  const c0 = Math.max(0, Math.floor(x0 / seamTileStep))
  const c1 = Math.min(seamTileCols - 1, Math.floor(x1 / seamTileStep))
  const r0 = Math.max(0, Math.floor(z0 / seamTileStep))
  const r1 = Math.min(seamTileCols - 1, Math.floor(z1 / seamTileStep))
  const seen = new Set()
  for (let r = r0; r <= r1; r++) {
    for (let c = c0; c <= c1; c++) {
      const list = seamBuckets.get(c + r * seamTileCols)
      if (!list) continue
      for (const id of list) seen.add(id)
    }
  }
  return [...seen].sort((a, b) => a - b)
}

export function superblocks(terrain, city, rail, seed = terrain.seed ?? 0) {
  const { columns, cell } = terrain
  const count = columns * columns
  const barrier = new Uint8Array(count)
  for (let index = 0; index < count; index++) {
    const use = city.use[index]
    if (city.majorMask[index] || use === USE.WATER || use === USE.RIVERBED) barrier[index] = 1
  }
  for (const line of rail?.lines ?? []) {
    const points = line.alignment.points
    for (let k = 0; k < points.length / 2; k++) {
      if (line.profile.structure[k] >= 5) continue
      const x = Math.floor(points[k * 2] / cell)
      const z = Math.floor(points[k * 2 + 1] / cell)
      if (x >= 0 && z >= 0 && x < columns && z < columns) barrier[x + z * columns] = 1
    }
  }

  const macroId = new Int32Array(count).fill(-1)
  const id = new Int32Array(count).fill(-1)
  const queue = new Int32Array(count)
  const blocks = []
  let macroCount = 0

  for (let root = 0; root < count; root++) {
    if (barrier[root] || macroId[root] >= 0) continue
    const macro = macroCount++
    let head = 0
    let tail = 0
    queue[tail++] = root
    macroId[root] = macro
    let builtCount = 0
    let plannedCount = 0
    while (head < tail) {
      const at = queue[head++]
      const x = at % columns
      const z = (at - x) / columns
      if (BUILT_USES.has(city.use[at])) builtCount++
      if (city.newtown?.[at]) plannedCount++
      if (x > 0 && !barrier[at - 1] && macroId[at - 1] < 0) { macroId[at - 1] = macro; queue[tail++] = at - 1 }
      if (x < columns - 1 && !barrier[at + 1] && macroId[at + 1] < 0) { macroId[at + 1] = macro; queue[tail++] = at + 1 }
      if (z > 0 && !barrier[at - columns] && macroId[at - columns] < 0) { macroId[at - columns] = macro; queue[tail++] = at - columns }
      if (z < columns - 1 && !barrier[at + columns] && macroId[at + columns] < 0) { macroId[at + columns] = macro; queue[tail++] = at + columns }
    }

    const n = tail
    if (n >= 220 && builtCount >= 130 && plannedCount <= n * 0.5) {
      const targetTracts = Math.min(8, Math.max(2, Math.round(builtCount / 220)))
      const seeds = []
      const builtIdx = []
      for (let k = 0; k < n; k++) {
        const at = queue[k]
        if (BUILT_USES.has(city.use[at])) builtIdx.push(at)
      }
      builtIdx.sort((a, b) => a - b)

      for (const minDistCells of [11.0, 8.0, 5.0]) {
        const stride = Math.max(1, Math.floor(builtIdx.length / (targetTracts * 2)))
        const minDist2 = minDistCells * minDistCells
        for (let pass = 0; pass < stride && seeds.length < targetTracts; pass++) {
          for (let bi = pass; bi < builtIdx.length && seeds.length < targetTracts; bi += stride) {
            const at = builtIdx[bi]
            const cx = at % columns
            const cz = (at - cx) / columns
            let ok = true
            for (const s of seeds) {
              const dx = cx - s.cx
              const dz = cz - s.cz
              if (dx * dx + dz * dz < minDist2) { ok = false; break }
            }
            if (ok) seeds.push({ cx, cz, wx: (cx + 0.5) * cell, wz: (cz + 0.5) * cell, cells: [] })
          }
        }
        if (seeds.length >= targetTracts || seeds.length >= 2) break
      }

      if (seeds.length >= 2) {
        const warpLarge = n <= 3500
        for (let k = 0; k < n; k++) {
          const at = queue[k]
          const x = at % columns
          const z = (at - x) / columns
          let px = (x + 0.5) * cell
          let pz = (z + 0.5) * cell
          if (warpLarge || BUILT_USES.has(city.use[at])) {
            px += 10 * fbm(seed + 41, px / 220, pz / 220, 1)
            pz += 10 * fbm(seed + 42, px / 220, pz / 220, 1)
          }
          let bestIdx = 0
          let bestD2 = Infinity
          for (let si = 0; si < seeds.length; si++) {
            const dx = px - seeds[si].wx
            const dz = pz - seeds[si].wz
            const d2 = dx * dx + dz * dz
            if (d2 < bestD2) { bestD2 = d2; bestIdx = si }
          }
          seeds[bestIdx].cells.push(at)
        }
        for (const s of seeds) {
          if (!s.cells.length) continue
          const block = blocks.length
          for (const at of s.cells) id[at] = block
          blocks.push(summarizeTract(terrain, city, s.cells, s.cells.length, seed, s.cx, s.cz))
        }
        continue
      }
    }

    const block = blocks.length
    for (let k = 0; k < n; k++) id[queue[k]] = block
    blocks.push(summarizeTract(terrain, city, queue, n, seed, (queue[0] % columns), Math.floor(queue[0] / columns)))
  }

  const { seams, seamIndex, seamBuckets, seamTileStep, seamTileCols } = extractSeams(terrain, city, macroId, id)
  return { id, blocks, seams, seamIndex, seamBuckets, seamTileStep, seamTileCols }
}

function latticeOf(seed, index, block) {
  const shape = LATTICE[block.kind] ?? LATTICE[USE.LOW]
  const ux = Math.cos(block.angle)
  const uz = Math.sin(block.angle)
  const vx = -uz
  const vz = ux
  const bendMacro = block.kind === 'planned' ? 0.03 * shape.b : 0.08 * shape.b
  const node = (i, j) => {
    const bx = block.x + i * shape.a * ux + j * shape.b * vx
    const bz = block.z + i * shape.a * uz + j * shape.b * vz
    const h = hash3(seed + index, i, j)
    const jx = shape.wobble > 0 ? ((h & 1023) / 1023 - 0.5) * 2 * shape.wobble * shape.a : 0
    const jz = shape.wobble > 0 ? (((h >>> 10) & 1023) / 1023 - 0.5) * 2 * shape.wobble * shape.a : 0
    const wx = bendMacro * fbm(seed + 77, bx / 720, bz / 720, 1)
    const wz = bendMacro * fbm(seed + 78, bx / 720, bz / 720, 1)
    return [bx + jx + wx, bz + jz + wz]
  }
  const toLattice = (x, z) => {
    const dx = x - block.x
    const dz = z - block.z
    return [(dx * ux + dz * uz) / shape.a, (dx * vx + dz * vz) / shape.b]
  }
  const cacheFor = (i0, i1, j0, j1) => {
    const cols = i1 - i0 + 2
    const rows = j1 - j0 + 2
    const coords = new Float64Array(cols * rows * 2)
    coords.fill(NaN)
    return (i, j) => {
      const idx = ((i - i0) + (j - j0) * cols) * 2
      if (Number.isNaN(coords[idx])) {
        const [x, z] = node(i, j)
        coords[idx] = x
        coords[idx + 1] = z
      }
      return [coords[idx], coords[idx + 1]]
    }
  }
  return { shape, node, toLattice, cacheFor }
}

function edgeDropped(seed, block, lattice, i, j, direction) {
  if (direction === 2) {
    return lattice.shape.dropLong > 0 && unitHash(seed + block, i * 2 + 2, j) < lattice.shape.dropLong
  }
  const rate = lattice.shape.dropCross * (lattice.shape.wobble >= 0.02 ? (((i + j) & 1) ? 1.45 : 0.55) : 1)
  return unitHash(seed + block, i * 2 + 1, j) < rate
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
  return [...ids].sort((a, b) => a - b)
}

function cellAt(region, x, z) {
  const { columns, cell } = region.terrain
  const c = Math.floor(x / cell)
  const r = Math.floor(z / cell)
  if (c < 0 || r < 0 || c >= columns || r >= columns) return -1
  return c + r * columns
}

function latticeRange(lattice, blockParams, x0, z0, x1, z1) {
  const bx0 = blockParams.bbox ? Math.max(x0, blockParams.bbox[0] - 40) : x0
  const bz0 = blockParams.bbox ? Math.max(z0, blockParams.bbox[1] - 40) : z0
  const bx1 = blockParams.bbox ? Math.min(x1, blockParams.bbox[2] + 40) : x1
  const bz1 = blockParams.bbox ? Math.min(z1, blockParams.bbox[3] + 40) : z1
  if (bx0 > bx1 || bz0 > bz1) return [0, -1, 0, -1]
  let i0 = Infinity
  let i1 = -Infinity
  let j0 = Infinity
  let j1 = -Infinity
  for (const [x, z] of [[bx0, bz0], [bx1, bz0], [bx0, bz1], [bx1, bz1]]) {
    const [i, j] = lattice.toLattice(x, z)
    i0 = Math.min(i0, i)
    i1 = Math.max(i1, i)
    j0 = Math.min(j0, j)
    j1 = Math.max(j1, j)
  }
  return [Math.floor(i0) - 2, Math.ceil(i1) + 2, Math.floor(j0) - 2, Math.ceil(j1) + 2]
}

// Era-dependent fine lane (路地・位置指定道路・横丁) inside a deep lattice cell `(i, j)`.
function cellFineLane(region, seed, block, lattice, getNode, i, j) {
  const p00 = getNode(i, j)
  const p10 = getNode(i + 1, j)
  const p01 = getNode(i, j + 1)
  const p11 = getNode(i + 1, j + 1)
  const cx = (p00[0] + p10[0] + p01[0] + p11[0]) * 0.25
  const cz = (p00[1] + p10[1] + p01[1] + p11[1]) * 0.25
  const cell = cellAt(region, cx, cz)
  if (cell < 0 || region.blocks.id[cell] !== block) return null
  const use = region.city.use[cell]
  if (use !== USE.LOW && use !== USE.DENSE && use !== USE.COMMERCIAL) return null
  if (region.city.newtown?.[cell] === 1) return null

  const sideA = Math.hypot(p10[0] - p00[0], p10[1] - p00[1])
  const sideB = Math.hypot(p01[0] - p00[0], p01[1] - p00[1])
  if (sideA < 34 || sideB < 46) return null

  const era = region.city.built?.[cell] || 4
  const h = hash3(seed + 313, block * 97 + i, j)
  const roll = (h & 1023) / 1024

  const drop0 = edgeDropped(seed, block, lattice, i, j, 2)
  const drop1 = edgeDropped(seed, block, lattice, i + 1, j, 2)

  const chance = (drop0 !== drop1) ? 0.55 : era === 1 ? 0.28 : era <= 3 ? 0.22 : use === USE.COMMERCIAL ? 0.18 : 0.10
  if (roll > chance) return null

  const at = (s, t) => [
    (p00[0] * (1 - s) + p10[0] * s) * (1 - t) + (p01[0] * (1 - s) + p11[0] * s) * t,
    (p00[1] * (1 - s) + p10[1] * s) * (1 - t) + (p01[1] * (1 - s) + p11[1] * s) * t,
  ]

  const isAlley = era <= 3 || use === USE.COMMERCIAL
  const width = isAlley ? (use === USE.COMMERCIAL ? 3.0 : era === 1 ? 2.6 : 2.8) : 4.0
  const kind = isAlley ? 'alley' : 'lane'

  let from
  let to
  let culDeSac = false
  if (isAlley && ((h >>> 10) & 3) !== 0 && !drop0 && !drop1) {
    const tMid = 0.44 + (((h >>> 12) & 255) / 255) * 0.12
    from = at(0, tMid)
    to = at(1, tMid)
  } else {
    culDeSac = true
    const sMid = 0.45 + (((h >>> 12) & 255) / 255) * 0.10
    const fromSouth = ((h >>> 11) & 1) === 0
    // Require the parent cross-street edge to be active so cul-de-sac lanes never float detached from roads.
    const anchorDrop = edgeDropped(seed, block, lattice, i, fromSouth ? j : j + 1, 1)
    if (anchorDrop) return null
    from = at(sMid, fromSouth ? 0 : 1)
    to = at(sMid, fromSouth ? 0.68 : 0.32)
  }

  if (!insideCell(region, block, from[0], from[1]) || !insideCell(region, block, to[0], to[1])) return null
  const corners = [from[0], from[1], to[0], to[1], to[0], to[1], from[0], from[1]]
  if (clearance(region.roadIndex, corners, (k) => ROAD_WIDTH[k] / 2) < 2.5) return null
  if (clearance(region.blocks.seamIndex, corners, () => 2.4) < 2.2) return null
  if (streamClearance(region, corners) < 2.8) return null
  if (railClearance(region, corners) < 2.2) return null

  return { points: [from[0], from[1], to[0], to[1]], width, kind, era, culDeSac }
}

function insideCell(region, block, x, z) {
  const at = cellAt(region, x, z)
  return at >= 0 && region.blocks.id[at] === block && BUILT_USES.has(region.city.use[at])
}

// Skip longitudinal lattice segments running parallel within 8.5 m of a main or seam road,
// which otherwise create unbuildable narrow slivers alongside arterial roads.
function isParallelSliver(region, ax, az, bx, bz) {
  const dx = bx - ax
  const dz = bz - az
  const len = Math.hypot(dx, dz)
  if (len < 1e-3) return true
  const ux = dx / len
  const uz = dz / len
  const mx = (ax + bx) * 0.5
  const mz = (az + bz) * 0.5
  let sliver = false
  const check = (index, getHalf) => {
    if (!index || sliver) return
    index.near(mx, mz, 19, (seg) => {
      if (sliver) return
      const sdx = seg.bx - seg.ax
      const sdz = seg.bz - seg.az
      const slen = Math.hypot(sdx, sdz)
      if (slen < 1e-3) return
      const dot = Math.abs((ux * sdx + uz * sdz) / slen)
      if (dot < 0.78) return
      const l2 = sdx * sdx + sdz * sdz
      const t = Math.max(0, Math.min(1, ((mx - seg.ax) * sdx + (mz - seg.az) * sdz) / l2))
      const d = Math.hypot(seg.ax + sdx * t - mx, seg.az + sdz * t - mz) - getHalf(seg.data)
      if (d < 8.5) sliver = true
    })
  }
  check(region.roadIndex, (k) => ROAD_WIDTH[k] * 0.5)
  check(region.blocks.seamIndex, () => 2.4)
  return sliver
}

// Shared deterministic street-segment solver for a lattice edge `(i,j)->(i+di,j+dj)`,
// used identically by both `streetsIn` and `buildingsIn` so every parcel fronts an actual street.
function resolveLatticeEdges(region, seed, block, lattice, getNode, i, j, di, dj, direction) {
  if (edgeDropped(seed, block, lattice, i, j, direction)) return []
  const a = getNode(i, j)
  const b = getNode(i + di, j + dj)
  const aIn = insideCell(region, block, a[0], a[1])
  const bIn = insideCell(region, block, b[0], b[1])
  if (!aIn && !bIn) return []
  if (direction === 2 && aIn && bIn && isParallelSliver(region, a[0], a[1], b[0], b[1])) return []

  if (aIn !== bIn) {
    const start = aIn ? a : b
    const end = aIn ? b : a
    const meet = meetRoad(region, start, end)
    if (meet) return Math.hypot(meet[0] - start[0], meet[1] - start[1]) >= 9.0 ? [[start[0], start[1], meet[0], meet[1]]] : []
    // Boundary cul-de-sac stopping cleanly at the edge of built residential land.
    let lo = 0
    let hi = 1
    for (let s = 0; s < 6; s++) {
      const m = (lo + hi) * 0.5
      if (insideCell(region, block, start[0] + (end[0] - start[0]) * m, start[1] + (end[1] - start[1]) * m)) lo = m
      else hi = m
    }
    const bx = start[0] + (end[0] - start[0]) * lo
    const bz = start[1] + (end[1] - start[1]) * lo
    return Math.hypot(bx - start[0], bz - start[1]) >= 12.0 ? [[start[0], start[1], bx, bz]] : []
  }

  const mx = (a[0] + b[0]) * 0.5
  const mz = (a[1] + b[1]) * 0.5
  const rad = Math.hypot(b[0] - a[0], b[1] - a[1]) * 0.6
  let cutA = 1
  let cutB = 1
  const clipHit = (seg) => {
    const hit = crossing(a[0], a[1], b[0], b[1], seg.ax, seg.az, seg.bx, seg.bz)
    if (!hit) return
    if (hit.t > 0.02 && hit.t < cutA) cutA = hit.t
    if (1 - hit.t > 0.02 && 1 - hit.t < cutB) cutB = 1 - hit.t
  }
  region.blocks.seamIndex?.near(mx, mz, rad, clipHit)
  region.roadIndex.near(mx, mz, rad, clipHit)

  if (cutA < 0.98) {
    const segs = []
    if (cutA >= 0.25) {
      const fx = a[0] + (b[0] - a[0]) * cutA, fz = a[1] + (b[1] - a[1]) * cutA
      if (Math.hypot(fx - a[0], fz - a[1]) >= 8.5) segs.push([a[0], a[1], fx, fz])
    }
    if (cutB >= 0.25 && cutA + cutB < 0.98) {
      const bx = b[0] + (a[0] - b[0]) * cutB, bz = b[1] + (a[1] - b[1]) * cutB
      if (Math.hypot(bx - b[0], bz - b[1]) >= 8.5) segs.push([b[0], b[1], bx, bz])
    }
    return segs
  }

  let from = a
  let to = b
  if (direction === 1) {
    const spineAlive = (si, sj) => {
      const sa = getNode(si, sj)
      const sb = getNode(si, sj + 1)
      if (!insideCell(region, block, sa[0], sa[1]) || !insideCell(region, block, sb[0], sb[1])) return false
      return !edgeDropped(seed, block, lattice, si, sj, 2) && !isParallelSliver(region, sa[0], sa[1], sb[0], sb[1])
    }
    const aDead = !spineAlive(i, j) && !spineAlive(i, j - 1)
    const bDead = !spineAlive(i + 1, j) && !spineAlive(i + 1, j - 1)
    if (bDead && !aDead) {
      const meet = meetRoad(region, a, b)
      if (meet) to = meet
    } else if (aDead && !bDead) {
      const meet = meetRoad(region, b, a)
      if (meet) from = meet
    }
  }
  return Math.hypot(to[0] - from[0], to[1] - from[1]) >= 6.0 ? [[from[0], from[1], to[0], to[1]]] : []
}

// Local streets crossing the box: [{ points: [x0, z0, x1, z1], width, kind, era }].
export function streetsIn(region, x0, z0, x1, z1) {
  const seed = region.seed
  const out = []

  for (const seamId of seamsInBox(region.blocks, x0 - 15, z0 - 15, x1 + 15, z1 + 15)) {
    const seam = region.blocks.seams[seamId]
    const [b0x, b0z, b1x, b1z] = seam.bbox
    if (b1x < x0 - 15 || b0x > x1 + 15 || b1z < z0 - 15 || b0z > z1 + 15) continue
    const pts = seam.points
    for (let k = 2; k < pts.length; k += 2) {
      const ax = pts[k - 2]
      const az = pts[k - 1]
      const bx = pts[k]
      const bz = pts[k + 1]
      if (Math.max(ax, bx) < x0 - 10 || Math.min(ax, bx) > x1 + 10 || Math.max(az, bz) < z0 - 10 || Math.min(az, bz) > z1 + 10) continue
      out.push({ points: [ax, az, bx, bz], width: seam.width, kind: 'street', era: seam.era })
    }
  }

  for (const block of blocksInBox(region, x0, z0, x1, z1)) {
    const params = region.blocks.blocks[block]
    if (!params.built) continue
    const lattice = latticeOf(seed, block, params)
    const [i0, i1, j0, j1] = latticeRange(lattice, params, x0, z0, x1, z1)
    if (i1 < i0 || j1 < j0 || (i1 - i0) * (j1 - j0) > 40000) continue
    const getNode = lattice.cacheFor(i0 - 1, i1 + 1, j0 - 1, j1 + 1)

    for (let i = i0; i <= i1; i++) {
      for (let j = j0; j <= j1; j++) {
        for (const [di, dj, direction] of [[1, 0, 1], [0, 1, 2]]) {
          for (const [fx, fz, tx, tz] of resolveLatticeEdges(region, seed, block, lattice, getNode, i, j, di, dj, direction)) {
            if (Math.max(fx, tx) < x0 - 10 || Math.min(fx, tx) > x1 + 10 || Math.max(fz, tz) < z0 - 10 || Math.min(fz, tz) > z1 + 10) continue
            const midCell = cellAt(region, (fx + tx) * 0.5, (fz + tz) * 0.5)
            const era = (midCell >= 0 && region.city.built?.[midCell]) || params.era || 4
            const width = era === 1 && params.use === USE.DENSE ? 3.2 : lattice.shape.width
            const kind = width < 3.6 ? 'alley' : 'street'
            out.push({ points: [fx, fz, tx, tz], width, kind, era })
          }
        }
        if (i < i1 && j < j1) {
          const fine = cellFineLane(region, seed, block, lattice, getNode, i, j)
          if (fine) {
            const [ax, az, bx, bz] = fine.points
            const minX = Math.min(ax, bx)
            const maxX = Math.max(ax, bx)
            const minZ = Math.min(az, bz)
            const maxZ = Math.max(az, bz)
            if (maxX >= x0 - 10 && minX <= x1 + 10 && maxZ >= z0 - 10 && minZ <= z1 + 10) {
              out.push({ points: fine.points, width: fine.width, kind: fine.kind, era: fine.era })
            }
          }
        }
      }
    }
  }
  return out
}

function meetRoad(region, start, end) {
  const dx = end[0] - start[0]
  const dz = end[1] - start[1]
  const far = [start[0] + dx * 1.45, start[1] + dz * 1.45]
  const mx = (start[0] + far[0]) * 0.5
  const mz = (start[1] + far[1]) * 0.5
  const radius = Math.hypot(dx, dz) * 0.85
  let best = null
  let bestT = Infinity
  const visit = (segment) => {
    const hit = crossing(start[0], start[1], far[0], far[1], segment.ax, segment.az, segment.bx, segment.bz)
    if (hit && hit.t >= 0.02 && hit.t < bestT) {
      bestT = hit.t
      best = [start[0] + (far[0] - start[0]) * hit.t, start[1] + (far[1] - start[1]) * hit.t]
    }
  }
  region.roadIndex.near(mx, mz, radius, visit)
  region.blocks.seamIndex?.near(mx, mz, radius, visit)
  if (!best) return null
  // Do not extend a side street through an open stream to reach a distant road.
  let blockedByStream = false
  region.streams?.index?.near(mx, mz, radius, (stream) => {
    if (blockedByStream || stream.data?.covered) return
    const hit = crossing(start[0], start[1], best[0], best[1], stream.ax, stream.az, stream.bx, stream.bz)
    if (hit && hit.t > 0.05 && hit.t < 0.95) blockedByStream = true
  })
  return blockedByStream ? null : best
}

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

const streamClearance = (region, corners) => clearance(region.streams?.index, corners, (stream) => (stream.covered ? -1 : stream.width / 2))
const railClearance = (region, corners) => clearance(region.railIndex, corners, (half) => half)

function makeOBB(corners) {
  const cx = (corners[0] + corners[2] + corners[4] + corners[6]) * 0.25
  const cz = (corners[1] + corners[3] + corners[5] + corners[7]) * 0.25
  const ex = corners[2] - corners[0]
  const ez = corners[3] - corners[1]
  const fx = corners[6] - corners[0]
  const fz = corners[7] - corners[1]
  const w = Math.hypot(ex, ez)
  const d = Math.hypot(fx, fz)
  const ux = w > 1e-6 ? ex / w : 1
  const uz = w > 1e-6 ? ez / w : 0
  const nx = d > 1e-6 ? fx / d : -uz
  const nz = d > 1e-6 ? fz / d : ux
  const minX = Math.min(corners[0], corners[2], corners[4], corners[6])
  const maxX = Math.max(corners[0], corners[2], corners[4], corners[6])
  const minZ = Math.min(corners[1], corners[3], corners[5], corners[7])
  const maxZ = Math.max(corners[1], corners[3], corners[5], corners[7])
  return {
    corners, cx, cz, ux, uz, nx, nz,
    hw: w * 0.5, hd: d * 0.5,
    radius: Math.hypot(w * 0.5, d * 0.5),
    minX, maxX, minZ, maxZ,
  }
}

function obbsOverlap(a, b, pad = 0.20) {
  if (a.maxX + pad < b.minX - pad || b.maxX + pad < a.minX - pad ||
      a.maxZ + pad < b.minZ - pad || b.maxZ + pad < a.minZ - pad) return false
  const dx = b.cx - a.cx
  const dz = b.cz - a.cz
  const rSum = a.radius + b.radius + pad * 2.83
  if (dx * dx + dz * dz > rSum * rSum) return false
  const ahw = a.hw + pad
  const ahd = a.hd + pad
  const bhw = b.hw + pad
  const bhd = b.hd + pad

  const uu = Math.abs(a.ux * b.ux + a.uz * b.uz)
  const un = Math.abs(a.ux * b.nx + a.uz * b.nz)
  const nu = Math.abs(a.nx * b.ux + a.nz * b.uz)
  const nn = Math.abs(a.nx * b.nx + a.nz * b.nz)

  if (Math.abs(dx * a.ux + dz * a.uz) >= ahw + bhw * uu + bhd * un) return false
  if (Math.abs(dx * a.nx + dz * a.nz) >= ahd + bhw * nu + bhd * nn) return false
  if (Math.abs(dx * b.ux + dz * b.uz) >= bhw + ahw * uu + ahd * nu) return false
  if (Math.abs(dx * b.nx + dz * b.nz) >= bhd + ahw * un + ahd * nn) return false
  return true
}

function segmentHitsOBB(ax, az, bx, bz, obb, margin) {
  const rx = obb.hw + margin
  const rz = obb.hd + margin
  const dax = ax - obb.cx
  const daz = az - obb.cz
  const dbx = bx - obb.cx
  const dbz = bz - obb.cz
  const u0 = dax * obb.ux + daz * obb.uz
  const v0 = dax * obb.nx + daz * obb.nz
  const u1 = dbx * obb.ux + dbz * obb.uz
  const v1 = dbx * obb.nx + dbz * obb.nz
  if (Math.max(u0, u1) < -rx || Math.min(u0, u1) > rx || Math.max(v0, v1) < -rz || Math.min(v0, v1) > rz) return false
  const du = u1 - u0
  const dv = v1 - v0
  let t0 = 0
  let t1 = 1
  const clip = (p, q) => {
    if (Math.abs(p) < 1e-8) return q >= 0
    const r = q / p
    if (p < 0) {
      if (r > t1) return false
      if (r > t0) t0 = r
    } else {
      if (r < t0) return false
      if (r < t1) t1 = r
    }
    return true
  }
  return clip(-du, u0 + rx) && clip(du, rx - u0) && clip(-dv, v0 + rz) && clip(dv, rz - v0) && t0 <= t1
}

function samplePolylineAt(pts, cumS, targetS, span = 4) {
  const segCount = cumS.length - 1
  let lo = 0
  let hi = segCount - 1
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (cumS[mid + 1] < targetS) lo = mid + 1
    else hi = mid
  }
  const segStart = cumS[lo]
  const segLen = Math.max(1e-6, cumS[lo + 1] - segStart)
  const frac = Math.max(0, Math.min(1, (targetS - segStart) / segLen))
  const ax = pts[lo * 2]
  const az = pts[lo * 2 + 1]
  const bx = pts[lo * 2 + 2]
  const bz = pts[lo * 2 + 3]
  const x = ax + (bx - ax) * frac
  const z = az + (bz - az) * frac

  const pointAtS = (sQuery) => {
    const sq = Math.max(0, Math.min(cumS[segCount], sQuery))
    let l = 0
    let h = segCount - 1
    while (l < h) {
      const m = (l + h) >> 1
      if (cumS[m + 1] < sq) l = m + 1
      else h = m
    }
    const s0 = cumS[l]
    const sl = Math.max(1e-6, cumS[l + 1] - s0)
    const t = Math.max(0, Math.min(1, (sq - s0) / sl))
    return [pts[l * 2] + (pts[l * 2 + 2] - pts[l * 2]) * t, pts[l * 2 + 1] + (pts[l * 2 + 3] - pts[l * 2 + 1]) * t]
  }

  const pPrev = pointAtS(targetS - span)
  const pNext = pointAtS(targetS + span)
  const tdx = pNext[0] - pPrev[0]
  const tdz = pNext[1] - pPrev[1]
  const tlen = Math.hypot(tdx, tdz) || 1
  const tx = tdx / tlen
  const tz = tdz / tlen
  const segL = Math.hypot(bx - ax, bz - az) || 1
  const sharpTurn = Math.abs(tx * (bx - ax) / segL + tz * (bz - az) / segL) < 0.94
  return { x, z, tx, tz, sharpTurn }
}

const polyMetaCache = new WeakMap()

function getPolyMeta(obj) {
  let meta = polyMetaCache.get(obj)
  if (meta) return meta
  const pts = obj.points
  let minX = Infinity
  let minZ = Infinity
  let maxX = -Infinity
  let maxZ = -Infinity
  const n = pts.length / 2
  const cumS = new Float64Array(n)
  minX = maxX = pts[0]
  minZ = maxZ = pts[1]
  for (let i = 1; i < n; i++) {
    const x = pts[i * 2]
    const z = pts[i * 2 + 1]
    if (x < minX) minX = x
    if (x > maxX) maxX = x
    if (z < minZ) minZ = z
    if (z > maxZ) maxZ = z
    cumS[i] = cumS[i - 1] + Math.hypot(x - pts[i * 2 - 2], z - pts[i * 2 - 1])
  }
  meta = { bbox: obj.bbox ?? [minX, minZ, maxX, maxZ], cumS }
  polyMetaCache.set(obj, meta)
  return meta
}

function intKey(gx, gz) {
  return (gx + 2048) + ((gz + 2048) * 4096)
}

const qLot = (v) => Math.max(0, Math.min(255, Math.floor((Math.max(0, v) + 1e-4) * 10))) / 10

function solarAdjustPads(padL, padR, padF, padB, frontSouth, leftSouth, tier) {
  let l = padL
  let r = padR
  let f = padF
  let b = padB
  const totalFB = f + b
  if (frontSouth < -0.35) {
    // North street (北側道路): pull house toward the street and open the garden in the sunny south backyard.
    const maxF = tier === 4 ? 2.6 : tier === 3 ? 1.55 : tier >= 1 ? 1.05 : 0.55
    f = Math.min(f, maxF)
    b = Math.max(b, totalFB - f) + (tier >= 3 ? 0.9 : tier === 2 ? 0.6 : tier === 1 ? 0.45 : 0.15)
  } else if (frontSouth > 0.35) {
    // South street (南側道路): place main garden on the sunny south frontage and tuck service apron behind.
    const maxB = tier === 4 ? 1.5 : tier === 3 ? 0.95 : 0.6
    b = Math.min(b, maxB)
    f = Math.max(f, totalFB - b)
  }
  // Keep wider driveway pads on the northern/shaded side when the left flank faces south (`leftSouth > 0.35`).
  if (leftSouth > 0.35 && l > r + 0.3) {
    const tmp = l
    l = r
    r = tmp
  }
  return [l, r, f, b]
}

function wealthAt(region, x, z, cell, use) {
  const { city, terrain, seed } = region
  const price = city.landPrice ? city.landPrice[cell] : 50
  const env = fbm(seed + 511, x / 680, z / 680, 1) * 0.5 + 0.5
  const lf = terrain.land ? terrain.land[cell] : LAND.TERRACE
  const landBonus = lf === LAND.PLATEAU ? 0.14 : lf === LAND.TERRACE ? 0.05 : lf === LAND.LOWLAND ? -0.10 : -0.02
  const quiet = (city.toArterial?.[cell] ?? 100) > 110 ? 0.08 : 0
  const useBias = use === USE.DENSE ? -0.15 : 0
  const raw = env * 0.50 + 0.24 + landBonus + quiet + priceRatio(price) * 0.16 + useBias
  return Math.max(0.05, Math.min(0.96, raw))
}

function pickTier(wealth, use, roll, allowEstate = false) {
  if (use === USE.DENSE) {
    if (roll > 1 - (0.04 + 0.08 * wealth)) return 2
    if (roll > 0.44 - 0.14 * wealth) return 1
    return 0
  }
  if (use === USE.LOW) {
    const estateChance = allowEstate ? (wealth >= 0.72 ? 0.022 : wealth >= 0.55 ? 0.008 : 0.002) : 0
    if (roll > 1 - estateChance) return 4
    const t3 = estateChance + 0.04 + 0.17 * wealth
    if (roll > 1 - t3) return 3
    const t2 = t3 + 0.18 + 0.16 * wealth
    if (roll > 1 - t2) return 2
    if (roll > 0.22 - 0.10 * wealth) return 1
    return 0
  }
  return 1
}

// Buildings in the box: [{ corners: [x0,z0,...x3,z3], lot: [padL,padR,padF,padB], tier, floors, use, tone, cell }].
// Each building is validated together with its fenced/hedged parcel (`lot`) against neighboring lots and roads.
export function buildingsIn(region, x0, z0, x1, z1) {
  const seed = region.seed
  const { city, size } = region
  const padBox = 56
  const bx0 = x0 - padBox
  const bz0 = z0 - padBox
  const bx1 = x1 + padBox
  const bz1 = z1 + padBox

  const rectCorners = (ox, oz, ux, uz, nx, nz, a0, a1, d0, d1) => [
    ox + ux * a0 + nx * d0, oz + uz * a0 + nz * d0,
    ox + ux * a1 + nx * d0, oz + uz * a1 + nz * d0,
    ox + ux * a1 + nx * d1, oz + uz * a1 + nz * d1,
    ox + ux * a0 + nx * d1, oz + uz * a0 + nz * d1,
  ]

  const BUCKET = 28
  const localStreets = streetsIn(region, bx0 - 18, bz0 - 18, bx1 + 18, bz1 + 18)
  const streetBuckets = new Map()
  const streetSeen = new Int32Array(localStreets.length)
  for (let i = 0; i < localStreets.length; i++) {
    const [ax, az, bx, bz] = localStreets[i].points
    const pad = localStreets[i].width * 0.5 + 2
    const cx0 = Math.floor((Math.min(ax, bx) - pad) / BUCKET)
    const cx1 = Math.floor((Math.max(ax, bx) + pad) / BUCKET)
    const cz0 = Math.floor((Math.min(az, bz) - pad) / BUCKET)
    const cz1 = Math.floor((Math.max(az, bz) + pad) / BUCKET)
    for (let gz = cz0; gz <= cz1; gz++) {
      for (let gx = cx0; gx <= cx1; gx++) {
        const key = intKey(gx, gz)
        let list = streetBuckets.get(key)
        if (!list) streetBuckets.set(key, list = [])
        list.push(i)
      }
    }
  }

  const placedObbs = []
  const placedBuckets = new Map()
  let seenStamp = 1
  let placedSeen = new Int32Array(1024)
  const out = []

  const clearOfLocalStreets = (obb, extraMargin = 0.22) => {
    seenStamp++
    const cx0 = Math.floor((obb.minX - 6) / BUCKET)
    const cx1 = Math.floor((obb.maxX + 6) / BUCKET)
    const cz0 = Math.floor((obb.minZ - 6) / BUCKET)
    const cz1 = Math.floor((obb.maxZ + 6) / BUCKET)
    for (let gz = cz0; gz <= cz1; gz++) {
      for (let gx = cx0; gx <= cx1; gx++) {
        const list = streetBuckets.get(intKey(gx, gz))
        if (!list) continue
        for (const sIdx of list) {
          if (streetSeen[sIdx] === seenStamp) continue
          streetSeen[sIdx] = seenStamp
          const st = localStreets[sIdx]
          const [ax, az, bx, bz] = st.points
          if (segmentHitsOBB(ax, az, bx, bz, obb, st.width * 0.5 + extraMargin)) return false
        }
      }
    }
    return true
  }

  const overlapsPlaced = (bldgObb, lotObb) => {
    seenStamp++
    const cx0 = Math.floor((lotObb.minX - 1) / BUCKET)
    const cx1 = Math.floor((lotObb.maxX + 1) / BUCKET)
    const cz0 = Math.floor((lotObb.minZ - 1) / BUCKET)
    const cz1 = Math.floor((lotObb.maxZ + 1) / BUCKET)
    for (let gz = cz0; gz <= cz1; gz++) {
      for (let gx = cx0; gx <= cx1; gx++) {
        const list = placedBuckets.get(intKey(gx, gz))
        if (!list) continue
        for (const pIdx of list) {
          if (placedSeen[pIdx] === seenStamp) continue
          placedSeen[pIdx] = seenStamp
          const rec = placedObbs[pIdx]
          if (obbsOverlap(bldgObb, rec.bldg, 0.20)) return true
          if (obbsOverlap(lotObb, rec.lot, -0.025)) return true
        }
      }
    }
    return false
  }

  const registerPlaced = (bldg, lot) => {
    const id = placedObbs.length
    if (id >= placedSeen.length) {
      const next = new Int32Array(placedSeen.length * 2)
      next.set(placedSeen)
      placedSeen = next
    }
    placedObbs.push({ bldg, lot })
    const cx0 = Math.floor((lot.minX - 1) / BUCKET)
    const cx1 = Math.floor((lot.maxX + 1) / BUCKET)
    const cz0 = Math.floor((lot.minZ - 1) / BUCKET)
    const cz1 = Math.floor((lot.maxZ + 1) / BUCKET)
    for (let gz = cz0; gz <= cz1; gz++) {
      for (let gx = cx0; gx <= cx1; gx++) {
        const key = intKey(gx, gz)
        let list = placedBuckets.get(key)
        if (!list) placedBuckets.set(key, list = [])
        list.push(id)
      }
    }
  }

  const cornerClearAndDry = (corners, allowUse) => {
    const cx = (corners[0] + corners[2] + corners[4] + corners[6]) * 0.25
    const cz = (corners[1] + corners[3] + corners[5] + corners[7]) * 0.25
    for (let k = 0; k <= 8; k += 2) {
      const x = k < 8 ? corners[k] : cx
      const z = k < 8 ? corners[k + 1] : cz
      if (!Number.isFinite(x) || !Number.isFinite(z) || x < 2 || z < 2 || x > size - 2 || z > size - 2) return false
      const c = cellAt(region, x, z)
      if (c < 0) return false
      const u = city.use[c]
      if (!BUILT_USES.has(u)) return false
      if (allowUse !== USE.PUBLIC && u === USE.PUBLIC) return false
    }
    return true
  }

  const buildLotCorners = (bldgObb, lot) => {
    const [padL, padR, padF, padB] = lot
    const { cx, cz, ux, uz, nx, nz, hw, hd } = bldgObb
    return rectCorners(cx, cz, ux, uz, nx, nz, -(hw + padL), hw + padR, -(hd + padF), hd + padB)
  }

  const tryPush = (corners, lotRaw, tier, floors, use, tone, cell) => {
    const bldgObb = makeOBB(corners)
    if (bldgObb.maxX < bx0 - 24 || bldgObb.minX > bx1 + 24 || bldgObb.maxZ < bz0 - 24 || bldgObb.minZ > bz1 + 24) return false
    if (use === USE.LOW) {
      const a = bldgObb.hw * 2
      const b = bldgObb.hd * 2
      const dot = (corners[2] - corners[0]) * (corners[6] - corners[0]) + (corners[3] - corners[1]) * (corners[7] - corners[1])
      if (Math.abs(dot) > 1e-4 || a <= 3.1 || a >= 15.8 || b <= 3.1 || b >= 14.8) return false
    }
    let lot = [qLot(lotRaw[0]), qLot(lotRaw[1]), qLot(lotRaw[2]), qLot(lotRaw[3])]
    let lotCorners = buildLotCorners(bldgObb, lot)
    let lotObb = makeOBB(lotCorners)
    if (!cornerClearAndDry(corners, use)) return false

    const lotValid = (lc, lo) => (
      cornerClearAndDry(lc, use) &&
      !overlapsPlaced(bldgObb, lo) &&
      clearOfLocalStreets(lo, 0.05) &&
      clearance(region.roadIndex, lc, (kind) => ROAD_WIDTH[kind] / 2) >= 0.15 &&
      railClearance(region, lc) >= 0.35 &&
      streamClearance(region, lc) >= 0.85
    )

    if (!lotValid(lotCorners, lotObb)) {
      // Progressive shrink preserves most of the yard & driveway before falling back to tight boundaries.
      let fitted = false
      for (const s of [0.72, 0.44]) {
        const cand = [qLot(lot[0] * s), qLot(lot[1] * s), qLot(lot[2] * s), qLot(lot[3] * s)]
        const lc = buildLotCorners(bldgObb, cand)
        const lo = makeOBB(lc)
        if (lotValid(lc, lo)) { lot = cand; lotCorners = lc; lotObb = lo; fitted = true; break }
      }
      if (!fitted) {
        lot = [Math.min(lot[0], 0.2), Math.min(lot[1], 0.2), Math.min(lot[2], 0.3), Math.min(lot[3], 0.2)]
        lotCorners = buildLotCorners(bldgObb, lot)
        lotObb = makeOBB(lotCorners)
        if (!lotValid(lotCorners, lotObb)) return false
      }
    }

    if (clearance(region.roadIndex, corners, (kind) => ROAD_WIDTH[kind] / 2) < 1.50) return false
    if (railClearance(region, corners) < 1.05) return false
    if (streamClearance(region, corners) < 2.0) return false

    registerPlaced(bldgObb, lotObb)
    if (bldgObb.maxX >= x0 && bldgObb.minX <= x1 && bldgObb.maxZ >= z0 && bldgObb.minZ <= z1) {
      out.push({ corners, lot, tier, floors, use, tone, cell })
    }
    return true
  }

  // Pass 1: Continuous roadside buildings along major roads.
  const links = city.roads?.links ?? []
  for (let linkIdx = 0; linkIdx < links.length; linkIdx++) {
    const link = links[linkIdx]
    const { bbox: [lMinX, lMinZ, lMaxX, lMaxZ], cumS } = getPolyMeta(link)
    if (lMaxX < bx0 - 30 || lMinX > bx1 + 30 || lMaxZ < bz0 - 30 || lMinZ > bz1 + 30) continue

    const pts = link.points
    const totalLen = cumS[cumS.length - 1]
    const halfRoad = ROAD_WIDTH[link.kind] * 0.5
    const endClear = halfRoad + 6.5
    if (totalLen <= endClear * 2 + 8) continue

    const slotStep = link.kind >= 3 ? 9.6 : 8.4
    const segCount = cumS.length - 1
    for (let si = 0; si < segCount; si++) {
      const sx0 = pts[si * 2]
      const sz0 = pts[si * 2 + 1]
      const sx1 = pts[si * 2 + 2]
      const sz1 = pts[si * 2 + 3]
      if (Math.max(sx0, sx1) < bx0 - 28 || Math.min(sx0, sx1) > bx1 + 28 ||
          Math.max(sz0, sz1) < bz0 - 28 || Math.min(sz0, sz1) > bz1 + 28) continue

      const k0 = Math.max(0, Math.floor((Math.max(endClear, cumS[si]) - 0.01) / slotStep))
      const k1 = Math.floor((Math.min(totalLen - endClear, cumS[si + 1]) + 0.01) / slotStep)
      for (let k = k0; k <= k1; k++) {
        const sCenter = (k + 0.5) * slotStep
        if (sCenter < cumS[si] || sCenter > cumS[si + 1] || sCenter < endClear || sCenter > totalLen - endClear) continue
        const sample = samplePolylineAt(pts, cumS, sCenter, 5)
        if (sample.x < bx0 - 26 || sample.x > bx1 + 26 || sample.z < bz0 - 26 || sample.z > bz1 + 26) continue

        for (const side of [-1, 1]) {
          const h = hash3(seed + 409, linkIdx * 997 + k, side + 2)
          const nx = -sample.tz * side
          const nz = sample.tx * side
          const probeDist = halfRoad + 6.5
          const pCell = cellAt(region, sample.x + nx * probeDist, sample.z + nz * probeDist)
          if (pCell < 0) continue
          const use = city.use[pCell]
          if (city.newtown?.[pCell] === 1 && use === USE.MID) continue
          if (use !== USE.COMMERCIAL && use !== USE.MID && use !== USE.DENSE && use !== USE.LOW && use !== USE.HIGH) continue

          const price = city.landPrice ? city.landPrice[pCell] : 50
          const pNorm = priceRatio(price)
          if (pNorm < 0.2 && (h & 63) === 0) continue

          const wealth = wealthAt(region, sample.x, sample.z, pCell, use)
          const rTier = ((h >>> 18) & 1023) / 1024
          const tier = (use === USE.LOW || use === USE.DENSE) ? Math.min(2, pickTier(wealth, use, rTier, false)) : 1
          const rW = ((h >>> 5) & 255) / 255
          const rD = ((h >>> 13) & 255) / 255
          const rS = ((h >>> 21) & 15) / 15
          let w = slotStep - (0.65 - 0.20 * pNorm) - rW * (1.2 - 0.5 * pNorm)
          if (sample.sharpTurn) w *= 0.80
          let d = 8.2 + rD * 3.6
          let setback = 1.65 + rS * (0.9 - 0.4 * pNorm)
          let floors = 2
          let lotPads = [0.25, 0.25, Math.max(0.4, setback - 0.25), 0.5]

          if (use === USE.COMMERCIAL) {
            w = Math.min(w, 9.4)
            d = 8.8 + rD * 4.6
            setback = 1.60 + rS * 0.55
            const choices = price > 140 ? [4, 5, 6, 8] : [3, 3, 4, 5]
            floors = choices[(h >>> 25) % choices.length]
            lotPads = [0.2, 0.2, 0.6, 0.3]
          } else if (use === USE.HIGH) {
            w = Math.min(slotStep * 0.94, 9.4)
            d = 10.0 + rD * 4.5
            setback = 2.0 + rS * 1.1
            floors = [6, 8, 10, 12][(h >>> 25) & 3]
            lotPads = [0.6, 0.6, 1.4, 0.8]
          } else if (use === USE.MID) {
            d = 8.6 + rD * 3.4
            setback = 1.75 + rS * 0.9
            floors = [3, 4, 5, 6][(h >>> 25) & 3]
            lotPads = [0.5, 0.5, 1.2, 0.6]
          } else if (use === USE.DENSE) {
            w = snapKen(Math.min(w, tier === 0 ? 5.915 : 8.645), 4.095, 8.645)
            d = snapKen(6.37 + rD * 2.73, 4.55, 10.465)
            setback = 1.60 + rS * 0.65
            floors = [2, 2, 3, 3][(h >>> 25) & 3]
            lotPads = [0.25, 0.25, Math.max(0.4, setback - 0.25), 0.45]
          } else {
            w = snapKen(Math.min(w, tier === 0 ? 5.915 : 8.645), 4.55, 8.645)
            d = snapKen(6.37 + rD * 2.73, 4.55, 10.01)
            setback = 1.75 + (tier >= 2 ? 0.55 : 0) + rS * (0.9 - 0.4 * pNorm)
            floors = [2, 2, pNorm > 0.65 ? 3 : 2, 3][(h >>> 25) & 3]
            const sideP = tier >= 2 && w <= 6.4 ? 2.5 : 0.35
            lotPads = [sideP, 0.35, Math.max(0.6, setback - 0.25), 0.8]
          }

          const ux = sample.tx * side
          const uz = sample.tz * side
          // Fill lot side pads to meet neighboring roadside parcels instead of leaving wasted unowned gaps.
          const sideGap = Math.max(0.25, (slotStep - w - 0.16) * 0.5)
          if (use === USE.LOW || use === USE.DENSE) {
            const leftW = tier >= 2 && sideGap >= 2.4 ? sideGap : Math.max(lotPads[0], sideGap)
            const rightW = Math.max(lotPads[1], slotStep - w - 0.16 - leftW)
            lotPads = solarAdjustPads(leftW, rightW, lotPads[2], lotPads[3], -nz, -uz, tier)
            setback = Math.max(setback, lotPads[2] + 0.25)
          } else {
            lotPads = [Math.max(lotPads[0], sideGap), Math.max(lotPads[1], sideGap), lotPads[2], lotPads[3]]
          }
          const d0 = halfRoad + setback
          const cxShift = (lotPads[0] - lotPads[1]) * 0.45
          const corners = rectCorners(sample.x + ux * cxShift, sample.z + uz * cxShift, ux, uz, nx, nz, -w * 0.5, w * 0.5, d0, d0 + d)
          tryPush(corners, lotPads, tier, floors, use, ((h >>> 24) & 255) / 255, pCell)
        }
      }
    }
  }

  // Pass 2: Buildings lining winding seam collector roads (字境道路 / 旧農道).
  for (const seamId of seamsInBox(region.blocks, bx0 - 26, bz0 - 26, bx1 + 26, bz1 + 26)) {
    const seam = region.blocks.seams[seamId]
    const { bbox: [b0x, b0z, b1x, b1z], cumS } = getPolyMeta(seam)
    if (b1x < bx0 - 26 || b0x > bx1 + 26 || b1z < bz0 - 26 || b0z > bz1 + 26) continue
    const pts = seam.points
    const totalLen = cumS[cumS.length - 1]
    const endClear = 5.5
    if (totalLen <= endClear * 2 + 5) continue

    const slotStep = 8.0
    const segCount = cumS.length - 1
    for (let si = 0; si < segCount; si++) {
      const sx0 = pts[si * 2]
      const sz0 = pts[si * 2 + 1]
      const sx1 = pts[si * 2 + 2]
      const sz1 = pts[si * 2 + 3]
      if (Math.max(sx0, sx1) < bx0 - 24 || Math.min(sx0, sx1) > bx1 + 24 ||
          Math.max(sz0, sz1) < bz0 - 24 || Math.min(sz0, sz1) > bz1 + 24) continue

      const k0 = Math.max(0, Math.floor((Math.max(endClear, cumS[si]) - 0.01) / slotStep))
      const k1 = Math.floor((Math.min(totalLen - endClear, cumS[si + 1]) + 0.01) / slotStep)
      for (let k = k0; k <= k1; k++) {
        const sCenter = (k + 0.5) * slotStep
        if (sCenter < cumS[si] || sCenter > cumS[si + 1] || sCenter < endClear || sCenter > totalLen - endClear) continue
        const sample = samplePolylineAt(pts, cumS, sCenter, 4.5)
        if (sample.x < bx0 - 22 || sample.x > bx1 + 22 || sample.z < bz0 - 22 || sample.z > bz1 + 22) continue

        for (const side of [-1, 1]) {
          const h = hash3(seed + 733, seam.id * 997 + k, side + 2)
          const nxBase = -sample.tz * side
          const nzBase = sample.tx * side
          const pCell = cellAt(region, sample.x + nxBase * 6.5, sample.z + nzBase * 6.5)
          if (pCell < 0) continue
          const use = city.use[pCell]
          if (city.newtown?.[pCell] === 1 && use === USE.MID) continue
          if (use !== USE.LOW && use !== USE.DENSE && use !== USE.COMMERCIAL && use !== USE.MID) continue

          const price = city.landPrice ? city.landPrice[pCell] : 50
          const pNorm = priceRatio(price)
          if (pNorm < 0.2 && (h & 63) === 0) continue

          const wealth = wealthAt(region, sample.x, sample.z, pCell, use)
          const rTier = ((h >>> 18) & 1023) / 1024
          const tier = (use === USE.LOW || use === USE.DENSE) ? Math.min(2, pickTier(wealth, use, rTier, false)) : 1
          const rW = ((h >>> 4) & 255) / 255
          const rD = ((h >>> 12) & 255) / 255
          const rS = ((h >>> 20) & 15) / 15
          const era = city.built?.[pCell] || 4
          let w = snapKen(tier === 0 ? (4.55 + rW * 1.365) : (5.46 + rW * 1.82), 4.095, 7.28)
          let d = snapKen(6.37 + rD * 2.73, 4.55, 9.555)
          if (sample.sharpTurn) w = snapKen(Math.min(w, 5.46), 4.095, 5.915)
          let padF = Math.max(0.45, (tier >= 2 ? 1.6 : 0.9 - 0.35 * pNorm) + rS * 0.8)
          const remSide = Math.max(0.5, slotStep - w - 0.16)
          let padL = tier >= 2 && remSide >= 2.75 ? Math.min(2.6, remSide - 0.3) : remSide * 0.5
          let padR = Math.max(0.25, remSide - padL)
          let padB = 0.65
          const yaw = (use === USE.LOW || use === USE.DENSE) ? (((h >>> 24) & 31) / 31 - 0.5) * (era <= 4 ? 0.11 : 0.06) : 0
          const ux0 = sample.tx * side
          const uz0 = sample.tz * side
          const cY = Math.cos(yaw)
          const sY = Math.sin(yaw)
          const ux = ux0 * cY - uz0 * sY
          const uz = ux0 * sY + uz0 * cY
          const nx = -uz
          const nz = ux
          if (use === USE.LOW || use === USE.DENSE) {
            ;[padL, padR, padF, padB] = solarAdjustPads(padL, padR, padF, padB, -nz, -uz, tier)
          }
          const cx = sample.x + nxBase * (seam.width * 0.5 + 0.15 + padF + d * 0.5) + ux * ((padL - padR) * 0.5)
          const cz = sample.z + nzBase * (seam.width * 0.5 + 0.15 + padF + d * 0.5) + uz * ((padL - padR) * 0.5)
          const floors = use === USE.COMMERCIAL ? (rW > 0.5 ? 3 : 2) : use === USE.MID ? 3 : [2, 2, pNorm > 0.6 ? 3 : 2, 3][(h >>> 8) & 3]
          const corners = rectCorners(cx, cz, ux, uz, nx, nz, -w * 0.5, w * 0.5, -d * 0.5, d * 0.5)
          tryPush(corners, [padL, padR, padF, padB], tier, floors, use, ((h >>> 24) & 255) / 255, pCell)
        }
      }
    }
  }

  // Pass 3: Tract interior lattice lots with income-stratified house sizes, fenced parcels,
  // driveways/gardens, rare landmark estates (豪邸), corner infill, and flagpole lots.
  for (const block of blocksInBox(region, bx0 - 24, bz0 - 24, bx1 + 24, bz1 + 24)) {
    const params = region.blocks.blocks[block]
    if (!params.built) continue
    const lattice = latticeOf(seed, block, params)
    const [i0, i1, j0, j1] = latticeRange(lattice, params, bx0, bz0, bx1, bz1)
    if (i1 < i0 || j1 < j0 || (i1 - i0) * (j1 - j0) > 40000) continue
    const getNode = lattice.cacheFor(i0, i1, j0, j1)
    const street = lattice.shape.width / 2
    const isPlanned = params.kind === 'planned'

    for (let i = i0; i < i1; i++) {
      for (let j = j0; j < j1; j++) {
        const p00 = getNode(i, j)
        const p10 = getNode(i + 1, j)
        const p01 = getNode(i, j + 1)
        const p11 = getNode(i + 1, j + 1)
        const minX = Math.min(p00[0], p10[0], p01[0], p11[0])
        const maxX = Math.max(p00[0], p10[0], p01[0], p11[0])
        const minZ = Math.min(p00[1], p10[1], p01[1], p11[1])
        const maxZ = Math.max(p00[1], p10[1], p01[1], p11[1])
        if (maxX < bx0 - 22 || minX > bx1 + 22 || maxZ < bz0 - 22 || minZ > bz1 + 22) continue

        const cx = (p00[0] + p10[0] + p01[0] + p11[0]) * 0.25
        const cz = (p00[1] + p10[1] + p01[1] + p11[1]) * 0.25
        const centreCell = cellAt(region, cx, cz)
        if (centreCell < 0) continue
        const blockUse = city.use[centreCell]
        const sideA = Math.hypot(p10[0] - p00[0], p10[1] - p00[1])
        const sideB = Math.hypot(p01[0] - p00[0], p01[1] - p00[1])
        if (sideA < 14 || sideB < 16) continue

        if (blockUse === USE.PUBLIC) {
          if (!region.blocks.id || region.blocks.id[centreCell] !== block) continue
          const northFirst = p10[1] >= p00[1]
          const edgeA = northFirst ? p00 : p10
          const edgeB = northFirst ? p01 : p11
          const otherA = northFirst ? p10 : p00
          const len = Math.hypot(edgeB[0] - edgeA[0], edgeB[1] - edgeA[1]) || 1
          const ux = (edgeB[0] - edgeA[0]) / len
          const uz = (edgeB[1] - edgeA[1]) / len
          let nx = -uz
          let nz = ux
          if ((otherA[0] - edgeA[0]) * nx + (otherA[1] - edgeA[1]) * nz < 0) {
            nx = -nx
            nz = -nz
          }
          const wingLen = Math.min(len - 2 * (street + 6), 60)
          if (wingLen >= 18) {
            const a0 = (len - wingLen) * 0.5
            const d0 = street + 4.5
            const corners = rectCorners(edgeA[0], edgeA[1], ux, uz, nx, nz, a0, a0 + wingLen, d0, d0 + 13.5)
            tryPush(corners, [1.5, 1.5, 3.0, 2.0], 2, 4, USE.PUBLIC, 0.5, centreCell)
            if (len >= 54 && sideA >= 42) {
              const gymCorners = rectCorners(edgeA[0], edgeA[1], ux, uz, nx, nz, street + 5, street + 27, d0 + 17, d0 + 31)
              tryPush(gymCorners, [1.0, 1.0, 1.5, 1.5], 2, 2, USE.PUBLIC, 0.3, centreCell)
            }
          }
          continue
        }

        if (blockUse === USE.MID && city.newtown?.[centreCell] === 1 && sideA >= 28 && sideB >= 40) {
          if (!region.blocks.id || region.blocks.id[centreCell] !== block) continue
          const angle = ((hash3(seed + 19, block, i + j * 31) & 255) / 255 - 0.5) * 0.14
          const ux = Math.cos(angle)
          const uz = Math.sin(angle)
          const nx = -uz
          const nz = ux
          const spanU = Math.min(sideB, sideA) * 0.72
          const slabW = Math.min(40, Math.max(22, Math.round(spanU / 0.91) * 0.91))
          const slabD = 10.92
          const rows = sideA >= 48 ? 2 : 1
          for (let r = 0; r < rows; r++) {
            const offsetN = (r - (rows - 1) * 0.5) * 23
            const sx = cx + nx * offsetN
            const sz = cz + nz * offsetN
            const rc = cellAt(region, sx, sz)
            if (rc < 0 || region.blocks.id[rc] !== block || city.use[rc] !== USE.MID) continue
            const h = hash3(seed + 23, block * 97 + i * 13 + r, j)
            const floors = [4, 5, 5, 5][h & 3]
            const tone = ((h >>> 24) & 255) / 255
            const corners = rectCorners(sx, sz, ux, uz, nx, nz, -slabW * 0.5, slabW * 0.5, -slabD * 0.5, slabD * 0.5)
            tryPush(corners, [1.5, 1.5, 2.5, 2.5], 2, floors, USE.MID, tone, rc)
          }
          continue
        }

        const fineLane = cellFineLane(region, seed, block, lattice, getNode, i, j)
        const dropTop = edgeDropped(seed, block, lattice, i, j, 1)
        const dropBottom = edgeDropped(seed, block, lattice, i, j + 1, 1)

        for (const side of [0, 1]) {
          const edgeSegs = resolveLatticeEdges(region, seed, block, lattice, getNode, i + side, j, 0, 1, 2)
          if (!edgeSegs.length) continue
          const edgeA = side === 0 ? p00 : p10
          const edgeB = side === 0 ? p01 : p11
          const oppA = side === 0 ? p10 : p00
          const oppB = side === 0 ? p11 : p01
          const edgeLen = Math.hypot(edgeB[0] - edgeA[0], edgeB[1] - edgeA[1])
          if (edgeLen < 12) continue

          const ux = (edgeB[0] - edgeA[0]) / edgeLen
          const uz = (edgeB[1] - edgeA[1]) / edgeLen
          let nx = -uz
          let nz = ux
          const toOppX = (oppA[0] + oppB[0]) * 0.5 - (edgeA[0] + edgeB[0]) * 0.5
          const toOppZ = (oppA[1] + oppB[1]) * 0.5 - (edgeA[1] + edgeB[1]) * 0.5
          const perpSpan = toOppX * nx + toOppZ * nz
          if (perpSpan < 0) {
            nx = -nx
            nz = -nz
          }
          const halfDepth = Math.min(Math.abs(perpSpan) * 0.495, sideA * 0.495)
          if (halfDepth < 5.5) continue

          const insetA = dropTop ? 0.4 : street + 0.55
          const insetB = dropBottom ? 0.4 : street + 0.55
          const cellPrice = city.landPrice ? city.landPrice[centreCell] : 50
          const cellPNorm = priceRatio(cellPrice)
          const cellWealth = wealthAt(region, cx, cz, centreCell, blockUse)
          const lotUse = LOTS[blockUse] ? blockUse : USE.LOW

          const tryParcel = (pA, pB, slotTier, k) => {
            const midS = (pA + pB) * 0.5
            const midX = edgeA[0] + ux * midS + nx * Math.min(halfDepth * 0.5, 5.0)
            const midZ = edgeA[1] + uz * midS + nz * Math.min(halfDepth * 0.5, 5.0)
            const cell = cellAt(region, midX, midZ)
            if (cell < 0 || region.blocks.id[cell] !== block) return false
            const use = city.use[cell]
            const lot = LOTS[use]
            if (!lot || use === USE.PUBLIC || (city.newtown?.[cell] === 1 && use === USE.MID)) return false

            const price = city.landPrice ? city.landPrice[cell] : 50
            const pNorm = priceRatio(price)
            const h = hash3(seed + 5, block * 7919 + i * 131 + k * 17, j * 2 + side)
            const baseSkip = (use === USE.DENSE || use === USE.COMMERCIAL || use === USE.MID) ? 0 : 4
            const skipThreshold = slotTier >= 3 ? 0 : Math.round(baseSkip * (1 - 0.9 * pNorm))
            if ((h & 255) < skipThreshold) return false

            const tier = (use === USE.LOW || use === USE.DENSE) ? slotTier : (use === USE.MID ? 2 : 1)
            const spanW = pB - pA - 0.04
            if (spanW < 4.2) return false

            const cellEra = city.built?.[cell] || 4
            const rW = ((h >>> 4) & 63) / 63
            const rD = ((h >>> 8) & 127) / 127
            const rS = ((h >>> 15) & 31) / 31

            // Set house size + yard pad dimensions based on income tier (`0=small..4=rare estate`).
            const tightSide = use === USE.DENSE ? (0.38 - 0.14 * pNorm) : (0.55 - 0.25 * pNorm)
            let padL = tightSide
            let padR = tightSide
            let padF = use === USE.LOW ? (1.15 - 0.55 * pNorm) : (0.55 - 0.20 * pNorm)
            let padB = use === USE.COMMERCIAL ? 0.30 : (0.75 - 0.35 * pNorm)
            let width = spanW - (padL + padR)

            if (use === USE.LOW || use === USE.DENSE) {
              if (tier === 4) {
                padL = Math.min(5.2, spanW * 0.24)
                padR = Math.min(3.4, spanW * 0.16)
                width = floorKen(Math.min(14.56, spanW - padL - padR), 10.92, 14.56)
                padR = Math.max(1.8, spanW - padL - width)
                padF = 4.0 + rS * 2.0
                padB = 2.2 + rD * 1.4
              } else if (tier === 3) {
                padL = Math.min(4.2, Math.max(3.0, spanW * 0.26))
                padR = Math.max(1.0, (spanW - padL) * 0.14)
                width = floorKen(Math.min(12.285, spanW - padL - padR), 8.645, 12.285)
                padR = Math.max(0.6, spanW - padL - width)
                padF = 2.4 + rS * 1.3
                padB = 1.1 + rD * 1.0
              } else if (tier === 2) {
                padL = spanW >= 9.6 ? Math.min(3.1, 2.60 + rW * 0.45) : tightSide
                padR = spanW >= 10.6 ? 0.85 : tightSide
                width = floorKen(Math.min(10.465, spanW - padL - padR), 6.37, 10.465)
                padR = Math.max(tightSide, spanW - padL - width)
                padF = 1.5 + rS * 1.1
                padB = 0.80 + rD * 0.70
              } else if (tier === 1) {
                if (spanW >= 8.4) {
                  padL = 2.50
                  padR = tightSide
                  width = floorKen(Math.min(8.19, spanW - padL - padR), 5.005, 8.19)
                  padR = Math.max(tightSide, spanW - padL - width)
                } else {
                  width = floorKen(Math.min(8.19, spanW - padL - padR), 4.55, 8.19)
                  const remW = Math.max(0, spanW - width)
                  padL = remW * 0.5
                  padR = remW * 0.5
                }
                padF = (1.20 - 0.55 * pNorm) + rS * (1.1 - 0.40 * pNorm)
                padB = (0.70 - 0.30 * pNorm) + rD * 0.35
              } else {
                width = floorKen(Math.min(5.915, spanW - padL - padR), 3.64, 5.915)
                const remW = Math.max(0.4, spanW - width)
                padL = remW * 0.5
                padR = remW * 0.5
                padF = (0.60 - 0.20 * pNorm) + rS * 0.40
                padB = 0.35 + rD * 0.30
              }
            } else {
              width = Math.min(spanW - (padL + padR), use === USE.COMMERCIAL ? 16.38 : lot.frontage * 1.35)
              const remSide = Math.max(0.4, spanW - width)
              padL = remSide * 0.5
              padR = remSide * 0.5
              padF = use === USE.COMMERCIAL ? 0.35 + rS * 0.35 : 1.0 + rS * 0.7
              padB = use === USE.COMMERCIAL ? 0.30 : 0.70
            }
            if (width < 3.6) return false

            const frontSouth = -nz
            if (use === USE.LOW || use === USE.DENSE) {
              ;[padL, padR, padF, padB] = solarAdjustPads(padL, padR, padF, padB, frontSouth, -uz, tier)
            }

            const lotFrontLine = street + 0.12
            const maxParcelSpan = tier === 4 ? Math.min(23.5, Math.abs(perpSpan) * 0.72) : Math.abs(perpSpan) * 0.492
            const maxFrontRoom = Math.max(4.8, maxParcelSpan - lotFrontLine)
            if (maxFrontRoom < 4.8) return false

            let availBldgD = maxFrontRoom - padF - padB
            if (availBldgD < 4.55) {
              const scale = Math.max(0.25, (maxFrontRoom - 4.6) / Math.max(0.1, padF + padB))
              padF = Math.max(0.35, padF * scale)
              padB = Math.max(0.30, padB * scale)
              availBldgD = maxFrontRoom - padF - padB
            }
            if (availBldgD < 3.65) return false

            let depth
            if (use === USE.LOW || use === USE.DENSE) {
              const targetD = tier === 4 ? 10.92 + rD * 2.275
                : tier === 3 ? 9.555 + rD * 2.275
                : tier === 2 ? 8.19 + rD * 2.275
                : tier === 1 ? 6.825 + rD * 2.275
                : 5.46 + rD * 1.82
              depth = floorKen(Math.min(targetD, availBldgD, 13.65), 3.64, Math.min(13.65, availBldgD))
            } else {
              depth = Math.min(availBldgD, lot.depth * (0.85 + 0.15 * rD))
            }
            if (depth < 3.6) return false

            const yawJitter = !isPlanned && tier <= 1 && (use === USE.LOW || use === USE.DENSE)
              ? ((((h >>> 20) & 63) / 63) - 0.5) * (cellEra <= 3 ? 0.05 : 0.02) : 0
            const cY = Math.cos(yawJitter)
            const sY = Math.sin(yawJitter)
            const bux = ux * cY - uz * sY
            const buz = ux * sY + uz * cY
            // Rotate (nx, nz) directly so `(bnx, bnz)` ALWAYS points inward into the block for both side=0 and side=1.
            const bnx = nx * cY - nz * sY
            const bnz = nx * sY + nz * cY
            const aCenter = (pA + pB) * 0.5 + (padL - padR) * 0.5
            const houseFront = lotFrontLine + padF
            const bcx = edgeA[0] + ux * aCenter + nx * (houseFront + depth * 0.5)
            const bcz = edgeA[1] + uz * aCenter + nz * (houseFront + depth * 0.5)
            const corners = rectCorners(bcx, bcz, bux, buz, bnx, bnz, -width * 0.5, width * 0.5, -depth * 0.5, depth * 0.5)
            if (fineLane && !clearOfFineLane(fineLane, corners)) return false

            let floors = lot.floors[(h >>> 16) % lot.floors.length]
            if (use === USE.LOW && tier === 0 && pNorm > 0.55 && (h & 3) === 0) floors = 3
            if (tier >= 3 && use === USE.LOW) floors = 2
            if (price > 130 && (use === USE.COMMERCIAL || use === USE.MID || use === USE.HIGH)) {
              floors = lot.floors[Math.min(lot.floors.length - 1, ((h >>> 16) % lot.floors.length) + 1)]
            }
            const placed = tryPush(corners, [padL, padR, padF, padB], tier, floors, use, (h >>> 24) / 255, cell)
            return placed
          }

          for (const [sx0, sz0, sx1, sz1] of edgeSegs) {
            const t0 = (sx0 - edgeA[0]) * ux + (sz0 - edgeA[1]) * uz
            const t1 = (sx1 - edgeA[0]) * ux + (sz1 - edgeA[1]) * uz
            const usableStart = Math.max(insetA, Math.min(t0, t1))
            const usableEnd = Math.min(edgeLen - insetB, Math.max(t0, t1))
            if (usableEnd - usableStart < 4.5) continue

            const parcels = []
            let cursor = usableStart
            let cutIdx = 0
            while (cursor < usableEnd - 1e-3) {
              const hc = hash3(seed + 51, block * 7919 + i * 131 + side * 37 + cutIdx++, j)
              const rStep = (hc & 255) / 255
              const rTier = ((hc >>> 12) & 1023) / 1024
              const rem = usableEnd - cursor
              let tier = pickTier(cellWealth, lotUse, rTier, !isPlanned && Math.abs(perpSpan) >= 24 && rem >= 18)
              let stepW = LOTS[lotUse].frontage

              if (lotUse === USE.LOW || lotUse === USE.DENSE) {
                if (tier === 4 && rem < 18) tier = 3
                if (tier === 3 && rem < 12.8) tier = 2
                if (tier === 4) stepW = 19.0 + rStep * 4.2
                else if (tier === 3) stepW = (14.4 - 1.2 * cellPNorm) * (0.90 + 0.20 * rStep)
                else if (tier === 2) stepW = (11.2 - 1.0 * cellPNorm) * (0.88 + 0.24 * rStep)
                else if (tier === 1) stepW = (8.2 - 1.5 * cellPNorm) * (0.86 + 0.28 * rStep)
                else stepW = (5.8 - 0.7 * cellPNorm) * (0.86 + 0.24 * rStep)
              } else if (lotUse === USE.COMMERCIAL) {
                stepW = (10.5 - 3.3 * cellPNorm) * (0.76 + 0.48 * rStep)
                tier = 1
              } else if (lotUse === USE.MID) {
                stepW = (18.5 - 5.5 * cellPNorm) * (0.84 + 0.32 * rStep)
                tier = 2
              } else {
                stepW = LOTS[lotUse].frontage * (0.85 + 0.30 * rStep)
                tier = 2
              }

              if (usableEnd - (cursor + stepW) < 4.5) {
                parcels.push({ s0: cursor, s1: usableEnd, tier })
                break
              }
              parcels.push({ s0: cursor, s1: cursor + stepW, tier })
              cursor += stepW
            }

            for (let k = 0; k < parcels.length; k++) {
              const { s0: pA, s1: pB, tier: slotTier } = parcels[k]
              if (!tryParcel(pA, pB, slotTier, k) && pB - pA >= 10.0) {
                // Subdivide any blocked wide parcel into standard Tier 1 lots rather than leaving an empty gap.
                const mid = (pA + pB) * 0.5
                tryParcel(pA, mid, 1, k * 2 + 1)
                tryParcel(mid, pB, 1, k * 2 + 2)
              }
            }
          }
        }

        // Cross-street end infill (`p00->p10` and `p01->p11`), anchored strictly along active cross-street segments.
        for (const endEdge of [0, 1]) {
          const endSegs = resolveLatticeEdges(region, seed, block, lattice, getNode, i, j + endEdge, 1, 0, 1)
          if (!endSegs.length) continue
          const eA = endEdge === 0 ? p00 : p01
          const eB = endEdge === 0 ? p10 : p11
          const eOpp = endEdge === 0 ? p01 : p10
          const eLen = Math.hypot(eB[0] - eA[0], eB[1] - eA[1])
          if (eLen < 14) continue
          const eux = (eB[0] - eA[0]) / eLen
          const euz = (eB[1] - eA[1]) / eLen
          let enx = -euz
          let enz = eux
          if ((eOpp[0] - eA[0]) * enx + (eOpp[1] - eA[1]) * enz < 0) {
            enx = -enx
            enz = -enz
          }
          for (const [sx0, sz0, sx1, sz1] of endSegs) {
            const t0 = (sx0 - eA[0]) * eux + (sz0 - eA[1]) * euz
            const t1 = (sx1 - eA[0]) * eux + (sz1 - eA[1]) * euz
            const es0 = Math.max(street + 1.5, Math.min(t0, t1))
            const es1 = Math.min(eLen - street - 1.5, Math.max(t0, t1))
            if (es1 - es0 < 6.0) continue
            const eSlotStep = 7.4
            const count = Math.max(1, Math.floor((es1 - es0) / eSlotStep))
            const actualStep = (es1 - es0) / count
            for (let m = 0; m < count; m++) {
              const sPos = es0 + (m + 0.5) * actualStep
              const mx = eA[0] + eux * sPos + enx * 7.5
              const mz = eA[1] + euz * sPos + enz * 7.5
              const ec = cellAt(region, mx, mz)
              if (ec < 0 || region.blocks.id[ec] !== block) continue
              const eu = city.use[ec]
              if (city.newtown?.[ec] === 1 && eu === USE.MID) continue
              if (eu !== USE.LOW && eu !== USE.DENSE && eu !== USE.COMMERCIAL) continue
              const pNorm = priceRatio(city.landPrice ? city.landPrice[ec] : 50)
              const he = hash3(seed + 823, block * 991 + i * 29 + m, j * 3 + endEdge)
              const w = floorKen(Math.min(actualStep - 0.7, 5.005 + ((he >>> 4) & 15) / 15 * 2.275), 4.095, 7.735)
              const d = floorKen(5.915 + ((he >>> 8) & 15) / 15 * 2.73, 4.55, 9.1)
              const sideSpan = Math.max(0.5, actualStep - w - 0.12)
              let [eL, eR, padF, eB] = [sideSpan * 0.5, sideSpan * 0.5, Math.max(0.45, 0.85 - 0.40 * pNorm), 0.5]
              if (eu === USE.LOW || eu === USE.DENSE) {
                ;[eL, eR, padF, eB] = solarAdjustPads(eL, eR, padF, eB, -enz, -euz, 1)
              }
              const sCenter = sPos + (eL - eR) * 0.5
              const d0 = street + 0.12 + padF
              const corners = rectCorners(eA[0], eA[1], eux, euz, enx, enz, sCenter - w * 0.5, sCenter + w * 0.5, d0, d0 + d)
              tryPush(corners, [eL, eR, padF, eB], 1, pNorm > 0.65 && (he & 3) === 0 ? 3 : 2, eu, ((he >>> 24) & 255) / 255, ec)
            }
          }
        }

        if (fineLane && sideA >= 28) {
          const [ax, az, bx, bz] = fineLane.points
          const laneLen = Math.hypot(bx - ax, bz - az)
          if (laneLen >= 16) {
            const lux = (bx - ax) / laneLen
            const luz = (bz - az) / laneLen
            const lnx = -luz
            const lnz = lux
            for (const lSide of [-1, 1]) {
              const spanStart = 3.0
              const spanEnd = laneLen - (fineLane.culDeSac ? 1.5 : 3.0)
              if (spanEnd - spanStart < 5.5) continue
              const count = Math.max(1, Math.floor((spanEnd - spanStart) / 7.4))
              const actualStep = (spanEnd - spanStart) / count
              for (let m = 0; m < count; m++) {
                const h = hash3(seed + 617, block * 131 + i * 19 + m, j * 4 + (lSide + 1))
                const aMid = spanStart + (m + 0.5) * actualStep
                const w = floorKen(Math.min(actualStep - 0.7, 5.005 + ((h >>> 4) & 15) / 15 * 2.275), 4.095, 7.735)
                const d = floorKen(5.005 + ((h >>> 8) & 15) / 15 * 2.275, 4.095, 7.735)
                const sideRem = Math.max(0.5, actualStep - w - 0.14)
                let [eL, eR, padF, eB] = [sideRem * 0.5, sideRem * 0.5, 0.55 + (((h >>> 12) & 15) / 15) * 0.5, 0.45]
                ;[eL, eR, padF, eB] = solarAdjustPads(eL, eR, padF, eB, -(lnz * lSide), -luz, 1)
                const aCenter = aMid + (eL - eR) * 0.5
                const d0 = fineLane.width * 0.5 + 0.12 + padF
                const corners = rectCorners(ax, az, lux, luz, lnx * lSide, lnz * lSide, aCenter - w * 0.5, aCenter + w * 0.5, d0, d0 + d)
                const fx = (corners[0] + corners[4]) * 0.5
                const fz = (corners[1] + corners[5]) * 0.5
                const cCell = cellAt(region, fx, fz)
                if (cCell < 0 || region.blocks.id[cCell] !== block) continue
                const cUse = city.use[cCell]
                if (cUse !== USE.LOW && cUse !== USE.DENSE) continue
                tryPush(corners, [eL, eR, padF, eB], 1, 2, cUse, ((h >>> 24) & 255) / 255, cCell)
              }
            }
          }
        }
      }
    }
  }
  return out
}

function clearOfFineLane(fineLane, corners) {
  const [ax, az, bx, bz] = fineLane.points
  const dx = bx - ax
  const dz = bz - az
  const l2 = dx * dx + dz * dz
  const margin = fineLane.width * 0.5 + 0.45
  const cx = (corners[0] + corners[2] + corners[4] + corners[6]) * 0.25
  const cz = (corners[1] + corners[3] + corners[5] + corners[7]) * 0.25
  for (let c = 0; c <= 8; c += 2) {
    const px = c < 8 ? corners[c] : cx
    const pz = c < 8 ? corners[c + 1] : cz
    let t = l2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / l2 : 0
    t = t < 0 ? 0 : t > 1 ? 1 : t
    if (Math.hypot(ax + dx * t - px, az + dz * t - pz) < margin) return false
  }
  return true
}
