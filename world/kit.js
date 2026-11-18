// Shared building blocks for the 3D town: a geometry batcher that maps textures in metres,
// and materials painted in code (no image files to ship). Every painted material comes as a
// set: colour, the relief of its surface (as a normal map, with the height kept for parallax),
// and how rough and how shaded each spot is.
import * as THREE from 'three'
import { CELL, CELLS, FINISHES, FRAME_COLORS, TILE, hash } from './design.js?v=online-1794980046418'

export { CELL, CELLS, TILE, hash }

export function noise2(x, y) {
  const xi = Math.floor(x)
  const yi = Math.floor(y)
  const xf = x - xi
  const yf = y - yi
  const u = xf * xf * (3 - 2 * xf)
  const v = yf * yf * (3 - 2 * yf)
  const a = hash(xi, yi)
  const b = hash(xi + 1, yi)
  const c = hash(xi, yi + 1)
  const d = hash(xi + 1, yi + 1)
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v
}

export function fbm(x, y, octaves = 4) {
  let sum = 0
  let amplitude = 0.5
  let frequency = 1
  for (let octave = 0; octave < octaves; octave++) {
    sum += amplitude * noise2(x * frequency, y * frequency)
    amplitude *= 0.5
    frequency *= 2
  }
  return sum
}

const up = new THREE.Vector3(0, 1, 0)
const edgeA = new THREE.Vector3()
const edgeB = new THREE.Vector3()
const normal = new THREE.Vector3()
const tangent = new THREE.Vector3()
const bitangent = new THREE.Vector3()

// Collects flat faces per material and turns them into one mesh each. Texture
// coordinates come from world position, so a material tiles in metres on any surface.
export class Batch {
  constructor() {
    this.parts = new Map()
    this.matrix = null
  }

  part(material) {
    let part = this.parts.get(material)
    if (!part) {
      part = { positions: [], normals: [], uvs: [], indices: [] }
      this.parts.set(material, part)
    }
    return part
  }

  // Everything drawn inside `draw` is moved to (x, y, z) and turned about the vertical axis.
  at(x, y, z, turn, draw) {
    const before = this.matrix
    const placed = new THREE.Matrix4().makeRotationY(turn).setPosition(x, y, z)
    this.matrix = before ? before.clone().multiply(placed) : placed
    draw(this)
    this.matrix = before
    return this
  }

  face(material, points) {
    if (this.matrix) points = points.map((point) => point.clone().applyMatrix4(this.matrix))
    const part = this.part(material)
    edgeA.subVectors(points[1], points[0])
    edgeB.subVectors(points[2], points[0])
    normal.crossVectors(edgeA, edgeB)
    if (normal.lengthSq() < 1e-12) return this
    normal.normalize()
    if (Math.abs(normal.y) > 0.999) {
      tangent.set(1, 0, 0)
      bitangent.set(0, 0, 1)
    } else {
      tangent.crossVectors(up, normal).normalize()
      bitangent.crossVectors(normal, tangent)
    }
    const start = part.positions.length / 3
    for (const point of points) {
      part.positions.push(point.x, point.y, point.z)
      part.normals.push(normal.x, normal.y, normal.z)
      part.uvs.push(point.dot(tangent), point.dot(bitangent))
    }
    for (let index = 1; index < points.length - 1; index++) part.indices.push(start, start + index, start + index + 1)
    return this
  }

  // A flat four-sided face that looks along `facing`, whichever way its corners were listed.
  quad(material, a, b, c, d, facing) {
    edgeA.subVectors(b, a)
    edgeB.subVectors(c, a)
    return this.face(material, normal.crossVectors(edgeA, edgeB).dot(facing) >= 0 ? [a, b, c, d] : [d, c, b, a])
  }

  // A level outline (points [x, z]) at height y, with holes cut out, facing up or down.
  shape(material, outline, holes, y, faceUp = true) {
    const contour = outline.map(([x, z]) => new THREE.Vector2(x, z))
    const gaps = holes.map((hole) => hole.map(([x, z]) => new THREE.Vector2(x, z)))
    const all = [...contour, ...gaps.flat()]
    const part = this.part(material)
    const start = part.positions.length / 3
    const point = new THREE.Vector3()
    for (const corner of all) {
      point.set(corner.x, y, corner.y)
      if (this.matrix) point.applyMatrix4(this.matrix)
      part.positions.push(point.x, point.y, point.z)
      part.normals.push(0, faceUp ? 1 : -1, 0)
      part.uvs.push(point.x, point.z)
    }
    for (const [a, b, c] of THREE.ShapeUtils.triangulateShape(contour, gaps)) {
      // In the x-z plane a triangle that turns clockwise (seen in x, z) faces up.
      const turn = (all[b].x - all[a].x) * (all[c].y - all[a].y) - (all[b].y - all[a].y) * (all[c].x - all[a].x)
      if ((turn < 0) === faceUp) part.indices.push(start + a, start + b, start + c)
      else part.indices.push(start + a, start + c, start + b)
    }
    return this
  }

  // A box centred on (x, y, z), optionally turned around the vertical axis.
  box(material, x, y, z, width, height, depth, turn = 0) {
    const cos = Math.cos(turn)
    const sin = Math.sin(turn)
    const corner = (dx, dy, dz) => new THREE.Vector3(
      x + dx * width / 2 * cos + dz * depth / 2 * sin,
      y + dy * height / 2,
      z - dx * width / 2 * sin + dz * depth / 2 * cos,
    )
    const c = [-1, 1].map((dx) => [-1, 1].map((dy) => [-1, 1].map((dz) => corner(dx, dy, dz))))
    this.face(material, [c[1][0][0], c[1][1][0], c[1][1][1], c[1][0][1]])
    this.face(material, [c[0][0][1], c[0][1][1], c[0][1][0], c[0][0][0]])
    this.face(material, [c[0][1][0], c[0][1][1], c[1][1][1], c[1][1][0]])
    this.face(material, [c[0][0][1], c[0][0][0], c[1][0][0], c[1][0][1]])
    this.face(material, [c[1][0][1], c[1][1][1], c[0][1][1], c[0][0][1]])
    this.face(material, [c[0][0][0], c[0][1][0], c[1][1][0], c[1][0][0]])
    return this
  }

  // A bar of rectangular section from one point to another, at any slope: `width` across,
  // `height` the other way (upwards, for a bar that lies level).
  bar(material, a, b, width, height = width) {
    const along = b.clone().sub(a)
    const length = along.length()
    if (length < 1e-5) return this
    along.divideScalar(length)
    const side = new THREE.Vector3().crossVectors(along, up)
    if (side.lengthSq() < 1e-8) side.set(1, 0, 0)
    side.normalize().multiplyScalar(width / 2)
    const rise = new THREE.Vector3().crossVectors(side, along).normalize().multiplyScalar(height / 2)
    const ring = (end) => [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([s, u]) => end.clone().addScaledVector(side, s).addScaledVector(rise, u))
    const p = ring(a)
    const q = ring(b)
    for (let index = 0; index < 4; index++) {
      const next = (index + 1) % 4
      this.quad(material, p[index], p[next], q[next], q[index], p[index].clone().add(p[next]).multiplyScalar(0.5).sub(a))
    }
    this.quad(material, p[0], p[1], p[2], p[3], along.clone().negate())
    this.quad(material, q[0], q[1], q[2], q[3], along)
    return this
  }

  // A flat panel lying on the ground plane at height y.
  slab(material, x0, z0, x1, z1, y) {
    this.face(material, [
      new THREE.Vector3(x0, y, z0), new THREE.Vector3(x0, y, z1),
      new THREE.Vector3(x1, y, z1), new THREE.Vector3(x1, y, z0),
    ])
    return this
  }

  cylinder(material, x, y, z, radius, height, sides = 10, topRadius = radius) {
    const ring = (r, level) => Array.from({ length: sides }, (_, index) => {
      const angle = index / sides * Math.PI * 2
      return new THREE.Vector3(x + Math.cos(angle) * r, level, z + Math.sin(angle) * r)
    })
    const bottom = ring(radius, y)
    const top = ring(topRadius, y + height)
    for (let index = 0; index < sides; index++) {
      const next = (index + 1) % sides
      this.face(material, [bottom[index], top[index], top[next], bottom[next]])
    }
    if (topRadius > 0.001) this.face(material, [...top].reverse())
    return this
  }

