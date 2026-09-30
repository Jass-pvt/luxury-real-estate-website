import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  alignment = 'left',
  theme = 'light',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[alignment];

  const textColor = theme === 'dark' ? 'text-ivory' : 'text-midnight';
  const labelColor = theme === 'dark' ? 'text-champagne' : 'text-taupe';
  const subtitleColor = theme === 'dark' ? 'text-ivory/70' : 'text-charcoal/80';

  return (
    <div className={`flex flex-col ${alignClass} mb-12 lg:mb-16 ${className}`}>
      {/* Category Label */}
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-px bg-champagne"></span>
        <span className={`text-xs uppercase font-semibold tracking-mega ${labelColor}`}>
          {label}
        </span>
      </div>

      {/* Main Title */}
      
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-tight ${textColor}`}>
        {title
          .replace(/\\n/g, '\n') // Replaces literal "\n" strings with actual newlines
          .split('\n')
          .map((line, idx, array) => (
            <React.Fragment key={idx}>
              {line}
              {idx < array.length - 1 && <br />}
            </React.Fragment>
          ))}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl font-sans font-light leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
