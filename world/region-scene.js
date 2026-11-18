// The region's land in the 3D view, from a window cut by public/region/window.js: the ground
// over its real heights, coloured by what covers it; the main roads (carriageway and pavements)
// and the local streets laid on it; the buildings raised from their real footprints to their
// storeys, with gabled roofs on houses and flat roofs on blocks; and the district borders.
// Scene metres are region metres minus `origin`; heights are region heights minus `datum`.
import * as THREE from 'three'
import { Batch, disposeGroup, material } from './kit.js'

// Land use as numbered by public/region/develop.js (USE).
const USE = { WATER: 0, RIVERBED: 1, FOREST: 2, GREEN: 3, FIELD: 4, PADDY: 5, PARK: 6, LOW: 7, DENSE: 8, MID: 9, HIGH: 10, COMMERCIAL: 11, INDUSTRIAL: 12, PUBLIC: 13 }
const ROAD = { COLLECTOR: 2, ARTERIAL: 3, TRUNK: 4 }

// What the ground looks like under each use: gardens and paving among houses, fields, woods.
const GROUND = {
  [USE.WATER]: '#5f8fa8', [USE.RIVERBED]: '#93ad6c', [USE.FOREST]: '#4f6b3a', [USE.GREEN]: '#6d8a4a',
  [USE.FIELD]: '#a08a5c', [USE.PADDY]: '#8fa25a', [USE.PARK]: '#79984f', [USE.LOW]: '#788f59',
  [USE.DENSE]: '#859164', [USE.MID]: '#86906a', [USE.HIGH]: '#8e9278', [USE.COMMERCIAL]: '#989482',
  [USE.INDUSTRIAL]: '#929082', [USE.PUBLIC]: '#a6986e',
}
const GROUND_LINEAR = []
for (const [use, colour] of Object.entries(GROUND)) GROUND_LINEAR[use] = new THREE.Color(colour)

// Storey heights (m) and the materials of walls and roofs by use.
const STOREY = { [USE.LOW]: 2.9, [USE.DENSE]: 2.8, [USE.MID]: 2.95, [USE.HIGH]: 2.95, [USE.COMMERCIAL]: 3.4, [USE.INDUSTRIAL]: 5.5, [USE.PUBLIC]: 3.8 }
const WALLS = {
  [USE.LOW]: [['siding', '#f1ece2'], ['mortar', '#e9e2d3'], ['siding', '#d9d5cc'], ['mortar', '#cfc5b3'], ['siding', '#b8b2a6'], ['brickWhite', '#eeeae2']],
  [USE.DENSE]: [['mortar', '#ddd5c4'], ['planks', '#8a7258'], ['mortar', '#c9c0ae'], ['siding', '#cfcac0'], ['stucco', '#e4ddd0']],
  [USE.MID]: [['concrete', '#e3e0d8'], ['tile', '#d8d2c6'], ['mortar', '#ece7dc'], ['brick', '#c78a72']],
  [USE.HIGH]: [['concrete', '#dcdad4'], ['tile', '#cfccc4'], ['brickWhite', '#e6e3dc']],
  [USE.COMMERCIAL]: [['tile', '#d6d0c8'], ['concrete', '#cfcbc4'], ['mortar', '#e2dbd0'], ['brick', '#b8765c']],
  [USE.INDUSTRIAL]: [['metalPanel', '#b9c0c6'], ['metalPanel', '#a7b0b5'], ['concrete', '#c4c2ba']],
  [USE.PUBLIC]: [['concrete', '#eeece6'], ['tile', '#e5e1d6']],
}
const ROOFS = [['kawara', '#5c636a'], ['kawara', '#474e54'], ['slate', '#634f42'], ['slate', '#495662'], ['roofMetal', '#746354'], ['roofMetal', '#56646e']]
const AWNINGS = ['#9c3d32', '#2c5e4f', '#355678', '#b86b28', '#52483e']

const clamp = (value, low, high) => Math.min(high, Math.max(low, value))
const frameBudget = 5
const yieldToPage = () => new Promise((resolve) => setTimeout(resolve, 0))
// One material for every window's ground (disposeGroup frees geometry only).
let groundMaterial = null
let coarseMaterial = null

