import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "../ThemeContext";
import { COMPANY, DOWNLOADS, NAV } from "../config";
import { cn } from "../utils/cn";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container-x">
          <div
            className={cn(
              "flex items-center justify-between gap-4 rounded-2xl px-4 sm:px-5 py-3 transition-all",
              scrolled
                ? "glass-strong shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]"
                : "bg-transparent"
            )}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg blur-md opacity-60 group-hover:opacity-100 transition" />
                <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Cloud className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-[15px] sm:text-base">
                  {COMPANY.shortName}
                </div>
                <div className="text-[10px] sm:text-[11px] text-[var(--text-muted)] -mt-0.5">
                  Software that just works
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((n) => (
                <NavLink
                  key={n.label}
                  to={n.href}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2 text-sm font-medium rounded-lg transition relative",
                      isActive
                        ? "text-[var(--color-brand-600)]"
                        : "text-[var(--text-soft)] hover:text-[var(--text)]"
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="w-9 h-9 grid place-items-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] hover:scale-105 transition"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex"
                  >
                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </motion.span>
                </AnimatePresence>
              </button>

              <Link
                to="/download"
                className="hidden sm:inline-flex btn-primary !py-2 !px-3.5 text-sm"
              >
                <Download className="w-4 h-4" />
                Download
              </Link>

              <button
                onClick={() => setOpen(true)}
                className="lg:hidden w-9 h-9 grid place-items-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)]"
                aria-label="Menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu"
          >
            <div className="container-x py-6 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 grid place-items-center">
                  <Cloud className="w-4 h-4 text-white" />
                </div>
                <span className="font-display font-bold">{COMPANY.shortName}</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 grid place-items-center rounded-lg border border-[var(--border)]"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05 } },
              }}
              className="container-x flex flex-col gap-2 mt-8"
            >
              {NAV.map((n) => (
                <motion.div
                  key={n.label}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <NavLink
                    to={n.href}
                    className={({ isActive }) =>
                      cn(
                        "block px-4 py-4 text-lg font-semibold rounded-xl border",
                        isActive
                          ? "bg-[var(--color-brand-500)] text-white border-transparent"
                          : "border-[var(--border)] bg-[var(--bg-card)]"
                      )
                    }
                  >
                    {n.label}
                  </NavLink>
                </motion.div>
              ))}
              <a href={DOWNLOADS.barcodeInstaller} className="btn-primary justify-center mt-4">
                <Download className="w-4 h-4" /> Download FREE
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
