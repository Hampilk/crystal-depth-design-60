import React from 'react';
import { Diamond, Circle, Triangle, Settings, Search, Square } from 'lucide-react';

interface TabItem {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
}

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: 'top' | 'bottom';
}

const topTabs: TabItem[] = [
  { id: 'tab1', icon: Diamond, label: 'Tab1' },
  { id: 'tab2', icon: Circle, label: 'Tab2' },
  { id: 'tab3', icon: Triangle, label: 'Tab3' },
  { id: 'tab4', icon: Settings, label: 'Tab4' },
];

const bottomTabs: TabItem[] = [
  { id: 'home', icon: Diamond, label: 'Home' },
  { id: 'focus', icon: Circle, label: 'Focus' },
  { id: 'create', icon: Triangle, label: 'Create' },
  { id: 'settings', icon: Settings, label: 'Settings' },
  { id: 'more', icon: Square, label: 'More' },
];

const TabNavigation = ({ activeTab, onTabChange, variant = 'top' }: TabNavigationProps) => {
  const tabs = variant === 'top' ? topTabs : bottomTabs;
  
  return (
    <section className="flex items-center gap-3 w-full max-w-[587px]">
      {/* Tab Bar Container with Advanced Glassmorphism */}
      <nav 
        aria-label={variant === 'top' ? 'Primary' : 'Bottom'} 
        className="relative flex-1 flex items-center justify-between px-[6.57px] py-[6.57px] h-[101.77px] rounded-[42px] overflow-hidden"
      >
        {/* Multiple background layers for depth */}
        <div className="absolute inset-0 bg-white/[0.01] rounded-[42px]" />
        <div 
          className="absolute inset-0 bg-white/[0.01] rounded-[42px]"
          style={{ 
            mixBlendMode: 'normal',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-neutral-300/50 rounded-[42px]" />
        <div 
          className="absolute inset-0 bg-neutral-600/10 rounded-[42px]"
          style={{ 
            backdropFilter: 'blur(45px)',
            WebkitBackdropFilter: 'blur(45px)'
          }}
        />
        
        {/* Inner container with subtle blur */}
        <div 
          className="absolute inset-[6px] bg-neutral-300/80 rounded-[36px]"
          style={{ filter: 'blur(3px)' }}
        />
        
        {/* Overlay effects */}
        <div 
          className="absolute inset-0 bg-black/10 rounded-[42px]"
          style={{ 
            mixBlendMode: 'overlay',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
        />
        <div 
          className="absolute inset-0 rounded-[42px]"
          style={{ 
            mixBlendMode: 'multiply',
            filter: 'blur(4px)'
          }}
        />
        <div 
          className="absolute inset-0 rounded-[42px] border border-white/20"
          style={{ 
            mixBlendMode: 'plus-lighter',
            filter: 'blur(1.5px)'
          }}
        />

        {/* Tab buttons */}
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="relative z-10 flex flex-col items-center justify-center w-[155.39px] h-[88.64px] overflow-hidden transition-all duration-300 rounded-[46px] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-selected={isActive}
            >
              {/* Active state background with glassmorphism */}
              {isActive && (
                <div className="absolute inset-0 rounded-[46px] overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 rounded-[46px]" />
                  <div 
                    className="absolute inset-0 bg-white/10 rounded-[46px]"
                    style={{ 
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)'
                    }}
                  />
                  <div className="absolute inset-0 rounded-[46px] border border-white/30" />
                </div>
              )}
              
              <div className="relative z-10 flex flex-col items-center justify-center gap-[2.16px]">
                <Icon 
                  className={`w-[36.69px] h-[36.69px] transition-all duration-300 drop-shadow-sm ${
                    isActive ? 'text-sky-400' : 'text-white/90'
                  }`} 
                  strokeWidth={isActive ? 2 : 1.5} 
                />
                <span 
                  className={`text-[21.58px] font-[510] leading-[25.90px] transition-all duration-300 drop-shadow-sm ${
                    isActive ? 'text-sky-400' : 'text-white/90'
                  }`}
                  style={{ 
                    fontFamily: 'SF Pro, -apple-system, system-ui, sans-serif',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {tab.label}
                </span>
              </div>
              
              {/* Hover effect */}
              <div 
                className="absolute inset-0 rounded-[46px] bg-white/5 opacity-0 transition-opacity duration-300 hover:opacity-100"
                style={{ 
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              />
            </button>
          );
        })}
      </nav>
      
      {/* Search Button with Advanced Glassmorphism */}
      <button className="relative w-[101.77px] h-[101.77px] rounded-[42px] overflow-hidden transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
        {/* Background layers */}
        <div className="absolute inset-0 bg-white/[0.01] rounded-[42px]" />
        <div 
          className="absolute inset-0 bg-white/[0.01] rounded-[42px]"
          style={{ 
            mixBlendMode: 'normal',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-neutral-300/50 rounded-[42px]" />
        <div 
          className="absolute inset-0 bg-neutral-600/10 rounded-[42px]"
          style={{ 
            backdropFilter: 'blur(45px)',
            WebkitBackdropFilter: 'blur(45px)'
          }}
        />
        
        {/* Inner blur layer */}
        <div 
          className="absolute inset-[6px] bg-neutral-300/80 rounded-[36px]"
          style={{ filter: 'blur(3px)' }}
        />
        
        {/* Overlay effects */}
        <div 
          className="absolute inset-0 bg-black/10 rounded-[42px]"
          style={{ 
            mixBlendMode: 'overlay',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
        />
        <div 
          className="absolute inset-0 rounded-[42px]"
          style={{ 
            mixBlendMode: 'multiply',
            filter: 'blur(4px)'
          }}
        />
        <div 
          className="absolute inset-0 rounded-[42px] border border-white/20"
          style={{ 
            mixBlendMode: 'plus-lighter',
            filter: 'blur(1.5px)'
          }}
        />

        {/* Search icon */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <Search 
            className="w-[43.16px] h-[43.16px] text-white drop-shadow-sm transition-transform duration-300 hover:scale-110" 
            strokeWidth={2} 
          />
        </div>
        
        {/* Hover effect */}
        <div 
          className="absolute inset-0 rounded-[42px] bg-white/5 opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{ 
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        />
      </button>

      {/* Enhanced styles for better browser support */}
      <style jsx>{`
        @supports (backdrop-filter: blur(1px)) {
          .glassmorphism-enhanced {
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
          }
        }
        
        @supports not (backdrop-filter: blur(1px)) {
          .glassmorphism-enhanced {
            background: rgba(255, 255, 255, 0.15);
          }
        }
        
        /* Smooth animations */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default TabNavigation;
