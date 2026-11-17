// The land before people, modelled on the country round Setagaya: a plateau (the Musashino
// upland) cut by small branching valleys, a great river (the Tama) with its alluvial lowland, the
// escarpment between them (the Kokubunji cliff line) with a lower terrace in the upstream part,
// and hill country on the far bank (the Tama hills).
//
// The large forms are drawn on a 20 m grid. Valleys are carved by running a river-incision and
// soil-creep model on a 40 m grid, and the result is added back onto the 20 m grid.
import { Heap } from './heap.js?v=online-1794946480502'
import { normals, resample } from './geometry.js?v=online-1794946480502'
import { D8L, D8X, D8Z } from './grid.js?v=online-1794946480502'
import { fbm, noise, random, smoothstep } from './noise.js?v=online-1794946480502'

// What each 20 m cell of the natural land is.
export const LAND = { PLATEAU: 0, TERRACE: 1, LOWLAND: 2, HILLS: 3, CHANNEL: 4 }

const VALLEY_STEP = 40 // spacing of the points that describe the river valley
const CORRIDOR_HALF = 250 // half the distance between the river's two future levees
const TAU = Math.PI * 2

// The course of the great river: a broad valley that bends across the region from the west edge
// to the south edge, the corridor its levees will later hold, and the meandering water channel.
function riverCourse(seed, size) {
  const rand = random(seed ^ 0x2a9b)
  const entry = rand.range(0.44, 0.54)
  const exit = rand.range(0.7, 0.8)
  const control = [
    [-3000, entry * size],
    [0.3 * size, (entry + rand.range(0.02, 0.07)) * size],
    [0.58 * size, (entry + rand.range(0.16, 0.24)) * size],
    [exit * size + 2000, size + 3000],
  ]
  const raw = []
  for (let step = 0; step <= 800; step++) {
    const t = step / 800
    const a = 1 - t
    const w = [a * a * a, 3 * a * a * t, 3 * a * t * t, t * t * t]
    raw.push(
      w[0] * control[0][0] + w[1] * control[1][0] + w[2] * control[2][0] + w[3] * control[3][0],
      w[0] * control[0][1] + w[1] * control[1][1] + w[2] * control[2][1] + w[3] * control[3][1],
    )
  }
  // Broad bends of the whole valley.
  const base = resample(raw, VALLEY_STEP)
  const baseNormals = normals(base)
  const bend = [rand.range(260, 420), rand.range(5600, 7600), rand.range(0, TAU), rand.range(90, 170), rand.range(2400, 3200), rand.range(0, TAU)]
  const shifted = []
  for (let index = 0; index < base.length / 2; index++) {
    const s = index * VALLEY_STEP
    const offset = bend[0] * Math.sin(s / bend[1] * TAU + bend[2]) + bend[3] * Math.sin(s / bend[4] * TAU + bend[5])
    shifted.push(base[index * 2] + baseNormals[index * 2] * offset, base[index * 2 + 1] + baseNormals[index * 2 + 1] * offset)
  }
  const valley = resample(shifted, VALLEY_STEP)
  const count = valley.length / 2
  const normal = normals(valley)

  // Where the valley crosses into and out of the region.
  let first = -1
  let last = -1
  for (let index = 0; index < count; index++) {
    const x = valley[index * 2]
    const z = valley[index * 2 + 1]
    if (x >= 0 && z >= 0 && x <= size && z <= size) {
      if (first < 0) first = index
      last = index
    }
  }
  const sIn = first * VALLEY_STEP
  const sOut = last * VALLEY_STEP
  const levelIn = rand.range(31, 36)
  const levelOut = rand.range(5, 8)

  const corridor = [rand.range(180, 360), rand.range(5200, 8200), rand.range(0, TAU)]
  const meander = [rand.range(60, 120), rand.range(1500, 2300), rand.range(0, TAU)]
  const widths = rand() * 1000
  const attributes = {
    corridor: new Float64Array(count), // offset of the levee corridor's centre from the valley line
    channel: new Float64Array(count), // offset of the water channel's centre
    channelHalf: new Float64Array(count),
    halfNE: new Float64Array(count), // half width of the lowland towards the plateau
    halfSW: new Float64Array(count), // and towards the hills
    terrace: new Float64Array(count), // width of the lower terrace below the escarpment
    scarp: new Float64Array(count), // width of the escarpment slope
    ramp: new Float64Array(count), // how far the hills take to rise from the lowland
    level: new Float64Array(count), // height of the lowland surface
  }
  for (let index = 0; index < count; index++) {
    const s = index * VALLEY_STEP
    const along = (s - sIn) / (sOut - sIn)
    const corridorOffset = corridor[0] * Math.sin(s / corridor[1] * TAU + corridor[2])
    attributes.corridor[index] = corridorOffset
    attributes.channel[index] = corridorOffset + meander[0] * Math.sin(s / meander[1] * TAU + meander[2])
    attributes.channelHalf[index] = 38 + 14 * noise(seed + 11, s / 1800, widths)
    attributes.halfNE[index] = Math.max(corridorOffset + CORRIDOR_HALF + 260, 880 + 420 * noise(seed + 12, s / 3600, widths))
    attributes.halfSW[index] = Math.max(-corridorOffset + CORRIDOR_HALF + 420, 1650 + 750 * noise(seed + 13, s / 4200, widths))
    const upstream = Math.max(0, (0.5 - along) / 0.5)
    attributes.terrace[index] = Math.max(0, upstream * (650 + 520 * noise(seed + 14, s / 2600, widths)))
    attributes.scarp[index] = 95 + 45 * noise(seed + 15, s / 1400, widths)
    attributes.ramp[index] = 700 + 300 * noise(seed + 16, s / 3000, widths)
    attributes.level[index] = levelIn + (levelOut - levelIn) * along + 0.6 * noise(seed + 17, s / 2500, widths) * (1 - Math.abs(along - 0.5))
  }
  return { valley, normal, count, sIn, sOut, ...attributes }
}

