// The design studio: a building drawn wall by wall on a plan, with the 3D view beside it.
//
// The plan is a canvas; what a click on it does is decided by the editor (world/editor.js),
// which the 3D view and the VR tools feed in the same way. This file is the flat-screen side
// of it: the plan itself, the tools, what each tool draws with, and the selected thing.
import {
  FINISHES, FRAME_COLORS, ITEMS, ITEM_GROUPS, OPENINGS, RAILS, ROOFS, ROOM_COLORS, ROOM_LABELS, STAIR_LOOKS, STYLE_LABELS, WALL_DECOR,
  stairLayout, storeyShape,
} from "./world/design.js?v=online-1794946480502";
import { TOOLS, WALL_KINDS, createEditor } from "./world/editor.js?v=online-1794946480502";

const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[ch]);
const clamp = (value, low, high) => Math.min(high, Math.max(low, value));

const TOOL_ICONS = {
  select: "pointer", wall: "wall", opening: "door", room: "room", item: "sofa", stair: "stairs", lift: "lift", decor: "frame", paint: "paint", erase: "eraser",
};
const TOOL_KEYS = { select: "V", wall: "W", opening: "D", room: "M", item: "F", stair: "S", lift: "L", decor: "H", paint: "P", erase: "E" };
const TOOL_HINTS = {
  select: "クリックで選択。壁はドラッグで動かせ、選んだ壁の端（●）を引くと角ごと伸び縮みします。",
  wall: "クリックした点から点へ壁を引きます。続けてクリックすると壁がつながり、右クリックか Esc で終わります。ドラッグでも1枚引けます。",
  opening: "種類を選んで、壁の上をクリックすると取り付けます。外に面した玄関ドアにはポーチと庇が付きます。",
  room: "壁で囲まれた部屋をクリックすると、床・天井・名前を変えられます。",
  item: "種類を選んで床をクリックすると置けます。壁の近くでは背を壁に向けて寄せます（R で回転）。1階の屋外に置くと庭に置かれます。",
  stair: "上り口から下り口まで、角ごとにクリックして線を引きます。最後の点をもう一度クリック（またはダブルクリック・Enter）で確定します。",
  lift: "クリックした位置に、全部の階を通るエレベーター（2×2マス）を作ります。R で扉の向きが変わります。",
  decor: "種類を選んで、壁の飾りたい面の側をクリックします。",
  paint: "仕上げを選んで塗ります。壁は塗りたい面の側からクリック、部屋の中をクリックするとその部屋の壁をまとめて塗ります。",
  erase: "クリックしたものを消します。壁を消すと、その壁の扉や窓も消えます。",
};
const FINISH_GROUPS = { wall: "外壁の仕上げ", paper: "内装の仕上げ", floor: "床", ceiling: "天井", roof: "屋根" };
const DOOR_SIDES = { 0: "南（手前）", 90: "東", 180: "北（奥）", 270: "西" };
// The colour a finish has on the plan: its tint, or what its material looks like from afar.
const TEXTURE_COLORS = {
  floorboards: "#dcc096", tatami: "#c5cf93", bathTile: "#dbeaee", pavers: "#d5cfc3", checker: "#d9d9d6", carpet: "#b9bdc2", concrete: "#cfcdc6",
  planks: "#c9a57c", plaster: "#eeeade", wallpaper: "#f1eee6",
};
function finishColor(id) {
  const finish = FINISHES[id];
  if (!finish) return "#e6e2d8";
  return finish.tint && finish.tint.toLowerCase() !== "#ffffff" ? finish.tint : TEXTURE_COLORS[finish.texture] ?? "#e6e2d8";
}
function blend(hex, other, amount) {
  const parse = (value) => [1, 3, 5].map((at) => parseInt(value.slice(at, at + 2), 16));
  const [a, b] = [parse(hex), parse(other)];
  return `rgb(${a.map((channel, index) => Math.round(channel + (b[index] - channel) * amount)).join(",")})`;
}

const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const option = (value, label, chosen) => `<option value="${escape(value)}" ${String(value) === String(chosen) ? "selected" : ""}>${escape(label)}</option>`;
function finishSelect(attrs, chosen, groups) {
  return `<select ${attrs}>${groups.map((group) => `<optgroup label="${FINISH_GROUPS[group]}">${Object.entries(FINISHES)
    .filter(([, finish]) => finish.group === group).map(([id, finish]) => option(id, finish.label, chosen)).join("")}</optgroup>`).join("")}</select>`;
}
const numberField = (label, name, value, { min, max, step = 0.01, unit = "m" } = {}) => `<label class="field compact"><span>${label}</span>
  <span class="with-unit"><input type="number" data-prop="${name}" value="${value}" min="${min}" max="${max}" step="${step}" inputmode="decimal"><em>${unit}</em></span></label>`;

