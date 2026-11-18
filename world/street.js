// The furniture of a Japanese residential street, drawn to real measures: utility poles with
// everything they carry, the cables strung between them, the iron covers of manholes, and the
// 「止まれ」 painted on the road before a junction.
//
// A concrete pole is 12 m long, 2 m of it in the ground: 190 mm across at the top, thickening
// by 1 in 75 (about 320 mm at the ground). From the top down it carries the high-tension line
// (6600 V: three wires on insulators on a crossarm 1.5 m long, 0.3-0.8 m below the top), the
// low-tension line (100/200 V, on a rack about 1 m lower), now and then a transformer (a drum
// about 0.4 m across and 0.7 m high, just below that), then the cable-television line (about
// 6.4 m up) and the telephone cable (about 5 m up), each with a black closure here and there.
// Step bolts start about 2.5 m up, 450 mm apart and alternating; the number plate is about 3 m
// up. A pole at the end of a line is held by a stay wire with a yellow guard over its foot.
// Poles stand about 30 m apart.
import * as THREE from 'three'
import { glow, material } from './kit.js?v=online-1794980046418'

const V = (x, y, z) => new THREE.Vector3(x, y, z)

// Heights above the ground (metres) and offsets across the line from the middle of the pole.
const HIGH = { y: 9.72, across: [-0.62, 0.17, 0.62], sag: 0.45 }
const LOW = { y: [8.75, 8.55, 8.35], across: 0.34, sag: 0.4 }
const CABLE = [{ y: 6.4, across: 0.27, thick: 0.035, sag: 0.35 }, { y: 5.0, across: 0.27, thick: 0.05, sag: 0.3 }]

