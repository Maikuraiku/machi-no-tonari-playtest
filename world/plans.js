// Easy plans: a building painted on a grid, one letter per cell and one string per storey.
//
// The grid is the one Japanese houses are really built on, half a 間 (910 mm) to a cell, so
// that a corridor is one cell wide, a toilet one by two, a six-mat room three by four. This
// file turns such a plan into the walls, doors, windows, rooms, stairs, lifts and furniture
// of a design (see design.js), the way a Japanese house or block of flats is put together:
// an earth-floored entrance a step below the hall, stairs with proper treads, flats entered
// from a shared stairwell or corridor, balconies, a porch and a path to the street.
//
// A plan is drawn as seen from the street behind you: the last row is the front of the lot.
// Lower-case letters are the same rooms as upper-case ones, but never join them: two bedrooms
// side by side are 'B' and 'b'. `units` (optional, same shape) gives each cell the number of
// the flat it belongs to; '0' is shared space.
import {
  BODY, CELL, CELLS, FINISHES, FRAME_COLORS, ITEMS, OPENINGS, ROOFS, ROOM_LABELS, STYLES, colliders, frontDoors, hash, houseSeed,
} from './design.js?v=online-1794980046418'
import { equip, fenceYard } from './exterior.js?v=online-1794980046418'

const SIDES = [
  { name: 's', dx: 0, dz: 1 }, { name: 'n', dx: 0, dz: -1 }, { name: 'e', dx: 1, dz: 0 }, { name: 'w', dx: -1, dz: 0 },
]
const sideOf = (name) => SIDES.find((side) => side.name === name)
const OPPOSITE = { s: 'n', n: 's', e: 'w', w: 'e' }
// How far something that faces a side is turned (0 faces the front of the lot).
const TURN = { s: 0, e: 90, n: 180, w: 270 }
const round = (value) => Math.round(value * 1000) / 1000
// The wall between a cell and its neighbour, named after the cell north or west of it.
const edgeOf = (x, z, side) => (side === 's' ? `${x},${z},s` : side === 'n' ? `${x},${z - 1},s` : side === 'e' ? `${x},${z},e` : `${x - 1},${z},e`)

// Balconies and open corridors have a floor but no walls of their own: they count as outdoors.
const OPEN_ROOMS = 'VC'
// Rooms people walk through on their way to other rooms.
const HALLS = 'HCAG'
const LIVING = 'LDK'
// Where a walker cannot come from: outside, stairs, lift shafts, parking.
const walkable = (code) => code !== '.' && !'SXJ'.includes(code)

export function planOf(house) {
  const turned = (house.turn ?? 0) % 2 === 1
  const tilesWide = turned ? house.d ?? 1 : house.w ?? 1
  const tilesDeep = turned ? house.w ?? 1 : house.d ?? 1
  const width = CELLS * tilesWide
  const depth = CELLS * tilesDeep
  const floors = house.floors ?? []
  const units = house.units ?? []
  const inside = (level, x, z) => level >= 0 && level < floors.length && x >= 0 && z >= 0 && x < width && z < depth
  const key = (level, x, z) => (inside(level, x, z) ? floors[level][z * width + x] ?? '.' : '.')
  const at = (level, x, z) => key(level, x, z).toUpperCase()
  const unit = (level, x, z) => (inside(level, x, z) ? units[level]?.[z * width + x] ?? '0' : '0')
  // Whether a cell is part of the building proper, with a storey of its own.
  const solid = (level, x, z) => {
    const code = at(level, x, z)
    return code !== '.' && code !== 'J' && !OPEN_ROOMS.includes(code)
  }
  const lotWidth = 8 * tilesWide
  const lotDepth = 8 * tilesDeep
  // The grid sits in the middle of the lot, which leaves a strip along every boundary.
  const ox = (lotWidth - width * CELL) / 2
  const oz = (lotDepth - depth * CELL) / 2
  return {
    width, depth, levels: floors.length, key, at, unit, solid, lotWidth, lotDepth,
    gx: (index) => round(ox + index * CELL), gz: (index) => round(oz + index * CELL),
  }
}

// The rooms of one storey: cells that touch and carry the same letter, in the same flat.
function roomsOf(plan, level) {
  const rooms = []
  const found = new Map()
  const name = (x, z) => `${x},${z}`
  for (let z = 0; z < plan.depth; z++) {
    for (let x = 0; x < plan.width; x++) {
      const key = plan.key(level, x, z)
      if (key === '.' || key.toUpperCase() === 'J' || found.has(name(x, z))) continue
      const unit = plan.unit(level, x, z)
      const room = { id: rooms.length, code: key.toUpperCase(), key, unit, cells: [], open: OPEN_ROOMS.includes(key.toUpperCase()) }
      const pending = [[x, z]]
      found.set(name(x, z), room)
      while (pending.length) {
        const [cx, cz] = pending.pop()
        room.cells.push({ x: cx, z: cz })
        for (const { dx, dz } of SIDES) {
          const next = name(cx + dx, cz + dz)
          if (!found.has(next) && plan.key(level, cx + dx, cz + dz) === key && plan.unit(level, cx + dx, cz + dz) === unit) {
            found.set(next, room)
            pending.push([cx + dx, cz + dz])
          }
        }
      }
      room.cells.sort((a, b) => a.z - b.z || a.x - b.x)
      room.x0 = Math.min(...room.cells.map((cell) => cell.x))
      room.x1 = Math.max(...room.cells.map((cell) => cell.x))
      room.z0 = Math.min(...room.cells.map((cell) => cell.z))
      room.z1 = Math.max(...room.cells.map((cell) => cell.z))
      room.box = room.cells.length === (room.x1 - room.x0 + 1) * (room.z1 - room.z0 + 1)
      rooms.push(room)
    }
  }
  return { rooms, at: (x, z) => found.get(name(x, z)) ?? null }
}

// ---- Stairs and lifts ------------------------------------------------------------

const stairsOfPlan = new WeakMap()

// The cells of a stairwell in the order they are climbed, if they form a strip one cell wide.
function chainOf(cells) {
  const has = (x, z) => cells.some((cell) => cell.x === x && cell.z === z)
  const next = (cell) => SIDES.map(({ dx, dz }) => ({ x: cell.x + dx, z: cell.z + dz })).filter((other) => has(other.x, other.z))
  if (cells.some((cell) => next(cell).length > 2)) return null
  if (cells.length === 1) return [cells[0]]
  const ends = cells.filter((cell) => next(cell).length === 1)
  if (ends.length !== 2) return null
  const chain = [ends[0]]
  while (chain.length < cells.length) {
    const step = next(chain.at(-1)).find((cell) => !chain.some((seen) => seen.x === cell.x && seen.z === cell.z))
    if (!step) return null
    chain.push(step)
  }
  return chain
}

