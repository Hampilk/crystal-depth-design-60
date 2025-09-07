import cosmicBackground from "@/assets/walpaper.png";

const BackgroundEffects = () => {
  return (
    <>
      {/* Main Background Image */}
      <div 
        className="fixed top-0 w-full h-screen bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${cosmicBackground})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Soft radial glows */}
        <div 
          className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl"
          style={{ background: 'var(--gradient-radial-blue)' }}
        />
        <div 
          className="absolute top-24 -right-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl"
          style={{ background: 'var(--gradient-radial-rose)' }}
        />
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
          style={{ background: 'var(--gradient-radial-emerald)' }}
        />
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 mix-blend-soft-light opacity-[0.10] bg-black/10" />
      </div>
    </>
  );
};

export default BackgroundEffects;
