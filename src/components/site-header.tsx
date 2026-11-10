import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { salon } from "@/lib/salon";
import brand from "@/assets/brand.jpg.asset.json";

const nav = [
  ["Il salone", "/salone"],
  ["Servizi", "/servizi"],
  ["Lavori", "/lavori"],
  ["Barbershop", "/barbershop"],
  ["Prodotti", "/prodotti"],
  ["Contatti", "/contatti"],
] as const;

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
      {nav.map(([label, to]) => <Link key={to} to={to} activeProps={{ className: "active" }} onClick={() => setOpen(false)}>{label}</Link>)}
    </nav>
    <Button asChild variant="editorial" className="desktop-booking"><a href={`tel:${salon.phone}`}><Phone size={16} />{salon.phoneLabel}</a></Button>
    <Button variant="ghost" size="icon" className="mobile-menu" aria-expanded={open} aria-label={open ? "Chiudi menu" : "Apri menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </header>;
}
