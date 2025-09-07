import React from 'react';
import { useComponentVariants } from '@/hooks/useComponentVariants';
import { VariantSelector } from '@/components/VariantSelector';

// Import variant components
import { Header1 } from '@/components/variants/Header1';
import { Header2 } from '@/components/variants/Header2';
import { Navbar1 } from '@/components/variants/Navbar1';
import { Navbar2 } from '@/components/variants/Navbar2';
import { Hero1 } from '@/components/variants/Hero1';
import { Hero2 } from '@/components/variants/Hero2';
import { Content1 } from '@/components/variants/Content1';
import { Content2 } from '@/components/variants/Content2';
import { Dockbar1 } from '@/components/variants/Dockbar1';
import { Dockbar2 } from '@/components/variants/Dockbar2';

interface AppShellProps {
  children?: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const { variants } = useComponentVariants();

  // Component variant mapping
  const HeaderComponent = variants.header === '1' ? Header1 : Header2;
  const NavbarComponent = variants.navbar === '1' ? Navbar1 : Navbar2;
  const HeroComponent = variants.hero === '1' ? Hero1 : Hero2;
  const ContentComponent = variants.content === '1' ? Content1 : Content2;
  const DockbarComponent = variants.dockbar === '1' ? Dockbar1 : Dockbar2;

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Variant Selector - Always visible */}
      <VariantSelector />
      
      {/* Layer 1: Header - Top fixed layer */}
      <HeaderComponent />
      
      {/* Layer 2: Navbar - Secondary navigation */}
      <NavbarComponent />
      
      {/* Layer 3: Hero Section */}
      <HeroComponent />
      
      {/* Layer 4: Main Content Area */}
      {children || <ContentComponent />}
      
      {/* Layer 5: Dockbar - Bottom fixed layer */}
      <DockbarComponent />
    </div>
  );
};