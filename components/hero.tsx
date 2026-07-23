"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Sprout,
  Star,
  CheckCircle2,
  Calendar,
  Building2,
  PartyPopper,
  Home,
  UtensilsCrossed,
  Leaf,
  Flower2,
  ChevronRight,
} from "lucide-react";

const categoryTabs = [
  {
    id: "corporate",
    label: "Corporate & Kantor",
    icon: Building2,
    desc: "Sewa tanaman hias indoor berkala untuk meningkatkan estetika & produktivitas kantor.",
    perks: ["Rotasi Tanaman Bulanan", "Perawatan Harian Gratis", "Pot Eksklusif Minimalis"],
  },
  {
    id: "wedding",
    label: "Pernikahan & Event",
    icon: PartyPopper,
    desc: "Konsep taman lanskap temporer yang megah & instagrammable untuk hari bahagia Anda.",
    perks: ["Instalasi H-1 Event", "Tim Design Standby", "Bunga & Tanaman Fresh"],
  },
  {
    id: "residence",
    label: "Residensi Mewah",
    icon: Home,
    desc: "Sentuhan tropis elegan untuk vila, penthouse, dan rumah tinggal kelas atas.",
    perks: ["Konsultasi Fengshui & Layout", "Garansi Ganti Baru", "Bebas Repot Hama"],
  },
  {
    id: "hospitality",
    label: "Hotel & Resto",
    icon: UtensilsCrossed,
    desc: "Suasana alam yang menenangkan untuk memanjakan setiap tamu restaurant & hotel.",
    perks: ["Skema Rental Fleksibel", "Maintenance Hening", "Tanaman Tropis & Impor"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState("corporate");
  const selectedCategory = categoryTabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden px-4 py-8 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-center">
      {/* Background Decorative Ambient Blobs & Organic Shapes */}
      <div className="pointer-events-none absolute left-1/4 top-10 -z-10 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute right-10 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[100px] animate-pulse-glow" />
      <div className="pointer-events-none absolute left-10 bottom-10 -z-10 h-72 w-72 rounded-full bg-amber-200/30 blur-2xl" />

      {/* Floating Organic Leaf SVGs */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-6 top-16 z-0 text-emerald-800/15 hidden lg:block"
      >
        <Leaf className="h-24 w-24 -rotate-12" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -1.5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-12 bottom-20 z-0 text-emerald-900/10 hidden lg:block"
      >
        <Flower2 className="h-32 w-32 rotate-45" />
      </motion.div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
        {/* ================= LEFT COLUMN: TYPOGRAPHY & INTERACTIVE CONTROLS (7 Cols) ================= */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="flex flex-col items-start gap-6 lg:col-span-7"
        >
          {/* Top Status Pill Badge */}
          <motion.div variants={fadeUpVariants}>
            <div className="inline-flex items-center gap-2.5 rounded-full glass-panel px-4 py-2 text-xs font-semibold text-emerald-950 shadow-sm ring-1 ring-emerald-900/10 hover:ring-emerald-900/20 transition-all">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
              </span>
              <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
              <span className="tracking-wide">ALIZA DECORATION • GARDEN RENTAL</span>
            </div>
          </motion.div>

          {/* Large Typography Headline */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl xl:text-[3.65rem] leading-[1.12]"
          >
            Sentuhan{" "}
            <span className="relative inline-block font-serif-display italic font-normal text-emerald-800 underline decoration-emerald-400/40 underline-offset-8">
              Kemewahan Alam
            </span>{" "}
            untuk Setiap Ruang & Event
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            variants={fadeUpVariants}
            className="max-w-2xl text-base sm:text-lg leading-relaxed text-emerald-900/75 font-normal"
          >
            Hadirkan keasrian tanaman hias tropis & dekorasi taman berkelas tanpa beban biaya beli dan ribetnya perawatan. Bebas ganti tanaman kapan saja, 100% dirawat oleh tim ahli botanis kami.
          </motion.p>

          {/* Interactive Category Selector Tabs */}
          <motion.div variants={fadeUpVariants} className="w-full pt-1">
            <div className="flex flex-wrap gap-2 rounded-2xl glass-panel p-1.5 shadow-sm border border-emerald-900/10">
              {categoryTabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-900 text-emerald-50 shadow-md shadow-emerald-950/20 scale-[1.02]"
                        : "text-emerald-900/70 hover:bg-emerald-900/5 hover:text-emerald-950"
                    }`}
                  >
                    <IconComponent className={`h-3.5 w-3.5 ${isActive ? "text-emerald-300" : "text-emerald-700"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Category Feature Card */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 rounded-2xl bg-emerald-900/5 p-4 border border-emerald-900/10 text-xs"
            >
              <p className="font-medium text-emerald-950 mb-2.5 flex items-center justify-between">
                <span>{selectedCategory.desc}</span>
                <span className="hidden sm:inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-900/10 px-2 py-0.5 rounded-md">
                  Rekomendasi Terbaik
                </span>
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-emerald-900/90 font-medium">
                {selectedCategory.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Action CTAs & Ratings */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-950 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-950/25 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-950/40 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Sprout className="h-5 w-5 text-emerald-300" />
              <span>Sewa Tanaman Sekarang</span>
              <ArrowRight className="h-4 w-4 text-emerald-300 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA */}
            <button
              type="button"
              className="group flex items-center justify-center gap-2 rounded-2xl glass-panel px-6 py-4 text-sm font-semibold text-emerald-950 shadow-md ring-1 ring-emerald-900/10 hover:bg-white hover:ring-emerald-900/20 transition-all duration-300"
            >
              <span>Lihat Katalog 2026</span>
              <ChevronRight className="h-4 w-4 text-emerald-700 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          {/* Trust Social Proof */}
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center gap-4 pt-2 text-xs text-emerald-900/80 border-t border-emerald-900/10 w-full"
          >
            <div className="flex -space-x-2">
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-emerald-800 text-white font-bold text-center leading-8 text-xs">
                A
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-emerald-700 text-white font-bold text-center leading-8 text-xs">
                L
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-amber-700 text-white font-bold text-center leading-8 text-xs">
                Z
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 font-bold text-emerald-950">4.9 / 5.0</span>
              </div>
              <p className="text-[11px] text-emerald-900/70">Dipercaya 500+ Klien Event, Perusahaan, & Hunian</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT COLUMN: HERO SHOWCASE VISUALS & GLASS CARDS (5 Cols) ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative lg:col-span-5 flex justify-center items-center"
        >
          {/* Main Visual Frame Wrapper */}
          <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[36px] p-3 glass-panel shadow-2xl shadow-emerald-950/15 border border-white/80">
            {/* Inner Image Container */}
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image
                src="/assets/Images/hero-tanaman.jpg"
                alt="Tanaman Hias Premium Aliza Decoration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-black/10" />

              {/* Plant Detail Tag Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl glass-panel-dark p-3 text-white backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider text-emerald-300 uppercase">
                      Spotlight Collection
                    </span>
                    <h3 className="text-sm font-bold text-white">Monstera & Exotic Tropical Arrangement</h3>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    <Sprout className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING GLASS CARD 1: Maintenance Guarantee (Top Right) */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -top-6 z-20 max-w-[210px] rounded-2xl glass-panel p-3.5 shadow-xl shadow-emerald-950/10 border border-white/70 hidden sm:block"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-900 text-emerald-300 shadow-md">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-emerald-950">Free Maintenance</h4>
                  <p className="text-[10px] text-emerald-900/70 leading-snug mt-0.5">
                    Garansi ganti tanaman & siram rutin oleh botanis
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FLOATING GLASS CARD 2: Stock Availability (Bottom Left) */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -1.5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 bottom-16 z-20 max-w-[200px] rounded-2xl glass-panel p-3.5 shadow-xl shadow-emerald-950/10 border border-white/70 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/20">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-emerald-950">Rental Fleksibel</h4>
                  <p className="text-[10px] text-emerald-900/70 mt-0.5">Harian, Mingguan, & Tahunan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;