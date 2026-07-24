"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/catalog/HeroSection";
import FilterBar from "@/components/catalog/FilterBar";
import PlantGrid from "@/components/catalog/PlantGrid";
import PlantSkeleton from "@/components/catalog/PlantSkeleton";
import EmptyState from "@/components/catalog/EmptyState";
import ErrorState from "@/components/catalog/ErrorState";
import Pagination from "@/components/catalog/Pagination";
import { plantsData } from "@/lib/data/plants";
import { PlantFilterState } from "@/lib/types/plant";

const ITEMS_PER_PAGE = 8;

const initialFilterState: PlantFilterState = {
  searchQuery: "",
  category: "Semua",
  availability: "Semua",
  sortBy: "newest",
  page: 1,
};

export default function CatalogClient() {
  const [filters, setFilters] = useState<PlantFilterState>(initialFilterState);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Compute Category Counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Semua: plantsData.length };
    plantsData.forEach((plant) => {
      counts[plant.category] = (counts[plant.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter & Sort Logic
  const filteredPlants = useMemo(() => {
    return plantsData
      .filter((plant) => {
        // Search Filter (name, botanical name, category, shortDescription)
        if (filters.searchQuery.trim()) {
          const q = filters.searchQuery.toLowerCase();
          const matchesName = plant.name.toLowerCase().includes(q);
          const matchesBotanical = plant.botanicalName.toLowerCase().includes(q);
          const matchesCategory = plant.category.toLowerCase().includes(q);
          const matchesDesc = plant.shortDescription.toLowerCase().includes(q);
          if (!matchesName && !matchesBotanical && !matchesCategory && !matchesDesc) {
            return false;
          }
        }

        // Category Filter
        if (filters.category !== "Semua" && plant.category !== filters.category) {
          return false;
        }

        // Availability Filter
        if (filters.availability !== "Semua") {
          if (filters.availability === "Tersedia" && plant.availabilityStatus !== "Tersedia") {
            return false;
          }
          if (filters.availability === "Tidak Tersedia" && plant.availabilityStatus === "Tersedia") {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case "a-z":
            return a.name.localeCompare(b.name, "id");
          case "z-a":
            return b.name.localeCompare(a.name, "id");
          case "price-low":
            return a.rentalPrice - b.rentalPrice;
          case "price-high":
            return b.rentalPrice - a.rentalPrice;
          case "newest":
          default:
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
      });
  }, [filters.searchQuery, filters.category, filters.availability, filters.sortBy]);

  // Paginated Results
  const totalItems = filteredPlants.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
  const currentPage = Math.min(filters.page, totalPages);

  const paginatedPlants = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPlants.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPlants, currentPage]);

  // Handler for filter updates with smooth simulated loading
  const handleFilterChange = (updated: Partial<PlantFilterState>) => {
    setIsLoading(true);
    setFilters((prev) => ({ ...prev, ...updated }));
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  };

  const handleResetFilters = () => {
    setIsLoading(true);
    setFilters(initialFilterState);
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F7F4] text-emerald-950 font-sans selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Catalog Body Container */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Filter & Search Controls */}
          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            totalResults={totalItems}
            categoryCounts={categoryCounts}
          />

          {/* Plant Listing / States */}
          <div className="mt-8">
            {hasError ? (
              <ErrorState onRetry={() => setHasError(false)} />
            ) : isLoading ? (
              <PlantSkeleton count={ITEMS_PER_PAGE} />
            ) : paginatedPlants.length === 0 ? (
              <EmptyState
                onReset={handleResetFilters}
                searchQuery={filters.searchQuery}
              />
            ) : (
              <>
                <PlantGrid plants={paginatedPlants} />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(p) => handleFilterChange({ page: p })}
                  itemsPerPage={ITEMS_PER_PAGE}
                  totalItems={totalItems}
                />
              </>
            )}
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
