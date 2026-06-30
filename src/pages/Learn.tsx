import Layout from '@/components/Layout';
import ModuleCard from '@/components/ModuleCard';

const modules = [
  {
    icon: '🔤',
    title: '拼读体系',
    desc: '第一阶段自然拼读，见词能读听音能拼',
    to: '/learn/phonics',
    color: 'bg-gradient-to-br from-mint/30 to-mint/10',
  },
  {
    icon: '📖',
    title: '词汇积累',
    desc: '第一阶段八大场景基础词汇与记忆方法',
    to: '/learn/vocabulary-foundation',
    color: 'bg-gradient-to-br from-nebula/30 to-nebula/10',
  },
  {
    icon: '✏️',
    title: '语法句型',
    desc: '第一阶段零基础语法全覆盖',
    to: '/learn/grammar-foundation',
    color: 'bg-gradient-to-br from-ocean/30 to-ocean/10',
  },
  {
    icon: '📣',
    title: '听说读写训练',
    desc: '第一阶段课堂指令、情景对话、规范书写与句子输出',
    to: '/learn/skills-foundation',
    color: 'bg-gradient-to-br from-mint/30 to-mint/10',
  },
  {
    icon: '📚',
    title: '单词记忆',
    desc: '翻转卡片，趣味背单词',
    to: '/learn/vocabulary',
    color: 'bg-gradient-to-br from-mint/30 to-mint/10',
  },
  {
    icon: '🧩',
    title: '单词测验',
    desc: '按分类拼写单词，答错自动加入弱词',
    to: '/learn/word-quiz',
    color: 'bg-gradient-to-br from-nebula/30 to-nebula/10',
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
  {
    icon: '📝',
    title: '题型认知',
    desc: '了解 KET 四大模块规则与答题逻辑',
    to: '/learn/exam',
    color: 'bg-gradient-to-br from-coral/30 to-coral/10',
  },
  {
    icon: '🎯',
    title: '专项训练',
    desc: '听、读、写、说分项基础练习',
    to: '/learn/practice',
    color: 'bg-gradient-to-br from-star/40 to-star/10',
  },
  {
    icon: '💡',
    title: '应试技巧',
    desc: '审题排除、时间分配、错题本与高分规范',
    to: '/learn/exam-tips',
    color: 'bg-gradient-to-br from-coral/30 to-coral/10',
  },
  {
    icon: '🔄',
    title: '全考点复盘',
    desc: '第四阶段系统复盘，查漏补缺',
    to: '/learn/review',
    color: 'bg-gradient-to-br from-star/40 to-star/10',
  },
  {
    icon: '⏱️',
    title: '全真计时模考',
    desc: '第四阶段真题风格模考，计时训练',
    to: '/learn/mock-exam',
    color: 'bg-gradient-to-br from-coral/30 to-coral/10',
  },
  {
    icon: '📋',
    title: '真题逐套精讲',
    desc: '逐题精讲复盘，突破分数瓶颈',
    to: '/learn/paper-review',
    color: 'bg-gradient-to-br from-ocean/30 to-ocean/10',
  },
  {
    icon: '✨',
    title: '高分打磨提升',
    desc: '高分范文背诵、口语发音与临场表达',
    to: '/learn/high-score',
    color: 'bg-gradient-to-br from-mint/30 to-mint/10',
  },
];

const coreModules = modules.slice(0, 4);
const moreModules = modules.slice(4);

export default function Learn() {
  return (
    <Layout>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-space-900">学习模块</h1>
        <p className="mt-2 text-lg text-space-900/60">选择一项训练，开启今天的探险</p>
      </div>

      <section className="mb-10">
        <h2 className="section-title">🌟 重点学习</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {coreModules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">🚀 更多训练</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {moreModules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
