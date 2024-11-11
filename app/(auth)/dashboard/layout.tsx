import { Header, Sidebar, Footer } from "@/components/dashboard/global"

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </>
    );
}