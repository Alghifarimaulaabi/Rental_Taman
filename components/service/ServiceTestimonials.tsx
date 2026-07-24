"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ServiceTestimonial } from "@/lib/types/service";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

interface ServiceTestimonialsProps {
  testimonials: ServiceTestimonial[];
}

export default function ServiceTestimonials({ testimonials }: ServiceTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval (every 5 seconds)
  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-[#F4F7F4] via-[#EBF2EA]/40 to-[#F4F7F4] overflow-hidden">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-14 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-900/5 px-4 py-1.5 text-xs font-semibold text-emerald-900 border border-emerald-900/10">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span className="tracking-wide">TESTIMONI PELANGGAN</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Apa Kata Mereka yang{" "}
            <span className="font-serif-display italic font-normal text-emerald-800">
              Pernah Sewa?
            </span>
          </h2>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative rounded-3xl bg-white p-8 sm:p-12 shadow-xl shadow-emerald-950/5 ring-1 ring-emerald-900/10 transition-all duration-500 animate-fade-up">
          {/* Quote Icon */}
          <div className="absolute top-6 right-8 text-emerald-900/10">
            <Quote className="h-20 w-20 rotate-180" />
          </div>

          <div className="relative z-10 flex flex-col gap-6">
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-bold text-emerald-950">
                {current.rating}.0 / 5.0
              </span>
            </div>

            {/* Testimonial Comment Text */}
            <p className="font-serif-display text-lg sm:text-2xl italic leading-relaxed text-emerald-950">
              &quot;{current.comment}&quot;
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between border-t border-emerald-900/10 pt-6 mt-2">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-emerald-800/20">
                  <Image
                    src={current.avatarUrl}
                    alt={current.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-serif-display text-base font-bold text-emerald-950">
                    {current.name}
                  </h4>
                  <span className="text-xs text-emerald-900/70">
                    {current.role} • <span className="font-semibold text-emerald-900">{current.company}</span>
                  </span>
                </div>
              </div>

              {/* Slider Controls */}
              {testimonials.length > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900/5 text-emerald-950 hover:bg-emerald-900 hover:text-white transition-colors"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900/5 text-emerald-950 hover:bg-emerald-900 hover:text-white transition-colors"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Slider Indicator Dots */}
        {testimonials.length > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-emerald-800" : "w-2.5 bg-emerald-900/20"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
