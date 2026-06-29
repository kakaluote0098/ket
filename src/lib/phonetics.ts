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

/**
 * 将单词拆分成适合小学生拼读的小节。
 * 规则：把连续的辅音 + 元音组合成一段，遇到下一个元音前断开。
 * 例如 book -> boo-k，principal -> prin-ci-pal。
 */
export function toSyllables(word: string): string {
  const lower = word.toLowerCase().trim();
  if (lower.length <= 3) return lower;

  const chunks: string[] = [];
  let start = 0;
  let hasVowel = isVowel(lower[0]);

  for (let i = 1; i < lower.length; i++) {
    const vowel = isVowel(lower[i]);
    if (vowel && !hasVowel) {
      // 开始新的元音组，但通常把前面的辅音留给当前段
      chunks.push(lower.slice(start, i));
      start = i;
      hasVowel = true;
    } else if (!vowel && hasVowel) {
      // 元音后接辅音，先不切断，等下一个元音出现再切
      hasVowel = false;
    }
  }

  chunks.push(lower.slice(start));
  return chunks.join('-');
}

/**
 * 获取单词的音标或拼读提示。
 * 优先使用已录入的音标；没有则返回音节拆分。
 */
export function getPhonetic(word: Word): string {
  if (word.phonetic) return word.phonetic;

  const stored = phoneticMap.get(word.english.toLowerCase());
  if (stored) return stored;

  return toSyllables(word.english);
}
