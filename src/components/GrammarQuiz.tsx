import { useState } from 'react';
import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import type { GrammarQuestion } from '@/types';

interface GrammarQuizProps {
  question: GrammarQuestion;
  onAnswer: (correct: boolean) => void;
}

export default function GrammarQuiz({ question, onAnswer }: GrammarQuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    onAnswer(index === question.answer);
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="card mb-6">
        <p className="text-lg font-medium leading-relaxed text-space-900">{question.question}</p>
      </div>

      <div className="grid gap-3">
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
              className={`flex items-center justify-between rounded-2xl border-2 px-5 py-4 text-left font-display text-lg font-semibold transition-all ${
                showCorrect
                  ? 'border-mint bg-mint/10 text-mint'
                  : showWrong
                    ? 'border-coral bg-coral/10 text-coral'
                    : 'border-space-900/10 bg-white hover:border-nebula hover:text-nebula'
              }`}
            >
              {option}
              {showCorrect && <CheckCircle size={22} />}
              {showWrong && <XCircle size={22} />}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-star/10 p-4 text-space-900">
          <Lightbulb className="mt-0.5 shrink-0 text-star" size={22} />
          <div>
            <p className="font-display font-bold text-star">解析</p>
            <p className="mt-1 text-sm leading-relaxed">{question.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
