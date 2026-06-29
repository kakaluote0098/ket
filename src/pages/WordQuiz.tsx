import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, RefreshCcw, X } from 'lucide-react';
import Layout from '@/components/Layout';
import PhaseSelector from '@/components/PhaseSelector';
import Empty from '@/components/Empty';
import { words } from '@/data/words';
import { useProgressStore } from '@/stores/progressStore';
import { getLevelsByPhase, type WordCategory } from '@/types';
import { cn } from '@/lib/utils';

const categoryLabels: Record<WordCategory, { label: string; emoji: string }> = {
  school: { label: '校园', emoji: '🏫' },
  family: { label: '家庭', emoji: '🏠' },
  food: { label: '食物', emoji: '🍎' },
  animals: { label: '动物', emoji: '🐱' },
  colors: { label: '颜色', emoji: '🎨' },
  numbers: { label: '数字', emoji: '🔢' },
  clothes: { label: '服饰', emoji: '👕' },
  weather: { label: '天气', emoji: '☀️' },
  travel: { label: '出行', emoji: '✈️' },
  study: { label: '学习', emoji: '📚' },
  hobby: { label: '兴趣', emoji: '🎸' },
  sports: { label: '运动', emoji: '⚽' },
  festival: { label: '节日', emoji: '🎉' },
  ket_core: { label: 'KET核心', emoji: '⭐' },
};

function shuffleArray<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function WordQuiz() {
  const progress = useProgressStore();
  const phaseLevels = useMemo(() => getLevelsByPhase(progress.currentPhase), [progress.currentPhase]);

  const [category, setCategory] = useState<WordCategory | null>(null);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const availableCategories = useMemo(() => {
    const set = new Set<WordCategory>();
    for (const w of words) {
      if (phaseLevels.includes(w.level)) {
        set.add(w.category);
      }
    }
    return (Object.keys(categoryLabels) as WordCategory[]).filter((key) => set.has(key));
  }, [phaseLevels]);

  const pool = useMemo(() => {
    if (!category) return [];
    return words.filter((w) => phaseLevels.includes(w.level) && w.category === category);
  }, [category, phaseLevels]);

  const shuffled = useMemo(() => shuffleArray(pool), [pool]);
  const current = shuffled[index];

  // Letters that have not been used yet.
  const remainingLetters = useMemo(() => {
    if (!current) return [];
    const chars = current.english.toLowerCase().split('');
    const remaining: string[] = [];
    const answerCopy = [...answer];
    for (const ch of chars) {
      const idx = answerCopy.indexOf(ch);
      if (idx >= 0) {
        answerCopy.splice(idx, 1);
      } else {
        remaining.push(ch);
      }
    }
    return shuffleArray(remaining);
  }, [current, answer]);

  useEffect(() => {
    setCategory(null);
    setIndex(0);
    setAnswer([]);
    setFeedback('idle');
  }, [progress.currentPhase]);

  useEffect(() => {
    setIndex(0);
    setAnswer([]);
    setFeedback('idle');
  }, [category]);

  const handleLetterClick = (letter: string) => {
    if (feedback !== 'idle' || !current) return;
    const next = [...answer, letter];
    setAnswer(next);

    if (next.length === current.english.length) {
      const isCorrect = next.join('') === current.english.toLowerCase();
      if (isCorrect) {
        setFeedback('correct');
        progress.updateScore('readingScore', 3);
      } else {
        setFeedback('wrong');
        progress.addWeakWord(current.id);
      }
      setTimeout(() => {
        setFeedback('idle');
        setAnswer([]);
        setIndex((prev) => (prev + 1 < shuffled.length ? prev + 1 : 0));
      }, 2500);
    }
  };

  const handleUndo = () => {
    if (feedback !== 'idle') return;
    setAnswer((prev) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setAnswer([]);
    setFeedback('idle');
  };

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">单词测验</h1>
          <p className="text-sm text-space-900/60">
            {category ? `测验 ${categoryLabels[category].label} · ${index + 1} / ${shuffled.length}` : '选择一类单词开始测验'}
          </p>
        </div>
      </div>

      <PhaseSelector />

      {!category ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {availableCategories.map((key) => (
            <button
              key={key}
              onClick={() => setCategory(key)}
              className="card flex flex-col items-center gap-2 p-6 text-center transition-all hover:bg-white"
            >
              <span className="text-4xl">{categoryLabels[key].emoji}</span>
              <span className="font-display text-lg font-bold text-space-900">测验{categoryLabels[key].label}</span>
            </button>
          ))}
        </div>
      ) : shuffled.length === 0 ? (
        <Empty title="当前分类暂无单词" description="请切换阶段或选择其他分类" />
      ) : (
        <>
          <div className="mb-4 flex justify-center">
            <button
              onClick={() => setCategory(null)}
              className="rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-space-900 transition-colors hover:bg-white"
            >
              重新选择分类
            </button>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="card flex flex-col items-center gap-6 p-6 text-center">
              {/* Chinese meaning */}
              <div>
                <p className="text-sm text-space-900/50">根据汉语意思拼出单词</p>
                <p className="mt-1 text-4xl font-bold text-space-900">{current.chinese}</p>
              </div>

              {/* Current answer slots */}
              <div className="flex min-h-[3.5rem] flex-wrap items-center justify-center gap-2">
                {current.english.split('').map((_, idx) => (
                  <button
                    key={idx}
                    onClick={handleUndo}
                    disabled={idx >= answer.length || feedback !== 'idle'}
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold transition-all',
                      idx < answer.length
                        ? 'bg-nebula text-white shadow-glow-sm'
                        : 'border-2 border-dashed border-space-900/10 bg-space-900/[0.02] text-space-900/20',
                      feedback !== 'idle' && idx < answer.length && feedback === 'wrong' && 'bg-coral text-white'
                    )}
                  >
                    {answer[idx]}
                  </button>
                ))}
              </div>

              {/* Feedback */}
              {feedback === 'correct' && (
                <div className="flex items-center gap-2 rounded-full bg-mint/10 px-4 py-2 text-mint">
                  <Check size={20} /> 回答正确！
                </div>
              )}
              {feedback === 'wrong' && (
                <div className="flex flex-col items-center gap-1 rounded-2xl bg-coral/10 px-4 py-3 text-coral">
                  <div className="flex items-center gap-2 font-semibold">
                    <X size={20} /> 回答错误
                  </div>
                  <p className="text-sm text-space-900/70">
                    正确答案是 <span className="font-bold text-space-900">{current.english}</span>，已加入复习弱词。
                  </p>
                </div>
              )}

              {/* Clickable letters */}
              {feedback === 'idle' && (
                <div className="flex flex-wrap justify-center gap-2">
                  {remainingLetters.map((letter, idx) => (
                    <button
                      key={`${letter}-${idx}`}
                      onClick={() => handleLetterClick(letter)}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl font-bold text-space-900 shadow-sm transition-all hover:bg-nebula hover:text-white active:scale-95"
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              )}

              <button
                onClick={handleReset}
                className="flex items-center gap-2 text-sm font-semibold text-space-900/50 hover:text-nebula"
              >
                <RefreshCcw size={14} /> 重置本词
              </button>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