  get empty() {
    return [...this.parts.values()].every((part) => !part.indices.length)
  }

  // `where` says where the faces stand: 'out' in the weather, 'in' in the light of a room.
  build(parent, { cast = true, receive = true, where = '' } = {}) {
    const meshes = []
    for (const [paint, part] of this.parts) {
      if (!part.indices.length) continue
      const material = placed(paint, where)
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(part.positions, 3))
      geometry.setAttribute('normal', new THREE.Float32BufferAttribute(part.normals, 3))
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(part.uvs, 2))
      geometry.setIndex(part.indices)
      const mesh = new THREE.Mesh(geometry, material)
      mesh.castShadow = cast && !material.transparent
      mesh.receiveShadow = receive
      parent.add(mesh)
      meshes.push(mesh)
    }
    return meshes
  }
}

// ---- Shade where surfaces meet ----------------------------------------------------
//
// Where a wall meets a floor, in the corner of a room, under a cupboard and round the foot of
// a building, less of the light of the sky arrives. Without that shade things look as if they
// floated, or were made of paper. It is drawn as strips laid on the surfaces: dark along the
// edge where two surfaces meet and fading to nothing a little way off.
const shadeMaterial = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, side: THREE.DoubleSide,
  polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  vertexShader: /* glsl */`
    attribute float shade;
    varying float vShade;
    void main() {
      vShade = shade;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  fragmentShader: /* glsl */`
    varying float vShade;
    void main() {
      gl_FragColor = vec4( 0.0, 0.0, 0.0, vShade * vShade );
    }`,
})

export class Shade {
  constructor() {
    this.positions = []
    this.shades = []
    this.indices = []
  }

  // A strip that is dark (from 0 to 1) along the edge from a to b and clear along the edge
  // from c to d; c lies across from b, and d across from a.
  strip(a, b, c, d, dark, clear = 0) {
    const start = this.positions.length / 3
    for (const [point, level] of [[a, dark], [b, dark], [c, clear], [d, clear]]) {
      this.positions.push(point.x, point.y, point.z)
      this.shades.push(Math.sqrt(Math.max(0, level)))
    }
    this.indices.push(start, start + 1, start + 2, start, start + 2, start + 3)
    return this
  }

  // Shade on a level surface round something that stands on it: dark at `inner` from (x, z)
  // and clear at `outer`.
  ring(x, y, z, inner, outer, dark, sides = 14) {
    const start = this.positions.length / 3
    for (let index = 0; index < sides; index++) {
      const angle = index / sides * Math.PI * 2
      for (const [radius, level] of [[inner, dark], [outer, 0]]) {
        this.positions.push(x + Math.cos(angle) * radius, y, z + Math.sin(angle) * radius)
        this.shades.push(Math.sqrt(level))
      }
      const here = start + index * 2
      const next = start + (index + 1) % sides * 2
      this.indices.push(here, next, next + 1, here, next + 1, here + 1)
    }
    return this
  }

  // Shade on a level surface round a box that stands on it (its middle, its size, its turn).
  around(x, y, z, width, depth, turn, reach, dark, fill = 0) {
    const cos = Math.cos(turn)
    const sin = Math.sin(turn)
    const corner = (dx, dz, out) => {
      const px = dx * (width / 2 + out)
      const pz = dz * (depth / 2 + out)
      return new THREE.Vector3(x + px * cos + pz * sin, y, z - px * sin + pz * cos)
    }
    const round = [[-1, -1], [1, -1], [1, 1], [-1, 1]]
    // (Under a table or a car, which stand on legs or wheels, the floor itself is in shade.)
    if (fill > 0) this.strip(corner(-1, -1, 0), corner(1, -1, 0), corner(1, 1, 0), corner(-1, 1, 0), fill, fill)
    round.forEach(([dx, dz], index) => {
      const [ex, ez] = round[(index + 1) % 4]
      this.strip(corner(dx, dz, 0), corner(ex, ez, 0), corner(ex, ez, reach), corner(dx, dz, reach), dark)
    })
    return this
  }

  get empty() {
    return !this.indices.length
  }

  build(parent) {
    if (!this.indices.length) return null
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.positions, 3))
    geometry.setAttribute('shade', new THREE.Float32BufferAttribute(this.shades, 1))
    geometry.setIndex(this.indices)
    const mesh = new THREE.Mesh(geometry, shadeMaterial)
    // Drawn straight after the solid surfaces it lies on, before any glass in front of it.
    mesh.renderOrder = -1
    parent.add(mesh)
    return mesh
  }
}

export function disposeGroup(group) {
  group.traverse((node) => {
    if (node.isMesh || node.isLine || node.isSprite) {
      node.geometry?.dispose()
      if (node.userData.ownMaterial) {
        node.material.map?.dispose()
        node.material.dispose()
      }
    }
  })
  group.clear()
}

// ---- Painted textures --------------------------------------------------------

function canvasOf(size) {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  return canvas
}

function lattice(x, y, periodX, periodY, seed) {
  let value = Math.imul(((x % periodX) + periodX) % periodX, 374761393) ^ Math.imul(((y % periodY) + periodY) % periodY, 668265263) ^ Math.imul(seed + 1, 1274126177)
  value = Math.imul(value ^ (value >>> 13), 1274126177)
  return ((value ^ (value >>> 16)) >>> 0) / 4294967296
}

const fields = new Map()

// Soft noise that wraps round at the edges of the picture, so that textures tile without a seam.
// `cellsX` by `cellsY` blobs across; each further octave adds detail half as strong and twice as fine.
function field(size, cellsX, cellsY, octaves, seed) {
  const name = `${size}|${cellsX}|${cellsY}|${octaves}|${seed}`
  if (fields.has(name)) return fields.get(name)
  const data = new Float32Array(size * size)
  let amplitude = 1
  let total = 0
  for (let octave = 0; octave < octaves; octave++) {
    const px = Math.max(1, Math.round(cellsX * 2 ** octave))
    const py = Math.max(1, Math.round(cellsY * 2 ** octave))
    for (let y = 0; y < size; y++) {
      const fy = y / size * py
      const y0 = Math.floor(fy)
      const ty = fy - y0
      const sy = ty * ty * (3 - 2 * ty)
      for (let x = 0; x < size; x++) {
        const fx = x / size * px
        const x0 = Math.floor(fx)
        const tx = fx - x0
        const sx = tx * tx * (3 - 2 * tx)
        const a = lattice(x0, y0, px, py, seed + octave * 7)
        const b = lattice(x0 + 1, y0, px, py, seed + octave * 7)
        const c = lattice(x0, y0 + 1, px, py, seed + octave * 7)
        const d = lattice(x0 + 1, y0 + 1, px, py, seed + octave * 7)
        data[y * size + x] += (a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy) * amplitude
      }
    }
    total += amplitude
    amplitude *= 0.5
  }
  for (let index = 0; index < data.length; index++) data[index] /= total
  fields.set(name, data)
  return data
}

const grey = (level) => {
  const value = Math.round(Math.min(1, Math.max(0, level)) * 255)
  return `rgb(${value},${value},${value})`
}
const rgb = ([red, green, blue], shade = 0) => `rgb(${Math.round(red + shade)},${Math.round(green + shade)},${Math.round(blue + shade)})`

// Paints the colour of a surface and, alongside it, how far each spot stands out (white is
// high). Both are drawn as on a wall seen from the front: the top of the picture is up.
class Painter {
  constructor(size) {
    this.size = size
    this.colour = canvasOf(size).getContext('2d', { willReadFrequently: true })
    this.height = canvasOf(size).getContext('2d', { willReadFrequently: true })
    this.passes = []
    this.random = 1
  }

  roll() {
    this.random++
    return hash(this.random, this.size, 7)
  }

  fill(colour, level = 0.5) {
    this.colour.fillStyle = Array.isArray(colour) ? rgb(colour) : colour
    this.colour.fillRect(0, 0, this.size, this.size)
    this.height.fillStyle = grey(level)
    this.height.fillRect(0, 0, this.size, this.size)
    return this
  }

  // Draws the same thing on both layers; anything that crosses an edge comes back in at the other side.
  both(colour, level, draw) {
    for (const [context, style] of [[this.colour, colour], [this.height, level == null ? null : grey(level)]]) {
      if (style == null) continue
      context.fillStyle = style
      context.strokeStyle = style
      for (const dx of [0, -this.size, this.size]) {
        for (const dy of [0, -this.size, this.size]) {
          context.save()
          context.translate(dx, dy)
          draw(context)
          context.restore()
        }
      }
    }
    return this
  }

  rect(x, y, width, height, colour, level) {
    return this.both(Array.isArray(colour) ? rgb(colour) : colour, level, (context) => context.fillRect(x, y, width, height))
  }

  line(x0, y0, x1, y1, width, colour, level) {
    return this.both(colour, level, (context) => {
      context.lineWidth = width
      context.beginPath()
      context.moveTo(x0, y0)
      context.lineTo(x1, y1)
      context.stroke()
    })
  }

  dot(x, y, radius, colour, level) {
    return this.both(colour, level, (context) => {
      context.beginPath()
      context.arc(x, y, radius, 0, Math.PI * 2)
      context.fill()
    })
  }

  // Many small marks scattered at random: grit, pinholes, pebbles.
  speckle(count, [small, large], colours, level) {
    for (let index = 0; index < count; index++) {
      this.dot(this.roll() * this.size, this.roll() * this.size, small + this.roll() * (large - small),
        colours[Math.floor(this.roll() * colours.length)], typeof level === 'function' ? level(this.roll()) : level)
    }
    return this
  }

  // Stains that run down from where water gathers.
  streaks(count, colour, { width = 4, length = 0.6 } = {}) {
    for (let index = 0; index < count; index++) {
      const x = this.roll() * this.size
      const top = this.roll() * this.size
      const reach = (0.2 + this.roll() * length) * this.size
      const wide = 1 + this.roll() * width
      for (const dx of [0, -this.size, this.size]) {
        for (const dy of [0, -this.size]) {
          const gradient = this.colour.createLinearGradient(0, top + dy, 0, top + dy + reach)
          gradient.addColorStop(0, colour)
          gradient.addColorStop(1, 'rgba(0,0,0,0)')
          this.colour.fillStyle = gradient
          this.colour.fillRect(x + dx, top + dy, wide, reach)
        }
      }
    }
    return this
  }

  // Thin cracks wandering across the surface, dark and slightly sunk.
  cracks(count, colour, { width = 1.2, level = 0.15, steps = 26 } = {}) {
    for (let index = 0; index < count; index++) {
      let x = this.roll() * this.size
      let y = this.roll() * this.size
      let angle = this.roll() * Math.PI * 2
      for (let step = 0; step < steps; step++) {
        angle += (this.roll() - 0.5) * 1.1
        const nx = x + Math.cos(angle) * this.size * 0.022
        const ny = y + Math.sin(angle) * this.size * 0.022
        this.line(x, y, nx, ny, width * (0.5 + this.roll()), colour, level)
        x = nx
        y = ny
      }
    }
    return this
  }

  // Noise laid over the colour and the relief once everything else is drawn.
  // `ridge` turns soft blobs into creases; `tint` leans the colour change towards one hue.
  noise({ cells = 8, cellsY = cells, octaves = 3, colour = 0, height = 0, seed = 1, tint = [1, 1, 1], ridge = false }) {
    this.passes.push({ cells, cellsY, octaves, colour, height, seed, tint, ridge })
    return this
  }

  // Turns the two pictures into textures. `depth` is how far the relief really stands out, in metres.
  finish({ metres, depth = 0.002, rough = [0.9, 0.9], shade = 0.7 }) {
    const { size } = this
    const colour = this.colour.getImageData(0, 0, size, size)
    const drawn = this.height.getImageData(0, 0, size, size).data
    const height = new Float32Array(size * size)
    for (let index = 0; index < height.length; index++) height[index] = drawn[index * 4] / 255
    for (const pass of this.passes) {
      // A handful of noise patterns is shared by all textures; making each one afresh would take seconds.
      const values = field(size, pass.cells, pass.cellsY, pass.octaves, pass.seed % 3)
      for (let index = 0; index < height.length; index++) {
        const value = (pass.ridge ? 1 - Math.abs(values[index] * 2 - 1) : values[index]) - 0.5
        if (pass.colour) {
          colour.data[index * 4] += value * pass.colour * pass.tint[0]
          colour.data[index * 4 + 1] += value * pass.colour * pass.tint[1]
          colour.data[index * 4 + 2] += value * pass.colour * pass.tint[2]
        }
        if (pass.height) height[index] = Math.min(1, Math.max(0, height[index] + value * pass.height))
      }
    }
    this.colour.putImageData(colour, 0, 0)

    // Slopes of the relief become a normal map; its alpha keeps the height itself for parallax.
    const slope = depth * size / metres * 1.6
    const normals = new Uint8Array(size * size * 4)
    const surface = new Uint8Array(size * size * 4)
    for (let y = 0; y < size; y++) {
      const above = ((y - 1 + size) % size) * size
      const below = ((y + 1) % size) * size
      const row = (size - 1 - y) * size
      for (let x = 0; x < size; x++) {
        const here = height[y * size + x]
        const dx = (height[y * size + (x + 1) % size] - height[y * size + (x - 1 + size) % size]) / 2 * slope
        const dy = (height[below + x] - height[above + x]) / 2 * slope
        const length = Math.hypot(dx, dy, 1)
        const at = (row + x) * 4
        normals[at] = (-dx / length * 0.5 + 0.5) * 255
        normals[at + 1] = (dy / length * 0.5 + 0.5) * 255
        normals[at + 2] = (1 / length * 0.5 + 0.5) * 255
        normals[at + 3] = here * 255
        // Red: how much sky light reaches the spot. Green: roughness. Blue: left full for metalness.
        surface[at] = (shade + (1 - shade) * here) * 255
        surface[at + 1] = (rough[0] + (rough[1] - rough[0]) * here) * 255
        surface[at + 2] = 255
        surface[at + 3] = 255
      }
    }
    const wrap = (map) => {
      map.wrapS = THREE.RepeatWrapping
      map.wrapT = THREE.RepeatWrapping
      map.repeat.set(1 / metres, 1 / metres)
      map.anisotropy = anisotropy
      return map
    }
    const data = (pixels) => {
      const map = new THREE.DataTexture(pixels, size, size, THREE.RGBAFormat)
      map.generateMipmaps = true
      map.minFilter = THREE.LinearMipmapLinearFilter
      map.magFilter = THREE.LinearFilter
      map.needsUpdate = true
      return wrap(map)
    }
    const map = wrap(new THREE.CanvasTexture(this.colour.canvas))
    map.colorSpace = THREE.SRGBColorSpace
    return { map, normalMap: data(normals), surfaceMap: data(surface), metres, depth }
  }
}

// Rows of blocks with joints between them: bricks, tiles, pavers, shingles.
function courses(p, columns, rows, { joint, jointLevel = 0.2, gap = 2, stagger = true, palette, tone = 16, level = 0.85, bevel = 0 }) {
  const { size } = p
  p.fill(joint, jointLevel)
  const width = size / columns
  const height = size / rows
  for (let row = 0; row < rows; row++) {
    const shift = stagger && row % 2 ? width / 2 : 0
    for (let column = 0; column < columns; column++) {
      const colour = palette[Math.floor(p.roll() * palette.length)]
      const shade = (p.roll() - 0.5) * tone
      const x = column * width + shift + gap / 2
      const y = row * height + gap / 2
      p.rect(x, y, width - gap, height - gap, rgb(colour, shade), level + (p.roll() - 0.5) * 0.12)
      if (bevel) {
        p.rect(x, y, width - gap, bevel, 'rgba(255,255,255,0.16)', null)
        p.rect(x, y + height - gap - bevel, width - gap, bevel, 'rgba(0,0,0,0.2)', level - 0.25)
      }
    }
  }
}

// size in pixels, metres one repeat covers, depth of the relief in metres, roughness [low spots, high spots],
// and whether the relief is deep enough to be worth showing with parallax.
const TEXTURES = {
  mortar: { size: 512, metres: 2.4, depth: 0.003, rough: [0.97, 0.88], paint(p) {
    p.fill('#ece9e0').streaks(20, 'rgba(96,92,78,0.10)').streaks(5, 'rgba(60,72,60,0.08)', { width: 9, length: 0.4 })
      .cracks(2, 'rgba(70,66,58,0.3)', { width: 0.8 })
      .noise({ cells: 5, octaves: 3, colour: 12, height: 0.12, seed: 2 }).noise({ cells: 110, octaves: 2, colour: 10, height: 0.45, seed: 3 })
  } },
  stucco: { size: 512, metres: 2, depth: 0.005, rough: [0.97, 0.86], paint(p) {
    p.fill('#f1eee7').noise({ cells: 9, octaves: 4, colour: 12, height: 0.55, seed: 4, ridge: true })
      .noise({ cells: 120, octaves: 1, colour: 6, height: 0.16, seed: 5 }).noise({ cells: 3, octaves: 2, colour: 8, seed: 6 })
  } },
  plaster: { size: 256, metres: 3, depth: 0.001, rough: [0.9, 0.8], paint(p) {
    p.fill('#f2f1ed').noise({ cells: 5, octaves: 3, colour: 7, height: 0.2, seed: 7 }).noise({ cells: 90, octaves: 1, colour: 4, height: 0.1, seed: 8 })
  } },
  concrete: { size: 512, metres: 3.6, depth: 0.004, rough: [0.97, 0.8], relief: true, paint(p) {
    const { size } = p
    p.fill('#aaa8a1').streaks(16, 'rgba(70,72,70,0.14)', { width: 6, length: 0.7 })
    // Formwork panels 0.9 m wide and 1.8 m tall leave seams, and the ties that held them leave holes.
    for (let column = 0; column < 4; column++) p.rect(column * size / 4 - 1.5, 0, 3, size, 'rgba(52,52,50,0.5)', 0.12)
    for (let row = 0; row < 2; row++) p.rect(0, row * size / 2 - 1.5, size, 3, 'rgba(52,52,50,0.5)', 0.12)
    for (let column = 0; column < 4; column++) {
      for (let row = 0; row < 4; row++) p.dot(column * size / 4 + size / 8, row * size / 4 + size / 8, 3.4, 'rgba(36,36,36,0.75)', 0)
    }
    p.speckle(260, [0.5, 1.6], ['rgba(40,40,40,0.4)', 'rgba(70,70,68,0.35)'], 0.1)
      .noise({ cells: 5, octaves: 4, colour: 30, height: 0.08, seed: 9 }).noise({ cells: 150, octaves: 1, colour: 11, height: 0.22, seed: 10 })
  } },
  concreteStained: { size: 512, metres: 3.6, depth: 0.005, rough: [0.98, 0.84], relief: true, paint(p) {
    const { size } = p
    p.fill('#878681').streaks(54, 'rgba(26,28,26,0.26)', { width: 9, length: 0.75 }).streaks(9, 'rgba(120,70,35,0.26)', { width: 5, length: 0.5 })
      .streaks(10, 'rgba(225,225,215,0.2)', { width: 7, length: 0.35 })
    for (let column = 0; column < 4; column++) p.rect(column * size / 4 - 2, 0, 4, size, 'rgba(28,28,28,0.6)', 0.08)
    for (let row = 0; row < 2; row++) p.rect(0, row * size / 2 - 2, size, 4, 'rgba(28,28,28,0.6)', 0.08)
    for (let column = 0; column < 4; column++) {
      for (let row = 0; row < 4; row++) p.dot(column * size / 4 + size / 8, row * size / 4 + size / 8, 3.8, 'rgba(18,18,18,0.8)', 0)
    }
    p.cracks(5, 'rgba(24,24,24,0.55)').speckle(380, [0.6, 2.2], ['rgba(30,30,30,0.45)', 'rgba(150,150,140,0.3)'], 0.1)
      .noise({ cells: 4, octaves: 4, colour: 44, height: 0.1, seed: 11 }).noise({ cells: 150, octaves: 1, colour: 14, height: 0.26, seed: 12 })
  } },
  brick: { size: 512, metres: 1.76, depth: 0.009, rough: [0.98, 0.86], relief: true, paint(p) {
    courses(p, 8, 16, { joint: '#b6b0a4', gap: 4, tone: 26, bevel: 2, palette: [[152, 82, 62], [166, 96, 70], [138, 72, 56], [176, 108, 84], [146, 90, 72]] })
    p.speckle(500, [0.6, 1.8], ['rgba(60,30,24,0.3)', 'rgba(210,150,120,0.25)'], null)
      .noise({ cells: 70, octaves: 2, colour: 16, height: 0.2, seed: 13 }).noise({ cells: 4, octaves: 3, colour: 16, seed: 14 })
  } },
  brickWhite: { size: 512, metres: 1.76, depth: 0.008, rough: [0.97, 0.8], relief: true, paint(p) {
    courses(p, 8, 16, { joint: '#cfcbc2', gap: 4, tone: 10, bevel: 2, palette: [[240, 238, 232], [232, 230, 224], [244, 242, 238], [226, 222, 214]] })
    p.noise({ cells: 70, octaves: 2, colour: 9, height: 0.2, seed: 15 }).noise({ cells: 4, octaves: 3, colour: 10, seed: 16 })
  } },
  tile: { size: 512, metres: 0.9, depth: 0.004, rough: [0.92, 0.28], relief: true, paint(p) {
    courses(p, 9, 18, { joint: '#8f8a80', jointLevel: 0.25, gap: 3.4, tone: 12, bevel: 1.5, palette: [[244, 244, 240], [236, 236, 232], [248, 248, 246], [230, 230, 226]] })
    p.noise({ cells: 3, octaves: 3, colour: 8, seed: 17 }).noise({ cells: 90, octaves: 1, colour: 4, height: 0.05, seed: 18 })
  } },
  siding: { size: 512, metres: 1.44, depth: 0.007, rough: [0.92, 0.72], relief: true, paint(p) {
    const { size } = p
    p.fill('#efefeb')
    // Lapped boards: each one leans out towards its lower edge and casts a line of shadow there.
    for (let board = 0; board < 8; board++) {
      const top = board * size / 8
      for (let step = 0; step < 16; step++) p.rect(0, top + step * size / 128, size, size / 128 + 0.5, null, 0.35 + step / 15 * 0.55)
      p.rect(0, top + size / 8 - 3, size, 3, 'rgba(0,0,0,0.3)', 0.05)
      p.rect(0, top, size, 2, 'rgba(255,255,255,0.35)', null)
    }
    p.noise({ cells: 5, cellsY: 90, octaves: 2, colour: 9, height: 0.07, seed: 19 })
  } },
  planks: { size: 512, metres: 1.2, depth: 0.005, rough: [0.95, 0.78], relief: true, paint(p) {
    const { size } = p
    p.fill('#e9d9c3')
    for (let board = 0; board < 8; board++) {
      const left = board * size / 8
      p.rect(left, 0, size / 8, size, `rgba(${p.roll() > 0.5 ? '255,244,224' : '70,46,24'},${0.05 + p.roll() * 0.13})`, 0.72 + p.roll() * 0.14)
      p.rect(left - 1.5, 0, 3, size, 'rgba(34,22,12,0.75)', 0.05)
      if (p.roll() > 0.6) {
        // A knot, with the grain running round it.
        const x = left + size / 16 + (p.roll() - 0.5) * size / 20
        const y = p.roll() * size
        for (let ring = 4; ring > 0; ring--) p.dot(x, y, ring * 2.4, `rgba(70,44,24,${0.12 + (4 - ring) * 0.09})`, 0.55)
      }
    }
    p.noise({ cells: 90, cellsY: 3, octaves: 2, colour: 30, height: 0.16, seed: 20, tint: [1, 0.86, 0.66] })
      .noise({ cells: 22, cellsY: 2, octaves: 2, colour: 18, height: 0.08, seed: 21, ridge: true, tint: [1, 0.86, 0.66] })
  } },
  wood: { size: 512, metres: 1.1, depth: 0.0012, rough: [0.82, 0.6], paint(p) {
    p.fill('#96704e').noise({ cells: 70, cellsY: 2, octaves: 3, colour: 34, height: 0.3, seed: 22, tint: [1, 0.82, 0.6] })
      .noise({ cells: 14, cellsY: 1, octaves: 2, colour: 22, seed: 23, ridge: true, tint: [1, 0.82, 0.6] }).noise({ cells: 3, octaves: 2, colour: 14, seed: 24 })
  } },
  metalPanel: { size: 512, metres: 2.4, depth: 0.004, rough: [0.7, 0.42], paint(p) {
    const { size } = p
    p.fill('#e8e8e8', 0.8)
    for (let column = 0; column < 4; column++) {
      p.rect(column * size / 4 - 2, 0, 4, size, 'rgba(0,0,0,0.5)', 0.1)
      p.rect(column * size / 4 + 2, 0, 2, size, 'rgba(255,255,255,0.35)', null)
    }
    for (let row = 0; row < 2; row++) p.rect(0, row * size / 2 - 1.5, size, 3, 'rgba(0,0,0,0.42)', 0.15)
    p.noise({ cells: 3, octaves: 3, colour: 9, height: 0.05, seed: 25 }).noise({ cells: 2, cellsY: 60, octaves: 1, colour: 5, seed: 26 })
  } },
  stone: { size: 512, metres: 2, depth: 0.014, rough: [0.98, 0.84], relief: true, paint(p) {
    const { size } = p
    p.fill('#77736b', 0.15)
    let top = 0
    for (const tall of [0.22, 0.3, 0.2, 0.28]) {
      let left = p.roll() * 40
      const end = left + size
      while (left < end - 1) {
        const wide = Math.min(end - left, size * (0.14 + p.roll() * 0.2))
        const tone = (p.roll() - 0.5) * 34
        const hue = p.roll() > 0.6 ? [176, 168, 150] : [164, 162, 156]
        p.rect(left + 2.5, top * size + 2.5, wide - 5, tall * size - 5, rgb(hue, tone), 0.7 + p.roll() * 0.25)
        left += wide
      }
      top += tall
    }
    p.noise({ cells: 26, octaves: 4, colour: 26, height: 0.4, seed: 27 }).noise({ cells: 4, octaves: 2, colour: 12, seed: 28 })
  } },
  wallpaper: { size: 256, metres: 0.8, depth: 0.0006, rough: [0.95, 0.88], paint(p) {
    p.fill('#f4f2ec').noise({ cells: 128, cellsY: 20, octaves: 1, colour: 5, height: 0.5, seed: 29 }).noise({ cells: 20, cellsY: 128, octaves: 1, colour: 5, height: 0.5, seed: 30 })
      .noise({ cells: 3, octaves: 2, colour: 4, seed: 31 })
  } },
  wallpaperStripe: { size: 256, metres: 0.64, depth: 0.0006, rough: [0.95, 0.88], paint(p) {
    const { size } = p
    p.fill('#f3efe4')
    for (let stripe = 0; stripe < 4; stripe++) {
      p.rect(stripe * size / 4, 0, size / 8, size, '#cfdbe3', 0.55)
      p.rect(stripe * size / 4 + size / 8 - 2, 0, 2, size, '#b9982f', 0.6)
    }
    p.noise({ cells: 128, cellsY: 20, octaves: 1, colour: 5, height: 0.4, seed: 32 })
  } },
  floorboards: { size: 512, metres: 1.44, depth: 0.0016, rough: [0.7, 0.36], paint(p) {
    const { size } = p
    p.fill('#e3c79d', 0.8)
    for (let board = 0; board < 12; board++) {
      const left = board * size / 12
      let top = p.roll() * size
      for (let piece = 0; piece < 3; piece++) {
        const long = size * (0.22 + p.roll() * 0.3)
        p.rect(left, top, size / 12, long, `rgba(${p.roll() > 0.5 ? '255,240,214' : '96,60,28'},${0.04 + p.roll() * 0.16})`, null)
        p.rect(left, top, size / 12, 1.6, 'rgba(60,36,18,0.6)', 0.2)
        top += long
      }
      p.rect(left - 0.8, 0, 1.6, size, 'rgba(60,36,18,0.62)', 0.15)
    }
    p.noise({ cells: 110, cellsY: 3, octaves: 2, colour: 22, height: 0.12, seed: 33, tint: [1, 0.84, 0.62] })
      .noise({ cells: 26, cellsY: 2, octaves: 2, colour: 12, seed: 34, ridge: true, tint: [1, 0.84, 0.62] })
  } },
  tatami: { size: 512, metres: 1.82, depth: 0.0015, rough: [0.95, 0.82], paint(p) {
    const { size } = p
    p.fill('#b9bb86')
    // Rush woven across each mat, and the cloth edging along its long sides.
    for (let line = 0; line < size; line += 3) p.rect(0, line, size, 1.4, `rgba(86,96,48,${0.1 + p.roll() * 0.14})`, 0.25)
    for (const edge of [0, size / 2]) p.rect(edge - 7, 0, 14, size, '#2f3a2c', 0.9)
    p.noise({ cells: 4, octaves: 3, colour: 10, seed: 35, tint: [1, 1, 0.5] }).noise({ cells: 160, cellsY: 6, octaves: 1, colour: 8, height: 0.2, seed: 36 })
  } },
  bathTile: { size: 256, metres: 0.8, depth: 0.0025, rough: [0.9, 0.14], paint(p) {
    courses(p, 8, 8, { joint: '#a9b0b2', jointLevel: 0.25, gap: 3, stagger: false, tone: 6, bevel: 1.5, palette: [[246, 248, 248], [240, 243, 244], [250, 251, 251]] })
  } },
  checker: { size: 256, metres: 1.2, depth: 0.002, rough: [0.9, 0.22], paint(p) {
    const { size } = p
    p.fill('#8a8a88', 0.3)
    for (let row = 0; row < 4; row++) {
      for (let column = 0; column < 4; column++) {
        p.rect(column * size / 4 + 1, row * size / 4 + 1, size / 4 - 2, size / 4 - 2, (row + column) % 2 ? '#3f4042' : '#f1eee7', 0.85)
      }
    }
    p.noise({ cells: 6, octaves: 3, colour: 8, seed: 37 })
  } },
  pavers: { size: 512, metres: 1.6, depth: 0.007, rough: [0.98, 0.82], relief: true, paint(p) {
    courses(p, 4, 4, { joint: '#7f7a70', jointLevel: 0.15, gap: 6, stagger: false, tone: 16, bevel: 3, palette: [[226, 220, 206], [214, 208, 194], [234, 230, 218], [206, 200, 186]] })
    p.noise({ cells: 40, octaves: 3, colour: 16, height: 0.22, seed: 38 }).noise({ cells: 3, octaves: 3, colour: 14, seed: 39 })
  } },
  carpet: { size: 256, metres: 1, depth: 0.003, rough: [1, 0.96], paint(p) {
    p.fill('#cfcfcf').noise({ cells: 128, octaves: 1, colour: 40, height: 0.7, seed: 40 }).noise({ cells: 5, octaves: 3, colour: 10, seed: 41 })
  } },
  kawara: { size: 512, metres: 1.5, depth: 0.03, rough: [0.8, 0.5], relief: true, paint(p) {
    const { size } = p
    const columns = 6
    const rows = 5
    p.fill('#cfcfcf')
    for (let row = 0; row < rows; row++) {
      const top = row * size / rows
      for (let column = 0; column < columns; column++) {
        const left = column * size / columns
        const shade = (p.roll() - 0.5) * 22
        // Each tile is a shallow wave: a rounded ridge on one side and a trough on the other.
        for (let slice = 0; slice < 16; slice++) {
          const wave = Math.sin(slice / 15 * Math.PI * 1.25 - 0.25)
          p.rect(left + slice * size / columns / 16, top, size / columns / 16 + 0.6, size / rows, rgb([205, 205, 205], shade + wave * 26), 0.25 + Math.max(0, wave) * 0.6)
        }
        p.rect(left, top + size / rows - 5, size / columns, 5, 'rgba(0,0,0,0.4)', 0.02)
        p.rect(left, top, size / columns, 3, 'rgba(255,255,255,0.22)', null)
      }
    }
    p.noise({ cells: 60, octaves: 2, colour: 10, height: 0.05, seed: 42 }).noise({ cells: 3, octaves: 2, colour: 12, seed: 43 })
  } },
  slate: { size: 512, metres: 1.2, depth: 0.008, rough: [0.95, 0.7], relief: true, paint(p) {
    const { size } = p
    p.fill('#b9b9b9', 0.5)
    for (let row = 0; row < 4; row++) {
      for (let column = -1; column < 6; column++) {
        const left = column * size / 6 + (row % 2 ? size / 12 : 0)
        const top = row * size / 4
        const shade = (p.roll() - 0.5) * 30
        for (let step = 0; step < 8; step++) p.rect(left + 1, top + step * size / 32, size / 6 - 2, size / 32 + 0.5, rgb([196, 196, 196], shade), 0.3 + step / 7 * 0.6)
        p.rect(left, top + size / 4 - 4, size / 6, 4, 'rgba(0,0,0,0.42)', 0.04)
        p.rect(left - 1, top, 2, size / 4, 'rgba(0,0,0,0.3)', 0.1)
      }
    }
    p.noise({ cells: 50, octaves: 3, colour: 14, height: 0.08, seed: 44 })
  } },
  roofMetal: { size: 256, metres: 0.9, depth: 0.022, rough: [0.62, 0.42], relief: true, paint(p) {
    const { size } = p
    p.fill('#d6d6d6', 0.3)
    for (let seam = 0; seam < 2; seam++) {
      const x = seam * size / 2
      p.rect(x - 6, 0, 12, size, 'rgba(0,0,0,0.22)', 0.65)
      p.rect(x - 2.5, 0, 5, size, 'rgba(255,255,255,0.4)', 1)
    }
    p.noise({ cells: 2, cellsY: 40, octaves: 1, colour: 6, seed: 45 }).noise({ cells: 4, octaves: 3, colour: 8, height: 0.04, seed: 46 })
  } },
  asphalt: { size: 512, metres: 4, depth: 0.004, rough: [0.97, 0.86], paint(p) {
    p.fill('#47494d').speckle(1500, [0.5, 1.5], ['rgba(170,170,170,0.5)', 'rgba(14,14,16,0.5)', 'rgba(120,116,108,0.45)'], (roll) => 0.3 + roll * 0.6)
      .cracks(4, 'rgba(16,16,18,0.7)', { width: 1.6, level: 0.05, steps: 34 })
      .noise({ cells: 4, octaves: 4, colour: 18, height: 0.08, seed: 47 }).noise({ cells: 170, octaves: 1, colour: 16, height: 0.4, seed: 48 })
  } },
  sidewalk: { size: 512, metres: 2.4, depth: 0.005, rough: [0.97, 0.84], relief: true, paint(p) {
    courses(p, 6, 6, { joint: '#6d6b66', jointLevel: 0.15, gap: 4, stagger: false, tone: 14, bevel: 2, palette: [[190, 188, 180], [180, 178, 170], [198, 196, 190], [172, 170, 162]] })
    p.speckle(300, [0.5, 1.6], ['rgba(60,60,56,0.3)', 'rgba(230,230,224,0.25)'], null)
      .noise({ cells: 60, octaves: 2, colour: 14, height: 0.2, seed: 49 }).noise({ cells: 3, octaves: 3, colour: 16, seed: 50 })
  } },
  grass: { size: 512, metres: 6, depth: 0.02, rough: [1, 0.92], paint(p) {
    const { size } = p
    p.fill('#587040')
    for (let blade = 0; blade < 5200; blade++) {
      const tone = p.roll()
      const x = p.roll() * size
      const y = p.roll() * size
      p.line(x, y, x + (p.roll() - 0.5) * 6, y - 3 - p.roll() * 6, 1,
        tone > 0.6 ? 'rgba(134,156,86,0.5)' : tone > 0.25 ? 'rgba(52,82,40,0.55)' : 'rgba(126,124,70,0.4)', 0.4 + tone * 0.5)
    }
    p.noise({ cells: 5, octaves: 4, colour: 34, height: 0.2, seed: 51, tint: [0.9, 1, 0.5] }).noise({ cells: 26, octaves: 2, colour: 16, seed: 52, tint: [1, 1, 0.3] })
  } },
  dirt: { size: 256, metres: 5, depth: 0.01, rough: [1, 0.94], paint(p) {
    p.fill('#88765c').speckle(260, [0.6, 2.4], ['rgba(60,50,40,0.4)', 'rgba(190,176,150,0.35)'], (roll) => roll)
      .noise({ cells: 4, octaves: 4, colour: 30, height: 0.3, seed: 53 }).noise({ cells: 90, octaves: 1, colour: 14, height: 0.3, seed: 54 })
  } },
  gravel: { size: 256, metres: 1.5, depth: 0.012, rough: [1, 0.9], relief: true, paint(p) {
    p.fill('#77746c', 0.1).speckle(900, [2, 5], ['#b9b5aa', '#9e9a90', '#c9c5ba', '#8a877e', '#a8a094'], (roll) => 0.5 + roll * 0.5)
      .noise({ cells: 80, octaves: 1, colour: 12, height: 0.1, seed: 55 })
  } },
  // Hollow concrete blocks (390 x 190 mm) laid with 10 mm joints: four to a course, eight courses.
  cblock: { size: 512, metres: 1.6, depth: 0.006, rough: [0.98, 0.9], relief: true, paint(p) {
    courses(p, 4, 8, { joint: '#a7a59d', jointLevel: 0.25, gap: 3, tone: 12, bevel: 1, level: 0.86,
      palette: [[176, 174, 167], [168, 167, 161], [184, 182, 175], [162, 161, 156], [172, 168, 160]] })
    p.speckle(900, [0.4, 1.4], ['rgba(70,70,66,0.35)', 'rgba(210,208,200,0.25)'], 0.7)
      .noise({ cells: 40, octaves: 2, colour: 12, height: 0.2, seed: 61 }).noise({ cells: 3, octaves: 3, colour: 14, seed: 62, tint: [1, 1, 0.9] })
  } },
  // A clipped hedge: small leaves packed close, darker and deeper in the gaps between them.
  hedge: { size: 512, metres: 1.2, depth: 0.05, rough: [0.95, 0.7], relief: true, paint(p) {
    const { size } = p
    p.fill('#22381c', 0.15)
    const greens = [[78, 112, 52], [92, 128, 60], [64, 98, 44], [104, 136, 66], [58, 86, 40], [118, 146, 70]]
    for (let leaf = 0; leaf < 3400; leaf++) {
      const x = p.roll() * size
      const y = p.roll() * size
      const long = 5 + p.roll() * 7
      const turn = p.roll() * Math.PI
      const [red, green, blue] = greens[Math.floor(p.roll() * greens.length)]
      const light = 0.8 + p.roll() * 0.4
      p.both(`rgb(${Math.round(red * light)},${Math.round(green * light)},${Math.round(blue * light)})`, 0.45 + p.roll() * 0.55, (context) => {
        context.beginPath()
        context.ellipse(x, y, long, long * 0.45, turn, 0, Math.PI * 2)
        context.fill()
      })
    }
    p.noise({ cells: 6, octaves: 3, colour: 26, height: 0.35, seed: 63 }).noise({ cells: 2, octaves: 2, colour: 14, seed: 64, tint: [1, 1, 0.6] })
  } },
  bark: { size: 256, metres: 1, depth: 0.03, rough: [1, 0.9], relief: true, paint(p) {
    p.fill('#6f5d4b').noise({ cells: 16, cellsY: 2, octaves: 3, colour: 60, height: 0.9, seed: 56, ridge: true })
      .noise({ cells: 60, cellsY: 20, octaves: 2, colour: 20, height: 0.15, seed: 57 }).noise({ cells: 3, octaves: 2, colour: 16, seed: 58, tint: [0.6, 1, 0.6] })
  } },
}

const sets = new Map()
let anisotropy = 4
// 0: colour only. 1: with relief and gloss. 2: with parallax too, where a surface is deep enough.
let detail = 1

export function setAnisotropy(value) {
  anisotropy = value
  for (const set of sets.values()) {
    for (const map of [set.map, set.normalMap, set.surfaceMap]) map.anisotropy = value
  }
}

function textureSet(name) {
  if (!sets.has(name)) {
    const spec = TEXTURES[name]
    const painter = new Painter(spec.size)
    spec.paint(painter)
    sets.set(name, { ...painter.finish(spec), relief: Boolean(spec.relief) })
  }
  return sets.get(name)
}

// The colour picture of a painted material.
export const texture = (name) => textureSet(name).map

// ---- How painted surfaces take the light ------------------------------------------
//
// Every painted material is drawn by the standard shader with a few additions:
//  - parallax: the eye sees into the relief of a deep surface (near the camera only);
//  - unevenness: no real wall is one colour all over. Broad blotches, smaller patches and,
//    close by, a fine grain vary its colour and its gloss;
//  - weather, on what stands outdoors: dirt splashed up at the foot of walls, streaks where
//    rain runs down them, dust and moss gathering on what faces the sky;
//  - room light, on what is indoors: the light of the sky reaches it only through windows and
//    off the walls, the floor and the ceiling, so it comes from all round, about evenly, and
//    has lost its blue; and a glossy floor mirrors the room rather than the open sky.

// The light that fills a room, as it falls on every surface in it.
const roomLight = { value: new THREE.Vector3(1.32, 1.27, 1.17) }

const SURFACE_PARS = /* glsl */`
  uniform float parallaxDepth;
  uniform vec3 machiRoom;
  varying vec3 vMachiWorld;

  #ifndef USE_NORMALMAP_TANGENTSPACE
  vec2 parallaxShift() { return vec2( 0.0 ); }
  #else
  // The texture is looked up where the line of sight really meets the bumps, a few steps
  // below the flat face.
  vec2 parallaxShift() {
    float distance = length( vViewPosition );
    float reach = parallaxDepth * ( 1.0 - smoothstep( 9.0, 22.0, distance ) );
    if ( reach <= 0.0 ) return vec2( 0.0 );
    vec3 facing = normalize( vNormal );
    #ifdef DOUBLE_SIDED
      facing *= gl_FrontFacing ? 1.0 : - 1.0;
    #endif
    mat3 frame = getTangentFrame( - vViewPosition, facing, vNormalMapUv );
    vec3 eye = normalize( vViewPosition );
    vec3 sight = vec3( dot( eye, frame[ 0 ] ), dot( eye, frame[ 1 ] ), max( dot( eye, frame[ 2 ] ), 0.22 ) );
    vec2 ddx = dFdx( vNormalMapUv );
    vec2 ddy = dFdy( vNormalMapUv );
    const float steps = 12.0;
    vec2 stride = - sight.xy / sight.z * reach / steps;
    vec2 at = vNormalMapUv;
    float sunk = 0.0;
    float floorAt = 1.0 - textureGrad( normalMap, at, ddx, ddy ).a;
    float before = 0.0;
    for ( int index = 0; index < 12; index ++ ) {
      if ( sunk >= floorAt ) break;
      before = floorAt - sunk;
      at += stride;
      sunk += 1.0 / steps;
      floorAt = 1.0 - textureGrad( normalMap, at, ddx, ddy ).a;
    }
    float after = sunk - floorAt;
    at -= stride * clamp( after / max( after + before, 1e-4 ), 0.0, 1.0 );
    return at - vNormalMapUv;
  }
  #endif

  float machiHash( vec2 p ) {
    vec3 q = fract( vec3( p.xyx ) * 0.1031 );
    q += dot( q, q.yzx + 33.33 );
    return fract( ( q.x + q.y ) * q.z );
  }
  float machiNoise( vec2 p ) {
    vec2 i = floor( p );
    vec2 f = fract( p );
    vec2 u = f * f * ( 3.0 - 2.0 * f );
    return mix( mix( machiHash( i ), machiHash( i + vec2( 1.0, 0.0 ) ), u.x ),
      mix( machiHash( i + vec2( 0.0, 1.0 ) ), machiHash( i + vec2( 1.0, 1.0 ) ), u.x ), u.y );
  }
  // Soft blotches: three sizes of noise, each half as strong as the one before.
  float machiCloud( vec2 p ) {
    return machiNoise( p ) * 0.57 + machiNoise( p * 2.03 + 17.1 ) * 0.29 + machiNoise( p * 4.11 + 41.7 ) * 0.14;
  }
