// Designing a building wall by wall.
//
// This is the part of the design tools that knows nothing about screens: the working copy of
// a design (see design.js), the tools that change it, what a pointer does with each tool, and
// undo. The plan on a flat screen and the laser of a VR controller both feed it the same
// thing: a spot on the floor of the storey being drawn, in metres from the north-west corner
// of the lot.
import {
  CELL, FINISHES, ITEMS, OPENINGS, STAIR_LOOKS, STYLES, STYLE_FLOORS, WALL_DECOR, boxCorners, inRoom, pointIn, stairLayout, storeyShape,
} from './design.js?v=online-1794946480502'
import { designOf, porchesFor } from './plans.js?v=online-1794946480502'

// What the town accepts of a drawing (see readDesign in world.mjs).
export const LIMITS = { walls: 400, openings: 400, rooms: 120, items: 300, stairs: 12, lifts: 4, decor: 200, yard: 40, bytes: 220_000 }

export const TOOLS = {
  select: '選択', wall: '壁', opening: '扉・窓', room: '部屋', item: '家具', stair: '階段', lift: 'エレベーター', decor: '壁掛け', paint: '仕上げ', erase: '消す',
}
// The kinds of wall the wall tool draws.
export const WALL_KINDS = {
  outer: '外壁', inner: '間仕切り', low: '腰壁', rail: '手すり', line: '見切り（壁なし）',
}

const STEP = CELL / 2
const round = (value) => Math.round(value * 100) / 100
const clamp = (value, low, high) => Math.min(high, Math.max(low, value))
const lengthOf = (wall) => Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1])
const same = (p, q, reach = 0.012) => Math.hypot(p[0] - q[0], p[1] - q[1]) <= reach

// The spot on a wall's middle line nearest to (x, z): how far along it lies and how far off.
function nearestOn(wall, x, z) {
  const ex = wall.b[0] - wall.a[0]
  const ez = wall.b[1] - wall.a[1]
  const size = ex * ex + ez * ez || 1e-9
  const t = clamp(((x - wall.a[0]) * ex + (z - wall.a[1]) * ez) / size, 0, 1)
  const px = wall.a[0] + ex * t
  const pz = wall.a[1] + ez * t
  return { x: px, z: pz, along: t * Math.sqrt(size), gap: Math.hypot(x - px, z - pz) }
}

// Which face of a wall a spot is on: the left face of a wall from a to b looks along (dz, -dx).
function faceOf(wall, x, z) {
  const dx = wall.b[0] - wall.a[0]
  const dz = wall.b[1] - wall.a[1]
  return (x - wall.a[0]) * dz - (z - wall.a[1]) * dx >= 0 ? 'l' : 'r'
}

// Everything a storey can hold, so that the tools never have to ask whether a list is there.
function whole(storey) {
  if (Number.isInteger(storey.like)) return storey
  for (const list of ['walls', 'openings', 'rooms', 'items', 'stairs', 'steps', 'lifts', 'decor']) storey[list] ??= []
  return storey
}

function prepare(design) {
  design.storeys.forEach(whole)
  design.yard ??= {}
  for (const list of ['pads', 'steps', 'items']) design.yard[list] ??= []
  design.roof ??= { k: 'flat', f: 'roof-concrete', parapet: 0.4 }
  design.base ??= 0.3
  return design
}

