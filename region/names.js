// Place names made from the land: a first part drawn from common Japanese place-name words and
// an ending that says what kind of place it is (a plateau, a valley, the riverside, an old
// highway town).
import { hash3 } from './noise.js'

const FIRST = [
  '桜', '松', '梅', '竹', '柳', '若', '上', '下', '北', '南', '東', '西', '中', '新', '大', '小', '高', '深',
  '赤', '青', '白', '石', '宮', '寺', '野', '芦', '萩', '藤', '菅', '栗', '柿', '桑', '杉', '榎', '楓', '鶴',
  '楠', '檜', '樅', '椿', '霧', '陽', '風', '晴', '星', '月', '雲', '翠', '蒼', '明', '和', '豊',
  '光', '澄', '涼', '響', '朝', '夕', '久', '永', '富', '福', '幸', '穂', '葉', '花', '水', '泉',
]
const SECOND = ['田', '原', '沢', '山', '木', '林', '森', '島', '根', '堂', '塚', '倉', '見', '谷', '野', '里', '畑', '戸', '町', '本', '橋', '川', '瀬', '岡']
const ENDING = {
  plateau: ['台', 'ヶ丘', '原', '野', ''],
  valley: ['谷', '沢', '窪', '下', ''],
  river: ['河原', '川', '島', '瀬', '浜'],
  hills: ['丘', '山', '台', '坂', '尾根'],
  town: ['宿', '町', '', '本町', '辻'],
}

const FORBIDDEN_REAL_FRAGMENTS = [
  // Real municipalities / districts / areas / natural features
  '世田', '多摩', '武蔵', '国分寺', '立川', '下末吉', '玉川', '野川', '仙川',
  '成城', '経堂', '用賀', '二子', '登戸', '狛江', '府中', '調布', '三軒茶屋', '三軒',
  '喜多見', '砧', '祖師谷', '千歳', '烏山', '桜新町', '駒沢', '桜上水', '下高井戸', '赤堤', '豪徳寺', '梅ヶ丘',
  '明大前', '下北沢', '北沢', '代沢', '三宿', '池尻', '大橋', '等々力', '上野毛', '瀬田', '岡本', '宇奈根', '大蔵', '鎌田', '深沢', '奥沢',
  '九品仏', '自由が丘', '新宿', '渋谷', '品川', '目黒', '大田', '杉並', '練馬', '中野', '板橋', '文京', '港', '中央区', '千代田',
  '松原', '深大', '芦花', '八幡山', '三鷹', '吉祥寺', '小金井', '田園調布', '尾山台', '若林', '弦巻', '向ヶ丘', '生田', '稲田',
  '高津', '溝口', '溝ノ口', '丸子', '宿河原', '唐木田', '長沼', '鶴川', '柿生', '新百合', '稲城', '南大沢', '永山', '聖蹟', '百草', '高幡',
  '八王子', '町田', '横浜', '川崎', '相模', '東京', '関東ローム', '淀橋', '荏原',
  // Real railways, roads & brands
  '玉電', '小田急', '東急', '東横', '田園都市', '京王', '井の頭', '山手', '中央線',
  '南武', '相鉄', '西武', '東武', '京成', '京急', '環七', '環八', '環状第', '環状七', '環状八',
  '東名', '首都高', '甲州街道', '玉川通り', '世田谷通り', '新玉川', '玉川上水',
]

function isCleanName(s) {
  for (let i = 0; i < FORBIDDEN_REAL_FRAGMENTS.length; i++) {
    if (s.includes(FORBIDDEN_REAL_FRAGMENTS[i])) return false
  }
  return true
}

export function placeName(seed, x, z, kind = 'plateau') {
  const endings = ENDING[kind] ?? ENDING.plateau
  for (let shift = 0; shift < 24; shift++) {
    const h = hash3(seed + shift * 1013, Math.floor(x / 37) + shift, Math.floor(z / 41) - shift)
    const first = FIRST[h % FIRST.length]
    const second = SECOND[(h >>> 8) % SECOND.length]
    const ending = endings[(h >>> 16) % endings.length]
    // Two characters plus an ending, or the first character with the ending alone; never the
    // same character twice in a row (楠原原) or matching a real town fragment.
    let cand
    if ((h >>> 24) % 3 === 0 && ending && ending[0] !== first) cand = first + ending
    else if (ending && (ending[0] === second || ending[0] === first)) cand = first + second
    else cand = first + second + ending
    if (isCleanName(cand)) return cand
  }
  return `あおば${kind === 'valley' ? '谷' : kind === 'river' ? '瀬' : '台'}`
}

// Keeps names unique within one map.
export function createNamer(seed) {
  const used = new Set()
  return (x, z, kind) => {
    for (let attempt = 0; attempt < 12; attempt++) {
      const name = placeName(seed + attempt * 7919, x + attempt * 13, z - attempt * 17, kind)
      if (!used.has(name)) {
        used.add(name)
        return name
      }
    }
    const fallback = placeName(seed, x, z, kind) + used.size
    used.add(fallback)
    return fallback
  }
}
