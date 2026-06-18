export interface ExamTip {
  id: string;
  title: string;
  category: 'reading' | 'listening' | 'writing' | 'speaking' | 'strategy';
  content: string;
  points: string[];
  examples?: string[];
}

// 第三阶段 KET 应试技巧固化（8 课时）
export const phase3ExamTips: ExamTip[] = [
  {
    id: 'tip_read_analyze',
    category: 'reading',
    title: '阅读审题三步法',
    content: 'KET 阅读理解时间紧、信息密，审题方法决定正确率。建议采用“划关键词→定位原文→比对选项”三步法，避免凭印象答题。',
    points: [
      '先看题干，划出疑问词（what / when / where / why / how）和关键名词。',
      '带着关键词快速扫读原文，定位到对应段落或句子。',
      '回到选项，逐一与原文比对，排除与原文矛盾的选项。',
      '注意同义替换，正确选项往往是原文的改写，而非原词照搬。',
    ],
    examples: [
      '原文：The museum closes at 5 p.m. on weekdays. 题干：When does the museum close on weekdays? 正确选项：At 5 p.m.',
      '原文：Tom enjoys playing football. 选项：Tom likes football.（like = enjoy 同义替换）',
    ],
  },
  {
    id: 'tip_read_distractor',
    category: 'reading',
    title: '阅读干扰项排除',
    content: '干扰项通常有三种：原文原词但答非所问、部分信息拼凑、无中生有。掌握排除技巧能快速提高正确率。',
    points: [
      '“原词陷阱”：选项中的词在原文出现，但与题干问题无关，优先排除。',
      '“半对半错”：选项前半句正确，后半句与原文矛盾，需整体判断。',
      '“无中生有”：选项内容原文未提及，利用常识 tempting 考生，不要选。',
      '极端词慎选：always / never / all / none 等绝对化表达常为干扰项。',
    ],
    examples: [
      '题干问时间，选项提到原文的某个人名——这是答非所问。',
      '原文说“Some students like maths”，选项说“All students like maths”——极端词 all 错误。',
    ],
  },
  {
    id: 'tip_listen_analyze',
    category: 'listening',
    title: '听力审题与预判',
    content: '听力只能听一遍，审题和预判尤为重要。听前 20 秒要快速读题、预测内容、划出关键信息。',
    points: [
      '提前读题干和选项，预测录音主题（人物、地点、活动、时间）。',
      '划出数字、时间、地点、人物关系等高频考点词。',
      '第一遍抓大意，确认主题；第二遍核对细节，锁定答案。',
      '遇到没听清的内容，不要停留，立即准备下一题。',
    ],
    examples: [
      '选项含 £25 / £35 / £45，听时重点抓价格数字。',
      '选项是不同活动，听时重点抓动词（visit / play / watch）。',
    ],
  },
  {
    id: 'tip_listen_distractor',
    category: 'listening',
    title: '听力干扰项排除',
    content: '听力干扰项常利用“信息混淆”“时间错位”“人物张冠李戴”来设置。要边听边做笔记，避免被带偏。',
    points: [
      '注意否定词：not / never / no / don\'t 等会彻底改变句意。',
      '警惕时间混淆：录音可能提到多个时间，只有一个是答案。',
      '人物与活动要对应准确，避免张冠李戴。',
      '同义表达要敏感，如 by bus = take the bus。',
    ],
    examples: [
      '录音：The train leaves at 10:15, not 10:45. 答案：10:15。',
      '录音：Tom plays basketball and Jack watches films. 选项中 Jack plays basketball 为干扰项。',
    ],
  },
  {
    id: 'tip_write_format',
    category: 'writing',
    title: 'KET 写作四大文体格式',
    content: 'KET 写作必考邮件、通知、故事、留言四种文体。格式规范是得分基础，每种文体都有固定套路。',
    points: [
      '邮件：开头 Hi / Hello + 名，结尾 Best / See you / Thanks + 署名。',
      '通知：标题 NOTICE 居中或顶格，正文写清时间/地点/原因，落款部门或姓名。',
      '故事：按开头续写，使用过去时，情节完整（开端-发展-结尾）。',
      '留言：简短说明原因、时间、地点，语气礼貌，常用 Sorry / Can we...?',
    ],
    examples: [
      '邮件开头：Hi Ben, 结尾：Best, Li Hua',
      '通知落款：School Library / The English Club',
    ],
  },
  {
    id: 'tip_write_score',
    category: 'writing',
    title: '写作高分句型与行文逻辑',
    content: '写作想拿高分，不仅要覆盖所有要点，还要使用连接词和丰富句式，保持时态一致。',
    points: [
      '使用连接词：because, and, but, so, then, first, finally。',
      '适当使用从句：I like... because..., If..., I will...。',
      '覆盖题目所有要点，写完后逐项核对。',
      '检查时态、拼写、标点和词数。',
    ],
    examples: [
      '高分句：I would love to come because I am interested in animals.',
      '高分句：If it rains, we can go to the museum instead.',
    ],
  },
  {
    id: 'tip_speak_logic',
    category: 'speaking',
    title: '口语表达逻辑与流畅度',
    content: '口语评分看重流利度、词汇和语法。回答问题时不要只蹦单词，要用完整句子并适当扩展。',
    points: [
      '用完整句子回答，并补充 1-2 句细节或原因。',
      '使用连接词：because, and, but, also, for example。',
      '主题陈述先给主题句，再讲原因/例子，最后总结感受。',
      '互动交流多用 What about you? / Would you like to...? / That sounds...',
    ],
    examples: [
      'Q: What do you like to eat? A: I like fruit because it is healthy. My favourite is apples.',
      '主题陈述：My favourite season is summer. I like it because I can swim and eat ice cream. Summer makes me happy.',
    ],
  },
  {
    id: 'tip_time_manage',
    category: 'strategy',
    title: 'KET 答题时间分配',
    content: 'KET 考试时间有限，合理分配时间是稳定发挥的关键。建议平时练习就按考试时间计时，培养节奏感。',
    points: [
      '阅读与写作：60 分钟，建议阅读 30-35 分钟，写作 20-25 分钟。',
      '听力：约 30 分钟，录音播放时专注听，提前看题。',
      '口语：约 8-10 分钟，提前准备自我介绍和常见话题。',
      '遇到难题先标记，全部完成后再回头检查，不要在一题上耗时过长。',
    ],
    examples: [
      '完形填空每题控制在 1 分钟以内。',
      '写作前先用 2 分钟列要点，再动笔。',
    ],
  },
  {
    id: 'tip_answer_standard',
    category: 'strategy',
    title: '答题规范与检查清单',
    content: '规范答题能减少不必要的失分。涂卡、书写、拼写、大小写等细节都可能影响成绩。',
    points: [
      '选择题答案要涂在指定位置，题号与选项对应清楚。',
      '填空题注意大小写和拼写，特别是人名、地名。',
      '写作部分字迹工整，段落清晰。',
      '检查清单：时态一致、主谓一致、拼写、标点、格式。',
    ],
    examples: [
      '填空：Paris 首字母必须大写。',
      '第三人称单数：He like → He likes。',
    ],
  },
  {
    id: 'tip_error_notebook',
    category: 'strategy',
    title: '专属错题本与薄弱点攻克',
    content: '建立错题本是提分最快的方式。每次练习后记录错题，分析错因，定期复习，才能避免重复犯错。',
    points: [
      '记录错题：题目、错因、正确思路、涉及知识点。',
      '分类整理：时态、介词、词汇、听力细节、写作格式等。',
      '总结规律：哪些类型错误出现频率最高，重点突破。',
      '定期复习：每周回顾一次错题，直到能独立做对为止。',
      '针对薄弱点做专项练习，如介词弱就集中刷介词题。',
    ],
    examples: [
      '错题卡：I have finished my homework yesterday. → 错因：现在完成时不能与 yesterday 连用。',
      '错题卡：The news are exciting. → 错因：news 不可数，谓语用单数。',
    ],
  },
];

export const examTipCategories: { key: ExamTip['category']; label: string }[] = [
  { key: 'reading', label: '阅读技巧' },
  { key: 'listening', label: '听力技巧' },
  { key: 'writing', label: '写作技巧' },
  { key: 'speaking', label: '口语技巧' },
  { key: 'strategy', label: '应试策略' },
];
