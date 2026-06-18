import type { GrammarLesson } from '@/types';

export const grammarLessons: GrammarLesson[] = [
  // Starter
  {
    id: 'gl1',
    title: 'be 动词 am / is / are',
    content: 'I 用 am，you 用 are，he / she / it 用 is。记住口诀：我(I)用 am，你用 are，is 连着他她它。',
    examples: ['I am a student.', 'She is happy.', 'They are friends.'],
    tip: '不要漏掉 be 动词，这是英语句子最常见的错误之一。',
    level: 'starter',
  },
  {
    id: 'gl2',
    title: 'a / an 的用法',
    content: 'a 用在辅音音素开头的单词前，an 用在元音音素开头的单词前。看发音，不看字母。',
    examples: ['an apple', 'a book', 'an orange'],
    tip: 'hour 以 h 开头但 h 不发音，所以是 an hour。',
    level: 'starter',
  },
  {
    id: 'gl3',
    title: 'There is / There are',
    content: 'There is 后面接单数名词，There are 后面接复数名词。',
    examples: ['There is a cat.', 'There are two dogs.'],
    tip: '看后面的名词是单数还是复数，再决定用 is 还是 are。',
    level: 'starter',
  },

  // Mover
  {
    id: 'gl4',
    title: '一般现在时第三人称单数',
    content: '当主语是 he / she / it 或单数名词时，动词要加 -s 或 -es。',
    examples: ['She likes apples.', 'He watches TV every day.'],
    tip: '以 ch, sh, s, x, o 结尾的动词加 -es。',
    level: 'mover',
  },
  {
    id: 'gl5',
    title: '形容词比较级',
    content: '短形容词在词尾加 -er，长形容词前面加 more。两者比较用 than。',
    examples: ['taller than', 'more beautiful than'],
    tip: 'good 的比较级是 better，bad 的比较级是 worse，要特殊记忆。',
    level: 'mover',
  },
  {
    id: 'gl6',
    title: '现在进行时',
    content: '表示正在发生的事情，结构是：be 动词 + 动词 -ing。',
    examples: ['I am reading.', 'They are playing football.'],
    tip: '现在进行时的标志词有 now, look, listen。',
    level: 'mover',
  },

  // Flyer
  {
    id: 'gl7',
    title: '一般过去时',
    content: '表示过去发生的动作。规则动词加 -ed，不规则动词需要单独记忆。',
    examples: ['I visited Beijing yesterday.', 'She went to school by bus.'],
    tip: 'yesterday, last week, ago 是一般过去时的常见标志。',
    level: 'flyer',
  },
  {
    id: 'gl8',
    title: 'if 条件句（第一条件句）',
    content: '表示真实条件下可能发生的事情。if 从句用一般现在时，主句用 will + 动词原形。',
    examples: ['If it rains, I will stay at home.', 'If you study hard, you will pass.'],
    tip: '主将从现：主句将来时，从句现在时。',
    level: 'flyer',
  },

  // KET
  {
    id: 'gl9',
    title: '现在完成时',
    content: '表示过去发生的动作对现在造成的影响，结构是：have / has + 过去分词。',
    examples: ['I have finished my homework.', 'She has visited Paris twice.'],
    tip: 'already, yet, ever, never 常和现在完成时连用。',
    level: 'ket',
  },
  {
    id: 'gl10',
    title: '被动语态',
    content: '强调动作的承受者，结构是：be 动词 + 过去分词。',
    examples: ['The cake was made by my mother.', 'English is spoken around the world.'],
    tip: '被动语态的时态变化体现在 be 动词上。',
    level: 'ket',
  },
];

export const getGrammarLessonsByLevel = (level?: string) =>
  level ? grammarLessons.filter((l) => l.level === level) : grammarLessons;

export const getGrammarLessonById = (id: string) => grammarLessons.find((l) => l.id === id);
