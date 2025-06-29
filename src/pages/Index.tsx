
import React, { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import FractalTree from '../components/FractalTree';
import { MapPin, ChevronDown } from 'lucide-react';

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    setTimeout(() => setShowContent(true), 100);
  };

  useEffect(() => {
    // Prevent scrolling during preloader
    if (showPreloader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPreloader]);

  if (showPreloader) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-black font-poppins">
      <Navigation />
      
      {showContent && (
        <div className="pt-16 md:pt-20 animate-fade-in">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-8 md:py-12 text-center">
            {/* Fractal Tree */}
            <div className="mb-8 md:mb-12">
              <FractalTree />
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-white text-sm font-light mb-6">
              <MapPin size={16} />
              <span>toronto, ontario</span>
            </div>

            {/* Name with Images */}
            <div className="flex flex-col items-center space-y-4 mb-8">
              <div className="flex flex-col items-center space-y-2">
                <img 
                  src="/lovable-uploads/7c88d979-5fee-4173-b5e0-d5da3ace061a.png" 
                  alt="eshaan oozher" 
                  className="h-12 md:h-16 lg:h-20"
                />
                <img 
                  src="/lovable-uploads/44c64afb-c5c0-4b67-b162-708ab90ecc54.png" 
                  alt="kapooswalla" 
                  className="h-12 md:h-16 lg:h-20"
                />
              </div>
            </div>

            {/* Updated Description */}
            <div className="max-w-3xl space-y-4 text-base md:text-lg text-white font-light leading-relaxed mb-12">
              <p>hi, i'm eshaan.</p>
              <p>i create cool stuff.</p>
              <p>
                i study software engineering at lassonde school of engineering, yorku and i'm currently based in toronto, canada. 
                i'm fascinated by large-scale, high-impact products, and i have contributed to major feature launches in industry-leading services. 
                i thrive on solving complex problems, from identifying user needs to designing and delivering scalable solutions that drive meaningful impact.
              </p>
              <p>
                say hi if you're in tech, you're in toronto, you just love my work, or if you're curious about collaborating, 
                brainstorming new ideas, or simply connecting over coffee.
              </p>
            </div>

            {/* Say Hi Box */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-12 max-w-md">
              <h3 className="text-red-500 font-medium mb-4">say hi</h3>
              <a
                href="mailto:eshaank@my.yorku.ca"
                className="text-red-400 hover:text-red-300 transition-colors underline"
              >
                eshaank@my.yorku.ca
              </a>
            </div>

            {/* Dancing Down Arrow */}
            <div className="flex justify-center">
              <ChevronDown 
                size={32} 
                className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
              />
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center">
            <div className="max-w-4xl font-poppins">
              <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">about</h2>
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
            
            {/* Down Arrow */}
            <div className="flex justify-center mt-12">
              <ChevronDown 
                size={32} 
                className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
              />
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center">
            <div className="max-w-4xl font-poppins">
              <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">experience</h2>
              <div className="text-base md:text-lg text-red-500 font-light leading-relaxed">
                <p>
                  i've had the privilege of working on products that reach millions of users worldwide, 
                  contributing to major feature launches and architectural decisions that shape user experiences 
                  at scale.
                </p>
              </div>
            </div>
            
            {/* Down Arrow */}
            <div className="flex justify-center mt-12">
              <ChevronDown 
                size={32} 
                className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
              />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center">
            <div className="max-w-4xl font-poppins">
              <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">projects</h2>
              <div className="text-base md:text-lg text-red-500 font-light leading-relaxed">
                <p>
                  from mobile apps with 100m+ installs to cutting-edge web applications, 
                  i enjoy building products that push the boundaries of what's possible.
                </p>
              </div>
            </div>
            
            {/* Down Arrow */}
            <div className="flex justify-center mt-12">
              <ChevronDown 
                size={32} 
                className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
              />
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 md:py-12 text-center text-red-500 font-light text-sm md:text-base font-poppins">
            <p>&copy; 2024 eshaan oozher kapooswalla. crafted with passion.</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
