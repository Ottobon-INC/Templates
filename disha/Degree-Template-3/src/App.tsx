import React, { useState, useEffect } from 'react';
import { collegeData, Programme } from './data/universityData';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Section Views
import { SectionHome } from './components/SectionHome';
import { SectionAbout } from './components/SectionAbout';
import { SectionAcademics } from './components/SectionAcademics';
import { SectionAdmissions } from './components/SectionAdmissions';
import { SectionCampusCareers } from './components/SectionCampusCareers';

// Modals
import { EnquireModal } from './components/EnquireModal';
import { ApplyNowModal } from './components/ApplyNowModal';
import { ProgrammeDetailModal } from './components/ProgrammeDetailModal';
import { BrochureModal } from './components/BrochureModal';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  
  // Scroll to top on initial load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Modal States
  const [isEnquireOpen, setIsEnquireOpen] = useState<boolean>(false);
  const [isApplyOpen, setIsApplyOpen] = useState<boolean>(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);
  const [selectedProgrammeForDetail, setSelectedProgrammeForDetail] = useState<Programme | null>(null);
  const [preselectedApplyProgId, setPreselectedApplyProgId] = useState<string | null>(null);

  const handleOpenApplyModal = (progId?: string) => {
    if (progId) {
      setPreselectedApplyProgId(progId);
    } else {
      setPreselectedApplyProgId(null);
    }
    setIsApplyOpen(true);
  };

  const handleOpenProgrammeModal = (programme: Programme) => {
    setSelectedProgrammeForDetail(programme);
  };

  return (
    <div className="min-h-screen bg-navy text-slate-100 flex flex-col selection:bg-electric selection:text-white">
      
      {/* Top Announcement Strip */}
      <AnnouncementBar
        college={collegeData}
        onApplyClick={() => handleOpenApplyModal()}
      />

      {/* Global Sticky Navigation Bar */}
      <Navbar
        college={collegeData}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onEnquireClick={() => setIsEnquireOpen(true)}
        onApplyClick={() => handleOpenApplyModal()}
      />

      {/* Main Content Area — 5 Primary Sections */}
      <main className="flex-grow">
        {activeSection === 'home' && (
          <SectionHome
            onNavigateSection={setActiveSection}
            onApplyClick={() => handleOpenApplyModal()}
            onOpenProgrammeModal={(progId) => handleOpenApplyModal(progId)}
          />
        )}

        {activeSection === 'about' && <SectionAbout />}

        {activeSection === 'academics' && (
          <SectionAcademics
            onOpenProgrammeModal={handleOpenProgrammeModal}
            onApplyClick={(progId) => handleOpenApplyModal(progId)}
          />
        )}

        {activeSection === 'admissions' && (
          <SectionAdmissions
            onApplyClick={(progId) => handleOpenApplyModal(progId)}
            onEnquireClick={() => setIsEnquireOpen(true)}
            onBrochureClick={() => setIsBrochureOpen(true)}
            onNavigateSection={setActiveSection}
          />
        )}

        {activeSection === 'campus-careers' && (
          <SectionCampusCareers
            onApplyClick={() => handleOpenApplyModal()}
            onNavigateSection={setActiveSection}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setActiveSection={setActiveSection}
        onEnquireClick={() => setIsEnquireOpen(true)}
        onApplyClick={() => handleOpenApplyModal()}
      />

      {/* Modals */}
      <EnquireModal
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
      />

      <ApplyNowModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        preselectedProgrammeId={preselectedApplyProgId}
      />

      <ProgrammeDetailModal
        programme={selectedProgrammeForDetail}
        onClose={() => setSelectedProgrammeForDetail(null)}
        onApplyClick={(progId) => handleOpenApplyModal(progId)}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

    </div>
  );
}

export default App;
