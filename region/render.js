// Map tiles of the region. Supports both the Extreme Deep Simulator packs (5m/20m geology,
// flood hazard, 13-class statutory zoning, local aging, 1700-2025 historical timeline frames,
// 44-format commercial shops + shuttered vacancies) and browser fallback regions.
import { BUILT_USES, ERAS, USE } from './develop.js'
import { fbm } from './noise.js'
import { LAND, bicubic, bilinear } from './terrain.js'
import { buildingsIn, streetsIn } from './streets.js'

export const TILE = 256
export const LEVELS = 8 // level 0 shows the whole region in one tile; each level halves the metres per pixel
export const DETAIL_LEVEL = 4 // from here on the ground comes from the 1 m sampler
export const BUILDING_LEVEL = 5 // and from here on buildings are drawn

export const LAYERS = {
  relief: { name: '地形（整備後）' },
  natural: { name: '地形（整備前）' },
  geology: { name: '地質・段丘・旧河道' },
  hazard: { name: '浸水想定・地盤' },
  use: { name: '土地利用' },
  zoning: { name: '用途地域（法定）' },
  price: { name: '地価（土地の価格）' },
  people: { name: '人口密度' },
  aging: { name: '高齢化率（2025）' },
  era: { name: '市街化の年代' },
  cost: { name: '鉄道の建設費' },
}

export function metresPerPixel(size, level) {
  return size / TILE / 2 ** level
}

const hex = (value) => [parseInt(value.slice(1, 3), 16), parseInt(value.slice(3, 5), 16), parseInt(value.slice(5, 7), 16)]

export const USE_STYLE = {
  [USE.WATER]: { name: '水面', color: '#7fb6df' },
  [USE.RIVERBED]: { name: '河川敷', color: '#cfe2b4' },
  [USE.FOREST]: { name: '樹林', color: '#7ea66c' },
  [USE.GREEN]: { name: '斜面緑地', color: '#99c287' },
  [USE.FIELD]: { name: '畑', color: '#e9e0a2' },
  [USE.PADDY]: { name: '田', color: '#bfe09a' },
  [USE.PARK]: { name: '公園', color: '#a5d595' },
  [USE.LOW]: { name: '低層住宅', color: '#f5dcbb' },
  [USE.DENSE]: { name: '密集市街地', color: '#eeb68a' },
  [USE.MID]: { name: '中層住宅', color: '#e59a73' },
  [USE.HIGH]: { name: '高層住宅', color: '#d06a55' },
  [USE.COMMERCIAL]: { name: '商業・商店街', color: '#e4607a' },
  [USE.INDUSTRIAL]: { name: '工業', color: '#b4a2cc' },
  [USE.PUBLIC]: { name: '学校・公共', color: '#9cb4d6' },
  [USE.ROADSIDE_COM]: { name: 'ロードサイド商業', color: '#f0824a' },
  [USE.STATION_HUB]: { name: '駅前再開発核', color: '#c83464' },
}

export const GEOLOGY_STYLE = [
  { name: '上位丘陵面（丘陵）', color: '#9c7e5e' },
  { name: '高位段丘面（高位台地）', color: '#be9e72' },
  { name: '中位台地面（洪積台地）', color: '#d7be8a' },
  { name: '下位段丘面（下位段丘）', color: '#cad29a' },
  { name: '段丘崖線（ハケ）', color: '#7ea264' },
  { name: '沖積自然堤防', color: '#a8ca8a' },
  { name: '沖積低地・谷底沖積面', color: '#7db387' },
  { name: '旧河道跡（軟弱地盤）', color: '#6ba092' },
  { name: '大河川流路', color: '#5b96c8' },
]

export const ZONING_STYLE = [
  { name: '未指定', color: '#dfe4db' },
  { name: '市街化調整区域', color: '#c8dda4' },
  { name: '特別緑地保全', color: '#7da868' },
  { name: '第一種低層住専', color: '#a3d19c' },
  { name: '第二種低層住専', color: '#bce0a5' },
  { name: '第一種中高層住専', color: '#d4e8a3' },
  { name: '第二種中高層住専', color: '#e5eead' },
  { name: '第一種住居地域', color: '#f5eb9e' },
  { name: '第二種住居地域', color: '#f6d88b' },
  { name: '準住居地域', color: '#f4c17a' },
  { name: '近隣商業地域', color: '#f3988f' },
  { name: '商業地域', color: '#e5627b' },
  { name: '準工業地域', color: '#bba4d4' },
  { name: '工業地域', color: '#9ca8c8' },
]

