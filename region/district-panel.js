// The 地区 (district) tab of a region town, the parts that need no page: where the ground under
// a lot is measured and the height a house gets from it, whether a lot crosses land its 丁目's
// survey keeps free, the claim an address asks for on arrival, the address of a 丁目 on the
// region map, the few facts the tab shows of a 丁目, and what the minimap draws round the player.
// Plain functions (no DOM, no three.js), used by region-app.js and tested in Node
// (district-panel.test.mjs). Formats as in district-lookup.js and the server (region-town.mjs).
import { NEVER, ROAD, claimAtTile, maskCode } from './district-lookup.js?v=online-1794980046418'

export const TILE = 8 // metres of a town tile
export const MAX_CLAIMS = 4 // 丁目 one resident may manage (the server's rule)
export const MAX_EDITORS = 16 // people who may build with the manager of one 丁目 (the server's rule)
const GROUND_RANGE = [-30, 400] // heights the server accepts for a house

// The colours a claim is drawn in, on the minimap as in 3D: yours, one you help build, others'.
export const CLAIM_COLORS = { mine: '#1f7a6a', helping: '#2a9d8f', others: '#e8862e' }
export const claimColor = (claim) => (claim.mine ? CLAIM_COLORS.mine : claim.canEdit ? CLAIM_COLORS.helping : CLAIM_COLORS.others)

// Where the ground under a lot of w × d tiles at tile (x, z) is measured: its four corners and
// its centre, in region metres, as [x, z, x, z, …].
export function lotPoints({ x, z, w, d }) {
  const x0 = x * TILE
  const z0 = z * TILE
  const x1 = (x + w) * TILE
  const z1 = (z + d) * TILE
  return [x0, z0, x1, z0, x0, z1, x1, z1, (x0 + x1) / 2, (z0 + z1) / 2]
}

// The height a house stands at: the highest of the heights measured, to 0.05 m; null when one
// is missing or the ground lies outside what the server accepts.
export function lotGround(heights) {
  const values = Array.from(heights ?? [])
  if (!values.length || !values.every(Number.isFinite)) return null
  const ground = Math.round(Math.max(...values) * 20) / 20
  return ground >= GROUND_RANGE[0] && ground <= GROUND_RANGE[1] ? ground : null
}

// The first tile of a lot that the survey of its 丁目 keeps free of houses (a road or street,
// water, the monorail, steep ground) as { tx, tz, code }, or null. `surveys` maps a claim's id to
// its survey { box, mask } (mask as bytes or base64). Tiles in no claim, in a claim without a
// survey, or outside the survey's box are left to the server to judge.
export function blockedTile(index, surveys, { x, z, w, d }) {
  for (let tz = z; tz < z + d; tz++) {
    for (let tx = x; tx < x + w; tx++) {
      const claim = claimAtTile(index, tx, tz)
      const survey = claim ? surveys.get(claim.id) : null
      if (!survey) continue
      const [tx0, tz0, tw, td] = survey.box
      if (tx < tx0 || tz < tz0 || tx >= tx0 + tw || tz >= tz0 + td) continue
      const code = maskCode(survey.bytes ?? survey.mask, survey.box, tx, tz)
      if (code === ROAD || code === NEVER) return { tx, tz, code }
    }
  }
  return null
}

// The claim the address of the game asks for on arrival from the region map
// (?district=ID&claim=built|bare): { valid: true, id, mode, code } where code is the town of
// ?join= (upper case) or null; { valid: false, code } when the address names one but not
// properly; null when it names none.
export function arrivalOf(href) {
  let url
  try {
    url = new URL(href)
  } catch {
    return null
  }
  const district = url.searchParams.get('district')
  const mode = url.searchParams.get('claim')
  if (district === null && mode === null) return null
  const code = url.searchParams.get('join')?.trim().toUpperCase() || null
  if (!/^\d{1,5}$/.test(district ?? '') || (mode !== 'built' && mode !== 'bare')) return { valid: false, id: null, mode: null, code }
  return { valid: true, id: Number(district), mode, code }
}

// The same address without the arrival's claim.
export function withoutArrival(href) {
  const url = new URL(href)
  url.searchParams.delete('district')
  url.searchParams.delete('claim')
  return url.href
}

// The region map (region.html) with a 丁目 selected and the view round it: `district` is
// { id, x, z } with its centre in region metres.
export function mapAddress(seed, district, metresPerPixel = 1.5) {
  const params = new URLSearchParams()
  params.set('seed', String(seed))
  if (Number.isFinite(district.x) && Number.isFinite(district.z)) {
    params.set('x', String(Math.round(district.x)))
    params.set('z', String(Math.round(district.z)))
    params.set('m', metresPerPixel.toFixed(2))
  }
  params.set('d', String(district.id))
  return `./region.html#${params}`
}

const number = new Intl.NumberFormat('ja')

// What the tab says of a 丁目 (a record of the division, see districts.js): the name of its 町,
// its area, its residents and its stations.
export function districtFacts(record, towns = []) {
  return {
    town: towns[record.town]?.name ?? '',
    area: `${((record.area ?? 0) / 1e6).toFixed(2)}km²`,
    residents: `${number.format(Math.round(record.residents ?? 0))}人`,
    stations: Array.isArray(record.stations) ? record.stations : [],
  }
}

// The ground the minimap shows: `metres` across its width, centred on (x, z) in region metres,
// at `scale` canvas pixels to the metre.
export function minimapView({ x, z, width, height, metres }) {
  const scale = width / metres
  const left = x - width / 2 / scale
  const top = z - height / 2 / scale
  return { x, z, width, height, scale, left, top, right: left + width / scale, bottom: top + height / scale }
}

