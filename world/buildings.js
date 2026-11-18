// Draws a building from its design: walls with their finishes on both faces, doors and windows,
// floors, ceilings, stairs, furniture and the roof. Outside and inside are one model at real
// scale, so a resident walks in through the door. To keep a whole town light, the inside of a
// storey is only built when someone is near enough to see it.
import * as THREE from 'three'
import { CUT, ITEMS, OPENINGS, boundsOf, colliders, doorKey, floorHeight, frontDoors, heightOf, inRoom, pointIn, stairLayout, storeyOf, storeyShape, upSteps, yardHeight } from './design.js?v=online-1794980046418'
import { windowGlass } from './glass.js?v=online-1794980046418'
import { drawItem } from './items.js?v=online-1794980046418'
import { Batch, Shade, disposeGroup, finishMaterial, frameMaterial, material, textTexture } from './kit.js?v=online-1794980046418'
import { buildLift } from './lifts.js?v=online-1794980046418'
import { drawDecor, drawStair, drawSteps, drawWell, drawYard } from './parts.js?v=online-1794980046418'
import { designOf } from './plans.js?v=online-1794980046418'

export { ROOM_COLORS, ROOM_LABELS, STYLE_FLOORS, STYLE_LABELS } from './design.js?v=online-1794980046418'

export const SHOP_HOUSES = {
  // A shop on one tile: the shop floor behind a glass front, a store room, a toilet and a kitchenette at the back.
  shop: { id: 'shop', kind: 'shop', style: 'shop', w: 1, d: 1, sign: 'ひだまり洋品店', floors: [`EEEETTKKEEEETTKK${'MMMMMMMM'.repeat(5)}........`] },
  cafe: { id: 'cafe', kind: 'cafe', style: 'shop', w: 1, d: 1, sign: 'こもれび喫茶', floors: [`EEEETTKKEEEETTKK${'MMMMMMMM'.repeat(5)}........`] },
}

const UP = new THREE.Vector3(0, 1, 0)
const DOWN = new THREE.Vector3(0, -1, 0)
const at = ([x, z], y) => new THREE.Vector3(x, y, z)
const section = () => material('#3a4046', '#ffffff', { roughness: 0.9 })
const footing = () => material('concrete', '#b9b6ae')
const steel = () => material('#5b6266', '#ffffff', { roughness: 0.5, metalness: 0.6 })
const drip = () => material('#4a4f52', '#ffffff', { roughness: 0.5, metalness: 0.45 })
// How far a ceiling hangs below the floor above: the storey less the clear height of its rooms.
const dropOf = (design, storey) => Math.max(0.12, storey.h - (design.ceiling ?? storey.h - 0.22))

// A stretch of wall as a solid between two heights. `narrow` thins it towards its middle line.
function prism(batch, paint, piece, y0, y1, { narrow = 1, top = true, bottom = false } = {}) {
  const lean = (point, other) => [(point[0] + other[0]) / 2 + (point[0] - other[0]) / 2 * narrow, (point[1] + other[1]) / 2 + (point[1] - other[1]) / 2 * narrow]
  const l0 = lean(piece.l[0], piece.r[0])
  const l1 = lean(piece.l[1], piece.r[1])
  const r0 = lean(piece.r[0], piece.l[0])
  const r1 = lean(piece.r[1], piece.l[1])
  batch.quad(paint, at(l0, y0), at(l1, y0), at(l1, y1), at(l0, y1), new THREE.Vector3(piece.d[1], 0, -piece.d[0]))
  batch.quad(paint, at(r0, y0), at(r1, y0), at(r1, y1), at(r0, y1), new THREE.Vector3(-piece.d[1], 0, piece.d[0]))
  // (Seen from below, as the edge of a balcony is, it needs an underside too.)
  if (bottom) {
    if (narrow === 1) batch.shape(paint, piece.poly, [], y0, false)
    else batch.quad(paint, at(l0, y0), at(l1, y0), at(r1, y0), at(r0, y0), DOWN)
  }
  if (!top) return
  if (narrow === 1) batch.shape(paint, piece.poly, [], y1, true)
  else batch.quad(paint, at(l0, y1), at(l1, y1), at(r1, y1), at(r0, y1), UP)
}

// One face of a stretch of wall, with holes left for doors and windows. `bands` are the finishes
// from the bottom up; `low` takes what lies below the cutting height and `high` the rest.
function wallFace(piece, side, holes, bands, wallTop, base, low, high, split) {
  const [start] = piece[side]
  const [from, to] = piece.span[side]
  const facing = side === 'l' ? new THREE.Vector3(piece.d[1], 0, -piece.d[0]) : new THREE.Vector3(-piece.d[1], 0, piece.d[0])
  const point = (along, y) => new THREE.Vector3(start[0] + piece.d[0] * (along - from), base + y, start[1] + piece.d[1] * (along - from))
  const panel = (x0, x1, y0, y1) => {
    if (x1 - x0 < 1e-4) return
    for (const [bottom, top, paint] of bands) {
      const lo = Math.max(y0, bottom)
      const hi = Math.min(y1, top)
      if (hi - lo < 1e-4) continue
      const parts = !split ? [[lo, hi, low]] : lo < CUT && hi > CUT ? [[lo, CUT, low], [CUT, hi, high]] : [[lo, hi, lo >= CUT ? high : low]]
      for (const [c0, c1, batch] of parts) batch?.quad(paint, point(x0, c0), point(x1, c0), point(x1, c1), point(x0, c1), facing)
    }
  }
  const floor = bands[0][0]
  let x = Math.min(from, to)
  const end = Math.max(from, to)
  for (const hole of holes) {
    const x0 = Math.max(x, hole.at - hole.ww / 2)
    const x1 = Math.min(end, hole.at + hole.ww / 2)
    if (x1 <= x0) continue
    panel(x, x0, floor, wallTop)
    panel(x0, x1, floor, hole.s)
    panel(x0, x1, Math.min(wallTop, hole.s + hole.hh), wallTop)
    x = x1
  }
  panel(x, end, floor, wallTop)
}

function drawRail(batch, panes, piece, wall, base, height, skirt) {
  const kind = wall.rail
  const body = finishMaterial(wall.l)
  // The edge of the balcony slab, or the footing of a terrace, below the rail.
  prism(batch, body, piece, base - skirt, base + 0.001, { bottom: true })
  const rail = steel()
  const length = Math.hypot(piece.r[1][0] - piece.r[0][0], piece.r[1][1] - piece.r[0][1])
  const middle = (along) => {
    const from = [(piece.l[0][0] + piece.r[0][0]) / 2, (piece.l[0][1] + piece.r[0][1]) / 2]
    return [from[0] + piece.d[0] * along, from[1] + piece.d[1] * along]
  }
  const turn = Math.atan2(-piece.d[1], piece.d[0])
  if (kind === 'panel') {
    prism(batch, material('#e9e2cd', '#ffffff', { roughness: 0.8 }), piece, base + 0.1, base + 0.66, { narrow: 0.5 })
    prism(batch, rail, piece, base + 0.69, base + 0.72, { narrow: 0.5 })
    prism(batch, rail, piece, base + height - 0.06, base + height)
    for (let along = 0.04; along < length; along += 1.56) {
      const [x, z] = middle(Math.min(along, length - 0.04))
      batch.box(rail, x, base + height / 2, z, 0.04, height, 0.04, turn)
    }
  } else if (kind === 'glass') {
    prism(panes, windowGlass('rail'), piece, base + 0.12, base + height - 0.08, { narrow: 0.25, top: false })
    prism(batch, rail, piece, base + height - 0.06, base + height)
    prism(batch, rail, piece, base, base + 0.08, { narrow: 0.6 })
    for (let along = 0.04; along < length + 0.8; along += 1.56) {
      const [x, z] = middle(Math.min(along, length - 0.04))
      batch.box(rail, x, base + height / 2, z, 0.04, height, 0.04, turn)
    }
  } else {
    prism(batch, rail, piece, base + height - 0.05, base + height)
    prism(batch, rail, piece, base + 0.06, base + 0.1, { narrow: 0.7 })
    for (let along = 0.08; along < length - 0.02; along += 0.13) {
      const [x, z] = middle(along)
      batch.box(rail, x, base + height / 2, z, 0.018, height - 0.12, 0.018, turn)
    }
  }
}

const LEAVES = {
  'door-entrance': { swing: 1, look: 'slit' }, 'door-wood': { swing: 1, look: 'panel' }, 'door-white': { swing: 1, look: 'panel' },
  'door-steel': { swing: 1, look: 'flat' }, 'door-glass': { swing: 1, look: 'glass' }, 'door-double': { swing: 2, look: 'panel' },
  'door-slide': { slide: 1, look: 'panel' }, 'door-fusuma': { slide: 2, look: 'fusuma' }, 'door-shoji': { slide: 2, look: 'shoji' },
  'door-auto': { slide: 2, apart: true, look: 'glass' }, 'door-terrace': { slide: 2, look: 'glass' },
  // 親子ドア: the leaf people use, and a narrow one beside it that is only opened for furniture.
  'door-oyako': { swing: 1, look: 'slit', small: 0.27 }, 'door-flat': { swing: 1, look: 'flat' }, 'door-fold': { swing: 1, look: 'glass' },
  'door-key': { swing: 1, look: 'key' },
  'door-closet': { swing: 2, look: 'panel' }, 'lift-door': { slide: 2, apart: true, look: 'plain', lift: true },
  // The doors along the edge of a station platform, which open with those of the train.
  'door-platform': { slide: 2, apart: true, look: 'glass', platform: true },
}

// The glass of a pane between a room and the open air (`outward` is +1 or -1, the way its front
// looks) or between two rooms (0). Glass on the outside of a building starts as glass seen from
// afar; the building swaps it for clear glass when someone comes near.
const paneGlass = (outward) => windowGlass(outward ? 'far' : 'inner')
const frosted = () => material('#d3dcda', '#ffffff', { roughness: 0.28 })

