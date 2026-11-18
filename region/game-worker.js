// What the game asks of the region worker (worker.js passes these requests on): the plan and
// line packs for making a region town, the ground along stored lines (for the piers), walkable
// spots, the division into 丁目 as the town pins it, and the survey of a 丁目 for claiming it.
// Each handler answers with postMessage, matched by `id`.
import { regionFingerprint } from './fingerprint.js?v=online-1794980046418'
import { decodeLine, encodeDivision, STEP, toBase64 } from './game-pack.js?v=online-1794980046418'
import { REGION_VERSION } from './region.js?v=online-1794980046418'
import { planRoutes } from './route-plan.js?v=online-1794980046418'
import { pickSite, walkableNear } from './site.js?v=online-1794980046418'
import { surveyDistrict } from './survey.js?v=online-1794980046418'

const routesOf = (region) => (region.routes ??= planRoutes(region))
const SURVEYS_KEPT = 8

export const GAME = {
  // Everything a new region town is made from, beginning at `district`.
  townPack(region, { id, district, buildings = true }) {
    const { packs } = routesOf(region)
    const site = pickSite(region, packs, { district })
    const plan = {
      seed: region.seed,
      version: REGION_VERSION,
      fingerprint: (region.fingerprint ??= regionFingerprint(region)),
      buildings: Boolean(buildings),
      lineCount: packs.length,
      plaza: site.plaza, shop: site.shop, cafe: site.cafe, ground: site.ground,
    }
    self.postMessage({ type: 'townPack', id, plan, packs, at: site.at, station: site.station })
  },

  // The ground under each stored line, at every point, for standing its piers on.
  lineGround(region, { id, packs }) {
    const grounds = packs.map((pack) => {
      const line = decodeLine(pack)
      const count = line.points.length / 2
      const ground = new Float32Array(count)
      for (let k = 0; k < count; k++) ground[k] = region.fine.heightAt(line.points[k * 2], line.points[k * 2 + 1]).height
      return { id: pack.id, ground }
    })
    self.postMessage({ type: 'lineGround', id, grounds }, grounds.map((entry) => entry.ground.buffer))
  },

  site(region, { id, x, z }) {
    self.postMessage({ type: 'site', id, at: walkableNear(region, x, z) })
  },

  heightsAt(region, { id, points }) {
    const heights = new Float32Array(points.length / 2)
    for (let k = 0; k < heights.length; k++) heights[k] = region.fine.heightAt(points[k * 2], points[k * 2 + 1]).height
    self.postMessage({ type: 'heightsAt', id, heights }, [heights.buffer])
  },

  // The division into 丁目 as a region town pins it (the 'district' action's op 'map'):
  // { columns, runs, names, fingerprint }. Made once per region.
  divisionMap(region, { id }) {
    region.divisionMap ??= encodeDivision(region.division)
    self.postMessage({ type: 'divisionMap', id, map: region.divisionMap })
  },

  // What each tile of 丁目 `district` holds, for claiming it: its tile box and the two-bit
  // mask as base64 (survey.js). Uses the planned line packs, which are the stored ones when the
  // fingerprints match. The last few 丁目 asked about are kept, since the answer never changes.
  survey(region, { id, district }) {
    const kept = (region.surveys ??= new Map())
    let entry = kept.get(district)
    if (!entry) {
      const { box, mask } = surveyDistrict(region, routesOf(region).packs, district)
      entry = { box, mask: toBase64(mask) }
      if (kept.size >= SURVEYS_KEPT) kept.delete(kept.keys().next().value)
      kept.set(district, entry)
    }
    self.postMessage({ type: 'survey', id, district, box: [...entry.box], mask: entry.mask })
  },
}

export { STEP }
