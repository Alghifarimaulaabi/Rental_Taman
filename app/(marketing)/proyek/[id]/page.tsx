import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home, LayoutGrid, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProjectImageGallery from "@/components/project/ProjectImageGallery";
import ProjectInfo from "@/components/project/ProjectInfo";
import TestimonialSlider from "@/components/testimonial/TestimonialSlider";
import { GalleryCard } from "@/components/gallery/GalleryCard";
import {
  getProjectById,
  getAllProjectIds,
  getRelatedProjects,
} from "@/lib/data/projects";
import { getTestimonialsForProject } from "@/lib/data/testimonials";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const ids = getAllProjectIds();
  return ids.map((id) => ({ id }));
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan | Aliza Decoration",
      description: "Halaman detail proyek rental taman tidak dapat ditemukan.",
    };
  }

  const imageUrl = project.images[0]?.url || `${baseUrl}/assets/Images/hero-tanaman.jpg`;
  const canonicalUrl = `${baseUrl}/proyek/${project.id}`;

  return {
    title: `${project.title} - Sewa Tanaman ${project.category}`,
    description: `${project.shortDescription} Lokasi: ${project.location}. Sewa tanaman hias eksklusif & perawatan harian profesional.`,
    keywords: [
      project.title,
      `dekorasi taman ${project.category.toLowerCase()}`,
      `rental tanaman ${project.location.toLowerCase()}`,
      "portofolio aliza decoration",
      "instalasi tanaman biofilik",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Aliza Decoration`,
      description: project.shortDescription,
      url: canonicalUrl,
      siteName: "Aliza Decoration",
      locale: "id_ID",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Aliza Decoration`,
      description: project.shortDescription,
      images: [imageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const testimonials = getTestimonialsForProject(project.id);
  const relatedProjects = getRelatedProjects(project.id, project.category, 3);

  return (
    <main className="relative flex min-h-screen flex-col bg-[#F4F7F4] selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 w-full pt-6 pb-20">
        {/* ================= BREADCRUMB NAVIGATION ================= */}
        <Breadcrumb
          items={[
            { label: "Beranda", href: "/", iconName: "home" },
            { label: "Galeri Proyek", href: "/galery", iconName: "gallery" },
            { label: project.title },
          ]}
          className="mb-8"
        />

        {/* ================= MAIN PROJECT DETAIL GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 w-full">
            <ProjectImageGallery
              images={project.images}
              title={project.title}
              category={project.category}
              location={project.location}
              availabilityStatus={project.availabilityStatus}
            />
          </div>

          {/* Right Column: Project Information & Actions */}
          <div className="lg:col-span-5 w-full">
            <ProjectInfo project={project} />
          </div>
        </div>

        {/* ================= CUSTOMER TESTIMONIALS SLIDER SECTION ================= */}
        <TestimonialSlider testimonials={testimonials} />

        {/* ================= RELATED PROJECTS SECTION ================= */}
        {relatedProjects.length > 0 && (
          <section className="mt-16 pt-12 border-t border-emerald-900/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-emerald-950">
                  Proyek Serupa Lainnya
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900/70">
                  Eksplorasi portfolio dekorasi tanaman kategori {project.category}
                </p>
              </div>

              <Link
                href="/galery"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <span>Lihat Semua Proyek</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relProj, index) => (
                <GalleryCard
                  key={relProj.id}
                  project={{
                    id: relProj.id,
                    title: relProj.title,
                    category: relProj.category,
                    location: relProj.location,
                    description: relProj.shortDescription,
                    imageUrl: relProj.images[0].url,
                    imageAlt: relProj.images[0].alt,
                    bentoClass: "min-h-[300px]",
                  }}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
