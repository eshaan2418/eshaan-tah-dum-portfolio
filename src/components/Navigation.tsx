
import React from 'react';

const Navigation: React.FC = () => {
  const navItems = ['Home', 'About', 'Experience', 'Projects'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Navigation */}
          <div className="flex space-x-8">
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

          {/* Right side - Social links with emojis */}
          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors duration-300 text-xl hover:scale-110 transform transition-transform"
              title="LinkedIn"
            >
              💼
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors duration-300 text-xl hover:scale-110 transform transition-transform"
              title="GitHub"
            >
              🐱
            </a>
            <a
              href="mailto:eshaan@example.com"
              className="text-red-500 hover:text-red-400 transition-colors duration-300 text-xl hover:scale-110 transform transition-transform"
              title="Email"
            >
              📧
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
