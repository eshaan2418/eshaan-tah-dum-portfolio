
import React, { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import FractalTree from '../components/FractalTree';

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
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {showContent && (
        <div className="pt-20 animate-fade-in">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-6">
            {/* Fractal Tree Animation */}
            <div className="mb-16 animate-scale-in">
              <FractalTree />
            </div>

            {/* Introduction Text */}
            <div className="max-w-4xl text-center space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-light text-white mb-8">
                hi, <span className="text-red-500 font-medium">eshaan</span> here.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 font-light mb-4">
                I create stuff sometimes.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                I'm a software engineer from Toronto, Canada. I'm fascinated by large-scale, 
                high-impact products and contributed to major feature launches in industry-leading 
                services as well as apps that have 100M+ installs.
              </p>

              <div className="flex justify-center mt-12">
                <button className="border border-gray-600 text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-light tracking-wide">
                  Say hi!
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl text-center">
              <h2 className="text-4xl font-light text-white mb-12">About</h2>
              <div className="text-lg text-gray-300 space-y-8 font-light leading-relaxed">
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
          <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl text-center">
              <h2 className="text-4xl font-light text-white mb-12">Experience</h2>
              <div className="text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  I've had the privilege of working on products that reach millions of users worldwide, 
                  contributing to major feature launches and architectural decisions that shape user experiences 
                  at scale.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl text-center">
              <h2 className="text-4xl font-light text-white mb-12">Projects</h2>
              <div className="text-lg text-gray-300 font-light leading-relaxed">
                <p>
                  From mobile apps with 100M+ installs to cutting-edge web applications, 
                  I enjoy building products that push the boundaries of what's possible.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 text-center text-gray-500 font-light">
            <p>&copy; 2024 Eshaan Oozher Kapooswalla. Crafted with passion.</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
