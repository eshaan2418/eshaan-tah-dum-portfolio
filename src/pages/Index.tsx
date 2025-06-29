
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
    <div className="min-h-screen bg-black font-roboto">
      <Navigation />
      
      {showContent && (
        <div className="pt-16 md:pt-20 animate-fade-in">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex flex-col px-4 md:px-8 py-6 md:py-8">
            {/* Top section with fractal tree and intro */}
            <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 mb-8 md:mb-16 max-w-7xl mx-auto w-full">
              {/* Fractal Tree - Smaller and top-left positioned */}
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                <FractalTree />
              </div>

              {/* Intro Section - Next to tree */}
              <div className="flex-1 space-y-4 md:space-y-6 pt-4 md:pt-8 text-center lg:text-left">
                {/* Name - bright Netflix red */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-roboto font-light text-red-500 leading-tight lowercase">
                  eshaan oozher kapooswalla
                </h1>

                {/* Location - white */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-white text-sm font-roboto font-light">
                  <MapPin size={16} />
                  <span className="lowercase">toronto, ontario</span>
                </div>

                {/* Title and Description - white */}
                <div className="space-y-4 text-white font-roboto font-light">
                  <p className="text-lg md:text-xl lowercase">
                    software engineer / creator / builder
                  </p>

                  <p className="text-base md:text-lg leading-relaxed max-w-2xl lowercase">
                    hi, eshaan here. i create stuff sometimes. i'm a software engineer from toronto, canada. 
                    i'm fascinated by large-scale, high-impact products and contributed to major feature 
                    launches in industry-leading services as well as apps that have 100m+ installs.
                  </p>
                </div>
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
          <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-20">
            <div className="max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-roboto-condensed font-light text-red-500 mb-8 md:mb-12 lowercase">about</h2>
              <div className="text-base md:text-lg text-red-500 space-y-6 md:space-y-8 font-roboto font-light leading-relaxed lowercase">
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

          {/* Experience Section */}
          <section id="experience" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-20">
            <div className="max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-roboto-condensed font-light text-red-500 mb-8 md:mb-12 lowercase">experience</h2>
              <div className="text-base md:text-lg text-red-500 font-roboto font-light leading-relaxed lowercase">
                <p>
                  i've had the privilege of working on products that reach millions of users worldwide, 
                  contributing to major feature launches and architectural decisions that shape user experiences 
                  at scale.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-20">
            <div className="max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-roboto-condensed font-light text-red-500 mb-8 md:mb-12 lowercase">projects</h2>
              <div className="text-base md:text-lg text-red-500 font-roboto font-light leading-relaxed lowercase">
                <p>
                  from mobile apps with 100m+ installs to cutting-edge web applications, 
                  i enjoy building products that push the boundaries of what's possible.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 md:py-12 text-center text-red-500 font-roboto font-light text-sm md:text-base lowercase">
            <p>&copy; 2024 eshaan oozher kapooswalla. crafted with passion.</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
