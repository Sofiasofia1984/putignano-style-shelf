import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { Lightbox } from "@/components/lightbox";
import { SalonVideo } from "@/components/salon-video";
import { looks, films, type Category } from "@/lib/gallery";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lavori")({
  head: () => pageHead({ path: "/lavori", title: "I nostri lavori: tagli, colore e sposa | Hairshow Putignano", description: "Il portfolio di Hairshow Parrucchieri a Putignano: tagli, colori, balayage e acconciature sposa realizzati in salone.", image: looks[0].url, crumb: "Lavori" }),
  component: Lavori,
});

const filters: ("Tutti" | Category)[] = ["Tutti", "Tagli", "Colore", "Acconciature"];

function Lavori() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tutti");
  const [index, setIndex] = useState<number | null>(null);
  const shown = looks.filter(l => filter === "Tutti" || l.category === filter);
  return <PageShell eyebrow="Portfolio" title="Ogni look, una storia." intro="Capelli reali, personalità uniche. Una selezione dei nostri lavori.">
    <section className="container-shell">
      <div className="filter-row" aria-label="Filtra i lavori">{filters.map(f => <Button key={f} variant="ghost" data-active={filter === f} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</Button>)}</div>
      <div className="works-grid">{shown.map((l, i) => <Button variant="ghost" className="work-item" key={l.title} aria-label={`Apri foto: ${l.title}`} onClick={() => setIndex(i)}><div className="w-full"><div className="work-image"><img src={l.url} alt={`${l.title} – Hairshow parrucchiere Putignano`} loading="lazy" /></div><div className="work-caption"><div><h3>{l.title}</h3><p>{l.detail}</p></div><ArrowUpRight size={18} /></div></div></Button>)}</div>
    </section>
    <section className="section container-shell"><div className="section-heading"><div><span className="eyebrow">In movimento</span><h2>Lo stile non si ferma.</h2></div></div><div className="video-grid">{films.map(f => <SalonVideo key={f.url} {...f} />)}</div></section>
    <Lightbox items={shown} index={index} onChange={setIndex} />
  </PageShell>;
}
