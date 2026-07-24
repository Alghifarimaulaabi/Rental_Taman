import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Domain placeholder sesuai instruksi (dapat diubah via variabel lingkungan NEXT_PUBLIC_SITE_URL)
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const playfair = Playfair_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
});

// Konfigurasi Metadata Global Next.js App Router
export const metadata: Metadata = {
  // Domain Dasar untuk Resolusi OpenGraph & Canonical URL
  metadataBase: new URL(baseUrl),

  // Title Default dan Template untuk Subhalaman
  title: {
    default: "Aliza Decoration | Premium Garden & Botanical Rental",
    template: "%s | Aliza Decoration",
  },

  // Deskripsi Utama Aplikasi
  description:
    "Layanan sewa tanaman hias, dekorasi taman, dan konsep lanskap botanical mewah untuk pernikahan, event corporate, kantor, & hunian eksklusif.",

  // Kata Kunci SEO
  keywords: [
    "sewa tanaman",
    "rental tanaman jakarta",
    "dekorasi taman kantor",
    "sewa tanaman indoor",
    "botanical landscape",
    "sewa monstera",
    "rental tanaman hotel",
    "aliza decoration",
    "sewa pohon hias",
    "taman biofilik",
  ],

  // Identitas Pembuat & Hak Cipta
  authors: [{ name: "Aliza Decoration", url: baseUrl }],
  creator: "Aliza Decoration Team",
  publisher: "Aliza Decoration",
  applicationName: "Aliza Decoration",
  category: "Garden & Plant Rental Services",

  // Canonical URL & Bahasa Alternatif
  alternates: {
    canonical: "./",
  },

  // Pengaturan Indeks Mesin Pencari (Robots)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Metadata Open Graph (Tampilan Media Sosial seperti Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "Aliza Decoration | Premium Garden & Botanical Rental",
    description:
      "Layanan sewa tanaman hias, dekorasi taman, dan konsep lanskap botanical mewah untuk pernikahan, event corporate, kantor, & hunian eksklusif.",
    url: baseUrl,
    siteName: "Aliza Decoration",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/Images/hero-tanaman.jpg",
        width: 1200,
        height: 630,
        alt: "Aliza Decoration - Luxury Garden Rental",
      },
    ],
  },

  // Metadata Twitter Card (Tampilan Kartu Twitter / X)
  twitter: {
    card: "summary_large_image",
    title: "Aliza Decoration | Premium Garden & Botanical Rental",
    description:
      "Layanan sewa tanaman hias & konsep lanskap botanical mewah untuk event, kantor, & hunian.",
    images: ["/assets/Images/hero-tanaman.jpg"],
    creator: "@alizadecoration",
  },

  // Favicon & Web App Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F6F8F5] text-emerald-950 font-sans selection:bg-emerald-800 selection:text-emerald-50">
        {children}
      </body>
    </html>
  );
}
