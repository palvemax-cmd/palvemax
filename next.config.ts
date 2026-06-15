import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // All images are local — no external domains needed
  },
};

export default nextConfig;
