
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import FractalTree from '../components/FractalTree';
import { MapPin, ChevronDown, ArrowRight, Calendar, ExternalLink } from 'lucide-react';

interface ExperienceEntry {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  isActive?: boolean;
}

interface Project {
  name: string;
  techStack: string;
  description: string;
  githubUrl: string;
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

const projectsData: Project[] = [
  {
    name: "fitMind-ai",
    techStack: "JavaScript/Node.js (Microservices), Express, MongoDB, Docker/Kubernetes",
    description: "ai-powered fitness & wellness platform built on microservices. tracks user activities, offers personalized recommendations, and scales via containerized services.",
    githubUrl: "https://github.com/eshaan-kapooswalla/FitMind-AI"
  },
  {
    name: "jobber",
    techStack: "Java (Spring Boot), React, PostgreSQL, Docker",
    description: "distributed job portal platform with microservices. spring boot handles backend apis, react frontend provides a responsive ui, database stores job and user data.",
    githubUrl: "https://github.com/eshaan-kapooswalla/Jobber"
  },
  {
    name: "morphUNet",
    techStack: "Python, PyTorch, NumPy",
    description: "implements various u-net architectures in pytorch for image segmentation tasks, focusing on datasets like carvana's masking challenge.",
    githubUrl: "https://github.com/eshaan-kapooswalla/MorphUNet"
  },
  {
    name: "shopSmart-ai",
    techStack: "Python, Jupyter Notebook, scikit-learn, Pandas",
    description: "e-commerce recommender system using machine learning to suggest products based on user behavior and purchase history.",
    githubUrl: "https://github.com/eshaan-kapooswalla/ShopSmart-AI"
  },
  {
    name: "stockPredictor",
    techStack: "Python, scikit-learn/Keras, Pandas",
    description: "applies ml models to predict stock prices, using historical data and features engineered in python notebooks.",
    githubUrl: "https://github.com/eshaan-kapooswalla/StockPredictor"
  },
  {
    name: "gideon-ai-desktop-assistant",
    techStack: "Python, SpeechRecognition, pyttsx3, APIs",
    description: "desktop-based ai assistant (inspired by the flash) with voice i/o, can perform tasks, answer queries, and integrate with various apis.",
    githubUrl: "https://github.com/eshaan-kapooswalla/Gideon-AI-Desktop-Assistant"
  },
  {
    name: "tetrisPlay",
    techStack: "C++, SDL (or console-based)",
    description: "classic tetris game implemented in c++. hands-on experience with game mechanics, input handling, and state management.",
    githubUrl: "https://github.com/eshaan-kapooswalla/TetrisPlay"
  },
  {
    name: "mandelbrotExplorer",
    techStack: "MATLAB",
    description: "matlab script to generate and visualize the mandelbrot set, ideal for visual exploration of complex fractal patterns.",
    githubUrl: "https://github.com/eshaan-kapooswalla/MandelbrotExplorer"
  },
  {
    name: "book-store",
    techStack: "JavaScript, Node.js, Express, MongoDB, React (MERN)",
    description: "full-stack mern application for managing a book inventory with crud operations and a clean react ui.",
    githubUrl: "https://github.com/eshaan-kapooswalla/Book-Store"
  },
  {
    name: "cabieeee",
    techStack: "JavaScript, React Native (or Expo), Firebase/Socket.io, Node.js",
    description: "real-time cab-ordering mobile app (an uber clone). implements booking flows, live driver updates, and chat features.",
    githubUrl: "https://github.com/eshaan-kapooswalla/Cabieeee"
  },
  {
    name: "plantWateringSystem",
    techStack: "Java (Arduino/Embedded), Sensors, MQTT (optional), Server backend",
    description: "automated system that monitors soil moisture and waters plants accordingly. involves hardware sensors, timer logic, and server integration.",
    githubUrl: "https://github.com/eshaan-kapooswalla/PlantWateringSystem"
  }
];

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const yorkuImages = [
    '/lovable-uploads/0fe83b93-4e80-48c0-80da-7ec9841da45b.png',
    '/lovable-uploads/bfecc39f-d006-49fd-92db-900bcc300ed2.png',
    '/lovable-uploads/dcceb3f1-c826-4fd5-8c2c-a05b90117756.png',
    '/lovable-uploads/e7675e74-02e0-43cb-9244-66b4112e60d4.png',
    '/lovable-uploads/169ced2e-3e01-4351-9c17-d1421be4f91f.png'
  ];

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

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % yorkuImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [yorkuImages.length]);

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
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-red-400 to-red-600"></div>

                {/* Experience Entries */}
                <div className="space-y-12">
                  {experienceData.map((entry) => (
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
                      <div className={`absolute left-2 w-4 h-4 rounded-full transform -translate-x-2 ${
                        entry.isActive 
                          ? 'bg-red-500 shadow-lg shadow-red-500/50 animate-pulse' 
                          : 'bg-red-600'
                      }`}>
                        <div className="absolute inset-1 bg-black rounded-full"></div>
                      </div>

                      {/* Content Card */}
                      <div className="ml-12">
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
          <section id="projects" className="min-h-screen px-4 md:px-6 py-16 md:py-20">
            <div className="max-w-6xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light text-red-500 mb-4">
                  projects
                </h2>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                  <a
                    key={index}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="bg-black/60 backdrop-blur-sm border border-red-500 rounded-lg p-6 h-full transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer">
                      {/* Project Name */}
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-red-500 group-hover:text-white transition-colors duration-300">
                          {project.name}
                        </h3>
                        <ExternalLink 
                          size={18} 
                          className="text-red-500 group-hover:text-white transition-colors duration-300" 
                        />
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-3">
                        <p className="text-sm font-medium text-white group-hover:text-white transition-colors duration-300 mb-1">
                          tech stack:
                        </p>
                        <p className="text-sm text-red-500 group-hover:text-white transition-colors duration-300">
                          {project.techStack}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-red-500 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </a>
                ))}
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

          {/* Education Section */}
          <section id="education" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20">
            <div className="max-w-4xl w-full font-inter">
              <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12 text-center">education</h2>
              
              {/* York University Photo Gallery */}
              <div className="mb-12 flex justify-center">
                <div className="relative w-full max-w-2xl h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  {yorkuImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`York University Campus ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  {/* Image indicator dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {yorkuImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentImageIndex ? 'bg-red-500' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Details */}
              <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 md:p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 mb-8">
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-2">
                    lassonde school of engineering, york university
                  </h3>
                  <p className="text-lg text-red-500 mb-3">
                    bachelor of engineering in software engineering (co-op)
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4 text-red-500">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <MapPin size={16} />
                      <span>toronto, ontario, canada</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Calendar size={16} />
                      <span>expected graduation: april 2027</span>
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">highlights:</h4>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="px-3 py-1 bg-red-500/20 text-red-500 text-sm rounded-full">
                        tentanda via scholar
                      </span>
                      <span className="px-3 py-1 bg-red-500/20 text-red-500 text-sm rounded-full">
                        lassonde co-op program
                      </span>
                    </div>
                  </div>

                  {/* Relevant Coursework */}
                  <div>
                    <h4 className="text-white font-medium mb-2">relevant coursework:</h4>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
                      {[
                        'computer science',
                        'data structures and algorithms',
                        'databases',
                        'computer networks',
                        'computer organization',
                        'operating systems',
                        'object-oriented programming (oops)',
                        'software system design'
                      ].map((course, index) => (
                        <span key={index} className="px-2 py-1 bg-red-500/20 text-red-500 rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Programming Skills */}
              <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 md:p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-6">
                    programming skills
                  </h3>
                  
                  {/* Languages */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">languages:</h4>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
                      {[
                        'python', 'javascript/typescript', 'java', 'c/c++', 'sql', 'r', 'go', 'html', 'css', 'bash', 'assembly'
                      ].map((language, index) => (
                        <span key={index} className="px-2 py-1 bg-red-500/20 text-red-500 rounded">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Frameworks */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">frameworks:</h4>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
                      {[
                        'django', 'react', 'spring boot', 'angular', 'next.js', 'pytorch', 'scikit', 'numpy', 'opencv', 'node.js', 'graphql'
                      ].map((framework, index) => (
                        <span key={index} className="px-2 py-1 bg-red-500/20 text-red-500 rounded">
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-white font-medium mb-2">tools:</h4>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
                      {[
                        'git', 'docker', 'postman', 'jira/confluence', 'mongodb', 'postgresql', 'selenium', 'heroku', 'aws', 'gcp', 'kubernetes', 'google gemini ai api', 'kafka'
                      ].map((tool, index) => (
                        <span key={index} className="px-2 py-1 bg-red-500/20 text-red-500 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
