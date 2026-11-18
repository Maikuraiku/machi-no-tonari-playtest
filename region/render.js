// Map tiles of the region. A tile is a square of pixels at some number of metres per pixel;
// each layer colours the ground by one thing (height, land use, people, era, cost) and shades it
// by the relief. Close in, the ground comes from the 1 m sampler, and local streets and buildings
// are drawn on top. The raster part needs no canvas, so it runs in a worker and in Node alike.
import { BUILT_USES, ERAS, USE } from './develop.js?v=online-1794980046418'
import { fbm } from './noise.js?v=online-1794980046418'
import { LAND, bicubic, bilinear } from './terrain.js?v=online-1794980046418'
import { buildingsIn, streetsIn } from './streets.js?v=online-1794980046418'

export const TILE = 256
export const LEVELS = 8 // level 0 shows the whole region in one tile; each level halves the metres per pixel
export const DETAIL_LEVEL = 4 // from here on the ground comes from the 1 m sampler
export const BUILDING_LEVEL = 5 // and from here on buildings are drawn

export const LAYERS = {
  relief: { name: '地形（整備後）' },
  natural: { name: '地形（整備前）' },
  use: { name: '土地利用' },
  people: { name: '人口密度' },
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
  [USE.COMMERCIAL]: { name: '商業', color: '#e4607a' },
  [USE.INDUSTRIAL]: { name: '工業', color: '#b4a2cc' },
  [USE.PUBLIC]: { name: '学校・公共', color: '#9cb4d6' },
}
const USE_RGB = []
for (const [use, style] of Object.entries(USE_STYLE)) USE_RGB[use] = hex(style.color)

// Close in, built-up ground between the buildings is yards and paving rather than a flat tint.
const YARD_RGB = []
for (const use of Object.values(USE)) {
  const [r, g, b] = USE_RGB[use]
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
export const COST_STOPS = [[20, '#2f8a4f'], [85, '#a8d672'], [150, '#fde38c'], [250, '#f57b48'], [340, '#a8112b'], [500, '#7a1530'], [650, '#5d8fd8']]
export const ERA_COLORS = ['#e8ece2', '#6e4026', '#a8512b', '#d27a2c', '#e6a43a', '#e3d04d', '#a7d35c', '#5cbd8c', '#3a9fbc', '#4569c6']
export const ERA_LABELS = ['未市街地', ...ERAS.slice(1).map((year) => (year === 1700 ? '江戸期' : `〜${year}年`))]
const heightColor = ramp(HEIGHT_STOPS)
const peopleColor = ramp(PEOPLE_STOPS)
const costColor = ramp(COST_STOPS)
const ERA_RGB = ERA_COLORS.map(hex)

// Mean-pooled grids that coarse tiles read instead of single 20 m cells.
export function prepareRender(region) {
  const { terrain, people, size } = region
  const { columns, cell } = terrain
  const factor = 5 // 100 m
  const n = Math.ceil(columns / factor)
  const density = new Float32Array(n * n)
  for (let row = 0; row < columns; row++) {
    for (let column = 0; column < columns; column++) {
      density[Math.floor(column / factor) + Math.floor(row / factor) * n] += people.residents[column + row * columns]
    }
  }
  const perKm2 = 1e6 / (factor * cell) ** 2
  for (let index = 0; index < density.length; index++) density[index] *= perKm2
  region.render = { density100: density, density100Columns: n, density100Cell: factor * cell, size }
  return region.render
}

// Fills `rgba` (TILE * TILE * 4) with the ground of the tile at (`level`, `tx`, `tz`).
// Returns the box in metres and what else should be drawn on it.
export function renderTile(region, layer, level, tx, tz, rgba = new Uint8ClampedArray(TILE * TILE * 4)) {
  const { terrain, city, people, rail, size } = region
  const { columns, cell } = terrain
  const mpp = metresPerPixel(size, level)
  const x0 = tx * TILE * mpp
  const z0 = tz * TILE * mpp
  const w = TILE
  const padded = w + 2
  const detail = level >= DETAIL_LEVEL
  const natural = layer === 'natural'

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

  // Slopes are gentle at this scale, so the relief is exaggerated when seen from far out.
  const exaggeration = Math.max(1.4, Math.min(9, 1 + mpp / 7))
  const strength = layer === 'relief' || natural ? 1 : 0.6
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
      // Shading from the light in the north-west, 1 when the ground is level.
      const gx = (heights[p + 1] - heights[p - 1]) / (2 * mpp) * exaggeration
      const gz = (heights[p + padded] - heights[p - padded]) / (2 * mpp) * exaggeration
      const shade = (-gx * lx + ly - gz * lz) / Math.sqrt(gx * gx + 1 + gz * gz) / ly

      // Categories are read a few metres off true close in, so 20 m cells do not show as squares.
      let sx = x
      let sz = z
      if (detail) {
        sx += 7 * fbm(region.seed + 811, x / 45, z / 45, 2)
        sz += 7 * fbm(region.seed + 812, x / 45, z / 45, 2)
      }
      const column = Math.min(columns - 1, Math.max(0, Math.floor(sx / cell)))
      const row = Math.min(columns - 1, Math.max(0, Math.floor(sz / cell)))
      const index = column + row * columns
      const use = city.use[index]
      let wet = water ? water[p] > 0 : (natural ? terrain.land[index] === LAND.CHANNEL : use === USE.WATER)

      switch (layer) {
        case 'natural':
        case 'relief':
          heightColor(h, color)
          break
        case 'use':
          copy(color, detail ? YARD_RGB[use] : USE_RGB[use])
          break
        case 'people': {
          const value = detail
            ? people.residents[index] * (1e6 / (cell * cell))
            : bilinear(prepared.density100, prepared.density100Columns, prepared.density100Cell, x, z)
          peopleColor(value, color)
          break
        }
        case 'era':
          copy(color, ERA_RGB[city.built[index]])
          if (!city.built[index] && !wet) {
            // Unbuilt land keeps a hint of what it is.
            const base = USE_RGB[use]
            color[0] = color[0] * 0.7 + base[0] * 0.3
            color[1] = color[1] * 0.7 + base[1] * 0.3
            color[2] = color[2] * 0.7 + base[2] * 0.3
          }
          break
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
        if (water && water[p] === 2) {
          color[0] *= 0.92
          color[1] *= 0.96
        }
      }
      // Close in, the retaining walls of terraced lots and the banks of streams are steep enough
      // to shade black; they are kept to a darker line instead.
      const light = wet ? 1 : 1 + (Math.min(1.25, Math.max(detail ? 0.55 : 0, shade)) - 1) * strength
      const o = (i + j * w) * 4
      rgba[o] = color[0] * light
      rgba[o + 1] = color[1] * light
      rgba[o + 2] = color[2] * light
      rgba[o + 3] = 255
    }
  }
  return { x0, z0, mpp, detail, level }
}

