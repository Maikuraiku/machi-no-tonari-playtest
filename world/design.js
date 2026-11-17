// A building as a set of walls: every storey is a list of walls of any length and direction,
// with openings (doors and windows) cut into them, finishes on both faces, rooms, furniture and
// stairs. Everything here is plain geometry in metres, measured from the north-west corner of
// the lot, so that the 3D view, the collisions, the design tools and the tests share one model.

export const TILE = 8 // metres along one town tile
export const CELLS = 5 // floor-plan cells along one tile, for the easy grid plans
export const CELL = TILE / CELLS
// Walls are cut at this height when a room is looked into from above.
// How much room a resident needs to either side, in metres.
export const BODY = 0.24
export const CUT = 1.2
// A wall along the edge of a lot is set back this far, so that it stays on its own land.
const EDGE = 0.1
const SNAP = 0.02

export function hash(a, b = 0, c = 0) {
  const value = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453
  return value - Math.floor(value)
}

export function houseSeed(id) {
  let value = 7
  for (const letter of String(id)) value = (value * 31 + letter.charCodeAt(0)) % 100003
  return value
}

export const STYLE_LABELS = {
  modern: '現代住宅', europe: 'ヨーロッパ風', japan: '和風建築', danchi: '団地（昭和30年代）',
  mansion: 'マンション', office: '近代的なビル', brutal: 'コンクリート建造物',
}
export const STYLE_FLOORS = { modern: 3, europe: 3, japan: 2, danchi: 5, mansion: 14, office: 20, brutal: 20 }
export const ROOM_LABELS = {
  L: 'リビング', K: 'キッチン', B: '寝室', W: '和室', T: 'トイレ', U: '浴室', G: '玄関',
  H: '廊下', S: '階段', O: '仕事部屋', M: 'ホール', V: 'ベランダ', P: '個室', E: '物置',
}
export const ROOM_COLORS = {
  L: '#f0d9a8', K: '#f3c9a0', B: '#c9d6ee', W: '#cfdc9e', T: '#d5e6ea', U: '#b9dce6', G: '#d9cfc0',
  H: '#e7e2d6', S: '#cfc6dd', O: '#c6d3cf', M: '#ead7d2', V: '#dfe7df', P: '#e3c6dc', E: '#c9c6bf',
}

// Storey height, height of the ground floor above the street, outside wall thickness and roof.
export const STYLES = {
  modern: { storey: 2.8, base: 0.18, wall: 0.2, roof: { k: 'flat', f: 'roof-metal', parapet: 0.35 } },
  europe: { storey: 2.9, base: 0.24, wall: 0.24, roof: { k: 'hip', f: 'roof-tile-orange', pitch: 40, eave: 0.4 } },
  japan: { storey: 2.7, base: 0.3, wall: 0.18, roof: { k: 'hip', f: 'roof-kawara', pitch: 27, eave: 0.85 } },
  danchi: { storey: 2.65, base: 0.3, wall: 0.2, roof: { k: 'flat', f: 'roof-concrete', parapet: 0.45 } },
  mansion: { storey: 2.9, base: 0.18, wall: 0.22, roof: { k: 'flat', f: 'roof-concrete', parapet: 1.0 } },
  office: { storey: 3.6, base: 0.15, wall: 0.2, roof: { k: 'flat', f: 'roof-concrete', parapet: 0.9 } },
  brutal: { storey: 3.4, base: 0.2, wall: 0.3, roof: { k: 'flat', f: 'roof-concrete', parapet: 1.2 } },
  shop: { storey: 3.4, base: 0.12, wall: 0.2, roof: { k: 'flat', f: 'roof-concrete', parapet: 0.7 } },
}

// ---- What a building can be made of -----------------------------------------

const finish = (label, group, texture, tint = '#ffffff', extra = {}) => ({ label, group, texture, tint, ...extra })

// Surface finishes. `group` only sorts them in the design tools: any finish goes on any face.
export const FINISHES = {
  'mortar-white': finish('モルタル（白）', 'wall', 'mortar', '#fbfaf4'),
  'mortar-cream': finish('モルタル（クリーム）', 'wall', 'mortar', '#f5ead0'),
  'mortar-ivory': finish('モルタル（アイボリー）', 'wall', 'mortar', '#f1e9d9'),
  'mortar-grey': finish('モルタル（グレー）', 'wall', 'mortar', '#c8c7bf'),
  'stucco-white': finish('塗り壁（白）', 'wall', 'stucco', '#f8f6ef'),
  'stucco-ivory': finish('塗り壁（アイボリー）', 'wall', 'stucco', '#f3ecda'),
  'stucco-cream': finish('塗り壁（クリーム）', 'wall', 'stucco', '#f2e2c0'),
  'stucco-yellow': finish('塗り壁（黄）', 'wall', 'stucco', '#efd58e'),
  'stucco-rose': finish('塗り壁（ローズ）', 'wall', 'stucco', '#eccdc0'),
  'stucco-sage': finish('塗り壁（若草）', 'wall', 'stucco', '#d2dcc0'),
  'stucco-blue': finish('塗り壁（水色）', 'wall', 'stucco', '#c8d9e3'),
  'stucco-charcoal': finish('塗り壁（チャコール）', 'wall', 'stucco', '#54585b'),
  'plaster-white': finish('漆喰', 'wall', 'plaster', '#f6f3ea'),
  concrete: finish('コンクリート打ち放し', 'wall', 'concrete'),
  'concrete-stained': finish('古びたコンクリート', 'wall', 'concreteStained'),
  'concrete-dark': finish('コンクリート（濃）', 'wall', 'concreteStained', '#a4a39e'),
  'brick-red': finish('レンガ（赤）', 'wall', 'brick'),
  'brick-brown': finish('レンガ（こげ茶）', 'wall', 'brick', '#b08d7c'),
  'brick-white': finish('レンガ（白）', 'wall', 'brickWhite'),
  'tile-white': finish('タイル（白）', 'wall', 'tile', '#fafaf6'),
  'tile-beige': finish('タイル（ベージュ）', 'wall', 'tile', '#e7d5bc'),
  'tile-sand': finish('タイル（砂色）', 'wall', 'tile', '#d8c0a6'),
  'tile-brown': finish('タイル（茶）', 'wall', 'tile', '#a47b5d'),
  'tile-grey': finish('タイル（グレー）', 'wall', 'tile', '#b8b6af'),
  'tile-navy': finish('タイル（紺）', 'wall', 'tile', '#49576c'),
  'siding-white': finish('サイディング（白）', 'wall', 'siding', '#f4f3ee'),
  'siding-sand': finish('サイディング（砂色）', 'wall', 'siding', '#d9ceb7'),
  'siding-grey': finish('サイディング（グレー）', 'wall', 'siding', '#8e9397'),
  'siding-navy': finish('サイディング（紺）', 'wall', 'siding', '#3e4b5d'),
  'siding-green': finish('サイディング（深緑）', 'wall', 'siding', '#4d6455'),
  'wood-natural': finish('板張り（明るい木）', 'wall', 'planks', '#d3a979'),
  'wood-brown': finish('板張り（茶）', 'wall', 'planks', '#8f6646'),
  'wood-dark': finish('板張り（焼杉）', 'wall', 'planks', '#3d342e'),
  'wood-red': finish('板張り（べんがら）', 'wall', 'planks', '#8d4f3f'),
  'metal-dark': finish('金属パネル（黒）', 'wall', 'metalPanel', '#3d4349', { roughness: 0.45, metalness: 0.7 }),
  'metal-silver': finish('金属パネル（銀）', 'wall', 'metalPanel', '#c3c8cc', { roughness: 0.4, metalness: 0.8 }),
  'metal-white': finish('金属パネル（白）', 'wall', 'metalPanel', '#eef0f0', { roughness: 0.5, metalness: 0.3 }),
  stone: finish('石張り', 'wall', 'stone'),

  'wp-white': finish('壁紙（白）', 'paper', 'wallpaper', '#f7f5ef'),
  'wp-ivory': finish('壁紙（アイボリー）', 'paper', 'wallpaper', '#f2ead9'),
  'wp-grey': finish('壁紙（グレー）', 'paper', 'wallpaper', '#d9dbd9'),
  'wp-blue': finish('壁紙（水色）', 'paper', 'wallpaper', '#d2dfe9'),
  'wp-green': finish('壁紙（若草）', 'paper', 'wallpaper', '#d7e3d0'),
  'wp-pink': finish('壁紙（桜）', 'paper', 'wallpaper', '#f1dcd8'),
  'wp-yellow': finish('壁紙（たまご）', 'paper', 'wallpaper', '#f4e9bd'),
  'wp-navy': finish('壁紙（紺）', 'paper', 'wallpaper', '#44516a'),
  'wp-brown': finish('壁紙（茶）', 'paper', 'wallpaper', '#8b6f5c'),
  'wp-stripe': finish('壁紙（ストライプ）', 'paper', 'wallpaperStripe'),
  juraku: finish('じゅらく壁', 'paper', 'plaster', '#dccfa9'),
  'tile-bath': finish('タイル（水色）', 'paper', 'bathTile', '#d4e9ef'),
  'tile-bath-white': finish('タイル（白）', 'paper', 'bathTile'),
  'panel-wood': finish('板壁', 'paper', 'planks', '#caa57c'),

  'floor-maple': finish('フローリング（メープル）', 'floor', 'floorboards'),
  'floor-oak': finish('フローリング（オーク）', 'floor', 'floorboards', '#d9b98f'),
  'floor-walnut': finish('フローリング（ウォルナット）', 'floor', 'floorboards', '#8f6b52'),
  'floor-dark': finish('フローリング（こげ茶）', 'floor', 'floorboards', '#5d4a40'),
  tatami: finish('畳', 'floor', 'tatami'),
  'tile-floor': finish('タイル床（白）', 'floor', 'bathTile'),
  'tile-floor-blue': finish('タイル床（水色）', 'floor', 'bathTile', '#d4e9ef'),
  'stone-floor': finish('石畳', 'floor', 'pavers', '#f1ece2'),
  'genkan-floor': finish('玄関タイル', 'floor', 'pavers', '#b8b2a6'),
  checker: finish('市松模様の床', 'floor', 'checker'),
  'carpet-grey': finish('カーペット（グレー）', 'floor', 'carpet', '#b4b9bf'),
  'carpet-blue': finish('カーペット（青）', 'floor', 'carpet', '#6f7f93'),
  'carpet-red': finish('カーペット（えんじ）', 'floor', 'carpet', '#9a5a56'),
  'carpet-green': finish('カーペット（緑）', 'floor', 'carpet', '#6f8a72'),
  'concrete-floor': finish('コンクリート床', 'floor', 'concrete', '#d2d0c9'),
  deck: finish('ウッドデッキ', 'floor', 'planks', '#b08a62'),

  'ceil-white': finish('天井（白）', 'ceiling', 'plaster', '#fbfaf6'),
  'ceil-wood': finish('板天井', 'ceiling', 'planks', '#c9a880'),

  'roof-kawara': finish('瓦（いぶし銀）', 'roof', 'kawara', '#a7adb4', { roughness: 0.55, metalness: 0.2 }),
  'roof-kawara-dark': finish('瓦（黒）', 'roof', 'kawara', '#5b6068', { roughness: 0.6, metalness: 0.15 }),
  'roof-tile-orange': finish('洋瓦（だいだい）', 'roof', 'kawara', '#c7633d', { roughness: 0.85 }),
  'roof-tile-brown': finish('洋瓦（茶）', 'roof', 'kawara', '#8b5b45', { roughness: 0.85 }),
  'roof-tile-green': finish('洋瓦（緑）', 'roof', 'kawara', '#4f6b58', { roughness: 0.8 }),
  'roof-slate': finish('スレート', 'roof', 'slate', '#5a5e63'),
  'roof-metal': finish('金属屋根（濃いグレー）', 'roof', 'roofMetal', '#5b5f63', { roughness: 0.5, metalness: 0.4 }),
  'roof-metal-green': finish('金属屋根（緑青）', 'roof', 'roofMetal', '#5f8a7c', { roughness: 0.55, metalness: 0.35 }),
  'roof-metal-red': finish('金属屋根（赤さび色）', 'roof', 'roofMetal', '#8e4d3c', { roughness: 0.6, metalness: 0.3 }),
  'roof-concrete': finish('屋上（コンクリート）', 'roof', 'concrete', '#9da09b'),
}

