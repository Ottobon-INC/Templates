import React from 'react';


export const NumbersSection: React.FC = () => {
  return (
    <section className="px-4 md:px-8 bg-[#FFFDF8] py-8 z-10 relative -mt-16 sm:-mt-20">
      <div className="w-full max-w-6xl mx-auto bg-[#3B2038] rounded-2xl p-6 sm:p-8 flex flex-wrap justify-between items-center gap-8 shadow-2xl border border-[#C85C45]/30">
        
        {/* Item 1 */}
        <div className="flex flex-col">
          <span className="font-serif text-3xl sm:text-4xl font-black text-[#F3E8D0] leading-none">5,200+</span>
          <span className="text-xs font-mono font-bold uppercase text-[#D8A39A] mt-2 tracking-wider">Students</span>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col">
          <span className="font-serif text-3xl sm:text-4xl font-black text-[#C85C45] leading-none">32+</span>
          <span className="text-xs font-mono font-bold uppercase text-[#D8A39A] mt-2 tracking-wider">Programmes</span>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col">
          <span className="font-serif text-3xl sm:text-4xl font-black text-[#F3E8D0] leading-none">220+</span>
          <span className="text-xs font-mono font-bold uppercase text-[#D8A39A] mt-2 tracking-wider">Faculty</span>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col">
          <span className="font-serif text-3xl sm:text-4xl font-black text-[#E9A23B] leading-none">18</span>
          <span className="text-xs font-mono font-bold uppercase text-[#D8A39A] mt-2 tracking-wider">Acres</span>
        </div>

        {/* Item 5 */}
        <div className="flex flex-col">
          <span className="font-serif text-3xl sm:text-4xl font-black text-[#C85C45] leading-none">140+</span>
          <span className="text-xs font-mono font-bold uppercase text-[#D8A39A] mt-2 tracking-wider">Recruiters</span>
        </div>
        
      </div>
    </section>
  );
};
