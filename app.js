import { initScene } from "./scene.js?v=online-1794980046418";
import { connectPresence } from "./presence.js?v=online-1794980046418";
import { createVoice } from "./voice.js?v=online-1794980046418";
import { createStudio } from "./studio.js?v=online-1794980046418";
import { FINISHES, ITEMS, ITEM_GROUPS, OPENINGS, ROOM_COLORS, ROOM_LABELS, STYLE_FLOORS, STYLE_LABELS, WALL_DECOR } from "./world/design.js?v=online-1794980046418";
import { TOOLS, WALL_KINDS } from "./world/editor.js?v=online-1794980046418";
import { createRegionApp } from "./region-app.js?v=online-1794980046418";

const $ = (id) => document.getElementById(id);
const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[ch]);
const kinds = { self: "自宅", shared: "共同住宅", villa: "別荘" };
const lotSizes = [[1, 1], [2, 1], [1, 2], [2, 2], [3, 1], [3, 2], [3, 3]];
const cameraNames = { follow: "三人称", first: "一人称", overview: "全体" };
const qualityNames = { low: "軽い", medium: "標準", high: "きれい" };
const colors = ["#dd886d", "#799da4", "#9783bc", "#b99361", "#6da98a"];
const plaza = { x: 8, z: 7 };
const roadCells = [];
for (let x = 2; x <= 15; x++) roadCells.push({ x, z: 7 });
for (let z = 4; z <= 12; z++) if (z !== 7) roadCells.push({ x: 8, z });
roadCells.push({ x: 12, z: 5 }, { x: 12, z: 6 });
const initialTown = {
  width: 18, height: 14, originX: 0, originZ: 0, plaza, roads: roadCells,
};
const initialMe = { id: "local", name: "あなた", ...plaza, y: 0, coins: 500, owned: [] };
const inviteFromUrl = new URL(location.href).searchParams.get("join") ?? "";
const sessionKey = "machi-no-tonari:session";
const qualityKey = "machi-no-tonari:quality";
const settingsKey = "machi-no-tonari:settings";
const narrow = () => matchMedia("(max-width: 760px)").matches;
let token = localStorage.getItem(sessionKey) ?? "";
let state = null;
let activeTab = "guide";
// Whether the drawer beside the dock is open. On a phone the town comes first.
let panelOpen = !narrow();
// The building this resident stands in, as the 3D view last reported it: { id, kind, level, levels }.
let place = null;
let preview = null;
let selection = null;
// While choosing where to build: { kind, style, w, d }.
let building = null;
let buildChoice = { kind: "self", style: "modern", size: "1x1" };
let selectedHouse = null;
let planFloor = 0;
let brush = "L";
let stroke = null;
let pendingTownEdit = null;
let toastTimeout = 0;
// Where this resident stands right now, as the 3D view last reported it.
let position = null;
let presence = null;
let motionFrame = null;
let stateRequest = null;
let refreshTimer;
let voiceTimer;
let sessionGeneration = 0;
let lastSignal = 0;
let joining = false;
// The view the resident chose; editing the town and trying on clothes borrow the camera for a while.
let viewMode = "follow";
let vrReady = false;
let renderKey = "";
let vrmUploading = false;
let avatarUpload = null;
const vrmPartSize = 32 * 1024 * 1024;
const avatarLoads = new Map();
const avatarLoadRows = new Map();
let avatarLoadTimer;
// What this browser keeps of the resident's own choices: sounds and spoken announcements.
const settings = { sound: true, voice: true };
try {
  Object.assign(settings, JSON.parse(localStorage.getItem(settingsKey) ?? "{}"));
} catch {
  // Settings that cannot be read are simply the usual ones.
}
// The trial run of the monorail: on this screen only, and never kept.
let transitPreview = false;
// The building being designed wall by wall, as the 3D view shows it: { houseId, design, stamp, level }.
let designDraft = null;
let draftTimer = 0;
let studio = null;

const current = () => state?.me ?? initialMe;
const town = () => state?.town ?? initialTown;
const catalog = () => state?.catalog ?? [];
const isHost = () => state?.hostId === current().id;
const canEdit = () => state?.town.canEdit ?? isHost();
// A town made from the region map: its region is generated on this screen (see region-app.js).
const regionApp = createRegionApp({
  state: () => state, notify: (text) => notify(text), update: () => update(), teleport: (x, z) => scene?.teleport(x, z),
  action: (type, args) => action(type, args), confirmDialog: (options) => confirmDialog(options), openPanel: (tab, open) => openPanel(tab, open),
  isHost: () => isHost(), current: () => current(), position: () => position,
});
const getHouse = (id) => state?.houses.find((home) => home.id === id);
const inShop = () => place?.kind === "shop";
const itemFor = (id) => catalog().find((item) => item.id === id);
const isAccessory = (item) => ["hat", "glasses", "accessory"].includes(item?.kind);
const compatible = (item) => !current().vrm || isAccessory(item);
const matches = (a, b) => a && b && a.x === b.x && a.z === b.z;
const formatter = new Intl.NumberFormat("ja");
const fmt = (value) => formatter.format(value);
const designing = () => Boolean(studio?.isOpen());
const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;

function setText(id, value) {
  const node = $(id);
  if (node) node.textContent = value;
}

function notify(message) {
  const toast = $("toast");
  if (!toast || !message) return;
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.hidden = true;
  }, 3800);
  // In a headset the page is out of sight: the same words are shown in the town itself.
  scene?.vr.notify?.(message);
}

function drawAvatarLoads() {
  avatarLoadTimer = null;
  const panel = $("avatar-loads");
  if (!panel) return;
  for (const [id, { row }] of avatarLoadRows) {
    if (avatarLoads.has(id)) continue;
    row.remove();
    avatarLoadRows.delete(id);
  }
  let received = 0;
  let total = 0;
  let indeterminate = false;
  for (const [id, load] of avatarLoads) {
    if (!avatarLoadRows.has(id)) {
      const row = document.createElement("div");
      const label = document.createElement("span");
      const progress = document.createElement("progress");
      row.append(label, progress);
      panel.append(row);
      avatarLoadRows.set(id, { row, label, progress });
    }
    const { label, progress } = avatarLoadRows.get(id);
    const hasTotal = Number.isFinite(load.total) && load.total > 0;
    const amount = hasTotal ? Math.min(load.received ?? 0, load.total) : 0;
    const caption = `${load.name} · ${load.message}`;
    label.textContent = hasTotal ? `${caption} ${Math.floor(amount / load.total * 100)}%` : caption;
    progress.setAttribute("aria-label", caption);
    if (hasTotal) {
      progress.max = load.total;
      progress.value = amount;
      received += amount;
      total += load.total;
    } else {
      progress.removeAttribute("value");
      indeterminate = true;
    }
  }
  panel.hidden = avatarLoads.size === 0;
  const ratio = !avatarLoads.size ? undefined : indeterminate ? null : received / total;
  scene?.setAvatarLoadProgress?.(ratio);
}

function setAvatarLoad(id, load) {
  if (load) avatarLoads.set(id, load);
  else avatarLoads.delete(id);
  if (!avatarLoadTimer) avatarLoadTimer = setTimeout(drawAvatarLoads, 100);
}

function reportAvatarLoad({ id, name, stage, received, total }) {
  const messages = { queued: "受信待ち", download: "受信中", prepare: "表示を準備中" };
  if (stage === "done") setAvatarLoad(id, null);
  else if (messages[stage]) setAvatarLoad(id, {
    name, message: messages[stage], ...(stage === "download" ? { received, total } : {}),
  });
}

function cancelAvatarUpload() {
  if (!avatarUpload) return;
  avatarUpload.abort();
  scene?.clearVRM();
  setAvatarLoad("upload", null);
}

const apiBase = new URL(document.querySelector('meta[name="machi-api-origin"]')?.content || './', location.href);
const realtimeBase = new URL(document.querySelector('meta[name="machi-realtime-origin"]')?.content || apiBase.href);
let stateBase = apiBase;

async function readStateResponse(url, options) {
  const alternate = stateBase === apiBase ? realtimeBase : apiBase;
  const target = (base) => {
    const next = new URL("./api/state", base);
    next.search = url.search;
    return next;
  };
  const timeout = AbortSignal.timeout(1800);
  const signal = options.signal && AbortSignal.any ? AbortSignal.any([options.signal, timeout]) : options.signal ?? timeout;
  try {
    const response = await fetch(target(stateBase), { ...options, signal });
    if (response.status < 500) return response;
    response.body?.cancel().catch(() => {});
  } catch (error) {
    if (options.signal?.aborted) throw error;
  }
  const response = await fetch(target(alternate), options);
  if (response.status < 500) stateBase = alternate;
  return response;
}

function responseError(status, data) {
  const message = status === 413 ? "サーバーが送信データを受け付けられませんでした。" : "街との通信に失敗しました。";
  return Object.assign(new Error(data?.error ?? message), data, { status });
}

async function request(path, { body, method, session = token, after, signal, base = apiBase } = {}) {
  const url = new URL(path, base);
  if (after !== undefined) {
    url.searchParams.set("after", after);
    // Tell the server which town layout is already here, so it only sends changes.
    if (state?.layout !== undefined && session === token) url.searchParams.set("layout", state.layout);
  }
  const headers = session ? { Authorization: `Bearer ${session}` } : {};
  let payload;
  if (body instanceof Blob) {
    headers["Content-Type"] = "model/gltf-binary";
    payload = body;
  } else if (body !== undefined) {
    headers["Content-Type"] = "application/json";
    payload = JSON.stringify(body);
  }
  const options = { method: method ?? (payload ? "POST" : "GET"), headers, body: payload, signal };
  const response = path === "./api/state" && base === apiBase && realtimeBase.href !== apiBase.href
    ? await readStateResponse(url, options)
    : await fetch(url, options);
  let data;
  try {
    data = await response.json();
  } catch (error) {
    if (response.ok) throw error;
    data = {};
  }
  if (!response.ok) throw responseError(response.status, data);
  return data;
}

const voice = createVoice({
  signal: (to, data) => action("signal", { to, data }),
  notify,
});

function withPresence(snapshot, frame) {
  const moves = new Map(frame.players.map((player) => [player.id, player]));
  const players = snapshot.players.map((player) => {
    const move = moves.get(player.id);
    return move && (player.warp ?? 0) === move.warp ? { ...player, ...move } : player;
  });
  return { ...snapshot, motion: frame.motion, players };
}

function acceptPresence(frame) {
  if (!state || !Array.isArray(frame?.players) || !Number.isSafeInteger(frame.motion)) return;
  if (frame.refresh && (frame.version === undefined || frame.version > state.version)) queueRefresh();
  if (motionFrame && motionFrame.epoch === frame.epoch && motionFrame.motion >= frame.motion) {
    return;
  }
  motionFrame = frame;
  if (state.layout !== frame.layout || state.epoch !== frame.epoch) {
    queueRefresh();
    return;
  }
  const active = new Set(state.players.filter((player) => player.online).map((player) => player.id));
  if (frame.players.some((player) => !active.has(player.id))) queueRefresh();
  if (frame.motion <= (state.motion ?? 0)) return;
  state = withPresence(state, frame);
  scene?.updatePresence?.(state.players.filter((player) => player.id !== current().id && player.online));
  if (!voiceTimer) voiceTimer = setTimeout(() => {
    voiceTimer = null;
    if (state) voice.sync({ ...current(), ...(position ?? {}) }, state.players);
  }, 150);
}

function queueRefresh() {
  if (refreshTimer || !token) return;
  refreshTimer = setTimeout(async () => {
    const generation = sessionGeneration;
    if (stateRequest?.generation === generation) await stateRequest.promise.catch(() => {});
    refreshTimer = null;
    if (generation !== sessionGeneration || !token) return;
    await refresh().catch((error) => sessionError(error, generation));
  }, 50);
}