// A pane in the plane z, from x0 to x1 and y0 to y1, whose front looks the way `outward` points.
function addPane(panes, outward, x0, x1, y0, y1, z) {
  const corners = [new THREE.Vector3(x0, y0, z), new THREE.Vector3(x1, y0, z), new THREE.Vector3(x1, y1, z), new THREE.Vector3(x0, y1, z)]
  panes.face(paneGlass(outward), outward < 0 ? corners.reverse() : corners)
}

// How many sashes slide past each other in a window of each kind.
const SLIDING = { 'win-slide': 2, 'win-full': 2, 'win-lattice': 2, 'win-hood': 2, 'win-wide': 4 }
// Windows with one sash in the frame, hung to open outwards.
const CASEMENT = new Set(['win-small', 'win-high', 'win-tall'])

// A window, as houses in Japan have them: an aluminium frame set towards the outside of the
// wall and standing a little proud of it, sashes that slide past each other on two tracks, a
// casing that lines the wall on the room side with a board for a sill, and a drip under the
// frame outside. Between two rooms the frame simply stands in the middle of the wall.
function drawWindow(b, panes, entry, thick, outward, hoodPaint, frame) {
  const kind = entry.k
  const w = entry.ww
  const h = entry.hh
  const s = entry.s
  const o = outward
  const middle = s + h / 2
  const slim = kind === 'win-curtain' || kind === 'win-shop' || kind === 'win-ribbon'
  const bar = slim ? 0.035 : 0.045
  const trim = kind === 'win-shutter' ? frameMaterial('white') : frame
  // A frame of four members round a rectangle, `t` thick (`foot` at the bottom), `depth` through the wall.
  const ring = (paint, x0, x1, y0, y1, t, z, depth, foot = t) => {
    b.box(paint, x0 + t / 2, (y0 + y1) / 2, z, t, y1 - y0, depth)
    b.box(paint, x1 - t / 2, (y0 + y1) / 2, z, t, y1 - y0, depth)
    b.box(paint, (x0 + x1) / 2, y1 - t / 2, z, x1 - x0 - t * 2, t, depth)
    b.box(paint, (x0 + x1) / 2, y0 + foot / 2, z, x1 - x0 - t * 2, foot, depth)
  }
  // Through the wall, the frame reaches from 2 cm outside its outer face to 5 cm inside it.
  const front = o ? o * (thick / 2 + 0.02) : thick / 2 + 0.005
  const back = o ? o * (thick / 2 - 0.05) : -thick / 2 - 0.005
  ring(trim, -w / 2, w / 2, s, s + h, bar, (front + back) / 2, Math.abs(front - back))
  if (o) {
    // The casing on the room side, with its sill board, and the drip outside.
    const wooden = entry.c === 'wood' || entry.c === 'wood-dark'
    const liner = wooden ? frame : material('#f1eee6', '#ffffff', { roughness: 0.8 })
    const room = -o * (thick / 2 + 0.008)
    if (Math.abs(room - back) > 0.02) ring(liner, -w / 2, w / 2, s, s + h, 0.02, (back + room) / 2, Math.abs(room - back))
    b.box(liner, 0, s + 0.011, -o * (thick / 2 + 0.02), w + 0.05, 0.022, 0.06)
    b.box(trim, 0, s - 0.008, o * (thick / 2 + 0.04), w + 0.03, 0.016, 0.08)
  }

  // The clear opening inside the frame, and the planes its sashes run in.
  const x0 = -w / 2 + bar
  const x1 = w / 2 - bar
  const y0 = s + bar
  const y1 = s + h - bar
  const track = (index) => (o ? o * (thick / 2 - 0.004 - index * 0.028) : index ? -0.014 : 0.014)
  const sash = (from, to, z, t = 0.035, foot = 0.05) => {
    ring(trim, from, to, y0, y1, t, z, 0.026, foot)
    addPane(panes, o, from + t, to - t, y0 + foot, y1 - t, z)
  }

  const count = SLIDING[kind]
  if (kind === 'win-round') {
    b.box(trim, 0, middle, track(0), x1 - x0, y1 - y0, 0.03)
    const radius = Math.min(x1 - x0, y1 - y0) / 2 - 0.05
    for (const [side, glassMaterial] of [[o || 1, paneGlass(o)], [-(o || 1), windowGlass('inner')]]) {
      panes.face(glassMaterial, Array.from({ length: 18 }, (_, index) => {
        const angle = index / 18 * Math.PI * 2 * side
        return new THREE.Vector3(Math.cos(angle) * radius, middle + Math.sin(angle) * radius, track(0) + side * 0.018)
      }))
    }
  } else if (kind === 'win-block') {
    // Glass blocks: light comes through them, but nobody sees through.
    b.box(material('#dfe9e6', '#ffffff', { roughness: 0.25 }), 0, middle, 0, x1 - x0, y1 - y0, 0.08)
    const joint = material('#b9c2bf', '#ffffff', { roughness: 0.8 })
    for (let x = x0 + 0.19; x < x1 - 0.05; x += 0.19) b.box(joint, x, middle, 0, 0.012, y1 - y0, 0.085)
    for (let y = y0 + 0.19; y < y1 - 0.05; y += 0.19) b.box(joint, 0, y, 0, x1 - x0, 0.012, 0.085)
  } else if (count === 2) {
    // Seen from the room, the right-hand sash runs on the inner track.
    const leftInner = o >= 0
    sash(x0, 0.0175, track(leftInner ? 1 : 0))
    sash(-0.0175, x1, track(leftInner ? 0 : 1))
  } else if (count === 4) {
    const quarter = (x1 - x0) / 4
    sash(x0, -quarter + 0.0175, track(0))
    sash(-quarter - 0.0175, 0, track(1))
    sash(0, quarter + 0.0175, track(1))
    sash(quarter - 0.0175, x1, track(0))
  } else if (kind === 'win-shutter') {
    // Two casements that meet in the middle, with a bar across them.
    sash(x0, 0, track(0), 0.03, 0.03)
    sash(0, x1, track(0), 0.03, 0.03)
    b.box(trim, 0, middle, track(0), x1 - x0, 0.03, 0.03)
  } else if (CASEMENT.has(kind)) {
    sash(x0, x1, track(0), 0.03, 0.03)
  } else {
    addPane(panes, o, x0, x1, y0, y1, track(0))
    if (kind === 'win-steel') {
      b.box(trim, 0, middle, track(0), 0.03, y1 - y0, 0.04)
      b.box(trim, 0, s + h * 0.72, track(0), x1 - x0, 0.03, 0.04)
    }
  }
  // The catch where sliding sashes meet (クレセント錠), on the room side.
  if (count && o) b.box(steel(), 0, middle, o * (thick / 2 - 0.056), 0.022, 0.06, 0.018)

  if (kind === 'win-shutter' && o) {
    for (const x of [-w / 2 - 0.15, w / 2 + 0.15]) {
      b.box(frame, x, middle, o * (thick / 2 + 0.03), 0.27, h, 0.04)
      for (let slat = 1; slat < 8; slat++) b.box(frame, x, s + h * slat / 8, o * (thick / 2 + 0.055), 0.21, 0.02, 0.012)
    }
  }
  if (kind === 'win-lattice' && o) {
    const z = o * (thick / 2 + 0.05)
    for (let slat = 1; slat < 8; slat++) b.box(frame, -w / 2 + w * slat / 8, middle, z, 0.028, h, 0.028)
    for (const y of [s + 0.06, s + h - 0.06]) b.box(frame, 0, y, z, w, 0.04, 0.035)
  }
  if (kind === 'win-hood' && o) {
    const z = o * (thick / 2 + 0.16)
    for (const x of [-w / 2 - 0.1, w / 2 + 0.1]) b.box(hoodPaint, x, middle, z, 0.2, h + 0.36, 0.32)
    b.box(hoodPaint, 0, s + h + 0.09, z, w, 0.18, 0.32)
  }
  if (kind === 'win-shop') b.box(trim, 0, s - 0.06, o * 0.02, w, 0.12, thick + 0.05)
}

// One door leaf, drawn from its hinge edge (x = 0) to its free edge, standing on y = 0.
// `facing` is the way outdoors lies through the leaf (+1 or -1 along its z), or 0 indoors.
function drawLeaf(look, width, height, paint, facing = 0) {
  const b = new Batch()
  const middle = width / 2
  const handle = () => {
    for (const z of [-0.04, 0.04]) b.box(steel(), width - 0.08, 1.0, z, 0.03, 0.14, 0.03)
  }
  if (look === 'glass') {
    for (const x of [0.03, width - 0.03]) b.box(paint, x, height / 2, 0, 0.06, height, 0.04)
    for (const y of [0.04, height - 0.04]) b.box(paint, middle, y, 0, width - 0.12, 0.08, 0.04)
    addPane(b, facing, 0.06, width - 0.06, 0.08, height - 0.08, 0)
    handle()
  } else if (look === 'fusuma') {
    b.box(material('#efe9d8', '#ffffff', { roughness: 0.95 }), middle, height / 2, 0, width - 0.04, height - 0.04, 0.02)
    const edge = material('wood', '#5a4636')
    for (const x of [0.01, width - 0.01]) b.box(edge, x, height / 2, 0, 0.02, height, 0.03)
    for (const y of [0.01, height - 0.01]) b.box(edge, middle, y, 0, width - 0.04, 0.02, 0.03)
    for (const z of [-0.012, 0.012]) b.cylinder(material('#3d3530'), width - 0.1, 0.92, z - 0.004, 0.03, 0.008, 10)
  } else if (look === 'shoji') {
    b.box(material('#f6f1e2', '#ffffff', { roughness: 1 }), middle, height / 2, 0, width - 0.04, height - 0.04, 0.008)
    const bar = material('wood', '#c9a37a')
    for (const x of [0.012, width - 0.012]) b.box(bar, x, height / 2, 0, 0.024, height, 0.03)
    for (const y of [0.012, height - 0.012]) b.box(bar, middle, y, 0, width - 0.048, 0.024, 0.03)
    for (let column = 1; column < 3; column++) b.box(bar, width * column / 3, height / 2, 0, 0.012, height - 0.05, 0.02)
    for (let row = 1; row < 6; row++) b.box(bar, middle, height * row / 6, 0, width - 0.05, 0.012, 0.02)
  } else {
    b.box(paint, middle, height / 2, 0, width, height, 0.04)
    if (look === 'panel' || look === 'key') {
      for (const y of [height * 0.28, height * 0.72]) {
        for (const z of [-0.022, 0.022]) b.box(paint, middle, y, z, width * 0.66, height * 0.34, 0.006)
      }
    } else if (look === 'slit') {
      for (const z of [-0.022, 0.022]) b.box(frosted(), width * 0.3, height * 0.56, z, Math.min(0.12, width * 0.4), height * 0.56, 0.006)
    }
    // A lock of its own: the cylinder outside and the thumb turn inside, above the handle.
    if (look === 'key') {
      for (const z of [-0.026, 0.026]) b.box(steel(), width - 0.08, 1.16, z, 0.05, 0.09, 0.012)
    }
    if (look !== 'plain' && look !== 'still') handle()
  }
  return b
}

