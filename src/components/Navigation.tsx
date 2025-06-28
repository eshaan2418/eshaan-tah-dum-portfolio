
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = ['Home', 'About', 'Experience', 'Projects'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Left side - Name */}
          <div className="text-white font-light text-lg tracking-wide">
            Eshaan Oozher Kapooswalla
          </div>

          {/* Center navigation */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-light tracking-wide text-sm uppercase"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side social links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:eshaan@example.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
