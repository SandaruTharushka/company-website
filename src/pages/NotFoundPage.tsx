import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cloud, Home, ArrowLeft } from "lucide-react";
import { COMPANY } from "../config";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen grid place-items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="blob bg-blue-500 w-[400px] h-[400px] -top-20 -left-20" />
      <div className="blob bg-emerald-500 w-[400px] h-[400px] bottom-0 right-0" />

      <div className="container-x relative text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 grid place-items-center shadow-lg">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <div className="font-display font-bold text-xl">{COMPANY.name}</div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
          className="font-display text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight"
        >
          <span className="text-gradient">404</span>
        </motion.h1>
        <motion.h2
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="font-display text-2xl sm:text-3xl font-bold mt-2"
        >
          Page not found
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
          className="mt-3 text-[var(--text-soft)] max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-7 flex flex-wrap justify-center gap-3"
        >
          <Link to="/" className="btn-primary">
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <button onClick={() => history.back()} className="btn-secondary">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