// Local streets and buildings for a tile, in pixel coordinates of that tile.
export function tileFeatures(region, layer, tile) {
  const { x0, z0, mpp, level } = tile
  if (level < DETAIL_LEVEL || layer === 'natural' || layer === 'cost') return null
  const margin = 40
  const x1 = x0 + TILE * mpp
  const z1 = z0 + TILE * mpp
  const toPixel = (x, z) => [(x - x0) / mpp, (z - z0) / mpp]
  const streets = streetsIn(region, x0 - margin, z0 - margin, x1 + margin, z1 + margin).map((street) => {
    const [ax, az] = toPixel(street.points[0], street.points[1])
    const [bx, bz] = toPixel(street.points[2], street.points[3])
    return { ax, az, bx, bz, width: street.width / mpp }
  })
  let buildings = []
  if (level >= BUILDING_LEVEL) {
    buildings = buildingsIn(region, x0 - margin, z0 - margin, x1 + margin, z1 + margin).map((building) => {
      const corners = []
      for (let k = 0; k < 8; k += 2) corners.push(...toPixel(building.corners[k], building.corners[k + 1]))
      return { corners, floors: building.floors, use: building.use, tone: building.tone }
    })
  }
  return { streets, buildings }
}

// Building roofs by use: a base colour, varied per building by `tone`.
const ROOF = {
  [USE.LOW]: ['#8d8f95', '#6f5a4f', '#a46e58', '#5d6f86', '#b9b2a6', '#7b7f74'],
  [USE.DENSE]: ['#7d7f86', '#6a5850', '#94705e', '#8d9096', '#a39c90'],
  [USE.MID]: ['#c9c6bf', '#b9b6af', '#d6d1c6', '#aeb3b6'],
  [USE.HIGH]: ['#c2c3c4', '#adb2b7', '#d0cdc6'],
  [USE.COMMERCIAL]: ['#c9b8b5', '#b8b0ab', '#d8cfc6', '#a9a4a6'],
  [USE.INDUSTRIAL]: ['#9aa7b4', '#a8b3ba', '#8e979e'],
  [USE.PUBLIC]: ['#c6c8c2', '#bfc4c8'],
}

// Draws streets and buildings with any 2D canvas context (a worker's OffscreenCanvas).
export function drawFeatures(ctx, features, layer) {
  if (!features) return
  ctx.lineCap = 'round'
  const muted = layer === 'people' || layer === 'era'
  ctx.strokeStyle = muted ? 'rgba(255,255,255,0.75)' : '#fbfaf6'
  for (const street of features.streets) {
    ctx.lineWidth = Math.max(0.8, street.width)
    ctx.beginPath()
    ctx.moveTo(street.ax, street.az)
    ctx.lineTo(street.bx, street.bz)
    ctx.stroke()
  }
  ctx.lineJoin = 'miter'
  for (const building of features.buildings) {
    const palette = ROOF[building.use] ?? ROOF[USE.LOW]
    let fill = palette[Math.floor(building.tone * palette.length) % palette.length]
    if (muted) fill = 'rgba(70,64,60,0.32)'
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
      ctx.lineWidth = 0.6
      ctx.strokeStyle = 'rgba(40,36,32,0.45)'
      ctx.stroke()
      // A taller building throws a short shadow to the south-east.
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

// What is at a point, for the readout under the cursor.
export function describePoint(region, x, z) {
  const { terrain, city, people, size } = region
  if (!(x >= 0 && z >= 0 && x < size && z < size)) return null
  const { columns, cell } = terrain
  const index = Math.floor(x / cell) + Math.floor(z / cell) * columns
  const fine = region.fine.heightAt(x, z)
  const grid40 = columns / 2
  const column = Math.floor(x / cell)
  const row = Math.floor(z / cell)
  return {
    x, z,
    height: fine.height,
    water: fine.water,
    natural: bicubic(terrain.elevation, columns, cell, x, z),
    land: terrain.land[index],
    use: city.use[index],
    era: city.built[index],
    newtown: city.newtown[index] === 1,
    density: people.residents[index] * (1e6 / (cell * cell)),
    jobs: people.jobs[index] * (1e6 / (cell * cell)),
    slope: terrain.slope[index],
    minutes: city.travel[(column >> 1) + (row >> 1) * grid40],
  }
}
