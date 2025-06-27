import React from "react"; 

type Props = {
    title: string;
    items: string;
    dates: string;
};

export default function ExperienceCard({ title, items, dates }: Props) {
  return (
    <div className="border border-[#bfc8d8] bg-gradient-to-b from-gray-100 to-white rounded-lg p-6 shadow-lg text-left w-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{dates}</p>
      <p className="text-gray-600 font-serif leading-7 whitespace-pre-line">
        {items}
      </p>
    </div>
  );
}