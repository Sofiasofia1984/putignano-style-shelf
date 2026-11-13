import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/lightbox";
import type { Work } from "@/lib/gallery";

export function WorkGallery({ items }: { items: Work[] }) {
  const [index, setIndex] = useState<number | null>(null);
  return <>
    <div className="works-grid">{items.map((item, i) => <Button variant="ghost" className="work-item" key={item.title} aria-label={`Apri foto: ${item.title}`} onClick={() => setIndex(i)}><div className="w-full"><div className="work-image"><img src={item.url} alt={`${item.title} – Hairshow a Putignano`} loading="lazy" /></div><div className="work-caption"><div><h3>{item.title}</h3><p>{item.detail}</p></div><ArrowUpRight size={18} /></div></div></Button>)}</div>
    <Lightbox items={items} index={index} onChange={setIndex} />
  </>;
}