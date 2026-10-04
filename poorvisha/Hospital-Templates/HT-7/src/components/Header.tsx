import { Menu, Stethoscope, Search, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Doctors', path: '/doctors' },
    { name: 'Departments', path: '/departments' },
    { name: 'Services', path: '/services' },
    { name: 'Patient Info', path: '/patient-info' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-hospital-surface/90 backdrop-blur-md shadow-soft py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-hospital-accent flex items-center justify-center">
            <Stethoscope className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold font-heading ${isScrolled ? 'text-hospital-text' : 'text-hospital-text'}`}>
            AuraCare
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="text-sm font-medium text-hospital-text hover:text-hospital-accent transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          <button className="text-hospital-text hover:text-hospital-accent transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/portal" className="flex items-center space-x-2 text-sm font-medium text-hospital-text hover:text-hospital-accent transition-colors">
            <User className="w-5 h-5" />
            <span>Portal Login</span>
          </Link>
          <Link to="/appointment" className="btn-primary">
            Book Appointment
          </Link>
        </div>

        <button className="lg:hidden text-hospital-text">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
