import Layout from '@/components/Layout';
import RadarChart from '@/components/RadarChart';
import BadgeGrid from '@/components/BadgeGrid';
import { useProgressStore } from '@/stores/progressStore';
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

      <div className="card">
        <h2 className="mb-4 text-xl font-bold text-space-900">
          成就徽章 <span className="text-sm font-normal text-space-900/50">({unlockedBadges.length}/{badges.length})</span>
        </h2>
        <BadgeGrid badges={badges} unlockedIds={unlockedBadges} />
      </div>
    </Layout>
  );
}
