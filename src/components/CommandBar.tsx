import { Command, Inbox, Search } from 'lucide-react';

const CommandBar = () => {
  return (
    <section className="w-[258px] h-[84px] glass-command-bar relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute w-[325px] h-[132px] -left-[33px] -top-[24px] backdrop-filter backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[rgba(217,217,217,0.50)] rounded-[42px]" />
        <div className="absolute inset-0 bg-[rgba(83.71,83.71,83.71,0.10)] rounded-[42px] backdrop-filter backdrop-blur-[45px]" />
        <div className="absolute w-[248px] h-[72px] left-[5px] top-[6px] bg-[#D9D9D9] rounded-[42px] shadow-[6px_6px_6px_rgba(0,0,0,0.25)] blur-[3px]" />
        
        {/* Complex blur overlay */}
        <div className="absolute -left-[32.25px] -top-[27px] w-[322.62px] h-[138px] overflow-hidden">
          <div 
            className="w-full h-full backdrop-filter backdrop-blur-[4px] bg-black/10"
            style={{
              clipPath: 'ellipse(179.31px 69px at 50% 50%)',
              mixBlendMode: 'overlay'
            }}
          />
        </div>
        
        {/* Additional glass layers */}
        <div className="absolute inset-0 rounded-[42px] shadow-[8px_8px_8px_rgba(0,0,0,0.25)] border border-black/50 blur-[4px] mix-blend-multiply" />
        <div className="absolute inset-0 rounded-[42px] shadow-[3px_3px_3px_rgba(0,0,0,0.25)] border border-white blur-[1.5px]" />
        <div className="absolute inset-0 rounded-[42px] shadow-[3px_3px_3px_rgba(0,0,0,0.25)] border border-white/20 blur-[1.5px]" />
      </div>

      {/* Command Item */}
      <div className="absolute left-[6px] top-[6px] w-[120px] h-[72px] glass-command-item flex items-center justify-center px-[36px] py-[8px]">
        <div className="flex flex-col items-center gap-[3px]">
          <Command className="w-8 h-8 text-white" strokeWidth={3} />
          <span 
            className="text-white text-[14px] font-[510] leading-[22px] text-center"
            style={{ fontFamily: 'SF Pro, -apple-system, system-ui, sans-serif' }}
          >
            Command
          </span>
        </div>
      </div>

      {/* Inbox Item */}
      <div className="absolute left-[145px] top-[16px] w-[76px] h-[57px] flex flex-col items-center gap-[3px]">
        <Inbox className="w-8 h-8 text-white" strokeWidth={3} />
        <span 
          className="text-white text-[14px] font-[510] leading-[22px] text-center w-full"
          style={{ fontFamily: 'SF Pro, -apple-system, system-ui, sans-serif' }}
        >
          Inbox
        </span>
      </div>
    </section>
  );
};

export default CommandBar;