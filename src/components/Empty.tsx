import { cn } from '@/lib/utils';

interface EmptyProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function Empty({ title = '暂无内容', description, className }: EmptyProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center rounded-3xl bg-white/60 py-16 text-center', className)}>
      <div className="mb-4 text-6xl">🍃</div>
      <p className="text-xl font-bold text-space-900">{title}</p>
      {description && <p className="mt-2 max-w-xs text-base text-space-900/60">{description}</p>}
    </div>
  );
}
