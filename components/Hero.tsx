import React, { useState, useEffect } from 'react';
import { Language, User } from '../types.ts';
import { Box, Orbit, Layers, ShieldCheck, Activity } from 'lucide-react';

interface HeroProps {
  language: Language;
  setView: (view: any) => void;
  user: User | null;
}

const Hero: React.FC<HeroProps> = ({ language, setView, user }) => {
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
          animationDelay: `${i * 0.1}s`,
          marginTop: `${(Math.sin(i) * 3)}px`
        }}
      >
        <div className="ionic-tether" style={{ height: `${25 + Math.abs(Math.cos(i) * 10)}px` }} />
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
      
      {/* User Greeting Overlay */}
      {user && (
        <div className="absolute top-40 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-1000">
           <div className="bg-white/10 backdrop-blur-3xl border border-white/20 px-8 py-4 rounded-full shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex items-center gap-6 group">
              <div className="relative">
                 <div className="w-12 h-12 rounded-full border-2 border-[#0EA5E9] p-0.5 shadow-[0_0_30px_rgba(14,165,233,0.4)]">
                    <img src={user.photo} className="w-full h-full object-cover rounded-full" alt="" />
                 </div>
                 <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-[#050508] rounded-full animate-pulse" />
              </div>
              <div className="text-left">
                 <div className="flex items-center gap-3">
                    <ShieldCheck size={12} className="text-[#0EA5E9]" />
                    <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.4em]">Identity_Verified</span>
                 </div>
                 <p className="text-base font-heritage font-bold text-white uppercase tracking-widest mt-0.5">
                    {language === 'EN' ? `Ayubowan, ${user.name.split(' ')[0]}` : `ආයුබෝවන්, ${user.name.split(' ')[0]}`}
                 </p>
              </div>
           </div>
        </div>
      )}

      {/* Cinematic 3D Engine */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[400ms] ease-out brightness-[0.7] saturate-[1.1] contrast-[1.05]" 
          style={{ 
            backgroundImage: `url('${heroBgImage}')`,
            transform: `scale(${1.1 + scrollPos / 6000}) translateY(${scrollPos * 0.1}px) rotateX(${mousePos.y * 1.5}deg) rotateY(${mousePos.x * 1.5}deg)`,
            willChange: 'transform'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#020205]/80 via-transparent to-[#020205]/90" />
        </div>

        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] opacity-[0.2] hidden md:block"
          style={{ 
            transform: `translate(-50%, -50%) translate3d(${mousePos.x * 80}px, ${mousePos.y * 80}px, 120px) rotate(${scrollPos * 0.04}deg)`,
            willChange: 'transform',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-0 border-[3px] border-[#0EA5E9]/40 rounded-full animate-spin-slow opacity-30 shadow-[0_0_120px_rgba(14,165,233,0.2)]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl w-full px-8 flex flex-col items-center text-center">
        
        <div className="flex flex-col items-center gap-6 mb-8 animate-in fade-in slide-in-from-top-8 duration-1000">
           <div className="inline-flex items-center gap-5 px-8 py-3 rounded-full bg-black/60 border border-white/30 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.6em] shadow-[0_0_60px_rgba(14,165,233,0.3)]">
             <Layers size={14} className="text-[#0EA5E9] animate-pulse" />
             ARCHIVE_V6.0_SYNCED
           </div>
        </div>
        
        <div className="space-y-0 mb-12 animate-in fade-in zoom-in-95 duration-1000 delay-200" style={{ transform: 'translateZ(130px)' }}>
          <h1 className="text-6xl sm:text-8xl md:text-[13rem] font-heritage font-bold leading-[0.75] tracking-tighter text-white uppercase select-none relative">
            {language === 'EN' ? (
              <>
                <span className="block opacity-95 mb-4 tracking-[0.15em] text-3xl md:text-5xl font-light italic drop-shadow-[0_10px_40px_rgba(0,0,0,1)]">Discover the</span>
                <div className="hanging-system">
                   <div className="neural-branch" />
                   <div className="flex justify-center items-start gap-2 md:gap-5">
                     {renderHangingText("SRI LANKA")}
                   </div>
                </div>
              </>
            ) : (
              <>
                <span className="block opacity-95 mb-4 tracking-[0.15em] text-3xl md:text-5xl font-light italic drop-shadow-[0_10px_40px_rgba(0,0,0,1)]">අත්විඳින්න</span>
                <div className="hanging-system">
                   <div className="neural-branch" />
                   <div className="flex justify-center items-start gap-2 md:gap-5">
                     {renderHangingText("ශ්‍රී ලංකාව")}
                   </div>
                </div>
              </>
            )}
          </h1>
        </div>
        
        <p className="text-lg md:text-2xl text-white font-medium max-w-3xl leading-relaxed mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500 italic drop-shadow-[0_8px_40px_rgba(0,0,0,1)]" style={{ transform: 'translateZ(90px)' }}>
          {language === 'EN' 
            ? "Step into a multi-dimensional reconstruction of the world's most mysterious island." 
            : "ලොව වඩාත් අභිරහස් දූපතේ බහුමාන ප්‍රතිනිර්මාණයකට පිවිසෙන්න."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700" style={{ transform: 'translateZ(160px)' }}>
          <button 
            onClick={() => setView('destinations')}
            className="group relative px-16 py-8 bg-white text-[#050508] rounded-[2.5rem] font-black text-[14px] uppercase tracking-[0.5em] transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_40px_120px_rgba(255,255,255,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]" />
            <span className="relative z-10 flex items-center gap-5">
              Explore
              <Box size={22} fill="currentColor" className="text-[#0EA5E9]" />
            </span>
          </button>

          <button 
            onClick={() => setView('vr-showcase')}
            className="group relative px-16 py-8 bg-black/80 backdrop-blur-3xl border border-white/30 rounded-[2.5rem] font-black text-[14px] text-white uppercase tracking-[0.5em] transition-all duration-700 hover:bg-white/10 hover:border-[#0EA5E9]/50 active:scale-95"
          >
            <div className="absolute inset-0 bg-[#0EA5E9]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-5">
              Nexus 3D
              <Orbit size={24} className="text-[#0EA5E9] animate-spin-slow" />
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
          width: 70%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.8), transparent);
          box-shadow: 0 0 30px rgba(14, 165, 233, 0.4);
          position: absolute;
          top: -10px;
          border-radius: 50%;
          opacity: 0.6;
        }

        .hanging-letter-node {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          transform-origin: top center;
          animation: harmonic-sway 6s ease-in-out infinite;
        }

        .ionic-tether {
          width: 1px;
          background: linear-gradient(to bottom, rgba(14, 165, 233, 0.8) 0%, rgba(255,255,255,0.05) 100%);
          box-shadow: 0 0 8px rgba(14, 165, 233, 0.4);
          opacity: 0.5;
        }

        .letter-face {
          display: block;
          color: white;
          font-weight: 900;
          line-height: 0.7;
          text-shadow: 
            0 0 20px rgba(14, 165, 233, 0.8),
            0 0 40px rgba(14, 165, 233, 0.4),
            0 10px 30px rgba(0,0,0,1);
          filter: brightness(1.2) contrast(1.1);
          transform: translateY(-2px);
          transition: all 0.4s ease;
        }
        
        .hanging-letter-node:hover .letter-face {
          color: #fdf497;
          filter: brightness(1.5) drop-shadow(0 0 40px #0EA5E9);
          transform: scale(1.05) translateY(0);
        }

        @keyframes harmonic-sway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Hero;
