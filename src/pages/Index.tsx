
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navigation />
      
      {showContent && (
        <div className="pt-20 animate-fade-in">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-6">
            {/* Fractal Tree Animation */}
            <div className="mb-12 animate-scale-in">
              <FractalTree />
            </div>

            {/* Introduction Text */}
            <div className="max-w-4xl text-center space-y-6 animate-fade-in">
              <h1 className="text-6xl font-bold text-white mb-8">
                Hi, <span className="text-red-500">Eshaan</span> here.
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                I create stuff sometimes. I'm a software engineer from Toronto, Canada. 
                I'm fascinated by large-scale, high-impact products and contributed to major 
                feature launches in industry-leading services as well as apps that have 100M+ installs.
              </p>

              <div className="flex justify-center mt-12">
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl text-center">
              <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
              <div className="text-lg text-gray-300 space-y-6">
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
              <h2 className="text-4xl font-bold text-white mb-8">Experience</h2>
              <div className="text-lg text-gray-300">
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
              <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
              <div className="text-lg text-gray-300">
                <p>
                  From mobile apps with 100M+ installs to cutting-edge web applications, 
                  I enjoy building products that push the boundaries of what's possible.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 text-center text-gray-500">
            <p>&copy; 2024 Eshaan Oozher Kapooswalla. Crafted with passion.</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
