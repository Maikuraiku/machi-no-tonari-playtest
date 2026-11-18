// Making a town of the game from the region map. The panel of a district (丁目) offers
// 「この丁目から3Dの街をつくる」, with 建物あり (the region's buildings as they are) or 建物なし
// (only the ground, roads and water). The worker works out the town's plan, the monorail lines
// of the route map and the district map (game-worker.js); the server makes the town from the plan
// (POST ./api/join) and stores each line ('railway' actions) and the district map ('district' op
// 'map'); the page then opens the game at the district. A browser that already made a town from
// this seed is offered 「ゲームでこの丁目へ」 and the town's invite code, which friends use to build
// it together, and is told who manages the district in that town (管理: 〇〇さん) or offered to make
// it its own (自分の地区), which the game finishes after arrival (?district=ID&claim=built|bare).
const SESSION = 'machi-no-tonari:session'
const regionKey = (seed) => `machi-no-tonari:region:${seed}`
const apiBase = new URL(document.querySelector('meta[name="machi-api-origin"]')?.content || './', location.href)
const escape = (text) => String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
// The server's limits on districts (region-town.mjs): those one resident manages, those of a town.
const MINE_LIMIT = 4
const ROOM_LIMIT = 64
// How long a town's state answers for the district panel before the server is asked again.
const FRESH_MS = 4000
// Making the district map takes the worker a moment; one that does not know the request never answers.
const DIVISION_WAIT_MS = 30_000

// Storage can be switched off (a private window); the page then still works, it just forgets.
const stored = {
  get(key) {
    try { return localStorage.getItem(key) } catch { return null }
  },
  set(key, value) {
    try { localStorage.setItem(key, value) } catch { /* nothing kept */ }
  },
}

async function call(path, { body, token } = {}) {
  const headers = token ? { Authorization: `Bearer ${token}` } : {}
  if (body !== undefined) headers['Content-Type'] = 'application/json'
  const response = await fetch(new URL(path, apiBase), {
    method: body === undefined ? 'GET' : 'POST',
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  })
  let data = {}
  try {
    data = await response.json()
  } catch { /* an empty or broken reply keeps {} */ }
  if (!response.ok) {
    const fallback = response.status === 413 ? '送るデータが大きすぎました。' : 'サーバーとの通信に失敗しました。'
    throw Object.assign(new Error(data.error ?? fallback), { status: response.status })
  }
  return data
}

// A line is stored under its id, so sending it again after a lost reply does no harm. Only a
// broken connection or a server failure is tried again; the server's answers about the data stand.
async function retry(send, tries = 3) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await send()
    } catch (error) {
      if (attempt >= tries || (error.status && error.status < 500)) throw error
      await new Promise((resolve) => setTimeout(resolve, 600 * attempt))
    }
  }
}

// Replies from the worker are matched by id here, so the map's own message handler stays as it is.
let asked = 0
function ask(worker, message, wait = 120_000) {
  return new Promise((resolve, reject) => {
    if (!worker) {
      reject(new Error('地域の計算がまだ始まっていません。'))
      return
    }
    const id = `game-${++asked}`
    const listen = (event) => {
      const reply = event.data
      if (reply?.id !== id) return
      if (reply.type === 'error') finish(new Error(`地域の計算に失敗しました。\n${reply.message}`))
      else if (reply.type === message.type) finish(null, reply)
    }
    const timer = setTimeout(() => finish(new Error('地域の計算から返事がありませんでした。もう一度押してください。')), wait)
    function finish(error, reply) {
      clearTimeout(timer)
      worker.removeEventListener('message', listen)
      if (error) reject(error)
      else if (reply.missing) reject(new Error('地域の生成が終わってから、もう一度押してください。'))
      else resolve(reply)
    }
    worker.addEventListener('message', listen)
    worker.postMessage({ ...message, id })
  })
}

// The game's address for a town, landing at (x, z) in region metres. With `claim`
// ({ district, mode }) the game offers to make that district the player's own on arrival.
function gameUrl(code, at, claim = null) {
  const url = new URL('./', location.href)
  url.searchParams.set('join', code)
  if (at) url.searchParams.set('at', `${Math.round(at[0] * 10) / 10},${Math.round(at[1] * 10) / 10}`)
  if (claim) {
    url.searchParams.set('district', String(claim.district))
    url.searchParams.set('claim', claim.mode)
  }
  return url.href
}

