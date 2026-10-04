import React from 'react';
import './Navigation.css';

interface NavigationProps {
  activeSection: number;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 1, label: 'Home', href: '#home' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Academics', href: '#academics' },
    { id: 4, label: 'Admissions', href: '#admissions' },
    { id: 5, label: 'Campus & Careers', href: '#campus' },
  ];

  return (
    <div className="nav-wrapper">
      <nav className="nav-pill">
        <div className="nav-brand">ORBITA</div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href} className={activeSection === item.id ? 'active' : ''}>
                {item.label}
                {activeSection === item.id && <span className="active-dot"></span>}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <button className="btn-primary" style={{ padding: '8px 24px', fontSize: '14px' }}>Apply</button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
