import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProgress, Level } from '@/types';

const defaultProgress: UserProgress = {
  streakDays: 1,
  lastStudyDate: new Date().toISOString().slice(0, 10),
  masteredWords: [],
  weakWords: [],
  grammarScore: 20,
  listeningScore: 20,
  speakingScore: 20,
  readingScore: 20,
  writingScore: 20,
  completedUnits: [],
  badges: [],
  dailyGoalWords: 5,
  dailyGoalExercises: 3,
};

interface ProgressState extends UserProgress {
  checkIn: () => void;
  masterWord: (wordId: string) => void;
  addWeakWord: (wordId: string) => void;
  updateScore: (key: 'grammarScore' | 'listeningScore' | 'speakingScore' | 'readingScore' | 'writingScore', delta: number) => void;
  completeUnit: (unitId: string) => void;
  setDailyGoal: (words: number, exercises: number) => void;
  getWeakestSkill: () => keyof UserProgress;
  getRecommendedLevel: () => Level;
}

const scoreKeys: (keyof UserProgress)[] = [
  'grammarScore',
  'listeningScore',
  'speakingScore',
  'readingScore',
  'writingScore',
];

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...defaultProgress,

      checkIn: () => {
        const today = new Date().toISOString().slice(0, 10);
        const last = get().lastStudyDate;
        if (last === today) return;

        const lastDate = new Date(last);
        const todayDate = new Date(today);
        const diff = (todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24);

        set({
          lastStudyDate: today,
          streakDays: diff === 1 ? get().streakDays + 1 : 1,
        });
      },

      masterWord: (wordId) =>
        set((state) => ({
          masteredWords: state.masteredWords.includes(wordId)
            ? state.masteredWords
            : [...state.masteredWords, wordId],
          weakWords: state.weakWords.filter((id) => id !== wordId),
        })),

      addWeakWord: (wordId) =>
        set((state) => ({
          weakWords: state.weakWords.includes(wordId)
            ? state.weakWords
            : [...state.weakWords, wordId],
        })),

      updateScore: (key, delta) =>
        set((state) => {
          const next = Math.min(100, Math.max(0, (state[key] as number) + delta));
          return { [key]: next } as Partial<ProgressState>;
        }),

      completeUnit: (unitId) =>
        set((state) => ({
          completedUnits: state.completedUnits.includes(unitId)
            ? state.completedUnits
            : [...state.completedUnits, unitId],
        })),

      setDailyGoal: (words, exercises) => set({ dailyGoalWords: words, dailyGoalExercises: exercises }),

      getWeakestSkill: () => {
        const state = get();
        return scoreKeys.reduce(( weakest, key) =>
          (state[key] as number) < (state[weakest] as number) ? key : weakest
        , scoreKeys[0]);
      },

      getRecommendedLevel: () => {
        const completed = get().completedUnits.length;
        if (completed < 2) return 'starter';
        if (completed < 5) return 'mover';
        if (completed < 8) return 'flyer';
        return 'ket';
      },
    }),
    {
      name: 'ket-star-progress',
    }
  )
);
