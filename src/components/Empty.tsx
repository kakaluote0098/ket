import { cn } from '@/lib/utils';

interface EmptyProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function Empty({ title = '暂无内容', description, className }: EmptyProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center rounded-3xl bg-white/60 py-16 text-center', className)}>
      <div className="mb-3 text-4xl">🍃</div>
      <p className="text-lg font-semibold text-space-900">{title}</p>
      {description && <p className="mt-1 text-sm text-space-900/60">{description}</p>}
    </div>
  );
}
