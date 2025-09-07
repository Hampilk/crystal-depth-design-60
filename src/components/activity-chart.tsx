import React, { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const chartData = [
  { name: 'Mon', blur: 18, rings: 2 },
  { name: 'Tue', blur: 21, rings: 3 },
  { name: 'Wed', blur: 20, rings: 2 },
  { name: 'Thu', blur: 24, rings: 3 },
  { name: 'Fri', blur: 22, rings: 4 },
  { name: 'Sat', blur: 26, rings: 3 },
  { name: 'Sun', blur: 25, rings: 3 }
];

export const ActivityChart: React.FC = () => {
  // Memoize chart configuration for better performance
  const chartConfig = useMemo(() => ({
    data: chartData,
    margin: { top: 5, right: 5, left: 0, bottom: 5 },
    tooltipStyle: { 
      backgroundColor: 'rgba(17,24,39,0.85)', 
      borderColor: 'rgba(255,255,255,0.12)',
      borderWidth: 1,
      borderRadius: 8,
      color: '#e5e7eb',
      padding: 10
    },
    labelStyle: { color: '#fff', fontWeight: 600 },
    axisStyle: {
      fill: 'rgba(229,231,235,0.8)', 
      fontSize: 11
    }
  }), []);

  return (
    <div className="h-40" role="img" aria-label="Glass activity chart showing blur and rings metrics">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartConfig.data}
          margin={chartConfig.margin}
        >
          <defs>
            <linearGradient id="blurGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(56,189,248,0.9)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="rgba(56,189,248,0.9)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="ringsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(129,140,248,0.9)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="rgba(129,140,248,0.9)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={chartConfig.axisStyle}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={chartConfig.axisStyle}
          />
          <Tooltip 
            contentStyle={chartConfig.tooltipStyle}
            labelStyle={chartConfig.labelStyle}
          />
          <Area 
            type="monotone" 
            dataKey="blur" 
            stroke="rgba(56,189,248,0.9)" 
            fillOpacity={1}
            fill="url(#blurGradient)" 
            strokeWidth={2}
            activeDot={{ r: 4, stroke: 'rgba(56,189,248,1)', strokeWidth: 2, fill: '#000' }}
            animationDuration={1000}
            animationEasing="ease-out"
          />
          <Area 
            type="monotone" 
            dataKey="rings" 
            stroke="rgba(129,140,248,0.9)" 
            fillOpacity={1}
            fill="url(#ringsGradient)" 
            strokeWidth={2}
            activeDot={{ r: 4, stroke: 'rgba(129,140,248,1)', strokeWidth: 2, fill: '#000' }}
            animationDuration={1000}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};