import React from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <GlassCard variant="raszter" className="p-8 md:p-12 text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 raszter-chip px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Raster Design System</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-radial">
            Build Beautiful
            <br />
            <span className="text-primary">Glass Interfaces</span>
          </h1>

          {/* Hero Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create stunning, responsive web applications with our advanced glass morphism design system. 
            Enhanced with raster effects for that perfect Photoshop-like appearance.
          </p>

          {/* Hero Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="raster" size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="lg" className="gap-2">
              <Zap className="h-4 w-4" />
              View Examples
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { label: 'Components', value: '50+' },
              { label: 'Themes', value: '12' },
              { label: 'Satisfied Users', value: '10K+' }
            ].map((stat, index) => (
              <div key={index} className="raszter-surface p-4 rounded-2xl">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};