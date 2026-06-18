import type { CourseUnit, Level } from '@/types';

export const levels: { key: Level; label: string; description: string; color: string }[] = [
  {
    key: 'starter',
    label: 'Starter',
    description: '零基础启蒙，认识简单单词和句型',
    color: '#06D6A0',
  },
  {
    key: 'mover',
    label: 'Mover',
    description: '日常表达，建立基础语法框架',
    color: '#118AB2',
  },
  {
    key: 'flyer',
    label: 'Flyer',
    description: '扩展词汇，理解更复杂的短文',
    color: '#7B61FF',
  },
  {
    key: 'ket',
    label: 'KET 预备',
    description: '冲刺剑桥 KET，综合能力训练',
    color: '#FFD166',
  },
];

export const courseUnits: CourseUnit[] = [
  // Starter
  { id: 'u1', title: '我的家', level: 'starter', order: 1, wordIds: ['w1', 'w2', 'w3', 'w4'], grammarIds: ['g1'], grammarLessonIds: ['gl1'], listeningIds: ['l1'] },
  { id: 'u2', title: '我的学校', level: 'starter', order: 2, wordIds: ['w5', 'w6', 'w7', 'w8'], grammarIds: ['g2'], grammarLessonIds: ['gl2'], listeningIds: ['l2'] },
  { id: 'u3', title: '颜色与食物', level: 'starter', order: 3, wordIds: ['w9', 'w10', 'w1'], grammarIds: ['g3'], grammarLessonIds: ['gl3'], listeningIds: ['l1'] },

  // Mover
  { id: 'u4', title: '我的爱好', level: 'mover', order: 1, wordIds: ['w11', 'w12', 'w13', 'w14'], grammarIds: ['g4'], grammarLessonIds: ['gl4'], listeningIds: ['l3'] },
  { id: 'u5', title: '日常生活', level: 'mover', order: 2, wordIds: ['w15', 'w16', 'w17', 'w18'], grammarIds: ['g5'], grammarLessonIds: ['gl5'], listeningIds: ['l4'] },
  { id: 'u6', title: '比较与描述', level: 'mover', order: 3, wordIds: ['w19', 'w20', 'w11'], grammarIds: ['g6'], grammarLessonIds: ['gl6'], listeningIds: ['l3'] },

  // Flyer
  { id: 'u7', title: '故事时间', level: 'flyer', order: 1, wordIds: ['w21', 'w22', 'w23', 'w24'], grammarIds: ['g7'], grammarLessonIds: ['gl7'], listeningIds: ['l5'] },
  { id: 'u8', title: '我们的世界', level: 'flyer', order: 2, wordIds: ['w25', 'w26', 'w27', 'w28'], grammarIds: ['g8'], grammarLessonIds: ['gl8'], listeningIds: ['l6'] },
  { id: 'u9', title: '梦想与未来', level: 'flyer', order: 3, wordIds: ['w29', 'w30', 'w21'], grammarIds: ['g7'], grammarLessonIds: ['gl7', 'gl8'], listeningIds: ['l5'] },

  // KET
  { id: 'u10', title: '旅行计划', level: 'ket', order: 1, wordIds: ['w31', 'w32', 'w33', 'w34'], grammarIds: ['g9'], grammarLessonIds: ['gl9'], listeningIds: ['l7'] },
  { id: 'u11', title: '社交与礼仪', level: 'ket', order: 2, wordIds: ['w35', 'w36', 'w37', 'w38'], grammarIds: ['g10'], grammarLessonIds: ['gl10'], listeningIds: ['l8'] },
  { id: 'u12', title: 'KET 综合训练', level: 'ket', order: 3, wordIds: ['w39', 'w40', 'w31'], grammarIds: ['g9', 'g10'], grammarLessonIds: ['gl9', 'gl10'], listeningIds: ['l7', 'l8'] },
];

export const getUnitsByLevel = (level: Level) =>
  courseUnits.filter((u) => u.level === level).sort((a, b) => a.order - b.order);
