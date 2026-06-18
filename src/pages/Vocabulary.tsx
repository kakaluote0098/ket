import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import Layout from '@/components/Layout';
import FlipCard from '@/components/FlipCard';
import { words } from '@/data/words';
import { useProgressStore } from '@/stores/progressStore';

export default function Vocabulary() {
  const [index, setIndex] = useState(0);
  const progress = useProgressStore();

  const shuffled = [...words].sort(() => Math.random() - 0.5);
  const current = shuffled[index];

  const handleMaster = () => {
    progress.masterWord(current.id);
    progress.updateScore('readingScore', 2);
    nextCard();
  };

  const handleWeak = () => {
    progress.addWeakWord(current.id);
    nextCard();
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % shuffled.length);
  };

  const restart = () => setIndex(0);

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">单词记忆</h1>
          <p className="text-sm text-space-900/60">
            {index + 1} / {shuffled.length}
          </p>
        </div>
      </div>

      <div className="mb-6 h-3 w-full overflow-hidden rounded-full bg-space-900/5">
        <div
          className="h-full rounded-full bg-mint transition-all duration-500"
          style={{ width: `${((index + 1) / shuffled.length) * 100}%` }}
        />
      </div>

      <FlipCard word={current} onMaster={handleMaster} onWeak={handleWeak} />

      <button
        onClick={restart}
        className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-white/60 px-5 py-2 text-sm font-semibold text-space-900 transition-colors hover:bg-white"
      >
        <RotateCcw size={16} /> 重新洗牌
      </button>
    </Layout>
  );
}