export function createRegionScene() {
  const group = new THREE.Group()
  group.name = 'region'
  let shown = null
  let revision = 0

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
  function* buildGround(win, origin, datum, coarse) {
    const { width, depth, step, heights, use, water } = win
    const positions = new Float32Array(width * depth * 3)
    const colours = new Float32Array(width * depth * 3)
    const normals = coarse ? null : new Float32Array(positions.length)
    let low = Infinity
    let high = -Infinity
    for (let j = 0; j < depth; j++) {
      const north = Math.max(0, j - 1)
      const south = Math.min(depth - 1, j + 1)
      for (let i = 0; i < width; i++) {
        const k = i + j * width
        positions[k * 3] = win.box.x0 + i * step - origin[0]
        const y = heights[k] - datum
        positions[k * 3 + 1] = y
        positions[k * 3 + 2] = win.box.z0 + j * step - origin[1]
        low = Math.min(low, y)
        high = Math.max(high, y)
        const colour = water[k] ? GROUND_LINEAR[USE.WATER] : GROUND_LINEAR[use[k]] ?? GROUND_LINEAR[USE.LOW]
        // Subtle spatial variation and slope darkening so hillsides, fields and parks have depth.
        const wx = win.box.x0 + i * step
        const wz = win.box.z0 + j * step
        const grain = coarse ? 1 : 0.96 + 0.08 * Math.sin(wx * 0.07 + wz * 0.05) * Math.cos(wx * 0.04 - wz * 0.08)
        colours[k * 3] = Math.min(1, colour.r * grain)
        colours[k * 3 + 1] = Math.min(1, colour.g * grain)
        colours[k * 3 + 2] = Math.min(1, colour.b * grain)
        if (normals) {
          const west = Math.max(0, i - 1)
          const east = Math.min(width - 1, i + 1)
          const nx = (heights[west + j * width] - heights[east + j * width]) / ((east - west) * step)
          const nz = (heights[i + north * width] - heights[i + south * width]) / ((south - north) * step)
          const length = Math.sqrt(nx * nx + 1 + nz * nz)
          normals[k * 3] = nx / length
          normals[k * 3 + 1] = 1 / length
          normals[k * 3 + 2] = nz / length
        }
      }
      if (j % 8 === 7) yield
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colours, 3))
    if (normals) geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
    geometry.setIndex(groundIndex(win, null))
    const halfX = (width - 1) * step / 2
    const halfZ = (depth - 1) * step / 2
    const center = new THREE.Vector3(win.box.x0 - origin[0] + halfX, (low + high) / 2, win.box.z0 - origin[1] + halfZ)
    geometry.boundingSphere = new THREE.Sphere(center, Math.hypot(halfX, (high - low) / 2, halfZ))
    groundMaterial ??= new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 })
    coarseMaterial ??= new THREE.MeshBasicMaterial({ vertexColors: true })
    const mesh = new THREE.Mesh(geometry, coarse ? coarseMaterial : groundMaterial)
    mesh.receiveShadow = !coarse
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

  function* buildRoads(win, origin, datum) {
    const batch = new Batch()
    const asphalt = material('asphalt', '#ffffff')
    const pavement = material('sidewalk', '#e2e0d8')
    const street = material('asphalt', '#c4c4be')
    const gutter = material('concrete', '#d0cec6')
    const linePaint = material('#e6e3d6', '#ffffff', { roughness: 0.7 })
    const fineStep = Math.min(2, win.step || 2)
    for (const road of win.roads) {
      // Pavements of 3.5 m beside an arterial or trunk road, 2.5 m beside a collector.
      const walk = road.kind >= ROAD.ARTERIAL ? 3.5 : 2.5
      const share = clamp(1 - (2 * walk) / road.width, 0.2, 1)
      const mark = clamp(0.18 / road.width, 0.01, 0.06)
      ribbon(batch, asphalt, win, road.points, road.width, origin, datum, { lift: 0.12, side0: -share, side1: share, step: fineStep })
      ribbon(batch, pavement, win, road.points, road.width, origin, datum, { lift: 0.22, side0: -1, side1: -share, step: fineStep })
      ribbon(batch, pavement, win, road.points, road.width, origin, datum, { lift: 0.22, side0: share, side1: 1, step: fineStep })
      ribbon(batch, linePaint, win, road.points, road.width, origin, datum, { lift: 0.14, side0: -mark, side1: mark, step: fineStep })
      yield
    }
    for (const lane of win.streets) {
      const edge = clamp(1 - (2 * 0.35) / Math.max(lane.width, 2.4), 0.65, 0.9)
      ribbon(batch, street, win, lane.points, lane.width, origin, datum, { lift: 0.09, side0: -edge, side1: edge, step: fineStep })
      ribbon(batch, gutter, win, lane.points, lane.width, origin, datum, { lift: 0.1, side0: -1, side1: -edge, step: fineStep })
      ribbon(batch, gutter, win, lane.points, lane.width, origin, datum, { lift: 0.1, side0: edge, side1: 1, step: fineStep })
      yield
    }
    const node = new THREE.Group()
    node.name = 'region-roads'
    batch.build(node, { cast: false, receive: true, where: 'out' })
    return node
  }

  // Main roads remain legible on a region-wide view without extruding distant pavements.
  function* buildOverviewRoads(win, origin, datum) {
    const positions = []
    const colours = []
    const colour = new THREE.Color()
    for (const road of win.roads) {
      colour.set(road.kind >= ROAD.ARTERIAL ? '#e9d8ad' : '#dddcd4')
      for (let k = 2; k < road.points.length; k += 2) {
        for (const at of [k - 2, k]) {
          const x = road.points[at]
          const z = road.points[at + 1]
          positions.push(x - origin[0], heightIn(win, x, z) - datum + 4, z - origin[1])
          colours.push(colour.r, colour.g, colour.b)
        }
      }
      yield
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colours, 3))
    const paint = new THREE.LineBasicMaterial({ vertexColors: true })
    paint.userData.ownMaterial = true
    const roads = new THREE.LineSegments(geometry, paint)
    roads.userData.ownMaterial = true
    roads.name = 'region-overview-roads'
    return roads
  }

  function* buildBuildings(win, origin, datum) {
    const batch = new Batch()
    const solids = []
    const plinthMat = material('concrete', '#b9b6ae')
    const roofConcrete = material('concrete', '#c6c3bc')
    const copingMat = material('concrete', '#dfdcd4')
    const glassDark = material('#324554', '#ffffff', { roughness: 0.16, metalness: 0.72 })
    const glassShop = material('#4a5f6d', '#ffffff', { roughness: 0.14, metalness: 0.55 })
    const frameDark = material('#3d4247', '#ffffff', { roughness: 0.45, metalness: 0.5 })
    const balconyMat = material('concrete', '#dcd9d0')
    const woodDoor = material('wood', '#7d593d')
    const v = (x, y, z) => new THREE.Vector3(x, y, z)

    for (const building of win.buildings) {
      yield
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
      const base = low - 0.35
      const plinthTop = high + 0.38
      const top = plinthTop + building.floors * storey
      const tone = building.tone ?? 0.5
      const designBits = Math.floor(tone * 4096)
      const wallChoices = WALLS[building.use] ?? WALLS[USE.LOW]
      const [wallName, wallTint] = wallChoices[Math.floor(tone * wallChoices.length) % wallChoices.length]
      const wall = material(wallName, wallTint)
      const ring = corners.map(([x, z]) => [x - origin[0], z - origin[1]])
      const cx = (ring[0][0] + ring[1][0] + ring[2][0] + ring[3][0]) / 4
      const cz = (ring[0][1] + ring[1][1] + ring[2][1] + ring[3][1]) / 4
      const house = (building.use === USE.LOW || building.use === USE.DENSE) && building.floors <= 3

      // Concrete foundation plinth (基礎・ひな壇の土台) from the lowest corner up to plinthTop,
      // and the main building walls above it.
      for (let k = 0; k < 4; k++) {
        const [ax, az] = ring[k]
        const [bx, bz] = ring[(k + 1) % 4]
        const edgeDx = bx - ax
        const edgeDz = bz - az
        const edgeLen = Math.hypot(edgeDx, edgeDz) || 1
        const ux = edgeDx / edgeLen
        const uz = edgeDz / edgeLen
        let nx = (ax + bx) / 2 - cx
        let nz = (az + bz) / 2 - cz
        const nLen = Math.hypot(nx, nz) || 1
        nx /= nLen
        nz /= nLen
        const facing = v(nx, 0, nz)

        batch.quad(plinthMat, v(ax, base, az), v(bx, base, bz), v(bx, plinthTop, bz), v(ax, plinthTop, az), facing)
        batch.quad(wall, v(ax, plinthTop, az), v(bx, plinthTop, bz), v(bx, top, bz), v(ax, top, az), facing)

        // Architectural façade details: windows, doors, shopfronts, and balconies.
        const outX = nx * 0.045
        const outZ = nz * 0.045
        const panelQuad = (mat, s0, s1, y0, y1, push = 0.045) => {
          const px = nx * push
          const pz = nz * push
          batch.quad(mat,
            v(ax + ux * s0 + px, y0, az + uz * s0 + pz),
            v(ax + ux * s1 + px, y0, az + uz * s1 + pz),
            v(ax + ux * s1 + px, y1, az + uz * s1 + pz),
            v(ax + ux * s0 + px, y1, az + uz * s0 + pz),
            facing)
        }

        // Edge 0 is the street frontage in streets.js; edge 2 is the back/south side.
        if (house) {
          if (k === 0 && edgeLen >= 4.2) {
            // Front entrance door and ground-floor window.
            const doorS = Math.min(edgeLen - 1.4, Math.max(0.7, edgeLen * (0.28 + (designBits & 3) * 0.1)))
            panelQuad(woodDoor, doorS, doorS + 0.9, plinthTop, plinthTop + 2.05, 0.05)
            // Small porch canopy above the entrance door.
            panelQuad(frameDark, doorS - 0.15, doorS + 1.05, plinthTop + 2.08, plinthTop + 2.2, 0.18)
            if (edgeLen >= 6.2) {
              const winS = doorS > edgeLen * 0.45 ? 0.9 : Math.min(edgeLen - 2.3, doorS + 1.6)
              panelQuad(glassDark, winS, winS + 1.4, plinthTop + 0.85, plinthTop + 2.0, 0.04)
            }
          }
          // Upper-floor windows along front and back walls.
          if ((k === 0 || k === 2) && edgeLen >= 4.0) {
            const bays = Math.max(1, Math.min(3, Math.floor(edgeLen / 3.2)))
            const baySpan = edgeLen / bays
            for (let f = k === 0 ? 1 : 0; f < building.floors; f++) {
              const y0 = plinthTop + f * storey + 0.85
              const y1 = y0 + 1.15
              for (let b = 0; b < bays; b++) {
                const mid = (b + 0.5) * baySpan
                panelQuad(glassDark, mid - 0.65, mid + 0.65, y0, y1, 0.04)
              }
            }
            // Second-floor balcony on the sunny/front side of detached houses.
            if (k === (designBits & 1 ? 0 : 2) && building.floors >= 2 && edgeLen >= 5.2 && building.use === USE.LOW) {
              const b0 = edgeLen * 0.22
              const b1 = edgeLen * 0.78
              const by = plinthTop + storey
              panelQuad(balconyMat, b0, b1, by - 0.05, by + 0.95, 0.28)
            }
          }
        } else if (building.use === USE.COMMERCIAL) {
          // Ground-floor glass storefront and coloured awning on the street frontage.
          if ((k === 0 || (k === 1 && (designBits & 3) === 0)) && edgeLen >= 4.5) {
            panelQuad(glassShop, 0.6, edgeLen - 0.6, plinthTop + 0.1, plinthTop + storey - 0.55, 0.04)
            const awningPaint = material(AWNINGS[(designBits >> 2) % AWNINGS.length], '#ffffff', { roughness: 0.65 })
            panelQuad(awningPaint, 0.4, edgeLen - 0.4, plinthTop + storey - 0.55, plinthTop + storey - 0.15, 0.22)
          }
          // Ribbon windows on upper floors.
          if (edgeLen >= 4.5) {
            for (let f = 1; f < building.floors; f++) {
              const y0 = plinthTop + f * storey + 0.75
              const y1 = plinthTop + (f + 1) * storey - 0.5
              panelQuad(glassDark, 0.7, edgeLen - 0.7, y0, y1, 0.04)
            }
          }
        } else if (building.use === USE.MID || building.use === USE.HIGH) {
          // Residential blocks (danchi / mansions): continuous horizontal balcony bands on the
          // longer façades, corridor/window bands on the opposite side.
          if (edgeLen >= 8) {
            const isLongSide = k === 0 || k === 2
            for (let f = 0; f < building.floors; f++) {
              const fy = plinthTop + f * storey
              if (isLongSide) {
                panelQuad(glassDark, 0.9, edgeLen - 0.9, fy + 0.45, fy + 2.15, 0.04)
                if (k === 0 || building.use === USE.HIGH) {
                  panelQuad(balconyMat, 0.7, edgeLen - 0.7, fy + 0.05, fy + 1.05, 0.24)
                }
              }
            }
          }
        } else if (building.use === USE.PUBLIC && edgeLen >= 10) {
          // School classroom window bands and ground spandrels.
          for (let f = 0; f < building.floors; f++) {
            const fy = plinthTop + f * storey
            panelQuad(glassDark, 1.2, edgeLen - 1.2, fy + 0.9, fy + storey - 0.45, 0.04)
          }
        } else if (building.use === USE.INDUSTRIAL && edgeLen >= 8) {
          // Clerestory windows and loading bay roller shutter on the front.
          panelQuad(glassDark, 1.2, edgeLen - 1.2, top - 1.6, top - 0.55, 0.04)
          if (k === 0) panelQuad(frameDark, edgeLen * 0.35, edgeLen * 0.65, plinthTop, plinthTop + 3.6, 0.05)
        }
      }

      if (house) {
        const [roofName, roofTint] = ROOFS[Math.floor(tone * 7.3 * ROOFS.length) % ROOFS.length]
        const roof = material(roofName, roofTint)
        const len01 = Math.hypot(ring[1][0] - ring[0][0], ring[1][1] - ring[0][1])
        const len03 = Math.hypot(ring[3][0] - ring[0][0], ring[3][1] - ring[0][1])
        const long = len01 >= len03
        const [p, q, r, s] = long ? ring : [ring[1], ring[2], ring[3], ring[0]]
        const grow = (point, toward, by) => {
          const dx = point[0] - toward[0]
          const dz = point[1] - toward[1]
          const l = Math.hypot(dx, dz) || 1
          return [point[0] + dx / l * by, point[1] + dz / l * by]
        }
        const centre = [cx, cz]
        const [pe, qe, re, se] = [p, q, r, s].map((point) => grow(point, centre, 0.48))
        const span = Math.hypot(s[0] - p[0], s[1] - p[1])
        const rise = Math.min(2.6, span * 0.28)
        const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
        const eave = top - 0.14
        const pt = (point, y) => new THREE.Vector3(point[0], y, point[1])
        const roofStyle = designBits % 5 // 0,1: gable (切妻), 2,3: hip (寄棟), 4: shed (片流れ)

        if (roofStyle === 2 || roofStyle === 3) {
          // Hip roof (寄棟屋根): ridge is inset from both ends, four sloping faces meet at it.
          const ridgeA0 = mid(pe, se)
          const ridgeB0 = mid(qe, re)
          const rdx = ridgeB0[0] - ridgeA0[0]
          const rdz = ridgeB0[1] - ridgeA0[1]
          const rLen = Math.hypot(rdx, rdz) || 1
          const inset = Math.min(rLen * 0.35, span * 0.45)
          const ridgeA = [ridgeA0[0] + rdx / rLen * inset, ridgeA0[1] + rdz / rLen * inset]
          const ridgeB = [ridgeB0[0] - rdx / rLen * inset, ridgeB0[1] - rdz / rLen * inset]
          batch.quad(roof, pt(pe, eave), pt(qe, eave), pt(ridgeB, top + rise), pt(ridgeA, top + rise), v(pe[0] - se[0], 1, pe[1] - se[1]))
          batch.quad(roof, pt(se, eave), pt(ridgeA, top + rise), pt(ridgeB, top + rise), pt(re, eave), v(se[0] - pe[0], 1, se[1] - pe[1]))
          batch.face(roof, [pt(se, eave), pt(pe, eave), pt(ridgeA, top + rise)])
          batch.face(roof, [pt(pe, eave), pt(se, eave), pt(ridgeA, top + rise)])
          batch.face(roof, [pt(qe, eave), pt(re, eave), pt(ridgeB, top + rise)])
          batch.face(roof, [pt(re, eave), pt(qe, eave), pt(ridgeB, top + rise)])
        } else {
          // Gable roof (切妻屋根): ridge runs full length with triangular gable end walls.
          const ridgeA = mid(pe, se)
          const ridgeB = mid(qe, re)
          batch.quad(roof, pt(pe, eave), pt(qe, eave), pt(ridgeB, top + rise), pt(ridgeA, top + rise), v(pe[0] - se[0], 1, pe[1] - se[1]))
          batch.quad(roof, pt(se, eave), pt(ridgeA, top + rise), pt(ridgeB, top + rise), pt(re, eave), v(se[0] - pe[0], 1, se[1] - pe[1]))
          batch.face(wall, [pt(p, top), pt(s, top), pt(mid(p, s), top + rise)])
          batch.face(wall, [pt(r, top), pt(q, top), pt(mid(q, r), top + rise)])
          batch.face(wall, [pt(s, top), pt(p, top), pt(mid(p, s), top + rise)])
          batch.face(wall, [pt(q, top), pt(r, top), pt(mid(q, r), top + rise)])
        }
      } else {
        // Flat roof with a raised parapet rim and a rooftop elevator/stair penthouse on taller buildings.
        batch.face(roofConcrete, ring.map(([x, z]) => new THREE.Vector3(x, top, z)).reverse())
        batch.face(roofConcrete, ring.map(([x, z]) => new THREE.Vector3(x, top, z)))
        const parapetTop = top + 0.55
        for (let k = 0; k < 4; k++) {
          const [ax, az] = ring[k]
          const [bx, bz] = ring[(k + 1) % 4]
          const facing = new THREE.Vector3((ax + bx) / 2 - cx, 0, (az + bz) / 2 - cz)
          batch.quad(copingMat, v(ax, top, az), v(bx, top, bz), v(bx, parapetTop, bz), v(ax, parapetTop, az), facing)
        }
        if (building.floors >= 4) {
          const ux = ring[1][0] - ring[0][0]
          const uz = ring[1][1] - ring[0][1]
          const turn = Math.atan2(ux, uz)
          batch.box(copingMat, cx, top + 1.2, cz, 3.6, 2.4, 3.2, turn)
        }
      }
      solids.push({ ring, base, top })
    }
    const node = new THREE.Group()
    node.name = 'region-buildings'
    batch.build(node, { cast: true, receive: true, where: 'out' })
    return { node, solids }
  }

  function* buildBorders(win, origin, datum) {
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
        yield
      }
    }
    const node = new THREE.Group()
    node.name = 'region-borders'
    batch.build(node, { cast: false, receive: false, where: 'out' })
    return node
  }

  // The outlines of managed districts ([{ colour, segments }], see region-pads.js outlinesIn): a
  // band 1.2 m wide just inside each district, on the side its runs keep the district.
  function* buildOutlines(win, origin, datum, outlines) {
    const batch = new Batch()
    for (const { colour, segments } of outlines) {
      const paint = material(colour)
      for (let k = 0; k + 3 < segments.length; k += 4) {
        ribbon(batch, paint, win, [segments[k], segments[k + 1], segments[k + 2], segments[k + 3]], 2.4, origin, datum, { lift: 0.32, side0: 0, side1: 1, step: 4 })
        if (k % 64 === 0) yield
      }
    }
    const node = new THREE.Group()
    node.name = 'region-district-outlines'
    batch.build(node, { cast: false, receive: false, where: 'out' })
    return node
  }

  // The terraces of the town's own lots: retaining walls where a pad meets lower or higher ground
  // (see region-pads.js padGround) and the plaza's paving.
  function* buildPads(win, origin, datum, walls, paving) {
    const batch = new Batch()
    const concrete = material('concrete', '#c9c5bc')
    const stone = material('sidewalk', '#ffffff')
    const v = (x, y, z) => new THREE.Vector3(x - origin[0], y - datum, z - origin[1])
    for (const [k, wall] of walls.entries()) {
      const facing = new THREE.Vector3(wall.nx, 0, wall.nz)
      // (A little below the low side and above the high one, so no seam shows.)
      batch.quad(concrete, v(wall.ax, wall.low[0] - 0.2, wall.az), v(wall.bx, wall.low[1] - 0.2, wall.bz),
        v(wall.bx, wall.high[1] + 0.12, wall.bz), v(wall.ax, wall.high[0] + 0.12, wall.az), facing)
      batch.quad(concrete, v(wall.bx, wall.low[1] - 0.2, wall.bz), v(wall.ax, wall.low[0] - 0.2, wall.az),
        v(wall.ax, wall.high[0] + 0.12, wall.az), v(wall.bx, wall.high[1] + 0.12, wall.bz), facing.clone().negate())
      if (k % 64 === 63) yield
    }
    for (const pave of paving) {
      batch.face(stone, [v(pave.x0, pave.y + 0.03, pave.z0), v(pave.x0, pave.y + 0.03, pave.z1), v(pave.x1, pave.y + 0.03, pave.z1), v(pave.x1, pave.y + 0.03, pave.z0)])
    }
    const node = new THREE.Group()
    node.name = 'region-pads'
    batch.build(node, { cast: true, receive: true, where: 'out' })
    return node
  }

  // Shows a window. Far off, `roads` and `borders` can be left out (and the window holds no
  // buildings): the ground alone, under the finer window near the viewer. Near the viewer it can
  // also show the outlines of managed districts and the terraces of the town's own lots.
  async function show(win, { origin = [0, 0], datum = 0, borders = true, roads = true, coarse = false, outlines = [], walls = [], paving = [] } = {}) {
    const ticket = ++revision
    const pending = new THREE.Group()
    function* assemble() {
      const ground = yield* buildGround(win, origin, datum, coarse)
      pending.add(ground)
      yield
      if (roads) pending.add(coarse ? yield* buildOverviewRoads(win, origin, datum) : yield* buildRoads(win, origin, datum))
      const { node, solids } = yield* buildBuildings(win, origin, datum)
      if (win.buildings.length) pending.add(node)
      if (borders) pending.add(yield* buildBorders(win, origin, datum))
      if (outlines.length) pending.add(yield* buildOutlines(win, origin, datum, outlines))
      if (walls.length || paving.length) pending.add(yield* buildPads(win, origin, datum, walls, paving))
      return { win, origin, datum, solids, ground }
    }
    const steps = assemble()
    try {
      // Paint the current frame before starting a new window, then share the main thread with input and rendering.
      await yieldToPage()
      let deadline = performance.now() + frameBudget
      while (ticket === revision) {
        const step = steps.next()
        if (step.done) {
          reset()
          group.add(...pending.children.slice())
          shown = step.value
          return true
        }
        if (performance.now() >= deadline) {
          await yieldToPage()
          deadline = performance.now() + frameBudget
        }
      }
      return false
    } finally {
      steps.return()
      disposeGroup(pending)
    }
  }

  // Leaves out the ground under `hole` (region metres; null for none).
  function setHole(hole) {
    if (!shown) return
    shown.ground.geometry.setIndex(groundIndex(shown.win, hole))
  }

  function clear() {
    revision++
    reset()
  }

  function reset() {
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
