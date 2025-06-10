# Cloudflare Pages Deployment

This project is configured to work with Cloudflare Pages' 25 MiB file size limit.

## Deployment Configuration

The project includes a `wrangler.toml` file that configures:
- **Build Command**: `npm run build:cf` (builds and removes cache files)
- **Output Directory**: `.next`
- **Pages Build Output**: `pages_build_output_dir = ".next"`

## Build Commands

- **Local Development**: `npm run build` (standard build)
- **Cloudflare Deployment**: `npm run build:cf` (build + cache removal)

## File Size Management

The `build:cf` command:
1. Runs `next build` to create the production build
2. Automatically removes the `.next/cache` directory using Node.js
3. Ensures all files are under the 25 MiB limit

## Current File Sizes

All files are well under the 25 MiB limit:
- Largest file: `vendors-*.js` (~468KB)
- Framework files: ~178KB
- Main chunks: ~164KB

## Notes

- **ESLint**: Disabled during builds to prevent deployment failures
- **Cache Removal**: Automatically handled by the build:cf script
- **Cross-Platform**: Uses Node.js for cache removal (works on Windows/Linux)
- **Webpack Optimization**: Aggressive chunk splitting keeps files small
