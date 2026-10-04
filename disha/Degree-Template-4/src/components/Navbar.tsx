import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { collegeData } from '../data/siteData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Academics', id: 'academics' },
    { name: 'Alumni Stories', id: 'alumni' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      let current = 'home';
      
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--color-ivory)] shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex justify-between items-center h-[40px]">
        {/* Logo */}
        <div className="flex flex-col cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-[var(--color-primary)]' : 'text-white'}`}>
            {collegeData.shortName}
          </span>
          <span className={`text-xs uppercase tracking-widest transition-colors ${isScrolled ? 'text-[var(--color-text)]' : 'text-white/80'}`}>
            Northstar Institute
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-[14px] font-medium transition-colors relative pb-1 ${
                activeSection === item.id 
                  ? (isScrolled ? 'text-[var(--color-primary)]' : 'text-white') 
                  : (isScrolled ? 'text-[var(--color-text)] hover:text-[var(--color-primary)]' : 'text-white/80 hover:text-white')
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-secondary)]"></span>
              )}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden lg:flex items-center space-x-6">
          <button onClick={() => scrollToSection('admissions')} className={`text-[14px] font-medium transition-colors ${isScrolled ? 'text-[var(--color-text)] hover:text-[var(--color-primary)]' : 'text-white/80 hover:text-white'}`}>
            Enquire
          </button>
          <button onClick={() => scrollToSection('admissions')} className="bg-[var(--color-secondary)] text-[var(--color-white)] px-6 py-2.5 rounded text-[14px] font-medium hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button onClick={() => scrollToSection('admissions')} className="bg-[var(--color-secondary)] text-[var(--color-white)] px-4 py-2 rounded text-[14px] font-medium">
            Apply
          </button>
          <button className={`${isScrolled ? 'text-[var(--color-primary)]' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--color-ivory)] border-t border-[var(--color-sage)] shadow-lg py-4">
          <div className="flex flex-col px-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-lg font-medium ${activeSection === item.id ? 'text-[var(--color-secondary)]' : 'text-[var(--color-primary)]'}`}
              >
                {item.name}
              </button>
            ))}
            <hr className="border-[var(--color-sage)]" />
            <button onClick={() => scrollToSection('admissions')} className="text-left text-lg font-medium text-[var(--color-primary)]">
              Enquire
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
