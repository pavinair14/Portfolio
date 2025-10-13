import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-6xl font-medium text-cyan-700 dark:text-white capitalize mb-8 text-center">
      {children}
      <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-6 opacity: 1; transform: none;"></div>
    </h2>
  );
}