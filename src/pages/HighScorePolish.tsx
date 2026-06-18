import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  MessageCircle,
  Mic,
  Sparkles,
  Volume2,
} from 'lucide-react';
import Layout from '@/components/Layout';
import {
  highScoreWritingModels,
  highScoreSpeakingModels,
  highScoreSentencePatterns,
  pronunciationTips,
  nervousnessTips,
} from '@/data/phase4HighScore';

type Tab = 'writing' | 'speaking';

export default function HighScorePolish() {
  const [activeTab, setActiveTab] = useState<Tab>('writing');
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  const toggleModel = (id: string) => {
    setExpandedModel((prev) => (prev === id ? null : id));
  };

  const models = activeTab === 'writing' ? highScoreWritingModels : highScoreSpeakingModels;
  const patterns = highScoreSentencePatterns.filter((p) => p.category === activeTab);

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">高分打磨提升</h1>
          <p className="text-sm text-space-900/60">第四阶段 · 6 课时 · 写作优化与口语提升</p>
        </div>
      </div>

      <div className="mb-6 rounded-3xl bg-gradient-to-br from-mint/20 to-mint/5 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-white shadow-sm">
            <Sparkles size={24} />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-space-900">冲刺优秀档位</h2>
            <p className="text-sm text-space-900/70">
              通过背诵高分范文、掌握高分句型、纠正发音和训练临场表达，帮助你在写作和口语部分冲击优秀。
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        <button
          onClick={() => setActiveTab('writing')}
          className={`card flex items-center justify-center gap-2 p-4 transition-all ${
            activeTab === 'writing' ? 'bg-gradient-to-br from-nebula/30 to-nebula/10 ring-2 ring-space-900/10' : 'bg-white/60 hover:bg-white'
          }`}
        >
          <ClipboardList size={20} className={activeTab === 'writing' ? 'text-nebula' : 'text-space-900/50'} />
          <span className="font-display font-bold text-space-900">写作打磨</span>
        </button>
        <button
          onClick={() => setActiveTab('speaking')}
          className={`card flex items-center justify-center gap-2 p-4 transition-all ${
            activeTab === 'speaking' ? 'bg-gradient-to-br from-mint/30 to-mint/10 ring-2 ring-space-900/10' : 'bg-white/60 hover:bg-white'
          }`}
        >
          <Mic size={20} className={activeTab === 'speaking' ? 'text-mint' : 'text-space-900/50'} />
          <span className="font-display font-bold text-space-900">口语打磨</span>
        </button>
      </div>

      {/* Sentence Patterns */}
      <div className="card mb-6">
        <div className="mb-4 flex items-center gap-2">
          <BookOpen size={20} className={activeTab === 'writing' ? 'text-nebula' : 'text-mint'} />
          <h2 className="font-display text-lg font-bold text-space-900">高分句型积累</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {patterns.map((p) => (
            <div key={p.id} className="rounded-2xl bg-space-900/[0.02] p-4">
              <p className="mb-1 font-semibold text-space-900">{p.pattern}</p>
              <p className="mb-1 text-xs text-space-900/60">{p.meaning}</p>
              <p className="text-sm italic text-space-900/80">{p.example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* High Score Models */}
      <h2 className="mb-4 text-xl font-bold text-space-900">
        {activeTab === 'writing' ? '高分范文背诵' : '高分口语范例'}
      </h2>
      <div className="space-y-4">
        {models.map((model) => {
          const expanded = expandedModel === model.id;
          return (
            <div key={model.id} className="card">
              <button
                onClick={() => toggleModel(model.id)}
                className="flex w-full items-start justify-between gap-3 text-left"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ${
                      activeTab === 'writing' ? 'bg-nebula' : 'bg-mint'
                    }`}
                  >
                    {activeTab === 'writing' ? <ClipboardList size={20} /> : <MessageCircle size={20} />}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-space-900">{model.title}</h3>
                    {model.type && (
                      <span className="mt-1 inline-block rounded-full bg-space-900/5 px-2 py-0.5 text-xs text-space-900/70">
                        {model.type}
                      </span>
                    )}
                  </div>
                </div>
                {expanded ? <ChevronUp size={22} className="text-space-900/50" /> : <ChevronDown size={22} className="text-space-900/50" />}
              </button>

              {expanded && (
                <div className="mt-4 space-y-4 border-t border-space-900/5 pt-4">
                  <div className="rounded-2xl bg-space-900/[0.02] p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-xs font-semibold text-space-900/50">范文内容</p>
                      <span className="text-xs text-space-900/40">建议背诵</span>
                    </div>
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-space-900/80">
                      {model.content}
                    </pre>
                  </div>

                  <div className="rounded-2xl bg-mint/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-mint/80">
                      <Award size={14} /> 高分亮点
                    </p>
                    <ul className="space-y-1">
                      {model.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-space-900/80">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-mint" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-nebula/5 p-4">
                    <p className="mb-2 text-xs font-semibold text-nebula/80">打磨建议</p>
                    <ul className="space-y-1">
                      {model.tips.map((t, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-space-900/80">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-nebula text-xs font-bold text-white">
                            {idx + 1}
                          </span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Speaking-specific tips */}
      {activeTab === 'speaking' && (
        <>
          <div className="card mt-6">
            <div className="mb-4 flex items-center gap-2">
              <Volume2 size={20} className="text-mint" />
              <h2 className="font-display text-lg font-bold text-space-900">发音纠正要点</h2>
            </div>
            <ul className="space-y-2">
              {pronunciationTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-space-900/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-space-900">
                    {idx + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="card mt-6">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-star" />
              <h2 className="font-display text-lg font-bold text-space-900">消除紧张感</h2>
            </div>
            <ul className="space-y-2">
              {nervousnessTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-space-900/80">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-star" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <div className="mt-8 flex justify-center">
        <Link to="/learn" className="btn-primary">
          返回学习模块 <ArrowRight size={18} />
        </Link>
      </div>
    </Layout>
  );
}
