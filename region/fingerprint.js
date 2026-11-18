// Short fingerprints of what a region town is made of, so a screen can tell whether the region
// it generated is the one the town was made with: FNV-1a 64-bit hashes, as 16 hex characters.
// The same function runs in browsers, in workers, in Node and on the server.

const OFFSET = 0xcbf29ce484222325n
const PRIME = 0x100000001b3n
const MASK = 0xffffffffffffffffn

export function createHash() {
  let h = OFFSET
  const byte = (value) => {
    h ^= BigInt(value & 255)
    h = (h * PRIME) & MASK
  }
  return {
    byte,
    // A 32-bit integer, little-endian.
    int(value) {
      const v = value | 0
      byte(v)
      byte(v >>> 8)
      byte(v >>> 16)
      byte(v >>> 24)
    },
    // A text as its UTF-16 code units, each little-endian.
    text(value) {
      const text = String(value)
      for (let index = 0; index < text.length; index++) {
        const unit = text.charCodeAt(index)
        byte(unit)
        byte(unit >>> 8)
      }
    },
    hex: () => h.toString(16).padStart(16, '0'),
  }
}

// The fingerprint of a division of the land: every 40 m cell's district, then the names.
export function divisionFingerprint(districtOf, names) {
  const hash = createHash()
  for (let index = 0; index < districtOf.length; index++) hash.int(districtOf[index])
  hash.text(names.join('\n'))
  return hash.hex()
}

// The fingerprint of the route map: each line's id and name, its points to 0.1 m, and its
// stations' names and places along it to 0.01 m.
export function linesFingerprint(lines) {
  const hash = createHash()
  for (const line of lines) {
    hash.int(line.id)
    hash.text(line.name)
    const points = line.alignment?.points ?? line.points
    for (let k = 0; k < points.length; k++) hash.int(Math.round(points[k] * 10))
    for (const station of line.stations) {
      hash.text(station.name)
      hash.int(Math.round(station.s * 100))
    }
  }
  return hash.hex()
}

export function regionFingerprint(region) {
  return {
    division: divisionFingerprint(region.division.districtOf, region.division.districts.map((district) => district.name)),
    lines: linesFingerprint(region.rail.lines),
  }
}
