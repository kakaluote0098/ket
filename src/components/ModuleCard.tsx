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
        'group card flex flex-col items-center gap-6 p-8 text-center text-space-900 transition-all hover:-translate-y-1 hover:bg-white/95 hover:shadow-glow active:scale-95',
        color
      )}
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-white/95 text-5xl shadow-soft transition-transform group-hover:scale-110">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-3xl font-bold">{title}</h3>
        <p className="mt-2 text-lg leading-snug opacity-80">{desc}</p>
      </div>
      <span className="mt-2 inline-flex min-h-[3rem] items-center gap-2 rounded-full bg-white/80 px-6 py-2.5 text-lg font-bold shadow-sm transition-all group-hover:bg-white group-hover:text-nebula">
        开始练习 <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
