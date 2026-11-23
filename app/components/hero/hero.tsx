export function Hero() {

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-background pb-24 pt-36 text-foreground"
    >
      {/* Faded grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-35 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_50%_40%,#000_20%,transparent_70%)]"
      />

      {/* Orbs */}
      <div
        aria-hidden
        className="hero-parallax pointer-events-none absolute -right-28 top-[8%] -z-10 size-85 md:size-130"
      >
        <div className="hero-float size-full rounded-full bg-[radial-gradient(circle_at_30%_30%,#c4b5fd,#8B5CF6_40%,transparent_70%)] opacity-55" />
      </div>
      <div
        aria-hidden
        className="hero-parallax pointer-events-none absolute -left-24 bottom-[5%] -z-10 size-75 md:size-95"
      >
        <div className="hero-float2 size-full rounded-full bg-[radial-gradient(circle_at_60%_40%,#a5f3fc,#22D3EE_40%,transparent_70%)] opacity-40" />
      </div>

      {/* Glass shapes */}
      <div
        aria-hidden
        className="hero-parallax pointer-events-none absolute right-[18%] top-[22%] -z-10"
      >
        <div className="hero-spin size-27.5 rounded-[28px] border border-white/25 bg-linear-to-br from-[#8B5CF6]/25 to-[#22D3EE]/10 shadow-[inset_0_0_20px_rgba(255,255,255,.08),0_20px_60px_rgba(139,92,246,.3)] backdrop-blur-md max-md:opacity-60" />
      </div>
      <div
        aria-hidden
        className="hero-parallax pointer-events-none absolute bottom-[16%] left-[46%] -z-10"
      >
        <div className="hero-float size-17.5 rounded-full border border-white/25 bg-linear-to-br from-[#8B5CF6]/25 to-[#22D3EE]/10 shadow-[inset_0_0_20px_rgba(255,255,255,.08),0_20px_60px_rgba(139,92,246,.3)] backdrop-blur-md" />
      </div>
      <div
        aria-hidden
        className="hero-parallax pointer-events-none absolute bottom-[20%] right-[9%] -z-10"
      >
        <div className="hero-spin2 size-22.5 bg-linear-to-br from-[#8B5CF6]/60 to-[#22D3EE]/40 [clip-path:polygon(50%_0,100%_100%,0_100%)] max-md:opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-[min(1200px,100%-2.5rem)]">
        <h1 className="max-w-[12ch] text-[clamp(1.2rem,9.5vw,6.6rem)] font-bold leading-[.95] tracking-[-.045em]">
          <span className="block overflow-hidden">
            <span className="hero-rise block">I build</span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="hero-rise block bg-linear-to-r from-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent"
            >
              interactive
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-rise block" >
              web experiences.
            </span>
          </span>
        </h1>

        <p
          className="hero-fade mb-10 mt-8 max-w-[46ch] text-xl text-[#9A9AB0]"
        >
          Front-end developer crafting fast, expressive interfaces where motion,
          design and code move together.
        </p>

        <div className="hero-fade flex flex-wrap gap-4">
          <a
            href="#projects"
            className="hero-glow inline-flex items-center rounded-full bg-linear-to-r from-[#8B5CF6] to-[#22D3EE] px-7 py-3.5 font-bold text-[#08080c] shadow-[0_0_24px_rgba(139,92,246,.55),0_0_48px_rgba(34,211,238,.25)] transition duration-300 hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-7 py-3.5 font-medium backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/30"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 h-11 w-6.5 -translate-x-1/2 rounded-[14px] border-[1.5px] border-white/35"
      >
        <span className="hero-dot absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 rounded bg-[#22D3EE]" />
      </a>
    </section>
  );
}