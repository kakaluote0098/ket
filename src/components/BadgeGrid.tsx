import { cn } from '@/lib/utils';
import type { Badge } from '@/types';

interface BadgeGridProps {
  badges: Badge[];
  unlockedIds: string[];
}

export default function BadgeGrid({ badges, unlockedIds }: BadgeGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
      {badges.map((badge) => {
        const unlocked = unlockedIds.includes(badge.id);
        return (
          <div
            key={badge.id}
            className={cn(
              'flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-center transition-all',
              unlocked
                ? 'border-star/30 bg-star/10'
                : 'border-space-900/5 bg-space-900/5 opacity-60 grayscale'
            )}
          >
            <span className="text-3xl">{badge.icon}</span>
            <span className="text-xs font-semibold leading-tight">{badge.name}</span>
          </div>
        );
      })}
    </div>
  );
}
