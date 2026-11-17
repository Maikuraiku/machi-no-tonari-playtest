// Reconstruct a humanoid pose from the WebXR headset and wrist transforms. A tracked hand is
// given as its wrist, framed as the WebXR hand joints are: -Z runs from the wrist towards the
// fingers and -Y comes out of the palm.
import * as THREE from 'three'

const clamp = THREE.MathUtils.clamp
const yAxis = new THREE.Vector3(0, 1, 0)
const xAxis = new THREE.Vector3(1, 0, 0)
const faceForward = new THREE.Quaternion().setFromAxisAngle(yAxis, Math.PI)
const sides = [['left', 1], ['right', -1]]
const targetPosition = new THREE.Vector3()
const targetRotation = new THREE.Quaternion()
const frame = new THREE.Matrix4()
// Takes a hand framed by where its fingers point (x) and where its palm faces (y) to the wrist frame.
const wristFrame = new THREE.Quaternion().setFromRotationMatrix(frame.makeBasis(
  new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, -1, 0), new THREE.Vector3(-1, 0, 0)))
// The finger bones as VRM names them, and how far (in radians) each joint bends in a fist.
// Curl values are given in this order too: thumb, index, middle, ring, little.
const FINGERS = [
  ['Thumb', [['Metacarpal', 0.3], ['Proximal', 0.55], ['Distal', 0.75]]],
  ['Index', [['Proximal', 1.35], ['Intermediate', 1.6], ['Distal', 1.05]]],
  ['Middle', [['Proximal', 1.4], ['Intermediate', 1.6], ['Distal', 1.05]]],
  ['Ring', [['Proximal', 1.45], ['Intermediate', 1.6], ['Distal', 1.05]]],
  ['Little', [['Proximal', 1.5], ['Intermediate', 1.6], ['Distal', 1.05]]],
]
export const FINGER_JOINTS = FINGERS.map(([finger, joints]) => [finger, joints.map(([joint]) => joint)])

function followJoint(joint, values, blend) {
  if (!values) return null
  targetPosition.fromArray(values)
  targetRotation.fromArray(values, 3).normalize()
  if (!joint) return { position: targetPosition.clone(), rotation: targetRotation.clone() }
  joint.position.lerp(targetPosition, blend)
  joint.rotation.slerp(targetRotation, blend)
  return joint
}

export function followTracking(previous, target, delta) {
  if (!target?.head) return null
  const blend = 1 - Math.exp(-32 * delta)
  const pose = previous ?? { yaw: target.yaw }
  const turn = target.yaw - pose.yaw
  pose.yaw += Math.atan2(Math.sin(turn), Math.cos(turn)) * blend
  pose.head = followJoint(pose.head, target.head, blend)
  pose.left = followJoint(pose.left, target.left, blend)
  pose.right = followJoint(pose.right, target.right, blend)
  // Standing height is estimated from the highest headset position seen in this session.
  pose.standing = Math.max(pose.standing ?? 1.55, Math.min(2.2, target.head[1]))
  pose.crouch = clamp(pose.standing - pose.head.position.y, 0, 0.65)
  return pose
}

const origin = new THREE.Vector3()
const middle = new THREE.Vector3()
const tip = new THREE.Vector3()
const reach = new THREE.Vector3()
const bend = new THREE.Vector3()
const jointTarget = new THREE.Vector3()
const endTarget = new THREE.Vector3()
const from = new THREE.Vector3()
const to = new THREE.Vector3()
const across = new THREE.Vector3()
const forearm = new THREE.Vector3()
const inverse = new THREE.Quaternion()
const desiredRotation = new THREE.Quaternion()
const bodyRotation = new THREE.Quaternion()
const limbRotation = new THREE.Quaternion()
const lean = new THREE.Quaternion()
const twist = new THREE.Quaternion()
const lowerRotation = new THREE.Quaternion()
const handRotation = new THREE.Quaternion()
const unturned = new THREE.Quaternion()
const worldPosition = new THREE.Vector3()
const worldScale = new THREE.Vector3()
const hipsParentInverse = new THREE.Matrix4()

