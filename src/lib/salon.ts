export const siteUrl = "https://putignano-style-shelf.lovable.app";
export const hours: { dayOfWeek: string[]; opens: string; closes: string }[] = [];
export const PLACE_ID = "";
export const legal = { name: "[DA INSERIRE]", vat: "[DA INSERIRE]", taxCode: "[DA INSERIRE]", address: "[DA INSERIRE]", email: "[DA INSERIRE]", pec: "[DA INSERIRE]", hosting: "Lovable — fornitore contrattuale [DA INSERIRE]", retention: "[DA INSERIRE: tempi approvati dal titolare]" };
export const salon = {
  phone: "+393296356935",
  phoneLabel: "329 63 56 935",
  address: "Via Noci 113 · 70017 Putignano (BA)",
  opening: "Dal martedì al sabato, su prenotazione",
  mapsEmbedUrl: "https://www.google.com/maps?q=Via+Noci+113,+70017+Putignano+BA&output=embed",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hair+Show+Via+Noci+113+Putignano",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/393296356935?text=${encodeURIComponent(message)}`;
}
export function productWhatsappUrl(name: string) {
  return whatsappUrl(`Ciao Hairshow! Vorrei informazioni su ${name}.`);
}
export function reviewUrl(placeId = PLACE_ID) {
  return placeId ? `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}` : salon.mapsUrl;
}