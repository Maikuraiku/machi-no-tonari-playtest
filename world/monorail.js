// The monorail as it is seen, heard and ridden: the beam on its piers, a train of glass-walled
// cars that sit astride it, the boards of lights in the cars and on the platforms, the
// announcements, and the way a resident steps in at a station and is carried along.
//
// How the train runs is decided in monorail-line.js, from the clock alone; this file only
// shows where it is. The train has no driver (ATO), so both its ends are windows.
import * as THREE from 'three'
import { BODY } from './design.js?v=online-1794946480502'
import { windowGlass } from './glass.js?v=online-1794946480502'
import { Batch, disposeGroup, glow, material } from './kit.js?v=online-1794946480502'
import { BEAM, CAR, announcement, carDisplay, carOffsets, createLine, piersOf, platformDisplay } from './monorail-line.js?v=online-1794946480502'

export { planTrial } from './stations.js?v=online-1794946480502'

const HALF = CAR.width / 2
const LONG = CAR.length / 2
const FLOOR = CAR.floor
const paint = (colour, roughness = 0.5, metalness = 0) => material(colour, '#ffffff', { roughness, metalness })

// ---- Boards of lights ----------------------------------------------------------------

// A board of light-emitting dots, `cols` by `rows` of them. Text is drawn small and then
// shown dot by dot, the way such a board really makes its letters.
function createBoard(cols, rows) {
  const source = document.createElement('canvas')
  source.width = cols
  source.height = rows
  const pen = source.getContext('2d', { willReadFrequently: true })
  const scale = 5
  const canvas = document.createElement('canvas')
  canvas.width = cols * scale
  canvas.height = rows * scale
  const out = canvas.getContext('2d')
  const map = new THREE.CanvasTexture(canvas)
  map.colorSpace = THREE.SRGBColorSpace
  const face = new THREE.MeshBasicMaterial({ map, toneMapped: false })
  let shown = null
  return {
    material: face,
    // Shows these lines, one above the other, each in its own colour.
    show(lines, colours = ['#ffb23e', '#8dff9a']) {
      const key = lines.join('|')
      if (key === shown) return
      shown = key
      pen.clearRect(0, 0, cols, rows)
      pen.textBaseline = 'middle'
      pen.textAlign = 'center'
      const high = rows / lines.length
      lines.forEach((text, index) => {
        let size = Math.floor(high * 0.88)
        const font = (px) => `700 ${px}px "Yu Gothic UI", "Hiragino Sans", "Noto Sans JP", "Meiryo", sans-serif`
        pen.font = font(size)
        const wide = pen.measureText(text).width
        if (wide > cols - 4) pen.font = font(Math.max(6, Math.floor(size * (cols - 4) / wide)))
        pen.fillStyle = colours[index % colours.length]
        pen.fillText(text, cols / 2, high * (index + 0.5) + 0.5)
      })
      const data = pen.getImageData(0, 0, cols, rows).data
      out.fillStyle = '#08090a'
      out.fillRect(0, 0, canvas.width, canvas.height)
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const at = (y * cols + x) * 4
          out.fillStyle = data[at + 3] > 96 ? `rgb(${data[at]},${data[at + 1]},${data[at + 2]})` : '#1b1d1f'
          out.beginPath()
          out.arc((x + 0.5) * scale, (y + 0.5) * scale, scale * 0.4, 0, Math.PI * 2)
          out.fill()
        }
      }
      map.needsUpdate = true
    },
    dispose() {
      map.dispose()
      face.dispose()
    },
  }
}

