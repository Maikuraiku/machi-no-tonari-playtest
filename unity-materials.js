import { DoubleSide, FrontSide, RepeatWrapping, SRGBColorSpace } from "three";

const textureSlots = ["_BaseMap", "_BaseColorMap", "_MainTex", "_AlbedoTex", "_DiffuseTex", "_ColorMap"];
const colorSlots = ["_Color", "_BaseColor", "_MainColor", "_TintColor"];
const textureFile = /\.(?:png|jpe?g|webp|bmp|gif|tga)$/i;
const albedoSuffixes = ["albedo", "basecolor", "basecolour", "diffuse", "maintex", "maintexture", "colormap"];

function unityString(raw = "") {
  const value = raw.trim();
  if (value.startsWith('"')) {
    try {
      return JSON.parse(value);
    } catch {
      return value.replace(/^"|"$/g, "");
    }
  }
  if (value.startsWith("'")) return value.slice(1, -1).replaceAll("''", "'");
  return value;
}

function assetName(path) {
  return path.split("/").at(-1).replace(/\.[^.]+$/, "");
}

function normalizeName(name) {
  return unityString(name).replace(/^Material::/i, "").replace(/ \(Instance\)$/i, "").normalize("NFC").toLowerCase();
}

function looseName(name) {
  return normalizeName(name).split(":").at(-1).replace(/[^\p{L}\p{N}]+/gu, "");
}

function field(source, key) {
  return source.match(new RegExp(`^[ \t]*${key}:[ \t]*(.*)$`, "m"))?.[1];
}

function flowFields(value = "") {
  return new Map(Array.from(value.matchAll(/(\w+)\s*:\s*([^,}\s]+)/g), ([, name, data]) => [name, data]));
}

function number(value) {
  if (!value?.trim()) return undefined;
  const result = Number(value);
  return Number.isFinite(result) ? result : undefined;
}

function guid(value) {
  return flowFields(value).get("guid")?.toLowerCase();
}

function vector(value, keys) {
  const fields = flowFields(value);
  const result = keys.map((key) => number(fields.get(key)));
  return result.every((entry) => entry !== undefined) ? result : undefined;
}

function materialProperties(source) {
  const props = new Map();
  const entries = [...source.matchAll(/^[ \t]*-[ \t]*(_\w+):[ \t]*(.*)$/gm)];
  for (const [index, entry] of entries.entries()) {
    const [, name, inlineValue] = entry;
    const next = entries[index + 1]?.index ?? source.length;
    const block = source.slice(entry.index + entry[0].length, next);
    const texture = field(block, "m_Texture");
    if (texture !== undefined) {
      props.set(name, {
        guid: guid(texture),
        repeat: vector(field(block, "m_Scale"), ["x", "y"]),
        offset: vector(field(block, "m_Offset"), ["x", "y"]),
      });
    } else {
      const rgba = vector(inlineValue, ["r", "g", "b", "a"]);
      const scalar = number(inlineValue);
      if (rgba) props.set(name, rgba);
      else if (scalar !== undefined) props.set(name, scalar);
    }
  }
  return props;
}

function materialSurface(source, props, shaderPath, tintAlpha) {
  const renderType = unityString(field(source, "RenderType")).toLowerCase();
  const queue = number(field(source, "m_CustomRenderQueue"));
  const mode = props.get("_Mode");
  const cutoff = props.get("_Cutoff") ?? props.get("_AlphaCutoff");
  const shading = [source, shaderPath ?? ""].join("\n");
  const cutout = renderType === "transparentcutout" || mode === 1 ||
    props.get("_AlphaClip") === 1 || props.get("_AlphaCutoffEnable") === 1 ||
    ((queue === 2450 || queue === 2550) && cutoff > 0 && !props.get("_DstBlend")) ||
    /(?:\b_ALPHATEST_ON\b|\/cutout(?:\/|\.|$)|(?:^|[ /])cutout\.shader\b)/im.test(shading);
  if (cutout) {
    const alphaTest = cutoff ?? 0.5;
    return { mode: "cutout", alphaTest: Math.max(0.001, Math.min(1, alphaTest)) };
  }
  const blend = renderType === "transparent" || mode === 2 || mode === 3 ||
    props.get("_Surface") === 1 || props.get("_SurfaceType") === 1 ||
    /(?:\b_ALPHABLEND_ON\b|\b_ALPHAPREMULTIPLY_ON\b|\/transparent(?:\/|\.|$))/im.test(shading) ||
    (queue >= 3000 && props.get("_DstBlend") > 0);
  if (blend) return { mode: "blend" };
  if (renderType === "opaque" || mode === 0 || props.get("_Surface") === 0 ||
      props.get("_AlphaForceOpaque") === 1) return { mode: "opaque" };
  if (tintAlpha < 1) return { mode: "blend" };
  return {};
}

function sameDirectoryDepth(path, modelPath) {
  const modelParts = modelPath.toLowerCase().split("/").slice(0, -1);
  const assetParts = path.toLowerCase().split("/").slice(0, -1);
  let depth = 0;
  while (depth < modelParts.length && assetParts[depth] === modelParts[depth]) depth++;
  return depth;
}

