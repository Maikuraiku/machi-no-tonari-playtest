// What stands round a house on its own land, worked out from its design: the boundary of the
// lot (a wall of concrete blocks with a fence on it, a hedge, or a wire fence), the post by
// the gate with the letterbox and the intercom, the outdoor units of the air conditioners
// with their pipe covers, the water heater, the meters and the vents. Nothing here draws
// anything: parts.js and items.js do.
//
// Measures are those of ordinary Japanese houses (makers' catalogues and building rules):
//  - concrete blocks 390 x 190 mm, 120 thick, laid in courses of 200 mm; a boundary is one
//    to three courses with an aluminium fence of 600-800 mm on it, about 1.2 m in all (a
//    wall of blocks alone over 1.2 m would need buttresses); a hedge is clipped to about
//    1.2 m and is about 0.5 m thick;
//  - a gate post (機能門柱) about 1.4 m high, its letterbox slot at 0.9 m, the intercom at 1.3 m;
//  - an outdoor unit 800 x 550 x 290 mm on a plastic stand 100 mm high, its back about 100 mm
//    from the wall, its pipes in a cover (75 x 63 mm) up to a hole 0.2 m below the ceiling;
//  - a wall-hung gas water heater 350 x 530 x 170 mm, its bottom about 0.6 m above the ground;
//    the gas meter below it; the electricity meter about 1.8 m up, where it can be read;
//  - vent hoods about 2.3-2.9 m above the ground.
import { boxCorners, frontDoors, storeyShape, yardHeight } from './design.js?v=online-1794980046418'

const round = (value) => Math.round(value * 1000) / 1000

// What each style puts round its lot. `base` is the height of the blocks (with their coping),
// `fence` that of what stands on them. Kinds: 'slats' (aluminium boards with gaps between),
// 'lattice' (aluminium bars), 'mesh' (wire mesh on posts), 'hedge', 'block' (blocks alone).
export const BOUNDS = {
  modern: { front: { k: 'slats', base: 0.4, fence: 0.8 }, side: { k: 'mesh', base: 0.6, fence: 0.6 } },
  europe: { front: { k: 'lattice', base: 0.6, fence: 0.6, white: true }, side: { k: 'mesh', base: 0.6, fence: 0.6 } },
  japan: { front: { k: 'hedge', base: 0.2, fence: 1.0 }, side: { k: 'block', base: 1.0, fence: 0 } },
  danchi: { front: { k: 'mesh', base: 0.2, fence: 1.0, green: true }, side: { k: 'mesh', base: 0.2, fence: 1.0, green: true } },
  mansion: { front: { k: 'lattice', base: 0.6, fence: 0.6 }, side: { k: 'mesh', base: 0.4, fence: 0.8 } },
}
// A boundary is only built where there is room for it between the building and the edge of
// the lot; where the building stands closer than this, the edge is left open.
const ROOM_FOR_WALL = 0.6
// Thickness of a wall of blocks, and of a clipped hedge.
const THICK = { block: 0.12, hedge: 0.5 }

// The four edges of a lot: the line each runs along, the way into the lot from it, and
// whether it is the street side.
const edgesOf = (width, depth) => [
  { a: [0, depth], b: [width, depth], inward: [0, -1], front: true },
  { a: [0, 0], b: [width, 0], inward: [0, 1], front: false },
  { a: [0, 0], b: [0, depth], inward: [1, 0], front: false },
  { a: [width, 0], b: [width, depth], inward: [-1, 0], front: false },
]

// Whether the ground-floor building comes within `most` metres of a spot, looking in from
// the edge of the lot.
function blocked(shape, x, z, inward, most) {
  for (let step = 0.05; step <= most + 1e-6; step += 0.05) {
    if (shape.floored(x + inward[0] * step, z + inward[1] * step)) return true
  }
  return false
}

// Splits [from, to] (along an edge) into the stretches not covered by any of `gaps`.
function stretches(from, to, gaps) {
  const out = []
  let at = from
  for (const [g0, g1] of [...gaps].sort((p, q) => p[0] - q[0])) {
    if (g0 > at + 0.05) out.push([at, Math.min(g0, to)])
    at = Math.max(at, g1)
  }
  if (to > at + 0.05) out.push([at, to])
  return out.filter(([p, q]) => q - p > 0.3)
}

// The rectangle a flight of steps covers.
const stepsBox = (steps) => {
  const corners = boxCorners(steps.x, steps.z, steps.w, steps.l, steps.r ?? 0)
  return { x0: Math.min(...corners.map((p) => p[0])), z0: Math.min(...corners.map((p) => p[1])), x1: Math.max(...corners.map((p) => p[0])), z1: Math.max(...corners.map((p) => p[1])) }
}

