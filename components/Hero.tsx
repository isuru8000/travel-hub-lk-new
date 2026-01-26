
import React, { useState, useEffect, useMemo } from 'react';
import { Language } from '../types.ts';
import { UI_STRINGS } from '../constants.tsx';
import { Navigation, Target, Activity, ShieldCheck, ChevronDown, Radio, Orbit, Zap, Box, Layers } from 'lucide-react';

interface HeroProps {
  language: Language;
  setView: (view: any) => void;
}

const Hero: React.FC<HeroProps> = ({ language, setView }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5)
      });
    };
    
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[115vh] flex items-center justify-center overflow-hidden bg-[#020205]" style={{ perspective: '2000px' }}>
      
      {/* --- CINEMATIC 3D ENGINE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Deep Field Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[200ms] brightness-[0.35] saturate-[1.1]" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=2400&q=80')`,
            transform: `scale(${1.15 + scrollPos / 5000}) translateY(${scrollPos * 0.15}px) rotateX(${mousePos.y * 2}deg) rotateY(${mousePos.x * 2}deg)`,
            willChange: 'transform'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-transparent to-[#020205] opacity-90" />
        </div>

        {/* Neural Scan Rings - Enhanced 3D Depth */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-20 hidden md:block"
          style={{ 
            transform: `translate(-50%, -50%) translate3d(${mousePos.x * 60}px, ${mousePos.y * 60}px, 100px) rotate(${scrollPos * 0.03}deg)`,
            willChange: 'transform',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-0 border-[1px] border-[#0EA5E9] rounded-full animate-spin-slow opacity-40 shadow-[0_0_80px_#0EA5E9]" />
          <div className="absolute inset-32 border-[1px] border-blue-400 rounded-full animate-reverse-spin opacity-30 shadow-[0_0_40px_#38bdf8]" style={{ transform: 'translateZ(50px)' }} />
          <div className="absolute inset-60 border-dashed border-[1px] border-white/20 rounded-full animate-spin-extremely-slow" style={{ transform: 'translateZ(-30px)' }} />
        </div>

        {/* Ambient Particles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)] animate-pulse" />
      </div>

      {/* --- CONTENT HUB --- */}
      <div 
        className="relative z-30 max-w-7xl w-full px-8 flex flex-col items-center text-center"
        style={{ 
          transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0)`,
          transformStyle: 'preserve-3d'
        }}
      >
        
        <div className="flex flex-col items-center gap-8 mb-12 animate-in fade-in slide-in-from-top-12 duration-1000">
           <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl text-[#0EA5E9] text-[10px] font-black uppercase tracking-[0.6em] shadow-[0_0_40px_rgba(14,165,233,0.2)]">
             <Layers size={14} className="animate-pulse" />
             ARCHIVE_V5.0_BETA_SYNC
           </div>
        </div>
        
        <div className="space-y-4 mb-20 animate-in fade-in zoom-in-95 duration-1000 delay-200" style={{ transform: 'translateZ(100px)' }}>
          <h1 className="text-6xl sm:text-8xl md:text-[13rem] font-heritage font-bold leading-[0.8] tracking-tighter text-white uppercase select-none">
            {language === 'EN' ? (
              <>
                <span className="block opacity-60 mb-4 tracking-[0.1em] text-4xl md:text-6xl font-light italic">Discover the</span>
                <span className="block insta-text-gradient drop-shadow-[0_20px_50px_rgba(14,165,233,0.5)]">SRI LANKA.</span>
              </>
            ) : (
              <>
                <span className="block opacity-60 mb-4 tracking-[0.1em] text-4xl md:text-6xl font-light italic">අත්විඳින්න</span>
                <span className="block insta-text-gradient drop-shadow-[0_20px_50px_rgba(14,165,233,0.5)]">ශ්‍රී ලංකාව.</span>
              </>
            )}
          </h1>
        </div>
        
        <p className="text-lg md:text-2xl text-white/50 font-light max-w-4xl leading-relaxed mb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 italic" style={{ transform: 'translateZ(60px)' }}>
          {language === 'EN' 
            ? "Step into a multi-dimensional reconstruction of the world's most mysterious island." 
            : "ලොව වඩාත් අභිරහස් දූපතේ බහුමාන ප්‍රතිනිර්මාණයකට පිවිසෙන්න."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700" style={{ transform: 'translateZ(120px)' }}>
          <button 
            onClick={() => setView('destinations')}
            className="group relative px-20 py-8 bg-white text-[#020205] rounded-[2.5rem] font-black text-[14px] uppercase tracking-[0.5em] transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_40px_100px_rgba(255,255,255,0.2)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 flex items-center gap-4">
              Explore Reality
              <Box size={18} fill="currentColor" className="text-[#0EA5E9]" />
            </span>
          </button>

          <button 
            onClick={() => setView('vr-showcase')}
            className="group relative px-20 py-8 bg-black/40 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] font-black text-[14px] text-white uppercase tracking-[0.5em] transition-all duration-700 hover:bg-white/10 hover:border-[#0EA5E9]/50 hover:shadow-[0_0_80px_rgba(14,165,233,0.2)] active:scale-95"
          >
            <div className="absolute inset-0 bg-[#0EA5E9]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-4">
              3D Interface
              <Orbit size={22} className="text-cyan-500 animate-spin-slow" />
            </span>
          </button>
        </div>
      </div>

      {/* Floating HUD Gauges */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 opacity-30 text-white pointer-events-none" style={{ transform: 'translateZ(150px)' }}>
          {[1,2,3].map(i => (
            <div key={i} className="flex flex-col items-end gap-2">
               <div className="w-48 h-[1px] bg-gradient-to-l from-white/40 to-transparent" />
               <p className="text-[8px] font-black uppercase tracking-[0.4em]">Spatial_Vector_0{i}</p>
            </div>
          ))}
      </div>

      {/* Corner Metadata */}
      <div className="absolute left-12 bottom-12 hidden lg:flex flex-col gap-10 opacity-30 text-white pointer-events-none">
          <div className="space-y-2">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] leading-none text-[#0EA5E9]">Neural_Uplink</p>
             <p className="text-2xl font-heritage font-bold">99.8% STABLE</p>
          </div>
          <div className="space-y-2">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] leading-none text-cyan-400">Environment</p>
             <p className="text-2xl font-heritage font-bold">LOCKED_VOLUMETRIC</p>
          </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .animate-reverse-spin { animation: reverse-spin 15s linear infinite; }
        @keyframes reverse-spin { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-spin-extremely-slow { animation: spin 60s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}} />
    </div>
  );
};

export default Hero;
