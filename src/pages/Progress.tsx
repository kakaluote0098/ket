import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, RotateCcw, Target } from 'lucide-react';
import Layout from '@/components/Layout';
import RadarChart from '@/components/RadarChart';
import BadgeGrid from '@/components/BadgeGrid';
import { useProgressStore } from '@/stores/progressStore';
import { words } from '@/data/words';
import type { Badge } from '@/types';

const badges: Badge[] = [
  { id: 'first_word', name: '首词掌握', icon: '📖', condition: '掌握第一个单词' },
  { id: 'streak_3', name: '三日坚持', icon: '🔥', condition: '连续学习 3 天' },
  { id: 'streak_7', name: '一周之星', icon: '⭐', condition: '连续学习 7 天' },
  { id: 'grammar_pro', name: '语法达人', icon: '✏️', condition: '语法得分达到 80' },
  { id: 'listening_pro', name: '听力高手', icon: '🎧', condition: '听力得分达到 80' },
  { id: 'speaking_pro', name: '口语之星', icon: '🎤', condition: '口语得分达到 80' },
  { id: 'unit_5', name: '探索五站', icon: '🚀', condition: '完成 5 个单元' },
  { id: 'unit_10', name: '十站达成', icon: '🪐', condition: '完成 10 个单元' },
  { id: 'all_round', name: '全能学员', icon: '🏆', condition: '五项能力均达到 70' },
  { id: 'word_20', name: '词汇积累', icon: '🧠', condition: '掌握 20 个单词' },
];

export default function Progress() {
  const progress = useProgressStore();

  const radarData = [
    { label: '听力', value: progress.listeningScore },
    { label: '口语', value: progress.speakingScore },
    { label: '阅读', value: progress.readingScore },
    { label: '写作', value: progress.writingScore },
    { label: '语法', value: progress.grammarScore },
  ];

  const unlockedBadges = badges
    .filter((b) => {
      if (b.id === 'first_word') return progress.masteredWords.length >= 1;
      if (b.id === 'streak_3') return progress.streakDays >= 3;
      if (b.id === 'streak_7') return progress.streakDays >= 7;
      if (b.id === 'grammar_pro') return progress.grammarScore >= 80;
      if (b.id === 'listening_pro') return progress.listeningScore >= 80;
      if (b.id === 'speaking_pro') return progress.speakingScore >= 80;
      if (b.id === 'unit_5') return progress.completedUnits.length >= 5;
      if (b.id === 'unit_10') return progress.completedUnits.length >= 10;
      if (b.id === 'all_round') return radarData.every((d) => d.value >= 70);
      if (b.id === 'word_20') return progress.masteredWords.length >= 20;
      return false;
    })
    .map((b) => b.id);

  const skillLabels: Record<string, string> = {
    grammarScore: '语法',
    listeningScore: '听力',
    speakingScore: '口语',
    readingScore: '阅读',
    writingScore: '写作',
  };

  const weakWordDetails = progress.weakWords.map((id) => words.find((w) => w.id === id)).filter(Boolean);
  const weakestSkill = progress.getWeakestSkill();
  const weakestSkillLabel = skillLabels[weakestSkill];
  const skillRouteMap: Record<string, string> = {
    grammarScore: '/learn/grammar',
    listeningScore: '/learn/listening',
    speakingScore: '/learn/speaking',
    readingScore: '/learn/practice',
    writingScore: '/learn/practice',
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-space-900">学习进度</h1>
        <p className="text-space-900/60">追踪你的成长，解锁更多成就</p>
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <div className="card flex flex-col items-center">
          <h2 className="mb-4 text-xl font-bold text-space-900">能力雷达</h2>
          <RadarChart data={radarData} size={280} />
          <p className="mt-4 text-center text-sm text-space-900/60">
            当前最需加强：
            <span className="font-bold text-nebula">{skillLabels[progress.getWeakestSkill()]}</span>
          </p>
        </div>

        <div className="card">
          <h2 className="mb-4 text-xl font-bold text-space-900">能力分数</h2>
          <div className="space-y-4">
            {radarData.map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex justify-between text-sm font-semibold">
                  <span className="text-space-900/80">{item.label}</span>
                  <span className="text-space-900">{item.value}</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-space-900/5">
                  <div
                    className="h-full rounded-full bg-nebula transition-all duration-500"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 错题本与薄弱点 */}
      <div className="card mb-8">
        <div className="mb-4 flex items-center gap-2">
          <BookOpen size={20} className="text-coral" />
          <h2 className="text-xl font-bold text-space-900">专属错题本</h2>
        </div>

        {weakWordDetails.length > 0 ? (
          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold text-space-900/70">
              薄弱词汇 <span className="text-space-900/50">({weakWordDetails.length})</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {weakWordDetails.slice(0, 12).map((word) => (
                <span
                  key={word!.id}
                  className="rounded-full bg-coral/10 px-3 py-1 text-sm font-semibold text-coral"
                >
                  {word!.english} <span className="text-coral/70">{word!.chinese}</span>
                </span>
              ))}
              {weakWordDetails.length > 12 && (
                <span className="rounded-full bg-space-900/5 px-3 py-1 text-sm text-space-900/60">
                  +{weakWordDetails.length - 12} 更多
                </span>
              )}
            </div>
            <Link
              to="/learn/vocabulary"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-nebula hover:underline"
            >
              去单词记忆加强 <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <p className="mb-6 text-sm text-space-900/60">还没有标记的薄弱词汇，继续练习会在这里生成专属错题本。</p>
        )}

        <div className="rounded-2xl bg-star/5 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Target size={18} className="text-star" />
            <p className="text-sm font-semibold text-space-900/80">当前最需加强：{weakestSkillLabel}</p>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-space-900/70">
            根据你的能力雷达，{weakestSkillLabel} 是目前相对薄弱的能力。建议优先进行专项练习，针对性攻克失分点。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to={skillRouteMap[weakestSkill]} className="btn-primary text-sm">
              专项练习 <ArrowRight size={16} />
            </Link>
            <Link to="/learn/exam-tips" className="btn-outline text-sm">
              <RotateCcw size={16} /> 应试技巧
            </Link>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="mb-4 text-xl font-bold text-space-900">
          成就徽章 <span className="text-sm font-normal text-space-900/50">({unlockedBadges.length}/{badges.length})</span>
        </h2>
        <BadgeGrid badges={badges} unlockedIds={unlockedBadges} />
      </div>
    </Layout>
  );
}
