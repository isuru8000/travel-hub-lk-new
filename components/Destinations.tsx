import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Language, Destination } from '../types.ts';
import { DESTINATIONS, UI_STRINGS } from '../constants.tsx';
import { 
  Search, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ArrowRight, 
  X, 
  RotateCcw,
  Landmark,
  Waves,
  PawPrint,
  Mountain,
  LayoutGrid,
  Compass,
  Loader2,
  History,
  Target,
  Cpu,
  Scan,
  Zap,
  Activity,
  Database,
  Brain,
  Sparkles
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ITEMS_PER_PAGE = 6;

interface DestinationsProps {
  language: Language;
  onSelectDestination: (dest: Destination) => void;
}

const Destinations: React.FC<DestinationsProps> = ({ language, onSelectDestination }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [isGeneratingInsight, setIsGeneratingInsight] = useState(false);
  
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', EN: 'All', SI: 'සියල්ල', icon: LayoutGrid },
    { id: 'ancient', EN: 'Ancient', SI: 'පුරාණ', icon: Landmark },
    { id: 'beach', EN: 'Beaches', SI: 'වෙරළ', icon: Waves },
    { id: 'wildlife', EN: 'Wildlife', SI: 'වනජීවී', icon: PawPrint },
    { id: 'mountains', EN: 'Hills', SI: 'කඳුකරය', icon: Mountain },
  ];

  const popularSearches = [
    { EN: "Sigiriya", SI: "සීගිරිය" },
    { EN: "Ella", SI: "ඇල්ල" },
    { EN: "Anuradhapura", SI: "අනුරාධපුර" },
    { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }
  ];

  const locations = useMemo(() => {
    const unique = Array.from(new Set(DESTINATIONS.map(d => d.location)));
    return ['all', ...unique];
  }, []);

  // Filter based on search but NOT category yet (to show counts)
  const searchMatches = useMemo(() => {
    return DESTINATIONS.filter(d => {
      const matchesLocation = locationFilter === 'all' || d.location === locationFilter;
      const matchesSearch = d.name.EN.toLowerCase().includes(search.toLowerCase()) || 
                            d.name.SI.includes(search);
      return matchesLocation && matchesSearch;
    });
  }, [locationFilter, search]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: searchMatches.length };
    categories.forEach(cat => {
      if (cat.id !== 'all') {
        counts[cat.id] = searchMatches.filter(d => d.category === cat.id).length;
      }
    });
    return counts;
  }, [searchMatches, categories]);

  const filteredDestinations = useMemo(() => {
    return searchMatches.filter(d => {
      const matchesCategory = categoryFilter === 'all' || d.category === categoryFilter;
      return matchesCategory;
    });
  }, [searchMatches, categoryFilter]);

  const dynamicSuggestions = useMemo(() => {
    if (search.length < 2) return [];
    return DESTINATIONS
      .filter(d => 
        d.name.EN.toLowerCase().includes(search.toLowerCase()) || 
        d.name.SI.includes(search)
      )
      .slice(0, 5);
  }, [search]);

  // AI Insight Generation Logic
  useEffect(() => {
    if (search.length > 3) {
      const timer = setTimeout(async () => {
        setIsGeneratingInsight(true);
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `As an elite Sri Lanka travel archivist, provide a one-sentence high-fidelity summary about: ${search}. If it's a specific place, mention its aura. Language: ${language === 'SI' ? 'Sinhala' : 'English'}.`,
          });
          setAiInsight(response.text || null);
        } catch (e) {
          console.error("Insight generation failed", e);
        } finally {
          setIsGeneratingInsight(false);
        }
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setAiInsight(null);
    }
  }, [search, language]);

  useEffect(() => {
    setCurrentPage(1);
    if (search) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 800);
      return () => clearTimeout(timer);
    }
  }, [categoryFilter, locationFilter, search]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalPages = Math.ceil(filteredDestinations.length / ITEMS_PER_PAGE);
  const paginatedDestinations = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDestinations.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredDestinations, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setCategoryFilter('all');
    setLocationFilter('all');
    setSearch('');
    setCurrentPage(1);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (name: string) => {
    setSearch(name);
    setShowSuggestions(false);
  };

  return (
    <section id="destinations" className="min-h-screen pb-32 bg-white" aria-labelledby="destinations-title">
      <div className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-[10s] scale-110" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=2000&q=80')` }}
          role="presentation"
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 space-y-6">
          <div className="space-y-4 animate-in fade-in slide-in-from-top-6 duration-1000">
            <h2 id="destinations-title" className="text-5xl md:text-7xl font-heritage font-bold text-[#0a0a0a] tracking-tighter uppercase leading-[1]">
              Reality <span className="italic insta-text-gradient">Portals.</span>
            </h2>
            <p className="text-gray-500 font-light italic text-lg md:text-xl max-w-2xl mx-auto">
              {language === 'EN' ? "Search for an entry point to Ancient Lanka." : "පැරණි ලංකාවට පිවිසුමක් සොයන්න."}
            </p>
          </div>

          <div className="max-w-2xl mx-auto relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500" ref={searchWrapperRef}>
            <div className={`relative group overflow-hidden rounded-[2.5rem] bg-white border transition-all duration-700 z-30 ${isFocused ? 'shadow-[0_40px_100px_rgba(14,165,233,0.25)] border-[#0EA5E9] scale-[1.02]' : 'shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-gray-300'}`}>
              <div className="absolute inset-y-0 left-8 flex items-center">
                {isSearching ? (
                  <Loader2 size={20} className="animate-spin text-[#0EA5E9]" />
                ) : (
                  <Search size={20} className={isFocused ? 'text-[#0EA5E9]' : 'text-gray-600'} />
                )}
              </div>

              <input 
                type="text" 
                aria-label={UI_STRINGS.searchPlaceholder[language]}
                placeholder={UI_STRINGS.searchPlaceholder[language]}
                value={search}
                onFocus={() => { setShowSuggestions(true); setIsFocused(true); }}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowSuggestions(true);
                }}
                className="w-full pl-20 pr-20 py-5 md:py-6 bg-transparent text-lg md:text-xl font-bold focus:outline-none placeholder:text-gray-700 placeholder:italic text-[#0a0a0a]"
              />

              <div className="absolute inset-y-0 right-8 flex items-center gap-4">
                {search && (
                  <button onClick={() => { setSearch(''); setShowSuggestions(false); }} className="p-2 text-gray-400 hover:text-red-500 transition-all">
                    <X size={18} />
                  </button>
                )}
                <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#0EA5E9] border border-gray-100 ${isFocused ? 'bg-[#0EA5E9] text-white' : ''}`}>
                   <Target size={20} />
                </div>
              </div>
            </div>

            {showSuggestions && (
              <div className="absolute top-[calc(100%-1rem)] left-0 right-0 bg-white border border-gray-200 rounded-b-[2.5rem] shadow-2xl pt-10 pb-6 z-20 animate-in slide-in-from-top-4">
                <div className="max-h-[400px] overflow-y-auto no-scrollbar px-5 space-y-6">
                  {search.length >= 2 && dynamicSuggestions.length > 0 && (
                    <div className="space-y-1.5">
                      {dynamicSuggestions.map((dest, i) => (
                        <button key={dest.id} onClick={() => handleSuggestionClick(dest.name[language])} className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center justify-between rounded-[1.5rem] transition-all">
                          <div className="flex items-center gap-4">
                            <img src={dest.image} className="w-12 h-12 rounded-[1rem] object-cover" alt="" />
                            <span className="text-base font-bold text-[#0a0a0a]">{dest.name[language]}</span>
                          </div>
                          <ArrowRight size={16} className="text-[#0EA5E9]" />
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="space-y-4">
                    <p className="px-4 text-[9px] font-black text-gray-400 uppercase tracking-widest">Popular Trajectories</p>
                    <div className="grid grid-cols-2 gap-3 px-1">
                      {popularSearches.map((s, i) => (
                        <button key={i} onClick={() => handleSuggestionClick(s[language])} className="text-left px-6 py-4 bg-gray-50 hover:bg-white rounded-[1.8rem] flex items-center gap-4 transition-all border border-transparent hover:border-[#0EA5E9]/30">
                          <History size={16} className="text-gray-300" />
                          <span className="text-xs font-bold text-gray-600">{s[language]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20 space-y-12">
        {/* Dynamic Category Filter Bar with Results Count */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white/90 backdrop-blur-xl p-3 rounded-[3.5rem] shadow-xl border border-white/50">
            {categories.map(cat => (
              <button 
                key={cat.id} 
                onClick={() => setCategoryFilter(cat.id)} 
                className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all text-[10px] font-black uppercase tracking-widest relative group/cat ${categoryFilter === cat.id ? 'bg-[#0a0a0a] text-white' : 'text-gray-400 hover:text-[#0a0a0a]'}`}
              >
                <cat.icon size={14} />
                <span className="flex items-center gap-2">
                  {language === 'EN' ? cat.EN : cat.SI}
                  {categoryCounts[cat.id] > 0 && (
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-md font-bold transition-all ${categoryFilter === cat.id ? 'bg-white/20 text-white' : 'bg-black/5 text-gray-400'}`}>
                      {categoryCounts[cat.id]}
                    </span>
                  )}
                </span>
                {categoryFilter === cat.id && search && (
                   <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#0EA5E9] rounded-full flex items-center justify-center animate-bounce shadow-lg">
                      <Zap size={8} fill="white" className="text-white" />
                   </div>
                )}
              </button>
            ))}
          </div>
          <div className="flex-grow flex items-center gap-4 w-full md:w-auto">
            <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="flex-grow appearance-none px-10 py-6 bg-white border border-gray-200 rounded-[2.5rem] text-[11px] font-black uppercase tracking-widest outline-none cursor-pointer shadow-xl transition-all text-[#0a0a0a]">
              <option value="all">{UI_STRINGS.allRegions[language]}</option>
              {locations.filter(l => l !== 'all').map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
            {(categoryFilter !== 'all' || locationFilter !== 'all' || search) && (
              <button onClick={resetFilters} className="p-6 bg-white border border-gray-200 rounded-[2rem] text-[#E1306C] shadow-xl hover:bg-red-50 transition-all"><RotateCcw size={24} /></button>
            )}
          </div>
        </div>

        {/* AI Neural Insight Box - Integrated Search Result */}
        {(isGeneratingInsight || aiInsight) && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="bg-[#0a0a0a] p-10 md:p-14 rounded-[3.5rem] relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.1)_0%,transparent_50%)] animate-pulse" />
              <div className="absolute top-0 right-0 p-12 opacity-5 text-white group-hover:rotate-12 transition-transform duration-1000">
                 <Brain size={160} />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="w-20 h-20 bg-white/5 backdrop-blur-3xl rounded-[1.8rem] border border-white/10 flex items-center justify-center text-[#0EA5E9] shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/20 to-transparent animate-pulse" />
                   <Sparkles size={32} className="relative z-10" />
                </div>
                <div className="space-y-4 flex-grow text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-4">
                     <span className="text-[10px] font-black text-[#0EA5E9] uppercase tracking-[0.6em]">Registry_Neural_Summary</span>
                     <div className="h-px w-20 bg-white/10 hidden md:block" />
                  </div>
                  {isGeneratingInsight ? (
                    <div className="flex items-center justify-center md:justify-start gap-4 h-12">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-bounce" />
                      </div>
                      <span className="text-gray-500 font-bold italic text-sm">Synthesizing archival data...</span>
                    </div>
                  ) : (
                    <h4 className="text-2xl md:text-4xl font-heritage font-medium text-white/90 leading-tight md:leading-[1.3] italic">
                      "{aiInsight}"
                    </h4>
                  )}
                </div>
                {aiInsight && (
                  <div className="flex flex-col items-end gap-2 text-right hidden md:flex">
                     <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">Protocol</p>
                     <p className="text-xs font-black text-white/60 tracking-widest">GEMINI_3_FLASH</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
          {paginatedDestinations.length > 0 ? paginatedDestinations.map((dest, idx) => {
            return (
              <div key={dest.id} className="group text-left bg-white rounded-[4.5rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:-translate-y-4 transition-all duration-700 animate-in slide-in-from-bottom-12" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="relative h-[400px] overflow-hidden cursor-pointer" onClick={() => onSelectDestination(dest)}>
                  <img src={dest.image} alt={dest.name[language]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[6000ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-10 left-10 right-10 space-y-3">
                     <div className="flex items-center gap-3 text-[#0EA5E9]">
                        <MapPin size={16} />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">{dest.location}</span>
                     </div>
                     <h3 className="text-4xl font-heritage font-bold text-white tracking-tight leading-tight">
                        {dest.name[language]}
                     </h3>
                  </div>
                </div>
                <div className="p-12 space-y-6 flex-grow flex flex-col justify-between">
                  <p className="text-xl text-gray-500 font-light leading-relaxed italic border-l-4 border-[#0EA5E9]/10 pl-8">
                    "{dest.shortStory[language]}"
                  </p>
                  <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[11px] font-black text-gray-300 uppercase tracking-widest">Protocol Synced</span>
                    <button onClick={() => onSelectDestination(dest)} className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#0EA5E9] group-hover:bg-[#0EA5E9] group-hover:text-white transition-all duration-500">
                       <ArrowRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            );
          }) : (
            <div className="col-span-full py-40 text-center space-y-8 animate-in fade-in duration-1000">
               <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-200">
                  <Search size={48} />
               </div>
               <div className="space-y-4">
                  <h3 className="text-3xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">No Registry Matches Found</h3>
                  <p className="text-gray-400 font-medium italic max-w-md mx-auto leading-relaxed">
                    The requested coordinates or category synchronization returned no results for "{search}". Try clearing filters or search terms.
                  </p>
               </div>
               <button onClick={resetFilters} className="px-12 py-5 bg-[#0a0a0a] text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-xl hover:scale-110 active:scale-95 transition-all">Initialize Reset</button>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 pt-24">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="w-16 h-16 rounded-[2rem] border border-gray-200 bg-white text-gray-300 hover:text-[#0EA5E9] disabled:opacity-10 shadow-xl flex items-center justify-center"><ChevronLeft size={28} /></button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => handlePageChange(i + 1)} className={`w-16 h-16 rounded-[2rem] text-sm font-black shadow-xl ${currentPage === i + 1 ? 'bg-[#0a0a0a] text-white scale-110' : 'bg-white border border-gray-100 text-gray-400'}`}>{i + 1}</button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="w-16 h-16 rounded-[2rem] border border-gray-200 bg-white text-gray-300 hover:text-[#0EA5E9] disabled:opacity-10 shadow-xl flex items-center justify-center"><ChevronRight size={28} /></button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;