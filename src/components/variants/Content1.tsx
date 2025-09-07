import React, { useState } from 'react';
import { CompactLayout } from '@/components/compact-layout';
import { WideLayout } from '@/components/wide-layout';
import { useLayoutMode } from '@/hooks/useLayoutMode';

export const Content1: React.FC = () => {
  const { viewMode } = useLayoutMode();
  const [activeTab, setActiveTab] = useState('home');

  return (
    <main className="flex-1 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
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
      </div>
    </main>
  );
};