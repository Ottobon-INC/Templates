import React from 'react';
import './ScrollIndicator.css';

interface ScrollIndicatorProps {
  activeSection: number;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ activeSection }) => {
  return (
    <div className="scroll-indicator">
      <div className="scroll-number">0{activeSection} / 05</div>
      <div className="scroll-track">
        <div 
          className="scroll-thumb"
          style={{ transform: `translateY(${(activeSection - 1) * 25}px)` }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
