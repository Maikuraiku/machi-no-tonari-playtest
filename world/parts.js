// Parts of a building that are more than walls: stairs with their treads, risers and
// handrails, short flights of steps, the car of a lift, and what stands on the land round the
// house (porch, path, parking). All of it is drawn at real size from the design.
import * as THREE from 'three'
import { stairLayout, yardHeight } from './design.js?v=online-1794980046418'
import { drawItem } from './items.js?v=online-1794980046418'
import { finishMaterial, glow, hash, material } from './kit.js?v=online-1794980046418'

const UP = new THREE.Vector3(0, 1, 0)
const at = ([x, z], y) => new THREE.Vector3(x, y, z)

// A bar of rectangular section from one point to another, at any slope.
export function beam(batch, paint, a, b, width, height) {
  batch.bar(paint, a, b, width, height)
}

// A solid with the plan `poly` between two heights. The edge `nose` gets its own paint.
export function block(batch, top, side, poly, y0, y1, { nose = null, front = side, bottom = true } = {}) {
  batch.shape(top, poly, [], y1, true)
  if (bottom) batch.shape(side, poly, [], y0, false)
  const cx = poly.reduce((sum, point) => sum + point[0], 0) / poly.length
  const cz = poly.reduce((sum, point) => sum + point[1], 0) / poly.length
  const same = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]) < 1e-4
  poly.forEach((p, index) => {
    const q = poly[(index + 1) % poly.length]
    const facing = new THREE.Vector3(q[1] - p[1], 0, p[0] - q[0])
    if (facing.x * ((p[0] + q[0]) / 2 - cx) + facing.z * ((p[1] + q[1]) / 2 - cz) < 0) facing.negate()
    const riser = nose && ((same(p, nose[0]) && same(q, nose[1])) || (same(p, nose[1]) && same(q, nose[0])))
    batch.quad(riser ? front : side, at(p, y0), at(q, y0), at(q, y1), at(p, y1), facing)
  })
}

// One step of a closed flight: level on top, with a riser in front, and underneath it the
// sloping soffit of the flight, so that the steps of a run make one slab seen from below.
// `poly` is [left front, left back, right back, right front].
function wedge(batch, paint, poly, top, riser, waist) {
  const [lf, lb, rb, rf] = poly
  const front = top - riser - waist
  const back = top - waist
  const centre = [(lf[0] + lb[0] + rb[0] + rf[0]) / 4, (lf[1] + lb[1] + rb[1] + rf[1]) / 4]
  const away = (p, q) => new THREE.Vector3((p[0] + q[0]) / 2 - centre[0], 0, (p[1] + q[1]) / 2 - centre[1])
  batch.quad(paint.tread, at(lf, top), at(lb, top), at(rb, top), at(rf, top), UP)
  batch.quad(paint.riser ?? paint.side, at(lf, front), at(rf, front), at(rf, top), at(lf, top), away(lf, rf))
  batch.quad(paint.side, at(lf, front), at(lb, back), at(lb, top), at(lf, top), away(lf, lb))
  batch.quad(paint.side, at(rf, front), at(rb, back), at(rb, top), at(rf, top), away(rf, rb))
  batch.quad(paint.side, at(lf, front), at(rf, front), at(rb, back), at(lb, back), new THREE.Vector3(0, -1, 0))
}

const metal = (colour, roughness = 0.45) => material(colour, '#ffffff', { roughness, metalness: 0.7 })
// What each way of building a stair is made of.
const STAIR_PAINT = {
  wood: () => ({
    tread: material('planks', '#b98f63'), riser: material('#f1ece0', '#ffffff', { roughness: 0.85 }), side: material('#ebe5d8', '#ffffff', { roughness: 0.9 }),
    rail: material('wood', '#8a6a4c'), post: material('wood', '#8a6a4c'),
  }),
  open: () => ({ tread: material('planks', '#a9825a'), side: metal('#2b2f33'), rail: metal('#2b2f33'), post: metal('#2b2f33'), open: true }),
  rc: () => ({
    tread: material('concrete', '#c9c6bd'), riser: material('concrete', '#c2bfb6'), side: material('concrete', '#c2bfb6'),
    rail: metal('#6b7377'), post: metal('#6b7377'), nose: material('#55585a', '#ffffff', { roughness: 0.95 }),
  }),
  steel: () => ({ tread: metal('#585f63', 0.6), side: metal('#4d5458', 0.55), rail: metal('#4d5458'), post: metal('#4d5458'), open: true }),
  stone: () => ({
    tread: material('stone', '#d8d4ca'), riser: material('stone', '#c6c2b8'), side: material('stone', '#c6c2b8'),
    rail: metal('#3d4447'), post: metal('#3d4447'),
  }),
}

