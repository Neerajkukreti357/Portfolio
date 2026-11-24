
'use client'
import { useEffect, useRef, useState } from 'react';
import {
  Atom,
  Braces,
  Code,
  Hexagon,
  Palette,
  Triangle,
  Wind,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';
import { MySkills } from '@/app/constants/appConstants';

const iconMap: Record<string, LucideIcon> = {
  Code,
  Palette,
  Braces,
  Atom,
  Triangle,
  Zap,
  Wind,
  Hexagon,
};

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function SkillBadge({ name, icon: Icon, delay }: { name: string; icon: LucideIcon; delay: number }) {
  return (
    <div
      className="group relative flex flex-col items-center gap-2.5 rounded-xl border border-white/10 bg-ink-3/60 px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/40 hover:bg-ink-3/80"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="absolute -inset-px rounded-xl bg-gradient-to-br from-violet/0 via-violet/0 to-cyan/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100 group-hover:from-violet/20 group-hover:to-cyan/20" />
      <span className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-violet/25 to-cyan/25 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="h-5 w-5" />
      </span>
      <span className="relative font-mono text-[11px] font-medium uppercase tracking-wider text-white/70">
        {name}
      </span>
    </div>
  );
}

function ProficiencyRow({ skill, start, index }: { skill: { name: string; icon: string; level: number }; start: boolean; index: number }) {
  const Icon = iconMap[skill.icon] ?? Code;
  return (
    <div className="group rounded-xl border border-white/8 bg-white/[0.02] p-3.5 transition-colors duration-300 hover:border-white/15">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet/20 to-cyan/20 text-white">
            <Icon className="h-4 w-4" />
          </span>
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-white/80">{skill.name}</span>
        </div>
        <span className="font-mono text-xs tabular-nums text-cyan-300">{skill.level}%</span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet to-cyan transition-[width] duration-[1400ms] ease-out"
          style={{
            width: start ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 90}ms`,
          }}
        />
      </div>
    </div>
  );
}


export function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { ref: barRef, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-10 sm:py-15">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end`}>
          <div>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-cyan-300">Toolkit</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Technologies I <span className="text-gradient">love</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/55">
            The stack I reach for to build fast, animated and accessible interfaces.
          </p>
        </div>

        <div className={`reveal ${visible ? 'is-visible' : ''} mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8`}>
          {MySkills.map((s, i) => (
            <SkillBadge key={s.name} name={s.name} icon={iconMap[s.icon] ?? Code} delay={i * 50} />
          ))}
        </div>

        <div ref={barRef} className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Fluency <span className="text-gradient">breakdown</span>
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
              A quick look at where I sit on each tool — measured by years of shipping production work,
              not tutorials.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Front-End', 'Animation', 'Tooling'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/60">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {MySkills.map((s, i) => (
                <ProficiencyRow key={s.name} skill={s} start={inView} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
