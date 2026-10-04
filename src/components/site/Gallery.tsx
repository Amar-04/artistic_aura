import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Camera, Sparkles } from "lucide-react";
import biomech from "@/assets/gallery/tattoo-biomech-spring.jpg";
import lotus from "@/assets/gallery/tattoo-lotus.jpg";
import shiva from "@/assets/gallery/tattoo-shiva.jpg";
import tribal from "@/assets/gallery/tattoo-tribal.jpg";

type Piece = {
  src: string;
  title: string;
  style: string;
  alt: string;
};

const pieces: Piece[] = [
  {
    src: biomech,
    title: "Biomechanical Spring",
    style: "Realism · Color",
    alt: "Biomechanical color realism tattoo of a coiled spring on the calf by Artistic Aura Tattoos",
  },
  {
    src: lotus,
    title: "Cosmic Lotus",
    style: "Watercolor · Color",
    alt: "Watercolor lotus tattoo with cosmic blue and pink splashes on the wrist by Artistic Aura Tattoos",
  },
  {
    src: shiva,
    title: "Brahmashakti",
    style: "Black & Grey · Realism",
    alt: "Black and grey realism tattoo of Lord Shiva with Sanskrit lettering on the forearm by Artistic Aura Tattoos",
  },
  {
    src: tribal,
    title: "Polynesian Sleeve",
    style: "Tribal · Blackwork",
    alt: "Polynesian tribal blackwork sleeve tattoo on the upper arm by Artistic Aura Tattoos",
  },
];

export function Gallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [active, setActive] = useState<Piece | null>(null);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      {/* Animated VFX background */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 -right-32 w-[35rem] h-[35rem] rounded-full bg-gold/5 blur-[140px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl text-gradient-gold mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-foreground/70 font-serif text-xl">
            Take a look at what we've created for our clients and imagine what
            we could create for you.
          </p>
        </motion.div>

        {/* VFX animated grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pieces.map((p, i) => (
            <motion.button
              key={p.title}
              type="button"
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-black/40 text-left focus:outline-none focus:ring-2 focus:ring-gold"
              style={{ perspective: 1000 }}
            >
              {/* Image */}
              <motion.img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* Gold sweep VFX on hover */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -inset-y-2 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-gold/30 to-transparent translate-x-0 group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              </div>

              {/* Animated border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-gold/60 transition-all duration-500" />

              {/* Gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 + 0.4 }}
                >
                  <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-1 flex items-center gap-1.5">
                    <Sparkles size={10} />
                    {p.style}
                  </p>
                  <h3 className="font-display text-xl text-foreground leading-tight">
                    {p.title}
                  </h3>
                </motion.div>
              </div>

              {/* Floating particles VFX */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(6)].map((_, idx) => (
                  <motion.span
                    key={idx}
                    className="absolute w-1 h-1 rounded-full bg-gold"
                    style={{
                      left: `${15 + idx * 14}%`,
                      bottom: "10%",
                    }}
                    animate={{
                      y: [0, -120, -180],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: idx * 0.3,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://www.instagram.com/artistic_aura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-[var(--ink)] font-semibold px-7 py-3.5 rounded-full hover:shadow-gold-lg transition-all hover:scale-105"
          >
            <Camera size={20} />
            See more on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="w-full h-auto rounded-2xl ring-1 ring-gold/30"
              />
              <div className="mt-4 text-center">
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-1">
                  {active.style}
                </p>
                <h3 className="font-display text-2xl text-foreground">
                  {active.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
