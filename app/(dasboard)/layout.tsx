import { Metadata } from "next";
import { Sidebar, Footer, Header } from "@/components/global";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Hello Admin, your welcome!",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
}
