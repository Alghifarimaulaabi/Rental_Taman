"use client";

import Link from "next/link";
import { Leaf, Mail, MapPin, ArrowUpRight, Heart } from "lucide-react";

const socialLinks = [
  {
    initial: "WA",
    name: "WhatsApp",
    href: "https://wa.me/6281234567890",
    ariaLabel: "WhatsApp Aliza Decoration",
    bgHover: "hover:bg-emerald-600 hover:text-white",
  },
  {
    initial: "IG",
    name: "Instagram",
    href: "https://instagram.com/alizadecoration",
    ariaLabel: "Instagram Aliza Decoration",
    bgHover: "hover:bg-emerald-600 hover:text-white",
  },
  {
    initial: "FB",
    name: "Facebook",
    href: "https://facebook.com/alizadecoration",
    ariaLabel: "Facebook Aliza Decoration",
    bgHover: "hover:bg-emerald-600 hover:text-white",
  },
  {
    initial: "TT",
    name: "TikTok",
    href: "https://tiktok.com/@alizadecoration",
    ariaLabel: "TikTok Aliza Decoration",
    bgHover: "hover:bg-emerald-600 hover:text-white",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#082216] text-white pt-16 pb-8 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden border-t border-emerald-900/30">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute left-1/4 bottom-0 -z-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-800/30">
          {/* Brand Info (5 Cols) */}
          <div className="flex flex-col items-start gap-4 lg:col-span-5">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-900 text-emerald-300 shadow-md shadow-emerald-950/40">
                <Leaf className="h-5 w-5 text-emerald-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-display text-2xl font-bold tracking-tight text-white">
                  Aliza <span className="italic font-normal text-emerald-400">Decoration</span>
                </span>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-300/70 -mt-1">
                  Luxury Garden Rental
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed max-w-md font-normal mt-1">
              Spesialis layanan sewa tanaman hias eksotis, instalasi taman lanskap biofilik, dan dekorasi alam berkelas untuk kantor, hotel, wedding, & hunian eksklusif.
            </p>

            {/* Social Media Links with Initials (WA, IG, FB, TT) */}
            <div className="flex flex-col gap-2.5 pt-2">
              <span className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                Ikuti Media Sosial & Kontak:
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-900/50 text-xs font-black tracking-wider text-emerald-300 ring-1 ring-emerald-700/40 shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 ${item.bgHover}`}
                    aria-label={item.ariaLabel}
                  >
                    <span>{item.initial}</span>
                    
                    {/* Tooltip on hover */}
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-emerald-950 px-2 py-0.5 text-[10px] font-semibold text-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-emerald-700/30">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Nav Links (3 Cols) */}
          <div className="flex flex-col items-start gap-3 lg:col-span-3">
            <h4 className="font-serif-display text-base font-bold text-white tracking-wide">
              Navigasi Cepat
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-emerald-100/70 font-medium">
              <li>
                <Link href="#" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="h-3 w-3 text-emerald-400" />
                  <span>Beranda</span>
                </Link>
              </li>
              <li>
                <Link href="#tentang" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="h-3 w-3 text-emerald-400" />
                  <span>Tentang Aliza Decoration</span>
                </Link>
              </li>
              <li>
                <Link href="#layanan" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="h-3 w-3 text-emerald-400" />
                  <span>Layanan Rental Tanaman</span>
                </Link>
              </li>
              <li>
                <Link href="#galeri" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="h-3 w-3 text-emerald-400" />
                  <span>Galeri Proyek (Bento)</span>
                </Link>
              </li>
              <li>
                <Link href="#alur" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="h-3 w-3 text-emerald-400" />
                  <span>Alur Pemesanan</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (4 Cols) */}
          <div className="flex flex-col items-start gap-3 lg:col-span-4">
            <h4 className="font-serif-display text-base font-bold text-white tracking-wide">
              Kontak & Alamat
            </h4>
            <div className="flex flex-col gap-3 text-xs text-emerald-100/70 font-normal">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jl. Botanical Garden No. 88, Jakarta Selatan, Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-800 text-[10px] font-black text-emerald-300 shrink-0">
                  WA
                </span>
                <span>+62 812-3456-7890 (WhatsApp Available)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>halo@alizadecoration.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60 font-medium">
          <p>© {new Date().getFullYear()} Aliza Decoration. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="h-3 w-3 text-emerald-400 fill-emerald-400" />
            <span>for Luxury Garden Lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
