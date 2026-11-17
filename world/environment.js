// Sky, sun, sea and the ground of the town: roads, pavements, the plaza and street furniture.
import * as THREE from 'three'
import { Sky } from 'three/addons/objects/Sky.js'
import { Water } from 'three/addons/objects/Water.js'
import { Batch, TILE, disposeGroup, fbm, glass, glow, hash, material, waterNormals } from './kit.js'

const SEA_LEVEL = -1.7
const ROAD_HALF = 2.9 // half the width of the carriageway; the rest of a road tile is pavement
const KERB = 0.15
const HORIZON = '#c8d6de'

export function createEnvironment(scene, renderer) {
  const sunDirection = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 40), THREE.MathUtils.degToRad(-128))
  const sky = new Sky()
  sky.scale.setScalar(4000)
  const uniforms = sky.material.uniforms
  uniforms.turbidity.value = 4.2
  uniforms.rayleigh.value = 1.5
  uniforms.mieCoefficient.value = 0.004
  uniforms.mieDirectionalG.value = 0.82
  uniforms.sunPosition.value.copy(sunDirection)

  // The same sky lights every surface, which is what makes glass and water reflect it.
  const pmrem = new THREE.PMREMGenerator(renderer)
  const skyScene = new THREE.Scene()
  skyScene.add(sky)
  const environment = pmrem.fromScene(skyScene, 0.02)
  scene.environment = environment.texture
  scene.environmentIntensity = 0.6
  scene.add(sky)
  scene.fog = new THREE.Fog(HORIZON, 260, 2600)

  const sun = new THREE.DirectionalLight('#fff1dc', 4.2)
  sun.castShadow = true
  sun.shadow.bias = -0.0004
  sun.shadow.normalBias = 0.06
  scene.add(sun)
  scene.add(sun.target)
  const ambient = new THREE.HemisphereLight('#d6e4f3', '#8a8474', 0.7)
  scene.add(ambient)

  const sea = new THREE.Group()
  scene.add(sea)
  const seaGeometry = new THREE.PlaneGeometry(9000, 9000)
  let water = null
  let ripples = null

  function setSea(reflective) {
    for (const child of [...sea.children]) {
      sea.remove(child)
      child.material.dispose()
    }
    water = null
    if (reflective) {
      ripples ??= waterNormals()
      water = new Water(seaGeometry, {
        textureWidth: 512, textureHeight: 512, waterNormals: ripples,
        sunDirection: sunDirection.clone(), sunColor: '#fff3df', waterColor: '#17384a',
        distortionScale: 2.4, fog: true,
      })
      water.material.uniforms.size.value = 0.22
      water.rotation.x = -Math.PI / 2
      water.position.y = SEA_LEVEL
      sea.add(water)
    } else {
      const plain = new THREE.Mesh(seaGeometry, new THREE.MeshStandardMaterial({
        color: '#2c5870', roughness: 0.16, metalness: 0.75, envMapIntensity: 1.2,
      }))
      plain.rotation.x = -Math.PI / 2
      plain.position.y = SEA_LEVEL
      sea.add(plain)
    }
  }

  // A hazy mountain range all the way round the horizon.
  const range = new THREE.Group()
  scene.add(range)
  {
    const positions = []
    const colors = []
    const steps = 220
    const near = new THREE.Color('#7f97a6')
    const far = new THREE.Color('#aebfca')
    // Both ridges stay inside the sky box, which would otherwise be drawn over them.
    for (const [radius, tall, tint, seed] of [[1780, 330, far, 3], [1320, 200, near, 11]]) {
      const peak = (step) => 30 + tall * Math.pow(fbm(Math.cos(step / steps * Math.PI * 2) * 3 + seed, Math.sin(step / steps * Math.PI * 2) * 3 + seed, 4), 1.6) * 2.1
      for (let step = 0; step < steps; step++) {
        const a = step / steps * Math.PI * 2
        const b = (step + 1) / steps * Math.PI * 2
        const pa = [Math.cos(a) * radius, Math.sin(a) * radius]
        const pb = [Math.cos(b) * radius, Math.sin(b) * radius]
        positions.push(pa[0], SEA_LEVEL - 4, pa[1], pa[0], peak(step), pa[1], pb[0], peak(step + 1), pb[1])
        positions.push(pa[0], SEA_LEVEL - 4, pa[1], pb[0], peak(step + 1), pb[1], pb[0], SEA_LEVEL - 4, pb[1])
        for (let vertex = 0; vertex < 6; vertex++) colors.push(tint.r, tint.g, tint.b)
      }
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    range.add(new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })))
  }

  const ground = new THREE.Group()
  scene.add(ground)
  const trees = new THREE.Group()
  scene.add(trees)
  const trunkGeometry = new THREE.CylinderGeometry(0.13, 0.22, 1, 7)
  trunkGeometry.translate(0, 0.5, 0)
  const crownGeometry = new THREE.IcosahedronGeometry(1, 1)
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: '#6b5642', roughness: 1 })
  const crownMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.95 })
  let groundKey = ''

  // Draws everything that sits on the ground. `free(x, z)` says whether a tile is open land.
  function drawTown(town, blocked) {
    const key = JSON.stringify([town.width, town.height, town.originX, town.originZ, town.plaza, town.roads, [...blocked].sort()])
    if (key === groundKey) return
    groundKey = key
    disposeGroup(ground)
    disposeGroup(trees)

    const batch = new Batch()
    const worldX = (x) => (x - town.originX) * TILE
    const worldZ = (z) => (z - town.originZ) * TILE
    const west = worldX(-0.5)
    const east = worldX(town.width - 0.5)
    const north = worldZ(-0.5)
    const south = worldZ(town.height - 0.5)
    const apron = 3.2

    batch.slab(material('grass'), west, north, east, south, 0)
    // A promenade and sea wall run round the edge of the town.
    const walk = material('sidewalk')
    batch.slab(walk, west - apron, north - apron, east + apron, north, 0.02)
    batch.slab(walk, west - apron, south, east + apron, south + apron, 0.02)
    batch.slab(walk, west - apron, north, west, south, 0.02)
    batch.slab(walk, east, north, east + apron, south, 0.02)
    const wall = material('concrete', '#d8d6cf')
    const lengthX = east - west + apron * 2 + 0.7
    const lengthZ = south - north + apron * 2 + 0.7
    const middleX = (west + east) / 2
    const middleZ = (north + south) / 2
    for (const [x, z, w, d] of [
      [middleX, north - apron - 0.35, lengthX, 0.7], [middleX, south + apron + 0.35, lengthX, 0.7],
      [west - apron - 0.35, middleZ, 0.7, lengthZ], [east + apron + 0.35, middleZ, 0.7, lengthZ],
    ]) {
      batch.box(wall, x, (SEA_LEVEL - 1.5 + 0.55) / 2, z, w, 0.55 - (SEA_LEVEL - 1.5), d)
      batch.box(material('concrete', '#c4c2ba'), x, 0.63, z, w + 0.16, 0.16, d + 0.16)
    }
    batch.box(material('dirt'), middleX, (SEA_LEVEL - 1.5) / 2 - 0.01, middleZ, lengthX - 0.2, -(SEA_LEVEL - 1.5), lengthZ - 0.2)

    const roads = new Set(town.roads.map(({ x, z }) => `${x},${z}`))
    const plazaKey = `${town.plaza.x},${town.plaza.z}`
    const paved = (x, z) => roads.has(`${x},${z}`) || `${x},${z}` === plazaKey
    const asphalt = material('asphalt')
    const pavement = material('sidewalk', '#e2e0d8')
    const kerb = material('concrete', '#bdbbb3')
    const paint = material('#e6e3d6', '#ffffff', { roughness: 0.7 })
    const poleSpots = []

    for (const { x, z } of town.roads) {
      if (`${x},${z}` === plazaKey) continue
      const cx = worldX(x)
      const cz = worldZ(z)
      const links = [[0, -1], [1, 0], [0, 1], [-1, 0]].map(([dx, dz]) => paved(x + dx, z + dz))
      batch.slab(asphalt, cx - ROAD_HALF, cz - ROAD_HALF, cx + ROAD_HALF, cz + ROAD_HALF, 0.03)
      const reach = TILE / 2
      const arms = [
        [cx - ROAD_HALF, cz - reach, cx + ROAD_HALF, cz - ROAD_HALF],
        [cx + ROAD_HALF, cz - ROAD_HALF, cx + reach, cz + ROAD_HALF],
        [cx - ROAD_HALF, cz + ROAD_HALF, cx + ROAD_HALF, cz + reach],
        [cx - reach, cz - ROAD_HALF, cx - ROAD_HALF, cz + ROAD_HALF],
      ]
      for (const [index, [x0, z0, x1, z1]] of arms.entries()) {
        if (links[index]) batch.slab(asphalt, x0, z0, x1, z1, 0.03)
        else {
          batch.box(pavement, (x0 + x1) / 2, KERB / 2, (z0 + z1) / 2, x1 - x0, KERB, z1 - z0)
          // A kerbstone edges the carriageway.
          const alongX = index % 2 === 0
          const inner = [cz - ROAD_HALF, cx + ROAD_HALF, cz + ROAD_HALF, cx - ROAD_HALF][index]
          batch.box(kerb, alongX ? cx : inner, KERB / 2 + 0.01, alongX ? inner : cz, alongX ? ROAD_HALF * 2 : 0.16, KERB + 0.02, alongX ? 0.16 : ROAD_HALF * 2)
        }
      }
      for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
        const size = reach - ROAD_HALF
        batch.box(pavement, cx + sx * (ROAD_HALF + size / 2), KERB / 2, cz + sz * (ROAD_HALF + size / 2), size, KERB, size)
      }
      const straightZ = links[0] && links[2] && !links[1] && !links[3]
      const straightX = links[1] && links[3] && !links[0] && !links[2]
      if (straightZ || straightX) {
        for (const offset of [-2, 2]) {
          batch.slab(paint, cx + (straightX ? offset - 0.9 : -0.07), cz + (straightZ ? offset - 0.9 : -0.07),
            cx + (straightX ? offset + 0.9 : 0.07), cz + (straightZ ? offset + 0.9 : 0.07), 0.045)
        }
        if ((x + z) % 2 === 0) poleSpots.push({ x: cx + (straightZ ? 3.5 : 0), z: cz + (straightX ? 3.5 : 0), alongX: straightX })
      } else if (links.filter(Boolean).length >= 3) {
        // Zebra crossings mark each arm of a junction.
        for (const [index, [dx, dz]] of [[0, -1], [1, 0], [0, 1], [-1, 0]].entries()) {
          if (!links[index]) continue
          for (let stripe = -2; stripe <= 2; stripe++) {
            const along = stripe * 0.95
            const px = cx + dx * 2.2 + (dx ? 0 : along)
            const pz = cz + dz * 2.2 + (dz ? 0 : along)
            batch.slab(paint, px - (dx ? 0.5 : 0.24), pz - (dz ? 0.5 : 0.24), px + (dx ? 0.5 : 0.24), pz + (dz ? 0.5 : 0.24), 0.045)
          }
        }
      }
    }

    // The plaza: a paved square with a fountain, benches and lamps.
    const px = worldX(town.plaza.x)
    const pz = worldZ(town.plaza.z)
    batch.slab(material('pavers'), px - TILE / 2, pz - TILE / 2, px + TILE / 2, pz + TILE / 2, 0.05)
    batch.cylinder(material('concrete', '#dedbd2'), px, 0.05, pz, 1.75, 0.5, 20)
    batch.cylinder(glass('#3a6d7c'), px, 0.5, pz, 1.52, 0.07, 20)
    batch.cylinder(material('concrete', '#e6e3da'), px, 0.5, pz, 0.26, 1.0, 10, 0.16)
    batch.cylinder(material('concrete', '#e6e3da'), px, 1.5, pz, 0.62, 0.12, 14, 0.7)
    batch.cylinder(glass('#4d8795'), px, 1.6, pz, 0.6, 0.04, 14)
    const timber = material('wood', '#c9b392')
    const iron = material('#3d4447', '#ffffff', { roughness: 0.6, metalness: 0.5 })
    for (const [bx, bz, turn] of [[-2.9, 2.6, 0], [2.9, -2.6, 0], [2.7, 2.9, Math.PI / 2], [-2.7, -2.9, Math.PI / 2]]) {
      batch.box(timber, px + bx, 0.5, pz + bz, 1.7, 0.07, 0.46, turn)
      batch.box(timber, px + bx + Math.sin(turn) * -0.22, 0.83, pz + bz + Math.cos(turn) * -0.22, 1.7, 0.36, 0.06, turn)
      for (const side of [-0.7, 0.7]) {
        batch.box(iron, px + bx + Math.cos(turn) * side, 0.27, pz + bz - Math.sin(turn) * side, 0.07, 0.46, 0.44, turn)
      }
    }
    const lampSpots = [[px - 3.4, pz - 3.4], [px + 3.4, pz + 3.4], [px + 3.4, pz - 3.4], [px - 3.4, pz + 3.4]]
    for (const spot of poleSpots) {
      if (hash(spot.x, spot.z) > 0.5) lampSpots.push([spot.x + (spot.alongX ? 0 : -7), spot.z + (spot.alongX ? -7 : 0)])
    }
    for (const [lx, lz] of lampSpots) {
      batch.cylinder(iron, lx, 0, lz, 0.09, 4.3, 8, 0.06)
      batch.cylinder(iron, lx, 4.3, lz, 0.32, 0.1, 8, 0.16)
      batch.cylinder(glow('#fff1cf', 0.9), lx, 4.05, lz, 0.2, 0.25, 8)
    }

    // Utility poles carry wires along the straight roads.
    const pole = material('concrete', '#b9b6ad')
    const wirePoints = []
    for (const spot of poleSpots) {
      batch.cylinder(pole, spot.x, 0, spot.z, 0.17, 8.6, 8, 0.11)
      batch.box(iron, spot.x, 7.7, spot.z, spot.alongX ? 0.1 : 1.7, 0.1, spot.alongX ? 1.7 : 0.1)
      batch.box(iron, spot.x, 6.9, spot.z, spot.alongX ? 0.1 : 1.2, 0.09, spot.alongX ? 1.2 : 0.09)
      batch.cylinder(material('#6d6f6a'), spot.x + (spot.alongX ? 0 : 0.36), 5.6, spot.z + (spot.alongX ? 0.36 : 0), 0.24, 0.62, 8)
    }
    for (const from of poleSpots) {
      const to = poleSpots.find((other) => other !== from && other.alongX === from.alongX
        && (from.alongX ? other.z === from.z && other.x - from.x === TILE * 2 : other.x === from.x && other.z - from.z === TILE * 2))
      if (!to) continue
      for (const [offset, height] of [[-0.78, 7.78], [0.78, 7.78], [0, 6.97]]) {
        for (let step = 0; step < 8; step++) {
          for (const t of [step / 8, (step + 1) / 8]) {
            wirePoints.push(
              from.x + (to.x - from.x) * t + (from.alongX ? 0 : offset),
              height - Math.sin(t * Math.PI) * 0.42,
              from.z + (to.z - from.z) * t + (from.alongX ? offset : 0),
            )
          }
        }
      }
    }
    batch.build(ground)
    if (wirePoints.length) {
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(wirePoints, 3))
      const wires = new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({ color: '#24282a' }))
      wires.userData.ownMaterial = true
      ground.add(wires)
    }

    // Trees fill the land nobody has built on.
    const spots = []
    for (let x = 0; x < town.width; x++) {
      for (let z = 0; z < town.height; z++) {
        if (paved(x, z) || blocked.has(`${x},${z}`)) continue
        const stableX = x - town.originX
        const stableZ = z - town.originZ
        const chance = hash(stableX + 31, stableZ + 17)
        const edge = x === 0 || z === 0 || x === town.width - 1 || z === town.height - 1
        const count = (chance > 0.42 ? 1 : 0) + (chance > 0.8 ? 1 : 0) + (edge && chance > 0.2 ? 1 : 0)
        for (let index = 0; index < count; index++) {
          spots.push({
            x: worldX(x) + (hash(stableX, stableZ, index + 1) - 0.5) * 5.6,
            z: worldZ(z) + (hash(stableZ, stableX, index + 5) - 0.5) * 5.6,
            size: 0.75 + hash(stableX, stableZ, index + 9) * 0.75,
            kind: hash(stableX, stableZ, index + 12),
          })
        }
      }
    }
    if (spots.length) {
      const trunks = new THREE.InstancedMesh(trunkGeometry, trunkMaterial, spots.length)
      const crowns = new THREE.InstancedMesh(crownGeometry, crownMaterial, spots.length * 3)
      const matrix = new THREE.Matrix4()
      const turn = new THREE.Quaternion()
      const color = new THREE.Color()
      for (const [index, spot] of spots.entries()) {
        const trunkHeight = 2.3 * spot.size + 0.8
        matrix.compose(new THREE.Vector3(spot.x, 0, spot.z), turn.identity(), new THREE.Vector3(spot.size, trunkHeight, spot.size))
        trunks.setMatrixAt(index, matrix)
        for (let blob = 0; blob < 3; blob++) {
          const spread = blob ? 0.85 * spot.size : 0
          const angle = hash(index, blob) * Math.PI * 2
          const radius = (blob ? 1.25 : 1.75) * spot.size
          turn.setFromEuler(new THREE.Euler(hash(index, blob, 2) * 3, hash(index, blob, 3) * 3, 0))
          matrix.compose(
            new THREE.Vector3(spot.x + Math.cos(angle) * spread, trunkHeight + radius * 0.55 + (blob ? -0.45 : 0.25) * spot.size, spot.z + Math.sin(angle) * spread),
            turn, new THREE.Vector3(radius, radius * 0.86, radius),
          )
          crowns.setMatrixAt(index * 3 + blob, matrix)
          const autumn = spot.kind > 0.9
          color.setHSL(autumn ? 0.08 + hash(index, 7) * 0.04 : 0.25 + hash(index, blob, 8) * 0.07, autumn ? 0.55 : 0.42 + hash(index, 9) * 0.14, (autumn ? 0.26 : 0.17) + hash(index, blob, 10) * 0.07)
          crowns.setColorAt(index * 3 + blob, color)
        }
      }
      for (const mesh of [trunks, crowns]) {
        mesh.castShadow = true
        mesh.receiveShadow = true
        mesh.frustumCulled = false
        trees.add(mesh)
      }
    }
  }

  function setQuality(quality) {
    const shadows = quality !== 'low'
    renderer.shadowMap.enabled = shadows
    sun.castShadow = shadows
    const size = quality === 'high' ? 4096 : 2048
    const reach = quality === 'high' ? 90 : 60
    if (sun.shadow.mapSize.x !== size) {
      sun.shadow.mapSize.set(size, size)
      sun.shadow.map?.dispose()
      sun.shadow.map = null
    }
    Object.assign(sun.shadow.camera, { left: -reach, right: reach, top: reach, bottom: -reach, near: 1, far: 420 })
    sun.shadow.camera.updateProjectionMatrix()
    sun.userData.reach = reach
    setSea(quality === 'high')
    scene.traverse((node) => {
      if (node.material) node.material.needsUpdate = true
    })
  }

  // Keeps the shadow box centred on what the player is looking at.
  function update(delta, focus) {
    const texel = (sun.userData.reach ?? 60) * 2 / sun.shadow.mapSize.x
    sun.target.position.set(Math.round(focus.x / texel) * texel, 0, Math.round(focus.z / texel) * texel)
    sun.position.copy(sun.target.position).addScaledVector(sunDirection, 200)
    sky.position.set(focus.x, 0, focus.z)
    range.position.set(focus.x * 0.9, 0, focus.z * 0.9)
    sea.position.set(Math.round(focus.x / 40) * 40, 0, Math.round(focus.z / 40) * 40)
    if (water) water.material.uniforms.time.value += delta * 0.6
  }

  return {
    sun, ambient, sunDirection, drawTown, setQuality, update,
    // Indoors the town is hidden, but its light keeps coming through the windows.
    setOutdoors(visible) {
      for (const group of [ground, trees, sea, range]) group.visible = visible
    },
    dispose() {
      disposeGroup(ground)
      disposeGroup(trees)
      environment.dispose()
      pmrem.dispose()
    },
  }
}
