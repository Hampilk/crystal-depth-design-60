import React, { ReactNode, useMemo } from "react";
import { Button } from "@heroui/react";

interface GlassButtonProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  isRound?: boolean;
  isPulse?: boolean;
  onPress?: () => void;
  'aria-label'?: string; // Added aria-label prop
}

export const GlassButton: React.FC<GlassButtonProps> = ({ 
  children, 
  className = "", 
  size = "md",
  isRound = false,
  isPulse = false,
  onPress,
  ...props
}) => {
  const sizeClasses = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-14 w-14"
  };
  
  const radiusClass = isRound ? "rounded-full" : "rounded-xl";
  
  // Generate an accessible label if not provided
  const ariaLabel = props['aria-label'] || 'Button';
  
  return (
    <Button
      isIconOnly
      disableRipple
      disableAnimation
      aria-label={ariaLabel}
      className={`grid place-items-center ${sizeClasses[size]} ${radiusClass} ring-1 ring-white/10 backdrop-blur-md transition hover:scale-[1.03] hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 glass-button relative ${className}`}
      onPress={onPress}
      {...props}
    >
      {children}
      
      {isPulse && (
        <span className="pointer-events-none absolute inset-0 rounded-full pulse-ring" 
              style={{ boxShadow: "0 0 0 12px rgba(255,255,255,0.06)" }} />
      )}
    </Button>
  );
};