const opening = (label, door, w, h, s, extra = {}) => ({ label, door, w, h, s, ...extra })

// Doors and windows: default width, height and height of the sill above the floor.
export const OPENINGS = {
  'door-entrance': opening('玄関ドア', true, 0.9, 2.1, 0),
  'door-wood': opening('木のドア', true, 0.8, 2.0, 0),
  'door-white': opening('白いドア', true, 0.75, 2.0, 0),
  'door-glass': opening('ガラスドア', true, 0.85, 2.05, 0, { glass: true }),
  'door-steel': opening('スチールドア', true, 0.85, 2.0, 0),
  'door-slide': opening('引き戸', true, 0.9, 2.0, 0, { slide: true }),
  'door-fusuma': opening('ふすま', true, 1.3, 1.9, 0, { slide: true }),
  'door-shoji': opening('障子', true, 1.3, 1.9, 0, { slide: true }),
  'door-double': opening('両開きドア', true, 1.4, 2.1, 0),
  'door-auto': opening('自動ドア', true, 1.4, 2.2, 0, { slide: true, glass: true }),
  'door-terrace': opening('掃き出し窓（出入りできる）', true, 1.36, 2.0, 0.04, { slide: true, glass: true }),
  arch: opening('開口（ドアなし）', true, 1.2, 2.1, 0, { open: true }),
  'win-slide': opening('引き違い窓', false, 1.2, 1.15, 0.9),
  'win-wide': opening('横長の窓', false, 1.4, 1.3, 0.85),
  'win-full': opening('床までの窓', false, 1.3, 1.95, 0.1),
  'win-small': opening('小窓', false, 0.6, 0.5, 1.5),
  'win-slit': opening('スリット窓', false, 0.34, 1.5, 0.6),
  'win-fixed': opening('はめ殺し窓', false, 1.0, 1.0, 0.9),
  'win-lattice': opening('格子窓', false, 1.1, 1.15, 0.9),
  'win-shutter': opening('よろい戸つきの窓', false, 1.0, 1.25, 0.9),
  'win-steel': opening('スチールサッシ', false, 1.2, 1.2, 0.9),
  'win-round': opening('丸窓', false, 0.8, 0.8, 1.1, { round: true }),
  'win-shop': opening('ショーウィンドウ', false, 1.4, 2.3, 0.15),
  'win-curtain': opening('カーテンウォール', false, 1.44, 2.6, 0.75),
  'win-hood': opening('ひさし付きスリット窓', false, 0.4, 1.5, 0.6),
}

// Colours for the frames of doors and windows, and for door leaves.
export const FRAME_COLORS = {
  white: ['白', '#f7f5ee'], black: ['黒', '#23272a'], silver: ['シルバー', '#b9bdb9'], bronze: ['ブロンズ', '#5b4a3c'],
  wood: ['木', '#8a6746'], 'wood-dark': ['濃い木', '#4a3a30'], sage: ['若草', '#9fb3ae'], green: ['深緑', '#3f6b52'],
  navy: ['紺', '#34506b'], red: ['赤', '#8a3b34'], steel: ['スチール', '#8ea1a8'], yellow: ['黄', '#d9a441'],
}

const item = (label, group, w, d, h, extra = {}) => ({ label, group, w, d, h, solid: true, ...extra })

// Furniture and things for the garden: footprint (width x depth) and height in metres.
export const ITEMS = {
  sofa: item('ソファ', 'living', 1.5, 0.72, 0.78),
  armchair: item('ひとり掛けソファ', 'living', 0.78, 0.75, 0.78),
  'table-low': item('ローテーブル', 'living', 0.95, 0.55, 0.38),
  tv: item('テレビ', 'living', 1.3, 0.38, 1.15),
  shelf: item('本棚', 'living', 0.9, 0.3, 1.8),
  cabinet: item('キャビネット', 'living', 0.9, 0.4, 0.85),
  rug: item('ラグ', 'living', 1.8, 1.2, 0.02, { solid: false }),
  plant: item('観葉植物', 'living', 0.45, 0.45, 1.2),
  lamp: item('フロアランプ', 'living', 0.35, 0.35, 1.5),
  'ceiling-light': item('天井の照明', 'living', 0.5, 0.5, 0.12, { solid: false, ceiling: true }),
  'table-dining': item('ダイニングテーブル', 'dining', 1.4, 0.8, 0.72),
  chair: item('いす', 'dining', 0.42, 0.45, 0.85),
  kitchen: item('キッチン', 'dining', 1.5, 0.6, 0.86),
  fridge: item('冷蔵庫', 'dining', 0.62, 0.66, 1.76),
  bed: item('ベッド', 'bedroom', 1.0, 1.95, 0.5),
  'bed-double': item('ダブルベッド', 'bedroom', 1.5, 1.95, 0.5),
  desk: item('机', 'bedroom', 1.1, 0.55, 0.72),
  wardrobe: item('クローゼット', 'bedroom', 1.0, 0.55, 1.9),
  chabudai: item('ちゃぶ台', 'japanese', 1.0, 1.0, 0.32),
  zabuton: item('ざぶとん', 'japanese', 0.5, 0.5, 0.08, { solid: false }),
  futon: item('ふとん', 'japanese', 1.0, 1.9, 0.14, { solid: false }),
  toilet: item('トイレ', 'water', 0.42, 0.7, 0.8),
  bathtub: item('浴槽', 'water', 0.75, 1.4, 0.56),
  washbasin: item('洗面台', 'water', 0.6, 0.45, 0.85),
  washer: item('洗濯機', 'water', 0.6, 0.6, 0.9),
  'shoe-box': item('げた箱', 'entrance', 1.0, 0.34, 0.9),
  boxes: item('段ボール箱', 'entrance', 0.8, 0.7, 1.0),
  rack: item('ハンガーラック', 'shop', 1.3, 0.4, 1.7),
  counter: item('カウンター', 'shop', 1.6, 0.6, 1.0),
  mirror: item('姿見', 'shop', 0.9, 0.12, 1.9),
  'cafe-table': item('カフェテーブル', 'shop', 0.8, 0.8, 0.72),
  stool: item('スツール', 'shop', 0.36, 0.36, 0.46),
  'office-desk': item('オフィスデスク', 'office', 1.2, 0.62, 1.2),
  'office-chair': item('オフィスチェア', 'office', 0.5, 0.5, 0.9),
  bench: item('ベンチ', 'garden', 1.6, 0.5, 0.8),
  planter: item('プランター', 'garden', 0.9, 0.35, 0.5),
  hedge: item('生け垣', 'garden', 1.6, 0.5, 1.1),
  fence: item('フェンス', 'garden', 1.6, 0.08, 1.0),
  tree: item('庭木', 'garden', 0.7, 0.7, 3.2),
  mailbox: item('ポスト', 'garden', 0.3, 0.3, 1.1),
  bicycle: item('自転車', 'garden', 0.5, 1.7, 1.0),
  vending: item('自動販売機', 'garden', 1.0, 0.7, 1.85),
  'ac-unit': item('室外機', 'garden', 0.8, 0.32, 0.6),
  lantern: item('石灯籠', 'garden', 0.5, 0.5, 1.3),
}
export const ITEM_GROUPS = {
  living: 'リビング', dining: 'ダイニング', bedroom: '寝室', japanese: '和室', water: '水まわり',
  entrance: '玄関・物置', shop: 'お店', office: '仕事場', garden: '庭・外まわり',
}

