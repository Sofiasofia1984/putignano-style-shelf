import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { Lightbox } from "@/components/lightbox";
import { barbershop } from "@/lib/gallery";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/barbershop")({
  head: () => pageHead({ path: "/barbershop", title: "Barbiere a Putignano: sfumature e tagli uomo | Hairshow", description: "Il barbershop di Hairshow a Putignano: sfumature, fade, rasature freestyle e tagli uomo. Prenota dall'app BarberApp.", image: barbershop[0].url, crumb: "Barbershop" }),
  component: Barbershop,
});

function Barbershop() {
  const [index, setIndex] = useState<number | null>(null);
  return <PageShell eyebrow="Barbershop" title="Il rito del barbiere." intro="Precisione, cura e tradizione. Il nostro angolo barbershop, dedicato a lui.">
    <section className="container-shell">
      <div className="hero-actions" style={{ marginBottom: 32 }}><p>Prenota il tuo taglio dall'app BarberApp — solo per uomini, per adesso.</p><Button asChild variant="editorial"><a href="https://www.softwareline.cloud/qr/BarberApp.php" target="_blank" rel="noopener noreferrer">Tutorial: prenota dall'app <ArrowUpRight /></a></Button></div>
      <div className="works-grid barbershop-grid">{barbershop.map((l, i) => <Button variant="ghost" className="work-item" key={l.title} aria-label={`Apri foto: ${l.title}`} onClick={() => setIndex(i)}><div className="w-full"><div className="work-image"><img src={l.url} alt={`${l.title} – barbiere a Putignano, Hairshow`} loading="lazy" /></div><div className="work-caption"><div><h3>{l.title}</h3><p>{l.detail}</p></div><ArrowUpRight size={18} /></div></div></Button>)}</div>
    </section>
    <Lightbox items={barbershop} index={index} onChange={setIndex} />
  </PageShell>;
}
