import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { pageHead } from "@/lib/seo";
import { salon } from "@/lib/salon";

export const Route = createFileRoute("/condizioni")({
  head: () => pageHead({ path: "/condizioni", title: "Condizioni di vendita | Hairshow Parrucchieri Putignano", description: "Come prenotare i prodotti Hairshow su WhatsApp e ritirarli in salone in Via Noci 113, Putignano.", crumb: "Condizioni di vendita" }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="section container-shell legal-page">
        <h1>Condizioni di vendita</h1>
        <h2>Venditore</h2>
        <p>Hairshow Parrucchieri, {salon.address}. Telefono {salon.phoneLabel}.</p>
        <h2>Prenotazione</h2>
        <p>Dalla pagina Prodotti puoi inviare una richiesta su WhatsApp. La richiesta non è un ordine: diventa valida solo quando il salone conferma prezzo e disponibilità.</p>
        <h2>Ritiro e pagamento</h2>
        <p>I prodotti si ritirano solo in salone, dal martedì al sabato. Non facciamo spedizioni. Il pagamento avviene in salone al momento del ritiro; il sito non accetta pagamenti online.</p>
        <h2>Prezzi</h2>
        <p>I prezzi sono comunicati dal salone in fase di conferma e al momento del ritiro.</p>
        <h2>Annullamento</h2>
        <p>Puoi annullare una prenotazione in qualsiasi momento prima del ritiro scrivendo su WhatsApp o chiamando il salone.</p>
        <h2>Garanzia</h2>
        <p>Restano validi i diritti di garanzia previsti dal Codice del Consumo per i prodotti difettosi.</p>
      </main>
      <SiteFooter />
    </>
  );
}
