// A lift as it is seen and touched: the car with its panels, handrails, mirror and lights,
// its own doors, the indicators that show where it is, and the buttons in the car and on
// every landing. How it runs is decided elsewhere (lift-control.js); this only shows it.
import * as THREE from 'three'
import { Batch, finishMaterial, glow, material } from './kit.js?v=online-1794946480502'

// The clear width of the doors and the height inside the car, in metres.
const DOOR = 0.8
const HEIGHT = 2.3
const SKIN = 0.03
const AMBER = '#ffb23e'

const hairline = () => material('#c9ccc8', '#ffffff', { roughness: 0.34, metalness: 0.8 })
const darkSteel = () => material('#4a5054', '#ffffff', { roughness: 0.42, metalness: 0.7 })
const laminate = () => material('#ece6d8', '#ffffff', { roughness: 0.62 })
const seam = () => material('#8f8b80', '#ffffff', { roughness: 0.8 })

function board(width, height) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const map = new THREE.CanvasTexture(canvas)
  map.colorSpace = THREE.SRGBColorSpace
  map.anisotropy = 4
  return { canvas, map, context: canvas.getContext('2d') }
}

function plane(map, width, height, dim = 1) {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), new THREE.MeshBasicMaterial({ map, toneMapped: false, color: new THREE.Color(dim, dim, dim) }))
  mesh.userData.ownMaterial = true
  return mesh
}

// The lamps that show where the car is: an arrow while it has somewhere to go, and the storey.
function paintIndicator({ canvas, context: c, map }, shown, heading) {
  const { width, height } = canvas
  c.fillStyle = '#090b0c'
  c.fillRect(0, 0, width, height)
  c.fillStyle = AMBER
  c.shadowColor = AMBER
  c.shadowBlur = 10
  if (heading) {
    const x = width * 0.25
    const y = height / 2
    const s = height * 0.24 * heading
    c.beginPath()
    c.moveTo(x, y - s)
    c.lineTo(x + height * 0.2, y + s * 0.8)
    c.lineTo(x - height * 0.2, y + s * 0.8)
    c.closePath()
    c.fill()
  }
  c.font = `700 ${Math.round(height * 0.74)}px "Bahnschrift", "DIN Alternate", "Yu Gothic UI", system-ui, sans-serif`
  c.textAlign = 'center'
  c.textBaseline = 'middle'
  c.fillText(String(shown + 1), width * (heading ? 0.66 : 0.5), height * 0.54)
  c.shadowBlur = 0
  // (Seen close, the figures are made of rows of lamps.)
  c.fillStyle = 'rgba(0, 0, 0, 0.3)'
  for (let y = 0; y < height; y += 4) c.fillRect(0, y, width, 1)
  for (let x = 0; x < width; x += 4) c.fillRect(x, 0, 1, height)
  map.needsUpdate = true
}

// The buttons of the car, where each one is on the panel (in pixels of its picture).
function carButtons(levels) {
  const rows = Math.ceil(levels.length / 2)
  const height = 150 + rows * 62 + 170
  const buttons = []
  // Higher storeys higher up, two to a row, as on the panel of a real lift.
  levels.forEach((level, index) => {
    const row = Math.floor(index / 2)
    buttons.push({ type: 'floor', level, x: index % 2 ? 176 : 80, y: 150 + (rows - 1 - row) * 62 + 30, r: 25 })
  })
  const below = 150 + rows * 62
  buttons.push({ type: 'open', x: 80, y: below + 48, r: 25 }, { type: 'close', x: 176, y: below + 48, r: 25 })
  return { width: 256, height, buttons, below }
}

