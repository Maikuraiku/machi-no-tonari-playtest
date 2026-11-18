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
import { STEP, decodeLine, packSpec } from '../region/game-pack.js'
import { regionClient } from './region-client.js'
import { createRegionScene } from './region-scene.js'
import { createRouteTransit } from './route-transit.js'
import { REGION_OVERVIEW_STEP, regionOverview } from './region-overview.js'
import { buildingFilter, claimsKey, levelOf as lotLevel, lotRects, outlinesIn, padGround, padsOf } from './region-pads.js'
import { claimIndex, lotRights } from '../region/district-lookup.js'
import { rayOnto, standOn, stopsAt } from './station-solids.js'

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

export function withRegion(environment, world, { sound } = {}) {
  const near = createRegionScene()
  const far = createRegionScene()
  const whole = createRegionScene()
  const transit = createRouteTransit({ clock: () => regionClient.now() / 1000, sound })
  const group = new THREE.Group()
  group.name = 'region-town'
  const routes = new THREE.Group()
  routes.name = 'region-overview-routes'
  group.add(whole.group, far.group, near.group, transit.group, routes)
  group.visible = false
  world.add(group)

  let map = null
  let quality = 'medium'
  let nearBox = null
  let farBox = null
  let loadingNear = false
  let loadingFar = false
  let loadingWhole = false
  let wholeShown = false
  let overview = false
  let previousBackground = null
  let previousFog = null
  // Where the ground is not yet known: the plaza's height, where newcomers arrive.
  let fallback = 0
  let walls = new Map()
  let lineKey = ''
  // The town's own lots as the scene last drew them (the shop, the cafe, the houses), the near
  // window as the worker cut it, and what of the town it was last shown with.
  let lots = []
  let nearRaw = null
  let nearShownKey = ''
  // The lines' centres in pieces of 20 m, sorted into a grid, each with the room it keeps clear.
  let lineGrid = new Map()
  // How long the last windows took to make, for tuning.
  const stats = { near: 0, nearBuildings: 0, hidden: 0, far: 0, whole: 0, wholeVertices: 0 }
  // (Readable from the page's console through the client, which the page shares.)
  regionClient.stats = stats
  // Changes on entering or leaving a region town, so that late replies are dropped.
  let generation = 0
  const focusAt = new THREE.Vector3()
  const probe = new THREE.Vector3()

  const report = (error) => console.warn('region:', error?.message ?? error)
  // While the region of a region town is being made, the placeholder island of the start screen
  // is put away at once, so that it is not left standing under the region when it comes in.
  let waiting = false
  regionClient.on((kind) => {
    if (map) return
    if (kind === 'open' && !waiting) {
      waiting = true
      environment.setOutdoors(false)
    } else if (kind === 'close' && waiting) {
      waiting = false
      environment.setOutdoors(true)
    }
  })
  const ready = () => regionClient.status.phase === 'ready' && regionClient.status.seed === map?.region.seed

  function enter(next) {
    leave()
    waiting = false
    map = next
    generation++
    environment.setOutdoors(false)
    group.visible = true
    previousBackground = world.background
    previousFog = world.fog ? { near: world.fog.near, far: world.fog.far } : null
    regionClient.open(next.region.seed)
  }

  function leave() {
    waiting = false
    environment.setOutdoors(false)
    if (!map) return
    map = null
    generation++
    group.visible = false
    near.clear()
    far.clear()
    whole.clear()
    clearRoutes()
    transit.dispose()
    nearBox = null
    farBox = null
    loadingNear = false
    loadingFar = false
    loadingWhole = false
    wholeShown = false
    setOverview(false)
    walls = new Map()
    lineKey = ''
    lineGrid = new Map()
    nearRaw = null
    nearShownKey = ''
    stationGrid = { revision: -1, cells: new Map(), surfaces: [] }
  }

  function drawTown(next, taken, clearOf, nextLots = []) {
    lots = Array.isArray(nextLots) ? nextLots : []
    if (!next) {
      leave()
      return
    }
    if (!next.region) {
      leave()
      environment.setOutdoors(!waiting)
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
    showRoutes(packs)
    landOf(packs)
    // (The buildings round the player are cleared off the lines' land when the near window is
    // shown again, which the changed key below brings about.)
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

  function clearRoutes() {
    for (const child of [...routes.children]) {
      routes.remove(child)
      child.geometry.dispose()
      child.material.dispose()
    }
  }

  function showRoutes(packs) {
    clearRoutes()
    const positions = []
    const colours = []
    const colour = new THREE.Color()
    for (const pack of packs) {
      let line
      try {
        line = decodeLine(pack)
      } catch {
        continue
      }
      colour.set(line.color || '#b13d39')
      for (let k = 1; k < line.heights.length; k++) {
        for (const at of [k - 1, k]) {
          positions.push(line.points[at * 2], line.heights[at] + 5, line.points[at * 2 + 1])
          colours.push(colour.r, colour.g, colour.b)
        }
      }
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colours, 3))
    const route = new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({ vertexColors: true }))
    routes.add(route)
    routes.visible = overview
  }

  function ensureWhole() {
    if (wholeShown || loadingWhole) return
    loadingWhole = true
    const ticket = generation
    regionClient.call('window', { x0: 0, z0: 0, x1: SIZE, z1: SIZE, step: REGION_OVERVIEW_STEP, buildings: false, streets: false }).then(async ({ window: win }) => {
      if (ticket !== generation) return
      const started = performance.now()
      const shown = await whole.show(win, { datum: FAR.sink * 2, coarse: true, borders: false })
      if (shown === false || ticket !== generation) return
      whole.setHole(farBox)
      wholeShown = true
      stats.whole = Math.round(performance.now() - started)
      stats.wholeVertices = win.width * win.depth
      whole.group.visible = overview
    }).catch(report).finally(() => {
      if (ticket === generation) loadingWhole = false
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
    regionClient.call('window', { ...box, step: FAR.step, buildings: false, streets: false }).then(async ({ window: win }) => {
      if (ticket !== generation) return
      const started = performance.now()
      const shown = await far.show(win, { datum: FAR.sink, roads: false, borders: false })
      if (shown === false || ticket !== generation) return
      stats.far = Math.round(performance.now() - started)
      far.setHole(nearBox)
      farBox = { ...box, cx, cz }
      whole.setHole(farBox)
    }).catch(report).finally(() => {
      if (ticket === generation) loadingFar = false
    })
  }

  // What of the town the near window shows: the districts and how they are managed, the town's
  // own lots and their heights, the monorail and whether the town keeps the region's buildings.
  const townKey = () => `${claimsKey(map?.districts)}|${JSON.stringify(padsOf(map, lots))}|${lineKey}|${map?.region.buildings}`

  // The detailed ground round the player, with its roads, streets and buildings.
  function ensureNear(x, z) {
    const { half, step } = NEAR[quality] ?? NEAR.medium
    if (loadingNear) return
    const moved = !nearBox || nearBox.quality !== quality || Math.abs(x - nearBox.cx) >= half * 0.45 || Math.abs(z - nearBox.cz) >= half * 0.45
    if (!moved) {
      // The town changed under the same ground (a district managed, a house built): shown again
      // from the window already here, without asking the worker.
      if (nearRaw && townKey() !== nearShownKey) {
        loadingNear = true
        const ticket = generation
        showNear(nearRaw, nearBox).catch(report).finally(() => {
          if (ticket === generation) loadingNear = false
        })
      }
      return
    }
    loadingNear = true
    const ticket = generation
    const cx = Math.round(x / 16) * 16
    const cz = Math.round(z / 16) * 16
    const box = clampBox(cx, cz, half)
    // (Always with the region's buildings: which of them stand is decided here, by district.)
    regionClient.call('window', { ...box, step, buildings: true }).then(async ({ window: win }) => {
      if (ticket !== generation) return
      nearRaw = win
      await showNear(win, { ...box, cx, cz, quality })
    }).catch(report).finally(() => {
      if (ticket === generation) loadingNear = false
    })
  }

  // Shows the near window with the town on it: the generated buildings kept off districts managed
  // without them, off the town's lots and off the monorail's land; the lots levelled into terraces
  // with retaining walls; the plaza paved; the managed districts outlined in the viewer's colours.
  async function showNear(raw, box) {
    const ticket = generation
    const key = townKey()
    const started = performance.now()
    const keep = buildingFilter({
      claims: claimIndex(map.districts ?? []),
      built: map.region.buildings !== false,
      rects: lotRects(map, lots),
      offLine: lineGrid.size ? offTheLine : null,
    })
    const buildings = raw.buildings.filter(keep)
    const ground = padGround(raw, padsOf(map, lots))
    const plaza = ground.pads.find((pad) => pad.kind === 'plaza')
    const shown = await near.show({ ...raw, heights: ground.heights, buildings }, {
      borders: true,
      outlines: outlinesIn(map.districts ?? [], raw.box, 4),
      walls: ground.walls,
      paving: plaza?.pave ? [{ ...plaza.pave, y: plaza.y }] : [],
    })
    if (shown === false || ticket !== generation) return
    Object.assign(stats, { near: Math.round(performance.now() - started), nearBuildings: buildings.length, hidden: raw.buildings.length - buildings.length })
    nearBox = box
    nearShownKey = key
    far.setHole(nearBox)
    wallsOf(near.solids)
    regionClient.markShown()
  }

  // The outside walls of the buildings, sorted into a grid.
  function wallsOf(solids) {
    walls = new Map()
    for (const { ring, base = -Infinity, top = Infinity } of solids) {
      for (let k = 0; k < ring.length; k++) {
        const [ax, az] = ring[k]
        const [bx, bz] = ring[(k + 1) % ring.length]
        const wall = { ax, az, bx, bz, r: 0.05, base, top }
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

  // The stations' surfaces, walls and boxes near the viewer, sorted into the walls' grid; made
  // again whenever the transit builds its stations again.
  let stationGrid = { revision: -1, cells: new Map(), surfaces: [] }
  function stationSolids() {
    if (stationGrid.revision === transit.revision) return stationGrid
    const cells = new Map()
    const { surfaces, walls: stationWalls, boxes } = transit.solids
    const file = (kind, item) => {
      const { x0, z0, x1, z1 } = item.box
      for (let j = Math.floor(z0 / CELL); j <= Math.floor(z1 / CELL); j++) {
        for (let i = Math.floor(x0 / CELL); i <= Math.floor(x1 / CELL); i++) {
          const key = `${i},${j}`
          if (!cells.has(key)) cells.set(key, { surfaces: [], walls: [], boxes: [] })
          cells.get(key)[kind].push(item)
        }
      }
    }
    for (const item of surfaces) file('surfaces', item)
    for (const item of stationWalls) file('walls', item)
    for (const item of boxes) file('boxes', item)
    stationGrid = { revision: transit.revision, cells, surfaces }
    return stationGrid
  }

  // The height under (x, z): the ground (levelled under the town's lots), or, for a walker whose
  // feet are at `y`, a station's platform, landing or stair they can step onto.
  function heightAt(x, z, y) {
    const ground = terrainAt(x, z)
    if (!map || !Number.isFinite(y)) return ground
    const cell = stationSolids().cells.get(`${Math.floor(x / CELL)},${Math.floor(z / CELL)}`)
    if (!cell) return ground
    const on = standOn(cell.surfaces, x, z, y)
    return on !== null && on > ground ? on : ground
  }

  function terrainAt(x, z) {
    if (!map) return 0
    const fine = near.heightAt(x, z)
    if (fine !== null) return fine
    const coarse = far.heightAt(x, z)
    if (coarse !== null) return coarse + FAR.sink
    const complete = whole.heightAt(x, z)
    if (complete !== null) return complete + FAR.sink * 2
    return fallback
  }

  function setOverview(next) {
    overview = next
    routes.visible = next
    whole.group.visible = next
    if (world.fog && previousFog) {
      world.fog.near = next ? SIZE * 2.5 : previousFog.near
      world.fog.far = next ? SIZE * 6 : previousFog.far
    }
    world.background = next && world.fog ? world.fog.color : previousBackground
  }

  function update(delta, focus, immersive, view) {
    environment.update(delta, focus, immersive)
    if (!map) return
    setOverview(Boolean(view?.overview) && !immersive)
    focusAt.copy(view?.player ?? focus)
    // The shadow box follows the ground up and down.
    const { sun, sunDirection } = environment
    sun.target.position.y = focus.y
    sun.position.copy(sun.target.position).addScaledVector(sunDirection, 200)
    if (ready()) {
      ensureWhole()
      ensureFar(focusAt.x, focusAt.z)
      ensureNear(focusAt.x, focusAt.z)
    }
  }

  function updateTransit(player, ride) {
    if (!map) return
    const near = [player.x, player.z]
    transit.setNear(near, TRACK_REACH)
    transit.update(near, 1600, { x: player.x, y: player.y, z: player.z, ride })
  }

  return {
    ...environment,
    drawTown,
    update,
    updateTransit,
    regionTransit: transit,
    setQuality(next) {
      quality = next
      environment.setQuality(next)
    },
    get region() {
      return Boolean(map)
    },
    regionStats: stats,
    // The height a scene lot stands at: its own ground in a region town, 0 in an ordinary one.
    levelOf: (lot) => (map ? lotLevel(lot, map.region) : 0),
    // Colours the marker of a lot about to be built on: yellow where the viewer may build (every
    // tile in a district they manage or help build), red elsewhere; as it was in ordinary towns.
    tint(marker, ground, size) {
      const paint = marker?.material
      if (!paint?.color) return
      paint.userData.baseColor ??= paint.color.getHex()
      if (!map || !ground?.tile) {
        paint.color.setHex(paint.userData.baseColor)
        return
      }
      const rights = lotRights(claimIndex(map.districts ?? []), ground.tile.x, ground.tile.z, size?.w ?? 1, size?.d ?? 1)
      paint.color.set(rights.ok ? '#ffe98a' : '#ff7a6a')
    },
    overview: (aspect, fov) => map ? regionOverview(SIZE, aspect, fov) : null,
    heightAt,
    // Where a ray from the camera meets the ground: `point`, false when it meets none within
    // 1.5 km, or null outside a region town (the flat ground of a town is used then).
    pick(ray, point) {
      if (!map) return null
      // A station's platform, landing or stair in the way comes first.
      const o = [ray.origin.x, ray.origin.y, ray.origin.z]
      const d = [ray.direction.x, ray.direction.y, ray.direction.z]
      let station = Infinity
      for (const surface of stationSolids().surfaces) {
        const t = rayOnto(surface, o, d)
        if (t !== null && t < station) station = t
      }
      let previous = 0
      const range = Math.min(station, overview ? SIZE * 6 : 1500)
      for (let t = 0.5; t < range; t += t < 200 ? 2 : overview ? 80 : 8) {
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
      if (station < Infinity) return point.copy(ray.direction).multiplyScalar(station).add(ray.origin)
      return false
    },
    // Keeps the camera out of the hillside.
    keepAbove(position) {
      if (!map) return
      const ground = heightAt(position.x, position.z) + 0.6
      if (position.y < ground) position.y = ground
    },
    // Pulls the third-person camera in front of generated region buildings.
    cameraReach(ray, reach) {
      if (!map || !walls.size) return reach
      const ox = ray.origin.x
      const oy = ray.origin.y
      const oz = ray.origin.z
      const dx = ray.direction.x
      const dy = ray.direction.y
      const dz = ray.direction.z
      const cx = Math.floor(ox / CELL)
      const cz = Math.floor(oz / CELL)
      const span = Math.min(3, Math.max(1, Math.ceil((reach + 2) / CELL)))
      const seen = new Set()
      let best = reach
      for (let j = cz - span; j <= cz + span; j++) {
        for (let i = cx - span; i <= cx + span; i++) {
          for (const wall of walls.get(`${i},${j}`) ?? []) {
            if (seen.has(wall)) continue
            seen.add(wall)
            const sx = wall.bx - wall.ax
            const sz = wall.bz - wall.az
            const denom = dx * sz - dz * sx
            if (Math.abs(denom) <= 1e-6) continue
            const qx = wall.ax - ox
            const qz = wall.az - oz
            const t = (qx * sz - qz * sx) / denom
            if (t <= 0.2 || t >= best + 0.4) continue
            const u = (qx * dz - qz * dx) / denom
            if (u < 0 || u > 1) continue
            const y = oy + dy * t
            if (y >= wall.base && y <= wall.top + 0.35) {
              best = Math.min(best, Math.max(1.2, t - 0.4))
            }
          }
        }
      }
      return best
    },
    // Keeps a walker out of the buildings and off the monorail's piers (`pushOut` is the scene's).
    pushOut(x, z, pushOut, y) {
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
      // The stations' walls and columns, those at the walker's height only.
      if (Number.isFinite(y)) {
        const { cells } = stationSolids()
        const met = new Set()
        for (let j = cz - 1; j <= cz + 1; j++) {
          for (let i = cx - 1; i <= cx + 1; i++) {
            const cell = cells.get(`${i},${j}`)
            if (!cell) continue
            for (const wall of cell.walls) {
              if (met.has(wall) || !stopsAt(wall, y)) continue
              met.add(wall)
              segments.push(wall)
            }
            for (const box of cell.boxes) {
              if (met.has(box) || !stopsAt(box, y)) continue
              met.add(box)
              boxes.push(box)
            }
          }
        }
      }
      return segments.length || boxes.length ? pushOut({ segments, boxes }, x, z) : [x, z]
    },
    // How far out the camera may be drawn: a region is seen from much higher up.
    reach: () => (map ? regionOverview(SIZE, 0.35).distance : 260),
    dispose() {
      leave()
      transit.dispose()
      world.remove(group)
      environment.dispose()
    },
  }
}
