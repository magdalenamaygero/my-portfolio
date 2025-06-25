'use client';
import Image from "next/image";
import React from "react";
import PageContainer from "@/components/PageContainer";
import { motion } from "framer-motion";


export default function AboutPage() {

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
          <section className="mb-10">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">About Magdalena</h1>
            <div>
            <p className="text-lg text-gray-700 font-serif leading-7">
            Hi, I’m Magdalena - a software developer who enjoys creating clean, accessible, and user friendly applications. 
            </p>
            </div>

            <br></br> 

            <div className="relative max-w-sm h-85 mx-auto mb-8 bg-white">
              <Image
                src="/images/magdalena.jpeg"
                alt="Image of Magdalena"
                fill
                className="rounded-lg shadow-md object-cover p-4"
                />
            </div>

            <p className="text-lg text-gray-700 font-serif leading-7 mt-4">
                 My heart lies in frontend development, where I blend my love for design and code to craft thoughtful digital experiences. I’m deeply inspired by art, always excited to learn new skills, and I find joy in exploring new places and cultures. Whether I’m building, mentoring or traveling, I’m always seeking creativity, connection, and growth.
            <br></br> <br></br> I specialize in frontend development using React, Next.js, and Tailwind CSS. Some other skills include JavaScript, TypeScript, Node.js and PostgreSQL, UI/UX design with Figma, version control with Git, deploying apps via Vercel, and a strong foundation in data structures, algorithms, and RESTful APIs. This portfolio showcases some of my favorite work and experiments. 
            </p> 
          </section>

          {/* Medium Articles */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Articles on Medium</h2>
            <ul className="space-y-3 text-lg">
              <li>
                <a href="https://medium.com/@magdalenamgero/react-b2de21f539b4" target="_blank" rel="noopener noreferrer" className=" text-[#8E9AAF] hover:text-[#7898d2] hover:underline">
                  React
                </a>
              </li>
              <li>
                <a href="https://medium.com/@magdalenamgero/typescript-101-an-overview-e97ab6403e66" target="_blank" rel="noopener noreferrer" className=" text-[#8E9AAF] hover:text-[#7898d2] hover:underline">
                  Typescript: An Overview
                </a>
              </li>
              <li>
                <a href="https://medium.com/@magdalenamgero/redux-66117af84d4c" target="_blank" rel="noopener noreferrer" className=" text-[#8E9AAF] hover:text-[#7898d2] hover:underline">
                  A Beginner’s Guide to Redux
                </a>
              </li>
              <li>
                <a href="https://medium.com/@magdalenamgero/understanding-big-o-511369ccd841" target="_blank" rel="noopener noreferrer" className=" text-[#8E9AAF] hover:text-[#7898d2] hover:underline">
                  Understanding Big O Notation
                </a>
              </li>
              <li>
                <a href="https://medium.com/@magdalenamgero/conceptualizing-data-structures-f7e25a56b54f" target="_blank" rel="noopener noreferrer" className=" text-[#8E9AAF] hover:text-[#7898d2] hover:underline">
                  Conceptualizing Data Structures
                </a>
              </li>
            </ul>
          </section>

          {/* Photos & Life Outside Coding */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">What I Do When I’m Not Coding</h2>
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <Image
                  src="/images/Screenshot 2024-09-26 at 6.53.20 PM.png"
                  alt="Mentoring"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md"
                />
                <p className="text-gray-700 text-lg font-serif">
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
                <p className="text-gray-700 text-lg font-serif">
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
                <p className="text-gray-700 text-lg font-serif">
                Most recently, I completed three cycles of the Google Software Engineering Program (G-SWEP), where I worked closely with Google engineers to deepen my knowledge of data structures, algorithms, 
                and interview preparation.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <Image
                  src="/images/Screenshot 2025-05-04 at 10.55.19 PM.png"
                  alt="Certificates"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md"
                />
                <p className="text-gray-700 text-lg font-serif">
                  I continuously strive to improve my skills in problem-solving and new technologies. Recently, I successfully completed a Microsoft course: 
                  Introduction to Computers and Operating Systems and Security.
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
                <p className="text-gray-700 text-lg font-serif">
                  Last but not least, my family is my strongest support system, and I’m grateful for their unwavering love and encouragement.
                </p>
              </div>
            </div>
          </section>

        {/* Where to find me */}
          <section className="mb-10"> 
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Where to Find Me</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <a href="https://www.linkedin.com/in/magdalenamgero/" target="_blank" rel="noopener noreferrer" className="hover:font-bold">
                    LinkedIn
                  </a>
                </li>
                <li>  
                  <a href="https://medium.com/@magdalenamgero" target="_blank" rel="noopener noreferrer" className="hover:font-bold">
                    Medium
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Magdalenamgero" target="_blank" rel="noopener noreferrer" className="hover:font-bold">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

          </section>
        </motion.div>
      </PageContainer>
    </main>
  );
}

