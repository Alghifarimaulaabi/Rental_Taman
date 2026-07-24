import { PhoneCall, ArrowRight, Sprout, Sparkles } from "lucide-react";

interface ServiceCTAProps {
  title: string;
}

export default function ServiceCTA({ title }: ServiceCTAProps) {
  return (
    <section className="relative w-full py-16 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#F4F7F4]">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-950 p-8 sm:p-14 text-white shadow-2xl shadow-emerald-950/20 animate-fade-up">
          {/* Subtle Organic Background Shapes */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-white/5 blur-2xl transform rotate-12" />
          <div className="pointer-events-none absolute left-[-10%] bottom-[-20%] h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl animate-pulse-glow" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-white/10 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>KONSULTASI BEBAS KEREPOAN</span>
              </div>

              <h2 className="font-serif-display text-2xl sm:text-4xl font-bold leading-tight text-white">
                Siap Menghadirkan Keasrian Alam melalui {title}?
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/80 font-normal leading-relaxed">
                Hubungi tim konsultan botanis kami hari ini untuk menjadwalkan survei lokasi gratis dan rekomendasi penataan yang tepat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto shrink-0">
              <a
                href={`https://wa.me/6283830104299?text=${encodeURIComponent(
                  `Halo Aliza Decoration, saya ingin memesan layanan ${title}. Bisa bantu survei & konsultasi?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-bold text-emerald-950 shadow-xl hover:bg-emerald-50 hover:scale-105 transition-all active:scale-95"
              >
                <Sprout className="h-5 w-5 text-emerald-800" />
                <span>Sewa Sekarang</span>
                <ArrowRight className="h-4 w-4 text-emerald-800 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/6283830104299"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-emerald-950/60 px-6 py-4 text-sm font-bold text-white border border-white/20 hover:bg-emerald-950 transition-all"
              >
                <PhoneCall className="h-4 w-4 text-emerald-300" />
                <span>Konsultasi WA</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
