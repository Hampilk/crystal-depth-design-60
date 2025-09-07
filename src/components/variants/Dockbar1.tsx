import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, Search, Heart, User, Menu } from 'lucide-react';

export const Dockbar1: React.FC = () => {
  const dockItems = [
    { icon: Home, label: 'Home' },
    { icon: Search, label: 'Search' },
    { icon: Heart, label: 'Favorites' },
    { icon: User, label: 'Profile' },
    { icon: Menu, label: 'More' },
  ];

  return (
    <footer className="fixed bottom-4 left-4 right-4 z-50">
      <div className="max-w-md mx-auto">
        <div className="relative overflow-hidden rounded-[32px] px-4 py-3">
          {/* Glass background layers */}
          <div className="absolute inset-0 bg-white/[0.02] rounded-[32px]" />
          <div 
            className="absolute inset-0 bg-neutral-600/10 rounded-[32px]"
            style={{ 
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)'
            }}
          />
          <div className="absolute inset-0 rounded-[32px] border border-white/20" />
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-between">
            {dockItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-white hover:bg-white/10 h-12 w-12 rounded-2xl transition-all duration-300 hover:scale-110"
                  aria-label={item.label}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};