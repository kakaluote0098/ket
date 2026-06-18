import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, ClipboardList, MessageCircle, Volume2 } from 'lucide-react';
import Layout from '@/components/Layout';
import { examGuides } from '@/data/examGuides';
import type { KETModule } from '@/types';

const moduleIcons: Record<KETModule, React.ReactNode> = {
  reading: <BookOpen size={24} />,
  writing: <ClipboardList size={24} />,
  listening: <Volume2 size={24} />,
  speaking: <MessageCircle size={24} />,
};

const moduleColors: Record<KETModule, string> = {
  reading: 'from-coral/30 to-coral/10',
  writing: 'from-ocean/30 to-ocean/10',
  listening: 'from-nebula/30 to-nebula/10',
  speaking: 'from-mint/30 to-mint/10',
};

const moduleDotColors: Record<KETModule, string> = {
  reading: 'bg-coral',
  writing: 'bg-ocean',
  listening: 'bg-nebula',
  speaking: 'bg-mint',
};

export default function ExamGuide() {
  const [activeModule, setActiveModule] = useState<KETModule>('reading');
  const [showAnswer, setShowAnswer] = useState(false);
  const guide = examGuides.find((g) => g.module === activeModule)!;

  const handleSwitch = (module: KETModule) => {
    setActiveModule(module);
    setShowAnswer(false);
  };

  const modules = examGuides.map((g) => g.module);
  const currentIndex = modules.indexOf(activeModule);
  const nextModule = modules[(currentIndex + 1) % modules.length];
  const prevModule = modules[(currentIndex - 1 + modules.length) % modules.length];

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">题型认知入门</h1>
          <p className="text-sm text-space-900/60">了解 KET 四大模块规则，零基础适配考试模式</p>
        </div>
      </div>

      {/* Module Tabs */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {examGuides.map((g) => {
          const active = g.module === activeModule;
          return (
            <button
              key={g.module}
              onClick={() => handleSwitch(g.module)}
              className={`card flex flex-col items-center gap-2 p-4 text-center transition-all ${
                active
                  ? `bg-gradient-to-br ${moduleColors[g.module]} ring-2 ring-space-900/10`
                  : 'bg-white/60 hover:bg-white'
              }`}
            >
              <div className={`rounded-2xl p-2 text-white shadow-sm ${moduleDotColors[g.module]}`}>
                {moduleIcons[g.module]}
              </div>
              <span className="font-display font-bold text-space-900">{g.title}</span>
              <span className="text-xs text-space-900/60">{g.duration}</span>
            </button>
          );
        })}
      </div>

      {/* Overview */}
      <div className={`card mb-6 bg-gradient-to-br ${moduleColors[activeModule]}`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white shadow-sm ${moduleDotColors[activeModule]}`}>
              {moduleIcons[activeModule]}
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-space-900">{guide.title}</h2>
              <p className="text-sm text-space-900/70">{guide.score}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-space-900">
            <Clock size={16} />
            {guide.duration} · {guide.parts} 个部分
          </div>
        </div>
      </div>

      {/* Rules */}
      <div className="card mb-6">
        <h3 className="mb-4 font-display text-xl font-bold text-space-900">考试规则</h3>
        <ul className="space-y-3">
          {guide.rules.map((rule, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${moduleDotColors[activeModule]}`}>
                {idx + 1}
              </span>
              <span className="leading-relaxed text-space-900/80">{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Question Types */}
      <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {guide.questionTypes.map((type, idx) => (
          <div key={idx} className="card">
            <div className="mb-3 flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${moduleDotColors[activeModule]}`} />
              <h3 className="font-display text-lg font-bold text-space-900">{type.name}</h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-space-900/70">{type.description}</p>
            <div className="rounded-2xl bg-space-900/[0.02] p-4">
              <p className="mb-2 text-xs font-semibold text-space-900/50">答题逻辑</p>
              <ul className="space-y-2">
                {type.tips.map((tip, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2 text-sm text-space-900/80">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-mint" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Sample */}
      <div className="card mb-8">
        <div className="mb-4 flex items-center gap-2">
          <ClipboardList size={20} className="text-nebula" />
          <h3 className="font-display text-xl font-bold text-space-900">典型例题</h3>
        </div>
        <div className="rounded-2xl bg-space-900/[0.02] p-5">
          <p className="mb-4 leading-relaxed text-space-900/80">{guide.sample.question}</p>
          {guide.sample.options && (
            <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {guide.sample.options.map((option, idx) => (
                <div key={idx} className="rounded-xl bg-white p-3 text-sm font-medium text-space-900 shadow-sm">
                  {option}
                </div>
              ))}
            </div>
          )}
          {!showAnswer ? (
            <button onClick={() => setShowAnswer(true)} className="btn-outline">
              查看答案与解析
            </button>
          ) : (
            <div className="space-y-3 rounded-2xl bg-star/10 p-4">
              {guide.sample.answer && (
                <p className="font-semibold text-space-900">
                  参考答案：<span className="text-coral">{guide.sample.answer}</span>
                </p>
              )}
              <p className="text-sm leading-relaxed text-space-900/80">{guide.sample.explanation}</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button onClick={() => handleSwitch(prevModule)} className="btn-outline">
          <ArrowLeft size={18} /> 上一模块
        </button>
        <Link to="/learn" className="btn-primary">
          返回学习模块 <ArrowRight size={18} />
        </Link>
        <button onClick={() => handleSwitch(nextModule)} className="btn-outline">
          下一模块 <ArrowRight size={18} />
        </button>
      </div>
    </Layout>
  );
}
