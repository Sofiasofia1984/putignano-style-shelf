import { createFileRoute } from "@tanstack/react-router";
import { siteUrl } from "@/lib/salon";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = ["/", "/servizi", "/lavori", "/contatti", "/prodotti", "/privacy", "/condizioni"].map((p) => `<url><loc>${siteUrl}${p}</loc></url>`).join("");
        return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
