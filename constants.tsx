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
  },
  {
    id: "f2",
    name: { EN: "Milk Rice (Kiribath)", SI: "කිරි බත්" },
    category: "royal",
    description: { EN: "A symbol of prosperity, rice cooked with thick coconut milk.", SI: "සෞභාග්‍යයේ සංකේතයකි, ඝන පොල් කිරි සමග පිසින ලද බත්." },
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Rice", SI: "හාල්" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Creamy & Mild", SI: "කිරි රසැති සහ මෘදු" }
  },
  {
    id: "f3",
    name: { EN: "Hoppers (Appa)", SI: "ආප්ප" },
    category: "street",
    description: { EN: "Crispy pancake-like bowls made from fermented rice flour and coconut milk.", SI: "පැසවන ලද සහල් පිටි සහ පොල් කිරි වලින් සාදන ලද මෘදු මැදක් සහිත ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Coconut Water", SI: "තැඹිලි වතුර" }],
    tasteProfile: { EN: "Crispy & Soft", SI: "කරකුරු සහ මෘදු" }
  },
  {
    id: "f4",
    name: { EN: "Pol Sambol", SI: "පොල් සම්බෝල" },
    category: "village",
    description: { EN: "Fresh coconut scraped and ground with red chillies, onions, and lime.", SI: "රතු මිරිස්, ලූනු සහ දෙහි සමග අඹරන ලද නැවුම් පොල් සම්බෝලයකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 4,
    ingredients: [{ EN: "Coconut", SI: "පොල්" }, { EN: "Chilli Powder", SI: "මිරිස් කුඩු" }],
    tasteProfile: { EN: "Spicy & Zesty", SI: "සැර සහ ප්‍රබෝධමත්" }
  },
  {
    id: "f5",
    name: { EN: "Fish Ambul Thiyal", SI: "මාළු ඇඹුල් තියල්" },
    category: "coastal",
    description: { EN: "Dry fish curry marinated in goraka (garcinia), a coastal masterpiece.", SI: "ගොරකා යොදා පදම් කර පිසින ලද දකුණු වෙරළබඩට ආවේණික මාළු ව්‍යංජනයකි." },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
    spiciness: 3,
    ingredients: [{ EN: "Tuna Fish", SI: "කෙලවල්ලා මාළු" }, { EN: "Goraka", SI: "ගොරකා" }],
    tasteProfile: { EN: "Sour & Peppery", SI: "ඇඹුල් සහ ගම්මිරිස් රස" }
  },
  {
    id: "f6",
    name: { EN: "Watalappam", SI: "වටලප්පන්" },
    category: "sweets",
    description: { EN: "A rich steamed custard made with coconut milk, jaggery, and spices.", SI: "පොල් කිරි, හකුරු සහ කුළුබඩු යොදා හුමාලයෙන් තම්බන ලද අතුරුපසකි." },
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Jaggery", SI: "හකුරු" }, { EN: "Cashews", SI: "කජු" }],
    tasteProfile: { EN: "Sweet & Spiced", SI: "පැණි රස සහ සුවඳැති" }
  },
  {
    id: "f7",
    name: { EN: "Kokis", SI: "කොකිස්" },
    category: "sweets",
    description: { EN: "Deep-fried, crispy golden shapes synonymous with the Sinhala New Year.", SI: "සිංහල අලුත් අවුරුද්දේ ප්‍රධාන ආහාරයක් වන කරකුරු ගෑවෙන රසවත් ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1514483127413-f72f273478c3?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Crunchy", SI: "කරකුරු ගෑවෙන" }
  },
  {
    id: "f8",
    name: { EN: "Parippu (Dhal Curry)", SI: "පරිප්පු" },
    category: "village",
    description: { EN: "Red lentils cooked in coconut milk, the ultimate comfort food.", SI: "පොල් කිරි යොදා පිසින ලද රතු පරිප්පු ව්‍යංජනය ඕනෑම කෑමකට අත්‍යවශ්‍ය වේ." },
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
    spiciness: 2,
    ingredients: [{ EN: "Red Lentils", SI: "රතු පරිප්පු" }, { EN: "Turmeric", SI: "කහ" }],
    tasteProfile: { EN: "Creamy & Comforting", SI: "කිරි රසැති සහ සුවපහසු" }
  },
  {
    id: "f9",
    name: { EN: "Lamprais", SI: "ලම්ප්‍රයිස්" },
    category: "royal",
    description: { EN: "Rice, meat, and vegetables baked in a banana leaf with Dutch Burgher roots.", SI: "බර්ගර් ජාතිකයන්ගෙන් පැවත එන, කෙසෙල් කොළයේ ඔතා පුලුස්සා ගන්නා රසවත් බත් පාර්සලයකි." },
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=800&auto=format&fit=crop",
    spiciness: 3,
    ingredients: [{ EN: "Mixed Meats", SI: "මස් වර්ග" }, { EN: "Banana Leaf", SI: "කෙසෙල් කොළ" }],
    tasteProfile: { EN: "Complex & Fragrant", SI: "සුවඳැති සහ විවිධ රසැති" }
  },
  {
    id: "f10",
    name: { EN: "Woodapple Juice", SI: "දිවුල් බීම" },
    category: "street",
    description: { EN: "A tangy and sweet refreshing drink made from local woodapple pulp.", SI: "නැවුම් දිවුල් මද වලින් සාදන ලද ඇඹුල් සහ පැණි රසැති ප්‍රබෝධමත් පානයකි." },
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Woodapple", SI: "දිවුල්" }, { EN: "Jaggery", SI: "හකුරු" }],
    tasteProfile: { EN: "Tangy & Sweet", SI: "ඇඹුල් සහ පැණි රස" }
  },
  {
    id: "f11",
    name: { EN: "Sour Plantain Curry", SI: "කෙසෙල් මුව ව්‍යංජනය" },
    category: "village",
    description: { EN: "Cooked banana blossoms with spices, a high-nutrition heritage dish.", SI: "කුළුබඩු යොදා පිසින ලද පෝෂණීය කෙසෙල් මුව ව්‍යංජනයකි." },
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    spiciness: 3,
    ingredients: [{ EN: "Banana Blossom", SI: "කෙසෙල් මුව" }, { EN: "Unroasted Curry Powder", SI: "අමු තුනපහ" }],
    tasteProfile: { EN: "Savory & Fibrous", SI: "රසවත් සහ පෝෂ්‍යදායී" }
  }
];

