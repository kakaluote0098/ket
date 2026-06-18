import type { GrammarQuestion } from '@/types';

export const grammarQuestions: GrammarQuestion[] = [
  {
    id: 'g1',
    question: 'I ___ a student.',
    options: ['am', 'is', 'are', 'be'],
    answer: 0,
    explanation: '第一人称 I 搭配 be 动词 am。',
    level: 'starter',
  },
  {
    id: 'g2',
    question: 'She ___ a red dress today.',
    options: ['wear', 'wears', 'wearing', 'to wear'],
    answer: 1,
    explanation: '第三人称单数主语 she 后面的动词要加 -s。',
    level: 'starter',
  },
  {
    id: 'g3',
    question: 'There ___ three books on the table.',
    options: ['is', 'are', 'was', 'be'],
    answer: 1,
    explanation: '后面的名词 three books 是复数，所以用 are。',
    level: 'starter',
  },
  {
    id: 'g4',
    question: 'Can you ___ me your pen?',
    options: ['lend', 'lends', 'lent', 'lending'],
    answer: 0,
    explanation: '情态动词 can 后面接动词原形。',
    level: 'mover',
  },
  {
    id: 'g5',
    question: 'I have lived here ___ 2019.',
    options: ['for', 'since', 'from', 'at'],
    answer: 1,
    explanation: 'since 用于表示从某个时间点开始。',
    level: 'mover',
  },
  {
    id: 'g6',
    question: 'This book is ___ than that one.',
    options: ['interesting', 'more interesting', 'most interesting', 'interestinger'],
    answer: 1,
    explanation: '多音节形容词的比较级用 more + 形容词原级。',
    level: 'mover',
  },
  {
    id: 'g7',
    question: 'If it rains tomorrow, I ___ at home.',
    options: ['stay', 'will stay', 'stayed', 'staying'],
    answer: 1,
    explanation: 'if 引导的条件状语从句，主句用一般将来时。',
    level: 'flyer',
  },
  {
    id: 'g8',
    question: 'She asked me where ___ from.',
    options: ['do I come', 'I come', 'I came', 'am I coming'],
    answer: 2,
    explanation: '宾语从句用陈述语序，且主句为过去时，从句也用过去时。',
    level: 'flyer',
  },
  {
    id: 'g9',
    question: 'By the time we arrived, the film ___.',
    options: ['started', 'has started', 'had started', 'starts'],
    answer: 2,
    explanation: '过去完成时表示在过去某一时间之前已经完成的动作。',
    level: 'ket',
  },
  {
    id: 'g10',
    question: 'Not only Tom but also his brothers ___ good at football.',
    options: ['is', 'are', 'was', 'were'],
    answer: 1,
    explanation: 'not only...but also... 遵循就近原则，brothers 是复数。',
    level: 'ket',
  },
];

export const getGrammarByLevel = (level?: string) =>
  level ? grammarQuestions.filter((q) => q.level === level) : grammarQuestions;
