import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EROPULSE AI • Raw Male Pleasure",
  description: "Instant uncensored gay erotica. Built for your deepest kinks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-br from-[#110000] via-[#1a0000] to-[#330000] text-white overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