// Sends the region's district map (地区わけ), which the residents' claims refer to, to a new town.
// Returns null once it is stored, else the reason it is not. The town is usable either way: the
// game sends the map when the town's host opens it and finds it missing.
async function sendDivision(worker, regionSeed, token) {
  try {
    const reply = await ask(worker, { type: 'divisionMap', seed: regionSeed }, DIVISION_WAIT_MS)
    if (!reply.map || typeof reply.map !== 'object') throw new Error('地区わけのデータを作れませんでした。')
    await retry(() => call('./api/action', { token, body: { ...reply.map, type: 'district', op: 'map' } }))
    return null
  } catch (error) {
    return String(error?.message || error).split('\n')[0]
  }
}

// What the panel says about district `id` of a region town, from the town's state as the server
// sends it (town.mapped, town.districts, players, me): { html, offer }, with `offer` when the
// viewer may make the district their own. `division` is the fingerprint of this page's district
// map: when it is not the town's, the ids of this map may name other districts in the town.
export function standing(state, id, division = null) {
  const town = state?.town
  const region = town?.region
  const note = (text) => ({ html: `<p class="note">${text}</p>`, offer: false })
  if (!region) return note('この街の様子を読み込めませんでした。')
  if (division && region.fingerprint?.division && division !== region.fingerprint.division) {
    return note('この街をつくったあとで地域の計算が変わったため、この地図の丁目と街の地区わけが合いません。ここでは丁目の管理を表示できません。')
  }
  const me = state.me?.id ?? null
  if (town.mapped !== true) {
    // The game sends the map when someone who may change the town opens it (region-app.js).
    const editor = me !== null && (state.hostId === me || (Array.isArray(state.editorIds) && state.editorIds.includes(me)))
    return note(editor
      ? 'この街にはまだ地区わけが入っていません。ゲームでこの街を開くと入り、そのあとでこの丁目を自分の地区にできます。'
      : 'この街にはまだ地区わけが入っていません。街のホストが次にゲームで街を開いたときに入ります。')
  }
  const claims = Array.isArray(town.districts) ? town.districts : []
  const players = Array.isArray(state.players) ? state.players : []
  const names = new Map(players.map((player) => [player.id, player.name]))
  const who = (playerId) => (me !== null && playerId === me ? 'あなた'
    : names.get(playerId) ? `${escape(names.get(playerId))}さん` : 'ほかの住人')
  const claim = claims.find((entry) => entry.id === id)
  if (claim) {
    const editors = (Array.isArray(claim.editorIds) ? claim.editorIds : []).map(who)
    return {
      html: `<p class="game-manager">管理: ${claim.mine ? 'あなた' : who(claim.ownerId)}（${claim.mode === 'bare' ? '建物なし' : '建物あり'}）</p>`
        + (editors.length ? `<p class="note">一緒に作る人: ${editors.join('、')}</p>` : ''),
      offer: false,
    }
  }
  const free = '<p>この丁目はまだ誰も管理していません。</p>'
  const mine = claims.filter((entry) => entry.mine || (me !== null && entry.ownerId === me)).length
  if (mine >= MINE_LIMIT) return { html: `${free}<p class="note">あなたはもう${MINE_LIMIT}つの丁目を管理しています。自分の地区は1人${MINE_LIMIT}つまでです。</p>`, offer: false }
  if (claims.length >= ROOM_LIMIT) return { html: `${free}<p class="note">この街で管理できる丁目の数（${ROOM_LIMIT}）に達しています。</p>`, offer: false }
  return { html: free, offer: true }
}

const CLAIM_BUTTONS = `<div class="buttons">
    <button type="button" data-claim="built">この丁目を自分の地区にする（建物あり）</button>
    <button type="button" data-claim="bare" aria-label="この丁目を自分の地区にする（建物なし）">（建物なし）</button>
  </div>
  <p class="note">建物あり：地域の建物をそのまま／建物なし：地形と道路だけ。ゲームが開くと、確認のあとでこの丁目があなたの地区になり、家を建てられるようになります。</p>`

