// Polylines in metres, stored flat as [x0, z0, x1, z1, ...]. x runs east and z runs south.

export function lengthOf(points) {
  let total = 0
  for (let index = 2; index < points.length; index += 2) {
    total += Math.hypot(points[index] - points[index - 2], points[index + 1] - points[index - 1])
  }
  return total
}

// Points every `spacing` metres along the line, ending exactly at its last point.
export function resample(points, spacing) {
  const out = [points[0], points[1]]
  let carried = 0
  for (let index = 2; index < points.length; index += 2) {
    const ax = points[index - 2]
    const az = points[index - 1]
    const bx = points[index]
    const bz = points[index + 1]
    const length = Math.hypot(bx - ax, bz - az)
    if (length === 0) continue
    let along = spacing - carried
    while (along <= length) {
      const t = along / length
      out.push(ax + (bx - ax) * t, az + (bz - az) * t)
      along += spacing
    }
    carried = length - (along - spacing)
  }
  const last = points.length - 2
  const tail = out.length - 2
  if (Math.hypot(out[tail] - points[last], out[tail + 1] - points[last + 1]) > spacing * 0.25) out.push(points[last], points[last + 1])
  else {
    out[tail] = points[last]
    out[tail + 1] = points[last + 1]
  }
  return out
}

// Corner cutting: each pass replaces every corner by two points a quarter of the way along its
// sides, which rounds the zigzags of paths found on a grid. The ends stay where they are.
export function chaikin(points, passes = 2) {
  let current = points
  for (let pass = 0; pass < passes; pass++) {
    if (current.length < 6) return current
    const next = [current[0], current[1]]
    for (let index = 0; index < current.length - 2; index += 2) {
      const ax = current[index]
      const az = current[index + 1]
      const bx = current[index + 2]
      const bz = current[index + 3]
      if (index > 0) next.push(ax * 0.75 + bx * 0.25, az * 0.75 + bz * 0.25)
      if (index < current.length - 4) next.push(ax * 0.25 + bx * 0.75, az * 0.25 + bz * 0.75)
    }
    next.push(current[current.length - 2], current[current.length - 1])
    current = next
  }
  return current
}

// Douglas-Peucker: drops points that lie within `tolerance` metres of the line through their
// neighbours, which turns the staircase of a grid path into straight runs at any angle.
export function simplify(points, tolerance) {
  const count = points.length / 2
  if (count < 3) return points.slice()
  const keep = new Uint8Array(count)
  keep[0] = 1
  keep[count - 1] = 1
  const stack = [[0, count - 1]]
  const limit = tolerance * tolerance
  while (stack.length) {
    const [first, last] = stack.pop()
    let worst = -1
    let worstDistance = limit
    for (let index = first + 1; index < last; index++) {
      const { squared } = segmentDistance(points[index * 2], points[index * 2 + 1], points[first * 2], points[first * 2 + 1], points[last * 2], points[last * 2 + 1])
      if (squared > worstDistance) {
        worstDistance = squared
        worst = index
      }
    }
    if (worst < 0) continue
    keep[worst] = 1
    stack.push([first, worst], [worst, last])
  }
  const out = []
  for (let index = 0; index < count; index++) if (keep[index]) out.push(points[index * 2], points[index * 2 + 1])
  return out
}

// Unit normals pointing to the left of the direction of travel (north when heading east).
export function normals(points) {
  const count = points.length / 2
  const out = new Float64Array(points.length)
  for (let index = 0; index < count; index++) {
    const before = Math.max(0, index - 1) * 2
    const after = Math.min(count - 1, index + 1) * 2
    const tx = points[after] - points[before]
    const tz = points[after + 1] - points[before + 1]
    const length = Math.hypot(tx, tz) || 1
    out[index * 2] = tz / length
    out[index * 2 + 1] = -tx / length
  }
  return out
}

