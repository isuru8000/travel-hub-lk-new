import React from 'react';
import { Language } from '../types.ts';
import { DESTINATIONS } from '../constants.tsx';
// Add missing 'Database' icon to imports
import { Compass, MapPin, Star, ArrowRight, ShieldCheck, Zap, Radio, Target, Clock, ExternalLink, Database } from 'lucide-react';

const BookingDestinations: React.FC<{ language: Language, setView: (view: any) => void }> = ({ language, setView }) => {
  // Use a different filter or sorting for the booking page to differentiate it
  const bookingRegistry = DESTINATIONS.map(d => ({
    ...d,
    price: Math.floor(Math.random() * 500) + 150, // Simulated booking rates
    duration: '2-4 Days'
  }));

  return (
    <div className="min-h-screen bg-white pb-32">
      <div className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-white" />
        <div className="relative text-center space-y-8 px-6">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
             <Target size={16} className="text-[#E1306C]" />
             Expedition Route Registry
          </div>
          <h2 className="text-6xl md:text-[10rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            ROUTE <br/><span className="italic insta-text-gradient">SYNTHESIS.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-2xl font-light italic leading-relaxed tracking-wide">
            "Direct synchronization with island-wide heritage expeditions and waypoint nodes."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 space-y-24">
        <div className="flex justify-between items-end border-b border-gray-100 pb-12">
           <div className="space-y-2">
              <p className="text-[10px] font-black text-[#E1306C] uppercase tracking-[0.4em]">Active_Manifold</p>
              <h3 className="text-3xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Verified Waypoints</h3>
           </div>
           <div className="flex gap-4">
              <div className="px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                 <ShieldCheck size={16} className="text-green-500" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Registry_v4.5_Secured</span>
              </div>
           </div>
        </div>

        <div className="space-y-16">
          {bookingRegistry.map((item, idx) => (
            <div key={item.id} className="group relative flex flex-col lg:flex-row bg-white rounded-[4rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-1000 hover:shadow-2xl hover:-translate-y-2">
               <div className="w-full lg:w-2/5 h-96 lg:h-auto relative overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110" alt={item.name[language]} />
                  <div className="absolute top-8 left-8">
                     <div className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white text-[9px] font-black uppercase tracking-widest">
                        Node_Ref: #{item.id.toUpperCase()}
                     </div>
                  </div>
               </div>
               
               <div className="w-full lg:w-3/5 p-12 lg:p-20 flex flex-col justify-between space-y-10">
                  <div className="space-y-6">
                     <div className="flex justify-between items-start">
                        <div className="space-y-2">
                           <div className="flex items-center gap-3 text-[#E1306C]">
                              <MapPin size={16} />
                              <span className="text-[10px] font-black uppercase tracking-[0.3em]">{item.location}</span>
                           </div>
                           <h4 className="text-4xl md:text-5xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tight group-hover:insta-text-gradient transition-all">{item.name[language]}</h4>
                        </div>
                        <div className="text-right">
                           <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Archival Rate</p>
                           <p className="text-4xl font-heritage font-bold text-[#0a0a0a]">${item.price}</p>
                        </div>
                     </div>
                     <p className="text-xl text-gray-400 font-light italic leading-relaxed">
                        "{item.shortStory[language]}"
                     </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-50">
                     <div className="space-y-2">
                        <div className="flex items-center gap-3 text-gray-400">
                           <Clock size={14} />
                           <span className="text-[9px] font-black uppercase tracking-widest">Temporal scope</span>
                        </div>
                        <p className="text-base font-bold text-[#0a0a0a] uppercase tracking-widest">{item.duration}</p>
                     </div>
                     <div className="space-y-2">
                        <div className="flex items-center gap-3 text-gray-400">
                           <Zap size={14} />
                           <span className="text-[9px] font-black uppercase tracking-widest">Sync Status</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                           <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">LOCKED_ON</p>
                        </div>
                     </div>
                     <div className="flex items-center justify-end">
                        <button 
                          onClick={() => setView('marketplace')}
                          className="flex items-center gap-6 px-10 py-5 bg-[#0a0a0a] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] hover:bg-[#E1306C] transition-all shadow-xl group/btn"
                        >
                           Initialize Sync
                           <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                     </div>
                  </div>
               </div>
               
               {/* Decorative Side Marker */}
               <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1.5 bg-gray-50 group-hover:bg-[#E1306C] transition-colors" />
            </div>
          ))}
        </div>

        <div className="pt-20 text-center space-y-8 opacity-20">
           <div className="flex justify-center gap-8">
              <Compass size={40} />
              <Radio size={40} />
              {/* Fix for line 121 (or 122 in this content): Now imported 'Database' */}
              <Database size={40} />
           </div>
           <p className="text-[10px] font-black uppercase tracking-[1em] ml-4">End_Of_Route_Registry</p>
        </div>
      </div>
    </div>
  );
};

export default BookingDestinations;