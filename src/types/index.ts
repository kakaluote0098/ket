export type Level = 'starter' | 'mover' | 'flyer' | 'ket';

export type Phase = 'phase1' | 'phase2' | 'phase3' | 'phase4';

export const phaseLabels: Record<Phase, { label: string; description: string; levels: Level[] }> = {
  phase1: { label: '第一阶段', description: '基础启蒙', levels: ['starter'] },
  phase2: { label: '第二阶段', description: '体系搭建', levels: ['mover', 'flyer'] },
  phase3: { label: '第三阶段', description: 'KET 系统强化', levels: ['ket'] },
  phase4: { label: '第四阶段', description: '全考点复盘', levels: ['starter', 'mover', 'flyer', 'ket'] },
};

export const getLevelsByPhase = (phase: Phase): Level[] => phaseLabels[phase].levels;

export type WordCategory =
  | 'school'
  | 'family'
  | 'food'
  | 'animals'
  | 'colors'
  | 'numbers'
  | 'clothes'
  | 'weather'
  | 'travel'
  | 'study'
  | 'hobby'
  | 'sports'
  | 'festival'
  | 'ket_core';

export interface Word {
  id: string;
  english: string;
  chinese: string;
  example: string;
  category: WordCategory;
  level: Level;
  partOfSpeech?: string;
  collocation?: string;
  phrase?: string;
  synonyms?: string[];
}

export interface GrammarQuestion {
  id: string;
  question: string;
  translation: string;
  options: string[];
  answer: number;
  explanation: string;
  level: Level;
}

export interface GrammarLesson {
  id: string;
  title: string;
  content: string;
  examples: string[];
  tip?: string;
  level: Level;
}

export type KETModule = 'reading' | 'writing' | 'listening' | 'speaking';

export interface ExamGuide {
  id: string;
  module: KETModule;
  title: string;
  duration: string;
  parts: number;
  score: string;
  rules: string[];
  questionTypes: {
    name: string;
    description: string;
    tips: string[];
  }[];
  sample: {
    question: string;
    options?: string[];
    answer?: string;
    explanation: string;
  };
}

export interface ListeningQuestion {
  id: string;
  audioText: string;
  options: string[];
  answer: number;
  level: Level;
}

export type PracticeCategory = 'listening' | 'reading' | 'writing' | 'speaking';

export interface PracticeExercise {
  id: string;
  category: PracticeCategory;
  subType: string;
  title: string;
  content: string;
  audioText?: string;
  options?: string[];
  answer?: string | number;
  explanation?: string;
  sample?: string;
  tips?: string[];
  level: Level;
}

export interface CourseUnit {
  id: string;
  title: string;
  level: Level;
  order: number;
  wordIds: string[];
  grammarIds: string[];
  grammarLessonIds: string[];
  listeningIds: string[];
}

export interface UserProgress {
  streakDays: number;
  lastStudyDate: string;
  masteredWords: string[];
  weakWords: string[];
  grammarScore: number;
  listeningScore: number;
  speakingScore: number;
  readingScore: number;
  writingScore: number;
  completedUnits: string[];
  badges: string[];
  dailyGoalWords: number;
  dailyGoalExercises: number;
  currentPhase: Phase;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  condition: string;
}
