import type { Word } from '@/types';

export const words: Word[] = [
  // Starter
  { id: 'w1', english: 'apple', chinese: '苹果', example: 'I eat an apple every day.', level: 'starter' },
  { id: 'w2', english: 'book', chinese: '书', example: 'This is my favourite book.', level: 'starter' },
  { id: 'w3', english: 'cat', chinese: '猫', example: 'The cat is sleeping.', level: 'starter' },
  { id: 'w4', english: 'dog', chinese: '狗', example: 'My dog likes to run.', level: 'starter' },
  { id: 'w5', english: 'happy', chinese: '开心的', example: 'I am happy today.', level: 'starter' },
  { id: 'w6', english: 'school', chinese: '学校', example: 'I go to school by bus.', level: 'starter' },
  { id: 'w7', english: 'family', chinese: '家庭', example: 'My family is big.', level: 'starter' },
  { id: 'w8', english: 'friend', chinese: '朋友', example: 'Tom is my best friend.', level: 'starter' },
  { id: 'w9', english: 'red', chinese: '红色', example: 'I like the red ball.', level: 'starter' },
  { id: 'w10', english: 'water', chinese: '水', example: 'Can I have some water?', level: 'starter' },

  // Mover
  { id: 'w11', english: 'beautiful', chinese: '美丽的', example: 'The garden is beautiful.', level: 'mover' },
  { id: 'w12', english: 'breakfast', chinese: '早餐', example: 'I have breakfast at 7.', level: 'mover' },
  { id: 'w13', english: 'country', chinese: '国家', example: 'China is a big country.', level: 'mover' },
  { id: 'w14', english: 'different', chinese: '不同的', example: 'We are in different classes.', level: 'mover' },
  { id: 'w15', english: 'excited', chinese: '兴奋的', example: 'I am excited about the trip.', level: 'mover' },
  { id: 'w16', english: 'favourite', chinese: '最喜欢的', example: 'Pizza is my favourite food.', level: 'mover' },
  { id: 'w17', english: 'hobby', chinese: '爱好', example: 'My hobby is drawing.', level: 'mover' },
  { id: 'w18', english: 'important', chinese: '重要的', example: 'Reading is important.', level: 'mover' },
  { id: 'w19', english: 'journey', chinese: '旅行', example: 'The journey was long.', level: 'mover' },
  { id: 'w20', english: 'kitchen', chinese: '厨房', example: 'My mother is in the kitchen.', level: 'mover' },

  // Flyer
  { id: 'w21', english: 'adventure', chinese: '冒险', example: 'We had an adventure in the forest.', level: 'flyer' },
  { id: 'w22', english: 'brave', chinese: '勇敢的', example: 'The brave boy helped his friend.', level: 'flyer' },
  { id: 'w23', english: 'comfortable', chinese: '舒适的', example: 'This chair is comfortable.', level: 'flyer' },
  { id: 'w24', english: 'decide', chinese: '决定', example: 'I cannot decide what to wear.', level: 'flyer' },
  { id: 'w25', english: 'environment', chinese: '环境', example: 'We must protect the environment.', level: 'flyer' },
  { id: 'w26', english: 'festival', chinese: '节日', example: 'Spring Festival is my favourite.', level: 'flyer' },
  { id: 'w27', english: 'gentle', chinese: '温柔的', example: 'The nurse is gentle with babies.', level: 'flyer' },
  { id: 'w28', english: 'honest', chinese: '诚实的', example: 'It is important to be honest.', level: 'flyer' },
  { id: 'w29', english: 'imagine', chinese: '想象', example: 'Imagine you can fly!', level: 'flyer' },
  { id: 'w30', english: 'journey', chinese: '旅程', example: 'The journey to space was exciting.', level: 'flyer' },

  // KET
  { id: 'w31', english: 'accommodation', chinese: '住宿', example: 'We need to book accommodation.', level: 'ket' },
  { id: 'w32', english: 'available', chinese: '可获得的', example: 'Is this room available?', level: 'ket' },
  { id: 'w33', english: 'communication', chinese: '交流', example: 'Good communication is important.', level: 'ket' },
  { id: 'w34', english: 'convenient', chinese: '方便的', example: 'Online shopping is convenient.', level: 'ket' },
  { id: 'w35', english: 'delicious', chinese: '美味的', example: 'The cake looks delicious.', level: 'ket' },
  { id: 'w36', english: 'experience', chinese: '经历', example: 'It was a great experience.', level: 'ket' },
  { id: 'w37', english: 'independent', chinese: '独立的', example: 'She is very independent.', level: 'ket' },
  { id: 'w38', english: 'opportunity', chinese: '机会', example: 'This is a good opportunity.', level: 'ket' },
  { id: 'w39', english: 'recommend', chinese: '推荐', example: 'I recommend this restaurant.', level: 'ket' },
  { id: 'w40', english: 'responsible', chinese: '负责的', example: 'He is responsible for the team.', level: 'ket' },
];

export const getWordsByLevel = (level?: string) =>
  level ? words.filter((w) => w.level === level) : words;

export const getWordById = (id: string) => words.find((w) => w.id === id);
