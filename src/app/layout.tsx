import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const Metadata: Metadata = {
  title: "Magdalena Gero | Portfolio",
  description: "Magdalena Gero's portfolio built with Next.js",
};

export default function RootLayout({
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
            <Link href="/" className="text-indigo-500 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-indigo-500 hover:underline">
              About
            </Link>
            <Link href="/projects" className="text-indigo-500 hover:underline">
              Projects
            </Link>
          </div>
        </nav>
        <main className="px-6 py-10">{children}</main>
        <footer className="mt-12 text-center text-gray-500 text-sm">Connect:
          <a href="https://github.com/magdalenamaygero" className="ml-2 hover:underline" target="_blank">🐙 GitHub</a>
          <a href="https://linkedin.com/in/magdalena-may-gero" className="ml-4 hover:underline" target="_blank">🔗 LinkedIn</a>  
        </footer>
      </body>
    </html>
  );
}