import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { CompactLayout } from '@/components/compact-layout';
import { WideLayout } from '@/components/wide-layout';
import { useLayoutMode } from '@/hooks/useLayoutMode';

interface ContentProps {
  children?: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  const { viewMode } = useLayoutMode();
  const [activeTab, setActiveTab] = useState('home');

  return (
    <main className="flex-1 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        {children || (
          <div className="relative min-h-[calc(100vh-200px)]">
            {/* Wide Layout */}
            {viewMode === 'wide' && (
              <WideLayout 
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            )}
            
            {/* Compact Layout */}
            {viewMode === 'compact' && (
              <CompactLayout 
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            )}
          </div>
        )}
      </div>
    </main>
  );
};