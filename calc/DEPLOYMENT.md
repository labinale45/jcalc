# JCalc Deployment Guide

## Static Export

JCalc is configured for **static export** (`output: "export"`). The build produces a static site in the `out` directory, ready for any static hosting service.

## Build

```bash
npm run build
```

Output is written to `out/`. Serve locally with:

```bash
npx serve out
```

## Deploy to Cloudflare Pages

1. **Via Git (recommended):**
   - Push your repo to GitHub/GitLab.
   - In Cloudflare Pages, connect the repo.
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `calc` (if the project lives in a `calc` subfolder)

2. **Via Wrangler CLI:**
   ```bash
   npm run build
   npx wrangler pages deploy out
   ```

3. **Manual upload:** Build locally, then upload the contents of `out/` via the Cloudflare Pages dashboard.

## Deploy to Vercel / Netlify / Other CDN

- **Build command:** `npm run build`
- **Output directory:** `out`
- **Framework preset:** Static HTML (or Next.js if the platform auto-detects and supports static export)

## AdSense Setup

1. Replace the placeholder `<AdBlock>` components with your AdSense code.
2. Add your `data-ad-client` and `data-ad-slot` values.
3. Ensure your site is AdSense-approved and ad units are created.
4. Ad placement zones: header, below result, between content, footer.

## Custom Domain

Update `metadataBase` in `src/app/layout.tsx` to your domain:

```ts
metadataBase: new URL("https://yourdomain.com"),
```
