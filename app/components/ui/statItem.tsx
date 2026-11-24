
"use client";

import { useCountUp } from "@/app/hooks/useCountUp";

export function StatItem({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, 1800, start);

  return (
    <div className="glass border-gradient flex aspect-square w-full max-w-30 min-w-0 flex-col items-center justify-center rounded-2xl p-2 text-center transition-all duration-300 hover:-translate-y-1 hover:glow-violet sm:p-3 md:p-3 lg:max-w-35 lg:p-4">
      <div className="font-display text-2xl font-bold text-gradient sm:text-3xl md:text-2xl lg:text-4xl">
        {count}
        {suffix}
      </div>

      <div className="mt-2 text-[9px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[10px] md:text-[10px] lg:text-xs">
        {label}
      </div>
    </div>
  );
}
