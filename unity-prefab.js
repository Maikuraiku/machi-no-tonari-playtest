const headerPattern = /^---[ \t]+!u!(\d+)[ \t]+&(-?\d+)(?:[ \t]+stripped)?[ \t]*\r?$/gm;
const rendererTypes = new Set(["23", "137"]);
const transformTypes = new Set(["4", "224"]);
const materialSlot = /^m_Materials\.Array\.data\[(\d+)\]$/;
const weightSlot = /^m_BlendShapeWeights\.Array\.data\[(\d+)\]$/;
const basename = (path) => path.split("/").at(-1);
const dirname = (path) => path.slice(0, path.lastIndexOf("/"));
const stem = (path) => basename(path).replace(/\.[^.]+$/, "").toLowerCase();

function field(source, property) {
  return source.match(new RegExp(`^[ \\t]*${property}:[ \\t]*(.*)$`, "m"))?.[1]?.trim();
}

function unityString(value) {
  if (!value) return "";
  if (value.startsWith('"')) {
    try { return JSON.parse(value); } catch { return value.slice(1, -1); }
  }
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1).replaceAll("''", "'");
  return value;
}

function ref(value) {
  return {
    id: value?.match(/\bfileID:[ \t]*(-?\d+)/)?.[1] ?? "0",
    guid: value?.match(/\bguid:[ \t]*([\da-f]{32})\b/i)?.[1]?.toLowerCase() ?? "",
  };
}

function boolean(value) {
  if (value === "1" || value === "true") return true;
  if (value === "0" || value === "false") return false;
  return undefined;
}

function arrayAfter(source, property) {
  const match = source.match(new RegExp(`^([ \\t]*)${property}:[ \\t]*\\r?$`, "m"));
  if (!match) return [];
  const array = [];
  for (const line of source.slice(match.index + match[0].length).split(/\r?\n/)) {
    if (!line.trim()) continue;
    if (!line.startsWith(match[1] + "- ")) break;
    array.push(line.trim().slice(2));
  }
  return array;
}

// A Unity vector or quaternion, `{x: 0, y: 1.5, z: -0.2}`, as an array.
function numbers(value, keys) {
  return keys.map((key) => Number(value?.match(new RegExp(`\\b${key}:[ \\t]*(-?[\\d.]+(?:[eE][-+]?\\d+)?)`))?.[1]) || 0);
}

function modifications(source) {
  const entries = [...source.matchAll(/^([ \t]*)- target:[ \t]*(\{[^}]+\})[ \t]*\r?$/gm)];
  return entries.map((match, index) => {
    const rest = source.slice(match.index + match[0].length, entries[index + 1]?.index);
    // Only read the properties within this override. Later array entries may
    // contain their own value and objectReference properties.
    const indent = match[1] + "  ";
    const atIndent = (name) => unityString(
      rest.match(new RegExp(`^${indent}${name}:[ \\t]*(.*)$`, "m"))?.[1]?.trim(),
    );
    return {
      target: ref(match[2]),
      property: atIndent("propertyPath"),
      value: atIndent("value"),
      object: ref(atIndent("objectReference")),
    };
  });
}

