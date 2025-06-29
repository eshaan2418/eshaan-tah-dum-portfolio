
import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['home', 'about', 'experience', 'projects'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name with accent dot */}
          <div className="flex items-center space-x-2">
            <span className="font-roboto text-red-500 text-lg md:text-xl font-medium lowercase">
              eshaan oozher kapooswalla
            </span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-roboto text-red-500 hover:text-red-400 transition-colors duration-300 font-light text-sm lowercase tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Social Icons - Right */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-red-500 hover:text-red-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-red-900/30">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="font-roboto text-red-500 hover:text-red-400 transition-colors duration-300 font-light text-sm lowercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-6 pt-4 border-t border-red-900/30">
                <a
                  href="https://linkedin.com/in/eshaan-kapooswalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transition-colors duration-300"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/eshaan-kapooswalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transition-colors duration-300"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:eshaan@example.com"
                  className="text-red-500 hover:text-red-400 transition-colors duration-300"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
