import { Volume2 } from 'lucide-react';
import { speak } from '@/lib/speech';

interface SpeakButtonProps {
  text: string;
  size?: number;
  className?: string;
  label?: string;
}

export default function SpeakButton({ text, size = 16, className = '', label }: SpeakButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      className={`inline-flex items-center gap-1 rounded-full bg-nebula/10 p-1.5 text-nebula transition-colors hover:bg-nebula/20 ${className}`}
      title="点击播放语音"
      type="button"
    >
      <Volume2 size={size} />
      {label && <span className="text-xs font-semibold">{label}</span>}
    </button>
  );
}
