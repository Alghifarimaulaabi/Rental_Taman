"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MapPin,
  Leaf,
  Sparkles,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { GalleryImage, ProjectCategory, AvailabilityStatus } from "@/lib/types/project";

interface ProjectImageGalleryProps {
  images: GalleryImage[];
  title: string;
  category: ProjectCategory;
  location: string;
  availabilityStatus: AvailabilityStatus;
}

const statusStyles: Record<
  AvailabilityStatus,
  { bg: string; text: string; border: string; icon: typeof CheckCircle2 }
> = {
  Tersedia: {
    bg: "bg-emerald-500/20 backdrop-blur-md",
    text: "text-emerald-300",
    border: "border-emerald-400/30",
    icon: CheckCircle2,
  },
  Tersewa: {
    bg: "bg-slate-500/20 backdrop-blur-md",
    text: "text-slate-300",
    border: "border-slate-400/30",
    icon: Clock,
  },
  "Reservasi Terbatas": {
    bg: "bg-amber-500/20 backdrop-blur-md",
    text: "text-amber-300",
    border: "border-amber-400/30",
    icon: Clock,
  },
};

export default function ProjectImageGallery({
  images,
  title,
  category,
  location,
  availabilityStatus,
}: ProjectImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentImage = images[selectedIndex] || images[0];
  const StatusIcon = statusStyles[availabilityStatus].icon;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* ================= MAIN IMAGE DISPLAY CONTAINER ================= */}
      <div className="relative group w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-3xl bg-emerald-950/40 shadow-2xl ring-1 ring-emerald-900/20">
        {/* Active Main Image with Motion crossfade animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0.3, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.3, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative h-full w-full cursor-zoom-in"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src={currentImage.url}
              alt={currentImage.alt || title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Dark Gradient Bottom Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-black/20" />

        {/* Floating Top Badges */}
        <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Category Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md border border-emerald-500/30 shadow-md">
              <Leaf className="h-3.5 w-3.5 text-emerald-400" />
              {category}
            </span>

            {/* Location Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/15 shadow-md">
              <MapPin className="h-3.5 w-3.5 text-emerald-300" />
              {location}
            </span>
          </div>

          {/* Availability Status Badge */}
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold shadow-md border ${statusStyles[availabilityStatus].bg} ${statusStyles[availabilityStatus].text} ${statusStyles[availabilityStatus].border}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
            </span>
            <StatusIcon className="h-3.5 w-3.5" />
            {availabilityStatus}
          </span>
        </div>

        {/* Caption Overlay (If caption exists) */}
        {currentImage.caption && (
          <div className="absolute bottom-4 left-4 right-16 z-10 pointer-events-none">
            <span className="inline-block rounded-xl bg-emerald-950/70 px-3.5 py-1.5 text-xs font-medium text-emerald-100 backdrop-blur-md border border-white/10 line-clamp-1 shadow-md">
              {currentImage.caption}
            </span>
          </div>
        )}

        {/* Fullscreen Lightbox Button */}
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="absolute bottom-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-950/80 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-emerald-800 hover:scale-105 active:scale-95 shadow-md"
          aria-label="Perbesar gambar"
          title="Perbesar gambar"
        >
          <Maximize2 className="h-4 w-4" />
        </button>

        {/* Carousel Prev & Next Controls */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950/70 text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-800 hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Gambar Sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950/70 text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-800 hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Gambar Selanjutnya"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* ================= THUMBNAIL SELECTOR GRID ================= */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 w-full">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                selectedIndex === idx
                  ? "border-emerald-600 ring-2 ring-emerald-600/40 scale-[1.02] shadow-md opacity-100"
                  : "border-transparent opacity-65 hover:opacity-100 hover:scale-[1.01]"
              }`}
              aria-label={`Pilih thumbnail ${idx + 1}`}
            >
              <Image
                src={img.url}
                alt={img.alt || `Thumbnail ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 25vw, 15vw"
                className="object-cover"
              />
              {selectedIndex === idx && (
                <div className="absolute inset-0 bg-emerald-950/10 border-2 border-emerald-400 rounded-lg pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative max-w-5xl w-full h-full max-h-[85vh] flex flex-col items-center justify-center">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-all"
                aria-label="Tutup preview"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Lightbox Image */}
              <div
                className="relative w-full h-full max-h-[75vh] overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={currentImage.url}
                  alt={currentImage.alt || title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Lightbox Footer Caption & Counter */}
              <div className="mt-4 flex items-center justify-between w-full text-white/80 text-xs sm:text-sm px-2">
                <span>
                  {currentImage.caption || title} ({selectedIndex + 1} dari {images.length})
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
