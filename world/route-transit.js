// The monorail lines of the region's route map (路線図) in the 3D view. Each line is double
// track: two beams 3.7 m apart on shared piers over the real ground, laid by route-line.js;
// trains going out run on one beam and trains coming back on the other. Stations stand where
// the region put them, elevated, with a side platform outside each beam under one roof and a
// stair down to the street. Several trains run on each line, spaced in time and placed by the
// clock alone, so every screen shows the same trains in the same places. Only the part of each
// line near the player is built.
import * as THREE from 'three'
import { Batch, disposeGroup, material } from './kit.js?v=online-1794980046418'
import { BEAM, CAR, carDisplay, carOffsets, createLine, piersOf } from './monorail-line.js?v=online-1794980046418'
import { buildCar, createBoard } from './monorail.js?v=online-1794980046418'
import { PLATFORM, TRACK_HALF, heightOn, trainsFor } from './route-line.js?v=online-1794980046418'

export { TRACK_HALF }

// `clock` gives the time in seconds that the trains run by: in the game the server's clock, so
// that every screen shows the same trains in the same places.
export function createRouteTransit({ clock = () => Date.now() / 1000 } = {}) {
  const group = new THREE.Group()
  group.name = 'route-transit'
  let lines = []
  let key = ''
  let trackKey = ''

  function clear() {
    for (const entry of lines) {
      if (entry.track) {
        group.remove(entry.track)
        disposeGroup(entry.track)
      }
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
    // Stations: a side platform outside each beam, one roof over all, a stair down.
    for (const stop of line.stops) {
      if (!close(stop.at)) continue
      const spot = way.spot(stop.at)
      const turn = Math.atan2(spot.dx, spot.dz)
      const level = heightOn(spec.heights, stop.at) + CAR.floor
      const groundHere = heightOn(spec.ground, stop.at)
      const long = PLATFORM.length / 2
      batch.at(spot.x, 0, spot.z, turn, (b) => {
        for (const side of [-1, 1]) {
          const inner = side * PLATFORM.edge
          const outer = side * (PLATFORM.edge + PLATFORM.width)
          const [x0, x1] = side > 0 ? [inner, outer] : [outer, inner]
          // The deck and its floor, the yellow line along the edge, a fence along the back.
          b.box(deck, (x0 + x1) / 2, level - 0.25, 0, x1 - x0, 0.5, PLATFORM.length)
          b.box(floor, (x0 + x1) / 2, level + 0.005, 0, x1 - x0, 0.01, PLATFORM.length)
          b.box(material('#e8c33a'), inner + side * 0.45, level + 0.012, 0, 0.3, 0.01, PLATFORM.length)
          b.box(steel, outer - side * 0.05, level + 0.55, 0, 0.05, 1.1, PLATFORM.length)
          // Platform screens along the edge, waist high.
          b.box(material('#dfe5e8', '#ffffff', { roughness: 0.3 }), inner + side * 0.12, level + 0.65, 0, 0.08, 1.3, PLATFORM.length - 6)
          // Columns down to the ground every 8 m, and the roof's columns.
          for (let z = -long + 4; z <= long - 4; z += 8) {
            const height = level - 0.5 - groundHere
            if (height > 0.5) b.box(pier, outer - side * 0.6, groundHere + height / 2, z, 0.7, height, 0.7)
          }
          for (let z = -long + 2; z <= long - 2; z += 8) b.box(steel, outer - side * 0.25, level + PLATFORM.roof / 2, z, 0.18, PLATFORM.roof, 0.18)
        }
        const span = PLATFORM.edge + PLATFORM.width + 0.6
        b.box(roof, 0, level + PLATFORM.roof + 0.1, 0, span * 2, 0.2, PLATFORM.length + 2)
        b.box(stripe, 0, level + PLATFORM.roof - 0.1, -long - 1, span * 2, 0.35, 0.08)
        b.box(stripe, 0, level + PLATFORM.roof - 0.1, long + 1, span * 2, 0.35, 0.08)
        // A covered stair from one platform down to the street.
        const rise = level - groundHere
        if (rise > 1) {
          const run = rise / 0.6
          const sx = PLATFORM.edge + PLATFORM.width + 1.1
          const steps = Math.ceil(rise / 0.17)
          for (let k = 0; k < steps; k++) {
            const y = groundHere + rise * (k + 0.5) / steps
            const z = long - 2 - run * (k + 0.5) / steps
            b.box(deck, sx, y - 0.1, z, 1.8, 0.2 + rise / steps, run / steps)
          }
          b.box(roof, sx, level + 2.6, long - 2 - run / 2, 2.2, 0.12, run + 1)
        }
      })
      piers.push({ x: spot.x, z: spot.z, w: 2.4, d: 2.4, r: turn * 180 / Math.PI })
    }
    batch.build(node, { where: 'out' })
    return { node, piers }
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
      if (entry.track) {
        group.remove(entry.track)
        disposeGroup(entry.track)
      }
      const { node, piers } = buildTrack(entry.line, entry.spec, near, reach)
      group.add(node)
      entry.track = node
      entry.piers = piers
    }
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
    return { spec, line, track: null, piers: [], trains }
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
    }
  }

  return {
    group, setLines, setNear, update,
    get lines() { return lines },
    // The piers and station supports near the player, as boxes a walker cannot pass.
    get piers() { return lines.flatMap((entry) => entry.piers) },
    dispose() {
      key = ''
      trackKey = ''
      clear()
    },
  }
}
