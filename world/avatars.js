// Residents: the standard avatar, imported VRM / GLB models, and everything that
// animates them: walking, gimmick controls, blinking, lip sync and swaying bones.
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm'
import { controlStates, createAnimator, createControlInput, validProgram } from './animator.js'
import { textTexture } from './kit.js'

const AVATAR_HEIGHT = 1.6
const VRM_EMOTIONS = ['happy', 'angry', 'sad', 'relaxed', 'surprised']
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const sphereGeometry = new THREE.SphereGeometry(1, 14, 10)
const paints = new Map()

function paint(color, roughness = 0.85) {
  const key = `${color}:${roughness}`
  if (!paints.has(key)) paints.set(key, new THREE.MeshStandardMaterial({ color, roughness }))
  return paints.get(key)
}

function mesh(parent, geometry, colour, x, y, z) {
  const item = new THREE.Mesh(geometry, typeof colour === 'string' ? paint(colour) : colour)
  item.position.set(x, y, z)
  item.castShadow = true
  item.receiveShadow = true
  parent.add(item)
  return item
}

function box(parent, colour, x, y, z, width, height, depth) {
  const item = mesh(parent, boxGeometry, colour, x, y, z)
  item.scale.set(width, height, depth)
  return item
}

function oval(parent, colour, x, y, z, width, height, depth) {
  const item = mesh(parent, sphereGeometry, colour, x, y, z)
  item.scale.set(width, height, depth)
  return item
}

function group(parent, x = 0, y = 0, z = 0) {
  const result = new THREE.Group()
  result.position.set(x, y, z)
  parent.add(result)
  return result
}

function clearLayer(layer) {
  layer.traverse((node) => {
    if (node.isMesh && node.geometry !== boxGeometry && node.geometry !== sphereGeometry) node.geometry.dispose()
  })
  layer.clear()
}

function standardAvatar(parent, color) {
  const node = group(parent)
  node.scale.setScalar(1.12)
  const skin = '#eabe9f'
  const hair = '#5e4d49'
  const trousers = '#6f8492'
  const face = group(node, 0, 1.08, 0)
  oval(face, skin, 0, 0, 0, 0.306, 0.325, 0.274)
  oval(face, hair, 0, 0.151, -0.077, 0.314, 0.256, 0.249)
  oval(face, hair, -0.152, 0.139, 0.107, 0.151, 0.117, 0.158)
  for (const x of [-0.297, 0.297]) oval(face, skin, x, -0.05, 0.02, 0.066, 0.094, 0.059)
  for (const x of [-0.105, 0.105]) oval(face, '#493a3c', x, -0.036, 0.248, 0.029, 0.041, 0.022)
  for (const x of [-0.189, 0.189]) oval(face, '#dc9c8d', x, -0.10, 0.214, 0.046, 0.027, 0.029)
  const mouth = oval(face, '#a85f5a', 0, -0.135, 0.252, 0.04, 0.012, 0.02)
  const shirt = oval(node, color, 0, 0.62, 0, 0.238, 0.28, 0.167)
  const arms = []
  const legs = []
  for (const x of [-0.247, 0.247]) {
    const arm = group(node, x, 0.78, 0)
    arms.push(oval(arm, color, 0, -0.105, 0, 0.091, 0.16, 0.087))
    oval(arm, skin, 0, -0.225, 0, 0.068, 0.081, 0.067)
  }
  for (const x of [-0.119, 0.119]) {
    const leg = group(node, x, 0.44, 0)
    oval(leg, trousers, 0, -0.145, 0, 0.105, 0.207, 0.098)
    oval(leg, '#f2ede4', 0, -0.339, 0.064, 0.116, 0.08, 0.149)
    legs.push(leg)
  }
  node.userData = { shirt, arms, legs, mouth, accessory: group(node), currentOutfit: '' }
  return node
}

function styleOutfit(item, fallbackColor) {
  if (typeof item === 'string') {
    if (item.startsWith('#')) return { kind: 'top', color: item }
    item = { id: item }
  }
  const id = item?.id ?? item?.kind ?? ''
  const kind = item?.kind === 'accessory' || !item?.kind
    ? (/cap|hat|beret/.test(id) ? id : /glass/.test(id) ? 'glasses' : /scarf/.test(id) ? 'scarf' : 'top')
    : item.kind
  return { kind, color: item?.color ?? fallbackColor }
}

function styleAccessory(parent, kind, color, size, height) {
  if (/hat|cap|beret/.test(kind)) {
    oval(parent, color, 0, height + 0.017, 0.005, size * 1.02, size * 0.375, size * 0.81)
    oval(parent, color, 0, height - 0.045, size * 0.21, size * 1.01, size * 0.10, size * 0.85)
    if (kind === 'cap') oval(parent, color, 0, height - 0.061, size * 0.83, size * 0.7, size * 0.10, size * 0.55)
  } else if (/scarf/.test(kind)) {
    oval(parent, color, 0, height - size * 1.60, 0.016, size * 0.67, size * 0.19, size * 0.57)
    box(parent, color, size * 0.35, height - size * 2.11, size * 0.50, size * 0.24, size * 0.85, size * 0.12).rotation.z = 0.21
  } else if (/glass/.test(kind)) {
    for (const x of [-size * 0.385, size * 0.385]) {
      mesh(parent, new THREE.TorusGeometry(size * 0.27, size * 0.046, 8, 16), color, x, height - size * 0.83, size * 0.79)
    }
    box(parent, color, 0, height - size * 0.77, size * 0.78, size * 0.24, size * 0.115, size * 0.12)
  }
}

function applyOutfit(actor, outfit, fallback) {
  const { kind, color } = styleOutfit(outfit, fallback)
  const appearance = actor.standard.userData
  const outfitKey = `${color}:${kind}:${fallback}:${actor.activeURL ?? ''}`
  if (appearance.currentOutfit === outfitKey) return
  appearance.currentOutfit = outfitKey
  const isAccessory = /hat|cap|beret|scarf|glass/.test(kind)
  const shirtPaint = paint(isAccessory ? fallback : color)
  appearance.shirt.material = shirtPaint
  for (const arm of appearance.arms) arm.material = shirtPaint
  clearLayer(appearance.accessory)
  clearLayer(actor.modelAccessory)
  styleAccessory(appearance.accessory, kind, color, 0.30, 1.39)
  if (actor.model?.head && isAccessory) {
    const { width, height } = actor.model.sizing
    styleAccessory(actor.modelAccessory, kind, color, width, height)
  }
}

