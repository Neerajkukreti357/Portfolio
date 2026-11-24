import { Button, DevWorkspace } from "../ui";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-background pb-24 pt-36 text-foreground"
    >
      <div className="flex gap-14 justify-center w-full px-5 xl:px-38 ">
        {/* Content */}
        <div className="relative z-10 mx-auto w-[min(1200px,100%-2.5rem)]">
          <h1 className="max-w-[12ch] text-[clamp(1.2rem,9.5vw,6.6rem)] font-bold leading-[.95] tracking-[-.045em]">
            <span className="block overflow-hidden">
              <span className="hero-rise block">I build</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-rise block bg-linear-to-r from-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent">
                interactive
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-rise block">web experiences.</span>
            </span>
          </h1>

          <p className="hero-fade mb-10 mt-8 max-w-[46ch] text-xl text-[#9A9AB0]">
            Front-end developer crafting fast, expressive interfaces where
            motion, design and code move together.
          </p>

          <div className="hero-fade flex flex-wrap gap-4">
            <Button
              asChild
              variant="default"
              size="lg"
              className="rounded-full px-7 py-3.5"
            >
              <a className="text-white!" href="#projects">
                View Projects
              </a>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full px-7 py-3.5"
            >
              <a href="/cv.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>

        <DevWorkspace className="hidden md:block" />
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute md:bottom-16 bottom-8 left-1/2 h-11 w-6.5 -translate-x-1/2 rounded-[14px] border-[1.5px] border-hero-scroll-border"
      >
        <span className="scroll-dot absolute left-1/2 top-2 h-2 w-1 rounded bg-[#22D3EE]" />
      </a>
    </section>
  );
}
