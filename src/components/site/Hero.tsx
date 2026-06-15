import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logoUrl from "@/assets/logo-emblem.png";

function Counter({
  to,
  suffix = "",
  duration = 2000,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 25000, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years in Business" },
  { value: 50, suffix: "+", label: "Tattoo Styles" },
  { value: 100, suffix: "%", label: "Safe & Hygienic" },
];

export function Hero() {
  return (
    <section id="hero" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">
            Premium Tattoo Studio
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
            Ink Your Aura
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* VFX Animated Logo Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square max-w-md mx-auto w-full flex items-center justify-center overflow-hidden"
            style={{ perspective: "1200px" }}
          >
            {/* Radial glow */}
            <div className="absolute inset-8 rounded-full bg-white/10 blur-3xl" />

            {/* Pulsing energy rings */}
            <motion.span
              className="absolute inset-0 rounded-full border border-white/30"
              animate={{ scale: [1, 1.25, 1.25], opacity: [0.7, 0, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border border-white/20"
              animate={{ scale: [1, 1.45, 1.45], opacity: [0.5, 0, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1,
              }}
            />

            {/* Outer rotating ring with gradient mask */}
            <motion.div
              className="absolute inset-2 rounded-full border border-white/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{
                maskImage: "linear-gradient(white, transparent 70%)",
                WebkitMaskImage: "linear-gradient(white, transparent 70%)",
              }}
            />

            {/* Counter-rotating dashed ring */}
            <motion.div
              className="absolute inset-8 rounded-full border border-dashed border-white/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />

            {/* Orbiting sparks — inset-4 keeps them safely inside the container */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute inset-4"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12 + i * 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "50% 50%" }}
                initial={{ rotate: angle }}
              >
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white"
                  style={{ boxShadow: "0 0 12px rgba(255,255,255,0.9)" }}
                />
              </motion.div>
            ))}

            {/* Logo with 3D float + slow spin */}
            <motion.div
              className="relative w-[88%] h-[88%] flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
                rotateX: [0, 6, 0],
                rotateY: [0, -6, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.img
                src={logoUrl}
                alt="Artistic Aura Tattoos emblem"
                width={500}
                height={500}
                loading="lazy"
                className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              />
              {/* Shimmer sweep — unified range works on all screen sizes */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
                  mixBlendMode: "overlay",
                }}
                animate={{
                  x: ["-110%", "110%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.5,
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-2xl sm:text-3xl mb-6 text-foreground">
              A decade of mastering the art of{" "}
              <span className="text-gold">ink on skin</span>.
            </h3>
            <p className="text-foreground/75 leading-relaxed text-base sm:text-lg">
              Artistic Aura Tattoos was born from a singular obsession — turning
              human skin into living, breathing canvases. Founded in 2014, we
              have spent over a decade mastering every style of tattoo art, from
              intricate fine-line portraits and geometric mandalas to bold
              neo-traditional and hyper-realistic pieces. Our studio is a
              sanctuary of creativity, equipped with the most advanced tattoo
              technology, hospital-grade sterilization, and an atmosphere that
              makes every client feel at home. We don't just do tattoos — we
              create heirlooms.
            </p>
          </motion.div>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-gold-top rounded-2xl p-5 sm:p-7 text-center hover:shadow-gold transition-shadow"
            >
              <div className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-gold text-xs sm:text-sm tracking-widest uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtistSilhouette() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="goldg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E5C76B" />
          <stop offset="100%" stopColor="#7A6020" />
        </linearGradient>
        <radialGradient id="bg" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </radialGradient>
      </defs>
      <circle
        cx="200"
        cy="200"
        r="180"
        fill="url(#bg)"
        stroke="url(#goldg)"
        strokeWidth="1"
      />
      {/* decorative rings */}
      <circle
        cx="200"
        cy="200"
        r="160"
        fill="none"
        stroke="url(#goldg)"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <circle
        cx="200"
        cy="200"
        r="140"
        fill="none"
        stroke="url(#goldg)"
        strokeWidth="0.5"
        opacity="0.2"
      />
      {/* artist silhouette */}
      <g fill="url(#goldg)">
        {/* head */}
        <circle cx="200" cy="130" r="28" />
        {/* shoulders/torso */}
        <path d="M150 175 Q200 160 250 175 L260 260 Q200 250 140 260 Z" />
        {/* arm holding tattoo machine */}
        <path d="M250 200 L300 230 L295 245 L245 215 Z" />
        {/* tattoo machine */}
        <rect x="295" y="220" width="30" height="14" rx="3" />
        <line
          x1="325"
          y1="227"
          x2="345"
          y2="227"
          stroke="url(#goldg)"
          strokeWidth="2"
        />
      </g>
      {/* mandala accent */}
      <g stroke="url(#goldg)" strokeWidth="0.8" fill="none" opacity="0.6">
        <circle cx="120" cy="290" r="30" />
        <circle cx="120" cy="290" r="20" />
        <circle cx="120" cy="290" r="10" />
        {[0, 45, 90, 135].map((a) => (
          <line
            key={a}
            x1="120"
            y1="290"
            x2={120 + 30 * Math.cos((a * Math.PI) / 180)}
            y2={290 + 30 * Math.sin((a * Math.PI) / 180)}
          />
        ))}
      </g>
    </svg>
  );
}