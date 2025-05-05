import React from "react";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto border border-purple-300 bg-white rounded-md shadow-sm p-8 space-y-12">
      {children}
    </div>
  );
}
