"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Plant detail page error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F7F4] text-emerald-950 font-sans">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-amber-800 mb-6 shadow-sm">
            <AlertTriangle className="h-10 w-10 text-amber-700" />
          </div>

          <h1 className="font-serif-display text-2xl font-bold text-emerald-950">
            Terjadi Kendala Memuat Detail
          </h1>

          <p className="mt-3 text-sm text-emerald-900/70 leading-relaxed font-sans-body">
            Gagal mengambil data spesifikasi tanaman ini. Silakan coba muat ulang.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-950 text-white px-6 py-3 text-xs font-bold shadow-md hover:bg-emerald-900 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Coba Lagi</span>
            </button>

            <Link
              href="/catalog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-emerald-900/10 text-emerald-950 px-6 py-3 text-xs font-bold hover:bg-emerald-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Katalog</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
