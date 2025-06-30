import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import FractalTree from '../components/FractalTree';
import { MapPin, ChevronDown, ArrowRight, Calendar } from 'lucide-react';

interface ExperienceEntry {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  isActive?: boolean;
}

const experienceData: ExperienceEntry[] = [
  {
    id: '1',
    company: 'Stealth Biotech Startup',
    location: 'Remote',
    role: 'Machine Learning Software Engineering Intern',
    period: 'May 2025 – Present',
    description: [
      'Led PyTorch-based ML model development for IBM-funded drug discovery, improving MOA classification accuracy by 15%, reducing analysis time by 25%, saving $5K+.',
      'Applied weakly/self-supervised learning to cut labeling costs by 40% and reduce data footprint by 60%.',
      'Built transfer learning pipelines using Docker, improving benchmark performance by 12%, reducing training time by 45%, saving $3K.',
      'Integrated unsupervised learning techniques with senior researchers, boosting candidate selection by 30%.'
    ],
    isActive: true
  },
  {
    id: '2',
    company: 'YU Blueprint',
    location: 'Toronto',
    role: 'Software Developer Intern',
    period: 'May 2025 – Present',
    description: [
      'Developed open source projects with non-profits.',
      'Improved accessibility and UX on web apps.',
      'Contributed to feature development, bug fixes, and agile code reviews.'
    ],
    isActive: true
  },
  {
    id: '3',
    company: 'ITREB Canada',
    location: 'Toronto, Hybrid',
    role: 'Full Stack Developer Intern',
    period: 'May 2024 – December 2024',
    description: [
      'Developed Spring Boot microservices and REST APIs with TDD.',
      'Implemented API rate limiting and security.',
      'Revamped frontend/backend of iicanada.org, reducing data retrieval time by 20% for 30,000+ users.',
      'Improved UX by reducing user clicks by 16% and integrating React Query for efficient data fetching.'
    ]
  },
  {
    id: '4',
    company: 'Prince Aly Khan Hospital',
    location: 'Remote',
    role: 'Software Engineer Intern',
    period: 'January – August 2024',
    description: [
      'Built secure, scalable healthcare workflow solutions.',
      'Developed responsive, user-friendly React interfaces.',
      'Ensured data privacy and compliance across remote teams.'
    ]
  },
  {
    id: '5',
    company: 'AIESEC',
    location: 'Remote',
    role: 'VP of Tech',
    period: '2023 – 2024',
    description: [
      'Ran cross-cultural exchange and leadership development initiatives.',
      'Helped with web development and organized events.'
    ]
  }
];

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

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

  useEffect(() => {
    if (!showContent) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    experienceData.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [showContent]);

  if (showPreloader) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-black font-inter">
      <Navigation />
      
      {showContent && (
        <div className="pt-16 md:pt-20 animate-fade-in">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-8 md:py-12">
            {/* Main Content Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8">
              {/* Fractal Tree */}
              <div className="flex-shrink-0">
                <FractalTree />
              </div>

              {/* Name and Location */}
              <div className="flex flex-col items-center md:items-start">
                {/* Location */}
                <div className="flex items-center gap-2 text-white text-sm font-light mb-4">
                  <MapPin size={16} />
                  <span>toronto, ontario</span>
                </div>

                {/* Name with Images */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                  <img 
                    src="/lovable-uploads/7c88d979-5fee-4173-b5e0-d5da3ace061a.png" 
                    alt="eshaan oozher" 
                    className="h-12 md:h-16 lg:h-20"
                  />
                  <img 
                    src="/lovable-uploads/44c64afb-c5c0-4b67-b162-708ab90ecc54.png" 
                    alt="kapooswalla" 
                    className="h-12 md:h-16 lg:h-20"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl space-y-4 text-base md:text-lg text-white font-light leading-relaxed mb-12 text-center">
              <p>hi, i'm eshaan. i try and build cool stuff!</p>
              <p>
                say hi if you're in tech, you're in toronto, you just love my work, or if you're curious about collaborating, 
                brainstorming new ideas, or simply connecting over coffee.
              </p>
            </div>

            {/* Say Hi Button */}
            <div className="mb-12">
              <a
                href="mailto:eshaank@my.yorku.ca"
                className="inline-flex items-center gap-2 px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 rounded font-medium"
              >
                say hi 👋
              </a>
            </div>

            {/* Dancing Down Arrow */}
            <div className="flex justify-center">
              <ChevronDown 
                size={32} 
                className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
              />
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="min-h-screen px-4 md:px-6 py-16 md:py-20">
            <div className="max-w-6xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light text-red-500 mb-4">
                  Professional Experience
                </h2>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-red-400 to-red-600 transform md:-translate-x-0.5"></div>

                {/* Experience Entries */}
                <div className="space-y-12">
                  {experienceData.map((entry, index) => (
                    <div
                      key={entry.id}
                      id={entry.id}
                      className={`relative transition-all duration-700 ${
                        visibleItems.has(entry.id) 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8'
                      }`}
                    >
                      {/* Timeline Node */}
                      <div className={`absolute left-2 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-2 ${
                        entry.isActive 
                          ? 'bg-red-500 shadow-lg shadow-red-500/50 animate-pulse' 
                          : 'bg-red-600'
                      }`}>
                        <div className="absolute inset-1 bg-black rounded-full"></div>
                      </div>

                      {/* Content Card */}
                      <div className={`ml-12 md:ml-0 ${
                        index % 2 === 0 ? 'md:pr-8 md:text-right md:mr-1/2' : 'md:pl-8 md:ml-1/2'
                      }`}>
                        <div className="bg-black/60 backdrop-blur-sm border border-red-900/30 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                          {/* Header */}
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2 text-red-500">
                              <Calendar size={16} />
                              <span className="text-sm font-medium">{entry.period}</span>
                              {entry.isActive && (
                                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                                  Current
                                </span>
                              )}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-1">
                              {entry.role}
                            </h3>
                            <div className="flex items-center gap-2 text-red-400">
                              <span className="font-medium">{entry.company}</span>
                              <span className="text-white/60">•</span>
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                <span className="text-sm">{entry.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="space-y-2">
                            {entry.description.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-white/90 text-sm leading-relaxed">{item}</p>
                              </div>
                            ))}
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Down Arrow */}
            <div className="flex justify-center mt-16">
              <ChevronDown 
                size={32} 
                className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
              />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center">
            <div className="max-w-4xl font-inter">
              <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">projects</h2>
              <div className="text-base md:text-lg text-red-500 font-light leading-relaxed">
                <p>
                  from mobile apps with 100m+ installs to cutting-edge web applications, 
                  i enjoy building products that push the boundaries of what's possible.
                </p>
              </div>
            </div>
            
            {/* Down Arrow */}
            <div className="flex justify-center mt-12">
              <ChevronDown 
                size={32} 
                className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
              />
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center">
            <div className="max-w-4xl font-inter">
              <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">education</h2>
              <div className="text-base md:text-lg text-red-500 font-light leading-relaxed">
                <p>
                  currently pursuing software engineering at lassonde school of engineering, york university, 
                  where i'm deepening my understanding of computer science fundamentals and exploring 
                  advanced topics in software architecture and system design.
                </p>
              </div>
            </div>
            
            {/* Down Arrow */}
            <div className="flex justify-center mt-12">
              <ChevronDown 
                size={32} 
                className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
              />
            </div>
          </section>

          {/* About / Fun Stuff Section */}
          <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center">
            <div className="max-w-4xl font-inter">
              <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">about / fun stuff</h2>
              <div className="text-base md:text-lg text-red-500 space-y-6 md:space-y-8 font-light leading-relaxed">
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

          {/* Footer */}
          <footer className="py-8 md:py-12 text-center text-red-500 font-light text-sm md:text-base font-inter">
            <p>&copy; 2024 eshaan oozher kapooswalla. crafted with passion.</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
