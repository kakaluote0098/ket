import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaskCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  to: string;
  color: string;
  progress: number;
}

export default function TaskCard({ icon, title, desc, to, color, progress }: TaskCardProps) {
  return (
    <Link
      to={to}
      className="group card relative flex min-w-[240px] flex-col gap-3 overflow-hidden"
    >
      <div className="flex items-start justify-between">
        <div className={cn('flex h-12 w-12 items-center justify-center rounded-2xl text-xl text-white', color)}>
          {icon}
        </div>
        <ArrowRight
          size={20}
          className="text-space-900/30 transition-transform group-hover:translate-x-1 group-hover:text-nebula"
        />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-space-900">{title}</h3>
        <p className="text-sm text-space-900/60">{desc}</p>
      </div>
      <div className="mt-auto h-2 w-full overflow-hidden rounded-full bg-space-900/5">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </Link>
  );
}
