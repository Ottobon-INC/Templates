import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Sparkles
} from 'lucide-react';

export default function Header({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exactly 5 section navigation links matching the 5 sections
  const navLinks = [
    { name: 'HOME', href: '#section-1' },
    { name: 'ABOUT US', href: '#section-2' },
    { name: 'TEACHERS & WHY US', href: '#section-3' },
    { 
      name: 'COURSES', 
      href: '#section-4',
      hasDropdown: true,
      subItems: [
        { label: 'MPC (Maths, Physics, Chem)', desc: 'IIT-JEE & Engineering Track', href: '#section-4' },
        { label: 'BiPC (Biology, Physics, Chem)', desc: 'NEET & Medical Track', href: '#section-4' },
        { label: 'MEC (Maths, Eco, Commerce)', desc: 'CA-Foundation & Finance Track', href: '#section-4' },
        { label: 'CEC (Civics, Eco, Commerce)', desc: 'Civil Services & Law Track', href: '#section-4' },
      ]
    },
    { name: 'ADMISSIONS & CONTACT', href: '#section-5' },
  ];

  return (
    <>
      {/* Top micro bar for announcements */}
      <div className="top-announcement-bar">
        <div className="container announcement-content">
          <div className="announcement-left">
            <span>🎓 Admissions Open for Academic Year 2026-27 (Class XI & XII)</span>
            <span className="dot-sep">•</span>
            <span>Telangana & Andhra Pradesh State Board Affiliated</span>
          </div>
          <div className="announcement-right">
            <a href="tel:+914023456789" className="top-link"><Phone size={13} /> +91 (40) 2345-6789</a>
            <span className="dot-sep">•</span>
            <a href="mailto:admissions@lincolncollege.edu" className="top-link"><Mail size={13} /> admissions@lincolncollege.edu</a>
          </div>
        </div>
      </div>

      {/* Main Lincoln Header */}
      <header className={`lincoln-header ${isScrolled ? 'sticky-scrolled' : ''}`}>
        <div className="container header-container">
          {/* College Logo - Exact Lincoln Style */}
          <a href="#section-1" className="lincoln-logo-link">
            <div className="logo-shield">
              <svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1L1 6.5V20.5C1 31.5 17 41 17 41C17 41 33 31.5 33 20.5V6.5L17 1Z" fill="#3F51B5" stroke="#283593" strokeWidth="1.5"/>
                <path d="M6 14L28 14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M9 21L25 21" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M12 28L22 28" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="logo-text-block">
              <span className="logo-title">LINCOLN</span>
              <span className="logo-sub">INTERMEDIATE COLLEGE</span>
            </div>
          </a>

          {/* Desktop Navigation - 5 Core Sections */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <div key={link.name} className="nav-item-wrapper">
                <a href={link.href} className="nav-link">
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={13} className="nav-chevron" />}
                </a>

                {link.hasDropdown && (
                  <div className="dropdown-menu">
                    {link.subItems.map((sub, idx) => (
                      <a key={idx} href={sub.href} className="dropdown-item">
                        <div className="dropdown-item-title">{sub.label}</div>
                        <div className="dropdown-item-desc">{sub.desc}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="header-actions">
            {/* Admission Enquiry Button */}
            <button 
              className="btn btn-primary enquiry-header-btn"
              onClick={onOpenEnquiry}
              title="Apply for Intermediate Admission"
            >
              <Sparkles size={14} />
              <span>Admission Enquiry</span>
            </button>

            {/* Application Bag / Cart Counter icon from Lincoln reference */}
            <div className="header-icon-btn cart-badge-wrap" title="Applications / Downloads">
              <ShoppingBag size={18} />
              <span className="badge-count">0</span>
            </div>

            {/* Search Button */}
            <button 
              className="header-icon-btn" 
              onClick={() => setSearchOpen(!searchOpen)}
              title="Search college courses & syllabus"
            >
              <Search size={18} />
            </button>

            {/* Lincoln Theme Floating Round Menu FAB Button */}
            <button 
              className="lincoln-fab-menu-btn"
              onClick={() => setDrawerOpen(true)}
              title="Open Lincoln Quick Menu"
              aria-label="Quick Navigation"
            >
              <Menu size={20} />
            </button>

            {/* Mobile Hamburger toggle */}
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Inline Search Bar Popup */}
        {searchOpen && (
          <div className="header-search-bar animate-fade-in">
            <div className="container search-inner">
              <Search size={18} className="search-icon-inside" />
              <input 
                type="text" 
                placeholder="Search MPC, BiPC, MEC, CEC, IIT-JEE, NEET coaching..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button className="search-close-btn" onClick={() => setSearchOpen(false)}>
                <X size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-nav-panel animate-fade-in">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-cta-box">
              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
              >
                Admission Enquiry 2026-27
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Signature Lincoln Quick Side Drawer */}
      {drawerOpen && (
        <div className="drawer-overlay" onClick={() => setDrawerOpen(false)}>
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="drawer-logo">
                <GraduationCap size={28} color="#3F51B5" />
                <span className="drawer-title">Lincoln Intermediate College</span>
              </div>
              <button className="drawer-close" onClick={() => setDrawerOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="drawer-body">
              <div className="drawer-section">
                <h4>5-Section Quick Navigation</h4>
                <ul className="drawer-stream-list">
                  <li><a href="#section-1" onClick={() => setDrawerOpen(false)}>1. Hero Banner</a></li>
                  <li><a href="#section-2" onClick={() => setDrawerOpen(false)}>2. About College & Stats</a></li>
                  <li><a href="#section-3" onClick={() => setDrawerOpen(false)}>3. Our Teachers & Why Us</a></li>
                  <li><a href="#section-4" onClick={() => setDrawerOpen(false)}>4. Intermediate Streams (MPC, BiPC, MEC, CEC)</a></li>
                  <li><a href="#section-5" onClick={() => setDrawerOpen(false)}>5. Admissions, Campus & Contact</a></li>
                </ul>
              </div>

              <div className="drawer-section">
                <h4>Campus Information</h4>
                <div className="drawer-contact-item">
                  <MapPin size={16} />
                  <span>Lincoln Campus, Sector 4, Knowledge Enclave, Hyderabad / Amaravati</span>
                </div>
                <div className="drawer-contact-item">
                  <Phone size={16} />
                  <span>+91 (40) 2345-6789 / 6790</span>
                </div>
                <div className="drawer-contact-item">
                  <Calendar size={16} />
                  <span>Campus Tours: Mon - Sat (9:00 AM - 5:30 PM)</span>
                </div>
              </div>

              <button 
                className="btn btn-primary drawer-enquiry-btn"
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenEnquiry();
                }}
              >
                Book Admission Counseling
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
