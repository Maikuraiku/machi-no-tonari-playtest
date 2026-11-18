// Who lives and works in each 20 m cell. Floor area follows from what stands there and how
// tightly it is built (the floor area ratio); people follow from floor area.
import { USE } from './develop.js?v=online-1794980046418'
import { fbm } from './noise.js?v=online-1794980046418'

// For each use: floor area ratio (floor area over plot area), the residential share of the
// floor area, square metres of home per resident, people per household, square metres of
// floor per job, and the share of the cell's land taken by streets and open space.
export const BUILDING = {
  [USE.DENSE]: { ratio: 0.95, residential: 0.9, perResident: 30, household: 1.8, perJob: 40, streets: 0.2 },
  [USE.LOW]: { ratio: 0.62, residential: 0.95, perResident: 36, household: 2.2, perJob: 60, streets: 0.2 },
  [USE.MID]: { ratio: 1.7, residential: 0.88, perResident: 31, household: 1.9, perJob: 35, streets: 0.25 },
  [USE.HIGH]: { ratio: 4.2, residential: 0.85, perResident: 33, household: 2.0, perJob: 30, streets: 0.3 },
  [USE.COMMERCIAL]: { ratio: 2.4, residential: 0.3, perResident: 30, household: 1.6, perJob: 24, streets: 0.25 },
  [USE.INDUSTRIAL]: { ratio: 0.85, residential: 0, perResident: 40, household: 2, perJob: 70, streets: 0.15 },
  [USE.PUBLIC]: { ratio: 0.55, residential: 0, perResident: 40, household: 2, perJob: 55, streets: 0.1 },
}

export const PURPOSE_RATES = {
  work: 0.47, // commuters per resident
  school: 0.11, // pupils and students per resident
  private: 0.75, // shopping and other outings per resident per day
}

export function populate(terrain, city, { seed = 1, newtownRatio = 0.72 } = {}) {
  const { columns, cell } = terrain
  const count = columns * columns
  const area = cell * cell
  const residents = new Float32Array(count)
  const jobs = new Float32Array(count)
  const floor = new Float32Array(count)
  const households = new Float32Array(count)
  const pupils = new Float32Array(count) // school places
  const shops = new Float32Array(count) // retail and service floor, which draws outings
  let total = 0
  let totalJobs = 0
  let totalHouseholds = 0
  for (let index = 0; index < count; index++) {
    const use = city.use[index]
    const type = BUILDING[use]
    if (!type) continue
    const x = (index % columns + 0.5) * cell
    const z = (Math.floor(index / columns) + 0.5) * cell
    // Plots vary: some streets were built more generously than others.
    const variation = 1 + 0.22 * fbm(seed + 61, x / 350, z / 350, 2)
    let ratio = type.ratio * variation
    if (city.newtown[index]) ratio *= newtownRatio
    // Major roads take their own width out of the cell.
    const road = city.majorMask[index] ? 0.45 : 0
    const plot = area * (1 - type.streets - road)
    const built = plot * ratio
    floor[index] = built
    const homes = built * type.residential
    const people = homes / type.perResident
    residents[index] = people
    households[index] = people / type.household
    const work = built * (1 - type.residential) / type.perJob + people * 0.04
    jobs[index] = work
    if (use === USE.PUBLIC) pupils[index] = plot / 20
    if (use === USE.COMMERCIAL) shops[index] = built * 0.6
    else if (use === USE.DENSE || use === USE.MID) shops[index] = built * 0.04
    total += people
    totalJobs += work
    totalHouseholds += people / type.household
  }
  return { residents, jobs, floor, households, pupils, shops, total, totalJobs, totalHouseholds }
}

// Sums a 20 m field into square blocks of `size` metres (a mesh).
export function aggregate(field, columns, cell, size) {
  const factor = Math.round(size / cell)
  const blocks = Math.ceil(columns / factor)
  const out = new Float32Array(blocks * blocks)
  for (let row = 0; row < columns; row++) {
    const br = Math.floor(row / factor) * blocks
    for (let column = 0; column < columns; column++) {
      out[br + Math.floor(column / factor)] += field[column + row * columns]
    }
  }
  return { values: out, blocks, size }
}

// Density statistics: the area-weighted distribution of people per square kilometre.
export function densityStats(residents, columns, cell, meshSize = 500) {
  const mesh = aggregate(residents, columns, cell, meshSize)
  const perKm2 = 1e6 / (meshSize * meshSize)
  const values = Array.from(mesh.values, (value) => value * perKm2).sort((a, b) => a - b)
  const quantile = (q) => values[Math.min(values.length - 1, Math.floor(q * values.length))]
  let sum = 0
  for (const value of mesh.values) sum += value
  return {
    mesh: meshSize,
    mean: sum * 1e6 / (columns * cell) ** 2,
    median: quantile(0.5),
    p90: quantile(0.9),
    max: values[values.length - 1],
    inhabitedShare: values.filter((value) => value > 1000).length / values.length,
  }
}
