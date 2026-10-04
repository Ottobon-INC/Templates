import { ArrowRight, Download } from 'lucide-react';
import { admissionsData, scholarshipsData } from '../data/siteData';

export const Admissions = () => {
  return (
    <section id="admissions" className="py-24 md:py-32 bg-[var(--color-white)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Header Area */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-[48px] font-bold text-[var(--color-primary)] mb-6">
            YOUR NEXT STEP STARTS HERE.
          </h2>
          <p className="text-lg text-[var(--color-text)] mb-8">
            Explore your options, check eligibility and begin your application.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[var(--color-secondary)] text-[var(--color-white)] px-8 py-4 rounded font-medium hover:bg-opacity-90 transition-all">
              Apply Now
            </button>
            <button className="bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded font-medium hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] transition-colors">
              Talk to Admissions
            </button>
          </div>
        </div>

        {/* Final CTA Band */}
        <div className="bg-[var(--color-primary)] rounded-2xl p-12 text-center text-[var(--color-white)] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-secondary)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">
            READY TO TAKE THE NEXT STEP?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="bg-[var(--color-secondary)] text-[var(--color-white)] px-8 py-4 rounded font-medium hover:bg-opacity-90 transition-all">
              Apply Now
            </button>
            <button className="bg-transparent border border-white/30 text-[var(--color-white)] px-8 py-4 rounded font-medium hover:bg-white hover:text-[var(--color-primary)] transition-colors inline-flex items-center justify-center">
              <Download className="mr-2 w-4 h-4" /> Download Brochure
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
