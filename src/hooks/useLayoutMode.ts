import { useState, useCallback, useEffect } from 'react';

type LayoutMode = 'compact' | 'wide';

interface UseLayoutModeReturn {
  viewMode: LayoutMode;
  setViewMode: (mode: LayoutMode) => void;
  toggleViewMode: () => void;
  isCompact: boolean;
  isWide: boolean;
}

export const useLayoutMode = (initialMode: LayoutMode = 'compact'): UseLayoutModeReturn => {
  const [viewMode, setViewModeState] = useState<LayoutMode>(() => {
    // Restore from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('liquidGlass-layoutMode');
      return (saved as LayoutMode) || initialMode;
    }
    return initialMode;
  });

  const setViewMode = useCallback((mode: LayoutMode) => {
    setViewModeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('liquidGlass-layoutMode', mode);
    }
  }, []);

  const toggleViewMode = useCallback(() => {
    setViewMode(viewMode === 'compact' ? 'wide' : 'compact');
  }, [viewMode, setViewMode]);

  // Announce layout changes for screen readers
  useEffect(() => {
    const announcement = `Layout switched to ${viewMode} mode`;
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = announcement;
    
    document.body.appendChild(liveRegion);
    
    const timeout = setTimeout(() => {
      document.body.removeChild(liveRegion);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      if (document.body.contains(liveRegion)) {
        document.body.removeChild(liveRegion);
      }
    };
  }, [viewMode]);

  return {
    viewMode,
    setViewMode,
    toggleViewMode,
    isCompact: viewMode === 'compact',
    isWide: viewMode === 'wide'
  };
};