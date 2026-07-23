"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, ArrowUpRight, Leaf, Sparkles } from "lucide-react";

export interface GalleryProject {
  id: string;
  title: string;
  category: "Hotel" | "Office" | "Wedding" | "Event" | "Restaurant" | "Residence";
  location: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  bentoClass: string;
  isFeatured?: boolean;
}

interface GalleryCardProps {
  project: GalleryProject;
  index: number;
}

const categoryColors: Record<GalleryProject["category"], { bg: string; text: string; border: string }> = {
  Hotel: { bg: "bg-amber-500/20", text: "text-amber-300", border: "border-amber-400/30" },
  Office: { bg: "bg-emerald-500/20", text: "text-emerald-300", border: "border-emerald-400/30" },
  Wedding: { bg: "bg-rose-500/20", text: "text-rose-300", border: "border-rose-400/30" },
  Event: { bg: "bg-purple-500/20", text: "text-purple-300", border: "border-purple-400/30" },
  Restaurant: { bg: "bg-orange-500/20", text: "text-orange-300", border: "border-orange-400/30" },
  Residence: { bg: "bg-teal-500/20", text: "text-teal-300", border: "border-teal-400/30" },
};

export const GalleryCard = ({ project, index }: GalleryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const badgeStyle = categoryColors[project.category];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-emerald-950/20 shadow-md shadow-emerald-950/5 ring-1 ring-emerald-900/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-950/20 cursor-pointer focus-within:ring-2 focus-within:ring-emerald-700 outline-none ${project.bentoClass}`}
      tabIndex={0}
      aria-label={`Proyek ${project.title} - ${project.category} di ${project.location}`}
    >
      {/* Background Image with Zoom on Hover */}
      <Image
        src={project.imageUrl}
        alt={project.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Ambient Gradient Overlays for Readability & Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-black/10 transition-opacity duration-300" />

      {/* Top Floating Badges */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {/* Category Badge */}
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md border shadow-sm ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}
          >
            <Leaf className="h-3 w-3" />
            {project.category}
          </span>

          {/* Featured Tag for Hero Bento item */}
          {project.isFeatured && (
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1 text-[11px] font-bold text-amber-300 backdrop-blur-md border border-amber-400/30 shadow-sm">
              <Sparkles className="h-3 w-3 animate-pulse" />
              UTAMA
            </span>
          )}
        </div>

        {/* Location Badge */}
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/60 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md border border-white/10 shadow-sm">
          <MapPin className="h-3 w-3 text-emerald-300" />
          {project.location}
        </span>
      </div>

      {/* Always Visible Content at Bottom */}
      <div className="relative z-10 p-5 sm:p-6 transition-all duration-300">
        <h3
          className={`font-serif-display font-bold tracking-tight text-white ${
            project.isFeatured ? "text-xl sm:text-2xl lg:text-3xl" : "text-base sm:text-lg"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-medium text-emerald-200/80 line-clamp-1">
          {project.location} • {project.category}
        </p>
      </div>

      {/* Animated Slide-Up Overlay on Hover / Touch */}
      <div
        className={`absolute inset-0 z-20 flex flex-col justify-end p-5 sm:p-6 bg-gradient-to-t from-emerald-950/95 via-emerald-950/85 to-emerald-950/40 backdrop-blur-[6px] transition-all duration-300 ease-in-out ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 text-white">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-wider text-emerald-300 uppercase">
              {project.category} Project
            </span>
            <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-200/80">
              <MapPin className="h-3 w-3 text-emerald-400" />
              {project.location}
            </span>
          </div>

          <h3
            className={`font-serif-display font-bold leading-tight text-white ${
              project.isFeatured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
            }`}
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm leading-relaxed text-emerald-100/85 line-clamp-3">
            {project.description}
          </p>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/25 px-4 py-2 text-xs font-semibold text-emerald-200 border border-emerald-400/30 hover:bg-emerald-500/40 hover:text-white transition-all group/btn"
            >
              <span>Detail Proyek</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-emerald-300 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
