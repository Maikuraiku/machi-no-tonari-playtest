// The local streets and the generated buildings in a box of the region, whichever way the region
// came to this screen: read from a simulation pack (its parcel tiles, sim-loader.js) or generated
// in the browser (streets.js). The survey of a 丁目, the choice of a town's first tiles and the
// search for a spot to arrive at all ask here, so that they see the same land as the 3D view
// (window.js makes the same choice when it cuts a window).
import { buildingsIn, streetsIn } from './streets.js'

// Streets as polylines: { points: [x0, z0, x1, z1, …], width, kind }. (A street generated in the
// browser is one straight piece; a pack joins pieces into longer runs.)
export function landStreets(region, x0, z0, x1, z1) {
  return region.isExtremeSim && region.buildingCache?.streetsInWindow
    ? region.buildingCache.streetsInWindow(x0, z0, x1, z1)
    : streetsIn(region, x0, z0, x1, z1)
}

// Buildings as footprints: { corners: [x0, z0, … x3, z3], … }.
export function landBuildings(region, x0, z0, x1, z1) {
  return region.buildingCache?.inWindow(x0, z0, x1, z1) ?? buildingsIn(region, x0, z0, x1, z1)
}

// A pack keeps its parcel tiles (2 km squares of streets and buildings) on the server until they
// are asked for: this has the tiles a box needs fetched, so that landStreets and landBuildings
// can read them. Nothing to wait for with a region generated in the browser, or when the tiles
// are already here.
export async function ensureLand(region, x0, z0, x1, z1) {
  const cache = region.buildingCache
  if (!region.isExtremeSim || !cache?.fetchTile) return
  const { tileSize, columns } = cache
  const margin = 40
  const fetches = []
  for (let tz = Math.max(0, Math.floor((z0 - margin) / tileSize)); tz <= Math.min(columns - 1, Math.floor((z1 + margin) / tileSize)); tz++) {
    for (let tx = Math.max(0, Math.floor((x0 - margin) / tileSize)); tx <= Math.min(columns - 1, Math.floor((x1 + margin) / tileSize)); tx++) {
      if (!cache.tileAt(tx, tz)) fetches.push(cache.fetchTile(tx, tz))
    }
  }
  if (fetches.length) await Promise.all(fetches)
}
