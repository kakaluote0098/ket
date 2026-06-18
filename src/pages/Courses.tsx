import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import LevelBadge from '@/components/LevelBadge';
import UnitNode from '@/components/UnitNode';
import { levels, getUnitsByLevel } from '@/data/courses';
import { levelMap } from '@/lib/levelStyles';
import { useProgressStore } from '@/stores/progressStore';
import type { Level } from '@/types';

export default function Courses() {
  const [activeLevel, setActiveLevel] = useState<Level>('starter');
  const progress = useProgressStore();
  const units = getUnitsByLevel(activeLevel);
  const levelInfo = levels.find((l) => l.key === activeLevel)!;

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-space-900">课程中心</h1>
        <p className="text-space-900/60">选择你的星球，开始分级探索</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3 rounded-2xl bg-white/50 p-2 backdrop-blur-sm">
        {levels.map((level) => (
          <LevelBadge
            key={level.key}
            level={level.key}
            active={activeLevel === level.key}
            onClick={() => setActiveLevel(level.key)}
          />
        ))}
      </div>

      <div className="mb-8 rounded-3xl p-6" style={{ backgroundColor: `${levelInfo.color}15` }}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">🚀</span>
          <div>
            <h2 className="font-display text-2xl font-bold" style={{ color: levelInfo.color }}>
              {levelInfo.label}
            </h2>
            <p className="text-sm text-space-900/70">{levelInfo.description}</p>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {units.map((unit, index) => {
          const completed = progress.completedUnits.includes(unit.id);
          const locked = index > 0 && !progress.completedUnits.includes(units[index - 1].id);

          return (
            <Link
              key={unit.id}
              to={locked ? '#' : `/learn?unit=${unit.id}`}
              onClick={(e) => locked && e.preventDefault()}
              className="block"
            >
              <UnitNode
                title={unit.title}
                order={unit.order}
                completed={completed}
                locked={locked}
                color={levelMap[activeLevel].color}
              />
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
