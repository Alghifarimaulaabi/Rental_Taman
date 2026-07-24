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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
