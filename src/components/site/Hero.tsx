import { motion, useInView } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoUrl from "@/assets/logo-emblem.png";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.1 0C5.48 0 0 5.48 0 12.1c0 2.13.56 4.2 1.62 6.02L0 24l6.04-1.6A12.1 12.1 0 0 0 12.1 24c6.62 0 12.1-5.48 12.1-12.1 0-3.24-1.26-6.3-3.48-8.52Zm-8.42 18.5c-1.8 0-3.55-.48-5.08-1.38l-.36-.22-3.58.96.96-3.49-.24-.36A9.5 9.5 0 0 1 2.6 12.1c0-5.24 4.26-9.5 9.5-9.5 2.53 0 4.9.99 6.7 2.8A9.46 9.46 0 0 1 21.6 12.1c-1.8 5.24-5.7 9.5-10.5 9.5Zm5.77-7.11c-.32-.16-1.9-.93-2.19-1.03-.29-.1-.5-.16-.71.16-.21.32-.8 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.33-.49-2.53-1.56-.94-.84-1.57-1.87-1.76-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.22-.32.32-.54.11-.21.05-.4-.03-.55-.08-.16-.7-1.69-.96-2.31-.25-.6-.5-.52-.7-.53l-.6-.01c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.63 0 1.55 1.14 3.05 1.3 3.26.16.21 2.23 3.4 5.41 4.76.76.33 1.35.52 1.82.67.77.24 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.76.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

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

const WHATSAPP_NUMBER = "918487800643";
const createWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function Hero() {
  const handleConsultationClick = () => {
    const message =
      "Hi Artistic Aura Tattoos, I would like to book a consultation for a custom tattoo design.";
    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

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
          {/* <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">
            We'll Make Your Vibe Artistic!
          </p> */}
          <h1 className="font-display text-2xl text-gradient-gold">
            We'll Make Your Vibe Artistic!
          </h1>
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
                style={{ clipPath: "circle(50%)" }}
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
            <h3 className="font-display text-2xl sm:text-3xl mb-6 text-foreground text-center">
              Art that feels like it belongs to you
            </h3>
            <p className="text-foreground/75 leading-relaxed text-md text-center">
              Because the best tattoos aren’t chosen from a catalogue. They’re
              designed around your story, your style, and the person you are.
            </p>

            <div className="mt-8 flex justify-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={handleConsultationClick}
                className="inline-flex items-center justify-center gap-1.5 bg-gradient-gold text-[var(--ink)] font-semibold px-3 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-lg shadow-[rgba(212,175,55,0.25)] transition-transform hover:scale-[1.02] text-sm sm:text-base"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                WhatsApp
              </button>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center gap-1.5 border border-[var(--gold)]/60 bg-[var(--ink)]/40 text-foreground font-semibold px-3 py-2.5 sm:px-6 sm:py-3 rounded-full transition-colors hover:bg-[var(--gold)]/10 text-center text-sm sm:text-base"
              >
                <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Call Now
              </Link>
            </div>
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

// function ArtistSilhouette() {
//   return (
//     <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
//       <defs>
//         <linearGradient id="goldg" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#E5C76B" />
//           <stop offset="100%" stopColor="#7A6020" />
//         </linearGradient>
//         <radialGradient id="bg" cx="50%" cy="50%">
//           <stop offset="0%" stopColor="#1A1A1A" />
//           <stop offset="100%" stopColor="#0A0A0A" />
//         </radialGradient>
//       </defs>
//       <circle
//         cx="200"
//         cy="200"
//         r="180"
//         fill="url(#bg)"
//         stroke="url(#goldg)"
//         strokeWidth="1"
//       />
//       {/* decorative rings */}
//       <circle
//         cx="200"
//         cy="200"
//         r="160"
//         fill="none"
//         stroke="url(#goldg)"
//         strokeWidth="0.5"
//         opacity="0.3"
//       />
//       <circle
//         cx="200"
//         cy="200"
//         r="140"
//         fill="none"
//         stroke="url(#goldg)"
//         strokeWidth="0.5"
//         opacity="0.2"
//       />
//       {/* artist silhouette */}
//       <g fill="url(#goldg)">
//         {/* head */}
//         <circle cx="200" cy="130" r="28" />
//         {/* shoulders/torso */}
//         <path d="M150 175 Q200 160 250 175 L260 260 Q200 250 140 260 Z" />
//         {/* arm holding tattoo machine */}
//         <path d="M250 200 L300 230 L295 245 L245 215 Z" />
//         {/* tattoo machine */}
//         <rect x="295" y="220" width="30" height="14" rx="3" />
//         <line
//           x1="325"
//           y1="227"
//           x2="345"
//           y2="227"
//           stroke="url(#goldg)"
//           strokeWidth="2"
//         />
//       </g>
//       {/* mandala accent */}
//       <g stroke="url(#goldg)" strokeWidth="0.8" fill="none" opacity="0.6">
//         <circle cx="120" cy="290" r="30" />
//         <circle cx="120" cy="290" r="20" />
//         <circle cx="120" cy="290" r="10" />
//         {[0, 45, 90, 135].map((a) => (
//           <line
//             key={a}
//             x1="120"
//             y1="290"
//             x2={120 + 30 * Math.cos((a * Math.PI) / 180)}
//             y2={290 + 30 * Math.sin((a * Math.PI) / 180)}
//           />
//         ))}
//       </g>
//     </svg>
//   );
// }
