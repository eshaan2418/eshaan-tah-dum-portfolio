
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'experience', href: '#experience' },
    { name: 'projects', href: '#projects' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand - Left side */}
          <div className="text-red-500 font-medium text-lg font-poppins">
            EK
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-red-500 hover:text-red-400 transition-colors duration-300 font-medium font-poppins"
              >
                {item.name}
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
              href="mailto:eshaank@my.yorku.ca"
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
                  className="text-red-500 hover:text-red-400 transition-colors duration-300 font-medium font-poppins"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
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
