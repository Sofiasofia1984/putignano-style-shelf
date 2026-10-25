import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/phone-contact";
import brand from "@/assets/brand.jpg.asset.json";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header container-shell"><Link to="/" aria-label="Hairshow, inizio pagina"><img className="brand-image" src={brand.url} alt="Hairshow Parrucchieri" width="145" height="68" /></Link>
    <nav aria-label="Navigazione principale" className={`nav-links ${open ? "open" : ""}`}>
      {[["Il salone", "salone"], ["I nostri lavori", "lavori"], ["Barbershop", "barbershop"], ["In movimento", "video"], ["Contatti", "contatti"]].map(([label, id]) => <a key={id} href={`${home ? "" : "/"}#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <Link to="/prodotti" onClick={() => setOpen(false)}>Prodotti <ArrowUpRight size={12} className="inline" /></Link>
    </nav><CallButton className="desktop-booking" /><Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? "Chiudi menu" : "Apri menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </header>;
}