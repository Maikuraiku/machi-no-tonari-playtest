// The region town in the 3D view. A region town is the whole region (20 km square) as it was
// generated, so in one the island, the sea and the hills of an ordinary town give way to the
// region itself: its ground round the player in detail (a 2 m grid, with the main roads, the
// streets, the buildings — unless the town was made without them — and the district borders),
// the rest of it coarsely out into the haze, and the monorail of the route map with its stations
// and trains, run by the server's clock. The walker, the camera and the pointer follow the ground.
//
// withRegion(environment, world) wraps the environment (environment.js): drawTown, update,
// setQuality and dispose look after the region in a region town and pass everything on to the
// environment otherwise, and it adds
//   region (true in a region town), heightAt(x, z), pick(ray, point), keepAbove(position),
//   pushOut(x, z, pushOut) and reach().
// In a region town scene metres are region metres (the town's tiles start at its corner).
import * as THREE from 'three'
import { STEP, decodeLine, packSpec } from '../region/game-pack.js?v=online-1794980046418'
import { regionClient } from './region-client.js?v=online-1794980046418'
import { createRegionScene } from './region-scene.js?v=online-1794980046418'
import { createRouteTransit } from './route-transit.js?v=online-1794980046418'

const SIZE = 20000
// The detailed square round the player (half its side and its grid), by quality; it is cut again
// round the player once they have gone 45% of the way to its edge.
const NEAR = { low: { half: 240, step: 4 }, medium: { half: 320, step: 2 }, high: { half: 400, step: 2 } }
// The coarse square beyond it, sunk a little so that the detailed ground always lies on top.
const FAR = { half: 3200, step: 32, sink: 0.6 }
// How far along the monorail its beams, piers and stations are built round the player.
const TRACK_REACH = 900
// The grid (m) that the walls of the buildings are sorted into, for stopping a walker.
const CELL = 32
// The monorail's land: no building stands within this distance (m) of a line's centre, nor
// within the wider one along a station (its platforms and stairs), 30 m either side of it.
const LINE_CLEAR = 4.5
const STATION_CLEAR = 11.5
const STATION_REACH = 30

const pointToSegment = (px, pz, ax, az, bx, bz) => {
  const dx = bx - ax
  const dz = bz - az
  const length = dx * dx + dz * dz
  const t = length > 0 ? Math.min(1, Math.max(0, ((px - ax) * dx + (pz - az) * dz) / length)) : 0
  return Math.hypot(ax + dx * t - px, az + dz * t - pz)
}
const cross = (ax, az, bx, bz, cx, cz) => (bx - ax) * (cz - az) - (bz - az) * (cx - ax)
// The distance between two segments in the plane (0 where they cross).
function segmentGap(ax, az, bx, bz, cx, cz, dx, dz) {
  const d1 = cross(cx, cz, dx, dz, ax, az)
  const d2 = cross(cx, cz, dx, dz, bx, bz)
  const d3 = cross(ax, az, bx, bz, cx, cz)
  const d4 = cross(ax, az, bx, bz, dx, dz)
  if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) return 0
  return Math.min(pointToSegment(ax, az, cx, cz, dx, dz), pointToSegment(bx, bz, cx, cz, dx, dz),
    pointToSegment(cx, cz, ax, az, bx, bz), pointToSegment(dx, dz, ax, az, bx, bz))
}

const clampBox = (cx, cz, half) => ({
  x0: Math.max(0, cx - half), z0: Math.max(0, cz - half), x1: Math.min(SIZE, cx + half), z1: Math.min(SIZE, cz + half),
})

