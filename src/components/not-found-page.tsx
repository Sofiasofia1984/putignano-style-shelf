import { Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { whatsappUrl } from "@/lib/salon";
import hero from "@/assets/hero.jpg.asset.json";

export function NotFoundPage() {
  return <><SiteHeader /><main className="section container-shell"><div className="about-layout"><img className="about-photo" src={hero.url} alt="Un look realizzato da Hairshow Parrucchieri" /><div className="about-copy"><span className="eyebrow">Hairshow · 404</span><h1 className="page-title">Pagina non trovata.</h1><p>La pagina che cerchi non esiste o è stata spostata. Il tuo prossimo look, invece, ti aspetta in salone.</p><div className="hero-actions"><Button asChild variant="editorial"><Link to="/"><ArrowLeft /> Torna alla home</Link></Button><Button asChild variant="outline"><a href={whatsappUrl("Ciao Hairshow! Vorrei informazioni.")} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button></div></div></div></main><SiteFooter /></>;
}