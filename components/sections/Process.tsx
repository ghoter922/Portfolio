"use client";

import { useEffect, useRef, useState } from "react";
import { STEPS } from "@/lib/data";

const STEP_VISUALS = [
  // discover: persona card + sticky notes under a magnifier
  <>
    <rect x="8" y="10" width="44" height="56" rx="6" fill="#fff" />
    <circle cx="30" cy="28" r="8" fill="#111" />
    <rect x="16" y="42" width="28" height="4" rx="2" fill="#111" />
    <rect x="16" y="50" width="20" height="4" rx="2" fill="#111" opacity=".35" />
    <rect x="60" y="10" width="20" height="20" rx="3" fill="#fff" transform="rotate(-6 70 20)" />
    <rect x="84" y="14" width="20" height="20" rx="3" fill="#111" opacity=".85" transform="rotate(5 94 24)" />
    <circle cx="80" cy="54" r="11" fill="none" stroke="#111" strokeWidth="4" />
    <path d="m88 62 10 10" stroke="#111" strokeWidth="5" strokeLinecap="round" />
  </>,
  // define: user-flow diagram
  <>
    <rect x="6" y="30" width="24" height="20" rx="5" fill="#111" />
    <rect x="46" y="8" width="24" height="20" rx="5" fill="#fff" />
    <rect x="46" y="52" width="24" height="20" rx="5" fill="#fff" />
    <rect x="84" y="30" width="22" height="20" rx="10" fill="#111" />
    <path d="M30 40h8v-22h8M38 40v22h8M70 18h6v22h8M70 62h6V40" fill="none" stroke="#111" strokeWidth="2.5" strokeLinejoin="round" />
  </>,
  // design: phone screen with UI + colour swatches
  <>
    <rect x="10" y="4" width="44" height="72" rx="8" fill="#111" />
    <rect x="15" y="10" width="34" height="22" rx="4" fill="#fff" />
    <rect x="15" y="37" width="24" height="4" rx="2" fill="#fff" />
    <rect x="15" y="45" width="34" height="3" rx="1.5" fill="#fff" opacity=".5" />
    <rect x="15" y="60" width="34" height="9" rx="4.5" fill="#fff" />
    <circle cx="74" cy="20" r="9" fill="#fff" />
    <circle cx="94" cy="20" r="9" fill="#111" />
    <text x="66" y="62" fontSize="26" fontWeight="800" fill="#111">Aa</text>
  </>,
  // prototype: two screens linked by an interaction
  <>
    <rect x="6" y="10" width="36" height="60" rx="7" fill="#fff" />
    <rect x="12" y="50" width="24" height="10" rx="5" fill="#111" />
    <rect x="70" y="10" width="36" height="60" rx="7" fill="#111" />
    <rect x="76" y="18" width="24" height="14" rx="3" fill="#fff" />
    <path d="M36 55c14 0 18-30 32-30" fill="none" stroke="#111" strokeWidth="2.5" strokeDasharray="4 4" />
    <path d="m62 20 7 5-7 5" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 56l4 12 2-5 5-2z" fill="#fff" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
  </>,
  // test: feedback checklist + score
  <>
    <rect x="6" y="6" width="58" height="68" rx="7" fill="#fff" />
    {[18, 36, 54].map((y, k) => (
      <g key={y}>
        <rect x="13" y={y - 5} width="10" height="10" rx="3" fill="#111" />
        {k < 2 && <path d={`m15.5 ${y}l2 2 4-4`} stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />}
        <rect x="28" y={y - 2} width={k === 1 ? 22 : 30} height="4" rx="2" fill="#111" opacity={k < 2 ? 1 : 0.3} />
      </g>
    ))}
    <circle cx="88" cy="40" r="17" fill="#111" />
    <text x="88" y="46" fontSize="16" fontWeight="800" fill="#fff" textAnchor="middle">9.2</text>
  </>,
];
export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const [prog, setProg] = useState(0);
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const syncLayout = () => {
      setWide(media.matches);
      if (!media.matches) setProg(0);
    };
    syncLayout();
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!media.matches) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setProg(Math.min(1, Math.max(0, -r.top / (r.height - vh))));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    media.addEventListener("change", syncLayout);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      media.removeEventListener("change", syncLayout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const n = STEPS.length;
  // Reveal cards in sequence as they rise into their grid positions.
  const arrival = (i: number) => Math.min(1, Math.max(0, (prog - i / n) * n));
  const current = Math.min(n - 1, Math.floor(prog * n));
  return (
    <section id="approach" ref={ref} className="relative bg-[var(--dark)] py-14 text-white xl:py-0" style={{ height: wide ? `${n * 100}vh` : "auto" }}>
      <div className="relative flex flex-col justify-center overflow-visible px-4 py-4 sm:px-6 md:px-8 xl:sticky xl:top-0 xl:h-screen xl:overflow-hidden xl:py-14">
        <div className="mx-auto mb-12 w-full max-w-7xl border-t border-white/30 pt-4 sm:mb-10 xl:mb-10">
          <div className="flex items-start justify-between gap-6">
            <span className="pill text-white">My Process</span>
            <h2 className="max-w-md text-right text-2xl font-medium leading-tight sm:text-3xl md:text-4xl">
              Thoughtful steps.<br /><span className="text-[var(--accent)]">Purposeful design.</span>
            </h2>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-7xl place-content-center grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {STEPS.map((s, i) => {
            const t = arrival(i);
            return (
              <article
                key={s.key}
                className={`relative flex min-h-[205px] flex-col rounded-2xl border border-white/10 bg-white p-5 text-black shadow-[0_24px_60px_-30px_rgba(0,0,0,0.65)] will-change-transform sm:min-h-[225px] sm:p-6 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${i === 4 ? "lg:col-start-4" : ""}`}
                style={{
                  opacity: wide ? t : 1,
                  transform: wide ? `perspective(900px) translate3d(0, ${(1 - t) * 105}vh, 0) rotateX(${180 * (1 - t)}deg)` : "none",
                  transition: "opacity 120ms linear",
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-bold tracking-widest">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    STEP:0{i + 1}
                  </span>
                  <span className="flex h-12 w-16 items-center justify-center rounded-xl bg-[var(--accent)] p-1.5 sm:h-14 sm:w-20">
                    <svg viewBox="0 0 112 80" className="h-full w-full" aria-hidden>
                      {STEP_VISUALS[i]}
                    </svg>
                  </span>
                </div>
                <div className="mt-auto">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">{s.key}</p>
                  <h3 className="text-lg font-bold leading-snug sm:text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.acts.map((a) => (
                    <span key={a} className="rounded-full bg-neutral-100 px-3 py-1 text-xs">
                      {a}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 gap-2 sm:bottom-7 xl:flex">
          {STEPS.map((s, i) => (
            <span
              key={s.key}
              className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-10 bg-[var(--accent)]" : "w-4 bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
