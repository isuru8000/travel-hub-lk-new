import React, { useState, useEffect } from 'react';
import { Language } from '../types.ts';
import { Box, Orbit, Layers } from 'lucide-react';

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

  const heroBgImage = "https://images.unsplash.com/photo-1602364481046-a5c6c3629932?q=80&w=1719&auto=format&fit=crop";

  const renderHangingText = (text: string) => {
    return text.split('').map((char, i) => (
      <span 
        key={i} 
        className="hanging-letter-node"
        style={{ 
          animationDelay: `${i * 0.15}s`,
          // Vary the rope length slightly for an organic "hanging from a branch" look
          marginTop: `${(Math.sin(i) * 10)}px`
        }}
      >
        {/* The Rope (Tether) */}
        <div className="ionic-tether" style={{ height: `${60 + Math.abs(Math.cos(i) * 30)}px` }} />
        
        {/* The Letter Atomic Node */}
        <span 
          className="letter-face"
          data-char={char}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      </span>
    ));
  };

  return (
    <div className="relative h-[115vh] flex items-center justify-center overflow-hidden bg-[#050508]" style={{ perspective: '2000px' }}>
      
      {/* --- CINEMATIC 3D ENGINE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[400ms] ease-out brightness-[0.85] saturate-[1.1] contrast-[1.05]" 
          style={{ 
            backgroundImage: `url('${heroBgImage}')`,
            transform: `scale(${1.1 + scrollPos / 6000}) translateY(${scrollPos * 0.1}px) rotateX(${mousePos.y * 1.5}deg) rotateY(${mousePos.x * 1.5}deg)`,
            willChange: 'transform'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#020205]/60 via-transparent to-[#020205]/80" />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.2px]" />
        </div>

        {/* Themed Neural Scan Rings */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] opacity-[0.15] hidden md:block"
          style={{ 
            transform: `translate(-50%, -50%) translate3d(${mousePos.x * 80}px, ${mousePos.y * 80}px, 120px) rotate(${scrollPos * 0.04}deg)`,
            willChange: 'transform',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-0 border-[2px] border-[#0EA5E9] rounded-full animate-spin-slow opacity-30 shadow-[0_0_100px_rgba(14,165,233,0.2)]" />
        </div>
      </div>

      {/* --- CONTENT HUB --- */}
      <div 
        className="relative z-30 max-w-7xl w-full px-8 flex flex-col items-center text-center"
        style={{ 
          transform: `translate3d(${mousePos.x * -30}px, ${mousePos.y * -30}px, 0)`,
          transformStyle: 'preserve-3d'
        }}
      >
        
        <div className="flex flex-col items-center gap-8 mb-14 animate-in fade-in slide-in-from-top-12 duration-1000">
           <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-black/40 border border-white/20 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.6em] shadow-[0_0_40px_rgba(14,165,233,0.3)]">
             <Layers size={14} className="text-[#0EA5E9] animate-pulse" />
             ARCHIVE_V5.8_SYNCED
           </div>
        </div>
        
        <div className="space-y-4 mb-32 animate-in fade-in zoom-in-95 duration-1000 delay-200" style={{ transform: 'translateZ(130px)' }}>
          <h1 className="text-6xl sm:text-8xl md:text-[13rem] font-heritage font-bold leading-[0.8] tracking-tighter text-white uppercase select-none relative">
            {language === 'EN' ? (
              <>
                <span className="block opacity-90 mb-24 tracking-[0.1em] text-4xl md:text-6xl font-light italic drop-shadow-2xl">Discover the</span>
                <div className="hanging-system">
                   {/* The Neural Branch / Conduit */}
                   <div className="neural-branch" />
                   <div className="flex justify-center items-start gap-2 md:gap-4 font-heritage">
                     {renderHangingText("SRI LANKA")}
                   </div>
                </div>
              </>
            ) : (
              <>
                <span className="block opacity-90 mb-24 tracking-[0.1em] text-4xl md:text-6xl font-light italic drop-shadow-2xl">අත්විඳින්න</span>
                <div className="hanging-system">
                   <div className="neural-branch" />
                   <div className="flex justify-center items-start gap-2 md:gap-4 font-heritage">
                     {renderHangingText("ශ්‍රී ලංකාව")}
                   </div>
                </div>
              </>
            )}
          </h1>
        </div>
        
        <p className="text-lg md:text-2xl text-white font-black max-w-4xl leading-relaxed mb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 italic drop-shadow-[0_4px_30px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(90px)' }}>
          {language === 'EN' 
            ? "Step into a multi-dimensional reconstruction of the world's most mysterious island." 
            : "ලොව වඩාත් අභිරහස් දූපතේ බහුමාන ප්‍රතිනිර්මාණයකට පිවිසෙන්න."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700" style={{ transform: 'translateZ(160px)' }}>
          <button 
            onClick={() => setView('destinations')}
            className="group relative px-20 py-9 bg-white text-[#050508] rounded-[3rem] font-black text-[15px] uppercase tracking-[0.5em] transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_40px_100px_rgba(255,255,255,0.3)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]" />
            <span className="relative z-10 flex items-center gap-5">
              Explore Reality
              <Box size={22} fill="currentColor" className="text-[#0EA5E9]" />
            </span>
          </button>

          <button 
            onClick={() => setView('vr-showcase')}
            className="group relative px-20 py-9 bg-black/70 backdrop-blur-3xl border border-white/20 rounded-[3rem] font-black text-[15px] text-white uppercase tracking-[0.5em] transition-all duration-700 hover:bg-white/10 hover:border-[#0EA5E9]/50 hover:shadow-[0_0_80px_rgba(14,165,233,0.3)] active:scale-95"
          >
            <div className="absolute inset-0 bg-[#0EA5E9]/15 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-5">
              3D Interface
              <Orbit size={26} className="text-cyan-400 animate-spin-slow" />
            </span>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hanging-system {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .neural-branch {
          width: 90%;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.4), transparent);
          box-shadow: 0 0 30px rgba(14, 165, 233, 0.2);
          position: absolute;
          top: -20px;
          border-radius: 50%;
          opacity: 0.6;
        }

        .hanging-letter-node {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          transform-origin: top center;
          animation: 
            harmonic-sway 5s ease-in-out infinite,
            reality-tremor 8s ease-in-out infinite;
        }

        .ionic-tether {
          width: 1.5px;
          background: linear-gradient(to bottom, rgba(14, 165, 233, 0.6) 0%, rgba(255,255,255,0.1) 100%);
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.3);
          opacity: 0.4;
        }

        .letter-face {
          display: block;
          color: #0EA5E9;
          font-family: 'Lora', serif;
          font-weight: 800;
          line-height: 0.7;
          text-shadow: 
            0 0 20px rgba(14, 165, 233, 0.4),
            0 0 40px rgba(14, 165, 233, 0.2);
          filter: brightness(1.2) contrast(1.1);
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }
        
        .hanging-letter-node:hover .letter-face {
          color: #7DD3FC;
          filter: brightness(1.5) drop-shadow(0 0 30px #0EA5E9);
          transform: scale(1.1) translateY(0);
        }

        @keyframes harmonic-sway {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }

        @keyframes reality-tremor {
          0%, 88%, 100% { transform: translate(0, 0) rotate(var(--current-rotation, 0deg)); }
          90% { transform: translate(2px, -2px) scale(1.02); }
          92% { transform: translate(-2px, 2px) scale(0.98); }
          94% { transform: translate(2px, 2px) scale(1.02); }
          96% { transform: translate(-2px, -2px) scale(0.98); }
          98% { transform: translate(1px, 1px) scale(1.01); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 28s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Hero;