"use client";

import { useReveal } from "@/app/hooks/useReveal";
import { stats } from "@/app/constants/appConstants";
import { DevWorkspace, StatItem } from "../ui";

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""} grid gap-14 lg:grid-cols-12 lg:items-center`}
        >
          <div className="lg:col-span-5">
            <DevWorkspace />
          </div>

          <div className="lg:col-span-7">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gradient">
              About Me
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Designing & coding{" "}
              <span className="text-gradient">interfaces</span> that feel alive.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/65">
              <p>
                {`I'm a Frontend Developer with 2+ years of experience building
  responsive, user-friendly web and mobile applications. I specialize
  in React.js, Next.js, and React Native, with a focus on creating
  reusable UI components and smooth user experiences across platforms.`}
              </p>

              <p>
                {`My toolkit includes JavaScript, TypeScript, Redux Toolkit, Zustand,
  Firebase, and REST API integration. I've also worked with real-time
  communication using WebSockets and data management with tools like
  TanStack Query and Redux Saga. I enjoy solving complex problems,
  writing maintainable code, and turning ideas into practical,
  engaging digital experiences.`}
              </p>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <StatItem key={s.label} {...s} start={visible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
