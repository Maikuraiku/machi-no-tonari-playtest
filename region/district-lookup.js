// Looking things up in the districts (丁目) of a region town: which claim a tile or a 40 m cell
// belongs to, the code of a tile in a survey mask, the tile box of a 丁目, and whether a lot lies
// wholly in land the viewer may build on. Shared by the page (region-app.js), the 3D layer
// (region-layer.js) and the worker (survey.js); plain functions without the DOM or three.js.
// The formats are those of the server (region-town.mjs):
// - a claim as every resident is sent it: { id, name, ownerId, editorIds, mode, rev,
//   box: [cx0, cz0, cw, cd] (cells), cells: base64 bitset over the box (bit k = i + j * cw at byte
//   k >> 3, bit k & 7), mine, canEdit };
// - a survey mask: 2 bits per tile over the 丁目's tile box [tx0, tz0, tw, td], tile k = i + j * tw
//   at byte k >> 2, bits (k & 3) * 2; 0 free, 1 road or street, 2 a generated building, 3 never.

export const CELL = 40 // metres of a division cell
export const COLUMNS = 500 // cells along each side of the region
export const TILES_PER_CELL = 5 // 8 m tiles along a cell
export const FREE = 0
export const ROAD = 1
export const BUILDING = 2
export const NEVER = 3

export function bytesOf(text) {
  const binary = atob(text)
  const bytes = new Uint8Array(binary.length)
  for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index)
  return bytes
}

export function base64Of(bytes) {
  let binary = ''
  for (let index = 0; index < bytes.length; index += 0x8000) binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000))
  return btoa(binary)
}

export const cellOfTile = (tx, tz) => Math.floor(tx / TILES_PER_CELL) + Math.floor(tz / TILES_PER_CELL) * COLUMNS
export const cellOfPoint = (x, z) => Math.floor(x / CELL) + Math.floor(z / CELL) * COLUMNS

// The cell indices (cx + cz * 500) of a claim.
export function claimCells(claim) {
  const [cx0, cz0, cw, cd] = claim.box
  const bits = typeof claim.cells === 'string' ? bytesOf(claim.cells) : claim.cells
  const cells = []
  for (let k = 0; k < cw * cd; k++) {
    if (bits[k >> 3] & (1 << (k & 7))) cells.push(cx0 + (k % cw) + (cz0 + Math.floor(k / cw)) * COLUMNS)
  }
  return cells
}

// The bitset (as bytes) of a set of cells over a cell box, the inverse of claimCells.
export function cellBits(cells, box) {
  const [cx0, cz0, cw, cd] = box
  const bits = new Uint8Array(Math.ceil(cw * cd / 8))
  for (const cell of cells) {
    const i = (cell % COLUMNS) - cx0
    const j = Math.floor(cell / COLUMNS) - cz0
    if (i < 0 || j < 0 || i >= cw || j >= cd) continue
    const k = i + j * cw
    bits[k >> 3] |= 1 << (k & 7)
  }
  return bits
}

// Every claimed cell → its claim, for the claims of the town's view. Decoding is remembered per
// claim (id and rev), so calling this on every redraw costs little.
const decoded = new Map()
export function claimIndex(claims = []) {
  const index = new Map()
  for (const claim of claims) {
    const key = `${claim.id}|${claim.rev}|${claim.box.join(',')}`
    let cells = decoded.get(key)
    if (!cells) {
      cells = claimCells(claim)
      if (decoded.size > 256) decoded.clear()
      decoded.set(key, cells)
    }
    for (const cell of cells) index.set(cell, claim)
  }
  return index
}

// The claim a tile lies in, or null.
export const claimAtTile = (index, tx, tz) => index.get(cellOfTile(tx, tz)) ?? null

// The tile box [tx0, tz0, tw, td] of 丁目 `id` in a division grid (Int16Array of ids, −1 none),
// or null when it has no cells.
export function tileBox(districtOf, id, columns = COLUMNS) {
  let cx0 = Infinity
  let cz0 = Infinity
  let cx1 = -Infinity
  let cz1 = -Infinity
  for (let cell = 0; cell < districtOf.length; cell++) {
    if (districtOf[cell] !== id) continue
    const cx = cell % columns
    const cz = Math.floor(cell / columns)
    if (cx < cx0) cx0 = cx
    if (cx > cx1) cx1 = cx
    if (cz < cz0) cz0 = cz
    if (cz > cz1) cz1 = cz
  }
  if (cx0 === Infinity) return null
  return [cx0 * TILES_PER_CELL, cz0 * TILES_PER_CELL, (cx1 - cx0 + 1) * TILES_PER_CELL, (cz1 - cz0 + 1) * TILES_PER_CELL]
}

// The survey code of tile (tx, tz) in a mask (bytes or base64) over `box`; NEVER outside the box.
export function maskCode(mask, box, tx, tz) {
  const [tx0, tz0, tw, td] = box
  const i = tx - tx0
  const j = tz - tz0
  if (i < 0 || j < 0 || i >= tw || j >= td) return NEVER
  const bytes = typeof mask === 'string' ? bytesOf(mask) : mask
  const k = i + j * tw
  return (bytes[k >> 2] >> ((k & 3) * 2)) & 3
}

// Writes a code into a mask (bytes) over `box`.
export function setMaskCode(mask, box, tx, tz, code) {
  const [tx0, tz0, tw] = box
  const k = (tx - tx0) + (tz - tz0) * tw
  const shift = (k & 3) * 2
  mask[k >> 2] = (mask[k >> 2] & ~(3 << shift)) | ((code & 3) << shift)
}

// Whether a lot of w × d tiles at (x, z) lies wholly in claims the viewer may build in:
// { ok, unclaimed (some tile in no claim), denied (some tile in a claim the viewer may not
// change), claims (the claims it touches) }.
export function lotRights(index, x, z, w, d) {
  const claims = new Set()
  let unclaimed = false
  let denied = false
  for (let tz = z; tz < z + d; tz++) {
    for (let tx = x; tx < x + w; tx++) {
      const claim = claimAtTile(index, tx, tz)
      if (!claim) unclaimed = true
      else {
        claims.add(claim)
        if (!claim.canEdit) denied = true
      }
    }
  }
  return { ok: !unclaimed && !denied, unclaimed, denied, claims: [...claims] }
}
