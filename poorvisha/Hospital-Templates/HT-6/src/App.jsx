import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder component for other routes
const PlaceholderPage = ({ title }) => (
  <div style={{ paddingTop: '160px', paddingBottom: '100px', minHeight: '60vh', textAlign: 'center' }}>
    <div className="container">
      <span className="subtitle">Elara Women's Institute</span>
      <h1 style={{ color: 'var(--color-plum)', marginBottom: '24px' }}>{title}</h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px' }}>
        This page is part of the Elara demonstration template.
      </p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/womens-care" element={<PlaceholderPage title="Women's Care" />} />
            <Route path="/gynecology" element={<PlaceholderPage title="Specialized Gynecology" />} />
            <Route path="/maternity" element={<PlaceholderPage title="Maternity Care" />} />
            <Route path="/diagnostics" element={<PlaceholderPage title="Advanced Diagnostics" />} />
            <Route path="/wellness" element={<PlaceholderPage title="Women's Wellness" />} />
            <Route path="/doctors" element={<PlaceholderPage title="Our Specialists" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
            <Route path="/appointments" element={<PlaceholderPage title="Book an Appointment" />} />
            <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
