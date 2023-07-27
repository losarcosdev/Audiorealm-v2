import "../globals.css";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Toaster, buttonVariants } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AudioRealm",
  description: "Your favorite ecommerce for the sale of audio equipment",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Link
          href={"/"}
          className={cn(
            buttonVariants({
              variant: "default",
              className: "z-50 absolute top-4 left-6",
            })
          )}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Link>
        <div className="h-screen flex flex-col items-center justify-center px-3">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
