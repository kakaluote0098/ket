export interface PaperQuestionReview {
  questionId: string;
  testPoint: string;
  analysis: string;
  wrongOptions: { index: number; reason: string }[];
  problemSolving: string;
  weakModule: string;
}

export interface PaperReview {
  mockExamId: string;
  title: string;
  summary: string;
  reviews: PaperQuestionReview[];
}

// 第四阶段 真题逐套精讲复盘（8 课时）
export const phase4PaperReviews: PaperReview[] = [
  {
    mockExamId: 'mock_1',
    title: 'KET 全真模考一 逐题精讲',
    summary: '本套模考侧重词汇辨析、时态运用、介词搭配和基础句型。错题主要集中在限定词、现在完成时和固定搭配上，建议重点复习相关语法点。',
    reviews: [
      {
        questionId: 'm1_rw_1',
        testPoint: '限定词 some / any 的用法',
        analysis: 'There isn\'t 是否定句，否定句中表示“一些”要用 any，不能用 some。',
        wrongOptions: [
          { index: 0, reason: 'some 一般用于肯定句，否定句和疑问句中通常用 any。' },
          { index: 2, reason: 'a 用于修饰可数名词单数，milk 是不可数名词，不适用。' },
          { index: 3, reason: 'the 表示特指，但句中没有特定指代某一份牛奶。' },
        ],
        problemSolving: '看到 isn\'t / don\'t / can\'t 等否定词时，选项中同时出现 some 和 any，优先选 any。',
        weakModule: '限定词 some / any / no',
      },
      {
        questionId: 'm1_rw_2',
        testPoint: '现在完成时 + since',
        analysis: 'since 2019 表示“从 2019 年起”，是从过去持续到现在的时间状语，要用现在完成时 has lived。',
        wrongOptions: [
          { index: 0, reason: 'lives 是一般现在时，不能与 since 2019 连用。' },
          { index: 1, reason: 'is living 是现在进行时，表示此刻正在发生的动作。' },
          { index: 2, reason: 'lived 是一般过去时，表示过去某个时间点结束的动作。' },
        ],
        problemSolving: 'since + 时间点是现在完成时的标志，结构为 have / has + 过去分词。',
        weakModule: '四大时态辨析',
      },
      {
        questionId: 'm1_rw_3',
        testPoint: '地点介词 on / in / at',
        analysis: '书在桌子的表面上，用 on the table。on 表示在物体表面上。',
        wrongOptions: [
          { index: 0, reason: 'in 表示在……里面，书不可能在桌子里面。' },
          { index: 2, reason: 'at 通常用于小地点或具体位置点，不适合表示在桌面上。' },
          { index: 3, reason: 'under 表示在……下面，与常规语境不符。' },
        ],
        problemSolving: '表示“在……上面且接触表面”用 on；“在……里面”用 in；“在某一点”用 at。',
        weakModule: '介词易错点',
      },
      {
        questionId: 'm1_rw_4',
        testPoint: '一般现在时疑问句助动词',
        analysis: '主语是 you，谓语动词是 like（实义动词），构成一般现在时疑问句要借助助动词 Do。',
        wrongOptions: [
          { index: 1, reason: 'Does 用于第三人称单数主语（he / she / it）。' },
          { index: 2, reason: 'Are 后面应接 doing 形式或形容词，不能直接接动词原形 like。' },
          { index: 3, reason: 'Is 用于第三人称单数，且后面不能接动词原形。' },
        ],
        problemSolving: '一般现在时疑问句：Do / Does + 主语 + 动词原形？主语为 you 时用 Do。',
        weakModule: '一般现在时与一般过去时',
      },
      {
        questionId: 'm1_rw_5',
        testPoint: '固定搭配 prefer A to B',
        analysis: 'prefer A to B 是固定搭配，表示“比起 B 更喜欢 A”，to 不可换为 than / or / and。',
        wrongOptions: [
          { index: 0, reason: 'than 用于比较级（better than），不用于 prefer 的搭配。' },
          { index: 2, reason: 'or 表示选择关系，不符合 prefer 的固定结构。' },
          { index: 3, reason: 'and 表示并列关系，不能体现 prefer 的偏好含义。' },
        ],
        problemSolving: 'prefer 的常见结构：prefer A to B / prefer doing A to doing B / prefer to do A rather than do B。',
        weakModule: '高频短语与固定搭配',
      },
      {
        questionId: 'm1_rw_6',
        testPoint: 'KET 邮件写作格式与要点',
        analysis: '邮件需包含称呼、正文（邀请、电影类型、时间）和结尾署名。注意使用正确的邮件格式和礼貌语气。',
        wrongOptions: [],
        problemSolving: '写邮件前先列出题目要点：1. 邀请；2. 电影类型；3. 时间。确保每个要点都有对应内容，使用 because, and, so 等连接词。',
        weakModule: '写作：邮件',
      },
      {
        questionId: 'm1_l_1',
        testPoint: '听力数字与时间抓取',
        analysis: '录音中直接给出 "The train leaves at 10:15"，需要快速抓取时间信息。',
        wrongOptions: [
          { index: 0, reason: '10:00 是常见整点干扰，录音未提及。' },
          { index: 2, reason: '10:30 是时间混淆项，与正确时间接近。' },
          { index: 3, reason: '10:45 是另一常见时间混淆项。' },
        ],
        problemSolving: '听力时间题要提前浏览选项，听时重点抓数字，注意 not / but 等转折词。',
        weakModule: '听力信息抓取',
      },
      {
        questionId: 'm1_l_2',
        testPoint: '听力词汇理解 return ticket',
        analysis: 'return ticket 表示“往返票”，single ticket 才是单程票。',
        wrongOptions: [
          { index: 0, reason: '单程票对应 single ticket，不是 return ticket。' },
          { index: 2, reason: '录音中未提及 student ticket。' },
          { index: 3, reason: '录音中未提及 child ticket。' },
        ],
        problemSolving: '熟悉常见票务表达：single（单程）、return（往返）、platform（站台）、ticket office（售票处）。',
        weakModule: '听力细节判断',
      },
      {
        questionId: 'm1_l_3',
        testPoint: '听力细节理解',
        analysis: '录音直接说明 "The museum closes at 5 p.m. on weekdays"，注意 weekdays 指工作日。',
        wrongOptions: [
          { index: 0, reason: '4 p.m. 是时间混淆项。' },
          { index: 2, reason: '6 p.m. 是时间混淆项。' },
          { index: 3, reason: '7 p.m. 是时间混淆项。' },
        ],
        problemSolving: '听到时间数字时，可快速记录；注意 on weekdays / at weekends 等限定词。',
        weakModule: '听力细节判断',
      },
      {
        questionId: 'm1_s_1',
        testPoint: '口语日常问答',
        analysis: '回答问题时要用完整句子，并补充细节或原因，避免只回答一个词。',
        wrongOptions: [],
        problemSolving: '采用“总述 + 细节 + 原因”结构：At weekends, I usually... I like it because...',
        weakModule: '口语一对一问答',
      },
      {
        questionId: 'm1_s_2',
        testPoint: '口语主题陈述',
        analysis: '介绍最喜欢的季节时，要说明喜欢的原因，并使用连接词让表达更流畅。',
        wrongOptions: [],
        problemSolving: '主题句 + 原因 + 例子 + 感受。例如：My favourite season is spring. I like it because... For example... Spring makes me feel...',
        weakModule: '口语主题陈述',
      },
    ],
  },
  {
    mockExamId: 'mock_2',
    title: 'KET 全真模考二 逐题精讲',
    summary: '本套模考侧重一般过去时、现在进行时、冠词、主谓一致和宾语从句。写作题考查通知格式，听力题侧重价格、时间和偏好信息抓取。',
    reviews: [
      {
        questionId: 'm2_rw_1',
        testPoint: '一般过去时助动词 did',
        analysis: 'yesterday evening 表示过去时间，且句中已有实义动词 do 的过去式 did 作为助动词，后面接动词原形。',
        wrongOptions: [
          { index: 0, reason: 'do 是原形，用于一般现在时。' },
          { index: 1, reason: 'does 用于第三人称单数一般现在时。' },
          { index: 3, reason: 'done 是过去分词，不能单独作谓语。' },
        ],
        problemSolving: '一般过去时疑问句/否定句：Did + 主语 + 动词原形？注意 did 后面动词一定用原形。',
        weakModule: '一般现在时与一般过去时',
      },
      {
        questionId: 'm2_rw_2',
        testPoint: '现在进行时',
        analysis: 'Look! 是现在进行时的标志词，表示此刻正在发生的动作，结构为 am / is / are + doing。',
        wrongOptions: [
          { index: 0, reason: 'play 是一般现在时，不能与 Look! 连用。' },
          { index: 2, reason: 'played 是一般过去时。' },
          { index: 3, reason: 'have played 是现在完成时，表示过去对现在的影响。' },
        ],
        problemSolving: '看到 Look! / Listen! / now / at the moment 等标志词，优先考虑现在进行时。',
        weakModule: '四大时态辨析',
      },
      {
        questionId: 'm2_rw_3',
        testPoint: '不定冠词 a / an',
        analysis: 'interesting 以元音音素 /ɪ/ 开头，前面要用 an。',
        wrongOptions: [
          { index: 0, reason: 'a 用于辅音音素开头的单词前。' },
          { index: 2, reason: 'the 表示特指，但这里是第一次提到这本书，应用不定冠词。' },
          { index: 3, reason: '可数名词单数前一般需要冠词，不能零冠词。' },
        ],
        problemSolving: '判断用 a 还是 an 看发音而不是字母。元音音素开头用 an，辅音音素开头用 a。',
        weakModule: '冠词',
      },
      {
        questionId: 'm2_rw_4',
        testPoint: '限定词 neither / both / all / every',
        analysis: '谓语动词是单数 is，且句意表示“两个答案都不对”，neither of + 复数名词 + 单数谓语。',
        wrongOptions: [
          { index: 0, reason: 'both 表示两者都，谓语应用复数 are。' },
          { index: 1, reason: 'all 表示三者及以上都，谓语应用复数。' },
          { index: 3, reason: 'every 不能单独与 of 连用，应为 every one of。' },
        ],
        problemSolving: 'neither 表示“两者都不”，either 表示“两者之一”，both 表示“两者都”，none 表示“三者及以上都不”。',
        weakModule: '限定词易错点',
      },
      {
        questionId: 'm2_rw_5',
        testPoint: '宾语从句陈述语序',
        analysis: '宾语从句要用陈述语序（主语 + 谓语），且主句 asked 是过去时，从句也要用过去时 came。',
        wrongOptions: [
          { index: 0, reason: 'do I come 是疑问语序，宾语从句中不能用。' },
          { index: 1, reason: 'I come 虽然是陈述语序，但时态没有与主句保持一致。' },
          { index: 3, reason: 'did I come 是疑问语序，且助动词多余。' },
        ],
        problemSolving: '宾语从句口诀：连接词 + 陈述语序 + 时态呼应。主句过去时，从句通常也要用过去时。',
        weakModule: '句式转换与宾语从句',
      },
      {
        questionId: 'm2_rw_6',
        testPoint: 'KET 通知写作格式',
        analysis: '通知要写标题 NOTICE、正文（关闭原因和时间）和落款。注意语气正式、信息完整。',
        wrongOptions: [],
        problemSolving: '通知三要素：标题、正文（时间/地点/原因）、落款。写完后检查是否包含题目所有要点。',
        weakModule: '写作：通知',
      },
      {
        questionId: 'm2_l_1',
        testPoint: '听力价格信息抓取',
        analysis: '录音直接给出 "The ticket costs £35"，需要准确抓取价格。',
        wrongOptions: [
          { index: 0, reason: '£25 是价格混淆项。' },
          { index: 1, reason: '£30 是价格混淆项。' },
          { index: 3, reason: '£40 是价格混淆项。' },
        ],
        problemSolving: '价格题常出现多个数字，注意区分成本价、售价、找零等不同概念。',
        weakModule: '听力信息抓取',
      },
      {
        questionId: 'm2_l_2',
        testPoint: '听力时间信息抓取',
        analysis: '录音明确说 "at the school gate at 8:30"，注意地点和时间的搭配。',
        wrongOptions: [
          { index: 0, reason: '8:00 是时间混淆项。' },
          { index: 1, reason: '8:15 是时间混淆项。' },
          { index: 3, reason: '9:00 是时间混淆项。' },
        ],
        problemSolving: '听力时间题提前读选项，听时快速记录，注意 am / pm 和 at / from 等介词。',
        weakModule: '听力细节判断',
      },
      {
        questionId: 'm2_l_3',
        testPoint: '听力偏好信息理解',
        analysis: '录音直接说明 "My favourite season is summer"，并给出原因 because I can swim。',
        wrongOptions: [
          { index: 0, reason: 'Spring 未在录音中作为最爱季节出现。' },
          { index: 2, reason: 'Autumn 未在录音中作为最爱季节出现。' },
          { index: 3, reason: 'Winter 未在录音中作为最爱季节出现。' },
        ],
        problemSolving: '听到 favourite / prefer / like best 等词时，重点抓后面的名词或形容词。',
        weakModule: '听力细节判断',
      },
      {
        questionId: 'm2_s_1',
        testPoint: '口语人物描述',
        analysis: '描述最好的朋友时，可从外貌、性格、共同活动等方面扩展。',
        wrongOptions: [],
        problemSolving: '用简单句 + because 补充原因。例如：My best friend is... He/She is... We often... because...。',
        weakModule: '口语一对一问答',
      },
      {
        questionId: 'm2_s_2',
        testPoint: '口语运动主题陈述',
        analysis: '介绍最喜欢的运动时，要说明喜欢的理由，并可补充一起做运动的人。',
        wrongOptions: [],
        problemSolving: 'My favourite sport is... I like it because... I usually play it with... It makes me...。',
        weakModule: '口语主题陈述',
      },
    ],
  },
];

export const paperReviewWeakModules = [
  '限定词 some / any / no',
  '四大时态辨析',
  '介词易错点',
  '一般现在时与一般过去时',
  '高频短语与固定搭配',
  '听力信息抓取',
  '听力细节判断',
  '写作：邮件',
  '写作：通知',
  '口语一对一问答',
  '口语主题陈述',
  '冠词',
  '句式转换与宾语从句',
];
