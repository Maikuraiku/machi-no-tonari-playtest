import { block, documents, field, items, refGuid, refId, refs, unwrap, yamlString } from "./unity-fx.js?v=online-1794946480502";

const menuTypes = new Map([[101, "button"], [102, "toggle"], [103, "submenu"], [203, "slider"]]);
// The hand signs of VRChat, which avatars usually wire to facial expressions.
const gestures = ["こぶし", "手をひらく", "指さし", "ピース", "ロック", "ピストル", "いいね"];
// VRChat numbers the FX layer 5 (AnimLayerType.FX) and keeps it in slot 4 of the base layers.
const fxType = 5;
const fxSlot = 4;

function number(value) {
  if (!value?.trim()) return undefined;
  const result = Number(value);
  return Number.isFinite(result) ? result : undefined;
}

function listField(source, name, indent = 4) {
  return source.match(new RegExp(`(?:^${name}|\\n {${indent}}${name}):[ \\t]*([^\\r\\n]*)`))?.[1];
}

function objectRef(value, localGuid) {
  const id = refId(value);
  const guid = refGuid(value) ?? localGuid;
  return id && id !== "0" && guid ? { id, guid } : null;
}

function assetReader(assets, pathsByGuid) {
  const cached = new Map();
  return (guid, extension) => {
    const path = pathsByGuid.get(guid);
    // An empty extension accepts any text asset: blend trees live in .asset and .controller files alike.
    if (!path?.toLowerCase().endsWith(extension) || !assets.has(path)) return null;
    if (!cached.has(guid)) cached.set(guid, assets.get(path).text().then(documents));
    return cached.get(guid);
  };
}

function avatarDescriptor(body, guid, id) {
  const menu = objectRef(field(body, "expressionsMenu"), guid);
  if (!menu || number(field(body, "customExpressions")) === 0) return null;
  const parameters = objectRef(field(body, "expressionParameters"), guid);
  const controllers = new Map();
  for (const [index, entry] of items(block(body, "baseAnimationLayers")).entries()) {
    const type = number(listField(entry, "type"));
    if (type !== undefined && type !== fxType) continue;
    if (number(listField(entry, "isDefault")) === 1) continue;
    const controller = objectRef(listField(entry, "animatorController"), guid);
    if (controller) controllers.set(index, controller);
  }
  return { guid, id, menu, parameters, controllers };
}

function descriptorOverrides(body, base, inheritedGuid) {
  const changes = new Map();
  for (const entry of body.split(/^    - target:[ \t]*/m).slice(1)) {
    const target = objectRef(entry.split("\n", 1)[0]);
    if (!target || (base && target.id !== base.id)) continue;
    const name = yamlString(listField(entry, "propertyPath", 6));
    if (!name) continue;
    const targetKey = `${target.guid}:${target.id}`;
    const props = changes.get(targetKey) ?? new Map();
    props.set(name, {
      reference: objectRef(listField(entry, "objectReference", 6), inheritedGuid),
      value: number(listField(entry, "value", 6)),
    });
    changes.set(targetKey, props);
  }
  const relevant = [...changes.values()].filter((props) =>
    props.has("expressionsMenu") || (base && [...props.keys()].some((name) =>
      name === "expressionParameters" || name.startsWith("baseAnimationLayers.Array.data["))));
  if (relevant.length !== 1) return base;
  const props = relevant[0];
  if (props.get("customExpressions")?.value === 0) return null;
  const menu = props.has("expressionsMenu") ? props.get("expressionsMenu").reference : base?.menu;
  if (!menu) return null;
  const parameters = props.has("expressionParameters")
    ? props.get("expressionParameters").reference
    : base?.parameters;
  const controllers = new Map(base?.controllers);
  for (const [name, { reference }] of props) {
    const match = name.match(/^baseAnimationLayers\.Array\.data\[(\d+)\]\.animatorController$/);
    if (!match) continue;
    const slot = Number(match[1]);
    const layer = name.slice(0, name.lastIndexOf("."));
    const type = props.get(`${layer}.type`)?.value;
    if (!(type === fxType || (type === undefined && (controllers.has(slot) || slot === fxSlot)))) continue;
    if (reference && props.get(`${layer}.isDefault`)?.value !== 1) controllers.set(slot, reference);
    else controllers.delete(slot);
  }
  return { guid: base?.guid, id: base?.id, menu, parameters, controllers };
}

