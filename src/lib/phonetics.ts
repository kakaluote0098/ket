import { phase1VocabCategories } from '@/data/phase1Vocabulary';
import type { Word } from '@/types';

const phoneticMap = new Map<string, string>();

for (const category of phase1VocabCategories) {
  for (const word of category.words) {
    phoneticMap.set(word.english.toLowerCase(), word.phonetic);
  }
}

const VOWELS = 'aeiouy';
const isVowel = (char: string) => VOWELS.includes(char.toLowerCase());

// 常见字母组合 → 发音（按长度降序匹配）
const PHONICS_PATTERNS: Record<string, string> = {
  // 三字母组合
  tion: '/ʃən/',
  sion: '/ʒən/',
  ture: '/tʃə(r)/',
  ous: '/əs/',
  ough: '/ʌf/',
  igh: '/aɪ/',
  ould: '/ʊd/',
  // 双元音 / 元音组合
  ai: '/eɪ/',
  ay: '/eɪ/',
  ee: '/iː/',
  ea: '/iː/',
  oa: '/əʊ/',
  ow: '/aʊ/',
  ou: '/aʊ/',
  oo: '/uː/',
  oi: '/ɔɪ/',
  oy: '/ɔɪ/',
  ar: '/ɑː(r)/',
  ir: '/ɜː(r)/',
  or: '/ɔː(r)/',
  ur: '/ɜː(r)/',
  aw: '/ɔː/',
  au: '/ɔː/',
  al: '/ɔːl/',
  ew: '/uː/',
  ie: '/iː/',
  ue: '/uː/',
  // 辅音组合
  sh: '/ʃ/',
  ch: '/tʃ/',
  th: '/θ/',
  ph: '/f/',
  wh: '/w/',
  ck: '/k/',
  ng: '/ŋ/',
  qu: '/kw/',
  kn: '/n/',
  wr: '/r/',
  // 辅音丛
  str: '/str/',
  spl: '/spl/',
  scr: '/skr/',
  shr: '/ʃr/',
  thr: '/θr/',
  bl: '/bl/',
  br: '/br/',
  cl: '/kl/',
  cr: '/kr/',
  dr: '/dr/',
  fl: '/fl/',
  fr: '/fr/',
  gl: '/ɡl/',
  gr: '/ɡr/',
  pl: '/pl/',
  pr: '/pr/',
  sc: '/sk/',
  sk: '/sk/',
  sl: '/sl/',
  sm: '/sm/',
  sn: '/sn/',
  sp: '/sp/',
  st: '/st/',
  sw: '/sw/',
  tr: '/tr/',
  tw: '/tw/',
  // 常见后缀
  ing: '/ɪŋ/',
  est: '/ɪst/',
  ly: '/li/',
  ment: '/mənt/',
  ness: '/nəs/',
  less: '/ləs/',
  ful: '/fʊl/',
  able: '/əbl/',
  ible: '/əbl/',
};

const PATTERN_KEYS = Object.keys(PHONICS_PATTERNS).sort((a, b) => b.length - a.length);

const LONG_VOWELS: Record<string, string> = {
  a: '/eɪ/',
  e: '/iː/',
  i: '/aɪ/',
  o: '/əʊ/',
  u: '/juː/',
};

const CONSONANT_SOUNDS: Record<string, string> = {
  b: '/b/',
  c: '/k/',
  d: '/d/',
  f: '/f/',
  g: '/ɡ/',
  h: '/h/',
  j: '/dʒ/',
  k: '/k/',
  l: '/l/',
  m: '/m/',
  n: '/n/',
  p: '/p/',
  q: '/k/',
  r: '/r/',
  s: '/s/',
  t: '/t/',
  v: '/v/',
  w: '/w/',
  x: '/ks/',
  y: '/j/',
  z: '/z/',
};

export interface PhonicsChunk {
  text: string;
  sound: string;
}

export interface PhonicsBreakdown {
  chunks: PhonicsChunk[];
  combined: string;
}

/**
 * 把单词拆成“字母组合 → 发音”的拼读块。
 * 优先匹配长字母组合，处理词尾 magic e、soft c 等基础规则。
 */
export function getPhonicsBreakdown(word: string): PhonicsBreakdown {
  const lower = word.toLowerCase().trim();
  const chunks: PhonicsChunk[] = [];
  let i = 0;

  while (i < lower.length) {
    const char = lower[i];

    // magic e：词尾 元音 + 单辅音 + e，元音发字母音，e 不发音
    // 例如 cake -> ake /eɪk/，home -> ome /əʊm/
    if (
      i + 2 === lower.length - 1 &&
      lower[i + 2] === 'e' &&
      isVowel(lower[i]) &&
      !isVowel(lower[i + 1])
    ) {
      const vowel = lower[i];
      const consonant = lower[i + 1];
      const longSound = LONG_VOWELS[vowel];
      if (longSound) {
        const consonantSound = CONSONANT_SOUNDS[consonant] || `/${consonant}/`;
        chunks.push({
          text: vowel + consonant + 'e',
          sound: longSound.replace(/\/$/, '') + consonantSound.replace(/^\//, ''),
        });
        i += 3;
        continue;
      }
    }

    // 长字母组合优先匹配
    let matched = false;
    for (const pattern of PATTERN_KEYS) {
      if (lower.startsWith(pattern, i)) {
        chunks.push({ text: pattern, sound: PHONICS_PATTERNS[pattern] });
        i += pattern.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // soft c：c 在 e/i/y 前发 /s/
    if (char === 'c' && i + 1 < lower.length && 'eiy'.includes(lower[i + 1])) {
      chunks.push({ text: 'c', sound: '/s/' });
      i += 1;
      continue;
    }

    // 单字母基础发音
    if (isVowel(char)) {
      chunks.push({ text: char, sound: `/${char}/` });
    } else {
      chunks.push({ text: char, sound: CONSONANT_SOUNDS[char] || `/${char}/` });
    }
    i += 1;
  }

  const combined =
    '/' +
    chunks
      .map((c) => c.sound.replace(/\//g, ''))
      .join('')
      .replace(/\/{2,}/g, '/') +
    '/';

  return { chunks, combined: combined.replace(/\/{2,}/g, '/') };
}

/**
 * 将单词拆分成适合小学生拼读的小节。
 */
export function toSyllables(word: string): string {
  const { chunks } = getPhonicsBreakdown(word);
  return chunks.map((c) => c.text).join('-');
}

/**
 * 获取单词的音标或拼读提示。
 * 优先使用已录入的音标；没有则返回自动拼读结果。
 */
export function getPhonetic(word: Word): string {
  if (word.phonetic) return word.phonetic;

  const stored = phoneticMap.get(word.english.toLowerCase());
  if (stored) return stored;

  return getPhonicsBreakdown(word.english).combined;
}

export function getPhoneticBreakdown(word: Word): PhonicsBreakdown {
  const stored = word.phonetic ?? phoneticMap.get(word.english.toLowerCase());
  const breakdown = getPhonicsBreakdown(word.english);

  if (stored) {
    return { ...breakdown, combined: stored };
  }

  return breakdown;
}
