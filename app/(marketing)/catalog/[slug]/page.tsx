import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PlantCard from "@/components/catalog/PlantCard";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { plantsData } from "@/lib/data/plants";
import {
  ChevronRight,
  Leaf,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Sun,
  ShieldCheck,
  Truck,
  MessageSquare,
  ArrowLeft,
  Ruler,
  Droplets,
  Container,
  Home,
  Sprout,
} from "lucide-react";
import PlantDetailClient from "./PlantDetailClient";

interface PlantDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return plantsData.map((plant) => ({
    slug: plant.slug,
  }));
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export async function generateMetadata({ params }: PlantDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const plant = plantsData.find((p) => p.slug === slug);

  if (!plant) {
    return {
      title: "Tanaman Tidak Ditemukan | Aliza Decoration",
      description: "Halaman tanaman yang Anda cari tidak tersedia.",
    };
  }

  const imageUrl = plant.images[0]?.url || `${baseUrl}/assets/Images/hero-tanaman.jpg`;
  const canonicalUrl = `${baseUrl}/catalog/${plant.slug}`;

  return {
    title: `${plant.name} (${plant.botanicalName}) - Rental Tanaman ${plant.category}`,
    description: `${plant.shortDescription} Sewa tanaman hias ${plant.name} kualitas pilihan dengan harga ${new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(plant.rentalPrice)}/bulan.`,
    keywords: [
      plant.name,
      plant.botanicalName,
      `sewa ${plant.name.toLowerCase()}`,
      `rental tanaman ${plant.category.toLowerCase()}`,
      "sewa tanaman hias jakarta",
      "aliza decoration",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${plant.name} - Rental Tanaman ${plant.category} | Aliza Decoration`,
      description: plant.shortDescription,
      url: canonicalUrl,
      siteName: "Aliza Decoration",
      locale: "id_ID",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: plant.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${plant.name} - Sewa Tanaman ${plant.category}`,
      description: plant.shortDescription,
      images: [imageUrl],
    },
  };
}