// Swings the arms and legs of a model that has bones but is not a VRM.
function modelRig(scene) {
  const bones = new Map()
  scene.traverse((bone) => {
    if (!bone.isBone) return
    const name = bone.name.toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .replace(/^(mixamorig[0-9]*|jbip|bip[0-9]*|bn)/, '')
    bones.set(name, bone)
  })
  const find = (...names) => names.map((name) => bones.get(name)).find(Boolean)
  const motions = []

  for (const [short, side, sign] of [['l', 'left', -1], ['r', 'right', 1]]) {
    const findSide = (...parts) => find(...parts.flatMap((part) => [`${side}${part}`, `${short}${part}`, `${part}${short}`]))
    const leg = findSide('upperleg', 'upleg', 'thigh')
    const arm = findSide('upperarm', 'arm')
    const elbow = findSide('lowerarm', 'forearm')

    for (const [bone, swing, child] of [[leg, sign * 0.82], [arm, -sign * 0.55, elbow]]) {
      if (!bone) continue
      const parentRotation = bone.parent.getWorldQuaternion(new THREE.Quaternion())
      const inverse = parentRotation.clone().invert()
      const axis = new THREE.Vector3(1, 0, 0).applyQuaternion(inverse)
      const rest = bone.quaternion.clone()
      if (child) {
        const direction = child.getWorldPosition(new THREE.Vector3())
          .sub(bone.getWorldPosition(new THREE.Vector3())).normalize()
        if (Math.abs(direction.x) > 0.65 && direction.y > -0.6) {
          const lowered = new THREE.Vector3(Math.sign(direction.x) * 0.25, -1, 0).normalize()
          const pose = new THREE.Quaternion().setFromUnitVectors(direction, lowered)
          rest.premultiply(inverse.clone().multiply(pose).multiply(parentRotation))
        }
      }
      motions.push({ bone, axis, rest, swing })
    }
  }

  const rotation = new THREE.Quaternion()
  return {
    head: find('head'),
    walk(stride) {
      for (const { bone, axis, rest, swing } of motions) {
        bone.quaternion.copy(rest).premultiply(rotation.setFromAxisAngle(axis, stride * swing))
      }
    },
  }
}

function vrmWalk(vrm, stride) {
  const rig = vrm.humanoid
  for (const [side, sign] of [['left', -1], ['right', 1]]) {
    const leg = rig.getNormalizedBoneNode(`${side}UpperLeg`)
    const arm = rig.getNormalizedBoneNode(`${side}UpperArm`)
    const elbow = rig.getNormalizedBoneNode(`${side}LowerArm`)
    if (leg) leg.rotation.x = stride * sign * 0.82
    if (arm) {
      arm.rotation.z = -Math.sign(elbow?.position.x || sign) * 1.10
      arm.rotation.x = -stride * sign * 0.55
    }
  }
}

function morphTargetsFor(node, associations, targets) {
  if (node.morphTargetDictionary && node.morphTargetInfluences) targets.push(node)
  for (const child of node.children) {
    // glTF can insert mesh-primitive children for one node. A glTF child node has its own targets.
    if (associations?.get(child)?.nodes === undefined) morphTargetsFor(child, associations, targets)
  }
}

function morphSlots(node, associations, name) {
  const meshes = []
  morphTargetsFor(node, associations, meshes)
  return meshes.map((target) => ({ influences: target.morphTargetInfluences, index: target.morphTargetDictionary[name] }))
    .filter(({ influences, index }) => Number.isInteger(index) && index >= 0 && index < influences.length)
}

// Collects what an imported model's controls drive: visibility, blend shapes, tints and scale.
function expressionParts(source, associations) {
  const defaults = new Map()
  const controls = source.userData.machiExpressions
  if (Array.isArray(controls)) {
    for (const control of controls) {
      if (typeof control?.id !== 'string') continue
      defaults.set(control.id, control.kind === 'slider' ? Number(control.default) || 0 : control.default === true ? 1 : 0)
    }
  }

  const parts = []
  const face = { blink: [], visemes: new Map() }
  source.traverse((node) => {
    const mode = node.userData.machiVisibility
    const hasMode = mode === 'afk' || mode === 'active' || mode === 'hidden'
    const definitions = node.userData.machiExpressionBindings
    const bindings = []
    const rest = new Map()
    if (Array.isArray(definitions) && definitions.length) {
      const remember = (influences, index) => {
        if (!rest.has(influences)) rest.set(influences, new Map())
        if (!rest.get(influences).has(index)) rest.get(influences).set(index, influences[index])
      }
      for (const definition of definitions) {
        if (!defaults.has(definition?.id)) continue
        const morphs = []
        for (const name of new Set([...Object.keys(definition.on?.morphs ?? {}), ...Object.keys(definition.off?.morphs ?? {})])) {
          for (const { influences, index } of morphSlots(node, associations, name)) {
            remember(influences, index)
            const original = rest.get(influences).get(index)
            const on = definition.on?.morphs?.[name]
            const off = definition.off?.morphs?.[name]
            morphs.push({ influences, index, on: Number.isFinite(on) ? on : original, off: Number.isFinite(off) ? off : original })
          }
        }
        bindings.push({
          id: definition.id, morphs,
          on: definition.on ?? {}, off: definition.off ?? {},
        })
      }
    }
    if (hasMode || bindings.length) {
      parts.push({ node, mode, visible: node.visible, bindings, rest, scale: node.scale.clone(), tinted: [] })
    }
    if (typeof node.userData.machiBlink === 'string') face.blink.push(...morphSlots(node, associations, node.userData.machiBlink))
    const visemes = node.userData.machiVisemes
    if (visemes && typeof visemes === 'object') {
      for (const [sound, name] of Object.entries(visemes)) {
        if (typeof name !== 'string') continue
        if (!face.visemes.has(sound)) face.visemes.set(sound, [])
        face.visemes.get(sound).push(...morphSlots(node, associations, name))
      }
    }
  })
  return { parts, defaults, face, signature: null }
}

