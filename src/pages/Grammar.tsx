import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Trophy } from 'lucide-react';
import Layout from '@/components/Layout';
import GrammarQuiz from '@/components/GrammarQuiz';
import { grammarQuestions } from '@/data/grammar';
import { useProgressStore } from '@/stores/progressStore';
import PhaseSelector from '@/components/PhaseSelector';
import { getLevelsByPhase } from '@/types';

export default function Grammar() {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const progress = useProgressStore();

  const questions = useMemo(() => {
    const phaseLevels = getLevelsByPhase(progress.currentPhase);
    return grammarQuestions.filter((q) => phaseLevels.includes(q.level));
  }, [progress.currentPhase]);

  useEffect(() => {
    setIndex(0);
    setFinished(false);
    setCorrectCount(0);
  }, [progress.currentPhase]);

  const current = questions[index];

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setCorrectCount((c) => c + 1);
      progress.updateScore('grammarScore', 5);
    }

    setTimeout(() => {
      if (index < questions.length - 1) {
        setIndex((i) => i + 1);
      } else {
        setFinished(true);
      }
    }, 1200);
  };

  const restart = () => {
    setIndex(0);
    setFinished(false);
    setCorrectCount(0);
  };

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">语法练习</h1>
          <p className="text-sm text-space-900/60">
            {finished ? '练习完成' : `第 ${index + 1} / ${questions.length} 题`}
          </p>
        </div>
      </div>

      <PhaseSelector />

      {!finished ? (
        <>
          <div className="mb-6 h-3 w-full overflow-hidden rounded-full bg-space-900/5">
            <div
              className="h-full rounded-full bg-ocean transition-all duration-500"
              style={{ width: `${((index + 1) / questions.length) * 100}%` }}
            />
          </div>
          <GrammarQuiz key={current.id} question={current} onAnswer={handleAnswer} />
        </>
      ) : (
        <div className="mx-auto max-w-md text-center">
          <div className="card flex flex-col items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-star text-4xl text-space-900 shadow-glow-sm">
              <Trophy size={40} />
            </div>
            <h2 className="text-2xl font-bold text-space-900">练习完成！</h2>
            <p className="text-space-900/70">
              答对 <span className="font-bold text-mint">{correctCount}</span> / {questions.length} 题
            </p>
            <div className="flex gap-3">
              <button onClick={restart} className="btn-outline">
                再来一次
              </button>
              <Link to="/learn" className="btn-primary">
                继续学习 <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
