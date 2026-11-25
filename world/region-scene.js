// The region's land in the 3D view, from a window cut by public/region/window.js: the ground
// over its real heights, coloured by what covers it; smooth rivers and streams with masonry
// revetments; the main roads (carriageway, kerbs, pavements and lane markings) and local streets
// with cross-river bridges and culverts; buildings generated directly through the game's built-in
// architecture system (plans.js + buildings.js); and district borders.
// Scene metres are region metres minus `origin`; heights are region heights minus `datum`.
import * as THREE from 'three'
import { createBuilding, SHOP_HOUSES } from './buildings.js'
import { boundsOf } from './design.js'
import { Batch, disposeGroup, finishMaterial, material, waterNormals } from './kit.js'
import { compileDesign, defaultPlan, extraPlan } from './plans.js'

// Land use as numbered by public/region/develop.js (USE).
const USE = { WATER: 0, RIVERBED: 1, FOREST: 2, GREEN: 3, FIELD: 4, PADDY: 5, PARK: 6, LOW: 7, DENSE: 8, MID: 9, HIGH: 10, COMMERCIAL: 11, INDUSTRIAL: 12, PUBLIC: 13, ROADSIDE_COM: 14, STATION_HUB: 15 }
const ROAD = { COLLECTOR: 2, ARTERIAL: 3, TRUNK: 4 }
const UP = new THREE.Vector3(0, 1, 0)

// Shop fascia signboard colors matching sim/history-db.js SHOP_TYPES (id 0..44; 44 = shuttered vacant).
const SHOP_SIGN_COLORS = {
  0: '#4b3621', 1: '#6f421f', 2: '#3f2a1d', 3: '#8d6b28', 4: '#3a5743', 5: '#6d3048', 6: '#404852',
  7: '#1f5a8c', 8: '#2d7d9a', 9: '#5c246b', 10: '#2d7a2d', 11: '#1f5c87', 12: '#912924', 13: '#c75d24',
  14: '#9c6626', 15: '#26466d', 16: '#1a5a8a', 17: '#a62626', 18: '#36658c', 19: '#a63a68',
  20: '#8c1438', 21: '#b52e1c', 22: '#c94a14', 23: '#008c5a', 24: '#0c63a8', 25: '#246328', 26: '#124694',
  27: '#c42b6e', 28: '#9c1646', 29: '#7a1236', 30: '#1a3275', 31: '#5c3820', 32: '#b84b14', 33: '#c9341a',
  34: '#8f2419', 35: '#1f6e4a', 36: '#c95c14', 37: '#a34486', 38: '#1f5394', 39: '#128277', 40: '#367d39',
  41: '#5c34a6', 42: '#b58d12', 43: '#1c6d8f', 44: '#52575e',
}
const SHOP_SIGN_MATS = new Map()
function shopSignMat(shopType) {
  let m = SHOP_SIGN_MATS.get(shopType)
  if (!m) {
    const col = SHOP_SIGN_COLORS[shopType] ?? '#8f2419'
    m = material(col, '#ffffff', { roughness: shopType === 44 ? 0.65 : 0.32, metalness: shopType === 44 ? 0.52 : 0.14 })
    SHOP_SIGN_MATS.set(shopType, m)
  }
  return m
}

