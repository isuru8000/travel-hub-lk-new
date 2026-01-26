import React, { useEffect, useRef, useState } from 'react';
import { Destination, Language } from '../types.ts';
import { DESTINATIONS, UI_STRINGS } from '../constants.tsx';
import { 
  ArrowLeft, 
  MapPin, 
  Compass, 
  History, 
  Clock, 
  Lightbulb, 
  PlayCircle, 
  Image as ImageIcon, 
  Sparkles, 
  ArrowUpRight, 
  Share2, 
  ShieldCheck,
  Calendar,
  Waves,
  Mountain,
  PawPrint,
  Landmark,
  Box,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Activity,
  Database,
  Shield,
  Zap,
  Target,
  Maximize2,
  Navigation
} from 'lucide-react';

// Helper to handle YouTube URL variations
const getEmbedUrl = (url: string) => {
  if (!url) return '';
  let videoId = '';
  if (url.includes('shorts/')) {
    videoId = url.split('shorts/')[1].split('?')[0];
  } else if (url.includes('watch?v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  } else if (url.includes('embed/')) {
    return url;
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

const CustomVideoPlayer: React.FC<{ url: string; title: string }> = ({ url, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const iframeId = `yt-detail-player-${url.split('/').pop() || 'main'}`;

  useEffect(() => {
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    let interval: number;

    const onPlayerReady = (event: any) => {
      setIsReady(true);
      playerRef.current = event.target;
      
      interval = window.setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          const currentTime = playerRef.current.getCurrentTime();
          const duration = playerRef.current.getDuration();
          if (duration > 0) {
            setProgress((currentTime / duration) * 100);
          }
        }
      }, 500);
    };

    const onPlayerStateChange = (event: any) => {
      setIsPlaying(event.data === 1);
    };

    const createPlayer = () => {
      new (window as any).YT.Player(iframeId, {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    if ((window as any).YT && (window as any).YT.Player) {
      createPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [url, iframeId]);

  const togglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTo = parseFloat(e.target.value);
    setProgress(seekTo);
    if (playerRef.current) {
      const duration = playerRef.current.getDuration();
      playerRef.current.seekTo((seekTo / 100) * duration, true);
    }
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className="group relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)] bg-black border-4 border-white/5" role="region" aria-label={`Cinematic video player for ${title}`}>
      <iframe
        id={iframeId}
        src={`${embedUrl}?enablejsapi=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&autoplay=0&mute=0`}
        title={`Video presentation of ${title}`}
        className="absolute inset-0 w-full h-full pointer-events-none scale-105"
        allow="autoplay; encrypted-media"
      ></iframe>

      <div 
        className={`absolute inset-0 bg-black/30 transition-opacity duration-700 cursor-pointer flex items-center justify-center ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
        onClick={togglePlay}
        aria-hidden="true"
      >
        {!isPlaying && (
          <div className="w-28 h-28 story-ring p-1 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 bg-white/10 backdrop-blur-md">
            <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
              <Play size={44} className="text-[#E1306C] fill-[#E1306C] ml-2" />
            </div>
          </div>
        )}

        {/* Video HUD */}
        <div 
          className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent space-y-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative group/progress h-1.5 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer transition-all hover:h-2.5">
            <input 
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress}
              onChange={handleSeek}
              aria-label="Seek Video"
              className="absolute inset-0 w-full opacity-0 z-10 cursor-pointer"
            />
            <div 
              className="absolute top-0 left-0 h-full insta-gradient shadow-[0_0_20px_rgba(225,48,108,0.8)] transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <button 
                onClick={togglePlay} 
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                className="text-white hover:text-[#E1306C] active:scale-90 transition-all transform"
              >
                {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" />}
              </button>
              
              <button 
                onClick={toggleMute} 
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="text-white hover:text-[#E1306C] transition-colors"
              >
                {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
              </button>
            </div>

            <div className="flex items-center gap-6">
               <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] font-mono">Archive_Stream_v4.5</span>
               <button aria-label="Enter Fullscreen" className="text-white/60 hover:text-white hover:rotate-12 transition-all">
                <Maximize size={24} />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GeospatialMap: React.FC<{ destination: Destination; language: Language }> = ({ destination, language }) => {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_MAPS_API_KEY&q=${encodeURIComponent(destination.name.EN + ', ' + destination.location + ', Sri Lanka')}`;
  
  // Note: Using a standard search link since we don't have a Maps API Key injected here for the embed.
  // Using the Google Maps Search URL in an iframe is a common fallback if the Embed API key isn't present.
  const query = encodeURIComponent(`${destination.name.EN} ${destination.location} Sri Lanka`);
  const iframeSrc = `https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  const externalLink = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <div className="space-y-10 animate-reveal">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 text-[#E1306C]">
          <Navigation size={32} className="animate-pulse" aria-hidden="true" />
          <span className="text-[14px] font-black uppercase tracking-[0.7em] font-mono">Geospatial_Alignment</span>
        </div>
        <a 
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#E1306C] transition-all shadow-xl"
        >
          Open External Maps
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div 
        onClick={() => window.open(externalLink, '_blank')}
        className="group relative h-[500px] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-4 border-white cursor-pointer"
      >
        {/* Iframe for the "Interactive" part */}
        <iframe
          title={`Map location for ${destination.name[language]}`}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src={iframeSrc}
          className="grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 pointer-events-none"
        ></iframe>

        {/* Overlay HUD */}
        <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
        
        <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none" />
        
        {/* Archival Decor */}
        <div className="absolute top-10 left-10 p-6 bg-black/60 backdrop-blur-md rounded-[2rem] border border-white/10 text-white space-y-2 max-w-xs transition-transform duration-700 group-hover:-translate-y-2">
          <div className="flex items-center gap-2 text-[#E1306C]">
             <Target size={14} className="animate-pulse" />
             <span className="text-[9px] font-black uppercase tracking-widest">Locked_Coordinates</span>
          </div>
          <p className="text-sm font-bold uppercase tracking-tight leading-tight">{destination.location}</p>
          <div className="pt-2 flex items-center gap-4 opacity-40">
             <div className="h-0.5 w-12 bg-white rounded-full" />
             <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>
        </div>

        <div className="absolute bottom-10 right-10 flex flex-col items-end gap-4">
           <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-2xl text-[#0a0a0a] group-hover:scale-110 group-hover:rotate-12 transition-all">
              <Maximize2 size={24} />
           </div>
           <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.5em] font-mono [writing-mode:vertical-lr] rotate-180">Registry_Mapping_v4.5</p>
        </div>

        {/* Tactical Scanning line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E1306C] to-transparent shadow-[0_0_20px_#E1306C] animate-scan-slow opacity-0 group-hover:opacity-100" />
      </div>
    </div>
  );
};

// Fix: Defined missing DestinationDetailProps interface to fix TypeScript error
interface DestinationDetailProps {
  destination: Destination | null;
  language: Language;
  onBack: () => void;
  onSelect: (dest: Destination) => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination, language, onBack, onSelect }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollY / height);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!destination) return null;

  const related = DESTINATIONS.filter(d => 
    d.id !== destination.id && 
    (d.category === destination.category || d.location === destination.location)
  ).slice(0, 3);

  const categoryConfigs = {
    ancient: { icon: Landmark, label: 'Ancient' },
    beach: { icon: Waves, label: 'Beach' },
    wildlife: { icon: PawPrint, label: 'Wildlife' },
    mountains: { icon: Mountain, label: 'Mountains' }
  };
  const CatIcon = categoryConfigs[destination.category]?.icon || Compass;

  return (
    <div ref={containerRef} className="min-h-screen bg-white animate-in fade-in duration-1000 relative overflow-x-hidden">
      
      {/* 1. IMMERSIVE MULTI-LAYER PARALLAX HERO */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        
        {/* Layer 0: Deep Background (Parallax slowest) */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[100ms] ease-out opacity-60"
          style={{ 
            backgroundImage: `url(${destination.image})`,
            transform: `translateY(${scrollProgress * 250}px) scale(${1.2 - scrollProgress * 0.1})`,
            filter: `blur(${scrollProgress * 10}px) brightness(${1 - scrollProgress * 0.5})`
          }}
          role="img"
          aria-label={`Hero image for ${destination.name[language]}`}
        />
        
        {/* Layer 1: Neural Grid (Floating) */}
        <div 
          className="absolute inset-0 opacity-[0.1] transition-transform duration-300" 
          style={{ 
            backgroundImage: `linear-gradient(#E1306C 1px, transparent 1px), linear-gradient(90deg, #E1306C 1px, transparent 1px)`, 
            backgroundSize: '100px 100px',
            transform: `rotateX(60deg) translateY(${scrollProgress * 500}px) scale(3)`,
            maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)'
          }} 
        />

        {/* Layer 2: Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        
        {/* Layer 3: Controls (Fixed-ish) */}
        <div className="absolute top-0 left-0 right-0 p-8 md:p-12 z-50 flex justify-between items-center">
          <button 
            onClick={onBack}
            aria-label="Return to Destination Registry"
            className="flex items-center gap-5 px-10 py-5 bg-black/50 backdrop-blur-2xl border border-white/20 text-white rounded-full font-black text-[10px] uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all shadow-2xl active:scale-95 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Registry
          </button>
          
          <div className="flex gap-4">
             <button aria-label="Share this destination" className="w-16 h-16 bg-black/50 backdrop-blur-2xl border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#E1306C] transition-all shadow-2xl active:scale-90">
                <Share2 size={24} aria-hidden="true" />
             </button>
          </div>
        </div>

        {/* Layer 4: Title Content (Parallax medium) */}
        <div 
          className="absolute bottom-32 left-0 right-0 px-8 md:px-16 z-30 transition-transform duration-200"
          style={{ transform: `translateY(${scrollProgress * -150}px)` }}
        >
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-wrap items-center gap-6 animate-in slide-in-from-bottom-4 duration-1000">
               <div className="px-8 py-2.5 bg-[#E1306C] text-white rounded-full text-[11px] font-black uppercase tracking-[0.6em] shadow-[0_0_50px_rgba(225,48,108,0.5)] border border-white/20">
                 ACTIVE NODE #{destination.id.toUpperCase()}
               </div>
               <div className="px-8 py-2.5 bg-black/40 backdrop-blur-3xl text-white rounded-full text-[11px] font-black uppercase tracking-[0.6em] border border-white/20 flex items-center gap-4">
                 <CatIcon size={16} className="text-[#E1306C]" aria-hidden="true" />
                 {destination.category.toUpperCase()} REGISTRY
               </div>
            </div>
            
            <div className="space-y-6 animate-in slide-in-from-bottom-12 duration-1000 delay-300">
               <h1 className="text-6xl md:text-[11rem] font-heritage font-bold text-white leading-[0.85] tracking-tighter uppercase drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                 {destination.name[language]}
               </h1>
               <div className="flex items-center gap-8 text-2xl md:text-4xl text-white/80 font-light italic border-l-[6px] border-[#E1306C] pl-10 max-w-4xl py-2">
                 {destination.shortStory[language]}
               </div>
            </div>
          </div>
        </div>

        {/* Floating Data Nodes (HUD decoration) */}
        <div className="absolute right-12 bottom-1/3 flex flex-col gap-6 text-white/40 pointer-events-none">
           {[1,2,3].map(i => (
             <div key={i} className="flex items-center gap-4 animate-in slide-in-from-right-10 duration-1000" style={{ animationDelay: `${i * 200}ms` }}>
                <div className="text-[9px] font-mono font-black uppercase tracking-[0.3em] text-right">Channel_{String(i).padStart(2, '0')}<br/>Active_Sync</div>
                <div className="w-1 h-1 rounded-full bg-[#E1306C] animate-pulse" />
             </div>
           ))}
        </div>

        {/* Scroll HUD Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-white/40 animate-bounce" aria-hidden="true">
           <span className="text-[9px] font-black uppercase tracking-[1em] ml-[1em]">Explore_Deep_Manifest</span>
           <div className="h-16 w-px bg-gradient-to-b from-[#E1306C] to-transparent" />
        </div>
      </div>

      {/* 2. MAIN CONTENT SECTIONS - DEEP ARCHIVE */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-40 space-y-48">
        
        {/* SECTION 01: THE ARCHIVE HISTORY */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start" aria-labelledby="section-history-title">
          <div className="lg:col-span-8 space-y-24">
            <div className="space-y-10 animate-reveal">
               <div className="flex items-center gap-6 text-[#E1306C]">
                  <History size={32} className="animate-pulse" aria-hidden="true" />
                  <span className="text-[14px] font-black uppercase tracking-[0.7em] font-mono">Registry_Deep_History</span>
               </div>
               <div className="prose prose-2xl max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-gray-700 prose-p:italic italic">
                 <h2 id="section-history-title" className="text-4xl md:text-7xl font-heritage font-bold text-[#0a0a0a] not-italic leading-tight mb-12 uppercase tracking-tighter">
                   {UI_STRINGS.historyLabel[language]}
                 </h2>
                 {destination.history[language]}
               </div>
            </div>

            {/* Quick-Stats Artifact Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
               <div className="bg-[#fafafa] p-12 rounded-[4rem] border border-gray-100 space-y-8 group hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#E1306C] shadow-sm group-hover:rotate-12 transition-transform border border-gray-100">
                     <Clock size={36} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em]">Temporal Window</p>
                    <h3 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tight leading-tight">{destination.bestTime[language]}</h3>
                  </div>
                  <p className="text-base text-gray-500 font-medium italic leading-relaxed opacity-80 border-l-2 border-gray-100 pl-6">
                    "Synchronized with seasonal atmospheric patterns for optimal high-fidelity viewing of the heritage node."
                  </p>
               </div>
               
               <div className="bg-[#fafafa] p-12 rounded-[4rem] border border-gray-100 space-y-8 group hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#E1306C] shadow-sm group-hover:rotate-12 transition-transform border border-gray-100">
                     <MapPin size={36} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em]">Geospatial Node</p>
                    <h3 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tight leading-tight">{destination.location}</h3>
                  </div>
                  <p className="text-base text-gray-500 font-medium italic leading-relaxed opacity-80 border-l-2 border-gray-100 pl-6">
                    "Validated regional coordinates within the official island manifold registry system."
                  </p>
               </div>
            </div>

            {/* INTEGRATED MAP COMPONENT */}
            <GeospatialMap destination={destination} language={language} />
          </div>

          {/* Sticky Sidebar Advisory */}
          <aside className="lg:col-span-4 sticky top-32 space-y-12" aria-label="Official Advisory">
            <div className="p-12 rounded-[5rem] bg-[#0a0a0a] text-white space-y-12 shadow-[0_60px_120px_rgba(0,0,0,0.4)] relative overflow-hidden group">
               {/* Background Glow */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(225,48,108,0.2)_0%,transparent_70%)] opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
               <div className="absolute inset-0 pattern-overlay opacity-10 pointer-events-none" />
               
               <div className="relative z-10 space-y-12">
                  <div className="space-y-6">
                     <div className="flex items-center gap-4 text-[#E1306C]">
                        <ShieldCheck size={24} className="animate-pulse" aria-hidden="true" />
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] font-mono">Official_Protocol</span>
                     </div>
                     <h4 className="text-4xl font-heritage font-bold tracking-tighter uppercase leading-none">Preserve the <br/><span className="italic insta-text-gradient">Sanctity.</span></h4>
                  </div>
                  
                  <p className="text-lg text-white/50 leading-relaxed font-light italic">
                    "Access to this high-fidelity node requires strict adherence to ancient codes of conduct. Observe silence and white attire where mandated by local guardians."
                  </p>
                  
                  <div className="pt-6">
                     <button 
                      aria-label="Initialize Booking for this destination"
                      className="group w-full py-8 bg-white text-black rounded-[2.5rem] font-black text-[12px] uppercase tracking-[0.5em] flex items-center justify-center gap-6 hover:bg-[#E1306C] hover:text-white transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95 overflow-hidden relative"
                     >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <span className="relative z-10">Initialize Sync</span>
                        <Target size={20} className="relative z-10 group-hover:rotate-180 transition-transform duration-700" aria-hidden="true" />
                     </button>
                  </div>
               </div>
               
               <Compass size={250} className="absolute -bottom-24 -right-24 opacity-[0.05] group-hover:rotate-90 transition-transform duration-[8000ms] pointer-events-none" aria-hidden="true" />
            </div>

            {/* VR Launch Pod */}
            <div className="p-12 bg-white rounded-[4rem] border border-gray-100 shadow-sm text-center space-y-8 group hover:border-[#E1306C]/30 transition-all duration-500">
               <div className="relative mx-auto w-24 h-24">
                  <div className="absolute inset-0 bg-[#E1306C]/10 rounded-3xl animate-ping" />
                  <div className="relative w-full h-full bg-[#E1306C]/5 rounded-3xl flex items-center justify-center text-[#E1306C] border border-[#E1306C]/10">
                    <PlayCircle size={44} />
                  </div>
               </div>
               <div className="space-y-3">
                  <p className="text-[11px] font-black text-[#0a0a0a] uppercase tracking-[0.4em] leading-none">Volumetric Feed Available</p>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">REAL-TIME_3D_RECONSTRUCTION</p>
               </div>
               <button 
                aria-label="Launch VR Reconstruction"
                className="w-full py-4 rounded-2xl bg-gray-50 text-[10px] font-black text-gray-500 hover:bg-[#0a0a0a] hover:text-white uppercase tracking-[0.3em] transition-all focus-visible:ring-4 ring-[#E1306C]/20"
               >LAUNCH_SIMULATION</button>
            </div>
          </aside>
        </section>

        {/* SECTION 02: THE CINEMATIC STREAM */}
        {destination.videoUrl && (
          <section className="space-y-20 py-10" aria-labelledby="section-video-title">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="space-y-6">
                <div className="flex items-center gap-5 text-[#E1306C]">
                  <Activity size={24} className="animate-pulse" aria-hidden="true" />
                  <span className="text-[12px] font-black uppercase tracking-[0.6em] font-mono">Cinematic_Registry_Feed</span>
                </div>
                <h2 id="section-video-title" className="text-4xl md:text-8xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter leading-none">Living <span className="italic insta-text-gradient">Atmosphere.</span></h2>
              </div>
              <div className="px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                 <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                 <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest font-mono">Archive_Uplink_Active</p>
              </div>
            </div>
            
            <div className="max-w-6xl mx-auto transform hover:scale-[1.01] transition-transform duration-700">
              <CustomVideoPlayer url={destination.videoUrl} title={destination.name[language]} />
            </div>
          </section>
        )}

        {/* SECTION 03: VOYAGER WISDOM (TIPS) */}
        <section className="space-y-20 py-32 border-y border-gray-100 relative overflow-hidden" aria-labelledby="section-wisdom-title">
           {/* Abstract Background Decoration */}
           <div className="absolute top-0 right-0 p-40 opacity-[0.02] text-gray-400 rotate-12 pointer-events-none"><Zap size={400} /></div>

           <div className="text-center space-y-8 relative z-10">
              <div className="inline-flex items-center gap-5 px-8 py-3 rounded-full bg-white border border-gray-100 shadow-xl text-gray-400 text-[11px] font-black uppercase tracking-[0.5em] mb-4">
                 <Lightbulb size={20} className="text-yellow-500" aria-hidden="true" />
                 {UI_STRINGS.tipsLabel[language]}
              </div>
              <h2 id="section-wisdom-title" className="text-4xl md:text-8xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter leading-none">Voyager <span className="italic insta-text-gradient">Wisdom.</span></h2>
              <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-400 font-light italic leading-relaxed">
                "Extracting tactical travel intelligence from the global heritage collective."
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
             {destination.tips.map((tip, i) => (
               <div key={i} className="group flex gap-10 p-12 bg-white rounded-[4rem] shadow-[0_30px_80px_rgba(0,0,0,0.04)] border border-gray-50 hover:border-[#E1306C]/40 transition-all duration-700 hover:-translate-y-4">
                  <div className="w-20 h-20 rounded-[2.5rem] story-ring p-[2px] shrink-0 group-hover:rotate-12 transition-transform shadow-2xl">
                     <div className="bg-white w-full h-full rounded-[2.3rem] flex items-center justify-center font-heritage font-black text-3xl text-[#0a0a0a]">
                        0{i+1}
                     </div>
                  </div>
                  <div className="space-y-4 pt-3">
                    <p className="text-[10px] font-black text-[#E1306C] uppercase tracking-[0.4em] opacity-40">Intelligence_Note_#{i+1}</p>
                    <p className="text-xl md:text-3xl text-gray-600 font-light leading-relaxed italic">
                      "{tip[language]}"
                    </p>
                  </div>
               </div>
             ))}
           </div>
        </section>

        {/* SECTION 04: SITE ARTIFACTS (GALLERY) */}
        <section className="space-y-20 py-10" aria-labelledby="section-gallery-title">
           <div className="flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="space-y-6">
                 <div className="flex items-center gap-5 text-[#E1306C]">
                    <ImageIcon size={28} aria-hidden="true" />
                    <span className="text-[12px] font-black uppercase tracking-[0.7em] font-mono">Visual_Asset_Inventory</span>
                 </div>
                 <h2 id="section-gallery-title" className="text-4xl md:text-8xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter leading-none">Site <span className="italic insta-text-gradient">Artifacts.</span></h2>
              </div>
              <div className="text-right space-y-1">
                 <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Total Sync Nodes</p>
                 <p className="text-4xl font-heritage font-bold text-[#0a0a0a]">0{destination.gallery.length + 1}</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-12 gap-10 h-[900px] md:h-[700px]">
              <div className="md:col-span-8 group relative rounded-[5rem] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.15)] border-4 border-white">
                 <img src={destination.image} className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" alt={`Main artifact of ${destination.name[language]}`} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-16 space-y-4">
                    <div className="flex items-center gap-4 text-white">
                       <Shield size={18} className="text-green-500" />
                       <span className="text-[11px] font-black uppercase tracking-[0.6em]">Primary_Registry_Frame_01</span>
                    </div>
                    <p className="text-white/60 text-sm font-medium italic">High-fidelity volumetric capture for preservation archives.</p>
                 </div>
                 {/* Scanning Overlay */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E1306C] to-transparent shadow-[0_0_20px_#E1306C] opacity-0 group-hover:opacity-100 animate-scan-slow pointer-events-none" />
              </div>
              <div className="md:col-span-4 grid grid-rows-2 gap-10">
                 {destination.gallery.slice(0, 2).map((img, i) => (
                   <div key={i} className="group relative rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-2 border-white">
                      <img src={img} className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110" alt={`Artifact view ${i + 1} of ${destination.name[language]}`} />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#E1306C]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* SECTION 05: ADJACENT REALITIES (RELATED) */}
        <section className="space-y-24 py-40 border-t border-gray-100 relative overflow-hidden" aria-labelledby="section-related-title">
           <div className="absolute bottom-0 right-0 p-40 opacity-[0.02] text-gray-400 -rotate-12 pointer-events-none"><Database size={400} /></div>

           <div className="text-center space-y-10 relative z-10">
              <div className="inline-flex items-center gap-5 px-8 py-3 rounded-full bg-white border border-gray-100 shadow-xl text-gray-400 text-[11px] font-black uppercase tracking-[0.5em] mb-4">
                 <Sparkles size={20} className="text-[#E1306C]" aria-hidden="true" />
                 Recommended Trajectories
              </div>
              <h2 id="section-related-title" className="text-4xl md:text-8xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter leading-none">Adjacent <span className="italic insta-text-gradient">Realities.</span></h2>
              <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-400 font-light italic leading-relaxed">
                "Suggested pathing nodes based on your current archival engagement."
              </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
             {related.map((rel) => (
               <button 
                 key={rel.id} 
                 onClick={() => { onSelect(rel); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                 aria-label={`View details for related destination: ${rel.name[language]}`}
                 className="group text-left relative h-[520px] rounded-[4.5rem] overflow-hidden cursor-pointer shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-1000 hover:-translate-y-6 focus-visible:ring-8 focus-visible:ring-[#E1306C]/10"
               >
                 <img src={rel.image} className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0" alt="" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-transparent" />
                 
                 <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-10 group-hover:translate-x-0 scale-50 group-hover:scale-100">
                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-2xl text-black">
                       <ArrowUpRight size={32} />
                    </div>
                 </div>

                 <div className="absolute bottom-16 left-12 right-12 space-y-6">
                    <div className="space-y-3">
                       <p className="text-[11px] font-black text-[#E1306C] uppercase tracking-[0.5em] drop-shadow-lg">{rel.location}</p>
                       <h3 className="text-3xl md:text-4xl font-heritage font-bold text-white uppercase tracking-tight leading-none group-hover:insta-text-gradient transition-all duration-500">
                         {rel.name[language]}
                       </h3>
                    </div>
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-ping shadow-[0_0_10px_#22c55e]" />
                          <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">Node_Sync_Ready</span>
                       </div>
                       <Compass size={20} className="text-white/20" aria-hidden="true" />
                    </div>
                 </div>
               </button>
             ))}
           </div>
        </section>
      </div>

      {/* 3. REGISTRY STATUS FOOTER (HUD STYLE) */}
      <footer className="py-32 border-t border-gray-50 flex flex-col items-center gap-12 bg-[#fafafa]">
         <div className="flex items-center gap-16 md:gap-24 opacity-30" aria-hidden="true">
            <ShieldCheck size={40} className="text-green-600" />
            <div className="w-px h-16 bg-gray-300" />
            <Box size={40} className="text-blue-600" />
            <div className="w-px h-16 bg-gray-300" />
            <Target size={40} className="text-[#E1306C]" />
         </div>
         <div className="text-center space-y-4">
            <p className="text-[11px] font-black uppercase tracking-[1.5em] text-gray-400 ml-[1.5em] font-mono animate-pulse">End_Of_Transmission</p>
            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.3em]">Protocol_v4.5_Lanka_Hub</p>
         </div>
         <button 
           onClick={onBack}
           className="mt-8 flex items-center gap-6 text-[10px] font-black text-[#E1306C] uppercase tracking-[0.5em] hover:text-black transition-all group"
         >
           <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
           Return to Hub Registry
         </button>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-slow {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateY(700px); opacity: 0; }
        }
        .animate-scan-slow {
          animation: scan-slow 10s linear infinite;
        }
        .animate-reveal {
          animation: reveal-up 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes reveal-up {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}} />
    </div>
  );
};

export default DestinationDetail;
