// The region's land in the 3D view, from a window cut by public/region/window.js: the ground
// over its real heights, coloured by what covers it; smooth rivers and streams with masonry
// revetments; the main roads (carriageway, kerbs, pavements and lane markings) and local streets
// with cross-river bridges and culverts; buildings generated directly through the game's built-in
// architecture system (plans.js + buildings.js); and district borders.
// Scene metres are region metres minus `origin`; heights are region heights minus `datum`.
import * as THREE from 'three'
import { createBuilding, SHOP_HOUSES } from './buildings.js'
import { boundsOf } from './design.js'
import { Batch, disposeGroup, material, waterNormals } from './kit.js'
import { compileDesign, defaultPlan, extraPlan } from './plans.js'

// Land use as numbered by public/region/develop.js (USE).
const USE = { WATER: 0, RIVERBED: 1, FOREST: 2, GREEN: 3, FIELD: 4, PADDY: 5, PARK: 6, LOW: 7, DENSE: 8, MID: 9, HIGH: 10, COMMERCIAL: 11, INDUSTRIAL: 12, PUBLIC: 13 }
const ROAD = { COLLECTOR: 2, ARTERIAL: 3, TRUNK: 4 }
const UP = new THREE.Vector3(0, 1, 0)

// Ground palette: urban Japanese residences show warm earth, crushed gravel & paving among yards.
const GROUND = {
  [USE.WATER]: '#3b738f', [USE.RIVERBED]: '#96947e', [USE.FOREST]: '#486535', [USE.GREEN]: '#678646',
  [USE.FIELD]: '#9d8658', [USE.PADDY]: '#869d54', [USE.PARK]: '#6c9148', [USE.LOW]: '#7f8368',
  [USE.DENSE]: '#89867b', [USE.MID]: '#86877c', [USE.HIGH]: '#8e8e88', [USE.COMMERCIAL]: '#98948a',
  [USE.INDUSTRIAL]: '#8f8e86', [USE.PUBLIC]: '#b2a177',
}
const GROUND_LINEAR = []
for (const [use, colour] of Object.entries(GROUND)) GROUND_LINEAR[use] = new THREE.Color(colour)
const LOAM_CLIFF = new THREE.Color('#806c50')
const RIVER_GRAVEL = new THREE.Color('#b6b09e')
const URBAN_GRAVEL = new THREE.Color('#9e9a90')
const YARD_SOIL = new THREE.Color('#7c765f')
const PADDY_WATER = new THREE.Color('#6f8f72')
const BUND_GREEN = new THREE.Color('#5a7538')

function hash2D(ix, iz) {
  let h = (Math.imul(ix, 374761393) + Math.imul(iz, 668265263)) | 0
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296
}

function valNoise(x, z) {
  const ix = Math.floor(x)
  const iz = Math.floor(z)
  const fx = x - ix
  const fz = z - iz
  const sx = fx * fx * (3 - 2 * fx)
  const sz = fz * fz * (3 - 2 * fz)
  const n00 = hash2D(ix, iz)
  const n10 = hash2D(ix + 1, iz)
  const n01 = hash2D(ix, iz + 1)
  const n11 = hash2D(ix + 1, iz + 1)
  const nx0 = n00 + (n10 - n00) * sx
  const nx1 = n01 + (n11 - n01) * sx
  return (nx0 + (nx1 - nx0) * sz) * 2 - 1
}

function fbm2(x, z) {
  return valNoise(x, z) * 0.65 + valNoise(x * 2.13 + 17.3, z * 2.13 - 11.7) * 0.35
}

const clamp = (value, low, high) => Math.min(high, Math.max(low, value))
const frameBudget = 5
const yieldToPage = () => new Promise((resolve) => setTimeout(resolve, 0))
// Shared materials for ground and water across windows (disposeGroup frees geometry only).
let groundMaterial = null
let coarseMaterial = null
let riverWaterMaterial = null
let streamWaterMaterial = null
let sharedWaterNormals = null

function getWaterNormals() {
  if (!sharedWaterNormals) {
    sharedWaterNormals = waterNormals(256)
    sharedWaterNormals.repeat.set(1 / 14, 1 / 14)
  }
  return sharedWaterNormals
}

function getGroundMaterial() {
  if (!groundMaterial) {
    const base = material('terrainGround', '#ffffff', { where: 'out', relief: false })
    groundMaterial = base.clone()
    groundMaterial.vertexColors = true
    groundMaterial.userData = { ...base.userData }
    groundMaterial.onBeforeCompile = base.onBeforeCompile
    groundMaterial.customProgramCacheKey = base.customProgramCacheKey
  }
  return groundMaterial
}

function getRiverWaterMaterial() {
  if (!riverWaterMaterial) {
    riverWaterMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      color: '#ffffff',
      roughness: 0.12,
      metalness: 0.68,
      envMapIntensity: 1.35,
      normalMap: getWaterNormals(),
      normalScale: new THREE.Vector2(0.55, 0.55),
    })
  }
  return riverWaterMaterial
}

function getStreamWaterMaterial() {
  if (!streamWaterMaterial) {
    streamWaterMaterial = new THREE.MeshStandardMaterial({
      color: '#2e6b84',
      roughness: 0.12,
      metalness: 0.68,
      envMapIntensity: 1.3,
      normalMap: getWaterNormals(),
      normalScale: new THREE.Vector2(0.45, 0.45),
    })
  }
  return streamWaterMaterial
}

// Persistent cache of geometry extracted from real `createBuilding` instances across windows.
const archetypeCache = new Map()
const cloneMat = (part) => part

const nearestVal = (v, list) => {
  let best = list[0]
  let bestDiff = Math.abs(v - best)
  for (let i = 1; i < list.length; i++) {
    const diff = Math.abs(v - list[i])
    if (diff < bestDiff) { bestDiff = diff; best = list[i] }
  }
  return best
}

const MOD_WALLS = ['siding-white', 'siding-sand', 'siding-grey', 'siding-navy', 'mortar-cream', 'metal-dark']
const MOD_ROOFS = ['roof-metal', 'roof-slate', 'roof-metal-green', 'roof-slate']
const JAP_WALLS = ['plaster-white', 'wood-dark', 'wood-brown', 'mortar-cream']
const JAP_ROOFS = ['roof-kawara', 'roof-kawara-dark']
const EUR_WALLS = ['stucco-ivory', 'stucco-yellow', 'brick-brown', 'mortar-cream']
const MAN_WALLS = ['tile-beige', 'tile-white', 'tile-grey', 'concrete-stained']
const COM_WALLS = ['tile-white', 'mortar-grey', 'tile-grey', 'metal-silver']

