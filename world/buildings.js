// Draws a building from its design: walls with their finishes on both faces, doors and windows,
// floors, ceilings, stairs, furniture and the roof. Outside and inside are one model at real
// scale, so a resident walks in through the door. To keep a whole town light, the inside of a
// storey is only built when someone is near enough to see it.
import * as THREE from 'three'
import { CUT, OPENINGS, boundsOf, boxCorners, designOf, frontDoors, heightOf, inRoom, storeyShape } from './design.js'
import { windowGlass } from './glass.js'
import { drawItem } from './items.js'
import { Batch, disposeGroup, finishMaterial, frameMaterial, material, textTexture } from './kit.js'

export { ROOM_COLORS, ROOM_LABELS, STYLE_FLOORS, STYLE_LABELS } from './design.js'

export const SHOP_HOUSES = {
  shop: { id: 'shop', kind: 'shop', style: 'shop', w: 1, d: 1, sign: 'ひだまり洋品店', floors: ['MMMMMMMMMMMMMMMMMGMM.....'] },
  cafe: { id: 'cafe', kind: 'cafe', style: 'shop', w: 1, d: 1, sign: 'こもれび喫茶', floors: ['MMMMMMMMMMMMMMMMMGMM.....'] },
}

const UP = new THREE.Vector3(0, 1, 0)
const DOWN = new THREE.Vector3(0, -1, 0)
const at = ([x, z], y) => new THREE.Vector3(x, y, z)
const section = () => material('#3a4046', '#ffffff', { roughness: 0.9 })
const footing = () => material('concrete', '#b9b6ae')
const steel = () => material('#5b6266', '#ffffff', { roughness: 0.5, metalness: 0.6 })
const DROP = 0.22 // how far a ceiling hangs below the floor above