export default async function PlantDetailPage({ params }: PlantDetailPageProps) {
  const { slug } = await params;
  const plant = plantsData.find((p) => p.slug === slug);

  if (!plant) {
    notFound();
  }

  // Related Plants (Same category or other featured items)
  const relatedPlants = plantsData
    .filter((p) => p.id !== plant.id && (p.category === plant.category || p.isFeatured))
    .slice(0, 4);

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(plant.rentalPrice);

  const waMessage = encodeURIComponent(
    `Halo Aliza Decoration, saya tertarik untuk menyewa tanaman *${plant.name}* (${plant.category}). Bisakah minta penawaran harga & jadwal survei lokasi?`
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F7F4] text-emerald-950 font-sans selection:bg-emerald-900 selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      <main className="flex-1 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/", iconName: "home" },
              { label: "Koleksi Tanaman", href: "/catalog", iconName: "catalog" },
              { label: plant.name },
            ]}
            className="mb-6 sm:mb-8"
          />

          {/* Back to Catalog Link */}
          <div className="mb-6">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-900 hover:text-emerald-950 transition-colors bg-white px-3.5 py-2 rounded-xl border border-emerald-900/10 shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Katalog</span>
            </Link>
          </div>

          {/* Plant Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-900/10 shadow-lg">
            
            {/* Left Column: Interactive Image Gallery Client Component */}
            <div className="lg:col-span-6">
              <PlantDetailClient images={plant.images} plantName={plant.name} />
            </div>

            {/* Right Column: Plant Specifications & Booking CTA */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                
                {/* Header Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-900 px-3.5 py-1 text-xs font-bold text-emerald-100">
                    {plant.category}
                  </span>

                  {plant.availabilityStatus === "Tersedia" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1 text-xs font-bold">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      Tersedia untuk Sewa
                    </span>
                  ) : plant.availabilityStatus === "Reservasi Terbatas" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-300 px-3 py-1 text-xs font-bold">
                      <Clock className="h-3.5 w-3.5 text-amber-600" />
                      Reservasi Terbatas
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 text-stone-700 border border-stone-300 px-3 py-1 text-xs font-bold">
                      <AlertCircle className="h-3.5 w-3.5 text-stone-500" />
                      Saat Ini Tersewa
                    </span>
                  )}
                </div>

                {/* Botanical Name & Title */}
                <div>
                  <p className="text-xs font-serif italic text-emerald-700 tracking-wider">
                    {plant.botanicalName}
                  </p>
                  <h1 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-950 mt-1 leading-tight">
                    {plant.name}
                  </h1>
                </div>

                {/* Price Display */}
                <div className="rounded-2xl bg-emerald-50/60 p-4 border border-emerald-900/10 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
                      Biaya Sewa Berseri
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-emerald-950">
                        {formattedPrice}
                      </span>
                      <span className="text-xs font-semibold text-emerald-900/70">
                        / {plant.pricePeriod || "bulan"}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-200/60 px-2.5 py-1 rounded-lg">
                    Termasuk Perawatan All-in
                  </span>
                </div>

                {/* Quick Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="flex flex-col rounded-xl bg-emerald-900/5 p-3 border border-emerald-900/5">
                    <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                      <Ruler className="h-3.5 w-3.5" />
                      <span>Tinggi</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-950 mt-1">
                      {plant.height}
                    </span>
                  </div>

                  <div className="flex flex-col rounded-xl bg-emerald-900/5 p-3 border border-emerald-900/5">
                    <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                      <Sun className="h-3.5 w-3.5" />
                      <span>Cahaya</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-950 mt-1 line-clamp-1">
                      {plant.lightRequirement}
                    </span>
                  </div>

                  <div className="flex flex-col rounded-xl bg-emerald-900/5 p-3 border border-emerald-900/5">
                    <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                      <Droplets className="h-3.5 w-3.5" />
                      <span>Perawatan</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-950 mt-1">
                      {plant.careLevel}
                    </span>
                  </div>

                  <div className="flex flex-col rounded-xl bg-emerald-900/5 p-3 border border-emerald-900/5">
                    <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                      <Container className="h-3.5 w-3.5" />
                      <span>Pot Type</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-950 mt-1 line-clamp-1">
                      {plant.potType}
                    </span>
                  </div>
                </div>

                {/* Descriptions */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-900/80">
                    Deskripsi & Karakteristik
                  </h3>
                  {plant.fullDescription.map((paragraph, i) => (
                    <p key={i} className="text-xs sm:text-sm text-emerald-900/80 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-900/80">
                    Keunggulan Sewa Tanaman Ini
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {plant.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-emerald-900">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons & Guarantees */}
              <div className="space-y-4 pt-4 border-t border-emerald-900/10">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/?text=${waMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-950 hover:from-emerald-950 hover:to-black text-white px-6 py-3.5 text-xs font-bold shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all"
                  >
                    <MessageSquare className="h-4 w-4 text-emerald-300" />
                    <span>Sewa Tanaman via WhatsApp</span>
                  </a>

                  <a
                    href="https://wa.me/?text=Halo%20Aliza%20Decoration,%20saya%20ingin%20konsultasi%20penataan%20tanaman"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 px-5 py-3.5 text-xs font-bold border border-emerald-900/15 transition-colors"
                  >
                    <span>Konsultasi Penataan Free</span>
                  </a>
                </div>

                {/* Service Guarantees */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-emerald-900/70 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-700" />
                    <span>Garansi Layu Ganti</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Leaf className="h-4 w-4 text-emerald-700" />
                    <span>Free Maintenance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Truck className="h-4 w-4 text-emerald-700" />
                    <span>Pengantaran Steril</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Related Plants Section */}
          {relatedPlants.length > 0 && (
            <div className="mt-16 sm:mt-20">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                    Koleksi Serupa
                  </span>
                  <h2 className="font-serif-display text-2xl font-bold text-emerald-950 mt-1">
                    Tanaman Sejenis yang Mungkin Anda Sukai
                  </h2>
                </div>
                <Link
                  href="/catalog"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-emerald-900 hover:text-emerald-700 transition-colors"
                >
                  <span>Lihat Semua Katalog</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedPlants.map((item) => (
                  <PlantCard key={item.id} plant={item} />
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
