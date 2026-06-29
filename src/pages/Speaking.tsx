import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SpeakingCard from '@/components/SpeakingCard';
import Empty from '@/components/Empty';
import { words } from '@/data/words';
import { useProgressStore } from '@/stores/progressStore';
import PhaseSelector from '@/components/PhaseSelector';
import { getLevelsByPhase } from '@/types';

export default function Speaking() {
  const [index, setIndex] = useState(0);
  const progress = useProgressStore();

  const sentences = useMemo(() => {
    const phaseLevels = getLevelsByPhase(progress.currentPhase);
    return words.filter((w) => phaseLevels.includes(w.level)).map((w) => w.example);
  }, [progress.currentPhase]);

  useEffect(() => {
    setIndex(0);
  }, [progress.currentPhase]);

  const handleComplete = (score: number) => {
    const delta = score >= 4 ? 4 : 1;
    progress.updateScore('speakingScore', delta);
  };

  const next = () => {
    setIndex((i) => (i + 1) % sentences.length);
  };

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">口语跟读</h1>
          <p className="text-sm text-space-900/60">
            {index + 1} / {sentences.length}
          </p>
        </div>
      </div>

      <PhaseSelector />

      {sentences.length === 0 ? (
        <Empty title="当前阶段暂无例句" description="请先完成前置阶段学习，或切换到有例句的阶段再来跟读。" />
      ) : (
        <>
          <SpeakingCard key={index} sentence={sentences[index]} onComplete={handleComplete} />

          <div className="mt-10 flex justify-center">
            <button onClick={next} className="btn-primary">
              下一句 <ArrowRight size={18} />
            </button>
          </div>
        </>
      )}
    </Layout>
  );
}
