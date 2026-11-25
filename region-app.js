// What the page does for a region town (a town made from the region map, see region.html): it
// has the region generated on this screen from the town's seed (world/region-client.js) and says
// how far that has come; it hands the town to the 3D view only once the region is there, with
// the monorail lines the server stored (kept here between replies that leave them out); it takes
// the player to the spot the address asks for (?at=X,Z in region metres, from the region map);
// and it names the district (丁目) underfoot.
//
// It also runs the districts (地区) of a region town: the 地区 tab (the 丁目 underfoot or clicked;
// making one your own, 建物あり or 建物なし, once the worker has surveyed it; for your own, the
// mode, the people who build with you and letting it go; the host may end anyone's), the checks
// and the ground height a house is built with, the minimap of the land round the player, the claim
// a link from the region map asks for on arrival (?district=ID&claim=built|bare), and, for a town
// made before districts existed, sending the division map the server checks claims against.
import { regionClient } from './world/region-client.js'
import { STEP, decodeLine } from './region/game-pack.js'
import { CELL, base64Of, bytesOf, claimIndex, lotRights } from './region/district-lookup.js'
import {
  MAX_CLAIMS, MAX_EDITORS, TILE, arrivalOf, blockedTile, districtFacts, lotGround, lotPoints, mapAddress, minimapLayers,
  minimapView, routeOnMap, withoutArrival,
} from './region/district-panel.js'

// The ground the minimap shows across its width in a region town, in metres.
const MAP_METRES = 1000
// How long the worker may take over a request before the page stops waiting for it (ms).
const WAIT = { survey: 60_000, site: 30_000, heights: 30_000, map: 120_000 }
const MODES = { built: '建物あり', bare: '建物なし' }
const MODE_NOTES = { built: '地域の建物をそのまま', bare: '地形と道路だけ' }
// What a house is refused with before it is sent (the server would say the same).
const NOT_YOURS = 'この土地は自分の地区ではありません。地区を管理するか、管理している人に「一緒に作る人」にしてもらうと建てられます。'
const BLOCKED = 'ここには建てられません（道路・川・線路などがあります）。'
const NO_GROUND = '土地の高さを確認できませんでした。'
const NOT_READY = '地区わけの準備ができていません。'
const UNMAPPED = 'この街には、まだ地区わけが登録されていません。街の管理者が地域の街をひらくと登録され、丁目を自分の地区にできるようになります。'

