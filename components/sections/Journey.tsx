import { JOURNEY, RESUME, TOOLS } from "@/lib/data";

export default function Journey() {
  return (
      <section id="resume" className="bg-[var(--dark)] px-5 py-28 text-white md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="reveal text-6xl font-black uppercase md:text-8xl">My Journey.</h2>
          <div className="mt-16 border-l border-white/20">
            {JOURNEY.map(([y, r, o, d]) => (
              <div key={o} className="reveal relative pb-14 pl-10">
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-[var(--accent)]" />
                <p className="text-sm tracking-widest text-white/40">{y}</p>
                <h3 className="mt-2 text-2xl font-bold">{r}</h3>
                <p className="text-white/70">{o}</p>
                <p className="mt-2 max-w-lg text-white/50">{d}</p>
              </div>
            ))}
          </div>
          <div className="reveal mb-14">
            <p className="text-xs font-bold tracking-widest text-white/40">TOOLS</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {TOOLS.map((t) => (
                <span key={t} className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a href={RESUME} download className="inline-block rounded-full border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black">
            Download resume ↓
          </a>
        </div>
      </section>
  );
}
