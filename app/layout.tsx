import type { Metadata } from "next";
import { Recursive, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";

const recursive = Recursive({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Porfolio de Engels",
  description: "Porfolio de Engels - Desarrollador y Programador Web",
  icons: [
    {
      url: "/code.svg",
      type: "image/svg+xml",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${recursive.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
