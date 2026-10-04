import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DisciplinesSection } from './components/DisciplinesSection';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { CampusCareersSection } from './components/CampusCareersSection';
import { CampusStorySection } from './components/CampusStorySection';
import { CampusStoryLandingPage } from './components/CampusStoryLandingPage';
import { Footer } from './components/Footer';
import { InteractiveModals } from './components/InteractiveModals';
import type { Programme, CampusStoryItem } from './data/collegeData';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [applyModalOpen, setApplyModalOpen] = useState<boolean>(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState<boolean>(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);
  const [selectedCampusStory, setSelectedCampusStory] = useState<CampusStoryItem | null>(null);

  // Scroll observer to keep navbar active section in sync
  useEffect(() => {
    const sectionIds = ['home', 'about', 'academics', 'admissions', 'campus-careers', 'our-campus'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (selectedCampusStory) {
    return (
      <CampusStoryLandingPage
        story={selectedCampusStory}
        onBack={() => {
          setSelectedCampusStory(null);
          setTimeout(() => scrollToSection('our-campus'), 0);
        }}
        onExploreAdmissions={() => {
          setSelectedCampusStory(null);
          setApplyModalOpen(true);
        }}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-[#FFFDF8] text-[#202020] font-sans antialiased overflow-x-hidden">
      {/* Slim Floating Editorial Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenApplyModal={() => setApplyModalOpen(true)}
      />

      {/* Main Content Layout — 5 Primary Sections */}
      <main className="space-y-0">
        {/* SECTION 01 — HOME */}
        <div id="home">
          <HeroSection
            onExploreClick={() => scrollToSection('academics')}
            onApplyClick={() => setApplyModalOpen(true)}
          />

          <DisciplinesSection
            onSelectDiscipline={() => scrollToSection('academics')}
          />
        </div>

        {/* SECTION 02 — ABOUT */}
        <div id="about">
          <AboutSection />
        </div>

        {/* SECTION 03 — ACADEMICS */}
        <div id="academics">
          <AcademicsSection
            onSelectProgramme={(prog) => setSelectedProgramme(prog)}
          />
        </div>

        {/* SECTION 04 — ADMISSIONS */}
        <div id="admissions">
          <AdmissionsSection
            onOpenApplyModal={() => setApplyModalOpen(true)}
            onOpenBrochureModal={() => setBrochureModalOpen(true)}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
            onExploreProgrammes={() => scrollToSection('academics')}
          />
        </div>

        {/* SECTION 05 — CAMPUS & CAREERS */}
        <div id="campus-careers">
          <CampusCareersSection
            onOpenApplyModal={() => setApplyModalOpen(true)}
            onExploreProgrammes={() => scrollToSection('academics')}
          />
        </div>

        {/* SECTION 06 — OUR CAMPUS */}
        <div id="our-campus">
          <CampusStorySection onSelectStory={setSelectedCampusStory} />
        </div>

        {/* FOOTER */}
        <Footer
          onExploreProgrammes={() => scrollToSection('academics')}
          onOpenApplyModal={() => setApplyModalOpen(true)}
        />
      </main>

      {/* Modals & Interactive Overlays */}
      <InteractiveModals
        applyModalOpen={applyModalOpen}
        onCloseApplyModal={() => setApplyModalOpen(false)}
        brochureModalOpen={brochureModalOpen}
        onCloseBrochureModal={() => setBrochureModalOpen(false)}
        consultationModalOpen={consultationModalOpen}
        onCloseConsultationModal={() => setConsultationModalOpen(false)}
        selectedProgramme={selectedProgramme}
        onCloseProgrammeModal={() => setSelectedProgramme(null)}
      />
    </div>
  );
}

export default App;
