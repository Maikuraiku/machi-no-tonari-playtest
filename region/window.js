// One square of the region as the game draws it: the ground (heights at the corners of a fine
// grid, and what covers it), the main roads, the local streets, the buildings, the streams, the
// railways and the district borders that cross it. Plain numbers and typed arrays only, so it
// can be sent from a worker to the page as it is.
import { ROAD_WIDTH } from './develop.js'
import { boundarySegments } from './districts.js'
import { buildingsIn, streetsIn } from './streets.js'

const overlaps = (ax0, az0, ax1, az1, bx0, bz0, bx1, bz1) => ax0 <= bx1 && bx0 <= ax1 && az0 <= bz1 && bz0 <= az1

function boxOf(points) {
  let x0 = Infinity
  let z0 = Infinity
  let x1 = -Infinity
  let z1 = -Infinity
  for (let k = 0; k < points.length; k += 2) {
    x0 = Math.min(x0, points[k])
    x1 = Math.max(x1, points[k])
    z0 = Math.min(z0, points[k + 1])
    z1 = Math.max(z1, points[k + 1])
  }
  return [x0, z0, x1, z1]
}

// `box` is { x0, z0, x1, z1 } in region metres; `step` the spacing of the ground grid. With
// `buildings` false the window holds no buildings (a district laid out for people to build on);
// with `streets` false it leaves out the local streets too (the far distance, seen from afar).
export function regionWindow(region, { x0, z0, x1, z1, step = 2, buildings = true, streets: withStreets = true } = {}) {
  const { terrain, city, rail, streams } = region
  const { columns, cell } = terrain
  const width = Math.round((x1 - x0) / step) + 1
  const depth = Math.round((z1 - z0) / step) + 1
  // Heights at the grid's corners (fine.heights samples pixel centres, hence the half step).
  const ground = region.fine.heights(x0 - step / 2, z0 - step / 2, step, width, depth)
  const use = new Uint8Array(width * depth)
  const era = new Uint8Array(width * depth)
  const land = new Uint8Array(width * depth)
  for (let j = 0; j < depth; j++) {
    const row = Math.min(columns - 1, Math.max(0, Math.floor((z0 + j * step) / cell)))
    for (let i = 0; i < width; i++) {
      const column = Math.min(columns - 1, Math.max(0, Math.floor((x0 + i * step) / cell)))
      const at = column + row * columns
      const k = i + j * width
      use[k] = city.use[at]
      era[k] = city.built ? city.built[at] : 0
      land[k] = terrain.land ? terrain.land[at] : 0
    }
  }

  const margin = 40
  const roads = []
  for (const link of city.roads.links) {
    const [bx0, bz0, bx1, bz1] = boxOf(link.points)
    if (!overlaps(bx0, bz0, bx1, bz1, x0 - margin, z0 - margin, x1 + margin, z1 + margin)) continue
    roads.push({ kind: link.kind, era: link.era ?? 4, width: ROAD_WIDTH[link.kind], points: Float32Array.from(link.points) })
  }
  const streets = (withStreets ? streetsIn(region, x0, z0, x1, z1) : []).map((street) => ({
    points: Float32Array.from(street.points),
    width: street.width,
    kind: street.kind ?? 'street',
    era: street.era ?? 4,
  }))
  const houses = buildings
    ? region.buildingCache?.inWindow(x0, z0, x1, z1) ?? buildingsIn(region, x0, z0, x1, z1)
      .filter((building) => {
        const [bx0, bz0, bx1, bz1] = boxOf(building.corners)
        return overlaps(bx0, bz0, bx1, bz1, x0, z0, x1, z1)
      })
      .map((building) => ({ corners: Float32Array.from(building.corners), lot: building.lot ?? [0.3, 0.3, 0.4, 0.3], tier: building.tier ?? 1, floors: building.floors, use: building.use, tone: building.tone }))
    : []
  const water = []
  for (const stream of streams.list) {
    const [bx0, bz0, bx1, bz1] = boxOf(stream.points)
    if (!overlaps(bx0, bz0, bx1, bz1, x0 - margin, z0 - margin, x1 + margin, z1 + margin)) continue
    water.push({ points: Float32Array.from(stream.points), width: stream.width, covered: stream.covered })
  }
  const lines = rail.lines.filter((line) => {
    const [bx0, bz0, bx1, bz1] = boxOf(line.alignment.points)
    return overlaps(bx0, bz0, bx1, bz1, x0, z0, x1, z1)
  }).map((line) => line.id)

  // District borders inside the window, and the districts it touches.
  const division = region.division
  const borders = { town: [], block: [] }
  const touched = new Set()
  if (division) {
    division.segments ??= boundarySegments(division)
    for (const kind of ['town', 'block']) {
      const segments = division.segments[kind]
      for (let k = 0; k < segments.length; k += 4) {
        if (!overlaps(Math.min(segments[k], segments[k + 2]), Math.min(segments[k + 1], segments[k + 3]), Math.max(segments[k], segments[k + 2]), Math.max(segments[k + 1], segments[k + 3]), x0, z0, x1, z1)) continue
        borders[kind].push(segments[k], segments[k + 1], segments[k + 2], segments[k + 3])
      }
    }
    const { cell: dc, columns: n, districtOf } = division
    for (let z = Math.max(0, Math.floor(z0 / dc)); z <= Math.min(n - 1, Math.floor(z1 / dc)); z++) {
      for (let x = Math.max(0, Math.floor(x0 / dc)); x <= Math.min(n - 1, Math.floor(x1 / dc)); x++) {
        if (districtOf[x + z * n] >= 0) touched.add(districtOf[x + z * n])
      }
    }
  }
  return {
    box: { x0, z0, x1, z1 },
    step, width, depth,
    heights: ground.height,
    water: ground.water,
    use,
    era,
    land,
    roads,
    streets,
    buildings: houses,
    streams: water,
    lines,
    borders: { town: Float32Array.from(borders.town), block: Float32Array.from(borders.block) },
    districts: [...touched].map((id) => {
      const district = division.districts[id]
      return { id, name: district.name, x: district.x, z: district.z, bbox: district.bbox }
    }),
  }
}
