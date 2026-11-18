// Grass that stands up. The open land of the town is a painted plane; close to the viewer it
// also grows tufts of blades, so that a meadow looks like one from eye level and not like a
// carpet. The tufts follow the viewer: the same tuft always grows on the same spot, and only
// the spots within reach are planted.
import * as THREE from 'three'
import { hash } from './kit.js?v=online-1794980046418'

const REACH = 17 // how far from the viewer tufts grow (metres)
const SPACING = 0.34 // one tuft to a square of this size
const MOST = 9000

// A picture of a handful of blades, clear between them.
function paintBlades() {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 128
  const context = canvas.getContext('2d')
  for (let blade = 0; blade < 34; blade++) {
    const foot = 14 + hash(blade, 1, 23) * 228
    const lean = (hash(blade, 2, 23) - 0.5) * 70
    const tall = 46 + hash(blade, 3, 23) * 78
    const wide = 5 + hash(blade, 4, 23) * 6
    const light = 0.62 + 0.38 * hash(blade, 5, 23)
    const dry = hash(blade, 6, 23)
    // Blades are drawn pale: each tuft is tinted with its own green.
    context.fillStyle = `rgb(${Math.round(light * (196 + dry * 50))},${Math.round(light * 246)},${Math.round(light * (150 + (1 - dry) * 40))})`
    context.beginPath()
    context.moveTo(foot - wide / 2, 128)
    context.quadraticCurveTo(foot + lean * 0.35, 128 - tall * 0.6, foot + lean, 128 - tall)
    context.quadraticCurveTo(foot + lean * 0.45 + wide * 0.5, 128 - tall * 0.5, foot + wide / 2, 128)
    context.closePath()
    context.fill()
  }
  const map = new THREE.CanvasTexture(canvas)
  map.colorSpace = THREE.SRGBColorSpace
  map.anisotropy = 4
  return map
}

// One tuft: three upright cards through the same spot, lit like the ground they stand on.
function tuftGeometry() {
  const positions = []
  const normals = []
  const uvs = []
  const indices = []
  for (let card = 0; card < 3; card++) {
    const angle = card / 3 * Math.PI + 0.3
    const [dx, dz] = [Math.cos(angle) * 0.21, Math.sin(angle) * 0.21]
    const start = positions.length / 3
    for (const [side, up] of [[-1, 0], [1, 0], [1, 1], [-1, 1]]) {
      positions.push(dx * side, up * 0.26, dz * side)
      normals.push(0, 1, 0)
      uvs.push((side + 1) / 2, up)
    }
    indices.push(start, start + 1, start + 2, start, start + 2, start + 3)
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3))
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  geometry.setIndex(indices)
  return geometry
}

export function createGrass() {
  const uniforms = { grassTime: { value: 0 }, grassEye: { value: new THREE.Vector3() } }
  const material = new THREE.MeshStandardMaterial({
    map: paintBlades(), alphaTest: 0.45, alphaToCoverage: true, side: THREE.DoubleSide, roughness: 0.9,
  })
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms)
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float grassTime;\nuniform vec3 grassEye;\nvarying float vGrassUp;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vGrassUp = uv.y;
        #ifdef USE_INSTANCING
          vec2 grassAt = instanceMatrix[ 3 ].xz;
          // Towards the edge of where it grows the grass sinks into the ground, so that it never pops up.
          float grassFar = distance( grassAt, grassEye.xz );
          transformed.y *= 1.0 - smoothstep( ${(REACH - 6).toFixed(1)}, ${(REACH - 0.5).toFixed(1)}, grassFar );
          // The tips stir in the wind.
          transformed.x += sin( grassTime * 1.7 + grassAt.x * 0.9 + grassAt.y * 0.7 ) * 0.035 * uv.y;
          transformed.z += cos( grassTime * 1.3 + grassAt.x * 0.6 - grassAt.y * 0.8 ) * 0.025 * uv.y;
        #endif`)
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vGrassUp;')
      // A blade is darker at its foot, down among the others.
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= mix( 0.5, 1.0, vGrassUp );')
      // Both faces of a card are lit as the ground is: from above.
      .replace('#include <normal_fragment_begin>', `
        float faceDirection = 1.0;
        vec3 normal = normalize( vNormal );
        vec3 nonPerturbedNormal = normal;`)
  }
  material.customProgramCacheKey = () => 'machi-grass'
  const mesh = new THREE.InstancedMesh(tuftGeometry(), material, MOST)
  mesh.count = 0
  mesh.frustumCulled = false
  mesh.castShadow = false
  mesh.receiveShadow = true
  const matrix = new THREE.Matrix4()
  const turn = new THREE.Quaternion()
  const upright = new THREE.Vector3(0, 1, 0)
  const scale = new THREE.Vector3()
  const spot = new THREE.Vector3()
  const color = new THREE.Color()
  let grows = null
  let lastX = Infinity
  let lastZ = Infinity
  let shown = true

  // Plants the tufts round a spot. `grows(x, z)` says whether grass grows there.
  function plantRound(x, z) {
    let count = 0
    const cells = Math.ceil(REACH / SPACING)
    const ci = Math.round(x / SPACING)
    const cj = Math.round(z / SPACING)
    for (let j = cj - cells; j <= cj + cells && count < MOST; j++) {
      for (let i = ci - cells; i <= ci + cells && count < MOST; i++) {
        const px = (i + hash(i, j, 3) - 0.5) * SPACING
        const pz = (j + hash(j, i, 5) - 0.5) * SPACING
        if ((px - x) ** 2 + (pz - z) ** 2 > REACH * REACH || !grows(px, pz)) continue
        // Meadow grass grows in patches: thick here, thin there.
        const thick = hash(Math.floor(i / 7), Math.floor(j / 7), 9)
        if (hash(i, j, 11) > 0.45 + thick * 0.55) continue
        const size = 0.7 + hash(i, j, 13) * 0.9
        turn.setFromAxisAngle(upright, hash(i, j, 17) * Math.PI)
        matrix.compose(spot.set(px, 0, pz), turn, scale.set(size, size * (0.7 + thick * 0.7), size))
        mesh.setMatrixAt(count, matrix)
        const dry = hash(i, j, 19)
        mesh.setColorAt(count, color.setRGB(0.20 + dry * 0.13, 0.33 + thick * 0.07, 0.10 + dry * 0.02))
        count++
      }
    }
    mesh.count = count
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }

  return {
    mesh,
    // Where grass grows has changed (the town was redrawn).
    setGround(test) {
      grows = test
      lastX = Infinity
    },
    setShown(visible) {
      shown = visible
      mesh.visible = visible && mesh.count > 0
    },
    // Keeps the grass round the viewer, and lets the wind move it.
    update(delta, eye) {
      uniforms.grassTime.value += delta
      uniforms.grassEye.value.copy(eye)
      if (!shown || !grows) return
      if (Math.abs(eye.x - lastX) + Math.abs(eye.z - lastZ) < 1.5) return
      lastX = eye.x
      lastZ = eye.z
      plantRound(eye.x, eye.z)
      mesh.visible = mesh.count > 0
    },
    dispose() {
      mesh.geometry.dispose()
      material.map.dispose()
      material.dispose()
      mesh.dispose()
    },
  }
}
