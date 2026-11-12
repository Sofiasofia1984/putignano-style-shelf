import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { Lightbox } from "@/components/lightbox";
import { barbershop } from "@/lib/gallery";
import { pageHead } from "@/lib/seo";
import { whatsappUrl } from "@/lib/salon";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/barbershop")({
  head: () => pageHead({ path: "/barbershop", title: "Barbiere a Putignano: sfumature e tagli uomo | Hairshow", description: "Il barbershop di Hairshow a Putignano: sfumature, fade, rasature freestyle e tagli uomo. Prenota dall'app BarberApp.", image: barbershop[0]?.url ?? "", crumb: "Barbershop" }),
  component: Barbershop,
});

function Barbershop() {
  const [index, setIndex] = useState<number | null>(null);
  return <PageShell eyebrow="Barbershop" title="Il rito del barbiere." intro="Precisione, cura e tradizione. Il nostro angolo barbershop, dedicato a lui.">
    <section className="container-shell mb-12">
      <div className="works-grid">
        <article><h2 className="text-2xl font-medium mb-4">Tagli uomo</h2><p className="text-sm text-muted-foreground leading-7">Linee pulite e tagli di carattere. Scegliamo insieme la forma e lo styling che esprimono il tuo stile.</p></article>
        <article><h2 className="text-2xl font-medium mb-4">Sfumature & fade</h2><p className="text-sm text-muted-foreground leading-7">Passaggi definiti e cura dei contorni: la sfumatura dà equilibrio al taglio e mette in risalto i dettagli.</p></article>
        <article><h2 className="text-2xl font-medium mb-4">Freestyle design</h2><p className="text-sm text-muted-foreground leading-7">Rasature artistiche e linee grafiche per un look personale. Guarda alcuni esempi nei nostri lavori qui sotto.</p></article>
      </div>
    </section>
    <section className="container-shell">
      <div className="mb-8 border-t border-border pt-8"><h2 className="text-2xl font-medium mb-4">Il tuo prossimo appuntamento.</h2><p className="text-sm text-muted-foreground leading-7 mb-6">Prenota il tuo taglio dall'app BarberApp — solo per uomini, per adesso. Per informazioni sul taglio o sulla prenotazione puoi contattarci anche su WhatsApp.</p><div className="hero-actions"><Button asChild variant="editorial"><a href="https://www.softwareline.cloud/qr/BarberApp.php" target="_blank" rel="noopener noreferrer">Tutorial: prenota dall'app <ArrowUpRight /></a></Button><Button asChild variant="outline"><a href={whatsappUrl("Ciao Hairshow! Vorrei informazioni sul barbershop.")} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button></div></div>
      <div className="works-grid barbershop-grid">{barbershop.map((l, i) => <Button variant="ghost" className="work-item" key={l.title} aria-label={`Apri foto: ${l.title}`} onClick={() => setIndex(i)}><div className="w-full"><div className="work-image"><img src={l.url} alt={`${l.title} – barbiere a Putignano, Hairshow`} loading="lazy" /></div><div className="work-caption"><div><h3>{l.title}</h3><p>{l.detail}</p></div><ArrowUpRight size={18} /></div></div></Button>)}</div>
    </section>
    <Lightbox items={barbershop} index={index} onChange={setIndex} />
  </PageShell>;
}
