// The menu worn on the wrist in VR, and the notices shown in front of the eyes. The page decides
// what the menu holds: a title, sections of buttons and a hint (see `update`). This draws it in
// the town and lets the hands use it.
//
// Turning the back of a wrist towards the face, as when reading a watch, brings the menu up over
// that forearm; the other hand points at it and presses with the trigger (or a pinch). A face
// button instead floats it in front of the eyes until it is closed.
import * as THREE from 'three'
import { textTexture } from './kit.js?v=online-1794946480502'

// The canvas; a menu uses as much of its height as it needs.
const WIDTH = 1024
const HEIGHT = 1536
const MARGIN = 30
const GAP = 14
const FONT = '"Yu Gothic UI", "Hiragino Sans", "Noto Sans JP", "Noto Sans CJK JP", system-ui, sans-serif'
// In metres: worn over a forearm (no taller than WRIST_TALLEST), or floating in front of the eyes.
const WRIST_WIDTH = 0.26
const WRIST_TALLEST = 0.24
const PINNED_WIDTH = 0.5
const PINNED_DISTANCE = 0.62
const INK = '#35464f'
const MUTED = '#77858b'
const FADED = '#b9b2a6'
const SIDES = ['left', 'right']

const worldUp = new THREE.Vector3(0, 1, 0)
const forward = new THREE.Vector3()
const toEye = new THREE.Vector3()
const back = new THREE.Vector3()
const along = new THREE.Vector3()
const xAxis = new THREE.Vector3()
const yAxis = new THREE.Vector3()
const zAxis = new THREE.Vector3()
const basis = new THREE.Matrix4()
const goalPosition = new THREE.Vector3()
const goalRotation = new THREE.Quaternion()
const plane = new THREE.Plane()
const normal = new THREE.Vector3()
const hitPoint = new THREE.Vector3()
const local = new THREE.Vector3()

// Turns something at `position` to face the eye, upright.
function faceEye(position, eye, target) {
  zAxis.subVectors(eye, position).normalize()
  xAxis.crossVectors(worldUp, zAxis)
  if (xAxis.lengthSq() < 1e-6) xAxis.set(1, 0, 0)
  xAxis.normalize()
  yAxis.crossVectors(zAxis, xAxis)
  return target.setFromRotationMatrix(basis.makeBasis(xAxis, yAxis, zAxis))
}

// A spot in front of the eyes and below them, however the head is tilted.
function ahead(eye, view, distance, drop, target) {
  forward.set(0, 0, -1).applyQuaternion(view).setY(0)
  if (forward.lengthSq() < 1e-6) forward.set(0, 1, 0).applyQuaternion(view).setY(0).negate()
  if (forward.lengthSq() < 1e-6) forward.set(0, 0, -1)
  return target.copy(eye).addScaledVector(forward.normalize(), distance).setY(eye.y - drop)
}

// Breaks a line of (mostly Japanese) text to fit a width, letter by letter.
function wrap(context, text, width) {
  const lines = []
  let line = ''
  for (const letter of String(text)) {
    if (line && context.measureText(line + letter).width > width) {
      lines.push(line)
      line = ''
    }
    line += letter
  }
  if (line) lines.push(line)
  return lines
}

