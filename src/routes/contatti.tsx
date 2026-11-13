import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SalonMap } from "@/components/salon-map";
import { SocialLinks } from "@/components/social-links";
import { salon, whatsappUrl } from "@/lib/salon";
import { faqs } from "@/lib/faq";
import { faqSchema, hairSalonSchema, pageHead } from "@/lib/seo";
import hero from "@/assets/hero.jpg.asset.json";

export const Route = createFileRoute("/contatti")({
  head: () => pageHead({ path: "/contatti", title: "Contatti e mappa | Hairshow Parrucchieri, Via Noci 113 Putignano", description: "Hairshow Parrucchieri, Via Noci 113, 70017 Putignano (BA). Chiama il 329 63 56 935 o scrivi su WhatsApp. Dal martedì al sabato su prenotazione.", image: hero.url, crumb: "Contatti", schemas: [hairSalonSchema(hero.url), faqSchema(faqs)] }),
  component: Contatti,
});

function Contatti() {
  return <>
    <SiteHeader />
    <main>
      <section className="section contact-band"><div className="container-shell contact-layout"><div><span className="eyebrow">Contatti</span><h1 className="page-title">Ti aspettiamo<br />in salone.</h1><p>Hairshow Parrucchieri<br />{salon.address}<br />{salon.opening}</p><SocialLinks /></div><div className="contact-actions"><Button asChild variant="inverse"><a href={whatsappUrl("Ciao Hairshow! Vorrei informazioni per un appuntamento in salone.")} target="_blank" rel="noopener noreferrer"><MessageCircle /> Scrivici su WhatsApp <ArrowUpRight /></a></Button><Button asChild variant="glass"><a href={`tel:${salon.phone}`}><Phone /> {salon.phoneLabel}</a></Button><Button asChild variant="glass"><a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin /> Indicazioni stradali <ArrowUpRight /></a></Button></div></div><div className="container-shell"><SalonMap className="contact-map" /></div></section>
      <section className="section container-shell"><div className="section-heading"><div><span className="eyebrow">Domande frequenti</span><h2>Domande frequenti.</h2></div></div><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    </main>
    <SiteFooter />
  </>;
}
