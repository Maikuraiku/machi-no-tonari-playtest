import { LoadingManager, MeshStandardMaterial, Scene, SRGBColorSpace, TextureLoader } from "three";
import { readFbxUnitScale, readFbxVisibility } from "./fbx-visibility.js";
import { readUnityAnimator, readUnityFace } from "./unity-expressions.js";
import { readUnityFxDefaults } from "./unity-fx.js";
import { applyUnityMaterial, findFbxTexture, readUnityMaterials } from "./unity-materials.js";
import { applyUnityPrefab, createUnityNodeLookup, readUnityPrefab } from "./unity-prefab.js";
import { readUnityPackage } from "./unitypackage.js";

const imageFile = /\.(?:png|jpe?g|webp|bmp|gif)$/i;
const modelFile = /\.(?:vrm|glb|fbx|unitypackage)$/i;
const unityAsset = /\.(?:mat|prefab|meta|controller|anim|asset)$/i;
const fileName = (path) => path.split("/").at(-1);
const directory = (path) => path.slice(0, path.lastIndexOf("/") + 1);
const afkLabel = /(?:^|[^a-z])(?:AFK|AKF)(?:$|[^a-z]|gimmick)/i;
const missingImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/a+kAAAAASUVORK5CYII=";

async function describeGlb(file, requireVrm) {
  const buffer = await file.slice(0, 20).arrayBuffer();
  if (buffer.byteLength !== 20) throw new Error("アバターファイルを読み込めませんでした。");
  const header = new DataView(buffer);
  const length = header.getUint32(12, true);
  if (header.getUint32(0, true) !== 0x46546c67 || header.getUint32(4, true) !== 2 ||
      header.getUint32(8, true) !== file.size || header.getUint32(16, true) !== 0x4e4f534a ||
      length <= 0 || length + 20 > file.size) {
    throw new Error("アバターファイルの形式を確認してください。");
  }
  let metadata;
  try {
    metadata = JSON.parse(await file.slice(20, 20 + length).text());
  } catch {
    throw new Error("アバターファイルを読み込めませんでした。");
  }
  const embedded = [metadata?.images, metadata?.buffers].filter(Array.isArray).flat()
    .every((resource) => resource?.uri == null || /^data:/i.test(resource.uri));
  if (!embedded) throw new Error("画像とモデルのデータが埋め込まれたファイルを選んでください。");
  const isVrm = Boolean(metadata?.extensions?.VRM || metadata?.extensions?.VRMC_vrm);
  if (requireVrm && !isVrm) throw new Error("VRMの情報を確認できませんでした。");
  return isVrm ? "vrm" : "glb";
}

