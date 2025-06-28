
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
      <div 
        className={`text-red-600 font-bold transition-all duration-500 ease-out ${
          phase === 'show' 
            ? 'text-8xl opacity-100 scale-100 blur-0' 
            : phase === 'expand'
            ? 'text-[20rem] opacity-0 scale-150 blur-lg'
            : 'opacity-0'
        }`}
        style={{
          fontFamily: 'Netflix Sans, Arial Black, sans-serif',
          textShadow: '0 0 20px rgba(255, 0, 0, 0.5)'
        }}
      >
        ESHAAN
      </div>
    </div>
  );
};

export default Preloader;