`

// Unevenness and weather, worked out from where a spot is in the world, so that it never
// repeats the way a tiled picture does.
const SURFACE_WEAR = /* glsl */`
  float machiRough = 0.0;
  #ifdef MACHI_WEAR
  {
    vec3 machiN = inverseTransformDirection( normalize( vNormal ), viewMatrix );
    #ifdef DOUBLE_SIDED
      machiN *= gl_FrontFacing ? 1.0 : - 1.0;
    #endif
    vec3 machiA = abs( machiN );
    // Across a face: along the ground for what lies flat, along the wall and up it otherwise.
    vec2 machiQ = machiA.y > 0.6 ? vMachiWorld.xz
      : machiA.x > machiA.z ? vec2( vMachiWorld.z + vMachiWorld.x * 0.37, vMachiWorld.y ) : vec2( vMachiWorld.x + vMachiWorld.z * 0.37, vMachiWorld.y );
    float machiFar = length( vViewPosition );
    float machiBroad = machiCloud( machiQ * 0.23 );
    float machiFine = mix( 0.5, machiCloud( machiQ * 1.9 + 9.0 ), 1.0 - smoothstep( 50.0, 150.0, machiFar ) );
    float machiGrain = ( machiNoise( machiQ * 173.0 ) - 0.5 ) * ( 1.0 - smoothstep( 1.2, 3.5, machiFar ) );
    #ifdef MACHI_OUTDOOR
      float machiWall = 1.0 - smoothstep( 0.45, 0.7, machiA.y );
      float machiUp = smoothstep( 0.5, 0.9, machiN.y );
      // Dirt splashed up from the ground, higher in some places than in others.
      float machiFoot = machiWall * ( 1.0 - smoothstep( 0.02, 0.3 + 0.8 * machiBroad, vMachiWorld.y ) );
      // Streaks where rain runs down a wall.
      float machiStreak = machiWall * smoothstep( 0.55, 0.95, machiNoise( vec2( machiQ.x * 7.0, machiQ.y * 0.33 ) ) )
        * ( 0.3 + 0.7 * machiNoise( machiQ * 0.6 + 5.0 ) );
      // Dust and moss in patches on what faces the sky.
      float machiDust = machiUp * smoothstep( 0.42, 0.8, machiCloud( machiQ * 0.5 + 3.0 ) );
      float machiDirt = machiFoot * 0.5 + machiStreak * 0.2 + machiDust * 0.22;
      diffuseColor.rgb *= 1.0 + ( machiBroad - 0.5 ) * 0.17 + ( machiFine - 0.5 ) * 0.08 + machiGrain * 0.07;
      diffuseColor.rgb = mix( diffuseColor.rgb, diffuseColor.rgb * vec3( 0.50, 0.45, 0.37 ), machiDirt );
      machiRough = ( machiFine - 0.5 ) * 0.16 + machiDirt * 0.12 + machiGrain * 0.1;
    #else
      diffuseColor.rgb *= 1.0 + ( machiBroad - 0.5 ) * 0.05 + ( machiFine - 0.5 ) * 0.03 + machiGrain * 0.05;
      machiRough = ( machiFine - 0.5 ) * 0.1 + machiGrain * 0.08;
    #endif
  }
  #endif
