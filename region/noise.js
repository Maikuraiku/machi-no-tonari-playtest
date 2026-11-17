// Seeded numbers and noise for the region generator. Only integer hashing and plain arithmetic
// are used here, so one seed draws the same land in every browser and in Node.

// A 32-bit hash of a seed and two lattice coordinates.
export function hash3(seed, x, z) {
  let h = Math.imul(x | 0, 0x27d4eb2d) ^ Math.imul(z | 0, 0x165667b1) ^ Math.imul(seed | 0, 0x9e3779b1)
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b)
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35)
  return (h ^ (h >>> 16)) >>> 0
}

// The same hash as a number in [0, 1).
export function unit(seed, x, z = 0) {
  return hash3(seed, x, z) / 4294967296
}

// Turns a text or number into a seed.
export function seedOf(value) {
  const text = String(value)
  let h = 0x811c9dc5
  for (let index = 0; index < text.length; index++) {
    h = Math.imul(h ^ text.charCodeAt(index), 0x01000193)
  }
  return h >>> 0
}

// mulberry32: a small generator for sequences of decisions.
export function random(seed) {
  let a = seed >>> 0
  const next = () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  next.range = (low, high) => low + (high - low) * next()
  next.int = (count) => Math.floor(next() * count)
  next.pick = (list) => list[Math.floor(next() * list.length)]
  return next
}

const S = Math.SQRT1_2
const GX = new Float64Array([1, -1, 0, 0, S, -S, S, -S])
const GZ = new Float64Array([0, 0, 1, -1, S, S, -S, -S])

// Gradient noise on a unit lattice, roughly in [-1, 1].
export function noise(seed, x, z) {
  const ix = Math.floor(x)
  const iz = Math.floor(z)
  const fx = x - ix
  const fz = z - iz
  const a = hash3(seed, ix, iz) & 7
  const b = hash3(seed, ix + 1, iz) & 7
  const c = hash3(seed, ix, iz + 1) & 7
  const d = hash3(seed, ix + 1, iz + 1) & 7
  const va = GX[a] * fx + GZ[a] * fz
  const vb = GX[b] * (fx - 1) + GZ[b] * fz
  const vc = GX[c] * fx + GZ[c] * (fz - 1)
  const vd = GX[d] * (fx - 1) + GZ[d] * (fz - 1)
  const u = fx * fx * fx * (fx * (fx * 6 - 15) + 10)
  const v = fz * fz * fz * (fz * (fz * 6 - 15) + 10)
  const top = va + (vb - va) * u
  const bottom = vc + (vd - vc) * u
  return (top + (bottom - top) * v) * 1.41
}

// Several octaves of noise added together, roughly in [-1, 1]. Each octave is shifted so the
// lattices of different octaves never line up.
export function fbm(seed, x, z, octaves = 4, gain = 0.5) {
  let sum = 0
  let amplitude = 1
  let total = 0
  let frequency = 1
  for (let octave = 0; octave < octaves; octave++) {
    sum += amplitude * noise(seed + octave * 1013, x * frequency + octave * 17.31, z * frequency - octave * 9.73)
    total += amplitude
    amplitude *= gain
    frequency *= 2
  }
  return sum / total
}

// Sharp crests where noise crosses zero: ridges and valleys of hill country, in [0, 1].
export function ridged(seed, x, z, octaves = 4, gain = 0.5) {
  let sum = 0
  let amplitude = 1
  let total = 0
  let frequency = 1
  let weight = 1
  for (let octave = 0; octave < octaves; octave++) {
    let value = 1 - Math.abs(noise(seed + octave * 7919, x * frequency + octave * 5.17, z * frequency + octave * 3.11))
    value *= value
    sum += amplitude * value * weight
    weight = Math.min(1, value * 1.6)
    total += amplitude
    amplitude *= gain
    frequency *= 2
  }
  return sum / total
}

export function smoothstep(edge0, edge1, value) {
  const t = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0)))
  return t * t * (3 - 2 * t)
}

export function clamp(value, low, high) {
  return value < low ? low : value > high ? high : value
}
