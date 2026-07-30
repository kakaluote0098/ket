import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
  body: { label: '身体', emoji: '🦵' },
  health: { label: '健康', emoji: '💊' },
  transport: { label: '交通', emoji: '🚌' },
  shopping: { label: '购物', emoji: '🛒' },
  places: { label: '地点', emoji: '🏙️' },
  emotions: { label: '情感', emoji: '😊' },
  jobs: { label: '职业', emoji: '👩‍⚕️' },
  technology: { label: '科技', emoji: '💻' },
};

export default function Vocabulary() {
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState<WordCategory | 'all'>('all');
  const [searchParams] = useSearchParams();
  const progress = useProgressStore();

  const weakMode = searchParams.get('mode') === 'weak';
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
    if (weakMode) {
      return words.filter((w) => progress.weakWords.includes(w.id));
    }
    let filtered = words.filter((w) => phaseLevels.includes(w.level));
    if (category !== 'all') {
      filtered = filtered.filter((w) => w.category === category);
    }
    return filtered;
  }, [category, phaseLevels, progress.weakWords, weakMode]);

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
    setIndex((prev) => {
      const next = prev + 1;
      return next >= shuffled.length ? 0 : next;
    });
  };

  const restart = () => setIndex(0);

  const handleCategoryChange = (newCategory: WordCategory | 'all') => {
    setCategory(newCategory);
    setIndex(0);
  };

  useEffect(() => {
    const nextCategories = new Set<WordCategory>();
    for (const w of words) {
      if (phaseLevels.includes(w.level)) {
        nextCategories.add(w.category);
      }
    }
    setCategory((prev) => (prev !== 'all' && nextCategories.has(prev) ? prev : 'all'));
    setIndex(0);
  }, [progress.currentPhase, phaseLevels]);

  // Guard against pool shrinking while index is pointing to a removed item.
  useEffect(() => {
    if (shuffled.length > 0 && index >= shuffled.length) {
      setIndex(0);
    }
  }, [shuffled.length, index]);

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-3 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-space-900">单词记忆</h1>
          <p className="text-base text-space-900/60">
            {shuffled.length > 0 ? `${index + 1} / ${shuffled.length}` : '0 / 0'}
          </p>
        </div>
      </div>

      <PhaseSelector />

      {weakMode && progress.weakWords.length > 0 && (
        <div className="mb-4 mt-4 rounded-2xl bg-coral/10 p-3 text-center text-sm font-semibold text-coral">
          正在复习你的薄弱词汇（{progress.weakWords.length} 个）
        </div>
      )}

      {!weakMode && (
        <div className="mb-4 mt-5">
          <p className="mb-3 text-base font-bold text-space-900/70">选择主题</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`min-h-[3rem] rounded-full px-5 py-2.5 text-base font-bold transition-all ${
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
                className={`min-h-[3rem] rounded-full px-5 py-2.5 text-base font-bold transition-all ${
                  category === key
                    ? 'bg-mint text-white shadow-glow-sm'
                    : 'bg-white/60 text-space-900 hover:bg-white'
                }`}
              >
                <span className="mr-1 text-xl">{categoryLabels[key].emoji}</span>
                {categoryLabels[key].label}
              </button>
            ))}
          </div>
        </div>
      )}

      {shuffled.length === 0 || !current ? (
        weakMode ? (
          <Empty title="暂无薄弱词汇" description="你还没有标记过需要加强的单词，先去学习和标记弱词吧。" />
        ) : (
          <Empty title="该分类下暂无单词" description="当前阶段没有相关词汇，请切换分类或阶段" />
        )
      ) : (
        <>
          <div className="mb-6 h-4 w-full overflow-hidden rounded-full bg-space-900/5">
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
