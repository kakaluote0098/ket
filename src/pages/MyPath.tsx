import { Link } from 'react-router-dom';
import { Target, Minus, Plus } from 'lucide-react';
import Layout from '@/components/Layout';
import Timeline from '@/components/Timeline';
import { useProgressStore } from '@/stores/progressStore';

export default function MyPath() {
  const progress = useProgressStore();

  const weakestSkill = progress.getWeakestSkill();
  const recommendedLevel = progress.getRecommendedLevel();

  const skillRouteMap: Record<string, string> = {
    grammarScore: '/learn/grammar',
    listeningScore: '/learn/listening',
    speakingScore: '/learn/speaking',
    readingScore: '/learn/vocabulary',
    writingScore: '/learn/vocabulary',
  };

  const skillLabelMap: Record<string, string> = {
    grammarScore: '语法',
    listeningScore: '听力',
    speakingScore: '口语',
    readingScore: '阅读',
    writingScore: '写作',
  };

  const timelineItems = [
    {
      title: '今日弱项突破',
      desc: `建议优先练习：${skillLabelMap[weakestSkill]}`,
      icon: '🎯',
      active: true,
    },
    {
      title: '推荐级别课程',
      desc: `当前推荐学习 ${recommendedLevel.toUpperCase()} 级别课程`,
      icon: '📚',
      active: true,
    },
    {
      title: '单词积累',
      desc: `每日目标：掌握 ${progress.dailyGoalWords} 个新单词`,
      icon: '🧠',
      active: false,
    },
    {
      title: '综合练习',
      desc: `完成 ${progress.dailyGoalExercises} 项练习巩固所学`,
      icon: '✏️',
      active: false,
    },
  ];

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-space-900">我的学习路径</h1>
        <p className="text-space-900/60">根据你的学习数据，为你定制今日推荐</p>
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-3">
        <div className="card flex items-center gap-4 lg:col-span-2">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-nebula text-2xl text-white shadow-glow-sm">
            🎯
          </div>
          <div>
            <p className="text-sm font-semibold text-space-900/60">下一步推荐</p>
            <h2 className="font-display text-xl font-bold text-space-900">
              加强 {skillLabelMap[weakestSkill]} 训练
            </h2>
            <p className="text-sm text-space-900/60">系统检测到你的该能力项相对薄弱，优先练习可更快提升综合能力。</p>
          </div>
          <Link to={skillRouteMap[weakestSkill]} className="btn-primary ml-auto hidden sm:flex">
            去练习
          </Link>
        </div>

        <div className="card">
          <div className="mb-4 flex items-center gap-2">
            <Target size={20} className="text-nebula" />
            <h2 className="font-display text-lg font-bold">每日目标</h2>
          </div>

          <div className="mb-4 flex items-center justify-between rounded-2xl bg-space-900/5 p-3">
            <span className="text-sm font-semibold">新单词</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => progress.setDailyGoal(Math.max(1, progress.dailyGoalWords - 1), progress.dailyGoalExercises)}
                className="rounded-full bg-white p-1 text-space-900 shadow-sm transition-colors hover:text-nebula"
              >
                <Minus size={16} />
              </button>
              <span className="w-6 text-center font-bold">{progress.dailyGoalWords}</span>
              <button
                onClick={() => progress.setDailyGoal(progress.dailyGoalWords + 1, progress.dailyGoalExercises)}
                className="rounded-full bg-white p-1 text-space-900 shadow-sm transition-colors hover:text-nebula"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-space-900/5 p-3">
            <span className="text-sm font-semibold">练习项</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => progress.setDailyGoal(progress.dailyGoalWords, Math.max(1, progress.dailyGoalExercises - 1))}
                className="rounded-full bg-white p-1 text-space-900 shadow-sm transition-colors hover:text-nebula"
              >
                <Minus size={16} />
              </button>
              <span className="w-6 text-center font-bold">{progress.dailyGoalExercises}</span>
              <button
                onClick={() => progress.setDailyGoal(progress.dailyGoalWords, progress.dailyGoalExercises + 1)}
                className="rounded-full bg-white p-1 text-space-900 shadow-sm transition-colors hover:text-nebula"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="mb-6 text-xl font-bold text-space-900">推荐路线</h2>
        <Timeline items={timelineItems} />
      </div>
    </Layout>
  );
}
