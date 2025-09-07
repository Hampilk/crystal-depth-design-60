import React from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Content } from './Content';
import { Dockbar } from './Dockbar';

interface AppShellProps {
  children?: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Layer 1: Header - Top fixed layer */}
      <Header />
      
      {/* Layer 2: Navbar - Secondary navigation */}
      <Navbar />
      
      {/* Layer 3: Hero Section */}
      <Hero />
      
      {/* Layer 4: Main Content Area */}
      <Content>
        {children}
      </Content>
      
      {/* Layer 5: Dockbar - Bottom fixed layer */}
      <Dockbar />
    </div>
  );
};