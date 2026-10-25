import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { salon } from "@/lib/salon";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy e cookie | Hairshow Parrucchieri Putignano" },
    { name: "description", content: "Informativa privacy e cookie del sito Hairshow Parrucchieri, Via Noci 113, Putignano." },
    { property: "og:title", content: "Privacy e cookie — Hairshow Parrucchieri" },
    { property: "og:description", content: "Come il sito Hairshow tratta dati e cookie." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { property: "og:url", content: "https://putignano-style-shelf.lovable.app/privacy" },
  ], links: [{ rel: "canonical", href: "https://putignano-style-shelf.lovable.app/privacy" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <main className="section container-shell legal-page">
        <Link to="/" className="footer-brand">Hairshow.</Link>
        <h1>Privacy e cookie</h1>
        <h2>Titolare</h2>
        <p>Hairshow Parrucchieri, {salon.address}. Telefono {salon.phoneLabel}.</p>
        <h2>Dati raccolti</h2>
        <p>Il sito non ha moduli, account né pagamenti online. Quando ci scrivi su WhatsApp o ci chiami, i dati che condividi sono usati solo per rispondere e gestire appuntamenti o il ritiro dei prodotti in salone.</p>
        <h2>Cookie tecnici</h2>
        <p>Salviamo nel tuo browser solo la tua scelta sulle preferenze cookie (voce «hairshow-consent», conservata finché non la cambi o cancelli i dati del browser). Non usiamo cookie di profilazione né statistiche. I caratteri del sito sono caricati da Google Fonts, che riceve il tuo indirizzo IP.</p>
        <h2>Contenuti di terze parti</h2>
        <p>La mappa di Google Maps viene caricata solo dopo il tuo consenso e può impostare cookie di Google. I link a Instagram, Facebook, TikTok e WhatsApp portano a servizi esterni con proprie informative.</p>
        <h2>I tuoi diritti</h2>
        <p>Puoi chiedere accesso, rettifica o cancellazione dei tuoi dati contattando il salone, e proporre reclamo al Garante per la protezione dei dati personali. Puoi cambiare le preferenze cookie in qualsiasi momento dal fondo pagina.</p>
      </main>
      <SiteFooter />
    </>
  );
}
