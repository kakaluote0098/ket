export interface HighScoreModel {
  id: string;
  category: 'writing' | 'speaking';
  title: string;
  type?: string;
  content: string;
  highlights: string[];
  tips: string[];
}

export interface SentencePattern {
  id: string;
  category: 'writing' | 'speaking';
  pattern: string;
  meaning: string;
  example: string;
}

// 第四阶段 高分打磨提升（6 课时）
export const highScoreWritingModels: HighScoreModel[] = [
  {
    id: 'hsw_email_1',
    category: 'writing',
    title: '高分邮件范文：接受邀请',
    type: '邮件',
    content: "Hi Sam,\n\nThank you so much for your invitation. I'd love to go to the cinema with you next Saturday. I really enjoy watching cartoons, so the film sounds perfect. Shall we meet at the cinema gate at 2 p.m.? I can bring some snacks and drinks.\n\nI'm looking forward to seeing you then!\n\nBest,\nLi Hua",
    highlights: [
      '开头表达感谢，语气礼貌自然。',
      '使用 so, because 等连接词丰富句式。',
      '提出具体时间建议，覆盖题目要点。',
      '结尾使用 look forward to 高分表达。',
    ],
    tips: [
      '邮件称呼用 Hi / Hello + 名字，结尾用 Best / See you / Thanks + 署名。',
      '覆盖题目所有要点，每个要点至少一句话。',
      '适当使用高级连接词：because, so, but, however, also。',
      '注意时态一致性，避免基础语法错误。',
    ],
  },
  {
    id: 'hsw_notice_1',
    category: 'writing',
    title: '高分通知范文：活动通知',
    type: '通知',
    content: "NOTICE\n\nEnglish Club Meeting\n\nThe English Club will hold a meeting in Room 301 this Friday afternoon. The meeting will start at 3:30 p.m. and finish at 5:00 p.m. We are going to talk about our plans for the school trip.\n\nAll members are welcome. Please come on time and bring your notebooks.\n\nEnglish Club",
    highlights: [
      '标题居中，信息醒目。',
      '包含活动名称、时间、地点、内容等关键信息。',
      '使用将来时 will / be going to 表达计划。',
      '结尾有署名，格式规范。',
    ],
    tips: [
      '通知标题可用 NOTICE 或活动名称，居中或顶格。',
      '正文简明扼要，写清 5W1H（what, when, where, who, why, how）。',
      '语气正式，避免口语化表达。',
      '落款写上组织或部门名称。',
    ],
  },
  {
    id: 'hsw_story_1',
    category: 'writing',
    title: '高分故事范文：雨天奇遇',
    type: '故事',
    content: "It was a rainy Saturday morning. Tom was bored at home, so he decided to visit his grandmother. On the way, he saw a small dog sitting alone under a tree. It was wet and sad.\n\nTom felt sorry for the dog, so he took out his umbrella and walked closer. He found a phone number on the dog's collar. He called the owner and waited with the dog. Soon, a happy woman came and thanked Tom a lot.\n\nWhen Tom finally arrived at his grandmother's house, he told her the story. She smiled and said, 'You are a kind boy, Tom.' That rainy day became Tom's favourite Saturday.",
    highlights: [
      '情节完整：开端-发展-高潮-结尾。',
      '使用 so, when, soon 等连接词推动情节。',
      '描写细腻，有环境、动作和心理描写。',
      '时态一致，全文使用一般过去时。',
    ],
    tips: [
      '故事要有清晰的开端、发展和结尾。',
      '使用过去时态，注意不规则动词。',
      '加入细节描写，让故事更生动。',
      '使用连接词：first, then, suddenly, finally, so。',
    ],
  },
  {
    id: 'hsw_note_1',
    category: 'writing',
    title: '高分留言范文：改期约定',
    type: '留言',
    content: "Dear Lucy,\n\nI'm really sorry, but I can't go to the library with you this afternoon. My mother is ill, so I have to stay at home and look after her.\n\nCan we go next Saturday morning instead? I'll be free then. Please let me know if it is OK for you.\n\nSorry again.\n\nMei",
    highlights: [
      '开头直接说明原因，表达歉意。',
      '提出替代方案，体现沟通能力。',
      '使用 Can we...? / Please let me know 等礼貌表达。',
      '留言简洁但信息完整。',
    ],
    tips: [
      '留言要简短，但必须包含原因、替代方案和歉意。',
      '使用 Can we...? / Would you like to...? 等委婉表达。',
      '结尾常用 Sorry again / See you / Thanks。',
      '注意署名的正确位置。',
    ],
  },
];

