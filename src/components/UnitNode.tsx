import { Star, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UnitNodeProps {
  title: string;
  order: number;
  completed: boolean;
  locked: boolean;
  color: string;
  onClick?: () => void;
}

export default function UnitNode({ title, order, completed, locked, color, onClick }: UnitNodeProps) {
  return (
    <button
      onClick={onClick}
      disabled={locked}
      className={cn(
        'group relative flex flex-col items-center gap-3 rounded-3xl p-5 text-center transition-all',
        locked
          ? 'cursor-not-allowed bg-space-900/5 text-space-900/30'
          : 'card bg-white/80 hover:-translate-y-1'
      )}
    >
      <div
        className={cn(
          'flex h-16 w-16 items-center justify-center rounded-full text-xl text-white shadow-soft transition-transform group-hover:scale-110',
          locked ? 'bg-space-900/20' : color
        )}
      >
        {locked ? <Lock size={24} /> : completed ? <Star size={24} fill="white" /> : `🪐`}
      </div>
      <div>
        <p className="text-xs font-semibold opacity-60">Unit {order}</p>
        <h3 className={cn('font-display text-lg font-bold', locked && 'opacity-40')}>{title}</h3>
      </div>
      {completed && !locked && (
        <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-star text-xs text-space-900 shadow-sm">
          ⭐
        </div>
      )}
    </button>
  );
}