const tint = new THREE.Color()

function updateGimmick(gimmick, afk, values) {
  if (!gimmick.parts.length) return
  const levels = new Map()
  for (const [id, initial] of gimmick.defaults) {
    const value = values && Object.hasOwn(values, id) ? values[id] : initial
    levels.set(id, typeof value === 'number' ? THREE.MathUtils.clamp(value, 0, 1) : value === true ? 1 : 0)
  }
  const signature = JSON.stringify([afk, ...levels.values()])
  if (gimmick.signature === signature) return
  gimmick.signature = signature

  for (const part of gimmick.parts) {
    let visible = part.visible
    for (const [influences, originals] of part.rest) {
      for (const [index, weight] of originals) influences[index] = weight
    }
    part.node.scale.copy(part.scale)
    // Controls are applied weakest first, so the active choice wins when several
    // drive the same property, such as mutually exclusive clothing options.
    const ordered = [...part.bindings].sort((a, b) => levels.get(a.id) - levels.get(b.id))
    for (const binding of ordered) {
      const level = levels.get(binding.id)
      const state = level > 0.5 ? binding.on : binding.off
      if (typeof state.visible === 'boolean') visible = state.visible
      for (const { influences, index, on, off } of binding.morphs) influences[index] = off + (on - off) * level
      const scaleOn = binding.on.scale
      const scaleOff = binding.off.scale
      if (Array.isArray(scaleOn) || Array.isArray(scaleOff)) {
        // The avatar's scale values multiply the size the part has at rest.
        const from = Array.isArray(scaleOff) ? scaleOff : [1, 1, 1]
        const to = Array.isArray(scaleOn) ? scaleOn : [1, 1, 1]
        const rest = part.scale.toArray()
        part.node.scale.set(...rest.map((size, axis) => size * (from[axis] + (to[axis] - from[axis]) * level)))
      }
      const colorOn = binding.on.color
      const colorOff = binding.off.color
      if ((Array.isArray(colorOn) || Array.isArray(colorOff)) && part.node.isMesh) {
        // Tint a private copy of each material so other parts keep their colours.
        if (!part.tinted.length) {
          const list = Array.isArray(part.node.material) ? part.node.material : [part.node.material]
          part.tinted = list.map((source) => ({ material: source.clone(), base: source.color.clone() }))
          part.node.material = Array.isArray(part.node.material) ? part.tinted.map(({ material }) => material) : part.tinted[0].material
        }
        for (const { material, base } of part.tinted) {
          const from = Array.isArray(colorOff) ? tint.setRGB(...colorOff, THREE.SRGBColorSpace).clone() : base
          const to = Array.isArray(colorOn) ? tint.setRGB(...colorOn, THREE.SRGBColorSpace).clone() : base
          material.color.copy(from).lerp(to, level)
        }
      }
    }
    if (part.mode === 'hidden' || (part.mode === 'afk' && !afk) || (part.mode === 'active' && afk)) visible = false
    part.node.visible = visible
  }
  // An expression may already hold the eyes shut; blinking must not reopen them.
  for (const slot of gimmick.face.blink) {
    const driven = gimmick.parts.some((part) => part.rest.get(slot.influences)?.has(slot.index))
    slot.base = driven ? slot.influences[slot.index] : 0
  }
}

// ---- Swaying bones (hair, skirts, tails) -----------------------------------

const worldPosition = new THREE.Vector3()
const parentRotation = new THREE.Quaternion()
const restDirection = new THREE.Vector3()
const nextTail = new THREE.Vector3()
const aim = new THREE.Quaternion()
const toLocal = new THREE.Matrix4()

function createSprings(root) {
  const joints = []
  root.updateMatrixWorld(true)
  root.traverse((start) => {
    const settings = start.userData.machiSpring
    if (!settings || typeof settings !== 'object') return
    const pull = THREE.MathUtils.clamp(Number(settings.pull) || 0.2, 0, 1)
    const spring = THREE.MathUtils.clamp(Number(settings.spring) || 0.2, 0, 1)
    const stiffness = THREE.MathUtils.clamp(Number(settings.stiffness) || 0, 0, 1)
    const gravity = THREE.MathUtils.clamp(Number(settings.gravity) || 0, -1, 1)
    const excluded = new Set(Array.isArray(settings.ignore) ? settings.ignore : [])
    const visit = (bone) => {
      if (excluded.has(bone.name)) return
      const children = bone.children.filter((child) => child.isBone || child.children.length || child.type === 'Object3D')
        .filter((child) => !child.isMesh && !excluded.has(child.name))
      // The root of a chain stays put; every joint below it swings.
      for (const child of children) {
        if (child.position.lengthSq() < 1e-10) continue
        joints.push({
          bone, child, rest: bone.quaternion.clone(), axis: child.position.clone().normalize(),
          tail: child.getWorldPosition(new THREE.Vector3()), previous: child.getWorldPosition(new THREE.Vector3()),
          drag: 0.35 + (1 - spring) * 0.45, stiffness: 0.6 + pull * 3 + stiffness * 2.5, gravity: gravity * 0.9,
        })
        break
      }
      children.forEach(visit)
    }
    visit(start)
  })
  return joints
}

