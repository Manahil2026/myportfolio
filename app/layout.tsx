import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Manahil Imran",
  description: "Software developer creating innovative web applications with a focus on clean code and user experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
