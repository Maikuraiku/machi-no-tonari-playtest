// What a walker meets at a monorail station of the route map: the platform beside each beam,
// the stair from the street up to it and the landing between them, as surfaces to stand on and
// walls to stop at, each for the heights it is there at (so the walls of a platform 10 m up do
// not stop anybody in the street below, and the platform is only stepped onto from its stair).
// Plain numbers, no three.js: route-transit.js draws the same layout and region-layer.js asks
// these for the walker's height and the walls round them. Tested by station-solids.test.mjs.
//
// A station is two halves, one per beam, each laid out in its own frame: u across the line, out
// from the beam (the platform is on the left of the trains that stop at it), v along the line.
import { PLATFORM } from './route-line.js'

// A stair of 17 cm risers on 28 cm treads (one in 0.6), 1.8 m wide, a landing of 2.2 m at its top.
export const STAIR = { width: 1.8, slope: 0.6, landing: 2.2, riser: 0.17, gap: 0.2 }
// How high a walker steps up onto a surface without climbing (a kerb, the edge of a step).
export const STEP_UP = 0.65

// The layout of one half: its platform at `level` (the floor, m), the street at `ground` under it.
export function stationHalf(level, ground, long = PLATFORM.length / 2) {
  const edge = PLATFORM.edge
  const outer = PLATFORM.edge + PLATFORM.width
  const rise = level - ground
  const half = { edge, outer, long, level, ground, stair: null, landing: null }
  if (!(rise > 1)) return half
  // The stair starts in the street near the far end of the platform and climbs towards the
  // middle, alongside the platform's back; it never runs past the platform's other end.
  const run = Math.min(rise / STAIR.slope, 2 * long - STAIR.landing - 4)
  const bottom = long - 2
  const top = bottom - run
  const u0 = outer + STAIR.gap
  half.stair = { u0, u1: u0 + STAIR.width, top, bottom, run, rise }
  half.landing = { u0: outer - 0.2, u1: u0 + STAIR.width, v0: top - STAIR.landing, v1: top }
  return half
}

// The half's surfaces, walls and boxes in its own frame (u, v).
// - surface: { u0, u1, v0, v1, y0 (height at v0), y1 (at v1) }
// - wall: [ua, va, ub, vb, low, high]: stops a walker whose feet are between low and high
// - box: { u, v, w, d, low, high }
export function halfSolids(half) {
  const { edge, outer, long, level, ground, stair, landing } = half
  const deck = [level - 0.4, level + 2.2]
  const surfaces = [{ u0: edge, u1: outer, v0: -long, v1: long, y0: level, y1: level }]
  const walls = [
    // The platform screens along the track, and the platform's two ends.
    [edge, -long, edge, long, ...deck],
    [edge, -long, outer, -long, ...deck],
    [edge, long, outer, long, ...deck],
  ]
  const boxes = []
  if (stair) {
    surfaces.push({ u0: landing.u0, u1: landing.u1, v0: landing.v0, v1: landing.v1, y0: level, y1: level })
    surfaces.push({ u0: stair.u0, u1: stair.u1, v0: stair.top, v1: stair.bottom, y0: level, y1: ground })
    // The fence along the back of the platform, open onto the landing; the landing's railings.
    walls.push([outer, -long, outer, landing.v0, ...deck], [outer, landing.v1, outer, long, ...deck])
    walls.push([outer, landing.v0, landing.u1, landing.v0, ...deck], [landing.u1, landing.v0, landing.u1, landing.v1, ...deck])
    // The stair's sides, from the street to above the platform; and under the landing, its end.
    const tall = [ground - 0.5, level + 2.2]
    walls.push([stair.u0, stair.top, stair.u0, stair.bottom, ...tall], [stair.u1, stair.top, stair.u1, stair.bottom, ...tall])
    walls.push([stair.u0, stair.top, stair.u1, stair.top, ground - 0.5, level - 2])
  } else walls.push([outer, -long, outer, long, ...deck])
  // The columns under the platform, every 8 m, in the street.
  for (let v = -long + 4; v <= long - 4; v += 8) boxes.push({ u: outer - 0.6, v, w: 0.7, d: 0.7, low: ground - 0.5, high: level - 0.5 })
  return { surfaces, walls, boxes }
}

// The half's solids in scene metres. The frame: the station's spot on the line (x, z), the line's
// direction there (dx, dz) and `sign` (1 for the half on the left of the line's own direction,
// -1 for the other, turned half round).
export function placeHalf(half, { x, z, dx, dz, sign = 1 }) {
  // u runs along (dz, -dx), v along (dx, dz); the other half has both turned round.
  const ux = sign * dz
  const uz = sign * -dx
  const vx = sign * dx
  const vz = sign * dz
  const at = (u, v) => [x + u * ux + v * vx, z + u * uz + v * vz]
  const local = halfSolids(half)
  const surfaces = local.surfaces.map((s) => {
    const corners = [at(s.u0, s.v0), at(s.u1, s.v0), at(s.u1, s.v1), at(s.u0, s.v1)]
    return { ...s, x, z, ux, uz, vx, vz, box: bounds(corners) }
  })
  const walls = local.walls.map(([ua, va, ub, vb, low, high]) => {
    const [ax, az] = at(ua, va)
    const [bx, bz] = at(ub, vb)
    return { ax, az, bx, bz, r: 0.05, low, high, box: bounds([[ax, az], [bx, bz]]) }
  })
  const turn = Math.atan2(dx, dz) * 180 / Math.PI
  const boxes = local.boxes.map((b) => {
    const [bx, bz] = at(b.u, b.v)
    return { x: bx, z: bz, w: b.w, d: b.d, r: turn, low: b.low, high: b.high, box: bounds([[bx - b.w, bz - b.d], [bx + b.w, bz + b.d]]) }
  })
  return { surfaces, walls, boxes }
}

