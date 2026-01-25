import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Language } from '../types.ts';
import { 
  Gem, 
  Zap, 
  Crown, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  MapPin, 
  MessageSquare, 
  Star,
  Coffee,
  BedDouble,
  Waves,
  Sparkles,
  Calendar,
  Users,
  Loader2,
  CheckCircle2,
  Lock,
  CreditCard,
  ChevronRight,
  ShieldAlert,
  Info,
  Utensils,
  Wind,
  Car,
  Minus,
  Plus,
  ChevronDown,
  Building2,
  CircleDollarSign,
  ClipboardCheck,
  CircleX,
  Target,
  ChevronUp,
  Radio,
  FastForward,
  Plane,
  ShieldHalf,
  Bot,
  Hammer,
  Download,
  Printer,
  ExternalLink,
  QrCode,
  Scan,
  Orbit
} from 'lucide-react';
import HotelModal from './HotelModal.tsx';

declare global {
  interface Window {
    paypal: any;
  }
}

interface MarketplaceProps {
  language: Language;
}

const PREMIUM_PACKAGES = [
  {
    id: 'p1',
    title: { EN: 'Ancient Majesty Tour', SI: 'පුරාණ රාජකීය සංචාරය' },
    price: 1299,
    duration: '7 Days',
    type: 'ALL-INCLUSIVE',
    image: 'https://plus.unsplash.com/premium_photo-1661954483883-edd65eac3577?q=80&w=1170&auto=format&fit=crop',
    features: { EN: ['Private Chauffeur', '5-Star Heritage Stays', 'VIP Temple Access'], SI: ['පෞද්ගලික රියදුරු', 'තරු 5 හෝටල්', 'විශේෂ දළදා වන්දනා'] }
  },
  {
    id: 'p2',
    title: { EN: 'Highland Tea Retreat', SI: 'කඳුකර තේ අත්දැකීම' },
    price: 850,
    duration: '4 Days',
    type: 'WELLNESS',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    features: { EN: ['Tea Factory Stay', 'Ayurvedic Spa', 'Scenic Train VIP'], SI: ['තේ වතු හෝටල්', 'ආයුර්වේද ප්‍රතිකාර', 'දුම්රිය විශේෂ පහසුකම්'] }
  }
];

const FUTURE_NODES = [
  {
    id: 'f1',
    title: { EN: 'Secret Jungle Expedition', SI: 'රහස් වනාන්තර සංචාරය' },
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
    type: 'EXPLORATION'
  },
  {
    id: 'f2',
    title: { EN: 'Sapphire Waters Yachting', SI: 'නිල්වන් සාගර යාත්‍රා' },
    image: 'https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=800&q=80',
    type: 'LUXURY'
  },
  {
    id: 'f3',
    title: { EN: 'Heritage Hot Air Balloon', SI: 'උරුම ගුවන් බැලුන්' },
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    type: 'ADVENTURE'
  }
];

const LUXURY_HOTELS = [
  {
    id: 'h1',
    name: { EN: 'Cinnamon Grand Colombo', SI: 'සිනමන් ග්‍රෑන්ඩ් කොළඹ' },
    location: 'Colombo',
    price: 180,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'],
    tag: 'ULTRA-PREMIUM',
    rating: 5,
    description: { EN: "Benchmark of luxury.", SI: "සුඛෝපභෝගීත්වයේ සලකුණ." },
    amenities: [{ icon: <Utensils size={18} />, label: { EN: "Fine Dining", SI: "රසවත් ආහාර" } }],
    reviews: []
  }
];

