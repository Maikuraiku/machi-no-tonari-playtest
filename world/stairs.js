// Stairs between two storeys, worked out from the line they follow on the plan.
//
// A flight is described by its centre line from the foot to the head (`pts`, in metres), its
// clear width and the way it turns corners. Straight stairs, L-shaped ones (かね折れ), stairs
// that turn back on themselves with a half landing (折り返し) or with winders (回り階段) and
// spiral stairs (らせん) are all the same thing here: a line, a width and a rise.
//
// The steps follow Japanese practice (建築基準法施行令23条): in a house a riser is at most
// 23 cm and a tread at least 15 cm deep; shared stairs of flats are gentler. As many risers
// are used as give a comfortable stair in the room there is.

const sub = (a, b) => [a[0] - b[0], a[1] - b[1]]
const add = (a, b, scale = 1) => [a[0] + b[0] * scale, a[1] + b[1] * scale]
const dot = (a, b) => a[0] * b[0] + a[1] * b[1]
const size = (v) => Math.hypot(v[0], v[1])
const unit = (v) => {
  const length = size(v) || 1
  return [v[0] / length, v[1] / length]
}
// The left-hand side of someone walking along `d` (x runs east, z runs south).
const leftOf = (d) => [d[1], -d[0]]

// How steps are proportioned for each way of building a stair.
export const STAIR_LOOKS = {
  wood: { label: '木の箱階段', riser: 0.205, most: 0.23, tread: 0.24, rail: 'wall' },
  open: { label: 'オープン階段', riser: 0.2, most: 0.23, tread: 0.25, rail: 'bars' },
  rc: { label: 'コンクリート階段', riser: 0.18, most: 0.2, tread: 0.27, rail: 'bars' },
  steel: { label: '鉄骨階段', riser: 0.19, most: 0.22, tread: 0.25, rail: 'bars' },
  stone: { label: '石の階段', riser: 0.17, most: 0.2, tread: 0.3, rail: 'bars' },
}

// A spiral stair as the line it follows: round a post at (x, z), `sweep` degrees from `from`.
export function spiralLine({ x, z, radius = 0.85, from = 0, sweep = 360, post = 0.1 }) {
  const steps = Math.max(4, Math.round(Math.abs(sweep) / 30))
  const middle = (radius + post) / 2
  return {
    w: radius - post,
    pts: Array.from({ length: steps + 1 }, (_, index) => {
      const angle = (from + sweep * index / steps) * Math.PI / 180
      return [x + Math.cos(angle) * middle, z + Math.sin(angle) * middle]
    }),
  }
}

const layouts = new WeakMap()

// Everything about a stair that climbs `rise` metres: its steps, its outline on the plan, the
// line a walker follows, and where it is stepped onto and off.
export function stairLayout(stair, rise) {
  let known = layouts.get(stair)
  if (!known) layouts.set(stair, known = new Map())
  if (!known.has(rise)) known.set(rise, layOut(stair, rise))
  return known.get(rise)
}

