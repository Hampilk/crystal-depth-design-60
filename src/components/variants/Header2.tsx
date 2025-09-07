import React from 'react';
import { useLayoutMode } from '@/hooks/useLayoutMode';
import { Menu, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header2: React.FC = () => {
  const { viewMode, setViewMode } = useLayoutMode();
  
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LG</span>
            </div>
            <div className="font-semibold text-lg text-white">Liquid Glass</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" className="text-white hover:bg-white/10">Dashboard</Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">Projects</Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">Analytics</Button>
        </nav>

        {/* Layout Toggle & Actions */}
        <div className="flex items-center gap-4">
          {/* Minimal Layout Toggle */}
          <div className="hidden sm:flex bg-white/10 rounded-full p-1">
            <button
              onClick={() => setViewMode('compact')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                viewMode === 'compact' 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Compact
            </button>
            <button
              onClick={() => setViewMode('wide')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                viewMode === 'wide' 
                  ? 'bg-white text-black' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Wide
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 border border-white/20">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};