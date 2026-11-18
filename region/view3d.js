// A page for checking the region in 3D on its own, outside the game: a square of the region
// around a point (by default a station), with its ground, roads, buildings and district
// borders, and the monorail beams that follow the route map through it.
// The address takes #seed=3&x=…&z=…&size=1000&bare=1 (bare: without buildings).
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { createRegionScene } from '../world/region-scene.js'
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

const params = new URLSearchParams(location.hash.slice(1))
const seed = regionSeed(params.get('seed') ?? '3')
const size = Math.min(1600, Math.max(200, Number(params.get('size')) || 1000))
const info = document.getElementById('info')
const canvas = document.getElementById('view')

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
renderer.shadowMap.enabled = true
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.9
const scene = new THREE.Scene()
scene.background = new THREE.Color('#c9dbe6')
scene.fog = new THREE.Fog('#c9dbe6', 600, 2600)
const camera = new THREE.PerspectiveCamera(50, 1, 0.5, 6000)
camera.position.set(-380, 260, 420)
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 30, 0)
controls.maxPolarAngle = Math.PI * 0.49
scene.add(new THREE.HemisphereLight('#dfe8f0', '#6b6a5a', 1.2))
const sun = new THREE.DirectionalLight('#fff4e2', 2.6)
sun.position.set(-300, 500, 260)
sun.castShadow = true
sun.shadow.mapSize.set(4096, 4096)
Object.assign(sun.shadow.camera, { left: -700, right: 700, top: 700, bottom: -700, near: 10, far: 1600 })
scene.add(sun, sun.target)

const region = createRegionScene()
scene.add(region.group)
const transit = createRouteTransit()
scene.add(transit.group)
// For looking around from the console while checking.
window.__view = { camera, controls, transit, region }

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

const worker = new Worker(new URL('./worker.js?v=2', import.meta.url), { type: 'module' })
let overlay = null
let centre = null
worker.onmessage = (event) => {
  const message = event.data
  if (message.type === 'progress') info.textContent = `${message.label}（${Math.round(message.fraction * 100)}%・${(message.elapsed / 1000).toFixed(1)}秒）`
  else if (message.type === 'ready') {
    overlay = message.overlay
    const station = overlay.lines[0]?.stations[Math.min(5, overlay.lines[0].stations.length - 1)]
    centre = [Number(params.get('x')) || station?.x || 10000, Number(params.get('z')) || station?.z || 10000]
    info.textContent = '3Dの形を作っています…'
    worker.postMessage({ type: 'window', id: 1, seed, x0: centre[0] - size / 2, z0: centre[1] - size / 2, x1: centre[0] + size / 2, z1: centre[1] + size / 2, step: size > 1100 ? 4 : 2, buildings: params.get('bare') !== '1' })
  } else if (message.type === 'window') {
    show(message.window).catch((error) => { info.textContent = `3Dの形を作れませんでした。${error.message}` })
  }
  else if (message.type === 'error') info.textContent = `失敗しました：${message.message}`
}
worker.postMessage({ type: 'generate', seed })

async function show(win) {
  let lowest = Infinity
  for (const h of win.heights) lowest = Math.min(lowest, h)
  const datum = Math.floor(lowest)
  const origin = centre
  const started = performance.now()
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
  transit.setLines(specs, { near: [0, 0], reach: size * 0.75 })
  const laid = specs.length
  info.innerHTML = `シード ${seed}・${size}m四方（東へ ${(centre[0] / 1000).toFixed(2)}km・南へ ${(centre[1] / 1000).toFixed(2)}km）<br>建物 ${win.buildings.length}棟・生活道路 ${win.streets.length}本・地区 ${win.districts.length}・モノレール ${laid}路線<br>3Dの組み立て ${Math.round(performance.now() - started)}ミリ秒。ドラッグで回転、ホイールで拡大。`
}
