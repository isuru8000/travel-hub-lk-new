
import React, { useState, useEffect, useMemo } from 'react';
import { Language, User, Destination } from './types.ts';
import Layout from './components/Layout.tsx';
import Hero from './components/Hero.tsx';
import PopularHighlights from './components/PopularHighlights.tsx';
import Destinations from './components/Destinations.tsx';
import Foods from './components/Foods.tsx';
import HeritageMusic from './components/HeritageMusic.tsx';
import TraditionalMedicine from './components/TraditionalMedicine.tsx';
import TeaCulture from './components/TeaCulture.tsx';
import Hiking from './components/Hiking.tsx';
import Phrasebook from './components/Phrasebook.tsx';
import TravelEssentials from './components/TravelEssentials.tsx';
import Festivals from './components/Festivals.tsx';
import CategoriesSection from './components/CategoriesSection.tsx';
import HeritageHub from './components/HeritageHub.tsx';
import StorySection from './components/StorySection.tsx';
import AIModal from './components/AIModal.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import TravelMemories from './components/TravelMemories.tsx';
import Quiz from './components/Quiz.tsx';
import VRExperience from './components/VRExperience.tsx';
import VRShowcase from './components/VRShowcase.tsx';
import HeritageCollection from './components/HeritageCollection.tsx';
import SearchPortal from './components/SearchPortal.tsx';
import LoginModal from './components/LoginModal.tsx';
import Contact from './components/Contact.tsx';
import Marketplace from './components/Marketplace.tsx';
import Hotels from './components/Hotels.tsx';
import Transport from './components/Transport.tsx';
import BookingDestinations from './components/BookingDestinations.tsx';
import NexusRewards from './components/NexusRewards.tsx';
import ScrollControls from './components/ScrollControls.tsx';
import TravelStore from './components/TravelStore.tsx';
import DestinationDetail from './components/DestinationDetail.tsx';
import { supabase } from './lib/supabase.ts';
import { Sparkles, Compass, ShieldCheck, Star, MapPin, ArrowRight, Database, Box, Layers, Zap, Lock, Scan } from 'lucide-react';

