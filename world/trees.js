// The trees of the town. A tree is a trunk that forks into limbs, with a crown made of several
// hundred small sprays of leaves: flat cards that carry a painted picture of leaves on twigs,
// turned every which way, so that the crown is ragged against the sky, lets light through and
// is darker inside than out. A few shapes of tree are grown once and then planted many times
// over, each turned, sized and tinted a little differently.
import * as THREE from 'three'
import { hash, texture } from './kit.js?v=online-1794946480502'

// The shapes of tree, each as tall as it is at size 1 (metres):
//  round: a broad, heavy crown on a short trunk, like a camphor tree or a cherry in leaf;
//  vase:  limbs that rise and spread like a fan, as a zelkova (ケヤキ) does along a street;
//  cone:  a straight leader with a narrowing crown, like a ginkgo (イチョウ).
const SPECIES = [
  { shape: 'round', trunk: 2.5, girth: 0.21, limbs: 5, rise: 0.75, reach: 1.7, middle: 4.1, wide: 2.05, high: 1.6, cards: 150, tone: [0.80, 1.0, 0.62] },
  { shape: 'vase', trunk: 2.3, girth: 0.19, limbs: 6, rise: 1.25, reach: 2.3, middle: 4.9, wide: 1.95, high: 1.9, cards: 150, tone: [0.86, 1.0, 0.58] },
  { shape: 'cone', trunk: 1.9, girth: 0.18, limbs: 7, rise: 0.5, reach: 1.25, middle: 4.4, wide: 1.55, high: 2.7, cards: 140, tone: [0.90, 1.0, 0.52] },
]

// A picture of a spray of leaves: twigs with leaves along them, clear between the leaves.
function paintLeaves(size = 512) {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const context = canvas.getContext('2d')
  const middle = size / 2
  const roll = (index, salt) => hash(index, salt, 91)
  // Twigs run out from the middle.
  context.lineCap = 'round'
  for (let twig = 0; twig < 9; twig++) {
    const angle = twig / 9 * Math.PI * 2 + roll(twig, 1) * 0.5
    const length = size * (0.3 + 0.14 * roll(twig, 2))
    context.strokeStyle = 'rgb(96,78,58)'
    context.lineWidth = size * 0.008
    context.beginPath()
    context.moveTo(middle, middle)
    context.quadraticCurveTo(
      middle + Math.cos(angle + 0.3) * length * 0.5, middle + Math.sin(angle + 0.3) * length * 0.5,
      middle + Math.cos(angle) * length, middle + Math.sin(angle) * length,
    )
    context.stroke()
  }
  // Leaves: thicker towards the middle, thinning out to a ragged edge well inside the picture.
  const count = 420
  for (let leaf = 0; leaf < count; leaf++) {
    const angle = roll(leaf, 3) * Math.PI * 2
    const radius = Math.pow(roll(leaf, 4), 0.62) * size * 0.45
    const x = middle + Math.cos(angle) * radius
    const y = middle + Math.sin(angle) * radius
    const long = size * (0.036 + 0.03 * roll(leaf, 5))
    const light = 0.58 + 0.42 * roll(leaf, 6)
    const warm = roll(leaf, 7)
    context.save()
    context.translate(x, y)
    context.rotate(angle + (roll(leaf, 8) - 0.5) * 2.2)
    // A leaf is drawn almost white, with a hint of its own green: the tree gives it its colour.
    context.fillStyle = `rgb(${Math.round(light * (188 + warm * 50))},${Math.round(light * 246)},${Math.round(light * (150 + (1 - warm) * 50))})`
    context.beginPath()
    context.moveTo(-long, 0)
    context.quadraticCurveTo(0, -long * 0.62, long, 0)
    context.quadraticCurveTo(0, long * 0.62, -long, 0)
    context.fill()
    // The half of the blade that is turned from the light.
    context.fillStyle = 'rgba(40,60,20,0.22)'
    context.beginPath()
    context.moveTo(-long, 0)
    context.quadraticCurveTo(0, long * 0.62, long, 0)
    context.closePath()
    context.fill()
    context.restore()
  }
  const map = new THREE.CanvasTexture(canvas)
  map.colorSpace = THREE.SRGBColorSpace
  map.anisotropy = 4
  return map
}

