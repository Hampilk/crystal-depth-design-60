import React from 'react';
import { useLayoutMode } from '@/hooks/useLayoutMode';

export const Header1: React.FC = () => {
  const { viewMode, setViewMode } = useLayoutMode();
  
  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between gap-4 px-6 py-4 rounded-[42px] overflow-hidden">
          {/* Glass background layers */}
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
          <div 
            className="absolute inset-0 rounded-[42px] border border-white/20"
            style={{ 
              mixBlendMode: 'plus-lighter',
              filter: 'blur(1.5px)'
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/10 rounded-2xl" />
                <div 
                  className="absolute inset-0 bg-white/5 rounded-2xl"
                  style={{ 
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                />
                <div className="absolute inset-0 rounded-2xl border border-white/20" />
                <span className="relative z-10 text-xl font-bold tracking-tight text-white drop-shadow-sm">
                  LG
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-white drop-shadow-sm">Liquid Glass</p>
                <p className="text-xs text-white/70">Depth, blur, and subtle light</p>
              </div>
            </div>

            {/* Layout Toggle */}
            <div className="relative inline-flex items-center gap-1 rounded-full p-1 overflow-hidden">
              <div className="absolute inset-0 bg-black/10 rounded-full" />
              <div 
                className="absolute inset-0 bg-white/5 rounded-full"
                style={{ 
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              />
              <div className="absolute inset-0 rounded-full border border-white/20" />
              
              <button
                onClick={() => setViewMode('compact')}
                className="relative z-10 rounded-full px-4 py-2 text-sm font-medium text-white/90 outline-none transition-all duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {viewMode === 'compact' && (
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-white/20 border border-white/30" />
                )}
                Compact
              </button>
              
              <button
                onClick={() => setViewMode('wide')}
                className="relative z-10 rounded-full px-4 py-2 text-sm font-medium text-white/90 outline-none transition-all duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {viewMode === 'wide' && (
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-white/20 border border-white/30" />
                )}
                Wide
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};