// Where the stairs of a plan stand, storey by storey, and the line each one follows.
// A strip of S cells one cell wide is climbed from end to end: a straight stair, or one that
// turns where the strip turns. A block two or three cells wide holds a stair that turns back
// on itself. Stairs of the storeys above stand on those below, so a stairwell runs right up.
export function stairsOf(plan, style = 'modern') {
  if (stairsOfPlan.has(plan)) return stairsOfPlan.get(plan)
  const info = STYLES[style] ?? STYLES.modern
  const rc = info.stair === 'rc'
  const tw = (rc ? info.wall : info.inner) / 2 + 0.012
  const levels = []
  const centre = (cell) => [plan.gx(cell.x) + CELL / 2, plan.gz(cell.z) + CELL / 2]
  // What lies past one face of a stair cell. Stairs that are shared space are stepped onto from
  // shared space, never from inside a flat: there the neighbour counts as closed ('.').
  const beyond = (level, cell, side) => {
    const [x, z] = [cell.x + sideOf(side).dx, cell.z + sideOf(side).dz]
    return plan.unit(level, x, z) === plan.unit(level, cell.x, cell.z) || plan.at(level, x, z) === '.' ? plan.at(level, x, z) : '.'
  }
  const hallish = (code) => (HALLS.includes(code) ? 2 : 0)
  for (let level = 0; level < plan.levels - 1; level++) {
    const specs = []
    for (const room of roomsOf(plan, level).rooms) {
      if (room.code !== 'S') continue
      const set = new Set(room.cells.map((cell) => `${cell.x},${cell.z}`))
      const under = (levels[level - 1] ?? []).find((spec) => spec.set.size === set.size && [...spec.set].every((name) => set.has(name)))
      if (under) {
        specs.push(under)
        continue
      }
      const chain = room.box && Math.min(room.x1 - room.x0, room.z1 - room.z0) >= 1 ? null : chainOf(room.cells) ?? [room.cells[0]]
      let best = null
      const offer = (score, spec) => {
        if (!best || score > best.score) best = { score, spec }
      }
      if (chain) {
        // Climb the strip one way or the other; step on and off through whichever faces lead somewhere.
        for (const order of [chain, [...chain].reverse()]) {
          const first = order[0]
          const last = order.at(-1)
          const towards = (from, to) => SIDES.find(({ dx, dz }) => to && from.x + dx === to.x && from.z + dz === to.z)?.name
          const ahead = towards(first, order[1])
          const back = towards(last, order.at(-2))
          const footSides = SIDES.map((side) => side.name).filter((name) => name !== ahead)
          const headSides = SIDES.map((side) => side.name).filter((name) => name !== back)
          for (const foot of footSides) {
            for (const head of headSides) {
              if (order.length === 1 && foot === head) continue
              const on = beyond(level, first, foot)
              const off = beyond(level + 1, last, head)
              const straightOn = !ahead || foot === OPPOSITE[ahead]
              const straightOff = !back || head === OPPOSITE[back]
              const score = (walkable(on) ? 20 : 0) + (walkable(off) ? 20 : 0) + hallish(on) + hallish(off)
                + (straightOn ? 1 : 0) + (straightOff ? 1 : 0) + (order.length === 1 && head === OPPOSITE[foot] ? 1 : 0)
              const face = (cell, name, inset) => {
                const [x, z] = centre(cell)
                return [x + sideOf(name).dx * (CELL / 2 - inset), z + sideOf(name).dz * (CELL / 2 - inset)]
              }
              const line = [face(first, foot, 0.05), ...order.map(centre), face(last, head, 0.05)]
              // Points on a straight stretch say nothing: only the ends and the corners stay.
              const pts = line.filter((point, index) => {
                if (index === 0 || index === line.length - 1) return true
                const [a, b] = [line[index - 1], line[index + 1]]
                return Math.abs((point[0] - a[0]) * (b[1] - point[1]) - (point[1] - a[1]) * (b[0] - point[0])) > 1e-6
              })
              offer(score, {
                pts: pts.map(([x, z]) => [round(x), round(z)]), w: round(CELL - tw * 2 - 0.01),
                foot: [{ ...first, side: foot }], head: [{ ...last, side: head }],
              })
            }
          }
        }
      } else {
        // A block: two flights side by side, joined at the far end by a landing or by winders.
        const wide = room.x1 - room.x0 + 1
        const deep = room.z1 - room.z0 + 1
        const axes = wide === deep ? ['z', 'x'] : wide < deep ? ['z'] : ['x']
        for (const axis of axes) {
          for (const open of axis === 'z' ? ['s', 'n'] : ['e', 'w']) {
            for (const flip of [false, true]) {
              const row = axis === 'z' ? (open === 's' ? room.z1 : room.z0) : (open === 'e' ? room.x1 : room.x0)
              const ends = room.cells.filter((cell) => (axis === 'z' ? cell.z : cell.x) === row)
              const on = ends.map((cell) => beyond(level, cell, open))
              const off = ends.map((cell) => beyond(level + 1, cell, open))
              const score = (on.every(walkable) ? 20 : on.some(walkable) ? 8 : 0) + (off.every(walkable) ? 20 : off.some(walkable) ? 8 : 0)
                + Math.max(...on.map(hallish)) + Math.max(...off.map(hallish)) + (flip ? 0 : 0.5) + (open === 's' || open === 'e' ? 0.2 : 0)
              const gap = rc ? 0.1 : 0.06
              // Across the flights (u) and along them (v), inside the walls of the stairwell.
              const [u0, u1] = axis === 'z' ? [plan.gx(room.x0) + tw, plan.gx(room.x1 + 1) - tw] : [plan.gz(room.z0) + tw, plan.gz(room.z1 + 1) - tw]
              const [v0, v1] = axis === 'z' ? [plan.gz(room.z0), plan.gz(room.z1 + 1)] : [plan.gx(room.x0), plan.gx(room.x1 + 1)]
              const w = (u1 - u0 - gap) / 2
              const forward = open === 's' || open === 'e'
              const mouth = forward ? v1 - 0.05 : v0 + 0.05
              const far = forward ? v0 + tw + w / 2 : v1 - tw - w / 2
              const [ua, ub] = flip ? [u1 - w / 2, u0 + w / 2] : [u0 + w / 2, u1 - w / 2]
              const point = (u, v) => (axis === 'z' ? [round(u), round(v)] : [round(v), round(u)])
              offer(score, {
                pts: [point(ua, mouth), point(ua, far), point(ub, far), point(ub, mouth)], w: round(w),
                turn: Math.abs(mouth - far) - w / 2 < 1.3 ? 'winder' : 'landing',
                foot: ends.map((cell) => ({ ...cell, side: open })), head: ends.map((cell) => ({ ...cell, side: open })),
                // For a way in under the half landing (see the entrance of a walk-up block).
                block: { axis, open, far: OPPOSITE[open], flip, u0, u1, v0, v1, w, gap, tw },
              })
            }
          }
        }
      }
      specs.push({ ...best.spec, set, cells: room.cells, look: info.stair })
    }
    levels.push(specs)
  }
  levels.push([])
  stairsOfPlan.set(plan, levels)
  return levels
}

// The lift shafts of one storey: a block of X cells, with the side its door is on.
function liftsOf(plan, level, rooms, tw) {
  return rooms.rooms.filter((room) => room.code === 'X' && room.box).map((room) => {
    // The door faces wherever people can stand, preferably the same way on every storey.
    const sides = ['s', 'e', 'w', 'n'].map((name) => {
      const { dx, dz } = sideOf(name)
      const cells = room.cells.filter((cell) => (dx ? cell.x === (dx > 0 ? room.x1 : room.x0) : cell.z === (dz > 0 ? room.z1 : room.z0)))
      let good = 0
      for (let storey = 0; storey < plan.levels; storey++) {
        if (plan.at(storey, room.x0, room.z0) !== 'X') continue
        // The door of a lift opens onto space everyone may walk in: a corridor or a hall first.
        const codes = cells.map((cell) => (plan.unit(storey, cell.x + dx, cell.z + dz) === plan.unit(storey, cell.x, cell.z) ? plan.at(storey, cell.x + dx, cell.z + dz) : '.'))
        if (codes.every((code) => walkable(code) && code !== 'V')) good += codes.every((code) => HALLS.includes(code)) ? 3 : 1
      }
      return { name, good, cells }
    }).sort((a, b) => b.good - a.good)
    const [door] = sides
    const x0 = plan.gx(room.x0)
    const x1 = plan.gx(room.x1 + 1)
    const z0 = plan.gz(room.z0)
    const z1 = plan.gz(room.z1 + 1)
    const across = door.name === 's' || door.name === 'n'
    return {
      room, side: door.name, x: round((x0 + x1) / 2), z: round((z0 + z1) / 2), r: TURN[door.name],
      w: round((across ? x1 - x0 : z1 - z0) - tw * 2 - 0.16), d: round((across ? z1 - z0 : x1 - x0) - tw * 2 - 0.12),
      // The door, as a spot on a grid line.
      door: across ? { line: 'h', index: door.name === 's' ? room.z1 + 1 : room.z0, pos: (x0 + x1) / 2 }
        : { line: 'v', index: door.name === 'e' ? room.x1 + 1 : room.x0, pos: (z0 + z1) / 2 },
    }
  })
}

// ---- Doors: which rooms open into which ----------------------------------------

function doorKind(a, b) {
  const codes = a.code + b.code
  if (a.unit !== b.unit) return 'door-flat'
  // A lobby is shut off from the open air by glass doors.
  if (codes.includes('A') && codes.includes('C')) return 'door-auto'
  if (codes.includes('V')) return 'door-terrace'
  if (codes.includes('Y')) return codes.includes('W') ? 'door-shoji' : 'door-terrace'
  if (codes.includes('U')) return 'door-fold'
  if (codes.includes('W')) return 'door-fusuma'
  if (codes.includes('R')) return /[BP]/.test(codes) ? 'door-closet' : 'door-white'
  if (/[TNE]/.test(codes)) return 'door-white'
  if (/[LD]/.test(codes)) return 'door-glass'
  return 'door-wood'
}
const WIDE = { 'door-terrace': 0.76, 'door-shoji': 0.78, 'door-fusuma': 0.78, 'door-closet': 0.74, 'door-auto': 0.76 }

