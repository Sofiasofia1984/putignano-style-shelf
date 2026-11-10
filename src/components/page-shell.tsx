import type { ReactNode } from "react";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { salon, whatsappUrl } from "@/lib/salon";

export function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro: ReactNode; children: ReactNode }) {
  return <>
    <SiteHeader />
    <main>
      <section className="section container-shell">
        <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h1 className="page-title">{title}</h1></div><p>{intro}</p></div>
      </section>
      {children}
      <BookingBand />
    </main>
    <SiteFooter />
  </>;
}

export function BookingBand() {
  return <section className="section contact-band"><div className="container-shell contact-layout"><div><span className="eyebrow">Prenota</span><h2>Il tuo prossimo look<br />inizia qui.</h2><p>{salon.address}<br />{salon.opening}</p></div><div className="contact-actions"><Button asChild variant="inverse"><a href={whatsappUrl("Ciao Hairshow! Vorrei prenotare un appuntamento.")} target="_blank" rel="noopener noreferrer"><MessageCircle /> Scrivici su WhatsApp <ArrowUpRight /></a></Button><Button asChild variant="glass"><a href={`tel:${salon.phone}`}><Phone /> {salon.phoneLabel}</a></Button></div></div></section>;
}
