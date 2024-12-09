import { BadgePoundSterling, Inbox } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ProfileImage } from "../dashboard/profile";

const items = [
  {
    title: "Transaction",
    url: "/transactions",
    icon: BadgePoundSterling,
  },
  {
    title: "Messagerie",
    url: "/inbox",
    icon: Inbox,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="space-y-4">
          <SidebarGroupLabel className="text-center"><span className="w-full uppercase">Administrator</span></SidebarGroupLabel>
          <ProfileImage />
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem className="text-center">
                <span>John Doe</span>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  variant={"outline"}
                  className="text-center"
                >
                  <a href={"/profile"}>
                    <span className="text-center w-full">Votre Profile</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
