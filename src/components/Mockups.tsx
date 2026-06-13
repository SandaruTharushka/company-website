// SVG-based app mockups used in the hero/screenshots section.
// They visually echo the real Barcode Manager + AutoServ POS screenshots
// provided, but rendered as inline SVG so we don't need external images.

import { motion } from "framer-motion";

export function BarcodeMockup() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white text-slate-800 shadow-2xl overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200 bg-slate-50">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 text-[10px] font-semibold text-slate-600">
          Barcode & Label Generator
        </div>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-32 sm:w-40 bg-slate-50 border-r border-slate-200 p-2 hidden sm:block">
          <div className="px-2 py-1.5 mb-1 rounded-md bg-indigo-600 text-white">
            <div className="text-[10px] font-semibold">Generator</div>
            <div className="text-[8px] opacity-80">Single label</div>
          </div>
          {["Batch Print", "History", "Products", "Charts", "Settings"].map((t, i) => (
            <div key={t} className="px-2 py-1.5 mb-1">
              <div className="text-[10px] font-semibold text-slate-700">{t}</div>
              <div className="text-[8px] text-slate-400">Menu item {i + 2}</div>
            </div>
          ))}
        </aside>

        {/* Content */}
        <div className="flex-1 p-3">
          <div className="text-[12px] font-bold mb-1">Generator</div>
          <div className="text-[9px] text-slate-500 mb-3">
            Generate barcodes &amp; QR codes, preview and print labels
          </div>

          <div className="border border-slate-200 rounded-lg p-2 mb-2">
            <div className="text-[10px] font-semibold mb-1.5">1. Search Product</div>
            <div className="border border-slate-200 rounded-md px-2 py-1 text-[9px] text-slate-400">
              🔍 Search by name, barcode, or SKU…
            </div>
            <div className="mt-1.5 p-1.5 border border-indigo-200 rounded-md bg-indigo-50/50 flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-md bg-indigo-600 grid place-items-center text-white text-[8px] font-bold">📦</div>
              <div className="flex-1">
                <div className="text-[9px] font-bold">Engine Oil Filter</div>
                <div className="text-[7.5px] text-slate-500">Engine Parts</div>
              </div>
              <div className="text-right text-[8px]">
                <div className="text-emerald-600 font-bold">LKR 12.99</div>
                <div className="text-slate-400">150 in stock</div>
              </div>
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg p-2">
            <div className="text-[10px] font-semibold mb-1.5">2. Barcode / QR Type</div>
            <div className="grid grid-cols-3 gap-1.5">
              {["CODE128", "EAN13", "QR Code"].map((t, i) => (
                <div
                  key={t}
                  className={`rounded-md border p-1.5 text-center ${i === 0 ? "border-indigo-500 bg-indigo-50" : "border-slate-200"}`}
                >
                  <div className="text-[9px] font-bold">{t}</div>
                  <div className="text-[7.5px] text-slate-500">
                    {i === 0 ? "Alphanumeric" : i === 1 ? "13-digit retail" : "Smartphone"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="w-28 sm:w-40 border-l border-slate-200 p-2 bg-slate-50 hidden md:block">
          <div className="flex items-center justify-between mb-1.5">
            <div className="text-[9px] font-bold">Label Preview</div>
            <div className="text-[8px] text-slate-500">50×25mm</div>
          </div>
          <div className="bg-white rounded-md p-2 border border-slate-200 text-center">
            <div className="text-[7px] font-bold mb-0.5">Engine Oil Filter</div>
            <div className="text-[6px] text-slate-500 mb-1">AutoFlow Distributors</div>
            <div className="flex justify-center">
              <svg viewBox="0 0 80 32" className="w-full h-8">
                {Array.from({ length: 28 }).map((_, i) => (
                  <rect
                    key={i}
                    x={i * 2.6}
                    y={2}
                    width={i % 3 === 0 ? 2 : 1}
                    height={28}
                    fill="#0f172a"
                  />
                ))}
              </svg>
            </div>
            <div className="text-[7px] font-mono mt-0.5">8887191411001</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PosMockup() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white text-slate-800 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200 bg-slate-50">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <div className="ml-3 text-[10px] font-semibold text-slate-600">AutoServ POS — Dashboard</div>
      </div>
      <div className="flex">
        <aside className="w-24 sm:w-32 bg-slate-50 border-r border-slate-200 p-2 hidden sm:block">
          <div className="px-2 py-1.5 mb-1 rounded-md bg-indigo-600 text-white">
            <div className="text-[9px] font-semibold">📊 Dashboard</div>
          </div>
          {["🧾 Billing", "🔧 Service Jobs", "📦 Parts", "🏭 Inventory", "👥 Customers", "🚗 Vehicles"].map((t) => (
            <div key={t} className="px-2 py-1.5 mb-1 text-[9px] text-slate-700">{t}</div>
          ))}
        </aside>
        <div className="flex-1 p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[12px] font-bold">📊 Dashboard</div>
            <div className="text-[8px] text-slate-500">Sat, June 13, 2026</div>
          </div>
          <div className="grid grid-cols-4 gap-1.5 mb-2">
            {[
              { l: "TODAY REV.", v: "87,390", c: "from-blue-500 to-indigo-600" },
              { l: "TRANSACTIONS", v: "4", c: "from-emerald-500 to-teal-600" },
              { l: "PRODUCTS", v: "58", c: "from-purple-500 to-fuchsia-600" },
              { l: "AVG BASKET", v: "21,848", c: "from-pink-500 to-rose-600" },
            ].map((k) => (
              <div key={k.l} className={`rounded-md p-1.5 text-white bg-gradient-to-br ${k.c}`}>
                <div className="text-[6.5px] font-semibold opacity-90">{k.l}</div>
                <div className="text-[10px] font-bold">LKR {k.v}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-slate-200 rounded-md p-2">
              <div className="text-[9px] font-semibold mb-1">📈 Weekly Sales</div>
              <svg viewBox="0 0 100 40" className="w-full h-12">
                {[12, 18, 14, 22, 16, 30, 35].map((h, i) => (
                  <rect key={i} x={i * 13 + 4} y={40 - h} width={8} height={h} rx={1} fill="#6366f1" />
                ))}
              </svg>
            </div>
            <div className="border border-slate-200 rounded-md p-2">
              <div className="text-[9px] font-semibold mb-1">🧾 Recent</div>
              {[
                { id: "INV-…0004", p: "10,380" },
                { id: "INV-…0003", p: "35,300" },
                { id: "INV-…0002", p: "20,120" },
              ].map((r) => (
                <div key={r.id} className="flex items-center justify-between text-[8px] py-0.5">
                  <span className="font-mono">{r.id}</span>
                  <span className="font-bold">LKR {r.p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockupFloat({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
