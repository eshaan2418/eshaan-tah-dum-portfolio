
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Experience', 'Projects'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation - Left side */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-red-500 hover:text-red-400 transition-colors duration-300 font-light text-sm uppercase tracking-wide"
              >
                {item}
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
              className="text-red-500 hover:text-red-400 transition-colors duration-300 text-lg md:text-xl hover:scale-110 transform transition-transform"
              title="LinkedIn"
            >
              💼
            </a>
            <a
              href="https://github.com/eshaan-kapooswalla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors duration-300 text-lg md:text-xl hover:scale-110 transform transition-transform"
              title="GitHub"
            >
              ⚡
            </a>
            <a
              href="mailto:eshaan@example.com"
              className="text-red-500 hover:text-red-400 transition-colors duration-300 text-lg md:text-xl hover:scale-110 transform transition-transform"
              title="Email"
            >
              📧
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-red-900/30">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-red-500 hover:text-red-400 transition-colors duration-300 font-light text-sm uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
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
