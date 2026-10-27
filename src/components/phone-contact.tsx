import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Copy, Phone, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { salon, whatsappUrl } from "@/lib/salon";

const PhoneContext = createContext<() => void>(() => {});
export function CallButton({ children = "Chiama", variant = "editorial", className, size, label }: { children?: ReactNode; variant?: "editorial" | "inverse" | "glass" | "link" | "outline"; className?: string; size?: "icon"; label?: string }) {
  const open = useContext(PhoneContext);
  return <Button variant={variant} size={size} className={className} aria-label={label} onClick={open}><Phone size={16} />{children}</Button>;
}
export function PhoneProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open) { if (!dialog.open) dialog.showModal(); }
    else if (dialog.open) dialog.close();
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  return <PhoneContext.Provider value={() => { setCopied(false); setOpen(true); }}>
    {children}
    <div className="mobile-contact-bar"><Button asChild variant="inverse"><a href={whatsappUrl("Ciao Hairshow! Vorrei informazioni.")} target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp</a></Button><CallButton variant="inverse">Chiama ora</CallButton></div>
    <dialog ref={ref} className="phone-dialog" aria-labelledby="phone-title" onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={event => { if (event.target !== event.currentTarget) return; const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) setOpen(false); }}>
      <Button variant="ghost" size="icon" className="product-dialog-close" aria-label="Chiudi telefono" onClick={() => setOpen(false)}><X /></Button>
      <h2 id="phone-title">Hairshow Parrucchieri</h2><p className="phone-number">{salon.phoneLabel}</p><p>Via Noci 113 · Putignano</p>
      <div className="salon-map-actions"><Button asChild variant="editorial"><a href={`tel:${salon.phone}`}><Phone />Chiama ora</a></Button><Button variant="outline" onClick={async () => { try { await navigator.clipboard.writeText(salon.phoneLabel); setCopied(true); } catch { setCopied(false); } }}><Copy />{copied ? "Copiato ✓" : "Copia numero"}</Button></div>
    </dialog>
  </PhoneContext.Provider>;
}