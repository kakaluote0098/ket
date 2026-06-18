import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  FileText,
  Lightbulb,
  Target,
} from 'lucide-react';
import Layout from '@/components/Layout';
import SpeakButton from '@/components/SpeakButton';
import { phase4PaperReviews } from '@/data/phase4PaperReviews';
import { phase4MockExams } from '@/data/phase4MockExams';

const hasEnglish = (text: string) => /[a-zA-Z]/.test(text);

export default function PaperReview() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const selectedReview = selectedIndex !== null ? phase4PaperReviews[selectedIndex] : null;

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  if (!selectedReview) {
    return (
      <Layout>
        <div className="mb-6 flex items-center gap-3">
          <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
            <ArrowLeft size={22} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-space-900">真题逐套精讲复盘</h1>
            <p className="text-sm text-space-900/60">第四阶段 · 8 课时 · 逐题精讲，分析错题原因与考点出处</p>
          </div>
        </div>

        <div className="mb-6 rounded-3xl bg-gradient-to-br from-ocean/20 to-ocean/5 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean text-white shadow-sm">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-space-900">精讲复盘方法</h2>
              <p className="text-sm text-space-900/70">
                每套试卷逐题分析考点、错误选项、解题思路，帮助你归纳失分规律，针对性弥补薄弱模块。
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {phase4PaperReviews.map((review, idx) => {
            const mockExam = phase4MockExams.find((m) => m.id === review.mockExamId);
            return (
              <div key={review.mockExamId} className="card flex flex-col justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <FileText size={20} className="text-ocean" />
                    <h3 className="font-display font-bold text-space-900">{review.title}</h3>
                  </div>
                  <p className="mb-3 text-sm text-space-900/70">{review.summary}</p>
                  {mockExam && (
                    <div className="mb-4 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full bg-ocean/10 px-2 py-1 font-semibold text-ocean">总时长 {mockExam.duration} 分钟</span>
                      <span className="rounded-full bg-space-900/5 px-2 py-1 text-space-900/70">{review.reviews.length} 道精讲</span>
                    </div>
                  )}
                </div>
                <button onClick={() => setSelectedIndex(idx)} className="btn-primary w-full">
                  查看逐题精讲 <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => setSelectedIndex(null)}
          className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white"
        >
          <ArrowLeft size={22} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-space-900">{selectedReview.title}</h1>
          <p className="text-sm text-space-900/60">逐题精讲与薄弱模块分析</p>
        </div>
      </div>

      <div className="mb-6 rounded-3xl bg-ocean/10 p-5">
        <div className="flex items-start gap-3">
          <ClipboardList size={24} className="mt-1 shrink-0 text-ocean" />
          <div>
            <h2 className="font-display text-lg font-bold text-space-900">本套试卷复盘总结</h2>
            <p className="text-sm leading-relaxed text-space-900/80">{selectedReview.summary}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {selectedReview.reviews.map((review, idx) => {
          const expanded = expandedQuestions[review.questionId] ?? false;
          const mockExam = phase4MockExams.find((m) => m.id === selectedReview.mockExamId);
          const question = mockExam?.parts
            .flatMap((p) => p.questions)
            .find((q) => q.id === review.questionId);

          return (
            <div key={review.questionId} className="card">
              <button
                onClick={() => toggleQuestion(review.questionId)}
                className="flex w-full items-start justify-between gap-3 text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ocean text-sm font-bold text-white">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="flex items-start gap-2 font-semibold text-space-900">
                      <span className="flex-1">{question?.question ?? review.testPoint}</span>
                      {question?.question && hasEnglish(question.question) && (
                        <span onClick={(e) => e.stopPropagation()}>
                          <SpeakButton text={question.question} size={14} />
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-xs text-space-900/60">
                      <Target size={12} className="mr-1 inline" />
                      考点：{review.testPoint}
                    </p>
                  </div>
                </div>
                {expanded ? <ChevronUp size={22} className="text-space-900/50" /> : <ChevronDown size={22} className="text-space-900/50" />}
              </button>

              {expanded && (
                <div className="mt-4 space-y-4 border-t border-space-900/5 pt-4">
                  <div className="rounded-2xl bg-space-900/[0.02] p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-space-900/50">
                      <Lightbulb size={14} /> 题目解析
                    </p>
                    <p className="text-sm leading-relaxed text-space-900/80">{review.analysis}</p>
                  </div>

                  {review.wrongOptions.length > 0 && (
                    <div className="rounded-2xl bg-coral/5 p-4">
                      <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-coral/80">
                        <AlertCircle size={14} /> 错误选项分析
                      </p>
                      <ul className="space-y-2">
                        {review.wrongOptions.map((wo) => (
                          <li key={wo.index} className="text-sm text-space-900/80">
                            <span className="font-semibold text-coral">{String.fromCharCode(65 + wo.index)}.</span>{' '}
                            {wo.reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="rounded-2xl bg-mint/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-mint/80">
                      <CheckCircle2 size={14} /> 解题思路
                    </p>
                    <p className="text-sm leading-relaxed text-space-900/80">{review.problemSolving}</p>
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl bg-star/5 p-4">
                    <Target size={16} className="text-star" />
                    <p className="text-sm text-space-900/80">
                      <span className="font-semibold">薄弱模块：</span>
                      {review.weakModule}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <button onClick={() => setSelectedIndex(null)} className="btn-outline">
          <ArrowLeft size={16} /> 返回试卷列表
        </button>
      </div>
    </Layout>
  );
}