// Decides, for one storey, which boundaries between rooms are left open (a kitchen open to the
// living room, the step up from the entrance), and where the doors go.
function linkRooms(plan, level, rooms, flights, lifts) {
  const shared = new Map()
  const pairOf = (a, b) => (a.id < b.id ? `${a.id}|${b.id}` : `${b.id}|${a.id}`)
  for (const room of rooms.rooms) {
    for (const cell of room.cells) {
      for (const [dx, dz, dir] of [[1, 0, 'e'], [0, 1, 's']]) {
        const other = rooms.at(cell.x + dx, cell.z + dz)
        if (!other || other === room) continue
        const pair = pairOf(room, other)
        if (!shared.has(pair)) shared.set(pair, [])
        shared.get(pair).push({ x: cell.x, z: cell.z, dir, name: `${cell.x},${cell.z},${dir}` })
      }
    }
  }
  // Stairs stand between walls: only the ends they are stepped on and off at are open.
  const closed = new Set()
  const open = new Set()
  for (const [index, list] of [flights.here, flights.below].entries()) {
    for (const spec of list) {
      for (const cell of spec.cells) for (const { name } of SIDES) closed.add(edgeOf(cell.x, cell.z, name))
      for (const face of index === 0 ? spec.foot : spec.head) open.add(edgeOf(face.x, face.z, face.side))
    }
  }
  for (const name of open) closed.delete(name)
  // Lift shafts are closed all round; their one door is put in separately.
  for (const lift of lifts) for (const cell of lift.room.cells) for (const { name } of SIDES) closed.add(edgeOf(cell.x, cell.z, name))

  const neighbours = (room) => [...shared.keys()].map((pair) => pair.split('|').map(Number)).filter((pair) => pair.includes(room.id))
    .map((pair) => rooms.rooms[pair[0] === room.id ? pair[1] : pair[0]])
    .filter((other) => shared.get(pairOf(room, other)).some((edge) => !closed.has(edge.name)))
  const reach = (a, b) => shared.get(pairOf(a, b)).filter((edge) => !closed.has(edge.name)).length

  // Rooms that are really one space. The earth floor of an entrance is open to the hall, a step
  // up; only where there is no hall does it open straight into a room.
  const hallBy = (room) => neighbours(room).some((other) => other.code === 'H' && other.unit === room.unit)
  const entrance = (a, b) => a.code === 'G' && (b.code === 'H' || (!hallBy(a) && 'LDMOA'.includes(b.code)))
  const openPair = (a, b) => a.unit === b.unit && !a.open && !b.open && (
    (LIVING.includes(a.code) && LIVING.includes(b.code)) || entrance(a, b) || entrance(b, a)
    || (a.code === b.code && 'HAMO'.includes(a.code)) || ('AH'.includes(a.code) && 'AH'.includes(b.code))
    || ('YH'.includes(a.code) && 'YH'.includes(b.code)))
  const openAir = (a, b) => a.open && b.open && a.unit === b.unit
  const joined = new Map(rooms.rooms.map((room) => [room.id, room.id]))
  const spaceOf = (room) => {
    let id = room.id
    while (joined.get(id) !== id) id = joined.get(id)
    return id
  }
  const join = (a, b) => joined.set(spaceOf(a), spaceOf(b))
  for (const [pair, edges] of shared) {
    const [a, b] = pair.split('|').map((id) => rooms.rooms[Number(id)])
    if (!(openPair(a, b) || openAir(a, b))) continue
    for (const edge of edges) if (!closed.has(edge.name)) open.add(edge.name)
    join(a, b)
  }

  const doors = []
  const linked = new Set()
  // Puts a door between two rooms, on the longest straight stretch of wall they share.
  const link = (a, b, kind = doorKind(a, b)) => {
    const pair = pairOf(a, b)
    if (linked.has(pair) || spaceOf(a) === spaceOf(b)) return true
    const edges = (shared.get(pair) ?? []).filter((edge) => !closed.has(edge.name))
    if (!edges.length) return false
    const runs = []
    for (const edge of [...edges].sort((p, q) => (p.dir === q.dir ? (p.dir === 'e' ? p.x - q.x || p.z - q.z : p.z - q.z || p.x - q.x) : p.dir < q.dir ? -1 : 1))) {
      const last = runs.at(-1)?.at(-1)
      const follows = last && last.dir === edge.dir && (edge.dir === 'e' ? last.x === edge.x && last.z + 1 === edge.z : last.z === edge.z && last.x + 1 === edge.x)
      if (follows) runs.at(-1).push(edge)
      else runs.push([edge])
    }
    const run = runs.sort((p, q) => q.length - p.length)[0]
    const first = run[0]
    const wide = Object.hasOwn(WIDE, kind) && run.length >= 2
    const middle = wide ? run.length / 2 : Math.floor((run.length - 1) / 2) + 0.5
    doors.push({
      k: kind, a, b,
      ww: wide ? OPENINGS[kind].w : Math.min(WIDE[kind] ?? OPENINGS[kind].w, CELL - 0.15),
      ...(first.dir === 'e' ? { line: 'v', index: first.x + 1, pos: plan.gz(first.z) + middle * CELL } : { line: 'h', index: first.z + 1, pos: plan.gx(first.x) + middle * CELL }),
    })
    linked.add(pair)
    return true
  }
  const kindOf = (room) => (room.open ? room.code : HALLS.includes(room.code) ? 'hall' : LIVING.includes(room.code) || 'MO'.includes(room.code) ? 'living' : room.code)
  const pick = (room, order, all = false) => {
    const options = neighbours(room).filter((other) => other.unit === room.unit && other.code !== 'S' && other.code !== 'X')
    const ranked = options.map((other) => [order.indexOf(order.includes(other.code) ? other.code : kindOf(other)), other])
      .filter(([rank]) => rank >= 0).sort((p, q) => p[0] - q[0] || reach(room, q[1]) - reach(room, p[1]))
    if (all) return ranked.filter(([, other]) => link(room, other)).length > 0
    return ranked.some(([, other]) => link(room, other))
  }
  for (const room of rooms.rooms) {
    const { code } = room
    if (code === 'U') pick(room, ['N', 'hall', 'living']) || pick(room, ['B', 'P', 'W', 'E'])
    else if (code === 'N') pick(room, ['hall', 'living']) || pick(room, ['B', 'P', 'W', 'E'])
    else if (code === 'T') pick(room, ['hall', 'N', 'living']) || pick(room, ['B', 'P', 'W', 'E'])
    else if (code === 'R') pick(room, ['W', 'B', 'P']) || pick(room, ['hall', 'living', 'E', 'N'])
    else if (code === 'B' || code === 'P' || code === 'E') pick(room, ['hall', 'living', 'Y']) || pick(room, ['B', 'P', 'W', 'E', 'N'])
    else if (code === 'W') {
      pick(room, ['hall', 'living']) || pick(room, ['B', 'P', 'E', 'N'])
      pick(room, ['W', 'Y'], true)
    } else if (code === 'Y') pick(room, ['W', 'living', 'hall', 'B', 'P'], true)
    else if (code === 'V') pick(room, ['living', 'B', 'P', 'W', 'Y'], true) || pick(room, ['hall', 'E', 'N'])
    else if (code === 'A') neighbours(room).filter((other) => other.code === 'C').forEach((other) => link(room, other))
    else if (code === 'G' && room.unit !== '0') {
      // The door of a flat opens onto the shared corridor or the landing of the stairs.
      const out = neighbours(room).filter((other) => other.unit === '0' && 'CAH'.includes(other.code))
      out.sort((p, q) => reach(room, q) - reach(room, p)).some((other) => link(room, other, 'door-flat'))
    }
  }
  // A living room that is not already open to the hall gets one door from it.
  const entered = new Set()
  for (const room of rooms.rooms) {
    if (!(LIVING.includes(room.code) || 'MO'.includes(room.code)) || room.open || entered.has(spaceOf(room))) continue
    const hall = neighbours(room).filter((other) => other.unit === room.unit && HALLS.includes(other.code))
      .sort((p, q) => (p.code === 'H' ? 0 : 1) - (q.code === 'H' ? 0 : 1))
    if (hall.some((other) => spaceOf(other) === spaceOf(room) || linked.has(pairOf(room, other))) || (hall.length && link(room, hall[0]))) entered.add(spaceOf(room))
  }

  // Every room must be within reach of the way in: open one more door wherever one is not.
  const stairDoors = (room) => [...flights.here, ...flights.below].some((spec) => (flights.here.includes(spec) ? spec.foot : spec.head)
    .some((face) => rooms.at(face.x + sideOf(face.side).dx, face.z + sideOf(face.side).dz) === room))
  const starts = rooms.rooms.filter((room) => room.unit === '0' && (level === 0 ? 'GAMC'.includes(room.code) || stairDoors(room)
    : stairDoors(room) || lifts.some((lift) => liftFront(lift, rooms) === room)))
  for (let guard = 0; guard < rooms.rooms.length * 2; guard++) {
    const reached = new Set()
    const pending = starts.length ? [...starts] : rooms.rooms.filter((room) => !room.open && room.code !== 'S' && room.code !== 'X').slice(0, 1)
    pending.forEach((room) => reached.add(room))
    while (pending.length) {
      const room = pending.pop()
      for (const other of neighbours(room)) {
        if (reached.has(other) || other.code === 'S' || other.code === 'X') continue
        if (spaceOf(other) === spaceOf(room) || linked.has(pairOf(room, other))) {
          reached.add(other)
          pending.push(other)
        }
      }
    }
    const lost = rooms.rooms.filter((room) => !reached.has(room) && room.code !== 'S' && room.code !== 'X')
    let opened = false
    for (const room of lost) {
      // Within a flat first; a flat with no door of its own gets one from shared space.
      const near = neighbours(room).filter((other) => reached.has(other) && !other.open)
        .sort((p, q) => (p.unit === room.unit ? 0 : 1) - (q.unit === room.unit ? 0 : 1) || (HALLS.includes(p.code) ? 0 : 1) - (HALLS.includes(q.code) ? 0 : 1))
        .filter((other) => other.unit === room.unit || other.unit === '0' || room.unit === '0')
      const airy = neighbours(room).filter((other) => reached.has(other) && other.open && (other.unit === room.unit || other.code === 'C'))
      if ([...near, ...airy].some((other) => link(room, other))) {
        opened = true
        break
      }
    }
    if (!opened) break
  }
  return { open, closed, doors, shared, spaceOf }
}

// The room in front of the door of a lift.
function liftFront(lift, rooms) {
  const { dx, dz } = sideOf(lift.side)
  const cell = dx ? { x: dx > 0 ? lift.room.x1 : lift.room.x0, z: lift.room.z0 } : { x: lift.room.x0, z: dz > 0 ? lift.room.z1 : lift.room.z0 }
  return rooms.at(cell.x + dx, cell.z + dz)
}

