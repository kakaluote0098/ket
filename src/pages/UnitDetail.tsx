import { useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, BookOpen, GraduationCap } from 'lucide-react';
import Layout from '@/components/Layout';
import GrammarLessonCard from '@/components/GrammarLessonCard';
import { courseUnits } from '@/data/courses';
import { getWordById } from '@/data/words';
import { getGrammarLessonById } from '@/data/grammarLessons';
import { useProgressStore } from '@/stores/progressStore';
import { levels } from '@/data/courses';

export default function UnitDetail() {
  const { unitId } = useParams<{ unitId: string }>();
  const navigate = useNavigate();
  const progress = useProgressStore();

  const unit = useMemo(() => courseUnits.find((u) => u.id === unitId), [unitId]);

  if (!unit) {
    return (
      <Layout>
        <div className="text-center">
          <p className="text-lg text-space-900/70">未找到该单元</p>
          <Link to="/courses" className="btn-primary mt-4 inline-flex">
            返回课程中心
          </Link>
        </div>
      </Layout>
    );
  }

  const levelInfo = levels.find((l) => l.key === unit.level)!;
  const words = unit.wordIds.map(getWordById).filter(Boolean);
  const grammarLessons = unit.grammarLessonIds.map(getGrammarLessonById).filter(Boolean);
  const completed = progress.completedUnits.includes(unit.id);

  return (
    <Layout>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-space-900 transition-colors hover:bg-white"
      >
        <ArrowLeft size={18} /> 返回课程
      </button>

      <div
        className="mb-8 rounded-[2rem] p-6 text-white shadow-glow md:p-10"
        style={{ background: `linear-gradient(135deg, ${levelInfo.color} 0%, ${levelInfo.color}dd 100%)` }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold opacity-80">{levelInfo.label} · Unit {unit.order}</p>
            <h1 className="text-3xl font-bold">{unit.title}</h1>
          </div>
          <button
            onClick={() => progress.completeUnit(unit.id)}
            className={`flex items-center gap-2 rounded-full px-6 py-3 font-display font-semibold transition-all ${
              completed
                ? 'bg-white/20 text-white'
                : 'bg-white text-space-900 hover:bg-white/90'
            }`}
          >
            <CheckCircle size={20} />
            {completed ? '已完成' : '标记完成'}
          </button>
        </div>
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <section>
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap className="text-nebula" size={24} />
            <h2 className="text-xl font-bold text-space-900">本课语法讲解</h2>
          </div>
          <div className="space-y-4">
            {grammarLessons.length > 0 ? (
              grammarLessons.map((lesson, index) => (
                <GrammarLessonCard key={lesson!.id} lesson={lesson!} index={index} color={levelInfo.color} />
              ))
            ) : (
              <p className="text-space-900/60">本单元暂无语法讲解</p>
            )}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="text-mint" size={24} />
            <h2 className="text-xl font-bold text-space-900">本课单词</h2>
          </div>
          <div className="grid gap-3">
            {words.map((word) => (
              <div key={word!.id} className="card flex items-center justify-between p-4">
                <div>
                  <p className="font-display text-lg font-bold text-space-900">{word!.english}</p>
                  <p className="text-sm text-space-900/60">{word!.chinese}</p>
                </div>
                <span className="text-xs font-semibold text-space-900/40">{word!.example}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="flex justify-center gap-4">
        <Link to="/learn/vocabulary" className="btn-primary">
          去背单词
        </Link>
        <Link to="/learn/grammar" className="btn-outline">
          做语法练习
        </Link>
      </div>
    </Layout>
  );
}