export const HERITAGE_MUSIC_DATA: HeritageMusic[] = [
  { id: 'm1', type: 'instrument', name: { EN: 'Geta Beraya', SI: 'ගැට බෙරය' }, description: { EN: 'The primary drum used in Kandyan dancing, carved from Kohomba wood.', SI: 'උඩරට නර්තන කලාවේ ප්‍රධාන බෙරයයි, කොහොඹ ලීයෙන් නිමවා ඇත.' }, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Kandy', SI: 'මහනුවර' }, significance: { EN: 'Essential for rituals like the Esala Perahera.', SI: 'මහනුවර පෙරහැර වැනි චාරිත්‍ර සඳහා අත්‍යවශ්‍ය වේ.' } },
  { id: 'm2', type: 'instrument', name: { EN: 'Yak Beraya', SI: 'යක් බෙරය' }, description: { EN: 'A low-country drum used in rituals and devil dancing (Tovil).', SI: 'පහතරට ශාන්ති කර්ම සහ තොවිල් සඳහා භාවිතා කරන බෙරයකි.' }, image: 'https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Coastal South', SI: 'දකුණු වෙරළ තීරය' }, significance: { EN: 'Used for spiritual healing and storytelling.', SI: 'ආධ්‍යාත්මික සුවය සහ කතන්දර කීම සඳහා යොදා ගනී.' } },
  { id: 'm3', type: 'instrument', name: { EN: 'Dawula', SI: 'දවුල' }, description: { EN: 'The rhythmic heartbeat of Sabaragamuwa dancing traditions.', SI: 'සබරගමු නර්තන සම්ප්‍රදායේ රිද්මයානුකූල හදගැස්මයි.' }, image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Sabaragamuwa', SI: 'සබරගමුව' }, significance: { EN: 'Integral to temple ceremonies (Hevisi).', SI: 'පන්සල් වල හේවිසි වාදනය සඳහා අත්‍යවශ්‍ය වේ.' } },
  { id: 'm4', type: 'instrument', name: { EN: 'Thammattama', SI: 'තම්මැට්ටම' }, description: { EN: 'A pair of small drums played with two sticks, creating high energy.', SI: 'සැරයටි දෙකකින් වාදනය කරන කුඩා බෙර යුගලයකි.' }, image: 'https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Temple Tradition', SI: 'පන්සල් උරුමය' }, significance: { EN: 'Signals the start of offerings in temples.', SI: 'පූජා කටයුතු ආරම්භ වන බවට සංඥා කිරීමට යොදා ගනී.' } },
  { id: 'm5', type: 'instrument', name: { EN: 'Horaneva', SI: 'හොරණෑව' }, description: { EN: 'An oboe-like double-reed instrument with a sharp, distinct sound.', SI: 'තියුණු හඬක් නිකුත් කරන පාරම්පරික පිඹින වාද්‍ය භාණ්ඩයකි.' }, image: 'https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Ritual Arts', SI: 'චාරිත්‍ර කලාව' }, significance: { EN: 'Adds a melodic layer to temple drumming.', SI: 'පන්සල් වාදන වලට මිහිරි තනු එක් කරයි.' } },
  { id: 'm6', type: 'instrument', name: { EN: 'Hakgediya', SI: 'හක්ගෙඩිය' }, description: { EN: 'A conch shell blown to announce sacred moments.', SI: 'පූජනීය අවස්ථාවන් දැනුම් දීම සඳහා පිඹින හක්ගෙඩියකි.' }, image: 'https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Ancient Puranas', SI: 'පැරණි පුරාණ කාලය' }, significance: { EN: 'Invokes divine presence and ward off evil.', SI: 'දේව ආශිර්වාදය පතා සහ අසුබ දේ පලවා හැරීමට යොදා ගනී.' } },
  { id: 'm7', type: 'song', name: { EN: 'Gajaga Wannama', SI: 'ගජගා වන්නම' }, description: { EN: 'A song and dance imitating the majestic movement of elephants.', SI: 'ඇතුන්ගේ ගමන් විලාසය නිරූපණය කරන ගීතය සහ නර්තනයයි.' }, image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Royal Courts', SI: 'රාජ සභා' }, significance: { EN: 'Symbolizes nobility and strength.', SI: 'උදාරත්වය සහ ශක්තිය නිරූපණය කරයි.' }, sampleLyrics: { EN: "Dressed in golden robes, the tusker walks with pride...", SI: "රන් සළු පැළඳී හස්ති රාජයා උදාර ලෙස පියමං කරයි..." } },
  { id: 'm8', type: 'instrument', name: { EN: 'Udekkiya', SI: 'උඩැක්කිය' }, description: { EN: 'A small hourglass-shaped drum played by shifting tension strings.', SI: 'නූල් මගින් හඬ වෙනස් කළ හැකි කුඩා බෙරයකි.' }, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Hill Country', SI: 'කඳුකරය' }, significance: { EN: 'Used by wandering minstrels and royal entertainers.', SI: 'සංචාරක ගායකයින් සහ රාජ සභා නර්තන ශිල්පීන් භාවිතා කරයි.' } },
  { id: 'm9', type: 'instrument', name: { EN: 'Raban', SI: 'රබන්' }, description: { EN: 'A large frame drum played collectively by women during festivals.', SI: 'උත්සව කාල වලදී කාන්තාවන් සමූහ වශයෙන් වාදනය කරන විශාල රබනයි.' }, image: 'https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Village Commons', SI: 'ග්‍රාමීය උරුමය' }, significance: { EN: 'The sound of community celebration.', SI: 'ප්‍රජා සැමරුම් වල හඬ මෙයයි.' } },
  { id: 'm10', type: 'song', name: { EN: 'Pel Kavi', SI: 'පැල් කවි' }, description: { EN: 'Melancholic verses sung by farmers to stay awake at night.', SI: 'ගොවියන් රාත්‍රියේ අවදියෙන් සිටීමට ගයන ශෝකාන්ත කවි පන්ති වේ.' }, image: 'https://images.unsplash.com/photo-1594631252845-29fc458695d1?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Paddy Fields', SI: 'කුඹුරු යාය' }, significance: { EN: 'Preserves the emotional history of rural life.', SI: 'ග්‍රාමීය ජීවිතයේ හැඟීම්බර ඉතිහාසය සුරකියි.' }, sampleLyrics: { EN: "Under the stars, I watch my field, guarding the golden grain...", SI: "තාරකා යට, රන්වන් අස්වැන්න රකිමින් මම කුඹුර දෙස බලා සිටිමි..." } },
  { id: 'm11', type: 'song', name: { EN: 'Kovul Gethu', SI: 'කොවුල් ගී' }, description: { EN: 'Songs inspired by the call of the Asian Koel, symbolizing spring.', SI: 'වසන්තයේ ආගමනය කියාපාන කොවුල් නාදයෙන් උත්තේජනය වූ ගීත වේ.' }, image: 'https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Folklore', SI: 'ජනප්‍රවාද' }, significance: { EN: 'Heralds the Sinhala New Year.', SI: 'සිංහල අලුත් අවුරුද්දේ සලකුණකි.' } }
];

