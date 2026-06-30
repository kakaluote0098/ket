import { useState } from 'react';
import { Volume2, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { speak } from '@/lib/speech';
import type { ListeningQuestion } from '@/types';

interface ListeningCardProps {
  question: ListeningQuestion;
  onAnswer: (correct: boolean) => void;
}

export default function ListeningCard({ question, onAnswer }: ListeningCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const play = () => speak(question.audioText, { rate: 0.6375 });

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    onAnswer(index === question.answer);
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <button
        onClick={play}
        className="mb-8 flex h-20 w-full items-center justify-center gap-3 rounded-3xl bg-nebula text-white shadow-glow transition-transform hover:scale-[1.02]"
      >
        <Volume2 size={32} />
        <span className="font-display text-lg font-semibold">点击播放音频</span>
      </button>

      <div className="grid gap-4 sm:grid-cols-3">
        {question.options.map((option, index) => {
          const isCorrect = index === question.answer;
          const isSelected = index === selected;
          const showCorrect = showResult && isCorrect;
          const showWrong = showResult && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showResult}
              className={cn(
                'flex flex-col items-center justify-center gap-2 rounded-3xl border-2 p-6 text-center transition-all',
                showCorrect
                  ? 'border-mint bg-mint/10 text-mint'
                  : showWrong
                    ? 'border-coral bg-coral/10 text-coral'
                    : 'border-space-900/10 bg-white hover:border-nebula hover:text-nebula'
              )}
            >
              <span className="text-3xl">{index === 0 ? '🎈' : index === 1 ? '🎁' : '🎯'}</span>
              <span className="font-display text-lg font-bold">{option}</span>
              {showCorrect && <CheckCircle size={22} />}
              {showWrong && <XCircle size={22} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