function layOut(stair, rise) {
  const spiral = stair.k === 'spiral'
  const line = spiral ? spiralLine(stair) : stair
  const w = Math.max(0.4, line.w ?? 0.8)
  const half = w / 2
  const look = STAIR_LOOKS[stair.look] ?? STAIR_LOOKS.wood
  const pts = line.pts.filter((point, index, all) => !index || size(sub(point, all[index - 1])) > 1e-4)
  const count = pts.length - 1
  const dirs = pts.slice(1).map((point, index) => unit(sub(point, pts[index])))
  const lengths = pts.slice(1).map((point, index) => size(sub(point, pts[index])))
  const along = [0]
  lengths.forEach((length) => along.push(along.at(-1) + length))
  const total = along.at(-1)
  // A bend of about a right angle is a corner with a landing or winders; a slighter one is
  // simply walked round (a spiral is made of those).
  const corner = pts.map((_, index) => index > 0 && index < count && Math.abs(dot(dirs[index - 1], dirs[index])) < 0.35)

  // Points on the centre line and on the two edges, by distance walked from the foot.
  const segmentAt = (s) => {
    let index = 0
    while (index < count - 1 && s > along[index + 1]) index++
    return index
  }
  const centre = (s) => {
    const index = segmentAt(s)
    return add(pts[index], dirs[index], Math.min(Math.max(s - along[index], 0), lengths[index]))
  }
  const edge = (s, side) => add(centre(s), leftOf(dirs[segmentAt(s)]), side * half)
  // Where the edge turns at a bend: the corner of the landing outside, the newel inside.
  const joint = (index, which) => {
    const a = leftOf(dirs[index - 1])
    const b = leftOf(dirs[index])
    // For unit normals a and b the mitre lies along a + b, at half / cos(half the bend).
    const cosHalf = Math.sqrt(Math.max(0.05, (1 + dot(a, b)) / 2))
    return add(pts[index], unit([a[0] + b[0], a[1] + b[1]]), which * half / cosHalf)
  }
  // One edge of the stair between two distances, following the bends.
  const side = (from, to, which) => {
    const points = [edge(from, which)]
    for (let index = 1; index < count; index++) {
      if (along[index] > from + 1e-6 && along[index] < to - 1e-6) points.push(joint(index, which))
    }
    points.push(edge(to, which))
    return points
  }
  const strip = (from, to) => [...side(from, to, 1), ...side(from, to, -1).reverse()]

  // The stair is a chain of straight runs with corners between them.
  const spans = []
  let start = 0
  for (let index = 1; index <= count; index++) {
    if (index < count && !corner[index]) continue
    const from = along[start] + (start > 0 ? half : 0)
    const to = along[index] - (index < count ? half : 0)
    spans.push({ kind: 'run', from: Math.min(from, to), to: Math.max(from, to), length: Math.max(0, to - from) })
    if (index < count) spans.push({ kind: 'corner', vertex: index, from: along[index] - half, to: along[index] + half })
    start = index
  }
  const runs = spans.filter((span) => span.kind === 'run')
  runs.forEach((run, index) => {
    run.first = index === 0
    run.last = index === runs.length - 1
    // Between the two corners of a stair that turns back there is only the gap between flights.
    run.short = !run.first && !run.last && run.length < 0.35
  })
  const winders = stair.turn === 'winder'
  // Corners joined by such a gap make one landing.
  const groups = []
  for (const [index, span] of spans.entries()) {
    if (span.kind !== 'corner') continue
    const before = spans[index - 1]
    if (!winders && before.short && groups.length) groups.at(-1).to = span.to
    else groups.push({ from: span.from, to: span.to, corners: [] })
    groups.at(-1).corners.push(span)
  }
  const cornerSteps = winders ? spans.filter((span) => span.kind === 'corner').length * 3 : groups.length
  const main = runs.filter((run) => !run.short)
  const length = main.reduce((sum, run) => sum + run.length, 0)

  // Share the treads out between the runs, for a given number of risers.
  const share = (risers) => {
    const treads = risers - 1 - cornerSteps
    if (treads < 0) return null
    const exact = main.map((run) => (length > 0 ? treads * run.length / length : treads / main.length))
    const given = exact.map(Math.floor)
    let left = treads - given.reduce((sum, value) => sum + value, 0)
    for (const index of exact.map((value, at) => [value - Math.floor(value), at]).sort((a, b) => b[0] - a[0]).map(([, at]) => at)) {
      if (left-- <= 0) break
      given[index]++
    }
    const depths = main.map((run, index) => (given[index] ? run.length / given[index] : Infinity))
    return { risers, given, shallowest: Math.min(...depths) }
  }
  const wanted = Math.max(2, Math.ceil(rise / look.riser - 1e-6))
  const fewest = Math.max(2, Math.ceil(rise / look.most - 1e-6), cornerSteps + 1)
  let chosen = null
  for (let risers = Math.max(wanted, fewest); risers >= fewest; risers--) {
    const option = share(risers)
    if (!option) continue
    chosen ??= option
    // Fewer, taller steps are taken only as far as it takes to stand on them properly.
    if (option.shallowest >= 0.21) {
      chosen = option
      break
    }
    if (option.shallowest > chosen.shallowest) chosen = option
  }
  chosen ??= share(cornerSteps + 1)
  const n = chosen.risers
  const riser = rise / n

  // Where each riser stands, and the step it leads onto.
  const steps = []
  const step = (at, kind, extra = {}) => steps.push({ at, kind, ...extra })
  let lastEnd = 0
  for (const span of spans) {
    if (span.kind === 'run') {
      if (span.short) continue
      const treads = chosen.given[main.indexOf(span)]
      const depth = treads ? Math.min(span.length / treads, spiral ? Infinity : look.tread + 0.05) : 0
      const spare = span.length - depth * treads
      // What is left over lengthens the landing next to it; the top step ends at the floor above.
      const lead = span.last ? spare : span.first ? 0 : spare / 2
      for (let tread = 0; tread < treads; tread++) step(span.from + lead + depth * tread, 'tread')
      lastEnd = span.from + lead + depth * treads
    } else if (winders) {
      const [p, a, b] = [pts[span.vertex], dirs[span.vertex - 1], dirs[span.vertex]]
      for (let wedge = 0; wedge < 3; wedge++) step(span.from + (span.to - span.from) * wedge / 3, 'winder', { corner: { p, a, b }, wedge })
      lastEnd = span.to
    } else if (groups.some((group) => group.corners[0] === span)) {
      step(lastEnd, 'landing')
      lastEnd = groups.find((group) => group.corners[0] === span).to
    }
  }
  // (A stair with no room for all its steps would come out short: the last riser takes the rest.)
  const risersAt = [...steps.map((entry) => entry.at), total]

  const surfaces = steps.map((entry, index) => {
    const y = riser * (index + 1)
    const end = Math.max(entry.at + 1e-4, risersAt[index + 1])
    if (entry.kind === 'winder') {
      // Three wedges fan out from the newel at the inside of the turn.
      const { p, a, b } = entry.corner
      const pivot = add(add(p, a, -half), b, half)
      const ray = (step30) => {
        const angle = step30 * Math.PI / 6
        const direction = [-b[0] * Math.cos(angle) + a[0] * Math.sin(angle), -b[1] * Math.cos(angle) + a[1] * Math.sin(angle)]
        return add(pivot, direction, w / Math.max(Math.cos(angle), Math.sin(angle)))
      }
      const outer = add(add(pivot, b, -w), a, w)
      const poly = entry.wedge === 0 ? [pivot, ray(0), ray(1)] : entry.wedge === 1 ? [pivot, ray(1), outer, ray(2)] : [pivot, ray(2), ray(3)]
      return { kind: 'winder', y, poly, nose: [pivot, ray(entry.wedge)] }
    }
    return { kind: entry.kind, y, poly: strip(entry.at, end), nose: [edge(entry.at, 1), edge(entry.at, -1)] }
  })
  // The gap between two flights that turn back with winders is level with the last winder.
  if (winders) {
    for (const span of spans) {
      if (span.kind !== 'run' || !span.short || span.length < 1e-3) continue
      const before = steps.findLastIndex((entry) => entry.at <= span.from + 1e-6)
      if (before >= 0) surfaces.push({ kind: 'landing', y: riser * (before + 1), poly: strip(span.from, span.to), nose: null })
    }
  }

  // The line a walker follows: a gentle ramp over the steps, level on the landings.
  const heightAt = (s) => {
    let climbed = 0
    while (climbed < n && s >= risersAt[climbed]) climbed++
    return climbed * riser
  }
  const knots = [[0, 0]]
  risersAt.forEach((at, index) => {
    const before = at - (index ? risersAt[index - 1] : 0)
    const after = (risersAt[index + 1] ?? total + 1) - at
    knots.push([Math.max(0, at - Math.min(0.13, before / 2)), riser * index])
    knots.push([Math.min(total, at + Math.min(0.13, after / 2)), riser * (index + 1)])
  })
  knots.push([total, rise])
  knots.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const ramp = (s) => {
    let index = 1
    while (index < knots.length - 1 && knots[index][0] < s) index++
    const [s0, y0] = knots[index - 1]
    const [s1, y1] = knots[index]
    return s1 - s0 < 1e-9 ? y1 : y0 + (y1 - y0) * Math.min(1, Math.max(0, (s - s0) / (s1 - s0)))
  }
  const marks = new Set(knots.map(([s]) => s))
  for (let index = 1; index < count; index++) marks.add(along[index])
  const path = [...marks].sort((a, b) => a - b).map((s) => [...centre(s), ramp(s)])
  path[0][2] = 0
  path.at(-1)[2] = rise

  // Larger pieces, for working out what can be walked under and what stands in the way.
  const pieces = []
  for (const span of spans) {
    if (span.kind === 'run' && span.length < 1e-3) continue
    pieces.push({ kind: span.kind, from: span.from, to: span.to, poly: strip(span.from, span.to), y0: heightAt(span.from + 1e-4), y1: heightAt(span.to - 1e-4) })
  }

  const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
  // Where the stair turns a corner, and which of its edges is on the inside of the turn (there
  // the edge is a single point, the newel).
  const corners = []
  for (let index = 1; index < count; index++) {
    if (corner[index]) corners.push({ s: along[index], half, inner: dot(leftOf(dirs[index - 1]), dirs[index]) > 0 ? 1 : -1 })
  }
  return {
    corners,
    n, riser, w, total, spiral,
    look: stair.look && STAIR_LOOKS[stair.look] ? stair.look : 'wood',
    // The shallowest tread, for telling a proper stair from a ladder.
    tread: chosen.shallowest,
    steep: chosen.shallowest < 0.15,
    surfaces, pieces, path,
    outline: strip(0, total),
    side, strip, edge, centre, heightAt, ramp,
    foot: { at: [...mid(edge(0, 1), edge(0, -1)), 0], out: [-dirs[0][0], -dirs[0][1]], half },
    head: { at: [...mid(edge(total, 1), edge(total, -1)), rise], out: [dirs[count - 1][0], dirs[count - 1][1]], half },
  }
}