function chooseClosest(entries, pathOf, modelPath) {
  if (entries.length <= 1) return entries[0];
  const matches = entries.map((entry) => sameDirectoryDepth(pathOf(entry), modelPath));
  const best = Math.max(...matches);
  if (matches.indexOf(best) === matches.lastIndexOf(best)) return entries[matches.indexOf(best)];
}

export function findFbxTexture(materialName, assets, modelPath) {
  const key = looseName(materialName);
  if (!key) return;
  const images = [...assets.keys()].filter((path) => textureFile.test(path));
  const exact = images.filter((path) => looseName(assetName(path)) === key);
  if (exact.length) return chooseClosest(exact, (path) => path, modelPath);
  const albedoNames = new Set(albedoSuffixes.map((suffix) => key + suffix));
  const tagged = images.filter((path) => albedoNames.has(looseName(assetName(path))));
  return chooseClosest(tagged, (path) => path, modelPath);
}

export async function readUnityMaterials(assets, pathsByGuid, modelPath) {
  const materialFiles = [...assets].filter(([path]) => /\.mat$/i.test(path));
  const materials = await Promise.all(materialFiles.map(async ([path, file]) => {
    const source = await file.text();
    const name = unityString(field(source, "m_Name")) || assetName(path);
    return {
      path, name, source, shader: guid(field(source, "m_Shader")),
      parent: guid(field(source, "m_Parent")), props: materialProperties(source),
    };
  }));
  const byPath = new Map(materials.map((material) => [material.path, material]));
  const exactNames = new Map();
  const looseNames = new Map();
  for (const entry of materials) {
    for (const [index, keyOf] of [[exactNames, normalizeName], [looseNames, looseName]]) {
      for (const key of new Set([keyOf(entry.name), keyOf(assetName(entry.path))])) {
        if (!key) continue;
        if (!index.has(key)) index.set(key, []);
        index.get(key).push(entry);
      }
    }
  }

  const choose = (entries = []) => chooseClosest(entries, (entry) => entry.path, modelPath);

  function lineage(entry, seen = new Set()) {
    if (!entry || seen.has(entry.path)) return [];
    seen.add(entry.path);
    return [...lineage(byPath.get(pathsByGuid.get(entry.parent)), seen), entry];
  }

  const resolved = new Map();
  return (name, reference = null) => {
    const assetGuid = typeof reference === "string" ? reference : reference?.guid;
    const entry = byPath.get(pathsByGuid.get(assetGuid?.toLowerCase())) ??
      choose(exactNames.get(normalizeName(name))) ?? choose(looseNames.get(looseName(name)));
    if (!entry) return;
    if (resolved.has(entry)) return resolved.get(entry);
    const ancestors = lineage(entry);
    const props = new Map(ancestors.flatMap((material) => [...material.props]));
    const shader = [...ancestors].reverse().find((material) => material.shader);
    const surfaceSource = [...ancestors].reverse().find((material) =>
      field(material.source, "RenderType") || number(field(material.source, "m_CustomRenderQueue")) >= 0) ?? entry;
    const candidates = textureSlots.map((slot) => ({ slot, ...props.get(slot) })).filter((texture) => texture.guid);
    const albedo = candidates.map((texture) => ({ ...texture, path: pathsByGuid.get(texture.guid) }))
      .find((texture) => texture.path && textureFile.test(texture.path) && assets.has(texture.path));
    const preferredTint = albedo?.slot === "_BaseMap" || albedo?.slot === "_BaseColorMap" ? props.get("_BaseColor") : null;
    const tint = preferredTint ?? colorSlots.map((slot) => props.get(slot)).find(Array.isArray);
    const descriptor = {
      name: entry.name, albedo, tint, cull: props.get("_Cull") ?? props.get("_CullMode"),
      ...materialSurface(surfaceSource.source, props, pathsByGuid.get(shader?.shader), tint?.[3]),
    };
    resolved.set(entry, descriptor);
    return descriptor;
  };
}

export async function applyUnityMaterial(material, description, loadTexture) {
  if (!description) return;
  const { albedo, tint, mode, alphaTest, cull } = description;
  if (albedo) {
    const source = await loadTexture(albedo.path);
    if (source) {
      const map = source.clone();
      map.colorSpace = SRGBColorSpace;
      map.wrapS = map.wrapT = RepeatWrapping;
      if (albedo.repeat) map.repeat.set(...albedo.repeat);
      if (albedo.offset) map.offset.set(...albedo.offset);
      map.needsUpdate = true;
      material.map = map;
      if (!tint) material.color.setRGB(1, 1, 1);
    }
  }
  if (tint) {
    const rgb = tint.slice(0, 3).map((channel) => Math.max(0, Math.min(1, channel)));
    material.color.setRGB(...rgb, SRGBColorSpace);
    material.opacity = mode === "opaque" ? 1 : Math.max(0, Math.min(1, tint[3]));
  }
  if (mode) {
    material.transparent = mode === "blend";
    material.alphaTest = mode === "cutout" ? alphaTest : 0;
  }
  if (cull === 0) material.side = DoubleSide;
  else if (cull === 2) material.side = FrontSide;
  material.needsUpdate = true;
}
