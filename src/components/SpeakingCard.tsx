import { useState, useRef } from 'react';
import { Volume2, Mic, Square, Star } from 'lucide-react';
import { speak } from '@/lib/speech';

interface SpeakingCardProps {
  sentence: string;
  onComplete: (score: number) => void;
}

export default function SpeakingCard({ sentence, onComplete }: SpeakingCardProps) {
  const [recording, setRecording] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const timerRef = useRef<number | null>(null);

  const handleSpeak = () => speak(sentence, { rate: 0.85 });

  const startRecording = () => {
    setRecording(true);
    setScore(null);
    timerRef.current = window.setTimeout(() => {
      stopRecording();
    }, 2500);
  };

  const stopRecording = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setRecording(false);
    const simulatedScore = Math.floor(Math.random() * 2) + 4;
    setScore(simulatedScore);
    onComplete(simulatedScore);
  };

  return (
    <div className="mx-auto w-full max-w-xl text-center">
      <div className="card mb-8">
        <p className="font-display text-2xl font-bold leading-relaxed text-space-900">{sentence}</p>
        <button
          onClick={handleSpeak}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-nebula/10 px-4 py-2 text-sm font-semibold text-nebula transition-colors hover:bg-nebula/20"
        >
          <Volume2 size={18} /> 播放原音
        </button>
      </div>

      <button
        onClick={recording ? stopRecording : startRecording}
        className={`relative flex h-24 w-24 items-center justify-center rounded-full text-white shadow-glow transition-all hover:scale-105 mx-auto ${
          recording ? 'bg-coral animate-pulse' : 'bg-nebula'
        }`}
      >
        {recording ? <Square size={32} fill="white" /> : <Mic size={36} />}
      </button>
      <p className="mt-4 font-semibold text-space-900/70">
        {recording ? '正在录音...' : '按住麦克风跟读'}
      </p>

      {score !== null && (
        <div className="mt-8 rounded-2xl bg-star/10 p-5">
          <p className="font-display text-lg font-bold text-space-900">评分</p>
          <div className="mt-2 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={28}
                className={i < score ? 'text-star' : 'text-space-900/10'}
                fill={i < score ? 'currentColor' : 'none'}
              />
            ))}
          </div>
          <p className="mt-2 text-sm text-space-900/70">
            {score >= 4 ? '发音很棒，继续加油！' : '再试一次，你可以做得更好！'}
          </p>
        </div>
      )}
    </div>
  );
}
