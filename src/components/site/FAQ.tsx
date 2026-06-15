import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "Does getting a tattoo hurt?",
    a: "Yes, but pain varies by placement and individual tolerance. Our artists guide you through the entire process to keep you comfortable.",
  },
  {
    q: "How do I care for my new tattoo?",
    a: "We provide a complete aftercare kit and detailed instructions. Moisturize, avoid sun, and keep it clean for the first 2–3 weeks.",
  },
  {
    q: "Are your needles sterile and safe?",
    a: "Absolutely. We use single-use, hospital-grade sterile needles and follow strict hygiene protocols for every session.",
  },
  {
    q: "How much does a tattoo cost?",
    a: "Pricing depends on size, complexity, and placement. Book a free consultation and we'll provide a detailed quote.",
  },
  {
    q: "Can I get a custom design?",
    a: "Yes! Custom designs are our specialty. Share your idea or inspiration and our artists will create a one-of-a-kind piece.",
  },
  {
    q: "How long does a tattoo session take?",
    a: "Small tattoos: 1–2 hours. Medium: 3–5 hours. Large pieces may require multiple sessions spread over weeks.",
  },
  {
    q: "Do you do cover-up tattoos?",
    a: "Yes, we are cover-up specialists. Book a consultation to assess the existing tattoo and design a perfect cover-up.",
  },
  {
    q: "What is the minimum age requirement?",
    a: "You must be 18+ years old with valid government ID to get tattooed at our studio.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 px-6 bg-[var(--charcoal)]/40"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">
            Need Answers?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg text-foreground">
                    {f.q}
                  </span>
                  <Plus
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    size={22}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 sm:px-6 pb-6 text-foreground/70 leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const faqData = faqs;
