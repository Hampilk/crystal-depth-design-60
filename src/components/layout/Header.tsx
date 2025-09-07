import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Menu, Settings, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <GlassCard variant="raszter" className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="raszter-chip w-10 h-10 rounded-xl flex items-center justify-center">
                <span className="text-lg font-bold text-gradient-radial">L</span>
              </div>
              <h1 className="text-xl font-bold hidden sm:block">Lovable</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <Button variant="raster" size="sm">Dashboard</Button>
              <Button variant="ghost" size="sm">Projects</Button>
              <Button variant="ghost" size="sm">Analytics</Button>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="raster" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </header>
  );
};