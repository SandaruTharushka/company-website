import { Link } from "react-router-dom";
import { Cloud, Mail, Phone, MapPin, MessageCircle, Heart } from "lucide-react";
import { GithubIcon, WhatsAppIcon } from "./BrandIcons";
import { COMPANY } from "../config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 border-t border-[var(--border)]">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="container-x py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 grid place-items-center shadow-lg">
                <Cloud className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display font-bold text-lg">{COMPANY.name}</div>
                <div className="text-xs text-[var(--text-muted)]">Crafting Software. Empowering Business.</div>
              </div>
            </div>
            <p className="text-sm text-[var(--text-soft)] max-w-md leading-relaxed">
              We build premium Windows tools and POS systems for modern businesses.
              Fast, reliable, and beautifully designed — crafted with care in {COMPANY.address}.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:scale-105 transition"
              >
                <Mail className="w-3.5 h-3.5" /> {COMPANY.email}
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}`}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:scale-105 transition"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-500" /> WhatsApp
              </a>
              <a
                href={COMPANY.github}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:scale-105 transition"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-[var(--text-soft)] hover:text-[var(--color-brand-600)] transition">Home</Link></li>
              <li><Link to="/#products" className="text-[var(--text-soft)] hover:text-[var(--color-brand-600)] transition">Products</Link></li>
              <li><Link to="/features" className="text-[var(--text-soft)] hover:text-[var(--color-brand-600)] transition">Features</Link></li>
              <li><Link to="/screenshots" className="text-[var(--text-soft)] hover:text-[var(--color-brand-600)] transition">Screenshots</Link></li>
              <li><Link to="/contact" className="text-[var(--text-soft)] hover:text-[var(--color-brand-600)] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h4 className="font-display font-semibold mb-4">Downloads</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/download" className="text-[var(--text-soft)] hover:text-[var(--color-brand-600)] transition">Barcode Manager</Link></li>
              <li><Link to="/pos" className="text-[var(--text-soft)] hover:text-[var(--color-brand-600)] transition">POS Trial</Link></li>
              <li><Link to="/privacy" className="text-[var(--text-soft)] hover:text-[var(--color-brand-600)] transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-[var(--text-soft)] hover:text-[var(--color-brand-600)] transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 justify-center">
            <span>© {year} {COMPANY.name}. All rights reserved.</span>
            <span className="hidden md:inline">·</span>
            <span className="inline-flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> in {COMPANY.address}
            </span>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5"><Phone className="w-3 h-3" /> {COMPANY.phone}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {COMPANY.address}</span>
            <span className="inline-flex items-center gap-1.5"><MessageCircle className="w-3 h-3" /> {COMPANY.whatsapp}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
