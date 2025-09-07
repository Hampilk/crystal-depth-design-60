import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const Hero2: React.FC = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 mb-8">
              <span className="text-sm text-white/90 font-medium">✨ Modern UI Framework</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build with
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Liquid Glass
              </span>
            </h1>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              The next generation UI framework that combines glass morphism with 
              modern design principles. Create stunning interfaces that feel alive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-white/60">Components</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/60">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-sm text-white/60">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" />
              <div className="absolute inset-4 bg-gradient-to-tr from-pink-500/20 to-cyan-500/20 rounded-full blur-2xl" />
              
              {/* Main glass card */}
              <div className="relative w-full h-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">LG</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Glass UI</h3>
                  <p className="text-white/60 text-sm">Beautiful & Responsive</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-400/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-purple-400/30 rounded-full blur-lg animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};