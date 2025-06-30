
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center">
      <div className="max-w-4xl font-inter">
        <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">about / fun stuff</h2>
        <div className="text-base md:text-lg text-red-500 space-y-6 md:space-y-8 font-light leading-relaxed">
          <p>
            as a passionate software engineer, i thrive on building products that make a difference. 
            my journey has taken me through various domains, from mobile applications reaching 
            millions of users to enterprise-scale backend systems.
          </p>
          <p>
            based in toronto, i'm always exploring the intersection of technology and human experience, 
            crafting solutions that are not just functional, but delightful to use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