// A pole is { x, z, along: [ax, az] (unit, the way the line runs), across: [cx, cz] (unit, towards
// the road), transformer, light, stay: -1 | 0 | 1 (a stay wire behind or ahead of it) }.
// `spans` are pairs of poles that the cables run between.
export function drawPoles(batch, poles, spans) {
  const concrete = material('concrete', '#bebcb4')
  const steel = material('#6b7072', '#ffffff', { roughness: 0.5, metalness: 0.6 })
  const porcelain = material('#ecebe6', '#ffffff', { roughness: 0.3 })
  const black = material('#1d2022', '#ffffff', { roughness: 0.65 })
  const drum = material('#a6aaa9', '#ffffff', { roughness: 0.45, metalness: 0.35 })
  const plate = material('#f2f1ec', '#ffffff', { roughness: 0.5 })
  const yellow = material('#e6c02a', '#ffffff', { roughness: 0.5 })
  for (const pole of poles) {
    const { x, z } = pole
    const [ax, az] = pole.along
    const [cx, cz] = pole.across
    // A spot `a` along the line, `c` across it (towards the road), `y` up.
    const at = (a, c, y) => V(x + ax * a + cx * c, y, z + az * a + cz * c)
    const turn = Math.atan2(ax, az)
    batch.cylinder(concrete, x, 0, z, 0.162, 10, 14, 0.095)
    batch.cylinder(concrete, x, 10, z, 0.095, 0.04, 14, 0.06)
    // The high-tension crossarm with its braces, and an insulator for each wire.
    const arm = at(0, 0, 9.55)
    batch.box(steel, arm.x, arm.y, arm.z, 1.5, 0.075, 0.075, turn)
    for (const c of [-0.45, 0.45]) batch.bar(steel, at(0, c, 9.52), at(0, 0, 9.12), 0.03, 0.03)
    for (const c of HIGH.across) {
      const foot = at(0, c, 9.59)
      batch.cylinder(porcelain, foot.x, foot.y, foot.z, 0.055, 0.1, 10, 0.06)
      batch.cylinder(porcelain, foot.x, foot.y + 0.1, foot.z, 0.06, 0.03, 10, 0.03)
    }
    // The low-tension rack.
    const rack = at(0, 0.2, 8.55)
    batch.box(steel, rack.x, rack.y, rack.z, 0.06, 0.62, 0.06, turn)
    batch.bar(steel, at(0, 0.09, 8.55), at(0, 0.2, 8.55), 0.05, 0.05)
    for (const y of LOW.y) {
      const knob = at(0, 0.28, y)
      batch.cylinder(porcelain, knob.x, knob.y - 0.04, knob.z, 0.04, 0.08, 8)
    }
    // A transformer on the side away from the road, its two bushings on top.
    if (pole.transformer) {
      const body = at(0, -0.42, 7.05)
      batch.cylinder(drum, body.x, body.y, body.z, 0.21, 0.72, 16)
      batch.cylinder(drum, body.x, body.y + 0.72, body.z, 0.23, 0.05, 16, 0.2)
      for (const a of [-0.08, 0.08]) {
        const bush = at(a, -0.42, 7.82)
        batch.cylinder(porcelain, bush.x, bush.y, bush.z, 0.03, 0.14, 8, 0.02)
      }
      batch.bar(steel, at(0, -0.12, 7.55), at(0, -0.24, 7.55), 0.06, 0.12)
      batch.bar(steel, at(0, -0.12, 7.2), at(0, -0.24, 7.2), 0.06, 0.12)
      // The leads up to the high-tension line and down to the low.
      batch.bar(black, at(-0.08, -0.42, 7.96), at(-0.08, HIGH.across[0], HIGH.y - 0.02), 0.012, 0.012)
      batch.bar(black, at(0.08, -0.42, 7.96), at(0.08, 0.28, LOW.y[2]), 0.012, 0.012)
    }
    // The cables of the telephone and television companies on their brackets.
    for (const cable of CABLE) {
      batch.bar(steel, at(0, 0.09, cable.y + 0.06), at(0, cable.across, cable.y + 0.06), 0.04, 0.04)
    }
    // Step bolts, alternately on either side, and the number plates.
    for (let y = 2.55, side = 1; y < 9.1; y += 0.45, side = -side) {
      batch.bar(steel, at(side * 0.12, 0, y), at(side * 0.3, 0, y + 0.03), 0.02, 0.02)
    }
    const sign = at(0, 0.17, 3.0)
    batch.box(plate, sign.x, sign.y, sign.z, 0.12, 0.3, 0.012, turn + Math.PI / 2)
    batch.box(black, sign.x + cx * 0.007, sign.y + 0.05, sign.z + cz * 0.007, 0.09, 0.03, 0.004, turn + Math.PI / 2)
    const ntt = at(0, 0.17, 2.6)
    batch.box(material('#c23a2f', '#ffffff', { roughness: 0.5 }), ntt.x, ntt.y, ntt.z, 0.1, 0.2, 0.012, turn + Math.PI / 2)
    // A street light on some poles, about 4.5 m up, out over the road.
    if (pole.light) {
      batch.bar(steel, at(0, 0.1, 4.45), at(0, 0.85, 4.6), 0.045, 0.045)
      const lamp = at(0, 0.95, 4.58)
      batch.box(material('#d9dbd9', '#ffffff', { roughness: 0.4, metalness: 0.3 }), lamp.x, lamp.y, lamp.z, 0.16, 0.07, 0.42, turn + Math.PI / 2)
      batch.box(glow('#fff4de', 1.0), lamp.x, lamp.y - 0.04, lamp.z, 0.12, 0.012, 0.34, turn + Math.PI / 2)
    }
    // A stay wire from under the low-tension rack to an anchor 4 m away, the guard over its foot.
    if (pole.stay) {
      const top = at(0, 0, 8.0)
      const anchor = at(pole.stay * 4.0, 0, 0)
      batch.bar(material('#55595b', '#ffffff', { roughness: 0.5, metalness: 0.6 }), top, anchor, 0.014, 0.014)
      const guard = anchor.clone().lerp(top, 2.0 / top.distanceTo(anchor))
      batch.bar(yellow, anchor.clone().lerp(top, 0.02), guard, 0.068, 0.068)
      batch.box(concrete, anchor.x, 0.03, anchor.z, 0.3, 0.06, 0.3)
    }
  }
  // The cables between poles, sagging in the middle of each span.
  const wire = material('#26292b', '#ffffff', { roughness: 0.6 })
  const hang = (from, to, offsetFrom, offsetTo, y0, y1, sag, thick, paint) => {
    const steps = 6
    let before = null
    for (let step = 0; step <= steps; step++) {
      const t = step / steps
      const point = V(
        from.x + from.across[0] * offsetFrom + (to.x + to.across[0] * offsetTo - from.x - from.across[0] * offsetFrom) * t,
        y0 + (y1 - y0) * t - Math.sin(t * Math.PI) * sag,
        from.z + from.across[1] * offsetFrom + (to.z + to.across[1] * offsetTo - from.z - from.across[1] * offsetFrom) * t,
      )
      if (before) batch.bar(paint, before, point, thick, thick)
      before = point
    }
    return before
  }
  for (const [from, to] of spans) {
    HIGH.across.forEach((c) => hang(from, to, c, c, HIGH.y, HIGH.y, HIGH.sag, 0.018, wire))
    LOW.y.forEach((y) => hang(from, to, LOW.across, LOW.across, y, y, LOW.sag, 0.016, wire))
    for (const cable of CABLE) {
      hang(from, to, cable.across, cable.across, cable.y, cable.y, cable.sag, cable.thick, black)
      // A closure on the cable now and then, a metre or so from the pole.
      if ((Math.round(from.x * 3 + from.z * 7 + cable.y * 10) % 3 + 3) % 3 === 0) {
        const span = Math.hypot(to.x - from.x, to.z - from.z)
        const a = V(from.x + from.across[0] * cable.across, cable.y - 0.03, from.z + from.across[1] * cable.across)
        const dir = V((to.x - from.x) / span, 0, (to.z - from.z) / span)
        batch.bar(black, a.clone().addScaledVector(dir, 1.1), a.clone().addScaledVector(dir, 1.75), 0.17, 0.17)
      }
    }
  }
}

