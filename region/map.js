// The region map page. A worker generates or loads the region (Extreme Deep 5m CLI pack when
// available, or browser fallback) and draws map tiles on request. This page lays out tiles,
// renders 1700-2025 historical timeline playback, BPR traffic congestion, Kokubunji springs,
// 44-format commercial shops & vacancies, rail vertical profiles, and triggers server CLI runs.
import { ROAD, ROAD_WIDTH } from './develop.js'
import { STRUCTURE, STRUCTURE_NAMES } from './rail.js'
import { regionSeed } from './region.js'
import { createGameLink } from './game-link.js'
import {
  AGING_STOPS, COST_STOPS, ERA_COLORS, ERA_LABELS, GEOLOGY_STYLE, HAZARD_STOPS,
  HEIGHT_STOPS, LAYERS, LEVELS, PEOPLE_STOPS, PRICE_STOPS, TILE, USE_STYLE, ZONING_STYLE,
  metresPerPixel,
} from './render.js'

const $ = (selector, root = document) => root.querySelector(selector)
const FONT = '"Yu Gothic UI", "Hiragino Sans", "Noto Sans JP", Meiryo, system-ui, sans-serif'
const LAND_NAMES = ['台地', '段丘', '低地', '丘陵', '川']
const STRUCTURE_COLORS = ['#3d4247', '#8b6b3d', '#4f74a8', '#1d4f9a', '#c27a2c', '#7b5aa6', '#59626b', '#b03a6f']
const DIFFICULTY_COLORS = ['', '#7cc68a', '#c6dd77', '#f2c84b', '#ef8a3c', '#d2453a']
const DIFFICULTY_NAMES = ['', 'やさしい', 'ふつう', 'やや難しい', '難しい', '非常に難しい']
const ROAD_PX = { [ROAD.COLLECTOR]: 1.1, [ROAD.ARTERIAL]: 2.2, [ROAD.TRUNK]: 3 }
const ROAD_FILL = { [ROAD.COLLECTOR]: '#ffffff', [ROAD.ARTERIAL]: '#fff4cf', [ROAD.TRUNK]: '#ffe19a' }
const LOC_LABELS = {
  kaido: '旧街道・宿場沿い',
  station: '駅前・商業核',
  shoppingSt: '商店街通り',
  roadside: '幹線ロードサイド',
  residential: '住宅街・生活道路',
}
const SHOP_FILTERS = [
  { id: 'all', label: 'すべて' },
  { id: 'edo', label: '江戸・伝統' },
  { id: 'trad_retail', label: '個人商店' },
  { id: 'modern_retail', label: '現代チェーン' },
  { id: 'large_retail', label: '大型商業' },
  { id: 'dining', label: '飲食・カフェ' },
  { id: 'medical', label: '医療・介護' },
  { id: 'service', label: '生活サービス' },
  { id: 'vacant', label: '空き店舗' },
]
const MAX_INFLIGHT = 2

const canvas = $('#map')
const ctx = canvas.getContext('2d')
const state = {
  seed: null,
  ready: false,
  isExtremeSim: false,
  summary: null,
  overlay: null,
  // The region's fingerprints ({ division, lines }) from the worker, for game-link.js.
  fingerprint: null,
  layer: 'relief',
  year: 2025,
  playing: false,
  playTimer: 0,
  shopFilter: 'all',
  shopCodeFilter: '',
  selectedShop: null,
  cliPollTimer: 0,
  show: {
    roads: true,
    trafficLaw: true,
    traffic: false,
    streams: true,
    springs: false,
    rail: true,
    labels: true,
    slopes: true,
    urbanNodes: true,
    shops: true,
    desire: false,
    districts: true,
  },
  district: -1,
  view: { cx: 10000, cz: 10000, mpp: 40 },
  selected: -1,
  marker: null,
  dpr: 1,
  cssW: 1,
  cssH: 1,
  fitted: false,
}

// ---- Numbers in words ----
const number = new Intl.NumberFormat('ja-JP')
const whole = (value) => number.format(Math.round(value))
function persons(value) {
  if (value >= 1e8) return `${(value / 1e8).toFixed(2)}億`
  if (value >= 1e4) return `${(value / 1e4).toFixed(value >= 1e6 ? 0 : 1)}万`
  return whole(value)
}
function oku(value) {
  return value >= 1e4 ? `${(value / 1e4).toFixed(2)}兆円` : `${whole(value)}億円`
}
const km = (metres, digits = 1) => `${(metres / 1000).toFixed(digits)}km`
const percent = (share) => `${(share * 100).toFixed(1)}%`
const escape = (text) => String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

// ---- The worker ----
let worker = null
let requestId = 0
let inflight = 0
let queue = []
let frame = 0
const tiles = new Map()
const tileRequests = new Map()

function startWorker() {
  worker?.terminate()
  for (const entry of tiles.values()) entry.bitmap?.close?.()
  tiles.clear()
  tileRequests.clear()
  inflight = 0
  queue = []
  worker = new Worker(new URL('./worker.js?v=5', import.meta.url), { type: 'module' })
  worker.onmessage = (event) => onMessage(event.data)
  worker.onerror = (event) => {
    event.preventDefault?.()
    showStatus(`計算用のワーカーを起動できませんでした。\n${event.message ?? ''}`, true)
  }
}

function onMessage(message) {
  if (message.seed === state.seed) state.heard = true
  if (message.type === 'progress') {
    if (message.seed !== state.seed) return
    showProgress(message.label, message.fraction, message.elapsed)
  } else if (message.type === 'ready') {
    if (message.seed !== state.seed) return
    onReady(message)
  } else if (message.type === 'tile') onTile(message)
  else if (message.type === 'point') showReadout(message.info)
  else if (message.type === 'heights') heightRequests.get(message.id)?.(message)
  else if (message.type === 'error') {
    console.error(message.message)
    if (message.request === 'generate') showStatus(`生成に失敗しました。\n${message.message}`, true)
    else if (message.request === 'tile') {
      const key = tileRequests.get(message.id)
      tileRequests.delete(message.id)
      inflight = Math.max(0, inflight - 1)
      if (key) tiles.delete(key)
    }
  }
}

let watchdog = 0
function generate(text, attempt = 0) {
  stopPlayback()
  const seed = regionSeed(text)
  state.seed = seed
  state.ready = false
  state.isExtremeSim = false
  state.heard = false
  state.summary = null
  state.overlay = null
  state.fingerprint = null
  state.selected = -1
  state.district = -1
  state.selectedShop = null
  state.marker = null
  for (const id of ['summary', 'eras', 'lines', 'line-detail', 'export', 'district', 'shop-detail', 'commerce', 'timeline-bar']) {
    const el = $('#' + id)
    if (el) el.hidden = true
  }
  const badge = $('#sim-badge')
  if (badge) badge.hidden = true
  $('#readout').hidden = true
  startWorker()
  showStatus(attempt ? '計算の部品の読み込みに時間がかかったので、もう一度始めています…' : '土地を読み込んでいます…')
  showProgress('準備', 0, 0)
  worker.postMessage({ type: 'generate', seed })
  saveHash()
  requestDraw()
  // A worker whose modules never arrived says nothing at all: start it again, twice at most.
  clearTimeout(watchdog)
  watchdog = setTimeout(() => {
    if (state.heard || state.seed !== seed) return
    if (attempt < 2) generate(text, attempt + 1)
    else showStatus('計算を始められませんでした。ページを読み込み直してください。', true)
  }, 15000)
}

function onReady(message) {
  state.ready = true
  state.isExtremeSim = Boolean(message.isExtremeSim)
  state.summary = message.summary
  state.overlay = prepareOverlay(message.overlay)
  state.fingerprint = message.fingerprint ?? null
  const years = state.overlay.years ?? [2025]
  if (!years.includes(state.year)) state.year = years[years.length - 1]
  $('#progress').hidden = true
  showStatus(null)
  if (!state.fitted) fitView()
  state.fitted = true

  const badge = $('#sim-badge')
  if (badge) {
    badge.hidden = false
    if (state.isExtremeSim) {
      badge.className = 'sim-badge'
      badge.textContent = state.summary.has5mTerrain ? '5m超極限CLI' : '20m高速CLI'
    } else {
      badge.className = 'sim-badge fallback'
      badge.textContent = 'ブラウザ簡易'
    }
  }

  const wanted = state.pendingLine
  state.pendingLine = null
  renderTimeline()
  renderCommerce()
  renderSummary()
  renderEras()
  renderLines()
  $('#export').hidden = false
  if (Number.isInteger(wanted) && state.overlay.lines.some((line) => line.id === wanted)) selectLine(wanted, false)
  const district = state.pendingDistrict
  state.pendingDistrict = null
  const list = state.overlay.districts?.list ?? []
  const chosen = Number.isInteger(district) && list[district] ? district
    : (list.filter((entry) => entry?.stations?.length).sort((a, b) => Math.hypot(a.x - 10000, a.z - 10000) - Math.hypot(b.x - 10000, b.z - 10000))[0] ?? list[0])?.id
  if (Number.isInteger(chosen) && list[chosen]) {
    state.district = -1
    selectDistrict(chosen)
  }
  requestDraw()
}

function showProgress(label, fraction, elapsed) {
  const box = $('#progress')
  box.hidden = false
  $('.bar span', box).style.width = `${Math.round(fraction * 100)}%`
  $('p', box).textContent = `${label}（${Math.round(fraction * 100)}%・${(elapsed / 1000).toFixed(1)}秒）`
}

function showStatus(text, error = false) {
  const box = $('#status')
  box.hidden = !text
  box.classList.toggle('error', error)
  if (text) box.textContent = text
}

// ---- Lines to draw, prepared once per region ----
function polyline(path, points) {
  path.moveTo(points[0], points[1])
  for (let k = 2; k < points.length; k += 2) path.lineTo(points[k], points[k + 1])
}

function prepareOverlay(data) {
  const roads = { [ROAD.COLLECTOR]: new Path2D(), [ROAD.ARTERIAL]: new Path2D(), [ROAD.TRUNK]: new Path2D() }
  for (const road of data.roads) {
    road.path = new Path2D()
    polyline(road.path, road.points)
    if (roads[road.kind]) polyline(roads[road.kind], road.points)
  }
  const covered = new Path2D()
  for (const stream of data.streams) {
    stream.path = new Path2D()
    polyline(stream.path, stream.points)
    if (stream.covered) polyline(covered, stream.points)
  }
  for (const line of data.lines) {
    const surface = new Path2D()
    const under = new Path2D()
    const points = line.points
    const count = points.length / 2
    let k = 0
    while (k < count - 1) {
      const below = line.structure[k + 1] >= STRUCTURE.COVERED
      const path = below ? under : surface
      path.moveTo(points[k * 2], points[k * 2 + 1])
      while (k < count - 1 && (line.structure[k + 1] >= STRUCTURE.COVERED) === below) {
        k++
        path.lineTo(points[k * 2], points[k * 2 + 1])
      }
    }
    line.paths = { surface, under }
  }
  let maxLoad = 0
  for (const road of data.roads) maxLoad = Math.max(maxLoad, road.load)
  // District borders: towns (町) and their blocks (丁目).
  const borders = { town: new Path2D(), block: new Path2D() }
  for (const kind of ['town', 'block']) {
    const segments = data.districts.boundaries[kind]
    for (let k = 0; k < segments.length; k += 4) {
      borders[kind].moveTo(segments[k], segments[k + 1])
      borders[kind].lineTo(segments[k + 2], segments[k + 3])
    }
  }
  // Shop catalog quick lookup by id
  const shopCatalog = new Map()
  for (const entry of data.catalogs?.shops ?? []) shopCatalog.set(entry.id, entry)
  return { ...data, paths: { roads, covered, borders }, maxLoad, shopCatalog }
}

// The district (丁目) at a point of the map, or -1.
function districtAt(x, z) {
  const d = state.overlay?.districts
  if (!d) return -1
  const cx = Math.floor(x / d.cell)
  const cz = Math.floor(z / d.cell)
  if (cx < 0 || cz < 0 || cx >= d.columns || cz >= d.columns) return -1
  return d.districtOf[cx + cz * d.columns]
}

// ---- The view ----
function resize() {
  const rect = canvas.getBoundingClientRect()
  state.dpr = Math.min(2.5, window.devicePixelRatio || 1)
  state.cssW = Math.max(1, rect.width)
  state.cssH = Math.max(1, rect.height)
  canvas.width = Math.round(state.cssW * state.dpr)
  canvas.height = Math.round(state.cssH * state.dpr)
  clampView()
  requestDraw()
}

function regionSize() {
  return state.overlay?.size ?? 20000
}

// On a phone the panel covers the lower part of the map; things are centred in what is left.
function visibleHeight() {
  const panel = $('#panel')
  if (getComputedStyle(panel).position !== 'fixed' || panel.classList.contains('collapsed')) return state.cssH
  const top = panel.getBoundingClientRect().top - canvas.getBoundingClientRect().top
  return Math.max(120, Math.min(state.cssH, top))
}

function fitView() {
  const size = regionSize()
  state.view.mpp = size / Math.max(80, Math.min(state.cssW, visibleHeight()) - 24)
  clampView()
  state.view.cx = size / 2
  state.view.cz = size / 2 + (state.cssH - visibleHeight()) / 2 * state.view.mpp
  clampView()
}

function clampView() {
  const size = regionSize()
  const view = state.view
  const most = size / Math.max(80, Math.min(state.cssW, state.cssH)) * 1.6
  view.mpp = Math.min(most, Math.max(0.12, view.mpp))
  view.cx = Math.min(size * 1.05, Math.max(-size * 0.05, view.cx))
  const hidden = (state.cssH - visibleHeight()) / 2 * view.mpp
  view.cz = Math.min(size * 1.05 + hidden, Math.max(-size * 0.05 + hidden, view.cz))
}