function updateSprings(joints, delta) {
  const step = Math.min(delta, 1 / 30)
  for (const joint of joints) {
    const { bone, child } = joint
    bone.parent.updateWorldMatrix(true, false)
    bone.getWorldPosition(worldPosition)
    bone.parent.getWorldQuaternion(parentRotation)
    restDirection.copy(joint.axis).applyQuaternion(joint.rest).applyQuaternion(parentRotation)
    const length = child.getWorldPosition(nextTail).distanceTo(worldPosition)
    nextTail.copy(joint.tail)
      .addScaledVector(joint.tail.clone().sub(joint.previous), 1 - joint.drag)
      .addScaledVector(restDirection, joint.stiffness * step)
    nextTail.y -= joint.gravity * step
    nextTail.sub(worldPosition).normalize().multiplyScalar(length).add(worldPosition)
    joint.previous.copy(joint.tail)
    joint.tail.copy(nextTail)
    // Turn the bone so its child points at the new tail position.
    toLocal.copy(bone.parent.matrixWorld).invert()
    const target = nextTail.clone().applyMatrix4(toLocal).sub(bone.position).normalize()
    const resting = joint.axis.clone().applyQuaternion(joint.rest)
    bone.quaternion.copy(aim.setFromUnitVectors(resting, target)).multiply(joint.rest)
    bone.updateMatrixWorld(true)
  }
}

// ---- The avatar's own animator ---------------------------------------------

const turned = new THREE.Euler()
const spin = new THREE.Quaternion()
const RADIANS = Math.PI / 180
const same = (a, b) => (Array.isArray(a) ? Array.isArray(b) && a.every((value, index) => value === b[index]) : a === b)
const finite = (value) => (Array.isArray(value) ? value.every(Number.isFinite) : Number.isFinite(value))

// The meshes of one glTF node: a mesh with several materials loads as a group of meshes.
function ownMeshes(node, associations) {
  if (node.isMesh) return [node]
  return node.children.filter((child) => child.isMesh && associations?.get(child)?.nodes === undefined)
}

