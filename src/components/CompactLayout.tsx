import { Search } from 'lucide-react';
import TabNavigation from './TabNavigation';
import CommandBar from './CommandBar';
import LayeredGlassCard from './LayeredGlassCard';

interface CompactLayoutProps {
  activeTopTab: string;
  activeBottomTab: string;
  onTopTabChange: (tabId: string) => void;
  onBottomTabChange: (tabId: string) => void;
}

const CompactLayout = ({ 
  activeTopTab, 
  activeBottomTab, 
  onTopTabChange, 
  onBottomTabChange 
}: CompactLayoutProps) => {
  return (
    <section className="relative flex flex-col gap-6 items-center justify-center transition">
      {/* Top Toolbar */}
      <TabNavigation 
        activeTab={activeTopTab}
        onTabChange={onTopTabChange}
        variant="top"
      />

      {/* Command Bar */}
      <CommandBar />

      {/* Main Card with Layered Glass Effect */}
      <LayeredGlassCard>
        <div className="text-center text-white">
          <h2 className="text-xl font-semibold mb-2">Liquid Glass</h2>
          <p className="text-sm opacity-80">Beautiful glassmorphism design</p>
        </div>
      </LayeredGlassCard>

      {/* Bottom Tab Bar */}
      <footer className="sticky bottom-4 z-10 mx-auto w-full max-w-2xl">
        <TabNavigation 
          activeTab={activeBottomTab}
          onTabChange={onBottomTabChange}
          variant="bottom"
        />
      </footer>
    </section>
  );
};

export default CompactLayout;