function bounds(points) {
  let x0 = Infinity
  let z0 = Infinity
  let x1 = -Infinity
  let z1 = -Infinity
  for (const [px, pz] of points) {
    x0 = Math.min(x0, px)
    x1 = Math.max(x1, px)
    z0 = Math.min(z0, pz)
    z1 = Math.max(z1, pz)
  }
  return { x0, z0, x1, z1 }
}

// The height of a placed surface at (x, z), or null when the point is off it.
export function surfaceHeight(s, x, z) {
  const du = (x - s.x) * s.ux + (z - s.z) * s.uz
  const dv = (x - s.x) * s.vx + (z - s.z) * s.vz
  if (du < s.u0 || du > s.u1 || dv < s.v0 || dv > s.v1) return null
  return s.v1 === s.v0 ? s.y0 : s.y0 + (s.y1 - s.y0) * (dv - s.v0) / (s.v1 - s.v0)
}

// What a walker with feet at height `y` stands on at (x, z): the highest of `surfaces` they can
// step onto (no more than STEP_UP above their feet), or null when there is none.
export function standOn(surfaces, x, z, y, stepUp = STEP_UP) {
  let best = null
  for (const s of surfaces) {
    const height = surfaceHeight(s, x, z)
    if (height === null || height > y + stepUp) continue
    if (best === null || height > best) best = height
  }
  return best
}

// Whether a wall or a box stops a walker with feet at height `y`.
export const stopsAt = (solid, y) => y >= solid.low - 0.3 && y <= solid.high

// The arrival times in one service round, including which side platform serves each call.
// Keeping them once avoids searching forward second by second for every platform board.
export function platformCalls(line) {
  return line.eventsBetween(-0.001, line.period - 0.001)
    .filter((event) => event.kind === 'arrive')
    .map((event) => ({ time: event.time, stop: event.stop.index, way: Math.sign(event.next.at - event.stop.at) || 1 }))
}

// The doors and display of one platform, for the entire fleet. The side must match the
// beam the train actually uses, including the departure direction at the line's termini.
export function platformStatus(line, calls, offsets, stop, sign, now) {
  const present = offsets.map((offset) => line.stateAt(now + offset))
    .find((state) => state.phase === 'dwell' && state.stop.index === stop.index && state.way === sign)
  const title = `${stop.name} ${sign > 0 ? 1 : 2}番線`
  const bound = sign > 0 ? line.stops.at(-1) : line.stops[0]
  if (present) {
    const into = line.drive.dwell - present.leaves
    let message = '停車中'
    if (into < line.drive.doorsOpenAt + line.drive.doorTime) message = 'ドアが開きます'
    else if (present.leaves <= line.drive.doorsCloseAt) message = '発車します'
    else if (present.leaves < line.drive.doorsCloseAt + line.drive.doorTime) message = 'ドアが閉まります'
    return { doors: present.doors, text: [title, `${bound.name} ゆき`, message] }
  }
  let wait = Infinity
  for (const call of calls) {
    if (call.stop !== stop.index || call.way !== sign) continue
    for (const offset of offsets) {
      const seconds = ((call.time - now - offset) % line.period + line.period) % line.period
      wait = Math.min(wait, seconds)
    }
  }
  if (!Number.isFinite(wait)) return { doors: 0, text: [title, 'このホームの運行なし', '反対側ホームへ'] }
  return { doors: 0, text: [title, `${bound.name} ゆき`, wait < 20 ? 'まもなく到着' : `約 ${Math.max(1, Math.ceil(wait / 60))} 分`] }
}

// Where a ray (origin o, direction d, both [x, y, z]) first meets a placed surface: the distance
// along it, or null.
export function rayOnto(s, o, d) {
  const k = s.v1 === s.v0 ? 0 : (s.y1 - s.y0) / (s.v1 - s.v0)
  // The surface: y = y0 + k (dv - v0), with dv measured along v from the station's spot.
  const dvO = (o[0] - s.x) * s.vx + (o[2] - s.z) * s.vz
  const dvD = d[0] * s.vx + d[2] * s.vz
  const denominator = d[1] - k * dvD
  if (Math.abs(denominator) < 1e-9) return null
  const t = (s.y0 + k * (dvO - s.v0) - o[1]) / denominator
  if (!(t > 0)) return null
  const x = o[0] + d[0] * t
  const z = o[2] + d[2] * t
  return surfaceHeight(s, x, z) === null ? null : t
}