async function findAvatarDescriptor(docs, guid, readAsset, seen = new Set()) {
  if (!docs) return null;
  const descriptors = [];
  for (const [id, { type, body }] of docs) {
    if (type !== 114) continue;
    const source = avatarDescriptor(body, guid, id);
    if (source) descriptors.push(source);
  }
  if (descriptors.length) return descriptors.length === 1 ? descriptors[0] : null;
  for (const { type, body } of docs.values()) {
    if (type !== 1001) continue;
    const inheritedGuid = refGuid(field(body, "m_SourcePrefab"));
    let base = null;
    if (inheritedGuid && !seen.has(inheritedGuid)) {
      const inherited = await readAsset(inheritedGuid, ".prefab");
      base = await findAvatarDescriptor(inherited, inheritedGuid, readAsset, new Set([...seen, inheritedGuid]));
    }
    const result = descriptorOverrides(body, base, inheritedGuid ?? guid);
    if (result) descriptors.push(result);
  }
  if (descriptors.length !== 1) return null;
  return descriptors[0];
}

async function menuControls(reference, readAsset, parents = [], seen = new Set()) {
  const identity = `${reference.guid}:${reference.id}`;
  if (seen.has(identity)) return [];
  const menu = (await readAsset(reference.guid, ".asset"))?.get(reference.id);
  if (menu?.type !== 114) return [];
  const controls = [];
  const visited = new Set([...seen, identity]);
  for (const entry of items(block(menu.body, "controls"))) {
    const type = menuTypes.get(number(listField(entry, "type")));
    const name = yamlString(listField(entry, "name"));
    if (!type || !name) continue;
    if (type === "submenu") {
      // A submenu which writes a parameter requires its original navigation lifecycle.
      const parameter = yamlString(entry.match(/^    parameter:[ \t]*\r?\n      name:[ \t]*([^\r\n]*)/m)?.[1]);
      if (parameter) continue;
      const child = objectRef(listField(entry, "subMenu"), reference.guid);
      if (child) controls.push(...await menuControls(child, readAsset, [...parents, name], visited));
      continue;
    }
    if (type === "slider") {
      // A dial keeps its parameter under subParameters and has no on-value.
      const dial = yamlString(entry.match(/^    subParameters:[ \t]*\r?\n    - name:[ \t]*([^\r\n]*)/m)?.[1]);
      if (dial) controls.push({ label: name, group: parents.join(" / "), type, parameter: dial, value: 1 });
      continue;
    }
    const parameter = yamlString(entry.match(/^    parameter:[ \t]*\r?\n      name:[ \t]*([^\r\n]*)/m)?.[1]);
    const value = number(listField(entry, "value"));
    if (!parameter || parameter === "AFK" || !value) continue;
    controls.push({ label: name, group: parents.join(" / "), type, parameter, value });
  }
  return controls;
}

async function expressionParameters(reference, readAsset) {
  if (!reference) return new Map();
  const asset = (await readAsset(reference.guid, ".asset"))?.get(reference.id);
  if (asset?.type !== 114) return new Map();
  const result = new Map();
  for (const entry of items(block(asset.body, "parameters"))) {
    const name = yamlString(listField(entry, "name"));
    const defaultValue = number(listField(entry, "defaultValue"));
    const synced = number(listField(entry, "networkSynced"));
    if (name) result.set(name, { defaultValue, synced: synced !== 0 });
  }
  return result;
}

const parameterTypes = new Map([[1, "float"], [3, "int"], [4, "bool"], [9, "trigger"]]);

function controllerParameters(body) {
  const parameters = new Map();
  for (const entry of items(block(body, "m_AnimatorParameters"))) {
    const name = yamlString(listField(entry, "m_Name"));
    const type = number(listField(entry, "m_Type"));
    const defaultField = new Map([[1, "m_DefaultFloat"], [3, "m_DefaultInt"], [4, "m_DefaultBool"], [9, "m_DefaultBool"]]).get(type);
    if (name && defaultField) parameters.set(name, { type, defaultValue: number(listField(entry, defaultField)) ?? 0 });
  }
  return parameters;
}

// Material properties that can be shown here; everything else belongs to the avatar's own shader.
const materialProperties = new Map([
  ["_Invisible", "invisible"], ["_Color", "color"], ["_BaseColor", "color"], ["_MainColor", "color"],
  ["_EmissionColor", "emission"], ["_MainTex_ST", "st"],
]);

