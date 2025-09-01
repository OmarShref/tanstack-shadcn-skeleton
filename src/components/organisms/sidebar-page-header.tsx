import { SidebarTrigger } from "@/components/atoms/sidebar";
import { SidebarPageBreadcrumb } from "@/components/molecules/sidebar-page-breadcrumb";
import { ModeToggle } from "@/components/molecules/mode-toggle-dropdown";

export function SidebarPageHeader() {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex items-center gap-6">
        <SidebarTrigger />
        <SidebarPageBreadcrumb />
      </div>
      <ModeToggle />
    </header>
  );
}