export function withRegion(environment, world) {
  const near = createRegionScene()
  const far = createRegionScene()
  const transit = createRouteTransit({ clock: () => regionClient.now() / 1000 })
  const group = new THREE.Group()
  group.name = 'region-town'
  group.add(far.group, near.group, transit.group)
  group.visible = false
  world.add(group)

  let map = null
  let quality = 'medium'
  let nearBox = null
  let farBox = null
  let loadingNear = false
  let loadingFar = false
  // Where the ground is not yet known: the plaza's height, where newcomers arrive.
  let fallback = 0
  let walls = new Map()
  let lineKey = ''
  // The lines' centres in pieces of 20 m, sorted into a grid, each with the room it keeps clear.
  let lineGrid = new Map()
  // How long the last windows took to make, for tuning.
  const stats = { near: 0, nearBuildings: 0, hidden: 0, far: 0 }
  // (Readable from the page's console through the client, which the page shares.)
  regionClient.stats = stats
  // Changes on entering or leaving a region town, so that late replies are dropped.
  let generation = 0
  const focusAt = new THREE.Vector3()
  const probe = new THREE.Vector3()

  const report = (error) => console.warn('region:', error?.message ?? error)
  const ready = () => regionClient.status.phase === 'ready' && regionClient.status.seed === map?.region.seed

  function enter(next) {
    leave()
    map = next
    generation++
    environment.setOutdoors(false)
    group.visible = true
    regionClient.open(next.region.seed)
  }

  function leave() {
    if (!map) return
    map = null
    generation++
    environment.setOutdoors(true)
    group.visible = false
    near.clear()
    far.clear()
    transit.dispose()
    nearBox = null
    farBox = null
    loadingNear = false
    loadingFar = false
    walls = new Map()
    lineKey = ''
    lineGrid = new Map()
  }

  function drawTown(next, taken, clearOf) {
    if (!next?.region) {
      leave()
      environment.drawTown(next, taken, clearOf)
      return
    }
    if (!map || map.region.seed !== next.region.seed || map.region.buildings !== next.region.buildings) enter(next)
    map = next
    fallback = next.region.ground?.plaza ?? fallback
    useLines(next.lines ?? [])
  }

  // The monorail lines as the town stored them, on piers that stand on the ground under them.
  function useLines(packs) {
    const key = packs.map((pack) => `${pack.id}|${pack.name}|${pack.points?.length}|${pack.heights?.length}|${pack.stations?.length}`).join(',')
    if (key === lineKey) return
    lineKey = key
    landOf(packs)
    // The buildings round the player are cleared off the lines' land at the next window.
    nearBox = null
    if (!packs.length) {
      transit.setLines([])
      return
    }
    const ticket = generation
    const lay = () => regionClient.call('lineGround', { packs }).then(({ grounds }) => {
      if (ticket !== generation || key !== lineKey) return
      const byId = new Map(grounds.map((entry) => [entry.id, entry.ground]))
      const specs = packs.map((pack) => {
        const spec = packSpec(pack, { ground: byId.get(pack.id) })
        // No pier stands in the way into a station.
        spec.clear = spec.stops.map((stop) => [stop.at - 6, stop.at + 6])
        return spec
      })
      transit.setLines(specs, { near: [focusAt.x, focusAt.z], reach: TRACK_REACH })
    })
    if (ready()) {
      lay().catch(report)
      return
    }
    const stop = regionClient.on((kind) => {
      if (ticket !== generation || kind === 'close' || kind === 'failed') stop()
      else if (kind === 'ready' && ready()) {
        stop()
        lay().catch(report)
      }
    })
  }

  // The land the monorail stands on, as pieces of 20 m along each line.
  function landOf(packs) {
    lineGrid = new Map()
    for (const pack of packs) {
      let line
      try {
        line = decodeLine(pack)
      } catch {
        continue
      }
      const count = line.points.length / 2
      for (let k = 0; k + 1 < count; k++) {
        const s0 = k * STEP
        const station = line.stations.some((stop) => stop.s > s0 - STATION_REACH && stop.s < s0 + STEP + STATION_REACH)
        const piece = {
          ax: line.points[k * 2], az: line.points[k * 2 + 1], bx: line.points[k * 2 + 2], bz: line.points[k * 2 + 3],
          clear: station ? STATION_CLEAR : LINE_CLEAR,
        }
        for (let j = Math.floor((Math.min(piece.az, piece.bz) - STATION_CLEAR) / CELL); j <= Math.floor((Math.max(piece.az, piece.bz) + STATION_CLEAR) / CELL); j++) {
          for (let i = Math.floor((Math.min(piece.ax, piece.bx) - STATION_CLEAR) / CELL); i <= Math.floor((Math.max(piece.ax, piece.bx) + STATION_CLEAR) / CELL); i++) {
            const cell = `${i},${j}`
            if (!lineGrid.has(cell)) lineGrid.set(cell, [])
            lineGrid.get(cell).push(piece)
          }
        }
      }
    }
  }

  // Whether a building (four corners) keeps off the monorail's land.
  function offTheLine(building) {
    const c = building.corners
    const cells = new Set()
    for (let k = 0; k < 4; k++) cells.add(`${Math.floor(c[k * 2] / CELL)},${Math.floor(c[k * 2 + 1] / CELL)}`)
    for (const cell of cells) {
      for (const piece of lineGrid.get(cell) ?? []) {
        for (let k = 0; k < 4; k++) {
          const n = (k + 1) % 4
          if (segmentGap(c[k * 2], c[k * 2 + 1], c[n * 2], c[n * 2 + 1], piece.ax, piece.az, piece.bx, piece.bz) < piece.clear) return false
        }
      }
    }
    return true
  }

  // The coarse ground out to the haze, cut again round the player now and then.
  function ensureFar(x, z) {
    if (loadingFar || (farBox && Math.abs(x - farBox.cx) < FAR.half * 0.45 && Math.abs(z - farBox.cz) < FAR.half * 0.45)) return
    loadingFar = true
    const ticket = generation
    const cx = Math.round(x / FAR.step) * FAR.step
    const cz = Math.round(z / FAR.step) * FAR.step
    const box = clampBox(cx, cz, FAR.half)
    regionClient.call('window', { ...box, step: FAR.step, buildings: false, streets: false }).then(({ window: win }) => {
      if (ticket !== generation) return
      const started = performance.now()
      far.show(win, { datum: FAR.sink, roads: false, borders: false })
      stats.far = Math.round(performance.now() - started)
      far.setHole(nearBox)
      farBox = { cx, cz }
    }).catch(report).finally(() => {
      if (ticket === generation) loadingFar = false
    })
  }

  // The detailed ground round the player, with its roads, streets and buildings.
  function ensureNear(x, z) {
    const { half, step } = NEAR[quality] ?? NEAR.medium
    if (loadingNear || (nearBox && nearBox.quality === quality && Math.abs(x - nearBox.cx) < half * 0.45 && Math.abs(z - nearBox.cz) < half * 0.45)) return
    loadingNear = true
    const ticket = generation
    const cx = Math.round(x / 16) * 16
    const cz = Math.round(z / 16) * 16
    const box = clampBox(cx, cz, half)
    regionClient.call('window', { ...box, step, buildings: map.region.buildings !== false }).then(({ window: win }) => {
      if (ticket !== generation) return
      const started = performance.now()
      const standing = win.buildings.length
      if (lineGrid.size) win.buildings = win.buildings.filter(offTheLine)
      near.show(win, { borders: true })
      Object.assign(stats, { near: Math.round(performance.now() - started), nearBuildings: win.buildings.length, hidden: standing - win.buildings.length })
      nearBox = { ...box, cx, cz, quality }
      far.setHole(nearBox)
      wallsOf(near.solids)
      regionClient.markShown()
    }).catch(report).finally(() => {
      if (ticket === generation) loadingNear = false
    })
  }

  // The outside walls of the buildings, sorted into a grid.
  function wallsOf(solids) {
    walls = new Map()
    for (const { ring } of solids) {
      for (let k = 0; k < ring.length; k++) {
        const [ax, az] = ring[k]
        const [bx, bz] = ring[(k + 1) % ring.length]
        const wall = { ax, az, bx, bz, r: 0.05 }
        for (let j = Math.floor(Math.min(az, bz) / CELL); j <= Math.floor(Math.max(az, bz) / CELL); j++) {
          for (let i = Math.floor(Math.min(ax, bx) / CELL); i <= Math.floor(Math.max(ax, bx) / CELL); i++) {
            const key = `${i},${j}`
            if (!walls.has(key)) walls.set(key, [])
            walls.get(key).push(wall)
          }
        }
      }
    }
  }

  function heightAt(x, z) {
    if (!map) return 0
    const fine = near.heightAt(x, z)
    if (fine !== null) return fine
    const coarse = far.heightAt(x, z)
    if (coarse !== null) return coarse + FAR.sink
    return fallback
  }

  function update(delta, focus, immersive) {
    environment.update(delta, focus, immersive)
    if (!map) return
    focusAt.copy(focus)
    // The shadow box follows the ground up and down.
    const { sun, sunDirection } = environment
    sun.target.position.y = focus.y
    sun.position.copy(sun.target.position).addScaledVector(sunDirection, 200)
    if (ready()) {
      ensureFar(focus.x, focus.z)
      ensureNear(focus.x, focus.z)
    }
    transit.setNear([focus.x, focus.z], TRACK_REACH)
    transit.update([focus.x, focus.z], 1600)
  }

  return {
    ...environment,
    drawTown,
    update,
    setQuality(next) {
      quality = next
      environment.setQuality(next)
    },
    get region() {
      return Boolean(map)
    },
    regionStats: stats,
    heightAt,
    // Where a ray from the camera meets the ground: `point`, false when it meets none within
    // 1.5 km, or null outside a region town (the flat ground of a town is used then).
    pick(ray, point) {
      if (!map) return null
      let previous = 0
      for (let t = 0.5; t < 1500; t += t < 200 ? 2 : 8) {
        probe.copy(ray.direction).multiplyScalar(t).add(ray.origin)
        if (probe.y <= heightAt(probe.x, probe.z)) {
          let low = previous
          let high = t
          for (let k = 0; k < 12; k++) {
            const middle = (low + high) / 2
            probe.copy(ray.direction).multiplyScalar(middle).add(ray.origin)
            if (probe.y <= heightAt(probe.x, probe.z)) high = middle
            else low = middle
          }
          return point.copy(ray.direction).multiplyScalar(high).add(ray.origin)
        }
        previous = t
      }
      return false
    },
    // Keeps the camera out of the hillside.
    keepAbove(position) {
      if (!map) return
      const ground = heightAt(position.x, position.z) + 0.6
      if (position.y < ground) position.y = ground
    },
    // Keeps a walker out of the buildings and off the monorail's piers (`pushOut` is the scene's).
    pushOut(x, z, pushOut) {
      if (!map) return [x, z]
      const segments = []
      const seen = new Set()
      const cx = Math.floor(x / CELL)
      const cz = Math.floor(z / CELL)
      for (let j = cz - 1; j <= cz + 1; j++) {
        for (let i = cx - 1; i <= cx + 1; i++) {
          for (const wall of walls.get(`${i},${j}`) ?? []) {
            if (seen.has(wall)) continue
            seen.add(wall)
            segments.push(wall)
          }
        }
      }
      const boxes = transit.piers.filter((box) => Math.abs(box.x - x) < 8 && Math.abs(box.z - z) < 8)
      return segments.length || boxes.length ? pushOut({ segments, boxes }, x, z) : [x, z]
    },
    // How far out the camera may be drawn: a region is seen from much higher up.
    reach: () => (map ? 1100 : 260),
    dispose() {
      leave()
      transit.dispose()
      world.remove(group)
      environment.dispose()
    },
  }
}