function presenceRoute(base, session) {
  return {
    url: new URL("./api/presence", base),
    read: (after, signal) => request(after === undefined ? "./api/presence" : `./api/presence?after=${after}`, { session, signal, base }),
    write: (body, signal) => request("./api/presence", { body, session, signal, base }),
  };
}

function startPresence() {
  presence?.close();
  clearTimeout(voiceTimer);
  voiceTimer = null;
  motionFrame = null;
  const generation = sessionGeneration;
  const session = token;
  presence = connectPresence({
    ...presenceRoute(realtimeBase, session),
    fallback: realtimeBase.href === apiBase.href ? undefined : presenceRoute(apiBase, session),
    allowLegacy: !state?.epoch,
    token: session,
    legacyWrite: async (move, signal) => {
      const result = await request("./api/action", { body: { type: "move", ...move }, session, after: lastSignal, signal });
      accept(result.state, generation);
    },
    onFrame: (frame) => { if (generation === sessionGeneration) acceptPresence(frame); },
    onUnauthorized: () => { if (generation === sessionGeneration) queueRefresh(); },
  });
  if (position) reportMove(position);
}

function accept(snapshot, generation = sessionGeneration) {
  if (!snapshot || generation !== sessionGeneration) return;
  if (state && snapshot.version < state.version) return;
  // An unchanged town, its houses and the catalogue are left out of the reply: keep the copy here.
  if (!snapshot.town) {
    if (!state?.town) return;
    snapshot = { ...snapshot, town: state.town, houses: state.houses, catalog: state.catalog };
  } else if (state?.houses) {
    // A wall-by-wall design that has not changed is not sent again either.
    const before = new Map(state.houses.map((house) => [house.id, house]));
    snapshot = {
      ...snapshot,
      houses: snapshot.houses.map((house) => (house.kept ? { ...house, design: before.get(house.id)?.design } : house)),
    };
  }
  if (motionFrame && motionFrame.epoch === snapshot.epoch && motionFrame.layout === snapshot.layout
    && motionFrame.motion > (snapshot.motion ?? 0)) snapshot = withPresence(snapshot, motionFrame);
  state = snapshot;
  update();
  voice.sync({ ...current(), ...(position ?? {}) }, snapshot.players);
  const packets = snapshot.signals ?? [];
  const fresh = packets.filter((packet) => packet.id > lastSignal);
  lastSignal = Math.max(lastSignal, snapshot.signalCursor ?? 0);
  signalQueue = signalQueue.then(async () => {
    if (generation !== sessionGeneration) return;
    for (const packet of fresh) await voice.receive(packet);
  }).catch(() => {});
}

let signalQueue = Promise.resolve();

async function action(type, args = {}) {
  if (!token) throw new Error("街に接続してから操作してください。");
  const generation = sessionGeneration;
  const result = await request("./api/action", { body: { type, ...args }, after: lastSignal });
  accept(result.state, generation);
  return result;
}

async function join(name, code) {
  if (joining) return;
  joining = true;
  try {
    let result;
    const prior = code && localStorage.getItem(`${sessionKey}:${code}`);
    if (prior) {
      try {
        const loaded = await request("./api/state", { session: prior });
        result = { ...loaded, token: prior };
      } catch (error) {
        if (error.status !== 401) throw error;
        localStorage.removeItem(`${sessionKey}:${code}`);
      }
    }
    result ??= await request("./api/join", {
      body: { name, ...(code ? { code } : {}) }, session: "",
    });
    sessionGeneration++;
    cancelAvatarUpload();
    voice.reset();
    state = null;
    lastSignal = 0;
    selectedHouse = null;
    position = selection = building = preview = place = null;
    token = result.token;
    localStorage.setItem(sessionKey, token);
    localStorage.setItem(`${sessionKey}:${result.state.code}`, token);
    accept(result.state);
    startPresence();
    openPanel("guide", !narrow());
    const url = new URL(location.href);
    url.searchParams.delete("join");
    history.replaceState(null, "", url);
    return result;
  } finally {
    joining = false;
  }
}

async function tick() {
  if (token && !joining) {
    const generation = sessionGeneration;
    try {
      await refresh();
      if (generation === sessionGeneration && token && state && !presence) startPresence();
    } catch (error) {
      sessionError(error, generation);
    }
  }
  setTimeout(tick, state?.epoch ? 1800 : 950);
}

function sessionError(error, generation) {
  if (!token || generation !== sessionGeneration || error.status !== 401) return;
  sessionGeneration++;
  cancelAvatarUpload();
  token = "";
  presence?.close();
  presence = motionFrame = null;
  localStorage.removeItem(sessionKey);
  notify("セッションが切れました。「招待」から街に入り直してください。");
}

// What the animator of my own avatar has come to; the town passes it on to the other residents.
function reportAvatar({ revision, values, states, controls }) {
  if (!token || vrmUploading || revision !== current().vrm) return;
  action("animator", { revision, values, states, controls }).catch(() => {});
}

let scene = null;
// The lift this resident stands in, as the 3D view last reported it: { levels, level, target }.
let lift = null;
// The door within reach of this resident: { open, lock, locked, key } or nothing.
let door = null;
// The train this resident rides or waits for, as the 3D view last reported it.
let ride = null;

function makeScene() {
  try {
    scene = initScene($("scene"), {
      onTile: clickTile,
      onTarget: clickTarget,
      onMove: reportMove,
      onPlace: enterPlace,
      onLift: (next) => { lift = next; drawActionBar(); syncVR(); },
      onDoor: (next) => { door = next; drawActionBar(); syncVR(); },
      onRide: (next) => { ride = next; drawActionBar(); syncVR(); },
      onNotice: notify,
      onDoorChange: (change) => run(() => action("door", change).catch((error) => { refresh().catch(() => {}); throw error; })),
      onLockChange: (change) => run(async () => {
        await action("lock", change);
        notify(change.locked ? "鍵をかけました。" : "鍵を開けました。開けたままだと、だれでも入れます。");
      }),
      onVR: (on) => {
        document.body.classList.toggle("immersive", Boolean(on));
        update();
      },
      onAvatarState: reportAvatar,
      onAvatarLoad: reportAvatarLoad,
      // The pencil of the design tools, held by the mouse in the 3D view or by a hand in VR.
      onDesignPointer: (phase, spot) => studio?.editor?.pointer(phase, spot ?? { x: 0, z: 0 }),
      // A button of the menu a hand holds in VR: the same commands as the buttons of the page.
      onMenu: (name, data = {}) => {
        if (handlers[name]) run(() => handlers[name](data)).finally(syncVR);
      },
    });
    const saved = localStorage.getItem(qualityKey);
    if (saved) scene.setQuality(saved);
    scene.setCamera(viewMode);
    scene.setSound?.(settings);
    scene.vr.supported().then((supported) => {
      vrReady = supported;
      update();
    });
  } catch (error) {
    console.error(error);
    notify("3D表示を読み込めませんでした。ブラウザの WebGL 設定を確認してください。");
  }
}

const editing = () => !place && !designing() && (activeTab === "edit" || Boolean(building));

// The camera the game wants right now: editing looks down on the town, trying clothes moves in close.
function wantedCamera() {
  if (preview && (inShop() || activeTab === "shop")) return "close";
  if (editing()) return "overview";
  return viewMode;
}

function avatar(player, index) {
  return {
    ...player,
    color: colors[index % colors.length],
    outfit: itemFor(player.equipped),
    vrmUrl: player.vrm && token ? new URL(`./api/vrm/${player.id}?token=${encodeURIComponent(token)}&v=${player.vrm}`, apiBase).href : "",
  };
}

// Which camera, and VR when a headset is there.
function drawViewBar() {
  const bar = $("view-bar");
  if (!bar) return;
  const immersive = Boolean(scene?.vr.active());
  const key = JSON.stringify([viewMode, vrReady, immersive]);
  if (bar.dataset.key === key) return;
  bar.dataset.key = key;
  bar.innerHTML = `${Object.entries(cameraNames).map(([mode, label]) =>
    `<button type="button" data-action="view" data-id="${mode}" aria-pressed="${viewMode === mode}">${label}</button>`).join("")}
    ${vrReady ? `<button type="button" class="vr" data-action="vr" aria-pressed="${immersive}">${icon("vr")}VR</button>` : ""}`;
}

// What can be done where the resident stands: storeys, the door within reach, the lift, the
// train; and what the town is waiting for (a place to build, a tile to move something to).
function drawActionBar() {
  const bar = $("action-bar");
  if (!bar) return;
  const groups = [];
  if (building) {
    groups.push(`<span class="act-label">${STYLE_LABELS[building.style]}（${building.w}×${building.d}マス）を建てる場所をクリック</span>
      <button type="button" class="act" data-action="cancel-build"><kbd>Esc</kbd>やめる</button>`);
  } else if (editing()) {
    groups.push(`<span class="act-label">${selection?.target ? (selection.from ? "移動先のマスをクリック" : "道路を敷くマスをクリック") : `街の編集中：${town().shop || town().cafe ? "建物か道路" : "道路"}をクリック`}</span>
      ${selection ? '<button type="button" class="act" data-action="cancel-edit">選択を解除</button>' : ""}
      <button type="button" class="act" data-action="end-edit">編集を終える</button>`);
  }
  if (ride) {
    groups.push(`<span class="act-label">${icon("train")} ${escape(ride.text)}</span>`);
  }
  if (lift) {
    groups.push(`<span class="act-label">行き先</span>${lift.levels.map((level) => `<button type="button" class="act square" data-action="ride" data-id="${level}"
      aria-pressed="${(lift.target ?? lift.level) === level}" ${lift.level === null ? "disabled" : ""} aria-label="${level + 1}階へ">${level + 1}</button>`).join("")}`);
  } else if (place && place.levels > 1) {
    groups.push(`<button type="button" class="act square" data-action="floor" data-id="-1" ${place.level > 0 ? "" : "disabled"} aria-label="下の階へ" title="下の階へ（PageDown）">${icon("down")}</button>
      <span class="act-label">${place.level + 1}階</span>
      <button type="button" class="act square" data-action="floor" data-id="1" ${place.level + 1 < place.levels ? "" : "disabled"} aria-label="上の階へ" title="上の階へ（PageUp）">${icon("up")}</button>`);
  }
  if (door) {
    groups.push(`<button type="button" class="act" data-action="use-door" ${!door.open && door.locked && !door.key ? "disabled" : ""}><kbd>F</kbd>${
      door.open ? "扉を閉める" : door.locked && !door.key ? "鍵がかかっています" : "扉を開ける"}</button>
      ${door.lock && door.key ? `<button type="button" class="act" data-action="use-lock" aria-pressed="${!door.locked}"><kbd>L</kbd>${door.locked ? "鍵を開ける" : "鍵をかける"}</button>`
        : door.lock && !door.locked ? '<span class="act-label">鍵は開いています</span>' : ""}`);
  }
  if (place && !building) groups.push('<button type="button" class="act" data-action="leave-home">外に出る</button>');
  const html = groups.map((group) => `<div class="act-group">${group}</div>`).join("");
  if (bar.dataset.html !== html) {
    bar.dataset.html = html;
    bar.innerHTML = html;
  }
  bar.hidden = !groups.length;
}

const ownerName = (house) => state?.players.find((player) => player.id === house.ownerId)?.name ?? "住人";
const houseTitle = (house) => (house.ownerId === current().id ? kinds[house.kind] : `${ownerName(house)}の${kinds[house.kind]}`);

// Tells the 3D view how much of the screen the panels cover, so that it keeps what matters clear of them.
function syncInsets() {
  if (!scene) return;
  if (designing()) {
    scene.setInsets(studio.covered());
    return;
  }
  if (narrow()) {
    const drawer = panelOpen ? $("panel")?.getBoundingClientRect() : null;
    scene.setInsets({ bottom: drawer ? Math.max(0, innerHeight - drawer.top) : 0 });
    return;
  }
  const edge = panelOpen ? $("panel")?.getBoundingClientRect().right : $("dock")?.getBoundingClientRect().right;
  scene.setInsets({ left: edge ?? 0 });
}

