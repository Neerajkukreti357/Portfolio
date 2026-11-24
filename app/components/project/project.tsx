'use client'

import { MoveUpRight } from 'lucide-react';
import { projects, type Project } from '@/app/constants/appConstants';
import { useReveal } from '@/app/hooks/useReveal';
import { SiGithub } from 'react-icons/si';

function ProjectArt({ project }: { project: Project }) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}>
      <div className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
      {project.pattern === 'radial' && (
        <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),transparent_55%)]" />
      )}
      {project.pattern === 'rings' && (
        <div className="absolute inset-0 [background:repeating-radial-gradient(circle_at_70%_70%,transparent_0,transparent_22px,rgba(255,255,255,0.18)_23px,transparent_24px)]" />
      )}
      {project.pattern === 'waves' && (
        <div className="absolute inset-0 [background:repeating-linear-gradient(45deg,transparent_0,transparent_18px,rgba(255,255,255,0.15)_19px,transparent_20px)]" />
      )}
      {project.pattern === 'grid' && (
        <div className="absolute inset-0 [background:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_75%)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group relative min-w-0 overflow-hidden rounded-md border border-white/10 bg-ink-3/70 backdrop-blur-sm transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-[0_22px_58px_-38px_rgba(34,211,238,0.48)]`}
      style={{ transitionDelay: `${(index % 2) * 90}ms` }}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-3">
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          <ProjectArt project={project} />
        </div>
        <span className="absolute left-3 top-3 rounded-[3px] border border-white/25 bg-ink/65 px-2 py-1.5 font-mono text-[10px] text-white backdrop-blur-md">
          0{index + 1} / 04
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-wide text-white/50">
          <span className="text-cyan-300">{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="mt-2.5 font-display text-2xl font-medium text-white transition-colors duration-300 group-hover:text-gradient">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/55">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-1.5 rounded px-1 py-1 text-xs font-medium text-white transition-colors hover:text-cyan-300"
          >
            Live Demo <MoveUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-1.5 rounded px-1 py-1 text-xs font-medium text-white transition-colors hover:text-cyan-300"
          >
            GitHub <SiGithub className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="relative py-10 sm:py-15">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end`}
        >
          <div>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-cyan-300">
              Selected Work
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Projects that <span className="text-gradient">push pixels</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/55">
            A selection of recent work spanning dashboards, commerce, media and developer tooling.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <p className="mt-6 font-mono text-[11px] leading-relaxed text-white/40">
          {`These are concept previews. Replace them with live builds and repositories when you're ready.`}
        </p>
      </div>
    </section>
  );
}