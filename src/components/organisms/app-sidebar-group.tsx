import { Atom, Settings } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../atoms/sidebar";
import { Link, useLocation } from "@tanstack/react-router";

const appSidebarGroupData = {
  label: "App",
  items: [
    {
      title: "Atoms",
      url: "/atoms",
      icon: Atom,
      tooltip: "Atoms to use in your app",
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      tooltip: "Settings to customize your atoms",
    },
  ],
};

export function AppSidebarGroup() {
  const { pathname } = useLocation();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{appSidebarGroupData?.label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {appSidebarGroupData?.items?.map((item, index) => {
            const { icon: Icon, title, url, tooltip } = item;
            return (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton
                  variant={"default"}
                  asChild
                  isActive={pathname === url}
                  tooltip={tooltip}
                >
                  <Link to={url || "#"}>
                    {<Icon />}
                    <span>{title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
