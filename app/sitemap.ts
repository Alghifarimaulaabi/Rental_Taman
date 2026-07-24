import type { MetadataRoute } from "next";
import { plantsData } from "@/lib/data/plants";
import { projectsData } from "@/lib/data/projects";
import { servicesData } from "@/lib/data/services";

// Domain dasar placeholder (dapat dikustomisasi via environment variable)
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // 1. Halaman Statis Utama
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/catalog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tanaman`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galery`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // 2. Dynamic Routes: Layanan Kami (/layanan/[slug])
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/layanan/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 3. Dynamic Routes: Koleksi Tanaman (/catalog/[slug])
  const plantCatalogRoutes: MetadataRoute.Sitemap = plantsData.map((plant) => ({
    url: `${baseUrl}/catalog/${plant.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 4. Dynamic Routes: Koleksi Tanaman Alias (/tanaman/[slug])
  const plantTanamanRoutes: MetadataRoute.Sitemap = plantsData.map((plant) => ({
    url: `${baseUrl}/tanaman/${plant.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // 5. Dynamic Routes: Proyek Portofolio (/proyek/[id])
  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/proyek/${project.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...plantCatalogRoutes,
    ...plantTanamanRoutes,
    ...projectRoutes,
  ];
}