// Linear interpolation of a per-valley-point attribute at distance s along the valley.
function along(values, s) {
  const position = Math.min(values.length - 1.000001, Math.max(0, s / VALLEY_STEP))
  const index = Math.floor(position)
  const t = position - index
  return values[index] + (values[index + 1] - values[index]) * t
}

// For every point of a grid: the distance along the valley to the nearest valley point (s) and
// the signed distance from the valley line (d, positive on the plateau side).
function valleyCoordinates(river, columns, spacing) {
  const { valley, normal, count } = river
  const coarseStep = 12
  const s = new Float32Array(columns * columns)
  const d = new Float32Array(columns * columns)
  for (let row = 0; row < columns; row++) {
    const z = (row + 0.5) * spacing
    for (let column = 0; column < columns; column++) {
      const x = (column + 0.5) * spacing
      let best = 0
      let bestSquared = Infinity
      for (let index = 0; index < count; index += coarseStep) {
        const dx = valley[index * 2] - x
        const dz = valley[index * 2 + 1] - z
        const squared = dx * dx + dz * dz
        if (squared < bestSquared) {
          bestSquared = squared
          best = index
        }
      }
      let bestT = 0
      let bestSegment = best
      bestSquared = Infinity
      const from = Math.max(0, best - coarseStep - 2)
      const to = Math.min(count - 2, best + coarseStep + 2)
      for (let index = from; index <= to; index++) {
        const ax = valley[index * 2]
        const az = valley[index * 2 + 1]
        const ex = valley[index * 2 + 2] - ax
        const ez = valley[index * 2 + 3] - az
        let t = ((x - ax) * ex + (z - az) * ez) / (ex * ex + ez * ez)
        t = t < 0 ? 0 : t > 1 ? 1 : t
        const px = ax + ex * t - x
        const pz = az + ez * t - z
        const squared = px * px + pz * pz
        if (squared < bestSquared) {
          bestSquared = squared
          bestSegment = index
          bestT = t
        }
      }
      const cell = row * columns + column
      s[cell] = (bestSegment + bestT) * VALLEY_STEP
      const nx = normal[bestSegment * 2] * (1 - bestT) + normal[bestSegment * 2 + 2] * bestT
      const nz = normal[bestSegment * 2 + 1] * (1 - bestT) + normal[bestSegment * 2 + 3] * bestT
      const px = x - (valley[bestSegment * 2] + (valley[bestSegment * 2 + 2] - valley[bestSegment * 2]) * bestT)
      const pz = z - (valley[bestSegment * 2 + 1] + (valley[bestSegment * 2 + 3] - valley[bestSegment * 2 + 1]) * bestT)
      d[cell] = px * nx + pz * nz
    }
  }
  return { s, d }
}

