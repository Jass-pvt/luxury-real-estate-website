import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'champagne' | 'dark-outline';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  children,
  asAnchor = false,
  href,
  target,
  rel,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-wider uppercase font-semibold transition-all duration-300 rounded-none cursor-pointer focus:outline-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5 gap-1.5',
    md: 'text-xs px-6 py-3.5 gap-2',
    lg: 'text-sm px-8 py-4 gap-2.5',
  };

  const variantStyles = {
    // Primary dark navy button on light background
    primary: 'bg-midnight text-ivory hover:bg-royal hover:shadow-elevated border border-midnight',
    // Light ivory button on dark background
    secondary: 'bg-ivory text-midnight hover:bg-champagne hover:text-midnight border border-ivory',
    // Champagne accent button
    champagne: 'bg-champagne text-midnight hover:bg-champagne-light hover:shadow-glow border border-champagne',
    // Outline button on dark background
    outline: 'bg-transparent text-ivory border border-champagne/40 hover:border-champagne hover:bg-champagne/10',
    // Outline button on light background
    'dark-outline': 'bg-transparent text-midnight border border-midnight/30 hover:border-midnight hover:bg-midnight/5',
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={rel} className={`group ${classes}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`group ${classes}`} {...props}>
      {content}
    </button>
  );
};
