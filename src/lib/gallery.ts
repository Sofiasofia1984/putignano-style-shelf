import straight from "@/assets/look-straight.jpg.asset.json";
import waves from "@/assets/look-waves.jpg.asset.json";
import updo from "@/assets/look-updo.jpg.asset.json";
import color from "@/assets/look-color.jpg.asset.json";
import copper from "@/assets/look-copper.jpg.asset.json";
import bob from "@/assets/look-bob.jpg.asset.json";
import contrast from "@/assets/look-contrast.jpg.asset.json";
import sleekCopper from "@/assets/look-copper-sleek.jpg.asset.json";
import braids from "@/assets/look-braids.jpg.asset.json";
import sposa from "@/assets/look-sposa.jpg.asset.json";
import mullet from "@/assets/look-mullet.jpg.asset.json";
import curly from "@/assets/look-curly.jpg.asset.json";
import barberStyling from "@/assets/barbershop-styling.jpg.asset.json";
import barberFade from "@/assets/barber-fade.jpg.asset.json";
import barberFreestyle from "@/assets/barber-freestyle.jpg.asset.json";
import filmOne from "@/assets/film-one.webm.asset.json";
import filmTwo from "@/assets/film-two.webm.asset.json";
import filmThree from "@/assets/film-three.webm.asset.json";
import posterOne from "@/assets/film-10.jpg.asset.json";
import posterTwo from "@/assets/film-11.jpg.asset.json";
import posterThree from "@/assets/film-13.jpg.asset.json";

export type Category = "Colore" | "Tagli" | "Acconciature" | "Barbershop";
export type Work = { url: string; title: string; detail: string; category: Category };

export const looks: Work[] = [
  { url: contrast.url, title: "Contrasti di carattere", category: "Tagli", detail: "Corto dinamico · Ciuffo a contrasto" },
  { url: color.url, title: "Un colore che ti racconta", category: "Colore", detail: "Riflessi vivaci · Personalità" },
  { url: braids.url, title: "Geometrie intrecciate", category: "Acconciature", detail: "Trecce definite · Intrecci su misura" },
  { url: waves.url, title: "Biondo in movimento", category: "Colore", detail: "Sfumature luminose · Onde morbide" },
  { url: bob.url, title: "Il carattere di un bob", category: "Tagli", detail: "Taglio corto · Texture naturale" },
  { url: updo.url, title: "Eleganza intrecciata", category: "Acconciature", detail: "Raccolto · Dettagli che fanno la differenza" },
  { url: sleekCopper.url, title: "Rame, pura luce", category: "Colore", detail: "Riflessi caldi · Una linea setosa" },
  { url: straight.url, title: "Luce, linea, essenzialità", category: "Tagli", detail: "Taglio geometrico · Biondo freddo" },
  { url: copper.url, title: "Riflessi di rame", category: "Colore", detail: "Tonalità calde · Onde leggere" },
  { url: sposa.url, title: "Il giorno più bello", category: "Acconciature", detail: "Acconciatura sposa · Intrecci e luce" },
  { url: mullet.url, title: "Taglio d'autore", category: "Tagli", detail: "Mullet moderno · Linee decise" },
  { url: curly.url, title: "Ricci allo specchio", category: "Tagli", detail: "Texture naturale · Il momento del risultato" },
];

export const barbershop: Work[] = [
  { url: barberFade.url, title: "Sfumatura perfetta", category: "Barbershop", detail: "Fade platino · Precisione al millimetro" },
  { url: barberFreestyle.url, title: "Freestyle design", category: "Barbershop", detail: "Rasatura artistica · Linee grafiche" },
  { url: barberStyling.url, title: "Il rituale barbershop", category: "Barbershop", detail: "Il lavoro in salone · Cura dei dettagli" },
];

export const films = [
  { url: filmOne.url, poster: posterOne.url, title: "Il movimento del biondo" },
  { url: filmTwo.url, poster: posterTwo.url, title: "Sfumature di rame" },
  { url: filmThree.url, poster: posterThree.url, title: "Lo stile prende vita" },
];

export const services = [
  { id: "taglio-styling", name: "Taglio & Styling", image: straight.url, alt: "Taglio geometrico biondo freddo realizzato da Hairshow a Putignano", text: "Un taglio pensato sulla tua personalità, dal corto deciso al bob fino alle linee geometriche. Lo styling completa il look e lo rende tuo." },
  { id: "colore-balayage", name: "Colore & Balayage", image: waves.url, alt: "Biondo luminoso con sfumature e onde morbide, colore Hairshow", text: "Riflessi caldi, biondi luminosi e sfumature su misura. Scegliamo insieme il colore che ti racconta." },
  { id: "trattamenti", name: "Trattamenti", image: curly.url, alt: "Ricci naturali curati, cliente allo specchio nel salone Hairshow", text: "La cura del capello fa parte di ogni servizio. In salone ti consigliamo il trattamento più adatto ai tuoi capelli." },
  { id: "acconciature", name: "Acconciature", image: sposa.url, alt: "Acconciatura sposa con intrecci e perle realizzata da Hairshow", text: "Raccolti, intrecci e acconciature sposa per i giorni importanti. Ogni dettaglio fa la differenza." },
] as const;
