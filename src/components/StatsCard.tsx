import { Sparkles, Plus, Share2 } from 'lucide-react';

const StatsCard = () => {
  return (
    <div className="grid gap-6">
      {/* Main Hero Card */}
      <div className="relative overflow-hidden rounded-3xl glass-primary">
        {/* Background rings */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-50"
          style={{ background: 'var(--gradient-radial-purple)' }}
        />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full opacity-40"
          style={{ background: 'var(--gradient-radial-emerald)' }}
        />

        <div className="relative p-8 sm:p-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Liquid Glass</h2>
              <p className="mt-1 text-sm text-neutral-300">Mimicking depth with blur, rings and inner light</p>
            </div>
            <div className="grid h-11 w-11 place-items-center rounded-xl glass-button">
              <Sparkles className="h-5 w-5" strokeWidth={1.5} />
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl p-3 text-center glass-secondary">
              <div className="text-xl font-semibold tracking-tight text-white">25px</div>
              <div className="text-[11px] text-neutral-400">Backdrops</div>
            </div>
            <div className="rounded-2xl p-3 text-center glass-secondary">
              <div className="text-xl font-semibold tracking-tight text-white">3</div>
              <div className="text-[11px] text-neutral-400">Rings</div>
            </div>
            <div className="rounded-2xl p-3 text-center glass-secondary">
              <div className="text-xl font-semibold tracking-tight text-white">2</div>
              <div className="text-[11px] text-neutral-400">Inner shadows</div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions Card */}
      <div className="relative overflow-hidden rounded-3xl glass-primary transition hover:ring-white/20">
        <div className="relative p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">Actions</h3>
              <p className="mt-1 text-sm text-neutral-300">Suggestive states with gentle transitions</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="grid h-10 w-10 place-items-center rounded-xl glass-button animate-scale-hover">
                <Plus className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button className="grid h-10 w-10 place-items-center rounded-xl glass-button animate-scale-hover">
                <Share2 className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Action pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {['Hover', 'Focus', 'Active'].map((action) => (
              <button 
                key={action}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-neutral-200 glass-small animate-scale-hover"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;