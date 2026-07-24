import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceBenefits from "@/components/service/ServiceBenefits";
import ServiceFacilities from "@/components/service/ServiceFacilities";
import ServiceGallery from "@/components/service/ServiceGallery";
import ServiceWorkflow from "@/components/service/ServiceWorkflow";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import ServiceTestimonials from "@/components/service/ServiceTestimonials";
import ServiceCTA from "@/components/service/ServiceCTA";
import RelatedServices from "@/components/service/RelatedServices";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getRelatedServices,
} from "@/lib/data/services";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes at build time (SSG for all 7 services)
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate dynamic SEO Metadata per service page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const pageUrl = `${baseUrl}/layanan/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: pageUrl,
      siteName: "Aliza Decoration",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.slug, 3);

  return (
    <main className="relative flex min-h-screen flex-col bg-[#F4F7F4] selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* 1. Hero Section */}
      <ServiceHero service={service} />

      {/* 2. Benefits & Full Description Section */}
      <ServiceBenefits benefits={service.benefits} fullDesc={service.fullDesc} />

      {/* 3. Included Package Facilities Section */}
      <ServiceFacilities facilities={service.facilities} />

      {/* 4. Portfolio Photo Gallery Section */}
      <ServiceGallery gallery={service.gallery} title={service.title} />

      {/* 5. Ordering Workflow Step-by-Step Section */}
      <ServiceWorkflow workflow={service.workflow} />

      {/* 6. FAQ Accordion Section */}
      <ServiceFAQ faqs={service.faqs} title={service.title} />

      {/* 7. Customer Testimonials Automatic Slider */}
      <ServiceTestimonials testimonials={service.testimonials} />

      {/* 8. Call To Action Section */}
      <ServiceCTA title={service.title} />

      {/* 9. Related Services Section */}
      <RelatedServices services={relatedServices} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
