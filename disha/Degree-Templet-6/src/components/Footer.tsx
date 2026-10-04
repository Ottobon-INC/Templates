import React from 'react';
import { Sparkles } from 'lucide-react';
import { collegeData } from '../data/collegeData';

interface FooterProps {
  onOpenApplyModal: () => void;
  onExploreProgrammes: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApplyModal,
  onExploreProgrammes
}) => {
  return (
    <section className="py-12 lg:py-16 bg-[#FFFDF8]">
      <div className="w-full px-4 md:px-8 space-y-16">
        {/* Huge Final Statement */}
        <div className="bg-[#3B2038] text-[#FFFDF8] p-12 sm:p-20 rounded-3xl text-center space-y-8 shadow-2xl border-4 border-[#C85C45]/40">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E9A23B] font-bold">
              YOUR DESTINY AWAITS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] text-[#FFFDF8]">
              FIND YOUR DIRECTION.
              <br />
              <span className="text-[#C85C45] italic">BUILD WHAT COMES NEXT.</span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onExploreProgrammes}
              className="px-8 py-4 bg-[#F3E8D0] text-[#3B2038] hover:bg-white rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
            >
              Explore Programmes
            </button>
            <button
              onClick={onOpenApplyModal}
              className="px-8 py-4 bg-[#C85C45] hover:bg-[#E9A23B] hover:text-[#202020] text-white rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-xl flex items-center gap-2"
            >
              <span>Apply Now</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Compact Editorial Footer */}
        <footer className="pt-12 border-t border-[#3B2038]/15 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-sans text-[#202020]/80">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#3B2038] text-[#F3E8D0] flex items-center justify-center font-serif font-bold">
                {collegeData.badge}
              </span>
              <span className="font-serif text-xl font-bold text-[#3B2038]">
                {collegeData.name}
              </span>
            </div>
            <p className="text-xs text-[#202020]/70 max-w-sm">
              {collegeData.address}
              <br />
              Visakhapatnam, Andhra Pradesh, India
            </p>
            <p className="text-xs text-[#C85C45] font-mono font-bold">
              {collegeData.accreditations.join(" • ")}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="font-mono font-bold uppercase text-[#3B2038] block text-[11px]">
              ADMISSIONS HELPLINE
            </span>
            <p className="font-mono text-xs text-[#202020]/80">{collegeData.phone}</p>
            <p className="font-mono text-xs text-[#C85C45]">{collegeData.email}</p>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between space-y-4 md:space-y-0 text-right md:text-right">
            <div className="text-xs text-[#202020]/70 font-mono">
              &copy; {new Date().getFullYear()} Northstar Institute of Higher Education.
              <br />
              All fictional demonstration content.
            </div>
            <div className="text-[11px] font-mono text-[#C85C45]">
              Designed for impact.
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
