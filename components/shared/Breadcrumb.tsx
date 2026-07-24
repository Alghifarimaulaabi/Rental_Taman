"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, MoreHorizontal, Home, ChevronDown, Sprout, Sparkles, LayoutGrid } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  iconName?: "home" | "catalog" | "service" | "gallery";
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const iconMap = {
  home: Home,
  catalog: Sprout,
  service: Sparkles,
  gallery: LayoutGrid,
};

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!items || items.length === 0) return null;

  const firstItem = items[0];
  const lastItem = items[items.length - 1];
  const parentItems = items.slice(0, -1);

  const getIcon = (item: BreadcrumbItem, index: number) => {
    if (item.iconName && iconMap[item.iconName]) {
      const IconComponent = iconMap[item.iconName];
      return <IconComponent className="h-3.5 w-3.5" />;
    }
    if (index === 0) {
      return <Home className="h-3.5 w-3.5" />;
    }
    return null;
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`relative flex items-center gap-1.5 text-xs font-semibold text-emerald-900/70 ${className}`}
    >
      {/* ===== DESKTOP VIEW (Shows full path with responsive text truncation) ===== */}
      <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const icon = getIcon(item, idx);

          return (
            <div key={idx} className="flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-emerald-900/40 shrink-0" />
              )}

              {isLast ? (
                <span
                  title={item.label}
                  className="font-bold text-emerald-950 truncate max-w-[180px] md:max-w-[280px] lg:max-w-[400px]"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="flex items-center gap-1 hover:text-emerald-950 transition-colors shrink-0"
                >
                  {icon}
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* ===== MOBILE / COMPACT VIEW WITH '...' DROPDOWN ===== */}
      <div className="flex sm:hidden items-center gap-1.5 max-w-full">
        {/* First Item (Home) */}
        <Link
          href={firstItem.href || "/"}
          className="flex items-center gap-1 hover:text-emerald-950 transition-colors shrink-0"
        >
          {getIcon(firstItem, 0)}
        </Link>

        <ChevronRight className="h-3 w-3 text-emerald-900/40 shrink-0" />

        {/* Ellipsis '...' Dropdown Button for Parent Routes */}
        {parentItems.length > 1 && (
          <div className="relative shrink-0" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-0.5 rounded-md bg-emerald-900/10 px-2 py-0.5 text-xs font-bold text-emerald-900 hover:bg-emerald-900/20 transition-colors outline-none"
              aria-label="Tampilkan rute induk"
            >
              <MoreHorizontal className="h-3.5 w-3.5" />
              <ChevronDown className={`h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Panel for Hidden Parent Routes */}
            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-1.5 w-48 rounded-2xl bg-white/95 backdrop-blur-md p-2 shadow-xl ring-1 ring-emerald-900/10 z-50 animate-scale-in flex flex-col gap-1 border border-emerald-900/10">
                <span className="px-2 pt-1 pb-0.5 text-[10px] font-bold uppercase text-emerald-700 tracking-wider">
                  Navigasi Induk
                </span>
                {parentItems.map((pItem, pIdx) => {
                  const pIcon = getIcon(pItem, pIdx);
                  return (
                    <Link
                      key={pIdx}
                      href={pItem.href || "#"}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-medium text-emerald-950 hover:bg-emerald-900/10 transition-colors"
                    >
                      {pIcon || <ChevronRight className="h-3 w-3 text-emerald-700" />}
                      <span className="truncate">{pItem.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {parentItems.length > 1 && (
          <ChevronRight className="h-3 w-3 text-emerald-900/40 shrink-0" />
        )}

        {/* Current Active Item (Truncated with Ellipsis) */}
        <span
          title={lastItem.label}
          className="font-bold text-emerald-950 truncate max-w-[140px]"
        >
          {lastItem.label}
        </span>
      </div>
    </nav>
  );
}
