"use client";

import { FULL_NAME, NAME } from "@/lib/data";
import { jump } from "@/lib/jump";

export default function Footer() {
  return (
      <footer className="overflow-hidden bg-[var(--dark2)] px-4 pt-16 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-6">
          <nav className="grid grid-cols-3 gap-2 md:flex md:flex-wrap md:gap-6">
            {["Home#home", "About#about", "Projects#work", "Approach#approach", "Resume#resume", "Contact#contact"].map((x) => {
              const [l, h] = x.split("#");
              return (
                <a key={h} href={`#${h}`} onClick={jump} className="relative cursor-pointer rounded-full border border-white/10 bg-white/5 py-2.5 text-center text-[11px] font-bold md:rounded-none md:border-0 md:bg-transparent md:py-2 md:text-left md:text-xs uppercase tracking-wider text-white/70 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[var(--accent)] after:transition-all hover:text-[var(--accent)] hover:after:w-full">
                  {l}
                </a>
              );
            })}
          </nav>
          <a href="#home" onClick={jump} className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--accent)] py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors md:bg-transparent md:py-2 md:text-white md:hover:text-[var(--accent)]">↑ Back to top</a>
        </div>
        <div aria-label={FULL_NAME} className="relative mt-10 flex select-none justify-center whitespace-nowrap text-[24vw] font-semibold leading-[0.95] tracking-tighter">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.14),transparent_70%)]" />
          {NAME.split("").map((ch, i) => (
            <span key={i} aria-hidden className="reveal-img inline-block overflow-hidden pb-[0.08em]">
              <span
                className={`inline-block translate-y-[110%] transition-transform duration-1000 ease-[cubic-bezier(.2,.8,.2,1)] [.in>&]:translate-y-0 bg-clip-text text-transparent ${i === NAME.length - 1 ? "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--accent)_25%,transparent),var(--accent))] pr-[0.06em] font-serif font-normal italic" : "bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.4))]"}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {ch}
              </span>
            </span>
          ))}
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 py-6 pb-20 text-center text-xs text-white/50 md:flex-row md:flex-wrap md:justify-between md:gap-2 md:pb-6 md:text-left">
          <span>Designed &amp; built with curiosity.</span>
          <span>© 2026 {FULL_NAME} • All rights reserved.</span>
        </div>
      </footer>
  );
}