// Draws a door or a window in its own frame: x along the wall from the middle of the opening,
// y up from the floor, z through the wall. `outward` is +1 or -1 on the side that is outdoors
// (0 between two rooms). Returns the leaves to hang, for doors.
function drawOpening(b, panes, entry, thick, outward, hoodPaint) {
  const shape = OPENINGS[entry.k] ?? OPENINGS['win-fixed']
  const w = entry.ww
  const h = entry.hh
  const s = entry.s
  const middle = s + h / 2
  const deep = thick + 0.03
  const frame = frameMaterial(entry.c ?? (shape.door ? 'wood' : 'white'))
  if (entry.k === 'arch') {
    const liner = material('#f1eee6', '#ffffff', { roughness: 0.8 })
    for (const x of [-w / 2 + 0.008, w / 2 - 0.008]) b.box(liner, x, middle, 0, 0.016, h, deep)
    b.box(liner, 0, s + h - 0.008, 0, w - 0.032, 0.016, deep)
    return []
  }
  if (!shape.door) {
    drawWindow(b, panes, entry, thick, outward, hoodPaint, frame)
    return []
  }
  const style = LEAVES[entry.k] ?? LEAVES['door-wood']
  // (The doors of a lift stand in a frame of stainless steel, as do those of a platform.)
  const stainless = material('#c6c9c5', '#ffffff', { roughness: 0.32, metalness: 0.75 })
  const jamb = style.lift || style.platform ? stainless : frame
  const bar = 0.05
  for (const x of [-w / 2 + bar / 2, w / 2 - bar / 2]) b.box(jamb, x, s + h / 2, 0, bar, h, deep)
  b.box(jamb, 0, s + h - bar / 2, 0, w - bar * 2, bar, deep)
  b.box(style.lift ? stainless : material('#8f8d87', '#ffffff', { roughness: 0.7 }), 0, s + 0.008, 0, w - bar * 2, 0.016, deep)
  const inner = w - bar * 2

  // Doors: the leaves are made apart from the wall, so that they can swing or slide.
  const paint = style.lift ? stainless : style.look === 'glass' ? (style.platform ? stainless : frame) : frameMaterial(entry.c ?? 'wood')
  const leafHeight = h - bar - 0.02
  // Which way a leaf swings: into the room, or out of the house for a Japanese front door.
  const inside = (outward ? -outward : 1) * (entry.outward ? -1 : 1)
  if (style.swing === 1) {
    const hinge = entry.flip ? inner / 2 : -inner / 2
    const turns = (entry.flip ? -1 : 1) * (inside > 0 ? -1 : 1)
    // Beside the leaf of a 親子ドア stands its little brother, which stays shut.
    const small = style.small && inner > 0.9 ? inner * style.small : 0
    const leaves = [{ swing: true, x: hinge, y: s + 0.016, z: 0, mirror: Boolean(entry.flip), batch: drawLeaf(style.look, inner - small, leafHeight, paint, outward * (entry.flip ? -1 : 1)), dir: turns }]
    if (small) leaves.push({ swing: true, x: -hinge, y: s + 0.016, z: 0, mirror: !entry.flip, batch: drawLeaf('still', small - 0.004, leafHeight, paint, outward * (entry.flip ? 1 : -1)), dir: 0 })
    return leaves
  }
  if (style.swing === 2) {
    return [-1, 1].map((side) => ({
      swing: true, x: side * inner / 2, y: s + 0.016, z: 0, mirror: side > 0, batch: drawLeaf(style.look, inner / 2, leafHeight, paint, outward * (side > 0 ? -1 : 1)),
      dir: (side > 0 ? -1 : 1) * (inside > 0 ? -1 : 1),
    }))
  }
  if (style.apart) {
    // Glass panels that part in the middle and slide along the wall on its inner face.
    return [-1, 1].map((side) => ({
      slide: side * (inner / 2 - 0.04), x: side < 0 ? -inner / 2 : 0, y: s + 0.016, z: style.lift || style.platform ? 0 : inside * (thick / 2 + 0.035),
      batch: drawLeaf(style.look, inner / 2, leafHeight, paint, outward), lift: Boolean(style.lift),
    }))
  }
  if (style.slide === 2) {
    return [0, 1].map((index) => ({
      slide: index ? 0 : inner / 2 - 0.05, x: index ? 0 : -inner / 2, y: s + 0.016, z: (index ? 1 : -1) * 0.022,
      batch: drawLeaf(style.look, inner / 2 + 0.02, leafHeight, paint, outward),
    }))
  }
  return [{ slide: inner - 0.06, x: -inner / 2, y: s + 0.016, z: inside * (thick / 2 + 0.03), batch: drawLeaf(style.look, inner, leafHeight, paint, outward) }]
}

// A length of pipe from a to b, square in section (a rainwater pipe is too thin to tell).
function pipe(batch, paint, a, b, width) {
  const axis = b.clone().sub(a).normalize()
  const side = (Math.abs(axis.y) > 0.95 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0)).cross(axis).normalize().multiplyScalar(width / 2)
  const other = axis.clone().cross(side).normalize().multiplyScalar(width / 2)
  const ring = (point) => [[1, 1], [-1, 1], [-1, -1], [1, -1]].map(([u, v]) => point.clone().addScaledVector(side, u).addScaledVector(other, v))
  const from = ring(a)
  const to = ring(b)
  for (let index = 0; index < 4; index++) {
    const next = (index + 1) % 4
    const outward = from[index].clone().add(from[next]).multiplyScalar(0.5).sub(a)
    batch.quad(paint, from[index], from[next], to[next], to[index], outward)
  }
}

// ---- Roofs --------------------------------------------------------------------

const grids = new WeakMap()

// The parts of a storey that have open sky above them, on a grid fine enough for its walls:
// 1 is roof, 2 is covered by the storey above, 0 is outdoors.
function skyGrid(design, level) {
  let known = grids.get(design)
  if (!known) grids.set(design, known = new Map())
  const source = (index) => design.storeys[index]?.like ?? index
  const top = level + 1 >= design.storeys.length
  const key = `${source(level)}|${top ? 'sky' : source(level + 1)}`
  if (known.has(key)) return known.get(key)
  const shape = storeyShape(design, level)
  const above = top ? null : storeyShape(design, level + 1)
  let grid = null
  if (top || source(level) !== source(level + 1)) {
    const lines = (axis) => {
      const found = new Set()
      for (const part of [shape, above]) {
        for (const wall of part?.storey.walls ?? []) {
          found.add(Math.round(wall.a[axis] * 100) / 100)
          found.add(Math.round(wall.b[axis] * 100) / 100)
        }
      }
      const sorted = [...found].sort((a, b) => a - b)
      const fine = []
      sorted.forEach((value, index) => {
        if (index) {
          const gap = value - sorted[index - 1]
          const steps = Math.ceil(gap / 0.5)
          for (let step = 1; step < steps; step++) fine.push(sorted[index - 1] + gap * step / steps)
        }
        fine.push(value)
      })
      return fine
    }
    const xs = lines(0)
    const zs = lines(1)
    const state = []
    let any = false
    for (let j = 0; j < zs.length - 1; j++) {
      const row = []
      for (let i = 0; i < xs.length - 1; i++) {
        const x = (xs[i] + xs[i + 1]) / 2
        const z = (zs[j] + zs[j + 1]) / 2
        const value = above?.floored(x, z) ? 2 : shape.indoors(x, z) ? 1 : 0
        any ||= value === 1
        row.push(value)
      }
      state.push(row)
    }
    if (any) grid = { xs, zs, state }
  }
  known.set(key, grid)
  return grid
}