function aimBone(bone, child, goal) {
  bone.getWorldPosition(origin)
  if (child.parent === bone) {
    child.updateWorldMatrix(false, false)
    from.setFromMatrixPosition(child.matrixWorld)
  } else child.getWorldPosition(from)
  from.sub(origin)
  to.copy(goal).sub(origin)
  if (from.lengthSq() < 1e-8 || to.lengthSq() < 1e-8) return
  // Reading the bone just updated its ancestors. Reuse that same parent matrix.
  bone.parent.matrixWorld.decompose(worldPosition, inverse, worldScale)
  inverse.invert()
  from.applyQuaternion(inverse).normalize()
  to.applyQuaternion(inverse).normalize()
  bone.quaternion.premultiply(limbRotation.setFromUnitVectors(from, to))
}

function alignBone(bone, worldRotation) {
  bone.parent.getWorldQuaternion(inverse).invert()
  bone.quaternion.copy(inverse.multiply(worldRotation))
}

function solveLimb({ upper, lower, end }, goal, pole) {
  if (!upper || !lower) return
  if (!end) {
    aimBone(upper, lower, goal)
    return
  }
  if (lower.parent === upper && end.parent === lower) {
    // An end-joint update already walks the full chain back to its root.
    end.updateWorldMatrix(true, false)
    origin.setFromMatrixPosition(upper.matrixWorld)
    middle.setFromMatrixPosition(lower.matrixWorld)
    tip.setFromMatrixPosition(end.matrixWorld)
  } else {
    upper.getWorldPosition(origin)
    lower.getWorldPosition(middle)
    end.getWorldPosition(tip)
  }
  const a = origin.distanceTo(middle)
  const b = middle.distanceTo(tip)
  if (Math.min(a, b) < 0.001) return
  reach.copy(goal).sub(origin)
  const distance = reach.length()
  if (distance < 0.001) return
  reach.divideScalar(distance)
  const length = clamp(distance, Math.abs(a - b) + 0.0001, a + b - 0.0001)
  const along = (a * a - b * b + length * length) / (2 * length)
  bend.copy(pole).addScaledVector(reach, -pole.dot(reach))
  if (bend.lengthSq() < 1e-6) {
    // A parallel pole leaves the elbow unconstrained. Use another axis in that case.
    bend.copy(Math.abs(reach.y) < 0.9 ? yAxis : xAxis)
    bend.addScaledVector(reach, -bend.dot(reach))
  }
  jointTarget.copy(origin).addScaledVector(reach, along)
    .addScaledVector(bend.normalize(), Math.sqrt(Math.max(0, a * a - along * along)))
  endTarget.copy(origin).addScaledVector(reach, length)
  aimBone(upper, lower, jointTarget)
  aimBone(lower, end, endTarget)
}

// A real forearm turns along with the hand. Giving it half of the hand's turn about its own
// length keeps a wrist that is turned far round from wringing like a sweet wrapper.
function shareTwist(lower, end, wanted) {
  lower.getWorldQuaternion(lowerRotation)
  origin.setFromMatrixPosition(lower.matrixWorld)
  end.updateWorldMatrix(true, false)
  forearm.setFromMatrixPosition(end.matrixWorld).sub(origin)
  if (forearm.lengthSq() < 1e-10) return
  forearm.normalize()
  end.matrixWorld.decompose(worldPosition, handRotation, worldScale)
  twist.copy(wanted).multiply(handRotation.invert())
  const along = twist.x * forearm.x + twist.y * forearm.y + twist.z * forearm.z
  twist.set(forearm.x * along, forearm.y * along, forearm.z * along, twist.w)
  if (twist.lengthSq() < 1e-10) return
  twist.normalize()
  if (twist.w < 0) twist.set(-twist.x, -twist.y, -twist.z, -twist.w)
  twist.slerp(unturned, 0.5)
  lowerRotation.premultiply(twist)
  lower.parent.getWorldQuaternion(inverse).invert()
  lower.quaternion.copy(inverse.multiply(lowerRotation))
}

