
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  overline?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  overline,
  title,
  description,
  alignment = 'center',
  className,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={cn('max-w-3xl mb-12', alignmentClasses[alignment], className)}>
      {overline && (
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary animate-fade-in">
          {overline}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display animate-fade-in">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