// `fingerprint()` gives this page's region fingerprints ({ division, lines }) once it is ready.
export function createGameLink({ worker, seed, fingerprint = () => null }) {
  // The town this browser made from each seed, looked up once per seed: a promise of
  // { code, token, name, buildings } or null.
  const towns = new Map()
  // The latest state of each town (by code) for the district panel, { at, request }, and the last
  // whole one. After the first, the town and its districts only travel again when they changed
  // (?layout=), so asking on every selection of a district stays small.
  const fetched = new Map()
  const latest = new Map()
  let name = null
  let rendered = 0
  // The district and the box of the latest panel, drawn again when the page comes back from the history.
  let last = null

  async function loadTown(regionSeed) {
    const code = stored.get(regionKey(regionSeed))
    const token = code && stored.get(`${SESSION}:${code}`)
    if (!token) return null
    try {
      const { state } = await call('./api/state', { token })
      if (state?.town?.region?.seed !== regionSeed) return null
      latest.set(state.code, state)
      fetched.set(state.code, { at: performance.now(), request: Promise.resolve(state) })
      return { code: state.code, token, name: state.me?.name ?? '', buildings: state.town.region.buildings !== false }
    } catch {
      return null // a town that no longer loads is forgotten
    }
  }

  function townOf(regionSeed) {
    if (!towns.has(regionSeed)) towns.set(regionSeed, loadTown(regionSeed))
    return towns.get(regionSeed)
  }

  function stateOf(town) {
    const recent = fetched.get(town.code)
    if (recent && performance.now() - recent.at < FRESH_MS) return recent.request
    const known = latest.get(town.code)
    const path = known?.town && Number.isInteger(known.layout) ? `./api/state?layout=${known.layout}` : './api/state'
    const request = call(path, { token: town.token }).then(({ state }) => {
      // Without a town in the reply the layout has not changed since the one kept.
      const whole = state?.town || !known ? state : { ...state, town: known.town }
      latest.set(town.code, whole)
      return whole
    })
    fetched.set(town.code, { at: performance.now(), request })
    // A failed request is not kept, so the next selection asks again.
    request.catch(() => {
      if (fetched.get(town.code)?.request === request) fetched.delete(town.code)
    })
    return request
  }

  // The name this browser goes by in the game, for the name field.
  async function nameOf() {
    if (name !== null) return name
    name = ''
    const token = stored.get(SESSION)
    if (token) {
      try {
        const { state } = await call('./api/state', { token })
        name = state?.me?.name ?? ''
      } catch { /* left empty */ }
    }
    return name
  }

  function render(district, box) {
    const ticket = ++rendered
    const regionSeed = seed()
    last = { district, box }
    box.innerHTML = `<div class="game-link">
      <h3>ゲームで使う</h3>
      <div class="game-town" hidden></div>
      <p class="note">この丁目の駅前から、地域のデータそのままの3Dの街をつくります。地形・道路・川はこの地図のとおりで、モノレールは路線図のとおりに走ります。</p>
      <label class="field">表示名<input name="game-name" maxlength="24" autocomplete="nickname" placeholder="ゲームで表示される名前"></label>
      <fieldset class="choice">
        <legend>建物</legend>
        <label><input type="radio" name="game-buildings" value="1" checked><span>建物あり<small>地域の建物をそのまま</small></span></label>
        <label><input type="radio" name="game-buildings" value="0"><span>建物なし<small>地形と道路だけ</small></span></label>
      </fieldset>
      <div class="buttons"><button type="button" class="primary" data-make>この丁目から3Dの街をつくる</button></div>
      <p class="game-status" role="status" hidden></p>
    </div>`
    const nameField = box.querySelector('input[name="game-name"]')
    const make = box.querySelector('[data-make]')
    const status = box.querySelector('.game-status')
    // The status line; `tone` 'failed' or 'warning' colours it.
    const show = (text, tone = '') => {
      status.hidden = !text
      status.textContent = text
      status.classList.toggle('failed', tone === 'failed')
      status.classList.toggle('warning', tone === 'warning')
    }
    // The buttons that leave for the game: while one is on its way, all of them wait.
    const goers = []
    let leaving = false

    // Into the game at a walkable spot of this district; with `claim` ({ district, mode }) the
    // game then offers to make the district the player's own.
    async function go(town, claim = null) {
      leaving = true
      for (const button of goers) button.disabled = true
      try {
        show('この丁目の歩ける場所を探しています…')
        const reply = await ask(worker(), { type: 'site', seed: regionSeed, x: district.x, z: district.z })
        stored.set(SESSION, town.token)
        location.href = gameUrl(town.code, reply.at, claim)
      } catch (error) {
        show(error.message, 'failed')
        leaving = false
        for (const button of goers) button.disabled = false
      }
    }

    // Who manages this district in the town, or the offer to make it one's own.
    function showStanding(town, area) {
      stateOf(town).then((current) => {
        if (ticket !== rendered) return
        const { html, offer } = standing(current, district.id, fingerprint()?.division ?? null)
        area.innerHTML = offer ? html + CLAIM_BUTTONS : html
        for (const button of area.querySelectorAll('[data-claim]')) {
          goers.push(button)
          button.disabled = leaving
          button.addEventListener('click', () => go(town, { district: district.id, mode: button.dataset.claim }))
        }
      }, (error) => {
        if (ticket !== rendered) return
        area.innerHTML = `<p class="note">この丁目を管理している人を確かめられませんでした。${escape(error.message)}</p>`
      })
    }

    nameOf().then((known) => {
      if (ticket === rendered && known && !nameField.value) nameField.value = known
    })
    townOf(regionSeed).then((town) => {
      if (ticket !== rendered || !town) return
      const panel = box.querySelector('.game-town')
      panel.hidden = false
      panel.innerHTML = `<p>この地域からつくった街があります（${town.buildings ? '建物あり' : '建物なし'}・招待コード <b>${escape(town.code)}</b>）。招待コードを友達に伝えると、同じ街を一緒につくれます。</p>
        <div class="buttons"><button type="button" class="primary" data-open>ゲームでこの丁目へ</button></div>
        <div class="game-claim" aria-live="polite"><p class="note">この丁目を管理している人を確かめています…</p></div>`
      make.classList.remove('primary')
      make.textContent = '別の街を新しくつくる'
      const open = panel.querySelector('[data-open]')
      goers.push(open)
      open.addEventListener('click', () => go(town))
      showStanding(town, panel.querySelector('.game-claim'))
    })

    make.addEventListener('click', async () => {
      const player = nameField.value.trim()
      if (!player) {
        show('表示名を入れてください。', 'failed')
        nameField.focus()
        return
      }
      const buildings = box.querySelector('input[name="game-buildings"]:checked')?.value !== '0'
      make.disabled = true
      try {
        show('地区のデータを作っています…')
        const pack = await ask(worker(), { type: 'townPack', seed: regionSeed, district: district.id, buildings })
        show('街をつくっています…')
        const joined = await call('./api/join', { body: { name: player, region: pack.plan } })
        const { token } = joined
        const code = joined.state.code
        // Kept at once, so that a failure below still leaves the way back into the town.
        stored.set(SESSION, token)
        stored.set(`${SESSION}:${code}`, token)
        stored.set(regionKey(regionSeed), code)
        towns.delete(regionSeed)
        name = player
        for (const [index, line] of pack.packs.entries()) {
          show(`モノレールの路線を登録しています…（${index + 1}／${pack.packs.length}）`)
          await retry(() => call('./api/action', { token, body: { type: 'railway', line } }))
        }
        show('地区わけを登録しています…')
        const missed = await sendDivision(worker(), regionSeed, token)
        if (missed) {
          // Shown for a moment before the game opens, so the player knows why the districts wait.
          show(`${pack.station}駅の前に街ができました。\n地区わけは登録できませんでした（${missed}）。ゲームで街を開いたときに、もう一度登録します。\nゲームを開きます…`, 'warning')
          await new Promise((resolve) => setTimeout(resolve, 4000))
        } else {
          show(`${pack.station}駅の前に街ができました。ゲームを開きます…`)
        }
        location.href = gameUrl(code, pack.at)
      } catch (error) {
        show(error.message, 'failed')
        make.disabled = false
      }
    })
  }

  // Coming back from the game with the browser's back button can bring this page back as it was
  // left, buttons pressed and districts as they were then: the panel is drawn again from fresh data.
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return
    towns.clear()
    fetched.clear()
    if (last?.box.isConnected && !last.box.closest('[hidden]')) render(last.district, last.box)
  })

  return { render }
}
