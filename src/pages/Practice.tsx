import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Lightbulb, MessageCircle, Mic, PenTool, Volume2, XCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { practiceExercises } from '@/data/practiceExercises';
import { useProgressStore } from '@/stores/progressStore';
import PhaseSelector from '@/components/PhaseSelector';
import { speak } from '@/lib/speech';
import SpeakButton from '@/components/SpeakButton';
import Empty from '@/components/Empty';
import { getLevelsByPhase } from '@/types';
import type { PracticeCategory, PracticeExercise } from '@/types';

const categories: { key: PracticeCategory; label: string; icon: React.ReactNode; color: string; dot: string }[] = [
  { key: 'listening', label: '听力专项', icon: <Volume2 size={22} />, color: 'from-nebula/30 to-nebula/10', dot: 'bg-nebula' },
  { key: 'reading', label: '阅读专项', icon: <BookOpen size={22} />, color: 'from-coral/30 to-coral/10', dot: 'bg-coral' },
  { key: 'writing', label: '写作专项', icon: <PenTool size={22} />, color: 'from-ocean/30 to-ocean/10', dot: 'bg-ocean' },
  { key: 'speaking', label: '口语专项', icon: <MessageCircle size={22} />, color: 'from-mint/30 to-mint/10', dot: 'bg-mint' },
];

const isEnglishText = (text: string) => /[a-zA-Z]/.test(text) && !/[\u4e00-\u9fa5]/.test(text);

function ListeningCard({ exercise }: { exercise: PracticeExercise }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const answer = exercise.answer as number;

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={() => speak(exercise.audioText || '', { rate: 0.6 })}
        className="flex h-16 w-full items-center justify-center gap-2 rounded-2xl bg-nebula text-white shadow-glow-sm transition-transform hover:scale-[1.02]"
      >
        <Volume2 size={24} />
        <span className="font-display font-semibold">播放慢速音频</span>
      </button>
      <div className="grid gap-3 sm:grid-cols-3">
        {exercise.options?.map((option, idx) => {
          const isCorrect = idx === answer;
          const isSelected = idx === selected;
          const showCorrect = showResult && isCorrect;
          const showWrong = showResult && isSelected && !isCorrect;
          return (
            <button
              key={idx}
              disabled={showResult}
              onClick={() => handleSelect(idx)}
              className={`rounded-2xl border-2 px-4 py-4 text-center font-display font-semibold transition-all ${
                showCorrect
                  ? 'border-mint bg-mint/10 text-mint'
                  : showWrong
                    ? 'border-coral bg-coral/10 text-coral'
                    : 'border-space-900/10 bg-white hover:border-nebula hover:text-nebula'
              }`}
            >
              {option}
              {showCorrect && <CheckCircle size={18} className="ml-2 inline" />}
              {showWrong && <XCircle size={18} className="ml-2 inline" />}
            </button>
          );
        })}
      </div>
      {showResult && (
        <div className="rounded-2xl bg-star/10 p-4 text-sm leading-relaxed text-space-900/80">
          <span className="font-bold text-star">解析：</span>
          {exercise.explanation}
        </div>
      )}
    </div>
  );
}

function ReadingCard({ exercise }: { exercise: PracticeExercise }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const answer = exercise.answer as number;

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3">
        {exercise.options?.map((option, idx) => {
          const isCorrect = idx === answer;
          const isSelected = idx === selected;
          const showCorrect = showResult && isCorrect;
          const showWrong = showResult && isSelected && !isCorrect;
          return (
            <div key={idx} className="flex items-center gap-2">
              <button
                disabled={showResult}
                onClick={() => handleSelect(idx)}
                className={`flex flex-1 items-center justify-between rounded-2xl border-2 px-5 py-4 text-left font-display font-semibold transition-all ${
                  showCorrect
                    ? 'border-mint bg-mint/10 text-mint'
                    : showWrong
                      ? 'border-coral bg-coral/10 text-coral'
                      : 'border-space-900/10 bg-white hover:border-coral hover:text-coral'
                }`}
              >
                <span>{option}</span>
                <span className="flex items-center gap-2">
                  {showCorrect && <CheckCircle size={20} />}
                  {showWrong && <XCircle size={20} />}
                </span>
              </button>
              {!showResult && isEnglishText(option) && <SpeakButton text={option} size={16} />}
            </div>
          );
        })}
      </div>
      {showResult && (
        <div className="rounded-2xl bg-star/10 p-4 text-sm leading-relaxed text-space-900/80">
          <span className="font-bold text-star">解析：</span>
          {exercise.explanation}
        </div>
      )}
    </div>
  );
}

