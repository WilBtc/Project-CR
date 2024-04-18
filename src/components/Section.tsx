// src/components/Section.tsx
import React from 'react';

interface SectionProps {
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <section className="section p-4 my-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Section;
