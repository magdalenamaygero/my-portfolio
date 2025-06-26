import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Magdalena Gero | Portfolio",
  description: "Magdalena Gero's portfolio built with Next.js",
};

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-full sm:max-w-2xl px-4 sm:px-6 md:px-8 mx-auto py-8 shadow-2xl bg-grey-50 rounded-lg border-1 border-purple-300">
      {children}
    </div>
  );
}

