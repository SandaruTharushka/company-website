import { motion } from "framer-motion";
import { ShieldCheck, Mail, Calendar } from "lucide-react";
import { Section, Eyebrow, Reveal } from "../components/Primitives";
import { COMPANY } from "../config";

export default function PrivacyPage() {
  return (
    <>
      <div className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="blob bg-blue-500 w-[400px] h-[400px] -top-20 -left-20" />

        <div className="container-x relative max-w-3xl mx-auto text-center">
          <Eyebrow>Legal</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          >
            Privacy <span className="text-gradient">Policy</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="mt-5 flex justify-center gap-4 text-sm text-[var(--text-soft)]"
          >
            <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Last updated: January 12, 2026</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> GDPR Compliant</span>
          </motion.div>
        </div>
      </div>

      <Section className="!pt-0">
        <div className="max-w-3xl mx-auto card p-8 sm:p-10 space-y-7 text-[var(--text-soft)] leading-relaxed">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">1. Introduction</h2>
            <p className="mt-2">
              At {COMPANY.name} ("we", "our", "us"), we respect your privacy and are committed to
              protecting your personal data. This privacy policy explains how we collect, use, and
              safeguard your information when you use our software or visit our website.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">2. Data We Collect</h2>
            <p className="mt-2">
              Our software is <strong>local-first</strong> by design. This means most of your data
              (products, sales, customer records) never leaves your computer. The only data we
              collect is:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>Optional: anonymous usage statistics (you can opt out anytime)</li>
              <li>Optional: email address if you sign up for updates or support</li>
              <li>Optional: payment information when purchasing a license (processed by secure third parties)</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">3. How We Use Your Data</h2>
            <p className="mt-2">We use the limited data we collect only to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>Provide software updates and security patches</li>
              <li>Respond to support requests</li>
              <li>Process license purchases</li>
              <li>Send product news (only if you opt in)</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">4. Data Security</h2>
            <p className="mt-2">
              We use industry-standard encryption (AES-256, TLS 1.3) to protect data in transit
              and at rest. Your local data is stored on your computer — we never have access to it.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">5. Your Rights</h2>
            <p className="mt-2">You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-bold text-[var(--text)]">6. Contact</h2>
            <p className="mt-2">
              For any privacy questions, email us at{" "}
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
