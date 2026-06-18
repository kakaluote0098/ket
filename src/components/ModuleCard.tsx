import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  to: string;
  color: string;
}

export default function ModuleCard({ icon, title, desc, to, color }: ModuleCardProps) {
  return (
    <Link
      to={to}
      className={cn(
        'group card flex flex-col items-center gap-4 text-center text-space-900 transition-all hover:-translate-y-1 hover:shadow-glow',
        color
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/90 text-3xl shadow-soft">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-1 text-sm opacity-80">{desc}</p>
      </div>
      <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/60 px-4 py-1.5 text-sm font-semibold">
        开始练习 <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
