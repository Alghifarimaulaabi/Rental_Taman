"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import SearchModal from "./SearchModal";
import {
  Leaf,
  Search,
  PhoneCall,
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  Building2,
  UtensilsCrossed,
  Heart,
  PartyPopper,
  Home,
  Sprout,
  Compass,
  ArrowRight,
} from "lucide-react";

export interface ServiceDropdownItem {
  name: string;
  href: string;
  icon: typeof Building2;
  description: string;
  isAll?: boolean;
}

const serviceItems: ServiceDropdownItem[] = [
  {
    name: "Rental Tanaman Kantor",
    href: "/layanan/rental-tanaman-kantor",
    icon: Building2,
    description: "Tanaman indoor berkala untuk ruangan kerja biofilik",
  },
  {
    name: "Rental Tanaman Hotel & Restoran",
    href: "/layanan/rental-tanaman-hotel-restoran",
    icon: UtensilsCrossed,
    description: "Dekorasi tropis eksotis penunjang suasana hospitality",
  },
  {
    name: "Dekorasi Wedding",
    href: "/layanan/dekorasi-wedding",
    icon: Heart,
    description: "Lanskap & backdrop taman tropis pernikahan impian",
  },
  {
    name: "Dekorasi Event",
    href: "/layanan/dekorasi-event",
    icon: PartyPopper,
    description: "Instalasi taman temporer gala dinner & pameran",
  },
  {
    name: "Rental Tanaman Residensial",
    href: "/layanan/rental-tanaman-residensial",
    icon: Home,
    description: "Sentuhan keasrian alam untuk hunian & penthouse mewah",
  },
  {
    name: "Perawatan Tanaman",
    href: "/layanan/perawatan-tanaman",
    icon: Sprout,
    description: "Perawatan rutin harian/bulanan oleh tim botanis ahli",
  },
  {
    name: "Konsultasi Landscape",
    href: "/layanan/konsultasi-landscape",
    icon: Compass,
    description: "Perancangan konsep lanskap & Fengshui tanaman",
  },
  {
    name: "Semua Layanan",
    href: "/layanan",
    icon: ArrowRight,
    description: "Lihat katalog lengkap seluruh paket rental Aliza",
    isAll: true,
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Global Ctrl+K / Cmd+K shortcut to open search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpenSearch = (initialVal = "") => {
    setSearchQuery(initialVal);
    setSearchModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl glass-panel px-5 py-3.5 shadow-lg shadow-emerald-950/5 transition-all duration-300">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-emerald-300 shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform duration-300">
              <Leaf className="h-5 w-5 fill-emerald-400/20 text-emerald-300 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-xl font-bold tracking-tight text-emerald-950">
                Aliza <span className="italic font-normal text-emerald-700">Decoration</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-700/80 -mt-1">
                Luxury Garden Rental
              </span>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden items-center gap-1 md:flex">
            {/* Link: Beranda */}
            <Link
              href="/"
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-emerald-900/80 transition-colors hover:text-emerald-950 hover:bg-emerald-900/5"
            >
              Beranda
            </Link>

            {/* Link with Dropdown: Layanan Kami */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-emerald-900/80 transition-colors hover:text-emerald-950 hover:bg-emerald-900/5 outline-none"
              >
                <span>Layanan Kami</span>
                <ChevronDown
                  className={`h-4 w-4 text-emerald-700 transition-transform duration-300 ${
                    servicesDropdownOpen ? "rotate-180 text-emerald-950" : ""
                  }`}
                />
              </button>

              {/* Desktop Dropdown Menu Panel */}
              <div
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className={`absolute left-0 top-full mt-2 w-80 sm:w-96 rounded-2xl bg-white/95 backdrop-blur-xl p-3 shadow-2xl shadow-emerald-950/15 ring-1 ring-emerald-900/10 border border-emerald-900/10 z-50 overflow-hidden transition-all duration-200 ease-out origin-top ${
                  servicesDropdownOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-96 translate-y-2 pointer-events-none"
                }`}
              >
                <div className="mb-2 px-3 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Layanan Rental & Dekorasi
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  {serviceItems.map((item, idx) => {
                    const IconComponent = item.icon;
                    if (item.isAll) {
                      return (
                        <div key={idx} className="mt-1 pt-1.5 border-t border-emerald-900/10">
                          <Link
                            href={item.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="group flex items-center justify-between rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-950 px-4 py-3 text-xs font-semibold text-white shadow-md hover:shadow-lg transition-all"
                          >
                            <span className="flex items-center gap-2">
                              <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                              {item.name}
                            </span>
                            <ArrowRight className="h-4 w-4 text-emerald-300 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-emerald-900/5"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-900/10 text-emerald-900 group-hover:bg-emerald-900 group-hover:text-emerald-300 transition-colors">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[11px] text-emerald-900/60 leading-tight">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Link: Koleksi Tanaman */}
            <Link
              href="/catalog"
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-emerald-900/80 transition-colors hover:text-emerald-950 hover:bg-emerald-900/5"
            >
              Koleksi Tanaman
            </Link>

            {/* Link: Tentang Kami */}
            <Link
              href="#tentang"
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-emerald-900/80 transition-colors hover:text-emerald-950 hover:bg-emerald-900/5"
            >
              Tentang Kami
            </Link>
          </nav>

          {/* Right Section: Search & Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Interactive Search Trigger Input */}
            <button
              type="button"
              onClick={() => handleOpenSearch()}
              className="group relative flex items-center justify-between w-52 rounded-xl bg-emerald-900/5 py-2 pl-9 pr-3 text-xs text-emerald-900/60 ring-1 ring-emerald-900/10 hover:bg-white hover:ring-emerald-800/40 transition-all duration-300 text-left outline-none"
            >
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-700/60 group-hover:text-emerald-950 transition-colors" />
              <span className="truncate">Cari tanaman, layanan...</span>
              <kbd className="hidden xl:inline-block text-[10px] bg-emerald-900/10 px-1.5 py-0.5 rounded text-emerald-900/80 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Contact Button */}
            <a
              href="https://wa.me/+6283830104299"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-emerald-900/10 px-4 py-2 text-xs font-semibold text-emerald-900 transition-all hover:bg-emerald-900/20"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Konsultasi</span>
            </a>

            {/* Primary CTA */}
            <a
              href="https://wa.me/+6283830104299"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-950 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-950/20 hover:shadow-lg hover:shadow-emerald-950/30 transition-all active:scale-95"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-300 animate-pulse" />
              <span>Sewa</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Search Icon & Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => handleOpenSearch()}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-900/5 text-emerald-900 hover:bg-emerald-900/10 transition-colors"
              aria-label="Cari"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-900/5 text-emerald-900 hover:bg-emerald-900/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          className={`mt-2 overflow-hidden rounded-2xl glass-panel shadow-xl md:hidden transition-all duration-300 ease-out ${
            mobileMenuOpen
              ? "max-h-[600px] opacity-100 p-5"
              : "max-h-0 opacity-0 p-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-3">
            {/* Mobile Search Button */}
            <button
              type="button"
              onClick={() => handleOpenSearch()}
              className="relative mb-2 flex items-center gap-3 w-full rounded-xl bg-emerald-900/5 py-2.5 px-4 text-xs text-emerald-900/70 outline-none ring-1 ring-emerald-900/10 text-left"
            >
              <Search className="h-4 w-4 text-emerald-700/60" />
              <span>Cari tanaman atau paket sewa...</span>
            </button>

            {/* Beranda */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-900/5 transition-colors"
            >
              Beranda
            </Link>

            {/* Mobile Layanan Kami Submenu Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-900/5 transition-colors"
              >
                <span>Layanan Kami</span>
                <ChevronDown
                  className={`h-4 w-4 text-emerald-700 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 ml-3 flex flex-col gap-1.5 border-l-2 border-emerald-900/10 pl-3 py-1">
                  {serviceItems.map((item, sIdx) => (
                    <Link
                      key={sIdx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xs font-medium transition-colors ${
                        item.isAll
                          ? "font-bold text-emerald-800 flex items-center gap-1 mt-1"
                          : "text-emerald-900/80 hover:text-emerald-950"
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.isAll && <ArrowRight className="h-3 w-3" />}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Koleksi Tanaman */}
            <Link
              href="/catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-900/5 transition-colors"
            >
              Koleksi Tanaman
            </Link>

            {/* Tentang Kami */}
            <Link
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-900/5 transition-colors"
            >
              Tentang Kami
            </Link>

            <div className="mt-3 flex flex-col gap-2 border-t border-emerald-900/10 pt-3">
              <a
                href="https://wa.me/+6283830104299"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-900 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-950/20"
              >
                <Sparkles className="h-4 w-4 text-emerald-300" />
                <span>Sewa Tanaman Now</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Global Interactive Search Popup Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        initialQuery={searchQuery}
      />
    </>
  );
};

export default Navbar;
