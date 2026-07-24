"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Testimonial } from "@/lib/types/project";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="group relative flex flex-col justify-between h-full rounded-3xl bg-white p-6 sm:p-7 shadow-lg shadow-emerald-950/5 ring-1 ring-emerald-900/10 border border-emerald-900/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10 transition-all duration-300">
      {/* Top Decorative Background Quote Icon */}
      <div className="absolute top-5 right-6 text-emerald-900/10 group-hover:text-emerald-800/15 transition-colors pointer-events-none">
        <Quote className="h-12 w-12 rotate-180" />
      </div>

      <div className="flex flex-col gap-4 relative z-10">
        {/* Star Rating Render */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-slate-200 text-slate-200"
              }`}
            />
          ))}
          <span className="ml-2 text-xs font-bold text-emerald-950">
            {testimonial.rating}.0
          </span>
        </div>

        {/* Testimonial Content Text */}
        <p className="text-xs sm:text-sm leading-relaxed text-emerald-950/85 font-medium italic">
          "{testimonial.content}"
        </p>
      </div>

      {/* Card Footer: Profile Photo, Name, Role & Date */}
      <div className="mt-6 flex items-center justify-between border-t border-emerald-900/10 pt-4 relative z-10">
        <div className="flex items-center gap-3">
          {/* Profile Photo */}
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-emerald-700/20 shadow-sm">
            <Image
              src={testimonial.customerAvatar}
              alt={testimonial.customerName}
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>

          {/* Customer Name & Role */}
          <div className="flex flex-col">
            <h4 className="text-xs sm:text-sm font-bold text-emerald-950">
              {testimonial.customerName}
            </h4>
            <span className="text-[11px] text-emerald-900/60 font-normal line-clamp-1">
              {testimonial.customerRole}
            </span>
          </div>
        </div>

        {/* Tanggal Testimoni */}
        <span className="text-[11px] font-medium text-emerald-900/50 shrink-0 ml-2">
          {testimonial.date}
        </span>
      </div>
    </div>
  );
}
