import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/types/service";
import { ArrowRight, Sparkles, Sprout } from "lucide-react";

interface RelatedServicesProps {
  services: Service[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#F4F7F4] border-t border-emerald-900/5">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 animate-fade-up">
          <div className="flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-900/5 px-4 py-1.5 text-xs font-semibold text-emerald-900 border border-emerald-900/10">
              <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
              <span className="tracking-wide">LAYANAN LAINNYA</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
              Jelajahi Layanan{" "}
              <span className="font-serif-display italic font-normal text-emerald-800">
                Terkait
              </span>
            </h2>
          </div>

          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-900 hover:text-emerald-700 transition-colors group"
          >
            <span>Lihat Semua Layanan</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Related Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link
              key={service.id}
              href={`/layanan/${service.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md shadow-emerald-950/5 ring-1 ring-emerald-900/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-950/15 animate-fade-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-emerald-950/70 px-3 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md border border-white/10">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif-display text-lg font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-900/70 line-clamp-2 font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-emerald-900/5 text-xs font-bold text-emerald-900">
                  <span>Lihat Detail Layanan</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-900/5 text-emerald-900 group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
