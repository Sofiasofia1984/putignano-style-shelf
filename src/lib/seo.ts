import { salon, siteUrl } from "./salon";

export const hairSalonSchema = (image: string) => ({
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Hairshow Parrucchieri",
  telephone: "+39 329 635 6935",
  address: { "@type": "PostalAddress", streetAddress: "Via Noci 113", postalCode: "70017", addressLocality: "Putignano", addressRegion: "BA", addressCountry: "IT" },
  url: `${siteUrl}/`,
  image: `${siteUrl}${image}`,
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] }],
  sameAs: ["https://www.instagram.com/hairshow_parrucchieri", "https://www.facebook.com/Hairshowparrucchieri", "https://www.tiktok.com/@hairshow.parrucch"],
  hasMap: salon.mapsUrl,
});

export const faqSchema = (faqs: readonly (readonly [string, string])[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

type HeadInput = { path: string; title: string; description: string; image?: string; crumb?: string; schemas?: object[] };

/** Builds unique per-page head tags: title, description, canonical, Open Graph, breadcrumb JSON-LD. */
export function pageHead({ path, title, description, image, crumb, schemas = [] }: HeadInput) {
  const url = `${siteUrl}${path}`;
  const img = image ? `${siteUrl}${image}` : null;
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
      ...(img ? [{ property: "og:image", content: img }, { name: "twitter:image", content: img }] : []),
      { name: "twitter:card", content: img ? "summary_large_image" : "summary" },
      { name: "geo.region", content: "IT-BA" },
      { name: "geo.placename", content: "Putignano" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: all.map(s => ({ type: "application/ld+json", children: JSON.stringify(s) })),
  };
}
