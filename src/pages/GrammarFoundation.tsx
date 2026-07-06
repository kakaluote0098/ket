import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Pencil,
  Sparkles,
} from 'lucide-react';
import Layout from '@/components/Layout';
import SpeakButton from '@/components/SpeakButton';
import VideoPlayer from '@/components/VideoPlayer';
import { phase1GrammarLessons } from '@/data/phase1Grammar';

export default function GrammarFoundation() {
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
          <h1 className="text-2xl font-bold text-space-900">语法句型</h1>
          <p className="text-sm text-space-900/60">第一阶段 · 12 课时 · 零基础语法 + KET 必考语法升级全覆盖</p>
        </div>
      </div>

      <div className="mb-6 rounded-3xl bg-gradient-to-br from-ocean/20 to-ocean/5 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean text-white shadow-sm">
            <Pencil size={24} />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-space-900">零基础到 KET 必考语法体系</h2>
            <p className="text-sm text-space-900/70">
              从代词、名词、be 动词、一般现在时，升级到现在进行时、一般过去时、比较级、情态动词、并列句与状语从句，系统搭建 KET 句型基础。
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {phase1GrammarLessons.map((lesson, idx) => {
          const expanded = expandedLesson === lesson.id;
          return (
            <div key={lesson.id} className="card">
              <button
                onClick={() => toggleLesson(lesson.id)}
                className="flex w-full items-start justify-between gap-3 text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean text-lg">
                    {lesson.icon}
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="rounded-full bg-ocean/10 px-2 py-0.5 text-xs font-bold text-ocean">
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

                  {lesson.videoUrl && (
                    <VideoPlayer url={lesson.videoUrl} title={`${lesson.title} 视频讲解`} />
                  )}

                  <div className="rounded-2xl bg-space-900/[0.02] p-4">
                    <p className="mb-2 text-xs font-semibold text-space-900/50">核心知识点</p>
                    <ul className="space-y-2">
                      {lesson.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-sm text-space-900/80">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-ocean" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-mint/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-mint/80">
                      <Sparkles size={14} /> 例句
                    </p>
                    <div className="space-y-3">
                      {lesson.examples.map((example, eIdx) => (
                        <div key={eIdx} className="rounded-xl bg-white/60 p-3">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-space-900">{example.english}</p>
                            <SpeakButton text={example.english} size={16} />
                          </div>
                          <p className="text-sm text-space-900/70">{example.chinese}</p>
                          {example.highlight && (
                            <p className="mt-1 text-xs text-mint">{example.highlight}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-coral/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-coral/80">
                      <AlertCircle size={14} /> 常见错误
                    </p>
                    <ul className="space-y-3">
                      {lesson.commonMistakes.map((item, mIdx) => (
                        <li key={mIdx} className="text-sm">
                          <p className="text-coral line-through">{item.mistake}</p>
                          <p className="font-semibold text-space-900">{item.correction}</p>
                          <p className="text-space-900/60">{item.reason}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-star/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-star/80">
                      <Lightbulb size={14} /> 即学即练
                    </p>
                    <div className="space-y-3">
                      {lesson.practice.map((item, pIdx) => {
                        const key = `${lesson.id}-${pIdx}`;
                        const show = showAnswer[key];
                        const englishPart = item.question.split(/[（(]/)[0].trim();
                        return (
                          <div key={pIdx} className="rounded-xl bg-white/60 p-3">
                            <div className="mb-2 flex items-center gap-2">
                              <p className="text-sm text-space-900/80">{item.question}</p>
                              <SpeakButton text={englishPart} size={16} />
                            </div>
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

                  <div className="rounded-2xl bg-ocean/5 p-4">
                    <p className="mb-2 text-xs font-semibold text-ocean/80">学习建议</p>
                    <ul className="space-y-1">
                      {lesson.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-sm text-space-900/80">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ocean text-xs font-bold text-white">
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
