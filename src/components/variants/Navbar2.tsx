import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Layers, Settings, BookOpen } from 'lucide-react';

export const Navbar2: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { icon: Home, label: 'Overview', href: '#' },
    { icon: Layers, label: 'Components', href: '#' },
    { icon: BookOpen, label: 'Examples', href: '#' },
    { icon: Settings, label: 'Documentation', href: '#' },
  ];

  return (
    <nav className={`fixed left-4 top-24 z-40 transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}>
      <div className="relative overflow-hidden rounded-2xl">
        {/* Glass background */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-md border border-white/10" />
        
        {/* Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/10 w-8 h-8"
        >
          <ChevronRight className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </Button>

        {/* Navigation Content */}
        <div className="relative z-10 p-4 space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className={`w-full text-white hover:bg-white/10 justify-start ${!isExpanded ? 'px-2' : 'px-3'}`}
                size={isExpanded ? 'sm' : 'icon'}
              >
                <Icon className="h-4 w-4" />
                {isExpanded && <span className="ml-3">{item.label}</span>}
              </Button>
            );
          })}
        </div>

        {/* Footer */}
        {isExpanded && (
          <div className="relative z-10 p-4 border-t border-white/10">
            <p className="text-xs text-white/60">Liquid Glass UI</p>
            <p className="text-xs text-white/40">Version 2.0</p>
          </div>
        )}
      </div>
    </nav>
  );
};