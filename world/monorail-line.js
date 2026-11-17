// A straddle-beam monorail (跨座式モノレール), as far as it can be told without drawing it:
// the real measures of its beam and its cars, the line a train follows, how an automatic
// train is driven along it (ATO: no driver), and what the train and the stations say and show
// while it runs. Nothing here needs a screen, so all of it can be tested.
//
// Where a train is depends on the time alone: the whole service repeats itself after one
// round, and the place of a train is worked out from the clock. Everyone who looks at the
// same clock therefore sees the same train in the same place, with nothing sent between them.

// The measures of the Japanese standard straddle type (日本跨座式), in metres.
// The beam is the prestressed concrete girder the cars sit astride: 0.85 wide and 1.5 high,
// in spans of 22 m (the standard of the Osaka Monorail). The car is that of a two-car train
// of the Okinawa Urban Monorail: 14.7 long, 2.98 wide, 5.1 from the bottom of its skirts to
// its roof; its floor lies 1.13 above the top of the beam, which is how high a platform is.
export const BEAM = { width: 0.85, height: 1.5, span: 22 }
export const CAR = {
  length: 14.7, width: 2.98, height: 5.1,
  // Above the top of the beam: the floor, the ceiling inside, the top of the roof; and how
  // far the skirts hang down over the sides of the beam.
  floor: 1.13, ceiling: 3.28, roof: 3.73, skirt: 1.37,
  // Two doorways a side, 1.3 wide and 1.9 high, their middles this far from the middle of the car.
  doors: [-3.65, 3.65], doorWidth: 1.3, doorHeight: 1.9,
  // The space between two cars, bridged by a gangway.
  gap: 0.5,
}

// How a train is driven. Speeds in m/s, accelerations in m/s². (3.0 km/h/s is 0.83 m/s².)
export const DRIVE = {
  speed: 12.5, // 45 km/h: the lines of a small town are short
  accel: 0.85, // 3.1 km/h/s
  brake: 0.95, // 3.4 km/h/s, the service brake
  dwell: 22, // how long a train stands at a station, in seconds
  doorsOpenAt: 1.4, // after stopping
  doorTime: 2.4, // how long the doors take to open or to close
  melodyAt: 9.5, // before leaving: the melody starts
  doorsCloseAt: 5.2, // before leaving: the doors start to close
}

const clamp = (value, low, high) => Math.min(high, Math.max(low, value))
const round = (value) => Math.round(value * 1000) / 1000

// The middle of each car of a train of `cars` cars, measured along the train from its middle.
export const carOffsets = (cars) => Array.from({ length: cars }, (_, index) => (index - (cars - 1) / 2) * (CAR.length + CAR.gap))
// The middle of every doorway of a train, measured the same way.
export const doorOffsets = (cars) => carOffsets(cars).flatMap((middle) => CAR.doors.map((door) => round(middle + door)))
export const trainLength = (cars) => cars * CAR.length + (cars - 1) * CAR.gap

// ---- The line -----------------------------------------------------------------------

