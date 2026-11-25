// Where a region town begins: the forecourt of the station of the chosen district (丁目), or of
// the station nearest to it. Every town needs a plaza (where newcomers arrive), a shop and a
// cafe, one tile of 8 m each; here they are three level tiles a short walk from the station,
// clear of roads, streets, water, the monorail and its stations. Also a walkable spot near the
// district's middle, to take the player into the district itself.
import { ROAD_WIDTH } from './develop.js'
import { decodeLine, STEP } from './game-pack.js'
import { landBuildings, landStreets } from './land.js'

const TILE = 8

const segmentDistance = (px, pz, ax, az, bx, bz) => {
  const dx = bx - ax
  const dz = bz - az
  const length = dx * dx + dz * dz
  let t = length > 0 ? ((px - ax) * dx + (pz - az) * dz) / length : 0
  t = t < 0 ? 0 : t > 1 ? 1 : t
  return Math.hypot(ax + dx * t - px, az + dz * t - pz)
}

function stationsOf(packs) {
  const list = []
  for (const pack of packs) {
    const line = decodeLine(pack)
    const count = line.points.length / 2
    for (const station of line.stations) {
      const k = Math.min(count - 2, Math.floor(station.s / STEP))
      const t = station.s / STEP - k
      const x = line.points[k * 2] + (line.points[k * 2 + 2] - line.points[k * 2]) * t
      const z = line.points[k * 2 + 1] + (line.points[k * 2 + 3] - line.points[k * 2 + 1]) * t
      list.push({ name: station.name, x, z, lots: station.lots, line })
    }
  }
  return list
}

// Whether the ground of a tile is free and level enough for a plaza, a shop or a cafe.
function tileCheck(region, packs, { streets, lots, lines }) {
  return (tx, tz) => {
    const x0 = tx * TILE
    const z0 = tz * TILE
    const cx = x0 + TILE / 2
    const cz = z0 + TILE / 2
    if (lots.some((lot) => lot && tx >= lot[0] && tx < lot[0] + lot[2] && tz >= lot[1] && tz < lot[1] + lot[3])) return null
    // Not on a main road or a local street.
    let blocked = false
    region.roadIndex.near(cx, cz, 30, (segment) => {
      if (segmentDistance(cx, cz, segment.ax, segment.az, segment.bx, segment.bz) < ROAD_WIDTH[segment.data] / 2 + 5) blocked = true
    })
    if (blocked) return null
    for (const street of streets) {
      const p = street.points
      for (let k = 2; k < p.length; k += 2) {
        if (segmentDistance(cx, cz, p[k - 2], p[k - 1], p[k], p[k + 1]) < street.width / 2 + 4.5) return null
      }
    }
    // Clear of the monorail.
    for (const line of lines) {
      for (let k = 2; k < line.points.length; k += 2) {
        if (segmentDistance(cx, cz, line.points[k - 2], line.points[k - 1], line.points[k], line.points[k + 1]) < 12) return null
      }
    }
    // Dry, and level within a metre.
    let low = Infinity
    let high = -Infinity
    for (const [x, z] of [[x0, z0], [x0 + TILE, z0], [x0, z0 + TILE], [x0 + TILE, z0 + TILE], [cx, cz]]) {
      const here = region.fine.heightAt(x, z)
      if (here.water) return null
      low = Math.min(low, here.height)
      high = Math.max(high, here.height)
    }
    if (high - low > 1) return null
    return { x: tx, z: tz, ground: Math.round(high * 100) / 100 }
  }
}

// Whether a point lies in a footprint (corners [x0, z0, …]).
function insideFootprint(c, px, pz) {
  let hit = false
  const count = c.length / 2
  for (let i = 0, j = count - 1; i < count; j = i++) {
    const [xi, zi, xj, zj] = [c[i * 2], c[i * 2 + 1], c[j * 2], c[j * 2 + 1]]
    if ((zi > pz) !== (zj > pz) && px < (xj - xi) * (pz - zi) / (zj - zi) + xi) hit = !hit
  }
  return hit
}

// How far a point is from the walls of a footprint (0 inside it).
function footprintGap(c, px, pz) {
  if (insideFootprint(c, px, pz)) return 0
  let gap = Infinity
  const count = c.length / 2
  for (let i = 0, j = count - 1; i < count; j = i++) {
    gap = Math.min(gap, segmentDistance(px, pz, c[j * 2], c[j * 2 + 1], c[i * 2], c[i * 2 + 1]))
  }
  return gap
}

