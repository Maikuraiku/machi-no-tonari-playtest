// Monorail lines that follow the region's route map (路線図). Each railway the region planned
// becomes a straddle-beam monorail on the same alignment and with the same stations: the beam
// runs along the line's own curves at a height above the real ground that keeps the roads below
// clear, climbs no steeper than a monorail can, and is level through every station. Nothing
// here needs a screen, so all of it can be tested.
import { BEAM, CAR, DRIVE, trainLength } from './monorail-line.js'

// The top of the beam stands at least this far above the ground: the skirts of the cars then
// pass 5.25 m over the road, above the 4.5 m every Japanese road keeps clear (建築限界).
export const CLEARANCE = 6.62
// The steepest grade the beam is laid at (a straddle monorail climbs on rubber tyres; Japanese
// lines are laid at up to about 60‰, and 50‰ is kept here).
export const GRADE = 0.05
// How a region monorail is driven: faster than a town's short shuttle (about 65 km/h).
export const ROUTE_DRIVE = { ...DRIVE, speed: 18, accel: 0.97, brake: 1.1, dwell: 25 }
// A train every this many seconds, at most, in each direction.
export const HEADWAY = 420
// Double track: half the distance between the centres of the two beams.
export const TRACK_HALF = 1.85
// A station: a side platform outside each beam, its edge just clear of the car, 3.5 m wide,
// long enough for three cars, under a roof 3.9 m over the floor; a stair 3 m wide beside it.
export const PLATFORM = { edge: TRACK_HALF + CAR.width / 2 + 0.07, width: 3.5, length: 48, roof: 3.9, stair: 3 }
// Where one line passes over another, the upper beam stands at least this far above the lower:
// the roof of a car (3.73), a margin, and the upper beam itself (1.5).
export const CROSSING_CLEARANCE = 6.5

const clamp = (value, low, high) => Math.min(high, Math.max(low, value))

// The height of a profile [[s, y], ...] at `s`, straight between its points.
export function heightOn(heights, s) {
  if (!heights?.length) return 0
  if (s <= heights[0][0]) return heights[0][1]
  const last = heights[heights.length - 1]
  if (s >= last[0]) return last[1]
  let low = 0
  let high = heights.length - 1
  while (high - low > 1) {
    const middle = (low + high) >> 1
    if (heights[middle][0] <= s) low = middle
    else high = middle
  }
  const [s0, y0] = heights[low]
  const [s1, y1] = heights[high]
  return y0 + (y1 - y0) * ((s - s0) / (s1 - s0 || 1))
}

// The lowest beam that keeps `clearance` above the ground everywhere, never climbs or falls
// more steeply than `grade`, lies level over each of the `level` stretches ([from, to]) and
// stays at or above `min` over each of the `floor` stretches ([from, to, min]: a station's own
// ground, or another line it passes over). `ground` is the ground height every `step` metres
// from s = 0.
export function beamProfile(ground, step, { clearance = CLEARANCE, grade = GRADE, level = [], floor = [] } = {}) {
  const count = ground.length
  const y = Float64Array.from(ground, (g) => g + clearance)
  const fall = grade * step
  const flatten = () => {
    for (const [from, to, min] of floor) {
      const a = clamp(Math.floor(from / step), 0, count - 1)
      const b = clamp(Math.ceil(to / step), 0, count - 1)
      for (let k = a; k <= b; k++) y[k] = Math.max(y[k], min)
    }
    for (const [from, to] of level) {
      const a = clamp(Math.floor(from / step), 0, count - 1)
      const b = clamp(Math.ceil(to / step), 0, count - 1)
      let top = -Infinity
      for (let k = a; k <= b; k++) top = Math.max(top, y[k])
      for (let k = a; k <= b; k++) y[k] = top
    }
  }
  // Raising the beam to keep within the grade can tilt a station a little; a few rounds of
  // levelling and grading settle it.
  for (let round = 0; round < 6; round++) {
    flatten()
    for (let k = 1; k < count; k++) y[k] = Math.max(y[k], y[k - 1] - fall)
    for (let k = count - 2; k >= 0; k--) y[k] = Math.max(y[k], y[k + 1] - fall)
  }
  flatten()
  return y
}

// A line spec for createLine/createTransit from one of the region's railway lines.
//   line     { name, color, points: [x0, z0, x1, z1, ...] every `step` metres along the line,
//              ground: the ground height at each point, stations: [{ name, s }] }
//   origin   the region metres of the scene's (0, 0); `datum` the region height of the scene's 0
//   from/to  the stretch of the line to lay, in metres along it (default: all of it)
export function routeSpec(line, { origin = [0, 0], datum = 0, from = 0, to = Infinity, cars = 2, step = 20 } = {}) {
  const count = line.points.length / 2
  const length = (count - 1) * step
  const start = clamp(from, 0, length)
  const end = clamp(to, start, length)
  const half = trainLength(cars) / 2
  // Stations whose whole train fits on the stretch.
  const stations = line.stations.filter((station) => station.s - half - 2.5 >= start && station.s + half + 2.5 <= end)
  if (stations.length < 2) return null
  const first = Math.floor(start / step)
  const last = Math.ceil(end / step)
  const path = []
  const ground = []
  for (let k = first; k <= last; k++) {
    path.push([line.points[k * 2] - origin[0], line.points[k * 2 + 1] - origin[1]])
    ground.push((line.ground?.[k] ?? 0) - datum)
  }
  const offset = first * step
  // Each platform is level for the length of the station platforms and a little more either side,
  // so the beam never pitches inside the station box.
  const stationHalfSpan = Math.max(half + 8, PLATFORM.length / 2 + 4)
  const level = stations.map((station) => [station.s - offset - stationHalfSpan, station.s - offset + stationHalfSpan])
  const beam = beamProfile(ground, step, { level })
  const heights = Array.from(beam, (y, index) => [index * step, Math.round(y * 100) / 100])
  const groundline = ground.map((g, index) => [index * step, Math.round(g * 100) / 100])
  // The way into the station keeps clear of piers, so passengers can walk under the beam.
  const clear = stations.map((station) => [station.s - offset - 6, station.s - offset + 6])
  return {
    name: line.name,
    color: line.color,
    path,
    radius: 2000,
    heights,
    ground: groundline,
    y: heights[0][1],
    cars,
    clear,
    drive: ROUTE_DRIVE,
    stops: stations.map((station) => ({ name: station.name, at: station.s - offset, side: 1 })),
  }
}

// How many trains a line needs for a train every HEADWAY seconds each way, given its period
// (the time of a round trip: out to the far end and back).
export function trainsFor(period, headway = HEADWAY) {
  return Math.max(1, Math.ceil(period / headway))
}

// The heights a car meets: the top of the beam under its middle, and its pitch.
export function carHeight(heights, s) {
  const y = heightOn(heights, s)
  const ahead = heightOn(heights, s + CAR.length / 2)
  const behind = heightOn(heights, s - CAR.length / 2)
  return { y, pitch: Math.atan2(ahead - behind, CAR.length) }
}

// Piers: under the beam about one span apart, standing on the ground, from the ground to the
// underside of the beam.
export function pierHeights(heights, ground, at) {
  const top = heightOn(heights, at) - BEAM.height
  return { top, foot: ground, height: Math.max(0, top - ground) }
}