// What the minimap draws of the districts in a view, in canvas pixels:
// - land: [x, y, w, h], the part of the region in view, or null;
// - empty: [x, y, w, h] of the cells that belong to no 丁目;
// - fills: claim colour → [x, y, w, h] of the claim's cells;
// - blocks, towns: [x0, y0, x1, y1, …], the borders between 丁目 of one 町 and between 町;
// - outlines: claim colour → [x0, y0, x1, y1, …], the edges of claims;
// - focus: [x0, y0, x1, y1, …], the edges of 丁目 `focus` (−1 for none).
// `districts` is the overlay of the region worker ({ cell, columns, districtOf, list }) and
// `index` maps a cell to its claim (district-lookup.js claimIndex).
export function minimapLayers(districts, index, view, focus = -1) {
  const { cell, columns, districtOf, list } = districts
  const size = cell * view.scale
  const layers = { land: null, empty: [], fills: new Map(), blocks: [], towns: [], outlines: new Map(), focus: [] }
  const cx0 = Math.max(0, Math.floor(view.left / cell))
  const cz0 = Math.max(0, Math.floor(view.top / cell))
  const cx1 = Math.min(columns - 1, Math.floor(view.right / cell))
  const cz1 = Math.min(columns - 1, Math.floor(view.bottom / cell))
  if (cx0 > cx1 || cz0 > cz1) return layers
  const px = (cx) => (cx * cell - view.left) * view.scale
  const pz = (cz) => (cz * cell - view.top) * view.scale
  const inside = (cx, cz) => cx >= 0 && cz >= 0 && cx < columns && cz < columns
  const idAt = (cx, cz) => (inside(cx, cz) ? districtOf[cx + cz * columns] : -1)
  const claimAt = (cx, cz) => (inside(cx, cz) ? index.get(cx + cz * columns) ?? null : null)
  const add = (map, key, values) => {
    const entry = map.get(key)
    if (entry) entry.push(...values)
    else map.set(key, [...values])
  }
  // The edge between cell a and its neighbour b.
  const edge = (ax, az, bx, bz, segment) => {
    const id = idAt(ax, az)
    const other = idAt(bx, bz)
    if (id >= 0 && other >= 0 && id !== other) (list[id]?.town === list[other]?.town ? layers.blocks : layers.towns).push(...segment)
    const claim = claimAt(ax, az)
    const next = claimAt(bx, bz)
    if (claim !== next) {
      if (claim) add(layers.outlines, claimColor(claim), segment)
      if (next) add(layers.outlines, claimColor(next), segment)
    }
    if (focus >= 0 && (id === focus) !== (other === focus)) layers.focus.push(...segment)
  }
  layers.land = [px(cx0), pz(cz0), (cx1 - cx0 + 1) * size, (cz1 - cz0 + 1) * size]
  for (let cz = cz0; cz <= cz1; cz++) {
    for (let cx = cx0; cx <= cx1; cx++) {
      const x = px(cx)
      const y = pz(cz)
      if (idAt(cx, cz) < 0) layers.empty.push([x, y, size, size])
      const claim = claimAt(cx, cz)
      if (claim) add(layers.fills, claimColor(claim), [[x, y, size, size]])
      // Each cell draws its east and south edges; the first column and row also their west and
      // north ones, which matter where the view reaches the edge of the region.
      edge(cx, cz, cx + 1, cz, [x + size, y, x + size, y + size])
      edge(cx, cz, cx, cz + 1, [x, y + size, x + size, y + size])
      if (cx === cx0) edge(cx, cz, cx - 1, cz, [x, y, x, y + size])
      if (cz === cz0) edge(cx, cz, cx, cz - 1, [x, y, x + size, y])
    }
  }
  return layers
}

// The stretches of a monorail line (decoded as game-pack.js does: points every `step` metres
// along it) that come into the view, as runs of canvas points [x, y, x, y, …], and its stations
// in view as [x, y].
export function routeOnMap(line, view, step) {
  const points = line.points
  const count = Math.floor(points.length / 2)
  const margin = 60 // metres beyond the view, so that a line leaving it is drawn to the edge
  const near = (x0, z0, x1, z1) => Math.max(x0, x1) >= view.left - margin && Math.min(x0, x1) <= view.right + margin
    && Math.max(z0, z1) >= view.top - margin && Math.min(z0, z1) <= view.bottom + margin
  const px = (x) => (x - view.left) * view.scale
  const pz = (z) => (z - view.top) * view.scale
  const runs = []
  let run = null
  for (let k = 0; k + 1 < count; k++) {
    const ax = points[k * 2]
    const az = points[k * 2 + 1]
    const bx = points[k * 2 + 2]
    const bz = points[k * 2 + 3]
    if (!near(ax, az, bx, bz)) {
      run = null
      continue
    }
    if (!run) {
      run = [px(ax), pz(az)]
      runs.push(run)
    }
    run.push(px(bx), pz(bz))
  }
  const stations = []
  if (count >= 2) {
    for (const station of line.stations ?? []) {
      if (!Number.isFinite(station.s)) continue
      const k = Math.max(0, Math.min(count - 2, Math.floor(station.s / step)))
      const t = Math.max(0, Math.min(1, station.s / step - k))
      const x = points[k * 2] + (points[k * 2 + 2] - points[k * 2]) * t
      const z = points[k * 2 + 1] + (points[k * 2 + 3] - points[k * 2 + 1]) * t
      if (near(x, z, x, z)) stations.push([px(x), pz(z)])
    }
  }
  return { runs, stations }
}
