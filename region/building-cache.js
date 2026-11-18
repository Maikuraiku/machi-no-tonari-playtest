import { buildingsIn } from './streets.js'

const TILE = 2000
// A neighbouring street lattice can place a footprint beyond the edge of its source cell.
const MARGIN = 200

const overlaps = (ax, az, bx, bz, x0, z0, x1, z1) => ax <= x1 && az <= z1 && bx >= x0 && bz >= z0

export function preloadBuildings(region, progress = () => {}) {
  const { size } = region
  const columns = Math.ceil(size / TILE)
  const tiles = []
  let count = 0
  for (let row = 0; row < columns; row++) {
    for (let column = 0; column < columns; column++) {
      const x = column * TILE
      const z = row * TILE
      const entries = buildingsIn(region, x - MARGIN, z - MARGIN, Math.min(size, x + TILE) + MARGIN, Math.min(size, z + TILE) + MARGIN)
      // Each footprint belongs to the tile containing its centre. Adjacent tiles may find it
      // during generation, but only its owner keeps it.
      const owned = entries.filter(({ corners: c }) => {
        const cx = (c[0] + c[2] + c[4] + c[6]) / 4
        const cz = (c[1] + c[3] + c[5] + c[7]) / 4
        const ownerX = Math.max(0, Math.min(columns - 1, Math.floor(cx / TILE)))
        const ownerZ = Math.max(0, Math.min(columns - 1, Math.floor(cz / TILE)))
        if (ownerX !== column || ownerZ !== row) return false
        if (cx >= 0 && cx <= size && cz >= 0 && cz <= size) return true
        return overlaps(Math.min(c[0], c[2], c[4], c[6]), Math.min(c[1], c[3], c[5], c[7]),
          Math.max(c[0], c[2], c[4], c[6]), Math.max(c[1], c[3], c[5], c[7]), 0, 0, size, size)
      })
      if (!owned.length) continue
      const corners = new Float32Array(owned.length * 8)
      const floors = new Uint8Array(owned.length)
      const uses = new Uint8Array(owned.length)
      // Housing tones are multiples of 1/255. Schools use 0.5 exactly.
      const tones = new Uint16Array(owned.length)
      const bounds = [Infinity, Infinity, -Infinity, -Infinity]
      for (let id = 0; id < owned.length; id++) {
        const record = owned[id]
        corners.set(record.corners, id * 8)
        floors[id] = record.floors
        uses[id] = record.use
        tones[id] = record.tone === 0.5 ? 256 : Math.round(record.tone * 255)
        for (let k = 0; k < 8; k += 2) {
          const cx = corners[id * 8 + k]
          const cz = corners[id * 8 + k + 1]
          bounds[0] = Math.min(bounds[0], cx)
          bounds[1] = Math.min(bounds[1], cz)
          bounds[2] = Math.max(bounds[2], cx)
          bounds[3] = Math.max(bounds[3], cz)
        }
      }
      tiles.push({ corners, floors, uses, tones, bounds })
      count += owned.length
    }
    progress((row + 1) / columns)
  }

  function inWindow(x0, z0, x1, z1) {
    const out = []
    for (const { corners, floors, uses, tones, bounds } of tiles) {
      if (!overlaps(...bounds, x0, z0, x1, z1)) continue
      for (let id = 0; id < floors.length; id++) {
        const i = id * 8
        const ax = Math.min(corners[i], corners[i + 2], corners[i + 4], corners[i + 6])
        const az = Math.min(corners[i + 1], corners[i + 3], corners[i + 5], corners[i + 7])
        const bx = Math.max(corners[i], corners[i + 2], corners[i + 4], corners[i + 6])
        const bz = Math.max(corners[i + 1], corners[i + 3], corners[i + 5], corners[i + 7])
        if (!overlaps(ax, az, bx, bz, x0, z0, x1, z1)) continue
        // Transfer only this footprint's copy. A later window still needs the original buffer.
        out.push({ corners: corners.slice(i, i + 8), floors: floors[id], use: uses[id], tone: tones[id] === 256 ? 0.5 : tones[id] / 255 })
      }
    }
    return out
  }
  return { count, inWindow }
}