// Things hung on a wall: width and height in metres.
export const WALL_DECOR = {
  picture: { label: '絵', w: 0.6, h: 0.45 }, clock: { label: '時計', w: 0.32, h: 0.32 },
  'wall-shelf': { label: '壁の棚', w: 0.8, h: 0.25 }, 'wall-lamp': { label: '壁の照明', w: 0.2, h: 0.3 },
  'wall-mirror': { label: '壁の鏡', w: 0.5, h: 0.9 }, noren: { label: 'のれん', w: 0.9, h: 0.5 },
  awning: { label: '日よけ', w: 1.6, h: 0.5 }, 'flower-box': { label: '花台', w: 1.0, h: 0.25 },
}
export const ROOFS = { flat: '陸屋根（平ら）', hip: '寄棟', gable: '切妻', shed: '片流れ' }
export const RAILS = { bars: '手すり（格子）', panel: '手すり（パネル）', glass: '手すり（ガラス）', solid: '腰壁' }
export const STAIRS = { u: '折り返し階段', straight: 'まっすぐな階段' }

// ---- Easy plans: a grid of room codes per storey -----------------------------

const SIDES = [
  { name: 's', dx: 0, dz: 1 }, { name: 'n', dx: 0, dz: -1 }, { name: 'e', dx: 1, dz: 0 }, { name: 'w', dx: -1, dz: 0 },
]

export function planOf(house) {
  const width = CELLS * (house.w ?? 1)
  const depth = CELLS * (house.d ?? 1)
  const floors = house.floors ?? []
  const at = (level, x, z) => (level < 0 || level >= floors.length || x < 0 || z < 0 || x >= width || z >= depth
    ? '.' : floors[level][z * width + x] ?? '.')
  const solid = (level, x, z) => {
    const code = at(level, x, z)
    return code !== '.' && code !== 'V'
  }
  return { width, depth, levels: floors.length, at, solid }
}

// The front door: a 玄関 on an outside wall, else the room nearest the front of the lot.
export function entranceOf(plan) {
  let best = null
  for (let z = 0; z < plan.depth; z++) {
    for (let x = 0; x < plan.width; x++) {
      const code = plan.at(0, x, z)
      if (code === '.' || code === 'V') continue
      const exposed = SIDES.some((side) => plan.at(0, x + side.dx, z + side.dz) === '.')
      const score = (code === 'G' && exposed ? 1000 : 0) + z * 10 - Math.abs(x + 0.5 - plan.width / 2)
      if (!best || score > best.score) best = { x, z, score }
    }
  }
  if (!best) return null
  const side = SIDES.find(({ dx, dz }) => plan.at(0, best.x + dx, best.z + dz) === '.') ?? SIDES[0]
  return { x: best.x, z: best.z, side }
}

// Rooms that open into one another. A stairwell is filled by its stairs, so nothing leads through it.
const HALLWAYS = 'HGLMO'
const DOOR_ORDER = 'HGSLMOKBWPEUT'

// Works out the rooms of a grid storey and which shared walls get a doorway.
const flightsOf = new WeakMap()
const edgeOf = (cell, side) => (side === 's' ? `${cell.x},${cell.z},s` : side === 'n' ? `${cell.x},${cell.z - 1},s`
  : side === 'e' ? `${cell.x},${cell.z},e` : `${cell.x - 1},${cell.z},e`)

// Where the stairs of a plan painted on the grid stand, storey by storey. A flight takes one
// cell of its stairwell (two, where there is another behind it), faces a way out, and the
// flights of the storeys above stand on top of it, so that one doorway serves both ends.
export function stairSpots(plan) {
  if (flightsOf.has(plan)) return flightsOf.get(plan)
  const levels = []
  const key = (x, z) => `${x},${z}`
  for (let level = 0; level < plan.levels - 1; level++) {
    const spots = []
    const seen = new Set()
    for (let z = 0; z < plan.depth; z++) {
      for (let x = 0; x < plan.width; x++) {
        if (plan.at(level, x, z) !== 'S' || seen.has(key(x, z))) continue
        const cells = []
        const pending = [[x, z]]
        seen.add(key(x, z))
        while (pending.length) {
          const [cx, cz] = pending.pop()
          cells.push({ x: cx, z: cz })
          for (const { dx, dz } of SIDES) {
            if (plan.at(level, cx + dx, cz + dz) === 'S' && !seen.has(key(cx + dx, cz + dz))) {
              seen.add(key(cx + dx, cz + dz))
              pending.push([cx + dx, cz + dz])
            }
          }
        }
        cells.sort((a, b) => a.z - b.z || a.x - b.x)
        const has = (cx, cz) => cells.some((cell) => cell.x === cx && cell.z === cz)
        const under = (levels[level - 1] ?? []).find((spot) => spot.cells.every((cell) => has(cell.x, cell.z)))
        if (under) {
          spots.push(under)
          continue
        }
        // The first flight of a stairwell: it needs somewhere to step off at the top, and is
        // better with a cell behind it (longer, gentler steps) and a landing or a hall in front.
        let best = null
        for (const cell of cells) {
          for (const side of SIDES) {
            const fx = cell.x + side.dx
            const fz = cell.z + side.dz
            const code = plan.at(level, fx, fz)
            const landing = has(fx, fz)
            if (!landing && '.VS'.includes(code)) continue
            const deep = has(cell.x - side.dx, cell.z - side.dz) && plan.at(level + 1, cell.x - side.dx, cell.z - side.dz) === 'S'
            const score = (plan.solid(level + 1, fx, fz) ? 16 : 0) + (deep ? 4 : 0) + (landing ? 2 : 0) + (HALLWAYS.includes(code) ? 1 : 0)
            if (!best || score > best.score) best = { score, side: side.name, cells: deep ? [cell, { x: cell.x - side.dx, z: cell.z - side.dz }] : [cell] }
          }
        }
        best ??= { side: 's', cells: [cells[0]] }
        spots.push({ side: best.side, cells: best.cells })
      }
    }
    levels.push(spots)
  }
  levels.push([])
  flightsOf.set(plan, levels)
  return levels
}

export function gridRooms(plan, level, entrance) {
  const room = new Map()
  const rooms = []
  const key = (x, z) => `${x},${z}`
  for (let z = 0; z < plan.depth; z++) {
    for (let x = 0; x < plan.width; x++) {
      const code = plan.at(level, x, z)
      if (code === '.' || room.has(key(x, z))) continue
      const id = rooms.length
      const cells = []
      const pending = [[x, z]]
      room.set(key(x, z), id)
      while (pending.length) {
        const [cx, cz] = pending.pop()
        cells.push({ x: cx, z: cz })
        for (const { dx, dz } of SIDES) {
          const next = key(cx + dx, cz + dz)
          if (plan.at(level, cx + dx, cz + dz) === code && !room.has(next)) {
            room.set(next, id)
            pending.push([cx + dx, cz + dz])
          }
        }
      }
      cells.sort((a, b) => a.z - b.z || a.x - b.x)
      rooms.push({ id, code, cells })
    }
  }

  // Shared walls between each pair of neighbouring rooms.
  const shared = new Map()
  for (let z = 0; z < plan.depth; z++) {
    for (let x = 0; x < plan.width; x++) {
      const a = room.get(key(x, z))
      if (a === undefined) continue
      for (const [dx, dz, edge] of [[1, 0, 'e'], [0, 1, 's']]) {
        const b = room.get(key(x + dx, z + dz))
        if (b === undefined || b === a) continue
        const pair = a < b ? `${a}|${b}` : `${b}|${a}`
        if (!shared.has(pair)) shared.set(pair, [])
        shared.get(pair).push(`${x},${z},${edge}`)
      }
    }
  }
  const neighbours = (id) => [...shared.keys()].map((pair) => pair.split('|').map(Number))
    .filter((pair) => pair.includes(id)).map((pair) => (pair[0] === id ? pair[1] : pair[0]))
  const doors = new Set()
  const linked = new Set()
  // Flights that start on this storey, and those that arrive on it from below.
  const spots = stairSpots(plan)
  const flights = [...new Set([...(spots[level] ?? []), ...(spots[level - 1] ?? [])])]
  // Stairs stand against the walls around them: only their open end can have a doorway.
  const closed = new Set()
  for (const { cells, side } of flights) {
    for (const [index, cell] of cells.entries()) {
      for (const { name } of SIDES) if (index > 0 || name !== side) closed.add(edgeOf(cell, name))
    }
  }
  const link = (a, b, edge) => {
    const pair = a < b ? `${a}|${b}` : `${b}|${a}`
    if (linked.has(pair)) return true
    const edges = (shared.get(pair) ?? []).filter((name) => !closed.has(name))
    if (!edge && !edges.length) return false
    linked.add(pair)
    doors.add(edge ?? edges[Math.floor((edges.length - 1) / 2)])
    return true
  }
  const rank = (id) => DOOR_ORDER.indexOf(rooms[id].code)
  const through = (id) => !'SV'.includes(rooms[id].code)
  // The open end of a flight leads onto its landing, or through a doorway into the next room.
  const faced = new Set()
  let arrival
  for (const { cells: [front], side } of flights) {
    const { dx, dz } = SIDES.find(({ name }) => name === side)
    const here = room.get(key(front.x, front.z))
    const there = room.get(key(front.x + dx, front.z + dz))
    if (there === undefined) continue
    arrival ??= there
    if (here === undefined || here === there) continue
    doors.add(edgeOf(front, side))
    linked.add(here < there ? `${here}|${there}` : `${there}|${here}`)
    faced.add(here)
  }
  for (const { id, code } of rooms) {
    const next = neighbours(id).sort((a, b) => rank(a) - rank(b))
    if (code === 'V') next.forEach((other) => link(id, other))
    else if (HALLWAYS.includes(code)) next.filter((other) => HALLWAYS.includes(rooms[other].code)).forEach((other) => link(id, other))
    else if (!faced.has(id)) [...next.filter(through), ...next.filter((other) => !through(other))].some((other) => link(id, other))
  }
  // Open one more door wherever a room still cannot be reached from the way in: the front door
  // on the ground floor, the top of the stairs above it.
  const start = entrance && level === 0 ? room.get(key(entrance.x, entrance.z))
    : arrival ?? rooms.find(({ code }) => 'SHGL'.includes(code))?.id ?? 0
  for (let guard = 0; guard < rooms.length * 2; guard++) {
    const reached = new Set([start])
    const pending = [start]
    while (pending.length) {
      const current = pending.pop()
      // Nobody walks on through a stairwell or across a balcony to reach another room.
      if (current !== start && !through(current)) continue
      for (const other of neighbours(current)) {
        const pair = current < other ? `${current}|${other}` : `${other}|${current}`
        if (linked.has(pair) && !reached.has(other)) {
          reached.add(other)
          pending.push(other)
        }
      }
    }
    const opened = rooms.some(({ id }) => !reached.has(id) && neighbours(id)
      .filter((other) => reached.has(other) && (through(other) || other === start)).sort((a, b) => rank(a) - rank(b))
      .some((other) => link(id, other)))
    if (!opened) break
  }
  return { room, rooms, doors }
}

