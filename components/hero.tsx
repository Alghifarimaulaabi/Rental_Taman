import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Sprout,
  Star,
  ChevronRight,
  Leaf,
  Flower2,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden px-4 py-8 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-center">
      {/* Background Decorative Ambient Blobs & Organic Shapes */}
      <div className="pointer-events-none absolute left-1/4 top-10 -z-10 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute right-10 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[100px] animate-pulse-glow" />
      <div className="pointer-events-none absolute left-10 bottom-10 -z-10 h-72 w-72 rounded-full bg-amber-200/30 blur-2xl" />

      {/* Floating Organic Leaf SVGs */}
      <div
        className="pointer-events-none absolute left-6 top-16 z-0 text-emerald-800/15 hidden lg:block"
      >
        <Leaf className="h-24 w-24 -rotate-12" />
      </div>
      <div
        className="pointer-events-none absolute right-12 bottom-20 z-0 text-emerald-900/10 hidden lg:block"
      >
        <Flower2 className="h-32 w-32 rotate-45" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
        {/* ================= LEFT COLUMN: TYPOGRAPHY & INTERACTIVE CONTROLS (7 Cols) ================= */}
        <div className="flex flex-col items-start gap-6 lg:col-span-7">

          {/* Large Typography Headline — staggered CSS animation */}
          <h1
            className="text-4xl font-extrabold tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl xl:text-[3.65rem] leading-[1.12] animate-fade-up"
          >
            Sentuhan{" "}
            <span className="relative inline-block font-serif-display italic font-normal text-emerald-800 underline decoration-emerald-400/40 underline-offset-8">
              Kemewahan Alam
            </span>{" "}
            untuk Setiap Ruang & Event
          </h1>


          {/* Action CTAs & Ratings */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {/* Primary CTA */}
            <a
              href="https://wa.me/+6283830104299"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-950 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-950/25 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-950/40 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Sprout className="h-5 w-5 text-emerald-300" />
              <span>Sewa Tanaman Sekarang</span>
              <ArrowRight className="h-4 w-4 text-emerald-300 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA */}
            <button
              type="button"
              className="group flex items-center justify-center gap-2 rounded-2xl glass-panel px-6 py-4 text-sm font-semibold text-emerald-950 shadow-md ring-1 ring-emerald-900/10 hover:bg-white hover:ring-emerald-900/20 transition-all duration-300"
            >
              <span>Lihat Katalog 2026</span>
              <ChevronRight className="h-4 w-4 text-emerald-700 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Trust Social Proof */}
          <div
            className="flex items-center gap-4 pt-2 text-xs text-emerald-900/80 border-t border-emerald-900/10 w-full animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <div className="flex -space-x-2">
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-emerald-800 text-white font-bold text-center leading-8 text-xs">
                A
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-emerald-700 text-white font-bold text-center leading-8 text-xs">
                L
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-amber-700 text-white font-bold text-center leading-8 text-xs">
                Z
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 font-bold text-emerald-950">4.9 / 5.0</span>
              </div>
              <p className="text-[11px] text-emerald-900/70">Dipercaya 500+ Klien Event, Perusahaan, & Hunian</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: HERO SHOWCASE VISUALS & GLASS CARDS (5 Cols) ================= */}
        <div
          className="relative lg:col-span-5 flex justify-center items-center animate-scale-in"
        >
          {/* Main Visual Frame Wrapper */}
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[36px] p-3 glass-panel shadow-2xl shadow-emerald-950/15 border border-white/80">
            {/* Inner Image Container */}
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image
                src="/assets/Images/hero-tanaman.jpg"
                alt="Tanaman Hias Premium Aliza Decoration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-black/10" />

              {/* Plant Detail Tag Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl glass-panel-dark p-3 text-white backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider text-emerald-300 uppercase">
                      Spotlight Collection
                    </span>
                    <h3 className="text-sm font-bold text-white">Monstera & Exotic Tropical Arrangement</h3>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    <Sprout className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;