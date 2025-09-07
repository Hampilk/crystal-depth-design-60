import React, { useCallback } from 'react';

interface HeaderProps {
  viewMode: 'compact' | 'wide';
  onViewModeChange: (mode: 'compact' | 'wide') => void;
}

const Header = React.memo(({ viewMode, onViewModeChange }: HeaderProps) => {
  const handleModeChange = useCallback((mode: 'compact' | 'wide') => {
    onViewModeChange(mode);
  }, [onViewModeChange]);

  return (
    <header className="sticky top-0 z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
      {/* Main header container with advanced glassmorphism */}
      <div className="relative flex items-center justify-between gap-4 px-6 py-4 rounded-[42px] overflow-hidden">
        {/* Multiple layered backgrounds for depth */}
        <div className="absolute inset-0 bg-white/[0.01] rounded-[42px]" />
        <div 
          className="absolute inset-0 bg-white/[0.01] rounded-[42px]"
          style={{ 
            mixBlendMode: 'normal',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-neutral-300/50 rounded-[42px]" />
        <div 
          className="absolute inset-0 bg-neutral-600/10 rounded-[42px]"
          style={{ 
            backdropFilter: 'blur(45px)',
            WebkitBackdropFilter: 'blur(45px)'
          }}
        />
        
        {/* Inner container with subtle blur */}
        <div 
          className="absolute inset-[6px] bg-neutral-300/80 rounded-[36px]"
          style={{ filter: 'blur(3px)' }}
        />
        
        {/* Overlay effects */}
        <div 
          className="absolute inset-0 bg-black/10 rounded-[42px]"
          style={{ 
            mixBlendMode: 'overlay',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
        />
        <div 
          className="absolute inset-0 rounded-[42px]"
          style={{ 
            mixBlendMode: 'multiply',
            filter: 'blur(4px)'
          }}
        />
        <div 
          className="absolute inset-0 rounded-[42px] border border-white/20"
          style={{ 
            mixBlendMode: 'plus-lighter',
            filter: 'blur(1.5px)'
          }}
        />

        {/* Content layer */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {/* Logo section with glassmorphism */}
          <div className="flex items-center gap-3">
            <div className="relative grid h-12 w-12 place-items-center rounded-2xl overflow-hidden">
              {/* Logo background layers */}
              <div className="absolute inset-0 bg-black/10 rounded-2xl" />
              <div 
                className="absolute inset-0 bg-white/5 rounded-2xl"
                style={{ 
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              />
              <div className="absolute inset-0 rounded-2xl border border-white/20" />
              
              {/* Logo text */}
              <span className="relative z-10 text-xl font-bold tracking-tight text-white drop-shadow-sm">
                LG
              </span>
            </div>
            
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-white drop-shadow-sm">Liquid Glass</p>
              <p className="text-xs text-white/70">Depth, blur, and subtle light</p>
            </div>
          </div>

          {/* View Mode Toggle with advanced glassmorphism */}
          <div 
            role="tablist" 
            aria-label="Layout mode toggle" 
            className="relative inline-flex items-center gap-1 rounded-full p-1 overflow-hidden"
          >
            {/* Toggle background layers */}
            <div className="absolute inset-0 bg-black/10 rounded-full" />
            <div 
              className="absolute inset-0 bg-white/5 rounded-full"
              style={{ 
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            />
            <div className="absolute inset-0 rounded-full border border-white/20" />
            
            {/* Buttons */}
            <button
              role="tab"
              aria-selected={viewMode === 'compact'}
              aria-label="Switch to compact layout"
              onClick={() => handleModeChange('compact')}
              className="relative z-10 rounded-full px-4 py-2 text-sm font-medium text-white/90 outline-none transition-all duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              style={{ letterSpacing: '-0.01em' }}
            >
              {/* Active state background */}
              <span 
                className={`pointer-events-none absolute inset-0 -z-10 rounded-full transition-all duration-300 overflow-hidden ${
                  viewMode === 'compact' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <span className="absolute inset-0 bg-white/20 rounded-full" />
                <span 
                  className="absolute inset-0 bg-white/10 rounded-full"
                  style={{ 
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                />
                <span className="absolute inset-0 rounded-full border border-white/30" />
              </span>
              Compact
            </button>
            
            <button
              role="tab"
              aria-selected={viewMode === 'wide'}
              aria-label="Switch to wide layout"
              onClick={() => handleModeChange('wide')}
              className="relative z-10 rounded-full px-4 py-2 text-sm font-medium text-white/90 outline-none transition-all duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              style={{ letterSpacing: '-0.01em' }}
            >
              {/* Active state background */}
              <span 
                className={`pointer-events-none absolute inset-0 -z-10 rounded-full transition-all duration-300 overflow-hidden ${
                  viewMode === 'wide' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <span className="absolute inset-0 bg-white/20 rounded-full" />
                <span 
                  className="absolute inset-0 bg-white/10 rounded-full"
                  style={{ 
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                />
                <span className="absolute inset-0 rounded-full border border-white/30" />
              </span>
              Wide
            </button>
          </div>
        </div>
      </div>

      {/* Add some global styles for the glassmorphism effect */}
      <style jsx>{`
        @supports (backdrop-filter: blur(1px)) {
          .glassmorphism-enhanced {
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
          }
        }
        
        /* Fallback for browsers that don't support backdrop-filter */
        @supports not (backdrop-filter: blur(1px)) {
          .glassmorphism-enhanced {
            background: rgba(255, 255, 255, 0.15);
          }
        }
      `}</style>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