export function createVRMenu(world, { onPress, onPulse } = {}) {
  const canvas = document.createElement('canvas')
  canvas.width = WIDTH
  canvas.height = HEIGHT
  const context = canvas.getContext('2d')
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 4
  const panel = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0, depthTest: false, depthWrite: false, toneMapped: false, fog: false }),
  )
  // Drawn over the town, so that a wall or one's own sleeve never cuts into it.
  panel.renderOrder = 1010
  panel.frustumCulled = false
  panel.visible = false
  world.add(panel)
  const notice = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthTest: false, depthWrite: false, toneMapped: false, fog: false }),
  )
  notice.renderOrder = 1012
  notice.frustumCulled = false
  notice.visible = false
  world.add(notice)

  let pinned = false
  // The hand wearing the menu, while it is up on a wrist.
  let holder = null
  let shown = false
  let fade = 0
  let snap = true
  let following = false
  // The menu as laid out on the canvas: its buttons and texts, and the height it takes.
  let sheet = { items: [], buttons: [], height: 200 }
  let laidOut = ''
  let drawn = ''
  let flash = null
  let flashUntil = 0
  let clock = 0
  let noticeUntil = 0
  let noticeFade = 0
  let noticeSnap = true
  let noticeFollowing = false
  const hovers = { left: null, right: null }
  const reach = { left: null, right: null, holder: null }

  function arrange(content, row) {
    const items = []
    let y = MARGIN
    const right = WIDTH - MARGIN - (pinned ? 104 : 6)
    items.push({ kind: 'title', text: content.title ?? '', x: MARGIN + 6, y: y + 34, right })
    y += 72
    if (content.subtitle) {
      items.push({ kind: 'subtitle', text: content.subtitle, x: MARGIN + 6, y: y + 16, right })
      y += 46
    }
    if (pinned) items.push({ kind: 'button', label: '×', action: 'vr-close', x: WIDTH - MARGIN - 88, y: MARGIN, w: 88, h: 88 })
    y += 12
    for (const section of content.sections ?? []) {
      const buttons = section.buttons ?? []
      if (!buttons.length) continue
      if (section.label) {
        items.push({ kind: 'label', text: section.label, x: MARGIN + 6, y: y + 20, right: WIDTH - MARGIN })
        y += 46
      }
      const columns = THREE.MathUtils.clamp(Math.round(section.columns ?? 3), 1, 5)
      const width = (WIDTH - MARGIN * 2 - GAP * (columns - 1)) / columns
      buttons.forEach((button, index) => {
        items.push({ ...button, kind: 'button', x: MARGIN + (index % columns) * (width + GAP), y: y + Math.floor(index / columns) * (row + GAP), w: width, h: row })
      })
      y += Math.ceil(buttons.length / columns) * (row + GAP) + 10
    }
    if (content.hint) {
      context.font = `500 28px ${FONT}`
      for (const line of wrap(context, content.hint, WIDTH - MARGIN * 2 - 12)) {
        items.push({ kind: 'hint', text: line, x: WIDTH / 2, y: y + 18 })
        y += 40
      }
    }
    return { items, buttons: items.filter((item) => item.kind === 'button'), height: Math.ceil(y + MARGIN) }
  }

  // Lays the menu out, with lower buttons if that is what it takes to fit the canvas.
  function lay(content) {
    let result
    for (let row = 92; row >= 52; row -= 8) {
      result = arrange(content, row)
      if (result.height <= HEIGHT) break
    }
    result.height = Math.min(HEIGHT, result.height)
    return result
  }

  function fit(text, weight, size, smallest, width) {
    context.font = `${weight} ${size}px ${FONT}`
    while (size > smallest && context.measureText(text).width > width) context.font = `${weight} ${size -= 2}px ${FONT}`
    let shown = String(text)
    while (shown.length > 1 && context.measureText(shown).width > width) shown = `${shown.slice(0, -2)}…`
    return shown
  }

  function draw() {
    const { items, height } = sheet
    context.clearRect(0, 0, WIDTH, HEIGHT)
    context.fillStyle = '#fffdf2f5'
    context.strokeStyle = '#e3d9c4'
    context.lineWidth = 6
    context.beginPath()
    context.roundRect(3, 3, WIDTH - 6, height - 6, 44)
    context.fill()
    context.stroke()
    context.textBaseline = 'middle'
    for (const item of items) {
      if (item.kind === 'button') {
        drawButton(item)
        continue
      }
      context.textAlign = item.kind === 'hint' ? 'center' : 'left'
      if (item.kind === 'title') {
        context.fillStyle = INK
        context.fillText(fit(item.text, 700, 46, 30, item.right - item.x), item.x, item.y)
      } else if (item.kind === 'subtitle') {
        context.fillStyle = MUTED
        context.fillText(fit(item.text, 500, 32, 24, item.right - item.x), item.x, item.y)
      } else if (item.kind === 'label') {
        context.fillStyle = MUTED
        context.fillText(fit(item.text, 600, 30, 24, item.right - item.x), item.x, item.y)
      } else {
        context.font = `500 28px ${FONT}`
        context.fillStyle = MUTED
        context.fillText(item.text, item.x, item.y)
      }
    }
    texture.repeat.set(1, height / HEIGHT)
    texture.offset.set(0, 1 - height / HEIGHT)
    texture.needsUpdate = true
  }

  function drawButton(button) {
    const hovered = SIDES.some((side) => hovers[side]?.button === button)
    const flashing = flash === button && clock < flashUntil
    const usable = !button.disabled
    const { x, y, w, h } = button
    context.fillStyle = !usable ? '#f1ece2' : flashing ? '#ffd76a' : hovered ? '#fff1b8' : button.active ? '#cdebdc' : '#ffffff'
    context.strokeStyle = hovered && usable ? '#e0b43c' : button.active ? '#7fbf9f' : '#d9cfba'
    context.lineWidth = hovered && usable ? 7 : 3
    context.beginPath()
    context.roundRect(x, y, w, h, Math.min(24, h / 3))
    context.fill()
    context.stroke()
    context.textAlign = 'center'
    context.fillStyle = usable ? INK : FADED
    const size = Math.round(THREE.MathUtils.clamp(h * 0.42, 24, 40))
    context.fillText(fit(button.label ?? '', 700, size, 20, w - 22), x + w / 2, y + h / 2 + 2)
  }

  // Where the menu sits on a wrist given in the WebXR wrist frame (+Y out of the back of the
  // hand, +Z back along the arm): over the forearm, its text running along the arm.
  function wear(wrist, side, width) {
    back.set(0, 1, 0).applyQuaternion(wrist.rotation)
    along.set(0, 0, 1).applyQuaternion(wrist.rotation)
    panel.position.copy(wrist.position).addScaledVector(back, 0.05).addScaledVector(along, 0.08)
    xAxis.copy(along).multiplyScalar(side === 'left' ? -1 : 1)
    zAxis.copy(back)
    yAxis.crossVectors(zAxis, xAxis)
    panel.quaternion.setFromRotationMatrix(basis.makeBasis(xAxis, yAxis, zAxis))
    panel.scale.set(width, width * sheet.height / WIDTH, 1)
  }

  // How plainly the worn menu is being looked at.
  function looked(eye, view) {
    toEye.subVectors(eye, panel.position)
    const distance = toEye.length()
    toEye.divideScalar(distance || 1)
    back.set(0, 0, 1).applyQuaternion(panel.quaternion)
    forward.set(0, 0, -1).applyQuaternion(view)
    return { facing: back.dot(toEye), centred: -forward.dot(toEye), distance }
  }

  function float(eye, view, delta) {
    const height = PINNED_WIDTH * sheet.height / WIDTH
    // Its top a little below the eyes, so that a long menu reaches down rather than up.
    ahead(eye, view, PINNED_DISTANCE, 0.06 + height / 2, goalPosition)
    faceEye(goalPosition, eye, goalRotation)
    panel.scale.set(PINNED_WIDTH, height, 1)
    if (snap) {
      panel.position.copy(goalPosition)
      panel.quaternion.copy(goalRotation)
      snap = false
      following = false
      return
    }
    // It stays put while it is in sight, and catches up once the head has turned well away.
    toEye.subVectors(panel.position, eye).setY(0)
    const away = toEye.normalize().dot(forward)
    const drift = panel.position.distanceTo(goalPosition)
    if (away < 0.75 || drift > 0.4) following = true
    if (!following) return
    const blend = 1 - Math.exp(-5 * delta)
    panel.position.lerp(goalPosition, blend)
    panel.quaternion.slerp(goalRotation, blend)
    if (drift < 0.02) following = false
  }

  function intersect(ray) {
    normal.set(0, 0, 1).applyQuaternion(panel.quaternion)
    if (ray.direction.dot(normal) >= 0) return null
    plane.setFromNormalAndCoplanarPoint(normal, panel.position)
    if (!ray.intersectPlane(plane, hitPoint)) return null
    panel.updateMatrixWorld()
    local.copy(hitPoint)
    panel.worldToLocal(local)
    if (Math.abs(local.x) > 0.5 || Math.abs(local.y) > 0.5) return null
    return { distance: ray.origin.distanceTo(hitPoint), x: (local.x + 0.5) * WIDTH, y: (0.5 - local.y) * sheet.height }
  }

  function placeNotice(eye, view, delta) {
    if (noticeUntil <= clock && noticeFade < 0.01) {
      notice.visible = false
      return
    }
    noticeFade += ((noticeUntil > clock ? 1 : 0) - noticeFade) * (1 - Math.exp(-10 * delta))
    notice.material.opacity = noticeFade
    notice.visible = noticeFade > 0.01
    ahead(eye, view, 0.85, 0.22, goalPosition)
    faceEye(goalPosition, eye, goalRotation)
    if (noticeSnap) {
      notice.position.copy(goalPosition)
      notice.quaternion.copy(goalRotation)
      noticeSnap = false
      return
    }
    toEye.subVectors(notice.position, eye).setY(0)
    if (toEye.normalize().dot(forward) < 0.85 || notice.position.distanceTo(goalPosition) > 0.3) noticeFollowing = true
    if (!noticeFollowing) return
    const blend = 1 - Math.exp(-6 * delta)
    notice.position.lerp(goalPosition, blend)
    notice.quaternion.slerp(goalRotation, blend)
    if (notice.position.distanceTo(goalPosition) < 0.02) noticeFollowing = false
  }

  return {
    // Places and draws the menu for this frame. `hands` gives each hand's wrist (in the WebXR
    // wrist frame) and pointing ray in the world. `content` is asked for only while the menu
    // shows: { title, subtitle, hint, sections: [{ label, columns, buttons: [{ label, active,
    // disabled, ... }] }] }; a pressed button is handed back to `onPress` as it was given.
    // Returns how far along each hand's ray the menu was hit, and which hand wears it.
    update({ eye, view, hands, content, delta }) {
      clock += delta
      if (pinned || shown || fade > 0) {
        const now = content()
        const key = JSON.stringify([now, pinned])
        if (key !== laidOut) {
          laidOut = key
          sheet = lay(now)
          for (const side of SIDES) hovers[side] = null
        }
      }
      if (pinned) {
        holder = null
        shown = true
        float(eye, view, delta)
      } else {
        const width = Math.min(WRIST_WIDTH, WRIST_TALLEST * WIDTH / sheet.height)
        let found = false
        if (holder && !hands[holder]?.wrist) holder = null
        for (const side of holder ? [holder] : SIDES) {
          const wrist = hands[side]?.wrist
          if (!wrist) continue
          wear(wrist, side, width)
          const { facing, centred, distance } = looked(eye, view)
          const open = shown && side === holder
          if (open ? facing > 0.3 && centred > 0.55 && distance < 0.8 : facing > 0.5 && centred > 0.75 && distance < 0.7) {
            holder = side
            found = true
            break
          }
        }
        shown = found
        if (!found && fade < 0.02) holder = null
      }
      fade += ((shown ? 1 : 0) - fade) * (1 - Math.exp(-14 * delta))
      if (!shown && fade < 0.01) fade = 0
      panel.visible = fade > 0
      panel.material.opacity = fade
      const live = fade > 0.6
      for (const side of SIDES) {
        const ray = hands[side]?.ray
        const hit = panel.visible && live && ray && side !== holder ? intersect(ray) : null
        const button = hit ? sheet.buttons.find((item) => hit.x >= item.x && hit.x <= item.x + item.w
          && hit.y >= item.y && hit.y <= item.y + item.h) ?? null : null
        if (button && !button.disabled && button !== hovers[side]?.button) onPulse?.(side, 0.12, 12)
        hovers[side] = hit ? { distance: hit.distance, button } : null
      }
      if (panel.visible) {
        const signature = `${laidOut}|${SIDES.map((side) => sheet.buttons.indexOf(hovers[side]?.button)).join()}|${clock < flashUntil ? sheet.buttons.indexOf(flash) : -1}`
        if (signature !== drawn) {
          drawn = signature
          draw()
        }
      }
      placeNotice(eye, view, delta)
      reach.left = hovers.left?.distance ?? null
      reach.right = hovers.right?.distance ?? null
      reach.holder = shown ? holder : null
      return reach
    },
    // The trigger of one hand: true when the menu took it, so that it does not also walk.
    select(side) {
      if (fade < 0.3) return false
      if (side === holder) return true
      const hover = hovers[side]
      if (!hover) return false
      const { button } = hover
      if (button && !button.disabled) {
        flash = button
        flashUntil = clock + 0.18
        onPulse?.(side, 0.45, 35)
        if (button.action === 'vr-close') {
          pinned = false
          shown = false
        } else onPress?.(button)
      }
      return true
    },
    // Whether this hand is wearing the menu (and so is not pointing, or gripping, with it).
    wearing: (side) => shown && side === holder,
    // A face button floats the menu in front of the eyes, or puts it away again.
    toggle() {
      pinned = !pinned
      shown = pinned
      snap = true
      holder = null
    },
    notify(text) {
      notice.material.map?.dispose()
      const { map, aspect } = textTexture(String(text), {
        color: INK, background: '#fffdf2f2', border: '#e3d9c4', font: `700 44px ${FONT}`, padding: 22,
      })
      notice.material.map = map
      notice.material.needsUpdate = true
      notice.scale.set(0.05 * aspect, 0.05, 1)
      noticeUntil = clock + 3.6
      if (noticeFade < 0.05) noticeSnap = true
    },
    hide() {
      pinned = false
      shown = false
      holder = null
      fade = 0
      panel.visible = false
      noticeUntil = 0
      noticeFade = 0
      notice.visible = false
      hovers.left = null
      hovers.right = null
    },
    dispose() {
      world.remove(panel, notice)
      panel.geometry.dispose()
      panel.material.dispose()
      texture.dispose()
      notice.geometry.dispose()
      notice.material.map?.dispose()
      notice.material.dispose()
    },
  }
}
