import React from "react";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 max-w-2xl mx-auto py-8 shadow-2xl bg-white rounded-lg">
      {children}
    </div>
  );
}