function toWorld(sx, sy) {
  return { x: state.view.cx + (sx - state.cssW / 2) * state.view.mpp, z: state.view.cz + (sy - state.cssH / 2) * state.view.mpp }
}
function toScreen(x, z) {
  return { x: state.cssW / 2 + (x - state.view.cx) / state.view.mpp, y: state.cssH / 2 + (z - state.view.cz) / state.view.mpp }
}

function zoomAt(sx, sy, factor) {
  const before = toWorld(sx, sy)
  state.view.mpp *= factor
  clampView()
  state.view.cx = before.x - (sx - state.cssW / 2) * state.view.mpp
  state.view.cz = before.z - (sy - state.cssH / 2) * state.view.mpp
  clampView()
  viewChanged()
}

function centreOn(x, z, mpp) {
  if (mpp) state.view.mpp = mpp
  clampView()
  state.view.cx = x
  state.view.cz = z + (state.cssH - visibleHeight()) / 2 * state.view.mpp
  clampView()
  viewChanged()
}

function viewChanged() {
  requestDraw()
  saveHashSoon()
}

// ---- Drawing ----
let drawQueued = false
function requestDraw() {
  if (drawQueued) return
  drawQueued = true
  requestAnimationFrame(() => {
    drawQueued = false
    draw()
  })
}

function levelFor() {
  const devicePerPixel = state.view.mpp / state.dpr
  const level = Math.round(Math.log2(regionSize() / (TILE * devicePerPixel)))
  return Math.max(0, Math.min(LEVELS - 1, level))
}

// Layers whose raster or building footprints change with historical `state.year`
function effectiveTileYear(layer, level) {
  if (!state.isExtremeSim) return 2025
  if (layer === 'use' || layer === 'price' || layer === 'people') return state.year
  if (level >= 5 && layer !== 'natural' && layer !== 'geology' && layer !== 'cost') return state.year
  return 2025
}

function tileKey(layer, year, level, tx, tz) {
  return `${layer}/${year}/${level}/${tx}/${tz}`
}

function draw() {
  frame++
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.fillStyle = '#d5dcd3'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  if (state.overlay) {
    const k = state.dpr / state.view.mpp
    const ox = canvas.width / 2 - state.view.cx * k
    const oy = canvas.height / 2 - state.view.cz * k
    drawTiles(k, ox, oy)
    ctx.setTransform(k, 0, 0, k, ox, oy)
    drawWorld()
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0)
    drawScreen()
  }
  updateScale()
}

function drawTiles(k, ox, oy) {
  const size = regionSize()
  const level = levelFor()
  const tYear = effectiveTileYear(state.layer, level)
  const span = metresPerPixel(size, level) * TILE
  const n = 2 ** level
  const tx0 = Math.max(0, Math.floor(-ox / k / span))
  const tx1 = Math.min(n - 1, Math.floor((canvas.width - ox) / k / span))
  const tz0 = Math.max(0, Math.floor(-oy / k / span))
  const tz1 = Math.min(n - 1, Math.floor((canvas.height - oy) / k / span))
  const wanted = []
  for (let tz = tz0; tz <= tz1; tz++) {
    for (let tx = tx0; tx <= tx1; tx++) {
      const key = tileKey(state.layer, tYear, level, tx, tz)
      const entry = tiles.get(key)
      const dx = Math.floor(ox + tx * span * k)
      const dy = Math.floor(oy + tz * span * k)
      const dw = Math.ceil(ox + (tx + 1) * span * k) - dx
      const dh = Math.ceil(oy + (tz + 1) * span * k) - dy
      if (entry) entry.used = frame
      if (entry?.bitmap) {
        ctx.drawImage(entry.bitmap, dx, dy, dw, dh)
        continue
      }
      drawFallback(tYear, level, tx, tz, dx, dy, dw, dh)
      if (!entry) {
        const d = Math.hypot((tx + 0.5) * span - state.view.cx, (tz + 0.5) * span - state.view.cz)
        wanted.push({ key, layer: state.layer, year: tYear, level, tx, tz, d })
      }
    }
  }
  wanted.sort((a, b) => a.d - b.d)
  if (wanted.length && level >= 3) {
    const up = level - 3
    const upYear = effectiveTileYear(state.layer, up)
    const seen = new Set()
    const coarse = []
    for (const job of wanted) {
      const tx = job.tx >> 3
      const tz = job.tz >> 3
      const key = tileKey(state.layer, upYear, up, tx, tz)
      if (seen.has(key) || tiles.has(key)) continue
      seen.add(key)
      coarse.push({ key, layer: state.layer, year: upYear, level: up, tx, tz, d: -1 })
    }
    wanted.unshift(...coarse)
  }
  queue = wanted
  pump()
}

// Until a tile arrives, a corner of a coarser one stands in for it.
function drawFallback(tYear, level, tx, tz, dx, dy, dw, dh) {
  for (let up = 1; up <= level; up++) {
    const pYear = effectiveTileYear(state.layer, level - up)
    const parent = tiles.get(tileKey(state.layer, pYear, level - up, tx >> up, tz >> up))
      ?? (pYear !== tYear ? tiles.get(tileKey(state.layer, tYear, level - up, tx >> up, tz >> up)) : null)
    if (!parent?.bitmap) continue
    const part = TILE / 2 ** up
    const sx = (tx - ((tx >> up) << up)) * part
    const sy = (tz - ((tz >> up) << up)) * part
    ctx.drawImage(parent.bitmap, sx, sy, part, part, dx, dy, dw, dh)
    parent.used = frame
    return
  }
}

function pump() {
  if (!worker || !state.ready) return
  while (inflight < MAX_INFLIGHT && queue.length) {
    const job = queue.shift()
    if (tiles.has(job.key)) continue
    const id = ++requestId
    tiles.set(job.key, { bitmap: null, used: frame })
    tileRequests.set(id, job.key)
    inflight++
    worker.postMessage({
      type: 'tile', id, seed: state.seed, layer: job.layer, year: job.year,
      level: job.level, tx: job.tx, tz: job.tz,
    })
  }
}

function onTile(message) {
  const key = tileRequests.get(message.id)
  tileRequests.delete(message.id)
  inflight = Math.max(0, inflight - 1)
  const entry = key ? tiles.get(key) : null
  if (!entry || message.seed !== state.seed || message.missing) {
    message.bitmap?.close?.()
    if (key && entry && !entry.bitmap) tiles.delete(key)
    pump()
    return
  }
  if (message.bitmap) {
    entry.bitmap = message.bitmap
    requestDraw()
  } else if (message.rgba) {
    createImageBitmap(new ImageData(message.rgba, TILE, TILE)).then((bitmap) => {
      entry.bitmap = bitmap
      requestDraw()
    })
  }
  evictTiles()
  pump()
}

function evictTiles() {
  if (tiles.size <= 380) return
  const old = [...tiles.entries()].filter(([, entry]) => entry.bitmap && entry.used < frame).sort((a, b) => a[1].used - b[1].used)
  for (const [key, entry] of old.slice(0, tiles.size - 300)) {
    entry.bitmap.close?.()
    tiles.delete(key)
  }
}

function trafficColor(load, vcRatio) {
  if (vcRatio && vcRatio > 0) {
    if (vcRatio < 0.70) return '#58b368'
    if (vcRatio < 0.95) return '#c2d64f'
    if (vcRatio < 1.15) return '#f5b83d'
    if (vcRatio < 1.35) return '#ee6d2d'
    return '#bd1e2c'
  }
  if (load < 2e4) return '#7bbf6a'
  if (load < 8e4) return '#c8d55a'
  if (load < 2e5) return '#f5c242'
  if (load < 5e5) return '#ee7b33'
  return '#c8322b'
}

function shopMatchesFilter(shop) {
  const y = state.year
  if (shop.typeId === 44) {
    if (!(shop.closedYear > 0 && shop.closedYear <= y)) return false
  } else {
    if (!(shop.openedYear <= y && (!shop.closedYear || shop.closedYear > y))) return false
  }
  if (state.shopCodeFilter) return shop.code === state.shopCodeFilter
  if (state.shopFilter === 'all') return shop.typeId !== 44
  if (state.shopFilter === 'vacant') return shop.typeId === 44
  const meta = state.overlay?.shopCatalog?.get(shop.typeId)
  return meta?.category === state.shopFilter
}

// Drawn in metres: one CSS pixel is `px` metres.
function drawWorld() {
  const o = state.overlay
  const px = state.view.mpp
  const curYear = state.year
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = 'rgba(29, 42, 51, 0.4)'
  ctx.lineWidth = 1.5 * px
  ctx.strokeRect(0, 0, o.size, o.size)

  if (state.show.streams) {
    if (px < 14) {
      ctx.setLineDash([6 * px, 5 * px])
      ctx.strokeStyle = 'rgba(60, 110, 150, 0.55)'
      ctx.lineWidth = 1.2 * px
      ctx.stroke(o.paths.covered)
      ctx.setLineDash([])
    }
    ctx.strokeStyle = '#4f97cf'
    for (const stream of o.streams) {
      if (stream.covered && curYear >= 1974) continue
      ctx.lineWidth = Math.max(stream.width, (stream.area > 5e6 ? 1.8 : 1.1) * px)
      ctx.stroke(stream.path)
    }
  }

  if (state.show.springs && o.springs?.length) {
    const r = Math.max(18, 4.5 * px)
    for (const sp of o.springs) {
      ctx.beginPath()
      ctx.arc(sp.x, sp.z, r, 0, Math.PI * 2)
      ctx.fillStyle = '#1d8cd8'
      ctx.fill()
      ctx.lineWidth = Math.max(4, 1.8 * px)
      ctx.strokeStyle = '#ffffff'
      ctx.stroke()
    }
  }

  if (state.show.traffic) {
    const kinds = [ROAD.COLLECTOR, ROAD.ARTERIAL, ROAD.TRUNK]
    for (const kind of kinds) {
      for (const road of o.roads) {
        if (road.kind !== kind) continue
        if (state.isExtremeSim && (road.eraYear ?? 0) > curYear) continue
        ctx.strokeStyle = trafficColor(road.load, road.vcRatio)
        const baseW = ROAD_WIDTH[road.kind] ?? 8
        ctx.lineWidth = Math.max(baseW, Math.min(9, 0.8 + Math.sqrt(road.load) / 160) * px)
        ctx.stroke(road.path)
      }
    }
  } else if (state.show.roads) {
    const kinds = px > 30 ? [ROAD.ARTERIAL, ROAD.TRUNK] : [ROAD.COLLECTOR, ROAD.ARTERIAL, ROAD.TRUNK]
    const allYears = !state.isExtremeSim || curYear >= 2025
    if (allYears) {
      for (const kind of kinds) {
        ctx.strokeStyle = 'rgba(95, 92, 86, 0.6)'
        ctx.lineWidth = Math.max(ROAD_WIDTH[kind], ROAD_PX[kind] * px) + Math.max(1.6, 1.3 * px)
        ctx.stroke(o.paths.roads[kind])
      }
      for (const kind of kinds) {
        ctx.strokeStyle = ROAD_FILL[kind]
        ctx.lineWidth = Math.max(ROAD_WIDTH[kind], ROAD_PX[kind] * px)
        ctx.stroke(o.paths.roads[kind])
      }
    } else {
      for (const pass of [0, 1]) {
        for (const kind of kinds) {
          ctx.strokeStyle = pass === 0 ? 'rgba(95, 92, 86, 0.6)' : ROAD_FILL[kind]
          ctx.lineWidth = Math.max(ROAD_WIDTH[kind], ROAD_PX[kind] * px) + (pass === 0 ? Math.max(1.6, 1.3 * px) : 0)
          for (const road of o.roads) {
            if (road.kind !== kind || (road.eraYear ?? 0) > curYear) continue
            ctx.stroke(road.path)
          }
        }
      }
    }
  }

  if (state.show.trafficLaw && state.isExtremeSim) drawTrafficLawOverlay(px, curYear)

  if (state.show.desire) {
    for (const flow of o.desire) {
      ctx.strokeStyle = flow.metropolis ? 'rgba(176, 58, 111, 0.45)' : 'rgba(96, 70, 170, 0.42)'
      ctx.lineWidth = Math.max(1, Math.min(16, Math.sqrt(flow.trips) / 45)) * px
      ctx.beginPath()
      ctx.moveTo(flow.from.x, flow.from.z)
      ctx.lineTo(flow.to.x, flow.to.z)
      ctx.stroke()
    }
  }

  if (state.show.districts) drawDistricts(px)

  if (state.show.rail) {
    const visibleLines = state.isExtremeSim
      ? o.lines.filter((line) => (line.openedYear ?? 0) <= curYear)
      : o.lines
    const order = [...visibleLines].sort((a, b) => (a.id === state.selected) - (b.id === state.selected))
    for (const line of order) drawRail(line, px)
  }

  if (state.show.shops && o.shops?.length) drawShops(px)

  if (state.marker) {
    ctx.beginPath()
    ctx.arc(state.marker.x, state.marker.z, 7 * px, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)'
    ctx.fill()
    ctx.lineWidth = 3 * px
    ctx.strokeStyle = '#1d2a33'
    ctx.stroke()
  }
}