function drawRoof(batch, design, level, wallPaint) {
  const grid = skyGrid(design, level)
  if (!grid) return
  const { xs, zs, state } = grid
  const shape = storeyShape(design, level)
  const top = shape.base + shape.storey.h
  const roof = design.roof ?? { k: 'flat', f: 'roof-concrete' }
  const paint = finishMaterial(roof.f)
  const sky = (i, j) => state[j]?.[i] === 1
  const open = (i, j) => (state[j]?.[i] ?? 0) === 0

  if (roof.k === 'flat') {
    for (let j = 0; j < zs.length - 1; j++) {
      let start = -1
      for (let i = 0; i <= xs.length - 1; i++) {
        if (sky(i, j) && start < 0) start = i
        if (!sky(i, j) && start >= 0) {
          batch.slab(paint, xs[start], zs[j], xs[i], zs[j + 1], top)
          start = -1
        }
      }
    }
    // A parapet stands on every outside wall that has roof behind it.
    const height = Math.max(0.1, roof.parapet ?? 0.4)
    for (const piece of shape.outlines.pieces) {
      const wall = shape.storey.walls[piece.wall]
      if (wall.open || wall.rail || (wall.h ?? shape.storey.h) < shape.storey.h - 0.01) continue
      const reach = (wall.t ?? 0.12) / 2 + 0.09
      const mx = (piece.l[0][0] + piece.l[1][0] + piece.r[0][0] + piece.r[1][0]) / 4
      const mz = (piece.l[0][1] + piece.l[1][1] + piece.r[0][1] + piece.r[1][1]) / 4
      const left = shape.indoors(mx + piece.d[1] * reach, mz - piece.d[0] * reach)
      const right = shape.indoors(mx - piece.d[1] * reach, mz + piece.d[0] * reach)
      if (left === right) continue
      prism(batch, finishMaterial(left ? wall.r : wall.l), piece, top, top + height)
    }
    return
  }

  // Pitched roofs rise with the distance from the eaves, which gives hips and valleys on any plan.
  const edges = []
  let minX = Infinity
  let maxX = -Infinity
  let minZ = Infinity
  let maxZ = -Infinity
  for (let j = 0; j < zs.length - 1; j++) {
    for (let i = 0; i < xs.length - 1; i++) {
      if (!sky(i, j)) continue
      minX = Math.min(minX, xs[i])
      maxX = Math.max(maxX, xs[i + 1])
      minZ = Math.min(minZ, zs[j])
      maxZ = Math.max(maxZ, zs[j + 1])
      for (const [di, dj, a, b] of [[0, -1, [i, j], [i + 1, j]], [0, 1, [i, j + 1], [i + 1, j + 1]], [-1, 0, [i, j], [i, j + 1]], [1, 0, [i + 1, j], [i + 1, j + 1]]]) {
        if (!sky(i + di, j + dj)) edges.push({ a, b, normal: [di, dj], open: open(i + di, j + dj) })
      }
    }
  }
  let alongX = maxX - minX >= maxZ - minZ
  if (roof.turn) alongX = !alongX
  const isEave = (edge) => edge.open && (roof.k === 'hip' || (roof.k === 'gable'
    ? (alongX ? edge.normal[1] !== 0 : edge.normal[0] !== 0)
    : (alongX ? edge.normal[1] < 0 : edge.normal[0] < 0)))
  const eaves = edges.filter(isEave)
  const slope = Math.tan((roof.pitch ?? 30) * Math.PI / 180)
  // The roof is a plate with a thickness. It lies on top of the walls: its underside meets the
  // outer face of the wall at the top of the wall, so that no wall shows through the roof.
  const heavy = /kawara|tile/.test(roof.f ?? '')
  const thick = heavy ? 0.16 : 0.1
  const wallHalf = Math.max(0.06, ...shape.storey.walls.filter((wall) => !wall.open && !wall.rail).map((wall) => (wall.t ?? 0.12) / 2))
  const lift = thick + wallHalf * slope - 0.005
  const heights = new Map()
  const rise = (i, j) => {
    const key = i * 4096 + j
    if (!heights.has(key)) {
      let nearest = eaves.length ? Infinity : 0
      for (const { a, b } of eaves) {
        const ax = xs[a[0]]
        const az = zs[a[1]]
        const dx = xs[b[0]] - ax
        const dz = zs[b[1]] - az
        const t = Math.min(1, Math.max(0, ((xs[i] - ax) * dx + (zs[j] - az) * dz) / (dx * dx + dz * dz || 1)))
        nearest = Math.min(nearest, Math.hypot(xs[i] - ax - dx * t, zs[j] - az - dz * t))
      }
      heights.set(key, top + lift + Math.min(nearest, 7) * slope)
    }
    return heights.get(key)
  }
  const corner = (i, j) => new THREE.Vector3(xs[i], rise(i, j), zs[j])
  // It has a top, an underside (the soffit, seen under the eaves) and boards along its edges.
  const soffit = material('#e7e3d8', '#ffffff', { roughness: 0.9 })
  const board = heavy ? soffit : material('#3f4447', '#ffffff', { roughness: 0.6, metalness: 0.3 })
  const upward = (points) => {
    const a = points[1].clone().sub(points[0])
    const b = points[2].clone().sub(points[0])
    const ordered = a.cross(b).y < 0 ? [...points].reverse() : points
    batch.face(paint, ordered)
    batch.face(soffit, [...ordered].reverse().map((point) => point.clone().setY(point.y - thick)))
  }
  const edgeBoard = (p, q, facing) => batch.quad(board, p.clone().setY(p.y - thick), q.clone().setY(q.y - thick), q, p, facing)
  for (let j = 0; j < zs.length - 1; j++) {
    for (let i = 0; i < xs.length - 1; i++) {
      if (!sky(i, j)) continue
      const c00 = corner(i, j)
      const c10 = corner(i + 1, j)
      const c11 = corner(i + 1, j + 1)
      const c01 = corner(i, j + 1)
      if (Math.abs(c00.y - c11.y) >= Math.abs(c10.y - c01.y)) {
        upward([c00, c01, c11])
        upward([c00, c11, c10])
      } else {
        upward([c00, c01, c10])
        upward([c01, c11, c10])
      }
    }
  }
  // Eaves reach out past the walls and droop with the slope; at an outer corner two of them meet.
  const reach = roof.eave ?? 0.4
  const out = new Map()
  for (const edge of eaves) {
    for (const [i, j] of [edge.a, edge.b]) {
      const key = i * 4096 + j
      const sum = out.get(key) ?? [0, 0]
      sum[0] = sum[0] || edge.normal[0]
      sum[1] = sum[1] || edge.normal[1]
      out.set(key, sum)
    }
  }
  const tip = ([i, j], normal) => {
    const push = out.get(i * 4096 + j) ?? normal
    return new THREE.Vector3(xs[i] + push[0] * reach, top + lift - reach * slope, zs[j] + push[1] * reach)
  }
  const sameSpot = (p, q) => p[0] === q[0] && p[1] === q[1]
  // The roof overhangs its gables (and the tall side of a single slope) by a little too.
  const verge = Math.min(0.3, reach)
  const gables = edges.filter((edge) => edge.open && !isEave(edge))
  // Rain runs off the eaves into a gutter (軒樋, 105 mm wide) and down a pipe (竪樋, 60 mm) at
  // each end of a run of eave, or at the corners of a hipped roof.
  const rain = heavy ? material('#5d4b3c', '#ffffff', { roughness: 0.6 }) : material('#33383b', '#ffffff', { roughness: 0.55, metalness: 0.3 })
  const piped = new Set()
  const downpipe = (end, normal, towards) => {
    const key = end[0] * 4096 + end[1]
    if (piped.has(key) || reach < 0.15) return
    piped.add(key)
    // Down the wall, 15 cm in from its corner and just clear of its face.
    const x = xs[end[0]] + normal[0] * (wallHalf + 0.045) + towards[0] * 0.15
    const z = zs[end[1]] + normal[1] * (wallHalf + 0.045) + towards[1] * 0.15
    // It ends on the ground, or on a lower roof that stands out under it.
    let foot = 0.1
    for (let below = level - 1; below >= 0; below--) {
      const lower = storeyShape(design, below)
      if (lower?.indoors(x, z)) {
        foot = lower.base + lower.storey.h + 0.25
        break
      }
    }
    const under = top + lift - reach * slope - thick - 0.07
    const mouth = new THREE.Vector3(x + normal[0] * (reach - wallHalf - 0.045 + 0.06), under, z + normal[1] * (reach - wallHalf - 0.045 + 0.06))
    const elbow = new THREE.Vector3(x, under - Math.max(0.2, (reach - wallHalf) * 0.8), z)
    if (elbow.y - foot < 0.3) return
    pipe(batch, rain, mouth, elbow, 0.06)
    pipe(batch, rain, elbow, new THREE.Vector3(x, foot, z), 0.06)
    // Brackets hold it to the wall.
    for (let y = elbow.y - 0.3; y > foot + 0.3; y -= 1.2) batch.box(rain, x - normal[0] * 0.03, y, z - normal[1] * 0.03, 0.075, 0.03, 0.075)
  }
  for (const edge of eaves) {
    const outward = new THREE.Vector3(edge.normal[0], 0, edge.normal[1])
    const tips = [tip(edge.a, edge.normal), tip(edge.b, edge.normal)]
    upward([corner(...edge.a), corner(...edge.b), tips[1], tips[0]])
    // The board along the edge of the eave (鼻隠し).
    edgeBoard(tips[0], tips[1], outward)
    if (reach >= 0.15) {
      const middle = tips[0].clone().add(tips[1]).multiplyScalar(0.5).addScaledVector(outward, 0.06)
      const long = tips[0].distanceTo(tips[1]) + 0.02
      batch.box(rain, middle.x, middle.y - thick - 0.035, middle.z, edge.normal[0] ? 0.105 : long, 0.07, edge.normal[0] ? long : 0.105)
    }
    for (const [end, other] of [[edge.a, edge.b], [edge.b, edge.a]]) {
      const towards = [Math.sign(xs[other[0]] - xs[end[0]]), Math.sign(zs[other[1]] - zs[end[1]])]
      const meets = eaves.filter((next) => next !== edge && (sameSpot(next.a, end) || sameSpot(next.b, end)))
      // The end of a run: nothing carries on from here, or another eave turns the corner.
      if (!meets.length || meets.some((next) => next.normal[0] !== edge.normal[0] || next.normal[1] !== edge.normal[1])) downpipe(end, edge.normal, towards)
    }
    for (const [end, other, point] of [[edge.a, edge.b, tips[0]], [edge.b, edge.a, tips[1]]]) {
      if (eaves.some((next) => next !== edge && (sameSpot(next.a, end) || sameSpot(next.b, end)))) continue
      const gable = gables.find((next) => sameSpot(next.a, end) || sameSpot(next.b, end))
      if (!gable) {
        // An eave that simply stops is closed across its end.
        edgeBoard(corner(...end), point, new THREE.Vector3(xs[end[0]] - xs[other[0]], 0, zs[end[1]] - zs[other[1]]))
        continue
      }
      // Past a gable the eave carries on as far as the roof overhangs the gable wall.
      const side = new THREE.Vector3(gable.normal[0], 0, gable.normal[1]).multiplyScalar(verge)
      const start = corner(...end)
      upward([start, point, point.clone().add(side), start.clone().add(side)])
      edgeBoard(point, point.clone().add(side), outward)
      edgeBoard(start.clone().add(side), point.clone().add(side), side)
    }
  }
  for (const edge of gables) {
    const a = corner(...edge.a)
    const b = corner(...edge.b)
    const outward = new THREE.Vector3(edge.normal[0], 0, edge.normal[1])
    const side = outward.clone().multiplyScalar(verge)
    upward([a, b, b.clone().add(side), a.clone().add(side)])
    // The board along a gable (破風).
    edgeBoard(a.clone().add(side), b.clone().add(side), outward)
    // The wall below goes on up to the underside of the roof, in the plane of its own outer face.
    const face = outward.clone().multiplyScalar(wallHalf)
    const foot = (point) => new THREE.Vector3(point.x, top, point.z).add(face)
    const head = (point) => new THREE.Vector3(point.x, Math.max(top, point.y - thick + 0.01), point.z).add(face)
    if (a.y - thick - top > 0.005 || b.y - thick - top > 0.005) batch.quad(wallPaint, foot(a), foot(b), head(b), head(a), outward)
  }
}

