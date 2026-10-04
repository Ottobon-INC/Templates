import React, { useEffect, useState } from 'react';

export const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if desktop
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target has specific interactive classes
      const target = e.target as HTMLElement;
      if (target && (target.closest('button') || target.closest('a') || target.closest('.group'))) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out flex items-center justify-center ${
        isHovered
          ? 'w-10 h-10 bg-[#C85C45]/30 border border-[#E9A23B] backdrop-blur-sm scale-125'
          : 'w-4 h-4 bg-[#C85C45] border border-white opacity-80'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.2)' : 'scale(1)'}`
      }}
    />
  );
};
