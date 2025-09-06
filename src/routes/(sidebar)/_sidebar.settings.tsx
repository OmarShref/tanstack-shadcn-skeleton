import SettingsPage from "@/components/pages/settings-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(sidebar)/_sidebar/settings")({
  component: Settings,
});

function Settings() {
  return <SettingsPage />;
}
