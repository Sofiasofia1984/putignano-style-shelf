import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { salon } from "@/lib/salon";
import { setConsent, useConsent } from "@/lib/consent";

export function SalonMap({ className = "" }: { className?: string }) {
  const { consent } = useConsent();
  return (
    <div className={`salon-map ${className}`}>
      {consent === "all" ? (
        <iframe title={`Mappa: Hairshow Parrucchieri, ${salon.address}`} src={salon.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      ) : (
        <div className="salon-map-placeholder">
          <MapPin aria-hidden />
          <p><strong>Hairshow Parrucchieri</strong><br />{salon.address}</p>
          <p className="salon-map-note">La mappa è fornita da Google e può usare cookie di terze parti.</p>
          <div className="salon-map-actions">
            <Button variant="editorial" onClick={() => setConsent("all")}>Mostra la mappa</Button>
            <Button asChild variant="outline"><a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer">Apri in Google Maps <ArrowUpRight /></a></Button>
          </div>
        </div>
      )}
    </div>
  );
}
