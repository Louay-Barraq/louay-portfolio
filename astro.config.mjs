// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE_URL in Vercel once the final address is known (e.g. https://louaybarraq.me).
// It is used for canonical and hreflang links.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
});
