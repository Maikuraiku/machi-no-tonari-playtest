// Ground height at 1 m. The 20 m grid of the developed land gives the large forms; on top come
// the forms smaller than a grid cell: the great river's channel, banks and levees drawn exactly
// from the river's own geometry, streams in their beds, graded hillsides stepped into level lots,
// paddies levelled plot by plot, and the small unevenness of woods and open land.
import { BUILT_USES, USE } from './develop.js?v=online-1794946480502'
import { chaikin, segmentIndex } from './geometry.js?v=online-1794946480502'
import { fbm } from './noise.js?v=online-1794946480502'
import { bicubic, bilinear, riverAlong } from './terrain.js?v=online-1794946480502'

export const WATER = { NONE: 0, RIVER: 1, STREAM: 2 }

export function streamGeometry(terrain, city, size) {
  const index = segmentIndex(size, 100)
  const list = []
  for (const stream of terrain.streams) {
    const area = stream.areas[stream.areas.length - 1]
    if (area < 0.35e6) continue
    const points = chaikin(stream.points, 3)
    const km2 = area / 1e6
    const entry = {
      points,
      width: 1.6 + 2.2 * Math.sqrt(km2),
      depth: 1.3 + 0.35 * Math.sqrt(km2),
      covered: Boolean(stream.covered),
      area,
    }
    list.push(entry)
    for (let k = 2; k < points.length; k += 2) index.add(points[k - 2], points[k - 1], points[k], points[k + 1], entry)
  }
  return { index, list }
}

export function createFineTerrain(region) {
  const { terrain, city, seed } = region
  const { columns, cell, river } = terrain
  const corridorHalf = river.corridorHalf
  const crest = 7.5
  const riverReach = corridorHalf + 60

  function cellOf(x, z) {
    const c = Math.min(columns - 1, Math.max(0, Math.floor(x / cell)))
    const r = Math.min(columns - 1, Math.max(0, Math.floor(z / cell)))
    return c + r * columns
  }

  // Height at (x, z), given the stream segments that may be near.
  function sample(x, z, streams, out) {
    const at = cellOf(x, z)
    const use = city.use[at]
    let water = WATER.NONE
    const s = bilinear(terrain.valleyS, columns, cell, x, z)
    const d = bilinear(terrain.valleyD, columns, cell, x, z)
    const fromCorridor = d - riverAlong(river.corridor, s)
    let height
    if (Math.abs(fromCorridor) < riverReach) {
      const level = riverAlong(river.level, s)
      // Near the river the developed grid's levee is a blur; start from the natural ground.
      height = bicubic(terrain.elevation, columns, cell, x, z)
      if (Math.abs(fromCorridor) < corridorHalf) {
        const fromChannel = Math.abs(d - riverAlong(river.channel, s))
        const half = riverAlong(river.channelHalf, s)
        const bed = level + 1.1 + 0.3 * fbm(seed + 701, x / 40, z / 40, 3)
        if (fromChannel < half) {
          height = level - 2.6
          water = WATER.RIVER
        } else if (fromChannel < half + 14) height = level - 2.6 + (bed - level + 2.6) * ((fromChannel - half) / 14)
        else height = bed
      } else if (BUILT_USES.has(use)) height += 0.8
      // Levees: a 12 m crest 7.5 m above the river's level, sides at one in two.
      const fromCrest = Math.abs(Math.abs(fromCorridor) - corridorHalf)
      const levee = level + crest - Math.max(0, fromCrest - 6) * 0.5
      if (levee > height) height = levee
    } else {
      height = bicubic(city.ground, columns, cell, x, z)
      if (city.newtown[at]) height = Math.round(height / 3) * 3
      else if (use === USE.PADDY) height = Math.round(height / 0.4) * 0.4
      else if (BUILT_USES.has(use)) {
        if (terrain.slope[at] > 0.04) height = Math.round(height / 1.4) * 1.4
      } else if (use === USE.FOREST || use === USE.GREEN || use === USE.PARK) {
        height += 0.45 * fbm(seed + 702, x / 14, z / 14, 3)
      } else if (use === USE.FIELD) height += 0.07 * fbm(seed + 703, x / 6, z / 30, 2)
    }
    // Streams: an open channel, or nothing where the stream runs in a culvert.
    if (streams && water === WATER.NONE) {
      let nearest = Infinity
      let hit = null
      for (const segment of streams) {
        const dx = segment.bx - segment.ax
        const dz = segment.bz - segment.az
        const length = dx * dx + dz * dz
        let t = length > 0 ? ((x - segment.ax) * dx + (z - segment.az) * dz) / length : 0
        t = t < 0 ? 0 : t > 1 ? 1 : t
        const ex = segment.ax + dx * t - x
        const ez = segment.az + dz * t - z
        const squared = ex * ex + ez * ez
        if (squared < nearest) {
          nearest = squared
          hit = segment.data
        }
      }
      if (hit && !hit.covered) {
        const distance = Math.sqrt(nearest)
        const half = hit.width / 2
        if (distance < half) {
          height -= hit.depth
          water = WATER.STREAM
        } else if (distance < half + 2) height -= hit.depth * (1 - (distance - half) / 2)
      }
    }
    out.water = water
    return height
  }

  const scratch = { water: 0 }

  // Heights at the centres of a w × h grid of `step`-metre pixels starting at (x0, z0).
  function heights(x0, z0, step, w, h) {
    const height = new Float32Array(w * h)
    const water = new Uint8Array(w * h)
    const streams = []
    region.streams.index.inBox(x0 - 20, z0 - 20, x0 + w * step + 20, z0 + h * step + 20, (segment) => streams.push(segment))
    for (let j = 0; j < h; j++) {
      const z = z0 + (j + 0.5) * step
      for (let i = 0; i < w; i++) {
        const x = x0 + (i + 0.5) * step
        // Only streams within reach are worth measuring against.
        const near = streams.length ? nearStreams(streams, x, z) : null
        height[i + j * w] = sample(x, z, near, scratch)
        water[i + j * w] = scratch.water
      }
    }
    return { height, water }
  }

  function nearStreams(streams, x, z) {
    let list = null
    for (const segment of streams) {
      const minX = Math.min(segment.ax, segment.bx) - 12
      const maxX = Math.max(segment.ax, segment.bx) + 12
      const minZ = Math.min(segment.az, segment.bz) - 12
      const maxZ = Math.max(segment.az, segment.bz) + 12
      if (x < minX || x > maxX || z < minZ || z > maxZ) continue
      ;(list ??= []).push(segment)
    }
    return list
  }

  function heightAt(x, z) {
    const streams = []
    region.streams.index.near(x, z, 20, (segment) => streams.push(segment))
    const out = { water: 0 }
    const height = sample(x, z, streams.length ? streams : null, out)
    return { height, water: out.water }
  }

  return { heightAt, heights }
}