function drawTrafficLawOverlay(px, curYear) {
  const o = state.overlay
  if (!o) return
  ctx.save()
  ctx.lineCap = 'round'

  // 1. Roads: Zone 30 (violet halo), Bike Lane (cyan dash), Ped Time Zone (orange dash), One-Way arrows
  for (let i = 0; i < o.roads.length; i++) {
    const road = o.roads[i]
    if ((road.eraYear ?? 0) > curYear) continue
    if (road.zone30Year > 0 && curYear >= road.zone30Year) {
      ctx.strokeStyle = 'rgba(138, 75, 175, 0.34)'
      ctx.lineWidth = Math.max((road.width ?? 8) + 4, 4.2 * px)
      ctx.stroke(road.path)
    }
    if (px < 14 && road.bikeLaneYear > 0 && curYear >= road.bikeLaneYear) {
      ctx.setLineDash([5 * px, 4 * px])
      ctx.strokeStyle = 'rgba(26, 140, 255, 0.72)'
      ctx.lineWidth = Math.max(2.2, 1.5 * px)
      ctx.stroke(road.path)
      ctx.setLineDash([])
    }
    if (px < 16 && road.pedZoneYear > 0 && curYear >= road.pedZoneYear) {
      ctx.setLineDash([3 * px, 3 * px])
      ctx.strokeStyle = 'rgba(230, 126, 34, 0.78)'
      ctx.lineWidth = Math.max(2.6, 1.8 * px)
      ctx.stroke(road.path)
      ctx.setLineDash([])
    }
    if (px < 10 && road.oneWay && road.oneWayYear > 0 && curYear >= road.oneWayYear) {
      const pts = road.points
      const midIdx = ((pts.length / 2) >> 1) * 2
      if (midIdx >= 2 && midIdx < pts.length) {
        const ax = pts[midIdx - 2], az = pts[midIdx - 1]
        const bx = pts[midIdx], bz = pts[midIdx + 1]
        const dir = road.oneWay > 0 ? 1 : -1
        const dx = (bx - ax) * dir, dz = (bz - az) * dir
        const len = Math.hypot(dx, dz) || 1
        const ux = dx / len, uz = dz / len
        const mx = (ax + bx) * 0.5, mz = (az + bz) * 0.5
        const sz = Math.max(8, 4.8 * px)
        ctx.beginPath()
        ctx.moveTo(mx + ux * sz, mz + uz * sz)
        ctx.lineTo(mx - ux * sz * 0.6 - uz * sz * 0.65, mz - uz * sz * 0.6 + ux * sz * 0.65)
        ctx.lineTo(mx - ux * sz * 0.6 + uz * sz * 0.65, mz - uz * sz * 0.6 - ux * sz * 0.65)
        ctx.closePath()
        ctx.fillStyle = '#1b6dc1'
        ctx.fill()
        ctx.lineWidth = Math.max(1.2, 0.8 * px)
        ctx.strokeStyle = '#ffffff'
        ctx.stroke()
      }
    }
  }

  // 2. Active Level Crossings (踏切: disappear after grade separation year!)
  if (o.levelCrossings?.length && px < 28) {
    const r = Math.max(10, 4.5 * px)
    for (const c of o.levelCrossings) {
      if ((c.openedYear ?? 9999) > curYear) continue
      if (c.eliminatedYear > 0 && curYear >= c.eliminatedYear) continue
      ctx.beginPath()
      ctx.arc(c.x, c.z, r, 0, Math.PI * 2)
      ctx.fillStyle = '#ffd43b'
      ctx.fill()
      ctx.lineWidth = Math.max(1.5, 1.0 * px)
      ctx.strokeStyle = '#1d1e20'
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(c.x - r * 0.55, c.z - r * 0.55)
      ctx.lineTo(c.x + r * 0.55, c.z + r * 0.55)
      ctx.moveTo(c.x + r * 0.55, c.z - r * 0.55)
      ctx.lineTo(c.x - r * 0.55, c.z + r * 0.55)
      ctx.stroke()
    }
  }

  // 3. Signalized Intersections, Stop Signs & Roundabouts
  if (o.intersections?.length && px < 26) {
    for (const inter of o.intersections) {
      if ((inter.openedYear ?? 0) > curYear) continue
      const hasSig = inter.signalYear > 0 && curYear >= inter.signalYear
      const hasPedSep = inter.pedSepYear > 0 && curYear >= inter.pedSepYear
      const hasRb = inter.roundaboutYear > 0 && curYear >= inter.roundaboutYear
      const hasStop = inter.stopYear > 0 && curYear >= inter.stopYear
      if (hasRb) {
        const r = Math.max(9, 4.2 * px)
        ctx.beginPath()
        ctx.arc(inter.x, inter.z, r, 0, Math.PI * 2)
        ctx.strokeStyle = '#0ea5e9'
        ctx.lineWidth = Math.max(2.5, 1.8 * px)
        ctx.stroke()
      } else if (hasSig) {
        const r = Math.max(6.5, 2.8 * px)
        ctx.beginPath()
        ctx.arc(inter.x, inter.z, r, 0, Math.PI * 2)
        ctx.fillStyle = hasPedSep ? '#10b981' : '#e63946'
        ctx.fill()
        ctx.lineWidth = Math.max(1.2, 0.9 * px)
        ctx.strokeStyle = '#ffffff'
        ctx.stroke()
      } else if (hasStop && px < 6.5) {
        const r = Math.max(5.5, 2.3 * px)
        ctx.beginPath()
        ctx.moveTo(inter.x - r, inter.z - r * 0.65)
        ctx.lineTo(inter.x + r, inter.z - r * 0.65)
        ctx.lineTo(inter.x, inter.z + r * 0.95)
        ctx.closePath()
        ctx.fillStyle = '#d62828'
        ctx.fill()
        ctx.lineWidth = Math.max(1.0, 0.7 * px)
        ctx.strokeStyle = '#ffffff'
        ctx.stroke()
      }
    }
  }
  ctx.restore()
}

function drawShops(px) {
  const o = state.overlay
  const halfW = state.cssW * 0.55 * px
  const halfH = state.cssH * 0.55 * px
  const minX = state.view.cx - halfW
  const maxX = state.view.cx + halfW
  const minZ = state.view.cz - halfH
  const maxZ = state.view.cz + halfH
  const filteredMode = state.shopFilter !== 'all' || Boolean(state.shopCodeFilter)

  for (let i = 0; i < o.shops.length; i++) {
    const s = o.shops[i]
    if (s.x < minX || s.x > maxX || s.z < minZ || s.z > maxZ) continue
    if (!shopMatchesFilter(s)) continue
    const meta = o.shopCatalog.get(s.typeId)
    const isLarge = meta?.category === 'large_retail' || s.floorArea >= 1200
    const isMid = s.floorArea >= 260 || meta?.category === 'modern_retail' || meta?.category === 'medical'
    if (!filteredMode) {
      if (px > 24 && !isLarge) continue
      if (px > 9 && !isLarge && !isMid) continue
    }
    const isSel = state.selectedShop && state.selectedShop.id === s.id
    const r = isLarge ? Math.max(16, 5.2 * px) : isMid ? Math.max(9, 3.3 * px) : Math.max(6, 2.5 * px)
    ctx.beginPath()
    if (s.typeId === 44) {
      // Shuttered vacancy: square gray marker
      ctx.rect(s.x - r * 0.85, s.z - r * 0.85, r * 1.7, r * 1.7)
    } else if (isLarge) {
      // Large commercial facility: diamond
      ctx.moveTo(s.x, s.z - r * 1.25)
      ctx.lineTo(s.x + r * 1.25, s.z)
      ctx.lineTo(s.x, s.z + r * 1.25)
      ctx.lineTo(s.x - r * 1.25, s.z)
      ctx.closePath()
    } else {
      ctx.arc(s.x, s.z, r, 0, Math.PI * 2)
    }
    ctx.fillStyle = meta?.color ?? '#c84b68'
    ctx.fill()
    ctx.lineWidth = isSel ? 3.2 * px : Math.max(1.2, 0.9 * px)
    ctx.strokeStyle = isSel ? '#1d2a33' : '#ffffff'
    ctx.stroke()
  }
}

// Borders of the towns and their blocks, and the chosen block filled in.
function drawDistricts(px) {
  const o = state.overlay
  const d = o.districts
  if (state.district >= 0) {
    const district = d.list[state.district]
    const [x0, z0, x1, z1] = district.bbox
    ctx.fillStyle = 'rgba(31, 122, 106, 0.28)'
    for (let z = z0; z < z1; z += d.cell) {
      for (let x = x0; x < x1; x += d.cell) {
        if (d.districtOf[x / d.cell + (z / d.cell) * d.columns] === district.id) ctx.fillRect(x, z, d.cell, d.cell)
      }
    }
  }
  ctx.lineCap = 'butt'
  if (px < 22) {
    ctx.strokeStyle = 'rgba(40, 46, 70, 0.38)'
    ctx.lineWidth = Math.max(1, 0.8 * px)
    ctx.setLineDash([4 * px, 3 * px])
    ctx.stroke(o.paths.borders.block)
    ctx.setLineDash([])
  }
  ctx.strokeStyle = 'rgba(40, 40, 70, 0.62)'
  ctx.lineWidth = Math.max(1.5, 1.5 * px)
  ctx.stroke(o.paths.borders.town)
  ctx.lineCap = 'round'
}

function drawRail(line, px) {
  const dim = state.selected >= 0 && state.selected !== line.id
  ctx.globalAlpha = dim ? 0.3 : 1
  const width = Math.max(9, (line.id === state.selected ? 4.4 : 3.4) * px)
  ctx.lineCap = 'butt'
  ctx.strokeStyle = '#ffffff'
  ctx.lineWidth = width + Math.max(4, 2.4 * px)
  ctx.stroke(line.paths.surface)
  ctx.strokeStyle = line.color
  ctx.lineWidth = width
  ctx.stroke(line.paths.surface)
  ctx.setLineDash([Math.max(18, 7 * px), Math.max(12, 5 * px)])
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)'
  ctx.lineWidth = width + Math.max(3, 2 * px)
  ctx.stroke(line.paths.under)
  ctx.strokeStyle = line.color
  ctx.lineWidth = width * 0.8
  ctx.stroke(line.paths.under)
  ctx.setLineDash([])
  ctx.lineCap = 'round'
  for (const station of line.stations) {
    if (px < 1.8) {
      drawPlatform(line, station)
      continue
    }
    const r = Math.max(10, (station.transfer ? 5.6 : 4.2) * px)
    ctx.beginPath()
    ctx.arc(station.x, station.z, r, 0, Math.PI * 2)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    ctx.lineWidth = Math.max(3, (station.transfer ? 2.2 : 1.7) * px)
    ctx.strokeStyle = station.transfer ? '#1d2a33' : line.color
    ctx.stroke()
  }
  ctx.globalAlpha = 1
}

// A ten-car platform (210 m) with its island, along the track.
function drawPlatform(line, station) {
  const points = line.points
  const count = points.length / 2
  const k = Math.min(count - 2, Math.max(1, Math.round(station.s / 20)))
  const dx = points[k * 2 + 2] - points[k * 2 - 2]
  const dz = points[k * 2 + 3] - points[k * 2 - 1]
  const length = Math.hypot(dx, dz) || 1
  const ux = dx / length
  const uz = dz / length
  const half = 105
  const side = 7
  ctx.beginPath()
  ctx.moveTo(station.x - ux * half - uz * side, station.z - uz * half + ux * side)
  ctx.lineTo(station.x + ux * half - uz * side, station.z + uz * half + ux * side)
  ctx.lineTo(station.x + ux * half + uz * side, station.z + uz * half - ux * side)
  ctx.lineTo(station.x - ux * half + uz * side, station.z - uz * half - ux * side)
  ctx.closePath()
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'
  ctx.fill()
  ctx.lineWidth = 1.5
  ctx.strokeStyle = station.transfer ? '#1d2a33' : line.color
  ctx.stroke()
}

// Drawn in CSS pixels: names, the way to the metropolis, large shop names.
function drawScreen() {
  const o = state.overlay
  const px = state.view.mpp
  ctx.textBaseline = 'middle'
  const placed = []
  const free = (rect) => !placed.some((other) => rect.x < other.x + other.w && other.x < rect.x + rect.w && rect.y < other.y + other.h && other.y < rect.y + rect.h)

  // The metropolis lies off the east edge.
  const edge = toScreen(o.size, o.metropolis.z)
  if (edge.x > 40 && edge.x < state.cssW + 4 && edge.y > 10 && edge.y < state.cssH - 10) {
    const distance = Math.round(Math.hypot(o.metropolis.x - o.size, 0) / 1000)
    const x = Math.min(state.cssW - 12, edge.x)
    ctx.fillStyle = 'rgba(29, 42, 51, 0.82)'
    ctx.beginPath()
    ctx.moveTo(x, edge.y)
    ctx.lineTo(x - 14, edge.y - 9)
    ctx.lineTo(x - 14, edge.y + 9)
    ctx.closePath()
    ctx.fill()
    ctx.font = `700 12px ${FONT}`
    const text = `都心へ（東へ約${distance}km）`
    const w = ctx.measureText(text).width
    const rect = { x: x - 22 - w, y: edge.y - 10, w: w + 6, h: 20 }
    ctx.lineWidth = 4
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)'
    ctx.strokeText(text, rect.x + 3, edge.y)
    ctx.fillText(text, rect.x + 3, edge.y)
    placed.push(rect)
  }

  if (state.show.rail) drawRailLabels(placed, free)
  if (state.show.slopes && o?.slopes?.length) drawSlopeOverlays(placed, free, px)
  if (state.show.urbanNodes && o?.urbanNodes?.length) drawUrbanNodes(placed, free, px)
  if (state.show.districts) drawDistrictLabels(placed, free)
  if (state.show.shops && o.shops?.length) drawShopLabels(placed, free)
}

