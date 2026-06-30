interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color?: string;
}

export default function StatCard({ icon, label, value, color = 'bg-nebula' }: StatCardProps) {
  return (
    <div className="card flex items-center gap-4 p-5">
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl text-white ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-base font-bold text-space-900/60">{label}</p>
        <p className="font-display text-3xl font-bold text-space-900">{value}</p>
      </div>
    </div>
  );
}
