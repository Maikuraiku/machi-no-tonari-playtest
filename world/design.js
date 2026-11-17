// A building as a set of walls: every storey is a list of walls of any length and direction,
// with openings (doors and windows) cut into them, finishes on both faces, rooms, furniture and
// stairs. Everything here is plain geometry in metres, measured from the north-west corner of
// the lot, so that the 3D view, the collisions, the design tools and the tests share one model.
import { STAIR_LOOKS, stairLayout } from './stairs.js?v=online-1794946480502'

export { STAIR_LOOKS, stairLayout }

export const TILE = 8 // metres along one town tile
// Easy plans are drawn on the grid Japanese houses are built on: half a 間, 910 mm. Eight
// cells fit across a tile, with a strip left over along each boundary of the lot.
export const CELLS = 8
export const CELL = 0.91
// Walls are cut at this height when a room is looked into from above.
// How much room a resident needs to either side, in metres.
export const BODY = 0.24
export const CUT = 1.2
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
  L: 'リビング', D: 'ダイニング', K: 'キッチン', B: '洋室', P: '個室', W: '和室', R: '押入れ・収納', N: '洗面室', U: '浴室', T: 'トイレ',
  G: '玄関', H: '廊下', S: '階段', Y: '縁側', V: 'ベランダ', E: '納戸', M: '店舗', O: '事務室',
  C: '共用廊下', A: 'エントランス', X: 'エレベーター', J: '駐車場',
}
export const ROOM_COLORS = {
  L: '#f0d9a8', D: '#efcf9c', K: '#f3c9a0', B: '#c9d6ee', P: '#e3c6dc', W: '#cfdc9e', R: '#d8cdb8', N: '#cfe3e0', U: '#b9dce6', T: '#d5e6ea',
  G: '#d9cfc0', H: '#e7e2d6', S: '#cfc6dd', Y: '#dcc9a2', V: '#dfe7df', E: '#c9c6bf', M: '#ead7d2', O: '#c6d3cf',
  C: '#d3d6d2', A: '#e6dccb', X: '#b8bfd0', J: '#c2c4c0',
}

