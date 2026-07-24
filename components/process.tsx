import {
  Globe,
  MessageSquareHeart,
  Truck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Globe;
  badge: string;
  highlights: string[];
}

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Buka Website & Pilih",
    subtitle: "Jelajahi Koleksi",
    description:
      "Buka website Aliza Decoration, pilih kategori tanaman hias tropis atau paket dekorasi taman yang sesuai dengan kebutuhan Anda.",
    icon: Globe,
    badge: "Langkah Pertama",
    highlights: ["Katalog Lengkap 2026", "Filter Kategori Ruangan", "Estimasi Harga Transparan"],
  },
  {
    step: "02",
    title: "Konsultasi & Survey",
    subtitle: "Diskusi Konsep",
    description:
      "Konsultasikan ide dekorasi Anda bersama tim botanis kami. Kami siap melakukan survey lokasi untuk memilih jenis tanaman yang paling cocok.",
    icon: MessageSquareHeart,
    badge: "Langkah Kedua",
    highlights: ["Konsultasi Gratis via WA", "Survey Lokasi Gratis*", "Rekomendasi Ahli Botanis"],
  },
  {
    step: "03",
    title: "Pengiriman & Pemasangan",
    subtitle: "Instalasi & Perawatan",
    description:
      "Tim profesional kami mengirimkan dan menata tanaman hias secara presisi di lokasi Anda, lengkap dengan jadwal perawatan berkala.",
    icon: Truck,
    badge: "Langkah Ketiga",
    highlights: ["Pengiriman Tepat Waktu", "Pemasangan Rapi & Bersih", "Garansi Perawatan Rutin"],
  },
];

const Process = () => {
  return (
    <section className="relative w-full py-24 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#F4F7F4] overflow-hidden">
      {/* Background Ambient Decorative Elements */}
      <div className="pointer-events-none absolute left-10 top-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-300/15 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 -z-10 h-96 w-96 rounded-full bg-emerald-600/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-4 mb-16 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-900/5 px-4 py-1.5 text-xs font-semibold text-emerald-900 border border-emerald-900/10">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span className="tracking-wide">ALUR PEMESANAN MUDAH & PRAKTIS</span>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            3 Langkah Mudah{" "}
            <span className="font-serif-display italic font-normal text-emerald-800">
              Sewa Tanaman
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg leading-relaxed text-emerald-900/70 max-w-2xl font-normal">
            Proses pemesanan rental tanaman dan dekorasi taman yang simple, cepat, dan tanpa repot untuk hunian, kantor, & event Anda.
          </p>
        </div>

        {/* ================= PROCESS STEPS GRID ================= */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {/* Horizontal Connector Line for Desktop */}
          <div className="pointer-events-none absolute top-24 left-[15%] right-[15%] hidden md:block h-0.5 border-t-2 border-dashed border-emerald-900/20 z-0" />

          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group relative z-10 flex flex-col rounded-3xl bg-white p-7 sm:p-8 shadow-md shadow-emerald-950/5 ring-1 ring-emerald-900/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-950/15 animate-fade-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  {/* Step Icon Wrapper */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-emerald-300 shadow-md shadow-emerald-950/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  {/* Step Big Number Badge */}
                  <span className="font-serif-display text-4xl font-extrabold text-emerald-900/20 group-hover:text-emerald-800/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Step Tag */}
                <span className="inline-self-start mb-2 rounded-md bg-emerald-900/5 px-2.5 py-1 text-[11px] font-bold tracking-wider text-emerald-800 uppercase">
                  {item.badge}
                </span>

                {/* Step Title */}
                <h3 className="font-serif-display text-xl font-bold tracking-tight text-emerald-950 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-emerald-900/70 font-normal">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="mt-6 pt-5 border-t border-emerald-900/5 flex flex-col gap-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-emerald-900/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM CALLOUT BANNER ================= */}
        <div
          className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-950 p-8 sm:p-10 text-white shadow-2xl shadow-emerald-950/20 relative overflow-hidden animate-fade-up"
          style={{ animationDelay: "450ms" }}
        >
          {/* Subtle Organic Background Shape */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-white/5 blur-2xl transform rotate-12" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-start gap-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Siap Memperindah Ruangan Anda?
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                Mulai Konsultasi Gratis Hari Ini
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl">
                Tim desainer lanskap kami siap membantu memilihkan kombinasi tanaman tropis terbaik sesuai estetika & budget Anda.
              </p>
            </div>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 shrink-0 rounded-2xl bg-white px-7 py-4 text-xs font-bold text-emerald-950 shadow-lg hover:bg-emerald-50 hover:scale-105 transition-all active:scale-95"
            >
              <PhoneCall className="h-4 w-4 text-emerald-800" />
              <span>Hubungi Kami via WhatsApp</span>
              <ArrowRight className="h-4 w-4 text-emerald-800 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