// ---- The look of a building: finishes chosen by style, or by the owner --------

const INSIDE = {
  L: ['wp-white', 'floor-oak'], K: ['wp-ivory', 'floor-oak'], B: ['wp-blue', 'floor-maple'], P: ['wp-pink', 'floor-maple'],
  W: ['juraku', 'tatami'], T: ['tile-bath-white', 'tile-floor'], U: ['tile-bath', 'tile-floor-blue'], G: ['wp-ivory', 'genkan-floor'],
  H: ['wp-white', 'floor-oak'], S: ['wp-white', 'floor-walnut'], O: ['wp-grey', 'carpet-grey'], M: ['wp-ivory', 'stone-floor'],
  E: ['concrete', 'concrete-floor'], V: ['concrete', 'concrete-floor'],
}

// The finishes a style starts with; `house.look` replaces any of them.
export function lookOf(house) {
  const style = Object.hasOwn(STYLES, house.style) ? house.style : 'modern'
  const seed = houseSeed(house.id)
  const pick = (options, salt = 0) => options[Math.floor(hash(seed, salt + 1) * options.length) % options.length]
  const roof = { ...STYLES[style].roof }
  let look
  if (style === 'danchi') {
    look = { wall: pick(['mortar-white', 'mortar-cream', 'mortar-ivory']), frame: pick(['sage', 'silver', 'steel'], 2), door: pick(['steel', 'bronze', 'green'], 3), rail: 'panel', inside: 'wp-ivory' }
  } else if (style === 'mansion') {
    look = { wall: pick(['tile-white', 'tile-beige', 'tile-sand', 'tile-grey']), frame: 'black', door: 'bronze', rail: 'glass' }
  } else if (style === 'office') {
    look = { wall: 'metal-dark', frame: 'black', door: 'black', rail: 'glass' }
  } else if (style === 'brutal') {
    look = { wall: pick(['concrete-stained', 'concrete', 'concrete-dark']), frame: 'black', door: 'bronze', rail: 'solid' }
  } else if (style === 'europe') {
    look = { wall: pick(['stucco-cream', 'stucco-rose', 'stucco-ivory', 'stucco-yellow', 'stucco-sage']), frame: 'white', door: pick(['green', 'navy', 'red'], 5), rail: 'bars', low: 'brick-red' }
    roof.f = pick(['roof-tile-orange', 'roof-tile-orange', 'roof-tile-brown'], 2)
  } else if (style === 'japan') {
    look = { wall: 'plaster-white', frame: 'wood', door: 'wood', rail: 'bars', low: pick(['wood-dark', 'wood-dark', 'wood-brown']) }
    roof.f = pick(['roof-kawara', 'roof-kawara', 'roof-kawara-dark'], 2)
  } else if (style === 'shop') {
    look = { wall: 'stucco-ivory', frame: 'white', door: 'wood', rail: 'bars', low: 'brick-red' }
  } else {
    look = { wall: pick(['stucco-white', 'siding-white', 'siding-grey', 'stucco-charcoal']), frame: 'black', door: 'wood', rail: 'bars' }
  }
  const chosen = house.look ?? {}
  if (Object.hasOwn(FINISHES, chosen.wall)) {
    look.wall = chosen.wall
    look.low = undefined
  }
  if (Object.hasOwn(FINISHES, chosen.roof)) roof.f = chosen.roof
  if (Object.hasOwn(ROOFS, chosen.roofKind)) {
    roof.k = chosen.roofKind
    if (roof.k !== 'flat') {
      roof.pitch ??= 30
      roof.eave ??= 0.45
    } else roof.parapet ??= 0.4
  }
  if (Object.hasOwn(FRAME_COLORS, chosen.frame)) look.frame = chosen.frame
  if (Object.hasOwn(FRAME_COLORS, chosen.door)) look.door = chosen.door
  return { ...look, style, seed, roof }
}

const ROOM_WINDOW = { L: 'full', K: 'mid', B: 'mid', W: 'mid', P: 'mid', T: 'small', U: 'small', H: 'small', S: 'slit', O: 'wide', M: 'shop' }

function windowChoice(style, code, side, level, x, z, seed) {
  let kind = ROOM_WINDOW[code] ?? ''
  if (!kind) return ''
  // Blocks of flats and towers stack the same windows storey after storey.
  const stacked = ['danchi', 'mansion', 'office', 'brutal'].includes(style)
  const roll = hash(seed + (stacked ? 0 : level * 7), x * 3 + z * 11, side.charCodeAt(0))
  if (style === 'office') return 'win-curtain'
  if (style === 'brutal') return roll > 0.45 ? 'win-hood' : ''
  if (kind === 'shop') return side === 's' || roll > 0.5 ? 'win-shop' : 'win-slide'
  if (kind === 'full' && side !== 's') kind = 'mid'
  if (kind === 'small') return roll > 0.3 ? 'win-small' : ''
  if (kind === 'slit') return roll > 0.3 ? 'win-slit' : ''
  if (!(side === 's' || style === 'danchi' || style === 'mansion' || roll > 0.3)) return ''
  if (kind === 'full') return 'win-full'
  if (kind === 'wide') return 'win-wide'
  return style === 'danchi' ? 'win-steel' : style === 'japan' ? 'win-lattice' : style === 'europe' ? 'win-shutter' : 'win-slide'
}

const round = (value) => Math.round(value * 100) / 100