function drawSlopeOverlays(placed, free, px) {
  const slopes = state.overlay?.slopes
  if (!slopes?.length || px > 18) return
  ctx.save()
  ctx.font = `600 10px ${FONT}`
  ctx.textBaseline = 'middle'
  for (let i = 0; i < slopes.length; i++) {
    const s = slopes[i]
    const a = toScreen(s.topX, s.topZ)
    const b = toScreen(s.bottomX, s.bottomZ)
    ctx.strokeStyle = s.isStair ? 'rgba(180,72,32,0.85)' : 'rgba(198,128,24,0.75)'
    ctx.lineWidth = Math.max(1.8, 3.0 / Math.max(0.4, px * 0.25))
    ctx.beginPath()
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
    ctx.stroke()
    if (px <= 10) {
      const label = `${s.name} ${s.avgGradePct}%${s.isStair ? ' 階' : ''}`
      const p = toScreen(s.x, s.z)
      const w = ctx.measureText(label).width + 10
      const rect = { x: p.x - w / 2, y: p.y - 16, w, h: 16 }
      if (free(rect)) {
        placed.push(rect)
        ctx.fillStyle = s.isStair ? 'rgba(120,42,16,0.86)' : 'rgba(130,78,12,0.86)'
        roundRect(rect.x, rect.y, rect.w, rect.h, 4)
        ctx.fill()
        ctx.fillStyle = '#fff9ee'
        ctx.fillText(label, rect.x + 5, rect.y + 8)
      }
    }
  }
  ctx.restore()
}

function drawUrbanNodes(placed, free, px) {
  const nodes = state.overlay?.urbanNodes
  if (!nodes?.length) return
  ctx.save()
  ctx.font = `700 11px ${FONT}`
  ctx.textBaseline = 'middle'
  for (const n of nodes) {
    if (n.type === 'DEPOT_SITE' && px > 14) continue
    const p = toScreen(n.x, n.z)
    const r = n.type === 'CORE_TERMINAL' ? 7 : n.type === 'SUB_HUB' ? 5.5 : 4
    ctx.beginPath()
    ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
    ctx.fillStyle = n.type === 'DEPOT_SITE' ? 'rgba(72,96,128,0.72)' : n.expressStop ? 'rgba(214,48,72,0.88)' : 'rgba(42,126,178,0.80)'
    ctx.fill()
    ctx.lineWidth = 1.6
    ctx.strokeStyle = '#ffffff'
    ctx.stroke()
    if (px >= 4) {
      const label = n.expressStop ? `★${n.name}` : n.name
      const w = ctx.measureText(label).width + 12
      const rect = { x: p.x - w / 2, y: p.y + 10, w, h: 18 }
      if (free(rect)) {
        placed.push(rect)
        ctx.fillStyle = 'rgba(24,32,48,0.84)'
        roundRect(rect.x, rect.y, rect.w, rect.h, 5)
        ctx.fill()
        ctx.fillStyle = '#ffffff'
        ctx.fillText(label, rect.x + 6, rect.y + 9)
      }
    }
  }
  ctx.restore()
}

function drawShopLabels(placed, free) {
  const o = state.overlay
  const px = state.view.mpp
  if (px > 12 && !state.selectedShop) return
  ctx.font = `600 11px ${FONT}`
  const list = []
  if (state.selectedShop) list.push({ s: state.selectedShop, strong: true })
  if (px <= 12) {
    for (let i = 0; i < o.shops.length && list.length < 40; i++) {
      const s = o.shops[i]
      if (!shopMatchesFilter(s)) continue
      const meta = o.shopCatalog.get(s.typeId)
      const isLarge = meta?.category === 'large_retail' || s.floorArea >= 1400
      if (px > 2.2 && !isLarge) continue
      const p = toScreen(s.x, s.z)
      if (p.x < 10 || p.y < 10 || p.x > state.cssW - 10 || p.y > state.cssH - 10) continue
      list.push({ s, strong: false })
    }
  }
  for (const { s, strong } of list) {
    const p = toScreen(s.x, s.z)
    if (p.x < -80 || p.y < -20 || p.x > state.cssW + 80 || p.y > state.cssH + 20) continue
    const w = ctx.measureText(s.name).width + 8
    const rect = { x: p.x + 8, y: p.y - 8, w, h: 16 }
    if (!strong && !free(rect)) continue
    placed.push(rect)
    ctx.lineWidth = 3
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)'
    ctx.strokeText(s.name, rect.x + 3, p.y)
    ctx.fillStyle = strong ? '#1d2a33' : '#4b3848'
    ctx.fillText(s.name, rect.x + 3, p.y)
  }
}

// Names of the towns (町) from middle distance, of the blocks (丁目) close in.
function drawDistrictLabels(placed, free) {
  const d = state.overlay.districts
  const px = state.view.mpp
  const entries = []
  if (state.district >= 0) entries.push({ x: d.list[state.district].x, z: d.list[state.district].z, text: d.list[state.district].name, strong: true })
  if (px < 3.2) for (const district of d.list) entries.push({ x: district.x, z: district.z, text: `${district.number}丁目`, strong: false })
  else if (px < 30) for (const town of d.towns) entries.push({ x: town.x, z: town.z, text: town.name, strong: false })
  ctx.font = `700 13px ${FONT}`
  for (const entry of entries) {
    const p = toScreen(entry.x, entry.z)
    if (p.x < -80 || p.y < -20 || p.x > state.cssW + 80 || p.y > state.cssH + 20) continue
    const w = ctx.measureText(entry.text).width + 8
    const rect = { x: p.x - w / 2, y: p.y - 10, w, h: 20 }
    if (!entry.strong && !free(rect)) continue
    placed.push(rect)
    ctx.lineWidth = 4
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)'
    ctx.strokeText(entry.text, rect.x + 4, p.y)
    ctx.fillStyle = entry.strong ? '#14594d' : 'rgba(45, 45, 80, 0.85)'
    ctx.fillText(entry.text, rect.x + 4, p.y)
  }
}

function drawRailLabels(placed, free) {
  const o = state.overlay
  const px = state.view.mpp
  const visibleLines = state.isExtremeSim
    ? o.lines.filter((line) => (line.openedYear ?? 0) <= state.year)
    : o.lines
  if (px >= 12) {
    ctx.font = `700 12px ${FONT}`
    for (const line of visibleLines) {
      if (state.selected >= 0 && state.selected !== line.id) continue
      const last = line.stations[line.stations.length - 1]
      if (!last) continue
      const p = toScreen(last.x, last.z)
      const w = ctx.measureText(line.name).width + 14
      const rect = { x: p.x - w / 2, y: p.y + 12, w, h: 20 }
      if (!free(rect)) rect.y = p.y - 32
      if (!free(rect)) continue
      placed.push(rect)
      ctx.fillStyle = line.color
      roundRect(rect.x, rect.y, rect.w, rect.h, 10)
      ctx.fill()
      ctx.fillStyle = '#ffffff'
      ctx.fillText(line.name, rect.x + 7, rect.y + 10)
    }
  }
  if (!state.show.labels) return
  ctx.font = `600 12px ${FONT}`
  const seen = new Set()
  const stations = []
  const selected = visibleLines.find((line) => line.id === state.selected)
  if (selected) stations.push(...selected.stations.map((station) => ({ station, strong: true })))
  for (const line of visibleLines) for (const station of line.stations) if (station.transfer) stations.push({ station, strong: false })
  for (const line of visibleLines) for (const station of line.stations) stations.push({ station, strong: false })
  for (const { station, strong } of stations) {
    if (seen.has(station.name)) continue
    if (!(strong || px < 14 || (station.transfer && px < 40))) continue
    const p = toScreen(station.x, station.z)
    if (p.x < -60 || p.y < -20 || p.x > state.cssW + 60 || p.y > state.cssH + 20) continue
    const w = ctx.measureText(station.name).width + 6
    const gap = px < 1.8 ? 14 : 10
    let rect = { x: p.x + gap, y: p.y - 9, w, h: 18 }
    if (!free(rect)) rect = { x: p.x - gap - w, y: p.y - 9, w, h: 18 }
    if (!free(rect)) rect = { x: p.x - w / 2, y: p.y - gap - 18, w, h: 18 }
    if (!free(rect)) continue
    seen.add(station.name)
    placed.push(rect)
    ctx.lineWidth = 3.5
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)'
    ctx.strokeText(station.name, rect.x + 3, p.y)
    ctx.fillStyle = '#1d2a33'
    ctx.fillText(station.name, rect.x + 3, p.y)
  }
}

