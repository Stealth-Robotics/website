// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  // The public address (PRODUCT.md). Canonical links, absolute share-image URLs and the sitemap are built from it.
  site: "https://stealthrobotics.org",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
})
