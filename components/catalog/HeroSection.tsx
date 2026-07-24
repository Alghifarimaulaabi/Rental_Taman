"use client";

import { motion } from "motion/react";
import { Leaf, Sparkles, ShieldCheck, Sprout, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-[#0A2E1D] to-[#082216] pt-12 pb-20 md:pt-16 md:pb-24 text-white shadow-xl">
      {/* Decorative Background Effects & Ambient Light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-500/5 blur-[90px]" />

        {/* Floating Geometric / Botanical Accent SVG Elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-12 hidden lg:block opacity-20 text-emerald-400"
        >
          <Leaf className="w-40 h-40" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 hidden lg:block opacity-15 text-emerald-300"
        >
          <Sprout className="w-32 h-32" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 border border-emerald-500/30 px-4 py-1.5 backdrop-blur-md mb-6 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-200">
              Luxury Botanical Collection
            </span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Koleksi Tanaman <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-200 via-amber-200 to-emerald-400 bg-clip-text text-transparent italic">
              Eksklusif & Segar
            </span>
          </motion.h1>

          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-emerald-100/80 leading-relaxed max-w-2xl mx-auto font-sans-body"
          >
            Pilihan tanaman hias indoor & outdoor premium terlengkap untuk menghidupkan suasana kantor, hotel, event, dan hunian Anda. Bebas repot dengan jaminan pemeliharaan berkala.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-emerald-800/40 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2.5 text-xs font-medium text-emerald-200">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-800/60 text-emerald-300">
                <Leaf className="h-4 w-4" />
              </div>
              <span>100% Tanaman Sehat Segar</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 text-xs font-medium text-emerald-200">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-800/60 text-amber-300">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span>Garansi Ganti Baru</span>
            </div>

            <div className="flex items-center justify-center gap-2.5 text-xs font-medium text-emerald-200">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-800/60 text-emerald-300">
                <Award className="h-4 w-4" />
              </div>
              <span>Perawatan Botanis Ahli</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
