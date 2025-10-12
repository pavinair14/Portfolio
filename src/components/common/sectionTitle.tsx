import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}