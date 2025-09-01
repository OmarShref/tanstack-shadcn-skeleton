import { createFileRoute } from "@tanstack/react-router";
import { AtomsPage } from "@/components/pages/atoms-page";

export const Route = createFileRoute("/(sidebar)/_sidebar/atoms")({
  component: Atoms,
});

function Atoms() {
  return <AtomsPage />;
}
