// The ground of a region town where its people have built, and what stands round it, worked out
// as plain numbers for the 3D layer (region-layer.js and region-scene.js):
// - the pads (level terraces) of the plaza, the shop, the cafe and the houses, and how they are
//   laid into a window's grid of ground heights, with retaining walls along their edges;
// - which of the region's generated buildings stay standing: none in a district managed as
//   建物なし (or in unmanaged land of a town made without them), none on or next to a lot of
//   the town, none on the monorail's land;
// - the outlines of the managed districts (丁目) along the outer edges of their cells.
// No three.js and no DOM (tested by region-pads.test.mjs). Everything is in region metres, which
// in a region town are scene metres: tile (tx, tz) covers x in [8tx, 8tx + 8), z in [8tz, 8tz + 8).
import { CELL, COLUMNS, cellOfPoint, claimCells } from '../region/district-lookup.js?v=online-1794980046418'

export const TILE = 8
// The plaza's terrace reaches this far (m) round its tile, on the sides where no other lot is as close.
export const PLAZA_MARGIN = 1
// The ground leans towards a pad over this distance (m) outside it...
export const BLEND = 2
// ...where the two lie within this height (m) of each other. Beyond it the ground keeps its own
// height at the pad's edge, and a retaining wall stands between them.
export const WALL = 0.3
// How close (m) a generated building may come to a lot of the town.
export const LOT_GAP = 1
// The outlines of managed districts: yours, ones you help build, everybody else's.
export const OUTLINE = { mine: '#1f7a6a', shared: '#2a9d8f', other: '#e8862e' }

const SIZE = CELL * COLUMNS
const number = (value) => (typeof value === 'number' && Number.isFinite(value) ? value : null)
const isTile = (spot) => Boolean(spot) && Number.isInteger(spot.x) && Number.isInteger(spot.z)
const isSize = (value) => Number.isInteger(value) && value >= 1
const tileRect = (x, z, w = 1, d = 1) => ({ x0: x * TILE, z0: z * TILE, x1: (x + w) * TILE, z1: (z + d) * TILE })
const overlaps = (a, b) => a.x0 < b.x1 && b.x0 < a.x1 && a.z0 < b.z1 && b.z0 < a.z1

// The base height of a scene lot (as public/scene.js makes them) in a region town: its own
// `y0`, the ground the house was built on, or, for the town's shop and cafe, the ground of their
// tiles as the town was made; 0 when none is known.
export function levelOf(lot, region) {
  const kind = lot?.target?.kind
  const own = kind === 'shop' || kind === 'cafe' ? region?.ground?.[kind] : undefined
  return number(lot?.y0) ?? number(lot?.ground) ?? number(own) ?? 0
}

// The lot of the town's shop or cafe: the scene's own when it was given one, else its tile.
function shopLot(map, lots, kind) {
  const lot = lots.find((entry) => entry?.target?.kind === kind)
  if (lot && isTile(lot)) return lot
  return isTile(map?.[kind]) ? { x: map[kind].x, z: map[kind].z, w: 1, d: 1, target: { id: kind, kind } } : null
}

const sizeOf = (lot) => [isSize(lot.w) ? lot.w : 1, isSize(lot.d) ? lot.d : 1]

// The pads of a region town: [{ kind, id, x0, z0, x1, z1, y }] (metres), the plaza first. The
// plaza covers its tile and PLAZA_MARGIN round it (`pave` is the tile itself); the shop, the cafe
// and every house that has a ground cover their lots. Nothing in an ordinary town.
export function padsOf(map, lots = []) {
  const region = map?.region
  if (!region) return []
  const list = Array.isArray(lots) ? lots : []
  const pads = []
  for (const kind of ['shop', 'cafe']) {
    const lot = shopLot(map, list, kind)
    const y = lot ? number(lot.y0) ?? number(lot.ground) ?? number(region.ground?.[kind]) : null
    if (y === null) continue
    pads.push({ kind, id: kind, ...tileRect(lot.x, lot.z, ...sizeOf(lot)), y })
  }
  for (const lot of list) {
    if (lot?.target?.kind !== 'house' || !isTile(lot) || !isSize(lot.w) || !isSize(lot.d)) continue
    const y = number(lot.y0) ?? number(lot.ground)
    if (y === null) continue
    pads.push({ kind: 'house', id: lot.target.id ?? lot.id ?? null, ...tileRect(lot.x, lot.z, lot.w, lot.d), y })
  }
  const y = number(region.ground?.plaza)
  if (isTile(map.plaza) && y !== null) {
    const tile = tileRect(map.plaza.x, map.plaza.z)
    const m = PLAZA_MARGIN
    // A side reaches out only where no other pad lies within the margin (corners included).
    const free = (strip) => !pads.some((pad) => overlaps(strip, pad))
    pads.unshift({
      kind: 'plaza', id: 'plaza', y, pave: tile,
      x0: free({ x0: tile.x0 - m, z0: tile.z0 - m, x1: tile.x0, z1: tile.z1 + m }) ? tile.x0 - m : tile.x0,
      x1: free({ x0: tile.x1, z0: tile.z0 - m, x1: tile.x1 + m, z1: tile.z1 + m }) ? tile.x1 + m : tile.x1,
      z0: free({ x0: tile.x0 - m, z0: tile.z0 - m, x1: tile.x1 + m, z1: tile.z0 }) ? tile.z0 - m : tile.z0,
      z1: free({ x0: tile.x0 - m, z0: tile.z1, x1: tile.x1 + m, z1: tile.z1 + m }) ? tile.z1 + m : tile.z1,
    })
  }
  return pads
}

