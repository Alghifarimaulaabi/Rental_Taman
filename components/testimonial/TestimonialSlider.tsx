"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";
import { Testimonial } from "@/lib/types/project";
import TestimonialCard from "./TestimonialCard";
import Title from "@/components/shared/section-title";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number; // default 4500ms
}

export default function TestimonialSlider({
  testimonials,
  autoPlayInterval = 4500,
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  // Mobile Touch Swipe references
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive breakpoint detector
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-scroll Timer effect (4-5s interval, infinite loop, pause on hover)
  useEffect(() => {
    if (!isPlaying || isPaused || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPlaying, isPaused, autoPlayInterval, testimonials.length, handleNext]);

  // Touch Swipe handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!testimonials || testimonials.length === 0) return null;

  // Calculate items to render for smooth carousel view
  const visibleItems = Array.from({ length: visibleCount }).map((_, i) => {
    const idx = (currentIndex + i) % testimonials.length;
    return testimonials[idx];
  });

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 lg:px-12 bg-emerald-950/5 rounded-3xl my-12 border border-emerald-900/10 overflow-hidden">
      {/* Background Decorative Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -z-10 h-72 w-[600px] rounded-full bg-emerald-200/30 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
              Testimoni Pelanggan
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-emerald-950">
              Pengalaman <span className="font-serif-display italic font-normal text-emerald-800">Klien Kami</span>
            </h2>
            <p className="text-xs sm:text-sm text-emerald-900/70 max-w-xl">
              Ulasan nyata dari hotel bintang lima, kantor corporate, event organizer, dan pemilik hunian eksklusif yang mempercayakan dekorasi alam kepada Aliza.
            </p>
          </div>

          {/* Slider Controls (Play/Pause, Next/Prev) */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* Play/Pause Auto-scroll Button */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-emerald-900 shadow-sm border border-emerald-900/10 hover:bg-emerald-900/5 transition-all"
              aria-label={isPlaying ? "Jeda slider" : "Putar slider"}
              title={isPlaying ? "Jeda Otomatis" : "Putar Otomatis"}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-emerald-900 shadow-sm border border-emerald-900/10 hover:bg-emerald-900 hover:text-white transition-all active:scale-95"
              aria-label="Testimoni Sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-emerald-900 shadow-sm border border-emerald-900/10 hover:bg-emerald-900 hover:text-white transition-all active:scale-95"
              aria-label="Testimoni Selanjutnya"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ================= SLIDER CAROUSEL TRACK ================= */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full cursor-grab active:cursor-grabbing"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, idx) => (
                <motion.div
                  key={`${item.id}-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full"
                >
                  <TestimonialCard testimonial={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ================= PAGINATION DOTS ================= */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? "w-8 bg-emerald-800 shadow-sm"
                  : "w-2.5 bg-emerald-900/20 hover:bg-emerald-900/40"
              }`}
              aria-label={`Buka slide testimoni ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
