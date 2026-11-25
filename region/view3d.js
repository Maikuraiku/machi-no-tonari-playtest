// A page for checking the region in 3D on its own, outside the game: a square of the region
// around a point (by default a station), with its ground, roads, buildings and district
// borders, and the monorail beams that follow the route map through it.
// The address takes #seed=3&x=…&z=…&size=1000&bare=1 (size up to 20000 m; bare: without buildings).
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { createDistantBuildings, createRegionScene } from '../world/region-scene.js'
import { routeSpec } from '../world/route-line.js'
import { createRouteTransit } from '../world/route-transit.js'

// The same seed region.js makes from what was typed (numbers stay numbers, text is hashed),
// kept here so the page itself loads none of the generator.
function regionSeed(value) {
  const text = String(value ?? '').trim()
  if (/^\d{1,9}$/.test(text)) return Number(text)
  const source = text || '1'
  let h = 0x811c9dc5
  for (let index = 0; index < source.length; index++) h = Math.imul(h ^ source.charCodeAt(index), 0x01000193)
  return h >>> 0
}

const REGION_SIZE = 20000
const DIST_TILE = 2000
const params = new URLSearchParams(location.hash.slice(1))
const seed = regionSeed(params.get('seed') ?? '3')
const rawDist = Number(params.get('dist'))
const size = Math.min(REGION_SIZE, Math.max(200, Number(params.get('size')) || (rawDist > 0 ? rawDist * 2 : 1000)))
const bare = params.get('bare') === '1'
const useDistant = !bare && size > 1200
const info = document.getElementById('info')
const canvas = document.getElementById('view')

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
renderer.shadowMap.enabled = size <= 1600
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.9
const scene = new THREE.Scene()
scene.background = new THREE.Color('#c9dbe6')
scene.fog = new THREE.Fog('#c9dbe6', Math.max(600, Math.round(size * 0.28)), Math.max(2600, Math.round(size * 1.45 + 600)))
const camera = new THREE.PerspectiveCamera(50, 1, size > 4000 ? 2 : 0.5, Math.max(6000, size * 3))
camera.position.set(-size * 0.38, size * 0.26, size * 0.42)
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 30, 0)
controls.minDistance = 35
controls.maxDistance = Math.max(2400, size * 1.6)
controls.maxPolarAngle = Math.PI * 0.49
scene.add(new THREE.HemisphereLight('#dfe8f0', '#6b6a5a', 1.2))
const sun = new THREE.DirectionalLight('#fff4e2', 2.6)
sun.position.set(-300, 500, 260)
sun.castShadow = size <= 1600
sun.shadow.mapSize.set(4096, 4096)
Object.assign(sun.shadow.camera, { left: -700, right: 700, top: 700, bottom: -700, near: 10, far: 1600 })
scene.add(sun, sun.target)

const region = createRegionScene()
scene.add(region.group)
const distant = createDistantBuildings()
scene.add(distant.group)
const transit = createRouteTransit()
scene.add(transit.group)
// For looking around from the console while checking.
window.__view = { camera, controls, transit, region, distant }

function resize() {
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  renderer.setSize(w, h, false)
  camera.aspect = w / Math.max(1, h)
  camera.updateProjectionMatrix()
}
window.addEventListener('resize', resize)
resize()
renderer.setAnimationLoop(() => {
  controls.update()
  transit.update([controls.target.x, controls.target.z], size)
  renderer.render(scene, camera)
})

const worker = new Worker(new URL('./worker.js?v=4', import.meta.url), { type: 'module' })
let overlay = null
let centre = null
let viewBox = null
let distantTotal = 0
let distantLoadedTiles = 0
let distantQueue = []
let distantInFlight = 0
let buildStart = 0
let laidRoutes = 0
let loadedWin = null

