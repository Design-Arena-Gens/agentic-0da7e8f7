'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const statisticCards = [
  { label: "clinician-drivers", value: "9,600+", description: "Licensed nurses & EMT ride partners" },
  { label: "health-systems", value: "180+", description: "Integrated hospital & payer contracts" },
  { label: "patient-nps", value: "74", description: "Net Promoter Score from patient surveys" }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary-500/30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_45%)]" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pb-20 pt-24 text-center lg:pb-32 lg:pt-32">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="tag"
        >
          HIPAA-ready dispatch + clinical-grade transportation
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Uber-fast rides with{" "}
          <span className="gradient-text">medical oversight engineered for value-based care.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl text-lg text-slate-200"
        >
          CareRide dispatches credentialed clinicians to patients within minutes, synchronizing
          transportation, telehealth triage, and electronic health record data into a unified network
          command center.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-400"
          >
            Request a clinician <span aria-hidden="true" className="ml-2">→</span>
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40"
          >
            Watch 2-min platform demo
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="grid w-full grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-3"
        >
          {statisticCards.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center border-white/5 md:border-r last:border-none">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <p className="mt-1 text-sm text-slate-200">{stat.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
