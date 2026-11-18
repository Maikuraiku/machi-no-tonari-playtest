// Stations of the monorail, as data. Nothing here puts a station into a town: these are the
// drawings a station is built from when one is placed.
//
// A station is an ordinary building of three storeys, all glass on the outside: the way in
// from the street with a shop beside it, a concourse with the ticket machines, the station
// office and the ticket gates, and above that the platform, shut off from the track by a
// screen of glass whose doors (ホームドア) open only for a train that has stopped. Stairs and a
// lift lead from the street to the concourse, and a second flight and a second lift from
// inside the gates to the platform. The track runs through the station's own lot, along the
// south side of the building, so the same drawing fits wherever a line is laid.
import { ITEMS, floorHeight, storeyOf } from './design.js?v=online-1794980046418'
import { CAR, doorOffsets, trainLength } from './monorail-line.js?v=online-1794980046418'
import { compileDesign, lookOf } from './plans.js?v=online-1794980046418'

const CELL = 0.91
const round = (value) => Math.round(value * 1000) / 1000

// The plan of each storey, drawn in squares of 91 cm (see plans.js for the letters): five
// rows of building at the back of the lot and three rows of open ground under the track.
// X lift, S stairs, A the way in, M shop, E back rooms, O hall, T toilets.
const YARD = '.'.repeat(32)
const storey = (north, south) => [north, north, north, south, south, YARD, YARD, YARD].join('')
const PLAN = [
  storey(`XXSSSSSAA${'M'.repeat(12)}${'E'.repeat(11)}`, `${'A'.repeat(9)}${'M'.repeat(12)}${'E'.repeat(11)}`),
  storey(`XXOOOOOOOTTttEEEEE${'O'.repeat(7)}SSSSSXX`, 'O'.repeat(32)),
  storey(`${'O'.repeat(30)}XX`, 'O'.repeat(32)),
]

// Where things stand in the lot (metres from its north-west corner; the lot is 32 by 8).
const WEST = 1.44 // the west wall
const EDGE = 4.91 // the wall along the edge of the platform
const GATES = 20.2 // the line of the ticket gates on the concourse
const INNER = [0.46, 4.81] // the faces of the north and the south wall indoors

