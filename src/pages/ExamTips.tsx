import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ClipboardList, Lightbulb, MessageCircle, Target, Volume2 } from 'lucide-react';
import Layout from '@/components/Layout';
import SpeakButton from '@/components/SpeakButton';
import { phase3ExamTips, examTipCategories } from '@/data/phase3ExamTips';
import type { ExamTip } from '@/data/phase3ExamTips';

const containsEnglish = (text: string) => /[a-zA-Z]/.test(text);

const categoryIcons: Record<ExamTip['category'], React.ReactNode> = {
  reading: <BookOpen size={22} />,
  listening: <Volume2 size={22} />,
  writing: <ClipboardList size={22} />,
  speaking: <MessageCircle size={22} />,
  strategy: <Target size={22} />,
};

const categoryColors: Record<ExamTip['category'], string> = {
  reading: 'from-coral/30 to-coral/10',
  listening: 'from-nebula/30 to-nebula/10',
  writing: 'from-ocean/30 to-ocean/10',
  speaking: 'from-mint/30 to-mint/10',
  strategy: 'from-star/40 to-star/10',
};

const categoryDotColors: Record<ExamTip['category'], string> = {
  reading: 'bg-coral',
  listening: 'bg-nebula',
  writing: 'bg-ocean',
  speaking: 'bg-mint',
  strategy: 'bg-star',
};

export default function ExamTips() {
  const [activeCategory, setActiveCategory] = useState<ExamTip['category']>('strategy');
  const tips = phase3ExamTips.filter((t) => t.category === activeCategory);
  const categoryLabel = examTipCategories.find((c) => c.key === activeCategory)?.label ?? '应试技巧';

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">应试技巧固化</h1>
          <p className="text-sm text-space-900/60">第三阶段 · 8 课时 · 审题、排除、时间、规范与错题本</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {examTipCategories.map((c) => {
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

      {/* Tips List */}
      <div className="space-y-5">
        {tips.map((tip) => (
          <div key={tip.id} className="card">
            <div className="mb-4 flex items-start gap-3">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${categoryDotColors[tip.category]}`}>
                <Lightbulb size={20} />
              </div>
              <div>
                <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-space-900/5 px-3 py-1 text-xs font-semibold text-space-900/70">
                  {categoryLabel}
                </div>
                <h3 className="font-display text-lg font-bold text-space-900">{tip.title}</h3>
              </div>
            </div>

            <p className="mb-4 leading-relaxed text-space-900/80">{tip.content}</p>

            <div className="mb-4 rounded-2xl bg-space-900/[0.02] p-4">
              <p className="mb-2 text-xs font-semibold text-space-900/50">核心要点</p>
              <ul className="space-y-2">
                {tip.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-space-900/80">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-mint" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {tip.examples && tip.examples.length > 0 && (
              <div className="rounded-2xl bg-star/5 p-4">
                <p className="mb-2 text-xs font-semibold text-space-900/50">典型示例</p>
                <ul className="space-y-2">
                  {tip.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-space-900/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-star text-xs font-bold text-space-900">
                        {idx + 1}
                      </span>
                      <span className="flex-1">{example}</span>
                      {containsEnglish(example) && (
                        <SpeakButton text={example} size={14} className="ml-1 shrink-0 p-1" />
                      )}
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
