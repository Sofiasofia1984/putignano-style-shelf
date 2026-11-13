import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { Route as barberRoute } from "@/routes/barbershop";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("redirects the old barber page to its home section", () => {
    expect.assertions(1);
    try {
      const beforeLoad = barberRoute.options.beforeLoad;
      if (typeof beforeLoad === "function") beforeLoad({} as never);
    } catch (error) {
      expect(error).toMatchObject({ options: { to: "/", hash: "barbershop", statusCode: 301 } });
    }
  });
  it.each(["/salone", "/servizi", "/lavori", "/contatti", "/prodotti", "/404"])("opens %s as its own page", (path) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(path).at(-1)?.routeId).toBe(path);
  });

  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