function imageResolver(assets, modelPath) {
  const paths = new Map();
  const basenames = new Map();
  for (const path of assets.keys()) {
    if (!imageFile.test(path)) continue;
    const lower = path.toLowerCase();
    const basename = fileName(lower);
    paths.set(lower, path);
    if (!basenames.has(basename) || directory(path) === directory(modelPath)) basenames.set(basename, path);
  }
  return (value) => {
    let path = value.replace(/\\/g, "/");
    try { path = decodeURIComponent(path); } catch { /* Keep the original name. */ }
    path = path.replace(/^\.\//, "").toLowerCase();
    return paths.get(path) ?? paths.get(directory(modelPath).toLowerCase() + path) ??
      basenames.get(fileName(path));
  };
}

function meshPath(mesh, root) {
  const names = [];
  for (let parent = mesh; parent && parent !== root; parent = parent.parent) {
    if (parent.name) names.unshift(parent.userData.originalName || parent.name);
  }
  return names.join("/");
}

function fbxMode(mesh, root, authored, prefab) {
  let explicitlyHidden = mesh.userData.machiHidden === true;
  let afkPart = false;
  for (let node = mesh; node && node !== root; node = node.parent) {
    explicitlyHidden ||= authored.get(node.ID) === false || !node.visible;
    afkPart ||= afkLabel.test(node.userData.originalName || node.name);
  }
  if (!prefab?.prefabPath && afkPart) return "afk";
  return explicitlyHidden ? "hidden" : "always";
}

function loadedMap(map) {
  return map?.image && map.image.src !== missingImage ? map : null;
}

// Ties a compiled animator to the nodes of the loaded model. Curves that point at something the
// model does not have (particle systems, sounds, objects added in Unity) are dropped. Returns the
// nodes whose visibility the animator switches.
function bindAnimator(root, program, findNode) {
  const targets = program.paths.map((path) => (path ? findNode(path) : root));
  const used = new Set();
  const switched = new Set();
  for (const clip of program.clips) {
    clip.curves = clip.curves.filter(([path, property]) => {
      const node = targets[path];
      if (property.startsWith("param:")) return true;
      if (!node) return false;
      if (property.startsWith("morph:") && !Object.hasOwn(node.morphTargetDictionary ?? {}, property.slice(6))) return false;
      if (/^(?:color|emission|st|invisible|enabled)/.test(property) && !node.isMesh) return false;
      used.add(path);
      if (property === "active") node.traverse((child) => switched.add(child));
      else if (property === "enabled" || property === "invisible") switched.add(node);
      return true;
    });
  }
  for (const path of used) {
    targets[path].userData.machiTarget ??= [];
    targets[path].userData.machiTarget.push(path);
  }
  // The runtime finds nodes by these numbers, so the names can go.
  delete program.paths;
  return switched;
}

// Parts the uploader chose to switch by hand each become a toggle in the gimmick panel.
function manualToggles(parts, options, room) {
  const controls = [];
  for (const { id, name, node } of parts) {
    if (options.parts.get(id) !== "toggle") continue;
    if (controls.length >= room) {
      node.userData.machiVisibility = "hidden";
      continue;
    }
    const control = { id: `part-${id}`, label: fileName(name).slice(0, 120), kind: "toggle", default: false, group: "パーツ" };
    node.userData.machiExpressionBindings = [{ id: control.id, off: { visible: false }, on: { visible: true } }];
    controls.push(control);
  }
  return controls;
}

// Notes which blend shapes close the eyes and shape the mouth, so the avatar can blink and lip-sync.
// The avatar's own settings say which ones; without them, VRChat's usual names are tried.
function markFace(parts, face) {
  for (const { node } of parts) {
    const names = Object.keys(node.morphTargetDictionary ?? {});
    if (!names.length) continue;
    const find = (pattern) => names.find((name) => pattern.test(name));
    const visemes = face?.visemes && names.includes(face.visemes.aa)
      ? Object.fromEntries(Object.entries(face.visemes).filter(([, name]) => names.includes(name)))
      : Object.fromEntries(["aa", "oh", "ou"]
        .map((sound) => [sound, find(new RegExp(`(?:^|[._])v_${sound}$`, "i"))]).filter(([, name]) => name));
    if (visemes.aa) node.userData.machiVisemes = visemes;
    const blink = (visemes.aa && names[face?.blink ?? -1]) || find(/^(?:vrc\.)?blink$/i) ||
      find(/^(?:まばたき|瞬き|eyes?[ _]?closed?|eye[ _]?close)$/i);
    if (blink) node.userData.machiBlink = blink;
  }
}

// When the avatar has PhysBones whose bones cannot be named (newer Unity versions only store a
// hashed id), chains that hang off the humanoid skeleton - hair, tails, ribbons - sway instead.
function autoSprings(root, prefab) {
  const settings = prefab?.springSettings ?? [];
  if (settings.length <= (prefab?.springs?.length ?? 0) || !prefab.humanBones?.length) return;
  const skeleton = new Set(prefab.humanBones);
  const nameOf = (bone) => bone.userData.originalName || bone.name;
  const mean = (key) => settings.reduce((sum, entry) => sum + entry[key], 0) / settings.length;
  const sway = { pull: mean("pull"), spring: mean("spring"), stiffness: mean("stiffness"), gravity: mean("gravity") };
  root.traverse((bone) => {
    if (!bone.isBone || bone.userData.machiSpring || skeleton.has(nameOf(bone))) return;
    if (!bone.parent?.isBone || !skeleton.has(nameOf(bone.parent))) return;
    if (!bone.children.some((child) => child.isBone)) return;
    if (/twist|roll|ik|ctrl|control|constraint|dummy|collider|holder|anchor/i.test(nameOf(bone))) return;
    bone.userData.machiSpring = { ...sway };
  });
}

// The FBX reader gives every mesh its own copy of a bone they share, each nested inside the one
// before. One bone is enough: the copies never move by themselves, and with a single skeleton
// the arms and legs that walk are the ones every mesh hangs on.
function mergeSharedBones(root) {
  const still = (bone) => bone.position.lengthSq() < 1e-12 && Math.abs(bone.quaternion.w) > 0.999999
    && Math.abs(bone.scale.x - 1) + Math.abs(bone.scale.y - 1) + Math.abs(bone.scale.z - 1) < 1e-6;
  const kept = new Map();
  root.traverse((bone) => {
    if (!bone.isBone || !bone.parent?.isBone || bone.ID === undefined || bone.parent.ID !== bone.ID || !still(bone)) return;
    kept.set(bone, kept.get(bone.parent) ?? bone.parent);
  });
  if (!kept.size) return;
  root.traverse((mesh) => {
    if (mesh.isSkinnedMesh) mesh.skeleton.bones = mesh.skeleton.bones.map((bone) => kept.get(bone) ?? bone);
  });
  for (const [copy, bone] of kept) {
    for (const child of [...copy.children]) {
      if (!kept.has(child)) bone.add(child);
    }
    copy.removeFromParent();
  }
}

async function convertFbx(file, path, assets, pathsByGuid, chooseFbxOptions) {
  const [{ FBXLoader }, { GLTFExporter }] = await Promise.all([
    import("three/addons/loaders/FBXLoader.js"),
    import("three/addons/exporters/GLTFExporter.js"),
  ]);
  const urls = new Map();
  const embeddedUrls = new Set();
  function assetUrl(path) {
    if (!urls.has(path)) urls.set(path, URL.createObjectURL(assets.get(path)));
    return urls.get(path);
  }

  const resolveImage = imageResolver(assets, path);
  const manager = new LoadingManager();
  manager.setURLModifier((url) => {
    if (url.startsWith("blob:")) { embeddedUrls.add(url); return url; }
    if (/^data:image\//i.test(url)) return url;
    const image = resolveImage(url);
    return image ? assetUrl(image) : missingImage;
  });
  const fileBytes = await file.arrayBuffer();
  const texturesReady = new Promise((resolve) => { manager.onLoad = resolve; });
  manager.itemStart("avatar");
  try {
    const root = new FBXLoader(manager).parse(fileBytes, "");
    mergeSharedBones(root);
    manager.itemEnd("avatar");
    await texturesReady;
    const [prefab, findMaterial] = await Promise.all([
      readUnityPrefab(assets, pathsByGuid, path),
      readUnityMaterials(assets, pathsByGuid, path),
    ]);
    const [fxDefaults, animator] = await Promise.all([
      readUnityFxDefaults(assets, pathsByGuid, path, prefab),
      readUnityAnimator(assets, pathsByGuid, prefab),
    ]);
    const findNode = createUnityNodeLookup(root, prefab.renames);
    const rendererMaterials = applyUnityPrefab(root, prefab, fxDefaults);
    const authored = readFbxVisibility(fileBytes);
    const normalModes = new Map();
    root.traverse((node) => {
      if (node.isMesh) normalModes.set(node, fbxMode(node, root, authored, prefab));
    });
    if (fxDefaults.afkOn?.size) {
      applyUnityPrefab(root, prefab, new Map([...fxDefaults, ...fxDefaults.afkOn]));
      for (const [node, normalMode] of normalModes) {
        if (normalMode === "always" && node.userData.machiHidden) normalModes.set(node, "active");
        if (normalMode === "hidden" && !node.userData.machiHidden) normalModes.set(node, "afk");
      }
    }
    const recoveredMaps = new Map();
    function loadTexture(path) {
      if (!assets.has(path)) return Promise.resolve(null);
      if (!recoveredMaps.has(path)) {
        recoveredMaps.set(path, new TextureLoader().loadAsync(assetUrl(path)).catch(() => null));
      }
      return recoveredMaps.get(path);
    }

    const parts = [];
    const materials = [];
    const sources = new Map();
    function convertMaterial(source, reference) {
      const description = findMaterial(source.name, reference);
      if (!sources.has(source)) sources.set(source, new Map());
      const variants = sources.get(source);
      if (variants.has(description)) return variants.get(description).material;
      const material = new MeshStandardMaterial({
        name: source.name, color: source.color?.clone(), map: loadedMap(source.map),
        normalMap: loadedMap(source.normalMap), normalScale: source.normalScale,
        roughness: 1, metalness: 0, opacity: source.opacity, transparent: source.transparent,
        alphaTest: source.alphaTest, side: source.side, vertexColors: source.vertexColors,
      });
      const entry = { id: String(materials.length), material, description };
      materials.push(entry);
      variants.set(description, entry);
      return material;
    }
    root.traverse((node) => {
      if (!node.isMesh || !node.geometry?.getAttribute("position")?.count) return;
      const name = meshPath(node, root) || node.name || `パーツ ${parts.length + 1}`;
      const mode = normalModes.get(node);
      parts.push({ id: String(parts.length), node, name, mode });
      const references = rendererMaterials.get(node) ?? [];
      node.material = Array.isArray(node.material)
        ? node.material.map((source, index) => convertMaterial(source, references[index]))
        : convertMaterial(node.material, references[0]);
    });
    if (!parts.length) throw new Error("FBXに表示できる3Dモデルがありません。");
    await Promise.all(materials.map(({ material, description }) =>
      applyUnityMaterial(material, description, loadTexture)));
    const materialOptions = materials.map(({ id, material }) => ({
      id, name: material.name || `材質 ${Number(id) + 1}`,
      texturePath: material.map ? undefined : findFbxTexture(material.name, assets, path),
    }));
    const imagePaths = [...assets.keys()].filter((asset) => imageFile.test(asset));
    // Parts the avatar's own animator shows and hides follow it unless the uploader says otherwise.
    const switched = animator ? bindAnimator(root, animator.program, findNode) : new Set();
    for (const part of parts) {
      if (switched.has(part.node) && ["always", "hidden"].includes(part.mode)) part.mode = "linked";
    }
    // Unity keeps an object's own switch apart from its parents' and from its renderer's, and the
    // animator turns each one separately. The file's own visibility setting disables the renderer.
    const fileHides = (mesh) => {
      for (let node = mesh; node && node !== root; node = node.parent) {
        if (authored.get(node.ID) === false || !node.visible) return true;
      }
      return false;
    };
    const options = await chooseFbxOptions({ parts, materialOptions, imagePaths });
    if (!options) return null;
    for (const [imagePath, image] of options.images) assets.set(imagePath, image);
    await Promise.all(materialOptions.map(async ({ id }) => {
      const imagePath = options.materials.get(id);
      if (!imagePath) return;
      const map = await loadTexture(imagePath);
      if (!map) throw new Error(`テクスチャ画像を読み込めませんでした。 ${fileName(imagePath)}`);
      map.colorSpace = SRGBColorSpace;
      materials[Number(id)].material.map = map;
    }));
    for (const { id, node } of parts) {
      const mode = options.parts.get(id);
      delete node.userData.machiHidden;
      if (mode === "hidden" || mode === "afk" || mode === "active") node.userData.machiVisibility = mode;
      if (mode === "linked") {
        for (let at = node; at && at !== root; at = at.parent) {
          if (rendererMaterials.inactive.has(at)) at.userData.machiStartsHidden = true;
        }
        if (rendererMaterials.disabled.has(node) || fileHides(node)) node.userData.machiStartsDisabled = true;
      } else if (switched.has(node)) {
        // The uploader's choice for this part wins over the animator.
        node.userData.machiFixed = true;
      }
    }
    const scene = new Scene().add(root);
    const menu = animator?.controls ?? [];
    const controls = [...manualToggles(parts, options, 64 - menu.length), ...menu];
    if (controls.length) scene.userData.machiExpressions = controls;
    if (animator) {
      scene.userData.machiAnimator = {
        program: animator.program, bindings: animator.bindings, sync: animator.sync,
        // Unity works in metres and mirrors the model left to right; clips that move things need both.
        unit: 100 / readFbxUnitScale(fileBytes),
      };
    }
    markFace(parts, animator?.face ?? readUnityFace(prefab.prefabSource));
    // Hair, skirts and tails that the avatar sets up to sway keep swaying here.
    for (const spring of prefab?.springs ?? []) {
      const node = findNode(spring.path);
      if (!node) continue;
      node.userData.machiSpring = {
        pull: spring.pull, spring: spring.spring, stiffness: spring.stiffness, gravity: spring.gravity,
        ignore: spring.ignore.map((path) => findNode(path)?.name).filter(Boolean),
      };
    }
    autoSprings(root, prefab);
    const result = await new GLTFExporter().parseAsync(scene, { binary: true, onlyVisible: false });
    return new Blob([result], { type: "model/gltf-binary" });
  } finally {
    for (const url of [...urls.values(), ...embeddedUrls]) URL.revokeObjectURL(url);
  }
}

export async function prepareAvatar(files, chooseModel, progress, chooseFbxOptions) {
  const assets = new Map();
  const pathsByGuid = new Map();
  const candidates = new Map();
  for (const file of files) {
    if (/\.unitypackage$/i.test(file.name)) {
      progress("Unityパッケージを開いています…");
      const entries = await readUnityPackage(file);
      for (const [path, blob] of entries.assets) {
        if (/\.(?:fbx|glb|vrm)$/i.test(path)) candidates.set(path, blob);
        else if (imageFile.test(path) || unityAsset.test(path)) assets.set(path, blob);
      }
      for (const [guid, path] of entries.pathsByGuid) pathsByGuid.set(guid, path);
    } else if (modelFile.test(file.name)) {
      candidates.set(file.name, file);
    } else if (imageFile.test(file.name) || unityAsset.test(file.name)) {
      assets.set(file.name, file);
    }
  }
  for (const [path, file] of assets) {
    if (!/\.meta$/i.test(path)) continue;
    const guid = (await file.text()).match(/^guid:[ \t]*([a-f0-9]{32})/im)?.[1];
    if (guid) pathsByGuid.set(guid.toLowerCase(), path.slice(0, -5));
  }
  if (candidates.size === 0) throw new Error("VRM、GLB、FBX、または3Dモデル入りのUnityパッケージを選んでください。");
  const path = candidates.size === 1 ? candidates.keys().next().value : await chooseModel([...candidates.keys()]);
  if (!path) return null;
  const model = candidates.get(path);
  if (/\.fbx$/i.test(path)) {
    progress("FBXアバターを変換しています…");
    let blob;
    try {
      blob = await convertFbx(model, path, assets, pathsByGuid, chooseFbxOptions);
    } catch (error) {
      console.error(error);
      throw new Error(error.message || "FBXを読み込めませんでした。モデルと画像を確認してください。");
    }
    return blob ? { blob, format: "glb" } : null;
  }
  return { blob: model, format: await describeGlb(model, /\.vrm$/i.test(path)) };
}