// Runs the animator an avatar brought from Unity and shows what it animates: which parts are
// visible, blend shapes, size, turning, placing, tint, glow and texture scrolling.
function createAnimated(source, associations, local, seed) {
  const setup = source.userData.machiAnimator
  if (!setup || !validProgram(setup.program)) return null
  const bindings = (Array.isArray(setup.bindings) ? setup.bindings : []).filter((binding) => typeof binding?.id === 'string'
    && (Number.isInteger(binding.gesture) || (typeof binding.parameter === 'string' && Number.isFinite(binding.value))))
  const shared = (Array.isArray(setup.sync) ? setup.sync : []).filter((name) => typeof name === 'string').slice(0, 256)
  const unit = setup.unit > 0 && Number.isFinite(setup.unit) ? setup.unit : 100
  const nodes = new Map()
  const poses = new Map()
  source.traverse((node) => {
    if (node.userData.machiStartsHidden || node.userData.machiStartsDisabled) node.visible = false
    if (!Array.isArray(node.userData.machiTarget)) return
    for (const index of node.userData.machiTarget) nodes.set(index, node)
    poses.set(node, { position: node.position.clone(), quaternion: node.quaternion.clone(), scale: node.scale.clone() })
  })
  const slots = new Map()
  const looks = new Map()
  const dyes = new Map()
  // Blend shapes the animator holds, so that blinking and speech never undo an expression.
  const held = new Map()

  const shape = (path, property) => {
    const key = `${path}|${property}`
    if (!slots.has(key)) {
      const node = nodes.get(path)
      slots.set(key, node
        ? morphSlots(node, associations, property.slice(6)).map((slot) => ({ ...slot, rest: slot.influences[slot.index] }))
        : [])
    }
    return slots.get(key)
  }
  // Materials are shared between parts, so a part gets its own copies before it is recoloured.
  const dye = (node) => {
    if (!dyes.has(node)) {
      const list = []
      for (const part of ownMeshes(node, associations)) {
        const copies = (Array.isArray(part.material) ? part.material : [part.material]).map((material) => {
          const copy = material.clone()
          list.push({
            material: copy, st: null,
            color: [...(material.color?.clone().convertLinearToSRGB().toArray() ?? [1, 1, 1]), material.opacity],
            emission: material.emissive?.clone().convertLinearToSRGB().toArray() ?? [0, 0, 0],
          })
          return copy
        })
        part.material = Array.isArray(part.material) ? copies : copies[0]
      }
      dyes.set(node, { list, color: {}, emission: {}, st: {} })
    }
    return dyes.get(node)
  }
  function repaint(coat, kind) {
    const wanted = coat[kind]
    for (const entry of coat.list) {
      const { material } = entry
      if (kind === 'color' && material.color) {
        material.color.setRGB(wanted.r ?? entry.color[0], wanted.g ?? entry.color[1], wanted.b ?? entry.color[2], THREE.SRGBColorSpace)
        material.opacity = THREE.MathUtils.clamp(wanted.a ?? entry.color[3], 0, 1)
      } else if (kind === 'emission' && material.emissive) {
        const glow = ['r', 'g', 'b'].map((channel, index) => THREE.MathUtils.clamp(wanted[channel] ?? entry.emission[index], 0, 8))
        material.emissive.setRGB(glow[0], glow[1], glow[2], THREE.SRGBColorSpace)
      } else if (kind === 'st' && material.map) {
        if (!entry.st) {
          // The image is shared with other parts; this part scrolls its own view of it.
          material.map = material.map.clone()
          material.map.needsUpdate = true
          const { repeat, offset } = material.map
          entry.st = [repeat.x, repeat.y, offset.x, 1 - repeat.y - offset.y]
        }
        const [sx, sy, ox, oy] = ['x', 'y', 'z', 'w'].map((channel, index) => wanted[channel] ?? entry.st[index])
        material.map.repeat.set(sx, sy)
        // Unity measures textures from the bottom edge, glTF from the top.
        material.map.offset.set(ox, 1 - sy - oy)
      }
    }
  }

  // Shows one animated value, or with `value` undefined puts the property back as it was.
  function write(path, property, value) {
    const node = nodes.get(path)
    if (!node || (value !== undefined && !finite(value))) return
    if (property === 'active' || property === 'enabled' || property === 'invisible') {
      if (node.userData.machiFixed) return
      if (!looks.has(node)) looks.set(node, {})
      const look = looks.get(node)
      look[property] = value
      const { machiStartsHidden: hidden, machiStartsDisabled: disabled } = node.userData
      node.visible = (look.active ?? (hidden ? 0 : 1)) > 0.5 && (look.enabled ?? (disabled ? 0 : 1)) > 0.5 && !(look.invisible > 0.5)
    } else if (property.startsWith('morph:')) {
      for (const slot of shape(path, property)) {
        const weight = value === undefined ? slot.rest : THREE.MathUtils.clamp(value / 100, -1, 2)
        slot.influences[slot.index] = weight
        if (!held.has(slot.influences)) held.set(slot.influences, new Map())
        if (value === undefined) held.get(slot.influences).delete(slot.index)
        else held.get(slot.influences).set(slot.index, weight)
      }
    } else if (property === 'scale') {
      // Unity and the model file agree on a part's own size, so the clip's size is used as it is.
      if (value === undefined) node.scale.copy(poses.get(node).scale)
      else node.scale.set(value[0], value[1], value[2])
    } else if (property === 'rotation' || property === 'euler') {
      if (value === undefined) node.quaternion.copy(poses.get(node).quaternion)
      else {
        if (property === 'euler') spin.setFromEuler(turned.set(value[0] * RADIANS, value[1] * RADIANS, value[2] * RADIANS, 'YXZ'))
        else spin.set(value[0], value[1], value[2], value[3]).normalize()
        // Unity swaps left and right when it reads a model file; this turns its rotations back.
        node.quaternion.set(spin.x, -spin.y, -spin.z, spin.w)
      }
    } else if (property === 'position') {
      if (value === undefined) node.position.copy(poses.get(node).position)
      else node.position.set(-value[0] * unit, value[1] * unit, value[2] * unit)
    } else {
      const [kind, channel] = property.split('.')
      if (!channel || !['color', 'emission', 'st'].includes(kind)) return
      const coat = dye(node)
      if (value === undefined) delete coat[kind][channel]
      else coat[kind][channel] = value
      repaint(coat, kind)
    }
  }

  const animator = createAnimator(setup.program, {
    local, seed,
    rest: (path, property) => (property.startsWith('morph:') ? (shape(path, property)[0]?.rest ?? 0) * 100
      : property === 'scale' ? poses.get(nodes.get(path))?.scale.toArray() : undefined),
  })
  // The wearer's screen works the whole menu. Every other screen follows what that screen
  // reports, except for buttons: those it hears being pressed and presses itself.
  const buttons = bindings.filter((binding) => binding.kind === 'button')
  const input = createControlInput(animator, local ? bindings : buttons)
  const taps = new Set(buttons.map((binding) => `${binding.parameter}=${binding.value}`))
  const defaults = new Map(shared.map((name) => [name, animator.get(name)]))
  const shown = new Map()

  function apply() {
    for (const [key, entry] of shown) {
      if (animator.values.has(key)) continue
      write(entry.path, entry.property, undefined)
      shown.delete(key)
    }
    for (const [key, entry] of animator.values) {
      const before = shown.get(key)
      if (before && (before.entry === entry || same(entry.value, before.value))) {
        before.entry = entry
        continue
      }
      shown.set(key, { entry, path: entry.path, property: entry.property, value: Array.isArray(entry.value) ? [...entry.value] : entry.value })
      write(entry.path, entry.property, entry.value)
    }
  }
  apply()

  // What the wearer's screen tells the others, in a fixed order so that two reports can be compared.
  const told = (values, states) => JSON.stringify([
    shared.map((name) => values?.[name] ?? null),
    Object.entries(states ?? {}).sort(([a], [b]) => a - b),
  ])

  return {
    held,
    eyesFree: animator.eyesFree,
    mouthFree: animator.mouthFree,
    // `controls` are the gimmick panel's values; `facts` what the game knows about the wearer.
    update(delta, controls, facts) {
      input.update(controls, delta)
      for (const name in facts) animator.set(name, facts[name])
      animator.update(delta)
      apply()
    },
    // The shared parameters that have left their defaults, and where the layers have settled.
    report() {
      const values = {}
      for (const name of shared) {
        const value = Math.round(animator.get(name) * 1000) / 1000
        // A button held down for a moment is not news: the other screens press it themselves.
        if (value !== Math.round(defaults.get(name) * 1000) / 1000 && !taps.has(`${name}=${value}`)) values[name] = value
      }
      const states = animator.settled()
      return { values, states, key: told(values, states) }
    },
    key: (state) => told(state?.values, state?.states),
    // Takes over what the wearer's screen reported. With `jump` the layers go there directly,
    // those at least that have been still for `quiet` seconds.
    follow(state, jump, quiet = 0) {
      for (const name of shared) {
        const value = state?.values?.[name]
        animator.set(name, Number.isFinite(value) && !taps.has(`${name}=${value}`) ? value : defaults.get(name))
      }
      if (jump) animator.settle(state?.states ?? {}, quiet)
    },
    controls: () => controlStates(animator, bindings),
    tap: (id) => input.tap(id),
  }
}

function visibleModelBounds(scene) {
  const bounds = new THREE.Box3()
  const transformed = new THREE.Box3()
  scene.updateMatrixWorld(true)
  scene.traverseVisible((node) => {
    if (!node.isMesh) return
    const target = node.boundingBox !== undefined ? node : node.geometry
    if (!target.boundingBox) target.computeBoundingBox()
    bounds.union(transformed.copy(target.boundingBox).applyMatrix4(node.matrixWorld))
  })
  return bounds
}

// A number that is the same on every screen for the same resident.
const seedOf = (text = '') => [...String(text)].reduce((hash, letter) => (Math.imul(hash, 31) + letter.codePointAt(0)) >>> 0, 7)