`

const SURFACE_ROOM = /* glsl */`
  #ifdef MACHI_INDOOR
    #if defined( RE_IndirectDiffuse )
      // A little more of it from above and from one side than from the other, so that the
      // faces of a piece of furniture differ.
      vec3 machiFace = inverseTransformDirection( geometryNormal, viewMatrix );
      irradiance = machiRoom * ( 0.86 + 0.14 * machiFace.y + 0.05 * dot( machiFace.xz, vec2( 0.6, 0.8 ) ) );
      iblIrradiance = vec3( 0.0 );
    #endif
    #if defined( RE_IndirectSpecular )
      radiance = machiRoom * 0.25;
    #endif
  #endif
`

function surface(made) {
  made.userData.parallax = { value: 0 }
  made.onBeforeCompile = (shader) => {
    shader.uniforms.parallaxDepth = made.userData.parallax
    shader.uniforms.machiRoom = roomLight
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vMachiWorld;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvMachiWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;')
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <normalmap_pars_fragment>', `#include <normalmap_pars_fragment>\n${SURFACE_PARS}`)
      .replace('#include <map_fragment>', `vec2 parallaxUv = vec2( 0.0 );
        #ifdef MACHI_PARALLAX
          parallaxUv = parallaxShift();
        #endif
        ${THREE.ShaderChunk.map_fragment.replaceAll('vMapUv', '( vMapUv + parallaxUv )')}
        ${SURFACE_WEAR}`)
      .replace('#include <roughnessmap_fragment>', `${THREE.ShaderChunk.roughnessmap_fragment.replaceAll('vRoughnessMapUv', '( vRoughnessMapUv + parallaxUv )')}
        roughnessFactor = clamp( roughnessFactor + machiRough, 0.04, 1.0 );`)
      .replace('#include <normal_fragment_maps>', THREE.ShaderChunk.normal_fragment_maps.replaceAll('texture2D( normalMap, vNormalMapUv )', 'texture2D( normalMap, vNormalMapUv + parallaxUv )'))
      .replace('#include <lights_fragment_end>', `${SURFACE_ROOM}\n#include <lights_fragment_end>`)
      .replace('#include <aomap_fragment>', THREE.ShaderChunk.aomap_fragment.replaceAll('vAoMapUv', '( vAoMapUv + parallaxUv )'))
  }
  made.customProgramCacheKey = () => 'machi-surface'
}