const Marketplace: React.FC<MarketplaceProps> = ({ language }) => {
  const [bookingState, setBookingState] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    isProcessingPayment: false,
    isSuccess: false,
    error: null as string | null
  });

  const handleBookingTrigger = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingState.destination) return;
    setBookingState(prev => ({ ...prev, isProcessingPayment: true }));
    await new Promise(resolve => setTimeout(resolve, 2000));
    setBookingState(prev => ({ ...prev, isSuccess: true, isProcessingPayment: false }));
  };

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Success Modal */}
      {bookingState.isSuccess && (
        <div className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 text-center text-white">
          <div className="space-y-8 max-w-md animate-in zoom-in duration-500">
            <CheckCircle2 size={100} className="mx-auto text-green-500 animate-bounce" />
            <h2 className="text-5xl font-heritage font-bold uppercase tracking-tighter">Sync Successful</h2>
            <p className="text-xl italic opacity-70">"Your journey node has been archived in the manifest."</p>
            <button onClick={() => setBookingState(p => ({...p, isSuccess: false}))} className="px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest hover:scale-110 transition-all">Done</button>
          </div>
        </div>
      )}

      {/* Cinematic Header */}
      <div className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(#E1306C 1px, transparent 1px), linear-gradient(90deg, #E1306C 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-white" />
        <div className="relative text-center space-y-8 px-6 max-w-5xl animate-in fade-in zoom-in duration-1000">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
             <Crown size={16} className="text-yellow-500 animate-pulse" />
             High-Fidelity Booking Registry
          </div>
          <h2 className="text-6xl md:text-[10rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            ARCHIVE <br/><span className="italic insta-text-gradient">ACCESS.</span>
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 space-y-40">
        {/* Booking Form Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#E1306C] via-purple-500 to-blue-500 rounded-[5rem] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative bg-white/95 backdrop-blur-[60px] p-8 md:p-20 rounded-[5rem] shadow-2xl border border-gray-50 space-y-16">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-6xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Sync Configuration.</h3>
              <div className="w-32 h-1.5 insta-gradient rounded-full" />
            </div>

            <form onSubmit={handleBookingTrigger} className="grid grid-cols-1 xl:grid-cols-6 gap-10">
              <div className="xl:col-span-3 space-y-4">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] ml-4">Target Node</label>
                <select 
                  required
                  value={bookingState.destination}
                  onChange={(e) => setBookingState(prev => ({...prev, destination: e.target.value}))}
                  className="w-full px-10 py-8 bg-gray-50 border-2 border-transparent rounded-[3rem] focus:bg-white focus:border-[#E1306C]/20 outline-none transition-all font-bold text-xl appearance-none shadow-inner"
                >
                  <option value="">Select Registry...</option>
                  {PREMIUM_PACKAGES.map(p => <option key={p.id} value={p.title.EN}>{p.title[language]}</option>)}
                  {LUXURY_HOTELS.map(h => <option key={h.id} value={h.name.EN}>{h.name[language]}</option>)}
                </select>
              </div>
              <div className="xl:col-span-2 grid grid-cols-2 gap-4">
                 <input required type="date" value={bookingState.checkIn} onChange={e => setBookingState(p => ({...p, checkIn: e.target.value}))} className="w-full px-8 py-8 bg-gray-50 rounded-[3rem] shadow-inner font-bold" />
                 <input required type="date" value={bookingState.checkOut} onChange={e => setBookingState(p => ({...p, checkOut: e.target.value}))} className="w-full px-8 py-8 bg-gray-50 rounded-[3rem] shadow-inner font-bold" />
              </div>
              <div className="xl:col-span-1">
                 <button type="submit" disabled={bookingState.isProcessingPayment} className="w-full h-full bg-[#0a0a0a] text-white rounded-[3rem] font-black text-xs uppercase tracking-widest hover:bg-[#E1306C] transition-all flex items-center justify-center gap-4">
                    {bookingState.isProcessingPayment ? <Loader2 className="animate-spin" /> : <Zap size={18} fill="currentColor" />}
                    Sync
                 </button>
              </div>
            </form>
          </div>
        </div>

        {/* FUTURE NODES: THE BLUR SECTION */}
        <div className="space-y-20">
           <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.6em] mx-auto animate-pulse">
                 <Scan size={14} /> Phase_02_Registry_Expansion
              </div>
              <h3 className="text-5xl md:text-8xl font-heritage font-bold text-[#0a0a0a] tracking-tighter uppercase leading-none">
                 FUTURE <span className="text-blue-500 italic">MANIFOLDS.</span>
              </h3>
              <p className="text-gray-400 font-light italic text-xl">"Locked archival nodes currently undergoing high-fidelity calibration."</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {FUTURE_NODES.map((node, idx) => (
                <div key={node.id} className="group relative h-[500px] rounded-[4rem] bg-black overflow-hidden border border-white/5 shadow-2xl transition-all duration-1000 hover:border-blue-500/30">
                   <img src={node.image} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-all duration-1000 group-hover:scale-110" alt={node.title[language]} />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                   
                   {/* Scanning Line Effect */}
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_20px_#3b82f6] opacity-0 group-hover:opacity-100 animate-scan-slow z-20" style={{ animationDelay: `${idx * 1.5}s` }} />

                   <div className="absolute inset-0 p-12 flex flex-col justify-between items-center text-center z-10">
                      <div className="px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/40">
                         {node.type}
                      </div>

                      <div className="w-24 h-24 rounded-[2.5rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-3xl group-hover:scale-110 transition-transform duration-700 relative">
                         <div className="absolute inset-0 border border-blue-500/10 rounded-[2.5rem] animate-ping" />
                         <Lock size={40} className="animate-pulse" />
                      </div>

                      <div className="space-y-4">
                         <h4 className="text-3xl font-heritage font-bold text-white uppercase tracking-tight">{node.title[language]}</h4>
                         <div className="flex flex-col items-center gap-3">
                            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em]">SYNCING PROTOCOL...</span>
                            <div className="w-12 h-1 bg-blue-500/20 rounded-full overflow-hidden">
                               <div className="h-full bg-blue-500 animate-pulse w-1/3" />
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* "COOMING SOON" Overlay */}
                   <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center pointer-events-none">
                      <div className="px-10 py-4 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-[0_0_40px_rgba(59,130,246,0.6)] animate-pulse">
                         COMMING SOON
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-slow {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(500px); opacity: 0; }
        }
        .animate-scan-slow { animation: scan-slow 5s linear infinite; }
        .shadow-3xl { box-shadow: 0 0 50px rgba(59, 130, 246, 0.3); }
      `}} />
    </div>
  );
};

export default Marketplace;
