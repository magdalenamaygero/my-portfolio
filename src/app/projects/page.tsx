import React from "react";

type Project = {
    title: string;
    description: string;
    link: string;
  };

  const projects: Project[] = [
    {
        title: "Virtual Trades",
        description: "VirtualTrades is a stock market simulation platform that allows users to build and test trading strategies without financial risk.",
        link: "https://virtual-trades.vercel.app/"
    },
    {
        title: "RecyClique",
        description: "RecyClique is a community-focused web app that encourages participation in local sustainability events and raises awareness about waste reduction.",
        link: "https://recyclique.onrender.com/"
    }
  ]

  export default function ProjectsPage() {
    return (
      <main className="min-h-screen bg-white text-gray-800 px-6 py-10">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <ul className="space-y-6">
            {projects.map((project) => (
                <li key={project.title} className="border p-4 rounded shadow-sm">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    View Project →
                </a>
                </li>
            ))}
            </ul>
        </div>
      </main>
    )
      }