// The shape of the land before any river has cut into the plateau or the hills.
function landShape(seed, size, river) {
  const plateauSeed = seed + 101
  const hillSeed = seed + 202
  const first = river.sIn / VALLEY_STEP * 2
  const last = river.sOut / VALLEY_STEP * 2
  const chordX = river.valley[first]
  const chordZ = river.valley[first + 1]
  const chordLength = Math.hypot(river.valley[last] - chordX, river.valley[last + 1] - chordZ)
  const chordNX = (river.valley[last + 1] - chordZ) / chordLength
  const chordNZ = -(river.valley[last] - chordX) / chordLength
  const levelIn = river.level[first / 2]
  const levelOut = river.level[last / 2]
  return function shape(x, z, s, d) {
    const u = x / size
    const v = z / size
    const level = along(river.level, s)
    const channelOffset = along(river.channel, s)
    // Natural levees: the river drops sand beside its channel, so the lowland is a little higher
    // there and lowest in the back marshes.
    const fromChannel = d - channelOffset
    const levee = 1.4 * Math.exp(-(fromChannel * fromChannel) / (420 * 420)) - 0.45
    const low = level + levee + 0.35 * fbm(seed + 7, x / 650, z / 650, 2)
    if (d >= 0) {
      // The escarpment wanders a little, with spurs and bays a few hundred metres across.
      const edge = d - along(river.halfNE, s) + 70 * fbm(seed + 9, x / 900, z / 900, 3)
      if (edge <= 0) return { height: low, kind: LAND.LOWLAND }
      const plateau = 64 - 30 * u - 9 * v
        + 3.6 * fbm(plateauSeed, x / 7000, z / 7000, 3)
        + 1.2 * fbm(plateauSeed + 1, x / 1100, z / 1100, 3)
        + 0.25 * fbm(plateauSeed + 2, x / 220, z / 220, 2)
      const terrace = along(river.terrace, s)
      let foot = low
      if (terrace > 0) {
        const step = smoothstep(0, 45, edge)
        foot = low + (level + 5.5 + 0.5 * fbm(seed + 8, x / 900, z / 900, 2) - low) * step
      }
      const rise = smoothstep(terrace, terrace + along(river.scarp, s), edge)
      return { height: foot + (plateau - foot) * rise, kind: edge < terrace ? LAND.TERRACE : LAND.PLATEAU }
    }
    // The hills meet the lowland in spurs and bays rather than in a straight wall.
    const edge = -d - along(river.halfSW, s) + 260 * fbm(seed + 10, x / 1500, z / 1500, 3)
    if (edge <= 0) return { height: low, kind: LAND.LOWLAND }
    // A rough upland that keeps rising away from the river, so its water runs towards the
    // lowland and the rivers cut their valleys into it, rather than pooling in hollows. The rise
    // is measured from the river's general line, which unlike the distance to its bends has no
    // creases far out in the hills.
    const away = (x - chordX) * chordNX + (z - chordZ) * chordNZ
    const warp = 1100 * fbm(hillSeed + 3, x / 4000, z / 4000, 2)
    const relief = 30 + 0.004 * Math.min(9000, Math.max(0, -away - 1500))
      + 26 * fbm(hillSeed, (x + warp) / 3800, (z - warp) / 3800, 4)
      + 9 * fbm(hillSeed + 1, (x - warp) / 1300, (z + warp) / 1300, 3)
    const rise = smoothstep(0, along(river.ramp, s), edge)
    // Far from the river the nearest point of the valley can jump from one bend to another, so
    // the hills stand on the river's level measured along its general line instead.
    const chord = Math.min(1, Math.max(0, ((x - chordX) * -chordNZ + (z - chordZ) * chordNX) / chordLength))
    const base = low + (levelIn + (levelOut - levelIn) * chord - low) * rise
    return { height: base + relief * Math.pow(rise, 0.85), kind: LAND.HILLS }
  }
}

