import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  ChevronUp,
  Languages,
  Lightbulb,
  Volume2,
} from 'lucide-react';
import Layout from '@/components/Layout';
import { speak } from '@/lib/speech';
import SpeakButton from '@/components/SpeakButton';
import {
  phase1VocabCategories,
  vocabMemoryMethods,
  totalBasicWords,
} from '@/data/phase1Vocabulary';


export default function VocabularyFoundation() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setExpandedCategory((prev) => (prev === id ? null : id));
  };

  return (
    <Layout>
      <div className="mb-6 flex items-center gap-3">
        <Link to="/learn" className="rounded-full bg-white/60 p-2 text-space-900 transition-colors hover:bg-white">
          <ArrowLeft size={22} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-space-900">词汇积累</h1>
          <p className="text-sm text-space-900/60">第一阶段 · 6 课时 · 八大生活场景基础词</p>
        </div>
      </div>

      <div className="mb-6 rounded-3xl bg-gradient-to-br from-nebula/20 to-nebula/5 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nebula text-white shadow-sm">
            <Languages size={24} />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-space-900">生活化基础词汇</h2>
            <p className="text-sm text-space-900/70">
              覆盖校园、家庭、食物、动物、颜色、数字、服饰、天气八大场景，累计掌握 {totalBasicWords} 个高频基础词。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 grid gap-3 rounded-3xl bg-white/60 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-space-900/80">
          <BookOpen size={18} className="text-nebula" />
          八大主题场景
        </div>
        <div className="flex flex-wrap gap-2">
          {phase1VocabCategories.map((category) => (
            <span
              key={category.id}
              className="rounded-full bg-space-900/5 px-3 py-1 text-xs font-semibold text-space-900/70"
            >
              {category.icon} {category.title} ({category.words.length} 词)
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {phase1VocabCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => toggleCategory(category.id)}
            className={`card flex flex-col items-center justify-center p-4 text-center transition-all ${
              expandedCategory === category.id ? 'ring-2 ring-nebula' : 'hover:bg-white'
            }`}
          >
            <span className="mb-2 text-3xl">{category.icon}</span>
            <h3 className="font-display font-bold text-space-900">{category.title}</h3>
            <p className="text-xs text-space-900/60">{category.words.length} 个单词</p>
          </button>
        ))}
      </div>

      {expandedCategory && (
        <div className="card mb-6">
          {phase1VocabCategories
            .filter((c) => c.id === expandedCategory)
            .map((category) => (
              <div key={category.id}>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="font-display text-xl font-bold text-space-900">{category.title}</h2>
                  </div>
                  <button
                    onClick={() => setExpandedCategory(null)}
                    className="rounded-full bg-space-900/5 p-2 text-space-900/70 transition-colors hover:bg-space-900/10"
                  >
                    <ChevronUp size={18} />
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {category.words.map((word, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-space-900/[0.02] p-4 transition-all hover:bg-space-900/[0.04]"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-lg font-bold text-space-900">{word.english}</span>
                        <button
                          onClick={() => speak(word.english)}
                          className="rounded-full bg-nebula/10 p-1.5 text-nebula transition-colors hover:bg-nebula/20"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                      <p className="font-phonetic mb-1 text-sm text-nebula">{word.phonetic}</p>
                      <p className="mb-2 text-sm font-medium text-space-900/80">{word.chinese}</p>
                      <p className="flex items-start gap-1 text-xs text-space-900/60">
                        {word.example}
                        <SpeakButton text={word.example} size={14} />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}

      <div className="card">
        <div className="mb-4 flex items-center gap-2">
          <Brain size={20} className="text-star" />
          <h2 className="font-display text-lg font-bold text-space-900">单词记忆方法</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {vocabMemoryMethods.map((method, idx) => (
            <div key={idx} className="rounded-2xl bg-star/5 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-star text-xs font-bold text-space-900">
                  {idx + 1}
                </span>
                <h3 className="font-semibold text-space-900">{method.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-space-900/80">{method.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-nebula/5 p-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-nebula/80">
          <Lightbulb size={16} /> 学习建议
        </p>
        <p className="mt-1 text-sm text-space-900/70">
          每天学习 1 个主题场景，结合拼读规则读准发音，通过例句理解用法，并用记忆卡片进行间隔复习。
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/learn" className="btn-primary">
          返回学习模块 <ArrowRight size={18} />
        </Link>
      </div>
    </Layout>
  );
}