// A length of trunk or branch from a to b, thinner at b, with bark that wraps round it.
function addLimb(wood, a, b, r0, r1, sides) {
  const axis = b.clone().sub(a)
  const length = axis.length()
  axis.normalize()
  const side = Math.abs(axis.y) > 0.99 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0).cross(axis).normalize()
  const other = axis.clone().cross(side)
  const start = wood.positions.length / 3
  const wraps = Math.max(1, Math.round(r0 * 7))
  for (const [point, radius, v] of [[a, r0, 0], [b, r1, length]]) {
    for (let index = 0; index <= sides; index++) {
      const angle = index / sides * Math.PI * 2
      const out = side.clone().multiplyScalar(Math.cos(angle)).addScaledVector(other, Math.sin(angle))
      wood.positions.push(point.x + out.x * radius, point.y + out.y * radius, point.z + out.z * radius)
      wood.normals.push(out.x, out.y, out.z)
      wood.uvs.push(index / sides * wraps, v + a.y)
    }
  }
  for (let index = 0; index < sides; index++) {
    const p = start + index
    const q = start + sides + 1 + index
    wood.indices.push(p, p + 1, q, p + 1, q + 1, q)
  }
}

// One spray of leaves: a square card at `centre`, facing `normal`. It is shaded as a part of
// the whole crown (its normals point out of the crown and a little up), and is darker the
// deeper it sits inside the crown.
function addCard(leaves, centre, size, normal, spin, crown, depth) {
  const u = (Math.abs(normal.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0)).cross(normal).normalize()
  const v = normal.clone().cross(u)
  const across = u.clone().multiplyScalar(Math.cos(spin)).addScaledVector(v, Math.sin(spin)).multiplyScalar(size / 2)
  const upward = u.clone().multiplyScalar(-Math.sin(spin)).addScaledVector(v, Math.cos(spin)).multiplyScalar(size / 2)
  const start = leaves.positions.length / 3
  for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    const point = centre.clone().addScaledVector(across, sx).addScaledVector(upward, sy)
    leaves.positions.push(point.x, point.y, point.z)
    const out = new THREE.Vector3((point.x - crown.x) / crown.wide, (point.y - crown.y) / crown.high + 0.35, (point.z - crown.z) / crown.wide).normalize()
    leaves.normals.push(out.x, out.y, out.z)
    leaves.uvs.push((sx + 1) / 2, (sy + 1) / 2)
    // Leaves low down and deep inside the crown get less light.
    const low = THREE.MathUtils.clamp((point.y - crown.y) / crown.high * 0.5 + 0.5, 0, 1)
    const shade = (0.42 + 0.58 * depth) * (0.72 + 0.28 * low)
    leaves.colors.push(shade, shade, shade)
  }
  leaves.indices.push(start, start + 1, start + 2, start, start + 2, start + 3)
}

const geometryOf = (part, colours) => {
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(part.positions, 3))
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(part.normals, 3))
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(part.uvs, 2))
  if (colours) geometry.setAttribute('color', new THREE.Float32BufferAttribute(part.colors, 3))
  geometry.setIndex(part.indices)
  return geometry
}

