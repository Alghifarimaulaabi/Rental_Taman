"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { PlantImage } from "@/lib/types/plant";

interface PlantDetailClientProps {
  images: PlantImage[];
  plantName: string;
}

export default function PlantDetailClient({ images, plantName }: PlantDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeImage = images[activeImageIndex] || {
    url: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000",
    alt: plantName,
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display with Next Image & Smooth Motion Fade */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-2xl bg-emerald-950/10 border border-emerald-900/10 shadow-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImageIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-full w-full"
          >
            <Image
              src={activeImage.url}
              alt={activeImage.alt || plantName}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {activeImage.caption && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-xs font-medium text-white/90">
            {activeImage.caption}
          </div>
        )}
      </div>

      {/* Thumbnails Gallery Strip */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
          {images.map((img, idx) => {
            const isActive = idx === activeImageIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
                  isActive
                    ? "border-emerald-900 ring-2 ring-emerald-700/40 scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                aria-label={`Lihat foto ${idx + 1} dari ${plantName}`}
              >
                <Image
                  src={img.url}
                  alt={img.alt || `${plantName} thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
