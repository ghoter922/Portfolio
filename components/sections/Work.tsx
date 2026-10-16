"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/data";

export default function Work() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = track.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(0.9999, Math.max(0, -r.top / (r.height - window.innerHeight)));
      setActive(Math.floor(p * PROJECTS.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + ((i + 0.5) / PROJECTS.length) * (el.offsetHeight - window.innerHeight), behavior: "smooth" });
  };

  return (
    <section id="work" className="bg-[var(--dark2)] px-4 text-white md:px-8 md:pt-24">
      <div className="mx-auto hidden max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex md:flex-row md:flex-wrap md:items-end md:text-left">
        <div>
          <span className="pill">Selected work</span>
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            A Few Things I’ve
            <br />
            <span className="text-[var(--accent)]">Designed.</span>
          </h2>
        </div>
        <p className="max-w-xs text-white/60">
          A few projects that show how I approach design: simple, accessible, and purposeful.
        </p>
      </div>

      <div ref={track} style={{ height: `${PROJECTS.length * 100}vh` }}>
        <div className="sticky top-0 flex h-[100svh] flex-col justify-center pt-16 md:h-screen md:flex-row md:items-center md:pt-0">
          <div className="mb-5 text-center md:hidden">
            <div className="[@media(max-height:620px)]:hidden"><span className="pill">Selected work</span></div>
            <h2 className="mt-3 text-xl font-bold min-[360px]:text-2xl [@media(max-height:620px)]:mt-0">
              A Few Things I’ve <span className="text-[var(--accent)]">Designed.</span>
            </h2>
          </div>
          <div className="mx-auto grid w-full max-w-7xl items-center gap-4 md:gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
            {/* Images */}
            <div className="relative aspect-video overflow-hidden rounded-2xl md:aspect-[4/3] [@media(max-height:620px)]:aspect-[2/1]">
              {PROJECTS.map((x, i) => (
                <div
                  key={x.name}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}
                >
                  <Image src={x.img} alt={x.name} fill sizes="(min-width: 768px) 640px, 100vw" priority={i === 0} className="object-cover" />
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <div className="flex items-start justify-center md:justify-start">
                <div className="h-[0.9em] overflow-hidden text-5xl font-light md:text-7xl leading-[0.9] text-white/30 md:text-8xl">
                  <div className="transition-transform duration-700" style={{ transform: `translateY(-${active * 0.9}em)` }}>
                    {PROJECTS.map((_, i) => (
                      <div key={i} className="h-[0.9em]">{String(i + 1).padStart(2, "0")}</div>
                    ))}
                  </div>
                </div>
                <span className="ml-1 text-sm text-white/50">/{String(PROJECTS.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-3 grid md:mt-6">
                {PROJECTS.map((x, i) => (
                  <div
                    key={x.name}
                    aria-hidden={i !== active}
                    className={`[grid-area:1/1] transition-all duration-500 ${i === active ? "translate-y-0 opacity-100 delay-150" : "pointer-events-none translate-y-4 opacity-0"}`}
                  >
                    <h3 className="text-xl font-bold leading-snug md:text-3xl">{x.name}</h3>
                    <p className="mt-3 text-sm text-white/50">{x.tags}</p>
                    <p className="mx-auto mt-3 line-clamp-2 [@media(max-height:620px)]:hidden max-w-sm md:mx-0 sm:line-clamp-3 text-sm text-white/70 md:mt-6 md:line-clamp-none md:text-base">{x.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-end justify-center gap-5 md:mt-8 md:justify-start">
                <a href={PROJECTS[active].link} target="_blank" rel="noopener noreferrer" className="w-full rounded-full bg-[var(--accent)] text-center text-black px-5 py-3 md:w-auto text-xs font-bold uppercase md:px-7 md:py-4 md:text-sm tracking-widest hover:brightness-110">
                  View case study ↗
                </a>
                <span className="hand hidden text-lg leading-tight text-white/50 sm:inline">Tap to view<br />full case study</span>
              </div>
              <div className="mt-5 flex justify-center gap-1.5 md:mt-10 md:justify-start">
                {PROJECTS.map((x, i) => (
                  <button
                    key={x.name}
                    aria-label={x.name}
                    onClick={() => go(i)}
                    className={`h-1 rounded-full transition-all ${i === active ? "w-10 bg-[var(--accent)]" : "w-4 bg-white/20 hover:bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