// `local` is true for the model of the person at this screen.
async function importAvatar(url, allowModel, { local = false, seed = 1 } = {}) {
  const loader = new GLTFLoader()
  loader.register((parser) => new VRMLoaderPlugin(parser))
  let gltf
  try {
    gltf = await loader.loadAsync(url)
  } catch (error) {
    throw new Error('アバターの3Dモデルを読み込めませんでした。', { cause: error })
  }
  const vrm = gltf.userData.vrm
  if (!vrm?.humanoid && !allowModel) {
    VRMUtils.deepDispose(gltf.scene)
    throw new Error('VRM 0.x または VRM 1.0 のアバターを選んでください。')
  }
  if (vrm?.humanoid) VRMUtils.rotateVRM0(vrm)
  const source = vrm?.scene ?? gltf.scene
  if (!source) throw new Error('アバターの3Dモデルを読み込めませんでした。')
  const scene = new THREE.Group().add(source)
  const gimmick = expressionParts(source, gltf.parser?.associations)
  updateGimmick(gimmick, false)
  let animated = null
  try {
    animated = createAnimated(source, gltf.parser?.associations, local, seed)
  } catch (error) {
    // An avatar whose animator cannot run is still an avatar.
    console.error(error)
  }
  const bounds = gimmick.parts.length || animated ? visibleModelBounds(scene) : new THREE.Box3().setFromObject(scene)
  if (bounds.isEmpty() && (gimmick.defaults.size || animated)) bounds.setFromObject(scene)
  const size = bounds.getSize(new THREE.Vector3())
  if (![size.x, size.y, size.z].every(Number.isFinite) || size.y < 0.000001) {
    VRMUtils.deepDispose(scene)
    throw new Error('アバターの大きさを読み取れませんでした。')
  }
  const scale = vrm?.humanoid ? AVATAR_HEIGHT / size.y : Math.min(AVATAR_HEIGHT / size.y, 2.2 / Math.max(size.x, size.z))
  const center = bounds.getCenter(new THREE.Vector3())
  scene.scale.setScalar(scale)
  scene.position.set(vrm?.humanoid ? 0 : -center.x * scale, -bounds.min.y * scale, vrm?.humanoid ? 0 : -center.z * scale)
  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true
      obj.receiveShadow = true
      obj.frustumCulled = false
    }
  })
  const rig = vrm?.humanoid ? null : modelRig(scene)
  const head = rig ? rig.head : vrm.humanoid.getNormalizedBoneNode('head')
  const headPosition = head?.getWorldPosition(new THREE.Vector3())
  const headHeight = headPosition?.y ?? AVATAR_HEIGHT * 0.84
  const crown = size.y * scale - headHeight
  const headWidth = THREE.MathUtils.clamp(crown * 0.88, 0.10, 0.26)
  const springs = vrm?.humanoid ? [] : createSprings(scene)
  return {
    scene, vrm, rig, head, gimmick, animated, springs, eyeHeight: headHeight + crown * 0.25,
    sizing: { width: headWidth, height: crown + 0.04 },
  }
}

function makeLabel(text, theme) {
  const { map, aspect } = textTexture(text, {
    color: '#35464f', background: theme === 'self' ? '#e6f3cfee' : '#fffdf2ee', border: '#e3d9c4',
    font: '700 44px "Yu Gothic UI", "Hiragino Sans", system-ui, sans-serif', padding: 16,
  })
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map, depthWrite: false, transparent: true, toneMapped: false, fog: false }))
  sprite.userData = { aspect, text, ownMaterial: true }
  sprite.renderOrder = 5
  return sprite
}

