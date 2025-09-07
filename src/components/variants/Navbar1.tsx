import React from 'react';
import { Button } from '@/components/ui/button';

export const Navbar1: React.FC = () => {
  return (
    <nav className="sticky top-20 z-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center gap-4 px-6 py-3 rounded-[32px] overflow-hidden">
          {/* Glass background */}
          <div className="absolute inset-0 bg-white/[0.02] rounded-[32px]" />
          <div 
            className="absolute inset-0 bg-neutral-600/5 rounded-[32px]"
            style={{ 
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          />
          <div className="absolute inset-0 rounded-[32px] border border-white/10" />

          {/* Navigation Items */}
          <div className="relative z-10 flex items-center gap-1">
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 rounded-full">
              Overview
            </Button>
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 rounded-full">
              Components
            </Button>
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 rounded-full">
              Examples
            </Button>
            <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 rounded-full">
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};