function roundRect(x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function updateScale() {
  const metres = 110 * state.view.mpp
  const power = 10 ** Math.floor(Math.log10(metres))
  const nice = [1, 2, 5, 10].map((f) => f * power).filter((value) => value <= metres).pop() ?? power
  const box = $('#scale')
  $('span', box).style.width = `${Math.round(nice / state.view.mpp)}px`
  $('b', box).textContent = nice >= 1000 ? `${nice / 1000}km` : `${nice}m`
}

// ---- Pointer and keys ----
const pointers = new Map()
let gesture = null
let lastPoint = 0
let pointTimer = 0

canvas.addEventListener('pointerdown', (event) => {
  try {
    canvas.setPointerCapture(event.pointerId)
  } catch {
    // Dragging still works without capture.
  }
  pointers.set(event.pointerId, { x: event.offsetX, y: event.offsetY })
  gesture = { moved: 0, start: { x: event.offsetX, y: event.offsetY }, time: performance.now(), pinch: null }
  canvas.classList.add('dragging')
})

canvas.addEventListener('pointermove', (event) => {
  const previous = pointers.get(event.pointerId)
  if (!previous) {
    askPoint(event.offsetX, event.offsetY)
    return
  }
  const current = { x: event.offsetX, y: event.offsetY }
  if (pointers.size === 1) {
    const dx = current.x - previous.x
    const dy = current.y - previous.y
    state.view.cx -= dx * state.view.mpp
    state.view.cz -= dy * state.view.mpp
    if (gesture) gesture.moved += Math.abs(dx) + Math.abs(dy)
    clampView()
    viewChanged()
  } else if (pointers.size === 2) {
    const [a, b] = [...pointers.entries()].map(([id, point]) => (id === event.pointerId ? current : point))
    const [pa, pb] = [...pointers.values()]
    const before = Math.hypot(pa.x - pb.x, pa.y - pb.y)
    const after = Math.hypot(a.x - b.x, a.y - b.y)
    const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
    const midBefore = { x: (pa.x + pb.x) / 2, y: (pa.y + pb.y) / 2 }
    state.view.cx -= (mid.x - midBefore.x) * state.view.mpp
    state.view.cz -= (mid.y - midBefore.y) * state.view.mpp
    if (before > 0 && after > 0) zoomAt(mid.x, mid.y, before / after)
    if (gesture) gesture.moved += 10
    clampView()
    viewChanged()
  }
  pointers.set(event.pointerId, current)
})

function endPointer(event) {
  if (!pointers.has(event.pointerId)) return
  pointers.delete(event.pointerId)
  if (!pointers.size) {
    canvas.classList.remove('dragging')
    if (gesture && gesture.moved < 6 && performance.now() - gesture.time < 500) {
      clickAt(event.offsetX, event.offsetY)
      if (event.pointerType !== 'mouse') askPoint(event.offsetX, event.offsetY)
    }
    gesture = null
  }
}
canvas.addEventListener('pointerup', endPointer)
canvas.addEventListener('pointercancel', endPointer)
canvas.addEventListener('pointerleave', () => {
  if (!pointers.size) $('#readout').hidden = true
})

canvas.addEventListener('wheel', (event) => {
  event.preventDefault()
  const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY
  zoomAt(event.offsetX, event.offsetY, Math.exp(delta * 0.0016))
}, { passive: false })

canvas.addEventListener('dblclick', (event) => {
  event.preventDefault()
  zoomAt(event.offsetX, event.offsetY, 0.5)
})

window.addEventListener('keydown', (event) => {
  if (event.target instanceof HTMLInputElement) return
  const step = 120
  if (event.key === '+' || event.key === '=') zoomAt(state.cssW / 2, visibleHeight() / 2, 0.6)
  else if (event.key === '-') zoomAt(state.cssW / 2, visibleHeight() / 2, 1 / 0.6)
  else if (event.key === 'ArrowLeft') centreOn(state.view.cx - step * state.view.mpp, state.view.cz)
  else if (event.key === 'ArrowRight') centreOn(state.view.cx + step * state.view.mpp, state.view.cz)
  else if (event.key === 'ArrowUp') centreOn(state.view.cx, state.view.cz - step * state.view.mpp)
  else if (event.key === 'ArrowDown') centreOn(state.view.cx, state.view.cz + step * state.view.mpp)
  else return
  event.preventDefault()
})

for (const button of document.querySelectorAll('[data-zoom]')) {
  button.addEventListener('click', () => {
    const kind = button.dataset.zoom
    if (kind === 'fit') {
      fitView()
      viewChanged()
    } else zoomAt(state.cssW / 2, visibleHeight() / 2, kind === 'in' ? 0.5 : 2)
  })
}

function clickAt(sx, sy) {
  if (!state.overlay) return
  const { x, z } = toWorld(sx, sy)
  const px = state.view.mpp

  // 1. Check visible commercial shops first
  if (state.show.shops && state.overlay.shops?.length) {
    const reachShop = Math.max(18, 10 * px)
    let bestShop = null
    let bestD = reachShop
    const filteredMode = state.shopFilter !== 'all' || Boolean(state.shopCodeFilter)
    for (let i = 0; i < state.overlay.shops.length; i++) {
      const s = state.overlay.shops[i]
      if (Math.abs(s.x - x) > bestD || Math.abs(s.z - z) > bestD) continue
      if (!shopMatchesFilter(s)) continue
      const meta = state.overlay.shopCatalog.get(s.typeId)
      const isLarge = meta?.category === 'large_retail' || s.floorArea >= 1200
      const isMid = s.floorArea >= 260 || meta?.category === 'modern_retail' || meta?.category === 'medical'
      if (!filteredMode && ((px > 24 && !isLarge) || (px > 9 && !isLarge && !isMid))) continue
      const d = Math.hypot(s.x - x, s.z - z)
      if (d < bestD) { bestD = d; bestShop = s }
    }
    if (bestShop) {
      selectShop(bestShop)
      return
    }
  }

  // 2. Check railway lines
  const reach = 10 * px
  let best = null
  let bestDistance = reach
  const visibleLines = state.show.rail
    ? (state.isExtremeSim ? state.overlay.lines.filter((l) => (l.openedYear ?? 0) <= state.year) : state.overlay.lines)
    : []
  for (const line of visibleLines) {
    const points = line.points
    for (let k = 0; k < points.length; k += 2) {
      const d = Math.hypot(points[k] - x, points[k + 1] - z)
      if (d < bestDistance) {
        bestDistance = d
        best = line
      }
    }
  }
  if (best) selectLine(best.id)
  else if (state.show.districts) selectDistrict(districtAt(x, z))
}

function selectShop(shop) {
  state.selectedShop = shop
  renderShopDetail()
  requestDraw()
}

function renderShopDetail() {
  const box = $('#shop-detail')
  if (!box) return
  const s = state.selectedShop
  if (!s) {
    box.hidden = true
    return
  }
  const meta = state.overlay?.shopCatalog?.get(s.typeId)
  const prevMeta = s.convertedFrom >= 0 ? state.overlay?.shopCatalog?.get(s.convertedFrom) : null
  const isVacant = s.typeId === 44
  box.hidden = false
  box.innerHTML = `<div class="detail-head">
      <h2>${escape(s.name)}</h2>
      <button type="button" id="shop-close">閉じる</button>
    </div>
    <div class="shop-card" style="margin-top:8px">
      <p><span class="tag" style="background:${meta?.color ?? '#666'}">${escape(meta?.name ?? s.code)}</span>
         <span>${escape(LOC_LABELS[s.locKind] ?? s.locKind)}・延床 約${whole(s.floorArea)}m²</span></p>
      <p style="margin-top:6px">
        ${isVacant
          ? `<b>空き店舗化（${s.closedYear}年〜）</b><br>旧業種：${escape(prevMeta?.name ?? '不明')}（${s.openedYear}年開業）<br>閉店要因：<b>${escape(s.closeReason || '採算悪化・後継者不足')}</b>`
          : `開業：<b>${s.openedYear}年</b>${s.closedYear ? ` → 閉店：<b>${s.closedYear}年</b>（${escape(s.closeReason || '撤退')}）` : '（2025年現在 営業中）'}${prevMeta ? `<br>居抜き転換元：${escape(prevMeta.name)}` : ''}`}
      </p>
    </div>`
  $('#shop-close', box).addEventListener('click', () => selectShop(null))
}

function askPoint(sx, sy) {
  if (!state.ready) return
  const now = performance.now()
  const send = () => {
    lastPoint = performance.now()
    const { x, z } = toWorld(sx, sy)
    worker.postMessage({ type: 'point', id: ++requestId, seed: state.seed, x, z })
  }
  clearTimeout(pointTimer)
  if (now - lastPoint > 70) send()
  else pointTimer = setTimeout(send, 70)
}

function showReadout(info) {
  const box = $('#readout')
  if (!info) {
    box.hidden = true
    return
  }
  const water = info.water === 1 ? '川の水面' : info.water === 2 ? '小川' : ''
  const use = USE_STYLE[info.use]?.name ?? ''
  const era = info.builtYear
    ? `${info.builtYear}年市街化${info.rebuiltYear && info.rebuiltYear > info.builtYear ? `（${info.rebuiltYear}年更新）` : ''}`
    : (info.era ? `${ERA_LABELS[info.era] ?? ''}市街化` : '未市街地')
  box.hidden = false
  const priceText = info.landPrice > 0 ? `・地価 <b>${info.landPrice.toFixed(1)}万円/m²</b>（坪${whole(info.landPrice * 3.30578)}万円）` : ''
  const geoLine = info.geology
    ? `地質 <b>${escape(info.geology)}</b>${info.bearingN !== null ? `（N値 ${info.bearingN}）` : ''}${info.floodDepth > 0.05 ? `・想定浸水 <b>${info.floodDepth.toFixed(1)}m</b>` : '・浸水リスク低'}`
    : `${LAND_NAMES[info.land]}`
  const zoneLine = info.zoning ? `用途地域 <b>${escape(info.zoning)}</b>・` : ''
  const agingText = info.aging !== null ? `・高齢化率 ${(info.aging * 100).toFixed(1)}%` : ''
  const shopLine = info.nearestShop
    ? `近隣店舗 <b>${escape(info.nearestShop.name)}</b>（${info.nearestShop.openedYear}年〜${info.nearestShop.closedYear ? `${info.nearestShop.closedYear}年閉店` : '営業中'}）`
    : ''
  const slopeLine = info.nearestSlope
    ? `坂道 <b>${escape(info.nearestSlope.name)}</b>（平均${info.nearestSlope.avgGradePct}%・高低差${info.nearestSlope.riseM}m${info.nearestSlope.isStair ? '・階段' : ''}）`
    : ''
  let roadLine = ''
  if (info.nearestRoad) {
    const r = info.nearestRoad
    const regTags = []
    if (r.legalSpeedKmh) regTags.push(`規制${r.legalSpeedKmh}km/h`)
    if (r.oneWay && (!r.oneWayYear || state.year >= r.oneWayYear)) regTags.push('一方通行')
    if (r.zone30Year > 0 && state.year >= r.zone30Year) regTags.push('ゾーン30')
    if (r.centerlineType === 'median') regTags.push('中央分離帯')
    else if (r.centerlineType === 'yellow_solid') regTags.push('黄実線')
    roadLine = `道路法 <b>${escape(r.legalName)}</b>（幅${r.width.toFixed(1)}m・最急${r.maxGradePct}%${regTags.length ? `・${regTags.join(' / ')}` : ''}）`
  }
  const p = info.clickedParcel
  const parcelTags = []
  if (p) {
    if (p.retainingH >= 1.1) parcelTags.push(`擁壁 ${p.retainingH.toFixed(1)}m`)
    if (p.designFlags & 0x04) parcelTags.push('掘り込み車庫')
    if (p.designFlags & 0x10) parcelTags.push('旗竿地')
    if (p.designFlags & 0x02) parcelTags.push('2項セットバック済')
    if (p.designFlags & 0x01) parcelTags.push('2項既存不適格')
    if (p.designFlags & 0x40) parcelTags.push('角地緩和')
  }
  const parcelLine = parcelTags.length ? `画地設計: <b>${parcelTags.join(' / ')}</b>` : ''
  box.innerHTML = [
    `<b>東へ ${(info.x / 1000).toFixed(2)}km・南へ ${(info.z / 1000).toFixed(2)}km</b>`,
    `標高 <b>${info.height.toFixed(1)}m</b>（整備前 ${info.natural.toFixed(1)}m）・勾配 ${(info.slope * 100).toFixed(1)}%`,
    geoLine,
    `${zoneLine}${water || use}${info.newtown ? '（ニュータウン）' : ''}${priceText}`,
    slopeLine,
    roadLine,
    parcelLine,
    `${era}・人口密度 ${whole(info.density)}人/km²${agingText}`,
    Number.isFinite(info.minutes) && info.minutes > 0 ? `都心まで約${Math.round(info.minutes)}分` : '',
    shopLine,
  ].filter(Boolean).join('<br>')
}

// ---- Timeline (1700 - 2025) ----
function stopPlayback() {
  state.playing = false
  clearInterval(state.playTimer)
  state.playTimer = 0
  const btn = $('#timeline-play')
  if (btn) btn.textContent = '▶ 再生'
}

function setYearByIndex(idx) {
  const years = state.overlay?.years ?? [2025]
  const clamped = Math.max(0, Math.min(years.length - 1, idx))
  state.year = years[clamped]
  updateTimelineDisplay()
  renderCommerce()
  requestDraw()
}

function renderTimeline() {
  const bar = $('#timeline-bar')
  if (!bar) return
  const years = state.overlay?.years
  if (!state.isExtremeSim || !years || years.length < 2) {
    bar.hidden = true
    return
  }
  bar.hidden = false
  const slider = $('#timeline-slider')
  slider.min = '0'
  slider.max = String(years.length - 1)
  slider.value = String(Math.max(0, years.indexOf(state.year)))
  updateTimelineDisplay()
}

function updateTimelineDisplay() {
  const years = state.overlay?.years ?? [2025]
  const idx = Math.max(0, years.indexOf(state.year))
  const slider = $('#timeline-slider')
  if (slider) slider.value = String(idx)
  const yearEl = $('#timeline-year')
  if (yearEl) yearEl.textContent = `${state.year}年`

  const tl = state.overlay?.timeline
  const entry = tl?.[idx] ?? tl?.find((t) => t.year === state.year)
  const kpiEl = $('#timeline-kpi')
  const evEl = $('#timeline-event')
  if (entry) {
    if (kpiEl) {
      kpiEl.textContent = `人口 ${persons(entry.residents)}・市街化 ${percent(entry.builtShare)}・店舗 ${whole(entry.commerce?.activeTotal ?? 0)}・地価 ${entry.meanLandPrice.toFixed(0)}万`
    }
    if (evEl) {
      const tlInfo = entry.trafficLaw
        ? ` ／ 道交法期: <b>${escape(entry.trafficLaw.eraName)}</b>（${escape(entry.trafficLaw.leftHandRule)}・信号 ${entry.trafficLaw.signalCount}・一通 ${entry.trafficLaw.oneWayLinks}・Z30 ${entry.trafficLaw.zone30Km}km・踏切 ${entry.trafficLaw.activeCrossings}［連立除却${entry.trafficLaw.eliminatedCrossings}］・危険度 ${entry.trafficLaw.safetyRiskIndex}）`
        : ''
      if (entry.events?.length) {
        evEl.innerHTML = entry.events.map((e) => `<b>【${e.year ?? state.year}年】${escape(e.title)}</b>：${escape(e.summary)}`).join(' / ') + tlInfo
      } else {
        evEl.innerHTML = `高齢化率 <b>${(entry.agingRate * 100).toFixed(1)}%</b>・世帯人員 ${entry.householdSize}人・EC率 ${(entry.ecRate * 100).toFixed(1)}%・鉄道 ${entry.railLines}路線 ${entry.railStations}駅` + tlInfo
      }
    }
  }
}

// ---- Commercial Analytics & Historical Demand Panel ----
function renderCommerce() {
  const box = $('#commerce')
  if (!box) return
  if (!state.isExtremeSim || !state.overlay?.timeline?.length) {
    box.hidden = true
    return
  }
  const tl = state.overlay.timeline
  const cur = tl.find((t) => t.year === state.year) ?? tl[tl.length - 1]
  const com = cur.commerce
  const cs = state.summary.commerceSummary
  const catalogByCode = new Map((state.overlay.catalogs?.shops ?? []).map((s) => [s.code, s]))

  // Top active formats for selected year
  const topFormats = Object.entries(com?.byCode ?? {})
    .filter(([code, cnt]) => code !== 'vacant_shutter' && cnt > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)

  // Closure reasons at selected year (or cumulative across all years if 2025)
  const reasons = {}
  for (const t of tl) {
    if (t.year > state.year) break
    for (const [k, v] of Object.entries(t.commerce?.closeReasons ?? {})) {
      reasons[k] = (reasons[k] ?? 0) + v
    }
  }
  const topReasons = Object.entries(reasons).sort((a, b) => b[1] - a[1]).slice(0, 6)

  const gs = state.summary.gradeSeparations ?? []
  const inv = state.summary.roadInvestments ?? []

  box.hidden = false
  box.innerHTML = `<h2>商業施設・商店の盛衰（${state.year}年）</h2>
    <div class="shop-filters" id="shop-filters">
      ${SHOP_FILTERS.map((f) => `<button type="button" data-filter="${f.id}" class="${state.shopFilter === f.id && !state.shopCodeFilter ? 'active' : ''}">${f.label}</button>`).join('')}
      ${state.shopCodeFilter ? `<button type="button" data-clear-code="1" class="active">業種絞込解除 ✕</button>` : ''}
    </div>
    <dl class="stats">
      ${stat('営業中店舗', `${whole(com?.activeTotal ?? 0)}店`, `累計開業 ${whole(cs?.totalHistoricalShops ?? 0)}店`)}
      ${stat('空き店舗（シャッター）', `${whole(com?.vacantShutter ?? 0)}店`, `空き率 ${((com?.vacancyRate ?? 0) * 100).toFixed(1)}%`)}
      ${stat('今期の開業 / 閉店', `+${whole(com?.opened ?? 0)} / -${whole(com?.closed ?? 0)}`, `居抜き転換 ${whole(com?.converted ?? 0)}件`)}
      ${stat('高齢化・EC環境', `${(cur.agingRate * 100).toFixed(1)}%`, `EC率 ${(cur.ecRate * 100).toFixed(1)}%・1世帯${cur.householdSize}人`)}
    </dl>
    <h3>1700〜2025年 主要業態の推移</h3>
    <canvas class="commerce-chart" id="commerce-chart"></canvas>
    <div class="chart-legend">
      <span><i style="background:#63a84a"></i>八百屋・魚屋・肉屋</span>
      <span><i style="background:#eb7d34"></i>食品スーパー</span>
      <span><i style="background:#25a87a"></i>コンビニ</span>
      <span><i style="background:#2694d6"></i>ドラッグストア</span>
      <span><i style="background:#c94b3b"></i>居酒屋</span>
      <span><i style="background:#6bb86e"></i>介護デイ</span>
      <span><i style="background:#e0c038"></i>無人販売</span>
      <span><i style="background:#7a828a"></i>空き店舗</span>
    </div>
    <h3>${state.year}年の主な業種（クリックで地図を絞込）</h3>
    <table class="station-table">
      <thead><tr><th>業種</th><th>店舗数</th></tr></thead>
      <tbody>${topFormats.map(([code, cnt]) => {
        const meta = catalogByCode.get(code)
        const activeRow = state.shopCodeFilter === code ? ' style="background:var(--accent-soft)"' : ''
        return `<tr data-shop-code="${escape(code)}"${activeRow}><td><span class="chip" style="background:${meta?.color ?? '#888'}"></span>${escape(meta?.name ?? code)}</td><td>${whole(cnt)}店</td></tr>`
      }).join('')}</tbody>
    </table>
    ${topReasons.length ? `<h3>累計閉店・撤退の主な原因（〜${state.year}年）</h3>
      <ul class="event-list">${topReasons.map(([r, cnt]) => `<li>${escape(r)}：<b>${whole(cnt)}店</b></li>`).join('')}</ul>` : ''}
    ${(gs.length || inv.length) ? `<h3>インフラの自律進化ログ</h3>
      <ul class="event-list">
        ${gs.map((g) => `<li><b>${g.year}年</b> ${escape(g.lineName)}：連続立体交差${g.quadTrack ? '・複々線化' : ''}（${g.elevatedCells}区間）</li>`).join('')}
        ${inv.length ? `<li>道路BPR混雑投資（1955〜2025）：拡幅・バイパス・橋梁 <b>計${inv.length}事業</b></li>` : ''}
      </ul>` : ''}`

  for (const btn of box.querySelectorAll('[data-filter]')) {
    btn.addEventListener('click', () => {
      state.shopFilter = btn.dataset.filter
      state.shopCodeFilter = ''
      renderCommerce()
      requestDraw()
    })
  }
  const clearBtn = $('[data-clear-code]', box)
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.shopCodeFilter = ''
      renderCommerce()
      requestDraw()
    })
  }
  for (const row of box.querySelectorAll('tr[data-shop-code]')) {
    row.addEventListener('click', () => {
      const code = row.dataset.shopCode
      state.shopCodeFilter = state.shopCodeFilter === code ? '' : code
      renderCommerce()
      requestDraw()
    })
  }
  drawCommerceChart(tl)
}

