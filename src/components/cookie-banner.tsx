import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { setConsent, useConsent } from "@/lib/consent";

export function CookieBanner() {
  const { consent, ready } = useConsent();
  if (!ready || consent) return null;
  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Preferenze cookie">
      <p>Usiamo solo cookie tecnici necessari. Con il tuo consenso carichiamo anche contenuti esterni come la mappa di Google, che può usare cookie di terze parti. <Link to="/privacy">Privacy e cookie</Link></p>
      <div className="cookie-actions">
        <Button variant="outline" onClick={() => setConsent("necessary")}>Solo necessari</Button>
        <Button variant="editorial" onClick={() => setConsent("all")}>Accetta tutti</Button>
      </div>
    </div>
  );
}