// `hooks`: onDraft() whenever what is drawn changes, onSave(design, base), onRevert(), onClose(),
// notify(text) and confirm({ title, text, actions }) which resolves with the action chosen.
export function createStudio(root, hooks) {
  let editor = null;
  let house = null;
  let title = "";
  // 'both', 'plan' or 'view': which of the plan and the 3D view is on screen.
  let layout = matchMedia("(max-width: 900px)").matches ? "plan" : "both";
  let side = "tool";
  let itemGroup = "living";
  let openingGroup = "door";
  let saving = false;
  let frame = 0;
  let panelKey = "";
  let topKey = "";
  // The plan on screen: pixels per metre and where the corner of the lot is.
  const view = { scale: 40, x: 0, y: 0, fitted: false };
  let canvas = null;
  let context = null;
  let held = null;
  const fingers = new Map();
  let spaceDown = false;

  root.innerHTML = "";
  root.hidden = true;

  // ---- The plan --------------------------------------------------------------------------

  const toScreen = (x, z) => [x * view.scale + view.x, z * view.scale + view.y];
  const toPlan = (clientX, clientY) => {
    const box = canvas.getBoundingClientRect();
    return { x: (clientX - box.left - view.x) / view.scale, z: (clientY - box.top - view.y) / view.scale };
  };

  function fit() {
    const box = canvas.getBoundingClientRect();
    if (box.width < 10 || box.height < 10) return;
    const margin = 34;
    view.scale = Math.min((box.width - margin * 2) / editor.lot.w, (box.height - margin * 2) / editor.lot.d);
    view.x = (box.width - editor.lot.w * view.scale) / 2;
    view.y = (box.height - editor.lot.d * view.scale) / 2;
    view.fitted = true;
  }

  function zoomAt(clientX, clientY, factor) {
    const box = canvas.getBoundingClientRect();
    const before = toPlan(clientX, clientY);
    const least = Math.min(box.width / editor.lot.w, box.height / editor.lot.d) * 0.5;
    view.scale = clamp(view.scale * factor, least, 260);
    view.x = clientX - box.left - before.x * view.scale;
    view.y = clientY - box.top - before.z * view.scale;
    invalidate();
  }

  function drawPlan() {
    if (!canvas || !editor) return;
    const box = canvas.getBoundingClientRect();
    if (box.width < 10 || box.height < 10) return;
    const ratio = Math.min(2, window.devicePixelRatio || 1);
    if (canvas.width !== Math.round(box.width * ratio) || canvas.height !== Math.round(box.height * ratio)) {
      canvas.width = Math.round(box.width * ratio);
      canvas.height = Math.round(box.height * ratio);
      view.fitted = false;
    }
    if (!view.fitted) fit();
    const c = context;
    const s = view.scale;
    c.setTransform(ratio, 0, 0, ratio, 0, 0);
    c.clearRect(0, 0, box.width, box.height);
    c.fillStyle = "#eef1ee";
    c.fillRect(0, 0, box.width, box.height);
    const { design, level, lot, grid } = editor;
    const floor = design.storeys[level];
    const repeated = Number.isInteger(floor.like);
    const source = repeated ? design.storeys[floor.like] : floor;
    const shape = storeyShape(design, level);
    const path = (points, close = true) => {
      c.beginPath();
      points.forEach(([x, z], index) => {
        const [px, py] = toScreen(x, z);
        if (index) c.lineTo(px, py);
        else c.moveTo(px, py);
      });
      if (close) c.closePath();
    };

    // The lot, and the street it fronts.
    const [lx, ly] = toScreen(0, 0);
    c.fillStyle = "#f9faf6";
    c.strokeStyle = "#b8c2ba";
    c.lineWidth = 1.5;
    c.fillRect(lx, ly, lot.w * s, lot.d * s);
    c.strokeRect(lx, ly, lot.w * s, lot.d * s);
    c.fillStyle = "#8a958e";
    c.font = '600 11px "Yu Gothic UI", "Hiragino Sans", system-ui, sans-serif';
    c.textAlign = "center";
    c.textBaseline = "top";
    c.fillText("▼ 道路側（南）", lx + lot.w * s / 2, ly + lot.d * s + 7);
    c.textBaseline = "bottom";
    c.fillText(`敷地 ${lot.w}m × ${lot.d}m`, lx + lot.w * s / 2, ly - 6);

    // The grid houses are built on: half a 間 (910 mm) to a cell.
    c.lineWidth = 1;
    for (let index = 0, x = grid.ox; x <= lot.w - grid.ox + 0.01; x += 0.91, index++) {
      const [px] = toScreen(x, 0);
      c.strokeStyle = index % 2 ? "#e4e9e4" : "#d3dbd4";
      c.beginPath();
      c.moveTo(Math.round(px) + 0.5, ly + grid.oz * s);
      c.lineTo(Math.round(px) + 0.5, ly + (lot.d - grid.oz) * s);
      c.stroke();
    }
    for (let index = 0, z = grid.oz; z <= lot.d - grid.oz + 0.01; z += 0.91, index++) {
      const [, py] = toScreen(0, z);
      c.strokeStyle = index % 2 ? "#e4e9e4" : "#d3dbd4";
      c.beginPath();
      c.moveTo(lx + grid.ox * s, Math.round(py) + 0.5);
      c.lineTo(lx + (lot.w - grid.ox) * s, Math.round(py) + 0.5);
      c.stroke();
    }

    // On the ground: porches, paths and places for a car. Upstairs: the storey below, faintly.
    if (level === 0) {
      for (const pad of design.yard.pads) {
        const [px, py] = toScreen(pad.x0, pad.z0);
        c.fillStyle = pad.porch ? "#d9d2c4" : blend(finishColor(pad.f), "#ffffff", 0.35);
        c.fillRect(px, py, (pad.x1 - pad.x0) * s, (pad.z1 - pad.z0) * s);
      }
      for (const steps of design.yard.steps) {
        const [px, py] = toScreen(steps.x, steps.z);
        c.save();
        c.translate(px, py);
        c.rotate(-(steps.r ?? 0) * Math.PI / 180);
        c.fillStyle = "#cfc8ba";
        c.fillRect(-steps.w / 2 * s, -steps.l / 2 * s, steps.w * s, steps.l * s);
        c.restore();
      }
    } else {
      c.fillStyle = "rgba(60, 72, 84, 0.13)";
      for (const piece of storeyShape(design, level - 1).outlines.pieces) {
        path(piece.poly);
        c.fill();
      }
    }

    // Rooms: their floors, in the colour of what the floor is made of.
    for (const room of shape.rooms) {
      path(room.points);
      for (const hole of room.holes) {
        hole.forEach(([x, z], index) => {
          const [px, py] = toScreen(x, z);
          if (index) c.lineTo(px, py);
          else c.moveTo(px, py);
        });
        c.closePath();
      }
      c.fillStyle = room.shaft ? "#d5d9de" : blend(room.code && !FINISHES[room.f] ? ROOM_COLORS[room.code] ?? "#e6e2d8" : finishColor(room.f), "#ffffff", room.open ? 0.55 : 0.3);
      c.fill("evenodd");
      if (room.open) {
        c.save();
        c.clip("evenodd");
        c.strokeStyle = "rgba(90, 110, 100, 0.2)";
        c.lineWidth = 1;
        const [x0, y0] = toScreen(0, 0);
        for (let offset = -lot.d * s; offset < lot.w * s; offset += 9) {
          c.beginPath();
          c.moveTo(x0 + offset, y0);
          c.lineTo(x0 + offset + lot.d * s, y0 + lot.d * s);
          c.stroke();
        }
        c.restore();
      }
    }

    // Where the stairs from below arrive.
    if (level > 0) {
      const lower = storeyShape(design, level - 1).storey;
      c.setLineDash([5, 4]);
      c.strokeStyle = "#7b6ea8";
      c.lineWidth = 1.2;
      for (const stair of lower.stairs) {
        path(stairLayout(stair, lower.h).outline);
        c.fillStyle = "rgba(123, 110, 168, 0.10)";
        c.fill();
        c.stroke();
      }
      c.setLineDash([]);
    }

    // Stairs that go up from here: treads, and an arrow from the foot to the head.
    if (level + 1 < design.storeys.length) {
      for (const stair of source.stairs) {
        const built = stairLayout(stair, source.h);
        path(built.outline);
        c.fillStyle = "#e9e4f2";
        c.fill();
        c.strokeStyle = "#8f84b4";
        c.lineWidth = 1;
        c.stroke();
        for (const surface of built.surfaces) {
          if (!surface.nose) continue;
          path(surface.nose, false);
          c.stroke();
        }
        path(built.path.map(([x, z]) => [x, z]), false);
        c.strokeStyle = "#5d528c";
        c.lineWidth = 1.5;
        c.stroke();
        const [tip, back] = [built.path.at(-1), built.path.at(-2)];
        const angle = Math.atan2(tip[1] - back[1], tip[0] - back[0]);
        const [tx, ty] = toScreen(tip[0], tip[1]);
        c.beginPath();
        c.moveTo(tx, ty);
        c.lineTo(tx - Math.cos(angle - 0.45) * 9, ty - Math.sin(angle - 0.45) * 9);
        c.lineTo(tx - Math.cos(angle + 0.45) * 9, ty - Math.sin(angle + 0.45) * 9);
        c.closePath();
        c.fillStyle = "#5d528c";
        c.fill();
        const [fx, fy] = toScreen(built.path[0][0], built.path[0][1]);
        c.font = '700 10px system-ui, sans-serif';
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.fillText("上", fx, fy);
      }
    }

    // Lifts.
    for (const lift of source.lifts) {
      const [px, py] = toScreen(lift.x, lift.z);
      c.save();
      c.translate(px, py);
      c.rotate(-(lift.r ?? 0) * Math.PI / 180);
      c.fillStyle = "#c9d0dc";
      c.strokeStyle = "#5c6b82";
      c.lineWidth = 1.2;
      c.fillRect(-lift.w / 2 * s, -lift.d / 2 * s, lift.w * s, lift.d * s);
      c.strokeRect(-lift.w / 2 * s, -lift.d / 2 * s, lift.w * s, lift.d * s);
      c.beginPath();
      c.moveTo(-lift.w / 2 * s, -lift.d / 2 * s);
      c.lineTo(lift.w / 2 * s, lift.d / 2 * s);
      c.moveTo(lift.w / 2 * s, -lift.d / 2 * s);
      c.lineTo(-lift.w / 2 * s, lift.d / 2 * s);
      c.stroke();
      c.restore();
    }

    // Furniture, and on the ground floor what stands in the garden.
    const drawItem = (thing, tone = "#a6927a") => {
      const kind = ITEMS[thing.k];
      if (!kind) return;
      const [px, py] = toScreen(thing.x, thing.z);
      c.save();
      c.translate(px, py);
      c.rotate(-(thing.r ?? 0) * Math.PI / 180);
      c.fillStyle = kind.solid ? "rgba(255, 255, 255, 0.82)" : "rgba(255, 255, 255, 0.4)";
      c.strokeStyle = tone;
      c.lineWidth = 1.1;
      if (kind.ceiling) c.setLineDash([3, 3]);
      c.fillRect(-kind.w / 2 * s, -kind.d / 2 * s, kind.w * s, kind.d * s);
      c.strokeRect(-kind.w / 2 * s, -kind.d / 2 * s, kind.w * s, kind.d * s);
      c.setLineDash([]);
      // (A line along its front.)
      c.beginPath();
      c.moveTo(-kind.w / 2 * s + 2, kind.d / 2 * s - 2.5);
      c.lineTo(kind.w / 2 * s - 2, kind.d / 2 * s - 2.5);
      c.stroke();
      c.restore();
      // (Named only from close by: on the whole plan the names of the rooms are what is read.)
      if (s > 84 && kind.w * s > 44) {
        c.fillStyle = "#6f6558";
        c.font = '600 9.5px "Yu Gothic UI", "Hiragino Sans", system-ui, sans-serif';
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.fillText(kind.label, px, py, Math.max(kind.w, kind.d) * s);
      }
    };
    for (const thing of source.items) drawItem(thing);
    if (level === 0) for (const thing of design.yard.items) drawItem(thing, "#7d9a78");

    // Walls, with clean corners where they meet.
    for (const piece of shape.outlines.pieces) {
      const wall = source.walls[piece.wall];
      path(piece.poly);
      c.fillStyle = wall.rail && wall.rail !== "solid" ? "#93a5b3" : (wall.h ?? source.h) < source.h - 0.01 ? "#7b8794" : "#2f3a45";
      c.fill();
    }
    c.setLineDash([4, 4]);
    c.strokeStyle = "#9aa6a0";
    c.lineWidth = 1.2;
    for (const wall of source.walls) {
      if (!wall.open) continue;
      path([wall.a, wall.b], false);
      c.stroke();
    }
    c.setLineDash([]);

    // Doors and windows.
    for (const entry of source.openings) {
      const wall = source.walls[entry.w];
      if (!wall) continue;
      const kind = OPENINGS[entry.k] ?? OPENINGS["win-fixed"];
      const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]) || 1;
      const [px, py] = toScreen(wall.a[0] + (wall.b[0] - wall.a[0]) / length * entry.at, wall.a[1] + (wall.b[1] - wall.a[1]) / length * entry.at);
      const thick = Math.max((wall.t ?? 0.12) * s, 3);
      const half = entry.ww / 2 * s;
      c.save();
      c.translate(px, py);
      c.rotate(Math.atan2(wall.b[1] - wall.a[1], wall.b[0] - wall.a[0]));
      c.fillStyle = "#fbfcfa";
      c.fillRect(-half, -thick / 2 - 0.5, half * 2, thick + 1);
      c.lineWidth = 1.2;
      if (!kind.door) {
        c.strokeStyle = "#3c8fb0";
        c.strokeRect(-half, -thick / 2, half * 2, thick);
        c.beginPath();
        c.moveTo(-half, 0);
        c.lineTo(half, 0);
        c.stroke();
      } else if (kind.open) {
        c.strokeStyle = "#9aa6a0";
        c.setLineDash([3, 3]);
        c.strokeRect(-half, -thick / 2, half * 2, thick);
      } else if (kind.slide) {
        c.strokeStyle = kind.lift ? "#5c6b82" : kind.glass ? "#3c8fb0" : "#8a6a4c";
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(-half, -1.5);
        c.lineTo(2, -1.5);
        c.moveTo(-2, 1.5);
        c.lineTo(half, 1.5);
        c.stroke();
      } else {
        // A leaf on its hinge, and the quarter circle it swings through.
        const turn = entry.outward ? -1 : 1;
        const hinge = entry.flip ? half : -half;
        const way = entry.flip ? -1 : 1;
        c.strokeStyle = "#8a6a4c";
        c.beginPath();
        c.moveTo(hinge, 0);
        c.lineTo(hinge, turn * half * 2);
        c.stroke();
        c.lineWidth = 0.8;
        c.beginPath();
        c.arc(hinge, 0, half * 2, turn > 0 ? Math.PI / 2 : -Math.PI / 2, way > 0 ? 0 : Math.PI, (turn > 0) === (way > 0));
        c.stroke();
      }
      c.restore();
    }

    // What hangs on the walls: a short mark on the face it hangs on.
    for (const piece of source.decor) {
      const wall = source.walls[piece.w];
      const kind = WALL_DECOR[piece.k];
      if (!wall || !kind) continue;
      const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]) || 1;
      const d = [(wall.b[0] - wall.a[0]) / length, (wall.b[1] - wall.a[1]) / length];
      const off = (piece.side === "l" ? 1 : -1) * ((wall.t ?? 0.12) / 2 + 0.05);
      const at = (along) => toScreen(wall.a[0] + d[0] * along + d[1] * off, wall.a[1] + d[1] * along - d[0] * off);
      const [p, q] = [at(piece.at - kind.w / 2), at(piece.at + kind.w / 2)];
      c.strokeStyle = "#c0613c";
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(p[0], p[1]);
      c.lineTo(q[0], q[1]);
      c.stroke();
    }

    // Names of rooms, with their size in mats and square metres.
    if (s > 26) {
      c.textAlign = "center";
      c.textBaseline = "middle";
      for (const room of shape.rooms) {
        if (room.shaft || room.area < 1.2) continue;
        const [px, py] = toScreen(room.at[0], room.at[1]);
        const name = room.n || ROOM_LABELS[room.code] || "";
        c.fillStyle = "rgba(38, 50, 60, 0.82)";
        c.font = '700 11.5px "Yu Gothic UI", "Hiragino Sans", system-ui, sans-serif';
        if (name) c.fillText(name, px, py - 7);
        c.fillStyle = "rgba(38, 50, 60, 0.55)";
        c.font = '600 10px system-ui, sans-serif';
        c.fillText(`${(room.area / 1.62).toFixed(1)}畳・${room.area.toFixed(1)}㎡`, px, py + (name ? 7 : 0));
      }
    }

    const outlineOf = (chosen) => {
      if (!chosen || repeated) return null;
      if (chosen.type === "wall" && floor.walls[chosen.index]) return { kind: "wall", wall: floor.walls[chosen.index] };
      if (chosen.type === "opening" && floor.openings[chosen.index]) return { kind: "span", wall: floor.walls[floor.openings[chosen.index].w], at: floor.openings[chosen.index].at, ww: floor.openings[chosen.index].ww };
      if (chosen.type === "decor" && floor.decor[chosen.index]) return { kind: "span", wall: floor.walls[floor.decor[chosen.index].w], at: floor.decor[chosen.index].at, ww: WALL_DECOR[floor.decor[chosen.index].k]?.w ?? 0.5 };
      if (chosen.type === "item" && floor.items[chosen.index]) return { kind: "box", thing: floor.items[chosen.index] };
      if (chosen.type === "yard" && design.yard.items[chosen.index]) return { kind: "box", thing: design.yard.items[chosen.index] };
      if (chosen.type === "lift" && floor.lifts[chosen.index]) return { kind: "lift", thing: floor.lifts[chosen.index] };
      if (chosen.type === "stair" && floor.stairs[chosen.index]) return { kind: "poly", points: stairLayout(floor.stairs[chosen.index], floor.h).outline };
      if (chosen.type === "room") {
        const room = shape.roomAt(chosen.at[0], chosen.at[1]);
        return room ? { kind: "poly", points: room.points } : null;
      }
      return null;
    };
    const mark = (found, colour, handles = false) => {
      if (!found) return;
      c.strokeStyle = colour;
      c.fillStyle = colour;
      c.lineWidth = 2.5;
      if (found.kind === "wall") {
        const [a, b] = [toScreen(...found.wall.a), toScreen(...found.wall.b)];
        c.lineWidth = Math.max((found.wall.t ?? 0.12) * s + 4, 6);
        c.globalAlpha = 0.55;
        c.beginPath();
        c.moveTo(a[0], a[1]);
        c.lineTo(b[0], b[1]);
        c.stroke();
        c.globalAlpha = 1;
        if (handles) {
          for (const [px, py] of [a, b]) {
            c.beginPath();
            c.arc(px, py, 6, 0, Math.PI * 2);
            c.fillStyle = "#ffffff";
            c.fill();
            c.lineWidth = 2.5;
            c.stroke();
          }
          const length = Math.hypot(found.wall.b[0] - found.wall.a[0], found.wall.b[1] - found.wall.a[1]);
          measure((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, `${length.toFixed(2)} m`, colour);
        }
      } else if (found.kind === "span") {
        const length = Math.hypot(found.wall.b[0] - found.wall.a[0], found.wall.b[1] - found.wall.a[1]) || 1;
        const at = (along) => toScreen(found.wall.a[0] + (found.wall.b[0] - found.wall.a[0]) / length * along, found.wall.a[1] + (found.wall.b[1] - found.wall.a[1]) / length * along);
        const [p, q] = [at(found.at - found.ww / 2), at(found.at + found.ww / 2)];
        c.lineWidth = Math.max((found.wall.t ?? 0.12) * s + 6, 8);
        c.globalAlpha = 0.6;
        c.beginPath();
        c.moveTo(p[0], p[1]);
        c.lineTo(q[0], q[1]);
        c.stroke();
        c.globalAlpha = 1;
      } else if (found.kind === "box" || found.kind === "lift") {
        const size = found.kind === "lift" ? { w: found.thing.w + 0.3, d: found.thing.d + 0.3 } : ITEMS[found.thing.k];
        if (!size) return;
        const [px, py] = toScreen(found.thing.x, found.thing.z);
        c.save();
        c.translate(px, py);
        c.rotate(-(found.thing.r ?? 0) * Math.PI / 180);
        c.strokeRect(-size.w / 2 * s - 2, -size.d / 2 * s - 2, size.w * s + 4, size.d * s + 4);
        c.restore();
      } else if (found.kind === "poly") {
        path(found.points);
        c.stroke();
      }
    };
    function measure(px, py, text, colour) {
      c.font = '700 11px system-ui, sans-serif';
      const wide = c.measureText(text).width + 10;
      c.fillStyle = colour;
      c.beginPath();
      c.roundRect(px - wide / 2, py - 22, wide, 17, 5);
      c.fill();
      c.fillStyle = "#ffffff";
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.fillText(text, px, py - 13);
    }

    mark(outlineOf(editor.selection), "#e8862e", true);
    const { ghost, draft, cursor } = editor;
    if (ghost?.type === "erase") mark(outlineOf(ghost.hit), "#d8453b");
    else if (ghost?.type === "opening") mark({ kind: "span", wall: floor.walls[ghost.entry.w], at: ghost.entry.at, ww: ghost.entry.ww }, "#1f9bd1");
    else if (ghost?.type === "decor") mark({ kind: "span", wall: floor.walls[ghost.piece.w], at: ghost.piece.at, ww: WALL_DECOR[ghost.piece.k].w }, "#1f9bd1");
    else if (ghost?.type === "item") {
      c.globalAlpha = 0.75;
      drawItem(ghost.thing, "#1f9bd1");
      c.globalAlpha = 1;
    } else if (ghost?.type === "lift") {
      const { x0, z0, x1, z1, edges, r } = ghost.shaft;
      const [px, py] = toScreen(x0, z0);
      c.strokeStyle = "#1f9bd1";
      c.lineWidth = 2;
      c.fillStyle = "rgba(31, 155, 209, 0.12)";
      c.fillRect(px, py, (x1 - x0) * s, (z1 - z0) * s);
      c.strokeRect(px, py, (x1 - x0) * s, (z1 - z0) * s);
      const [a, b] = edges[r].map((point) => toScreen(...point));
      c.lineWidth = 5;
      c.beginPath();
      c.moveTo(a[0] + (b[0] - a[0]) * 0.28, a[1] + (b[1] - a[1]) * 0.28);
      c.lineTo(a[0] + (b[0] - a[0]) * 0.72, a[1] + (b[1] - a[1]) * 0.72);
      c.stroke();
    } else if (ghost?.type === "spiral") {
      const [px, py] = toScreen(ghost.x, ghost.z);
      c.strokeStyle = "#1f9bd1";
      c.lineWidth = 2;
      c.beginPath();
      c.arc(px, py, ghost.radius * s, 0, Math.PI * 2);
      c.stroke();
    }
    if (draft?.type === "wall") {
      const [a, b] = [toScreen(...draft.a), toScreen(...draft.b)];
      c.strokeStyle = "rgba(31, 155, 209, 0.75)";
      c.lineWidth = Math.max(0.17 * s, 4);
      c.beginPath();
      c.moveTo(a[0], a[1]);
      c.lineTo(b[0], b[1]);
      c.stroke();
      const length = Math.hypot(draft.b[0] - draft.a[0], draft.b[1] - draft.a[1]);
      if (length > 0.05) measure((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, `${length.toFixed(2)} m`, "#1f9bd1");
    } else if (draft?.type === "stair") {
      path([...draft.pts, draft.b], false);
      c.strokeStyle = "#1f9bd1";
      c.lineWidth = 2.5;
      c.stroke();
      for (const point of draft.pts) {
        const [px, py] = toScreen(...point);
        c.beginPath();
        c.arc(px, py, 4, 0, Math.PI * 2);
        c.fillStyle = "#1f9bd1";
        c.fill();
      }
    }
    if (cursor) {
      const [px, py] = toScreen(...cursor);
      c.strokeStyle = "#e8862e";
      c.lineWidth = 1.5;
      c.beginPath();
      c.arc(px, py, 5, 0, Math.PI * 2);
      c.moveTo(px - 10, py);
      c.lineTo(px + 10, py);
      c.moveTo(px, py - 10);
      c.lineTo(px, py + 10);
      c.stroke();
    }

    // A rule: one metre, and one 間.
    const [bx, by] = [14, box.height - 16];
    c.strokeStyle = "#55636d";
    c.fillStyle = "#55636d";
    c.lineWidth = 1.5;
    c.beginPath();
    c.moveTo(bx, by - 4);
    c.lineTo(bx, by);
    c.lineTo(bx + 1.82 * s, by);
    c.lineTo(bx + 1.82 * s, by - 4);
    c.moveTo(bx + s, by - 3);
    c.lineTo(bx + s, by);
    c.stroke();
    c.font = '600 10px system-ui, sans-serif';
    c.textAlign = "left";
    c.textBaseline = "bottom";
    c.fillText("1m", bx + s - 6, by - 5);
    c.fillText("1間", bx + 1.82 * s - 8, by - 5);
  }

  // ---- Panels -------------------------------------------------------------------------------

  function topBar() {
    const { design, level } = editor;
    const tabs = design.storeys.map((floor, index) => `<button type="button" class="seg" data-studio="level" data-id="${index}" aria-pressed="${index === level}"
      title="${Number.isInteger(floor.like) ? `${floor.like + 1}階と同じ間取り` : ""}">${index + 1}階${Number.isInteger(floor.like) ? "<sup>＝</sup>" : ""}</button>`).join("");
    return `<button type="button" class="btn ghost" data-studio="close">${icon("back")}<span>街へ戻る</span></button>
      <div class="studio-title"><small>設計</small><strong>${escape(title)}</strong></div>
      <div class="segmented storeys" role="group" aria-label="階">${tabs}
        <button type="button" class="seg add" data-studio="add-storey" title="階を増やす" ${design.storeys.length >= editor.most ? "disabled" : ""}>＋</button></div>
      <div class="studio-actions">
        <button type="button" class="btn icon-only" data-studio="undo" title="元に戻す (Ctrl+Z)" ${editor.canUndo() ? "" : "disabled"}>${icon("undo")}</button>
        <button type="button" class="btn icon-only" data-studio="redo" title="やり直す (Ctrl+Y)" ${editor.canRedo() ? "" : "disabled"}>${icon("redo")}</button>
        <div class="segmented layout" role="group" aria-label="表示">
          ${[["plan", "図面"], ["both", "両方"], ["view", "3D"]].map(([id, label]) => `<button type="button" class="seg" data-studio="layout" data-id="${id}" aria-pressed="${layout === id}">${label}</button>`).join("")}
        </div>
        <button type="button" class="btn primary" data-studio="save" ${saving || !editor.dirty ? "disabled" : ""}>${icon("save")}<span>${saving ? "保存中…" : editor.dirty ? "保存する" : "保存済み"}</span></button>
      </div>`;
  }

  const toolRail = () => Object.entries(TOOLS).map(([id, label]) => `<button type="button" class="tool" data-studio="tool" data-id="${id}"
    aria-pressed="${editor.tool === id}" title="${label}（${TOOL_KEYS[id]}）">${icon(TOOL_ICONS[id])}<span>${label}</span></button>`).join("");

  const chips = (entries, chosen, attrs) => `<div class="chip-grid">${entries.map(([id, label]) =>
    `<button type="button" class="chip" ${attrs} data-id="${escape(id)}" aria-pressed="${id === chosen}">${escape(label)}</button>`).join("")}</div>`;

  function toolOptions() {
    const { options, tool } = editor;
    if (tool === "wall") {
      return `${chips(Object.entries(WALL_KINDS), options.wall.kind, 'data-studio="wall-kind"')}
        ${options.wall.kind === "rail" ? `<label class="field compact"><span>手すりの種類</span><select data-opt="wall.rail">${Object.entries(RAILS).map(([id, label]) => option(id, label, options.wall.rail)).join("")}</select></label>` : ""}
        ${options.wall.kind === "line" ? "" : `<label class="field compact"><span>外に面した側</span>${finishSelect('data-opt="wall.out"', options.wall.out, ["wall"])}</label>`}
        ${["outer", "inner", "low"].includes(options.wall.kind) ? `<label class="field compact"><span>部屋に面した側</span>${finishSelect('data-opt="wall.in"', options.wall.in, ["paper", "wall"])}</label>` : ""}`;
    }
    if (tool === "opening") {
      const doors = openingGroup === "door";
      const kinds = Object.entries(OPENINGS).filter(([id, kind]) => Boolean(kind.door) === doors && id !== "lift-door").map(([id, kind]) => [id, kind.label]);
      return `<div class="segmented" role="group">${[["door", "扉"], ["window", "窓"]].map(([id, label]) =>
        `<button type="button" class="seg" data-studio="opening-group" data-id="${id}" aria-pressed="${openingGroup === id}">${label}</button>`).join("")}</div>
        ${chips(kinds, options.opening.k, 'data-studio="opening-kind"')}
        <label class="field compact"><span>枠・扉の色</span><select data-opt="opening.c">${Object.entries(FRAME_COLORS).map(([id, [label]]) => option(id, label, options.opening.c)).join("")}</select></label>`;
    }
    if (tool === "item") {
      const kinds = Object.entries(ITEMS).filter(([, kind]) => kind.group === itemGroup).map(([id, kind]) => [id, kind.label]);
      return `<label class="field compact"><span>分類</span><select data-studio-select="item-group">${Object.entries(ITEM_GROUPS).map(([id, label]) => option(id, label, itemGroup)).join("")}</select></label>
        ${chips(kinds, options.item.k, 'data-studio="item-kind"')}
        <div class="row"><button type="button" class="btn soft small" data-studio="rotate">${icon("rotate")}<span>回す（${options.item.r}°）</span></button>
          <label class="check"><input type="checkbox" data-opt="item.hug" ${options.item.hug ? "checked" : ""}> 壁に寄せる</label></div>`;
    }
    if (tool === "stair") {
      return `<div class="segmented" role="group">${[["path", "直線・折れ"], ["spiral", "らせん"]].map(([id, label]) =>
        `<button type="button" class="seg" data-studio="stair-shape" data-id="${id}" aria-pressed="${options.stair.shape === id}">${label}</button>`).join("")}</div>
        <label class="field compact"><span>${options.stair.shape === "spiral" ? "段の幅" : "幅"}</span><span class="with-unit"><input type="number" data-opt="stair.w" value="${options.stair.w}" min="0.5" max="3" step="0.05"><em>m</em></span></label>
        ${options.stair.shape === "path" ? `<label class="field compact"><span>曲がり方</span><select data-opt="stair.turn">${option("landing", "踊り場で曲がる", options.stair.turn)}${option("winder", "回り段で曲がる", options.stair.turn)}</select></label>` : ""}
        <label class="field compact"><span>つくり</span><select data-opt="stair.look">${Object.entries(STAIR_LOOKS).map(([id, look]) => option(id, look.label, options.stair.look)).join("")}</select></label>
        ${editor.draft?.type === "stair" ? '<button type="button" class="btn primary small" data-studio="commit">ここまでで確定（Enter）</button>' : ""}`;
    }
    if (tool === "lift") {
      return `<label class="field compact"><span>扉の向き</span><select data-opt="lift.r" data-number>${Object.entries(DOOR_SIDES).map(([id, label]) => option(id, label, options.lift.r)).join("")}</select></label>`;
    }
    if (tool === "decor") {
      return `${chips(Object.entries(WALL_DECOR).map(([id, kind]) => [id, kind.label]), options.decor.k, 'data-studio="decor-kind"')}
        <label class="field compact"><span>床からの高さ</span><span class="with-unit"><input type="number" data-opt="decor.y" value="${options.decor.y}" min="0.2" max="4" step="0.05"><em>m</em></span></label>`;
    }
    if (tool === "paint") {
      return `<label class="field compact"><span>仕上げ</span>${finishSelect('data-opt="paint.f"', options.paint.f, ["paper", "wall", "floor", "ceiling", "roof"])}</label>
        <div class="swatch-line"><i style="background:${finishColor(options.paint.f)}"></i><span>${escape(FINISHES[options.paint.f]?.label ?? "")}</span></div>`;
    }
    return "";
  }

  function inspector() {
    const chosen = editor.selected();
    if (!chosen) return "";
    const { data, type } = chosen;
    const floor = editor.design.storeys[editor.level];
    let body = "";
    let name = "";
    if (type === "wall") {
      name = data.open ? "見切り線" : data.rail ? "手すり" : "壁";
      body = data.open ? "" : `${numberField("長さ", "length", data.length, { min: 0.3, max: 80 })}
        ${numberField("厚さ", "t", data.t ?? 0.12, { min: 0.04, max: 0.6 })}
        ${numberField("高さ", "h", data.h ?? floor.h, { min: 0.2, max: floor.h, step: 0.05 })}
        ${data.rail ? `<label class="field compact"><span>手すりの種類</span><select data-prop="rail">${Object.entries(RAILS).map(([id, label]) => option(id, label, data.rail)).join("")}</select></label>` : ""}
        <label class="field compact"><span>片面の仕上げ</span>${finishSelect('data-prop="l"', data.l, ["paper", "wall"])}</label>
        <label class="field compact"><span>反対の面</span>${finishSelect('data-prop="r"', data.r, ["paper", "wall"])}</label>`;
    } else if (type === "opening") {
      const kind = OPENINGS[data.k] ?? {};
      name = kind.label ?? "開口";
      const kinds = Object.entries(OPENINGS).filter(([id, entry]) => Boolean(entry.door) === Boolean(kind.door) && id !== "lift-door");
      body = `${data.k === "lift-door" ? "" : `<label class="field compact"><span>種類</span><select data-prop="k">${kinds.map(([id, entry]) => option(id, entry.label, data.k)).join("")}</select></label>`}
        ${numberField("幅", "ww", data.ww, { min: 0.3, max: 8 })}
        ${numberField("高さ", "hh", data.hh, { min: 0.3, max: floor.h })}
        ${numberField("床からの高さ", "s", data.s, { min: -1.5, max: floor.h })}
        <label class="field compact"><span>色</span><select data-prop="c">${Object.entries(FRAME_COLORS).map(([id, [label]]) => option(id, label, data.c ?? (kind.door ? "wood" : "white"))).join("")}</select></label>
        ${kind.door && !kind.slide && !kind.open ? `<div class="row"><label class="check"><input type="checkbox" data-prop="flip" ${data.flip ? "checked" : ""}> 吊り元を反対に</label>
          <label class="check"><input type="checkbox" data-prop="outward" ${data.outward ? "checked" : ""}> 外開き</label></div>` : ""}
        ${kind.door && editor.level === 0 ? `<label class="check"><input type="checkbox" data-prop="canopy" ${data.canopy ? "checked" : ""}> 玄関にする（ポーチと庇）</label>` : ""}`;
    } else if (type === "item" || type === "yard") {
      name = ITEMS[data.k]?.label ?? "家具";
      body = `${numberField("向き", "r", data.r ?? 0, { min: 0, max: 359, step: 15, unit: "°" })}
        <div class="row"><button type="button" class="btn soft small" data-studio="rotate">${icon("rotate")}<span>90°回す（R）</span></button></div>`;
    } else if (type === "stair") {
      name = data.k === "spiral" ? "らせん階段" : "階段";
      const built = stairLayout(floor.stairs[chosen.index], floor.h);
      body = `${data.k === "spiral" ? `${numberField("半径", "radius", data.radius ?? 0.85, { min: 0.5, max: 2, step: 0.05 })}
          ${numberField("回る角度", "sweep", data.sweep ?? 360, { min: -1080, max: 1080, step: 30, unit: "°" })}
          ${numberField("上り口の向き", "from", data.from ?? 0, { min: -360, max: 360, step: 15, unit: "°" })}`
        : `${numberField("幅", "w", data.w ?? 0.8, { min: 0.5, max: 3, step: 0.05 })}
          <label class="field compact"><span>曲がり方</span><select data-prop="turn">${option("landing", "踊り場で曲がる", data.turn ?? "landing")}${option("winder", "回り段で曲がる", data.turn ?? "landing")}</select></label>
          <div class="row"><button type="button" class="btn soft small" data-studio="reverse-stair">上り下りを逆にする</button></div>`}
        <label class="field compact"><span>つくり</span><select data-prop="look">${Object.entries(STAIR_LOOKS).map(([id, look]) => option(id, look.label, data.look ?? "wood")).join("")}</select></label>
        <p class="note ${built.steep ? "warn" : ""}">${built.n}段・蹴上げ ${(built.riser * 100).toFixed(1)}cm・踏面 ${Number.isFinite(built.tread) ? (built.tread * 100).toFixed(0) : "—"}cm${built.steep ? "（急すぎます）" : ""}</p>`;
    } else if (type === "lift") {
      name = "エレベーター";
      body = '<p class="note">全部の階に停まります。消すと、どの階からもなくなります（シャフトの壁は残ります）。</p>';
    } else if (type === "decor") {
      name = WALL_DECOR[data.k]?.label ?? "壁掛け";
      body = `<label class="field compact"><span>種類</span><select data-prop="k">${Object.entries(WALL_DECOR).map(([id, kind]) => option(id, kind.label, data.k)).join("")}</select></label>
        ${numberField("床からの高さ", "y", data.y, { min: 0, max: floor.h, step: 0.05 })}`;
    } else if (type === "room") {
      name = data.n || ROOM_LABELS[data.code] || "部屋";
      body = `<label class="field compact"><span>名前</span><input type="text" data-prop="n" maxlength="24" value="${escape(data.n)}" placeholder="${escape(ROOM_LABELS[data.code] ?? "部屋の名前")}"></label>
        <label class="field compact"><span>床</span>${finishSelect('data-prop="f"', data.f, ["floor"])}</label>
        <label class="field compact"><span>天井</span>${finishSelect('data-prop="c"', data.c, ["ceiling"])}</label>
        ${numberField("床の高さ（段差）", "y", data.y, { min: -1.5, max: 1.5, step: 0.01 })}
        <label class="check"><input type="checkbox" data-prop="open" ${data.open ? "checked" : ""}> 屋外（ベランダ・テラス：屋根なし）</label>
        <p class="note">${(chosen.area / 1.62).toFixed(1)}畳（${chosen.area.toFixed(2)}㎡）</p>`;
    }
    return `<section class="studio-card inspector"><header><strong>${escape(name)}</strong>
      <button type="button" class="btn danger small" data-studio="remove" ${type === "room" ? "hidden" : ""}>${icon("trash")}<span>消す</span></button></header>${body}</section>`;
  }

  function buildingPanel() {
    const { design, level } = editor;
    const floor = design.storeys[level];
    const roof = design.roof;
    const sources = design.storeys.map((entry, index) => [index, entry]).filter(([index, entry]) => index !== level && !Number.isInteger(entry.like));
    return `<section class="studio-card"><header><strong>${level + 1}階</strong></header>
        ${numberField("階の高さ（床から床）", "h", floor.h, { min: 2.2, max: 5, step: 0.05 }).replace('data-prop="h"', 'data-building="h"')}
        <div class="row wrap">
          ${sources.length ? `<label class="field compact grow"><span>ほかの階と同じにする</span><select data-studio-select="repeat"><option value="">選ぶ…</option>${sources.map(([index]) => option(index, `${index + 1}階と同じ`, "")).join("")}</select></label>` : ""}
        </div>
        <div class="row wrap">
          <button type="button" class="btn soft small" data-studio="clear-storey" ${editor.editable ? "" : "disabled"}>この階を空にする</button>
          <button type="button" class="btn soft small" data-studio="remove-storey" ${design.storeys.length > 1 ? "" : "disabled"}>最上階を取る</button>
        </div>
      </section>
      <section class="studio-card"><header><strong>屋根</strong></header>
        <label class="field compact"><span>形</span><select data-roof="k">${Object.entries(ROOFS).map(([id, label]) => option(id, label, roof.k)).join("")}</select></label>
        <label class="field compact"><span>仕上げ</span>${finishSelect('data-roof="f"', roof.f, ["roof"])}</label>
        ${roof.k === "flat" ? numberField("立ち上がり（パラペット）", "parapet", roof.parapet ?? 0.4, { min: 0, max: 1.5, step: 0.05 }).replace('data-prop="parapet"', 'data-roof="parapet" data-number')
          : `${numberField("勾配", "pitch", roof.pitch ?? 30, { min: 5, max: 60, step: 1, unit: "°" }).replace('data-prop="pitch"', 'data-roof="pitch" data-number')}
             ${numberField("軒の出", "eave", roof.eave ?? 0.45, { min: 0, max: 1.2, step: 0.05 }).replace('data-prop="eave"', 'data-roof="eave" data-number')}
             <label class="check"><input type="checkbox" data-roof="turn" ${roof.turn ? "checked" : ""}> 棟の向きを変える</label>`}
      </section>
      <section class="studio-card"><header><strong>建物全体</strong></header>
        ${numberField("1階の床の高さ（地面から）", "base", design.base ?? 0.3, { min: 0, max: 1.5, step: 0.05 }).replace('data-prop="base"', 'data-building="base"')}
        ${numberField("天井の高さ", "ceiling", design.ceiling ?? Math.round((floor.h - 0.22) * 100) / 100, { min: 2, max: 4.5, step: 0.05 }).replace('data-prop="ceiling"', 'data-building="ceiling"')}
        <p class="note">${STYLE_LABELS[editor.style]}は${editor.most}階まで建てられます。</p>
        ${house.design ? '<button type="button" class="btn ghost small" data-studio="revert">かんたん間取りに戻す</button>' : ""}
      </section>`;
  }

  function sidePanel() {
    const floor = editor.design.storeys[editor.level];
    const tabs = `<div class="segmented side-tabs" role="group">${[["tool", "道具"], ["building", "建物・階"]].map(([id, label]) =>
      `<button type="button" class="seg" data-studio="side" data-id="${id}" aria-pressed="${side === id}">${label}</button>`).join("")}</div>`;
    if (side === "building") return `${tabs}${buildingPanel()}`;
    if (Number.isInteger(floor.like)) {
      return `${tabs}<section class="studio-card"><header><strong>${editor.level + 1}階は${floor.like + 1}階と同じ間取りです</strong></header>
        <p class="note">${floor.like + 1}階を変えると、この階も一緒に変わります。</p>
        <div class="row wrap"><button type="button" class="btn primary small" data-studio="level" data-id="${floor.like}">${floor.like + 1}階を編集する</button>
        <button type="button" class="btn soft small" data-studio="materialize">この階だけ別の間取りにする</button></div></section>`;
    }
    const options = toolOptions();
    return `${tabs}<section class="studio-card"><header><strong>${TOOLS[editor.tool]}</strong><kbd>${TOOL_KEYS[editor.tool]}</kbd></header>
      <p class="note">${TOOL_HINTS[editor.tool]}</p>${options}</section>
      ${inspector()}
      <label class="check fine"><input type="checkbox" data-studio-check="fine" ${editor.options.fine ? "checked" : ""}> 5cm単位で細かく合わせる（G）</label>`;
  }

  function build() {
    root.innerHTML = `<header class="studio-top" id="studio-top"></header>
      <nav class="studio-tools" id="studio-tools" aria-label="設計の道具"></nav>
      <aside class="studio-side" id="studio-side" aria-label="道具の設定"></aside>
      <div class="studio-plan" id="studio-plan"><canvas id="studio-canvas" aria-label="間取りの図面"></canvas>
        <div class="plan-buttons"><button type="button" class="btn icon-only" data-studio="fit" title="全体を表示">${icon("expand")}</button></div></div>`;
    canvas = root.querySelector("#studio-canvas");
    context = canvas.getContext("2d");
    bindCanvas();
  }

  function render() {
    frame = 0;
    if (!editor) return;
    root.dataset.layout = layout;
    const top = topBar();
    if (top !== topKey) {
      topKey = top;
      root.querySelector("#studio-top").innerHTML = top;
    }
    root.querySelector("#studio-tools").innerHTML = toolRail();
    const panel = sidePanel();
    // (Not rebuilt while unchanged: that would take a field away from under the fingers.)
    if (panel !== panelKey) {
      panelKey = panel;
      root.querySelector("#studio-side").innerHTML = panel;
    }
    drawPlan();
    const message = editor.takeNotice();
    if (message) hooks.notify(message);
  }

  function invalidate() {
    if (!frame && editor) frame = requestAnimationFrame(render);
  }

  // ---- Input ---------------------------------------------------------------------------------

  function bindCanvas() {
    canvas.addEventListener("contextmenu", (event) => event.preventDefault());
    canvas.addEventListener("wheel", (event) => {
      event.preventDefault();
      zoomAt(event.clientX, event.clientY, Math.exp(-event.deltaY * 0.0014));
    }, { passive: false });
    canvas.addEventListener("pointerdown", (event) => {
      canvas.setPointerCapture?.(event.pointerId);
      if (event.pointerType === "touch") {
        fingers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        if (fingers.size === 2) {
          // Two fingers move the paper; whatever one finger had begun is put down.
          if (held?.draw) editor.pointer("cancel");
          held = { pan: true };
          return;
        }
      }
      if (event.button === 1 || event.button === 2 || spaceDown) {
        held = { pan: true, x: event.clientX, y: event.clientY, button: event.button, moved: false };
        return;
      }
      held = { draw: true };
      editor.pointer("down", toPlan(event.clientX, event.clientY));
    });
    canvas.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch" && fingers.has(event.pointerId)) {
        const before = [...fingers.values()];
        fingers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        if (fingers.size === 2) {
          const after = [...fingers.values()];
          const spread = (pair) => Math.hypot(pair[0].x - pair[1].x, pair[0].y - pair[1].y) || 1;
          const middle = (pair) => [(pair[0].x + pair[1].x) / 2, (pair[0].y + pair[1].y) / 2];
          const [mx, my] = middle(after);
          const [ox, oy] = middle(before);
          view.x += mx - ox;
          view.y += my - oy;
          zoomAt(mx, my, spread(after) / spread(before));
          return;
        }
      }
      if (held?.pan) {
        if (held.x === undefined) return;
        view.x += event.clientX - held.x;
        view.y += event.clientY - held.y;
        if (Math.hypot(event.clientX - held.x, event.clientY - held.y) > 2) held.moved = true;
        held.x = event.clientX;
        held.y = event.clientY;
        invalidate();
        return;
      }
      editor.pointer(held?.draw ? "move" : "hover", toPlan(event.clientX, event.clientY));
    });
    const release = (event) => {
      fingers.delete(event.pointerId);
      const was = held;
      if (fingers.size < 2 && was?.pan && was.x === undefined) {
        held = null;
        return;
      }
      held = null;
      if (was?.pan) {
        // The other mouse button, let go where it was pressed, puts the pencil down.
        if (was.button === 2 && !was.moved) editor.pointer("cancel");
        return;
      }
      if (was?.draw) editor.pointer(event.type === "pointercancel" ? "cancel" : "up", toPlan(event.clientX, event.clientY));
    };
    canvas.addEventListener("pointerup", release);
    canvas.addEventListener("pointercancel", release);
    canvas.addEventListener("pointerleave", () => {
      if (!held) editor?.pointer("hover", { x: -99, z: -99 });
    });
    canvas.addEventListener("dblclick", () => editor.commitDraft());
    new ResizeObserver(() => {
      view.fitted = false;
      invalidate();
      hooks.onLayout?.();
    }).observe(canvas.parentElement);
  }

  const commands = {
    close: () => close(),
    save: () => save(),
    undo: () => editor.undo(),
    redo: () => editor.redo(),
    tool: ({ id }) => {
      side = "tool";
      editor.setTool(id);
    },
    level: ({ id }) => editor.setLevel(Number(id)),
    "add-storey": () => {
      if (editor.addStorey()) editor.setLevel(editor.design.storeys.length - 1);
    },
    "remove-storey": () => editor.removeStorey(),
    "clear-storey": () => editor.clearStorey(),
    materialize: () => editor.materialize(),
    layout: ({ id }) => {
      layout = id;
      view.fitted = false;
      invalidate();
      requestAnimationFrame(() => hooks.onLayout?.());
    },
    side: ({ id }) => {
      side = id;
      invalidate();
    },
    fit: () => {
      view.fitted = false;
      invalidate();
    },
    "wall-kind": ({ id }) => editor.setOption("wall", { kind: id }),
    "opening-group": ({ id }) => {
      openingGroup = id;
      const first = Object.entries(OPENINGS).find(([key, kind]) => Boolean(kind.door) === (id === "door") && key !== "lift-door");
      editor.setOption("opening", { k: first[0], c: id === "door" ? "wood" : "white" });
    },
    "opening-kind": ({ id }) => editor.setOption("opening", { k: id }),
    "item-kind": ({ id }) => editor.setOption("item", { k: id }),
    "decor-kind": ({ id }) => editor.setOption("decor", { k: id }),
    "stair-shape": ({ id }) => {
      editor.cancel();
      editor.setOption("stair", { shape: id });
    },
    rotate: () => editor.rotate(90),
    commit: () => editor.commitDraft(),
    remove: () => editor.remove(),
    "reverse-stair": () => editor.update({ reverse: true }),
    revert: async () => {
      const answer = await hooks.confirm({
        title: "かんたん間取りに戻す", text: "壁一枚ずつの設計を捨てて、マス目で塗る間取りに戻します。元には戻せません。",
        actions: [["revert", "戻す", "danger"], ["cancel", "やめる", "ghost"]],
      });
      if (answer === "revert") hooks.onRevert(house);
    },
  };

  root.addEventListener("click", (event) => {
    const control = event.target.closest("[data-studio]");
    if (!control || control.disabled || !editor) return;
    commands[control.dataset.studio]?.(control.dataset);
    invalidate();
  });

  root.addEventListener("change", (event) => {
    if (!editor) return;
    const control = event.target;
    const value = control.type === "checkbox" ? control.checked : control.type === "number" || control.hasAttribute("data-number") ? Number(control.value) : control.value;
    if (control.dataset.opt) {
      const [group, key] = control.dataset.opt.split(".");
      editor.setOption(group, { [key]: value });
    } else if (control.dataset.prop) editor.update({ [control.dataset.prop]: value });
    else if (control.dataset.building) editor.setBuilding({ [control.dataset.building]: value });
    else if (control.dataset.roof) editor.setBuilding({ roof: { [control.dataset.roof]: control.type === "checkbox" ? (value ? 1 : 0) : value } });
    else if (control.dataset.studioCheck === "fine") editor.setOption("fine", value);
    else if (control.dataset.studioSelect === "item-group") {
      itemGroup = value;
      const first = Object.entries(ITEMS).find(([, kind]) => kind.group === itemGroup);
      editor.setOption("item", { k: first[0] });
    } else if (control.dataset.studioSelect === "repeat" && value !== "") editor.repeatStorey(Number(value));
    else return;
    // What was typed is put right (kept within its limits) even where nothing else changed.
    panelKey = "";
    invalidate();
  });

  function onKeyDown(event) {
    if (!editor || root.hidden || document.querySelector("dialog[open]")) return;
    if (event.key === " ") spaceDown = true;
    const typing = event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable]");
    if (typing) {
      if (event.key === "Escape") event.target.blur();
      return;
    }
    const key = event.key.toLowerCase();
    const control = event.ctrlKey || event.metaKey;
    if (control && key === "z") {
      if (event.shiftKey) editor.redo();
      else editor.undo();
    } else if (control && key === "y") editor.redo();
    else if (control && key === "s") save();
    else if (control || event.altKey) return;
    else if (key === "escape") {
      if (editor.draft || editor.ghost) editor.cancel();
      else if (editor.selection) editor.select(null);
      else if (editor.tool !== "select") editor.setTool("select");
    } else if (key === "enter") editor.commitDraft();
    else if (key === "delete" || key === "backspace") editor.remove();
    else if (key === "r") editor.rotate(event.shiftKey ? -90 : 90);
    else if (key === "g") editor.setOption("fine", !editor.options.fine);
    else if (key === "pageup") editor.setLevel(editor.level + 1);
    else if (key === "pagedown") editor.setLevel(editor.level - 1);
    else {
      const tool = Object.entries(TOOL_KEYS).find(([, letter]) => letter.toLowerCase() === key)?.[0];
      if (!tool) return;
      side = "tool";
      editor.setTool(tool);
    }
    event.preventDefault();
    event.stopPropagation();
    invalidate();
  }
  document.addEventListener("keydown", onKeyDown, true);
  document.addEventListener("keyup", (event) => {
    if (event.key === " ") spaceDown = false;
  });

  // ---- Opening, saving and closing --------------------------------------------------------

  async function save() {
    if (!editor || saving) return false;
    const problems = editor.problems();
    if (problems.length) {
      hooks.notify(problems[0]);
      return false;
    }
    if (!editor.dirty) return true;
    saving = true;
    topKey = "";
    invalidate();
    try {
      const saved = await hooks.onSave(house, editor.exportDesign());
      if (saved) {
        house = saved;
        editor.markSaved();
      }
      return Boolean(saved);
    } finally {
      saving = false;
      topKey = "";
      invalidate();
    }
  }

  async function close() {
    if (!editor) return true;
    if (editor.dirty) {
      const answer = await hooks.confirm({
        title: "設計を保存しますか？", text: "保存していない変更があります。",
        actions: [["save", "保存して閉じる", "primary"], ["discard", "保存せずに閉じる", "danger"], ["cancel", "設計を続ける", "ghost"]],
      });
      if (answer === "cancel" || !answer) return false;
      if (answer === "save" && !await save()) return false;
    }
    discard();
    return true;
  }

  // Leaves the studio without asking: what was drawn and not saved is gone.
  function discard() {
    if (!editor) return;
    editor = null;
    house = null;
    root.hidden = true;
    panelKey = topKey = "";
    hooks.onClose();
  }

  return {
    open(next, name) {
      house = next;
      title = name;
      side = "tool";
      panelKey = topKey = "";
      editor = createEditor(house, {
        onChange() {
          invalidate();
          hooks.onDraft();
        },
      });
      // A bare lot is for drawing on: the pencil is in hand from the start.
      if (!editor.design.storeys.some((floor) => floor.walls?.length)) editor.setTool("wall");
      root.hidden = false;
      if (!canvas) build();
      view.fitted = false;
      render();
      hooks.onDraft();
      hooks.onLayout?.();
    },
    close,
    discard,
    save,
    get editor() { return editor; },
    get house() { return house; },
    get layout() { return layout; },
    isOpen: () => Boolean(editor),
    // The part of the screen the plan and the panels cover, for the 3D view to keep clear of.
    covered() {
      if (!editor) return { left: 0, right: 0, top: 0, bottom: 0 };
      const box = (id) => root.querySelector(id)?.getBoundingClientRect();
      const top = box("#studio-top")?.bottom ?? 0;
      const plan = box("#studio-plan");
      const sidebar = box("#studio-side");
      const narrow = matchMedia("(max-width: 900px)").matches;
      if (narrow) return { left: 0, right: 0, top, bottom: layout === "view" ? Math.max(0, innerHeight - (sidebar?.top ?? innerHeight)) : 0 };
      return { left: layout === "view" ? sidebar?.right ?? 0 : plan?.right ?? 0, right: 0, top, bottom: 0 };
    },
    invalidate,
  };
}