// Fills every hollow so water can always run on to a fixed cell, then gives each cell the
// neighbour its water runs to (the steepest way down), an order in which every cell comes after
// the cell its water runs to, and the area that drains through each cell.
export function route(height, columns, spacing, fixed, work) {
  const count = columns * columns
  const { receiver, distance, stack, area, visited, heap, donorStart, donors } = work
  const epsilon = 2e-4
  visited.fill(0)
  heap.clear()
  for (let cell = 0; cell < count; cell++) {
    if (!fixed[cell]) continue
    visited[cell] = 1
    receiver[cell] = cell
    heap.push(cell, height[cell])
  }
  while (heap.size) {
    const cell = heap.pop()
    const x = cell % columns
    const z = (cell - x) / columns
    const level = height[cell]
    for (let k = 0; k < 8; k++) {
      const nx = x + D8X[k]
      const nz = z + D8Z[k]
      if (nx < 0 || nz < 0 || nx >= columns || nz >= columns) continue
      const next = nx + nz * columns
      if (visited[next]) continue
      visited[next] = 1
      const floor = level + epsilon * D8L[k]
      if (height[next] < floor) height[next] = floor
      receiver[next] = cell
      heap.push(next, height[next])
    }
  }
  for (let cell = 0; cell < count; cell++) {
    if (fixed[cell]) {
      distance[cell] = spacing
      continue
    }
    const x = cell % columns
    const z = (cell - x) / columns
    let best = receiver[cell]
    const bx = best % columns
    let bestLength = (bx === x || (best - bx) / columns === z ? 1 : Math.SQRT2) * spacing
    let bestSlope = (height[cell] - height[best]) / bestLength
    for (let k = 0; k < 8; k++) {
      const nx = x + D8X[k]
      const nz = z + D8Z[k]
      if (nx < 0 || nz < 0 || nx >= columns || nz >= columns) continue
      const next = nx + nz * columns
      const length = D8L[k] * spacing
      // A fixed random preference per cell and direction keeps water from running in the
      // ruler-straight lines that eight grid directions would otherwise give.
      const wobble = 0.8 + 0.4 * ((Math.imul(cell, 0x9e3779b1) ^ Math.imul(k + 1, 0x85ebca6b)) >>> 24) / 255
      const slope = (height[cell] - height[next]) / length * wobble
      if (slope > bestSlope) {
        bestSlope = slope
        best = next
        bestLength = length
      }
    }
    receiver[cell] = best
    distance[cell] = bestLength
  }
  donorStart.fill(0)
  for (let cell = 0; cell < count; cell++) {
    if (receiver[cell] !== cell) donorStart[receiver[cell] + 1]++
  }
  for (let cell = 0; cell < count; cell++) donorStart[cell + 1] += donorStart[cell]
  const fill = donorStart.slice(0, count)
  for (let cell = 0; cell < count; cell++) {
    const to = receiver[cell]
    if (to !== cell) donors[fill[to]++] = cell
  }
  let tail = 0
  for (let cell = 0; cell < count; cell++) if (receiver[cell] === cell) stack[tail++] = cell
  for (let head = 0; head < tail; head++) {
    const cell = stack[head]
    for (let index = donorStart[cell]; index < donorStart[cell + 1]; index++) stack[tail++] = donors[index]
  }
  const cellArea = spacing * spacing
  area.fill(cellArea)
  for (let index = count - 1; index >= 0; index--) {
    const cell = stack[index]
    const to = receiver[cell]
    if (to !== cell) area[to] += area[cell]
  }
}

export function routeWork(count) {
  return {
    receiver: new Int32Array(count),
    distance: new Float32Array(count),
    stack: new Int32Array(count),
    area: new Float64Array(count),
    visited: new Uint8Array(count),
    heap: new Heap(1 << 16),
    donorStart: new Int32Array(count + 1),
    donors: new Int32Array(count),
  }
}

