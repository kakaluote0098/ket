import type { Level } from '@/types';

export const levelMap: Record<Level, { label: string; color: string }> = {
  starter: { label: 'Starter', color: 'bg-mint' },
  mover: { label: 'Mover', color: 'bg-ocean' },
  flyer: { label: 'Flyer', color: 'bg-nebula' },
  ket: { label: 'KET 预备', color: 'bg-star' },
};
