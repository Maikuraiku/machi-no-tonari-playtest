// The 3D town: puts the environment, buildings and residents together, moves the player
// through streets and rooms alike, and drives the third-person, first-person, overview and
// VR cameras. Buildings are real: their walls stop a walker, their doors open, and stairs
// lead to the storeys above.
import * as THREE from 'three'
import { createAvatars } from './world/avatars.js?v=8'
import { SHOP_HOUSES, createBuilding } from './world/buildings.js'
import { BODY as RADIUS, colliders, floorHeight, frontDoors, storeyShape, yardHeight } from './world/design.js'
import { createEnvironment } from './world/environment.js?v=8'
import { withRegion } from './world/region-layer.js?v=7'
import { FIRST_PERSON_LAYER, THIRD_PERSON_LAYER } from './world/first-person.js?v=1'
import { updateGlass } from './world/glass.js'
import { TILE, disposeGroup, setAnisotropy, setDetail, textTexture } from './world/kit.js'
import { createLiftControl } from './world/lift-control.js'
import { createTransit, planTrial } from './world/monorail.js'
import { createSound } from './world/sound.js'
import { createVRMenu } from './world/vr-menu.js?v=1'

const SPEED = 4.6
const MODES = ['follow', 'first', 'overview', 'close']
// Whether one's own body is shown in VR, remembered between visits.
const BODY_KEY = 'machi-no-tonari:vr-body'
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
  renderer.toneMappingExposure = 0.62
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.xr.enabled = true
  setAnisotropy(Math.min(8, renderer.capabilities.getMaxAnisotropy()))
  const canvas = renderer.domElement
  canvas.style.cssText = 'display:block;width:100%;height:100%;touch-action:none;outline:none'
  canvas.setAttribute('aria-label', 'まちのとなりの3Dマップ')
  container.append(canvas)

  const world = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 5200)
  // Seen from outside, an avatar keeps the parts it hides from its own wearer's eyes.
  camera.layers.enable(THIRD_PERSON_LAYER)
  const rig = new THREE.Group()
  rig.add(camera)
  world.add(rig)
  // (In a town made from the region map, the region's ground, buildings and monorail.)
  const sound = createSound()
  const environment = withRegion(createEnvironment(world, renderer), world, { sound })
  let buildingDistance = 400
  const town = new THREE.Group()
  const markers = new THREE.Group()
  world.add(town, markers)
  const avatars = createAvatars(world, { onAvatarState: callbacks.onAvatarState, onAvatarLoad: callbacks.onAvatarLoad })
  // The monorail: its beam, its train and its stations, where the town has a line (or one is
  // being tried out on this screen).
  const transit = createTransit({ sound })
  world.add(transit.group)
  let trialTold = false
  let avatarLoadProgress
  let loadHud
  const hudOffset = new THREE.Vector3()

  function updateAvatarLoadHud(view) {
    if (!immersive() || !xrPose || avatarLoadProgress === undefined) {
      if (loadHud) loadHud.group.visible = false
      return
    }
    if (!loadHud) {
      const group = new THREE.Group()
      const geometry = new THREE.PlaneGeometry(1, 1)
      const plane = (color, order) => {
        const material = new THREE.MeshBasicMaterial({ color, depthTest: false, depthWrite: false, toneMapped: false })
        const mesh = new THREE.Mesh(geometry, material)
        mesh.renderOrder = order
        group.add(mesh)
        return mesh
      }
      plane('#294450', 1000).scale.set(0.27, 0.013, 1)
      const fill = plane('#a8dcc7', 1001)
      const label = makeSign('アバターを読み込み中')
      label.material.depthTest = false
      label.renderOrder = 1002
      label.position.y = 0.027
      label.scale.set(label.userData.aspect * 0.035, 0.035, 1)
      group.add(label)
      world.add(group)
      loadHud = { group, fill }
    }
    const { group, fill } = loadHud
    const indeterminate = avatarLoadProgress === null
    const width = indeterminate ? 0.28 : avatarLoadProgress
    const travel = indeterminate ? (0.5 + 0.5 * Math.sin(elapsed * 5)) * (1 - width) : 0
    group.visible = true
    group.quaternion.copy(viewRotation)
    group.position.copy(view).add(hudOffset.set(0, -0.22, -1.1).applyQuaternion(viewRotation))
    fill.visible = width > 0
    fill.scale.set(0.27 * width, 0.009, 1)
    fill.position.set(0.27 * (-0.5 + width / 2 + travel), 0, 0.001)
  }
  const hover = flatMarker('#fff6c2', 0.5)
  const selected = flatMarker('#ffe98a', 0.66)
  markers.add(hover, selected)
  let grid = null
  let gridKey = ''
  // What the design tools draw over the building being designed: the grid of its lot, the
  // pointer, and the outlines of what is selected or about to be put down.
  const sketch = new THREE.Group()
  // (The grid lies on the floor and is hidden by what stands on it; the rest shows through walls.)
  const sketchGround = new THREE.LineSegments(new THREE.BufferGeometry(),
    new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.6, toneMapped: false, fog: false }))
  const sketchMarks = new THREE.LineSegments(new THREE.BufferGeometry(),
    new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.95, depthTest: false, toneMapped: false, fog: false }))
  sketchMarks.renderOrder = 6
  for (const lines of [sketchGround, sketchMarks]) {
    lines.frustumCulled = false
    sketch.add(lines)
  }
  sketch.visible = false
  world.add(sketch)
  let sketchData = null
  // The camera as it was before a building was designed, to go back to afterwards.
  let viewBefore = null
  // How much of each edge of the screen is covered by panels: the view is centred in the rest.
  const insets = { left: 0, right: 0, top: 0, bottom: 0 }

  let state = {}
  let pendingPlayers = null
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
  let xrReference = null
  let previousHead = null
  const xrOrigin = new THREE.Vector3()
  const xrStep = new THREE.Vector3()
  // How tall the wearer of the headset stands, as far as the headset has seen.
  let xrStanding = null
  // What the page puts in the VR menu (see vr.setMenu), and whether one's own body is shown.
  let vrMenuContent = null
  let bodyShown = true
  try {
    bodyShown = localStorage.getItem(BODY_KEY) !== 'hidden'
  } catch {
    // Without storage the body is simply shown.
  }
  // The building the player stands in (null in the street), and what was last told to the app.
  let home = null
  let placeKey = ''
  let mirrored = []
  let liftKey = ''
  const entries = new Map()
  const others = []
  const focus = new THREE.Vector3()
  const pan = new THREE.Vector3()
  const here = new THREE.Vector3()
  // Where the player is: x and z in town tiles, y in metres above the street, and the storey.
  // `lift`: the lift this resident is riding, if any.
  const local = { x: 0, z: 0, level: 0, stair: null, lift: null, ride: null, warp: null, session: null, ox: 0, oz: 0, ready: false }
  const keys = new Set()
  const stick = { x: 0, y: 0 }
  const raycaster = new THREE.Raycaster()
  const pointer = new THREE.Vector2()
  const floor = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
  const point = new THREE.Vector3()
  const forward = new THREE.Vector3()
  const avatarFrustum = new THREE.Frustum()
  const viewProjection = new THREE.Matrix4()
  const avatarDirection = new THREE.Vector3()
  const viewRotation = new THREE.Quaternion()
  const avatarView = { position: null, frustum: null, direction: null }

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
      // (Only a town laid out on a region still has a shop and a cafe of its own.)
      ...(map.shop ? [{ ...SHOP_HOUSES.shop, ...map.shop, target: { id: 'shop', kind: 'shop', ...map.shop }, label: '服屋' }] : []),
      ...(map.cafe ? [{ ...SHOP_HOUSES.cafe, ...map.cafe, target: { id: 'cafe', kind: 'cafe', ...map.cafe }, label: 'カフェ' }] : []),
      ...(state.houses ?? []).map((house) => ({ ...house, target: { id: house.id, kind: 'house', x: house.x, z: house.z } })),
    ]
    const taken = new Set()
    const tilesOf = (lot) => {
      const tiles = []
      for (let z = lot.z; z < lot.z + lot.d; z++) for (let x = lot.x; x < lot.x + lot.w; x++) tiles.push(`${x},${z}`)
      return tiles
    }
    for (const lot of lots) tilesOf(lot).forEach((tile) => taken.add(tile))
    // A monorail tried out on this screen only: a station at each end of the longest row of
    // land with nothing built on it, and the line between them. Nothing of it is kept.
    const trial = state.transit ? planTrial(map, taken) : null
    if (state.transit && !trial && !trialTold) callbacks.onNotice?.('モノレールを試せる場所がありません。建物のない土地が、横に9マス続く列が必要です。')
    trialTold = Boolean(state.transit)
    if (trial) {
      lots.push(...trial.lots)
      trial.tiles.forEach((tile) => taken.add(tile))
    }
    transit.setLine(trial?.spec ?? null)
    // (A town starts with its plaza, its shop and its cafe only: every other building is one
    // that a resident has put up.)
    environment.drawTown(map, taken, trial?.corridor ?? [], lots)

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
        entry = { ...entry, id: lot.id, building, signature, solids: new Map(), shown: '', lifts: null }
        if (local.lift?.entry.id === lot.id) local.lift = null
        entries.set(lot.id, entry)
        // The floor may have changed under the resident's feet.
        if (home?.id === lot.id || local.stair?.entry.id === lot.id) resettle = true
      }
      const x = worldX(lot.x - 0.5)
      const z = worldZ(lot.z - 0.5)
      // A building stands at the height of its lot, `y0` (0 in an ordinary town, the ground it was
      // built on in a region town): all of its own heights are measured from there.
      Object.assign(entry, { x, z, w: lot.w * TILE, d: lot.d * TILE, target: lot.target, kind: lot.target?.kind ?? 'scenery', myKeys: lot.myKeys ?? null, y0: environment.levelOf(lot) })
      entry.building.group.position.set(x, entry.y0, z)
      const { bounds } = entry.building
      entry.box = new THREE.Box3(new THREE.Vector3(x + bounds.x0 - 0.15, entry.y0, z + bounds.z0 - 0.15), new THREE.Vector3(x + bounds.x1 + 0.15, entry.y0 + entry.building.height, z + bounds.z1 + 0.15))
      // (The sliding windows of a living room are doors too, but visitors come to the front door.)
      const doorways = frontDoors(entry.building.design)
      const front = doorways.find((door) => door.opening.canopy) ?? doorways[0]
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
      entry.label?.position.set((entry.box.min.x + entry.box.max.x) / 2, entry.y0 + entry.building.height + 1.4, (entry.box.min.z + entry.box.max.z) / 2)
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
    // (The plaza is an open paved square now: nothing stands in the middle of it.)
    fountain = null
    // The buildings, as the boxes that show in each other's windows.
    mirrored = [...entries.values()].map((entry) => ({ min: entry.box.min, max: entry.box.max, tint: entry.building.tint }))

    const key = `${map.width},${map.height},${map.originX},${map.originZ}`
    if (key !== gridKey && !map.region) {
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
    if (!entry.solids.has(level)) entry.solids.set(level, colliders(entry.building.design, level))
    return entry.solids.get(level)
  }

  // ---- Doors and locks --------------------------------------------------------
  //
  // Doors are opened and closed by hand. A door between a home and the world outside has a lock;
  // a locked door opens only for those who hold its key, one left unlocked opens for anybody.
  // The town keeps which doors stand open and which locks are unlocked, so that everyone sees
  // the same; scenery and shops, which the town does not keep, only have doors on this screen.

  const kept = (entry) => (entry.kind === 'house' ? state.doors?.[entry.id] : null)
  // What this screen has just done to a door or a lock, until the town says the same.
  const lately = new Map()
  const recent = (name) => {
    const change = lately.get(name)
    if (change && change.until > performance.now()) return change.value
    lately.delete(name)
    return undefined
  }
  function doorOpen(entry, door) {
    const local = recent(`${entry.id}|door|${door.key}`)
    if (local !== undefined) return local
    if (entry.kind !== 'house') return Boolean(entry.ajar?.has(door.key))
    return Boolean(kept(entry)?.open.includes(door.key))
  }
  function locked(entry, lock) {
    if (!lock || entry.kind !== 'house') return false
    const local = recent(`${entry.id}|lock|${lock}`)
    return local !== undefined ? local : !kept(entry)?.unlocked.includes(lock)
  }
  const holds = (entry, lock) => !lock || entry.kind !== 'house' || entry.myKeys === '*' || Boolean(entry.myKeys?.includes(lock))
  // Whether a walker gets through a doorway: a door has to stand open; an automatic door opens
  // for anyone unless it is locked against them.
  // (The doors of a platform open with those of the train that stands at it, for everybody.)
  const passable = (entry, door) => (door.kind === 'door-platform' ? transit.platformDoors(entry.id) > 0.85
    : door.auto ? !locked(entry, door.lock) || holds(entry, door.lock) : doorOpen(entry, door))
  const levelIn = (entry) => (entry === home ? local.level : 0)

  // The door within reach of the resident, if any: the nearest one on their storey.
  let reach = null
  let reachKey = ''
  function findDoor() {
    let best = null
    for (const entry of entries.values()) {
      if (here.x < entry.x - 1.6 || here.x > entry.x + entry.w + 1.6 || here.z < entry.z - 1.6 || here.z > entry.z + entry.d + 1.6) continue
      if (local.level > 0 && entry !== home) continue
      for (const door of solidsOf(entry, levelIn(entry)).doors) {
        if (door.auto || door.kind === 'door-platform') continue
        const gap = Math.hypot(here.x - entry.x - door.x, here.z - entry.z - door.z)
        if (gap < 1.45 && (!best || gap < best.gap)) best = { entry, door, gap }
      }
    }
    reach = best
    const told = best ? {
      open: doorOpen(best.entry, best.door), lock: best.door.lock, locked: locked(best.entry, best.door.lock), key: holds(best.entry, best.door.lock),
    } : null
    const key = told ? `${best.entry.id}|${best.door.key}|${told.open}|${told.lock}|${told.locked}|${told.key}` : ''
    if (key !== reachKey) {
      reachKey = key
      callbacks.onDoor?.(told)
    }
  }

  // Opens or closes a door: the one within reach, or one that was pointed at.
  function useDoor(target = reach) {
    if (!target) return false
    const { entry, door } = target
    const open = doorOpen(entry, door)
    // From the inside a locked door opens without a key, as a door with a thumb turn does.
    const room = entry === home ? storeyShape(entry.building.design, local.level)?.roomAt(here.x - entry.x, here.z - entry.z) : null
    const within = Boolean(room) && !room.open && (door.lock === 'main' || door.lock === `${local.level}:${room.unit}`)
    if (!open && locked(entry, door.lock) && !holds(entry, door.lock) && !within) {
      callbacks.onNotice?.('鍵がかかっています。')
      return false
    }
    if (entry.kind === 'house') {
      lately.set(`${entry.id}|door|${door.key}`, { value: !open, until: performance.now() + 4000 })
      callbacks.onDoorChange?.({ houseId: entry.id, door: door.key, open: !open, ...(door.lock ? { lock: door.lock } : {}), ...(within ? { inside: true } : {}) })
    } else {
      entry.ajar ??= new Set()
      if (open) entry.ajar.delete(door.key)
      else entry.ajar.add(door.key)
    }
    return true
  }

  // Locks or unlocks the door within reach, for someone who holds its key.
  function useLock() {
    if (!reach?.door.lock || reach.entry.kind !== 'house') return false
    const { entry, door } = reach
    if (!holds(entry, door.lock)) {
      callbacks.onNotice?.('この扉の鍵を持っていません。')
      return false
    }
    const now = locked(entry, door.lock)
    lately.set(`${entry.id}|lock|${door.lock}`, { value: !now, until: performance.now() + 4000 })
    callbacks.onLockChange?.({ houseId: entry.id, lock: door.lock, locked: !now })
    return true
  }

  // The door a ray points at, within arm's reach of the resident.
  function doorAlong(ray) {
    let best = null
    for (const entry of entries.values()) {
      if (here.x < entry.x - 3 || here.x > entry.x + entry.w + 3 || here.z < entry.z - 3 || here.z > entry.z + entry.d + 3) continue
      if (local.level > 0 && entry !== home) continue
      const level = levelIn(entry)
      const base = entry.y0 + floorHeight(entry.building.design, level)
      for (const door of solidsOf(entry, level).doors) {
        if (door.auto || door.kind === 'door-platform' || Math.hypot(here.x - entry.x - door.x, here.z - entry.z - door.z) > 2.6) continue
        const miss = ray.distanceToPoint(point.set(entry.x + door.x, base + 1.0, entry.z + door.z))
        if (miss < 0.5 && (!best || miss < best.miss)) best = { entry, door, miss }
      }
    }
    return best
  }

  const onFloor = (entry, level, x, z) => Boolean(storeyShape(entry.building.design, level)?.floored(x - entry.x, z - entry.z))

  // The height of whatever is underfoot: the floor of the building one is in (lower in the
  // entrance of a house, rising along steps), the porch and the steps of a lot, or the street.
  function groundAt() {
    if (local.ride) return local.ride.source.spotOf(local.ride.passenger).y
    if (local.lift) return local.lift.entry.y0 + local.lift.lift.control.y
    if (home) {
      const { design } = home.building
      return home.y0 + floorHeight(design, local.level) + (storeyShape(design, local.level)?.heightAt(here.x - home.x, here.z - home.z) ?? 0)
    }
    for (const entry of entries.values()) {
      if (here.x >= entry.x && here.x <= entry.x + entry.w && here.z >= entry.z && here.z <= entry.z + entry.d) {
        // (In a region town, the open ground of a lot is the region's ground, levelled to its height.)
        const yard = yardHeight(entry.building.design, here.x - entry.x, here.z - entry.z)
        if (yard > 0 || !environment.region) return entry.y0 + yard
      }
    }
    return environment.heightAt(here.x, here.z, here.y)
  }

  // ---- Lifts ----------------------------------------------------------------

  // Each lift is run by a control of its own (see lift-control.js), which knows where its car
  // is, which storeys were asked for and how far its doors stand open.
  function liftsOf(entry) {
    entry.lifts ??= entry.building.lifts.map((lift) => ({
      ...lift, control: createLiftControl(lift.stops.map(({ level, y }) => ({ level, y }))), callers: new Set(),
    }))
    return entry.lifts
  }

  // What a lift lets its passengers hear: a chime on arriving (once on the way up, twice on the
  // way down, as in Japan) and, in the car, a voice that says where it is and what the doors do.
  function liftSounds(entry, lift, event, riding) {
    const gap = Math.hypot(here.x - entry.x - lift.x, here.z - entry.z - lift.z)
    const level = Math.abs(here.y - entry.y0 - lift.control.y) < 1.6
    const volume = riding ? 1 : entry === home && level ? THREE.MathUtils.clamp(1 - gap / 9, 0, 0.8) : 0
    if (event.type === 'arrive') {
      sound.play(event.heading < 0 ? 'lift-down' : 'lift-up', volume)
      if (riding) sound.say(`${event.level + 1}階です。`)
    } else if (event.type === 'closing' && riding) sound.say('ドアが閉まります。')
    else if (event.type === 'depart' && riding) sound.say(event.heading > 0 ? '上へまいります。' : '下へまいります。')
  }

  // The button of a lift that a ray points at, if it is within the resident's reach.
  function liftButtonAlong(ray) {
    let best = null
    for (const entry of entries.values()) {
      if (!entry.building.lifts.length || !entry.close) continue
      if (here.x < entry.x - 2 || here.x > entry.x + entry.w + 2 || here.z < entry.z - 2 || here.z > entry.z + entry.d + 2) continue
      forward.set(ray.origin.x - entry.x, ray.origin.y - entry.y0, ray.origin.z - entry.z)
      for (const lift of liftsOf(entry)) {
        const hit = lift.pick(forward, ray.direction, 60)
        if (!hit || (best && hit.distance >= best.distance)) continue
        point.copy(ray.direction).multiplyScalar(hit.distance).add(ray.origin)
        // (The buttons in the car are for those who stand in it.)
        const near = Math.hypot(point.x - here.x, point.z - here.z) < 1.9 && Math.abs(point.y - here.y - 1.1) < 1.4
        if (near && (hit.type === 'hall' || local.lift?.lift === lift)) best = { ...hit, entry, lift }
      }
    }
    return best
  }

  function pressLift({ lift, type, level }) {
    if (type === 'open') lift.control.open()
    else if (type === 'close') lift.control.close()
    else lift.control.press(level)
    sound.play('button', 0.7)
  }

  // Whether a spot (in the building's own metres) is inside the car of a lift.
  function inCar(lift, x, z) {
    const turn = lift.r * Math.PI / 180
    const lx = (x - lift.x) * Math.cos(turn) - (z - lift.z) * Math.sin(turn)
    const lz = (x - lift.x) * Math.sin(turn) + (z - lift.z) * Math.cos(turn)
    return Math.abs(lx) < lift.w / 2 + 0.1 && Math.abs(lz) < lift.d / 2 + 0.12
  }

  function runLifts(entry, delta) {
    const mine = entry === home
    const lx = here.x - entry.x
    const lz = here.z - entry.z
    // Standing before the doors of a landing, as someone does who waits for the car.
    const before = (spot, x, z) => Math.hypot(x - spot.at[0] - spot.out[0] * 0.55, z - spot.at[1] - spot.out[1] * 0.55) < 0.8
    for (const lift of liftsOf(entry)) {
      const { control } = lift
      const riding = local.lift?.lift === lift
      const landing = lift.stops.find((spot) => spot.level === local.level)
      // Whoever walks up to the doors calls the car, as if they had pressed the button.
      const callers = new Set()
      if (mine && !riding && landing && before(landing, lx, lz)) callers.add(`me|${local.level}`)
      let ridden = null
      for (const [index, other] of others.entries()) {
        const ox = other.x - entry.x
        const oz = other.z - entry.z
        if (ox < -1 || oz < -1 || ox > entry.w + 1 || oz > entry.d + 1) continue
        if (inCar(lift, ox, oz)) ridden = other
        else {
          const spot = lift.stops.find((stop) => Math.abs(stop.y + entry.y0 - other.y) < 0.6 && before(stop, ox, oz))
          if (spot) callers.add(`${index}|${spot.level}`)
        }
      }
      for (const caller of callers) {
        if (lift.callers.has(caller)) continue
        const level = Number(caller.split('|')[1])
        // (A car that stands here with its doors shut opens them; one that is here and open is left be.)
        if (level !== control.at || control.phase === 'idle') control.press(level)
      }
      lift.callers = callers
      // Someone who rides this lift on another screen: the car keeps under their feet.
      if (ridden && !riding) control.shadow(ridden.y - entry.y0, delta)
      // In the doorway, between the landing and the car, the doors wait.
      let blocked = false
      if (mine && landing && control.at === local.level) {
        const depth = (lx - landing.at[0]) * landing.out[0] + (lz - landing.at[1]) * landing.out[1]
        const aside = (lx - landing.at[0]) * landing.out[1] - (lz - landing.at[1]) * landing.out[0]
        blocked = Math.abs(depth) < 0.45 && Math.abs(aside) < landing.half + 0.05
      }
      for (const event of control.update(delta, { blocked })) {
        liftSounds(entry, lift, event, riding)
        if (event.type === 'arrive' && riding) {
          local.level = event.level
          snapCamera = false
        }
      }
      // On the way, a passenger is on whichever storey the car is passing.
      if (riding && control.at === null) local.level = control.shown()
      lift.setCar(control.y)
      lift.setCarDoor(control.door)
      for (const spot of lift.stops) lift.setDoor(spot.level, spot.level === control.at ? control.door : 0)
      lift.show({
        shown: control.shown(), heading: control.phase === 'moving' || control.phase === 'shadow' || control.calls().length ? control.heading : 0,
        calls: control.calls(), at: control.at, open: control.phase === 'open' || control.phase === 'opening',
      })
    }
    if (!mine) return
    // Stepping into a car makes one its passenger; stepping out again ends the ride.
    const car = liftsOf(entry).find((lift) => lift.control.at === local.level && lift.control.door > 0.5 && inCar(lift, lx, lz))
    const was = local.lift?.lift ?? null
    if (!local.lift && car) local.lift = { entry, lift: car }
    else if (local.lift && local.lift.lift.control.at !== null && !inCar(local.lift.lift, lx, lz)) local.lift = null
    const now = local.lift?.lift ?? null
    const key = now ? `${entry.id}|${now.control.at}|${now.control.calls().join()}` : ''
    if (now !== was || key !== liftKey) {
      liftKey = key
      callbacks.onLift?.(now ? { levels: now.stops.map((spot) => spot.level), level: now.control.at, target: now.control.target, calls: now.control.calls() } : null)
    }
  }

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
    local.lift = null
    local.ride = null
    local.level = 0
    for (const entry of entries.values()) {
      if (here.x < entry.x || here.x > entry.x + entry.w || here.z < entry.z || here.z > entry.z + entry.d) continue
      const { design } = entry.building
      let level = 0
      for (let index = 0; index < design.storeys.length; index++) {
        if (entry.y0 + floorHeight(design, index) <= here.y + 0.6) level = index
      }
      if (onFloor(entry, level, here.x, here.z)) {
        home = entry
        local.level = level
      }
      here.y = groundAt()
      return
    }
    here.y = environment.heightAt(here.x, here.z)
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

  function applyPresence(players) {
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
    if (grid) grid.visible = editing && !state.town?.region
    selected.visible = editing && Boolean(state.selected)
    if (selected.visible) {
      selected.scale.set(TILE * 0.94, TILE * 0.94, 1)
      selected.position.set((state.selected.x - map.originX) * TILE, environment.heightAt((state.selected.x - map.originX) * TILE, (state.selected.z - map.originZ) * TILE) + 0.12, (state.selected.z - map.originZ) * TILE)
    }
    if (!editing && !state.clearingExisting) hover.visible = false
  }

  function update(next) {
    const previous = state
    state = next ?? {}
    pendingPlayers = null
    const houses = state.houses ?? []
    const oldHouses = previous.houses ?? []
    if (state.session !== previous.session || state.town !== previous.town || state.design !== previous.design
      || Boolean(state.transit) !== Boolean(previous.transit)
      || houses.length !== oldHouses.length || houses.some((house, index) => {
        const prior = oldHouses[index]
        return house.id !== prior.id || house.label !== prior.label || house.canEnter !== prior.canEnter
          || house.rev !== prior.rev || house.design !== prior.design
      })) drawTown()
    // Designing a building, the camera stands back far enough to see all of its lot; afterwards
    // it goes back to where it was.
    if ((state.design?.houseId ?? null) !== (previous.design?.houseId ?? null)) {
      const draft = designing()
      if (draft) {
        viewBefore ??= { distance, pitch, yaw }
        distance = Math.max(draft.w, draft.d) * 1.45 + 10
        pitch = 0.92
      } else if (viewBefore) {
        ({ distance, pitch, yaw } = viewBefore)
        viewBefore = null
        // (In a headset the resident has walked about the lot while designing.)
        resettle = true
      }
      snapCamera = true
    }
    placeLocal()
    if (mode === 'overview' && !home && !designing() && state.town?.region
      && previous.town?.region?.seed !== state.town.region.seed) fitRegionOverview()
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
    const base = entry.y0 + floorHeight(entry.building.design, stair.from)
    const leave = (end, level) => {
      here.x = entry.x + end.at[0] + end.out[0] * (RADIUS + 0.16)
      here.z = entry.z + end.at[1] + end.out[1] * (RADIUS + 0.16)
      here.y = entry.y0 + floorHeight(entry.building.design, level)
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
  // A step taken aboard a train: about the car, or out of an open door onto the platform
  // that is there.
  function rideStep(dx, dz) {
    const { source, passenger } = local.ride
    const out = source.walk(passenger, dx, dz)
    if (out === true) {
      const spot = source.spotOf(passenger)
      here.x = spot.x
      here.z = spot.z
      return
    }
    if (source === environment.regionTransit) {
      local.ride = null
      here.set(out.x, out.y, out.z)
      return
    }
    for (const entry of entries.values()) {
      if (out.x < entry.x || out.x > entry.x + entry.w || out.z < entry.z || out.z > entry.z + entry.d) continue
      for (let level = 0; level < entry.building.levels; level++) {
        if (Math.abs(entry.y0 + floorHeight(entry.building.design, level) - out.y) > 0.4 || !onFloor(entry, level, out.x, out.z)) continue
        local.ride = null
        home = entry
        local.level = level
        here.x = out.x
        here.z = out.z
        return
      }
    }
  }

  function beginRide(source, passenger) {
    local.ride = { source, passenger }
    home = null
    local.level = 0
    route.length = 0
    const spot = source.spotOf(passenger)
    here.set(spot.x, spot.y, spot.z)
  }

  function step(dx, dz, steered = true) {
    if (local.ride) {
      rideStep(dx, dz)
      return
    }
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
    // Nobody walks through the piers of the monorail.
    if (local.level === 0 && transit.piers.length) [px, pz] = pushOut({ segments: [], boxes: transit.piers }, px, pz)
    if (local.level === 0 && environment.region) {
      // A stopped train takes the passenger through the matching doorway before the platform
      // edge collision. All other positions still have their fall protection.
      const regionTransit = environment.regionTransit
      const passenger = !home && !local.lift && regionTransit.board(here, px, pz)
      if (passenger) {
        beginRide(regionTransit, passenger)
        return
      }
      [px, pz] = environment.pushOut(px, pz, pushOut, here.y)
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
      let [qx, qz] = pushOut(solids, lx, lz)
      // A door that is shut is a wall; the doors of a lift only let through while its car
      // stands behind them, open.
      const shut = solids.doors.filter((door) => !passable(entry, door)).map((door) => door.gate)
      if (solids.lifts.length) {
        const level = entry === home ? local.level : 0
        shut.push(...liftsOf(entry).filter((lift) => !(lift.control.at === level && lift.control.door > 0.85))
          .map((lift) => lift.stops.find((spot) => spot.level === level)?.gate).filter(Boolean))
      }
      if (shut.length) [qx, qz] = pushOut({ segments: shut, boxes: [] }, qx, qz)
      px = qx + entry.x
      pz = qz + entry.z
    }
    // Nobody steps off the edge of an upper floor.
    if (local.level > 0 && home && !onFloor(home, local.level, px, pz)) {
      // Off the edge of a platform there is only a train to step into, while its doors are open.
      const ride = transit.board(px, pz, here.y)
      if (!ride) return
      beginRide(transit, ride)
      return
    }
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

  function move(delta, inputX, inputY, physicalX = 0, physicalZ = 0) {
    const actor = avatars.actor(state.player?.id)
    if (!local.ready || !state.player || !state.town) return
    let dx = 0
    let dz = 0
    const strength = Math.min(1, Math.hypot(inputX, inputY))
    // In a headset a building is designed standing in it, so there the resident still walks.
    const sketching = immersive() ? designing() : null
    if (strength > 0.08 && (mode !== 'close' || immersive()) && (sketching || !designing())) {
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
    const stride = SPEED * delta * (local.stair ? 0.7 : 1)
    const travelX = dx * stride + physicalX
    const travelZ = dz * stride + physicalZ
    if (sketching) {
      // The walls are still being drawn: nothing stops whoever draws them, and they stand on
      // the floor of the storey being drawn, wherever on (or just round) the lot they go.
      const map = state.town
      const edge = TILE / 2 - RADIUS
      here.x = THREE.MathUtils.clamp(here.x + travelX, Math.max(sketching.x - 5, -map.originX * TILE - edge), Math.min(sketching.x + sketching.w + 5, (map.width - 1 - map.originX) * TILE + edge))
      here.z = THREE.MathUtils.clamp(here.z + travelZ, Math.max(sketching.z - 5, -map.originZ * TILE - edge), Math.min(sketching.z + sketching.d + 5, (map.height - 1 - map.originZ) * TILE + edge))
      const ground = sketching.y0 + floorHeight(sketching.building.design, Math.min(state.design.level ?? 0, sketching.building.levels - 1))
      here.y += (ground - here.y) * (1 - Math.exp(-10 * delta))
      local.stair = null
      local.lift = null
      local.ride = null
      local.level = 0
      home = null
      route.length = 0
    } else {
      // Use short steps for controller movement and physical footsteps so both respect walls and stairs.
      const parts = Math.max(1, Math.ceil(Math.hypot(travelX, travelZ) / 0.14))
      for (let part = 0; part < parts; part++) step(travelX / parts, travelZ / parts, steered)
    }
    // The floor underfoot: the street, or the storey of the building one stands in.
    if (!local.stair && !sketching) {
      const ground = groundAt()
      // (A lift carries its passenger exactly; steps are taken with a little give.)
      if (local.lift) here.y = ground
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
    if (!home || local.stair || local.lift) return false
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
    here.set(home.x + spot[0], home.y0 + floorHeight(design, level), home.z + spot[1])
    local.level = level
    route.length = 0
    snapCamera = true
    return true
  }

  function report(now, force = false) {
    if (!local.ready || (!force && ((!xrPose && designing()) || now - lastReport < (xrPose ? 33 : 50)))) return
    const position = { x: Math.round(local.x * 1000) / 1000, z: Math.round(local.z * 1000) / 1000,
      y: Math.round(here.y * 1000) / 1000, warp: local.warp, pose: xrPose }
    const key = JSON.stringify(position)
    if (key === lastSent && (!xrPose || now - lastReport < 250)) return
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
      // (A building being designed is looked into from above; in a headset its walls can be
      // shown at their full height instead, to stand in the rooms as they will be.)
      const view = entry === draft
        ? { close: true, level: Math.min(state.design.level ?? 0, entry.building.levels - 1), cut: state.design.cut !== false || !immersive() }
        : { close: entry.close, level: mine ? local.level : null, cut: mine && lookIn }
      const key = `${view.close}|${view.level}|${view.cut}`
      if (entry.shown !== key) {
        entry.shown = key
        entry.building.show(view)
      }
      if (view.cut && view.level + 1 < entry.building.levels) {
        ceiling = { y: entry.y0 + floorHeight(entry.building.design, view.level + 1) - 0.4, x0: entry.x, z0: entry.z, x1: entry.x + entry.w, z1: entry.z + entry.d }
      }
      if (!entry.close) continue
      if (entry.building.lifts.length) runLifts(entry, delta)
      // Doors stand as they were left; only automatic doors open for whoever walks up to them.
      entry.building.swing(delta, (door) => {
        const known = solidsOf(entry, door.level).doors.find((other) => other.key === door.key)
        if (!known) return 0
        if (known.kind === 'door-platform') return transit.platformDoors(entry.id)
        if (!door.auto) return doorOpen(entry, known) ? 1 : 0
        const x = entry.x + door.x
        const z = entry.z + door.z
        const near = (spot) => Math.abs(spot.y - entry.y0 - door.y) < 1.4 && Math.hypot(spot.x - x, spot.z - z) < 2.2
        return (passable(entry, known) && near(here)) || (!locked(entry, known.lock) && others.some(near)) ? 1 : 0
      })
    }
    avatars.setCeiling(ceiling)
    findDoor()
    for (const entry of entries.values()) {
      if (entry.label) entry.label.visible = !home && !draft
    }
  }

  // ---- Cameras --------------------------------------------------------------

  function placeCamera(delta) {
    if (immersive()) {
      if (camera.near !== 0.1 || camera.far !== 5200) {
        camera.near = 0.1
        camera.far = 5200
        camera.updateProjectionMatrix()
      }
      // The headset has already moved the body through the town, so don't apply its offset a second time.
      rig.position.copy(here).sub(xrOrigin)
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
      ? point.set(draft.x + draft.w / 2, draft.y0 + floorHeight(draft.building.design, Math.min(state.design.level ?? 0, draft.building.levels - 1)), draft.z + draft.d / 2)
      : mapView ? pan : point.set(here.x, here.y + (mode === 'close' ? 1.0 : 1.25), here.z)
    if (snapCamera) focus.copy(target)
    else focus.lerp(target, 1 - Math.exp(-12 * delta))
    snapCamera = false
    let reach = draft ? THREE.MathUtils.clamp(distance, 6, 60) : mode === 'close' ? 3.4 : indoors ? THREE.MathUtils.clamp(distance, 3, 14) : distance
    const wholeRegion = mapView && environment.region && reach > 1800
    const near = wholeRegion ? Math.max(0.1, reach / 4000) : 0.1
    const baseFar = Math.max(5200, buildingDistance * 2.5)
    const far = wholeRegion ? Math.max(baseFar, reach + 40000) : baseFar
    if (camera.near !== near || camera.far !== far) {
      camera.near = near
      camera.far = far
      camera.updateProjectionMatrix()
    }
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
      reach = environment.cameraReach?.(raycaster.ray, reach) ?? reach
    }
    camera.position.set(
      focus.x + Math.sin(turn) * Math.cos(tilt) * reach,
      focus.y + Math.sin(tilt) * reach,
      focus.z + Math.cos(turn) * Math.cos(tilt) * reach,
    )
    environment.keepAbove(camera.position)
    camera.lookAt(focus)
  }

  function fitRegionOverview() {
    const whole = environment.overview(camera.aspect, 55)
    if (!whole) return false
    pan.set(whole.x, environment.heightAt(whole.x, whole.z), whole.z)
    distance = whole.distance
    pitch = whole.pitch
    snapCamera = true
    return true
  }

  function setCamera(next) {
    const chosen = MODES.includes(next) ? next : 'follow'
    if (chosen === mode) return
    if (chosen === 'overview') {
      if (home || designing() || !fitRegionOverview()) {
        pan.set(here.x, environment.heightAt(here.x, here.z), here.z)
        distance = Math.max(distance, 70)
        pitch = Math.max(pitch, 0.95)
      }
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
    if (!map || !(environment.pick(raycaster.ray, point) ?? raycaster.ray.intersectPlane(floor, point))) return null
    const exact = { x: point.x / TILE + map.originX, z: point.z / TILE + map.originZ }
    const tile = { x: Math.round(exact.x), z: Math.round(exact.z) }
    if (tile.x < 0 || tile.z < 0 || tile.x >= map.width || tile.z >= map.height) return null
    return { tile, exact, range: raycaster.ray.origin.distanceTo(point) }
  }

  // Sends whatever the current ray points at to the app: a building, a road or open ground.
  function activate(byHand = false) {
    if (!state.town || !state.player || designing()) return
    if (state.clearingExisting && environment.pickRegionBuilding) {
      const hit = environment.pickRegionBuilding(raycaster.ray)
      if (hit) callbacks.onClearBuilding?.(hit)
      return
    }
    // Pointing at a button of a lift presses it; pointing at a door within reach opens or closes it.
    if (!state.edit) {
      const button = liftButtonAlong(raycaster.ray)
      if (button) {
        pressLift(button)
        return
      }
      const door = doorAlong(raycaster.ray)
      if (door) {
        useDoor(door)
        return
      }
    }
    if (home && !state.edit) {
      // Indoors, a click on the floor is somewhere to walk to on this storey.
      floor.constant = -(home.y0 + floorHeight(home.building.design, local.level))
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

  // ---- Designing a building -----------------------------------------------------
  //
  // While a building is being designed, the pointer is a pencil: where its ray meets the floor
  // of the storey being drawn is told to the design tools, in metres from the corner of the lot.

  function designSpot() {
    const draft = designing()
    if (!draft) return null
    const level = Math.min(state.design.level ?? 0, draft.building.levels - 1)
    floor.constant = -(draft.y0 + floorHeight(draft.building.design, level))
    if (!raycaster.ray.intersectPlane(floor, point)) return null
    const x = point.x - draft.x
    const z = point.z - draft.z
    if (x < -1.5 || z < -1.5 || x > draft.w + 1.5 || z > draft.d + 1.5) return null
    return { x, z }
  }

  // Tells the design tools what the ray that was last cast is doing; false if it points nowhere.
  let pencilSpot = null
  function pencil(phase) {
    const spot = designSpot()
    if (spot) pencilSpot = spot
    // (Let go while pointing off the lot, a stroke ends where it last was on it.)
    const at = spot ?? (phase === 'up' ? pencilSpot : null)
    if (at) callbacks.onDesignPointer?.(phase, at)
    return Boolean(at)
  }

  // Lines in the frame of the lot, with y measured from the floor of the storey being drawn.
  function setSketch(data) {
    sketchData = data?.positions?.length ? data : null
    sketch.visible = Boolean(sketchData)
    if (!sketchData) return
    const cut = (sketchData.ground ?? 0) * 3
    for (const [lines, from, to] of [[sketchGround, 0, cut], [sketchMarks, cut, sketchData.positions.length]]) {
      lines.geometry.dispose()
      lines.geometry = new THREE.BufferGeometry()
      lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(sketchData.positions.slice(from, to), 3))
      lines.geometry.setAttribute('color', new THREE.Float32BufferAttribute(sketchData.colors.slice(from, to), 3))
      lines.visible = to > from
    }
    placeSketch()
  }

  function placeSketch() {
    const draft = designing()
    sketch.visible = Boolean(sketchData && draft)
    if (!sketch.visible) return
    const level = Math.min(state.design.level ?? 0, draft.building.levels - 1)
    sketch.position.set(draft.x, draft.y0 + floorHeight(draft.building.design, level), draft.z)
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
      if (event.pointerType !== 'mouse' || pointerLocked) return
      if (designing()) {
        castFrom(event.clientX, event.clientY)
        pencil('hover')
        return
      }
      if (state.clearingExisting && environment.pickRegionBuilding) {
        castFrom(event.clientX, event.clientY)
        const hit = environment.pickRegionBuilding(raycaster.ray)
        hover.visible = Boolean(hit)
        if (hit) {
          hover.material.color.set('#ff5a5a')
          hover.rotation.set(-Math.PI / 2, 0, -hit.angle)
          hover.scale.set(hit.w + 0.6, hit.d + 0.6, 1)
          hover.position.set(hit.cx, hit.topY + 0.15, hit.cz)
        }
        return
      }
      if (!state.edit) return
      // Show which tiles a click would use.
      castFrom(event.clientX, event.clientY)
      const ground = groundTile()
      const size = state.placing ?? { w: 1, d: 1 }
      hover.visible = Boolean(ground)
      hover.rotation.set(-Math.PI / 2, 0, 0)
      environment.tint(hover, ground, size)
      if (ground) {
        hover.scale.set(size.w * TILE * 0.96, size.d * TILE * 0.96, 1)
        hover.position.set(
          (ground.tile.x + (size.w - 1) / 2 - state.town.originX) * TILE, environment.heightAt((ground.tile.x + (size.w - 1) / 2 - state.town.originX) * TILE, (ground.tile.z + (size.d - 1) / 2 - state.town.originZ) * TILE) + 0.11,
          (ground.tile.z + (size.d - 1) / 2 - state.town.originZ) * TILE,
        )
      }
      return
    }
    if (event.pointerType === 'mouse' && event.buttons === 0) {
      // The button was let go somewhere this page could not see: the drag is over.
      touches.delete(event.pointerId)
      return
    }
    // While the pointer is locked the look comes from the mouse itself, not from a drag.
    if (pointerLocked) return
    const dx = event.clientX - touch.x
    const dy = event.clientY - touch.y
    touch.x = event.clientX
    touch.y = event.clientY
    if (touches.size === 2) {
      const [a, b] = [...touches.values()]
      const spread = Math.hypot(a.x - b.x, a.y - b.y)
      if (pinch > 0 && spread > 0) distance = THREE.MathUtils.clamp(distance * pinch / spread, 2.5, environment.reach())
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
    // With the pointer locked, a click is handled where the view is aimed (see onLockedClick).
    if (pointerLocked) return
    if (designing()) {
      // A click on the building being designed is a click of the tool in hand; the other
      // mouse button puts down whatever line was being drawn.
      if (touch.button === 2) callbacks.onDesignPointer?.('cancel', null)
      else {
        castFrom(event.clientX, event.clientY)
        if (pencil('down')) pencil('up')
      }
      return
    }
    if (mode === 'first' && event.pointerType === 'mouse' && !designing()) {
      lockPointer()
      return
    }
    castFrom(event.clientX, event.clientY)
    activate()
  }
  canvas.addEventListener('pointerup', release)
  canvas.addEventListener('pointercancel', release)
  canvas.addEventListener('lostpointercapture', (event) => touches.delete(event.pointerId))
  canvas.addEventListener('pointerleave', () => { hover.visible = false })
  canvas.addEventListener('contextmenu', (event) => event.preventDefault())
  canvas.addEventListener('wheel', (event) => {
    event.preventDefault()
    if ((mode === 'first' || mode === 'close') && !designing()) return
    distance = THREE.MathUtils.clamp(distance * Math.exp(event.deltaY * 0.0011), 2.5, environment.reach())
  }, { passive: false })

  // Looking round with the mouse held by the page. The raw movement of the mouse is asked for
  // where the browser offers it: it is steadier than movement run through the pointer's speed-up.
  async function lockPointer() {
    try {
      await canvas.requestPointerLock({ unadjustedMovement: true })
    } catch {
      try {
        await canvas.requestPointerLock()
      } catch {
        // Some pages may not hold the pointer (an embedded view): dragging still looks round.
      }
    }
  }
  let lookPace = 0
  let lookSkip = 0
  function onLockChange() {
    pointerLocked = document.pointerLockElement === canvas
    touches.clear()
    lookPace = 0
    // The first report after the pointer is taken or given back often carries a leap.
    lookSkip = 2
  }
  function onMouseLook(event) {
    if (!pointerLocked) return
    const { movementX, movementY } = event
    if (lookSkip > 0) {
      lookSkip--
      return
    }
    // Browsers now and then report one enormous movement (the pointer being put back in the
    // middle of the window): a leap far beyond the pace of the hand is thrown away.
    const size = Math.hypot(movementX, movementY)
    const leap = size > 400 || (size > 90 && size > lookPace * 8 + 60)
    lookPace += (Math.min(size, 120) - lookPace) * 0.2
    if (leap) return
    yaw -= movementX * 0.0022
    pitch = THREE.MathUtils.clamp(pitch - movementY * 0.0022, -1.35, 1.35)
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
    // F opens and closes the door within reach; L locks and unlocks it.
    else if (key === 'f') useDoor()
    else if (key === 'l') useLock()
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
  const trackedDirection = new THREE.Vector3()
  const gripPosition = new THREE.Vector3()
  const gripRotation = new THREE.Quaternion()
  const curlGoal = [0, 0, 0, 0, 0]
  // This frame's headset and hands at full precision, relative to `here` as the pose sent to
  // everyone else is. Hands are wrists, framed as WebXR hand joints are (-Z towards the fingers,
  // -Y out of the palm), with how far each finger is closed: thumb, index, middle, ring, little.
  const xrBody = {
    yaw: 0, standing: 1.6, crouch: 0,
    head: { position: new THREE.Vector3(), rotation: new THREE.Quaternion() },
    left: { position: new THREE.Vector3(), rotation: new THREE.Quaternion(), curls: [0.3, 0.25, 0.4, 0.4, 0.4], tracked: false },
    right: { position: new THREE.Vector3(), rotation: new THREE.Quaternion(), curls: [0.3, 0.25, 0.4, 0.4, 0.4], tracked: false },
  }

  // A controller is held rather than worn: its grip is the middle of a closed hand. The wrist sits
  // a little back along the arm and towards the back of the hand, and a hand round a controller
  // points somewhat above the grip's own forward (a Quest's ray runs 45° above it).
  const GRIP_TILT = Math.PI / 6
  function gripWrist(back) {
    const distal = new THREE.Vector3(0, -Math.cos(GRIP_TILT), -Math.sin(GRIP_TILT))
    const y = new THREE.Vector3(back, 0, 0)
    const z = distal.clone().negate()
    return {
      rotation: new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(new THREE.Vector3().crossVectors(y, z), y, z)),
      offset: new THREE.Vector3(back * 0.03, 0, 0).addScaledVector(distal, -0.065),
    }
  }
  // The back of a right hand faces the grip's +X, the back of a left hand its -X.
  const gripWrists = { left: gripWrist(-1), right: gripWrist(1) }

  // How far the fingers holding a controller are closed: the index finger on the trigger, the
  // others round the grip, and the thumb resting on the stick or the buttons, or not.
  function controllerCurls(gamepad, out) {
    const buttons = gamepad?.buttons ?? []
    const resting = [3, 4, 5, 6].some((index) => buttons[index]?.touched || buttons[index]?.pressed)
    out[0] = resting ? 0.75 : 0.3
    out[1] = Math.max(buttons[0]?.value ?? 0, buttons[0]?.touched ? 0.35 : 0.12)
    out[2] = out[3] = out[4] = 0.4 + 0.6 * (buttons[1]?.value ?? 0)
  }

  const jointSpaces = new WeakMap()
  const jointMatrices = new Float32Array(25 * 16)
  const jointA = new THREE.Vector3()
  const jointB = new THREE.Vector3()
  const jointC = new THREE.Vector3()
  // How bent a finger is: the angles at its joints, from joint `first` (its base) to `last` (its tip).
  function bent(first, last) {
    let total = 0
    for (let at = first + 1; at < last; at++) {
      jointA.fromArray(jointMatrices, (at - 1) * 16 + 12)
      jointB.fromArray(jointMatrices, at * 16 + 12)
      jointC.fromArray(jointMatrices, (at + 1) * 16 + 12).sub(jointB)
      jointB.sub(jointA)
      if (jointB.lengthSq() > 1e-10 && jointC.lengthSq() > 1e-10) total += jointB.angleTo(jointC)
    }
    return total
  }
  // How far a tracked hand's fingers are closed, read from its joints.
  function handCurls(frame, hand, reference, out) {
    let spaces = jointSpaces.get(hand)
    if (!spaces) {
      spaces = [...hand.values()]
      jointSpaces.set(hand, spaces)
    }
    if (spaces.length < 25) return false
    if (frame.fillPoses) {
      if (!frame.fillPoses(spaces, reference, jointMatrices)) return false
    } else {
      for (const [index, space] of spaces.entries()) {
        const joint = frame.getJointPose?.(space, reference)
        if (!joint) return false
        jointMatrices.set(joint.transform.matrix, index * 16)
      }
    }
    out[0] = THREE.MathUtils.clamp((bent(1, 4) - 0.25) / 1.6, 0, 1)
    for (let finger = 0; finger < 4; finger++) {
      const first = 5 + finger * 5
      out[finger + 1] = THREE.MathUtils.clamp((bent(first, first + 4) - 0.2) / 3.9, 0, 1)
    }
    return true
  }

  function resetPhysicalWalking() {
    previousHead = null
    xrStep.set(0, 0, 0)
  }

  function watchXRReference(reference) {
    xrReference?.removeEventListener?.('reset', resetPhysicalWalking)
    xrReference = reference
    xrReference?.addEventListener?.('reset', resetPhysicalWalking)
    resetPhysicalWalking()
  }

  function readTracking(frame, delta) {
    const reference = renderer.xr.getReferenceSpace()
    const viewer = frame && reference && frame.getViewerPose(reference)
    if (!viewer) {
      resetPhysicalWalking()
      return null
    }
    xrOrientation.setFromAxisAngle(xrUp, xrYaw)
    const { position: headPosition } = viewer.transform
    if (!Number.isFinite(headPosition.x) || !Number.isFinite(headPosition.z)) {
      resetPhysicalWalking()
      return null
    }
    xrOrigin.set(headPosition.x, 0, headPosition.z).applyQuaternion(xrOrientation)
    xrStep.set(0, 0, 0)
    if (viewer.emulatedPosition) previousHead = null
    else {
      if (previousHead) {
        const x = headPosition.x - previousHead.x
        const z = headPosition.z - previousHead.z
        // A tracking-origin jump is not a physical step. Snap-turns rotate this delta in place.
        if (Math.hypot(x, z) < 0.75) xrStep.set(x, 0, z).applyQuaternion(xrOrientation)
      }
      previousHead = headPosition
    }
    // Into the town's frame, relative to where the resident stands.
    const place = (position, orientation, into) => {
      into.position.set(position.x, position.y, position.z).applyQuaternion(xrOrientation).sub(xrOrigin)
      into.rotation.set(orientation.x, orientation.y, orientation.z, orientation.w).premultiply(xrOrientation)
      return into
    }
    const pack = ({ position, rotation }) => [...position, ...rotation].map((value) => Math.round(value * 1000) / 1000)
    const head = place(viewer.transform.position, viewer.transform.orientation, xrBody.head)
    trackedDirection.set(0, 0, -1).applyQuaternion(head.rotation)
    if (Math.hypot(trackedDirection.x, trackedDirection.z) > 0.08) xrHeading = Math.atan2(-trackedDirection.x, -trackedDirection.z)
    const face = xrHeading + Math.PI
    const turn = Math.atan2(Math.sin(face - (xrBodyYaw ?? face)), Math.cos(face - (xrBodyYaw ?? face)))
    xrBodyYaw = face - THREE.MathUtils.clamp(turn * Math.exp(-5 * delta), -1.05, 1.05)
    const pose = { yaw: Math.atan2(Math.sin(xrBodyYaw), Math.cos(xrBodyYaw)), head: pack(head), left: null, right: null }
    // The wearer stands as tall as the headset has been, slowly forgetting a moment of holding
    // it up high; a crouch is measured down from there.
    if (!viewer.emulatedPosition) {
      const height = THREE.MathUtils.clamp(head.position.y, 1.2, 2.1)
      xrStanding = xrStanding === null ? height : Math.max(height, xrStanding - 0.015 * delta)
    }
    xrBody.yaw = pose.yaw
    xrBody.standing = xrStanding ?? 1.6
    xrBody.crouch = THREE.MathUtils.clamp(xrBody.standing - head.position.y, 0, 0.65)
    xrBody.left.tracked = false
    xrBody.right.tracked = false
    const blend = 1 - Math.exp(-22 * delta)
    for (const source of frame.session.inputSources) {
      const side = source.handedness
      if (side !== 'left' && side !== 'right') continue
      const hand = xrBody[side]
      const wrist = source.hand?.get('wrist')
      if (wrist) {
        const joint = frame.getJointPose?.(wrist, reference)
        if (!joint) continue
        place(joint.transform.position, joint.transform.orientation, hand)
        if (!handCurls(frame, source.hand, reference, curlGoal)) curlGoal.splice(0, 5, ...hand.curls)
      } else {
        // Everyone else is sent the wrist too, so a hand looks the same whatever tracks it.
        const grip = source.gripSpace && frame.getPose(source.gripSpace, reference)
        if (!grip) continue
        const { position, orientation } = grip.transform
        gripRotation.set(orientation.x, orientation.y, orientation.z, orientation.w)
        gripPosition.copy(gripWrists[side].offset).applyQuaternion(gripRotation).add(position)
        place(gripPosition, gripRotation.multiply(gripWrists[side].rotation), hand)
        controllerCurls(source.gamepad, curlGoal)
      }
      for (let index = 0; index < 5; index++) hand.curls[index] += (curlGoal[index] - hand.curls[index]) * blend
      hand.tracked = true
      pose[side] = pack(hand)
    }
    return pose
  }

  // A short buzz in one hand's controller, where the controller can.
  function pulse(side, strength, duration) {
    for (const source of renderer.xr.getSession()?.inputSources ?? []) {
      if (source.handedness !== side || !source.gamepad) continue
      try {
        const actuator = source.gamepad.hapticActuators?.[0]
        if (actuator?.pulse) Promise.resolve(actuator.pulse(strength, duration)).catch(() => {})
        else source.gamepad.vibrationActuator?.playEffect?.('dual-rumble', { duration, strongMagnitude: strength, weakMagnitude: strength })?.catch?.(() => {})
      } catch {
        // Not every controller can buzz.
      }
    }
  }

  // A button of the VR menu. The page's own buttons go back to the page; the scene keeps only
  // its own: showing or hiding one's body, and leaving VR when the page has said nothing yet.
  function pressMenu(button) {
    if (button.action === 'vr-body') {
      bodyShown = !bodyShown
      try {
        localStorage.setItem(BODY_KEY, bodyShown ? 'shown' : 'hidden')
      } catch {
        // It is only forgotten next time.
      }
    } else if (button.action === 'vr-exit') renderer.xr.getSession()?.end()
    else if (button.action) callbacks.onMenu?.(button.action, button.data ?? {})
  }

  // What the VR menu holds: what the page put there, and then one's own body, shown or hidden.
  function menuContent() {
    const content = vrMenuContent ?? { title: 'まちのとなり', sections: [] }
    const own = [{ label: bodyShown ? '自分の体を隠す' : '自分の体を表示する', action: 'vr-body', active: bodyShown }]
    if (!vrMenuContent) own.push({ label: 'VRを終了する', action: 'vr-exit' })
    return { ...content, sections: [...(content.sections ?? []), { label: 'VRでの見え方', columns: 2, buttons: own }] }
  }

  const menu = createVRMenu(world, { onPress: pressMenu, onPulse: pulse })
  // The hand that holds the pencil down while a building is designed in VR.
  let penHand = null
  // Casts the ray of a hand: from the controller, the way it points.
  function aim(hand) {
    hand.updateMatrixWorld(true)
    raycaster.ray.origin.setFromMatrixPosition(hand.matrixWorld)
    raycaster.ray.direction.set(0, 0, -1).transformDirection(hand.matrixWorld)
  }

  const hands = [0, 1].map((index) => {
    const hand = renderer.xr.getController(index)
    // A beam that fades away from the hand. Where it meets the menu it stops, with a dot there.
    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(0, 0, -6)])
    geometry.setAttribute('color', new THREE.Float32BufferAttribute([1, 1, 1, 0.9, 1, 1, 1, 0], 4))
    const ray = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#fff3c4', vertexColors: true, transparent: true, depthWrite: false }))
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.007, 12, 8),
      new THREE.MeshBasicMaterial({ color: '#ffd76a', depthTest: false, depthWrite: false, toneMapped: false }))
    dot.renderOrder = 1011
    dot.visible = false
    hand.add(ray, dot)
    hand.userData = { source: null, ray, dot }
    hand.visible = false
    hand.addEventListener('connected', (event) => {
      hand.userData.source = event.data
      hand.visible = true
    })
    hand.addEventListener('disconnected', () => {
      hand.userData.source = null
      hand.visible = false
    })
    const side = () => hand.userData.source?.handedness
    // The trigger presses whatever it points at on the menu; elsewhere it points at a place to
    // go, or, while a building is being designed, it is the button of the pencil.
    hand.addEventListener('selectstart', () => {
      if (menu.select(side())) return
      aim(hand)
      if (designing()) {
        if (pencil('down')) penHand = hand
        return
      }
      activate(true)
    })
    hand.addEventListener('selectend', () => {
      if (penHand !== hand) return
      penHand = null
      aim(hand)
      pencil('up')
    })
    // The left grip goes down a storey and the right one up: in the building one stands in,
    // or in the one being designed.
    hand.addEventListener('squeezestart', () => {
      const handed = side()
      if (menu.wearing(handed)) return
      const by = handed === 'left' ? -1 : handed === 'right' ? 1 : index === 0 ? -1 : 1
      if (designing()) callbacks.onMenu?.('design-level', { id: String(by) })
      else changeLevel(by)
    })
    rig.add(hand)
    return hand
  })

  const menuHands = { left: { wrist: null, ray: null }, right: { wrist: null, ray: null } }
  const menuWrists = {
    left: { position: new THREE.Vector3(), rotation: new THREE.Quaternion() },
    right: { position: new THREE.Vector3(), rotation: new THREE.Quaternion() },
  }
  const menuRays = { left: new THREE.Ray(), right: new THREE.Ray() }
  const eyePoint = new THREE.Vector3()

  // Shows the VR menu where it belongs, and lets the hands point at it.
  function pointMenu(delta) {
    for (const side of ['left', 'right']) {
      const hand = xrBody[side]
      const wrist = menuWrists[side]
      menuHands[side].ray = null
      menuHands[side].wrist = null
      if (!hand.tracked) continue
      wrist.position.copy(hand.position).add(here)
      wrist.rotation.copy(hand.rotation)
      menuHands[side].wrist = wrist
    }
    for (const hand of hands) {
      const side = hand.userData.source?.handedness
      if (!hand.visible || (side !== 'left' && side !== 'right')) continue
      menuRays[side].origin.setFromMatrixPosition(hand.matrixWorld)
      menuRays[side].direction.set(0, 0, -1).transformDirection(hand.matrixWorld)
      menuHands[side].ray = menuRays[side]
    }
    eyePoint.copy(xrBody.head.position).add(here)
    const hits = menu.update({ eye: eyePoint, view: xrBody.head.rotation, hands: menuHands, content: menuContent, delta })
    for (const hand of hands) {
      const side = hand.userData.source?.handedness
      const hit = (side === 'left' || side === 'right') ? hits[side] : null
      const { ray, dot } = hand.userData
      // The hand wearing the menu is not pointing with it.
      ray.visible = side !== hits.holder
      ray.scale.z = hit ? hit / 6 : 1
      dot.visible = ray.visible && hit !== null
      if (hit !== null) dot.position.set(0, 0, -hit)
    }
  }

  const insideHands = {
    left: { position: new THREE.Vector3(), rotation: new THREE.Quaternion(), curls: null },
    right: { position: new THREE.Vector3(), rotation: new THREE.Quaternion(), curls: null },
  }
  const seen = {
    shown: true,
    pose: { yaw: 0, standing: 1.6, crouch: 0, head: { position: new THREE.Vector3(), rotation: new THREE.Quaternion() }, left: null, right: null },
  }
  // The headset and hands in the town, for the resident's own body as its wearer sees it.
  function seenFromInside() {
    const { pose } = seen
    pose.yaw = xrBody.yaw
    pose.standing = xrBody.standing
    pose.crouch = xrBody.crouch
    pose.head.position.copy(xrBody.head.position).add(here)
    pose.head.rotation.copy(xrBody.head.rotation)
    for (const side of ['left', 'right']) {
      const hand = xrBody[side]
      if (!hand.tracked) {
        pose[side] = null
        continue
      }
      const target = insideHands[side]
      target.position.copy(hand.position).add(here)
      target.rotation.copy(hand.rotation)
      target.curls = hand.curls
      pose[side] = target
    }
    seen.shown = bodyShown
    return seen
  }

  let menuButtons = false
  function readHands() {
    const session = renderer.xr.getSession()
    let x = 0
    let y = 0
    if (!session) return [x, y]
    let pressed = false
    for (const source of session.inputSources) {
      // X, Y, A or B floats the menu in front of the eyes, or puts it away.
      const buttons = source.gamepad?.buttons
      if (buttons?.[4]?.pressed || buttons?.[5]?.pressed) pressed = true
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
    if (pressed && !menuButtons) menu.toggle()
    menuButtons = pressed
    return [Math.abs(x) > 0.15 ? x : 0, Math.abs(y) > 0.15 ? y : 0]
  }

  renderer.xr.addEventListener('sessionstart', () => {
    xrYaw = yaw
    xrHeading = yaw
    xrBodyYaw = null
    xrTurned = false
    xrStanding = null
    xrOrigin.set(0, 0, 0)
    watchXRReference(renderer.xr.getReferenceSpace())
    avatars.setLocalHidden(true)
    menu.hide()
    menu.notify('手首を顔に向けるとメニュー')
    callbacks.onVR?.(true)
  })
  renderer.xr.addEventListener('sessionend', () => {
    xrPose = null
    watchXRReference(null)
    report(performance.now(), true)
    menu.hide()
    avatars.setFirstPerson(null)
    avatars.setLocalHidden(firstPerson())
    snapCamera = true
    camera.fov = 55
    resize()
    callbacks.onVR?.(false)
  })

  // ---- Frame loop -----------------------------------------------------------

  // Moves the picture so that what the camera looks at lies in the middle of the part of the
  // screen that no panel covers. (Seen through the resident's own eyes, the view stays put.)
  function frameView() {
    const centred = mode === 'first' && !designing()
    const dx = centred ? 0 : (insets.left - insets.right) / 2
    const dy = centred ? 0 : (insets.top - insets.bottom) / 2
    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
      if (camera.view?.enabled) camera.clearViewOffset()
    } else if (!camera.view?.enabled || camera.view.offsetX !== -dx || camera.view.offsetY !== -dy
      || camera.view.fullWidth !== width || camera.view.fullHeight !== height) camera.setViewOffset(width, height, -dx, -dy, width, height)
  }

  function resize() {
    width = Math.max(1, container.clientWidth)
    height = Math.max(1, container.clientHeight)
    if (immersive()) return
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    frameView()
    camera.updateProjectionMatrix()
  }
  const observer = new ResizeObserver(resize)
  observer.observe(container)

  function frame(time, xrFrame) {
    const delta = Math.min(0.08, Math.max(0.001, (time - lastTime) / 1000))
    lastTime = time
    elapsed += delta
    if (pendingPlayers) {
      applyPresence(pendingPlayers)
      pendingPlayers = null
    }
    const [handX, handY] = immersive() ? readHands() : [0, 0]
    const previousPose = xrPose
    xrPose = immersive() ? readTracking(xrFrame, delta) : null
    // The monorail runs by the clock; whoever is aboard is carried along with it.
    const ride = local.ride
    transit.update({ x: here.x, y: here.y, z: here.z, ride: ride?.source === transit ? ride.passenger : null })
    environment.updateTransit(here, ride?.source === environment.regionTransit ? ride.passenger : null)
    if (local.ride) {
      if (ride.source.riding(ride.passenger)) {
        const spot = ride.source.spotOf(ride.passenger)
        here.set(spot.x, spot.y, spot.z)
      } else local.ride = null
    }
    const [inputX, inputY] = readInput()
    if (mode === 'overview' && state.edit && !home && !immersive()) {
      // While editing the town from above, the keys slide the map instead of the resident.
      const scale = distance * 0.9 * delta
      pan.x += (Math.cos(yaw) * inputX - Math.sin(yaw) * inputY) * scale
      pan.z += (-Math.sin(yaw) * inputX - Math.cos(yaw) * inputY) * scale
      move(delta, 0, 0)
    } else move(delta, inputX + handX, inputY + handY, xrStep.x, xrStep.z)
    showBuildings(delta)
    placeCamera(delta)
    if (!immersive()) {
      const fov = mode === 'first' && !designing() ? 72 : 55
      if (camera.fov !== fov) {
        camera.fov = fov
        camera.updateProjectionMatrix()
      }
      frameView()
    }
    placeSketch()
    environment.update(delta, focus, immersive(), { player: here, overview: mode === 'overview' && !home && !designing() && distance > 1800, cameraDistance: distance })
    camera.updateMatrixWorld(true)
    const view = xrPose ? point.set(xrPose.head[0], xrPose.head[1], xrPose.head[2]).add(here)
      : immersive() ? camera.getWorldPosition(point) : camera.position
    // Glass traces its reflections through the buildings and trees nearest to the viewer.
    updateGlass({ boxes: mirrored, trees: environment.trees(), sun: environment.sunDirection, ground: environment.groundMap(), eye: view })
    avatarView.position = view
    avatarView.frustum = null
    avatarView.direction = null
    if (!immersive()) {
      viewProjection.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
      avatarView.frustum = avatarFrustum.setFromProjectionMatrix(viewProjection)
    } else if (xrPose) {
      viewRotation.fromArray(xrPose.head, 3).normalize()
      avatarView.direction = avatarDirection.set(0, 0, -1).applyQuaternion(viewRotation)
    }
    if (xrPose) {
      // (The hands' beams hang off the rig, which has just been moved.)
      rig.updateMatrixWorld(true)
      avatars.setFirstPerson(seenFromInside())
    } else if (!immersive()) avatars.setFirstPerson(null)
    avatars.update(delta, elapsed, avatarView)
    if (xrPose) pointMenu(delta)
    updateAvatarLoadHud(view)
    for (const entry of entries.values()) {
      const label = entry.label
      if (!label?.visible) continue
      const size = THREE.MathUtils.clamp(view.distanceTo(label.position) * 0.028, 0.5, 9)
      label.scale.set(size * label.userData.aspect, size, 1)
    }
    // Through the headset one's own avatar is seen from inside its head; otherwise from outside.
    camera.layers.enable(immersive() ? FIRST_PERSON_LAYER : THIRD_PERSON_LAYER)
    camera.layers.disable(immersive() ? THIRD_PERSON_LAYER : FIRST_PERSON_LAYER)
    renderer.render(world, camera)
    report(performance.now(), Boolean(previousPose) !== Boolean(xrPose))
  }

  function setQuality(next) {
    quality = ['low', 'medium', 'high'].includes(next) ? next : 'medium'
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality === 'high' ? 2 : quality === 'medium' ? 1.5 : 1.25))
    setDetail(quality === 'high' ? 2 : quality === 'medium' ? 1 : 0)
    environment.setQuality(quality)
    resize()
  }

  function setBuildingDistance(next) {
    buildingDistance = Math.min(10000, Math.max(400, Math.round(Number(next) || 400)))
    if (environment.setBuildingDistance) environment.setBuildingDistance(buildingDistance)
    else environment.setViewDistance?.(buildingDistance)
    return buildingDistance
  }

  setQuality(coarse ? 'low' : 'medium')
  resize()
  renderer.setAnimationLoop(frame)

  // Puts the player down at a spot given in metres, and works out which floor that is.
  function arriveAt(x, z) {
    // (On a lot one arrives at the lot's own height, even before the ground round it has come in.)
    const lot = [...entries.values()].find((entry) => x >= entry.x && x <= entry.x + entry.w && z >= entry.z && z <= entry.z + entry.d)
    here.set(x, lot ? lot.y0 : environment.heightAt(x, z), z)
    local.x = x / TILE + local.ox
    local.z = z / TILE + local.oz
    local.stair = null
    route.length = 0
    snapCamera = true
    settle()
  }

  // Goes to a building: to its front door, or (with `inside`) just through it.
  function visit(id, { inside = false } = {}) {
    const entry = entries.get(id)
    if (!entry) return false
    // Stepping straight inside is for those who could open the front door.
    const front = solidsOf(entry, 0).doors.filter((door) => door.outside).sort((p, q) => Math.hypot(p.x - (entry.arrive.x - entry.x), p.z - (entry.arrive.z - entry.z))
      - Math.hypot(q.x - (entry.arrive.x - entry.x), q.z - (entry.arrive.z - entry.z)))[0]
    const allowed = !front || passable(entry, front) || !locked(entry, front.lock) || holds(entry, front.lock)
    const spot = inside && entry.arrive.inside && allowed ? entry.arrive.inside : entry.arrive
    arriveAt(spot.x, spot.z)
    return true
  }

  // Sends the lift this resident stands in to a storey.
  function rideTo(level) {
    const lift = local.lift?.lift
    if (!lift || !lift.stops.some((spot) => spot.level === level)) return false
    pressLift({ lift, type: 'floor', level })
    return true
  }

  return {
    update,
    updatePresence(players) {
      pendingPlayers = players
    },
    setCamera,
    setQuality,
    setBuildingDistance,
    camera: () => mode,
    quality: () => quality,
    buildingDistance: () => buildingDistance,
    // How many pixels of each edge of the screen are covered by panels.
    setInsets(next = {}) {
      for (const side of ['left', 'right', 'top', 'bottom']) insets[side] = Math.max(0, Number(next[side]) || 0)
      if (!immersive()) frameView()
    },
    setSketch,
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
      // (Where the lot has a wall round it, the way in is through its gate.)
      const gate = entry.building.design.yard?.gate
      if (gate) route.push(tile({ x: entry.x + gate.x, z: entry.z + gate.z }))
      route.push(tile(entry.arrive))
      if (entry.arrive.inside) route.push(tile(entry.arrive.inside))
      return true
    },
    visit,
    changeLevel,
    // Opens or closes the door within reach; locks or unlocks it.
    useDoor: () => useDoor(),
    useLock,
    rideTo,
    // Which sounds are wanted: { sound (chimes and melodies), voice (spoken announcements) }.
    setSound: (options) => sound.set(options),
    loadVRM: (url, options = {}) => avatars.loadLocal(url, { ...options, serverURL: state.player?.vrmUrl }),
    clearVRM: () => avatars.clearLocal(),
    setAvatarLoadProgress: (value) => { avatarLoadProgress = value },
    vr: {
      supported: async () => Boolean(await navigator.xr?.isSessionSupported?.('immersive-vr').catch(() => false)),
      active: immersive,
      async enter() {
        const session = await navigator.xr.requestSession('immersive-vr', { optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking'] })
        renderer.xr.setReferenceSpaceType('local-floor')
        try {
          await renderer.xr.setSession(session)
        } catch (error) {
          await session.end().catch(() => {})
          throw error
        }
      },
      exit: () => renderer.xr.getSession()?.end(),
      // A notice shown in front of the eyes (the page's own cannot be seen in a headset).
      notify(text) {
        if (immersive()) menu.notify(text)
      },
      // What the VR menu holds: { title, subtitle, hint, sections: [{ label, columns,
      // buttons: [{ label, action, data, active, disabled }] }] }. A pressed button is passed
      // back as callbacks.onMenu(action, data).
      setMenu(content) {
        vrMenuContent = content ?? null
      },
    },
    destroy() {
      renderer.setAnimationLoop(null)
      watchXRReference(null)
      menu.dispose()
      observer.disconnect()
      document.removeEventListener('pointerlockchange', onLockChange)
      document.removeEventListener('mousemove', onMouseLook)
      document.removeEventListener('click', onLockedClick)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('blur', onBlur)
      avatars.dispose()
      transit.dispose()
      if (loadHud) {
        loadHud.fill.geometry.dispose()
        for (const child of loadHud.group.children) {
          child.material.map?.dispose()
          child.material.dispose()
        }
        world.remove(loadHud.group)
      }
      for (const entry of entries.values()) entry.building.dispose()
      for (const lines of [sketchGround, sketchMarks]) {
        lines.geometry.dispose()
        lines.material.dispose()
      }
      world.remove(sketch)
      disposeGroup(markers)
      environment.dispose()
      renderer.dispose()
      canvas.remove()
    },
  }
}
