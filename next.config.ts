import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  }
};

export default nextConfig;