// Squared distance from a point to a segment, and how far along the segment the nearest point is.
export function segmentDistance(px, pz, ax, az, bx, bz) {
  const dx = bx - ax
  const dz = bz - az
  const lengthSquared = dx * dx + dz * dz
  let t = lengthSquared > 0 ? ((px - ax) * dx + (pz - az) * dz) / lengthSquared : 0
  t = t < 0 ? 0 : t > 1 ? 1 : t
  const ex = ax + dx * t - px
  const ez = az + dz * t - pz
  return { squared: ex * ex + ez * ez, t }
}

// Where segment a-b crosses segment c-d, as fractions along each, or null.
export function crossing(ax, az, bx, bz, cx, cz, dx, dz) {
  const rx = bx - ax
  const rz = bz - az
  const sx = dx - cx
  const sz = dz - cz
  const denominator = rx * sz - rz * sx
  if (Math.abs(denominator) < 1e-12) return null
  const qx = cx - ax
  const qz = cz - az
  const t = (qx * sz - qz * sx) / denominator
  const u = (qx * rz - qz * rx) / denominator
  if (t < 0 || t > 1 || u < 0 || u > 1) return null
  return { t, u }
}

// The point `distance` metres along a polyline, with the heading there.
export function pointAlong(points, distance) {
  let travelled = 0
  for (let index = 2; index < points.length; index += 2) {
    const ax = points[index - 2]
    const az = points[index - 1]
    const bx = points[index]
    const bz = points[index + 1]
    const length = Math.hypot(bx - ax, bz - az)
    if (travelled + length >= distance || index === points.length - 2) {
      const t = length > 0 ? Math.min(1, Math.max(0, (distance - travelled) / length)) : 0
      return { x: ax + (bx - ax) * t, z: az + (bz - az) * t, dx: (bx - ax) / (length || 1), dz: (bz - az) / (length || 1) }
    }
    travelled += length
  }
  return { x: points[0], z: points[1], dx: 1, dz: 0 }
}

// A bucket grid of segments for asking "which segments are near this point?".
export function segmentIndex(size, bucket = 250) {
  const columns = Math.ceil(size / bucket) + 1
  const buckets = new Map()
  const segments = []
  function cellsOf(ax, az, bx, bz, pad) {
    const x0 = Math.max(0, Math.floor((Math.min(ax, bx) - pad) / bucket))
    const x1 = Math.min(columns - 1, Math.floor((Math.max(ax, bx) + pad) / bucket))
    const z0 = Math.max(0, Math.floor((Math.min(az, bz) - pad) / bucket))
    const z1 = Math.min(columns - 1, Math.floor((Math.max(az, bz) + pad) / bucket))
    return [x0, x1, z0, z1]
  }
  return {
    segments,
    add(ax, az, bx, bz, data) {
      const id = segments.length
      segments.push({ ax, az, bx, bz, data })
      const [x0, x1, z0, z1] = cellsOf(ax, az, bx, bz, 0)
      for (let z = z0; z <= z1; z++) {
        for (let x = x0; x <= x1; x++) {
          const key = x + z * columns
          let list = buckets.get(key)
          if (!list) buckets.set(key, list = [])
          list.push(id)
        }
      }
      return id
    },
    // Segments whose buckets touch the box around (x, z); each segment is reported once.
    near(x, z, radius, visit) {
      const [x0, x1, z0, z1] = cellsOf(x, z, x, z, radius)
      const seen = new Set()
      for (let bz = z0; bz <= z1; bz++) {
        for (let bx = x0; bx <= x1; bx++) {
          const list = buckets.get(bx + bz * columns)
          if (!list) continue
          for (const id of list) {
            if (seen.has(id)) continue
            seen.add(id)
            visit(segments[id], id)
          }
        }
      }
    },
    inBox(minX, minZ, maxX, maxZ, visit) {
      const [x0, x1, z0, z1] = cellsOf(minX, minZ, maxX, maxZ, 0)
      const seen = new Set()
      for (let bz = z0; bz <= z1; bz++) {
        for (let bx = x0; bx <= x1; bx++) {
          const list = buckets.get(bx + bz * columns)
          if (!list) continue
          for (const id of list) {
            if (seen.has(id)) continue
            seen.add(id)
            visit(segments[id], id)
          }
        }
      }
    },
  }
}
