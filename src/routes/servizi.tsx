import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { services } from "@/lib/gallery";
import { pageHead } from "@/lib/seo";
import barberFade from "@/assets/barber-fade.jpg.asset.json";

export const Route = createFileRoute("/servizi")({
  head: () => pageHead({ path: "/servizi", title: "Servizi parrucchiere a Putignano | Hairshow", description: "Taglio, colore, balayage, trattamenti, acconciature sposa e barbershop da Hairshow Parrucchieri, Via Noci 113, Putignano.", image: services[0].image, crumb: "Servizi" }),
  component: Servizi,
});

function Servizi() {
  return <PageShell eyebrow="Servizi" title="Cosa facciamo." intro="Ogni servizio parte dall'ascolto. Scegliamo insieme il look che ti rappresenta.">
    <section className="container-shell services-list">
      {services.map((s, i) => <article key={s.id} id={s.id} className="service-row"><img src={s.image} alt={s.alt} loading={i ? "lazy" : "eager"} /><div><span className="eyebrow">0{i + 1}</span><h2>{s.name}</h2><p>{s.text}</p></div></article>)}
      <article className="service-row"><img src={barberFade.url} alt="Sfumatura platino realizzata nel barbershop Hairshow" loading="lazy" /><div><span className="eyebrow">05</span><h2>Barbershop</h2><p>Tagli uomo, sfumature e rasature artistiche nel nostro angolo dedicato a lui.</p><Button asChild variant="link" className="p-0"><Link to="/" hash="barbershop">Scopri il barbershop <ArrowUpRight /></Link></Button></div></article>
    </section>
  </PageShell>;
}
