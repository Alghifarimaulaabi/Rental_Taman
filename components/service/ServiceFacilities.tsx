import { ServiceFacility } from "@/lib/types/service";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface ServiceFacilitiesProps {
  facilities: ServiceFacility[];
}

export default function ServiceFacilities({ facilities }: ServiceFacilitiesProps) {
  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-[#F4F7F4] via-[#EBF2EA]/50 to-[#F4F7F4]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-4 mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-900/5 px-4 py-1.5 text-xs font-semibold text-emerald-900 border border-emerald-900/10">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
            <span className="tracking-wide">KELENGKAPAN PAKET & FASILITAS</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Fasilitas yang Anda{" "}
            <span className="font-serif-display italic font-normal text-emerald-800">
              Dapatkan
            </span>
          </h2>
          <p className="text-base sm:text-lg text-emerald-900/70 max-w-2xl">
            Setiap paket layanan Aliza Decoration mencakup berbagai fasilitas lengkap tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-3xl bg-white p-6 sm:p-7 shadow-md shadow-emerald-950/5 ring-1 ring-emerald-900/10 transition-all hover:shadow-xl hover:shadow-emerald-950/10 animate-fade-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-900/10 text-emerald-800 font-bold">
                <CheckCircle2 className="h-5 w-5 text-emerald-700" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-emerald-950">
                  {facility.name}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900/70 font-normal leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
