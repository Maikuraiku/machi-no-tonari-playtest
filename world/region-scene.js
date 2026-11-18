// The region's land in the 3D view, from a window cut by public/region/window.js: the ground
// over its real heights, coloured by what covers it; the main roads (carriageway and pavements)
// and the local streets laid on it; the buildings raised from their real footprints to their
// storeys, with gabled roofs on houses and flat roofs on blocks; and the district borders.
// Scene metres are region metres minus `origin`; heights are region heights minus `datum`.
import * as THREE from 'three'
import { Batch, disposeGroup, material } from './kit.js?v=online-1794980046418'

// Land use as numbered by public/region/develop.js (USE).
const USE = { WATER: 0, RIVERBED: 1, FOREST: 2, GREEN: 3, FIELD: 4, PADDY: 5, PARK: 6, LOW: 7, DENSE: 8, MID: 9, HIGH: 10, COMMERCIAL: 11, INDUSTRIAL: 12, PUBLIC: 13 }
const ROAD = { COLLECTOR: 2, ARTERIAL: 3, TRUNK: 4 }

// What the ground looks like under each use: gardens and paving among houses, fields, woods.
const GROUND = {
  [USE.WATER]: '#5f8fa8', [USE.RIVERBED]: '#93ad6c', [USE.FOREST]: '#4f6b3a', [USE.GREEN]: '#6d8a4a',
  [USE.FIELD]: '#a08a5c', [USE.PADDY]: '#8fa25a', [USE.PARK]: '#79984f', [USE.LOW]: '#8f9a72',
  [USE.DENSE]: '#9a9584', [USE.MID]: '#9a9a8c', [USE.HIGH]: '#a2a29a', [USE.COMMERCIAL]: '#a6a39b',
  [USE.INDUSTRIAL]: '#9e9c94', [USE.PUBLIC]: '#b39f7c',
}
const GROUND_LINEAR = []
for (const [use, colour] of Object.entries(GROUND)) GROUND_LINEAR[use] = new THREE.Color(colour)

// Storey heights (m) and the materials of walls and roofs by use.
const STOREY = { [USE.LOW]: 2.9, [USE.DENSE]: 2.8, [USE.MID]: 2.95, [USE.HIGH]: 2.95, [USE.COMMERCIAL]: 3.4, [USE.INDUSTRIAL]: 5.5, [USE.PUBLIC]: 3.8 }
const WALLS = {
  [USE.LOW]: [['siding', '#f1ece2'], ['mortar', '#e9e2d3'], ['siding', '#d9d5cc'], ['mortar', '#cfc5b3'], ['siding', '#b8b2a6']],
  [USE.DENSE]: [['mortar', '#ddd5c4'], ['planks', '#8a7258'], ['mortar', '#c9c0ae'], ['siding', '#cfcac0']],
  [USE.MID]: [['concrete', '#e3e0d8'], ['tile', '#d8d2c6'], ['mortar', '#ece7dc']],
  [USE.HIGH]: [['concrete', '#dcdad4'], ['tile', '#cfccc4']],
  [USE.COMMERCIAL]: [['tile', '#d6d0c8'], ['concrete', '#cfcbc4'], ['mortar', '#e2dbd0']],
  [USE.INDUSTRIAL]: [['metalPanel', '#b9c0c6'], ['metalPanel', '#a7b0b5']],
  [USE.PUBLIC]: [['concrete', '#eeece6']],
}
const ROOFS = [['kawara', '#6e7378'], ['kawara', '#4f565c'], ['slate', '#6a5446'], ['slate', '#4d5a66'], ['roofMetal', '#7c6a5b']]

const clamp = (value, low, high) => Math.min(high, Math.max(low, value))
// One material for every window's ground (disposeGroup frees geometry only).
let groundMaterial = null

