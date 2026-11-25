// Browser/Worker loader for server-persisted Extreme Deep Simulation packs (/api/sim/seed/:seed/*).
// Reconstructs a full region object compatible with public/region/* & public/world/* while exposing
// 5m terrain tiles, 35-step 1700-2025 history frames, 44-format commercial database, zoning, geology & BPR traffic.

import { createFineTerrain, streamGeometry } from './fine.js'
import { segmentIndex } from './geometry.js'
import { ROAD_WIDTH } from './develop.js'

const TYPED_CTORS = {
  Float32Array, Float64Array, Int32Array, Uint32Array, Int16Array, Uint16Array, Int8Array, Uint8Array,
}

export function unpackTypedArraysBrowser(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer)
  const view = new DataView(arrayBuffer)
  const headerLen = view.getUint32(0, true)
  const headerText = new TextDecoder('utf-8').decode(bytes.subarray(4, 4 + headerLen))
  const meta = JSON.parse(headerText)
  const headerPad = (4 + headerLen + 3) & ~3
  const out = {}
  for (const item of meta) {
    const Ctor = TYPED_CTORS[item.type]
    const copy = arrayBuffer.slice(headerPad + item.byteOffset, headerPad + item.byteOffset + item.byteLength)
    out[item.name] = new Ctor(copy)
  }
  return out
}

const RAIL_HALF_WIDTH = [7.5, 11, 5.5, 6, 8.5, 0, 0, 0]

/**
 * Attempts to load a pre-generated Extreme Deep Simulation pack from the local server.
 * Returns `null` if the server does not have this seed yet (so the worker can fall back cleanly).
 */
