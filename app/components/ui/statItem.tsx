'use client'


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
    <div className="border-gradient rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:glow-violet">
      <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/55">
        {label}
      </div>
    </div>
  );
}