// ---- The look of a building: finishes chosen by style, or by the owner --------

// Wall finish and floor of each kind of room.
const INSIDE = {
  L: ['wp-white', 'floor-oak'], D: ['wp-white', 'floor-oak'], K: ['wp-ivory', 'floor-oak'], B: ['wp-white', 'floor-maple'], P: ['wp-ivory', 'floor-maple'],
  W: ['juraku', 'tatami'], R: ['wp-ivory', 'floor-maple'], N: ['wp-white', 'tile-floor'], U: ['tile-bath-white', 'tile-floor-blue'], T: ['wp-white', 'tile-floor'],
  G: ['wp-ivory', 'genkan-floor'], H: ['wp-white', 'floor-oak'], S: ['wp-white', 'floor-walnut'], Y: ['plaster-white', 'floor-walnut'],
  O: ['wp-grey', 'carpet-grey'], M: ['wp-ivory', 'stone-floor'], E: ['wp-ivory', 'floor-maple'], V: ['concrete', 'concrete-floor'],
  C: ['concrete', 'concrete-floor'], A: ['wp-ivory', 'stone-floor'], X: ['metal-silver', 'concrete-floor'],
}

// The finishes a style starts with; `house.look` replaces any of them.
export function lookOf(house) {
  const style = Object.hasOwn(STYLES, house.style) ? house.style : 'modern'
  const seed = houseSeed(house.id)
  const pick = (options, salt = 0) => options[Math.floor(hash(seed, salt + 1) * options.length) % options.length]
  const roof = { ...STYLES[style].roof }
  let look
  if (style === 'danchi') {
    look = { wall: pick(['mortar-white', 'mortar-cream', 'mortar-ivory']), frame: pick(['silver', 'steel', 'sage'], 2), door: pick(['steel', 'green', 'bronze'], 3), rail: 'bars' }
  } else if (style === 'mansion') {
    look = { wall: pick(['tile-white', 'tile-beige', 'tile-sand', 'tile-grey']), frame: 'black', door: 'bronze', rail: pick(['glass', 'solid'], 4) }
  } else if (style === 'office') {
    look = { wall: pick(['metal-dark', 'tile-grey', 'metal-silver']), frame: 'black', door: 'black', rail: 'glass' }
  } else if (style === 'brutal') {
    look = { wall: pick(['concrete-stained', 'concrete', 'concrete-dark']), frame: 'black', door: 'bronze', rail: 'solid' }
  } else if (style === 'europe') {
    look = { wall: pick(['stucco-cream', 'stucco-rose', 'stucco-ivory', 'stucco-yellow', 'stucco-sage']), frame: 'white', door: pick(['green', 'navy', 'red'], 5), rail: 'bars', low: 'brick-red' }
    roof.f = pick(['roof-tile-orange', 'roof-tile-orange', 'roof-tile-brown'], 2)
  } else if (style === 'japan') {
    look = { wall: 'plaster-white', frame: 'wood', door: 'wood', rail: 'bars', low: pick(['wood-dark', 'wood-dark', 'wood-brown']) }
    roof.f = pick(['roof-kawara', 'roof-kawara', 'roof-kawara-dark'], 2)
  } else if (style === 'shop') {
    look = { wall: pick(['mortar-ivory', 'stucco-ivory', 'siding-sand']), frame: 'silver', door: 'wood', rail: 'bars' }
  } else {
    look = { wall: pick(['siding-white', 'siding-sand', 'siding-grey', 'stucco-white', 'siding-navy']), frame: pick(['black', 'silver', 'bronze'], 2), door: pick(['wood', 'wood-dark', 'black'], 3), rail: 'panel' }
    roof.f = pick(['roof-slate', 'roof-metal', 'roof-slate'], 4)
    roof.k = pick(['gable', 'gable', 'hip', 'shed'], 6)
    if (roof.k === 'shed') roof.pitch = 12
  }
  const chosen = house.look ?? {}
  if (Object.hasOwn(FINISHES, chosen.wall)) {
    look.wall = chosen.wall
    look.low = undefined
  }
  if (Object.hasOwn(FINISHES, chosen.roof)) roof.f = chosen.roof
  if (Object.hasOwn(ROOFS, chosen.roofKind)) {
    roof.k = chosen.roofKind
    if (roof.k !== 'flat') {
      roof.pitch ??= 30
      roof.eave ??= 0.45
    } else roof.parapet ??= 0.4
  }
  if (Object.hasOwn(FRAME_COLORS, chosen.frame)) look.frame = chosen.frame
  if (Object.hasOwn(FRAME_COLORS, chosen.door)) look.door = chosen.door
  return { ...look, style, seed, roof }
}

// The windows of one room along one stretch of outside wall `cells` long, as [where, kind]
// with `where` in cells from the start of the stretch. `towards` is what lies outside:
// 'out' for the open air, 'V' for the room's own balcony, 'C' for a shared corridor.
function windowsFor(style, room, face, cells, towards, level, front) {
  const { code } = room
  const pairs = (kind) => Array.from({ length: Math.floor(cells / 2) }, (_, index) => [cells / 2 + (index - (Math.floor(cells / 2) - 1) / 2) * 2, kind])
  const one = (kind, wide = true) => (wide ? (cells >= 2 ? [[cells / 2, kind]] : []) : [[Math.floor((cells - 1) / 2) + 0.5, kind]])
  if (towards === 'C') return (code === 'B' || code === 'P') && cells >= 2 ? one('win-lattice') : []
  if (code === 'S') return style === 'danchi' || style === 'mansion' || style === 'brutal' ? one('win-block', false) : one('win-tall', false)
  if ('TNU'.includes(code)) return one('win-high', false)
  if ('GRXEAC'.includes(code)) return []
  if (style === 'office') return 'OM'.includes(code) ? pairs(level === 0 && face === front ? 'win-shop' : face === front ? 'win-curtain' : 'win-ribbon') : []
  if (style === 'brutal') return 'OMLDBPK'.includes(code) ? pairs(face === front ? 'win-ribbon' : 'win-hood') : one('win-hood', false)
  if (style === 'shop' && code === 'M') return face === front ? pairs('win-shop') : []
  if (code === 'M' || code === 'O') return pairs(face === front && level === 0 ? 'win-shop' : 'win-slide')
  if (code === 'H') return cells >= 1 && level > 0 ? one('win-tall', false) : []
  const steel = style === 'danchi' ? 'win-steel' : 'win-slide'
  if (towards === 'V') return pairs('door-terrace')
  if (code === 'Y') return pairs('door-terrace')
  if (code === 'L' || code === 'D' || code === 'W') {
    // The big sliding windows look onto the garden at the front; elsewhere a window at sill height.
    if (face === front && level === 0 && style !== 'danchi' && style !== 'mansion') return pairs('door-terrace')
    return cells >= 2 ? one(steel) : []
  }
  if (code === 'K') return cells >= 2 ? one(style === 'danchi' ? 'win-steel' : 'win-wide') : one('win-high', false)
  if (code === 'B' || code === 'P') return cells >= 2 ? one(steel) : one('win-tall', false)
  return []
}

// ---- From plan to design -------------------------------------------------------------

