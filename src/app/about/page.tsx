import Image from "next/image";
import React from "react";

export default function AboutPage() {
    return (
      <main className="min-h-screen bg-white text-gray-800 px-6 py-10">
        <div className="max-w-3xl mx-auto">
         <h1 className="text-4xl font-bold mb-6">About Magdalena Gero</h1>
         <p className="text-lg leading-7">
            Hi, I'm Magdalena Gero — a passionate software developer who enjoys creating
            clean, accessible, and user-friendly web applications. I love learning new technologies and
            continuously improving my craft.
          </p>
          <p className="text-lg leading-7 mt-4">
            I specialize in front-end development using React, Next.js, and Tailwind CSS. This portfolio showcases some of my favorite work and experiments.
          </p>
        </div>

      {/* Medium Articles */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Articles</h2>
        <ul className="space-y-4">
          <li>
            <a href="https://medium.com/@magdalenamgero/react-b2de21f539b4?source=user_profile_page---------4-------------c9cdea21fa65----------------------" target="_blank" className="text-blue-600 hover:underline text-lg">
              🔗 React
            </a>
          </li>
          <li>
            <a href="https://medium.com/@magdalenamgero/typescript-101-an-overview-e97ab6403e66?source=user_profile_page---------2-------------c9cdea21fa65----------------------" target="_blank" className="text-blue-600 hover:underline text-lg">
              🔗 Typescript: An Overview
            </a>
          </li>
          <li>
            <a href="https://medium.com/@magdalenamgero/redux-66117af84d4c?source=user_profile_page---------3-------------c9cdea21fa65----------------------" target="_blank" className="text-blue-600 hover:underline text-lg">
              🔗 A Beginners Guide to Redux
            </a>
          </li>
          <li>
            <a href="https://medium.com/@magdalenamgero/understanding-big-o-511369ccd841?source=user_profile_page---------1-------------c9cdea21fa65----------------------" target="_blank" className="text-blue-600 hover:underline text-lg">
              🔗 Understanding Big O Notation
            </a>
          </li>
          <li>
            <a href="https://medium.com/@magdalenamgero/conceptualizing-data-structures-f7e25a56b54f?source=user_profile_page---------0-------------c9cdea21fa65----------------------" target="_blank" className="text-blue-600 hover:underline text-lg">
              🔗 Conceptualizing Data Structures
            </a>
          </li>
        </ul>
      </section>

              {/* Photos */}
              <section>
        <h2 className="text-2xl font-semibold mb-4">What I Do When I'm Not Coding</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Image src="/images/workspace1.jpg" alt="Workspace 1" width={400} height={200} className="rounded-lg shadow-md" />
          <p>I spend time mentoring young engineers, teaching and learning new things.</p>
          <Image src="/images/workspace2.jpg" alt="Workspace 2" width={400} height={200} className="rounded-lg shadow-md" />
          <p>Outside of work, I enjoy spending time with family and friends, being creative, and exploring new places.</p>
          <Image src="/images/workspace2.jpg" alt="Workspace 2" width={400} height={200} className="rounded-lg shadow-md" />
          <p>Outside of work, I enjoy spending time with family and friends, being creative, and exploring new places.</p>
        </div>
      </section>
      </main>
    )
  }