// ---- A whole building -----------------------------------------------------------

// Draws one storey. `sink` says where things go: `out` and `outHigh` take what faces outdoors
// (below and above the cutting height), `inside` and `insideHigh` what faces a room, `cap` the
// cut tops of walls, `panes` window glass, and `hang` receives the door leaves.
function drawStorey(design, level, sink) {
  const shape = storeyShape(design, level)
  const { storey, outlines } = shape
  const { base } = shape
  const split = Boolean(sink.split)
  const outdoorPaint = { value: null }
  const leaves = []
  const drop = dropOf(design, storey)
  // Whether a wall stands at a spot: a handrail there is fixed to the wall.
  const solid = storey.walls.filter((wall) => !wall.open && !wall.rail)
  const walled = (x, z) => solid.some((wall) => {
    const ex = wall.b[0] - wall.a[0]
    const ez = wall.b[1] - wall.a[1]
    const t = Math.min(1, Math.max(0, ((x - wall.a[0]) * ex + (z - wall.a[1]) * ez) / (ex * ex + ez * ez || 1e-9)))
    return Math.hypot(x - wall.a[0] - ex * t, z - wall.a[1] - ez * t) < (wall.t ?? 0.12) / 2 + 0.13
  })
  const onSteps = (x, z) => storey.steps.some((steps) => upSteps(steps, x, z) >= 0)

  // Where two rooms share one space there is no wall, only a line on the floor.
  storey.walls.forEach((wall, index) => {
    if (!wall.open || !sink.inside) return
    const { d } = shape.sides[index]
    const [mx, mz] = [(wall.a[0] + wall.b[0]) / 2, (wall.a[1] + wall.b[1]) / 2]
    const sides = [1, -1].map((sign) => [mx + sign * d[1] * 0.12, mz - sign * d[0] * 0.12])
    const [left, right] = sides.map(([x, z]) => shape.roomAt(x, z))
    const leftward = new THREE.Vector3(d[1], 0, -d[0])
    const rightward = new THREE.Vector3(-d[1], 0, d[0])
    // Where the floors on its two sides differ in height there is a step, as at the 上がり框
    // between the earth floor of an entrance and the hall.
    if (left && right && Math.abs(left.y - right.y) > 0.015 && !sides.some(([x, z]) => onSteps(x, z))) {
      const low = Math.min(left.y, right.y)
      const high = Math.max(left.y, right.y)
      const paint = high - low > 0.6 ? material('concrete', '#c4c1b8') : high - low > 0.1 ? material('wood', '#a9825a') : material('#8f8d87', '#ffffff', { roughness: 0.7 })
      sink.inside.quad(paint, at(wall.a, base + low), at(wall.b, base + low), at(wall.b, base + high), at(wall.a, base + high), left.y < right.y ? leftward : rightward)
    }
    // Above the ceilings the line is closed, so that nobody looks into the space over a ceiling
    // from a stairwell that has none.
    const lintel = material('#f1eee6', '#ffffff', { roughness: 0.9 })
    const high = sink.insideHigh ?? sink.inside
    for (const facing of [leftward, rightward]) {
      high.quad(lintel, at(wall.a, base + storey.h - drop), at(wall.b, base + storey.h - drop), at(wall.b, base + storey.h), at(wall.a, base + storey.h), facing)
    }
  })

  for (const piece of outlines.pieces) {
    const wall = storey.walls[piece.wall]
    const wallTop = Math.min(wall.h ?? storey.h, storey.h)
    if (wall.rail && wall.rail !== 'solid') {
      if (sink.out) drawRail(sink.out, sink.panes ?? sink.out, piece, wall, base, wallTop, level === 0 ? base : 0.15)
      continue
    }
    const reach = (wall.t ?? 0.12) / 2 + 0.07
    const mx = (piece.l[0][0] + piece.l[1][0] + piece.r[0][0] + piece.r[1][0]) / 4
    const mz = (piece.l[0][1] + piece.l[1][1] + piece.r[0][1] + piece.r[1][1]) / 4
    const holes = storey.openings.filter((entry) => entry.w === piece.wall).sort((p, q) => p.at - q.at)
    for (const side of ['l', 'r']) {
      const sign = side === 'l' ? 1 : -1
      const indoor = shape.indoors(mx + sign * piece.d[1] * reach, mz - sign * piece.d[0] * reach)
      const low = indoor ? sink.inside : sink.out
      const high = indoor ? sink.insideHigh : sink.outHigh
      if (!low && !high) continue
      const main = finishMaterial(wall[side])
      const bands = []
      // A wall goes down to the lowest floor that lies along this face: the earth floor of an
      // entrance and the floor of a balcony are lower than the floor of the storey.
      let foot = 0
      for (const along of [0.06, 0.28, 0.5, 0.72, 0.94]) {
        const x = piece.start[0] + (piece.end[0] - piece.start[0]) * along + sign * piece.d[1] * reach
        const z = piece.start[1] + (piece.end[1] - piece.start[1]) * along - sign * piece.d[0] * reach
        foot = Math.min(foot, shape.roomAt(x, z)?.y ?? 0)
      }
      // Outside, the wall goes on down to the street (or covers the edge of a balcony slab).
      if (!indoor) {
        outdoorPaint.value ??= main
        if (level === 0 && base > 0.001) bands.push([-base, 0, footing()])
        else if (wall.rail) bands.push([-0.15, 0, main])
      }
      // Indoors a skirting board (巾木) runs along the foot of the wall: not in a bath, which is
      // tiled to the floor, nor in a room with tatami, nor in a lift shaft.
      let from = foot
      if (indoor && !wall.rail && wallTop > 0.6) {
        const room = shape.roomAt(mx + sign * piece.d[1] * reach, mz - sign * piece.d[0] * reach)
        if (room && !room.shaft && room.code !== 'U' && room.code !== 'W' && room.f !== 'tatami') {
          bands.push([foot, foot + 0.06, design.style === 'japan' ? material('wood', '#8a6746') : material('#f3f0e8', '#ffffff', { roughness: 0.7 })])
          from = foot + 0.06
        }
      }
      const lower = wall[`${side}l`]
      if (lower && wallTop > 1.05) bands.push([from, 1, finishMaterial(lower)], [1, wallTop, main])
      else bands.push([from, wallTop, main])
      wallFace(piece, side, holes, bands, wallTop, base, low, high, split)
      // Where the wall of a house meets its foundation, a strip of metal throws the rain clear
      // of the concrete (土台水切り): it stands 3 cm proud of the wall.
      if (!indoor && low && level === 0 && base > 0.2 && !wall.rail) {
        const [start] = piece[side]
        const [from, to] = piece.span[side]
        const normal = [sign * piece.d[1], -sign * piece.d[0]]
        const spot = (along, out, y) => new THREE.Vector3(start[0] + piece.d[0] * (along - from) + normal[0] * out, base + y, start[1] + piece.d[1] * (along - from) + normal[1] * out)
        const outward = new THREE.Vector3(normal[0], 0, normal[1])
        const strip = (x0, x1) => {
          if (x1 - x0 < 0.02) return
          low.quad(drip(), spot(x0, 0, 0.014), spot(x1, 0, 0.014), spot(x1, 0.03, -0.004), spot(x0, 0.03, -0.004), UP)
          low.quad(drip(), spot(x0, 0.03, -0.004), spot(x1, 0.03, -0.004), spot(x1, 0.03, -0.03), spot(x0, 0.03, -0.03), outward)
          low.quad(drip(), spot(x0, 0.03, -0.03), spot(x1, 0.03, -0.03), spot(x1, 0, -0.03), spot(x0, 0, -0.03), DOWN)
        }
        let x = Math.min(from, to)
        const end = Math.max(from, to)
        // (Not across a doorway.)
        for (const hole of holes) {
          if (hole.s > 0.05) continue
          strip(x, Math.min(end, hole.at - hole.ww / 2))
          x = Math.max(x, hole.at + hole.ww / 2)
        }
        strip(x, end)
      }
    }
    if (sink.cap && wallTop > CUT) sink.cap.shape(section(), piece.poly, [], base + CUT + 0.002, true)
    // A wall that stops short of the ceiling shows its top.
    if (wallTop < storey.h - 0.01 && sink.out) sink.out.shape(finishMaterial(wall.l), piece.poly, [], base + wallTop, true)
  }

  // The loose ends of walls.
  for (const cap of outlines.caps) {
    const piece = outlines.pieces[cap.piece]
    const wall = storey.walls[piece.wall]
    if (wall.rail && wall.rail !== 'solid') continue
    const wallTop = Math.min(wall.h ?? storey.h, storey.h)
    const mx = (cap.from[0] + cap.to[0]) / 2 + cap.normal[0] * 0.07
    const mz = (cap.from[1] + cap.to[1]) / 2 + cap.normal[1] * 0.07
    const indoor = shape.indoors(mx, mz)
    const facing = new THREE.Vector3(cap.normal[0], 0, cap.normal[1])
    const paint = finishMaterial(wall.l)
    const strip = (batch, y0, y1) => batch?.quad(paint, at(cap.from, base + y0), at(cap.to, base + y0), at(cap.to, base + y1), at(cap.from, base + y1), facing)
    const low = indoor ? sink.inside : sink.out
    const high = indoor ? sink.insideHigh : sink.outHigh
    if (!split) strip(low, 0, wallTop)
    else {
      strip(low, 0, Math.min(CUT, wallTop))
      if (wallTop > CUT) strip(high, CUT, wallTop)
    }
  }

  // Doors and windows.
  storey.openings.forEach((entry) => {
    const wall = storey.walls[entry.w]
    if (!wall) return
    const side = shape.sides[entry.w]
    const thick = wall.t ?? 0.12
    const reach = thick / 2 + 0.07
    const x = wall.a[0] + side.d[0] * entry.at
    const z = wall.a[1] + side.d[1] * entry.at
    const leftIn = shape.indoors(x + side.d[1] * reach, z - side.d[0] * reach)
    const rightIn = shape.indoors(x - side.d[1] * reach, z + side.d[0] * reach)
    const interior = leftIn && rightIn
    const tall = entry.s + entry.hh > CUT
    const frames = interior ? (tall && split ? sink.insideHigh : sink.inside) : (tall && split ? sink.outHigh : sink.out)
    if (!frames) return
    const panes = interior ? frames : sink.panes ?? frames
    // In the wall's own frame +z is its right face; outdoors is on whichever side is not a room.
    const outward = interior || leftIn === rightIn ? 0 : rightIn ? -1 : 1
    const turn = Math.atan2(-side.d[1], side.d[0])
    let hung = []
    frames.at(x, base, z, turn, (b) => {
      // The glass goes to its own batch, drawn in the same place as the frame.
      const before = panes.matrix
      panes.matrix = b.matrix
      hung = drawOpening(b, panes, entry, thick, outward, outdoorPaint.value ?? finishMaterial(wall.l))
      if (panes !== b) panes.matrix = before
    })
    for (const leaf of hung) leaves.push({ ...leaf, level, interior, cx: x, cz: z, base, turn, d: side.d, width: entry.ww, auto: entry.k === 'door-auto' })
  })

  // What hangs on the walls: pictures and clocks indoors, awnings and flower boxes outside.
  storey.decor.forEach((piece, index) => {
    const wall = storey.walls[piece.w]
    if (!wall || wall.open) return
    const side = shape.sides[piece.w]
    const sign = piece.side === 'l' ? 1 : -1
    const normal = [sign * side.d[1], -sign * side.d[0]]
    const off = (wall.t ?? 0.12) / 2 + 0.003
    const x = wall.a[0] + side.d[0] * piece.at + normal[0] * off
    const z = wall.a[1] + side.d[1] * piece.at + normal[1] * off
    const indoor = piece.side === 'l' ? side.l : side.r
    const tall = piece.y > CUT && split
    const target = indoor ? (tall ? sink.insideHigh : sink.inside) : (tall ? sink.outHigh : sink.out)
    target?.at(x, base + piece.y, z, Math.atan2(normal[0], normal[1]), (b) => drawDecor(b, piece.k, index + level * 31, piece))
  })

  // Balconies and terraces are floors without a room: they belong to the outside.
  if (sink.out) {
    for (const room of shape.rooms) {
      if (!room.open) continue
      sink.out.shape(finishMaterial(room.f), room.points, room.holes, base + room.y + 0.001, true)
      if (level > 0) sink.out.shape(material('concrete', '#d9d6cd'), room.points, room.holes, base - 0.15, false)
    }
  }

  if (sink.inside) {
    const lower = level > 0 ? storeyOf(design, level - 1) : null
    const below = lower ? lower.stairs.map((stair) => ({ stair, layout: stairLayout(stair, lower.h) })) : []
    const up = level + 1 < design.storeys.length ? storey.stairs.map((stair) => ({ stair, layout: stairLayout(stair, storey.h) })) : []
    // The hole of a flight in a floor or a ceiling, where the whole of it lies in one room.
    const within = (room, { layout }) => layout.outline.every(([x, z]) => pointIn(room.points, x, z) || room.points.some((p) => Math.hypot(p[0] - x, p[1] - z) < 0.2))
    const touches = (room, { layout }) => inRoom(room, ...layout.centre(layout.total / 2)) || inRoom(room, ...layout.centre(0.3)) || inRoom(room, ...layout.centre(layout.total - 0.3))
    for (const room of shape.rooms) {
      if (room.open) continue
      // A lift shaft has neither floor nor ceiling, only its pit: the car is its floor.
      if (room.shaft) {
        if (level === 0) sink.inside.shape(material('concrete', '#8f8d87'), room.points, room.holes, base - 0.03, true)
        continue
      }
      const wells = below.filter((flight) => touches(room, flight))
      const whole = wells.filter((flight) => within(room, flight))
      // A room that is all stairwell has no floor round the hole worth drawing.
      if (wells.length === whole.length) sink.inside.shape(finishMaterial(room.f), room.points, [...room.holes, ...whole.map(({ layout }) => layout.outline)], base + room.y, true)
      // Nor is there a ceiling over stairs that go on up.
      if (up.some((flight) => touches(room, flight))) continue
      const ceiling = sink.insideHigh ?? sink.inside
      ceiling.shape(finishMaterial(room.c), room.points, room.holes, base + storey.h - drop, false)
    }
    for (const { stair, layout } of below) {
      // The edge of the floor round the well, and a guard to keep walkers out of it.
      const edge = material('#e6e1d6', '#ffffff', { roughness: 0.9 })
      const thick = dropOf(design, lower)
      const cx = layout.outline.reduce((sum, point) => sum + point[0], 0) / layout.outline.length
      const cz = layout.outline.reduce((sum, point) => sum + point[1], 0) / layout.outline.length
      layout.outline.forEach((corner, index) => {
        const next = layout.outline[(index + 1) % layout.outline.length]
        const inward = new THREE.Vector3(cx - (corner[0] + next[0]) / 2, 0, cz - (corner[1] + next[1]) / 2)
        sink.inside.quad(edge, at(corner, base - thick), at(next, base - thick), at(next, base), at(corner, base), inward)
      })
      drawWell(sink.inside, stair, lower.h, base, walled)
    }
    for (const { stair } of up) drawStair(sink.inside, stair, storey.h, base, walled)
    for (const steps of storey.steps) drawSteps(sink.inside, steps, base)
    for (const thing of storey.items) {
      const high = thing.k === 'ceiling-light'
      const target = high ? sink.insideHigh ?? sink.inside : sink.inside
      const floor = base + (shape.heightAt(thing.x, thing.z) ?? 0)
      target.at(thing.x, high ? base + storey.h - drop - 0.1 : floor, thing.z, (thing.r ?? 0) * Math.PI / 180, (b) => drawItem(b, thing.k, thing.x, thing.z, thing))
    }
  }
  drawShade(design, level, shape, sink)
  return { leaves, wallPaint: outdoorPaint.value }
}

