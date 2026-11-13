import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ArrowDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BookingBand } from "@/components/page-shell";
import { looks, barbershop, services } from "@/lib/gallery";
import { hairSalonSchema, pageHead } from "@/lib/seo";
import { salon } from "@/lib/salon";
import hero from "@/assets/hero.jpg.asset.json";
import team from "@/assets/team.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      path: "/",
      title: "Parrucchiere e Barbiere a Putignano | Hairshow Parrucchieri",
      description:
        "Hairshow, parrucchiere e barbiere a Putignano (BA) in Via Noci 113: tagli donna e uomo, colore, acconciature sposa e barbershop. Prenota su WhatsApp.",
      image: hero.url,
      schemas: [hairSalonSchema(hero.url)],
    }),
  component: Index,
});

const previewLooks = looks.slice(0, 6);

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <img className="hero-photo" src={hero.url} alt="Taglio bob biondo con onde morbide realizzato da Hairshow" fetchPriority="high" />
          <div className="hero-content container-shell">
            <div className="reveal">
              <div className="location-line"><span className="location-dot" /> PUTIGNANO, PUGLIA</div>
              <h1>Hairshow.<span className="sr-only"> Parrucchieri, parrucchiere e barbiere a Putignano</span></h1>
              <p className="hero-subtitle">Parrucchiere e barbiere a Putignano · Artigiani del tuo stile</p>
              <p className="hero-description">La tua personalità. Il nostro stile.<br />Un nuovo modo di sentirti te.</p>
              <div className="hero-actions">
                <Button asChild variant="inverse"><a href={`tel:${salon.phone}`} aria-label={`Chiama il salone al ${salon.phoneLabel}`}><Phone size={16} />{salon.phoneLabel}</a></Button>
                <Button asChild variant="glass"><Link to="/salone">Il salone <ArrowRight /></Link></Button>
              </div>
            </div>
            <div className="hero-footer"><span>PASSIONE, CREATIVITÀ, CURA. OGNI GIORNO.</span><Link to="/lavori">LASCIATI ISPIRARE <ArrowDown size={14} /></Link></div>
          </div>
        </section>

        <div className="service-strip container-shell"><b>Taglio & styling</b><span>✳</span><b>Colore & schiariture</b><span>✳</span><b>Barbershop</b><span>✳</span><b>Acconciature</b><span>✳</span><b>Cura del capello</b></div>

        <section className="section about-band">
          <div className="container-shell about-layout">
            <img src={team.url} className="about-photo" alt="Il team Hairshow insieme in salone" loading="lazy" />
            <div className="about-copy">
              <span className="eyebrow">Piacere, Hairshow</span>
              <h2>Le mani, la passione.<br />Il tuo prossimo look.</h2>
              <p>Ci piace ascoltarti, conoscere il tuo stile e dare forma a ciò che ti fa stare bene. Dal taglio al colore, ogni dettaglio è un modo per esprimere chi sei.</p>
              <Button asChild variant="link" className="p-0 mt-4"><Link to="/salone">Conosci il team <ArrowUpRight /></Link></Button>
            </div>
          </div>
        </section>

        <section className="section container-shell">
          <div className="section-heading"><div><span className="eyebrow">Servizi</span><h2>Cosa facciamo.</h2></div><p>Ogni servizio parte dall'ascolto.<br />Scegliamo insieme il look che ti rappresenta.</p></div>
          <div className="service-strip">
            {services.map(s => <Link key={s.id} to="/servizi" hash={s.id}><b>{s.name}</b></Link>)}
            <Link to="/barbershop"><b>Barbershop</b></Link>
          </div>
          <Button asChild variant="link" className="p-0"><Link to="/servizi">Tutti i servizi <ArrowUpRight /></Link></Button>
        </section>

        <section className="section container-shell">
          <div className="section-heading"><div><span className="eyebrow">Portfolio</span><h2>Ogni look, una storia.</h2></div><p>Capelli reali, personalità uniche.<br />Una piccola selezione dei nostri lavori.</p></div>
          <div className="works-grid">
            {previewLooks.map(l => (
              <Button asChild variant="ghost" className="work-item" key={l.title}>
                <Link to="/lavori"><div className="w-full"><div className="work-image"><img src={l.url} alt={`${l.title} – Hairshow parrucchiere Putignano`} loading="lazy" /></div><div className="work-caption"><div><h3>{l.title}</h3><p>{l.category}</p></div><ArrowUpRight size={18} /></div></div></Link>
              </Button>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 32 }}><Button asChild variant="editorial"><Link to="/lavori">Vedi tutti i lavori e i video <ArrowUpRight /></Link></Button></div>
        </section>

        <section className="section barbershop-band">
          <div className="container-shell">
            <div className="section-heading"><div><span className="eyebrow">Barbershop</span><h2>Il rito del barbiere.</h2></div><p>Precisione, cura e tradizione.<br />Il nostro angolo barbershop, dedicato a lui.</p></div>
            <div className="works-grid barbershop-grid">
              {barbershop.map(l => (
                <Button asChild variant="ghost" className="work-item" key={l.title}>
                  <Link to="/barbershop"><div className="w-full"><div className="work-image"><img src={l.url} alt={`${l.title} – barbiere a Putignano, Hairshow`} loading="lazy" /></div><div className="work-caption"><div><h3>{l.title}</h3><p>{l.detail}</p></div><ArrowUpRight size={18} /></div></div></Link>
                </Button>
              ))}
            </div>
            <div className="hero-actions" style={{ marginTop: 32 }}><Button asChild variant="inverse"><Link to="/barbershop">Scopri il barbershop <ArrowUpRight /></Link></Button></div>
          </div>
        </section>

        <section className="section container-shell">
          <div className="section-heading"><div><span className="eyebrow">Recensioni</span><h2>Cosa dicono di noi.</h2></div><p>Le opinioni vere dei nostri clienti<br />sono sulla nostra scheda Google.</p></div>
          <div className="hero-actions">
            <Button asChild variant="editorial"><a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer">Leggi le recensioni su Google <ArrowUpRight /></a></Button>
            <Button asChild variant="outline"><Link to="/contatti">Contatti e domande frequenti <ArrowUpRight /></Link></Button>
          </div>
        </section>

        <BookingBand />
      </main>
      <SiteFooter />
    </>
  );
}
