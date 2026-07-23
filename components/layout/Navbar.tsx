"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Leaf,
  Search,
  PhoneCall,
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "#" },
  { name: "Layanan Rental", href: "#layanan" },
  { name: "Koleksi Tanaman", href: "#koleksi" },
  { name: "Tentang Kami", href: "#tentang" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
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
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-emerald-900/80 transition-colors hover:text-emerald-950 hover:bg-emerald-900/5"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Search & Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Search Input */}
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-700/60 group-focus-within:text-emerald-900 transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari jenis tanaman..."
              className="w-48 rounded-xl bg-emerald-900/5 py-2 pl-9 pr-4 text-xs text-emerald-950 placeholder-emerald-800/50 outline-none ring-1 ring-emerald-900/10 focus:w-60 focus:bg-white focus:ring-emerald-800/40 transition-all duration-300"
            />
          </div>

          {/* Contact Button */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-emerald-900/10 px-4 py-2 text-xs font-semibold text-emerald-900 transition-all hover:bg-emerald-900/20"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>Konsultasi</span>
          </a>

          {/* Primary CTA */}
          <button
            type="button"
            className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-950 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-950/20 hover:shadow-lg hover:shadow-emerald-950/30 transition-all active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-300 animate-pulse" />
            <span>Sewa Now</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 overflow-hidden rounded-2xl glass-panel p-5 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="relative mb-2">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-700/60" />
                <input
                  type="text"
                  placeholder="Cari tanaman atau paket sewa..."
                  className="w-full rounded-xl bg-emerald-900/5 py-2.5 pl-9 pr-4 text-xs outline-none ring-1 ring-emerald-900/10"
                />
              </div>

              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-900/5 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-3 flex flex-col gap-2 border-t border-emerald-900/10 pt-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-900 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-950/20"
                >
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  <span>Sewa Tanaman Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
