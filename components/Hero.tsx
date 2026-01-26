
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

  // Direct link from provided Google Drive ID: 1SOLI5xFzY0tECySWwUxZR1VTzciNIA5R
  const heroBgImage = "https://drive.google.com/uc?export=view&id=1SOLI5xFzY0tECySWwUxZR1VTzciNIA5R";

  return (
    <div className="relative h-[115vh] flex items-center justify-center overflow-hidden bg-[#050508]" style={{ perspective: '2000px' }}>
      
      {/* --- CINEMATIC 3D ENGINE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* User Illustration Layer with Enhanced Vibrant Filters */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[250ms] ease-out brightness-[1.05] saturate-[1.25] contrast-[1.05]" 
          style={{ 
            backgroundImage: `url('${heroBgImage}')`,
            transform: `scale(${1.12 + scrollPos / 5500}) translateY(${scrollPos * 0.12}px) rotateX(${mousePos.y * 1.8}deg) rotateY(${mousePos.x * 1.8}deg)`,
            willChange: 'transform'
          }}
        >
          {/* Multi-stage gradient to protect text visibility while letting colors shine */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020205]/40 via-transparent to-[#020205]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
        </div>

        {/* Neural Scan Rings - Light Blue Theme Energy */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] opacity-[0.15] hidden md:block"
          style={{ 
            transform: `translate(-50%, -50%) translate3d(${mousePos.x * 70}px, ${mousePos.y * 70}px, 150px) rotate(${scrollPos * 0.04}deg)`,
            willChange: 'transform',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-0 border-[1.5px] border-[#0EA5E9] rounded-full animate-spin-slow opacity-50 shadow-[0_0_100px_rgba(14,165,233,0.3)]" />
          <div className="absolute inset-40 border-[1px] border-cyan-400 rounded-full animate-reverse-spin opacity-30" style={{ transform: 'translateZ(60px)' }} />
          <div className="absolute inset-80 border-dashed border-[1px] border-white/10 rounded-full animate-spin-extremely-slow" style={{ transform: 'translateZ(-40px)' }} />
        </div>

        {/* Atmospheric Dust/Particles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.06)_0%,transparent_80%)] animate-pulse" />
      </div>

      {/* --- CONTENT HUB --- */}
      <div 
        className="relative z-30 max-w-7xl w-full px-8 flex flex-col items-center text-center"
        style={{ 
          transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -25}px, 0)`,
          transformStyle: 'preserve-3d'
        }}
      >
        
        <div className="flex flex-col items-center gap-8 mb-14 animate-in fade-in slide-in-from-top-12 duration-1000">
           <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.6em] shadow-[0_0_40px_rgba(14,165,233,0.25)]">
             <Layers size={14} className="text-[#0EA5E9] animate-pulse" />
             ARCHIVE_V5.1_SYNCED_CORE
           </div>
        </div>
        
        <div className="space-y-4 mb-20 animate-in fade-in zoom-in-95 duration-1000 delay-200" style={{ transform: 'translateZ(120px)' }}>
          <h1 className="text-6xl sm:text-8xl md:text-[13.5rem] font-heritage font-bold leading-[0.8] tracking-tighter text-white uppercase select-none">
            {language === 'EN' ? (
              <>
                <span className="block opacity-90 mb-6 tracking-[0.15em] text-4xl md:text-6xl font-light italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">Discover the</span>
                <span className="block insta-text-gradient drop-shadow-[0_30px_60px_rgba(14,165,233,0.6)]">SRI LANKA.</span>
              </>
            ) : (
              <>
                <span className="block opacity-90 mb-6 tracking-[0.15em] text-4xl md:text-6xl font-light italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">අත්විඳින්න</span>
                <span className="block insta-text-gradient drop-shadow-[0_30px_60px_rgba(14,165,233,0.6)]">ශ්‍රී ලංකාව.</span>
              </>
            )}
          </h1>
        </div>
        
        <p className="text-lg md:text-2xl text-white font-bold max-w-4xl leading-relaxed mb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 italic drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]" style={{ transform: 'translateZ(80px)' }}>
          {language === 'EN' 
            ? "Step into a multi-dimensional reconstruction of the world's most mysterious island." 
            : "ලොව වඩාත් අභිරහස් දූපතේ බහුමාන ප්‍රතිනිර්මාණයකට පිවිසෙන්න."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700" style={{ transform: 'translateZ(150px)' }}>
          <button 
            onClick={() => setView('destinations')}
            className="group relative px-20 py-9 bg-white text-[#020205] rounded-[3rem] font-black text-[15px] uppercase tracking-[0.6em] transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_40px_100px_rgba(255,255,255,0.25)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]" />
            <span className="relative z-10 flex items-center gap-5">
              Explore Reality
              <Box size={20} fill="currentColor" className="text-[#0EA5E9]" />
            </span>
          </button>

          <button 
            onClick={() => setView('vr-showcase')}
            className="group relative px-20 py-9 bg-black/40 backdrop-blur-3xl border border-white/20 rounded-[3rem] font-black text-[15px] text-white uppercase tracking-[0.6em] transition-all duration-700 hover:bg-white/10 hover:border-[#0EA5E9]/50 hover:shadow-[0_0_80px_rgba(14,165,233,0.3)] active:scale-95"
          >
            <div className="absolute inset-0 bg-[#0EA5E9]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-5">
              3D Interface
              <Orbit size={24} className="text-cyan-400 animate-spin-slow" />
            </span>
          </button>
        </div>
      </div>

      {/* Floating Side Metadata Gauges */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-14 opacity-40 text-white pointer-events-none" style={{ transform: 'translateZ(200px)' }}>
          {[1,2,3].map(i => (
            <div key={i} className="flex flex-col items-end gap-3 group">
               <div className="w-56 h-[1.5px] bg-gradient-to-l from-white/60 to-transparent group-hover:w-64 transition-all duration-1000" />
               <p className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0EA5E9]">SPATIAL_V_0{i}_SYNCHRONIZED</p>
            </div>
          ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 18s linear infinite;
        }
        .animate-spin-extremely-slow {
          animation: spin-slow 150s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Hero;
