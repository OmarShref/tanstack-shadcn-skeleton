"use client";
import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  // SidebarHeader,
  // SidebarSeparator,
} from "@/components/atoms/sidebar";
import { AppSidebarGroup } from "./app-sidebar-group";

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      {/* <SidebarHeader></SidebarHeader> */}

      {/* <SidebarSeparator /> */}

      <SidebarContent>
        <AppSidebarGroup />
      </SidebarContent>

      {/* <SidebarSeparator /> */}

      {/* <SidebarFooter></SidebarFooter> */}
    </Sidebar>
  );
}