function drawCommerceChart(tl) {
  const el = $('#commerce-chart')
  if (!el || !tl.length) return
  const dpr = state.dpr
  const w = el.clientWidth || 350
  const h = el.clientHeight || 155
  el.width = Math.round(w * dpr)
  el.height = Math.round(h * dpr)
  const c = el.getContext('2d')
  c.setTransform(dpr, 0, 0, dpr, 0, 0)
  c.clearRect(0, 0, w, h)

  const pad = { left: 34, right: 8, top: 10, bottom: 20 }
  const plotW = w - pad.left - pad.right
  const plotH = h - pad.top - pad.bottom

  const series = [
    { color: '#63a84a', fn: (b) => (b.greengrocer ?? 0) + (b.fishmonger ?? 0) + (b.butcher ?? 0) },
    { color: '#eb7d34', fn: (b) => (b.supermarket ?? 0) * 4 },
    { color: '#25a87a', fn: (b) => b.convenience ?? 0 },
    { color: '#2694d6', fn: (b) => b.drugstore ?? 0 },
    { color: '#c94b3b', fn: (b) => b.izakaya ?? 0 },
    { color: '#6bb86e', fn: (b) => b.nursing_care ?? 0 },
    { color: '#e0c038', fn: (b) => b.unmanned_shop ?? 0 },
    { color: '#7a828a', fn: (b) => b.vacant_shutter ?? 0 },
  ]

  // Focus chart on 1900..2025 (or all steps indexed cleanly so modern era is clearly legible)
  const startIdx = Math.max(0, tl.findIndex((t) => t.year >= 1907))
  const slice = tl.slice(startIdx)
  let maxVal = 50
  for (const t of slice) {
    const b = t.commerce?.byCode ?? {}
    for (const s of series) maxVal = Math.max(maxVal, s.fn(b))
  }
  maxVal = Math.ceil(maxVal / 100) * 100

  const X = (i) => pad.left + (i / Math.max(1, slice.length - 1)) * plotW
  const Y = (val) => pad.top + (1 - val / maxVal) * plotH

  // Grid
  c.font = `500 9.5px ${FONT}`
  c.strokeStyle = 'rgba(29, 42, 51, 0.08)'
  c.fillStyle = '#7b8992'
  c.textBaseline = 'middle'
  for (let k = 0; k <= 3; k++) {
    const val = Math.round((maxVal * k) / 3)
    const y = Y(val)
    c.beginPath()
    c.moveTo(pad.left, y)
    c.lineTo(w - pad.right, y)
    c.stroke()
    c.textAlign = 'right'
    c.fillText(String(val), pad.left - 4, y)
  }
  c.textAlign = 'center'
  for (const yr of [1923, 1955, 1974, 1991, 2008, 2025]) {
    const idx = slice.findIndex((t) => t.year >= yr)
    if (idx >= 0) c.fillText(String(slice[idx].year), X(idx), h - 8)
  }

  // Lines
  c.lineWidth = 1.8
  for (const s of series) {
    c.beginPath()
    c.strokeStyle = s.color
    for (let i = 0; i < slice.length; i++) {
      const val = s.fn(slice[i].commerce?.byCode ?? {})
      if (i === 0) c.moveTo(X(i), Y(val))
      else c.lineTo(X(i), Y(val))
    }
    c.stroke()
  }

  // Current year indicator
  const curIdx = slice.findIndex((t) => t.year === state.year)
  if (curIdx >= 0) {
    const cx = X(curIdx)
    c.strokeStyle = 'rgba(20, 89, 77, 0.7)'
    c.lineWidth = 1.5
    c.setLineDash([3, 2])
    c.beginPath()
    c.moveTo(cx, pad.top)
    c.lineTo(cx, h - pad.bottom)
    c.stroke()
    c.setLineDash([])
  }
}

// ---- Server CLI Generation Trigger ----
async function triggerCliGenerate(mode) {
  const seed = regionSeed($('#seed').value)
  const deepBtn = $('#run-cli-deep')
  const fastBtn = $('#run-cli-fast')
  if (deepBtn) deepBtn.disabled = true
  if (fastBtn) fastBtn.disabled = true
  clearInterval(state.cliPollTimer)

  try {
    showProgress(mode === 'deep' ? '5m超極限CLI起動中' : '20m高速CLI起動中', 0.02, 0)
    const res = await fetch('/api/sim/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ seed, mode }),
    })
    if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error ?? `HTTP ${res.status}`)
    const started = performance.now()

    state.cliPollTimer = setInterval(async () => {
      try {
        const sr = await fetch(`/api/sim/status/${seed}`, { cache: 'no-cache' })
        if (!sr.ok) return
        const data = await sr.json()
        const job = data.job
        if (job?.status === 'running') {
          showProgress(`CLI(${job.mode === 'deep' ? '5m' : '20m'}): ${job.label}`, job.fraction, performance.now() - started)
        } else if (job?.status === 'done' || (!job && data.ready)) {
          clearInterval(state.cliPollTimer)
          if (deepBtn) deepBtn.disabled = false
          if (fastBtn) fastBtn.disabled = false
          generate(String(seed))
        } else if (job?.status === 'failed') {
          clearInterval(state.cliPollTimer)
          if (deepBtn) deepBtn.disabled = false
          if (fastBtn) fastBtn.disabled = false
          showStatus(`CLI生成に失敗しました：\n${job.error}`, true)
        }
      } catch { /* retry next poll */ }
    }, 1200)
  } catch (err) {
    if (deepBtn) deepBtn.disabled = false
    if (fastBtn) fastBtn.disabled = false
    showStatus(`CLI生成APIを呼び出せませんでした（ローカルサーバー起動を確認してください）：\n${err.message}`, true)
  }
}

// ---- The panel ----
function renderLayers() {
  const box = $('#layers')
  box.innerHTML = Object.entries(LAYERS).map(([id, layer]) => `<label><input type="radio" name="layer" value="${id}" ${id === state.layer ? 'checked' : ''}><span>${layer.name}</span></label>`).join('')
  box.addEventListener('change', (event) => {
    state.layer = event.target.value
    renderLegend()
    saveHashSoon()
    requestDraw()
  })
  renderLegend()
}

function gradient(stops) {
  const low = stops[0][0]
  const high = stops[stops.length - 1][0]
  return `linear-gradient(to right, ${stops.map(([value, color]) => `${color} ${((value - low) / (high - low) * 100).toFixed(1)}%`).join(', ')})`
}

function renderLegend() {
  const box = $('#legend')
  const layer = state.layer
  if (layer === 'relief' || layer === 'natural') {
    box.innerHTML = `<div class="ramp" style="background:${gradient(HEIGHT_STOPS)}"></div><div class="ticks"><span>0m</span><span>25m</span><span>55m</span><span>90m</span></div>
      <p class="note">${layer === 'natural' ? '人が手を入れる前の自然地形。上位丘陵・高位/中位/下位の4段段丘、段丘崖線、多数の開析谷、蛇行河川と旧河道。' : '造成・盛土・堤防・ニュータウンひな壇の後。拡大すると2m/1m微地形と坂道・一軒ごとの建物になります。'}</p>`
  } else if (layer === 'geology') {
    box.innerHTML = `<div class="swatches">${GEOLOGY_STYLE.map((s) => `<span><i style="background:${s.color}"></i>${s.name}</span>`).join('')}</div>
      <p class="note">火山灰ローム層厚・支持地盤N値・地下水湧出を決める地質区分。旧河道・低地は軟弱地盤で地価・防災に影響します。</p>`
  } else if (layer === 'hazard') {
    box.innerHTML = `<div class="ramp" style="background:${gradient(HAZARD_STOPS)}"></div><div class="ticks"><span>0m</span><span>0.8m</span><span>1.5m</span><span>2.5m</span><span>4.0m+</span></div>
      <p class="note">計画規模降雨時の想定浸水深（m）。旧河道・後背湿地・低地谷底に浸水リスクが集中します。</p>`
  } else if (layer === 'zoning') {
    box.innerHTML = `<div class="swatches">${ZONING_STYLE.map((s) => `<span><i style="background:${s.color}"></i>${s.name}</span>`).join('')}</div>
      <p class="note">1968年新都市計画法以降の法定用途地域。建ぺい率・容積率・大型商業施設立地を制御します。</p>`
  } else if (layer === 'aging') {
    box.innerHTML = `<div class="ramp" style="background:${gradient(AGING_STOPS)}"></div><div class="ticks"><span>14%</span><span>22%</span><span>27%</span><span>32%</span><span>38%</span><span>45%</span></div>
      <p class="note">2025年時点の地域別65歳以上高齢化率。高度成長期ニュータウン・旧市街で高く、駅前再開発マンション群で低い構造を再現。</p>`
  } else if (layer === 'price') {
    box.innerHTML = `<div class="ramp" style="background:${gradient(PRICE_STOPS)}"></div><div class="ticks"><span>0</span><span>25</span><span>70</span><span>140</span><span>260万円/m²</span></div>
      <p class="note">公示地価ベースの土地価格（万円/m²）。タイムラインを動かすと1991年バブル絶頂〜崩壊〜2025年再上昇を追えます。</p>`
  } else if (layer === 'people') {
    box.innerHTML = `<div class="ramp" style="background:${gradient(PEOPLE_STOPS)}"></div><div class="ticks"><span>0</span><span>1万</span><span>2万</span><span>3万</span><span>4.5万人/km²</span></div>
      <p class="note">建物の床面積から計算した夜間人口密度。タイムラインで1700年から2025年までの市街化拡大を再生できます。</p>`
  } else if (layer === 'cost') {
    box.innerHTML = `<div class="ramp" style="background:${gradient(COST_STOPS)}"></div><div class="ticks"><span>20</span><span>150</span><span>340</span><span>650億円/km</span></div>
      <p class="note">鉄道の1kmあたり建設費（用地・立ち退き・地盤・高低差・河川横断を含む）。</p>`
  } else if (layer === 'use') {
    box.innerHTML = `<div class="swatches">${Object.values(USE_STYLE).map((style) => `<span><i style="background:${style.color}"></i>${style.name}</span>`).join('')}</div>`
  } else if (layer === 'era') {
    box.innerHTML = `<div class="swatches">${ERA_COLORS.map((color, index) => `<span><i style="background:${color}"></i>${ERA_LABELS[index]}</span>`).join('')}</div>`
  }
}

function stat(label, value, sub = '') {
  return `<div class="stat"><dt>${label}</dt><dd>${value}${sub ? `<br><small>${sub}</small>` : ''}</dd></div>`
}