// The lots of a region town as rectangles (metres), for keeping the generated buildings off
// them: the plaza, the shop and the cafe tiles, and every house lot.
export function lotRects(map, lots = []) {
  if (!map?.region) return []
  const list = Array.isArray(lots) ? lots : []
  const rects = []
  if (isTile(map.plaza)) rects.push(tileRect(map.plaza.x, map.plaza.z))
  for (const kind of ['shop', 'cafe']) {
    const lot = shopLot(map, list, kind)
    if (lot) rects.push(tileRect(lot.x, lot.z, ...sizeOf(lot)))
  }
  for (const lot of list) {
    if (lot?.target?.kind === 'house' && isTile(lot) && isSize(lot.w) && isSize(lot.d)) rects.push(tileRect(lot.x, lot.z, lot.w, lot.d))
  }
  return rects
}

// Lays pads into a window's grid of ground heights (`grid` as public/region/window.js cuts it:
// box, step, width, depth, heights at the grid's points, row by row). A pad takes the cells of
// the grid that lie wholly inside it and is drawn level over them. The points along its edge
// take its height where the ground there is within `wall` of it, and keep the ground's own
// height otherwise: a retaining wall then stands between the pad and the ground. Round the pad
// the ground leans towards it over `blend` metres, again only where it lies within `wall`.
// Returns { heights (a new array; the grid's own is left as it was), cells (per cell of the grid,
// 1 + the index of the pad on it, 0 for none; null when no pad reaches the grid), pads (those
// that do, with the grid lines i0..i1, j0..j1 they cover), walls }. Each wall runs along one
// side of one cell, from (ax, az) to (bx, bz), with (nx, nz) pointing away from its pad, and
// rises from `low` to `high` (heights at its two ends); a wall between two pads belongs to the
// higher one.
export function padGround(grid, pads = [], { blend = BLEND, wall = WALL } = {}) {
  const { box, step, width, depth } = grid
  const raw = grid.heights
  const across = width - 1
  const down = depth - 1
  const placed = []
  for (const pad of pads ?? []) {
    if (!pad || number(pad.y) === null) continue
    // (A little leeway for rounding: edges on the grid's lines stay on them.)
    const i0 = Math.max(0, Math.ceil((pad.x0 - box.x0) / step - 1e-6))
    const i1 = Math.min(across, Math.floor((pad.x1 - box.x0) / step + 1e-6))
    const j0 = Math.max(0, Math.ceil((pad.z0 - box.z0) / step - 1e-6))
    const j1 = Math.min(down, Math.floor((pad.z1 - box.z0) / step + 1e-6))
    if (i1 > i0 && j1 > j0) placed.push({ ...pad, i0, i1, j0, j1 })
  }
  if (!placed.length) return { heights: raw, cells: null, pads: [], walls: [] }
  const cells = new Int16Array(across * down)
  placed.forEach((pad, k) => {
    for (let j = pad.j0; j < pad.j1; j++) cells.fill(k + 1, pad.i0 + j * across, pad.i1 + j * across)
  })
  const owner = (i, j) => (i < 0 || j < 0 || i >= across || j >= down ? -1 : cells[i + j * across])
  const heights = Float32Array.from(raw)
  const settled = new Uint8Array(width * depth)

  // The points on the pads and along their edges.
  for (const pad of placed) {
    for (let j = pad.j0; j <= pad.j1; j++) {
      for (let i = pad.i0; i <= pad.i1; i++) {
        const at = i + j * width
        if (settled[at]) continue
        settled[at] = 1
        let open = false
        let level = null
        for (const [ci, cj] of [[i - 1, j - 1], [i, j - 1], [i - 1, j], [i, j]]) {
          const k = owner(ci, cj)
          if (k === 0) open = true
          else if (k > 0) {
            const y = placed[k - 1].y
            if (level === null || Math.abs(y - raw[at]) < Math.abs(level - raw[at])) level = y
          }
        }
        if (level === null) continue
        heights[at] = !open || Math.abs(level - raw[at]) <= wall ? level : raw[at]
      }
    }
  }

  // Round them, the ground leans towards the nearest pad it lies close to in height.
  if (blend > 0) {
    const lean = new Map()
    for (const pad of placed) {
      const ia = Math.max(0, Math.floor((pad.x0 - blend - box.x0) / step))
      const ib = Math.min(across, Math.ceil((pad.x1 + blend - box.x0) / step))
      const ja = Math.max(0, Math.floor((pad.z0 - blend - box.z0) / step))
      const jb = Math.min(down, Math.ceil((pad.z1 + blend - box.z0) / step))
      for (let j = ja; j <= jb; j++) {
        for (let i = ia; i <= ib; i++) {
          const at = i + j * width
          if (settled[at] || Math.abs(pad.y - raw[at]) > wall) continue
          const x = box.x0 + i * step
          const z = box.z0 + j * step
          const weight = 1 - Math.hypot(Math.max(pad.x0 - x, 0, x - pad.x1), Math.max(pad.z0 - z, 0, z - pad.z1)) / blend
          if (weight > 0 && !(lean.get(at)?.weight >= weight)) lean.set(at, { weight, y: pad.y })
        }
      }
    }
    for (const [at, { weight, y }] of lean) heights[at] = raw[at] + (y - raw[at]) * weight
  }

  // The walls: wherever a pad meets ground, or a lower pad, at another height.
  const walls = []
  // Per side of a cell: the neighbouring cell, and the ends of the side (offsets from the cell).
  const SIDES = [[-1, 0, 0, 0, 0, 1], [1, 0, 1, 0, 1, 1], [0, -1, 0, 0, 1, 0], [0, 1, 0, 1, 1, 1]]
  placed.forEach((pad, k) => {
    for (let j = pad.j0; j < pad.j1; j++) {
      for (let i = pad.i0; i < pad.i1; i++) {
        if (cells[i + j * across] !== k + 1) continue
        for (const [di, dj, ai, aj, bi, bj] of SIDES) {
          const other = owner(i + di, j + dj)
          // (Nothing is known beyond the window's edge.)
          if (other === k + 1 || other < 0) continue
          let low
          let high
          if (other > 0) {
            const below = placed[other - 1].y
            if (pad.y - below <= 1e-3) continue
            low = [below, below]
            high = [pad.y, pad.y]
          } else {
            const ha = heights[(i + ai) + (j + aj) * width]
            const hb = heights[(i + bi) + (j + bj) * width]
            if (Math.abs(ha - pad.y) <= 1e-3 && Math.abs(hb - pad.y) <= 1e-3) continue
            low = [Math.min(pad.y, ha), Math.min(pad.y, hb)]
            high = [Math.max(pad.y, ha), Math.max(pad.y, hb)]
          }
          walls.push({
            ax: box.x0 + (i + ai) * step, az: box.z0 + (j + aj) * step,
            bx: box.x0 + (i + bi) * step, bz: box.z0 + (j + bj) * step,
            nx: di, nz: dj, low, high, pad: k,
          })
        }
      }
    }
  })
  return { heights, cells, pads: placed, walls }
}

