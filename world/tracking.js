// Reconstruct a humanoid pose from the WebXR headset and wrist/controller transforms.
import * as THREE from 'three'

const clamp = THREE.MathUtils.clamp
const yAxis = new THREE.Vector3(0, 1, 0)
const xAxis = new THREE.Vector3(1, 0, 0)
const minusZ = new THREE.Vector3(0, 0, -1)
const faceForward = new THREE.Quaternion().setFromAxisAngle(yAxis, Math.PI)
const sides = [['left', 1], ['right', -1]]

function followJoint(joint, values, blend) {
  if (!values) return null
  const position = new THREE.Vector3().fromArray(values)
  const rotation = new THREE.Quaternion().fromArray(values, 3).normalize()
  if (!joint) return { position, rotation }
  joint.position.lerp(position, blend)
  joint.rotation.slerp(rotation, blend)
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
const inverse = new THREE.Quaternion()
const desiredRotation = new THREE.Quaternion()
const bodyRotation = new THREE.Quaternion()
const limbRotation = new THREE.Quaternion()
const lean = new THREE.Quaternion()

function aimBone(bone, child, goal) {
  bone.getWorldPosition(origin)
  child.getWorldPosition(from).sub(origin)
  to.copy(goal).sub(origin)
  if (from.lengthSq() < 1e-8 || to.lengthSq() < 1e-8) return
  bone.parent.getWorldQuaternion(inverse).invert()
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
  upper.getWorldPosition(origin)
  lower.getWorldPosition(middle)
  end.getWorldPosition(tip)
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

export function createTrackedRig(root, bone) {
  const head = bone('head')
  const hips = bone('hips')
  const spine = bone('spine')
  const headRest = head?.getWorldQuaternion(new THREE.Quaternion())
  const arms = sides.map(([side, sign]) => {
    const upper = bone(`${side}UpperArm`)
    const lower = bone(`${side}LowerArm`)
    const end = bone(`${side}Hand`)
    const restGrip = end?.getWorldQuaternion(new THREE.Quaternion())
    if (lower && end) {
      const direction = end.getWorldPosition(new THREE.Vector3()).sub(lower.getWorldPosition(new THREE.Vector3())).normalize()
      if (direction.lengthSq() > 0.5) restGrip.premultiply(new THREE.Quaternion().setFromUnitVectors(direction, minusZ))
    }
    return { side, sign, upper, lower, end, restGrip }
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

  return {
    reset() {
      if (!active) return
      active = false
      for (const { node, rotation, position } of bind) {
        node.quaternion.copy(rotation)
        node.position.copy(position)
      }
    },
    apply(pose, eyeHeight) {
      if (!pose) return
      active = true
      // Keep the animation's untracked pose to restore when a controller or headset is lost.
      for (const { node, rotation, position } of bind) {
        rotation.copy(node.quaternion)
        position.copy(node.position)
      }
      bodyRotation.setFromAxisAngle(yAxis, pose.yaw)
      if (hips && legs.some(({ lower, end }) => lower && end) && pose.crouch > 0.005) {
        for (const { end, planted, rotation } of legs) {
          end?.getWorldPosition(planted)
          end?.getWorldQuaternion(rotation)
        }
        const hipPoint = hips.getWorldPosition(goal)
        hipPoint.y -= Math.min(pose.crouch, eyeHeight * 0.38)
        hips.position.copy(hips.parent.worldToLocal(hipPoint))
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
        head.getWorldPosition(headPoint)
        headPoint.y += 0.07
      } else {
        root.getWorldPosition(headPoint)
        headPoint.y += eyeHeight
      }
      for (const arm of arms) {
        const hand = pose[arm.side]
        if (!hand || !arm.upper) continue
        goal.copy(hand.position).sub(pose.head.position).add(headPoint)
        pole.set(arm.sign * 0.55, -0.8, -0.3).applyQuaternion(bodyRotation)
        solveLimb(arm, goal, pole)
        if (arm.end) alignBone(arm.end, desiredRotation.copy(hand.rotation).multiply(arm.restGrip))
      }
    },
  }
}