// Ground palette: urban Japanese residences show warm earth, crushed gravel & paving among yards.
const GROUND = {
  [USE.WATER]: '#3b738f', [USE.RIVERBED]: '#96947e', [USE.FOREST]: '#486535', [USE.GREEN]: '#678646',
  [USE.FIELD]: '#9d8658', [USE.PADDY]: '#869d54', [USE.PARK]: '#6c9148', [USE.LOW]: '#7f8368',
  [USE.DENSE]: '#89867b', [USE.MID]: '#86877c', [USE.HIGH]: '#8e8e88', [USE.COMMERCIAL]: '#98948a',
  [USE.INDUSTRIAL]: '#8f8e86', [USE.PUBLIC]: '#b2a177', [USE.ROADSIDE_COM]: '#8d8c87', [USE.STATION_HUB]: '#9a9894',
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
// (`era <= 3` pre-war/old core, `4..6` Showa high-growth, `>= 7` Heisei/Reiwa modern suburbs),
// household tier (`0..4` from compact urban homes up to rare grand estates),
// and quantizes tall slabs so dense urban areas reuse shared archetypes without stalling.
function archetypeSpec(use, era, tier, floors, widthM, depthM, tone, frontClear, shopType = 255) {
  const idx = Math.round(clamp(tone, 0, 1) * 255)
  const pStyle = idx / 255
  const hMix = ((Math.imul(idx, 1103515245) + 12345) >>> 16) & 255
  const variant = hMix % 6
  const v2 = variant & 1
  const v3 = variant % 3
  const v4 = variant & 3
  const eraBand = era <= 3 ? 'old' : era <= 6 ? 'mid' : 'new'
  // Exterior yards, fences, driveways and trees are placed per parcel in buildBuildings,
  // so building archetypes only emit compact porch/door steps flush with the house plinth.
  const compactYard = true

  if (use === USE.LOW || use === USE.DENSE) {
    // Tier 4: Rare grand estate residence (豪邸 — consolidated compound mansion).
    if (tier === 4 && use === USE.LOW && widthM >= 10.2 && depthM >= 8.2) {
      const japChance = eraBand === 'old' ? 0.65 : eraBand === 'mid' ? 0.45 : 0.34
      const style = pStyle < japChance ? 'japan' : pStyle >= 0.78 ? 'europe' : 'modern'
      const look = style === 'japan'
        ? { wall: JAP_WALLS[v2], roof: 'roof-kawara-dark', roofKind: 'hip', eave: 0.32, low: true }
        : style === 'europe'
          ? { wall: EUR_WALLS[v2], roof: 'roof-tile-brown', roofKind: 'hip', eave: 0.30, low: true }
          : { wall: v2 ? 'mortar-cream' : 'tile-beige', roof: 'roof-slate', roofKind: 'hip', eave: 0.30, low: true }
      const lookTag = `${look.wall}|${look.roof}|${look.roofKind}|${look.eave}`
      return {
        key: `estate|${style}|${v2}|${lookTag}`,
        spec: { id: `reg-estate-${style}-${variant}`, style, w: 2, d: 2, ...extraPlan('estate', 2, 2, 2, v2), look },
        compactYard,
      }
    }

    // Tier 3: Large affluent L/bay detached home on spacious lot.
    if (tier === 3 && widthM >= 8.6 && depthM >= 6.8) {
      const japShare = eraBand === 'old' ? 0.50 : eraBand === 'mid' ? 0.26 : 0.14
      const style = pStyle < japShare ? 'japan' : pStyle >= 0.88 ? 'europe' : 'modern'
      const f = style === 'japan' ? 2 : clamp(Math.round(floors), 2, 3)
      const look = style === 'japan'
        ? { wall: JAP_WALLS[v4], roof: JAP_ROOFS[v2], roofKind: v2 ? 'gable' : 'hip', eave: 0.30, low: true }
        : style === 'europe'
          ? { wall: EUR_WALLS[v4], roof: v2 ? 'roof-tile-brown' : 'roof-tile-orange', eave: 0.28, low: true }
          : { wall: MOD_WALLS[variant % MOD_WALLS.length], roof: MOD_ROOFS[v3], roofKind: v2 ? 'hip' : 'gable', eave: 0.28, low: true }
      const lookTag = `${look.wall}|${look.roof}|${look.roofKind || ''}|${look.eave || ''}`
      return {
        key: `large|${style}|${f}|${v2}|${lookTag}`,
        spec: { id: `reg-large-${style}-${variant}`, style, w: 2, d: 2, ...extraPlan('large', 2, 2, f, v2), look },
        compactYard,
      }
    }

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
      const tw = widthM >= 11.2 ? 2 : 1
      return {
        key: `apart|${tw}|${f}|${v3}`,
        spec: {
          id: `reg-apart-${tw}-${f}-${v3}`, style: 'modern', w: tw, d: 1,
          ...extraPlan('apart', tw, 1, f, v3),
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
      look.eave = 0.30
      look.low = true
    } else if (style === 'modern') {
      look.wall = MOD_WALLS[variant % MOD_WALLS.length]
      look.roof = eraBand === 'new' ? MOD_ROOFS[v3] : (v2 ? 'roof-slate' : 'roof-metal')
      look.roofKind = variant === 0 ? 'shed' : (v3 === 1 ? 'hip' : 'gable')
      look.eave = eraBand === 'new' && variant < 3 ? 0.22 : 0.28
      look.low = f <= 2
    } else {
      look.wall = EUR_WALLS[v4]
      look.roof = v2 ? 'roof-tile-brown' : 'roof-tile-orange'
      look.eave = 0.28
      look.low = f <= 2
    }
    const tw = (widthM >= 9.2 && depthM >= 5.5 && tier <= 2) ? 2 : 1
    const td = (tw === 2 && depthM >= 8.2) ? 2 : 1
    const lookTag = `${look.wall}|${look.roof}|${look.roofKind || ''}|${look.eave || ''}`
    return {
      key: `det|${tw}x${td}|${style}|${f}|${v2}|${lookTag}|${compactYard ? 'c' : 'f'}`,
      spec: { id: `reg-det-${tw}x${td}-${variant}`, style, w: tw, d: td, ...defaultPlan(style, tw, td, f, v2), look },
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

  if (use === USE.STATION_HUB || shopType === 20 || shopType === 28 || shopType === 29) {
    // Major station-front commercial redevelopment / department store / shopping mall
    const w = clamp(Math.round(widthM / 9.0), 2, 3)
    const d = depthM >= 14 ? 2 : 1
    const f = nearestVal(floors, [4, 6, 8, 10, 14])
    const wall = shopType === 20 ? 'tile-beige' : COM_WALLS[v4]
    return {
      key: `hub|office|${w}|${d}|${f}|${wall}`,
      spec: {
        id: `reg-hub-${v4}`, style: 'office', w, d,
        floors: defaultPlan('office', w, d, f, 0).floors,
        look: { wall, rail: 'glass' },
      },
      compactYard: true,
    }
  }

  if (use === USE.ROADSIDE_COM || shopType === 21 || shopType === 22 || shopType === 24 || shopType === 25 || shopType === 26 || shopType === 32) {
    // Roadside supermarket, GMS, drugstore, home center, electronics big-box, or family restaurant
    const w = clamp(Math.round(widthM / 9.0), 1, 3)
    const d = depthM >= 13 ? 2 : 1
    const f = nearestVal(floors, [1, 2, 3, 4])
    const wall = (shopType === 24 || shopType === 26) ? 'siding-white' : (shopType === 22 || shopType === 21 ? 'tile-white' : COM_WALLS[v3])
    return {
      key: `rcom|office|${w}|${d}|${f}|${wall}`,
      spec: {
        id: `reg-rcom-${v3}`, style: 'office', w, d,
        floors: defaultPlan('office', w, d, f, 0).floors,
        look: { wall, roofKind: 'flat', rail: 'solid' },
      },
      compactYard: true,
    }
  }

  if (shopType === 0 || shopType === 1 || shopType === 2 || shopType === 7) {
    // Historic Edo machiya / traditional sento bathhouse
    const wall = JAP_WALLS[v2]
    const f = clamp(Math.round(floors), 1, 2)
    return {
      key: `tradshop|machiya|${f}|${v2}|${wall}`,
      spec: {
        id: `reg-tradshop-${v2}`, style: 'japan', w: 1, d: 1,
        ...extraPlan('machiya', 1, 1, f, v2),
        look: { wall, roof: 'roof-kawara-dark', roofKind: 'gable', eave: 0.42, low: true },
      },
      compactYard: true,
    }
  }

  if (use === USE.COMMERCIAL || (shopType !== 255 && shopType >= 0)) {
    if (shopType === 35 || (floors <= 2 && widthM <= 10.5 && (shopType === 23 || shopType === 33 || pStyle < 0.34))) {
      const base = (shopType === 35 || (shopType === 255 && v2 === 1)) ? SHOP_HOUSES.cafe : SHOP_HOUSES.shop
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

  // Merge meshes sharing the same material and shadow flags so each archetype emits ~4–6 GPU
  // parts instead of ~15–25 while keeping every original vertex, normal, UV and triangle intact.
  const mergedParts = []
  let shadeGroup = null
  const solidBuckets = new Map()
  for (const part of parts) {
    if (part.isShade) {
      if (!shadeGroup) shadeGroup = { material: part.material, items: [] }
      shadeGroup.items.push(part)
      continue
    }
    const keyPart = `${part.castShadow ? 1 : 0}${part.receiveShadow ? 1 : 0}`
    let byMat = solidBuckets.get(part.material)
    if (!byMat) { byMat = new Map(); solidBuckets.set(part.material, byMat) }
    let list = byMat.get(keyPart)
    if (!list) {
      list = { isShade: false, material: part.material, castShadow: part.castShadow, receiveShadow: part.receiveShadow, items: [] }
      byMat.set(keyPart, list)
    }
    list.items.push(part)
  }
  for (const byMat of solidBuckets.values()) {
    for (const bucket of byMat.values()) {
      if (bucket.items.length === 1) {
        mergedParts.push(bucket.items[0])
        continue
      }
      let vTotal = 0
      let iTotal = 0
      for (const item of bucket.items) {
        vTotal += item.positions.length / 3
        iTotal += item.indices.length
      }
      const positions = new Float32Array(vTotal * 3)
      const normals = new Float32Array(vTotal * 3)
      const uvs = new Float32Array(vTotal * 2)
      const indices = new Uint32Array(iTotal)
      let vCursor = 0
      let iCursor = 0
      for (const item of bucket.items) {
        const count = item.positions.length / 3
        positions.set(item.positions, vCursor * 3)
        normals.set(item.normals, vCursor * 3)
        uvs.set(item.uvs, vCursor * 2)
        const srcIdx = item.indices
        for (let k = 0; k < srcIdx.length; k++) indices[iCursor++] = vCursor + srcIdx[k]
        vCursor += count
      }
      mergedParts.push({
        isShade: false,
        material: bucket.material,
        castShadow: bucket.castShadow,
        receiveShadow: bucket.receiveShadow,
        positions,
        normals,
        uvs,
        indices,
      })
    }
  }
  if (shadeGroup) {
    if (shadeGroup.items.length === 1) {
      mergedParts.push(shadeGroup.items[0])
    } else {
      let vTotal = 0
      let iTotal = 0
      for (const item of shadeGroup.items) {
        vTotal += item.positions.length
        iTotal += item.indices.length
      }
      vTotal /= 3
      const positions = new Float32Array(vTotal * 3)
      const shades = new Float32Array(vTotal)
      const indices = new Uint32Array(iTotal)
      let vCursor = 0
      let iCursor = 0
      for (const item of shadeGroup.items) {
        const count = item.positions.length / 3
        positions.set(item.positions, vCursor * 3)
        shades.set(item.shades, vCursor)
        const srcIdx = item.indices
        for (let k = 0; k < srcIdx.length; k++) indices[iCursor++] = vCursor + srcIdx[k]
        vCursor += count
      }
      mergedParts.push({ isShade: true, material: shadeGroup.material, positions, shades, indices })
    }
  }

  const entry = { bw, bd, totalHeight, compactYard, parts: mergedParts, instancedParts: null }
  archetypeCache.set(key, entry)
  return entry
}

let distantGlassMat = null
function distantMaterial(mat) {
  const key = mat?.customProgramCacheKey?.()
  if (typeof key !== 'string' || !key.startsWith('machi-glass-')) return mat
  if (!distantGlassMat) {
    distantGlassMat = new THREE.MeshStandardMaterial({
      color: '#344b60',
      roughness: 0.16,
      metalness: 0.78,
      envMapIntensity: 1.25,
    })
  }
  return distantGlassMat
}

function getInstancedParts(arch) {
  if (arch.instancedParts) return arch.instancedParts
  const out = []
  for (const part of arch.parts) {
    if (part.isShade) continue
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(part.positions, 3))
    geom.setAttribute('normal', new THREE.BufferAttribute(part.normals, 3))
    geom.setAttribute('uv', new THREE.BufferAttribute(part.uvs, 2))
    geom.setIndex(new THREE.BufferAttribute(part.indices, 1))
    geom.computeBoundingBox()
    geom.computeBoundingSphere()
    out.push({ material: distantMaterial(part.material), geometry: geom })
  }
  arch.instancedParts = out
  return out
}

let sharedPlinthUnitBox = null
function plinthUnitBox() {
  if (!sharedPlinthUnitBox) sharedPlinthUnitBox = new THREE.BoxGeometry(1, 1, 1)
  return sharedPlinthUnitBox
}

// Renders streamed `2000 m` building tiles outside `nearBox` up to 10 km+ using full, unsimplified
// `getBuildingArchetype` geometry shared via GPU `InstancedMesh`es (`2000 m` sectors round `nearBox`
// for instant movement updates; merged `4000 m` quadrants farther out to keep draw calls low).
export function createDistantBuildings({ frameBudget = 6 } = {}) {
  const group = new THREE.Group()
  group.name = 'region-distant-buildings'
  const plinthMat = material('concrete', '#b9b6ae')
  const tiles = new Map()
  const sectors = new Map()
  const dirtySectors = new Set()
  const cornerBuf = new Float32Array(8)
  const cornerWrapper = { corners: cornerBuf }

  let origin = [0, 0]
  let datum = 0
  let nearBox = null
  let keepFilter = null
  let active = true
  let paused = false
  let buildRunning = false
  let rebuildTimer = null
  let worldRevision = 0
  const sectorRevisions = new Map()
  const yieldFrame = () => new Promise((resolve) => {
    let done = false
    const finish = () => { if (!done) { done = true; resolve() } }
    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(finish)
    setTimeout(finish, 24)
  })

  const overlaps = (ax0, az0, ax1, az1, bx0, bz0, bx1, bz1) => ax0 <= bx1 && bx0 <= ax1 && az0 <= bz1 && bz0 <= az1
  const tileBox = (tx, tz, size = 2000) => ({ x0: tx * size, z0: tz * size, x1: (tx + 1) * size, z1: (tz + 1) * size })

  function quadrantTouchesNear(qx, qz) {
    if (!nearBox) return false
    return overlaps(qx * 4000, qz * 4000, (qx + 1) * 4000, (qz + 1) * 4000, nearBox.x0, nearBox.z0, nearBox.x1, nearBox.z1)
  }

  function disposeSectorNode(node) {
    for (const child of [...node.children]) {
      if (child.isInstancedMesh) {
        // Shared archetype BufferGeometries & shared materials stay cached; clear only per-sector references.
        child.dispose?.()
      }
      node.remove(child)
    }
  }

  function dropSector(key) {
    const existing = sectors.get(key)
    if (!existing) return
    group.remove(existing.node)
    disposeSectorNode(existing.node)
    sectors.delete(key)
  }

  function sectorSpecForKey(key) {
    if (key.startsWith('t:')) {
      const [tx, tz] = key.slice(2).split(',').map(Number)
      const qx = Math.floor(tx / 2)
      const qz = Math.floor(tz / 2)
      if (!quadrantTouchesNear(qx, qz)) return null
      const tile = tiles.get(`${tx},${tz}`)
      return tile && tile.count > 0 ? [tile] : null
    }
    const [qx, qz] = key.slice(2).split(',').map(Number)
    if (quadrantTouchesNear(qx, qz)) return null
    const list = []
    for (let dz = 0; dz < 2; dz++) {
      for (let dx = 0; dx < 2; dx++) {
        const tile = tiles.get(`${qx * 2 + dx},${qz * 2 + dz}`)
        if (tile && tile.count > 0) list.push(tile)
      }
    }
    return list.length ? list : null
  }

  function keysForTile(tx, tz) {
    const qx = Math.floor(tx / 2)
    const qz = Math.floor(tz / 2)
    return quadrantTouchesNear(qx, qz) ? `t:${tx},${tz}` : `q:${qx},${qz}`
  }

  function scheduleAllLoaded() {
    dirtySectors.clear()
    for (const key of [...sectors.keys()]) {
      if (!sectorSpecForKey(key)) dropSector(key)
    }
    for (const tile of tiles.values()) {
      dirtySectors.add(keysForTile(tile.tx, tile.tz))
    }
    kickRebuild()
  }

  function kickRebuild(immediate = false) {
    if (buildRunning || !active || paused || !dirtySectors.size) return
    if (rebuildTimer) clearTimeout(rebuildTimer)
    rebuildTimer = setTimeout(() => {
      rebuildTimer = null
      if (buildRunning || !active || paused || !dirtySectors.size) return
      buildRunning = true
      processQueue().catch(() => {}).finally(() => {
        buildRunning = false
        if (active && !paused && dirtySectors.size) kickRebuild(true)
      })
    }, immediate ? 0 : 120)
  }

  async function processQueue() {
    while (active && !paused && dirtySectors.size) {
      let nextKey = null
      for (const k of dirtySectors) {
        if (k.startsWith('t:')) { nextKey = k; break }
      }
      nextKey ??= dirtySectors.values().next().value
      dirtySectors.delete(nextKey)
      await buildSector(nextKey)
      await yieldFrame()
    }
  }

  async function buildSector(key) {
    const rev = worldRevision
    const sRev = (sectorRevisions.get(key) ?? 0) + 1
    sectorRevisions.set(key, sRev)
    const tileList = sectorSpecForKey(key)
    if (!tileList) {
      dropSector(key)
      return
    }
    const localNear = nearBox
    const localOrigin = origin
    const localDatum = datum
    const localFilter = keepFilter

    const byArch = new Map()
    const allPlinths = []
    let deadline = performance.now() + frameBudget

    for (const tile of tileList) {
      const { corners, baseY, padY, floors, uses, tiers, eras, tones, count } = tile
      const tBox = tileBox(tile.tx, tile.tz)
      const checkNear = localNear && overlaps(tBox.x0, tBox.z0, tBox.x1, tBox.z1, localNear.x0, localNear.z0, localNear.x1, localNear.z1)
      for (let i = 0; i < count; i++) {
        const o = i * 8
        const x0 = corners[o], z0 = corners[o + 1]
        const x1 = corners[o + 2], z1 = corners[o + 3]
        const x2 = corners[o + 4], z2 = corners[o + 5]
        const x3 = corners[o + 6], z3 = corners[o + 7]

        if (checkNear) {
          const ax = Math.min(x0, x1, x2, x3)
          const az = Math.min(z0, z1, z2, z3)
          const bx = Math.max(x0, x1, x2, x3)
          const bz = Math.max(z0, z1, z2, z3)
          if (overlaps(ax, az, bx, bz, localNear.x0, localNear.z0, localNear.x1, localNear.z1)) continue
        }
        if (localFilter) {
          cornerBuf.set(corners.subarray(o, o + 8))
          if (!localFilter(cornerWrapper)) continue
        }

        const rx0 = x0 - localOrigin[0], rz0 = z0 - localOrigin[1]
        const rx1 = x1 - localOrigin[0], rz1 = z1 - localOrigin[1]
        const rx2 = x2 - localOrigin[0], rz2 = z2 - localOrigin[1]
        const rx3 = x3 - localOrigin[0], rz3 = z3 - localOrigin[1]
        const cx = (rx0 + rx1 + rx2 + rx3) * 0.25
        const cz = (rz0 + rz1 + rz2 + rz3) * 0.25
        const widthM = Math.hypot(rx1 - rx0, rz1 - rz0) || 1
        const depthM = Math.hypot(rx3 - rx0, rz3 - rz0) || 1
        const oxRaw = rx0 - rx3
        const ozRaw = rz0 - rz3
        const oLen = Math.hypot(oxRaw, ozRaw) || 1
        const outX = oxRaw / oLen
        const outZ = ozRaw / oLen
        const rightX = outZ
        const rightZ = -outX
        const rawTone = tones[i]
        const tone = rawTone === 256 ? 0.5 : rawTone / 255
        const shopType = tile.shopTypes ? tile.shopTypes[i] : 255
        const specInfo = archetypeSpec(uses[i], eras[i], tiers[i], floors[i], widthM, depthM, tone, false, shopType)
        const arch = getBuildingArchetype(specInfo)
        const bY = baseY[i] - localDatum
        const pY = padY[i] - localDatum
        const rec = { arch, cx, cz, baseY: bY, padY: pY, widthM, depthM, rightX, rightZ, outX, outZ }
        let list = byArch.get(arch)
        if (!list) { list = []; byArch.set(arch, list) }
        list.push(rec)
        allPlinths.push(rec)

        if ((i & 127) === 127 && performance.now() >= deadline) {
          await yieldFrame()
          if (!active || rev !== worldRevision || sectorRevisions.get(key) !== sRev) return
          deadline = performance.now() + frameBudget
        }
      }
    }

    if (!active || rev !== worldRevision || sectorRevisions.get(key) !== sRev) return
    if (!allPlinths.length) {
      dropSector(key)
      return
    }

    const sectorNode = new THREE.Group()
    sectorNode.name = key
    sectorNode.matrixAutoUpdate = false
    sectorNode.updateMatrix()

    // 1. Combined instanced concrete foundation plinths extended below coarse far terrain.
    {
      const count = allPlinths.length
      const mesh = new THREE.InstancedMesh(plinthUnitBox(), plinthMat, count)
      const arr = mesh.instanceMatrix.array
      let minX = Infinity, minY = Infinity, minZ = Infinity
      let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity
      for (let i = 0; i < count; i++) {
        const r = allPlinths[i]
        const sidePad = r.arch.compactYard ? 0.08 : 0.36
        const frontPad = r.arch.compactYard ? 0.08 : 1.28
        const pW = r.widthM + sidePad * 2
        const pD = r.depthM + frontPad + sidePad
        const shiftO = (frontPad - sidePad) * 0.5
        const pX = r.cx + r.outX * shiftO
        const pZ = r.cz + r.outZ * shiftO
        const bottom = r.baseY - 3.0
        const height = Math.max(0.1, r.padY - bottom)
        const pY = bottom + height * 0.5
        const m = i * 16
        arr[m] = r.rightX * pW; arr[m + 1] = 0; arr[m + 2] = r.rightZ * pW; arr[m + 3] = 0
        arr[m + 4] = 0; arr[m + 5] = height; arr[m + 6] = 0; arr[m + 7] = 0
        arr[m + 8] = r.outX * pD; arr[m + 9] = 0; arr[m + 10] = r.outZ * pD; arr[m + 11] = 0
        arr[m + 12] = pX; arr[m + 13] = pY; arr[m + 14] = pZ; arr[m + 15] = 1
        const rXZ = (pW + pD) * 0.5
        if (pX - rXZ < minX) minX = pX - rXZ
        if (pX + rXZ > maxX) maxX = pX + rXZ
        if (bottom < minY) minY = bottom
        if (r.padY > maxY) maxY = r.padY
        if (pZ - rXZ < minZ) minZ = pZ - rXZ
        if (pZ + rXZ > maxZ) maxZ = pZ + rXZ
      }
      mesh.instanceMatrix.needsUpdate = true
      mesh.boundingBox = new THREE.Box3(new THREE.Vector3(minX, minY, minZ), new THREE.Vector3(maxX, maxY, maxZ))
      mesh.boundingSphere = mesh.boundingBox.getBoundingSphere(new THREE.Sphere())
      mesh.castShadow = false
      mesh.receiveShadow = false
      mesh.matrixAutoUpdate = false
      mesh.updateMatrix()
      sectorNode.add(mesh)
    }

    // 2. Full unsimplified `createBuilding` geometry instanced per archetype (all parts share one GPU instanceMatrix).
    for (const [arch, list] of byArch.entries()) {
      const parts = getInstancedParts(arch)
      if (!parts.length) continue
      const count = list.length
      const matrices = new Float32Array(count * 16)
      const sharedAttr = new THREE.InstancedBufferAttribute(matrices, 16)
      let minX = Infinity, minY = Infinity, minZ = Infinity
      let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity
      for (let i = 0; i < count; i++) {
        const r = list[i]
        const sx = r.widthM / arch.bw
        const sz = r.depthM / arch.bd
        const m = i * 16
        matrices[m] = r.rightX * sx; matrices[m + 1] = 0; matrices[m + 2] = r.rightZ * sx; matrices[m + 3] = 0
        matrices[m + 4] = 0; matrices[m + 5] = 1; matrices[m + 6] = 0; matrices[m + 7] = 0
        matrices[m + 8] = r.outX * sz; matrices[m + 9] = 0; matrices[m + 10] = r.outZ * sz; matrices[m + 11] = 0
        matrices[m + 12] = r.cx; matrices[m + 13] = r.padY; matrices[m + 14] = r.cz; matrices[m + 15] = 1
        const padXZ = Math.max(r.widthM, r.depthM) * 0.75 + 2.0
        if (r.cx - padXZ < minX) minX = r.cx - padXZ
        if (r.cx + padXZ > maxX) maxX = r.cx + padXZ
        if (r.padY - 0.5 < minY) minY = r.padY - 0.5
        if (r.padY + arch.totalHeight + 1.0 > maxY) maxY = r.padY + arch.totalHeight + 1.0
        if (r.cz - padXZ < minZ) minZ = r.cz - padXZ
        if (r.cz + padXZ > maxZ) maxZ = r.cz + padXZ
      }
      const box = new THREE.Box3(new THREE.Vector3(minX, minY, minZ), new THREE.Vector3(maxX, maxY, maxZ))
      const sphere = box.getBoundingSphere(new THREE.Sphere())
      for (const part of parts) {
        const mesh = new THREE.InstancedMesh(part.geometry, part.material, 0)
        mesh.instanceMatrix = sharedAttr
        mesh.count = count
        mesh.boundingBox = box
        mesh.boundingSphere = sphere
        mesh.castShadow = false
        mesh.receiveShadow = false
        mesh.frustumCulled = true
        mesh.matrixAutoUpdate = false
        mesh.updateMatrix()
        sectorNode.add(mesh)
      }
      if (performance.now() >= deadline) {
        await yieldFrame()
        if (!active || rev !== worldRevision || sectorRevisions.get(key) !== sRev) {
          disposeSectorNode(sectorNode)
          return
        }
        deadline = performance.now() + frameBudget
      }
    }

    if (!active || rev !== worldRevision || sectorRevisions.get(key) !== sRev) {
      disposeSectorNode(sectorNode)
      return
    }
    dropSector(key)
    group.add(sectorNode)
    sectors.set(key, { key, node: sectorNode })
  }

  return {
    group,
    hasTile: (tx, tz) => tiles.has(`${tx},${tz}`),
    loadedTileKeys: () => [...tiles.keys()],
    setView({ origin: nextOrigin = [0, 0], datum: nextDatum = 0 } = {}) {
      if (origin[0] === nextOrigin[0] && origin[1] === nextOrigin[1] && datum === nextDatum) return
      origin = nextOrigin
      datum = nextDatum
      worldRevision++
      scheduleAllLoaded()
    },
    setNearBox(nextNearBox) {
      const prev = nearBox
      nearBox = nextNearBox ? { ...nextNearBox } : null
      const touched = new Set()
      if (prev) {
        for (let qz = Math.floor(prev.z0 / 4000); qz <= Math.floor(prev.z1 / 4000); qz++) {
          for (let qx = Math.floor(prev.x0 / 4000); qx <= Math.floor(prev.x1 / 4000); qx++) touched.add(`${qx},${qz}`)
        }
      }
      if (nearBox) {
        for (let qz = Math.floor(nearBox.z0 / 4000); qz <= Math.floor(nearBox.z1 / 4000); qz++) {
          for (let qx = Math.floor(nearBox.x0 / 4000); qx <= Math.floor(nearBox.x1 / 4000); qx++) touched.add(`${qx},${qz}`)
        }
      }
      for (const qKey of touched) {
        const [qx, qz] = qKey.split(',').map(Number)
        if (quadrantTouchesNear(qx, qz)) {
          dropSector(`q:${qx},${qz}`)
          for (let dz = 0; dz < 2; dz++) {
            for (let dx = 0; dx < 2; dx++) {
              if (tiles.has(`${qx * 2 + dx},${qz * 2 + dz}`)) dirtySectors.add(`t:${qx * 2 + dx},${qz * 2 + dz}`)
            }
          }
        } else {
          let any = false
          for (let dz = 0; dz < 2; dz++) {
            for (let dx = 0; dx < 2; dx++) {
              dropSector(`t:${qx * 2 + dx},${qz * 2 + dz}`)
              if (tiles.has(`${qx * 2 + dx},${qz * 2 + dz}`)) any = true
            }
          }
          if (any) dirtySectors.add(`q:${qx},${qz}`)
        }
      }
      kickRebuild(true)
    },
    setFilter(fn) {
      keepFilter = fn ?? null
      worldRevision++
      scheduleAllLoaded()
    },
    addTile(tile) {
      const tKey = `${tile.tx},${tile.tz}`
      tiles.set(tKey, tile)
      const qx = Math.floor(tile.tx / 2)
      const qz = Math.floor(tile.tz / 2)
      if (quadrantTouchesNear(qx, qz)) {
        dropSector(`q:${qx},${qz}`)
        dirtySectors.add(`t:${tile.tx},${tile.tz}`)
      } else {
        dirtySectors.add(`q:${qx},${qz}`)
      }
      kickRebuild()
    },
    removeTile(tx, tz) {
      const tKey = `${tx},${tz}`
      if (!tiles.delete(tKey)) return
      const qx = Math.floor(tx / 2)
      const qz = Math.floor(tz / 2)
      if (quadrantTouchesNear(qx, qz)) {
        dropSector(`t:${tx},${tz}`)
      } else {
        dirtySectors.add(`q:${qx},${qz}`)
        kickRebuild()
      }
    },
    clear() {
      worldRevision++
      if (rebuildTimer) { clearTimeout(rebuildTimer); rebuildTimer = null }
      dirtySectors.clear()
      tiles.clear()
      for (const key of [...sectors.keys()]) dropSector(key)
    },
    setActive(value) {
      active = Boolean(value)
      group.visible = active && !paused
      if (!active) {
        if (rebuildTimer) { clearTimeout(rebuildTimer); rebuildTimer = null }
        dirtySectors.clear()
      }
    },
    setPaused(value) {
      const next = Boolean(value)
      if (paused === next) return
      paused = next
      group.visible = active && !paused
      if (!paused && active && dirtySectors.size) kickRebuild(true)
    },
    dispose() {
      active = false
      worldRevision++
      if (rebuildTimer) { clearTimeout(rebuildTimer); rebuildTimer = null }
      dirtySectors.clear()
      tiles.clear()
      for (const key of [...sectors.keys()]) dropSector(key)
    },
  }
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
            } else if (u === USE.LOW || u === USE.DENSE || u === USE.MID || u === USE.COMMERCIAL || u === USE.ROADSIDE_COM || u === USE.STATION_HUB) {
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
  function ribbon(batch, paint, win, source, width, origin, datum, { lift = 0.05, side0 = -1, side1 = 1, step = 6, dash = null, skirt = 0, bridge = false, omitAt = null } = {}) {
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
        const [px, pz] = dense[k - 1]
        const show = (!dash || (((dist[k - 1] + dist[k]) * 0.5) % dash[1] < dash[0])) && (!omitAt || !omitAt((px + x) * 0.5, (pz + z) * 0.5))
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
    const kerb = material('mortar', '#c6c4ba')
    const street = material('asphalt', '#d4d3cc')
    const laneSurface = material('asphalt', '#dfded8')
    // Residential alleys in Japan use weathered grey asphalt + concrete side gutters, not giant cream pavers.
    const alleySurface = material('asphalt', '#eae8e0')
    const gutter = material('mortar', '#cbc9c0')
    const grateMat = material('#43474b', '#ffffff', { roughness: 0.45, metalness: 0.72 })
    const lineWhite = material('#eeece2', '#ffffff', { roughness: 0.65 })
    const lineYellow = material('#e4a829', '#ffffff', { roughness: 0.62 })
    const bikeBlueMat = material('#2274b8', '#ffffff', { roughness: 0.52 })
    const medianGreenMat = material('#4f783e', '#ffffff', { roughness: 0.88 })
    const signalPoleMat = material('#4c5259', '#ffffff', { roughness: 0.45, metalness: 0.65 })
    const signalRedMat = material('#e03030', '#ffffff', { roughness: 0.35 })
    const signalYellowMat = material('#f0b429', '#ffffff', { roughness: 0.35 })
    const signalGreenMat = material('#14a060', '#ffffff', { roughness: 0.35 })
    const stopSignMat = material('#d62828', '#ffffff', { roughness: 0.42 })
    const railGuardMat = material('#e8ecef', '#ffffff', { roughness: 0.38, metalness: 0.55 })
    const fineStep = Math.min(2, win.step || 2)
    const { x0, z0, x1, z1 } = win.box

    // Pre-collect main road segments, intersections, and side-street mouths so kerbs/sidewalks/medians
    // trim cleanly at junctions instead of building barriers across intersecting carriageways.
    const roadSegs = []
    for (let rIdx = 0; rIdx < win.roads.length; rIdx++) {
      const road = win.roads[rIdx]
      const pts = road.points
      for (let k = 2; k < pts.length; k += 2) {
        const ax = pts[k - 2], az = pts[k - 1], bx = pts[k], bz = pts[k + 1]
        if (Math.max(ax, bx) < x0 - 25 || Math.min(ax, bx) > x1 + 25 || Math.max(az, bz) < z0 - 25 || Math.min(az, bz) > z1 + 25) continue
        roadSegs.push({ rIdx, kind: road.kind, width: road.width, ax, az, bx, bz })
      }
    }
    const majorCrossZones = []
    for (let i = 0; i < roadSegs.length; i++) {
      const A = roadSegs[i]
      for (let j = i + 1; j < roadSegs.length; j++) {
        const B = roadSegs[j]
        if (A.rIdx === B.rIdx) continue
        const hit = segHit(A.ax, A.az, A.bx, A.bz, B.ax, B.az, B.bx, B.bz)
        if (!hit) continue
        const rKeep = Math.max(A.width, B.width) * 0.5 + 3.2
        majorCrossZones.push({ x: hit.x, z: hit.z, rSq: rKeep * rKeep, rA: A.rIdx, rB: B.rIdx, radA: B.width * 0.5 + 1.8, radB: B.width * 0.5 + 1.8 })
      }
    }
    const streetMouthZones = []
    for (const lane of win.streets) {
      if (lane.width < 2.2) continue
      const pts = lane.points
      const ax = pts[0], az = pts[1], bx = pts[pts.length - 2], bz = pts[pts.length - 1]
      for (const [endX, endZ, otherX, otherZ] of [[ax, az, bx, bz], [bx, bz, ax, az]]) {
        if (endX < x0 - 20 || endX > x1 + 20 || endZ < z0 - 20 || endZ > z1 + 20) continue
        for (const rSeg of roadSegs) {
          const rdx = rSeg.bx - rSeg.ax, rdz = rSeg.bz - rSeg.az
          const rl2 = rdx * rdx + rdz * rdz
          const t = rl2 > 1e-6 ? clamp(((endX - rSeg.ax) * rdx + (endZ - rSeg.az) * rdz) / rl2, 0, 1) : 0
          const px = rSeg.ax + rdx * t, pz = rSeg.az + rdz * t
          if (Math.hypot(px - endX, pz - endZ) < rSeg.width * 0.5 + 3.2) {
            const rl = Math.sqrt(rl2) || 1
            const nx = -rdz / rl, nz = rdx / rl
            const sideSign = ((otherX - endX) * nx + (otherZ - endZ) * nz) >= 0 ? 1 : -1
            const mouthR = lane.width * 0.5 + 2.2
            streetMouthZones.push({ x: px, z: pz, rIdx: rSeg.rIdx, sideSign, rSq: mouthR * mouthR })
          }
        }
      }
    }

    // 1. Main roads (trunk, arterial, collector): kerbs/sidewalks/medians trim at intersections & side-street mouths.
    for (let rIdx = 0; rIdx < win.roads.length; rIdx++) {
      const road = win.roads[rIdx]
      const track = tracePolyline(win, road.points, fineStep, datum, { bridge: true })
      const walk = road.kind >= ROAD.ARTERIAL ? 3.5 : 2.5
      const kerbW = 0.25
      const share = clamp(1 - (2 * walk) / road.width, 0.2, 1)
      const kerbIn = clamp(share - (2 * kerbW) / road.width, 0.18, share)
      const mark = clamp(0.18 / road.width, 0.01, 0.05)
      const edgeLine = clamp(0.15 / road.width, 0.008, 0.035)
      const outerPos = kerbIn - edgeLine * 1.6
      const rf = road.regFlags ?? 0
      const hasMedian = Boolean((rf & 32) || road.centerlineType === 'median' || (road.kind >= ROAD.TRUNK && road.width >= 24))
      const noCenterline = Boolean((rf & 512) || road.centerlineType === 'none' || road.width < 5.5) && !hasMedian && road.kind < ROAD.COLLECTOR
      const yellowCenter = Boolean((rf & 256) || road.centerlineType === 'yellow_solid' || road.kind === ROAD.ARTERIAL) && !hasMedian && !noCenterline
      const hasBikeLane = Boolean(rf & 128)

      const roadCrosses = majorCrossZones.filter(c => c.rA === rIdx || c.rB === rIdx)
      const roadMouthsL = streetMouthZones.filter(m => m.rIdx === rIdx && m.sideSign < 0)
      const roadMouthsR = streetMouthZones.filter(m => m.rIdx === rIdx && m.sideSign > 0)
      const omitMark = roadCrosses.length ? (x, z) => {
        for (let i = 0; i < roadCrosses.length; i++) {
          const c = roadCrosses[i]
          const rad = c.rA === rIdx ? c.radB : c.radA
          const dx = x - c.x, dz = z - c.z
          if (dx * dx + dz * dz <= rad * rad) return true
        }
        return false
      } : null
      const makeOmitSide = (mouths) => (roadCrosses.length || mouths.length) ? (x, z) => {
        if (omitMark && omitMark(x, z)) return true
        for (let i = 0; i < mouths.length; i++) {
          const m = mouths[i]
          const dx = x - m.x, dz = z - m.z
          if (dx * dx + dz * dz <= m.rSq) return true
        }
        return false
      } : null
      const omitLeft = makeOmitSide(roadMouthsL)
      const omitRight = makeOmitSide(roadMouthsR)

      // Carriageway (continuous through junctions), raised kerbs & sidewalks (open cleanly at junctions).
      ribbon(batch, asphalt, win, track, road.width, origin, datum, { lift: 0.23, side0: -share, side1: share, step: fineStep })
      ribbon(batch, kerb, win, track, road.width, origin, datum, { lift: 0.30, side0: -share, side1: -kerbIn, step: fineStep, skirt: 0.16, omitAt: omitLeft })
      ribbon(batch, kerb, win, track, road.width, origin, datum, { lift: 0.30, side0: kerbIn, side1: share, step: fineStep, skirt: 0.16, omitAt: omitRight })
      ribbon(batch, pavement, win, track, road.width, origin, datum, { lift: 0.31, side0: -1, side1: -share, step: fineStep, skirt: 0.32, omitAt: omitLeft })
      ribbon(batch, pavement, win, track, road.width, origin, datum, { lift: 0.31, side0: share, side1: 1, step: fineStep, skirt: 0.32, omitAt: omitRight })

      // Left and right outer carriageway edge lines (車道外側線).
      ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.242, side0: -outerPos - edgeLine, side1: -outerPos + edgeLine, step: fineStep, omitAt: omitLeft })
      ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.242, side0: outerPos - edgeLine, side1: outerPos + edgeLine, step: fineStep, omitAt: omitRight })

      // Bicycle navigation band along inner outer-edge line (2012+ 道交法 自転車左端走行帯).
      if (hasBikeLane && outerPos > 0.25) {
        const bikeW = clamp(0.55 / road.width, 0.015, 0.045)
        const bikePos = outerPos - edgeLine - bikeW
        ribbon(batch, bikeBlueMat, win, track, road.width, origin, datum, { lift: 0.241, side0: -bikePos - bikeW, side1: -bikePos + bikeW, step: fineStep, dash: [3.0, 6.0], omitAt: omitMark })
        ribbon(batch, bikeBlueMat, win, track, road.width, origin, datum, { lift: 0.241, side0: bikePos - bikeW, side1: bikePos + bikeW, step: fineStep, dash: [3.0, 6.0], omitAt: omitMark })
      }

      // Median strip, solid yellow, or dashed white centerline obeying Road Structure Ordinance:
      if (hasMedian) {
        const medHalf = clamp(0.85 / road.width, 0.025, 0.075)
        const greenHalf = medHalf * 0.68
        ribbon(batch, kerb, win, track, road.width, origin, datum, { lift: 0.30, side0: -medHalf, side1: medHalf, step: fineStep, skirt: 0.14, omitAt: omitMark })
        ribbon(batch, medianGreenMat, win, track, road.width, origin, datum, { lift: 0.32, side0: -greenHalf, side1: greenHalf, step: fineStep, omitAt: omitMark })
        const lanePos = (medHalf + outerPos) * 0.5
        ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.242, side0: -lanePos - edgeLine, side1: -lanePos + edgeLine, step: fineStep, dash: [4.5, 10], omitAt: omitMark })
        ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.242, side0: lanePos - edgeLine, side1: lanePos + edgeLine, step: fineStep, dash: [4.5, 10], omitAt: omitMark })
      } else if (!noCenterline && yellowCenter) {
        ribbon(batch, lineYellow, win, track, road.width, origin, datum, { lift: 0.245, side0: -mark, side1: mark, step: fineStep, omitAt: omitMark })
        if (road.kind >= ROAD.ARTERIAL) {
          const lanePos = outerPos * 0.5
          ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.242, side0: -lanePos - edgeLine, side1: -lanePos + edgeLine, step: fineStep, dash: [4.5, 10], omitAt: omitMark })
          ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.242, side0: lanePos - edgeLine, side1: lanePos + edgeLine, step: fineStep, dash: [4.5, 10], omitAt: omitMark })
        }
      } else if (!noCenterline) {
        ribbon(batch, lineWhite, win, track, road.width, origin, datum, { lift: 0.245, side0: -mark, side1: mark, step: fineStep, dash: [4.5, 9.5], omitAt: omitMark })
      }

      // Guardrails along steep non-bridge gradient sections (> 5.5%).
      if (track.dense.length >= 4) {
        const gPad = 14
        const gOff = road.width * 0.5 - 0.35
        const { dense, nxArr, nzArr, bridgeKind } = track
        for (let k = 2; k < dense.length; k += 4) {
          if (bridgeKind?.[k] === 1) continue
          const [ax, az] = dense[k - 2]
          const [bx, bz] = dense[k]
          if (ax < x0 - gPad || ax > x1 + gPad || az < z0 - gPad || az > z1 + gPad) continue
          if (omitMark && omitMark((ax + bx) * 0.5, (az + bz) * 0.5)) continue
          const dS = Math.hypot(bx - ax, bz - az)
          if (dS < 2) continue
          const yA = heightIn(win, ax, az) - datum
          const yB = heightIn(win, bx, bz) - datum
          if (Math.abs(yB - yA) / dS < 0.055) continue
          const yaw = Math.atan2(bx - ax, bz - az)
          const mx = (ax + bx) * 0.5, mz = (az + bz) * 0.5
          const nx = nxArr[k], nz = nzArr[k]
          for (const side of [-1, 1]) {
            const gx = mx + nx * gOff * side - origin[0]
            const gz = mz + nz * gOff * side - origin[1]
            const gy = (yA + yB) * 0.5 + 0.31
            batch.box(railGuardMat, gx, gy + 0.58, gz, 0.08, 0.24, Math.min(8, dS), yaw)
            batch.box(signalPoleMat, gx, gy + 0.34, gz, 0.09, 0.68, 0.09, yaw)
          }
        }
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
            const y0 = (!Number.isNaN(overrideY[k - 1]) ? overrideY[k - 1] : heightIn(win, ax, az) - datum) + 0.31
            const y1 = (!Number.isNaN(overrideY[k]) ? overrideY[k] : heightIn(win, bx, bz) - datum) + 0.31
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

    // 2. Local streets, private cul-de-sacs (位置指定道路) and narrow roji/alleys (狭隘道路・路地):
    //    Asphalt sits almost flush (`0.220` vs main `0.230`) with L concrete side gutters (`0.215`).
    const streetDeg = new Map()
    const sKey = (x, z) => `${Math.round(x * 0.5)},${Math.round(z * 0.5)}`
    for (const lane of win.streets) {
      const pts = lane.points
      if (pts.length >= 4) {
        const kA = sKey(pts[0], pts[1]), kB = sKey(pts[pts.length - 2], pts[pts.length - 1])
        streetDeg.set(kA, (streetDeg.get(kA) ?? 0) + 1)
        streetDeg.set(kB, (streetDeg.get(kB) ?? 0) + 1)
      }
    }
    for (const lane of win.streets) {
      const track = tracePolyline(win, lane.points, fineStep, datum, { bridge: true })
      const isStair = lane.kind === 'stair'
      const isAlley = isStair || lane.kind === 'alley' || lane.width < 3.6
      const isLane = lane.kind === 'lane' || lane.kind === 'designated'
      const pts = lane.points
      const nPts = pts.length
      if (isStair) {
        const edge = 0.86
        ribbon(batch, laneSurface, win, track, lane.width, origin, datum, { lift: 0.218, side0: -edge, side1: edge, step: fineStep })
        ribbon(batch, gutter, win, track, lane.width, origin, datum, { lift: 0.213, side0: -1, side1: -edge, step: fineStep, skirt: 0.25 })
        ribbon(batch, gutter, win, track, lane.width, origin, datum, { lift: 0.213, side0: edge, side1: 1, step: fineStep, skirt: 0.25 })
        for (let k = 2; k < nPts; k += 2) {
          const sx0 = pts[k - 2], sz0 = pts[k - 1], sx1 = pts[k], sz1 = pts[k + 1]
          const sLen = Math.hypot(sx1 - sx0, sz1 - sz0)
          if (sLen < 3) continue
          const ux = (sx1 - sx0) / sLen, uz = (sz1 - sz0) / sLen
          for (let d = 0.6; d < sLen - 0.5; d += 0.9) {
            groundQuad(batch, kerb, win, origin, datum, sx0 + ux * d, sz0 + uz * d, ux, uz, -0.18, 0.18, -(lane.width * 0.4), lane.width * 0.4, 0.25)
          }
        }
      } else if (isAlley) {
        const edge = clamp(1 - (2 * 0.22) / Math.max(lane.width, 2.2), 0.72, 0.9)
        ribbon(batch, alleySurface, win, track, lane.width, origin, datum, { lift: 0.218, side0: -edge, side1: edge, step: fineStep })
        ribbon(batch, gutter, win, track, lane.width, origin, datum, { lift: 0.213, side0: -1, side1: -edge, step: fineStep, skirt: 0.25 })
        ribbon(batch, gutter, win, track, lane.width, origin, datum, { lift: 0.213, side0: edge, side1: 1, step: fineStep, skirt: 0.25 })
      } else {
        const surf = isLane ? laneSurface : street
        const edge = clamp(1 - (2 * 0.30) / Math.max(lane.width, 2.4), 0.68, 0.9)
        ribbon(batch, surf, win, track, lane.width, origin, datum, { lift: 0.220, side0: -edge, side1: edge, step: fineStep })
        ribbon(batch, gutter, win, track, lane.width, origin, datum, { lift: 0.215, side0: -1, side1: -edge, step: fineStep, skirt: 0.25 })
        ribbon(batch, gutter, win, track, lane.width, origin, datum, { lift: 0.215, side0: edge, side1: 1, step: fineStep, skirt: 0.25 })
        if (lane.width >= 4.8) {
          const lineW = clamp(0.11 / lane.width, 0.015, 0.035)
          const pos = edge - lineW * 1.4
          ribbon(batch, lineWhite, win, track, lane.width, origin, datum, { lift: 0.225, side0: -pos - lineW, side1: -pos + lineW, step: fineStep })
          ribbon(batch, lineWhite, win, track, lane.width, origin, datum, { lift: 0.225, side0: pos - lineW, side1: pos + lineW, step: fineStep })
        }
        // Cul-de-sac dead-end turnaround apron (位置指定道路の転回広場・終端舗装) & drainage grates along polyline
        if (nPts >= 4) {
          const [bx, bz] = [pts[nPts - 2], pts[nPts - 1]]
          const [pbx, pbz] = [pts[nPts - 4], pts[nPts - 3]]
          const bLen = Math.hypot(bx - pbx, bz - pbz)
          if (bLen >= 4 && (streetDeg.get(sKey(bx, bz)) ?? 0) === 1 && !roadSegs.some(r => Math.hypot(r.ax - bx, r.az - bz) < r.width + 4)) {
            const ux = (bx - pbx) / bLen, uz = (bz - pbz) / bLen
            groundQuad(batch, surf, win, origin, datum, bx, bz, ux, uz, -0.4, 0.35, -lane.width * 0.50, lane.width * 0.50, 0.221)
          }
          const [ax, az] = [pts[0], pts[1]]
          const [nax, naz] = [pts[2], pts[3]]
          const aLen = Math.hypot(nax - ax, naz - az)
          if (aLen >= 4 && (streetDeg.get(sKey(ax, az)) ?? 0) === 1 && !roadSegs.some(r => Math.hypot(r.ax - ax, r.az - az) < r.width + 4)) {
            const ux = (ax - nax) / aLen, uz = (az - naz) / aLen
            groundQuad(batch, surf, win, origin, datum, ax, az, ux, uz, -0.4, 0.35, -lane.width * 0.50, lane.width * 0.50, 0.221)
          }
          const sPos = (lane.width / 2) * ((1 + edge) * 0.5)
          for (let k = 2; k < nPts; k += 2) {
            const sx0 = pts[k - 2], sz0 = pts[k - 1], sx1 = pts[k], sz1 = pts[k + 1]
            const sLen = Math.hypot(sx1 - sx0, sz1 - sz0)
            if (sLen < 12) continue
            const ux = (sx1 - sx0) / sLen, uz = (sz1 - sz0) / sLen
            const gx = sx0 + ux * (sLen * 0.5), gz = sz0 + uz * (sLen * 0.5)
            if (gx >= x0 && gx <= x1 && gz >= z0 && gz <= z1) {
              groundQuad(batch, grateMat, win, origin, datum, gx, gz, ux, uz, -0.45, 0.45, sPos - 0.14, sPos + 0.14, 0.223)
            }
          }
        }
      }
      yield
    }

    // 3. Japanese Traffic Rules (左側通行):
    //    - Major road intersections: zebra crosswalks (`横断歩道`, 0.45 m white bars) and left-lane stop lines (`停止線`).
    //    - Local streets meeting main roads: left-lane stop lines (`停止線`) on the incoming left side.

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
          const nx = -uz
          const nz = ux
          const walk = self.kind >= ROAD.ARTERIAL ? 3.5 : 2.5
          const cwHalf = Math.max(2.5, self.width / 2 - walk - 0.35)
          const setback = other.width / 2 + 2.2

          // Clean asphalt intersection box masks interior center/lane lines crossing inside the junction.
          groundQuad(batch, asphalt, win, origin, datum, hit.x, hit.z, ux, uz, -(setback - 0.6), setback - 0.6, -(cwHalf + 0.35), cwHalf + 0.35, 0.2462)

          for (const dir of [-1, 1]) {
            // Zebra crosswalk (横断歩道): 3.0 m deep across the carriageway, 0.44 m bars every 0.9 m.
            const crossCenter = dir * (setback + 1.6)
            for (let s = -cwHalf + 0.45; s <= cwHalf - 0.45; s += 0.9) {
              groundQuad(batch, lineWhite, win, origin, datum, hit.x, hit.z, ux, uz, crossCenter - 1.5, crossCenter + 1.5, s - 0.22, s + 0.22, 0.248)
            }
            // Japanese Left-Hand Traffic Stop Line (左側通行の停止線).
            const stopDist = dir * (setback + 4.8)
            const s0 = dir > 0 ? 0.2 : -cwHalf + 0.25
            const s1 = dir > 0 ? cwHalf - 0.25 : -0.2
            groundQuad(batch, lineWhite, win, origin, datum, hit.x, hit.z, ux, uz, stopDist - 0.22, stopDist + 0.22, s0, s1, 0.248)

            // Crosswalk-ahead Diamond Mark (ダイヤマーク ◇) ~26 m prior to crosswalk on incoming left lane.
            const dDist = dir * (setback + 24.0)
            const dSide = dir > 0 ? cwHalf * 0.5 : -cwHalf * 0.5
            const dp = (a, s) => {
              const rx = hit.x + ux * a + nx * s
              const rz = hit.z + uz * a + nz * s
              return new THREE.Vector3(rx - origin[0], heightIn(win, rx, rz) - datum + 0.248, rz - origin[1])
            }
            batch.quad(lineWhite, dp(dDist - 2.4, dSide), dp(dDist, dSide - 0.72), dp(dDist + 2.4, dSide), dp(dDist, dSide + 0.72), UP)
          }
        }
      }
    }

    // 3c. Traffic signals, Stop signs (止まれ) & Active Level Crossings (踏切)
    if (win.intersections?.length) {
      for (const inter of win.intersections) {
        if (inter.x < x0 + 3 || inter.x > x1 - 3 || inter.z < z0 + 3 || inter.z > z1 - 3) continue
        const iy = heightIn(win, inter.x, inter.z) - datum + 0.30
        if (inter.hasSignal) {
          for (const [ox, oz, armDir] of [[-7.5, -7.5, 0], [7.5, 7.5, Math.PI]]) {
            const px = inter.x + ox - origin[0]
            const pz = inter.z + oz - origin[1]
            batch.box(signalPoleMat, px, iy + 2.6, pz, 0.22, 5.2, 0.22, armDir)
            batch.box(signalPoleMat, px + (ox < 0 ? 1.8 : -1.8), iy + 4.9, pz, 3.6, 0.16, 0.16, 0)
            const headX = px + (ox < 0 ? 2.8 : -2.8)
            batch.box(signalPoleMat, headX, iy + 4.65, pz, 1.35, 0.42, 0.28, 0)
            batch.box(signalRedMat, headX - 0.38, iy + 4.65, pz + (ox < 0 ? 0.16 : -0.16), 0.24, 0.24, 0.06, 0)
            batch.box(signalYellowMat, headX, iy + 4.65, pz + (ox < 0 ? 0.16 : -0.16), 0.24, 0.24, 0.06, 0)
            batch.box(signalGreenMat, headX + 0.38, iy + 4.65, pz + (ox < 0 ? 0.16 : -0.16), 0.24, 0.24, 0.06, 0)
          }
        } else if (inter.hasStop) {
          const px = inter.x - 4.2 - origin[0]
          const pz = inter.z - 4.2 - origin[1]
          batch.box(signalPoleMat, px, iy + 1.25, pz, 0.08, 2.5, 0.08, 0)
          batch.box(stopSignMat, px, iy + 2.35, pz, 0.65, 0.56, 0.06, 0.4)
        }
      }
    }
    if (win.levelCrossings?.length) {
      for (const c of win.levelCrossings) {
        if (c.x < x0 + 3 || c.x > x1 - 3 || c.z < z0 + 3 || c.z > z1 - 3) continue
        const cy = heightIn(win, c.x, c.z) - datum + 0.25
        const rAng = c.railAngle ?? 0
        const nx = -Math.sin(rAng), nz = Math.cos(rAng)
        for (const side of [-1, 1]) {
          const px = c.x + nx * side * 3.8 - origin[0]
          const pz = c.z + nz * side * 3.8 - origin[1]
          batch.box(signalYellowMat, px, cy + 1.6, pz, 0.18, 3.2, 0.18, 0)
          batch.box(signalPoleMat, px, cy + 2.9, pz, 0.72, 0.28, 0.16, rAng)
          batch.box(signalRedMat, px, cy + 2.55, pz, 0.55, 0.22, 0.2, rAng)
          batch.box(signalYellowMat, px + nx * side * -0.4, cy + 0.95, pz + nz * side * -0.4, 3.2, 0.1, 0.08, c.roadAngle ?? 0)
        }
      }
    }

    // 3b. Left-hand stop lines (停止線) where local streets meet main roads.
    for (const lane of win.streets) {
      if (lane.width < 3.6 || lane.points.length < 4) continue
      const pts = lane.points
      const nPts = pts.length
      const half = lane.width / 2 - 0.38
      const endSpecs = [
        [pts[0], pts[1], pts[2], pts[3], false],
        [pts[nPts - 4], pts[nPts - 3], pts[nPts - 2], pts[nPts - 1], true],
      ]
      for (const [ax, az, bx, bz, isEnd] of endSpecs) {
        const len = Math.hypot(bx - ax, bz - az)
        if (len < 6) continue
        const ux = (bx - ax) / len
        const uz = (bz - az) / len
        const endX = isEnd ? bx : ax
        const endZ = isEnd ? bz : az
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
        if (offsetFromEnd + 2.0 >= len) continue
        const alongPos = isEnd ? len - offsetFromEnd : offsetFromEnd
        const s0 = isEnd ? -half : 0.05
        const s1 = isEnd ? -0.05 : half
        groundQuad(batch, lineWhite, win, origin, datum, ax, az, ux, uz, alongPos - 0.18, alongPos + 0.18, s0, s1, 0.228)
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
      const half = lane.width * 0.5
      for (let k = 2; k < lane.points.length; k += 2) {
        addWaySeg(lane.points[k - 2], lane.points[k - 1], lane.points[k], lane.points[k + 1], half)
      }
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
    const yardBatch = new Batch()
    const plinthMat = material('concrete', '#b9b6ae')
    const turfMat = material('grass', '#739450')
    const estateTurfMat = material('grass', '#5e8242')
    const gravelMat = material('gravel', '#cbc4b4')
    const shiraGravelMat = material('gravel', '#e5e0d4')
    const mossMat = material('grass', '#466a35')
    const driveMat = material('concrete', '#c7c3b8')
    const stonePathMat = material('stone', '#aca699')
    const wallConcreteMat = material('concrete', '#b5b0a4')
    const fenceSlatsMat = material('planks', '#6b5642')
    const fenceDarkMat = material('#3c3f42', '#ffffff', { roughness: 0.48, metalness: 0.42 })
    const hedgeMat = material('hedge', '#446632')
    const flowerbedMat = material('#93543b', '#ffffff', { roughness: 0.85 })
    const shedMat = material('#8c9298', '#ffffff', { roughness: 0.45, metalness: 0.55 })
    const carportRoofMat = material('#4a5562', '#ffffff', { roughness: 0.35, metalness: 0.65 })
    const acUnitMat = material('#e4e4df', '#ffffff', { roughness: 0.65 })
    const solarMat = material('#1b2944', '#ffffff', { roughness: 0.18, metalness: 0.72 })
    const plasterWallMat = material('mortar', '#ede6d6')
    const kawaraCapMat = finishMaterial('roof-kawara-dark')
    const trunkMat = material('#5b4632', '#ffffff', { roughness: 0.92 })
    const leafMats = [
      material('#4d7236', '#ffffff', { roughness: 0.88 }),
      material('#5d8340', '#ffffff', { roughness: 0.88 }),
      material('#3f602f', '#ffffff', { roughness: 0.88 }),
    ]
    const mapleMat = material('#c46d68', '#ffffff', { roughness: 0.85 })
    const carPaints = [
      material('#dadbd6', '#ffffff', { roughness: 0.25, metalness: 0.42 }),
      material('#353940', '#ffffff', { roughness: 0.25, metalness: 0.42 }),
      material('#5b6a79', '#ffffff', { roughness: 0.25, metalness: 0.42 }),
      material('#7f3a36', '#ffffff', { roughness: 0.25, metalness: 0.42 }),
    ]
    const carGlassMat = material('#253038', '#ffffff', { roughness: 0.1, metalness: 0.75 })
    const tireMat = material('#222325', '#ffffff', { roughness: 0.9 })
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
      const ux = (ring[1][0] - ring[0][0]) / widthM
      const uz = (ring[1][1] - ring[0][1]) / widthM

      const oxRaw = ring[0][0] - ring[3][0]
      const ozRaw = ring[0][1] - ring[3][1]
      const oLen = Math.hypot(oxRaw, ozRaw) || 1
      const outX = oxRaw / oLen
      const outZ = ozRaw / oLen
      const rightX = outZ
      const rightZ = -outX

      const lot = building.lot ?? [0.2, 0.2, 0.2, 0.2]
      const tier = building.tier ?? 1
      let lotLow = low
      if (building.parcelPoly && building.parcelPoly.length >= 6) {
        const pp = building.parcelPoly
        for (let k = 0; k < pp.length; k += 2) {
          const lh = heightIn(win, pp[k], pp[k + 1]) - datum
          if (lh < lotLow) lotLow = lh
        }
      } else if (lot[0] + lot[1] + lot[2] + lot[3] > 0.35) {
        const hw = widthM * 0.5, hd = depthM * 0.5
        for (const [lu, lo] of [[-hw - lot[0], hd + lot[2]], [hw + lot[1], hd + lot[2]], [hw + lot[1], -hd - lot[3]], [-hw - lot[0], -hd - lot[3]]]) {
          const lh = heightIn(win, bcx + rightX * lu + outX * lo, bcz + rightZ * lu + outZ * lo) - datum
          if (lh < lotLow) lotLow = lh
        }
      }

      const frontClear = building.use === USE.LOW
        ? hasFrontRoom((c[0] + c[2]) * 0.5, (c[1] + c[3]) * 0.5, 1.55)
        : false
      const era = eraIn(win, bcx, bcz)
      const shopType = building.shopType ?? 255
      const specInfo = archetypeSpec(building.use, era, tier, building.floors, widthM, depthM, building.tone ?? 0.5, frontClear, shopType)
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
        arch, ring, cx, cz, bcx, bcz, ux, uz, rightX, rightZ, outX, outZ,
        base, padY, lotLow, widthM, depthM, lot, tier, use: building.use, floors: building.floors,
        era, tone: building.tone ?? 0.5, shopType, sx, sz, invSx: 1 / sx, invSz: 1 / sz,
        retainingH: building.retainingH ?? 0,
        designFlags: building.designFlags ?? 0,
        frontRoadW: building.frontRoadW ?? 6.0,
        gardenCode: building.gardenCode ?? 0,
        parcelPoly: building.parcelPoly ?? null,
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
      const {
        arch, cx, cz, bcx, bcz, ux, uz, rightX, rightZ, outX, outZ,
        base, padY, lotLow, widthM, depthM, lot, tier, use, era, tone, shopType,
        sx, sz, invSx, invSz,
      } = rec
      const hx = arch.bw * 0.5
      const hz = arch.bd * 0.5

      const frontPad = arch.compactYard ? 0.08 : 1.28
      const sidePad = arch.compactYard ? 0.08 : 0.36
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

      // RC slope retaining wall pilasters + embedded hillside garage cutout (擁壁・掘り込み車庫)
      const retH = rec.retainingH ?? 0
      const dFlags = rec.designFlags ?? 0
      const turnRight = Math.atan2(-rightZ, rightX)
      if (retH >= 1.2 || padY - base >= 1.2) {
        const wallH = Math.max(padY - base, retH)
        if ((dFlags & 0x04) && wallH >= 1.35) {
          // Embedded hillside garage aperture opening on frontage plinth wall
          const gW = Math.min(3.4, widthM * 0.62)
          const gH = Math.min(wallH - 0.18, 2.25)
          const gFrontZ = depthM * 0.5 + frontPad + 0.05
          yardBatch.box(fenceDarkMat, cx + outX * gFrontZ, base + gH * 0.5 + 0.04, cz + outZ * gFrontZ, gW, gH, 0.24, turnRight)
          yardBatch.box(plinthMat, cx + outX * (gFrontZ + 0.06), base + gH + 0.14, cz + outZ * (gFrontZ + 0.06), gW + 0.36, 0.22, 0.32, turnRight)
        }
        // Subtle RC retaining wall buttresses along tall hillside foundations
        const pilStep = Math.max(2.6, widthM * 0.48)
        for (let sxOff = -widthM * 0.4; sxOff <= widthM * 0.4; sxOff += pilStep) {
          const px = cx + rightX * sxOff + outX * (depthM * 0.5 + frontPad + 0.08)
          const pz = cz + rightZ * sxOff + outZ * (depthM * 0.5 + frontPad + 0.08)
          yardBatch.box(plinthMat, px, base + wallH * 0.5, pz, 0.28, wallH * 0.94, 0.22, turnRight)
        }
      }
      if ((dFlags & 0x20) && rec.floors >= 4) {
        // Road/north slant setback crown cornice (道路・北側斜線セットバック段差)
        const sbY = padY + arch.totalHeight - 1.4
        yardBatch.box(plinthMat, cx - outX * (depthM * 0.14), sbY, cz - outZ * (depthM * 0.14), widthM * 0.86, 1.3, depthM * 0.68, turnRight)
      }

      // Per-parcel ground terrace, driveway, parked cars, fences/walls, garden zones, gates and trees.
      const [pL, pR, pF, pB] = lot
      const gCode = rec.gardenCode ?? 0
      const rawGStyle = gCode & 0x0F
      const ownerStrategy = (gCode >>> 4) & 0x03
      const hasSolarPanels = Boolean(gCode & 0x40)
      const gStyle = gCode === 0 && (use === USE.LOW || use === USE.DENSE)
        ? (tier >= 2 || pB >= 1.5 || pF >= 1.5 ? 1 : 0)
        : rawGStyle
      const hSeed = ((Math.imul(Math.round(bcx * 10), 73856093) ^ Math.imul(Math.round(bcz * 10), 19349663) ^ Math.round(tone * 255)) >>> 0)
      const h1 = ((Math.imul(hSeed, 1664525) + 1013904223) >>> 0)

      if ((rec.parcelPoly && rec.parcelPoly.length >= 6) || pL + pR + pF + pB >= 0.20) {
        const hw = widthM * 0.5
        const hd = depthM * 0.5
        const u0 = -hw - pL, u1 = hw + pR
        const o0 = -hd - pB, o1 = hd + pF
        const midU = (u0 + u1) * 0.5
        const midO = (o0 + o1) * 0.5
        const yardY = padY - 0.06
        const yardBase = lotLow - 0.45
        const turn = turnRight
        const yPt = (lu, lo, y) => v(cx + rightX * lu + outX * lo, y, cz + rightZ * lu + outZ * lo)
        const yBox = (mat, lu, y, lo, w, h, d) => {
          yardBatch.box(mat, cx + rightX * lu + outX * lo, y, cz + rightZ * lu + outZ * lo, w, h, d, turn)
        }

        const isRes = use === USE.LOW || use === USE.DENSE
        const isMulti = use === USE.MID || use === USE.HIGH
        const pedOnly = Boolean((dFlags & 0x08) || (dFlags & 0x8000) || (rec.frontRoadW > 0 && rec.frontRoadW < 2.7))
        const addCar = (cu, co, w, len, paint) => {
          const cy0 = yardY + 0.016
          yBox(paint, cu, cy0 + 0.34, co, w, 0.38, len)
          yBox(carGlassMat, cu, cy0 + 0.68, co - 0.14, w * 0.84, 0.32, len * 0.52)
          yBox(paint, cu, cy0 + 0.85, co - 0.16, w * 0.78, 0.07, len * 0.44)
          const wx = w * 0.44, wz = len * 0.31
          for (const sxW of [-1, 1]) {
            for (const szW of [-1, 1]) yBox(tireMat, cu + sxW * wx, cy0 + 0.15, co + szW * wz, 0.18, 0.30, 0.46)
          }
        }
        const gMat = gStyle === 2
          ? shiraGravelMat
          : gStyle === 0 || (ownerStrategy === 0 && isRes)
            ? gravelMat
            : gStyle === 3
              ? stonePathMat
              : isRes || isMulti
                ? (tier === 4 || gStyle === 4 ? estateTurfMat : (tier >= 2 || pF >= 1.4 || pB >= 1.5 || pR >= 1.4 ? turfMat : gravelMat))
                : gravelMat
        const pp = rec.parcelPoly
        if (pp && pp.length >= 6) {
          const poly2d = []
          for (let k = 0; k < pp.length; k += 2) {
            poly2d.push([pp[k] - origin[0], pp[k + 1] - origin[1]])
          }
          yardBatch.shape(gMat, poly2d, [], yardY, true)
          const nP = poly2d.length
          for (let k = 0; k < nP; k++) {
            const a = poly2d[k], b = poly2d[(k + 1) % nP]
            const exP = b[0] - a[0], ezP = b[1] - a[1]
            const lenP = Math.hypot(exP, ezP)
            if (lenP < 0.08) continue
            const mxP = (a[0] + b[0]) * 0.5 - cx
            const mzP = (a[1] + b[1]) * 0.5 - cz
            const fvec = v(mxP, 0, mzP).normalize()
            yardBatch.quad(plinthMat, v(a[0], yardBase, a[1]), v(b[0], yardBase, b[1]), v(b[0], yardY, b[1]), v(a[0], yardY, a[1]), fvec)
          }
        } else {
          const lRing = [[u0, o0], [u1, o0], [u1, o1], [u0, o1]]
          yardBatch.quad(gMat, yPt(u0, o0, yardY), yPt(u1, o0, yardY), yPt(u1, o1, yardY), yPt(u0, o1, yardY), UP)
          for (let k = 0; k < 4; k++) {
            const [ax, ao] = lRing[k]
            const [bx, bo] = lRing[(k + 1) % 4]
            const ml = (ax + bx) * 0.5 - midU
            const mo = (ao + bo) * 0.5 - midO
            const fvec = v(rightX * ml + outX * mo, 0, rightZ * ml + outZ * mo).normalize()
            yardBatch.quad(plinthMat, yPt(ax, ao, yardBase), yPt(bx, bo, yardBase), yPt(bx, bo, yardY), yPt(ax, ao, yardY), fvec)
          }
        }

        // Sloped approach concrete steps (外階段) when site elevation rises noticeably from frontage street
        if (retH >= 0.70 && !(dFlags & 0x04) && pF >= 0.55) {
          const stepCount = clamp(Math.round((padY - lotLow) / 0.22), 2, 5)
          const stW = clamp(widthM * 0.28, 1.0, 1.8)
          const stGateU = clamp((hSeed & 1) ? 0.55 : -0.25, -hw + 0.65, hw - 0.65)
          const stD = clamp(pF * 0.75, 0.55, 1.65) / stepCount
          const stepH = Math.max(0.18, (padY - Math.max(lotLow, padY - 1.2)) / stepCount)
          for (let si = 0; si < stepCount; si++) {
            const sy = yardY - stepH * (si + 0.45)
            const so = hd + pF * 0.22 + (si + 0.5) * stD
            yBox(plinthMat, stGateU, sy, so, stW, stepH, stD * 1.06)
          }
        }

        if ((use === USE.ROADSIDE_COM || use === USE.INDUSTRIAL || gStyle === 5) && !pedOnly && pF >= 2.6) {
          // ロードサイド商業・工場・物流の前面駐車場・荷捌きヤード・輪止めと顧客/商用車両配置
          yardBatch.quad(
            driveMat,
            yPt(u0 + 0.14, hd + 0.10, yardY + 0.014),
            yPt(u1 - 0.14, hd + 0.10, yardY + 0.014),
            yPt(u1 - 0.14, o1 - 0.06, yardY + 0.014),
            yPt(u0 + 0.14, o1 - 0.06, yardY + 0.014),
            UP,
          )
          const bayCo = hd + Math.min(pF * 0.52, 2.55)
          const bayCount = Math.min(3, Math.floor((u1 - u0 - 1.2) / 2.6))
          for (let ci = 0; ci < bayCount; ci++) {
            const cu = (u0 + u1) * 0.5 + (ci - (bayCount - 1) * 0.5) * 2.5
            yBox(plinthMat, cu, yardY + 0.06, bayCo - 1.55, 1.4, 0.10, 0.14)
            if (((h1 >>> (ci * 3)) & 3) === 0) continue
            addCar(cu, bayCo, 1.68, Math.min(4.1, pF - 0.45), carPaints[(hSeed + ci) % carPaints.length])
          }
        }

        // Apartment / mid-rise shared green strip & covered bicycle shelter (集合住宅の緑地・駐輪場)
        if (isMulti && (pL >= 1.1 || pR >= 1.1 || pF >= 1.2 || pB >= 1.2)) {
          if (pF >= 1.4 && (u1 - u0) >= 3.2) {
            yBox(hedgeMat, u0 + 0.65, yardY + 0.34, o1 - 0.42, 0.72, 0.62, Math.min(1.6, pF * 0.6))
            yBox(carportRoofMat, u1 - 1.35, yardY + 1.85, hd + Math.min(1.0, pF * 0.55), 2.1, 0.07, 1.15)
            yBox(fenceDarkMat, u1 - 0.55, yardY + 0.92, hd + Math.min(1.0, pF * 0.55), 0.08, 1.84, 0.08)
            yBox(fenceDarkMat, u1 - 2.15, yardY + 0.92, hd + Math.min(1.0, pF * 0.55), 0.08, 1.84, 0.08)
          }
        }

        if (isRes) {
          const bayO1 = o1 - 0.02
          const bayO0 = Math.max(o0 + 0.15, -hd + 0.20)
          const canBayL = !pedOnly && pL >= 2.40 && (bayO1 - bayO0) >= 4.0
          const canBayR = !pedOnly && pR >= 2.40 && (bayO1 - bayO0) >= 4.0
          // Prefer putting parking bays on the shaded/north side (-right if rightZ >= 0, else +right) so southern yards stay sunlit.
          const baySide = (canBayL && canBayR)
            ? (rightZ >= 0 ? 'L' : 'R')
            : (canBayL ? 'L' : canBayR ? 'R' : '')
          const hasCarBay = baySide !== ''
          const bayU0 = baySide === 'L' ? u0 + 0.08 : hw + 0.06
          const bayU1 = baySide === 'L' ? -hw - 0.06 : u1 - 0.08
          if (hasCarBay) {
            yardBatch.quad(driveMat, yPt(bayU0, bayO0, yardY + 0.014), yPt(bayU1, bayO0, yardY + 0.014), yPt(bayU1, bayO1, yardY + 0.014), yPt(bayU0, bayO1, yardY + 0.014), UP)
            // Concrete wheel stops + optional aluminum carport canopy
            const bMidU = (bayU0 + bayU1) * 0.5
            const bSpanW = bayU1 - bayU0
            yBox(plinthMat, bMidU, yardY + 0.06, Math.max(bayO0 + 0.5, hd - 1.2), Math.min(1.4, bSpanW * 0.7), 0.10, 0.14)
            if (bSpanW >= 2.35 && (hSeed % 3 !== 0) && era >= 6) {
              const cpCo = Math.min(bayO1 - 2.1, hd + pF * 0.35)
              const cpColU = baySide === 'L' ? bayU0 + 0.14 : bayU1 - 0.14
              yBox(carportRoofMat, bMidU, yardY + 2.18, cpCo, Math.min(2.35, bSpanW - 0.12), 0.07, Math.min(4.1, bayO1 - bayO0 - 0.25))
              yBox(fenceDarkMat, cpColU, yardY + 1.09, cpCo - 1.25, 0.09, 2.18, 0.09)
              yBox(fenceDarkMat, cpColU, yardY + 1.09, cpCo + 1.25, 0.09, 2.18, 0.09)
            }
          }

          const gateU = clamp(tier === 4 ? 0.0 : ((hSeed & 1) ? 0.55 : -0.25), -hw + 0.65, hw - 0.65)
          const pathW = tier === 4 ? 1.35 : tier === 3 ? 1.05 : 0.85
          if (pF >= 0.42) {
            if (gStyle === 2 || (gStyle === 1 && pF >= 1.6)) {
              // Stepping stones (飛び石) along front garden approach
              const stSteps = Math.max(2, Math.floor((pF - 0.18) / 0.55))
              for (let si = 0; si < stSteps; si++) {
                const so = hd + 0.22 + (si + 0.5) * ((pF - 0.24) / stSteps)
                yBox(stonePathMat, gateU + ((si & 1) ? 0.09 : -0.09), yardY + 0.022, so, 0.46, 0.04, 0.36)
              }
            } else {
              yardBatch.quad(
                stonePathMat,
                yPt(gateU - pathW * 0.5, hd + 0.04, yardY + 0.018),
                yPt(gateU + pathW * 0.5, hd + 0.04, yardY + 0.018),
                yPt(gateU + pathW * 0.5, o1 - 0.02, yardY + 0.018),
                yPt(gateU - pathW * 0.5, o1 - 0.02, yardY + 0.018),
                UP,
              )
            }
          }

          // MAX_LEGAL_ENVELOPE service strip: perimeter concrete apron (犬走り), AC outdoor unit, entrance canopy
          if (gStyle === 0 || ownerStrategy === 0) {
            const acSide = pR >= 0.42 ? 1 : pL >= 0.42 ? -1 : 0
            if (acSide !== 0) {
              const acU = acSide > 0 ? hw + Math.min(0.24, pR * 0.45) : -hw - Math.min(0.24, pL * 0.45)
              yBox(acUnitMat, acU, yardY + 0.36, -hd * 0.25, 0.28, 0.62, 0.76)
            } else if (pB >= 0.42) {
              yBox(acUnitMat, hw * 0.45, yardY + 0.36, -hd - Math.min(0.24, pB * 0.45), 0.76, 0.62, 0.28)
            }
            if (pF >= 0.45) {
              yBox(fenceDarkMat, gateU, padY + 2.42, hd + 0.28, Math.min(1.4, widthM * 0.36), 0.08, 0.52)
            }
          }

          // Sun-oriented wood deck / traditional engawa + garden details on sunny side (+Z world south).
          if (gStyle !== 0 && ownerStrategy !== 0) {
            const deckCands = [
              { sKey: 'B', dot: -outZ, space: pB },
              { sKey: 'F', dot: outZ, space: pF },
              ...(baySide !== 'L' ? [{ sKey: 'L', dot: -rightZ, space: pL }] : []),
              ...(baySide !== 'R' ? [{ sKey: 'R', dot: rightZ, space: pR }] : []),
            ]
            let bestDeck = null
            for (const c of deckCands) {
              if (c.space >= 1.35 && c.dot > 0.20 && (!bestDeck || c.dot > bestDeck.dot)) bestDeck = c
            }
            if (bestDeck) {
              const dkD = clamp(bestDeck.space * 0.45, 0.80, 1.45)
              if (bestDeck.sKey === 'B') {
                yBox(fenceSlatsMat, 0, yardY + 0.12, -hd - dkD * 0.5 - 0.05, clamp(widthM * 0.50, 2.2, 4.8), 0.24, dkD)
                if (gStyle === 1 && pB >= dkD + 0.85) {
                  // Raised brick flowerbed (花壇) + shrubs in modern back garden
                  yBox(flowerbedMat, -hw * 0.45, yardY + 0.16, o0 + 0.36, Math.min(2.2, widthM * 0.32), 0.32, 0.46)
                  yBox(hedgeMat, -hw * 0.45, yardY + 0.42, o0 + 0.36, Math.min(1.9, widthM * 0.26), 0.28, 0.32)
                }
              } else if (bestDeck.sKey === 'F') {
                const dkU = gateU >= 0 ? -hw * 0.42 : hw * 0.42
                if (Math.abs(dkU - gateU) > pathW * 0.6 + 1.0) {
                  yBox(fenceSlatsMat, dkU, yardY + 0.12, hd + dkD * 0.5 + 0.05, clamp(widthM * 0.36, 1.9, 3.6), 0.24, dkD)
                  if (gStyle === 1 && pF >= dkD + 0.85) {
                    yBox(flowerbedMat, dkU, yardY + 0.15, o1 - 0.36, clamp(widthM * 0.32, 1.6, 3.0), 0.30, 0.42)
                  }
                }
              } else if (bestDeck.sKey === 'L') {
                yBox(fenceSlatsMat, -hw - dkD * 0.5 - 0.05, yardY + 0.12, 0, dkD, 0.24, clamp(depthM * 0.48, 2.0, 4.2))
              } else {
                yBox(fenceSlatsMat, hw + dkD * 0.5 + 0.05, yardY + 0.12, 0, dkD, 0.24, clamp(depthM * 0.48, 2.0, 4.2))
              }
            }

            // Traditional Japanese NIWA (苔築山 + 蹲踞 tsukubai + 飛び石) or Courtyard planters + Storage Shed (物置)
            if (gStyle === 2) {
              const mossW = clamp(widthM * 0.28, 1.1, 2.4)
              if (pB >= 1.6) {
                yBox(mossMat, hw * 0.45, yardY + 0.10, -hd - pB * 0.62, mossW, 0.18, clamp(pB * 0.34, 0.65, 1.6))
                yBox(stonePathMat, hw * 0.22, yardY + 0.26, -hd - pB * 0.42, 0.38, 0.42, 0.38) // 蹲踞 tsukubai basin
              } else if (pF >= 1.8) {
                const mossU = gateU >= 0 ? -hw * 0.50 : hw * 0.50
                yBox(mossMat, mossU, yardY + 0.10, hd + pF * 0.58, mossW * 0.8, 0.18, clamp(pF * 0.32, 0.6, 1.3))
              }
            } else if (gStyle === 3 && (pF >= 0.85 || pB >= 0.85)) {
              const plO = pF >= 0.85 ? o1 - 0.28 : o0 + 0.28
              yBox(flowerbedMat, midU - 0.6, yardY + 0.18, plO, 0.95, 0.36, 0.36)
              yBox(hedgeMat, midU - 0.6, yardY + 0.44, plO, 0.78, 0.26, 0.26)
            }

            // Storage shed (物置) on back/service corner for balanced lawn/deck homes
            if (gStyle === 1 && pB >= 1.25 && pR >= 0.9 && (hSeed % 4 === 0)) {
              yBox(shedMat, hw + Math.min(pR * 0.45, 0.55), yardY + 0.92, -hd - Math.min(pB * 0.48, 0.62), 0.95, 1.84, 1.40)
            }
          }

          // Parked car(s) cleanly fitted inside the driveway apron (suppressed when pedOnly / stair access).
          const carPct = tier === 4 ? 95 : tier === 3 ? 85 : tier === 2 ? 76 : 60
          if (hasCarBay && !pedOnly && (h1 % 100) < carPct) {
            const availW = bayU1 - bayU0 - 0.28
            const availL = bayO1 - bayO0 - 0.32
            const carLen = Math.min(tier >= 3 ? 4.25 : 3.72, availL)
            const carCo = clamp(hd + pF * 0.45 - 0.35, bayO0 + carLen * 0.5 + 0.12, bayO1 - carLen * 0.5 - 0.16)
            const paintA = carPaints[hSeed % carPaints.length]
            if (tier === 4 && availW >= 4.0) {
              const cw = Math.min(1.72, availW * 0.44)
              addCar(bayU0 + cw * 0.60, carCo, cw, carLen, paintA)
              addCar(bayU1 - cw * 0.60, carCo, cw, carLen, carPaints[(h1 >>> 3) % carPaints.length])
            } else {
              const cw = Math.min(tier >= 3 ? 1.74 : 1.60, availW)
              addCar((bayU0 + bayU1) * 0.5, carCo, cw, carLen, paintA)
            }
          }

          // Authentic Japanese exterior fence ratios (日本エクステリア学会等):
          const wu0 = u0 + 0.08, wu1 = u1 - 0.08
          const wo0 = o0 + 0.08, wo1 = o1 - 0.08
          const hFence = (h1 >>> 8) % 100
          const extMode = (tier === 4 || gStyle === 2)
            ? 'closed'
            : era <= 4
              ? (hFence < 68 ? 'closed' : hFence < 92 ? 'semi' : 'open')
              : era <= 6
                ? (hFence < 30 ? 'closed' : hFence < 68 ? 'semi' : 'open')
                : (hFence < 8 ? 'closed' : hFence < 30 ? 'semi' : 'open')

          const styleTop = tier === 4
            ? null
            : (tier === 3 || gStyle === 2)
              ? ((hSeed & 2) ? hedgeMat : fenceSlatsMat)
              : ((hSeed % 3 === 0) ? hedgeMat : fenceDarkMat)
          const wallBaseH = tier === 4 ? 1.28 : tier === 3 ? 0.45 : tier >= 1 ? 0.34 : 0.22
          const wallTopH = tier === 4 ? 0.20 : tier === 3 ? 0.72 : tier >= 1 ? 0.50 : 0.36
          const wallBaseMat = tier === 4 ? plasterWallMat : wallConcreteMat
          const wallTopMat = tier === 4 ? kawaraCapMat : styleTop
          const wallT = tier === 4 ? 0.22 : 0.12
          const topT = tier === 4 ? 0.34 : wallTopMat === hedgeMat ? 0.24 : 0.08

          const addWallAlongU = (a, b, lo, bH, tH, mat = wallBaseMat) => {
            const len = b - a
            if (len < 0.25) return
            const mu = (a + b) * 0.5
            yBox(mat, mu, yardY + bH * 0.5, lo, len, bH, wallT)
            if (tH > 0 && wallTopMat) yBox(wallTopMat, mu, yardY + bH + tH * 0.5, lo, len, tH, topT)
          }
          const addWallAlongV = (lu, a, b, bH, tH, mat = wallBaseMat) => {
            const len = b - a
            if (len < 0.25) return
            const mo = (a + b) * 0.5
            yBox(mat, lu, yardY + bH * 0.5, mo, wallT, bH, len)
            if (tH > 0 && wallTopMat) yBox(wallTopMat, lu, yardY + bH + tH * 0.5, mo, topT, tH, len)
          }

          if (extMode === 'open') {
            if (pL >= 0.30) addWallAlongV(wu0, wo0, wo1, 0.09, 0, stonePathMat)
            if (pR >= 0.30) addWallAlongV(wu1, wo0, wo1, 0.09, 0, stonePathMat)
            if (pB >= 0.30) addWallAlongU(wu0, wu1, wo0, 0.09, 0, stonePathMat)
          } else {
            const sideBH = extMode === 'semi' ? Math.min(wallBaseH, 0.26) : wallBaseH
            const sideTH = extMode === 'semi' && tier <= 2 ? Math.min(wallTopH, 0.42) : wallTopH
            if (pL >= 0.32) addWallAlongV(wu0, wo0, wo1, sideBH, sideTH)
            if (pR >= 0.32) addWallAlongV(wu1, wo0, wo1, sideBH, sideTH)
            if (pB >= 0.32) addWallAlongU(wu0, wu1, wo0, wallBaseH, wallTopH)
          }

          const gateHalf = tier === 4 ? 0.85 : 0.58
          const frontStart = baySide === 'L' ? Math.max(wu0, bayU1 + 0.14) : wu0
          const frontEnd = baySide === 'R' ? Math.min(wu1, bayU0 - 0.14) : wu1
          if (extMode === 'closed') {
            const frontBH = tier === 4 ? 1.28 : tier === 3 ? 0.55 : tier >= 1 ? 0.32 : 0.20
            const frontTH = tier === 4 ? 0.20 : tier === 3 ? 0.58 : tier >= 1 ? 0.42 : 0
            if (frontStart < Math.min(gateU - gateHalf, frontEnd)) {
              addWallAlongU(frontStart, Math.min(gateU - gateHalf, frontEnd), wo1, frontBH, frontTH)
            }
            if (Math.max(gateU + gateHalf, frontStart) < frontEnd) {
              addWallAlongU(Math.max(gateU + gateHalf, frontStart), frontEnd, wo1, frontBH, frontTH)
            }
          } else if (extMode === 'semi' && pF >= 1.2) {
            const scrA = Math.max(frontStart, gateU + gateHalf + 0.2)
            const scrB = Math.min(frontEnd, scrA + 2.2)
            if (scrB - scrA >= 1.0) addWallAlongU(scrA, scrB, wo1 - 0.3, 0.22, 0.95)
          }

          // Gate pillars / modern function gatepost flanking front entrance.
          if (pF >= 0.45) {
            if (tier === 4 || gStyle === 2) {
              const pH = tier === 4 ? 1.82 : 1.48
              for (const s of [-1, 1]) {
                const gu = gateU + s * (gateHalf + 0.20)
                yBox(stonePathMat, gu, yardY + pH * 0.5, wo1, 0.38, pH, 0.38)
                yBox(kawaraCapMat, gu, yardY + pH + 0.08, wo1, 0.48, 0.14, 0.48)
              }
              if (era <= 5 || (hSeed & 4)) {
                yBox(kawaraCapMat, gateU, yardY + pH + 0.26, wo1, gateHalf * 2 + 1.15, 0.16, 0.68)
              }
            } else if (tier === 3 && extMode !== 'open') {
              for (const s of [-1, 1]) {
                yBox(stonePathMat, gateU + s * (gateHalf + 0.16), yardY + 0.68, wo1, 0.30, 1.36, 0.28)
              }
            } else if (tier >= 1) {
              yBox(fenceDarkMat, gateU - gateHalf - 0.12, yardY + 0.62, wo1, 0.16, 1.24, 0.14)
            }
          }

          // Garden trees & rare estate stone lantern (石灯籠), kept clear of house, driveway & walkway.
          const addTree = (lu, lo, sc, leafMat) => {
            if (lu < wu0 + 0.55 || lu > wu1 - 0.55 || lo < wo0 + 0.55 || lo > wo1 - 0.55) return
            if (Math.abs(lu) < hw + 0.52 && lo > -hd - 0.52 && lo < hd + 0.52) return
            if (hasCarBay && lu >= bayU0 - 0.45 && lu <= bayU1 + 0.45 && lo > bayO0 - 0.35) return
            if (Math.abs(lu - gateU) < pathW * 0.75 && lo >= hd) return
            const tx = cx + rightX * lu + outX * lo
            const tz = cz + rightZ * lu + outZ * lo
            const trunkH = 1.28 * sc
            yardBatch.cylinder(trunkMat, tx, yardY, tz, 0.085 * sc, trunkH, 6, 0.055 * sc)
            yardBatch.box(leafMat, tx, yardY + trunkH + 0.42 * sc, tz, 1.48 * sc, 0.96 * sc, 1.48 * sc, turn + 0.3)
            yardBatch.box(leafMat, tx, yardY + trunkH + 1.02 * sc, tz, 1.08 * sc, 0.84 * sc, 1.08 * sc, turn + 1.0)
            yardBatch.box(leafMat, tx, yardY + trunkH + 1.52 * sc, tz, 0.64 * sc, 0.62 * sc, 0.64 * sc, turn + 0.6)
          }

          const leafA = leafMats[hSeed % leafMats.length]
          const leafB = leafMats[(h1 >>> 2) % leafMats.length]
          const gardenSideS = baySide === 'R' ? -1 : 1
          const gardenSidePad = gardenSideS > 0 ? pR : pL
          if (tier === 4 || gStyle === 2) {
            const isGrand = tier === 4
            addTree(gardenSideS * (hw + gardenSidePad * 0.48), hd + pF * 0.52, isGrand ? 1.32 : 1.12, mapleMat)
            addTree(gardenSideS * (hw + gardenSidePad * 0.52), -hd * 0.25, isGrand ? 1.38 : 1.08, leafA)
            addTree(gardenSideS * (hw + gardenSidePad * 0.45), -hd - pB * 0.48, isGrand ? 1.24 : 1.02, leafB)
            addTree(-gardenSideS * hw * 0.55, -hd - pB * 0.52, isGrand ? 1.28 : 1.05, leafA)
            if (isGrand) {
              addTree(gateU - gardenSideS * 1.75, hd + pF * 0.54, 1.12, leafB)
              addTree(gardenSideS * hw * 0.65, hd + pF * 0.42, 1.05, leafA)
            }
            // Traditional stone lantern (石灯籠) beside courtyard/niwa walk.
            const lx = gateU + gardenSideS * 1.18, lo = pF >= 1.5 ? hd + pF * 0.48 : -hd - pB * 0.45
            if (lx > wu0 + 0.55 && lx < wu1 - 0.55 && lo > wo0 + 0.55 && lo < wo1 - 0.55) {
              yBox(stonePathMat, lx, yardY + 0.14, lo, 0.42, 0.26, 0.42)
              yBox(stonePathMat, lx, yardY + 0.54, lo, 0.20, 0.58, 0.20)
              yBox(stonePathMat, lx, yardY + 0.92, lo, 0.34, 0.24, 0.34)
              yBox(stonePathMat, lx, yardY + 1.12, lo, 0.56, 0.14, 0.56)
            }
          } else if (tier === 3 && gStyle !== 0) {
            addTree(gardenSideS * (hw + gardenSidePad * 0.48), hd + pF * 0.50, 1.08, leafA)
            addTree(gardenSideS * (hw + gardenSidePad * 0.50), -hd - pB * 0.45, 1.02, leafB)
            addTree(-gardenSideS * hw * 0.45, -hd - pB * 0.50, 0.98, leafA)
          } else if (tier === 2 && gStyle !== 0) {
            addTree(gardenSideS * Math.max(gateU * gardenSideS + 1.45, hw + gardenSidePad * 0.42), hd + pF * 0.52, 0.92, leafA)
            addTree(gardenSideS * hw * 0.55, -hd - pB * 0.48, 0.88, leafB)
          } else if (gStyle === 1 && (pF >= 1.4 || gardenSidePad >= 1.5 || pB >= 1.6)) {
            const tu = gardenSidePad >= 1.4 ? gardenSideS * (hw + gardenSidePad * 0.48) : gateU + gardenSideS * 1.4
            const to = -outZ > 0.35 && pB >= 1.5 ? -hd - pB * 0.48 : (pF >= 1.4 ? hd + pF * 0.50 : -hd - pB * 0.48)
            addTree(tu, to, 0.78, leafA)
          }
        }
      }

      // Rooftop photovoltaic solar array (太陽光パネル) for post-2005 sunlit houses
      if (hasSolarPanels && rec.floors <= 3 && (use === USE.LOW || use === USE.DENSE)) {
        const sSouthO = clamp(outZ * 0.16 * depthM, -depthM * 0.18, depthM * 0.18)
        const sSouthU = clamp(rightZ * 0.14 * widthM, -widthM * 0.16, widthM * 0.16)
        yardBatch.box(solarMat, cx + rightX * sSouthU + outX * sSouthO, padY + arch.totalHeight - 0.24, cz + rightZ * sSouthU + outZ * sSouthO, clamp(widthM * 0.44, 1.8, 4.2), 0.10, clamp(depthM * 0.34, 1.4, 2.8), turnRight)
      }

      // Commercial storefront architectural differentiation (brand signboard fascia, awnings, or closed steel shutters for vacant shops).
      if (shopType !== undefined && shopType !== 255) {
        const turnS = turnRight
        const fzFront = depthM * 0.5 + 0.16
        const signW = clamp(widthM * 0.88, 2.2, 28)
        const sMat = shopSignMat(shopType)
        if (shopType === 44) {
          // Shuttered vacant storefront (シャッター空き店舗): closed dark corrugated metal shutter covering ground floor.
          yardBatch.box(sMat, cx + outX * fzFront, padY + 1.32, cz + outZ * fzFront, signW * 0.92, 2.45, 0.18, turnS)
          yardBatch.box(fenceDarkMat, cx + outX * (fzFront + 0.08), padY + 2.66, cz + outZ * (fzFront + 0.08), signW, 0.28, 0.24, turnS)
        } else {
          // Branded storefront fascia band above ground-floor entrance (CVS green, SM orange, Drugstore blue, Cafe forest, Clinic teal, etc.).
          const isBig = shopType === 20 || shopType === 21 || shopType === 25 || shopType === 26 || shopType === 28 || shopType === 29
          const fasciaH = isBig ? 1.15 : (shopType === 22 || shopType === 23 || shopType === 24 || shopType === 32 ? 0.82 : 0.56)
          const fasciaY = isBig ? Math.min(arch.totalHeight - 0.8, 4.2) : 2.95
          yardBatch.box(sMat, cx + outX * (fzFront + 0.10), padY + fasciaY, cz + outZ * (fzFront + 0.10), signW, fasciaH, 0.26, turnS)
          // Subtle storefront canopy / awning under fascia for human-scale shops
          if (!isBig && widthM >= 3.2) {
            yardBatch.box(plasterWallMat, cx + outX * (fzFront + 0.42), padY + fasciaY - fasciaH * 0.5 - 0.12, cz + outZ * (fzFront + 0.42), signW * 0.86, 0.12, 0.72, turnS)
          }
        }
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
    yardBatch.build(node, { cast: true, receive: true, where: 'out' })
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
