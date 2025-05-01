'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";


export default function HomePage() {
  return (
    <section className="text-center">
    <motion.section
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-extrabold mb-4">Hi, I'm Magdalena 👋</h2>
      <p className="text-lg max-w-xl mx-auto mb-8">
        I'm a software developer building beautiful, user-friendly web apps.
        Here are a few things I’ve built:
      </p>

      {/* Project preview */}
      <div className="max-w-2xl mx-auto border p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Featured Projects</h3>
        <ul className="text-left list-disc list-inside mb-4">
          <li>🧩 <strong>Project One:</strong> Short teaser...</li>
          <li>🛠 <strong>Project Two:</strong> Another quick teaser...</li>
        </ul>
        <Link href="/projects" className="text-blue-600 hover:underline">See more →</Link>
      </div>
    </motion.section>
       <Link
          href="/projects"
          className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        >
          View My Projects →
        </Link>

    </section>
  )
}