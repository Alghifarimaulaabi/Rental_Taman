import Link from "next/link";
import { Leaf, ArrowLeft, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProjectNotFound() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#F4F7F4] selection:bg-emerald-900 selection:text-white">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-900/10 text-emerald-800 mb-6 ring-1 ring-emerald-900/20 shadow-inner">
          <Leaf className="h-10 w-10 text-emerald-700 rotate-45" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
          Error 404 • Not Found
        </span>

        <h1 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-emerald-950 mb-3">
          Proyek Tidak Ditemukan
        </h1>

        <p className="text-sm text-emerald-900/70 max-w-md mb-8">
          Proyek dekorasi tanaman yang Anda cari tidak dapat ditemukan atau telah diperbarui dalam sistem katalog kami.
        </p>

        <Link
          href="/galery"
          className="inline-flex items-center gap-2 rounded-2xl bg-emerald-900 px-6 py-3.5 text-xs font-bold text-white shadow-xl shadow-emerald-950/20 hover:bg-emerald-850 hover:scale-105 active:scale-95 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Jelajahi Galeri Proyek Lainnya</span>
        </Link>
      </div>

      <Footer />
    </main>
  );
}
