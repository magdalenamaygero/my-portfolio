'use client';
import Image from "next/image";
import React from "react";
import PageContainer from "@/components/PageContainer";

export default function AboutPage() {
  return (
    <main className="text-gray-800">
      <PageContainer>
        {/* Bio */}
        <section>
          <h1 className="text-4xl font-bold mb-6 text-gray-900">About Magdalena Gero</h1>
          <p className="text-lg text-gray-700 leading-7">
            Hi, I'm Magdalena Gero — a passionate software developer who enjoys creating
            clean, accessible, and user-friendly web applications. I love learning new technologies and
            continuously improving my craft.
          </p>
          <p className="text-lg text-gray-700 leading-7 mt-4">
            I specialize in front-end development using React, Next.js, and Tailwind CSS. This portfolio showcases some of my favorite work and experiments.
          </p>
        </section>

        {/* Medium Articles */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Articles on Medium</h2>
          <ul className="space-y-3 list-disc list-inside text-indigo-600 text-lg">
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
                src="/images/workspace1.jpg"
                alt="Mentoring"
                width={400}
                height={250}
                className="rounded-lg shadow-md"
              />
              <p className="text-gray-700 text-lg">
                I spend time mentoring young engineers, teaching and learning new things.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <Image
                src="/images/workspace2.jpg"
                alt="Creativity & Friends"
                width={400}
                height={250}
                className="rounded-lg shadow-md"
              />
              <p className="text-gray-700 text-lg">
                Outside of work, I enjoy being creative, spending time with family and friends, and exploring new places.
              </p>
            </div>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}

