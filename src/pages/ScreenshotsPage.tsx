import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Section, Eyebrow, Reveal } from "../components/Primitives";
import { BarcodeMockup, PosMockup } from "../components/Mockups";

type Shot = {
  id: string;
  category: "barcode" | "pos";
  title: string;
  description: string;
  content: React.ReactNode;
};

const SHOTS: Shot[] = [
  {
    id: "barcode-1",
    category: "barcode",
    title: "Generator — Single Label",
    description: "Search any product, pick a barcode type, and print a single label in seconds.",
    content: <BarcodeMockup />,
  },
  {
    id: "barcode-2",
    category: "barcode",
    title: "Products & Inventory",
    description: "Manage your full product catalog with SKUs, barcodes, stock, and supplier info.",
    content: <ProductsMockup />,
  },
  {
    id: "barcode-3",
    category: "barcode",
    title: "Charts & Analytics",
    description: "Visualize stock levels, stock value, and pricing across categories.",
    content: <ChartsMockup />,
  },
  {
    id: "pos-1",
    category: "pos",
    title: "Dashboard",
    description: "See today's revenue, transactions, and best-selling products at a glance.",
    content: <PosMockup />,
  },
  {
    id: "pos-2",
    category: "pos",
    title: "Billing & Checkout",
    description: "Lightning-fast POS with barcode scanning and live cart.",
    content: <BillingMockup />,
  },
  {
    id: "pos-3",
    category: "pos",
    title: "Inventory Management",
    description: "Stock levels, low-stock alerts, and quick stock adjustments.",
    content: <InventoryMockup />,
  },
  {
    id: "pos-4",
    category: "pos",
    title: "Profit Reports",
    description: "Full revenue vs. cost analysis across product sales and service jobs.",
    content: <ProfitMockup />,
  },
];

function ProductsMockup() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white text-slate-800 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200 bg-slate-50">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 text-[10px] font-semibold text-slate-600">Products</div>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { l: "Total Products", v: "12", c: "bg-slate-50" },
            { l: "Total Stock", v: "1,840", c: "bg-slate-50" },
            { l: "Categories", v: "9", c: "bg-slate-50" },
            { l: "Stock Value", v: "LKR 24k", c: "bg-slate-50" },
          ].map((k) => (
            <div key={k.l} className={`rounded-lg p-2 ${k.c}`}>
              <div className="text-[8px] text-slate-500">{k.l}</div>
              <div className="text-sm font-bold">{k.v}</div>
            </div>
          ))}
        </div>
        <table className="w-full text-[9px]">
          <thead>
            <tr className="text-left text-slate-500 uppercase">
              <th className="pb-1.5">Product</th>
              <th>SKU</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { p: "Engine Oil Filter", s: "OIL-FLT-001", st: "150", pr: "LKR 12.99" },
              { p: "Brake Pad Set", s: "BRK-PAD-F01", st: "80", pr: "LKR 45.50" },
              { p: "Spark Plug NGK", s: "SPK-NGK-001", st: "320", pr: "LKR 8.75" },
              { p: "Air Filter K&N", s: "AIR-KN-001", st: "65", pr: "LKR 28.00" },
            ].map((r) => (
              <tr key={r.p}>
                <td className="py-1.5 font-semibold">{r.p}</td>
                <td className="font-mono text-slate-500">{r.s}</td>
                <td className="text-emerald-600 font-bold">{r.st}</td>
                <td className="font-bold">{r.pr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ChartsMockup() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white text-slate-800 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200 bg-slate-50">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 text-[10px] font-semibold text-slate-600">Charts</div>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { l: "Total Products", v: "12", c: "from-blue-500 to-indigo-600" },
            { l: "Stock Value", v: "LKR 24,556", c: "from-purple-500 to-fuchsia-600" },
            { l: "Total Stock", v: "1,840", c: "from-emerald-500 to-teal-600" },
            { l: "Low Stock", v: "1", c: "from-amber-500 to-orange-600" },
          ].map((k) => (
            <div key={k.l} className={`rounded-lg p-2 text-white bg-gradient-to-br ${k.c}`}>
              <div className="text-[8px] opacity-90">{k.l}</div>
              <div className="text-sm font-bold">{k.v}</div>
            </div>
          ))}
        </div>
        <div className="text-[10px] font-semibold mb-1">Stock by Product</div>
        <svg viewBox="0 0 100 40" className="w-full h-16">
          {[14, 18, 14, 22, 16, 30, 35, 20, 12, 10, 8, 6].map((h, i) => (
            <rect key={i} x={i * 8 + 1} y={40 - h} width={6} height={h} rx={1} fill={
              ["#6366f1","#a855f7","#06b6d4","#10b981","#f59e0b","#ef4444","#ec4899","#14b8a6","#f97316","#84cc16","#3b82f6","#d946ef"][i]
            } />
          ))}
        </svg>
      </div>
    </div>
  );
}

