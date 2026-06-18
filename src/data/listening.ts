import type { ListeningQuestion } from '@/types';

export const listeningQuestions: ListeningQuestion[] = [
  {
    id: 'l1',
    audioText: 'The girl wants a red balloon.',
    options: ['一只红气球', '一只蓝气球', '一只绿气球'],
    answer: 0,
    level: 'starter',
  },
  {
    id: 'l2',
    audioText: 'My brother goes to school at eight o\'clock.',
    options: ['七点', '八点', '九点'],
    answer: 1,
    level: 'starter',
  },
  {
    id: 'l3',
    audioText: 'We are going to visit the zoo this weekend.',
    options: ['公园', '动物园', '博物馆'],
    answer: 1,
    level: 'mover',
  },
  {
    id: 'l4',
    audioText: 'She bought a new dress for the party.',
    options: ['一条新裙子', '一件新外套', '一双新鞋'],
    answer: 0,
    level: 'mover',
  },
  {
    id: 'l5',
    audioText: 'The train will leave in twenty minutes.',
    options: ['十分钟后', '二十分钟后', '三十分钟后'],
    answer: 1,
    level: 'flyer',
  },
  {
    id: 'l6',
    audioText: 'He suggested going to the cinema after dinner.',
    options: ['去看电影', '去购物', '去图书馆'],
    answer: 0,
    level: 'flyer',
  },
  {
    id: 'l7',
    audioText: 'The museum is located next to the post office.',
    options: ['银行旁边', '邮局旁边', '学校旁边'],
    answer: 1,
    level: 'ket',
  },
  {
    id: 'l8',
    audioText: 'She apologized for being late to the meeting.',
    options: ['她迟到了', '她早到了', '她取消了会议'],
    answer: 0,
    level: 'ket',
  },
];

export const getListeningByLevel = (level?: string) =>
  level ? listeningQuestions.filter((q) => q.level === level) : listeningQuestions;