// The way a line runs, from the corners it is drawn through: straight stretches joined by
// arcs of a circle, sampled every metre or so. `points` are [x, z]; `radius` is that of the
// curves, which are made tighter where a stretch is too short for them.
export function alignment(points, radius = 60) {
  const samples = [[...points[0]]]
  const push = (point) => {
    const last = samples.at(-1)
    if (Math.hypot(point[0] - last[0], point[1] - last[1]) > 1e-6) samples.push(point)
  }
  for (let index = 1; index < points.length - 1; index++) {
    const [a, b, c] = [points[index - 1], points[index], points[index + 1]]
    const before = Math.hypot(b[0] - a[0], b[1] - a[1])
    const after = Math.hypot(c[0] - b[0], c[1] - b[1])
    const u = [(b[0] - a[0]) / before, (b[1] - a[1]) / before]
    const v = [(c[0] - b[0]) / after, (c[1] - b[1]) / after]
    const turn = Math.acos(clamp(u[0] * v[0] + u[1] * v[1], -1, 1))
    if (turn < 1e-3) continue
    // How far before the corner the curve begins, and the radius that leaves room for it.
    const reach = Math.min(radius * Math.tan(turn / 2), before / 2, after / 2)
    const bend = reach / Math.tan(turn / 2)
    const side = Math.sign(u[0] * v[1] - u[1] * v[0]) || 1
    const start = [b[0] - u[0] * reach, b[1] - u[1] * reach]
    const centre = [start[0] - u[1] * side * bend, start[1] + u[0] * side * bend]
    const from = Math.atan2(start[1] - centre[1], start[0] - centre[0])
    const steps = Math.max(2, Math.ceil(bend * turn))
    for (let step = 0; step <= steps; step++) {
      const angle = from + side * turn * step / steps
      push([centre[0] + Math.cos(angle) * bend, centre[1] + Math.sin(angle) * bend])
    }
  }
  push([...points.at(-1)])
  const at = [0]
  for (let index = 1; index < samples.length; index++) {
    at.push(at[index - 1] + Math.hypot(samples[index][0] - samples[index - 1][0], samples[index][1] - samples[index - 1][1]))
  }
  const length = at.at(-1)
  // The spot `s` metres along the line, and the way the line runs there.
  const spot = (s) => {
    const distance = clamp(s, 0, length)
    let low = 0
    let high = at.length - 1
    while (high - low > 1) {
      const middle = (low + high) >> 1
      if (at[middle] <= distance) low = middle
      else high = middle
    }
    const span = at[high] - at[low] || 1
    const t = (distance - at[low]) / span
    const [p, q] = [samples[low], samples[high]]
    return { x: p[0] + (q[0] - p[0]) * t, z: p[1] + (q[1] - p[1]) * t, dx: (q[0] - p[0]) / span, dz: (q[1] - p[1]) / span }
  }
  return { length, spot, samples }
}

// Where the piers stand, as distances along a line `length` metres long: about one span
// apart, one at each end, and none inside the stretches in `clear` ([from, to] pairs: the
// roads the line crosses, the way into a station). A pier that would stand in one is moved
// to its nearer end.
export function piersOf(length, wanted = [], span = BEAM.span) {
  // (Stretches that overlap, such as two roads side by side, are one stretch.)
  const clear = []
  for (const [from, to] of [...wanted].sort((p, q) => p[0] - q[0])) {
    const last = clear.at(-1)
    if (last && from <= last[1]) last[1] = Math.max(last[1], to)
    else clear.push([from, to])
  }
  const count = Math.max(1, Math.round(length / span))
  const spots = []
  for (let index = 0; index <= count; index++) {
    let at = length * index / count
    for (let pass = 0; pass < 4; pass++) {
      const blocked = clear.find(([from, to]) => at > from + 1e-6 && at < to - 1e-6)
      if (!blocked) break
      at = at - blocked[0] < blocked[1] - at ? blocked[0] : blocked[1]
    }
    at = clamp(at, 0, length)
    // (Two piers never stand closer than 4 m; the last one stays at the end of the line.)
    if (!spots.length || at - spots.at(-1) > 4) spots.push(at)
    else if (index === count) spots[spots.length - 1] = length
  }
  return spots
}

// ---- Driving --------------------------------------------------------------------------

// A run from a standing start to a stop `distance` metres on: speeding up, holding the top
// speed if there is room to reach it, and braking to stand exactly at the mark.
function runOf(distance, { speed, accel, brake }) {
  const top = Math.min(speed, Math.sqrt(2 * distance * accel * brake / (accel + brake)))
  const up = top / accel
  const down = top / brake
  const steady = Math.max(0, distance - top * top / (2 * accel) - top * top / (2 * brake)) / top
  const time = up + steady + down
  // How far the train has come, and how fast it goes, `t` seconds after starting.
  const at = (t) => {
    if (t <= 0) return [0, 0]
    if (t < up) return [accel * t * t / 2, accel * t]
    if (t < up + steady) return [top * top / (2 * accel) + top * (t - up), top]
    if (t < time) {
      const left = time - t
      return [distance - brake * left * left / 2, brake * left]
    }
    return [distance, 0]
  }
  return { time, top, at }
}

