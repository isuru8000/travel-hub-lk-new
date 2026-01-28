import React from 'react';
import { Language } from '../types.ts';
import { FESTIVALS_DATA } from '../constants.tsx';
import { Calendar, Sparkles, MapPin, Info } from 'lucide-react';

interface FestivalsProps {
  language: Language;
}

const Festivals: React.FC<FestivalsProps> = ({ language }) => {
  const heroFestBg = "https://plus.unsplash.com/premium_photo-1681426344925-60ea7a7c9295?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="min-h-screen bg-[#fafafa] pb-32">
      {/* Cinematic Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-60 transition-transform duration-10000 hover:scale-110" 
          style={{ backgroundImage: `url('${heroFestBg}')` }}
        />
        <div className="absolute inset-0 insta-gradient opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="relative text-center space-y-4 px-4 animate-in fade-in zoom-in duration-1000">
          <div className="w-20 h-20 story-ring rounded-full mx-auto p-1 mb-6 animate-pulse">
            <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
              <Sparkles size={32} className="text-[#E1306C]" />
            </div>
          </div>
          <h2 className="text-5xl md:text-8xl font-heritage font-bold text-white drop-shadow-2xl tracking-tighter">
            {language === 'EN' ? "Cultural Spirits" : "සංස්කෘතික උත්සව"}
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-2xl font-light italic drop-shadow-lg">
            {language === 'EN' 
              ? "Join the celebration of faith, harvest, and history across the island." 
              : "දිවයින පුරා පවත්වන ඇදහිලි, අස්වනු සහ ඉතිහාසයේ සැමරුම් සමඟ එක්වන්න."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FESTIVALS_DATA.map((item, idx) => (
            <div 
              key={item.id}
              className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-4 transition-all duration-700 animate-in slide-in-from-bottom-8"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name[language]} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 border border-white/20">
                  <Calendar size={14} className="text-[#E1306C]" />
                  <span className="text-[10px] font-black text-[#262626] uppercase tracking-widest">
                    {item.date[language]}
                  </span>
                </div>
                <div className="absolute bottom-6 left-8">
                   <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.4em] drop-shadow-md">Registry_Ref #F0{idx+1}</span>
                </div>
              </div>

              <div className="p-12 space-y-8 flex flex-col flex-grow">
                <div className="space-y-2">
                   <h3 className="text-3xl font-heritage font-bold text-[#262626] group-hover:insta-text-gradient transition-all leading-tight">
                     {item.name[language]}
                   </h3>
                   <div className="w-12 h-1 bg-gray-100 rounded-full group-hover:w-24 group-hover:bg-[#E1306C] transition-all duration-500" />
                </div>
                
                <p className="text-base text-gray-500 leading-relaxed font-light italic">
                  "{item.description[language]}"
                </p>

                <div className="mt-auto pt-8 border-t border-gray-50">
                  <div className="bg-[#fafafa] p-6 rounded-[2.5rem] border border-gray-100 relative overflow-hidden group-hover:bg-white group-hover:shadow-inner transition-colors">
                    <Sparkles size={40} className="absolute -bottom-2 -right-2 text-[#E1306C] opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" />
                    <div className="flex items-center gap-3 mb-3">
                       <Info size={14} className="text-[#E1306C]" />
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Historical Significance</p>
                    </div>
                    <p className="text-sm text-gray-700 font-medium italic leading-relaxed">
                      {item.significance[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="max-w-4xl mx-auto mt-48 px-6 text-center space-y-10">
        <div className="flex justify-center gap-8 opacity-20">
           <Sparkles size={40} />
           <div className="w-px h-12 bg-gray-300" />
           <Calendar size={40} />
        </div>
        <p className="text-2xl md:text-5xl font-heritage font-medium text-gray-500 italic leading-tight">
          {language === 'EN' 
            ? "\"A nation's culture resides in the hearts and in the soul of its people, celebrated through the timeless cycle of our festivals.\""
            : "\"ජාතියක සංස්කෘතිය පවතින්නේ එහි ජනතාවගේ හදවත් තුළ සහ ආත්මය තුළය, එය අපගේ උත්සවයන්ගේ සදාකාලික චක්‍රය තුළින් සමරනු ලැබේ.\""}
        </p>
        <div className="w-32 h-1.5 insta-gradient mx-auto rounded-full shadow-3xl animate-pulse" />
      </div>
    </section>
  );
};

export default Festivals;