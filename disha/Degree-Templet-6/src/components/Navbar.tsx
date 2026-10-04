import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { collegeData } from '../data/collegeData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenApplyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenApplyModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', num: '01' },
    { id: 'about', label: 'About', num: '02' },
    { id: 'academics', label: 'Academics', num: '03' },
    { id: 'campus-careers', label: 'Placements and Career', num: '04' },
    { id: 'our-campus', label: 'Our Campus', num: '05' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Slim Floating Header Container */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 w-full transition-all duration-300">
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500 backdrop-blur-md border ${
            isScrolled
              ? 'bg-[#3B2038]/90 text-[#FFFDF8] border-[#C85C45]/30 shadow-2xl shadow-[#3B2038]/20'
              : 'bg-[#FFFDF8]/85 text-[#202020] border-[#3B2038]/15 shadow-lg shadow-black/5'
          }`}
        >
          {/* Left Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <span
              className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm font-bold tracking-wider transition-transform duration-300 group-hover:scale-105 ${
                isScrolled
                  ? 'bg-[#C85C45] text-white'
                  : 'bg-[#3B2038] text-[#F3E8D0]'
              }`}
            >
              {collegeData.badge}
            </span>
            <div className="hidden sm:block">
              <span className="block font-serif text-sm leading-none font-semibold tracking-tight">
                {collegeData.shortName}
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase font-sans font-semibold opacity-75 ${
                  isScrolled ? 'text-[#D8A39A]' : 'text-[#C85C45]'
                }`}
              >
                Visakhapatnam
              </span>
            </div>
          </button>

          {/* Center/Right Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium font-sans transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? isScrolled
                        ? 'text-white font-semibold'
                        : 'text-[#3B2038] font-bold'
                      : isScrolled
                      ? 'text-[#F3E8D0]/80 hover:text-white hover:bg-white/10'
                      : 'text-[#202020]/70 hover:text-[#202020] hover:bg-[#3B2038]/5'
                  }`}
                >
                  <span>{item.label}</span>

                  {/* Active Animated Indicator */}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full transition-all duration-300 ${
                        isScrolled ? 'bg-[#E9A23B]' : 'bg-[#C85C45]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenApplyModal}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider font-sans transition-all duration-300 flex items-center gap-1.5 shadow-md ${
                isScrolled
                  ? 'bg-[#C85C45] text-white hover:bg-[#E9A23B] hover:text-[#202020]'
                  : 'bg-[#3B2038] text-[#FFFDF8] hover:bg-[#C85C45] hover:text-white'
              }`}
            >
              <span>Apply</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors focus:outline-none ${
                isScrolled
                  ? 'text-white hover:bg-white/10'
                  : 'text-[#202020] hover:bg-black/5'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Editorial Fullscreen Overlay Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#3B2038] text-[#FFFDF8] flex flex-col justify-between p-6 sm:p-10 md:hidden animate-in fade-in duration-300 overflow-y-auto">
          {/* Header Spacer */}
          <div className="pt-16 pb-4 flex items-center justify-between border-b border-[#C85C45]/20">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#E9A23B]" />
              <span className="font-serif text-lg font-bold">{collegeData.shortName}</span>
            </div>
            <span className="text-xs font-mono text-[#D8A39A]">EDITORIAL Prospectus</span>
          </div>

          {/* Navigation Links */}
          <div className="my-auto py-8 space-y-4">
            <p className="text-xs font-mono uppercase text-[#E9A23B] tracking-widest mb-4">
              Select Direction
            </p>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left flex items-baseline justify-between py-3 border-b border-white/10 transition-all ${
                    isActive ? 'text-[#E9A23B] pl-2 border-[#E9A23B]' : 'text-[#FFFDF8]/80 hover:text-white'
                  }`}
                >
                  <span className="font-serif text-3xl sm:text-4xl font-normal">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Footer Info */}
          <div className="pt-6 border-t border-[#C85C45]/20 space-y-4">
            <div className="flex items-center justify-between text-xs text-[#D8A39A]">
              <span>Visakhapatnam, Andhra Pradesh</span>
              <span>{collegeData.tagline}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-3.5 bg-[#C85C45] hover:bg-[#E9A23B] hover:text-[#202020] text-white font-semibold rounded-xl text-center font-sans tracking-wide transition-colors flex items-center justify-center gap-2"
            >
              <span>Begin Your Application</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Sticky Mobile Apply Button Bar at Bottom Screen */}
      <div className="md:hidden fixed bottom-4 right-4 z-40">
        <button
          onClick={onOpenApplyModal}
          className="px-6 py-3 bg-[#C85C45] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-full shadow-2xl shadow-[#3B2038]/50 flex items-center gap-2 border border-[#E9A23B]/30 hover:bg-[#3B2038] transition-all duration-300"
        >
          <span>Apply Now</span>
          <ArrowUpRight className="w-4 h-4 text-[#E9A23B]" />
        </button>
      </div>
    </>
  );
};
