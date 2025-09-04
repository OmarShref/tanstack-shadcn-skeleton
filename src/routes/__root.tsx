import { ThemeProvider } from "@/lib/theme-provider";
import ToastProvider from "@/lib/toast-provider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider storageKey="vite-ui-theme">
      <ToastProvider>
        <Outlet />
        <TanStackRouterDevtools />
      </ToastProvider>
    </ThemeProvider>
  ),
});
