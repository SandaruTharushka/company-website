import { motion } from "framer-motion";
import {
  BarChart3, QrCode, Layers, Printer, Eye, FileSpreadsheet, RefreshCw, Sparkles,
  Receipt, Package, Smartphone, Wrench, Users, Truck, Wallet, PieChart,
  ShieldCheck, Zap, Globe, Headphones, Award, Download,
} from "lucide-react";
import { Section, SectionTitle, Eyebrow, Reveal } from "../components/Primitives";
import { DOWNLOADS } from "../config";

const BARCODE_FEATURES = [
  { icon: BarChart3, t: "1D & 2D Barcodes", d: "Full support for EAN-13, EAN-8, UPC-A, UPC-E, CODE-128, CODE-39, ITF, CODABAR, plus 2D formats QR, DataMatrix, PDF417, Aztec.", c: "from-blue-500 to-indigo-600" },
  { icon: QrCode, t: "QR Code Generator", d: "Generate QR codes with embedded logos, custom colors, and adjustable error correction. Scannable by every smartphone.", c: "from-purple-500 to-fuchsia-600" },
  { icon: Layers, t: "Custom Templates", d: "Drag-and-drop designer with rulers, snap guides, and a rich library of pre-built templates. Unlimited custom layouts.", c: "from-pink-500 to-rose-600" },
  { icon: Printer, t: "60+ Printers", d: "Native drivers for Zebra (ZPL), Xprinter, TSC, Brother QL, Citizen, Argox, Gprinter, Godex, Honeywell, Bixolon and more.", c: "from-emerald-500 to-teal-600" },
  { icon: Eye, t: "Live Print Preview", d: "WYSIWYG preview with millimeter-perfect accuracy. No more wasted labels.", c: "from-amber-500 to-orange-600" },
  { icon: FileSpreadsheet, t: "Bulk Import", d: "Import thousands of rows from Excel or CSV. Map fields, auto-generate barcodes, print in one click.", c: "from-cyan-500 to-blue-600" },
  { icon: RefreshCw, t: "Free Updates", d: "New features and printer support added automatically. Always up to date.", c: "from-violet-500 to-purple-600" },
  { icon: Sparkles, t: "Modern UI", d: "A clean, glassy, dark-mode-ready interface that feels right at home on Windows 11.", c: "from-rose-500 to-pink-600" },
];

const POS_FEATURES = [
  { icon: Receipt, t: "Fast Billing", d: "Scan barcode, type product code, or pick from grid — checkout in seconds. Built-in receipt printer support.", c: "from-emerald-500 to-teal-600" },
  { icon: Package, t: "Smart Inventory", d: "Track stock across locations with low-stock alerts, batch numbers, expiry dates and supplier linking.", c: "from-blue-500 to-indigo-600" },
  { icon: Smartphone, t: "IMEI / Serial", d: "Track every device by serial or IMEI number. Perfect for mobile phone shops and electronics stores.", c: "from-purple-500 to-fuchsia-600" },
  { icon: Wrench, t: "Service Job Cards", d: "Open, assign, track and close service jobs. Add parts, labor, and customer updates in one place.", c: "from-amber-500 to-orange-600" },
  { icon: Users, t: "Customer CRM", d: "Full customer profiles with purchase history, credit balances, contact details, and SMS / WhatsApp integration.", c: "from-pink-500 to-rose-600" },
  { icon: Truck, t: "Suppliers & POs", d: "Manage purchase orders, goods received notes (GRN), supplier ledgers, and payments.", c: "from-cyan-500 to-blue-600" },
  { icon: Wallet, t: "Expenses", d: "Track every business expense with categories, receipts, and approval workflow.", c: "from-violet-500 to-purple-600" },
  { icon: PieChart, t: "Reports & Analytics", d: "Daily sales, profit, tax, best sellers, slow movers, customer trends — all in beautiful charts.", c: "from-rose-500 to-pink-600" },
];

const PERKS = [
  { icon: ShieldCheck, t: "Secure by design", d: "Local-first data, encrypted backups, role-based access." },
  { icon: Zap, t: "Blazing fast", d: "Built with native Windows APIs for instant response." },
  { icon: Globe, t: "Multilingual", d: "English, Sinhala, Tamil. More on the way." },
  { icon: Headphones, t: "Real support", d: "Talk to a real human within 24 hours — guaranteed." },
  { icon: Award, t: "Pro polish", d: "Pixel-perfect, award-worthy UI on every screen." },
  { icon: Download, t: "Always free updates", d: "Pay once, get every future update at no extra cost." },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="blob bg-blue-500 w-[420px] h-[420px] -top-20 -left-20" />
        <div className="blob bg-purple-500 w-[320px] h-[320px] top-40 right-0" />

        <div className="container-x relative text-center max-w-3xl mx-auto">
          <Eyebrow>Features</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Every feature you need. <br />
            <span className="text-gradient">None that you don't.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg text-[var(--text-soft)]"
          >
            Crafted with obsessive attention to detail, our software is the perfect balance
            of power, simplicity, and beauty.
          </motion.p>
        </div>
      </div>

      {/* Barcode Features */}
      <Section>
        <Eyebrow>Barcode Manager</Eyebrow>
        <div className="mt-4">
          <SectionTitle
            title={<>The <span className="text-gradient">fastest</span> way to print labels</>}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BARCODE_FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.04}>
              <div className="card card-shine p-5 h-full group">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.c} grid place-items-center text-white shadow-md mb-4 group-hover:scale-110 transition`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold mb-1.5">{f.t}</h4>
                <p className="text-sm text-[var(--text-soft)] leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* POS Features */}
      <Section>
        <Eyebrow>AutoServ POS</Eyebrow>
        <div className="mt-4">
          <SectionTitle
            title={<>Run your business like a <span className="text-gradient">pro</span></>}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {POS_FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.04}>
              <div className="card card-shine p-5 h-full group">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.c} grid place-items-center text-white shadow-md mb-4 group-hover:scale-110 transition`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold mb-1.5">{f.t}</h4>
                <p className="text-sm text-[var(--text-soft)] leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Perks */}
      <Section>
        <Eyebrow>The Extras</Eyebrow>
        <div className="mt-4">
          <SectionTitle
            title={<>Small details. <span className="text-gradient">Big difference.</span></>}
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PERKS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="card card-shine p-5 flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-brand-500)]/10 grid place-items-center text-[var(--color-brand-600)] flex-shrink-0 group-hover:scale-110 transition">
                  <p.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">{p.t}</div>
                  <div className="text-sm text-[var(--text-soft)] mt-0.5">{p.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="rounded-3xl border border-[var(--border)] p-10 sm:p-14 text-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white shadow-2xl">
            <h3 className="font-display text-3xl sm:text-4xl font-bold">Try it for yourself</h3>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              Both products are available to download right now. The barcode manager is free forever, the POS comes with a 7-day free trial.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={DOWNLOADS.barcodeInstaller} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold hover:scale-105 transition shadow-xl">
                <Download className="w-4 h-4" /> Download Barcode Manager
              </a>
              <a href={DOWNLOADS.posInstaller} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white font-semibold hover:bg-white/20 transition">
                <Download className="w-4 h-4" /> Download POS Trial
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
