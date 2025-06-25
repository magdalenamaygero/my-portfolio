'use client';
import React from "react";
import PageContainer from "@/components/PageContainer";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <main className="flex-1 px-6 py-12 bg-gradient-to-b from-white to-gray-50">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Experience</h1>

          <div className="space-y-12">
            {/* Marcy Lab Experience */}
            <div className="bg-white shadow-md border border-purple-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Teaching Assistant – The Marcy Lab School</h2>
              <p className="text-sm text-gray-500 mb-4">Oct 2023 – Mar 2024</p>
              <p className="text-gray-700 font-serif leading-7">
                As a Teaching Assistant, I mentored aspiring software developers in core web development fundamentals, emphasizing clarity, confidence, and career readiness through a thoughtfully designed, project-based curriculum. I provided both individualized 1:1 support and facilitated group workshops, helping students consistently achieve over 90% attendance and assignment completion, as well as at least 75% on rigorous technical assessments. My contributions directly supported curriculum delivery and instructional goals, resulting in strong cohort outcomes, including GCF scores of 389 or higher.      </p>
            </div>

            {/* Amazon Launch Experience */}
            <div className="bg-white shadow-md border border-purple-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Lead Instructor – Amazon ’Launch’ Pre-Apprenticeship Program</h2>
              <p className="text-sm text-gray-500 mb-4">Mar 2024 – Jun 2024</p>
              <p className="text-gray-700 font-serif leading-7">
                I led software development courses teaching React, JavaScript, semantic HTML, and CSS. I helped design, build, and deliver a project-based curriculum aligned with industry best practices, and mentored students through technical feedback, code reviews, and agile workflows. Throughout the program, I achieved 100% student retention and received 92.3% ’Excellent’ feedback ratings. This experience strengthened my ability to lead with clarity, adapt to diverse learning needs, and foster a collaborative classroom culture.              </p>
            </div>

        {/*Coding teacher Experience */}    
            <div className="bg-white shadow-md border border-purple-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Coding Teacher - The Coding Space, Togetherhood & eCode Learning Center</h2>
              <p className="text-sm text-gray-500 mb-4">Jun 2024 – present</p>
              <p className="text-gray-700 font-serif leading-7">
            I teach coding to students ages 7–13 using visual and block-based programming tools like Scratch, WoofJS, and Scritch. My responsibilities include delivering personalized mentorship, leading STEM activities that promote creativity, problem-solving, and collaboration, and designing curricula to enhance engagement. I create supportive environments that encourage a growth mindset, intellectual confidence, and curiosity while guiding students through their individual learning journeys.              </p>
            </div>
          </div>
        </motion.div>
      </PageContainer>
    </main>
  );
}