const sizeOptions = [[1000, '1km四方'], [2500, '2.5km四方'], [5000, '5km四方'], [10000, '10km四方'], [20000, '20km(半径10km)']]
function renderInfo(elapsedMs) {
  if (!loadedWin) return
  const bCount = useDistant ? distantTotal : loadedWin.buildings.length
  const extra = useDistant && distantQueue.length + distantInFlight > 0
    ? `（建物タイル読込 ${distantLoadedTiles}）`
    : ''
  const bar = `<div class="dist-bar">${sizeOptions.map(([val, label]) =>
    `<button type="button" data-size="${val}" aria-pressed="${size === val}">${label}</button>`).join('')}</div>`
  const bl = overlay?.buildingLawStats
  const lawLine = bl
    ? `<br>法規適合 ${bl.compliantSharePct}%・累計売買 ${bl.cumulativeTransactions.toLocaleString()}件（建築法: ${bl.lawEraName}）`
    : ''
  info.innerHTML = `シード ${seed}・${size}m四方（東へ ${(centre[0] / 1000).toFixed(2)}km・南へ ${(centre[1] / 1000).toFixed(2)}km）<br>建物 ${bCount.toLocaleString()}棟${extra}・生活道路 ${loadedWin.streets.length}本・地区 ${loadedWin.districts.length}・モノレール ${laidRoutes}路線${lawLine}<br>3Dの組み立て ${Math.round(elapsedMs)}ミリ秒。ドラッグで回転、ホイールで拡大。${bar}`
}

info.addEventListener('click', (event) => {
  const btn = event.target.closest('button[data-size]')
  if (!btn) return
  const next = new URLSearchParams(location.hash.slice(1))
  next.set('size', btn.dataset.size)
  next.delete('dist')
  location.hash = next.toString()
  location.reload()
})
window.addEventListener('hashchange', () => location.reload())

function stepGridSize(span) {
  if (span <= 1100) return 2
  if (span <= 1600) return 4
  return Math.min(64, Math.max(8, Math.ceil(span / 240 / 2) * 2))
}

function pumpViewTiles() {
  while (distantInFlight < 2 && distantQueue.length) {
    const item = distantQueue.shift()
    distantInFlight++
    worker.postMessage({ type: 'buildingTile', id: item.id, seed, tx: item.tx, tz: item.tz })
  }
}

worker.onmessage = (event) => {
  const message = event.data
  if (message.type === 'progress') info.textContent = `${message.label}（${Math.round(message.fraction * 100)}%・${(message.elapsed / 1000).toFixed(1)}秒）`
  else if (message.type === 'ready') {
    overlay = message.overlay
    const allSt = (overlay.lines || []).flatMap(l => l.stations || [])
    const openStreams = (overlay.streams || []).filter(s => !s.covered)
    const slopes = overlay.slopes || []
    let bestSt = overlay.lines[0]?.stations[Math.min(5, overlay.lines[0].stations.length - 1)]
    let bestSc = -1e9
    for (const st of allSt) {
      let sc = (st.transfer ? 55 : 0) + Math.min(35, (st.boardings || 0) / 1000)
      if (st.x < 4000 || st.x > REGION_SIZE - 4000 || st.z < 4000 || st.z > REGION_SIZE - 4000) sc -= 350
      let minStreamDist = 1e9
      for (const sr of openStreams) {
        for (let k = 0; k < sr.points.length; k += 4) {
          const d = Math.hypot(sr.points[k] - st.x, sr.points[k + 1] - st.z)
          if (d < minStreamDist) minStreamDist = d
        }
      }
      if (minStreamDist >= 90 && minStreamDist < 380) sc += 150
      else if (minStreamDist < 480) sc += 65
      let nearSlope = false
      for (const sl of slopes) {
        if (Math.hypot((sl.x ?? 0) - st.x, (sl.z ?? 0) - st.z) < 480) { nearSlope = true; break }
      }
      if (nearSlope) sc += 120
      if (sc > bestSc) { bestSc = sc; bestSt = st }
    }
    centre = [Number(params.get('x')) || bestSt?.x || 10000, Number(params.get('z')) || bestSt?.z || 10000]
    const step = stepGridSize(size)
    const half = size / 2
    const x0 = Math.max(0, Math.floor((centre[0] - half) / step) * step)
    const z0 = Math.max(0, Math.floor((centre[1] - half) / step) * step)
    const x1 = Math.min(REGION_SIZE, Math.ceil((centre[0] + half) / step) * step)
    const z1 = Math.min(REGION_SIZE, Math.ceil((centre[1] + half) / step) * step)
    viewBox = { x0, z0, x1, z1 }
    info.textContent = '3Dの形を作っています…'
    worker.postMessage({
      type: 'window',
      id: 1,
      seed,
      x0, z0, x1, z1,
      step,
      buildings: !bare && !useDistant,
      streets: size <= 2500,
    })
  } else if (message.type === 'window') {
    show(message.window).catch((error) => { info.textContent = `3Dの形を作れませんでした。${error.message}` })
  } else if (message.type === 'buildingTile') {
    distantInFlight = Math.max(0, distantInFlight - 1)
    if (!message.missing && message.count > 0) {
      if (viewBox) {
        const { corners, count } = message
        const { x0, z0, x1, z1 } = viewBox
        for (let i = 0; i < count; i++) {
          const o = i * 8
          const cx = (corners[o] + corners[o + 2] + corners[o + 4] + corners[o + 6]) * 0.25
          const cz = (corners[o + 1] + corners[o + 3] + corners[o + 5] + corners[o + 7]) * 0.25
          if (cx >= x0 && cx <= x1 && cz >= z0 && cz <= z1) distantTotal++
        }
      } else distantTotal += message.count
      distant.addTile(message)
    }
    distantLoadedTiles++
    renderInfo(performance.now() - buildStart)
    pumpViewTiles()
  } else if (message.type === 'error') info.textContent = `失敗しました：${message.message}`
}
worker.postMessage({ type: 'generate', seed, preloadBuildings: useDistant })

