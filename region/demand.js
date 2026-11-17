// Where people go in a day. Residents set out for work, school and errands; a gravity model
// spreads each zone's trips over the destinations by how much each offers and how long it takes
// to get there. Short trips are walked or cycled; the rest go by road and are loaded onto the
// road network, which gives each road its demand. The metropolis beyond the east edge draws
// the commuters it employs.
import { Heap } from './heap.js?v=online-1794946480502'
import { ROAD } from './develop.js?v=online-1794946480502'
import { PURPOSE_RATES, aggregate } from './population.js?v=online-1794946480502'

export const ZONE = 1000 // side of a traffic zone in metres
export const ROAD_SPEED = { [ROAD.COLLECTOR]: 17, [ROAD.ARTERIAL]: 23, [ROAD.TRUNK]: 25 } // km/h with congestion
const LOCAL_SPEED = 11 // km/h on the local streets between a zone and the main roads
const WALK_SPEED = 4.8

// What the metropolis offers to the region's residents.
export const METROPOLIS = { jobs: 2.6e6, school: 2.5e5, shops: 9e5 }

export const PURPOSES = {
  work: { rate: PURPOSE_RATES.work, decay: 0.042 },
  school: { rate: PURPOSE_RATES.school, decay: 0.16 },
  private: { rate: PURPOSE_RATES.private, decay: 0.11 },
}

// Share of a trip of `km` kilometres made on foot or by bicycle.
export function activeShare(km) {
  return 1 / (1 + Math.exp((km - 1.8) / 0.45))
}

// Traffic zones: population, jobs, school places and shops summed per square, and the centre
// of each zone weighted by where its people actually are.
export function makeZones(terrain, people) {
  const { columns, cell, size } = terrain
  const residents = aggregate(people.residents, columns, cell, ZONE)
  const jobs = aggregate(people.jobs, columns, cell, ZONE)
  const pupils = aggregate(people.pupils, columns, cell, ZONE)
  const shops = aggregate(people.shops, columns, cell, ZONE)
  const blocks = residents.blocks
  const count = blocks * blocks
  const x = new Float64Array(count)
  const z = new Float64Array(count)
  const weight = new Float64Array(count)
  const factor = ZONE / cell
  for (let row = 0; row < columns; row++) {
    for (let column = 0; column < columns; column++) {
      const index = column + row * columns
      const w = people.residents[index] + people.jobs[index] + 0.01
      const zone = Math.floor(column / factor) + Math.floor(row / factor) * blocks
      x[zone] += (column + 0.5) * cell * w
      z[zone] += (row + 0.5) * cell * w
      weight[zone] += w
    }
  }
  for (let zone = 0; zone < count; zone++) {
    x[zone] /= weight[zone]
    z[zone] /= weight[zone]
  }
  return {
    blocks, count, size: ZONE, x, z,
    residents: residents.values, jobs: jobs.values, pupils: pupils.values, shops: shops.values,
    extent: size,
  }
}

// The main roads as a graph for routing: arcs in both directions, timed in minutes.
export function makeRoadGraph(city) {
  const { nodes, links } = city.roads
  const nodeCount = nodes.length / 2
  const degree = new Int32Array(nodeCount + 1)
  for (const link of links) {
    degree[link.from + 1]++
    degree[link.to + 1]++
  }
  for (let node = 0; node < nodeCount; node++) degree[node + 1] += degree[node]
  const start = degree.slice()
  const arcTo = new Int32Array(links.length * 2)
  const arcTime = new Float64Array(links.length * 2)
  const arcLink = new Int32Array(links.length * 2)
  const fill = start.slice(0, nodeCount)
  links.forEach((link, index) => {
    const minutes = link.length / 1000 / (ROAD_SPEED[link.kind] ?? 15) * 60
    for (const [a, b] of [[link.from, link.to], [link.to, link.from]]) {
      const arc = fill[a]++
      arcTo[arc] = b
      arcTime[arc] = minutes
      arcLink[arc] = index
    }
  })
  return { nodes, nodeCount, start, arcTo, arcTime, arcLink, links }
}