function parsePrefab(source, path, guid) {
  const headers = [...source.matchAll(headerPattern)];
  const objects = new Map();
  const transforms = new Map();
  const renderers = new Map();
  const instances = [];
  const springs = [];
  const colliders = new Map();
  for (const [index, match] of headers.entries()) {
    const [, type, id] = match;
    const body = source.slice(match.index + match[0].length, headers[index + 1]?.index);
    const corresponding = ref(field(body, "m_CorrespondingSourceObject"));
    if (type === "1") {
      objects.set(id, { name: unityString(field(body, "m_Name")), active: boolean(field(body, "m_IsActive")), corresponding });
    } else if (transformTypes.has(type)) {
      transforms.set(id, { objectId: ref(field(body, "m_GameObject")).id, parentId: ref(field(body, "m_Father")).id, corresponding });
    } else if (rendererTypes.has(type)) {
      renderers.set(id, {
        objectId: ref(field(body, "m_GameObject")).id,
        enabled: boolean(field(body, "m_Enabled")),
        materials: arrayAfter(body, "m_Materials").map((item) => ref(item).guid || null),
        mesh: ref(field(body, "m_Mesh")),
        // What the prefab sets the mesh's blend shapes to, in percent.
        weights: arrayAfter(body, "m_BlendShapeWeights").map(Number),
        corresponding,
      });
    } else if (type === "1001") {
      instances.push({ source: ref(field(body, "m_SourcePrefab")), overrides: modifications(body) });
    } else if (type === "114" && ["integrationType", "rootTransform", "pull"].every((name) =>
      new RegExp(`^[ \\t]*${name}:`, "m").test(body)) && boolean(field(body, "m_Enabled")) !== false) {
      // A VRChat PhysBone: recognised by its fields, since its script id differs between SDK versions.
      const amount = (name) => Number(field(body, name)) || 0;
      springs.push({
        objectId: ref(field(body, "m_GameObject")).id, rootId: ref(field(body, "rootTransform")).id,
        pull: amount("pull"), spring: amount("spring") || amount("momentum"), stiffness: amount("stiffness"),
        gravity: amount("gravity"), ignoreIds: arrayAfter(body, "ignoreTransforms").map((item) => ref(item).id),
        // How thick the chain is, how far it may swing from where it rests, and the colliders it
        // rests against (unless collisions are switched off for it).
        radius: amount("radius"),
        limit: Number(field(body, "limitType")) > 0
          ? { type: Number(field(body, "limitType")), x: amount("maxAngleX"), z: amount("maxAngleZ") } : null,
        colliderIds: boolean(field(body, "allowCollision")) === false ? []
          : arrayAfter(body, "colliders").map((item) => ref(item).id).filter((id) => id !== "0"),
      });
    } else if (type === "114" && ["shapeType", "insideBounds", "radius"].every((name) =>
      new RegExp(`^[ \\t]*${name}:`, "m").test(body)) && boolean(field(body, "m_Enabled")) !== false) {
      // A VRChat PhysBone collider: a sphere, capsule or plane on a bone, in that bone's own space.
      colliders.set(id, {
        objectId: ref(field(body, "m_GameObject")).id, rootId: ref(field(body, "rootTransform")).id,
        shape: Number(field(body, "shapeType")) || 0, inside: boolean(field(body, "insideBounds")) === true,
        radius: Number(field(body, "radius")) || 0, height: Number(field(body, "height")) || 0,
        position: numbers(field(body, "position"), ["x", "y", "z"]),
        rotation: numbers(field(body, "rotation"), ["x", "y", "z", "w"]),
      });
    }
  }
  return { source, path, guid, objects, transforms, renderers, instances, springs, colliders };
}

function modelIdsFromMeta(source) {
  const names = new Map();
  for (const match of source.matchAll(
    /^[ \t]*-[ \t]+first:[ \t]*\r?\n[ \t]+\d+:[ \t]*(-?\d+)[ \t]*\r?\n[ \t]+second:[ \t]*(.+)$/gm,
  )) {
    names.set(match[1], unityString(match[2].trim()));
  }
  const oldTable = source.match(/^([ \t]*)fileIDToRecycleName:[ \t]*\r?$/m);
  if (oldTable) {
    for (const line of source.slice(oldTable.index + oldTable[0].length).trimStart().split(/\r?\n/)) {
      const entry = line.match(/^[ \t]*(-?\d+):[ \t]*(.+)$/);
      if (!entry) break;
      names.set(entry[1], unityString(entry[2].trim()));
    }
  }
  names.delete("0");
  return names;
}

function localPaths(prefab, importedNames) {
  const transformOf = new Map();
  for (const [id, transform] of prefab.transforms) {
    if (transform.objectId !== "0") transformOf.set(transform.objectId, id);
  }

  function transformPath(id, visited = new Set()) {
    const transform = prefab.transforms.get(id);
    if (!transform || visited.has(id)) return [];
    visited.add(id);
    const parent = transformPath(transform.parentId, visited);
    const name = prefab.objects.get(transform.objectId)?.name || importedNames.get(transform.corresponding.id);
    return name && name !== "//RootNode" ? [...parent, name] : parent;
  }

  const pathFor = (objectId) => {
    if (transformOf.has(objectId)) return transformPath(transformOf.get(objectId));
    const object = prefab.objects.get(objectId);
    const name = object?.name || importedNames.get(object?.corresponding.id);
    return name && name !== "//RootNode" ? [name] : [];
  };
  pathFor.transform = (id) => transformPath(id);
  return pathFor;
}