const USE_RGB = []
for (const [use, style] of Object.entries(USE_STYLE)) USE_RGB[use] = hex(style.color)
const GEOLOGY_RGB = GEOLOGY_STYLE.map((s) => hex(s.color))
const ZONING_RGB = ZONING_STYLE.map((s) => hex(s.color))

// Close in, built-up ground between the buildings is yards and paving rather than a flat tint.
const YARD_RGB = []
for (const use of Object.values(USE)) {
  const [r, g, b] = USE_RGB[use] ?? [220, 220, 215]
  YARD_RGB[use] = BUILT_USES.has(use) ? [r * 0.35 + 236 * 0.65, g * 0.35 + 233 * 0.65, b * 0.35 + 224 * 0.65] : [r, g, b]
}

// Colour ramps: [value, '#rrggbb'] pairs, linear in between.
function ramp(stops) {
  const values = stops.map(([value]) => value)
  const colors = stops.map(([, color]) => hex(color))
  return function colorAt(value, out) {
    if (!(value > values[0])) return copy(out, colors[0])
    for (let index = 1; index < values.length; index++) {
      if (value <= values[index]) {
        const t = (value - values[index - 1]) / (values[index] - values[index - 1])
        const a = colors[index - 1]
        const b = colors[index]
        out[0] = a[0] + (b[0] - a[0]) * t
        out[1] = a[1] + (b[1] - a[1]) * t
        out[2] = a[2] + (b[2] - a[2]) * t
        return out
      }
    }
    return copy(out, colors[colors.length - 1])
  }
}
function copy(out, color) {
  out[0] = color[0]
  out[1] = color[1]
  out[2] = color[2]
  return out
}

export const HEIGHT_STOPS = [[0, '#5f9a73'], [12, '#98c08a'], [25, '#d8dca2'], [40, '#e3c88e'], [55, '#cfa577'], [70, '#ad8461'], [90, '#866852']]
export const PEOPLE_STOPS = [[0, '#eef0ea'], [2000, '#fff2c2'], [6000, '#fdd58a'], [10000, '#fbb062'], [14000, '#f4834a'], [18000, '#de4f35'], [24000, '#b52430'], [32000, '#7f1032'], [45000, '#4c0b2e']]
export const PRICE_STOPS = [[0, '#e8ece6'], [10, '#cbe2b0'], [25, '#f4e69a'], [45, '#f8bf6c'], [70, '#ee8345'], [110, '#cf4438'], [170, '#8e1b46'], [260, '#4a0d38']]
export const COST_STOPS = [[20, '#2f8a4f'], [85, '#a8d672'], [150, '#fde38c'], [250, '#f57b48'], [340, '#a8112b'], [500, '#7a1530'], [650, '#5d8fd8']]
export const HAZARD_STOPS = [[0, '#edf3ea'], [0.25, '#f6eead'], [0.8, '#f6c368'], [1.5, '#eb7f43'], [2.5, '#c93848'], [4.0, '#6a1b5c']]
export const AGING_STOPS = [[0.14, '#5fa8c9'], [0.22, '#9ed0a5'], [0.27, '#f2e088'], [0.32, '#f09c52'], [0.38, '#d4483e'], [0.45, '#7c1238']]
export const ERA_COLORS = ['#e8ece2', '#6e4026', '#a8512b', '#d27a2c', '#e6a43a', '#e3d04d', '#a7d35c', '#5cbd8c', '#3a9fbc', '#4569c6', '#6b4cc4']
export const ERA_LABELS = ['未市街地', ...ERAS.slice(1).map((year) => (year === 1700 ? '江戸期' : `〜${year}年`))]

const heightColor = ramp(HEIGHT_STOPS)
const peopleColor = ramp(PEOPLE_STOPS)
const priceColor = ramp(PRICE_STOPS)
const costColor = ramp(COST_STOPS)
const hazardColor = ramp(HAZARD_STOPS)
const agingColor = ramp(AGING_STOPS)
const ERA_RGB = ERA_COLORS.map(hex)

