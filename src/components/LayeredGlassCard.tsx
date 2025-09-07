import React from 'react';

interface LayeredGlassCardProps {
  children?: React.ReactNode;
  className?: string;
}

const LayeredGlassCard: React.FC<LayeredGlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative w-[420px] h-[420px] ${className}`}>
      {/* Layer 1 - Outermost */}
      <div className="absolute inset-0 glass-main-card-layer backdrop-filter backdrop-blur-[100px]" />
      
      {/* Layer 2 */}
      <div className="absolute left-[12px] top-[12px] w-[396px] h-[396px] glass-main-card-layer backdrop-filter backdrop-blur-[90px]" />
      
      {/* Layer 3 */}
      <div className="absolute left-[24px] top-[24px] w-[372px] h-[372px] glass-main-card-layer backdrop-filter backdrop-blur-[80px]" />
      
      {/* Layer 4 */}
      <div className="absolute left-[34px] top-[34px] w-[352px] h-[352px] glass-main-card-layer backdrop-filter backdrop-blur-[70px]" />
      
      {/* Layer 5 */}
      <div className="absolute left-[45px] top-[45px] w-[330px] h-[330px] glass-main-card-layer backdrop-filter backdrop-blur-[60px]" />
      
      {/* Layer 6 */}
      <div className="absolute left-[56px] top-[56px] w-[308px] h-[308px] glass-main-card-layer backdrop-filter backdrop-blur-[50px]" />
      
      {/* Layer 7 */}
      <div className="absolute left-[67px] top-[67px] w-[286px] h-[286px] glass-main-card-layer backdrop-filter backdrop-blur-[35px]" />
      
      {/* Layer 8 */}
      <div className="absolute left-[79px] top-[79px] w-[262px] h-[262px] glass-main-card-layer backdrop-filter backdrop-blur-[25px]" />
      
      {/* Layer 9 */}
      <div className="absolute left-[92px] top-[92px] w-[236px] h-[236px] glass-main-card-layer backdrop-filter backdrop-blur-[15px]" />
      
      {/* Layer 10 - Innermost background */}
      <div className="absolute left-[104px] top-[104px] w-[212px] h-[212px] glass-main-card-layer backdrop-filter backdrop-blur-[5px]" />
      
      {/* Final outer border layer */}
      <div 
        className="absolute inset-0 rounded-[90px] border-[3px] border-white/10"
        style={{
          background: 'var(--glass-main-card-layers)',
          boxShadow: 'inset -14px -14px 7px -12px #B3B3B3'
        }}
      />
      
      {/* Content Area */}
      <div className="absolute left-[104px] top-[104px] w-[212px] h-[212px] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default LayeredGlassCard;