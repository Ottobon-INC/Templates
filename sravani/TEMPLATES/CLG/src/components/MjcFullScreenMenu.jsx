import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Map, 
  BookOpen, 
  Calendar, 
  Mail, 
  Users, 
  Bookmark, 
  Layers, 
  Sparkles, 
  ChevronDown, 
  ChevronRight, 
  Search,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export default function MjcFullScreenMenu({ isOpen, onClose, onOpenApply }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  if (!isOpen) return null;

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navCategories = [
    {
      title: "About GVJC & BIEAP",
      links: [
        { name: "About Green Valley Junior College", href: "#why-mjc" },
        { name: "Principal & Academic Administration", href: "#why-mjc" },
        { name: "BIEAP College Code & Affiliation Details", href: "#why-mjc" },
        { name: "Anti-Ragging & Campus Safety Policies", href: "#connect-us" },
        { name: "State Board Examination Center Info", href: "#announcement" },
      ]
    },
    {
      title: "Intermediate Academics & Streams",
      links: [
        { name: "Academic Calendar & IPE Schedule", href: "#content-start" },
        { name: "M.P.C. (Maths, Physics, Chemistry) + JEE/EAPCET", href: "#content-start" },
        { name: "Bi.P.C. (Biology, Physics, Chemistry) + NEET", href: "#content-start" },
        { name: "M.E.C. (Maths, Economics, Commerce) + CA Foundation", href: "#content-start" },
        { name: "C.E.C. (Civics, Economics, Commerce) + Civils Track", href: "#content-start" },
        { name: "Vocational Streams (Computer Science & Lab Tech)", href: "#content-start" },
      ]
    },
    {
      title: "Admissions & State Scholarships",
      links: [
        { name: "Applying for 1st Year Intermediate (2026-27)", href: "#get-started" },
        { name: "BIEAP Online Admission Portal Guidelines", href: "#get-started" },
        { name: "Jagananna Vidya Deevena (JVD) Scheme", href: "#get-started" },
        { name: "Jagananna Vasathi Deevena (Hostel Welfare)", href: "#get-started" },
        { name: "Merit Fee Concessions for 10th/SSC 10/10 GPA", href: "#get-started" },
        { name: "Schedule an In-Person Campus Visit", href: "#connect-us" },
      ]
    },
    {
      title: "Campus Life & Coaching Resources",
      links: [
        { name: "Integrated JEE, NEET & EAPCET Coaching Labs", href: "#announcement" },
        { name: "Central Library & Digital Study Cubicles", href: "#announcement" },
        { name: "Sports Arena, Cricket Grounds & Physical Education", href: "#announcement" },
        { name: "Separate AC & Non-AC Hostels for Boys & Girls", href: "#announcement" },
        { name: "Student Guidance & Counseling Cell", href: "#connect-us" },
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-40 bg-mjc-dark text-white overflow-y-auto animate-fadeIn pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Close bar indicator */}
        <div className="flex justify-between items-center pb-6 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-mjc-yellow font-bold uppercase tracking-wider text-xs sm:text-sm">
            <GraduationCap className="w-5 h-5" />
            <span>Green Valley Junior College AP • Full Navigation Directory</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold tracking-widest text-slate-400 hover:text-white px-3 py-1.5 border border-slate-700 hover:border-white transition-colors"
          >
            Close Menu &times;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Student & Faculty Blocks */}
          <div className="order-1 md:col-span-3 space-y-6">
            
            {/* Student Block */}
            <div className="group bg-slate-900 border border-slate-800 rounded-none overflow-hidden hover:border-mjc-yellow transition-all">
              <div className="h-36 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                  alt="Current Intermediate Students"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-mjc-blue/60 mix-blend-multiply"></div>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">
                  Current Students
                </h4>
                <p className="text-xs text-slate-300 mt-1 mb-4 leading-relaxed">
                  Everything you need in one place: Hall tickets, IPE model papers, attendance records, and exam timetables.
                </p>
                <a
                  href="#content-start"
                  onClick={onClose}
                  className="btn-simple-arrow text-xs tracking-wider"
                >
                  <span>LET'S GO</span> &rarr;
                </a>
              </div>
            </div>

            {/* Faculty & Staff Block */}
            <div className="group bg-slate-900 border border-slate-800 rounded-none overflow-hidden hover:border-mjc-yellow transition-all">
              <div className="h-36 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"
                  alt="Intermediate Faculty & Lecturers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-mjc-blue/60 mix-blend-multiply"></div>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="text-lg font-bold text-white uppercase tracking-tight">
                  Faculty &amp; Staff
                </h4>
                <p className="text-xs text-slate-300 mt-1 mb-4 leading-relaxed">
                  Links and curriculum planning specifically for Senior Lecturers and Junior College Staff.
                </p>
                <a
                  href="#connect-us"
                  onClick={onClose}
                  className="btn-simple-arrow text-xs tracking-wider"
                >
                  <span>LET'S GO</span> &rarr;
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Collapsible Navigation Dropdowns */}
          <div className="order-2 md:col-span-6 space-y-4">
            
            {/* Search Box inside menu */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search AP Intermediate syllabus, streams, notifications..."
                  className="w-full bg-slate-900 border border-slate-700 text-white text-sm px-4 py-3 pr-10 focus:outline-none focus:border-mjc-yellow"
                />
                <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
              </div>
            </div>

            {/* Category Dropdowns */}
            <div className="space-y-3">
              {navCategories.map((category, idx) => {
                const isOpenCategory = openDropdown === category.title;
                return (
                  <div key={idx} className="border-b border-slate-800 pb-3">
                    <button
                      onClick={() => toggleDropdown(category.title)}
                      className="w-full flex items-center justify-between text-left py-2 text-base sm:text-lg font-bold text-white hover:text-mjc-yellow transition-colors group"
                    >
                      <span className="uppercase tracking-tight">{category.title}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-mjc-yellow transition-transform duration-200 ${
                          isOpenCategory ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpenCategory && (
                      <ul className="pt-2 pl-3 space-y-2.5 animate-fadeIn">
                        {category.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <a
                              href={link.href}
                              onClick={onClose}
                              className="text-xs sm:text-sm text-slate-300 hover:text-white hover:underline flex items-center gap-1.5"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-mjc-yellow" />
                              <span>{link.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Column 3: Quick Icon Navigation Links & Apply Button */}
          <div className="order-3 md:col-span-3 space-y-6">
            
            <div className="bg-slate-900/80 p-5 border border-slate-800">
              <h5 className="text-xs uppercase tracking-widest font-bold text-mjc-yellow mb-4">
                Quick Campus Links
              </h5>
              
              <ul className="space-y-3 text-xs font-semibold text-slate-200">
                <li>
                  <a href="#content-start" onClick={onClose} className="flex items-center gap-2.5 hover:text-mjc-yellow transition-colors">
                    <ShoppingBag className="w-4 h-4 text-mjc-yellow" />
                    <span>College Bookstore &amp; Guides</span>
                  </a>
                </li>
                <li>
                  <a href="#connect-us" onClick={onClose} className="flex items-center gap-2.5 hover:text-mjc-yellow transition-colors">
                    <Map className="w-4 h-4 text-mjc-yellow" />
                    <span>Interactive Campus Map</span>
                  </a>
                </li>
                <li>
                  <a href="#content-start" onClick={onClose} className="flex items-center gap-2.5 hover:text-mjc-yellow transition-colors">
                    <BookOpen className="w-4 h-4 text-mjc-yellow" />
                    <span>BIEAP Digital Syllabus (Canvas)</span>
                  </a>
                </li>
                <li>
                  <a href="#content-start" onClick={onClose} className="flex items-center gap-2.5 hover:text-mjc-yellow transition-colors">
                    <Calendar className="w-4 h-4 text-mjc-yellow" />
                    <span>Academic &amp; IPE Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="#connect-us" onClick={onClose} className="flex items-center gap-2.5 hover:text-mjc-yellow transition-colors">
                    <Mail className="w-4 h-4 text-mjc-yellow" />
                    <span>College Administration Email</span>
                  </a>
                </li>
                <li>
                  <a href="#why-mjc" onClick={onClose} className="flex items-center gap-2.5 hover:text-mjc-yellow transition-colors">
                    <Users className="w-4 h-4 text-mjc-yellow" />
                    <span>Senior Faculty Directory</span>
                  </a>
                </li>
                <li>
                  <a href="#announcement" onClick={onClose} className="flex items-center gap-2.5 hover:text-mjc-yellow transition-colors">
                    <Bookmark className="w-4 h-4 text-mjc-yellow" />
                    <span>Central Library &amp; Reading Room</span>
                  </a>
                </li>
                <li>
                  <a href="#get-started" onClick={onClose} className="flex items-center gap-2.5 hover:text-mjc-yellow transition-colors">
                    <Layers className="w-4 h-4 text-mjc-yellow" />
                    <span>MyGVJC Student Portal</span>
                  </a>
                </li>
                <li>
                  <a href="#connect-us" onClick={onClose} className="flex items-center gap-2.5 hover:text-mjc-yellow transition-colors">
                    <Sparkles className="w-4 h-4 text-mjc-yellow" />
                    <span>Starfish Academic Mentorship</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Large Yellow Apply Button */}
            <div>
              <button
                onClick={() => {
                  onClose();
                  onOpenApply();
                }}
                className="btn btn-yellow w-full py-3.5 text-sm font-bold text-center tracking-wider"
              >
                APPLY FOR ADMISSION
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