type View = 'home' | 'destinations' | 'hotels' | 'transport' | 'booking-destinations' | 'about' | 'foods' | 'music' | 'interests' | 'medicine' | 'tea' | 'hiking' | 'phrases' | 'essentials' | 'festivals' | 'memories' | 'quiz' | 'vr-experience' | 'vr-showcase' | 'search' | 'contact' | 'marketplace' | 'community' | 'shop' | 'destination-detail';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('EN');
  const [view, setView] = useState<View>('home');
  const [user, setUser] = useState<User | null>(null);
  const [isDataReady, setIsDataReady] = useState(false);
  const [isSiteEntered, setIsSiteEntered] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [selectedDestinationData, setSelectedDestinationData] = useState<Destination | null>(null);

  // Global scroll-to-top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view]);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (!supabase || !supabase.auth) {
      setIsDataReady(true);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          name: session.user.user_metadata.full_name || session.user.email?.split('@')[0] || 'Explorer',
          email: session.user.email || '',
          photo: session.user.user_metadata.avatar_url || `https://ui-avatars.com/api/?name=${session.user.email}`
        });
      }
      setIsDataReady(true);
    }).catch(err => {
      console.warn("Session check failed:", err);
      setIsDataReady(true);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          name: session.user.user_metadata.full_name || session.user.email?.split('@')[0] || 'Explorer',
          email: session.user.email || '',
          photo: session.user.user_metadata.avatar_url || `https://ui-avatars.com/api/?name=${session.user.email}`
        });
        setIsLoginModalOpen(false);
      } else {
        setUser(null);
      }
    });

    return () => {
      if (subscription) subscription.unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleEnterSite = () => {
    setIsSiteEntered(true);
  };

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = async () => {
    if (supabase?.auth) {
      await supabase.auth.signOut();
    }
    setUser(null);
  };

  const navigateToDestination = (dest: Destination) => {
    setSelectedDestinationData(dest);
    setView('destination-detail');
  };

  const renderContent = () => {
    switch (view) {
      case 'community':
      case 'memories':
        return <NexusRewards language={language} user={user} onLogin={handleLogin} setView={setView} />;
      case 'marketplace':
        return <div className="pt-24"><Marketplace language={language} /></div>;
      case 'hotels':
        return <div className="pt-24"><Hotels language={language} /></div>;
      case 'transport':
        return <div className="pt-24"><Transport language={language} /></div>;
      case 'booking-destinations':
        return <div className="pt-24"><BookingDestinations language={language} setView={setView} /></div>;
      case 'shop':
        return <div className="pt-24"><TravelStore language={language} /></div>;
      case 'destinations':
        return <div className="pt-24"><Destinations language={language} onSelectDestination={navigateToDestination} /></div>;
      case 'destination-detail':
        return <DestinationDetail destination={selectedDestinationData} language={language} onBack={() => setView('destinations')} onSelect={navigateToDestination} />;
      case 'foods':
        return <div className="pt-24"><Foods language={language} /></div>;
      case 'music':
        return <div className="pt-24"><HeritageMusic language={language} /></div>;
      case 'medicine':
        return <div className="pt-24"><TraditionalMedicine language={language} /></div>;
      case 'tea':
        return <div className="pt-24"><TeaCulture language={language} /></div>;
      case 'hiking':
        return <div className="pt-24"><Hiking language={language} setView={setView} /></div>;
      case 'phrases':
        return <div className="pt-24"><Phrasebook language={language} /></div>;
      case 'essentials':
        return <div className="pt-24"><TravelEssentials language={language} /></div>;
      case 'festivals':
        return <div className="pt-24"><Festivals language={language} /></div>;
      case 'interests':
        return <div className="pt-24"><CategoriesSection language={language} setView={setView} /></div>;
      case 'quiz':
        return <div className="pt-24"><Quiz language={language} setView={setView} /></div>;
      case 'vr-experience':
        return <div className="pt-24"><VRExperience language={language} setView={setView} /></div>;
      case 'vr-showcase':
        return <VRShowcase language={language} setView={setView} />;
      case 'search':
        return <SearchPortal language={language} />;
      case 'contact':
        return <div className="pt-24"><Contact language={language} /></div>;
      case 'home':
      default:
        return (
          <div className="relative">
            <Hero language={language} setView={setView} />
            <div className="relative z-10">
              {/* BRAND RECOGNITION */}
              <div className="py-12 bg-white/40 backdrop-blur-2xl border-y border-gray-100 overflow-hidden relative">
                 <div className="max-w-full flex whitespace-nowrap animate-marquee opacity-20 grayscale">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex items-center gap-24 px-12">
                        <span className="text-3xl font-heritage font-black uppercase tracking-tighter">Condé Nast Traveler</span>
                        <span className="text-3xl font-heritage font-black uppercase tracking-tighter">National Geographic</span>
                        <span className="text-3xl font-heritage font-black uppercase tracking-tighter">The New York Times</span>
                        <span className="text-3xl font-heritage font-black uppercase tracking-tighter">Lonely Planet</span>
                      </div>
                    ))}
                 </div>
              </div>

              <PopularHighlights language={language} onSelectDestination={navigateToDestination} setView={setView} />
              
              <div id="heritage-hub">
                <HeritageHub language={language} setView={setView} />
              </div>

              {/* --- NEW: FUTURE MANIFOLD (BLURRED TEASERS) --- */}
              <section className="py-40 bg-[#020205] relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(225,48,108,0.1)_0%,transparent_50%)] animate-pulse" />
                 
                 <div className="max-w-7xl mx-auto px-6 space-y-32 relative z-10">
                    <div className="text-center space-y-8">
                       <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.6em] mx-auto animate-pulse">
                          <Scan size={14} /> Phase_02_Discovery_Module
                       </div>
                       <h2 className="text-5xl md:text-[9rem] font-heritage font-bold text-white tracking-tighter uppercase leading-none">
                          FUTURE <span className="text-blue-500 italic">HORIZONS.</span>
                       </h2>
                       <p className="text-gray-400 font-light italic text-xl max-w-2xl mx-auto opacity-70">
                          "Locked archival nodes currently undergoing high-fidelity calibration for the next cycle."
                       </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                       {[
                         { id: 'f1', title: 'Deep Sea Archeology', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80' },
                         { id: 'f2', title: 'Aerial Tea Trails', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80' },
                         { id: 'f3', title: 'Secret Jungle Monoliths', image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80' }
                       ].map((item, idx) => (
                         <div key={item.id} className="group relative h-[600px] rounded-[4rem] overflow-hidden border border-white/5 bg-black shadow-2xl">
                            <img src={item.image} className="absolute inset-0 w-full h-full object-cover grayscale opacity-30" />
                            
                            {/* THE BLUR EFFECT */}
                            <div className="absolute inset-0 backdrop-blur-3xl bg-black/40 group-hover:backdrop-blur-xl transition-all duration-1000" />
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-8">
                               <div className="w-24 h-24 rounded-[2.5rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 relative">
                                  <div className="absolute inset-0 border border-blue-500/20 rounded-[2.5rem] animate-ping" />
                                  <Lock size={40} className="animate-pulse" />
                               </div>
                               
                               <div className="space-y-4">
                                  <h4 className="text-3xl font-heritage font-bold text-white uppercase tracking-tight opacity-40">{item.title}</h4>
                                  <div className="px-6 py-2 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-pulse">
                                     COMMING SOON
                                  </div>
                               </div>
                            </div>

                            {/* Scanning Line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_20px_#3b82f6] animate-scan-slow" style={{ animationDelay: `${idx * 1.5}s` }} />
                         </div>
                       ))}
                    </div>
                 </div>
              </section>

              <HeritageCollection language={language} />
              
              <div className="py-32 px-4 relative overflow-hidden group border-y border-gray-50 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
                   <div className="w-full md:w-1/2 space-y-12">
                     <div className="inline-flex items-center gap-5 px-8 py-3 rounded-full bg-[#E1306C]/5 border border-[#E1306C]/10 text-[#E1306C] text-[11px] font-black uppercase tracking-[0.6em]">
                       <Sparkles size={18} className="animate-pulse" />
                       Archetype Synthesis
                     </div>
                     <h2 className="text-6xl md:text-[8rem] font-heritage font-bold text-[#0a0a0a] leading-[0.8] tracking-tighter uppercase">
                        Sync Your <br/><span className="insta-text-gradient italic">Soul.</span>
                     </h2>
                     <p className="text-gray-400 text-2xl font-light italic leading-relaxed">
                        "Connect your identity with the registry to unlock personalized heritage trajectories."
                     </p>
                     <button 
                       onClick={() => setView('quiz')}
                       className="group relative px-20 py-10 bg-[#0a0a0a] text-white font-black rounded-[4rem] hover:scale-110 active:scale-95 transition-all shadow-[0_40px_100px_rgba(225,48,108,0.4)] flex items-center gap-8 overflow-hidden"
                     >
                       <div className="absolute inset-0 bg-gradient-to-r from-[#E1306C] to-[#f09433] opacity-0 group-hover:opacity-100 transition-opacity" />
                       <Compass size={24} className="relative z-10 text-[#E1306C] group-hover:rotate-180 transition-transform duration-1000" />
                       <span className="relative z-10 uppercase tracking-[0.6em] text-[12px]">Begin Integration</span>
                     </button>
                   </div>
                   <div className="w-1/2 relative hidden lg:block">
                      <div className="relative rounded-[5rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
                         <img src="https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80" className="w-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-40" />
                      </div>
                   </div>
                </div>
              </div>

              <CategoriesSection language={language} setView={setView} />
              <StorySection language={language} setView={setView} />
            </div>
          </div>
        );
    }
  };

  return (
    <Layout language={language} setLanguage={setLanguage} setView={(v: any) => setView(v)} currentView={view} user={user} onLogin={handleLogin} onLogout={handleLogout}>
      <div className={`overflow-x-hidden transition-all duration-[1500ms] ${isSiteEntered ? 'scale-100 blur-0 opacity-100' : 'scale-[0.98] blur-lg opacity-0'}`}>
        {renderContent()}
      </div>
      {!isSiteEntered && <LoadingScreen onEnter={handleEnterSite} language={language} />}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} language={language} />
      <AIModal language={language} />
      <ScrollControls />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-slow {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(600px); opacity: 0; }
        }
        .animate-scan-slow { animation: scan-slow 5s linear infinite; }
      `}} />
    </Layout>
  );
};

export default App;