// Rivers cut down towards their base level (the lowland and the outlets at the region's edge)
// faster where more water gathers; soil creeps downhill and rounds the hilltops.
function erode(height, columns, spacing, fixed, erodibility, iterations, creep, progress) {
  const count = columns * columns
  const work = routeWork(count)
  const next = new Float64Array(count)
  // Below this draining area there is no channel: slopes there are shaped by creep alone, which
  // keeps steep sides from being combed into a gully per grid column.
  const channelStart = Math.sqrt(0.05e6)
  for (let iteration = 0; iteration < iterations; iteration++) {
    route(height, columns, spacing, fixed, work)
    const { receiver, distance, stack, area } = work
    for (let index = 0; index < count; index++) {
      const cell = stack[index]
      if (fixed[cell]) continue
      const flow = Math.sqrt(area[cell]) - channelStart
      if (flow <= 0) continue
      const factor = erodibility[cell] * flow / distance[cell]
      height[cell] = (height[cell] + factor * height[receiver[cell]]) / (1 + factor)
    }
    for (let z = 0; z < columns; z++) {
      for (let x = 0; x < columns; x++) {
        const cell = x + z * columns
        if (fixed[cell]) {
          next[cell] = height[cell]
          continue
        }
        const h = height[cell]
        const west = x > 0 ? height[cell - 1] : h
        const east = x < columns - 1 ? height[cell + 1] : h
        const north = z > 0 ? height[cell - columns] : h
        const south = z < columns - 1 ? height[cell + columns] : h
        next[cell] = h + creep[cell] * (west + east + north + south - 4 * h)
      }
    }
    height.set(next)
    progress((iteration + 1) / iterations)
  }
  route(height, columns, spacing, fixed, work)
  return work
}

// Catmull-Rom interpolation on a grid whose cell centres sit at (index + 0.5) * spacing.
export function bicubic(grid, columns, spacing, x, z) {
  const gx = x / spacing - 0.5
  const gz = z / spacing - 0.5
  const ix = Math.floor(gx)
  const iz = Math.floor(gz)
  const tx = gx - ix
  const tz = gz - iz
  let result = 0
  for (let m = -1; m <= 2; m++) {
    const row = Math.min(columns - 1, Math.max(0, iz + m)) * columns
    const p0 = grid[row + Math.min(columns - 1, Math.max(0, ix - 1))]
    const p1 = grid[row + Math.min(columns - 1, Math.max(0, ix))]
    const p2 = grid[row + Math.min(columns - 1, Math.max(0, ix + 1))]
    const p3 = grid[row + Math.min(columns - 1, Math.max(0, ix + 2))]
    const value = p1 + 0.5 * tx * (p2 - p0 + tx * (2 * p0 - 5 * p1 + 4 * p2 - p3 + tx * (3 * (p1 - p2) + p3 - p0)))
    const w = m === -1 ? -0.5 * tz * (1 - tz) * (1 - tz)
      : m === 0 ? 1 - tz * tz * (2.5 - 1.5 * tz)
        : m === 1 ? tz * (0.5 + tz * (2 - 1.5 * tz))
          : -0.5 * tz * tz * (1 - tz)
    result += value * w
  }
  return result
}

export function bilinear(grid, columns, spacing, x, z) {
  const gx = Math.min(columns - 1, Math.max(0, x / spacing - 0.5))
  const gz = Math.min(columns - 1, Math.max(0, z / spacing - 0.5))
  const ix = Math.min(columns - 2, Math.floor(gx))
  const iz = Math.min(columns - 2, Math.floor(gz))
  const tx = gx - ix
  const tz = gz - iz
  const cell = ix + iz * columns
  const top = grid[cell] + (grid[cell + 1] - grid[cell]) * tx
  const bottom = grid[cell + columns] + (grid[cell + columns + 1] - grid[cell + columns]) * tx
  return top + (bottom - top) * tz
}

// Steepest gradient of each cell, as rise over run.
export function slopeOf(height, columns, spacing) {
  const slope = new Float32Array(columns * columns)
  for (let z = 0; z < columns; z++) {
    for (let x = 0; x < columns; x++) {
      const cell = x + z * columns
      const west = height[cell - (x > 0 ? 1 : 0)]
      const east = height[cell + (x < columns - 1 ? 1 : 0)]
      const north = height[cell - (z > 0 ? columns : 0)]
      const south = height[cell + (z < columns - 1 ? columns : 0)]
      const gx = (east - west) / (spacing * ((x > 0 ? 1 : 0) + (x < columns - 1 ? 1 : 0)))
      const gz = (south - north) / (spacing * ((z > 0 ? 1 : 0) + (z < columns - 1 ? 1 : 0)))
      slope[cell] = Math.hypot(gx, gz)
    }
  }
  return slope
}

