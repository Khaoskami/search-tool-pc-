import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SA PC Builder — South African PC Part Picker",
  description:
    "Build your dream PC with the best deals from South African retailers. Compare prices across Evetech, Wootware, Takealot, and Incredible Connection.",
  keywords: [
    "PC builder",
    "South Africa",
    "PC parts",
    "Evetech",
    "Wootware",
    "Takealot",
    "gaming PC",
    "computer parts",
    "ZAR",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-zinc-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
