import React from 'react';
import { Language } from '../types.ts';
import { TRAVEL_ESSENTIALS_DATA } from '../constants.tsx';
import * as Icons from 'lucide-react';
import { Backpack, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

interface TravelEssentialsProps {
  language: Language;
}

const TravelEssentials: React.FC<TravelEssentialsProps> = ({ language }) => {
  const heroImage = "https://images.unsplash.com/vector-1758528899232-475c7421fa3b?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="min-h-screen bg-[#fafafa] pb-32">
      {/* Enhanced Hero Section with Requested Image */}
      <div className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-60 transition-transform duration-[20000ms] animate-slow-zoom" 
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 insta-gradient opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-black/40 to-transparent" />
        
        <div className="relative text-center space-y-8 px-6 max-w-4xl animate-in fade-in zoom-in duration-1000">
          <div className="flex flex-col items-center gap-6">
             <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
                <Backpack size={16} className="text-[#0EA5E9] animate-pulse" />
                Logistic_Integration_Suite
             </div>
             <div className="h-12 w-[1px] bg-gradient-to-b from-[#0EA5E9] to-transparent"></div>
          </div>
          
          <h2 className="text-6xl md:text-[9rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            TRAVEL <br/><span className="italic insta-text-gradient">GUIDE.</span>
          </h2>
          
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-2xl font-light italic leading-relaxed drop-shadow-lg">
            {language === 'EN' 
              ? "Everything you need to know for a smooth journey across our island paradise." 
              : "අපේ දූපත් පාරාදීසය හරහා සුමට ගමනක් සඳහා ඔබ දැනගත යුතු සියල්ල මෙන්න."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TRAVEL_ESSENTIALS_DATA.map((item) => {
            // @ts-ignore
            const IconComponent = Icons[item.icon] || Backpack;
            return (
              <div 
                key={item.id}
                className="bg-white p-12 rounded-[4rem] shadow-xl border border-gray-100 space-y-10 group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-110 pointer-events-none opacity-50" />
                
                <div className="flex items-center gap-8 relative z-10">
                  <div className="w-24 h-24 story-ring rounded-[2rem] p-1 flex items-center justify-center transition-transform group-hover:rotate-6 shadow-2xl">
                    <div className="bg-white w-full h-full rounded-[1.8rem] flex items-center justify-center text-[#0EA5E9]">
                      <IconComponent size={40} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">Protocol_Reference</p>
                    <h3 className="text-4xl font-heritage font-bold text-[#262626] group-hover:insta-text-gradient transition-all">
                      {item.title[language]}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-500 text-xl leading-relaxed font-light italic border-l-4 border-gray-50 pl-8">
                  "{item.description[language]}"
                </p>

                <div className="space-y-6 pt-10 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <Sparkles size={14} className="text-[#0EA5E9]" />
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em]">Neural_Insights</span>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {item.tips.map((tip, idx) => (
                      <div key={idx} className="flex gap-6 items-start bg-[#fafafa] p-6 rounded-3xl border border-gray-50 transition-colors group-hover:bg-white">
                        <div className="w-8 h-8 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#0EA5E9] shadow-sm font-black text-xs shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-lg text-gray-700 font-medium italic pt-1">{tip[language]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-16 md:p-24 rounded-[5rem] border-4 border-dashed border-gray-100 text-center space-y-12 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 pattern-overlay opacity-5 group-hover:opacity-10 transition-opacity" />
          
          <div className="space-y-6 relative z-10">
            <div className="w-24 h-24 bg-red-50 rounded-[2rem] flex items-center justify-center mx-auto text-red-500 shadow-inner group-hover:scale-110 transition-transform duration-700 animate-pulse">
              <PhoneCall size={48} />
            </div>
            <h4 className="text-5xl font-heritage font-bold text-[#262626] uppercase tracking-tighter">
              {language === 'EN' ? "Emergency Link" : "හදිසි සම්බන්ධතාවය"}
            </h4>
            <div className="w-24 h-1.5 bg-red-500/20 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div className="space-y-3 p-8 bg-gray-50 rounded-[3rem] transition-all hover:bg-white hover:shadow-xl">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">Tourist Police</p>
              <p className="text-6xl font-heritage font-bold text-[#0EA5E9] tracking-tighter">1912</p>
            </div>
            <div className="space-y-3 p-8 bg-gray-50 rounded-[3rem] transition-all hover:bg-white hover:shadow-xl">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">Emergency Response</p>
              <p className="text-6xl font-heritage font-bold text-[#0EA5E9] tracking-tighter">119</p>
            </div>
            <div className="space-y-3 p-8 bg-gray-50 rounded-[3rem] transition-all hover:bg-white hover:shadow-xl">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">Medical / Ambulance</p>
              <p className="text-6xl font-heritage font-bold text-[#0EA5E9] tracking-tighter">1990</p>
            </div>
          </div>

          <div className="pt-10 flex items-center justify-center gap-6 opacity-30">
            <ShieldCheck size={24} />
            <span className="text-[9px] font-black uppercase tracking-[0.8em]">Registry_Secure_Uplink</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s linear infinite;
        }
      `}} />
    </section>
  );
};

export default TravelEssentials;