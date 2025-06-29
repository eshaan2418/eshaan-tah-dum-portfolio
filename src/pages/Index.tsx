
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
    <div className="min-h-screen bg-black font-salvatore">
      <Navigation />
      
      {showContent && (
        <div className="pt-16 md:pt-20 animate-fade-in">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col px-4 md:px-6 py-8 md:py-12">
            {/* Top section with fractal tree and intro */}
            <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-12 mb-8 md:mb-16 max-w-7xl mx-auto w-full">
              {/* Fractal Tree - Top on mobile, Left on desktop */}
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                <FractalTree />
              </div>

              {/* Intro Section - Below tree on mobile, Right on desktop */}
              <div className="flex-1 space-y-4 md:space-y-6 pt-4 md:pt-8 text-center lg:text-left font-salvatore">
                {/* Location */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-white text-sm font-light">
                  <MapPin size={16} />
                  <span>Toronto, Ontario</span>
                </div>

                {/* Name */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-red-500 leading-tight">
                  Eshaan Oozher Kapooswalla
                </h1>

                {/* Title */}
                <p className="text-lg md:text-xl text-white font-light">
                  software engineer / creator / builder
                </p>

                {/* Description */}
                <p className="text-base md:text-lg text-white leading-relaxed max-w-2xl font-light">
                  Hi, Eshaan here. I create stuff sometimes. I'm a software engineer from Toronto, Canada. 
                  I'm fascinated by large-scale, high-impact products and contributed to major feature 
                  launches in industry-leading services as well as apps that have 100M+ installs.
                </p>
              </div>
            </div>

            {/* Dancing Down Arrow */}
            <div className="flex justify-center mt-auto mb-8">
              <ChevronDown 
                size={32} 
                className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
              />
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-20">
            <div className="max-w-4xl text-center font-salvatore">
              <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">About</h2>
              <div className="text-base md:text-lg text-red-500 space-y-6 md:space-y-8 font-light leading-relaxed">
                <p>
                  As a passionate software engineer, I thrive on building products that make a difference. 
                  My journey has taken me through various domains, from mobile applications reaching 
                  millions of users to enterprise-scale backend systems.
                </p>
                <p>
                  Based in Toronto, I'm always exploring the intersection of technology and human experience, 
                  crafting solutions that are not just functional, but delightful to use.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-20">
            <div className="max-w-4xl text-center font-salvatore">
              <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">Experience</h2>
              <div className="text-base md:text-lg text-red-500 font-light leading-relaxed">
                <p>
                  I've had the privilege of working on products that reach millions of users worldwide, 
                  contributing to major feature launches and architectural decisions that shape user experiences 
                  at scale.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-20">
            <div className="max-w-4xl text-center font-salvatore">
              <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">Projects</h2>
              <div className="text-base md:text-lg text-red-500 font-light leading-relaxed">
                <p>
                  From mobile apps with 100M+ installs to cutting-edge web applications, 
                  I enjoy building products that push the boundaries of what's possible.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 md:py-12 text-center text-red-500 font-light text-sm md:text-base font-salvatore">
            <p>&copy; 2024 Eshaan Oozher Kapooswalla. Crafted with passion.</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