// Points [x, z, height] along one edge of a stair, drawn in from the edge by `inset`.
function edgeLine(layout, which, inset, stride = 0.3) {
  const spots = new Set([0, layout.total])
  for (let s = stride; s < layout.total - 0.05; s += stride) spots.add(s)
  // On the inside of a turn the edge is one point, the newel: nothing is measured in between.
  const turns = layout.corners.filter((corner) => corner.inner === which)
  for (const corner of layout.corners) {
    spots.add(Math.max(0, corner.s - corner.half))
    spots.add(Math.min(layout.total, corner.s + corner.half))
  }
  const marks = [...spots].filter((s) => !turns.some((corner) => Math.abs(s - corner.s) < corner.half - 1e-6)).sort((a, b) => a - b)
    .filter((s, index, all) => !index || s - all[index - 1] > 1e-6)
  const points = []
  for (let index = 1; index < marks.length; index++) {
    const stretch = layout.side(marks[index - 1], marks[index], which)
    stretch.forEach((point, step) => {
      if (index > 1 && step === 0) return
      const s = step === 0 ? marks[index - 1] : step === stretch.length - 1 ? marks[index] : (marks[index - 1] + marks[index]) / 2
      const middle = layout.centre(s)
      const reach = Math.hypot(middle[0] - point[0], middle[1] - point[1]) || 1
      const inward = [(middle[0] - point[0]) / reach, (middle[1] - point[1]) / reach]
      points.push({ x: point[0] + inward[0] * inset, z: point[1] + inward[1] * inset, y: layout.ramp(s), out: [point[0] - inward[0] * 0.1, point[1] - inward[1] * 0.1] })
    })
  }
  return points
}

