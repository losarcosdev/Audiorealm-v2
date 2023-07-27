import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer, Toaster } from "@/components";
import { CartContextProvider } from "../context/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AudioRealm",
  description: "Your favorite ecommerce for the sale of audio equipment",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <CartContextProvider>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
