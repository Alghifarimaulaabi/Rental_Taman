import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Galery from "@/components/Galery";
import Footer from "@/components/layout/Footer";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Galery & Portofolio Dekorasi Taman | Aliza Decoration",
  description:
    "Lihat galeri dokumentasi hasil dekorasi lanskap & sewa tanaman tropis untuk hotel bintang lima, kantor corporate, wedding, & event pameran.",
  keywords: [
    "galeri dekorasi taman",
    "portofolio sewa tanaman",
    "galeri aliza decoration",
    "foto lanskap kantor",
    "dekorasi wedding tropis",
  ],
  alternates: {
    canonical: `${baseUrl}/galery`,
  },
  openGraph: {
    title: "Galery & Portofolio Dekorasi Taman | Aliza Decoration",
    description:
      "Dokumentasi proyek dekorasi taman & rental tanaman hias eksklusif Aliza Decoration.",
    url: `${baseUrl}/galery`,
    siteName: "Aliza Decoration",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/Images/hero-tanaman.jpg",
        width: 1200,
        height: 630,
        alt: "Galeri Portofolio Aliza Decoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galery Portofolio Taman | Aliza Decoration",
    description:
      "Dokumentasi proyek dekorasi taman & rental tanaman hias eksklusif Aliza Decoration.",
    images: ["/assets/Images/hero-tanaman.jpg"],
  },
};

export default function GaleryPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#F4F7F4] selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      <Navbar />
      <div className="pt-6">
        <Galery />
      </div>
      <Footer />
    </main>
  );
}
