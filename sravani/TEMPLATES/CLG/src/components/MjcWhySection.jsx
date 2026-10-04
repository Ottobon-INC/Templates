import React from 'react';

export default function MjcWhySection() {
  return (
    <div id="why-mjc" className="why-mjc-section py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="why-mjc-content">
          
          {/* Main Detail Header */}
          <div className="why-mjc-main-detail text-center max-w-4xl mx-auto mb-16">
            <h2 className="title text-3xl sm:text-4xl lg:text-5xl font-black text-mjc-blue uppercase tracking-tight mb-6">
              Why Green Valley Junior College?
            </h2>
            <div className="detail large-text text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                Established in Andhra Pradesh, Green Valley Junior College has been serving Vijayawada, Guntur, and surrounding districts for decades. Recognized by the <strong>Board of Intermediate Education, Andhra Pradesh (BIEAP)</strong>, it is the mission of the college to empower intermediate students to discover opportunities and reach their highest goals through accessible, disciplined, and world-class academic education. As a trusted cornerstone in our state, GVJC creates and promotes equity in education for every member of our diverse population. We are the community's college.
              </p>
            </div>
          </div>

          {/* Proof Point Section (3 Proof-Point Blocks) */}
          <div className="proof-point-section max-w-5xl mx-auto">
            <div className="proof-point-list grid sm:grid-cols-3 gap-8">
              
              {/* Point 1 */}
              <div className="proof-point-blocks bg-slate-50 p-8 border-t-4 border-mjc-yellow shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="point-value">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-mjc-blue">
                    100%
                  </p>
                </div>
                <div className="title text-uppercase font-bold text-xs sm:text-sm text-slate-700 uppercase tracking-wider mt-3">
                  Pass Percentage in BIEAP Board Examinations
                </div>
              </div>

              {/* Point 2 */}
              <div className="proof-point-blocks bg-slate-50 p-8 border-t-4 border-mjc-blue shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="point-value">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-mjc-yellow">
                    ₹15 Cr
                  </p>
                </div>
                <div className="title text-uppercase font-bold text-xs sm:text-sm text-slate-700 uppercase tracking-wider mt-3">
                  Awarded via State JVD Welfare &amp; Merit Scholarships
                </div>
              </div>

              {/* Point 3 */}
              <div className="proof-point-blocks bg-slate-50 p-8 border-t-4 border-mjc-yellow shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="point-value">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-mjc-blue">
                    27,270
                  </p>
                </div>
                <div className="title text-uppercase font-bold text-xs sm:text-sm text-slate-700 uppercase tracking-wider mt-3">
                  Intermediate Students Trained Across AP (2025–2026)
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
