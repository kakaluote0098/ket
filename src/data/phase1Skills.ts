export interface SkillsFoundationLesson {
  id: string;
  title: string;
  icon: string;
  content: string;
  keyPoints: string[];
  listening: {
    title: string;
    items: { english: string; chinese: string; response?: string }[];
  };
  speaking: {
    title: string;
    items: { situation: string; example: string; chinese: string }[];
  };
  writing: {
    title: string;
    items: { task: string; example: string; chinese: string }[];
  };
  reading: {
    title: string;
    items: { text: string; chinese: string }[];
  };
  practice: { question: string; answer: string; explanation: string }[];
  tips: string[];
}

// 第一阶段 听说读写能力训练（2 课时）
export const phase1SkillsLessons: SkillsFoundationLesson[] = [
  {
    id: 's1_listening_speaking',
    title: '课堂指令听懂与情景对话',
    icon: '🗣️',
    content: '本课聚焦听和说：能听懂老师常用的全英文课堂指令并作出正确反应，同时能在日常情景中用简单短句进行问答交流。',
    keyPoints: [
      '听懂全英文课堂指令：Open your book. / Close the door. / Stand up. / Sit down. 等。',
      '听懂并回应常见问答：What\'s your name? / How are you? / How old are you?',
      '在日常情景中使用简单短句，如问候、介绍、道别、请求帮助。',
      '注意语调：一般疑问句用升调，陈述句和特殊疑问句用降调。',
    ],
    listening: {
      title: '课堂全英文指令',
      items: [
        { english: 'Open your book, please.', chinese: '请打开书。', response: '（打开书本）' },
        { english: 'Close your eyes.', chinese: '闭上眼睛。', response: '（闭眼）' },
        { english: 'Stand up.', chinese: '站起来。', response: '（起立）' },
        { english: 'Sit down.', chinese: '坐下。', response: '（坐下）' },
        { english: 'Listen carefully.', chinese: '认真听。', response: '（安静倾听）' },
        { english: 'Repeat after me.', chinese: '跟我读。', response: '（跟读）' },
      ],
    },
    speaking: {
      title: '日常情景短句对话',
      items: [
        { situation: '问候', example: '— How are you?\n— I\'m fine, thank you.', chinese: '— 你好吗？\n— 我很好，谢谢。' },
        { situation: '介绍', example: '— What\'s your name?\n— My name is Tom.', chinese: '— 你叫什么名字？\n— 我叫汤姆。' },
        { situation: '道别', example: '— Goodbye!\n— See you!', chinese: '— 再见！\n— 再见！' },
        { situation: '请求帮助', example: '— Can I have a pen, please?\n— Here you are.', chinese: '— 请给我一支笔好吗？\n— 给你。' },
      ],
    },
    writing: {
      title: '规范书写要点',
      items: [
        { task: '字母书写', example: 'A a  B b  C c', chinese: '大小写字母占格正确，笔画清晰。' },
        { task: '短句书写', example: 'I am a student.', chinese: '句首字母大写，词间空格均匀，句末加标点。' },
      ],
    },
    reading: {
      title: '朗读热身',
      items: [
        { text: 'Hello! I am Anna. I am six.', chinese: '你好！我是安娜。我六岁了。' },
        { text: 'This is my cat. It is white.', chinese: '这是我的猫。它是白色的。' },
      ],
    },
    practice: [
      { question: '听到 "Stand up." 应该怎么做？', answer: '站起来。', explanation: 'Stand up 是课堂常用指令，意思是“起立”。' },
      { question: '当别人说 "How are you?" 时，可以怎么回答？', answer: 'I\'m fine, thank you. / I\'m good, thanks.', explanation: 'How are you? 是问候语，常用 I\'m fine, thank you. 回答。' },
      { question: '请用英语说“请给我一支铅笔”。', answer: 'Can I have a pencil, please?', explanation: 'Can I have...? 是礼貌请求，pencil 表示铅笔。' },
    ],
    tips: [
      '多听老师或音频中的课堂指令，听到后立即做出动作，形成条件反射。',
      '和同学或家长进行角色扮演，练习问候、介绍、道别等情景对话。',
      '录音自己的回答，对比标准发音，纠正语调和重音。',
      '每天花 5 分钟跟读课堂指令和日常短句。',
    ],
  },
  {
    id: 's1_writing_reading',
    title: '规范书写与句子输出',
    icon: '✍️',
    content: '本课聚焦读和写：能规范、工整地书写英文单词和短句，能仿写简单句子，并根据图片写出正确的短句，完成情景问答输出。',
    keyPoints: [
      '规范书写：字母占格正确、大小写分明、笔画顺序规范、词间距均匀。',
      '句子书写格式：句首字母大写、句末标点正确（陈述句用句号，疑问句用问号）。',
      '简单句子仿写：替换主语、动词或宾语，生成新的正确句子。',
      '看图写短句：观察图片中的关键信息（人物、动作、地点），用主谓宾结构写出短句。',
      '情景问答输出：根据问题提示，用完整短句回答。',
    ],
    listening: {
      title: '听写准备',
      items: [
        { english: 'book', chinese: '书', response: 'b-o-o-k' },
        { english: 'pen', chinese: '钢笔', response: 'p-e-n' },
        { english: 'I like apples.', chinese: '我喜欢苹果。', response: '（写出完整句子）' },
      ],
    },
    speaking: {
      title: '情景问答输出',
      items: [
        { situation: '介绍自己', example: 'My name is Lucy. I am seven.', chinese: '我叫露西。我七岁了。' },
        { situation: '描述物品', example: 'This is my bag. It is blue.', chinese: '这是我的书包。它是蓝色的。' },
        { situation: '描述图片', example: 'The boy is playing football.', chinese: '这个男孩正在踢足球。' },
      ],
    },
    writing: {
      title: '句子仿写与看图写句',
      items: [
        { task: '仿写', example: '原句：I have a red pen.\n仿写：I have a blue bag.', chinese: '替换颜色或名词，保持句型不变。' },
        { task: '看图写句', example: '图：一只猫在椅子上。\n句子：The cat is on the chair.', chinese: '用主语 + be 动词 + 介词短语描述图片。' },
        { task: '连词成句', example: 'is / my / This / dog\n→ This is my dog.', chinese: '注意句首大写和句末标点。' },
      ],
    },
    reading: {
      title: '句子朗读',
      items: [
        { text: 'The dog is under the table.', chinese: '狗在桌子下面。' },
        { text: 'I can see three birds in the tree.', chinese: '我能看到树上有三只鸟。' },
      ],
    },
    practice: [
      { question: '请仿写：She has a yellow cat.', answer: '（示例）He has a black dog.', explanation: '替换主语 she→he，颜色 yellow→black，名词 cat→dog，保持 has 不变。' },
      { question: '看图写句：图中一个女孩正在读书。', answer: 'The girl is reading a book.', explanation: '用主语 The girl + be 动词 is + 动词-ing 结构描述图片。' },
      { question: '连词成句：a / is / This / ruler', answer: 'This is a ruler.', explanation: 'This 放在句首并大写，后接 is，再加 a ruler，句末用句号。' },
    ],
    tips: [
      '书写时先在空中或桌上用手指描摹，熟悉笔画顺序。',
      '仿写前先分析原句结构：主语 + 动词 + 宾语。',
      '看图写句时先找出“谁/什么”和“在哪里/做什么”。',
      '写完后自我检查：首字母大写？句末标点？单词拼写？',
    ],
  },
];
