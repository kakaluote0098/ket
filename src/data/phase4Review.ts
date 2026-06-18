export interface ReviewTopic {
  id: string;
  title: string;
  category: 'vocabulary' | 'phrase' | 'grammar' | 'pattern' | 'blindspot' | 'error';
  content: string;
  points: string[];
  examples?: string[];
}

// 第四阶段 全考点复盘梳理（4 课时）
export const phase4ReviewTopics: ReviewTopic[] = [
  {
    id: 'review_vocab_core',
    category: 'vocabulary',
    title: '核心词汇全复盘',
    content: '系统回顾全年积累的核心词汇，按主题分类强化记忆，重点关注 KET 高频词、易混淆词和多义词。',
    points: [
      '按主题复习：学校、家庭、食物、动物、天气、出行、运动、节日等。',
      '重点区分易混词：bring / take, borrow / lend, say / tell / speak / talk。',
      '掌握一词多义：book（书/预订）、bank（银行/河岸）、run（跑/经营）。',
      '复习词汇搭配和固定短语，提升活用能力。',
    ],
    examples: [
      'bring 表示“带来”，take 表示“带走”。',
      'look for 寻找，look after 照顾，look forward to 期待。',
    ],
  },
  {
    id: 'review_phrases',
    category: 'phrase',
    title: '高频短语与固定搭配',
    content: '短语和固定搭配是 KET 常考失分点。复盘时要分类整理动词短语、介词短语和常用句型。',
    points: [
      '动词短语：look after, turn on, get up, give up, put on, take off。',
      '介词短语：at night, in the morning, on time, by bus, with pleasure。',
      '形容词/名词搭配：be good at, be interested in, be afraid of, be famous for。',
      '注意短语中代词的位置：turn it on / put them away。',
    ],
    examples: [
      'be good at + doing：She is good at swimming.',
      'look forward to + doing：I look forward to seeing you.',
    ],
  },
  {
    id: 'review_grammar_tenses',
    category: 'grammar',
    title: '四大时态与易错场景',
    content: '一般现在时、现在进行时、一般过去时、现在完成时是 KET 核心时态。复盘时要清晰区分标志词和使用场景。',
    points: [
      '一般现在时：习惯、事实、经常性动作；标志词 every day, usually, often。',
      '现在进行时：此刻正在进行的动作；标志词 now, look, listen, at the moment。',
      '一般过去时：过去发生的具体动作；标志词 yesterday, last week, ago。',
      '现在完成时：过去动作对现在的影响；标志词 since, ever, already, yet, just。',
      '易错点：现在完成时不能与 yesterday 等具体过去时间连用。',
    ],
    examples: [
      'I have lived here since 2020.（现在完成时 + since）',
      'I visited Beijing last year.（一般过去时 + last year）',
    ],
  },
  {
    id: 'review_grammar_parts',
    category: 'grammar',
    title: '代词、介词、连词、限定词复盘',
    content: '这四类词是 KET 语法的高频失分点。复盘时要系统梳理易混点和固定搭配。',
    points: [
      '代词：人称代词主格/宾格、物主代词、反身代词、关系代词 who / which / that。',
      '介词：时间介词 in / on / at，地点介词，固定搭配 be good at / worry about / look forward to。',
      '连词：并列连词 and / but / or / so，从属连词 because / although / if / unless / when。',
      '限定词：some / any, much / many, few / a few, little / a little, each / every, neither / none。',
    ],
    examples: [
      'Neither of the answers is correct.（neither 接单数谓语）',
      'Although it rained, we went out.（although 不与 but 连用）',
    ],
  },
  {
    id: 'review_sentence_patterns',
    category: 'pattern',
    title: '核心句型与句式转换',
    content: '掌握 KET 常考句型及转换方法，包括 there be、比较级、被动语态、宾语从句和间接引语。',
    points: [
      'There be 句型：注意就近原则和时态变化。',
      '比较级与最高级：短词加 -er，长词加 more / most，不规则变化需牢记。',
      '被动语态：be + 过去分词，时态体现在 be 动词上。',
      '宾语从句：用陈述语序，注意时态呼应。',
      '间接引语：人称、时态、时间状语都要相应变化。',
    ],
    examples: [
      'There is some bread and two apples.（就近原则）',
      'Someone stole my bike. → My bike was stolen.',
      '"I am busy," she said. → She said she was busy.',
    ],
  },
  {
    id: 'review_blindspots',
    category: 'blindspot',
    title: '冷门考点与知识盲区',
    content: '冷门考点虽然出现频率低，但一旦考到容易失分。复盘时要查漏补缺，覆盖容易被忽略的知识点。',
    points: [
      '不可数名词：news, advice, information, furniture, luggage 等没有复数形式。',
      '集体名词：family, team, class 等单复数同形或视意义而定。',
      '情态动词表推测：must 表示肯定推测，can\'t 表示否定推测。',
      'so / such 用法：so + 形容词，such + a/an + 形容词 + 名词。',
      '反意疑问句：前肯后否，前否后肯，注意 be 动词和助动词的使用。',
    ],
    examples: [
      'The news is exciting.（news 不可数，谓语用单数）',
      'It is so nice a day. = It is such a nice day.',
    ],
  },
  {
    id: 'review_high_freq_errors',
    category: 'error',
    title: '高频易错点专项突破',
    content: '总结 KET 考试中最常见的错误类型，集中突破，避免在考场上重复犯错。',
    points: [
      '第三人称单数：He / She / It 后动词要加 -s / -es。',
      '情态动词后接动词原形：can / must / should + do。',
      '现在完成时标志词：since, ever, never, already, yet。',
      '主谓一致：the number of + 单数，a number of + 复数。',
      '宾语从句用陈述语序：She asked me where I lived.',
    ],
    examples: [
      '错误：He can speaks English. 正确：He can speak English.',
      '错误：She don\'t like apples. 正确：She doesn\'t like apples.',
    ],
  },
  {
    id: 'review_error_patterns',
    category: 'error',
    title: '错题规律归纳与针对性补漏',
    content: '通过错题本归纳失分规律，找到自己的薄弱环节，进行针对性训练，实现考前最后冲刺。',
    points: [
      '按错误类型分类：时态、介词、词汇、主谓一致、听力细节、写作格式。',
      '统计高频错误类型，优先攻克占比最高的 2-3 类。',
      '针对薄弱点做专项刷题，如介词弱就集中练习介词题。',
      '考前一周每天回顾错题，强化正确思路。',
      '模拟真实考试环境，训练时间分配和答题节奏。',
    ],
    examples: [
      '错题规律：介词题 40% 错 → 集中复习时间/地点介词和固定搭配。',
      '错题规律：听力数字题常错 → 专项训练数字、价格、时间抓取。',
    ],
  },
];

export const reviewCategories: { key: ReviewTopic['category']; label: string }[] = [
  { key: 'vocabulary', label: '词汇' },
  { key: 'phrase', label: '短语' },
  { key: 'grammar', label: '语法' },
  { key: 'pattern', label: '句型' },
  { key: 'blindspot', label: '盲区' },
  { key: 'error', label: '易错点' },
];
