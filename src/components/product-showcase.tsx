import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductDialog } from "@/components/product-dialog";
import { CallButton } from "@/components/phone-contact";
import { products } from "@/lib/products";
import { productWhatsappUrl } from "@/lib/salon";

export function ProductShowcase() {
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);
  const [index, setIndex] = useState(0);
  return <><div className="product-grid">{products.map(product => <article className="product-item" key={product.id}>
    <Button variant="ghost" className="product-image-button" aria-label={`Dettagli ${product.name}`} onClick={() => { setSelected(product); setIndex(0); }}><img src={product.images[0]} alt={`${product.name} Hair Show Professional, confezione per lo styling`} loading="lazy" /><ArrowUpRight /></Button>
    <div className="product-tags">{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{product.name}</h3><p>{product.description}</p>
    <Button asChild variant="editorial"><a href={productWhatsappUrl(product.name)} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} />Chiedi su WhatsApp</a></Button>
  </article>)}</div>
  <ProductDialog open={selected !== null} onClose={() => setSelected(null)}>{selected && <><img className="product-detail-photo" src={selected.images[index]} alt={`${selected.name} Hair Show Professional, foto ${index + 1}`} /><div><div className="product-thumbnails">{selected.images.map((url, i) => <Button variant="outline" key={url} aria-label={`Foto ${i + 1} di ${selected.name}`} aria-pressed={index === i} onClick={() => setIndex(i)}><img src={url} alt="" /></Button>)}</div><h2 id="product-dialog-title">{selected.name}</h2><p id="product-dialog-description" className="product-detail-description">{selected.description}</p><div className="contact-actions"><Button asChild variant="editorial"><a href={productWhatsappUrl(selected.name)} target="_blank" rel="noopener noreferrer"><MessageCircle />Chiedi su WhatsApp</a></Button><CallButton variant="outline" /></div></div></>}</ProductDialog></>;
}