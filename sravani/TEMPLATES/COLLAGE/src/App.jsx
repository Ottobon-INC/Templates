import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FacultySection from './components/FacultySection';
import CoursesSection from './components/CoursesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const handleOpenEnquiry = () => {
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <div className="lincoln-app-wrapper">
      {/* Top Header & Navigation */}
      <Header onOpenEnquiry={handleOpenEnquiry} />

      <main>
        {/* SECTION 1: Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* SECTION 2: About Our Story & Welcome Band with 3 Colored Stat Cards */}
        <AboutSection onOpenEnquiry={handleOpenEnquiry} />

        {/* SECTION 3: Our Teachers & Academic Excellence Pillars */}
        <FacultySection onOpenEnquiry={handleOpenEnquiry} />

        {/* SECTION 4: Intermediate Courses (MPC, BiPC, MEC, CEC) */}
        <CoursesSection onOpenEnquiry={handleOpenEnquiry} />

        {/* SECTION 5: Campus Admissions & Contact */}
        <ContactSection onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* Lincoln Theme Dark Indigo Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />
      
      {/* Interactive Admission Enquiry Modal */}
      <EnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={handleCloseEnquiry} 
      />
    </div>
  );
}