// A board hung where people can read it: its case, and the lights on one face or on both.
function hangBoard(board, width, height, both = false, rods = 0) {
  const group = new THREE.Group()
  const batch = new Batch()
  batch.box(paint('#2a2e31', 0.5, 0.3), 0, 0, 0, width + 0.08, height + 0.08, 0.09)
  // (A board over a platform hangs from the ceiling on two rods.)
  for (const x of rods ? [-width * 0.35, width * 0.35] : []) batch.box(paint('#9aa0a3', 0.4, 0.7), x, height / 2 + 0.04 + rods / 2, 0, 0.025, rods, 0.025)
  batch.build(group, { cast: false })
  for (const side of both ? [1, -1] : [1]) {
    const lights = new THREE.Mesh(new THREE.PlaneGeometry(width, height), board.material)
    lights.position.z = side * 0.047
    if (side < 0) lights.rotation.y = Math.PI
    group.add(lights)
  }
  return group
}

// ---- The beam and its piers -----------------------------------------------------------

// The concrete beam a train sits astride, with the rails on its sides that feed the train,
// carried on piers about 22 m apart. `clear` are stretches of the line ([from, to], in metres
// along it) where no pier may stand: the way into a station.
function buildTrack(line, clear = []) {
  const group = new THREE.Group()
  const batch = new Batch()
  const concrete = material('concrete', '#d6d4cd')
  const pier = material('concrete', '#c6c4bd')
  const feeder = paint('#6a4b35', 0.6, 0.4)
  const { way, y } = line
  const turnOf = (spot) => Math.atan2(spot.dx, spot.dz)
  const joints = piersOf(way.length, clear)
  const piers = []
  // The beam: one length to a span, a finger's width apart at the joints; on a curve it is
  // made of short straight pieces.
  for (let index = 0; index < joints.length - 1; index++) {
    const [from, to] = [joints[index] + 0.02, joints[index + 1] - 0.02]
    const bent = Math.abs(turnOf(way.spot(from + 0.1)) - turnOf(way.spot(to - 0.1))) > 1e-3
    const pieces = bent ? Math.ceil((to - from) / 2) : 1
    for (let piece = 0; piece < pieces; piece++) {
      const a = way.spot(from + (to - from) * piece / pieces)
      const b = way.spot(from + (to - from) * (piece + 1) / pieces)
      const long = Math.hypot(b.x - a.x, b.z - a.z) + (bent ? 0.02 : 0)
      const turn = Math.atan2(b.x - a.x, b.z - a.z)
      const [mx, mz] = [(a.x + b.x) / 2, (a.z + b.z) / 2]
      batch.box(concrete, mx, y - BEAM.height / 2, mz, BEAM.width, BEAM.height, long, turn)
      for (const side of [-1, 1]) {
        const out = side * (BEAM.width / 2 + 0.035)
        batch.box(feeder, mx + Math.cos(turn) * out, y - 0.62, mz - Math.sin(turn) * out, 0.05, 0.09, long, turn)
      }
    }
  }
  // The piers: a footing, a column, and a head the beams rest on.
  for (const at of joints) {
    const spot = way.spot(at)
    const turn = turnOf(spot)
    const under = y - BEAM.height
    batch.box(pier, spot.x, 0.12, spot.z, 2.0, 0.24, 2.0, turn)
    batch.box(pier, spot.x, (under - 0.8) / 2, spot.z, 1.3, under - 0.8, 1.3, turn)
    batch.box(pier, spot.x, under - 0.4, spot.z, 2.0, 0.8, 1.5, turn)
    piers.push({ x: spot.x, z: spot.z, w: 1.4, d: 1.4, r: turn * 180 / Math.PI })
  }
  // A buffer closes each end of the line.
  for (const [at, back] of [[0, 1], [way.length, -1]]) {
    const spot = way.spot(at)
    const turn = turnOf(spot)
    batch.box(paint('#3a3f44', 0.6, 0.3), spot.x + spot.dx * back * 0.3, y + 0.3, spot.z + spot.dz * back * 0.3, BEAM.width, 0.6, 0.5, turn)
    batch.box(glow('#d0302b', 0.8), spot.x + spot.dx * back * 0.56, y + 0.36, spot.z + spot.dz * back * 0.56, 0.3, 0.3, 0.02, turn)
  }
  batch.build(group, { where: 'out' })
  return { group, piers }
}

