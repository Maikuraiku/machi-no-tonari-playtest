// The survey of a 丁目 (district) of a region town: what each 8 m tile of the 丁目's tile box
// holds, as the two-bit mask of district-lookup.js. The screen that claims a 丁目 works it out
// and sends it with the claim; the server then lets a house stand only on tiles coded 0 or 2.
//   3 never: water at the tile's centre or a corner, or an open stream's channel across the
//     tile; a station's land or footprint; within 6 m of a monorail's centre line; relief of
//     more than 3 m among the tile's centre and corners;
//   1 the carriageway of a main road or a local street touches the tile;
//   2 a generated building touches the tile (a house takes its place);
//   0 free.
// Where several hold, 3 wins over 1, 1 over 2 and 2 over 0. Tiles of the box outside the 丁目
// get codes too; they never matter. Pure (no DOM): runs in the region worker and in Node.
import { ROAD_WIDTH } from './develop.js?v=online-1794980046418'
import { BUILDING, FREE, NEVER, ROAD, setMaskCode, tileBox } from './district-lookup.js?v=online-1794980046418'
import { decodeLine } from './game-pack.js?v=online-1794980046418'
import { stationFootprint } from './route-plan.js?v=online-1794980046418'
import { buildingsIn, streetsIn } from './streets.js?v=online-1794980046418'

const TILE = 8
export const RAIL_CLEAR = 6 // metres kept free either side of a monorail's centre line
export const RELIEF = 3 // metres of fall across a tile beyond which no house stands
const STREAM_REACH = 30 // metres round the box searched for stream channels
const MARGIN = 8 // metres round the box asked for streets and buildings

// What a tile holds while the survey runs, folded into one code at the end.
const HOLDS_NEVER = 1
const HOLDS_ROAD = 2
const HOLDS_BUILDING = 4

// The survey of 丁目 `id`: { box: [tx0, tz0, tw, td], mask: Uint8Array(ceil(tw * td / 4)) }.
// `packs` are the town's line packs (game-pack.js), for the monorail and its stations.
export function surveyDistrict(region, packs, id) {
  const { division } = region
  if (!Number.isInteger(id) || id < 0 || id >= division.districts.length) throw new Error(`no district ${id}`)
  const box = tileBox(division.districtOf, id, division.columns)
  if (!box) throw new Error(`district ${id} has no land`)
  const [tx0, tz0, tw, td] = box
  const survey = { tx0, tz0, tw, td, holds: new Uint8Array(tw * td) }
  const x0 = tx0 * TILE
  const z0 = tz0 * TILE
  const x1 = (tx0 + tw) * TILE
  const z1 = (tz0 + td) * TILE

  // Never: the ground itself, the streams, the monorail and its stations.
  markGround(region, survey)
  region.streams?.index.inBox(x0 - STREAM_REACH, z0 - STREAM_REACH, x1 + STREAM_REACH, z1 + STREAM_REACH, (segment) => {
    // Water fills an open channel all along it, between the sample points too; culverts are
    // built over.
    const stream = segment.data
    if (!stream || stream.covered) return
    markStrip(survey, segment.ax, segment.az, segment.bx, segment.bz, stream.width / 2, HOLDS_NEVER, HOLDS_NEVER)
  })
  for (const pack of packs ?? []) markLine(survey, decodeLine(pack))

  // Roads: the main roads, then the local streets.
  const roadReach = Math.max(...ROAD_WIDTH) / 2
  region.roadIndex.inBox(x0 - roadReach, z0 - roadReach, x1 + roadReach, z1 + roadReach, (segment) => {
    markStrip(survey, segment.ax, segment.az, segment.bx, segment.bz, ROAD_WIDTH[segment.data] / 2, HOLDS_ROAD, HOLDS_NEVER | HOLDS_ROAD)
  })
  for (const street of streetsIn(region, x0 - MARGIN, z0 - MARGIN, x1 + MARGIN, z1 + MARGIN)) {
    const [ax, az, bx, bz] = street.points
    markStrip(survey, ax, az, bx, bz, street.width / 2, HOLDS_ROAD, HOLDS_NEVER | HOLDS_ROAD)
  }

  // The region's own buildings.
  for (const building of buildingsIn(region, x0 - MARGIN, z0 - MARGIN, x1 + MARGIN, z1 + MARGIN)) {
    markPolygon(survey, building.corners, HOLDS_BUILDING, HOLDS_NEVER | HOLDS_ROAD | HOLDS_BUILDING)
  }

  const mask = new Uint8Array(Math.ceil(tw * td / 4))
  for (let j = 0; j < td; j++) {
    for (let i = 0; i < tw; i++) {
      const holds = survey.holds[i + j * tw]
      const code = holds & HOLDS_NEVER ? NEVER : holds & HOLDS_ROAD ? ROAD : holds & HOLDS_BUILDING ? BUILDING : FREE
      if (code !== FREE) setMaskCode(mask, box, tx0 + i, tz0 + j, code)
    }
  }
  return { box, mask }
}