function keyframes(curve, pattern, read) {
  const times = [...curve.matchAll(/^[ \t]*time:[ \t]*([-+\d.eE]+)/gm)].map((match) => Number(match[1]));
  const values = [...curve.matchAll(pattern)].map(read);
  if (!values.length || values.length !== times.length || !values.flat().every(Number.isFinite)) return null;
  const keys = values.map((value, index) => [times[index], ...[value].flat()]);
  // A curve that never changes needs only one key.
  const still = keys.every((key) => key.slice(1).every((value, index) => value === keys[0][index + 1]));
  return still ? [keys[0]] : keys;
}

const scalar = /^[ \t]*value:[ \t]*([-+\d.eE]+)[ \t]*\r?$/gm;
const vector = /^[ \t]*value:[ \t]*\{x:[ \t]*([-+\d.eE]+),[ \t]*y:[ \t]*([-+\d.eE]+),[ \t]*z:[ \t]*([-+\d.eE]+)(?:,[ \t]*w:[ \t]*([-+\d.eE]+))?\}/gm;

// Reads the curves of a clip that can be shown here: visibility, blend shapes, a few material
// properties, transforms and animated animator parameters. Body poses and particles are left out.
function compileClip(document, parameters, pathIndex) {
  const settings = block(document.body, "m_AnimationClipSettings");
  const curves = [];
  let end = 0;
  const add = (path, property, keys) => {
    if (!keys) return;
    end = Math.max(end, keys.at(-1)[0]);
    curves.push([pathIndex(path), property, keys]);
  };
  for (const curve of items(block(document.body, "m_FloatCurves"))) {
    const attribute = yamlString(curve.match(/^[ \t]*attribute:[ \t]*([^\r\n]*)/m)?.[1]);
    const path = yamlString(curve.match(/^[ \t]*path:[ \t]*([^\r\n]*)/m)?.[1]);
    const target = curve.match(/^[ \t]*classID:[ \t]*(\d+)/m)?.[1];
    let property;
    if (target === "1" && attribute === "m_IsActive") property = "active";
    else if (["23", "137"].includes(target) && attribute === "m_Enabled") property = "enabled";
    else if (target === "137" && attribute.startsWith("blendShape.") && attribute.length > 11) property = `morph:${attribute.slice(11)}`;
    else if (["23", "137"].includes(target) && attribute.startsWith("material.")) {
      const [, name, channel] = attribute.match(/^material\.(_[A-Za-z0-9_]+?)(?:\.([rgbaxyzw]))?$/) ?? [];
      if (materialProperties.has(name)) property = materialProperties.get(name) + (channel ? `.${channel}` : "");
    } else if (target === "95" && parameters.get(attribute)?.type === 1) property = `param:${attribute}`;
    if (property) add(property.startsWith("param:") ? "" : path, property, keyframes(curve, scalar, (match) => Number(match[1])));
  }
  for (const [list, property] of [["m_ScaleCurves", "scale"], ["m_PositionCurves", "position"], ["m_EulerCurves", "euler"], ["m_RotationCurves", "rotation"]]) {
    for (const curve of items(block(document.body, list))) {
      const path = yamlString(curve.match(/^[ \t]*path:[ \t]*([^\r\n]*)/m)?.[1]);
      add(path, property, keyframes(curve, vector, (match) => match.slice(1, property === "rotation" ? 5 : 4).map(Number)));
    }
  }
  const stop = Number(settings.match(/m_StopTime:[ \t]*([-+\d.eE]+)/)?.[1]);
  return {
    length: Number.isFinite(stop) && stop > 0 ? stop : end,
    loop: /m_LoopTime:[ \t]*1\b/.test(settings),
    curves,
  };
}

