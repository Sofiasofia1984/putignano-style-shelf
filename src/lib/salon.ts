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