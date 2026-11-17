// Tools for square grids stored row by row: distances, blurs, resampling and least-cost paths.
import { Heap } from './heap.js?v=online-1794946480502'

export const D8X = Int8Array.of(1, 1, 0, -1, -1, -1, 0, 1)
export const D8Z = Int8Array.of(0, 1, 1, 1, 0, -1, -1, -1)
export const D8L = Float64Array.of(1, Math.SQRT2, 1, Math.SQRT2, 1, Math.SQRT2, 1, Math.SQRT2)

const FAR = 1e20

function distance1d(f, n, d, v, z) {
  let k = 0
  v[0] = 0
  z[0] = -FAR
  z[1] = FAR
  for (let q = 1; q < n; q++) {
    let s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k])
    while (s <= z[k]) {
      k--
      s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k])
    }
    k++
    v[k] = q
    z[k] = s
    z[k + 1] = FAR
  }
  k = 0
  for (let q = 0; q < n; q++) {
    while (z[k + 1] < q) k++
    d[q] = (q - v[k]) * (q - v[k]) + f[v[k]]
  }
}

// Exact distance in metres from every cell to the nearest cell where `mask` is set
// (Felzenszwalb and Huttenlocher's two-pass method).
export function distanceField(mask, columns, spacing) {
  const count = columns * columns
  const grid = new Float64Array(count)
  for (let index = 0; index < count; index++) grid[index] = mask[index] ? 0 : FAR
  const f = new Float64Array(columns)
  const d = new Float64Array(columns)
  const v = new Int32Array(columns)
  const z = new Float64Array(columns + 1)
  for (let column = 0; column < columns; column++) {
    for (let row = 0; row < columns; row++) f[row] = grid[column + row * columns]
    distance1d(f, columns, d, v, z)
    for (let row = 0; row < columns; row++) grid[column + row * columns] = d[row]
  }
  const out = new Float32Array(count)
  for (let row = 0; row < columns; row++) {
    const offset = row * columns
    for (let column = 0; column < columns; column++) f[column] = grid[offset + column]
    distance1d(f, columns, d, v, z)
    for (let column = 0; column < columns; column++) out[offset + column] = Math.sqrt(d[column]) * spacing
  }
  return out
}

// Mean over a (2r+1)² square, repeated `passes` times (three passes are close to a Gaussian).
export function boxBlur(field, columns, radius, passes = 1) {
  let current = Float32Array.from(field)
  const temp = new Float32Array(field.length)
  const width = radius * 2 + 1
  for (let pass = 0; pass < passes; pass++) {
    for (let row = 0; row < columns; row++) {
      const offset = row * columns
      let sum = 0
      for (let k = -radius; k <= radius; k++) sum += current[offset + Math.min(columns - 1, Math.max(0, k))]
      for (let column = 0; column < columns; column++) {
        temp[offset + column] = sum / width
        sum += current[offset + Math.min(columns - 1, column + radius + 1)] - current[offset + Math.max(0, column - radius)]
      }
    }
    for (let column = 0; column < columns; column++) {
      let sum = 0
      for (let k = -radius; k <= radius; k++) sum += temp[column + Math.min(columns - 1, Math.max(0, k)) * columns]
      for (let row = 0; row < columns; row++) {
        current[column + row * columns] = sum / width
        sum += temp[column + Math.min(columns - 1, row + radius + 1) * columns] - temp[column + Math.max(0, row - radius) * columns]
      }
    }
  }
  return current
}

// A coarser grid: each coarse cell takes the mean (or max or min) of the fine cells it covers.
export function downsample(field, columns, factor, mode = 'mean') {
  const coarse = columns / factor
  const out = new Float32Array(coarse * coarse)
  for (let row = 0; row < coarse; row++) {
    for (let column = 0; column < coarse; column++) {
      let value = mode === 'max' ? -Infinity : mode === 'min' ? Infinity : 0
      for (let dz = 0; dz < factor; dz++) {
        for (let dx = 0; dx < factor; dx++) {
          const v = field[(column * factor + dx) + (row * factor + dz) * columns]
          if (mode === 'max') value = v > value ? v : value
          else if (mode === 'min') value = v < value ? v : value
          else value += v
        }
      }
      out[column + row * coarse] = mode === 'mean' ? value / (factor * factor) : value
    }
  }
  return out
}

// The value above which `wanted` of the cells allowed by `mask` lie.
export function threshold(values, mask, wanted) {
  if (wanted <= 0) return Infinity
  let low = Infinity
  let high = -Infinity
  let available = 0
  for (let index = 0; index < values.length; index++) {
    if (!mask[index]) continue
    available++
    const v = values[index]
    if (v < low) low = v
    if (v > high) high = v
  }
  if (wanted >= available) return -Infinity
  const bins = 8192
  const histogram = new Uint32Array(bins)
  const scale = (bins - 1) / Math.max(1e-9, high - low)
  for (let index = 0; index < values.length; index++) {
    if (mask[index]) histogram[Math.floor((values[index] - low) * scale)]++
  }
  let total = 0
  for (let bin = bins - 1; bin >= 0; bin--) {
    total += histogram[bin]
    if (total >= wanted) return low + bin / scale
  }
  return low
}

