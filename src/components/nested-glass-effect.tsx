import React from "react";

interface NestedGlassEffectProps {
  className?: string;
}

export const NestedGlassEffect: React.FC<NestedGlassEffectProps> = ({ className = "" }) => {
  return (
    <div className={`nested-glass-container ${className}`}>
      <div className="nested-glass w-[420px] h-[420px] backdrop-blur-[100px]"></div>
      <div className="nested-glass w-[396px] h-[396px] backdrop-blur-[90px]"></div>
      <div className="nested-glass w-[372px] h-[372px] backdrop-blur-[80px]"></div>
      <div className="nested-glass w-[352px] h-[352px] backdrop-blur-[70px]"></div>
      <div className="nested-glass w-[330px] h-[330px] backdrop-blur-[60px]"></div>
      <div className="nested-glass w-[308px] h-[308px] backdrop-blur-[50px]"></div>
      <div className="nested-glass w-[286px] h-[286px] backdrop-blur-[35px]"></div>
      <div className="nested-glass w-[262px] h-[262px] backdrop-blur-[25px]"></div>
      <div className="nested-glass w-[236px] h-[236px] backdrop-blur-[15px]"></div>
      <div className="nested-glass w-[212px] h-[212px] backdrop-blur-[5px]"></div>
      <div className="nested-glass-border"></div>
    </div>
  );
};