// Shortest times from several start nodes with head starts; returns the times, the arc each
// node was reached by, and the order nodes were settled in.
export function shortestTimes(graph, starts, initial) {
  const time = new Float64Array(graph.nodeCount).fill(Infinity)
  const via = new Int32Array(graph.nodeCount).fill(-1)
  const order = new Int32Array(graph.nodeCount)
  const from = new Int32Array(graph.arcTo.length)
  for (let node = 0; node < graph.nodeCount; node++) {
    for (let arc = graph.start[node]; arc < graph.start[node + 1]; arc++) from[arc] = node
  }
  const heap = new Heap(256)
  starts.forEach((node, index) => {
    if (initial[index] < time[node]) {
      time[node] = initial[index]
      heap.push(node, initial[index])
    }
  })
  let settled = 0
  const done = new Uint8Array(graph.nodeCount)
  while (heap.size) {
    const node = heap.pop()
    if (done[node]) continue
    done[node] = 1
    order[settled++] = node
    for (let arc = graph.start[node]; arc < graph.start[node + 1]; arc++) {
      const next = graph.arcTo[arc]
      const value = time[node] + graph.arcTime[arc]
      if (value < time[next]) {
        time[next] = value
        via[next] = arc
        heap.push(next, value)
      }
    }
  }
  return { time, via, order: order.subarray(0, settled), from }
}

// Each zone reaches the main roads through its local streets: the nearest few nodes.
function connectors(zones, graph, count = 3) {
  const list = []
  for (let zone = 0; zone < zones.count; zone++) {
    const near = []
    for (let node = 0; node < graph.nodeCount; node++) {
      const d = Math.hypot(graph.nodes[node * 2] - zones.x[zone], graph.nodes[node * 2 + 1] - zones.z[zone])
      if (near.length < count || d < near[near.length - 1].d) {
        near.push({ node, d })
        near.sort((a, b) => a.d - b.d)
        if (near.length > count) near.pop()
      }
    }
    list.push(near.map(({ node, d }) => ({ node, minutes: d * 1.3 / 1000 / LOCAL_SPEED * 60 })))
  }
  return list
}

export function travelDemand(terrain, city, people, { metropolis = city.metropolis } = {}) {
  const zones = makeZones(terrain, people)
  const graph = makeRoadGraph(city)
  const access = connectors(zones, graph)
  const Z = zones.count
  const M = Z // index of the metropolis in the matrices
  const N = Z + 1

  // The way to the metropolis: east-edge nodes of the big roads continue there.
  const gates = []
  for (let node = 0; node < graph.nodeCount; node++) {
    const x = graph.nodes[node * 2]
    if (x < zones.extent - 120) continue
    let big = false
    for (let arc = graph.start[node]; arc < graph.start[node + 1]; arc++) {
      if (graph.links[graph.arcLink[arc]].kind >= ROAD.ARTERIAL) big = true
    }
    if (!big) continue
    const distance = Math.hypot(metropolis.x - x, metropolis.z - graph.nodes[node * 2 + 1])
    gates.push({ node, minutes: distance / 1000 / 24 * 60 + 8 })
  }

  // Road times between every pair of zones, and to the metropolis.
  const roadTime = new Float32Array(N * N)
  const trees = []
  for (let origin = 0; origin < Z; origin++) {
    const tree = shortestTimes(graph, access[origin].map((a) => a.node), access[origin].map((a) => a.minutes))
    trees.push(tree)
    for (let destination = 0; destination < Z; destination++) {
      let best = Infinity
      for (const { node, minutes } of access[destination]) best = Math.min(best, tree.time[node] + minutes)
      roadTime[origin * N + destination] = origin === destination ? 5 : best
    }
    let toMetropolis = Infinity
    for (const gate of gates) toMetropolis = Math.min(toMetropolis, tree.time[gate.node] + gate.minutes)
    roadTime[origin * N + M] = toMetropolis
    roadTime[M * N + origin] = toMetropolis
  }

  // Straight-line distances (km), for the split between walking and riding.
  const distance = new Float32Array(N * N)
  for (let a = 0; a < Z; a++) {
    for (let b = 0; b < Z; b++) distance[a * N + b] = a === b ? 0.45 : Math.hypot(zones.x[a] - zones.x[b], zones.z[a] - zones.z[b]) / 1000
    const km = Math.hypot(zones.x[a] - metropolis.x, zones.z[a] - metropolis.z) / 1000
    distance[a * N + M] = km
    distance[M * N + a] = km
  }

  // Gravity distribution, purpose by purpose. Trips are counted one way (from home); the
  // journey back is the same trip reversed.
  const attraction = {
    work: (zone) => (zone === M ? METROPOLIS.jobs : zones.jobs[zone]),
    school: (zone) => (zone === M ? METROPOLIS.school : zones.pupils[zone]),
    private: (zone) => (zone === M ? METROPOLIS.shops : zones.shops[zone] + zones.residents[zone] * 0.15),
  }
  const trips = new Float32Array(N * N)
  const byPurpose = {}
  for (const [purpose, { rate, decay }] of Object.entries(PURPOSES)) {
    const matrix = new Float32Array(N * N)
    for (let origin = 0; origin < Z; origin++) {
      const produced = zones.residents[origin] * rate
      if (produced < 1) continue
      let sum = 0
      const weights = new Float64Array(N)
      for (let destination = 0; destination < N; destination++) {
        const minutes = Math.min(roadTime[origin * N + destination], distance[origin * N + destination] / WALK_SPEED * 60)
        const weight = attraction[purpose](destination) * Math.exp(-decay * minutes)
        weights[destination] = weight
        sum += weight
      }
      if (sum <= 0) continue
      for (let destination = 0; destination < N; destination++) {
        const value = produced * weights[destination] / sum
        matrix[origin * N + destination] = value
        trips[origin * N + destination] += value
      }
    }
    byPurpose[purpose] = matrix
  }

  // Trips by road (all motorised for now: buses, cars, taxis), loaded onto the road links
  // along each zone's shortest-time tree.
  const linkLoad = new Float64Array(graph.links.length)
  let walked = 0
  let ridden = 0
  for (let origin = 0; origin < Z; origin++) {
    const tree = trees[origin]
    const nodeLoad = new Float64Array(graph.nodeCount)
    for (let destination = 0; destination < N; destination++) {
      const value = trips[origin * N + destination]
      if (value <= 0) continue
      const motor = value * (1 - activeShare(distance[origin * N + destination]))
      walked += value - motor
      ridden += motor
      if (destination === origin || motor < 0.01) continue
      // Leave the network at the best exit for this destination.
      let exitNode = -1
      let best = Infinity
      const exits = destination === M ? gates : access[destination]
      for (const { node, minutes } of exits) {
        const t = tree.time[node] + minutes
        if (t < best) {
          best = t
          exitNode = node
        }
      }
      if (exitNode >= 0) nodeLoad[exitNode] += motor
    }
    for (let index = tree.order.length - 1; index >= 0; index--) {
      const node = tree.order[index]
      const arc = tree.via[node]
      if (arc < 0 || nodeLoad[node] === 0) continue
      linkLoad[graph.arcLink[arc]] += nodeLoad[node]
      nodeLoad[tree.from[arc]] += nodeLoad[node]
    }
  }
  // Both directions of the day's travel use the road.
  for (let link = 0; link < linkLoad.length; link++) linkLoad[link] *= 2

  // Residents and the people present in the daytime.
  const daytime = new Float64Array(Z)
  for (let zone = 0; zone < Z; zone++) daytime[zone] = zones.residents[zone]
  for (const purpose of ['work', 'school']) {
    const matrix = byPurpose[purpose]
    for (let origin = 0; origin < Z; origin++) {
      for (let destination = 0; destination < N; destination++) {
        if (destination === origin) continue
        const value = matrix[origin * N + destination]
        daytime[origin] -= value
        if (destination < Z) daytime[destination] += value
      }
    }
  }

  return {
    zones, graph, access, gates, metropolis, metropolisIndex: M, size: N,
    roadTime, distance, trips, byPurpose, linkLoad, daytime,
    totals: { walked, ridden, all: walked + ridden },
  }
}

