import React from "react";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 max-w-3xl mx-auto py-8 space-y-12 shadow-2xl">
      {children}
    </div>
  );
}

