"use client";

import { Search, X, SlidersHorizontal, ArrowUpDown, Check, RefreshCw } from "lucide-react";
import { PlantCategory, SortOption, PlantFilterState } from "@/lib/types/plant";

interface FilterBarProps {
  filters: PlantFilterState;
  onFilterChange: (updated: Partial<PlantFilterState>) => void;
  onResetFilters: () => void;
  totalResults: number;
  categoryCounts: Record<string, number>;
}

const CATEGORIES: (PlantCategory | "Semua")[] = [
  "Semua",
  "Indoor",
  "Outdoor",
  "Tanaman Meja",
  "Palem & Pohon",
  "Tanaman Gantung",
  "Succulent & Cactus",
];

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Terbaru", value: "newest" },
  { label: "Nama (A - Z)", value: "a-z" },
  { label: "Nama (Z - A)", value: "z-a" },
  { label: "Harga: Terendah ke Tertinggi", value: "price-low" },
  { label: "Harga: Tertinggi ke Terendah", value: "price-high" },
];

export default function FilterBar({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults,
  categoryCounts,
}: FilterBarProps) {
  const hasActiveFilters =
    filters.searchQuery.trim() !== "" ||
    filters.category !== "Semua" ||
    filters.availability !== "Semua" ||
    filters.sortBy !== "newest";

  return (
    <div className="w-full space-y-6">
      {/* Top Bar: Search Input & Controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between bg-white p-4 sm:p-5 rounded-2xl shadow-md border border-emerald-900/10">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <label htmlFor="search-input" className="sr-only">
            Cari Tanaman
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-700">
            <Search className="h-4 w-4" aria-hidden="true" />
          </div>
          <input
            id="search-input"
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value, page: 1 })}
            placeholder="Cari nama atau jenis tanaman..."
            className="w-full pl-10 pr-10 py-2.5 bg-emerald-50/50 hover:bg-emerald-50 focus:bg-white text-emerald-950 placeholder-emerald-800/50 rounded-xl text-sm font-medium border border-emerald-900/10 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all"
          />
          {filters.searchQuery && (
            <button
              type="button"
              onClick={() => onFilterChange({ searchQuery: "", page: 1 })}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-emerald-600 hover:text-emerald-950 transition-colors"
              aria-label="Bersihkan pencarian"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filter & Sort Controls */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Availability Status Filter Buttons */}
          <div className="flex items-center rounded-xl bg-emerald-50/80 p-1 border border-emerald-900/10 text-xs font-semibold">
            <button
              type="button"
              onClick={() => onFilterChange({ availability: "Semua", page: 1 })}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filters.availability === "Semua"
                  ? "bg-emerald-900 text-white shadow-sm"
                  : "text-emerald-900/70 hover:text-emerald-950"
              }`}
            >
              Semua Status
            </button>
            <button
              type="button"
              onClick={() => onFilterChange({ availability: "Tersedia", page: 1 })}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filters.availability === "Tersedia"
                  ? "bg-emerald-800 text-white shadow-sm"
                  : "text-emerald-900/70 hover:text-emerald-950"
              }`}
            >
              Tersedia
            </button>
            <button
              type="button"
              onClick={() => onFilterChange({ availability: "Tidak Tersedia", page: 1 })}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filters.availability === "Tidak Tersedia"
                  ? "bg-amber-800 text-white shadow-sm"
                  : "text-emerald-900/70 hover:text-emerald-950"
              }`}
            >
              Tersewa
            </button>
          </div>

          {/* Sorting Dropdown */}
          <div className="relative flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4 text-emerald-700 hidden sm:inline" />
            <label htmlFor="sort-select" className="sr-only">
              Urutkan berdasarkan
            </label>
            <select
              id="sort-select"
              value={filters.sortBy}
              onChange={(e) =>
                onFilterChange({ sortBy: e.target.value as SortOption, page: 1 })
              }
              className="bg-emerald-50/50 hover:bg-emerald-50 focus:bg-white text-emerald-950 text-xs font-semibold py-2.5 px-3.5 rounded-xl border border-emerald-900/10 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 cursor-pointer transition-all"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters Button */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-xl border border-amber-200 transition-colors"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs Bar */}
      <div className="relative">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat] ?? 0;
            const isSelected = filters.category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onFilterChange({ category: cat, page: 1 })}
                className={`inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                  isSelected
                    ? "bg-gradient-to-r from-emerald-900 to-emerald-950 text-emerald-100 border-emerald-900 shadow-md scale-[1.02]"
                    : "bg-white text-emerald-900/80 border-emerald-900/10 hover:border-emerald-700/40 hover:bg-emerald-50/50 hover:text-emerald-950"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${
                    isSelected
                      ? "bg-emerald-800 text-amber-200"
                      : "bg-emerald-100/70 text-emerald-800"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header Info */}
      <div className="flex items-center justify-between text-xs text-emerald-900/70 font-medium px-1">
        <div>
          Menampilkan <span className="font-bold text-emerald-950">{totalResults}</span> tanaman
          {filters.category !== "Semua" && (
            <span>
              {" "}dalam kategori <span className="font-bold text-emerald-900">"{filters.category}"</span>
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <div className="hidden sm:block text-[11px] text-emerald-700 italic">
            *Filter aktif diterapkan
          </div>
        )}
      </div>
    </div>
  );
}
