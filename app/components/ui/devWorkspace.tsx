import { codeLines } from "@/app/constants/appConstants";
import { cn } from "@/app/lib/utils";
import { Code2, Cpu, Layers, Sparkles, Terminal, Zap } from "lucide-react";

type DevWorkspaceProp ={
    className?:string
}

export function DevWorkspace({className}:DevWorkspaceProp) {
  return (
    <div className={cn(`relative mx-auto w-full max-w-md`,className)}>
      {/* glow halo */}
      <div className="absolute md:-inset-8 -inset-4 rounded-[2.5rem] bg-linear-to-br from-violet/30 via-fuchsia-500/10 to-cyan/30 blur-3xl animate-pulse-glow" />


      {/* main editor card */}
      <div className="relative z-10 overflow-hidden rounded-[1.75rem] border-gradient glass-strong">
        {/* window title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <div className="ml-3 flex items-center gap-1.5 text-xs text-white/45">
            <Terminal className="h-3.5 w-3.5" />
            <span>Neeraj — profile.ts</span>
          </div>
        </div>

        {/* code body */}
        <div className="relative p-5">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative space-y-1.5 font-mono text-[13px] leading-relaxed">
            {codeLines.map((line, i) => (
              <div key={i} className="flex gap-4">
                <span className="select-none text-white/20">{i + 1}</span>
                <span className={line.c}>{line.t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* footer chip */}
        <div className="flex items-center justify-between border-t border-white/10 bg-linear-to-r from-violet/10 to-cyan/10 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet to-cyan text-ink">
              <Code2 className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-white">
                Neeraj Kukreti
              </p>
              <p className="text-[10px] text-white/45">San Francisco, CA</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-[10px] font-medium text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Online
          </span>
        </div>
      </div>

      {/* decorative shapes */}
      <div className="absolute md:-right-10 md:-top-10 -top-5 -right-2 md:h-24 md:w-24 h-10 w-10 rounded-2xl border border-violet/30 bg-violet/10 backdrop-blur-sm rotate-12 animate-float-med" />
      <div className="absolute md:-bottom-10 md:-left-10 -bottom-4 -left-3 md:h-16 md:w-16 h-8 w-8 rounded-full border border-cyan/30 bg-cyan/10 animate-float-slow [animation-delay:1.5s]" />
      <div className="absolute right-1/4 -bottom-6 h-10 w-10 rounded-lg border border-fuchsia-400/30 bg-fuchsia-500/10 rotate-45 animate-float-fast [animation-delay:0.5s]" />

      {/* sparkles */}
      <Sparkles className="absolute -top-3 left-12 h-5 w-5 text-cyan-300/60 animate-pulse" />
      <Sparkles className="absolute bottom-16 -right-3 h-4 w-4 text-violet-300/60 animate-pulse [animation-delay:1s]" />
    </div>
  );
}