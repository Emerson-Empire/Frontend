import React from 'react';

interface Stat {
  label: string;
  value: number | string;
  prefix?: string;
  suffix?: string;
  icon: React.ReactNode;
  trend?: {
    value: number;   // e.g. 12 means +12%
    positive?: boolean;
  };
}

const STATS: Stat[] = [
  {
    label: 'Clients',
    value: 48,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    trend: { value: 8, positive: true },
  },
  {
    label: 'Interns',
    value: 124,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    trend: { value: 14, positive: true },
  },
  {
    label: 'App Downloads',
    value: '3.2K',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12l4 4 4-4M12 8v8" />
      </svg>
    ),
    trend: { value: 3, positive: false },
  },
];

const TrendBadge: React.FC<{ trend: NonNullable<Stat['trend']> }> = ({ trend }) => (
  <span
    className={`inline-flex items-center gap-0.5 text-[10px] font-semibold tracking-wide px-1.5 py-0.5 rounded ${
      trend.positive
        ? 'bg-emerald-50 text-emerald-600'
        : 'bg-red-50 text-red-500'
    }`}
  >
    {trend.positive ? (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    ) : (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    )}
    {trend.value}%
  </span>
);

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => (
  <div className="flex flex-1 items-center gap-4 bg-white px-5 py-4 border border-gray-100 rounded-xl min-w-0">
    {/* Icon */}
    <div className="flex flex-shrink-0 justify-center items-center bg-[#12022A]/5 rounded-lg w-10 h-10 text-[#12022A]">
      {stat.icon}
    </div>

    {/* Content */}
    <div className="flex flex-col min-w-0">
      <span className="mb-0.5 font-medium text-[11px] text-gray-400 uppercase tracking-widest">
        {stat.label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="font-semibold text-gray-800 text-2xl leading-none">
          {stat.prefix}{stat.value}{stat.suffix}
        </span>
        {stat.trend && <TrendBadge trend={stat.trend} />}
      </div>
    </div>
  </div>
);

interface StatStripProps {
  stats?: Stat[];
  className?: string;
}

const StatStrip: React.FC<StatStripProps> = ({
  stats = STATS,
  className = '',
}) => {
  return (
    <div  className="bg-[#12022A] px-6 sm:px-10 lg:px-16 py-20">
        <section ></section>
      <div className="flex sm:flex-row flex-col gap-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default StatStrip;
export type { Stat };
