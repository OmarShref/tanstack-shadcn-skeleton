import { SidebarTrigger } from "@/components/atoms/sidebar";
import { AppBreadcrumb } from "@/components/molecules/app-breadcrumb";
import { ModeToggle } from "@/components/molecules/mode-toggle-dropdown";

export function SidebarPageHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 flex items-center justify-between p-6">
      <div className="flex items-center gap-6">
        <SidebarTrigger />
        <AppBreadcrumb />
      </div>
      <ModeToggle />
    </header>
  );
}
