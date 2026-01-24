
import React, { useState, useEffect } from 'react';
import { Language, User } from '../types.ts';
import { 
  Menu, 
  X, 
  Globe, 
  LogIn, 
  LogOut, 
  ChevronRight, 
  Sparkles, 
  Compass, 
  Search, 
  ShoppingBag, 
  ChevronDown, 
  BedDouble, 
  Map, 
  Zap, 
  Database, 
  Signal, 
  Activity, 
  Wallet, 
  Mountain, 
  Utensils, 
  Music, 
  Target, 
  ShoppingCart, 
  Users,
  Sprout,
  PartyPopper,
  MessageSquare,
  PawPrint,
  Backpack,
  HelpCircle,
  Wind,
  Waves,
  Car,
  MapPin
} from 'lucide-react';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  setView: (view: any) => void;
  currentView: string;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export const TravelHubLogo = ({ size = 48, className = "" }) => (
  <div className={`relative group/logo-svg ${className}`} role="img" aria-label="Travel Hub Sri Lanka Logo">
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_25px_rgba(225,48,108,0.4)] transition-all duration-700 group-hover/logo-svg:scale-110">
      <circle cx="50" cy="50" r="40" fill="url(#logo_pulse_grad)" className="animate-pulse opacity-20" />
      <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.5" strokeDasharray="4 12" className="animate-spin-slow opacity-20" />
      <circle cx="50" cy="50" r="44" stroke="#E1306C" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="30 200" className="animate-logo-sweep" />
      <g className="neural-mesh opacity-80">
        <line x1="50" y1="50" x2="50" y2="20" stroke="white" strokeWidth="1" className="animate-pulse" />
        <line x1="50" y1="50" x2="25" y2="70" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <line x1="50" y1="50" x2="75" y2="70" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
        <circle cx="50" cy="50" r="6" fill="#E1306C" className="animate-pulse" />
        <circle cx="50" cy="20" r="3" fill="white" />
        <circle cx="25" cy="70" r="3" fill="white" />
        <circle cx="75" cy="70" r="3" fill="white" />
      </g>
      <defs>
        <radialGradient id="logo_pulse_grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E1306C" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes logo-sweep {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-logo-sweep {
        transform-origin: center;
        animation: logo-sweep 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
    `}} />
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ 
  language, 
  setLanguage, 
  setView, 
  currentView,
  user,
  onLogin,
  onLogout
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view: any, anchor?: string) => {
    setView(view);
    setIsOpen(false);
    setActiveDropdown(null);
    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const navLinks = [
    { id: 'home', label: language === 'EN' ? 'Home' : 'මුල් පිටුව' },
    { id: 'destinations', label: language === 'EN' ? 'Reality' : 'යථාර්ථය' },
    { 
      id: 'heritage', 
      label: language === 'EN' ? 'HERITAGE' : 'උරුමය', 
      hasDropdown: true,
      items: [
        { id: 'destinations', label: language === 'EN' ? 'Wildlife' : 'වනජීවී', icon: <PawPrint size={14} /> },
        { id: 'hiking', label: language === 'EN' ? 'Hiking' : 'කඳු තරණය', icon: <Mountain size={14} /> },
        { id: 'foods', label: language === 'EN' ? 'Food' : 'ආහාර', icon: <Utensils size={14} /> },
        { id: 'music', label: language === 'EN' ? 'Music' : 'සංගීතය', icon: <Music size={14} /> },
        { id: 'medicine', label: language === 'EN' ? 'Medicine' : 'හෙළ වෙදකම', icon: <Activity size={14} /> },
        { id: 'tea', label: language === 'EN' ? 'Tea Culture' : 'තේ සංස්කෘතිය', icon: <Sprout size={14} /> },
        { id: 'phrases', label: language === 'EN' ? 'Language' : 'භාෂාව', icon: <MessageSquare size={14} /> },
        { id: 'essentials', label: language === 'EN' ? 'Travel Guide' : 'සංචාරක උපදෙස්', icon: <Backpack size={14} /> },
        { id: 'festivals', label: language === 'EN' ? 'Festivals' : 'සංස්කෘතික උත්සව', icon: <PartyPopper size={14} /> },
      ]
    },
    { 
      id: 'marketplace', 
      label: language === 'EN' ? 'BOOKING' : 'වෙන්කිරීම්', 
      premium: true,
      hasDropdown: true,
      items: [
        { id: 'hotels', label: language === 'EN' ? 'Hotels' : 'හෝටල්', icon: <BedDouble size={14} /> },
        { id: 'booking-destinations', label: language === 'EN' ? 'Destinations' : 'ගමනාන්ත', icon: <MapPin size={14} /> },
        { id: 'transport', label: language === 'EN' ? 'Transport' : 'ප්‍රවාහනය', icon: <Car size={14} /> }
      ]
    },
    { id: 'shop', label: language === 'EN' ? 'STORE' : 'වෙළඳසැල' },
    { id: 'community', label: language === 'EN' ? 'COMMUNITY' : 'සමූහය' }
  ];

  return (
    <div className={`fixed left-0 right-0 z-[70] transition-all duration-700 flex justify-center pointer-events-none ${scrolled ? 'top-3' : 'top-8'}`}>
      <nav 
        className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] relative flex items-center justify-between px-6 md:px-10 w-[94%] max-w-[1600px] py-3.5 bg-black/85 backdrop-blur-[60px] rounded-full border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.5)] pointer-events-auto group/nav ${
          scrolled ? 'py-3 bg-black/95 border-white/30' : ''
        }`}
      >
        {/* Animated Top Scan Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E1306C] to-transparent opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 animate-nav-scan pointer-events-none" />
        
        {/* Left Side: Brand */}
        <button 
          onClick={() => handleNav('home')}
          className="flex items-center gap-4 group/logo shrink-0"
        >
          <TravelHubLogo size={scrolled ? 40 : 48} />
          <div className="flex flex-col items-start leading-none gap-1 hidden sm:flex">
            <span className="font-heritage font-black text-[16px] md:text-[19px] uppercase tracking-[0.25em] text-white">Travel Hub</span>
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-[#E1306C] rounded-full animate-pulse shadow-[0_0_8px_#E1306C]" />
               <span className="font-black text-[7px] uppercase tracking-[0.4em] text-white/40">SRI LANKA • CORE_V4</span>
            </div>
          </div>
        </button>

        {/* Center: Main Links */}
        <div className="hidden lg:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => (
            <div 
              key={link.id} 
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => !link.hasDropdown && handleNav(link.id as any)} 
                className={`px-6 py-2.5 rounded-full flex items-center gap-2.5 transition-all duration-500 relative group/link ${
                  currentView === link.id || (link.id === 'marketplace' && ['hotels', 'transport', 'booking-destinations'].includes(currentView)) || (link.id === 'heritage' && ['destinations', 'hiking', 'foods', 'music', 'medicine', 'tea', 'phrases', 'essentials', 'festivals'].includes(currentView))
                    ? 'text-white' 
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {/* Active Underglow / Hover State */}
                {(currentView === link.id || activeDropdown === link.id || (link.id === 'marketplace' && ['hotels', 'transport', 'booking-destinations'].includes(currentView)) || (link.id === 'heritage' && ['destinations', 'hiking', 'foods', 'music', 'medicine', 'tea', 'phrases', 'essentials', 'festivals'].includes(currentView))) && (
                  <div className="absolute inset-0 bg-white/10 rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] animate-in fade-in zoom-in duration-500" />
                )}
                
                <span className="text-[10px] font-black uppercase tracking-[0.3em] relative z-10 flex items-center gap-2">
                  {link.premium && <Zap size={10} className="text-yellow-400 fill-current animate-pulse" />}
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={12} className={`transition-transform duration-500 ${activeDropdown === link.id ? 'rotate-180' : 'opacity-40'}`} />
                  )}
                </span>
              </button>

              {/* Sub-menu Dropdown */}
              {link.hasDropdown && activeDropdown === link.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-72 animate-in fade-in slide-in-from-top-3 duration-500 z-[80]">
                  <div className="bg-black/95 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_50px_120px_rgba(0,0,0,0.9)] border border-white/20 p-4 space-y-1 relative overflow-hidden max-h-[75vh] overflow-y-auto no-scrollbar">
                    {/* Inner Dropdown Glow */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#E1306C]/10 blur-[40px] rounded-full pointer-events-none" />
                    
                    {link.items?.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNav(item.id as any)}
                        className="w-full flex items-center gap-4 px-5 py-4 hover:bg-white/10 rounded-2xl transition-all group/item text-left border border-transparent hover:border-white/10"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover/item:text-[#E1306C] group-hover/item:bg-white/10 group-hover/item:shadow-[0_0_15px_rgba(225,48,108,0.3)] transition-all">
                          {item.icon}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/70 group-hover/item:text-white group-hover/item:translate-x-1 transition-all">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={() => setLanguage(language === 'EN' ? 'SI' : 'EN')}
            className="hidden sm:flex items-center gap-3 px-5 py-2.5 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest bg-white/5 hover:bg-white/15 text-white border border-white/10 active:scale-95"
          >
            <Globe size={14} className="text-[#E1306C]" />
            {language}
          </button>

          {user ? (
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-3 p-1.5 pr-5 rounded-full bg-white/10 border border-white/20 hover:border-white/40 transition-all active:scale-95 group/user"
              >
                <div className="w-9 h-9 rounded-full border border-[#E1306C] shadow-[0_0_15px_rgba(225,48,108,0.4)] overflow-hidden">
                  <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <span className="hidden sm:inline text-[10px] font-black uppercase tracking-widest text-white">{user.name.split(' ')[0]}</span>
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-4 w-72 bg-black/95 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_50px_120px_rgba(0,0,0,1)] border border-white/20 py-6 animate-in fade-in slide-in-from-top-4 duration-500 z-[80]">
                  <div className="px-8 py-4 border-b border-white/10 mb-2">
                    <p className="text-[13px] font-black text-white uppercase tracking-widest">{user.name}</p>
                    <p className="text-[9px] text-white/40 font-bold tracking-tight truncate uppercase mt-1">{user.email}</p>
                  </div>
                  <button 
                    onClick={() => { onLogout(); setShowUserMenu(false); }}
                    className="w-full flex items-center gap-4 px-8 py-5 text-[11px] font-black text-red-400 hover:bg-red-500/10 transition-all uppercase tracking-widest"
                  >
                    <LogOut size={16} /> Terminate_Session
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={onLogin}
              className="relative w-12 h-12 flex items-center justify-center bg-white text-black rounded-full transition-all duration-500 hover:scale-110 active:scale-90 shadow-2xl group/login overflow-hidden border border-white/50"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E1306C] to-purple-500 opacity-0 group-hover/login:opacity-20 transition-opacity" />
              <LogIn size={22} className="relative z-10" />
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-white transition-all active:scale-90"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar (Overlay) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/98 backdrop-blur-[100px] z-[60] flex flex-col p-10 pt-32 animate-in fade-in slide-in-from-top-10 duration-700 pointer-events-auto overflow-y-auto">
          <div className="flex flex-col gap-10 pb-10">
            {navLinks.map((link, i) => (
              <div key={link.id} className="space-y-4">
                <button 
                  onClick={() => !link.hasDropdown && handleNav(link.id as any)}
                  className="group flex items-center justify-between w-full"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className={`text-4xl font-heritage font-bold transition-all ${
                    currentView === link.id ? 'text-white translate-x-4' : 'text-white/30'
                  }`}>
                    {link.label}
                  </span>
                  {!link.hasDropdown && <ChevronRight className={`text-[#E1306C] transition-all ${currentView === link.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} size={28} />}
                </button>
                
                {link.hasDropdown && (
                  <div className="grid grid-cols-2 gap-4 pl-4 pt-2">
                    {link.items?.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNav(item.id as any)}
                        className="flex items-center gap-3 py-2 text-white/50 hover:text-[#E1306C] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto space-y-6 pt-10">
            <button 
              onClick={() => { setLanguage(language === 'EN' ? 'SI' : 'EN'); setIsOpen(false); }}
              className="w-full py-8 rounded-[2.5rem] text-[12px] font-black uppercase tracking-[0.5em] text-white border border-white/10 flex items-center justify-center gap-6 bg-white/5 active:scale-95 transition-all"
            >
              <Globe size={24} className="text-[#E1306C]" />
              {language === 'EN' ? 'RECODE LANGUAGE' : 'භාෂාව මාරු කරන්න'}
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes nav-scan {
          0% { transform: translateX(-150%) scaleX(0.5); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateX(150%) scaleX(0.5); opacity: 0; }
        }
        .animate-nav-scan {
          animation: nav-scan 5s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Navbar;
