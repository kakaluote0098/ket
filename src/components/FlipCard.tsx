import { useState } from 'react';
import { Volume2, RotateCcw, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { speak } from '@/lib/speech';
import { getPhoneticBreakdown } from '@/lib/phonetics';
import SpeakButton from '@/components/SpeakButton';
import type { Word } from '@/types';

interface FlipCardProps {
  word: Word;
  onMaster: () => void;
  onWeak: () => void;
}

export default function FlipCard({ word, onMaster, onWeak }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleSpeak = () => speak(word.english);
  const breakdown = getPhoneticBreakdown(word);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className={cn('flip-card aspect-[4/3] cursor-pointer', flipped && 'flipped')} onClick={() => setFlipped(!flipped)}>
        <div className="flip-card-inner relative h-full w-full">
          <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] bg-gradient-to-br from-nebula to-ocean p-6 text-center text-white shadow-glow">
            <span className="word-label text-white/80">单词 Word</span>
            <span className="word-hero mb-3">{word.english}</span>
            <span className="mb-4 text-2xl font-medium opacity-95">{word.chinese}</span>
            <span
              className="phonetic-badge mb-4"
              title="音标"
            >
              {breakdown.combined}
            </span>

            {/* 字母组合 → 发音 拼读提示 */}
            <div className="mb-5 flex max-w-[90%] flex-wrap items-center justify-center gap-2">
              {breakdown.chunks.map((chunk, idx) => (
                <div
                  key={idx}
                  className="flex min-w-[2.5rem] flex-col items-center rounded-xl bg-white/20 px-3 py-2 backdrop-blur-sm"
                >
                  <span className="text-lg font-bold leading-none">{chunk.text}</span>
                  <span className="font-phonetic text-sm font-medium opacity-90">{chunk.sound}</span>
                </div>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSpeak();
              }}
              className="flex min-h-[3rem] items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-base font-bold backdrop-blur-sm transition-colors hover:bg-white/30 active:scale-95"
            >
              <Volume2 size={22} /> 点击发音
            </button>
            <p className="mt-6 text-base opacity-85">点击卡片查看例句</p>
          </div>
          <div className="flip-card-back absolute inset-0 flex flex-col items-center rounded-[2rem] bg-white p-6 text-center text-space-900 shadow-glow">
            <div className="flex w-full flex-1 flex-col items-center justify-center overflow-y-auto">
              <span className="word-label text-space-900/50">例句 Sentence</span>
              <p className="mt-2 flex items-center justify-center gap-3 text-5xl font-bold text-nebula">
                {word.english}
                <span onClick={(e) => e.stopPropagation()}>
                  <SpeakButton text={word.english} size={22} />
                </span>
              </p>
              <p className="mt-2 text-2xl font-medium text-space-900/80">{word.chinese}</p>
              {word.partOfSpeech && (
                <span className="mt-3 rounded-full bg-ocean/10 px-4 py-1.5 text-sm font-bold text-ocean">
                  {word.partOfSpeech}
                </span>
              )}

              <div className="mt-5 w-full rounded-2xl border-l-4 border-ocean bg-ocean/5 p-5 text-left">
                <p className="flex items-start gap-2 text-xl font-medium italic leading-relaxed text-space-900/90">
                  "{word.example}"
                  <SpeakButton text={word.example} size={20} className="shrink-0" />
                </p>
                {word.exampleTranslation && (
                  <p className="mt-2 text-lg text-space-900/70">{word.exampleTranslation}</p>
                )}
              </div>

              <div className="mt-4 w-full space-y-2 text-left text-base">
                {word.collocation && (
                  <div className="rounded-xl bg-mint/5 p-3">
                    <span className="font-bold text-mint">搭配：</span>
                    <span className="text-space-900/80">{word.collocation}</span>
                  </div>
                )}
                {word.phrase && (
                  <div className="rounded-xl bg-star/5 p-3">
                    <span className="font-bold text-star">短语：</span>
                    <span className="text-space-900/80">{word.phrase}</span>
                  </div>
                )}
                {word.synonyms && word.synonyms.length > 0 && (
                  <div className="rounded-xl bg-nebula/5 p-3">
                    <span className="font-bold text-nebula">近义词：</span>
                    <span className="text-space-900/80">{word.synonyms.join('、')}</span>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSpeak();
              }}
              className="mt-4 flex min-h-[3rem] items-center gap-2 rounded-full bg-nebula/10 px-5 py-2.5 text-base font-bold text-nebula transition-colors hover:bg-nebula/20 active:scale-95"
            >
              <Volume2 size={22} /> 朗读例句
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={onWeak}
          className="flex min-h-[3.5rem] items-center gap-2 rounded-full bg-coral/10 px-8 py-3.5 font-display text-lg font-bold text-coral transition-all hover:bg-coral hover:text-white active:scale-95"
        >
          <X size={22} /> 还需加强
        </button>
        <button
          onClick={() => {
            setFlipped(false);
            onMaster();
          }}
          className="flex min-h-[3.5rem] items-center gap-2 rounded-full bg-mint/10 px-8 py-3.5 font-display text-lg font-bold text-mint transition-all hover:bg-mint hover:text-white active:scale-95"
        >
          <Check size={22} /> 已掌握
        </button>
      </div>

      <button
        onClick={() => setFlipped(false)}
        className="mx-auto mt-5 flex min-h-[2.75rem] items-center gap-2 rounded-full bg-white/60 px-5 py-2 text-base font-bold text-space-900/60 transition-colors hover:bg-white hover:text-nebula"
      >
        <RotateCcw size={18} /> 重置卡片
      </button>
    </div>
  );
}
