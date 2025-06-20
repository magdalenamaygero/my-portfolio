import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
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
      <body className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
        {/* Navbar */}
      <nav className="w-full px-6 py-4 border-b border-purple-200 bg-gray-50 flex justify-between items-center shadow-sm">
          <Link href="/" className="text-2xl font-bold text-[#8E9AAF]  hover:text-purple-800 transition-colors duration-200">
            Magdalena Gero
          </Link>
          <div className="space-x-6 text-md font-serif">
            <Link href="/" className="text-[#8E9AAF]  hover:text-purple-700 hover:underline transition-colors duration-200">
              Home
            </Link>
            <Link href="/projects" className="text-[#8E9AAF]  hover:text-purple-700 hover:underline transition-colors duration-200">
              Projects
            </Link>
            <Link href="/about" className="text-[#8E9AAF]  hover:text-purple-700 hover:underline transition-colors duration-200">
              About
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 px-6 py-12 bg-white">
          <div className="max-w-3xl mx-auto p-8 space-y-12">
            {children}
          </div>
        </main>



        {/* Footer */}
        <footer className="border-t border-purple-200 bg-slate-50 text-gray-900 text-sm font-sans text-center py-6">
          Connect:
          <a href="https://linkedin.com/in/magdalena-may-gero" className="ml-4 hover:underline" target="_blank" rel="noopener noreferrer">
            🔗 LinkedIn
          </a>
          <a href="https://github.com/magdalenamaygero" className="ml-4 hover:underline" target="_blank" rel="noopener noreferrer">
            📂 GitHub
          </a>
          <a href="mailto:magdalenamgero@gmail.com" className="ml-4 hover:underline">
            📩 Email Me
          </a>
        </footer>
      </body>
    </html>
  );
}