// A flight of stairs standing on the floor at height `base`. `walled(x, z)` says whether a
// wall stands at a spot: there the handrail is fixed to the wall, elsewhere it stands on posts.
export function drawStair(batch, stair, rise, base, walled = () => false) {
  const layout = stairLayout(stair, rise)
  const paint = (STAIR_PAINT[layout.look] ?? STAIR_PAINT.wood)()
  // A spiral stair winds round a post, which carries its steps and stands up to the rail above.
  if (layout.spiral) batch.cylinder(paint.post, stair.x, base, stair.z, 0.065, rise + 0.95, 12)
  for (const surface of layout.surfaces) {
    const top = base + surface.y
    // Closed stairs are a sloping slab with the steps on it; open ones are planks on strings.
    const waist = layout.look === 'rc' ? 0.14 : 0.05
    if (!paint.open && surface.kind === 'tread' && surface.poly.length === 4) wedge(batch, paint, surface.poly, top, layout.riser, waist)
    else {
      // (A landing reaches down past the step before it, so that no slit shows between them.)
      const deep = paint.open ? 0.045 : surface.kind === 'landing' ? Math.max(waist, layout.riser) + 0.03 : layout.riser + waist
      block(batch, paint.tread, paint.side, surface.poly, top - deep, top, { nose: surface.nose, front: paint.riser ?? paint.side })
    }
    if (paint.nose && surface.nose) {
      // A dark non-slip strip along the edge of each concrete step.
      const cx = surface.poly.reduce((sum, point) => sum + point[0], 0) / surface.poly.length
      const cz = surface.poly.reduce((sum, point) => sum + point[1], 0) / surface.poly.length
      const [p, q] = surface.nose
      const inward = new THREE.Vector3(cx - (p[0] + q[0]) / 2, 0, cz - (p[1] + q[1]) / 2).normalize().multiplyScalar(0.03)
      beam(batch, paint.nose, at(p, top + 0.003).add(inward), at(q, top + 0.003).add(inward), 0.045, 0.006)
    }
  }
  for (const which of [1, -1]) {
    if (paint.open) {
      // The strings that carry open treads.
      const line = edgeLine(layout, which, 0.04)
      for (let index = 1; index < line.length; index++) {
        const [a, b] = [line[index - 1], line[index]]
        beam(batch, paint.side, new THREE.Vector3(a.x, base + a.y - 0.16, a.z), new THREE.Vector3(b.x, base + b.y - 0.16, b.z), 0.05, 0.24)
      }
    }
    const line = edgeLine(layout, which, 0.05)
    let post = 0
    for (let index = 1; index < line.length; index++) {
      const [a, b] = [line[index - 1], line[index]]
      const byWall = walled((a.out[0] + b.out[0]) / 2, (a.out[1] + b.out[1]) / 2)
      const height = byWall ? 0.8 : 0.9
      const from = new THREE.Vector3(a.x, base + a.y + height, a.z)
      const to = new THREE.Vector3(b.x, base + b.y + height, b.z)
      beam(batch, paint.rail, from, to, 0.045, 0.05)
      if (byWall) continue
      beam(batch, paint.rail, from.clone().setY(from.y - 0.45), to.clone().setY(to.y - 0.45), 0.03, 0.03)
      // Posts stand about every 90 cm.
      post += Math.hypot(b.x - a.x, b.z - a.z)
      if (index === 1 || post >= 0.85 || index === line.length - 1) {
        post = 0
        const foot = index === 1 ? a : b
        beam(batch, paint.post, new THREE.Vector3(foot.x, base + foot.y, foot.z), new THREE.Vector3(foot.x, base + foot.y + height, foot.z), 0.045, 0.045)
      }
    }
  }
}

// The hole a flight of stairs arrives through, seen from the storey above (whose floor is at
// `base`): a guard along its edges, wherever no wall stands and the steps are far below.
export function drawWell(batch, stair, rise, base, walled = () => false) {
  const layout = stairLayout(stair, rise)
  const paint = (STAIR_PAINT[layout.look] ?? STAIR_PAINT.wood)()
  const guard = (a, b) => {
    const from = new THREE.Vector3(a[0], base, a[1])
    const to = new THREE.Vector3(b[0], base, b[1])
    if (from.distanceTo(to) < 0.05) return
    beam(batch, paint.rail, from.clone().setY(base + 0.95), to.clone().setY(base + 0.95), 0.045, 0.05)
    beam(batch, paint.rail, from.clone().setY(base + 0.48), to.clone().setY(base + 0.48), 0.03, 0.03)
    for (const foot of [from, to]) beam(batch, paint.post, foot, foot.clone().setY(base + 0.95), 0.045, 0.045)
  }
  for (const which of [1, -1]) {
    const line = edgeLine(layout, which, 0.03)
    for (let index = 1; index < line.length; index++) {
      const [a, b] = [line[index - 1], line[index]]
      // Near the top the stair's own handrail does the guarding.
      if (rise - (a.y + b.y) / 2 < 0.8 || walled((a.out[0] + b.out[0]) / 2, (a.out[1] + b.out[1]) / 2)) continue
      guard([a.x, a.z], [b.x, b.z])
    }
  }
  const [left, right] = [layout.edge(0, 1), layout.edge(0, -1)]
  const back = [layout.centre(0)[0] + layout.foot.out[0] * 0.1, layout.centre(0)[1] + layout.foot.out[1] * 0.1]
  if (!walled(back[0], back[1])) guard(left, right)
}