// Water at a tile's centre or a corner, or more relief among them than a terrace takes. The
// corners are shared by up to four tiles, so each is measured once.
function markGround(region, survey) {
  const { tx0, tz0, tw, td, holds } = survey
  const { fine } = region
  const columns = tw + 1
  const cornerHeight = new Float64Array(columns * (td + 1))
  const cornerWater = new Uint8Array(columns * (td + 1))
  for (let j = 0; j <= td; j++) {
    for (let i = 0; i <= tw; i++) {
      const here = fine.heightAt((tx0 + i) * TILE, (tz0 + j) * TILE)
      cornerHeight[i + j * columns] = here.height
      cornerWater[i + j * columns] = here.water
    }
  }
  for (let j = 0; j < td; j++) {
    for (let i = 0; i < tw; i++) {
      const centre = fine.heightAt((tx0 + i) * TILE + TILE / 2, (tz0 + j) * TILE + TILE / 2)
      let low = centre.height
      let high = centre.height
      let water = centre.water
      for (let corner = 0; corner < 4; corner++) {
        const k = i + (corner & 1) + (j + (corner >> 1)) * columns
        low = Math.min(low, cornerHeight[k])
        high = Math.max(high, cornerHeight[k])
        water ||= cornerWater[k]
      }
      if (water || !(high - low <= RELIEF)) holds[i + j * tw] |= HOLDS_NEVER
    }
  }
}

// A monorail line (decoded pack): the strip along its centre line, and every station's land
// (its lots) and footprint.
function markLine(survey, line) {
  const { points } = line
  for (let k = 2; k < points.length; k += 2) {
    markStrip(survey, points[k - 2], points[k - 1], points[k], points[k + 1], RAIL_CLEAR, HOLDS_NEVER, HOLDS_NEVER)
  }
  for (const station of line.stations ?? []) {
    for (const lot of station.lots ?? []) markLot(survey, lot)
    if (points.length >= 4 && Number.isFinite(station.s)) {
      markPolygon(survey, stationFootprint(points, station.s).corners.flat(), HOLDS_NEVER, HOLDS_NEVER)
    }
  }
}

// A rectangle of tiles [tx, tz, w, d] (null for a half without land).
function markLot(survey, lot) {
  if (!Array.isArray(lot) || lot.length !== 4 || !lot.every(Number.isInteger)) return
  const { tx0, tz0, tw, td, holds } = survey
  const [tx, tz, w, d] = lot
  const i1 = Math.min(tw, tx + w - tx0)
  const j1 = Math.min(td, tz + d - tz0)
  for (let j = Math.max(0, tz - tz0); j < j1; j++) {
    for (let i = Math.max(0, tx - tx0); i < i1; i++) holds[i + j * tw] |= HOLDS_NEVER
  }
}

// Calls visit(k, x, z) for each tile of the survey's box that meets the metre box
// [x0, x1] × [z0, z1]: k indexes the tile, (x, z) is its north-west corner in metres.
function forTiles(survey, x0, z0, x1, z1, visit) {
  const { tx0, tz0, tw, td } = survey
  const i0 = Math.max(0, Math.floor(x0 / TILE) - tx0)
  const i1 = Math.min(tw - 1, Math.floor(x1 / TILE) - tx0)
  const j0 = Math.max(0, Math.floor(z0 / TILE) - tz0)
  const j1 = Math.min(td - 1, Math.floor(z1 / TILE) - tz0)
  for (let j = j0; j <= j1; j++) {
    for (let i = i0; i <= i1; i++) visit(i + j * tw, (tx0 + i) * TILE, (tz0 + j) * TILE)
  }
}

// Marks with `bit` the tiles that the strip within `half` metres of the segment a–b touches,
// except those already holding any of `skip`.
function markStrip(survey, ax, az, bx, bz, half, bit, skip) {
  if (!(half > 0)) return
  const { holds } = survey
  forTiles(survey, Math.min(ax, bx) - half, Math.min(az, bz) - half, Math.max(ax, bx) + half, Math.max(az, bz) + half, (k, x, z) => {
    if (!(holds[k] & skip) && segmentBoxDistance(ax, az, bx, bz, x, z, x + TILE, z + TILE) < half) holds[k] |= bit
  })
}

