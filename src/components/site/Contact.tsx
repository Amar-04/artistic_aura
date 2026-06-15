import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

type FormValues = {
  name: string;
  phone: string;
  city: string;
  area: string;
  style: string;
  message?: string;
};

const styles = [
  "Fine Line",
  "Realistic",
  "Geometric",
  "Neo-Traditional",
  "Blackwork",
  "Watercolor",
  "Japanese",
  "Cover-Up",
  "Custom",
  "Other",
];

const WHATSAPP_NUMBER = "918487800643";
const createWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormValues) => {
    const message =
      `*New Tattoo Booking Enquiry*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Phone:* ${data.phone}\n` +
      `*City:* ${data.city}\n` +
      `*Area:* ${data.area}\n` +
      `*Style:* ${data.style}\n` +
      `*Message:* ${data.message || "—"}`;

    const waUrl = createWhatsAppUrl(message);

    setSent(true);

    // Fire-and-forget email; do not await before opening WhatsApp
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        "EMAILJS_SERVICE_ID",
        "EMAILJS_TEMPLATE_ID",
        { ...data, to_email: "artisticauratattoos@gmail.com" },
        { publicKey: "EMAILJS_PUBLIC_KEY" },
      );
    } catch {
      // silently continue
    }

    // Same-tab navigation avoids Safari's cross-origin popup/COOP blocking on submit.
    window.location.assign(waUrl);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
            Book Your Tattoo Session
          </h2>
        </motion.div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass rounded-3xl p-6 sm:p-10 space-y-5"
          noValidate
        >
          <Field label="Full Name" error={errors.name?.message}>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "Too short" },
                maxLength: 80,
              })}
              className={inputCls}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
            />
          </Field>

          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Phone Number" error={errors.phone?.message}>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^(\+?91)?[6-9]\d{9}$/,
                    message: "Enter a valid Indian number",
                  },
                })}
                className={inputCls}
                placeholder="+91 98XXXXXXXX"
                aria-invalid={!!errors.phone}
              />
            </Field>
            <Field label="City" error={errors.city?.message}>
              <input
                {...register("city", {
                  required: "City is required",
                  maxLength: 60,
                })}
                className={inputCls}
                placeholder="Your city"
              />
            </Field>
          </div>

          <Field label="Area / Locality" error={errors.area?.message}>
            <input
              {...register("area", {
                required: "Area is required",
                maxLength: 80,
              })}
              className={inputCls}
              placeholder="Your area or locality"
            />
          </Field>

          <Field
            label="Tattoo Style Interested In"
            error={errors.style?.message}
          >
            <select
              {...register("style", { required: "Please select a style" })}
              className={inputCls}
              defaultValue=""
            >
              <option value="" disabled>
                Select a style…
              </option>
              {styles.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Message / Tattoo Idea (optional)">
            <textarea
              {...register("message", { maxLength: 1000 })}
              rows={4}
              className={inputCls}
              placeholder="Tell us your tattoo idea, size, placement…"
            />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting || sent}
            className="w-full bg-gradient-gold text-[var(--ink)] font-semibold py-4 rounded-full tracking-wide hover:shadow-gold-lg transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            <Send size={18} />
            {sent ? "Redirecting to WhatsApp…" : "Send to WhatsApp & Book"}
          </button>

          <p className="text-center text-xs text-foreground/55 pt-2">
            Your details are 100% private. We will never share your information.
          </p>
        </form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-[var(--ink)]/60 border border-gold/20 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs tracking-widest uppercase text-gold mb-2 block">
        {label}
      </span>
      {children}
      {error && (
        <span className="text-destructive text-xs mt-1 block">{error}</span>
      )}
    </label>
  );
}
