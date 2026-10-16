"use client";

import Image from "next/image";
import { useState } from "react";
import { FULL_NAME, NAV, PHONE } from "@/lib/data";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center">
          <nav className="hidden w-fit gap-1 rounded-full border border-white/10 bg-black/60 shadow-lg p-1.5 backdrop-blur-xl xl:flex">
            {NAV.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                {l}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setMenu(!menu)}
            className="w-fit rounded-full border border-white/10 bg-black/60 px-4 py-3 sm:px-5 text-sm font-semibold text-white backdrop-blur-xl xl:hidden"
          >
            {menu ? "Close" : "Menu"}
          </button>
          <a
            href="#home"
            className="relative block h-11 w-11 overflow-hidden rounded-full border border-white/15 sm:h-12 sm:w-12 bg-black/60 text-lg font-black tracking-tighter text-white backdrop-blur-xl"
          >
            <Image src="/eshfaq.jpg" alt={FULL_NAME} fill sizes="48px" className="object-cover object-top" />
          </a>
          <a
            href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-2 whitespace-nowrap justify-self-end rounded-full bg-white py-1.5 pl-4 pr-1.5 sm:gap-3 sm:pl-6 text-sm font-semibold text-black shadow-lg"
          >
            Let&apos;s Talk
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-xl text-black transition-transform duration-300 group-hover:rotate-90">
              +
            </span>
          </a>
        </div>
      </header>
      {menu && (
        <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-black/95 backdrop-blur xl:hidden">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setMenu(false)} className="text-3xl font-black uppercase text-white">
              {l}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
