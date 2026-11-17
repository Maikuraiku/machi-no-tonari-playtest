// A small stand-in for Unity's Animator, enough to run the FX controller of a VRChat avatar:
// layered state machines with conditions and exit times, clips, blend trees, write defaults,
// and the VRChat state behaviours that drive parameters, layer weights and face tracking.
// It knows nothing about 3D: it turns parameters into a table of animated values each frame.

const TRACKING = 1
const ANIMATION = 2
const LIMIT = 1e6
// How many numbers a curve of each kind carries; everything else is a single number.
const SIZES = { scale: 3, position: 3, euler: 3, rotation: 4 }
// What differs from screen to screen or changes many times a second: whose screen it is, speech
// and movement. Layers that ask about these are worked out on each screen by itself.
const PRIVATE = new Set(['IsLocal', 'Viseme', 'Voice', 'VelocityX', 'VelocityY', 'VelocityZ', 'VelocityMagnitude', 'AngularY'])

function random(seed) {
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let value = Math.imul(state ^ (state >>> 15), 1 | state)
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

// The value of a curve at a time; keys are [time, value, ...more components].
function valueAt(keys, time) {
  if (keys.length === 1 || time <= keys[0][0]) return keys[0].length === 2 ? keys[0][1] : keys[0].slice(1)
  const last = keys.at(-1)
  if (time >= last[0]) return last.length === 2 ? last[1] : last.slice(1)
  let index = 1
  while (keys[index][0] < time) index++
  const from = keys[index - 1]
  const to = keys[index]
  const amount = (time - from[0]) / (to[0] - from[0] || 1)
  if (from.length === 2) return from[1] + (to[1] - from[1]) * amount
  return from.slice(1).map((value, component) => value + (to[component + 1] - value) * amount)
}

const mix = (from, to, amount) => (Array.isArray(to)
  ? to.map((value, index) => (from?.[index] ?? value) + (value - (from?.[index] ?? value)) * amount)
  : (from ?? to) + (to - (from ?? to)) * amount)

const isText = (value) => typeof value === 'string'
const isIndex = (value, below) => Number.isInteger(value) && value >= 0 && value < below

function wellFormed(program) {
  const { parameters, clips, layers } = program
  if (!Array.isArray(parameters) || parameters.length > 1024 || !Array.isArray(clips) || clips.length > 2048
    || !Array.isArray(layers) || !layers.length || layers.length > 256) return false
  if (!parameters.every((entry) => isText(entry.name) && ['float', 'int', 'bool', 'trigger'].includes(entry.type)
    && Number.isFinite(entry.default))) return false

  let keys = 0
  for (const clip of clips) {
    if (!(clip.length >= 0) || !Number.isFinite(clip.length) || typeof clip.loop !== 'boolean' || !Array.isArray(clip.curves)) return false
    for (const curve of clip.curves) {
      if (!Array.isArray(curve) || !isIndex(curve[0], 65536) || !isText(curve[1]) || !Array.isArray(curve[2]) || !curve[2].length) return false
      const size = 1 + (SIZES[curve[1]] ?? 1)
      if (!curve[2].every((key) => Array.isArray(key) && key.length === size && key.every(Number.isFinite))) return false
      keys += curve[2].length
    }
  }
  if (keys > 400000) return false

  const motionOk = (motion, depth = 0) => motion === null || isIndex(motion.clip, clips.length)
    || (depth < 8 && Number.isInteger(motion.tree.type) && isText(motion.tree.x) && isText(motion.tree.y)
      && Array.isArray(motion.tree.children) && motion.tree.children.length <= 256
      && motion.tree.children.every((child) => [child.threshold, child.x, child.y, child.speed].every(Number.isFinite)
        && isText(child.direct) && motionOk(child.motion, depth + 1)))
  const transitionOk = (transition, states) => Number.isInteger(transition.to) && transition.to >= -1 && transition.to < states
    && Array.isArray(transition.when) && transition.when.length <= 64
    && transition.when.every((entry) => Array.isArray(entry) && isText(entry[0]) && Number.isInteger(entry[1]) && Number.isFinite(entry[2]))
    && (transition.exit === null || Number.isFinite(transition.exit)) && typeof transition.self === 'boolean'
  const behaviourOk = (behaviour) => {
    const { driver, tracking, weight } = behaviour
    if (driver) {
      return typeof driver.local === 'boolean' && Array.isArray(driver.steps) && driver.steps.length <= 256
        && driver.steps.every((step) => Number.isInteger(step.type) && isText(step.name) && isText(step.source)
          && [step.value, step.min, step.max, step.chance].every(Number.isFinite)
          && (step.range === null || (Array.isArray(step.range) && step.range.length === 4 && step.range.every(Number.isFinite))))
    }
    if (tracking) return Number.isInteger(tracking.eyes) && Number.isInteger(tracking.mouth)
    return Boolean(weight) && Number.isInteger(weight.layer) && Number.isFinite(weight.value)
  }

  let size = 0
  for (const layer of layers) {
    if (!isText(layer.name) || !Number.isFinite(layer.weight) || !Array.isArray(layer.states)
      || !isIndex(layer.start, layer.states.length) || !Array.isArray(layer.any) || !Array.isArray(layer.entry)) return false
    const transitions = [...layer.any, ...layer.entry]
    for (const state of layer.states) {
      if (!isText(state.name) || !motionOk(state.motion) || !Number.isFinite(state.speed) || !(state.time === null || isText(state.time))
        || typeof state.defaults !== 'boolean' || !Array.isArray(state.next) || !Array.isArray(state.enter)
        || state.enter.length > 64 || !state.enter.every(behaviourOk)) return false
      transitions.push(...state.next)
    }
    if (!transitions.every((transition) => transitionOk(transition, layer.states.length))) return false
    size += layer.states.length + transitions.length
  }
  return size <= 20000
}

// Programs travel inside avatar files that anyone can upload, so one is checked through and
// through before it runs: well-formed, and small enough to run every frame.
export function validProgram(program) {
  try {
    return wellFormed(program)
  } catch {
    return false
  }
}

// `rest(path, property)` gives a property's value when nothing animates it (a blend shape's own
// weight, a part's own size); `local` is true on the screen of the avatar's owner; `seed` keeps the
// random choices of parameter drivers the same on every screen.
export function createAnimator(program, { rest = () => undefined, local = false, seed = 1 } = {}) {
  const types = new Map(program.parameters.map(({ name, type }) => [name, type]))
  const parameters = new Map()
  const chance = random(seed)
  const tracking = { eyes: TRACKING, mouth: TRACKING }
  const names = program.clips.map((clip) => clip.curves.map(([path, property]) => `${path}|${property}`))
  // A clip whose curves never change gives the same values whenever it is sampled.
  const still = program.clips.map((clip) => clip.curves.every(([, , keys]) => keys.length === 1))
  // What every layer can animate, so that a state with write defaults can put the rest back.
  const reach = program.layers.map(() => new Set())
  const lengths = new Map()
  const values = new Map()
  const runs = program.layers.map((layer) => ({ state: layer.start, time: 0, frames: 0, weight: layer.weight, kept: new Map(), heading: -1, held: 0, restless: 0, stable: -1 }))

  function set(name, value) {
    const type = types.get(name)
    if (!type) return
    const number = value === true ? 1 : Math.min(LIMIT, Math.max(-LIMIT, Number(value) || 0))
    parameters.set(name, type === 'float' ? number : type === 'int' ? Math.round(number) : number ? 1 : 0)
  }
  for (const { name, default: initial } of program.parameters) set(name, initial)
  // What VRChat itself reports about the wearer; an avatar may wait for these before doing anything.
  for (const [name, value] of [['IsLocal', local], ['Grounded', 1], ['Upright', 1], ['TrackingType', 3], ['ScaleFactor', 1],
    ['ScaleFactorInverse', 1], ['EyeHeightAsMeters', 1.5], ['EyeHeightAsPercent', 0.15], ['AvatarVersion', 3], ['IsAnimatorEnabled', 1]]) {
    set(name, value)
  }

  function duration(motion) {
    if (!motion) return 0
    if (!lengths.has(motion)) {
      lengths.set(motion, motion.clip !== undefined
        ? program.clips[motion.clip].length
        : Math.max(0, ...motion.tree.children.map((child) => duration(child.motion))))
    }
    return lengths.get(motion)
  }

  function collect(motion, into) {
    if (!motion) return
    if (motion.clip !== undefined) {
      for (const key of names[motion.clip]) into.add(key)
    } else for (const child of motion.tree.children) collect(child.motion, into)
  }
  program.layers.forEach((layer, index) => layer.states.forEach((state) => collect(state.motion, reach[index])))

  function holds([name, mode, threshold]) {
    const value = parameters.get(name) ?? 0
    switch (mode) {
      case 1: return value !== 0
      case 2: return value === 0
      case 3: return value > threshold
      case 4: return value < threshold
      case 6: return value === threshold
      case 7: return value !== threshold
      default: return false
    }
  }

  function drive(steps) {
    for (const step of steps) {
      const type = types.get(step.name)
      if (!type) continue
      if (step.type === 1) set(step.name, (parameters.get(step.name) ?? 0) + step.value)
      else if (step.type === 2) {
        const roll = chance()
        set(step.name, type === 'float' ? step.min + roll * (step.max - step.min)
          : type === 'int' ? Math.floor(step.min + roll * (step.max - step.min + 1))
            : roll < step.chance)
      } else if (step.type === 3) {
        let value = parameters.get(step.source) ?? 0
        if (step.range) {
          const [fromMin, fromMax, toMin, toMax] = step.range
          value = toMin + (value - fromMin) / (fromMax - fromMin || 1) * (toMax - toMin)
        }
        set(step.name, value)
      } else set(step.name, step.value)
    }
  }

  // With `landed` the layer arrives as if it had been in the state for a while: its clip has
  // played through, and its drivers, which ran when it really got there, stay quiet.
  function enter(index, target, landed = false) {
    const layer = program.layers[index]
    const run = runs[index]
    // Leaving through Exit comes back in through Entry.
    if (target < 0) target = layer.entry.find((transition) => transition.to >= 0 && transition.when.every(holds))?.to ?? layer.start
    run.state = target
    run.time = landed ? duration(layer.states[target].motion) : 0
    run.frames = landed ? 2 : 0
    for (const behaviour of layer.states[target].enter) {
      if (behaviour.driver && !landed && (local || !behaviour.driver.local)) drive(behaviour.driver.steps)
      if (behaviour.tracking?.eyes) tracking.eyes = behaviour.tracking.eyes
      if (behaviour.tracking?.mouth) tracking.mouth = behaviour.tracking.mouth
      if (behaviour.weight && runs[behaviour.weight.layer]) runs[behaviour.weight.layer].weight = behaviour.weight.value
    }
  }

  function advance(index, delta) {
    const layer = program.layers[index]
    const run = runs[index]
    const state = layer.states[run.state]
    run.time += delta * state.speed
    run.frames++
    const length = duration(state.motion)
    // A clip with no length counts as played through once it has been shown for a frame.
    const played = length > 0 ? run.time / length : run.frames > 1 ? 1 : 0
    const ready = (transition, fromAnywhere) => {
      if (fromAnywhere && transition.to === run.state && !transition.self) return false
      if (!transition.when.length && transition.exit === null) return false
      if (transition.exit !== null && played < transition.exit) return false
      return transition.when.every(holds)
    }
    const next = layer.any.find((transition) => ready(transition, true)) ?? state.next.find((transition) => ready(transition, false))
    if (!next) return
    for (const [name] of next.when) {
      if (types.get(name) === 'trigger') parameters.set(name, 0)
    }
    enter(index, next.to)
  }

  function weights(tree) {
    const { children } = tree
    if (tree.type === 4) return children.map((child) => Math.max(0, parameters.get(child.direct) ?? 0))
    if (tree.type === 0) {
      const at = parameters.get(tree.x) ?? 0
      const order = children.map((child, index) => [child.threshold, index]).sort((a, b) => a[0] - b[0])
      const result = children.map(() => 0)
      if (at <= order[0][0]) result[order[0][1]] = 1
      else if (at >= order.at(-1)[0]) result[order.at(-1)[1]] = 1
      else {
        const upper = order.findIndex(([threshold]) => threshold >= at)
        const [low, lowIndex] = order[upper - 1]
        const [high, highIndex] = order[upper]
        const amount = (at - low) / (high - low || 1)
        result[lowIndex] = 1 - amount
        result[highIndex] += amount
      }
      return result
    }
    // Two-dimensional trees: weigh each child by how close it is to the parameters.
    const x = parameters.get(tree.x) ?? 0
    const y = parameters.get(tree.y) ?? 0
    const distances = children.map((child) => (child.x - x) ** 2 + (child.y - y) ** 2)
    const exact = distances.findIndex((distance) => distance < 1e-8)
    if (exact >= 0) return distances.map((_, index) => Number(index === exact))
    const inverse = distances.map((distance) => 1 / distance)
    const total = inverse.reduce((sum, value) => sum + value, 0)
    return inverse.map((value) => value / total)
  }

  function sample(motion, time, weight, into, direct) {
    if (!motion || weight <= 0) return
    if (motion.clip !== undefined) {
      const clip = program.clips[motion.clip]
      const at = clip.length > 0 ? (clip.loop ? time % clip.length : Math.min(time, clip.length)) : 0
      const keysOf = names[motion.clip]
      for (let index = 0; index < clip.curves.length; index++) {
        const [path, property, keys] = clip.curves[index]
        const value = valueAt(keys, at)
        const entry = into.get(keysOf[index])
        if (!entry) {
          into.set(keysOf[index], {
            path, property, sum: Array.isArray(value) ? value.map((part) => part * weight) : value * weight, total: weight, direct,
            parameter: property.startsWith('param:') ? property.slice(6) : null, out: null,
          })
        } else {
          entry.total += weight
          if (Array.isArray(value)) value.forEach((part, component) => { entry.sum[component] += part * weight })
          else entry.sum += value * weight
        }
      }
      return
    }
    if (!motion.tree.children.length) return
    const share = weights(motion.tree)
    motion.tree.children.forEach((child, index) => sample(child.motion, time * child.speed, weight * share[index], into, direct || motion.tree.type === 4))
  }

  // What one layer's current state animates this frame. A state that cannot change what it
  // gives - no motion, or a clip that holds still - is worked out once and kept.
  function frameOf(index) {
    const run = runs[index]
    const kept = run.kept.get(run.state)
    if (kept) return kept
    const state = program.layers[index].states[run.state]
    const length = duration(state.motion)
    const time = state.time === null ? run.time : Math.min(1, Math.max(0, parameters.get(state.time) ?? 0)) * length
    const frame = new Map()
    sample(state.motion, time, 1, frame, false)
    if (!state.motion || (state.motion.clip !== undefined && still[state.motion.clip])) run.kept.set(run.state, frame)
    return frame
  }

  function evaluate() {
    program.layers.forEach((layer, index) => {
      const run = runs[index]
      if (run.weight <= 0) return
      const frame = frameOf(index)
      if (layer.states[run.state].defaults) {
        for (const key of reach[index]) {
          if (!frame.has(key)) values.delete(key)
        }
      }
      const whole = run.weight >= 1
      for (const [key, entry] of frame) {
        let out = whole ? entry.out : null
        if (!out) {
          const { path, property, sum, total, direct } = entry
          const own = (direct && total < 1) || !whole ? rest(path, property) : undefined
          const settle = (value, resting) => (direct && total < 1 && resting !== undefined
            ? value + (1 - total) * resting : value / (direct ? Math.max(total, 1) : total))
          let value = Array.isArray(sum) ? sum.map((part, component) => settle(part, own?.[component])) : settle(sum, own)
          if (!whole) value = mix(values.get(key)?.value ?? own, value, run.weight)
          out = { path, property, value }
          if (whole) entry.out = out
        }
        // Animated animator parameters feed back into the next frame's conditions.
        if (entry.parameter !== null) set(entry.parameter, out.value)
        else values.set(key, out)
      }
    })
  }

  // The layers every screen runs alike, and where each of their states ends up when left alone:
  // a clip that simply plays through leads on to the next state.
  const alike = program.layers.map((layer) => ![...layer.any, ...layer.entry, ...layer.states.flatMap((state) => state.next)]
    .some((transition) => transition.when.some(([name]) => PRIVATE.has(name))))
  const lasting = program.layers.map((layer) => layer.states.map((_, from) => {
    const seen = []
    let at = from
    while (!seen.includes(at)) {
      seen.push(at)
      const onward = layer.states[at].next.find((transition) => !transition.when.length && transition.exit !== null)
      if (!onward) return at
      at = onward.to < 0 ? layer.start : onward.to
    }
    // A loop that runs by itself, such as blinking, goes by its first state.
    return Math.min(...seen.slice(seen.indexOf(at)))
  }))
  const home = program.layers.map((layer, index) => lasting[index][layer.start])
  // Some layers flick between two states for as long as nothing is pressed. Only where a layer has
  // stayed for a moment counts as where it is.
  const STAY = 0.5
  function watch(delta) {
    runs.forEach((run, index) => {
      const heading = lasting[index][run.state]
      if (heading !== run.heading) {
        run.heading = heading
        run.held = 0
      }
      run.held += delta
      if (run.held >= STAY) {
        run.stable = heading
        run.restless = 0
      } else if ((run.restless += delta) > 2 * STAY) run.stable = home[index]
    })
  }
  runs.forEach((run, index) => { run.heading = run.stable = home[index] })

  program.layers.forEach((_, index) => enter(index, runs[index].state))
  evaluate()

  return {
    set,
    get: (name) => parameters.get(name) ?? 0,
    has: (name) => types.has(name),
    // Advances every layer by `delta` seconds and refreshes the animated values.
    update(delta) {
      program.layers.forEach((_, index) => advance(index, delta))
      evaluate()
      watch(delta)
    },
    // Where the layers that every screen runs alike have come to rest, for those away from home.
    // Another screen can be put in the same place with `settle`, whenever it starts watching.
    // With `quiet`, only layers that have not moved for that many seconds are put there: one that
    // has just moved is answering a press the report does not know about yet.
    settled() {
      const states = {}
      runs.forEach((run, index) => {
        if (alike[index] && run.stable !== home[index]) states[index] = run.stable
      })
      return states
    },
    settle(states, quiet = 0) {
      runs.forEach((run, index) => {
        if (!alike[index]) return
        const wanted = isIndex(states[index], program.layers[index].states.length) ? states[index] : home[index]
        if (lasting[index][run.state] === wanted || run.held < quiet) return
        enter(index, wanted, true)
        run.heading = run.stable = wanted
        run.held = Math.max(STAY, quiet)
      })
      evaluate()
    },
    // Everything currently animated: key -> { path, property, value }.
    values,
    tracking,
    state: (layer) => program.layers[layer]?.states[runs[layer].state].name,
    eyesFree: () => tracking.eyes !== ANIMATION,
    mouthFree: () => tracking.mouth !== ANIMATION,
  }
}

// How long a button stays down, in seconds. Avatars expect the short press of a hand on a menu.
const TAP = 0.35

// Turns the gimmick panel's controls into parameter writes, the way VRChat's menu does: a toggle
// writes its value when switched on and zero when switched off, a dial writes its position, and
// a button writes its value for a moment. A control without a value is left alone, so an avatar
// keeps its defaults until the values arrive.
export function createControlInput(animator, bindings) {
  const last = new Map()
  const down = []
  const mine = new Map()

  function press(binding) {
    animator.set(binding.parameter, binding.value)
    down.push({ binding, left: TAP })
  }

  return {
    // A button pressed at this screen. The town goes on showing it as pressed for a while;
    // that is the same press, not another one.
    tap(id) {
      const binding = bindings.find((entry) => entry.id === id && entry.kind === 'button')
      if (!binding) return
      mine.set(id, 3)
      press(binding)
    },
    update(controlValues, delta = 0) {
      for (const [id, left] of mine) {
        if (left > delta) mine.set(id, left - delta)
        else mine.delete(id)
      }
      for (let index = down.length - 1; index >= 0; index--) {
        const { binding } = down[index]
        if ((down[index].left -= delta) > 0) continue
        down.splice(index, 1)
        if (animator.get(binding.parameter) === binding.value) animator.set(binding.parameter, 0)
      }
      for (const binding of bindings) {
        const value = controlValues?.[binding.id]
        if (value === undefined || last.get(binding.id) === value) continue
        const watched = last.has(binding.id)
        last.set(binding.id, value)
        if (binding.kind === 'button') {
          // Pressed on someone else's screen. A button that was already down when this screen
          // started watching is old news.
          if (value === true && watched && !mine.has(binding.id)) press(binding)
        } else if (binding.gesture) {
          const held = [animator.get('GestureLeft'), animator.get('GestureRight')].includes(binding.gesture)
          if (value !== true && !held) continue
          const sign = value === true ? binding.gesture : 0
          for (const hand of ['GestureLeft', 'GestureRight']) animator.set(hand, sign)
          for (const hand of ['GestureLeftWeight', 'GestureRightWeight']) animator.set(hand, sign ? 1 : 0)
        } else if (typeof value === 'number') animator.set(binding.parameter, value)
        else if (value) animator.set(binding.parameter, binding.value)
        // Something else may have changed the parameter since; only take back what this control wrote.
        else if (animator.get(binding.parameter) === binding.value) animator.set(binding.parameter, 0)
      }
    },
  }
}

// What the panel's toggles and dials should show, read back from the parameters. An avatar's
// animator may change a parameter by itself, such as switching one outfit off when another goes on.
export function controlStates(animator, bindings) {
  const states = {}
  for (const binding of bindings) {
    if (binding.kind === 'button') continue
    if (binding.gesture) states[binding.id] = [animator.get('GestureLeft'), animator.get('GestureRight')].includes(binding.gesture)
    else if (binding.kind === 'slider') states[binding.id] = Math.round(Math.min(1, Math.max(0, animator.get(binding.parameter))) * 100) / 100
    else states[binding.id] = animator.get(binding.parameter) === binding.value
  }
  return states
}