// Turns an easy grid plan into walls, openings, rooms, furniture and stairs.
export function compileDesign(house) {
  const look = lookOf(house)
  const { style, seed } = look
  const info = STYLES[style]
  const plan = planOf(house)
  const entrance = entranceOf(plan)
  const lotWidth = plan.width * CELL
  const lotDepth = plan.depth * CELL
  const gx = (i) => (i <= 0 ? EDGE : i >= plan.width ? lotWidth - EDGE : i * CELL)
  const gz = (j) => (j <= 0 ? EDGE : j >= plan.depth ? lotDepth - EDGE : j * CELL)
  const storeys = []
  // Each 玄関 on an outside wall gets a front door, on the first side that looks out.
  const doorSide = (x, z) => SIDES.find(({ dx, dz }) => plan.at(0, x + dx, z + dz) === '.')?.name

  for (let level = 0; level < plan.levels; level++) {
    const { room, rooms, doors } = gridRooms(plan, level, entrance)
    const idOf = (x, z) => room.get(`${x},${z}`)
    const walls = []
    const openings = []
    const papered = (code) => (style === 'danchi' && 'LKBHP'.includes(code) ? look.inside : INSIDE[code]?.[0] ?? 'wp-white')

    // One side of a unit edge: what stands there, and the finish seen from that side.
    const face = (x, z) => {
      const code = plan.at(level, x, z)
      if (code === '.') return { kind: 'out', finish: look.wall }
      if (code === 'V') return { kind: 'open', finish: look.wall, code }
      return { kind: 'in', finish: papered(code), code, room: idOf(x, z) }
    }
    // `first` is the cell to the north or west of the edge, `second` the one to the south or east.
    const describe = (first, second) => {
      const kinds = `${first.kind}|${second.kind}`
      if (first.kind === 'in' && second.kind === 'in') {
        return first.room === second.room ? null : { type: 'int', t: 0.12, key: `int|${first.finish}|${second.finish}`, first, second }
      }
      if (first.kind === 'in' || second.kind === 'in') {
        const low = look.low && level === 0 ? look.low : undefined
        return { type: 'ext', t: info.wall, key: `ext|${kinds}|${first.finish}|${second.finish}`, first, second, low }
      }
      if (kinds === 'open|out' || kinds === 'out|open') return { type: 'rail', t: 0.06, key: `rail|${kinds}`, first, second }
      return null
    }

    // The room an opening has to leave clear of the wall's ends and of the walls that cross it.
    const fit = (lo, hi, start, end, wanted) => {
      const from = Math.max(lo + 0.08, start + info.wall / 2 + 0.07)
      const to = Math.min(hi - 0.08, end - info.wall / 2 - 0.07)
      const width = Math.min(wanted, to - from)
      return width < 0.25 ? null : { centre: (from + to) / 2, width }
    }

    const addOpening = (wall, kind, lo, hi, start, end, extra = {}) => {
      const shape = OPENINGS[kind]
      const { wide, ...rest } = extra
      const room = fit(lo, hi, start, end, wide ?? shape.w)
      if (!room) return
      const height = Math.min(shape.h, info.storey - shape.s - 0.25)
      openings.push({ w: wall, at: round(room.centre - start), k: kind, ww: round(room.width), hh: round(height), s: shape.s, ...rest })
    }

    // Walks one grid line and joins the unit edges that make one straight, uniform wall.
    const trace = (count, along, across, cells, vertical) => {
      let run = null
      const flush = () => {
        if (!run) return
        const start = along(run.from)
        const end = along(run.to + 1)
        const a = vertical ? [round(across), round(start)] : [round(start), round(across)]
        const b = vertical ? [round(across), round(end)] : [round(end), round(across)]
        // The left face of a wall looks north for a wall running east, and east for one running south.
        const { first, second } = run.edge
        const [left, right] = vertical ? [second, first] : [first, second]
        const wall = { a, b, t: run.edge.t, l: left.finish, r: right.finish }
        if (run.edge.type === 'rail') Object.assign(wall, { h: 1.1, rail: look.rail, l: look.wall, r: look.wall })
        if (run.edge.low) Object.assign(wall, left.kind === 'in' ? { rl: run.edge.low } : { ll: run.edge.low })
        const index = walls.push(wall) - 1
        for (const unit of run.units) {
          const lo = along(unit.at)
          const hi = along(unit.at + 1)
          if (unit.opening) addOpening(index, unit.opening, lo, hi, start, end, unit.extra)
        }
        run = null
      }
      for (let at = 0; at < count; at++) {
        const [firstCell, secondCell] = cells(at)
        const edge = describe(face(...firstCell), face(...secondCell))
        if (!edge) {
          flush()
          continue
        }
        if (run && run.edge.key !== edge.key) flush()
        run ??= { from: at, edge, units: [] }
        run.to = at
        const unit = { at }
        const inner = edge.first.kind === 'in' ? firstCell : secondCell
        const outer = edge.first.kind === 'in' ? secondCell : firstCell
        const side = vertical ? (inner === firstCell ? 'e' : 'w') : (inner === firstCell ? 's' : 'n')
        if (edge.type === 'ext') {
          const code = plan.at(level, ...inner)
          const front = level === 0 && ((code === 'G' && doorSide(...inner) === side)
            || (entrance && entrance.x === inner[0] && entrance.z === inner[1] && entrance.side.name === side))
          if (front) {
            unit.opening = style === 'shop' || style === 'office' || code === 'M' ? 'door-auto' : 'door-entrance'
            unit.extra = { c: look.door, canopy: 1 }
          } else if (plan.at(level, ...outer) === 'V') {
            unit.opening = 'door-terrace'
            unit.extra = { c: look.frame }
          } else {
            const kind = windowChoice(style, code, side, level, inner[0], inner[1], seed)
            if (kind) {
              unit.opening = kind
              unit.extra = { c: kind === 'win-shutter' ? look.door : look.frame }
            }
          }
        } else if (edge.type === 'int') {
          const name = vertical ? `${firstCell[0]},${firstCell[1]},e` : `${firstCell[0]},${firstCell[1]},s`
          if (doors.has(name)) {
            const codes = edge.first.code + edge.second.code
            unit.opening = codes.includes('S') || [...codes].every((letter) => HALLWAYS.includes(letter)) ? 'arch'
              : codes.includes('W') ? 'door-fusuma' : /[TU]/.test(codes) ? 'door-white' : 'door-wood'
            // A stairwell opens wide, so that the way up and the way down both fit in the doorway.
            unit.extra = unit.opening !== 'arch' ? { c: style === 'japan' ? 'wood' : 'white' } : codes.includes('S') ? { wide: 1.4 } : {}
          }
        }
        run.units.push(unit)
      }
      flush()
    }
    for (let j = 0; j <= plan.depth; j++) trace(plan.width, gx, gz(j), (x) => [[x, j - 1], [x, j]], false)
    for (let i = 0; i <= plan.width; i++) trace(plan.depth, gz, gx(i), (z) => [[i - 1, z], [i, z]], true)

    const spot = (cell, fx = 0.5, fz = 0.5) => [round(gx(cell.x) + (gx(cell.x + 1) - gx(cell.x)) * fx), round(gz(cell.z) + (gz(cell.z + 1) - gz(cell.z)) * fz)]
    const seeds = []
    const items = []
    const stairs = []
    // Doorways need room to walk through: nothing solid is put down within reach of one.
    const ways = openings.filter((entry) => OPENINGS[entry.k]?.door).map((entry) => {
      const wall = walls[entry.w]
      const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]) || 1
      const ux = Math.abs(wall.b[0] - wall.a[0]) / length
      const uz = Math.abs(wall.b[1] - wall.a[1]) / length
      const x = wall.a[0] + (wall.b[0] - wall.a[0]) / length * entry.at
      const z = wall.a[1] + (wall.b[1] - wall.a[1]) / length * entry.at
      const along = entry.ww / 2 + 0.1
      const reach = 0.8
      return { x0: x - ux * along - uz * reach, x1: x + ux * along + uz * reach, z0: z - uz * along - ux * reach, z1: z + uz * along + ux * reach }
    })
    const put = (k, cell, fx, fz, r = 0) => {
      const kind = ITEMS[k]
      // If its usual place is in the way, a piece of furniture goes to the opposite wall.
      const tries = kind.solid ? [[fx, fz, r], [1 - fx, fz, (360 - r) % 360], [fx, 1 - fz, (540 - r) % 360], [1 - fx, 1 - fz, (r + 180) % 360]] : [[fx, fz, r]]
      for (const [tx, tz, turn] of tries) {
        const [x, z] = spot(cell, tx, tz)
        const [hw, hd] = turn % 180 ? [kind.d / 2, kind.w / 2] : [kind.w / 2, kind.d / 2]
        if (kind.solid && ways.some((way) => x + hw > way.x0 && x - hw < way.x1 && z + hd > way.z0 && z - hd < way.z1)) continue
        items.push({ k, x, z, r: turn, ...(set ? { set } : {}) })
        return true
      }
      return false
    }
    // A table and its chairs are one set: without the table there are no chairs either.
    let set = 0
    let sets = 0
    const together = (...pieces) => {
      const from = items.length
      set = ++sets
      if (!pieces.every((piece) => put(...piece))) items.length = from
      set = 0
    }
    for (const { code, cells } of rooms) {
      const first = cells[0]
      const last = cells.at(-1)
      const middle = cells[Math.floor(cells.length / 2)]
      const seat = { at: spot(first), f: INSIDE[code]?.[1] ?? 'floor-oak', c: 'ceil-white', n: ROOM_LABELS[code], code }
      if (code === 'V') seat.open = 1
      if (code === 'W') seat.c = 'ceil-wood'
      seeds.push(seat)
      const span = { x: Math.max(...cells.map((cell) => cell.x)) - Math.min(...cells.map((cell) => cell.x)) + 1, z: Math.max(...cells.map((cell) => cell.z)) - Math.min(...cells.map((cell) => cell.z)) + 1 }
      if (code === 'L') {
        put('sofa', first, 0.5, 0.3)
        if (cells.length > 1) {
          put('table-low', middle, 0.5, 0.5)
          put('tv', last, 0.5, 0.84, 180)
          put('ceiling-light', middle, 0.5, 0.5)
        }
        if (cells.length > 3) put('plant', last, 0.82, 0.2)
      } else if (code === 'K') {
        put('kitchen', first, 0.5, 0.25)
        if (cells.length > 1) put('fridge', last, 0.27, 0.5, 90)
      } else if (code === 'B' || code === 'P') {
        if (span.z >= 2) put('bed', first, 0.38, 0.84)
        else if (span.x >= 2) put('bed', first, 0.84, 0.4, 90)
        else put('desk', first, 0.5, 0.25)
        if (cells.length > 2) put('desk', last, 0.5, 0.78, 180)
      } else if (code === 'W') {
        if (span.x >= 2 || cells.length === 1) together(['chabudai', middle, 0.5, 0.5], ['zabuton', middle, 0.5, 0.13], ['zabuton', middle, 0.5, 0.87])
        else put('chabudai', middle, 0.5, 0.5)
      } else if (code === 'T') put('toilet', first, 0.5, 0.36)
      else if (code === 'U') put('bathtub', first, 0.34, 0.5)
      else if (code === 'G') put('shoe-box', first, 0.17, 0.5, 90)
      else if (code === 'O') {
        for (const [index, cell] of cells.entries()) {
          if (index % 2) continue
          together(['office-desk', cell, 0.5, 0.4], ['office-chair', cell, 0.5, 0.8, 180])
        }
      } else if (code === 'M') {
        if (house.kind === 'shop') {
          for (const [index, cell] of cells.entries()) if (cell.z === first.z && index % 2 === 0) put('rack', cell, 0.5, 0.3)
          put('counter', last, 0.4, 0.3)
          put('mirror', cells.find((cell) => cell.x === first.x) ?? first, 0.1, 0.5, 90)
        } else {
          for (const [index, cell] of cells.entries()) {
            if ((cell.x + cell.z) % 2 || index === 0) continue
            together(['cafe-table', cell, 0.5, 0.5], ['stool', cell, 0.12, 0.5], ['stool', cell, 0.88, 0.5])
          }
          put('counter', first, 0.5, 0.25)
        }
      } else if (code === 'E') put('boxes', first, 0.34, 0.34)
    }
    for (const { cells, side } of stairSpots(plan)[level] ?? []) {
      const xs = cells.map((cell) => cell.x)
      const zs = cells.map((cell) => cell.z)
      const box = { x0: gx(Math.min(...xs)) + 0.09, x1: gx(Math.max(...xs) + 1) - 0.09, z0: gz(Math.min(...zs)) + 0.09, z1: gz(Math.max(...zs) + 1) - 0.09 }
      const across = side === 's' || side === 'n'
      const w = across ? box.x1 - box.x0 : box.z1 - box.z0
      const l = across ? box.z1 - box.z0 : box.x1 - box.x0
      stairs.push({
        x: round((box.x0 + box.x1) / 2), z: round((box.z0 + box.z1) / 2), r: { s: 0, e: 90, n: 180, w: 270 }[side],
        k: w >= 1.2 ? 'u' : 'straight', w: round(w), l: round(l),
      })
    }
    storeys.push({ h: info.storey, walls, openings, rooms: seeds, items, stairs })
  }

  const draft = { v: 1, base: info.base, storeys, roof: look.roof }
  for (let level = 0; level < storeys.length; level++) clearTheWay(draft, level, [lotWidth, lotDepth])
  // Storeys that repeat the one below only say so: a tower is mostly the same plan again and again.
  const seen = []
  const compact = storeys.map((storey) => {
    const body = JSON.stringify([storey.walls, storey.openings, storey.rooms, storey.items, storey.stairs])
    const like = seen.indexOf(body)
    seen.push(body)
    return like >= 0 ? { h: storey.h, like } : storey
  })
  return { ...draft, storeys: compact }
}