function dress(made) {
  const { set, wants, recipe } = made.userData
  if (!recipe) return
  const flag = (name, on) => {
    if (on) made.defines[name] = ''
    else delete made.defines[name]
  }
  flag('MACHI_WEAR', detail >= 1)
  if (set) {
    made.normalMap = detail >= 1 ? set.normalMap : null
    made.roughnessMap = detail >= 1 ? set.surfaceMap : null
    made.aoMap = detail >= 1 ? set.surfaceMap : null
    const deep = detail >= 2 && set.relief && wants
    flag('MACHI_PARALLAX', deep)
    made.userData.parallax.value = deep ? set.depth / set.metres * 1.5 : 0
  }
  made.needsUpdate = true
}

const materials = new Map()

// How finely surfaces are drawn: 0 flat colour, 1 relief and gloss, 2 parallax as well.
export function setDetail(level) {
  if (detail === level) return
  detail = level
  for (const made of materials.values()) dress(made)
}

// material('mortar'), material('mortar', '#f4f2ea') for a tint, or material('#335577') for flat paint.
// `where` is 'out' for what stands in the weather and 'in' for what is lit by a room.
export function material(name, tint = '#ffffff', { roughness, metalness = 0, twoSided = false, relief = true, where = '' } = {}) {
  const key = `${name}|${tint}|${roughness}|${metalness}|${twoSided}|${relief}|${where}`
  if (!materials.has(key)) {
    const textured = Object.hasOwn(TEXTURES, name)
    const options = { color: textured ? tint : name, roughness: roughness ?? (textured ? 1 : 0.85), metalness }
    if (twoSided) options.side = THREE.DoubleSide
    const made = new THREE.MeshStandardMaterial(options)
    made.userData = { recipe: [name, tint, { roughness, metalness, twoSided, relief }], wants: relief }
    if (textured) {
      made.userData.set = textureSet(name)
      made.map = made.userData.set.map
      made.aoMapIntensity = 0.85
    }
    if (where === 'out') made.defines.MACHI_OUTDOOR = ''
    if (where === 'in') made.defines.MACHI_INDOOR = ''
    surface(made)
    dress(made)
    materials.set(key, made)
  }
  return materials.get(key)
}

