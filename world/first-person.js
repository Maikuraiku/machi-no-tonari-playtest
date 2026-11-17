// What someone wearing a headset sees of themselves. A standard resident is small and round,
// with arms far too short to reach a real hand, so from inside it becomes a body of ordinary
// proportions in the same clothes; everyone else still sees the round little resident.
// Imported avatars are seen as they are, only without their heads.
import * as THREE from 'three'
import { createTrackedRig } from './tracking.js?v=online-1794946480502'

// Camera layers for what only the wearer sees and what only everyone else sees.
export const FIRST_PERSON_LAYER = 9
export const THIRD_PERSON_LAYER = 10

// The body is built for eyes at this height (in metres) and scaled to whoever wears it.
const EYE_HEIGHT = 1.5
const UPPER_ARM = 0.285
const FOREARM = 0.245
// Where the sleeves start above each joint, and how far short of the wrist the cuff ends.
const SHOULDER_TOP = 0.02
const ELBOW_TOP = 0.01
const CUFF = 0.02
// The fingers from the index to the little one: across the knuckles, thickness, and the
// lengths of the part next to the palm and of the rest.
const FINGER_SHAPES = [[0.027, 0.0095, 0.042, 0.044], [0.009, 0.0098, 0.046, 0.047], [-0.009, 0.0093, 0.043, 0.044], [-0.026, 0.0083, 0.034, 0.035]]
const sphere = new THREE.SphereGeometry(1, 18, 12)
const capsules = new Map()
// Drawn into shadows only: the head nobody sees from inside still darkens the ground.
const unseen = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false })
const shoulder = new THREE.Vector3()

function joint(parent, x, y, z) {
  const node = new THREE.Group()
  node.position.set(x, y, z)
  parent.add(node)
  return node
}

function shade(mesh) {
  mesh.castShadow = true
  mesh.receiveShadow = mesh.material !== unseen
  return mesh
}

function part(parent, material, x, y, z, width, height, depth) {
  const mesh = shade(new THREE.Mesh(sphere, material))
  mesh.position.set(x, y, z)
  mesh.scale.set(width, height, depth)
  parent.add(mesh)
  return mesh
}

// A rounded rod hanging down from a joint: from `top` above it, `length` long in all.
function limb(parent, material, length, radius, top = 0) {
  const key = `${length}|${radius}`
  if (!capsules.has(key)) capsules.set(key, new THREE.CapsuleGeometry(radius, Math.max(0.001, length - radius * 2), 6, 14))
  const mesh = shade(new THREE.Mesh(capsules.get(key), material))
  mesh.position.y = top - length / 2
  mesh.userData = { length, top }
  parent.add(mesh)
  return mesh
}

// Stretches a limb made by `limb` to reach `bottom` below its joint.
function lengthen(mesh, bottom) {
  const { length, top } = mesh.userData
  const span = top + bottom
  mesh.scale.y = span / length
  mesh.position.y = top - span / 2
}

