import React, { ReactNode, useMemo } from "react";
import { Button } from "@heroui/react";

interface TabItemProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  isVertical?: boolean;
  ariaLabel?: string;
}

export const TabItem = React.memo(({ 
  icon, 
  label, 
  isActive = false,
  onClick,
  isVertical = false,
  ariaLabel
}: TabItemProps) => {
  const containerClass = isVertical
    ? "flex items-center gap-3 rounded-2xl px-3 py-2"
    : "flex flex-col items-center gap-1 rounded-2xl px-2 py-1.5";
    
  const iconContainerClass = isVertical
    ? "grid h-9 w-9 place-items-center rounded-xl ring-1 ring-white/10"
    : `grid h-10 w-10 place-items-center rounded-${isVertical ? 'xl' : 'full'} transition group-aria-selected:scale-110`;
    
  const labelClass = isVertical
    ? "text-sm font-medium"
    : "text-[11px] font-medium";
    
  const activeClass = isActive
    ? "text-[#0095FF]"
    : "text-neutral-400";
    
  const iconStyle = isVertical
    ? { background: "rgba(255,255,255,0.05)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.35)" }
    : { 
        background: isActive 
          ? "linear-gradient(0deg, rgba(30, 30, 30, 0.25) 0%, rgba(30, 30, 30, 0.25) 100%), rgba(255, 255, 255, 0.04)" 
          : "rgba(255,255,255,0.05)",
        boxShadow: isActive
          ? "-0.4px -1px 0.3px 1px rgba(255, 255, 255, 0.05) inset"
          : "inset -0.5px -1px 0.25px 1px rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.25)",
        backdropFilter: "blur(6.5px)"
      };
    
  return (
    <Button
      disableRipple
      disableAnimation
      className={`group ${containerClass} ${activeClass} transition hover:text-white`}
      onPress={onClick}
      aria-selected={isActive}
      aria-label={ariaLabel || label}
    >
      <div className={`${iconContainerClass} glass-tab`} style={iconStyle}>
        {icon}
      </div>
      <span>{label}</span>
    </Button>
  );
});

// Add display name for debugging
TabItem.displayName = 'TabItem';