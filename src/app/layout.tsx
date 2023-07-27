import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { PayPalProvider, SessionProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AudioRealm",
  description: "Your favorite ecommerce for the sale of audio equipment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SessionProvider>
          <PayPalProvider>{children}</PayPalProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
