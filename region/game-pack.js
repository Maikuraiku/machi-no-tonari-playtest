// A monorail line of the route map as the server keeps it (a "line pack"): its points every
// 20 m as decimetre steps, the top of its beam at each point in centimetres, and its stations
// with the land they stand on. About 10 KB of JSON for a 20 km line. The server checks it
// (region-town.mjs); every screen lays the same line from it. Also the division of the land into
// 丁目 as a region town pins it (encodeDivision, decodeDivision).
import { ROUTE_DRIVE } from '../world/route-line.js?v=online-1794980046418'
import { divisionFingerprint } from './fingerprint.js?v=online-1794980046418'

export const STEP = 20 // metres between points

export function toBase64(bytes) {
  let binary = ''
  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000))
  }
  return btoa(binary)
}

export function fromBase64(text) {
  const binary = atob(text)
  const bytes = new Uint8Array(binary.length)
  for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index)
  return bytes
}

// `line`: { id, name, color, kind, points: [x0, z0, ...] in metres every 20 m, heights: beam
// tops in metres, one per point, stations: [{ name, s, y0, moved?, lots: [A, B] }] }.
export function encodeLine(line) {
  const count = line.points.length / 2
  const dm = (value) => Math.round(value * 10)
  const legs = new DataView(new ArrayBuffer((count - 1) * 4))
  for (let k = 1; k < count; k++) {
    legs.setInt16((k - 1) * 4, dm(line.points[k * 2]) - dm(line.points[k * 2 - 2]), true)
    legs.setInt16((k - 1) * 4 + 2, dm(line.points[k * 2 + 1]) - dm(line.points[k * 2 - 1]), true)
  }
  const heights = new DataView(new ArrayBuffer(count * 2))
  for (let k = 0; k < count; k++) heights.setUint16(k * 2, Math.max(0, Math.min(40000, Math.round(line.heights[k] * 100))), true)
  return {
    id: line.id,
    name: line.name,
    color: line.color,
    kind: line.kind ?? 'line',
    origin: [dm(line.points[0]), dm(line.points[1])],
    points: toBase64(new Uint8Array(legs.buffer)),
    heights: toBase64(new Uint8Array(heights.buffer)),
    stations: line.stations.map((station) => ({
      name: station.name,
      s: Math.round(station.s * 100) / 100,
      y0: Math.round(station.y0 * 100) / 100,
      ...(station.moved ? { moved: Math.round(station.moved * 100) / 100 } : {}),
      lots: station.lots,
    })),
  }
}

export function decodeLine(pack) {
  const legs = fromBase64(pack.points)
  const view = new DataView(legs.buffer)
  const count = legs.length / 4 + 1
  const points = new Float64Array(count * 2)
  let x = pack.origin[0]
  let z = pack.origin[1]
  points[0] = x / 10
  points[1] = z / 10
  for (let k = 1; k < count; k++) {
    x += view.getInt16((k - 1) * 4, true)
    z += view.getInt16((k - 1) * 4 + 2, true)
    points[k * 2] = x / 10
    points[k * 2 + 1] = z / 10
  }
  const heightBytes = fromBase64(pack.heights)
  const heightView = new DataView(heightBytes.buffer)
  const heights = new Float32Array(count)
  for (let k = 0; k < count; k++) heights[k] = heightView.getUint16(k * 2, true) / 100
  return { id: pack.id, name: pack.name, color: pack.color, kind: pack.kind, points, heights, stations: pack.stations }
}

// The spec createLine and route-transit.js take, in region metres (which are scene metres in a
// region town). `ground` is the ground height at each point, for the piers.
export function packSpec(pack, { ground = null, clear = [] } = {}) {
  const line = decodeLine(pack)
  const count = line.points.length / 2
  const path = []
  for (let k = 0; k < count; k++) path.push([line.points[k * 2], line.points[k * 2 + 1]])
  const heights = Array.from(line.heights, (y, k) => [k * STEP, y])
  return {
    id: line.id,
    name: line.name,
    color: line.color,
    path,
    radius: 2000,
    heights,
    ground: ground ? Array.from(ground, (g, k) => [k * STEP, g]) : heights.map(([s, y]) => [s, y - 6.62]),
    y: heights[0][1],
    cars: 2,
    clear,
    drive: ROUTE_DRIVE,
    stops: line.stations.map((station) => ({ name: station.name, at: station.s, side: 1 })),
  }
}

// The division of the land into 丁目 (region.division) as a region town pins it, the body of the
// 'district' action's op 'map': the 40 m grid row by row as runs of one 丁目 each, base64 of
// Uint16LE pairs (id + 1, with 0 for land in no 丁目; then the length, which never runs past the
// end of a row, so each row's lengths add up to the number of columns); the names joined by
// newlines; and the fingerprint the server checks the rebuilt grid against (fingerprint.js).
export function encodeDivision(division) {
  const { columns, districtOf } = division
  if (!Number.isInteger(columns) || columns < 1 || columns > 0xffff || districtOf.length !== columns * columns) throw new Error('the division is not a square grid')
  const names = division.districts.map((district) => district.name)
  if (names.length > 0xfffe) throw new Error('too many districts for the map')
  for (const name of names) {
    if (typeof name !== 'string' || !name || name.includes('\n')) throw new Error(`a district cannot be named ${JSON.stringify(name)}`)
  }
  const runs = []
  for (let row = 0; row < columns; row++) {
    const first = row * columns
    let start = 0
    for (let column = 1; column <= columns; column++) {
      if (column < columns && districtOf[first + column] === districtOf[first + start]) continue
      const id = districtOf[first + start]
      if (!Number.isInteger(id) || id < -1 || id >= names.length) throw new Error(`cell ${first + start} lies in no known district`)
      runs.push(id + 1, column - start)
      start = column
    }
  }
  const view = new DataView(new ArrayBuffer(runs.length * 2))
  for (let index = 0; index < runs.length; index++) view.setUint16(index * 2, runs[index], true)
  return {
    columns,
    runs: toBase64(new Uint8Array(view.buffer)),
    names: names.join('\n'),
    fingerprint: divisionFingerprint(districtOf, names),
  }
}

// The grid and names of a pinned division map: { districtOf: Int16Array (−1 for land in no 丁目),
// names }. Throws on a map that does not cover the grid exactly row by row.
export function decodeDivision(map) {
  const { columns } = map
  if (!Number.isInteger(columns) || columns < 1 || columns > 0xffff) throw new Error('the map has no columns')
  const names = map.names ? String(map.names).split('\n') : []
  if (names.length > 0x7fff) throw new Error('too many districts in the map')
  const bytes = fromBase64(map.runs)
  if (bytes.length % 4) throw new Error('the map\'s runs are cut short')
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  const districtOf = new Int16Array(columns * columns)
  let cell = 0
  let along = 0
  for (let offset = 0; offset < bytes.length; offset += 4) {
    const value = view.getUint16(offset, true)
    const length = view.getUint16(offset + 2, true)
    if (length < 1) throw new Error(`run ${offset / 4} is empty`)
    if (along + length > columns) throw new Error(`run ${offset / 4} runs past the end of its row`)
    if (value > names.length) throw new Error(`run ${offset / 4} names no district`)
    if (cell + length > districtOf.length) throw new Error('the map has too many rows')
    districtOf.fill(value - 1, cell, cell + length)
    cell += length
    along = (along + length) % columns
  }
  if (cell !== districtOf.length) throw new Error('the map has too few rows')
  return { districtOf, names }
}
