import React, { useMemo } from 'react';
import { ChartLine, Wand2 } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { useOptimizedChart } from '@/hooks/useOptimizedChart';

const ChartCard = React.memo(() => {
  const chartData = useMemo(() => ({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Blur',
        data: [18, 21, 20, 24, 22, 26, 25],
        tension: 0.35,
        fill: true,
        backgroundColor: 'rgba(56,189,248,0.12)',
        borderColor: 'rgba(56,189,248,0.9)',
        pointRadius: 0,
        borderWidth: 2
      },
      {
        label: 'Rings',
        data: [2, 3, 2, 3, 4, 3, 3],
        tension: 0.35,
        fill: true,
        backgroundColor: 'rgba(129,140,248,0.12)',
        borderColor: 'rgba(129,140,248,0.9)',
        pointRadius: 0,
        borderWidth: 2
      }
    ]
  }), []);

  useOptimizedChart({
    data: chartData,
    canvasId: 'glassChart'
  });

  return (
    <GlassCard className="relative overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-semibold tracking-tight text-white">Glass Activity</h4>
            <p className="text-xs text-neutral-300">Rings & blur intensity over time</p>
          </div>
          <GlassCard 
            variant="small" 
            className="grid h-10 w-10 place-items-center rounded-xl"
            aria-label="Chart icon"
          >
            <ChartLine className="h-5 w-5" strokeWidth={1.5} />
          </GlassCard>
        </div>
        
        <div className="mt-4">
          <div className="h-40">
            <canvas 
              id="glassChart"
              className="h-full w-full"
              aria-label="Glass activity chart showing blur and rings intensity over the week"
              role="img"
            />
          </div>
        </div>
        
        <div className="mt-4 flex items-center gap-3 text-xs text-neutral-300" role="list" aria-label="Chart legend">
          <span className="inline-flex items-center gap-2" role="listitem">
            <span 
              className="h-2 w-2 rounded-full bg-sky-400" 
              aria-hidden="true"
            />
            Blur
          </span>
          <span className="inline-flex items-center gap-2" role="listitem">
            <span 
              className="h-2 w-2 rounded-full bg-indigo-400" 
              aria-hidden="true"
            />
            Rings
          </span>
        </div>
      </div>

      <button 
        className="absolute -bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full glass-button animate-scale-hover"
        aria-label="Open chart actions menu"
      >
        <Wand2 className="h-5 w-5" strokeWidth={1.5} />
      </button>
    </GlassCard>
  );
});

export default ChartCard;