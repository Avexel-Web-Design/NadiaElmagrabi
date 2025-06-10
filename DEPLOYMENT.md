# Cloudflare Pages Deployment

This project is configured to work with Cloudflare Pages' 25 MiB file size limit.

## Deployment Configuration

The project includes a `wrangler.toml` file that configures:
- **Build Command**: `npm run build`
- **Publish Directory**: `.next`

## Build Configuration

- **ESLint**: Disabled during builds to prevent deployment failures
- **Webpack**: Configured for aggressive chunk splitting
- **File Exclusions**: Cache files automatically excluded

## File Size Limits

With the current configuration, all files are well under the 25 MiB limit:
- `chunks/vendors-*.js`: ~140KB
- `chunks/4bd1b696-*.js`: ~53KB
- Main page bundle: ~5KB

## Deployment Steps

1. Push your code to the repository
2. Cloudflare Pages will automatically:
   - Run `npm run build`
   - Deploy the `.next` directory
   - Exclude cache files via `.cfignore`

## Notes

- ESLint is disabled during builds (`ignoreDuringBuilds: true`)
- All production files are optimized and under size limits
- The build process works on both Windows and Linux environments
