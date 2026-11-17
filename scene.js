// The 3D town: puts the environment, buildings and residents together, moves the player
// through streets and rooms alike, and drives the third-person, first-person, overview and
// VR cameras. Buildings are real: their walls stop a walker, their doors open, and stairs
// lead to the storeys above.
import * as THREE from 'three'
import { createAvatars } from './world/avatars.js'
import { SHOP_HOUSES, createBuilding } from './world/buildings.js'
import { DECOR } from './world/decor.js'
import { BODY as RADIUS, colliders, floorHeight, frontDoors, storeyShape } from './world/design.js'
import { createEnvironment } from './world/environment.js'
import { TILE, disposeGroup, setAnisotropy, setDetail, textTexture } from './world/kit.js'

const SPEED = 4.6
const MODES = ['follow', 'first', 'overview', 'close']
// Closer than this (in metres), the rooms of a building are drawn.
const NEAR = 30

function makeSign(text) {
  const { map, aspect } = textTexture(text, {
    color: '#3f4c52', background: '#fffdf2ee', border: '#e3d9c4',
    font: '700 44px "Yu Gothic UI", "Hiragino Sans", system-ui, sans-serif', padding: 16,
  })
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map, depthWrite: false, transparent: true, toneMapped: false, fog: false }))
  sprite.userData = { aspect, text, ownMaterial: true }
  sprite.renderOrder = 4
  return sprite
}

function flatMarker(color, opacity) {
  const marker = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ color, opacity, transparent: true, depthWrite: false, toneMapped: false }),
  )
  marker.rotation.x = -Math.PI / 2
  marker.visible = false
  marker.renderOrder = 3
  return marker
}

// Keeps a walker of radius RADIUS out of walls and furniture. Everything is in lot metres.
function pushOut(solids, x, z) {
  for (let pass = 0; pass < 3; pass++) {
    let moved = false
    for (const wall of solids.segments) {
      const ex = wall.bx - wall.ax
      const ez = wall.bz - wall.az
      const length = ex * ex + ez * ez || 1e-9
      const t = THREE.MathUtils.clamp(((x - wall.ax) * ex + (z - wall.az) * ez) / length, 0, 1)
      const cx = wall.ax + ex * t
      const cz = wall.az + ez * t
      const ox = x - cx
      const oz = z - cz
      const gap = Math.hypot(ox, oz)
      const room = RADIUS + wall.r
      if (gap >= room) continue
      if (gap > 1e-5) {
        x = cx + ox / gap * room
        z = cz + oz / gap * room
      } else {
        const along = Math.sqrt(length)
        x = cx - ez / along * room
        z = cz + ex / along * room
      }
      moved = true
    }
    for (const box of solids.boxes) {
      const turn = box.r * Math.PI / 180
      const cos = Math.cos(turn)
      const sin = Math.sin(turn)
      const rx = x - box.x
      const rz = z - box.z
      const lx = rx * cos - rz * sin
      const lz = rx * sin + rz * cos
      const hx = box.w / 2
      const hz = box.d / 2
      const nx = THREE.MathUtils.clamp(lx, -hx, hx)
      const nz = THREE.MathUtils.clamp(lz, -hz, hz)
      const gap = Math.hypot(lx - nx, lz - nz)
      if (gap >= RADIUS) continue
      let px
      let pz
      if (gap > 1e-5) {
        px = nx + (lx - nx) / gap * RADIUS
        pz = nz + (lz - nz) / gap * RADIUS
      } else {
        // Standing inside it (something was put down here): step out by the nearest side.
        const [depth, sx, sz] = [[hx - lx, 1, 0], [lx + hx, -1, 0], [hz - lz, 0, 1], [lz + hz, 0, -1]].sort((a, b) => a[0] - b[0])[0]
        px = lx + sx * (depth + RADIUS)
        pz = lz + sz * (depth + RADIUS)
      }
      x = box.x + px * cos + pz * sin
      z = box.z - px * sin + pz * cos
      moved = true
    }
    if (!moved) break
  }
  return [x, z]
}

