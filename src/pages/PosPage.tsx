import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Download, Rocket, Receipt, Package, Smartphone, Wrench, Users, Truck,
  Wallet, PieChart, Check, Sparkles, ShieldCheck, Headphones,
  Calendar, ArrowRight,
} from "lucide-react";
import { Section, SectionTitle, Eyebrow, Reveal } from "../components/Primitives";
import { DOWNLOADS } from "../config";
import { PosMockup } from "../components/Mockups";

const PRO_FEATURES = [
  { icon: Receipt, t: "Lightning Billing", d: "Scan, search, and checkout in under 3 seconds." },
  { icon: Package, t: "Smart Inventory", d: "Real-time stock with low-stock alerts and reorder points." },
  { icon: Smartphone, t: "IMEI & Serial", d: "Track every device by serial/IMEI — perfect for mobile shops." },
  { icon: Wrench, t: "Service Jobs", d: "Job cards, technician assignment, status tracking." },
  { icon: Users, t: "Customer CRM", d: "Purchase history, credit, contact details, loyalty." },
  { icon: Truck, t: "Suppliers & POs", d: "Purchase orders, GRNs, supplier payments." },
  { icon: Wallet, t: "Expenses", d: "Categorize and track every expense with receipts." },
  { icon: PieChart, t: "Reports", d: "Profit, sales, tax, best sellers — all in one place." },
];

const PLANS = [
  { name: "Starter", price: "9,900", period: "/ year", features: ["1 computer", "Billing + inventory", "Email support"], cta: "Try Free" },
  {
    name: "PRO",
    price: "60,000",
    originalPrice: "75,000",
    discount: "20%",
    period: "One-time payment",
    features: ["Up to 3 computers", "All Starter features", "IMEI + service jobs", "Priority support", "Cloud backup"],
    popular: true,
    cta: "Buy Now",
    cta2: "Download Trial",
  },
  { name: "Business", price: "Custom", period: "", features: ["Unlimited computers", "All PRO features", "On-site setup", "Custom reports", "Dedicated account manager"], cta: "Contact Sales" },
];

export default function PosPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="blob bg-emerald-500 w-[420px] h-[420px] -top-20 -right-20" />
        <div className="blob bg-blue-500 w-[320px] h-[320px] top-40 left-0" />

        <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>AutoServ POS PRO</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              The POS system <br />
              <span className="text-gradient">built for real shops.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-lg text-[var(--text-soft)] max-w-xl"
            >
              Billing, inventory, IMEI tracking, service jobs, customers, suppliers,
              expenses, and reports — all in one beautiful, lightning-fast app.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a href={DOWNLOADS.posInstaller} className="btn-primary !py-4 !px-7 text-base">
                <Download className="w-5 h-5" /> Download 7-Day Trial
              </a>
              <Link to="/features" className="btn-secondary !py-4 !px-6 text-base">
                <Sparkles className="w-4 h-4" /> See Features
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm"
            >
              {[
                { i: Calendar, t: `Current: ${DOWNLOADS.posVersion}` },
                { i: ShieldCheck, t: "No credit card" },
                { i: Headphones, t: "Priority support" },
              ].map((b) => (
                <span key={b.t} className="inline-flex items-center gap-1.5 text-[var(--text-soft)]">
                  <b.i className="w-4 h-4 text-emerald-500" /> {b.t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <PosMockup />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 text-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-semibold">+27% profit</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <Section>
        <Eyebrow>Features</Eyebrow>
        <div className="mt-4">
          <SectionTitle
            title={<>Everything your <span className="text-gradient">business</span> needs</>}
            subtitle="One app to replace five. Built for garages, mobile shops, and retail."
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRO_FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.04}>
              <div className="card card-shine p-5 h-full group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 grid place-items-center text-white shadow-md mb-4 group-hover:scale-110 transition">
                  <f.icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold mb-1.5">{f.t}</h4>
                <p className="text-sm text-[var(--text-soft)] leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <Eyebrow>Pricing</Eyebrow>
        <div className="mt-4">
          <SectionTitle
            title={<>Simple, <span className="text-gradient">honest</span> pricing</>}
            subtitle="All plans include the 7-day free trial. No hidden fees. Cancel anytime."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className={`card card-shine p-6 h-full flex flex-col relative ${p.popular ? "ring-2 ring-[var(--color-brand-500)]" : ""}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-[10px] font-bold tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="font-display text-lg font-bold">{p.name}</div>
                <div className="mt-3 mb-5 flex flex-col justify-end min-h-[90px]">
                  {"originalPrice" in p && (p as any).originalPrice ? (
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm line-through text-[var(--text-muted)] font-medium">
                          LKR {(p as any).originalPrice}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/12 border border-emerald-500/25 px-2 py-0.5 rounded-full">
                          Save {(p as any).discount}
                        </span>
                      </div>
                      <div className="text-[9px] font-bold tracking-wider text-[var(--text-muted)] uppercase mt-0.5">
                        NOW ONLY
                      </div>
                      <div className="font-display text-3xl font-extrabold text-gradient bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        LKR {p.price}
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)] font-semibold mt-1">{p.period}</div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-0.5">
                      <div className="font-display text-4xl font-bold">
                        {p.price === "Custom" ? "" : "LKR "}{p.price}
                      </div>
                      {p.period && <span className="text-sm text-[var(--text-muted)]">{p.period}</span>}
                    </div>
                  )}
                </div>
                <ul className="space-y-2 text-sm flex-1 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--text-soft)]">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href={p.cta === "Contact Sales" ? "/contact" : (p.cta === "Buy Now" ? "/contact" : DOWNLOADS.posInstaller)}
                    className={p.popular ? "btn-primary justify-center w-full" : "btn-secondary justify-center w-full"}
                  >
                    {p.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                  {"cta2" in p && (p as any).cta2 && (
                    <a
                      href={DOWNLOADS.posInstaller}
                      className="btn-secondary justify-center w-full"
                    >
                      {(p as any).cta2} <Download className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="rounded-3xl border border-[var(--border)] p-10 sm:p-14 text-center bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-2xl">
            <Rocket className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-display text-3xl sm:text-4xl font-bold">Start your 7-day free trial</h3>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              Full access. No credit card. Cancel anytime — though you probably won't want to.
            </p>
            <a href={DOWNLOADS.posInstaller} className="inline-flex items-center gap-2 mt-6 px-7 py-4 rounded-xl bg-white text-emerald-700 font-bold hover:scale-105 transition shadow-xl">
              <Download className="w-5 h-5" /> Download {DOWNLOADS.posVersion}
            </a>
            <div className="mt-4 text-xs text-white/70">
              Need a custom quote? <Link to="/contact" className="underline">Talk to sales</Link>.
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