// Map arbitrary calendar year (1700..2025) to ERA_RGB bucket index 0..10
function yearToEraBucket(y) {
  if (!y) return 0
  if (y <= 1750) return 1
  if (y <= 1925) return 2
  if (y <= 1945) return 3
  if (y <= 1958) return 4
  if (y <= 1968) return 5
  if (y <= 1978) return 6
  if (y <= 1991) return 7
  if (y <= 2008) return 8
  if (y <= 2020) return 9
  return 10
}

// Mean-pooled grids that coarse tiles read instead of single 20 m cells.
export function prepareRender(region) {
  const { terrain, city, people, size } = region
  const { columns, cell } = terrain
  const factor = 5 // 100 m
  const n = Math.ceil(columns / factor)
  const density = new Float32Array(n * n)
  const price100 = new Float32Array(n * n)
  for (let row = 0; row < columns; row++) {
    for (let column = 0; column < columns; column++) {
      const idx = column + row * columns
      const cell100 = Math.floor(column / factor) + Math.floor(row / factor) * n
      density[cell100] += people.residents[idx]
      if (city.landPrice) price100[cell100] += city.landPrice[idx]
    }
  }
  const perKm2 = 1e6 / (factor * cell) ** 2
  const invCount = 1 / (factor * factor)
  for (let index = 0; index < density.length; index++) {
    density[index] *= perKm2
    price100[index] *= invCount
  }
  region.render = { density100: density, price100, density100Columns: n, density100Cell: factor * cell, size }
  return region.render
}

