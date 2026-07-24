import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Service } from "@/lib/types/service";
import { Sparkles, ArrowRight, PhoneCall, CheckCircle2, Sprout, Home } from "lucide-react";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#EBF2EA] via-[#F4F7F4] to-[#F4F7F4] pt-10 pb-16 px-4 sm:px-8 lg:px-12 xl:px-16">
      {/* Background Decorative Ambient Blobs */}
      <div className="pointer-events-none absolute left-1/4 top-10 -z-10 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute right-10 top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-600/10 blur-[100px] animate-pulse-glow" />

      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: "Beranda", href: "/", iconName: "home" },
            { label: "Layanan Kami", href: "/layanan", iconName: "service" },
            { label: service.title },
          ]}
          className="mb-6"
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left Column: Information & CTAs */}
          <div className="flex flex-col items-start gap-6 lg:col-span-7 animate-fade-up">
            {/* Category & Badge */}
            <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-bold text-emerald-950 ring-1 ring-emerald-900/15 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
              <span>{service.badge}</span>
              <span className="text-emerald-400">•</span>
              <span className="text-emerald-800 font-semibold">{service.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl xl:text-[3.25rem] leading-[1.15]">
              {service.title}
            </h1>

            {/* Subtitle / Short Description */}
            <p className="text-base sm:text-lg leading-relaxed text-emerald-900/80 font-normal">
              {service.subtitle}
            </p>

            {/* Starting Price Badge (if available) */}
            {service.startingPrice && (
              <div className="inline-flex items-center gap-3 rounded-2xl bg-emerald-900/10 px-5 py-3 border border-emerald-900/15">
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  Mulai Dari:
                </span>
                <span className="text-lg sm:text-xl font-extrabold text-emerald-950">
                  {service.startingPrice}
                </span>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href={`https://wa.me/6283830104299?text=${encodeURIComponent(
                  `Halo Aliza Decoration, saya ingin bertanya dan berkonsultasi mengenai ${service.title}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-950 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-950/20 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-950/35 active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Sprout className="h-5 w-5 text-emerald-300" />
                <span>Sewa & Konsultasi Sekarang</span>
                <ArrowRight className="h-4 w-4 text-emerald-300 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/6283830104299"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 rounded-2xl glass-panel px-6 py-4 text-sm font-semibold text-emerald-950 shadow-md ring-1 ring-emerald-900/10 hover:bg-white hover:ring-emerald-900/20 transition-all duration-300"
              >
                <PhoneCall className="h-4 w-4 text-emerald-800" />
                <span>Tanya via WhatsApp</span>
              </a>
            </div>

            {/* Quick Trust Perks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-emerald-900/10 w-full text-xs font-semibold text-emerald-950">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                <span>Garansi Tanaman Fresh</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                <span>Free Survey Lokasi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
                <span>Perawatan Profesional</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Showcase */}
          <div className="relative lg:col-span-5 flex justify-center items-center animate-scale-in">
            <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-[4/5] rounded-[32px] p-3 glass-panel shadow-2xl shadow-emerald-950/15 border border-white/80 overflow-hidden">
              <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-black/10" />

                {/* Floating Tag */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl glass-panel-dark p-3 text-white backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider text-emerald-300 uppercase">
                        Premium Service
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 shrink-0">
                      <Sprout className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