// Where each PhysBone chain starts, including chains set up in the prefabs this one builds on.
function springRules(prefab, modelGuid, importedNames, byGuid, visited = new Set()) {
  if (visited.has(prefab)) return [];
  visited.add(prefab);
  const pathFor = localPaths(prefab, importedNames);
  const rules = [];
  for (const instance of prefab.instances) {
    const source = byGuid.get(instance.source.guid);
    if (source && usesModel(source, modelGuid, byGuid)) rules.push(...springRules(source, modelGuid, importedNames, byGuid, visited));
  }
  for (const spring of prefab.springs) {
    const path = spring.rootId !== "0" ? pathFor.transform(spring.rootId) : pathFor(spring.objectId);
    if (!path.length) continue;
    const colliders = colliderRules(prefab, spring.colliderIds, pathFor);
    rules.push({
      path, pull: spring.pull, spring: spring.spring, stiffness: spring.stiffness, gravity: spring.gravity,
      ignore: spring.ignoreIds.map((id) => pathFor.transform(id)).filter((ignored) => ignored.length),
      ...(spring.radius > 0 ? { radius: spring.radius } : {}),
      ...(spring.limit ? { limit: spring.limit } : {}),
      ...(colliders.length ? { colliders } : {}),
    });
  }
  return rules;
}

// The colliders a PhysBone lists, each with the path of the bone it sits on.
function colliderRules(prefab, ids, pathFor) {
  return ids.map((id) => prefab.colliders.get(id)).filter(Boolean).map(({ objectId, rootId, ...shape }) => ({
    path: rootId !== "0" ? pathFor.transform(rootId) : pathFor(objectId), ...shape,
  })).filter(({ path }) => path.length);
}

function materialOverrides(rule, index, guid) {
  if (!rule.materials) rule.materials = [];
  rule.materials[index] = guid || null;
}

function prefabRules(prefab, modelGuid, importedNames, byGuid, visited = new Set()) {
  if (visited.has(prefab)) return { visibility: [], materials: [], renames: [], weights: [] };
  visited.add(prefab);
  const visibility = [];
  const materials = [];
  // Blend shape weights, in percent, by the mesh's path.
  const weights = [];
  // Names the prefab gives to parts of the model. Animation clips address parts by these names.
  const renames = [];
  const pathFor = localPaths(prefab, importedNames);
  for (const [id, object] of prefab.objects) {
    const path = pathFor(id);
    if (path.length && object.active !== undefined) visibility.push({ path, value: object.active });
  }
  for (const renderer of prefab.renderers.values()) {
    const path = pathFor(renderer.objectId);
    if (!path.length) continue;
    if (renderer.enabled !== undefined) visibility.push({ path, value: renderer.enabled, renderer: true });
    if (renderer.materials.length) materials.push({ path, materials: renderer.materials });
    if (renderer.weights.some(Number.isFinite)) weights.push({ path, weights: renderer.weights });
  }

  for (const instance of prefab.instances) {
    const source = byGuid.get(instance.source.guid);
    if (source && usesModel(source, modelGuid, byGuid)) {
      const inherited = prefabRules(source, modelGuid, importedNames, byGuid, visited);
      visibility.unshift(...inherited.visibility);
      materials.unshift(...inherited.materials);
      renames.unshift(...inherited.renames);
      weights.unshift(...inherited.weights);
    }
    if (instance.source.guid !== modelGuid && !source) continue;

    const lookup = new Map();
    const weighed = new Map();
    const nameOverrides = new Map(
      instance.overrides.filter(({ property }) => property === "m_Name").map(({ target, value }) => [target.id, value]),
    );
    renames.push(...[...nameOverrides.values()].filter(Boolean));
    for (const change of instance.overrides) {
      const guid = change.target.guid || instance.source.guid;
      if (guid !== modelGuid && guid !== source?.guid) continue;
      const original = source?.objects.has(change.target.id)
        ? localPaths(source, importedNames)(change.target.id)
        : source?.renderers.has(change.target.id)
          ? localPaths(source, importedNames)(source.renderers.get(change.target.id).objectId)
          : [importedNames.get(change.target.id) || nameOverrides.get(change.target.id)];
      const path = original.filter((name) => name && name !== "//RootNode");
      if (!path.length) continue;
      if (change.property === "m_IsActive" || change.property === "m_Enabled") {
        const value = boolean(change.value);
        if (value !== undefined) visibility.push({ path, value, renderer: change.property === "m_Enabled" });
      }
      const slot = change.property.match(materialSlot);
      if (slot && Number(slot[1]) < 1024) {
        const key = path.join("\0");
        if (!lookup.has(key)) lookup.set(key, { path });
        materialOverrides(lookup.get(key), Number(slot[1]), change.object.guid);
      }
      const shape = change.property.match(weightSlot);
      if (shape && Number(shape[1]) < 1024 && Number.isFinite(Number(change.value))) {
        const key = path.join("\0");
        if (!weighed.has(key)) weighed.set(key, { path, weights: [] });
        weighed.get(key).weights[Number(shape[1])] = Number(change.value);
      }
    }
    materials.push(...lookup.values());
    weights.push(...weighed.values());
  }
  visited.delete(prefab);
  return { visibility, materials, renames, weights };
}

