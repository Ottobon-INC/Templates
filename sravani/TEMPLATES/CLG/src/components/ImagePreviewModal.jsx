import React from 'react';
import { X, Sparkles } from 'lucide-react';

export default function ImagePreviewModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-navy-900 rounded-3xl max-w-4xl w-full shadow-2xl border border-white/20 overflow-hidden animate-fadeIn text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-navy-950/80 hover:bg-gold-500 hover:text-navy-950 text-white flex items-center justify-center transition-colors border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image */}
        <div className="relative max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[65vh]"
          />
        </div>

        {/* Caption */}
        <div className="p-6 sm:p-8 bg-navy-950 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase font-semibold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-400/20">
                {item.category}
              </span>
              <span className="text-xs text-sky-300 font-medium">
                {item.highlight}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              {item.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors shrink-0"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
}