// Turns an easy grid plan into walls, openings, rooms, furniture, stairs and lifts.
export function compileDesign(house) {
  const look = lookOf(house)
  const { style, seed } = look
  const info = STYLES[style]
  const plan = planOf(house)
  const { gx, gz } = plan
  const flightsOfPlan = stairsOf(plan, style)
  const front = 's'
  const tw = info.wall / 2 + 0.012
  const storeys = []
  const yard = { pads: [], steps: [], items: [] }
  const flat = style === 'danchi' || style === 'mansion'

  for (let level = 0; level < plan.levels; level++) {
    const rooms = roomsOf(plan, level)
    const flights = { here: flightsOfPlan[level] ?? [], below: flightsOfPlan[level - 1] ?? [] }
    const lifts = liftsOf(plan, level, rooms, tw)
    const links = linkRooms(plan, level, rooms, flights, lifts)
    const walls = []
    const openings = []
    const seeds = []
    const items = []
    const steps = []
    // Doors, as spots on grid lines: those between rooms, lift doors and the front doors.
    const doors = links.doors.map((door) => ({ ...door }))
    for (const lift of lifts) doors.push({ ...lift.door, k: 'lift-door', ww: OPENINGS['lift-door'].w })

    // How far the floor of each room lies below the floor level of the storey.
    const drop = (room) => {
      if (!room) return 0
      if (room.code === 'G') return room.unit === '0' && !flat ? -info.doma : -Math.min(info.doma, 0.06)
      if (room.code === 'V') return -0.05
      if (room.code === 'C') return -0.03
      return 0
    }

    // The front door: every entrance of a house, the lobby of a block, the front of a shop.
    if (level === 0) {
      const entries = rooms.rooms.filter((room) => room.unit === '0' && room.code === 'G')
      const others = entries.length ? [] : rooms.rooms.filter((room) => room.unit === '0' && 'AMOHL'.includes(room.code))
        .sort((p, q) => 'AMOHL'.indexOf(p.code) - 'AMOHL'.indexOf(q.code) || q.z1 - p.z1).slice(0, 1)
      for (const room of [...entries, ...others]) {
        // The longest stretch of outside wall, the front of the lot first.
        let best = null
        for (const name of ['s', 'e', 'w', 'n']) {
          const { dx, dz } = sideOf(name)
          const outer = room.cells.filter((cell) => plan.at(0, cell.x + dx, cell.z + dz) === '.' || plan.at(0, cell.x + dx, cell.z + dz) === 'J')
            .sort((p, q) => (dx ? p.z - q.z : p.x - q.x))
          const runs = []
          for (const cell of outer) {
            const last = runs.at(-1)?.at(-1)
            if (last && (dx ? last.x === cell.x && last.z + 1 === cell.z : last.z === cell.z && last.x + 1 === cell.x)) runs.at(-1).push(cell)
            else runs.push([cell])
          }
          for (const run of runs) {
            const score = Math.min(run.length, 2) * 10 - ['s', 'e', 'w', 'n'].indexOf(name)
            if (!best || score > best.score) best = { score, name, run }
          }
        }
        if (!best) continue
        const { name, run } = best
        const { dx, dz } = sideOf(name)
        const wide = run.length >= 2
        const grand = room.code !== 'G' || style === 'shop' || style === 'office' || style === 'mansion'
        const kind = grand ? (wide ? 'door-auto' : 'door-glass') : wide ? 'door-entrance' : 'door-steel'
        // A door in a wall two cells long stands in the middle of it; a hall door to one side.
        const middle = wide ? (run.length > 2 && !grand ? 1 : run.length / 2) : 0.5
        doors.push({
          k: kind, ww: Math.min(OPENINGS[kind].w, run.length * CELL - 0.3), s: drop(room), c: look.door, canopy: 1, front: true,
          ...(dx ? { line: 'v', index: run[0].x + (dx > 0 ? 1 : 0), pos: gz(run[0].z) + middle * CELL }
            : { line: 'h', index: run[0].z + (dz > 0 ? 1 : 0), pos: gx(run[0].x) + middle * CELL }),
          out: name,
        })
      }
    }

    // Walls follow the grid lines; one wall runs as far as the same two rooms face each other.
    const describe = (first, second) => {
      const a = rooms.at(...first)
      const b = rooms.at(...second)
      if (a === b) return null
      const outsideA = !a || a.open
      const outsideB = !b || b.open
      if (!a || !b) {
        const room = a ?? b
        if (room.open) return { type: 'rail', a, b }
        return { type: 'ext', a, b }
      }
      if (outsideA !== outsideB) return { type: 'ext', a, b }
      if (outsideA && outsideB) return a.unit === b.unit ? null : { type: 'screen', a, b }
      return null
    }
    const trace = (line, index, count) => {
      let run = null
      const flush = () => {
        if (!run) return
        const { from, to, kind } = run
        const [p, q] = line === 'h' ? [[gx(from), gz(index)], [gx(to + 1), gz(index)]] : [[gx(index), gz(from)], [gx(index), gz(to + 1)]]
        // On a wall along x the first side is north and the second south; on one along z, west and east.
        // A wall's left face looks north (along x) or east (along z).
        const [leftRoom, rightRoom] = line === 'h' ? [kind.a, kind.b] : [kind.b, kind.a]
        const face = (room) => (!room || room.open ? look.wall
          : info.stair === 'rc' && 'SX'.includes(room.code) ? 'mortar-white' : INSIDE[room.code]?.[0] ?? 'wp-white')
        const wall = { a: p, b: q, t: info.inner, l: face(leftRoom), r: face(rightRoom) }
        if (kind.type === 'ext') {
          wall.t = info.wall
          // A band of another finish along the foot of the outside wall (a wainscot of boards, brick).
          if (look.low && level === 0) {
            if (!leftRoom || leftRoom.open) wall.ll = look.low
            if (!rightRoom || rightRoom.open) wall.rl = look.low
          }
        } else if (kind.type === 'rail') {
          Object.assign(wall, { t: look.rail === 'solid' ? 0.12 : 0.06, h: 1.1, rail: (kind.a ?? kind.b).code === 'C' && look.rail === 'glass' ? 'solid' : look.rail })
        } else if (kind.type === 'screen') {
          // Between the balconies of two flats: a thin board that can be broken through in a fire.
          Object.assign(wall, { t: 0.03, h: 1.9, l: 'metal-white', r: 'metal-white' })
        } else if (kind.type === 'open') Object.assign(wall, { t: 0.002, open: 1 })
        else if (kind.type === 'party' || kind.type === 'shaft') wall.t = Math.max(info.inner, info.wall * 0.85)
        const wallIndex = walls.length
        walls.push(wall)
        if (kind.type === 'open' || kind.type === 'screen') {
          run = null
          return
        }
        const start = line === 'h' ? p[0] : p[1]
        const length = (to + 1 - from) * CELL
        const taken = []
        const place = (at, kind2, ww, extra = {}) => {
          const shape = OPENINGS[kind2]
          const width = Math.min(ww ?? shape.w, length - 0.16)
          const centre = Math.min(Math.max(at, width / 2 + 0.08), length - width / 2 - 0.08)
          if (width < 0.3 || taken.some(([lo, hi]) => centre + width / 2 > lo - 0.06 && centre - width / 2 < hi + 0.06)) return false
          taken.push([centre - width / 2, centre + width / 2])
          const sill = extra.s ?? shape.s
          const top = Math.min(sill + shape.h, (wall.h ?? info.storey) - 0.12)
          openings.push({ w: wallIndex, at: round(centre), k: kind2, ww: round(width), hh: round(top - sill), ...extra, s: round(sill) })
          return true
        }
        for (const door of doors) {
          if (door.line !== line || door.index !== index || door.pos < start - 1e-6 || door.pos > start + length + 1e-6) continue
          const extra = {}
          if (door.s !== undefined) extra.s = door.s
          if (door.canopy) extra.canopy = 1
          const paint = door.c ?? (door.k === 'door-flat' ? look.door : door.k === 'door-terrace' || door.k === 'door-auto' || door.k === 'door-glass' ? look.frame
            : door.k === 'door-fusuma' || door.k === 'door-shoji' || door.k === 'door-closet' ? undefined : style === 'japan' ? 'wood' : 'white')
          if (paint) extra.c = paint
          // A front door opens outwards, as Japanese front doors do.
          if (door.front || door.k === 'door-flat') extra.outward = 1
          place(door.pos - start, door.k, door.ww, extra)
        }
        if (kind.type === 'ext') {
          const room = kind.a && !kind.a.open ? kind.a : kind.b
          const outer = room === kind.a ? kind.b : kind.a
          const side = line === 'h' ? (room === kind.a ? 's' : 'n') : (room === kind.a ? 'e' : 'w')
          const towards = !outer ? 'out' : outer.code
          for (const [where, window] of windowsFor(style, room, side, to + 1 - from, towards, level, front)) {
            place(where * CELL, window, undefined, { c: window === 'win-shutter' ? look.door : look.frame })
          }
        }
        run = null
      }
      for (let at = 0; at < count; at++) {
        const [first, second] = line === 'h' ? [[at, index - 1], [at, index]] : [[index - 1, at], [index, at]]
        let kind = describe(first, second)
        const a = rooms.at(...first)
        const b = rooms.at(...second)
        const name = line === 'h' ? `${at},${index - 1},s` : `${index - 1},${at},e`
        // Where stairs are stepped onto, or two rooms share one space, there is no wall at all.
        if (a && b && a !== b && links.open.has(name)) kind = { type: 'open', a, b }
        else if (!kind && a && b && a !== b) {
          const stairs = a.code === 'S' || b.code === 'S' || a.code === 'X' || b.code === 'X'
          kind = { type: a.unit !== b.unit ? 'party' : stairs && info.stair === 'rc' ? 'shaft' : 'int', a, b }
        }
        const key = kind ? `${kind.type}|${kind.a?.id ?? '-'}|${kind.b?.id ?? '-'}` : ''
        if (run && run.key !== key) flush()
        if (!kind) continue
        run ??= { from: at, kind, key }
        run.to = at
      }
      flush()
    }
    for (let j = 0; j <= plan.depth; j++) trace('h', j, plan.width)
    for (let i = 0; i <= plan.width; i++) trace('v', i, plan.depth)

    // What each room is, for its floor, its ceiling and its name.
    for (const room of rooms.rooms) {
      const [first] = room.cells
      const seat = {
        at: [round(gx(first.x) + CELL / 2), round(gz(first.z) + CELL / 2)],
        f: info.stair === 'rc' && room.code === 'S' ? 'concrete-floor' : INSIDE[room.code]?.[1] ?? 'floor-oak',
        c: room.code === 'W' || room.code === 'Y' ? 'ceil-wood' : 'ceil-white', n: ROOM_LABELS[room.code] ?? '', code: room.code,
      }
      const y = drop(room)
      if (y) seat.y = y
      if (room.open) seat.open = 1
      if (room.unit !== '0') seat.unit = room.unit
      if (room.code === 'X') seat.shaft = 1
      seeds.push(seat)
    }

    furnish({ plan, level, rooms, walls, openings, items, house, style, info, flights })

    const stairs = flights.here.map((spec) => ({ k: 'path', pts: spec.pts, w: spec.w, ...(spec.turn === 'winder' ? { turn: 'winder' } : {}), look: spec.look }))
    const liftList = lifts.map((lift) => ({ x: lift.x, z: lift.z, w: lift.w, d: lift.d, r: lift.r }))

    // A walk-up block stands half a storey above the street, and is entered under the half
    // landing of its stairs: a few steps lead up beneath the second flight to the first landing.
    if (level === 0 && info.base >= 0.6) {
      for (const spec of flights.here) {
        if (!spec.block) continue
        const { axis, open, far, flip, u0, u1, v0, v1, w, gap } = spec.block
        const ends = spec.cells.filter((cell) => (axis === 'z' ? cell.z === (far === 'n' ? Math.min(...spec.cells.map((c) => c.z)) : Math.max(...spec.cells.map((c) => c.z)))
          : cell.x === (far === 'w' ? Math.min(...spec.cells.map((c) => c.x)) : Math.max(...spec.cells.map((c) => c.x)))))
        if (!ends.every((cell) => plan.at(0, cell.x + sideOf(far).dx, cell.z + sideOf(far).dz) === '.')) continue
        const pit = -(info.base - 0.1)
        const forward = open === 's' || open === 'e'
        // The second flight is on the side the first is not.
        const [lane0, lane1] = flip ? [u0, u0 + w] : [u1 - w, u1]
        const sign = forward ? 1 : -1
        const farEdge = forward ? v0 : v1
        const landing = farEdge + sign * (info.wall / 2 + w + 0.02)
        const risers = Math.ceil(-pit / 0.17)
        const run = (risers - 1) * 0.27
        const top = landing + sign * (run + 0.1)
        const mouth = forward ? v1 : v0
        const point = (u, v) => (axis === 'z' ? [round(u), round(v)] : [round(v), round(u)])
        // Lines on the floor that part the sunken way in from the landing level.
        const dividing = flip ? lane1 + gap / 2 : lane0 - gap / 2
        // (They run from the line between the two flights to the middle of the stairwell's wall.)
        walls.push({ a: point(dividing, top), b: point(flip ? u0 - spec.block.tw : u1 + spec.block.tw, top), t: 0.002, open: 1, l: 'concrete', r: 'concrete' })
        walls.push({ a: point(dividing, top), b: point(dividing, mouth), t: 0.002, open: 1, l: 'concrete', r: 'concrete' })
        const middle = (lane0 + lane1) / 2
        // (The stairwell itself is now two rooms: its own name gives way to theirs.)
        const inBlock = ([x, z]) => spec.cells.some((cell) => x > gx(cell.x) && x < gx(cell.x + 1) && z > gz(cell.z) && z < gz(cell.z + 1))
        for (let index = seeds.length - 1; index >= 0; index--) if (seeds[index].code === 'S' && inBlock(seeds[index].at)) seeds.splice(index, 1)
        seeds.push({ at: point(middle, farEdge + sign * (info.wall / 2 + 0.3)), f: 'concrete-floor', c: 'ceil-white', n: '入口', code: 'A', y: pit })
        seeds.push({ at: point(middle, (top + mouth) / 2), f: 'concrete-floor', c: 'ceil-white', n: '踊り場', code: 'H' })
        const centre = point(middle, landing + sign * (run / 2 + 0.05))
        steps.push({ x: centre[0], z: centre[1], r: TURN[far], w: round(w), l: round(run + 0.1), from: pit, rise: -pit, n: risers, look: 'rc' })
        // The way in: an open doorway in the outside wall, at the level of the street.
        const line = axis === 'z' ? 'h' : 'v'
        const lineIndex = axis === 'z' ? (far === 'n' ? Math.min(...spec.cells.map((c) => c.z)) : Math.max(...spec.cells.map((c) => c.z)) + 1)
          : (far === 'w' ? Math.min(...spec.cells.map((c) => c.x)) : Math.max(...spec.cells.map((c) => c.x)) + 1)
        const wallIndex = walls.findIndex((wall) => !wall.open && (line === 'h'
          ? Math.abs(wall.a[1] - gz(lineIndex)) < 1e-6 && Math.abs(wall.b[1] - gz(lineIndex)) < 1e-6 && wall.a[0] <= middle && wall.b[0] >= middle
          : Math.abs(wall.a[0] - gx(lineIndex)) < 1e-6 && Math.abs(wall.b[0] - gx(lineIndex)) < 1e-6 && wall.a[1] <= middle && wall.b[1] >= middle))
        if (wallIndex >= 0) {
          const wall = walls[wallIndex]
          const at = middle - (line === 'h' ? wall.a[0] : wall.a[1])
          // Whatever window the stairwell had there gives way to the doorway.
          for (let index = openings.length - 1; index >= 0; index--) {
            if (openings[index].w === wallIndex && Math.abs(openings[index].at - at) < w) openings.splice(index, 1)
          }
          openings.push({ w: wallIndex, at: round(at), k: 'arch', ww: round(w - 0.1), hh: round(2.0), s: round(pit), canopy: 1, c: look.frame })
        }
      }
    }
    storeys.push({ h: info.storey, walls, openings, rooms: seeds, items, stairs, ...(steps.length ? { steps } : {}), ...(liftList.length ? { lifts: liftList } : {}) })
  }

  const draft = { v: 2, style, base: info.base, ceiling: info.ceiling, storeys, roof: look.roof, yard }
  layYard(draft, plan, look, info, house)
  // The wall or fence round the lot, the gate post, and what hangs on and stands by the outside walls.
  fenceYard(draft, { lotWidth: plan.lotWidth, lotDepth: plan.lotDepth, style })
  equip(draft, { lotWidth: plan.lotWidth, lotDepth: plan.lotDepth, style })
  for (let level = 0; level < storeys.length; level++) clearTheWay(draft, level, [plan.lotWidth, plan.lotDepth])
  // Storeys that repeat the one below only say so: a tower is mostly the same plan again and again.
  const seen = []
  const compact = storeys.map((storey) => {
    const body = JSON.stringify([storey.walls, storey.openings, storey.rooms, storey.items, storey.stairs, storey.steps, storey.lifts])
    const like = seen.indexOf(body)
    seen.push(body)
    return like >= 0 ? { h: storey.h, like } : storey
  })
  void seed
  return { ...draft, storeys: compact }
}