// Fills `rgba` (TILE * TILE * 4) with the ground of the tile at (`level`, `tx`, `tz`).
// Optional `year` renders historical snapshot frames (1700..2025) when Extreme Sim history is loaded.
export function renderTile(region, layer, level, tx, tz, rgba = new Uint8ClampedArray(TILE * TILE * 4), opts = {}) {
  const { terrain, city, people, rail, size } = region
  const { columns, cell } = terrain
  const mpp = metresPerPixel(size, level)
  const x0 = tx * TILE * mpp
  const z0 = tz * TILE * mpp
  const w = TILE
  const padded = w + 2
  const detail = level >= DETAIL_LEVEL
  const natural = layer === 'natural' || layer === 'geology'
  const year = opts.year ?? 2025
  const histFrame = year < 2025 && region.historyByYear?.get(year) ? region.historyByYear.get(year) : null

  // Heights with a one-pixel border, for the shading.
  let heights
  let water = null
  if (detail && !natural) {
    const fine = region.fine.heights(x0 - mpp, z0 - mpp, mpp, padded, padded)
    heights = fine.height
    water = fine.water
  } else {
    heights = new Float32Array(padded * padded)
    const grid = natural ? terrain.elevation : city.ground
    const sampler = detail ? bicubic : bilinear
    for (let j = 0; j < padded; j++) {
      const z = z0 + (j - 0.5) * mpp
      for (let i = 0; i < padded; i++) {
        heights[i + j * padded] = sampler(grid, columns, cell, x0 + (i - 0.5) * mpp, z)
      }
    }
  }

  const exaggeration = Math.max(1.4, Math.min(9, 1 + mpp / 7))
  const strength = layer === 'relief' || layer === 'natural' || layer === 'geology' ? 1 : 0.6
  const lx = -0.5
  const ly = Math.SQRT1_2
  const lz = -0.5
  const color = [0, 0, 0]
  const prepared = region.render ?? prepareRender(region)
  const costColumns = rail.planColumns
  const costCell = rail.planCell

  for (let j = 0; j < w; j++) {
    const z = z0 + (j + 0.5) * mpp
    for (let i = 0; i < w; i++) {
      const x = x0 + (i + 0.5) * mpp
      const p = (i + 1) + (j + 1) * padded
      const h = heights[p]
      const gx = ((heights[p + 1] - heights[p - 1]) / (2 * mpp)) * exaggeration
      const gz = ((heights[p + padded] - heights[p - padded]) / (2 * mpp)) * exaggeration
      const shade = (-gx * lx + ly - gz * lz) / Math.sqrt(gx * gx + 1 + gz * gz) / ly

      let sx = x
      let sz = z
      if (detail) {
        sx += 7 * fbm(region.seed + 811, x / 45, z / 45, 2)
        sz += 7 * fbm(region.seed + 812, x / 45, z / 45, 2)
      }
      const column = Math.min(columns - 1, Math.max(0, Math.floor(sx / cell)))
      const row = Math.min(columns - 1, Math.max(0, Math.floor(sz / cell)))
      const index = column + row * columns

      const hIdx = histFrame
        ? Math.min(histFrame.columns - 1, Math.max(0, Math.floor(sx / histFrame.cell)))
          + Math.min(histFrame.columns - 1, Math.max(0, Math.floor(sz / histFrame.cell))) * histFrame.columns
        : -1
      const use = histFrame ? histFrame.use[hIdx] : city.use[index]
      const wet = water ? water[p] > 0 : (natural ? terrain.land[index] === LAND.CHANNEL : use === USE.WATER)

      switch (layer) {
        case 'natural':
        case 'relief':
          heightColor(h, color)
          break
        case 'geology': {
          if (terrain.geology) {
            copy(color, GEOLOGY_RGB[terrain.geology[index]] ?? GEOLOGY_RGB[2])
          } else {
            // Fallback for legacy browser regions without 9-class geology
            const l = terrain.land[index]
            const mapped = l === LAND.CHANNEL ? 8 : l === LAND.HILLS ? 0 : l === LAND.LOWLAND ? (terrain.hand[index] < 1.2 ? 6 : 5) : l === LAND.TERRACE ? 3 : (terrain.slope[index] > 0.12 ? 4 : 2)
            copy(color, GEOLOGY_RGB[mapped])
          }
          break
        }
        case 'hazard': {
          const fd = terrain.floodDepth
            ? terrain.floodDepth[index]
            : (terrain.land[index] === LAND.CHANNEL ? 4.5 : terrain.land[index] === LAND.LOWLAND ? Math.max(0.2, 2.2 - terrain.hand[index] * 0.5) : Math.max(0, 1.4 - terrain.hand[index]) * 0.6)
          hazardColor(fd, color)
          break
        }
        case 'zoning': {
          if (city.zoning) {
            copy(color, ZONING_RGB[city.zoning[index]] ?? ZONING_RGB[0])
          } else {
            // Fallback zoning visual derived from USE
            const u = city.use[index]
            const zf = u === USE.COMMERCIAL ? 10 : u === USE.STATION_HUB ? 11 : u === USE.HIGH ? 8 : u === USE.MID ? 5 : u === USE.DENSE ? 7 : u === USE.LOW ? 3 : u === USE.INDUSTRIAL ? 12 : u === USE.GREEN ? 2 : 1
            copy(color, ZONING_RGB[zf])
          }
          break
        }
        case 'aging': {
          const ag = city.localAging
            ? city.localAging[index]
            : (BUILT_USES.has(city.use[index]) ? 0.22 + (city.built[index] <= 5 ? 0.08 : -0.03) + 0.05 * fbm(region.seed + 833, x / 900, z / 900, 2) : 0.15)
          agingColor(ag, color)
          break
        }
        case 'use':
          copy(color, (detail ? YARD_RGB[use] : USE_RGB[use]) ?? USE_RGB[USE.LOW])
          if (detail) {
            if (use === USE.FIELD || use === USE.PADDY) {
              const angle = city.fieldAngle?.[index] ?? 0
              const across = -Math.sin(angle) * x + Math.cos(angle) * z
              const along = Math.cos(angle) * x + Math.sin(angle) * z
              const period = use === USE.FIELD ? 12 : 24
              const strip = Math.sin(across * ((Math.PI * 2) / period))
              const bund = use === USE.PADDY && (Math.abs(Math.sin(across * (Math.PI / 22))) > 0.965 || Math.abs(Math.sin(along * (Math.PI / 38))) > 0.972)
              const delta = bund ? -18 : strip > 0.72 ? -10 : strip < -0.5 ? 6 : 0
              color[0] = Math.max(0, Math.min(255, color[0] + delta))
              color[1] = Math.max(0, Math.min(255, color[1] + delta))
              color[2] = Math.max(0, Math.min(255, color[2] + delta * 0.7))
            } else if (use === USE.FOREST || use === USE.GREEN) {
              const canopy = fbm(region.seed + 821, x / 11, z / 11, 2)
              const d = canopy * 18
              color[0] = Math.max(0, Math.min(255, color[0] + d * 0.75))
              color[1] = Math.max(0, Math.min(255, color[1] + d))
              color[2] = Math.max(0, Math.min(255, color[2] + d * 0.6))
            } else if (use === USE.RIVERBED) {
              const bar = fbm(region.seed + 823, x / 28, z / 28, 2)
              if (bar > 0.16) {
                const t = Math.min(1, (bar - 0.16) * 2.4)
                color[0] = color[0] * (1 - t) + 216 * t
                color[1] = color[1] * (1 - t) + 210 * t
                color[2] = color[2] * (1 - t) + 194 * t
              }
            }
          }
          break
        case 'price': {
          const value = histFrame
            ? histFrame.price[hIdx]
            : detail
              ? (city.landPrice ? city.landPrice[index] : 0)
              : bilinear(prepared.price100, prepared.density100Columns, prepared.density100Cell, x, z)
          priceColor(value, color)
          break
        }
        case 'people': {
          const value = histFrame
            ? histFrame.density[hIdx] * 200
            : detail
              ? people.residents[index] * (1e6 / (cell * cell))
              : bilinear(prepared.density100, prepared.density100Columns, prepared.density100Cell, x, z)
          peopleColor(value, color)
          break
        }
        case 'era': {
          const bucket = city.builtYear
            ? yearToEraBucket(city.builtYear[index])
            : Math.min(ERA_RGB.length - 1, city.built[index])
          copy(color, ERA_RGB[bucket])
          if (!bucket && !wet) {
            const base = USE_RGB[use] ?? [220, 220, 215]
            color[0] = color[0] * 0.7 + base[0] * 0.3
            color[1] = color[1] * 0.7 + base[1] * 0.3
            color[2] = color[2] * 0.7 + base[2] * 0.3
          }
          break
        }
        case 'cost': {
          const value = detail
            ? rail.costSurface[Math.min(costColumns - 1, Math.floor(x / costCell)) + Math.min(costColumns - 1, Math.floor(z / costCell)) * costColumns]
            : bilinear(rail.costSurface, costColumns, costCell, x, z)
          costColor(value, color)
          break
        }
        default:
          copy(color, [200, 200, 200])
      }
      if (wet) {
        copy(color, USE_RGB[USE.WATER])
        if (detail) {
          const ripple = Math.sin(x * 0.28 + z * 0.19) * Math.cos(x * 0.14 - z * 0.25)
          color[0] = Math.max(0, Math.min(255, color[0] + ripple * 11))
          color[1] = Math.max(0, Math.min(255, color[1] + ripple * 12))
          color[2] = Math.max(0, Math.min(255, color[2] + ripple * 14))
        }
        if (water && water[p] === 2) {
          color[0] *= 0.91
          color[1] *= 0.95
        }
      }
      const light = wet ? 1 : 1 + (Math.min(1.25, Math.max(detail ? 0.55 : 0, shade)) - 1) * strength
      const o = (i + j * w) * 4
      rgba[o] = color[0] * light
      rgba[o + 1] = color[1] * light
      rgba[o + 2] = color[2] * light
      rgba[o + 3] = 255
    }
  }
  return { x0, z0, mpp, detail, level, year }
}

