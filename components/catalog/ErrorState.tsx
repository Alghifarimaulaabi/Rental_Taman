"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  message = "Terjadi kesalahan saat memuat data tanaman.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-amber-50/50 border border-amber-200/80 p-8 sm:p-12 text-center max-w-xl mx-auto my-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800 mb-4">
        <AlertTriangle className="h-8 w-8 text-amber-700" />
      </div>

      <h3 className="font-serif-display text-xl font-bold text-amber-950">
        Gagal Memuat Katalog
      </h3>

      <p className="mt-2 text-sm text-amber-900/80 leading-relaxed font-sans-body">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-900 hover:bg-amber-950 text-white px-5 py-2.5 text-xs font-bold transition-all shadow-md"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Coba Lagi</span>
        </button>
      )}
    </div>
  );
}
