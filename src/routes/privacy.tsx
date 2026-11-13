import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { pageHead } from "@/lib/seo";
import { salon } from "@/lib/salon";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead({ path: "/privacy", title: "Privacy e cookie | Hairshow Parrucchieri Putignano", description: "Informativa privacy e cookie del sito Hairshow Parrucchieri, Via Noci 113, Putignano.", crumb: "Privacy e cookie" }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="section container-shell legal-page">
        <h1>Privacy e cookie</h1>
        <h2>Titolare</h2>
        <p>Hairshow Parrucchieri, {salon.address}. Telefono {salon.phoneLabel}.</p>
        <h2>Dati raccolti</h2>
        <p>Il sito non ha moduli, account né pagamenti online. Quando ci scrivi su WhatsApp o ci chiami, i dati che condividi sono usati solo per rispondere e gestire appuntamenti o il ritiro dei prodotti in salone.</p>
        <h2>Cookie tecnici</h2>
        <p>Salviamo nel tuo browser solo la tua scelta sulle preferenze cookie (voce «hairshow-consent», conservata finché non la cambi o cancelli i dati del browser). Non usiamo cookie di profilazione né statistiche. I caratteri del sito sono ospitati sul sito stesso: non vengono caricati da servizi esterni.</p>
        <h2>Contenuti di terze parti</h2>
        <p>La mappa di Google Maps viene caricata solo dopo il tuo consenso e può impostare cookie di Google. I link a Instagram, Facebook, TikTok e WhatsApp portano a servizi esterni con proprie informative.</p>
        <h2>I tuoi diritti</h2>
        <p>Puoi chiedere accesso, rettifica o cancellazione dei tuoi dati contattando il salone, e proporre reclamo al Garante per la protezione dei dati personali. Puoi cambiare le preferenze cookie in qualsiasi momento dal fondo pagina.</p>
      </main>
      <SiteFooter />
    </>
  );
}
