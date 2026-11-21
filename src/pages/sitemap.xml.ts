// A small static sitemap. Add a path here when a page is added (the site has a handful, so no plugin is needed).
import type { APIRoute } from "astro"

const paths = ["/", "/about", "/robots", "/sponsors", "/donate"]

export const GET: APIRoute = ({ site }) => {
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join("\n")
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  return new Response(xml, { headers: { "Content-Type": "application/xml" } })
}
