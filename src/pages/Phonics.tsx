import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Volume2,
} from 'lucide-react';
import Layout from '@/components/Layout';
import { phase1PhonicsLessons } from '@/data/phase1Phonics';

export default function Phonics() {
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);

  const toggleLesson = (id: string) => {
    setExpandedLesson((prev) => (prev === id ? null : id));
  };

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">拼读体系</h1>
          <p className="text-sm text-space-900/60">第一阶段 · 8 课时 · 见词能读，听音能拼</p>
        </div>
      </div>

      <div className="mb-6 rounded-3xl bg-gradient-to-br from-mint/20 to-mint/5 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-white shadow-sm">
            <Volume2 size={24} />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-space-900">零基础拼读核心</h2>
            <p className="text-sm text-space-900/70">
              从 26 个字母发音到 CVC 单词、辅音连缀和字母组合，系统掌握自然拼读，摆脱死记硬背单词。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 grid gap-3 rounded-3xl bg-white/60 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-space-900/80">
          <BookOpen size={18} className="text-mint" />
          学习路径
        </div>
        <div className="flex flex-wrap gap-2">
          {['字母与音标', '元音规则', '辅音规则', 'CVC 拼读', '辅音连缀', '字母组合', '视觉词', '综合实战'].map(
            (step, idx) => (
              <span
                key={step}
                className="rounded-full bg-space-900/5 px-3 py-1 text-xs font-semibold text-space-900/70"
              >
                {idx + 1}. {step}
              </span>
            )
          )}
        </div>
      </div>

      <div className="space-y-4">
        {phase1PhonicsLessons.map((lesson, idx) => {
          const expanded = expandedLesson === lesson.id;
          return (
            <div key={lesson.id} className="card">
              <button
                onClick={() => toggleLesson(lesson.id)}
                className="flex w-full items-start justify-between gap-3 text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint text-lg">
                    {lesson.icon}
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="rounded-full bg-mint/10 px-2 py-0.5 text-xs font-bold text-mint">
                        第 {idx + 1} 课
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-space-900">{lesson.title}</h3>
                  </div>
                </div>
                {expanded ? (
                  <ChevronUp size={22} className="text-space-900/50" />
                ) : (
                  <ChevronDown size={22} className="text-space-900/50" />
                )}
              </button>

              {expanded && (
                <div className="mt-4 space-y-4 border-t border-space-900/5 pt-4">
                  <p className="text-sm leading-relaxed text-space-900/80">{lesson.content}</p>

                  <div className="rounded-2xl bg-space-900/[0.02] p-4">
                    <p className="mb-2 text-xs font-semibold text-space-900/50">核心知识点</p>
                    <ul className="space-y-2">
                      {lesson.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-sm text-space-900/80">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-mint" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {lesson.examples.map((example, eIdx) => (
                      <div key={eIdx} className="rounded-2xl bg-white/60 p-4">
                        <p className="mb-1 font-semibold text-space-900">{example.text}</p>
                        {example.phonetic && (
                          <p className="mb-1 text-sm text-nebula">{example.phonetic}</p>
                        )}
                        {example.tip && (
                          <p className="text-xs text-space-900/60">{example.tip}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl bg-mint/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-mint/80">
                      <Volume2 size={14} /> 拼读练习词
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {lesson.practiceWords.map((word) => (
                        <span
                          key={word}
                          className="rounded-full bg-white/60 px-3 py-1 text-sm font-semibold text-space-900"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-star/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-star/80">
                      <Lightbulb size={14} /> 学习建议
                    </p>
                    <ul className="space-y-1">
                      {lesson.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-sm text-space-900/80">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-star text-xs font-bold text-space-900">
                            {tIdx + 1}
                          </span>
                          {tip}
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

      <div className="mt-8 flex justify-center">
        <Link to="/learn" className="btn-primary">
          返回学习模块 <ArrowRight size={18} />
        </Link>
      </div>
    </Layout>
  );
}
