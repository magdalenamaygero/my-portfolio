import React from "react";

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return (
<div className="bg-white rounded-md shadow-lg border border-gray-100 p-8">
      {children}
    </div>
  );
}