export async function tryLoadExtremeSim(seed, { preloadParcels = false, progress = () => {} } = {}) {
  if (typeof fetch !== 'function') return null
  const base = `/api/sim/seed/${encodeURIComponent(seed)}`
  let manifest
  try {
    const res = await fetch(`${base}/manifest`, { cache: 'no-cache' })
    if (!res.ok) return null
    manifest = await res.json()
  } catch {
    return null
  }

  progress('超極限シミュレーション読込中 (地形・都市・履歴・商業)', 0.12)
  const [t20Buf, c20Buf, histBuf, netJson, comJson] = await Promise.all([
    fetch(`${base}/file/terrain_20m.bin.gz`).then((r) => { if (!r.ok) throw new Error('terrain_20m failed'); return r.arrayBuffer() }),
    fetch(`${base}/file/city_2025.bin.gz`).then((r) => { if (!r.ok) throw new Error('city_2025 failed'); return r.arrayBuffer() }),
    fetch(`${base}/file/history_frames.bin.gz`).then((r) => { if (!r.ok) throw new Error('history_frames failed'); return r.arrayBuffer() }),
    fetch(`${base}/file/network.json.gz`).then((r) => { if (!r.ok) throw new Error('network failed'); return r.json() }),
    fetch(`${base}/file/commerce.json.gz`).then((r) => { if (!r.ok) throw new Error('commerce failed'); return r.json() }),
  ])

  progress('バイナリデータ展開中', 0.55)
  const t20 = unpackTypedArraysBrowser(t20Buf)
  const c20 = unpackTypedArraysBrowser(c20Buf)
  const histRaw = unpackTypedArraysBrowser(histBuf)

  const size = manifest.size
  const cell = manifest.cell20 || 20
  const columns = Math.round(size / cell)

  // Reconstruct typed river / stream / road / rail structures
  const river = {
    valley: Float64Array.from(netJson.river.valley),
    normal: Float64Array.from(netJson.river.normal),
    corridor: Float64Array.from(netJson.river.corridor),
    channel: Float64Array.from(netJson.river.channel),
    channelHalf: Float64Array.from(netJson.river.channelHalf),
    halfNE: Float64Array.from(netJson.river.halfNE),
    halfSW: Float64Array.from(netJson.river.halfSW),
    level: Float64Array.from(netJson.river.level),
    sIn: netJson.river.sIn,
    sOut: netJson.river.sOut,
    step: netJson.river.step,
    corridorHalf: netJson.river.corridorHalf,
  }

  const terrain = {
    seed: manifest.seed,
    size,
    cell,
    columns,
    elevation: t20.elevation,
    geology: t20.geology,
    land: t20.land,
    slope: t20.slope,
    hand: t20.hand,
    floodDepth: t20.floodDepth,
    bearingN: t20.bearingN,
    loamDepth: t20.loamDepth,
    area: t20.area,
    isStream: t20.isStream,
    valleyS: t20.valleyS,
    valleyD: t20.valleyD,
    river,
    streams: netJson.streams,
    springs: netJson.springs ?? [],
  }

  const roadLinks = netJson.roads.links.map((l) => ({
    ...l,
    kind: l.compatKind ?? l.kind,
    simKind: l.kind,
    era: l.eraYear,
    points: Float64Array.from(l.points),
  }))

  const city = {
    metropolis: netJson.metropolis,
    villages: netJson.villages,
    highways: [],
    interchanges: netJson.interchanges ?? [],
    kochiZones: netJson.kochiZones ?? [],
    investments: netJson.investments ?? [],
    centers: netJson.centers,
    schools: netJson.schools,
    parks: netJson.parks,
    levees: netJson.levees.map((l) => Float64Array.from(l)),
    use: c20.use,
    built: c20.built,
    builtYear: c20.builtYear,
    rebuiltYear: c20.rebuiltYear,
    zoning: c20.zoning,
    newtown: c20.newtown,
    localAging: c20.localAging,
    ground: t20.ground,
    corridor: c20.corridor,
    fieldAngle: c20.fieldAngle,
    roads: {
      nodes: Float64Array.from(netJson.roads.nodes),
      links: roadLinks,
      intersections: netJson.roads.intersections ?? [],
      levelCrossings: netJson.roads.levelCrossings ?? [],
      trafficLaw: netJson.roads.trafficLaw ?? manifest.trafficLawStats ?? null,
    },
    majorMask: c20.majorMask,
    landPrice: c20.landPrice,
    travel: c20.travel,
    earthwork: { cut: 0, fill: 0 },
  }

  let totalRes = 0, totalJobs = 0, totalHh = 0
  for (let i = 0; i < c20.residents.length; i++) {
    totalRes += c20.residents[i]
    totalJobs += c20.jobs[i]
    totalHh += c20.households[i]
  }
  const people = {
    residents: c20.residents,
    jobs: c20.jobs,
    floor: c20.floor,
    households: c20.households,
    pupils: c20.pupils,
    shops: c20.shops,
    total: totalRes,
    totalJobs,
    totalHouseholds: totalHh,
  }

  const railLines = netJson.rail.lines.map((l) => ({
    ...l,
    alignment: {
      points: Float64Array.from(l.alignment.points),
      radius: Float32Array.from(l.alignment.radius, (v) => (v === 0 ? Infinity : v)),
      length: l.alignment.length,
    },
    profile: {
      rail: Float32Array.from(l.profile.rail),
      ground: Float32Array.from(l.profile.ground),
      structure: Uint8Array.from(l.profile.structure),
    },
  }))

  const rail = {
    lines: railLines,
    gradeSeparations: netJson.rail.gradeSeparations ?? [],
    network: netJson.rail.network,
    costSurface: c20.costSurface,
    potential: c20.potential,
    planCell: netJson.rail.planCell,
    planColumns: netJson.rail.planColumns,
  }

  const division = netJson.division ? {
    cell: netJson.division.cell,
    columns: netJson.division.columns,
    townOf: Int32Array.from(netJson.division.townOf),
    districtOf: Int32Array.from(netJson.division.districtOf),
    towns: netJson.division.towns,
    districts: netJson.division.districts,
  } : null

  // Build spatial indexes for fine terrain, streets, and survey compatibility
  const roadIndex = segmentIndex(size, 200)
  for (const link of roadLinks) {
    for (let k = 2; k < link.points.length; k += 2) {
      roadIndex.add(link.points[k - 2], link.points[k - 1], link.points[k], link.points[k + 1], link.kind)
    }
  }
  const railIndex = segmentIndex(size, 100)
  for (const line of railLines) {
    const pts = line.alignment.points
    for (let k = 1; k < pts.length / 2; k++) {
      const half = RAIL_HALF_WIDTH[line.profile.structure[k]]
      if (half > 0) railIndex.add(pts[k * 2 - 2], pts[k * 2 - 1], pts[k * 2], pts[k * 2 + 1], half)
    }
  }
  const streams = streamGeometry(terrain, city, size)

  // History timeline frames by year (500x500 grids)
  const historyByYear = new Map()
  for (const year of manifest.years) {
    const u = histRaw[`u_${year}`]
    const p = histRaw[`p_${year}`]
    const d = histRaw[`d_${year}`]
    if (u) historyByYear.set(year, { year, columns: 500, cell: 40, use: u, price: p, density: d })
  }

  // Demand stub compatible with summarizeRegion / overlayOf
  const demand = {
    zones: { count: 400 },
    size: 401,
    metropolisIndex: 400,
    trips: new Float32Array(0),
    linkLoad: Float64Array.from(roadLinks.map((l) => l.load ?? 0)),
    totals: { walked: Math.round(totalRes * 0.42), ridden: Math.round(totalRes * 0.91), all: Math.round(totalRes * 1.33) },
  }

  const region = {
    isExtremeSim: true,
    seed: manifest.seed,
    size,
    manifest,
    terrain,
    city,
    people,
    demand,
    rail,
    commerce: comJson,
    historyByYear,
    timeline: manifest.timeline,
    blocks: { id: new Int32Array(columns * columns).fill(-1), blocks: [], seams: [] },
    roadIndex,
    railIndex,
    streams,
    division,
    slopes: manifest.slopes ?? netJson.slopes ?? [],
    urbanNodes: manifest.urbanNodes ?? netJson.urbanNodes ?? [],
    depots: manifest.depots ?? netJson.rail?.depots ?? [],
    roadLawStats: manifest.roadLawStats ?? netJson.roadLawStats ?? null,
    trafficLawStats: manifest.trafficLawStats ?? netJson.roads?.trafficLaw ?? null,
    trafficLawEras: manifest.trafficLawEras ?? null,
    buildingLawStats: manifest.buildingLawStats ?? null,
    landMarketStats: manifest.landMarketStats ?? null,
    parcelStats: manifest.parcelStats ?? null,
    gpuMeta: manifest.gpuMeta ?? null,
    desire: [],
    timings: manifest.timings,
  }
  region.fine = createFineTerrain(region)

  // Load persisted parcel tiles (100 tiles) on demand or in parallel when preloadParcels=true
  const tileCols = manifest.parcelTileCols || 10
  const tileSize = manifest.parcelTileSize || 2000
  const tileGrid = new Array(tileCols * tileCols).fill(null)
  const t5Grid = new Array(tileCols * tileCols).fill(null)
  const t5Side = Math.round(tileSize / 5) // 400
  let preloadedCount = 0

  async function fetchTerrain5mTile(tx, tz) {
    if (!manifest.has5mTerrain || tx < 0 || tz < 0 || tx >= tileCols || tz >= tileCols) return null
    const idx = tx + tz * tileCols
    if (t5Grid[idx] !== null) return t5Grid[idx]
    try {
      const res = await fetch(`${base}/terrain5m/${tx}/${tz}`)
      if (!res.ok) { t5Grid[idx] = false; return null }
      const data = unpackTypedArraysBrowser(await res.arrayBuffer())
      const entry = { gndCm: data.gndCm || data.elevCm, side: t5Side }
      t5Grid[idx] = entry
      return entry
    } catch {
      t5Grid[idx] = false
      return null
    }
  }

  region.terrain5mCache = {
    async ensureForBox(x0, z0, x1, z1) {
      if (!manifest.has5mTerrain) return
      const tx0 = Math.max(0, Math.floor((x0 - 20) / tileSize))
      const tx1 = Math.min(tileCols - 1, Math.floor((x1 + 20) / tileSize))
      const tz0 = Math.max(0, Math.floor((z0 - 20) / tileSize))
      const tz1 = Math.min(tileCols - 1, Math.floor((z1 + 20) / tileSize))
      const reqs = []
      for (let tz = tz0; tz <= tz1; tz++) {
        for (let tx = tx0; tx <= tx1; tx++) {
          if (t5Grid[tx + tz * tileCols] === null) reqs.push(fetchTerrain5mTile(tx, tz))
        }
      }
      if (reqs.length) await Promise.all(reqs)
    },
    heightAt(x, z) {
      if (x < 0 || z < 0 || x >= size || z >= size) return NaN
      const tx = Math.min(tileCols - 1, Math.max(0, Math.floor(x / tileSize)))
      const tz = Math.min(tileCols - 1, Math.max(0, Math.floor(z / tileSize)))
      const tile = t5Grid[tx + tz * tileCols]
      if (!tile || !tile.gndCm) return NaN
      const lx = Math.max(0, Math.min(tile.side - 1.001, (x - tx * tileSize) / 5.0 - 0.5))
      const lz = Math.max(0, Math.min(tile.side - 1.001, (z - tz * tileSize) / 5.0 - 0.5))
      const ix = Math.floor(lx), iz = Math.floor(lz)
      const fx = lx - ix, fz = lz - iz
      const s = tile.side
      const e00 = tile.gndCm[iz * s + ix] * 0.01
      const e10 = tile.gndCm[iz * s + ix + 1] * 0.01
      const e01 = tile.gndCm[(iz + 1) * s + ix] * 0.01
      const e11 = tile.gndCm[(iz + 1) * s + ix + 1] * 0.01
      return (e00 * (1 - fx) + e10 * fx) * (1 - fz) + (e01 * (1 - fx) + e11 * fx) * fz
    },
  }

  async function fetchParcelTile(tx, tz) {
    if (tx < 0 || tz < 0 || tx >= tileCols || tz >= tileCols) return null
    const idx = tx + tz * tileCols
    if (tileGrid[idx]) return tileGrid[idx]
    try {
      const res = await fetch(`${base}/parcel/${tx}/${tz}`)
      if (!res.ok) return null
      const data = unpackTypedArraysBrowser(await res.arrayBuffer())
      const n = data.floors?.length ?? 0
      const bounds = [tx * tileSize - 60, tz * tileSize - 60, (tx + 1) * tileSize + 60, (tz + 1) * tileSize + 60]
      const entry = { ...data, count: n, bounds }
      tileGrid[idx] = entry
      preloadedCount += n
      return entry
    } catch {
      return null
    }
  }

  if (preloadParcels) {
    progress('超極限パーセル・店舗建物(100タイル)読込中', 0.72)
    // Load in batches of 10 for smooth progress & browser socket limits
    for (let rz = 0; rz < tileCols; rz++) {
      await Promise.all(Array.from({ length: tileCols }, (_, cx) => fetchParcelTile(cx, rz)))
      progress(`超極限パーセル・店舗建物読込中 (${(rz + 1) * tileCols}/100)`, 0.72 + 0.26 * ((rz + 1) / tileCols))
    }
  }

  const overlaps = (ax, az, bx, bz, x0, z0, x1, z1) => ax <= x1 && az <= z1 && bx >= x0 && bz >= z0
  region.buildingCache = {
    get count() { return preloadedCount || manifest.totalBuildings },
    columns: tileCols,
    tileSize,
    tileAt: (tx, tz) => (tx >= 0 && tz >= 0 && tx < tileCols && tz < tileCols ? tileGrid[tx + tz * tileCols] : null),
    fetchTile: fetchParcelTile,
    inWindow(x0, z0, x1, z1) {
      const out = []
      const tx0 = Math.max(0, Math.floor(x0 / tileSize))
      const tx1 = Math.min(tileCols - 1, Math.floor(x1 / tileSize))
      const tz0 = Math.max(0, Math.floor(z0 / tileSize))
      const tz1 = Math.min(tileCols - 1, Math.floor(z1 / tileSize))
      for (let tz = tz0; tz <= tz1; tz++) {
        for (let tx = tx0; tx <= tx1; tx++) {
          const tile = tileGrid[tx + tz * tileCols]
          if (!tile || !tile.floors?.length) continue
          const {
            corners, lots, tiers, floors, uses, tones, shopTypes, shopIds, builtYears,
            retainingH, designFlags, effectivePrice, frontRoadW, streetLegal, gardenCodes, parcelPolyPts, parcelPolyOfs,
          } = tile
          for (let id = 0; id < floors.length; id++) {
            const i = id * 8
            const ax = Math.min(corners[i], corners[i + 2], corners[i + 4], corners[i + 6])
            const az = Math.min(corners[i + 1], corners[i + 3], corners[i + 5], corners[i + 7])
            const bx = Math.max(corners[i], corners[i + 2], corners[i + 4], corners[i + 6])
            const bz = Math.max(corners[i + 1], corners[i + 3], corners[i + 5], corners[i + 7])
            if (!overlaps(ax, az, bx, bz, x0, z0, x1, z1)) continue
            const j = id * 4
            let parcelPoly = null
            if (parcelPolyPts && parcelPolyOfs && id + 1 < parcelPolyOfs.length) {
              const p0 = parcelPolyOfs[id] * 2
              const p1 = parcelPolyOfs[id + 1] * 2
              if (p1 > p0 + 4) parcelPoly = parcelPolyPts.slice(p0, p1)
            }
            out.push({
              corners: corners.slice(i, i + 8),
              lot: [lots[j] / 10, lots[j + 1] / 10, lots[j + 2] / 10, lots[j + 3] / 10],
              tier: tiers[id],
              floors: floors[id],
              use: uses[id],
              tone: tones[id] / 255,
              shopType: shopTypes ? shopTypes[id] : 255,
              shopId: shopIds ? shopIds[id] : -1,
              builtYear: builtYears ? builtYears[id] : 1975,
              retainingH: retainingH ? retainingH[id] / 10 : 0,
              designFlags: designFlags ? designFlags[id] : 0,
              effectivePrice: effectivePrice ? effectivePrice[id] : 0,
              frontRoadW: frontRoadW ? frontRoadW[id] / 10 : 6.0,
              streetLegal: streetLegal ? streetLegal[id] : 1,
              gardenCode: gardenCodes ? gardenCodes[id] : 0,
              parcelPoly,
            })
          }
        }
      }
      return out
    },
    streetsInWindow(x0, z0, x1, z1) {
      const segsRaw = []
      const seen = new Set()
      const tx0 = Math.max(0, Math.floor(x0 / tileSize))
      const tx1 = Math.min(tileCols - 1, Math.floor(x1 / tileSize))
      const tz0 = Math.max(0, Math.floor(z0 / tileSize))
      const tz1 = Math.min(tileCols - 1, Math.floor(z1 / tileSize))
      for (let tz = tz0; tz <= tz1; tz++) {
        for (let tx = tx0; tx <= tx1; tx++) {
          const tile = tileGrid[tx + tz * tileCols]
          if (!tile || !tile.streetPts?.length) continue
          const pts = tile.streetPts
          const meta = tile.streetMeta
          const segs = pts.length / 4
          for (let s = 0; s < segs; s++) {
            const ax = pts[s * 4], az = pts[s * 4 + 1], bx = pts[s * 4 + 2], bz = pts[s * 4 + 3]
            if (Math.max(ax, bx) < x0 - 20 || Math.min(ax, bx) > x1 + 20 ||
                Math.max(az, bz) < z0 - 20 || Math.min(az, bz) > z1 + 20) continue
            const ka = `${Math.round(ax * 5)},${Math.round(az * 5)}`
            const kb = `${Math.round(bx * 5)},${Math.round(bz * 5)}`
            const sk = ka < kb ? `${ka}|${kb}` : `${kb}|${ka}`
            if (seen.has(sk)) continue
            seen.add(sk)
            const w = meta[s * 3] / 10
            const mc = meta[s * 3 + 1]
            const kind = mc === 2 ? 'stair' : mc === 1 ? 'alley' : mc === 3 ? 'designated' : mc === 4 ? 'greenway' : 'street'
            const era = Math.max(1, Math.min(10, Math.floor(meta[s * 3 + 2] / 18)))
            segsRaw.push({ ax, az, bx, bz, ka, kb, w, kind, era })
          }
        }
      }
      if (!segsRaw.length) return []

      // Chain collinear/curved degree-2 segments of same kind & width into continuous polylines
      const adj = new Map()
      for (let i = 0; i < segsRaw.length; i++) {
        const sg = segsRaw[i]
        let la = adj.get(sg.ka); if (!la) adj.set(sg.ka, la = [])
        la.push(i)
        let lb = adj.get(sg.kb); if (!lb) adj.set(sg.kb, lb = [])
        lb.push(i)
      }
      const canJoin = (key, aIdx, bIdx) => {
        const list = adj.get(key)
        if (!list || list.length !== 2) return false
        const A = segsRaw[aIdx], B = segsRaw[bIdx]
        return A.kind === B.kind && Math.abs(A.w - B.w) <= 0.45
      }
      const used = new Uint8Array(segsRaw.length)
      const out = []
      for (let i = 0; i < segsRaw.length; i++) {
        if (used[i]) continue
        used[i] = 1
        const s0 = segsRaw[i]
        const pts = [[s0.ax, s0.az], [s0.bx, s0.bz]]
        // Extend forward from kb
        let curIdx = i, curEndKey = s0.kb
        while (true) {
          const list = adj.get(curEndKey)
          if (!list || list.length !== 2) break
          const nextIdx = list[0] === curIdx ? list[1] : list[0]
          if (used[nextIdx] || !canJoin(curEndKey, curIdx, nextIdx)) break
          used[nextIdx] = 1
          const nx = segsRaw[nextIdx]
          if (nx.ka === curEndKey) { pts.push([nx.bx, nx.bz]); curEndKey = nx.kb }
          else { pts.push([nx.ax, nx.az]); curEndKey = nx.ka }
          curIdx = nextIdx
        }
        // Extend backward from ka
        curIdx = i; curEndKey = s0.ka
        while (true) {
          const list = adj.get(curEndKey)
          if (!list || list.length !== 2) break
          const nextIdx = list[0] === curIdx ? list[1] : list[0]
          if (used[nextIdx] || !canJoin(curEndKey, curIdx, nextIdx)) break
          used[nextIdx] = 1
          const nx = segsRaw[nextIdx]
          if (nx.kb === curEndKey) { pts.unshift([nx.ax, nx.az]); curEndKey = nx.ka }
          else { pts.unshift([nx.bx, nx.bz]); curEndKey = nx.kb }
          curIdx = nextIdx
        }
        const flat = new Array(pts.length * 2)
        for (let k = 0; k < pts.length; k++) { flat[k * 2] = pts[k][0]; flat[k * 2 + 1] = pts[k][1] }
        out.push({ points: flat, width: s0.w, kind: s0.kind, era: s0.era })
      }
      return out
    },
  }

  progress('超極限データ準備完了', 1)
  return region
}
