import { Link } from "@tanstack/react-router";
import { SocialLinks } from "@/components/social-links";
import { salon } from "@/lib/salon";
import { resetConsent } from "@/lib/consent";

export function SiteFooter() {
  return (
    <footer className="site-footer container-shell">
      <Link to="/" className="footer-brand">Hairshow.</Link>
      <span>
        © {new Date().getFullYear()} Hairshow Parrucchieri · <a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer">{salon.address}</a> · <a href={`tel:${salon.phone}`}>{salon.phoneLabel}</a>
        <br /><Link to="/privacy">Privacy e cookie</Link> · <button type="button" className="footer-link-button" onClick={resetConsent}>Preferenze cookie</button>
      </span>
      <SocialLinks />
    </footer>
  );
}
