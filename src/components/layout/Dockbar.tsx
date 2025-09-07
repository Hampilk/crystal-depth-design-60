import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { 
  Home, 
  Search, 
  Bell, 
  MessageCircle, 
  Plus, 
  Settings,
  User,
  Bookmark
} from 'lucide-react';

const dockItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'search', icon: Search, label: 'Search' },
  { id: 'notifications', icon: Bell, label: 'Notifications', badge: 3 },
  { id: 'messages', icon: MessageCircle, label: 'Messages', badge: 12 },
  { id: 'create', icon: Plus, label: 'Create', featured: true },
  { id: 'bookmarks', icon: Bookmark, label: 'Bookmarks' },
  { id: 'settings', icon: Settings, label: 'Settings' },
  { id: 'profile', icon: User, label: 'Profile' },
];

export const Dockbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="max-w-2xl mx-auto">
        <GlassCard variant="raszter" className="px-4 py-3">
          <div className="flex items-center justify-center gap-2">
            {dockItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              const isFeatured = item.featured;
              
              return (
                <div key={item.id} className="relative">
                  <Button
                    variant={isActive ? "raster" : "ghost"}
                    size={isFeatured ? "lg" : "icon"}
                    onClick={() => setActiveItem(item.id)}
                    className={`
                      relative transition-all duration-300
                      ${isFeatured ? 'raszter-button scale-110' : ''}
                      ${isActive && !isFeatured ? 'raszter-chip' : ''}
                      hover:scale-105
                    `}
                  >
                    <Icon className={`${isFeatured ? 'h-5 w-5' : 'h-4 w-4'}`} />
                    {isFeatured && <span className="hidden sm:inline ml-2">Create</span>}
                  </Button>
                  
                  {/* Badge for notifications */}
                  {item.badge && (
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {item.badge > 9 ? '9+' : item.badge}
                    </div>
                  )}
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="raszter-chip px-2 py-1 text-xs whitespace-nowrap">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};