function compileBehaviour(document) {
  if (document?.type !== 114) return null;
  const { body } = document;
  if (/^  parameters:/m.test(body) && /^  localOnly:/m.test(body)) {
    // VRCAvatarParameterDriver: set, add, randomise or copy parameters on entering the state.
    return {
      driver: {
        local: number(field(body, "localOnly")) === 1,
        steps: items(block(body, "parameters")).map((entry) => ({
          type: number(listField(entry, "type")) ?? 0, name: yamlString(listField(entry, "name")),
          source: yamlString(listField(entry, "source")), value: number(listField(entry, "value")) ?? 0,
          min: number(listField(entry, "valueMin")) ?? 0, max: number(listField(entry, "valueMax")) ?? 1,
          chance: number(listField(entry, "chance")) ?? 1,
          range: number(listField(entry, "convertRange")) === 1
            ? ["sourceMin", "sourceMax", "destMin", "destMax"].map((name) => number(listField(entry, name)) ?? 0)
            : null,
        })).filter((step) => step.name),
      },
    };
  }
  if (/^  trackingEyes:/m.test(body)) {
    // VRCAnimatorTrackingControl: 1 hands the eyes or mouth back to tracking, 2 gives them to the animation.
    return { tracking: { eyes: number(field(body, "trackingEyes")) ?? 0, mouth: number(field(body, "trackingMouth")) ?? 0 } };
  }
  if (/^  playable:/m.test(body) && /^  goalWeight:/m.test(body) && number(field(body, "playable")) === 1) {
    // VRCAnimatorLayerControl aimed at the FX controller: change one layer's weight.
    return { weight: { layer: number(field(body, "layer")) ?? 0, value: number(field(body, "goalWeight")) ?? 0 } };
  }
  return null;
}

// Turns an animator controller into a compact program for the animator in world/animator.js.
async function compileController(docs, controllerGuid, readAny) {
  const controller = [...docs.values()].find(({ type }) => type === 91);
  if (!controller) return null;
  const parameters = controllerParameters(controller.body);
  const paths = [];
  const pathIndex = (path) => {
    if (!paths.includes(path)) paths.push(path);
    return paths.indexOf(path);
  };
  const clips = [];
  const clipIndex = new Map();

  // `home` is the file a reference without a guid points into.
  async function motionOf(value, home, homeGuid) {
    const id = refId(value);
    if (!id || id === "0") return null;
    const guid = refGuid(value) ?? homeGuid;
    const source = guid === homeGuid ? home : await readAny(guid);
    const document = source?.get(id);
    if (document?.type === 74) {
      const key = `${guid}:${id}`;
      if (!clipIndex.has(key)) {
        clipIndex.set(key, clips.length);
        clips.push(compileClip(document, parameters, pathIndex));
      }
      return { clip: clipIndex.get(key) };
    }
    if (document?.type !== 206) return null;
    const children = [];
    for (const child of items(block(document.body, "m_Childs"))) {
      const motion = await motionOf(listField(child, "m_Motion"), source, guid);
      if (!motion) continue;
      const [, x, y] = listField(child, "m_Position")?.match(/x:[ \t]*([-+\d.eE]+),[ \t]*y:[ \t]*([-+\d.eE]+)/) ?? [];
      children.push({
        motion, threshold: number(listField(child, "m_Threshold")) ?? 0, x: Number(x) || 0, y: Number(y) || 0,
        direct: yamlString(listField(child, "m_DirectBlendParameter")), speed: number(listField(child, "m_TimeScale")) ?? 1,
      });
    }
    return {
      tree: {
        type: number(field(document.body, "m_BlendType")) ?? 0, x: yamlString(field(document.body, "m_BlendParameter")),
        y: yamlString(field(document.body, "m_BlendParameterY")), children,
      },
    };
  }

  const layers = [];
  for (const [index, layer] of items(block(controller.body, "m_AnimatorLayers")).entries()) {
    const rootId = refId(listField(layer, "m_StateMachine"));
    const stateIds = [];
    const firstState = new Map();
    const anyIds = [];
    // Sub-state machines are flattened: their states join the layer, and a transition into one
    // goes to its default state.
    const collect = (machineId, seen = new Set()) => {
      const machine = docs.get(machineId);
      if (machine?.type !== 1107 || seen.has(machineId)) return;
      seen.add(machineId);
      stateIds.push(...refs(block(machine.body, "m_ChildStates")).filter((id) => docs.get(id)?.type === 1102));
      firstState.set(machineId, refId(field(machine.body, "m_DefaultState")));
      anyIds.push(...refs(block(machine.body, "m_AnyStateTransitions")));
      for (const child of items(block(machine.body, "m_ChildStateMachines"))) collect(refId(listField(child, "m_StateMachine")), seen);
    };
    collect(rootId);
    const root = docs.get(rootId);
    if (!root || !stateIds.length) continue;
    const stateIndex = new Map(stateIds.map((id, position) => [id, position]));

    const transitionOf = (id) => {
      const document = docs.get(id);
      if (!document || ![1101, 1109].includes(document.type) || number(field(document.body, "m_Mute")) === 1) return null;
      const state = refId(field(document.body, "m_DstState"));
      const machine = refId(field(document.body, "m_DstStateMachine"));
      const target = stateIndex.get(state) ?? stateIndex.get(firstState.get(machine)) ?? (number(field(document.body, "m_IsExit")) === 1 ? -1 : undefined);
      if (target === undefined) return null;
      return {
        to: target,
        when: items(block(document.body, "m_Conditions")).map((entry) => [
          yamlString(listField(entry, "m_ConditionEvent")), number(listField(entry, "m_ConditionMode")) ?? 1,
          number(listField(entry, "m_EventTreshold")) ?? 0,
        ]),
        exit: number(field(document.body, "m_HasExitTime")) === 1 ? number(field(document.body, "m_ExitTime")) ?? 1 : null,
        self: number(field(document.body, "m_CanTransitionToSelf")) === 1,
      };
    };
    const transitionsOf = (source, key) => refs(block(source, key)).map(transitionOf).filter(Boolean);

    const states = [];
    for (const id of stateIds) {
      const { body } = docs.get(id);
      const behaviours = refs(block(body, "m_StateMachineBehaviours")).map((ref) => compileBehaviour(docs.get(ref))).filter(Boolean);
      states.push({
        name: yamlString(field(body, "m_Name")),
        motion: await motionOf(field(body, "m_Motion"), docs, controllerGuid),
        speed: number(field(body, "m_Speed")) ?? 1,
        time: number(field(body, "m_TimeParameterActive")) === 1 ? yamlString(field(body, "m_TimeParameter")) : null,
        defaults: number(field(body, "m_WriteDefaultValues")) !== 0,
        next: transitionsOf(body, "m_Transitions"),
        enter: behaviours,
      });
    }
    layers.push({
      name: yamlString(listField(layer, "m_Name")),
      weight: index === 0 ? 1 : number(listField(layer, "m_DefaultWeight")) ?? 1,
      start: stateIndex.get(firstState.get(rootId)) ?? 0,
      states,
      any: anyIds.map(transitionOf).filter(Boolean),
      entry: transitionsOf(root.body, "m_EntryTransitions"),
    });
  }
  return {
    parameters: [...parameters].map(([name, { type, defaultValue }]) => ({ name, type: parameterTypes.get(type), default: defaultValue })),
    paths, clips, layers,
  };
}

