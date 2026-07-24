"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("ProjectDetail Error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-[#F4F7F4]">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-rose-500/10 text-rose-600 mb-6">
        <AlertTriangle className="h-8 w-8" />
      </div>

      <h1 className="font-serif-display text-2xl sm:text-3xl font-bold text-emerald-950 mb-2">
        Terjadi Kesalahan Saat Memuat Proyek
      </h1>
      <p className="text-sm text-emerald-900/70 max-w-md mb-8">
        Maaf, sistem mengalami kendala teknis saat memuat data proyek ini. Silakan coba muat ulang atau kembali ke katalog utama.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-900 px-5 py-3 text-xs font-semibold text-white shadow-md hover:bg-emerald-850 transition-all"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Coba Lagi</span>
        </button>

        <Link
          href="/galery"
          className="inline-flex items-center gap-2 rounded-xl border border-emerald-900/20 bg-white px-5 py-3 text-xs font-semibold text-emerald-950 shadow-sm hover:bg-emerald-900/5 transition-all"
        >
          <Home className="h-4 w-4" />
          <span>Kembali ke Galeri</span>
        </Link>
      </div>
    </div>
  );
}