// A short flight of steps: `n` risers over a length `l`, climbing towards its local -z from
// the height `from` (measured from `floor`).
export function drawSteps(batch, steps, floor) {
  const count = Math.max(1, steps.n ?? Math.round(steps.rise / 0.17))
  const paint = steps.look === 'rc' ? material('concrete', '#c4c1b8') : steps.look === 'wood' ? material('planks', '#b98f63') : finishMaterial('genkan-floor')
  batch.at(steps.x, floor + (steps.from ?? 0), steps.z, (steps.r ?? 0) * Math.PI / 180, (b) => {
    const depth = steps.l / count
    for (let step = 1; step <= count; step++) {
      const top = steps.rise * step / count
      b.box(paint, 0, top / 2, steps.l / 2 - depth * (step - 0.5), steps.w, top, depth)
    }
  })
}

// Things hung on a wall, each drawn round its own middle: x along the wall, y up, and z out
// of the wall towards whoever looks at it. Sizes follow the catalogue in design.js.
const HUNG = {
  picture(b, pick) {
    const frame = material('wood', pick(['#6e4b32', '#c9a37a', '#2b2f33', '#e9e2d2']))
    b.box(frame, 0, 0, 0.012, 0.6, 0.45, 0.024)
    b.box(material('#f6f3ea', '#ffffff', { roughness: 0.9 }), 0, 0, 0.026, 0.52, 0.37, 0.004)
    // A landscape in three broad strokes: sky, hills, a field.
    const [sky, hill, field] = pick([['#b9d3e3', '#7f9a6a', '#d9c98a'], ['#f0c9a4', '#8f6a5a', '#5f7c8a'], ['#cfe0d0', '#5f8a6b', '#e2ddcf']], 3)
    b.box(material(sky, '#ffffff', { roughness: 0.9 }), 0, 0.07, 0.03, 0.42, 0.14, 0.002)
    b.box(material(hill, '#ffffff', { roughness: 0.9 }), -0.05, -0.03, 0.031, 0.32, 0.07, 0.002)
    b.box(material(field, '#ffffff', { roughness: 0.9 }), 0, -0.1, 0.03, 0.42, 0.08, 0.002)
  },
  clock(b) {
    // (A cylinder stands upright; the face of a clock is one turned to the wall, so it is built by hand.)
    const rim = material('#2b2f33', '#ffffff', { roughness: 0.5, metalness: 0.3 })
    const face = material('#f7f5ee', '#ffffff', { roughness: 0.7 })
    const ring = (radius, z) => Array.from({ length: 20 }, (_, index) => new THREE.Vector3(Math.cos(index / 20 * Math.PI * 2) * radius, Math.sin(index / 20 * Math.PI * 2) * radius, z))
    const [outer, back] = [ring(0.16, 0.03), ring(0.16, 0)]
    for (let index = 0; index < 20; index++) {
      const next = (index + 1) % 20
      b.quad(rim, back[index], back[next], outer[next], outer[index], new THREE.Vector3(outer[index].x + outer[next].x, outer[index].y + outer[next].y, 0))
    }
    b.face(rim, ring(0.16, 0.03))
    b.face(face, ring(0.14, 0.032))
    const hand = material('#23272a', '#ffffff', { roughness: 0.5 })
    b.bar(hand, new THREE.Vector3(0, 0, 0.036), new THREE.Vector3(0.05, 0.07, 0.036), 0.012, 0.004)
    b.bar(hand, new THREE.Vector3(0, 0, 0.038), new THREE.Vector3(-0.09, 0.06, 0.038), 0.008, 0.004)
    for (let hour = 0; hour < 12; hour++) {
      const angle = hour / 12 * Math.PI * 2
      b.box(hand, Math.cos(angle) * 0.12, Math.sin(angle) * 0.12, 0.034, 0.012, 0.012, 0.002)
    }
  },
  'wall-shelf'(b, pick) {
    const boardPaint = material('wood', '#b08a62')
    b.box(boardPaint, 0, -0.1, 0.11, 0.8, 0.025, 0.22)
    for (const x of [-0.3, 0.3]) b.box(material('#3d4447', '#ffffff', { roughness: 0.6, metalness: 0.5 }), x, -0.17, 0.07, 0.02, 0.12, 0.14)
    let x = -0.34
    for (let book = 0; book < 6; book++) {
      const wide = 0.03 + (book % 3) * 0.012
      b.box(material(pick(['#a8574e', '#56789a', '#d9b25a', '#5f8a6b', '#8a6aa0', '#e2ddcf'], book), '#ffffff', { roughness: 0.8 }), x + wide / 2, 0.005, 0.1, wide, 0.19 - (book % 2) * 0.03, 0.15)
      x += wide + 0.004
    }
    b.cylinder(material('#b9845e', '#ffffff', { roughness: 0.9 }), 0.24, -0.087, 0.11, 0.05, 0.09, 8, 0.06)
    b.cylinder(material('#4f7d4a', '#ffffff', { roughness: 0.9 }), 0.24, 0.0, 0.11, 0.07, 0.1, 7, 0.02)
  },
  'wall-lamp'(b) {
    const brass = material('#8a6e3c', '#ffffff', { roughness: 0.4, metalness: 0.7 })
    b.box(brass, 0, -0.06, 0.012, 0.1, 0.14, 0.024)
    b.bar(brass, new THREE.Vector3(0, -0.06, 0.02), new THREE.Vector3(0, 0, 0.12), 0.016, 0.016)
    b.cylinder(glow('#fff0cf', 1.2), 0, -0.02, 0.12, 0.07, 0.15, 10, 0.045)
  },
  'wall-mirror'(b) {
    b.box(material('wood', '#9a7650'), 0, 0, 0.012, 0.5, 0.9, 0.024)
    b.box(material('#aab6ba', '#ffffff', { roughness: 0.06, metalness: 1 }), 0, 0, 0.026, 0.43, 0.83, 0.004)
  },
  // A split curtain over a doorway: a rod and three panels of cloth.
  noren(b, pick) {
    const cloth = material(pick(['#34506b', '#8a3b34', '#3f6b52', '#5b4a3c']), '#ffffff', { roughness: 0.95, twoSided: true })
    b.bar(material('wood', '#5a4636'), new THREE.Vector3(-0.48, 0.22, 0.05), new THREE.Vector3(0.48, 0.22, 0.05), 0.024, 0.024)
    for (const x of [-0.3, 0, 0.3]) b.box(cloth, x, -0.02, 0.05, 0.285, 0.46, 0.006)
    b.box(material('#f1eee6', '#ffffff', { roughness: 0.9 }), 0, 0.02, 0.054, 0.12, 0.12, 0.002)
  },
  // A canvas blind over a shop window, sloping out from the wall.
  awning(b, pick) {
    const canvas = material(pick(['#b9352c', '#34506b', '#3f6b52', '#d9a441']), '#ffffff', { roughness: 0.9, twoSided: true })
    const [top, low, out] = [0.25, -0.2, 0.7]
    b.quad(canvas, new THREE.Vector3(-0.8, top, 0.01), new THREE.Vector3(0.8, top, 0.01), new THREE.Vector3(0.8, low, out), new THREE.Vector3(-0.8, low, out), new THREE.Vector3(0, 1, 0.6))
    b.quad(canvas, new THREE.Vector3(-0.8, low, out), new THREE.Vector3(0.8, low, out), new THREE.Vector3(0.8, low - 0.1, out), new THREE.Vector3(-0.8, low - 0.1, out), new THREE.Vector3(0, 0, 1))
    const arm = material('#e9e9e4', '#ffffff', { roughness: 0.5, metalness: 0.4 })
    for (const x of [-0.78, 0.78]) {
      b.bar(arm, new THREE.Vector3(x, top, 0.02), new THREE.Vector3(x, low, out), 0.02, 0.02)
      b.bar(arm, new THREE.Vector3(x, low - 0.02, 0.02), new THREE.Vector3(x, low, out), 0.018, 0.018)
    }
  },
  // A wall-hung gas water heater (350 x 530 x 170 mm), its pipes in a cover down to the ground
  // (`piece.l` below its bottom).
  'water-heater'(b, pick, piece = {}) {
    const silver = material('#c3c6c6', '#ffffff', { roughness: 0.35, metalness: 0.6 })
    b.box(silver, 0, 0, 0.085, 0.35, 0.53, 0.17)
    b.box(material('#2a2d30', '#ffffff', { roughness: 0.5 }), 0, 0.2, 0.171, 0.22, 0.05, 0.004)
    for (let slot = 0; slot < 5; slot++) b.box(material('#7d8182', '#ffffff', { roughness: 0.4, metalness: 0.5 }), 0, 0.146 + slot * 0.012, 0.173, 0.2, 0.004, 0.003)
    b.box(material('#3a6fa0', '#ffffff', { roughness: 0.5 }), -0.11, -0.2, 0.171, 0.06, 0.012, 0.003)
    const drop = piece.l ?? 0.6
    if (drop > 0.05) b.box(silver, 0, -0.265 - drop / 2, 0.075, 0.3, drop, 0.15)
  },
  // A gas meter (220 x 280 x 160 mm) on the pipe that rises out of the ground.
  'meter-gas'(b, pick, piece = {}) {
    b.box(material('#cfcabb', '#ffffff', { roughness: 0.5, metalness: 0.2 }), 0, 0, 0.1, 0.22, 0.28, 0.16)
    b.box(material('#1f2326', '#ffffff', { roughness: 0.3 }), 0, 0.05, 0.181, 0.1, 0.05, 0.003)
    b.box(material('#d9a91c', '#ffffff', { roughness: 0.6 }), 0, -0.07, 0.181, 0.12, 0.025, 0.003)
    const pipe = material('#c9b25a', '#ffffff', { roughness: 0.5, metalness: 0.4 })
    const drop = piece.l ?? 0.5
    for (const x of [-0.065, 0.065]) b.box(pipe, x, 0.17, 0.08, 0.03, 0.06, 0.03)
    b.box(pipe, -0.065, 0.2, 0.04, 0.03, 0.03, 0.08)
    if (drop > 0.05) b.box(pipe, 0.065, -0.14 - drop / 2, 0.08, 0.03, drop, 0.03)
  },
  // The electricity meter on its board (152 x 214 x 100 mm), and the conduit up from it to
  // where the line from the pole comes in.
  'meter-power'(b) {
    b.box(material('#eceae4', '#ffffff', { roughness: 0.6 }), 0, 0, 0.012, 0.28, 0.42, 0.024)
    b.box(material('#d9dbd8', '#ffffff', { roughness: 0.4, metalness: 0.1 }), 0, 0.02, 0.074, 0.152, 0.214, 0.1)
    b.box(material('#2b3035', '#ffffff', { roughness: 0.3 }), 0, 0.05, 0.125, 0.07, 0.03, 0.003)
    b.box(material('#9aa0a3', '#ffffff', { roughness: 0.5 }), 0, -0.06, 0.125, 0.12, 0.05, 0.003)
    b.box(material('#9aa0a3', '#ffffff', { roughness: 0.5, metalness: 0.2 }), 0.08, 0.6, 0.035, 0.028, 0.8, 0.028)
  },
  // Vent hoods: a small one for a fan (face 160 mm, 120 mm out), a large one for a cooker hood.
  'vent-hood'(b) {
    const steel = material('#c9cdcf', '#ffffff', { roughness: 0.35, metalness: 0.75 })
    b.box(steel, 0, 0, 0.004, 0.17, 0.17, 0.008)
    b.box(steel, 0, 0.02, 0.06, 0.15, 0.11, 0.11)
    b.box(material('#2a2d30', '#ffffff', { roughness: 0.6 }), 0, -0.04, 0.06, 0.13, 0.012, 0.09)
  },
  'vent-hood-large'(b) {
    const steel = material('#c9cdcf', '#ffffff', { roughness: 0.35, metalness: 0.75 })
    b.box(steel, 0, 0, 0.004, 0.23, 0.23, 0.008)
    b.box(steel, 0, 0.025, 0.085, 0.21, 0.16, 0.16)
    b.box(material('#2a2d30', '#ffffff', { roughness: 0.6 }), 0, -0.06, 0.085, 0.19, 0.012, 0.14)
  },
  'flower-box'(b) {
    b.box(material('#7a5a44', '#ffffff', { roughness: 0.9 }), 0, -0.05, 0.11, 1.0, 0.15, 0.2)
    b.box(material('#4a3a2c', '#ffffff', { roughness: 1 }), 0, 0.027, 0.11, 0.94, 0.006, 0.15)
    for (let flower = 0; flower < 8; flower++) {
      const x = -0.42 + flower * 0.12
      b.box(material('#4f7d4a', '#ffffff', { roughness: 0.95 }), x, 0.08, 0.11 + (flower % 2) * 0.04 - 0.02, 0.09, 0.11, 0.09, flower)
      b.box(material(['#d4667a', '#e9b44c', '#f2ede4', '#b98fd0'][flower % 4], '#ffffff', { roughness: 0.9 }), x, 0.15, 0.11 + (flower % 2) * 0.04 - 0.02, 0.07, 0.05, 0.07, flower)
    }
  },
}

