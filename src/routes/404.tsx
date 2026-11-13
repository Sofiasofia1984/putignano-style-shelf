import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/not-found-page";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/404")({
  head: () => {
    const head = pageHead({ path: "/404", title: "Pagina non trovata | Hairshow Parrucchieri", description: "La pagina cercata non è disponibile. Torna al sito Hairshow Parrucchieri a Putignano.", image: "" });
    return { ...head, meta: [...head.meta, { name: "robots", content: "noindex, follow" }] };
  },
  component: NotFoundPage,
});