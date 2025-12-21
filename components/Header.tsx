import React from 'react';
import { NAV_ITEMS } from '../constants';
import logo from '../assets/shuutzlg.svg';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#0B1222]/80 backdrop-blur-md border-b border-white/5">
      <nav className="flex items-center justify-between px-4 md:px-12 h-16 md:h-20 max-w-[1920px] mx-auto">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2 md:gap-3 group">
            <img src={logo} alt="Shuutz" className="h-6 md:h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="text-lg md:text-2xl font-brand font-extrabold tracking-tighter text-[#E7E5E4] uppercase">SHUUTZ</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-12 lg:gap-20">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mono text-[10px] uppercase font-bold tracking-[0.4em] text-[#E7E5E4]/30 hover:text-[#E7E5E4] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact">
          <button className="mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] bg-[#E7E5E4] text-[#0B1222] px-6 py-2.5 md:px-10 md:py-3.5 hover:bg-white transition-all rounded-full shadow-lg">
            Contact
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
