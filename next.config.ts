import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // More aggressive chunk splitting for Cloudflare Pages 25 MiB limit
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        maxSize: 20000000, // 20MB - leave some buffer under 25 MiB limit
        minSize: 20000,
        maxAsyncRequests: 30,
        maxInitialRequests: 25,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            maxSize: 15000000, // 15MB for vendor chunks
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            maxSize: 10000000, // 10MB for common chunks
          },
        },
      };
    }
    return config;
  },
  // Exclude cache and other unnecessary files from build output
  outputFileTracingExcludes: {
    '*': [
      '.next/cache/**/*',
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
};

export default nextConfig;
