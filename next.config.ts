import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Aktifkan format modern untuk penghematan bandwidth (~38 KiB)
    formats: ["image/avif", "image/webp"],
    // Cache gambar selama 1 hari (meningkatkan performa repeat visit)
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
