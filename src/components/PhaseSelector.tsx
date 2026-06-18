import { phaseLabels, type Phase } from '@/types';
import { useProgressStore } from '@/stores/progressStore';

const phaseColors: Record<Phase, string> = {
  phase1: 'bg-mint',
  phase2: 'bg-ocean',
  phase3: 'bg-coral',
  phase4: 'bg-star',
};

export default function PhaseSelector() {
  const { currentPhase, setPhase } = useProgressStore();

  return (
    <div className="flex flex-col gap-2 rounded-3xl bg-white/60 p-3 backdrop-blur-sm sm:flex-row sm:items-center">
      <span className="px-2 text-sm font-semibold text-space-900/70">学习阶段</span>
      <div className="flex flex-1 gap-2">
        {(Object.keys(phaseLabels) as Phase[]).map((phase) => {
          const active = phase === currentPhase;
          const { label, description } = phaseLabels[phase];
          return (
            <button
              key={phase}
              onClick={() => setPhase(phase)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold transition-all ${
                active
                  ? `${phaseColors[phase]} text-white shadow-glow-sm`
                  : 'bg-white/60 text-space-900 hover:bg-white'
              }`}
            >
              <span>{label}</span>
              <span className={`hidden text-xs opacity-80 sm:inline ${active ? 'text-white/80' : 'text-space-900/60'}`}>
                {description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
