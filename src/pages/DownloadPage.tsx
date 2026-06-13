import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Download, Monitor, Cpu, HardDrive, Sparkles,
  Check, Package,
} from "lucide-react";
import { Section, SectionTitle, Eyebrow, Reveal, Counter } from "../components/Primitives";
import { DOWNLOADS, STATS } from "../config";
import { BarcodeMockup } from "../components/Mockups";

const RELEASE_NOTES = [
  { v: "1.4.0", date: "2026-02-04", notes: ["New: Dark mode support", "Improved: 40% faster print queue", "Fix: Zebra ZPL encoding"] },
  { v: "1.3.0", date: "2025-12-10", notes: ["New: QR code logo embedder", "New: Excel template designer", "Fix: CSV delimiter detection"] },
  { v: "1.2.0", date: "2025-09-22", notes: ["New: PDF417 and DataMatrix", "Improved: TSC printer detection", "Fix: Unicode text on Brother QL"] },
];

export default function DownloadPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="blob bg-blue-500 w-[420px] h-[420px] -top-20 -left-20" />
        <div className="blob bg-emerald-500 w-[320px] h-[320px] top-40 right-0" />

        <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Download</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              <span className="text-gradient">FREE</span> Barcode Printer Manager
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-[var(--text-soft)]"
            >
              Professional barcode &amp; label printing software for Windows.
              100% free. No sign-up. No watermarks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 inline-flex flex-wrap items-center gap-3"
            >
              <span className="text-3xl font-display font-bold">{DOWNLOADS.barcodeVersion}</span>
              <span className="text-sm text-[var(--text-muted)]">· {DOWNLOADS.barcodeSize} · Released {DOWNLOADS.barcodeReleased}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href={DOWNLOADS.barcodeInstaller} className="btn-primary !py-4 !px-7 text-base">
                <Download className="w-5 h-5" /> Download Now
              </a>
              <Link to="/screenshots" className="btn-secondary !py-4 !px-6 text-base">
                <Sparkles className="w-4 h-4" /> See Screenshots
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-7 space-y-1.5 text-sm"
            >
              {[
                "Windows 10 / 11 (64-bit)",
                "Installs in under 30 seconds",
                "Includes 25+ label templates",
                "Works offline — no internet needed",
                "Free lifetime updates",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> {t}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <BarcodeMockup />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Quick stats */}
      <Section className="!pt-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="card p-5 text-center card-shine">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-[var(--text-soft)] mt-1">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* System requirements */}
      <Section>
        <Eyebrow>System Requirements</Eyebrow>
        <div className="mt-4">
          <SectionTitle
            title={<>Lightweight. <span className="text-gradient">Runs anywhere.</span></>}
            subtitle="If your PC runs Windows, you can run our software."
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Monitor, t: "OS", v: "Windows 10 / 11" },
            { icon: Cpu, t: "Architecture", v: "64-bit (x64)" },
            { icon: HardDrive, t: "Disk Space", v: "120 MB" },
            { icon: Package, t: "RAM", v: "2 GB minimum" },
          ].map((r, i) => (
            <Reveal key={r.t} delay={i * 0.05}>
              <div className="card card-shine p-5 text-center">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-white mx-auto mb-3">
                  <r.icon className="w-5 h-5" />
                </div>
                <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{r.t}</div>
                <div className="font-display font-bold mt-1">{r.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Release notes */}
      <Section>
        <Eyebrow>Release Notes</Eyebrow>
        <div className="mt-4">
          <SectionTitle title={<>What's <span className="text-gradient">new</span></>} />
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {RELEASE_NOTES.map((r, i) => (
            <Reveal key={r.v} delay={i * 0.05}>
              <div className="card card-shine p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xl font-bold">{r.v}</span>
                    {i === 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/30">
                        LATEST
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">{r.date}</span>
                </div>
                <ul className="space-y-1.5 text-sm text-[var(--text-soft)]">
                  {r.notes.map((n) => (
                    <li key={n} className="flex items-start gap-2">
                      <span className="text-[var(--color-brand-500)] mt-0.5">▸</span> {n}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="rounded-3xl border border-[var(--border)] p-10 sm:p-14 text-center glass">
            <Download className="w-12 h-12 mx-auto text-[var(--color-brand-500)] mb-4" />
            <h3 className="font-display text-3xl sm:text-4xl font-bold">Ready to print like a pro?</h3>
            <p className="mt-3 text-[var(--text-soft)] max-w-xl mx-auto">
              Join 8,400+ businesses that print millions of labels with our free software every month.
            </p>
            <a href={DOWNLOADS.barcodeInstaller} className="btn-primary mt-6 !py-4 !px-8 text-base">
              <Download className="w-5 h-5" /> Download {DOWNLOADS.barcodeVersion}
            </a>
            <p className="mt-4 text-xs text-[var(--text-muted)]">
              By downloading you agree to our <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