function renderSummary() {
  const s = state.summary
  const box = $('#summary')
  const roads = s.city.roads.length
  box.hidden = false
  box.innerHTML = `<h2>地域の概要 <span class="note">シード ${escape(s.seed)}・計算 ${(s.timings.total / 1000).toFixed(1)}秒</span></h2>
    <dl class="stats">
      ${stat('2025年 人口', `${persons(s.people.residents)}人`, `平均 ${whole(s.people.density.mean)}人/km²`)}
      ${stat('世帯・従業者', `${persons(s.people.households)}世帯`, `従業者 ${persons(s.people.jobs)}人`)}
      ${stat('市街化した土地', percent(s.city.builtShare), `ニュータウン ${(s.city.newtownArea / 1e6).toFixed(1)}km²`)}
      ${s.city.landPrice ? stat('平均地価', `${s.city.landPrice.mean.toFixed(1)}万円/m²`, `住宅 ${s.city.landPrice.residentialMean.toFixed(1)}・商業 ${s.city.landPrice.commercialMean.toFixed(1)}・最高 ${whole(s.city.landPrice.max)}万円/m²`) : ''}
      ${s.totalBuildings ? stat('生成建物総数', `${persons(s.totalBuildings)}棟`, s.has5mTerrain ? '5m超高精細地形＋100タイル' : '20m地形＋100パーセルタイル') : ''}
      ${stat('標高', `${s.terrain.lowest.toFixed(0)}〜${s.terrain.highest.toFixed(0)}m`, `台地 ${percent(s.terrain.plateau)}・低地 ${percent(s.terrain.lowland)}・丘陵 ${percent(s.terrain.hills)}`)}
      ${stat('幹線道路', km((roads[2] ?? 0) + (roads[3] ?? 0) + (roads[4] ?? 0), 0), `国道級 ${km(roads[4] ?? 0, 0)}・都道級 ${km(roads[3] ?? 0, 0)}`)}
      ${stat('鉄道', `${s.rail.lines.length}路線・${km(s.rail.length, 0)}`, `${s.rail.stations}駅・利用 ${persons(s.rail.railTrips)}人/日`)}
      ${stat('鉄道総事業費', oku(s.rail.cost), `費用便益比 ${s.rail.ratio.toFixed(2)}`)}
      ${stat('1日の移動', `${persons(s.demand.trips)}回`, `うち都心へ ${persons(s.demand.toMetropolis)}回`)}
      ${state.overlay?.trafficLawStats ? stat('道路交通法(2025)', `信号${state.overlay.trafficLawStats.signalCount} / 踏切${state.overlay.trafficLawStats.activeCrossings}`, `一通${state.overlay.trafficLawStats.oneWayLinks}・Z30 ${state.overlay.trafficLawStats.zone30Km}km・連立除却${state.overlay.trafficLawStats.eliminatedCrossings}`) : ''}
    </dl>
    <p class="note" style="margin-top:8px">集落 ${s.city.villages}${s.springs ? `・段丘崖線湧水 ${s.springs}点` : ''}・学校 ${s.city.schools}・大公園 ${s.city.parks}・暗渠化した小川 ${s.city.culverts}本。${s.city.earthwork?.cut ? `造成土量 切土 ${persons(s.city.earthwork.cut)}m³・盛土 ${persons(s.city.earthwork.fill)}m³。` : ''}</p>`
}

function renderEras() {
  const box = $('#eras')
  const list = state.summary.city.builtByYear
  box.hidden = false
  box.innerHTML = `<h2>市街化の進み方</h2><div class="eras">${list.map((entry, index) => `
    <span>${entry.year === 1700 ? '江戸期' : entry.year + '年'}</span>
    <span class="track"><span style="width:${(entry.share * 100).toFixed(1)}%;background:${ERA_COLORS[Math.min(ERA_COLORS.length - 1, index + 1)]}"></span></span>
    <span>${percent(entry.share)}</span>`).join('')}</div>
    <p class="note" style="margin-top:6px">「市街化の年代」で色分けすると、江戸街道・宿場から鉄道沿線、高度成長期ニュータウンへと広がった過程が見えます。</p>`
}

function renderLines() {
  const box = $('#lines')
  const s = state.summary.rail
  box.hidden = false
  if (!s.lines.length) {
    box.innerHTML = '<h2>鉄道路線</h2><p class="note">費用便益比が1を超える路線が見つかりませんでした。</p>'
    return
  }
  const byId = new Map(state.overlay.lines.map((l) => [l.id, l]))
  box.innerHTML = `<h2>鉄道路線</h2>
    <table class="line-table">
      <thead><tr><th>路線</th><th>開業</th><th>延長</th><th>駅</th><th>利用者/日</th><th>事業費</th><th>B/C</th></tr></thead>
      <tbody>${s.lines.map((line) => {
        const full = byId.get(line.id)
        const yr = full?.openedYear ? `${full.openedYear}` : '-'
        const tag = full?.quadTrack ? ' 複々' : full?.gradeSeparatedYear ? ' 連立' : ''
        return `<tr data-line="${line.id}" class="${line.id === state.selected ? 'selected' : ''}">
          <td><span class="chip" style="background:${line.color}"></span>${escape(line.name)}${tag ? `<small style="color:var(--accent-ink)">${tag}</small>` : ''}</td>
          <td>${yr}</td><td>${km(line.length)}</td><td>${line.stations}</td>
          <td>${persons(line.riders)}</td><td>${oku(line.cost)}</td><td>${line.ratio.toFixed(2)}</td></tr>`
      }).join('')}</tbody>
    </table>
    <p class="network">1907年の軌道線から始まり、1923〜32年の私鉄放射線、1965〜82年の地下鉄・環状線、1995〜2018年の連続立体交差・複々線化へと段階的に進化しています。行をクリックすると縦断面図を表示します。</p>`
  for (const row of box.querySelectorAll('tr[data-line]')) row.addEventListener('click', () => selectLine(Number(row.dataset.line)))
}

function selectDistrict(id) {
  if (id === state.district) id = -1
  state.district = id
  renderDistrict()
  saveHashSoon()
  requestDraw()
}

function renderDistrict() {
  const box = $('#district')
  const d = state.overlay?.districts
  if (!d || state.district < 0 || !d.list[state.district]) {
    box.hidden = true
    return
  }
  const district = d.list[state.district]
  const town = d.towns[district.town]
  const [x0, z0, x1, z1] = district.bbox
  box.hidden = false
  box.innerHTML = `<div class="detail-head"><h2>${escape(district.name)}</h2><button type="button" id="district-close">閉じる</button></div>
    <dl class="stats" style="margin-top:10px">
      ${stat('面積', `${(district.area / 1e6).toFixed(2)}km²`, `東西 ${Math.round(x1 - x0)}m・南北 ${Math.round(z1 - z0)}m`)}
      ${stat('人口', `${whole(district.residents)}人`, `${whole(district.households)}世帯・従業者 ${whole(district.jobs)}人`)}
      ${stat('市街地', percent(district.built), `いちばん多いのは${USE_STYLE[district.use]?.name ?? ''}`)}
      ${district.landPrice ? stat('平均地価', `${district.landPrice.toFixed(1)}万円/m²`, `坪あたり約${whole(district.landPrice * 3.30578)}万円`) : ''}
      ${stat('駅', district.stations.length ? district.stations.map(escape).join('・') : 'なし', `隣の丁目 ${district.neighbours.length}`)}
    </dl>
    <p class="note" style="margin-top:8px">${escape(town.name)}は${town.districts.length}丁目まで（${(town.area / 1e6).toFixed(2)}km²・人口 ${persons(town.residents)}人）。</p>
    <div id="district-actions"></div>`
  $('#district-close', box).addEventListener('click', () => selectDistrict(state.district))
  renderDistrictActions(district)
}

// Making a town of the game from the district, or going to it (game-link.js).
const gameLink = createGameLink({ worker: () => worker, seed: () => state.seed, fingerprint: () => state.fingerprint })
const renderDistrictActions = (district) => gameLink.render(district, $('#district-actions'))

function selectLine(id, centre = true) {
  if (state.selected === id) id = -1
  state.selected = id
  state.marker = null
  for (const row of document.querySelectorAll('#lines tr[data-line]')) row.classList.toggle('selected', Number(row.dataset.line) === id)
  const box = $('#line-detail')
  const line = state.overlay?.lines.find((entry) => entry.id === id)
  if (!line) {
    box.hidden = true
    saveHashSoon()
    requestDraw()
    return
  }
  renderLineDetail(line)
  if (centre) {
    let minX = Infinity
    let minZ = Infinity
    let maxX = -Infinity
    let maxZ = -Infinity
    for (let k = 0; k < line.points.length; k += 2) {
      minX = Math.min(minX, line.points[k])
      maxX = Math.max(maxX, line.points[k])
      minZ = Math.min(minZ, line.points[k + 1])
      maxZ = Math.max(maxZ, line.points[k + 1])
    }
    const mpp = Math.max((maxX - minX) / (state.cssW - 60), (maxZ - minZ) / (visibleHeight() - 60))
    centreOn((minX + maxX) / 2, (minZ + maxZ) / 2, Math.max(state.view.mpp * 0.2, mpp))
  }
  saveHashSoon()
  requestDraw()
}

function renderLineDetail(line) {
  const box = $('#line-detail')
  box.hidden = false
  const total = line.cost.byStructure.reduce((sum, entry) => sum + entry.length, 0) || 1
  const structures = line.cost.byStructure.map((entry, index) => ({ ...entry, index })).filter((entry) => entry.length > 0)
  const overheadShare = line.cost.total - line.cost.civil
  const busiest = line.loads.indexOf(line.maxLoad)
  const historyNote = [
    line.openedYear ? `${line.openedYear}年開業` : '',
    line.gradeSeparatedYear ? `${line.gradeSeparatedYear}年連続立体交差` : '',
    line.quadTrack ? '複々線化済' : '',
  ].filter(Boolean).join('・')

  box.innerHTML = `<div class="detail-head"><span class="chip" style="background:${line.color}"></span><h2>${escape(line.name)}</h2><button type="button" id="deselect">選択を解除</button></div>
    ${historyNote ? `<p class="note" style="margin-top:4px">${escape(historyNote)}</p>` : ''}
    <dl class="stats" style="margin-top:10px">
      ${stat(line.kind === 'radial' ? '放射線（都心直通）' : '環状線', km(line.length), `${line.stations.length}駅・端から端まで${Math.round(line.runMinutes)}分`)}
      ${stat('1日の利用者', `${persons(line.riders)}人`, busiest >= 0 ? `最混雑 ${escape(line.stations[busiest]?.name ?? '')}→${escape(line.stations[busiest + 1]?.name ?? '')} ${persons(line.maxLoad)}人` : '')}
      ${stat('事業費', oku(line.cost.total), `土木 ${oku(line.cost.civil - line.cost.stations)}・駅 ${oku(line.cost.stations)}・設備ほか ${oku(overheadShare)}`)}
      ${stat('費用便益比', line.ratio.toFixed(2), `便益 ${oku(line.benefit)}（50年）`)}
      ${stat('立ち退き', `約${whole(line.cost.buildings)}棟`, `用地費 ${oku(line.cost.land)}`)}
      ${stat('最急勾配', `${(line.cost.steepest * 1000).toFixed(1)}‰`, `乗換駅 ${line.transfers}`)}
    </dl>
    <h3>縦断面図（高さは誇張）</h3>
    <div class="profile-wrap"><canvas id="profile"></canvas></div>
    <div class="difficulty" title="200mごとの工事の難しさ">${line.cost.difficulty.map((level) => `<span style="background:${DIFFICULTY_COLORS[level]}" title="${DIFFICULTY_NAMES[level]}"></span>`).join('')}</div>
    <p class="profile-info" id="profile-info">図の上にカーソルを置くと、その地点の地盤・線路の高さと構造を表示します。</p>
    <h3>構造ごとの延長と費用</h3>
    <div class="struct-bar">${structures.map((entry) => `<span style="flex:${entry.length / total};background:${STRUCTURE_COLORS[entry.index]}" title="${entry.name}"></span>`).join('')}</div>
    <div class="struct-legend">${structures.map((entry) => `<span><i style="background:${STRUCTURE_COLORS[entry.index]}"></i>${entry.name}</span><span>${km(entry.length, 2)}</span><span>${oku(entry.cost * 1.3)}</span>`).join('')}</div>
    <h3>駅</h3>
    <table class="station-table"><thead><tr><th>駅</th><th>構造</th><th>地上から</th><th>乗車/日</th></tr></thead>
      <tbody>${line.stations.map((station, index) => `<tr data-station="${index}"><td>${escape(station.name)}${station.transfer ? ' ⇄' : ''}</td><td>${STRUCTURE_NAMES[station.structure] ?? ''}</td><td>${station.height >= 0 ? '+' : ''}${station.height.toFixed(1)}m</td><td>${whole(station.boardings)}</td></tr>`).join('')}</tbody></table>`
  $('#deselect', box).addEventListener('click', () => selectLine(line.id))
  for (const row of box.querySelectorAll('tr[data-station]')) {
    row.addEventListener('click', () => {
      const station = line.stations[Number(row.dataset.station)]
      state.marker = { x: station.x, z: station.z }
      centreOn(station.x, station.z, Math.min(state.view.mpp, 2.5))
    })
  }
  drawProfile(line)
  attachProfile(line)
}

function profileGeometry(line, canvasElement) {
  const width = canvasElement.clientWidth
  const height = canvasElement.clientHeight
  const pad = { left: 36, right: 10, top: 64, bottom: 22 }
  const count = line.rail.length
  const length = (count - 1) * 20
  let low = Infinity
  let high = -Infinity
  for (let k = 0; k < count; k++) {
    low = Math.min(low, line.rail[k], line.ground[k])
    high = Math.max(high, line.rail[k], line.ground[k])
  }
  low = Math.floor((low - 3) / 10) * 10
  high = Math.ceil((high + 3) / 10) * 10
  const X = (s) => pad.left + s / length * (width - pad.left - pad.right)
  const Y = (h) => pad.top + (high - h) / (high - low) * (height - pad.top - pad.bottom)
  return { width, height, pad, count, length, low, high, X, Y }
}

