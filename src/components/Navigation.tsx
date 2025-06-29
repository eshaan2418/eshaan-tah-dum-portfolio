
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', image: '/lovable-uploads/ed53e28d-8659-4e25-b054-584e9d6b4fd1.png', href: '#home' },
    { name: 'About', image: '/lovable-uploads/a925cd33-6f39-4039-b7c0-95ce8c0a881b.png', href: '#about' },
    { name: 'Experience', image: '/lovable-uploads/b2b1f19d-9a45-4046-b028-89d6a66d68fe.png', href: '#experience' },
    { name: 'Projects', image: '/lovable-uploads/cc403cd7-38cc-4638-875e-dbea4fa1c598.png', href: '#projects' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Name with images */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/7c88d979-5fee-4173-b5e0-d5da3ace061a.png" 
              alt="Eshaan Oozher" 
              className="h-6 md:h-8"
            />
            <img 
              src="/lovable-uploads/44c64afb-c5c0-4b67-b162-708ab90ecc54.png" 
              alt="Kapooswalla" 
              className="h-6 md:h-8"
            />
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:opacity-75 transition-opacity duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="h-5 lg:h-6"
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-red-500 hover:text-red-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Social Links - Right side */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <a
              href="https://linkedin.com/in/eshaan-kapooswalla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform transition-transform"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/eshaan-kapooswalla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform transition-transform"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:eshaan@example.com"
              className="text-red-500 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform transition-transform"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-red-900/30">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:opacity-75 transition-opacity duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-5"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