function BillingMockup() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white text-slate-800 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200 bg-slate-50">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 text-[10px] font-semibold text-slate-600">Billing &amp; Checkout</div>
      </div>
      <div className="flex">
        <div className="flex-1 p-3">
          <div className="border border-slate-200 rounded-md px-2 py-1.5 text-[9px] text-slate-400 mb-2">🔍 Scan barcode or type code…</div>
          <div className="grid grid-cols-4 gap-1.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border border-slate-200 rounded-md p-1.5">
                <div className="aspect-square bg-slate-100 rounded mb-1 grid place-items-center text-[10px]">📦</div>
                <div className="text-[8px] font-semibold">PART {i + 1}</div>
                <div className="text-[8px] text-indigo-600 font-bold">LKR {1200 + i * 80}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-32 sm:w-44 border-l border-slate-200 p-2 bg-slate-50">
          <div className="text-[10px] font-bold mb-1.5">Current Order (1)</div>
          <div className="border border-indigo-200 bg-indigo-50 rounded-md p-1.5 mb-2">
            <div className="flex justify-between text-[8px]">
              <span className="font-semibold">CAM SHAFT</span>
              <span className="font-bold">LKR 1,230</span>
            </div>
          </div>
          <div className="text-[8px] space-y-0.5 mb-2">
            <div className="flex justify-between"><span>Subtotal</span><span>1,230.00</span></div>
            <div className="flex justify-between font-bold border-t pt-1"><span>TOTAL</span><span>LKR 1,230</span></div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-[9px] font-bold rounded-md py-1.5 text-center">
            💳 Process Payment
          </div>
        </div>
      </div>
    </div>
  );
}

