const animationProperty = "m_IsActive";
const afkParameter = "AFK";

function yamlString(value) {
  const trimmed = value?.trim() ?? "";
  if (trimmed.startsWith('"')) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return trimmed;
    }
  }
  if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
    return trimmed.slice(1, -1).replaceAll("''", "'");
  }
  return trimmed;
}

// Unity breaks long references such as {fileID: 1, guid: ..., type: 2} across lines; put each
// back on one line so that it can be read with the key it belongs to.
function unwrap(source) {
  return source.replace(/(\{[^{}\r\n]*),\r?\n[ \t]+/g, "$1, ");
}

function documents(text) {
  const source = unwrap(text);
  const headers = [...source.matchAll(/^--- !u!(\d+) &(-?\d+)(?:[ \t]+stripped)?[ \t]*\r?$/gm)];
  return new Map(headers.map((header, index) => {
    const body = source.slice(header.index + header[0].length, headers[index + 1]?.index);
    return [header[2], { type: Number(header[1]), body }];
  }));
}

function block(source, key) {
  const lines = source.split(/\r?\n/);
  const index = lines.findIndex((line) => line.startsWith(`  ${key}:`));
  if (index < 0) return "";
  let end = index + 1;
  while (end < lines.length && !/^  [^ \t-]/.test(lines[end])) end++;
  return lines.slice(index + 1, end).join("\n");
}

function refId(value) {
  return value?.match(/\bfileID:[ \t]*(-?\d+)\b/)?.[1];
}

function refGuid(value) {
  return value?.match(/\bguid:[ \t]*([a-f0-9]{32})\b/i)?.[1].toLowerCase();
}

function field(source, key) {
  return source.match(new RegExp(`^  ${key}:[ \\t]*([^\\r\\n]*)`, "m"))?.[1];
}

function items(list) {
  return list.split(/^  - /m).slice(1);
}

function refs(list) {
  return [...list.matchAll(/\bfileID:[ \t]*(-?\d+)\b/g)].map((match) => match[1]);
}

function referencedControllers(prefab) {
  const controllers = new Set();
  for (const match of prefab.matchAll(/^[ \t]*animatorController:[ \t]*(\{[^\r\n]*\})/gm)) {
    const guid = refGuid(match[1]);
    if (guid) controllers.add(guid);
  }
  for (const match of prefab.matchAll(/^[ \t]*propertyPath:[ \t]*(?:base|special)AnimationLayers\.Array\.data\[\d+\]\.animatorController[ \t]*\r?\n[ \t]*value:[^\r\n]*\r?\n[ \t]*objectReference:[ \t]*(\{[^\r\n]*\})/gm)) {
    const guid = refGuid(match[1]);
    if (guid) controllers.add(guid);
  }
  return controllers;
}

function transitionDetails(id, docs) {
  const transition = docs.get(id);
  if (!transition || ![1101, 1109].includes(transition.type)) return null;
  if (field(transition.body, "m_Mute")?.trim() === "1") return null;
  const conditions = items(block(transition.body, "m_Conditions"));
  if (conditions.length !== 1) return null;
  const condition = conditions[0];
  const event = yamlString(condition.match(/^[ \t]*m_ConditionEvent:[ \t]*([^\r\n]*)/m)?.[1]);
  const mode = Number(condition.match(/\bm_ConditionMode:[ \t]*(\d+)/)?.[1]);
  const destination = refId(field(transition.body, "m_DstState"));
  if (event !== afkParameter || ![1, 2].includes(mode) || docs.get(destination)?.type !== 1102) return null;
  return { enabled: mode === 1, destination, hasExitTime: field(transition.body, "m_HasExitTime")?.trim() === "1" };
}

function transitions(source, key, docs) {
  return refs(block(source, key)).map((id) => transitionDetails(id, docs)).filter(Boolean);
}

function stateDestinations(transitions, enabled) {
  return new Set(transitions.filter((transition) =>
    transition.enabled === enabled && !transition.hasExitTime).map(({ destination }) => destination));
}

function stateClips(controllerSource) {
  const docs = documents(controllerSource);
  const controller = [...docs.values()].find(({ type }) => type === 91);
  if (!controller) return [];
  const layers = items(block(controller.body, "m_AnimatorLayers"));
  const motions = [];
  for (const [index, layer] of layers.entries()) {
    if (index > 0 && /^[ \t]*m_DefaultWeight:[ \t]*0(?:\.0+)?[ \t]*$/m.test(layer)) continue;
    const machineId = refId(layer.match(/^[ \t]*m_StateMachine:[ \t]*([^\r\n]*)/m)?.[1]);
    const machine = docs.get(machineId);
    if (machine?.type !== 1107) continue;
    const defaultState = refId(field(machine.body, "m_DefaultState"));
    const states = refs(block(machine.body, "m_ChildStates"))
      .map((id) => docs.get(id)).filter((state) => state?.type === 1102);
    const entry = transitions(machine.body, "m_EntryTransitions", docs);
    const any = transitions(machine.body, "m_AnyStateTransitions", docs);
    const fromDefault = transitions(docs.get(defaultState)?.body ?? "", "m_Transitions", docs);
    const all = [...entry, ...any, ...states.flatMap((state) => transitions(state.body, "m_Transitions", docs))];
    if (!all.length) continue;
    const destinations = stateDestinations([...entry, ...any, ...fromDefault], false);
    // Ambiguous immediate transitions require Animator execution to resolve safely.
    if (destinations.size > 1) continue;
    const normalState = destinations.values().next().value ?? defaultState;
    const state = docs.get(normalState);
    if (state?.type !== 1102) continue;
    const normal = refGuid(field(state.body, "m_Motion"));
    if (!normal) continue;

    const fromNormal = transitions(state.body, "m_Transitions", docs);
    const awayDestinations = stateDestinations([...entry, ...any, ...fromDefault, ...fromNormal], true);
    const awayState = awayDestinations.size === 1 ? awayDestinations.values().next().value :
      awayDestinations.size === 0 && normalState !== defaultState ? defaultState : null;
    const away = awayState && awayState !== normalState &&
      refGuid(field(docs.get(awayState)?.body ?? "", "m_Motion"));
    motions.push({ normal, away });
  }
  return motions;
}

function clipVisibility(source) {
  const clip = [...documents(source).values()].find(({ type }) => type === 74);
  const visibility = new Map();
  if (!clip) return visibility;
  for (const curve of items(block(clip.body, "m_FloatCurves"))) {
    const property = yamlString(curve.match(/^[ \t]*attribute:[ \t]*([^\r\n]*)/m)?.[1]);
    const type = curve.match(/^[ \t]*classID:[ \t]*(\d+)/m)?.[1];
    const path = yamlString(curve.match(/^[ \t]*path:[ \t]*([^\r\n]*)/m)?.[1]);
    if (property !== animationProperty || type !== "1" || !path) continue;
    const keyframe = curve.match(/^[ \t]*time:[ \t]*[-+\d.eE]+[ \t]*\r?\n[ \t]*value:[ \t]*([-+\d.eE]+)[ \t]*$/m);
    const value = Number(keyframe?.[1]);
    if (value === 0 || value === 1) visibility.set(path, value === 1);
  }
  return visibility;
}

export async function readUnityFxDefaults(assets, pathsByGuid, modelPath, prefabSettings) {
  const prefab = prefabSettings?.prefabSource;
  const visibility = new Map();
  const ambiguous = new Set();
  const awayVisibility = new Map();
  const ambiguousAway = new Set();
  const clips = new Map();
  if (!prefab) return visibility;

  async function readClip(guid) {
    if (!clips.has(guid)) {
      const path = pathsByGuid.get(guid);
      const clip = /\.anim$/i.test(path ?? "") && assets.get(path);
      clips.set(guid, clip ? clipVisibility(await clip.text()) : new Map());
    }
    return clips.get(guid);
  }

  for (const guid of referencedControllers(prefab)) {
    const path = pathsByGuid.get(guid);
    const controller = /\.controller$/i.test(path ?? "") && assets.get(path);
    if (!controller) continue;
    for (const { normal, away } of stateClips(await controller.text())) {
      const normalState = await readClip(normal);
      const awayState = away ? await readClip(away) : null;
      for (const [objectPath, active] of normalState) {
        if (visibility.has(objectPath) && visibility.get(objectPath) !== active) ambiguous.add(objectPath);
        visibility.set(objectPath, active);
        if (!awayState?.has(objectPath)) {
          ambiguousAway.add(objectPath);
          continue;
        }
        const awayActive = awayState.get(objectPath);
        if (awayVisibility.has(objectPath) && awayVisibility.get(objectPath) !== awayActive) {
          ambiguousAway.add(objectPath);
        }
        awayVisibility.set(objectPath, awayActive);
      }
    }
  }
  for (const path of ambiguous) {
    visibility.delete(path);
    awayVisibility.delete(path);
  }
  for (const path of ambiguousAway) awayVisibility.delete(path);
  for (const [path, active] of awayVisibility) {
    if (visibility.get(path) === active) awayVisibility.delete(path);
  }
  if (awayVisibility.size) visibility.afkOn = awayVisibility;
  return visibility;
}

export { block, documents, field, items, refGuid, refId, refs, unwrap, yamlString };
