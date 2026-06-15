import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import logoUrl from "@/assets/logo-emblem.png";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--ink)]/95 backdrop-blur-md border-b border-[var(--gold)]/40 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  className="text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <NavLink
              to="/contact"
              className="hidden sm:inline-flex bg-gradient-gold text-[var(--ink)] font-semibold px-5 py-2.5 rounded-full text-sm tracking-wide hover:shadow-gold transition-all hover:scale-105"
            >
              Book Now
            </NavLink>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden text-foreground p-2"
            >
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-[var(--ink)] flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-[var(--gold)]/30">
              <Logo />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2"
              >
                <X size={28} />
              </button>
            </div>
            <ul className="flex-1 flex flex-col items-center justify-center gap-6">
              {links.map((l) => (
                <li key={l.href}>
                  <NavLink
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-foreground hover:text-gold transition-colors"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 bg-gradient-gold text-[var(--ink)] font-semibold px-8 py-3 rounded-full"
              >
                Book Now
              </NavLink>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoUrl}
        alt="Artistic Aura Tattoos logo"
        width={72}
        height={72}
        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
      />
    </div>
  );
}