// A spot near (x, z) to arrive at, in region metres: on the middle of the nearest local street
// when one runs within 60 m (out in the open, so that the camera has room behind the player),
// otherwise the nearest spot that keeps 2.5 m clear of every building; never in water or inside
// a building.
export function walkableNear(region, x, z) {
  const reach = 60
  const houses = landBuildings(region, x - reach - 10, z - reach - 10, x + reach + 10, z + reach + 10)
  // The gap to the nearest building round a point (those whose corners lie within 40 m of it).
  const gapAt = (px, pz) => {
    let gap = Infinity
    for (const { corners: c } of houses) {
      let close = false
      for (let k = 0; k < c.length && !close; k += 2) close = Math.abs(c[k] - px) < 40 && Math.abs(c[k + 1] - pz) < 40
      if (close) gap = Math.min(gap, footprintGap(c, px, pz))
    }
    return gap
  }
  const dry = (px, pz) => !region.fine.heightAt(px, pz).water
  const rounded = (px, pz) => [Math.round(px * 10) / 10, Math.round(pz * 10) / 10]

  let best = null
  for (const street of landStreets(region, x - reach, z - reach, x + reach, z + reach)) {
    const p = street.points
    for (let k = 2; k < p.length; k += 2) {
      const dx = p[k] - p[k - 2]
      const dz = p[k + 1] - p[k - 1]
      const length = dx * dx + dz * dz
      const t = length > 0 ? Math.min(1, Math.max(0, ((x - p[k - 2]) * dx + (z - p[k - 1]) * dz) / length)) : 0
      const px = p[k - 2] + dx * t
      const pz = p[k - 1] + dz * t
      const d = Math.hypot(px - x, pz - z)
      if (d > reach || (best && d >= best.d)) continue
      if (dry(px, pz) && gapAt(px, pz) > 0.5) best = { d, px, pz }
    }
  }
  if (best) return rounded(best.px, best.pz)

  let fallback = null
  for (let radius = 0; radius <= reach; radius += 3) {
    const steps = Math.max(1, Math.round(radius * 0.8))
    for (let k = 0; k < steps; k++) {
      const angle = k / steps * Math.PI * 2
      const px = x + Math.cos(angle) * radius
      const pz = z + Math.sin(angle) * radius
      if (!dry(px, pz)) continue
      const gap = gapAt(px, pz)
      if (gap >= 2.5) return rounded(px, pz)
      if (gap > 0 && !fallback) fallback = rounded(px, pz)
    }
  }
  return fallback ?? [x, z]
}

// The station a town at 丁目 `target` begins at: its own, else the nearest to its middle.
function stationFor(target, stations) {
  const own = stations.filter((station) => target.stations.includes(station.name))
  const pool = own.length ? own : stations
  return pool.reduce((best, entry) => (Math.hypot(entry.x - target.x, entry.z - target.z) < Math.hypot(best.x - target.x, best.z - target.z) ? entry : best))
}

// How far round the station the town's first tiles are looked for (m).
const SITE_REACH = 72

// The boxes of land [x0, z0, x1, z1] that pickSite reads for `district`, so that a pack's
// parcel tiles can be fetched first (land.js ensureLand).
export function siteBoxes(region, packs, district) {
  const target = region.division.districts[district]
  if (!target) return []
  const station = stationFor(target, stationsOf(packs))
  const reach = SITE_REACH + 20
  return [
    [station.x - reach, station.z - reach, station.x + reach, station.z + reach],
    [target.x - 70, target.z - 70, target.x + 70, target.z + 70],
  ]
}

// The plaza, shop and cafe for a town that begins at district `district`.
export function pickSite(region, packs, { district }) {
  const division = region.division
  const target = division.districts[district]
  if (!target) throw new Error('unknown district')
  const stations = stationsOf(packs)
  const station = stationFor(target, stations)
  const reach = SITE_REACH
  const streets = landStreets(region, station.x - reach - 20, station.z - reach - 20, station.x + reach + 20, station.z + reach + 20)
  const lots = stations.flatMap((entry) => entry.lots)
  const lines = [...new Set(stations.map((entry) => entry.line))]
  const check = tileCheck(region, packs, { streets, lots, lines })
  const candidates = []
  const tx0 = Math.floor((station.x - reach) / TILE)
  const tz0 = Math.floor((station.z - reach) / TILE)
  for (let tz = tz0; tz <= Math.floor((station.z + reach) / TILE); tz++) {
    for (let tx = tx0; tx <= Math.floor((station.x + reach) / TILE); tx++) {
      const d = Math.hypot(tx * TILE + TILE / 2 - station.x, tz * TILE + TILE / 2 - station.z)
      if (d < 16 || d > reach) continue
      const tile = check(tx, tz)
      if (tile) candidates.push({ ...tile, d })
    }
  }
  candidates.sort((a, b) => a.d - b.d)
  if (candidates.length < 3) throw new Error('no room near the station')
  const [plaza, shop, cafe] = candidates
  const at = walkableNear(region, target.x, target.z)
  return {
    station: station.name,
    plaza: { x: plaza.x, z: plaza.z },
    shop: { x: shop.x, z: shop.z },
    cafe: { x: cafe.x, z: cafe.z },
    ground: { plaza: plaza.ground, shop: shop.ground, cafe: cafe.ground },
    at,
  }
}
