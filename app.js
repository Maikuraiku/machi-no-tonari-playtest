import { initScene } from "./scene.js?v=6";
import { connectPresence } from "./presence.js?v=2";
import { createVoice } from "./voice.js";
import { ROOM_COLORS, ROOM_LABELS, STYLE_FLOORS, STYLE_LABELS } from "./world/design.js";

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
  width: 18, height: 14, originX: 0, originZ: 0, plaza, shop: { x: 8, z: 3 }, cafe: { x: 12, z: 4 }, roads: roadCells,
};
const initialMe = { id: "local", name: "あなた", ...plaza, y: 0, coins: 500, owned: [] };
const inviteFromUrl = new URL(location.href).searchParams.get("join") ?? "";
const sessionKey = "machi-no-tonari:session";
const qualityKey = "machi-no-tonari:quality";
let token = localStorage.getItem(sessionKey) ?? "";
let state = null;
let activeTab = "guide";
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

const current = () => state?.me ?? initialMe;
const town = () => state?.town ?? initialTown;
const catalog = () => state?.catalog ?? [];
const isHost = () => state?.hostId === current().id;
const canEdit = () => state?.town.canEdit ?? isHost();
const getHouse = (id) => state?.houses.find((home) => home.id === id);
const inShop = () => place?.kind === "shop";
const itemFor = (id) => catalog().find((item) => item.id === id);
const isAccessory = (item) => ["hat", "glasses", "accessory"].includes(item?.kind);
const compatible = (item) => !current().vrm || isAccessory(item);
const matches = (a, b) => a && b && a.x === b.x && a.z === b.z;
const formatter = new Intl.NumberFormat("ja");
const fmt = (value) => formatter.format(value);

function setText(id, value) {
  const node = $(id);
  if (node) node.textContent = value;
}

function notify(message) {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add("visible", "is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("visible", "is-visible");
    toast.hidden = true;
  }, 3500);
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

function responseError(status, data) {
  const message = status === 413 ? "サーバーが送信データを受け付けられませんでした。" : "街との通信に失敗しました。";
  return Object.assign(new Error(data?.error ?? message), data, { status });
}