// `house` is the building as the town knows it: its lot (w and d in tiles), its style and
// either the design its owner drew or the easy plan that stands for one.
export function createEditor(house, { onChange = () => {} } = {}) {
  const style = Object.hasOwn(STYLES, house.style) ? house.style : 'modern'
  const info = STYLES[style]
  const lot = { w: (house.w ?? 1) * 8, d: (house.d ?? 1) * 8 }
  // Plans are drawn on half a 間; the grid sits in the middle of the lot (see planOf).
  const grid = { ox: (lot.w - (house.w ?? 1) * 8 * CELL) / 2, oz: (lot.d - (house.d ?? 1) * 8 * CELL) / 2, step: STEP }
  const most = STYLE_FLOORS[style] ?? 3

  let design = prepare(structuredClone(designOf(house)))
  let level = 0
  let tool = 'select'
  let selection = null
  // The gesture or the drawing in progress, and what the pointer is over.
  let draft = null
  let cursor = null
  let ghost = null
  let stamp = 0
  let notice = ''
  const undone = []
  const redone = []
  const clean = () => JSON.stringify(exportDesign())
  let saved = ''

  // What each tool draws with. `out` and `in` are the finishes a new wall gets on the face
  // that ends up outdoors and on the one that ends up in a room.
  const outside = (() => {
    const walls = design.storeys.flatMap((storey) => storey.walls ?? [])
    const counts = new Map()
    for (const wall of walls) {
      for (const face of [wall.l, wall.r]) {
        if (FINISHES[face]?.group === 'wall') counts.set(face, (counts.get(face) ?? 0) + 1)
      }
    }
    return [...counts].sort((a, b) => b[1] - a[1])[0]?.[0] ?? (style === 'brutal' ? 'concrete' : 'siding-white')
  })()
  const options = {
    wall: { kind: 'outer', out: outside, in: 'wp-white', rail: 'bars' },
    opening: { k: 'door-wood', c: 'white' },
    item: { k: 'sofa', r: 0, hug: true },
    stair: { shape: 'path', w: 0.8, turn: 'landing', look: info.stair },
    lift: { r: 0 },
    decor: { k: 'picture', y: 1.5 },
    paint: { f: 'wp-white' },
    fine: false,
  }

  const storey = () => design.storeys[level]
  // A storey that only repeats another one is drawn by drawing that one.
  const editable = () => !Number.isInteger(storey()?.like)
  const shape = () => storeyShape(design, level)

  function say(message) {
    notice = message
  }

  // Every change gives the design a new identity: what is worked out from a design (its
  // rooms, its corners) is remembered by the object it was worked out from.
  function touch() {
    design = { ...design }
    stamp++
    onChange()
  }

  // ---- Snapping -------------------------------------------------------------------

  // Brings a spot to where a careful hand would have put it: onto the end of a wall nearby,
  // onto a wall it almost touches, else onto the grid. `from` is where a line to it starts:
  // a line that is almost level or upright is made exactly so.
  function snap(x, z, { skipWall = -1, from = null } = {}) {
    x = clamp(x, 0, lot.w)
    z = clamp(z, 0, lot.d)
    const walls = editable() ? storey().walls : []
    let best = null
    walls.forEach((wall, index) => {
      if (index === skipWall) return
      for (const end of [wall.a, wall.b]) {
        const gap = Math.hypot(end[0] - x, end[1] - z)
        if (gap < 0.24 && (!best || gap < best.gap)) best = { gap, x: end[0], z: end[1] }
      }
    })
    if (best) return { x: best.x, z: best.z, kind: 'end' }
    const step = options.fine ? 0.05 : STEP
    const ox = options.fine ? 0 : grid.ox
    const oz = options.fine ? 0 : grid.oz
    let gx = ox + Math.round((x - ox) / step) * step
    let gz = oz + Math.round((z - oz) / step) * step
    if (from) {
      if (Math.abs(x - from[0]) < 0.2) gx = from[0]
      if (Math.abs(z - from[1]) < 0.2) gz = from[1]
    }
    let kind = 'grid'
    let nearest = 0.16
    walls.forEach((wall, index) => {
      if (index === skipWall || wall.open) return
      const hit = nearestOn(wall, x, z)
      if (hit.gap >= nearest) return
      nearest = hit.gap
      // On a wall that follows the grid, the spot keeps to the grid along it.
      const level2 = Math.abs(wall.a[1] - wall.b[1]) < 0.005
      const upright = Math.abs(wall.a[0] - wall.b[0]) < 0.005
      if (level2) gz = wall.a[1]
      else if (upright) gx = wall.a[0]
      else {
        gx = hit.x
        gz = hit.z
      }
      kind = 'wall'
    })
    return { x: round(clamp(gx, 0, lot.w)), z: round(clamp(gz, 0, lot.d)), kind }
  }

  // ---- Undo -------------------------------------------------------------------------

  function remember(before) {
    undone.push(before)
    if (undone.length > 80) undone.shift()
    redone.length = 0
  }

  // One change to the design, as a single step to undo. `mutate` returns false to say that
  // nothing came of it.
  function change(mutate) {
    const before = JSON.stringify(design)
    notice = ''
    const result = mutate()
    if (result === false) return false
    remember(before)
    settle()
    touch()
    return result ?? true
  }

  function restore(text) {
    design = prepare(JSON.parse(text))
    level = Math.min(level, design.storeys.length - 1)
    selection = null
    draft = null
    ghost = null
    touch()
  }

  // ---- Keeping a design in order ---------------------------------------------------

  // After a change: walls drawn with the wall tool show their indoor finish wherever a room
  // has closed round them, openings stay inside their walls, and the porch follows the door.
  function settle() {
    design = { ...design }
    for (let index = 0; index < design.storeys.length; index++) {
      const floor = design.storeys[index]
      if (Number.isInteger(floor.like)) continue
      if (floor.walls.some((wall) => wall._auto)) {
        const { sides } = storeyShape(design, index)
        floor.walls.forEach((wall, at) => {
          if (!wall._auto) return
          wall.l = sides[at].l ? wall._auto.in : wall._auto.out
          wall.r = sides[at].r ? wall._auto.in : wall._auto.out
        })
      }
      fitOpenings(floor)
    }
    const porches = porchesFor(design, lot.w, lot.d, info.wall)
    design.yard.pads = [...design.yard.pads.filter((pad) => !pad.porch && pad.f !== 'stone-floor'), ...porches.pads].slice(0, 24)
    design.yard.steps = porches.steps.slice(0, 12)
    if (selection && !resolve(selection)) selection = null
  }

  // Openings and wall hangings keep inside the wall they are in and clear of each other; one
  // that no longer fits goes.
  function fitOpenings(floor) {
    const kept = []
    for (const entry of floor.openings) {
      const wall = floor.walls[entry.w]
      if (!wall || wall.open) continue
      const length = lengthOf(wall)
      if (entry.ww > length - 0.06) entry.ww = round(length - 0.06)
      if (entry.ww < 0.3) continue
      const top = wall.h ?? floor.h
      if (entry.s + entry.hh > top) entry.hh = round(top - entry.s)
      if (entry.hh < 0.3) continue
      const at = fitAmong(kept.filter((other) => other.w === entry.w), length, entry.at, entry.ww)
      if (at === null) continue
      entry.at = at
      kept.push(entry)
    }
    floor.openings = kept
    floor.decor = floor.decor.filter((piece) => {
      const wall = floor.walls[piece.w]
      if (!wall || wall.open) return false
      piece.at = round(clamp(piece.at, 0.1, Math.max(0.1, lengthOf(wall) - 0.1)))
      return true
    })
  }

  // ---- Walls ---------------------------------------------------------------------------

  function wallFrom(a, b) {
    const { kind } = options.wall
    const auto = { out: options.wall.out, in: options.wall.in }
    if (kind === 'line') return { a, b, t: 0.002, open: 1, l: auto.in, r: auto.in }
    if (kind === 'rail') return { a, b, t: options.wall.rail === 'solid' ? 0.12 : 0.06, h: 1.1, rail: options.wall.rail, l: auto.out, r: auto.out }
    if (kind === 'low') return { a, b, t: 0.12, h: 1.1, l: auto.out, r: auto.out, _auto: auto }
    return { a, b, t: kind === 'outer' ? info.wall : info.inner, l: auto.out, r: auto.out, _auto: auto }
  }

  // The stretches of the line from a to b where no wall stands yet, as [from, to] along it.
  function uncovered(walls, a, b) {
    const length = Math.hypot(b[0] - a[0], b[1] - a[1])
    const d = [(b[0] - a[0]) / length, (b[1] - a[1]) / length]
    const taken = []
    for (const wall of walls) {
      if (wall.open) continue
      const off = (point) => Math.abs((point[0] - a[0]) * d[1] - (point[1] - a[1]) * d[0])
      if (off(wall.a) > 0.02 || off(wall.b) > 0.02) continue
      const along = [wall.a, wall.b].map((point) => (point[0] - a[0]) * d[0] + (point[1] - a[1]) * d[1]).sort((p, q) => p - q)
      if (along[1] > 0.01 && along[0] < length - 0.01) taken.push([Math.max(0, along[0]), Math.min(length, along[1])])
    }
    taken.sort((p, q) => p[0] - q[0])
    const free = []
    let from = 0
    for (const [start, end] of taken) {
      if (start - from > 0.15) free.push([from, start])
      from = Math.max(from, end)
    }
    if (length - from > 0.15) free.push([from, length])
    return { free, d, length }
  }

  // Puts up a wall from a to b; where a wall already stands along that line, nothing is added.
  function addWall(a, b, make = wallFrom) {
    const floor = storey()
    if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 0.3) return false
    const { free, d } = uncovered(floor.walls, a, b)
    if (!free.length) {
      say('そこにはもう壁があります。')
      return false
    }
    if (floor.walls.length + free.length > LIMITS.walls) {
      say(`壁は1つの階に${LIMITS.walls}枚までです。`)
      return false
    }
    for (const [from, to] of free) {
      floor.walls.push(make([round(a[0] + d[0] * from), round(a[1] + d[1] * from)], [round(a[0] + d[0] * to), round(a[1] + d[1] * to)]))
    }
    return floor.walls.length - 1
  }

  function removeWall(index) {
    const floor = storey()
    floor.walls.splice(index, 1)
    for (const list of [floor.openings, floor.decor]) {
      for (let at = list.length - 1; at >= 0; at--) {
        if (list[at].w === index) list.splice(at, 1)
        else if (list[at].w > index) list[at].w--
      }
    }
  }

  // ---- Doors, windows and what hangs on a wall -----------------------------------------

  // Where an opening `ww` wide fits nearest to `at` on a wall `length` long, clear of the
  // openings that are in it already; null if nowhere. A place that is good is left as it is.
  function fitAmong(neighbours, length, at, ww) {
    if (ww > length - 0.06 + 1e-9) return null
    const others = neighbours.map((entry) => [entry.at - entry.ww / 2 - 0.03, entry.at + entry.ww / 2 + 0.03]).sort((p, q) => p[0] - q[0])
    const low = ww / 2 + 0.03
    const high = length - ww / 2 - 0.03
    const clear = (spot) => others.every(([from, to]) => spot + ww / 2 <= from + 1e-6 || spot - ww / 2 >= to - 1e-6)
    const wanted = clamp(at, low, high)
    if (clear(wanted)) return wanted === at ? at : round(wanted)
    // Beside whichever neighbour is in the way, on the nearer side. (Rounded away from it.)
    const spots = others.flatMap(([from, to]) => [Math.floor((from - ww / 2) * 100) / 100, Math.ceil((to + ww / 2) * 100) / 100])
      .filter((spot) => spot >= low - 1e-6 && spot <= high + 1e-6 && clear(spot))
    if (!spots.length) return null
    return spots.sort((p, q) => Math.abs(p - wanted) - Math.abs(q - wanted))[0]
  }
  const fitAt = (floor, wallIndex, at, ww, skip = -1) => fitAmong(
    floor.openings.filter((entry, index) => entry.w === wallIndex && index !== skip), lengthOf(floor.walls[wallIndex]), at, ww)

  // The wall nearest to a spot, if it is near enough to mean it.
  function wallNear(x, z, reach = 0.6) {
    let best = null
    storey().walls.forEach((wall, index) => {
      if (wall.open) return
      const hit = nearestOn(wall, x, z)
      if (hit.gap < reach && (!best || hit.gap < best.gap)) best = { ...hit, index, wall }
    })
    return best
  }

  function openingFor(x, z) {
    const near = wallNear(x, z)
    if (!near) return null
    const kind = OPENINGS[options.opening.k] ?? OPENINGS['door-wood']
    const floor = storey()
    const top = near.wall.h ?? floor.h
    const length = lengthOf(near.wall)
    const ww = round(Math.min(kind.w, length - 0.08))
    if (ww < 0.3) return null
    const at = fitAt(floor, near.index, near.along, ww)
    if (at === null) return null
    const s = Math.min(kind.s, Math.max(0, top - 0.5))
    const hh = round(Math.min(kind.h, top - s - (near.wall.rail || top < floor.h ? 0 : 0.12)))
    if (hh < 0.3) return null
    return { w: near.index, at, k: options.opening.k, ww, hh, s: round(s), c: options.opening.c }
  }

  // ---- Lifts ---------------------------------------------------------------------------------

  // A lift shaft of two cells by two round (x, z), its door on the side `r` (0 south, 90 east,
  // 180 north, 270 west), as the outline of its four walls.
  function shaftAt(x, z, r) {
    const cx = grid.ox + Math.round((x - grid.ox) / CELL) * CELL
    const cz = grid.oz + Math.round((z - grid.oz) / CELL) * CELL
    const half = CELL
    const x0 = round(clamp(cx - half, 0, lot.w - half * 2))
    const z0 = round(clamp(cz - half, 0, lot.d - half * 2))
    const x1 = round(x0 + half * 2)
    const z1 = round(z0 + half * 2)
    const t = Math.max(info.inner, round(info.wall * 0.85))
    const edges = { 0: [[x1, z1], [x0, z1]], 90: [[x1, z0], [x1, z1]], 180: [[x0, z0], [x1, z0]], 270: [[x0, z1], [x0, z0]] }
    const inner = half * 2 - t - 0.024
    return { x0, z0, x1, z1, t, r, edges, x: round((x0 + x1) / 2), z: round((z0 + z1) / 2), w: round(inner - 0.16), d: round(inner - 0.12) }
  }

  // Builds the shaft on every storey: a lift that stopped at one storey only would go nowhere.
  function addLift(x, z, r) {
    const shaft = shaftAt(x, z, r)
    const floors = design.storeys.filter((floor) => !Number.isInteger(floor.like))
    if (floors.some((floor) => floor.lifts.length >= LIMITS.lifts)) {
      say(`エレベーターは${LIMITS.lifts}基までです。`)
      return false
    }
    if (floors.some((floor) => floor.lifts.some((lift) => Math.abs(lift.x - shaft.x) < CELL * 2 - 0.05 && Math.abs(lift.z - shaft.z) < CELL * 2 - 0.05))) {
      say('そこにはもうエレベーターがあります。')
      return false
    }
    const finish = info.stair === 'rc' ? 'mortar-white' : 'wp-white'
    for (const floor of floors) {
      let doorWall = -1
      for (const turn of [0, 90, 180, 270]) {
        const [a, b] = shaft.edges[turn]
        const { free, d } = uncovered(floor.walls, a, b)
        for (const [from, to] of free) {
          floor.walls.push({ a: [round(a[0] + d[0] * from), round(a[1] + d[1] * from)], b: [round(a[0] + d[0] * to), round(a[1] + d[1] * to)], t: shaft.t, l: finish, r: finish, _auto: { out: options.wall.out, in: finish } })
        }
        if (turn !== r) continue
        // The door stands in the middle of its side of the shaft, in whichever wall is there.
        const middle = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
        doorWall = floor.walls.findIndex((wall) => !wall.open && !wall.rail && nearestOn(wall, middle[0], middle[1]).gap < 0.03
          && nearestOn(wall, middle[0], middle[1]).along > 0.45 && lengthOf(wall) - nearestOn(wall, middle[0], middle[1]).along > 0.45)
        if (doorWall >= 0) {
          const at = nearestOn(floor.walls[doorWall], middle[0], middle[1]).along
          const kind = OPENINGS['lift-door']
          const clear = floor.openings.every((entry) => entry.w !== doorWall || Math.abs(entry.at - at) >= (entry.ww + kind.w) / 2 + 0.02)
          if (clear) floor.openings.push({ w: doorWall, at: round(at), k: 'lift-door', ww: kind.w, hh: Math.min(kind.h, floor.h - 0.3), s: 0 })
          else doorWall = -1
        }
      }
      if (doorWall < 0) {
        say('扉を付ける壁に、ほかの扉や窓があります。向きか場所を変えてください。')
        return false
      }
      floor.rooms.push({ at: [shaft.x, shaft.z], f: 'concrete-floor', c: 'ceil-white', n: 'エレベーター', code: 'X', shaft: 1 })
      floor.lifts.push({ x: shaft.x, z: shaft.z, w: shaft.w, d: shaft.d, r })
    }
    return true
  }

  // Takes a lift out of every storey, with its door. (The walls of the shaft stay: they are walls.)
  function removeLift(index) {
    const lift = storey().lifts[index]
    if (!lift) return false
    for (const floor of design.storeys) {
      if (Number.isInteger(floor.like)) continue
      const at = floor.lifts.findIndex((entry) => Math.hypot(entry.x - lift.x, entry.z - lift.z) < 0.3)
      if (at < 0) continue
      floor.lifts.splice(at, 1)
      floor.rooms = floor.rooms.filter((seat) => !(seat.shaft && Math.hypot(seat.at[0] - lift.x, seat.at[1] - lift.z) < 0.6))
      floor.openings = floor.openings.filter((entry) => {
        if (entry.k !== 'lift-door') return true
        const wall = floor.walls[entry.w]
        const length = lengthOf(wall) || 1
        const x = wall.a[0] + (wall.b[0] - wall.a[0]) / length * entry.at
        const z = wall.a[1] + (wall.b[1] - wall.a[1]) / length * entry.at
        return Math.hypot(x - lift.x, z - lift.z) > CELL + 0.3
      })
    }
    return true
  }

  // ---- What is where ----------------------------------------------------------------------------

  const spotOn = (wall, along) => {
    const length = lengthOf(wall) || 1
    return [wall.a[0] + (wall.b[0] - wall.a[0]) / length * along, wall.a[1] + (wall.b[1] - wall.a[1]) / length * along]
  }
  const inBox = (thing, w, d, x, z, spare = 0) => pointIn(boxCorners(thing.x, thing.z, w + spare * 2, d + spare * 2, thing.r ?? 0), x, z)

  // The thing drawn at a spot, the smallest first: a door before the wall it is in.
  function pick(x, z, reach = 0.16) {
    if (!editable()) return null
    const floor = storey()
    for (let index = floor.decor.length - 1; index >= 0; index--) {
      const piece = floor.decor[index]
      const wall = floor.walls[piece.w]
      const hit = nearestOn(wall, x, z)
      const wide = (WALL_DECOR[piece.k]?.w ?? 0.5) / 2
      if (hit.gap > (wall.t ?? 0.12) / 2 + 0.04 && hit.gap < (wall.t ?? 0.12) / 2 + 0.34 && Math.abs(hit.along - piece.at) <= wide && faceOf(wall, x, z) === piece.side) {
        return { type: 'decor', index }
      }
    }
    for (let index = floor.openings.length - 1; index >= 0; index--) {
      const entry = floor.openings[index]
      const wall = floor.walls[entry.w]
      const hit = nearestOn(wall, x, z)
      if (hit.gap <= (wall.t ?? 0.12) / 2 + reach && Math.abs(hit.along - entry.at) <= entry.ww / 2) return { type: 'opening', index }
    }
    for (let index = floor.items.length - 1; index >= 0; index--) {
      const kind = ITEMS[floor.items[index].k]
      if (kind && inBox(floor.items[index], kind.w, kind.d, x, z, 0.03)) return { type: 'item', index }
    }
    if (level === 0) {
      for (let index = design.yard.items.length - 1; index >= 0; index--) {
        const kind = ITEMS[design.yard.items[index].k]
        if (kind && inBox(design.yard.items[index], kind.w, kind.d, x, z, 0.03)) return { type: 'yard', index }
      }
    }
    if (level + 1 < design.storeys.length) {
      for (let index = floor.stairs.length - 1; index >= 0; index--) {
        if (pointIn(stairLayout(floor.stairs[index], floor.h).outline, x, z)) return { type: 'stair', index }
      }
    }
    let best = null
    floor.walls.forEach((wall, index) => {
      const hit = nearestOn(wall, x, z)
      const within = Math.max((wall.t ?? 0.12) / 2, 0.05) + reach
      if (hit.gap <= within && (!best || hit.gap < best.gap)) best = { gap: hit.gap, index }
    })
    if (best) return { type: 'wall', index: best.index }
    for (let index = floor.lifts.length - 1; index >= 0; index--) {
      if (inBox(floor.lifts[index], floor.lifts[index].w, floor.lifts[index].d, x, z, 0.1)) return { type: 'lift', index }
    }
    const room = shape()?.roomAt(x, z)
    return room ? { type: 'room', at: [round(x), round(z)] } : null
  }

  // The thing a selection stands for, or nothing if it has gone.
  function resolve(chosen) {
    if (!chosen || !editable()) return null
    const floor = storey()
    if (chosen.type === 'room') {
      const room = shape()?.roomAt(chosen.at[0], chosen.at[1])
      return room ? { room, seat: floor.rooms.find((seat) => room === shape().roomAt(seat.at[0], seat.at[1])) ?? null } : null
    }
    if (chosen.type === 'yard') return design.yard.items[chosen.index] ?? null
    const list = { wall: floor.walls, opening: floor.openings, item: floor.items, stair: floor.stairs, lift: floor.lifts, decor: floor.decor }[chosen.type]
    return list?.[chosen.index] ?? null
  }

  function removeThing(chosen) {
    const floor = storey()
    if (chosen.type === 'wall') removeWall(chosen.index)
    else if (chosen.type === 'opening') floor.openings.splice(chosen.index, 1)
    else if (chosen.type === 'item') floor.items.splice(chosen.index, 1)
    else if (chosen.type === 'yard') design.yard.items.splice(chosen.index, 1)
    else if (chosen.type === 'stair') floor.stairs.splice(chosen.index, 1)
    else if (chosen.type === 'decor') floor.decor.splice(chosen.index, 1)
    else if (chosen.type === 'lift') return removeLift(chosen.index)
    else return false
    return true
  }

  // ---- Furniture ---------------------------------------------------------------------------------

  // Where a piece of furniture goes when it is put down at a spot: against the wall it is
  // next to, its back to it, or free on the floor.
  function itemAt(x, z) {
    const kind = ITEMS[options.item.k]
    if (!kind) return null
    const near = options.item.hug && !kind.ceiling ? wallNear(x, z, kind.d / 2 + 0.4) : null
    if (near && !near.wall.rail && lengthOf(near.wall) >= 0.3) {
      const d = [(near.wall.b[0] - near.wall.a[0]) / lengthOf(near.wall), (near.wall.b[1] - near.wall.a[1]) / lengthOf(near.wall)]
      const sign = faceOf(near.wall, x, z) === 'l' ? 1 : -1
      const normal = [sign * d[1], -sign * d[0]]
      const off = (near.wall.t ?? 0.12) / 2 + kind.d / 2 + 0.02
      return {
        k: options.item.k, x: round(clamp(near.x + normal[0] * off, 0, lot.w)), z: round(clamp(near.z + normal[1] * off, 0, lot.d)),
        r: (Math.round(Math.atan2(normal[0], normal[1]) * 180 / Math.PI) + 360) % 360,
      }
    }
    const fine = (value) => Math.round(value * 20) / 20
    return { k: options.item.k, x: clamp(fine(x), 0, lot.w), z: clamp(fine(z), 0, lot.d), r: options.item.r }
  }

  function addItem(thing) {
    const floor = storey()
    const indoors = Boolean(shape()?.floored(thing.x, thing.z))
    if (level === 0 && !indoors) {
      if (design.yard.items.length >= LIMITS.yard) {
        say(`庭に置けるものは${LIMITS.yard}個までです。`)
        return false
      }
      design.yard.items.push({ k: thing.k, x: thing.x, z: thing.z, r: thing.r })
      return { type: 'yard', index: design.yard.items.length - 1 }
    }
    if (!indoors) {
      say('床のあるところに置いてください。')
      return false
    }
    if (floor.items.length >= LIMITS.items) {
      say(`家具は1つの階に${LIMITS.items}個までです。`)
      return false
    }
    floor.items.push({ k: thing.k, x: thing.x, z: thing.z, r: thing.r })
    return { type: 'item', index: floor.items.length - 1 }
  }

  // ---- Stairs -----------------------------------------------------------------------------------

  function addStair(pts) {
    const floor = storey()
    if (level + 1 >= design.storeys.length) {
      say('最上階には上りの階段を置けません。先に階を増やしてください。')
      return false
    }
    if (floor.stairs.length >= LIMITS.stairs) {
      say(`階段は1つの階に${LIMITS.stairs}本までです。`)
      return false
    }
    const stair = options.stair.shape === 'spiral'
      ? { k: 'spiral', x: pts[0][0], z: pts[0][1], radius: clamp(options.stair.w + 0.1, 0.5, 2), from: 90, sweep: 360, look: options.stair.look === 'wood' ? 'open' : options.stair.look }
      : { k: 'path', pts: pts.map(([x, z]) => [round(x), round(z)]), w: clamp(options.stair.w, 0.5, 3), ...(options.stair.turn === 'winder' ? { turn: 'winder' } : {}), look: options.stair.look }
    if (stair.k === 'path') {
      const run = stair.pts.slice(1).reduce((sum, point, index) => sum + Math.hypot(point[0] - stair.pts[index][0], point[1] - stair.pts[index][1]), 0)
      if (run < 0.9) {
        say('階段が短すぎます。上り口から下り口まで線を引いてください。')
        return false
      }
    }
    floor.stairs.push(stair)
    if (stairLayout(stair, floor.h).steep) say('段が急です（はしごに近い勾配）。階段を長くすると歩きやすくなります。')
    return floor.stairs.length - 1
  }

  // ---- The pointer ----------------------------------------------------------------------------------

  // What the pointer does on the plan. `phase` is 'hover' (moving with nothing held), 'down',
  // 'move' (held), 'up' or 'cancel'; `point` is { x, z } in lot metres.
  function pointer(phase, point) {
    if (phase === 'cancel') {
      cancel()
      return
    }
    if (!editable()) {
      cursor = null
      ghost = null
      return
    }
    const x = clamp(point.x, 0, lot.w)
    const z = clamp(point.z, 0, lot.d)
    const before = `${stamp}|${JSON.stringify([cursor, ghost, draft?.b, selection])}`
    handlers[tool]?.(phase, x, z)
    if (before !== `${stamp}|${JSON.stringify([cursor, ghost, draft?.b, selection])}`) onChange()
  }

  const handlers = {
    wall(phase, x, z) {
      const spot = snap(x, z, { from: draft?.a })
      cursor = [spot.x, spot.z]
      if (phase === 'down') {
        if (!draft) draft = { type: 'wall', a: [spot.x, spot.z], b: [spot.x, spot.z], pressed: [x, z], dragged: false }
        else finishWall([spot.x, spot.z], true)
      } else if (draft) {
        draft.b = [spot.x, spot.z]
        if (phase === 'move' && draft.pressed && Math.hypot(x - draft.pressed[0], z - draft.pressed[1]) > 0.3) draft.dragged = true
        if (phase === 'up') {
          // A wall drawn in one stroke ends where the stroke ends; one drawn click by click goes on.
          if (draft.dragged) finishWall([spot.x, spot.z], false)
          else draft.pressed = null
        }
      }
    },
    select(phase, x, z) {
      if (phase === 'hover') {
        cursor = null
        return
      }
      if (phase === 'down') {
        const held = resolve(selection)
        // The ends of the wall that is selected are handles to pull it by. Walls that meet
        // it there come along: a corner is moved as a corner.
        if (selection?.type === 'wall' && held) {
          const end = ['a', 'b'].find((name) => Math.hypot(held[name][0] - x, held[name][1] - z) < 0.3)
          if (end) {
            draft = { type: 'wall-end', index: selection.index, end, joined: joinedAt(held[end], selection.index), before: JSON.stringify(design), moved: false, ...hung() }
            return
          }
        }
        const hit = pick(x, z)
        selection = hit
        draft = null
        const thing = resolve(hit)
        if (!thing) return
        const base = { before: JSON.stringify(design), moved: false, from: [x, z] }
        if (hit.type === 'wall') {
          draft = {
            ...base, ...hung(), type: 'wall-move', index: hit.index, a: [...thing.a], b: [...thing.b],
            joined: [...joinedAt(thing.a, hit.index).map((entry) => ({ ...entry, of: 'a' })), ...joinedAt(thing.b, hit.index).map((entry) => ({ ...entry, of: 'b' }))],
          }
        }
        else if (hit.type === 'item' || hit.type === 'yard') draft = { ...base, type: 'item-move', pick: hit, dx: thing.x - x, dz: thing.z - z }
        else if (hit.type === 'opening') draft = { ...base, type: 'opening-move', index: hit.index }
        else if (hit.type === 'decor') draft = { ...base, type: 'decor-move', index: hit.index }
        else if (hit.type === 'stair') draft = { ...base, type: 'stair-move', index: hit.index, stair: structuredClone(thing) }
        return
      }
      if (!draft) return
      if (phase === 'move') drag(x, z)
      else if (phase === 'up') {
        const { before, moved } = draft
        draft = null
        if (moved) {
          remember(before)
          settle()
          touch()
        }
      }
    },
    opening(phase, x, z) {
      cursor = null
      const entry = openingFor(x, z)
      ghost = entry ? { type: 'opening', entry } : null
      if (phase === 'down') {
        if (!entry) {
          say(wallNear(x, z) ? 'この壁には入りません。壁を長くするか、小さい種類を選んでください。' : '壁の上をクリックしてください。')
          return
        }
        change(() => {
          if (storey().openings.length >= LIMITS.openings) return false
          // A door in an outside wall is a way in: it gets a porch and a canopy.
          const kind = OPENINGS[entry.k]
          const side = shape().sides[entry.w]
          if (kind.door && level === 0 && side.l !== side.r && ['door-entrance', 'door-oyako', 'door-flat', 'door-auto', 'door-steel'].includes(entry.k)) Object.assign(entry, { canopy: 1, outward: 1 })
          storey().openings.push(entry)
          selection = { type: 'opening', index: storey().openings.length - 1 }
        })
        ghost = null
      }
    },
    item(phase, x, z) {
      cursor = null
      const thing = itemAt(x, z)
      ghost = thing ? { type: 'item', thing } : null
      if (phase === 'down' && thing) {
        change(() => {
          const placed = addItem(thing)
          if (!placed) return false
          selection = placed
        })
      }
    },
    stair(phase, x, z) {
      const spot = snap(x, z, { from: draft?.pts.at(-1) })
      cursor = [spot.x, spot.z]
      if (options.stair.shape === 'spiral') {
        ghost = { type: 'spiral', x: spot.x, z: spot.z, radius: clamp(options.stair.w + 0.1, 0.5, 2) }
        if (phase === 'down') {
          change(() => {
            const index = addStair([[spot.x, spot.z]])
            if (index === false) return false
            selection = { type: 'stair', index }
          })
        }
        return
      }
      ghost = null
      if (phase === 'down') {
        const here = [spot.x, spot.z]
        if (!draft) draft = { type: 'stair', pts: [here], b: here }
        // Clicking the last corner again ends the line there.
        else if (same(draft.pts.at(-1), here, 0.05)) commitDraft()
        else if (draft.pts.length < 12) draft.pts.push(here)
      } else if (draft) draft.b = [spot.x, spot.z]
    },
    lift(phase, x, z) {
      cursor = null
      const shaft = shaftAt(x, z, options.lift.r)
      ghost = { type: 'lift', shaft }
      if (phase === 'down') {
        change(() => {
          if (!addLift(x, z, options.lift.r)) return false
          selection = { type: 'lift', index: storey().lifts.length - 1 }
        })
      }
    },
    decor(phase, x, z) {
      cursor = null
      const near = wallNear(x, z, 0.7)
      const kind = WALL_DECOR[options.decor.k]
      ghost = near && kind && !near.wall.rail ? {
        type: 'decor', piece: { w: near.index, side: faceOf(near.wall, x, z), at: round(clamp(near.along, kind.w / 2, Math.max(kind.w / 2, lengthOf(near.wall) - kind.w / 2))), y: options.decor.y, k: options.decor.k },
      } : null
      if (phase === 'down' && ghost) {
        const { piece } = ghost
        change(() => {
          if (storey().decor.length >= LIMITS.decor) return false
          storey().decor.push(piece)
          selection = { type: 'decor', index: storey().decor.length - 1 }
        })
      }
    },
    room(phase, x, z) {
      cursor = null
      if (phase !== 'down') return
      const room = shape()?.roomAt(x, z)
      selection = room ? { type: 'room', at: [round(x), round(z)] } : null
      if (!room) say('壁で囲まれたところをクリックしてください。')
    },
    paint(phase, x, z) {
      cursor = null
      if (phase !== 'down') return
      const finish = FINISHES[options.paint.f]
      const hit = pick(x, z, 0.3)
      if (!finish || !hit) return
      if (finish.group === 'roof') {
        change(() => { design.roof = { ...design.roof, f: options.paint.f } })
      } else if (finish.group === 'floor' || finish.group === 'ceiling') {
        const room = shape()?.roomAt(x, z)
        if (!room) {
          say('床や天井の仕上げは、部屋の中をクリックして塗ります。')
          return
        }
        selection = { type: 'room', at: [round(x), round(z)] }
        updateSelected(finish.group === 'floor' ? { f: options.paint.f } : { c: options.paint.f })
      } else if (hit.type === 'wall' || hit.type === 'opening') {
        change(() => {
          const wall = storey().walls[hit.type === 'wall' ? hit.index : storey().openings[hit.index].w]
          wall[faceOf(wall, x, z)] = options.paint.f
          delete wall._auto
        })
      } else {
        // In the middle of a room: every wall of the room gets the finish, on the face that looks into it.
        const room = shape()?.roomAt(x, z)
        if (!room) {
          say('壁の仕上げは、塗りたい面の側から壁をクリックします。')
          return
        }
        change(() => {
          const floor = storey()
          for (const index of room.walls) {
            const wall = floor.walls[index]
            if (!wall || wall.open || wall.rail) continue
            const length = lengthOf(wall) || 1
            const d = [(wall.b[0] - wall.a[0]) / length, (wall.b[1] - wall.a[1]) / length]
            const reach = (wall.t ?? 0.12) / 2 + 0.07
            // (A long wall may run on past the room: it is looked at where it borders the room.)
            for (const along of [0.15, 0.5, 0.85]) {
              const mx = wall.a[0] + (wall.b[0] - wall.a[0]) * along
              const mz = wall.a[1] + (wall.b[1] - wall.a[1]) * along
              const face = inRoom(room, mx + d[1] * reach, mz - d[0] * reach) ? 'l' : inRoom(room, mx - d[1] * reach, mz + d[0] * reach) ? 'r' : null
              if (!face) continue
              wall[face] = options.paint.f
              if (wall._auto) wall._auto = { ...wall._auto, in: options.paint.f }
              break
            }
          }
        })
      }
    },
    erase(phase, x, z) {
      cursor = null
      const hit = pick(x, z)
      ghost = hit && hit.type !== 'room' ? { type: 'erase', hit } : null
      if (phase === 'down' && hit && hit.type !== 'room') {
        change(() => removeThing(hit))
        selection = null
        ghost = null
      }
    },
  }

  function finishWall(end, chain) {
    const start = draft.a
    if (same(start, end, 0.05)) {
      draft = null
      return
    }
    const loose = !storey().walls.some((wall) => same(wall.a, end) || same(wall.b, end) || nearestOn(wall, end[0], end[1]).gap < 0.02)
    const added = change(() => addWall(start, end))
    // The next wall starts where this one ended, until the line meets a wall that is there.
    draft = chain && added !== false && loose ? { type: 'wall', a: end, b: end, pressed: null, dragged: false } : null
    if (added !== false) selection = null
  }

  // The doors, windows and hangings of the storey as they are when a wall is taken hold of:
  // while the wall is pulled about they are fitted afresh from this at every step, so that
  // pulling it back puts them back.
  const hung = () => ({ openings: JSON.stringify(storey().openings), decor: JSON.stringify(storey().decor) })
  function refit(floor) {
    floor.openings = JSON.parse(draft.openings)
    floor.decor = JSON.parse(draft.decor)
    fitOpenings(floor)
  }

  // The ends of other walls that meet a spot: [{ index, end }].
  function joinedAt(spot, skip) {
    const found = []
    storey().walls.forEach((wall, index) => {
      if (index === skip) return
      for (const end of ['a', 'b']) if (same(wall[end], spot)) found.push({ index, end })
    })
    return found
  }

  // Moves whatever the select tool has taken hold of.
  function drag(x, z) {
    const floor = storey()
    if (draft.type === 'wall-end') {
      const wall = floor.walls[draft.index]
      const other = draft.end === 'a' ? wall.b : wall.a
      const skipped = new Set([draft.index, ...draft.joined.map((entry) => entry.index)])
      let spot = snap(x, z, { skipWall: draft.index, from: other })
      // (The walls that are pulled along are no place to snap to: they move with the corner.)
      if (spot.kind !== 'grid' && [...skipped].some((index) => index !== draft.index && nearestOn(floor.walls[index], spot.x, spot.z).gap < 0.02)) {
        const step = options.fine ? 0.05 : STEP
        spot = { x: round(clamp(grid.ox + Math.round((x - grid.ox) / step) * step, 0, lot.w)), z: round(clamp(grid.oz + Math.round((z - grid.oz) / step) * step, 0, lot.d)) }
      }
      const tooShort = (entry, end) => Math.hypot(spot.x - entry[end === 'a' ? 'b' : 'a'][0], spot.z - entry[end === 'a' ? 'b' : 'a'][1]) < 0.3
      if (tooShort(wall, draft.end) || draft.joined.some((entry) => tooShort(floor.walls[entry.index], entry.end))) return
      if (same(wall[draft.end], [spot.x, spot.z], 0.001)) return
      wall[draft.end] = [spot.x, spot.z]
      for (const entry of draft.joined) floor.walls[entry.index][entry.end] = [spot.x, spot.z]
      refit(floor)
    } else if (draft.type === 'wall-move') {
      const step = options.fine ? 0.05 : STEP
      let dx = Math.round((x - draft.from[0]) / step) * step
      let dz = Math.round((z - draft.from[1]) / step) * step
      // A wall that others meet is pushed and pulled square to itself, and they stretch with it.
      if (draft.joined.length) {
        if (Math.abs(draft.a[1] - draft.b[1]) < 0.005) dx = 0
        else if (Math.abs(draft.a[0] - draft.b[0]) < 0.005) dz = 0
      }
      dx = clamp(dx, -Math.min(draft.a[0], draft.b[0]), lot.w - Math.max(draft.a[0], draft.b[0]))
      dz = clamp(dz, -Math.min(draft.a[1], draft.b[1]), lot.d - Math.max(draft.a[1], draft.b[1]))
      const wall = floor.walls[draft.index]
      const a = [round(draft.a[0] + dx), round(draft.a[1] + dz)]
      const b = [round(draft.b[0] + dx), round(draft.b[1] + dz)]
      if (same(wall.a, a, 0.001) && same(wall.b, b, 0.001)) return
      // (Not so far that a wall it pulls along would shrink to nothing.)
      if (draft.joined.some((entry) => {
        const other = floor.walls[entry.index][entry.end === 'a' ? 'b' : 'a']
        const to = entry.of === 'a' ? a : b
        return Math.hypot(to[0] - other[0], to[1] - other[1]) < 0.3
      })) return
      wall.a = a
      wall.b = b
      for (const entry of draft.joined) floor.walls[entry.index][entry.end] = [...(entry.of === 'a' ? a : b)]
      refit(floor)
    } else if (draft.type === 'item-move') {
      const thing = resolve(draft.pick)
      thing.x = round(clamp(Math.round((x + draft.dx) * 20) / 20, 0, lot.w))
      thing.z = round(clamp(Math.round((z + draft.dz) * 20) / 20, 0, lot.d))
    } else if (draft.type === 'opening-move') {
      const entry = floor.openings[draft.index]
      const at = fitAt(floor, entry.w, nearestOn(floor.walls[entry.w], x, z).along, entry.ww, draft.index)
      if (at === null || at === entry.at) return
      entry.at = at
    } else if (draft.type === 'decor-move') {
      const piece = floor.decor[draft.index]
      const wall = floor.walls[piece.w]
      piece.at = round(clamp(nearestOn(wall, x, z).along, 0.1, Math.max(0.1, lengthOf(wall) - 0.1)))
      piece.side = faceOf(wall, x, z)
    } else if (draft.type === 'stair-move') {
      const step = options.fine ? 0.05 : STEP
      const dx = Math.round((x - draft.from[0]) / step) * step
      const dz = Math.round((z - draft.from[1]) / step) * step
      const moved = structuredClone(draft.stair)
      if (moved.k === 'spiral') {
        moved.x = round(clamp(moved.x + dx, 0, lot.w))
        moved.z = round(clamp(moved.z + dz, 0, lot.d))
      } else moved.pts = moved.pts.map(([px, pz]) => [round(clamp(px + dx, 0, lot.w)), round(clamp(pz + dz, 0, lot.d))])
      // (A stair is never changed in place: its steps are remembered by the object they were worked out from.)
      floor.stairs[draft.index] = moved
    } else return
    draft.moved = true
    touch()
  }

  // Ends a line that is being drawn click by click (a stair), keeping what there is of it.
  function commitDraft() {
    if (draft?.type === 'stair') {
      const { pts } = draft
      draft = null
      if (pts.length >= 2) {
        change(() => {
          const index = addStair(pts)
          if (index === false) return false
          selection = { type: 'stair', index }
        })
      } else onChange()
    } else if (draft?.type === 'wall') {
      draft = null
      onChange()
    }
  }

  function cancel() {
    if (draft?.before && draft.moved) restore(draft.before)
    draft = null
    ghost = null
    cursor = null
    onChange()
  }

  // ---- The thing that is selected ---------------------------------------------------------------

  // Changes the selected thing. Only what a thing of its kind can have is taken from `patch`.
  function updateSelected(patch) {
    const chosen = selection
    const thing = resolve(chosen)
    if (!thing) return false
    return change(() => {
      const floor = storey()
      const take = (target, keys) => {
        for (const key of keys) {
          if (!Object.hasOwn(patch, key)) continue
          if (patch[key] === null || patch[key] === undefined || patch[key] === '') delete target[key]
          else target[key] = patch[key]
        }
      }
      if (chosen.type === 'wall') {
        if (patch.l !== undefined || patch.r !== undefined) delete thing._auto
        take(thing, ['l', 'r', 'll', 'rl', 'rail'])
        if (patch.t !== undefined) thing.t = round(clamp(Number(patch.t) || 0.12, 0.04, 0.6))
        if (patch.h !== undefined) {
          if (patch.h === null || patch.h >= floor.h - 0.005) delete thing.h
          else thing.h = round(clamp(Number(patch.h), 0.2, floor.h))
        }
        if (patch.length !== undefined) {
          // The wall is made as long as asked, from its first end.
          const length = lengthOf(thing) || 1
          const wanted = clamp(Number(patch.length) || length, 0.3, 80)
          const end = [thing.a[0] + (thing.b[0] - thing.a[0]) / length * wanted, thing.a[1] + (thing.b[1] - thing.a[1]) / length * wanted]
          if (end[0] < 0 || end[1] < 0 || end[0] > lot.w || end[1] > lot.d) {
            say('敷地からはみ出します。')
            return false
          }
          thing.b = [round(end[0]), round(end[1])]
        }
      } else if (chosen.type === 'opening') {
        const wall = floor.walls[thing.w]
        const top = wall.h ?? floor.h
        if (patch.k !== undefined && OPENINGS[patch.k]) {
          // Another kind of door or window takes the place, at the size that kind comes in.
          const kind = OPENINGS[patch.k]
          Object.assign(thing, { k: patch.k, ww: round(Math.min(kind.w, lengthOf(wall) - 0.08)), s: Math.min(kind.s, Math.max(0, top - 0.5)) })
          thing.hh = round(Math.min(kind.h, top - thing.s - 0.12))
        }
        if (patch.ww !== undefined) thing.ww = round(clamp(Number(patch.ww) || thing.ww, 0.3, Math.min(8, lengthOf(wall) - 0.08)))
        if (patch.s !== undefined) thing.s = round(clamp(Number(patch.s) || 0, -1.5, top - 0.3))
        if (patch.hh !== undefined) thing.hh = round(clamp(Number(patch.hh) || thing.hh, 0.3, top - thing.s))
        take(thing, ['c'])
        for (const key of ['canopy', 'flip', 'outward']) {
          if (patch[key] === undefined) continue
          if (patch[key]) thing[key] = 1
          else delete thing[key]
        }
        const at = fitAt(floor, thing.w, thing.at, thing.ww, chosen.index)
        if (at === null) {
          say('ほかの扉や窓とぶつかります。')
          return false
        }
        thing.at = at
      } else if (chosen.type === 'item' || chosen.type === 'yard') {
        if (patch.k !== undefined && ITEMS[patch.k]) thing.k = patch.k
        if (patch.r !== undefined) thing.r = ((Math.round(Number(patch.r) || 0) % 360) + 360) % 360
        if (patch.x !== undefined) thing.x = round(clamp(Number(patch.x) || 0, 0, lot.w))
        if (patch.z !== undefined) thing.z = round(clamp(Number(patch.z) || 0, 0, lot.d))
      } else if (chosen.type === 'stair') {
        const next = structuredClone(thing)
        if (next.k === 'spiral') {
          if (patch.radius !== undefined) next.radius = round(clamp(Number(patch.radius) || 0.85, 0.5, 2))
          if (patch.sweep !== undefined) next.sweep = clamp(Math.round(Number(patch.sweep) || 360), -1080, 1080)
          if (Math.abs(next.sweep) < 90) next.sweep = 90 * Math.sign(next.sweep || 1)
          if (patch.from !== undefined) next.from = clamp(Math.round(Number(patch.from) || 0), -360, 360)
        } else {
          if (patch.w !== undefined) next.w = round(clamp(Number(patch.w) || 0.8, 0.5, 3))
          if (patch.turn !== undefined) {
            if (patch.turn === 'winder') next.turn = 'winder'
            else delete next.turn
          }
          if (patch.reverse) next.pts.reverse()
        }
        if (patch.look !== undefined && STAIR_LOOKS[patch.look]) next.look = patch.look
        floor.stairs[chosen.index] = next
      } else if (chosen.type === 'decor') {
        if (patch.k !== undefined && WALL_DECOR[patch.k]) thing.k = patch.k
        if (patch.y !== undefined) thing.y = round(clamp(Number(patch.y) || 0, 0, floor.h))
      } else if (chosen.type === 'room') {
        let seat = thing.seat
        if (!seat) {
          if (floor.rooms.length >= LIMITS.rooms) return false
          seat = { at: [round(thing.room.at[0]), round(thing.room.at[1])], f: thing.room.f, c: thing.room.c }
          floor.rooms.push(seat)
        }
        take(seat, ['f', 'c', 'code'])
        if (patch.n !== undefined) {
          const name = String(patch.n).trim().slice(0, 24)
          if (name) seat.n = name
          else delete seat.n
        }
        if (patch.open !== undefined) {
          if (patch.open) seat.open = 1
          else delete seat.open
        }
        if (patch.y !== undefined) {
          const y = round(clamp(Number(patch.y) || 0, -1.5, 1.5))
          if (y) seat.y = y
          else delete seat.y
        }
        if (patch.unit !== undefined) {
          if (/^[1-9a-z]$/.test(patch.unit)) seat.unit = patch.unit
          else delete seat.unit
        }
      } else return false
    })
  }

  function removeSelected() {
    if (!resolve(selection)) return false
    const chosen = selection
    selection = null
    return change(() => removeThing(chosen))
  }

  // ---- Storeys and the building as a whole ----------------------------------------------------

  // Gives a storey that repeats another one a plan of its own to change.
  function materialize(index = level) {
    const floor = design.storeys[index]
    if (!Number.isInteger(floor?.like)) return false
    return change(() => {
      design.storeys[index] = whole({ ...structuredClone(design.storeys[floor.like]), h: floor.h })
    })
  }

  function addStorey() {
    if (design.storeys.length >= most) {
      say(`この様式は${most}階までです。`)
      return false
    }
    return change(() => {
      const top = design.storeys.at(-1)
      design.storeys.push({ h: top.h, like: Number.isInteger(top.like) ? top.like : design.storeys.length - 1 })
    })
  }

  function removeStorey() {
    if (design.storeys.length <= 1) return false
    return change(() => {
      const last = design.storeys.length - 1
      // Storeys that repeated the one that goes take its plan over between them.
      const heirs = design.storeys.map((floor, index) => (floor.like === last ? index : -1)).filter((index) => index >= 0)
      if (heirs.length) {
        design.storeys[heirs[0]] = { ...structuredClone(design.storeys[last]), h: design.storeys[heirs[0]].h }
        for (const index of heirs.slice(1)) design.storeys[index].like = heirs[0]
      }
      design.storeys.pop()
      level = Math.min(level, design.storeys.length - 1)
      selection = null
    })
  }

  // Makes this storey a repeat of another one, or a bare floor to start again from.
  function repeatStorey(source) {
    if (source === level || !design.storeys[source] || Number.isInteger(design.storeys[source].like)) return false
    return change(() => {
      const dependants = design.storeys.some((floor) => floor.like === level)
      if (dependants) {
        say('ほかの階がこの階と同じ間取りになっています。先にそちらを変えてください。')
        return false
      }
      design.storeys[level] = { h: storey().h, like: source }
      selection = null
    })
  }

  function clearStorey() {
    if (!editable()) return false
    return change(() => {
      const floor = storey()
      // A lift runs through every storey: its shaft is not cleared from one of them.
      if (floor.lifts.length) {
        say('エレベーターのある階は、エレベーターを消してから空にできます。')
        return false
      }
      Object.assign(floor, { walls: [], openings: [], rooms: [], items: [], stairs: [], steps: [], lifts: [], decor: [] })
      selection = null
    })
  }

  function setBuilding(patch) {
    return change(() => {
      if (patch.base !== undefined) design.base = round(clamp(Number(patch.base) || 0, 0, 1.5))
      if (patch.ceiling !== undefined) {
        if (patch.ceiling === null) delete design.ceiling
        else design.ceiling = round(clamp(Number(patch.ceiling) || 2.4, 2, 4.5))
      }
      if (patch.h !== undefined) {
        const floor = storey()
        floor.h = round(clamp(Number(patch.h) || 2.8, 2.2, 5))
        // Nothing on the storey may be taller than the storey itself.
        if (editable()) {
          for (const wall of floor.walls) if (wall.h !== undefined && wall.h > floor.h) delete wall.h
        }
      }
      if (patch.roof) {
        const roof = { ...design.roof, ...patch.roof }
        if (roof.k === 'flat') design.roof = { k: 'flat', f: roof.f, parapet: round(clamp(Number(roof.parapet ?? 0.4), 0, 1.5)) }
        else {
          design.roof = { k: roof.k, f: roof.f, pitch: clamp(Math.round(Number(roof.pitch ?? 30)), 5, 60), eave: round(clamp(Number(roof.eave ?? 0.45), 0, 1.2)), ...(roof.turn ? { turn: 1 } : {}) }
        }
      }
    })
  }

  // ---- Saving -------------------------------------------------------------------------------------

  // The design as the town keeps it: nothing that only the tools use, rooms that no longer
  // exist forgotten, lengths to the centimetre.
  function exportDesign() {
    const tidy = JSON.parse(JSON.stringify(design, (key, value) => (key.startsWith('_') ? undefined : value)))
    tidy.storeys.forEach((floor, index) => {
      if (Number.isInteger(floor.like)) return
      const found = storeyShape(design, index)
      const taken = new Set()
      floor.rooms = floor.rooms.filter((seat) => {
        const room = found.roomAt(seat.at[0], seat.at[1])
        if (!room || taken.has(room)) return false
        taken.add(room)
        return true
      })
      for (const list of ['steps', 'lifts', 'decor']) if (!floor[list].length) delete floor[list]
    })
    return tidy
  }

  // What stands in the way of saving, in words for the person drawing.
  function problems() {
    const found = []
    design.storeys.forEach((floor, index) => {
      if (Number.isInteger(floor.like)) return
      const name = `${index + 1}階`
      for (const [list, label] of [['walls', '壁'], ['openings', '扉と窓'], ['items', '家具'], ['stairs', '階段'], ['rooms', '部屋'], ['decor', '壁掛け']]) {
        if (floor[list].length > LIMITS[list]) found.push(`${name}の${label}が多すぎます（${LIMITS[list]}まで）。`)
      }
      if (floor.walls.some((wall) => lengthOf(wall) < 0.15)) found.push(`${name}に短すぎる壁があります。`)
    })
    if (design.storeys.length > most) found.push(`この様式は${most}階までです。`)
    if (clean().length > LIMITS.bytes) found.push('設計データが大きすぎます。壁や家具を減らしてください。')
    return found
  }

  saved = clean()

  return {
    house, lot, grid, style, most,
    options,
    get design() { return design },
    get level() { return level },
    get stamp() { return stamp },
    get tool() { return tool },
    get selection() { return selection },
    get draft() { return draft },
    get cursor() { return cursor },
    get ghost() { return ghost },
    get dirty() { return clean() !== saved },
    get editable() { return editable() },
    // The last thing the tools had to say (why something could not be done), read once.
    takeNotice() {
      const message = notice
      notice = ''
      return message
    },
    shape,
    snap,
    pick,
    setLevel(next) {
      const wanted = clamp(Math.round(next), 0, design.storeys.length - 1)
      if (wanted === level) return
      level = wanted
      selection = null
      draft = null
      ghost = null
      cursor = null
      onChange()
    },
    setTool(next) {
      if (!Object.hasOwn(TOOLS, next) || next === tool) return
      tool = next
      draft = null
      ghost = null
      cursor = null
      if (next !== 'select' && next !== 'room') selection = null
      onChange()
    },
    setOption(name, patch) {
      if (name === 'fine') options.fine = Boolean(patch)
      else Object.assign(options[name], patch)
      onChange()
    },
    pointer, commitDraft, cancel,
    select(next) {
      selection = next && resolve(next) ? next : null
      onChange()
    },
    // The selected thing with what the inspector shows of it, or null.
    selected() {
      const thing = resolve(selection)
      if (!thing) return null
      if (selection.type === 'room') {
        const { room, seat } = thing
        return { type: 'room', room, data: { f: room.f, c: room.c, n: seat?.n ?? '', code: seat?.code ?? '', open: Boolean(seat?.open), y: seat?.y ?? 0, unit: seat?.unit ?? '' }, area: room.area }
      }
      const data = { ...thing }
      if (selection.type === 'wall') data.length = round(lengthOf(thing))
      return { type: selection.type, index: selection.index, data }
    },
    update: updateSelected,
    remove: removeSelected,
    rotate(by = 90) {
      const thing = resolve(selection)
      if (selection?.type === 'item' || selection?.type === 'yard') return updateSelected({ r: (thing.r ?? 0) + by })
      if (tool === 'item') {
        options.item.r = (((options.item.r + by) % 360) + 360) % 360
        options.item.hug = false
        onChange()
      } else if (tool === 'lift') {
        options.lift.r = (((options.lift.r + by) % 360) + 360) % 360
        onChange()
      }
      return true
    },
    canUndo: () => undone.length > 0,
    canRedo: () => redone.length > 0,
    undo() {
      if (!undone.length) return false
      redone.push(JSON.stringify(design))
      restore(undone.pop())
      return true
    },
    redo() {
      if (!redone.length) return false
      undone.push(JSON.stringify(design))
      restore(redone.pop())
      return true
    },
    materialize, addStorey, removeStorey, repeatStorey, clearStorey, setBuilding,
    problems, exportDesign,
    // What the 3D view draws over the storey being drawn: the grid of the lot, the pointer and
    // the outlines of what is selected or about to be put down. Lines are x, y, z in lot
    // metres (y from the floor of the storey), two points to a line, with a colour for each point.
    sketch({ gridLines = true } = {}) {
      const positions = []
      const colors = []
      const line = (x0, y0, z0, x1, y1, z1, colour) => {
        positions.push(x0, y0, z0, x1, y1, z1)
        colors.push(...colour, ...colour)
      }
      const loop = (points, y, colour) => points.forEach((point, index) => {
        const next = points[(index + 1) % points.length]
        line(point[0], y, point[1], next[0], y, next[1], colour)
      })
      const prism = (points, y0, y1, colour) => {
        loop(points, y0, colour)
        loop(points, y1, colour)
        for (const point of points) line(point[0], y0, point[1], point[0], y1, point[1], colour)
      }
      const wallBox = (a, b, t, h, colour) => {
        const length = Math.hypot(b[0] - a[0], b[1] - a[1])
        if (length < 0.01) return
        const n = [(b[1] - a[1]) / length * Math.max(t, 0.04) / 2, -(b[0] - a[0]) / length * Math.max(t, 0.04) / 2]
        prism([[a[0] + n[0], a[1] + n[1]], [b[0] + n[0], b[1] + n[1]], [b[0] - n[0], b[1] - n[1]], [a[0] - n[0], a[1] - n[1]]], 0.01, h, colour)
      }
      const frame = (wall, entry, colour) => {
        const length = lengthOf(wall) || 1
        const d = [(wall.b[0] - wall.a[0]) / length, (wall.b[1] - wall.a[1]) / length]
        for (const side of [1, -1]) {
          const off = side * ((wall.t ?? 0.12) / 2 + 0.015)
          const at = (along) => [wall.a[0] + d[0] * along + d[1] * off, wall.a[1] + d[1] * along - d[0] * off]
          const [p, q] = [at(entry.at - entry.ww / 2), at(entry.at + entry.ww / 2)]
          line(p[0], entry.s, p[1], q[0], entry.s, q[1], colour)
          line(p[0], entry.s + entry.hh, p[1], q[0], entry.s + entry.hh, q[1], colour)
          line(p[0], entry.s, p[1], p[0], entry.s + entry.hh, p[1], colour)
          line(q[0], entry.s, q[1], q[0], entry.s + entry.hh, q[1], colour)
        }
      }
      const GRID = [0.42, 0.5, 0.55]
      const EDGE = [0.95, 0.95, 0.9]
      const DRAW = [0.2, 0.85, 1]
      const PICK = [1, 0.62, 0.12]
      const AWAY = [1, 0.22, 0.2]
      const floor = storey()
      const h = floor?.h ?? 2.7
      if (gridLines) {
        for (let x = grid.ox; x <= lot.w - grid.ox + 0.01; x += CELL) line(x, 0.012, grid.oz, x, 0.012, lot.d - grid.oz, GRID)
        for (let z = grid.oz; z <= lot.d - grid.oz + 0.01; z += CELL) line(grid.ox, 0.012, z, lot.w - grid.ox, 0.012, z, GRID)
      }
      loop([[0, 0], [lot.w, 0], [lot.w, lot.d], [0, lot.d]], 0.014, EDGE)
      // (`ground` numbers of all that lies on the floor and is hidden by what stands on it;
      // the rest is drawn over everything, so that it shows through walls.)
      const ground = positions.length / 3
      if (!editable()) return { positions, colors, ground }
      const outline = (chosen, colour) => {
        const thing = resolve(chosen)
        if (!thing) return
        if (chosen.type === 'wall') wallBox(thing.a, thing.b, thing.t ?? 0.12, thing.h ?? h, colour)
        else if (chosen.type === 'opening') frame(floor.walls[thing.w], thing, colour)
        else if (chosen.type === 'item' || chosen.type === 'yard') {
          const kind = ITEMS[thing.k]
          if (kind) prism(boxCorners(thing.x, thing.z, kind.w, kind.d, thing.r ?? 0), 0.01, kind.h, colour)
        } else if (chosen.type === 'lift') prism(boxCorners(thing.x, thing.z, thing.w + 0.3, thing.d + 0.3, thing.r ?? 0), 0.01, 2.3, colour)
        else if (chosen.type === 'stair') prism(stairLayout(thing, h).outline, 0.02, 0.06, colour)
        else if (chosen.type === 'room') loop(thing.room.points, 0.03, colour)
        else if (chosen.type === 'decor') {
          const kind = WALL_DECOR[thing.k] ?? { w: 0.5, h: 0.4 }
          frame(floor.walls[thing.w], { at: thing.at, ww: kind.w, s: thing.y - kind.h / 2, hh: kind.h }, colour)
        }
      }
      outline(selection, PICK)
      if (ghost?.type === 'erase') outline(ghost.hit, AWAY)
      else if (ghost?.type === 'opening') frame(floor.walls[ghost.entry.w], ghost.entry, DRAW)
      else if (ghost?.type === 'item') {
        const kind = ITEMS[ghost.thing.k]
        prism(boxCorners(ghost.thing.x, ghost.thing.z, kind.w, kind.d, ghost.thing.r), 0.01, kind.h, DRAW)
      } else if (ghost?.type === 'lift') {
        const { x0, z0, x1, z1 } = ghost.shaft
        prism([[x0, z0], [x1, z0], [x1, z1], [x0, z1]], 0.01, 2.3, DRAW)
        const [a, b] = ghost.shaft.edges[ghost.shaft.r]
        line(a[0], 0.02, a[1], b[0], 2.1, b[1], DRAW)
        line(a[0], 2.1, a[1], b[0], 0.02, b[1], DRAW)
      } else if (ghost?.type === 'spiral') {
        const ring = Array.from({ length: 16 }, (_, index) => [ghost.x + Math.cos(index / 16 * Math.PI * 2) * ghost.radius, ghost.z + Math.sin(index / 16 * Math.PI * 2) * ghost.radius])
        prism(ring, 0.02, 0.06, DRAW)
      } else if (ghost?.type === 'decor') {
        const kind = WALL_DECOR[ghost.piece.k]
        frame(floor.walls[ghost.piece.w], { at: ghost.piece.at, ww: kind.w, s: ghost.piece.y - kind.h / 2, hh: kind.h }, DRAW)
      }
      if (draft?.type === 'wall') {
        const made = wallFrom(draft.a, draft.b)
        wallBox(draft.a, draft.b, made.t, made.h ?? h, DRAW)
      } else if (draft?.type === 'stair') {
        const pts = [...draft.pts, draft.b]
        for (let index = 1; index < pts.length; index++) line(pts[index - 1][0], 0.05, pts[index - 1][1], pts[index][0], 0.05, pts[index][1], DRAW)
      }
      if (cursor) {
        line(cursor[0] - 0.18, 0.03, cursor[1], cursor[0] + 0.18, 0.03, cursor[1], PICK)
        line(cursor[0], 0.03, cursor[1] - 0.18, cursor[0], 0.03, cursor[1] + 0.18, PICK)
        line(cursor[0], 0.03, cursor[1], cursor[0], 0.6, cursor[1], PICK)
      }
      return { positions, colors, ground }
    },
    // A copy for the 3D view to build from, which later changes here do not reach.
    snapshot: () => structuredClone(design),
    markSaved() {
      saved = clean()
    },
  }
}