// A line with its service. `spec` is:
//   name    what the line is called
//   path    the corners of the line, as [x, z] in metres (a straight line has two)
//   y       the height of the top of the beam
//   stops   [{ name, at, side, station? }]: how far along the line the middle of a train
//           stands at each station, in order, and the side its platform is on (1 the left of
//           someone looking along the line, -1 the right)
//   cars    how many cars a train has
// A train runs to the last stop and back again, calling at every stop both ways.
export function createLine(spec, drive = DRIVE) {
  const way = alignment(spec.path, spec.radius)
  const stops = spec.stops.map((stop, index) => ({ side: 1, ...stop, index }))
  const cars = spec.cars ?? 2
  // One round of the service, as a list of what the train does and when each thing starts.
  const round = []
  let clock = 0
  const order = [...stops.keys(), ...[...stops.keys()].reverse().slice(1, -1)]
  order.forEach((at, step) => {
    const next = order[(step + 1) % order.length]
    round.push({ kind: 'dwell', at, next, start: clock, time: drive.dwell })
    clock += drive.dwell
    const run = runOf(Math.abs(stops[next].at - stops[at].at), drive)
    round.push({ kind: 'run', at, next, start: clock, time: run.time, run, way: Math.sign(stops[next].at - stops[at].at) })
    clock += run.time
  })
  const period = clock

  // How far the doors stand open (0 to 1), `t` seconds into a stop.
  const doorsAt = (t) => {
    const opening = (t - drive.doorsOpenAt) / drive.doorTime
    const closing = (drive.dwell - drive.doorsCloseAt - t) / drive.doorTime
    return clamp(Math.min(opening, closing), 0, 1)
  }

  // Everything about the train at a moment: `time` in seconds, by any clock that only runs on.
  function stateAt(time) {
    const t = ((time % period) + period) % period
    let phase = round[0]
    for (const candidate of round) {
      if (candidate.start <= t) phase = candidate
      else break
    }
    const into = t - phase.start
    const from = stops[phase.at]
    const to = stops[phase.next]
    if (phase.kind === 'dwell') {
      return {
        time, phase: 'dwell', s: from.at, speed: 0, way: Math.sign(to.at - from.at) || 1, stop: from, next: to, doors: doorsAt(into),
        // The seconds until it leaves.
        leaves: phase.time - into,
      }
    }
    const [gone, speed] = phase.run.at(into)
    return { time, phase: 'run', s: from.at + phase.way * gone, speed, way: phase.way, stop: null, from, next: to, doors: 0, arrives: phase.time - into }
  }

  // What is said and sounded between two moments (`from` exclusive, `to` inclusive), in order.
  // Each is { time, kind, stop, next }: 'arrive' (the train has stopped), 'open', 'melody',
  // 'close' (the doors start to close), 'depart', 'next' (said in the car once it is under
  // way), 'soon' (said in the car as it nears a station), 'approach' (said on the platform).
  function eventsBetween(from, to) {
    if (!(to > from)) return []
    const marks = []
    for (const phase of round) {
      const here = stops[phase.at]
      const there = stops[phase.next]
      if (phase.kind === 'dwell') {
        marks.push([phase.start, 'arrive', here, there], [phase.start + drive.doorsOpenAt, 'open', here, there],
          [phase.start + phase.time - drive.melodyAt, 'melody', here, there], [phase.start + phase.time - drive.doorsCloseAt, 'close', here, there])
      } else {
        marks.push([phase.start, 'depart', here, there], [phase.start + Math.min(6, phase.time * 0.3), 'next', here, there],
          [phase.start + Math.max(phase.time - 13, phase.time * 0.55), 'soon', here, there], [phase.start + Math.max(phase.time - 16, phase.time * 0.4), 'approach', here, there])
      }
    }
    const found = []
    // (A long gap is not replayed: only the last round of it matters.)
    const begin = Math.max(from, to - period)
    for (let lap = Math.floor(begin / period); lap <= Math.floor(to / period); lap++) {
      for (const [at, kind, stop, next] of marks) {
        const time = lap * period + at
        if (time > begin && time <= to) found.push({ time, kind, stop, next })
      }
    }
    return found.sort((a, b) => a.time - b.time)
  }

  // Where the train is going: the end of the line ahead of it.
  const boundFor = (state) => (state.way > 0 ? stops.at(-1) : stops[0])

  return { name: spec.name ?? 'モノレール', y: spec.y ?? 7, cars, stops, way, period, drive, stateAt, eventsBetween, boundFor }
}