// Least-cost paths over a grid whose cells cost so much per metre to cross (Infinity = never).
// Paths move to any of the eight neighbours; searches reuse their arrays.
export function createPathFinder(columns, spacing) {
  const count = columns * columns
  const g = new Float64Array(count)
  const from = new Int32Array(count)
  const seen = new Uint32Array(count)
  const done = new Uint32Array(count)
  const heap = new Heap(1 << 14)
  let generation = 0

  // `goal` is a cell, or a function telling whether a cell will do (then `guide` estimates the
  // remaining cost, or the search spreads evenly). Returns the cells from start to goal.
  return function find(cost, starts, goal, { guide, limit = Infinity, floor = 1 } = {}) {
    generation++
    heap.clear()
    const single = typeof goal === 'number'
    const gx = single ? goal % columns : 0
    const gz = single ? (goal - gx) / columns : 0
    const estimate = single
      ? (cell) => {
        const x = cell % columns
        const z = (cell - x) / columns
        return Math.hypot(x - gx, z - gz) * spacing * floor
      }
      : guide ?? (() => 0)
    for (const start of Array.isArray(starts) ? starts : [starts]) {
      seen[start] = generation
      g[start] = 0
      from[start] = -1
      heap.push(start, estimate(start))
    }
    while (heap.size) {
      const cell = heap.pop()
      if (done[cell] === generation) continue
      done[cell] = generation
      if (single ? cell === goal : goal(cell)) {
        const path = []
        for (let at = cell; at !== -1; at = from[at]) path.push(at)
        return path.reverse()
      }
      if (g[cell] > limit) return null
      const x = cell % columns
      const z = (cell - x) / columns
      const here = cost[cell]
      for (let k = 0; k < 8; k++) {
        const nx = x + D8X[k]
        const nz = z + D8Z[k]
        if (nx < 0 || nz < 0 || nx >= columns || nz >= columns) continue
        const next = nx + nz * columns
        if (done[next] === generation) continue
        const step = (here + cost[next]) * 0.5 * D8L[k] * spacing
        if (!(step < Infinity)) continue
        const total = g[cell] + step
        if (seen[next] === generation && total >= g[next]) continue
        seen[next] = generation
        g[next] = total
        from[next] = cell
        heap.push(next, total + estimate(next))
      }
    }
    return null
  }
}

// Every cell's least total cost from a set of starting cells (Dijkstra over the eight
// neighbours); `initial` gives each start its own head start.
export function costField(cost, columns, spacing, starts, initial) {
  const count = columns * columns
  const total = new Float32Array(count).fill(Infinity)
  const done = new Uint8Array(count)
  const heap = new Heap(1 << 16)
  starts.forEach((start, index) => {
    const value = initial ? initial[index] : 0
    if (value < total[start]) {
      total[start] = value
      heap.push(start, value)
    }
  })
  while (heap.size) {
    const cell = heap.pop()
    if (done[cell]) continue
    done[cell] = 1
    const x = cell % columns
    const z = (cell - x) / columns
    const base = total[cell]
    const here = cost[cell]
    for (let k = 0; k < 8; k++) {
      const nx = x + D8X[k]
      const nz = z + D8Z[k]
      if (nx < 0 || nz < 0 || nx >= columns || nz >= columns) continue
      const next = nx + nz * columns
      if (done[next]) continue
      const value = base + (here + cost[next]) * 0.5 * D8L[k] * spacing
      if (value < total[next]) {
        total[next] = value
        heap.push(next, value)
      }
    }
  }
  return total
}

// Marks the cells a polyline passes through.
export function rasterizeLine(mask, columns, spacing, points, value = 1, radius = 0) {
  for (let index = 2; index < points.length; index += 2) {
    const ax = points[index - 2] / spacing
    const az = points[index - 1] / spacing
    const bx = points[index] / spacing
    const bz = points[index + 1] / spacing
    const steps = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) * 2))
    for (let step = 0; step <= steps; step++) {
      const x = ax + (bx - ax) * step / steps
      const z = az + (bz - az) * step / steps
      for (let dz = -radius; dz <= radius; dz++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const cx = Math.floor(x) + dx
          const cz = Math.floor(z) + dz
          if (cx < 0 || cz < 0 || cx >= columns || cz >= columns) continue
          const cell = cx + cz * columns
          if (mask[cell] < value) mask[cell] = value
        }
      }
    }
  }
}