// ---- Shade where surfaces meet ----------------------------------------------------

// How dark the shade is where two surfaces meet (0 to 1), and how far it reaches (metres).
const SHADE = {
  floor: [0.34, 0.34], foot: [0.22, 0.2], head: [0.26, 0.3], ceiling: [0.2, 0.36], corner: [0.2, 0.2],
  ground: [0.42, 0.75], deck: [0.3, 0.3], item: [0.32, 0.13],
}

// Lays shade along the walls of a storey: on the floor and the ceiling of each room, on the
// walls where they meet those and each other, and round the furniture; outdoors on the ground
// at the foot of the building and on the floors of balconies. `sink.shade` takes what lies
// below the cutting height indoors, `sink.shadeHigh` the rest, `sink.shadeOut` what is outdoors.
function drawShade(design, level, shape, sink) {
  if (!sink.shade && !sink.shadeOut) return
  const { storey, outlines, base } = shape
  const drop = dropOf(design, storey)
  const solid = storey.walls.filter((wall) => !wall.open && !wall.rail)
  const inWall = (x, z) => solid.some((wall) => {
    const ex = wall.b[0] - wall.a[0]
    const ez = wall.b[1] - wall.a[1]
    const t = Math.min(1, Math.max(0, ((x - wall.a[0]) * ex + (z - wall.a[1]) * ez) / (ex * ex + ez * ez || 1e-9)))
    return Math.hypot(x - wall.a[0] - ex * t, z - wall.a[1] - ez * t) < (wall.t ?? 0.12) / 2 - 0.004
  })
  const lower = level > 0 ? storeyOf(design, level - 1) : null
  const wells = lower ? lower.stairs.map((stair) => stairLayout(stair, lower.h).outline) : []
  const flights = level + 1 < design.storeys.length ? storey.stairs.map((stair) => stairLayout(stair, storey.h)) : []
  const inWell = (x, z) => wells.some((outline) => pointIn(outline, x, z))
  // Rooms without a ceiling: the shaft of a lift, and a room that stairs go up through.
  const bare = (room) => !room || room.shaft
    || flights.some((layout) => [0.3, layout.total / 2, layout.total - 0.3].some((s) => inRoom(room, ...layout.centre(s))))
  const ceilingAt = base + storey.h - drop
  const cutAt = base + CUT

  for (const piece of outlines.pieces) {
    const wall = storey.walls[piece.wall]
    if (wall.rail && wall.rail !== 'solid') continue
    const wallTop = Math.min(wall.h ?? storey.h, storey.h)
    const reach = (wall.t ?? 0.12) / 2 + 0.07
    const mx = (piece.l[0][0] + piece.l[1][0] + piece.r[0][0] + piece.r[1][0]) / 4
    const mz = (piece.l[0][1] + piece.l[1][1] + piece.r[0][1] + piece.r[1][1]) / 4
    const doorways = storey.openings.filter((entry) => entry.w === piece.wall && entry.s < 0.3)
      .map((entry) => [entry.at - entry.ww / 2, entry.at + entry.ww / 2]).sort((p, q) => p[0] - q[0])
    for (const side of ['l', 'r']) {
      const sign = side === 'l' ? 1 : -1
      const [start] = piece[side]
      const [from, to] = piece.span[side]
      const lo = Math.min(from, to)
      const hi = Math.max(from, to)
      if (hi - lo < 0.05) continue
      // Out of the wall on this side.
      const normal = [sign * piece.d[1], -sign * piece.d[0]]
      const flat = (along, out) => [start[0] + piece.d[0] * (along - from) + normal[0] * out, start[1] + piece.d[1] * (along - from) + normal[1] * out]
      const spot = (along, out, y) => {
        const [x, z] = flat(along, out)
        return new THREE.Vector3(x, y, z)
      }
      // The stretches of the face that stand on the floor: all of it but its doorways.
      const runs = []
      let x = lo
      for (const [g0, g1] of doorways) {
        if (Math.min(g0, hi) - x > 0.03) runs.push([x, Math.min(g0, hi)])
        x = Math.max(x, g1)
      }
      if (hi - x > 0.03) runs.push([x, hi])
      const indoor = shape.indoors(mx + normal[0] * reach, mz + normal[1] * reach)

      if (indoor && sink.shade) {
        const room = shape.roomAt(...flat((lo + hi) / 2, reach))
        if (room?.shaft) continue
        const [floorDark, floorWide] = SHADE.floor
        const [footDark, footHigh] = SHADE.foot
        for (const [x0, x1] of runs) {
          const f = base + (shape.roomAt(...flat((x0 + x1) / 2, reach))?.y ?? 0)
          // On the floor, unless a flight of stairs comes up through it here.
          if (![x0, (x0 + x1) / 2, x1].some((along) => inWell(...flat(along, floorWide / 2)))) {
            sink.shade.strip(spot(x0, 0, f + 0.004), spot(x1, 0, f + 0.004), spot(x1, floorWide, f + 0.004), spot(x0, floorWide, f + 0.004), floorDark)
          }
          sink.shade.strip(spot(x0, 0.003, f), spot(x1, 0.003, f), spot(x1, 0.003, f + footHigh), spot(x0, 0.003, f + footHigh), footDark)
        }
        const ceiled = !bare(room) && base + wallTop >= ceilingAt - 0.01
        const top = ceiled ? ceilingAt : base + wallTop
        if (ceiled) {
          const high = sink.shadeHigh ?? sink.shade
          const [headDark, headHigh] = SHADE.head
          const [ceilingDark, ceilingWide] = SHADE.ceiling
          high.strip(spot(lo, 0.003, ceilingAt), spot(hi, 0.003, ceilingAt), spot(hi, 0.003, ceilingAt - headHigh), spot(lo, 0.003, ceilingAt - headHigh), headDark)
          high.strip(spot(lo, 0, ceilingAt - 0.004), spot(hi, 0, ceilingAt - 0.004), spot(hi, ceilingWide, ceilingAt - 0.004), spot(lo, ceilingWide, ceilingAt - 0.004), ceilingDark)
        }
        // In the corner where this face meets another wall.
        const [cornerDark, cornerWide] = SHADE.corner
        for (const [end, inward] of [[lo, 1], [hi, -1]]) {
          if (!inWall(...flat(end - inward * 0.045, 0.05))) continue
          const width = Math.min(cornerWide, (hi - lo) / 2)
          const f = base + (shape.roomAt(...flat(end + inward * 0.2, reach))?.y ?? 0)
          const parts = sink.shadeHigh && top > cutAt ? [[f, cutAt, sink.shade], [cutAt, top, sink.shadeHigh]] : [[f, top, sink.shade]]
          for (const [y0, y1, target] of parts) {
            target.strip(spot(end, 0.003, y0), spot(end, 0.003, y1), spot(end + inward * width, 0.003, y1), spot(end + inward * width, 0.003, y0), cornerDark)
          }
        }
      }

      if (!indoor && sink.shadeOut) {
        const outside = shape.roomAt(...flat((lo + hi) / 2, reach + 0.1))
        if (outside?.open) {
          // The floor of a balcony or a terrace, along the wall and along its own parapet.
          const [dark, wide] = SHADE.deck
          const y = base + outside.y + 0.006
          for (const [x0, x1] of runs) sink.shadeOut.strip(spot(x0, 0, y), spot(x1, 0, y), spot(x1, wide, y), spot(x0, wide, y), dark)
        } else if (level === 0 && !wall.rail) {
          // The ground at the foot of the building, in short lengths that follow porches and steps.
          const [dark, wide] = SHADE.ground
          for (const [x0, x1] of runs) {
            const count = Math.max(1, Math.ceil((x1 - x0) / 0.5))
            for (let index = 0; index < count; index++) {
              const a = x0 + (x1 - x0) * index / count
              const b = x0 + (x1 - x0) * (index + 1) / count
              // (As low as the lowest ground it lies over: better hidden under a porch than hanging in the air.)
              const y = Math.min(...[0.08, 0.38, wide - 0.05].map((out) => yardHeight(design, ...flat((a + b) / 2, out)))) + 0.012
              sink.shadeOut.strip(spot(a, 0, y), spot(b, 0, y), spot(b, wide, y), spot(a, wide, y), dark)
            }
          }
        }
      }
    }
  }

  // Furniture stands in a little shade of its own; what stands on legs has it underneath.
  const [dark, wide] = SHADE.item
  const lay = (target, thing, y) => {
    const spec = ITEMS[thing.k]
    if (!spec || spec.ceiling || spec.h < 0.2) return
    const turn = (thing.r ?? 0) * Math.PI / 180
    if (thing.k === 'car') target.around(thing.x, y, thing.z, spec.w, spec.d, turn, 0.3, 0.42, 0.42)
    else if (LEGGED.has(thing.k)) target.around(thing.x, y, thing.z, spec.w, spec.d, turn, wide, 0.15, 0.15)
    else target.around(thing.x, y, thing.z, spec.w, spec.d, turn, wide, dark)
  }
  if (sink.shade) {
    for (const thing of storey.items) {
      const floor = shape.heightAt(thing.x, thing.z)
      if (floor != null) lay(sink.shade, thing, base + floor + 0.005)
    }
  }
  if (sink.shadeOut && level === 0) {
    for (const thing of design.yard?.items ?? []) lay(sink.shadeOut, thing, yardHeight(design, thing.x, thing.z) + 0.014)
  }
}

