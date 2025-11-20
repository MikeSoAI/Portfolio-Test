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
              alt="Iridescent Abstract Art" 
              className="w-full h-full object-cover animate-[fadeIn_1.5s_ease-out]"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90" />
             <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10 mix-blend-overlay" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#050505] via-[#0a0a12] to-[#1a1a1a]">
             {!isLoading && (
                <div className="text-center z-10 p-8">
                  <p className="text-gray-400 mb-4 tracking-widest text-sm font-syne">NO ARTWORK LOADED</p>
                  <button 
                    onClick={onGenerate}
                    className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold font-syne"
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
            <div className="w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin" />
            <span className="text-xs font-bold tracking-[0.3em] animate-pulse text-purple-300 font-syne">GENERATING ASSETS...</span>
          </div>
        </div>
      )}

      {/* Main Content Layer */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-center px-4 pointer-events-none">
        <div 
          className="text-center transform transition-transform duration-75 ease-out relative"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
          }}
        >
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-extrabold font-syne tracking-tighter leading-[0.85] mb-2 mix-blend-difference">
            <span className="block text-outline hover:text-white transition-colors duration-500 opacity-90">DIGITAL</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              CREATOR
            </span>
          </h1>
          
          {/* Floating decorative element */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full opacity-50" />
        </div>
      </div>

      {/* Sticky Bottom UI */}
      <div className="absolute bottom-0 left-0 right-0 z-40 p-6 md:p-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
        
        {/* Year / Status */}
        <div className="flex items-center gap-4">
          <div className="relative">
             <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(99,102,241,0.8)] z-10 relative"></div>
             <div className="absolute inset-0 bg-indigo-400 rounded-full animate-ping opacity-75"></div>
          </div>
          <div className="flex flex-col font-syne">
            <span className="text-[10px] text-indigo-200/80 tracking-widest">OPEN FOR COLLABS</span>
            <span className="text-sm font-bold tracking-wider text-white">2024 — 25</span>
          </div>
        </div>

        {/* CTA */}
        <button className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 px-10 py-5 transition-all hover:border-purple-500/50 w-full md:w-auto">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex items-center justify-center gap-3">
            <span className="text-xs font-bold tracking-[0.2em] text-white font-syne group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-200 group-hover:to-purple-200">BROWSE WORK</span>
            <svg className="w-4 h-4 text-white transform group-hover:translate-x-2 group-hover:text-purple-300 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </button>

        {/* Regeneration Trigger (Small) */}
        {!isLoading && imageUrl && (
          <button 
            onClick={onGenerate}
            className="pointer-events-auto absolute top-24 right-6 md:static md:order-none p-3 rounded-full bg-black/20 hover:bg-purple-500/20 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all text-white/50 hover:text-white group"
            title="Regenerate Art"
          >
            <svg className="group-hover:rotate-180 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;