// Marks with `bit` the tiles that a polygon (corners as [x0, z0, x1, z1, ...]) touches, except
// those already holding any of `skip`.
function markPolygon(survey, corners, bit, skip) {
  let x0 = Infinity
  let z0 = Infinity
  let x1 = -Infinity
  let z1 = -Infinity
  for (let k = 0; k < corners.length; k += 2) {
    x0 = Math.min(x0, corners[k])
    x1 = Math.max(x1, corners[k])
    z0 = Math.min(z0, corners[k + 1])
    z1 = Math.max(z1, corners[k + 1])
  }
  const { holds } = survey
  forTiles(survey, x0, z0, x1, z1, (k, x, z) => {
    if (!(holds[k] & skip) && polygonMeetsBox(corners, x, z, x + TILE, z + TILE)) holds[k] |= bit
  })
}

// Distance from (px, pz) to the segment a–b.
function pointSegment(px, pz, ax, az, bx, bz) {
  const dx = bx - ax
  const dz = bz - az
  const length = dx * dx + dz * dz
  let t = length > 0 ? ((px - ax) * dx + (pz - az) * dz) / length : 0
  t = t < 0 ? 0 : t > 1 ? 1 : t
  return Math.hypot(ax + dx * t - px, az + dz * t - pz)
}

// Distance from (px, pz) to the box [x0, x1] × [z0, z1] (0 inside it).
const pointBox = (px, pz, x0, z0, x1, z1) => Math.hypot(Math.max(x0 - px, 0, px - x1), Math.max(z0 - pz, 0, pz - z1))

// Whether the segment a–b meets the box [x0, x1] × [z0, z1] (Liang–Barsky clipping: the part of
// the segment inside each side's half-plane in turn).
function segmentMeetsBox(ax, az, bx, bz, x0, z0, x1, z1) {
  const dx = bx - ax
  const dz = bz - az
  let t0 = 0
  let t1 = 1
  for (let side = 0; side < 4; side++) {
    // p: how fast the segment heads out across this side; q: how far inside it the segment starts.
    const p = side === 0 ? -dx : side === 1 ? dx : side === 2 ? -dz : dz
    const q = side === 0 ? ax - x0 : side === 1 ? x1 - ax : side === 2 ? az - z0 : z1 - az
    if (p === 0) {
      if (q < 0) return false
      continue
    }
    const r = q / p
    if (p < 0) {
      if (r > t1) return false
      if (r > t0) t0 = r
    } else {
      if (r < t0) return false
      if (r < t1) t1 = r
    }
  }
  return true
}

// Distance from the segment a–b to the box: 0 where they meet; otherwise the nearest of the
// segment's ends to the box and the box's corners to the segment (two convex shapes apart are
// nearest at a corner of one of them).
function segmentBoxDistance(ax, az, bx, bz, x0, z0, x1, z1) {
  if (segmentMeetsBox(ax, az, bx, bz, x0, z0, x1, z1)) return 0
  return Math.min(
    pointBox(ax, az, x0, z0, x1, z1),
    pointBox(bx, bz, x0, z0, x1, z1),
    pointSegment(x0, z0, ax, az, bx, bz),
    pointSegment(x1, z0, ax, az, bx, bz),
    pointSegment(x0, z1, ax, az, bx, bz),
    pointSegment(x1, z1, ax, az, bx, bz),
  )
}

// Whether (px, pz) lies inside a polygon (corners as [x0, z0, x1, z1, ...]).
function insidePolygon(corners, px, pz) {
  const count = corners.length / 2
  let hit = false
  for (let i = 0, j = count - 1; i < count; j = i++) {
    const xi = corners[i * 2]
    const zi = corners[i * 2 + 1]
    const xj = corners[j * 2]
    const zj = corners[j * 2 + 1]
    if ((zi > pz) !== (zj > pz) && px < (xj - xi) * (pz - zi) / (zj - zi) + xi) hit = !hit
  }
  return hit
}

// Whether a polygon and the box meet: one of the polygon's sides crosses the box, or else the
// box lies wholly inside the polygon.
function polygonMeetsBox(corners, x0, z0, x1, z1) {
  const count = corners.length / 2
  for (let i = 0, j = count - 1; i < count; j = i++) {
    if (segmentMeetsBox(corners[j * 2], corners[j * 2 + 1], corners[i * 2], corners[i * 2 + 1], x0, z0, x1, z1)) return true
  }
  return insidePolygon(corners, (x0 + x1) / 2, (z0 + z1) / 2)
}
