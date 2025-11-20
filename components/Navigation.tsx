import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 flex justify-between items-center mix-blend-exclusion text-white font-syne">
      <div className="text-2xl font-extrabold tracking-tighter hover:text-cyan-400 transition-colors cursor-pointer">
        M — D
      </div>
      <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest">
        <a href="#" className="hover:text-cyan-400 transition-colors duration-300">WORK</a>
        <a href="#" className="hover:text-fuchsia-400 transition-colors duration-300">ABOUT</a>
        <a href="#" className="hover:text-purple-400 transition-colors duration-300">CONTACT</a>
      </div>
      <button className="text-xs font-extrabold border border-white/30 px-6 py-2.5 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase tracking-wider">
        Menu
      </button>
    </nav>
  );
};

export default Navigation;