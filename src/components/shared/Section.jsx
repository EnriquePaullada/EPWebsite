import React from 'react';

const Section = ({
  title,
  children,
  className = ""
}) => (
  <section className={`py-12 md:py-16 ${className}`}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="heading-serif text-3xl font-bold text-[#1A2A40] mb-8">{title}</h2>
      {children}
    </div>
  </section>
);

export default Section;