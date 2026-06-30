import { phaseLabels, type Phase } from '@/types';
import { useProgressStore } from '@/stores/progressStore';

const phaseColors: Record<Phase, string> = {
  phase1: 'bg-mint',
  phase2: 'bg-ocean',
  phase3: 'bg-coral',
  phase4: 'bg-star',
};

const phaseEmojis: Record<Phase, string> = {
  phase1: '🌱',
  phase2: '🚀',
  phase3: '🎯',
  phase4: '🏆',
};

export default function PhaseSelector() {
  const { currentPhase, setPhase } = useProgressStore();

  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-white/60 p-4 backdrop-blur-sm sm:flex-row sm:items-center">
      <span className="px-2 text-base font-bold text-space-900/70">学习阶段</span>
      <div className="flex flex-1 gap-2">
        {(Object.keys(phaseLabels) as Phase[]).map((phase) => {
          const active = phase === currentPhase;
          const { label, description } = phaseLabels[phase];
          return (
            <button
              key={phase}
              onClick={() => setPhase(phase)}
              className={`flex flex-1 min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl px-3 py-2.5 text-base font-bold transition-all ${
                active
                  ? `${phaseColors[phase]} text-white shadow-glow-sm`
                  : 'bg-white/60 text-space-900 hover:bg-white'
              }`}
            >
              <span>{phaseEmojis[phase]}</span>
              <span>{label}</span>
              <span className={`hidden text-sm opacity-80 sm:inline ${active ? 'text-white/80' : 'text-space-900/60'}`}>
                {description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
