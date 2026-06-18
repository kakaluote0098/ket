import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileText,
  Headphones,
  MessageCircle,
  PenTool,
  Play,
  RotateCcw,
  Trophy,
} from 'lucide-react';
import Layout from '@/components/Layout';
import { phase4MockExams, mockExamInstructions } from '@/data/phase4MockExams';
import type { MockExam } from '@/data/phase4MockExams';

type ExamState = 'list' | 'instructions' | 'running' | 'review';

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function MockExam() {
  const [state, setState] = useState<ExamState>('list');
  const [selectedExam, setSelectedExam] = useState<MockExam | null>(null);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [timeLeft, setTimeLeft] = useState(0);

  const allChoiceQuestions = useMemo(() => {
    if (!selectedExam) return [];
    return selectedExam.parts.flatMap((part) => part.questions.filter((q) => q.type === 'choice'));
  }, [selectedExam]);

  useEffect(() => {
    if (state !== 'running' || !selectedExam) return;

    setTimeLeft(selectedExam.duration * 60);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setState('review');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state, selectedExam]);

  const startExam = (exam: MockExam) => {
    setSelectedExam(exam);
    setAnswers({});
    setState('instructions');
  };

  const beginExam = () => {
    setState('running');
  };

  const submitExam = () => {
    setState('review');
  };

  const resetExam = () => {
    setState('list');
    setSelectedExam(null);
    setAnswers({});
    setTimeLeft(0);
  };

  const handleAnswer = (questionId: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const score = useMemo(() => {
    if (!selectedExam) return 0;
    return allChoiceQuestions.reduce((total, q) => {
      if (answers[q.id] === q.answer) return total + (q.points ?? 1);
      return total;
    }, 0);
  }, [answers, allChoiceQuestions, selectedExam]);

  const totalChoicePoints = useMemo(() => {
    return allChoiceQuestions.reduce((total, q) => total + (q.points ?? 1), 0);
  }, [allChoiceQuestions]);

  if (state === 'list') {
    return (
      <Layout>
        <div className="mb-6 flex items-center gap-3">
          <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
            <ArrowLeft size={22} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-space-900">全真计时模考</h1>
            <p className="text-sm text-space-900/60">第四阶段 · 10 课时 · 剑桥 KET 真题风格模拟</p>
          </div>
        </div>

        <div className="mb-6 rounded-3xl bg-gradient-to-br from-star/20 to-star/5 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-star text-white shadow-sm">
              <Clock size={24} />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-space-900">全真模拟要求</h2>
              <p className="text-sm text-space-900/70">
                严格按照考试时间、流程和纪律完成整套模考，培养答题节奏，适应真实考场压力。
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4">
          {mockExamInstructions.map((instruction, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-2xl bg-white/60 p-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-space-900/10 text-xs font-bold text-space-900">
                {idx + 1}
              </div>
              <p className="text-sm text-space-900/80">{instruction}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-4 text-xl font-bold text-space-900">可用模考</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {phase4MockExams.map((exam) => (
            <div key={exam.id} className="card flex flex-col justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <FileText size={20} className="text-star" />
                  <h3 className="font-display font-bold text-space-900">{exam.title}</h3>
                </div>
                <p className="mb-3 text-sm text-space-900/60">{exam.source}</p>
                <div className="mb-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-star/10 px-2 py-1 font-semibold text-star">总时长 {exam.duration} 分钟</span>
                  {exam.parts.map((part) => (
                    <span key={part.id} className="rounded-full bg-space-900/5 px-2 py-1 text-space-900/70">
                      {part.name} {part.duration}分钟
                    </span>
                  ))}
                </div>
              </div>
              <button onClick={() => startExam(exam)} className="btn-primary w-full">
                <Play size={16} /> 开始模考
              </button>
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  if (state === 'instructions' && selectedExam) {
    return (
      <Layout>
        <div className="card text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-star text-white shadow-glow-sm">
              <Clock size={32} />
            </div>
          </div>
          <h2 className="mb-2 font-display text-2xl font-bold text-space-900">{selectedExam.title}</h2>
          <p className="mb-6 text-space-900/70">{selectedExam.source}</p>

          <div className="mb-6 grid gap-3 text-left">
            {selectedExam.parts.map((part) => (
              <div key={part.id} className="rounded-2xl bg-space-900/[0.02] p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-space-900">{part.name}</span>
                  <span className="text-sm text-space-900/60">{part.duration} 分钟</span>
                </div>
                <p className="text-sm text-space-900/60">{part.questions.length} 道题</p>
              </div>
            ))}
          </div>

          <div className="mb-6 rounded-2xl bg-coral/10 p-4 text-left">
            <p className="flex items-center gap-2 text-sm font-semibold text-coral">
              <AlertCircle size={18} /> 考试纪律
            </p>
            <p className="mt-1 text-sm text-space-900/70">点击开始后计时器立即启动，中途不建议暂停。请关闭手机，保持安静，独立作答。</p>
          </div>

          <div className="flex justify-center gap-3">
            <button onClick={resetExam} className="btn-outline">
              <ArrowLeft size={16} /> 返回列表
            </button>
            <button onClick={beginExam} className="btn-primary">
              <Play size={16} /> 开始计时模考
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  if (state === 'running' && selectedExam) {
    return (
      <Layout>
        <div className="mb-4 flex items-center justify-between rounded-3xl bg-white/60 p-4 backdrop-blur-sm">
          <div>
            <h1 className="font-display text-lg font-bold text-space-900">{selectedExam.title}</h1>
            <p className="text-xs text-space-900/60">全真计时模考进行中</p>
          </div>
          <div className={`flex items-center gap-2 rounded-2xl px-4 py-2 font-mono text-xl font-bold ${timeLeft <= 60 ? 'bg-coral/20 text-coral' : 'bg-star/10 text-space-900'}`}>
            <Clock size={20} />
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="space-y-6">
          {selectedExam.parts.map((part) => (
            <div key={part.id} className="card">
              <div className="mb-4 flex items-center gap-2">
                {part.id === 'reading_writing' && <PenTool size={20} className="text-nebula" />}
                {part.id === 'listening' && <Headphones size={20} className="text-ocean" />}
                {part.id === 'speaking' && <MessageCircle size={20} className="text-mint" />}
                <h2 className="font-display text-lg font-bold text-space-900">{part.name}</h2>
                <span className="ml-auto text-sm text-space-900/50">建议用时 {part.duration} 分钟</span>
              </div>

              <div className="space-y-5">
                {part.questions.map((q, idx) => (
                  <div key={q.id} className="rounded-2xl bg-space-900/[0.02] p-4">
                    <p className="mb-3 text-sm font-semibold text-space-900/80">
                      {idx + 1}. {q.question}
                    </p>
                    {q.type === 'choice' && q.options && (
                      <div className="grid gap-2 sm:grid-cols-2">
                        {q.options.map((option, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => handleAnswer(q.id, oIdx)}
                            className={`rounded-xl px-4 py-2 text-left text-sm transition-all ${
                              answers[q.id] === oIdx
                                ? 'bg-nebula text-white shadow-sm'
                                : 'bg-white/60 text-space-900 hover:bg-white'
                            }`}
                          >
                            {String.fromCharCode(65 + oIdx)}. {option}
                          </button>
                        ))}
                      </div>
                    )}
                    {(q.type === 'writing' || q.type === 'speaking') && (
                      <div className="rounded-xl border-2 border-dashed border-space-900/10 bg-white/40 p-4 text-center">
                        <p className="text-sm text-space-900/60">请在纸上作答，完成后对照评分标准自评</p>
                        <p className="text-xs text-space-900/40">本题 {q.points} 分</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button onClick={submitExam} className="btn-primary">
            <CheckCircle2 size={18} /> 交卷查看结果
          </button>
        </div>
      </Layout>
    );
  }

  if (state === 'review' && selectedExam) {
    return (
      <Layout>
        <div className="card mb-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-star text-white shadow-glow-sm">
              <Trophy size={32} />
            </div>
          </div>
          <h2 className="mb-2 font-display text-2xl font-bold text-space-900">模考完成</h2>
          <p className="text-space-900/70">
            选择题得分：{score} / {totalChoicePoints}
          </p>
          <p className="text-sm text-space-900/60">写作与口语题请根据题目要求自行评估</p>
        </div>

        <div className="space-y-6">
          {selectedExam.parts.map((part) => (
            <div key={part.id} className="card">
              <h3 className="mb-4 font-display text-lg font-bold text-space-900">{part.name} 解析</h3>
              <div className="space-y-4">
                {part.questions.map((q, idx) => (
                  <div key={q.id} className="rounded-2xl bg-space-900/[0.02] p-4">
                    <p className="mb-2 text-sm font-semibold text-space-900/80">
                      {idx + 1}. {q.question}
                    </p>
                    {q.type === 'choice' ? (
                      <div className="text-sm">
                        <p className="mb-1">
                          你的答案：
                          {answers[q.id] !== undefined ? (
                            <span className={answers[q.id] === q.answer ? 'font-semibold text-mint' : 'font-semibold text-coral'}>
                              {String.fromCharCode(65 + (answers[q.id] ?? 0))}
                            </span>
                          ) : (
                            <span className="text-space-900/50">未作答</span>
                          )}
                        </p>
                        <p className="mb-1 text-space-900/70">
                          正确答案：
                          <span className="font-semibold text-mint">{q.answer !== undefined ? String.fromCharCode(65 + q.answer) : '-'}</span>
                        </p>
                        {q.explanation && <p className="text-xs text-space-900/60">{q.explanation}</p>}
                      </div>
                    ) : (
                      <p className="text-sm text-space-900/70">请对照评分标准检查内容、格式和语言表达。本题 {q.points} 分。</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={resetExam} className="btn-outline">
            <ArrowLeft size={16} /> 返回模考列表
          </button>
          <button onClick={() => { setAnswers({}); setState('instructions'); }} className="btn-primary">
            <RotateCcw size={16} /> 重新模考
          </button>
        </div>
      </Layout>
    );
  }

  return null;
}
