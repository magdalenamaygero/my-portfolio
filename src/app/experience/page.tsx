'use client';
import React from "react";
import PageContainer from "@/components/PageContainer";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ExperiencePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  const experiences = [
    {
      title: "Teaching Assistant – The Marcy Lab School",
      dates: "Oct 2023 – Mar 2024",
      items:
        "As a Teaching Assistant, I mentored aspiring software developers in core web development fundamentals, emphasizing clarity, confidence, and career readiness through a thoughtfully designed, project-based curriculum. I provided both individualized 1:1 support and facilitated group workshops, helping students consistently achieve over 90% attendance and assignment completion, as well as at least 75% on rigorous technical assessments. My contributions directly supported curriculum delivery and instructional goals, resulting in strong cohort outcomes, including GCF scores of 389 or higher.",
    },
    {
      title: "Lead Instructor – Amazon ’Launch’ Pre-Apprenticeship Program",
      dates: "Mar 2024 – Jun 2024",
      items:
        "I led software development courses teaching React, JavaScript, semantic HTML, and CSS. I helped design, build, and deliver a project-based curriculum aligned with industry best practices, and mentored students through technical feedback, code reviews, and agile workflows. Throughout the program, I achieved 100% student retention and received 92.3% ’Excellent’ feedback ratings. This experience strengthened my ability to lead with clarity, adapt to diverse learning needs, and foster a collaborative classroom culture.",
    },
    {
      title: "Coding Teacher – The Coding Space, Togetherhood & eCode Learning Center",
      dates: "Jun 2024 – Present",
      items:
        "I teach coding to students ages 7–13 using visual and block-based programming tools like Scratch, WoofJS, and Scritch. My responsibilities include delivering personalized mentorship, leading STEM activities that promote creativity, problem-solving, and collaboration, and designing curricula to enhance engagement. I create supportive environments that encourage a growth mindset, intellectual confidence, and curiosity while guiding students through their individual learning journeys.",
    },
  ];
  return (
    <main className="flex-1 px-6 py-12 bg-gradient-to-b from-white to-gray-50">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Experience</h1>

          <Slider {...settings}>
            {experiences.map((exp, index) => (
              <div key={index} className="px-4">
                <ExperienceCard
                  title={exp.title}
                  dates={exp.dates}
                  items={exp.items}
                />
              </div>
            ))}
          </Slider>

        </motion.div>
      </PageContainer>
    </main>
  );
}