async function show(win) {
  let lowest = Infinity
  for (const h of win.heights) lowest = Math.min(lowest, h)
  const datum = Math.floor(lowest)
  const origin = centre
  buildStart = performance.now()
  if (!(await region.show(win, { origin, datum }))) return
  const middle = region.heightAt(0, 0) ?? 0
  controls.target.set(0, middle, 0)
  camera.position.set(-size * 0.38, middle + size * 0.28, size * 0.42)
  info.textContent = 'モノレールを配置しています…'
  // Let the completed ground and buildings render before laying the route map.
  await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)))
  // The monorail along the route map: every line that crosses this square, built near it.
  const specs = []
  for (const line of overlay.lines) {
    if (!win.lines.includes(line.id)) continue
    const spec = routeSpec({ name: line.name, color: line.color, points: line.points, ground: line.ground, stations: line.stations }, { origin, datum })
    if (spec) specs.push(spec)
  }
  transit.setLines(specs, { near: [0, 0], reach: Math.min(size * 0.75, 4500) })
  laidRoutes = specs.length
  loadedWin = win
  if (useDistant && viewBox) {
    const { x0, z0, x1, z1 } = viewBox
    distant.setView({ origin, datum })
    distant.setFilter(({ corners: c }) => {
      const cx = (c[0] + c[2] + c[4] + c[6]) * 0.25
      const cz = (c[1] + c[3] + c[5] + c[7]) * 0.25
      return cx >= x0 && cx <= x1 && cz >= z0 && cz <= z1
    })
    const maxT = Math.floor(REGION_SIZE / DIST_TILE) - 1
    const tx0 = Math.max(0, Math.floor(x0 / DIST_TILE))
    const tx1 = Math.min(maxT, Math.floor(Math.max(0, x1 - 1) / DIST_TILE))
    const tz0 = Math.max(0, Math.floor(z0 / DIST_TILE))
    const tz1 = Math.min(maxT, Math.floor(Math.max(0, z1 - 1) / DIST_TILE))
    const list = []
    let nextId = 100
    for (let tz = tz0; tz <= tz1; tz++) {
      for (let tx = tx0; tx <= tx1; tx++) {
        const dist = Math.hypot((tx + 0.5) * DIST_TILE - centre[0], (tz + 0.5) * DIST_TILE - centre[1])
        list.push({ id: nextId++, tx, tz, dist })
      }
    }
    list.sort((a, b) => a.dist - b.dist)
    distantQueue = list
    pumpViewTiles()
  }
  renderInfo(performance.now() - buildStart)
}
