
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  easing?: (t: number) => number;
  className?: string;
  formatter?: (value: number) => string;
  decimals?: number;
}

// Default easing function (easeOutExpo)
const defaultEasing = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  easing = defaultEasing,
  className,
  formatter,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // Format the number with commas
  const formatNumber = (num: number): string => {
    if (formatter) return formatter(num);
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easedProgress = easing(progress);
      const nextCount = Math.floor(easedProgress * end);
      
      if (countRef.current !== nextCount) {
        countRef.current = nextCount;
        setCount(nextCount);
      }
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration, easing]);

  return (
    <div className={cn('font-semibold animate-counter', className)}>
      {prefix}{formatNumber(count)}{suffix}
    </div>
  );
};

export default AnimatedCounter;
