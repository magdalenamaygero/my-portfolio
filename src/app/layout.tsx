import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const Metadata: Metadata = {
  title: "Magdalena Gero | Portfolio",
  description: "Magdalena Gero's portfolio built with Next.js",
};

export default function RootLayour({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans">
        <nav className="w-full px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-bold">Magdalena Gero</h1>
          <div className="space-x-4">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
          </div>
        </nav>
        <main className="px-6 py-10">{children}</main>
      </body>
    </html>
  );
}