// Draws something that hangs on a wall round the origin of `batch`. `seed` only varies its colours;
// `piece` is the decoration itself, for what it says beyond its kind.
export function drawDecor(batch, kind, seed = 0, piece = {}) {
  const draw = HUNG[kind]
  if (!draw) {
    batch.box(material('#b9b5aa', '#ffffff', { roughness: 0.8 }), 0, 0, 0.02, 0.4, 0.3, 0.04)
    return
  }
  draw(batch, (options, salt = 0) => options[Math.floor(hash(seed * 1.7 + salt, kind.length, salt) * options.length) % options.length], piece)
}

// ---- The boundary of a lot ----------------------------------------------------------------

// Wire mesh: 4 mm wires 50 mm apart across and 150 mm apart up, clear between them.
const meshPaint = {}
function meshMaterial(green) {
  const key = green ? 'green' : 'grey'
  if (meshPaint[key]) return meshPaint[key]
  const canvas = document.createElement('canvas')
  canvas.width = 32
  canvas.height = 96
  const pen = canvas.getContext('2d')
  pen.fillStyle = '#ffffff'
  pen.fillRect(0, 0, 3, 96)
  pen.fillRect(0, 0, 32, 3)
  const map = new THREE.CanvasTexture(canvas)
  map.wrapS = map.wrapT = THREE.RepeatWrapping
  map.repeat.set(1 / 0.05, 1 / 0.15)
  map.anisotropy = 4
  meshPaint[key] = new THREE.MeshStandardMaterial({
    color: green ? '#3d6650' : '#8d9290', map, alphaTest: 0.35, side: THREE.DoubleSide, roughness: 0.5, metalness: 0.45,
  })
  return meshPaint[key]
}