// Chooses archetype specs weighted by authentic Japanese housing stock ratios per historical era
// (`era <= 3` pre-war/old core, `4..6` Showa high-growth, `>= 7` Heisei/Reiwa modern suburbs)
// and quantizes tall slabs so dense urban areas reuse shared archetypes without stalling.
function archetypeSpec(use, era, floors, widthM, depthM, tone, frontClear) {
  const idx = Math.round(clamp(tone, 0, 1) * 255)
  const pStyle = idx / 255
  const hMix = ((Math.imul(idx, 1103515245) + 12345) >>> 16) & 255
  const variant = hMix % 6
  const v2 = variant & 1
  const v3 = variant % 3
  const v4 = variant & 3
  const eraBand = era <= 3 ? 'old' : era <= 6 ? 'mid' : 'new'
  const compactYard = use !== USE.LOW || !frontClear || widthM < 5.2 || depthM < 4.8

  if (use === USE.LOW || use === USE.DENSE) {
    // Narrow 3-storey skinny house (狭小3階建てペンシル住宅) on small dense urban lots.
    if (floors >= 3 && (widthM <= 6.8 || (use === USE.DENSE && depthM <= 6.6))) {
      const f = clamp(Math.round(floors), 3, 4)
      const wIdx = v4
      const roofKind = (variant & 1) ? 'shed' : 'flat'
      return {
        key: `pencil|${f}|${wIdx}|${roofKind}`,
        spec: {
          id: `reg-pencil-${f}-${wIdx}`, style: 'modern', w: 1, d: 1,
          ...extraPlan('pencil', 1, 1, f, v2),
          look: { wall: MOD_WALLS[(wIdx + 1) % MOD_WALLS.length], roof: 'roof-metal', roofKind, eave: 0.28, low: true },
        },
        compactYard: true,
      }
    }

    // Low-rise wooden / light-steel apartments (アパート) on wider lots in dense belts.
    if (use === USE.DENSE && widthM >= 8.8 && depthM >= 5.5 && pStyle >= (eraBand === 'old' ? 0.88 : 0.80)) {
      const f = clamp(Math.round(floors), 2, 3)
      const wall = MOD_WALLS[v3]
      return {
        key: `apart|${f}|${v3}`,
        spec: {
          id: `reg-apart-${f}-${v3}`, style: 'modern', w: 1, d: 1,
          ...extraPlan('apart', 1, 1, f, v3),
          look: { wall, roof: 'roof-metal', roofKind: 'gable', eave: 0.45, rail: 'panel', low: true },
        },
        compactYard: true,
      }
    }

    // Traditional urban wooden machiya (京町家・看板/格子町家) in old dense cores.
    if (use === USE.DENSE && eraBand === 'old' && floors <= 2 && pStyle < 0.30) {
      const wall = JAP_WALLS[v2]
      return {
        key: `machiya|${v2}|${wall}`,
        spec: {
          id: `reg-machiya-${v2}`, style: 'japan', w: 1, d: 1,
          ...extraPlan('machiya', 1, 1, 2, v2),
          look: { wall, roof: 'roof-kawara-dark', roofKind: 'gable', eave: 0.34, low: true },
        },
        compactYard: true,
      }
    }

    // Mixed-use ground-floor shophouse (店舗併用住宅) in dense belts.
    if (use === USE.DENSE && floors >= 2 && pStyle >= (eraBand === 'old' ? 0.54 : 0.90) && pStyle < (eraBand === 'old' ? 0.68 : 0.96)) {
      const f = clamp(Math.round(floors), 2, 3)
      const wall = COM_WALLS[v3]
      return {
        key: `dense-shop|${f}|${v3}`,
        spec: {
          id: `reg-dshop-${f}-${v3}`, style: 'modern', w: 1, d: 1,
          ...extraPlan('shophouse', 1, 1, f, v3),
          look: { wall, roof: 'roof-metal', roofKind: v2 ? 'flat' : 'gable', rail: 'solid', eave: 0.32 },
        },
        compactYard: true,
      }
    }

    // Standard detached housing proportions calibrated to Japanese stock statistics:
    // Old cores keep ~45% traditional Japanese wooden tile; modern zones run ~82-85% modern siding/metal.
    const japShare = eraBand === 'old' ? (use === USE.DENSE ? 0.54 : 0.45) : eraBand === 'mid' ? 0.22 : (use === USE.DENSE ? 0.09 : 0.12)
    const eurShare = 0.04
    let style = 'modern'
    if (pStyle < japShare) style = 'japan'
    else if (pStyle >= 1 - eurShare) style = 'europe'

    const f = style === 'japan' ? Math.min(2, Math.max(1, Math.round(floors))) : clamp(Math.round(floors), 1, 3)
    const look = {}
    if (style === 'japan') {
      look.wall = JAP_WALLS[v4]
      look.roof = JAP_ROOFS[v2]
      look.roofKind = (variant % 3 === 0) ? 'gable' : 'hip'
      look.eave = 0.72
      look.low = true
    } else if (style === 'modern') {
      look.wall = MOD_WALLS[variant % MOD_WALLS.length]
      look.roof = eraBand === 'new' ? MOD_ROOFS[v3] : (v2 ? 'roof-slate' : 'roof-metal')
      look.roofKind = variant === 0 ? 'shed' : (v3 === 1 ? 'hip' : 'gable')
      look.eave = eraBand === 'new' && variant < 3 ? 0.28 : 0.52
      look.low = f <= 2
    } else {
      look.wall = EUR_WALLS[v4]
      look.roof = v2 ? 'roof-tile-brown' : 'roof-tile-orange'
      look.low = f <= 2
    }
    const lookTag = `${look.wall}|${look.roof}|${look.roofKind || ''}|${look.eave || ''}`
    return {
      key: `det|${style}|${f}|${v2}|${lookTag}|${compactYard ? 'c' : 'f'}`,
      spec: { id: `reg-det-${variant}`, style, w: 1, d: 1, ...defaultPlan(style, 1, 1, f, v2), look },
      compactYard,
    }
  }

  if (use === USE.MID) {
    // Low-rise 2–3F wooden/light-steel apāto (~38% of 2–3F MID plots outside planned danchi).
    if (floors <= 3 && pStyle < 0.42 && widthM / Math.max(1, depthM) < 2.2) {
      const f = clamp(Math.round(floors), 2, 3)
      const wall = MOD_WALLS[v3]
      return {
        key: `mid|apart|${f}|${v3}`,
        spec: {
          id: `reg-midap-${f}-${v3}`, style: 'modern', w: 1, d: 1,
          ...extraPlan('apart', 1, 1, f, v3),
          look: { wall, roof: 'roof-metal', roofKind: 'gable', eave: 0.42, rail: 'panel', low: true },
        },
        compactYard: true,
      }
    }
    const slab = widthM / Math.max(1, depthM) >= 1.8 && floors <= 5
    if (slab) {
      const w = clamp(Math.round(widthM / 7.3), 2, 3)
      const f = clamp(Math.round(floors), 4, 5)
      const wall = ['mortar-white', 'mortar-ivory', 'mortar-grey'][v3]
      return {
        key: `mid|danchi|${w}|1|${f}|${v3}`,
        spec: {
          id: `reg-danchi-${v3}`, style: 'danchi', w, d: 1,
          ...defaultPlan('danchi', w, 1, f, v2),
          look: { wall, rail: 'solid' },
        },
        compactYard: true,
      }
    }
    const w = clamp(Math.round(widthM / 8.0), 1, 2)
    const f = nearestVal(floors, [3, 4, 5, 7, 10])
    const wall = MAN_WALLS[v4]
    const rail = v2 ? 'solid' : 'panel'
    return {
      key: `mid|mansion|${w}|1|${f}|${v4}|${rail}`,
      spec: {
        id: `reg-mid-${v4}`, style: 'mansion', w, d: 1,
        ...defaultPlan('mansion', w, 1, f, v2),
        look: { wall, rail },
      },
      compactYard: true,
    }
  }

  if (use === USE.HIGH) {
    const w = 2
    const d = depthM >= 14 ? 2 : 1
    const f = nearestVal(floors, [10, 14, 18, 24])
    const wall = MAN_WALLS[v4]
    const rail = v2 ? 'glass' : 'panel'
    return {
      key: `high|mansion|${w}|${d}|${f}|${v2}|${rail}`,
      spec: {
        id: `reg-high-${v2}`, style: 'mansion', w, d,
        ...defaultPlan('mansion', w, d, f, 0),
        look: { wall, rail },
      },
      compactYard: true,
    }
  }

  if (use === USE.COMMERCIAL) {
    if (floors <= 2 && widthM <= 10.5 && pStyle < 0.34) {
      const base = v2 === 0 ? SHOP_HOUSES.shop : SHOP_HOUSES.cafe
      return {
        key: `com|${base.kind}|${v3}`,
        spec: { id: `reg-${base.kind}-${v3}`, kind: base.kind, style: 'shop', w: 1, d: 1, floors: base.floors },
        compactYard: true,
      }
    }
    if (floors <= 3 && (widthM <= 10 || pStyle < 0.62)) {
      const f = clamp(Math.round(floors), 2, 3)
      const wall = COM_WALLS[v4]
      return {
        key: `com|shophouse|${f}|${v3}`,
        spec: {
          id: `reg-cshop-${f}-${v3}`, style: 'modern', w: 1, d: 1,
          ...extraPlan('shophouse', 1, 1, f, v3),
          look: { wall, roof: 'roof-metal', roofKind: v2 ? 'flat' : 'gable', rail: 'solid', eave: 0.30 },
        },
        compactYard: true,
      }
    }
    if (floors >= 3 && widthM <= 6.8) {
      const f = nearestVal(floors, [3, 4])
      return {
        key: `com|pencil|${f}|${v2}`,
        spec: {
          id: `reg-cpencil-${f}-${v2}`, style: 'modern', w: 1, d: 1,
          ...extraPlan('pencil', 1, 1, f, v2),
          look: { wall: COM_WALLS[v2], roof: 'roof-metal', roofKind: 'flat', eave: 0.28 },
        },
        compactYard: true,
      }
    }
    const style = ['office', 'mansion', 'office', 'brutal'][v4]
    const w = clamp(Math.round(widthM / 8.0), 1, 2)
    const f = nearestVal(floors, [3, 5, 7, 10])
    const wall = COM_WALLS[v3]
    return {
      key: `com|${style}|${w}|1|${f}|${v3}`,
      spec: {
        id: `reg-com-${v3}`, style, w, d: 1,
        floors: defaultPlan('office', w, 1, f, 0).floors,
        look: { wall, rail: 'panel' },
      },
      compactYard: true,
    }
  }

  if (use === USE.INDUSTRIAL) {
    const w = clamp(Math.round(widthM / 10), 2, 3)
    const f = clamp(Math.round(floors), 1, 2)
    const wall = v2 === 0 ? 'metal-silver' : 'metal-white'
    return {
      key: `ind|office|${w}|2|${f}|${wall}`,
      spec: {
        id: `reg-ind-${v2}`, style: 'office', w, d: 2,
        floors: defaultPlan('office', w, 2, f, 0).floors,
        look: { wall, frame: 'black', roofKind: 'flat', rail: 'solid' },
      },
      compactYard: true,
    }
  }

  // USE.PUBLIC (schools / civic facilities): concrete wing compiled through brutal style.
  const w = clamp(Math.round(widthM / 8.5), 2, 5)
  const d = clamp(Math.round(depthM / 9.0), 1, 2)
  const f = nearestVal(floors, [2, 3, 4])
  return {
    key: `pub|brutal|${w}|${d}|${f}`,
    spec: {
      id: 'reg-pub-0', style: 'brutal', w, d,
      floors: defaultPlan('office', w, d, f, 0).floors,
      look: { wall: 'concrete', frame: 'silver', roofKind: 'flat', rail: 'solid' },
    },
    compactYard: true,
  }
}