// The blend shapes the avatar's own settings name for lip sync and blinking.
export function readUnityFace(prefabSource = "") {
  const body = unwrap(prefabSource);
  const visemes = block(body.slice(body.search(/^  VisemeBlendShapes:/m)), "VisemeBlendShapes")
    .split(/\r?\n/).map((line) => line.match(/^  - (.*)$/)?.[1]).filter((name) => name !== undefined).map(yamlString);
  const packed = body.match(/^[ \t]*eyelidsBlendshapes:[ \t]*([0-9a-f]{8})/im)?.[1];
  const listed = body.match(/^[ \t]*eyelidsBlendshapes:[ \t]*\r?\n[ \t]*-[ \t]*(\d+)/m)?.[1];
  const blink = packed
    ? new DataView(Uint8Array.from(packed.match(/../g), (byte) => parseInt(byte, 16)).buffer).getInt32(0, true)
    : listed ? Number(listed) : -1;
  // VRChat's fifteen mouth shapes; the last five are the vowels aa, E, ih, oh, ou.
  const shapes = visemes.length === 15
    ? { aa: visemes[10], ee: visemes[11], ih: visemes[12], oh: visemes[13], ou: visemes[14] }
    : null;
  return { visemes: shapes, blink };
}

// The parameters something in the program reads: a condition, a blend tree or dial that moves
// something that can be shown here, or a driver that copies the value on.
function liveParameters(program) {
  const live = new Set();
  const moves = (motion) => Boolean(motion) && (motion.clip !== undefined
    ? program.clips[motion.clip].curves.length > 0
    : motion.tree.children.some((child) => moves(child.motion)));
  const visit = (motion) => {
    if (!motion?.tree || !moves(motion)) return;
    live.add(motion.tree.x).add(motion.tree.y);
    for (const child of motion.tree.children) {
      if (motion.tree.type === 4) live.add(child.direct);
      visit(child.motion);
    }
  };
  for (const layer of program.layers) {
    for (const transition of [...layer.any, ...layer.entry, ...layer.states.flatMap((state) => state.next)]) {
      for (const [name] of transition.when) live.add(name);
    }
    for (const state of layer.states) {
      if (state.time && moves(state.motion)) live.add(state.time);
      visit(state.motion);
      for (const behaviour of state.enter) {
        for (const step of behaviour.driver?.steps ?? []) if (step.source) live.add(step.source);
      }
    }
  }
  return live;
}

