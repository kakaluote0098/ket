export interface PhonicsLesson {
  id: string;
  title: string;
  icon: string;
  content: string;
  points: string[];
  examples: { text: string; phonetic?: string; tip?: string }[];
  practiceWords: string[];
  tips: string[];
}

// 第一阶段 零基础筑基期 · 拼读体系（8 课时）
export const phase1PhonicsLessons: PhonicsLesson[] = [
  {
    id: 'p1_alphabet',
    title: '26 个字母与音标入门',
    icon: '🔤',
    content: '掌握 26 个英文字母的标准发音、大小写规范书写，以及基础音标符号，为拼读打下坚实基础。',
    points: [
      '26 个字母分为元音字母 Aa, Ee, Ii, Oo, Uu 和 21 个辅音字母。',
      '每个字母都有字母名（letter name）和字母音（letter sound），拼读主要使用字母音。',
      '大写字母用于句首、专有名词；小写字母用于一般书写。',
      '音标是记录发音的符号，初步认识 /æ/, /e/, /ɪ/, /ɒ/, /ʌ/ 等常见音标。',
    ],
    examples: [
      { text: 'A a', phonetic: '/eɪ/ /æ/', tip: '字母名 /eɪ/，字母音 /æ/ 如 apple' },
      { text: 'B b', phonetic: '/biː/ /b/', tip: '字母名 /biː/，字母音 /b/ 如 ball' },
      { text: 'C c', phonetic: '/siː/ /k/ /s/', tip: '字母音 /k/ 如 cat，/s/ 如 city' },
    ],
    practiceWords: ['apple', 'ball', 'cat', 'dog', 'egg', 'fish', 'goat', 'hat'],
    tips: [
      '每天练习 5 个字母的发音和书写。',
      '边读边写，强化发音与字母形状的对应。',
      '用字母卡片做游戏，加深记忆。',
    ],
  },
  {
    id: 'p1_vowels',
    title: '元音基础发音规则',
    icon: '🗣️',
    content: '元音是单词发音的核心。本课学习短元音 /æ/, /e/, /ɪ/, /ɒ/, /ʌ/ 的发音规则，并区分易混淆元音。',
    points: [
      '短元音 a 常发 /æ/，如 cat, bag, hat。',
      '短元音 e 常发 /e/，如 bed, pen, red。',
      '短元音 i 常发 /ɪ/，如 pig, sit, fish。',
      '短元音 o 常发 /ɒ/，如 dog, hot, box。',
      '短元音 u 常发 /ʌ/，如 cup, sun, run。',
    ],
    examples: [
      { text: 'a = /æ/', phonetic: 'cat /kæt/', tip: '嘴巴张大，舌尖抵下齿' },
      { text: 'e = /e/', phonetic: 'bed /bed/', tip: '嘴巴半开，嘴角向两侧' },
      { text: 'i = /ɪ/', phonetic: 'pig /pɪɡ/', tip: '嘴巴微微张开，短促有力' },
      { text: 'o = /ɒ/', phonetic: 'dog /dɒɡ/', tip: '嘴巴圆而小' },
      { text: 'u = /ʌ/', phonetic: 'cup /kʌp/', tip: '嘴巴半开，舌头放松' },
    ],
    practiceWords: ['bat', 'hen', 'bin', 'fox', 'bus', 'map', 'net', 'sip'],
    tips: [
      '练习时把手放在嘴边，感受气流。',
      '录音对比自己的发音和标准发音。',
      '易混淆：/æ/ 与 /e/，/ɪ/ 与 /iː/。',
    ],
  },
  {
    id: 'p1_consonants',
    title: '辅音基础发音规则',
    icon: '📢',
    content: '辅音与元音结合构成单词。本课学习常见辅音发音，区分清辅音与浊辅音，以及易混淆辅音。',
    points: [
      '清辅音发音时声带不振动，如 /p/, /t/, /k/, /f/, /s/。',
      '浊辅音发音时声带振动，如 /b/, /d/, /g/, /v/, /z/。',
      '成对清浊辅音：/p/-/b/, /t/-/d/, /k/-/g/, /f/-/v/, /s/-/z/。',
      '注意 /θ/ 与 /s/、/ð/ 与 /z/、/ʃ/ 与 /tʃ/ 的区别。',
    ],
    examples: [
      { text: 'p /p/ vs b /b/', phonetic: 'pen /pen/ — bed /bed/', tip: '清浊成对，发音位置相同' },
      { text: 't /t/ vs d /d/', phonetic: 'tea /tiː/ — dog /dɒɡ/', tip: '舌尖抵上齿龈' },
      { text: 'k /k/ vs g /g/', phonetic: 'cat /kæt/ — goat /ɡəʊt/', tip: '舌根抬起' },
      { text: 'f /f/ vs v /v/', phonetic: 'fish /fɪʃ/ — very /ˈveri/', tip: '上齿轻咬下唇' },
    ],
    practiceWords: ['pat', 'bat', 'tap', 'dab', 'cap', 'gap', 'fan', 'van'],
    tips: [
      '把手放在喉咙上，感受清辅音与浊辅音的区别。',
      '成对练习清浊辅音，强化发音位置记忆。',
      '注意 /v/ 必须上齿接触下唇。',
    ],
  },
  {
    id: 'p1_cvc',
    title: 'CVC 单词拼读',
    icon: '🧩',
    content: 'CVC 是指“辅音-元音-辅音”结构的单词，如 cat, dog。掌握 CVC 拼读，就能见词能读。',
    points: [
      'CVC 单词中间的元音通常发短音。',
      '拼读方法：先分解读每个音，再连读成词。',
      '例如 cat：/k/ /æ/ /t/ → /kæt/。',
      '多练习拼读，培养音素意识。',
    ],
    examples: [
      { text: 'c-a-t', phonetic: '/k/ /æ/ /t/ → /kæt/', tip: '逐个音素拼读' },
      { text: 'b-e-d', phonetic: '/b/ /e/ /d/ → /bed/', tip: '注意短元音 e' },
      { text: 's-i-t', phonetic: '/s/ /ɪ/ /t/ → /sɪt/', tip: '短元音 i' },
      { text: 'h-o-p', phonetic: '/h/ /ɒ/ /p/ → /hɒp/', tip: '短元音 o' },
      { text: 'b-u-s', phonetic: '/b/ /ʌ/ /s/ → /bʌs/', tip: '短元音 u' },
    ],
    practiceWords: ['rat', 'hen', 'wig', 'mop', 'cup', 'sad', 'red', 'sit'],
    tips: [
      '用手指遮住单词，逐个音素拼读。',
      '拼读时由慢到快，最终自然连成词。',
      '把拼读过的单词分类整理，定期复习。',
    ],
  },
  {
    id: 'p1_blends',
    title: '辅音连缀与字母组合',
    icon: '🔗',
    content: '辅音连缀是指两个或多个辅音连在一起的组合，如 bl, cl, st, tr。掌握这些组合能提升拼读速度和准确性。',
    points: [
      '常见开头辅音连缀：bl-, cl-, fl-, gl-, pl-, br-, cr-, dr-, fr-, gr-, pr-, tr-。',
      '常见结尾辅音连缀：-st, -sk, -sp, -nt, -nd, -mp, -lk。',
      '每个辅音都发音，但要快速连读。',
      '不要把辅音连缀中增加多余的元音。',
    ],
    examples: [
      { text: 'bl-', phonetic: 'blue /bluː/', tip: 'b 和 l 快速连读' },
      { text: 'tr-', phonetic: 'tree /triː/', tip: 't 和 r 快速连读' },
      { text: 'st-', phonetic: 'star /stɑː(r)/', tip: 's 和 t 快速连读' },
      { text: '-nd', phonetic: 'hand /hænd/', tip: 'n 和 d 快速连读' },
    ],
    practiceWords: ['black', 'frog', 'stop', 'plant', 'desk', 'truck', 'sleep', 'stand'],
    tips: [
      '把连缀当作一个整体来练习。',
      '避免在辅音之间加元音，如不要把 blue 读成 /bəˈluː/。',
      '多听多读，形成肌肉记忆。',
    ],
  },
  {
    id: 'p1_digraphs',
    title: '基础字母组合拼读',
    icon: '📚',
    content: '字母组合是两个或多个字母组合在一起发一个音，如 sh, ch, th, wh, ck。掌握这些组合能快速扩大词汇量。',
    points: [
      'sh 发 /ʃ/，如 ship, fish, shop。',
      'ch 通常发 /tʃ/，如 chicken, chair, child。',
      'th 有两种发音：清音 /θ/（think）和浊音 /ð/（this）。',
      'wh 通常发 /w/，如 what, where。',
      'ck 发 /k/，如 duck, back, sick。',
    ],
    examples: [
      { text: 'sh = /ʃ/', phonetic: 'ship /ʃɪp/', tip: '舌头微微抬起，嘴唇稍圆' },
      { text: 'ch = /tʃ/', phonetic: 'chair /tʃeə(r)/', tip: 't 和 sh 快速结合' },
      { text: 'th = /θ/ /ð/', phonetic: 'think /θɪŋk/ — this /ðɪs/', tip: '舌尖伸出上下齿之间' },
      { text: 'ck = /k/', phonetic: 'duck /dʌk/', tip: '与 c 和 k 单独发 /k/ 相同' },
    ],
    practiceWords: ['ship', 'chip', 'thin', 'when', 'duck', 'shop', 'chat', 'that'],
    tips: [
      '把字母组合当作一个“音块”来记忆。',
      'th 的发音要大胆把舌尖伸出来。',
      '遇到新单词时，先找熟悉的字母组合。',
    ],
  },
  {
    id: 'p1_sight',
    title: '高频视觉词与拼读实战',
    icon: '👁️',
    content: '视觉词是英语中最常见但不完全按拼读规则发音的词。结合拼读规则和视觉词，才能真正做到见词能读、听音能拼。',
    points: [
      '常见视觉词：the, a, is, I, you, he, she, it, we, they, was, are, have, do, say。',
      '这些词需要整体认读，不完全拆分音素。',
      '拼读实战：看到新单词，先尝试用规则拼读，再对照正确发音修正。',
      '听音能拼：听到单词发音，根据音素写出对应字母。',
    ],
    examples: [
      { text: 'the', phonetic: '/ðə/ /ðiː/', tip: '最常用视觉词，需要整体记忆' },
      { text: 'was', phonetic: '/wɒz/', tip: '发音与拼写不完全对应' },
      { text: 'have', phonetic: '/hæv/', tip: '结尾 e 不发音' },
      { text: 'said', phonetic: '/sed/', tip: 'ai 发 /e/，需要整体记忆' },
    ],
    practiceWords: ['the', 'you', 'was', 'have', 'said', 'come', 'some', 'what'],
    tips: [
      '制作视觉词卡片，每天复习 5-10 个。',
      '阅读简单绘本，在语境中巩固视觉词。',
      '听写练习时，先拆分音素再落笔。',
    ],
  },
  {
    id: 'p1_practice',
    title: '拼读综合实战',
    icon: '🎯',
    content: '通过综合练习，将字母音、元音、辅音、连缀、字母组合和视觉词融会贯通，真正做到见词能读、听音能拼。',
    points: [
      '见词能读：遇到新单词，从左到右依次拼读每个音素，再连读成词。',
      '听音能拼：听到单词后，先说出听到的音素，再写出对应字母。',
      '拼读 + 意义结合：会读后，要立即理解词义，避免只读不懂。',
      '坚持每日拼读练习，逐步摆脱死记硬背。',
    ],
    examples: [
      { text: '见词能读', phonetic: 'stamp /stæmp/', tip: 's-t-a-m-p 逐个拼读' },
      { text: '听音能拼', phonetic: '/bliːk/ → b-l-e-a-k', tip: '根据音素写单词' },
      { text: '综合运用', phonetic: 'The cat has a red fish.', tip: '拼读 + 视觉词 + 理解句意' },
    ],
    practiceWords: ['stamp', 'bleak', 'crash', 'three', 'block', 'trust', 'shake', 'bring'],
    tips: [
      '每天进行 10 分钟拼读游戏。',
      '从 CVC 单词过渡到含连缀和字母组合的单词。',
      '家长可以读词，孩子拼写；也可以孩子读词，家长听写。',
      '多阅读分级读物，在真实语境中巩固拼读能力。',
    ],
  },
];