export function createRegionScene() {
  const group = new THREE.Group()
  group.name = 'region'
  let shown = null

  function heightIn(win, rx, rz) {
    const gx = clamp((rx - win.box.x0) / win.step, 0, win.width - 1)
    const gz = clamp((rz - win.box.z0) / win.step, 0, win.depth - 1)
    const ix = Math.min(win.width - 2, Math.floor(gx))
    const iz = Math.min(win.depth - 2, Math.floor(gz))
    const tx = gx - ix
    const tz = gz - iz
    const h = win.heights
    const at = ix + iz * win.width
    const top = h[at] + (h[at + 1] - h[at]) * tx
    const bottom = h[at + win.width] + (h[at + win.width + 1] - h[at + win.width]) * tx
    return top + (bottom - top) * tz
  }

  // The triangles of the ground's grid, leaving out the cells that lie wholly inside `hole`
  // (region metres), where a finer window covers the ground.
  function groundIndex(win, hole) {
    const { width, depth, step } = win
    const index = new Uint32Array((width - 1) * (depth - 1) * 6)
    let n = 0
    for (let j = 0; j < depth - 1; j++) {
      const z0 = win.box.z0 + j * step
      const covered = hole && z0 >= hole.z0 && z0 + step <= hole.z1
      for (let i = 0; i < width - 1; i++) {
        if (covered) {
          const x0 = win.box.x0 + i * step
          if (x0 >= hole.x0 && x0 + step <= hole.x1) continue
        }
        const a = i + j * width
        const b = a + 1
        const c = a + width
        const d = c + 1
        index[n++] = a
        index[n++] = c
        index[n++] = b
        index[n++] = b
        index[n++] = c
        index[n++] = d
      }
    }
    return new THREE.BufferAttribute(index.subarray(0, n), 1)
  }

  // The ground: one mesh over the window's grid.
  function buildGround(win, origin, datum) {
    const { width, depth, step, heights, use, water } = win
    const positions = new Float32Array(width * depth * 3)
    const colours = new Float32Array(width * depth * 3)
    for (let j = 0; j < depth; j++) {
      for (let i = 0; i < width; i++) {
        const k = i + j * width
        positions[k * 3] = win.box.x0 + i * step - origin[0]
        positions[k * 3 + 1] = heights[k] - datum
        positions[k * 3 + 2] = win.box.z0 + j * step - origin[1]
        const colour = water[k] ? GROUND_LINEAR[USE.WATER] : GROUND_LINEAR[use[k]] ?? GROUND_LINEAR[USE.LOW]
        colours[k * 3] = colour.r
        colours[k * 3 + 1] = colour.g
        colours[k * 3 + 2] = colour.b
      }
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colours, 3))
    geometry.setIndex(groundIndex(win, null))
    geometry.computeVertexNormals()
    groundMaterial ??= new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 })
    const mesh = new THREE.Mesh(geometry, groundMaterial)
    mesh.receiveShadow = true
    mesh.name = 'region-ground'
    return mesh
  }

  // A strip `width` wide along a polyline, `lift` above the ground, between `side0` and `side1`
  // (fractions of the half width, -1 to 1) so pavements can be laid beside a carriageway.
  function ribbon(batch, paint, win, points, width, origin, datum, { lift = 0.05, side0 = -1, side1 = 1, step = 6 } = {}) {
    const { x0, z0, x1, z1 } = win.box
    const pad = 20
    const along = []
    for (let k = 0; k < points.length; k += 2) along.push([points[k], points[k + 1]])
    // Densify so the strip follows the ground between the polyline's points.
    const dense = [along[0]]
    for (let k = 1; k < along.length; k++) {
      const [ax, az] = along[k - 1]
      const [bx, bz] = along[k]
      const pieces = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / step))
      for (let p = 1; p <= pieces; p++) dense.push([ax + (bx - ax) * p / pieces, az + (bz - az) * p / pieces])
    }
    const half = width / 2
    const edge = (k) => {
      const [px, pz] = dense[Math.max(0, k - 1)]
      const [qx, qz] = dense[Math.min(dense.length - 1, k + 1)]
      const length = Math.hypot(qx - px, qz - pz) || 1
      const nx = -(qz - pz) / length
      const nz = (qx - px) / length
      const [x, z] = dense[k]
      const make = (f) => {
        const rx = x + nx * half * f
        const rz = z + nz * half * f
        return new THREE.Vector3(rx - origin[0], heightIn(win, rx, rz) - datum + lift, rz - origin[1])
      }
      return [make(side0), make(side1)]
    }
    let previous = null
    for (let k = 0; k < dense.length; k++) {
      const [x, z] = dense[k]
      const inside = x > x0 - pad && x < x1 + pad && z > z0 - pad && z < z1 + pad
      const current = inside ? edge(k) : null
      if (previous && current) batch.face(paint, [previous[0], current[0], current[1], previous[1]])
      previous = current
    }
  }

  function buildRoads(win, origin, datum) {
    const batch = new Batch()
    const asphalt = material('asphalt', '#ffffff')
    const pavement = material('sidewalk', '#ffffff')
    const street = material('asphalt', '#d4d4d0')
    for (const road of win.roads) {
      // Pavements of 3.5 m beside an arterial or trunk road, 2.5 m beside a collector.
      const walk = road.kind >= ROAD.ARTERIAL ? 3.5 : 2.5
      const share = clamp(1 - (2 * walk) / road.width, 0.2, 1)
      ribbon(batch, asphalt, win, road.points, road.width, origin, datum, { lift: 0.08, side0: -share, side1: share })
      ribbon(batch, pavement, win, road.points, road.width, origin, datum, { lift: 0.18, side0: -1, side1: -share })
      ribbon(batch, pavement, win, road.points, road.width, origin, datum, { lift: 0.18, side0: share, side1: 1 })
    }
    for (const lane of win.streets) ribbon(batch, street, win, lane.points, lane.width, origin, datum, { lift: 0.06, step: 4 })
    const node = new THREE.Group()
    node.name = 'region-roads'
    batch.build(node, { cast: false, receive: true, where: 'out' })
    return node
  }

  function buildBuildings(win, origin, datum) {
    const batch = new Batch()
    const solids = []
    for (const building of win.buildings) {
      const c = building.corners
      const corners = [[c[0], c[1]], [c[2], c[3]], [c[4], c[5]], [c[6], c[7]]]
      let low = Infinity
      let high = -Infinity
      for (const [x, z] of corners) {
        const h = heightIn(win, x, z) - datum
        low = Math.min(low, h)
        high = Math.max(high, h)
      }
      const storey = STOREY[building.use] ?? 2.9
      const base = low - 0.3
      const top = high + 0.4 + building.floors * storey
      const wallChoices = WALLS[building.use] ?? WALLS[USE.LOW]
      const [wallName, wallTint] = wallChoices[Math.floor(building.tone * wallChoices.length) % wallChoices.length]
      const wall = material(wallName, wallTint)
      const ring = corners.map(([x, z]) => [x - origin[0], z - origin[1]])
      // Walls, each facing out of the footprint.
      const cx = (ring[0][0] + ring[1][0] + ring[2][0] + ring[3][0]) / 4
      const cz = (ring[0][1] + ring[1][1] + ring[2][1] + ring[3][1]) / 4
      for (let k = 0; k < 4; k++) {
        const [ax, az] = ring[k]
        const [bx, bz] = ring[(k + 1) % 4]
        const facing = new THREE.Vector3((ax + bx) / 2 - cx, 0, (az + bz) / 2 - cz)
        batch.quad(wall, new THREE.Vector3(ax, base, az), new THREE.Vector3(bx, base, bz), new THREE.Vector3(bx, top, bz), new THREE.Vector3(ax, top, az), facing)
      }
      const house = (building.use === USE.LOW || building.use === USE.DENSE) && building.floors <= 3
      if (house) {
        // A gabled roof: the ridge runs along the longer side, eaves 0.45 m out.
        const [roofName, roofTint] = ROOFS[Math.floor(building.tone * 7.3 * ROOFS.length) % ROOFS.length]
        const roof = material(roofName, roofTint)
        const long = Math.hypot(ring[1][0] - ring[0][0], ring[1][1] - ring[0][1]) >= Math.hypot(ring[3][0] - ring[0][0], ring[3][1] - ring[0][1])
        const [p, q, r, s] = long ? ring : [ring[1], ring[2], ring[3], ring[0]]
        const grow = (point, toward, by) => {
          const dx = point[0] - toward[0]
          const dz = point[1] - toward[1]
          const l = Math.hypot(dx, dz) || 1
          return [point[0] + dx / l * by, point[1] + dz / l * by]
        }
        const centre = [cx, cz]
        const [pe, qe, re, se] = [p, q, r, s].map((point) => grow(point, centre, 0.45))
        const span = Math.hypot(s[0] - p[0], s[1] - p[1])
        const rise = Math.min(2.6, span * 0.28)
        const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
        const ridgeA = mid(pe, se)
        const ridgeB = mid(qe, re)
        const eave = top - 0.15
        const v = (point, y) => new THREE.Vector3(point[0], y, point[1])
        batch.quad(roof, v(pe, eave), v(qe, eave), v(ridgeB, top + rise), v(ridgeA, top + rise), new THREE.Vector3(pe[0] - se[0], 1, pe[1] - se[1]))
        batch.quad(roof, v(se, eave), v(ridgeA, top + rise), v(ridgeB, top + rise), v(re, eave), new THREE.Vector3(se[0] - pe[0], 1, se[1] - pe[1]))
        // The gable ends.
        batch.face(wall, [v(p, top), v(s, top), v(mid(p, s), top + rise)])
        batch.face(wall, [v(r, top), v(q, top), v(mid(q, r), top + rise)])
        batch.face(wall, [v(s, top), v(p, top), v(mid(p, s), top + rise)])
        batch.face(wall, [v(q, top), v(r, top), v(mid(q, r), top + rise)])
      } else {
        // A flat roof with a low parapet.
        batch.face(material('concrete', '#c9c7c0'), ring.map(([x, z]) => new THREE.Vector3(x, top, z)).reverse())
        batch.face(material('concrete', '#c9c7c0'), ring.map(([x, z]) => new THREE.Vector3(x, top, z)))
      }
      solids.push({ ring, base, top })
    }
    const node = new THREE.Group()
    node.name = 'region-buildings'
    batch.build(node, { cast: true, receive: true, where: 'out' })
    return { node, solids }
  }

  function buildBorders(win, origin, datum) {
    const batch = new Batch()
    const town = material('#c8553d')
    const block = material('#e8e2d0')
    for (const [segments, paint, width, dash] of [[win.borders.block, block, 0.35, 4], [win.borders.town, town, 0.7, 0]]) {
      for (let k = 0; k < segments.length; k += 4) {
        const ax = segments[k]
        const az = segments[k + 1]
        const bx = segments[k + 2]
        const bz = segments[k + 3]
        const length = Math.hypot(bx - ax, bz - az)
        const pieces = Math.max(1, Math.ceil(length / 4))
        for (let p = 0; p < pieces; p++) {
          if (dash && p % 2) continue
          const f0 = p / pieces
          const f1 = (p + 1) / pieces
          ribbon(batch, paint, win, [ax + (bx - ax) * f0, az + (bz - az) * f0, ax + (bx - ax) * f1, az + (bz - az) * f1], width, origin, datum, { lift: 0.25, step: 4 })
        }
      }
    }
    const node = new THREE.Group()
    node.name = 'region-borders'
    batch.build(node, { cast: false, receive: false, where: 'out' })
    return node
  }

  // Shows a window. Far off, `roads` and `borders` can be left out (and the window holds no
  // buildings): the ground alone, under the finer window near the viewer.
  function show(win, { origin = [0, 0], datum = 0, borders = true, roads = true } = {}) {
    clear()
    const ground = buildGround(win, origin, datum)
    group.add(ground)
    if (roads) group.add(buildRoads(win, origin, datum))
    const { node: buildings, solids } = buildBuildings(win, origin, datum)
    group.add(buildings)
    if (borders) group.add(buildBorders(win, origin, datum))
    shown = { win, origin, datum, solids, ground }
  }

  // Leaves out the ground under `hole` (region metres; null for none).
  function setHole(hole) {
    if (!shown) return
    shown.ground.geometry.setIndex(groundIndex(shown.win, hole))
  }

  function clear() {
    for (const child of [...group.children]) {
      group.remove(child)
      disposeGroup(child)
    }
    shown = null
  }

  // The ground's height under a scene point, or null outside the window.
  function heightAt(x, z) {
    if (!shown) return null
    const rx = x + shown.origin[0]
    const rz = z + shown.origin[1]
    const { x0, z0, x1, z1 } = shown.win.box
    if (rx < x0 || rz < z0 || rx > x1 || rz > z1) return null
    return heightIn(shown.win, rx, rz) - shown.datum
  }

  return {
    group, show, clear, heightAt, setHole,
    get solids() { return shown?.solids ?? [] },
    get window() { return shown?.win ?? null },
  }
}
