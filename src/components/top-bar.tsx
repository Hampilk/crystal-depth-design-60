import React from "react";
import { Button } from "@heroui/react";

interface TopBarProps {
  activeLayout: "compact" | "wide";
  onLayoutChange: (layout: "compact" | "wide") => void;
}

export const TopBar: React.FC<TopBarProps> = ({ activeLayout, onLayoutChange }) => {
  return (
    <header className="sticky top-0 z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div 
            className="grid h-9 w-9 place-items-center rounded-xl ring-1 ring-white/10 backdrop-blur-sm" 
            style={{ background: "rgba(255,255,255,0.03)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.35)" }}
            aria-label="Liquid Glass Logo"
          >
            <span className="text-lg font-semibold tracking-tight text-white">LG</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm text-neutral-400">Liquid Glass</p>
            <p className="text-xs text-neutral-500">Depth, blur, and subtle light</p>
          </div>
        </div>

        {/* View Mode Segmented Control */}
        <div 
          role="tablist" 
          aria-label="Layout mode" 
          className="group inline-flex items-center gap-1 rounded-full px-1 py-1 ring-1 ring-white/10 backdrop-blur-md transition glass-pill"
        >
          <Button
            disableRipple
            disableAnimation
            aria-label="Switch to compact layout"
            aria-selected={activeLayout === 'compact'}
            className={`relative rounded-full px-3 py-1.5 text-sm font-medium text-neutral-300 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400/60 ${activeLayout === 'compact' ? 'text-white' : ''}`}
            style={{ letterSpacing: "-0.01em" }}
            onPress={() => onLayoutChange("compact")}
          >
            <span 
              className={`pointer-events-none absolute inset-0 -z-10 rounded-full transition ${activeLayout === 'compact' ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                background: "linear-gradient(0deg, rgba(30, 30, 30, 0.25) 0%, rgba(30, 30, 30, 0.25) 100%), rgba(255, 255, 255, 0.06)",
                boxShadow: "rgba(255, 255, 255, 0.06) -0.5px -1px 0px 1px inset, rgba(0, 0, 0, 0.2) 0px 10px 30px"
              }}
            />
            Compact
          </Button>
          <Button
            disableRipple
            disableAnimation
            aria-label="Switch to wide layout"
            aria-selected={activeLayout === 'wide'}
            className={`relative rounded-full px-3 py-1.5 text-sm font-medium text-neutral-300 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400/60 ${activeLayout === 'wide' ? 'text-white' : ''}`}
            style={{ letterSpacing: "-0.01em" }}
            onPress={() => onLayoutChange("wide")}
          >
            <span 
              className={`pointer-events-none absolute inset-0 -z-10 rounded-full transition ${activeLayout === 'wide' ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                background: "linear-gradient(0deg, rgba(30, 30, 30, 0.25) 0%, rgba(30, 30, 30, 0.25) 100%), rgba(255, 255, 255, 0.06)",
                boxShadow: "rgba(255, 255, 255, 0.06) -0.5px -1px 0px 1px inset, rgba(0, 0, 0, 0.2) 0px 10px 30px"
              }}
            />
            Wide
          </Button>
        </div>
      </div>
    </header>
  );
};