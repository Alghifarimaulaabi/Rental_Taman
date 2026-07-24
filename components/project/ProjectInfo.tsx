"use client";

import { useState } from "react";
import {
  MapPin,
  Leaf,
  Calendar,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  Share2,
  Check,
  Tag,
  Clock,
  ArrowRight,
  Info,
} from "lucide-react";
import { Project } from "@/lib/types/project";
import BookingModal from "./BookingModal";

interface ProjectInfoProps {
  project: Project;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // WhatsApp click handler with custom prefilled text
  const waText = encodeURIComponent(
    `Halo Aliza Decoration, saya ingin berkonsultasi mengenai proyek "${project.title}" (ID: ${project.id}) - ${project.category} di ${project.location}. Bisakah dibantu untuk penawaran harga & jadwal survei lokasi?`
  );
  const waUrl = `https://wa.me/6283830104299?text=${waText}`;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Top Header & Title */}
      <div className="flex flex-col gap-3 border-b border-emerald-900/10 pb-5">
        {/* Category & Location Sub-header */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900/10 px-3 py-1 text-xs font-semibold text-emerald-900 border border-emerald-900/15">
            <Leaf className="h-3.5 w-3.5 text-emerald-700" />
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-900/70">
            <MapPin className="h-3.5 w-3.5 text-emerald-700" />
            {project.location}
          </span>
          <span className="text-xs text-emerald-900/40">•</span>
          <span className="text-xs font-medium text-emerald-900/60">ID: {project.id}</span>
        </div>

        {/* Project Title */}
        <h1 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-emerald-950 leading-tight">
          {project.title}
        </h1>

        {/* Short Description */}
        <p className="text-sm sm:text-base leading-relaxed text-emerald-900/80 font-normal">
          {project.shortDescription}
        </p>
      </div>

      {/* Pricing & Availability Card */}
      <div className="rounded-2xl bg-emerald-950 text-white p-5 sm:p-6 shadow-xl shadow-emerald-950/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 -mr-6 -mt-6 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-emerald-300">
              Harga Sewa Tanaman
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-serif-display tracking-tight text-white">
                {project.rentalPrice}
              </span>
              {project.pricePeriod && (
                <span className="text-sm font-medium text-emerald-200/80">
                  / {project.pricePeriod}
                </span>
              )}
            </div>
            <p className="mt-1 text-[11px] text-emerald-300/70 flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              Sudah termasuk biaya perawatan rutin & penggantian tanaman
            </p>
          </div>

          {/* Availability Badge inside Pricing Box */}
          <div className="self-start sm:self-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-200 border border-white/15 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Status: {project.availabilityStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons: Tombol Booking & Tombol WhatsApp */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Tombol Booking */}
        <button
          type="button"
          onClick={() => setIsBookingOpen(true)}
          className="flex-1 group relative flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-950 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-950/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-950/35 active:scale-95 transition-all"
        >
          <Sparkles className="h-4 w-4 text-emerald-300 animate-pulse" />
          <span>Tombol Booking</span>
          <ArrowRight className="h-4 w-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Tombol Hubungi via WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <PhoneCall className="h-4 w-4" />
          <span>Hubungi via WhatsApp</span>
        </a>

        {/* Share Button */}
        <button
          type="button"
          onClick={handleShare}
          className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-emerald-900/15 bg-white text-emerald-900 hover:bg-emerald-900/5 transition-all shadow-sm"
          aria-label="Bagikan Proyek"
          title="Bagikan Tautan Proyek"
        >
          {copied ? <Check className="h-5 w-5 text-emerald-700" /> : <Share2 className="h-5 w-5" />}
        </button>
      </div>

      {/* Feature Highlights List */}
      <div className="rounded-2xl bg-white p-5 border border-emerald-900/10 shadow-sm flex flex-col gap-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
          <CheckCircle2 className="h-4 w-4 text-emerald-700" />
          Fasilitas & Keunggulan Layanan
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-emerald-950 font-medium">
          {project.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold mt-0.5">
                ✓
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Full Description Paragraphs */}
      <div className="flex flex-col gap-3 pt-2">
        <h2 className="text-lg font-serif-display font-bold text-emerald-950 flex items-center gap-2">
          <Info className="h-4 w-4 text-emerald-700" />
          Deskripsi Lengkap Proyek
        </h2>
        <div className="flex flex-col gap-3 text-sm leading-relaxed text-emerald-900/85 font-normal">
          {project.fullDescription.map((paragraph, pIdx) => (
            <p key={pIdx}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Specifications Table */}
      {project.specs && project.specs.length > 0 && (
        <div className="rounded-2xl bg-emerald-900/5 p-5 border border-emerald-900/10">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3">
            Spesifikasi & Ketentuan Proyek
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.specs.map((sp, sIdx) => (
              <div key={sIdx} className="flex flex-col">
                <span className="text-[11px] text-emerald-900/60 font-medium">{sp.label}</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-950 mt-0.5">
                  {sp.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Booking Modal Component */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        project={project}
      />
    </div>
  );
}
