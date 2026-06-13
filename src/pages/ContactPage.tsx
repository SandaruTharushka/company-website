import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { Section, Eyebrow, Reveal } from "../components/Primitives";
import { COMPANY } from "../config";
import { GithubIcon, WhatsAppIcon } from "../components/BrandIcons";

export default function ContactPage() {
  return (
    <>
      <div className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="blob bg-blue-500 w-[420px] h-[420px] -top-20 -left-20" />
        <div className="blob bg-emerald-500 w-[320px] h-[320px] top-40 right-0" />

        <div className="container-x relative text-center max-w-3xl mx-auto">
          <Eyebrow>Contact</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Let's <span className="text-gradient">talk</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg text-[var(--text-soft)]"
          >
            Got a question, partnership idea, or custom build in mind?
            We typically reply within a few hours.
          </motion.p>
        </div>
      </div>

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, t: "Email", v: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { icon: Phone, t: "Phone", v: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, "")}` },
              { icon: WhatsAppIcon, t: "WhatsApp", v: COMPANY.whatsapp, href: `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}` },
              { icon: MapPin, t: "Location", v: COMPANY.address },
              { icon: GithubIcon, t: "GitHub", v: "View our open source", href: COMPANY.github },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.05}>
                <a
                  href={c.href || "#"}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card card-shine p-5 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 grid place-items-center text-white shadow-md group-hover:scale-110 transition">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{c.t}</div>
                    <div className="font-semibold">{c.v}</div>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="card p-5">
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">Founder</div>
                <div className="font-semibold text-lg">{COMPANY.founder}</div>
                <div className="text-sm text-[var(--text-soft)] mt-1">Crafting software since 2024.</div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal>
              <form
                onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back to you within 24 hours."); }}
                className="card card-shine p-6 sm:p-8"
              >
                <h3 className="font-display text-xl font-bold mb-1">Send us a message</h3>
                <p className="text-sm text-[var(--text-soft)] mb-6">All fields with * are required.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block">Name *</label>
                    <input required className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 transition" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block">Email *</label>
                    <input required type="email" className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 transition" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block">Company</label>
                    <input className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 transition" placeholder="Your company" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block">Phone</label>
                    <input className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 transition" placeholder="+94 ..." />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-xs font-semibold mb-1.5 block">Subject *</label>
                  <input required className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 transition" placeholder="How can we help?" />
                </div>
                <div className="mt-4">
                  <label className="text-xs font-semibold mb-1.5 block">Message *</label>
                  <textarea required rows={6} className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 transition resize-none" placeholder="Tell us what you need..." />
                </div>
                <button type="submit" className="btn-primary mt-5 w-full sm:w-auto justify-center">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 card p-2 overflow-hidden">
                <div className="aspect-[16/7] rounded-xl relative bg-gradient-to-br from-blue-500/10 to-emerald-500/10">
                  <iframe
                    title="map"
                    className="absolute inset-0 w-full h-full"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=79.7%2C6.8%2C80.0%2C7.1&layer=mapnik"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
