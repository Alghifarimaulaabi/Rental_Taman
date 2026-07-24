import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllServices } from "@/lib/data/services";
import { Sparkles, ArrowRight, CheckCircle2, Sprout, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Rental & Dekorasi Taman | Aliza Decoration",
  description:
    "Jelajahi seluruh paket layanan rental tanaman hias kantor, dekorasi pernikahan tropis, event temporer, hunian mewah, maintenance, dan konsultasi lanskap.",
  keywords: [
    "layanan sewa tanaman",
    "rental tanaman kantor bandung",
    "dekorasi taman wedding",
    "maintenance tanaman hias",
    "konsultasi lanskap biofilik",
  ],
};

export default function ServicesCatalogPage() {
  const services = getAllServices();

  return (
    <main className="relative flex min-h-screen flex-col bg-[#F4F7F4] selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative w-full py-16 px-4 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-[#EBF2EA] via-[#F4F7F4] to-[#F4F7F4]">
        <div className="pointer-events-none absolute left-1/4 top-10 -z-10 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-4 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-semibold text-emerald-950 border border-emerald-900/10 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span>KATALOG LAYANAN LENGKAP 2026</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
            Solusi Keasrian Alam{" "}
            <span className="font-serif-display italic font-normal text-emerald-800">
              Tanpa Repot
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-emerald-900/70 max-w-2xl font-normal">
            Pilih kategori layanan rental tanaman hias dan dekorasi lanskap yang sesuai dengan kebutuhan ruang perkantoran, event, pernikahan, atau tempat tinggal Anda.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 px-4 sm:px-8 lg:px-12 xl:px-16 pb-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link
              key={service.id}
              href={`/layanan/${service.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md shadow-emerald-950/5 ring-1 ring-emerald-900/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/15 animate-fade-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-emerald-950/80 px-3 py-1 text-[11px] font-bold text-emerald-300 backdrop-blur-md border border-white/10">
                    {service.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-7 justify-between gap-5">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold tracking-wider text-emerald-700 uppercase">
                    {service.badge}
                  </span>
                  <h2 className="font-serif-display text-xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-900/70 line-clamp-3 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-emerald-900/5 text-xs font-bold text-emerald-950">
                  <span className="flex items-center gap-1.5 text-emerald-800">
                    <Sprout className="h-4 w-4" />
                    <span>Lihat Selengkapnya</span>
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-900/5 text-emerald-900 group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