// Reads the avatar's expression menu and FX animator: the menu becomes controls for the game's
// gimmick panel, and the animator becomes a program that reacts to them the way it does in VRChat.
export async function readUnityAnimator(assets, pathsByGuid, prefabSettings) {
  const prefab = prefabSettings?.prefabSource;
  if (!prefab) return null;
  const guid = [...pathsByGuid].find(([, path]) => path === prefabSettings.prefabPath)?.[0];
  const readAsset = assetReader(assets, pathsByGuid);
  const readAny = (assetGuid) => readAsset(assetGuid, "");
  const descriptor = await findAvatarDescriptor(documents(prefab), guid, readAsset, new Set([guid]));
  const reference = descriptor?.controllers.values().next().value;
  const docs = reference && await readAsset(reference.guid, ".controller");
  const program = docs && await compileController(docs, reference.guid, readAny);
  if (!program?.layers.length) return null;

  const known = new Map(program.parameters.map((parameter) => [parameter.name, parameter]));
  const [entries, defaults] = await Promise.all([
    menuControls(descriptor.menu, readAsset),
    expressionParameters(descriptor.parameters, readAsset),
  ]);
  // A menu entry is only useful if the animator listens to its parameter. Dials for the avatar's
  // own shader, for instance, have nothing to turn here.
  const live = liveParameters(program);
  const usable = entries.filter((entry) => known.has(entry.parameter) && live.has(entry.parameter)
    && (entry.type !== "slider" || known.get(entry.parameter).type === "float")).slice(0, 56);
  const shared = (entry) => entry.type === "toggle" && usable.some((other) => other !== entry && other.type === "toggle" && other.parameter === entry.parameter);
  const parameterNames = [...new Set(usable.map((entry) => entry.parameter))];
  const controls = [];
  const bindings = [];
  for (const entry of usable) {
    const id = `menu-${controls.length + 1}`;
    const initial = defaults.get(entry.parameter)?.defaultValue ?? known.get(entry.parameter).default ?? 0;
    controls.push({
      id, label: entry.label.slice(0, 120), kind: entry.type,
      default: entry.type === "slider" ? Math.min(1, Math.max(0, initial)) : entry.type === "toggle" && initial === entry.value,
      ...(entry.group && { group: entry.group.slice(0, 200) }),
      ...(shared(entry) && { exclusive: `choice-${parameterNames.indexOf(entry.parameter)}` }),
      ...(defaults.get(entry.parameter)?.synced === false && { synced: false }),
    });
    bindings.push({ id, kind: entry.type, parameter: entry.parameter, value: entry.value });
  }
  // Hand signs have no menu entry in VRChat; here they get one each, driving both hands.
  if (known.has("GestureLeft") || known.has("GestureRight")) {
    for (const [index, label] of gestures.entries()) {
      const id = `gesture-${index + 1}`;
      controls.push({ id, label, kind: "toggle", default: false, group: "ハンドサイン", exclusive: "gesture" });
      bindings.push({ id, kind: "toggle", gesture: index + 1 });
    }
  }
  // Menu defaults win over the animator's own, as they do in VRChat.
  for (const parameter of program.parameters) {
    const value = defaults.get(parameter.name)?.defaultValue;
    if (value !== undefined) parameter.default = value;
  }
  // What the wearer's screen tells everyone else's, as in VRChat: the menu's synced parameters
  // and the hand signs. Everything else is worked out again on each screen.
  const hands = ["GestureLeft", "GestureRight", "GestureLeftWeight", "GestureRightWeight"];
  const sync = [...new Set([...defaults].filter(([, { synced }]) => synced).map(([name]) => name).concat(hands))]
    .filter((name) => known.has(name)).slice(0, 256);
  return { controls, bindings, sync, program, face: readUnityFace(prefab) };
}
