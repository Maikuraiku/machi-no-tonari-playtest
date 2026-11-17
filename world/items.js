// Furniture and garden things, each drawn around its own middle: x across, z towards its
// front, standing on y = 0. Sizes follow the catalogue in design.js.
import * as THREE from 'three'
import { ITEMS, hash } from './design.js?v=online-1794946480502'
import { windowGlass } from './glass.js?v=online-1794946480502'
import { glass, glow, material } from './kit.js?v=online-1794946480502'

const wood = (tint = '#b08a62') => material('wood', tint)
const paint = (colour, roughness = 0.6, metalness = 0) => material(colour, '#ffffff', { roughness, metalness })
const white = () => paint('#f4f2ec', 0.5)
// Woven cloth, for upholstery, bedding, rugs and clothes.
const cloth = (colour) => material('carpet', colour)
const steel = () => paint('#70777a', 0.45, 0.7)
const iron = () => paint('#3d4447', 0.6, 0.5)
const dark = () => paint('#2b3035', 0.5)
const screen = () => paint('#15181a', 0.2)
const FABRICS = ['#7c93a8', '#a88b7c', '#8aa184', '#b3899a', '#c2a56b', '#6f7f93']
const GARMENTS = ['#dda995', '#9fba98', '#dfb184', '#ab9fbd', '#d69698', '#647991']
const BOOKS = ['#a8574e', '#56789a', '#d9b25a', '#5f8a6b', '#8a6aa0', '#e2ddcf']

function legs(batch, colour, width, depth, height, thick = 0.05) {
  for (const x of [-1, 1]) {
    for (const z of [-1, 1]) batch.box(colour, x * (width / 2 - thick), height / 2, z * (depth / 2 - thick), thick, height, thick)
  }
}

// A wheel standing on its tread, its axle along x.
function wheel(batch, x, y, z, radius, width) {
  const tyre = paint('#1b1c1e', 0.9)
  const rim = paint('#b9bcbd', 0.4, 0.8)
  const ring = (side, r) => Array.from({ length: 12 }, (_, index) => {
    const angle = index / 12 * Math.PI * 2
    return new THREE.Vector3(x + side * width / 2, y + Math.sin(angle) * r, z + Math.cos(angle) * r)
  })
  const [inner, outer] = [ring(-1, radius), ring(1, radius)]
  for (let index = 0; index < 12; index++) {
    const next = (index + 1) % 12
    batch.quad(tyre, inner[index], inner[next], outer[next], outer[index], new THREE.Vector3(0, inner[index].y + inner[next].y - 2 * y, inner[index].z + inner[next].z - 2 * z))
  }
  for (const side of [-1, 1]) {
    const cap = (points, colour) => {
      const turn = points[1].clone().sub(points[0]).cross(points[2].clone().sub(points[0])).x * side
      batch.face(colour, turn >= 0 ? points : [...points].reverse())
    }
    cap(ring(side, radius), tyre)
    cap(ring(side * 1.02, radius * 0.6), rim)
  }
}

// The yellow of tactile paving, with its dots 75 mm apart (the texture is laid in metres).
let tactile = null
function tactileMaterial() {
  if (tactile) return tactile
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const pen = canvas.getContext('2d')
  pen.fillStyle = '#d9a91c'
  pen.fillRect(0, 0, 64, 64)
  const dot = pen.createRadialGradient(28, 28, 2, 32, 32, 20)
  dot.addColorStop(0, '#f6d35a')
  dot.addColorStop(0.75, '#e4b52a')
  dot.addColorStop(1, '#b8890f')
  pen.fillStyle = dot
  pen.beginPath()
  pen.arc(32, 32, 19, 0, Math.PI * 2)
  pen.fill()
  const map = new THREE.CanvasTexture(canvas)
  map.colorSpace = THREE.SRGBColorSpace
  map.wrapS = map.wrapT = THREE.RepeatWrapping
  map.repeat.set(1 / 0.075, 1 / 0.075)
  map.anisotropy = 4
  tactile = new THREE.MeshStandardMaterial({ map, roughness: 0.7 })
  return tactile
}

// What every ticket gate has: a plinth, and a top with the pad a card is touched on at each
// end, a slot for a paper ticket and a small screen beside it.
function gateBase(b) {
  b.box(paint('#2e3236', 0.6), 0, 0.05, 0, 0.17, 0.1, 1.46)
}
function gateTop(b) {
  b.box(paint('#1c2023', 0.28, 0.3), 0, 0.985, 0, 0.19, 0.09, 1.5)
  for (const end of [-1, 1]) {
    b.box(paint('#2a2f33', 0.3, 0.3), 0, 1.038, end * 0.5, 0.16, 0.016, 0.24).box(glow('#2f7df0', 1.2), 0, 1.048, end * 0.5, 0.11, 0.004, 0.15)
      .box(paint('#e6c229', 0.5), 0, 1.032, end * 0.68, 0.11, 0.006, 0.03).box(glow('#cfe6d8', 0.6), 0, 1.034, end * 0.27, 0.12, 0.004, 0.12)
  }
}

