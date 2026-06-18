import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Volume2,
} from 'lucide-react';
import Layout from '@/components/Layout';
import { speak } from '@/lib/speech';
import {
  juniorGrades,
  type JuniorGrade,
  getTotalWordsByGrade,
} from '@/data/juniorWords';

const gradeLabels: Record<JuniorGrade, { emoji: string; color: string; bg: string }> = {
  grade7: { emoji: '📗', color: 'text-mint', bg: 'bg-mint' },
  grade8: { emoji: '📘', color: 'text-ocean', bg: 'bg-ocean' },
  grade9: { emoji: '📕', color: 'text-coral', bg: 'bg-coral' },
};

export default function JuniorEnglish() {
  const [activeGrade, setActiveGrade] = useState<JuniorGrade>('grade7');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const grade = useMemo(
    () => juniorGrades.find((g) => g.key === activeGrade)!,
    [activeGrade]
  );

  const handleGradeChange = (key: JuniorGrade) => {
    setActiveGrade(key);
    setActiveCategory(null);
  };

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link
          to="/"
          className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white"
        >
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">六年级英语</h1>
          <p className="text-sm text-space-900/60">初一至初三 · 人教版常用词汇 · 按场景分类</p>
        </div>
      </div>

      <div className="mb-6 rounded-3xl bg-gradient-to-br from-nebula/20 to-nebula/5 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nebula text-white shadow-sm">
            <GraduationCap size={24} />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-space-900">人教版初中词汇</h2>
            <p className="text-sm text-space-900/70">
              覆盖初一、初二、初三核心词汇，按生活与学习场景分类，每个单词支持美式发音与中文释义。
            </p>
          </div>
        </div>
      </div>

      {/* Grade Tabs */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        {juniorGrades.map((g) => {
          const active = g.key === activeGrade;
          const style = gradeLabels[g.key];
          return (
            <button
              key={g.key}
              onClick={() => handleGradeChange(g.key)}
              className={`card flex flex-col items-center gap-2 p-4 text-center transition-all ${
                active
                  ? `ring-2 ring-space-900/10 bg-gradient-to-br from-${style.bg.replace('bg-', '')}/30 to-${style.bg.replace('bg-', '')}/10`
                  : 'bg-white/60 hover:bg-white'
              }`}
            >
              <span className="text-2xl">{style.emoji}</span>
              <span className={`font-display font-bold ${active ? 'text-space-900' : 'text-space-900/80'}`}>
                {g.label}
              </span>
              <span className="text-xs text-space-900/60">{getTotalWordsByGrade(g)} 词</span>
            </button>
          );
        })}
      </div>

      {/* Category Filter */}
      <div className="mb-6 grid gap-3 rounded-3xl bg-white/60 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-space-900/80">
          <BookOpen size={18} className="text-nebula" />
          {grade.label}场景分类
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
              activeCategory === null
                ? 'bg-nebula text-white'
                : 'bg-space-900/5 text-space-900/70 hover:bg-space-900/10'
            }`}
          >
            全部
          </button>
          {grade.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                activeCategory === category.id
                  ? 'bg-nebula text-white'
                  : 'bg-space-900/5 text-space-900/70 hover:bg-space-900/10'
              }`}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Word Cards */}
      <div className="space-y-6">
        {grade.categories
          .filter((c) => !activeCategory || c.id === activeCategory)
          .map((category) => (
            <section key={category.id} className="card">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="font-display text-xl font-bold text-space-900">{category.title}</h2>
                <span className="ml-auto text-xs text-space-900/50">{category.words.length} 词</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.words.map((word) => (
                  <WordCard key={word.id} word={word} />
                ))}
              </div>
            </section>
          ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/" className="btn-primary">
          返回首页 <ArrowRight size={18} />
        </Link>
      </div>
    </Layout>
  );
}

function WordCard({ word }: { word: { id: string; english: string; chinese: string; phonetic: string; example: string } }) {
  return (
    <div className="rounded-2xl bg-space-900/[0.02] p-4 transition-all hover:bg-space-900/[0.04]">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-lg font-bold text-space-900">{word.english}</span>
        <button
          onClick={() => speak(word.english)}
          className="rounded-full bg-nebula/10 p-1.5 text-nebula transition-colors hover:bg-nebula/20"
          title="点击发音"
          type="button"
        >
          <Volume2 size={16} />
        </button>
      </div>
      <p className="mb-1 text-sm text-nebula">{word.phonetic}</p>
      <p className="mb-2 text-sm font-medium text-space-900/80">{word.chinese}</p>
      <p className="text-xs text-space-900/60">{word.example}</p>
    </div>
  );
}
