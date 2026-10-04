import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Send,
  ShieldCheck
} from 'lucide-react';

export default function Footer({ onOpenEnquiry }) {
  return (
    <footer className="lincoln-footer">
      <div className="container">
        {/* Main 4-column footer matching Lincoln theme */}
        <div className="footer-columns-grid">
          {/* Column 1: College Brand & Description */}
          <div className="footer-col col-brand">
            <div className="footer-logo">
              <svg width="28" height="34" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1L1 6.5V20.5C1 31.5 17 41 17 41C17 41 33 31.5 33 20.5V6.5L17 1Z" fill="#5C6BC0" stroke="#FFFFFF" strokeWidth="1.5"/>
                <path d="M6 14L28 14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M9 21L25 21" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M12 28L22 28" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <div className="footer-brand-text">
                <span className="footer-brand-title">LINCOLN</span>
                <span className="footer-brand-sub">INTERMEDIATE COLLEGE</span>
              </div>
            </div>

            <p className="footer-about-text">
              Lincoln Intermediate College is a renowned center for 2-year higher secondary academic excellence, empowering young minds across MPC, BiPC, MEC, and CEC streams with premier competitive coaching.
            </p>

            <div className="accreditation-pill">
              <ShieldCheck size={16} />
              <span>Recognized by State Board of Intermediate Education</span>
            </div>

            {/* Social Icons with Clean SVGs */}
            <div className="footer-social-icons">
              <a href="#facebook" className="social-icon" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"/></svg>
              </a>
              <a href="#twitter" className="social-icon" aria-label="Twitter">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#instagram" className="social-icon" aria-label="Instagram">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
              </a>
              <a href="#youtube" className="social-icon" aria-label="YouTube">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Intermediate Programs */}
          <div className="footer-col">
            <h4 className="footer-heading">ACADEMIC STREAMS</h4>
            <ul className="footer-links">
              <li><a href="#courses"><ChevronRight size={13} /> MPC (IIT-JEE & Engineering)</a></li>
              <li><a href="#courses"><ChevronRight size={13} /> BiPC (NEET & Medical Sciences)</a></li>
              <li><a href="#courses"><ChevronRight size={13} /> MEC (CA-Foundation & Commerce)</a></li>
              <li><a href="#courses"><ChevronRight size={13} /> CEC (Civil Services & Law Track)</a></li>
              <li><a href="#courses"><ChevronRight size={13} /> Integrated Olympiad Coaching</a></li>
              <li><a href="#courses"><ChevronRight size={13} /> BITSAT & EAMCET FastTrack</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">EXPLORE COLLEGE</h4>
            <ul className="footer-links">
              <li><a href="#about"><ChevronRight size={13} /> About Our Story & Vision</a></li>
              <li><a href="#faculty"><ChevronRight size={13} /> Our Distinguished Teachers</a></li>
              <li><a href="#why-us"><ChevronRight size={13} /> Academic Excellence & Labs</a></li>
              <li><a href="#campus"><ChevronRight size={13} /> Campus Infrastructure</a></li>
              <li><a href="#contact"><ChevronRight size={13} /> Admissions Process 2026-27</a></li>
              <li><a href="#contact" onClick={onOpenEnquiry}><ChevronRight size={13} /> Download College Prospectus</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact Snippet */}
          <div className="footer-col">
            <h4 className="footer-heading">CAMPUS HELPDESK</h4>
            <div className="footer-contact-snippet">
              <div className="snippet-item">
                <MapPin size={15} />
                <span>Sector 4, University Enclave, Hyderabad / Amaravati</span>
              </div>
              <div className="snippet-item">
                <Phone size={15} />
                <span>+91 (40) 2345-6789</span>
              </div>
              <div className="snippet-item">
                <Mail size={15} />
                <span>admissions@lincolncollege.edu</span>
              </div>
            </div>

            <div className="footer-newsletter">
              <h5>Admission Updates Newsletter</h5>
              <div className="newsletter-box">
                <input type="email" placeholder="Your email address" />
                <button aria-label="Subscribe to newsletter"><Send size={14} /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="footer-bottom-bar">
          <p>© 2026 Lincoln Intermediate College. Open-source educational template — free to use and customize.</p>
          <div className="bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="dot-sep">•</span>
            <a href="#terms">Terms of Admission</a>
            <span className="dot-sep">•</span>
            <a href="#mandatory">Mandatory Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
