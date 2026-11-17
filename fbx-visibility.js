const decoder = new TextDecoder();
const utf8 = (bytes) => decoder.decode(bytes);

function asciiVisibility(source) {
  const result = new Map();
  const models = /^[\t ]*Model:[\t ]*(-?\d+),[^\r\n]*\{/gm;
  const headers = [...source.matchAll(models)];
  for (const [index, header] of headers.entries()) {
    const block = source.slice(header.index + header[0].length, headers[index + 1]?.index);
    const indent = header[0].match(/^[\t ]*/)[0];
    const end = block.search(new RegExp(`^${indent}\\}[ \\t]*\\r?$`, "m"));
    const properties = end >= 0 ? block.slice(0, end) : block;
    const visibility = properties.match(/^[\t ]*P:[\t ]*"Visibility",[\t ]*[^\r\n]*,\s*(-?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)\s*$/im);
    if (visibility) result.set(Number(header[1]), Number(visibility[1]) > 0);
  }
  return result;
}

// Walks the node tree of a binary FBX file.
function binaryNodes(buffer) {
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);
  const wide = view.getUint32(23, true) >= 7500;
  const integerSize = wide ? 8 : 4;
  const headerSize = 3 * integerSize + 1;
  const integer = (offset) => wide ? Number(view.getBigUint64(offset, true)) : view.getUint32(offset, true);

  function node(offset, bound) {
    if (offset + headerSize > bound) return null;
    const end = integer(offset);
    if (end === 0) return null;
    const nameStart = offset + headerSize;
    const nameEnd = nameStart + view.getUint8(nameStart - 1);
    const propertyEnd = nameEnd + integer(offset + 2 * integerSize);
    if (!Number.isSafeInteger(end) || end > bound || propertyEnd > end) throw new Error("Invalid FBX node");
    return { end, name: utf8(bytes.subarray(nameStart, nameEnd)), nameEnd, propertyEnd };
  }

  function* entries(start, end) {
    while (start < end) {
      const entry = node(start, end);
      if (!entry) return;
      yield entry;
      start = entry.end;
    }
  }

  function properties(entry) {
    const values = [];
    let offset = entry.nameEnd;
    while (offset < entry.propertyEnd) {
      const type = String.fromCharCode(view.getUint8(offset++));
      switch (type) {
        case "S":
        case "R": {
          const length = view.getUint32(offset, true);
          offset += 4;
          if (offset + length > entry.propertyEnd) throw new Error("Invalid FBX property");
          values.push(type === "S" ? utf8(bytes.subarray(offset, offset + length)) : null);
          offset += length;
          break;
        }
        case "Y": values.push(view.getInt16(offset, true)); offset += 2; break;
        case "C": values.push(view.getUint8(offset)); offset += 1; break;
        case "I": values.push(view.getInt32(offset, true)); offset += 4; break;
        case "F": values.push(view.getFloat32(offset, true)); offset += 4; break;
        case "D": values.push(view.getFloat64(offset, true)); offset += 8; break;
        case "L": values.push(Number(view.getBigInt64(offset, true))); offset += 8; break;
        default: return [];
      }
    }
    if (offset !== entry.propertyEnd) throw new Error("Invalid FBX property");
    return values;
  }

  // The "P" entries of the Properties70 list inside `parent`, as arrays of values.
  function* settings(parent) {
    for (const list of entries(parent.propertyEnd, parent.end)) {
      if (list.name !== "Properties70") continue;
      for (const property of entries(list.propertyEnd, list.end)) {
        if (property.name === "P") yield properties(property);
      }
    }
  }

  return { top: () => entries(27, buffer.byteLength), entries, properties, settings };
}

function binaryVisibility(buffer) {
  const { top, entries, properties, settings } = binaryNodes(buffer);
  const result = new Map();
  for (const group of top()) {
    if (group.name !== "Objects") continue;
    for (const model of entries(group.propertyEnd, group.end)) {
      if (model.name !== "Model") continue;
      const id = properties(model)[0];
      if (!Number.isFinite(id)) continue;
      for (const values of settings(model)) {
        if (values[0] === "Visibility" && Number.isFinite(values.at(-1))) result.set(id, values.at(-1) > 0);
      }
    }
    break;
  }
  return result;
}

const isBinary = (buffer) => utf8(new Uint8Array(buffer, 0, Math.min(18, buffer.byteLength))) === "Kaydara FBX Binary";

export function readFbxVisibility(buffer) {
  try {
    return isBinary(buffer) ? binaryVisibility(buffer) : asciiVisibility(decoder.decode(buffer));
  } catch {
    return new Map();
  }
}

// How many centimetres one unit of the file stands for (1 for most files). Unity turns the file's
// units into metres when it imports a model; the 3D view here keeps them as they are.
export function readFbxUnitScale(buffer) {
  try {
    if (!isBinary(buffer)) {
      const scale = Number(decoder.decode(buffer).match(/P:[\t ]*"UnitScaleFactor"[^\r\n]*,[\t ]*(-?[\d.eE+-]+)[\t ]*$/m)?.[1]);
      return scale > 0 ? scale : 1;
    }
    const { top, settings } = binaryNodes(buffer);
    for (const group of top()) {
      if (group.name !== "GlobalSettings") continue;
      for (const values of settings(group)) {
        if (values[0] === "UnitScaleFactor" && values.at(-1) > 0) return values.at(-1);
      }
    }
  } catch {
    // Fall through to the usual centimetres.
  }
  return 1;
}