export const MEDICINE_DATA: TraditionalMedicine[] = [
  {
    id: "herb-1",
    type: "herb",
    name: { EN: "Neem", SI: "කොහොඹ" },
    description: { EN: "Antiseptic properties used in ancient healing for centuries.", SI: "සියවස් ගණනාවක් පුරා සුව කිරීම සඳහා භාවිතා කරන විෂබීජ නාශක ගුණ." },
    image: "https://images.pexels.com/photos/5967550/pexels-photo-5967550.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: { EN: "Promotes skin health and immunity.", SI: "සමේ සෞඛ්‍යය සහ ප්‍රතිශක්තිය වැඩි කරයි." },
    usage: { EN: "Applied as a paste or oil.", SI: "ආලේපනයක් හෝ තෙල් ලෙස භාවිතා කරයි." }
  },
  {
    id: "herb-2",
    type: "herb",
    name: { EN: "Turmeric", SI: "කහ" },
    description: { EN: "Natural antibiotic and powerful anti-inflammatory.", SI: "ස්වභාවික ප්‍රතිජීවකයක් සහ ප්‍රදාහ නාශකයක් ලෙස සැලකේ." },
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    benefits: { EN: "Heals wounds and improves digestion.", SI: "තුවාල සුව කරයි සහ ආහාර ජීර්ණය පහසු කරයි." },
    usage: { EN: "Used in cooking and as a skin mask.", SI: "ආහාර පිසීමට සහ සමේ ආලේපනයක් ලෙස භාවිතා කරයි." }
  },
  {
    id: "herb-3",
    type: "herb",
    name: { EN: "Cinnamon", SI: "කුරුඳු" },
    description: { EN: "The world's best true cinnamon comes from this island.", SI: "ලොව හොඳම සැබෑ කුරුඳු මෙම දිවයිනෙන් හමුවේ." },
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    benefits: { EN: "Controls blood sugar and boosts metabolism.", SI: "රුධිරයේ සීනි පාලනය කරන අතර පරිවෘත්තීය වේගය වැඩි කරයි." },
    usage: { EN: "Consumed as powder or oil.", SI: "කුඩු හෝ තෙල් ලෙස භාවිතා කරයි." }
  },
  {
    id: "herb-4",
    type: "herb",
    name: { EN: "Ginger", SI: "ඉඟුරු" },
    description: { EN: "A staple in traditional cough and flu remedies.", SI: "කැස්ස සහ හෙම්බිරිස්සාව සඳහා ප්‍රධාන දේශීය ඔසුවකි." },
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
    benefits: { EN: "Relieves nausea and improves circulation.", SI: "ඔක්කාරය සමනය කරයි සහ රුධිර සංසරණය වැඩි කරයි." },
    usage: { EN: "Brewed as a strong herbal tea.", SI: "තේ ලෙස තම්බා පානය කරයි." }
  },
  {
    id: "herb-5",
    type: "herb",
    name: { EN: "Gotu Kola", SI: "ගොටුකොළ" },
    description: { EN: "An ancient 'herb of longevity' for the brain.", SI: "මොළයේ ක්‍රියාකාරිත්වයට සහ දීර්ඝායුෂ සඳහා වන ඔසුවකි." },
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    benefits: { EN: "Improves memory and reduces anxiety.", SI: "මතක ශක්තිය වැඩි කරයි සහ මානසික ආතතිය අඩු කරයි." },
    usage: { EN: "Eaten as a salad (Sambol).", SI: "සම්බෝලයක් ලෙස ආහාරයට ගනී." }
  },
  {
    id: "herb-6",
    type: "herb",
    name: { EN: "Aloe Vera (Komarika)", SI: "කෝමාරිකා" },
    description: { EN: "Cooling gel used for skin burns and beauty.", SI: "සමේ පිළිස්සුම් සහ රූපලාවන්‍ය කටයුතු සඳහා භාවිතා කරන සිසිල්කාරක ඔසුවකි." },
    image: "https://images.unsplash.com/photo-1596530054703-4310f1af010e?auto=format&fit=crop&w=800&q=80",
    benefits: { EN: "Moisturizes skin and treats inflammation.", SI: "සම තෙතමනය කරයි සහ ප්‍රදාහයන් සමනය කරයි." },
    usage: { EN: "Applied topically or taken as a juice.", SI: "සම මත ආලේප කරයි හෝ පානයක් ලෙස ගනී." }
  },
  {
    id: "herb-7",
    type: "herb",
    name: { EN: "Amla (Nelli)", SI: "නෙල්ලි" },
    description: { EN: "Richest source of Vitamin C in traditional medicine.", SI: "දේශීය වෙදකමේ එන විටමින් C බහුලම ඔසුවකි." },
    image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=800&q=80",
    benefits: { EN: "Powerful antioxidant for hair and skin.", SI: "සම සහ හිසකෙස් සඳහා ඉතා ගුණදායක ප්‍රතිඔක්සිකාරකයකි." },
    usage: { EN: "Eaten raw or as a tonic.", SI: "අමුවෙන් හෝ සිරප් එකක් ලෙස ගනී." }
  },
  {
    id: "herb-8",
    type: "herb",
    name: { EN: "Moringa (Murunga)", SI: "මුරුංගා" },
    description: { EN: "Known as the 'Miracle Tree' for its nutritional density.", SI: "ඉහළ පෝෂණ ගුණය නිසා 'ආශ්චර්යමත් ගස' ලෙස හැඳින්වේ." },
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
    benefits: { EN: "Regulates blood pressure and bone health.", SI: "රුධිර පීඩනය පාලනය කරයි සහ අස්ථි ශක්තිමත් කරයි." },
    usage: { EN: "Leaves and pods used in curries.", SI: "කොළ සහ කරල් ව්‍යංජන සඳහා යොදා ගනී." }
  },
  {
    id: "herb-9",
    type: "herb",
    name: { EN: "Holy Basil (Tulsi)", SI: "මදුරුතලා" },
    description: { EN: "Sacred herb used for respiratory relief.", SI: "ශ්වසන පද්ධතියේ රෝග සමනයට යොදා ගන්නා පූජනීය ඔසුවකි." },
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
    benefits: { EN: "Relieves stress and asthma symptoms.", SI: "ආතතිය සහ ඇදුම රෝගී තත්ත්වයන් පාලනය කරයි." },
    usage: { EN: "Leaves brewed as tea.", SI: "කොළ තම්බා පානය කරයි." }
  },
  {
    id: "herb-10",
    type: "herb",
    name: { EN: "Ashwagandha", SI: "අශ්වගන්ධ" },
    description: { EN: "Ancient stress-reliever and energy booster.", SI: "මානසික ආතතිය අඩු කිරීමට සහ ජවය ලබා දීමට යොදා ගනී." },
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    benefits: { EN: "Enhances stamina and reduces cortisol.", SI: "ශාරීරික ශක්තිය වැඩි කරයි සහ ආතතිය පාලනය කරයි." },
    usage: { EN: "Taken as a root powder.", SI: "මුල් කුඩු කර පානය කරයි." }
  },
  {
    id: "treatment-1",
    type: "treatment",
    name: { EN: "Belimal Tea", SI: "බෙලිමල් තේ" },
    description: { EN: "A cooling herbal infusion from the Bael flower.", SI: "බෙලි මල් වලින් සාදන ලද ශරීරය සිසිල් කරන පානයකි." },
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=800&q=80",
    benefits: { EN: "Cures indigestion and stomach ailments.", SI: "අජීර්ණය සහ උදරාබාධ සුවපත් කරයි." },
    usage: { EN: "Drink warm with jaggery.", SI: "හකුරු සමග මද උණුසුමින් පානය කරන්න." }
  }
];

