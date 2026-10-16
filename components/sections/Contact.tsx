import { EMAIL, PHONE } from "@/lib/data";

export default function Contact() {
  return (
      <section id="contact" className="bg-[#f3f3f3] px-5 py-32 text-center">
        <p className="reveal text-sm font-bold tracking-[0.3em] text-neutral-500">LET’S CREATE SOMETHING MEANINGFUL.</p>
        <h2 className="reveal mt-6 text-7xl font-black uppercase md:text-[10rem] md:leading-none">
          Let&apos;s <span className="text-[var(--accent)]">Talk</span>
        </h2>
        <p className="reveal mx-auto mt-8 max-w-md text-neutral-600">
          Have a project, idea, or a problem to solve? Let&apos;s turn it into a great experience together.
        </p>
        <a href={`https://wa.me/${PHONE.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Eshfaq, I came across your portfolio and would like to talk about a project.")}`} target="_blank" rel="noopener noreferrer" className="reveal mt-10 inline-block rounded-full bg-[var(--accent)] px-10 py-5 text-sm font-bold uppercase tracking-widest text-black hover:brightness-110">
          Start a conversation ↗
        </a>
        <div className="reveal mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold">
          <a href={`mailto:${EMAIL}`} className="hover:text-[var(--accent)]">{EMAIL}</a>
          <a href={`tel:${PHONE.replace(/ /g, "")}`} className="hover:text-[var(--accent)]">{PHONE}</a>
          <a href="https://www.behance.net/Eshfaqahmad" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">Behance ↗</a>
          <a href="https://www.linkedin.com/in/muhammad-ishfaq-/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">LinkedIn ↗</a>
        </div>
      </section>
  );
}