// Follows each stream from its source down to where it meets a bigger one or the great river.
function traceStreams(columns, spacing, receiver, area, fixed, threshold) {
  const count = columns * columns
  const isStream = new Uint8Array(count)
  for (let cell = 0; cell < count; cell++) if (area[cell] >= threshold && !fixed[cell]) isStream[cell] = 1
  const hasUpstream = new Uint8Array(count)
  for (let cell = 0; cell < count; cell++) {
    if (isStream[cell] && receiver[cell] !== cell) hasUpstream[receiver[cell]] = 1
  }
  const taken = new Uint8Array(count)
  const heads = []
  for (let cell = 0; cell < count; cell++) if (isStream[cell] && !hasUpstream[cell]) heads.push(cell)
  // Biggest rivers first, so each tributary ends where it joins a trunk that is already traced.
  const trunkFirst = heads.map((head) => {
    let cell = head
    let steps = 0
    while (receiver[cell] !== cell && isStream[cell] && steps < count) {
      cell = receiver[cell]
      steps++
    }
    return { head, steps }
  }).sort((a, b) => b.steps - a.steps)
  const streams = []
  for (const { head } of trunkFirst) {
    const cells = []
    let cell = head
    let mouth = -1
    while (true) {
      cells.push(cell)
      taken[cell] = 1
      const to = receiver[cell]
      if (to === cell) break
      if (taken[to] || fixed[to] || !isStream[to]) {
        mouth = to
        break
      }
      cell = to
    }
    if (mouth >= 0) cells.push(mouth)
    if (cells.length < 3) continue
    const points = []
    const areas = []
    for (const index of cells) {
      const x = index % columns
      const z = (index - x) / columns
      points.push((x + 0.5) * spacing, (z + 0.5) * spacing)
      areas.push(area[index])
    }
    streams.push({ points, areas, mouth: mouth >= 0 && fixed[mouth] ? 'river' : 'stream' })
  }
  return { streams, isStream }
}

