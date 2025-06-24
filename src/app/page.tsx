'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import PageContainer from "@/components/PageContainer";

export default function HomePage() {
  return (
<main className="flex-1 px-6 py-12 bg-gradient-to-b from-white to-gray-50 w-full-screen">
      <PageContainer>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Magdalena May Gero</h2>
          <p className="text-lg text-gray-600 font-serif mb-12">
            I’m a software developer building clean, user-friendly web apps. <br></br>Welcome to my portfolio!
          </p>

          {/* Featured Projects Preview */}
          <div className="border border-purple-300 rounded-lg p-6 mb-8 shadow-md text-left w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Featured Projects</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Risk-free stock market simulation app for learning and strategy building</li>
              <li>Connects users with sustainability initiatives and community events</li>
            </ul>
          </div>

          <Link
            href="/projects"
            className="inline-block mt-4 px-6 py-2 bg-[#8E9AAF] text-white rounded-md hover:bg-[#7898d2] transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
          >
            View My Projects →
          </Link>

          {/* Learn More Preview */}
          <div className="border border-purple-300 rounded-lg p-6 mt-12 mb-6 shadow-md text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Learn More About Me</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>How I got started as a software developer</li>
              <li>My  achievements, tech stack and tools</li>
              <li>What I’m passionate about</li>
            </ul>
          </div>

          <Link
            href="/about"
            className="inline-block mt-4 px-6 py-2 bg-[#8E9AAF] text-white rounded-md hover:bg-[#7898d2] transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
          >
            About Me →
          </Link>

          {/* experience Preview */}
          <div className="border border-purple-300 rounded-lg p-6 mt-12 mb-6 shadow-md text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Experience</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Lead Instructor</li>
              <li>Coding Teacher</li>
              <li>Teaching Assistant</li>
            </ul>
          </div>
          <Link
            href="/experience"
            className="inline-block mt-4 px-6 py-2 bg-[#8E9AAF] text-white rounded-md hover:bg-[#7898d2] transition-transform duration-200 hover:-translate-y-1 hover:scale-105">
            Experience →
          </Link>
        </motion.div>
      </PageContainer>
    </main>
  );
}

