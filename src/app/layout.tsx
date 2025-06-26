'use client';
import React from "react";
import { useState } from "react";
import "./globals.css";
import Link from "next/link";
// import Image from "next/image";
import { Menu, X } from "lucide-react"; // Ensure lucide-react is installed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
        {/* Navbar option: sticky top-0*/}
        <nav className="w-full px-6 py-4 border-b border-purple-300 bg-gray-50 shadow-sm">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-4">
            {/* <Image
              src="/images/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full shadow-md"
            /> */}
            <Link
              href="/"
              className="text-3xl font-semibold text-[#8E9AAF] hover:text-[#7898d2] text-shadow-2xs hover:transition-colors duration-100">
              Magdalena Gero
            </Link>
          </div>


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
        <main className="flex-1 px-6 py-10 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-3xl mx-auto p-4 space-y-12">{children}</div>
        </main>

        {/* Footer */}
        <footer className="border-t border-purple-300 bg-slate-50 text-gray-900 text-sm font-sans text-center py-5">
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
