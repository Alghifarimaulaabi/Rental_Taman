"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Clock, Sparkles } from "lucide-react";
import { Plant } from "@/lib/types/plant";

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(plant.rentalPrice);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-emerald-900/10 shadow-sm hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300"
    >
      {/* Top Image Container with Next Image Optimization */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-emerald-950/5">
        <Image
          src={plant.images[0]?.url || "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000"}
          alt={plant.images[0]?.alt || plant.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          priority={false}
        />

        {/* Ambient Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Top Badges: Category & Status */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          {/* Category Badge */}
          <span className="inline-flex items-center rounded-full bg-emerald-950/75 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-emerald-200 shadow-sm border border-white/20">
            {plant.category}
          </span>

          {/* Availability Status Badge */}
          {plant.availabilityStatus === "Tersedia" ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 text-white backdrop-blur-md px-2.5 py-1 text-[11px] font-bold shadow-md border border-emerald-300/30">
              <CheckCircle2 className="h-3 w-3 text-emerald-100" />
              Tersedia
            </span>
          ) : plant.availabilityStatus === "Reservasi Terbatas" ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/90 text-white backdrop-blur-md px-2.5 py-1 text-[11px] font-bold shadow-md border border-amber-300/30">
              <Clock className="h-3 w-3 text-amber-100" />
              Reservasi
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-stone-700/90 text-stone-200 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold shadow-md border border-stone-400/30">
              <AlertCircle className="h-3 w-3 text-stone-300" />
              Tersewa
            </span>
          )}
        </div>

        {/* Popular / Featured Badge if applicable */}
        {plant.isFeatured && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 rounded-lg bg-amber-400/95 text-emerald-950 px-2.5 py-0.5 text-[10px] font-black tracking-wider uppercase shadow-md">
              <Sparkles className="h-3 w-3 fill-emerald-950" />
              Pilihan Botanis
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
        <div className="space-y-1.5">
          {/* Botanical Name */}
          <p className="text-[11px] font-serif italic text-emerald-700 tracking-wide">
            {plant.botanicalName}
          </p>

          {/* Plant Title */}
          <h3 className="font-serif-display text-lg font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors line-clamp-1">
            <Link href={`/catalog/${plant.slug}`} className="hover:underline focus:outline-none">
              {plant.name}
            </Link>
          </h3>

          {/* Short Description (2-3 lines) */}
          <p className="text-xs text-emerald-900/70 leading-relaxed line-clamp-2 pt-1 font-sans-body">
            {plant.shortDescription}
          </p>
        </div>

        {/* Price & Action Section */}
        <div className="pt-3 border-t border-emerald-900/10 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-emerald-700/80 tracking-wider">
              Harga Sewa
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-base font-extrabold text-emerald-950">
                {formattedPrice}
              </span>
              <span className="text-[11px] font-medium text-emerald-900/60">
                /{plant.pricePeriod || "bln"}
              </span>
            </div>
          </div>

          {/* Detail Link Button */}
          <Link
            href={`/catalog/${plant.slug}`}
            className="inline-flex items-center gap-1 rounded-xl bg-emerald-900 hover:bg-emerald-950 text-white px-3.5 py-2 text-xs font-bold transition-all shadow-sm hover:shadow-md group-hover:bg-emerald-800"
            aria-label={`Lihat detail ${plant.name}`}
          >
            <span>Detail</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
