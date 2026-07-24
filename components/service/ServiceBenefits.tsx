import { ServiceBenefit } from "@/lib/types/service";
import { Sparkles, ShieldCheck, RefreshCw, HeartHandshake, Clock, Leaf, CheckCircle2 } from "lucide-react";

interface ServiceBenefitsProps {
  benefits: ServiceBenefit[];
  fullDesc: string;
}

const iconMap: Record<string, typeof Sparkles> = {
  Sparkles,
  ShieldCheck,
  RefreshCw,
  HeartHandshake,
  Clock,
  Leaf,
};

export default function ServiceBenefits({ benefits, fullDesc }: ServiceBenefitsProps) {
  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#F4F7F4] border-t border-emerald-900/5">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-4 mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-900/5 px-4 py-1.5 text-xs font-semibold text-emerald-900 border border-emerald-900/10">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span className="tracking-wide">KEUNGGULAN & MANFAAT UTAMA</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Mengapa Memilih{" "}
            <span className="font-serif-display italic font-normal text-emerald-800">
              Layanan Ini?
            </span>
          </h2>
        </div>

        {/* Detailed Overview Paragraph */}
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-7 sm:p-10 shadow-md shadow-emerald-950/5 ring-1 ring-emerald-900/10 mb-16 animate-fade-up">
          <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-emerald-950 mb-4">
            Gambaran Umum Layanan
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-emerald-900/80 font-normal">
            {fullDesc}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.iconName] || Leaf;
            return (
              <div
                key={idx}
                className="group flex flex-col rounded-3xl bg-white p-7 shadow-md shadow-emerald-950/5 ring-1 ring-emerald-900/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-950/15 animate-fade-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-emerald-300 shadow-md shadow-emerald-950/20 group-hover:scale-110 transition-transform duration-300 mb-6">
                  <IconComponent className="h-6 w-6" />
                </div>

                <h4 className="font-serif-display text-lg font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors mb-3">
                  {benefit.title}
                </h4>

                <p className="text-xs sm:text-sm leading-relaxed text-emerald-900/70">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
