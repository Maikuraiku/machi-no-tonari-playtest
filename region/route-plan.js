// The monorail lines of a region town, planned once by the client that makes the town and then
// kept by the server (as line packs, game-pack.js). For every railway of the route map: its
// alignment as it is; the top of its beam over the real ground — the highest ground under both
// beams and the cars, not just under the centre line — at least 6.62 m up, no steeper than
// 50‰, level through every station and clear of the station's own ground, and 6.5 m over
// another line where the two cross; and the land each station stands on, as a rectangle of
// 8 m tiles that the server keeps free. Where two lines' stations would stand on the same land
// (an interchange), the later line's station slides along its line until they part.
import { trainLength } from '../world/monorail-line.js'
import { CLEARANCE, CROSSING_CLEARANCE, PLATFORM, TRACK_HALF, beamProfile } from '../world/route-line.js'
import { STEP, encodeLine } from './game-pack.js'

const TILE = 8
const SLIDES = [20, -20, 40, -40, 60, -60, 80, -80, 100, -100, 120, -120, 140, -140, 160, -160]

// The spot `s` metres along a line of points every STEP metres, and the way it runs there.
function spotOf(points, s) {
  const count = points.length / 2
  const k = Math.min(count - 2, Math.max(0, Math.floor(s / STEP)))
  const t = Math.min(1, Math.max(0, s / STEP - k))
  const ax = points[k * 2]
  const az = points[k * 2 + 1]
  const bx = points[k * 2 + 2]
  const bz = points[k * 2 + 3]
  const length = Math.hypot(bx - ax, bz - az) || 1
  return { x: ax + (bx - ax) * t, z: az + (bz - az) * t, dx: (bx - ax) / length, dz: (bz - az) / length }
}

// The ground a station takes: the platforms, the stair beside one of them and a margin, as
// four corners; and the rectangle of tiles round them.
export function stationFootprint(points, s) {
  const spot = spotOf(points, s)
  const along = PLATFORM.length / 2 + 2
  const across = PLATFORM.edge + PLATFORM.width + PLATFORM.stair + 1
  const corners = []
  for (const [a, b] of [[-along, -across], [along, -across], [along, across], [-along, across]]) {
    corners.push([spot.x + spot.dx * a + spot.dz * b, spot.z + spot.dz * a - spot.dx * b])
  }
  const xs = corners.map(([x]) => x)
  const zs = corners.map(([, z]) => z)
  const tx = Math.floor(Math.min(...xs) / TILE)
  const tz = Math.floor(Math.min(...zs) / TILE)
  const lot = [tx, tz, Math.ceil(Math.max(...xs) / TILE) - tx, Math.ceil(Math.max(...zs) / TILE) - tz]
  return { spot, corners, lot }
}

const lotsMeet = (a, b) => a[0] < b[0] + b[2] && b[0] < a[0] + a[2] && a[1] < b[1] + b[3] && b[1] < a[1] + a[3]

// Where two polylines cross: [{ a: s along the first, b: s along the second, angle }].
function crossings(p, q) {
  const found = []
  const chunk = 16
  const boxes = (points) => {
    const list = []
    for (let start = 0; start < points.length / 2 - 1; start += chunk) {
      const end = Math.min(points.length / 2 - 1, start + chunk)
      let x0 = Infinity
      let z0 = Infinity
      let x1 = -Infinity
      let z1 = -Infinity
      for (let k = start; k <= end; k++) {
        x0 = Math.min(x0, points[k * 2])
        x1 = Math.max(x1, points[k * 2])
        z0 = Math.min(z0, points[k * 2 + 1])
        z1 = Math.max(z1, points[k * 2 + 1])
      }
      list.push({ start, end, x0, z0, x1, z1 })
    }
    return list
  }
  for (const u of boxes(p)) {
    for (const v of boxes(q)) {
      if (u.x1 < v.x0 || v.x1 < u.x0 || u.z1 < v.z0 || v.z1 < u.z0) continue
      for (let i = u.start; i < u.end; i++) {
        for (let j = v.start; j < v.end; j++) {
          const ax = p[i * 2]
          const az = p[i * 2 + 1]
          const rx = p[i * 2 + 2] - ax
          const rz = p[i * 2 + 3] - az
          const cx = q[j * 2]
          const cz = q[j * 2 + 1]
          const sx = q[j * 2 + 2] - cx
          const sz = q[j * 2 + 3] - cz
          const denominator = rx * sz - rz * sx
          if (Math.abs(denominator) < 1e-9) continue
          const t = ((cx - ax) * sz - (cz - az) * sx) / denominator
          const w = ((cx - ax) * rz - (cz - az) * rx) / denominator
          if (t < 0 || t > 1 || w < 0 || w > 1) continue
          const angle = Math.abs(Math.asin(Math.max(-1, Math.min(1, denominator / (Math.hypot(rx, rz) * Math.hypot(sx, sz))))))
          found.push({ a: (i + t) * STEP, b: (j + w) * STEP, angle })
        }
      }
    }
  }
  return found
}

