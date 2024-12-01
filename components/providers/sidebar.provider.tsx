import * as React from "react";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../global/app-sidebar";
import { Footer, Header } from "../global";

export function SidebarProviders({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full overflow-x-auto space-y-4 block">
        <Header />
        {children}
        <Footer />
      </main>
    </SidebarProvider>
  );
}