const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[ch])
const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`
const narrow = () => typeof matchMedia === 'function' && matchMedia('(max-width: 760px)').matches
const idOf = (text) => (/^\d{1,5}$/.test(text ?? '') ? Number(text) : null)
const modeName = (mode) => MODES[mode] ?? ''
// Whether the drawer shows the 地区 tab (the dock marks the tab of the open drawer).
const tabShown = () => typeof document !== 'undefined'
  && document.querySelector('#dock [data-tab="district"]')?.getAttribute('aria-pressed') === 'true'

// Where the address asks the player to arrive (?at=X,Z in region metres) and in which town
// (?join=CODE), or null.
function wantedSpot() {
  const url = new URL(location.href)
  const match = url.searchParams.get('at')?.match(/^(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)$/)
  if (!match) return null
  return { x: Number(match[1]), z: Number(match[2]), code: url.searchParams.get('join')?.trim().toUpperCase() || null }
}

// The promise, or a failure with `text` once `ms` have passed without an answer.
function within(promise, ms, text) {
  let timer = 0
  const late = new Promise((resolve, reject) => {
    timer = setTimeout(() => reject(new Error(text)), ms)
  })
  return Promise.race([promise, late]).finally(() => clearTimeout(timer))
}

// A survey of a 丁目 as the worker sent it, checked: { box, mask (base64), bytes }.
function readSurvey(reply, id) {
  const box = reply?.box && typeof reply.box.length === 'number' ? Array.from(reply.box) : null
  const fine = box?.length === 4 && box.every(Number.isInteger) && box[2] > 0 && box[3] > 0
  if (!fine || (reply.district !== undefined && reply.district !== id)) throw new Error('the survey does not fit the district')
  const bytes = typeof reply.mask === 'string' ? bytesOf(reply.mask) : reply.mask instanceof Uint8Array ? reply.mask : null
  if (!bytes || bytes.length !== Math.ceil(box[2] * box[3] / 4)) throw new Error('the survey mask has the wrong length')
  return { box, mask: typeof reply.mask === 'string' ? reply.mask : base64Of(bytes), bytes }
}

// A town whose lines have not come yet has none (one list, so that what is made from it is kept).
const NO_LINES = []

function fillRects(ctx, rects, color) {
  if (!rects.length) return
  ctx.fillStyle = color
  ctx.beginPath()
  for (const [x, y, w, h] of rects) ctx.rect(x, y, w, h)
  ctx.fill()
}

function strokeSegments(ctx, segments, color, width) {
  if (!segments.length) return
  ctx.strokeStyle = color
  ctx.lineWidth = width
  ctx.beginPath()
  for (let k = 0; k + 3 < segments.length; k += 4) {
    ctx.moveTo(segments[k], segments[k + 1])
    ctx.lineTo(segments[k + 2], segments[k + 3])
  }
  ctx.stroke()
}

// `state` gives the app's state, `position` where the player stands (town tiles), `current` the
// resident; `action(type, args)` sends a command, `confirmDialog({ title, text, actions })` asks a
// question, `openPanel(tab, open)` opens a tab of the drawer; all are the app's own.
export function createRegionApp({
  state, notify, update, teleport,
  action = () => Promise.reject(new Error('街に接続してから操作してください。')),
  confirmDialog = async () => null,
  openPanel = () => {},
  isHost = () => false,
  current = () => state()?.me ?? null,
  position = () => null,
}) {
  // The stored lines of the town, kept while replies leave them out: { code, lines }.
  let kept = null
  let memo = { town: null, lines: null, result: null }
  let wanted = wantedSpot()
  let warned = false
  let district = null
  let box = null
  // The 地区 tab: the town its choices belong to; the 丁目 picked by clicking the ground (null:
  // the one underfoot); the mode chosen for the next claim (null: the town's own default); what
  // is under way ('claim:ID', 'mode:ID', 'editor:ID:PLAYER', 'release:ID', 'go:ID'); and a count
  // that repaints the tab after a change the server may have refused.
  let room = null
  let picked = null
  let claimMode = null
  const busy = new Set()
  let revision = 0
  // The worker's surveys of 丁目: `${seed}:${id}` → { rev, promise }.
  const surveys = new Map()
  // The division map sent for a town made before districts: `${code}:${seed}` → 'sending',
  // 'done' or 'failed'. Sent once per page.
  const uploads = new Map()
  // The claim the address asks for on arrival from the region map, until it has been asked.
  let arrival = arrivalOf(location.href)
  let arriving = false
  // The town's claims by cell, made again when the claims change.
  let claimsIndex = { claims: null, index: new Map() }
  // Each stored line as decoded for the minimap (null for one that cannot be read), and what the
  // minimap last worked out, kept while the player stays within the same metre.
  const decoded = new WeakMap()
  let mapMemo = { key: '' }

  const townNow = () => state()?.town ?? null
  // Whether the region of a region town is here to answer.
  function ready(town = townNow()) {
    const status = regionClient.status
    return Boolean(town?.region) && status.seed === town.region.seed && status.phase === 'ready' && Boolean(status.overlay?.districts)
  }
  const divisions = () => regionClient.status.overlay?.districts ?? null
  const recordOf = (id) => (Number.isInteger(id) && id >= 0 ? divisions()?.list?.[id] ?? null : null)
  const claimsOf = (town) => (Array.isArray(town?.districts) ? town.districts : [])
  const claimOf = (town, id) => claimsOf(town).find((claim) => claim.id === id) ?? null
  function indexOf(town) {
    const claims = claimsOf(town)
    if (claimsIndex.claims !== claims) claimsIndex = { claims, index: claimIndex(claims) }
    return claimsIndex.index
  }
  const linesOf = (town) => (Array.isArray(town?.lines) ? town.lines : kept && kept.code === state()?.code ? kept.lines : NO_LINES)
  function routeOf(pack) {
    if (!pack || typeof pack !== 'object') return null
    if (!decoded.has(pack)) {
      let line = null
      try {
        line = decodeLine(pack)
      } catch (error) {
        console.warn('region line:', error)
      }
      decoded.set(pack, line)
    }
    return decoded.get(pack)
  }
  const me = () => current()?.id ?? null
  const playerName = (id) => state()?.players?.find((player) => player.id === id)?.name ?? '住人'
  const whose = (id) => (id === me() ? 'あなた' : `${playerName(id)}さん`)
  const nameOf = (id, claim) => claim?.name ?? recordOf(id)?.name ?? `地区${id}`
  const defaultMode = (town) => (town?.region?.buildings === false ? 'bare' : 'built')
  const sameDivision = (town) => Boolean(town?.region) && regionClient.status.fingerprint?.division === town.region.fingerprint?.division
  const uploadKey = (snapshot) => `${snapshot?.code}:${snapshot?.town?.region?.seed}`

  // The 丁目 at a spot in town tiles, or null.
  function districtAtTile(spot) {
    if (!Number.isFinite(spot?.x) || !Number.isFinite(spot?.z)) return null
    return regionClient.districtAt((spot.x + 0.5) * TILE, (spot.z + 0.5) * TILE)
  }
  const underfoot = () => districtAtTile(position() ?? current())

  function repaint() {
    revision++
    update()
  }

  // Does `task`, telling the player what went wrong (in the server's own words where it has them).
  async function run(task) {
    try {
      return await task()
    } catch (error) {
      console.error(error)
      notify(error?.message === 'Failed to fetch' ? '街との通信が切れました。もう一度お試しください。' : error?.message || '操作できませんでした。')
      return undefined
    }
  }

  // Does `task` as `key`, one at a time, with the tab showing it under way.
  async function doing(key, task) {
    if (busy.has(key)) return undefined
    busy.add(key)
    update()
    try {
      return await task()
    } finally {
      busy.delete(key)
      repaint()
    }
  }

  // A notice at the top of the screen while the region is being made.
  function showProgress() {
    const status = regionClient.status
    const town = state()?.town
    const loading = Boolean(town?.region) && status.seed === town.region.seed && (status.phase !== 'ready' || !status.shown)
    if (!loading) {
      box?.remove()
      box = null
      return
    }
    if (!box) {
      box = document.createElement('div')
      box.setAttribute('role', 'status')
      box.style.cssText = [
        'position:fixed', 'left:50%', 'top:max(14px, env(safe-area-inset-top))', 'transform:translateX(-50%)', 'z-index:60',
        'max-width:calc(100vw - 32px)', 'padding:10px 16px', 'border-radius:14px', 'font:600 14px/1.5 var(--font, system-ui, sans-serif)',
        'background:var(--surface, rgba(252,253,250,0.94))', 'color:var(--ink, #1d2a33)',
        'box-shadow:var(--shadow, 0 8px 24px rgba(0,0,0,0.18))', 'pointer-events:none', 'white-space:pre-line', 'text-align:center',
      ].join(';')
      document.body.append(box)
    }
    box.textContent = status.phase === 'failed' ? `地域を用意できませんでした。\n${status.error}`
      : status.phase === 'ready' ? '3Dの形を作っています…'
        : `地域を計算しています… ${status.label} ${Math.round(status.fraction * 100)}%（${(status.elapsed / 1000).toFixed(1)}秒）\n初めての地域は1分ほどかかります。`
  }

  regionClient.on((kind) => {
    showProgress()
    if (kind === 'close') surveys.clear()
    // The town can be shown once the region is there, and the player taken where they wanted.
    if (kind === 'ready' || kind === 'shown' || kind === 'failed') {
      check()
      update()
    }
  })

  // Once: whether this screen made the same region as the screen that made the town.
  function check() {
    const status = regionClient.status
    const region = state()?.town?.region
    if (warned || !region || status.phase !== 'ready' || status.seed !== region.seed) return
    warned = true
    const same = status.version === region.version && status.fingerprint?.division === region.fingerprint?.division
      && status.fingerprint?.lines === region.fingerprint?.lines
    if (!same) notify('この端末で計算した地域が、街を作ったときと少し違います。路線は保存された形を使います。')
  }

  function goWanted() {
    if (!wanted || !regionClient.status.shown) return
    // (An address meant for another town waits until that town is the one shown.)
    if (wanted.code && state()?.code !== wanted.code) return
    const { x, z } = wanted
    wanted = null
    teleport(x / TILE - 0.5, z / TILE - 0.5)
    const url = new URL(location.href)
    url.searchParams.delete('at')
    history.replaceState(null, '', url)
  }

  // The town as the 3D view gets it: nothing before a town is joined or while the region is being
  // made, then the town with its stored lines.
  function sceneTown(town) {
    if (!town) return null
    if (!town.region) return town
    const status = regionClient.status
    if (status.seed !== town.region.seed || status.phase !== 'ready') return null
    const lines = linesOf(town)
    if (memo.town !== town || memo.lines !== lines) memo = { town, lines, result: { ...town, lines } }
    return memo.result
  }

  // The district (丁目) at a position in town tiles, in a region town.
  function placeName(spot) {
    if (!state()?.town?.region || !spot) return null
    return districtAtTile(spot)?.name ?? null
  }

  // ---- Districts: surveys, claims and their settings ----

  // The worker's survey of 丁目 `id`, asked again only when its claim's rev changes (0 before it
  // is claimed).
  function surveyOf(id, rev = 0) {
    const key = `${regionClient.status.seed}:${id}`
    const known = surveys.get(key)
    if (known && known.rev === rev) return known.promise
    const promise = within(regionClient.call('survey', { district: id }), WAIT.survey, 'no survey in time')
      .then((reply) => readSurvey(reply, id))
      .catch((error) => {
        console.warn('region survey:', error)
        throw new Error('この丁目を調べられませんでした。もう一度お試しください。')
      })
    surveys.delete(key)
    while (surveys.size >= 32) surveys.delete(surveys.keys().next().value)
    surveys.set(key, { rev, promise })
    // A survey that failed is asked for again next time.
    promise.catch(() => {
      if (surveys.get(key)?.promise === promise) surveys.delete(key)
    })
    return promise
  }

  // Makes 丁目 `id` the player's own, 建物あり or 建物なし: the worker surveys it, then the server
  // takes the claim with the survey. Resolves true once it is theirs.
  function claimDistrict(id, mode) {
    if (!recordOf(id) || !MODES[mode]) return Promise.resolve(false)
    return doing(`claim:${id}`, async () => {
      const code = state()?.code
      const record = recordOf(id)
      if (!ready() || !record) return false
      let survey
      try {
        survey = await surveyOf(id, 0)
      } catch (error) {
        if (state()?.code !== code) return false
        throw error
      }
      if (state()?.code !== code || !ready()) return false
      await action('district', { op: 'claim', id, mode, mask: survey.mask })
      notify(`${record.name}を自分の地区にしました（${MODES[mode]}）。この丁目に家を建てられます。`)
      return true
    })
  }

  function setMode(id, mode) {
    const claim = claimOf(townNow(), id)
    if (!claim || !MODES[mode] || claim.mode === mode) return undefined
    return doing(`mode:${id}`, async () => {
      await action('district', { op: 'mode', id, mode })
      notify(`${nameOf(id, claim)}を${MODES[mode]}にしました。`)
    })
  }

  function setEditor(id, playerId, allowed) {
    const claim = claimOf(townNow(), id)
    if (!claim || !playerId) return undefined
    return doing(`editor:${id}:${playerId}`, async () => {
      await action('district', { op: 'editor', id, playerId, allowed })
      const name = nameOf(id, claim)
      notify(allowed ? `${playerName(playerId)}さんが${name}を一緒に作れるようになりました。`
        : `${playerName(playerId)}さんを${name}の一緒に作る人から外しました。`)
    })
  }

  // Lets a 丁目 go (its manager), or ends someone's management of it (the host). Houses stay.
  async function release(id) {
    const claim = claimOf(townNow(), id)
    if (!claim) return
    const code = state()?.code
    const name = nameOf(id, claim)
    const own = Boolean(claim.mine)
    const answer = await confirmDialog(own ? {
      title: '地区を手放す',
      text: `${name}の管理をやめます。建てた家はそのまま残りますが、この丁目には新しく家を建てられなくなります。`,
      actions: [['release', '手放す', 'danger'], ['cancel', 'やめる', 'ghost']],
    } : {
      title: '管理をやめてもらう',
      text: `${whose(claim.ownerId)}が管理している${name}の管理を外します。建てた家はそのまま残ります。`,
      actions: [['release', '管理をやめてもらう', 'danger'], ['cancel', 'やめる', 'ghost']],
    })
    if (answer !== 'release' || state()?.code !== code) return
    await doing(`release:${id}`, async () => {
      await action('district', { op: 'release', id })
      notify(own ? `${name}を手放しました。` : `${name}の管理をやめてもらいました。`)
    })
  }

  // Takes the player to a walkable spot near the middle of 丁目 `id`.
  function go(id) {
    const record = recordOf(id)
    if (!record) return undefined
    return doing(`go:${id}`, async () => {
      const code = state()?.code
      const seed = regionClient.status.seed
      const reply = await within(regionClient.call('site', { x: record.x, z: record.z }), WAIT.site, 'no site in time').catch((error) => {
        console.warn('region site:', error)
        throw new Error('この丁目の歩ける場所を見つけられませんでした。もう一度お試しください。')
      })
      if (state()?.code !== code || regionClient.status.seed !== seed) return
      const [x, z] = Array.isArray(reply?.at) && reply.at.length === 2 && reply.at.every(Number.isFinite) ? reply.at : [record.x, record.z]
      teleport(x / TILE - 0.5, z / TILE - 0.5)
      if (picked === id) picked = null
    })
  }

  // A town made before districts existed has no division map on the server: a screen that may
  // edit the town and made the same division sends it (once per page, or again when asked).
  function uploadMap(snapshot, again = false) {
    const town = snapshot?.town
    if (!town?.region || town.mapped || !town.canEdit || !ready(town) || !sameDivision(town)) return
    const key = uploadKey(snapshot)
    const known = uploads.get(key)
    if (known === 'sending' || (known && !again)) return
    uploads.set(key, 'sending')
    const code = snapshot.code
    within(regionClient.call('divisionMap', {}), WAIT.map, 'no division map in time')
      .catch((error) => {
        console.warn('region division map:', error)
        throw new Error('地区わけを用意できませんでした。')
      })
      .then(async (reply) => {
        const now = state()
        if (now?.code !== code || now.town?.mapped) return false
        const map = reply?.map
        if (!map || typeof map.runs !== 'string' || typeof map.names !== 'string') throw new Error('地区わけを用意できませんでした。')
        await action('district', { op: 'map', columns: map.columns, runs: map.runs, names: map.names, fingerprint: map.fingerprint })
        return true
      })
      .then((sent) => {
        uploads.set(key, 'done')
        if (sent) notify('地区わけを街に登録しました。「地区」タブで、丁目を自分の地区にできます。')
      }, (error) => {
        uploads.set(key, 'failed')
        if (state()?.code === code) {
          notify(`地区わけを街に登録できませんでした。${error?.message === 'Failed to fetch' ? '街との通信が切れました。' : error?.message ?? ''}`)
        }
      })
      .finally(repaint)
  }

  function dropArrival() {
    arrival = null
    try {
      history.replaceState(null, '', withoutArrival(location.href))
    } catch {
      // An address that cannot be rewritten keeps its parameters; they are not asked about again.
    }
  }

  // Once the town is shown, asks whether to make the 丁目 that the address names the player's own.
  function arrive(snapshot) {
    if (!arrival || arriving || !snapshot?.town) return
    // (An address meant for another town waits until that town is the one shown.)
    if (arrival.code && snapshot.code !== arrival.code) return
    const town = snapshot.town
    if (!arrival.valid || !town.region) {
      dropArrival()
      return
    }
    if (!ready(town) || !regionClient.status.shown) return
    if (!town.mapped && uploads.get(uploadKey(snapshot)) === 'sending') return
    // Another question (joining the town, say) is answered first.
    if (typeof document !== 'undefined' && document.getElementById('dialog')?.open) return
    arriving = true
    const { id, mode } = arrival
    const code = snapshot.code
    run(async () => {
      try {
        const record = recordOf(id)
        if (!record) throw new Error('リンクの丁目が見つかりませんでした。')
        const claim = claimOf(town, id)
        if (claim?.mine) {
          notify(`${record.name}は、すでにあなたの地区です。`)
          return
        }
        if (claim) throw new Error(`${record.name}は、${whose(claim.ownerId)}が管理しています。`)
        if (!town.mapped) throw new Error(town.canEdit ? NOT_READY : UNMAPPED)
        picked = id
        const answer = await confirmDialog({
          title: '自分の地区にする',
          text: `${record.name}を自分の地区にしますか（${MODES[mode]}）`,
          actions: [['claim', '自分の地区にする', 'primary'], ['cancel', 'やめる', 'ghost']],
        })
        if (answer !== 'claim' || state()?.code !== code) return
        if (await claimDistrict(id, mode)) openPanel('district', !narrow())
      } finally {
        arriving = false
        dropArrival()
      }
    })
  }

  // ---- The 地区 tab ----

  const goButton = (id) => `<button type="button" class="btn soft small" data-region-action="go" data-id="${id}"
    ${busy.has(`go:${id}`) ? 'disabled' : ''}>${icon('pin')}<span>行く</span></button>`

  const releaseButton = (claim, label) => `<button type="button" class="btn danger small" data-region-action="release"
    data-id="${claim.id}" ${busy.has(`release:${claim.id}`) ? 'disabled' : ''}>${label}</button>`

  // The 丁目 on the region map, in another tab, so that the town stays open here.
  function mapLink(id, claim) {
    const record = recordOf(id)
    const spot = record ? { id, x: record.x, z: record.z }
      : claim ? { id, x: (claim.box[0] + claim.box[2] / 2) * CELL, z: (claim.box[1] + claim.box[3] / 2) * CELL } : { id }
    return `<a class="btn ghost small" href="${escape(mapAddress(townNow()?.region?.seed, spot))}" target="_blank" rel="noopener">${icon('district')}<span>地図で見る</span></a>`
  }

  // What the tab says while the town has no division map yet.
  function mapNote(snapshot) {
    const town = snapshot.town
    if (!town.canEdit) return `<p class="note">${UNMAPPED}</p>`
    if (!sameDivision(town)) return '<p class="note">この端末で計算した地域が、街を作ったときと違うため、地区わけを登録できません。</p>'
    if (uploads.get(uploadKey(snapshot)) === 'failed') {
      return `<p class="note">地区わけを街に登録できませんでした。</p>
        <button type="button" class="btn soft block" data-region-action="upload-map">地区わけをもう一度登録する</button>`
    }
    return '<p class="note">地区わけを街に登録しています…</p>'
  }

  // Making an unmanaged 丁目 your own.
  function claimForm(snapshot, record, owned) {
    const town = snapshot.town
    if (!town.mapped) return mapNote(snapshot)
    if (owned >= MAX_CLAIMS) return `<p class="note">地区は1人${MAX_CLAIMS}つまで管理できます。ほかの地区を手放すと、この丁目を管理できます。</p>`
    const mode = claimMode ?? defaultMode(town)
    const working = busy.has(`claim:${record.id}`)
    return `<div class="stack" role="radiogroup" aria-label="建物">
        ${Object.entries(MODES).map(([value, label]) => `<label class="check"><input type="radio" name="region-claim-mode" value="${value}"
          data-region-setting="claim-mode" style="accent-color:var(--accent)" ${mode === value ? 'checked' : ''} ${working ? 'disabled' : ''}>
          ${label}（${MODE_NOTES[value]}）</label>`).join('')}
      </div>
      <button type="button" class="btn primary block" data-region-action="claim" data-id="${record.id}" ${working ? 'disabled' : ''}>${
        working ? 'この丁目を調べています…' : 'この丁目を自分の地区にする'}</button>`
  }

  // The 丁目 picked, or the one underfoot: what it is, who manages it, and what can be done.
  function focusSection(snapshot, here) {
    const town = snapshot.town
    const record = recordOf(picked ?? here?.id ?? null)
    if (!record) {
      return `<section class="section"><div class="section-title"><span>いまいる丁目</span></div>
        <p class="note">ここは地区わけの外です。地面をクリックすると、その丁目を選べます。</p></section>`
    }
    const claim = claimOf(town, record.id)
    const facts = districtFacts(record, divisions()?.towns)
    const about = [facts.town, facts.area, `人口 ${facts.residents}`, facts.stations.length ? `${facts.stations.join('・')}駅` : ''].filter(Boolean)
    const away = record.id !== here?.id
    const owned = claimsOf(town).filter((entry) => entry.mine).length
    let body
    if (!claim) body = claimForm(snapshot, record, owned)
    else if (claim.mine) body = '<p class="note">あなたの地区です。下の「あなたの地区」で、建物のあり・なしや一緒に作る人を変えられます。</p>'
    else if (claim.canEdit) body = `<p class="note">${escape(whose(claim.ownerId))}の地区を一緒に作っています。この丁目に家を建てられます。</p>`
    else body = `<p class="note">${escape(whose(claim.ownerId))}が管理しています。管理している人に「一緒に作る人」にしてもらうと、この丁目に家を建てられます。</p>`
    return `<section class="section">
      <div class="section-title"><span>${away ? '選んだ丁目' : 'いまいる丁目'}</span><span>${
        claim ? `管理: ${escape(whose(claim.ownerId))}（${modeName(claim.mode)}）` : '未管理'}</span></div>
      <div class="card">
        <div><strong>${escape(record.name)}</strong><p class="note">${escape(about.join('・'))}</p></div>
        ${body}
        <div class="row wrap">${away ? goButton(record.id) : ''}${mapLink(record.id, claim)}
          ${claim && !claim.mine && isHost() ? releaseButton(claim, '管理をやめてもらう') : ''}
          ${away && picked !== null ? '<button type="button" class="btn ghost small" data-region-action="unpick">いまいる丁目にもどす</button>' : ''}</div>
      </div>
    </section>`
  }

  // One of your own 丁目, with everything its manager may change.
  function ownCard(claim) {
    const name = escape(nameOf(claim.id, claim))
    const editors = Array.isArray(claim.editorIds) ? claim.editorIds : []
    const currentId = me()
    const residents = (state()?.players ?? []).filter((player) => player.id !== claim.ownerId && player.id !== currentId)
    const switching = busy.has(`mode:${claim.id}`)
    const rows = residents.map((player) => {
      const allowed = editors.includes(player.id)
      return `<label class="list-row"><span>${escape(player.name)}</span>
        <select data-region-setting="editor" data-id="${claim.id}" data-player="${escape(player.id)}" aria-label="${escape(player.name)}と${name}を一緒に作るか"
          ${busy.has(`editor:${claim.id}:${player.id}`) ? 'disabled' : ''}>
          <option value="" ${allowed ? '' : 'selected'}>なし</option><option value="1" ${allowed ? 'selected' : ''}>一緒に作る</option>
        </select></label>`
    }).join('')
    return `<div class="card">
      <div class="row between"><strong>${name}</strong><span class="note">${modeName(claim.mode)}</span></div>
      <div class="row wrap">${goButton(claim.id)}${mapLink(claim.id, claim)}</div>
      <div class="chip-grid" role="group" aria-label="${name}の建物">${Object.entries(MODES).map(([mode, label]) =>
        `<button type="button" class="chip" data-region-action="mode" data-id="${claim.id}" data-mode="${mode}" aria-pressed="${claim.mode === mode}"
          ${switching ? 'disabled' : ''}>${label}</button>`).join('')}</div>
      <div class="section-title"><span>一緒に作る人</span><span>${editors.length}／${MAX_EDITORS}人</span></div>
      ${rows ? `<div class="list">${rows}</div>` : '<p class="note">街の招待リンクを送ると、一緒に作る人を選べます。</p>'}
      <div class="row wrap">${releaseButton(claim, '地区を手放す')}</div>
    </div>`
  }

  // A 丁目 someone else manages (one you help build, or not).
  const otherRow = (claim) => `<div class="list-row"><span>${escape(nameOf(claim.id, claim))}<br><small class="note">${
    escape(whose(claim.ownerId))}・${modeName(claim.mode)}</small></span>
    <span class="row">${goButton(claim.id)}${isHost() ? releaseButton(claim, '管理をやめてもらう') : ''}</span></div>`

  // ---- The page's own controls in the tab (app.js's handlers stay as they are) ----

  const controls = {
    claim: ({ id }) => claimDistrict(idOf(id), claimMode ?? defaultMode(townNow())),
    mode: ({ id, mode }) => setMode(idOf(id), mode),
    release: ({ id }) => release(idOf(id)),
    go: ({ id }) => go(idOf(id)),
    unpick: () => {
      picked = null
      update()
    },
    'open-tab': () => openPanel('district'),
    'upload-map': () => uploadMap(state(), true),
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('click', (event) => {
      const control = event.target.closest?.('[data-region-action]')
      if (!control || control.disabled) return
      const handle = controls[control.dataset.regionAction]
      if (handle) run(() => handle(control.dataset))
    })
    document.addEventListener('change', (event) => {
      const control = event.target.closest?.('[data-region-setting]')
      if (!control) return
      const setting = control.dataset.regionSetting
      // (The radio already shows the choice: it is only kept for when the tab is drawn again.)
      if (setting === 'claim-mode' && MODES[control.value]) claimMode = control.value
      else if (setting === 'editor') run(() => setEditor(idOf(control.dataset.id), control.dataset.player, control.value === '1'))
    })
  }

  return {
    // Called with every new state of the town.
    sync(snapshot) {
      const town = snapshot?.town
      if ((snapshot?.code ?? null) !== room) {
        // Another town: the tab starts afresh.
        room = snapshot?.code ?? null
        picked = null
        claimMode = null
      }
      if (!town?.region) {
        if (regionClient.status.seed !== null) regionClient.close()
        kept = null
        surveys.clear()
        showProgress()
        arrive(snapshot)
        return
      }
      if (Number.isFinite(snapshot.serverTime)) regionClient.sample(snapshot.serverTime)
      if (Array.isArray(town.lines)) kept = { code: snapshot.code, lines: town.lines }
      regionClient.open(town.region.seed, town.region.fingerprint)
      showProgress()
      check()
      goWanted()
      uploadMap(snapshot)
      arrive(snapshot)
    },

    sceneTown,

    // What the 3D view takes as the session: a new one once the region town is shown, so that
    // the resident is put where the town keeps them, not where the placeholder town had them.
    session(generation) {
      const town = state()?.town
      return town?.region && sceneTown(town) ? `${generation}:region:${town.region.seed}` : generation
    },

    placeName,

    // The player has moved: the place shown changes when they cross into another district.
    moved(spot) {
      const name = placeName(spot)
      if (name === district) return
      district = name
      update()
    },

    // The 地区 tab.
    panel() {
      const snapshot = state()
      const town = snapshot?.town
      if (!town?.region) {
        return `<p class="lead">地区わけは地域の街で使えます。</p>
          <p class="note">地域の地図で丁目を選び、「この丁目から3Dの街をつくる」を押すと地域の街ができます。地域の街では、丁目を自分の地区にして家を建てたり、友達と一緒に作ったりできます。</p>
          <a class="btn soft block" href="./region.html">${icon('district')}<span>地域の地図をひらく</span></a>`
      }
      if (!ready(town)) {
        const status = regionClient.status
        return status.phase === 'failed' && status.seed === town.region.seed
          ? `<p class="lead">地域を用意できませんでした。</p><p class="note">${escape(status.error)}</p>`
          : '<p class="lead">地域を計算しています…</p><p class="note">地域ができると、丁目を選んで自分の地区にできます。</p>'
      }
      const here = underfoot()
      const claims = claimsOf(town)
      const mine = claims.filter((claim) => claim.mine)
      const helping = claims.filter((claim) => !claim.mine && claim.canEdit)
      const others = claims.filter((claim) => !claim.mine && !claim.canEdit)
      const peers = isHost() ? (snapshot.players ?? []).filter((p) => p.id !== me()) : []
      return `<p class="lead">丁目を自分の地区にすると、そこに家を建てられます。地面をクリックすると、その丁目を選べます。</p>
        ${focusSection(snapshot, here)}
        ${mine.length ? `<section class="section"><div class="section-title"><span>あなたの地区</span><span>${mine.length}／${MAX_CLAIMS}</span></div>
          ${mine.map(ownCard).join('')}</section>` : ''}
        ${helping.length ? `<section class="section"><div class="section-title"><span>一緒に作っている地区</span><span>${helping.length}</span></div>
          <div class="list">${helping.map(otherRow).join('')}</div></section>` : ''}
        ${others.length ? `<section class="section"><div class="section-title"><span>ほかの人の地区</span><span>${others.length}</span></div>
          <div class="list">${others.map(otherRow).join('')}</div></section>` : ''}
        ${peers.length ? `<section class="section"><div class="section-title"><span>街の共同編集者</span></div>
          <div class="list">${peers.map((p) => {
            const allowed = (snapshot.editorIds ?? []).includes(p.id)
            return `<div class="list-row"><span>${escape(p.name)}</span><button type="button" class="btn ghost small"
              data-action="editor-role" data-id="${escape(p.id)}" data-allowed="${!allowed}">${allowed ? '権限を外す' : '編集を許可'}</button></div>`
          }).join('')}</div></section>` : ''}
        <a class="btn soft block" href="./region.html#seed=${escape(town.region.seed)}" target="_blank" rel="noopener">${icon('district')}<span>地域の地図をひらく（シード ${escape(town.region.seed)}）</span></a>
        <p class="note">建物ありは地域の建物をそのまま残し、家を建てると下の建物と入れ替わります。建物なしは地形と道路と線路だけになります。地区は1人${MAX_CLAIMS}つまで、一緒に作る人は1つの地区に${MAX_EDITORS}人まで決められます。</p>`
    },

    // What the tab depends on beyond the app's own key (the town's layout, its residents).
    panelKey() {
      const snapshot = state()
      if (!snapshot?.town?.region) return null
      const status = regionClient.status
      return [status.seed, status.phase, picked, ready(snapshot.town) ? underfoot()?.id ?? null : null, [...busy].join(' '), revision,
        uploads.get(uploadKey(snapshot)) ?? '', snapshot.hostId ?? null, sameDivision(snapshot.town)]
    },

    // A click on the ground while the tab is open picks the 丁目 there (true when it did).
    pick(spot) {
      if (!ready()) return false
      const record = districtAtTile(spot)
      if (!record) return false
      picked = record.id
      update()
      return true
    },

    // The tab of the town editor in a region town, for everyone but the host.
    editorNote() {
      return `<p class="lead">地域の街の道路と広さは地域の地図のとおりです。家は「地区」タブで自分の地区を持つと建てられます。</p>
        <button type="button" class="btn primary block" data-region-action="open-tab">${icon('district')}<span>「地区」タブをひらく</span></button>`
    },

    // What a house built at the lot (tile x, z; w × d tiles) is sent with: nothing in an ordinary
    // town; in a region town its ground height, once the lot is known to lie in 丁目 the player
    // may build in and off the land their surveys keep free (otherwise it throws why not).
    async buildExtras({ x, z, w, d }) {
      const town = townNow()
      if (!town?.region) return {}
      if (!ready(town)) throw new Error('地域の計算が終わってから、もう一度お試しください。')
      if (!town.mapped) throw new Error(NOT_READY)
      const code = state()?.code
      const lot = { x, z, w, d }
      const index = indexOf(town)
      const rights = lotRights(index, x, z, w, d)
      if (!rights.ok) throw new Error(NOT_YOURS)
      const found = await Promise.all(rights.claims.map((claim) => surveyOf(claim.id, claim.rev)))
      if (blockedTile(index, new Map(rights.claims.map((claim, k) => [claim.id, found[k]])), lot)) throw new Error(BLOCKED)
      const reply = await within(regionClient.call('heightsAt', { points: lotPoints(lot) }), WAIT.heights, 'no heights in time').catch((error) => {
        console.warn('region heights:', error)
        throw new Error(NO_GROUND)
      })
      const ground = lotGround(reply?.heights)
      if (ground === null) throw new Error(NO_GROUND)
      if (state()?.code !== code) throw new Error('街が変わりました。もう一度、建てる場所を選んでください。')
      return { ground }
    },

    // The minimap of a region town: about a kilometre of land round the player, its 丁目, the
    // claims in their colours, the monorail, the residents online and you. False in an ordinary
    // town or before the region is here (the app then draws its own map).
    drawMap(ctx, canvas, layout, player) {
      if (!layout?.region || !ctx || !canvas || !ready(layout)) return false
      if (!Number.isFinite(player?.x) || !Number.isFinite(player?.z)) return false
      const { width, height } = canvas
      const view = minimapView({ x: (player.x + 0.5) * TILE, z: (player.z + 0.5) * TILE, width, height, metres: MAP_METRES })
      const focus = (tabShown() ? picked : null) ?? regionClient.districtAt(view.x, view.z)?.id ?? -1
      const layers = minimapLayers(divisions(), indexOf(layout), view, focus)
      const at = (x, z) => [(x - view.left) * view.scale, (z - view.top) * view.scale]
      ctx.save()
      // Beyond the region, the region's land, and the cells that belong to no 丁目.
      ctx.fillStyle = '#a9bec6'
      ctx.fillRect(0, 0, width, height)
      if (layers.land) {
        ctx.fillStyle = '#c4dcae'
        ctx.fillRect(...layers.land)
      }
      fillRects(ctx, layers.empty, '#9fc0cc')
      // Managed 丁目, lightly.
      ctx.globalAlpha = 0.3
      for (const [color, rects] of layers.fills) fillRects(ctx, rects, color)
      ctx.globalAlpha = 1
      // The town's own lots: the plaza, the shop, the cafe and the houses.
      const lot = (spot, color, w = 1, d = 1, least = 2.5) => {
        if (!Number.isFinite(spot?.x) || !Number.isFinite(spot?.z)) return
        const [x, y] = at(spot.x * TILE, spot.z * TILE)
        ctx.fillStyle = color
        ctx.fillRect(x, y, Math.max(least, w * TILE * view.scale), Math.max(least, d * TILE * view.scale))
      }
      lot(layout.plaza, '#e9dfc8')
      lot(layout.shop, '#d58a74')
      lot(layout.cafe, '#cdb06b')
      for (const house of state()?.houses ?? []) lot(house, house.ownerId === me() ? '#1f7a6a' : '#5f8f97', house.w ?? 1, house.d ?? 1, 2)
      // Borders: of 丁目 within a 町, between 町, of the claims, and of the 丁目 in focus.
      strokeSegments(ctx, layers.blocks, 'rgba(29, 42, 51, 0.2)', 1)
      strokeSegments(ctx, layers.towns, 'rgba(29, 42, 51, 0.42)', 1.4)
      for (const [color, segments] of layers.outlines) strokeSegments(ctx, segments, color, 2)
      if (layers.focus.length) {
        ctx.setLineDash([3, 2])
        strokeSegments(ctx, layers.focus, 'rgba(29, 42, 51, 0.7)', 1.2)
        ctx.setLineDash([])
      }
      // The monorail as the town stored it, with its stations.
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'
      for (const pack of linesOf(layout)) {
        if (!pack || typeof pack !== 'object') continue
        if (!decoded.has(pack)) {
          let line = null
          try {
            line = decodeLine(pack)
          } catch (error) {
            console.warn('region line:', error)
          }
          decoded.set(pack, line)
        }
        const line = decoded.get(pack)
        if (!line) continue
        const { runs, stations } = routeOnMap(line, view, STEP)
        ctx.strokeStyle = line.color ?? '#5b6770'
        ctx.lineWidth = 2.4
        for (const run of runs) {
          ctx.beginPath()
          ctx.moveTo(run[0], run[1])
          for (let k = 2; k + 1 < run.length; k += 2) ctx.lineTo(run[k], run[k + 1])
          ctx.stroke()
        }
        ctx.fillStyle = '#fff'
        ctx.strokeStyle = '#1d2a33'
        ctx.lineWidth = 1
        for (const [x, y] of stations) {
          ctx.fillRect(x - 2.5, y - 2.5, 5, 5)
          ctx.strokeRect(x - 2.5, y - 2.5, 5, 5)
        }
      }
      // The other residents in the town, then you, in the middle.
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 1.5
      for (const other of state()?.players ?? []) {
        if (other.id === me() || !other.online || !Number.isFinite(other.x) || !Number.isFinite(other.z)) continue
        const [x, y] = at((other.x + 0.5) * TILE, (other.z + 0.5) * TILE)
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = '#e8862e'
        ctx.fill()
        ctx.stroke()
      }
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, 4.2, 0, Math.PI * 2)
      ctx.fillStyle = '#1d2a33'
      ctx.fill()
      ctx.stroke()
      ctx.restore()
      return true
    },
  }
}