// Local streets and buildings for a tile, in pixel coordinates of that tile.
export function tileFeatures(region, layer, tile) {
  const { x0, z0, mpp, level, year = 2025 } = tile
  if (level < DETAIL_LEVEL || layer === 'natural' || layer === 'geology' || layer === 'cost') return null
  const margin = 40
  const x1 = x0 + TILE * mpp
  const z1 = z0 + TILE * mpp
  const toPixel = (x, z) => [(x - x0) / mpp, (z - z0) / mpp]

  const rawStreets = region.isExtremeSim && region.buildingCache?.streetsInWindow
    ? region.buildingCache.streetsInWindow(x0 - margin, z0 - margin, x1 + margin, z1 + margin)
    : streetsIn(region, x0 - margin, z0 - margin, x1 + margin, z1 + margin)

  const streets = rawStreets.map((street) => {
    const [ax, az] = toPixel(street.points[0], street.points[1])
    const [bx, bz] = toPixel(street.points[2], street.points[3])
    return { ax, az, bx, bz, width: street.width / mpp, kind: street.kind }
  })

  let buildings = []
  if (level >= BUILDING_LEVEL) {
    const rawBuildings = region.isExtremeSim && region.buildingCache?.inWindow
      ? region.buildingCache.inWindow(x0 - margin, z0 - margin, x1 + margin, z1 + margin)
      : buildingsIn(region, x0 - margin, z0 - margin, x1 + margin, z1 + margin)

    const shopCatalog = region.manifest?.catalogs?.shops
    buildings = rawBuildings
      .filter((b) => !b.builtYear || b.builtYear <= year)
      .map((building) => {
        const c = building.corners
        const corners = []
        for (let k = 0; k < 8; k += 2) corners.push(...toPixel(c[k], c[k + 1]))
        const lot = building.lot ? [building.lot[0] / mpp, building.lot[1] / mpp, building.lot[2] / mpp, building.lot[3] / mpp] : null
        const carL = (building.lot?.[0] ?? 0) >= 2.45
        const carR = (building.lot?.[1] ?? 0) >= 2.45
        let carSide = ''
        if (carL && carR) carSide = (c[3] - c[1]) >= 0 ? 'L' : 'R'
        else if (carL) carSide = 'L'
        else if (carR) carSide = 'R'
        const shopColor = building.shopType !== undefined && building.shopType !== 255 && shopCatalog?.[building.shopType]
          ? shopCatalog[building.shopType].color
          : null
        return {
          corners, lot, carSide, tier: building.tier ?? 1, floors: building.floors,
          use: building.use, tone: building.tone, shopColor,
        }
      })
  }
  return { streets, buildings }
}

