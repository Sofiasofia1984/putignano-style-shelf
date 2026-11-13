import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WorkGallery } from "@/components/work-gallery";
import { SalonVideo } from "@/components/salon-video";
import { looks, barbershop, films } from "@/lib/gallery";
import { salon, whatsappUrl } from "@/lib/salon";
import { hairSalonSchema, pageHead } from "@/lib/seo";
import hero from "@/assets/hero.jpg.asset.json";
import team from "@/assets/team.jpg.asset.json";
import products from "@/assets/product-linea1.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => pageHead({ path: "/", title: "Parrucchiere e Barbiere a Putignano | Hairshow Parrucchieri", description: "Hairshow Parrucchieri in Via Noci 113, Putignano: taglio, colore, acconciature e barbershop. Scopri il salone e prenota su WhatsApp.", image: hero.url, schemas: [hairSalonSchema(hero.url)] }),
  component: Index,
});

const homeLooks = looks.filter(item => ["Un colore che ti racconta", "Biondo in movimento", "Rame, pura luce", "Il giorno più bello", "Taglio d'autore", "Ricci allo specchio"].includes(item.title));

function Index() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero home-hero">
        <img className="hero-photo" src={hero.url} alt="Taglio bob biondo con onde morbide realizzato da Hairshow" fetchPriority="high" />
        <div className="hero-content container-shell">
          <div className="reveal">
            <div className="location-line"><span className="location-dot" /> PUTIGNANO, PUGLIA</div>
            <h1>Hairshow.<span className="sr-only"> Parrucchieri, parrucchiere e barbiere a Putignano</span></h1>
            <p className="hero-subtitle">Parrucchiere e barbiere a Putignano</p>
            <p className="hero-description">La tua personalità. Il nostro stile.<br />Un nuovo modo di sentirti te.</p>
            <div className="hero-actions">
              <Button asChild variant="inverse"><a href={`tel:${salon.phone}`} aria-label={`Chiama il salone al ${salon.phoneLabel}`}><Phone size={16} />{salon.phoneLabel}</a></Button>
              <Button asChild variant="glass"><a href={whatsappUrl("Ciao Hairshow! Vorrei prenotare un appuntamento.")} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button>
            </div>
          </div>
          <div className="hero-footer"><span>PASSIONE, CREATIVITÀ, CURA.</span><Link to="/servizi">I NOSTRI SERVIZI <ArrowUpRight size={14} /></Link></div>
        </div>
      </section>
      <section id="salone" className="home-team about-band">
        <div className="container-shell home-team-layout">
          <img src={team.url} alt="Il team Hairshow insieme in salone" loading="lazy" />
          <div><span className="eyebrow">Piacere, Hairshow</span><h2>Le mani, la passione.</h2><p>Il nostro spazio di creatività a Putignano. E il tuo momento da dedicare a te.</p><p>Ogni look parte dall'ascolto: il tuo stile, i tuoi capelli, ciò che ti fa sentire bene. Dal taglio al colore, dalle acconciature alla cura del capello, scegliamo insieme il percorso più adatto a te.</p><Button asChild variant="link" className="p-0"><Link to="/servizi">Tutti i servizi <ArrowUpRight /></Link></Button></div>
        </div>
      </section>
      <section className="section container-shell" aria-labelledby="home-looks-title">
        <div className="section-heading"><div><span className="eyebrow">Firmato Hairshow</span><h2 id="home-looks-title">Ogni look, una storia.</h2></div><Button asChild variant="link"><Link to="/lavori">Tutti i lavori <ArrowUpRight /></Link></Button></div>
        <WorkGallery items={homeLooks} />
      </section>
      <section className="section container-shell" aria-labelledby="home-video-title">
        <div className="section-heading"><div><span className="eyebrow">In movimento</span><h2 id="home-video-title">Lo stile prende vita.</h2></div></div>
        <div className="video-grid">{films.map(film => <SalonVideo key={film.url} {...film} />)}</div>
      </section>
      <section id="barbershop" className="section barbershop-band" aria-labelledby="home-barber-title">
        <div className="container-shell">
          <div className="section-heading"><div><span className="eyebrow">Barbershop · Putignano</span><h2 id="home-barber-title">Precisione, carattere.<br />Il tuo stile.</h2></div><p>Tagli uomo, sfumature e rasature artistiche. Un angolo dedicato a lui, con cura per ogni dettaglio.</p></div>
          <WorkGallery items={barbershop} />
          <div className="home-barber-booking"><div><h3>Il tuo prossimo appuntamento.</h3><p>Con BarberApp puoi prenotare il tuo taglio — solo per uomini, per adesso. Per informazioni, scrivici su WhatsApp.</p></div><div className="hero-actions"><Button asChild variant="inverse"><a href={whatsappUrl("Ciao Hairshow! Vorrei informazioni sul barbershop.")} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button><Button asChild variant="glass"><a href="https://www.softwareline.cloud/qr/BarberApp.php" target="_blank" rel="noopener noreferrer">Tutorial: prenota dall'app <ArrowUpRight /></a></Button></div></div>
        </div>
      </section>
      <section className="section about-band"><div className="container-shell about-layout"><img className="about-photo" src={products.url} alt="La linea Hair Show Professional disponibile in salone" loading="lazy" /><div className="about-copy"><span className="eyebrow">La cura continua</span><h2>Lo stile, anche a casa.</h2><p>Scopri la linea Hair Show Professional e chiedici un consiglio per lo styling dei tuoi capelli. I prodotti si ritirano direttamente in salone.</p><Button asChild variant="editorial"><Link to="/prodotti">Scopri i prodotti <ArrowUpRight /></Link></Button></div></div></section>
      <section className="home-contact contact-band"><div className="container-shell contact-layout"><div><span className="eyebrow">Ti aspettiamo</span><h2>Ci vediamo in salone.</h2><p>{salon.address}<br />{salon.opening}</p></div><Button asChild variant="inverse"><Link to="/contatti">Contatti e mappa <ArrowUpRight /></Link></Button></div></section>
    </main>
    <SiteFooter />
  </>;
}
