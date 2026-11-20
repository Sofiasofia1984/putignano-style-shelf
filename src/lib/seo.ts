import { salon, siteUrl } from "./salon";

export const hairSalonSchema = (image: string) => ({
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Hairshow Parrucchieri",
  telephone: "+39 329 635 6935",
  address: { "@type": "PostalAddress", streetAddress: "Via Noci 113", postalCode: "70017", addressLocality: "Putignano", addressRegion: "BA", addressCountry: "IT" },
  url: `${siteUrl}/`,
  ...(image.startsWith("https://") ? { image } : {}),
  description: "Parrucchiere e barbiere a Putignano. Taglio, colore, balayage e acconciature. Dal martedì al sabato, su prenotazione.",
  areaServed: { "@type": "City", name: "Putignano" },
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Servizi Hairshow", itemListElement: ["Taglio e styling", "Colore e balayage", "Trattamenti capelli", "Acconciature sposa", "Barbershop: tagli uomo e sfumature"].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) },
  sameAs: ["https://www.instagram.com/hairshow_parrucchieri", "https://www.facebook.com/Hairshowparrucchieri", "https://www.tiktok.com/@hairshow.parrucch"],
  hasMap: salon.mapsUrl,
});

type HeadInput = { path: string; title: string; description: string; image: string; crumb?: string; schemas?: object[] };

/** Builds unique per-page head tags: title, description, canonical, Open Graph, breadcrumb JSON-LD. */
export function pageHead({ path, title, description, image, crumb, schemas = [] }: HeadInput) {
  const url = `${siteUrl}${path}`;
  const imageMeta = image.startsWith("https://") ? [{ property: "og:image", content: image }, { name: "twitter:image", content: image }] : [];
  const all = [...schemas];
  if (crumb) all.push({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: crumb, item: url }] });
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      ...imageMeta,
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "IT-BA" },
      { name: "geo.placename", content: "Putignano" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: all.map(s => ({ type: "application/ld+json", children: JSON.stringify(s) })),
  };
}