// The boundary of a lot and the post at its gate. Adds `bounds` (and `gate`, the spot just
// outside the gateway a visitor walks through) to the yard, and the gate post to its items.
// A bound is { a, b, k, base, fence, t, front }: the middle line of the wall, its kind and
// heights, and its thickness.
export function fenceYard(design, { lotWidth, lotDepth, style }) {
  const look = BOUNDS[style]
  if (!look) return
  const shape = storeyShape(design, 0)
  if (!shape) return
  const yard = design.yard
  const bounds = []
  // Paths, parking places and steps that reach an edge leave a gap in it.
  const ways = [...(yard.pads ?? []).filter((pad) => !pad.porch), ...(yard.steps ?? []).map((steps) => ({ ...stepsBox(steps), f: 'steps' }))]
  const paths = []
  for (const edge of edgesOf(lotWidth, lotDepth)) {
    const kind = edge.front ? look.front : look.side
    const t = kind.k === 'hedge' ? THICK.hedge : THICK.block
    const alongX = edge.a[1] === edge.b[1]
    const length = alongX ? lotWidth : lotDepth
    const line = alongX ? edge.a[1] : edge.a[0]
    // The middle of the wall stands just inside the lot.
    const inset = t / 2 + 0.02
    const spot = (s, out = inset) => (alongX ? [s, line + edge.inward[1] * out] : [line + edge.inward[0] * out, s])
    const gaps = []
    for (const way of ways) {
      const near = alongX ? (edge.inward[1] > 0 ? way.z0 : way.z1) : (edge.inward[0] > 0 ? way.x0 : way.x1)
      if (Math.abs(near - line) > 0.08) continue
      const [p0, p1] = alongX ? [way.x0, way.x1] : [way.z0, way.z1]
      gaps.push([p0 - 0.05, p1 + 0.05])
      if (way.f === 'stone-floor') paths.push({ edge, alongX, line, from: p0, to: p1, gaps })
    }
    // Where the building stands too close to the edge there is no wall.
    const step = 0.2
    const room = []
    let run = null
    for (let s = step / 2; s < length; s += step) {
      const free = !blocked(shape, ...spot(s, 0), edge.inward, ROOM_FOR_WALL)
      if (free && !run) run = [s - step / 2, s + step / 2]
      else if (free) run[1] = s + step / 2
      else if (run) {
        room.push(run)
        run = null
      }
    }
    if (run) room.push([run[0], Math.min(length, run[1])])
    for (const [from, to] of room) {
      for (const [p, q] of stretches(Math.max(from, 0.02), Math.min(to, length - 0.02), gaps)) {
        bounds.push({ a: spot(p).map(round), b: spot(q).map(round), ...kind, t, front: edge.front, inward: edge.inward })
      }
    }
  }
  yard.bounds = bounds
  // The gate: the gap left for the path to the front door, the street side first.
  const door = frontDoors(design).find((entry) => entry.opening.canopy)
  const gate = paths.sort((p, q) => Number(q.edge.front) - Number(p.edge.front))[0]
  if (!gate || !door) return
  const { edge, alongX, line, from, to } = gate
  const middle = (from + to) / 2
  const at = (s, out) => (alongX ? [s, line + edge.inward[1] * out] : [line + edge.inward[0] * out, s])
  const [gx, gz] = at(middle, -0.7)
  yard.gate = { x: round(gx), z: round(gz) }
  // The gate post stands beside the gateway, at the end of the boundary, on whichever side
  // has room for it.
  const onWay = (x, z) => ways.some((way) => x > way.x0 - 0.2 && x < way.x1 + 0.2 && z > way.z0 - 0.12 && z < way.z1 + 0.12)
  const length = alongX ? lotWidth : lotDepth
  const ends = gate.gaps.filter(([g0, g1]) => g0 < to && g1 > from)
  const open = [Math.min(from, ...ends.map(([g0]) => g0)), Math.max(to, ...ends.map(([, g1]) => g1))]
  for (const s of [open[1] + 0.19, open[0] - 0.19, open[1] + 0.5, open[0] - 0.5]) {
    const [px, pz] = at(s, 0.3)
    if (s < 0.3 || s > length - 0.3 || onWay(px, pz) || blocked(shape, px, pz, edge.inward, 0.25)) continue
    yard.items.push({ k: 'gate-post', x: round(px), z: round(pz), r: round(Math.atan2(-edge.inward[0], -edge.inward[1]) * 180 / Math.PI) })
    break
  }
}

