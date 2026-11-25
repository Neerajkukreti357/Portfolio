
"use client";

import { Experience } from "@/app/constants/appConstants";
import { useReveal } from "@/app/hooks/useReveal";
import { Briefcase, ChevronRight, MapPin } from "lucide-react";

export function TimelineItem({
  item,
  index,
}: {
  item: Experience;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal relative pl-12 sm:pl-16 ${
        visible ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline Node */}
      <div className="group absolute left-0 top-1.5 flex h-9 w-9 items-center justify-center rounded-xl border border-timeline-node-border bg-timeline-node backdrop-blur-sm">
        <Briefcase className="h-4 w-4 text-timeline-icon" />

        <span className="absolute inset-0 rounded-xl bg-timeline-icon/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Experience Card */}
      <div className="group mb-8 rounded-xl border border-timeline-border bg-timeline-card p-5 backdrop-blur-sm transition-all duration-300 hover:border-timeline-border-hover hover:bg-timeline-card-hover sm:p-6">
        {/* Header */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-timeline-text sm:text-xl">
              {item.role}
            </h3>

            <p className="mt-0.5 text-sm font-medium text-gradient">
              {item.company}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-1 sm:items-end">
            <span className="font-mono text-[11px] uppercase tracking-wider text-timeline-muted">
              {item.period}
            </span>

            <span className="flex items-center gap-1.5 font-mono text-[10px] text-timeline-muted">
              <MapPin className="h-3 w-3 text-timeline-icon" />
              {item.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-timeline-muted">
          {item.description}
        </p>

        {/* Highlights */}
        <ul className="mt-4 space-y-2">
          {item.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm leading-relaxed text-timeline-text"
            >
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-timeline-icon" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Technology Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-timeline-border bg-timeline-tag px-2.5 py-1 font-mono text-[10px] text-timeline-muted transition-colors duration-300 hover:border-timeline-border-hover hover:text-timeline-icon"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
