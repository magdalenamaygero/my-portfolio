'use client';
import React from "react";
import PageContainer from "@/components/PageContainer";

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Virtual Trades",
    description:
      "VirtualTrades is a stock market simulation platform that allows users to build and test trading strategies without financial risk.",
    link: "https://virtual-trades.vercel.app/",
  },
  {
    title: "RecyClique",
    description:
      "RecyClique is a community-focused web app that encourages participation in local sustainability events and raises awareness about waste reduction.",
    link: "https://recyclique.onrender.com/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="text-gray-800">
      <PageContainer>
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Projects</h1>
        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.title} className="rounded p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline font-medium"
              >
                View Project →
              </a>
            </li>
          ))}
        </ul>
      </PageContainer>
    </main>
  );
}