// ---- Which generated buildings stand -------------------------------------------------

const pointToSegment = (px, pz, ax, az, bx, bz) => {
  const dx = bx - ax
  const dz = bz - az
  const length = dx * dx + dz * dz
  const t = length > 0 ? Math.min(1, Math.max(0, ((px - ax) * dx + (pz - az) * dz) / length)) : 0
  return Math.hypot(ax + dx * t - px, az + dz * t - pz)
}
const turn = (ax, az, bx, bz, cx, cz) => (bx - ax) * (cz - az) - (bz - az) * (cx - ax)
// The distance between two segments in the plane (0 where they cross).
function segmentGap(ax, az, bx, bz, cx, cz, dx, dz) {
  const d1 = turn(cx, cz, dx, dz, ax, az)
  const d2 = turn(cx, cz, dx, dz, bx, bz)
  const d3 = turn(ax, az, bx, bz, cx, cz)
  const d4 = turn(ax, az, bx, bz, dx, dz)
  if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) return 0
  return Math.min(pointToSegment(ax, az, cx, cz, dx, dz), pointToSegment(bx, bz, cx, cz, dx, dz),
    pointToSegment(cx, cz, ax, az, bx, bz), pointToSegment(dx, dz, ax, az, bx, bz))
}
// Whether a point lies in a convex quadrilateral (corners in either order round it).
function insideQuad(c, x, z) {
  let positive = false
  let negative = false
  for (let k = 0; k < 4; k++) {
    const n = (k + 1) % 4
    const side = turn(c[k * 2], c[k * 2 + 1], c[n * 2], c[n * 2 + 1], x, z)
    if (side > 0) positive = true
    else if (side < 0) negative = true
  }
  return !(positive && negative)
}

