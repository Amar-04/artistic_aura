import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero2() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* radial gold glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--gold)]/10 blur-[120px]" />
      </div>

      {/* Sparkles */}
      <Sparkles />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 pb-32">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gold tracking-[0.4em] text-xs sm:text-sm uppercase mb-6"
        >
          ★ Premium Tattoo Studio · Est. 2015 ★
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display font-black text-3d-gold text-5xl sm:text-7xl lg:text-8xl leading-[1.05] mb-8"
        >
          Where Skin <br className="sm:hidden" />
          Becomes <em className="not-italic text-gradient-gold">Art</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          India's most trusted tattoo studio — crafting bespoke, hygienic, and
          breathtaking tattoo art since 2014. Over 25,000 happy clients across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="bg-gradient-gold text-[var(--ink)] font-semibold px-8 py-4 rounded-full tracking-wide hover:shadow-gold-lg transition-all hover:scale-105"
          >
            Book Your Session
          </a>
          <a
            href="#gallery"
            className="border border-foreground/40 text-foreground px-8 py-4 rounded-full tracking-wide hover:border-gold hover:text-gold transition-all"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Floating 3D badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-28 right-4 sm:right-10 z-20 hidden sm:block"
        style={{ perspective: "800px" }}
      >
        <div className="animate-float-3d glass rounded-2xl p-5 w-48 shadow-gold-lg border-gold/40">
          <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">Trusted</div>
          <div className="font-display text-2xl text-gradient-gold leading-tight">
            10+ Years
          </div>
          <div className="font-display text-2xl text-gradient-gold leading-tight">
            25,000+ Clients
          </div>
          <div className="text-xs text-foreground/70 mt-2 border-t border-gold/20 pt-2">
            Safety First · Hygienic
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce-down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}

function Sparkles() {
  const dots = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const delay = (i * 0.7) % 10;
        const dur = 8 + (i % 6);
        const size = 2 + (i % 3);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-[var(--gold-bright)]"
            style={{
              left: `${left}%`,
              bottom: "-10px",
              width: size,
              height: size,
              boxShadow: "0 0 8px var(--gold-bright)",
              animation: `sparkle-drift ${dur}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
