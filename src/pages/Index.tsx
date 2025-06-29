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
    <div className="min-h-screen bg-black font-inter">
      <Navigation />
      
      {showContent && (
        <div className="pt-16 md:pt-20 animate-fade-in">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-8 md:py-12">
            {/* Main Content Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8">
              {/* Fractal Tree */}
              <div className="flex-shrink-0">
                <FractalTree />
              </div>

              {/* Name and Location */}
              <div className="flex flex-col items-center md:items-start">
                {/* Location */}
                <div className="flex items-center gap-2 text-white text-sm font-light mb-4">
                  <MapPin size={16} />
                  <span>toronto, ontario</span>
                </div>

                {/* Name with Images */}
                <div className="flex flex-col items-center md:items-start space-y-2">
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
            </div>

            {/* Description */}
            <div className="max-w-3xl space-y-4 text-base md:text-lg text-white font-light leading-relaxed mb-12 text-center">
              <p>hi, i'm eshaan. i try and build cool stuff!</p>
              <p>
                say hi if you're in tech, you're in toronto, you just love my work, or if you're curious about collaborating, 
                brainstorming new ideas, or simply connecting over coffee.
              </p>
            </div>

            {/* Say Hi Button */}
            <div className="mb-12">
              <a
                href="mailto:eshaank@my.yorku.ca"
                className="inline-flex items-center gap-2 px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 rounded font-medium"
              >
                say hi 👋
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

          {/* Experience Section */}
          <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center">
            <div className="max-w-4xl font-inter">
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
            <div className="max-w-4xl font-inter">
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

          {/* Education Section */}
          <section id="education" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center">
            <div className="max-w-4xl font-inter">
              <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">education</h2>
              <div className="text-base md:text-lg text-red-500 font-light leading-relaxed">
                <p>
                  currently pursuing software engineering at lassonde school of engineering, york university, 
                  where i'm deepening my understanding of computer science fundamentals and exploring 
                  advanced topics in software architecture and system design.
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

          {/* About / Fun Stuff Section */}
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

          {/* Footer */}
          <footer className="py-8 md:py-12 text-center text-red-500 font-light text-sm md:text-base font-inter">
            <p>&copy; 2024 eshaan oozher kapooswalla. crafted with passion.</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
