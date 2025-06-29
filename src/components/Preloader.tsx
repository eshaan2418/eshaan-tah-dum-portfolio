
import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'show' | 'expand' | 'complete'>('show');

  useEffect(() => {
    // Show name for 1 second
    const showTimer = setTimeout(() => {
      setPhase('expand');
    }, 1000);

    // Start expansion animation
    const expandTimer = setTimeout(() => {
      setPhase('complete');
      // Complete after animation
      setTimeout(onComplete, 500);
    }, 1500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(expandTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className={`font-roboto text-red-500 lowercase transition-all duration-500 ease-out ${
          phase === 'show' 
            ? 'opacity-100 scale-100 blur-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl' 
            : phase === 'expand'
            ? 'opacity-0 scale-150 blur-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
            : 'opacity-0'
        }`}>
          eshaan oozher kapooswalla
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