const DRAW = {
  sofa(b, pick) {
    const fabric = cloth(pick(FABRICS))
    b.box(fabric, 0, 0.21, 0.04, 1.5, 0.3, 0.64).box(fabric, 0, 0.5, -0.28, 1.5, 0.56, 0.16)
    for (const x of [-0.68, 0.68]) b.box(fabric, x, 0.3, 0.04, 0.14, 0.56, 0.64)
    for (const x of [-0.31, 0.31]) b.box(cloth(pick(FABRICS, 1)), x, 0.41, 0.06, 0.58, 0.12, 0.52)
    legs(b, iron(), 1.44, 0.66, 0.07, 0.04)
  },
  armchair(b, pick) {
    const fabric = cloth(pick(FABRICS))
    b.box(fabric, 0, 0.22, 0.04, 0.78, 0.3, 0.66).box(fabric, 0, 0.52, -0.3, 0.78, 0.56, 0.14)
    for (const x of [-0.33, 0.33]) b.box(fabric, x, 0.3, 0.04, 0.12, 0.54, 0.66)
  },
  'table-low'(b) {
    b.box(wood(), 0, 0.355, 0, 0.95, 0.05, 0.55)
    legs(b, wood('#8f6a48'), 0.95, 0.55, 0.33)
  },
  tv(b) {
    b.box(wood('#8f6a48'), 0, 0.21, 0, 1.3, 0.42, 0.38).box(screen(), 0, 0.82, 0, 1.06, 0.62, 0.04)
      .box(dark(), 0, 0.47, 0, 0.3, 0.1, 0.16).box(glow('#3b5a78', 0.35), 0, 0.82, 0.022, 0.98, 0.54, 0.004)
  },
  shelf(b) {
    const frame = wood('#9a7650')
    for (const x of [-0.43, 0.43]) b.box(frame, x, 0.9, 0, 0.04, 1.8, 0.3)
    b.box(frame, 0, 0.9, -0.14, 0.86, 1.8, 0.02)
    for (let level = 0; level <= 5; level++) b.box(frame, 0, 0.02 + level * 0.352, 0, 0.86, 0.04, 0.3)
    for (let level = 0; level < 5; level++) {
      let x = -0.4
      for (let book = 0; x < 0.34; book++) {
        const wide = 0.035 + hash(level, book, 3) * 0.04
        const tall = 0.2 + hash(level, book, 5) * 0.1
        b.box(paint(BOOKS[Math.floor(hash(level, book) * BOOKS.length)], 0.8), x + wide / 2, 0.04 + level * 0.352 + tall / 2, 0.01, wide, tall, 0.2)
        x += wide + 0.004
        if (hash(level, book, 9) > 0.86) x += 0.1
      }
    }
  },
  cabinet(b) {
    b.box(wood('#a8825a'), 0, 0.425, 0, 0.9, 0.85, 0.4).box(wood('#8f6a48'), 0, 0.86, 0, 0.94, 0.03, 0.44)
    for (const x of [-0.22, 0.22]) b.box(wood('#b89064'), x, 0.42, 0.203, 0.42, 0.74, 0.01).box(iron(), x * 0.2, 0.46, 0.215, 0.02, 0.1, 0.02)
  },
  rug(b, pick) {
    b.box(cloth(pick(FABRICS)), 0, 0.01, 0, 1.8, 0.02, 1.2).box(cloth(pick(FABRICS, 2)), 0, 0.012, 0, 1.5, 0.02, 0.9)
  },
  plant(b) {
    b.cylinder(paint('#b9845e', 0.9), 0, 0, 0, 0.15, 0.3, 10, 0.19).cylinder(paint('#4a3a2c', 1), 0, 0.28, 0, 0.17, 0.02, 10)
    const leaf = paint('#4f7d4a', 0.9)
    for (let blade = 0; blade < 7; blade++) {
      const angle = blade / 7 * Math.PI * 2
      b.box(leaf, Math.cos(angle) * 0.1, 0.62 + (blade % 3) * 0.12, Math.sin(angle) * 0.1, 0.07, 0.72 + (blade % 2) * 0.2, 0.02, -angle)
    }
  },
  lamp(b) {
    b.cylinder(iron(), 0, 0, 0, 0.13, 0.03, 10).cylinder(iron(), 0, 0.03, 0, 0.015, 1.2, 6)
      .cylinder(glow('#fff0cf', 1.1), 0, 1.2, 0, 0.17, 0.28, 12, 0.12)
  },
  'ceiling-light'(b) {
    b.cylinder(white(), 0, 0.05, 0, 0.22, 0.05, 16).cylinder(glow('#fff4dc', 1.6), 0, 0, 0, 0.19, 0.05, 16)
  },
  'table-dining'(b) {
    b.box(wood('#c19a6b'), 0, 0.7, 0, 1.4, 0.04, 0.8)
    legs(b, wood('#9a7650'), 1.36, 0.76, 0.68, 0.06)
  },
  chair(b) {
    const frame = wood('#9a7650')
    b.box(frame, 0, 0.44, 0.02, 0.42, 0.04, 0.42).box(frame, 0, 0.68, -0.19, 0.4, 0.34, 0.03)
    legs(b, frame, 0.42, 0.44, 0.42, 0.035)
  },
  kitchen(b) {
    b.box(white(), 0, 0.42, 0, 1.5, 0.84, 0.58).box(paint('#cfd2d2', 0.3, 0.6), 0, 0.855, 0, 1.52, 0.03, 0.6)
      .box(paint('#3a3f42', 0.3, 0.6), -0.36, 0.866, 0, 0.5, 0.012, 0.4).box(paint('#1c1e1f', 0.4), 0.4, 0.872, 0.02, 0.5, 0.012, 0.36)
      .cylinder(steel(), -0.36, 0.87, -0.2, 0.012, 0.22, 6).box(white(), 0, 1.72, -0.12, 1.5, 0.5, 0.34)
    for (const x of [-0.5, 0, 0.5]) b.box(iron(), x, 0.6, 0.295, 0.14, 0.015, 0.012)
  },
  fridge(b) {
    const body = paint('#dfe3e6', 0.3, 0.5)
    b.box(body, 0, 0.88, 0, 0.62, 1.76, 0.64).box(paint('#b9bec2', 0.3, 0.5), 0, 1.16, 0.322, 0.6, 0.012, 0.004)
      .box(iron(), -0.24, 1.4, 0.335, 0.025, 0.36, 0.025).box(iron(), -0.24, 0.8, 0.335, 0.025, 0.4, 0.025)
  },
  bed(b, pick) {
    b.box(wood(), 0, 0.15, 0, 1.0, 0.3, 1.95).box(wood('#8f6a48'), 0, 0.45, -0.955, 1.0, 0.9, 0.04)
      .box(cloth('#f4f2ec'), 0, 0.38, 0.01, 0.94, 0.16, 1.86).box(cloth(pick(FABRICS)), 0, 0.43, 0.3, 0.97, 0.1, 1.25)
      .box(cloth('#f4f2ec'), 0, 0.5, -0.68, 0.6, 0.1, 0.36)
  },
  'bed-double'(b, pick) {
    b.box(wood(), 0, 0.15, 0, 1.5, 0.3, 1.95).box(wood('#8f6a48'), 0, 0.45, -0.955, 1.5, 0.9, 0.04)
      .box(cloth('#f4f2ec'), 0, 0.38, 0.01, 1.44, 0.16, 1.86).box(cloth(pick(FABRICS)), 0, 0.43, 0.3, 1.47, 0.1, 1.25)
    for (const x of [-0.37, 0.37]) b.box(cloth('#f4f2ec'), x, 0.5, -0.68, 0.56, 0.1, 0.36)
  },
  desk(b) {
    b.box(wood('#c19a6b'), 0, 0.7, 0, 1.1, 0.04, 0.55).box(wood('#a8825a'), 0.36, 0.5, 0, 0.34, 0.36, 0.5)
    for (const x of [-0.52, 0.52]) b.box(wood('#9a7650'), x, 0.34, 0, 0.04, 0.68, 0.5)
  },
  wardrobe(b) {
    b.box(wood('#b89064'), 0, 0.95, 0, 1.0, 1.9, 0.55)
    for (const x of [-0.25, 0.25]) b.box(wood('#c9a37a'), x, 0.95, 0.278, 0.48, 1.8, 0.01).box(iron(), x * 0.16, 1.0, 0.29, 0.02, 0.16, 0.02)
  },
  chabudai(b) {
    b.cylinder(wood('#6e4b32'), 0, 0.27, 0, 0.5, 0.05, 20)
    for (const [x, z] of [[-0.28, -0.28], [0.28, -0.28], [0.28, 0.28], [-0.28, 0.28]]) b.cylinder(wood('#5e4030'), x, 0, z, 0.03, 0.27, 6)
  },
  zabuton(b, pick) {
    b.box(paint(pick(['#7c4a54', '#4f6a7c', '#6f7a4a', '#8a6a4f']), 1), 0, 0.04, 0, 0.5, 0.08, 0.5)
  },
  futon(b, pick) {
    b.box(cloth('#f4f2ec'), 0, 0.05, 0, 1.0, 0.1, 1.9).box(cloth(pick(FABRICS)), 0, 0.11, 0.26, 1.02, 0.08, 1.3).box(cloth('#f4f2ec'), 0, 0.13, -0.72, 0.5, 0.07, 0.3)
  },
  toilet(b) {
    b.box(white(), 0, 0.2, 0.12, 0.38, 0.4, 0.5).box(white(), 0, 0.56, -0.24, 0.42, 0.42, 0.18)
      .box(paint('#e6e4dc', 0.4), 0, 0.42, 0.12, 0.36, 0.04, 0.46)
  },
  bathtub(b) {
    b.box(white(), 0, 0.28, 0, 0.75, 0.56, 1.4).box(glass('#5f97a8'), 0, 0.5, 0, 0.62, 0.02, 1.26)
      .cylinder(steel(), 0.24, 0.56, -0.6, 0.015, 0.16, 6)
  },
  washbasin(b) {
    b.box(white(), 0, 0.4, 0, 0.6, 0.8, 0.45).box(paint('#e6e9ea', 0.2), 0, 0.82, 0.02, 0.5, 0.04, 0.34)
      .box(glass('#9fb9bd'), 0, 1.45, -0.21, 0.5, 0.7, 0.02).cylinder(steel(), 0, 0.84, -0.14, 0.012, 0.14, 6)
  },
  washer(b) {
    b.box(white(), 0, 0.45, 0, 0.6, 0.9, 0.6).cylinder(paint('#5f6b73', 0.2, 0.3), 0, 0.3, 0.26, 0.2, 0.36, 16)
      .box(dark(), 0, 0.82, 0.302, 0.5, 0.08, 0.004)
  },
  'shoe-box'(b) {
    b.box(wood('#a8825a'), 0, 0.45, 0, 1.0, 0.9, 0.34)
    for (const x of [-0.25, 0.25]) b.box(wood('#b89064'), x, 0.45, 0.173, 0.48, 0.8, 0.008)
  },
  boxes(b) {
    b.box(material('wood', '#c9a880'), -0.1, 0.3, -0.05, 0.6, 0.6, 0.6).box(material('wood', '#b8946c'), 0.08, 0.84, 0, 0.5, 0.48, 0.5, 0.2)
      .box(material('wood', '#d2b48c'), 0.26, 0.2, 0.2, 0.36, 0.4, 0.4, -0.3)
  },
  rack(b) {
    const pole = steel()
    for (const x of [-0.62, 0.62]) b.box(pole, x, 0.85, 0, 0.035, 1.7, 0.035).box(pole, x, 0.02, 0, 0.04, 0.04, 0.4)
    b.box(pole, 0, 1.68, 0, 1.26, 0.035, 0.035)
    for (let garment = 0; garment < 6; garment++) {
      b.box(cloth(GARMENTS[garment % GARMENTS.length]), -0.5 + garment * 0.2, 1.2, 0, 0.14, 0.82, 0.34)
    }
  },
  counter(b) {
    b.box(wood('#a8825a'), 0, 0.49, 0, 1.6, 0.98, 0.56).box(white(), 0, 1.0, 0, 1.68, 0.04, 0.64)
      .box(dark(), 0.5, 1.12, 0, 0.3, 0.2, 0.3).box(screen(), 0.5, 1.28, -0.06, 0.26, 0.16, 0.02)
  },
  mirror(b) {
    b.box(wood('#9a7650'), 0, 0.95, 0, 0.9, 1.9, 0.06).box(glass('#9fb9bd'), 0, 0.97, 0.035, 0.78, 1.72, 0.01)
  },
  'cafe-table'(b) {
    b.cylinder(wood('#c19a6b'), 0, 0.69, 0, 0.4, 0.035, 18).cylinder(iron(), 0, 0.02, 0, 0.035, 0.67, 8).cylinder(iron(), 0, 0, 0, 0.24, 0.025, 14)
  },
  stool(b, pick) {
    b.cylinder(cloth(pick(FABRICS)), 0, 0.4, 0, 0.17, 0.06, 14)
    for (let leg = 0; leg < 3; leg++) {
      const angle = leg / 3 * Math.PI * 2
      b.cylinder(iron(), Math.cos(angle) * 0.12, 0, Math.sin(angle) * 0.12, 0.015, 0.4, 6)
    }
  },
  'office-desk'(b) {
    b.box(white(), 0, 0.71, 0, 1.2, 0.035, 0.62)
    for (const x of [-0.57, 0.57]) b.box(dark(), x, 0.35, 0, 0.035, 0.7, 0.58)
    b.box(screen(), 0, 1.0, -0.16, 0.54, 0.33, 0.025).box(glow('#44627c', 0.4), 0, 1.0, -0.146, 0.5, 0.29, 0.004)
      .box(dark(), 0, 0.78, -0.16, 0.06, 0.12, 0.05).box(dark(), 0, 0.735, 0.12, 0.4, 0.015, 0.13)
  },
  'office-chair'(b, pick) {
    const fabric = paint(pick(['#3f4c5c', '#4a4a4c', '#5c3f3f', '#3f5c4a']), 0.95)
    b.box(fabric, 0, 0.46, 0, 0.46, 0.08, 0.44).box(fabric, 0, 0.78, -0.2, 0.42, 0.5, 0.06)
      .cylinder(iron(), 0, 0.06, 0, 0.025, 0.38, 8)
    for (let foot = 0; foot < 5; foot++) {
      const angle = foot / 5 * Math.PI * 2
      b.box(iron(), Math.cos(angle) * 0.14, 0.04, Math.sin(angle) * 0.14, 0.28, 0.035, 0.04, -angle)
    }
  },
  bench(b) {
    const slat = material('planks', '#c9b392')
    for (const z of [-0.16, 0, 0.16]) b.box(slat, 0, 0.45, z, 1.6, 0.045, 0.13)
    for (const y of [0.66, 0.82]) b.box(slat, 0, y, -0.25, 1.6, 0.12, 0.04)
    for (const x of [-0.68, 0.68]) b.box(iron(), x, 0.225, 0, 0.06, 0.45, 0.46).box(iron(), x, 0.66, -0.25, 0.05, 0.44, 0.05)
  },
  planter(b) {
    b.box(paint('#a8795a', 0.95), 0, 0.19, 0, 0.9, 0.38, 0.35).box(paint('#4a3a2c', 1), 0, 0.385, 0, 0.84, 0.01, 0.29)
    for (let flower = 0; flower < 7; flower++) {
      const x = -0.36 + flower * 0.12
      b.box(paint('#4f7d4a', 0.95), x, 0.47, (flower % 2) * 0.08 - 0.04, 0.09, 0.18, 0.09, flower)
        .box(paint(['#d4667a', '#e9b44c', '#f2ede4', '#b98fd0'][flower % 4], 0.9), x, 0.58, (flower % 2) * 0.08 - 0.04, 0.07, 0.06, 0.07, flower)
    }
  },
  hedge(b) {
    const leaf = material('grass', '#7f9a6a')
    b.box(leaf, 0, 0.55, 0, 1.6, 1.0, 0.46).box(leaf, 0.3, 1.07, 0.02, 0.8, 0.12, 0.36).box(leaf, -0.4, 1.06, -0.03, 0.6, 0.1, 0.32)
  },
  fence(b) {
    const post = material('planks', '#e9e2d2')
    for (const x of [-0.76, 0, 0.76]) b.box(post, x, 0.5, 0, 0.08, 1.0, 0.08)
    for (const y of [0.3, 0.78]) b.box(post, 0, y, 0, 1.6, 0.07, 0.04)
    for (let picket = 0; picket < 9; picket++) b.box(post, -0.68 + picket * 0.17, 0.52, 0.03, 0.09, 0.92, 0.02)
  },
  tree(b) {
    b.cylinder(material('bark'), 0, 0, 0, 0.09, 1.5, 8, 0.06)
    const leaf = material('grass', '#6f9a5c')
    for (const [x, y, z, size] of [[0, 2.2, 0, 1.3], [0.4, 1.8, 0.2, 0.9], [-0.35, 1.9, -0.25, 1.0], [0.1, 2.8, -0.1, 0.8]]) {
      b.cylinder(leaf, x, y - size / 2, z, size * 0.5, size * 0.5, 9, size * 0.62).cylinder(leaf, x, y, z, size * 0.62, size * 0.45, 9, size * 0.2)
    }
  },
  mailbox(b) {
    b.cylinder(iron(), 0, 0, 0, 0.03, 0.85, 8).box(paint('#b9352c', 0.5, 0.2), 0, 0.98, 0, 0.3, 0.24, 0.22)
      .box(dark(), 0, 1.04, 0.112, 0.2, 0.02, 0.004)
  },
  bicycle(b, pick) {
    const frame = paint(pick(['#b9352c', '#3f6b8a', '#4f7d4a', '#e2ddcf', '#2b3035']), 0.5, 0.4)
    for (const z of [-0.55, 0.55]) {
      for (let spoke = 0; spoke < 10; spoke++) {
        const angle = spoke / 10 * Math.PI * 2
        b.box(dark(), 0, 0.33 + Math.sin(angle) * 0.31, z + Math.cos(angle) * 0.31, 0.03, 0.2, 0.03, 0)
      }
    }
    b.box(frame, 0, 0.55, 0, 0.03, 0.03, 0.9).box(frame, 0, 0.72, -0.2, 0.03, 0.36, 0.03).box(frame, 0, 0.74, 0.48, 0.03, 0.44, 0.03)
      .box(dark(), 0, 0.92, -0.22, 0.14, 0.04, 0.24).box(iron(), 0, 0.98, 0.48, 0.46, 0.03, 0.03)
  },
  vending(b, pick) {
    const body = paint(pick(['#f2f2ee', '#c0392b', '#2f6fa8', '#f2f2ee']), 0.4, 0.2)
    b.box(body, 0, 0.925, 0, 1.0, 1.85, 0.7).box(glow('#eaf4ff', 0.9), 0, 1.3, 0.352, 0.84, 0.86, 0.004)
      .box(dark(), 0, 0.42, 0.352, 0.5, 0.16, 0.004).box(dark(), 0.32, 0.72, 0.352, 0.16, 0.12, 0.004)
    for (let row = 0; row < 3; row++) {
      for (let can = 0; can < 7; can++) {
        b.cylinder(paint(GARMENTS[(row * 3 + can) % GARMENTS.length], 0.4, 0.3), -0.36 + can * 0.12, 0.98 + row * 0.27, 0.34, 0.035, 0.13, 8)
      }
    }
  },
  // A small family car, its front towards +z.
  car(b, pick) {
    const body = paint(pick(['#e8e8e4', '#c9ccd0', '#3a4046', '#8fa3b5', '#b9a37f', '#a34a43', '#f1efe6']), 0.35, 0.35)
    const trim = paint('#1c1f22', 0.6)
    const pane = glass('#27323a')
    b.box(body, 0, 0.56, 0, 1.46, 0.52, 3.36).box(body, 0, 1.13, -0.18, 1.36, 0.64, 2.25)
    b.box(pane, 0, 1.17, 0.955, 1.2, 0.44, 0.02).box(pane, 0, 1.17, -1.315, 1.2, 0.42, 0.02)
    for (const x of [-0.688, 0.688]) b.box(pane, x, 1.19, -0.18, 0.02, 0.38, 1.9)
    b.box(trim, 0, 0.36, 1.66, 1.42, 0.2, 0.1).box(trim, 0, 0.36, -1.66, 1.42, 0.2, 0.1)
    for (const x of [-0.55, 0.55]) {
      b.box(glow('#fff4d8', 0.3), x, 0.7, 1.686, 0.26, 0.12, 0.02)
      b.box(paint('#a8322c', 0.4), x, 0.74, -1.686, 0.22, 0.14, 0.02)
      b.box(trim, x * 1.28, 1.02, 0.7, 0.14, 0.09, 0.05)
    }
    b.box(white(), 0, 0.44, 1.712, 0.33, 0.165, 0.01).box(white(), 0, 0.5, -1.712, 0.33, 0.165, 0.01)
    for (const x of [-0.64, 0.64]) for (const z of [1.08, -1.08]) wheel(b, x, 0.29, z, 0.29, 0.2)
  },
  // A dresser for crockery: cupboards below, glass doors above.
  cupboard(b) {
    const frame = white()
    b.box(frame, 0, 0.43, 0, 0.9, 0.86, 0.45).box(wood('#b08a62'), 0, 0.875, 0, 0.92, 0.03, 0.47)
    b.box(frame, 0, 1.4, -0.06, 0.9, 0.9, 0.33)
    for (const x of [-0.225, 0.225]) {
      b.box(glass('#5d7480'), x, 1.4, 0.108, 0.4, 0.8, 0.008).box(steel(), x * 0.2, 0.5, 0.232, 0.02, 0.12, 0.012)
    }
  },
  // A chest of drawers for a tatami room.
  tansu(b) {
    const body = wood('#7a5a44')
    b.box(body, 0, 0.65, 0, 0.9, 1.3, 0.45)
    for (let drawer = 0; drawer < 5; drawer++) {
      b.box(wood('#8a6850'), 0, 0.15 + drawer * 0.25, 0.228, 0.84, 0.22, 0.01)
      for (const x of [-0.2, 0.2]) b.box(iron(), x, 0.15 + drawer * 0.25, 0.238, 0.09, 0.02, 0.012)
    }
  },
  // The letter boxes of a block of flats.
  'mail-boxes'(b) {
    b.box(steel(), 0, 0.85, 0, 1.2, 0.9, 0.3)
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 4; column++) {
        b.box(paint('#d9dcd8', 0.4, 0.5), -0.45 + column * 0.3, 0.55 + row * 0.3, 0.152, 0.27, 0.27, 0.006)
        b.box(dark(), -0.45 + column * 0.3, 0.63 + row * 0.3, 0.158, 0.18, 0.02, 0.004)
      }
    }
    legs(b, steel(), 1.16, 0.26, 0.4, 0.04)
  },
  // An outdoor unit, its front towards +z and the wall behind it: 800 x 550 x 290 mm on a stand
  // 100 mm high (or on two brackets on the wall), the valve cover on its right, and the pipes
  // in an ivory cover up to the hole in the wall `thing.h` above the ground.
  'ac-unit'(b, pick, thing = {}) {
    const body = paint('#dedbd1', 0.55, 0.15)
    const dark = paint('#2a2d30', 0.6)
    const lift = 0.1
    if (thing.hung) {
      // Two steel brackets from the wall under the unit.
      for (const x of [-0.27, 0.27]) {
        b.box(paint('#c9ccc8', 0.4, 0.6), x, lift - 0.02, -0.06, 0.04, 0.04, 0.42)
        b.bar(paint('#c9ccc8', 0.4, 0.6), new THREE.Vector3(x, lift - 0.04, 0.12), new THREE.Vector3(x, -0.25, -0.26), 0.035, 0.035)
      }
    } else {
      for (const x of [-0.25, 0.25]) b.box(paint('#3a3d40', 0.7), x, lift / 2, 0, 0.07, lift, 0.42)
    }
    b.box(body, -0.03, lift + 0.275, -0.01, 0.8, 0.55, 0.27)
    // The fan grille: a round dark opening with the guard's rings across it.
    const disc = (radius, z, paintIt) => b.face(paintIt, Array.from({ length: 24 }, (_, index) => {
      const angle = -index / 24 * Math.PI * 2
      return new THREE.Vector3(-0.17 + Math.cos(angle) * radius, lift + 0.28 + Math.sin(angle) * radius, z)
    }))
    disc(0.21, 0.126, dark)
    disc(0.06, 0.13, paint('#4a4e52', 0.5))
    for (const radius of [0.09, 0.14, 0.19]) {
      for (let spoke = 0; spoke < 16; spoke++) {
        const a = spoke / 16 * Math.PI * 2
        const c = (spoke + 1) / 16 * Math.PI * 2
        b.bar(paint('#9a9890', 0.5, 0.3), new THREE.Vector3(-0.17 + Math.cos(a) * radius, lift + 0.28 + Math.sin(a) * radius, 0.132),
          new THREE.Vector3(-0.17 + Math.cos(c) * radius, lift + 0.28 + Math.sin(c) * radius, 0.132), 0.006, 0.006)
      }
    }
    // Louvres on the right of the front, and the valve cover on the right end.
    for (let slat = 0; slat < 8; slat++) b.box(paint('#c9c6bc', 0.6), 0.22, lift + 0.08 + slat * 0.055, 0.128, 0.24, 0.012, 0.012)
    b.box(body, 0.405, lift + 0.2, -0.02, 0.05, 0.3, 0.2)
    if (!thing.hung && thing.h) {
      // The pipe cover: across from the valves to the wall, then straight up it.
      const ivory = paint('#e8e2cf', 0.5)
      const wall = -0.27
      b.box(ivory, 0.405, lift + 0.12, (wall + 0.04 - 0.12) / 2, 0.075, 0.063, Math.abs(wall + 0.04 + 0.12))
      b.box(ivory, 0.405, (lift + 0.12 + thing.h) / 2, wall + 0.035, 0.075, thing.h - lift - 0.12, 0.063)
      b.box(ivory, 0.405, thing.h, wall + 0.05, 0.135, 0.07, 0.1)
    } else if (thing.hung) {
      b.box(paint('#e8e2cf', 0.5), 0.405, lift + 0.12, -0.16, 0.075, 0.063, 0.22)
    }
  },
  // 機能門柱: a post of dark aluminium 1.4 m high with the nameplate, the intercom with its
  // camera, the letterbox (its slot at 0.9 m) and a lamp on top, on a small concrete footing.
  'gate-post'(b, pick) {
    const metal = paint(pick(['#4d4741', '#2f3336', '#8a7a68', '#b9bdbd']), 0.45, 0.55)
    b.box(paint('#a9a79f', 0.9), 0, 0.03, 0, 0.36, 0.06, 0.22)
    b.box(metal, 0, 0.73, 0, 0.3, 1.34, 0.16)
    // Letterbox: the slot and its flap, a door for the post at the back.
    b.box(dark(), 0, 0.9, 0.081, 0.24, 0.035, 0.004).box(metal, 0, 0.93, 0.084, 0.25, 0.03, 0.01)
    b.box(paint('#9a948a', 0.5, 0.5), 0, 0.68, -0.081, 0.22, 0.36, 0.004)
    // Nameplate and intercom.
    b.box(paint('#e9e6dd', 0.35, 0.1), 0, 1.13, 0.082, 0.22, 0.08, 0.006)
    b.box(dark(), -0.05, 1.13, 0.086, 0.12, 0.012, 0.002)
    b.box(paint('#1d2023', 0.25, 0.3), 0, 1.3, 0.086, 0.1, 0.15, 0.02)
    b.box(paint('#3c4247', 0.15, 0.5), 0, 1.345, 0.097, 0.025, 0.025, 0.002).box(paint('#c9ccce', 0.3, 0.6), 0, 1.265, 0.097, 0.04, 0.04, 0.003)
    // The lamp on top.
    b.box(metal, 0, 1.415, 0, 0.3, 0.03, 0.18).box(glow('#fff1d6', 0.7), 0, 1.39, 0.06, 0.22, 0.02, 0.04)
  },
  // 自動改札機. The way through runs along z, past the cabinet on either side; a card is
  // touched on the pad at the end one walks in by.
  'ticket-gate'(b) {
    gateBase(b)
    const skin = paint('#c9cdcf', 0.36, 0.75)
    b.box(skin, 0, 0.52, 0, 0.19, 0.84, 1.42)
    // The ends are narrower, and carry the light that says whether this way is open.
    for (const end of [-1, 1]) {
      b.box(skin, 0, 0.5, end * 0.73, 0.15, 0.8, 0.06)
      b.box(glow('#27c46b', 1.3), 0, 0.78, end * 0.762, 0.09, 0.09, 0.004)
    }
    // The slots the flaps come out of, half way along.
    for (const side of [-1, 1]) b.box(dark(), side * 0.096, 0.5, 0.12, 0.004, 0.5, 0.05).box(dark(), side * 0.096, 0.5, -0.12, 0.004, 0.5, 0.05)
    b.box(paint('#3f6f9a', 0.5), 0, 0.3, 0, 0.194, 0.08, 1.42)
    gateTop(b)
  },
  // The same machine in a clear case, as some stations show it: the belts that carry a
  // ticket through, the motors, the boards and the wiring can all be seen.
  'ticket-gate-clear'(b) {
    gateBase(b)
    const post = paint('#d5d8d9', 0.3, 0.8)
    for (const z of [-0.74, -0.25, 0.25, 0.74]) for (const x of [-0.085, 0.085]) b.box(post, x, 0.52, z, 0.018, 0.84, 0.018)
    for (const x of [-0.085, 0.085]) b.box(post, x, 0.11, 0, 0.018, 0.018, 1.48)
    const pane = windowGlass('inner')
    for (const side of [-1, 1]) {
      b.face(pane, [new THREE.Vector3(side * 0.094, 0.1, -0.74), new THREE.Vector3(side * 0.094, 0.1, 0.74), new THREE.Vector3(side * 0.094, 0.94, 0.74), new THREE.Vector3(side * 0.094, 0.94, -0.74)])
    }
    for (const end of [-1, 1]) {
      b.face(pane, [new THREE.Vector3(-0.085, 0.1, end * 0.749), new THREE.Vector3(0.085, 0.1, end * 0.749), new THREE.Vector3(0.085, 0.94, end * 0.749), new THREE.Vector3(-0.085, 0.94, end * 0.749)])
      b.box(glow('#27c46b', 1.3), 0, 0.78, end * 0.752, 0.09, 0.09, 0.004)
    }
    // The ticket path: a deck with rollers and two belts along it, under the top.
    b.box(paint('#8d9498', 0.4, 0.7), 0, 0.84, 0, 0.13, 0.012, 1.3)
    for (let roller = 0; roller < 13; roller++) b.box(paint(roller % 2 ? '#2a2e31' : '#b9bec1', 0.5, 0.4), 0, 0.865, -0.6 + roller * 0.1, 0.12, 0.03, 0.03)
    for (const x of [-0.035, 0.035]) b.box(paint('#d98a2b', 0.8), x, 0.885, 0, 0.02, 0.006, 1.24)
    // Motors, the bin that takes used tickets, boards and a loom of wires.
    b.cylinder(paint('#5f666b', 0.45, 0.7), 0, 0.62, -0.5, 0.05, 0.16, 12).cylinder(paint('#5f666b', 0.45, 0.7), 0, 0.62, 0.5, 0.05, 0.16, 12)
      .box(paint('#3a3f44', 0.6), 0, 0.3, 0.42, 0.13, 0.3, 0.26).box(paint('#1f7a4a', 0.5), 0.02, 0.5, -0.05, 0.008, 0.3, 0.42)
      .box(paint('#1f7a4a', 0.5), -0.03, 0.34, -0.42, 0.008, 0.24, 0.3).box(paint('#c9ccce', 0.4, 0.6), -0.02, 0.6, 0.12, 0.06, 0.1, 0.16)
    for (const [x, colour] of [[-0.05, '#c0392b'], [-0.035, '#e6c229'], [-0.02, '#2f6fa8']]) b.box(paint(colour, 0.7), x, 0.2, -0.05, 0.01, 0.01, 1.1)
    gateTop(b)
  },
  // 券売機, standing against a wall: a screen to choose on, slots for coins, notes and a card,
  // and the tray the ticket drops into.
  'ticket-machine'(b) {
    b.box(paint('#e4e6e3', 0.45, 0.15), 0, 0.875, 0, 0.85, 1.75, 0.5).box(paint('#2f6fa8', 0.5), 0, 1.66, 0.252, 0.85, 0.14, 0.004)
      .box(dark(), 0, 1.22, 0.252, 0.6, 0.48, 0.006).box(glow('#bcd8ef', 0.5), 0, 1.22, 0.256, 0.52, 0.4, 0.004)
      .box(paint('#c9cccd', 0.35, 0.7), 0, 0.84, 0.262, 0.7, 0.2, 0.03).box(dark(), -0.2, 0.86, 0.279, 0.09, 0.012, 0.004)
      .box(dark(), 0.02, 0.86, 0.279, 0.16, 0.012, 0.004).box(glow('#2f7df0', 0.9), 0.24, 0.85, 0.279, 0.1, 0.07, 0.004)
      .box(dark(), 0, 0.6, 0.252, 0.34, 0.1, 0.02).box(paint('#b9bdbf', 0.4, 0.6), 0, 0.3, 0.252, 0.7, 0.4, 0.004)
  },
  'tactile-line'(b) {
    b.box(tactileMaterial(), 0, 0.004, 0, 0.3, 0.008, 2.4)
    b.box(paint('#e4b52a', 0.7), 0.12, 0.01, 0, 0.025, 0.006, 2.4)
  },
  // Four seats on a steel beam, as on any platform.
  'platform-bench'(b) {
    const seat = paint('#4f7396', 0.55)
    for (let place = 0; place < 4; place++) {
      const x = -0.675 + place * 0.45
      b.box(seat, x, 0.44, 0.03, 0.4, 0.04, 0.4).box(seat, x, 0.64, -0.19, 0.4, 0.34, 0.04)
    }
    b.box(steel(), 0, 0.39, 0, 1.76, 0.05, 0.08).box(steel(), 0, 0.6, -0.22, 1.76, 0.04, 0.03)
    for (const x of [-0.8, 0.8]) b.box(steel(), x, 0.2, 0, 0.05, 0.4, 0.05).box(steel(), x, 0.015, 0, 0.08, 0.03, 0.44)
  },
  lantern(b) {
    const stone = material('stone', '#c9c6bd')
    b.cylinder(stone, 0, 0, 0, 0.22, 0.12, 8).cylinder(stone, 0, 0.12, 0, 0.09, 0.55, 8).cylinder(stone, 0, 0.67, 0, 0.2, 0.08, 6)
      .box(glow('#ffe6b0', 0.7), 0, 0.88, 0, 0.2, 0.26, 0.2).cylinder(stone, 0, 1.02, 0, 0.3, 0.16, 6, 0.06)
  },
}

// Draws a catalogue item around the origin of `batch`. `x` and `z` only vary its colours.
// `thing` is the item itself, for what it says beyond its kind (how high its pipes go).
export function drawItem(batch, kind, x = 0, z = 0, thing = {}) {
  const draw = DRAW[kind]
  if (!draw) {
    const shape = ITEMS[kind] ?? { w: 0.5, d: 0.5, h: 0.5 }
    batch.box(paint('#b9b5aa'), 0, shape.h / 2, 0, shape.w, shape.h, shape.d)
    return
  }
  draw(batch, (options, salt = 0) => options[Math.floor(hash(x * 3.1 + salt, z * 7.3, kind.length) * options.length) % options.length], thing)
}