// `onAvatarState` hears what the animator of this screen's own avatar has come to, so that the
// town can pass it on to everyone else.
export function createAvatars(world, { onAvatarState } = {}) {
  const characters = new THREE.Group()
  world.add(characters)
  const actors = new Map()
  const levels = new Map()
  let preview = null
  let localVRM = null
  let localRequest = 0
  let localHidden = false
  let ceiling = null
  let lastSelf = null
  let lastOthers = []

  function removeModel(actor) {
    if (!actor.model) return
    actor.node.remove(actor.model.scene)
    VRMUtils.deepDispose(actor.model.scene)
    actor.model = null
    actor.standard.visible = true
    clearLayer(actor.modelAccessory)
  }

  function attachModel(actor, record, url) {
    removeModel(actor)
    actor.activeURL = url
    actor.model = record
    actor.modelAccessory.quaternion.identity()
    actor.node.add(record.scene)
    actor.followed = undefined
    actor.reported = null
    // Back in town after a reload: the avatar picks up where everyone last saw it.
    if (actor.self && url === actor.serverURL) record.animated?.follow(actor.avatarState, true)
    updateActorGimmick(actor)
    actor.standard.visible = false
    actor.standard.userData.currentOutfit = ''
  }

  function updateActorGimmick(actor) {
    if (!actor.model) return
    const localPreview = actor.self && actor.activeURL?.startsWith('blob:')
    const values = localPreview ? null : actor.expressionValues
    updateGimmick(actor.model.gimmick, Boolean(actor.afk), values)
    const manager = actor.model.vrm?.expressionManager
    if (manager) {
      for (const name of VRM_EMOTIONS) manager.setValue(name, values?.[`vrm-${name}`] === true ? 1 : 0)
    }
  }

  function syncModel(actor, url) {
    if (actor.requestURL === url) return
    actor.requestURL = url
    actor.requestVersion++
    if (url === actor.activeURL) return
    removeModel(actor)
    actor.activeURL = null
    if (!url) return
    if (actor.self && localVRM?.url === url && localVRM.record) {
      attachModel(actor, localVRM.record, url)
      localVRM.record = null
      return
    }
    const version = actor.requestVersion
    importAvatar(url, true, { local: actor.self, seed: seedOf(actor.id) }).then((record) => {
      if (actor.requestVersion !== version) {
        VRMUtils.deepDispose(record.scene)
        return
      }
      attachModel(actor, record, url)
      applyOutfit(actor, actor.outfit, actor.color)
    }).catch(() => {
      // The standard avatar remains visible while a remote model is unavailable.
    })
  }

  function setLabel(actor, text) {
    if (actor.label?.userData.text === text) return
    if (actor.label) {
      characters.remove(actor.label)
      actor.label.material.map.dispose()
      actor.label.material.dispose()
    }
    actor.label = makeLabel(text, actor.self ? 'self' : 'player')
    characters.add(actor.label)
  }

  // `self` and `others` carry a `world` position in metres and the usual player fields.
  function sync(self, others) {
    lastSelf = self
    lastOthers = others
    const people = new Map(others.map((item) => [item.id, item]))
    if (self) people.set(self.id, self)
    for (const [id, actor] of actors) {
      if (people.has(id)) continue
      actor.requestVersion++
      removeModel(actor)
      clearLayer(actor.standard.userData.accessory)
      characters.remove(actor.label)
      actor.label.material.map.dispose()
      actor.label.material.dispose()
      characters.remove(actor.node)
      actors.delete(id)
    }
    for (const [id, item] of people) {
      const isSelf = self?.id === id
      const color = item.color || (isSelf ? '#dd967f' : '#83aab1')
      if (!actors.has(id)) {
        const node = group(characters, item.world.x, item.world.y ?? 0, item.world.z)
        actors.set(id, {
          id, node, self: isSelf, standard: standardAvatar(node, color), modelAccessory: group(node),
          target: new THREE.Vector3(item.world.x, item.world.y ?? 0, item.world.z), place: null, requestVersion: 0, stride: 0, speed: 0,
          height: item.world.y ?? 0,
          blink: 2 + Math.random() * 3, mouth: 0,
        })
      }
      const actor = actors.get(id)
      actor.afk = Boolean(item.afk)
      actor.muted = Boolean(item.muted)
      actor.expressionValues = item.avatarExpressionValues
      actor.avatarState = item.avatarState
      actor.revision = item.vrm
      actor.serverURL = item.vrmUrl || null
      const name = item.name || (isSelf ? 'あなた' : '住人')
      setLabel(actor, actor.afk ? `${name}（離席中）` : name)
      actor.target.set(item.world.x, item.world.y ?? 0, item.world.z)
      // Moving to another place (a house, a floor) is a jump, not a walk.
      if (actor.place !== item.world.place) {
        actor.place = item.world.place
        actor.node.position.copy(actor.target)
        actor.height = actor.target.y
      }
      if (isSelf && localVRM && item.vrmUrl && item.vrmUrl !== localVRM.previousServerURL
        && actor.activeURL === localVRM.url && actor.model) {
        actor.activeURL = item.vrmUrl
        actor.requestURL = item.vrmUrl
        localVRM = null
      }
      syncModel(actor, isSelf && localVRM ? localVRM.url : (item.vrmUrl || null))
      updateActorGimmick(actor)
      actor.outfit = isSelf && preview ? preview.outfit : item.outfit
      actor.color = color
      applyOutfit(actor, actor.outfit, actor.color)
    }
  }

  const facts = {}

  // The wearer's own screen works the avatar's menu and tells the town what came of it; every
  // other screen follows that report, as VRChat's do.
  function runAnimator(actor, delta, wide, round) {
    const { animated } = actor.model
    // False while a newly chosen file is still on its way to the town.
    const current = actor.activeURL === actor.serverURL
    if (!actor.self) {
      const news = animated.key(actor.avatarState)
      if (actor.followed !== news) {
        // A screen that has just started watching goes straight to where the avatar is. Later on
        // it gets there by itself; only if it has not after a while is it put there.
        animated.follow(actor.avatarState, actor.followed === undefined)
        actor.followed = news
        actor.settleIn = 3
      } else if (actor.settleIn > 0 && (actor.settleIn -= delta) <= 0) animated.follow(actor.avatarState, true, 2.5)
    }
    facts.AFK = actor.afk ? 1 : 0
    facts.MuteSelf = actor.muted ? 1 : 0
    facts.Voice = actor.mouth
    facts.Viseme = actor.mouth < 0.06 ? 0 : wide >= round ? 10 : 13
    facts.VelocityMagnitude = facts.VelocityZ = actor.speed
    animated.update(delta, current ? actor.expressionValues : null, facts)
    if (!actor.self || !current || !onAvatarState) return

    actor.reportIn = (actor.reportIn ?? 0) - delta
    if (actor.reportIn > 0) return
    actor.reportIn = 0.35
    const { values, states, key } = animated.report()
    // The panel shows what the town knows; where the animator has moved on, the town is told.
    const controls = {}
    const known = actor.expressionValues ?? {}
    for (const [id, state] of Object.entries(animated.controls())) {
      if (!Object.hasOwn(known, id)) continue
      const differs = typeof state === 'number' ? Math.abs((Number(known[id]) || 0) - state) > 0.011 : (known[id] === true) !== state
      if (differs) controls[id] = state
    }
    if (key === animated.key(actor.avatarState) && !Object.keys(controls).length) {
      actor.reported = null
      return
    }
    // The same news is only repeated if the town has not taken it in after a while.
    const news = key + JSON.stringify(controls)
    const now = performance.now()
    if (actor.reported === news && now - actor.reportedAt < 2500) return
    actor.reported = news
    actor.reportedAt = now
    onAvatarState({ revision: actor.revision, values, states, controls })
  }

  const headPoint = new THREE.Vector3()
  const headRotation = new THREE.Quaternion()
  const actorRotation = new THREE.Quaternion()

  function update(delta, elapsed, camera) {
    for (const actor of actors.values()) {
      const node = actor.node
      if (!actor.self) {
        // Other residents glide towards where the server last saw them.
        const dx = actor.target.x - node.position.x
        const dz = actor.target.z - node.position.z
        const distance = Math.hypot(dx, dz)
        if (distance > 0.02) {
          const move = Math.min(distance, Math.max(distance * 4, 2.2) * delta)
          node.position.x += dx / distance * move
          node.position.z += dz / distance * move
          const goal = Math.atan2(dx, dz)
          const turn = Math.atan2(Math.sin(goal - node.rotation.y), Math.cos(goal - node.rotation.y))
          node.rotation.y += turn * (1 - Math.exp(-12 * delta))
          actor.speed = move / delta
        } else actor.speed = 0
      }
      const walking = actor.speed > 0.25
      actor.stride += delta * (walking ? 5 + Math.min(actor.speed, 6) * 1.5 : 0)
      const stride = walking ? Math.sin(actor.stride) * 0.55 : 0
      // Other residents climb to the storey they were last seen on; this screen's own is placed by the scene.
      if (!actor.self) actor.height += (actor.target.y - actor.height) * (1 - Math.exp(-10 * delta))
      node.position.y = actor.height + (walking ? Math.abs(Math.sin(actor.stride)) * 0.05 : 0)
      for (const [index, leg] of actor.standard.userData.legs.entries()) {
        leg.rotation.x = index ? stride : -stride
        actor.standard.userData.arms[index].parent.rotation.x = index ? -stride * 0.75 : stride * 0.75
      }

      // Lip sync follows how loudly this resident is speaking.
      const loud = levels.get(actor.id) ?? 0
      actor.mouth += (loud - actor.mouth) * (1 - Math.exp(-18 * delta))
      const wide = actor.mouth * (0.65 + 0.35 * Math.sin(elapsed * 17))
      const round = actor.mouth * (0.35 - 0.35 * Math.sin(elapsed * 17))
      actor.standard.userData.mouth.scale.y = 0.012 + actor.mouth * 0.05
      actor.blink -= delta
      if (actor.blink < -0.14) actor.blink = 2.2 + Math.random() * 3.6
      const closed = actor.blink < 0 ? 1 - Math.abs(actor.blink + 0.07) / 0.07 : 0

      if (actor.model) {
        const { vrm, rig, head, gimmick, springs } = actor.model
        if (rig) rig.walk(stride)
        else {
          vrmWalk(vrm, stride)
          const manager = vrm.expressionManager
          if (manager) {
            manager.setValue('aa', wide)
            manager.setValue('oh', round)
            manager.setValue('blink', closed)
          }
          vrm.update(delta)
        }
        if (actor.model.animated) {
          try {
            runAnimator(actor, delta, wide, round)
          } catch (error) {
            // One avatar's broken animator must not stop the town.
            console.error(error)
            actor.model.animated = null
          }
        }
        const { animated } = actor.model
        const holding = (slot) => animated?.held.get(slot.influences)?.get(slot.index)
        // An expression that takes over the eyes or the mouth keeps them until it lets go.
        const lids = !animated || animated.eyesFree() ? closed : 0
        const speaking = !animated || animated.mouthFree()
        for (const slot of gimmick.face.blink) slot.influences[slot.index] = Math.max(holding(slot) ?? slot.base ?? 0, lids)
        for (const [sound, slots] of gimmick.face.visemes) {
          const weight = !speaking ? 0 : sound === 'aa' ? wide : sound === 'oh' || sound === 'ou' ? round : 0
          for (const slot of slots) slot.influences[slot.index] = Math.max(holding(slot) ?? 0, weight)
        }
        if (springs.length) updateSprings(springs, delta)
        if (head && actor.modelAccessory.children.length) {
          head.getWorldPosition(headPoint)
          actor.modelAccessory.position.copy(node.worldToLocal(headPoint))
          if (!rig) {
            head.getWorldQuaternion(headRotation)
            node.getWorldQuaternion(actorRotation)
            actor.modelAccessory.quaternion.copy(actorRotation.invert().multiply(headRotation))
          }
        }
      }

      // Looking into a storey from above, whoever stands on the storeys above it is left out with them.
      const above = ceiling && actor.height > ceiling.y && node.position.x > ceiling.x0 && node.position.x < ceiling.x1
        && node.position.z > ceiling.z0 && node.position.z < ceiling.z1
      node.visible = !(actor.self && localHidden) && !above
      const label = actor.label
      label.visible = node.visible
      if (label.visible) {
        const tall = (actor.model ? AVATAR_HEIGHT : 1.62) + 0.34
        label.position.set(node.position.x, node.position.y + tall, node.position.z)
        // Name tags keep a readable size at any distance.
        const size = THREE.MathUtils.clamp(camera.position.distanceTo(label.position) * 0.026, 0.2, 2.6)
        label.scale.set(size * label.userData.aspect, size, 1)
      }
    }
  }

  return {
    sync, update,
    actor: (id) => actors.get(id),
    setVoiceLevels(next) {
      levels.clear()
      for (const [id, level] of next) levels.set(id, level)
    },
    setPreview(value) {
      preview = value
      if (lastSelf) sync(lastSelf, lastOthers)
    },
    setLocalHidden(hidden) {
      localHidden = hidden
    },
    // Hides residents above height `y` inside the box given, or nobody with null.
    setCeiling(value) {
      ceiling = value
    },
    // A button on the gimmick panel, pressed at this screen: the avatar reacts at once.
    press(id) {
      const actor = actors.get(lastSelf?.id)
      if (actor?.model?.animated && actor.activeURL === actor.serverURL) actor.model.animated.tap(id)
    },
    eyeHeight(id) {
      const actor = actors.get(id)
      return actor?.model?.eyeHeight ?? 1.45
    },
    async loadLocal(url, { allowModel = false, serverURL } = {}) {
      const request = ++localRequest
      const record = await importAvatar(url, allowModel, { local: true, seed: seedOf(lastSelf?.id) })
      if (request !== localRequest) {
        VRMUtils.deepDispose(record.scene)
        throw new Error('新しいアバターが選ばれました。')
      }
      if (localVRM?.record) VRMUtils.deepDispose(localVRM.record.scene)
      const meta = record.vrm?.meta
      localVRM = { url, record, previousServerURL: serverURL }
      if (lastSelf) sync(lastSelf, lastOthers)
      return { name: meta?.name ?? meta?.title ?? (record.vrm ? 'VRM アバター' : 'アバター'), version: meta?.metaVersion ?? '' }
    },
    clearLocal() {
      localRequest++
      if (localVRM?.record) VRMUtils.deepDispose(localVRM.record.scene)
      localVRM = null
      if (lastSelf) sync(lastSelf, lastOthers)
    },
    dispose() {
      for (const actor of actors.values()) {
        actor.requestVersion++
        removeModel(actor)
      }
      if (localVRM?.record) VRMUtils.deepDispose(localVRM.record.scene)
      world.remove(characters)
    },
  }
}