// Whether a footprint (four corners [x0, z0, …, x3, z3]) comes closer than `gap` to a rectangle.
export function footprintNear(c, rect, gap = LOT_GAP) {
  let x0 = Infinity
  let z0 = Infinity
  let x1 = -Infinity
  let z1 = -Infinity
  for (let k = 0; k < 4; k++) {
    x0 = Math.min(x0, c[k * 2])
    x1 = Math.max(x1, c[k * 2])
    z0 = Math.min(z0, c[k * 2 + 1])
    z1 = Math.max(z1, c[k * 2 + 1])
  }
  if (x0 >= rect.x1 + gap || x1 <= rect.x0 - gap || z0 >= rect.z1 + gap || z1 <= rect.z0 - gap) return false
  for (let k = 0; k < 4; k++) {
    if (c[k * 2] >= rect.x0 && c[k * 2] <= rect.x1 && c[k * 2 + 1] >= rect.z0 && c[k * 2 + 1] <= rect.z1) return true
  }
  const ring = [rect.x0, rect.z0, rect.x1, rect.z0, rect.x1, rect.z1, rect.x0, rect.z1]
  for (let k = 0; k < 4; k++) if (insideQuad(c, ring[k * 2], ring[k * 2 + 1])) return true
  for (let k = 0; k < 4; k++) {
    const n = (k + 1) % 4
    for (let m = 0; m < 4; m++) {
      const o = (m + 1) % 4
      if (segmentGap(c[k * 2], c[k * 2 + 1], c[n * 2], c[n * 2 + 1], ring[m * 2], ring[m * 2 + 1], ring[o * 2], ring[o * 2 + 1]) < gap) return true
    }
  }
  return false
}

// The test of which generated buildings ({ corners, … }) stand in a region town. A building is
// left out when the cell (40 m) of its middle lies in a claim managed as 'bare', or the town was
// made without buildings (`built` false) and the cell is not in a claim managed as 'built'; when
// it comes closer than `gap` to one of `rects` (the town's lots); and where `offLine` (the
// monorail's land, if given) says no. `claims`: cell → claim (district-lookup.js claimIndex).
export function buildingFilter({ claims = new Map(), built = true, rects = [], gap = LOT_GAP, offLine = null } = {}) {
  return (building) => {
    const c = building.corners
    const cx = (c[0] + c[2] + c[4] + c[6]) / 4
    const cz = (c[1] + c[3] + c[5] + c[7]) / 4
    const claim = cx >= 0 && cz >= 0 && cx < SIZE && cz < SIZE ? claims.get(cellOfPoint(cx, cz)) : undefined
    if (claim?.mode === 'bare') return false
    if (!built && claim?.mode !== 'built') return false
    for (const rect of rects) if (footprintNear(c, rect, gap)) return false
    return offLine ? Boolean(offLine(building)) : true
  }
}

// ---- Outlines of managed districts -----------------------------------------------------

const outlines = new Map()

