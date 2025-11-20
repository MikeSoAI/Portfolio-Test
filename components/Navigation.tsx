import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white font-syne">
      <div className="text-lg font-bold tracking-tighter uppercase hover:text-purple-300 transition-colors cursor-pointer">
        M — D
      </div>
      <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest">
        <a href="#" className="hover:text-purple-300 transition-colors">WORK</a>
        <a href="#" className="hover:text-purple-300 transition-colors">ABOUT</a>
        <a href="#" className="hover:text-purple-300 transition-colors">CONTACT</a>
      </div>
      <button className="text-xs font-bold border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase tracking-wider">
        Menu
      </button>
    </nav>
  );
};

export default Navigation;