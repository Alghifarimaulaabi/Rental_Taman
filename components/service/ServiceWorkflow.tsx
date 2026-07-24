import { ServiceWorkflowStep } from "@/lib/types/service";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface ServiceWorkflowProps {
  workflow: ServiceWorkflowStep[];
}

export default function ServiceWorkflow({ workflow }: ServiceWorkflowProps) {
  return (
    <section className="relative w-full py-24 px-4 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-[#F4F7F4] via-[#EBF2EA]/60 to-[#F4F7F4]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-4 mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-900/5 px-4 py-1.5 text-xs font-semibold text-emerald-900 border border-emerald-900/10">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span className="tracking-wide">ALUR PEMESANAN PRAKTIS</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Langkah Pemesanan{" "}
            <span className="font-serif-display italic font-normal text-emerald-800">
              Layanan
            </span>
          </h2>
          <p className="text-base sm:text-lg text-emerald-900/70 max-w-2xl font-normal">
            Proses pemesanan yang cepat, transparan, dan tanpa repot untuk kemudahan Anda.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connector Line for Desktop */}
          <div className="pointer-events-none absolute top-20 left-[10%] right-[10%] hidden lg:block h-0.5 border-t-2 border-dashed border-emerald-900/20 z-0" />

          {workflow.map((item, idx) => (
            <div
              key={idx}
              className="group relative z-10 flex flex-col rounded-3xl bg-white p-7 shadow-md shadow-emerald-950/5 ring-1 ring-emerald-900/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-950/15 animate-fade-up"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {/* Step Badge & Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-emerald-300 font-bold text-lg shadow-md shadow-emerald-950/20 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider bg-emerald-900/5 px-2.5 py-1 rounded-md">
                  Langkah {idx + 1}
                </span>
              </div>

              <h3 className="font-serif-display text-lg font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors mb-3">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-emerald-900/70 font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
