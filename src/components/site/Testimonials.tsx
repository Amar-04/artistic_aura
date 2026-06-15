import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    q: "I flew from Mumbai just to get inked here. The attention to detail is unreal. My portrait tattoo looks like a photograph.",
    n: "Priya S.",
    c: "Mumbai",
  },
  {
    q: "Been to studios across India. Artistic Aura is in a different league entirely. Sterile, professional, and insanely talented.",
    n: "Rahul M.",
    c: "Delhi",
  },
  {
    q: "My mandala sleeve took 3 sessions. Every session was worth it. The team made me feel so comfortable.",
    n: "Ananya T.",
    c: "Pune",
  },
  {
    q: "I was terrified of tattoos but they made my first tattoo experience absolutely magical.",
    n: "Sneha K.",
    c: "Bangalore",
  },
  {
    q: "Got a hyper-realistic portrait of my mother. I cried when I saw the result. It's a masterpiece.",
    n: "Arjun D.",
    c: "Ahmedabad",
  },
  {
    q: "Best cover-up work in India. Turned my regret into art. Forever grateful.",
    n: "Meera L.",
    c: "Surat",
  },
];

export function Testimonials() {
  // duplicate for seamless loop
  const loop = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 overflow-hidden bg-[var(--charcoal)]/40"
    >
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">
          Testimonials
        </p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
          Words From Our Canvas
        </h2>
      </div>

      <div className="relative">
        {/* fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-[var(--ink)] to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-[var(--ink)] to-transparent pointer-events-none" />

        <div className="flex gap-6 animate-scroll-x w-max">
          {loop.map((t, i) => (
            <article
              key={i}
              className="glass rounded-2xl p-7 w-[320px] sm:w-[380px] flex-shrink-0 relative"
            >
              <Quote
                className="absolute top-4 right-4 text-gold/30"
                size={48}
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star
                    key={k}
                    size={16}
                    className="fill-[var(--gold)] text-[var(--gold)]"
                  />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-6 text-sm sm:text-base">
                "{t.q}"
              </p>
              <div className="border-t border-gold/20 pt-4">
                <div className="font-display text-lg text-foreground">
                  {t.n}
                </div>
                <div className="text-gold text-xs tracking-widest uppercase">
                  {t.c}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
