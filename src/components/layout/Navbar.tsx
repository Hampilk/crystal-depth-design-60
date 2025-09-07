import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Home, BarChart3, Folder, Bookmark, Search } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark },
];

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <nav className="fixed top-20 left-4 right-4 z-40 md:top-24">
      <div className="max-w-7xl mx-auto">
        <GlassCard variant="raszter" className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Main Navigation */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "raster" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab(item.id)}
                    className={`gap-2 ${isActive ? 'raszter-chip' : ''}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Button>
                );
              })}
            </div>

            {/* Search */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </nav>
  );
};