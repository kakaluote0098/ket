import { useState } from 'react';
import { Volume2, RotateCcw, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { speak } from '@/lib/speech';
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

  return (
    <div className="mx-auto w-full max-w-md">
      <div className={cn('flip-card aspect-[4/3] cursor-pointer', flipped && 'flipped')} onClick={() => setFlipped(!flipped)}>
        <div className="flip-card-inner relative h-full w-full">
          <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] bg-gradient-to-br from-nebula to-ocean p-8 text-center text-white shadow-glow">
            <span className="mb-2 text-5xl font-bold">{word.english}</span>
            <span className="mb-4 text-2xl font-medium opacity-90">{word.chinese}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSpeak();
              }}
              className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <Volume2 size={18} /> 点击发音
            </button>
            <p className="mt-6 text-sm opacity-80">点击卡片查看例句与搭配</p>
          </div>
          <div className="flip-card-back absolute inset-0 flex flex-col items-center rounded-[2rem] bg-white p-6 text-center text-space-900 shadow-glow">
            <div className="flex w-full flex-1 flex-col items-center justify-center overflow-y-auto">
              <p className="text-3xl font-bold text-nebula">{word.chinese}</p>
              {word.partOfSpeech && (
                <span className="mt-2 rounded-full bg-ocean/10 px-3 py-1 text-xs font-semibold text-ocean">
                  {word.partOfSpeech}
                </span>
              )}
              <p className="mt-4 flex items-center justify-center gap-2 text-lg italic text-space-900/70">
                "{word.example}"
                <SpeakButton text={word.example} size={16} />
              </p>

              <div className="mt-4 w-full space-y-2 text-left text-sm">
                {word.collocation && (
                  <div className="rounded-xl bg-mint/5 p-3">
                    <span className="font-semibold text-mint">搭配：</span>
                    <span className="text-space-900/80">{word.collocation}</span>
                  </div>
                )}
                {word.phrase && (
                  <div className="rounded-xl bg-star/5 p-3">
                    <span className="font-semibold text-star">短语：</span>
                    <span className="text-space-900/80">{word.phrase}</span>
                  </div>
                )}
                {word.synonyms && word.synonyms.length > 0 && (
                  <div className="rounded-xl bg-nebula/5 p-3">
                    <span className="font-semibold text-nebula">近义词：</span>
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
              className="mt-4 flex items-center gap-2 rounded-full bg-nebula/10 px-4 py-2 text-sm font-semibold text-nebula transition-colors hover:bg-nebula/20"
            >
              <Volume2 size={18} /> 朗读例句
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={onWeak}
          className="flex items-center gap-2 rounded-full bg-coral/10 px-6 py-3 font-display font-semibold text-coral transition-all hover:bg-coral hover:text-white"
        >
          <X size={18} /> 还需加强
        </button>
        <button
          onClick={() => {
            setFlipped(false);
            onMaster();
          }}
          className="flex items-center gap-2 rounded-full bg-mint/10 px-6 py-3 font-display font-semibold text-mint transition-all hover:bg-mint hover:text-white"
        >
          <Check size={18} /> 已掌握
        </button>
      </div>

      <button
        onClick={() => setFlipped(false)}
        className="mx-auto mt-4 flex items-center gap-1 text-sm font-semibold text-space-900/50 hover:text-nebula"
      >
        <RotateCcw size={14} /> 重置卡片
      </button>
    </div>
  );
}
