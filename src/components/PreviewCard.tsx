import Link from "next/link";
import React from "react";

type PreviewCardProps = {
  title: string;
  items: string[];
  href: string;
  buttonText: string;
};

export default function PreviewCard({ title, items, href, buttonText }: PreviewCardProps) {
  return (
    <div className="border border-[#bfc8d8] bg-gradient-to-b from-gray-100 to-white rounded-lg p-6 shadow-lg text-left w-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Link
          href={href}
          className="inline-block mt-4 px-6 py-2 w-fit text-center shadow-md border border-purple-300 bg-[#8E9AAF] text-white rounded-md hover:bg-[#7898d2] transition-transform duration-200 hover:scale-101"
          >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
