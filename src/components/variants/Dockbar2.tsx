import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, Search, Heart, User, Menu, Plus } from 'lucide-react';

export const Dockbar2: React.FC = () => {
  const dockItems = [
    { icon: Home, label: 'Home', isActive: true },
    { icon: Search, label: 'Search', isActive: false },
    { icon: Plus, label: 'Create', isActive: false, isSpecial: true },
    { icon: Heart, label: 'Favorites', isActive: false },
    { icon: User, label: 'Profile', isActive: false },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-lg mx-auto px-4 py-3">
        <div className="flex items-center justify-around">
          {dockItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-12 w-12 rounded-xl transition-all duration-300 ${
                    item.isSpecial 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                      : item.isActive 
                        ? 'text-blue-400 bg-blue-400/10' 
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label={item.label}
                >
                  <Icon className={`h-5 w-5 ${item.isSpecial ? 'text-white' : ''}`} />
                </Button>
                <span className={`text-xs mt-1 ${
                  item.isActive ? 'text-blue-400' : 'text-white/60'
                }`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};