import React, { useState } from 'react';
import MjcHeader from './components/MjcHeader';
import MjcFullScreenMenu from './components/MjcFullScreenMenu';
import MjcHeroBanner from './components/MjcHeroBanner';
import MjcExploreSection from './components/MjcExploreSection';
import MjcHowToGetStarted from './components/MjcHowToGetStarted';
import MjcWhySection from './components/MjcWhySection';
import MjcAnnouncementRow from './components/MjcAnnouncementRow';
import MjcWhatsHappening from './components/MjcWhatsHappening';
import MjcConnectWithUs from './components/MjcConnectWithUs';
import MjcFooter from './components/MjcFooter';
import ApplyModal from './components/ApplyModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-mjc-yellow selection:text-mjc-blue">
      {/* Accessibility Skip link */}
      <a
        href="#content-start"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-mjc-yellow focus:text-mjc-blue focus:font-bold"
        tabIndex="0"
        title="Skip to Page Content"
      >
        Skip to page content
      </a>

      {/* Header matching MJC source code structure */}
      <MjcHeader
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onOpenApply={() => setIsApplyOpen(true)}
      />

      {/* Full Screen Mega Menu */}
      <MjcFullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenApply={() => setIsApplyOpen(true)}
      />

      {/* Main Banner Section */}
      <MjcHeroBanner onOpenApply={() => setIsApplyOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* Explore Degrees & Pathways Section */}
        <MjcExploreSection onOpenApply={() => setIsApplyOpen(true)} />

        {/* How to Get Started (3-Column Highlight with Wave Background) */}
        <MjcHowToGetStarted onOpenApply={() => setIsApplyOpen(true)} />

        {/* Why College Section with 3 Proof-Points */}
        <MjcWhySection />

        {/* Priority Registration / 2-Column Image Announcement */}
        <MjcAnnouncementRow onOpenApply={() => setIsApplyOpen(true)} />

        {/* What's Happening Section (Overlay with 4 Feeds) */}
        <MjcWhatsHappening />

        {/* Connect With Us (4 Contact Columns) */}
        <MjcConnectWithUs onOpenApply={() => setIsApplyOpen(true)} />
      </main>

      {/* Footer matching MJC f-top and f-bottom structure */}
      <MjcFooter />

      {/* Interactive Modal for Admissions */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
    </div>
  );
}

export default App;
