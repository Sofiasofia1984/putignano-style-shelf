import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/phone-contact";
import brand from "@/assets/brand.jpg.asset.json";

const nav = [["Il salone", "salone"], ["I nostri lavori", "lavori"], ["Barbershop", "barbershop"], ["In movimento", "video"], ["Contatti", "contatti"]] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  return <header className="site-header container-shell">
    <Link to="/" aria-label="Hairshow, home"><img className="brand-image" src={brand.url} alt="Hairshow Parrucchieri" width="145" height="68" /></Link>
    <nav aria-label="Navigazione principale" className={`nav-links ${open ? "open" : ""}`}>
      {nav.map(([label, id]) => <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <Link to="/prodotti" activeProps={{ className: "active" }} onClick={() => setOpen(false)}>Prodotti</Link>
    </nav>
    <div className="header-actions">
      <CallButton className="desktop-booking" />
      <CallButton className="mobile-call" size="icon" label="Chiama il salone">{null}</CallButton>
      <Button variant="ghost" size="icon" className="mobile-menu" aria-expanded={open} aria-label={open ? "Chiudi menu" : "Apri menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
  </header>;
}
