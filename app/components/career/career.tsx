'use client'

import { Briefcase, MapPin, ChevronRight } from 'lucide-react';
import { experiences, type Experience } from '@/app/constants/appConstants'
import { useReveal } from '@/app/hooks/useReveal';

function TimelineItem({ item, index }: { item: Experience; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} relative pl-12 sm:pl-16`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* node */}
      <div className="absolute left-0 top-1.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-ink-3/80 backdrop-blur-sm">
        <Briefcase className="h-4 w-4 text-cyan-300" />
        <span className="absolute inset-0 rounded-xl bg-cyan/20 blur-md opacity-0 transition-opacity duration-500 [transition-delay:300ms] group-hover:opacity-100" />
      </div>

      {/* card */}
      <div className="group mb-8 rounded-xl border border-white/10 bg-ink-3/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan/40 hover:bg-ink-3/70 sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{item.role}</h3>
            <p className="mt-0.5 text-sm font-medium text-gradient">{item.company}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-1 sm:items-end">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/55">{item.period}</span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-white/40">
              <MapPin className="h-3 w-3" />
              {item.location}
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-white/55">{item.description}</p>

        <ul className="mt-4 space-y-2">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm leading-relaxed text-white/70">
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-white/60"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end`}
        >
          <div>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-cyan-300">Career</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              {`Where I've`} <span className="text-gradient">worked</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/55">
            Seven years of shipping production front-ends across agencies, SaaS and client work.
          </p>
        </div>

        {/* timeline track */}
        <div className="relative">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-violet/60 via-cyan/40 to-transparent sm:left-[22px]" />
          {experiences.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
