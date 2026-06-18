import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Layers, Lightbulb, MessageCircle, PenTool, Search, Target } from 'lucide-react';
import Layout from '@/components/Layout';
import SpeakButton from '@/components/SpeakButton';
import { phase4ReviewTopics, reviewCategories } from '@/data/phase4Review';
import type { ReviewTopic } from '@/data/phase4Review';

const hasEnglish = (text: string) => /[a-zA-Z]/.test(text);

const categoryIcons: Record<ReviewTopic['category'], React.ReactNode> = {
  vocabulary: <BookOpen size={22} />,
  phrase: <Layers size={22} />,
  grammar: <PenTool size={22} />,
  pattern: <MessageCircle size={22} />,
  blindspot: <Search size={22} />,
  error: <AlertCircle size={22} />,
};

const categoryColors: Record<ReviewTopic['category'], string> = {
  vocabulary: 'from-coral/30 to-coral/10',
  phrase: 'from-ocean/30 to-ocean/10',
  grammar: 'from-nebula/30 to-nebula/10',
  pattern: 'from-mint/30 to-mint/10',
  blindspot: 'from-star/40 to-star/10',
  error: 'from-coral/40 to-coral/10',
};

const categoryDotColors: Record<ReviewTopic['category'], string> = {
  vocabulary: 'bg-coral',
  phrase: 'bg-ocean',
  grammar: 'bg-nebula',
  pattern: 'bg-mint',
  blindspot: 'bg-star',
  error: 'bg-coral',
};

export default function Review() {
  const [activeCategory, setActiveCategory] = useState<ReviewTopic['category']>('vocabulary');
  const topics = phase4ReviewTopics.filter((t) => t.category === activeCategory);
  const categoryLabel = reviewCategories.find((c) => c.key === activeCategory)?.label ?? '复习';

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">全考点复盘梳理</h1>
          <p className="text-sm text-space-900/60">第四阶段 · 4 课时 · 词汇、短语、语法、句型系统复盘</p>
        </div>
      </div>

      <div className="mb-6 rounded-3xl bg-gradient-to-br from-star/20 to-star/5 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-star text-white shadow-sm">
            <Target size={24} />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-space-900">第四阶段复习策略</h2>
            <p className="text-sm text-space-900/70">
              第四阶段为全考点复盘，覆盖 starter 到 ket 的全部内容。请优先复习薄弱模块，集中攻克错题和高频易错点。
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {reviewCategories.map((c) => {
          const active = c.key === activeCategory;
          return (
            <button
              key={c.key}
              onClick={() => setActiveCategory(c.key)}
              className={`card flex flex-col items-center gap-2 p-4 text-center transition-all ${
                active ? `bg-gradient-to-br ${categoryColors[c.key]} ring-2 ring-space-900/10` : 'bg-white/60 hover:bg-white'
              }`}
            >
              <div className={`rounded-2xl p-2 text-white shadow-sm ${categoryDotColors[c.key]}`}>{categoryIcons[c.key]}</div>
              <span className="font-display font-bold text-space-900">{c.label}</span>
            </button>
          );
        })}
      </div>

      {/* Topics List */}
      <div className="space-y-5">
        {topics.map((topic) => (
          <div key={topic.id} className="card">
            <div className="mb-4 flex items-start gap-3">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${categoryDotColors[topic.category]}`}>
                <Lightbulb size={20} />
              </div>
              <div>
                <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-space-900/5 px-3 py-1 text-xs font-semibold text-space-900/70">
                  {categoryLabel}
                </div>
                <h3 className="font-display text-lg font-bold text-space-900">{topic.title}</h3>
              </div>
            </div>

            <p className="mb-4 leading-relaxed text-space-900/80">{topic.content}</p>

            <div className="mb-4 rounded-2xl bg-space-900/[0.02] p-4">
              <p className="mb-2 text-xs font-semibold text-space-900/50">核心要点</p>
              <ul className="space-y-2">
                {topic.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-space-900/80">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-mint" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {topic.examples && topic.examples.length > 0 && (
              <div className="rounded-2xl bg-star/5 p-4">
                <p className="mb-2 text-xs font-semibold text-space-900/50">典型示例</p>
                <ul className="space-y-2">
                  {topic.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-space-900/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-star text-xs font-bold text-space-900">
                        {idx + 1}
                      </span>
                      <span className="flex-1">{example}</span>
                      {hasEnglish(example) && <SpeakButton text={example} size={14} />}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/learn" className="btn-primary">
          返回学习模块 <ArrowRight size={18} />
        </Link>
      </div>
    </Layout>
  );
}
