import { describe, expect, it } from "vitest";
import { hairSalonSchema, pageHead } from "@/lib/seo";

describe("Salon search data", () => {
  it("uses the supplied address and phone", () => {
    const data = hairSalonSchema("");
    expect(data.telephone).toBe("+39 329 635 6935");
    expect(data.address).toMatchObject({ streetAddress: "Via Noci 113", postalCode: "70017", addressLocality: "Putignano" });
  });
  it("does not invent exact opening hours", () => {
    expect(hairSalonSchema("")).not.toHaveProperty("openingHoursSpecification");
  });
  it("keeps each page canonical on its own public URL", () => {
    expect(pageHead({ path: "/servizi", title: "Servizi", description: "Servizi", image: "" }).links).toEqual([{ rel: "canonical", href: "https://putignano-style-shelf.lovable.app/servizi" }]);
  });
});