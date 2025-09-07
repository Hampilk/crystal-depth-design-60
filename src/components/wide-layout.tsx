import React from "react";
import { Icon } from "@iconify/react";
import { GlassCard } from "./glass-card";
import { GlassButton } from "./glass-button";
import { TabItem } from "./tab-item";
import { ActivityChart } from "./activity-chart";

interface WideLayoutProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

// Memoize the WideLayout component for better performance
export const WideLayout = React.memo<WideLayoutProps>(({ 
  activeTab,
  onTabChange
}) => {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-12" aria-label="Wide layout view">
      {/* Left Sidebar */}
      <aside className="order-2 lg:order-1 lg:col-span-3">
        <div className="rounded-3xl p-2 ring-1 ring-white/10 glass-nav">
          <div className="flex flex-col gap-1">
            {/* Sidebar items */}
            <TabItem 
              icon={<Icon icon="lucide:diamond" className="h-5 w-5" />}
              label="Overview"
              isActive={activeTab === "overview"}
              onClick={() => onTabChange("overview")}
              isVertical
            />
            <TabItem 
              icon={<Icon icon="lucide:inbox" className="h-5 w-5" />}
              label="Inbox"
              isActive={activeTab === "inbox"}
              onClick={() => onTabChange("inbox")}
              isVertical
            />
            <TabItem 
              icon={<Icon icon="lucide:layers" className="h-5 w-5" />}
              label="Layers"
              isActive={activeTab === "layers"}
              onClick={() => onTabChange("layers")}
              isVertical
            />
            <TabItem 
              icon={<Icon icon="lucide:settings" className="h-5 w-5" />}
              label="Settings"
              isActive={activeTab === "settings"}
              onClick={() => onTabChange("settings")}
              isVertical
            />
          </div>
        </div>
      </aside>

      {/* Center Stage */}
      <section className="order-1 lg:order-2 lg:col-span-6">
        <div className="grid gap-6">
          {/* Layered glass card (hero) */}
          <GlassCard>
            {/* Rings */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-50 glow-indigo"></div>
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full opacity-40 glow-green"></div>

            <div className="relative p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Liquid Glass</h2>
                  <p className="mt-1 text-sm text-neutral-300">Mimicking depth with blur, rings and inner light</p>
                </div>
                <GlassButton>
                  <Icon icon="lucide:sparkles" className="h-5 w-5" />
                </GlassButton>
              </div>

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl p-3 text-center ring-1 ring-white/10 backdrop-blur-sm glass-nav">
                  <div className="text-xl font-semibold tracking-tight text-white">25px</div>
                  <div className="text-[11px] text-neutral-400">Backdrops</div>
                </div>
                <div className="rounded-2xl p-3 text-center ring-1 ring-white/10 backdrop-blur-sm glass-nav">
                  <div className="text-xl font-semibold tracking-tight text-white">3</div>
                  <div className="text-[11px] text-neutral-400">Rings</div>
                </div>
                <div className="rounded-2xl p-3 text-center ring-1 ring-white/10 backdrop-blur-sm glass-nav">
                  <div className="text-xl font-semibold tracking-tight text-white">2</div>
                  <div className="text-[11px] text-neutral-400">Inner shadows</div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Secondary glass card */}
          <GlassCard>
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">Actions</h3>
                  <p className="mt-1 text-sm text-neutral-300">Suggestive states with gentle transitions</p>
                </div>
                <div className="flex items-center gap-2">
                  <GlassButton>
                    <Icon icon="lucide:plus" className="h-5 w-5" />
                  </GlassButton>
                  <GlassButton>
                    <Icon icon="lucide:share-2" className="h-5 w-5" />
                  </GlassButton>
                </div>
              </div>

              {/* Pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                <button className="rounded-full px-3 py-1.5 text-xs font-medium text-neutral-200 ring-1 ring-white/10 transition hover:ring-white/20" 
                       style={{ background: "rgba(255,255,255,0.07)" }}>Hover</button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium text-neutral-200 ring-1 ring-white/10 transition hover:ring-white/20" 
                       style={{ background: "rgba(255,255,255,0.07)" }}>Focus</button>
                <button className="rounded-full px-3 py-1.5 text-xs font-medium text-neutral-200 ring-1 ring-white/10 transition hover:ring-white/20" 
                       style={{ background: "rgba(255,255,255,0.07)" }}>Active</button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Right Column with Chart */}
      <aside className="order-3 lg:col-span-3">
        <GlassCard ariaLabel="Glass activity statistics">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold tracking-tight text-white">Glass Activity</h4>
                <p className="text-xs text-neutral-300">Rings &amp; blur intensity over time</p>
              </div>
              <GlassButton>
                <Icon icon="lucide:chart-line" className="h-5 w-5" />
              </GlassButton>
            </div>
            
            {/* Chart */}
            <div className="mt-4">
              <ActivityChart />
            </div>
            
            {/* Legend */}
            <div className="mt-4 flex items-center gap-3 text-xs text-neutral-300">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "rgba(56,189,248,0.9)" }}></span> Blur
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "rgba(129,140,248,0.9)" }}></span> Rings
              </span>
            </div>
          </div>
        </GlassCard>

        {/* Floating Action (wide) */}
        <div className="mt-6 flex justify-end">
          <GlassButton 
            size="lg" 
            isRound
            isPulse
          >
            <Icon icon="lucide:wand-2" className="h-5 w-5" />
          </GlassButton>
        </div>
      </aside>
    </section>
  );
});

// Add display name for debugging
WideLayout.displayName = 'WideLayout';