function usesModel(prefab, modelGuid, byGuid, visited = new Set()) {
  if (!modelGuid || visited.has(prefab)) return false;
  visited.add(prefab);
  return [...prefab.renderers.values()].some(({ mesh }) => mesh.guid === modelGuid) ||
    prefab.instances.some(({ source, overrides }) =>
      source.guid === modelGuid || overrides.some(({ target }) => target.guid === modelGuid) ||
      (byGuid.has(source.guid) && usesModel(byGuid.get(source.guid), modelGuid, byGuid, visited)),
    );
}

export async function readUnityPrefab(assets, pathsByGuid, modelPath, prefabPath) {
  const guidOf = new Map([...pathsByGuid].map(([guid, path]) => [path, guid.toLowerCase()]));
  const modelGuid = guidOf.get(modelPath);
  const prefabs = await Promise.all([...assets].filter(([path]) => /\.prefab$/i.test(path))
    .map(async ([path, blob]) => parsePrefab(await blob.text(), path, guidOf.get(path))));
  const byGuid = new Map(prefabs.filter((prefab) => prefab.guid).map((prefab) => [prefab.guid, prefab]));
  const candidates = prefabs.map((prefab) => {
    const sameName = stem(prefab.path) === stem(modelPath);
    const sameFolder = dirname(prefab.path) === dirname(modelPath);
    const referencesModel = usesModel(prefab, modelGuid, byGuid);
    return {
      prefab,
      score: referencesModel ? 16 + 8 * Number(sameName) + Number(sameFolder) :
        sameName ? 4 + Number(sameFolder) : 0,
    };
  }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score);
  const best = candidates[0];
  const prefab = prefabPath ? prefabs.find(({ path }) => path === prefabPath) :
    best && best.score !== candidates[1]?.score ? best.prefab : undefined;
  if (!prefab) return { visibility: [], materials: [], renames: [], weights: [], springs: [], springSettings: [], springColliders: [], humanBones: [] };

  const meta = assets.get(modelPath + ".meta");
  const metaSource = meta ? await meta.text() : "";
  const importedNames = modelIdsFromMeta(metaSource);
  return {
    prefabPath: prefab.path,
    prefabSource: prefab.source,
    ...prefabRules(prefab, modelGuid, importedNames, byGuid),
    springs: springRules(prefab, modelGuid, importedNames, byGuid),
    // Every PhysBone's settings, including the ones whose bone could not be named.
    springSettings: prefab.springs.map(({ pull, spring, stiffness, gravity, radius }) => ({ pull, spring, stiffness, gravity, radius })),
    // Every collider a PhysBone uses, for the chains whose bones could not be named.
    springColliders: colliderRules(prefab, [...new Set(prefab.springs.flatMap(({ colliderIds }) => colliderIds))], localPaths(prefab, importedNames)),
    // The bones of the humanoid skeleton, as listed in the model's import settings.
    humanBones: [...metaSource.matchAll(/^[ \t]*-[ \t]*boneName:[ \t]*(.+?)[ \t]*\r?$/gm)].map((match) => unityString(match[1])),
  };
}

