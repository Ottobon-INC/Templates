import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const stepTime = 16; // ~60fps
    const steps = duration / stepTime;
    const increment = end / steps;
    let current = 0;

    const isFloat = end % 1 !== 0;
    const timer = setInterval(() => {
      start++;
      current += increment;
      if (start >= steps || current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isFloat ? Number(current.toFixed(1)) : Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  const formattedCount = (end % 1 !== 0)
    ? count.toFixed(1)
    : (count >= 1000 ? count.toLocaleString('en-IN') : count);

  return (
    <span ref={countRef} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};