// Grows one tree of a species: its wood and its leaves, as two geometries.
function grow(species, seed) {
  const roll = (index, salt = 0) => hash(seed * 31 + index, salt, 57)
  const wood = { positions: [], normals: [], uvs: [], indices: [] }
  const leaves = { positions: [], normals: [], uvs: [], colors: [], indices: [] }
  const crown = { x: 0, y: species.middle, z: 0, wide: species.wide, high: species.high }
  const tips = []

  // The trunk, in three lengths that lean a little this way and that.
  const fork = new THREE.Vector3((roll(1) - 0.5) * 0.3, species.trunk, (roll(2) - 0.5) * 0.3)
  const bend = new THREE.Vector3(fork.x * 0.2 + (roll(3) - 0.5) * 0.12, species.trunk * 0.5, fork.z * 0.2 + (roll(4) - 0.5) * 0.12)
  addLimb(wood, new THREE.Vector3(0, -0.05, 0), new THREE.Vector3(0, 0.25, 0), species.girth * 1.5, species.girth * 1.08, 9)
  addLimb(wood, new THREE.Vector3(0, 0.25, 0), bend, species.girth * 1.08, species.girth * 0.9, 9)
  addLimb(wood, bend, fork, species.girth * 0.9, species.girth * 0.74, 9)
  // A cone-shaped tree keeps a leader up its middle.
  const top = new THREE.Vector3(fork.x * 0.5, species.middle + species.high * 0.8, fork.z * 0.5)
  if (species.shape === 'cone') {
    addLimb(wood, fork, top, species.girth * 0.7, 0.03, 7)
    tips.push(top)
  }

  // Limbs leave the trunk and fork once more.
  for (let limb = 0; limb < species.limbs; limb++) {
    const angle = limb / species.limbs * Math.PI * 2 + roll(limb, 5) * 0.7
    const from = species.shape === 'cone'
      ? fork.clone().lerp(top, (limb + 0.5) / species.limbs * 0.75)
      : fork.clone().setY(fork.y - roll(limb, 6) * 0.35)
    const out = species.shape === 'cone' ? species.reach * (1.15 - (limb + 0.5) / species.limbs * 0.8) : species.reach * (0.8 + 0.4 * roll(limb, 7))
    const up = species.rise * (0.7 + 0.6 * roll(limb, 8))
    const elbow = from.clone().add(new THREE.Vector3(Math.cos(angle) * out * 0.55, up * 0.5, Math.sin(angle) * out * 0.55))
    const thick = species.girth * (species.shape === 'cone' ? 0.28 : 0.5)
    addLimb(wood, from, elbow, thick, thick * 0.6, 6)
    for (let twig = 0; twig < 2; twig++) {
      const swing = angle + (twig ? 0.55 : -0.5) + (roll(limb * 3 + twig, 9) - 0.5) * 0.4
      const tip = elbow.clone().add(new THREE.Vector3(Math.cos(swing) * out * 0.6, up * (0.45 + 0.5 * roll(limb * 3 + twig, 10)), Math.sin(swing) * out * 0.6))
      addLimb(wood, elbow, tip, thick * 0.6, 0.02, 5)
      tips.push(tip, elbow.clone().lerp(tip, 0.5))
    }
  }

  // Sprays of leaves: some at the ends of the branches, most scattered through the crown,
  // more of them near its outside than deep within.
  const place = (index) => {
    if (index < tips.length) return { spot: tips[index].clone(), depth: 0.9 }
    const turn = roll(index, 11) * Math.PI * 2
    const lift = roll(index, 12) * 2 - 1
    const depth = Math.pow(roll(index, 13), 0.45)
    if (species.shape === 'cone') {
      // Up a cone: wide at the bottom, a point at the top.
      const t = (lift + 1) / 2
      const radius = species.wide * Math.pow(1 - t * 0.92, 0.85) * depth
      return { spot: new THREE.Vector3(Math.cos(turn) * radius, species.middle - species.high + t * species.high * 1.95, Math.sin(turn) * radius), depth }
    }
    const ring = Math.sqrt(1 - lift * lift)
    // (The underside of a crown is flatter than its top.)
    const squash = lift < 0 ? 0.6 : 1
    return {
      spot: new THREE.Vector3(Math.cos(turn) * ring * species.wide * depth, species.middle + lift * squash * species.high * depth, Math.sin(turn) * ring * species.wide * depth),
      depth,
    }
  }
  for (let index = 0; index < species.cards; index++) {
    const { spot, depth } = place(index)
    const normal = new THREE.Vector3(roll(index, 14) - 0.5, (roll(index, 15) - 0.5) * 0.9, roll(index, 16) - 0.5).normalize()
    addCard(leaves, spot, 0.95 + 0.6 * roll(index, 17), normal, roll(index, 18) * Math.PI * 2, crown, depth)
  }
  return { wood: geometryOf(wood, false), leaves: geometryOf(leaves, true) }
}

