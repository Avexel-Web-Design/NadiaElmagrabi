# Cloudflare Pages Deployment

This project is configured to work with Cloudflare Pages' 25 MiB file size limit.

## Deployment Configuration

The project is configured to automatically work with Cloudflare Pages using the standard build command.

## Build Commands

- **Production Build**: `npm run build` (builds and removes cache files automatically)
- **Local Development Build**: `npm run build:local` (standard build without cache removal)
- **Development Server**: `npm run dev`

## Cache Management

The default `npm run build` command automatically:
1. Runs `next build` to create the production build
2. Removes the `.next/cache` directory using Node.js to prevent size limit issues
3. Displays "Cache directory removed for deployment" confirmation

## File Size Verification

All files are well under the 25 MiB limit:
- Largest files: `vendors-*.js` (~140KB)
- Framework chunks: ~53KB
- Application bundles: ~5KB

## Cloudflare Pages Setup

1. **Build Command**: `npm run build` (default)
2. **Output Directory**: `.next`
3. **Node.js Version**: 22.x (automatically detected)

## Notes

- **No wrangler.toml needed**: Uses Cloudflare's default detection
- **ESLint**: Disabled during builds to prevent deployment failures
- **Cross-Platform**: Cache removal works on both Windows and Linux
- **Automatic**: No manual steps required for deployment