// ---- Equipment on and by the outside walls ----------------------------------------------

// The exterior walls of a storey: each wall with a room on one side and the open air (or a
// balcony) on the other, as { index, side (the outdoor face, 'l' or 'r'), normal (outwards),
// d (along it), length, thick, room (the room inside) }.
function outerFaces(shape) {
  const faces = []
  shape.storey.walls.forEach((wall, index) => {
    if (wall.open || wall.rail) return
    const side = shape.sides[index]
    if (side.l === side.r) return
    const out = side.l ? 'r' : 'l'
    const sign = out === 'l' ? 1 : -1
    const normal = [sign * side.d[1], -sign * side.d[0]]
    const reach = (wall.t ?? 0.12) / 2 + 0.07
    const middle = [(wall.a[0] + wall.b[0]) / 2, (wall.a[1] + wall.b[1]) / 2]
    const room = shape.roomAt(middle[0] - normal[0] * reach, middle[1] - normal[1] * reach)
    faces.push({ wall, index, side: out, normal, d: side.d, length: side.length, thick: wall.t ?? 0.12, room })
  })
  return faces
}

// Free stretches along a face, clear of its openings by `margin` and of its ends by `end`,
// at least `wide` long.
function spotsOn(face, openings, wide, margin = 0.15, end = 0.3) {
  const taken = openings.filter((entry) => entry.w === face.index).map((entry) => [entry.at - entry.ww / 2 - margin, entry.at + entry.ww / 2 + margin])
  return stretches(end, face.length - end, taken).filter(([p, q]) => q - p >= wide)
}

// The openings that reach into a band of height (above the floor), y0 to y1.
const crossing = (openings, y0, y1) => openings.filter((entry) => entry.s < y1 && entry.s + entry.hh > y0)

