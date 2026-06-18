export type Level = 'starter' | 'mover' | 'flyer' | 'ket';

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
  | 'festival';

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

export interface ListeningQuestion {
  id: string;
  audioText: string;
  options: string[];
  answer: number;
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
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  condition: string;
}
