
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
      <img 
        src="/lovable-uploads/52334684-075b-46ae-9b83-739685e4681b.png"
        alt="Eshaan Oozher Kapooswalla"
        className={`transition-all duration-500 ease-out ${
          phase === 'show' 
            ? 'opacity-100 scale-100 blur-0' 
            : phase === 'expand'
            ? 'opacity-0 scale-150 blur-lg'
            : 'opacity-0'
        }`}
        style={{
          maxWidth: '80vw',
          height: 'auto'
        }}
      />
    </div>
  );
};

export default Preloader;