// The roof over the track at a station, carried out from the building on steel brackets, and
// a screen of glass hanging from its far edge down past the floor of the train: with the
// building it closes the platform in, and the train can be seen through it from the street.
function buildShed(line, stop) {
  const { shed } = stop
  const batch = new Batch()
  const panes = new Batch()
  const steel = paint('#c9cdcf', 0.35, 0.75)
  const middle = line.way.spot(stop.at + (shed.from + shed.to) / 2)
  const turn = Math.atan2(middle.dx, middle.dz)
  const side = stop.side
  // A spot `s` along the line from the middle of the train and `l` to its left, at height y.
  const at = (s, l, y) => {
    const spot = line.way.spot(stop.at + s)
    return new THREE.Vector3(spot.x + spot.dz * l, y, spot.z - spot.dx * l)
  }
  const near = side * shed.near
  const far = -side * shed.far
  const wide = shed.near + shed.far
  const long = shed.to - shed.from
  const centre = at((shed.from + shed.to) / 2, (near + far) / 2, shed.roof - 0.11)
  batch.box(paint('#e9ebea', 0.6, 0.1), centre.x, centre.y, centre.z, wide, 0.22, long, turn)
  // The fascia along its far edge, and brackets every bay.
  const fascia = at((shed.from + shed.to) / 2, far, shed.roof - 0.3)
  batch.box(steel, fascia.x, fascia.y, fascia.z, 0.08, 0.6, long, turn)
  const bays = Math.max(1, Math.round(long / 2.1))
  for (let bay = 0; bay <= bays; bay++) {
    const s = shed.from + long * bay / bays
    const top = at(s, (near + far) / 2, shed.roof - 0.32)
    batch.box(steel, top.x, top.y, top.z, wide, 0.2, 0.12, turn)
    // A mullion of the screen.
    const post = at(s, far, (shed.base + shed.roof - 0.22) / 2)
    batch.box(steel, post.x, post.y, post.z, 0.07, shed.roof - 0.22 - shed.base, 0.1, turn)
    if (bay === bays) continue
    const s1 = shed.from + long * (bay + 1) / bays
    const outward = at(0, far - side, 0).sub(at(0, far, 0))
    panes.quad(windowGlass('rail'), at(s + 0.05, far, shed.base + 0.05), at(s1 - 0.05, far, shed.base + 0.05), at(s1 - 0.05, far, shed.roof - 0.4), at(s + 0.05, far, shed.roof - 0.4), outward)
  }
  // The foot of the screen.
  const foot = at((shed.from + shed.to) / 2, far, shed.base)
  batch.box(steel, foot.x, foot.y, foot.z, 0.09, 0.1, long, turn)
  const group = new THREE.Group()
  batch.build(group, { where: 'out' })
  for (const mesh of panes.build(group, { cast: false })) mesh.renderOrder = 1
  return group
}

// ---- A car -----------------------------------------------------------------------------

// Where the walls of a car are solid along its side, between its doorways and its ends, as
// [from, to] measured from its middle.
const BAYS = [[-LONG, CAR.doors[0] - CAR.doorWidth / 2], [CAR.doors[0] + CAR.doorWidth / 2, CAR.doors[1] - CAR.doorWidth / 2], [CAR.doors[1] + CAR.doorWidth / 2, LONG]]

