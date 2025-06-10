# Cloudflare Pages Deployment

This project is configured to work with Cloudflare Pages' 25 MiB file size limit.

## Deployment Steps

1. **Use the standard build command:**
   ```bash
   npm run build
   ```
   The webpack configuration automatically handles chunk splitting to keep files under the size limit.

2. **Deploy the project** to Cloudflare Pages. The `.cfignore` file will exclude cache files automatically.

## Configuration Details

- **Webpack Configuration**: The `next.config.ts` file includes aggressive chunk splitting to keep individual files under 20MB
- **Cache Exclusion**: The `.cfignore` file excludes webpack cache files from deployment
- **File Tracing**: Configured to exclude unnecessary files from the deployment bundle

## File Size Limits

- Maximum chunk size: 20MB (buffer under 25 MiB limit)
- Vendor chunks: Max 15MB
- Common chunks: Max 10MB

## Build Output Example

With the current configuration, the largest files are:
- `chunks/vendors-*.js`: ~140KB
- `chunks/4bd1b696-*.js`: ~53KB

All files are well under the 25 MiB limit.

## Notes

- The webpack cache files are automatically excluded via `.cfignore`
- All production files are kept well under the 25 MiB limit
- The build process works on both Windows and Linux environments