// ---- Furniture ---------------------------------------------------------------------

// Furnishes the rooms of a storey the way such rooms are furnished in Japan.
function furnish({ plan, level, rooms, walls, openings, items, house, style }) {
  const { gx, gz } = plan
  // Doorways need room to walk through: nothing solid is put down within reach of one.
  const ways = openings.filter((entry) => OPENINGS[entry.k]?.door).map((entry) => {
    const wall = walls[entry.w]
    const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]) || 1
    const ux = Math.abs(wall.b[0] - wall.a[0]) / length
    const uz = Math.abs(wall.b[1] - wall.a[1]) / length
    const x = wall.a[0] + (wall.b[0] - wall.a[0]) / length * entry.at
    const z = wall.a[1] + (wall.b[1] - wall.a[1]) / length * entry.at
    const along = entry.ww / 2 + 0.06
    const reach = 0.7
    return { x0: x - ux * along - uz * reach, x1: x + ux * along + uz * reach, z0: z - uz * along - ux * reach, z1: z + uz * along + ux * reach }
  })
  let set = 0
  let sets = 0
  for (const room of rooms.rooms) {
    if (room.code === 'S' || room.code === 'X') continue
    // The clear space of the room's bounding box, inside its walls.
    const box = { x0: gx(room.x0) + 0.1, x1: gx(room.x1 + 1) - 0.1, z0: gz(room.z0) + 0.1, z1: gz(room.z1 + 1) - 0.1 }
    const wide = box.x1 - box.x0
    const deep = box.z1 - box.z0
    const within = (x, z) => rooms.at(Math.floor((x - gx(0)) / CELL), Math.floor((z - gz(0)) / CELL)) === room
    // Puts a thing with its back to one wall of the room, `along` of the way along it (0 to 1).
    const put = (k, side, along = 0.5, gap = 0.02) => {
      const kind = ITEMS[k]
      if (!kind) return false
      const across = side === 'n' || side === 's'
      const span = across ? wide : deep
      if (kind.w > span - 0.04) return false
      const at = Math.min(Math.max(along * span, kind.w / 2 + 0.03), span - kind.w / 2 - 0.03)
      const x = across ? box.x0 + at : side === 'w' ? box.x0 + kind.d / 2 + gap : box.x1 - kind.d / 2 - gap
      const z = across ? (side === 'n' ? box.z0 + kind.d / 2 + gap : box.z1 - kind.d / 2 - gap) : box.z0 + at
      return drop(k, x, z, { n: 0, w: 90, s: 180, e: 270 }[side])
    }
    const drop = (k, x, z, r = 0) => {
      const kind = ITEMS[k]
      if (!kind) return false
      const [hw, hd] = r % 180 ? [kind.d / 2, kind.w / 2] : [kind.w / 2, kind.d / 2]
      if (![[-1, -1], [1, -1], [1, 1], [-1, 1]].every(([sx, sz]) => within(x + sx * (hw - 0.02), z + sz * (hd - 0.02)))) return false
      if (kind.solid && ways.some((way) => x + hw > way.x0 && x - hw < way.x1 && z + hd > way.z0 && z - hd < way.z1)) return false
      items.push({ k, x: round(x), z: round(z), r, ...(set ? { set } : {}) })
      return true
    }
    // A table and its chairs are one set: without the table there are no chairs either.
    const together = (pieces) => {
      const from = items.length
      set = ++sets
      if (!pieces.every((piece) => piece())) items.length = from
      set = 0
    }
    const centre = [(box.x0 + box.x1) / 2, (box.z0 + box.z1) / 2]
    const sidesByLength = wide >= deep ? ['n', 's', 'w', 'e'] : ['w', 'e', 'n', 's']
    const first = (k, sides, along = 0.5) => sides.some((side) => put(k, side, along))
    const { code } = room
    if (code === 'G') {
      if (room.unit === '0' && style !== 'danchi' && style !== 'mansion') first('shoe-box', ['w', 'e', 'n'])
      else first('shoe-box', ['w', 'e', 'n', 's'])
    } else if (code === 'L') {
      // A sofa facing the television across a low table.
      const [back, face] = wide >= deep ? ['w', 'e'] : ['n', 's']
      if (!put('sofa', back) && !put('sofa', face)) first('sofa', sidesByLength)
      put('tv', face)
      drop('table-low', centre[0], centre[1], wide >= deep ? 90 : 0)
      drop('rug', centre[0], centre[1])
      first('plant', ['s', 'e', 'w', 'n'], 0.94)
      drop('ceiling-light', centre[0], centre[1])
    } else if (code === 'D') {
      const turn = wide >= deep ? 0 : 90
      together([
        () => drop('table-dining', centre[0], centre[1], turn),
        ...[[-0.4, -0.62, 0], [0.4, -0.62, 0], [-0.4, 0.62, 180], [0.4, 0.62, 180]].map(([along, off, r]) => () => (turn
          ? drop('chair', centre[0] + off, centre[1] + along, (r + 270) % 360) : drop('chair', centre[0] + along, centre[1] + off, r))),
      ])
      drop('ceiling-light', centre[0], centre[1])
    } else if (code === 'K') {
      // The counter along the longest wall, the refrigerator at its end.
      first('kitchen', sidesByLength, 0.4)
      first('fridge', [...sidesByLength].reverse(), 0.06) || first('fridge', sidesByLength, 0.97)
      first('cupboard', [...sidesByLength].reverse(), 0.8)
    } else if (code === 'B') {
      const big = room.cells.length >= 12
      first(big ? 'bed-double' : 'bed', ['n', 'w', 'e', 's'], 0.5)
      first('desk', ['s', 'e', 'w', 'n'], 0.2)
      if (!rooms.rooms.some((other) => other.code === 'R' && other.unit === room.unit)) first('wardrobe', ['e', 'w', 'n', 's'], 0.9)
    } else if (code === 'P') {
      first('bed', ['w', 'e', 'n', 's'], 0.3)
      if (first('desk', ['n', 's', 'e', 'w'], 0.75)) {
        // The chair stands in front of the desk, facing it.
        const desk = items.at(-1)
        const turn = desk.r * Math.PI / 180
        drop('chair', desk.x + Math.sin(turn) * 0.55, desk.z + Math.cos(turn) * 0.55, (desk.r + 180) % 360)
      }
      first('shelf', ['e', 'w', 's', 'n'], 0.9)
    } else if (code === 'W') {
      together([() => drop('chabudai', centre[0], centre[1]), () => drop('zabuton', centre[0], centre[1] - 0.8), () => drop('zabuton', centre[0], centre[1] + 0.8)])
      if (room.cells.length >= 12) first('tansu', ['n', 'w', 'e'], 0.15)
    } else if (code === 'N') {
      first('washbasin', sidesByLength, 0.25)
      first('washer', sidesByLength, 0.85) || first('washer', [...sidesByLength].reverse(), 0.5)
    } else if (code === 'U') first('bathtub', wide >= deep ? ['e', 'w', 'n', 's'] : ['n', 's', 'e', 'w'])
    else if (code === 'T') first('toilet', wide >= deep ? ['e', 'w'] : ['n', 's']) || first('toilet', ['n', 's', 'e', 'w'])
    else if (code === 'E') {
      first('shelf', sidesByLength, 0.3)
      first('boxes', [...sidesByLength].reverse(), 0.7)
    } else if (code === 'O') {
      for (let z = box.z0 + 1.9; z < box.z1 - 1.7; z += 3.5) {
        for (let x = box.x0 + 2.1; x < box.x1 - 1.9; x += 4.0) {
          for (const [dx, dz, r] of [[-0.61, -0.32, 180], [0.61, -0.32, 180], [-0.61, 0.32, 0], [0.61, 0.32, 0]]) {
            together([() => drop('office-desk', x + dx, z + dz, r), () => drop('office-chair', x + dx, z + dz + (r ? -0.62 : 0.62), r ? 0 : 180)])
          }
        }
      }
    } else if (code === 'M') {
      if (house.kind === 'shop') {
        for (let x = box.x0 + 0.9; x < box.x1 - 0.8; x += 1.7) drop('rack', x, box.z0 + 0.5)
        first('counter', ['e', 'w'], 0.3)
        first('mirror', ['w', 'e'], 0.7)
      } else if (house.kind === 'cafe') {
        first('counter', ['n', 'e', 'w'], 0.5)
        for (let z = box.z0 + 2.0; z < box.z1 - 0.9; z += 1.8) {
          for (let x = box.x0 + 0.9; x < box.x1 - 0.8; x += 1.9) {
            together([() => drop('cafe-table', x, z), () => drop('stool', x - 0.62, z), () => drop('stool', x + 0.62, z)])
          }
        }
      } else {
        first('counter', ['n', 'e', 'w'], 0.5)
        first('bench', ['w', 'e'], 0.5)
        first('plant', ['s', 'e', 'w'], 0.06)
      }
    } else if (code === 'A') {
      first('mail-boxes', ['w', 'e', 'n'], 0.3)
      first('plant', ['e', 'w', 's'], 0.9)
    } else if (code === 'V' && room.cells.length >= 2 && level >= 0) {
      first('ac-unit', ['w', 'e'], 0.5) || first('ac-unit', ['n'], 0.1)
    }
  }
}