export const highScoreSpeakingModels: HighScoreModel[] = [
  {
    id: 'hss_qa_1',
    category: 'speaking',
    title: '高分问答：周末活动',
    type: '一对一问答',
    content: "At weekends, I usually do my homework in the morning and play basketball with my friends in the afternoon. I really like basketball because it makes me strong and happy. Sometimes, I also watch films or read books with my family.",
    highlights: [
      '用完整句子回答，避免单词堆砌。',
      '使用 because 补充原因。',
      '使用 sometimes / also 等词扩展内容。',
      '语音语调自然，语速适中。',
    ],
    tips: [
      '回答问题时先给直接答案，再补充细节。',
      '使用连接词：because, and, but, also, sometimes。',
      '保持眼神交流，面带微笑。',
      '没听清时可以礼貌请考官重复：Could you repeat that, please?',
    ],
  },
  {
    id: 'hss_topic_1',
    category: 'speaking',
    title: '高分主题陈述：最喜欢的动物',
    type: '主题陈述',
    content: "My favourite animal is the panda. Pandas are black and white, and they look very cute. They live in China and eat bamboo. I like pandas because they are friendly and a little bit lazy. I think pandas are special because they are a symbol of China. I hope I can see real pandas in Chengdu one day.",
    highlights: [
      '主题句清晰，开篇点题。',
      '从外貌、食物、性格等多角度描述。',
      '使用 I think / I hope 等表达个人观点。',
      '结尾自然，表达愿望。',
    ],
    tips: [
      '主题陈述采用“主题句 + 细节 + 总结/感受”结构。',
      '多用形容词和具体例子丰富内容。',
      '适当使用 I think, I believe, In my opinion。',
      '注意发音清晰，重音准确。',
    ],
  },
  {
    id: 'hss_interactive_1',
    category: 'speaking',
    title: '高分互动交流：周末计划',
    type: '互动交流',
    content: "A: What are you going to do this weekend?\nB: I'm going to visit my grandparents on Saturday. They live in the countryside. What about you?\nA: I'm going to see a film with my brother.\nB: That sounds interesting. Which film are you going to watch?\nA: We're going to watch a cartoon. Would you like to join us?\nB: Sure, I'd love to. Thanks for asking!",
    highlights: [
      '对话自然，有问有答。',
      '使用 What about you? 延续话题。',
      '使用 That sounds... / Would you like to...? 等互动句型。',
      '一般将来时 be going to 使用准确。',
    ],
    tips: [
      '互动交流要积极回应对方，不要只回答自己的问题。',
      '使用反问句延续对话：What about you? / How about you?',
      '发出邀请或建议时用 Would you like to...? / Shall we...?',
      '注意语音语调，让对话更有交流感。',
    ],
  },
];

export const highScoreSentencePatterns: SentencePattern[] = [
  { id: 'hp_w_1', category: 'writing', pattern: "I'm looking forward to + doing", meaning: '期待做某事', example: "I'm looking forward to seeing you soon." },
  { id: 'hp_w_2', category: 'writing', pattern: "I'd love to + do", meaning: '我很愿意做某事', example: "I'd love to come to your party." },
  { id: 'hp_w_3', category: 'writing', pattern: "Can we... instead?", meaning: '我们能改到……吗？', example: 'Can we meet on Sunday instead?' },
  { id: 'hp_w_4', category: 'writing', pattern: "... because + 句子", meaning: '因为……', example: 'I like spring because the weather is nice.' },
  { id: 'hp_w_5', category: 'writing', pattern: "If..., I will...", meaning: '如果……，我会……', example: 'If it rains, I will stay at home.' },
  { id: 'hp_w_6', category: 'writing', pattern: "not only... but also...", meaning: '不仅……而且……', example: 'She is not only kind but also helpful.' },
  { id: 'hp_s_1', category: 'speaking', pattern: "In my opinion, ...", meaning: '在我看来……', example: 'In my opinion, maths is very useful.' },
  { id: 'hp_s_2', category: 'speaking', pattern: "I really like... because...", meaning: '我喜欢……因为……', example: 'I really like dogs because they are loyal.' },
  { id: 'hp_s_3', category: 'speaking', pattern: "That sounds + adj.", meaning: '听起来……', example: 'That sounds interesting.' },
  { id: 'hp_s_4', category: 'speaking', pattern: "What about you?", meaning: '你呢？', example: "I like football. What about you?" },
  { id: 'hp_s_5', category: 'speaking', pattern: "Could you repeat that, please?", meaning: '能请您重复一遍吗？', example: 'Could you repeat that, please?' },
  { id: 'hp_s_6', category: 'speaking', pattern: "I'm not sure, but I think...", meaning: '我不确定，但我认为……', example: "I'm not sure, but I think it's a good idea." },
];

export const pronunciationTips = [
  '注意 /θ/ 和 /s/ 的区别：think /θɪŋk/ 不要读成 sink /sɪŋk/。',
  '注意 /v/ 和 /w/ 的区别：very /ˈveri/ 不要读成 wary。',
  '注意词尾 -ed 的发音：清辅音后读 /t/，浊辅音后读 /d/，/t/ /d/ 后读 /ɪd/。',
  '注意第三人称单数 -s 的发音：/s/ /z/ /ɪz/ 根据前一个音选择。',
  '句子的重音通常落在实词（名词、动词、形容词、副词）上，虚词弱读。',
  '疑问句末尾用升调，陈述句和特殊疑问句用降调。',
];

export const nervousnessTips = [
  '考前深呼吸三次，放松肩膀和面部肌肉。',
  '把考官当成普通朋友，用自然语气交流。',
  '没听清问题时，礼貌请求重复，不要胡乱猜测。',
  '说得慢而清楚，比说得快但出错更好。',
  '即使说错了也不要慌张，继续说下去即可。',
  '平时多对着镜子练习，培养自信。',
];