function paintCarPanel({ canvas, context: c, map }, layout, { shown, heading, calls, at, open }) {
  const { width, height } = canvas
  const face = c.createLinearGradient(0, 0, width, 0)
  face.addColorStop(0, '#b9bdbb')
  face.addColorStop(0.5, '#d9dcda')
  face.addColorStop(1, '#b4b8b6')
  c.fillStyle = face
  c.fillRect(0, 0, width, height)
  c.strokeStyle = '#7d8280'
  c.lineWidth = 3
  c.strokeRect(1.5, 1.5, width - 3, height - 3)
  // The little screen at the top: the storey, and which way the car is going.
  c.fillStyle = '#0a0c0d'
  c.beginPath()
  c.roundRect(40, 26, 176, 84, 8)
  c.fill()
  c.fillStyle = AMBER
  c.font = '700 60px "Bahnschrift", "DIN Alternate", "Yu Gothic UI", system-ui, sans-serif'
  c.textAlign = 'center'
  c.textBaseline = 'middle'
  c.fillText(`${heading > 0 ? '▲ ' : heading < 0 ? '▼ ' : ''}${shown + 1}`, 128, 70)
  for (const button of layout.buttons) {
    const lit = button.type === 'floor' ? calls.has(button.level) : button.type === 'open' && open
    c.beginPath()
    c.arc(button.x, button.y, button.r, 0, Math.PI * 2)
    c.fillStyle = lit ? AMBER : '#f1f2f0'
    c.fill()
    c.lineWidth = button.type === 'floor' && button.level === at ? 5 : 3
    c.strokeStyle = lit ? '#c97a12' : button.type === 'open' ? '#2f8a57' : '#6f7573'
    c.stroke()
    c.fillStyle = lit ? '#3a2606' : '#2c3235'
    if (button.type === 'floor') {
      c.font = '700 26px "Yu Gothic UI", system-ui, sans-serif'
      c.fillText(String(button.level + 1), button.x, button.y + 1)
    } else {
      c.font = '700 15px "Yu Gothic UI", system-ui, sans-serif'
      c.fillText(button.type === 'open' ? '◀▶' : '▶◀', button.x, button.y - 6)
      c.fillText(button.type === 'open' ? '開' : '閉', button.x, button.y + 11)
    }
  }
  // The emergency button behind its guard, and what the car may carry.
  const y = layout.below + 112
  c.beginPath()
  c.arc(128, y, 21, 0, Math.PI * 2)
  c.fillStyle = '#f0c13a'
  c.fill()
  c.strokeStyle = '#8a6a12'
  c.lineWidth = 3
  c.stroke()
  c.fillStyle = '#3a2f08'
  c.font = '700 14px "Yu Gothic UI", system-ui, sans-serif'
  c.fillText('非常', 128, y + 1)
  c.fillStyle = '#4b5154'
  c.font = '600 13px "Yu Gothic UI", system-ui, sans-serif'
  c.fillText('定員 9名　積載 600kg', 128, height - 18)
  map.needsUpdate = true
}

function paintHallPanel({ canvas, context: c, map }, { up, down, lit }) {
  const { width, height } = canvas
  const face = c.createLinearGradient(0, 0, width, 0)
  face.addColorStop(0, '#b9bdbb')
  face.addColorStop(0.5, '#dadddb')
  face.addColorStop(1, '#b4b8b6')
  c.fillStyle = face
  c.fillRect(0, 0, width, height)
  c.strokeStyle = '#7d8280'
  c.lineWidth = 3
  c.strokeRect(1.5, 1.5, width - 3, height - 3)
  c.textAlign = 'center'
  c.textBaseline = 'middle'
  const arrows = [...(up ? [['▲', height * (down ? 0.3 : 0.5)]] : []), ...(down ? [['▼', height * (up ? 0.7 : 0.5)]] : [])]
  for (const [arrow, y] of arrows) {
    c.beginPath()
    c.arc(width / 2, y, 30, 0, Math.PI * 2)
    c.fillStyle = lit ? AMBER : '#f1f2f0'
    c.fill()
    c.lineWidth = 3
    c.strokeStyle = lit ? '#c97a12' : '#6f7573'
    c.stroke()
    c.fillStyle = lit ? '#3a2606' : '#2c3235'
    c.font = '700 28px system-ui, sans-serif'
    c.fillText(arrow, width / 2, y + 1)
  }
  map.needsUpdate = true
}

