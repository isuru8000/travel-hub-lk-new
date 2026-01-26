
import React, { useState, useMemo, useRef } from 'react';
import { Language, Destination } from '../types.ts';
import { DESTINATIONS, UI_STRINGS } from '../constants.tsx';
import { 
  Compass, 
  MapPin, 
  Info, 
  ArrowRight, 
  Sparkles, 
  Target, 
  Search, 
  X,
  Zap,
  Layers,
  Database,
  Globe,
  Star,
  Activity,
  Maximize2
} from 'lucide-react';

interface IslandMapManifoldProps {
  language: Language;
  onSelectDestination: (dest: Destination) => void;
}

const IslandMapManifold: React.FC<IslandMapManifoldProps> = ({ language, onSelectDestination }) => {
  const [hoveredNode, setHoveredNode] = useState<Destination | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | Destination['category']>('all');
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredNodes = useMemo(() => {
    return DESTINATIONS.filter(d => {
      const matchesSearch = d.name.EN.toLowerCase().includes(searchQuery.toLowerCase()) || d.name.SI.includes(searchQuery);
      const matchesCategory = categoryFilter === 'all' || d.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  const categoryColors = {
    ancient: '#F59E0B', // Amber
    beach: '#0EA5E9',   // Sky
    wildlife: '#10B981', // Emerald
    mountains: '#8B5CF6' // Violet
  };

  return (
    <section className="relative h-screen w-full bg-[#020205] overflow-hidden flex items-center justify-center pt-20">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#E1306C 1px, transparent 1px), linear-gradient(90deg, #E1306C 1px, transparent 1px)`, 
            backgroundSize: '120px 120px', 
            transform: 'perspective(1000px) rotateX(60deg) translateY(200px) scale(3)',
            maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)' 
          }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,48,108,0.03)_0%,transparent_70%)] animate-pulse" />
      </div>

      {/* SEARCH & FILTER UI */}
      <div className="absolute top-32 left-8 md:left-12 z-30 max-w-sm w-full space-y-6 animate-in slide-in-from-left-8 duration-1000">
        <div className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 space-y-8 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
           <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#E1306C]">
                <Target size={18} className="animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Geospatial_Control</span>
              </div>
              <h2 className="text-3xl font-heritage font-bold text-white uppercase tracking-tighter">Hub Map.</h2>
           </div>

           <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#E1306C] transition-colors" size={18} />
              <input 
                type="text"
                placeholder={language === 'EN' ? "Locate node..." : "දත්තය සොයන්න..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 transition-all font-bold"
              />
           </div>

           <div className="grid grid-cols-2 gap-3">
              {['all', 'ancient', 'mountains', 'beach', 'wildlife'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat as any)}
                  className={`px-4 py-2 rounded-xl text-[8px] font-black uppercase tracking-widest border transition-all ${
                    categoryFilter === cat 
                      ? 'bg-white text-black border-white shadow-lg' 
                      : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>

           <div className="pt-4 flex items-center justify-between opacity-40">
              <div className="flex items-center gap-2">
                 <Activity size={12} className="text-green-500" />
                 <span className="text-[9px] font-black uppercase">Live_Nodes: {filteredNodes.length}</span>
              </div>
              <Database size={14} />
           </div>
        </div>

        {/* Legend */}
        <div className="bg-black/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 flex flex-wrap gap-6 items-center justify-center shadow-2xl">
           {Object.entries(categoryColors).map(([cat, color]) => (
             <div key={cat} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
                <span className="text-[7px] font-black uppercase tracking-widest text-white/30">{cat}</span>
             </div>
           ))}
        </div>
      </div>

      {/* THE MAIN MAP MANIFOLD */}
      <div className="relative w-full h-full max-w-5xl flex items-center justify-center p-12">
        <div className="relative w-full h-full animate-in zoom-in duration-[1500ms] ease-out flex items-center justify-center">
          
          {/* REAL TOPOGRAPHICAL MAP BACKGROUND */}
          <div className="relative aspect-[3/4] h-[90%] group/map-container">
            {/* The Real Map Image */}
            <img 
              src="https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80" 
              className="absolute inset-0 w-full h-full object-contain opacity-40 grayscale contrast-125 brightness-75 scale-110 blur-[1px] transition-all duration-1000 group-hover/map-container:opacity-60 group-hover/map-container:blur-0"
              alt="Sri Lanka Topography"
              style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)' }}
            />
            
            {/* Regional Overlays / Living Terrain */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(245,158,11,0.05)_0%,transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(139,92,246,0.05)_0%,transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_85%,rgba(14,165,233,0.05)_0%,transparent_30%)]" />

            {/* CYBER SCANLINES OVER MAP */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-10">
               <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#E1306C] to-transparent shadow-[0_0_20px_#E1306C] animate-scan-slow absolute left-0" />
            </div>

            {/* DESTINATION NODES */}
            <div className="absolute inset-0 z-20">
              {filteredNodes.map((node) => {
                if (!node.coordinates) return null;
                const isHovered = hoveredNode?.id === node.id;
                const color = categoryColors[node.category] || '#ffffff';

                return (
                  <div 
                    key={node.id}
                    className="absolute group"
                    style={{ 
                      left: `${node.coordinates.x}%`, 
                      top: `${node.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onMouseEnter={() => setHoveredNode(node)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => onSelectDestination(node)}
                  >
                    {/* Node Ring */}
                    <div 
                      className={`relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center transition-all duration-500 cursor-pointer ${isHovered ? 'scale-150' : 'scale-100'}`}
                    >
                       {/* Pulsing Aura */}
                       <div 
                          className="absolute inset-0 rounded-full animate-ping opacity-40" 
                          style={{ backgroundColor: color, animationDuration: '3s' }} 
                       />
                       <div 
                          className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-40 scale-100'}`}
                          style={{ borderColor: color, boxShadow: isHovered ? `0 0 25px ${color}` : 'none' }}
                       />
                       
                       {/* Center Dot */}
                       <div 
                         className="w-2.5 h-2.5 rounded-full z-10 transition-all duration-300"
                         style={{ 
                            backgroundColor: color, 
                            boxShadow: `0 0 15px ${color}`,
                            transform: isHovered ? 'scale(1.5)' : 'scale(1)'
                         }}
                       />
                    </div>

                    {/* POPUP DATA SHARD */}
                    {isHovered && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 w-64 animate-in slide-in-from-bottom-4 zoom-in-95 duration-500 z-50 pointer-events-none">
                        <div className="bg-black/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/20 p-2 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                           <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-4 border border-white/10">
                              <img src={node.image} className="w-full h-full object-cover animate-in fade-in duration-1000" alt="" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                              <div className="absolute bottom-4 left-6">
                                 <p className="text-[10px] font-black uppercase tracking-widest text-white/60">{node.location}</p>
                              </div>
                           </div>
                           <div className="px-6 pb-6 pt-2 space-y-4">
                              <div className="space-y-1">
                                 <p className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color }}>NODE_ENTRY_READY</p>
                                 <h4 className="text-xl font-heritage font-bold text-white uppercase tracking-tight leading-tight">{node.name[language]}</h4>
                              </div>
                              <p className="text-[10px] text-gray-400 font-medium italic leading-relaxed line-clamp-2">"{node.shortStory[language]}"</p>
                              <div className="pt-2 flex items-center justify-between border-t border-white/5">
                                 <div className="flex items-center gap-2">
                                    <Sparkles size={10} className="text-yellow-400" />
                                    <span className="text-[8px] font-black uppercase text-white/30">SYNC_AUTHORIZED</span>
                                 </div>
                                 <ArrowRight size={14} className="text-white/40" />
                              </div>
                           </div>
                        </div>
                        {/* Shard stem */}
                        <div className="w-px h-10 bg-gradient-to-t from-white/20 to-transparent mx-auto" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER STATUS HUD */}
      <div className="absolute bottom-12 right-12 text-right hidden md:block">
         <div className="space-y-2 opacity-30">
            <p className="text-[10px] font-black uppercase tracking-[0.8em] text-white">Registry_Manifold_v5.0</p>
            <p className="text-2xl font-heritage font-bold text-white">100% TOPOGRAPHY SYNC</p>
         </div>
      </div>

      {/* HUD Compass Decoration */}
      <div className="absolute bottom-12 left-12 opacity-10 pointer-events-none hidden lg:block">
         <Compass size={200} className="text-white animate-spin-slow" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-slow {
          0% { top: -10%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        .animate-scan-slow { animation: scan-slow 8s linear infinite; }
        .animate-spin-slow { animation: spin 40s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}} />
    </section>
  );
};

export default IslandMapManifold;
