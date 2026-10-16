"use client";

import { useEffect, useRef, useState } from "react";

const VISION = [
  "I design web and mobile products that solve real problems,",
  "improve user experience, and help businesses grow",
  "with interfaces that are clean,",
  "accessible, and scalable.",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = textRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // fill starts when text is at 85% of viewport, done when it reaches 35%
      setFill(Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.5 + r.height))));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="about" ref={ref} className="bg-[var(--light)] px-4 pb-16 pt-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-4 border-b border-neutral-300 pb-8 text-center md:flex-row md:flex-wrap md:gap-6 md:text-left">
          <h2 className="text-6xl font-medium tracking-tight md:text-7xl">About</h2>
          <div className="hidden h-14 w-px bg-neutral-300 md:block" />
          <p className="text-sm leading-snug text-neutral-600">
            Consistency turns good work
            <br />
            into great work.
          </p>
          <a
            href="https://www.linkedin.com/in/muhammad-ishfaq-/"
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-auto hidden md:flex items-center gap-4 rounded-full bg-[var(--accent)] py-2 pl-5 pr-2 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_var(--accent)]"
          >
            Hire Me
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="mt-14">
          <div ref={textRef} className="text-center text-3xl font-medium leading-tight tracking-tight md:text-right md:text-[2.1rem] lg:text-[2.4rem]">
            {VISION.map((line, i) => {
              const p = Math.min(1, Math.max(0, fill * VISION.length - i)) * 100;
              return (
                <div key={i} className="relative">
                  <span className="text-neutral-300">{line}</span>
                  <span
                    aria-hidden
                    className="absolute inset-0 text-neutral-900"
                    style={{ clipPath: `inset(0 ${100 - p}% 0 0)` }}
                  >
                    {line}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

          <a
            href="https://www.linkedin.com/in/muhammad-ishfaq-/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 flex w-full items-center justify-center gap-4 md:hidden rounded-full bg-[var(--accent)] py-2 pl-5 pr-2 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_var(--accent)]"
          >
            Hire Me
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">→</span>
          </a>

      </div>
    </section>
  );
}
