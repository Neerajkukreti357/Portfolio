"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { links } from "@/app/constants/appConstants";
import { Button } from "../ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong glow-soft" : "border border-transparent"
          }`}
        >
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Nee<span className="text-gradient">raj</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-linear-to-r from-violet-500 to-cyan-300 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="glow"
              size="sm"
              className="hidden sm:inline-flex gap-2 rounded-xl px-5 py-2.5 text-sm hover:scale-105 active:scale-95"
            >
              <a href="#contact">
                Hire Me
                <span className="size-1.5 animate-pulse rounded-full bg-cyan-400" />
              </a>
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-2xl glass-strong p-3 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5 text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="default" className="mt-1 w-full text-sm">
              <a href="#contact" onClick={() => setOpen(false)} className="text-white!">
                Hire Me
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
