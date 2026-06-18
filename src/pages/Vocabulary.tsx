import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import Layout from '@/components/Layout';
import FlipCard from '@/components/FlipCard';
import { words, getWordsByCategory } from '@/data/words';
import { useProgressStore } from '@/stores/progressStore';
import type { WordCategory } from '@/types';

const categoryLabels: Record<WordCategory, { label: string; emoji: string }> = {
  school: { label: '校园', emoji: '🏫' },
  family: { label: '家庭', emoji: '🏠' },
  food: { label: '食物', emoji: '🍎' },
  animals: { label: '动物', emoji: '🐱' },
  colors: { label: '颜色', emoji: '🎨' },
  numbers: { label: '数字', emoji: '🔢' },
  clothes: { label: '服饰', emoji: '👕' },
  weather: { label: '天气', emoji: '☀️' },
};

export default function Vocabulary() {
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState<WordCategory | 'all'>('all');
  const progress = useProgressStore();

  const pool = useMemo(
    () => (category === 'all' ? words : getWordsByCategory(category)),
    [category]
  );

  const shuffled = useMemo(() => [...pool].sort(() => Math.random() - 0.5), [pool]);
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

  const handleCategoryChange = (newCategory: WordCategory | 'all') => {
    setCategory(newCategory);
    setIndex(0);
  };

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

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange('all')}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            category === 'all'
              ? 'bg-nebula text-white shadow-glow-sm'
              : 'bg-white/60 text-space-900 hover:bg-white'
          }`}
        >
          全部
        </button>
        {(Object.keys(categoryLabels) as WordCategory[]).map((key) => (
          <button
            key={key}
            onClick={() => handleCategoryChange(key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              category === key
                ? 'bg-mint text-white shadow-glow-sm'
                : 'bg-white/60 text-space-900 hover:bg-white'
            }`}
          >
            {categoryLabels[key].emoji} {categoryLabels[key].label}
          </button>
        ))}
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