// Furniture that stands on legs, with the floor showing under it.
const LEGGED = new Set(['table-low', 'table-dining', 'chair', 'desk', 'chabudai', 'cafe-table', 'stool', 'office-desk', 'office-chair', 'bench', 'rack', 'bicycle'])


function addSign(group, text, door, y) {
  const { map, aspect } = textTexture(text, { color: '#4b3b30', background: '#fff6e2', border: '#b98a5e', font: '800 72px "Yu Gothic UI", "Hiragino Sans", sans-serif' })
  const width = Math.min(3.4, door.width + 2.2)
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(width, width / aspect),
    new THREE.MeshBasicMaterial({ map, transparent: true, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }))
  sign.userData.ownMaterial = true
  sign.position.set(door.x + door.normal[0] * 0.16, y, door.z + door.normal[1] * 0.16)
  sign.rotation.y = Math.atan2(door.normal[0], door.normal[1])
  group.add(sign)
}

// A building ready for the scene. `group` sits at the north-west corner of the lot.
export function createBuilding(house) {
  const design = designOf(house)
  const levels = design.storeys.length
  const group = new THREE.Group()
  const full = new THREE.Group()
  const cutaway = new THREE.Group()
  const hung = new THREE.Group()
  cutaway.visible = false
  group.add(full, cutaway, hung)
  const inner = new Map()
  const doors = []
  let cutLevel = null
  let near = false
  let wallPaint = finishMaterial('stucco-white')

  // The glass in the leaves of outside doors, which changes with the windows.
  const leafPanes = []

  // Hangs the leaves of a door on their hinges, as objects that can move by themselves.
  function hang(leaves) {
    const byDoor = new Map()
    for (const leaf of leaves) {
      const pivot = new THREE.Group()
      const [dx, dz] = leaf.d
      pivot.position.set(leaf.cx + dx * leaf.x - dz * leaf.z, leaf.base + leaf.y, leaf.cz + dz * leaf.x + dx * leaf.z)
      pivot.rotation.y = leaf.turn + (leaf.mirror ? Math.PI : 0)
      for (const mesh of leaf.batch.build(pivot, { where: leaf.interior ? 'in' : '' })) {
        if (mesh.material !== windowGlass('far')) continue
        mesh.castShadow = false
        leafPanes.push(mesh)
      }
      hung.add(pivot)
      const key = `${leaf.level}|${leaf.cx.toFixed(2)}|${leaf.cz.toFixed(2)}`
      if (!byDoor.has(key)) {
        byDoor.set(key, {
          level: leaf.level, interior: leaf.interior, x: leaf.cx, z: leaf.cz, y: leaf.base, width: leaf.width, auto: leaf.auto, open: 0, parts: [],
          key: doorKey(leaf.level, leaf.cx, leaf.cz),
          // The doors of a lift open for its car, not for whoever walks up to them.
          lift: Boolean(leaf.lift),
        })
        doors.push(byDoor.get(key))
      }
      byDoor.get(key).parts.push({
        pivot, rest: pivot.rotation.y, home: pivot.position.clone(), swing: Boolean(leaf.swing), sign: leaf.dir ?? 0,
        slide: leaf.slide ? new THREE.Vector3(dx, 0, dz).multiplyScalar(leaf.slide) : null,
      })
    }
  }

  function buildFull() {
    const out = new Batch()
    const panes = new Batch()
    const shadeOut = new Shade()
    const leaves = []
    for (let level = 0; level < levels; level++) {
      const drawn = drawStorey(design, level, { out, outHigh: out, panes, shadeOut })
      leaves.push(...drawn.leaves.filter((leaf) => !leaf.interior))
      wallPaint = drawn.wallPaint ?? wallPaint
    }
    for (let level = 0; level < levels; level++) drawRoof(out, design, level, wallPaint)
    // The porch, the steps and the path to each front door, and a canopy over it where one is asked for.
    const base = design.base ?? 0.3
    drawYard(out, design)
    for (const door of frontDoors(design)) {
      if (!door.opening.canopy) continue
      const turn = Math.atan2(door.normal[0], door.normal[1])
      const y = base + door.opening.s + door.opening.hh + 0.22
      out.box(frameMaterial(door.opening.c === 'white' ? 'white' : 'black'), door.x + door.normal[0] * 0.55, y, door.z + door.normal[1] * 0.55, door.width + 0.8, 0.08, 1.0, turn)
    }
    out.build(full, { where: 'out' })
    shadeOut.build(full)
    for (const mesh of panes.build(full, { cast: false })) mesh.userData.glass = mesh.material === windowGlass('far')
    hang(leaves)
    const [front] = frontDoors(design).filter((door) => door.opening.canopy)
    if (house.sign && front) addSign(full, house.sign, front, base + front.opening.s + front.opening.hh + 0.75)
  }

  function buildCut(level) {
    disposeGroup(cutaway)
    const out = new Batch()
    const panes = new Batch()
    const shadeOut = new Shade()
    for (let below = 0; below < level; below++) drawStorey(design, below, { out, outHigh: out, panes, shadeOut })
    drawStorey(design, level, { out, outHigh: null, panes, split: true, shadeOut })
    out.build(cutaway, { where: 'out' })
    shadeOut.build(cutaway)
    for (const mesh of panes.build(cutaway, { cast: false })) mesh.userData.glass = mesh.material === windowGlass('far')
  }

  function buildInner(level) {
    const low = new THREE.Group()
    const high = new THREE.Group()
    const cap = new THREE.Group()
    const inside = new Batch()
    const insideHigh = new Batch()
    const caps = new Batch()
    const shade = new Shade()
    const shadeHigh = new Shade()
    const drawn = drawStorey(design, level, { inside, insideHigh, cap: caps, split: true, shade, shadeHigh })
    inside.build(low, { where: 'in' })
    insideHigh.build(high, { where: 'in' })
    shade.build(low)
    shadeHigh.build(high)
    caps.build(cap, { cast: false })
    group.add(low, high, cap)
    hang(drawn.leaves.filter((leaf) => leaf.interior))
    for (const lift of lifts ?? []) {
      // Lift doors hung just now stand as far open as their lift has them.
      const door = liftDoor(lift, level)
      if (door) {
        door.open = lift.wide.get(level) ?? 0
        slide(door)
      }
      // On the landing: the indicator over the doors and the call buttons beside them.
      const stop = lift.stops.find((entry) => entry.level === level)
      if (!stop) continue
      const fixtures = lift.look.hall(stop)
      low.add(fixtures.low)
      high.add(fixtures.high)
    }
    return { low, high, cap }
  }

  function refresh() {
    const cutting = cutLevel !== null
    full.visible = !cutting
    cutaway.visible = cutting
    const glassMaterial = windowGlass(near ? 'near' : 'far')
    for (const part of [full, cutaway]) {
      for (const mesh of part.children) if (mesh.userData.glass) mesh.material = glassMaterial
    }
    for (const mesh of leafPanes) mesh.material = glassMaterial
    for (const door of doors) {
      const shown = door.interior ? Boolean(inner.get(door.level)?.low.visible) && door.level !== cutLevel : !cutting || door.level < cutLevel
      for (const part of door.parts) part.pivot.visible = shown
    }
  }

  buildFull()
  refresh()

  // Lifts: one car to a shaft, stopping at every storey that has a door for it.
  const lifts = []
  for (let level = 0; level < levels; level++) {
    for (const stop of colliders(design, level).lifts) {
      let lift = lifts.find((entry) => Math.hypot(entry.x - stop.x, entry.z - stop.z) < 0.3)
      if (!lift) {
        lift = { x: stop.x, z: stop.z, w: stop.w, d: stop.d, r: stop.r, stops: [], wide: new Map() }
        lifts.push(lift)
      }
      lift.stops.push({ level, y: floorHeight(design, level), at: stop.at, out: stop.out, half: stop.half, gate: stop.gate })
    }
  }
  for (const lift of lifts) {
    lift.look = buildLift(lift)
    group.add(lift.look.car)
  }
  const slide = (door) => {
    for (const part of door.parts) if (part.slide) part.pivot.position.copy(part.home).addScaledVector(part.slide, door.open)
  }
  const liftDoor = (lift, level) => {
    const stop = lift.stops.find((entry) => entry.level === level)
    return stop && doors.find((door) => door.lift && door.level === level && Math.hypot(door.x - stop.at[0], door.z - stop.at[1]) < 0.4)
  }
  const bounds = boundsOf(design)
  const roof = design.roof ?? { k: 'flat' }
  // How far the roof rises above the top storey: a parapet, or the ridge of a pitched roof.
  const crown = roof.k === 'flat' ? roof.parapet ?? 0.4
    : Math.min(7, Math.min(bounds.x1 - bounds.x0, bounds.z1 - bounds.z0) / 2) * Math.tan((roof.pitch ?? 30) * Math.PI / 180)
  return {
    group, design, doors, bounds, levels, height: heightOf(design) + crown,
    // The colour of its outside walls, for how it shows in the windows of other buildings.
    tint: wallPaint.color,
    // `close`: someone is near enough to see indoors. `level`: the storey the viewer stands on,
    // if they are inside this building. `cut`: look into that storey from above.
    show({ close = false, level = null, cut = false }) {
      const cutting = cut && level !== null
      if (cutting && cutLevel !== level) buildCut(level)
      cutLevel = cutting ? level : null
      near = close
      const wanted = new Set()
      if (close) {
        // Looking into a storey from above, the one below shows through the stairwells.
        if (cutting) [level - 1, level].filter((index) => index >= 0).forEach((index) => wanted.add(index))
        else if (level !== null) [level - 1, level, level + 1].filter((index) => index >= 0 && index < levels).forEach((index) => wanted.add(index))
        else [0, 1].filter((index) => index < levels).forEach((index) => wanted.add(index))
      }
      for (const index of wanted) if (!inner.has(index)) inner.set(index, buildInner(index))
      for (const [index, parts] of inner) {
        const shown = wanted.has(index)
        parts.low.visible = shown
        parts.high.visible = shown && !(cutting && index === level)
        parts.cap.visible = shown && cutting && index === level
      }
      refresh()
    },
    // Opens and closes doors: `amount(door)` says how far each should be open, from 0 to 1.
    swing(delta, amount) {
      for (const door of doors) {
        if (door.lift) continue
        const wanted = amount(door)
        if (Math.abs(wanted - door.open) < 0.001) continue
        door.open += (wanted - door.open) * (1 - Math.exp(-9 * delta))
        for (const part of door.parts) {
          if (part.swing) part.pivot.rotation.y = part.rest + part.sign * door.open * 1.5
          else if (part.slide) part.pivot.position.copy(part.home).addScaledVector(part.slide, door.open)
        }
      }
    },
    // Each lift: where it stops, and the means to move its car and its doors.
    lifts: lifts.map((lift) => ({
      x: lift.x, z: lift.z, w: lift.w, d: lift.d, r: lift.r, stops: lift.stops,
      setCar(y) {
        lift.look.setCar(y)
      },
      // How far the doors on a storey stand open, from 0 to 1.
      setDoor(level, amount) {
        if (lift.wide.get(level) === amount) return
        lift.wide.set(level, amount)
        const door = liftDoor(lift, level)
        if (!door) return
        door.open = amount
        slide(door)
      },
      // The doors of the car itself, what its indicators show, and the button a ray points at.
      setCarDoor: (amount) => lift.look.setDoor(amount),
      show: (state) => lift.look.show(state),
      pick: (origin, direction, reach) => lift.look.pick(origin, direction, reach),
    })),
    dispose() {
      for (const lift of lifts) lift.look.dispose()
      disposeGroup(group)
    },
  }
}
