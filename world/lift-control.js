// How a lift is run: which storey its car goes to next, how it speeds up and slows down, and
// when its doors open and close. Nothing here draws anything: the 3D view asks where the car
// is and how far its doors stand open, and tells what its passengers and its buttons do.
//
// The car answers calls the way lifts in Japanese buildings do (乗合全自動方式): going up it
// stops at every storey that was asked for on its way, then turns round for the calls below.

// `stops` are the storeys the lift serves, as [{ level, y }] with y the height of each floor.
export function createLiftControl(stops, { speed = 1.6, accel = 0.75, doorTime = 1.05, dwell = 3.2 } = {}) {
  const order = [...stops].sort((a, b) => a.y - b.y)
  const stopOf = (level) => order.find((stop) => stop.level === level)
  const state = {
    y: order[0].y,
    // How fast the car is moving, in metres a second (never negative: `heading` says which way).
    v: 0,
    // The storey the car stands at, or null while it is between storeys.
    at: order[0].level,
    // 1 while there is more to do above, -1 below, 0 with nothing asked for.
    heading: 0,
    // How far the doors stand open, from 0 (shut) to 1.
    door: 0,
    // 'idle' (shut and waiting), 'opening', 'open', 'closing', 'moving', or 'shadow' while the
    // car keeps under the feet of someone who rides it on another screen.
    phase: 'idle',
    timer: 0,
    // The storeys asked for, from the buttons in the car and on the landings alike.
    calls: new Set(),
    // The storey the car is heading for.
    target: null,
    shadowed: 0,
    rest: 0,
  }

  const ahead = (way, from = state.y) => order.filter((stop) => state.calls.has(stop.level) && (stop.y - from) * way > 0.01)
  const nearest = (y = state.y) => order.reduce((best, stop) => (Math.abs(stop.y - y) < Math.abs(best.y - y) ? stop : best))

  // Which way to go when there are calls: on in the same direction while there is something
  // that way, else towards the nearest call.
  function choose() {
    if (state.heading && ahead(state.heading).length) return state.heading
    let best = null
    for (const stop of order) {
      if (!state.calls.has(stop.level)) continue
      const gap = Math.abs(stop.y - state.y)
      if (!best || gap < best.gap) best = { gap, way: Math.sign(stop.y - state.y) }
    }
    return best?.way ?? 0
  }

  // What the arrows show once the car has stopped: where it will go on to, if anywhere.
  function onward() {
    if (state.heading && ahead(state.heading).length) return state.heading
    if (state.heading && ahead(-state.heading).length) return -state.heading
    return state.calls.size ? choose() : 0
  }

  function arrive(stop, events) {
    state.y = stop.y
    state.v = 0
    state.at = stop.level
    state.target = null
    state.calls.delete(stop.level)
    state.heading = onward()
    state.phase = 'opening'
    events.push({ type: 'arrive', level: stop.level, heading: state.heading })
  }

  return {
    stops: order,
    get y() { return state.y },
    get v() { return state.v },
    get at() { return state.at },
    get heading() { return state.heading },
    get door() { return state.door },
    get phase() { return state.phase },
    get target() { return state.target },
    calls: () => [...state.calls],
    // The storey the indicators show: the one the car stands at or has last come near.
    shown: () => state.at ?? nearest().level,

    // A button for a storey: in the car, or the call button on that landing.
    press(level) {
      if (!stopOf(level)) return false
      if (level === state.at && state.phase !== 'moving' && state.phase !== 'shadow') {
        // The car is here: its doors open (again), or stay open a while longer.
        if (state.phase === 'idle' || state.phase === 'closing') state.phase = 'opening'
        else if (state.phase === 'open') state.timer = Math.max(state.timer, dwell)
        return true
      }
      state.calls.add(level)
      return true
    },
    // The buttons that hold the doors and that send them shut.
    open() {
      if (state.at === null) return false
      if (state.phase === 'idle' || state.phase === 'closing') state.phase = 'opening'
      else if (state.phase === 'open') state.timer = Math.max(state.timer, dwell)
      return true
    },
    close() {
      if (state.phase === 'open') state.timer = Math.min(state.timer, 0.25)
      return state.phase === 'open'
    },

    // Keeps the car under someone who rides it on another screen, where their own lift is
    // carrying them: `y` is the height they were last seen at.
    shadow(y, delta) {
      if (state.phase === 'moving') return
      const apart = Math.abs(y - state.y)
      if (state.phase !== 'shadow') {
        if (apart < 0.3) return
        state.phase = 'shadow'
        state.door = 0
        state.at = null
        state.v = 0
      }
      state.shadowed = 1.5
      state.heading = apart < 0.02 ? state.heading : Math.sign(y - state.y)
      state.y += Math.sign(y - state.y) * Math.min(apart, 2.6 * delta)
      // How long they have stood level with a floor: passing a storey is not arriving at it.
      state.rest = Math.abs(nearest(y).y - y) < 0.05 ? state.rest + delta : 0
    },

    // Moves the car and its doors on by `delta` seconds. `blocked`: someone stands in the
    // doorway. Returns what happened: [{ type: 'depart' | 'arrive' | 'closing' | 'reopen', … }].
    update(delta, { blocked = false } = {}) {
      const events = []
      if (state.phase === 'shadow') {
        state.shadowed -= delta
        const stop = nearest()
        // The rider has come to rest at a storey, or is no longer there to follow.
        if (state.rest > 0.35 && Math.abs(stop.y - state.y) < 0.04) arrive(stop, events)
        else if (state.shadowed <= 0) {
          state.calls.add(stop.level)
          state.heading = Math.sign(stop.y - state.y)
          state.target = stop.level
          state.phase = 'moving'
        }
      } else if (state.phase === 'idle') {
        if (state.calls.has(state.at)) {
          state.calls.delete(state.at)
          state.phase = 'opening'
        } else if (state.calls.size) {
          state.heading = choose()
          state.phase = 'moving'
          events.push({ type: 'depart', level: state.at, heading: state.heading })
          state.at = null
        } else state.heading = 0
      } else if (state.phase === 'opening') {
        state.door = Math.min(1, state.door + delta / doorTime)
        if (state.door >= 1) {
          state.phase = 'open'
          state.timer = dwell
        }
      } else if (state.phase === 'open') {
        if (blocked) state.timer = Math.max(state.timer, 1.2)
        state.timer -= delta
        if (state.timer <= 0) {
          state.phase = 'closing'
          events.push({ type: 'closing', level: state.at })
        }
      } else if (state.phase === 'closing') {
        if (blocked) {
          // The edge of a door has met someone: the doors open again.
          state.phase = 'opening'
          events.push({ type: 'reopen', level: state.at })
        } else {
          state.door = Math.max(0, state.door - delta / (doorTime * 1.15))
          if (state.door <= 0) state.phase = 'idle'
        }
      }
      if (state.phase === 'moving') {
        const way = state.heading || 1
        // The car is bound for a storey, and stays so; but a storey asked for that lies before
        // it is stopped at first, as long as the car can still pull up there.
        const braking = state.v * state.v / (2 * accel)
        let stop = state.target === null ? null : stopOf(state.target)
        const sooner = ahead(way, state.y + way * braking).filter((entry) => !stop || (entry.y - stop.y) * way < 0)
          .sort((a, b) => (a.y - b.y) * way)[0]
        if (sooner) stop = sooner
        // (Sent off with nothing asked for ahead, the car pulls up at the first storey it can.)
        stop ??= ahead(way).sort((a, b) => (a.y - b.y) * way)[0]
          ?? order.filter((entry) => (entry.y - state.y) * way >= braking).sort((a, b) => (a.y - b.y) * way)[0] ?? nearest()
        state.target = stop.level
        const gap = (stop.y - state.y) * way
        // Speeding up gently, and slowing so as to stop exactly level with the floor.
        const allowed = Math.sqrt(Math.max(0, 2 * accel * gap))
        state.v = Math.min(speed, state.v + accel * delta, Math.max(allowed, 0.06))
        const travel = state.v * delta
        if (travel >= gap - 0.001) arrive(stop, events)
        else state.y += way * travel
      }
      return events
    },
  }
}
