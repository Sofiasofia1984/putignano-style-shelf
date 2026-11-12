import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { pageHead } from "@/lib/seo";
import team from "@/assets/team.jpg.asset.json";

export const Route = createFileRoute("/salone")({
  head: () => pageHead({ path: "/salone", title: "Il salone e il team | Hairshow Parrucchieri Putignano", description: "Conosci il team Hairshow: parrucchieri e barbieri a Putignano, in Via Noci 113. Passione, creatività e cura ogni giorno.", image: team.url, crumb: "Il salone" }),
  component: Salone,
});

function Salone() {
  return <PageShell eyebrow="Piacere, Hairshow" title="Le mani, la passione." intro="Il nostro spazio di creatività a Putignano. E il tuo momento da dedicare a te.">
    <section className="section about-band"><div className="container-shell about-layout"><img src={team.url} className="about-photo" alt="Il team Hairshow insieme in salone" /><div className="about-copy"><h2>Il tuo prossimo look.</h2><p>Ci piace ascoltarti, conoscere il tuo stile e dare forma a ciò che ti fa stare bene. Dal taglio al colore, ogni dettaglio è un modo per esprimere chi sei.</p><p>A Putignano, Hairshow è il nostro spazio di creatività: taglio, colore, acconciature, cura del capello e un angolo barbershop dedicato.</p><p className="signature">IL TEAM HAIRSHOW — PUTIGNANO</p></div></div></section>
    <section className="section container-shell">
      <div className="section-heading"><div><span className="eyebrow">Il nostro modo di lavorare</span><h2>Un look che ti somiglia.</h2></div><p>Non solo il risultato, ma anche il tempo che dedichi a te.</p></div>
      <div className="works-grid">
        <article><h3 className="text-xl font-medium mb-4">Prima, ti ascoltiamo.</h3><p className="text-sm text-muted-foreground leading-7">Un cambio di look o il desiderio di valorizzare quello che hai già: partiamo dalle tue idee e dalle caratteristiche dei tuoi capelli.</p></article>
        <article><h3 className="text-xl font-medium mb-4">Poi, diamo forma.</h3><p className="text-sm text-muted-foreground leading-7">Taglio e styling, colore e balayage, trattamenti e acconciature per le occasioni importanti. Ogni servizio si costruisce insieme.</p></article>
        <article><h3 className="text-xl font-medium mb-4">La cura continua.</h3><p className="text-sm text-muted-foreground leading-7">In salone ti consigliamo anche i prodotti per lo styling e la cura a casa. La selezione Hair Show Professional è disponibile con ritiro in negozio.</p></article>
      </div>
      <div className="hero-actions mt-8"><Button asChild variant="editorial"><Link to="/servizi">Scopri i servizi <ArrowUpRight /></Link></Button><Button asChild variant="outline"><Link to="/lavori">I nostri lavori <ArrowUpRight /></Link></Button></div>
    </section>
    <section className="section about-band"><div className="container-shell section-heading"><div><span className="eyebrow">Anche per lui</span><h2>Il nostro barbershop.</h2><p className="mt-6">Tagli uomo, sfumature e rasature artistiche in uno spazio dedicato alla precisione e ai dettagli.</p></div><Button asChild variant="editorial"><Link to="/barbershop">Entra nel barbershop <ArrowUpRight /></Link></Button></div></section>
  </PageShell>;
}