export const CATEGORIES_DATA = [
  { id: "foods", icon: "Utensils", title: { EN: "Food Heritage", SI: "ආහාර උරුමය" }, description: { EN: "Taste the spices of Lanka.", SI: "ලංකාවේ කුළුබඩු රස බලන්න." } },
  { id: "music", icon: "Music", title: { EN: "Ancient Music", SI: "සංගීතය" }, description: { EN: "Listen to the rhythms.", SI: "දේශීය රිද්මයට සවන් දෙන්න." } }
];

export const TEA_DATA: TeaExperience[] = [
  { id: 'tea1', name: { EN: 'Ceylon Black Tea', SI: 'ලංකා කළු තේ' }, description: { EN: 'World famous rich tea with a bold flavor.', SI: 'ප්‍රබල රසයකින් යුත් ලොව සුප්‍රසිද්ධ කළු තේ.' }, image: 'https://images.unsplash.com/photo-1594631252845-29fc458695d1?auto=format&fit=crop&w=800&q=80', type: 'variety', fact: { EN: 'Hand-picked two leaves and a bud.', SI: 'අතින් නෙළූ තේ දළු සහ පොහොට්ටුව.' } },
  { id: 'tea2', name: { EN: 'Silver Tips (White Tea)', SI: 'රිදී තේ (සුදු තේ)' }, description: { EN: 'The rarest tea, made only from un-opened buds.', SI: 'නොපිපුණු තේ පොහොට්ටු වලින් පමණක් සාදන දුර්ලභ තේ වර්ගයකි.' }, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80', type: 'variety', fact: { EN: 'Sun-dried to preserve natural antioxidants.', SI: 'ස්වභාවික ගුණ රැක ගැනීමට හිරු රශ්මියෙන් වියළා ගනී.' } },
  { id: 'tea3', name: { EN: 'Nuwara Eliya (High Grown)', SI: 'නුවරඑළිය තේ' }, description: { EN: 'Known as the "Champagne of Tea" for its golden hue.', SI: 'එහි රන්වන් පැහැය නිසා "තේ ලොවේ ෂැම්පේන්" ලෙස හැඳින්වේ.' }, image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80', type: 'location', fact: { EN: 'Grown at 6,000 feet above sea level.', SI: 'මුහුදු මට්ටමේ සිට අඩි 6,000 ක් ඉහළින් වගා කෙරේ.' } },
  { id: 'tea4', name: { EN: 'Uva (Strong & Pungent)', SI: 'ඌව තේ' }, description: { EN: 'Teas with an exotic aromatic character.', SI: 'සුවිශේෂී සුවඳකින් සහ ප්‍රබල රසයකින් යුත් තේ වර්ගයකි.' }, image: 'https://images.unsplash.com/photo-1501534159995-5b8c9ad9479b?auto=format&fit=crop&w=800&q=80', type: 'location', fact: { EN: 'Grown on the eastern slopes of the central hills.', SI: 'මධ්‍යම කඳුකරයේ නැගෙනහිර බෑවුම් වල වගා කෙරේ.' } },
  { id: 'tea5', name: { EN: 'Dimbula (Light & Bright)', SI: 'දිඹුල තේ' }, description: { EN: 'Teas with a refreshing, light golden color.', SI: 'ප්‍රබෝධමත්, ලා රන්වන් පැහැති තේ වර්ගයකි.' }, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80', type: 'location', fact: { EN: 'Peak season is January and February.', SI: 'ප්‍රධාන අස්වනු කාලය ජනවාරි සහ පෙබරවාරි වේ.' } },
  { id: 'tea6', name: { EN: 'Ruhuna (Low Grown)', SI: 'රුහුණු තේ' }, description: { EN: 'Strong, full-bodied tea grown in fertile soil.', SI: 'සාරවත් පසක වගා කරන ප්‍රබල රසැති තේ වර්ගයකි.' }, image: 'https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=800&q=80', type: 'location', fact: { EN: 'Characterized by its unique blackness.', SI: 'මෙහි ඇති විශේෂිත තද කළු පැහැය විශේෂත්වයකි.' } },
  { id: 'tea7', name: { EN: 'CTC Processing', SI: 'CTC නිෂ්පාදන ක්‍රමය' }, description: { EN: 'Crush, Tear, and Curl - modern tea processing.', SI: 'තේ දළු තලා, කැබලි කර, රෝල් කිරීමේ නවීන ක්‍රමයකි.' }, image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80', type: 'process', fact: { EN: 'Produces strong tea that brews quickly.', SI: 'ඉක්මනින් සෑදිය හැකි ප්‍රබල රසැති තේ නිපදවයි.' } },
  { id: 'tea8', name: { EN: 'Orthodox Method', SI: 'සාම්ප්‍රදායික නිෂ්පාදන ක්‍රමය' }, description: { EN: 'Traditional hand-crafted tea manufacturing.', SI: 'සාම්ප්‍රදායික ලෙස අතින් පදම් කර තේ නිෂ්පාදනය කිරීමේ ක්‍රමයකි.' }, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', type: 'process', fact: { EN: 'Preserves the delicate whole-leaf character.', SI: 'මුළු තේ දල්ලේම ගුණාත්මක භාවය මෙයින් සුරැකේ.' } },
  { id: 'tea9', name: { EN: 'Tea Plucking Ritual', SI: 'තේ දළු නෙළීමේ චාරිත්‍රය' }, description: { EN: 'The precise art of gathering the best tea leaves.', SI: 'හොඳම තේ දළු තෝරා නෙළා ගැනීමේ සියුම් කලාවයි.' }, image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80', type: 'process', fact: { EN: 'Plucked exclusively by skilled hands.', SI: 'පුහුණු දෑත් වලින් පමණක් සිදු කරනු ලබයි.' } },
  { id: 'tea10', name: { EN: 'The Tea Taster\'s Art', SI: 'තේ රස පරීක්ෂක කලාව' }, description: { EN: 'Expert analysis of color, aroma, and flavor.', SI: 'තේ වල පැහැය, සුවඳ සහ රසය පිළිබඳ විශේෂඥ විශ්ලේෂණයකි.' }, image: 'https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&w=800&q=80', type: 'process', fact: { EN: 'A single batch is tasted multiple times.', SI: 'එක් නිෂ්පාදනයක් කිහිප වතාවක් රස පරීක්ෂාවට ලක් කෙරේ.' } },
  { id: 'tea11', name: { EN: 'Kandy (Mid Grown)', SI: 'මහනුවර තේ' }, description: { EN: 'Teas with a coppery hue and robust strength.', SI: 'තඹ පැහැති සහ ප්‍රබල රසයකින් යුත් තේ වර්ගයකි.' }, image: 'https://images.unsplash.com/photo-1594631252845-29fc458695d1?auto=format&fit=crop&w=800&q=80', type: 'location', fact: { EN: 'The area where tea was first planted in 1867.', SI: '1867 දී ප්‍රථමයෙන් තේ වගා කරන ලද ප්‍රදේශයයි.' } }
];

export const PHRASEBOOK_DATA: Phrase[] = [
  { id: 'p1', english: 'Hello / Greetings', sinhala: 'ආයුබෝවන්', transliteration: 'Ayubowan', category: 'greeting' },
  { id: 'p2', english: 'Thank you', sinhala: 'ස්තූතියි', transliteration: 'Stuti', category: 'greeting' },
  { id: 'p3', english: 'How are you?', sinhala: 'කොහොමද?', transliteration: 'Kohomada?', category: 'greeting' },
  { id: 'p4', english: 'Good', sinhala: 'හොඳයි', transliteration: 'Hondai', category: 'greeting' },
  { id: 'p5', english: 'I don\'t want', sinhala: 'එපා', transliteration: 'Epa', category: 'shopping' },
  { id: 'p6', english: 'How much?', sinhala: 'කීයද?', transliteration: 'Keeyada?', category: 'shopping' },
  { id: 'p7', english: 'Okay / Correct', sinhala: 'හරි', transliteration: 'Hari', category: 'greeting' },
  { id: 'p8', english: 'Goodbye (I will go and come)', sinhala: 'ගිහින් එන්නම්', transliteration: 'Gihin ennam', category: 'greeting' },
  { id: 'p9', english: 'This is beautiful', sinhala: 'මේක ලස්සනයි', transliteration: 'Meka lassanai', category: 'greeting' },
  { id: 'p10', english: 'Please', sinhala: 'කරුණාකරලා', transliteration: 'Karunakarala', category: 'greeting' },
  { id: 'p11', english: 'Water', sinhala: 'වතුර', transliteration: 'Vatura', category: 'dining' },
  { id: 'p12', english: 'Food is delicious', sinhala: 'කෑම රසයි', transliteration: 'Kama rasai', category: 'dining' },
  { id: 'p13', english: 'Where is the washroom?', sinhala: 'වැසිකිළිය කොහේද?', transliteration: 'Vasikiliya koheda?', category: 'emergency' },
  { id: 'p14', english: 'Help me', sinhala: 'මට උදව් කරන්න', transliteration: 'Mata udau karanna', category: 'emergency' },
  { id: 'p15', english: 'Slowly', sinhala: 'හෙමින්', transliteration: 'Hemin', category: 'greeting' }
];

export const TRAVEL_ESSENTIALS_DATA: TravelEssential[] = [
  { id: 'e1', title: { EN: 'Visa (ETA)', SI: 'වීසා' }, description: { EN: 'Apply online for an Electronic Travel Authorization before arrival.', SI: 'පැමිණීමට පෙර අන්තර්ජාලය හරහා වීසා ලබා ගන්න.' }, icon: 'ShieldCheck', tips: [{ EN: 'Use the official portal.', SI: 'නිල වෙබ් අඩවිය භාවිතා කරන්න.' }] },
  { id: 'e2', title: { EN: 'Local SIM Card', SI: 'දේශීය සිම් පත' }, description: { EN: 'Available at the airport for immediate data connectivity.', SI: 'ගුවන්තොටුපලේදී දත්ත පහසුකම් සහිත සිම් පතක් ලබා ගත හැක.' }, icon: 'Zap', tips: [{ EN: 'Dialog or Mobitel are popular.', SI: 'ඩයලොග් හෝ මොබිටෙල් ජනප්‍රිය වේ.' }] },
  { id: 'e3', title: { EN: 'Currency (LKR)', SI: 'මුදල්' }, description: { EN: 'Sri Lankan Rupee is the legal tender. Cash is king in rural areas.', SI: 'දේශීය මුදල රුපියල් වේ. ග්‍රාමීය ප්‍රදේශ වල මුදල් අතැතිව තබා ගැනීම සුදුසුයි.' }, icon: 'Coins', tips: [{ EN: 'Carry small notes.', SI: 'කුඩා මුදල් නෝට්ටු රැගෙන යන්න.' }] },
  { id: 'e4', title: { EN: 'Power Adapters', SI: 'විදුලි ඇඩප්ටර' }, description: { EN: 'Mostly Type G (square three-pin) or Type D (round three-pin).', SI: 'බොහෝ විට භාවිතා කරන්නේ තුන් කෙවෙනි ප්ලග් වර්ග වේ.' }, icon: 'Zap', tips: [{ EN: '230V is standard.', SI: 'සම්මත වෝල්ටීයතාවය 230V වේ.' }] },
  { id: 'e5', title: { EN: 'Transport Apps', SI: 'ප්‍රවාහන මෘදුකාංග' }, description: { EN: 'PickMe and Uber are widely used in cities for taxis and tuks.', SI: 'කොළඹ සහ නගර වල ප්‍රවාහන කටයුතු සඳහා PickMe සහ Uber භාවිතා වේ.' }, icon: 'Car', tips: [{ EN: 'Download before landing.', SI: 'පැමිණීමට පෙර ස්ථාපනය කරගන්න.' }] },
  { id: 'e6', title: { EN: 'Dress Code', SI: 'ඇඳුම් පැළඳුම්' }, description: { EN: 'Cover shoulders and knees when visiting sacred temples.', SI: 'පූජනීය ස්ථාන වලට යන විට උරහිස් සහ දණහිස් වැසෙන සේ අඳින්න.' }, icon: 'Backpack', tips: [{ EN: 'Carry a light sarong.', SI: 'සැහැල්ලු සරමක් රැගෙන යන්න.' }] },
  { id: 'e7', title: { EN: 'Sun Protection', SI: 'හිරු ආවරණය' }, description: { EN: 'Tropical sun is intense; high SPF sunscreen is essential.', SI: 'නිවර්තන කලාපයේ හිරු රශ්මිය තදින් පවතින බැවින් හිරු ආවරණ ආලේපන වැදගත් වේ.' }, icon: 'Sun', tips: [{ EN: 'Reapply frequently.', SI: 'නිරන්තරයෙන් ආලේප කරන්න.' }] },
  { id: 'e8', title: { EN: 'Hydration', SI: 'දියර වර්ග' }, description: { EN: 'Drink bottled water or fresh Thambili (King Coconut).', SI: 'බෝතල් කළ ජලය හෝ නැවුම් තැඹිලි පානය කරන්න.' }, icon: 'Waves', tips: [{ EN: 'Avoid tap water.', SI: 'නල ජලය පානයෙන් වළකින්න.' }] },
  { id: 'e9', title: { EN: 'Train Bookings', SI: 'දුම්රිය වෙන්කිරීම්' }, description: { EN: 'Book observation deck seats weeks in advance for scenic routes.', SI: 'සුන්දර දුම්රිය ගමන් සඳහා සති කිහිපයකට පෙර ආසන වෙන් කරගන්න.' }, icon: 'Train', tips: [{ EN: 'Check the 1st class deck.', SI: 'පළමු පන්තියේ ආසන පරීක්ෂා කරන්න.' }] },
  { id: 'e10', title: { EN: 'Health & Safety', SI: 'සෞඛ්‍ය සහ ආරක්ෂාව' }, description: { EN: 'Dengue is prevalent; use mosquito repellent at dawn/dusk.', SI: 'ඩෙංගු රෝගයෙන් ආරක්ෂා වීමට මදුරු විකර්ෂක භාවිතා කරන්න.' }, icon: 'ShieldCheck', tips: [{ EN: 'Carry repellent sprays.', SI: 'මදුරු විකර්ෂක රැගෙන යන්න.' }] },
  { id: 'e11', title: { EN: 'Tipping Culture', SI: 'සන්තෝසම් දීම' }, description: { EN: 'Standard tip is around 10% for good service.', SI: 'හොඳ සේවාවක් සඳහා සාමාන්‍යයෙන් 10% ක සන්තෝසම් මුදලක් ලබා දෙයි.' }, icon: 'Globe', tips: [{ EN: 'Check for service charge.', SI: 'සේවා ගාස්තුව පරීක්ෂා කරන්න.' }] }
];

export const FESTIVALS_DATA: Festival[] = [
  { id: 'fest1', name: { EN: 'Kandy Esala Perahera', SI: 'මහනුවර ඇසළ පෙරහැර' }, category: 'religious', date: { EN: 'August', SI: 'අගෝස්තු' }, description: { EN: 'The most grand cultural pageant in Asia honoring the Sacred Tooth Relic.', SI: 'දන්ත ධාතූන් වහන්සේ උදෙසා පවත්වන ආසියාවේ විශාලතම සංස්කෘතික මංගල්‍යයකි.' }, image: 'https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?q=80&w=1200&auto=format&fit=crop', significance: { EN: 'National faith and artistic heritage.', SI: 'ජාතික ඇදහිල්ල සහ කලාත්මක උරුමය කියාපායි.' } },
  { id: 'fest2', name: { EN: 'Aluth Avurudu', SI: 'අලුත් අවුරුද්ද' }, category: 'harvest', date: { EN: 'April', SI: 'අප්‍රේල්' }, description: { EN: 'The Sinhala and Tamil New Year, celebrating the end of harvest.', SI: 'අස්වනු නෙළීම සැමරීම සඳහා පවත්වන සිංහල සහ දෙමළ අලුත් අවුරුද්දයි.' }, image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop', significance: { EN: 'Unity, cultural games, and rituals.', SI: 'එකමුතුකම, ක්‍රීඩා සහ චාරිත්‍ර වාරිත්‍ර මුල් වේ.' } },
  { id: 'fest3', name: { EN: 'Vesak Poya', SI: 'වෙසක් පොහොය' }, category: 'religious', date: { EN: 'May', SI: 'මැයි' }, description: { EN: 'Commemorating the birth, enlightenment, and passing of the Buddha.', SI: 'බුදුරජාණන් වහන්සේගේ තෙමඟුල සමරන පූජනීය දිනයයි.' }, image: 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?q=80&w=1200&auto=format&fit=crop', significance: { EN: 'Lanterns, pandals, and spiritual reflection.', SI: 'කූඩු, තොරණ සහ ආගමික වතාවත් සිදු කෙරේ.' } },
  { id: 'fest4', name: { EN: 'Poson Poya', SI: 'පොසොන් පොහොය' }, category: 'religious', date: { EN: 'June', SI: 'ජූනි' }, description: { EN: 'Celebrating the arrival of Buddhism in Sri Lanka at Mihintale.', SI: 'මිහින්තලයට බුදුදහම රැගෙන ඒම සමරන උතුම් දිනයයි.' }, image: 'https://images.unsplash.com/photo-1514483127413-f72f273478c3?q=80&w=1200&auto=format&fit=crop', significance: { EN: 'Pilgrimage to the ancient city of Anuradhapura.', SI: 'අනුරාධපුර පූජනීය නගරයට වන්දනා ගමන් සිදු කෙරේ.' } },
  { id: 'fest5', name: { EN: 'Thai Pongal', SI: 'තෛයිපොංගල්' }, category: 'harvest', date: { EN: 'January', SI: 'ජනවාරි' }, description: { EN: 'Tamil harvest festival thanking the Sun God and cattle.', SI: 'සූර්ය දෙවියන්ට සහ ගවයින්ට ස්තූති කරන දෙමළ අස්වනු උත්සවයකි.' }, image: 'https://images.unsplash.com/photo-1544921603-91185f0962b1?q=80&w=1200&auto=format&fit=crop', significance: { EN: 'Cooking Pongal rice and colorful floor art (Kolam).', SI: 'පොංගල් බත් පිසීම සහ කෝලම් රටා ඇඳීම මෙහි විශේෂත්වයකි.' } },
  { id: 'fest6', name: { EN: 'Deepavali', SI: 'දීපාවලි' }, category: 'religious', date: { EN: 'October/November', SI: 'ඔක්තෝබර්/නොවැම්බර්' }, description: { EN: 'The Hindu Festival of Lights, celebrating victory of light over dark.', SI: 'අන්ධකාරය පරදා ආලෝකය ජය ගැනීම සමරන හින්දු ආගමික උත්සවයකි.' }, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop', significance: { EN: 'Lighting oil lamps and family gatherings.', SI: 'පහන් දැල්වීම සහ පවුලේ සාමාජිකයන් එක්වීම සිදු කෙරේ.' } },
  { id: 'fest7', name: { EN: 'Vel Festival', SI: 'වේල් උත්සවය' }, category: 'religious', date: { EN: 'July/August', SI: 'ජූලි/අගෝස්තු' }, description: { EN: 'A major Hindu procession in Colombo honoring Lord Murugan.', SI: 'කොළඹ නගරයේ පවත්වන මුරුගන් දෙවිඳුන් වෙනුවෙන් වූ ප්‍රධාන පෙරහැරකි.' }, image: 'https://images.unsplash.com/photo-1578503117502-3162799f9392?q=80&w=1200&auto=format&fit=crop', significance: { EN: 'A golden chariot travels between temples.', SI: 'පන්සල් අතර රන් රථයක් ගමන් කිරීම මෙහි විශේෂත්වයකි.' } },
  { id: 'fest8', name: { EN: 'Madhu Church Festival', SI: 'මඩු පල්ලියේ උත්සවය' }, category: 'religious', date: { EN: 'August', SI: 'අගෝස්තු' }, description: { EN: 'Major Catholic pilgrimage in the northern jungles.', SI: 'උතුරේ වනාන්තර මැද පිහිටි පූජනීය කතෝලික මංගල්‍යයකි.' }, image: 'https://images.unsplash.com/photo-1501534159995-5b8c9ad9479b?q=80&w=1200&auto=format&fit=crop', significance: { EN: 'Symbol of peace and reconciliation.', SI: 'සාමයේ සහ සංහිඳියාවේ සංකේතයකි.' } },
  { id: 'fest9', name: { EN: 'Galle Literary Festival', SI: 'ගාල්ල සාහිත්‍ය උත්සවය' }, category: 'art', date: { EN: 'January', SI: 'ජනවාරි' }, description: { EN: 'A celebration of literature and arts in the historic fort.', SI: 'ඓතිහාසික ගාල්ල කොටුව තුළ පවත්වන සාහිත්‍ය සහ කලා සැමරුමකි.' }, image: 'https://images.unsplash.com/photo-1654561773591-57b9413c45c0?q=80&w=1200&auto=format&fit=crop', significance: { EN: 'International gathering of authors and poets.', SI: 'ලොව පුරා ලේඛකයින් සහ කවීන් එක්වන අවස්ථාවකි.' } },
  { id: 'fest10', name: { EN: 'Kataragama Festival', SI: 'කතරගම මංගල්‍යය' }, category: 'religious', date: { EN: 'July', SI: 'ජූලි' }, description: { EN: 'A multicultural festival with unique rituals and fire walking.', SI: 'ගිනි පෑගීම ඇතුළු විවිධ චාරිත්‍ර සහිත බහු සංස්කෘතික උත්සවයකි.' }, image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop', significance: { EN: 'Harmony between Buddhism, Hinduism, and Islam.', SI: 'ආගම් කිහිපයක සහජීවනය නිරූපණය කරයි.' } },
  { id: 'fest11', name: { EN: 'Nallur Festival', SI: 'නල්ලූර් උත්සවය' }, category: 'religious', date: { EN: 'August/September', SI: 'අගෝස්තු/සැප්තැම්බර්' }, description: { EN: 'The longest religious festival in Jaffna lasting 25 days.', SI: 'යාපනය නල්ලූර් කෝවිලේ දින 25 ක් පුරා පැවැත්වෙන විශාලතම මංගල්‍යයයි.' }, image: 'https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=1200&q=80', significance: { EN: 'Displays Northern cultural identity.', SI: 'උතුරේ සංස්කෘතික අනන්‍යතාවය විදහා දක්වයි.' } }
];

export const HIKING_DATA: HikingSpot[] = [
  { id: 'hike1', name: { EN: 'Adams Peak', SI: 'ශ්‍රී පාදය' }, location: { EN: 'Ratnapura', SI: 'රත්නපුර' }, difficulty: 'Challenging', duration: { EN: '6 Hours', SI: 'පැය 6' }, description: { EN: 'A sacred sunrise climb that challenges the spirit.', SI: 'ආත්මය ශක්තිමත් කරන පූජනීය හිරු උදාව නරඹන ගමනකි.' }, image: 'https://images.unsplash.com/photo-1653151106766-52f14da3bb68?w=1600&auto=format&fit=crop&q=80', elevation: '2,243m' }
];