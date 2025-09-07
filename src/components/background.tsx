import React, { memo, useMemo } from "react";

// Memoize the Background component since it doesn't depend on props
export const Background: React.FC = memo(() => {
  return (
    <>
      {/* Fixed background image */}
      <div 
        className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" 
        style={{ 
          backgroundImage: "url('https://raw.githubusercontent.com/Winmix713/react-framer-builder/refs/heads/main/walpaper.png?w=800&q=80')"
        }}
        aria-hidden="true"
      />
      
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        {/* Soft radial glows */}
        <div className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl glow-blue" />
        <div className="absolute top-24 -right-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl glow-red" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl glow-green" />
        
        {/* Subtle texture */}
        <div 
          className="absolute inset-0 mix-blend-soft-light opacity-[0.10]" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=2400&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </div>
    </>
  );
});

// Add display name for debugging
Background.displayName = 'Background';