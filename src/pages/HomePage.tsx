import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Download, Play, BarChart3, QrCode, Layers, Printer, Eye, FileSpreadsheet,
  RefreshCw, Receipt, Package, Smartphone, Wrench, Users, Truck, Wallet,
  PieChart, BadgeCheck, Sparkles, ArrowRight, CheckCircle2, Star,
  Quote, Plus, Minus, Send, MapPin, Phone, Mail, MessageCircle, Zap,
  ShieldCheck, Rocket, MousePointerClick, Award,
  HeadphonesIcon, Globe, Check,
} from "lucide-react";
import { BarcodeMockup, PosMockup, MockupFloat } from "../components/Mockups";
import { Section, SectionTitle, Eyebrow, Reveal, Counter } from "../components/Primitives";
import {
  COMPANY, DOWNLOADS, STATS, PRINTERS, WHY_CHOOSE, PRODUCTS, TESTIMONIALS, FAQS,
} from "../config";
import { useState } from "react";
import { GithubIcon, WhatsAppIcon } from "../components/BrandIcons";

// =============== HERO ===============
function Hero() {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="blob bg-blue-500 w-[520px] h-[520px] -top-32 -left-32" />
      <div className="blob bg-emerald-500 w-[420px] h-[420px] top-40 -right-32" />
      <div className="blob bg-purple-500 w-[380px] h-[380px] bottom-0 left-1/3 opacity-30" />

      <div className="container-x relative grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full glass text-xs font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>v1.4.0 just shipped — see what's new</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="block">Free Barcode</span>
            <span className="block text-gradient">Printer Manager</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-[var(--text-soft)] max-w-xl mx-auto lg:mx-0"
          >
            Professional barcode &amp; label printing software for Windows.
            Works with every major thermal printer. Zero ads. Zero nags. 100% free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
          >
            <a href={DOWNLOADS.barcodeInstaller} className="btn-primary">
              <Download className="w-4 h-4" /> Download FREE
            </a>
            <Link to="/pos" className="btn-secondary">
              <Rocket className="w-4 h-4" /> Download POS Trial
            </Link>
            <a href="#features" className="btn-ghost">
              <Play className="w-4 h-4" /> Watch Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[var(--text-muted)]"
          >
            {[
              { icon: ShieldCheck, t: "100% free" },
              { icon: RefreshCw, t: "Free updates" },
              { icon: HeadphonesIcon, t: "Lifetime support" },
              { icon: Globe, t: "42+ countries" },
            ].map((b) => (
              <span key={b.t} className="inline-flex items-center gap-1.5">
                <b.icon className="w-3.5 h-3.5 text-emerald-500" /> {b.t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Mockup */}
        <div className="lg:col-span-6 relative">
          <div className="relative max-w-xl mx-auto">
            <MockupFloat className="relative z-10" delay={0.2}>
              <BarcodeMockup />
            </MockupFloat>

            {/* Floating chips */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -right-4 sm:right-2 top-12 z-20 glass card-shine rounded-2xl p-3 shadow-xl hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 grid place-items-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[var(--text-muted)]">PRINTED</div>
                  <div className="text-sm font-bold">12,400 / day</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -left-2 sm:-left-6 bottom-12 z-20 glass card-shine rounded-2xl p-3 shadow-xl hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center">
                  <Printer className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[var(--text-muted)]">PRINTER</div>
                  <div className="text-sm font-bold">Xprinter XP-365B</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 glass card-shine rounded-2xl px-4 py-2 shadow-xl hidden md:flex items-center gap-2 text-xs"
            >
              <BadgeCheck className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold">Connected &amp; ready</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trusted-by strip */}
      <div className="container-x relative mt-20">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-widest text-[var(--text-muted)] mb-5">
            Trusted by 8,400+ businesses in 42 countries
          </p>
        </Reveal>
      </div>
    </div>
  );
}

// =============== STATS ===============
function Stats() {
  return (
    <Section className="!pt-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <div className="card p-6 text-center card-shine">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-[var(--text-soft)] font-medium">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// =============== PRODUCTS ===============
function Products() {
  return (
    <Section id="products">
      <Eyebrow>Our Products</Eyebrow>
      <div className="mt-4">
        <SectionTitle
          title={
            <>
              Software that <span className="text-gradient">just works</span>
            </>
          }
          subtitle="Three powerful Windows apps, all built with the same care for speed, design, and reliability."
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {PRODUCTS.map((p, i) => {
          const product = p as any;
          // Determine custom button styles with glows
          let btnClasses = "relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold transition-all duration-300 transform active:scale-95";
          if (product.id === "pos") {
            // Premium Green Gradient + Glow
            btnClasses += " bg-gradient-to-r from-emerald-500 to-teal-600 shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.55)] hover:-translate-y-0.5";
          } else if (product.id === "retail") {
            // Premium Orange Gradient + Glow
            btnClasses += " bg-gradient-to-r from-orange-500 to-pink-600 shadow-[0_10px_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.55)] hover:-translate-y-0.5";
          } else {
            // Default Premium Blue Gradient + Glow for Product 1
            btnClasses += " bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.55)] hover:-translate-y-0.5";
          }

          return (
            <Reveal key={product.id} delay={i * 0.1}>
              <div className="card product-card card-shine p-7 h-full flex flex-col relative">
                {/* Badges container */}
                <div className="absolute top-5 right-5 flex flex-col items-end gap-1.5">
                  <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500/15 to-blue-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                    {product.badge}
                  </span>
                  {product.limitedTimeBadge && (
                    <span className="text-[9px] font-bold tracking-wider px-2.5 py-0.75 rounded-md bg-red-500/10 border border-red-500/30 text-red-500 dark:text-red-400 flex items-center gap-1.5 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      {product.limitedTimeBadge}
                    </span>
                  )}
                </div>

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} grid place-items-center shadow-lg mb-5`}>
                  {product.id === "barcode" && <BarChart3 className="w-7 h-7 text-white" />}
                  {product.id === "pos" && <Receipt className="w-7 h-7 text-white" />}
                  {product.id === "retail" && <Package className="w-7 h-7 text-white" />}
                </div>

                <h3 className="font-display text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-[var(--text-soft)] mb-5 min-h-[40px]">{product.description}</p>

                {/* Price section with fade animation */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                  className="mb-5 min-h-[90px] flex flex-col justify-end"
                >
                  {product.originalPrice ? (
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm line-through text-[var(--text-muted)] font-medium">
                          {product.originalPrice}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/12 border border-emerald-500/25 px-2 py-0.5 rounded-full">
                          Save {product.discount}
                        </span>
                      </div>
                      <div className="text-[9px] font-bold tracking-wider text-[var(--text-muted)] uppercase mt-0.5">
                        NOW ONLY
                      </div>
                      <div className={`font-display text-3xl font-extrabold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                        {product.offerPrice}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-0.5">
                      <div className="text-[9px] font-bold tracking-wider text-[var(--text-muted)] uppercase">
                        Starting at
                      </div>
                      <div className={`font-display text-3xl font-extrabold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                        {product.price}
                      </div>
                    </div>
                  )}
                </motion.div>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {product.features.map((f: string) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--text-soft)]">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2 mt-auto">
                  {product.ctaLink.startsWith("http") ? (
                    <a href={product.ctaLink} className={btnClasses}>
                      {product.cta} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link to={product.ctaLink} className={btnClasses}>
                      {product.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}

                  {product.cta2 && (
                    product.cta2Link ? (
                      <a href={product.cta2Link} className="btn-secondary justify-center w-full">
                        {product.cta2} <Download className="w-4 h-4" />
                      </a>
                    ) : (
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); alert("Trial version for Phone Repair Management System is coming soon!"); }}
                        className="btn-secondary justify-center w-full opacity-60 cursor-default"
                      >
                        {product.cta2} <Download className="w-4 h-4" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

// =============== FEATURES ===============
const FEATURES = [
  { icon: BarChart3, t: "1D & 2D Barcodes", d: "EAN, UPC, CODE128, CODE39, ITF, QR, DataMatrix, PDF417 — all built in.", c: "from-blue-500 to-indigo-600" },
  { icon: QrCode, t: "QR Code Generator", d: "Create custom QR codes with logos, colors, and embedded text.", c: "from-purple-500 to-fuchsia-600" },
  { icon: Layers, t: "Custom Templates", d: "Drag-and-drop designer for unlimited label layouts.", c: "from-pink-500 to-rose-600" },
  { icon: Printer, t: "Thermal & USB", d: "Works with Zebra, Xprinter, TSC, Brother and 50+ printers.", c: "from-emerald-500 to-teal-600" },
  { icon: Eye, t: "Live Preview", d: "See exactly what you'll print, down to the millimeter.", c: "from-amber-500 to-orange-600" },
  { icon: FileSpreadsheet, t: "Bulk Import", d: "Print thousands of labels from Excel or CSV in one click.", c: "from-cyan-500 to-blue-600" },
  { icon: RefreshCw, t: "Free Updates", d: "New features and printer support delivered automatically.", c: "from-violet-500 to-purple-600" },
  { icon: Sparkles, t: "Modern UI", d: "A clean, glassy interface you'll actually enjoy using.", c: "from-rose-500 to-pink-600" },
];

const POS_FEATURES = [
  { icon: Receipt, t: "Fast Billing", d: "Lightning-fast checkout with barcode scanning & shortcuts." },
  { icon: Package, t: "Inventory", d: "Track stock, get low-stock alerts, manage suppliers." },
  { icon: Smartphone, t: "IMEI Tracking", d: "Perfect for mobile shops — track every serial number." },
  { icon: Wrench, t: "Service Jobs", d: "Job cards, status boards, technician assignments." },
  { icon: Users, t: "Customers", d: "Full CRM with purchase history and credit tracking." },
  { icon: Truck, t: "Suppliers & Purchases", d: "Manage POs, GRNs, supplier payments and returns." },
  { icon: Wallet, t: "Expenses", d: "Track every rupee in and out, with categories." },
  { icon: PieChart, t: "Reports & Analytics", d: "Profit, sales, tax, best sellers — all at a glance." },
];

function Features() {
  return (
    <Section id="features">
      <Eyebrow>Features</Eyebrow>
      <div className="mt-4">
        <SectionTitle
          title={
            <>Packed with <span className="text-gradient">everything</span> you need</>
          }
          subtitle="Every feature you asked for — and a few you'll wish you had sooner."
        />
      </div>

      {/* Barcode features */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.t} delay={i * 0.04}>
            <div className="card card-shine p-5 h-full group">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.c} grid place-items-center shadow-md mb-4 group-hover:scale-110 transition`}>
                <f.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold mb-1.5">{f.t}</h4>
              <p className="text-sm text-[var(--text-soft)] leading-relaxed">{f.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* POS Section */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <Reveal>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
              AutoServ POS — built for <span className="text-gradient">real shops</span>
            </h3>
            <p className="mt-3 text-[var(--text-soft)] max-w-2xl mx-auto">
              Everything a garage, mobile shop, or retail store needs in one beautiful app.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              {POS_FEATURES.map((f, i) => (
                <div key={f.t} className="card card-shine p-4 group" style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="w-9 h-9 rounded-lg bg-[var(--color-brand-500)]/10 grid place-items-center text-[var(--color-brand-600)] mb-3 group-hover:scale-110 transition">
                    <f.icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="font-semibold text-sm mb-1">{f.t}</div>
                  <div className="text-xs text-[var(--text-soft)] leading-relaxed">{f.d}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <PosMockup />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 text-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-semibold">+27% profit this month</span>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

// =============== PRINTERS ===============
function Printers() {
  return (
    <Section>
      <Eyebrow>Supported Printers</Eyebrow>
      <div className="mt-4">
        <SectionTitle
          title={<>Works with <span className="text-gradient">every</span> major brand</>}
          subtitle="Native drivers and tested support for 60+ thermal and label printers."
        />
      </div>

      <div className="relative overflow-hidden mask-fade">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...PRINTERS, ...PRINTERS].map((p, i) => (
            <div
              key={i}
              className="card flex-shrink-0 px-6 py-4 min-w-[180px] text-center font-display font-semibold text-lg"
            >
              {p}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-[var(--text-muted)]">
        ... and 50+ more including Citizen, Argox, Godex, Honeywell, Bixolon, TSC, Postek, Rongta.
      </div>
    </Section>
  );
}

// =============== WHY CHOOSE US ===============
function WhyChoose() {
  return (
    <Section>
      <Eyebrow>Why Cloud Crafters</Eyebrow>
      <div className="mt-4">
        <SectionTitle
          title={<>Built different. <span className="text-gradient">Better.</span></>}
          subtitle="We sweat the details so you don't have to."
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {WHY_CHOOSE.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.05}>
            <div className="card card-shine p-6 h-full group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 grid place-items-center text-white shadow-lg flex-shrink-0 group-hover:rotate-6 transition">
                  {i === 0 && <Zap className="w-5 h-5" />}
                  {i === 1 && <ShieldCheck className="w-5 h-5" />}
                  {i === 2 && <Award className="w-5 h-5" />}
                  {i === 3 && <Sparkles className="w-5 h-5" />}
                  {i === 4 && <MousePointerClick className="w-5 h-5" />}
                  {i === 5 && <RefreshCw className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold mb-1">{w.title}</h4>
                  <p className="text-sm text-[var(--text-soft)] leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// =============== DOWNLOAD ===============
function DownloadSection() {
  return (
    <Section>
      <Eyebrow>Download</Eyebrow>
      <div className="mt-4">
        <SectionTitle
          title={<>Get started in <span className="text-gradient">60 seconds</span></>}
          subtitle="Free. Forever. No credit card, no sign-up, no nonsense."
        />
      </div>

      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 sm:p-12 text-white shadow-2xl">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="blob bg-white w-[400px] h-[400px] -top-20 -right-20 opacity-10" />
          <div className="blob bg-emerald-400 w-[300px] h-[300px] -bottom-20 -left-20 opacity-20" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> FREE FOREVER
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
                Barcode Printer Manager
              </h3>
              <p className="mt-3 text-white/80 max-w-md">
                Professional barcode &amp; label printing software for Windows.
                Installs in seconds, no registration required.
              </p>

              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Windows 10 / 11, 64-bit</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Current version: <span className="font-mono ml-1">{DOWNLOADS.barcodeVersion}</span></li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> {DOWNLOADS.barcodeSize} · Released {DOWNLOADS.barcodeReleased}</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> 100% free, no watermarks</li>
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={DOWNLOADS.barcodeInstaller} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold hover:scale-105 transition shadow-xl">
                  <Download className="w-5 h-5" /> Download Now
                </a>
                <Link to="/screenshots" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white font-semibold hover:bg-white/20 transition">
                  <Eye className="w-4 h-4" /> See Screenshots
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  { l: "DOWNLOADS", v: "125k+", i: Download },
                  { l: "RATING", v: "4.9/5", i: Star },
                  { l: "PRINTERS", v: "60+", i: Printer },
                  { l: "COUNTRIES", v: "42", i: Globe },
                ].map((k) => (
                  <div key={k.l} className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/15">
                    <k.i className="w-5 h-5 mb-2 text-emerald-300" />
                    <div className="text-2xl font-display font-bold">{k.v}</div>
                    <div className="text-xs text-white/70 tracking-wider">{k.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

// =============== POS TRIAL ===============
function PosTrial() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-8 sm:p-12 text-white shadow-2xl">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="blob bg-white w-[400px] h-[400px] -bottom-20 -right-20 opacity-10" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-semibold">
                <Rocket className="w-3.5 h-3.5" /> 7-DAY FREE TRIAL
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
                AutoServ POS System PRO
              </h3>
              <p className="mt-3 text-white/85 max-w-md">
                The complete POS + garage management suite. Try every feature free for 7 days.
                No credit card required.
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                {["Full billing", "Inventory & IMEI", "Service jobs", "Reports", "Multi-user", "Cloud backup"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-200" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={DOWNLOADS.posInstaller} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-700 font-bold hover:scale-105 transition shadow-xl">
                  <Download className="w-5 h-5" /> Download Trial
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white font-semibold hover:bg-white/20 transition">
                  <MessageCircle className="w-4 h-4" /> Talk to Sales
                </Link>
              </div>
              <div className="mt-3 text-xs text-white/70">
                Current: <span className="font-mono">{DOWNLOADS.posVersion}</span> · {DOWNLOADS.posSize} · {DOWNLOADS.posReleased}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  { l: "BILLING /s", v: "< 3s" },
                  { l: "FEATURES", v: "40+" },
                  { l: "LANGUAGES", v: "EN/SI/TA" },
                  { l: "TRIAL", v: "7 days" },
                ].map((k) => (
                  <div key={k.l} className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/15">
                    <div className="text-2xl font-display font-bold">{k.v}</div>
                    <div className="text-xs text-white/70 tracking-wider">{k.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

// =============== TESTIMONIALS ===============
function Testimonials() {
  return (
    <Section>
      <Eyebrow>Testimonials</Eyebrow>
      <div className="mt-4">
        <SectionTitle
          title={<>Loved by <span className="text-gradient">thousands</span></>}
          subtitle="What our customers are saying."
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <div className="card card-shine p-5 h-full">
              <Quote className="w-6 h-6 text-[var(--color-brand-500)]/30 mb-3" />
              <p className="text-sm text-[var(--text-soft)] leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 grid place-items-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-[var(--text-muted)]">{t.role}</div>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// =============== FAQ ===============
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <Eyebrow>FAQ</Eyebrow>
      <div className="mt-4">
        <SectionTitle
          title={<>Got <span className="text-gradient">questions?</span></>}
          subtitle="Quick answers to the things people ask us most."
        />
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <div className={`card card-shine overflow-hidden transition-all ${open === i ? "ring-2 ring-[var(--color-brand-500)]/30" : ""}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-5 flex items-center gap-3"
              >
                <span className="flex-1 font-semibold">{f.q}</span>
                <span className="w-7 h-7 rounded-full grid place-items-center bg-[var(--color-brand-500)]/10 text-[var(--color-brand-600)] flex-shrink-0">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 text-sm text-[var(--text-soft)] leading-relaxed">
                  {f.a}
                </div>
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

// =============== CONTACT ===============
function Contact() {
  return (
    <Section id="contact">
      <Eyebrow>Contact</Eyebrow>
      <div className="mt-4">
        <SectionTitle
          title={<>Let's <span className="text-gradient">talk</span></>}
          subtitle="Got a question, partnership idea, or custom build in mind? We'd love to hear from you."
        />
      </div>

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
                className="card card-shine p-4 flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 grid place-items-center text-white shadow-md group-hover:scale-110 transition">
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
            <div className="card p-4">
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
              <p className="text-sm text-[var(--text-soft)] mb-6">We typically reply within a few hours.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold mb-1.5 block">Name</label>
                  <input required className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1.5 block">Email</label>
                  <input required type="email" className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 transition" placeholder="you@example.com" />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold mb-1.5 block">Subject</label>
                <input className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 transition" placeholder="How can we help?" />
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold mb-1.5 block">Message</label>
                <textarea required rows={5} className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:border-[var(--color-brand-500)] focus:ring-2 focus:ring-[var(--color-brand-500)]/20 transition resize-none" placeholder="Tell us what you need..." />
              </div>
              <button type="submit" className="btn-primary mt-5 w-full sm:w-auto justify-center">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </Reveal>

          {/* Map placeholder */}
          <Reveal delay={0.1}>
            <div className="mt-5 card p-2 overflow-hidden">
              <div className="aspect-[16/7] rounded-xl relative bg-gradient-to-br from-blue-500/10 to-emerald-500/10 grid place-items-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto text-[var(--color-brand-500)] mb-2" />
                  <div className="font-semibold">{COMPANY.address}</div>
                  <div className="text-xs text-[var(--text-muted)]">Map integration coming soon</div>
                </div>
                <iframe
                  title="map"
                  className="absolute inset-0 w-full h-full opacity-50"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=79.7%2C6.8%2C80.0%2C7.1&layer=mapnik"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

// =============== PAGE ===============
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
      <Features />
      <Printers />
      <WhyChoose />
      <DownloadSection />
      <PosTrial />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
