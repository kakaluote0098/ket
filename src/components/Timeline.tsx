import { cn } from '@/lib/utils';

interface TimelineItem {
  title: string;
  desc: string;
  icon: string;
  active?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative ml-4 border-l-2 border-dashed border-space-900/10 pl-8">
      {items.map((item, index) => (
        <div key={index} className="relative mb-8 last:mb-0">
          <div
            className={cn(
              'absolute -left-[41px] flex h-10 w-10 items-center justify-center rounded-full border-4 border-white text-lg shadow-sm',
              item.active ? 'bg-nebula text-white shadow-glow-sm' : 'bg-white text-space-900/50'
            )}
          >
            {item.icon}
          </div>
          <div
            className={cn(
              'rounded-2xl border p-5 transition-all',
              item.active
                ? 'border-nebula/20 bg-nebula/5'
                : 'border-space-900/5 bg-white'
            )}
          >
            <h4 className={cn('font-display font-bold', item.active ? 'text-nebula' : 'text-space-900')}>
              {item.title}
            </h4>
            <p className="mt-1 text-sm text-space-900/60">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
