import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, Edit3, Check } from 'lucide-react';
import { CollegeInfo } from '../data/universityData';

interface AnnouncementBarProps {
  college: CollegeInfo;
  onApplyClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ college, onApplyClick }) => {
  const [visible, setVisible] = useState(college.announcement.active);
  const [isEditing, setIsEditing] = useState(false);
  const [announcementText, setAnnouncementText] = useState(college.announcement.text);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-navy via-navy-light to-navy text-white text-xs sm:text-sm py-2 px-4 border-b border-electric/20 relative z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="inline-flex items-center justify-center p-1 rounded-full bg-gold/20 text-gold flex-shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          
          {isEditing ? (
            <div className="flex items-center gap-2 w-full max-w-xl">
              <input
                type="text"
                value={announcementText}
                onChange={(e) => setAnnouncementText(e.target.value)}
                className="bg-navy-dark text-white px-2 py-1 rounded text-xs border border-electric/50 focus:outline-none focus:border-gold w-full"
                autoFocus
              />
              <button
                onClick={() => setIsEditing(false)}
                className="p-1 bg-gold text-navy rounded hover:bg-gold-hover transition"
                title="Save announcement text"
              >
                <Check className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="font-medium text-slate-200 truncate">
                {announcementText}
              </span>
              <button
                onClick={() => setIsEditing(true)}
                className="opacity-60 hover:opacity-100 text-gold text-[10px] underline flex items-center gap-1 flex-shrink-0"
                title="Edit announcement text for client demo"
              >
                <Edit3 className="w-3 h-3" /> Edit
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onApplyClick}
            className="hidden sm:inline-flex items-center gap-1 font-semibold text-gold hover:text-white transition group"
          >
            <span>{college.announcement.linkText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setVisible(false)}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/10 transition"
            aria-label="Close Announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
