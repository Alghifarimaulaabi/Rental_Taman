"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page number array
  const pages: (number | string)[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-emerald-900/10 mt-10">
      {/* Items Range Info */}
      <p className="text-xs font-medium text-emerald-900/70">
        Menampilkan <span className="font-bold text-emerald-950">{startItem}</span> -{" "}
        <span className="font-bold text-emerald-950">{endItem}</span> dari{" "}
        <span className="font-bold text-emerald-950">{totalItems}</span> tanaman
      </p>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1.5">
        {/* Previous Button */}
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-900/10 bg-white text-emerald-950 hover:bg-emerald-50 hover:border-emerald-700/40 disabled:opacity-40 disabled:pointer-events-none transition-all"
          aria-label="Halaman sebelumnya"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Page Numbers */}
        {pages.map((p, idx) => {
          if (p === "...") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="px-2 text-xs font-bold text-emerald-900/40"
              >
                ...
              </span>
            );
          }

          const pageNum = p as number;
          const isActive = pageNum === currentPage;

          return (
            <button
              key={pageNum}
              type="button"
              onClick={() => onPageChange(pageNum)}
              className={`h-9 min-w-9 px-3 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? "bg-emerald-950 text-white shadow-md"
                  : "bg-white text-emerald-950 border border-emerald-900/10 hover:border-emerald-700/40 hover:bg-emerald-50"
              }`}
              aria-label={`Halaman ${pageNum}`}
              aria-current={isActive ? "page" : undefined}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-900/10 bg-white text-emerald-950 hover:bg-emerald-50 hover:border-emerald-700/40 disabled:opacity-40 disabled:pointer-events-none transition-all"
          aria-label="Halaman berikutnya"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
