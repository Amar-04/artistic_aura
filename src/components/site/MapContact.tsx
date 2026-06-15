import { MapPin, Phone, Mail, Camera, Clock } from "lucide-react";

export function MapContact() {
  return (
    <section id="map" className="relative py-24 sm:py-32 px-6 bg-[var(--charcoal)]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">Visit Us</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
            Find Our Studio
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Replace src with actual Google Maps embed URL for Artistic Aura Tattoos studio location */}
          <div className="glass rounded-2xl overflow-hidden h-[420px]">
            <iframe
              title="Artistic Aura Tattoos studio location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0000000000005!2d73.18!3d22.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzM2LjAiTiA3M8KwMTAnNDguMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="glass rounded-2xl p-7 sm:p-9 space-y-6">
            <h3 className="font-display text-2xl text-gradient-gold mb-2">Contact Details</h3>

            <Item icon={<MapPin />} label="Address">
              123, Art District, Vadodara, Gujarat, India — 390001
            </Item>
            <Item icon={<Phone />} label="Phone">
              <a href="tel:+918487800643" className="hover:text-gold transition-colors">
                +91 84878 00643
              </a>
            </Item>
            <Item icon={<Mail />} label="Email">
              <a href="mailto:artisticauratattoos@artisticauratattoos.com" className="hover:text-gold transition-colors break-all">
                artisticauratattoos@artisticauratattoos.com
              </a>
            </Item>
            <Item icon={<Camera />} label="Instagram">
              <a href="https://www.instagram.com/artistic_aura" target="_blank" rel="noreferrer noopener" className="hover:text-gold transition-colors">
                @artistic_aura
              </a>
            </Item>
            <Item icon={<Clock />} label="Hours">
              Monday–Saturday: 11am–8pm <br />
              Sunday: By appointment
            </Item>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0 text-[var(--ink)]">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-gold text-[10px] tracking-[0.25em] uppercase mb-1">{label}</div>
        <div className="text-foreground/85 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
