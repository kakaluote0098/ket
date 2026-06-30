import { Volume2 } from 'lucide-react';
import { speak } from '@/lib/speech';

interface SpeakButtonProps {
  text: string;
  size?: number;
  className?: string;
  label?: string;
}

export default function SpeakButton({ text, size = 20, className = '', label }: SpeakButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      className={`inline-flex min-h-[2.5rem] items-center gap-1.5 rounded-full bg-nebula/10 p-2.5 text-nebula transition-colors hover:bg-nebula hover:text-white active:scale-95 ${className}`}
      title="点击播放语音"
      type="button"
    >
      <Volume2 size={size} />
      {label && <span className="text-sm font-bold">{label}</span>}
    </button>
  );
}