function WritingCard({ exercise }: { exercise: PracticeExercise }) {
  return (
    <div className="space-y-4">
      {exercise.sample && (
        <div className="rounded-2xl bg-ocean/10 p-4">
          <p className="mb-2 flex items-center gap-2 font-display font-bold text-ocean">
            参考范文
            <SpeakButton text={exercise.sample} size={16} />
          </p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-space-900/80">{exercise.sample}</p>
        </div>
      )}
      {exercise.tips && (
        <div className="space-y-2">
          {exercise.tips.map((tip, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-space-900/80">
              <Lightbulb size={16} className="mt-0.5 shrink-0 text-star" />
              {tip}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SpeakingCard({ exercise }: { exercise: PracticeExercise }) {
  return (
    <div className="space-y-4">
      {exercise.sample && (
        <div className="rounded-2xl bg-mint/10 p-4">
          <p className="mb-2 font-display font-bold text-mint">参考回答</p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-space-900/80">{exercise.sample}</p>
        </div>
      )}
      <button
        onClick={() => speak(exercise.sample || '')}
        className="inline-flex items-center gap-2 rounded-full bg-nebula/10 px-4 py-2 text-sm font-semibold text-nebula transition-colors hover:bg-nebula/20"
      >
        <Volume2 size={18} /> 播放参考发音
      </button>
      <button
        onClick={() => speak(exercise.content)}
        className="ml-2 inline-flex items-center gap-2 rounded-full bg-mint/10 px-4 py-2 text-sm font-semibold text-mint transition-colors hover:bg-mint/20"
      >
        <Mic size={18} /> 开始跟读练习
      </button>
      {exercise.tips && (
        <div className="space-y-2">
          {exercise.tips.map((tip, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-space-900/80">
              <Lightbulb size={16} className="mt-0.5 shrink-0 text-star" />
              {tip}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Practice() {
  const [activeCategory, setActiveCategory] = useState<PracticeCategory>('listening');
  const progress = useProgressStore();

  const exercises = useMemo(() => {
    const phaseLevels = getLevelsByPhase(progress.currentPhase);
    return practiceExercises.filter((e) => e.category === activeCategory && phaseLevels.includes(e.level));
  }, [activeCategory, progress.currentPhase]);

  const category = categories.find((c) => c.key === activeCategory)!;

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">专项基础训练</h1>
          <p className="text-sm text-space-900/60">听、读、写、说分项突破</p>
        </div>
      </div>

      <PhaseSelector />

      {/* Category Tabs */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {categories.map((c) => {
          const active = c.key === activeCategory;
          return (
            <button
              key={c.key}
              onClick={() => setActiveCategory(c.key)}
              className={`card flex flex-col items-center gap-2 p-4 text-center transition-all ${
                active ? `bg-gradient-to-br ${c.color} ring-2 ring-space-900/10` : 'bg-white/60 hover:bg-white'
              }`}
            >
              <div className={`rounded-2xl p-2 text-white shadow-sm ${c.dot}`}>{c.icon}</div>
              <span className="font-display font-bold text-space-900">{c.label}</span>
            </button>
          );
        })}
      </div>

      {/* Exercises */}
      {exercises.length === 0 ? (
        <Empty title="该专项暂无训练题" description="当前阶段还没有相关练习，请切换阶段或其他专项" />
      ) : (
        <div className="space-y-5">
          {exercises.map((exercise, idx) => (
            <div key={exercise.id} className="card">
              <div className="mb-4 flex items-start gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${category.dot}`}>
                  {idx + 1}
                </div>
                <div>
                  <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-space-900/5 px-3 py-1 text-xs font-semibold text-space-900/70">
                    {exercise.subType}
                  </div>
                  <h3 className="font-display text-lg font-bold text-space-900">{exercise.title}</h3>
                </div>
              </div>
              <p className="mb-5 leading-relaxed text-space-900/80">{exercise.content}</p>
              {activeCategory === 'listening' && <ListeningCard exercise={exercise} />}
              {activeCategory === 'reading' && <ReadingCard exercise={exercise} />}
              {activeCategory === 'writing' && <WritingCard exercise={exercise} />}
              {activeCategory === 'speaking' && <SpeakingCard exercise={exercise} />}
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <Link to="/learn" className="btn-primary">
          返回学习模块 <ArrowRight size={18} />
        </Link>
      </div>
    </Layout>
  );
}