// The same material as it is where it stands: 'out' in the weather, 'in' in the light of a room.
export function placed(source, where) {
  const recipe = source.userData?.recipe
  if (!recipe || !where) return source
  return material(recipe[0], recipe[1], { ...recipe[2], where })
}

// The material of a finish from the design catalogue, such as 'mortar-cream' or 'floor-oak'.
export function finishMaterial(id) {
  const entry = FINISHES[id] ?? FINISHES['wp-white']
  return material(entry.texture, entry.tint, { roughness: entry.roughness, metalness: entry.metalness, twoSided: entry.group === 'roof' })
}

// Frames of doors and windows, and painted door leaves.
export function frameMaterial(id) {
  const colour = (FRAME_COLORS[id] ?? FRAME_COLORS.white)[1]
  if (id === 'wood' || id === 'wood-dark') return material('wood', id === 'wood' ? '#c9a37a' : '#7a5a44')
  const metal = ['black', 'silver', 'bronze', 'steel'].includes(id)
  return material(colour, '#ffffff', { roughness: metal ? 0.45 : 0.6, metalness: metal ? 0.6 : 0.05 })
}

export const glass = (tint = '#2c3a44') => {
  const key = `glass|${tint}`
  if (!materials.has(key)) {
    materials.set(key, new THREE.MeshStandardMaterial({ color: tint, roughness: 0.05, metalness: 1, envMapIntensity: 1.35 }))
  }
  return materials.get(key)
}

