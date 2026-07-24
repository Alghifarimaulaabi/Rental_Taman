"use client";

import { useState } from "react";
import Image from "next/image";
import { ServiceGalleryItem } from "@/lib/types/service";
import { Sparkles, Maximize2, X, MapPin } from "lucide-react";

interface ServiceGalleryProps {
  gallery: ServiceGalleryItem[];
  title: string;
}

export default function ServiceGallery({ gallery, title }: ServiceGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ServiceGalleryItem | null>(null);

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#F4F7F4]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-4 mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-900/5 px-4 py-1.5 text-xs font-semibold text-emerald-900 border border-emerald-900/10">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span className="tracking-wide">DOKUMENTASI PEKERJAAN REAL</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Galeri Hasil{" "}
            <span className="font-serif-display italic font-normal text-emerald-800">
              Pekerjaan Kami
            </span>
          </h2>
          <p className="text-base sm:text-lg text-emerald-900/70 max-w-2xl font-normal">
            Beberapa bukti portofolio hasil penataan lanskap dan pengerjaan layanan {title}.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-[3/4] bg-emerald-950/20 shadow-md shadow-emerald-950/5 ring-1 ring-emerald-900/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl animate-fade-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="h-4 w-4" />
              </div>

              {/* Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 mb-1">
                  <MapPin className="h-3 w-3" />
                  Aliza Portfolio
                </span>
                <h4 className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                  {item.caption}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 bg-emerald-950 text-white">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                {title}
              </span>
              <h3 className="text-base sm:text-lg font-bold mt-1">{selectedImage.caption}</h3>
              <p className="text-xs text-emerald-200/70 mt-1">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
