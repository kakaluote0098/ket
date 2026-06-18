import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Headphones,
  Lightbulb,
  MessageCircle,
  PenLine,
  Sparkles,
} from 'lucide-react';
import Layout from '@/components/Layout';
import { phase1SkillsLessons } from '@/data/phase1Skills';

export default function SkillsFoundation() {
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<Record<string, boolean>>({});

  const toggleLesson = (id: string) => {
    setExpandedLesson((prev) => (prev === id ? null : id));
  };

  const toggleAnswer = (key: string) => {
    setShowAnswer((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">听说读写能力训练</h1>
          <p className="text-sm text-space-900/60">第一阶段 · 2 课时 · 课堂指令、情景对话、规范书写与句子输出</p>
        </div>
      </div>

      <div className="mb-6 rounded-3xl bg-gradient-to-br from-mint/20 to-mint/5 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-white shadow-sm">
            <Sparkles size={24} />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-space-900">零基础能力贯通</h2>
            <p className="text-sm text-space-900/70">
              听懂课堂英文指令、完成日常情景对话、规范书写单词短句，并进行简单仿写与看图写句。
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {phase1SkillsLessons.map((lesson, idx) => {
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
                      {lesson.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-sm text-space-900/80">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-mint" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-ocean/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-ocean/80">
                      <Headphones size={14} /> {lesson.listening.title}
                    </p>
                    <div className="space-y-2">
                      {lesson.listening.items.map((item, i) => (
                        <div key={i} className="rounded-xl bg-white/60 p-3">
                          <p className="font-semibold text-space-900">{item.english}</p>
                          <p className="text-sm text-space-900/70">{item.chinese}</p>
                          {item.response && (
                            <p className="mt-1 text-xs text-ocean/80">反应：{item.response}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-nebula/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-nebula/80">
                      <MessageCircle size={14} /> {lesson.speaking.title}
                    </p>
                    <div className="space-y-2">
                      {lesson.speaking.items.map((item, i) => (
                        <div key={i} className="rounded-xl bg-white/60 p-3">
                          <p className="text-xs font-semibold text-nebula/80">{item.situation}</p>
                          <p className="whitespace-pre-line font-semibold text-space-900">{item.example}</p>
                          <p className="whitespace-pre-line text-sm text-space-900/70">{item.chinese}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-coral/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-coral/80">
                      <PenLine size={14} /> {lesson.writing.title}
                    </p>
                    <div className="space-y-2">
                      {lesson.writing.items.map((item, i) => (
                        <div key={i} className="rounded-xl bg-white/60 p-3">
                          <p className="text-xs font-semibold text-coral/80">{item.task}</p>
                          <p className="whitespace-pre-line font-semibold text-space-900">{item.example}</p>
                          <p className="text-sm text-space-900/70">{item.chinese}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-star/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-star/80">
                      <BookOpen size={14} /> {lesson.reading.title}
                    </p>
                    <div className="space-y-2">
                      {lesson.reading.items.map((item, i) => (
                        <div key={i} className="rounded-xl bg-white/60 p-3">
                          <p className="font-semibold text-space-900">{item.text}</p>
                          <p className="text-sm text-space-900/70">{item.chinese}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-star/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-star/80">
                      <Lightbulb size={14} /> 即学即练
                    </p>
                    <div className="space-y-3">
                      {lesson.practice.map((item, pIdx) => {
                        const key = `${lesson.id}-${pIdx}`;
                        const show = showAnswer[key];
                        return (
                          <div key={pIdx} className="rounded-xl bg-white/60 p-3">
                            <p className="mb-2 text-sm text-space-900/80">{item.question}</p>
                            <button
                              onClick={() => toggleAnswer(key)}
                              className="rounded-lg bg-star px-3 py-1 text-xs font-semibold text-space-900 transition-colors hover:bg-star/80"
                            >
                              {show ? '隐藏答案' : '查看答案'}
                            </button>
                            {show && (
                              <div className="mt-2 text-sm">
                                <p className="font-semibold text-space-900">
                                  答案：{item.answer}
                                </p>
                                <p className="text-space-900/70">{item.explanation}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-mint/5 p-4">
                    <p className="mb-2 text-xs font-semibold text-mint/80">学习建议</p>
                    <ul className="space-y-1">
                      {lesson.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-sm text-space-900/80">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-white">
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
