import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Flame, BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import StatCard from '@/components/StatCard';
import TaskCard from '@/components/TaskCard';
import { useProgressStore } from '@/stores/progressStore';
import { getWordById } from '@/data/words';

export default function Home() {
  const progress = useProgressStore();

  useEffect(() => {
    useProgressStore.getState().checkIn();
  }, []);

  const weakWord = progress.weakWords[0] ? getWordById(progress.weakWords[0]) : null;
  const recommendedLevel = progress.getRecommendedLevel();

  const tasks = [
    {
      icon: '📚',
      title: '复习弱词',
      desc: weakWord ? `加强记忆：${weakWord.english}` : '巩固已学单词',
      to: '/learn/vocabulary',
      color: 'bg-coral',
      progress: Math.min(100, (progress.masteredWords.length / progress.dailyGoalWords) * 100),
    },
    {
      icon: '✏️',
      title: '语法练习',
      desc: `推荐级别：${recommendedLevel.toUpperCase()}`,
      to: '/learn/grammar',
      color: 'bg-ocean',
      progress: Math.min(100, progress.grammarScore),
    },
    {
      icon: '🎧',
      title: '听力训练',
      desc: '听懂日常对话',
      to: '/learn/listening',
      color: 'bg-nebula',
      progress: Math.min(100, progress.listeningScore),
    },
  ];

  return (
    <Layout>
      <section className="mb-8 flex flex-col gap-6 rounded-[2rem] bg-gradient-to-br from-space-900 to-space-800 p-6 text-white shadow-glow md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
            <Sparkles size={16} className="text-star" /> 准备好探索语言星球了吗？
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">欢迎回来，小小宇航员！</h1>
          <p className="mt-2 text-white/70">坚持每日学习，KET 证书就在前方。</p>
        </div>
        <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-star text-2xl text-space-900">🔥</div>
          <div>
            <p className="text-3xl font-bold">{progress.streakDays}</p>
            <p className="text-sm text-white/70">连续学习天数</p>
          </div>
        </div>
      </section>

      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={<Flame size={24} />} label="连续学习" value={`${progress.streakDays} 天`} color="bg-coral" />
        <StatCard icon={<BookOpen size={24} />} label="掌握单词" value={progress.masteredWords.length} color="bg-mint" />
        <StatCard icon={<Clock size={24} />} label="完成单元" value={progress.completedUnits.length} color="bg-ocean" />
      </section>

      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-space-900">今日任务</h2>
          <Link to="/path" className="flex items-center gap-1 text-sm font-semibold text-nebula hover:underline">
            查看路径 <ArrowRight size={16} />
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {tasks.map((task) => (
            <TaskCard key={task.title} {...task} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Link to="/courses" className="card group flex items-center justify-between bg-gradient-to-r from-mint/20 to-mint/5">
          <div>
            <h3 className="font-display text-xl font-bold">分级课程</h3>
            <p className="text-sm text-space-900/60">从 Starter 到 KET 预备，循序渐进</p>
          </div>
          <span className="text-3xl transition-transform group-hover:scale-110">🪐</span>
        </Link>
        <Link to="/junior-english" className="card group flex items-center justify-between bg-gradient-to-r from-nebula/20 to-nebula/5">
          <div>
            <h3 className="font-display text-xl font-bold">六年级英语</h3>
            <p className="text-sm text-space-900/60">初一至初三人教版词汇 · 场景分类 · 美式发音</p>
          </div>
          <span className="text-3xl transition-transform group-hover:scale-110">🎒</span>
        </Link>
        <Link to="/progress" className="card group flex items-center justify-between bg-gradient-to-r from-star/20 to-star/5">
          <div>
            <h3 className="font-display text-xl font-bold">学习进度</h3>
            <p className="text-sm text-space-900/60">查看能力雷达图与成就徽章</p>
          </div>
          <span className="text-3xl transition-transform group-hover:scale-110">🏆</span>
        </Link>
      </section>
    </Layout>
  );
}
