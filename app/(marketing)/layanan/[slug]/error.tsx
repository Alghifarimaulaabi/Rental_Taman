"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";

export default function ErrorServiceDetail({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Service Detail Error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center px-4 py-20 bg-[#F4F7F4]">
      <div className="max-w-md w-full rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-emerald-900/10 flex flex-col items-center gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-200">
          <AlertCircle className="h-8 w-8" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-serif-display text-2xl font-bold text-emerald-950">
            Gagal Memuat Layanan
          </h2>
          <p className="text-xs sm:text-sm text-emerald-900/70 leading-relaxed font-normal">
            Maaf, terjadi masalah saat memuat informasi detail layanan ini. Silakan coba muat ulang atau kembali ke katalog.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            type="button"
            onClick={() => reset()}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-emerald-850 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Coba Lagi</span>
          </button>

          <Link
            href="/layanan"
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl glass-panel px-5 py-3 text-xs font-bold text-emerald-950 shadow-sm hover:bg-emerald-900/5 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Ke Katalog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
