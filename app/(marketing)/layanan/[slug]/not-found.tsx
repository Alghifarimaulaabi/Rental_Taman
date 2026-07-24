import Link from "next/link";
import { Sprout, ArrowLeft, Search } from "lucide-react";

export default function NotFoundServiceDetail() {
  return (
    <div className="min-h-[75vh] w-full flex items-center justify-center px-4 py-20 bg-[#F4F7F4]">
      <div className="max-w-md w-full rounded-3xl bg-white p-8 sm:p-10 text-center shadow-xl ring-1 ring-emerald-900/10 flex flex-col items-center gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-900/10 text-emerald-900 border border-emerald-900/10">
          <Sprout className="h-10 w-10 text-emerald-700" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            404 — Layanan Tidak Ditemukan
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-emerald-950">
            Layanan Tidak Ada
          </h2>
          <p className="text-xs sm:text-sm text-emerald-900/70 leading-relaxed font-normal">
            Maaf, jenis layanan yang Anda cari tidak tersedia atau alamat URL telah diubah. Silakan lihat daftar seluruh layanan kami.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <Link
            href="/layanan"
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-950 px-6 py-3.5 text-xs font-bold text-white shadow-md hover:shadow-lg transition-all"
          >
            <Search className="h-4 w-4 text-emerald-300" />
            <span>Lihat Semua Layanan</span>
          </Link>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-2xl glass-panel px-6 py-3 text-xs font-bold text-emerald-950 shadow-sm hover:bg-emerald-900/5 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
