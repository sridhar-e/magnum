import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";
import BackToTop from "@/components/BackToTop";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAGNUM AUTO | Genuine Auto Parts & Lubricants from Dubai",
  description: "Stock and forward-order supply for automotive wholesalers, importers and distributors worldwide.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        {/* Site-wide floating controls */}
        <FloatingActions />
        <BackToTop />
      </body>
    </html>
  );
}
