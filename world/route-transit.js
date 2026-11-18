// The monorail lines of the region's route map (路線図) in the 3D view. Each line is double
// track: two beams 3.7 m apart on shared piers over the real ground, laid by route-line.js;
// trains going out run on one beam and trains coming back on the other. Stations stand where
// the region put them, elevated, with a side platform outside each beam under one roof and a
// stair down to the street. Several trains run on each line, spaced in time and placed by the
// clock alone, so every screen shows the same trains in the same places. Only the part of each
// line near the player is built.
import * as THREE from 'three'
import { Batch, disposeGroup, material } from './kit.js'
import { BEAM, CAR, carDisplay, carOffsets, createLine, doorOffsets, piersOf } from './monorail-line.js'
import { buildCar, createBoard, hangBoard } from './monorail.js'
import { PLATFORM, TRACK_HALF, heightOn, trainsFor } from './route-line.js'
import { STAIR, placeHalf, platformCalls, platformStatus, stationHalf } from './station-solids.js'

export { TRACK_HALF }

// `clock` gives the time in seconds that the trains run by: in the game the server's clock, so
// that every screen shows the same trains in the same places.
export function createRouteTransit({ clock = () => Date.now() / 1000 } = {}) {
  const group = new THREE.Group()
  group.name = 'route-transit'
  let lines = []
  let key = ''
  let trackKey = ''
  // Counts the times the stations near the viewer were built again (their solids then change).
  let revision = 0

  function clearTrack(entry) {
    if (!entry.track) return
    group.remove(entry.track)
    disposeGroup(entry.track)
    for (const platform of entry.platforms) platform.board.dispose()
    entry.track = null
    entry.platforms = []
  }

  function clear() {
    for (const entry of lines) {
      clearTrack(entry)
      for (const train of entry.trains) {
        for (const car of train.cars) {
          group.remove(car.car)
          disposeGroup(car.car)
        }
        train.boards.car.dispose()
        train.boards.bound.dispose()
      }
    }
    lines = []
  }

  // The beams, the piers and the stations of one line, for the stretch within `reach` metres
  // of `near` (scene metres).
  function buildTrack(line, spec, near, reach) {
    const node = new THREE.Group()
    const batch = new Batch()
    const concrete = material('concrete', '#d6d4cd')
    const pier = material('concrete', '#c6c4bd')
    const deck = material('concrete', '#bfbcb4')
    const floor = material('tile', '#d9d4ca')
    const roof = material('roofMetal', '#9aa3a8')
    const steel = material('#7d868c', '#ffffff', { roughness: 0.45, metalness: 0.5 })
    const stripe = material(spec.color ?? '#1f7a6a', '#ffffff', { roughness: 0.5 })
    const way = line.way
    const close = (s) => {
      const spot = way.spot(s)
      return Math.hypot(spot.x - near[0], spot.z - near[1]) < reach
    }
    const v = (x, y, z) => new THREE.Vector3(x, y, z)
    // Each beam in pieces of about 10 m, straight from end to end at its own slope.
    for (let s = 0; s < way.length; s += 10) {
      const t = Math.min(way.length, s + 10)
      if (!close(s) && !close(t)) continue
      const a = way.spot(s)
      const b = way.spot(t)
      const ya = heightOn(spec.heights, s) - BEAM.height / 2
      const yb = heightOn(spec.heights, t) - BEAM.height / 2
      for (const track of [-1, 1]) {
        const [ax, az] = [a.x + a.dz * track * TRACK_HALF, a.z - a.dx * track * TRACK_HALF]
        const [bx, bz] = [b.x + b.dz * track * TRACK_HALF, b.z - b.dx * track * TRACK_HALF]
        batch.bar(concrete, v(ax, ya, az), v(bx, yb, bz), BEAM.width, BEAM.height)
        // The feeder rails along both sides of the beam.
        for (const side of [-1, 1]) {
          const nx = a.dz * side * (BEAM.width / 2 + 0.035)
          const nz = -a.dx * side * (BEAM.width / 2 + 0.035)
          batch.bar(steel, v(ax + nx, ya + 0.13, az + nz), v(bx + nx, yb + 0.13, bz + nz), 0.05, 0.09)
        }
      }
    }
    // Piers about one span apart: a column from the ground, a crosshead under both beams.
    const piers = []
    for (const at of piersOf(way.length, spec.clear ?? [])) {
      if (!close(at)) continue
      const spot = way.spot(at)
      const turn = Math.atan2(spot.dx, spot.dz)
      const foot = heightOn(spec.ground, at)
      const under = heightOn(spec.heights, at) - BEAM.height
      const tall = under - 0.9 - foot
      if (tall < 0.3) continue
      batch.box(pier, spot.x, foot + 0.15, spot.z, 2.6, 0.3, 2.6, turn)
      batch.box(pier, spot.x, foot + tall / 2, spot.z, 1.5, tall, 1.5, turn)
      batch.box(pier, spot.x, under - 0.45, spot.z, TRACK_HALF * 2 + 1.4, 0.9, 1.6, turn)
      piers.push({ x: spot.x, z: spot.z, w: 1.6, d: 1.6, r: turn * 180 / Math.PI })
    }
    // Stations: a side platform outside each beam, each with its own stair from the street and a
    // landing onto the platform, one roof over both (see station-solids.js for the layout).
    const solids = { surfaces: [], walls: [], boxes: [] }
    const platforms = []
    const yellow = material('#e8c33a')
    const glass = material('#dfe5e8', '#ffffff', { roughness: 0.3 })
    const doorways = doorOffsets(line.cars).filter((at) => Math.abs(at) + CAR.doorWidth / 2 < PLATFORM.length / 2)
    for (const stop of line.stops) {
      if (!close(stop.at)) continue
      const spot = way.spot(stop.at)
      const turn = Math.atan2(spot.dx, spot.dz)
      const level = heightOn(spec.heights, stop.at) + CAR.floor
      const groundHere = heightOn(spec.ground, stop.at)
      const half = stationHalf(level, groundHere)
      for (const sign of [1, -1]) {
        batch.at(spot.x, 0, spot.z, sign > 0 ? turn : turn + Math.PI, (b) => drawHalf(b, half))
        const placed = placeHalf(half, { x: spot.x, z: spot.z, dx: spot.dx, dz: spot.dz, sign })
        solids.surfaces.push(...placed.surfaces)
        solids.walls.push(...placed.walls)
        solids.boxes.push(...placed.boxes)
        const platform = new THREE.Group()
        platform.name = 'station-platform'
        platform.position.set(spot.x, 0, spot.z)
        platform.rotation.y = sign > 0 ? turn : turn + Math.PI
        const leaves = []
        for (const at of doorways) {
          for (const side of [-1, 1]) {
            const leaf = new THREE.Group()
            leaf.name = 'platform-door'
            const panel = new Batch()
            const wide = CAR.doorWidth / 2
            panel.box(glass, 0, 0.65, 0, 0.06, 1.25, wide - 0.04)
            panel.box(steel, 0, 1.28, 0, 0.09, 0.06, wide)
            for (const end of [-1, 1]) panel.box(steel, 0, 0.65, end * (wide / 2 - 0.025), 0.09, 1.25, 0.05)
            panel.build(leaf, { cast: false, where: 'out' })
            const shut = at + side * wide / 2
            leaf.position.set(half.edge + 0.12, level, shut)
            platform.add(leaf)
            leaves.push({ leaf, shut, slide: side * (wide - 0.02) })
          }
        }
        const board = createBoard(208, 68)
        const display = hangBoard(board, 2.1, 0.68, true, 0.2)
        display.name = 'platform-departure-board'
        display.position.set((half.edge + half.outer) / 2, level + 2.9, 0)
        platform.add(display)
        node.add(platform)
        platforms.push({ stop, sign, leaves, board, nextBoard: -Infinity })
      }
      batch.at(spot.x, 0, spot.z, turn, (b) => {
        const span = half.outer + 0.6
        const long = half.long
        b.box(roof, 0, level + PLATFORM.roof + 0.1, 0, span * 2, 0.2, long * 2 + 2)
        b.box(stripe, 0, level + PLATFORM.roof - 0.1, -long - 1, span * 2, 0.35, 0.08)
        b.box(stripe, 0, level + PLATFORM.roof - 0.1, long + 1, span * 2, 0.35, 0.08)
      })
      piers.push({ x: spot.x, z: spot.z, w: 2.4, d: 2.4, r: turn * 180 / Math.PI })
    }

    // One half of a station in its own frame: x across the line (out from the beam), z along it.
    function drawHalf(b, half) {
      const { edge, outer, long, level, ground, stair, landing } = half
      const length = long * 2
      // The deck and its floor, the yellow line along the edge.
      b.box(deck, (edge + outer) / 2, level - 0.25, 0, outer - edge, 0.5, length)
      b.box(floor, (edge + outer) / 2, level + 0.005, 0, outer - edge, 0.01, length)
      b.box(yellow, edge + 0.45, level + 0.012, 0, 0.3, 0.01, length)
      // The fence along the back, open where the landing meets the platform.
      const fence = (v0, v1) => {
        if (v1 - v0 > 0.05) b.box(steel, outer - 0.05, level + 0.55, (v0 + v1) / 2, 0.05, 1.1, v1 - v0)
      }
      if (landing) {
        fence(-long, landing.v0)
        fence(landing.v1, long)
      } else fence(-long, long)
      // Fixed panes leave the same doorways as the train; their sliding leaves are separate.
      let from = -long
      for (const at of doorways) {
        screen(from, at - CAR.doorWidth / 2)
        from = at + CAR.doorWidth / 2
      }
      screen(from, long)
      function screen(v0, v1) {
        if (v1 <= v0) return
        b.box(glass, edge + 0.12, level + 0.65, (v0 + v1) / 2, 0.08, 1.3, v1 - v0)
        b.box(steel, edge + 0.12, level + 1.3, (v0 + v1) / 2, 0.1, 0.06, v1 - v0)
      }
      // Columns down to the ground every 8 m, and the roof's columns.
      for (let v = -long + 4; v <= long - 4; v += 8) {
        const height = level - 0.5 - ground
        if (height > 0.5) b.box(pier, outer - 0.6, ground + height / 2, v, 0.7, height, 0.7)
      }
      for (let v = -long + 2; v <= long - 2; v += 8) b.box(steel, outer - 0.25, level + PLATFORM.roof / 2, v, 0.18, PLATFORM.roof, 0.18)
      if (!stair) return
      // The landing, level with the platform, with its railings.
      b.box(deck, (landing.u0 + landing.u1) / 2, level - 0.25, (landing.v0 + landing.v1) / 2, landing.u1 - landing.u0, 0.5, landing.v1 - landing.v0)
      b.box(floor, (landing.u0 + landing.u1) / 2, level + 0.006, (landing.v0 + landing.v1) / 2, landing.u1 - landing.u0, 0.01, landing.v1 - landing.v0)
      b.box(steel, (outer + landing.u1) / 2, level + 0.55, landing.v0 + 0.03, landing.u1 - outer, 1.1, 0.05)
      b.box(steel, landing.u1 - 0.03, level + 0.55, (landing.v0 + landing.v1) / 2, 0.05, 1.1, landing.v1 - landing.v0)
      // The steps, from the street up to the landing.
      const middle = (stair.u0 + stair.u1) / 2
      const steps = Math.max(1, Math.ceil(stair.rise / STAIR.riser))
      for (let k = 0; k < steps; k++) {
        const top = ground + stair.rise * (k + 1) / steps
        const v = stair.bottom - stair.run * (k + 0.5) / steps
        b.box(deck, middle, top - 0.15, v, STAIR.width, 0.3, stair.run / steps + 0.02)
      }
      // The concrete under the flight, and a parapet with a handrail on both sides.
      const p = (u, y, v) => new THREE.Vector3(u, y, v)
      for (const u of [stair.u0, stair.u1]) {
        b.face(pier, [p(u, ground, stair.bottom), p(u, level - 0.3, stair.top), p(u, level + 0.9, stair.top), p(u, ground + 0.9, stair.bottom)])
        b.face(pier, [p(u, ground + 0.9, stair.bottom), p(u, level + 0.9, stair.top), p(u, level - 0.3, stair.top), p(u, ground, stair.bottom)])
        b.bar(steel, p(u, ground + 0.95, stair.bottom), p(u, level + 0.95, stair.top), 0.06, 0.06)
      }
      b.face(pier, [p(stair.u0, ground - 0.2, stair.bottom), p(stair.u1, ground - 0.2, stair.bottom), p(stair.u1, level - 0.3, stair.top), p(stair.u0, level - 0.3, stair.top)])
      b.box(pier, middle, (ground + level) / 2 - 0.3, stair.top + 0.15, STAIR.width, level - ground, 0.3)
      // A roof over the flight.
      b.box(roof, middle, level + 2.6, (stair.top + stair.bottom) / 2, STAIR.width + 0.4, 0.12, stair.run + 1)
    }
    batch.build(node, { where: 'out' })
    return { node, piers, solids, platforms }
  }

  // Lays the lines: `specs` from routeSpec or packSpec (scene metres), with their trains. `near`
  // and `reach` say which part of each line to build (the trains run on all of it either way).
  function setLines(specs, { near = [0, 0], reach = 1600 } = {}) {
    const next = JSON.stringify(specs.map((spec) => [spec.name, spec.path.length, spec.path[0], spec.heights.length, spec.ground?.length ?? 0]))
    if (next !== key) {
      key = next
      clear()
      trackKey = ''
      for (const spec of specs) lines.push(makeLine(spec))
    }
    setNear(near, reach)
  }

  // Builds again the stretch of each line within `reach` of `near`, once the viewer has moved
  // on by 200 m or so.
  function setNear(near, reach = 1600) {
    const next = JSON.stringify([near.map((value) => Math.round(value / 200)), reach])
    if (next === trackKey) return
    trackKey = next
    for (const entry of lines) {
      clearTrack(entry)
      const { node, piers, solids, platforms } = buildTrack(entry.line, entry.spec, near, reach)
      group.add(node)
      entry.track = node
      entry.piers = piers
      entry.solids = solids
      entry.platforms = platforms
    }
    revision++
  }

  // A line and its trains, spaced evenly in time round the line's period.
  function makeLine(spec) {
    const line = createLine(spec, spec.drive)
    const count = trainsFor(line.period)
    const trains = []
    for (let index = 0; index < count; index++) {
      const boards = { car: createBoard(160, 28), bound: createBoard(144, 22) }
      const offsets = carOffsets(line.cars)
      const cars = offsets.map((offset, k) => {
        const built = buildCar({ front: k === offsets.length - 1, back: k === 0, boards })
        group.add(built.car)
        return { ...built, offset, index: k }
      })
      trains.push({ offset: index * line.period / count, cars, boards, shown: '' })
    }
    return { spec, line, track: null, piers: [], trains, platforms: [], calls: platformCalls(line) }
  }

  // Moves every train to where the clock says, on the beam of its direction, and opens the
  // doors on the platform side while it stands. Trains far from `near` are hidden.
  function update(near = null, reach = 2200) {
    const now = clock()
    for (const entry of lines) {
      const { line, spec } = entry
      for (const train of entry.trains) {
        const state = line.stateAt(now + train.offset)
        train.state = state
        // Out on the beam to the left of the way the line runs, back on the one to the right.
        const track = state.way >= 0 ? 1 : -1
        for (const car of train.cars) {
          const s = state.s + car.offset
          const spot = line.way.spot(s)
          const x = spot.x + spot.dz * track * TRACK_HALF
          const z = spot.z - spot.dx * track * TRACK_HALF
          const visible = !near || Math.hypot(x - near[0], z - near[1]) < reach
          car.car.visible = visible
          if (!visible) continue
          const y = heightOn(spec.heights, s)
          const pitch = Math.atan2(heightOn(spec.heights, s + CAR.length / 2) - heightOn(spec.heights, s - CAR.length / 2), CAR.length)
          car.car.position.set(x, y, z)
          car.car.rotation.set(-pitch, Math.atan2(spot.dx, spot.dz), 0, 'YXZ')
          car.place = { x, z, dx: spot.dx, dz: spot.dz, turn: Math.atan2(spot.dx, spot.dz), y }
          // The platform is outside the train's beam: on its left going out, its right coming back.
          const side = state.phase === 'dwell' ? track : 0
          for (const leaf of car.leaves) leaf.leaf.position.z = leaf.shut + (leaf.side === side ? leaf.slide * state.doors : 0)
        }
        // The boards change only when what they say changes.
        const said = carDisplay(line, state)
        const text = said.join('|')
        if (text !== train.shown) {
          train.shown = text
          train.boards.car.show(said, ['#ffb23e', '#ffffff'])
          train.boards.bound.show([line.boundFor(state).name], ['#ffb23e'])
        }
      }
      for (const platform of entry.platforms) {
        const present = entry.trains.find(({ state }) => state.phase === 'dwell'
          && state.stop.index === platform.stop.index && state.way === platform.sign)
        const open = present?.state.doors ?? 0
        for (const leaf of platform.leaves) leaf.leaf.position.z = leaf.shut + leaf.slide * open
        if (now < platform.nextBoard && platform.nextBoard - now <= 0.5) continue
        const status = platformStatus(line, entry.calls, entry.trains.map(({ offset }) => offset), platform.stop, platform.sign, now)
        platform.board.show(status.text)
        platform.nextBoard = now + 0.5
      }
    }
  }

  return {
    group, setLines, setNear, update,
    get lines() { return lines },
    // The piers and station supports near the player, as boxes a walker cannot pass.
    get piers() { return lines.flatMap((entry) => entry.piers) },
    // The stations' surfaces, walls and boxes near the viewer (station-solids.js), and how often
    // they have been built again.
    get solids() {
      return {
        surfaces: lines.flatMap((entry) => entry.solids?.surfaces ?? []),
        walls: lines.flatMap((entry) => entry.solids?.walls ?? []),
        boxes: lines.flatMap((entry) => entry.solids?.boxes ?? []),
      }
    },
    get revision() { return revision },
    dispose() {
      key = ''
      trackKey = ''
      clear()
    },
  }
}
