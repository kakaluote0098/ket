import Layout from '@/components/Layout';
import ModuleCard from '@/components/ModuleCard';

const modules = [
  {
    icon: '📚',
    title: '单词记忆',
    desc: '翻转卡片，趣味背单词',
    to: '/learn/vocabulary',
    color: 'bg-gradient-to-br from-mint/30 to-mint/10',
  },
  {
    icon: '✏️',
    title: '语法练习',
    desc: '选择题闯关，即时反馈',
    to: '/learn/grammar',
    color: 'bg-gradient-to-br from-ocean/30 to-ocean/10',
  },
  {
    icon: '🎤',
    title: '口语跟读',
    desc: '模仿发音，提升口语表达',
    to: '/learn/speaking',
    color: 'bg-gradient-to-br from-nebula/30 to-nebula/10',
  },
  {
    icon: '🎧',
    title: '听力训练',
    desc: '听句子选答案，锻炼听力',
    to: '/learn/listening',
    color: 'bg-gradient-to-br from-star/40 to-star/10',
  },
];

export default function Learn() {
  return (
    <Layout>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-space-900">学习模块</h1>
        <p className="text-space-900/60">选择一项训练，开启今天的探险</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {modules.map((module) => (
          <ModuleCard key={module.title} {...module} />
        ))}
      </div>
    </Layout>
  );
}