export function createTerrain({ seed = 1, size = 20000, cell = 20, erosion = 36 } = {}, progress = () => {}) {
  const columns = Math.round(size / cell)
  const coarse = cell * 2
  const coarseColumns = Math.round(size / coarse)
  const river = riverCourse(seed, size)
  const shape = landShape(seed, size, river)

  // The coarse grid: shape, then erosion.
  const coarseCoordinates = valleyCoordinates(river, coarseColumns, coarse)
  const coarseCount = coarseColumns * coarseColumns
  const before = new Float64Array(coarseCount)
  const fixed = new Uint8Array(coarseCount)
  const erodibility = new Float32Array(coarseCount)
  const creep = new Float32Array(coarseCount)
  for (let index = 0; index < coarseCount; index++) {
    const x = (index % coarseColumns + 0.5) * coarse
    const z = (Math.floor(index / coarseColumns) + 0.5) * coarse
    const { height, kind } = shape(x, z, coarseCoordinates.s[index], coarseCoordinates.d[index])
    before[index] = height
    if (kind === LAND.LOWLAND) fixed[index] = 1
    // How far a step down in the river bed travels upstream per iteration is this times the
    // square root of the draining area. The loam-capped plateau resists; the hills give way
    // and their soft slopes creep into rounded ridges.
    erodibility[index] = kind === LAND.HILLS ? 0.2 : 0.14
    creep[index] = kind === LAND.HILLS ? 0.07 : 0.035
  }
  progress('地形の骨格', 0.15)

  // The land goes on beyond the region, so water leaves wherever it reaches the edge. A stream
  // that leaves with much water has, outside the region, already cut a valley down towards the
  // bay; its exit is lowered by as much as such a valley would be deep there.
  const outlets = []
  const edgeCells = []
  for (let index = 0; index < coarseCount; index++) {
    const column = index % coarseColumns
    const row = (index - column) / coarseColumns
    if (column > 0 && row > 0 && column < coarseColumns - 1 && row < coarseColumns - 1) continue
    if (fixed[index]) continue
    fixed[index] = 1
    edgeCells.push(index)
  }
  {
    const probe = routeWork(coarseCount)
    route(Float64Array.from(before), coarseColumns, coarse, fixed, probe)
    for (const index of edgeCells) {
      const drained = probe.area[index]
      if (drained < 0.2e6) continue
      const depth = Math.min(22, 0.0085 * Math.sqrt(drained))
      before[index] -= depth
      outlets.push({ x: (index % coarseColumns + 0.5) * coarse, z: (Math.floor(index / coarseColumns) + 0.5) * coarse, depth, area: drained })
    }
  }

  const eroded = Float64Array.from(before)
  const flow = erode(eroded, coarseColumns, coarse, fixed, erodibility, erosion, creep, (fraction) => progress('谷の侵食', 0.15 + fraction * 0.55))
  const rawChange = new Float32Array(coarseCount)
  for (let index = 0; index < coarseCount; index++) rawChange[index] = eroded[index] - before[index]
  // Soften the change on open slopes, where single grid cells would otherwise show as ribs;
  // channels keep their full depth.
  const change = Float32Array.from(rawChange)
  for (let row = 1; row < coarseColumns - 1; row++) {
    for (let column = 1; column < coarseColumns - 1; column++) {
      const index = column + row * coarseColumns
      if (fixed[index] || flow.area[index] > 0.12e6) continue
      let sum = rawChange[index] * 4
      sum += (rawChange[index - 1] + rawChange[index + 1] + rawChange[index - coarseColumns] + rawChange[index + coarseColumns]) * 2
      sum += rawChange[index - 1 - coarseColumns] + rawChange[index + 1 - coarseColumns] + rawChange[index - 1 + coarseColumns] + rawChange[index + 1 + coarseColumns]
      change[index] = sum / 16
    }
  }

  // The fine grid: the crisp shape again, plus what erosion took away.
  const count = columns * columns
  const elevation = new Float32Array(count)
  const land = new Uint8Array(count)
  const valleyS = new Float32Array(count)
  const valleyD = new Float32Array(count)
  const detailSeed = seed + 303
  for (let row = 0; row < columns; row++) {
    const z = (row + 0.5) * cell
    for (let column = 0; column < columns; column++) {
      const x = (column + 0.5) * cell
      const index = column + row * columns
      const s = bilinear(coarseCoordinates.s, coarseColumns, coarse, x, z)
      const d = bilinear(coarseCoordinates.d, coarseColumns, coarse, x, z)
      valleyS[index] = s
      valleyD[index] = d
      const { height, kind } = shape(x, z, s, d)
      let value = height + bicubic(change, coarseColumns, coarse, x, z)
      if (kind !== LAND.LOWLAND) value += 0.3 * fbm(detailSeed, x / 90, z / 90, 2)
      const fromChannel = Math.abs(d - along(river.channel, s))
      if (fromChannel < along(river.channelHalf, s)) {
        land[index] = LAND.CHANNEL
        value = along(river.level, s) - 2.6
      } else land[index] = kind
      elevation[index] = value
    }
  }
  progress('細部', 0.8)

  // Water on the fine grid leaves through the great river and over the region's edge.
  const fineFixed = new Uint8Array(count)
  for (let index = 0; index < count; index++) {
    const column = index % columns
    const row = (index - column) / columns
    if (land[index] === LAND.CHANNEL || column === 0 || row === 0 || column === columns - 1 || row === columns - 1) fineFixed[index] = 1
  }
  const filled = Float64Array.from(elevation)
  const work = routeWork(count)
  route(filled, columns, cell, fineFixed, work)
  const streamArea = 0.35e6
  const { streams, isStream } = traceStreams(columns, cell, work.receiver, work.area, fineFixed, streamArea)
  // Height above the nearest stream or river the cell drains to: low values are wet valley floors.
  const hand = new Float32Array(count)
  const drainLevel = new Float32Array(count)
  for (let index = 0; index < count; index++) {
    const cellIndex = work.stack[index]
    const to = work.receiver[cellIndex]
    if (to === cellIndex || isStream[cellIndex]) drainLevel[cellIndex] = elevation[cellIndex]
    else drainLevel[cellIndex] = drainLevel[to]
    hand[cellIndex] = Math.max(0, elevation[cellIndex] - drainLevel[cellIndex])
  }
  const slope = slopeOf(elevation, columns, cell)
  progress('水系', 1)

  return {
    seed, size, cell, columns,
    elevation, land, slope, hand,
    area: Float32Array.from(work.area),
    receiver: work.receiver,
    isStream,
    valleyS, valleyD,
    river: {
      valley: Float64Array.from(river.valley),
      normal: river.normal,
      corridor: river.corridor, channel: river.channel, channelHalf: river.channelHalf,
      halfNE: river.halfNE, halfSW: river.halfSW, level: river.level,
      sIn: river.sIn, sOut: river.sOut, step: VALLEY_STEP, corridorHalf: CORRIDOR_HALF,
    },
    streams, outlets,
  }
}

export { along as riverAlong }
