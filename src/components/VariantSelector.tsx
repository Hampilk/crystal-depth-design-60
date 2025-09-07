import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useComponentVariants } from '@/hooks/useComponentVariants';
import { COMPONENT_VARIANTS, VariantState } from '@/types/variants';
import { Settings, RotateCcw, Eye, EyeOff } from 'lucide-react';

export const VariantSelector: React.FC = () => {
  const { variants, setComponentVariant, resetAllVariants } = useComponentVariants();
  const [isVisible, setIsVisible] = useState(false);

  if (!isVisible) {
    return (
      <Button
        onClick={() => setIsVisible(true)}
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-[60] bg-black/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/10"
        aria-label="Open variant selector"
      >
        <Settings className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-[60] w-80">
      <Card className="bg-black/40 backdrop-blur-xl border-white/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white text-lg">Component Variants</CardTitle>
            <div className="flex gap-2">
              <Button
                onClick={resetAllVariants}
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/10"
                aria-label="Reset all variants"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => setIsVisible(false)}
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/10"
                aria-label="Close variant selector"
              >
                <EyeOff className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(COMPONENT_VARIANTS).map(([componentKey, componentVariants]) => (
            <div key={componentKey} className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-white capitalize">
                  {componentKey}
                </h4>
                <Badge variant="secondary" className="text-xs">
                  {variants[componentKey as keyof VariantState]}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(componentVariants).map(([variantKey, variantConfig]) => (
                  <Button
                    key={variantKey}
                    onClick={() => setComponentVariant(componentKey as keyof VariantState, variantKey as '1' | '2')}
                    variant={variants[componentKey as keyof VariantState] === variantKey ? 'default' : 'ghost'}
                    size="sm"
                    className={`h-auto p-3 flex flex-col items-start text-left ${
                      variants[componentKey as keyof VariantState] === variantKey
                        ? 'bg-white/20 text-white border-white/40'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="font-medium text-xs">{variantConfig.name}</span>
                    <span className="text-xs opacity-80 mt-1 leading-tight">
                      {variantConfig.description}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          ))}
          
          <div className="pt-3 border-t border-white/10">
            <p className="text-xs text-white/60">
              Switch between different component variants to see various design approaches.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};