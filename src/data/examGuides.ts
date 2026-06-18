import type { ExamGuide } from '@/types';

export const examGuides: ExamGuide[] = [
  {
    id: 'exam_reading',
    module: 'reading',
    title: 'KET 阅读',
    duration: '30 分钟',
    parts: 5,
    score: '卷面满分 30 分，占 KET 总分 25%',
    rules: [
      '阅读部分共 5 个部分，总计 30 道小题。',
      '考生需要阅读通知、邮件、广告、短文等真实语篇。',
      '答案需要写在答题卡上，注意大小写和拼写。',
      '建议先读题目，再带着问题回原文找关键词。',
    ],
    questionTypes: [
      {
        name: '匹配题（Part 1）',
        description: '阅读 6 篇短信息（通知、标签、邮件等），从 3 个选项中选出与信息匹配的最佳答案。',
        tips: ['先看选项，划出关键词。', '回到原文逐句比对，避免主观猜测。', '注意同义替换，例如 cheap 可能对应 not expensive。'],
      },
      {
        name: '选择题（Part 2 & Part 3）',
        description: '阅读一篇短文或对话，根据内容选择正确答案。',
        tips: ['先读题干，了解需要找什么信息。', '按顺序在文中定位答案。', '排除明显错误的选项，缩小范围。'],
      },
      {
        name: '完形填空（Part 4 & Part 5）',
        description: '阅读一篇短文，选择正确的词汇或语法形式填空。',
        tips: ['通读全文，把握大意。', '根据上下文判断词义和语法形式。', '检查动词的时态、名词的单复数和介词搭配。'],
      },
    ],
    sample: {
      question: '短信息："Football practice is cancelled today because of rain." 题目：What should students do today? A. Go to football practice. B. Not go to football practice. C. Play football outside.',
      options: ['A. Go to football practice.', 'B. Not go to football practice.', 'C. Play football outside.'],
      answer: 'B. Not go to football practice.',
      explanation: 'because of rain 说明练习取消了，因此学生今天不应该去足球训练。',
    },
  },
  {
    id: 'exam_writing',
    module: 'writing',
    title: 'KET 写作',
    duration: '30 分钟',
    parts: 2,
    score: '卷面满分 30 分，占 KET 总分 25%',
    rules: [
      '写作部分共 2 个部分：Part 6 写邮件/便条，Part 7 看图写话。',
      '考生需要覆盖题目中给出的所有要点。',
      '注意书写工整、拼写正确、标点使用规范。',
      '字数要求：Part 6 至少 25 词，Part 7 至少 35 词。',
    ],
    questionTypes: [
      {
        name: '邮件/便条（Part 6）',
        description: '根据题目给出的 3 个要点，给朋友写一封邮件或便条。',
        tips: ['开头和结尾使用常见句式，如 Hi..., Thanks for...', '逐一回答题目中的 3 个要点。', '写完后检查人称、时态和拼写。'],
      },
      {
        name: '看图写话（Part 7）',
        description: '根据 3 张图片，用连贯的句子讲述一个小故事。',
        tips: ['按图片顺序描述，使用 then / next / after that 等连接词。', '故事需要包含人物、动作、时间和地点。', '使用一般过去时讲述已发生的事情。'],
      },
    ],
    sample: {
      question: '给朋友写一封邮件：1. 感谢对方的礼物。2. 说明你什么时候使用它。3. 邀请对方来你家玩。',
      answer: 'Hi Lily,\n\nThank you for the nice book. I read it every evening before bed. It is very interesting. Would you like to come to my home this Saturday? We can read together.\n\nBest,\nTom',
      explanation: '这封邮件回答了 3 个要点：感谢礼物、说明使用时间、邀请来玩。使用了简单句和常见连接词，符合 KET 写作要求。',
    },
  },
  {
    id: 'exam_listening',
    module: 'listening',
    title: 'KET 听力',
    duration: '约 30 分钟（含填涂答题卡时间）',
    parts: 5,
    score: '卷面满分 25 分，占 KET 总分 25%',
    rules: [
      '听力部分共 5 个部分，每段录音播放两遍。',
      '考生需要在听录音前快速浏览题目，划出关键词。',
      '第一遍理解大意，第二遍核对细节和答案。',
      '注意单词拼写、数字和时间的正确写法。',
    ],
    questionTypes: [
      {
        name: '选择题（Part 2 & Part 5）',
        description: '听一段对话或独白，从 3 个选项中选择正确答案。',
        tips: ['提前阅读题干和选项，预测可能内容。', '注意说话人的语气、时间和数字。', '不要听到一个关键词就选，要听完整个句子。'],
      },
      {
        name: '填空题（Part 4）',
        description: '听一段独白，填写缺失的单词或数字。',
        tips: ['根据空格前后的词判断需要填什么词性。', '注意名词单复数和动词形式。', '拼写必须正确，大小写通常不影响评分。'],
      },
      {
        name: '匹配题（Part 3）',
        description: '听一段长对话，将人物与活动、地点或物品进行匹配。',
        tips: ['先浏览所有选项，建立初步印象。', '注意每个人物的不同选择和态度。', '排除法可以帮助快速锁定答案。'],
      },
    ],
    sample: {
      question: '听力填空："The party starts at ______ on Saturday." 录音："The party starts at three o\'clock on Saturday."',
      answer: 'three o\'clock / 3 o\'clock / 3:00',
      explanation: '听到时间 three o\'clock 后，注意数字和时间表达的正确写法。',
    },
  },
  {
    id: 'exam_speaking',
    module: 'speaking',
    title: 'KET 口语',
    duration: '8-10 分钟',
    parts: 2,
    score: '卷面满分 25 分，占 KET 总分 25%',
    rules: [
      '口语考试由两位考生一组，与考官进行面对面交流。',
      '共分为两个部分：Part 1 考官问答，Part 2 考生协作讨论。',
      '评分标准包括语法、词汇、发音和互动交流。',
      '表达时要自信、礼貌，尽量多说，不要害怕犯错。',
    ],
    questionTypes: [
      {
        name: '自我介绍与考官问答（Part 1）',
        description: '考官会问关于个人信息、家庭、学校、兴趣爱好等方面的问题。',
        tips: ['用完整句子回答，不要只说一个词。', '听不懂时可以礼貌地请考官重复：Could you repeat that, please?', '准备一些常见话题的答案，如 hobbies, school, family。'],
      },
      {
        name: '协作讨论（Part 2）',
        description: '两位考生根据图片进行问答和讨论，通常围绕日常活动、地点或物品。',
        tips: ['积极与搭档互动，使用 What about you? Do you like...? 等句型。', '描述图片时要说清楚地点、人物和动作。', '表达自己的喜好并简单说明原因。'],
      },
    ],
    sample: {
      question: '考官问：What do you usually do after school?',
      answer: 'I usually do my homework first. Then I play basketball with my friends in the park. It is very fun.',
      explanation: '回答包含完整句子，说明了放学后的活动和原因，符合 Part 1 的回答要求。',
    },
  },
];

export const getExamGuideByModule = (module: ExamGuide['module']) =>
  examGuides.find((g) => g.module === module);
