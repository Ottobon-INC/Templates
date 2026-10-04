import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function MjcHeader({ isMenuOpen, setIsMenuOpen, onOpenApply }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"`);
    }
  };

  return (
    <header className="header bg-[#172b54] sticky top-0 z-50 shadow-md">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Left: Modesto / Green Valley Junior College Logo */}
          <div className="h-left flex items-center">
            <a href="#content-start" className="flex items-center gap-3 group text-decoration-none">
              {/* Collegiate Emblem / Initials */}
              <div className="flex items-center">
                <span className="text-3xl sm:text-4xl font-black text-white italic tracking-tighter font-condensed">
                  MJC
                </span>
                <div className="ml-2.5 pl-2.5 border-l-2 border-white/30 flex flex-col justify-center">
                  <span className="text-sm sm:text-base font-black text-white uppercase tracking-tight leading-none italic font-condensed">
                    MODESTO
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest leading-none mt-0.5 font-condensed">
                    JUNIOR COLLEGE
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Right Section: Apply Button, Search Icon, Yellow Burger Menu */}
          <div className="h-right flex items-center space-x-3 sm:space-x-4">
            
            {/* Outline Apply Button (Navy with crisp white border) */}
            <button
              onClick={onOpenApply}
              className="px-6 sm:px-7 py-2 text-sm sm:text-base font-bold text-white bg-transparent border-2 border-white hover:bg-white hover:text-[#172b54] rounded-md transition-all duration-200"
              id="button-apply"
              aria-label="apply button"
            >
              Apply
            </button>

            {/* Circular Search Button (White circle with black search icon) */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none shadow-sm"
                aria-label="search-icon"
                title="Search"
              >
                {searchOpen ? <X className="w-5 h-5 text-slate-900" /> : <Search className="w-5 h-5 text-slate-900 stroke-[2.5]" />}
              </button>

              {/* Dropdown Search Bar */}
              {searchOpen && (
                <div className="absolute right-0 top-12 w-72 sm:w-80 bg-white p-2.5 shadow-2xl rounded-md border border-slate-300 z-50">
                  <form onSubmit={handleSearchSubmit} className="flex">
                    <input
                      type="text"
                      placeholder="Search courses, streams, catalog..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 px-3 py-2 text-sm text-slate-900 border border-slate-300 focus:outline-none focus:border-[#172b54]"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="bg-[#172b54] text-white px-4 py-2 text-xs font-bold uppercase hover:bg-slate-900 transition-colors"
                    >
                      Search
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Yellow Square Burger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-11 h-11 bg-[#f6a800] hover:bg-[#e59b00] rounded-md flex flex-col items-center justify-center gap-1.5 p-2.5 transition-colors focus:outline-none shadow-sm"
              id="burger-menu-toggle"
              aria-controls="main-menu"
              aria-expanded={isMenuOpen}
              title="Show Main Navigation Menu"
            >
              <span className={`block w-6 h-[3px] bg-slate-900 rounded-sm transition-transform duration-200 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-[3px] bg-slate-900 rounded-sm transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-[3px] bg-slate-900 rounded-sm transition-transform duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
