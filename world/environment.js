// Sky, sun, sea and the ground of the town: roads, pavements, the plaza and street furniture.
import * as THREE from 'three'
import { Sky } from 'three/addons/objects/Sky.js'
import { Water } from 'three/addons/objects/Water.js'
import { Batch, TILE, disposeGroup, fbm, glass, glow, hash, material, waterNormals } from './kit.js'
import { createClouds } from './clouds.js'
import { createGrass } from './grass.js'
import { drawPoles, manholeMesh, stopLegends } from './street.js'
import { createTrees } from './trees.js'

const SEA_LEVEL = -1.7
const ROAD_HALF = 2.9 // half the width of the carriageway; the rest of a road tile is pavement
const KERB = 0.15
const HORIZON = '#c8d6de'

export function createEnvironment(scene, renderer) {
  // The sun of an early afternoon: in the south-south-west (south is +z, west is -x), a little
  // under half way up the sky. Houses in Japan face south, so their fronts stand in the sun.
  const sunDirection = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 44), THREE.MathUtils.degToRad(-36))
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
  // Below the horizon lies the ground, far darker than the sky: what faces down, or stands in
  // the shade, gets little light from there.
  const land = new THREE.Mesh(new THREE.CircleGeometry(95, 48),
    new THREE.MeshBasicMaterial({ color: new THREE.Color().setRGB(0.2, 0.21, 0.17), side: THREE.DoubleSide }))
  land.rotation.x = -Math.PI / 2
  land.position.y = -1.2
  skyScene.add(land)
  const environment = pmrem.fromScene(skyScene, 0.02)
  land.geometry.dispose()
  land.material.dispose()
  scene.environment = environment.texture
  scene.environmentIntensity = 0.55
  scene.add(sky)
  const clouds = createClouds(sunDirection)
  scene.add(clouds.mesh)
  scene.fog = new THREE.Fog(HORIZON, 260, 2600)

  const sun = new THREE.DirectionalLight('#fff1dc', 5.2)
  sun.castShadow = true
  sun.shadow.bias = -0.0004
  sun.shadow.normalBias = 0.06
  scene.add(sun)
  scene.add(sun.target)
  const ambient = new THREE.HemisphereLight('#d6e4f3', '#8a8474', 0.22)
  scene.add(ambient)

  const sea = new THREE.Group()
  scene.add(sea)
  const seaGeometry = new THREE.PlaneGeometry(9000, 9000)
  const plainSea = new THREE.Mesh(seaGeometry, new THREE.MeshStandardMaterial({
    color: '#2c5870', roughness: 0.16, metalness: 0.75, envMapIntensity: 1.2,
  }))
  plainSea.rotation.x = -Math.PI / 2
  plainSea.position.y = SEA_LEVEL
  sea.add(plainSea)
  let water = null
  let ripples = null
  let reflections = false

  function setSea(reflective) {
    reflections = reflective
    if (reflective && !water) {
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
    }
    plainSea.visible = !reflections
    if (water) water.visible = reflections
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
  const forest = createTrees()
  const trees = forest.group
  scene.add(trees)
  const meadow = createGrass()
  scene.add(meadow.mesh)
  let meadowWanted = true
  let outdoors = false
  for (const group of [ground, trees, sea, range]) group.visible = false
  meadow.setShown(false)
  let groundKey = ''
  // What glass reflects of the surroundings: the trees as balls of leaves, and a small picture
  // of the ground from above.
  let leafBalls = []
  let groundPicture = null

  // Draws everything that sits on the ground. `free(x, z)` says whether a tile is open land.
  // `clearOf`: strips where nothing may grow, as [{ ax, az, bx, bz, r }] (the way of a monorail).
  function drawTown(town, blocked, clearOf = []) {
    const key = JSON.stringify([town.width, town.height, town.originX, town.originZ, town.plaza, town.roads, [...blocked].sort(), clearOf])
    if (key === groundKey) return
    groundKey = key
    disposeGroup(ground)

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
    {
      const scale = 8
      const canvas = document.createElement('canvas')
      canvas.width = town.width * scale
      canvas.height = town.height * scale
      const picture = canvas.getContext('2d')
      picture.fillStyle = '#5d7b3c'
      picture.fillRect(0, 0, canvas.width, canvas.height)
      for (const { x, z } of town.roads) {
        picture.fillStyle = '#b7b4aa'
        picture.fillRect(x * scale, z * scale, scale, scale)
        picture.fillStyle = '#4a4d4f'
        picture.fillRect(x * scale + (paved(x - 1, z) ? 0 : 1), z * scale + (paved(x, z - 1) ? 0 : 1),
          scale - (paved(x - 1, z) ? 0 : 1) - (paved(x + 1, z) ? 0 : 1), scale - (paved(x, z - 1) ? 0 : 1) - (paved(x, z + 1) ? 0 : 1))
      }
      picture.fillStyle = '#4a4d4f'
      picture.fillRect(town.plaza.x * scale, town.plaza.z * scale, scale, scale)
      groundPicture?.map.dispose()
      const map = new THREE.CanvasTexture(canvas)
      map.colorSpace = THREE.SRGBColorSpace
      groundPicture = { map, x0: west, z0: north, width: east - west, depth: south - north }
    }
    const asphalt = material('asphalt')
    const pavement = material('sidewalk', '#e2e0d8')
    const kerb = material('concrete', '#bdbbb3')
    const paint = material('#e6e3d6', '#ffffff', { roughness: 0.7 })
    const gutter = material('concrete', '#c7c5be')
    const grating = material('#3b3e3f', '#ffffff', { roughness: 0.5, metalness: 0.6 })
    const drain = material('#141617', '#ffffff', { roughness: 0.9 })
    const poleSpots = []
    const manholes = []
    const legends = []

    // (The plaza, where newcomers arrive, is an ordinary crossroads.)
    for (const { x, z } of [...town.roads.filter((road) => `${road.x},${road.z}` !== plazaKey), town.plaza]) {
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
      const SIDES = [[0, -1], [1, 0], [0, 1], [-1, 0]]
      // The L-shaped gutter along every kerb: an apron of concrete 0.35 m wide on the road side,
      // along the sides of the road and round the corners of a junction.
      const lip = ROAD_HALF - 0.08
      SIDES.forEach(([dx, dz], index) => {
        if (!links[index]) {
          if (dx) batch.slab(gutter, cx + dx * lip - (dx > 0 ? 0.35 : 0), cz - TILE / 2, cx + dx * lip + (dx < 0 ? 0.35 : 0), cz + TILE / 2, 0.033)
          else batch.slab(gutter, cx - TILE / 2, cz + dz * lip - (dz > 0 ? 0.35 : 0), cx + TILE / 2, cz + dz * lip + (dz < 0 ? 0.35 : 0), 0.033)
          return
        }
        // An arm of the junction: its kerbs are the faces of the corner pavements.
        for (const side of [-1, 1]) {
          if (dx) batch.slab(gutter, cx + dx * ROAD_HALF - (dx > 0 ? 0 : TILE / 2 - ROAD_HALF), cz + side * lip - (side > 0 ? 0.35 : 0), cx + dx * ROAD_HALF + (dx > 0 ? TILE / 2 - ROAD_HALF : 0), cz + side * lip + (side < 0 ? 0.35 : 0), 0.033)
          else batch.slab(gutter, cx + side * lip - (side > 0 ? 0.35 : 0), cz + dz * ROAD_HALF - (dz > 0 ? 0 : TILE / 2 - ROAD_HALF), cx + side * lip + (side < 0 ? 0.35 : 0), cz + dz * ROAD_HALF + (dz > 0 ? TILE / 2 - ROAD_HALF : 0), 0.033)
        }
      })
      if (straightZ || straightX) {
        // The centre line: 150 mm wide, broken into 5 m of paint and 5 m of gap (counted along
        // the whole road, so that the dashes run on from one stretch to the next).
        const middle = straightZ ? cz : cx
        for (let start = Math.floor((middle - TILE / 2) / 10) * 10; start < middle + TILE / 2; start += 10) {
          const from = Math.max(start, middle - TILE / 2)
          const to = Math.min(start + 5, middle + TILE / 2)
          if (to - from < 0.05) continue
          if (straightZ) batch.slab(paint, cx - 0.075, from, cx + 0.075, to, 0.045)
          else batch.slab(paint, from, cz - 0.075, to, cz + 0.075, 0.045)
        }
        // A drain under a grating in the gutter, about every 24 m, on alternate sides.
        const along = straightZ ? z : x
        if (((along % 3) + 3) % 3 === 1) {
          const side = ((Math.floor(along / 3) % 2) + 2) % 2 ? 1 : -1
          const [gx, gz] = straightZ ? [cx + side * (lip - 0.2), cz] : [cx, cz + side * (lip - 0.2)]
          batch.box(grating, gx, 0.033, gz, straightZ ? 0.4 : 0.5, 0.012, straightZ ? 0.5 : 0.4)
          for (let bar = -0.2; bar <= 0.2; bar += 0.033) {
            batch.box(drain, gx + (straightZ ? 0 : bar), 0.035, gz + (straightZ ? bar : 0), straightZ ? 0.36 : 0.012, 0.004, straightZ ? 0.012 : 0.36)
          }
        }
        // A manhole now and then in the middle of a lane.
        if (hash(x + 3, z + 11, 5) < 0.28) manholes.push({ x: cx + (straightZ ? 1.45 * (hash(x, z, 6) < 0.5 ? -1 : 1) : 0), z: cz + (straightX ? 1.45 * (hash(x, z, 6) < 0.5 ? -1 : 1) : 0), turn: hash(x, z, 7) * 6 })
        // A utility pole on the pavement about every 32 m.
        if (((along % 4) + 4) % 4 === 0) {
          poleSpots.push({ x: cx + (straightZ ? 3.58 : 0), z: cz + (straightX ? 3.58 : 0), alongX: straightX, along: straightX ? [1, 0] : [0, 1], across: straightX ? [0, -1] : [-1, 0] })
        }
      } else if (links.filter(Boolean).length >= 3) {
        // Every junction has a manhole under its middle.
        manholes.push({ x: cx, z: cz, turn: hash(x, z, 8) * 6 })
        const crossing = links.every(Boolean)
        SIDES.forEach(([dx, dz], index) => {
          if (!links[index]) return
          // A crossroads has zebra crossings on its arms: bars 450 mm wide and 450 apart,
          // 4 m long, starting 0.5 m out from the junction.
          if (crossing) {
            for (let across = -ROAD_HALF + 0.75; across <= ROAD_HALF - 0.7; across += 0.9) {
              const near = ROAD_HALF + 0.5
              const far = near + 4
              if (dx) batch.slab(paint, cx + dx * (dx > 0 ? near : far), cz + across - 0.225, cx + dx * (dx > 0 ? far : near), cz + across + 0.225, 0.045)
              else batch.slab(paint, cx + across - 0.225, cz + dz * (dz > 0 ? near : far), cx + across + 0.225, cz + dz * (dz > 0 ? far : near), 0.045)
            }
          }
          // Traffic on the north-south roads gives way: a stop line 450 mm wide across the lane
          // that comes to the junction (on the left, as traffic keeps to the left), and
          // 「止まれ」 behind it, where the road runs straight for long enough.
          if (dx) return
          const ahead = (steps) => {
            const tx = x
            const tz = z + dz * steps
            const next = [[0, -1], [1, 0], [0, 1], [-1, 0]].map(([ex, ez]) => paved(tx + ex, tz + ez))
            return paved(tx, tz) && next[0] && next[2] && !next[1] && !next[3]
          }
          if (!ahead(1)) return
          const stop = (crossing ? ROAD_HALF + 4.5 : ROAD_HALF) + 1.5
          const lane = -dz
          const [x0, x1] = lane > 0 ? [cx + 0.1, cx + lip - 0.35] : [cx - lip + 0.35, cx - 0.1]
          batch.slab(paint, x0, cz + dz * (dz > 0 ? stop : stop + 0.45), x1, cz + dz * (dz > 0 ? stop + 0.45 : stop), 0.045)
          // (The legend reaches some 12 m back from the middle of the junction: into the next tile.)
          if (paved(x, z + dz * 2)) {
            const centre = stop + 0.45 + 1.5 + 3
            legends.push({ x: (x0 + x1) / 2, z: cz + dz * centre, turn: Math.atan2(0, -dz) })
          }
        })
      }
    }


    // Utility poles carry the lines along the roads: each pole is joined to the next one along
    // the same line, up to 40 m on (across a junction too); a pole at the end of a line is held
    // by a stay; every other pole carries a transformer, some a street light.
    const spans = []
    const lines = new Map()
    // Nothing stands or is strung in the way of a monorail.
    const clearOfLine = (px, pz, room) => clearOf.every(({ ax, az, bx, bz, r }) => {
      const [ex, ez] = [bx - ax, bz - az]
      const t = Math.min(1, Math.max(0, ((px - ax) * ex + (pz - az) * ez) / (ex * ex + ez * ez || 1)))
      return Math.hypot(px - ax - ex * t, pz - az - ez * t) > r + room
    })
    for (let index = poleSpots.length - 1; index >= 0; index--) if (!clearOfLine(poleSpots[index].x, poleSpots[index].z, 1.5)) poleSpots.splice(index, 1)
    for (const spot of poleSpots) {
      const key = spot.alongX ? `x|${spot.z.toFixed(2)}` : `z|${spot.x.toFixed(2)}`
      if (!lines.has(key)) lines.set(key, [])
      lines.get(key).push(spot)
    }
    for (const line of lines.values()) {
      line.sort((p, q) => (p.alongX ? p.x - q.x : p.z - q.z))
      line.forEach((spot, index) => {
        const next = line[index + 1]
        const gap = next ? Math.hypot(next.x - spot.x, next.z - spot.z) : Infinity
        const clear = next && [0.2, 0.4, 0.6, 0.8].every((t) => clearOfLine(spot.x + (next.x - spot.x) * t, spot.z + (next.z - spot.z) * t, 0))
        if (gap <= 40 && clear) spans.push([spot, next])
        spot.transformer = index % 2 === 0
        spot.light = hash(spot.x, spot.z, 9) > 0.45
        const before = index > 0 && spans.some(([, end]) => end === spot)
        spot.stay = !before ? -1 : !(gap <= 40 && clear) ? 1 : 0
      })
    }
    drawPoles(batch, poleSpots, spans)
    const wirePoints = []
    batch.build(ground, { where: 'out' })
    if (manholes.length) ground.add(manholeMesh(manholes))
    if (legends.length) ground.add(stopLegends(legends))
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
    // Nothing grows in the way of the monorail.
    const offLine = (spot) => clearOf.every(({ ax, az, bx, bz, r }) => {
      const [ex, ez] = [bx - ax, bz - az]
      const t = Math.min(1, Math.max(0, ((spot.x - ax) * ex + (spot.z - az) * ez) / (ex * ex + ez * ez || 1)))
      return Math.hypot(spot.x - ax - ex * t, spot.z - az - ez * t) > r + 1.8 * spot.size
    })
    spots.splice(0, spots.length, ...spots.filter(offLine))
    leafBalls = spots.map((spot) => ({ x: spot.x, y: 3.4 * spot.size + 0.8, z: spot.z, r: 1.7 * spot.size }))
    forest.plant(spots)
    // Grass grows on the open land: not on roads, the plaza or anybody's lot.
    const taken = new Set(blocked)
    meadow.setGround((x, z) => {
      const tx = Math.round(x / TILE + town.originX)
      const tz = Math.round(z / TILE + town.originZ)
      return tx >= 0 && tz >= 0 && tx < town.width && tz < town.height && !paved(tx, tz) && !taken.has(`${tx},${tz}`)
    })
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
    meadowWanted = quality !== 'low'
    scene.traverse((node) => {
      if (node.material) node.material.needsUpdate = true
    })
  }

  // Keeps the shadow box centred on what the player is looking at.
  function update(delta, focus, immersive = false) {
    const texel = (sun.userData.reach ?? 60) * 2 / sun.shadow.mapSize.x
    sun.target.position.set(Math.round(focus.x / texel) * texel, 0, Math.round(focus.z / texel) * texel)
    sun.position.copy(sun.target.position).addScaledVector(sunDirection, 200)
    sky.position.set(focus.x, 0, focus.z)
    clouds.update(delta, focus)
    if (!outdoors) {
      meadow.setShown(false)
      return
    }
    range.position.set(focus.x * 0.9, 0, focus.z * 0.9)
    sea.position.set(Math.round(focus.x / 40) * 40, 0, Math.round(focus.z / 40) * 40)
    forest.update(delta)
    // (A headset draws every frame twice: the grass is left out there.)
    meadow.setShown(meadowWanted && !immersive)
    meadow.update(delta, focus)
    // Water renders the scene again for its reflection. Keep that pass out of immersive frames.
    const showReflection = reflections && !immersive
    plainSea.visible = !showReflection
    if (water) {
      water.visible = showReflection
      if (showReflection) water.material.uniforms.time.value += delta * 0.6
    }
  }

  return {
    sun, ambient, sunDirection, drawTown, setQuality, update,
    trees: () => (outdoors ? leafBalls : []),
    groundMap: () => (outdoors ? groundPicture : null),
    // Indoors or in a region town the flat island is hidden, while the sky keeps lighting the world.
    setOutdoors(visible) {
      outdoors = Boolean(visible)
      for (const group of [ground, trees, sea, range]) group.visible = outdoors
      meadow.setShown(outdoors && meadowWanted)
    },
    dispose() {
      disposeGroup(ground)
      forest.dispose()
      meadow.dispose()
      clouds.dispose()
      seaGeometry.dispose()
      plainSea.material.dispose()
      water?.material.dispose()
      ripples?.dispose()
      environment.dispose()
      pmrem.dispose()
    },
  }
}