// One station: `cars` is how many cars the trains have that call at it.
function draw(cars) {
  const house = { id: `station-${cars}`, style: 'office', w: 4, d: 1, floors: PLAN }
  const design = JSON.parse(JSON.stringify(compileDesign(house)))
  const outside = lookOf(house).wall
  const paint = (finish) => (finish === outside ? 'metal-silver' : finish)
  const middle = 16
  const doors = doorOffsets(cars).map((offset) => round(middle + offset))

  design.storeys.forEach((level, index) => {
    for (const wall of level.walls) Object.assign(wall, { l: paint(wall.l), r: paint(wall.r) })
    // Glass from the floor to the ceiling wherever there is a window, in frames of aluminium.
    for (const entry of level.openings) {
      if (entry.c === 'black') entry.c = 'silver'
      if (index > 0 && (entry.k === 'win-ribbon' || entry.k === 'win-curtain')) Object.assign(entry, { k: 'win-curtain', s: 0.1, hh: 2.6 })
    }
    // (The halls of a station are not offices.)
    level.items = level.items.filter((thing) => !['office-desk', 'office-chair', 'boxes'].includes(thing.k))
    for (const seed of level.rooms) {
      if (seed.code === 'O') Object.assign(seed, index === 1 ? { n: 'コンコース', f: 'stone-floor' } : { n: 'ホーム', f: 'genkan-floor' })
      if (seed.code === 'E') seed.n = index === 1 ? '駅務室' : '機械室'
      if (seed.code === 'M') seed.n = '売店'
    }
  })

  // The concourse: ticket machines by the stairs, a window from the station office onto the
  // gates, and the gates themselves across the hall, a low screen of glass at either end.
  const concourse = design.storeys[1]
  concourse.items.push({ k: 'ticket-machine', x: 8.25, z: 0.74, r: 0 }, { k: 'ticket-machine', x: 9.2, z: 0.74, r: 0 })
  const office = concourse.walls.findIndex((wall) => Math.abs(wall.a[0] - wall.b[0]) < 1e-6 && Math.abs(wall.a[0] - (WEST + 18 * CELL)) < 0.02
    && Math.min(wall.a[1], wall.b[1]) < 1 && Math.max(wall.a[1], wall.b[1]) < 3.2)
  if (office >= 0) {
    const wall = concourse.walls[office]
    concourse.openings.push({ w: office, at: round(Math.abs(wall.b[1] - wall.a[1]) / 2), k: 'win-slide', ww: 1.65, hh: 1.1, s: 0.9, c: 'silver' })
  }
  // Five cabinets make four ways through: three of the usual width and a wide one (90 cm)
  // for wheelchairs and prams. Every other cabinet is a see-through one.
  const cabinet = ITEMS['ticket-gate'].w
  const ways = [0.6, 0.6, 0.6, 0.95]
  let z = INNER[0] + 0.3
  concourse.walls.push({ a: [GATES, INNER[0]], b: [GATES, round(z)], t: 0.06, l: 'metal-silver', r: 'metal-silver', rail: 'glass', h: 1.1 })
  for (let index = 0; index <= ways.length; index++) {
    concourse.items.push({ k: index % 2 ? 'ticket-gate-clear' : 'ticket-gate', x: GATES, z: round(z + cabinet / 2), r: 90 })
    z += cabinet + (ways[index] ?? 0)
  }
  concourse.walls.push({ a: [GATES, round(z)], b: [GATES, INNER[1]], t: 0.06, l: 'metal-silver', r: 'metal-silver', rail: 'glass', h: 1.1 })

  // The platform: benches along the back wall, and along its edge a screen of glass with a
  // door for every doorway of the train.
  const platform = design.storeys[2]
  for (const x of [7.5, 13.5, 19.5]) platform.items.push({ k: 'platform-bench', x, z: 0.8, r: 0 })
  // The tactile paving runs along the platform, 80 cm in from the screen.
  for (let block = 0; block < 11; block++) platform.items.push({ k: 'tactile-line', x: round(3.95 + block * 2.4), z: round(INNER[1] - 0.8), r: 90 })
  const edge = platform.walls.findIndex((wall) => Math.abs(wall.a[1] - EDGE) < 0.02 && Math.abs(wall.b[1] - EDGE) < 0.02)
  if (edge < 0) throw new Error('The station has no wall along the edge of its platform.')
  const wall = platform.walls[edge]
  const [from, to] = [Math.min(wall.a[0], wall.b[0]), Math.max(wall.a[0], wall.b[0])]
  const along = (x) => round(Math.abs(x - wall.a[0]))
  platform.openings = platform.openings.filter((entry) => entry.w !== edge)
  const half = 0.8
  let x = from + 0.3
  const glaze = (until) => {
    const count = Math.ceil((until - x) / 2.1)
    const wide = (until - x) / count
    for (let pane = 0; pane < count; pane++) {
      platform.openings.push({ w: edge, at: along(x + wide * (pane + 0.5)), k: 'win-curtain', ww: round(wide - 0.1), hh: 2.35, s: 0.05, c: 'silver' })
    }
  }
  for (const door of doors) {
    glaze(door - half - 0.1)
    platform.openings.push({ w: edge, at: along(door), k: 'door-platform', ww: half * 2, hh: 2.1, s: 0, c: 'silver' })
    x = door + half + 0.1
  }
  glaze(to - 0.3)

  // Where the train stands: the middle of the track lies clear of the screen by the gap at
  // the platform's edge (7 cm) and half the width of a car.
  const track = round(EDGE + wall.t / 2 + 0.07 + CAR.width / 2)
  const floor = floorHeight(design, 2)
  // The way in from the street, along the line: piers must keep clear of it.
  const ground = design.storeys[0]
  const front = ground.openings.find((entry) => entry.k === 'door-auto')
  const frontWall = front ? ground.walls[front.w] : null
  const entrance = frontWall ? frontWall.a[0] + Math.sign(frontWall.b[0] - frontWall.a[0]) * front.at : 6
  return {
    cars, w: 4, d: 1, design,
    // The platform: its storey, the height of its floor, and the side of the track it is on
    // for someone looking east along the line (1 is their left: the platform lies north).
    level: 2, floor: round(floor), side: 1,
    // The middle of a standing train, in the lot; the top of the beam it sits on.
    stop: { x: middle, z: track }, beam: round(floor - CAR.floor),
    doors,
    // Where the boards hang that show the next train: over the platform, facing along it.
    boards: [{ x: 10, y: round(floor + 2.3), z: 3.6 }, { x: 22, y: round(floor + 2.3), z: 3.6 }],
    length: trainLength(cars),
    // The roof over the track and the glass screen beyond it, measured from the middle of a
    // standing train: along the line (from, to) and across it (near: to the platform wall,
    // far: past the far side of the train); `roof` is the height of its top, `base` of the
    // foot of the screen.
    shed: {
      from: round(from - middle), to: round(to - middle), near: round(track - EDGE - wall.t / 2), far: round(CAR.width / 2 + 0.6),
      roof: round(floor + storeyOf(design, 2).h), base: round(floor - CAR.floor - 0.35),
    },
    // Where the way in is, along the platform (metres from the west end of the lot).
    entrance: round(entrance),
    // How far the far side of the track and its shed reach past the south edge of the lot:
    // the row south of a station is to be left as road or open land.
    overhang: round(track + CAR.width / 2 + 0.6 - 8),
  }
}