// How a hand lies at rest: where its fingers point, which way its palm faces, and from that
// the turn that puts it in a tracked wrist.
function handAtRest(end, lower, bone, side, sign) {
  const wrist = end.getWorldPosition(new THREE.Vector3())
  const distal = new THREE.Vector3()
  const knuckle = bone(`${side}MiddleProximal`) ?? bone(`${side}IndexProximal`) ?? bone(`${side}RingProximal`)
  if (knuckle) distal.copy(knuckle.getWorldPosition(from)).sub(wrist)
  if (distal.lengthSq() < 1e-8 && lower) distal.copy(wrist).sub(lower.getWorldPosition(from))
  if (distal.lengthSq() < 1e-8) distal.set(sign, 0, 0)
  distal.normalize()
  const palm = new THREE.Vector3()
  const index = bone(`${side}IndexProximal`)
  const little = bone(`${side}LittleProximal`) ?? bone(`${side}RingProximal`)
  if (index && little) {
    // Turning from the index finger towards the little one about the fingers gives the way
    // the palm faces: one way round on a left hand, the other on a right.
    across.copy(little.getWorldPosition(from)).sub(index.getWorldPosition(to))
    palm.crossVectors(distal, across).multiplyScalar(-sign)
  }
  palm.addScaledVector(distal, -palm.dot(distal))
  if (palm.lengthSq() < 1e-4) {
    // Without fingers to go by, a palm faces down, and in towards the body.
    palm.set(-sign, -1, 0)
    palm.addScaledVector(distal, -palm.dot(distal))
  }
  if (palm.lengthSq() < 1e-6) palm.set(0, 0, 1).addScaledVector(distal, -distal.z)
  palm.normalize()
  const rest = new THREE.Quaternion().setFromRotationMatrix(frame.makeBasis(distal, palm, across.crossVectors(distal, palm)))
  const grip = wristFrame.clone().multiply(rest.invert()).multiply(end.getWorldQuaternion(new THREE.Quaternion()))
  return { grip, palm }
}

// The finger bones of a hand, each with the axis (in its parent's frame) about which it closes.
function handFingers(bone, side, palm) {
  const links = []
  FINGERS.forEach(([finger, joints], index) => {
    const chain = joints.map(([joint, bend]) => ({ node: bone(`${side}${finger}${joint}`), bend })).filter(({ node }) => node)
    chain.forEach(({ node, bend }, at) => {
      const place = node.getWorldPosition(new THREE.Vector3())
      const along = chain[at + 1] ? chain[at + 1].node.getWorldPosition(new THREE.Vector3()).sub(place)
        : at > 0 ? place.clone().sub(chain[at - 1].node.getWorldPosition(new THREE.Vector3())) : null
      if (!along || along.lengthSq() < 1e-10) return
      // Turning about (along × palm) carries the finger towards the side the palm faces.
      const axis = along.normalize().cross(palm)
      if (axis.lengthSq() < 1e-6) return
      axis.normalize().applyQuaternion(node.parent.getWorldQuaternion(new THREE.Quaternion()).invert())
      links.push({ node, axis, bend, finger: index, rest: node.quaternion.clone() })
    })
  })
  return links
}

