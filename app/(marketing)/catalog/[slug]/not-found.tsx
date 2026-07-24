import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Sprout, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F7F4] text-emerald-950 font-sans">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100/80 text-emerald-800 mb-6 shadow-sm">
            <Sprout className="h-10 w-10 text-emerald-800" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Error 404 - Not Found
          </span>

          <h1 className="font-serif-display text-3xl font-bold text-emerald-950 mt-2">
            Tanaman Tidak Ditemukan
          </h1>

          <p className="mt-3 text-sm text-emerald-900/70 leading-relaxed font-sans-body">
            Maaf, item tanaman yang Anda cari tidak tersedia dalam katalog kami atau URL telah berubah.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/catalog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-950 text-white px-6 py-3 text-xs font-bold shadow-md hover:bg-emerald-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Katalog</span>
            </Link>

            <Link
              href="/#koleksi"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-emerald-900/10 text-emerald-950 px-6 py-3 text-xs font-bold hover:bg-emerald-50 transition-colors"
            >
              <Search className="h-4 w-4 text-emerald-700" />
              <span>Cari Koleksi Lain</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
