import { cn } from '@/lib/utils';
import { levelMap } from '@/lib/levelStyles';
import type { Level } from '@/types';

interface LevelBadgeProps {
  level: Level;
  active?: boolean;
  onClick?: () => void;
}

export default function LevelBadge({ level, active, onClick }: LevelBadgeProps) {
  const info = levelMap[level];
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full px-4 py-2 font-display font-semibold transition-all',
        active
          ? `${info.color} text-white shadow-glow-sm`
          : 'bg-white/60 text-space-900/70 hover:bg-white hover:text-space-900'
      )}
    >
      {info.label}
    </button>
  );
}

