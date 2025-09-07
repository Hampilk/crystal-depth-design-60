import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero1: React.FC = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col items-center justify-center text-center min-h-[400px] overflow-hidden rounded-[48px]">
          {/* Glass background layers */}
          <div className="absolute inset-0 bg-white/[0.01] rounded-[48px]" />
          <div 
            className="absolute inset-0 bg-neutral-600/5 rounded-[48px]"
            style={{ 
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)'
            }}
          />
          <div className="absolute inset-0 rounded-[48px] border border-white/10" />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-[48px]" />
          
          {/* Floating elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/90">Glass Morphism UI System</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Liquid Glass
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Design System
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience depth, blur, and subtle light in perfect harmony. 
              Create beautiful interfaces with our advanced glass morphism components.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10 px-8">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};