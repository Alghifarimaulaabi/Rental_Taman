"use client";

import { motion } from "motion/react";
import { SearchX, RefreshCw, Sprout } from "lucide-react";

interface EmptyStateProps {
  onReset: () => void;
  searchQuery?: string;
}

export default function EmptyState({ onReset, searchQuery }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center rounded-3xl bg-white border border-emerald-900/10 p-8 sm:p-12 text-center shadow-sm max-w-xl mx-auto my-8"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100/60 text-emerald-800 mb-6 shadow-inner">
        <SearchX className="h-10 w-10 text-emerald-800" />
      </div>

      <h3 className="font-serif-display text-2xl font-bold text-emerald-950">
        Tanaman Tidak Ditemukan
      </h3>

      <p className="mt-3 text-sm text-emerald-900/70 leading-relaxed font-sans-body">
        {searchQuery ? (
          <>
            Tidak ada koleksi tanaman yang cocok dengan kata kunci{" "}
            <span className="font-semibold text-emerald-950">"{searchQuery}"</span>.
          </>
        ) : (
          "Tidak ada tanaman yang memenuhi kriteria filter yang Anda pilih saat ini."
        )}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-900 hover:bg-emerald-950 text-white px-5 py-2.5 text-xs font-bold transition-all shadow-md hover:shadow-lg"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Reset Semua Filter</span>
        </button>

        <a
          href="https://wa.me/?text=Halo%20Aliza%20Decoration,%20saya%20mencari%20jenis%20tanaman%20khusus..."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 px-5 py-2.5 text-xs font-bold border border-emerald-900/10 transition-colors"
        >
          <Sprout className="h-4 w-4 text-emerald-700" />
          <span>Request Tanaman Khusus</span>
        </a>
      </div>
    </motion.div>
  );
}
