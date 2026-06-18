export interface MockQuestion {
  id: string;
  question: string;
  options?: string[];
  answer?: number;
  explanation?: string;
  type: 'choice' | 'writing' | 'speaking';
  points?: number;
}

export interface MockExam {
  id: string;
  title: string;
  source: string;
  duration: number; // 总时长（分钟）
  parts: {
    id: string;
    name: string;
    duration: number;
    questions: MockQuestion[];
  }[];
}

// 第四阶段 全真计时模考（10 课时）
export const phase4MockExams: MockExam[] = [
  {
    id: 'mock_1',
    title: 'KET 全真模考一',
    source: '剑桥 KET 官方真题风格模拟',
    duration: 100,
    parts: [
      {
        id: 'reading_writing',
        name: '阅读与写作',
        duration: 60,
        questions: [
          {
            id: 'm1_rw_1',
            type: 'choice',
            question: 'There isn\'t ___ milk in the fridge.',
            options: ['some', 'any', 'a', 'the'],
            answer: 1,
            explanation: '否定句中用 any。',
            points: 1,
          },
          {
            id: 'm1_rw_2',
            type: 'choice',
            question: 'She ___ in this city since 2019.',
            options: ['lives', 'is living', 'lived', 'has lived'],
            answer: 3,
            explanation: 'since 2019 是现在完成时标志。',
            points: 1,
          },
          {
            id: 'm1_rw_3',
            type: 'choice',
            question: 'The book is ___ the table.',
            options: ['in', 'on', 'at', 'under'],
            answer: 1,
            explanation: 'on the table 表示在桌子上。',
            points: 1,
          },
          {
            id: 'm1_rw_4',
            type: 'choice',
            question: '___ you like pizza?',
            options: ['Do', 'Does', 'Are', 'Is'],
            answer: 0,
            explanation: '主语是 you，一般现在时疑问句用 Do 开头。',
            points: 1,
          },
          {
            id: 'm1_rw_5',
            type: 'choice',
            question: 'I prefer tea ___ coffee.',
            options: ['than', 'to', 'or', 'and'],
            answer: 1,
            explanation: 'prefer A to B 是固定搭配。',
            points: 1,
          },
          {
            id: 'm1_rw_6',
            type: 'writing',
            question: '请给你的朋友 Ben 写一封邮件（25-35 词）。邀请他下周六一起看电影，说明电影类型和时间。',
            points: 15,
          },
        ],
      },
      {
        id: 'listening',
        name: '听力',
        duration: 30,
        questions: [
          {
            id: 'm1_l_1',
            type: 'choice',
            question: '听录音，回答问题。录音："The train leaves at 10:15 from platform 3." 火车几点发车？',
            options: ['10:00', '10:15', '10:30', '10:45'],
            answer: 1,
            explanation: '录音中明确提到 10:15。',
            points: 1,
          },
          {
            id: 'm1_l_2',
            type: 'choice',
            question: '听录音，回答问题。录音："I\'d like a return ticket to London." 说话者想要什么票？',
            options: ['单程票', '往返票', '学生票', '儿童票'],
            answer: 1,
            explanation: 'return ticket 表示往返票。',
            points: 1,
          },
          {
            id: 'm1_l_3',
            type: 'choice',
            question: '听录音，回答问题。录音："The museum closes at 5 p.m. on weekdays." 博物馆工作日几点关门？',
            options: ['4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'],
            answer: 1,
            explanation: '录音中明确提到 5 p.m.。',
            points: 1,
          },
        ],
      },
      {
        id: 'speaking',
        name: '口语',
        duration: 10,
        questions: [
          {
            id: 'm1_s_1',
            type: 'speaking',
            question: '考官问：What do you usually do at weekends? 请用 2-3 句话回答。',
            points: 5,
          },
          {
            id: 'm1_s_2',
            type: 'speaking',
            question: '请用 3-4 句话介绍你最喜欢的季节，并说明原因。',
            points: 5,
          },
        ],
      },
    ],
  },
  {
    id: 'mock_2',
    title: 'KET 全真模考二',
    source: '剑桥 KET 官方真题风格模拟',
    duration: 100,
    parts: [
      {
        id: 'reading_writing',
        name: '阅读与写作',
        duration: 60,
        questions: [
          {
            id: 'm2_rw_1',
            type: 'choice',
            question: 'He ___ his homework yesterday evening.',
            options: ['do', 'does', 'did', 'done'],
            answer: 2,
            explanation: 'yesterday evening 是一般过去时标志，用 did。',
            points: 1,
          },
          {
            id: 'm2_rw_2',
            type: 'choice',
            question: 'Look! The children ___ in the garden.',
            options: ['play', 'are playing', 'played', 'have played'],
            answer: 1,
            explanation: 'Look! 是现在进行时标志。',
            points: 1,
          },
          {
            id: 'm2_rw_3',
            type: 'choice',
            question: 'This is ___ interesting book.',
            options: ['a', 'an', 'the', '/'],
            answer: 1,
            explanation: 'interesting 以元音音素开头，用 an。',
            points: 1,
          },
          {
            id: 'm2_rw_4',
            type: 'choice',
            question: '___ of the answers is correct.',
            options: ['Both', 'All', 'Neither', 'Every'],
            answer: 2,
            explanation: 'neither 表示两者都不，谓语用单数。',
            points: 1,
          },
          {
            id: 'm2_rw_5',
            type: 'choice',
            question: 'She asked me where ___ from.',
            options: ['do I come', 'I come', 'I came', 'did I come'],
            answer: 2,
            explanation: '宾语从句用陈述语序，且主句为过去时。',
            points: 1,
          },
          {
            id: 'm2_rw_6',
            type: 'writing',
            question: '你的学校图书馆下周六关闭维修。请写一则通知（25-35 词），说明关闭原因和重新开放时间。',
            points: 15,
          },
        ],
      },
      {
        id: 'listening',
        name: '听力',
        duration: 30,
        questions: [
          {
            id: 'm2_l_1',
            type: 'choice',
            question: '听录音，回答问题。录音："The ticket costs £35." 票价是多少？',
            options: ['£25', '£30', '£35', '£40'],
            answer: 2,
            explanation: '录音中明确提到 £35。',
            points: 1,
          },
          {
            id: 'm2_l_2',
            type: 'choice',
            question: '听录音，回答问题。录音："I\'ll meet you at the school gate at 8:30." 他们几点见面？',
            options: ['8:00', '8:15', '8:30', '9:00'],
            answer: 2,
            explanation: '录音中明确提到 8:30。',
            points: 1,
          },
          {
            id: 'm2_l_3',
            type: 'choice',
            question: '听录音，回答问题。录音："My favourite season is summer because I can swim." 说话者最喜欢哪个季节？',
            options: ['Spring', 'Summer', 'Autumn', 'Winter'],
            answer: 1,
            explanation: '录音中明确提到 summer。',
            points: 1,
          },
        ],
      },
      {
        id: 'speaking',
        name: '口语',
        duration: 10,
        questions: [
          {
            id: 'm2_s_1',
            type: 'speaking',
            question: '考官问：Tell me about your best friend. 请用 2-3 句话回答。',
            points: 5,
          },
          {
            id: 'm2_s_2',
            type: 'speaking',
            question: '请用 3-4 句话描述你最喜欢的运动，并说明原因。',
            points: 5,
          },
        ],
      },
    ],
  },
];

export const mockExamInstructions = [
  '请严格按照考试时间作答，中途不建议暂停。',
  '阅读与写作部分共 60 分钟，听力部分约 30 分钟，口语部分约 8-10 分钟。',
  '模拟真实考场纪律，保持安静，不使用手机或词典。',
  '选择题直接在页面选择答案；写作和口语题建议自备纸笔作答。',
  '完成整套模考后，对照答案解析复盘错题，总结失分规律。',
];
