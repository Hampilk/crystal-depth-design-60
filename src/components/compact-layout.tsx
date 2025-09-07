import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import { GlassCard } from "./glass-card";
import { GlassButton } from "./glass-button";
import { TabItem } from "./tab-item";
import { GlassTitle } from "./glass-title";
import { GlassTabBar } from "./glass-tab-bar";

interface CompactLayoutProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const CompactLayout = React.memo<CompactLayoutProps>(({ 
  activeTab,
  onTabChange
}) => {
  // Define tab items for the new tab bar
  const tabItems = [
    { key: "tab1", label: "Tab1", icon: "lucide:diamond" },
    { key: "tab2", label: "Tab2", icon: "lucide:circle" },
    { key: "tab3", label: "Tab3", icon: "lucide:triangle" },
    { key: "tab4", label: "Tab4", icon: "lucide:settings" },
    { key: "tab5", label: "Tab5", icon: "lucide:square" }
  ];

  return (
    <section className="relative grid gap-6 transition" aria-label="Compact layout view">
      {/* Top Toolbar - Updated to use GlassTabBar */}
      <div className="flex items-center justify-between gap-3">
        <GlassTabBar 
          tabs={tabItems}
          activeTab={activeTab}
          onTabChange={onTabChange}
          className="flex-1"
        />

        {/* Search Button - Unchanged */}
        <div className="grid h-[102px] w-[102px] place-items-center rounded-full overflow-hidden"
             style={{
               background: "linear-gradient(0deg, rgba(96.77, 96.77, 96.77, 0.20) 0%, rgba(96.77, 96.77, 96.77, 0.20) 100%), rgba(51, 51, 51, 0.30), #E6E6E6",
               backgroundBlendMode: "normal, saturation, linear-burn",
               boxShadow: "0px 0px 34px #F2F2F2 inset",
               backdropFilter: "blur(13px)"
             }}
        >
          <div className="text-center flex flex-col justify-center items-center">
            <Icon icon="lucide:search" className="h-11 w-11 text-white" />
          </div>
        </div>
      </div>

      {/* Command Bar - Unchanged */}
      <div className="mx-auto flex w-full max-w-lg items-center justify-center gap-3 rounded-full px-4 py-2 ring-1 ring-white/10"
           style={{
             background: "rgba(255, 255, 255, 0.01)",
             borderRadius: "42px",
             backdropFilter: "blur(45px)",
             boxShadow: "0px 0px 3px 0px rgba(255, 255, 255, 0.5)",
             border: "1px solid rgba(255, 255, 255, 0.5)"
           }}
      >
        <Button 
          disableRipple
          disableAnimation
          className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white transition" 
          style={{ background: "rgba(0,0,0,0.1)", borderRadius: "46px", padding: "8px 36px 6px" }}
        >
          <Icon icon="lucide:command" className="h-8 w-8" />
          <span className="text-sm font-medium">Command</span>
        </Button>
        <span className="h-5 w-px bg-white/10"></span>
        <Button 
          disableRipple
          disableAnimation
          className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-white transition"
        >
          <Icon icon="lucide:inbox" className="h-8 w-8" />
          <span className="text-sm font-medium">Inbox</span>
        </Button>
      </div>

      {/* Main Card with Layers - Updated to include GlassTitle */}
      <div className="relative mx-auto grid w-full max-w-xl place-items-center">
        {/* Decorative rings */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10" 
               style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.5)" }}></div>
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10 opacity-70" 
               style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.45)" }}></div>
          <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-white/10 opacity-40" 
               style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.4)" }}></div>
        </div>

        <GlassCard innerGlow className="relative aspect-square w-full">
          {/* Replace text content with GlassTitle */}
          <div className="flex h-full flex-col items-center justify-center text-center p-6">
            <GlassTitle 
              title="iOS 26" 
              subtitle="Liquid Glass Effect" 
              className="mb-6"
            />

            {/* Small stat chips */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full px-3 py-1 text-xs font-medium text-neutral-200 ring-1 ring-white/10 backdrop-blur-sm" 
                    style={{ background: "rgba(255,255,255,0.06)" }}>Blur 25px</span>
              <span className="rounded-full px-3 py-1 text-xs font-medium text-neutral-200 ring-1 ring-white/10 backdrop-blur-sm" 
                    style={{ background: "rgba(255,255,255,0.06)" }}>Rings</span>
              <span className="rounded-full px-3 py-1 text-xs font-medium text-neutral-200 ring-1 ring-white/10 backdrop-blur-sm" 
                    style={{ background: "rgba(255,255,255,0.06)" }}>Inner Shadows</span>
            </div>
          </div>
        </GlassCard>

        {/* Floating Action - Unchanged */}
        <GlassButton 
          className="absolute -bottom-7" 
          size="lg" 
          isRound
          isPulse
        >
          <Icon icon="lucide:wand-2" className="h-6 w-6" />
        </GlassButton>
      </div>

      {/* Bottom Tab Bar - Updated to use GlassTabBar */}
      <footer className="sticky bottom-4 z-10 mx-auto w-full max-w-2xl">
        <GlassTabBar 
          tabs={[
            { key: "home", label: "Home", icon: "lucide:diamond" },
            { key: "focus", label: "Focus", icon: "lucide:circle" },
            { key: "create", label: "Create", icon: "lucide:triangle" },
            { key: "settings", label: "Settings", icon: "lucide:settings" },
            { key: "more", label: "More", icon: "lucide:square" }
          ]}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      </footer>
    </section>
  );
});

// Add display name for debugging
CompactLayout.displayName = 'CompactLayout';