// `lift` says where the shaft is on the lot (x, z), how large the car is (w, d), which way
// its door faces (r, in degrees) and where it stops: [{ level, y, at, out, half, gate }].
export function buildLift(lift) {
  const { w, d } = lift
  const levels = lift.stops.map((stop) => stop.level)
  const top = Math.max(...levels)
  const bottom = Math.min(...levels)
  const car = new THREE.Group()
  car.position.set(lift.x, lift.stops[0].y, lift.z)
  car.rotation.y = (lift.r ?? 0) * Math.PI / 180

  // ---- The car ----------------------------------------------------------------------
  const b = new Batch()
  const steel = hairline()
  const kick = darkSteel()
  const upper = laminate()
  b.box(finishMaterial('stone-floor'), 0, 0.02, 0, w, 0.04, d)
  // The sill the doors run in, with its grooves.
  b.box(steel, 0, 0.043, d / 2 - 0.035, DOOR + 0.12, 0.008, 0.07)
  for (const z of [-0.012, 0.012]) b.box(kick, 0, 0.048, d / 2 - 0.035 + z, DOOR + 0.1, 0.003, 0.007)
  for (const side of [-1, 1]) {
    const x = side * (w / 2 - SKIN / 2)
    b.box(kick, x, 0.06, 0, SKIN, 0.12, d)
    b.box(steel, x, 0.535, 0, SKIN, 0.83, d)
    b.box(upper, x, (0.95 + HEIGHT) / 2, 0, SKIN, HEIGHT - 0.95, d)
    // The joints between the panels, and a handrail on its brackets.
    for (const z of [-d / 6, d / 6]) b.box(seam(), side * (w / 2 - SKIN - 0.002), (0.95 + HEIGHT) / 2, z, 0.004, HEIGHT - 0.95, 0.008)
    b.box(seam(), side * (w / 2 - SKIN - 0.002), 0.95, 0, 0.004, 0.012, d)
    b.box(steel, side * (w / 2 - SKIN - 0.065), 0.85, -0.06, 0.035, 0.035, d - 0.5)
    for (const z of [-d / 2 + 0.3, -0.06, d / 2 - 0.42]) b.box(steel, side * (w / 2 - SKIN - 0.035), 0.85, z, 0.06, 0.018, 0.018)
    // The panels beside the doors.
    b.box(steel, side * (w / 4 + DOOR / 4), HEIGHT / 2, d / 2 - SKIN / 2, w / 2 - DOOR / 2, HEIGHT, SKIN)
  }
  b.box(kick, 0, 0.06, -d / 2 + SKIN / 2, w, 0.12, SKIN)
  b.box(steel, 0, 0.535, -d / 2 + SKIN / 2, w, 0.83, SKIN)
  b.box(upper, 0, (0.95 + HEIGHT) / 2, -d / 2 + SKIN / 2, w, HEIGHT - 0.95, SKIN)
  b.box(steel, 0, 0.85, -d / 2 + SKIN + 0.065, w - 0.36, 0.035, 0.035)
  for (const x of [-w / 2 + 0.3, 0, w / 2 - 0.3]) b.box(steel, x, 0.85, -d / 2 + SKIN + 0.035, 0.018, 0.018, 0.06)
  // A mirror on the back wall: someone in a wheelchair sees the doors behind them in it.
  b.box(kick, 0, 1.52, -d / 2 + SKIN + 0.004, w * 0.62 + 0.03, 0.98, 0.006)
  b.box(material('#aab6ba', '#ffffff', { roughness: 0.06, metalness: 1 }), 0, 1.52, -d / 2 + SKIN + 0.009, w * 0.62, 0.95, 0.004)
  // Over the doors.
  b.box(steel, 0, (2.1 + HEIGHT) / 2, d / 2 - SKIN / 2, DOOR, HEIGHT - 2.1, SKIN)
  // The ceiling: a panel of light, four lamps in its corners and the slots of the fan.
  b.box(material('#f4f2ec', '#ffffff', { roughness: 0.7 }), 0, HEIGHT + 0.02, 0, w, 0.04, d)
  b.box(glow('#fff6e0', 1.25), 0, HEIGHT - 0.006, 0, w * 0.46, 0.012, d * 0.42)
  for (const x of [-1, 1]) for (const z of [-1, 1]) b.cylinder(glow('#fff3d6', 1.5), x * w * 0.37, HEIGHT - 0.012, z * d * 0.37, 0.045, 0.012, 12)
  for (let slot = -2; slot <= 2; slot++) b.box(kick, slot * 0.035, HEIGHT - 0.004, -d * 0.36, 0.014, 0.008, 0.16)
  b.build(car, { cast: false, where: 'in' })

  // The doors of the car itself, which travel with it.
  const leaves = [-1, 1].map((side) => {
    const leaf = new THREE.Group()
    const panel = new Batch()
    panel.box(steel, 0, 1.05, 0, DOOR / 2 + 0.012, 2.1, 0.026)
    panel.box(kick, -side * (DOOR / 4), 1.05, 0.014, 0.006, 2.1, 0.002)
    panel.build(leaf, { cast: false, where: 'in' })
    leaf.position.set(side * DOOR / 4, 0, d / 2 + 0.018)
    car.add(leaf)
    return { leaf, side }
  })

  // ---- Indicators and buttons ----------------------------------------------------------
  const indicator = board(192, 96)
  const layout = carButtons(levels)
  const panel = board(layout.width, layout.height)
  const panelWidth = 0.17
  const panelHeight = panelWidth * layout.height / layout.width
  // On the panel to the right of the doors, for someone who stands in the car facing them.
  const panelAt = { x: -(w / 4 + DOOR / 4), y: 1.24, z: d / 2 - SKIN - 0.004 }
  const panelMesh = plane(panel.map, panelWidth, panelHeight, 0.86)
  panelMesh.position.set(panelAt.x, panelAt.y, panelAt.z)
  panelMesh.rotation.y = Math.PI
  car.add(panelMesh)
  const over = plane(indicator.map, 0.26, 0.13)
  over.position.set(0, 2.2, d / 2 - SKIN - 0.004)
  over.rotation.y = Math.PI
  car.add(over)

  const halls = new Map()
  let shown = { key: '' }
  const calls = new Set()

  function paint(state) {
    paintIndicator(indicator, state.shown, state.heading)
    paintCarPanel(panel, layout, state)
    for (const [level, hall] of halls) paintHallPanel(hall.board, { up: level < top, down: level > bottom, lit: state.calls.has(level) })
  }

  return {
    car,
    // What stands on a landing: the indicator over the doors and the call buttons beside them.
    // `low` belongs with what is below the height walls are cut at, `high` with what is above.
    hall(stop) {
      const low = new THREE.Group()
      const high = new THREE.Group()
      const [ox, oz] = stop.out
      const right = [oz, -ox]
      const turn = Math.atan2(ox, oz)
      const face = (stop.gate?.r ?? 0.08) + 0.012
      const steelPlate = hairline()
      const plates = new Batch()
      const lamp = plane(indicator.map, 0.24, 0.12)
      const lampAt = [stop.at[0] + ox * (face + 0.006), stop.y + 2.26, stop.at[1] + oz * (face + 0.006)]
      plates.box(steelPlate, stop.at[0] + ox * face, lampAt[1], stop.at[1] + oz * face, 0.3, 0.16, 0.012, turn)
      lamp.position.set(...lampAt)
      lamp.rotation.y = turn
      high.add(lamp)
      plates.build(high, { cast: false, where: 'in' })
      const buttons = board(128, 256)
      const centre = [stop.at[0] + right[0] * (stop.half + 0.2), stop.y + 1.12, stop.at[1] + right[1] * (stop.half + 0.2)]
      const mesh = plane(buttons.map, 0.1, 0.2, 0.86)
      mesh.position.set(centre[0] + ox * (face + 0.004), centre[1], centre[2] + oz * (face + 0.004))
      mesh.rotation.y = turn
      low.add(mesh)
      const back = new Batch()
      back.box(steelPlate, centre[0] + ox * (face - 0.002), centre[1], centre[2] + oz * (face - 0.002), 0.115, 0.215, 0.01, turn)
      back.build(low, { cast: false, where: 'in' })
      halls.set(stop.level, { board: buttons, centre, out: [ox, oz], right, width: 0.1, height: 0.2, y: stop.y })
      paintHallPanel(buttons, { up: stop.level < top, down: stop.level > bottom, lit: calls.has(stop.level) })
      return { low, high }
    },
    setCar(y) {
      car.position.y = y
    },
    // How far the doors of the car stand open, from 0 to 1.
    setDoor(amount) {
      for (const { leaf, side } of leaves) leaf.position.x = side * (DOOR / 4 + amount * (DOOR / 2 - 0.03))
    },
    // Shows what the lift is doing: `state` is { shown, heading, calls (storeys asked for), at, open }.
    show(state) {
      const key = `${state.shown}|${state.heading}|${[...state.calls].sort().join()}|${state.at}|${state.open}`
      if (key === shown.key) return
      shown = { key }
      calls.clear()
      for (const level of state.calls) calls.add(level)
      paint({ ...state, calls })
    },
    // The button a ray points at, if any: { type: 'floor' | 'open' | 'close' | 'hall', level, distance }.
    // The ray is given in the frame of the lot, as the car and the landings are.
    pick(origin, direction, reach = 2.6) {
      let best = null
      const offer = (hit, distance) => {
        if (distance > 0.05 && distance < reach && (!best || distance < best.distance)) best = { ...hit, distance }
      }
      // Into the frame of the car, whose doors face its +z.
      const turn = car.rotation.y
      const cos = Math.cos(turn)
      const sin = Math.sin(turn)
      const local = (x, z) => [x * cos - z * sin, x * sin + z * cos]
      const [lx, lz] = local(origin.x - car.position.x, origin.z - car.position.z)
      const [dx, dz] = local(direction.x, direction.z)
      // (The panel faces into the car: it is read from inside, looking towards the doors.)
      if (dz > 1e-4) {
        const t = (panelAt.z - lz) / dz
        const px = lx + dx * t
        const py = origin.y - car.position.y + direction.y * t
        const u = (panelAt.x + panelWidth / 2 - px) / panelWidth * layout.width
        const v = (panelAt.y + panelHeight / 2 - py) / panelHeight * layout.height
        const button = layout.buttons.find((entry) => Math.hypot(entry.x - u, entry.y - v) <= entry.r * 1.25)
        if (button) offer({ type: button.type, level: button.level }, t)
      }
      for (const [level, hall] of halls) {
        const facing = direction.x * hall.out[0] + direction.z * hall.out[1]
        if (facing > -1e-4) continue
        const t = ((hall.centre[0] - origin.x) * hall.out[0] + (hall.centre[2] - origin.z) * hall.out[1]) / facing
        const along = (origin.x + direction.x * t - hall.centre[0]) * hall.right[0] + (origin.z + direction.z * t - hall.centre[2]) * hall.right[1]
        const up = origin.y + direction.y * t - hall.centre[1]
        if (Math.abs(along) <= hall.width / 2 + 0.03 && Math.abs(up) <= hall.height / 2 + 0.03) offer({ type: 'hall', level }, t)
      }
      return best
    },
    dispose() {
      for (const picture of [indicator, panel, ...[...halls.values()].map((hall) => hall.board)]) picture.map.dispose()
    },
  }
}
