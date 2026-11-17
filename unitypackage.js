const blockSize = 512;
const decoder = new TextDecoder();
const invalidPackage = 'Unityパッケージを読み込めませんでした。';
const mimeTypes = {
  '.fbx': 'application/octet-stream',
  '.glb': 'model/gltf-binary',
  '.vrm': 'model/gltf-binary',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.bmp': 'image/bmp',
  '.tga': 'image/x-tga',
};

function tarString(header, offset, length) {
  const bytes = header.subarray(offset, offset + length);
  const stop = bytes.indexOf(0);
  return decoder.decode(stop < 0 ? bytes : bytes.subarray(0, stop));
}

function tarNumber(header, offset, length) {
  if (header[offset] === 0x80) {
    let value = 0;
    for (const byte of header.subarray(offset + 1, offset + length)) value = value * 256 + byte;
    if (Number.isSafeInteger(value)) return value;
  } else {
    const octal = tarString(header, offset, length).trim();
    if (/^[0-7]+$/.test(octal)) return Number.parseInt(octal, 8);
  }
  throw new Error(invalidPackage);
}

function tarEntry(header) {
  const checksum = header.reduce((sum, byte, index) =>
    sum + (index >= 148 && index < 156 ? 32 : byte), 0);
  if (tarNumber(header, 148, 8) !== checksum) throw new Error(invalidPackage);
  const name = tarString(header, 0, 100);
  const prefix = tarString(header, 257, 6) === 'ustar' ? tarString(header, 345, 155) : '';
  return {
    path: (prefix ? prefix + '/' + name : name).replace(/^(?:\.\/)+/, ''),
    size: tarNumber(header, 124, 12),
    isFile: header[156] === 0 || header[156] === 48,
  };
}

function tarStream(reader) {
  let available = new Uint8Array();

  async function take(size, keep = true) {
    const pieces = [];
    while (size > 0) {
      if (!available.length) {
        const { done, value } = await reader.read();
        if (done) throw new Error(invalidPackage);
        available = value;
      }
      const count = Math.min(size, available.length);
      if (keep) pieces.push(available.subarray(0, count));
      available = available.subarray(count);
      size -= count;
    }
    return pieces;
  }

  async function finish() {
    // Drain the gzip stream so its trailer and checksum are validated too.
    while (true) {
      if (available.some((byte) => byte !== 0)) throw new Error(invalidPackage);
      const { done, value } = await reader.read();
      if (done) return;
      available = value;
    }
  }

  return { take, finish };
}

function joinBlock(parts) {
  if (parts.length === 1) return parts[0];
  const block = new Uint8Array(blockSize);
  let offset = 0;
  for (const part of parts) {
    block.set(part, offset);
    offset += part.length;
  }
  return block;
}

function assetPath(pathname) {
  const path = pathname.replace(/[\0\r\n]+$/, '').replaceAll('\\', '/').replace(/^(?:\.\/)+/, '');
  if (/[\0\r\n]/.test(path) || /^[A-Za-z]:/.test(path) ||
    path.split('/').some((part) => part === '' || part === '.' || part === '..')) {
    throw new Error(invalidPackage);
  }
  return path;
}

export async function readUnityPackage(file) {
  if (typeof DecompressionStream !== 'function') {
    throw new Error('このブラウザはUnityパッケージの展開に対応していません。');
  }
  const reader = file.stream().pipeThrough(new DecompressionStream('gzip')).getReader();
  const tar = tarStream(reader);
  const groups = new Map();
  try {
    while (true) {
      const header = joinBlock(await tar.take(blockSize));
      if (header.every((byte) => byte === 0)) break;
      const { path, size, isFile } = tarEntry(header);
      const entry = isFile && /^([a-f0-9]{32})\/(asset(?:\.meta)?|pathname)$/i.exec(path);
      if (entry) {
        const guid = entry[1].toLowerCase();
        const field = entry[2].toLowerCase();
        const group = groups.get(guid) ?? {};
        if (group[field]) throw new Error(invalidPackage);
        group[field] = new Blob(await tar.take(size));
        groups.set(guid, group);
      } else {
        await tar.take(size, false);
      }
      await tar.take((blockSize - size % blockSize) % blockSize, false);
    }
    await tar.finish();

    const assets = new Map();
    const pathsByGuid = new Map();
    for (const [guid, { asset, pathname, "asset.meta": metadata }] of groups) {
      if (!asset || !pathname) continue;
      const path = assetPath(await pathname.text());
      if (assets.has(path)) throw new Error(invalidPackage);
      const extension = path.slice(path.lastIndexOf('.')).toLowerCase();
      assets.set(path, asset.slice(0, asset.size, mimeTypes[extension]));
      if (metadata) assets.set(`${path}.meta`, metadata);
      pathsByGuid.set(guid, path);
    }
    return { assets, pathsByGuid };
  } catch (error) {
    await reader.cancel().catch(() => {});
    throw new Error(invalidPackage, { cause: error });
  } finally {
    reader.releaseLock();
  }
}