// One car, drawn about the middle of its length on top of the beam: x to the left of the way
// the line runs, y up from the top of the beam, z along the line. `front` and `back` say
// whether that end of the car is an end of the train (a window) or joins the next car.
// Returns the car and the leaves of its doors.
function buildCar({ front, back, boards }) {
  const car = new THREE.Group()
  const outside = new Batch()
  const inside = new Batch()
  const panes = new Batch()
  const white = paint('#f1f2f0', 0.42, 0.12)
  const accent = paint('#1e8f8a', 0.45, 0.12)
  const under = paint('#3a4046', 0.6, 0.25)
  const roof = paint('#b9bcbd', 0.55, 0.2)
  const dark = paint('#1f2326', 0.5, 0.2)
  const steel = paint('#c9cdcf', 0.3, 0.8)
  const glass = windowGlass('near')
  const sill = FLOOR + 0.45
  const head = FLOOR + 1.95
  const eaves = CAR.roof - 0.35
  const V = (x, y, z) => new THREE.Vector3(x, y, z)

  for (const side of [-1, 1]) {
    const x = side * HALF
    const out = V(side, 0, 0)
    // The skirts that hide the wheels, the coloured band, and the wall up to the windows.
    outside.box(under, side * (HALF - 0.03), (0.3 - CAR.skirt) / 2, 0, 0.06, CAR.skirt + 0.3, CAR.length)
    outside.box(accent, side * (HALF - 0.03), 0.525, 0, 0.062, 0.45, CAR.length)
    for (const [from, to] of BAYS) {
      const long = to - from
      const mid = (from + to) / 2
      outside.box(white, side * (HALF - 0.035), (0.75 + sill) / 2, mid, 0.07, sill - 0.75, long)
      // The glass, from the seats to the roof, with a post where two panes meet.
      const count = Math.max(1, Math.round(long / 1.8))
      const ends = [from === -LONG ? from + 0.34 : from + 0.1, to === LONG ? to - 0.34 : to - 0.1]
      for (let pane = 0; pane < count; pane++) {
        const z0 = ends[0] + (ends[1] - ends[0]) * pane / count + 0.03
        const z1 = ends[0] + (ends[1] - ends[0]) * (pane + 1) / count - 0.03
        panes.quad(glass, V(x - side * 0.02, sill, z0), V(x - side * 0.02, sill, z1), V(x - side * 0.02, head, z1), V(x - side * 0.02, head, z0), out)
        if (pane) outside.box(dark, side * (HALF - 0.035), (sill + head) / 2, z0 - 0.03, 0.07, head - sill, 0.06)
      }
      for (const [z, wide] of [[from, from === -LONG ? 0.34 : 0.1], [to, to === LONG ? -0.34 : -0.1]]) {
        outside.box(white, side * (HALF - 0.035), (sill + head) / 2, z + wide / 2, 0.07, head - sill, Math.abs(wide))
      }
    }
    // Above the windows and the doors, and the wall under each doorway.
    outside.box(white, side * (HALF - 0.035), (head + eaves) / 2, 0, 0.07, eaves - head, CAR.length)
    for (const door of CAR.doors) outside.box(under, side * (HALF - 0.03), 0.94, door, 0.062, 0.38, CAR.doorWidth)
    // The shoulder of the roof.
    outside.quad(roof, V(x, eaves, -LONG), V(x, eaves, LONG), V(side * 0.95, CAR.roof, LONG), V(side * 0.95, CAR.roof, -LONG), V(side * 0.4, 1, 0))
    // The wheels that grip the sides of the beam, seen from below between beam and skirt.
    for (const bogie of [-4.9, 4.9]) outside.box(dark, side * (BEAM.width / 2 + 0.34), -0.6, bogie, 0.56, 1.1, 2.3)
  }
  outside.quad(roof, V(-0.95, CAR.roof, -LONG), V(-0.95, CAR.roof, LONG), V(0.95, CAR.roof, LONG), V(0.95, CAR.roof, -LONG), V(0, 1, 0))
  for (const z of [-3.1, 3.1]) outside.box(paint('#a9adae', 0.6, 0.2), 0, CAR.roof + 0.13, z, 1.6, 0.26, 2.4)
  // The floor, and under it the running wheels in their frames.
  outside.box(under, 0, FLOOR - 0.06, 0, CAR.width, 0.12, CAR.length)
  for (const bogie of [-4.9, 4.9]) outside.box(dark, 0, 0.52, bogie, CAR.width - 0.2, 0.9, 2.5)

  // The two ends.
  for (const [end, open] of [[1, front], [-1, back]]) {
    const z = end * LONG
    const out = V(0, 0, end)
    if (open) {
      // An end of the train: a window as wide as the car, lights below it, the name of the
      // place the train is bound for above it.
      outside.box(white, 0, (0.75 + sill) / 2, z - end * 0.035, CAR.width, sill - 0.75, 0.07)
      outside.box(accent, 0, 0.525, z - end * 0.03, CAR.width, 0.45, 0.062)
      outside.box(under, 0, (0.3 - CAR.skirt) / 2, z - end * 0.03, CAR.width, CAR.skirt + 0.3, 0.06)
      for (const x of [-HALF + 0.11, HALF - 0.11]) outside.box(white, x, (sill + head) / 2, z - end * 0.035, 0.22, head - sill, 0.07)
      outside.box(white, 0, (head + eaves) / 2, z - end * 0.035, CAR.width, eaves - head, 0.07)
      panes.quad(glass, V(-HALF + 0.22, sill, z - end * 0.02), V(HALF - 0.22, sill, z - end * 0.02), V(HALF - 0.22, head, z - end * 0.02), V(-HALF + 0.22, head, z - end * 0.02), out)
      for (const x of [-0.95, 0.95]) {
        outside.box(glow('#fff6dc', 1.1), x, sill - 0.2, z + end * 0.002, 0.26, 0.1, 0.01)
        outside.box(glow('#d0302b', 0.6), x * 0.72, sill - 0.2, z + end * 0.002, 0.12, 0.08, 0.01)
      }
      const bound = hangBoard(boards.bound, 1.3, 0.2)
      bound.position.set(0, (head + eaves) / 2, z + end * 0.012)
      bound.rotation.y = end > 0 ? 0 : Math.PI
      car.add(bound)
    } else {
      // The end that joins the next car: a wall with a way through, and the bellows round it.
      for (const x of [-1, 1]) outside.box(white, x * (HALF + 0.55) / 2, (FLOOR + eaves) / 2, z - end * 0.035, HALF - 0.55, eaves - FLOOR, 0.07)
      outside.box(white, 0, (FLOOR + 2.0 + eaves) / 2, z - end * 0.035, 1.1, eaves - FLOOR - 2.0, 0.07)
      for (const x of [-0.6, 0.6]) outside.box(dark, x, FLOOR + 1.0, z + end * CAR.gap / 4, 0.08, 2.1, CAR.gap / 2)
      outside.box(dark, 0, FLOOR + 2.08, z + end * CAR.gap / 4, 1.28, 0.08, CAR.gap / 2)
      outside.box(dark, 0, FLOOR - 0.04, z + end * CAR.gap / 4, 1.28, 0.08, CAR.gap / 2)
    }
  }

  // Indoors: the floor, the ceiling with its lights, long seats under the windows, poles by
  // the doors, rails overhead, and a board over every door.
  inside.slab(paint('#5e6f7d', 0.7), -HALF + 0.07, -LONG + 0.07, HALF - 0.07, LONG - 0.07, FLOOR + 0.002)
  inside.box(paint('#eceeed', 0.6), 0, CAR.ceiling + 0.03, 0, CAR.width - 0.14, 0.06, CAR.length - 0.14)
  for (const x of [-0.5, 0.5]) inside.box(glow('#fff9ec', 1.25), x, CAR.ceiling - 0.004, 0, 0.14, 0.012, CAR.length - 1.2)
  const cloth = material('carpet', '#3f6f8f')
  for (const side of [-1, 1]) {
    for (const [from, to] of BAYS) {
      const z0 = from === -LONG ? from + (back ? 0.75 : 0.25) : from + 0.3
      const z1 = to === LONG ? to - (front ? 0.75 : 0.25) : to - 0.3
      if (z1 - z0 < 0.6) continue
      const mid = (z0 + z1) / 2
      inside.box(cloth, side * (HALF - 0.32), FLOOR + 0.36, mid, 0.46, 0.12, z1 - z0)
      inside.box(paint('#d9dcdc', 0.6), side * (HALF - 0.32), FLOOR + 0.15, mid, 0.42, 0.3, z1 - z0)
      inside.box(cloth, side * (HALF - 0.11), FLOOR + 0.62, mid, 0.08, 0.4, z1 - z0)
      for (const z of [z0, z1]) inside.box(steel, side * (HALF - 0.32), FLOOR + 0.7, z, 0.5, 0.56, 0.03)
    }
    inside.box(steel, side * 0.66, FLOOR + 1.9, 0, 0.03, 0.03, CAR.length - 1.4)
    for (const door of CAR.doors) {
      for (const z of [door - 0.76, door + 0.76]) inside.cylinder(steel, side * (HALF - 0.56), FLOOR, z, 0.017, CAR.ceiling - FLOOR, 8)
      const sign = hangBoard(boards.car, 0.9, 0.16)
      sign.position.set(side * (HALF - 0.085), FLOOR + 2.02, door)
      sign.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2
      car.add(sign)
    }
  }
  outside.build(car, { where: 'out' })
  inside.build(car, { where: 'in', cast: false })
  for (const mesh of panes.build(car, { cast: false })) mesh.renderOrder = 1

  // The doors: two leaves of glass to a doorway, which slide apart along the outside of the wall.
  const leaves = []
  for (const side of [-1, 1]) {
    for (const door of CAR.doors) {
      for (const half of [-1, 1]) {
        const batch = new Batch()
        const wide = CAR.doorWidth / 2
        const frame = (x0, x1, y0, y1) => batch.box(steel, 0, (y0 + y1) / 2, (x0 + x1) / 2, 0.035, y1 - y0, x1 - x0)
        frame(-wide / 2, -wide / 2 + 0.05, 0, CAR.doorHeight)
        frame(wide / 2 - 0.05, wide / 2, 0, CAR.doorHeight)
        frame(-wide / 2, wide / 2, 0, 0.18)
        frame(-wide / 2, wide / 2, CAR.doorHeight - 0.07, CAR.doorHeight)
        batch.quad(glass, V(0, 0.18, -wide / 2 + 0.05), V(0, 0.18, wide / 2 - 0.05), V(0, CAR.doorHeight - 0.07, wide / 2 - 0.05), V(0, CAR.doorHeight - 0.07, -wide / 2 + 0.05), V(side, 0, 0))
        const leaf = new THREE.Group()
        for (const mesh of batch.build(leaf, { cast: false })) if (mesh.material === glass) mesh.renderOrder = 1
        leaf.position.set(side * (HALF + 0.02), FLOOR, door + half * wide / 2)
        car.add(leaf)
        leaves.push({ leaf, side, shut: door + half * wide / 2, slide: half * (wide - 0.03) })
      }
    }
  }
  return { car, leaves }
}

