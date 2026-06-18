import { useMemo } from 'react';

interface RadarChartProps {
  data: {
    label: string;
    value: number;
    color?: string;
  }[];
  size?: number;
}

export default function RadarChart({ data, size = 240 }: RadarChartProps) {
  const center = size / 2;
  const radius = size * 0.38;
  const angleStep = (Math.PI * 2) / data.length;

  const points = useMemo(
    () =>
      data.map((item, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const r = (item.value / 100) * radius;
        return [center + r * Math.cos(angle), center + r * Math.sin(angle)];
      }),
    [data, angleStep, center, radius]
  );

  const axisPoints = data.map((_, index) => {
    const angle = index * angleStep - Math.PI / 2;
    return [center + radius * Math.cos(angle), center + radius * Math.sin(angle)];
  });

  const polygonPoints = points.map((p) => p.join(',')).join(' ');

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="overflow-visible">
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
          <polygon
            key={i}
            points={axisPoints.map(([x, y]) => `${center + (x - center) * scale},${center + (y - center) * scale}`).join(' ')}
            fill="none"
            stroke="rgba(26,31,75,0.08)"
            strokeWidth={1}
          />
        ))}

        {axisPoints.map(([x, y], index) => (
          <line
            key={index}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke="rgba(26,31,75,0.08)"
            strokeWidth={1}
          />
        ))}

        <polygon
          points={polygonPoints}
          fill="rgba(123,97,255,0.25)"
          stroke="#7B61FF"
          strokeWidth={2}
          className="transition-all duration-700"
        />

        {points.map(([x, y], index) => (
          <g key={index}>
            <circle cx={x} cy={y} r={4} fill="#7B61FF" stroke="white" strokeWidth={2} />
            <text
              x={axisPoints[index][0] + (axisPoints[index][0] - center) * 0.22}
              y={axisPoints[index][1] + (axisPoints[index][1] - center) * 0.22}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-space-900 text-[11px] font-bold"
            >
              {data[index].label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