// A stretch of wall as a solid between two heights. `narrow` thins it towards its middle line.
function prism(batch, paint, piece, y0, y1, { narrow = 1, top = true } = {}) {
  const lean = (point, other) => [(point[0] + other[0]) / 2 + (point[0] - other[0]) / 2 * narrow, (point[1] + other[1]) / 2 + (point[1] - other[1]) / 2 * narrow]
  const l0 = lean(piece.l[0], piece.r[0])
  const l1 = lean(piece.l[1], piece.r[1])
  const r0 = lean(piece.r[0], piece.l[0])
  const r1 = lean(piece.r[1], piece.l[1])
  batch.quad(paint, at(l0, y0), at(l1, y0), at(l1, y1), at(l0, y1), new THREE.Vector3(piece.d[1], 0, -piece.d[0]))
  batch.quad(paint, at(r0, y0), at(r1, y0), at(r1, y1), at(r0, y1), new THREE.Vector3(-piece.d[1], 0, piece.d[0]))
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
  prism(batch, body, piece, base - skirt, base + 0.001, { top: false })
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
    prism(panes, windowGlass(true), piece, base + 0.12, base + height - 0.08, { narrow: 0.25, top: false })
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

// A flight of steps along z in the stairs' own frame, climbing from (zFrom, yFrom) to (zTo, yTo).
function flight(b, x, zFrom, zTo, yFrom, yTo, wide, solid) {
  const steps = Math.max(2, Math.round((yTo - yFrom) / 0.19))
  const going = (zTo - zFrom) / steps
  const rise = (yTo - yFrom) / steps
  const tread = material('planks', '#b08a62')
  const body = material('#ddd8cc', '#ffffff', { roughness: 0.9 })
  for (let step = 0; step < steps; step++) {
    const top = yFrom + rise * (step + 1)
    const z = zFrom + going * (step + 0.5)
    b.box(tread, x, top - 0.02, z, wide, 0.04, Math.abs(going) + 0.03)
    const bottom = solid ? 0 : top - 0.04 - rise
    b.box(body, x, (top - 0.04 + bottom) / 2, z, wide - 0.04, top - 0.04 - bottom, Math.abs(going))
  }
}

function drawStairs(batch, stair, rise, base) {
  batch.at(stair.x, base, stair.z, stair.r * Math.PI / 180, (b) => {
    const { w, l } = stair
    if (stair.k !== 'u') {
      flight(b, 0, l / 2, -l / 2, 0, rise, w - 0.06, true)
      return
    }
    const landing = Math.min(w / 2, l * 0.42)
    const wide = w / 2 - 0.05
    flight(b, -w / 4, l / 2, -l / 2 + landing, 0, rise / 2, wide, true)
    b.box(material('planks', '#b08a62'), 0, rise / 2 - 0.03, -l / 2 + landing / 2, w - 0.02, 0.06, landing)
    flight(b, w / 4, -l / 2 + landing, l / 2, rise / 2, rise, wide, false)
    // The flights turn round a slim wall that carries the handrail.
    b.box(material('#ddd8cc', '#ffffff', { roughness: 0.9 }), 0, (rise + 0.9) / 2, landing / 2, 0.06, rise + 0.9, l - landing)
  })
}

// The well of a flight of stairs seen from the storey it arrives at: a rail round the hole,
// open where the walker steps off.
function drawWell(batch, stair, base) {
  batch.at(stair.x, base, stair.z, stair.r * Math.PI / 180, (b) => {
    const { w, l } = stair
    const rail = steel()
    const bar = (x, z, width, depth) => {
      b.box(rail, x, 0.92, z, width, 0.05, depth)
      b.box(rail, x, 0.46, z, width, 0.03, depth)
    }
    bar(-w / 2, 0, 0.04, l)
    bar(w / 2, 0, 0.04, l)
    if (stair.k === 'u') {
      bar(0, -l / 2, w, 0.04)
      bar(-w / 4, l / 2, w / 2, 0.04)
    } else bar(0, l / 2, w, 0.04)
    for (const [x, z] of [[-w / 2, -l / 2], [w / 2, -l / 2], [-w / 2, l / 2], [w / 2, l / 2]]) b.box(rail, x, 0.47, z, 0.04, 0.94, 0.04)
  })
}

const LEAVES = {
  'door-entrance': { swing: 1, look: 'slit' }, 'door-wood': { swing: 1, look: 'panel' }, 'door-white': { swing: 1, look: 'panel' },
  'door-steel': { swing: 1, look: 'flat' }, 'door-glass': { swing: 1, look: 'glass' }, 'door-double': { swing: 2, look: 'panel' },
  'door-slide': { slide: 1, look: 'panel' }, 'door-fusuma': { slide: 2, look: 'fusuma' }, 'door-shoji': { slide: 2, look: 'shoji' },
  'door-auto': { slide: 2, apart: true, look: 'glass' }, 'door-terrace': { slide: 2, look: 'glass' },
}

// One door leaf, drawn from its hinge edge (x = 0) to its free edge, standing on y = 0.
function drawLeaf(look, width, height, paint) {
  const b = new Batch()
  const middle = width / 2
  const handle = () => {
    for (const z of [-0.04, 0.04]) b.box(steel(), width - 0.08, 1.0, z, 0.03, 0.14, 0.03)
  }
  if (look === 'glass') {
    for (const x of [0.03, width - 0.03]) b.box(paint, x, height / 2, 0, 0.06, height, 0.04)
    for (const y of [0.04, height - 0.04]) b.box(paint, middle, y, 0, width - 0.12, 0.08, 0.04)
    b.face(windowGlass(true), [new THREE.Vector3(0.06, 0.08, 0), new THREE.Vector3(width - 0.06, 0.08, 0), new THREE.Vector3(width - 0.06, height - 0.08, 0), new THREE.Vector3(0.06, height - 0.08, 0)])
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
    if (look === 'panel') {
      for (const y of [height * 0.28, height * 0.72]) {
        for (const z of [-0.022, 0.022]) b.box(paint, middle, y, z, width * 0.66, height * 0.34, 0.006)
      }
    } else if (look === 'slit') {
      for (const z of [-0.022, 0.022]) b.box(windowGlass(false), width * 0.3, height * 0.56, z, 0.12, height * 0.56, 0.006)
    }
    handle()
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
  const bar = entry.k === 'win-curtain' || entry.k === 'win-shop' ? 0.035 : 0.05
  const trim = entry.k === 'win-shutter' ? frameMaterial('white') : frame
  const foot = shape.door ? s : s + bar
  for (const x of [-w / 2 + bar / 2, w / 2 - bar / 2]) b.box(trim, x, (foot + s + h) / 2, 0, bar, s + h - foot, deep)
  b.box(trim, 0, s + h - bar / 2, 0, w - bar * 2, bar, deep)
  if (shape.door) b.box(material('#8f8d87', '#ffffff', { roughness: 0.7 }), 0, s + 0.008, 0, w - bar * 2, 0.016, deep)
  else b.box(trim, 0, s + bar / 2, outward * 0.03, w + (outward ? 0.08 : 0), bar, deep + (outward ? 0.06 : 0))

  const inner = w - bar * 2
  const tall = h - bar * 2
  const glassMaterial = windowGlass(false)
  const pane = (x0, x1, y0, y1, z = 0) => panes.face(glassMaterial, [new THREE.Vector3(x0, y0, z), new THREE.Vector3(x1, y0, z), new THREE.Vector3(x1, y1, z), new THREE.Vector3(x0, y1, z)])
  const mullion = (x) => b.box(trim, x, middle, 0, 0.035, tall, 0.05)
  const transom = (y) => b.box(trim, 0, y, 0, inner, 0.035, 0.05)
  if (!shape.door) {
    const kind = entry.k
    if (kind === 'win-round') {
      b.box(trim, 0, middle, 0, inner, tall, 0.03)
      const radius = Math.min(inner, tall) / 2 - 0.05
      for (const z of [-0.018, 0.018]) {
        panes.face(glassMaterial, Array.from({ length: 18 }, (_, index) => {
          const angle = index / 18 * Math.PI * 2 * Math.sign(z)
          return new THREE.Vector3(Math.cos(angle) * radius, middle + Math.sin(angle) * radius, z)
        }))
      }
      return []
    }
    pane(-inner / 2, inner / 2, s + bar, s + h - bar)
    if (['win-slide', 'win-full', 'win-steel', 'win-lattice', 'win-shutter'].includes(kind)) mullion(0)
    if (kind === 'win-wide') {
      mullion(-inner / 6)
      mullion(inner / 6)
    }
    if (kind === 'win-steel') transom(s + h * 0.72)
    if (kind === 'win-shutter') {
      transom(middle)
      if (outward) {
        for (const x of [-w / 2 - 0.15, w / 2 + 0.15]) {
          b.box(frame, x, middle, outward * (thick / 2 + 0.03), 0.27, h, 0.04)
          for (let slat = 1; slat < 8; slat++) b.box(frame, x, s + h * slat / 8, outward * (thick / 2 + 0.055), 0.21, 0.02, 0.012)
        }
      }
    }
    if (kind === 'win-lattice' && outward) {
      const z = outward * (thick / 2 + 0.035)
      for (let slat = 1; slat < 8; slat++) b.box(frame, -w / 2 + w * slat / 8, middle, z, 0.028, h, 0.028)
      for (const y of [s + 0.06, s + h - 0.06]) b.box(frame, 0, y, z, w, 0.04, 0.035)
    }
    if (kind === 'win-hood' && outward) {
      const z = outward * (thick / 2 + 0.16)
      for (const x of [-w / 2 - 0.1, w / 2 + 0.1]) b.box(hoodPaint, x, middle, z, 0.2, h + 0.36, 0.32)
      b.box(hoodPaint, 0, s + h + 0.09, z, w, 0.18, 0.32)
    }
    if (kind === 'win-shop') b.box(trim, 0, s - 0.06, outward * 0.02, w, 0.12, deep + 0.02)
    return []
  }

  // Doors: the leaves are made apart from the wall, so that they can swing or slide.
  const style = LEAVES[entry.k] ?? LEAVES['door-wood']
  const paint = style.look === 'glass' ? frame : frameMaterial(entry.c ?? 'wood')
  const leafHeight = h - bar - 0.02
  const inside = outward ? -outward : 1
  if (style.swing === 1) {
    const hinge = entry.flip ? inner / 2 : -inner / 2
    return [{ swing: true, x: hinge, y: s + 0.016, z: 0, mirror: Boolean(entry.flip), batch: drawLeaf(style.look, inner, leafHeight, paint), dir: (entry.flip ? -1 : 1) * (inside > 0 ? -1 : 1) }]
  }
  if (style.swing === 2) {
    return [-1, 1].map((side) => ({
      swing: true, x: side * inner / 2, y: s + 0.016, z: 0, mirror: side > 0, batch: drawLeaf(style.look, inner / 2, leafHeight, paint),
      dir: (side > 0 ? -1 : 1) * (inside > 0 ? -1 : 1),
    }))
  }
  if (style.apart) {
    // Glass panels that part in the middle and slide along the wall on its inner face.
    return [-1, 1].map((side) => ({
      slide: side * (inner / 2 - 0.04), x: side < 0 ? -inner / 2 : 0, y: s + 0.016, z: inside * (thick / 2 + 0.035),
      batch: drawLeaf(style.look, inner / 2, leafHeight, paint),
    }))
  }
  if (style.slide === 2) {
    return [0, 1].map((index) => ({
      slide: index ? 0 : inner / 2 - 0.05, x: index ? 0 : -inner / 2, y: s + 0.016, z: (index ? 1 : -1) * 0.022,
      batch: drawLeaf(style.look, inner / 2 + 0.02, leafHeight, paint),
    }))
  }
  return [{ slide: inner - 0.06, x: -inner / 2, y: s + 0.016, z: inside * (thick / 2 + 0.03), batch: drawLeaf(style.look, inner, leafHeight, paint) }]
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
      if (wall.rail || (wall.h ?? shape.storey.h) < shape.storey.h - 0.01) continue
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
      heights.set(key, top + Math.min(nearest, 7) * slope)
    }
    return heights.get(key)
  }
  const corner = (i, j) => new THREE.Vector3(xs[i], rise(i, j), zs[j])
  const upward = (points) => {
    const a = points[1].clone().sub(points[0])
    const b = points[2].clone().sub(points[0])
    batch.face(paint, a.cross(b).y < 0 ? [...points].reverse() : points)
  }
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
    return new THREE.Vector3(xs[i] + push[0] * reach, top - reach * slope, zs[j] + push[1] * reach)
  }
  for (const edge of eaves) upward([corner(...edge.a), corner(...edge.b), tip(edge.b, edge.normal), tip(edge.a, edge.normal)])
  // A gable end, or the tall side of a single slope, is closed with the wall's own finish.
  for (const edge of edges) {
    if (!edge.open || isEave(edge)) continue
    const a = corner(...edge.a)
    const b = corner(...edge.b)
    if (a.y - top < 0.01 && b.y - top < 0.01) continue
    batch.quad(wallPaint, new THREE.Vector3(a.x, top, a.z), new THREE.Vector3(b.x, top, b.z), b, a, new THREE.Vector3(edge.normal[0], 0, edge.normal[1]))
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
      // Outside, the wall goes on down to the street (or covers the edge of a balcony slab).
      if (!indoor) {
        outdoorPaint.value ??= main
        if (level === 0 && base > 0.001) bands.push([-base, 0, footing()])
        else if (wall.rail) bands.push([-0.15, 0, main])
      }
      const lower = wall[`${side}l`]
      if (lower && wallTop > 1.05) bands.push([0, 1, finishMaterial(lower)], [1, wallTop, main])
      else bands.push([0, wallTop, main])
      wallFace(piece, side, holes, bands, wallTop, base, low, high, split)
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

  // Balconies and terraces are floors without a room: they belong to the outside.
  if (sink.out) {
    for (const room of shape.rooms) {
      if (!room.open) continue
      sink.out.shape(finishMaterial(room.f), room.points, room.holes, base + 0.001, true)
      if (level > 0) sink.out.shape(material('concrete', '#d9d6cd'), room.points, room.holes, base - 0.15, false)
    }
  }

  if (sink.inside) {
    const below = level > 0 ? storeyShape(design, level - 1).storey.stairs : []
    const wells = (room, stairs) => stairs.filter((stair) => inRoom(room, stair.x, stair.z)).map((stair) => boxCorners(stair.x, stair.z, stair.w + 0.02, stair.l + 0.02, stair.r))
    for (const room of shape.rooms) {
      if (room.open) continue
      sink.inside.shape(finishMaterial(room.f), room.points, [...room.holes, ...wells(room, below)], base, true)
      // The stairs going up pass through the ceiling; the stairs from below arrive through the floor.
      const ceiling = sink.insideHigh ?? sink.inside
      const up = level + 1 < design.storeys.length ? storey.stairs : []
      ceiling.shape(finishMaterial(room.c), room.points, [...room.holes, ...wells(room, up)], base + storey.h - DROP, false)
    }
    for (const stair of below) {
      // The edge of the floor round the well, and a rail to keep walkers out of it.
      const corners = boxCorners(stair.x, stair.z, stair.w + 0.02, stair.l + 0.02, stair.r)
      corners.forEach((corner, index) => {
        const next = corners[(index + 1) % 4]
        const inward = new THREE.Vector3(stair.x - (corner[0] + next[0]) / 2, 0, stair.z - (corner[1] + next[1]) / 2).normalize()
        sink.inside.quad(material('#e6e1d6', '#ffffff', { roughness: 0.9 }), at(corner, base - DROP), at(next, base - DROP), at(next, base), at(corner, base), inward)
      })
      drawWell(sink.inside, stair, base)
    }
    if (level + 1 < design.storeys.length) for (const stair of storey.stairs) drawStairs(sink.inside, stair, storey.h, base)
    for (const thing of storey.items) {
      const high = thing.k === 'ceiling-light'
      const target = high ? sink.insideHigh ?? sink.inside : sink.inside
      target.at(thing.x, base + (high ? storey.h - DROP - 0.1 : 0), thing.z, (thing.r ?? 0) * Math.PI / 180, (b) => drawItem(b, thing.k, thing.x, thing.z))
    }
  }
  return { leaves, wallPaint: outdoorPaint.value }
}

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

  // Hangs the leaves of a door on their hinges, as objects that can move by themselves.
  function hang(leaves) {
    const byDoor = new Map()
    for (const leaf of leaves) {
      const pivot = new THREE.Group()
      const [dx, dz] = leaf.d
      pivot.position.set(leaf.cx + dx * leaf.x - dz * leaf.z, leaf.base + leaf.y, leaf.cz + dz * leaf.x + dx * leaf.z)
      pivot.rotation.y = leaf.turn + (leaf.mirror ? Math.PI : 0)
      leaf.batch.build(pivot)
      hung.add(pivot)
      const key = `${leaf.level}|${leaf.cx.toFixed(2)}|${leaf.cz.toFixed(2)}`
      if (!byDoor.has(key)) {
        byDoor.set(key, { level: leaf.level, interior: leaf.interior, x: leaf.cx, z: leaf.cz, y: leaf.base, width: leaf.width, auto: leaf.auto, open: 0, parts: [] })
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
    const leaves = []
    for (let level = 0; level < levels; level++) {
      const drawn = drawStorey(design, level, { out, outHigh: out, panes })
      leaves.push(...drawn.leaves.filter((leaf) => !leaf.interior))
      wallPaint = drawn.wallPaint ?? wallPaint
    }
    for (let level = 0; level < levels; level++) drawRoof(out, design, level, wallPaint)
    // A step up to each front door, a path to the edge of the lot, and a canopy where one is asked for.
    const lot = { w: (house.w ?? 1) * 8, d: (house.d ?? 1) * 8 }
    const base = design.base ?? 0.18
    for (const door of frontDoors(design)) {
      const turn = Math.atan2(door.normal[0], door.normal[1])
      if (base > 0.06) out.box(footing(), door.x + door.normal[0] * 0.47, base / 2, door.z + door.normal[1] * 0.47, door.width + 0.5, base, 0.8, turn)
      if (base > 0.22) out.box(footing(), door.x + door.normal[0] * 1.02, base / 4, door.z + door.normal[1] * 1.02, door.width + 0.5, base / 2, 0.34, turn)
      const edge = door.normal[0] > 0.9 ? lot.w - door.x : door.normal[0] < -0.9 ? door.x : door.normal[1] > 0.9 ? lot.d - door.z : door.normal[1] < -0.9 ? door.z : 0
      const start = base > 0.22 ? 1.19 : 0.87
      if (edge > start + 0.2) {
        const middle = (start + edge) / 2
        out.box(material('pavers', '#e6e0d2'), door.x + door.normal[0] * middle, 0.03, door.z + door.normal[1] * middle, Math.max(1.1, door.width + 0.2), 0.06, edge - start, turn)
      }
      if (door.opening.canopy) {
        const y = base + door.opening.s + door.opening.hh + 0.28
        out.box(frameMaterial(door.opening.c === 'white' ? 'white' : 'black'), door.x + door.normal[0] * 0.5, y, door.z + door.normal[1] * 0.5, door.width + 0.7, 0.07, 0.9, turn)
      }
    }
    out.build(full)
    for (const mesh of panes.build(full, { cast: false })) mesh.userData.glass = true
    hang(leaves)
    const [front] = frontDoors(design)
    if (house.sign && front) addSign(full, house.sign, front, base + front.opening.s + front.opening.hh + 0.75)
  }

  function buildCut(level) {
    disposeGroup(cutaway)
    const out = new Batch()
    const panes = new Batch()
    for (let below = 0; below < level; below++) drawStorey(design, below, { out, outHigh: out, panes })
    drawStorey(design, level, { out, outHigh: null, panes, split: true })
    out.build(cutaway)
    for (const mesh of panes.build(cutaway, { cast: false })) mesh.userData.glass = true
  }

  function buildInner(level) {
    const low = new THREE.Group()
    const high = new THREE.Group()
    const cap = new THREE.Group()
    const inside = new Batch()
    const insideHigh = new Batch()
    const caps = new Batch()
    const drawn = drawStorey(design, level, { inside, insideHigh, cap: caps, split: true })
    inside.build(low)
    insideHigh.build(high)
    caps.build(cap, { cast: false })
    group.add(low, high, cap)
    hang(drawn.leaves.filter((leaf) => leaf.interior))
    return { low, high, cap }
  }

  function refresh() {
    const cutting = cutLevel !== null
    full.visible = !cutting
    cutaway.visible = cutting
    const glassMaterial = windowGlass(near)
    for (const part of [full, cutaway]) {
      for (const mesh of part.children) if (mesh.userData.glass) mesh.material = glassMaterial
    }
    for (const door of doors) {
      const shown = door.interior ? Boolean(inner.get(door.level)?.low.visible) && door.level !== cutLevel : !cutting || door.level < cutLevel
      for (const part of door.parts) part.pivot.visible = shown
    }
  }

  buildFull()
  refresh()
  const bounds = boundsOf(design)
  const roof = design.roof ?? { k: 'flat' }
  // How far the roof rises above the top storey: a parapet, or the ridge of a pitched roof.
  const crown = roof.k === 'flat' ? roof.parapet ?? 0.4
    : Math.min(7, Math.min(bounds.x1 - bounds.x0, bounds.z1 - bounds.z0) / 2) * Math.tan((roof.pitch ?? 30) * Math.PI / 180)
  return {
    group, design, doors, bounds, levels, height: heightOf(design) + crown,
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
        const wanted = amount(door)
        if (Math.abs(wanted - door.open) < 0.001) continue
        door.open += (wanted - door.open) * (1 - Math.exp(-9 * delta))
        for (const part of door.parts) {
          if (part.swing) part.pivot.rotation.y = part.rest + part.sign * door.open * 1.5
          else if (part.slide) part.pivot.position.copy(part.home).addScaledVector(part.slide, door.open)
        }
      }
    },
    dispose() {
      disposeGroup(group)
    },
  }
}