// The outdoor units of the air conditioners, the water heater, the meters and the vents.
export function equip(design, { lotWidth, lotDepth, style }) {
  const house = ['modern', 'europe', 'japan'].includes(style)
  if (!house && style !== 'danchi' && style !== 'mansion') return
  const yard = design.yard
  const base = design.base ?? 0.3
  const lot = (x, z, margin = 0) => x > margin && z > margin && x < lotWidth - margin && z < lotDepth - margin
  const onWay = (x, z, reach) => (yard.pads ?? []).some((pad) => x > pad.x0 - reach && x < pad.x1 + reach && z > pad.z0 - reach && z < pad.z1 + reach)
    || (yard.steps ?? []).some((steps) => {
      const box = stepsBox(steps)
      return x > box.x0 - reach && x < box.x1 + reach && z > box.z0 - reach && z < box.z1 + reach
    })
  const nearBound = (x, z, reach) => (yard.bounds ?? []).some(({ a, b, t }) => {
    const [ex, ez] = [b[0] - a[0], b[1] - a[1]]
    const u = Math.min(1, Math.max(0, ((x - a[0]) * ex + (z - a[1]) * ez) / (ex * ex + ez * ez || 1)))
    return Math.hypot(x - a[0] - ex * u, z - a[1] - ez * u) < reach + t / 2
  })
  const nearThing = (x, z, reach) => (yard.items ?? []).some((thing) => Math.hypot(x - thing.x, z - thing.z) < reach)
  let heater = false
  let meter = false
  for (let level = 0; level < design.storeys.length; level++) {
    const storey = design.storeys[level]
    if (storey.like !== undefined) continue
    const shape = storeyShape(design, level)
    if (!shape) continue
    const faces = outerFaces(shape)
    const cooled = new Set()
    const vented = new Set()
    const meters = []
    const decor = storey.decor ?? []
    // A spot `out` metres off the face, `at` along it.
    const off = (face, at, out) => [face.wall.a[0] + face.d[0] * at + face.normal[0] * (face.thick / 2 + out), face.wall.a[1] + face.d[1] * at + face.normal[1] * (face.thick / 2 + out)]
    // Whether the ground off a face is open land of this lot, free for something `deep`.
    const ground = (face, at, deep) => {
      const [x, z] = off(face, at, deep)
      const [hx, hz] = off(face, at, deep / 2)
      return lot(x, z, 0.02) && !shape.floored(x, z) && !onWay(hx, hz, 0.05) && !nearBound(x, z, 0.02) && !nearThing(hx, hz, 0.6)
    }
    for (const face of faces) {
      const code = face.room?.code
      if (!code) continue
      // An outdoor unit for each living room and bedroom, on the ground under it or on its balcony.
      if ('LBPW'.includes(code) && !cooled.has(face.room) && cooled.size < 8) {
        for (const [p, q] of spotsOn(face, crossing(storey.openings, -1, 0.6), 0.9, 0.04, 0.04)) {
          // (Into the corner, out of the way.)
          const at = q - p > 1.6 ? p + 0.45 : (p + q) / 2
          const [x, z] = off(face, at, 0.27)
          const [fx, fz] = off(face, at, 0.7)
          const fits = level === 0
            ? lot(fx, fz, 0.15) && !shape.floored(fx, fz) && !onWay(x, z, 0.5) && !nearBound(fx, fz, 0.05) && !nearThing(x, z, 1.2) && yardHeight(design, x, z) < 0.05
            : Boolean(shape.roomAt(fx, fz)?.open) && Boolean(shape.roomAt(x, z)?.open)
          if (!fits) continue
          // The pipes go into the wall 0.2 m below the ceiling of the room.
          const top = (design.ceiling ?? 2.4) - 0.2
          const thing = { k: 'ac-unit', x: round(x), z: round(z), r: round(Math.atan2(face.normal[0], face.normal[1]) * 180 / Math.PI), h: round(level === 0 ? base + top : top + 0.05) }
          if (level === 0) yard.items.push(thing)
          else storey.items.push(thing)
          cooled.add(face.room)
          break
        }
        // Where the wall is all windows and doors, the unit hangs on brackets above them.
        if (!cooled.has(face.room) && level === 0 && face.normal[1] !== 0) {
          const bottom = Math.max(0, ...crossing(storey.openings.filter((entry) => entry.w === face.index), -1, 3).map((entry) => entry.s + entry.hh)) + 0.07
          const top = storey.h - 0.2
          const at = face.length - 0.55
          const [x, z] = off(face, at, 0.2)
          const [fx, fz] = off(face, at, 0.6)
          if (bottom + 0.55 <= top && at > 0.5 && lot(fx, fz, 0.1) && !shape.floored(fx, fz) && !nearThing(x, z, 1)) {
            yard.items.push({ k: 'ac-unit', x: round(x), z: round(z), r: round(Math.atan2(face.normal[0], face.normal[1]) * 180 / Math.PI), y: round(base + bottom), hung: 1 })
            cooled.add(face.room)
          }
        }
      }
      if (!house) continue
      // Vents: the cooker hood of a kitchen, the fans of the bathroom, the washroom and the toilet.
      const ventY = (design.ceiling ?? 2.4) - 0.15
      if ('KUNT'.includes(code) && !vented.has(face.room)) {
        const at = spotsOn(face, crossing(storey.openings, ventY - 0.15, ventY + 0.15), 0.3, 0.1).map(([p, q]) => (p + q) / 2)
          .find((spot) => level > 0 || ground(face, spot, 0.15))
        if (at !== undefined) {
          decor.push({ w: face.index, side: face.side, at: round(at), y: round(ventY), k: code === 'K' ? 'vent-hood-large' : 'vent-hood', l: 0 })
          vented.add(face.room)
        }
      }
      if (level !== 0) continue
      // The gas water heater hangs outside the bathroom or the kitchen, its meter beside it.
      if (!heater && 'UNK'.includes(code)) {
        const stretch = spotsOn(face, crossing(storey.openings, 0.65 - base - 0.3, 1.15 - base + 0.1), 0.95).find(([p]) => ground(face, p + 0.3, 0.19) && ground(face, p + 0.75, 0.18))
        if (stretch) {
          const [p] = stretch
          decor.push({ w: face.index, side: face.side, at: round(p + 0.3), y: round(0.865 - base), k: 'water-heater', l: 0.6 },
            { w: face.index, side: face.side, at: round(p + 0.75), y: round(0.64 - base), k: 'meter-gas', l: 0.5 })
          heater = true
        }
      }
      // The electricity meter goes on a side wall, as near the street as it can be read.
      if (face.normal[0] !== 0) {
        for (const at of spotsOn(face, crossing(storey.openings, 1.55 - base, 2.85 - base), 0.35).flatMap(([p, q]) => [p + 0.2, q - 0.2])) {
          if (ground(face, at, 0.12)) meters.push({ face, at, z: off(face, at, 0)[1] })
        }
      }
    }
    const reading = meters.sort((p, q) => q.z - p.z)[0]
    if (level === 0 && house && reading && !meter) {
      decor.push({ w: reading.face.index, side: reading.face.side, at: round(reading.at), y: round(1.8 - base), k: 'meter-power', l: 0 })
      meter = true
    }
    if (decor.length) storey.decor = decor
  }
}
