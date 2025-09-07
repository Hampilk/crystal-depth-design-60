import React, { ReactNode, useMemo } from "react";
import { Card, CardBody } from "@heroui/react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  innerGlow?: boolean;
  rings?: boolean;
  ariaLabel?: string;
  nestedGlass?: boolean; // Added new prop for Layer 3 design
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  innerGlow = false,
  rings = false,
  ariaLabel,
  nestedGlass = false
}) => {
  return (
    <Card 
      className={`relative overflow-hidden rounded-3xl ring-1 ring-white/10 backdrop-blur-xl glass-card ${className}`}
      disableRipple
      shadow="none"
      aria-label={ariaLabel}
    >
      {nestedGlass && (
        <>
          {/* Layer 3 nested glass effect */}
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[90px] bg-white/[0.01] backdrop-filter backdrop-blur-[100px]"></div>
            <div className="absolute left-1/2 top-1/2 w-[396px] h-[396px] -translate-x-1/2 -translate-y-1/2 rounded-[90px] bg-white/[0.01] backdrop-filter backdrop-blur-[90px] filter blur-[2px]"></div>
            <div className="absolute left-1/2 top-1/2 w-[372px] h-[372px] -translate-x-1/2 -translate-y-1/2 rounded-[90px] bg-white/[0.01] backdrop-filter backdrop-blur-[80px] filter blur-[2px]"></div>
            <div className="absolute left-1/2 top-1/2 w-[352px] h-[352px] -translate-x-1/2 -translate-y-1/2 rounded-[90px] bg-white/[0.01] backdrop-filter backdrop-blur-[70px] filter blur-[2px]"></div>
            <div className="absolute left-1/2 top-1/2 w-[330px] h-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[90px] bg-white/[0.01] backdrop-filter backdrop-blur-[60px] filter blur-[2px]"></div>
            <div className="absolute left-1/2 top-1/2 w-[308px] h-[308px] -translate-x-1/2 -translate-y-1/2 rounded-[90px] bg-white/[0.01] backdrop-filter backdrop-blur-[50px] filter blur-[2px]"></div>
            <div className="absolute left-1/2 top-1/2 w-[286px] h-[286px] -translate-x-1/2 -translate-y-1/2 rounded-[90px] bg-white/[0.01] backdrop-filter backdrop-blur-[35px] filter blur-[2px]"></div>
            <div className="absolute left-1/2 top-1/2 w-[262px] h-[262px] -translate-x-1/2 -translate-y-1/2 rounded-[90px] bg-white/[0.01] backdrop-filter backdrop-blur-[25px] filter blur-[2px]"></div>
            <div className="absolute left-1/2 top-1/2 w-[236px] h-[236px] -translate-x-1/2 -translate-y-1/2 rounded-[90px] bg-white/[0.01] backdrop-filter backdrop-blur-[15px] filter blur-[2px]"></div>
            <div className="absolute left-1/2 top-1/2 w-[212px] h-[212px] -translate-x-1/2 -translate-y-1/2 rounded-[90px] bg-white/[0.01] backdrop-filter backdrop-blur-[5px] filter blur-[2px]"></div>
            <div className="absolute left-1/2 top-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[90px] bg-white/[0.01] border-[3px] border-white/10"
                 style={{ boxShadow: "inset 18px 18px 10px -20px #FFFFFF, inset -14px -14px 7px -12px #B3B3B3" }}></div>
          </div>
        </>
      )}
      
      {rings && (
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10" 
               style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.5)" }} />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10 opacity-70" 
               style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.45)" }} />
          <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10 opacity-40" 
               style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.4)" }} />
        </div>
      )}
      
      {innerGlow && (
        <div className="pointer-events-none absolute inset-0 rounded-3xl glass-inner" aria-hidden="true" />
      )}
      
      <CardBody className="relative z-10">
        {children}
      </CardBody>
    </Card>
  );
};