// Furniture must not wall anybody in. Every doorway and every flight of stairs that can be
// walked to in the empty storey stays within reach of the way in; a piece of furniture (or a
// set of them) that would cut one off is left out.
const cleared = new Map()
function clearTheWay(design, level, size) {
  const storey = design.storeys[level]
  const solid = (entry) => Boolean(ITEMS[entry.k]?.solid)
  const finish = (items) => {
    storey.items = items.map(({ set, ...entry }) => entry)
  }
  if (!storey.items.some(solid)) return finish(storey.items)
  // Storeys of a tower mostly repeat: the same storey is only worked out once.
  const below = design.storeys[level - 1]?.stairs ?? []
  const name = JSON.stringify([size, design.base, storey.h, storey.walls, storey.openings, storey.stairs, storey.items, below, level === 0])
  if (cleared.has(name)) return finish(cleared.get(name))
  const bare = { ...design, storeys: design.storeys.map((entry, index) => (index === level ? { ...entry, items: [] } : entry)) }
  const solids = colliders(bare, level, { locked: false })

  // A lattice of spots, each either free for a resident to stand on or not.
  const step = 0.06
  const cols = Math.ceil((size[0] + 2) / step) + 1
  const rows = Math.ceil((size[1] + 2) / step) + 1
  const index = (x, z) => [Math.round((x + 1) / step), Math.round((z + 1) / step)]
  const walls = new Uint8Array(cols * rows)
  const stamp = (grid, x0, z0, x1, z1, hit) => {
    const [i0, j0] = index(x0, z0)
    const [i1, j1] = index(x1, z1)
    for (let j = Math.max(0, j0); j <= Math.min(rows - 1, j1); j++) {
      for (let i = Math.max(0, i0); i <= Math.min(cols - 1, i1); i++) {
        if (!grid[j * cols + i] && hit(i * step - 1, j * step - 1)) grid[j * cols + i] = 1
      }
    }
  }
  for (const wall of solids.segments) {
    const reach = BODY + wall.r
    const ex = wall.bx - wall.ax
    const ez = wall.bz - wall.az
    const length = ex * ex + ez * ez || 1e-9
    stamp(walls, Math.min(wall.ax, wall.bx) - reach, Math.min(wall.az, wall.bz) - reach, Math.max(wall.ax, wall.bx) + reach, Math.max(wall.az, wall.bz) + reach, (x, z) => {
      const t = Math.min(1, Math.max(0, ((x - wall.ax) * ex + (z - wall.az) * ez) / length))
      return Math.hypot(x - wall.ax - ex * t, z - wall.az - ez * t) < reach - 1e-6
    })
  }
  const stampBox = (grid, box) => {
    const turn = box.r * Math.PI / 180
    const cos = Math.cos(turn)
    const sin = Math.sin(turn)
    const reach = Math.hypot(box.w, box.d) / 2 + BODY
    stamp(grid, box.x - reach, box.z - reach, box.x + reach, box.z + reach, (x, z) => {
      const lx = (x - box.x) * cos - (z - box.z) * sin
      const lz = (x - box.x) * sin + (z - box.z) * cos
      return Math.hypot(Math.max(0, Math.abs(lx) - box.w / 2), Math.max(0, Math.abs(lz) - box.d / 2)) < BODY - 1e-6
    })
  }
  for (const box of solids.boxes) stampBox(walls, box)

  // Where people come in, and everything they must be able to get to.
  const starts = level === 0 ? frontDoors(bare).map((door) => door.outside)
    : colliders(bare, level - 1, { locked: false }).stairs.filter((stair) => stair.up)
      .map(({ head }) => [head.at[0] + head.out[0] * (BODY + 0.16), head.at[1] + head.out[1] * (BODY + 0.16)])
  const goals = solids.stairs.map(({ gate }) => [gate.at[0] + gate.out[0] * (BODY + 0.08), gate.at[1] + gate.out[1] * (BODY + 0.08)])
  for (const entry of storey.openings) {
    if (!OPENINGS[entry.k]?.door) continue
    const wall = storey.walls[entry.w]
    const length = Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1]) || 1
    const ux = (wall.b[0] - wall.a[0]) / length
    const uz = (wall.b[1] - wall.a[1]) / length
    const x = wall.a[0] + ux * entry.at
    const z = wall.a[1] + uz * entry.at
    goals.push([x + uz * 0.55, z - ux * 0.55], [x - uz * 0.55, z + ux * 0.55])
  }
  const walked = (grid) => {
    const seen = new Uint8Array(cols * rows)
    const pending = []
    const visit = (i, j) => {
      if (i < 0 || j < 0 || i >= cols || j >= rows || seen[j * cols + i] || grid[j * cols + i]) return
      seen[j * cols + i] = 1
      pending.push(i, j)
    }
    for (const [x, z] of starts) {
      const [i, j] = index(x, z)
      for (let dj = -2; dj <= 2; dj++) for (let di = -2; di <= 2; di++) visit(i + di, j + dj)
    }
    while (pending.length) {
      const j = pending.pop()
      const i = pending.pop()
      visit(i + 1, j)
      visit(i - 1, j)
      visit(i, j + 1)
      visit(i, j - 1)
    }
    return ([x, z]) => {
      const [i, j] = index(x, z)
      for (let dj = -1; dj <= 1; dj++) {
        for (let di = -1; di <= 1; di++) {
          if (i + di >= 0 && j + dj >= 0 && i + di < cols && j + dj < rows && seen[(j + dj) * cols + i + di]) return true
        }
      }
      return false
    }
  }
  const wanted = goals.filter(walked(walls))
  const boxOf = (entry) => ({ x: entry.x, z: entry.z, w: ITEMS[entry.k].w, d: ITEMS[entry.k].d, r: entry.r ?? 0 })
  const furnished = (items) => {
    const grid = walls.slice()
    for (const entry of items) if (solid(entry)) stampBox(grid, boxOf(entry))
    return grid
  }
  let kept = storey.items
  if (!wanted.every(walked(furnished(kept)))) {
    // Something is in the way: put the furniture back one set at a time, without whatever blocks.
    kept = []
    for (let at = 0; at < storey.items.length;) {
      let end = at + 1
      while (storey.items[at].set && storey.items[end]?.set === storey.items[at].set) end++
      const pieces = storey.items.slice(at, end)
      at = end
      if (!pieces.some(solid) || wanted.every(walked(furnished([...kept, ...pieces])))) kept.push(...pieces)
    }
  }
  if (cleared.size > 400) cleared.clear()
  cleared.set(name, kept)
  finish(kept)
}

const compiled = new WeakMap()

// The design of a building: the one its owner drew, or the one its easy plan stands for.
export function designOf(house) {
  if (house.design) return house.design
  if (!compiled.has(house)) compiled.set(house, compileDesign(house))
  return compiled.get(house)
}

// A storey with its walls, even when it only says it repeats another one.
export function storeyOf(design, level) {
  const storey = design.storeys[level]
  if (!storey) return null
  const source = Number.isInteger(storey.like) && design.storeys[storey.like] && !Number.isInteger(design.storeys[storey.like].like)
    ? design.storeys[storey.like] : storey
  return {
    h: storey.h ?? source.h ?? 2.7, walls: source.walls ?? [], openings: source.openings ?? [], rooms: source.rooms ?? [],
    items: source.items ?? [], stairs: source.stairs ?? [], decor: source.decor ?? [], like: source === storey ? undefined : storey.like,
  }
}

// How high the floor of a storey is above the street.
export function floorHeight(design, level) {
  let height = design.base ?? 0.18
  for (let index = 0; index < level; index++) height += design.storeys[index]?.h ?? design.storeys[design.storeys[index]?.like]?.h ?? 2.7
  return height
}

export const heightOf = (design) => floorHeight(design, design.storeys.length)

// ---- Geometry of walls --------------------------------------------------------

const lengthOf = (wall) => Math.hypot(wall.b[0] - wall.a[0], wall.b[1] - wall.a[1])

