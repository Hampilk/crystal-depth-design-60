import { useCallback, useEffect, useRef, useMemo } from 'react';

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }>;
}

interface UseOptimizedChartProps {
  data: ChartData;
  options?: any;
  canvasId: string;
}

export const useOptimizedChart = ({ data, options, canvasId }: UseOptimizedChartProps) => {
  const chartRef = useRef<any>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const chartOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        intersect: false,
        mode: 'index',
        backgroundColor: 'rgba(17,24,39,0.90)',
        borderColor: 'rgba(255,255,255,0.12)',
        borderWidth: 1,
        titleColor: '#fff',
        bodyColor: '#e5e7eb',
        padding: 12,
        cornerRadius: 8,
      }
    },
    scales: {
      x: {
        grid: { 
          color: 'rgba(255,255,255,0.06)',
          drawBorder: false
        },
        ticks: { 
          color: 'rgba(229,231,235,0.8)', 
          font: { size: 11 },
          padding: 8
        }
      },
      y: {
        grid: { 
          color: 'rgba(255,255,255,0.06)',
          drawBorder: false
        },
        ticks: { 
          color: 'rgba(229,231,235,0.8)', 
          font: { size: 11 },
          precision: 0,
          padding: 8
        }
      }
    },
    animation: {
      duration: 750,
      easing: 'easeInOutQuart'
    },
    ...options
  }), [options]);

  const initChart = useCallback(async () => {
    if (!canvasRef.current) return;

    // Dynamic import for better code splitting
    const { Chart, registerables } = await import('chart.js');
    Chart.register(...registerables);

    // Destroy existing chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Set high DPI scaling
    const devicePixelRatio = window.devicePixelRatio || 1;
    const rect = canvasRef.current.getBoundingClientRect();
    
    canvasRef.current.width = rect.width * devicePixelRatio;
    canvasRef.current.height = rect.height * devicePixelRatio;
    
    ctx.scale(devicePixelRatio, devicePixelRatio);
    canvasRef.current.style.width = rect.width + 'px';
    canvasRef.current.style.height = rect.height + 'px';

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data,
      options: chartOptions
    });
  }, [data, chartOptions]);

  const updateChart = useCallback((newData: ChartData) => {
    if (chartRef.current) {
      chartRef.current.data = newData;
      chartRef.current.update('resize');
    }
  }, []);

  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    canvasRef.current = canvas;
    
    if (canvas) {
      initChart();
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [canvasId, initChart]);

  useEffect(() => {
    updateChart(data);
  }, [data, updateChart]);

  return {
    chartRef,
    canvasRef,
    updateChart
  };
};