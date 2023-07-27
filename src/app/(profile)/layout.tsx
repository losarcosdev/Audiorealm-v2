import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components";
import { Sidebar } from "./components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Profile",
  description: "Your personal profile",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Sidebar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
