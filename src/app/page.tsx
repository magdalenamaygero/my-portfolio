'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import PageContainer from "@/components/PageContainer";

export default function HomePage() {
  return (
    <main className="text-gray-800">
      <PageContainer>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Magdalena M. Gero</h2>
          <p className="text-lg text-gray-600 mb-12">
            I'm a software developer building clean, user-friendly web apps. Welcome to my portfolio!
          </p>

          {/* Featured Projects Preview */}
          <div className="border border-purple-300 rounded-lg p-6 mb-8 shadow-sm text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Featured Projects</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>🧩 Risk-free stock market simulation for learning and strategy building.</li>
              <li>🛠 Connect with local sustainability events and promote eco-action.</li>
            </ul>
          </div>

          <Link
            href="/projects"
            className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
          >
            View My Projects →
          </Link>

          {/* Learn More Preview */}
          <div className="border border-purple-300 rounded-lg p-6 mt-12 mb-6 shadow-sm text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn More About Me</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>How I got started as a software developer.</li>
              <li>My tech stack, tools, and experience.</li>
              <li>What I like to do in my free time.</li>
            </ul>
          </div>

          <Link
            href="/about"
            className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
          >
            About Me →
          </Link>
        </motion.div>
      </PageContainer>
    </main>
  );
}
