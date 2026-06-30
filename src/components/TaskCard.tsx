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
      className="group card relative flex min-w-[280px] flex-col gap-4 overflow-hidden"
    >
      <div className="flex items-start justify-between">
        <div className={cn('flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white shadow-sm', color)}>
          {icon}
        </div>
        <ArrowRight
          size={24}
          className="text-space-900/30 transition-transform group-hover:translate-x-1 group-hover:text-nebula"
        />
      </div>
      <div>
        <h3 className="font-display text-xl font-bold text-space-900">{title}</h3>
        <p className="text-base text-space-900/60">{desc}</p>
      </div>
      <div className="mt-auto h-3 w-full overflow-hidden rounded-full bg-space-900/5">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </Link>
  );
}
