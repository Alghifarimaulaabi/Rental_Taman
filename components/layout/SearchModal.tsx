"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { plantsData } from "@/lib/data/plants";
import { servicesData } from "@/lib/data/services";
import { projectsData } from "@/lib/data/projects";
import {
  Search,
  X,
  Sprout,
  ArrowRight,
  Sparkles,
  Building2,
  Tag,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export interface SearchResultItem {
  id: string;
  type: "plant" | "service" | "project";
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  url: string;
  price?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

const popularSearches = [
  "Monstera",
  "Kantor",
  "Wedding",
  "Ficus",
  "Hotel",
  "Palem",
  "Maintenance",
  "Penthouse",
];

export default function SearchModal({
  isOpen,
  onClose,
  initialQuery = "",
}: SearchModalProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<"all" | "plant" | "service" | "project">("all");
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync initial query if passed
  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      // Lock background scroll
      document.body.style.overflow = "hidden";
      // Auto focus input
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialQuery]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Search indexing and filtering logic
  const allResults = useMemo<SearchResultItem[]>(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase().trim();

    // 1. Filter Plants
    const plantResults: SearchResultItem[] = plantsData
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          (p.botanicalName && p.botanicalName.toLowerCase().includes(q))
      )
      .map((p) => ({
        id: `plant-${p.id}`,
        type: "plant",
        title: p.name,
        subtitle: `${p.category} • Rp ${p.rentalPrice.toLocaleString("id-ID")}/${p.pricePeriod}`,
        category: p.category,
        imageUrl: p.images[0]?.url || "",
        url: `/catalog/${p.slug}`,
        price: `Rp ${p.rentalPrice.toLocaleString("id-ID")}/${p.pricePeriod}`,
      }));

    // 2. Filter Services
    const serviceResults: SearchResultItem[] = servicesData
      .filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q) ||
          s.shortDesc.toLowerCase().includes(q) ||
          s.keywords.some((k) => k.toLowerCase().includes(q))
      )
      .map((s) => ({
        id: `service-${s.id}`,
        type: "service",
        title: s.title,
        subtitle: `${s.category}${s.startingPrice ? ` • ${s.startingPrice}` : ""}`,
        category: s.category,
        imageUrl: s.heroImage,
        url: `/layanan/${s.slug}`,
        price: s.startingPrice,
      }));

    // 3. Filter Projects
    const projectResults: SearchResultItem[] = projectsData
      .filter(
        (pr) =>
          pr.title.toLowerCase().includes(q) ||
          pr.category.toLowerCase().includes(q) ||
          pr.location.toLowerCase().includes(q) ||
          pr.shortDescription.toLowerCase().includes(q)
      )
      .map((pr) => ({
        id: `project-${pr.id}`,
        type: "project",
        title: pr.title,
        subtitle: `${pr.category} • ${pr.location}`,
        category: pr.category,
        imageUrl: pr.images[0]?.url || "",
        url: `/proyek/${pr.id}`,
      }));

    return [...plantResults, ...serviceResults, ...projectResults];
  }, [query]);

  // Tab filtered results
  const filteredResults = useMemo(() => {
    if (activeTab === "all") return allResults;
    return allResults.filter((item) => item.type === activeTab);
  }, [allResults, activeTab]);

  // Counts per type
  const plantCount = useMemo(() => allResults.filter((i) => i.type === "plant").length, [allResults]);
  const serviceCount = useMemo(() => allResults.filter((i) => i.type === "service").length, [allResults]);
  const projectCount = useMemo(() => allResults.filter((i) => i.type === "project").length, [allResults]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-center items-start pt-12 sm:pt-20 px-4 bg-emerald-950/70 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl shadow-emerald-950/30 border border-emerald-900/10 overflow-hidden flex flex-col max-h-[85vh] animate-scale-in"
      >
        {/* Modal Search Header Input */}
        <div className="relative flex items-center border-b border-emerald-900/10 px-5 py-4 bg-emerald-900/5">
          <Search className="h-5 w-5 text-emerald-800 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari tanaman, layanan sewa, atau proyek portofolio..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-emerald-950 placeholder-emerald-900/50 outline-none"
          />

          {/* Clear Search Query Button */}
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 text-emerald-800/70 hover:text-emerald-950 hover:bg-emerald-900/10 rounded-full transition-colors mr-2"
              aria-label="Clear Search"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          {/* Close Modal Button */}
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1 rounded-xl bg-emerald-900/10 px-3 py-1.5 text-xs font-semibold text-emerald-900 hover:bg-emerald-900/20 transition-colors"
          >
            <span>Tutup</span>
            <kbd className="hidden sm:inline-block text-[10px] bg-white px-1.5 py-0.5 rounded shadow-xs font-mono">
              ESC
            </kbd>
          </button>
        </div>

        {/* Tab Filters (Shown when query exists) */}
        {query.trim().length > 0 && (
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white border-b border-emerald-900/5 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`rounded-full px-3.5 py-1 text-xs font-bold transition-colors shrink-0 ${
                activeTab === "all"
                  ? "bg-emerald-900 text-white shadow-sm"
                  : "bg-emerald-900/5 text-emerald-900/70 hover:bg-emerald-900/10"
              }`}
            >
              Semua ({allResults.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("plant")}
              className={`rounded-full px-3.5 py-1 text-xs font-bold transition-colors shrink-0 ${
                activeTab === "plant"
                  ? "bg-emerald-900 text-white shadow-sm"
                  : "bg-emerald-900/5 text-emerald-900/70 hover:bg-emerald-900/10"
              }`}
            >
              Tanaman ({plantCount})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("service")}
              className={`rounded-full px-3.5 py-1 text-xs font-bold transition-colors shrink-0 ${
                activeTab === "service"
                  ? "bg-emerald-900 text-white shadow-sm"
                  : "bg-emerald-900/5 text-emerald-900/70 hover:bg-emerald-900/10"
              }`}
            >
              Layanan ({serviceCount})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("project")}
              className={`rounded-full px-3.5 py-1 text-xs font-bold transition-colors shrink-0 ${
                activeTab === "project"
                  ? "bg-emerald-900 text-white shadow-sm"
                  : "bg-emerald-900/5 text-emerald-900/70 hover:bg-emerald-900/10"
              }`}
            >
              Proyek ({projectCount})
            </button>
          </div>
        )}

        {/* Modal Results / Content Area */}
        <div className="overflow-y-auto p-5 space-y-4 max-h-[60vh]">
          {/* Empty Query State: Show Popular Searches & Quick Links */}
          {query.trim().length === 0 && (
            <div className="flex flex-col gap-6 py-2">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900/70 uppercase tracking-wider">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-700" />
                  <span>Pencarian Populer</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((tag, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="group flex items-center gap-1.5 rounded-full bg-emerald-900/5 px-3.5 py-1.5 text-xs font-semibold text-emerald-950 border border-emerald-900/10 hover:bg-emerald-900 hover:text-white transition-all"
                    >
                      <Tag className="h-3 w-3 text-emerald-700 group-hover:text-emerald-300" />
                      <span>{tag}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Navigation Suggestions */}
              <div className="pt-4 border-t border-emerald-900/5 flex flex-col gap-2">
                <span className="text-xs font-bold text-emerald-900/70 uppercase tracking-wider">
                  Kategori Utama
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link
                    href="/catalog"
                    onClick={onClose}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-900/5 hover:bg-emerald-900 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Sprout className="h-4 w-4 text-emerald-700 group-hover:text-emerald-300" />
                      <span className="text-xs font-bold text-emerald-950 group-hover:text-white">
                        Koleksi Tanaman
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-emerald-700 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/layanan"
                    onClick={onClose}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-900/5 hover:bg-emerald-900 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-emerald-700 group-hover:text-emerald-300" />
                      <span className="text-xs font-bold text-emerald-950 group-hover:text-white">
                        Layanan Kami
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-emerald-700 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/galery"
                    onClick={onClose}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-900/5 hover:bg-emerald-900 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-emerald-700 group-hover:text-emerald-300" />
                      <span className="text-xs font-bold text-emerald-950 group-hover:text-white">
                        Galeri Proyek
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-emerald-700 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Results List */}
          {query.trim().length > 0 && filteredResults.length > 0 && (
            <div className="flex flex-col gap-2">
              {filteredResults.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={onClose}
                  className="group flex items-center justify-between gap-4 p-3 rounded-2xl bg-white border border-emerald-900/5 shadow-xs hover:bg-emerald-900/5 hover:border-emerald-900/15 transition-all"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Thumbnail Image */}
                    <div className="relative h-12 w-12 rounded-xl overflow-hidden shrink-0 bg-emerald-900/10">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        sizes="48px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            item.type === "plant"
                              ? "bg-emerald-900/10 text-emerald-800"
                              : item.type === "service"
                              ? "bg-amber-500/15 text-amber-800"
                              : "bg-purple-500/15 text-purple-800"
                          }`}
                        >
                          {item.type === "plant"
                            ? "Tanaman"
                            : item.type === "service"
                            ? "Layanan"
                            : "Proyek"}
                        </span>
                        <span className="text-[11px] text-emerald-900/60 truncate">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="font-serif-display text-sm font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors truncate">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {item.price && (
                      <span className="hidden sm:inline-block text-xs font-semibold text-emerald-950 bg-emerald-900/5 px-2.5 py-1 rounded-lg">
                        {item.price}
                      </span>
                    )}
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-900/5 text-emerald-900 group-hover:bg-emerald-900 group-hover:text-white transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* No Results Found State */}
          {query.trim().length > 0 && filteredResults.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center py-12 px-4 gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-900/10 text-emerald-800">
                <Search className="h-7 w-7" />
              </div>
              <h4 className="font-serif-display text-base font-bold text-emerald-950">
                Tidak Ada Hasil Ditemukan
              </h4>
              <p className="text-xs sm:text-sm text-emerald-900/70 max-w-sm">
                Tidak ada tanaman, layanan, atau proyek yang cocok dengan kata kunci &quot;
                <span className="font-semibold text-emerald-950">{query}</span>&quot;. Coba gunakan kata kunci lain seperti Monstera, Wedding, atau Kantor.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="flex items-center justify-between px-5 py-3 bg-emerald-900/5 border-t border-emerald-900/10 text-[11px] text-emerald-900/70 font-medium">
          <span className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span>Aliza Decoration Search Engine</span>
          </span>
          <span className="hidden sm:inline-block">
            {allResults.length > 0 ? `${allResults.length} hasil ditemukan` : "Ketik untuk mencari"}
          </span>
        </div>
      </div>
    </div>
  );
}
