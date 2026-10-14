import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, MapPin, ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import brand from "@/assets/brand.jpg.asset.json";
import team from "@/assets/team.jpg.asset.json";

export const Route = createFileRoute("/prodotti")({
  head: () => ({ meta: [
    { title: "Prodotti | Hairshow Parrucchieri Putignano" },
    { name: "description", content: "I prodotti Hairshow per la cura dei capelli. Ritiro esclusivamente nel salone di Putignano." },
    { property: "og:title", content: "Prodotti Hairshow — Ritiro in salone" },
    { property: "og:description", content: "La cura dei tuoi capelli continua a casa. Scopri i prodotti del salone Hairshow a Putignano." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Products,
});

function Products() {
  return <>
    <header className="site-header container-shell">
      <Link to="/" aria-label="Hairshow, torna al salone"><img className="brand-image" src={brand.url} alt="Hairshow Parrucchieri" /></Link>
      <Button asChild variant="link"><Link to="/"><ArrowLeft /> Il salone</Link></Button>
    </header>
    <main>
      <section className="products-intro container-shell">
        <span className="eyebrow">Hairshow / Prodotti</span>
        <h1>La cura continua.<br />Anche a casa.</h1>
        <p>I prodotti del salone, per il tuo rituale quotidiano.</p>
        <div className="pickup-label"><ShoppingBag size={15} /> Solo ritiro in salone · Putignano</div>
      </section>
      <section className="products-catalog container-shell" aria-label="Catalogo prodotti">
        <div className="section-heading"><h2>I nostri prodotti</h2><span className="eyebrow">Nessuna spedizione</span></div>
        <div className="catalog-empty">
          <ShoppingBag size={30} strokeWidth={1} />
          <h3>La selezione è in arrivo.</h3>
          <p>Nel frattempo, ti aspettiamo in salone per scoprire i prodotti disponibili e trovare quelli adatti ai tuoi capelli.</p>
          <Button asChild variant="editorial"><a href="https://www.google.com/maps/search/?api=1&query=Hairshow+Parrucchieri+Putignano" target="_blank" rel="noopener noreferrer"><MapPin /> Trova il salone <ArrowUpRight /></a></Button>
        </div>
        <div className="pickup-note"><MessageCircle size={19} /><div><h3>Prenotazione e ritiro</h3><p>Le prenotazioni tramite WhatsApp saranno disponibili a breve. Il ritiro dei prodotti avviene esclusivamente in salone.</p></div></div>
      </section>
      <section className="section about-band"><div className="container-shell about-layout"><img src={team.url} alt="Il team Hairshow nel salone di Putignano" className="about-photo" loading="lazy" /><div className="about-copy"><span className="eyebrow">Il consiglio giusto, di persona</span><h2>Il tuo rituale.<br />La nostra cura.</h2><p>Ogni capello ha esigenze diverse. Ti aspettiamo da Hairshow per scegliere insieme la cura più adatta a te.</p><Button asChild variant="link" className="p-0 mt-4"><Link to="/">Scopri Hairshow <ArrowUpRight /></Link></Button></div></div></section>
    </main>
    <footer className="site-footer container-shell"><Link to="/" className="footer-brand">hairshow.</Link><span>© {new Date().getFullYear()} Hairshow Parrucchieri</span><span>Putignano, Puglia</span></footer>
  </>;
}