async function request(path, { body, method, session = token, after, signal } = {}) {
  const url = new URL(path, apiBase);
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
  const response = await fetch(url, { method: method ?? (payload ? "POST" : "GET"), headers, body: payload, signal });
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

function startPresence() {
  presence?.close();
  clearTimeout(voiceTimer);
  voiceTimer = null;
  motionFrame = null;
  const generation = sessionGeneration;
  const session = token;
  presence = connectPresence({
    url: new URL("./api/presence", apiBase),
    token: session,
    read: (after, signal) => request(after === undefined ? "./api/presence" : `./api/presence?after=${after}`, { session, signal }),
    write: (body, signal) => request("./api/presence", { body, session, signal }),
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
    setTab("guide");
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
function makeScene() {
  try {
    scene = initScene($("scene"), {
      onTile: clickTile,
      onTarget: clickTarget,
      onMove: reportMove,
      onPlace: enterPlace,
      onVR: () => update(),
      onAvatarState: reportAvatar,
      onAvatarLoad: reportAvatarLoad,
    });
    const saved = localStorage.getItem(qualityKey);
    if (saved) scene.setQuality(saved);
    scene.setCamera(viewMode);
    scene.vr.supported().then((supported) => {
      vrReady = supported;
      update();
    });
  } catch (error) {
    console.error(error);
    notify("3D表示を読み込めませんでした。ブラウザの WebGL 設定を確認してください。");
  }
}

// The camera the game wants right now: editing looks down on the town, trying clothes moves in close.
function wantedCamera() {
  if (inShop() && preview) return "close";
  if (!place && (activeTab === "edit" || building)) return "overview";
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

// The always-visible controls: which camera, which storey, and VR when a headset is there.
function drawViewBar() {
  const bar = $("view-bar");
  if (!bar) return;
  const immersive = Boolean(scene?.vr.active());
  const key = JSON.stringify([viewMode, place, vrReady, immersive]);
  if (bar.dataset.key === key) return;
  bar.dataset.key = key;
  bar.innerHTML = `<div class="view-group" role="group" aria-label="視点">${Object.entries(cameraNames).map(([mode, label]) =>
    `<button type="button" data-action="view" data-id="${mode}" aria-pressed="${viewMode === mode}">${label}</button>`).join("")}</div>
    ${place && place.levels > 1 ? `<div class="view-group" role="group" aria-label="階の移動">
      <button type="button" data-action="floor" data-id="1" ${place.level + 1 < place.levels ? "" : "disabled"} aria-label="上の階へ">▲</button>
      <span>${place.level + 1}階</span>
      <button type="button" data-action="floor" data-id="-1" ${place.level > 0 ? "" : "disabled"} aria-label="下の階へ">▼</button>
    </div>` : ""}
    ${vrReady ? `<div class="view-group"><button type="button" data-action="vr" aria-pressed="${immersive}">VR</button></div>` : ""}`;
}

const ownerName = (house) => state?.players.find((player) => player.id === house.ownerId)?.name ?? "住人";
const houseTitle = (house) => (house.ownerId === current().id ? kinds[house.kind] : `${ownerName(house)}の${kinds[house.kind]}`);

function update() {
  const me = current();
  const home = getHouse(place?.id);
  scene?.update({
    session: sessionGeneration,
    player: avatar(me, 0),
    players: (state?.players ?? []).filter((player) => player.id !== me.id && player.online)
      .map((player, index) => avatar(player, index + 1)),
    town: town(),
    houses: (state?.houses ?? []).map((house) => ({ ...house, label: houseTitle(house) })),
    edit: !place && (activeTab === "edit" || Boolean(building)),
    selected: selection?.from ?? null,
    placing: building ? { w: building.w, d: building.d } : null,
  });
  scene?.setCamera(wantedCamera());
  scene?.setPreview(preview ? { outfit: preview, color: preview.color } : null);
  setText("balance", fmt(me.coins));
  setText("location-label", home ? `${houseTitle(home)} ${place.level + 1}階`
    : inShop() ? "服屋 ひだまり" : place?.kind === "cafe" ? "こもれび喫茶" : "ひだまり通り");
  setText("room-status", state?.code ? "招待" : "接続");
  drawViewBar();
  const micButton = $("mic-button");
  micButton?.classList.toggle("is-active", voice.enabled());
  micButton?.setAttribute("aria-pressed", String(voice.enabled()));
  setText("mic-label", voice.enabled() ? "マイク ON" : "ボイス");
  const status = $("online-count");
  if (status) status.textContent = `${state?.players.filter((player) => player.online).length ?? 1} 人`;
  drawMap();
  renderPanel();
}

function drawMap() {
  const map = $("minimap");
  if (!map) return;
  const ctx = map.getContext("2d");
  if (!ctx) return;
  const layout = town();
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
  ctx.fillStyle = "#e9dfc8";
  ctx.fillRect(left + layout.plaza.x * scale, top + layout.plaza.z * scale, scale, scale);
  for (const [place, color] of [[layout.shop, "#d58a74"], [layout.cafe, "#cdb06b"], ...((state?.houses ?? []).map((h) => [h, "#5f8f97"]))]) {
    if (!place) continue;
    ctx.fillStyle = color;
    ctx.fillRect(left + place.x * scale, top + place.z * scale, (place.w ?? 1) * scale, (place.d ?? 1) * scale);
  }
  const player = position ?? current();
  ctx.beginPath();
  ctx.arc(left + (player.x + .5) * scale, top + (player.z + .5) * scale, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = "#436964";
  ctx.fill();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 1;
  ctx.stroke();
}

function setTab(tab) {
  if (!["shop", "guide", "home", "edit", "avatar"].includes(tab)) return;
  if (activeTab !== tab && tab !== "shop") preview = null;
  if (tab !== "edit") selection = null;
  if (tab !== "home") building = null;
  activeTab = tab;
  renderKey = "";
  document.querySelectorAll("[data-tab]").forEach((node) => {
    const on = node.dataset.tab === tab;
    node.classList.toggle("active", on);
    node.classList.toggle("is-active", on);
    node.setAttribute("aria-pressed", String(on));
  });
  update();
}

const titles = {
  shop: ["WARDROBE", "服屋 ひだまり"],
  guide: ["TOWN GUIDE", "まちの案内"],
  home: ["MY HOMES", "家を建てる"],
  edit: ["TOWN BUILDER", "街の編集"],
  avatar: ["AVATAR", "アバター"],
};
const btn = (label, actionName, className = "button-secondary", attrs = "") =>
  `<button type="button" class="button ${className}" data-action="${actionName}" ${attrs}>${label}</button>`;

function renderPanel() {
  const node = $("panel-content");
  if (!node) return;
  const me = current();
  const loc = getHouse(place?.id);
  const key = JSON.stringify([activeTab, place, preview?.id, building, buildChoice, selection,
    selectedHouse, planFloor, brush, me.owned, me.equipped, me.vrm,
    me.avatarHasAfk, me.afk, me.avatarExpressions, me.avatarExpressionValues, vrmUploading, me.coins, me.name,
    state?.layout, state?.players.map((p) => [p.id, p.name, p.online, p.muted, voice.silenced(p.id)]),
    state?.editorIds, scene?.quality(), Boolean(state)]);
  // Repainting would cut a brush stroke short, so the panel waits until it ends.
  if (renderKey === key || stroke) return;
  renderKey = key;
  setText("panel-kicker", titles[activeTab][0]);
  setText("panel-title", titles[activeTab][1]);
  $("panel-icon")?.querySelector("use")?.setAttribute("href", `#i-${activeTab}`);
  if (activeTab === "guide") node.innerHTML = guide(loc);
  if (activeTab === "shop") node.innerHTML = shop();
  if (activeTab === "home") node.innerHTML = homes();
  if (activeTab === "edit") node.innerHTML = editor();
  if (activeTab === "avatar") renderWardrobe(node, me);
}

function guide(loc) {
  const goals = [
    [current().owned.length > 0, "服屋をのぞく", "試着して、好きな服を買ってみよう。", "open-shop", "shop", "blush"],
    [(state?.houses ?? []).some((h) => h.ownerId === current().id), "はじめての家", "空いている場所を選んで、自分の家を建てよう。", "open-homes", "home", "mint"],
    [state?.players.length > 1, "友達を呼ぶ", "招待リンクで同じ街に集まろう。", "room", "users", "blue"],
  ];
  const card = ([done, title, help, act, icon, color]) =>
    `<button type="button" class="card guide-card" data-action="${act}">
      <span class="guide-icon ${color}" aria-hidden="true">${done ? "✓" : `<svg class="icon"><use href="#i-${icon}"/></svg>`}</span>
      <span><strong>${title}</strong><small>${help}</small></span><svg class="icon guide-arrow"><use href="#i-arrow"/></svg>
    </button>`;
  // Towns made before the name prompt existed gave their first resident this placeholder name.
  const unnamed = state && current().name === "あなた";
  return `<p class="panel-intro">今日は、この街で何をしよう？</p>
    ${unnamed ? `<div class="stack guide-list">${card([false, "名前を決める",
      "友達の画面に表示される名前を決めよう。", "rename", "avatar", "blush"])}</div>` : ""}
    <div class="stack guide-list">
    ${goals.map(card).join("")}
    </div>
    <div class="panel-section">
      <p class="eyebrow">街にいる人</p>
      ${people()}
    </div>
    <div class="panel-section">
      <label class="field">画質<select data-setting="quality">${Object.entries(qualityNames).map(([value, label]) =>
        `<option value="${value}" ${scene?.quality() === value ? "selected" : ""}>${label}</option>`).join("")}</select></label>
      <p class="muted">「きれい」は海や窓に景色が映ります。動きが重いときは「軽い」にしてください。</p>
    </div>`;
}

function people() {
  const peers = (state?.players ?? []).filter((p) => p.id !== current().id && p.online);
  if (!peers.length) return `<p class="muted">いまはあなたが街にいます。</p>`;
  return peers.map((p) => `<div class="row resident"><span>${escape(p.name)}</span>
    ${btn(voice.silenced(p.id) ? "ミュート解除" : "ミュート", "silence", "button-ghost",
    `data-id="${escape(p.id)}"`)}</div>`).join("");
}

function shop() {
  if (!inShop()) return `<p class="panel-intro">お店に入ると、アバターに似合う服を試着できます。歩いて入るか、下のボタンで向かいましょう。</p>
    ${btn("服屋へ行く", "open-shop", "button-primary")}`;
  return `<p class="panel-intro">試着して、気に入った服を選びましょう。</p>
    <div class="item-grid">${catalog().map(shopCard).join("")}</div>
    ${current().vrm ? '<p class="muted">持ち込みアバターでは、対応する帽子を試着できます。</p>' : ""}
    <div class="panel-section">${btn("お店を出る", "leave-shop", "button-ghost")}</div>`;
}

function shopCard(item) {
  const owned = current().owned.includes(item.id);
  const selected = preview?.id === item.id;
  const valid = compatible(item);
  const attribute = `data-id="${escape(item.id)}"`;
  const icon = isAccessory(item) ? "i-hat" : "i-shirt";
  return `<div class="item-card card ${selected ? "selected" : ""}">
    <button type="button" class="item-swatch" style="--swatch:${escape(item.color)}" data-action="try" ${attribute}
      ${valid ? "" : "disabled"} aria-label="${escape(item.name)}を試着"><svg class="icon"><use href="#${icon}"/></svg></button>
    <strong>${escape(item.name)}</strong><small>${owned ? "購入済み" : valid ? `${fmt(item.price)} コイン` : "標準アバター用"}</small>
    ${valid ? btn(owned ? "着る" : selected ? "購入する" : "試着", owned ? "equip" : selected ? "buy" : "try",
    selected ? "button-primary" : "button-secondary", attribute) : ""}
    </div>`;
}

const option = (value, label, chosen) =>
  `<option value="${escape(value)}" ${String(value) === String(chosen) ? "selected" : ""}>${escape(label)}</option>`;
const houseButton = (house) => btn(`${escape(houseTitle(house))}・${STYLE_LABELS[house.style]}`, "home-detail",
  house.id === selectedHouse ? "button-primary" : "button-secondary", `data-id="${escape(house.id)}"`);

function homes() {
  const me = current();
  const houses = state?.houses ?? [];
  const loc = getHouse(place?.id);
  if (loc) return `${btn("外に出る", "leave-home", "button-primary")}${homeDetail(loc, true)}`;
  if (building) {
    return `<p class="panel-intro">${STYLE_LABELS[building.style]}（${building.w}×${building.d}マス）を建てる場所を、地図から選んでください。</p>
      ${btn("建築をキャンセル", "cancel-build", "button-ghost")}`;
  }
  const mine = houses.filter((house) => house.ownerId === me.id);
  const others = houses.filter((house) => house.ownerId !== me.id);
  const home = getHouse(selectedHouse);
  return `<p class="panel-intro">様式と敷地の広さを選んで建てます。間取りはあとから自由に変えられます。</p>
    <form data-form="build" class="stack card">
      <label class="field">使い方<select name="kind">${Object.entries(kinds).map(([value, label]) =>
        option(value, label, buildChoice.kind)).join("")}</select></label>
      <label class="field">様式<select name="style">${Object.entries(STYLE_LABELS).map(([value, label]) =>
        option(value, label, buildChoice.style)).join("")}</select></label>
      <label class="field">敷地<select name="size">${lotSizes.map(([w, d]) =>
        option(`${w}x${d}`, `${w}×${d}マス（約${w * 8}m×${d * 8}m）`, buildChoice.size)).join("")}</select></label>
      <button class="button button-primary" type="submit">建てる場所を選ぶ</button>
    </form>
    <p class="muted">自宅と別荘は招待した人だけが入れます。共同住宅は住人みんなで間取りを作り、個室は本人だけが変えられます。</p>
    ${mine.length ? `<div class="panel-section stack"><p class="eyebrow">自分の建物</p>${mine.map(houseButton).join("")}</div>` : ""}
    ${others.length ? `<div class="panel-section stack"><p class="eyebrow">街の建物</p>${others.map(houseButton).join("")}</div>` : ""}
    ${home ? homeDetail(home, false) : ""}`;
}

function planEditor(home, floor, inside) {
  const width = 5 * home.w;
  const mine = current().id;
  const rooms = [...Object.entries(ROOM_LABELS), [".", "空き"]].filter(([code]) => code !== "P" || home.kind === "shared");
  const tabs = home.floors.length > 1 && !inside ? `<div class="row floor-tabs">${home.floors.map((_, level) =>
    `<button type="button" class="chip" data-action="plan-floor" data-id="${level}" aria-pressed="${level === floor}">${level + 1}階</button>`).join("")}</div>` : "";
  const cells = Array.from(home.floors[floor], (code, index) => {
    const x = index % width;
    const z = Math.floor(index / width);
    const holder = home.owners?.[`${floor}:${x}:${z}`];
    const locked = Boolean(holder) && holder !== mine;
    return `<button type="button" class="plan-cell" data-x="${x}" data-z="${z}" data-code="${code}"
      style="--room:${ROOM_COLORS[code] ?? "transparent"}" ${locked ? "disabled" : ""}
      aria-label="${x + 1}列 ${z + 1}行 ${ROOM_LABELS[code] ?? "空き"}${locked ? "（ほかの住人の個室）" : ""}">${ROOM_LABELS[code]?.[0] ?? ""}</button>`;
  }).join("");
  return `${tabs}
    <div class="palette" role="group" aria-label="部屋の種類">${rooms.map(([code, label]) =>
      `<button type="button" class="swatch" data-action="brush" data-id="${code}" aria-pressed="${brush === code}"
        style="--room:${ROOM_COLORS[code] ?? "#ffffff"}">${label}</button>`).join("")}</div>
    <div class="plan-grid ${width > 10 ? "dense" : ""}" data-house="${escape(home.id)}" data-floor="${floor}" style="--columns:${width}"
      role="group" aria-label="${floor + 1}階の間取り">${cells}</div>
    <p class="muted">部屋の種類を選んで、マスをなぞると塗れます。下が敷地の手前（南）側です。玄関は外に面したマスに置くと入口になります。</p>`;
}

function homeDetail(home, inside) {
  const id = escape(home.id);
  const me = current();
  const owner = home.ownerId === me.id;
  const invitePlayers = (state?.players ?? []).filter((p) => p.id !== me.id);
  const memberIds = home.memberIds ?? [];
  const floor = Math.min(inside ? place?.level ?? 0 : planFloor, home.floors.length - 1);
  const storeys = Array.from({ length: STYLE_FLOORS[home.style] }, (_, index) => index + 1);
  return `<div class="panel-section stack">
    <p class="eyebrow">${escape(houseTitle(home))}・${STYLE_LABELS[home.style]}・${home.floors.length}階建て</p>
    ${!inside ? btn(home.canEnter ? "家に入る" : "招待が必要です", "enter-home", "button-primary",
    `data-id="${id}" ${home.canEnter ? "" : "disabled"}`) : ""}
    ${owner ? `<div class="row parts-row">
      <label class="field">様式<select data-setting="style" data-id="${id}">${Object.entries(STYLE_LABELS).map(([value, label]) =>
        option(value, label, home.style)).join("")}</select></label>
      <label class="field">階数<select data-setting="floors" data-id="${id}">${storeys.map((count) =>
        option(count, `${count}階`, home.floors.length)).join("")}</select></label></div>` : ""}
    ${!home.canEdit ? "" : home.design ? '<p class="muted">この建物は、壁一枚ずつの詳細設計で作られています。</p>' : planEditor(home, floor, inside)}
    ${owner ? `<p class="eyebrow">入室できる人</p>
      ${invitePlayers.length ? invitePlayers.map((p) =>
        `<div class="row resident"><span>${escape(p.name)}</span>
        ${btn(memberIds.includes(p.id) ? "招待を解除" : "招待する", "invite-home", "button-ghost",
        `data-id="${id}" data-player="${escape(p.id)}" data-allowed="${!memberIds.includes(p.id)}"`)}</div>`)
        .join("") : '<p class="muted">街の招待リンクを送ると、来客を選べます。</p>'}
      <div class="row">${btn("標準の間取りに戻す", "reset-plan", "button-ghost", `data-id="${id}"`)}
        ${btn("取り壊す", "demolish", "button-ghost", `data-id="${id}"`)}</div>` : ""}
    </div>`;
}

function editor() {
  if (place) return `<p class="panel-intro">建物の外に出てから編集できます。</p>
    ${btn("外に出る", "leave-home", "button-primary")}`;
  if (!canEdit()) return '<p class="panel-intro">街の管理者から編集権限を受け取ると、建物と道路を動かせます。</p>';
  const hint = selection?.target ? (selection.from ?
    "移動先のマスをクリックしてください。" : "道路を敷くマスをクリックしてください。") :
    "建物か道路をクリックし、移動先を選んでください。";
  return `<p class="panel-intro">${hint}</p><div class="stack">
    ${btn("服屋を動かす", "select-shop", "button-secondary")}
    ${btn("カフェを動かす", "select-cafe", "button-secondary")}
    ${btn("道路を追加", "add-road", "button-secondary")}
    ${selection?.target === "road" && selection.from ? btn("選んだ道路を取り除く", "remove-road", "button-ghost") : ""}
    ${btn("元に戻す", "undo", "button-ghost", town().canUndo ? "" : "disabled")}
    ${selection ? btn("選択を解除", "cancel-edit", "button-ghost") : ""}
    </div>
    <div class="panel-section stack">
      <p class="eyebrow">街を広げる（いま ${town().width}×${town().height}マス）</p>
      <div class="compass" role="group" aria-label="広げる方向">
        ${[["north", "北へ"], ["west", "西へ"], ["east", "東へ"], ["south", "南へ"]].map(([side, label]) =>
          btn(label, "expand", "button-secondary", `data-id="${side}"`)).join("")}
      </div>
      <p class="muted">押した方向へ2マス広がります（各辺48マスまで）。広げると「元に戻す」の履歴は消えます。</p>
    </div>
    ${isHost() && (state?.players.length ?? 0) > 1 ? `<div class="panel-section stack"><p class="eyebrow">街の共同編集者</p>
      ${state.players.filter((p) => p.id !== current().id).map((p) => {
        const allowed = (state.editorIds ?? []).includes(p.id);
        return `<div class="row resident"><span>${escape(p.name)}</span>${btn(allowed ? "権限を外す" : "編集を許可",
          "editor-role", "button-ghost", `data-id="${escape(p.id)}" data-allowed="${!allowed}"`)}</div>`;
      }).join("")}</div>` : ""}`;
}

function renderWardrobe(node, me) {
  // Keep the native picker connected while room updates refresh the wardrobe.
  if (!$("avatar-file")) {
    node.innerHTML = `<div class="stack">
      <p class="panel-intro">好きな姿で街へ出かけましょう。</p>
      <div class="row resident" id="avatar-resident"><span>表示名：<strong id="avatar-name"></strong></span>
        ${btn("変更", "rename", "button-ghost")}</div>
      <label class="field card upload-card">アバターを読み込む
        <input type="file" id="avatar-file" multiple aria-describedby="avatar-file-help">
        <small id="avatar-file-help">VRM・GLB・VRChat向けFBX／Unityパッケージ</small>
      </label>
      <p class="muted">「ブラウズ」から選べます。FBXと画像はまとめて選べます。</p>
      <div class="stack" id="avatar-controls"></div>
    </div>`;
  }
  $("avatar-resident").hidden = !state;
  setText("avatar-name", me.name);
  $("avatar-file").disabled = vrmUploading;
  setText("avatar-file-help", vrmUploading ? "読み込み中…" : "VRM・GLB・VRChat向けFBX／Unityパッケージ");
  $("avatar-controls").innerHTML = `${me.avatarHasAfk ? btn(me.afk ? "離席モードを解除" : "離席モードにする", "toggle-afk", "button-primary",
      `aria-pressed="${Boolean(me.afk)}" ${vrmUploading ? "disabled" : ""}`) : ""}
    ${avatarGimmicks(me)}
    ${me.vrm ? btn("標準アバターに戻る", "remove-vrm", "button-secondary", vrmUploading ? "disabled" : "") : ""}
    <div class="panel-section stack">
      <p class="eyebrow">クローゼット</p>
      ${me.owned.length ? me.owned.map(itemFor).filter(Boolean).map((item) =>
        `<div class="row resident"><span>${escape(item.name)}</span>
         ${btn(me.equipped === item.id ? "外す" : "着る", me.equipped === item.id ? "unequip" : "equip",
         "button-ghost", `data-id="${escape(item.id)}" ${compatible(item) ? "" : "disabled"}`)}</div>`
      ).join("") : '<p class="muted">服屋で買った服がここに並びます。</p>'}
    </div>`;
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
  return `<div class="panel-section stack">
    <p class="eyebrow">ギミック</p>
    ${[...groups].map(([name, group]) => `
      ${name ? `<small>${escape(name)}</small>` : ""}
      ${group.map(({ id, label, kind }) => {
        if (kind === "slider") {
          const amount = Math.round((Number(me.avatarExpressionValues?.[id]) || 0) * 100);
          return `<label class="field slider-field">${escape(label)}<input type="range" min="0" max="100" value="${amount}"
            data-slider="${escape(id)}" ${vrmUploading ? "disabled" : ""}></label>`;
        }
        const on = me.avatarExpressionValues?.[id] === true;
        const toggle = kind === "toggle";
        return btn(escape(label), "avatar-expression", on ? "button-primary" : "button-secondary",
          `data-id="${escape(id)}" ${toggle ? `aria-pressed="${on}"` : ""} ${vrmUploading ? "disabled" : ""}`);
      }).join("")}
    `).join("")}
  </div>`;
}

function openRoomDialog() {
  const display = $("dialog-content");
  let code = state?.code ?? "";
  const url = new URL(location.href);
  if (code) url.searchParams.set("join", code);
  if (!state) {
    // First visit or a lost session: choose the name everyone will see before entering a town.
    display.innerHTML = `<h2>まちのとなりへようこそ</h2>
      <p>街のみんなに表示される名前を決めてください。</p>
      <form data-form="join" class="stack">
        <label class="field">表示名<input name="name" maxlength="24" required autofocus placeholder="あなたの名前"></label>
        <label class="field">招待コード<input name="code" maxlength="20" value="${escape(inviteFromUrl)}" placeholder="空欄なら新しい街をつくります"></label>
        <button class="button button-primary" type="submit" value="start">はじめる</button>
      </form>`;
    if (!$("dialog").open) $("dialog").showModal();
    return;
  }
  display.innerHTML = `<h2>友達を街に呼ぶ</h2>
    ${code ? `<div class="card invite-card">
      <small>あなたの街の招待コード</small><strong>${escape(code)}</strong>
      ${btn("招待リンクをコピー", "copy-invite", "button-primary")}
      <input id="invite-url" aria-label="招待リンク" readonly value="${escape(url.href)}">
    </div>` : ""}
    <form data-form="join" class="stack">
      <label class="field">表示名<input name="name" maxlength="24" required value="${escape(state?.me.name ?? "")}" placeholder="あなたの名前"></label>
      <label class="field">招待コード<input name="code" maxlength="20" value="${escape(inviteFromUrl)}" placeholder="友達の招待コード"></label>
      <div class="row"><button class="button button-primary" type="submit" value="join">街に参加する</button>
        <button class="button button-ghost" type="submit" value="new">新しい街を作る</button></div>
    </form>`;
  if (!$("dialog").open) $("dialog").showModal();
}

function openNameDialog() {
  if (!state) {
    openRoomDialog();
    return;
  }
  $("dialog-content").innerHTML = `<h2>表示名を変える</h2>
    <p>街のみんなに表示される名前です。</p>
    <form data-form="rename" class="stack">
      <label class="field">表示名<input name="name" maxlength="24" required autofocus value="${escape(current().name)}"></label>
      <button class="button button-primary" type="submit">保存する</button>
    </form>`;
  if (!$("dialog").open) $("dialog").showModal();
  $("dialog-content").querySelector('input[name="name"]')?.select();
}

function openShop() {
  scene?.visit("shop", { inside: true });
  setTab("shop");
}

// The 3D view reports walking into a building, out of it, or to another storey.
function enterPlace(next) {
  const before = place;
  place = next;
  if (inShop() && before?.kind !== "shop") setTab("shop");
  else if (!inShop() && before?.kind === "shop" && activeTab === "shop") setTab("guide");
  else {
    if (next && getHouse(next.id)) selectedHouse = next.id;
    update();
  }
}

// `exact` is the precise spot that was pointed at; `byHand` is a VR controller, which acts at once.
function clickTarget(target, exact, byHand = false) {
  const { x, z, kind, id } = target;
  const direct = byHand || scene?.camera() === "first";
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
  } else if (kind === "shop" || kind === "cafe") {
    // A hand in VR points and arrives; everyone else walks up to the door and in.
    if (byHand) scene?.visit(id);
    else scene?.walkInto(id);
  } else if (getHouse(id)) {
    selectedHouse = id;
    planFloor = 0;
    if (byHand) scene?.visit(id);
    else scene?.walkInto(id);
    if (!direct) setTab("home");
  } else {
    clickTile({ x, z }, exact, byHand);
  }
}

function clickTile({ x, z }, exact, byHand = false) {
  if (building) {
    run(async () => {
      const plan = building;
      const before = new Set((state?.houses ?? []).map((home) => home.id));
      await action("build", { kind: plan.kind, style: plan.style, w: plan.w, d: plan.d, x, z });
      selectedHouse = state.houses.find((home) => !before.has(home.id))?.id ?? null;
      planFloor = 0;
      building = null;
      notify(`${STYLE_LABELS[plan.style]}が建ちました。間取りを変えてみましょう。`);
      update();
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
  if (moved && !scene?.vr.active()) drawMap();
  if (state) presence?.push({ ...next, warp: next.warp ?? current().warp ?? 0, layout: state.layout });
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
  if (!getHouse(id)?.canEnter) throw new Error("この家には、招待された人だけが入れます。");
  if (scene?.visit(id, { inside: true })) selectedHouse = id;
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
    $("dialog-content").innerHTML = `<h2>道路のつながりを確認</h2>
      ${error.warnings.map((warning) => `<p>${escape(warning)}</p>`).join("")}
      <div class="row">${btn("この配置で保存", "confirm-town", "button-primary")}
      ${btn("戻る", "close-dialog", "button-ghost")}</div>`;
    $("dialog").showModal();
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
  $("dialog-content").innerHTML = `<h2>アバターのモデルを選ぶ</h2>
    <form class="stack" id="avatar-model-form">
      <label class="field">モデルのファイル<select name="model">
        ${paths.map((path) => `<option value="${escape(path)}">${escape(path)}</option>`).join("")}
      </select></label>
      <button class="button button-primary" type="submit">このモデルを読み込む</button>
    </form>`;
  dialog.showModal();
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

  $("dialog-content").innerHTML = `<h2>FBXの読み込み設定</h2>
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
      <p id="fbx-options-error" class="muted" role="alert" hidden></p>
      <button type="submit" class="button button-primary">この設定で読み込む</button>
    </form>`;
  dialog.showModal();
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
    const { prepareAvatar } = await import("./avatar-import.js");
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

const handlers = {
  room: openRoomDialog,
  rename: openNameDialog,
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
  "open-homes": () => setTab("home"),
  "home-detail": ({ id }) => { selectedHouse = selectedHouse === id ? null : id; planFloor = 0; update(); },
  "cancel-build": () => { building = null; update(); },
  "plan-floor": ({ id }) => { planFloor = Number(id); update(); },
  brush: ({ id }) => { brush = id; update(); },
  "reset-plan": async ({ id }) => {
    await action("remodel", { houseId: id, reset: true });
    notify("標準の間取りに戻しました。");
  },
  demolish: ({ id }) => {
    const home = getHouse(id);
    if (!home) return;
    $("dialog-content").innerHTML = `<h2>建物を取り壊す</h2>
      <p>${escape(houseTitle(home))}（${STYLE_LABELS[home.style]}）を取り壊します。間取りも消え、元には戻せません。</p>
      <div class="row">${btn("取り壊す", "confirm-demolish", "button-primary", `data-id="${escape(id)}"`)}
      ${btn("やめる", "close-dialog", "button-ghost")}</div>`;
    $("dialog").showModal();
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
  vr: async () => {
    if (!scene) return;
    if (scene.vr.active()) scene.vr.exit();
    else await scene.vr.enter();
  },
  "enter-home": ({ id }) => enterHome(id),
  "leave-home": leaveHome,
  "invite-home": async ({ id, player, allowed }) => {
    await action("invite", { houseId: id, playerId: player, allowed: allowed === "true" });
    notify(allowed === "true" ? "入室できるようになりました。" : "招待を取り消しました。");
  },
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
  "toggle-panel": () => {
    const collapsed = $("panel")?.classList.toggle("is-collapsed");
    $("panel-toggle")?.setAttribute("aria-expanded", String(!collapsed));
  },
};

document.addEventListener("click", (event) => {
  const control = event.target.closest("[data-action], [data-tab]");
  if (!control) return;
  if (control.dataset.tab) {
    // Choosing a tab opens the menu if it was folded away.
    $("panel")?.classList.remove("is-collapsed");
    $("panel-toggle")?.setAttribute("aria-expanded", "true");
    setTab(control.dataset.tab);
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
    update();
    notify("建てる場所を地図から選んでください。");
  }
});

document.addEventListener("change", (event) => {
  const control = event.target;
  if (control.id === "avatar-file" && control.files.length) {
    const files = Array.from(control.files);
    control.value = "";
    run(() => importAvatar(files));
  } else if (control.dataset.slider) {
    run(() => action("expression", {
      id: control.dataset.slider, revision: current().vrm, value: Number(control.value) / 100,
    }));
  } else if (control.dataset.setting === "quality") {
    scene?.setQuality(control.value);
    localStorage.setItem(qualityKey, control.value);
    update();
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
  if (event.target.closest("input, textarea, select") || $("dialog").open) return;
  if (event.key === "Escape") {
    if (building || selection) { building = selection = null; update(); }
    else if (preview) { preview = null; update(); }
  } else if (event.key.toLowerCase() === "v") {
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

async function boot() {
  // On a phone the town comes first; the menu opens from the tabs.
  if (matchMedia("(max-width: 540px)").matches) {
    $("panel")?.classList.add("is-collapsed");
    $("panel-toggle")?.setAttribute("aria-expanded", "false");
  }
  makeScene();
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
