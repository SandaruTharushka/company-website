import { motion } from "framer-motion";
import { FileText, Mail, Calendar } from "lucide-react";
import { Section, Eyebrow, Reveal } from "../components/Primitives";
import { COMPANY } from "../config";

export default function TermsPage() {
  return (
    <>
      <div className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="blob bg-emerald-500 w-[400px] h-[400px] -top-20 -right-20" />

        <div className="container-x relative max-w-3xl mx-auto text-center">
          <Eyebrow>Legal</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Terms of <span className="text-gradient">Service</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 flex justify-center gap-4 text-sm text-[var(--text-soft)]"
          >
            <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Last updated: January 12, 2026</span>
            <span className="inline-flex items-center gap-1.5"><FileText className="w-4 h-4" /> Version 2.0</span>
          </motion.div>
        </div>
      </div>

      <Section className="!pt-0">
        <div className="max-w-3xl mx-auto card p-8 sm:p-10 space-y-7 text-[var(--text-soft)] leading-relaxed">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">1. Agreement</h2>
            <p className="mt-2">
              By downloading, installing, or using any software made by {COMPANY.name}
              ("Software"), you agree to be bound by these Terms of Service. If you do not
              agree, please do not use the Software.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">2. License</h2>
            <p className="mt-2">
              <strong>Barcode Printer Manager</strong> is free for both personal and commercial
              use. You may install it on any number of computers.
            </p>
            <p className="mt-2">
              <strong>AutoServ POS</strong> requires a paid license. The 7-day free trial gives
              you full access to all features. After the trial, you must purchase a license to
              continue using the software.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">3. Restrictions</h2>
            <p className="mt-2">You may not:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>Reverse engineer, decompile, or disassemble the Software</li>
              <li>Resell or redistribute the Software as your own product</li>
              <li>Use the Software for any unlawful purpose</li>
              <li>Share your POS license key with users outside your organization</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">4. Refund Policy</h2>
            <p className="mt-2">
              We offer a 14-day money-back guarantee on all POS licenses. If you're not satisfied,
              contact us within 14 days of purchase for a full refund — no questions asked.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">5. Updates</h2>
            <p className="mt-2">
              We may release updates that add features, fix bugs, or improve security. Updates
              are free for the duration of your license.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">6. Disclaimer</h2>
            <p className="mt-2">
              The Software is provided "as is" without warranty of any kind. We are not liable
              for any data loss, business interruption, or consequential damages arising from
              the use of the Software.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">7. Contact</h2>
            <p className="mt-2">
              Questions? Email{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-[var(--color-brand-600)] hover:underline inline-flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {COMPANY.email}
              </a>
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