function drawProfile(line, cursor = null) {
  const element = $('#profile')
  if (!element) return
  const dpr = state.dpr
  const g = profileGeometry(line, element)
  element.width = Math.round(g.width * dpr)
  element.height = Math.round(g.height * dpr)
  const c = element.getContext('2d')
  c.setTransform(dpr, 0, 0, dpr, 0, 0)
  c.clearRect(0, 0, g.width, g.height)
  c.font = `500 10px ${FONT}`
  c.textBaseline = 'middle'
  c.strokeStyle = 'rgba(29, 42, 51, 0.08)'
  c.fillStyle = '#7b8992'
  c.lineWidth = 1
  const stepH = g.high - g.low > 60 ? 20 : 10
  for (let h = g.low; h <= g.high; h += stepH) {
    c.beginPath()
    c.moveTo(g.pad.left, g.Y(h))
    c.lineTo(g.width - g.pad.right, g.Y(h))
    c.stroke()
    c.textAlign = 'right'
    c.fillText(`${h}m`, g.pad.left - 4, g.Y(h))
  }
  c.textAlign = 'center'
  for (let s = 0; s <= g.length; s += 2000) c.fillText(`${s / 1000}km`, g.X(s), g.height - 9)
  c.beginPath()
  c.moveTo(g.X(0), g.Y(g.low))
  for (let k = 0; k < g.count; k++) c.lineTo(g.X(k * 20), g.Y(line.ground[k]))
  c.lineTo(g.X(g.length), g.Y(g.low))
  c.closePath()
  c.fillStyle = '#e2d3b4'
  c.fill()
  c.beginPath()
  for (let k = 0; k < g.count; k++) c[k ? 'lineTo' : 'moveTo'](g.X(k * 20), g.Y(line.ground[k]))
  c.strokeStyle = '#9b8358'
  c.lineWidth = 1
  c.stroke()
  c.lineWidth = 2.4
  c.lineCap = 'butt'
  let k = 0
  while (k < g.count - 1) {
    const structure = line.structure[k + 1]
    c.beginPath()
    c.moveTo(g.X(k * 20), g.Y(line.rail[k]))
    while (k < g.count - 1 && line.structure[k + 1] === structure) {
      k++
      c.lineTo(g.X(k * 20), g.Y(line.rail[k]))
    }
    c.setLineDash(structure >= STRUCTURE.COVERED ? [4, 3] : [])
    c.strokeStyle = STRUCTURE_COLORS[structure]
    c.stroke()
  }
  c.setLineDash([])
  c.textAlign = 'left'
  for (const station of line.stations) {
    const x = g.X(station.s)
    const index = Math.min(g.count - 1, Math.round(station.s / 20))
    c.strokeStyle = 'rgba(29, 42, 51, 0.35)'
    c.lineWidth = 1
    c.beginPath()
    c.moveTo(x, g.Y(line.rail[index]) - 3)
    c.lineTo(x, g.pad.top - 4)
    c.stroke()
    c.fillStyle = '#1d2a33'
    c.fillRect(x - 3, g.Y(line.rail[index]) - 2, 6, 4)
    c.save()
    c.translate(x + 2, g.pad.top - 6)
    c.rotate(-Math.PI / 3)
    c.fillStyle = station.transfer ? '#14594d' : '#33424c'
    c.fillText(station.name, 0, 0)
    c.restore()
  }
  if (cursor !== null) {
    const x = g.X(cursor * 20)
    c.strokeStyle = '#1d2a33'
    c.lineWidth = 1
    c.beginPath()
    c.moveTo(x, g.pad.top)
    c.lineTo(x, g.height - g.pad.bottom)
    c.stroke()
  }
}

function attachProfile(line) {
  const element = $('#profile')
  const info = $('#profile-info')
  const sampleAt = (event) => {
    const g = profileGeometry(line, element)
    const s = (event.offsetX - g.pad.left) / (g.width - g.pad.left - g.pad.right) * g.length
    return Math.min(g.count - 1, Math.max(0, Math.round(s / 20)))
  }
  element.addEventListener('pointermove', (event) => {
    const k = sampleAt(event)
    const rail = line.rail[k]
    const ground = line.ground[k]
    const structure = line.structure[k]
    const ahead = Math.min(line.rail.length - 1, k + 5)
    const behind = Math.max(0, k - 5)
    const grade = (line.rail[ahead] - line.rail[behind]) / ((ahead - behind) * 20 || 1) * 1000
    const radius = line.radius[k]
    info.textContent = `${(k * 20 / 1000).toFixed(2)}km地点：地盤 ${ground.toFixed(1)}m・線路 ${rail.toFixed(1)}m（${STRUCTURE_NAMES[structure]}、地上から${(rail - ground) >= 0 ? '+' : ''}${(rail - ground).toFixed(1)}m）・勾配 ${grade >= 0 ? '+' : ''}${grade.toFixed(1)}‰・${Number.isFinite(radius) ? `曲線半径 ${Math.round(radius)}m` : '直線'}`
    state.marker = { x: line.points[k * 2], z: line.points[k * 2 + 1] }
    drawProfile(line, k)
    requestDraw()
  })
  element.addEventListener('pointerleave', () => {
    state.marker = null
    drawProfile(line)
    requestDraw()
  })
  element.addEventListener('click', (event) => {
    const k = sampleAt(event)
    centreOn(line.points[k * 2], line.points[k * 2 + 1], Math.min(state.view.mpp, 3))
  })
}

// ---- Saving the 1 m ground ----
const heightRequests = new Map()

function heightsOfView() {
  const size = regionSize()
  const width = Math.max(16, Math.min(1024, Math.round(state.cssW * state.view.mpp)))
  const height = Math.max(16, Math.min(1024, Math.round(state.cssH * state.view.mpp)))
  const x0 = Math.round(Math.min(size - width, Math.max(0, state.view.cx - width / 2)))
  const z0 = Math.round(Math.min(size - height, Math.max(0, state.view.cz - height / 2)))
  const id = ++requestId
  return new Promise((resolve) => {
    heightRequests.set(id, (message) => {
      heightRequests.delete(id)
      resolve(message)
    })
    worker.postMessage({ type: 'heights', id, seed: state.seed, x0, z0, step: 1, width, height })
  })
}

async function exportHeights(format) {
  if (!state.ready) return
  const note = $('#export-note')
  note.textContent = '計算しています…'
  const data = await heightsOfView()
  const { x0, z0, width, height, values } = data
  let lowest = Infinity
  let highest = -Infinity
  for (const value of values) {
    lowest = Math.min(lowest, value)
    highest = Math.max(highest, value)
  }
  const base = `region-${state.seed}-x${x0}-z${z0}-${width}x${height}m`
  let blob
  let name
  if (format === 'asc') {
    const lines = [`ncols ${width}`, `nrows ${height}`, `xllcorner ${x0}`, `yllcorner ${-(z0 + height)}`, 'cellsize 1', 'NODATA_value -9999']
    for (let j = 0; j < height; j++) {
      const row = new Array(width)
      for (let i = 0; i < width; i++) row[i] = values[i + j * width].toFixed(2)
      lines.push(row.join(' '))
    }
    blob = new Blob([lines.join('\n') + '\n'], { type: 'text/plain' })
    name = `${base}.asc`
  } else {
    const floor = Math.floor(lowest)
    const bytes = await png16(width, height, values, floor, `seed=${state.seed}; x0=${x0}m; z0=${z0}m (x east, z south); 1px=1m; height=${floor}m+value*0.01m`)
    blob = new Blob([bytes], { type: 'image/png' })
    name = `${base}-base${floor}m-1cm.png`
  }
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = name
  document.body.append(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 4000)
  note.textContent = `${name}（${width}×${height}点、標高 ${lowest.toFixed(1)}〜${highest.toFixed(1)}m）を書き出しました。`
}

const crcTable = new Uint32Array(256)
for (let n = 0; n < 256; n++) {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  crcTable[n] = c >>> 0
}
function crc32(bytes) {
  let c = 0xffffffff
  for (let index = 0; index < bytes.length; index++) c = crcTable[(c ^ bytes[index]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
function pngChunk(type, data) {
  const out = new Uint8Array(12 + data.length)
  const view = new DataView(out.buffer)
  view.setUint32(0, data.length)
  for (let index = 0; index < 4; index++) out[4 + index] = type.charCodeAt(index)
  out.set(data, 8)
  view.setUint32(8 + data.length, crc32(out.subarray(4, 8 + data.length)))
  return out
}
async function zlib(bytes) {
  if (typeof CompressionStream === 'function') {
    const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream('deflate'))
    return new Uint8Array(await new Response(stream).arrayBuffer())
  }
  const blocks = Math.ceil(bytes.length / 65535) || 1
  const out = new Uint8Array(2 + bytes.length + blocks * 5 + 4)
  out[0] = 0x78
  out[1] = 0x01
  let at = 2
  for (let block = 0; block < blocks; block++) {
    const part = bytes.subarray(block * 65535, Math.min(bytes.length, (block + 1) * 65535))
    out[at] = block === blocks - 1 ? 1 : 0
    out[at + 1] = part.length & 255
    out[at + 2] = part.length >>> 8
    out[at + 3] = ~part.length & 255
    out[at + 4] = (~part.length >>> 8) & 255
    out.set(part, at + 5)
    at += 5 + part.length
  }
  let a = 1
  let b = 0
  for (let index = 0; index < bytes.length; index++) {
    a = (a + bytes[index]) % 65521
    b = (b + a) % 65521
  }
  new DataView(out.buffer).setUint32(at, ((b << 16) | a) >>> 0)
  return out
}
async function png16(width, height, values, base, comment) {
  const raw = new Uint8Array((width * 2 + 1) * height)
  for (let j = 0; j < height; j++) {
    const row = j * (width * 2 + 1)
    raw[row] = 0
    for (let i = 0; i < width; i++) {
      const value = Math.max(0, Math.min(65535, Math.round((values[i + j * width] - base) * 100)))
      raw[row + 1 + i * 2] = value >>> 8
      raw[row + 2 + i * 2] = value & 255
    }
  }
  const header = new Uint8Array(13)
  const view = new DataView(header.buffer)
  view.setUint32(0, width)
  view.setUint32(4, height)
  header[8] = 16
  header[9] = 0
  const text = new TextEncoder().encode(`Comment\0${comment}`)
  const parts = [
    Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10),
    pngChunk('IHDR', header),
    pngChunk('tEXt', text),
    pngChunk('IDAT', await zlib(raw)),
    pngChunk('IEND', new Uint8Array(0)),
  ]
  const out = new Uint8Array(parts.reduce((sum, part) => sum + part.length, 0))
  let at = 0
  for (const part of parts) {
    out.set(part, at)
    at += part.length
  }
  return out
}

for (const button of document.querySelectorAll('[data-export]')) {
  button.addEventListener('click', () => exportHeights(button.dataset.export).catch((error) => {
    $('#export-note').textContent = `書き出しに失敗しました：${error.message}`
  }))
}

// ---- The address keeps the seed, the layer and the view ----
let hashTimer = 0
function saveHash() {
  const v = state.view
  const params = new URLSearchParams()
  params.set('seed', $('#seed').value.trim() || '3')
  params.set('layer', state.layer)
  params.set('x', Math.round(v.cx))
  params.set('z', Math.round(v.cz))
  params.set('m', v.mpp.toFixed(2))
  if (state.year !== 2025) params.set('y', state.year)
  if (state.selected >= 0) params.set('line', state.selected)
  if (state.district >= 0) params.set('d', state.district)
  history.replaceState(null, '', `#${params}`)
}
function saveHashSoon() {
  clearTimeout(hashTimer)
  hashTimer = setTimeout(saveHash, 300)
}
function readHash() {
  const params = new URLSearchParams(location.hash.slice(1))
  if (params.get('seed')) $('#seed').value = params.get('seed')
  if (LAYERS[params.get('layer')]) state.layer = params.get('layer')
  const x = Number(params.get('x'))
  const z = Number(params.get('z'))
  const m = Number(params.get('m'))
  if (params.has('x') && Number.isFinite(x) && Number.isFinite(z) && m > 0) {
    state.view = { cx: x, cz: z, mpp: m }
    state.fitted = true
  }
  if (params.has('y') && /^\d+$/.test(params.get('y'))) state.year = Number(params.get('y'))
  if (params.has('line') && /^\d+$/.test(params.get('line'))) state.pendingLine = Number(params.get('line'))
  if (params.has('d') && /^\d+$/.test(params.get('d'))) state.pendingDistrict = Number(params.get('d'))
}

// ---- Wiring ----
for (const input of document.querySelectorAll('[data-show]')) {
  input.checked = Boolean(state.show[input.dataset.show])
  input.addEventListener('change', () => {
    state.show[input.dataset.show] = input.checked
    requestDraw()
  })
}
$('#seed-form').addEventListener('submit', (event) => {
  event.preventDefault()
  state.fitted = false
  generate($('#seed').value)
})
$('#random-seed').addEventListener('click', () => {
  $('#seed').value = String(Math.floor(Math.random() * 1e6))
  state.fitted = false
  generate($('#seed').value)
})
$('#run-cli-deep')?.addEventListener('click', () => triggerCliGenerate('deep'))
$('#run-cli-fast')?.addEventListener('click', () => triggerCliGenerate('fast'))

$('#timeline-slider')?.addEventListener('input', (event) => {
  stopPlayback()
  setYearByIndex(Number(event.target.value))
  saveHashSoon()
})
$('#timeline-play')?.addEventListener('click', () => {
  const years = state.overlay?.years
  if (!years?.length) return
  if (state.playing) {
    stopPlayback()
    return
  }
  state.playing = true
  $('#timeline-play').textContent = '⏸ 停止'
  let idx = years.indexOf(state.year)
  if (idx >= years.length - 1 || idx < 0) idx = 0
  setYearByIndex(idx)
  state.playTimer = setInterval(() => {
    idx++
    if (idx >= years.length) {
      stopPlayback()
      return
    }
    setYearByIndex(idx)
  }, 450)
})

$('#panel-toggle').addEventListener('click', () => {
  const panel = $('#panel')
  const collapsed = !panel.classList.contains('collapsed')
  panel.classList.toggle('collapsed', collapsed)
  $('#panel-toggle').classList.toggle('collapsed', collapsed)
  $('.map').classList.toggle('full', collapsed)
  $('#panel-toggle').setAttribute('aria-expanded', String(!collapsed))
})
window.addEventListener('resize', () => {
  const line = state.overlay?.lines.find((entry) => entry.id === state.selected)
  if (line) drawProfile(line)
  if (state.isExtremeSim && state.overlay?.timeline) drawCommerceChart(state.overlay.timeline)
})
new ResizeObserver(resize).observe(canvas)

readHash()
renderLayers()
resize()
generate($('#seed').value)
window.__region = state
