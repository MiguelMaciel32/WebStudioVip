import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import ClientSideProviders from "@/utils/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudioVip",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <ClientSideProviders>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="infinity-theme"
          enableSystem
          disableTransitionOnChange
        >
          <body className={inter.className}>
            <Header />
            {children}
            <Toaster />
          </body>
        </ThemeProvider>
      </ClientSideProviders>
    </html>
  );
}
