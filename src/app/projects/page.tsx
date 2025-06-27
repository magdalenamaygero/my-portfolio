'use client';
import React from "react";
import { motion } from "framer-motion";
import PageContainer from "@/components/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ProjectsPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      title: "Virtual Trades",
      items: [
        "Stock market simulation for learning and strategy building",
        "Built with full-stack tech and deployed on Vercel",
      ],
      github: "https://github.com/capstone-project-fullstack/VirtualTrades",
      website: "https://virtual-trades.vercel.app/",
      figma: "https://www.figma.com/proto/JCYOBMOOzqqsBvgDSS5CHi/Wireframing--Copy-?node-id=0-1&t=TR2CPwe2yv0ESrpC-1",
    },
    {
      title: "RecyClique",
      items: [
        "Community web app for local sustainability engagement",
        "Features event discovery, profile system, and mapping",
      ],
      github: "https://github.com/RecyClique/RecyClique_project",
      website: "https://recyclique.onrender.com/",
      presentation: "https://docs.google.com/presentation/d/1z_klqvbZ0ZDDksF1zCRpHnz__8pzr2RaMEP1p7UJFDw/present",
    },
  ];

  return (
    <main className="flex-1 px-6 py-12 bg-gradient-to-b from-white to-gray-50 w-full">
      <PageContainer>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Projects</h1>

          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-2">
                <div className="border border-[#bfc8d8] bg-gradient-to-b from-gray-100 to-white rounded-lg p-6 shadow-lg text-left w-full">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    {project.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 w-20 text-sm text-center border border-purple-300 bg-[#8E9AAF] text-white rounded hover:bg-[#7898d2] transition"
                      >
                        GitHub
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 w-20 text-sm text-center border border-purple-300 bg-[#8E9AAF] text-white rounded hover:bg-[#7898d2] transition"
                      >
                        Website
                      </a>
                    )}
                    {project.presentation && (
                      <a
                        href={project.presentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm w-20 text-center border border-purple-300 bg-[#8E9AAF] text-white rounded hover:bg-[#7898d2] transition"
                      >
                        System
                      </a>
                    )}
                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 w-20 text-sm text-center border border-purple-300 bg-[#8E9AAF] text-white rounded hover:bg-[#7898d2] transition"
                      >
                        Figma
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </PageContainer>
    </main>
  );
}

