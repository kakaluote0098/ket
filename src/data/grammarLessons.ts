import type { GrammarLesson } from '@/types';

export const grammarLessons: GrammarLesson[] = [
  // 代词
  {
    id: 'gl_pronoun_personal',
    title: '人称代词',
    content: '人称代词用来代替人或事物。第一人称 I / we，第二人称 you，第三人称 he / she / it / they。he 指男性，she 指女性，it 指事物或动物。',
    examples: ['I am a student.', 'You are kind.', 'He is my brother.', 'She likes cats.', 'It is a dog.', 'We are friends.', 'They play football.'],
    tip: '句子开头的人称代词要大写。',
    level: 'starter',
  },
  {
    id: 'gl_pronoun_possessive',
    title: '物主代词',
    content: '物主代词表示所属关系，后面通常接名词。my（我的）、your（你的）、his（他的）、her（她的）、its（它的）、our（我们的）、their（他们的）。',
    examples: ['This is my book.', 'Is that your pen?', 'His bag is blue.', 'Her dress is red.', 'Its tail is long.', 'Our classroom is big.', 'Their house is nice.'],
    tip: 'its 是物主代词，it\'s 是 it is 的缩写，不要混淆。',
    level: 'starter',
  },

  // 名词
  {
    id: 'gl_noun_plural',
    title: '名词单复数',
    content: '大多数名词变复数加 -s；以 s, x, ch, sh 结尾加 -es；以辅音字母 + y 结尾变 y 为 i 加 -es；部分名词不规则变化。',
    examples: ['book → books', 'box → boxes', 'watch → watches', 'baby → babies', 'child → children', 'foot → feet'],
    tip: 'sheep, fish 等名词单复数同形。',
    level: 'starter',
  },
  {
    id: 'gl_noun_countable',
    title: '可数与不可数名词',
    content: '可数名词可以用数字计数，有单复数形式；不可数名词无法直接用数字计数，通常没有复数形式，如 water, bread, rice。',
    examples: ['an apple / two apples', 'a book / three books', 'some water', 'a piece of bread'],
    tip: '不可数名词前可以用 some / much / a little，不能用 a / an。',
    level: 'mover',
  },

  // be 动词与句型
  {
    id: 'gl_be_verb',
    title: 'be 动词 am / is / are',
    content: 'I 用 am，you / we / they 用 are，he / she / it 及单数名词用 is。缩写形式：I\'m, you\'re, he\'s, she\'s, it\'s, we\'re, they\'re。',
    examples: ['I am happy.', 'She is a teacher.', 'They are students.', 'It is sunny today.'],
    tip: '否定句在 be 动词后加 not：is not = isn\'t，are not = aren\'t。',
    level: 'starter',
  },
  {
    id: 'gl_svo',
    title: '基础主谓宾句型',
    content: '英语简单句常见结构：主语(S) + 谓语(V) + 宾语(O)。谓语动词表示动作，宾语表示动作的对象。',
    examples: ['I like apples.', 'She reads books.', 'They play basketball.', 'We watch TV.'],
    tip: '主语是第三人称单数时，一般现在时的动词要加 -s 或 -es。',
    level: 'mover',
  },

  // 时态与时间状语
  {
    id: 'gl_simple_present',
    title: '一般现在时',
    content: '一般现在时表示经常性、习惯性的动作或状态。主语是第三人称单数时，动词加 -s / -es；其他人称用动词原形。',
    examples: ['I go to school at seven.', 'He walks to school.', 'She watches TV every day.', 'They like English.'],
    tip: '否定句和疑问句需要借助 do / does。He likes → He doesn\'t like / Does he like?',
    level: 'mover',
  },
  {
    id: 'gl_adverbs_time',
    title: '常用时间状语',
    content: '时间状语告诉我们动作发生的时间。常见词有 every day, usually, often, sometimes, always, never, in the morning, on Sunday, at night。',
    examples: ['I always brush my teeth.', 'She sometimes rides a bike.', 'We often play games.', 'He never eats fish.'],
    tip: 'always 频率最高，never 表示“从不”。',
    level: 'mover',
  },

  // 介词
  {
    id: 'gl_prepositions',
    title: '基础介词',
    content: 'in 表示在……里面或较长时间；on 表示在……上面或具体某一天；at 表示在具体地点或小时间点；under 在……下面；next to 在……旁边；between 在……中间。',
    examples: ['in the classroom', 'on the table', 'at school', 'under the chair', 'next to the window', 'between the desks'],
    tip: 'in the morning / afternoon / evening，但 at night。',
    level: 'mover',
  },

  // 原有进阶语法点
  {
    id: 'gl_comparative',
    title: '形容词比较级',
    content: '短形容词在词尾加 -er，长形容词前面加 more。两者比较用 than。',
    examples: ['taller than', 'more beautiful than'],
    tip: 'good 的比较级是 better，bad 的比较级是 worse，要特殊记忆。',
    level: 'mover',
  },
  {
    id: 'gl_present_continuous',
    title: '现在进行时',
    content: '表示正在发生的事情，结构是：be 动词 + 动词 -ing。',
    examples: ['I am reading.', 'They are playing football.'],
    tip: '现在进行时的标志词有 now, look, listen。',
    level: 'mover',
  },
  {
    id: 'gl_past_simple',
    title: '一般过去时',
    content: '表示过去发生的动作。规则动词加 -ed，不规则动词需要单独记忆。',
    examples: ['I visited Beijing yesterday.', 'She went to school by bus.'],
    tip: 'yesterday, last week, ago 是一般过去时的常见标志。',
    level: 'flyer',
  },
  {
    id: 'gl_first_conditional',
    title: 'if 条件句（第一条件句）',
    content: '表示真实条件下可能发生的事情。if 从句用一般现在时，主句用 will + 动词原形。',
    examples: ['If it rains, I will stay at home.', 'If you study hard, you will pass.'],
    tip: '主将从现：主句将来时，从句现在时。',
    level: 'flyer',
  },
  {
    id: 'gl_present_perfect',
    title: '现在完成时',
    content: '表示过去发生的动作对现在造成的影响，结构是：have / has + 过去分词。',
    examples: ['I have finished my homework.', 'She has visited Paris twice.'],
    tip: 'already, yet, ever, never 常和现在完成时连用。',
    level: 'ket',
  },
  {
    id: 'gl_passive_voice',
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
