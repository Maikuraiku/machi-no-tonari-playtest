// Where a region town begins: the forecourt of the station of the chosen district (丁目), or of
// the station nearest to it. Every town needs a plaza (where newcomers arrive), a shop and a
// cafe, one tile of 8 m each; here they are three level tiles a short walk from the station,
// clear of roads, streets, water, the monorail and its stations. Also a walkable spot near the
// district's middle, to take the player into the district itself.
import { ROAD_WIDTH } from './develop.js?v=online-1794980046418'
import { decodeLine, STEP } from './game-pack.js?v=online-1794980046418'
import { buildingsIn, streetsIn } from './streets.js?v=online-1794980046418'

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
      const [ax, az, bx, bz] = street.points
      if (segmentDistance(cx, cz, ax, az, bx, bz) < street.width / 2 + 4.5) return null
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

// A spot near (x, z) that is not inside a building or in water, in region metres.
export function walkableNear(region, x, z) {
  const houses = buildingsIn(region, x - 60, z - 60, x + 60, z + 60)
  const inside = (px, pz) => houses.some((house) => {
    const c = house.corners
    let hit = false
    for (let i = 0, j = 3; i < 4; j = i++) {
      const [xi, zi, xj, zj] = [c[i * 2], c[i * 2 + 1], c[j * 2], c[j * 2 + 1]]
      if ((zi > pz) !== (zj > pz) && px < (xj - xi) * (pz - zi) / (zj - zi) + xi) hit = !hit
    }
    return hit
  })
  for (let radius = 0; radius <= 60; radius += 3) {
    const steps = Math.max(1, Math.round(radius * 0.8))
    for (let k = 0; k < steps; k++) {
      const angle = k / steps * Math.PI * 2
      const px = x + Math.cos(angle) * radius
      const pz = z + Math.sin(angle) * radius
      if (!inside(px, pz) && !region.fine.heightAt(px, pz).water) return [Math.round(px * 10) / 10, Math.round(pz * 10) / 10]
    }
  }
  return [x, z]
}

// The plaza, shop and cafe for a town that begins at district `district`.
export function pickSite(region, packs, { district }) {
  const division = region.division
  const target = division.districts[district]
  if (!target) throw new Error('unknown district')
  const stations = stationsOf(packs)
  const own = stations.filter((station) => target.stations.includes(station.name))
  const pool = own.length ? own : stations
  const station = pool.reduce((best, entry) => (Math.hypot(entry.x - target.x, entry.z - target.z) < Math.hypot(best.x - target.x, best.z - target.z) ? entry : best))
  const reach = 72
  const streets = streetsIn(region, station.x - reach - 20, station.z - reach - 20, station.x + reach + 20, station.z + reach + 20)
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