function normalizedName(name) {
  return name.normalize("NFKC").trim().toLowerCase()
    .replace(/\s+/g, "_").replace(/[\[\].:/]/g, "");
}

function matchingNode(path, byName) {
  const names = path.map(normalizedName).filter(Boolean);
  const candidates = byName.get(names.at(-1)) ?? [];
  let best;
  let bestLength = 0;
  let bestDepth = Infinity;
  for (const { node, parents } of candidates) {
    let length = 1;
    while (length < names.length && length < parents.length && names.at(-1 - length) === parents.at(-1 - length)) {
      length++;
    }
    // The longest run of matching names wins. Between equals the one nearest the top does: a mesh
    // called Book and a bone called Book deep in the skeleton are both "Book", but a path that
    // meant the bone would have named its parents.
    if (length > bestLength || (length === bestLength && parents.length < bestDepth)) {
      bestLength = length;
      bestDepth = parents.length;
      best = node;
    } else if (length === bestLength && parents.length === bestDepth) {
      best = undefined;
    }
  }
  return best;
}

// `renames` are the names a prefab gave to parts of the model. Newer Unity versions refer to those
// parts only by a hashed id, so a renamed part is matched to the model node whose name it ends with
// ("Akira_Tops" is the model's "Tops").
export function createUnityNodeLookup(root, renames = []) {
  const byName = new Map();
  root.traverse((node) => {
    const parents = [];
    for (let current = node; current; current = current.parent) {
      if (current.name) parents.unshift(normalizedName(current.name));
      if (current === root) break;
    }
    if (parents.length) {
      const name = parents.at(-1);
      const candidates = byName.get(name) ?? [];
      candidates.push({ node, parents });
      byName.set(name, candidates);
    }
  });
  const aliases = new Map();
  for (const renamed of new Set(renames.map(normalizedName))) {
    if (!renamed || byName.has(renamed)) continue;
    const original = [...byName.keys()]
      .filter((name) => renamed.endsWith(name) && /[^a-z0-9]/.test(renamed.at(-name.length - 1) ?? ""))
      .sort((a, b) => b.length - a.length)[0];
    if (original) aliases.set(renamed, original);
  }
  return (path) => {
    const parts = Array.isArray(path) ? path : path.split("/");
    if (!parts.some(Boolean)) return root;
    return matchingNode(parts.map((part) => aliases.get(normalizedName(part)) ?? part), byName);
  };
}

export function applyUnityPrefab(root, settings, fxDefaults = new Map()) {
  const findNode = createUnityNodeLookup(root, settings.renames);

  const activity = new Map();
  const enabled = new Map();
  for (const { path, value, renderer } of settings.visibility) {
    const node = findNode(path);
    if (node) (renderer ? enabled : activity).set(node, value);
  }
  // What the prefab itself switches off, before the animator's opening state is taken into account.
  const inactive = new Set([...activity].filter(([, value]) => value === false).map(([node]) => node));
  const disabled = new Set([...enabled].filter(([, value]) => value === false).map(([node]) => node));
  for (const [path, value] of fxDefaults) {
    const node = findNode(path);
    if (node) activity.set(node, value);
  }

  const assigned = new Map();
  for (const { path, materials } of settings.materials) {
    const node = findNode(path);
    if (!node?.isMesh) continue;
    const slots = assigned.get(node) ?? [];
    materials.forEach((guid, index) => { slots[index] = guid; });
    assigned.set(node, slots);
  }

  root.traverse((mesh) => {
    if (!mesh.isMesh) return;
    let hidden = enabled.get(mesh) === false;
    for (let node = mesh; node && !hidden; node = node === root ? null : node.parent) {
      hidden = activity.get(node) === false;
    }
    if (hidden) mesh.userData.machiHidden = true;
    else delete mesh.userData.machiHidden;
  });
  // The blend shapes the prefab sets: the body tucked in under the clothes, a fuller face...
  for (const { path, weights } of settings.weights ?? []) {
    const node = findNode(path);
    const influences = node?.isMesh ? node.morphTargetInfluences : null;
    if (!influences) continue;
    weights.forEach((value, index) => {
      if (Number.isFinite(value) && index < influences.length) influences[index] = Math.min(Math.max(value / 100, -1), 2);
    });
  }
  assigned.inactive = inactive;
  assigned.disabled = disabled;
  return assigned;
}
