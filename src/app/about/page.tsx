'use client';
import Image from "next/image";
import React from "react";
import PageContainer from "@/components/PageContainer";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";


export default function AboutPage() {

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  return (
<main className="flex-1 px-6 py-12 bg-gradient-to-b from-white to-gray-50">
      <PageContainer>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
        >
          {/* Bio */}
          <section>
            <h1 className="text-4xl font-bold mb-6 text-gray-900">About Magdalena</h1>
            <p className="text-lg text-gray-700 font-serif leading-7">
            Hi, I'm Magdalena; a software developer who enjoys creating clean, accessible, and user-friendly applications. My heart lies in frontend development, where I blend my love for design and code to craft thoughtful digital experiences. 
            I’m deeply inspired by art, always excited to learn new skills, and I find joy in exploring new places and cultures. Whether I’m building, mentoring or traveling, I’m always seeking creativity, connection, and growth.
            </p>
            <p className="text-lg text-gray-700 font-serif leading-7 mt-4">
              I specialize in frontend development using React, Next.js, and Tailwind CSS. This portfolio showcases some of my favorite work and experiments.
            </p>
          </section>

          {/* Medium Articles */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Articles on Medium</h2>
            <ul className="space-y-3 text-indigo-800 text-lg">
              <li>
                <a href="https://medium.com/@magdalenamgero/react-b2de21f539b4" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  🔗 React
                </a>
              </li>
              <li>
                <a href="https://medium.com/@magdalenamgero/typescript-101-an-overview-e97ab6403e66" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  🔗 Typescript: An Overview
                </a>
              </li>
              <li>
                <a href="https://medium.com/@magdalenamgero/redux-66117af84d4c" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  🔗 A Beginner's Guide to Redux
                </a>
              </li>
              <li>
                <a href="https://medium.com/@magdalenamgero/understanding-big-o-511369ccd841" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  🔗 Understanding Big O Notation
                </a>
              </li>
              <li>
                <a href="https://medium.com/@magdalenamgero/conceptualizing-data-structures-f7e25a56b54f" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  🔗 Conceptualizing Data Structures
                </a>
              </li>
            </ul>
          </section>

          {/* Photos & Life Outside Coding */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">What I Do When I'm Not Coding</h2>
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <Image
                  src="/images/Screenshot 2024-09-26 at 6.53.20 PM.png"
                  alt="Mentoring"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md"
                />
                <p className="text-gray-700 text-lg">
                  I spend time mentoring young engineers, guiding them through the world of software development.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <Image
                  src="/images/i-ZrWFGmX-X4.jpg"
                  alt="Creativity & Friends"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md"
                />
                <p className="text-gray-700 text-lg">
                After teaching at The Marcy Lab School in Brooklyn, NY, I proudly cheered my students on as they crossed the graduation podium.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <Image
                  src="/images/1738911160281.jpeg"
                  alt="Creativity & Friends"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md"
                />
                <p className="text-gray-700 text-lg">
                Most recently, I completed three cycles of the Google Software Engineering Program (GSWEP), where I worked closely with Google engineers to deepen my knowledge of data structures, algorithms, and technical interview preparation.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <Image
                  src="/images/Screenshot 2025-05-04 at 10.55.19 PM.png"
                  alt="Certificates"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md"
                />
                <p className="text-gray-700 text-lg">
                  I continuously strive to improve my skills in problem-solving, data structures and algorithms, and new technologies. Recently, I successfully completed a Microsoft course: Introduction to Computers and Operating Systems and Security.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <Image
                  src="/images/ChristmasEditionByRR_7497.jpg"
                  alt="Creativity & Friends"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md"
                />
                <p className="text-gray-700 text-lg">
                  Last but not least, my family is my strongest support system, and I'm grateful for their unwavering love and encouragement.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </PageContainer>
    </main>
  );
}

