import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CallButton } from "@/components/phone-contact";
import { whatsappUrl } from "@/lib/salon";

export type PagePath = "/servizi" | "/barbershop" | "/lavori" | "/prodotti" | "/il-salone" | "/contatti";

export function PageCta({ related, message = "Ciao Hairshow! Vorrei informazioni per un appuntamento in salone." }: { related: { to: PagePath; label: string }[]; message?: string }) {
  return <section className="page-cta"><div className="container-shell page-cta-inner">
    <div><span className="eyebrow">Ti aspettiamo</span><h2>Il tuo prossimo look inizia qui.</h2></div>
    <div className="hero-actions"><CallButton variant="inverse" /><Button asChild variant="glass"><a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp</a></Button></div>
    <nav aria-label="Pagine correlate" className="related-links">{related.map(r => <Link key={r.to} to={r.to}>{r.label} <ArrowRight size={14} /></Link>)}</nav>
  </div></section>;
}

export function PageShell({ crumb, children, related, message }: { crumb: string; children: ReactNode; related: { to: PagePath; label: string }[]; message?: string }) {
  return <>
    <SiteHeader />
    <main>
      <nav aria-label="Percorso" className="breadcrumb container-shell"><Link to="/">Home</Link><span aria-hidden="true">›</span><span aria-current="page">{crumb}</span></nav>
      {children}
      <PageCta related={related} message={message} />
    </main>
    <SiteFooter />
  </>;
}
