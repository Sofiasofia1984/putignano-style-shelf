import clay from "@/assets/product-clay.webp.asset.json";
import strong from "@/assets/product-strong.webp.asset.json";
import dust from "@/assets/product-dust.webp.asset.json";
import dustSecond from "@/assets/product-dust2.webp.asset.json";
import fiber from "@/assets/product-fiber.webp.asset.json";

export const products = [
  { id: "clay-pomade", name: "Clay Pomade", description: "Pasta per capelli con finitura opaca.", images: [clay.url], tags: ["Finitura opaca"] },
  { id: "pomade-strong", name: "Pomade Strong", description: "Pomata per capelli a base d'acqua con tenuta forte e finitura lucida.", images: [strong.url], tags: ["Tenuta forte", "Finitura lucida", "Base acqua"] },
  { id: "dust-wax-extreme-volume", name: "Dust Wax Extreme Volume", description: "Polvere volumizzante ad effetto opaco.", images: [dust.url, dustSecond.url], tags: ["Volume", "Effetto opaco"] },
  { id: "fiber-wax", name: "Fiber Wax", description: "Crema fibrosa ad effetto densificante e finitura naturale.", images: [fiber.url], tags: ["Effetto densificante", "Finitura naturale"] },
];