export function planRoutes(region) {
  const { fine } = region
  const lines = region.rail.lines
  const half = trainLength(2) / 2

  // The ground under each line: the highest within ±10 m along it and across both beams and
  // the cars' skirts, so the beam never dips under its clearance between two points.
  const plans = lines.map((line) => {
    const points = line.alignment.points
    const count = points.length / 2
    const ground = new Float64Array(count)
    for (let k = 0; k < count; k++) {
      const spot = spotOf(points, k * STEP)
      let top = -Infinity
      for (const along of [-10, 0, 10]) {
        for (const across of [-(TRACK_HALF + 1.6), 0, TRACK_HALF + 1.6]) {
          top = Math.max(top, fine.heightAt(spot.x + spot.dx * along + spot.dz * across, spot.z + spot.dz * along - spot.dx * across).height)
        }
      }
      ground[k] = top
    }
    return { line, points, count, length: (count - 1) * STEP, ground, stations: [], floors: [] }
  })

  // Stations and the land they take; a station whose land meets another's slides along its line.
  const placed = []
  const moved = []
  for (const plan of plans) {
    for (const station of plan.line.stations) {
      let shift = 0
      let print = stationFootprint(plan.points, station.s)
      const clash = (lot) => placed.some((other) => lotsMeet(other, lot))
      for (const step of SLIDES) {
        if (!clash(print.lot)) break
        const s = station.s + step
        if (s - half - 30 < 0 || s + half + 30 > plan.length) continue
        const next = stationFootprint(plan.points, s)
        if (!clash(next.lot)) {
          shift = step
          print = next
          break
        }
      }
      if (shift) moved.push({ line: plan.line.name, station: station.name, by: shift })
      placed.push(print.lot)
      // The station's own ground, under its whole footprint.
      let floor = -Infinity
      const [a, b, c, d] = print.corners
      for (let u = 0; u <= 1.0001; u += 0.1) {
        for (let v = 0; v <= 1.0001; v += 0.25) {
          const x = (a[0] * (1 - u) + b[0] * u) * (1 - v) + (d[0] * (1 - u) + c[0] * u) * v
          const z = (a[1] * (1 - u) + b[1] * u) * (1 - v) + (d[1] * (1 - u) + c[1] * u) * v
          floor = Math.max(floor, fine.heightAt(x, z).height)
        }
      }
      plan.stations.push({ name: station.name, s: station.s + shift, floor, lot: print.lot, ...(shift ? { moved: shift } : {}) })
    }
  }

  // Where two lines cross, the one whose nearest station is farther from the crossing passes
  // over the other.
  const passes = []
  for (let i = 0; i < plans.length; i++) {
    for (let j = i + 1; j < plans.length; j++) {
      for (const crossing of crossings(plans[i].points, plans[j].points)) {
        const nearest = (plan, s) => Math.min(...plan.stations.map((station) => Math.abs(station.s - s)))
        const di = nearest(plans[i], crossing.a)
        const dj = nearest(plans[j], crossing.b)
        const [over, under, so, su] = di > dj || (di === dj && plans[i].line.id > plans[j].line.id)
          ? [plans[i], plans[j], crossing.a, crossing.b]
          : [plans[j], plans[i], crossing.b, crossing.a]
        const reach = Math.min(60, 8 / Math.max(0.15, Math.sin(crossing.angle)))
        passes.push({ over, under, so, su, reach })
      }
    }
  }

  // Beam profiles; crossings depend on the lower line's beam, so a few rounds settle them.
  const stationHalfSpan = Math.max(half + 8, PLATFORM.length / 2 + 4)
  const profile = (plan) => {
    const level = plan.stations.map((station) => [station.s - stationHalfSpan, station.s + stationHalfSpan])
    const floor = plan.stations.map((station) => [station.s - PLATFORM.length / 2, station.s + PLATFORM.length / 2, station.floor + CLEARANCE])
    return beamProfile(plan.ground, STEP, { level, floor: [...floor, ...plan.floors] })
  }
  for (const plan of plans) plan.beam = profile(plan)
  for (let round = 0; round < 3; round++) {
    for (const plan of plans) plan.floors = []
    for (const pass of passes) {
      const k = Math.min(pass.under.count - 1, Math.round(pass.su / STEP))
      pass.over.floors.push([pass.so - pass.reach, pass.so + pass.reach, pass.under.beam[k] + CROSSING_CLEARANCE])
    }
    for (const plan of plans) plan.beam = profile(plan)
  }

  const packs = plans.map((plan) => encodeLine({
    id: plan.line.id,
    name: plan.line.name,
    color: plan.line.color,
    kind: plan.line.kind ?? 'line',
    points: plan.points,
    heights: plan.beam,
    stations: plan.stations.map((station) => {
      const k = Math.min(plan.count - 1, Math.round(station.s / STEP))
      return { name: station.name, s: station.s, y0: plan.beam[k] - CLEARANCE, ...(station.moved ? { moved: station.moved } : {}), lots: [station.lot, null] }
    }),
  }))
  return {
    packs,
    report: {
      moved,
      crossings: passes.map((pass) => ({ over: pass.over.line.name, under: pass.under.line.name, at: Math.round(pass.so), clearance: Math.round((pass.over.beam[Math.round(pass.so / STEP)] - pass.under.beam[Math.round(pass.su / STEP)]) * 100) / 100 })),
    },
  }
}
