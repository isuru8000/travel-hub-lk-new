import React from 'react';
import { Language } from '../types.ts';
import { ArrowLeft, Lock, Scan, Activity, Target, ShieldCheck } from 'lucide-react';

interface VRTripFutureProps {
  language: Language;
  setView: (view: any) => void;
}

const VRTripFuture: React.FC<VRTripFutureProps> = ({ language, setView }) => {
  return (
    <div className="min-h-screen bg-[#020205] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(225,48,108,0.15)_0%,transparent_70%)] animate-pulse" />
      
      {/* Grid Floor */}
      <div 
        className="fixed inset-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#E1306C 1.5px, transparent 1.5px), linear-gradient(90deg, #E1306C 1.5px, transparent 1.5px)`, 
          backgroundSize: '120px 120px', 
          transform: 'perspective(1200px) rotateX(75deg) translateY(200px) scale(3)', 
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)' 
        }} 
      />

      <div className="relative z-10 space-y-12 max-w-4xl animate-in fade-in zoom-in duration-1000">
        <div className="flex flex-col items-center gap-10">
           <div className="relative group">
              <div className="absolute inset-[-30px] bg-[#E1306C]/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="w-36 h-36 rounded-[3.5rem] bg-[#020205] border-2 border-[#E1306C]/40 flex items-center justify-center text-[#E1306C] shadow-[0_0_100px_rgba(225,48,108,0.3)] relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-[#E1306C] shadow-[0_0_20px_#E1306C] animate-scan-y"></div>
                 <Lock size={72} className="animate-pulse" />
              </div>
           </div>
           
           <div className="space-y-8">
              <div className="inline-flex items-center gap-5 px-10 py-4 rounded-full bg-[#E1306C]/20 border border-[#E1306C]/40 text-white text-[12px] font-black uppercase tracking-[0.6em] mx-auto backdrop-blur-2xl shadow-2xl">
                <Scan size={20} className="animate-pulse" />
                Phase_04_Temporal_Reconstruction
              </div>
              <h2 className="text-6xl md:text-[11rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_80px_rgba(0,0,0,1)]">
                VIRTUAL <br/><span className="italic insta-text-gradient">HORIZON.</span>
              </h2>
              <p className="text-gray-300 text-xl md:text-3xl font-light italic leading-relaxed max-w-3xl mx-auto opacity-90 drop-shadow-lg">
                {language === 'EN' 
                  ? "The volumetric temporal sync module is currently offline. Our architectural bureau is finalizing the high-fidelity meshes for the 2026 cycle." 
                  : "ත්‍රිමාණ කාලාන්තර ප්‍රතිනිර්මාණ පද්ධතිය දැනට යාවත්කාලීන වෙමින් පවතී. මීළඟ අදියරේදී සියලු තොරතුරු ඔබ වෙත විවෘත වනු ඇත."}
              </p>
           </div>
        </div>

        <div className="pt-16 flex flex-col items-center gap-14">
           <div className="flex flex-wrap justify-center gap-16 opacity-70">
              <div className="flex items-center gap-4">
                 <Activity size={24} className="text-[#E1306C] animate-pulse" />
                 <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white">Neural_State: Stable</span>
              </div>
              <div className="flex items-center gap-4">
                 <Target size={24} className="text-[#E1306C]" />
                 <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white">Target: Node_Sync</span>
              </div>
              <div className="flex items-center gap-4">
                 <ShieldCheck size={24} className="text-green-500" />
                 <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white">Protocol: L4_Restricted</span>
              </div>
           </div>

           <button 
             onClick={() => setView('home')}
             className="group relative px-20 py-9 bg-white text-[#020205] rounded-full font-black text-[13px] uppercase tracking-[0.6em] flex items-center gap-8 hover:scale-110 active:scale-95 transition-all shadow-[0_40px_100px_rgba(255,255,255,0.3)] overflow-hidden"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E1306C]/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
             <ArrowLeft size={26} className="group-hover:-translate-x-3 transition-transform" />
             Return to Base Registry
           </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-y {
          0% { top: 0%; opacity: 0.4; }
          50% { top: 100%; opacity: 0.9; }
          100% { top: 0%; opacity: 0.4; }
        }
        .animate-scan-y { animation: scan-y 4s linear infinite; }
      `}} />
    </div>
  );
};

export default VRTripFuture;