// The outer edges of a claim's cells (each between a cell of the claim and one outside it),
// joined into runs along the grid: a Float32Array [ax, az, bx, bz, …] in metres. Every run is
// turned so that the district lies on the side (−dz, dx) of its direction (dx, dz), where
// region-scene.js draws a band inside the district. Remembered per box and cells.
export function claimOutline(claim) {
  const key = `${claim.box.join(',')}|${typeof claim.cells === 'string' ? claim.cells : Array.from(claim.cells ?? []).join(',')}`
  const known = outlines.get(key)
  if (known) return known
  const cells = new Set(claimCells(claim))
  const [cx0, cz0, cw, cd] = claim.box
  const has = (cx, cz) => cx >= 0 && cz >= 0 && cx < COLUMNS && cz < COLUMNS && cells.has(cx + cz * COLUMNS)
  const list = []
  // Along x: the north (side −1) and south (side +1) edges of each row of cells.
  for (let cz = cz0; cz < cz0 + cd; cz++) {
    for (const side of [-1, 1]) {
      let start = null
      for (let cx = cx0; cx <= cx0 + cw; cx++) {
        const edge = cx < cx0 + cw && has(cx, cz) && !has(cx, cz + side)
        if (edge && start === null) start = cx
        if (edge || start === null) continue
        const z = (side < 0 ? cz : cz + 1) * CELL
        if (side < 0) list.push(start * CELL, z, cx * CELL, z)
        else list.push(cx * CELL, z, start * CELL, z)
        start = null
      }
    }
  }
  // Along z: the west (side −1) and east (side +1) edges of each column.
  for (let cx = cx0; cx < cx0 + cw; cx++) {
    for (const side of [-1, 1]) {
      let start = null
      for (let cz = cz0; cz <= cz0 + cd; cz++) {
        const edge = cz < cz0 + cd && has(cx, cz) && !has(cx + side, cz)
        if (edge && start === null) start = cz
        if (edge || start === null) continue
        const x = (side < 0 ? cx : cx + 1) * CELL
        if (side < 0) list.push(x, cz * CELL, x, start * CELL)
        else list.push(x, start * CELL, x, cz * CELL)
        start = null
      }
    }
  }
  const segments = Float32Array.from(list)
  if (outlines.size > 256) outlines.clear()
  outlines.set(key, segments)
  return segments
}

// The colour of a claim's outline for the viewer.
export const outlineColour = (claim) => (claim.mine ? OUTLINE.mine : claim.canEdit ? OUTLINE.shared : OUTLINE.other)

// A segment along x or z cut to a box, keeping its direction; null when nothing of it is left.
function clipSegment(ax, az, bx, bz, x0, z0, x1, z1) {
  if (az === bz) {
    if (az < z0 || az > z1) return null
    const low = Math.max(Math.min(ax, bx), x0)
    const high = Math.min(Math.max(ax, bx), x1)
    if (high <= low) return null
    return ax <= bx ? [low, az, high, bz] : [high, az, low, bz]
  }
  if (ax === bx) {
    if (ax < x0 || ax > x1) return null
    const low = Math.max(Math.min(az, bz), z0)
    const high = Math.min(Math.max(az, bz), z1)
    if (high <= low) return null
    return az <= bz ? [ax, low, bx, high] : [ax, high, bx, low]
  }
  return [ax, az, bx, bz]
}

// The outlines of the claims that reach a box (metres, `margin` round it), cut to it and gathered
// by colour: [{ colour, segments }]. A claim whose cells cannot be read is left out.
export function outlinesIn(claims = [], box, margin = 0) {
  const x0 = box.x0 - margin
  const z0 = box.z0 - margin
  const x1 = box.x1 + margin
  const z1 = box.z1 + margin
  const groups = new Map()
  for (const claim of Array.isArray(claims) ? claims : []) {
    if (!Array.isArray(claim?.box) || claim.box.length !== 4 || claim.cells === undefined) continue
    const [cx0, cz0, cw, cd] = claim.box
    if (cx0 * CELL > x1 || (cx0 + cw) * CELL < x0 || cz0 * CELL > z1 || (cz0 + cd) * CELL < z0) continue
    let segments
    try {
      segments = claimOutline(claim)
    } catch {
      continue
    }
    const colour = outlineColour(claim)
    if (!groups.has(colour)) groups.set(colour, [])
    const into = groups.get(colour)
    for (let k = 0; k + 3 < segments.length; k += 4) {
      const piece = clipSegment(segments[k], segments[k + 1], segments[k + 2], segments[k + 3], x0, z0, x1, z1)
      if (piece) into.push(...piece)
    }
  }
  return [...groups].filter(([, list]) => list.length).map(([colour, list]) => ({ colour, segments: Float32Array.from(list) }))
}

// What of the claims shows in 3D (who manages them, how, and whether the viewer may build),
// as a string that changes when any of it does.
export function claimsKey(claims = []) {
  return (Array.isArray(claims) ? claims : [])
    .map((claim) => `${claim?.id}:${claim?.rev}:${claim?.mode}:${claim?.ownerId}:${claim?.mine ? 1 : 0}${claim?.canEdit ? 1 : 0}:${claim?.box?.join(',')}`)
    .join('|')
}
