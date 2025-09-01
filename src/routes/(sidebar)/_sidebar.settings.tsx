import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(sidebar)/_sidebar/settings")({
  component: Settings,
});

function Settings() {
  return <div className="flex gap-2 p-2">Hello from Settings!</div>;
}
