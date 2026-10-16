"use client";

import Image from "next/image";
import { FULL_NAME, NAME } from "@/lib/data";
import ImageTrail from "@/components/ImageTrail";

export default function Hero({ loaded }: { loaded: boolean }) {
  return (
      <section id="home" className="relative flex flex-col pb-[32vw] pt-[16vh] xl:h-[112vh] xl:min-h-[760px] xl:pb-0 xl:pt-0 items-center overflow-hidden bg-[var(--dark)]">
        {/* swirling background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[160vmax] w-[160vmax] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite] bg-[repeating-conic-gradient(from_0deg,#0b0b0b_0deg_18deg,#1b1b1b_28deg_40deg,#0b0b0b_52deg_60deg)] opacity-90 blur-2xl" />
          <div className="absolute left-1/2 top-[55%] h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-20 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#070707_85%)]" />
        </div>
        <ImageTrail />

        {/* script name on a line */}
        <div className="absolute inset-x-0 top-[38%] hidden items-center xl:flex">
          <div className="h-px flex-1 bg-white/25" />
          <span className="hand px-6 text-4xl text-white md:text-6xl">Product</span>
          <div className="w-[min(520px,64vw)] shrink-0" />
          <span className="hand hidden px-6 text-4xl text-white md:inline md:text-6xl">Designer</span>
          <div className="h-px flex-1 bg-white/25" />
        </div>

        {/* stacked photo cards */}
        <div
          className={`relative z-10 h-[42vh] xl:mt-[17vh] max-h-[400px] w-[min(320px,60vw)] transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
        >
          <div className="absolute inset-0 translate-x-10 rotate-[8deg] overflow-hidden rounded-2xl border border-white/20">
            <Image src="/eshfaq.jpg" alt="" fill sizes="320px" className="scale-110 object-cover object-top opacity-70 blur-md" />
            <div className="absolute inset-0 bg-[var(--dark)]/30" />
          </div>
          <div className="absolute inset-0 -rotate-[6deg] overflow-hidden rounded-2xl shadow-2xl">
            <Image src="/eshfaq.jpg" alt={FULL_NAME} fill priority sizes="320px" className="object-cover object-top" />
          </div>
          <div className="absolute -left-12 -top-6 flex h-24 w-24 items-center justify-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-[spin_12s_linear_infinite]">
              <defs>
                <path id="badge" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-white text-[8.5px] font-bold uppercase tracking-[0.18em]">
                <textPath href="#badge" textLength="236" lengthAdjust="spacing">Product Designer • Open to work •</textPath>
              </text>
            </svg>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-lg text-black">↗</span>
          </div>
        </div>

        <div className="relative z-10 mt-8 flex w-full items-center xl:hidden">
          <div className="h-px flex-1 bg-white/25" />
          <span className="hand px-4 text-4xl text-white md:text-5xl">Product Designer</span>
          <div className="h-px flex-1 bg-white/25" />
        </div>

        {/* tagline */}
        <p
          className={`relative z-10 mt-4 px-6 text-center xl:mt-8 text-[10px] font-bold uppercase tracking-[0.25em] md:text-xs md:tracking-[0.35em] text-white/60 transition-all delay-300 duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          Designing for users, built for business.
        </p>

        {/* giant name — letters rise out of masks */}
        <h1
          aria-label={FULL_NAME}
          className="pointer-events-none relative z-20 mt-4 flex max-w-full select-none justify-center whitespace-nowrap text-[clamp(4rem,18vw,16rem)] font-semibold leading-[0.95] tracking-tighter text-white xl:mt-2"
        >
          {NAME.split("").map((ch, i) => {
            const last = i === NAME.length - 1;
            return (
              <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em]">
                <span
                  className={`inline-block transition-transform duration-1000 ease-[cubic-bezier(.2,.8,.2,1)] ${loaded ? "translate-y-0" : "translate-y-[110%]"} ${last ? "pr-[0.06em] font-serif font-normal italic text-[var(--accent)]" : ""}`}
                  style={{ transitionDelay: `${300 + i * 70}ms` }}
                >
                  {ch}
                </span>
              </span>
            );
          })}
        </h1>
      </section>
  );
}
