import { Metadata } from "next";
import CatalogClient from "./CatalogClient";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

// Konfigurasi Metadata SEO Khusus Halaman Katalog Tanaman
export const metadata: Metadata = {
  title: "Koleksi & Katalog Tanaman Hias Eksklusif | Aliza Decoration",
  description:
    "Jelajahi katalog tanaman hias indoor, outdoor, palem, tanaman meja, & gantung untuk disewa. Bebas biaya perawatan & bergaransi keasrian 100%.",
  keywords: [
    "katalog tanaman hias",
    "sewa tanaman indoor",
    "sewa tanaman outdoor",
    "rental monstera",
    "tanaman meja kantor",
    "sewa palem hias",
    "aliza decoration katalog",
  ],
  alternates: {
    canonical: `${baseUrl}/catalog`,
  },
  openGraph: {
    title: "Koleksi & Katalog Tanaman Hias Eksklusif | Aliza Decoration",
    description:
      "Jelajahi koleksi tanaman hias premium terlengkap untuk rental kantor, hotel, event, & hunian eksklusif.",
    url: `${baseUrl}/catalog`,
    siteName: "Aliza Decoration",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/Images/hero-tanaman.jpg",
        width: 1200,
        height: 630,
        alt: "Koleksi Tanaman Hias Aliza Decoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koleksi Tanaman Hias Premium | Aliza Decoration",
    description:
      "Sewa tanaman hias indoor & outdoor terlengkap dengan garansi keasrian dan pemeliharaan gratis.",
    images: ["/assets/Images/hero-tanaman.jpg"],
  },
};

export default function CatalogPage() {
  return <CatalogClient />;
}
