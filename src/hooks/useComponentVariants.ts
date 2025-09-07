import { useState, useCallback } from 'react';
import { VariantState, ComponentVariant, DEFAULT_VARIANTS } from '@/types/variants';

export const useComponentVariants = () => {
  const [variants, setVariants] = useState<VariantState>(() => {
    // Load from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('component-variants');
      if (saved) {
        try {
          return { ...DEFAULT_VARIANTS, ...JSON.parse(saved) };
        } catch {
          return DEFAULT_VARIANTS;
        }
      }
    }
    return DEFAULT_VARIANTS;
  });

  const setComponentVariant = useCallback((component: keyof VariantState, variant: ComponentVariant) => {
    setVariants(prev => {
      const newVariants = { ...prev, [component]: variant };
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('component-variants', JSON.stringify(newVariants));
      }
      
      return newVariants;
    });
  }, []);

  const resetAllVariants = useCallback(() => {
    setVariants(DEFAULT_VARIANTS);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('component-variants');
    }
  }, []);

  const setMultipleVariants = useCallback((newVariants: Partial<VariantState>) => {
    setVariants(prev => {
      const updatedVariants = { ...prev, ...newVariants };
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('component-variants', JSON.stringify(updatedVariants));
      }
      
      return updatedVariants;
    });
  }, []);

  return {
    variants,
    setComponentVariant,
    resetAllVariants,
    setMultipleVariants
  };
};