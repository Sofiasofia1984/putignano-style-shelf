import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Lightbox({ items, index, onChange }: { items: { url: string; title: string }[]; index: number | null; onChange: (i: number | null) => void }) {
  useEffect(() => {
    if (index === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", key); };
  }, [index, items.length, onChange]);
  if (index === null || !items[index]) return null;
  const item = items[index];
  return <div className="media-overlay" role="dialog" aria-modal="true" aria-label={item.title} onClick={() => onChange(null)}>
    <Button autoFocus variant="inverse" size="icon" className="media-close" aria-label="Chiudi" onClick={() => onChange(null)}><X /></Button>
    {items.length > 1 && <Button variant="inverse" size="icon" className="media-prev" aria-label="Foto precedente" onClick={e => { e.stopPropagation(); onChange((index - 1 + items.length) % items.length); }}><ChevronLeft /></Button>}
    <figure onClick={e => e.stopPropagation()}><img src={item.url} alt={item.title} /><figcaption>{item.title}</figcaption></figure>
    {items.length > 1 && <Button variant="inverse" size="icon" className="media-next" aria-label="Foto successiva" onClick={e => { e.stopPropagation(); onChange((index + 1) % items.length); }}><ChevronRight /></Button>}
  </div>;
}
