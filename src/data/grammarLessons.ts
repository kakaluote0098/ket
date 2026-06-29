import type { GrammarLesson } from '@/types';
import { phase3GrammarLessons } from './phase3GrammarLessons';

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
    content: '名词单数表示“一个”人、事物或动物；名词复数表示“两个及以上”。当我们数东西的数量大于一时，就要用复数形式。一般情况下直接加 -s；以 s, x, ch, sh 结尾加 -es；以辅音字母 + y 结尾变 y 为 i 加 -es；部分名词不规则变化，需要特别记忆。',
    examples: ['book → books', 'box → boxes', 'watch → watches', 'baby → babies', 'child → children', 'foot → feet'],
    tip: 'sheep, fish 等名词单复数同形。',
    videoUrl: 'https://youtu.be/f5VZYFJCpFc',
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
    content: '一般现在时用来描述经常发生、习惯性的动作，或者是永远成立的客观事实。比如每天早上刷牙、太阳从东方升起。当主语是 he / she / it 或单个第三人称时，动词一般要加 -s 或 -es；其他人称用动词原形。',
    examples: ['I go to school at seven.', 'He walks to school.', 'She watches TV every day.', 'They like English.'],
    tip: '否定句和疑问句需要借助 do / does。He likes → He doesn\'t like / Does he like?',
    videoUrl: 'https://www.youtube.com/watch?v=3j3D3P2GfjE',
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

  // KET 语法体系升级（8 课时）
  {
    id: 'gl_present_continuous',
    title: '现在进行时',
    content: '现在进行时表示说话时正在发生的动作，或者当前一段时间内正在进行的动作。结构是“主语 + am / is / are + 动词 -ing”。当看到 now, look, listen, at the moment 这些词时，通常要用现在进行时。',
    examples: ['I am doing my homework now.', 'Look! The dog is running.', 'They are watching TV at the moment.'],
    tip: '不要与一般现在时混淆：一般现在时表示习惯，现在进行时表示正在进行。',
    videoUrl: 'https://www.youtube.com/watch?v=0-tku3eRs4I',
    level: 'mover',
  },
  {
    id: 'gl_past_simple',
    title: '一般过去时（肯定句）',
    content: '一般过去时表示过去某个时间发生的动作或存在的状态。规则动词一般在词尾加 -ed；不规则动词有固定过去式，需要特别记忆，如 go → went, eat → ate, see → saw。',
    examples: ['I played football yesterday.', 'She visited her grandma last week.', 'We went to the zoo last Sunday.'],
    tip: 'last week / yesterday / ago 是一般过去时的常见标志。',
    videoUrl: 'https://www.youtube.com/watch?v=3j3D3P2GfjE',
    level: 'flyer',
  },
  {
    id: 'gl_past_simple_questions',
    title: '一般过去时（否定句与疑问句）',
    content: '一般过去时的否定句和疑问句要借助 did。否定句：did not / didn\'t + 动词原形；疑问句：Did + 主语 + 动词原形？',
    examples: ['He did not (didn\'t) go to school.', 'Did you finish your homework? Yes, I did. / No, I didn\'t.'],
    tip: '用了 did 之后，原来的动词要变回原形。不要说 He didn\'t went，而要说 He didn\'t go。',
    level: 'flyer',
  },
  {
    id: 'gl_adjective_adverb',
    title: '形容词与副词原级',
    content: '形容词修饰名词，常放在名词前；副词修饰动词、形容词或其他副词，常放在动词后。很多副词由形容词加 -ly 构成。',
    examples: ['a happy boy', 'She sings beautifully.', 'He runs fast.'],
    tip: 'good 的副词是 well，不是 goodly。',
    level: 'flyer',
  },
  {
    id: 'gl_comparative',
    title: '形容词与副词比较级',
    content: '两者比较用比较级。短词加 -er，长词前加 more；比较级后常接 than。',
    examples: ['Tom is taller than Jim.', 'This book is more interesting than that one.', 'She runs faster than me.'],
    tip: 'good → better, bad → worse, far → farther / further 是不规则变化。',
    level: 'flyer',
  },
  {
    id: 'gl_modals',
    title: '情态动词 can / must / should',
    content: 'can 表示能力或请求；must 表示必须或肯定推测；should 表示建议。情态动词后接动词原形，无人称变化。',
    examples: ['I can swim.', 'You must finish your homework.', 'We should help others.'],
    tip: '情态动词的否定：can not = can\'t, must not = mustn\'t, should not = shouldn\'t。',
    level: 'flyer',
  },
  {
    id: 'gl_conjunctions',
    title: '基础并列句',
    content: '用 and, but, or, so 把两个简单句连接起来。and 表示并列，but 表示转折，or 表示选择，so 表示结果。',
    examples: ['I like apples and she likes oranges.', 'He is young but he works hard.', 'Hurry up, or you will be late.', 'It rained, so we stayed at home.'],
    tip: '逗号常放在并列连词前面。',
    level: 'flyer',
  },
  {
    id: 'gl_adverbial_clauses',
    title: '简单状语从句入门',
    content: 'when 引导时间状语从句，because 引导原因状语从句，if 引导条件状语从句。它们让句子表达更丰富。',
    examples: ['I was reading when my mother came in.', 'He stayed at home because it rained.', 'If you try hard, you will succeed.'],
    tip: 'if 条件句中，主句用一般将来时，从句用一般现在时（主将从现）。',
    level: 'ket',
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

  // ==================== 第三阶段 KET 语法查漏拔高（6 课时）====================
  ...phase3GrammarLessons,
];

export const getGrammarLessonsByLevel = (level?: string) =>
  level ? grammarLessons.filter((l) => l.level === level) : grammarLessons;

export const getGrammarLessonById = (id: string) => grammarLessons.find((l) => l.id === id);
