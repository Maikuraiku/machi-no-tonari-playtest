// Place names made from the land: a first part drawn from common Japanese place-name words and
// an ending that says what kind of place it is (a plateau, a valley, the riverside, an old
// highway town).
import { hash3 } from './noise.js?v=online-1794946480502'

const FIRST = [
  '桜', '松', '梅', '竹', '柳', '若', '上', '下', '北', '南', '東', '西', '中', '新', '大', '小', '高', '深',
  '赤', '青', '白', '石', '宮', '寺', '野', '芦', '萩', '藤', '菅', '栗', '柿', '桑', '杉', '榎', '駒', '鶴',
  '亀', '鷺', '鷹', '烏', '狛', '代', '奥', '宇', '喜', '等', '尾', '砧', '粕', '烏', '太', '弦', '経', '豪',
  '用', '瀬', '岡', '常', '千', '八', '三', '二', '玉', '金', '銀', '光', '明', '久', '永', '富', '福', '幸',
]
const SECOND = ['田', '原', '沢', '山', '木', '林', '森', '島', '根', '堂', '塚', '倉', '代', '見', '谷', '野', '馬', '里', '畑', '戸', '町', '本', '橋', '川']
const ENDING = {
  plateau: ['台', 'ヶ丘', '原', '野', ''],
  valley: ['谷', '沢', '窪', '下', ''],
  river: ['河原', '川', '島', '瀬', '浜'],
  hills: ['丘', '山', '台', '坂', '尾根'],
  town: ['宿', '町', '', '本町', '辻'],
}

export function placeName(seed, x, z, kind = 'plateau') {
  const h = hash3(seed, Math.floor(x / 37), Math.floor(z / 41))
  const first = FIRST[h % FIRST.length]
  const second = SECOND[(h >>> 8) % SECOND.length]
  const endings = ENDING[kind] ?? ENDING.plateau
  const ending = endings[(h >>> 16) % endings.length]
  // Two characters plus an ending, or the first character with the ending alone; never the
  // same character twice in a row (松原原).
  if ((h >>> 24) % 3 === 0 && ending && ending[0] !== first) return first + ending
  if (ending && (ending[0] === second || ending[0] === first)) return first + second
  return first + second + ending
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
