import { SidebarLayout } from "@/components/templates/sidebar-layout";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(sidebar)/_sidebar")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarLayout>
      <Outlet />
    </SidebarLayout>
  );
}
