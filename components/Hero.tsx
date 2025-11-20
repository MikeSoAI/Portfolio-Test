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
    <div className="relative w-full h-screen overflow-hidden bg-black bg-grain">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px) scale(1.05)`
        }}
      >
        {imageUrl ? (
          <>
            <img 
              src={imageUrl} 
              alt="Abstract Chrome Art" 
              className="w-full h-full object-cover animate-[fadeIn_1.5s_ease-out]"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#050505] to-[#1a1a1a]">
             {!isLoading && (
                <div className="text-center z-10 p-8">
                  <p className="text-gray-400 mb-4 tracking-widest text-sm">RENDER NOT GENERATED</p>
                  <button 
                    onClick={onGenerate}
                    className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold"
                  >
                    Initialize Renderer
                  </button>
                </div>
             )}
          </div>
        )}
      </div>

      {/* Loading State Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin" />
            <span className="text-xs font-bold tracking-[0.3em] animate-pulse">RENDERING ASSETS...</span>
          </div>
        </div>
      )}

      {/* Main Content Layer */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-center px-4 pointer-events-none">
        <div 
          className="text-center transform transition-transform duration-75 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
          }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-2">
            <span className="block text-outline drop-shadow-2xl mix-blend-overlay opacity-90">DIGITAL</span>
            <span className="block text-white drop-shadow-2xl">CREATOR</span>
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none text-outline opacity-60">
            PORTFOLIO
          </h2>
        </div>
      </div>

      {/* Sticky Bottom UI */}
      <div className="absolute bottom-0 left-0 right-0 z-40 p-6 md:p-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
        
        {/* Year / Status */}
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 tracking-widest">AVAILABLE FOR HIRE</span>
            <span className="text-sm font-bold tracking-wider">2024 EDITION</span>
          </div>
        </div>

        {/* CTA */}
        <button className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 transition-all hover:bg-white/20 hover:border-white/40 hover:scale-105 active:scale-95 w-full md:w-auto">
          <div className="relative z-10 flex items-center justify-center gap-3">
            <span className="text-xs font-bold tracking-[0.2em] text-white">BROWSE PROJECTS</span>
            <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </button>

        {/* Regeneration Trigger (Small) */}
        {!isLoading && imageUrl && (
          <button 
            onClick={onGenerate}
            className="pointer-events-auto absolute top-24 right-6 md:static md:order-none p-3 rounded-full bg-black/20 hover:bg-white/20 backdrop-blur-lg border border-white/10 transition-all text-white/50 hover:text-white"
            title="Regenerate Art"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
