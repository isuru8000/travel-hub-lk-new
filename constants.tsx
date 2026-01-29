import React from 'react';
import { Food, HeritageMusic, TraditionalMedicine, TeaExperience, Phrase, TravelEssential, Festival, Translation, HikingSpot, Transport } from './types.ts';
import { DESTINATIONS_DATA } from './destination_details.tsx';

export const SUPABASE_KEY = 'sb_publishable_c8wPY71QFNsFJKcAEuD86w_pcqen0nv';

export const UI_STRINGS: Translation = {
  heroTitle: { EN: "Discover True Beauty of Sri Lanka", SI: "ශ්‍රී ලංකාවේ සැබෑ සුන්දරත්වය සොයා ගන්න" },
  exploreDestinations: { EN: "Explore Destinations", SI: "ගමනාන්ත ගවේෂණය කරන්න" },
  popularHighlightsTitle: { EN: "The Crown Jewels of Lanka", SI: "ලංකාවේ අභිමානවත් ස්ථාන" },
  popularHighlightsSubtitle: { EN: "Journey through the three most iconic landmarks that define our island's spirit.", SI: "අපගේ දිවයිනේ ජීවය නිරූපණය කරන සුවිශේෂී ස්ථාන තුනක් හරහා සංචාරය කරන්න." },
  planYourTrip: { EN: "Plan Your Trip", SI: "සංචාරය සැලසුම් කරන්න" },
  ancientHighlights: { EN: "Ancient Sri Lanka Highlights", SI: "පැරණි ශ්‍රී ලංකාවේ විශේෂිත ස්ථාන" },
  natureAdventure: { EN: "Nature & Adventure", SI: "සොබාදහම සහ වික්‍රමය" },
  travelMemories: { EN: "Travel Memories", SI: "සංචාරක මතකයන්" },
  lankaGuideTitle: { EN: "Lanka Guide AI", SI: "ලංකා ගයිඩ් AI" },
  searchPlaceholder: { EN: "Search destinations...", SI: "ගමනාන්ත සොයන්න..." },
  filterRegionLabel: { EN: "Filter by Region", SI: "කලාපය අනුව පෙරන්න" },
  allRegions: { EN: "All Regions", SI: "සියලුම කලාප" },
  historyLabel: { EN: "The Legend & History", SI: "පුරාවෘත්තය සහ ඉතිහාසය" },
  bestTimeLabel: { EN: "Best Time to Visit", SI: "සංචාරය කිරීමට හොඳම කාලය" },
  tipsLabel: { EN: "Traveler's Wisdom", SI: "සංචාරක උපදෙස්" },
  close: { EN: "Close", SI: "වසා දමන්න" },
  exploreInterests: { EN: "Explore Your Interests", SI: "ඔබේ රුචිකත්වයන් ගවේෂණය කරන්න" }
};

export const TRANSPORT_DATA: Transport[] = [
  {
    id: 't1',
    name: { EN: 'Elite Chauffeur Service', SI: 'ප්‍රභූ රියදුරු සේවාව' },
    type: 'road',
    price: 85,
    description: { EN: 'Luxury air-conditioned sedans with English-speaking heritage guides.', SI: 'ඉංග්‍රීසි කතා කරන මගපෙන්වන්නන් සහිත සුඛෝපභෝගී රථ සේවාව.' },
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    features: { EN: ['Wi-Fi Enabled', 'Refreshments Included', 'Flexible Itinerary'], SI: ['Wi-Fi පහසුකම්', 'කෙටි ආහාර', 'නම්යශීලී ගමන් මග'] }
  }
];

export const DESTINATIONS = DESTINATIONS_DATA;

