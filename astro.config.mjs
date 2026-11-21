// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  // The public address (PRODUCT.md). Canonical links, absolute share-image URLs and the sitemap are built from it.
  site: "https://stealthrobotics.org",
  // The old WordPress site's addresses, so old bookmarks and search results land on the matching new page.
  // (/donate and /sponsors kept their paths. Old news posts have no equivalent and fall through to the 404 page.)
  redirects: {
    "/about-us": "/about",
    "/about-us/past-robots": "/robots",
    "/about-us/affiliate-teams": "/robots",
    "/about-us/stealth-4089-booster-club": "/donate",
    "/news": "/",
    "/resources": "/about",
    "/calendar": "/about",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
})