// ---- What is said and shown -------------------------------------------------------------

const sideName = (side, way) => (side * way > 0 ? '左' : '右')

// What the automatic announcement says for an event (see eventsBetween), in the car and on
// the platform. Null where nothing is said.
export function announcement(line, event) {
  const { kind, stop, next } = event
  const last = next.index === 0 || next.index === line.stops.length - 1
  const way = Math.sign(next.at - stop.at) || 1
  const bound = way > 0 ? line.stops.at(-1) : line.stops[0]
  if (kind === 'next') {
    return { where: 'car', text: `本日も、${line.name}をご利用いただき、ありがとうございます。次は、${next.name}、${next.name}${last ? '、終点' : ''}です。` }
  }
  if (kind === 'soon') {
    return { where: 'car', text: `まもなく、${next.name}${last ? '、終点' : ''}です。お出口は、${sideName(next.side, way)}側です。` }
  }
  if (kind === 'approach') {
    return { where: 'platform', at: next, chime: 'approach', text: `まもなく、${bound.name}ゆきが、まいります。ホームドアから離れて、お待ちください。` }
  }
  if (kind === 'open') return { where: 'both', at: stop, chime: 'door', text: `${stop.name}、${stop.name}です。` }
  if (kind === 'melody') return { where: 'platform', at: stop, chime: 'depart', text: `${bound.name}ゆきが、発車いたします。ドアが閉まります。ご注意ください。` }
  if (kind === 'close') return { where: 'both', at: stop, chime: 'door', text: null }
  return null
}

// What the boards show. In the car, over each door: the next station while running, the
// station and where the train is bound while it stands.
export function carDisplay(line, state) {
  const bound = line.boundFor(state)
  if (state.phase === 'dwell') return [`${state.stop.name}`, state.leaves < line.drive.melodyAt ? 'ドアが閉まります' : `${bound.name} ゆき`]
  return [state.arrives < 14 ? 'まもなく' : '次は', `${state.next.name}`]
}

// On the platform of a stop: where the next train is bound, and how long until it comes.
export function platformDisplay(line, state, stop) {
  const bound = line.boundFor(state)
  if (state.phase === 'dwell' && state.stop.index === stop.index) {
    return [`${bound.name} ゆき`, state.leaves < line.drive.melodyAt ? '発車します' : '停車中']
  }
  // The seconds until the train next stands at this stop: the rest of this phase, then every
  // phase up to its next call here.
  let wait = null
  for (let ahead = 0.5; ahead < line.period; ahead += 2) {
    const then = line.stateAt(state.time + ahead)
    if (then.phase === 'dwell' && then.stop.index === stop.index) {
      wait = ahead
      break
    }
  }
  const coming = line.stateAt(state.time + (wait ?? 0) + 1)
  const goes = line.boundFor(coming)
  if (wait === null) return [`${goes.name} ゆき`, '']
  return [`${goes.name} ゆき`, wait < 20 ? 'まもなく到着' : `約 ${Math.max(1, Math.round(wait / 60))} 分`]
}
