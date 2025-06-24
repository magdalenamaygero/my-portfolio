'use client';
import React from "react";
import { motion } from "framer-motion";
import PageContainer from "@/components/PageContainer";

type Project = {
  title: string;
  description: string;
  link: string;
  repo: string;
  figma?: string;
  presentation?: string;
};

const projects: Project[] = [
  {
    title: "Virtual Trades",
    description:
      "VirtualTrades is a stock market simulation platform that allows users to build and test trading strategies without financial risk.",
    link: "https://virtual-trades.vercel.app/",
    repo: "https://github.com/capstone-project-fullstack/VirtualTrades",
    figma: "https://www.figma.com/proto/JCYOBMOOzqqsBvgDSS5CHi/Wireframing--Copy-?node-id=0-1&t=TR2CPwe2yv0ESrpC-1",
  },
  {
    title: "RecyClique",
    description:
      "RecyClique is a community-driven web app that encourages environmental action by helping users discover and participate in local sustainability events.",
    link: "https://recyclique.onrender.com/",
    repo: "https://github.com/RecyClique/RecyClique_project",
    presentation: "https://docs.google.com/presentation/d/1z_klqvbZ0ZDDksF1zCRpHnz__8pzr2RaMEP1p7UJFDw/present",
  },
];

export default function ProjectsPage() {
  return (
<main className="flex-1 px-6 py-12 bg-gradient-to-b from-white to-gray-50">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Projects</h1>

          <ul className="space-y-6">
            {projects.map((project, index) => (
            <motion.li
              key={project.title}
              className="rounded p-6 shadow-sm bg-white border border-purple-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-700 font-serif mb-4">{project.description}</p>

              <div className="space-y-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7898d2] hover:font-bold font-medium block"
                >
                  View Website →
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7898d2] hover:font-bold font-medium block"
                >
                  View GitHub →
                </a>
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7898d2] hover:font-bold font-medium block"
                  >
                    View Figma Wireframe →
                  </a>
                )}
                {project.presentation && (
                  <a
                    href={project.presentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7898d2] hover:font-bold font-medium block"
                  >
                    View System Design →
                  </a>
                )}
              </div>
            </motion.li>
            ))}
          </ul>
        </motion.div>
      </PageContainer>
    </main>
  );
}