const ROOF = {
  [USE.LOW]: ['#8d8f95', '#6f5a4f', '#a46e58', '#5d6f86', '#b9b2a6', '#7b7f74'],
  [USE.DENSE]: ['#7d7f86', '#6a5850', '#94705e', '#8d9096', '#a39c90'],
  [USE.MID]: ['#c9c6bf', '#b9b6af', '#d6d1c6', '#aeb3b6'],
  [USE.HIGH]: ['#c2c3c4', '#adb2b7', '#d0cdc6'],
  [USE.COMMERCIAL]: ['#c9b8b5', '#b8b0ab', '#d8cfc6', '#a9a4a6'],
  [USE.ROADSIDE_COM]: ['#d6b8a4', '#c9a690', '#bfb5ad'],
  [USE.STATION_HUB]: ['#b8bfc9', '#c9c4be', '#9fb0c4'],
  [USE.INDUSTRIAL]: ['#9aa7b4', '#a8b3ba', '#8e979e'],
  [USE.PUBLIC]: ['#c6c8c2', '#bfc4c8'],
}

export function drawFeatures(ctx, features, layer) {
  if (!features) return
  ctx.lineCap = 'round'
  const muted = layer === 'people' || layer === 'era' || layer === 'price' || layer === 'hazard' || layer === 'zoning' || layer === 'aging'
  for (const street of features.streets) {
    if (street.kind === 'stair') {
      ctx.strokeStyle = muted ? 'rgba(255,255,255,0.72)' : '#dfd4c4'
      ctx.lineWidth = Math.max(1.2, street.width)
      ctx.beginPath()
      ctx.moveTo(street.ax, street.az)
      ctx.lineTo(street.bx, street.bz)
      ctx.stroke()
      ctx.save()
      ctx.strokeStyle = 'rgba(92, 74, 54, 0.72)'
      ctx.lineWidth = Math.max(1.0, street.width * 0.75)
      ctx.setLineDash([1.6, 2.2])
      ctx.beginPath()
      ctx.moveTo(street.ax, street.az)
      ctx.lineTo(street.bx, street.bz)
      ctx.stroke()
      ctx.restore()
      continue
    }
    ctx.strokeStyle = muted
      ? 'rgba(255,255,255,0.68)'
      : street.kind === 'alley' ? '#ece7db'
        : street.kind === 'designated' ? '#f1ede3'
          : street.kind === 'greenway' ? '#cfe0c3'
            : street.kind === 'lane' ? '#f4f1e8' : '#fbfaf6'
    ctx.lineWidth = Math.max(street.kind === 'alley' ? 0.65 : 0.85, street.width)
    ctx.beginPath()
    ctx.moveTo(street.ax, street.az)
    ctx.lineTo(street.bx, street.bz)
    ctx.stroke()
  }
  ctx.lineJoin = 'miter'
  if (!muted) {
    for (const building of features.buildings) {
      const poly = building.parcelPoly
      const tier = building.tier ?? 1
      if (poly && poly.length >= 6) {
        ctx.beginPath()
        ctx.moveTo(poly[0], poly[1])
        for (let k = 2; k < poly.length; k += 2) ctx.lineTo(poly[k], poly[k + 1])
        ctx.closePath()
        ctx.fillStyle = tier === 4 ? 'rgba(116,154,88,0.88)'
          : tier >= 2 ? 'rgba(138,168,104,0.76)' : 'rgba(202,195,180,0.68)'
        ctx.fill()
        ctx.lineWidth = tier === 4 ? 0.75 : 0.42
        ctx.strokeStyle = tier === 4 ? 'rgba(72,64,54,0.65)' : 'rgba(84,78,68,0.42)'
        ctx.stroke()
        continue
      }
      const lot = building.lot
      if (!lot) continue
      const [pL, pR, pF, pB] = lot
      if (pL + pR + pF + pB < 0.35) continue
      const c = building.corners
      const w = Math.hypot(c[2] - c[0], c[3] - c[1])
      const d = Math.hypot(c[6] - c[0], c[7] - c[1])
      if (w < 1.5 || d < 1.5) continue
      const ux = (c[2] - c[0]) / w, uz = (c[3] - c[1]) / w
      const vx = (c[6] - c[0]) / d, vz = (c[7] - c[1]) / d
      const lx0 = c[0] - ux * pL - vx * pF, lz0 = c[1] - uz * pL - vz * pF
      const lx1 = c[2] + ux * pR - vx * pF, lz1 = c[3] + uz * pR - vz * pF
      const lx2 = c[4] + ux * pR + vx * pB, lz2 = c[5] + uz * pR + vz * pB
      const lx3 = c[6] - ux * pL + vx * pB, lz3 = c[7] - uz * pL + vz * pB
      ctx.beginPath()
      ctx.moveTo(lx0, lz0)
      ctx.lineTo(lx1, lz1)
      ctx.lineTo(lx2, lz2)
      ctx.lineTo(lx3, lz3)
      ctx.closePath()
      ctx.fillStyle = tier === 4 ? 'rgba(116,154,88,0.88)'
        : tier >= 2 || (pF + pB >= w * 0.25 && building.use === USE.LOW) ? 'rgba(138,168,104,0.78)'
          : 'rgba(202,195,180,0.68)'
      ctx.fill()
      ctx.lineWidth = tier === 4 ? 0.75 : 0.42
      ctx.strokeStyle = tier === 4 ? 'rgba(72,64,54,0.65)' : 'rgba(84,78,68,0.36)'
      ctx.stroke()
    }
  }
  for (const building of features.buildings) {
    const palette = ROOF[building.use] ?? ROOF[USE.LOW]
    let fill = building.shopColor && !muted
      ? building.shopColor
      : palette[Math.floor(building.tone * palette.length) % palette.length]
    if (muted) fill = 'rgba(70,64,60,0.30)'
    const c = building.corners
    ctx.beginPath()
    ctx.moveTo(c[0], c[1])
    ctx.lineTo(c[2], c[3])
    ctx.lineTo(c[4], c[5])
    ctx.lineTo(c[6], c[7])
    ctx.closePath()
    ctx.fillStyle = fill
    ctx.fill()
    if (!muted) {
      ctx.lineWidth = building.shopColor ? 0.9 : 0.6
      ctx.strokeStyle = building.shopColor ? 'rgba(20,20,25,0.72)' : 'rgba(40,36,32,0.45)'
      ctx.stroke()
      if (building.floors >= 4) {
        const reach = Math.min(6, building.floors * 0.35)
        ctx.beginPath()
        ctx.moveTo(c[2], c[3])
        ctx.lineTo(c[2] + reach, c[3] + reach)
        ctx.lineTo(c[4] + reach, c[5] + reach)
        ctx.lineTo(c[6] + reach, c[7] + reach)
        ctx.lineTo(c[6], c[7])
        ctx.lineTo(c[4], c[5])
        ctx.closePath()
        ctx.fillStyle = 'rgba(30,30,40,0.18)'
        ctx.fill()
      }
    }
  }
}

