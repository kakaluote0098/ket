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
  videoUrl?: string;
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
    content: '名词表示人、事物、地点或概念。英语名词有单数和复数形式：单数表示“一个”，复数表示“两个及以上”。可数名词能直接数，如 one apple, two apples；不可数名词不能直接数，通常没有复数，如 water, milk, rice。',
    videoUrl: 'https://youtu.be/f5VZYFJCpFc',
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

  // ==================== KET 语法体系升级（8 课时）====================
  {
    id: 'g1_present_continuous',
    title: '现在进行时',
    icon: '🏃',
    content: '现在进行时表示说话时正在发生的动作，或者当前一段时间内正在进行的动作。结构是“主语 + am / is / are + 动词 -ing”。当看到 now, look, listen, at the moment 这些词时，通常要用现在进行时。',
    keyPoints: [
      '基本结构：主语 + am / is / are + 动词 -ing。',
      'I 用 am，he / she / it 用 is，you / we / they 用 are。',
      '动词 -ing 变化：一般直接加 -ing；以不发音的 e 结尾去 e 加 -ing；重读闭音节双写尾字母加 -ing。',
      '常见标志词：now, look, listen, at the moment。',
      '否定句在 be 动词后加 not；疑问句把 be 动词提前。',
    ],
    examples: [
      { english: 'I am reading a book now.', chinese: '我现在正在读书。', highlight: 'now + am reading' },
      { english: 'Look! The cat is sleeping.', chinese: '看！猫正在睡觉。', highlight: 'Look 提示正在发生' },
      { english: 'They are playing football.', chinese: '他们正在踢足球。', highlight: 'are + playing' },
      { english: 'He is not watching TV.', chinese: '他没在看电视。', highlight: 'is not + watching' },
      { english: 'Are you doing homework? — Yes, I am.', chinese: '你正在做作业吗？— 是的。', highlight: '疑问句 be 动词提前' },
    ],
    commonMistakes: [
      { mistake: 'He is play football.', correction: 'He is playing football.', reason: 'be 动词后面要接动词 -ing 形式，表示正在进行的动作。' },
      { mistake: 'I am watch TV.', correction: 'I am watching TV.', reason: 'watch 要加 -ing 变成 watching。' },
      { mistake: 'They are run.', correction: 'They are running.', reason: 'run 以重读闭音节结尾，双写 n 再加 -ing。' },
    ],
    practice: [
      { question: 'Listen! The birds ___ (sing) in the tree.', answer: 'are singing', explanation: 'Listen 是现在进行时的标志，birds 是复数，用 are singing。' },
      { question: 'Be quiet! The baby ___ (sleep).', answer: 'is sleeping', explanation: 'baby 是单数，现在进行时用 is sleeping。' },
      { question: '___ you ___ (read) now?', answer: 'Are; reading', explanation: 'now 表示现在进行时，you 搭配 are，疑问句 are 提前。' },
      { question: 'She ___ (not / watch) TV at the moment.', answer: 'isn\'t watching', explanation: 'at the moment 表示现在进行时，否定句在 is 后加 not。' },
    ],
    tips: [
      '看到 now / look / listen 时，首先想到现在进行时。',
      '注意 be 动词要随主语变化：I am, he/she/it is, you/we/they are。',
      '写否定句和疑问句时，be 动词要“搬家”或“加 not”。',
    ],
  },
  {
    id: 'g1_past_simple',
    title: '一般过去时（肯定句）',
    icon: '📅',
    content: '一般过去时表示过去某个时间发生的动作或存在的状态。规则动词一般在词尾加 -ed；不规则动词有固定过去式，需要特别记忆，如 go → went, eat → ate, see → saw。',
    keyPoints: [
      '规则动词过去式：一般加 -ed；以 e 结尾加 -d；以辅音字母 + y 结尾变 y 为 i 加 -ed；重读闭音节双写尾字母加 -ed。',
      '常见不规则过去式：go → went, eat → ate, see → saw, come → came, do → did, have → had。',
      '常见时间标志：yesterday, last week / month / year, ago, in 2023 等。',
      '一般过去时没有人称变化，所有人称动词形式相同。',
    ],
    examples: [
      { english: 'I visited my grandma yesterday.', chinese: '我昨天看望了奶奶。', highlight: '规则动词 + ed' },
      { english: 'She watched a film last night.', chinese: '她昨晚看了一部电影。', highlight: 'last night + watched' },
      { english: 'We went to the park last Sunday.', chinese: '我们上周日去了公园。', highlight: 'go 的过去式 went' },
      { english: 'He played basketball two hours ago.', chinese: '他两小时前打了篮球。', highlight: 'ago 表示过去' },
      { english: 'They lived in Shanghai in 2022.', chinese: '他们 2022 年住在上海。', highlight: 'in + 过去年份' },
    ],
    commonMistakes: [
      { mistake: 'I go to school yesterday.', correction: 'I went to school yesterday.', reason: 'yesterday 表示过去，go 要变成过去式 went。' },
      { mistake: 'She play tennis last week.', correction: 'She played tennis last week.', reason: 'last week 表示过去，play 要加 -ed。' },
      { mistake: 'He eated an apple.', correction: 'He ate an apple.', reason: 'eat 的过去式是不规则变化 ate，不能直接加 -ed。' },
    ],
    practice: [
      { question: 'I ___ (go) to Beijing last year.', answer: 'went', explanation: 'last year 表示过去，go 的过去式是 went。' },
      { question: 'They ___ (watch) TV yesterday.', answer: 'watched', explanation: 'yesterday 表示过去，watch 直接加 -ed。' },
      { question: 'He ___ (eat) an apple just now.', answer: 'ate', explanation: 'just now 表示过去，eat 的过去式是 ate。' },
      { question: 'She ___ (live) here two years ago.', answer: 'lived', explanation: 'ago 表示过去，live 以 e 结尾加 -d。' },
    ],
    tips: [
      '先找时间标志词判断动作是否已发生。',
      '规则动词变过去式有四种变化，要熟练掌握。',
      '不规则过去式需要单独记忆，可以制作小卡片每天背几个。',
    ],
  },
  {
    id: 'g1_past_simple_questions',
    title: '一般过去时（否定/疑问与句式变换）',
    icon: '🔄',
    content: '一般过去时的否定句和疑问句要借助 did。否定句：did not / didn\'t + 动词原形；疑问句：Did + 主语 + 动词原形？用了 did 之后，原来的动词必须变回原形。',
    keyPoints: [
      '否定句：主语 + didn\'t + 动词原形。',
      '一般疑问句：Did + 主语 + 动词原形？',
      '肯定回答：Yes, 主语 + did. 否定回答：No, 主语 + didn\'t.',
      '特殊疑问句：疑问词 + did + 主语 + 动词原形？',
      'did 已经体现过去时，主语后的动词要用原形。',
    ],
    examples: [
      { english: 'He didn\'t finish his homework.', chinese: '他没有完成作业。', highlight: 'didn\'t + 动词原形 finish' },
      { english: 'Did you see Tom? — Yes, I did. / No, I didn\'t.', chinese: '你看到汤姆了吗？— 是的，我看到了。/ 不，我没有。', highlight: 'Did 开头，回答也用 did' },
      { english: 'Where did she go yesterday?', chinese: '她昨天去哪儿了？', highlight: 'Where + did + 原形 go' },
      { english: 'They didn\'t play games.', chinese: '他们没有玩游戏。', highlight: 'didn\'t + play' },
      { english: 'Why did he leave early?', chinese: '他为什么早离开了？', highlight: 'Why + did + 原形 leave' },
    ],
    commonMistakes: [
      { mistake: 'He didn\'t went to school.', correction: 'He didn\'t go to school.', reason: '用了 didn\'t 之后，动词要还原成原形 go。' },
      { mistake: 'Did she went to school?', correction: 'Did she go to school?', reason: 'Did 开头的疑问句中，主语后的动词用原形。' },
      { mistake: 'Did he finished his homework?', correction: 'Did he finish his homework?', reason: '助动词 did 已经表示过去，finish 用原形。' },
    ],
    practice: [
      { question: 'He ___ (not / go) to school yesterday.', answer: 'didn\'t go', explanation: '一般过去时否定句用 didn\'t + 动词原形 go。' },
      { question: '___ they ___ (visit) the museum last week?', answer: 'Did; visit', explanation: '一般过去时疑问句用 Did 开头，动词用原形 visit。' },
      { question: 'Where ___ you ___ (put) my book?', answer: 'did; put', explanation: '特殊疑问句用 Where + did + 动词原形 put。' },
      { question: '— Did she call you? — Yes, she ___.', answer: 'did', explanation: 'Did 开头的一般疑问句，肯定回答用 Yes, 主语 + did。' },
    ],
    tips: [
      '可以把 did 理解为“过去时小帮手”，动词要“休息”变原形。',
      '写疑问句时，先写 Did，再写主语，再写动词原形。',
      '回答简短句时，Yes/No 后面的 did / didn\'t 要和问句一致。',
    ],
  },
  {
    id: 'g1_adjective_adverb',
    title: '形容词与副词原级',
    icon: '🎨',
    content: '形容词修饰名词，说明人或事物的特征；副词修饰动词、形容词或其他副词，说明动作的方式、程度等。很多副词由形容词加 -ly 构成。',
    keyPoints: [
      '形容词常放在名词前作定语：a happy boy。',
      '形容词也可放在 be 动词后作表语：He is tall。',
      '副词常放在动词后，修饰动作：She runs fast。',
      '多数副词由形容词加 -ly 构成：quick → quickly, beautiful → beautifully。',
      '特殊变化：good 的副词是 well；fast 既是形容词也是副词。',
    ],
    examples: [
      { english: 'a beautiful flower', chinese: '一朵美丽的花', highlight: '形容词 beautiful 修饰名词 flower' },
      { english: 'He runs quickly.', chinese: '他跑得很快。', highlight: '副词 quickly 修饰动词 runs' },
      { english: 'She speaks English well.', chinese: '她英语说得很好。', highlight: 'well 是 good 的副词形式' },
      { english: 'The food smells good.', chinese: '这食物闻起来很香。', highlight: 'smell 是系动词，后面用形容词 good' },
      { english: 'They played happily.', chinese: '他们玩得很开心。', highlight: 'happily 修饰动词 played' },
    ],
    commonMistakes: [
      { mistake: 'She sings good.', correction: 'She sings well.', reason: '修饰动词 sings 要用副词 well，不是形容词 good。' },
      { mistake: 'He runs fastly.', correction: 'He runs fast.', reason: 'fast 本身可作副词，不需要加 -ly。' },
      { mistake: 'This is a happily day.', correction: 'This is a happy day.', reason: '修饰名词 day 要用形容词 happy。' },
    ],
    practice: [
      { question: 'She is a ___ (care) girl.', answer: 'careful', explanation: '修饰名词 girl 用形容词 careful。' },
      { question: 'He speaks ___ (slow).', answer: 'slowly', explanation: '修饰动词 speaks 用副词 slowly。' },
      { question: 'They played ___ (good).', answer: 'well', explanation: '修饰动词 played 用副词 well。' },
      { question: 'The dog runs ___.', answer: 'fast', explanation: 'fast 本身可作副词，修饰动词 runs。' },
    ],
    tips: [
      '形容词“修饰名词”，副词“修饰动作”。',
      '形容词变副词，一般加 -ly；以 y 结尾的先变 y 为 i 再加 -ly。',
      '系动词（如 be, look, smell, taste）后面要用形容词。',
    ],
  },
  {
    id: 'g1_comparative',
    title: '形容词与副词比较级',
    icon: '📈',
    content: '比较级用于两者之间的比较，表示“更……”。短词加 -er，长词前加 more；比较级后常接 than。',
    keyPoints: [
      '一般短形容词：加 -er，如 tall → taller, fast → faster。',
      '以不发音 e 结尾：加 -r，如 nice → nicer。',
      '以“辅音字母 + y”结尾：变 y 为 i 加 -er，如 happy → happier。',
      '重读闭音节：双写尾字母加 -er，如 big → bigger。',
      '多音节形容词：在前面加 more，如 beautiful → more beautiful。',
      '比较级后常接 than；不规则变化：good/well → better, bad → worse, far → farther / further。',
    ],
    examples: [
      { english: 'Tom is taller than Jim.', chinese: '汤姆比吉姆高。', highlight: 'tall → taller + than' },
      { english: 'This book is more interesting than that one.', chinese: '这本书比那本更有趣。', highlight: '多音节用 more interesting' },
      { english: 'She runs faster than me.', chinese: '她跑得比我快。', highlight: 'fast → faster' },
      { english: 'He is happier than before.', chinese: '他比以前更开心了。', highlight: 'happy → happier' },
      { english: 'My English is better than last term.', chinese: '我的英语比上学期更好了。', highlight: 'good 的比较级 better' },
    ],
    commonMistakes: [
      { mistake: 'He is more taller than me.', correction: 'He is taller than me.', reason: '比较级不能同时用 more 和 -er，短词直接加 -er。' },
      { mistake: 'This is beautifuller.', correction: 'This is more beautiful.', reason: '多音节形容词 beautiful 要用 more beautiful。' },
      { mistake: 'She is more better now.', correction: 'She is better now.', reason: 'better 本身已是比较级，不需要再加 more。' },
    ],
    practice: [
      { question: 'A horse is ___ (big) than a cat.', answer: 'bigger', explanation: 'big 是重读闭音节，比较级双写 g 加 -er。' },
      { question: 'This problem is ___ (difficult) than that one.', answer: 'more difficult', explanation: 'difficult 是多音节形容词，比较级用 more difficult。' },
      { question: 'My brother is ___ (tall) than me.', answer: 'taller', explanation: 'tall 是单音节形容词，比较级直接加 -er。' },
      { question: 'She feels ___ (happy) today.', answer: 'happier', explanation: 'happy 以辅音 + y 结尾，比较级变 y 为 i 加 -er。' },
    ],
    tips: [
      '先数音节：短词加 -er，长词用 more。',
      '比较级后面别忘了 than。',
      '不规则比较级要单独记忆：good/well → better, bad → worse。',
    ],
  },
  {
    id: 'g1_modals',
    title: '情态动词 can / must / should',
    icon: '💪',
    content: '情态动词表示能力、许可、义务或建议。can 表示能力或许可；must 表示必须或肯定推测；should 表示建议。情态动词后接动词原形，没有人称变化。',
    keyPoints: [
      'can 表示能力或许可：I can swim. / Can I go now?',
      'must 表示必须：You must listen carefully.',
      'should 表示建议：You should drink more water.',
      '情态动词没有人称变化，后接动词原形。',
      '否定形式：can not = can\'t, must not = mustn\'t, should not = shouldn\'t。',
      '疑问句把情态动词提前。',
    ],
    examples: [
      { english: 'I can ride a bike.', chinese: '我会骑自行车。', highlight: 'can 表示能力' },
      { english: 'You must finish homework first.', chinese: '你必须先完成作业。', highlight: 'must 表示必须' },
      { english: 'We should help each other.', chinese: '我们应该互相帮助。', highlight: 'should 表示建议' },
      { english: 'You can\'t run in the classroom.', chinese: '你不能在教室里跑。', highlight: 'can\'t 表示不允许' },
      { english: 'Should I open the window?', chinese: '我应该开窗吗？', highlight: 'should 提前构成疑问句' },
    ],
    commonMistakes: [
      { mistake: 'He can swims.', correction: 'He can swim.', reason: '情态动词 can 后面必须接动词原形。' },
      { mistake: 'You must to go.', correction: 'You must go.', reason: '情态动词后面不能加 to，直接接动词原形。' },
      { mistake: 'She shoulds study hard.', correction: 'She should study hard.', reason: '情态动词没有人称变化，should 不需要加 s。' },
    ],
    practice: [
      { question: 'I ___ (can / swim) very well.', answer: 'can swim', explanation: 'can 表示能力，后接动词原形 swim。' },
      { question: 'You ___ (should / eat) more vegetables.', answer: 'should eat', explanation: 'should 表示建议，后接动词原形 eat。' },
      { question: '___ I borrow your ruler?', answer: 'Can', explanation: 'Can I...? 表示请求许可。' },
      { question: 'You ___ (must / not / run) in the street.', answer: 'mustn\'t run', explanation: 'mustn\'t 表示禁止，后接动词原形 run。' },
    ],
    tips: [
      '情态动词后面永远跟动词原形，不加 -s，不加 -ed。',
      'can 问能力，must 讲必须，should 给建议。',
      '疑问句把情态动词放到句首即可。',
    ],
  },
  {
    id: 'g1_conjunctions',
    title: '基础并列句',
    icon: '➕',
    content: '用并列连词 and, but, or, so 把两个简单句连接起来，使表达更丰富。and 表示并列或顺承，but 表示转折，or 表示选择或“否则”，so 表示结果。',
    keyPoints: [
      'and 表示并列或顺承：I like apples and she likes oranges。',
      'but 表示转折：He is young but he works hard。',
      'or 表示选择或“否则”：Do you like tea or coffee? / Hurry up, or you\'ll be late。',
      'so 表示结果：It rained, so we stayed at home。',
      '并列连词前常用逗号。',
    ],
    examples: [
      { english: 'I like apples and she likes oranges.', chinese: '我喜欢苹果，她喜欢橙子。', highlight: 'and 表示并列' },
      { english: 'He is young but he works hard.', chinese: '他很年轻，但他工作很努力。', highlight: 'but 表示转折' },
      { english: 'Hurry up, or you will miss the bus.', chinese: '快点，否则你会错过公交车。', highlight: 'or 表示“否则”' },
      { english: 'It was cold, so I wore a coat.', chinese: '天气很冷，所以我穿了外套。', highlight: 'so 表示结果' },
      { english: 'Would you like tea or coffee?', chinese: '你想喝茶还是咖啡？', highlight: 'or 表示选择' },
    ],
    commonMistakes: [
      { mistake: 'I like apples, and she doesn\'t like bananas.', correction: 'I like apples, but she doesn\'t like bananas.', reason: '前后是转折关系，要用 but，不是 and。' },
      { mistake: 'Hurry up, and you will be late.', correction: 'Hurry up, or you will be late.', reason: '表示“否则”要用 or。' },
      { mistake: 'It rained, but we stayed at home.', correction: 'It rained, so we stayed at home.', reason: '下雨和待在家是因果关系，要用 so。' },
    ],
    practice: [
      { question: 'I like red ___ green.', answer: 'and', explanation: 'red 和 green 是并列关系，用 and。' },
      { question: 'He is small, ___ he is strong.', answer: 'but', explanation: 'small 和 strong 是转折关系，用 but。' },
      { question: 'Study hard, ___ you will fail.', answer: 'or', explanation: '不努力就会失败，表示“否则”用 or。' },
      { question: 'I was tired, ___ I went to bed early.', answer: 'so', explanation: '累了所以早睡，表示结果用 so。' },
    ],
    tips: [
      'and 顺承，but 转折，or 选择/否则，so 结果。',
      '先判断两句之间的逻辑关系，再选连词。',
      '连词前常用逗号，让句子更清晰。',
    ],
  },
  {
    id: 'g1_adverbial_clauses',
    title: '简单状语从句入门',
    icon: '⏳',
    content: '状语从句用来表达时间、原因、条件等。本课学习 when 引导时间状语从句，because 引导原因状语从句，if 引导条件状语从句。',
    keyPoints: [
      'when 引导时间状语从句：I was reading when my mother came in。',
      'because 引导原因状语从句：He stayed at home because it rained。',
      'if 引导条件状语从句：If you study hard, you will pass。',
      'if 条件句遵循“主将从现”：主句用一般将来时，从句用一般现在时。',
      '状语从句让句子表达更丰富、更有逻辑。',
    ],
    examples: [
      { english: 'I was doing homework when she called.', chinese: '她打电话时我正在做作业。', highlight: 'when 引导时间从句' },
      { english: 'He was late because he missed the bus.', chinese: '他迟到了，因为他没赶上公交车。', highlight: 'because 引导原因从句' },
      { english: 'If it rains tomorrow, I will stay at home.', chinese: '如果明天下雨，我就待在家里。', highlight: 'if 引导条件从句' },
      { english: 'We will go camping if it is sunny.', chinese: '如果天气晴朗，我们就去露营。', highlight: '主将从现' },
      { english: 'She cried when she heard the news.', chinese: '她听到消息时哭了。', highlight: 'when + 过去时' },
    ],
    commonMistakes: [
      { mistake: 'If it will rain, I stay home.', correction: 'If it rains, I will stay home.', reason: 'if 条件句中，主句用将来时，从句用一般现在时。' },
      { mistake: 'He was late because he was get up late.', correction: 'He was late because he got up late.', reason: 'because 后面接完整句子，要用过去式 got。' },
      { mistake: 'I was reading when my mother comes in.', correction: 'I was reading when my mother came in.', reason: '主句是过去进行时，when 从句常用一般过去时。' },
    ],
    practice: [
      { question: 'He stayed at home ___ it rained.', answer: 'because', explanation: '后面是原因，用 because 引导原因状语从句。' },
      { question: '___ you try hard, you will succeed.', answer: 'If', explanation: '表示条件“如果”，用 If 引导条件状语从句。' },
      { question: 'I was sleeping ___ the phone rang.', answer: 'when', explanation: '表示“当……时候”，用 when 引导时间状语从句。' },
      { question: 'If it ___ (rain) tomorrow, I will stay at home.', answer: 'rains', explanation: 'if 从句用一般现在时表将来，it 是第三人称单数，rain 加 -s。' },
    ],
    tips: [
      'when 问时间，because 讲原因，if 说条件。',
      'if 条件句要记住“主将从现”。',
      '写从句时，先确定主从句的时态和逻辑关系。',
    ],
  },
];