export function createTrees() {
  const group = new THREE.Group()
  const time = { value: 0 }
  // Branches and leaves stir in a light wind.
  const stir = (material) => {
    material.onBeforeCompile = (shader) => {
      shader.uniforms.treeTime = time
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float treeTime;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 treeAt = instanceMatrix[ 3 ].xz;
          #else
            vec2 treeAt = vec2( 0.0 );
          #endif
          float treeLift = max( position.y - 1.8, 0.0 );
          transformed.x += sin( treeTime * 1.3 + treeAt.x * 0.37 + treeAt.y * 0.23 ) * treeLift * 0.011
            + sin( treeTime * 2.9 + position.y * 3.1 + position.x * 5.3 + treeAt.x ) * 0.012 * step( 1.8, position.y );
          transformed.z += cos( treeTime * 1.1 + treeAt.y * 0.31 + treeAt.x * 0.19 ) * treeLift * 0.008;`)
    }
    material.customProgramCacheKey = () => 'machi-tree'
    return material
  }
  const leafMaterial = stir(new THREE.MeshStandardMaterial({
    map: paintLeaves(), alphaTest: 0.4, alphaToCoverage: true, side: THREE.DoubleSide, roughness: 0.72, vertexColors: true,
  }))
  // A spray of leaves is lit as a part of the crown, the same on both its faces.
  const stirLeaves = leafMaterial.onBeforeCompile
  leafMaterial.onBeforeCompile = (shader, renderer) => {
    stirLeaves(shader, renderer)
    shader.fragmentShader = shader.fragmentShader.replace('#include <normal_fragment_begin>', `
      float faceDirection = 1.0;
      vec3 normal = normalize( vNormal );
      vec3 nonPerturbedNormal = normal;`)
  }
  leafMaterial.customProgramCacheKey = () => 'machi-leaves'
  const woodMaterial = stir(new THREE.MeshStandardMaterial({ map: texture('bark'), color: '#f2e8dc', roughness: 1 }))
  const models = SPECIES.flatMap((species, index) => [0, 1].map((variant) => ({ species, ...grow(species, index * 2 + variant + 1) })))
  const planted = []

  // Plants a tree on each spot: { x, z, size, kind } with kind from 0 to 1.
  function plant(spots) {
    for (const mesh of planted.splice(0)) {
      group.remove(mesh)
      mesh.dispose()
    }
    const matrix = new THREE.Matrix4()
    const turn = new THREE.Quaternion()
    const upright = new THREE.Vector3(0, 1, 0)
    const color = new THREE.Color()
    models.forEach((model, which) => {
      const mine = spots.filter((spot, index) => Math.floor(hash(index, 3, 71) * models.length) % models.length === which)
      if (!mine.length) return
      const wood = new THREE.InstancedMesh(model.wood, woodMaterial, mine.length)
      const leaves = new THREE.InstancedMesh(model.leaves, leafMaterial, mine.length)
      mine.forEach((spot, index) => {
        const seed = Math.round(spot.x * 7 + spot.z * 13)
        turn.setFromAxisAngle(upright, hash(seed, 1, 5) * Math.PI * 2)
        const spread = spot.size * (0.9 + 0.25 * hash(seed, 2, 5))
        matrix.compose(new THREE.Vector3(spot.x, 0, spot.z), turn, new THREE.Vector3(spread, spot.size, spread))
        wood.setMatrixAt(index, matrix)
        leaves.setMatrixAt(index, matrix)
        // The green of each tree is its own; one in ten has turned for autumn.
        const [red, green, blue] = model.species.tone
        const deep = 0.2 + 0.09 * hash(seed, 3, 5)
        if (spot.kind > 0.9) color.setRGB(deep * (2.6 + hash(seed, 4, 5) * 0.8), deep * (1.5 + hash(seed, 5, 5) * 0.5), deep * 0.3)
        else color.setRGB(deep * red * (0.82 + 0.3 * hash(seed, 6, 5)), deep * 1.45 * green, deep * blue * (0.75 + 0.4 * hash(seed, 7, 5)))
        leaves.setColorAt(index, color)
      })
      for (const mesh of [wood, leaves]) {
        mesh.castShadow = true
        mesh.receiveShadow = true
        mesh.frustumCulled = false
        group.add(mesh)
        planted.push(mesh)
      }
    })
  }

  return {
    group, plant,
    update(delta) {
      time.value += delta
    },
    dispose() {
      plant([])
      for (const model of models) {
        model.wood.dispose()
        model.leaves.dispose()
      }
      leafMaterial.map.dispose()
      leafMaterial.dispose()
      woodMaterial.dispose()
    },
  }
}