// The standard resident's body as its wearer sees it, in the materials given. The shirt
// follows whatever the resident wears (see `dress`).
export function createFirstPersonBody({ skin, trousers, shoes }) {
  const node = new THREE.Group()
  node.name = 'first-person-body'
  const shirt = []
  const hips = joint(node, 0, 0.88, 0)
  const spine = joint(hips, 0, 0.1, 0)
  shirt.push(part(spine, skin, 0, 0.17, 0, 0.15, 0.27, 0.105))
  shirt.push(part(spine, skin, 0, 0.3, -0.005, 0.185, 0.085, 0.1))
  part(hips, trousers, 0, 0, 0, 0.145, 0.12, 0.1)
  const head = joint(spine, 0, 0.44, 0.015)
  part(head, unseen, 0, 0.1, 0.02, 0.1, 0.12, 0.11)
  const bones = { hips, spine, head }
  const hands = {}
  for (const [side, sign] of [['left', 1], ['right', -1]]) {
    // Arms hang at rest with the palms towards the body and the thumbs to the front.
    const upper = joint(spine, sign * 0.175, 0.345, -0.01)
    const upperSleeve = limb(upper, skin, SHOULDER_TOP + UPPER_ARM, 0.05, SHOULDER_TOP)
    const lower = joint(upper, 0, -UPPER_ARM, 0)
    const lowerSleeve = limb(lower, skin, ELBOW_TOP + FOREARM - CUFF, 0.042, ELBOW_TOP)
    const hand = joint(lower, 0, -FOREARM, 0)
    shirt.push(upperSleeve, lowerSleeve)
    // A simple hand: wrist, palm, four fingers in two parts each and a thumb, every finger
    // closing as the real one does.
    part(hand, skin, 0, 0.004, 0, 0.022, 0.03, 0.03)
    part(hand, skin, -sign * 0.002, -0.047, 0.002, 0.021, 0.052, 0.046)
    const fingers = FINGER_SHAPES.map(([z, radius, near, far], index) => {
      const knuckle = joint(hand, 0, -0.088, z)
      limb(knuckle, skin, near, radius)
      const middle = joint(knuckle, 0, -(near - radius), 0)
      limb(middle, skin, far, radius * 0.94)
      return { knuckle, middle, finger: index + 1 }
    })
    const thumb = joint(hand, -sign * 0.012, -0.024, 0.03)
    thumb.rotation.x = -0.54
    limb(thumb, skin, 0.045, 0.0118)
    const thumbTip = joint(thumb, 0, -(0.045 - 0.0118), 0)
    limb(thumbTip, skin, 0.034, 0.011)
    bones[`${side}UpperArm`] = upper
    bones[`${side}LowerArm`] = lower
    bones[`${side}Hand`] = hand
    // Fingers close towards the palm, which faces the body: about (fingers × palm). The
    // thumb, pointing down and forward, closes about its own (thumb × palm).
    hands[side] = {
      upper, lower, hand, upperSleeve, lowerSleeve, fingers, thumb, thumbTip,
      bend: new THREE.Vector3(0, 0, -sign),
      thumbBend: new THREE.Vector3(0, -0.514 * sign, -0.858 * sign),
      thumbRest: thumb.quaternion.clone(),
    }

    const leg = joint(hips, sign * 0.085, -0.03, 0)
    limb(leg, trousers, 0.44, 0.068, 0.04)
    const knee = joint(leg, 0, -0.4, 0)
    limb(knee, trousers, 0.39, 0.056, 0.02)
    const foot = joint(knee, 0, -0.38, 0)
    part(foot, shoes, 0, -0.025, 0.055, 0.052, 0.045, 0.125)
    bones[`${side}UpperLeg`] = leg
    bones[`${side}LowerLeg`] = knee
    bones[`${side}Foot`] = foot
  }
  node.updateMatrixWorld(true)
  const rig = createTrackedRig(node, (name) => bones[name])

  return {
    node,
    rig,
    height: EYE_HEIGHT,
    // Where the eyes are from the head bone, at rest, in metres.
    eye: new THREE.Vector3(0, 0.08, 0.075),
    dress(material) {
      for (const mesh of shirt) mesh.material = material
    },
    // The legs swing while walking, as the round resident's do.
    walk(stride) {
      bones.leftUpperLeg.rotation.x = -stride * 0.8
      bones.rightUpperLeg.rotation.x = stride * 0.8
    },
    // Lengthens an arm that cannot otherwise reach its hand: a long-armed wearer, or a hand
    // held far out. The sleeves stretch with it; the hand keeps its size.
    reach(pose, scale) {
      for (const [side, arm] of Object.entries(hands)) {
        let stretch = 1
        const hand = pose[side]
        if (hand) {
          arm.upper.getWorldPosition(shoulder)
          stretch = THREE.MathUtils.clamp(shoulder.distanceTo(hand.position) / ((UPPER_ARM + FOREARM) * scale * 0.98), 1, 1.35)
        }
        arm.lower.position.y = -UPPER_ARM * stretch
        arm.hand.position.y = -FOREARM * stretch
        lengthen(arm.upperSleeve, UPPER_ARM * stretch)
        lengthen(arm.lowerSleeve, FOREARM * stretch - CUFF)
      }
    },
    // Closes the hands as the real ones are closed (curls run thumb, index, middle, ring,
    // little); a hand nothing tracks rests half open.
    curl(pose) {
      for (const [side, arm] of Object.entries(hands)) {
        const curls = pose[side]?.curls
        for (const { knuckle, middle, finger } of arm.fingers) {
          const closed = curls?.[finger] ?? 0.3
          knuckle.quaternion.setFromAxisAngle(arm.bend, closed * 1.3)
          middle.quaternion.setFromAxisAngle(arm.bend, closed * 1.6)
        }
        const thumb = curls?.[0] ?? 0.3
        arm.thumb.quaternion.setFromAxisAngle(arm.thumbBend, thumb * 0.7).multiply(arm.thumbRest)
        arm.thumbTip.quaternion.setFromAxisAngle(arm.bend, thumb * 0.9)
      }
    },
  }
}

// Whether an object and everything above it (up to `top`) is shown.
function showing(node, top) {
  for (let at = node; at && at !== top; at = at.parent) if (!at.visible) return false
  return true
}

// Hides an imported avatar's head from its wearer's own eyes. A VRM says itself which meshes
// make its head: three-vrm draws copies without them on the first-person layer. Any other model
// has its head bone shrunk to nothing, and everything hanging from the head goes with it.
export function hideHead(model) {
  const firstPerson = model.vrm?.firstPerson
  if (firstPerson && model.headless !== false) {
    try {
      if (!model.headless) {
        const before = []
        model.scene.traverse((node) => { if (node.isMesh) before.push(node) })
        const known = new Set(before)
        firstPerson.setup({ firstPersonOnlyLayer: FIRST_PERSON_LAYER, thirdPersonOnlyLayer: THIRD_PERSON_LAYER })
        // The copies do not know when a gimmick hides their originals or changes a blend shape.
        model.headless = []
        model.scene.traverse((node) => {
          if (!node.isMesh || known.has(node)) return
          const source = before.find((mesh) => mesh.material === node.material && `${mesh.name}(erase)` === node.name)
          if (source) model.headless.push({ copy: node, source })
        })
      }
      return {
        sync() {
          for (const { copy, source } of model.headless) {
            copy.visible = showing(source, model.scene)
            const from = source.morphTargetInfluences
            const to = copy.morphTargetInfluences
            if (from && to && from.length === to.length) for (let index = 0; index < from.length; index++) to[index] = from[index]
          }
        },
        restore() {},
      }
    } catch (error) {
      console.error(error)
      model.headless = false
    }
  }
  const head = model.vrm?.humanoid?.getRawBoneNode('head') ?? model.head
  if (!head) return { sync() {}, restore() {} }
  const size = head.scale.clone()
  return {
    sync() { head.scale.setScalar(1e-4) },
    restore() { head.scale.copy(size) },
  }
}
