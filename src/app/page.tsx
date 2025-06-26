'use client';
import { motion } from "framer-motion";
import React from "react";
import PageContainer from "@/components/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreviewCard from "@/components/PreviewCard";
import Slider from "react-slick";


export default function HomePage() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  }

    const cards = [
    {
      title: "Featured Projects",
      items: [
        "Risk-free stock market simulation app for learning and strategy building",
        "Connecting users with sustainability initiatives and community events",
      ],
      href: "/projects",
      buttonText: "My Projects →",
    },
    {
      title: "Experience",
      items: [
        "Lead Instructor at Amazon 'Launch' Pre-Apprenticeship Program",
        "Coding Teacher / Teaching Assistant"
      ],
      href: "/experience",
      buttonText: "Experience →",
    },
    {
      title: "Learn More About Me",
      items: [
        "Who I am as a software developer, my passions and achievements",
        "Tech stack, developer tools and skills",
      ],
      href: "/about",
      buttonText: "About Me →",
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Magdalena  Gero</h2>
          <p className="text-lg text-gray-600 font-serif mb-12">
            I’m a software developer building clean, user-friendly web apps.<br></br>Welcome to my portfolio!
          </p>

          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="px-2">
                <PreviewCard {...card} />
              </div>
            ))}
          </Slider>
        </motion.div>
      </PageContainer>
    </main>
  );
}