// ---- The monorail of a town -------------------------------------------------------------

export function createTransit({ sound = null } = {}) {
  const group = new THREE.Group()
  const boards = { car: createBoard(160, 28), bound: createBoard(144, 22) }
  let line = null
  let track = null
  let piers = []
  let cars = []
  let platforms = []
  let state = null
  let before = null
  let key = ''

  function clear() {
    if (track) {
      group.remove(track)
      disposeGroup(track)
    }
    for (const { car } of cars) {
      group.remove(car)
      disposeGroup(car)
    }
    for (const platform of platforms) {
      for (const sign of platform.signs) {
        group.remove(sign)
        disposeGroup(sign)
      }
      platform.board.dispose()
    }
    track = null
    piers = []
    cars = []
    platforms = []
    line = null
    state = null
    before = null
  }

  // Lays the line: `spec` as createLine takes it (see monorail-line.js), or null for none.
  function setLine(spec) {
    const next = spec ? JSON.stringify(spec) : ''
    if (next === key) return
    key = next
    clear()
    if (!spec) return
    line = createLine(spec)
    const built = buildTrack(line, spec.clear ?? [])
    track = built.group
    piers = built.piers
    for (const stop of line.stops) if (stop.shed) track.add(buildShed(line, stop))
    group.add(track)
    const offsets = carOffsets(line.cars)
    cars = offsets.map((offset, index) => {
      const built = buildCar({ front: index === offsets.length - 1, back: index === 0, boards })
      group.add(built.car)
      return { ...built, offset, index }
    })
    platforms = line.stops.map((stop) => {
      const board = createBoard(176, 52)
      const signs = (stop.boards ?? []).map((spot) => {
        const sign = hangBoard(board, 1.5, 0.45, true, 0.16)
        const heading = line.way.spot(stop.at)
        sign.position.set(spot.x, spot.y, spot.z)
        // Across the platform, to be read by someone walking along it.
        sign.rotation.y = Math.atan2(heading.dx, heading.dz)
        group.add(sign)
        return sign
      })
      return { stop, board, signs }
    })
  }

  const clock = () => Date.now() / 1000

  // Where a car is: the spot on the line under its middle and the way it faces.
  function placeOf(car, s) {
    const spot = line.way.spot(s + car.offset)
    return { x: spot.x, z: spot.z, turn: Math.atan2(spot.dx, spot.dz), dx: spot.dx, dz: spot.dz }
  }

  // Moves the train to where the clock says it is, opens and shuts its doors, changes what
  // the boards show and says what is to be said. `listener` is where the resident is:
  // { x, y, z, ride } with `ride` set while they are aboard.
  function update(listener = null) {
    if (!line) return
    const now = clock()
    state = line.stateAt(now)
    for (const car of cars) {
      const place = placeOf(car, state.s)
      car.place = place
      car.car.position.set(place.x, line.y, place.z)
      car.car.rotation.y = place.turn
      const side = state.phase === 'dwell' ? state.stop.side : 0
      for (const entry of car.leaves) entry.leaf.position.z = entry.shut + (entry.side === side ? entry.slide * state.doors : 0)
    }
    boards.car.show(carDisplay(line, state), ['#ffb23e', '#ffffff'])
    boards.bound.show([line.boundFor(state).name], ['#ffb23e'])
    for (const platform of platforms) platform.board.show(platformDisplay(line, state, platform.stop))
    // What happened since the last look: chimes and announcements, for whoever is near enough.
    if (before !== null && sound && listener) {
      for (const event of line.eventsBetween(before, now)) {
        const said = announcement(line, event)
        if (!said) continue
        const aboard = Boolean(listener.ride)
        let volume = 0
        if (aboard && said.where !== 'platform') volume = 1
        else if (!aboard && said.where !== 'car' && said.at) {
          const spot = line.way.spot(said.at.at)
          const far = Math.hypot(listener.x - spot.x, listener.z - spot.z, (listener.y - (said.at.floor ?? line.y + FLOOR)) * 2)
          volume = Math.max(0, 1 - far / 26)
        }
        if (volume <= 0.05) continue
        if (said.chime) sound.play(said.chime, volume)
        if (said.text) sound.say(said.text, { volume })
      }
    }
    before = now
  }

  // ---- Riding ---------------------------------------------------------------------------

  const local = (car, x, z) => {
    const { place } = car
    const [rx, rz] = [x - place.x, z - place.z]
    // Along the line (z of the car) and to its left (x of the car).
    return [rx * place.dz - rz * place.dx, rx * place.dx + rz * place.dz]
  }
  const world = (car, lx, lz) => {
    const { place } = car
    return [place.x + lx * place.dz + lz * place.dx, place.z - lx * place.dx + lz * place.dz]
  }
  // Where someone can stand in a car: the aisle between the seats, the space by each pair of
  // doors, and the way through to the next car.
  function standing(car, lx, lz) {
    const reach = BODY
    if (Math.abs(lx) <= 0.98 - reach && Math.abs(lz) <= LONG - 0.3 - reach) return true
    if (CAR.doors.some((door) => Math.abs(lz - door) <= 0.9 - reach) && Math.abs(lx) <= HALF - 0.1 - reach) return true
    const through = (end) => Math.abs(lx) <= 0.55 - reach && lz * end >= LONG - 0.7 && lz * end <= LONG + CAR.gap / 2 + 0.05
    return (car.index < cars.length - 1 && through(1)) || (car.index > 0 && through(-1))
  }
  const berthed = () => state?.phase === 'dwell' && state.doors > 0.85

  return {
    group, setLine,
    update,
    // The line that is laid, if any, and where its train is.
    get line() {
      return line
    },
    // The piers, as boxes a walker cannot pass ({ x, z, w, d, r } with r in degrees).
    get piers() {
      return piers
    },
    // How far the platform doors of a station stand open (0 to 1): as far as the doors of
    // the train that stands there. `lot` is the id of the station's lot.
    platformDoors(lot) {
      return state?.phase === 'dwell' && state.stop.lot === lot ? state.doors : 0
    },
    // Stepping off the edge of a platform at (x, z), `y` up: into the train, if a doorway of
    // a standing train with its doors open is there. Returns the ride, or null.
    board(x, z, y) {
      if (!line || !berthed() || Math.abs(line.y + FLOOR - y) > 0.4) return null
      const side = state.stop.side
      for (const car of cars) {
        const [lx, lz] = local(car, x, z)
        const door = CAR.doors.find((entry) => Math.abs(lz - entry) <= CAR.doorWidth / 2 - 0.12)
        if (door === undefined || lx * side < HALF - 0.5 || lx * side > HALF + 0.75) continue
        return { car: car.index, x: side * (HALF - 0.5), z: Math.min(door + 0.38, Math.max(door - 0.38, lz)) }
      }
      return null
    },
    // Where a rider is in the town, and the height of the floor they stand on.
    spotOf(ride) {
      const [x, z] = world(cars[ride.car], ride.x, ride.z)
      return { x, z, y: line.y + FLOOR }
    },
    // Whether a ride is still good: the line may have been taken up meanwhile.
    riding: (ride) => Boolean(line && ride && cars[ride.car]?.place),
    // A step of (dx, dz) by someone aboard. They stay aboard (the ride is changed and true is
    // returned), or they step out through an open doorway, and where they come out is
    // returned as { x, y, z }.
    walk(ride, dx, dz) {
      let car = cars[ride.car]
      const { place } = car
      const [sx, sz] = [dx * place.dz - dz * place.dx, dx * place.dx + dz * place.dz]
      for (const [mx, mz] of [[sx, sz], [sx, 0], [0, sz]]) {
        const [nx, nz] = [ride.x + mx, ride.z + mz]
        if (!standing(car, nx, nz)) continue
        ride.x = nx
        ride.z = nz
        break
      }
      // Through to the next car.
      const shift = CAR.length + CAR.gap
      if (ride.z > LONG + CAR.gap / 2 && car.index < cars.length - 1) Object.assign(ride, { car: car.index + 1, z: ride.z - shift })
      else if (ride.z < -LONG - CAR.gap / 2 && car.index > 0) Object.assign(ride, { car: car.index - 1, z: ride.z + shift })
      car = cars[ride.car]
      // Out of a doorway, on the side of the platform, while the doors stand open.
      if (berthed()) {
        const side = state.stop.side
        const [tx, tz] = [ride.x + sx, ride.z + sz]
        const door = CAR.doors.find((entry) => Math.abs(tz - entry) <= CAR.doorWidth / 2 - 0.12)
        if (door !== undefined && tx * side > HALF - 0.1 - BODY) {
          const [x, z] = world(car, side * (HALF + 0.85), tz)
          return { x, y: line.y + FLOOR, z }
        }
      }
      return true
    },
    dispose() {
      key = ''
      clear()
      boards.car.dispose()
      boards.bound.dispose()
    },
  }
}