const drawn = new Map()

// The station for trains of `cars` cars (two, for now): its design and where its track runs.
export function stationFor(cars = 2) {
  if (!drawn.has(cars)) drawn.set(cars, draw(cars))
  return drawn.get(cars)
}

// The stations there are to build, by name.
export const STATIONS = {
  'side-2': { label: '片面ホームの駅（2両編成）', cars: 2 },
}

// ---- A trial line ---------------------------------------------------------------------

const TILE = 8

// Somewhere to try the monorail in a town that has no line: the longest row of land with
// nothing built on it, a station at each end and the beam between them. `map` is the town
// ({ width, height, originX, originZ, roads, plaza }), `taken` the tiles that are built on
// ('x,z'). Returns the stations as lots, the tiles the line takes, the strip either side of
// it where nothing may grow, and the line itself (as createLine takes it); or null.
export function planTrial(map, taken) {
  const station = stationFor(2)
  const roads = new Set((map.roads ?? []).map(({ x, z }) => `${x},${z}`))
  const free = (x, z) => x >= 0 && z >= 0 && x < map.width && z < map.height && !taken.has(`${x},${z}`)
    && !(map.plaza && map.plaza.x === x && map.plaza.z === z)
  let best = null
  for (let z = 0; z < map.height; z++) {
    let start = -1
    for (let x = 0; x <= map.width; x++) {
      if (free(x, z) && start < 0) start = x
      if (!free(x, z) && start >= 0) {
        // A station stands on open land at each end; roads may cross the line between them.
        let [from, to] = [start, x - 1]
        const clear = (at) => Array.from({ length: station.w }, (_, index) => at + index).every((tile) => !roads.has(`${tile},${z}`))
        while (to - from + 1 >= station.w * 2 + 1 && !clear(from)) from++
        while (to - from + 1 >= station.w * 2 + 1 && !clear(to - station.w + 1)) to--
        if (to - from + 1 >= station.w * 2 + 1 && clear(from) && clear(to - station.w + 1) && (!best || to - from > best.to - best.from)) best = { z, from, to }
        start = -1
      }
    }
  }
  if (!best) return null
  const worldX = (x) => (x - 0.5 - map.originX) * TILE
  const worldZ = (z) => (z - 0.5 - map.originZ) * TILE
  const names = ['ひだまり', 'こもれび台']
  const starts = [best.from, best.to - station.w + 1]
  const zLine = worldZ(best.z) + station.stop.z
  const first = worldX(starts[0]) + station.stop.x
  const last = worldX(starts[1]) + station.stop.x
  // The line runs on a little past the last stations, for a train that overruns.
  const over = station.length / 2 + 2.5
  const along = (x) => round(x - (first - over))
  const lots = starts.map((x, index) => stationLot({ id: `trial-station-${index}`, name: names[index], x, z: best.z }))
  // Piers keep off the carriageway of every road the line crosses (and off the poles beside
  // it), and off the way into each station.
  const clear = []
  for (let x = best.from; x <= best.to; x++) {
    if (roads.has(`${x},${best.z}`)) clear.push([along(worldX(x) + TILE / 2 - 4.6), along(worldX(x) + TILE / 2 + 4.6)])
  }
  for (const x of starts) clear.push([along(worldX(x) + station.entrance - 2.6), along(worldX(x) + station.entrance + 2.6)])
  const path = [[round(first - over), round(zLine)], [round(last + over), round(zLine)]]
  return {
    lots,
    tiles: Array.from({ length: best.to - best.from + 1 }, (_, index) => `${best.from + index},${best.z}`),
    corridor: [{ ax: path[0][0], az: path[0][1], bx: path[1][0], bz: path[1][1], r: 4.6 }],
    spec: {
      name: 'まちのとなり線', y: station.beam, cars: station.cars, path, clear,
      stops: starts.map((x, index) => ({
        name: names[index], at: along(worldX(x) + station.stop.x), side: station.side, lot: lots[index].id, floor: station.floor, shed: station.shed,
        boards: station.boards.map((board) => ({ x: round(worldX(x) + board.x), y: board.y, z: round(worldZ(best.z) + board.z) })),
      })),
    },
  }
}

// A station as a building standing on a lot of the town: `x` and `z` are the tile of its
// north-west corner. (Nothing calls this for a town yet: stations are not placed.)
export function stationLot({ id, name, x, z, cars = 2 }) {
  const station = stationFor(cars)
  return {
    id, kind: 'station', style: 'office', w: station.w, d: station.d, x, z, design: station.design, sign: `${name}駅`, label: `${name}駅`,
    target: { id, kind: 'station', x, z, label: `${name}駅` },
  }
}
