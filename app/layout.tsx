import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ColourPaletteProvider } from "@/components/colour-palette-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Untitled Design",
  description: "An online designing tool",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎨</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ColourPaletteProvider>
            {children}
            <Toaster />
          </ColourPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
