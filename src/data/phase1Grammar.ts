export interface GrammarFoundationLesson {
  id: string;
  title: string;
  icon: string;
  content: string;
  keyPoints: string[];
  examples: { english: string; chinese: string; highlight?: string }[];
  commonMistakes: { mistake: string; correction: string; reason: string }[];
  practice: { question: string; answer: string; explanation: string }[];
  tips: string[];
}

// 第一阶段 语法句型（零基础全覆盖，4 课时）
export const phase1GrammarLessons: GrammarFoundationLesson[] = [
  {
    id: 'g1_pronouns',
    title: '人称代词与物主代词',
    icon: '👤',
    content: '代词是用来代替名词的词。人称代词表示“谁”，物主代词表示“谁的”。掌握这两类代词是组成完整句子的基础。',
    keyPoints: [
      '人称代词主格：I（我）, you（你/你们）, he（他）, she（她）, it（它）, we（我们）, they（他们/它们/她们）。',
      '人称代词放在动词前作主语，表示动作的执行者。',
      '形容词性物主代词：my（我的）, your（你的/你们的）, his（他的）, her（她的）, its（它的）, our（我们的）, their（他们的）。',
      '形容词性物主代词后面必须接名词，表示所属关系。',
    ],
    examples: [
      { english: 'I am a student.', chinese: '我是一名学生。', highlight: 'I 作主语' },
      { english: 'She likes cats.', chinese: '她喜欢猫。', highlight: 'She 指代女性' },
      { english: 'This is my book.', chinese: '这是我的书。', highlight: 'my + 名词 book' },
      { english: 'Their classroom is big.', chinese: '他们的教室很大。', highlight: 'their + 名词 classroom' },
      { english: 'His name is Tom.', chinese: '他的名字是汤姆。', highlight: 'his 可指代男性和事物' },
    ],
    commonMistakes: [
      { mistake: 'I like he.', correction: 'I like him.', reason: '动词后用宾格 him，但零基础阶段先掌握主格即可。' },
      { mistake: 'This is she bag.', correction: 'This is her bag.', reason: '表示“她的”要用形容词性物主代词 her，不能用人称代词 she。' },
      { mistake: 'My is a teacher.', correction: 'I am a teacher.', reason: 'my 后面必须接名词，作主语要用 I。' },
    ],
    practice: [
      { question: '___ am happy. （我开心。）', answer: 'I', explanation: '表示“我”且作主语，用人称代词 I。' },
      { question: 'This is ___ pen. （这是他的钢笔。）', answer: 'his', explanation: '“他的”后面接名词 pen，用形容词性物主代词 his。' },
      { question: '___ mother is kind. （她的妈妈很和蔼。）', answer: 'Her', explanation: '“她的”后面接名词 mother，用 Her。' },
    ],
    tips: [
      '先记住人称代词 I / you / he / she / it / we / they 的对应中文。',
      '物主代词联想：my=我的，your=你的，his=他的，her=她的，its=它的，our=我们的，their=他们的。',
      '造句时先找“谁”，再找“谁的 + 东西”。',
    ],
  },
  {
    id: 'g1_nouns',
    title: '名词单复数与可数/不可数',
    icon: '📦',
    content: '名词表示人、事物、地点或概念。英语名词有单数和复数形式，也有可数与不可数之分。',
    keyPoints: [
      '可数名词：可以数出数量的名词，有单数和复数形式。如 one book, two books。',
      '不可数名词：不能直接数数量的名词，通常没有复数形式。如 water, milk, rice。',
      '一般可数名词变复数：直接加 -s，如 cat → cats, pen → pens。',
      '以 s, x, ch, sh 结尾的名词加 -es，如 box → boxes, bus → buses。',
      '以辅音字母 + y 结尾的名词，变 y 为 i 加 -es，如 baby → babies。',
      '不规则复数需要特殊记忆，如 man → men, woman → women, child → children。',
    ],
    examples: [
      { english: 'one apple — two apples', chinese: '一个苹果 — 两个苹果', highlight: '一般加 -s' },
      { english: 'a box — three boxes', chinese: '一个盒子 — 三个盒子', highlight: '以 x 结尾加 -es' },
      { english: 'a bus — many buses', chinese: '一辆公交车 — 很多公交车', highlight: '以 s 结尾加 -es' },
      { english: 'one baby — five babies', chinese: '一个婴儿 — 五个婴儿', highlight: '辅音 + y 变 i 加 -es' },
      { english: 'some water / a glass of water', chinese: '一些水 / 一杯水', highlight: '不可数名词用 some 或量词' },
    ],
    commonMistakes: [
      { mistake: 'I have two pen.', correction: 'I have two pens.', reason: 'pen 是可数名词，two 后面要用复数 pens。' },
      { mistake: 'I like milks.', correction: 'I like milk.', reason: 'milk 是不可数名词，没有复数形式。' },
      { mistake: 'There are two childs.', correction: 'There are two children.', reason: 'child 的复数是不规则变化 children。' },
    ],
    practice: [
      { question: 'There are three ___ on the table. （桌子上有三个盒子。）', answer: 'boxes', explanation: 'box 以 x 结尾，复数加 -es。' },
      { question: 'I drink ___ every morning. （我每天早上喝牛奶。）', answer: 'milk', explanation: 'milk 是不可数名词，没有复数。' },
      { question: 'She has two ___. （她有两个孩子。）', answer: 'children', explanation: 'child 的复数是不规则变化 children。' },
    ],
    tips: [
      '不确定时可数不可数时，先查词典标注 [C] 或 [U]。',
      '记忆常见不可数名词：water, milk, juice, rice, bread, meat, money, time。',
      '不规则复数要单独背诵：man-men, woman-women, child-children, foot-feet, tooth-teeth。',
    ],
  },
  {
    id: 'g1_be_verb',
    title: 'be 动词与基础句型',
    icon: '🔗',
    content: 'be 动词是英语中最常用的动词，包括 am, is, are。它表示“是”或“在”的状态，是构成基础句型的核心。',
    keyPoints: [
      'I 后面用 am：I am = I\'m。',
      'he / she / it 以及单数名词后面用 is：He is = He\'s。',
      'you / we / they 以及复数名词后面用 are：They are = They\'re。',
      'be 动词可以构成“主语 + be + 表语”句型，表示身份、特征、状态、位置等。',
      '否定句在 be 动词后加 not：is not = isn\'t，are not = aren\'t。',
      '疑问句把 be 动词提到主语前：Are you...? / Is he...?',
    ],
    examples: [
      { english: 'I am a student.', chinese: '我是一名学生。', highlight: 'I + am' },
      { english: 'She is happy.', chinese: '她很高兴。', highlight: 'she + is' },
      { english: 'They are friends.', chinese: '他们是朋友。', highlight: 'they + are' },
      { english: 'The cat is on the chair.', chinese: '猫在椅子上。', highlight: '主 + be + 介词短语' },
      { english: 'Is he a teacher? — Yes, he is. / No, he isn\'t.', chinese: '他是老师吗？— 是的，他是。/ 不，他不是。', highlight: '一般疑问句及回答' },
    ],
    commonMistakes: [
      { mistake: 'I is happy.', correction: 'I am happy.', reason: 'I 后面必须搭配 am。' },
      { mistake: 'He are tall.', correction: 'He is tall.', reason: 'he 是第三人称单数，搭配 is。' },
      { mistake: 'They is students.', correction: 'They are students.', reason: 'they 是复数，搭配 are。' },
    ],
    practice: [
      { question: '___ you a student? （你是学生吗？）', answer: 'Are', explanation: 'you 后面搭配 are，疑问句把 are 提前。' },
      { question: 'She ___ my sister. （她是我的姐姐。）', answer: 'is', explanation: 'she 是第三人称单数，搭配 is。' },
      { question: 'I ___ not hungry. （我不饿。）', answer: 'am', explanation: 'I 后面搭配 am。' },
    ],
    tips: [
      'be 动词口诀：我用 am，你用 are，is 跟着他她它。',
      '疑问句记住“be 动词提前，句号变问号”。',
      '回答一般疑问句时，Yes/No 后面的简短回答要保持一致：Yes, he is. / No, he isn\'t.',
    ],
  },
  {
    id: 'g1_present_simple',
    title: '一般现在时与基础介词',
    icon: '⏰',
    content: '一般现在时表示经常性、习惯性的动作或状态。基础介词 in, on, at 则用于表示时间和地点。',
    keyPoints: [
      '一般现在时常与 often, usually, always, sometimes, every day 等时间状语连用。',
      '第三人称单数（he / she / it / 单数名词）作主语时，动词要加 -s 或 -es。',
      '一般现在时疑问句和否定句要借助助动词 do / does。',
      'in 用于年、月、季节、上午/下午/晚上（泛指），以及大地点。',
      'on 用于具体日期、星期，以及具体某天的上午/下午/晚上。',
      'at 用于具体时刻和小地点。',
    ],
    examples: [
      { english: 'I usually get up at 7.', chinese: '我通常七点起床。', highlight: 'usually + 具体时刻用 at' },
      { english: 'She walks to school every day.', chinese: '她每天步行上学。', highlight: 'every day + 动词三单 walks' },
      { english: 'Do you like apples? — Yes, I do.', chinese: '你喜欢苹果吗？— 是的，我喜欢。', highlight: 'you 用 do' },
      { english: 'Does he play football? — Yes, he does.', chinese: '他踢足球吗？— 是的，他踢。', highlight: 'he 用 does，动词还原' },
      { english: 'I was born in 2014.', chinese: '我出生于 2014 年。', highlight: 'in + 年份' },
      { english: 'We have class on Monday morning.', chinese: '我们周一上午有课。', highlight: 'on + 具体某天上午' },
      { english: 'Meet me at 3 p.m. at the school gate.', chinese: '下午三点在校门口见我。', highlight: 'at + 时刻/小地点' },
    ],
    commonMistakes: [
      { mistake: 'He go to school every day.', correction: 'He goes to school every day.', reason: 'he 是第三人称单数，go 要加 -es。' },
      { mistake: 'She don\'t like fish.', correction: 'She doesn\'t like fish.', reason: 'she 是第三人称单数，否定句用 doesn\'t。' },
      { mistake: 'I go to school in Monday.', correction: 'I go to school on Monday.', reason: '星期几前面用 on。' },
      { mistake: 'I get up at 7 o\'clock in the morning.', correction: '（正确）', reason: '泛指上午用 in the morning，但具体某天上午用 on。' },
    ],
    practice: [
      { question: 'Tom ___ to school by bike. （汤姆骑车上学。）', answer: 'goes', explanation: 'Tom 是第三人称单数，一般现在时动词 go 变 goes。' },
      { question: '___ she like English? （她喜欢英语吗？）', answer: 'Does', explanation: 'she 是第三人称单数，疑问句用 Does 开头。' },
      { question: 'My birthday is ___ July. （我的生日在七月。）', answer: 'in', explanation: '月份前面用介词 in。' },
      { question: 'We have lunch ___ noon. （我们中午吃午饭。）', answer: 'at', explanation: '具体时刻 at noon。' },
    ],
    tips: [
      '一般现在时三单变化：多数加 -s；以 s, x, ch, sh, o 结尾加 -es；辅音 + y 变 i 加 -es。',
      '助动词 do / does 后面动词必须用原形。',
      'in / on / at 记忆口诀：in 大，on 面，at 点。大时间/大地点用 in，具体日期/表面用 on，时刻/小地点用 at。',
    ],
  },
];
