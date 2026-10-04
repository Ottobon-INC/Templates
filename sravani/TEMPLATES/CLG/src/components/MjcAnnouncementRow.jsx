import React from 'react';

export default function MjcAnnouncementRow({ onOpenApply }) {
  return (
    <div id="announcement" className="column-2-image-annoucement bg-222222 text-white">
      <div className="priority-registration-content max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          
          {/* Left Square Image */}
          <div className="priority-registration-image h-80 sm:h-96 md:h-[480px] overflow-hidden bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80"
              alt="AP Intermediate science and electronics laboratory"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right Detail Block */}
          <div className="priority-registration-detail p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-slate-900">
            <div className="inline-block px-3 py-1 bg-white/10 text-mjc-yellow text-xs font-black uppercase tracking-widest mb-3 w-fit">
              Admissions Open • 1st &amp; 2nd Year Inter
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mb-6">
              Intermediate Academic Year 2026–2027
            </h2>

            <div className="detail large-text text-sm sm:text-base text-slate-300 space-y-4 leading-relaxed font-normal">
              <p>
                Find your lecture halls, science laboratories, and library wings using our{' '}
                <a href="#connect-us" className="text-mjc-yellow hover:underline font-semibold">
                  Interactive campus map
                </a>.
              </p>
              
              <p>
                <a href="#connect-us" className="text-mjc-yellow hover:underline font-semibold">
                  Avail free college buses &amp; APSRTC student passes
                </a>{' '}
                connecting Vijayawada, Guntur, Tenali, Mangalagiri, and surrounding routes.
              </p>
              
              <p>
                Admissions are open now to all 10th / SSC pass-outs. Verified against BIEAP online counseling.{' '}
                <a href="#get-started" onClick={onOpenApply} className="text-mjc-yellow hover:underline font-semibold">
                  Sign up for your preferred batch!
                </a>
              </p>

              <div className="register-button pt-6">
                <button
                  onClick={onOpenApply}
                  className="btn btn-yellow btn-lg px-8 py-3.5 text-sm font-bold uppercase tracking-wider"
                  role="button"
                >
                  Register Now
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
