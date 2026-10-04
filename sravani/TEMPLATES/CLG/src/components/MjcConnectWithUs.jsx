import React from 'react';
import { Phone, Mail, Globe, ArrowRight } from 'lucide-react';

export default function MjcConnectWithUs({ onOpenApply }) {
  const departments = [
    {
      title: 'Counseling & Mentorship',
      subtitle: 'Academic Stream Advising (MPC/BiPC/MEC)',
      phone: '0866-248-6080',
      phoneLink: 'tel:08662486080',
      email: 'counseling@gvjc.edu.in',
      linkText: 'Counseling Portal',
    },
    {
      title: 'Enrollment Services',
      subtitle: 'Apply & Sign Up for Intermediate Batches',
      phone: '0866-248-6853',
      phoneLink: 'tel:08662486853',
      email: 'admissions@gvjc.edu.in',
      linkText: 'Enrollment Services Portal',
    },
    {
      title: 'Student Financial Services',
      subtitle: 'Jagananna Vidya Deevena & Scholarships',
      phone: '0866-248-7700',
      phoneLink: 'tel:08662487700',
      email: 'welfare@gvjc.edu.in',
      linkText: 'State Welfare & Aid Info',
    },
    {
      title: 'Outreach & Campus Tours',
      subtitle: 'Parent Orientations & District Tours',
      phone: '0866-248-7713',
      phoneLink: 'tel:08662487713',
      email: 'outreach@gvjc.edu.in',
      linkText: 'Campus Visit Request',
    },
  ];

  return (
    <div id="connect-us" style={{ backgroundColor: '#f0f0f0' }} className="py-16 sm:py-20 border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-black text-center text-mjc-blue uppercase tracking-tight mb-12">
          Connect With Us
        </h2>

        {/* 4 Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="personal-info bg-white p-6 border-l-4 border-mjc-blue shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="section-title text-primary font-black text-lg uppercase tracking-tight mb-1">
                {dept.title}
              </div>
              
              <span className="title block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {dept.subtitle}
              </span>

              <div className="space-y-2 text-sm text-slate-700">
                <div>
                  <a
                    href={dept.phoneLink}
                    className="font-bold text-mjc-blue hover:text-mjc-yellow transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{dept.phone}</span>
                  </a>
                </div>

                <div className="text-xs break-all">
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-slate-600 hover:text-mjc-blue hover:underline flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{dept.email}</span>
                  </a>
                </div>

                <div className="pt-2 mt-2 border-t border-slate-100">
                  <button
                    onClick={onOpenApply}
                    className="text-xs font-bold text-mjc-blue hover:text-mjc-yellow uppercase tracking-wider flex items-center gap-1"
                  >
                    <span>{dept.linkText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
