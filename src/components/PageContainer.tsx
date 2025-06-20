import React from "react";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
<div className="bg-white rounded-md shadow-lg border border-gray-100 w-full max-w-[48rem] px-4 sm:px-6 mx-auto space-y-12">
      {children}
    </div>
  );
}
