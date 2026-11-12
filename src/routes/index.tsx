import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { salon, whatsappUrl } from "@/lib/salon";
import { hairSalonSchema, pageHead } from "@/lib/seo";
import hero from "@/assets/hero.jpg.asset.json";
import team from "@/assets/team.jpg.asset.json";
import color from "@/assets/look-color.jpg.asset.json";
import barber from "@/assets/barber-fade.jpg.asset.json";
import products from "@/assets/product-linea1.webp.asset.json";
import barberStyling from "@/assets/barbershop-styling.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => pageHead({ path: "/", title: "Parrucchiere e Barbiere a Putignano | Hairshow Parrucchieri", description: "Hairshow Parrucchieri in Via Noci 113, Putignano: taglio, colore, acconciature e barbershop. Scopri il salone e prenota su WhatsApp.", image: hero.url, schemas: [hairSalonSchema(hero.url)] }),
  component: Index,
});

const previews = [
  { to: "/lavori", image: color.url, title: "I nostri lavori", detail: "Tagli, colore e acconciature", alt: "Colore realizzato da Hairshow a Putignano" },
  { to: "/barbershop", image: barber.url, title: "Barbershop", detail: "Sfumature e tagli uomo", alt: "Sfumatura platino del barbershop Hairshow" },
  { to: "/prodotti", image: products.url, title: "Prodotti", detail: "Hair Show Professional", alt: "Prodotti Hair Show Professional del salone" },
] as const;

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
      <section className="home-team about-band">
        <div className="container-shell home-team-layout">
          <img src={team.url} alt="Il team Hairshow insieme in salone" loading="lazy" />
          <div><span className="eyebrow">Piacere, Hairshow</span><h2>Le mani, la passione.</h2><p>Il nostro spazio di creatività a Putignano. E il tuo momento da dedicare a te.</p><p>Ogni look parte dall'ascolto: il tuo stile, i tuoi capelli, ciò che ti fa sentire bene. Dal taglio al colore, dalle acconciature alla cura del capello, scegliamo insieme il percorso più adatto a te.</p><Button asChild variant="link" className="p-0"><Link to="/salone">Il salone e il team <ArrowUpRight /></Link></Button><Button asChild variant="link"><Link to="/servizi">Tutti i servizi <ArrowUpRight /></Link></Button></div>
        </div>
      </section>
      <section className="section container-shell home-previews" aria-label="Scopri Hairshow">
        <div className="works-grid">{previews.map(item => <Link key={item.to} to={item.to} className="home-preview"><div className="work-image"><img src={item.image} alt={item.alt} loading="lazy" /></div><div className="work-caption"><div><h2>{item.title}</h2><p>{item.detail}</p></div><ArrowUpRight size={20} /></div></Link>)}</div>
      </section>
      <section className="section barbershop-band">
        <div className="container-shell about-layout">
          <img className="about-photo" src={barberStyling.url} alt="Il lavoro di styling nel barbershop Hairshow" loading="lazy" />
          <div><span className="eyebrow">Barbershop · Putignano</span><h2>Precisione, carattere.<br />Il tuo stile.</h2><p className="text-sm leading-7 mt-6 mb-4">Un angolo dedicato ai tagli uomo: sfumature, fade e rasature artistiche. Dalle linee pulite ai dettagli freestyle, il look prende forma con cura e attenzione.</p><p className="text-sm leading-7 mb-6">Per il barbershop puoi prenotare anche con BarberApp, solo per uomini per adesso. Per informazioni, scrivici su WhatsApp.</p><div className="hero-actions"><Button asChild variant="inverse"><Link to="/barbershop">Scopri il barbershop <ArrowUpRight /></Link></Button><Button asChild variant="glass"><a href="https://www.softwareline.cloud/qr/BarberApp.php" target="_blank" rel="noopener noreferrer">Tutorial: prenota dall'app <ArrowUpRight /></a></Button></div></div>
        </div>
      </section>
      <section className="home-contact contact-band"><div className="container-shell contact-layout"><div><span className="eyebrow">Ti aspettiamo</span><h2>Ci vediamo in salone.</h2><p>{salon.address}<br />{salon.opening}</p></div><Button asChild variant="inverse"><Link to="/contatti">Contatti e mappa <ArrowUpRight /></Link></Button></div></section>
    </main>
    <SiteFooter />
  </>;
}
