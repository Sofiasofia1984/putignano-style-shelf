import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, MapPin, ShoppingBag, MessageCircle, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { SalonMap } from "@/components/salon-map";
import { SiteFooter } from "@/components/site-footer";
import { ProductDialog } from "@/components/product-dialog";
import { products } from "@/lib/products";
import { salon, whatsappUrl } from "@/lib/salon";
import brand from "@/assets/brand.jpg.asset.json";
import lineup from "@/assets/product-linea1.webp.asset.json";
import team from "@/assets/team.jpg.asset.json";

export const Route = createFileRoute("/prodotti")({
  head: () => ({ meta: [
    { title: "Prodotti per capelli a Putignano | Hairshow Parrucchieri" },
    { name: "description", content: "Clay Pomade, Pomade Strong, Dust Wax e Fiber Wax Hair Show Professional. Prenota su WhatsApp e ritira in Via Noci 113 a Putignano." },
    { property: "og:title", content: "Prodotti Hairshow — Ritiro in salone" },
    { property: "og:description", content: "La cura dei tuoi capelli continua a casa. Scopri i prodotti del salone Hairshow a Putignano." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:url", content: "https://putignano-style-shelf.lovable.app/prodotti" },
    { property: "og:image", content: `https://putignano-style-shelf.lovable.app${lineup.url}` },
    { name: "twitter:image", content: `https://putignano-style-shelf.lovable.app${lineup.url}` },
  ],
  links: [{ rel: "canonical", href: "https://putignano-style-shelf.lovable.app/prodotti" }] }),
  component: Products,
});

function Products() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const changeQuantity = (id: string, delta: number) => setQuantities(current => ({ ...current, [id]: Math.max(0, Math.min(99, (current[id] ?? 0) + delta)) }));
  const chosen = products.filter(p => (quantities[p.id] ?? 0) > 0);
  const message = `Ciao Hairshow! Vorrei prenotare per il ritiro in salone:\n${chosen.map(p => `• ${quantities[p.id]} × ${p.name}`).join("\n")}\n\nRitiro in Via Noci 113, Putignano. Potete confermare prezzi e disponibilità? Grazie!`;
  return <>
    <header className="site-header container-shell">
      <Link to="/" aria-label="Hairshow, torna al salone"><img className="brand-image" src={brand.url} alt="Hairshow Parrucchieri" /></Link>
      <Button asChild variant="link"><Link to="/"><ArrowLeft /> Il salone</Link></Button>
    </header>
    <main>
      <section className="products-intro products-cover">
        <img src={lineup.url} alt="La linea Hair Show Professional: pomate, cere e polvere per lo styling" fetchPriority="high" />
        <div className="container-shell products-cover-copy"><span className="eyebrow">Hair Show Professional</span>
        <h1>Prodotti Hairshow.</h1>
        <p>Pomate, wax e polveri per il tuo stile. Anche a casa.</p>
        <div className="pickup-label"><ShoppingBag size={15} /> Solo ritiro in salone · Putignano</div></div>
      </section>
      <section id="personale" className="section about-band"><div className="container-shell about-layout"><img src={team.url} alt="Il team Hairshow insieme in salone" className="about-photo" loading="lazy" /><div className="about-copy"><span className="eyebrow">Piacere, Hairshow</span><h2>Le mani, la passione.<br />Il tuo prossimo look.</h2><p>Ci piace ascoltarti, conoscere il tuo stile e dare forma a ciò che ti fa stare bene. Dal taglio al colore, ogni dettaglio è un modo per esprimere chi sei.</p><p>Ti aspettiamo da Hairshow per scegliere insieme la cura più adatta a te.</p><p className="signature">IL TEAM HAIRSHOW — PUTIGNANO</p><p>{salon.address}<br />{salon.opening}</p><Button asChild variant="link" className="p-0 mt-4"><a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin /> Trova il salone <ArrowUpRight /></a></Button></div></div></section>
      <section className="products-catalog container-shell" aria-label="Catalogo prodotti">
        <div className="section-heading"><h2>I nostri prodotti</h2><span className="eyebrow">Nessuna spedizione</span></div>
        <div className="product-grid">{products.map(product => <article className="product-item" key={product.id}>
          <Button variant="ghost" className="product-image-button" aria-label={`Dettagli ${product.name}`} onClick={() => { setSelected(product); setImageIndex(0); }}><img src={product.images[0]} alt={`${product.name} Hair Show Professional`} loading="lazy" /><ArrowUpRight /></Button>
          <div className="product-tags">{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <h3>{product.name}</h3><p>{product.description}</p><span className="product-price">Prezzo in salone</span>
          {(quantities[product.id] ?? 0) > 0 ? <div className="quantity-control" aria-label={`Quantità ${product.name}`}><Button variant="outline" size="icon" aria-label={`Riduci ${product.name}`} onClick={() => changeQuantity(product.id, -1)}><Minus /></Button><output aria-live="polite">{quantities[product.id]}</output><Button variant="outline" size="icon" disabled={(quantities[product.id] ?? 0) >= 99} aria-label={`Aumenta ${product.name}`} onClick={() => changeQuantity(product.id, 1)}><Plus /></Button></div> : <Button variant="editorial" onClick={() => changeQuantity(product.id, 1)}><Plus /> Prenota</Button>}
        </article>)}</div>
        {chosen.length > 0 && <section className="reservation-summary" aria-label="La tua prenotazione"><h2>La tua selezione</h2><ul>{chosen.map(p => <li key={p.id}><span>{quantities[p.id]} × {p.name}</span><Button variant="ghost" size="icon" aria-label={`Rimuovi ${p.name}`} onClick={() => setQuantities(current => ({ ...current, [p.id]: 0 }))}><Trash2 /></Button></li>)}</ul><p>Prezzi e disponibilità da confermare con il salone. Nessun pagamento online.</p><Button asChild variant="editorial"><a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer"><MessageCircle /> Prenota su WhatsApp <ArrowUpRight /></a></Button></section>}
        <div className="pickup-note"><MessageCircle size={19} /><div><h3>Prenotazione e ritiro</h3><p>Invia la tua richiesta su WhatsApp: il salone confermerà prezzi, disponibilità e ritiro. Ritira in Via Noci 113, Putignano. Nessuna spedizione. <Link to="/condizioni">Condizioni di vendita</Link>.</p></div></div>
      </section>
      <div className="container-shell"><SalonMap className="contact-map" /></div>
    </main>
    <SiteFooter />
    <ProductDialog open={selected !== null} onClose={() => setSelected(null)}>{selected && <><img className="product-detail-photo" src={selected.images[imageIndex]} alt={selected.name} /><div>{selected.images.length > 1 && <div className="product-thumbnails">{selected.images.map((url, index) => <Button variant="outline" key={url} aria-label={`Foto ${index + 1} di ${selected.name}`} aria-pressed={imageIndex === index} onClick={() => setImageIndex(index)}><img src={url} alt="" /></Button>)}</div>}<h2 id="product-dialog-title">{selected.name}</h2><p id="product-dialog-description" className="product-detail-description">{selected.description}</p><p className="product-price">Prezzo in salone · Solo ritiro</p><Button variant="editorial" onClick={() => { changeQuantity(selected.id, 1); setSelected(null); }}><Plus /> Aggiungi alla selezione</Button></div></>}</ProductDialog>
  </>;
}