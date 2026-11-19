import { BODY } from './design.js'
import { CAR, doorOffsets } from './monorail-line.js'
import { PLATFORM } from './route-line.js'

const HALF = CAR.width / 2
const LONG = CAR.length / 2
const SPAN = CAR.length + CAR.gap
const GANGWAY = SPAN / 2
const DOOR_HALF = CAR.doorWidth / 2 - BODY
const INSIDE = HALF - BODY - 0.1
// Additional inward margin when riding so the passenger's first-person eye camera (`here.y + eye`,
// near plane 0.1 m) never touches or sees through the car's side window glass, mullions or ceiling.
const CABIN_SIDE = Math.min(0.98 - BODY, HALF - BODY - 0.24)
const CABIN_DOOR = HALF - BODY - 0.19
const CABIN_END = LONG - 0.36 - BODY
const GATE = PLATFORM.edge + BODY + 0.055
const openAt = (state, platform) => state?.phase === 'dwell' && state.doors > 0.85
  && state.way === platform.sign && state.stop.index === platform.stop.index

function doorway(along, doors = CAR.doors) {
  return doors.find((door) => Math.abs(along - door) <= DOOR_HALF)
}

function alongPlatform(platform, x, z) {
  const { spot, sign } = platform
  return ((x - spot.x) * spot.dx + (z - spot.z) * spot.dz) * sign
}

function insideCar(train, index, x, z) {
  if (Math.abs(x) <= CABIN_SIDE && Math.abs(z) <= CABIN_END) return true
  if (Math.abs(x) <= CABIN_DOOR && CAR.doors.some((door) => Math.abs(z - door) <= 0.9 - BODY)) return true
  return Math.abs(x) <= 0.55 - BODY && Math.abs(z) >= LONG - 0.7 && Math.abs(z) <= GANGWAY + 0.14
    && Boolean(train.cars[index + Math.sign(z)])
}

export function createRegionRiding(lines) {
  function board(from, x, z) {
    if (from.x === x && from.z === z) return null
    for (const entry of lines()) {
      for (const platform of entry.platforms) {
        const { spot, sign, level } = platform
        if (Math.abs(from.y - level) > 0.4 || Math.abs(from.x - spot.x) > 26 || Math.abs(from.z - spot.z) > 26) continue
        const before = ((from.x - spot.x) * spot.dz - (from.z - spot.z) * spot.dx) * sign
        const after = ((x - spot.x) * spot.dz - (z - spot.z) * spot.dx) * sign
        if (before < PLATFORM.edge - 0.04 || after > GATE || after >= before) continue
        const fraction = Math.max(0, Math.min(1, (before - GATE) / (before - after)))
        const along = alongPlatform(platform, from.x + (x - from.x) * fraction, from.z + (z - from.z) * fraction)
        const train = entry.trains.find(({ state }) => openAt(state, platform))
        if (!train) continue
        for (const car of train.cars) {
          if (!car.place) continue
          const offset = along * sign - car.offset
          const door = doorway(offset)
          if (door === undefined || Math.abs(door + car.offset) + CAR.doorWidth / 2 >= PLATFORM.length / 2) continue
          return { entry, train, car: car.index, x: sign * (CABIN_DOOR - 0.04), z: offset }
        }
      }
    }
    return null
  }

  function spotOf(ride) {
    const { place } = ride.train.cars[ride.car]
    const pitch = place.pitch ?? 0
    const forward = ride.z * Math.cos(pitch) - CAR.floor * Math.sin(pitch)
    return {
      x: place.x + ride.x * place.dz + forward * place.dx,
      z: place.z - ride.x * place.dx + forward * place.dz,
      y: place.y + CAR.floor * Math.cos(pitch) + ride.z * Math.sin(pitch),
    }
  }

  function walk(ride, dx, dz) {
    const { entry, train } = ride
    const car = train.cars[ride.car]
    const { place } = car
    const sx = dx * place.dz - dz * place.dx
    const sz = dx * place.dx + dz * place.dz
    const side = train.state.way
    const platform = entry.platforms.find((item) => openAt(train.state, item))
    const v = (car.offset + ride.z + sz) * side
    if (platform && sx * side > 0 && (ride.x + sx) * side > CABIN_DOOR && doorway(ride.z + sz) !== undefined
      && Math.abs(v) < PLATFORM.length / 2 - BODY && doorway(v, doorOffsets(train.cars.length)) !== undefined) {
      const { spot } = platform
      const u = PLATFORM.edge + BODY + 0.18
      return { x: spot.x + side * (u * spot.dz + v * spot.dx), z: spot.z + side * (-u * spot.dx + v * spot.dz), y: platform.level }
    }
    for (const [mx, mz] of [[sx, sz], [sx, 0], [0, sz]]) {
      const x = ride.x + mx
      const z = ride.z + mz
      if (!insideCar(train, ride.car, x, z)) continue
      ride.x = x
      ride.z = z
      if (Math.abs(z) > GANGWAY && train.cars[ride.car + Math.sign(z)]?.place) {
        ride.car += Math.sign(z)
        ride.z -= Math.sign(z) * SPAN
      }
      break
    }
    return true
  }

  const riding = (ride) => Boolean(ride && lines().includes(ride.entry) && ride.train.cars[ride.car]?.place)
  return { board, spotOf, walk, riding }
}