// One stretch of the boundary (see fenceYard in exterior.js): concrete blocks with a coping,
// and on them a fence of aluminium slats or bars or of wire mesh between posts 2 m apart; or a
// clipped hedge on a course of blocks.
function drawBound(batch, bound) {
  const [ax, az] = bound.a
  const [bx, bz] = bound.b
  const length = Math.hypot(bx - ax, bz - az)
  if (length < 0.05) return
  const ux = (bx - ax) / length
  const uz = (bz - az) / length
  const turn = Math.atan2(-uz, ux)
  const at = (s) => [ax + ux * s, az + uz * s]
  const [mx, mz] = at(length / 2)
  const base = bound.base ?? 0.4
  const fence = bound.fence ?? 0
  if (bound.k === 'hedge') {
    const hedge = material('hedge', '#ffffff')
    const thick = bound.t ?? 0.5
    batch.box(material('cblock', '#ffffff'), mx, base / 2, mz, length, base, thick, turn)
    // Clipped flat on top, its shoulders rounded off a little.
    batch.box(hedge, mx, base + (fence - 0.08) / 2, mz, length - 0.04, fence - 0.08, thick - 0.04, turn)
    batch.box(hedge, mx, base + fence - 0.04, mz, length - 0.12, 0.08, thick - 0.14, turn)
    return
  }
  // The blocks, and their coping (40 mm thick, 150 wide).
  batch.box(material('cblock', '#ffffff'), mx, (base - 0.04) / 2, mz, length, base - 0.04, 0.12, turn)
  batch.box(material('concrete', '#cfccc4'), mx, base - 0.02, mz, length + 0.01, 0.04, 0.15, turn)
  if (fence <= 0) return
  const top = base + fence
  const posts = Math.max(1, Math.ceil(length / 2))
  const metal = bound.white ? material('#f1f0ea', '#ffffff', { roughness: 0.4, metalness: 0.2 })
    : bound.k === 'mesh' ? material(bound.green ? '#3d6650' : '#8d9290', '#ffffff', { roughness: 0.45, metalness: 0.5 })
      : material(bound.k === 'slats' ? '#4d4741' : '#b9bdbd', '#ffffff', { roughness: 0.4, metalness: 0.6 })
  for (let post = 0; post <= posts; post++) {
    const [px, pz] = at(Math.min(length - 0.025, Math.max(0.025, length * post / posts)))
    batch.box(metal, px, base + fence / 2, pz, 0.05, fence, 0.05, turn)
  }
  if (bound.k === 'slats') {
    // Boards 100 mm high with 30 mm between them, and a rail along the top.
    for (let y = base + 0.08; y + 0.1 <= top - 0.02; y += 0.13) batch.box(metal, mx, y + 0.05, mz, length - 0.02, 0.1, 0.018, turn)
    batch.box(metal, mx, top - 0.015, mz, length, 0.03, 0.04, turn)
  } else if (bound.k === 'lattice') {
    batch.box(metal, mx, base + 0.06, mz, length, 0.035, 0.03, turn)
    batch.box(metal, mx, top - 0.02, mz, length, 0.04, 0.035, turn)
    for (let s = 0.1; s < length - 0.05; s += 0.11) {
      const [px, pz] = at(s)
      batch.box(metal, px, base + fence / 2 + 0.02, pz, 0.018, fence - 0.08, 0.018, turn)
    }
  } else {
    // Wire mesh, with a top rail of pipe.
    const corner = (s, y) => new THREE.Vector3(at(s)[0], y, at(s)[1])
    batch.face(meshMaterial(bound.green), [corner(0, base + 0.04), corner(length, base + 0.04), corner(length, top - 0.03), corner(0, top - 0.03)])
    batch.box(metal, mx, top - 0.015, mz, length, 0.03, 0.035, turn)
  }
}