// ---- Outside the building, on its own land ---------------------------------------------

// The porch and the steps down from each front door of a design, and a path from there to the
// edge of its lot: `pads` and `steps` as they are kept in the yard of a design. `wall` is how
// thick the outside walls are. (A front door is a door in an outside wall that has a canopy;
// the sliding windows of a living room are doors too, but nobody arrives through them.)
export function porchesFor(design, lotWidth, lotDepth, wall = 0.17) {
  const pads = []
  const steps = []
  for (const door of frontDoors(design).filter((entry) => entry.opening.canopy)) {
    const [nx, nz] = door.normal
    // Only doors that face one of the four sides squarely get a porch laid out for them.
    if (Math.max(Math.abs(nx), Math.abs(nz)) < 0.9) continue
    const sill = (design.base ?? 0.3) + (door.opening.s ?? 0)
    const height = round(sill - 0.02)
    // How far it is from the wall to the edge of the lot, straight out from the door.
    const room = nx > 0.9 ? lotWidth - door.x : nx < -0.9 ? door.x : nz > 0.9 ? lotDepth - door.z : door.z
    const wide = Math.min(door.width + 0.9, 2.4)
    const wallOut = wall / 2
    let risers = height > 0.06 ? Math.ceil(height / 0.18) : 0
    let run = Math.max(0, risers - 1) * 0.3
    let deep = Math.max(0.6, Math.min(1.25, room - run - 0.3))
    // Where the wall stands close to the edge of the lot the porch is shallower, so that its
    // steps end on the lot; and where even that leaves no room for steps, the porch itself is
    // the one step up.
    if (wallOut + deep + run > room) deep = Math.max(0.3, room - wallOut - run)
    if (wallOut + deep + run > room + 1e-6) {
      risers = Math.min(risers, 1)
      run = 0
      deep = Math.max(0.2, Math.min(deep, room - wallOut))
    }
    // (Nothing is laid beyond the edge of the lot.)
    const within = (value, most) => round(Math.min(most, Math.max(0, value)))
    const box = (from, to, half) => {
      const a = [door.x + nx * from - nz * half, door.z + nz * from + nx * half]
      const b = [door.x + nx * to + nz * half, door.z + nz * to - nx * half]
      return { x0: within(Math.min(a[0], b[0]), lotWidth), z0: within(Math.min(a[1], b[1]), lotDepth), x1: within(Math.max(a[0], b[0]), lotWidth), z1: within(Math.max(a[1], b[1]), lotDepth) }
    }
    if (height > 0.03) pads.push({ ...box(wallOut, wallOut + deep, wide / 2), y: height, f: 'genkan-floor', porch: 1 })
    let reach = wallOut + deep
    if (risers > 1) {
      steps.push({
        x: round(door.x + nx * (reach + run / 2)), z: round(door.z + nz * (reach + run / 2)), r: nz > 0.9 ? 0 : nx > 0.9 ? 90 : nz < -0.9 ? 180 : 270,
        w: round(wide), l: round(run), from: 0, rise: round(height * (risers - 1) / risers), n: risers - 1, top: height, look: 'stone',
      })
      reach += run
    }
    // A paved path from the foot of the steps to the street.
    if (room - reach > 0.2) pads.push({ ...box(reach, room, Math.min(wide, 1.3) / 2), y: 0.03, f: 'stone-floor' })
  }
  return { pads, steps }
}