// Splits walls where they meet or cross, giving the corners (nodes) and the stretches between them.
export function wallGraph(walls) {
  const lines = walls.map((wall) => {
    const length = lengthOf(wall)
    return { length, d: length > 1e-6 ? [(wall.b[0] - wall.a[0]) / length, (wall.b[1] - wall.a[1]) / length] : [1, 0], cuts: [0, length] }
  })
  for (let i = 0; i < walls.length; i++) {
    const first = lines[i]
    if (first.length < 0.01) continue
    for (let j = 0; j < walls.length; j++) {
      const second = lines[j]
      if (i === j || second.length < 0.01) continue
      for (const point of [walls[j].a, walls[j].b]) {
        const px = point[0] - walls[i].a[0]
        const pz = point[1] - walls[i].a[1]
        const along = px * first.d[0] + pz * first.d[1]
        if (Math.abs(pz * first.d[0] - px * first.d[1]) <= SNAP && along > SNAP && along < first.length - SNAP) first.cuts.push(along)
      }
      if (j < i) continue
      const cross = first.d[0] * second.d[1] - first.d[1] * second.d[0]
      if (Math.abs(cross) < 1e-6) continue
      const wx = walls[j].a[0] - walls[i].a[0]
      const wz = walls[j].a[1] - walls[i].a[1]
      const s = (wx * second.d[1] - wz * second.d[0]) / cross
      const u = (wx * first.d[1] - wz * first.d[0]) / cross
      if (s > SNAP && s < first.length - SNAP && u > SNAP && u < second.length - SNAP) {
        first.cuts.push(s)
        second.cuts.push(u)
      }
    }
  }

  const nodes = []
  const buckets = new Map()
  const size = SNAP * 2
  const nodeAt = (x, z) => {
    const cx = Math.floor(x / size)
    const cz = Math.floor(z / size)
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        for (const index of buckets.get(`${cx + dx},${cz + dz}`) ?? []) {
          if (Math.hypot(nodes[index].x - x, nodes[index].z - z) <= SNAP) return index
        }
      }
    }
    const index = nodes.push({ x, z }) - 1
    const name = `${cx},${cz}`
    if (!buckets.has(name)) buckets.set(name, [])
    buckets.get(name).push(index)
    return index
  }
  const pieces = []
  walls.forEach((wall, index) => {
    const line = lines[index]
    if (line.length < 0.01) return
    const cuts = [...new Set(line.cuts.map((cut) => Math.round(cut * 1000) / 1000))].sort((a, b) => a - b)
    let from = cuts[0]
    let a = nodeAt(wall.a[0] + line.d[0] * from, wall.a[1] + line.d[1] * from)
    for (const to of cuts.slice(1)) {
      if (to - from < 0.01) continue
      const b = nodeAt(wall.a[0] + line.d[0] * to, wall.a[1] + line.d[1] * to)
      if (a !== b) pieces.push({ wall: index, from, to, a, b })
      from = to
      a = b
    }
  })
  return { nodes, pieces }
}

// The outline of every stretch of wall seen from above, with clean corners where walls meet.
// `l` and `r` are the two faces: for a wall running from a to b, the left face has the normal
// (dz, -dx) and the right face (-dz, dx). `caps` are the small faces that close a free end.
export function wallOutlines(walls, graph = wallGraph(walls)) {
  const { nodes, pieces } = graph
  const around = nodes.map(() => [])
  pieces.forEach((piece, index) => {
    const from = nodes[piece.a]
    const to = nodes[piece.b]
    const dx = to.x - from.x
    const dz = to.z - from.z
    const length = Math.hypot(dx, dz) || 1
    const half = (walls[piece.wall].t ?? 0.12) / 2
    piece.d = [dx / length, dz / length]
    around[piece.a].push({ piece: index, end: 'a', d: piece.d, half, angle: Math.atan2(dz, dx) })
    around[piece.b].push({ piece: index, end: 'b', d: [-piece.d[0], -piece.d[1]], half, angle: Math.atan2(-dz, -dx) })
  })
  const corners = pieces.map(() => ({ a: {}, b: {} }))
  const caps = []
  nodes.forEach((node, at) => {
    const list = around[at].sort((p, q) => p.angle - q.angle)
    // The side of an outgoing wall that lies anticlockwise of it (+1) or clockwise of it (-1).
    const beside = (edge, sign) => [node.x - sign * edge.d[1] * edge.half, node.z + sign * edge.d[0] * edge.half]
    if (list.length === 1) {
      const [edge] = list
      const cw = beside(edge, -1)
      const ccw = beside(edge, 1)
      corners[edge.piece][edge.end] = { cw, ccw }
      caps.push({ from: ccw, to: cw, piece: edge.piece, normal: [-edge.d[0], -edge.d[1]] })
      return
    }
    list.forEach((edge, index) => {
      const next = list[(index + 1) % list.length]
      const p = beside(edge, 1)
      const q = beside(next, -1)
      const cross = edge.d[0] * next.d[1] - edge.d[1] * next.d[0]
      let point = null
      if (Math.abs(cross) > 1e-3) {
        const s = ((q[0] - p[0]) * next.d[1] - (q[1] - p[1]) * next.d[0]) / cross
        const candidate = [p[0] + edge.d[0] * s, p[1] + edge.d[1] * s]
        // Walls that meet at a very sharp angle get a blunt corner instead of a long spike.
        if (Math.hypot(candidate[0] - node.x, candidate[1] - node.z) <= 4 * Math.max(edge.half, next.half) + 0.02) point = candidate
      }
      corners[edge.piece][edge.end].ccw = point ?? p
      corners[next.piece][next.end].cw = point ?? q
      if (!point && Math.hypot(p[0] - q[0], p[1] - q[1]) > 1e-4) {
        const mx = (p[0] + q[0]) / 2 - node.x
        const mz = (p[1] + q[1]) / 2 - node.z
        const reach = Math.hypot(mx, mz) || 1
        caps.push({ from: p, to: q, piece: edge.half >= next.half ? edge.piece : next.piece, normal: [mx / reach, mz / reach] })
      }
    })
  })
  return {
    nodes,
    pieces: pieces.map((piece, index) => {
      const { a, b } = corners[index]
      const wall = walls[piece.wall]
      const along = (point) => (point[0] - wall.a[0]) * piece.d[0] + (point[1] - wall.a[1]) * piece.d[1]
      const start = [nodes[piece.a].x, nodes[piece.a].z]
      const end = [nodes[piece.b].x, nodes[piece.b].z]
      return {
        wall: piece.wall, from: piece.from, to: piece.to, a: piece.a, b: piece.b, d: piece.d,
        // Each face as [point at the a end, point at the b end], with where they fall along the wall.
        l: [a.cw, b.ccw], r: [a.ccw, b.cw],
        span: { l: [along(a.cw), along(b.ccw)], r: [along(a.ccw), along(b.cw)] },
        poly: [a.cw, start, a.ccw, b.cw, end, b.ccw],
      }
    }),
    caps,
  }
}

export function areaOf(points) {
  let sum = 0
  for (let index = 0; index < points.length; index++) {
    const [x0, z0] = points[index]
    const [x1, z1] = points[(index + 1) % points.length]
    sum += x0 * z1 - x1 * z0
  }
  return sum / 2
}

export function pointIn(points, x, z) {
  let inside = false
  for (let index = 0, last = points.length - 1; index < points.length; last = index++) {
    const [x0, z0] = points[index]
    const [x1, z1] = points[last]
    if ((z0 > z) !== (z1 > z) && x < (x1 - x0) * (z - z0) / (z1 - z0) + x0) inside = !inside
  }
  return inside
}

// The rooms that walls close off: the outline of each, its floor area and a point inside it.
export function findRooms(walls, graph = wallGraph(walls)) {
  const { nodes, pieces } = graph
  const out = nodes.map(() => [])
  pieces.forEach((piece, index) => {
    const from = nodes[piece.a]
    const to = nodes[piece.b]
    out[piece.a].push({ half: index * 2, angle: Math.atan2(to.z - from.z, to.x - from.x) })
    out[piece.b].push({ half: index * 2 + 1, angle: Math.atan2(from.z - to.z, from.x - to.x) })
  })
  // Arriving at a corner, a walk round a room leaves by the next wall clockwise.
  const next = new Map()
  for (const list of out) {
    list.sort((p, q) => p.angle - q.angle)
    list.forEach((edge, index) => next.set(edge.half ^ 1, list[(index - 1 + list.length) % list.length].half))
  }
  // Which walls hang together: a core of rooms standing free inside a hall is a group of its own.
  const group = nodes.map((_, index) => index)
  const find = (index) => (group[index] === index ? index : (group[index] = find(group[index])))
  for (const piece of pieces) group[find(piece.a)] = find(piece.b)
  const seen = new Set()
  const rooms = []
  const islands = []
  for (let start = 0; start < pieces.length * 2; start++) {
    if (seen.has(start)) continue
    const loop = []
    for (let at = start; !seen.has(at) && at !== undefined; at = next.get(at)) {
      seen.add(at)
      loop.push(at)
    }
    const points = loop.map((half) => {
      const piece = pieces[half >> 1]
      const node = nodes[half & 1 ? piece.b : piece.a]
      return [node.x, node.z]
    })
    const area = areaOf(points)
    const part = find(pieces[loop[0] >> 1].a)
    if (area >= 0.2) rooms.push({ points, area, holes: [], part, walls: [...new Set(loop.map((half) => pieces[half >> 1].wall))] })
    // Walked round from outside, a group of walls is the outline of everything it holds.
    else if (area <= -0.2) islands.push({ points: points.reverse(), area: -area, part })
  }
  for (const island of islands) {
    const [x, z] = island.points[0]
    const holder = rooms.filter((room) => room.part !== island.part && pointIn(room.points, x, z)).sort((a, b) => a.area - b.area)[0]
    if (!holder) continue
    holder.holes.push(island.points)
    holder.area -= island.area
  }
  for (const room of rooms) room.at = insidePoint(room.points, room.holes)
  return rooms
}

