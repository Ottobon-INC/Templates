import { collegeData } from '../data/siteData';

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-white)] pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              {collegeData.name}
            </h3>
            <p className="text-white/70 text-sm max-w-sm mb-6">
              {collegeData.location}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-secondary)] transition-colors text-sm font-semibold">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-secondary)] transition-colors text-sm font-semibold">
                TW
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-secondary)] transition-colors text-sm font-semibold">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-secondary)] transition-colors text-sm font-semibold">
                LI
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Academics', 'Alumni Stories'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-white/80 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href={`mailto:${collegeData.contact.email}`} className="hover:text-white transition-colors">
                  {collegeData.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${collegeData.contact.phone}`} className="hover:text-white transition-colors">
                  {collegeData.contact.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
          <p>© 2027 {collegeData.name}</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
