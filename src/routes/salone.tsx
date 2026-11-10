import { createFileRoute } from "@tanstack/react-router";
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
  </PageShell>;
}