function getBuildingArchetype({ key, spec, compactYard }) {
  if (archetypeCache.has(key)) return archetypeCache.get(key)

  const design = compileDesign(spec, { exteriorOnly: true, compactYard })
  const built = createBuilding({ ...spec, design })
  built.group.updateMatrixWorld(true)
  const bounds = boundsOf(design)
  const bcx = (bounds.x0 + bounds.x1) / 2
  const bcz = (bounds.z0 + bounds.z1) / 2
  const bw = Math.max(0.5, bounds.x1 - bounds.x0)
  const bd = Math.max(0.5, bounds.z1 - bounds.z0)

  const parts = []
  const pos = new THREE.Vector3()
  const norm = new THREE.Vector3()
  const normalMat = new THREE.Matrix3()

  // Extract only the visible exterior shell (`full` and exterior `hung` doors); skip `cutaway` and lift cars.
  for (const branch of [built.group.children[0], built.group.children[2]]) {
    if (!branch) continue
    branch.traverse((node) => {
      if (!node.isMesh || !node.visible) return
      const geom = node.geometry
      const posAttr = geom.getAttribute('position')
      const idxAttr = geom.getIndex()
      if (!posAttr || !idxAttr) return
      const shadeAttr = geom.getAttribute('shade')
      const normAttr = geom.getAttribute('normal')
      const uvAttr = geom.getAttribute('uv')
      const matW = node.matrixWorld
      normalMat.getNormalMatrix(matW)
      const count = posAttr.count
      const positions = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        pos.fromBufferAttribute(posAttr, i).applyMatrix4(matW)
        positions[i * 3] = pos.x - bcx
        positions[i * 3 + 1] = pos.y
        positions[i * 3 + 2] = pos.z - bcz
      }
      const indices = Uint32Array.from(idxAttr.array)
      if (shadeAttr) {
        const shades = Float32Array.from(shadeAttr.array)
        parts.push({ isShade: true, material: node.material, positions, shades, indices })
        return
      }
      if (!normAttr || !uvAttr) return
      const normals = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        norm.fromBufferAttribute(normAttr, i).applyMatrix3(normalMat).normalize()
        normals[i * 3] = norm.x
        normals[i * 3 + 1] = norm.y
        normals[i * 3 + 2] = norm.z
      }
      const uvs = Float32Array.from(uvAttr.array)
      parts.push({
        isShade: false,
        material: cloneMat(node.material),
        castShadow: node.castShadow,
        receiveShadow: node.receiveShadow,
        positions,
        normals,
        uvs,
        indices,
      })
    })
  }

  const totalHeight = built.height
  built.dispose()
  const entry = { bw, bd, totalHeight, compactYard, parts }
  archetypeCache.set(key, entry)
  return entry
}

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

  function waterIn(win, rx, rz) {
    const gx = clamp((rx - win.box.x0) / win.step, 0, win.width - 1)
    const gz = clamp((rz - win.box.z0) / win.step, 0, win.depth - 1)
    return win.water[Math.round(gx) + Math.round(gz) * win.width]
  }

  function eraIn(win, rx, rz) {
    if (!win.era) return 5
    const gx = clamp((rx - win.box.x0) / win.step, 0, win.width - 1)
    const gz = clamp((rz - win.box.z0) / win.step, 0, win.depth - 1)
    return win.era[Math.round(gx) + Math.round(gz) * win.width] || 5
  }

  // The triangles of a grid Grid (`win`) leaving out any cell wholly inside `hole` (region metres).
  function indexedCells(win, hole, accept = null) {
    const { width, depth, step } = win
    const index = new Uint32Array((width - 1) * (depth - 1) * 6)
    let n = 0
    for (let j = 0; j < depth - 1; j++) {
      const z0 = win.box.z0 + j * step
      const covered = hole && z0 >= hole.z0 && z0 + step <= hole.z1
      for (let i = 0; i < width - 1; i++) {
        if (accept && !accept[i + j * width]) continue
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

  const groundIndex = (win, hole) => indexedCells(win, hole)

  // The ground: one mesh over the window's grid, with world-space UVs for normal/roughness detail
  // and rich micro-shading by land use, landform slope, paddy plots, field furrows and gravel bars.
  function* buildGround(win, origin, datum, coarse) {
    const { width, depth, step, heights, use, water } = win
    const positions = new Float32Array(width * depth * 3)
    const colours = new Float32Array(width * depth * 3)
    const uvs = coarse ? null : new Float32Array(width * depth * 2)
    const normals = coarse ? null : new Float32Array(positions.length)
    let low = Infinity
    let high = -Infinity
    for (let j = 0; j < depth; j++) {
      const north = Math.max(0, j - 1)
      const south = Math.min(depth - 1, j + 1)
      for (let i = 0; i < width; i++) {
        const k = i + j * width
        const wx = win.box.x0 + i * step
        const wz = win.box.z0 + j * step
        positions[k * 3] = wx - origin[0]
        const y = heights[k] - datum
        positions[k * 3 + 1] = y
        positions[k * 3 + 2] = wz - origin[1]
        if (uvs) {
          uvs[k * 2] = wx
          uvs[k * 2 + 1] = wz
        }
        low = Math.min(low, y)
        high = Math.max(high, y)
        const west = Math.max(0, i - 1)
        const east = Math.min(width - 1, i + 1)
        const nx = (heights[west + j * width] - heights[east + j * width]) / (Math.max(1, east - west) * step)
        const nz = (heights[i + north * width] - heights[i + south * width]) / (Math.max(1, south - north) * step)
        const length = Math.sqrt(nx * nx + 1 + nz * nz)
        const ny = 1 / length
        if (normals) {
          normals[k * 3] = nx / length
          normals[k * 3 + 1] = ny
          normals[k * 3 + 2] = nz / length
        }

        const u = use[k]
        const riverCell = water[k] === 1
        const base = riverCell ? GROUND_LINEAR[USE.WATER] : GROUND_LINEAR[u] ?? GROUND_LINEAR[USE.LOW]
        let r = base.r
        let g = base.g
        let b = base.b
        if (!coarse) {
          const macro = fbm2(wx * 0.025, wz * 0.025)
          const micro = fbm2(wx * 0.14 + 31.4, wz * 0.14 - 19.2)
          let grain = 0.97 + 0.06 * macro + 0.03 * micro

          if (riverCell) {
            // Riverbed depth shading under the water surface.
            grain = 0.72 + 0.08 * macro
          } else if (water[k] === 2) {
            // Wet stream channel bed/gravel tint beneath the smooth water surface ribbon.
            grain = 0.76 + 0.06 * macro
            r = r * 0.55 + RIVER_GRAVEL.r * 0.45
            g = g * 0.55 + RIVER_GRAVEL.g * 0.45
            b = b * 0.55 + RIVER_GRAVEL.b * 0.45
          } else {
            const slope = Math.sqrt(Math.max(0, 1 - ny * ny))
            const rNear = Math.max(1, Math.round(6 / step))
            const rBank = Math.max(2, Math.round(13 / step))
            const nearW = (rad) => (
              water[Math.max(0, i - rad) + j * width] === 1 ||
              water[Math.min(width - 1, i + rad) + j * width] === 1 ||
              water[i + Math.max(0, j - rad) * width] === 1 ||
              water[i + Math.min(depth - 1, j + rad) * width] === 1 ||
              water[Math.max(0, i - rad) + Math.max(0, j - rad) * width] === 1 ||
              water[Math.min(width - 1, i + rad) + Math.max(0, j - rad) * width] === 1 ||
              water[Math.max(0, i - rad) + Math.min(depth - 1, j + rad) * width] === 1 ||
              water[Math.min(width - 1, i + rad) + Math.min(depth - 1, j + rad) * width] === 1
            )
            const hasNearChannel = nearW(rNear)
            const hasBankChannel = hasNearChannel || nearW(rBank)

            if (u === USE.RIVERBED || hasBankChannel && (u === USE.GREEN || slope > 0.12)) {
              // Smooth alluvial gravel & sandy bank transition removing coarse 20 m USE sawtooth boundaries.
              const bar = fbm2(wx * 0.032 + 7.1, wz * 0.032 - 3.4) * 0.5 + 0.5
              const bankMix = hasNearChannel ? 0.68 : (u === USE.RIVERBED ? 0.35 + 0.45 * bar : 0.48 + 0.25 * bar)
              const target = GROUND_LINEAR[USE.RIVERBED]
              r = r * (1 - bankMix) + RIVER_GRAVEL.r * (bankMix * bar) + target.r * (bankMix * (1 - bar))
              g = g * (1 - bankMix) + RIVER_GRAVEL.g * (bankMix * bar) + target.g * (bankMix * (1 - bar))
              b = b * (1 - bankMix) + RIVER_GRAVEL.b * (bankMix * bar) + target.b * (bankMix * (1 - bar))
            } else if (u === USE.LOW || u === USE.DENSE || u === USE.MID || u === USE.COMMERCIAL) {
              // Authentic Japanese residential yard soil, crushed gravel driveways, and garden variation.
              const nPatch = fbm2(wx * 0.085 - 5.2, wz * 0.085 + 9.4)
              if (nPatch > 0.1) {
                const t = clamp((nPatch - 0.1) * 0.9, 0, 0.55)
                r = r * (1 - t) + URBAN_GRAVEL.r * t
                g = g * (1 - t) + URBAN_GRAVEL.g * t
                b = b * (1 - t) + URBAN_GRAVEL.b * t
              } else if (nPatch < -0.15) {
                const t = clamp((-0.15 - nPatch) * 0.85, 0, 0.45)
                r = r * (1 - t) + YARD_SOIL.r * t
                g = g * (1 - t) + YARD_SOIL.g * t
                b = b * (1 - t) + YARD_SOIL.b * t
              }
            } else if (u === USE.PADDY) {
              // Irrigated paddy plots (水田の区画と畦畔): subtle water reflection inside plots, green bunds at borders.
              const bundX = Math.abs(Math.sin(wx * (Math.PI / 24)))
              const bundZ = Math.abs(Math.sin(wz * (Math.PI / 38)))
              if (bundX > 0.955 || bundZ > 0.965) {
                r = BUND_GREEN.r
                g = BUND_GREEN.g
                b = BUND_GREEN.b
              } else {
                const wMix = 0.35 + 0.15 * macro
                r = r * (1 - wMix) + PADDY_WATER.r * wMix
                g = g * (1 - wMix) + PADDY_WATER.g * wMix
                b = b * (1 - wMix) + PADDY_WATER.b * wMix
              }
            } else if (u === USE.FIELD) {
              // Ploughed upland field furrows (畑の畝).
              const furrow = Math.sin((wx * 0.78 + wz * 0.62) * (Math.PI * 2 / 3.2))
              grain += furrow * 0.055
            } else if (u === USE.FOREST || u === USE.GREEN) {
              // Dappled forest floor humus and leaf litter.
              grain += 0.05 * Math.sin(wx * 0.13 + wz * 0.11)
            }

            // Steep terrace escarpments and cut slopes (崖線・切土法面) expose warm Kanto loam.
            if (!water[k] && slope > 0.24 && !hasBankChannel) {
              const cliff = clamp((slope - 0.24) * 2.2, 0, 0.75)
              r = r * (1 - cliff) + LOAM_CLIFF.r * cliff
              g = g * (1 - cliff) + LOAM_CLIFF.g * cliff
              b = b * (1 - cliff) + LOAM_CLIFF.b * cliff
            }
          }
          r = clamp(r * grain, 0, 1)
          g = clamp(g * grain, 0, 1)
          b = clamp(b * grain, 0, 1)
        }
        colours[k * 3] = r
        colours[k * 3 + 1] = g
        colours[k * 3 + 2] = b
      }
      if (j % 8 === 7) yield
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colours, 3))
    if (uvs) {
      const uvAttr = new THREE.BufferAttribute(uvs, 2)
      geometry.setAttribute('uv', uvAttr)
      geometry.setAttribute('uv1', uvAttr)
    }
    if (normals) geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
    geometry.setIndex(groundIndex(win, null))
    const halfX = (width - 1) * step / 2
    const halfZ = (depth - 1) * step / 2
    const center = new THREE.Vector3(win.box.x0 - origin[0] + halfX, (low + high) / 2, win.box.z0 - origin[1] + halfZ)
    geometry.boundingSphere = new THREE.Sphere(center, Math.hypot(halfX, (high - low) / 2, halfZ))
    coarseMaterial ??= new THREE.MeshBasicMaterial({ vertexColors: true })
    const mesh = new THREE.Mesh(geometry, coarse ? coarseMaterial : getGroundMaterial())
    mesh.receiveShadow = !coarse
    mesh.name = 'region-ground'
    return mesh
  }

  // Glossy, normal-mapped water surfaces and masonry/concrete revetment banks (護岸) for the great
  // river (`water[k] === 1`, kept strictly horizontal to prevent sawtooth bank artefacts) and
  // open streams (`win.streams`, only in high-detail near windows).
  function* buildWater(win, origin, datum, coarse) {
    const { width, depth, step, heights, water } = win
    const node = new THREE.Group()
    node.name = 'region-water'
    let waterSurface = null
    let waterCells = null

    // 1. Horizontal river surface for `water[k] === 1` (`WATER.RIVER` ONLY), propagated radially onto
    //    adjacent bank vertices at the same water elevation so the waterline slices cleanly into banks.
    const total = width * depth
    const waterLevel = new Float32Array(total).fill(NaN)
    const ringOf = new Uint8Array(total).fill(255)
    let hasRiver = false
    for (let k = 0; k < total; k++) {
      if (water[k] !== 1) continue
      waterLevel[k] = heights[k] - datum + 1.65
      ringOf[k] = 0
      hasRiver = true
    }

    if (hasRiver) {
      const maxRing = step <= 4 ? 4 : 1
      let frontier = []
      for (let k = 0; k < total; k++) if (ringOf[k] === 0) frontier.push(k)
      for (let ring = 1; ring <= maxRing && frontier.length; ring++) {
        const nextFrontier = []
        for (const k of frontier) {
          const i = k % width
          const j = (k - i) / width
          for (let dj = -1; dj <= 1; dj++) {
            for (let di = -1; di <= 1; di++) {
              if (di === 0 && dj === 0) continue
              const ni = i + di
              const nj = j + dj
              if (ni < 0 || ni >= width || nj < 0 || nj >= depth) continue
              const nk = ni + nj * width
              if (ringOf[nk] !== 255) continue
              let sum = 0
              let cnt = 0
              for (let rj = -1; rj <= 1; rj++) {
                for (let ri = -1; ri <= 1; ri++) {
                  const mi = ni + ri
                  const mj = nj + rj
                  if (mi < 0 || mi >= width || mj < 0 || mj >= depth) continue
                  const mk = mi + mj * width
                  if (ringOf[mk] < ring) {
                    sum += waterLevel[mk]
                    cnt++
                  }
                }
              }
              if (!cnt) continue
              const level = sum / cnt
              waterLevel[nk] = level
              ringOf[nk] = ring
              if (heights[nk] - datum <= level + 0.2) nextFrontier.push(nk)
            }
          }
        }
        frontier = nextFrontier
      }

      waterCells = new Uint8Array(total)
      let anyCell = false
      for (let j = 0; j < depth - 1; j++) {
        for (let i = 0; i < width - 1; i++) {
          const a = i + j * width
          const b = a + 1
          const c = a + width
          const d = c + 1
          if (ringOf[a] < 255 && ringOf[b] < 255 && ringOf[c] < 255 && ringOf[d] < 255
            && Math.min(ringOf[a], ringOf[b], ringOf[c], ringOf[d]) < maxRing) {
            waterCells[a] = 1
            anyCell = true
          }
        }
      }

      if (anyCell) {
        const positions = new Float32Array(total * 3)
        const colours = new Float32Array(total * 3)
        const uvs = new Float32Array(total * 2)
        const normals = new Float32Array(total * 3)
        const deepRiver = new THREE.Color('#1d526d')
        const shallowRiver = new THREE.Color('#3b7c92')
        for (let j = 0; j < depth; j++) {
          for (let i = 0; i < width; i++) {
            const k = i + j * width
            if (ringOf[k] === 255) continue
            const wx = win.box.x0 + i * step
            const wz = win.box.z0 + j * step
            const wl = waterLevel[k]
            positions[k * 3] = wx - origin[0]
            positions[k * 3 + 1] = wl
            positions[k * 3 + 2] = wz - origin[1]
            uvs[k * 2] = wx
            uvs[k * 2 + 1] = wz
            normals[k * 3] = 0
            normals[k * 3 + 1] = 1
            normals[k * 3 + 2] = 0
            const waterDepth = clamp((wl - (heights[k] - datum)) / 1.5, 0, 1)
            const shimmer = 0.95 + 0.06 * Math.sin(wx * 0.08 + wz * 0.06)
            colours[k * 3] = clamp((shallowRiver.r * (1 - waterDepth) + deepRiver.r * waterDepth) * shimmer, 0, 1)
            colours[k * 3 + 1] = clamp((shallowRiver.g * (1 - waterDepth) + deepRiver.g * waterDepth) * shimmer, 0, 1)
            colours[k * 3 + 2] = clamp((shallowRiver.b * (1 - waterDepth) + deepRiver.b * waterDepth) * shimmer, 0, 1)
          }
        }
        const geom = new THREE.BufferGeometry()
        geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geom.setAttribute('color', new THREE.BufferAttribute(colours, 3))
        geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
        geom.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
        geom.setIndex(indexedCells(win, null, waterCells))
        const waterMesh = new THREE.Mesh(geom, getRiverWaterMaterial())
        waterMesh.receiveShadow = true
        waterMesh.name = 'region-water-surface'
        node.add(waterMesh)
        waterSurface = { mesh: waterMesh, cells: waterCells }
      }
    }
    yield

    // 2. Open streams (`win.streams`): only in detail windows (`!coarse && step <= 4`).
    //    Level water surface sampled from undisturbed banks + sloped revetments + concrete copings.
    if (!coarse && step <= 4 && win.streams && win.streams.length) {
      const bankBatch = new Batch()
      const waterBatch = new Batch()
      const revetMat = material('revetment', '#c4c0b4')
      const copingMat = material('concrete', '#d4d1c8')
      const streamWaterMat = getStreamWaterMaterial()
      const { x0, z0, x1, z1 } = win.box
      const pad = 25
      const v = (x, y, z) => new THREE.Vector3(x - origin[0], y, z - origin[1])

      for (const stream of win.streams) {
        if (stream.covered) continue
        const raw = []
        for (let k = 0; k < stream.points.length; k += 2) raw.push([stream.points[k], stream.points[k + 1]])
        const pts = [raw[0]]
        for (let k = 1; k < raw.length; k++) {
          const [ax, az] = raw[k - 1]
          const [bx, bz] = raw[k]
          const len = Math.hypot(bx - ax, bz - az)
          const steps = Math.max(1, Math.ceil(len / 2.2))
          for (let s = 1; s <= steps; s++) pts.push([ax + (bx - ax) * s / steps, az + (bz - az) * s / steps])
        }
        if (pts.length < 2) continue

        const half = Math.max(1.1, stream.width * 0.5)
        const bankSampleDist = half + 2.5
        const n = pts.length
        const nxArr = new Float32Array(n)
        const nzArr = new Float32Array(n)
        const leftH = new Float32Array(n)
        const rightH = new Float32Array(n)
        const minBankH = new Float32Array(n)
        const active = new Uint8Array(n)

        for (let k = 0; k < n; k++) {
          const [px, pz] = pts[Math.max(0, k - 1)]
          const [qx, qz] = pts[Math.min(n - 1, k + 1)]
          const len = Math.hypot(qx - px, qz - pz) || 1
          const nx = -(qz - pz) / len
          const nz = (qx - px) / len
          nxArr[k] = nx
          nzArr[k] = nz
          const [x, z] = pts[k]
          if (x > x0 - pad && x < x1 + pad && z > z0 - pad && z < z1 + pad && waterIn(win, x, z) !== 1) active[k] = 1
          const lh = heightIn(win, x - nx * bankSampleDist, z - nz * bankSampleDist) - datum
          const rh = heightIn(win, x + nx * bankSampleDist, z + nz * bankSampleDist) - datum
          leftH[k] = lh
          rightH[k] = rh
          minBankH[k] = Math.min(lh, rh)
        }

        // Smooth bank profiles along the stream so 2 m DEM sampling noise disappears.
        const smooth = (arr) => {
          for (let pass = 0; pass < 3; pass++) {
            const copy = arr.slice()
            for (let k = 1; k < n - 1; k++) arr[k] = copy[k - 1] * 0.25 + copy[k] * 0.5 + copy[k + 1] * 0.25
          }
        }
        smooth(leftH)
        smooth(rightH)
        smooth(minBankH)

        const wDrop = Math.min(0.68, (stream.depth ?? 1.4) * 0.45)
        for (let k = 1; k < n; k++) {
          if (!active[k - 1] && !active[k]) continue
          const [ax, az] = pts[k - 1]
          const [bx, bz] = pts[k]
          const nax = nxArr[k - 1]
          const naz = nzArr[k - 1]
          const nbx = nxArr[k]
          const nbz = nzArr[k]

          const wy0 = minBankH[k - 1] - wDrop
          const wy1 = minBankH[k] - wDrop
          const topL0 = Math.max(leftH[k - 1] + 0.05, wy0 + 0.36)
          const topL1 = Math.max(leftH[k] + 0.05, wy1 + 0.36)
          const topR0 = Math.max(rightH[k - 1] + 0.05, wy0 + 0.36)
          const topR1 = Math.max(rightH[k] + 0.05, wy1 + 0.36)

          const wHalf = half + 0.22
          const toe = Math.max(0.4, half - 0.16)
          const wallTop = half + 0.55
          const copingOut = half + 1.05

          // Level stream water surface ribbon.
          waterBatch.quad(streamWaterMat,
            v(ax - nax * wHalf, wy0, az - naz * wHalf),
            v(bx - nbx * wHalf, wy1, bz - nbz * wHalf),
            v(bx + nbx * wHalf, wy1, bz + nbz * wHalf),
            v(ax + nax * wHalf, wy0, az + naz * wHalf), UP)

          // Left sloped masonry/concrete revetment, top coping, and outer skirt.
          const faceL = new THREE.Vector3((nax + nbx) * 0.5, 0.35, (naz + nbz) * 0.5)
          bankBatch.quad(revetMat,
            v(ax - nax * wallTop, topL0, az - naz * wallTop),
            v(bx - nbx * wallTop, topL1, bz - nbz * wallTop),
            v(bx - nbx * toe, wy1 - 0.55, bz - nbz * toe),
            v(ax - nax * toe, wy0 - 0.55, az - naz * toe), faceL)
          bankBatch.quad(copingMat,
            v(ax - nax * copingOut, topL0, az - naz * copingOut),
            v(bx - nbx * copingOut, topL1, bz - nbz * copingOut),
            v(bx - nbx * wallTop, topL1, bz - nbz * wallTop),
            v(ax - nax * wallTop, topL0, az - naz * wallTop), UP)
          bankBatch.quad(copingMat,
            v(ax - nax * copingOut, topL0 - 0.35, az - naz * copingOut),
            v(bx - nbx * copingOut, topL1 - 0.35, bz - nbz * copingOut),
            v(bx - nbx * copingOut, topL1, bz - nbz * copingOut),
            v(ax - nax * copingOut, topL0, az - naz * copingOut),
            new THREE.Vector3(-(nax + nbx) * 0.5, 0, -(naz + nbz) * 0.5))

          // Right sloped masonry/concrete revetment, top coping, and outer skirt.
          const faceR = new THREE.Vector3(-(nax + nbx) * 0.5, 0.35, -(naz + nbz) * 0.5)
          bankBatch.quad(revetMat,
            v(ax + nax * toe, wy0 - 0.55, az + naz * toe),
            v(bx + nbx * toe, wy1 - 0.55, bz + nbz * toe),
            v(bx + nbx * wallTop, topR1, bz + nbz * wallTop),
            v(ax + nax * wallTop, topR0, az + naz * wallTop), faceR)
          bankBatch.quad(copingMat,
            v(ax + nax * wallTop, topR0, az + naz * wallTop),
            v(bx + nbx * wallTop, topR1, bz + nbz * wallTop),
            v(bx + nbx * copingOut, topR1, bz + nbz * copingOut),
            v(ax + nax * copingOut, topR0, az + naz * copingOut), UP)
          bankBatch.quad(copingMat,
            v(ax + nax * copingOut, topR0 - 0.35, az + naz * copingOut),
            v(bx + nbx * copingOut, topR1 - 0.35, bz + nbz * copingOut),
            v(bx + nbx * copingOut, topR1, bz + nbz * copingOut),
            v(ax + nax * copingOut, topR0, az + naz * copingOut),
            new THREE.Vector3((nax + nbx) * 0.5, 0, (naz + nbz) * 0.5))
        }
        yield
      }
      bankBatch.build(node, { cast: false, receive: true, where: 'out' })
      waterBatch.build(node, { cast: false, receive: true })
    }
    return { node, waterSurface }
  }

  // Densifies a polyline (`points` or precomputed track) and optionally bridges any water crossings.
  function tracePolyline(win, points, step, datum, { bridge = false } = {}) {
    const along = []
    for (let k = 0; k < points.length; k += 2) along.push([points[k], points[k + 1]])
    const dense = [along[0]]
    const dist = [0]
    for (let k = 1; k < along.length; k++) {
      const [ax, az] = along[k - 1]
      const [bx, bz] = along[k]
      const segLen = Math.hypot(bx - ax, bz - az)
      const pieces = Math.max(1, Math.ceil(segLen / step))
      const baseD = dist[dist.length - 1]
      for (let p = 1; p <= pieces; p++) {
        dense.push([ax + (bx - ax) * p / pieces, az + (bz - az) * p / pieces])
        dist.push(baseD + segLen * p / pieces)
      }
    }
    const n = dense.length
    const nxArr = new Float32Array(n)
    const nzArr = new Float32Array(n)
    for (let k = 0; k < n; k++) {
      const [px, pz] = dense[Math.max(0, k - 1)]
      const [qx, qz] = dense[Math.min(n - 1, k + 1)]
      const length = Math.hypot(qx - px, qz - pz) || 1
      nxArr[k] = -(qz - pz) / length
      nzArr[k] = (qx - px) / length
    }
    let overrideY = null
    let bridgeKind = null
    if (bridge) {
      const cw = new Uint8Array(n)
      const ch = new Float32Array(n)
      let anyWater = false
      for (let k = 0; k < n; k++) {
        const w = waterIn(win, dense[k][0], dense[k][1])
        cw[k] = w
        ch[k] = heightIn(win, dense[k][0], dense[k][1]) - datum
        if (w) anyWater = true
      }
      if (anyWater) {
        overrideY = new Float32Array(n).fill(NaN)
        bridgeKind = new Uint8Array(n)
        for (let k = 0; k < n; k++) {
          if (!cw[k]) continue
          const start = k
          let hasRiver = cw[k] === 1
          while (k + 1 < n && cw[k + 1]) {
            k++
            if (cw[k] === 1) hasRiver = true
          }
          const end = k
          if (hasRiver) {
            let a0 = start
            while (a0 > 0 && start - a0 < 12 && (cw[a0] || ch[a0 - 1] > ch[a0] + 0.08)) a0--
            let b0 = end
            while (b0 < n - 1 && b0 - end < 12 && (cw[b0] || ch[b0 + 1] > ch[b0] + 0.08)) b0++
            let minBed = Infinity
            for (let m = start; m <= end; m++) if (cw[m] === 1) minBed = Math.min(minBed, ch[m])
            const deckY = Math.max(ch[a0], ch[b0], (Number.isFinite(minBed) ? minBed : 0) + 4.5)
            for (let m = a0; m <= b0; m++) {
              bridgeKind[m] = 1
              if (m < start) {
                const t = (m - a0) / Math.max(1, start - a0)
                overrideY[m] = ch[a0] + (deckY - ch[a0]) * t
              } else if (m > end) {
                const t = (m - end) / Math.max(1, b0 - end)
                overrideY[m] = deckY + (ch[b0] - deckY) * t
              } else overrideY[m] = deckY
            }
          } else {
            const a0 = Math.max(0, start - 2)
            const b0 = Math.min(n - 1, end + 2)
            const y0 = ch[a0]
            const y1 = ch[b0]
            for (let m = a0; m <= b0; m++) {
              const t = (m - a0) / Math.max(1, b0 - a0)
              overrideY[m] = y0 + (y1 - y0) * t + 0.12 * Math.sin(Math.PI * t)
              bridgeKind[m] = 2
            }
          }
        }
      }
    }
    return { dense, dist, nxArr, nzArr, overrideY, bridgeKind }
  }

  // A strip `width` wide along a polyline (`points` or precomputed `tracePolyline`), `lift` above ground,
  // between `side0` and `side1` (fractions of the half width, -1 to 1).
  // Subdivides wide strips across width (`cols`) so terrain undulations don't poke through wide roads;
  // optional `skirt` adds vertical side curbs dropping into the ground, and `dash: [onM, periodM]`.
  function ribbon(batch, paint, win, source, width, origin, datum, { lift = 0.05, side0 = -1, side1 = 1, step = 6, dash = null, skirt = 0, bridge = false } = {}) {
    const track = Array.isArray(source) || ArrayBuffer.isView(source)
      ? tracePolyline(win, source, step, datum, { bridge })
      : source
    const { dense, dist, nxArr, nzArr, overrideY, bridgeKind } = track
    const { x0, z0, x1, z1 } = win.box
    const pad = 22
    const half = width / 2
    const spanW = Math.abs(side1 - side0) * half
    const cols = dash ? 1 : Math.max(width >= 2.4 ? 2 : 1, Math.min(4, Math.ceil(spanW / 3.5)))

    const sampleRow = (k) => {
      const [x, z] = dense[k]
      const nx = nxArr[k]
      const nz = nzArr[k]
      const bridgedY = overrideY && !Number.isNaN(overrideY[k]) ? overrideY[k] : null
      const pts = []
      for (let c = 0; c <= cols; c++) {
        const f = side0 + (side1 - side0) * (c / cols)
        const rx = x + nx * half * f
        const rz = z + nz * half * f
        const y = (bridgedY !== null ? bridgedY : heightIn(win, rx, rz) - datum) + lift
        pts.push(new THREE.Vector3(rx - origin[0], y, rz - origin[1]))
      }
      return { pts, nx, nz, isBridge: bridgeKind ? bridgeKind[k] === 1 : false }
    }

    let previous = null
    for (let k = 0; k < dense.length; k++) {
      const [x, z] = dense[k]
      const inside = x > x0 - pad && x < x1 + pad && z > z0 - pad && z < z1 + pad
      const current = inside ? sampleRow(k) : null
      if (previous && current) {
        const show = !dash || (((dist[k - 1] + dist[k]) * 0.5) % dash[1] < dash[0])
        if (show) {
          for (let c = 0; c < cols; c++) {
            batch.quad(paint, previous.pts[c], current.pts[c], current.pts[c + 1], previous.pts[c + 1], UP)
          }
          const drop = (previous.isBridge || current.isBridge) && skirt > 0 ? Math.max(skirt, 0.85) : skirt
          if (drop > 0) {
            const p0 = previous.pts[0]
            const c0 = current.pts[0]
            const p1 = previous.pts[cols]
            const c1 = current.pts[cols]
            const nOut0 = new THREE.Vector3(-(previous.nx + current.nx) * 0.5, 0, -(previous.nz + current.nz) * 0.5)
            const nOut1 = new THREE.Vector3((previous.nx + current.nx) * 0.5, 0, (previous.nz + current.nz) * 0.5)
            batch.quad(paint,
              new THREE.Vector3(p0.x, p0.y - drop, p0.z),
              new THREE.Vector3(c0.x, c0.y - drop, c0.z),
              c0, p0, nOut0)
            batch.quad(paint,
              new THREE.Vector3(p1.x, p1.y - drop, p1.z),
              new THREE.Vector3(c1.x, c1.y - drop, c1.z),
              c1, p1, nOut1)
          }
        }
      }
      previous = current
    }
  }

  // Draws a flat quad on the ground at `(cx, cz)` oriented along unit vector `(ux, uz)` with
  // local longitudinal range `[a0, a1]` and lateral range `[s0, s1]` (right-hand normal `nx = -uz, nz = ux`).
  function groundQuad(batch, paint, win, origin, datum, cx, cz, ux, uz, a0, a1, s0, s1, lift = 0.18) {
    const nx = -uz
    const nz = ux
    const v = (a, s) => {
      const rx = cx + ux * a + nx * s
      const rz = cz + uz * a + nz * s
      return new THREE.Vector3(rx - origin[0], heightIn(win, rx, rz) - datum + lift, rz - origin[1])
    }
    batch.quad(paint, v(a0, s0), v(a1, s0), v(a1, s1), v(a0, s1), UP)
  }

  // Intersection of segment A (`ax,az -> bx,bz`) and segment B (`cx,cz -> dx,dz`), returning `{ x, z, t, u }`.
  function segHit(ax, az, bx, bz, cx, cz, dx, dz) {
    const rX = bx - ax
    const rZ = bz - az
    const sX = dx - cx
    const sZ = dz - cz
    const denom = rX * sZ - rZ * sX
    if (Math.abs(denom) < 1e-6) return null
    const qpx = cx - ax
    const qpz = cz - az
    const t = (qpx * sZ - qpz * sX) / denom
    const u = (qpx * rZ - qpz * rX) / denom
    if (t >= -0.02 && t <= 1.02 && u >= -0.02 && u <= 1.02) {
      return { x: ax + t * rX, z: az + t * rZ, t, u }
    }
    return null
  }

  function* buildRoads(win, origin, datum) {
    const batch = new Batch()
    const asphalt = material('asphalt', '#ffffff')
    const pavement = material('sidewalk', '#e2e0d8')
    const kerb = material('concrete', '#c4c2b8')
    const street = material('asphalt', '#c4c4be')
    const laneSurface = material('asphalt', '#cecdc6')
    const alleySurface = material('pavers', '#d8d2c5')
    const gutter = material('concrete', '#d0cec6')
    const grateMat = material('#43474b', '#ffffff', { roughness: 0.45, metalness: 0.72 })
    const lineWhite = material('#eeece2', '#ffffff', { roughness: 0.65 })
    const lineYellow = material('#e4a829', '#ffffff', { roughness: 0.62 })
    const fineStep = Math.min(2, win.step || 2)
    const { x0, z0, x1, z1 } = win.box

    // 1. Main roads (trunk, arterial, collector): carriageway, outer lane lines (外側線), kerbs (縁石),
    //    sidewalks (歩道), Japanese center/lane markings, and bridges over rivers/streams.
    for (const road of win.roads) {
      const track = tracePolyline(win, road.points, fineStep, datum, { bridge: true })
      const walk = road.kind >= ROAD.ARTERIAL ? 3.5 : 2.5
      const kerbW = 0.25
      const share = clamp(1 - (2 * walk) / road.width, 0.2, 1)
      const kerbIn = clamp(share - (2 * kerbW) / road.width, 0.18, share)
      const mark = clamp(0.18 / road.width, 0.01, 0.05)
      const edgeLine = clamp(0.15 / road.width, 0.008, 0.035)
      const outerPos = kerbIn - edgeLine * 1.6

      // Carriageway, raised kerbs, and sidewalks with outer roadbed skirts.
      ribbon(batch, asphalt, win, track, road.width, origin, datum, { lift: 0.16, side0: -share, side1: share, step: fineStep })
      ribbon(batch, kerb, win, track, road.width, origin, datum, { lift: 0.26, side0: -share, side1: -kerbIn, step: fineStep, skirt: 0.14 })
      ribbon(batch, kerb, win, track, road.width, origin, datum, { lift: 0.26, side0: kerbIn, side1: share, step: fineStep, skirt: 0.14 })
      ribbon(batch, pavement, win, track, road.width, origin, datum, { lift: 0.27, side0: -1, side1: -share, step: fineStep, skirt: 0.28 })
      ribbon(batch, pavement, win, track, road.width, origin, datum, { lift: 0.27, side0: share, side1: 1, step: fineStep, skirt: 0.28 })

      // Left and right outer carriageway edge lines (車道外側線).
      ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.18, side0: -outerPos - edgeLine, side1: -outerPos + edgeLine, step: fineStep })
      ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.18, side0: outerPos - edgeLine, side1: outerPos + edgeLine, step: fineStep })

      // Centerline & lane dividers:
      // - Trunk (`ROAD.TRUNK`) & Arterial (`ROAD.ARTERIAL`): solid yellow no-passing centerline + dashed white lane dividers.
      // - Collector (`ROAD.COLLECTOR`): dashed white centerline (5 m dash / 10 m period).
      if (road.kind >= ROAD.ARTERIAL) {
        ribbon(batch, lineYellow, win, track, road.width, origin, datum, { lift: 0.184, side0: -mark, side1: mark, step: fineStep })
        const lanePos = outerPos * 0.5
        ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.18, side0: -lanePos - edgeLine, side1: -lanePos + edgeLine, step: fineStep, dash: [4.5, 10] })
        ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.18, side0: lanePos - edgeLine, side1: lanePos + edgeLine, step: fineStep, dash: [4.5, 10] })
      } else {
        ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.184, side0: -mark, side1: mark, step: fineStep, dash: [4.5, 9.5] })
      }

      // Concrete bridge parapets (橋梁の高欄) over great river spans.
      if (track.bridgeKind) {
        const half = road.width / 2
        const pad = 22
        const { dense, nxArr, nzArr, overrideY, bridgeKind } = track
        for (const side of [-1, 1]) {
          for (let k = 1; k < dense.length; k++) {
            if (bridgeKind[k - 1] !== 1 && bridgeKind[k] !== 1) continue
            const [ax, az] = dense[k - 1]
            const [bx, bz] = dense[k]
            if (ax < x0 - pad || ax > x1 + pad || az < z0 - pad || az > z1 + pad) continue
            const y0 = (!Number.isNaN(overrideY[k - 1]) ? overrideY[k - 1] : heightIn(win, ax, az) - datum) + 0.27
            const y1 = (!Number.isNaN(overrideY[k]) ? overrideY[k] : heightIn(win, bx, bz) - datum) + 0.27
            const pAx = ax + nxArr[k - 1] * (half - 0.12) * side - origin[0]
            const pAz = az + nzArr[k - 1] * (half - 0.12) * side - origin[1]
            const pBx = bx + nxArr[k] * (half - 0.12) * side - origin[0]
            const pBz = bz + nzArr[k] * (half - 0.12) * side - origin[1]
            const midX = (pAx + pBx) * 0.5
            const midZ = (pAz + pBz) * 0.5
            const segL = Math.hypot(pBx - pAx, pBz - pAz)
            if (segL < 0.05) continue
            const yaw = Math.atan2(pBx - pAx, pBz - pAz)
            batch.box(kerb, midX, (y0 + y1) * 0.5 + 0.48, midZ, 0.22, 0.96, segL + 0.04, yaw)
          }
        }
      }
      yield
    }

    // 2. Local streets, private lanes (位置指定道路) and historical roji/alleys (路地・横丁).
    for (const lane of win.streets) {
      const track = tracePolyline(win, lane.points, fineStep, datum, { bridge: true })
      const isAlley = lane.kind === 'alley' || lane.width < 3.7
      const isLane = lane.kind === 'lane'
      if (isAlley) {
        // Historical roji / yokocho: stone-paver / weathered mortar surface with a central drainage groove & concrete edges.
        const edge = clamp(1 - (2 * 0.25) / Math.max(lane.width, 2.2), 0.72, 0.9)
        const centerGroove = clamp(0.16 / Math.max(lane.width, 2.2), 0.03, 0.08)
        ribbon(batch, alleySurface, win, track, lane.width, origin, datum, { lift: 0.20, side0: -edge, side1: edge, step: fineStep })
        ribbon(batch, gutter, win, track, lane.width, origin, datum, { lift: 0.215, side0: -1, side1: -edge, step: fineStep, skirt: 0.26 })
        ribbon(batch, gutter, win, track, lane.width, origin, datum, { lift: 0.215, side0: edge, side1: 1, step: fineStep, skirt: 0.26 })
        ribbon(batch, gutter, win, track, lane.width, origin, datum, { lift: 0.218, side0: -centerGroove, side1: centerGroove, step: fineStep })
      } else {
        // Standard local street or 4.0 m private lane: asphalt carriageway, L-shaped concrete side gutters (L字側溝),
        // white side edge lines on streets >= 5 m, and iron drainage gratings every ~22 m.
        const surf = isLane ? laneSurface : street
        const edge = clamp(1 - (2 * 0.35) / Math.max(lane.width, 2.4), 0.65, 0.9)
        ribbon(batch, surf, win, track, lane.width, origin, datum, { lift: 0.20, side0: -edge, side1: edge, step: fineStep })
        ribbon(batch, gutter, win, track, lane.width, origin, datum, { lift: 0.215, side0: -1, side1: -edge, step: fineStep, skirt: 0.26 })
        ribbon(batch, gutter, win, track, lane.width, origin, datum, { lift: 0.215, side0: edge, side1: 1, step: fineStep, skirt: 0.26 })
        if (lane.width >= 4.8) {
          const lineW = clamp(0.11 / lane.width, 0.015, 0.035)
          const pos = edge - lineW * 1.4
          ribbon(batch, lineWhite, win, track, lane.width, origin, datum, { lift: 0.218, side0: -pos - lineW, side1: -pos + lineW, step: fineStep })
          ribbon(batch, lineWhite, win, track, lane.width, origin, datum, { lift: 0.218, side0: pos - lineW, side1: pos + lineW, step: fineStep })
        }
        // Iron gutter grates (グレーチング蓋) along the L-gutter.
        const [ax, az, bx, bz] = lane.points
        const len = Math.hypot(bx - ax, bz - az)
        if (len >= 16 && ax >= x0 && ax <= x1 && az >= z0 && az <= z1) {
          const ux = (bx - ax) / len
          const uz = (bz - az) / len
          const sPos = (lane.width / 2) * ((1 + edge) * 0.5)
          for (let d = 10; d < len - 8; d += 22) {
            groundQuad(batch, grateMat, win, origin, datum, ax + ux * d, az + uz * d, ux, uz, -0.45, 0.45, sPos - 0.14, sPos + 0.14, 0.222)
          }
        }
      }
      yield
    }

    // 3. Japanese Traffic Rules (左側通行):
    //    - Major road intersections: zebra crosswalks (`横断歩道`, 0.45 m white bars) and left-lane stop lines (`停止線`).
    //    - Local streets meeting main roads: left-lane stop lines (`停止線`) on the incoming left side.
    const roadSegs = []
    for (let rIdx = 0; rIdx < win.roads.length; rIdx++) {
      const road = win.roads[rIdx]
      const pts = road.points
      for (let k = 2; k < pts.length; k += 2) {
        const ax = pts[k - 2]
        const az = pts[k - 1]
        const bx = pts[k]
        const bz = pts[k + 1]
        if (Math.max(ax, bx) < x0 || Math.min(ax, bx) > x1 || Math.max(az, bz) < z0 || Math.min(az, bz) > z1) continue
        roadSegs.push({ rIdx, kind: road.kind, width: road.width, ax, az, bx, bz })
      }
    }

    // 3a. Crosswalks and left-hand stop lines at major road intersections.
    const drawnCrossings = []
    for (let i = 0; i < roadSegs.length; i++) {
      const A = roadSegs[i]
      for (let j = i + 1; j < roadSegs.length; j++) {
        const B = roadSegs[j]
        if (A.rIdx === B.rIdx) continue
        const hit = segHit(A.ax, A.az, A.bx, A.bz, B.ax, B.az, B.bx, B.bz)
        if (!hit || hit.x < x0 + 4 || hit.x > x1 - 4 || hit.z < z0 + 4 || hit.z > z1 - 4) continue
        if (drawnCrossings.some((p) => Math.hypot(p.x - hit.x, p.z - hit.z) < 22)) continue
        drawnCrossings.push(hit)

        for (const [self, other] of [[A, B], [B, A]]) {
          const len = Math.hypot(self.bx - self.ax, self.bz - self.az) || 1
          const ux = (self.bx - self.ax) / len
          const uz = (self.bz - self.az) / len
          const walk = self.kind >= ROAD.ARTERIAL ? 3.5 : 2.5
          const cwHalf = Math.max(2.5, self.width / 2 - walk - 0.35)
          const setback = other.width / 2 + 2.2

          for (const dir of [-1, 1]) {
            // Zebra crosswalk (横断歩道): 3.0 m deep across the carriageway, 0.44 m bars every 0.9 m.
            const crossCenter = dir * (setback + 1.6)
            for (let s = -cwHalf + 0.45; s <= cwHalf - 0.45; s += 0.9) {
              groundQuad(batch, lineWhite, win, origin, datum, hit.x, hit.z, ux, uz, crossCenter - 1.5, crossCenter + 1.5, s - 0.22, s + 0.22, 0.19)
            }
            // Japanese Left-Hand Traffic Stop Line (左側通行の停止線).
            const stopDist = dir * (setback + 4.8)
            const s0 = dir > 0 ? 0.2 : -cwHalf + 0.25
            const s1 = dir > 0 ? cwHalf - 0.25 : -0.2
            groundQuad(batch, lineWhite, win, origin, datum, hit.x, hit.z, ux, uz, stopDist - 0.22, stopDist + 0.22, s0, s1, 0.19)
          }
        }
      }
    }

    // 3b. Left-hand stop lines (停止線) where local streets meet main roads.
    for (const lane of win.streets) {
      if (lane.width < 3.6) continue
      const [ax, az, bx, bz] = lane.points
      const len = Math.hypot(bx - ax, bz - az)
      if (len < 10) continue
      const ux = (bx - ax) / len
      const uz = (bz - az) / len
      const half = lane.width / 2 - 0.38

      for (const [endX, endZ, isEnd] of [[ax, az, false], [bx, bz, true]]) {
        if (endX < x0 + 2 || endX > x1 - 2 || endZ < z0 + 2 || endZ > z1 - 2) continue
        let metRoad = null
        for (const rSeg of roadSegs) {
          const rdx = rSeg.bx - rSeg.ax
          const rdz = rSeg.bz - rSeg.az
          const rl2 = rdx * rdx + rdz * rdz
          let t = rl2 > 0 ? ((endX - rSeg.ax) * rdx + (endZ - rSeg.az) * rdz) / rl2 : 0
          t = clamp(t, 0, 1)
          const d = Math.hypot(rSeg.ax + rdx * t - endX, rSeg.az + rdz * t - endZ)
          if (d < rSeg.width / 2 + 1.8) {
            metRoad = rSeg
            break
          }
        }
        if (!metRoad) continue
        const offsetFromEnd = metRoad.width / 2 + 1.6
        if (offsetFromEnd + 2.5 >= len) continue
        const alongPos = isEnd ? len - offsetFromEnd : offsetFromEnd
        const s0 = isEnd ? -half : 0.05
        const s1 = isEnd ? -0.05 : half
        groundQuad(batch, lineWhite, win, origin, datum, ax, az, ux, uz, alongPos - 0.18, alongPos + 0.18, s0, s1, 0.225)
      }
    }
    yield

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

  // Builds buildings directly using the game's built-in construction system (`defaultPlan` +
  // `compileDesign` + `createBuilding` from `plans.js` / `buildings.js`), batched per shared
  // material onto level concrete foundation plinths oriented toward each parcel's street frontage.
  function* buildBuildings(win, origin, datum) {
    const solids = []
    if (!win.buildings.length) {
      const node = new THREE.Group()
      node.name = 'region-buildings'
      return { node, solids }
    }

    // Spatial grid of road/street segments (32 m cells) to check front yard clearance quickly.
    const bucketCell = 32
    const wayBuckets = new Map()
    const addWaySeg = (ax, az, bx, bz, half) => {
      const entry = { ax, az, bx, bz, half }
      const i0 = Math.floor((Math.min(ax, bx) - half - 4) / bucketCell)
      const i1 = Math.floor((Math.max(ax, bx) + half + 4) / bucketCell)
      const j0 = Math.floor((Math.min(az, bz) - half - 4) / bucketCell)
      const j1 = Math.floor((Math.max(az, bz) + half + 4) / bucketCell)
      for (let bj = j0; bj <= j1; bj++) {
        for (let bi = i0; bi <= i1; bi++) {
          const key = bi + bj * 100000
          let list = wayBuckets.get(key)
          if (!list) wayBuckets.set(key, list = [])
          list.push(entry)
        }
      }
    }
    for (const road of win.roads) {
      const half = road.width * 0.5
      for (let k = 2; k < road.points.length; k += 2) {
        addWaySeg(road.points[k - 2], road.points[k - 1], road.points[k], road.points[k + 1], half)
      }
    }
    for (const lane of win.streets) {
      addWaySeg(lane.points[0], lane.points[1], lane.points[2], lane.points[3], lane.width * 0.5)
    }
    const hasFrontRoom = (fx, fz, needed) => {
      const list = wayBuckets.get(Math.floor(fx / bucketCell) + Math.floor(fz / bucketCell) * 100000)
      if (!list) return true
      for (const s of list) {
        const dx = s.bx - s.ax
        const dz = s.bz - s.az
        const l2 = dx * dx + dz * dz
        const t = l2 > 0 ? clamp(((fx - s.ax) * dx + (fz - s.az) * dz) / l2, 0, 1) : 0
        if (Math.hypot(s.ax + dx * t - fx, s.az + dz * t - fz) - s.half < needed) return false
      }
      return true
    }

    const plinthBatch = new Batch()
    const plinthMat = material('concrete', '#b9b6ae')
    const matSpecs = new Map()
    const shadeSpec = { material: null, vCount: 0, iCount: 0, vCursor: 0, iCursor: 0 }
    const countMat = (mat, castShadow, receiveShadow, vN, iN) => {
      let entry = matSpecs.get(mat)
      if (!entry) {
        entry = { material: mat, castShadow, receiveShadow, vCount: 0, iCount: 0, vCursor: 0, iCursor: 0 }
        matSpecs.set(mat, entry)
      }
      entry.vCount += vN
      entry.iCount += iN
    }
    const v = (x, y, z) => new THREE.Vector3(x, y, z)
    const records = new Array(win.buildings.length)

    // Pass 1: resolve/compile archetypes (yielding on cache miss) and sum exact buffer sizes.
    for (let idx = 0; idx < win.buildings.length; idx++) {
      const building = win.buildings[idx]
      const c = building.corners
      const bcx = (c[0] + c[2] + c[4] + c[6]) * 0.25
      const bcz = (c[1] + c[3] + c[5] + c[7]) * 0.25
      const corners = [[c[0], c[1]], [c[2], c[3]], [c[4], c[5]], [c[6], c[7]]]
      let low = Infinity
      let high = -Infinity
      for (const [x, z] of corners) {
        const h = heightIn(win, x, z) - datum
        low = Math.min(low, h)
        high = Math.max(high, h)
      }
      const base = low - 0.45
      const padY = high + 0.04
      const ring = corners.map(([x, z]) => [x - origin[0], z - origin[1]])
      const cx = (ring[0][0] + ring[1][0] + ring[2][0] + ring[3][0]) * 0.25
      const cz = (ring[0][1] + ring[1][1] + ring[2][1] + ring[3][1]) * 0.25

      const widthM = Math.hypot(ring[1][0] - ring[0][0], ring[1][1] - ring[0][1]) || 1
      const depthM = Math.hypot(ring[3][0] - ring[0][0], ring[3][1] - ring[0][1]) || 1

      const oxRaw = ring[0][0] - ring[3][0]
      const ozRaw = ring[0][1] - ring[3][1]
      const oLen = Math.hypot(oxRaw, ozRaw) || 1
      const outX = oxRaw / oLen
      const outZ = ozRaw / oLen
      const rightX = outZ
      const rightZ = -outX

      const frontClear = building.use === USE.LOW
        ? hasFrontRoom((c[0] + c[2]) * 0.5, (c[1] + c[3]) * 0.5, 1.55)
        : false
      const era = eraIn(win, bcx, bcz)
      const specInfo = archetypeSpec(building.use, era, building.floors, widthM, depthM, building.tone ?? 0.5, frontClear)
      const cacheMiss = !archetypeCache.has(specInfo.key)
      const arch = getBuildingArchetype(specInfo)
      if (cacheMiss) yield

      for (const part of arch.parts) {
        const vN = part.positions.length / 3
        const iN = part.indices.length
        if (part.isShade) {
          shadeSpec.material ??= part.material
          shadeSpec.vCount += vN
          shadeSpec.iCount += iN
        } else {
          countMat(part.material, part.castShadow, part.receiveShadow, vN, iN)
        }
      }

      const sx = widthM / arch.bw
      const sz = depthM / arch.bd
      records[idx] = {
        arch, ring, cx, cz, rightX, rightZ, outX, outZ, base, padY, widthM, depthM,
        sx, sz, invSx: 1 / sx, invSz: 1 / sz,
      }
      solids.push({ ring, base, top: padY + arch.totalHeight })
      if ((idx & 63) === 63) yield
    }

    // Pass 2: allocate exact typed buffers upfront and stamp geometry with zero array reallocation.
    for (const entry of matSpecs.values()) {
      entry.positions = new Float32Array(entry.vCount * 3)
      entry.normals = new Float32Array(entry.vCount * 3)
      entry.uvs = new Float32Array(entry.vCount * 2)
      entry.indices = new Uint32Array(entry.iCount)
    }
    if (shadeSpec.vCount > 0) {
      shadeSpec.positions = new Float32Array(shadeSpec.vCount * 3)
      shadeSpec.shades = new Float32Array(shadeSpec.vCount)
      shadeSpec.indices = new Uint32Array(shadeSpec.iCount)
    }

    for (let idx = 0; idx < records.length; idx++) {
      const rec = records[idx]
      const { arch, cx, cz, rightX, rightZ, outX, outZ, base, padY, widthM, depthM, sx, sz, invSx, invSz } = rec
      const hx = arch.bw * 0.5
      const hz = arch.bd * 0.5

      const frontPad = arch.compactYard ? 0.06 : 1.28
      const sidePad = arch.compactYard ? 0.06 : 0.36
      const hW = widthM * 0.5 + sidePad
      const fZ = depthM * 0.5 + frontPad
      const bZ = -(depthM * 0.5 + sidePad)
      const pt = (lx, y, lz) => v(cx + rightX * lx + outX * lz, y, cz + rightZ * lx + outZ * lz)
      const pRing = [[-hW, bZ], [hW, bZ], [hW, fZ], [-hW, fZ]]
      plinthBatch.quad(plinthMat, pt(pRing[0][0], padY, pRing[0][1]), pt(pRing[1][0], padY, pRing[1][1]), pt(pRing[2][0], padY, pRing[2][1]), pt(pRing[3][0], padY, pRing[3][1]), UP)
      for (let k = 0; k < 4; k++) {
        const [ax, az] = pRing[k]
        const [bx, bz] = pRing[(k + 1) % 4]
        const ml = (ax + bx) * 0.5
        const mz = (az + bz) * 0.5
        const fvec = v(rightX * ml + outX * mz, 0, rightZ * ml + outZ * mz).normalize()
        plinthBatch.quad(plinthMat, pt(ax, base, az), pt(bx, base, bz), pt(bx, padY, bz), pt(ax, padY, az), fvec)
      }

      for (const part of arch.parts) {
        const srcPos = part.positions
        const srcIdx = part.indices
        const vertCount = srcPos.length / 3
        if (part.isShade) {
          const baseVert = shadeSpec.vCursor
          const dstP = shadeSpec.positions
          const dstS = shadeSpec.shades
          const srcS = part.shades
          let pOff = baseVert * 3
          let sOff = baseVert
          for (let i = 0; i < vertCount; i++) {
            const lx = srcPos[i * 3]
            const ly = srcPos[i * 3 + 1]
            const lz = srcPos[i * 3 + 2]
            const mx = lx > hx ? hx * sx + Math.min(lx - hx, 0.42) : lx < -hx ? -hx * sx + Math.max(lx + hx, -0.42) : lx * sx
            const mz = lz > hz ? hz * sz + Math.min(lz - hz, 1.38) : lz < -hz ? -hz * sz + Math.max(lz + hz, -0.42) : lz * sz
            dstP[pOff++] = cx + rightX * mx + outX * mz
            dstP[pOff++] = padY + ly
            dstP[pOff++] = cz + rightZ * mx + outZ * mz
            dstS[sOff++] = srcS[i]
          }
          shadeSpec.vCursor = baseVert + vertCount
          const dstIdx = shadeSpec.indices
          let iOff = shadeSpec.iCursor
          for (let i = 0; i < srcIdx.length; i++) dstIdx[iOff++] = baseVert + srcIdx[i]
          shadeSpec.iCursor = iOff
        } else {
          const entry = matSpecs.get(part.material)
          const baseVert = entry.vCursor
          const dstP = entry.positions
          const dstN = entry.normals
          const dstUv = entry.uvs
          const srcN = part.normals
          const srcUv = part.uvs
          let pOff = baseVert * 3
          let nOff = baseVert * 3
          let uOff = baseVert * 2
          for (let i = 0; i < vertCount; i++) {
            const lx = srcPos[i * 3]
            const ly = srcPos[i * 3 + 1]
            const lz = srcPos[i * 3 + 2]
            const mx = lx > hx ? hx * sx + Math.min(lx - hx, 0.42) : lx < -hx ? -hx * sx + Math.max(lx + hx, -0.42) : lx * sx
            const mz = lz > hz ? hz * sz + Math.min(lz - hz, 1.38) : lz < -hz ? -hz * sz + Math.max(lz + hz, -0.42) : lz * sz
            dstP[pOff++] = cx + rightX * mx + outX * mz
            dstP[pOff++] = padY + ly
            dstP[pOff++] = cz + rightZ * mx + outZ * mz

            const nlx = srcN[i * 3] * (lx >= -hx && lx <= hx ? invSx : 1)
            const nly = srcN[i * 3 + 1]
            const nlz = srcN[i * 3 + 2] * (lz >= -hz && lz <= hz ? invSz : 1)
            const nx = rightX * nlx + outX * nlz
            const nz = rightZ * nlx + outZ * nlz
            const invLen = 1 / (Math.hypot(nx, nly, nz) || 1)
            dstN[nOff++] = nx * invLen
            dstN[nOff++] = nly * invLen
            dstN[nOff++] = nz * invLen
            dstUv[uOff++] = srcUv[i * 2]
            dstUv[uOff++] = srcUv[i * 2 + 1]
          }
          entry.vCursor = baseVert + vertCount
          const dstIdx = entry.indices
          let iOff = entry.iCursor
          for (let i = 0; i < srcIdx.length; i++) dstIdx[iOff++] = baseVert + srcIdx[i]
          entry.iCursor = iOff
        }
      }

      if ((idx % 48) === 47) yield
    }

    const node = new THREE.Group()
    node.name = 'region-buildings'
    plinthBatch.build(node, { cast: true, receive: true, where: 'out' })
    for (const entry of matSpecs.values()) {
      if (!entry.iCount) continue
      const geom = new THREE.BufferGeometry()
      geom.setAttribute('position', new THREE.BufferAttribute(entry.positions, 3))
      geom.setAttribute('normal', new THREE.BufferAttribute(entry.normals, 3))
      geom.setAttribute('uv', new THREE.BufferAttribute(entry.uvs, 2))
      geom.setIndex(new THREE.BufferAttribute(entry.indices, 1))
      const mesh = new THREE.Mesh(geom, entry.material)
      mesh.castShadow = entry.castShadow && !entry.material.transparent
      mesh.receiveShadow = entry.receiveShadow
      node.add(mesh)
    }
    if (shadeSpec.iCount && shadeSpec.material) {
      const shadeGeom = new THREE.BufferGeometry()
      shadeGeom.setAttribute('position', new THREE.BufferAttribute(shadeSpec.positions, 3))
      shadeGeom.setAttribute('shade', new THREE.BufferAttribute(shadeSpec.shades, 1))
      shadeGeom.setIndex(new THREE.BufferAttribute(shadeSpec.indices, 1))
      const shadeMesh = new THREE.Mesh(shadeGeom, shadeSpec.material)
      shadeMesh.renderOrder = -1
      node.add(shadeMesh)
    }
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
          ribbon(batch, paint, win, [ax + (bx - ax) * f0, az + (bz - az) * f0, ax + (bx - ax) * f1, az + (bz - az) * f1], width, origin, datum, { lift: 0.30, step: 4 })
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
        ribbon(batch, paint, win, [segments[k], segments[k + 1], segments[k + 2], segments[k + 3]], 2.4, origin, datum, { lift: 0.34, side0: 0, side1: 1, step: 4 })
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
      batch.quad(stone, v(pave.x0, pave.y + 0.03, pave.z0), v(pave.x0, pave.y + 0.03, pave.z1), v(pave.x1, pave.y + 0.03, pave.z1), v(pave.x1, pave.y + 0.03, pave.z0), UP)
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
      let waterSurface = null
      if (!coarse) {
        const waterBuilt = yield* buildWater(win, origin, datum, coarse)
        if (waterBuilt.node.children.length) pending.add(waterBuilt.node)
        waterSurface = waterBuilt.waterSurface
      }
      if (roads) pending.add(coarse ? yield* buildOverviewRoads(win, origin, datum) : yield* buildRoads(win, origin, datum))
      const { node, solids } = yield* buildBuildings(win, origin, datum)
      if (win.buildings.length) pending.add(node)
      if (borders) pending.add(yield* buildBorders(win, origin, datum))
      if (outlines.length) pending.add(yield* buildOutlines(win, origin, datum, outlines))
      if (walls.length || paving.length) pending.add(yield* buildPads(win, origin, datum, walls, paving))
      return { win, origin, datum, solids, ground, waterSurface }
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

  // Leaves out the ground (and water surface) under `hole` (region metres; null for none).
  function setHole(hole) {
    if (!shown) return
    shown.ground.geometry.setIndex(groundIndex(shown.win, hole))
    if (shown.waterSurface) {
      shown.waterSurface.mesh.geometry.setIndex(indexedCells(shown.win, hole, shown.waterSurface.cells))
    }
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