function update() {
  const me = current();
  const home = getHouse(place?.id);
  // A building that was pulled down while it was being designed is not designed any further.
  if (designing() && state && !getHouse(studio.house.id)) {
    studio.discard();
    notify("設計していた建物は、もう街にありません。");
    return;
  }
  scene?.update({
    // (A region town counts as a new arrival once its region is shown: the resident is put where the town says.)
    session: regionApp.session(sessionGeneration),
    player: avatar(me, 0),
    players: (state?.players ?? []).filter((player) => player.id !== me.id && player.online)
      .map((player, index) => avatar(player, index + 1)),
    town: regionApp.sceneTown(town()),
    // Which doors stand open and which locks were left unlocked, house by house.
    doors: state?.doors ?? {},
    houses: (state?.houses ?? []).map((house) => ({ ...house, label: houseTitle(house) })),
    edit: editing(),
    selected: selection?.from ?? null,
    placing: building ? { w: building.w, d: building.d } : null,
    design: designDraft,
    transit: transitPreview && !town().region,
  });
  scene?.setCamera(wantedCamera());
  scene?.setPreview(preview ? { outfit: preview, color: preview.color } : null);
  setText("balance", fmt(me.coins));
  setText("location-label", designing() ? "設計中" : home ? `${houseTitle(home)} ${place.level + 1}階`
    : inShop() ? "服屋 ひだまり" : place?.kind === "cafe" ? "こもれび喫茶" : place?.kind === "station" ? place.label ?? "駅" : regionApp.placeName(position ?? me) ?? "ひだまり通り");
  setText("room-status", state?.code ? "招待" : "接続");
  drawViewBar();
  drawActionBar();
  const micButton = $("mic-button");
  micButton?.setAttribute("aria-pressed", String(voice.enabled()));
  setText("mic-label", voice.enabled() ? "マイク ON" : "ボイス");
  setText("online-count", String(state?.players.filter((player) => player.online).length ?? 1));
  document.body.classList.toggle("designing", designing());
  drawMap();
  regionApp.sync(state);
  renderPanel();
  syncInsets();
  syncVR();
}