// The porch and the steps down from each front door, a path to the street, a place for a car.
function layYard(design, plan, look, info, house) {
  const { yard } = design
  const porches = porchesFor(design, plan.lotWidth, plan.lotDepth, info.wall)
  yard.pads.push(...porches.pads)
  yard.steps.push(...porches.steps)
  // Parking: the cells marked for a car on the ground floor.
  const seen = new Set()
  for (let z = 0; z < plan.depth; z++) {
    for (let x = 0; x < plan.width; x++) {
      if (plan.at(0, x, z) !== 'J' || seen.has(`${x},${z}`)) continue
      let x1 = x
      while (plan.at(0, x1 + 1, z) === 'J') x1++
      let z1 = z
      while (Array.from({ length: x1 - x + 1 }, (_, index) => plan.at(0, x + index, z1 + 1)).every((code) => code === 'J')) z1++
      for (let cz = z; cz <= z1; cz++) for (let cx = x; cx <= x1; cx++) seen.add(`${cx},${cz}`)
      const pad = { x0: plan.gx(x), z0: plan.gz(z), x1: plan.gx(x1 + 1), z1: Math.min(plan.gz(z1 + 1) + 0.4, plan.lotDepth), y: 0.03, f: 'concrete-floor' }
      yard.pads.push(pad)
      const long = pad.z1 - pad.z0 >= pad.x1 - pad.x0
      if ((long ? pad.z1 - pad.z0 : pad.x1 - pad.x0) >= 4.2 && hash(houseSeed(house.id), x, z) > 0.25) {
        yard.items.push({ k: 'car', x: round((pad.x0 + pad.x1) / 2), z: round((pad.z0 + pad.z1) / 2), r: long ? 0 : 90 })
      }
    }
  }
  void look
}

// ---- Furniture must not wall anybody in ----------------------------------------------

// Every doorway and every flight of stairs that can be walked to in the empty storey stays
// within reach of the way in; a piece of furniture (or a set) that would cut one off is left out.
const cleared = new Map()
function clearTheWay(design, level, size) {
  const storey = design.storeys[level]
  const solid = (entry) => Boolean(ITEMS[entry.k]?.solid)
  const finish = (items) => {
    storey.items = items.map(({ set, ...entry }) => entry)
  }
  if (!storey.items.some(solid)) return finish(storey.items)
  // Storeys of a tower mostly repeat: the same storey is only worked out once.
  const below = design.storeys[level - 1]?.stairs ?? []
  const name = JSON.stringify([size, design.base, storey.h, storey.walls, storey.openings, storey.stairs, storey.items, storey.steps, storey.lifts, below, level === 0])
  if (cleared.has(name)) return finish(cleared.get(name))
  const bare = { ...design, storeys: design.storeys.map((entry, index) => (index === level ? { ...entry, items: [] } : entry)) }
  const solids = colliders(bare, level, { locked: false })

  // A lattice of spots, each either free for a resident to stand on or not.
  const step = 0.06
  const cols = Math.ceil((size[0] + 2) / step) + 1
  const rows = Math.ceil((size[1] + 2) / step) + 1
  const index = (x, z) => [Math.round((x + 1) / step), Math.round((z + 1) / step)]
  const walls = new Uint8Array(cols * rows)
  const stamp = (grid, x0, z0, x1, z1, hit) => {
    const [i0, j0] = index(x0, z0)
    const [i1, j1] = index(x1, z1)
    for (let j = Math.max(0, j0); j <= Math.min(rows - 1, j1); j++) {
      for (let i = Math.max(0, i0); i <= Math.min(cols - 1, i1); i++) {
        if (!grid[j * cols + i] && hit(i * step - 1, j * step - 1)) grid[j * cols + i] = 1
      }
    }
  }
  for (const wall of solids.segments) {
    const reach = BODY + wall.r
    const ex = wall.bx - wall.ax
    const ez = wall.bz - wall.az
    const length = ex * ex + ez * ez || 1e-9
    stamp(walls, Math.min(wall.ax, wall.bx) - reach, Math.min(wall.az, wall.bz) - reach, Math.max(wall.ax, wall.bx) + reach, Math.max(wall.az, wall.bz) + reach, (x, z) => {
      const t = Math.min(1, Math.max(0, ((x - wall.ax) * ex + (z - wall.az) * ez) / length))
      return Math.hypot(x - wall.ax - ex * t, z - wall.az - ez * t) < reach - 1e-6
    })
  }
  const stampBox = (grid, box, spare = 0) => {
    const turn = box.r * Math.PI / 180
    const cos = Math.cos(turn)
    const sin = Math.sin(turn)
    const reach = Math.hypot(box.w, box.d) / 2 + BODY + spare
    stamp(grid, box.x - reach, box.z - reach, box.x + reach, box.z + reach, (x, z) => {
      const lx = (x - box.x) * cos - (z - box.z) * sin
      const lz = (x - box.x) * sin + (z - box.z) * cos
      return Math.hypot(Math.max(0, Math.abs(lx) - box.w / 2), Math.max(0, Math.abs(lz) - box.d / 2)) < BODY + spare - 1e-6
    })
  }
  for (const box of solids.boxes) stampBox(walls, box)

  // Where people come in, and everything they must be able to get to.
  const starts = level === 0 ? frontDoors(bare).map((door) => door.outside)
    : colliders(bare, level - 1, { locked: false }).stairs.filter((stair) => stair.up)
      .map(({ head }) => [head.at[0] + head.out[0] * (BODY + 0.16), head.at[1] + head.out[1] * (BODY + 0.16)])
  if (level > 0) for (const lift of solids.lifts) starts.push([lift.at[0] + lift.out[0] * 0.6, lift.at[1] + lift.out[1] * 0.6])
  const goals = solids.stairs.map(({ gate }) => [gate.at[0] + gate.out[0] * (BODY + 0.08), gate.at[1] + gate.out[1] * (BODY + 0.08)])
  for (const lift of solids.lifts) goals.push([lift.at[0] + lift.out[0] * 0.6, lift.at[1] + lift.out[1] * 0.6])
  for (const entry of storey.openings) {
    if (!OPENINGS[entry.k]?.door || OPENINGS[entry.k].lift) continue
    const wall = storey.walls[entry.w]
    const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]) || 1
    const ux = (wall.b[0] - wall.a[0]) / length
    const uz = (wall.b[1] - wall.a[1]) / length
    const x = wall.a[0] + ux * entry.at
    const z = wall.a[1] + uz * entry.at
    goals.push([x + uz * 0.55, z - ux * 0.55], [x - uz * 0.55, z + ux * 0.55])
  }
  const walked = (grid) => {
    const seen = new Uint8Array(cols * rows)
    const pending = []
    const visit = (i, j) => {
      if (i < 0 || j < 0 || i >= cols || j >= rows || seen[j * cols + i] || grid[j * cols + i]) return
      seen[j * cols + i] = 1
      pending.push(i, j)
    }
    for (const [x, z] of starts) {
      const [i, j] = index(x, z)
      for (let dj = -2; dj <= 2; dj++) for (let di = -2; di <= 2; di++) visit(i + di, j + dj)
    }
    while (pending.length) {
      const j = pending.pop()
      const i = pending.pop()
      visit(i + 1, j)
      visit(i - 1, j)
      visit(i, j + 1)
      visit(i, j - 1)
    }
    return ([x, z]) => {
      const [i, j] = index(x, z)
      for (let dj = -1; dj <= 1; dj++) {
        for (let di = -1; di <= 1; di++) {
          if (i + di >= 0 && j + dj >= 0 && i + di < cols && j + dj < rows && seen[(j + dj) * cols + i + di]) return true
        }
      }
      return false
    }
  }
  const wanted = goals.filter(walked(walls))
  const boxOf = (entry) => ({ x: entry.x, z: entry.z, w: ITEMS[entry.k].w, d: ITEMS[entry.k].d, r: entry.r ?? 0 })
  const furnished = (items) => {
    const grid = walls.slice()
    // A passage past a piece of furniture has to be one a body fits through with room to spare.
    for (const entry of items) if (solid(entry)) stampBox(grid, boxOf(entry), 0.07)
    return grid
  }
  let kept = storey.items
  if (!wanted.every(walked(furnished(kept)))) {
    // Something is in the way: put the furniture back one set at a time, without whatever blocks.
    kept = []
    for (let at = 0; at < storey.items.length;) {
      let end = at + 1
      while (storey.items[at].set && storey.items[end]?.set === storey.items[at].set) end++
      const pieces = storey.items.slice(at, end)
      at = end
      if (!pieces.some(solid) || wanted.every(walked(furnished([...kept, ...pieces])))) kept.push(...pieces)
    }
  }
  if (cleared.size > 400) cleared.clear()
  cleared.set(name, kept)
  finish(kept)
}

const compiled = new WeakMap()

// The design of a building: the one its owner drew, or the one its easy plan stands for.
export function designOf(house) {
  if (house.design) return house.design
  if (!compiled.has(house)) compiled.set(house, compileDesign(house))
  return compiled.get(house)
}