// Whether a point is on the floor of a room, and not in something that stands inside it.
export function inRoom(room, x, z) {
  return pointIn(room.points, x, z) && !room.holes?.some((hole) => pointIn(hole, x, z))
}

// A point that is surely inside an outline: the middle of it when that works, else just off an edge.
function insidePoint(points, holes = []) {
  const clear = (x, z) => pointIn(points, x, z) && !holes.some((hole) => pointIn(hole, x, z))
  const cx = points.reduce((sum, point) => sum + point[0], 0) / points.length
  const cz = points.reduce((sum, point) => sum + point[1], 0) / points.length
  if (clear(cx, cz)) return [cx, cz]
  for (let index = 0; index < points.length; index++) {
    const [x0, z0] = points[index]
    const [x1, z1] = points[(index + 1) % points.length]
    const length = Math.hypot(x1 - x0, z1 - z0)
    if (length < 0.3) continue
    for (const sign of [1, -1]) {
      const x = (x0 + x1) / 2 - sign * (z1 - z0) / length * 0.15
      const z = (z0 + z1) / 2 + sign * (x1 - x0) / length * 0.15
      if (clear(x, z)) return [x, z]
    }
  }
  return [cx, cz]
}

const resolved = new WeakMap()

// Everything the 3D view and the collisions need to know about one storey, worked out once.
export function storeyShape(design, level) {
  let levels = resolved.get(design)
  if (!levels) resolved.set(design, levels = new Map())
  if (levels.has(level)) return levels.get(level)
  const storey = storeyOf(design, level)
  if (!storey) return null
  const graph = wallGraph(storey.walls)
  const outlines = wallOutlines(storey.walls, graph)
  const rooms = findRooms(storey.walls, graph).map((room) => {
    const seed = storey.rooms.find((entry) => inRoom(room, entry.at[0], entry.at[1]))
    return { ...room, f: seed?.f ?? 'floor-oak', c: seed?.c ?? 'ceil-white', n: seed?.n ?? '', code: seed?.code, open: Boolean(seed?.open) }
  })
  // Inside means: within a room that has a roof over it. Balconies and terraces are outdoors.
  const indoors = (x, z) => rooms.some((room) => !room.open && inRoom(room, x, z))
  const floored = (x, z) => rooms.some((room) => inRoom(room, x, z))
  const sides = storey.walls.map((wall) => {
    const length = lengthOf(wall) || 1
    const d = [(wall.b[0] - wall.a[0]) / length, (wall.b[1] - wall.a[1]) / length]
    const reach = (wall.t ?? 0.12) / 2 + 0.07
    const middle = [(wall.a[0] + wall.b[0]) / 2, (wall.a[1] + wall.b[1]) / 2]
    return { length, d, l: indoors(middle[0] + d[1] * reach, middle[1] - d[0] * reach), r: indoors(middle[0] - d[1] * reach, middle[1] + d[0] * reach) }
  })
  const shape = { storey, graph, outlines, rooms, sides, indoors, floored, base: floorHeight(design, level) }
  levels.set(level, shape)
  return shape
}

// The corners of a rectangle of width `w` and depth `d` centred on (x, z) and turned by `r` degrees.
export function boxCorners(x, z, w, d, r = 0) {
  const turn = r * Math.PI / 180
  const cos = Math.cos(turn)
  const sin = Math.sin(turn)
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([sx, sz]) => [
    x + sx * w / 2 * cos + sz * d / 2 * sin, z - sx * w / 2 * sin + sz * d / 2 * cos,
  ])
}

// The way up a flight of stairs: points [x, z, height above the lower floor].
// The stairs are entered at the front (their local +z side); a折り返し flight comes back to it.
export function stairPath(stair, rise) {
  const turn = stair.r * Math.PI / 180
  const cos = Math.cos(turn)
  const sin = Math.sin(turn)
  const place = (x, z, y) => [stair.x + x * cos + z * sin, stair.z - x * sin + z * cos, y]
  const { w, l } = stair
  if (stair.k !== 'u') return [place(0, l / 2, 0), place(0, -l / 2, rise)]
  const side = w / 4
  const landing = Math.min(w / 2, l * 0.42)
  const back = -l / 2 + landing / 2
  return [
    place(-side, l / 2, 0), place(-side, -l / 2 + landing, rise / 2), place(-side, back, rise / 2),
    place(side, back, rise / 2), place(side, -l / 2 + landing, rise / 2), place(side, l / 2, rise),
  ]
}

// Where the foot and the head of a flight are, and which way a walker leaves them.
export function stairEnds(stair, rise) {
  const path = stairPath(stair, rise)
  const turn = stair.r * Math.PI / 180
  const front = [Math.sin(turn), Math.cos(turn)]
  const u = stair.k === 'u'
  return {
    path,
    foot: { at: path[0], out: front, half: u ? stair.w / 4 : stair.w / 2 },
    head: { at: path.at(-1), out: u ? front : [-front[0], -front[1]], half: u ? stair.w / 4 : stair.w / 2 },
  }
}

const isDoor = (entry) => Boolean(OPENINGS[entry.k]?.door)

// What stops a walker on one storey: stretches of wall (doorways left open), furniture and the
// wells of stairs; and `rooms`, whose floors a walker upstairs has to stay on.
// A locked building keeps the doors in its outside walls shut.
export function colliders(design, level, { locked = false } = {}) {
  const shape = storeyShape(design, level)
  if (!shape) return { segments: [], boxes: [], stairs: [], rooms: [] }
  const { storey, sides, rooms } = shape
  const segments = []
  storey.walls.forEach((wall, index) => {
    const { length, d } = sides[index]
    const reach = (wall.t ?? 0.12) / 2 + 0.07
    // A door leads outside when the ground on one side of it is not a room.
    const outside = (entry) => {
      const x = wall.a[0] + d[0] * entry.at
      const z = wall.a[1] + d[1] * entry.at
      return !(shape.indoors(x + d[1] * reach, z - d[0] * reach) && shape.indoors(x - d[1] * reach, z + d[0] * reach))
    }
    const gaps = storey.openings.filter((entry) => entry.w === index && isDoor(entry) && !(locked && !wall.rail && outside(entry)))
      .map((entry) => [entry.at - entry.ww / 2, entry.at + entry.ww / 2]).sort((p, q) => p[0] - q[0])
    let from = 0
    const add = (to) => {
      if (to - from > 0.02) {
        segments.push({
          ax: wall.a[0] + d[0] * from, az: wall.a[1] + d[1] * from, bx: wall.a[0] + d[0] * to, bz: wall.a[1] + d[1] * to,
          r: (wall.t ?? 0.12) / 2,
        })
      }
    }
    for (const [start, end] of gaps) {
      add(start)
      from = Math.max(from, end)
    }
    add(length)
  })
  const boxes = storey.items.filter((entry) => ITEMS[entry.k]?.solid)
    .map((entry) => ({ x: entry.x, z: entry.z, w: ITEMS[entry.k].w, d: ITEMS[entry.k].d, r: entry.r ?? 0 }))
  const stairs = []
  // Stairs that start here go up; the well of the stairs from below is a hole to walk round.
  for (const [from, up] of [[level, true], [level - 1, false]]) {
    const lower = storeyOf(design, from)
    if (!lower || from + 1 >= design.storeys.length) continue
    for (const stair of lower.stairs) {
      const ends = stairEnds(stair, lower.h)
      boxes.push({ x: stair.x, z: stair.z, w: stair.w, d: stair.l, r: stair.r })
      stairs.push({ ...ends, up, from, rise: lower.h, gate: up ? ends.foot : ends.head })
    }
  }
  return { segments, boxes, stairs, rooms }
}

// The smallest box round everything a design has built, in lot metres.
export function boundsOf(design) {
  const box = { x0: Infinity, z0: Infinity, x1: -Infinity, z1: -Infinity }
  for (let level = 0; level < design.storeys.length; level++) {
    for (const wall of storeyOf(design, level).walls) {
      for (const [x, z] of [wall.a, wall.b]) {
        box.x0 = Math.min(box.x0, x)
        box.x1 = Math.max(box.x1, x)
        box.z0 = Math.min(box.z0, z)
        box.z1 = Math.max(box.z1, z)
      }
    }
  }
  return Number.isFinite(box.x0) ? box : { x0: 0, z0: 0, x1: 0, z1: 0 }
}

// The doors in outside walls of the ground floor, with the spot just outside each: where a
// visitor arrives, and where a path to the street starts.
export function frontDoors(design) {
  const shape = storeyShape(design, 0)
  if (!shape) return []
  return shape.storey.openings.filter((entry) => isDoor(entry) && !shape.storey.walls[entry.w]?.rail).map((entry) => {
    const wall = shape.storey.walls[entry.w]
    const side = shape.sides[entry.w]
    if (side.l === side.r) return null
    const sign = side.l ? -1 : 1
    const normal = [sign * side.d[1], -sign * side.d[0]]
    const x = wall.a[0] + side.d[0] * entry.at
    const z = wall.a[1] + side.d[1] * entry.at
    const outside = [x + normal[0] * 0.9, z + normal[1] * 0.9]
    // A door that opens onto a balcony or a terrace leads nowhere a visitor could come from.
    return shape.floored(...outside) ? null : { x, z, normal, width: entry.ww, kind: entry.k, outside, opening: entry }
  }).filter(Boolean)
}
