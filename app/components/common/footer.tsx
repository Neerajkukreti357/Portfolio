
"use client";

import { links, socials } from "@/app/constants/appConstants";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-(--footer-border) bg-(--footer-bg) text-(--footer-text)">

      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-[linear-gradient(var(--footer-grid)_1px,transparent_1px),linear-gradient(90deg,var(--footer-grid)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_50%_0%,#000_10%,transparent_70%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 -z-10 h-125 w-125 animate-pulse rounded-full bg-[radial-gradient(circle,var(--glow-violet),transparent_65%)] [animation-duration:6s]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-105 w-105 animate-pulse rounded-full bg-[radial-gradient(circle,var(--glow-cyan),transparent_65%)] [animation-duration:8s]"
      />

      <div className="mx-auto w-[min(1200px,100%-2.5rem)] pt-20">

        {/* Main row */}
        <div className="mt-16 grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tight">
              aria
              <span className="bg-linear-to-r from-(--gradient-start) to-(--gradient-end) bg-clip-text text-transparent">
                .dev
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-(--footer-muted)">
              Front-end developer crafting fast, expressive interfaces where motion, design and code move together.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-(--footer-border) bg-(--footer-surface) px-3 py-1.5 text-xs text-(--footer-muted)">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--status-color) opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-(--status-color)" />
              </span>
              Available for new projects
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="mb-5 font-semibold text-(--footer-heading)">
              Quick links
            </h3>

            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group/link relative inline-flex items-center text-(--footer-muted) transition-colors duration-300 hover:text-(--footer-heading)"
                  >
                    <span className="mr-0 inline-block h-px w-0 bg-linear-to-r from-(--gradient-start) to-(--gradient-end) transition-all duration-300 group-hover/link:mr-2 group-hover/link:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <h3 className="mb-5 font-semibold text-(--footer-heading)">
              Follow along
            </h3>

            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-(--footer-border) bg-(--footer-surface) text-(--footer-text) backdrop-blur transition duration-300 hover:-translate-y-1 hover:-rotate-6 hover:border-(--accent-violet) hover:shadow-[0_0_24px_var(--glow-violet)]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            <a
              href="mailto:hello@aria.dev"
              className="mt-6 block text-sm text-(--footer-muted) transition-colors hover:text-(--accent-cyan)"
            >
              hello@aria.dev
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-(--footer-border) py-6 text-sm text-(--footer-muted) sm:flex-row">

          <p>© 2026 Aria Vance. Designed and built with care.</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 rounded-full border border-(--footer-border) bg-(--footer-surface) px-4 py-2 transition duration-300 hover:border-(--accent-cyan) hover:text-(--footer-heading)"
          >
            Back to top

            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