export const glow = (color, intensity = 1.6) => {
  const key = `glow|${color}|${intensity}`
  if (!materials.has(key)) {
    materials.set(key, new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: 0.6 }))
  }
  return materials.get(key)
}

// A seamless normal map of crossing ripples for the sea.
export function waterNormals(size = 256) {
  const canvas = canvasOf(size)
  const context = canvas.getContext('2d')
  const image = context.createImageData(size, size)
  const waves = [[1, 2, 0.9, 0.3], [3, 1, 0.6, 1.7], [2, 5, 0.42, 4.1], [5, 3, 0.3, 2.6], [7, 6, 0.2, 5.2], [4, 9, 0.16, 0.8]]
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let dx = 0
      let dy = 0
      for (const [fx, fy, strength, phase] of waves) {
        const slope = Math.cos((x * fx + y * fy) / size * Math.PI * 2 + phase) * strength
        dx += slope * fx
        dy += slope * fy
      }
      const length = Math.hypot(dx * 0.22, dy * 0.22, 1)
      const offset = (y * size + x) * 4
      image.data[offset] = (-dx * 0.22 / length * 0.5 + 0.5) * 255
      image.data[offset + 1] = (-dy * 0.22 / length * 0.5 + 0.5) * 255
      image.data[offset + 2] = (1 / length * 0.5 + 0.5) * 255
      image.data[offset + 3] = 255
    }
  }
  context.putImageData(image, 0, 0)
  const map = new THREE.CanvasTexture(canvas)
  map.wrapS = THREE.RepeatWrapping
  map.wrapT = THREE.RepeatWrapping
  return map
}

// Text drawn on a transparent canvas, for signs, painted numbers and name tags.
export function textTexture(text, { color = '#30383c', background = '', font = '700 64px system-ui, sans-serif', padding = 18, border = '' } = {}) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  context.font = font
  const metrics = context.measureText(text)
  const height = Math.ceil((metrics.actualBoundingBoxAscent || 52) + (metrics.actualBoundingBoxDescent || 14)) + padding * 2
  canvas.width = Math.ceil(metrics.width) + padding * 2
  canvas.height = height
  context.font = font
  if (background) {
    context.fillStyle = background
    context.beginPath()
    context.roundRect(0, 0, canvas.width, canvas.height, Math.min(canvas.height / 2, 30))
    context.fill()
    if (border) {
      context.strokeStyle = border
      context.lineWidth = 4
      context.stroke()
    }
  }
  context.fillStyle = color
  context.textBaseline = 'middle'
  context.textAlign = 'center'
  context.fillText(text, canvas.width / 2, canvas.height / 2 + 2)
  const map = new THREE.CanvasTexture(canvas)
  map.colorSpace = THREE.SRGBColorSpace
  map.anisotropy = anisotropy
  return { map, aspect: canvas.width / canvas.height }
}
