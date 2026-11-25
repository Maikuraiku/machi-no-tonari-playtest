// The region of a region town on this screen. The worker of the region map
// (public/region/worker.js) generates the whole region from the town's seed, away from the page,
// and then answers what the game asks of it: windows of ground, roads and buildings, the ground
// under the monorail, walkable spots. One region at a time; the page (region-app.js) and the 3D
// view (region-layer.js) share it, so both import this file by the same address.
// It also keeps the server's clock, so that every screen runs the trains at the same time.
const listeners = new Set()
const pending = new Map()
const status = {
  seed: null, phase: 'idle', label: '', fraction: 0, elapsed: 0,
  overlay: null, fingerprint: null, version: null, error: '', shown: false, legacy: false,
}
let worker = null
let asked = 0
let watchdog = 0
let restarts = 0
let heard = false
// The server's clock: the largest (least delayed) difference seen in the last minute.
let samples = []
let offset = 0

function emit(kind) {
  for (const listener of [...listeners]) {
    try {
      listener(kind, status)
    } catch (error) {
      console.error(error)
    }
  }
}

function fail(text) {
  status.phase = 'failed'
  status.error = text
  for (const [id, entry] of pending) {
    pending.delete(id)
    entry.reject(new Error(text))
  }
  emit('failed')
}

function onMessage(event) {
  const message = event.data
  if (message.seed === status.seed) heard = true
  if (message.type === 'progress') {
    if (message.seed !== status.seed) return
    Object.assign(status, { phase: 'generating', label: message.label, fraction: message.fraction, elapsed: message.elapsed })
    emit('progress')
    return
  }
  if (message.type === 'ready') {
    if (message.seed !== status.seed) return
    Object.assign(status, {
      phase: 'ready', fraction: 1, overlay: message.overlay, fingerprint: message.fingerprint ?? null, version: message.version ?? null,
    })
    emit('ready')
    return
  }
  if (message.type === 'error' && message.request === 'generate') {
    fail(message.message)
    return
  }
  const entry = message.id !== undefined ? pending.get(message.id) : null
  if (!entry) return
  if (message.type === 'error') {
    pending.delete(message.id)
    entry.reject(new Error(message.message))
  } else if (message.type === entry.type) {
    pending.delete(message.id)
    if (message.missing) entry.reject(new Error('地域がまだ用意できていません。'))
    else entry.resolve(message)
  }
}

function start() {
  worker?.terminate()
  heard = false
  worker = status.legacy
    ? new Worker(new URL('./region/worker-20261119.bundle.js', location.href))
    : new Worker(new URL('../region/worker.js?v=5', import.meta.url), { type: 'module' })
  worker.onmessage = onMessage
  worker.onerror = (event) => {
    event.preventDefault?.()
    fail(`地域の計算を始められませんでした。${event.message ?? ''}`)
  }
  worker.postMessage({ type: 'generate', seed: status.seed, preloadBuildings: true })
  // A worker whose modules never arrived says nothing at all: start it again, twice at most.
  clearTimeout(watchdog)
  watchdog = setTimeout(() => {
    if (heard || status.phase !== 'generating') return
    if (restarts++ < 2) start()
    else fail('地域の計算が始まりませんでした。ページを読み込み直してください。')
  }, 20_000)
}

export const regionClient = {
  get status() {
    return status
  },

  // Starts generating the region of `seed` (nothing happens if it is already there or on the way).
  open(seed, fingerprint) {
    // This published generator matches the regions saved under the November 19 release.
    const legacy = seed === 3 && fingerprint?.division === '436f9b15047fa889' && fingerprint?.lines === 'e7b095f714a2d221'
    if (status.seed === seed && status.legacy === legacy && worker && status.phase !== 'failed') return
    this.close()
    Object.assign(status, {
      seed, phase: 'generating', label: '準備', fraction: 0, elapsed: 0,
      overlay: null, fingerprint: null, version: null, error: '', shown: false, legacy,
    })
    restarts = 0
    start()
    emit('open')
  },

  close() {
    clearTimeout(watchdog)
    worker?.terminate()
    worker = null
    for (const [id, entry] of pending) {
      pending.delete(id)
      entry.reject(new Error('地域を閉じました。'))
    }
    if (status.seed !== null) {
      Object.assign(status, { seed: null, phase: 'idle', overlay: null, shown: false, legacy: false })
      emit('close')
    }
  },

  // Asks the worker something of the region; the reply comes back matched by id.
  call(type, payload = {}, transfer = []) {
    if (!worker || status.phase !== 'ready') return Promise.reject(new Error('地域がまだ用意できていません。'))
    const id = `r${++asked}`
    return new Promise((resolve, reject) => {
      pending.set(id, { type, resolve, reject })
      worker.postMessage({ ...payload, type, id, seed: status.seed }, transfer)
    })
  },

  // Told by the 3D view once the ground round the player is in.
  markShown() {
    if (status.shown) return
    status.shown = true
    emit('shown')
  },

  // Listens to 'open', 'progress', 'ready', 'shown', 'failed' and 'close'; returns the way to stop.
  on(listener) {
    listeners.add(listener)
    return () => listeners.delete(listener)
  },

  // The district (丁目) at a point in region metres, or null.
  districtAt(x, z) {
    const districts = status.overlay?.districts
    if (!districts) return null
    const { cell, columns, districtOf, list } = districts
    const cx = Math.floor(x / cell)
    const cz = Math.floor(z / cell)
    if (cx < 0 || cz < 0 || cx >= columns || cz >= columns) return null
    const id = districtOf[cx + cz * columns]
    return id >= 0 ? list[id] ?? null : null
  },

  // The server's clock, from the times the server put in its replies.
  sample(serverTime) {
    if (!Number.isFinite(serverTime)) return
    const now = Date.now()
    samples = samples.filter((entry) => now - entry.at < 60_000)
    samples.push({ at: now, offset: serverTime - now })
    offset = Math.max(...samples.map((entry) => entry.offset))
  },
  now() {
    return Date.now() + offset
  },
}