// The measures of each kind of building, in metres, after the real thing.
// storey: floor to floor. ceiling: clear height of a room. base: ground floor above the street.
// doma: how far the earth floor of the entrance (玄関の土間) lies below the ground floor.
// wall / inner: thickness of outside walls and of partitions. stair: how stairs are built.
export const STYLES = {
  // 木造2階建て: 1階床は地面から55cm、階高2.85m、天井高2.4m。
  modern: { storey: 2.85, ceiling: 2.4, base: 0.55, doma: 0.2, wall: 0.17, inner: 0.125, stair: 'wood', roof: { k: 'gable', f: 'roof-slate', pitch: 22, eave: 0.6 } },
  europe: { storey: 2.9, ceiling: 2.5, base: 0.5, doma: 0.15, wall: 0.2, inner: 0.125, stair: 'wood', roof: { k: 'gable', f: 'roof-tile-orange', pitch: 40, eave: 0.45 } },
  japan: { storey: 2.85, ceiling: 2.4, base: 0.6, doma: 0.3, wall: 0.17, inner: 0.12, stair: 'wood', roof: { k: 'hip', f: 'roof-kawara', pitch: 26, eave: 0.9 } },
  // 階段室型の団地: 階高2.6m、1階床は半階ぶん持ち上げ、階段室の踊り場の下から入る。
  danchi: { storey: 2.6, ceiling: 2.3, base: 0.9, doma: 0.06, wall: 0.18, inner: 0.1, stair: 'rc', roof: { k: 'flat', f: 'roof-concrete', parapet: 0.3 } },
  mansion: { storey: 2.9, ceiling: 2.45, base: 0.3, doma: 0.05, wall: 0.18, inner: 0.1, stair: 'rc', roof: { k: 'flat', f: 'roof-concrete', parapet: 0.9 } },
  office: { storey: 3.8, ceiling: 2.7, base: 0.15, doma: 0, wall: 0.2, inner: 0.1, stair: 'rc', roof: { k: 'flat', f: 'roof-concrete', parapet: 0.9 } },
  brutal: { storey: 3.3, ceiling: 2.6, base: 0.3, doma: 0, wall: 0.3, inner: 0.15, stair: 'rc', roof: { k: 'flat', f: 'roof-concrete', parapet: 1.1 } },
  shop: { storey: 3.2, ceiling: 2.7, base: 0.12, doma: 0, wall: 0.18, inner: 0.1, stair: 'wood', roof: { k: 'flat', f: 'roof-concrete', parapet: 0.6 } },
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
  // 玄関ドアは外開き、幅92cm・高さ2.33m。室内ドアは高さ2m。
  'door-entrance': opening('玄関ドア', true, 0.92, 2.33, 0),
  'door-oyako': opening('親子ドア', true, 1.24, 2.33, 0),
  'door-flat': opening('集合住宅の玄関ドア（鋼製）', true, 0.85, 2.0, 0),
  'door-wood': opening('木のドア', true, 0.78, 2.0, 0),
  'door-white': opening('白いドア', true, 0.75, 2.0, 0),
  'door-glass': opening('ガラスドア', true, 0.8, 2.0, 0, { glass: true }),
  'door-steel': opening('スチールドア', true, 0.78, 2.0, 0),
  'door-fold': opening('浴室の折れ戸', true, 0.72, 2.0, 0.05),
  // A door with a lock of its own, for a room that is kept private.
  'door-key': opening('鍵付きのドア', true, 0.78, 2.0, 0, { lock: true }),
  'door-slide': opening('引き戸', true, 0.8, 2.0, 0, { slide: true }),
  'door-fusuma': opening('ふすま', true, 1.69, 1.8, 0, { slide: true }),
  'door-shoji': opening('障子', true, 1.69, 1.8, 0, { slide: true }),
  'door-closet': opening('クローゼットの折れ戸', true, 1.6, 2.0, 0),
  'door-double': opening('両開きドア', true, 1.5, 2.1, 0),
  'door-auto': opening('自動ドア', true, 1.6, 2.3, 0, { slide: true, glass: true }),
  // 掃き出し窓（引き違い16520）: 幅1.65m・高さ2m。
  'door-terrace': opening('掃き出し窓（出入りできる）', true, 1.65, 2.0, 0.03, { slide: true, glass: true }),
  'lift-door': opening('エレベーターの扉', true, 0.8, 2.1, 0, { slide: true, lift: true }),
  // ホームドア: the doors along the edge of a platform, which open only for a train that has stopped.
  'door-platform': opening('ホームドア', true, 1.4, 2.1, 0, { slide: true, glass: true, platform: true }),
  arch: opening('開口（ドアなし）', true, 1.2, 2.0, 0, { open: true }),
  // 腰窓（引き違い16511）: 幅1.65m・高さ1.1m、窓の上端は床から2m。
  'win-slide': opening('引き違い窓', false, 1.65, 1.1, 0.9),
  'win-wide': opening('横長の窓', false, 1.65, 0.9, 1.1),
  'win-full': opening('床までの窓', false, 1.65, 1.97, 0.03),
  'win-small': opening('小窓', false, 0.6, 0.5, 1.5),
  'win-high': opening('高窓', false, 0.74, 0.5, 1.5),
  'win-tall': opening('縦すべり出し窓', false, 0.4, 1.1, 0.9),
  'win-slit': opening('スリット窓', false, 0.34, 1.5, 0.5),
  'win-fixed': opening('はめ殺し窓', false, 1.0, 1.0, 1.0),
  'win-lattice': opening('面格子つきの窓', false, 1.19, 0.9, 1.1),
  'win-shutter': opening('よろい戸つきの窓', false, 1.0, 1.2, 0.8),
  'win-steel': opening('スチールサッシ', false, 1.69, 1.2, 0.8),
  'win-round': opening('丸窓', false, 0.8, 0.8, 1.1, { round: true }),
  'win-shop': opening('ショーウィンドウ', false, 1.6, 2.2, 0.2),
  'win-curtain': opening('カーテンウォール', false, 1.7, 2.6, 0.75),
  'win-ribbon': opening('横連窓', false, 1.7, 1.5, 0.9),
  'win-hood': opening('ひさし付きスリット窓', false, 0.5, 1.5, 0.6),
  'win-block': opening('ガラスブロック', false, 0.8, 1.6, 0.4),
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
  wardrobe: item('洋服だんす', 'bedroom', 1.0, 0.55, 1.9),
  tansu: item('たんす', 'japanese', 0.9, 0.45, 1.3),
  cupboard: item('食器棚', 'dining', 0.9, 0.45, 1.85),
  'mail-boxes': item('集合郵便受け', 'entrance', 1.2, 0.3, 1.3),
  car: item('自動車', 'garden', 1.48, 3.4, 1.55),
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
  // An outdoor unit of 3.6-4 kW: 800 x 550 x 290 mm, with its valve cover and grille, on a stand.
  'ac-unit': item('室外機', 'garden', 0.86, 0.34, 0.65),
  // 機能門柱: the post by a gate with the nameplate, the intercom, the letterbox and a light.
  'gate-post': item('機能門柱', 'garden', 0.3, 0.16, 1.45),
  lantern: item('石灯籠', 'garden', 0.5, 0.5, 1.3),
  // 自動改札機: a cabinet 19 cm wide and 1.5 m long; the way through between two of them is
  // 60 cm wide (90 cm for wheelchairs). The see-through one shows its works.
  'ticket-gate': item('自動改札機', 'station', 0.19, 1.5, 1.03),
  'ticket-gate-clear': item('自動改札機（スケルトン）', 'station', 0.19, 1.5, 1.03),
  'ticket-machine': item('券売機', 'station', 0.85, 0.5, 1.75),
  'platform-bench': item('ホームのベンチ', 'station', 1.8, 0.5, 0.8),
  // 内方線付き点状ブロック: blocks of 30 cm with dots, and a raised line on the side away
  // from the edge, laid along a platform.
  'tactile-line': item('点字ブロック（ホーム）', 'station', 0.3, 2.4, 0.01, { solid: false }),
}
export const ITEM_GROUPS = {
  living: 'リビング', dining: 'ダイニング', bedroom: '寝室', japanese: '和室', water: '水まわり',
  entrance: '玄関・物置', shop: 'お店', office: '仕事場', garden: '庭・外まわり', station: '駅',
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
export const STAIR_TURNS = { landing: '踊り場で曲がる', winder: '回り段で曲がる' }
// The design of a building comes from the walls its owner drew, or from its easy plan: see
// designOf() in plans.js.

// A storey with its walls, even when it only says it repeats another one.
export function storeyOf(design, level) {
  const storey = design.storeys[level]
  if (!storey) return null
  const source = Number.isInteger(storey.like) && design.storeys[storey.like] && !Number.isInteger(design.storeys[storey.like].like)
    ? design.storeys[storey.like] : storey
  return {
    h: storey.h ?? source.h ?? 2.7, walls: source.walls ?? [], openings: source.openings ?? [], rooms: source.rooms ?? [],
    items: source.items ?? [], stairs: source.stairs ?? [], decor: source.decor ?? [], like: source === storey ? undefined : storey.like,
    // steps: short flights inside the storey itself. lifts: where a lift car stops.
    steps: source.steps ?? [], lifts: source.lifts ?? [],
  }
}

// How high the floor of a storey is above the street.
export function floorHeight(design, level) {
  let height = design.base ?? 0.3
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
        // The two ends of its centre line.
        start, end,
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

// How far up a flight of steps a spot is, from 0 at its foot to 1 at its top; -1 beside it.
// Steps are a rectangle `w` wide and `l` long round (x, z), climbing towards their local -z.
export function upSteps(steps, x, z) {
  const turn = (steps.r ?? 0) * Math.PI / 180
  const cos = Math.cos(turn)
  const sin = Math.sin(turn)
  const lx = (x - steps.x) * cos - (z - steps.z) * sin
  const lz = (x - steps.x) * sin + (z - steps.z) * cos
  if (Math.abs(lx) > steps.w / 2 || Math.abs(lz) > steps.l / 2) return -1
  return (steps.l / 2 - lz) / steps.l
}

// Everything the 3D view and the collisions need to know about one storey, worked out once.
export function storeyShape(design, level) {
  let levels = resolved.get(design)
  if (!levels) resolved.set(design, levels = new Map())
  if (levels.has(level)) return levels.get(level)
  const storey = storeyOf(design, level)
  if (!storey) return null
  const graph = wallGraph(storey.walls)
  // Lines on the floor between rooms that share one space take no part in the corners of real
  // walls: a wall that ends at such a line ends properly, with a face across its end.
  // Nor does a rail or a low wall cut into a wall of full height where it meets one: its end
  // simply stands against that wall, which goes on unbroken above it.
  const low = (wall) => Boolean(wall.rail) || (wall.h ?? storey.h) < storey.h - 0.01
  const outlines = { nodes: [], pieces: [], caps: [] }
  for (const group of [(wall) => !low(wall), low]) {
    const members = storey.walls.map((wall, index) => ({ wall, index })).filter(({ wall }) => !wall.open && group(wall))
    const drawn = wallOutlines(members.map(({ wall }) => wall))
    const offset = outlines.pieces.length
    outlines.nodes.push(...drawn.nodes)
    outlines.pieces.push(...drawn.pieces.map((piece) => ({ ...piece, wall: members[piece.wall].index })))
    outlines.caps.push(...drawn.caps.map((cap) => ({ ...cap, piece: cap.piece + offset })))
  }
  const rooms = findRooms(storey.walls, graph).map((room) => {
    const seed = storey.rooms.find((entry) => inRoom(room, entry.at[0], entry.at[1]))
    return {
      ...room, f: seed?.f ?? 'floor-oak', c: seed?.c ?? 'ceil-white', n: seed?.n ?? '', code: seed?.code, open: Boolean(seed?.open),
      // `y`: how far the floor of this room lies above (or below) the floor level of the storey.
      y: seed?.y ?? 0, unit: seed?.unit ?? 0, shaft: Boolean(seed?.shaft),
    }
  })
  const roomAt = (x, z) => rooms.find((room) => inRoom(room, x, z)) ?? null
  // Inside means: within a room that has a roof over it. Balconies and terraces are outdoors.
  const indoors = (x, z) => rooms.some((room) => !room.open && inRoom(room, x, z))
  const floored = (x, z) => rooms.some((room) => inRoom(room, x, z))
  // The height of the floor at a spot, measured from the floor level of the storey: lower in
  // the earth-floored part of an entrance, rising along a flight of steps. Null off the floor.
  const heightAt = (x, z) => {
    for (const steps of storey.steps) {
      const up = upSteps(steps, x, z)
      if (up >= 0) return (steps.from ?? 0) + steps.rise * up
    }
    const room = roomAt(x, z)
    return room ? room.y : null
  }
  const sides = storey.walls.map((wall) => {
    const length = lengthOf(wall) || 1
    const d = [(wall.b[0] - wall.a[0]) / length, (wall.b[1] - wall.a[1]) / length]
    const reach = (wall.t ?? 0.12) / 2 + 0.07
    const middle = [(wall.a[0] + wall.b[0]) / 2, (wall.a[1] + wall.b[1]) / 2]
    return { length, d, l: indoors(middle[0] + d[1] * reach, middle[1] - d[0] * reach), r: indoors(middle[0] - d[1] * reach, middle[1] + d[0] * reach) }
  })
  const shape = { storey, graph, outlines, rooms, sides, indoors, floored, roomAt, heightAt, base: floorHeight(design, level) }
  levels.set(level, shape)
  return shape
}

// The height of the ground on a lot outside the building itself: the street (0), a porch or a
// terrace, or the steps up to one.
export function yardHeight(design, x, z) {
  const yard = design.yard
  if (!yard) return 0
  for (const steps of yard.steps ?? []) {
    const up = upSteps(steps, x, z)
    if (up >= 0) return (steps.from ?? 0) + steps.rise * up
  }
  let height = 0
  for (const pad of yard.pads ?? []) {
    if (x >= pad.x0 && x <= pad.x1 && z >= pad.z0 && z <= pad.z1) height = Math.max(height, pad.y)
  }
  return height
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

const isDoor = (entry) => Boolean(OPENINGS[entry.k]?.door)
const isLift = (entry) => Boolean(OPENINGS[entry.k]?.lift)
// A door is named after its storey and where it stands, to the tenth of a metre.
export const doorKey = (level, x, z) => `${level}:${Math.round(x * 10)}:${Math.round(z * 10)}`
const flatted = new WeakMap()
// Whether a building is divided into flats, each with a key of its own.
function hasFlats(design) {
  if (!flatted.has(design)) {
    flatted.set(design, design.storeys.some((storey) => (storey.rooms ?? []).some((room) => room.unit && room.unit !== '0')))
  }
  return flatted.get(design)
}
// How much room a head needs under a flight of stairs, and how thick the flight itself is.
const HEADROOM = 1.9
const FLIGHT = 0.18

// What stops a walker on one storey: stretches of wall (doorways left open), furniture, the
// stairs and their wells; `stairs`, with where each is stepped onto; `lifts`, with the door of
// each; `doors`, each with the stretch of wall it closes and the lock that guards it; and
// `rooms`, whose floors a walker upstairs has to stay on.
//
// Doors are opened by hand. A door between a home and the world outside it has a lock: the
// key of the house ('main'), or in a block of flats the key of the flat ('storey:flat').
export function colliders(design, level) {
  const shape = storeyShape(design, level)
  if (!shape) return { segments: [], boxes: [], stairs: [], lifts: [], doors: [], rooms: [] }
  const { storey, sides, rooms } = shape
  const segments = []
  const liftDoors = []
  const doors = []
  const flats = hasFlats(design)
  // The key that guards a room: none for the open air and for space that everyone shares.
  const guard = (room) => (!room || room.open ? null : !flats ? 'main' : room.unit && room.unit !== '0' ? `${level}:${room.unit}` : null)
  storey.walls.forEach((wall, index) => {
    // A line between two rooms that share one space (a step up from the entrance, a kitchen
    // open to the living room) is nothing to walk into.
    if (wall.open) return
    const { length, d } = sides[index]
    const reach = (wall.t ?? 0.12) / 2 + 0.07
    // A door leads outside when the ground on one side of it is not a room.
    const outside = (entry) => {
      const x = wall.a[0] + d[0] * entry.at
      const z = wall.a[1] + d[1] * entry.at
      return !(shape.indoors(x + d[1] * reach, z - d[0] * reach) && shape.indoors(x - d[1] * reach, z + d[0] * reach))
    }
    const doorways = storey.openings.filter((entry) => entry.w === index && isDoor(entry))
    for (const entry of doorways) {
      const x = wall.a[0] + d[0] * entry.at
      const z = wall.a[1] + d[1] * entry.at
      const half = entry.ww / 2
      const gate = { ax: x - d[0] * half, az: z - d[1] * half, bx: x + d[0] * half, bz: z + d[1] * half, r: (wall.t ?? 0.12) / 2 }
      if (isLift(entry)) liftDoors.push({ x, z, d, half, r: gate.r })
      // (An opening without a leaf, such as an arch, is never shut.)
      else if (!OPENINGS[entry.k].open) {
        const keys = [shape.roomAt(x + d[1] * reach, z - d[0] * reach), shape.roomAt(x - d[1] * reach, z + d[0] * reach)].map(guard)
        const lock = keys[0] !== keys[1] ? keys[0] ?? keys[1] : OPENINGS[entry.k].lock ? keys[0] : null
        doors.push({ key: doorKey(level, x, z), x, z, lock, auto: entry.k === 'door-auto', kind: entry.k, gate, outside: outside(entry) })
      }
    }
    const gaps = doorways.map((entry) => [entry.at - entry.ww / 2, entry.at + entry.ww / 2]).sort((p, q) => p[0] - q[0])
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
  // On the ground, the walls and fences round the lot, and what stands in the garden.
  if (level === 0 && design.yard) {
    for (const bound of design.yard.bounds ?? []) segments.push({ ax: bound.a[0], az: bound.a[1], bx: bound.b[0], bz: bound.b[1], r: (bound.t ?? 0.12) / 2 })
    for (const entry of design.yard.items ?? []) {
      if (ITEMS[entry.k]?.solid && !entry.hung) boxes.push({ x: entry.x, z: entry.z, w: ITEMS[entry.k].w, d: ITEMS[entry.k].d, r: entry.r ?? 0 })
    }
  }

  const stairs = []
  const fence = (points) => {
    for (let index = 1; index < points.length; index++) {
      segments.push({ ax: points[index - 1][0], az: points[index - 1][1], bx: points[index][0], bz: points[index][1], r: 0.03 })
    }
  }
  // Stairs that start here go up; the well of the stairs from below is a hole to walk round.
  for (const [from, up] of [[level, true], [level - 1, false]]) {
    const lower = storeyOf(design, from)
    if (!lower || from + 1 >= design.storeys.length) continue
    for (const stair of lower.stairs) {
      const layout = stairLayout(stair, lower.h)
      if (up) {
        // A flight stands in the way wherever it is too low to walk under: all of an ordinary
        // stair, but not the half landing and the upper flight over the way in to a block of flats.
        const floorAt = (s) => shape.heightAt(...layout.centre(s)) ?? 0
        let start = null
        const close = (to) => {
          if (start === null) return
          fence(layout.side(start, to, 1))
          fence(layout.side(start, to, -1))
          if (start > 1e-6) fence([layout.edge(start, 1), layout.edge(start, -1)])
          fence([layout.edge(to, 1), layout.edge(to, -1)])
          start = null
        }
        for (const piece of layout.pieces) {
          const low = [[piece.from + 0.05, piece.y0], [piece.to - 0.05, piece.y1]]
            .some(([s, y]) => y - FLIGHT - floorAt(s) < HEADROOM)
          if (low && start === null) start = piece.from
          if (!low) close(piece.from)
        }
        close(layout.total)
      } else {
        fence(layout.side(0, layout.total, 1))
        fence(layout.side(0, layout.total, -1))
        fence([layout.edge(0, 1), layout.edge(0, -1)])
      }
      stairs.push({ path: layout.path, foot: layout.foot, head: layout.head, up, from, rise: lower.h, gate: up ? layout.foot : layout.head })
    }
  }

  // Each lift has the lift door nearest to it; the door only opens while the car stands behind it.
  const lifts = storey.lifts.map((lift) => {
    const door = liftDoors.map((entry) => ({ ...entry, gap: Math.hypot(entry.x - lift.x, entry.z - lift.z) })).sort((a, b) => a.gap - b.gap)[0]
    if (!door || door.gap > 3) return null
    const side = (door.x - lift.x) * door.d[1] - (door.z - lift.z) * door.d[0] >= 0 ? 1 : -1
    return {
      x: lift.x, z: lift.z, w: lift.w, d: lift.d, r: lift.r ?? 0,
      at: [door.x, door.z], out: [side * door.d[1], -side * door.d[0]], half: door.half,
      gate: {
        ax: door.x - door.d[0] * door.half, az: door.z - door.d[1] * door.half,
        bx: door.x + door.d[0] * door.half, bz: door.z + door.d[1] * door.half, r: door.r,
      },
    }
  }).filter(Boolean)
  return { segments, boxes, stairs, lifts, doors, rooms }
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
  return shape.storey.openings.filter((entry) => isDoor(entry) && !isLift(entry) && !shape.storey.walls[entry.w]?.rail).map((entry) => {
    const wall = shape.storey.walls[entry.w]
    const side = shape.sides[entry.w]
    if (wall.open || side.l === side.r) return null
    const sign = side.l ? -1 : 1
    const normal = [sign * side.d[1], -sign * side.d[0]]
    const x = wall.a[0] + side.d[0] * entry.at
    const z = wall.a[1] + side.d[1] * entry.at
    const outside = [x + normal[0] * 0.9, z + normal[1] * 0.9]
    // A door that opens onto a balcony or a terrace leads nowhere a visitor could come from.
    return shape.floored(...outside) ? null : { x, z, normal, width: entry.ww, kind: entry.k, outside, opening: entry }
  }).filter(Boolean)
}
