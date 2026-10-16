"use client";

import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--light)] px-4 py-28 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.3fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <span className="pill reveal bg-white">Testimonials</span>
          <h2 className="reveal mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Real Stories From
            <br />
            People I&apos;ve
            <br />
            <span className="text-[var(--accent)]">Designed With.</span>
          </h2>
          <p className="reveal mt-6 max-w-sm text-neutral-600">
            Kind words from founders, teams and clients I&apos;ve had the pleasure to work with.
          </p>
        </div>
        <div className="pb-[10vh]">
          {TESTIMONIALS.map(([name, role, quote, color], i) => (
            <div
              key={i}
              className="sticky top-24 mb-[12vh] grid gap-5 rounded-3xl border border-neutral-200 bg-white p-5 shadow-[0_-12px_40px_-20px_rgba(0,0,0,0.25)] last:mb-0 sm:grid-cols-[1.3fr_1fr]"
            >
              <div className="flex flex-col p-2">
                <span className="text-lg font-black tracking-tight text-neutral-400">{role.split(", ")[1]}</span>
                <span className="mt-6 text-[var(--accent)]">★★★★★</span>
                <p className="mt-3 text-lg italic leading-snug">“{quote}”</p>
                <div className="mt-auto pt-6">
                  <p className="text-xs text-neutral-500">{role}</p>
                  <p className="mt-1 text-sm font-semibold">{name}</p>
                </div>
              </div>
              <div className="reveal-img relative aspect-[4/5] overflow-hidden rounded-2xl">
                <div className={`flex h-full items-center justify-center bg-gradient-to-br ${color} text-6xl font-black text-white/80`}>
                  {name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div className="absolute inset-0 bg-[var(--accent)] transition-transform delay-150 duration-1000 ease-[cubic-bezier(.7,0,.2,1)] [.in>&]:translate-y-[101%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// mini illustrations shown in each step card (viewBox 0 0 112 80, black ink on the accent tile)