// What lies on the land round a building: the porch and the steps to each front door, paved
// paths, the place for a car and whatever stands in the garden.
export function drawYard(batch, design) {
  const yard = design.yard
  if (!yard) return
  for (const pad of yard.pads ?? []) {
    const paint = finishMaterial(pad.f)
    const [x, z] = [(pad.x0 + pad.x1) / 2, (pad.z0 + pad.z1) / 2]
    // A porch is a solid step; a path or a parking place is a slab laid on the ground.
    if (pad.porch) batch.box(paint, x, pad.y / 2, z, pad.x1 - pad.x0, pad.y, pad.z1 - pad.z0)
    else batch.box(paint, x, pad.y - 0.02, z, pad.x1 - pad.x0, 0.04, pad.z1 - pad.z0)
  }
  for (const steps of yard.steps ?? []) drawSteps(batch, steps, 0)
  for (const bound of yard.bounds ?? []) drawBound(batch, bound)
  // (Something hung on a wall, such as an outdoor unit on brackets, says how high it hangs.)
  for (const thing of yard.items ?? []) {
    batch.at(thing.x, thing.y ?? yardHeight(design, thing.x, thing.z), thing.z, (thing.r ?? 0) * Math.PI / 180, (b) => drawItem(b, thing.k, thing.x, thing.z, thing))
  }
}