export const FOODS_DATA: Food[] = [
  {
    id: "f1",
    name: { EN: "Kottu Roti", SI: "කොත්තු රොටි" },
    category: "street",
    description: { EN: "The definitive street food: chopped flatbread tossed with spices and veggies.", SI: "කැබලි කළ රොටි, එළවළු සහ කුළුබඩු මිශ්‍ර ජනප්‍රියම වීදි ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1601050690597-df056fb04791?q=80&w=800&auto=format&fit=crop",
    spiciness: 5,
    ingredients: [{ EN: "Godamba Roti", SI: "ගොඩම්බා රොටි" }, { EN: "Leeks", SI: "ලීක්ස්" }],
    tasteProfile: { EN: "Fiery & Savory", SI: "අධික සැර සහ රසවත්" }
  }
];

export const MEDICINE_DATA: TraditionalMedicine[] = [
  {
    id: "herb-1",
    type: "herb",
    name: { EN: "Neem", SI: "කොහොඹ" },
    description: { EN: "Antiseptic properties used in ancient healing for centuries.", SI: "සියවස් ගණනාවක් පුරා සුව කිරීම සඳහා භාවිතා කරන විෂබීජ නාශක ගුණ." },
    image: "https://images.pexels.com/photos/5967550/pexels-photo-5967550.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: { EN: "Promotes skin health.", SI: "සමේ සෞඛ්‍යය වැඩි කරයි." },
    usage: { EN: "Applied as a paste.", SI: "ආලේපනයක් ලෙස භාවිතා කරයි." }
  }
];

export const CATEGORIES_DATA = [
  { id: "foods", icon: "Utensils", title: { EN: "Food Heritage", SI: "ආහාර උරුමය" }, description: { EN: "Taste the spices of Lanka.", SI: "ලංකාවේ කුළුබඩු රස බලන්න." } },
  { id: "music", icon: "Music", title: { EN: "Ancient Music", SI: "සංගීතය" }, description: { EN: "Listen to the rhythms.", SI: "දේශීය රිද්මයට සවන් දෙන්න." } }
];

export const HERITAGE_MUSIC_DATA: HeritageMusic[] = [
  { id: 'm1', type: 'instrument', name: { EN: 'Geta Beraya', SI: 'ගැට බෙරය' }, description: { EN: 'Highland traditional drum.', SI: 'උඩරට සම්ප්‍රදායික බෙරය.' }, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Kandy', SI: 'මහනුවර' }, significance: { EN: 'Ritual use.', SI: 'චාරිත්‍ර සඳහා.' } }
];

export const TEA_DATA: TeaExperience[] = [
  { id: 'tea1', name: { EN: 'Ceylon Black Tea', SI: 'ලංකා කළු තේ' }, description: { EN: 'World famous rich tea.', SI: 'ලොව සුප්‍රසිද්ධ රසවත් තේ.' }, image: 'https://images.unsplash.com/photo-1594631252845-29fc458695d1?auto=format&fit=crop&w=800&q=80', type: 'variety', fact: { EN: 'Hand-picked leaves.', SI: 'අතින් නෙළූ තේ දළු.' } }
];

export const PHRASEBOOK_DATA: Phrase[] = [
  { id: 'p1', english: 'Hello', sinhala: 'ආයුබෝවන්', transliteration: 'Ayubowan', category: 'greeting' }
];

export const TRAVEL_ESSENTIALS_DATA: TravelEssential[] = [
  { id: 'e1', title: { EN: 'Visa', SI: 'වීසා' }, description: { EN: 'Entry info.', SI: 'ඇතුළත් වීමේ තොරතුරු.' }, icon: 'ShieldCheck', tips: [{ EN: 'Apply online.', SI: 'අන්තර්ජාලයෙන් අයදුම් කරන්න.' }] }
];

export const FESTIVALS_DATA: Festival[] = [
  { id: 'fest1', name: { EN: 'Kandy Perahera', SI: 'මහනුවර පෙරහැර' }, category: 'religious', date: { EN: 'August', SI: 'අගෝස්තු' }, description: { EN: 'Historic pageant.', SI: 'ඓතිහාසික මංගල්‍යයකි.' }, image: 'https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?q=80&w=1200&auto=format&fit=crop', significance: { EN: 'Faith.', SI: 'ශ්‍රද්ධාව.' } }
];

export const HIKING_DATA: HikingSpot[] = [
  { id: 'hike1', name: { EN: 'Adams Peak', SI: 'ශ්‍රී පාදය' }, location: { EN: 'Ratnapura', SI: 'රත්නපුර' }, difficulty: 'Challenging', duration: { EN: '6 Hours', SI: 'පැය 6' }, description: { EN: 'Sunrise climb.', SI: 'හිරු උදාව බලන්න.' }, image: 'https://cdn.pixabay.com/photo/2023/07/04/10/30/mountains-8105952_1280.jpg', elevation: '2,243m' }
];
