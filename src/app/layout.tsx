'use client';
import React from "react";
import { useState } from "react";
import "./globals.css";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ensure lucide-react is installed



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
        {/* Navbar */}
        <nav className="w-full px-6 py-4 border-b border-purple-200 bg-gray-50 shadow-sm">
  <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
            <Link
              href="/"
              className="text-2xl font-bold text-[#8E9AAF] hover:text-[#7898d2] transition-colors duration-200"
            >
              Magdalena Gero
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 text-md font-serif">
              <Link href="/" className="text-[#8E9AAF] hover:text-[#7898d2] hover:underline">
                Home
              </Link>
              <Link href="/projects" className="text-[#8E9AAF] hover:text-[#7898d2] hover:underline">
                Projects
              </Link>
              <Link href="/experience" className="text-[#8E9AAF] hover:text-[#7898d2] hover:underline">
                Experience
              </Link>
              <Link href="/about" className="text-[#8E9AAF] hover:text-[#7898d2] hover:underline">
                About
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[#8E9AAF]"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu Links */}
          {menuOpen && (
            <div className="flex flex-col mt-4 space-y-3 md:hidden text-md font-serif">
              <Link href="/" className="text-[#8E9AAF] hover:text-[#7898d2] hover:underline" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/projects" className="text-[#8E9AAF] hover:text-[#7898d2] hover:underline" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/experience" className="text-[#8E9AAF] hover:text-[#7898d2] hover:underline" onClick={() => setMenuOpen(false)}>
                Experience
              </Link>
              <Link href="/about" className="text-[#8E9AAF] hover:text-[#7898d2] hover:underline" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="flex-1 px-6 py-12 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-3xl mx-auto p-4 space-y-12">{children}</div>
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
            📩 Email
          </a>
        </footer>   
      </body>
    </html>
  );
}