function InventoryMockup() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white text-slate-800 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200 bg-slate-50">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 text-[10px] font-semibold text-slate-600">Inventory Management</div>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { l: "TOTAL SKUS", v: "58", c: "bg-slate-50" },
            { l: "TOTAL UNITS", v: "637", c: "bg-emerald-50", vc: "text-emerald-600" },
            { l: "INV. VALUE", v: "LKR 972k", c: "bg-purple-50", vc: "text-purple-600" },
            { l: "LOW ALERTS", v: "10", c: "bg-rose-50", vc: "text-rose-600" },
          ].map((k) => (
            <div key={k.l} className={`rounded-lg p-2 ${k.c}`}>
              <div className="text-[8px] text-slate-500">{k.l}</div>
              <div className={`text-sm font-bold ${k.vc || ""}`}>{k.v}</div>
            </div>
          ))}
        </div>
        <table className="w-full text-[9px]">
          <thead>
            <tr className="text-left text-slate-500 uppercase">
              <th className="pb-1">Product</th>
              <th>Stock</th>
              <th>Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { p: "SHORT PIN", s: "9.0", status: "Good", col: "text-emerald-600" },
              { p: "CRANKSHAFT", s: "0.0", status: "Low", col: "text-rose-600" },
              { p: "REAR DOOR", s: "2.0", status: "Low", col: "text-rose-600" },
              { p: "ROCKER ARM", s: "10.0", status: "Good", col: "text-emerald-600" },
            ].map((r, i) => (
              <tr key={i}>
                <td className="py-1 font-semibold">{r.p}</td>
                <td className={r.s === "0.0" ? "text-rose-600 font-bold" : ""}>{r.s}</td>
                <td>
                  <div className="w-16 h-1.5 bg-slate-200 rounded">
                    <div className={`h-full rounded ${r.status === "Low" ? "bg-rose-500" : "bg-emerald-500"}`} style={{ width: r.status === "Low" ? "5%" : "70%" }} />
                  </div>
                </td>
                <td className={`${r.col} font-bold`}>{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProfitMockup() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white text-slate-800 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200 bg-slate-50">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 text-[10px] font-semibold text-slate-600">Profit Report</div>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { l: "Combined Rev.", v: "LKR 87,390", c: "from-blue-500 to-indigo-600" },
            { l: "Gross Profit", v: "LKR 27,130", c: "from-emerald-500 to-teal-600" },
            { l: "Outstanding", v: "LKR 0", c: "from-rose-500 to-pink-600" },
          ].map((k) => (
            <div key={k.l} className={`rounded-lg p-2 text-white bg-gradient-to-br ${k.c}`}>
              <div className="text-[8px] opacity-90">{k.l}</div>
              <div className="text-[11px] font-bold">{k.v}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 space-y-1.5">
            <div className="bg-slate-50 rounded-md px-2 py-1 flex justify-between text-[9px]">
              <span>Sales Revenue</span>
              <span className="font-bold">LKR 87,390</span>
            </div>
            <div className="bg-rose-50 rounded-md px-2 py-1 flex justify-between text-[9px]">
              <span>Product Cost</span>
              <span className="font-bold text-rose-600">LKR 60,260</span>
            </div>
            <div className="bg-emerald-50 rounded-md px-2 py-1 flex justify-between text-[9px]">
              <span>Gross Profit</span>
              <span className="font-bold text-emerald-600">LKR 27,130</span>
            </div>
          </div>
          <svg viewBox="0 0 36 36" className="w-24 h-24 flex-shrink-0">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="6" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#6366f1" strokeWidth="6" strokeDasharray="55 88" transform="rotate(-90 18 18)" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="#f43f5e" strokeWidth="6" strokeDasharray="33 88" strokeDashoffset="-55" transform="rotate(-90 18 18)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ScreenshotsPage() {
  const [tab, setTab] = useState<"all" | "barcode" | "pos">("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = tab === "all" ? SHOTS : SHOTS.filter((s) => s.category === tab);

  const openNext = () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
  const openPrev = () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <>
      <div className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="blob bg-blue-500 w-[420px] h-[420px] -top-20 -left-20" />
        <div className="blob bg-emerald-500 w-[320px] h-[320px] top-40 right-0" />

        <div className="container-x relative text-center max-w-3xl mx-auto">
          <Eyebrow>Screenshots</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            A peek inside <span className="text-gradient">our software</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-lg text-[var(--text-soft)]"
          >
            Beautiful on the outside, lightning fast on the inside.
          </motion.p>
        </div>
      </div>

      <Section className="!pt-0">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="glass rounded-full p-1 inline-flex">
            {[
              { id: "all", l: "All" },
              { id: "barcode", l: "Barcode Manager" },
              { id: "pos", l: "AutoServ POS" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as any)}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition ${
                  tab === t.id
                    ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow"
                    : "text-[var(--text-soft)] hover:text-[var(--text)]"
                }`}
              >
                {t.l}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <button
                onClick={() => setLightbox(i)}
                className="card card-shine group text-left w-full overflow-hidden"
              >
                <div className="p-3 pb-2 bg-slate-50 dark:bg-slate-900/40">
                  {s.content}
                </div>
                <div className="p-4 flex items-start justify-between gap-2">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-brand-600)]">{s.category === "barcode" ? "Barcode Manager" : "AutoServ POS"}</div>
                    <div className="font-semibold mt-0.5">{s.title}</div>
                    <div className="text-xs text-[var(--text-soft)] mt-1">{s.description}</div>
                  </div>
                  <ZoomIn className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--color-brand-500)] group-hover:scale-125 transition flex-shrink-0 mt-1" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="lightbox-backdrop"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); openPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); openNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={filtered[lightbox].id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                {filtered[lightbox].content}
              </div>
              <div className="mt-4 text-white text-center">
                <div className="text-xs uppercase tracking-widest text-white/60">{filtered[lightbox].category === "barcode" ? "Barcode Manager" : "AutoServ POS"}</div>
                <div className="text-xl font-display font-bold mt-1">{filtered[lightbox].title}</div>
                <div className="text-sm text-white/70 mt-1">{filtered[lightbox].description}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