export function describePoint(region, x, z) {
  const { terrain, city, people, size } = region
  if (!(x >= 0 && z >= 0 && x < size && z < size)) return null
  const { columns, cell } = terrain
  const column = Math.floor(x / cell)
  const row = Math.floor(z / cell)
  const index = column + row * columns
  const fine = region.fine.heightAt(x, z)
  const grid40 = columns / 2
  const geoIdx = terrain.geology ? terrain.geology[index] : null
  const zoneIdx = city.zoning ? city.zoning[index] : null

  // Find nearest active/shuttered commercial facility within 45m if Extreme Sim is loaded
  let nearestShop = null
  if (region.commerce?.active) {
    let bestD = 48
    const checkList = (list) => {
      for (let i = 0; i < list.length; i++) {
        const s = list[i]
        const dx = s.x - x
        if (Math.abs(dx) > bestD) continue
        const dz = s.z - z
        if (Math.abs(dz) > bestD) continue
        const d = Math.hypot(dx, dz)
        if (d < bestD) { bestD = d; nearestShop = s }
      }
    }
    checkList(region.commerce.active)
    if (region.commerce.shuttered) checkList(region.commerce.shuttered)
  }

  let nearestSlope = null
  if (region.slopes?.length) {
    let bestD = 160
    for (const s of region.slopes) {
      const d = Math.hypot(s.x - x, s.z - z)
      if (d < bestD) { bestD = d; nearestSlope = s }
    }
  }

  let nearestRoad = null
  if (region.city?.roads?.links?.length) {
    let bestD = 55
    for (const l of region.city.roads.links) {
      const pts = l.points
      for (let k = 2; k < pts.length; k += 2) {
        const ax = pts[k - 2], az = pts[k - 1], dx = pts[k] - ax, dz = pts[k + 1] - az
        const l2 = dx * dx + dz * dz
        const t = l2 > 1e-6 ? Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / l2)) : 0
        const d = Math.hypot(ax + dx * t - x, az + dz * t - z)
        if (d < bestD) { bestD = d; nearestRoad = l }
      }
    }
  }

  let clickedParcel = null
  if (region.buildingCache?.inWindow) {
    const near = region.buildingCache.inWindow(x - 10, z - 10, x + 10, z + 10)
    let bestD = 16
    for (const b of near) {
      const cx = (b.corners[0] + b.corners[2] + b.corners[4] + b.corners[6]) * 0.25
      const cz = (b.corners[1] + b.corners[3] + b.corners[5] + b.corners[7]) * 0.25
      const d = Math.hypot(cx - x, cz - z)
      if (d < bestD) { bestD = d; clickedParcel = b }
    }
  }

  return {
    x, z,
    height: fine.height,
    water: fine.water,
    natural: bicubic(terrain.elevation, columns, cell, x, z),
    land: terrain.land[index],
    geology: geoIdx !== null ? GEOLOGY_STYLE[geoIdx]?.name : null,
    bearingN: terrain.bearingN ? terrain.bearingN[index] : null,
    floodDepth: terrain.floodDepth ? terrain.floodDepth[index] : null,
    zoning: zoneIdx !== null ? ZONING_STYLE[zoneIdx]?.name : null,
    use: city.use[index],
    era: city.built[index],
    builtYear: city.builtYear ? city.builtYear[index] : null,
    rebuiltYear: city.rebuiltYear ? city.rebuiltYear[index] : null,
    aging: city.localAging ? city.localAging[index] : null,
    newtown: city.newtown[index] === 1,
    density: people.residents[index] * (1e6 / (cell * cell)),
    jobs: people.jobs[index] * (1e6 / (cell * cell)),
    landPrice: city.landPrice ? city.landPrice[index] : 0,
    slope: terrain.slope[index],
    minutes: city.travel ? city.travel[(column >> 1) + (row >> 1) * grid40] : 0,
    nearestSlope,
    nearestRoad: nearestRoad ? {
      legalName: nearestRoad.legalName ?? '公道',
      width: nearestRoad.width,
      avgGradePct: nearestRoad.avgGradePct ?? 0,
      maxGradePct: nearestRoad.maxGradePct ?? 0,
      legalSpeedKmh: nearestRoad.legalSpeedKmh ?? null,
      oneWay: nearestRoad.oneWay ?? 0,
      oneWayYear: nearestRoad.oneWayYear ?? 0,
      regFlags: nearestRoad.regFlags ?? 0,
      zone30Year: nearestRoad.zone30Year ?? 0,
      centerlineType: nearestRoad.centerlineType ?? 'none',
    } : null,
    clickedParcel,
    nearestShop: nearestShop ? {
      name: nearestShop.name,
      typeId: nearestShop.typeId,
      code: nearestShop.code,
      openedYear: nearestShop.openedYear,
      closedYear: nearestShop.closedYear || 0,
      closeReason: nearestShop.closeReason || '',
      floorArea: nearestShop.floorArea,
    } : null,
  }
}
