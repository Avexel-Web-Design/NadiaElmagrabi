import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks.maxSize = 25000000; // 25MB limit for Cloudflare Pages
    }
    return config;
  },
};

export default nextConfig;
