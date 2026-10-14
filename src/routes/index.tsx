import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, MapPin, Menu, X, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { SalonMap } from "@/components/salon-map";
import { SiteFooter } from "@/components/site-footer";
import { SalonVideo } from "@/components/salon-video";
import { salon, whatsappUrl } from "@/lib/salon";
import brand from "@/assets/brand.jpg.asset.json";
import hero from "@/assets/hero.jpg.asset.json";
import team from "@/assets/team.jpg.asset.json";
import straight from "@/assets/look-straight.jpg.asset.json";
import waves from "@/assets/look-waves.jpg.asset.json";
import updo from "@/assets/look-updo.jpg.asset.json";
import color from "@/assets/look-color.jpg.asset.json";
import copper from "@/assets/look-copper.jpg.asset.json";
import bob from "@/assets/look-bob.jpg.asset.json";
import contrast from "@/assets/look-contrast.jpg.asset.json";
import sleekCopper from "@/assets/look-copper-sleek.jpg.asset.json";
import braids from "@/assets/look-braids.jpg.asset.json";
import barberStyling from "@/assets/barbershop-styling.jpg.asset.json";
import barberSession from "@/assets/barbershop-session.jpg.asset.json";
import barberFade from "@/assets/barber-fade.jpg.asset.json";
import barberFreestyle from "@/assets/barber-freestyle.jpg.asset.json";
import sposa from "@/assets/look-sposa.jpg.asset.json";
import mullet from "@/assets/look-mullet.jpg.asset.json";
import curly from "@/assets/look-curly.jpg.asset.json";
import filmOne from "@/assets/film-one.webm.asset.json";
import filmTwo from "@/assets/film-two.webm.asset.json";
import filmThree from "@/assets/film-three.webm.asset.json";
import posterOne from "@/assets/film-10.jpg.asset.json";
import posterTwo from "@/assets/film-11.jpg.asset.json";
import posterThree from "@/assets/film-13.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
  scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "HairSalon", name: "Hairshow Parrucchieri", telephone: "+39 329 635 6935", address: { "@type": "PostalAddress", streetAddress: "Via Noci 113", postalCode: "70017", addressLocality: "Putignano", addressRegion: "BA", addressCountry: "IT" }, openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday","Wednesday","Thursday","Friday","Saturday"] }], sameAs: ["https://www.instagram.com/hairshow_parrucchieri", "https://www.facebook.com/Hairshowparrucchieri", "https://www.tiktok.com/@hairshow.parrucch"], hasMap: "https://www.google.com/maps/search/?api=1&query=Hair+Show+Via+Noci+113+Putignano" }) }],
  meta: [
    { name: "geo.region", content: "IT-BA" },
    { name: "geo.placename", content: "Putignano" },
    { title: "Parrucchiere e Barbiere a Putignano | Hairshow Parrucchieri" },
    { name: "description", content: "Hairshow, parrucchiere e barbiere a Putignano (BA) in Via Noci 113: tagli donna e uomo, colore, acconciature sposa e barbershop. Prenota su WhatsApp." },
    { property: "og:title", content: "Hairshow — Parrucchiere e Barbiere a Putignano" },
    { property: "og:description", content: "La tua personalità. Il nostro stile. Scopri i lavori del salone Hairshow a Putignano." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const looks = [
  { image: contrast.url, title: "Contrasti di carattere", category: "Taglio", detail: "Corto dinamico · Ciuffo a contrasto" },
  { image: color.url, title: "Un colore che ti racconta", category: "Colore", detail: "Riflessi vivaci · Personalità" },
  { image: braids.url, title: "Geometrie intrecciate", category: "Styling", detail: "Trecce definite · Intrecci su misura" },
  { image: waves.url, title: "Biondo in movimento", category: "Colore", detail: "Sfumature luminose · Onde morbide" },
  { image: bob.url, title: "Il carattere di un bob", category: "Taglio", detail: "Taglio corto · Texture naturale" },
  { image: updo.url, title: "Eleganza intrecciata", category: "Styling", detail: "Raccolto · Dettagli che fanno la differenza" },
  { image: sleekCopper.url, title: "Rame, pura luce", category: "Colore", detail: "Riflessi caldi · Una linea setosa" },
  { image: straight.url, title: "Luce, linea, essenzialità", category: "Taglio", detail: "Taglio geometrico · Biondo freddo" },
  { image: copper.url, title: "Riflessi di rame", category: "Colore", detail: "Tonalità calde · Onde leggere" },
  { image: sposa.url, title: "Il giorno più bello", category: "Styling", detail: "Acconciatura sposa · Intrecci e luce" },
  { image: mullet.url, title: "Taglio d'autore", category: "Taglio", detail: "Mullet moderno · Linee decise" },
  { image: curly.url, title: "Ricci allo specchio", category: "Taglio", detail: "Texture naturale · Il momento del risultato" },
];
const barbershop = [
  { image: barberFade.url, title: "Sfumatura perfetta", detail: "Fade platino · Precisione al millimetro" },
  { image: barberFreestyle.url, title: "Freestyle design", detail: "Rasatura artistica · Linee grafiche" },
  { image: barberStyling.url, title: "Il rituale barbershop", detail: "Il lavoro in salone · Cura dei dettagli" },
  { image: barberSession.url, title: "Lo stile si costruisce", detail: "Un momento di cura · Insieme in salone" },
];
const films = [
  { url: filmOne.url, poster: posterOne.url, title: "Il movimento del biondo" },
  { url: filmTwo.url, poster: posterTwo.url, title: "Sfumature di rame" },
  { url: filmThree.url, poster: posterThree.url, title: "Lo stile prende vita" },
];

function Index() {
  const [filter, setFilter] = useState("Tutti");
  const [menuOpen, setMenuOpen] = useState(false);
  const [media, setMedia] = useState<{ url: string; title: string } | null>(null);
  useEffect(() => {
    if (!media) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setMedia(null); };
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", close); };
  }, [media]);
  return (
    <>
      <header className="site-header container-shell">
        <a href="#" aria-label="Hairshow, inizio pagina"><img className="brand-image" src={brand.url} alt="Hairshow Parrucchieri" /></a>
        <nav aria-label="Navigazione principale" className={`nav-links ${menuOpen ? "open" : ""}`}>
          {[["Il salone", "salone"], ["I nostri lavori", "lavori"], ["Barbershop", "barbershop"], ["In movimento", "video"], ["Contatti", "contatti"]].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <Link to="/prodotti" onClick={() => setMenuOpen(false)}>Prodotti <ArrowUpRight size={12} className="inline" /></Link>
        </nav>
        <Button asChild variant="editorial" className="desktop-booking"><a href="#contatti">Vieni a trovarci <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="mobile-menu" aria-label={menuOpen ? "Chiudi menu" : "Apri menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </header>
      <main>
        <section className="hero">
          <img className="hero-photo" src={hero.url} alt="Taglio bob biondo con onde morbide realizzato da Hairshow" fetchPriority="high" />
          <div className="hero-content container-shell">
            <div className="reveal">
              <div className="location-line"><span className="location-dot" /> PUTIGNANO, PUGLIA</div>
              <h1>Hairshow.</h1>
              <p className="hero-subtitle">Parrucchiere e barbiere a Putignano · Artigiani del tuo stile</p>
              <p className="hero-description">La tua personalità. Il nostro stile.<br />Un nuovo modo di sentirti te.</p>
              <div className="hero-actions">
                <Button asChild variant="inverse"><a href="#lavori">Scopri i nostri lavori <ArrowUpRight /></a></Button>
                <Button asChild variant="glass"><a href="#salone">Il salone <ArrowRight /></a></Button>
              </div>
            </div>
            <div className="hero-footer"><span>PASSIONE, CREATIVITÀ, CURA. OGNI GIORNO.</span><a href="#lavori">LASCIATI ISPIRARE <ArrowDown size={14} /></a></div>
          </div>
        </section>
        <div className="service-strip container-shell"><b>Taglio & styling</b><span>✳</span><b>Colore & schiariture</b><span>✳</span><b>Barbershop</b><span>✳</span><b>Acconciature</b><span>✳</span><b>Cura del capello</b></div>
        <section id="lavori" className="section container-shell">
          <div className="section-heading"><div><span className="eyebrow">01 / Il nostro portfolio</span><h2>Ogni look, una storia.</h2></div><p>Capelli reali, personalità uniche.<br />Una selezione dei nostri lavori, fatti con passione.</p></div>
          <div className="filter-row" aria-label="Filtra i lavori">{["Tutti", "Taglio", "Colore", "Styling"].map(f => <Button key={f} variant="ghost" data-active={filter === f} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</Button>)}</div>
          <div className="works-grid">{looks.filter(l => filter === "Tutti" || l.category === filter).map(l => <Button variant="ghost" className="work-item" key={l.title} aria-label={`Apri foto: ${l.title}`} onClick={() => setMedia({ url: l.image, title: l.title })}><div className="w-full"><div className="work-image"><img src={l.image} alt={`${l.title} – Hairshow parrucchiere Putignano`} loading="lazy" /></div><div className="work-caption"><div><h3>{l.title}</h3><p>{l.category}</p></div><ArrowUpRight size={18} /></div></div></Button>)}</div>
        </section>
        <section id="barbershop" className="section barbershop-band"><div className="container-shell"><div className="section-heading"><div><span className="eyebrow">03 / Barbershop</span><h2>Il rito del barbiere.</h2></div><p>Precisione, cura e tradizione.<br />Il nostro angolo barbershop, dedicato a lui.</p></div><div className="works-grid barbershop-grid">{barbershop.map(l => <Button variant="ghost" className="work-item" key={l.title} aria-label={`Apri foto: ${l.title}`} onClick={() => setMedia({ url: l.image, title: l.title })}><div className="w-full"><div className="work-image"><img src={l.image} alt={`${l.title} – barbiere a Putignano, Hairshow`} loading="lazy" /></div><div className="work-caption"><div><h3>{l.title}</h3><p>{l.detail}</p></div><ArrowUpRight size={18} /></div></div></Button>)}</div></div></section>
        <section id="salone" className="section about-band"><div className="container-shell about-layout"><img src={team.url} className="about-photo" alt="Il team Hairshow insieme in salone" loading="lazy" /><div className="about-copy"><span className="eyebrow">02 / Piacere, Hairshow</span><h2>Le mani, la passione.<br />Il tuo prossimo look.</h2><p>Ci piace ascoltarti, conoscere il tuo stile e dare forma a ciò che ti fa stare bene. Dal taglio al colore, ogni dettaglio è un modo per esprimere chi sei.</p><p>A Putignano, Hairshow è il nostro spazio di creatività. E il tuo momento da dedicare a te.</p><p className="signature">IL TEAM HAIRSHOW — PUTIGNANO</p><Button asChild variant="link" className="p-0 mt-4"><a href="#contatti">Ci vediamo in salone <ArrowUpRight /></a></Button></div></div></section>
        <section id="video" className="section container-shell"><div className="section-heading"><div><span className="eyebrow">04 / Hairshow in movimento</span><h2>Lo stile non si ferma.</h2></div><p>Riflessi, texture e movimento.<br />I nostri lavori, da un'altra prospettiva.</p></div><div className="video-grid">{films.map(f => <SalonVideo key={f.url} {...f} />)}</div></section>
        <section id="contatti" className="section contact-band"><div className="container-shell contact-layout"><div><span className="eyebrow">05 / Ti aspettiamo</span><h2>Il tuo prossimo look<br />inizia qui.</h2><p>Hairshow Parrucchieri<br />{salon.address}<br />{salon.opening}</p><SocialLinks /></div><div className="contact-actions"><Button asChild variant="inverse"><a href={whatsappUrl("Ciao Hairshow! Vorrei informazioni per un appuntamento in salone.")} target="_blank" rel="noopener noreferrer"><MessageCircle /> Scrivici su WhatsApp <ArrowUpRight /></a></Button><Button asChild variant="glass"><a href={`tel:${salon.phone}`}><Phone /> {salon.phoneLabel}</a></Button><Button asChild variant="glass"><a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin /> Trova il salone <ArrowUpRight /></a></Button></div></div><div className="container-shell"><SalonMap className="contact-map" /></div></section>
      </main>
      <SiteFooter />
      {media && <div className="media-overlay" role="dialog" aria-modal="true" aria-label={media.title} onClick={() => setMedia(null)}><Button autoFocus variant="inverse" size="icon" className="media-close" aria-label="Chiudi" onClick={() => setMedia(null)}><X /></Button><img src={media.url} alt={media.title} onClick={e => e.stopPropagation()} /></div>}
    </>
  );
}