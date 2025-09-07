import React from "react";
import { Card, CardBody } from "@heroui/react";

interface GlassTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const GlassTitle: React.FC<GlassTitleProps> = ({ 
  title, 
  subtitle,
  className = "" 
}) => {
  return (
    <div className={`w-[382px] flex flex-col items-center gap-[19px] ${className}`}>
      {/* Title with glass background */}
      <div 
        className="w-full py-[19px] px-[67px] flex justify-center items-center rounded-[129px] backdrop-blur-[13px] overflow-hidden"
        style={{
          background: "linear-gradient(0deg, rgba(109, 109, 109, 0.20) 0%, rgba(109, 109, 109, 0.20) 100%), rgba(51, 51, 51, 0.30), #E6E6E6",
          backgroundBlendMode: "normal, saturation, linear-burn",
          boxShadow: "0px 0px 34px #F2F2F2 inset, inset 6.5px 6.5px 1px -7.5px rgba(255, 255, 255, 0.75), inset -6.5px -6.5px 1px -7.5px rgba(255, 255, 255, 0.8), inset 2.2px 2.2px 2.2px -1px rgba(255, 255, 255, 0.75), inset -2.2px -2.2px 2.2px -1px rgba(255, 255, 255, 0.75), inset 0px 0px 2.2px 2.2px rgba(153, 153, 153, 0.15), inset 0px 0px 2.2px 2.2px #999999"
        }}
      >
        <h1 
          className="text-center text-white text-[76px] font-medium"
          style={{ fontFamily: "'SF Pro', sans-serif" }}
        >
          {title}
        </h1>
      </div>
      
      {/* Subtitle */}
      <p 
        className="text-center text-white text-[38px] font-normal w-full"
        style={{ fontFamily: "'SF Pro', sans-serif" }}
      >
        {subtitle}
      </p>
    </div>
  );
};