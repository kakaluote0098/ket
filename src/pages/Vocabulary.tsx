import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import Layout from '@/components/Layout';
import FlipCard from '@/components/FlipCard';
import { words } from '@/data/words';
import { useProgressStore } from '@/stores/progressStore';
import PhaseSelector from '@/components/PhaseSelector';
import { getLevelsByPhase, type WordCategory } from '@/types';
import Empty from '@/components/Empty';

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

export default function Vocabulary() {
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState<WordCategory | 'all'>('all');
  const progress = useProgressStore();

  const phaseLevels = useMemo(() => getLevelsByPhase(progress.currentPhase), [progress.currentPhase]);

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
    let filtered = words.filter((w) => phaseLevels.includes(w.level));
    if (category !== 'all') {
      filtered = filtered.filter((w) => w.category === category);
    }
    return filtered;
  }, [category, phaseLevels]);

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

  useEffect(() => {
    setCategory('all');
    setIndex(0);
  }, [progress.currentPhase]);

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

      <PhaseSelector />

      <div className="mb-4 mt-4 flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => handleCategoryChange('all')}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            category === 'all'
              ? 'bg-nebula text-white shadow-glow-sm'
              : 'bg-white/60 text-space-900 hover:bg-white'
          }`}
        >
          全部
        </button>
        {availableCategories.map((key) => (
          <button
            key={key}
            onClick={() => handleCategoryChange(key)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              category === key
                ? 'bg-mint text-white shadow-glow-sm'
                : 'bg-white/60 text-space-900 hover:bg-white'
            }`}
          >
            {categoryLabels[key].emoji} {categoryLabels[key].label}
          </button>
        ))}
      </div>

      {shuffled.length === 0 ? (
        <Empty title="该分类下暂无单词" description="当前阶段没有相关词汇，请切换分类或阶段" />
      ) : (
        <>
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
        </>
      )}
    </Layout>
  );
}
