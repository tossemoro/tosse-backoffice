import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import { Sidebar, Footer, Header } from "@/components/dashboard/global";

const poppins = Poppins({
  variable: "--font-geist-sans",
  style: ['normal', 'italic'],
  weight: ["300" , "400" , "500" , "600"],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tosse Dashboard",
  description: "Hello Admin, your welcome!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
