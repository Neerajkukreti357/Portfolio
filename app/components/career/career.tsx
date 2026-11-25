
"use client";

import { experiences } from "@/app/constants/appConstants";
import { useReveal } from "@/app/hooks/useReveal";
import { TimelineItem } from "../ui";

export function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`reveal ${
            visible ? "is-visible" : ""
          } mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end`}
        >
          <div>
            <span className="font-mono text-xl md:text-2xl font-medium uppercase tracking-[0.3em] text-accent-cyan">
              Career
            </span>

            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              {`Where I've`} <span className="text-gradient">worked</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm text-muted-foreground">
            Seven years of shipping production front-ends across agencies,
            SaaS and client work.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative">
          <div className="absolute bottom-2 left-4.5 top-2 w-px bg-linear-to-b from-accent-violet via-accent-cyan to-transparent sm:left-5.5" />

          {experiences.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
