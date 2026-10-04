import React from 'react';
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react';

export default function MjcFooter() {
  return (
    <footer className="footer text-white">
      {/* Footer Top: Primary Blue Background */}
      <div className="f-top bg-primary py-16 border-t-4 border-mjc-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="f-content grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Column 1: Logo & Address */}
            <div className="md:col-span-3">
              <div className="f-block f-logo-address space-y-4">
                <div className="f-logo">
                  <a href="#content-start" className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-white/10 border-2 border-white/20 flex items-center justify-center text-mjc-yellow">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-black text-lg uppercase tracking-tight block leading-none">
                        Green Valley
                      </span>
                      <span className="text-xs font-bold text-mjc-yellow uppercase tracking-wider">
                        Junior College • AP
                      </span>
                    </div>
                  </a>
                </div>

                <div className="f-address text-xs text-slate-300 space-y-2 pt-2">
                  <p>
                    <span className="block font-semibold text-white">
                      General Inquiries: <a href="tel:08662486550" className="text-mjc-yellow hover:underline">0866-248-6550</a>
                    </span>
                    <span className="block font-semibold text-white">
                      Campus Safety &amp; Anti-Ragging: <a href="tel:08662486351" className="text-mjc-yellow hover:underline">0866-248-6351</a>
                    </span>
                    <span className="block">
                      <a href="mailto:outreach@gvjc.edu.in" className="text-slate-300 hover:text-white">outreach@gvjc.edu.in</a>
                    </span>
                  </p>

                  <p className="pt-2 text-slate-400">
                    BIEAP College Code: 07142<br />
                    M.G. Road, Benz Circle, Vijayawada<br />
                    Andhra Pradesh — 520010, India
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links & Policy Statement */}
            <div className="md:col-span-6 space-y-6">
              <div className="f-block f-navigation">
                <div className="grid grid-cols-3 gap-4 text-xs font-medium">
                  
                  {/* Sub-col 1 */}
                  <div className="f-inner-block">
                    <ul className="space-y-2 text-slate-300">
                      <li>
                        <a href="#why-mjc" className="hover:text-mjc-yellow transition-colors">
                          BIEAP Recognition
                        </a>
                      </li>
                      <li>
                        <a href="#why-mjc" className="hover:text-mjc-yellow transition-colors">
                          Anti-Ragging Policies
                        </a>
                      </li>
                      <li>
                        <a href="#connect-us" className="hover:text-mjc-yellow transition-colors">
                          Website Feedback
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Sub-col 2 */}
                  <div className="f-inner-block">
                    <ul className="space-y-2 text-slate-300">
                      <li>
                        <a href="#connect-us" className="hover:text-mjc-yellow transition-colors">
                          Campus Safety Cell
                        </a>
                      </li>
                      <li>
                        <a href="#connect-us" className="hover:text-mjc-yellow transition-colors">
                          File a Grievance
                        </a>
                      </li>
                      <li>
                        <a href="#announcement" className="hover:text-mjc-yellow transition-colors">
                          AP RTC Bus Passes
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Sub-col 3 */}
                  <div className="f-inner-block">
                    <ul className="space-y-2 text-slate-300">
                      <li>
                        <a href="#connect-us" className="hover:text-mjc-yellow transition-colors">
                          Faculty Recruitment
                        </a>
                      </li>
                      <li>
                        <a href="#connect-us" className="hover:text-mjc-yellow transition-colors">
                          Parent-Teacher Forum
                        </a>
                      </li>
                      <li>
                        <a href="#get-started" className="hover:text-mjc-yellow transition-colors">
                          JVD Welfare Desk
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Exact Policy Statement from MJC adapted for AP */}
              <div className="f-block f-navigation pt-4 border-t border-white/10">
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  It is the policy of Green Valley Junior College, recognized by the Board of Intermediate Education, Andhra Pradesh (BIEAP), not to discriminate on the basis of caste, race, color, gender, religion, or disability in its educational admissions, merit scholarships, coaching programs, and institutional practices.
                </p>
              </div>
            </div>

            {/* Column 3: Secondary Emblem & Social Media Icons */}
            <div className="md:col-span-3">
              <div className="f-block f-logo-social-icons space-y-5 md:text-right">
                
                <div className="inline-block p-3 bg-white/10 border border-white/20 text-left">
                  <span className="text-[11px] font-bold text-mjc-yellow uppercase tracking-widest block">
                    Govt. of AP Affiliated
                  </span>
                  <span className="text-xs font-bold text-white block mt-0.5">
                    Board of Intermediate Education, AP
                  </span>
                  <span className="text-[10px] text-slate-300 block">
                    IPE Exam Center &amp; Evaluation Hub
                  </span>
                </div>

                <div className="social-icons pt-2">
                  <span className="text-xs text-slate-400 block mb-2 font-bold uppercase tracking-wider">
                    Follow Our Channels
                  </span>
                  <div className="flex items-center space-x-2 md:justify-end">
                    {[
                      { label: 'f', name: 'Facebook' },
                      { label: '𝕏', name: 'X / Twitter' },
                      { label: 'ig', name: 'Instagram' },
                      { label: 'in', name: 'LinkedIn' },
                      { label: 'yt', name: 'YouTube' },
                    ].map((icon, idx) => (
                      <a
                        key={idx}
                        href="#content-start"
                        className="w-8 h-8 bg-white/10 hover:bg-mjc-yellow hover:text-mjc-blue text-white text-xs font-bold flex items-center justify-center transition-all border border-white/10"
                        title={icon.name}
                      >
                        {icon.label}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom: Dark Background */}
      <div className="f-bottom bg-dark py-6 text-xs text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="f-privacy-policy flex items-center space-x-6">
            <a href="#why-mjc" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#why-mjc" className="hover:text-white transition-colors">Accessibility Standards</a>
            <span>•</span>
            <a href="#why-mjc" className="hover:text-white transition-colors">BIEAP Guidelines</a>
          </div>

          <div className="f-copyright text-center sm:text-right">
            <span>&copy; 2026 Green Valley Junior College, Andhra Pradesh. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
