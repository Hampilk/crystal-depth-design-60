import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'small' | 'raszter';
  children: React.ReactNode;
  withHover?: boolean;
  as?: React.ElementType;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'raszter', children, withHover = false, as: Component = 'div', ...props }, ref) => {
    const baseClasses = 'rounded-3xl transition-all duration-300';
    
    const variantClasses = {
      primary: 'glass-primary',
      secondary: 'glass-secondary', 
      small: 'glass-small',
      raszter: 'raszter-surface'
    };

    const hoverClasses = withHover ? 'hover:scale-[1.01] hover:shadow-2xl' : '';

    return (
      <Component
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          hoverClasses,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export { GlassCard };