export function createTrackedRig(root, bone) {
  const head = bone('head')
  const hips = bone('hips')
  const spine = bone('spine')
  const headRest = head?.getWorldQuaternion(new THREE.Quaternion())
  const arms = sides.map(([side, sign]) => {
    const upper = bone(`${side}UpperArm`)
    const lower = bone(`${side}LowerArm`)
    const end = bone(`${side}Hand`)
    const rest = end ? handAtRest(end, lower, bone, side, sign) : null
    return { side, sign, upper, lower, end, restGrip: rest?.grip ?? null, fingers: rest ? handFingers(bone, side, rest.palm) : [] }
  })
  const legs = sides.map(([side, sign]) => ({
    sign, upper: bone(`${side}UpperLeg`), lower: bone(`${side}LowerLeg`), end: bone(`${side}Foot`),
    planted: new THREE.Vector3(), rotation: new THREE.Quaternion(),
  }))
  const joints = new Set([head, hips, spine, ...[...arms, ...legs].flatMap(({ upper, lower, end }) => [upper, lower, end])])
  joints.delete(undefined)
  joints.delete(null)
  if (!joints.size) return null
  const bind = [...joints].map((node) => ({ node, rotation: new THREE.Quaternion(), position: new THREE.Vector3() }))
  const headPoint = new THREE.Vector3()
  const goal = new THREE.Vector3()
  const pole = new THREE.Vector3()
  let active = false
  let curled = false

  function reset() {
    if (curled) {
      curled = false
      for (const { fingers } of arms) for (const { node, rest } of fingers) node.quaternion.copy(rest)
    }
    if (!active) return
    active = false
    for (const { node, rotation, position } of bind) {
      node.quaternion.copy(rotation)
      node.position.copy(position)
    }
  }

  // Keep the animation's untracked pose to restore when a controller or headset is lost.
  function begin() {
    if (active) return
    active = true
    for (const { node, rotation, position } of bind) {
      rotation.copy(node.quaternion)
      position.copy(node.position)
    }
  }

  // The body: crouching with the headset, leaning into the crouch, and the head turned as the headset is.
  function body(pose, eyeHeight) {
    begin()
    bodyRotation.setFromAxisAngle(yAxis, pose.yaw)
    if (hips && legs.some(({ lower, end }) => lower && end) && pose.crouch > 0.005) {
      for (const { end, planted, rotation } of legs) {
        if (!end) continue
        end.updateWorldMatrix(true, false)
        end.matrixWorld.decompose(planted, rotation, worldScale)
      }
      const hipPoint = hips.getWorldPosition(goal)
      hipPoint.y -= Math.min(pose.crouch, eyeHeight * 0.38)
      hips.position.copy(hipPoint.applyMatrix4(hipsParentInverse.copy(hips.parent.matrixWorld).invert()))
      for (const leg of legs) {
        if (!leg.end) continue
        pole.set(leg.sign * 0.16, 0, 1).applyQuaternion(bodyRotation)
        solveLimb(leg, leg.planted, pole)
        alignBone(leg.end, leg.rotation)
      }
    }
    if (spine) spine.quaternion.multiply(lean.setFromAxisAngle(xAxis, pose.crouch * 0.36))
    if (head) {
      desiredRotation.copy(pose.head.rotation).multiply(faceForward).multiply(headRest)
      alignBone(head, desiredRotation)
      head.updateWorldMatrix(false, false)
      headPoint.setFromMatrixPosition(head.matrixWorld)
      headPoint.y += 0.07
    } else {
      root.getWorldPosition(headPoint)
      headPoint.y += eyeHeight
    }
  }

  // The arms reach for the tracked hands, which also turn and close as the real ones do. With
  // `absolute` the hands are where the pose puts them in the world; otherwise they keep their
  // place relative to the head, which suits a body of another size than its owner's.
  function reachHands(pose, absolute = false) {
    begin()
    bodyRotation.setFromAxisAngle(yAxis, pose.yaw)
    for (const arm of arms) {
      const hand = pose[arm.side]
      if (!hand || !arm.upper) continue
      if (absolute) goal.copy(hand.position)
      else goal.copy(hand.position).sub(pose.head.position).add(headPoint)
      pole.set(arm.sign * 0.55, -0.8, -0.3).applyQuaternion(bodyRotation)
      solveLimb(arm, goal, pole)
      if (!arm.end || !arm.restGrip) continue
      desiredRotation.copy(hand.rotation).multiply(arm.restGrip)
      if (arm.lower) shareTwist(arm.lower, arm.end, desiredRotation)
      alignBone(arm.end, desiredRotation)
      if (!hand.curls || !arm.fingers.length) continue
      curled = true
      for (const link of arm.fingers) {
        link.node.quaternion.setFromAxisAngle(link.axis, (hand.curls[link.finger] ?? 0) * link.bend).multiply(link.rest)
      }
    }
  }

  return {
    head,
    // A body seen from inside needs a head to hide and two whole arms to reach with.
    complete: Boolean(head) && arms.every(({ upper, lower, end }) => upper && lower && end),
    reset,
    body,
    arms: reachHands,
    apply(pose, eyeHeight) {
      if (!pose) return
      body(pose, eyeHeight)
      reachHands(pose)
    },
  }
}
