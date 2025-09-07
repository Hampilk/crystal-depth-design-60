import React from 'react';
import { Wand2 } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

const MainCard = React.memo(() => {
  return (
    <div className="relative mx-auto grid w-full max-w-xl place-items-center">
      {/* Decorative rings */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div 
          className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10"
          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.5)' }}
        />
        <div 
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10 opacity-70"
          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.45)' }}
        />
        <div 
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10 opacity-40"
          style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.4)' }}
        />
      </div>

      {/* Main glass card */}
      <GlassCard 
        className="relative aspect-square w-full overflow-hidden"
        withHover
        aria-labelledby="main-card-title"
        role="region"
      >
        <div 
          className="pointer-events-none absolute inset-0 rounded-3xl" 
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.00) 24%, rgba(255,255,255,0.04) 80%)' }} 
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-6">
          <h1 
            id="main-card-title"
            className="text-5xl sm:text-6xl font-semibold tracking-tight text-white"
          >
            iOS 26
          </h1>
          <p className="mt-2 text-lg sm:text-xl font-normal text-gradient-radial">
            Liquid Glass Effect
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2" role="list" aria-label="Glass effect features">
            <span className="rounded-full px-3 py-1 text-xs font-medium text-neutral-200 glass-small" role="listitem">
              Blur 25px
            </span>
            <span className="rounded-full px-3 py-1 text-xs font-medium text-neutral-200 glass-small" role="listitem">
              Rings
            </span>
            <span className="rounded-full px-3 py-1 text-xs font-medium text-neutral-200 glass-small" role="listitem">
              Inner Shadows
            </span>
          </div>
        </div>
      </GlassCard>

      {/* Floating Action Button */}
      <button 
        className="group absolute -bottom-7 grid h-16 w-16 place-items-center rounded-full glass-button animate-scale-hover"
        aria-label="Open magic actions menu"
      >
        <Wand2 className="h-6 w-6" strokeWidth={1.5} />
        <span 
          className="pointer-events-none absolute inset-0 rounded-full animate-pulse-soft" 
          style={{ boxShadow: '0 0 0 12px rgba(255,255,255,0.06)' }}
          aria-hidden="true"
        />
      </button>
    </div>
  );
});

MainCard.displayName = 'MainCard';

export default MainCard;