function drawMap() {
  const map = $("minimap");
  if (!map) return;
  const ctx = map.getContext("2d");
  if (!ctx) return;
  const layout = town();
  // A region town has its own map: the land round the player (see region-app.js).
  if (regionApp.drawMap(ctx, map, layout, position ?? current())) return;
  // The map keeps the town's proportions however far it has grown.
  const scale = Math.min(map.width / layout.width, map.height / layout.height);
  const left = (map.width - layout.width * scale) / 2;
  const top = (map.height - layout.height * scale) / 2;
  ctx.fillStyle = "#8fb6c4";
  ctx.fillRect(0, 0, map.width, map.height);
  ctx.fillStyle = "#c4dcae";
  ctx.fillRect(left, top, layout.width * scale, layout.height * scale);
  ctx.fillStyle = "#6f7377";
  for (const r of layout.roads) ctx.fillRect(left + r.x * scale, top + r.z * scale, scale + .4, scale + .4);
  ctx.fillRect(left + layout.plaza.x * scale, top + layout.plaza.z * scale, scale + .4, scale + .4);
  for (const [spot, color] of [[layout.shop, "#d58a74"], [layout.cafe, "#cdb06b"], ...((state?.houses ?? []).map((h) => [h, h.ownerId === current().id ? "#1f7a6a" : "#5f8f97"]))]) {
    if (!spot) continue;
    ctx.fillStyle = color;
    ctx.fillRect(left + spot.x * scale, top + spot.z * scale, (spot.w ?? 1) * scale, (spot.d ?? 1) * scale);
  }
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 1.5;
  for (const other of (state?.players ?? []).filter((entry) => entry.id !== current().id && entry.online)) {
    ctx.beginPath();
    ctx.arc(left + (other.x + .5) * scale, top + (other.z + .5) * scale, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#e8862e";
    ctx.fill();
    ctx.stroke();
  }
  const player = position ?? current();
  ctx.beginPath();
  ctx.arc(left + (player.x + .5) * scale, top + (player.z + .5) * scale, 4.2, 0, Math.PI * 2);
  ctx.fillStyle = "#1d2a33";
  ctx.fill();
  ctx.stroke();
}

// ---- The dock and its drawer --------------------------------------------------------

const titles = {
  guide: ["TOWN GUIDE", "まちの案内"],
  shop: ["WARDROBE", "服屋 ひだまり"],
  home: ["MY HOMES", "家づくり"],
  edit: ["TOWN BUILDER", "街の編集"],
  district: ["DISTRICTS", "地区"],
  avatar: ["AVATAR", "アバター"],
  settings: ["SETTINGS", "設定"],
};

// Opens the drawer at a tab (or with `open` false only makes the tab the current one).
function openPanel(tab = activeTab, open = true) {
  if (!Object.hasOwn(titles, tab)) return;
  if (activeTab !== tab && tab !== "shop") preview = null;
  if (tab !== "edit") selection = null;
  if (tab !== "home") building = null;
  activeTab = tab;
  panelOpen = open;
  renderKey = "";
  update();
}
const setTab = (tab) => openPanel(tab, panelOpen);

function drawDock() {
  document.querySelectorAll("#dock [data-tab]").forEach((node) => {
    node.setAttribute("aria-pressed", String(panelOpen && node.dataset.tab === activeTab));
  });
  const panel = $("panel");
  if (panel) panel.hidden = !panelOpen;
  document.body.classList.toggle("panel-open", panelOpen);
}

const btn = (label, actionName, className = "soft", attrs = "") =>
  `<button type="button" class="btn ${className}" data-action="${actionName}" ${attrs}>${label}</button>`;

function renderPanel() {
  drawDock();
  const node = $("panel-content");
  if (!node || !panelOpen) return;
  const me = current();
  const key = JSON.stringify([activeTab, place, preview?.id, building, buildChoice, selection,
    selectedHouse, planFloor, brush, me.owned, me.equipped, me.vrm,
    me.avatarHasAfk, me.afk, me.avatarExpressions, me.avatarExpressionValues, vrmUploading, me.coins, me.name,
    state?.layout, state?.players.map((p) => [p.id, p.name, p.online, p.muted, voice.silenced(p.id)]),
    state?.editorIds, regionApp.panelKey(), scene?.quality(), Boolean(state), settings, transitPreview, vrReady]);
  // Repainting would cut a brush stroke short, so the panel waits until it ends.
  if (renderKey === key || stroke) return;
  renderKey = key;
  setText("panel-kicker", titles[activeTab][0]);
  setText("panel-title", titles[activeTab][1]);
  $("panel-icon")?.querySelector("use")?.setAttribute("href", `#i-${activeTab}`);
  if (activeTab === "guide") node.innerHTML = guide();
  if (activeTab === "shop") node.innerHTML = shop();
  if (activeTab === "home") node.innerHTML = homes();
  if (activeTab === "edit") node.innerHTML = editor();
  if (activeTab === "district") node.innerHTML = regionApp.panel();
  if (activeTab === "settings") node.innerHTML = settingsPanel();
  if (activeTab === "avatar") renderWardrobe(node, me);
}

function guide() {
  const goals = [
    [current().owned.length > 0, "服屋をのぞく", "試着して、好きな服を買ってみよう。", "open-shop", "shop", "warm"],
    [(state?.houses ?? []).some((h) => h.ownerId === current().id), "はじめての家", "空いている場所を選んで、自分の家を建てよう。", "open-homes", "home", ""],
    [state?.players.length > 1, "友達を呼ぶ", "招待リンクで同じ街に集まろう。", "room", "users", "sky"],
  ];
  const card = ([done, title, help, act, symbol, tone]) =>
    `<button type="button" class="goal" data-action="${act}">
      <span class="goal-icon ${done ? "done" : tone}">${icon(done ? "check" : symbol)}</span>
      <span><strong>${title}</strong><small>${help}</small></span>${icon("arrow")}
    </button>`;
  // Towns made before the name prompt existed gave their first resident this placeholder name.
  const unnamed = state && current().name === "あなた";
  const online = (state?.players ?? []).filter((p) => p.online).length || 1;
  return `<p class="lead">今日は、この街で何をしよう？</p>
    <div class="stack">
      ${unnamed ? card([false, "名前を決める", "友達の画面に表示される名前を決めよう。", "rename", "avatar", "warm"]) : ""}
      ${goals.map(card).join("")}
    </div>
    <section class="section">
      <div class="section-title"><span>街にいる人</span><span>${online}人</span></div>
      ${people()}
    </section>`;
}

function people() {
  const me = current();
  const peers = (state?.players ?? []).filter((p) => p.id !== me.id && p.online);
  return `<div class="list">
    <div class="list-row"><span>${escape(me.name)}（あなた）</span>${btn("名前を変える", "rename", "ghost small")}</div>
    ${peers.map((p) => `<div class="list-row"><span>${escape(p.name)}</span>
      ${btn(voice.silenced(p.id) ? "ミュート解除" : "ミュート", "silence", "ghost small", `data-id="${escape(p.id)}"`)}</div>`).join("")}
  </div>
  ${peers.length ? "" : '<p class="note">いまはあなただけが街にいます。「招待」で友達を呼べます。</p>'}`;
}

function shop() {
  // (Towns have no shop building now: clothes are tried on and bought from here, wherever one is.)
  return `<p class="lead">試着して、気に入った服を選びましょう。</p>
    <div class="item-grid">${catalog().map(shopCard).join("")}</div>
    ${current().vrm ? '<p class="note">持ち込みアバターでは、対応する帽子を試着できます。</p>' : ""}
    ${inShop() ? btn("お店を出る", "leave-shop", "ghost block") : ""}`;
}

function shopCard(item) {
  const owned = current().owned.includes(item.id);
  const selected = preview?.id === item.id;
  const valid = compatible(item);
  const attribute = `data-id="${escape(item.id)}"`;
  return `<div class="item-card ${selected ? "selected" : ""}">
    <button type="button" class="item-swatch" style="--swatch:${escape(item.color)}" data-action="try" ${attribute}
      ${valid ? "" : "disabled"} aria-label="${escape(item.name)}を試着">${icon(isAccessory(item) ? "hat" : "shirt")}</button>
    <strong>${escape(item.name)}</strong><small>${owned ? "購入済み" : valid ? `${fmt(item.price)} コイン` : "標準アバター用"}</small>
    ${valid ? btn(owned ? "着る" : selected ? "購入する" : "試着", owned ? "equip" : selected ? "buy" : "try",
    `${selected ? "primary" : "soft"} small`, attribute) : ""}
    </div>`;
}

const option = (value, label, chosen) =>
  `<option value="${escape(value)}" ${String(value) === String(chosen) ? "selected" : ""}>${escape(label)}</option>`;
const houseButton = (house) => `<button type="button" class="house-button" data-action="home-detail" data-id="${escape(house.id)}" aria-pressed="${house.id === selectedHouse}">
    ${icon("home")}<span><strong>${escape(houseTitle(house))}</strong><small>${STYLE_LABELS[house.style]}・${house.floors.length}階建て・${house.w}×${house.d}マス${house.design ? "・詳細設計" : ""}</small></span>${icon(house.id === selectedHouse ? "up" : "down")}
  </button>${house.id === selectedHouse ? homeDetail(house, false) : ""}`;

function homes() {
  const me = current();
  const houses = state?.houses ?? [];
  const loc = getHouse(place?.id);
  if (loc) return `<p class="lead">${escape(houseTitle(loc))}の中にいます。</p>${homeDetail(loc, true)}`;
  if (building) {
    return `<p class="lead">${STYLE_LABELS[building.style]}（${building.w}×${building.d}マス）を建てる場所を、街の空き地から選んでください。</p>
      ${btn("建てるのをやめる", "cancel-build", "ghost block")}`;
  }
  const mine = houses.filter((house) => house.ownerId === me.id);
  const others = houses.filter((house) => house.ownerId !== me.id);
  return `<p class="lead">敷地と様式を選んで建て、あとから壁一枚ずつ設計できます。</p>
    <form data-form="build" class="card">
      <label class="field">使い方<select name="kind">${Object.entries(kinds).map(([value, label]) =>
        option(value, label, buildChoice.kind)).join("")}</select></label>
      <label class="field">様式<select name="style">${Object.entries(STYLE_LABELS).map(([value, label]) =>
        option(value, value === "brutal" ? `${label}（更地から設計）` : label, buildChoice.style)).join("")}</select></label>
      <label class="field">敷地<select name="size">${lotSizes.map(([w, d]) =>
        option(`${w}x${d}`, `${w}×${d}マス（約${w * 8}m×${d * 8}m）`, buildChoice.size)).join("")}</select></label>
      <button class="btn primary block" type="submit">${icon("pin")}<span>建てる場所を選ぶ</span></button>
    </form>
    <p class="note">自宅と別荘は鍵を渡した人だけが入れます。共同住宅は住人みんなで間取りを作ります。</p>
    ${mine.length ? `<section class="section"><div class="section-title"><span>自分の建物</span><span>${mine.length}</span></div>${mine.map(houseButton).join("")}</section>` : ""}
    ${others.length ? `<section class="section"><div class="section-title"><span>街の建物</span><span>${others.length}</span></div>${others.map(houseButton).join("")}</section>` : ""}`;
}

function planEditor(home, floor, inside) {
  // Eight cells of 910 mm to a tile.
  const width = 8 * home.w;
  const mine = current().id;
  const rooms = [...Object.entries(ROOM_LABELS), [".", "空き"]].filter(([code]) => code !== "P" || home.kind === "shared");
  const tabs = home.floors.length > 1 && !inside ? `<div class="chip-grid">${home.floors.map((_, level) =>
    `<button type="button" class="chip" data-action="plan-floor" data-id="${level}" aria-pressed="${level === floor}">${level + 1}階</button>`).join("")}</div>` : "";
  const cells = Array.from(home.floors[floor], (key, index) => {
    // (A lower-case letter is the same kind of room, kept apart from its upper-case neighbour.)
    const code = key.toUpperCase();
    const x = index % width;
    const z = Math.floor(index / width);
    const holder = home.owners?.[`${floor}:${x}:${z}`];
    const locked = Boolean(holder) && holder !== mine;
    return `<button type="button" class="plan-cell" data-x="${x}" data-z="${z}" data-code="${key}"
      style="--room:${ROOM_COLORS[code] ?? "transparent"}" ${locked ? "disabled" : ""}
      aria-label="${x + 1}列 ${z + 1}行 ${ROOM_LABELS[code] ?? "空き"}${locked ? "（ほかの住人の個室）" : ""}">${ROOM_LABELS[code]?.[0] ?? ""}</button>`;
  }).join("");
  return `${tabs}
    <div class="palette" role="group" aria-label="部屋の種類">${rooms.map(([code, label]) =>
      `<button type="button" class="swatch" data-action="brush" data-id="${code}" aria-pressed="${brush === code}"
        style="--room:${ROOM_COLORS[code] ?? "#ffffff"}">${label}</button>`).join("")}</div>
    <div class="plan-grid ${width > 8 ? "dense" : ""}" data-house="${escape(home.id)}" data-floor="${floor}" style="--columns:${width}"
      role="group" aria-label="${floor + 1}階の間取り">${cells}</div>
    <p class="note">1マスは半間（91cm）。部屋の種類を選んでマスをなぞると塗れます。下が道路側です。玄関は外に面したマスに、階段は幅1マス×長さ3〜4マスか2×2〜3マスで塗ります。</p>`;
}

// The flats of a block, as the locks that guard them ('storey:flat'), and what each is called.
function flatsOf(home) {
  const locks = new Set();
  (home.units ?? []).forEach((row, level) => {
    for (const unit of new Set(row)) if (unit !== "0") locks.add(`${level}:${unit}`);
  });
  return [...locks];
}
const flatName = (lock) => {
  const [level, unit] = lock.split(":");
  const number = "123456789abcdefghijklmnopqrstuvwxyz".indexOf(unit) + 1;
  return `${Number(level) + 1}${String(number).padStart(2, "0")}号室`;
};

function homeDetail(home, inside) {
  const id = escape(home.id);
  const me = current();
  const owner = home.ownerId === me.id;
  const invitePlayers = (state?.players ?? []).filter((p) => p.id !== me.id);
  const memberIds = home.memberIds ?? [];
  const floor = Math.min(inside ? place?.level ?? 0 : planFloor, home.floors.length - 1);
  const storeys = Array.from({ length: STYLE_FLOORS[home.style] }, (_, index) => index + 1);
  return `<div class="card">
    <div class="row wrap">
      ${inside ? btn("外に出る", "leave-home", "soft grow") : btn(`${icon("pin")}<span>玄関へ行く</span>`, "enter-home", "soft grow", `data-id="${id}"`)}
      ${home.canEdit ? btn(`${icon("pencil")}<span>設計する</span>`, "design-home", "primary grow", `data-id="${id}"`) : ""}
    </div>
    ${home.canEdit ? `<p class="note">「設計する」で、壁・扉・窓・家具・階段・エレベーターを一つずつ置けます。${home.design ? "この建物は詳細設計で作られています。" : ""}</p>` : ""}
    ${owner ? `<div class="row">
      <label class="field grow">様式<select data-setting="style" data-id="${id}">${Object.entries(STYLE_LABELS).map(([value, label]) =>
        option(value, label, home.style)).join("")}</select></label>
      <label class="field grow">階数<select data-setting="floors" data-id="${id}">${storeys.map((count) =>
        option(count, `${count}階`, home.floors.length)).join("")}</select></label></div>` : ""}
    ${home.canEdit && !home.design ? `<details class="stack" ${inside ? "open" : ""}><summary class="section-title" style="cursor:pointer">かんたん間取り（マス目で塗る）</summary>
      <div class="stack" style="margin-top:9px">${planEditor(home, floor, inside)}</div></details>` : ""}
    ${owner ? `<section class="section"><div class="section-title"><span>${icon("key")} 鍵を渡す</span></div>
      ${invitePlayers.length ? `<div class="list">${invitePlayers.map((p) => {
        const held = memberIds.includes(p.id) ? "main" : Object.keys(home.keys ?? {}).find((lock) => home.keys[lock].includes(p.id)) ?? "";
        return `<label class="list-row"><span>${escape(p.name)}</span>
        <select data-setting="key" data-id="${id}" data-player="${escape(p.id)}" aria-label="${escape(p.name)}に渡す鍵">
          ${option("", "鍵なし", held)}${option("main", flatsOf(home).length ? "合鍵（すべての部屋）" : "合鍵", held)}
          ${flatsOf(home).map((lock) => option(lock, `${flatName(lock)}の鍵`, held)).join("")}
        </select></label>`;
      }).join("")}</div>` : '<p class="note">街の招待リンクを送ると、鍵を渡す相手を選べます。</p>'}
      <p class="note">扉は F キーかクリックで開け閉めします。鍵をかけた扉は、鍵を持つ人だけが開けられます。</p>
      <div class="row wrap">${btn("標準の間取りに戻す", "reset-plan", "ghost small", `data-id="${id}"`)}
        ${btn(`${icon("trash")}<span>取り壊す</span>`, "demolish", "danger small", `data-id="${id}"`)}</div></section>` : ""}
    </div>`;
}

function editor() {
  if (town().region && !isHost()) return regionApp.editorNote();
  if (place) return `<p class="lead">建物の外に出てから編集できます。</p>
    ${btn("外に出る", "leave-home", "primary block")}`;
  if (!canEdit()) return `<p class="lead">街の管理者から編集権限を受け取ると、${town().shop || town().cafe ? "建物と道路" : "道路"}を動かせます。</p>`;
  const hint = selection?.target ? (selection.from ?
    "移動先のマスをクリックしてください。" : "道路を敷くマスをクリックしてください。") :
    (town().shop || town().cafe ? "建物か道路をクリックし、移動先を選んでください。" : "道路をクリックし、移動先を選ぶか、道路を追加してください。");
  return `<p class="lead">${hint}</p>
    <div class="stack">
      ${town().shop || town().cafe ? `<div class="row wrap">${town().shop ? btn("服屋を動かす", "select-shop", "soft grow") : ""}${town().cafe ? btn("カフェを動かす", "select-cafe", "soft grow") : ""}</div>` : ""}
      ${btn(`${icon("plus")}<span>道路を追加</span>`, "add-road", "soft block")}
      ${selection?.target === "road" && selection.from ? btn("選んだ道路を取り除く", "remove-road", "danger block") : ""}
      <div class="row wrap">${btn(`${icon("undo")}<span>元に戻す</span>`, "undo", "ghost grow", town().canUndo ? "" : "disabled")}
        ${selection ? btn("選択を解除", "cancel-edit", "ghost grow") : ""}</div>
    </div>
    <section class="section">
      <div class="section-title"><span>街を広げる</span><span>いま ${town().width}×${town().height}マス</span></div>
      <div class="compass" role="group" aria-label="広げる方向">
        ${[["north", "北へ"], ["west", "西へ"], ["east", "東へ"], ["south", "南へ"]].map(([side, label]) =>
          btn(label, "expand", "soft small", `data-id="${side}"`)).join("")}
      </div>
      <p class="note">押した方向へ2マス広がります（各辺48マスまで）。広げると「元に戻す」の履歴は消えます。</p>
    </section>
    ${isHost() && (state?.players.length ?? 0) > 1 ? `<section class="section"><div class="section-title"><span>街の共同編集者</span></div>
      <div class="list">${state.players.filter((p) => p.id !== current().id).map((p) => {
        const allowed = (state.editorIds ?? []).includes(p.id);
        return `<div class="list-row"><span>${escape(p.name)}</span>${btn(allowed ? "権限を外す" : "編集を許可",
          "editor-role", "ghost small", `data-id="${escape(p.id)}" data-allowed="${!allowed}"`)}</div>`;
      }).join("")}</div></section>` : ""}
    ${btn("編集を終える", "end-edit", "ghost block")}`;
}

function settingsPanel() {
  const keys = [
    [["W", "A", "S", "D"], "移動（矢印キーでも）"], [["V"], "三人称と一人称の切り替え"], [["Q", "E"], "視点を左右に回す"],
    [["F"], "近くの扉を開け閉めする"], [["L"], "近くの扉の鍵をかける・開ける"], [["PgUp", "PgDn"], "建物の中で階を移動する"], [["Esc"], "選択や配置をやめる"],
  ];
  return `<section class="section">
      <div class="section-title"><span>画質</span></div>
      <div class="segmented" role="group" aria-label="画質" style="display:grid;grid-template-columns:repeat(3,1fr)">${Object.entries(qualityNames).map(([value, label]) =>
        `<button type="button" class="seg" data-action="quality" data-id="${value}" aria-pressed="${scene?.quality() === value}">${label}</button>`).join("")}</div>
      <p class="note">「きれい」は海や窓に景色が映り、影が細かくなります。動きが重いときは「軽い」にしてください。</p>
    </section>
    <section class="section">
      <div class="section-title"><span>${icon("volume")} 音</span></div>
      <label class="check"><input type="checkbox" data-setting="sound" ${settings.sound ? "checked" : ""}> 効果音（エレベーターの到着音・発車メロディなど）</label>
      <label class="check"><input type="checkbox" data-setting="voice" ${settings.voice ? "checked" : ""}> 自動放送（エレベーターや車内の案内を読み上げる）</label>
    </section>
    <section class="section">
      <div class="section-title"><span>${icon("train")} モノレール（試運転）</span></div>
      <p class="note">跨座式モノレールのベースを、この画面だけで走らせて試せます。街には配置・保存されず、ほかの人の画面にも出ません。</p>
      ${btn(transitPreview ? "試運転をやめる" : "試運転を始める", "toggle-transit", transitPreview ? "danger block" : "soft block", `aria-pressed="${transitPreview}"`)}
      ${transitPreview ? '<p class="note">建物のない土地が横に続くいちばん長い列の両端に、仮の駅（4×1マス）と線路が建ちます。改札を通って3階のホームへ上がり、ホームドアが開いている間に乗ってください。</p>' : ""}
    </section>
    <section class="section">
      <div class="section-title"><span>${icon("help")} 操作方法</span></div>
      <dl class="keys">${keys.map(([caps, label]) => `<dt>${caps.map((cap) => `<kbd>${cap}</kbd>`).join("")}</dt><dd>${label}</dd>`).join("")}</dl>
      <p class="note">地面をクリックするとそこへ歩きます。スマホでは左下のスティックで歩き、画面をなぞって見回します。${vrReady ? "VRでは左スティックで歩き、右スティックで向きを変え、A・B・X・Yボタンで手元メニューを開きます。" : "VRゴーグルのブラウザーで開くと「VR」ボタンが出ます。"}</p>
    </section>`;
}

function renderWardrobe(node, me) {
  // Keep the native picker connected while room updates refresh the wardrobe.
  if (!$("avatar-file")) {
    node.innerHTML = `<p class="lead">好きな姿で街へ出かけましょう。</p>
      <div class="list" id="avatar-resident"><div class="list-row"><span>表示名：<strong id="avatar-name"></strong></span>
        ${btn("変える", "rename", "ghost small")}</div></div>
      <label class="upload">アバターを読み込む
        <input type="file" id="avatar-file" multiple aria-describedby="avatar-file-help">
        <small id="avatar-file-help">VRM・GLB・VRChat向けFBX／Unityパッケージ</small>
      </label>
      <p class="note">FBXと画像はまとめて選べます。髪やスカートなどの揺れものは、体にめり込まないよう当たり判定つきで揺れます。</p>
      <div class="stack" id="avatar-controls"></div>`;
  }
  $("avatar-resident").hidden = !state;
  setText("avatar-name", me.name);
  $("avatar-file").disabled = vrmUploading;
  setText("avatar-file-help", vrmUploading ? "読み込み中…" : "VRM・GLB・VRChat向けFBX／Unityパッケージ");
  $("avatar-controls").innerHTML = `${me.avatarHasAfk ? btn(me.afk ? "離席モードを解除" : "離席モードにする", "toggle-afk", "primary block",
      `aria-pressed="${Boolean(me.afk)}" ${vrmUploading ? "disabled" : ""}`) : ""}
    ${avatarGimmicks(me)}
    ${me.vrm ? btn("標準アバターに戻る", "remove-vrm", "ghost block", vrmUploading ? "disabled" : "") : ""}
    <section class="section">
      <div class="section-title"><span>クローゼット</span></div>
      ${me.owned.length ? `<div class="list">${me.owned.map(itemFor).filter(Boolean).map((item) =>
        `<div class="list-row"><span>${escape(item.name)}</span>
         ${btn(me.equipped === item.id ? "外す" : "着る", me.equipped === item.id ? "unequip" : "equip",
         "ghost small", `data-id="${escape(item.id)}" ${compatible(item) ? "" : "disabled"}`)}</div>`).join("")}</div>`
        : '<p class="empty">服屋で買った服がここに並びます。</p>'}
    </section>`;
}

function avatarGimmicks(me) {
  const controls = me.avatarExpressions ?? [];
  if (!controls.length) return "";
  const groups = new Map();
  for (const control of controls) {
    const name = control.group ?? "";
    if (!groups.has(name)) groups.set(name, []);
    groups.get(name).push(control);
  }
  return `<section class="section">
    <div class="section-title"><span>ギミック</span></div>
    ${[...groups].map(([name, group]) => `
      ${name ? `<small class="note">${escape(name)}</small>` : ""}
      <div class="chip-grid">${group.filter(({ kind }) => kind !== "slider").map(({ id, label, kind }) => {
        const on = me.avatarExpressionValues?.[id] === true;
        return `<button type="button" class="chip" data-action="avatar-expression" data-id="${escape(id)}"
          ${kind === "toggle" ? `aria-pressed="${on}"` : ""} ${vrmUploading ? "disabled" : ""}>${escape(label)}</button>`;
      }).join("")}</div>
      ${group.filter(({ kind }) => kind === "slider").map(({ id, label }) => {
        const amount = Math.round((Number(me.avatarExpressionValues?.[id]) || 0) * 100);
        return `<label class="field">${escape(label)}<input type="range" min="0" max="100" value="${amount}"
          data-slider="${escape(id)}" ${vrmUploading ? "disabled" : ""}></label>`;
      }).join("")}
    `).join("")}
  </section>`;
}

// ---- Dialogs ----------------------------------------------------------------------------

function showDialog(html) {
  const dialog = $("dialog");
  $("dialog-content").innerHTML = html;
  if (!dialog.open) dialog.showModal();
}

// Asks a question with a button for each answer: `actions` is [[id, label, look], …].
// Resolves with the id of the button pressed, or null if the dialog was closed.
function confirmDialog({ title, text, actions }) {
  const dialog = $("dialog");
  if (dialog.open) dialog.close();
  showDialog(`<h2>${escape(title)}</h2><p>${escape(text)}</p>
    <div class="row wrap">${actions.map(([id, label, look]) =>
      `<button type="button" class="btn ${look}" data-answer="${escape(id)}">${escape(label)}</button>`).join("")}</div>`);
  return new Promise((resolve) => {
    let answer = null;
    const pick = (event) => {
      const button = event.target.closest("[data-answer]");
      if (!button) return;
      answer = button.dataset.answer;
      dialog.close();
    };
    dialog.addEventListener("click", pick);
    dialog.addEventListener("close", () => {
      dialog.removeEventListener("click", pick);
      resolve(answer);
    }, { once: true });
  });
}

function openRoomDialog() {
  const code = state?.code ?? "";
  const url = new URL(location.href);
  if (code) url.searchParams.set("join", code);
  if (!state) {
    // First visit or a lost session: choose the name everyone will see before entering a town.
    showDialog(`<h2>まちのとなりへようこそ</h2>
      <p>街のみんなに表示される名前を決めてください。</p>
      <form data-form="join">
        <label class="field">表示名<input name="name" maxlength="24" required autofocus placeholder="あなたの名前"></label>
        <label class="field">招待コード<input name="code" maxlength="20" value="${escape(inviteFromUrl)}" placeholder="空欄なら新しい街をつくります"></label>
        <button class="btn primary block" type="submit" value="start">はじめる</button>
      </form>
      <a class="btn soft block" href="./region.html" style="margin-top:10px">地域の地図から街をつくる</a>`);
    return;
  }
  showDialog(`<h2>友達を街に呼ぶ</h2>
    ${code ? `<div class="invite-card">
      <small>この街の招待コード</small><strong>${escape(code)}</strong>
      ${btn("招待リンクをコピー", "copy-invite", "primary")}
      <input id="invite-url" aria-label="招待リンク" readonly value="${escape(url.href)}">
    </div>` : ""}
    <form data-form="join" style="margin-top:14px">
      <label class="field">表示名<input name="name" maxlength="24" required value="${escape(state?.me.name ?? "")}" placeholder="あなたの名前"></label>
      <label class="field">招待コード<input name="code" maxlength="20" value="${escape(inviteFromUrl)}" placeholder="友達の招待コード"></label>
      <div class="row wrap"><button class="btn primary grow" type="submit" value="join">街に参加する</button>
        <button class="btn ghost grow" type="submit" value="new">新しい街を作る</button></div>
    </form>
    <a class="btn soft block" href="./region.html" style="margin-top:10px">地域の地図から街をつくる</a>`);
}

function openNameDialog() {
  if (!state) {
    openRoomDialog();
    return;
  }
  showDialog(`<h2>表示名を変える</h2>
    <p>街のみんなに表示される名前です。</p>
    <form data-form="rename">
      <label class="field">表示名<input name="name" maxlength="24" required autofocus value="${escape(current().name)}"></label>
      <button class="btn primary block" type="submit">保存する</button>
    </form>`);
  $("dialog-content").querySelector('input[name="name"]')?.select();
}

// ---- Designing a building wall by wall --------------------------------------------------

// Shows the 3D view what is being drawn: the lines of the tools at once, the building itself
// a moment after the last change (a building takes longer to put up than a line to draw).
function pushDraft() {
  const editor = studio?.editor;
  if (!editor) return;
  scene?.setSketch(editor.sketch());
  syncVR();
  const houseId = studio.house.id;
  const fresh = designDraft?.houseId !== houseId;
  if (!fresh && designDraft.stamp === editor.stamp) {
    if (designDraft.level !== editor.level) {
      designDraft = { ...designDraft, level: editor.level };
      update();
    }
    return;
  }
  const apply = () => {
    draftTimer = 0;
    if (studio?.editor !== editor) return;
    designDraft = { houseId, design: editor.snapshot(), stamp: editor.stamp, level: editor.level };
    update();
  };
  clearTimeout(draftTimer);
  if (fresh) apply();
  else draftTimer = setTimeout(apply, 110);
}

function makeStudio() {
  studio = createStudio($("studio"), {
    onDraft: pushDraft,
    onLayout: syncInsets,
    notify,
    confirm: confirmDialog,
    // Saves the drawing; resolves with the building as the town now has it, or null.
    async onSave(home, design) {
      try {
        await action("design", { houseId: home.id, design, base: home.rev ?? 0 });
        notify("設計を保存しました。");
        return getHouse(home.id);
      } catch (error) {
        console.error(error);
        if (error.stale) {
          await refresh().catch(() => {});
          notify("ほかの人がこの建物を変更しました。設計を閉じて、開き直してください。");
        } else notify(error.message === "Failed to fetch" ? "街との通信が切れました。もう一度お試しください。" : error.message);
        return null;
      }
    },
    onRevert(home) {
      run(async () => {
        await action("design", { houseId: home.id, design: null });
        studio.discard();
        notify("かんたん間取りに戻しました。");
      });
    },
    onClose() {
      clearTimeout(draftTimer);
      designDraft = null;
      vrPage = "home";
      scene?.setSketch(null);
      renderKey = "";
      update();
    },
  });
}

function openStudio(id) {
  const home = getHouse(id);
  if (!home?.canEdit || !studio) return;
  selectedHouse = id;
  building = selection = null;
  vrPage = "design";
  studio.open(home, `${houseTitle(home)}・${STYLE_LABELS[home.style]}`);
  // In a headset the building is designed standing in it.
  if (scene?.vr.active()) scene.visit(id);
  update();
}

// ---- The menu a hand holds in VR ----------------------------------------------------------
//
// In a headset the page cannot be seen, so the same commands are offered on a panel in the
// town itself. This says what is on it; the 3D view draws it and tells which button was pressed.

let vrPage = "home";
let vrPalette = 0;
const PER_PAGE = 12;

function vrChoices() {
  const editor = studio.editor;
  const { options, tool } = editor;
  const pick = (group, key, entries, chosen) => entries.map(([value, label]) => ({
    label, action: "design-option", data: { group, key, value: String(value) }, active: String(chosen) === String(value),
  }));
  const finishes = (groups) => Object.entries(FINISHES).filter(([, finish]) => groups.includes(finish.group)).map(([id, finish]) => [id, finish.label]);
  if (tool === "wall") return { label: "壁の種類と外側の仕上げ", buttons: [...pick("wall", "kind", Object.entries(WALL_KINDS), options.wall.kind), ...pick("wall", "out", finishes(["wall"]), options.wall.out)] };
  if (tool === "opening") return { label: "扉・窓の種類", buttons: pick("opening", "k", Object.entries(OPENINGS).filter(([id]) => id !== "lift-door").map(([id, kind]) => [id, kind.label]), options.opening.k) };
  if (tool === "item") return { label: "家具の種類", buttons: pick("item", "k", Object.entries(ITEMS).map(([id, kind]) => [id, `${ITEM_GROUPS[kind.group]?.[0] ?? ""}｜${kind.label}`]), options.item.k) };
  if (tool === "paint") return { label: "仕上げ", buttons: pick("paint", "f", finishes(["paper", "wall", "floor", "ceiling", "roof"]), options.paint.f) };
  if (tool === "decor") return { label: "壁掛けの種類", buttons: pick("decor", "k", Object.entries(WALL_DECOR).map(([id, kind]) => [id, kind.label]), options.decor.k) };
  if (tool === "stair") return { label: "階段の形", buttons: [...pick("stair", "shape", [["path", "直線・折れ"], ["spiral", "らせん"]], options.stair.shape), ...pick("stair", "turn", [["landing", "踊り場で曲がる"], ["winder", "回り段で曲がる"]], options.stair.turn)] };
  if (tool === "lift") return { label: "扉の向き", buttons: pick("lift", "r", [[0, "南"], [90, "東"], [180, "北"], [270, "西"]], options.lift.r) };
  return null;
}

function vrMenu() {
  const me = current();
  if (designing()) {
    const editor = studio.editor;
    const choices = vrChoices();
    const sections = [
      { label: "道具", columns: 5, buttons: Object.entries(TOOLS).map(([id, label]) => ({ label, action: "design-tool", data: { id }, active: editor.tool === id })) },
    ];
    if (choices) {
      const pages = Math.max(1, Math.ceil(choices.buttons.length / PER_PAGE));
      vrPalette = Math.min(vrPalette, pages - 1);
      sections.push({
        label: pages > 1 ? `${choices.label}（${vrPalette + 1}/${pages}）` : choices.label, columns: 3,
        buttons: [...choices.buttons.slice(vrPalette * PER_PAGE, (vrPalette + 1) * PER_PAGE),
          ...(pages > 1 ? [{ label: "◀ 前", action: "vr-palette", data: { id: "-1" }, disabled: vrPalette === 0 }, { label: "次 ▶", action: "vr-palette", data: { id: "1" }, disabled: vrPalette >= pages - 1 }] : [])],
      });
    }
    sections.push({
      label: "編集", columns: 4, buttons: [
        { label: "元に戻す", action: "design-undo", disabled: !editor.canUndo() },
        { label: "やり直す", action: "design-redo", disabled: !editor.canRedo() },
        { label: "回す", action: "design-rotate" },
        { label: "選択を消す", action: "design-remove", disabled: !editor.selection || editor.selection.type === "room" },
        ...(editor.draft ? [{ label: "線を確定", action: "design-commit", active: true }] : []),
      ],
    }, {
      label: `階（いま${editor.level + 1}階／${editor.design.storeys.length}階建て）`, columns: 4, buttons: [
        { label: "▲ 上の階", action: "design-level", data: { id: "1" }, disabled: editor.level + 1 >= editor.design.storeys.length },
        { label: "▼ 下の階", action: "design-level", data: { id: "-1" }, disabled: editor.level === 0 },
        { label: "階を増やす", action: "design-add-storey", disabled: editor.design.storeys.length >= editor.most },
        ...(editor.editable ? [] : [{ label: "この階だけ変える", action: "design-materialize" }]),
      ],
    }, {
      label: "設計", columns: 2, buttons: [
        { label: editor.dirty ? "保存する" : "保存済み", action: "design-save", disabled: !editor.dirty, active: editor.dirty },
        { label: "設計を終える", action: "design-close" },
      ],
    });
    return { title: "設計スタジオ", subtitle: studio.house ? houseTitle(studio.house) : "", hint: "トリガーで床を指して描きます。グリップで階を移動します。", sections };
  }
  const here = getHouse(place?.id);
  const mine = (state?.houses ?? []).filter((house) => house.canEdit).slice(0, 4);
  const sections = [];
  const spot = [];
  if (door) {
    spot.push({ label: door.open ? "扉を閉める" : door.locked && !door.key ? "鍵がかかっています" : "扉を開ける", action: "use-door", disabled: !door.open && door.locked && !door.key });
    if (door.lock && door.key) spot.push({ label: door.locked ? "鍵を開ける" : "鍵をかける", action: "use-lock" });
  }
  if (lift) spot.push(...lift.levels.map((level) => ({ label: `${level + 1}階へ`, action: "ride", data: { id: String(level) }, active: (lift.target ?? lift.level) === level, disabled: lift.level === null })));
  else if (place && place.levels > 1) {
    spot.push({ label: "▲ 上の階", action: "floor", data: { id: "1" }, disabled: place.level + 1 >= place.levels },
      { label: "▼ 下の階", action: "floor", data: { id: "-1" }, disabled: place.level === 0 });
  }
  if (place) spot.push({ label: "外に出る", action: "leave-home" });
  if (spot.length) sections.push({ label: ride ? `その場で｜${ride.text}` : "その場で", columns: 3, buttons: spot });
  sections.push({
    label: "行き先", columns: 3, buttons: [
      { label: "広場へ", action: "go-plaza" }, ...(town().shop ? [{ label: "服屋へ", action: "open-shop" }] : []),
      ...mine.slice(0, 1).map((house) => ({ label: `${kinds[house.kind]}へ`, action: "enter-home", data: { id: house.id } })),
    ],
  });
  const designs = here?.canEdit ? [here] : mine;
  if (designs.length) {
    sections.push({ label: "家を設計する", columns: 2, buttons: designs.map((house) => ({ label: `${houseTitle(house)}を設計`, action: "design-home", data: { id: house.id } })) });
  }
  sections.push({
    label: "そのほか", columns: 3, buttons: [
      { label: voice.enabled() ? "マイクを切る" : "マイクを入れる", action: "mic", active: voice.enabled() },
      { label: transitPreview ? "モノレール試運転をやめる" : "モノレール試運転", action: "toggle-transit", active: transitPreview },
      { label: "VRを終える", action: "vr" },
    ],
  });
  return { title: "まちのとなり", subtitle: `${me.name}｜${fmt(me.coins)}コイン`, hint: "トリガーで指した場所へ移動します。A・B・X・Yでメニューを開閉します。", sections };
}

function syncVR() {
  if (scene?.vr.active() && scene.vr.setMenu) scene.vr.setMenu(vrMenu());
}

// ---- Walking about the town -----------------------------------------------------------

function openShop() {
  if (town().shop) scene?.visit("shop", { inside: true });
  openPanel("shop", panelOpen || !narrow());
}

// The 3D view reports walking into a building, out of it, or to another storey.
function enterPlace(next) {
  const before = place;
  place = next;
  if (inShop() && before?.kind !== "shop") openPanel("shop", !narrow());
  else if (!inShop() && before?.kind === "shop" && activeTab === "shop") openPanel("guide", panelOpen);
  else {
    if (next && getHouse(next.id)) selectedHouse = next.id;
    update();
  }
}

// `exact` is the precise spot that was pointed at; `byHand` is a VR controller, which acts at once.
function clickTarget(target, exact, byHand = false) {
  const { x, z, kind, id } = target;
  const direct = byHand || scene?.camera() === "first";
  if (activeTab === "district" && panelOpen && !building && !byHand && regionApp.pick(exact ?? { x, z })) return;
  if (activeTab === "edit" && canEdit() && !building) {
    if (selection) clickTile({ x, z }, exact);
    else if (["road", "shop", "cafe"].includes(kind)) {
      if (kind === "road" && matches({ x, z }, town().plaza)) return;
      selection = { target: kind, from: { x, z } };
      update();
    }
    return;
  }
  if (building) {
    clickTile({ x, z }, exact);
  } else if (kind === "shop" || kind === "cafe" || kind === "station") {
    // A hand in VR points and arrives; everyone else walks up to the door and in.
    if (byHand) scene?.visit(id);
    else scene?.walkInto(id);
  } else if (getHouse(id)) {
    selectedHouse = id;
    planFloor = 0;
    if (byHand) scene?.visit(id);
    else scene?.walkInto(id);
    if (!direct && !narrow()) openPanel("home", panelOpen);
  } else {
    clickTile({ x, z }, exact, byHand);
  }
}

function clickTile({ x, z }, exact, byHand = false) {
  if (activeTab === "district" && panelOpen && !building && !byHand && regionApp.pick(exact ?? { x, z })) return;
  if (building) {
    run(async () => {
      const plan = building;
      const before = new Set((state?.houses ?? []).map((home) => home.id));
      await action("build", { kind: plan.kind, style: plan.style, w: plan.w, d: plan.d, x, z, ...(await regionApp.buildExtras({ x, z, w: plan.w, d: plan.d })) });
      selectedHouse = state.houses.find((home) => !before.has(home.id))?.id ?? null;
      planFloor = 0;
      building = null;
      // A bare lot is there to be drawn on: the studio opens on it at once.
      if (plan.style === "brutal" && selectedHouse && !scene?.vr.active()) {
        notify("更地を用意しました。壁を引いて、建物を設計しましょう。");
        openStudio(selectedHouse);
      } else {
        notify(`${STYLE_LABELS[plan.style]}が建ちました。「設計する」で壁一枚から作り変えられます。`);
        openPanel("home", panelOpen || !narrow());
      }
    });
  } else if (activeTab === "edit" && canEdit()) {
    if (!selection) {
      if (town().roads.some((r) => matches(r, { x, z })) && !matches({ x, z }, town().plaza)) {
        selection = { target: "road", from: { x, z } };
        update();
      }
      return;
    }
    const { target, from } = selection;
    if (matches(from, { x, z })) return;
    run(async () => {
      await editTown({ target, from, to: { x, z } });
    });
  } else if (exact) {
    if (byHand) scene?.teleport(exact.x, exact.z);
    else walkTo(exact);
  }
}

function walkTo(point) {
  if (state && point) scene?.walkTo(point.x, point.z);
}

// The 3D view reports where the resident has walked; the newest position is what gets sent.
function reportMove(next) {
  const moved = !position || position.x !== next.x || position.y !== next.y || position.z !== next.z;
  position = next;
  if (moved && !scene?.vr.active()) {
    drawMap();
    regionApp.moved(next);
  }
  // (While the region of a region town is still being made, the 3D view shows no town: nothing to send.)
  if (state && regionApp.sceneTown(town())) presence?.push({ ...next, warp: next.warp ?? current().warp ?? 0, layout: state.layout });
}

async function run(task) {
  try {
    return await task();
  } catch (error) {
    console.error(error);
    notify(error.message === "Failed to fetch" ? "街との通信が切れました。もう一度お試しください。" : error.message);
  }
}

// Buildings are walked into; these buttons only save the walk.
function enterHome(id) {
  // To the front door: it is opened by hand, by whoever has its key or finds it unlocked.
  if (scene?.visit(id)) selectedHouse = id;
}

function leaveHome() {
  if (place) scene?.visit(place.id);
}

async function editTown(args, type = "town") {
  try {
    await action(type, args);
  } catch (error) {
    if (!error.needsConfirmation) throw error;
    pendingTownEdit = { type, args };
    showDialog(`<h2>道路のつながりを確認</h2>
      ${error.warnings.map((warning) => `<p>${escape(warning)}</p>`).join("")}
      <div class="row wrap">${btn("この配置で保存", "confirm-town", "primary")}
      ${btn("戻る", "close-dialog", "ghost")}</div>`);
    return;
  }
  selection = null;
  pendingTownEdit = null;
  notify(type === "undo" ? "街の配置を元に戻しました。" : "街の配置を更新しました。");
  update();
}

async function changeMic() {
  if (!token) throw new Error("街に接続してからマイクを使ってください。");
  const value = !voice.enabled();
  try {
    await voice.setEnabled(value);
    await action("mic", { muted: !value });
  } catch (error) {
    await voice.setEnabled(false);
    throw Error(error.name === "NotAllowedError" ? "ブラウザでマイクの使用を許可してください。" : error.message);
  } finally {
    update();
  }
}

// ---- Bringing an avatar ---------------------------------------------------------------

function sendAvatarPart(path, body, { session, signal }, onProgress) {
  return new Promise((resolve, reject) => {
    signal.throwIfAborted();
    const xhr = new XMLHttpRequest();
    const abort = () => xhr.abort();
    xhr.upload.addEventListener("progress", (event) => onProgress(Math.min(body.size, event.loaded)));
    xhr.upload.addEventListener("load", () => onProgress(body.size));
    xhr.open("PUT", new URL(path, apiBase));
    xhr.responseType = "json";
    xhr.setRequestHeader("Authorization", `Bearer ${session}`);
    xhr.setRequestHeader("Content-Type", "model/gltf-binary");
    xhr.addEventListener("load", () => {
      if (xhr.status < 200 || xhr.status >= 300) reject(responseError(xhr.status, xhr.response));
      else if (!xhr.response) reject(new Error("アップロード結果を確認できませんでした。"));
      else resolve(xhr.response);
    });
    xhr.addEventListener("error", () => reject(new Error("アバターの送信中に通信が切れました。")));
    xhr.addEventListener("abort", () => reject(signal.reason));
    xhr.addEventListener("loadend", () => signal.removeEventListener("abort", abort), { once: true });
    signal.addEventListener("abort", abort, { once: true });
    xhr.send(body);
  });
}

async function uploadAvatar(file, format, { id, session, signal }, onProgress) {
  const path = `./api/vrm/${id}`;
  const putPath = format === "glb" ? `${path}?format=glb` : path;
  const transfer = { session, signal };
  if (file.size <= vrmPartSize) {
    return sendAvatarPart(putPath, file, transfer, onProgress);
  }

  let upload;
  try {
    upload = await request(path, { method: "POST", session, signal });
  } catch (error) {
    if (error.status !== 405) throw error;
    return sendAvatarPart(putPath, file, transfer, onProgress);
  }

  const query = new URLSearchParams({ revision: upload.revision, uploadId: upload.uploadId });
  const parts = [];
  try {
    for (let offset = 0; offset < file.size; offset += vrmPartSize) {
      query.set("part", String(parts.length + 1));
      const body = file.slice(offset, offset + vrmPartSize);
      parts.push(await sendAvatarPart(`${path}?${query}`, body, transfer, (sent) => onProgress(offset + sent)));
    }
    query.delete("part");
    if (format === "glb") query.set("format", "glb");
    return await request(`${path}?${query}`, { method: "PATCH", body: { parts }, session, signal });
  } catch (error) {
    query.delete("part");
    await request(`${path}?${query}`, { method: "DELETE", session }).catch(() => {});
    throw error;
  }
}

function chooseAvatarModel(paths) {
  const dialog = $("dialog");
  if (dialog.open) dialog.close();
  showDialog(`<h2>アバターのモデルを選ぶ</h2>
    <form id="avatar-model-form">
      <label class="field">モデルのファイル<select name="model">
        ${paths.map((path) => `<option value="${escape(path)}">${escape(path)}</option>`).join("")}
      </select></label>
      <button class="btn primary block" type="submit">このモデルを読み込む</button>
    </form>`);
  return new Promise((resolve) => {
    const form = $("avatar-model-form");
    let selected = null;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      selected = new FormData(form).get("model");
      dialog.close();
    }, { once: true });
    dialog.addEventListener("close", () => resolve(selected), { once: true });
  });
}

function chooseFbxOptions({ parts, materialOptions, imagePaths }) {
  const dialog = $("dialog");
  const modes = {
    always: "常に表示", hidden: "非表示", afk: "離席中だけ表示", active: "通常時だけ表示",
    toggle: "ギミックメニューで切り替え", linked: "元の表情メニューの設定を使う",
  };
  const additionalImages = new Map();
  const choices = [...imagePaths];
  const imageOptions = (selected) => '<option value="">元の材質設定を使う</option>' +
    choices.map((path) => `<option value="${escape(path)}" ${path === selected ? "selected" : ""}>${escape(path)}</option>`).join("");

  showDialog(`<h2>FBXの読み込み設定</h2>
    <form id="fbx-options">
      ${materialOptions.length ? `<fieldset class="stack"><legend>テクスチャ</legend>
        <label class="field">画像を追加<input id="fbx-images" type="file" multiple accept=".png,.jpg,.jpeg,.webp,.bmp,.gif"></label>
        ${materialOptions.map(({ id, name, texturePath }) => `<label class="field import-option">${escape(name)}
          <select name="material-${id}" data-material-image>${imageOptions(texturePath)}</select></label>`).join("")}
      </fieldset>` : ""}
      <fieldset class="stack"><legend>パーツの表示</legend>
        ${parts.map(({ id, name, mode }) => `<label class="field import-option">${escape(name)}
          <select name="part-${id}">
            ${Object.entries(modes).filter(([value]) => value !== "linked" || mode === "linked").map(([value, label]) =>
              `<option value="${value}" ${value === mode ? "selected" : ""}>${label}</option>`).join("")}
          </select></label>`).join("")}
      </fieldset>
      <p id="fbx-options-error" class="note warn" role="alert" hidden></p>
      <button type="submit" class="btn primary block">この設定で読み込む</button>
    </form>`);
  const form = $("fbx-options");
  $("fbx-images")?.addEventListener("change", (event) => {
    for (const file of event.target.files) {
      const key = `追加/${file.name}`;
      if (!additionalImages.has(key)) choices.push(key);
      additionalImages.set(key, file);
    }
    for (const select of form.querySelectorAll("[data-material-image]")) {
      const suggested = materialOptions.length === 1 && additionalImages.size === 1
        ? additionalImages.keys().next().value : "";
      select.innerHTML = imageOptions(select.value || suggested);
    }
  });
  return new Promise((resolve) => {
    let selected = null;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = new FormData(form);
      const visibility = new Map(parts.map(({ id }) => [id, values.get(`part-${id}`)]));
      if (![...visibility.values()].some((mode) => mode === "always" || mode === "active" || mode === "linked")) {
        const error = $("fbx-options-error");
        error.textContent = "通常時に表示するパーツを1つ以上選んでください。";
        error.hidden = false;
        return;
      }
      selected = {
        parts: visibility,
        materials: new Map(materialOptions.map(({ id }) => [id, values.get(`material-${id}`)])),
        images: additionalImages,
      };
      dialog.close();
    });
    dialog.addEventListener("close", () => resolve(selected), { once: true });
  });
}

async function importAvatar(files) {
  if (vrmUploading) return;
  if (!scene) throw new Error("アバターを読み込むには3D表示が必要です。");
  if (!token) throw new Error("街に接続してからアバターを読み込んでください。");
  const generation = sessionGeneration;
  avatarUpload = new AbortController();
  const { signal } = avatarUpload;
  const uploadSession = { id: current().id, session: token, signal };
  const load = (message, received, total) => {
    if (!signal.aborted) setAvatarLoad("upload", { name: "自分のアバター", message, received, total });
  };
  let url;
  vrmUploading = true;
  update();
  try {
    load("ファイルを確認中");
    const { prepareAvatar } = await import("./avatar-import.js?v=online-1794980046418");
    const model = await prepareAvatar(files, chooseAvatarModel, load, chooseFbxOptions);
    if (!model || generation !== sessionGeneration) return;
    url = URL.createObjectURL(model.blob);
    load("表示を準備中");
    await scene.loadVRM(url, { allowModel: model.format === "glb", signal });
    if (generation !== sessionGeneration) return;
    load("送信中", 0, model.blob.size);
    const result = await uploadAvatar(model.blob, model.format, uploadSession, (sent) => {
      if (sent >= model.blob.size) load("街に反映中");
      else load("送信中", sent, model.blob.size);
    });
    if (generation !== sessionGeneration) return;
    accept(result.state, generation);
    notify("アバターに着替えました。");
  } catch (error) {
    if (generation !== sessionGeneration) return;
    if (url) scene.clearVRM();
    throw new Error(error.message || "アバターを読み込めませんでした。");
  } finally {
    if (url) URL.revokeObjectURL(url);
    avatarUpload = null;
    setAvatarLoad("upload", null);
    vrmUploading = false;
    update();
  }
}

function refresh() {
  const generation = sessionGeneration;
  if (stateRequest?.generation === generation) return stateRequest.promise;
  const signal = AbortSignal.timeout(7500);
  const promise = request("./api/state", { after: lastSignal, signal }).then((result) => {
    accept(result.state, generation);
  }).finally(() => {
    if (stateRequest?.promise === promise) stateRequest = null;
  });
  stateRequest = { generation, promise };
  return promise;
}

// ---- Commands ---------------------------------------------------------------------------
//
// Every button of the page says what it does with `data-action`; the menu a hand holds in VR
// sends the same names. `data` is whatever else the button carries (its `data-…` values).

const typed = (value) => (/^-?\d+(\.\d+)?$/.test(value) ? Number(value) : value);

const handlers = {
  room: openRoomDialog,
  rename: openNameDialog,
  people: () => openPanel("guide"),
  "close-panel": () => {
    panelOpen = false;
    update();
  },
  "toggle-afk": () => action("afk", { enabled: !current().afk }),
  "avatar-expression": ({ id }) => {
    const me = current();
    const control = me.avatarExpressions?.find((item) => item.id === id);
    if (!control) return;
    if (control.kind === "button") scene?.pressAvatar(id);
    return action("expression", {
      id, revision: me.vrm, enabled: control.kind === "button" || me.avatarExpressionValues?.[id] !== true,
    });
  },
  "close-dialog": () => $("dialog").close(),
  "copy-invite": async () => {
    const input = $("invite-url");
    if (!input) return;
    try {
      await navigator.clipboard.writeText(input.value);
      notify("招待リンクをコピーしました。");
    } catch {
      input.focus();
      input.select();
      notify("選択したリンクをコピーしてください。");
    }
  },
  mic: changeMic,
  silence: ({ id }) => { voice.togglePlayer(id); update(); },
  "open-shop": openShop,
  "leave-shop": () => { scene?.visit("shop"); },
  "open-homes": () => openPanel("home"),
  "home-detail": ({ id }) => { selectedHouse = selectedHouse === id ? null : id; planFloor = 0; update(); },
  "design-home": ({ id }) => openStudio(id),
  "cancel-build": () => { building = null; update(); },
  "plan-floor": ({ id }) => { planFloor = Number(id); update(); },
  brush: ({ id }) => { brush = id; update(); },
  "reset-plan": async ({ id }) => {
    const answer = await confirmDialog({
      title: "標準の間取りに戻す", text: "いまの間取り（詳細設計を含む）を捨てて、この様式の標準の間取りに戻します。",
      actions: [["reset", "戻す", "danger"], ["cancel", "やめる", "ghost"]],
    });
    if (answer !== "reset") return;
    await action("remodel", { houseId: id, reset: true });
    notify("標準の間取りに戻しました。");
  },
  demolish: ({ id }) => {
    const home = getHouse(id);
    if (!home) return;
    showDialog(`<h2>建物を取り壊す</h2>
      <p>${escape(houseTitle(home))}（${STYLE_LABELS[home.style]}）を取り壊します。間取りも消え、元には戻せません。</p>
      <div class="row wrap">${btn("取り壊す", "confirm-demolish", "danger", `data-id="${escape(id)}"`)}
      ${btn("やめる", "close-dialog", "ghost")}</div>`);
  },
  "confirm-demolish": async ({ id }) => {
    await action("demolish", { houseId: id });
    if (selectedHouse === id) selectedHouse = null;
    $("dialog").close();
    notify("建物を取り壊しました。");
  },
  expand: async ({ id }) => {
    await action("expand", { side: id, amount: 2 });
    notify(`街を広げました（${town().width}×${town().height}マス）。`);
  },
  view: ({ id }) => {
    viewMode = id;
    update();
    if (id === "first") notify(matchMedia("(pointer: coarse)").matches ? "画面をなぞると見回せます。" : "画面をクリックすると、マウスで見回せます（Escで解除）。");
  },
  floor: ({ id }) => { scene?.changeLevel(Number(id)); },
  ride: ({ id }) => { scene?.rideTo(Number(id)); },
  "use-door": () => { scene?.useDoor(); },
  "use-lock": () => { scene?.useLock(); },
  vr: async () => {
    if (!scene) return;
    if (scene.vr.active()) scene.vr.exit();
    else await scene.vr.enter();
  },
  "enter-home": ({ id }) => enterHome(id),
  "leave-home": leaveHome,
  "go-plaza": () => { scene?.teleport(town().plaza.x + 0.42, town().plaza.z + 0.42); },
  "select-shop": () => { selection = { target: "shop", from: town().shop }; update(); },
  "select-cafe": () => { selection = { target: "cafe", from: town().cafe }; update(); },
  "add-road": () => { selection = { target: "road" }; update(); },
  "remove-road": async () => {
    if (!selection?.from) return;
    await editTown({ target: "road", from: selection.from });
  },
  "confirm-town": async () => {
    if (!pendingTownEdit) return;
    const { type, args } = pendingTownEdit;
    await editTown({ ...args, confirmed: true }, type);
    $("dialog").close();
  },
  "cancel-edit": () => { selection = null; update(); },
  "end-edit": () => openPanel("guide", panelOpen && !narrow()),
  "editor-role": ({ id, allowed }) => action("editor", { playerId: id, allowed: allowed === "true" }),
  undo: () => editTown({}, "undo"),
  try: ({ id }) => {
    const item = itemFor(id);
    if (!item || !compatible(item)) return;
    preview = item;
    update();
  },
  buy: async ({ id }) => {
    const item = itemFor(id);
    if (!item || !compatible(item)) return;
    await action("buy", { item: id });
    await action("equip", { item: id });
    preview = null;
    notify(`${item.name}を購入しました。`);
    update();
  },
  equip: async ({ id }) => {
    if (!compatible(itemFor(id))) return;
    await action("equip", { item: id });
    preview = null;
    update();
  },
  unequip: async () => { await action("equip", { item: null }); preview = null; update(); },
  "remove-vrm": async () => {
    await request(`./api/vrm/${current().id}`, { method: "DELETE" });
    scene?.clearVRM();
    await refresh();
  },
  overview: () => {
    viewMode = viewMode === "overview" ? "follow" : "overview";
    update();
  },
  quality: ({ id }) => {
    scene?.setQuality(id);
    localStorage.setItem(qualityKey, id);
    update();
  },
  "toggle-transit": () => {
    transitPreview = !transitPreview;
    update();
    notify(transitPreview ? "モノレールの試運転を始めました（この画面だけに表示されます）。" : "モノレールの試運転をやめました。");
  },
  // The design tools, as the menu in VR works them.
  "design-tool": ({ id }) => {
    vrPalette = 0;
    studio.editor?.setTool(id);
  },
  "design-option": ({ group, key, value }) => studio.editor?.setOption(group, { [key]: typed(value) }),
  "design-undo": () => studio.editor?.undo(),
  "design-redo": () => studio.editor?.redo(),
  "design-rotate": () => studio.editor?.rotate(90),
  "design-remove": () => studio.editor?.remove(),
  "design-commit": () => studio.editor?.commitDraft(),
  "design-level": ({ id }) => studio.editor?.setLevel(studio.editor.level + Number(id)),
  "design-add-storey": () => {
    const editor = studio.editor;
    if (editor?.addStorey()) editor.setLevel(editor.design.storeys.length - 1);
  },
  "design-materialize": () => studio.editor?.materialize(),
  "design-save": () => studio.save(),
  // (In a headset nobody sees a question on the page: leaving the studio there saves first.)
  "design-close": async () => {
    if (!scene?.vr.active()) await studio.close();
    else if (!studio.editor?.dirty || await studio.save()) studio.discard();
  },
  "vr-palette": ({ id }) => { vrPalette = Math.max(0, vrPalette + Number(id)); },
};

document.addEventListener("click", (event) => {
  const control = event.target.closest("[data-action], #dock [data-tab]");
  if (!control || control.disabled) return;
  if (control.dataset.tab) {
    // The button of the open drawer closes it; any other opens its own.
    if (panelOpen && activeTab === control.dataset.tab) handlers["close-panel"]();
    else openPanel(control.dataset.tab);
  } else if (handlers[control.dataset.action]) run(() => handlers[control.dataset.action](control.dataset));
});

// Painting the floor plan: press on a cell and drag across others, then let go to save.
function paintCell(cell) {
  if (cell.dataset.code === brush) return;
  const x = Number(cell.dataset.x);
  const z = Number(cell.dataset.z);
  stroke.cells.set(`${x},${z}`, [x, z, brush]);
  cell.dataset.code = brush;
  cell.style.setProperty("--room", ROOM_COLORS[brush] ?? "transparent");
  cell.textContent = ROOM_LABELS[brush]?.[0] ?? "";
}

document.addEventListener("pointerdown", (event) => {
  const cell = event.target.closest?.(".plan-cell:not(:disabled)");
  const grid = cell?.closest(".plan-grid");
  if (!grid) return;
  stroke = { houseId: grid.dataset.house, floor: Number(grid.dataset.floor), cells: new Map(), grid };
  paintCell(cell);
  event.preventDefault();
});

document.addEventListener("pointermove", (event) => {
  if (!stroke) return;
  const cell = document.elementFromPoint(event.clientX, event.clientY)?.closest?.(".plan-cell:not(:disabled)");
  if (cell && stroke.grid.contains(cell)) paintCell(cell);
});

function endStroke() {
  if (!stroke) return;
  const { houseId, floor, cells } = stroke;
  stroke = null;
  if (!cells.size) return;
  run(() => action("plan", { houseId, floor, cells: [...cells.values()] })).finally(() => {
    // Whether it saved or was refused, show what the house really looks like now.
    renderKey = "";
    update();
  });
}
document.addEventListener("pointerup", endStroke);
document.addEventListener("pointercancel", endStroke);

// The on-screen stick for touch screens.
{
  const pad = $("joystick");
  const knob = pad?.querySelector("span");
  let held = null;
  const steer = (event) => {
    const box = pad.getBoundingClientRect();
    const reach = box.width / 2;
    let x = (event.clientX - box.left - reach) / reach;
    let y = (event.clientY - box.top - reach) / reach;
    const length = Math.hypot(x, y);
    if (length > 1) {
      x /= length;
      y /= length;
    }
    knob.style.translate = `${x * reach * 0.6}px ${y * reach * 0.6}px`;
    scene?.setJoystick(x, -y);
  };
  const rest = (event) => {
    if (event.pointerId !== held) return;
    held = null;
    knob.style.translate = "0 0";
    scene?.setJoystick(0, 0);
  };
  pad?.addEventListener("pointerdown", (event) => {
    held = event.pointerId;
    // Capture keeps the stick following the finger when it slides off the pad.
    try {
      pad.setPointerCapture(held);
    } catch {
      // Not every pointer can be captured; the stick still works while the finger stays on it.
    }
    steer(event);
    event.preventDefault();
  });
  pad?.addEventListener("pointermove", (event) => {
    if (event.pointerId === held) steer(event);
  });
  pad?.addEventListener("pointerup", rest);
  pad?.addEventListener("pointercancel", rest);
}

// Mouths move with each resident's voice.
setInterval(() => scene?.setVoiceLevels(voice.levels(current().id)), 70);

document.addEventListener("submit", (event) => {
  const mode = event.target.dataset.form;
  if (!mode) return;
  event.preventDefault();
  const data = new FormData(event.target);
  if (mode === "join") {
    run(async () => {
      const code = String(data.get("code") ?? "").trim().toUpperCase();
      const intent = event.submitter?.value;
      const creating = intent === "new" || (intent === "start" && !code);
      if (!creating && !code) throw new Error("招待コードを入力してください。");
      if (!creating && token && state?.code === code) { $("dialog").close(); return; }
      const name = String(data.get("name")).trim();
      if (designing()) studio.discard();
      const result = await join(name, creating ? "" : code);
      if (!result) return;
      // Rejoining a town restores the earlier resident, so apply the name typed in the form.
      if (current().name !== name) await action("rename", { name });
      $("dialog").close();
      notify(creating ? "新しい街を作りました。" : "街に参加しました。");
    });
  } else if (mode === "rename") {
    run(async () => {
      await action("rename", { name: String(data.get("name") ?? "").trim() });
      $("dialog").close();
      notify("表示名を変更しました。");
    });
  } else if (mode === "build") {
    const [w, d] = String(data.get("size")).split("x").map(Number);
    buildChoice = { kind: data.get("kind"), style: data.get("style"), size: data.get("size") };
    building = { kind: buildChoice.kind, style: buildChoice.style, w, d };
    selectedHouse = null;
    // On a phone the drawer steps aside, so that the town can be seen and touched.
    if (narrow()) panelOpen = false;
    update();
    notify("建てる場所を、街の空き地から選んでください。");
  }
});

document.addEventListener("change", (event) => {
  const control = event.target;
  if (control.closest("#studio")) return;
  if (control.id === "avatar-file" && control.files.length) {
    const files = Array.from(control.files);
    control.value = "";
    run(() => importAvatar(files));
  } else if (control.dataset.slider) {
    run(() => action("expression", {
      id: control.dataset.slider, revision: current().vrm, value: Number(control.value) / 100,
    }));
  } else if (control.dataset.setting === "sound" || control.dataset.setting === "voice") {
    settings[control.dataset.setting] = control.checked;
    localStorage.setItem(settingsKey, JSON.stringify(settings));
    scene?.setSound?.(settings);
    update();
  } else if (control.dataset.setting === "key") {
    run(async () => {
      await action("key", { houseId: control.dataset.id, playerId: control.dataset.player, lock: control.value || null });
      notify(control.value ? "鍵を渡しました。" : "鍵を返してもらいました。");
    }).finally(() => {
      renderKey = "";
      update();
    });
  } else if (control.dataset.setting === "style" || control.dataset.setting === "floors") {
    const value = control.dataset.setting === "floors" ? Number(control.value) : control.value;
    run(() => action("remodel", { houseId: control.dataset.id, [control.dataset.setting]: value })).finally(() => {
      planFloor = 0;
      renderKey = "";
      update();
    });
  } else if (control.closest('[data-form="build"]')) {
    const form = control.closest("form");
    buildChoice = { kind: form.elements.kind.value, style: form.elements.style.value, size: form.elements.size.value };
  }
});

document.addEventListener("keydown", (event) => {
  if (event.target.closest("input, textarea, select") || $("dialog").open || designing()) return;
  if (event.key === "Escape") {
    if (building || selection) { building = selection = null; update(); }
    else if (preview) { preview = null; update(); }
  } else if (event.key.toLowerCase() === "v" && !event.ctrlKey && !event.metaKey) {
    // V flips between walking behind the avatar and seeing through its eyes.
    handlers.view({ id: viewMode === "first" ? "follow" : "first" });
  } else if (event.key === "PageUp" || event.key === "PageDown") {
    event.preventDefault();
    scene?.changeLevel(event.key === "PageUp" ? 1 : -1);
  }
});

$("dialog").addEventListener("close", () => {
  if (!token && !joining) notify("「接続」から名前を決めて街に入れます。");
});

let wasNarrow = narrow();
window.addEventListener("resize", () => {
  // Turning a phone, or pulling a window narrow: the drawer keeps out of the way of the town.
  if (narrow() !== wasNarrow) {
    wasNarrow = narrow();
    if (wasNarrow) panelOpen = false;
    update();
  } else syncInsets();
});

async function boot() {
  makeScene();
  makeStudio();
  update();
  try {
    if (token) {
      try {
        await refresh();
        startPresence();
        if (!current().muted) await action("mic", { muted: true });
      } catch (error) {
        if (error.status !== 401) throw error;
        localStorage.removeItem(sessionKey);
        token = "";
      }
    }
    if (!state || (inviteFromUrl && state.code !== inviteFromUrl.toUpperCase())) openRoomDialog();
  } catch (error) {
    console.error(error);
    notify("街に接続できませんでした。「接続」から入り直してください。");
  }
  tick();
}

boot();
