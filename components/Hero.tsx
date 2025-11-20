import React, { useEffect, useState } from 'react';
import { HeroProps } from '../types';

const Hero: React.FC<HeroProps> = ({ imageUrl, onGenerate, isLoading }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505] bg-grain font-syne">
      
      {/* Ambient Color Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out z-0"
        style={{
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px) scale(1.1)`
        }}
      >
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt="Generated Art" 
            className="w-full h-full object-cover opacity-90"
          />
        ) : (
          <div className="w-full h-full bg-black" />
        )}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center mb-12 mix-blend-exclusion">
           <h1 className="text-8xl md:text-9xl font-black text-white tracking-tighter leading-none">
             NEXT<br/>GEN
           </h1>
        </div>

        <button 
          onClick={onGenerate} 
          disabled={isLoading}
          className="pointer-events-auto px-8 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-wait"
        >
          {isLoading ? 'DREAMING...' : 'GENERATE VISUALS'}
        </button>
      </div>
    </div>
  );
};

export default Hero;