// ---- Things painted on and set into the road ------------------------------------------------

// An iron manhole cover 600 mm across in its frame, patterned so that tyres grip it.
function coverPicture() {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 256
  const pen = canvas.getContext('2d')
  pen.fillStyle = '#6a6c6b'
  pen.beginPath()
  pen.arc(128, 128, 127, 0, Math.PI * 2)
  pen.fill()
  pen.fillStyle = '#3e403f'
  pen.beginPath()
  pen.arc(128, 128, 108, 0, Math.PI * 2)
  pen.fill()
  pen.strokeStyle = '#5c5e5d'
  pen.lineWidth = 5
  for (let ring = 30; ring < 108; ring += 16) {
    pen.beginPath()
    pen.arc(128, 128, ring, 0, Math.PI * 2)
    pen.stroke()
  }
  for (let spoke = 0; spoke < 12; spoke++) {
    const angle = spoke / 12 * Math.PI * 2
    pen.beginPath()
    pen.moveTo(128 + Math.cos(angle) * 30, 128 + Math.sin(angle) * 30)
    pen.lineTo(128 + Math.cos(angle) * 106, 128 + Math.sin(angle) * 106)
    pen.stroke()
  }
  pen.fillStyle = '#56585a'
  pen.beginPath()
  pen.arc(128, 128, 24, 0, Math.PI * 2)
  pen.fill()
  const map = new THREE.CanvasTexture(canvas)
  map.colorSpace = THREE.SRGBColorSpace
  map.anisotropy = 4
  return map
}

// The covers of the manholes at `spots` ([{ x, z }]), lying flush in the road.
export function manholeMesh(spots) {
  const geometry = new THREE.CircleGeometry(0.36, 28)
  geometry.rotateX(-Math.PI / 2)
  const mesh = new THREE.InstancedMesh(geometry, new THREE.MeshStandardMaterial({
    map: coverPicture(), roughness: 0.55, metalness: 0.55, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  }), Math.max(1, spots.length))
  mesh.count = spots.length
  const matrix = new THREE.Matrix4()
  spots.forEach((spot, index) => mesh.setMatrixAt(index, matrix.makeRotationY(spot.turn ?? 0).setPosition(spot.x, 0.034, spot.z)))
  mesh.receiveShadow = true
  mesh.userData.ownMaterial = true
  return mesh
}

// 「止まれ」 as it is painted before a junction: three characters, each about 1.3 m wide and
// stretched to about 2 m along the road, read by the driver from the nearest one.
function stopPicture() {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 512
  const pen = canvas.getContext('2d')
  pen.clearRect(0, 0, 128, 512)
  pen.fillStyle = '#ffffff'
  pen.textAlign = 'center'
  pen.textBaseline = 'middle'
  pen.font = '900 120px "Yu Gothic UI", "Hiragino Sans", "Noto Sans JP", "Meiryo", sans-serif'
  // (The top of the picture is the end nearest the junction: れ, ま, 止 from there.)
  ;['れ', 'ま', '止'].forEach((character, index) => {
    pen.save()
    pen.translate(64, 512 * (index + 0.5) / 3)
    pen.scale(1, 1.42)
    pen.fillText(character, 0, 4)
    pen.restore()
  })
  const map = new THREE.CanvasTexture(canvas)
  map.colorSpace = THREE.SRGBColorSpace
  map.anisotropy = 8
  return map
}

// The legends at `spots` ([{ x, z, turn }], `turn` the way to the junction), each 1.3 m wide
// and 6 m long, lying on the road.
export function stopLegends(spots) {
  const positions = []
  const uvs = []
  const indices = []
  for (const { x, z, turn } of spots) {
    const [fx, fz] = [Math.sin(turn), Math.cos(turn)]
    const [sx, sz] = [fz, -fx]
    const start = positions.length / 3
    for (const [u, v] of [[0, 0], [1, 0], [1, 1], [0, 1]]) {
      const across = (u - 0.5) * 1.3
      const along = (v - 0.5) * 6
      positions.push(x + sx * across + fx * along, 0.047, z + sz * across + fz * along)
      uvs.push(1 - u, v)
    }
    indices.push(start, start + 2, start + 1, start, start + 3, start + 2)
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
    map: stopPicture(), transparent: false, alphaTest: 0.4, roughness: 0.7, side: THREE.DoubleSide,
    polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3,
  }))
  mesh.receiveShadow = true
  mesh.userData.ownMaterial = true
  return mesh
}
