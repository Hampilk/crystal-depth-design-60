import React from "react";
import { Icon } from "@iconify/react";

interface TabItem {
  key: string;
  label: string;
  icon: string;
}

interface GlassTabBarProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export const GlassTabBar: React.FC<GlassTabBarProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = ""
}) => {
  return (
    <div className={`w-[568px] h-[102px] relative ${className}`}>
      {/* Background */}
      <div 
        className="w-full h-full absolute left-0 top-0 rounded-[129px] backdrop-blur-[13px]"
        style={{
          background: "linear-gradient(0deg, rgba(97, 97, 97, 0.20) 0%, rgba(97, 97, 97, 0.20) 100%), rgba(51, 51, 51, 0.30), #E6E6E6",
          backgroundBlendMode: "normal, saturation, linear-burn",
          boxShadow: "0px 0px 34px #F2F2F2 inset, inset 6.5px 6.5px 1px -7.5px rgba(255, 255, 255, 0.75), inset -6.5px -6.5px 1px -7.5px rgba(255, 255, 255, 0.8), inset 2.2px 2.2px 2.2px -1px rgba(255, 255, 255, 0.75), inset -2.2px -2.2px 2.2px -1px rgba(255, 255, 255, 0.75), inset 0px 0px 2.2px 2.2px rgba(153, 153, 153, 0.15), inset 0px 0px 2.2px 2.2px #999999"
        }}
      />
      
      {/* Tabs Container */}
      <div className="absolute left-[6.5px] right-[6.5px] top-[6.5px] bottom-[6.5px] flex justify-between items-center">
        {tabs.map((tab) => (
          <div 
            key={tab.key} 
            className="w-[155px] h-[116px] relative overflow-hidden"
            onClick={() => onTabChange(tab.key)}
          >
            {/* Active Tab Background */}
            {activeTab === tab.key && (
              <div 
                className="w-full h-full absolute left-0 top-0 rounded-[58px] backdrop-blur-[6.5px]"
                style={{
                  background: "linear-gradient(0deg, rgba(30, 30, 30, 0.25) 0%, rgba(30, 30, 30, 0.25) 100%), rgba(255, 255, 255, 0.04)",
                  backgroundBlendMode: "linear-dodge, normal",
                  boxShadow: "-0.4px -1px 0.3px 1px rgba(255, 255, 255, 0.05) inset, 0px 8.6px 172px rgba(0, 0, 0, 0.2), inset 0.5px 1px 1px 0.5px rgba(255, 255, 255, 0.22)"
                }}
              />
            )}
            
            {/* Tab Content */}
            <div className="absolute left-[19px] top-[21.5px] w-[116.5px] flex flex-col items-center gap-[2px]">
              <div 
                className={`w-full h-[47.5px] text-center flex items-center justify-center text-[37px] ${activeTab === tab.key ? 'text-[#0095FF]' : 'text-white'}`}
                style={{ fontFamily: "'SF Pro', sans-serif" }}
              >
                <Icon icon={tab.icon} />
              </div>
              <div 
                className={`w-full text-center text-[21.5px] font-medium ${activeTab === tab.key ? 'text-[#0095FF]' : 'text-white'}`}
                style={{ fontFamily: "'SF Pro', sans-serif", lineHeight: '26px' }}
              >
                {tab.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};