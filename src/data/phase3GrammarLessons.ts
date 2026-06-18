import type { GrammarLesson } from '@/types';

// 第三阶段 KET 语法查漏拔高（6 课时）
export const phase3GrammarLessons: GrammarLesson[] = [
  {
    id: 'gl3_tense_overview',
    title: '四大时态辨析',
    content: 'KET 重点考查四大时态：一般现在时（习惯/事实）、现在进行时（此刻正在进行）、一般过去时（过去动作）、现在完成时（过去对现在的影响）。解题关键是识别时间标志词，并理解动作发生的时间关系。',
    examples: [
      'I usually get up at 7.（一般现在时）',
      'Look! The dog is sleeping.（现在进行时）',
      'I visited Paris last year.（一般过去时）',
      'I have lost my keys.（现在完成时）',
    ],
    tip: '看到 since / ever / already / yet 优先考虑现在完成时；看到 Look! / Listen! / now 优先考虑现在进行时。',
    level: 'ket',
  },
  {
    id: 'gl3_tense_traps',
    title: '易错时态场景运用',
    content: '常见失分点：现在完成时与一般过去时的混淆；现在进行时表将来；过去进行时与 when / while 的搭配；过去完成时强调“过去的过去”。要注意上下文语境和动作发生的时间先后。',
    examples: [
      'Have you ever been to Beijing?（现在完成时：经历）',
      'I went to Beijing last summer.（一般过去时：具体过去）',
      'I was cooking when he called.（过去进行时）',
      'By the time we arrived, the film had started.（过去完成时）',
    ],
    tip: 'by the time + 过去时，主句常用过去完成时 had done。',
    level: 'ket',
  },
  {
    id: 'gl3_pronoun_traps',
    title: '代词易错点专项',
    content: '重点掌握：人称代词主格/宾格；物主代词形容词性与名词性；反身代词；关系代词 who / which / that；不定代词 some / any / no / every 系列。易错点在于介词后宾格、反身代词指代以及关系代词的选择。',
    examples: [
      'Between you and me, he is wrong.（介词后宾格）',
      'The boy hurt himself.（反身代词）',
      'This is the book which I bought.（which 指物）',
      'None of the answers is correct.（none of 可接单数动词）',
    ],
    tip: 'who 指人作主语，which 指物，whose 表所属。',
    level: 'ket',
  },
  {
    id: 'gl3_preposition_traps',
    title: '介词易错点专项',
    content: 'KET 介词考查集中在时间介词（in / on / at）、地点介词以及固定搭配。要特别注意具体日期前用 on，节日/时刻前用 at；常见动词短语如 look forward to、worry about、be good at 等。',
    examples: [
      'on Monday morning（具体某天上午用 on）',
      'at Christmas（节日期间用 at）',
      'I am good at swimming.',
      'She is looking forward to seeing you.',
    ],
    tip: 'look forward to 中的 to 是介词，后面接 doing。',
    level: 'ket',
  },
  {
    id: 'gl3_conjunction_determiner',
    title: '连词与限定词易错点',
    content: '连词要区分并列连词（and / but / or / so）和从属连词（because / although / if / unless / when）。限定词重点区分 some / any、much / many、few / a few、little / a little、each / every、neither / none 的用法。',
    examples: [
      'Although it rained, we went out.（although 不与 but 连用）',
      'Hurry up, or you will be late.（or 表示“否则”）',
      'I have few friends here.（few 含否定：几乎没有）',
      'Each student has a book. / Every student has a book.',
    ],
    tip: 'although 和 but 不能同时出现在一个句子中。',
    level: 'ket',
  },
  {
    id: 'gl3_transformation',
    title: '句式转换专项',
    content: 'KET 常见句式转换包括：主动变被动、直接引语变间接引语、祈使句转 told / asked sb to do、疑问句转宾语从句、such...that 与 so...that 转换。转换时要注意时态、人称和语序的变化。',
    examples: [
      'Someone stole my bike. → My bike was stolen.',
      '"I am busy," she said. → She said she was busy.',
      '"Don\'t run," he said. → He told us not to run.',
      'It is such a nice day. → It is so nice a day.',
    ],
    tip: '间接引语中，现在时要退一步变过去时；一般过去时常变为过去完成时。',
    level: 'ket',
  },
  {
    id: 'gl3_subject_verb_agreement',
    title: '主谓一致专项',
    content: '主谓一致是 KET 高频失分点。重点掌握：neither...nor... / either...or... 就近原则；the number of 与 a number of 的区别；there be 就近原则；动名词/不定式短语作主语谓语用单数；集体名词的用法。',
    examples: [
      'Neither Tom nor his parents are coming.（就近原则）',
      'The number of students is 30.（the number of + 单数谓语）',
      'A number of students are absent.（a number of + 复数谓语）',
      'There is some bread and two apples.（就近原则）',
    ],
    tip: 'the number of 强调“数量”，谓语用单数；a number of 强调“许多”，谓语用复数。',
    level: 'ket',
  },
  {
    id: 'gl3_error_correction',
    title: '语法改错专项',
    content: '语法改错综合考查时态、语态、代词、介词、主谓一致等知识点。做题时要逐词排查：动词形式是否正确（第三人称单数、时态、情态动词后原形）、名词单复数、主谓是否一致、固定搭配是否准确。',
    examples: [
      'She don\'t like apples. → She doesn\'t like apples.',
      'He can speaks English. → He can speak English.',
      'The news are exciting. → The news is exciting.',
      'She asked me where do I live. → She asked me where I lived.',
    ],
    tip: '看到 can / must / should 等情态动词，后面动词一定是原形。',
    level: 'ket',
  },
];
