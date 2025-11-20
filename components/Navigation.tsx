import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      <div className="text-sm font-bold tracking-widest uppercase">
        M — D
      </div>
      <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest">
        <a href="#" className="hover:opacity-50 transition-opacity">Work</a>
        <a href="#" className="hover:opacity-50 transition-opacity">About</a>
        <a href="#" className="hover:opacity-50 transition-opacity">Contact</a>
      </div>
      <button className="text-xs font-medium border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
        Menu
      </button>
    </nav>
  );
};

export default Navigation;
