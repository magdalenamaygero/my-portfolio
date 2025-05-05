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
      <body className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
        {/* Navbar */}
        <nav className="w-full px-6 py-4 border-b border-gray-200 bg-white flex justify-between items-center shadow-sm">
          <h1 className="text-xl font-bold text-indigo-900">Magdalena Gero</h1>
          <div className="space-x-6 text-sm font-medium">
            <Link href="/" className="text-indigo-600 hover:underline">Home</Link>
            <Link href="/about" className="text-indigo-600 hover:underline">About</Link>
            <Link href="/projects" className="text-indigo-600 hover:underline">Projects</Link>
          </div>
        </nav>

        {/* Main Content */}
<main className="flex-1 px-6 py-12 bg-white">
  <div className="max-w-3xl mx-auto p-8 space-y-12">
    {children}
  </div>
</main>



        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white text-gray-600 text-sm text-center py-6">
          Connect with me:
          <a href="https://github.com/magdalenamaygero" className="ml-4 hover:underline" target="_blank" rel="noopener noreferrer">
            🐙 GitHub
          </a>
          <a href="https://linkedin.com/in/magdalena-may-gero" className="ml-4 hover:underline" target="_blank" rel="noopener noreferrer">
            🔗 LinkedIn
          </a>
          <a href="mailto:youremail@example.com" className="ml-4 hover:underline">
            📧 Email Me
          </a>
        </footer>
      </body>
    </html>
  );
}
