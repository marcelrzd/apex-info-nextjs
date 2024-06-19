import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Hydrate from "@/components/Hydrate";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apex Legends Info",
  description: "Fan page with some informations about the game Apex Legends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Hydrate>
        <Header />
        {children}
        <Footer />
      </Hydrate>
    </html>
  );
}
