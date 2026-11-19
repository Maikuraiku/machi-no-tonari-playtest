// The monorail lines of the region's route map (路線図) in the 3D view. Each line is double
// track: two beams 3.7 m apart on shared piers over the real ground, laid by route-line.js;
// trains going out run on one beam and trains coming back on the other. Stations stand where
// the region put them, elevated, with a side platform outside each beam under one roof and a
// stair down to the street. Several trains run on each line, spaced in time and placed by the
// clock alone, so every screen shows the same trains in the same places. Only the part of each
// line near the player is built.
import * as THREE from 'three'
import { Batch, disposeGroup, glow, material, textTexture } from './kit.js'
import { BEAM, CAR, announcement, carDisplay, carOffsets, createLine, doorOffsets, piersOf } from './monorail-line.js'
import { buildCar, createBoard, hangBoard } from './monorail.js'
import { createRegionRiding } from './region-riding.js'
import { PLATFORM, TRACK_HALF, heightOn, trainsFor } from './route-line.js'
import { STAIR, placeHalf, platformCalls, platformStatus, stationHalf } from './station-solids.js'

export { TRACK_HALF }

// `clock` gives the time in seconds that the trains run by: in the game the server's clock, so
// that every screen shows the same trains in the same places.
export function createRouteTransit({ clock = () => Date.now() / 1000, sound = null } = {}) {
  const group = new THREE.Group()
  group.name = 'route-transit'
  let lines = []
  let key = ''
  let trackKey = ''
  const riding = createRegionRiding(() => lines)
  // Counts the times the stations near the viewer were built again (their solids then change).
  let revision = 0
  const heard = new WeakMap()

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
    // Stations: a full elevated monorail station structure with portal crossbeams below the beam
    // and car skirts (`level - CAR.floor - BEAM.height`), ground-level entrance halls with ticket
    // machines and automated fare gates, stairs with glazed canopies, enclosed platforms with
    // exterior window panes, waiting room booths, station name pillars, tactile paving, benches,
    // platform screen doors, and an overarching truss roof canopy over both tracks (see station-solids.js).
    const solids = { surfaces: [], walls: [], boxes: [] }
    const platforms = []
    const yellow = material('#e8c33a')
    const glass = material('#dfe5e8', '#ffffff', { roughness: 0.3 })
    const windowPane = material('#9ab4c4', '#ffffff', { roughness: 0.18, metalness: 0.45 })
    const woodBench = material('wood', '#8c623e')
    const woodSlats = material('wood', '#a57c52')
    const darkMetal = material('#2c3338', '#ffffff', { roughness: 0.4, metalness: 0.65 })
    const gateBody = material('#d8dde0', '#ffffff', { roughness: 0.35, metalness: 0.4 })
    const gateFlap = material('#c93a32', '#ffffff', { roughness: 0.3 })
    const wallTile = material('tile', '#e6e2d8')
    const ceilingLight = glow('#fff8e6', 1.15)
    const icBlue = glow('#2a9df4', 0.9)
    const greenLamp = glow('#4cd964', 0.85)
    const doorways = doorOffsets(line.cars).filter((at) => Math.abs(at) + CAR.doorWidth / 2 < PLATFORM.length / 2)
    for (const stop of line.stops) {
      if (!close(stop.at)) continue
      const spot = way.spot(stop.at)
      const turn = Math.atan2(spot.dx, spot.dz)
      const beamTop = heightOn(spec.heights, stop.at)
      const beamUnder = beamTop - BEAM.height
      const level = beamTop + CAR.floor
      const groundHere = heightOn(spec.ground, stop.at)
      const half = stationHalf(level, groundHere)
      for (const sign of [1, -1]) {
        batch.at(spot.x, 0, spot.z, sign > 0 ? turn : turn + Math.PI, (b) => drawHalf(b, half, beamUnder))
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
            panel.box(glass, 0, 0.65, 0, 0.05, 1.25, wide - 0.04)
            panel.box(steel, 0, 1.28, 0, 0.07, 0.06, wide)
            for (const end of [-1, 1]) panel.box(steel, 0, 0.65, end * (wide / 2 - 0.025), 0.07, 1.25, 0.05)
            panel.build(leaf, { cast: false, where: 'out' })
            const shut = at + side * wide / 2
            leaf.position.set(half.edge + 0.14, level, shut)
            platform.add(leaf)
            leaves.push({ leaf, shut, slide: side * (wide - 0.02) })
          }
        }
        const board = createBoard(208, 68)
        const display = hangBoard(board, 2.1, 0.68, true, 0.2)
        display.name = 'platform-departure-board'
        display.position.set((half.edge + half.outer) / 2, level + 2.9, 0)
        platform.add(display)

        // Illuminated station name signs (駅名標) hung along the platform wall, freestanding on the
        // platform, and mounted over the street-level entrance portal.
        if (typeof document !== 'undefined') {
          const signTex = textTexture(`${stop.name}  ${sign > 0 ? '1番線' : '2番線'}`, {
            color: '#1b262c', background: '#f7f6f0', border: spec.color ?? '#1f7a6a', padding: 14,
          })
          const signMat = new THREE.MeshBasicMaterial({ map: signTex.map })
          const signH = 0.42
          const signW = Math.min(2.4, signH * signTex.aspect)
          for (const vz of [-half.long * 0.48, half.long * 0.48]) {
            const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(signW, signH), signMat)
            signMesh.position.set(half.outer - 0.12, level + 1.95, vz)
            signMesh.rotation.y = -Math.PI / 2
            signMesh.userData.ownMaterial = true
            platform.add(signMesh)
          }
          if (half.stair) {
            const entTex = textTexture(`${stop.name}駅  ${sign > 0 ? '1番線のりば' : '2番線のりば'}`, {
              color: '#ffffff', background: spec.color ?? '#1f7a6a', border: '#f4f2ea', padding: 14,
            })
            const entMat = new THREE.MeshBasicMaterial({ map: entTex.map })
            const entH = 0.34
            const entW = Math.min(STAIR.width + 0.3, entH * entTex.aspect)
            const entSign = new THREE.Mesh(new THREE.PlaneGeometry(entW, entH), entMat)
            entSign.position.set((half.stair.u0 + half.stair.u1) / 2, groundHere + 2.42, half.stair.bottom + 0.88)
            entSign.userData.ownMaterial = true
            platform.add(entSign)
          }
        }
        node.add(platform)
        platforms.push({ stop, sign, spot, level, leaves, board, nextBoard: -Infinity })
      }
      // Full station superstructure: portal frames tying the piers and platform decks together
      // strictly BELOW the concrete track beams and car bogies/skirts (`beamUnder = level - 2.63`),
      // an overarching station roof with skylight spine, clerestory trusses, and line-color fascias.
      batch.at(spot.x, 0, spot.z, turn, (b) => {
        const span = half.outer + 0.65
        const long = half.long
        const roofY = level + PLATFORM.roof
        // Lower roof wing over each platform and raised central skylight monitor over the tracks.
        for (const s of [-1, 1]) {
          b.box(roof, s * (half.edge + (span - half.edge) / 2), roofY + 0.08, 0, span - half.edge + 0.3, 0.18, long * 2 + 2.4)
          b.box(woodSlats, s * (half.edge + (half.outer - half.edge) / 2), roofY - 0.01, 0, half.outer - half.edge - 0.3, 0.02, long * 2 - 0.6)
          b.box(stripe, s * (span + 0.04), roofY + 0.06, 0, 0.08, 0.32, long * 2 + 2.4)
          b.box(ceilingLight, s * ((half.edge + half.outer) / 2), roofY - 0.04, 0, 0.22, 0.03, long * 2 - 2)
        }
        // Central arched/stepped skylight roof high above the cars (`CAR.roof` is `level + 2.60`, `roofY` is `level + 3.90`).
        b.box(roof, 0, roofY + 0.54, 0, half.edge * 2 + 0.8, 0.16, long * 2 + 2.4)
        for (const s of [-1, 1]) {
          // Clerestory side louver strips along the edges of the raised roof monitor (never across the track space).
          b.box(windowPane, s * (half.edge + 0.15), roofY + 0.3, 0, 0.06, 0.32, long * 2 + 1.6)
        }
        b.box(stripe, 0, roofY + 0.3, -long - 1.2, span * 2, 0.42, 0.12)
        b.box(stripe, 0, roofY + 0.3, long + 1.2, span * 2, 0.42, 0.12)
        // Transverse steel roof trusses (at `roofY + 0.18`, well above `CAR.roof + 0.26 = level + 2.86`)
        // and heavy concrete portal crossbeams UNDER the track beams (`beamUnder - 0.42`), with vertical
        // concrete brackets rising under each outer platform deck (`|x| >= half.edge + 0.25`) so the
        // straddle-beam rails and car skirts/bogies (`|x| <= 3.34`) remain 100% clear!
        for (let v = -long + 4; v <= long - 4; v += 8) {
          b.box(steel, 0, roofY + 0.18, v, span * 2 - 0.2, 0.18, 0.2)
          b.box(pier, 0, beamUnder - 0.42, v, half.outer * 2 - 0.2, 0.84, 0.92)
          for (const s of [-1, 1]) {
            const supW = half.outer - half.edge - 0.35
            const supX = s * (half.edge + 0.25 + supW / 2)
            const supH = (level - 0.5) - (beamUnder - 0.05)
            if (supH > 0.1) b.box(pier, supX, beamUnder - 0.05 + supH / 2, v, supW, supH, 0.72)
          }
        }
        // Central station hall piers under the crossbeams at `v = -8, 8`.
        for (const pv of [-8, 8]) {
          const tall = beamUnder - 0.84 - groundHere
          if (tall > 0.4) {
            b.box(pier, 0, groundHere + 0.18, pv, 2.8, 0.36, 2.2)
            b.box(pier, 0, groundHere + tall / 2, pv, 1.7, tall, 1.5)
          }
        }
      })
      piers.push({ x: spot.x, z: spot.z, w: 2.4, d: 2.4, r: turn * 180 / Math.PI })
    }

    // One half of a station in its own frame: x across the line (out from the beam), z along it.
    function drawHalf(b, half, beamUnder) {
      const { edge, outer, long, level, ground, stair, landing } = half
      const length = long * 2
      // The deck and its floor, with structural fascia, under-platform ribbed soffit, and yellow tactile strip.
      // Kept strictly at `x >= edge` so nothing encroaches on the car body or track gauge.
      b.box(deck, (edge + outer) / 2, level - 0.25, 0, outer - edge, 0.5, length)
      b.box(pier, outer + 0.04, level - 0.22, 0, 0.1, 0.56, length + 0.2)
      b.box(stripe, outer + 0.095, level - 0.16, 0, 0.02, 0.16, length + 0.2)
      b.box(floor, (edge + outer) / 2, level + 0.005, 0, outer - edge, 0.01, length)
      b.box(yellow, edge + 0.46, level + 0.012, 0, 0.32, 0.012, length - 0.6)
      // Tactile guidance path from the landing entrance to the boarding line.
      if (landing) {
        const midL = (landing.v0 + landing.v1) / 2
        b.box(yellow, (edge + 0.6 + outer) / 2, level + 0.012, midL, outer - edge - 0.6, 0.012, 0.3)
      }
      // Back wall of the platform: tiled dado with structural mullions and glazed windbreak windows above,
      // open where the landing meets the platform.
      const backWall = (v0, v1) => {
        const span = v1 - v0
        if (span <= 0.1) return
        const mid = (v0 + v1) / 2
        b.box(deck, outer - 0.06, level + 0.52, mid, 0.12, 1.04, span)
        b.box(wallTile, outer - 0.125, level + 0.52, mid, 0.02, 0.96, Math.max(0.1, span - 0.1))
        b.box(windowPane, outer - 0.05, level + 1.78, mid, 0.05, 1.46, Math.max(0.1, span - 0.16))
        b.box(steel, outer - 0.06, level + 2.54, mid, 0.12, 0.08, span)
        b.box(deck, outer - 0.06, level + 3.22, mid, 0.12, 1.28, span)
        // Window mullions every 3 m.
        for (let mv = v0 + 3; mv < v1 - 1; mv += 3) {
          b.box(darkMetal, outer - 0.06, level + 1.78, mv, 0.09, 1.46, 0.06)
        }
      }
      if (landing) {
        backWall(-long, landing.v0)
        backWall(landing.v1, long)
      } else backWall(-long, long)
      // Platform end glass walls & safety railings.
      for (const endV of [-long + 0.05, long - 0.05]) {
        b.box(deck, (edge + outer) / 2, level + 0.52, endV, outer - edge, 1.04, 0.1)
        b.box(windowPane, (edge + outer) / 2, level + 1.65, endV, outer - edge - 0.15, 1.2, 0.05)
        b.box(steel, (edge + outer) / 2, level + 2.28, endV, outer - edge, 0.07, 0.1)
      }
      // Fixed platform screen panes leave the same doorways as the train; sliding leaves are separate.
      // All screen geometry sits at `x = edge + 0.14` (at least 18 cm clear of the car side wall).
      let from = -long
      for (const at of doorways) {
        screen(from, at - CAR.doorWidth / 2)
        // Portal header over each doorway with line-colour band and door status indicator.
        b.box(steel, edge + 0.14, level + 2.22, at, 0.1, 0.16, CAR.doorWidth + 0.16)
        b.box(stripe, edge + 0.09, level + 2.22, at, 0.02, 0.1, CAR.doorWidth + 0.12)
        b.box(greenLamp, edge + 0.2, level + 2.22, at, 0.02, 0.05, 0.32)
        from = at + CAR.doorWidth / 2
      }
      screen(from, long)
      function screen(v0, v1) {
        if (v1 <= v0) return
        const mid = (v0 + v1) / 2
        const span = v1 - v0
        b.box(glass, edge + 0.14, level + 0.65, mid, 0.06, 1.3, span)
        b.box(steel, edge + 0.14, level + 1.3, mid, 0.08, 0.06, span)
        b.box(stripe, edge + 0.1, level + 1.12, mid, 0.02, 0.08, span)
        // Upper safety transom linking the doorway portals.
        b.box(steel, edge + 0.14, level + 2.26, mid, 0.08, 0.08, span)
      }
      // Passenger waiting benches, glazed waiting-area windscreens, and information pillars along the platform.
      for (const benchV of [-11, 0, 11]) {
        if (landing && benchV >= landing.v0 - 2.2 && benchV <= landing.v1 + 2.2) continue
        const bx = edge + (outer - edge) * 0.62
        b.box(woodBench, bx, level + 0.44, benchV, 0.52, 0.07, 2.4)
        b.box(woodBench, bx + 0.2, level + 0.68, benchV, 0.07, 0.42, 2.4)
        for (const legZ of [benchV - 0.95, benchV + 0.95]) {
          b.box(darkMetal, bx, level + 0.21, legZ, 0.44, 0.42, 0.07)
        }
        // Glass windbreak screen behind/beside the central waiting bench.
        if (benchV === 0) {
          for (const endZ of [-1.45, 1.45]) {
            b.box(darkMetal, bx - 0.05, level + 1.1, endZ, 0.72, 2.2, 0.06)
            b.box(windowPane, bx - 0.05, level + 1.15, endZ, 0.64, 1.7, 0.03)
          }
        }
      }
      // Columns down to the ground every 8 m, and the roof's steel columns along the outer platform wall.
      for (let v = -long + 4; v <= long - 4; v += 8) {
        const height = level - 0.5 - ground
        if (height > 0.5) {
          b.box(pier, outer - 0.6, ground + height / 2, v, 0.72, height, 0.72)
          b.box(pier, outer - 0.6, ground + 0.18, v, 1.0, 0.36, 1.0)
        }
      }
      for (let v = -long + 2; v <= long - 2; v += 8) b.box(steel, outer - 0.2, level + PLATFORM.roof / 2, v, 0.2, PLATFORM.roof, 0.2)
      if (!stair) return
      // Upper station concourse / landing level with ticket gate line, station office window, and glass walls.
      const lMidU = (landing.u0 + landing.u1) / 2
      const lMidV = (landing.v0 + landing.v1) / 2
      const lW = landing.u1 - landing.u0
      const lD = landing.v1 - landing.v0
      b.box(deck, lMidU, level - 0.25, lMidV, lW, 0.5, lD)
      b.box(floor, lMidU, level + 0.006, lMidV, lW, 0.01, lD)
      b.box(yellow, lMidU, level + 0.012, landing.v1 - 0.15, STAIR.width - 0.2, 0.012, 0.28)
      // Glazed enclosure around the upper landing + overhead ceiling lighting.
      b.box(deck, (outer + landing.u1) / 2, level + 0.52, landing.v0 + 0.04, landing.u1 - outer, 1.04, 0.08)
      b.box(windowPane, (outer + landing.u1) / 2, level + 1.75, landing.v0 + 0.04, landing.u1 - outer - 0.1, 1.4, 0.04)
      b.box(deck, landing.u1 - 0.04, level + 0.52, lMidV, 0.08, 1.04, lD)
      b.box(windowPane, landing.u1 - 0.04, level + 1.75, lMidV, 0.04, 1.4, lD - 0.1)
      b.box(roof, lMidU, level + PLATFORM.roof - 0.08, lMidV, lW + 0.45, 0.18, lD + 0.7)
      b.box(ceilingLight, lMidU, level + PLATFORM.roof - 0.18, lMidV, 0.35, 0.03, lD - 0.4)
      // Automated ticket gates (自動改札機) at the threshold between landing and platform (decorative, non-blocking).
      for (const gz of [landing.v0 + 0.35, landing.v1 - 0.35]) {
        b.box(gateBody, outer + 0.05, level + 0.48, gz, 0.95, 0.96, 0.22)
        b.box(darkMetal, outer + 0.05, level + 0.97, gz, 0.92, 0.04, 0.2)
        b.box(icBlue, outer + 0.36, level + 0.99, gz, 0.14, 0.02, 0.12)
        b.box(gateFlap, outer + 0.05, level + 0.48, gz + (gz < lMidV ? 0.14 : -0.14), 0.04, 0.62, 0.08)
      }
      // The steps, from the street up to the landing.
      const middle = (stair.u0 + stair.u1) / 2
      const steps = Math.max(1, Math.ceil(stair.rise / STAIR.riser))
      for (let k = 0; k < steps; k++) {
        const top = ground + stair.rise * (k + 1) / steps
        const v = stair.bottom - stair.run * (k + 0.5) / steps
        b.box(deck, middle, top - 0.15, v, STAIR.width, 0.3, stair.run / steps + 0.02)
      }
      // The concrete stringers under the flight, glazed side screens, double handrails, and sloping roof canopy.
      const p = (u, y, v) => new THREE.Vector3(u, y, v)
      for (const u of [stair.u0, stair.u1]) {
        b.face(pier, [p(u, ground, stair.bottom), p(u, level - 0.3, stair.top), p(u, level + 0.9, stair.top), p(u, ground + 0.9, stair.bottom)])
        b.face(pier, [p(u, ground + 0.9, stair.bottom), p(u, level + 0.9, stair.top), p(u, level - 0.3, stair.top), p(u, ground, stair.bottom)])
        b.face(windowPane, [p(u, ground + 0.9, stair.bottom), p(u, level + 0.9, stair.top), p(u, level + 2.2, stair.top), p(u, ground + 2.2, stair.bottom)])
        b.face(windowPane, [p(u, ground + 2.2, stair.bottom), p(u, level + 2.2, stair.top), p(u, level + 0.9, stair.top), p(u, ground + 0.9, stair.bottom)])
        b.bar(steel, p(u, ground + 0.95, stair.bottom), p(u, level + 0.95, stair.top), 0.06, 0.06)
        b.bar(steel, p(u, ground + 0.72, stair.bottom), p(u, level + 0.72, stair.top), 0.045, 0.045)
        b.bar(steel, p(u, ground + 2.25, stair.bottom), p(u, level + 2.25, stair.top), 0.08, 0.08)
      }
      b.face(pier, [p(stair.u0, ground - 0.2, stair.bottom), p(stair.u1, ground - 0.2, stair.bottom), p(stair.u1, level - 0.3, stair.top), p(stair.u0, level - 0.3, stair.top)])
      // Sloping canopy roof over the entire stair flight + support column under the landing.
      b.bar(roof, p(middle, ground + 2.6, stair.bottom + 0.4), p(middle, level + 2.6, stair.top - 0.2), STAIR.width + 0.48, 0.15)
      b.box(pier, middle, (ground + level) / 2 - 0.3, stair.top + 0.15, STAIR.width, level - ground, 0.35)
      // Under-stair enclosed station machinery / ticket office housing on the street level.
      const underLen = Math.min(stair.run * 0.55, 8.5)
      if (underLen > 3 && level - ground > 4.5) {
        const uMidV = stair.top + underLen / 2 + 0.3
        const uH = Math.min(2.8, (level - ground) * 0.45)
        b.box(wallTile, middle, ground + uH / 2, uMidV, STAIR.width - 0.08, uH, underLen)
      }
      // Street-level entrance portal at `stair.bottom` with ticket vending machine alcove, fare map & header sign band.
      const portalZ = stair.bottom + 0.32
      b.box(steel, stair.u0 - 0.05, ground + 1.3, portalZ, 0.12, 2.6, 0.55)
      b.box(steel, stair.u1 + 0.05, ground + 1.3, portalZ, 0.12, 2.6, 0.55)
      b.box(roof, middle, ground + 2.62, portalZ, STAIR.width + 0.55, 0.18, 1.15)
      b.box(stripe, middle, ground + 2.44, portalZ + 0.56, STAIR.width + 0.5, 0.26, 0.06)
      b.box(ceilingLight, middle, ground + 2.51, portalZ + 0.1, STAIR.width - 0.2, 0.03, 0.4)
      b.box(yellow, middle, ground + 0.02, stair.bottom + 0.25, STAIR.width - 0.2, 0.015, 0.32)
      // Ticket vending machine & fare map board recessed beside the outer stair wall under the flight.
      b.box(darkMetal, stair.u1 + 0.18, ground + 1.0, stair.bottom - 1.8, 0.28, 2.0, 1.8)
      b.box(icBlue, stair.u1 + 0.33, ground + 1.18, stair.bottom - 1.4, 0.02, 0.58, 0.8)
      b.box(ceilingLight, stair.u1 + 0.33, ground + 1.45, stair.bottom - 2.25, 0.02, 0.45, 0.65)
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

  // Sound follows the same service clock as the train. A visitor who reaches a platform
  // during the final approach still hears its warning, once for that arrival.
  function announce(entry, train, now, listener) {
    if (!sound || !listener) return
    const { line, spec } = entry
    let previous = heard.get(train)
    if (!previous) {
      previous = { time: now, events: new Set() }
      heard.set(train, previous)
    }
    if (previous.checked && now >= previous.time && now - previous.time < 0.25) return
    const from = Math.max(previous.time, now - 2) + train.offset
    previous.time = now
    previous.checked = true
    const events = line.eventsBetween(from, now + train.offset)
    const state = train.state
    if (state.phase === 'run' && state.arrives <= 16) {
      events.push({ kind: 'approach', time: state.time, stop: state.from, next: state.next,
        arrival: state.time + state.arrives })
    }
    for (const event of events) {
      const arrival = event.kind === 'approach'
        ? event.arrival ?? event.time + line.stateAt(event.time).arrives : event.time
      const key = `${event.kind}|${Math.round(arrival * 1000)}`
      if (previous.events.has(key)) continue
      const said = announcement(line, event)
      if (!said) continue
      const aboard = listener.ride?.entry === entry && listener.ride.train === train
      let volume = 0
      let sign = Math.sign(event.next.at - event.stop.at) || 1
      if (aboard && said.where !== 'platform') volume = 1
      else if (!listener.ride && said.where !== 'car' && said.at) {
        if (said.at.index === 0) sign = 1
        else if (said.at.index === line.stops.length - 1) sign = -1
        const spot = line.way.spot(said.at.at)
        const platformHeight = heightOn(spec.heights, said.at.at) + CAR.floor
        const fromLine = sign * ((listener.x - spot.x) * spot.dz - (listener.z - spot.z) * spot.dx)
        if (fromLine < PLATFORM.edge - 0.6 || Math.abs(listener.y - platformHeight) > 2.2) continue
        const across = sign * (PLATFORM.edge + PLATFORM.width / 2)
        const x = spot.x + spot.dz * across
        const z = spot.z - spot.dx * across
        const distance = Math.hypot(listener.x - x, listener.z - z, (listener.y - platformHeight) * 2)
        volume = Math.max(0, 1 - distance / 32)
      }
      if (!(volume > 0.05)) continue
      previous.events.add(key)
      if (previous.events.size > 32) previous.events.delete(previous.events.values().next().value)
      if (said.chime) sound.play(said.chime, volume)
      if (said.text) {
        const text = event.kind === 'approach'
          ? said.text.replace('まもなく、', `まもなく、${sign > 0 ? 1 : 2}番線に、`) : said.text
        sound.say(text, { volume })
      }
    }
  }

  // Moves every train to where the clock says, on the beam of its direction, and opens the
  // doors on the platform side while it stands. `listener` is the resident's feet and ride.
  function update(near = null, reach = 2200, listener = null) {
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
          const visible = listener?.ride?.train === train || !near || Math.hypot(x - near[0], z - near[1]) < reach
          car.car.visible = visible
          if (!visible) continue
          const y = heightOn(spec.heights, s)
          const pitch = Math.atan2(heightOn(spec.heights, s + CAR.length / 2) - heightOn(spec.heights, s - CAR.length / 2), CAR.length)
          car.car.position.set(x, y, z)
          car.car.rotation.set(-pitch, Math.atan2(spot.dx, spot.dz), 0, 'YXZ')
          car.place = { x, z, dx: spot.dx, dz: spot.dz, y, pitch }
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
        announce(entry, train, now, listener)
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
    group, setLines, setNear, update, ...riding,
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
