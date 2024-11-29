import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { Sidebar, Footer, Header } from "@/components/global";

const poppins = Poppins({
  weight: ["300" , "400" , "500" , "600"],
  style: ['normal', 'italic'],
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
