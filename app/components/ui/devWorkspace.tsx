
import { codeLines } from "@/app/constants/appConstants";
import { cn } from "@/app/lib/utils";
import { Code2, Sparkles, Terminal } from "lucide-react";

type DevWorkspaceProp = {
  className?: string;
};

export function DevWorkspace({ className }: DevWorkspaceProp) {
  return (
    <div className={cn("relative mx-auto w-full max-w-md", className)}>
      {/* Glow halo */}
      <div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-br from-(--glow-violet) via-transparent to-(--glow-cyan) blur-3xl animate-pulse-glow md:-inset-8" />

      {/* Main editor card */}
      <div className="glass-strong border-gradient relative z-10 overflow-hidden rounded-[1.75rem]">
        {/* Window title bar */}
        <div className="flex items-center gap-2 border-b border-(--glass-border) bg-(--footer-surface) px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />

          <div className="ml-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Terminal className="h-3.5 w-3.5" />
            <span>Neeraj — profile.ts</span>
          </div>
        </div>

        {/* Code body */}
        <div className="relative p-5">
          <div className="grid-bg absolute inset-0 opacity-20" />

          <div className="relative space-y-1.5 font-mono text-[13px] leading-relaxed">
            {codeLines.map((line, i) => (
              <div key={i} className="flex gap-4">
                <span className="select-none text-muted-foreground">
                  {i + 1}
                </span>
                <span className={line.c}>{line.t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer chip */}
        <div className="flex items-center justify-between border-t border-(--glass-border) bg-linear-to-r from-(--glow-violet) to-(--glow-cyan) px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-(--gradient-start) to-(--gradient-end) text-white">
              <Code2 className="h-4 w-4" strokeWidth={2.5} />
            </span>

            <div>
              <p className="font-display text-sm font-bold text-foreground">
                Neeraj Kukreti
              </p>
              <p className="text-[10px] text-muted-foreground">
                Frontend Developer
              </p>
            </div>
          </div>

          {/* Online status */}
          <span className="flex items-center gap-1.5 rounded-full bg-(--glow-cyan) px-3 py-1 text-[10px] font-medium text-(--status-color)">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--status-color) opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-(--status-color)" />
            </span>
            Online
          </span>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute -right-2 -top-5 h-10 w-10 rotate-12 rounded-2xl border border-(--glow-violet) bg-(--glow-violet) backdrop-blur-sm animate-float-med md:-right-10 md:-top-10 md:h-24 md:w-24" />

      <div className="absolute -bottom-4 -left-3 h-8 w-8 rounded-full border border-(--glow-cyan) bg-(--glow-cyan) animate-float-slow [animation-delay:1.5s] md:-bottom-10 md:-left-10 md:h-16 md:w-16" />

      <div className="absolute -bottom-6 right-1/4 h-10 w-10 rotate-45 rounded-lg border border-(--glow-violet) bg-(--glow-violet) animate-float-fast [animation-delay:0.5s]" />

      {/* Sparkles */}
      <Sparkles className="absolute -top-3 left-12 h-5 w-5 animate-pulse text-(--accent-cyan)" />

      <Sparkles className="absolute -right-3 bottom-16 h-4 w-4 animate-pulse text-(--accent-violet) [animation-delay:1s]" />
    </div>
  );
}