export function initScene(container, callbacks = {}) {
  const coarse = window.matchMedia?.('(pointer: coarse)').matches ?? false
  // WebXR supplies standard eye projection matrices each frame.
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 0.58
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.xr.enabled = true
  setAnisotropy(Math.min(8, renderer.capabilities.getMaxAnisotropy()))
  const canvas = renderer.domElement
  canvas.style.cssText = 'display:block;width:100%;height:100%;touch-action:none;outline:none'
  canvas.setAttribute('aria-label', 'まちのとなりの3Dマップ')
  container.append(canvas)

  const world = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 5200)
  const rig = new THREE.Group()
  rig.add(camera)
  world.add(rig)
  const environment = createEnvironment(world, renderer)
  const town = new THREE.Group()
  const markers = new THREE.Group()
  world.add(town, markers)
  const avatars = createAvatars(world, { onAvatarState: (report) => callbacks.onAvatarState?.(report) })
  const hover = flatMarker('#fff6c2', 0.5)
  const selected = flatMarker('#ffe98a', 0.66)
  markers.add(hover, selected)
  let grid = null
  let gridKey = ''

  let state = {}
  let quality = 'medium'
  let mode = 'follow'
  let yaw = 0.62
  let pitch = 0.5
  let distance = 13
  let width = 100
  let height = 100
  let elapsed = 0
  let lastTime = performance.now()
  let snapCamera = true
  // Where a click has sent the resident: one spot after another, in town tiles.
  const route = []
  let resettle = false
  let fountain = null
  let lastReport = 0
  let lastSent = ''
  let pointerLocked = false
  let xrYaw = 0
  let xrTurned = false
  let xrHeading = 0
  let xrBodyYaw = null
  let xrPose = null
  // The building the player stands in (null in the street), and what was last told to the app.
  let home = null
  let placeKey = ''
  const entries = new Map()
  const others = []
  const focus = new THREE.Vector3()
  const pan = new THREE.Vector3()
  const here = new THREE.Vector3()
  // Where the player is: x and z in town tiles, y in metres above the street, and the storey.
  const local = { x: 0, z: 0, level: 0, stair: null, warp: null, session: null, ox: 0, oz: 0, ready: false }
  const keys = new Set()
  const stick = { x: 0, y: 0 }
  const raycaster = new THREE.Raycaster()
  const pointer = new THREE.Vector2()
  const floor = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
  const point = new THREE.Vector3()
  const forward = new THREE.Vector3()

  const immersive = () => renderer.xr.isPresenting
  const firstPerson = () => mode === 'first' || immersive()
  const designing = () => entries.get(state.design?.houseId) ?? null

  // ---- Town and buildings ---------------------------------------------------

  function drawTown() {
    const map = state.town
    if (!map) return
    const worldX = (x) => (x - map.originX) * TILE
    const worldZ = (z) => (z - map.originZ) * TILE
    const lots = [
      { ...SHOP_HOUSES.shop, ...map.shop, target: { id: 'shop', kind: 'shop', ...map.shop }, label: '服屋' },
      { ...SHOP_HOUSES.cafe, ...map.cafe, target: { id: 'cafe', kind: 'cafe', ...map.cafe }, label: 'カフェ' },
      ...(state.houses ?? []).map((house) => ({ ...house, target: { id: house.id, kind: 'house', x: house.x, z: house.z } })),
    ]
    const taken = new Set()
    const tilesOf = (lot) => {
      const tiles = []
      for (let z = lot.z; z < lot.z + lot.d; z++) for (let x = lot.x; x < lot.x + lot.w; x++) tiles.push(`${x},${z}`)
      return tiles
    }
    for (const lot of lots) tilesOf(lot).forEach((tile) => taken.add(tile))
    const paved = new Set([...map.roads.map(({ x, z }) => `${x},${z}`), `${map.plaza.x},${map.plaza.z}`])
    for (const spot of DECOR) {
      const lot = { ...spot, x: map.plaza.x + spot.dx, z: map.plaza.z + spot.dz }
      const tiles = tilesOf(lot)
      const fits = lot.x >= 0 && lot.z >= 0 && lot.x + lot.w <= map.width && lot.z + lot.d <= map.height
        && tiles.every((tile) => !taken.has(tile) && !paved.has(tile))
      if (!fits) continue
      tiles.forEach((tile) => taken.add(tile))
      lots.push(lot)
    }
    environment.drawTown(map, taken)

    const seen = new Set()
    for (const lot of lots) {
      // A building being designed is shown as it is drawn, before it is saved.
      const draft = state.design?.houseId === lot.id ? state.design : null
      const signature = draft ? `draft|${draft.stamp}` : JSON.stringify([lot.style, lot.floors, lot.w, lot.d, lot.sign, lot.look, lot.rev])
      let entry = entries.get(lot.id)
      if (!entry || entry.signature !== signature) {
        if (entry) {
          entry.building.dispose()
          town.remove(entry.building.group)
        }
        const building = createBuilding(draft ? { ...lot, design: draft.design } : lot)
        town.add(building.group)
        entry = { ...entry, id: lot.id, building, signature, solids: new Map(), shown: '' }
        entries.set(lot.id, entry)
        // The floor may have changed under the resident's feet.
        if (home?.id === lot.id || local.stair?.entry.id === lot.id) resettle = true
      }
      const x = worldX(lot.x - 0.5)
      const z = worldZ(lot.z - 0.5)
      Object.assign(entry, { x, z, w: lot.w * TILE, d: lot.d * TILE, target: lot.target, locked: lot.canEnter === false, kind: lot.target?.kind ?? 'scenery' })
      entry.building.group.position.set(x, 0, z)
      const { bounds } = entry.building
      entry.box = new THREE.Box3(new THREE.Vector3(x + bounds.x0 - 0.15, 0, z + bounds.z0 - 0.15), new THREE.Vector3(x + bounds.x1 + 0.15, entry.building.height, z + bounds.z1 + 0.15))
      const [front] = frontDoors(entry.building.design)
      // Where a visitor arrives: just outside the front door, or in front of the lot.
      entry.arrive = front ? { x: x + front.outside[0], z: z + front.outside[1], inside: { x: x + front.x - front.normal[0] * 1.1, z: z + front.z - front.normal[1] * 1.1 } }
        : { x: x + entry.w / 2, z: z + entry.d + 0.6, inside: null }
      if (entry.label?.userData.text !== lot.label) {
        if (entry.label) {
          markers.remove(entry.label)
          entry.label.material.map.dispose()
          entry.label.material.dispose()
          entry.label = null
        }
        if (lot.label) {
          entry.label = makeSign(lot.label)
          markers.add(entry.label)
        }
      }
      entry.label?.position.set((entry.box.min.x + entry.box.max.x) / 2, entry.building.height + 1.4, (entry.box.min.z + entry.box.max.z) / 2)
      seen.add(lot.id)
    }
    for (const [id, entry] of entries) {
      if (seen.has(id)) continue
      entry.building.dispose()
      town.remove(entry.building.group)
      if (entry.label) {
        markers.remove(entry.label)
        entry.label.material.map.dispose()
        entry.label.material.dispose()
      }
      entries.delete(id)
      if (home === entry || local.stair?.entry === entry) resettle = true
    }
    fountain = { x: worldX(map.plaza.x), z: worldZ(map.plaza.z), radius: 1.9 }

    const key = `${map.width},${map.height},${map.originX},${map.originZ}`
    if (key !== gridKey) {
      gridKey = key
      if (grid) {
        markers.remove(grid)
        grid.geometry.dispose()
      }
      const lines = []
      for (let x = 0; x <= map.width; x++) lines.push(worldX(x - 0.5), 0.1, worldZ(-0.5), worldX(x - 0.5), 0.1, worldZ(map.height - 0.5))
      for (let z = 0; z <= map.height; z++) lines.push(worldX(-0.5), 0.1, worldZ(z - 0.5), worldX(map.width - 0.5), 0.1, worldZ(z - 0.5))
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3))
      grid = new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.55, depthWrite: false }))
      markers.add(grid)
    }
  }

  // What stops a walker on one storey of a building. Doors in the outside walls of a house
  // stay shut for anyone who has not been invited.
  function solidsOf(entry, level) {
    if (!entry.solids.has(level)) entry.solids.set(level, colliders(entry.building.design, level, { locked: entry.locked }))
    return entry.solids.get(level)
  }

  const onFloor = (entry, level, x, z) => Boolean(storeyShape(entry.building.design, level)?.floored(x - entry.x, z - entry.z))

  function placeLocal() {
    const { player, town: map } = state
    if (!player || !map) return
    if (!local.ready || local.warp !== (player.warp ?? 0) || local.session !== (state.session ?? null)) {
      // The first sight of a town, or the town has moved this resident (shown out of a house).
      local.x = player.x
      local.z = player.z
      here.y = player.y ?? 0
      local.level = 0
      local.stair = null
      local.warp = player.warp ?? 0
      local.session = state.session ?? null
      local.ready = true
      home = null
      resettle = false
      route.length = 0
      snapCamera = true
      lastSent = ''
      here.set((local.x - map.originX) * TILE, here.y, (local.z - map.originZ) * TILE)
      settle()
    } else if (local.ox !== map.originX || local.oz !== map.originZ) {
      // The town grew to the west or north: tile numbers shifted, the ground did not.
      local.x += map.originX - local.ox
      local.z += map.originZ - local.oz
      route.length = 0
    }
    local.ox = map.originX
    local.oz = map.originZ
    here.x = (local.x - local.ox) * TILE
    here.z = (local.z - local.oz) * TILE
    if (resettle) {
      resettle = false
      local.stair = null
      settle()
    }
  }

  // Works out which building and storey a height belongs to, after arriving somewhere at once.
  function settle() {
    home = null
    local.level = 0
    for (const entry of entries.values()) {
      if (here.x < entry.x || here.x > entry.x + entry.w || here.z < entry.z || here.z > entry.z + entry.d) continue
      const { design } = entry.building
      let level = 0
      for (let index = 0; index < design.storeys.length; index++) {
        if (floorHeight(design, index) <= here.y + 0.6) level = index
      }
      if (onFloor(entry, level, here.x, here.z)) {
        home = entry
        local.level = level
        here.y = floorHeight(design, level)
      } else here.y = 0
      return
    }
    here.y = 0
  }

  const residentSpot = (resident) => ({
    x: (resident.x - local.ox) * TILE, y: resident.y ?? 0, z: (resident.z - local.oz) * TILE, place: 'town',
  })

  function syncActors() {
    const { player } = state
    if (!player || !local.ready) return
    others.length = 0
    const residents = (state.players ?? []).map((resident) => {
      const spot = residentSpot(resident)
      others.push(spot)
      return { ...resident, world: spot }
    })
    avatars.sync({ ...player, world: { x: here.x, y: here.y, z: here.z, place: 'town' } }, residents)
  }

  function updatePresence(players) {
    if (!local.ready || !state.players?.length || !players.length) return
    const locations = new Map(players.map((player) => [player.id, player]))
    others.length = 0
    const residents = state.players.map((resident) => {
      const location = locations.get(resident.id)
      const next = location && (location.warp ?? 0) >= (resident.warp ?? 0) ? { ...resident, ...location } : resident
      const spot = residentSpot(next)
      others.push(spot)
      if (next !== resident) avatars.updatePresence(next, spot)
      return next
    })
    state = { ...state, players: residents }
  }

  function drawMarkers() {
    const map = state.town
    if (!map) return
    const editing = Boolean(state.edit)
    if (grid) grid.visible = editing
    selected.visible = editing && Boolean(state.selected)
    if (selected.visible) {
      selected.scale.set(TILE * 0.94, TILE * 0.94, 1)
      selected.position.set((state.selected.x - map.originX) * TILE, 0.12, (state.selected.z - map.originZ) * TILE)
    }
    if (!editing) hover.visible = false
  }

  function update(next) {
    state = next ?? {}
    drawTown()
    placeLocal()
    syncActors()
    drawMarkers()
  }

  // ---- Movement -------------------------------------------------------------

  // On a flight of stairs a walker follows the steps. `steered` is false for a walk that was
  // set off by a click, which simply carries on to the other end.
  function climb(dx, dz, steered = true) {
    const { stair, entry } = local.stair
    const { path } = stair
    const push = Math.hypot(dx, dz)
    let from = 0
    let index = 0
    const lengths = path.slice(1).map((next, at) => Math.hypot(next[0] - path[at][0], next[1] - path[at][1]))
    const total = lengths.reduce((sum, length) => sum + length, 0)
    while (index < lengths.length - 1 && local.stair.s > from + lengths[index]) from += lengths[index++]
    if (push > 1e-6 && steered) {
      const ux = dx / push
      const uz = dz / push
      const { held } = local.stair
      // Holding one direction climbs the whole flight, round its turns. A new direction is
      // read against the steps underfoot: with them is up, against them is back down.
      if (!held || ux * held[0] + uz * held[1] < 0.7) {
        const along = (ux * (path[index + 1][0] - path[index][0]) + uz * (path[index + 1][1] - path[index][1])) / (lengths[index] || 1)
        if (Math.abs(along) > 0.3) local.stair.way = Math.sign(along)
        local.stair.held = [ux, uz]
      }
    } else if (steered) local.stair.held = null
    local.stair.s += local.stair.way * push * 0.8
    const base = floorHeight(entry.building.design, stair.from)
    const leave = (end, level) => {
      here.x = entry.x + end.at[0] + end.out[0] * (RADIUS + 0.16)
      here.z = entry.z + end.at[1] + end.out[1] * (RADIUS + 0.16)
      here.y = floorHeight(entry.building.design, level)
      local.level = level
      local.stair = null
      home = entry
      // A click that led onto the stairs has done its work at the other end.
      route.length = 0
    }
    if (local.stair.s <= 0) leave(stair.foot, stair.from)
    else if (local.stair.s >= total) leave(stair.head, stair.from + 1)
    else {
      let rest = local.stair.s
      let at = 0
      while (at < lengths.length - 1 && rest > lengths[at]) rest -= lengths[at++]
      const t = rest / (lengths[at] || 1)
      here.x = entry.x + path[at][0] + (path[at + 1][0] - path[at][0]) * t
      here.z = entry.z + path[at][1] + (path[at + 1][1] - path[at][1]) * t
      here.y = base + path[at][2] + (path[at + 1][2] - path[at][2]) * t
    }
  }

  // Moves the player by (dx, dz) metres, stopping at walls and taking the stairs.
  function step(dx, dz, steered = true) {
    if (local.stair) {
      climb(dx, dz, steered)
      return
    }
    const map = state.town
    const edge = TILE / 2 - RADIUS
    let px = THREE.MathUtils.clamp(here.x + dx, -map.originX * TILE - edge, (map.width - 1 - map.originX) * TILE + edge)
    let pz = THREE.MathUtils.clamp(here.z + dz, -map.originZ * TILE - edge, (map.height - 1 - map.originZ) * TILE + edge)
    if (fountain && local.level === 0) {
      // New residents arrive at the middle of the plaza, which is where the fountain stands.
      const fx = px - fountain.x
      const fz = pz - fountain.z
      const length = Math.hypot(fx, fz)
      if (length < fountain.radius + RADIUS) {
        const [ux, uz] = length > 1e-4 ? [fx / length, fz / length] : [0, 1]
        px = fountain.x + ux * (fountain.radius + RADIUS)
        pz = fountain.z + uz * (fountain.radius + RADIUS)
      }
    }
    for (const entry of entries.values()) {
      // Upstairs, only the building one stands in matters.
      if (local.level > 0 && entry !== home) continue
      if (px < entry.x - 1 || px > entry.x + entry.w + 1 || pz < entry.z - 1 || pz > entry.z + entry.d + 1) continue
      const solids = solidsOf(entry, entry === home ? local.level : 0)
      const lx = px - entry.x
      const lz = pz - entry.z
      for (const stair of solids.stairs) {
        const { gate } = stair
        const rx = lx - gate.at[0]
        const rz = lz - gate.at[1]
        const depth = rx * gate.out[0] + rz * gate.out[1]
        const aside = rx * gate.out[1] - rz * gate.out[0]
        // Walking into the foot (or the head) of a flight takes it.
        if (depth > -0.1 && depth < RADIUS + 0.14 && Math.abs(aside) < gate.half && dx * gate.out[0] + dz * gate.out[1] < -1e-4) {
          const total = stair.path.slice(1).reduce((sum, next, at) => sum + Math.hypot(next[0] - stair.path[at][0], next[1] - stair.path[at][1]), 0)
          const push = Math.hypot(dx, dz) || 1
          // A walk set off by a click takes the whole flight; a steered one can turn back.
          local.stair = { entry, stair, s: stair.up ? 0.02 : total - 0.02, way: stair.up ? 1 : -1, held: [dx / push, dz / push], auto: !steered }
          home = entry
          climb(0, 0, false)
          return
        }
      }
      const [qx, qz] = pushOut(solids, lx, lz)
      px = qx + entry.x
      pz = qz + entry.z
    }
    // Nobody steps off the edge of an upper floor.
    if (local.level > 0 && home && !onFloor(home, local.level, px, pz)) return
    here.x = px
    here.z = pz
    if (local.level === 0) {
      home = null
      for (const entry of entries.values()) {
        if (px >= entry.x && px <= entry.x + entry.w && pz >= entry.z && pz <= entry.z + entry.d && onFloor(entry, 0, px, pz)) home = entry
      }
    }
  }

  function readInput() {
    let x = stick.x
    let y = stick.y
    if (keys.has('arrowup') || keys.has('w')) y += 1
    if (keys.has('arrowdown') || keys.has('s')) y -= 1
    if (keys.has('arrowleft') || keys.has('a')) x -= 1
    if (keys.has('arrowright') || keys.has('d')) x += 1
    return [x, y]
  }

  function heading() {
    return immersive() ? xrHeading : yaw
  }

  function move(delta, inputX, inputY) {
    const actor = avatars.actor(state.player?.id)
    if (!local.ready || !state.player || !state.town) return
    let dx = 0
    let dz = 0
    const strength = Math.min(1, Math.hypot(inputX, inputY))
    if (strength > 0.08 && mode !== 'close' && !designing()) {
      route.length = 0
      if (local.stair) local.stair.auto = false
      const angle = heading()
      dx = (-Math.sin(angle) * inputY + Math.cos(angle) * inputX)
      dz = (-Math.cos(angle) * inputY - Math.sin(angle) * inputX)
      const length = Math.hypot(dx, dz) || 1
      dx = dx / length * strength
      dz = dz / length * strength
    } else if (local.stair?.auto) dx = 1
    else if (route.length) {
      const tx = (route[0].x - local.ox) * TILE - here.x
      const tz = (route[0].z - local.oz) * TILE - here.z
      const remaining = Math.hypot(tx, tz)
      if (remaining < 0.12) route.shift()
      else {
        dx = tx / remaining * Math.min(1, remaining / (SPEED * delta))
        dz = tz / remaining * Math.min(1, remaining / (SPEED * delta))
      }
    }
    const before = [here.x, here.z]
    const steered = !route.length && !local.stair?.auto
    if (dx || dz) {
      // Short strides, so that nobody slips through a thin wall on a slow frame.
      const stride = SPEED * delta * (local.stair ? 0.7 : 1)
      const parts = Math.max(1, Math.ceil(stride / 0.14))
      for (let part = 0; part < parts; part++) step(dx * stride / parts, dz * stride / parts, steered)
    } else step(0, 0, steered)
    // The floor underfoot: the street, or the storey of the building one stands in.
    if (!local.stair) {
      const ground = home ? floorHeight(home.building.design, local.level) : 0
      here.y += (ground - here.y) * (1 - Math.exp(-16 * delta))
      if (Math.abs(ground - here.y) < 0.004) here.y = ground
    }
    local.x = here.x / TILE + local.ox
    local.z = here.z / TILE + local.oz
    const moved = Math.hypot(here.x - before[0], here.z - before[1])
    // Walking into a wall ends a click-to-walk rather than marching on the spot.
    if (route.length && (dx || dz) && moved < SPEED * delta * 0.2) route.length = 0
    if (actor) {
      actor.node.position.x = here.x
      actor.node.position.z = here.z
      actor.height = here.y
      actor.speed = moved / Math.max(delta, 1e-4)
      if (firstPerson()) actor.node.rotation.y = heading() + Math.PI
      else if (mode === 'close') actor.node.rotation.y += (0 - actor.node.rotation.y) * (1 - Math.exp(-10 * delta))
      else if (moved > 0.002) {
        const goal = Math.atan2(here.x - before[0], here.z - before[1])
        const turn = Math.atan2(Math.sin(goal - actor.node.rotation.y), Math.cos(goal - actor.node.rotation.y))
        actor.node.rotation.y += turn * (1 - Math.exp(-14 * delta))
      }
    }
    const key = `${home?.id ?? ''}|${local.level}`
    if (key !== placeKey) {
      placeKey = key
      callbacks.onPlace?.(home ? { id: home.id, kind: home.kind, level: local.level, levels: home.building.levels } : null)
    }
  }

  // Goes up or down a storey without walking the stairs: to where the stairs arrive if there
  // are any, else to the same spot on the other floor.
  function changeLevel(by) {
    if (!home || local.stair) return false
    const level = local.level + by
    const { design } = home.building
    if (level < 0 || level >= design.storeys.length) return false
    const lower = solidsOf(home, Math.min(level, local.level)).stairs.find((stair) => stair.up)
    let spot = null
    if (lower) {
      const end = by > 0 ? lower.head : lower.foot
      spot = [end.at[0] + end.out[0] * (RADIUS + 0.2), end.at[1] + end.out[1] * (RADIUS + 0.2)]
    } else if (onFloor(home, level, here.x, here.z)) spot = [here.x - home.x, here.z - home.z]
    else spot = storeyShape(design, level)?.rooms[0]?.at
    if (!spot) return false
    here.set(home.x + spot[0], floorHeight(design, level), home.z + spot[1])
    local.level = level
    route.length = 0
    snapCamera = true
    return true
  }

  function report(now, force = false) {
    if (!local.ready || (!force && ((!xrPose && designing()) || now - lastReport < 50))) return
    const position = { x: Math.round(local.x * 1000) / 1000, z: Math.round(local.z * 1000) / 1000,
      y: Math.round(here.y * 1000) / 1000, warp: local.warp, pose: xrPose }
    const key = JSON.stringify(position)
    if (key === lastSent && (!xrPose || now - lastReport < 1000)) return
    lastSent = key
    lastReport = now
    callbacks.onMove?.(position)
  }

  // ---- What is shown of each building ------------------------------------------

  function showBuildings(delta) {
    const lookIn = (mode === 'follow' || mode === 'close') && !immersive()
    const draft = designing()
    let ceiling = null
    for (const entry of entries.values()) {
      const gap = Math.hypot(Math.max(entry.x - here.x, 0, here.x - entry.x - entry.w), Math.max(entry.z - here.z, 0, here.z - entry.z - entry.d))
      const mine = entry === home
      entry.close = mine || gap < NEAR || (entry.close && gap < NEAR + 10)
      const view = entry === draft
        ? { close: true, level: Math.min(state.design.level ?? 0, entry.building.levels - 1), cut: true }
        : { close: entry.close, level: mine ? local.level : null, cut: mine && lookIn }
      const key = `${view.close}|${view.level}|${view.cut}`
      if (entry.shown !== key) {
        entry.shown = key
        entry.building.show(view)
      }
      if (view.cut && view.level + 1 < entry.building.levels) {
        ceiling = { y: floorHeight(entry.building.design, view.level + 1) - 0.4, x0: entry.x, z0: entry.z, x1: entry.x + entry.w, z1: entry.z + entry.d }
      }
      if (!entry.close) continue
      // Doors open for whoever walks up to them; a locked house only lets its guests out and in.
      entry.building.swing(delta, (door) => {
        const x = entry.x + door.x
        const z = entry.z + door.z
        const near = (spot) => Math.abs(spot.y - door.y) < 1.4 && Math.hypot(spot.x - x, spot.z - z) < (door.auto ? 2.2 : 1.35)
        if ((door.interior || !entry.locked) && near(here)) return 1
        return others.some(near) ? 1 : 0
      })
    }
    avatars.setCeiling(ceiling)
    for (const entry of entries.values()) {
      if (entry.label) entry.label.visible = !home && !draft
    }
  }

  // ---- Cameras --------------------------------------------------------------

  function placeCamera(delta) {
    if (immersive()) {
      rig.position.copy(here)
      rig.rotation.y = xrYaw
      focus.copy(here)
      return
    }
    rig.position.set(0, 0, 0)
    rig.rotation.y = 0
    const eye = avatars.eyeHeight(state.player?.id)
    const draft = designing()
    if (mode === 'first' && !draft) {
      camera.position.set(here.x, here.y + eye, here.z)
      camera.rotation.set(pitch, yaw, 0, 'YXZ')
      focus.copy(here)
      return
    }
    const indoors = Boolean(home) || Boolean(draft)
    // Designing a building, the camera circles its lot; the map view only makes sense outdoors.
    const mapView = mode === 'overview' && !home && !draft
    const target = draft
      ? point.set(draft.x + draft.w / 2, floorHeight(draft.building.design, Math.min(state.design.level ?? 0, draft.building.levels - 1)), draft.z + draft.d / 2)
      : mapView ? pan : point.set(here.x, here.y + (mode === 'close' ? 1.0 : 1.25), here.z)
    if (snapCamera) focus.copy(target)
    else focus.lerp(target, 1 - Math.exp(-12 * delta))
    snapCamera = false
    let reach = draft ? THREE.MathUtils.clamp(distance, 6, 60) : mode === 'close' ? 3.4 : indoors ? THREE.MathUtils.clamp(distance, 3, 14) : distance
    const tilt = mode === 'close' && !draft ? 0.12 : indoors ? THREE.MathUtils.clamp(pitch, 0.62, 1.45) : pitch
    const turn = mode === 'close' && !draft ? 0 : yaw
    if (mode === 'follow' && !draft) {
      // Pull the camera in front of any building that would hide the resident.
      raycaster.ray.origin.copy(focus)
      raycaster.ray.direction.set(Math.sin(turn) * Math.cos(tilt), Math.sin(tilt), Math.cos(turn) * Math.cos(tilt))
      for (const entry of entries.values()) {
        if (entry === home || entry.box.containsPoint(focus)) continue
        const hit = raycaster.ray.intersectBox(entry.box, forward)
        if (hit) reach = Math.min(reach, Math.max(1.2, focus.distanceTo(hit) - 0.4))
      }
    }
    camera.position.set(
      focus.x + Math.sin(turn) * Math.cos(tilt) * reach,
      focus.y + Math.sin(tilt) * reach,
      focus.z + Math.cos(turn) * Math.cos(tilt) * reach,
    )
    camera.lookAt(focus)
  }

  function setCamera(next) {
    const chosen = MODES.includes(next) ? next : 'follow'
    if (chosen === mode) return
    if (chosen === 'overview') {
      pan.set(here.x, 0, here.z)
      distance = Math.max(distance, 70)
      pitch = Math.max(pitch, 0.95)
    } else if (mode === 'overview') {
      distance = 13
      pitch = 0.5
    }
    if (chosen === 'first') pitch = 0
    else if (mode === 'first') pitch = 0.5
    if (mode === 'first' && document.pointerLockElement === canvas) document.exitPointerLock()
    mode = chosen
    snapCamera = true
    avatars.setLocalHidden(firstPerson())
    callbacks.onCamera?.(mode)
  }

  // ---- Pointer, touch and keyboard ------------------------------------------

  function castFrom(clientX, clientY) {
    const rect = canvas.getBoundingClientRect()
    pointer.set(2 * (clientX - rect.left) / rect.width - 1, 1 - 2 * (clientY - rect.top) / rect.height)
    raycaster.setFromCamera(pointer, camera)
  }

  function groundTile() {
    const map = state.town
    floor.constant = 0
    if (!map || !raycaster.ray.intersectPlane(floor, point)) return null
    const exact = { x: point.x / TILE + map.originX, z: point.z / TILE + map.originZ }
    const tile = { x: Math.round(exact.x), z: Math.round(exact.z) }
    if (tile.x < 0 || tile.z < 0 || tile.x >= map.width || tile.z >= map.height) return null
    return { tile, exact, range: raycaster.ray.origin.distanceTo(point) }
  }

  // Sends whatever the current ray points at to the app: a building, a road or open ground.
  function activate(byHand = false) {
    if (!state.town || !state.player || designing()) return
    if (home && !state.edit) {
      // Indoors, a click on the floor is somewhere to walk to on this storey.
      floor.constant = -floorHeight(home.building.design, local.level)
      if (!raycaster.ray.intersectPlane(floor, point)) return
      const spot = { x: point.x / TILE + local.ox, z: point.z / TILE + local.oz }
      route.length = 0
      if (byHand && onFloor(home, local.level, point.x, point.z)) {
        here.x = point.x
        here.z = point.z
      } else route.push(spot)
      return
    }
    const ground = groundTile()
    let nearest = null
    if (!(state.edit && state.selected)) {
      for (const entry of entries.values()) {
        if (!entry.target) continue
        const hit = raycaster.ray.intersectBox(entry.box, point)
        if (!hit) continue
        const range = raycaster.ray.origin.distanceTo(hit)
        if (!nearest || range < nearest.range) nearest = { range, entry }
      }
    }
    if (nearest && (!ground || nearest.range < ground.range)) {
      callbacks.onTarget?.(nearest.entry.target, {
        x: nearest.entry.arrive.x / TILE + state.town.originX, z: nearest.entry.arrive.z / TILE + state.town.originZ,
      }, byHand)
      return
    }
    if (!ground) return
    const isRoad = state.town.roads.some((road) => road.x === ground.tile.x && road.z === ground.tile.z)
    if (isRoad) callbacks.onTarget?.({ kind: 'road', ...ground.tile }, ground.exact, byHand)
    else callbacks.onTile?.(ground.tile, ground.exact, byHand)
  }

  const touches = new Map()
  let pinch = 0

  canvas.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button > 2) return
    try {
      canvas.setPointerCapture(event.pointerId)
    } catch {
      // A pointer that has already gone cannot be captured; the drag still works over the canvas.
    }
    touches.set(event.pointerId, { x: event.clientX, y: event.clientY, startX: event.clientX, startY: event.clientY, moved: false, button: event.button })
    if (touches.size === 2) {
      const [a, b] = [...touches.values()]
      pinch = Math.hypot(a.x - b.x, a.y - b.y)
    }
  })

  canvas.addEventListener('pointermove', (event) => {
    const touch = touches.get(event.pointerId)
    if (!touch) {
      if (event.pointerType !== 'mouse' || !state.edit || pointerLocked) return
      // Show which tiles a click would use.
      castFrom(event.clientX, event.clientY)
      const ground = groundTile()
      const size = state.placing ?? { w: 1, d: 1 }
      hover.visible = Boolean(ground)
      if (ground) {
        hover.scale.set(size.w * TILE * 0.96, size.d * TILE * 0.96, 1)
        hover.position.set(
          (ground.tile.x + (size.w - 1) / 2 - state.town.originX) * TILE, 0.11,
          (ground.tile.z + (size.d - 1) / 2 - state.town.originZ) * TILE,
        )
      }
      return
    }
    const dx = event.clientX - touch.x
    const dy = event.clientY - touch.y
    touch.x = event.clientX
    touch.y = event.clientY
    if (touches.size === 2) {
      const [a, b] = [...touches.values()]
      const spread = Math.hypot(a.x - b.x, a.y - b.y)
      if (pinch > 0 && spread > 0) distance = THREE.MathUtils.clamp(distance * pinch / spread, 2.5, 260)
      pinch = spread
      touch.moved = true
      return
    }
    if (!touch.moved && Math.hypot(event.clientX - touch.startX, event.clientY - touch.startY) < 7) return
    touch.moved = true
    if (mode === 'close' && !designing()) return
    if (mode === 'overview' && !home && !designing() && touch.button !== 2) {
      const scale = distance * 0.0017
      pan.x += (-Math.cos(yaw) * dx - Math.sin(yaw) * dy) * scale
      pan.z += (Math.sin(yaw) * dx - Math.cos(yaw) * dy) * scale
      return
    }
    yaw -= dx * 0.0052
    pitch = mode === 'first' && !designing()
      ? THREE.MathUtils.clamp(pitch - dy * 0.0042, -1.35, 1.35)
      : THREE.MathUtils.clamp(pitch + dy * 0.0042, 0.06, 1.5)
  })

  function release(event) {
    const touch = touches.get(event.pointerId)
    touches.delete(event.pointerId)
    pinch = 0
    if (!touch || touch.moved || event.type === 'pointercancel' || touches.size) return
    if (mode === 'first' && event.pointerType === 'mouse' && !pointerLocked && !designing()) {
      canvas.requestPointerLock?.()
      return
    }
    castFrom(event.clientX, event.clientY)
    activate()
  }
  canvas.addEventListener('pointerup', release)
  canvas.addEventListener('pointercancel', release)
  canvas.addEventListener('pointerleave', () => { hover.visible = false })
  canvas.addEventListener('contextmenu', (event) => event.preventDefault())
  canvas.addEventListener('wheel', (event) => {
    event.preventDefault()
    if ((mode === 'first' || mode === 'close') && !designing()) return
    distance = THREE.MathUtils.clamp(distance * Math.exp(event.deltaY * 0.0011), 2.5, 260)
  }, { passive: false })

  function onLockChange() {
    pointerLocked = document.pointerLockElement === canvas
  }
  function onMouseLook(event) {
    if (!pointerLocked) return
    yaw -= event.movementX * 0.0024
    pitch = THREE.MathUtils.clamp(pitch - event.movementY * 0.0024, -1.35, 1.35)
  }
  function onLockedClick() {
    if (!pointerLocked) return
    raycaster.setFromCamera(pointer.set(0, 0), camera)
    activate()
  }
  const typing = (event) => event.target instanceof Element && Boolean(event.target.closest('input, textarea, select, [contenteditable]'))
  function onKeyDown(event) {
    if (typing(event) || document.querySelector('dialog[open]') || event.ctrlKey || event.metaKey || event.altKey) return
    const key = event.key.toLowerCase()
    if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd'].includes(key)) {
      keys.add(key)
      event.preventDefault()
    } else if (key === 'q') yaw += 0.2
    else if (key === 'e') yaw -= 0.2
  }
  function onKeyUp(event) {
    keys.delete(event.key.toLowerCase())
  }
  function onBlur() {
    keys.clear()
  }
  document.addEventListener('pointerlockchange', onLockChange)
  document.addEventListener('mousemove', onMouseLook)
  document.addEventListener('click', onLockedClick)
  document.addEventListener('keydown', onKeyDown)
  document.addEventListener('keyup', onKeyUp)
  window.addEventListener('blur', onBlur)

  // ---- VR -------------------------------------------------------------------

  const xrUp = new THREE.Vector3(0, 1, 0)
  const xrOrientation = new THREE.Quaternion()
  const trackedRotation = new THREE.Quaternion()
  const trackedPosition = new THREE.Vector3()
  const trackedDirection = new THREE.Vector3()

  function readTracking(frame, delta) {
    const reference = renderer.xr.getReferenceSpace()
    const viewer = frame && reference && frame.getViewerPose(reference)
    if (!viewer) return null
    xrOrientation.setFromAxisAngle(xrUp, xrYaw)
    const pack = ({ position, orientation }) => {
      trackedPosition.set(position.x, position.y, position.z).applyQuaternion(xrOrientation)
      trackedRotation.set(orientation.x, orientation.y, orientation.z, orientation.w).premultiply(xrOrientation)
      return [...trackedPosition, ...trackedRotation].map((value) => Math.round(value * 1000) / 1000)
    }
    const head = pack(viewer.transform)
    trackedDirection.set(0, 0, -1).applyQuaternion(trackedRotation)
    if (Math.hypot(trackedDirection.x, trackedDirection.z) > 0.08) xrHeading = Math.atan2(-trackedDirection.x, -trackedDirection.z)
    const face = xrHeading + Math.PI
    const turn = Math.atan2(Math.sin(face - (xrBodyYaw ?? face)), Math.cos(face - (xrBodyYaw ?? face)))
    xrBodyYaw = face - THREE.MathUtils.clamp(turn * Math.exp(-5 * delta), -1.05, 1.05)
    const pose = { yaw: Math.atan2(Math.sin(xrBodyYaw), Math.cos(xrBodyYaw)), head, left: null, right: null }
    for (const source of frame.session.inputSources) {
      const side = source.handedness
      if (side !== 'left' && side !== 'right') continue
      const wrist = source.hand?.get('wrist')
      const handPose = wrist ? frame.getJointPose?.(wrist, reference)
        : source.gripSpace && frame.getPose(source.gripSpace, reference)
      if (handPose) pose[side] = pack(handPose.transform)
    }
    return pose
  }

  const hands = [0, 1].map((index) => {
    const hand = renderer.xr.getController(index)
    const ray = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(0, 0, -6)]),
      new THREE.LineBasicMaterial({ color: '#fff3c4', transparent: true, opacity: 0.7 }),
    )
    hand.add(ray)
    hand.visible = false
    hand.addEventListener('connected', () => { hand.visible = true })
    hand.addEventListener('disconnected', () => { hand.visible = false })
    // The trigger points at a place to go; the grips go up and down a storey.
    hand.addEventListener('selectstart', () => {
      hand.updateMatrixWorld(true)
      raycaster.ray.origin.setFromMatrixPosition(hand.matrixWorld)
      raycaster.ray.direction.set(0, 0, -1).transformDirection(hand.matrixWorld)
      activate(true)
    })
    hand.addEventListener('squeezestart', () => changeLevel(index === 0 ? -1 : 1))
    rig.add(hand)
    return hand
  })

  function readHands() {
    const session = renderer.xr.getSession()
    let x = 0
    let y = 0
    if (!session) return [x, y]
    for (const source of session.inputSources) {
      const axes = source.gamepad?.axes
      if (!axes || axes.length < 2) continue
      const [sx, sy] = axes.length >= 4 ? [axes[2], axes[3]] : [axes[0], axes[1]]
      if (source.handedness === 'right') {
        // The right stick turns in steps, which is easier on the stomach than a smooth spin.
        if (Math.abs(sx) > 0.7 && !xrTurned) {
          xrYaw -= Math.sign(sx) * Math.PI / 6
          xrTurned = true
        } else if (Math.abs(sx) < 0.3) xrTurned = false
      } else {
        x += sx
        y -= sy
      }
    }
    return [Math.abs(x) > 0.15 ? x : 0, Math.abs(y) > 0.15 ? y : 0]
  }

  renderer.xr.addEventListener('sessionstart', () => {
    xrYaw = yaw
    xrHeading = yaw
    xrBodyYaw = null
    xrTurned = false
    avatars.setLocalHidden(true)
    callbacks.onVR?.(true)
  })
  renderer.xr.addEventListener('sessionend', () => {
    xrPose = null
    report(performance.now(), true)
    avatars.setLocalHidden(firstPerson())
    snapCamera = true
    camera.fov = 55
    resize()
    callbacks.onVR?.(false)
  })

  // ---- Frame loop -----------------------------------------------------------

  function resize() {
    width = Math.max(1, container.clientWidth)
    height = Math.max(1, container.clientHeight)
    if (immersive()) return
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
  const observer = new ResizeObserver(resize)
  observer.observe(container)

  function frame(time, xrFrame) {
    const delta = Math.min(0.08, Math.max(0.001, (time - lastTime) / 1000))
    lastTime = time
    elapsed += delta
    const [handX, handY] = immersive() ? readHands() : [0, 0]
    const previousPose = xrPose
    xrPose = immersive() ? readTracking(xrFrame, delta) : null
    const [inputX, inputY] = readInput()
    if (mode === 'overview' && state.edit && !home && !immersive()) {
      // While editing the town from above, the keys slide the map instead of the resident.
      const scale = distance * 0.9 * delta
      pan.x += (Math.cos(yaw) * inputX - Math.sin(yaw) * inputY) * scale
      pan.z += (-Math.sin(yaw) * inputX - Math.cos(yaw) * inputY) * scale
      move(delta, 0, 0)
    } else move(delta, inputX + handX, inputY + handY)
    report(time, Boolean(previousPose) !== Boolean(xrPose))
    showBuildings(delta)
    placeCamera(delta)
    if (!immersive()) {
      const fov = mode === 'first' && !designing() ? 72 : 55
      if (camera.fov !== fov) {
        camera.fov = fov
        camera.updateProjectionMatrix()
      }
    }
    environment.update(delta, focus)
    camera.updateMatrixWorld(true)
    const view = xrPose ? point.set(xrPose.head[0], xrPose.head[1], xrPose.head[2]).add(here)
      : immersive() ? camera.getWorldPosition(point) : camera.position
    avatars.update(delta, elapsed, { position: view })
    for (const entry of entries.values()) {
      const label = entry.label
      if (!label?.visible) continue
      const size = THREE.MathUtils.clamp(view.distanceTo(label.position) * 0.028, 0.5, 9)
      label.scale.set(size * label.userData.aspect, size, 1)
    }
    renderer.render(world, camera)
  }

  function setQuality(next) {
    quality = ['low', 'medium', 'high'].includes(next) ? next : 'medium'
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality === 'high' ? 2 : quality === 'medium' ? 1.5 : 1.25))
    setDetail(quality === 'high' ? 2 : quality === 'medium' ? 1 : 0)
    environment.setQuality(quality)
    resize()
  }

  setQuality(coarse ? 'low' : 'high')
  resize()
  renderer.setAnimationLoop(frame)

  // Puts the player down at a spot given in metres, and works out which floor that is.
  function arriveAt(x, z) {
    here.set(x, 0, z)
    local.x = x / TILE + local.ox
    local.z = z / TILE + local.oz
    local.stair = null
    route.length = 0
    snapCamera = true
    settle()
  }

  return {
    update,
    updatePresence,
    setCamera,
    setQuality,
    camera: () => mode,
    quality: () => quality,
    setPreview: (value) => avatars.setPreview(value),
    setVoiceLevels: (levels) => avatars.setVoiceLevels(levels),
    pressAvatar: (id) => avatars.press(id),
    setJoystick(x, y) {
      stick.x = x
      stick.y = y
    },
    // Where the player stands: town tiles, metres above the street, and the building and storey.
    position: () => ({ x: local.x, z: local.z, y: here.y, warp: local.warp, pose: xrPose, place: home?.id ?? null, level: local.level }),
    teleport(x, z) {
      if (state.town) arriveAt((x - local.ox) * TILE, (z - local.oz) * TILE)
    },
    walkTo(x, z) {
      route.length = 0
      route.push({ x, z })
    },
    // Walks up to the front door of a building and, where this resident may, on through it.
    walkInto(id) {
      const entry = entries.get(id)
      if (!entry) return false
      const tile = (spot) => ({ x: spot.x / TILE + local.ox, z: spot.z / TILE + local.oz })
      route.length = 0
      route.push(tile(entry.arrive))
      if (entry.arrive.inside && !entry.locked) route.push(tile(entry.arrive.inside))
      return true
    },
    // Goes to a building: to its front door, or (with `inside`) just through it.
    visit(id, { inside = false } = {}) {
      const entry = entries.get(id)
      if (!entry) return false
      const spot = inside && entry.arrive.inside && !entry.locked ? entry.arrive.inside : entry.arrive
      arriveAt(spot.x, spot.z)
      return true
    },
    changeLevel,
    loadVRM: (url, options = {}) => avatars.loadLocal(url, { ...options, serverURL: state.player?.vrmUrl }),
    clearVRM: () => avatars.clearLocal(),
    vr: {
      supported: async () => Boolean(await navigator.xr?.isSessionSupported?.('immersive-vr').catch(() => false)),
      active: immersive,
      async enter() {
        const session = await navigator.xr.requestSession('immersive-vr', { optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking'] })
        renderer.xr.setReferenceSpaceType('local-floor')
        await renderer.xr.setSession(session)
      },
      exit: () => renderer.xr.getSession()?.end(),
    },
    destroy() {
      renderer.setAnimationLoop(null)
      observer.disconnect()
      document.removeEventListener('pointerlockchange', onLockChange)
      document.removeEventListener('mousemove', onMouseLook)
      document.removeEventListener('click', onLockedClick)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('blur', onBlur)
      avatars.dispose()
      for (const entry of entries.values()) entry.building.dispose()
      disposeGroup(markers)
      environment.dispose()
      renderer.dispose()
      canvas.remove()
    },
  }
}
