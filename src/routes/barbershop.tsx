import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/barbershop")({
  beforeLoad: () => { throw redirect({ to: "/", hash: "barbershop", statusCode: 301 }); },
});