// The biggest flows between areas of `block` metres (desire lines), largest first.
export function desireLines(demand, block = 2000, limit = 80) {
  const { zones, trips, size: N, metropolisIndex: M } = demand
  const factor = Math.round(block / zones.size)
  const groups = Math.ceil(zones.blocks / factor)
  const groupOf = (zone) => Math.floor((zone % zones.blocks) / factor) + Math.floor(Math.floor(zone / zones.blocks) / factor) * groups
  const flows = new Map()
  const centre = new Map()
  for (let zone = 0; zone < zones.count; zone++) {
    const g = groupOf(zone)
    const entry = centre.get(g) ?? { x: 0, z: 0, w: 0 }
    const w = zones.residents[zone] + zones.jobs[zone] + 1
    entry.x += zones.x[zone] * w
    entry.z += zones.z[zone] * w
    entry.w += w
    centre.set(g, entry)
  }
  for (let origin = 0; origin < zones.count; origin++) {
    for (let destination = 0; destination < N; destination++) {
      if (destination === origin) continue
      const value = trips[origin * N + destination]
      if (value <= 0) continue
      const a = groupOf(origin)
      const b = destination === M ? -1 : groupOf(destination)
      if (a === b) continue
      const key = b === -1 ? `${a}:M` : a < b ? `${a}:${b}` : `${b}:${a}`
      flows.set(key, (flows.get(key) ?? 0) + value * 2)
    }
  }
  const point = (g) => {
    const entry = centre.get(g)
    return { x: entry.x / entry.w, z: entry.z / entry.w }
  }
  return [...flows.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([key, value]) => {
      const [a, b] = key.split(':')
      const from = point(Number(a))
      const to = b === 'M' ? { x: demand.metropolis.x, z: demand.metropolis.z } : point(Number(b))
      return { from, to, trips: value, metropolis: b === 'M' }
    })
}
