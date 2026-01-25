
import { Destination, Food, HeritageMusic, TraditionalMedicine, TeaExperience, Phrase, TravelEssential, Festival, Translation, HikingSpot, Transport } from './types.ts';

export const SUPABASE_KEY = 'sb_publishable_c8wPY71QFNsFJKcAEuD86w_pcqen0nv';

export const TRANSPORT_DATA: Transport[] = [
  {
    id: 't1',
    name: { EN: 'Elite Chauffeur Service', SI: 'ප්‍රභූ රියදුරු සේවාව' },
    type: 'road',
    price: 85,
    description: { EN: 'Luxury air-conditioned sedans with English-speaking heritage guides.', SI: 'ඉංග්‍රීසි කතා කරන මගපෙන්වන්නන් සහිත සුඛෝපභෝගී රථ සේවාව.' },
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    features: { EN: ['Wi-Fi Enabled', 'Refreshments Included', 'Flexible Itinerary'], SI: ['Wi-Fi පහසුකම්', 'කෙටි ආහාර', 'නම්යශීලී ගමන් මග'] }
  },
  {
    id: 't2',
    name: { EN: 'Cinnamon Air Domestic', SI: 'සිනමන් එයාර් දේශීය ගුවන්' },
    type: 'air',
    price: 240,
    description: { EN: 'Fastest link between the coast and the cultural triangle.', SI: 'මුහුදු වෙරළ සහ සංස්කෘතික ත්‍රිකෝණය අතර වේගවත්ම සබඳතාවය.' },
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80',
    features: { EN: ['Scenic Views', '30 Min Flight Time', 'Premium Lounge'], SI: ['අලංකාර දසුන්', 'විනාඩි 30ක ගමන් කාලය', 'ප්‍රභූ විවේකාගාරය'] }
  },
  {
    id: 't3',
    name: { EN: 'Viceroy Special Train', SI: 'වයිස්රෝයි විශේෂ දුම්රිය' },
    type: 'rail',
    price: 120,
    description: { EN: 'A vintage steam engine journey through the misty tea hills.', SI: 'මීදුමෙන් වැසුණු කඳුකරය හරහා යන පැරණි වාෂ්ප එන්ජින් දුම්රිය චාරිකාව.' },
    image: 'https://images.unsplash.com/photo-1474487056217-76fead63c19e?auto=format&fit=crop&w=800&q=80',
    features: { EN: ['Observation Car', 'Fine Dining', 'Heritage Decor'], SI: ['නිරීක්ෂණ මැදිරිය', 'රසවත් ආහාර', 'පෞරාණික සැරසිලි'] }
  },
  {
    id: 't4',
    name: { EN: 'Heritage Tuk-Tuk Safari', SI: 'පාරම්පරික රික්ෂෝ සවාරිය' },
    type: 'road',
    price: 35,
    description: { EN: 'The most authentic way to explore local villages and hidden coastal paths.', SI: 'දේශීය ගම්මාන සහ සැඟවුණු වෙරළබඩ මාවත් ගවේෂණය කිරීමට ඇති හොඳම ක්‍රමය.' },
    image: 'https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80',
    features: { EN: ['Local Insight', 'Open-Air Experience', 'Hidden Gem Access'], SI: ['දේශීය අවබෝධය', 'විවෘත අත්දැකීම', 'රහස් ස්ථාන නැරඹීම'] }
  },
  {
    id: 't5',
    name: { EN: 'Ella Odyssey Express', SI: 'ඇල්ල ඔඩිසි දුම්රිය' },
    type: 'rail',
    price: 65,
    description: { EN: 'Experience the world-renowned blue train journey with guaranteed comfort.', SI: 'සුවපහසුව සමඟ ලොව සුප්‍රසිද්ධ නිල් දුම්රිය ගමන අත්විඳින්න.' },
    image: 'https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=800&q=80',
    features: { EN: ['Large Windows', 'Tea Service', 'Photography Deck'], SI: ['විශාල ජනේල', 'තේ පැන් සත්කාරය', 'ඡායාරූපකරණ බැල්කනිය'] }
  }
];

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

export const CATEGORIES_DATA = [
  { id: "wildlife", icon: "PawPrint", title: { EN: "Wildlife", SI: "වනජීවී" }, description: { EN: "Encounter majestic elephants and elusive leopards.", SI: "ගාම්භීර අලි ඇතුන් සහ දුර්ලභ දිවියන් දැකගන්න." } },
  { id: "hiking", icon: "Mountain", title: { EN: "Hiking", SI: "කඳු තරණය" }, description: { EN: "Scale misty peaks and trek through lush green trails.", SI: "මීදුමෙන් වැසුණු කඳු මුදුන් සහ හරිත මාවත් ඔස්සේ ඇවිද යන්න." } },
  { id: "foods", icon: "Utensils", title: { EN: "Food Heritage", SI: "ආහාර උරුමය" }, description: { EN: "Taste the history of Lanka through its ancient spices.", SI: "පැරණි කුළුබඩු රසයෙන් ලංකාවේ ඉතිහාසය අත්විඳින්න." } },
  { id: "essentials", icon: "Backpack", title: { EN: "Travel Guide", SI: "සංචාරක උපදෙස්" }, description: { EN: "Practical info on Visa, Currency, and getting around.", SI: "වීසා, මුදල් සහ ගමනාගමනය පිළිබඳ ප්‍රායෝගික තොරතුරු." } },
  { id: "festivals", icon: "PartyPopper", title: { EN: "Festivals", SI: "සංස්කෘතික උත්සව" }, description: { EN: "Experience the vibrant Peraheras and traditions.", SI: "විචිත්‍රවත් පෙරහැර සහ සම්ප්‍රදායන් අත්විඳින්න." } },
  { id: "tea", icon: "Sprout", title: { EN: "Tea Trails", SI: "තේ සංස්කෘතිය" }, description: { EN: "Explore the journey from leaf to cup in the misty hills.", SI: "මීදුමෙන් වැසුණු කඳුකරයේ තේ දල්ලේ සිට කෝප්පය දක්වා ගමන." } },
  { id: "phrases", icon: "MessageSquare", title: { EN: "Local Language", SI: "දේශීය භාෂාව" }, description: { EN: "Learn basic Sinhala to connect with the locals.", SI: "දේශීය ජනතාව සමඟ සන්නිවේදනය කිරීමට සිංහල භාෂාව ඉගෙන ගන්න." } }
];

export const HERITAGE_MUSIC_DATA: HeritageMusic[] = [
  { id: "drum-1", type: "instrument", name: { EN: "Geta Beraya", SI: "ගැට බෙරය" }, description: { EN: "The primary double-headed drum used in Kandyan (Upcountry) dancing.", SI: "උඩරට නැටුම් කලාවේ ප්‍රධානතම වාද්‍ය භාණ්ඩය වන මෙය දෙපසින්ම වැයිය හැකි බෙරයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Kandy", SI: "මහනුවර" }, significance: { EN: "The soul of the Kandyan rhythm.", SI: "උඩරට රිද්ම කලාවේ පදනමයි." } },
  { id: "drum-2", type: "instrument", name: { EN: "Yak Beraya", SI: "යක් බෙරය" }, description: { EN: "A cylindrical drum used primarily in Low-country (Pahatha Rata) rituals.", SI: "පහතරට නැටුම් සහ ශාන්තිකර්ම සඳහා භාවිතා කරන බෙරයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Southern Coast", SI: "දකුණු වෙරළ තීරය" }, significance: { EN: "Essential for exorcism rituals.", SI: "ශාන්තිකර්ම සහ තොවිල් වලදී අත්‍යවශ්‍ය වේ." } },
  { id: "drum-3", type: "instrument", name: { EN: "Dawula", SI: "දවුල" }, description: { EN: "A barrel-shaped drum played with one stick and one hand, common in Sabaragamuwa.", SI: "කෝටුවකින් සහ අතින් වයන, සබරගමු නැටුම් සඳහා භාවිතා වන බෙරයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Sabaragamuwa", SI: "සබරගමුව" }, significance: { EN: "Used in temple ceremonies.", SI: "විහාරස්ථාන වල පූජාවන් සඳහා යොදා ගනී." } },
  { id: "drum-4", type: "instrument", name: { EN: "Thammattama", SI: "තම්මැට්ටම" }, description: { EN: "A twin-drum set played with two curved sticks to produce sharp beats.", SI: "වක්‍ර වූ කෝටු දෙකකින් වයන, තියුණු රිද්මයක් ඇති නිවුන් බෙරයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Ancient Temples", SI: "පුරාණ පන්සල්" }, significance: { EN: "Key component of Hevisi ensembles.", SI: "හේවිසි වාදනයේ වැදගත් කොටසකි." } },
  { id: "drum-5", type: "instrument", name: { EN: "Udekkiya", SI: "උඩැක්කිය" }, description: { EN: "A small hourglass-shaped drum, hand-pressed to change pitch.", SI: "ඩමරු හැඩැති, තෙරපීමෙන් ශබ්දය වෙනස් කළ හැකි කුඩා බෙරයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Upcountry", SI: "උඩරට" }, significance: { EN: "Often used in ritualistic chanting.", SI: "චාරිත්‍රානුකූල ගායනා සඳහා භාවිතා වේ." } },
  { id: "drum-6", type: "instrument", name: { EN: "Bummadiya", SI: "බුම්මැඩිය" }, description: { EN: "A clay-pot drum played during harvest seasons and folk games.", SI: "අස්වනු නෙලන කාලයට සහ ජන ක්‍රීඩා සඳහා භාවිතා කරන මැටි බෙරයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Rural Lanka", SI: "ග්‍රාමීය ලංකාව" }, significance: { EN: "Represents the agrarian heartbeat.", SI: "කෘෂිකාර්මික උරුමය නිරූපණය කරයි." } },
  { id: "inst-1", type: "instrument", name: { EN: "Horanewa", SI: "හොරණෑව" }, description: { EN: "A traditional wind instrument producing a shrill, powerful sound.", SI: "තියුණු ශබ්දයක් නිපදවන පාරම්පරික සුළං වාද්‍ය භාණ්ඩයකි." }, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80", origin: { EN: "Ceremonial Sites", SI: "උත්සව අවස්ථා" }, significance: { EN: "Calls the nation to prayer/attention.", SI: "පූජනීය අවස්ථාවන් සනිටුහන් කරයි." } },
  { id: "inst-2", type: "instrument", name: { EN: "Hakgediya", SI: "හක්ගෙඩිය" }, description: { EN: "A conch shell used to signal the beginning of sacred events.", SI: "ශුද්ධ වූ අවස්ථාවන් ආරම්භ කිරීමට භාවිතා කරන හක්බෙල්ලෙකි." }, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80", origin: { EN: "Coastal Temples", SI: "මුහුදුබඩ පන්සල්" }, significance: { EN: "Purifies the surroundings with its sound.", SI: "ශබ්දයෙන් වටපිටාව පවිත්‍ර කරයි." } },
  { id: "inst-3", type: "instrument", name: { EN: "Thalampota", SI: "තාලම්පොට" }, description: { EN: "Small finger cymbals made of brass, used for keeping time.", SI: "රිද්මය පවත්වා ගැනීමට භාවිතා කරන පිත්තල තාලම්පොට යුගලයකි." }, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80", origin: { EN: "Orchestras", SI: "වාදක කණ්ඩායම්" }, significance: { EN: "The clock of the ensemble.", SI: "වාද්‍ය වෘන්දයේ කාලය පාලනය කරන්නායි." } },
  { id: "inst-4", type: "instrument", name: { EN: "Pantheruwa", SI: "පන්තේරුව" }, description: { EN: "A circular tambourine-like instrument with metal discs.", SI: "ලෝහ තැටි සහිත රවුම් හැඩැති වාද්‍ය භාණ්ඩයකි." }, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80", origin: { EN: "Traditional Dance", SI: "පාරම්පරික නැටුම්" }, significance: { EN: "Enhances the visual and auditory energy of dance.", SI: "නර්තනයේ ජවය වැඩි කරයි." } },
  { id: "song-1", type: "song", name: { EN: "Goyam Kavi", SI: "ගොයම් කවි" }, description: { EN: "Melodic verses sung by farmers while harvesting paddy.", SI: "ගොයම් කපන කාලයට ගොවියන් ගායනා කරන මිහිරි කවි." }, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", origin: { EN: "Paddy Fields", SI: "කුඹුරු යාය" }, significance: { EN: "Relieves the toil of labor.", SI: "වෙහෙස මහන්සිය දුරු කරයි." } },
  { id: "song-2", type: "song", name: { EN: "Pel Kavi", SI: "පැල් කවි" }, description: { EN: "Songs of loneliness and hope sung at night from watch huts.", SI: "රාත්‍රී කාලයේ පැල් රකිමින් ගායනා කරන කවි." }, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", origin: { EN: "Watch Huts", SI: "පැල් පත" }, significance: { EN: "Protects the spirit through the night.", SI: "තනිකම මකා ගනිමින් බෝග ආරක්ෂා කරයි." } },
  { id: "song-3", type: "song", name: { EN: "Pathala Kavi", SI: "පතල් කවි" }, description: { EN: "Rhythmic chants of miners deep underground.", SI: "පතල් තුළ වැඩ කරන කම්කරුවන් ගායනා කරන කවි." }, image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80", origin: { EN: "Ratnapura", SI: "රත්නපුර" }, significance: { EN: "Ensures focus and safety in danger.", SI: "අවසානම් සහිත වැඩ වලදී අවධානය පවත්වා ගැනීමට උපකාරී වේ." } },
  { id: "song-4", type: "song", name: { EN: "Karaththa Kavi", SI: "කරත්ත කවි" }, description: { EN: "Songs sung by cart drivers on long forest journeys.", SI: "දීර්ඝ ගමන් යන කරත්තකරුවන් ගායනා කරන කවි." }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80", origin: { EN: "Ancient Roads", SI: "පැරණි මාවත්" }, significance: { EN: "Wards off wild animals and sleep.", SI: "වන සතුන්ගෙන් ආරක්ෂා වීමට සහ නිදිමත මැකීමට." } },
  { id: "song-5", type: "song", name: { EN: "Paru Kavi", SI: "පාරු කවි" }, description: { EN: "Boatmen's songs echoing across rivers and lagoons.", SI: "ගංගා සහ කලපු හරහා පාරු පදවන විට ගායනා කරන කවි." }, image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=800&q=80", origin: { EN: "Riverways", SI: "දිය මාවත්" }, significance: { EN: "Synchronizes the rhythmic rowing.", SI: "පාරු පැදීමේ රිද්මය පවත්වා ගනී." } },
  { id: "genre-1", type: "song", name: { EN: "Baila", SI: "බයිලා" }, description: { EN: "High-energy rhythm influenced by Portuguese heritage.", SI: "පෘතුගීසි බලපෑම සහිත උද්යෝගිමත් සංගීත ශෛලියකි." }, image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80", origin: { EN: "Coastal Lanka", SI: "මුහුදුබඩ ලංකාව" }, significance: { EN: "The life of any Sri Lankan party.", SI: "ඕනෑම උත්සවයක ප්‍රධාන අංගයකි." } },
  { id: "genre-2", type: "song", name: { EN: "Nurthi Gee", SI: "නූර්ති ගී" }, description: { EN: "Theatrical music from the early 20th century.", SI: "20 වන සියවසේ මුල් භාගයේ නාට්‍ය සංගීතයයි." }, image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80", origin: { EN: "Colombo Theaters", SI: "කොළඹ නාට්‍ය ශාලා" }, significance: { EN: "Revived the classical music spirit.", SI: "සම්භාව්‍ය සංගීත ප්‍රබෝධයක් ඇති කළේය." } },
  { id: "genre-3", type: "song", name: { EN: "Nadagam", SI: "නාඩගම්" }, description: { EN: "The oldest form of musical folk drama.", SI: "සංගීතමය ජන නාට්‍ය කලාවේ පැරණිතම ස්වරූපයයි." }, image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80", origin: { EN: "Coastal Villages", SI: "මුහුදුබඩ ගම්මාන" }, significance: { EN: "Earliest narrative musical form.", SI: "කතන්දර පවසන පැරණිතම සංගීතමය කලාවයි." } },
  { id: "ritual-1", type: "song", name: { EN: "Kavi Bana", SI: "කවි බණ" }, description: { EN: "Buddhist sermons delivered in a melodic poetic form.", SI: "කාව්‍යමය ස්වරූපයෙන් දේශනා කරනු ලබන බණ දහම්." }, image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=800&q=80", origin: { EN: "Buddhist Temples", SI: "බෞද්ධ පන්සල්" }, significance: { EN: "Spiritual healing through poetry.", SI: "කවියෙන් කෙරෙන ආධ්‍යාත්මික සුවයකි." } },
  { id: "ritual-2", type: "song", name: { EN: "Gajaga Vannama", SI: "ගජගා වන්නම" }, description: { EN: "Classical dance chant mimicking the gait of an elephant.", SI: "අලියාගේ ගමන් විලාසය නිරූපණය කරන සම්භාව්‍ය නර්තන ගායනයකි." }, image: "https://images.unsplash.com/photo-1549414002-36365a6b0933?auto=format&fit=crop&w=800&q=80", origin: { EN: "Royal Courts", SI: "රාජ සභා" }, significance: { EN: "One of the 18 classical Vannams.", SI: "සම්භාව්‍ය වන්නම් 18 න් එකකි." } }
];

export const MEDICINE_DATA: TraditionalMedicine[] = [
  { id: "herb-1", type: "herb", name: { EN: "Kohomba (Neem)", SI: "කොහොඹ" }, description: { EN: "A powerful natural antiseptic and blood purifier.", SI: "විෂබීජ නාශක ගුණ සහිත ඉතා වටිනා ඔසුවකි." }, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Heals skin infections and detoxes.", SI: "සමේ රෝග සුව කිරීමට සහ ශරීරය පිරිසිදු කිරීමට උපකාරී වේ." }, usage: { EN: "Leaves are used as paste or boiled.", SI: "කොළ ඇඹරුම හෝ තම්බා ගත් ජලය භාවිතා වේ." } },
  { id: "herb-2", type: "herb", name: { EN: "Gotu Kola", SI: "ගොටුකොළ" }, description: { EN: "Revered for brain health and skin regeneration.", SI: "මොළයේ සෞඛ්‍යයට සහ සම පෝෂණයට ඉතා ගුණදායකයි." }, image: "https://images.unsplash.com/photo-1615485240384-56965002075d?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Improves memory and blood circulation.", SI: "මතක ශක්තිය සහ රුධිර ගමනාගමනය වර්ධනය කරයි." }, usage: { EN: "Consumed as fresh salad or juice.", SI: "නැවුම් සලාදයක් හෝ යුෂ ලෙස භාවිතා කරයි." } },
  { id: "herb-3", type: "herb", name: { EN: "Karapincha (Curry Leaves)", SI: "කරපිංචා" }, description: { EN: "Daily spice with high cholesterol-lowering properties.", SI: "කොලෙස්ටරෝල් පාලනය කරන ඉතා ගුණදායක කුළුබඩුවකි." }, image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Improves digestion and hair health.", SI: "ජීරණ පද්ධතියේ සහ කෙස් කළඹේ සෞඛ්‍යයට ඉතා හිතකරයි." }, usage: { EN: "Added to curries or dried into powder.", SI: "ව්‍යංජන වලට හෝ කුඩු ලෙස භාවිතා කරයි." } },
  { id: "herb-4", type: "herb", name: { EN: "Kaha (Turmeric)", SI: "කහ" }, description: { EN: "The fundamental anti-inflammatory of Hela medicine.", SI: "හෙළ වෙදකමේ ප්‍රධානතම ප්‍රදාහ නාශක ඔසුවයි." }, image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f1?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Fights inflammation and boosts immunity.", SI: "ප්‍රදාහයන් සමනය කරන අතර ප්‍රතිශක්තිකරණය වර්ධනය කරයි." }, usage: { EN: "External application or internal consumption.", SI: "බාහිර ආලේපනයක් හෝ ආහාර සමඟ ලබා ගනී." } },
  { id: "herb-5", type: "herb", name: { EN: "Inguru (Ginger)", SI: "ඉඟුරු" }, description: { EN: "A versatile root for respiratory and digestive aid.", SI: "ශ්වසන සහ ජීරණ පද්ධතිය නිරෝගී කරන බහුවිධ ඔසුවකි." }, image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Cures colds, nausea, and bloating.", SI: "සෙම්ප්‍රතිශ්‍යාව සහ බඩේ අමාරු වලට ගුණදායකයි." }, usage: { EN: "Brewed in tea or as a decoction.", SI: "තේ සමඟ හෝ කසාය ලෙස භාවිතා කරයි." } },
  { id: "herb-6", type: "herb", name: { EN: "Sudu Lunu (Garlic)", SI: "සුදු ලූණු" }, description: { EN: "Vital for cardiovascular and respiratory health.", SI: "හෘද වාහිනී පද්ධතියේ සෞඛ්‍යයට ඉතා වැදගත් වේ." }, image: "https://images.unsplash.com/photo-1544650038-ca3953507119?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Lowers blood pressure and cholesterol.", SI: "රුධිර පීඩනය සහ කොලෙස්ටරෝල් මට්ටම අඩු කරයි." }, usage: { EN: "Taken fresh or boiled in milk.", SI: "නැවුම් ලෙස හෝ කිරි සමඟ තම්බා ලබා ගනී." } },
  { id: "herb-7", type: "herb", name: { EN: "Nelli (Amla)", SI: "නෙල්ලි" }, description: { EN: "The king of Vitamin C and anti-aging.", SI: "විටමින් C බහුල, වයසට යාම පාලනය කරන ප්‍රබල ඔසුවකි." }, image: "https://images.unsplash.com/photo-1615485240384-56965002075d?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Brightens eyes and strengthens liver.", SI: "ඇස් පෙනීම වර්ධනය කරන අතර අක්මාව ශක්තිමත් කරයි." }, usage: { EN: "Consumed fresh or as a powder.", SI: "නැවුම් ලෙස හෝ කුඩු ලෙස භාවිතා කරයි." } },
  { id: "herb-8", type: "herb", name: { EN: "Aralu (Haritaki)", SI: "අරළු" }, description: { EN: "Detoxifies the entire system.", SI: "මුළු සිරුරම විෂබීජ වලින් තොර කරයි." }, image: "https://images.unsplash.com/photo-1615485240384-56965002075d?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Improves digestion and immunity.", SI: "ජීරණ පද්ධතිය සහ ප්‍රතිශක්තිය වැඩි දියුණු කරයි." }, usage: { EN: "Part of the Triphala mix.", SI: "ත්‍රිඵල මෝදකයේ ප්‍රධාන කොටසකි." } },
  { id: "herb-9", type: "herb", name: { EN: "Bulu (Vibhitaki)", SI: "බුළු" }, description: { EN: "Vital for respiratory clearings.", SI: "ශ්වසන පද්ධතියේ නිරෝගී බවට අත්‍යවශ්‍ය වේ." }, image: "https://images.unsplash.com/photo-1615485240384-56965002075d?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Treats asthma and throat infections.", SI: "ඇදුම සහ උගුරේ ආසාදන වලට ගුණදායකයි." }, usage: { EN: "Used in herbal decoctions.", SI: "ඖෂධීය කසාය සඳහා යොදා ගනී." } },
  { id: "herb-10", type: "herb", name: { EN: "Komarika (Aloe Vera)", SI: "කෝමාරිකා" }, description: { EN: "Cooling gel for skin and internal heat.", SI: "සම පෝෂණය කරන සහ ශරීරයේ දැවිල්ල නිවන සිසිල් ගුණැති ඔසුවකි." }, image: "https://images.unsplash.com/photo-1596755389378-7d0d24483247?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Hydrates skin and cures ulcers.", SI: "සම තෙතමනය කරන අතර බඩේ තුවාල සුව කරයි." }, usage: { EN: "Direct gel application or juice.", SI: "ජෙල් එකක් ලෙස හෝ යුෂ ලෙස භාවිතා කරයි." } },
  { id: "herb-11", type: "herb", name: { EN: "Iramusu", SI: "ඉරමුසු" }, description: { EN: "The ultimate blood purifier.", SI: "රුධිරය පිරිසිදු කරන ප්‍රධානතම ඔසුවකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Cools the body and clears skin.", SI: "ශරීරය සිසිල් කරන අතර සම පැහැපත් කරයි." }, usage: { EN: "Brewed as a morning drink.", SI: "උදෑසන පානයක් ලෙස තම්බා පානය කරයි." } },
  { id: "herb-12", type: "herb", name: { EN: "Ranawara", SI: "රණවරා" }, description: { EN: "Bright yellow flowers for sugar control.", SI: "සීනි මට්ටම පාලනය කරන රන්වන් පැහැ මල් වර්ගයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Regulates diabetes and body heat.", SI: "දියවැඩියාව සහ ශරීරයේ උෂ්ණත්වය පාලනය කරයි." }, usage: { EN: "Boiled flower tea.", SI: "මල් තම්බා තේ එකක් ලෙස භාවිතා කරයි." } },
  { id: "herb-13", type: "herb", name: { EN: "Polpala", SI: "පොල්පලා" }, description: { EN: "Effective diuretic for kidney health.", SI: "වකුගඩු වල නිරෝගී බව ආරක්ෂා කරන ඔසුවකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Dissolves kidney stones.", SI: "වකුගඩු වල ගල් දියකිරීමට උපකාරී වේ." }, usage: { EN: "Boiled and consumed warm.", SI: "තම්බා මඳ උණුසුමින් පානය කරයි." } },
  { id: "herb-14", type: "herb", name: { EN: "Belimal", SI: "බෙලිමල්" }, description: { EN: "Fragrant flowers for stomach and nerve calm.", SI: "ආමාශයේ සහ ස්නායු පද්ධතියේ සන්සුන් බවට භාවිතා කරයි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Treats gastritis and anxiety.", SI: "ගැස්ට්‍රයිටිස් සහ මානසික ආතතිය දුරු කරයි." }, usage: { EN: "Brewed as a relaxing tea.", SI: "විවේකීව සිටින විට පානය කළ හැකි තේ වර්ගයකි." } },
  { id: "herb-15", type: "herb", name: { EN: "Rasakinda", SI: "රසකිඳ" }, description: { EN: "Powerful immune modulator and fever reducer.", SI: "ප්‍රතිශක්තිය වර්ධනය කරන සහ උණ සුව කරන ඔසුවකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Fights infections and fever.", SI: "ආසාදන සහ උණ රෝග වලට එරෙහිව ක්‍රියා කරයි." }, usage: { EN: "Used in fresh herbal decoctions.", SI: "නැවුම් කසාය පිළියෙල කිරීමට යොදා ගනී." } },
  { id: "treat-1", type: "treatment", name: { EN: "Shirodhara", SI: "ශිරෝධාරා" }, description: { EN: "Continuous pouring of warm oil on the forehead.", SI: "නළල මතට උණුසුම් තෙල් නොකඩවා වැගිරවීම." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Deep mental relaxation and sleep aid.", SI: "ගැඹුරු මානසික නිදහස සහ නින්දට උපකාරී වේ." }, usage: { EN: "Performed by Ayurvedic experts.", SI: "විශේෂඥ ප්‍රතිකාරකයින් විසින් සිදු කරනු ලැබේ." } },
  { id: "treat-2", type: "treatment", name: { EN: "Abhyanga", SI: "අභ්‍යංග" }, description: { EN: "A therapeutic full-body oil massage.", SI: "සම්පූර්ණ ශරීරයටම සිදුකරන තෙල් සම්බාහනයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Increases circulation and eases pain.", SI: "රුධිර ගමනාගමනය වර්ධනය කරන අතර වේදනාව දුරු කරයි." }, usage: { EN: "Precedes herbal steam baths.", SI: "ඖෂධීය වාෂ්ප ස්නානයට පෙර සිදු කරයි." } },
  { id: "treat-3", type: "treatment", name: { EN: "Pinda Sweda", SI: "පිණ්ඩ ස්වේද" }, description: { EN: "Massage using warm herbal boluses (Pottani).", SI: "ඖෂධීය පොට්ටනි මඟින් සිදුකරන තැවීම් සහිත සම්බාහනයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Relieves muscle stiffness and joint pain.", SI: "මාංශ පේශි තද ගතිය සහ හන්දිපත් වේදනාව අඩු කරයි." }, usage: { EN: "Targeted localized treatment.", SI: "ශරීරයේ විශේෂිත ස්ථාන වලට සිදුකරන ප්‍රතිකාරයකි." } },
  { id: "treat-4", type: "treatment", name: { EN: "Vashpa Sweda", SI: "වාෂ්ප ස්වේද" }, description: { EN: "Inducing sweat in a herbal steam box.", SI: "ඖෂධීය වාෂ්ප කුටියක් තුළ දහඩිය පිට කිරීමේ ප්‍රතිකාරයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Weight loss and toxin removal.", SI: "බර අඩු කිරීමට සහ විෂ ඉවත් කිරීමට උපකාරී වේ." }, usage: { EN: "Post-massage procedure.", SI: "සම්බාහනයකට පසුව සිදුකරන ප්‍රතිකාරයකි." } },
  { id: "treat-5", type: "treatment", name: { EN: "Nasya", SI: "නස්‍ය" }, description: { EN: "Nasal administration of herbal drops.", SI: "නාස් මාර්ගයෙන් ඖෂධ ලබා දීමේ ප්‍රතිකාරයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Clears sinuses and headaches.", SI: "සයිනස් රෝග සහ හිසරදය සුව කරයි." }, usage: { EN: "Morning clinical session.", SI: "උදෑසන කාලයේ සිදුකරනු ලබයි." } }
];

export const DESTINATIONS: Destination[] = [
  { id: "sigiriya", name: { EN: "Sigiriya Lion Rock", SI: "සීගිරිය සිංහගිරිය" }, category: "ancient", image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1920&q=80", gallery: ["https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80"], videoUrl: "https://www.youtube.com/shorts/j4ln2UNOnZk", history: { EN: "Sigiriya, the 'Lion Rock', is a UNESCO World Heritage site and one of the best-preserved examples of ancient urban planning.", SI: "සීගිරිය හෙවත් 'සිංහගිරිය' යනු යුනෙස්කෝ ලෝක උරුම අඩවියක් වන අතර පැරණි නගර නිර්මාණකරණයේ විශිෂ්ටතම නිදසුනකි." }, shortStory: { EN: "The 8th Wonder of the World – A fortress in the sky.", SI: "ලොව අටවන පුදුමය - අහස උසට විහිදුණු බලකොටුවකි." }, bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" }, tips: [{ EN: "Climb early morning to avoid the heat.", SI: "රස්නය මග හැරීමට උදෑසන කාලයේ නැගීම ආරම්භ කරන්න." }], location: "Matale District" },
  { id: "polonnaruwa", name: { EN: "Ancient City of Polonnaruwa", SI: "පොළොන්නරුව පැරණි නගරය" }, category: "ancient", image: "https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80"], history: { EN: "The second most ancient kingdom of Sri Lanka, Polonnaruwa features remains of garden-cities and incredible stone sculptures.", SI: "ශ්‍රී ලංකාවේ දෙවන පැරණිතම රාජධානිය වන පොළොන්නරුව, උද්‍යාන නගරවල ශේෂයන් සහ විස්මිත ගල් කැටයම් වලින් සමන්විත වේ." }, shortStory: { EN: "Where stone tells the story of an empire.", SI: "ගල් කැටයම් අධිරාජ්‍යයක කතාව පවසන තැන." }, bestTime: { EN: "July to September", SI: "ජූලි සිට සැප්තැම්බර් දක්වා" }, tips: [{ EN: "Rent a bicycle to explore the massive ruins.", SI: "නටබුන් නැරඹීමට බයිසිකලයක් කුලියට ගන්න." }], location: "Polonnaruwa District" },
  { id: "anuradhapura", name: { EN: "Sacred City of Anuradhapura", SI: "අනුරාධපුර පූජනීය නගරය" }, category: "ancient", image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80"], history: { EN: "The first capital and a beacon of Buddhist civilization for over a millennium.", SI: "වසර දහසකට වැඩි කාලයක් බෞද්ධ ශිෂ්ටාචාරයේ කේන්ද්‍රස්ථානය වූ ප්‍රථම අගනුවරයි." }, shortStory: { EN: "The heart of Sri Lanka's spiritual history.", SI: "ශ්‍රී ලංකාවේ ආධ්‍යාත්මික ඉතිහාසයේ හදවත." }, bestTime: { EN: "January to May", SI: "ජනවාරි සිට මැයි දක්වා" }, tips: [{ EN: "Remove shoes and hats when entering temples.", SI: "පන්සල් වලට ඇතුළු වන විට සපත්තු සහ තොප්පි ගලවන්න." }], location: "Anuradhapura District" },
  { id: "yala", name: { EN: "Yala National Park", SI: "යාල ජාතික උද්‍යානය" }, category: "wildlife", image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"], history: { EN: "Sri Lanka's most famous park, boasting the highest leopard density in the world.", SI: "ලොව වැඩිම දිවි ඝනත්වයක් සහිත ශ්‍රී ලංකාවේ වඩාත් ප්‍රසිද්ධ ජාතික උද්‍යානයයි." }, shortStory: { EN: "Home of the spotted king.", SI: "දිවි රජුගේ නිවහන." }, bestTime: { EN: "February to June", SI: "පෙබරවාරි සිට ජූනි දක්වා" }, tips: [{ EN: "Enter at dawn for the best chance to spot a leopard.", SI: "දිවියන් දැකීමට උදෑසනම උද්‍යානයට ඇතුළු වන්න." }], location: "Hambantota District" },
  { id: "kumana", name: { EN: "Kumana Bird Sanctuary", SI: "කුමන පක්ෂි අභයභූමිය" }, category: "wildlife", image: "https://images.unsplash.com/photo-1549414002-36365a6b0933?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1549414002-36365a6b0933?auto=format&fit=crop&w=1200&q=80"], history: { EN: "Renowned for its avifauna, especially the large flocks of migratory waterfowl.", SI: "විශේෂයෙන්ම සංක්‍රමණික පක්ෂීන් සඳහා ප්‍රසිද්ධ දිවයිනේ සුවිශේෂී පක්ෂි රක්ෂිතයකි." }, shortStory: { EN: "A paradise for bird watchers.", SI: "පක්ෂි නිරීක්ෂකයින්ගේ පාරාදීසයකි." }, bestTime: { EN: "April to July", SI: "අප්‍රේල් සිට ජූලි දක්වා" }, tips: [{ EN: "Bring a pair of high-quality binoculars.", SI: "උසස් තත්ත්වයේ බිනෝකුලර් යුවලක් රැගෙන එන්න." }], location: "Ampara District" },
  { id: "wasgamuwa", name: { EN: "Wasgamuwa National Park", SI: "වස්ගමුව ජාතික උද්‍යානය" }, category: "wildlife", image: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80"], history: { EN: "Known for its large herds of Sri Lankan elephants and ancient ruins hidden in the bush.", SI: "විශාල අලි රංචු සහ වනාන්තරය මැද සැඟවුණු පැරණි නටබුන් සඳහා ප්‍රසිද්ධය." }, shortStory: { EN: "Untouched wilderness in the heartland.", SI: "මැද රට පිහිටි ස්වභාවික වන පියසකි." }, bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" }, tips: [{ EN: "Quiet vehicles increase sighting chances.", SI: "සන්සුන්ව ගමන් කිරීම සතුන් දැකීමට ඇති ඉඩකඩ වැඩි කරයි." }], location: "Matale/Polonnaruwa" },
  { id: "ella", name: { EN: "Ella Highlands", SI: "ඇල්ල කඳුකරය" }, category: "mountains", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80"], history: { EN: "A mountain town famous for its iconic Nine Arch Bridge and breathtaking hiking trails.", SI: "ඓතිහාසික ආරුක්කු නවය පාලම සහ මනරම් කඳු තරණ මාවත් නිසා ප්‍රසිද්ධ කඳුකර නගරයකි." }, shortStory: { EN: "The soul of the tea country.", SI: "තේ කලාපයේ ආත්මය." }, bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" }, tips: [{ EN: "Don't miss the sunrise from Little Adam's Peak.", SI: "පුංචි ශ්‍රී පාදයේ සිට හිරු උදාව නැරඹීමට අමතක නොකරන්න." }], location: "Badulla District" },
  { id: "mirissa-beach", name: { EN: "Mirissa Beach", SI: "මිරිස්ස වෙරළ" }, category: "beach", image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"], history: { EN: "Mirissa is famous for its crescent beach and whale watching spots.", SI: "මිරිස්ස එහි අඩසඳ හැඩැති වෙරළ සහ තල්මසුන් නැරඹීමේ ස්ථාන සඳහා ප්‍රසිද්ධය." }, shortStory: { EN: "Turquoise waters and legendary sunsets.", SI: "නිල්වන් සාගරය සහ අලංකාර හිරු බැස යාම්." }, bestTime: { EN: "November to April", SI: "නොවැම්බර් සිට අප්‍රේල් දක්වා" }, tips: [{ EN: "Visit Coconut Tree Hill for the best photos.", SI: "හොඳම ඡායාරූප සඳහා පොල් ගස් කන්දට යන්න." }], location: "Matara District" }
];

export const FESTIVALS_DATA: Festival[] = [
  { id: "fest-1", name: { EN: "Vesak Festival", SI: "වෙසක් උත්සවය" }, date: { EN: "May (Full Moon)", SI: "මැයි (පුර පසළොස්වක)" }, description: { EN: "Commemorating the birth, enlightenment, and passing of Lord Buddha with lights and lanterns.", SI: "බුදුරජාණන් වහන්සේගේ තෙමඟුල සැමරීම සඳහා පහන් සහ තොරණින් සැරසෙන උත්සවයකි." }, image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80", significance: { EN: "The most important Buddhist festival in the island.", SI: "දිවයිනේ වැදගත්ම බෞද්ධ උත්සවයයි." } },
  { id: "fest-2", name: { EN: "Kandy Esala Perahera", SI: "මහනුවර ඇසළ පෙරහැර" }, date: { EN: "July / August", SI: "ජූලි / අගෝස්තු" }, description: { EN: "A grand procession featuring elephants and dancers to honor the Sacred Tooth Relic.", SI: "දන්ත ධාතූන් වහන්සේ උදෙසා පවත්වන ලොව විචිත්‍රවත්ම පෙරහැරකි." }, image: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80", significance: { EN: "One of the oldest and grandest festivals in Asia.", SI: "ආසියාවේ පැරණිතම සහ විශාලතම උත්සවයකි." } },
  { id: "fest-3", name: { EN: "Sinhala & Tamil New Year", SI: "සිංහල හා දෙමළ අලුත් අවුරුද්ද" }, date: { EN: "April 13-14", SI: "අප්‍රේල් 13-14" }, description: { EN: "A major harvest festival celebrated with traditional games, food, and rituals.", SI: "සාම්ප්‍රදායික ක්‍රීඩා, ආහාර සහ චාරිත්‍ර වාරිත්‍ර සමඟ සමරනු ලබන සංස්කෘතික උත්සවයයි." }, image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Symbolizes national unity and the end of the harvest season.", SI: "ජාතික සමගිය සහ අස්වනු නෙලීමේ කාලය අවසන් වීම සංකේතවත් කරයි." } }
];

export const TRAVEL_ESSENTIALS_DATA: TravelEssential[] = [
  { id: "e1", title: { EN: "Visa & Entry", SI: "වීසා සහ ඇතුල්වීම" }, description: { EN: "Ensure you have the correct Electronic Travel Authorization (ETA).", SI: "ඔබට නිවැරදි විද්‍යුත් සංචාරක අවසර පත්‍රය (ETA) ඇති බව තහවුරු කරගන්න." }, icon: "ShieldCheck", tips: [{ EN: "Apply online via the official portal.", SI: "නිල වෙබ් අඩවිය හරහා අයදුම් කරන්න." }, { EN: "Keep a digital copy of your return ticket.", SI: "ඔබගේ ආපසු යාමේ ගුවන් ටිකට් පතේ ඩිජිටල් පිටපතක් ළඟ තබා ගන්න." }] },
  { id: "e2", title: { EN: "Health & Safety", SI: "සෞඛ්‍යය සහ ආරක්ෂාව" }, description: { EN: "General health precautions for tropical travel.", SI: "නිවර්තන කලාපීය සංචාර සඳහා සාමාන්‍ය සෞඛ්‍ය උපදෙස්." }, icon: "Activity", tips: [{ EN: "Drink bottled or boiled water.", SI: "බෝතල් කළ හෝ උණු කළ ජලය පනය කරන්න." }, { EN: "Use mosquito repellent in forested areas.", SI: "වනගත ප්‍රදේශවලදී මදුරු විකර්ෂක භාවිතා කරන්න." }] }
];

export const FOODS_DATA: Food[] = [
  {
    id: "f1",
    name: { EN: "Sri Lankan Rice and Curry", SI: "ශ්‍රී ලාංකීය බත් සහ වෑංජන" },
    description: { EN: "The quintessential island meal, featuring rice served with a variety of spiced curries.", SI: "බත් සමඟ විවිධ කුළුබඩු සහිත වෑංජන රැසක් පිරිනමන දිවයිනේ ප්‍රධාන ආහාරය." },
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    spiciness: 4,
    ingredients: [{ EN: "Red Rice", SI: "රතු බත්" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }, { EN: "Turmeric", SI: "කහ" }],
    tasteProfile: { EN: "Spicy and Complex", SI: "සැර සහ විචිත්‍රවත්" }
  },
  {
    id: "f2",
    name: { EN: "Kottu Roti", SI: "කොත්තු රොටී" },
    description: { EN: "A popular street food made by chopping roti with vegetables, egg, and meat.", SI: "රොටී, එළවළු, බිත්තර සහ මස් සමඟ මිශ්‍ර කර සාදන ජනප්‍රිය වීදි ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=800&q=80",
    spiciness: 5,
    ingredients: [{ EN: "Godhamba Roti", SI: "ගෝදම්බ රොටී" }, { EN: "Spices", SI: "කුළුබඩු" }, { EN: "Vegetables", SI: "එළවළු" }],
    tasteProfile: { EN: "Savory and Spicy", SI: "රසවත් සහ සැර" }
  },
  {
    id: "f3",
    name: { EN: "Hoppers (Appa)", SI: "ආප්ප" },
    description: { EN: "Bowl-shaped pancakes made from fermented rice flour and coconut milk.", SI: "පසින්න ලද සහල් පිටි සහ පොල් කිරි වලින් සාදන ලද බඳුනක හැඩැති ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=800&q=80",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }, { EN: "Yeast", SI: "ඊස්ට්" }],
    tasteProfile: { EN: "Crispy and Creamy", SI: "මොරමොර ගාන සහ මෘදු" }
  }
];

export const TEA_DATA: TeaExperience[] = [
  {
    id: "tea1",
    name: { EN: "Ceylon Black Tea", SI: "ලංකා කළු තේ" },
    description: { EN: "World-famous tea known for its crisp, bold flavor.", SI: "එහි ප්‍රබල රසය සඳහා ලොව පුරා ප්‍රසිද්ධ කළු තේ." },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    type: "variety",
    fact: { EN: "Sri Lanka is one of the largest tea exporters in the world.", SI: "ශ්‍රී ලංකාව ලොව විශාලතම තේ අපනයනකරුවන්ගෙන් එකකි." }
  },
  {
    id: "tea2",
    name: { EN: "Tea Plucking", SI: "තේ දලු නෙලීම" },
    description: { EN: "The traditional method of hand-picking 'two leaves and a bud'.", SI: "දලු දෙකයි එක මලයි පාරම්පරිකව අතින් නෙලීමේ ක්‍රමය." },
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    type: "process",
    fact: { EN: "Plucking is done early morning for the best quality.", SI: "හොඳම ගුණාත්මකභාවය සඳහා දලු නෙලීම උදෑසන කාලයේ සිදු කරයි." }
  }
];

export const PHRASEBOOK_DATA: Phrase[] = [
  { id: "p1", english: "Hello", sinhala: "ආයුබෝවන්", transliteration: "Ayubowan", category: "greeting" },
  { id: "p2", english: "Thank you", sinhala: "ස්තූතියි", transliteration: "Stutiyi", category: "greeting" },
  { id: "p3", english: "Yes", sinhala: "ඔව්", transliteration: "Ow", category: "greeting" },
  { id: "p4", english: "No", sinhala: "නැහැ", transliteration: "Nae", category: "greeting" }
];

export const HIKING_DATA: HikingSpot[] = [
  {
    id: "h1",
    name: { EN: "Adam's Peak (Sri Pada)", SI: "ශ්‍රී පාදය" },
    location: { EN: "Ratnapura", SI: "රත්නපුර" },
    difficulty: "Hard",
    duration: { EN: "5-7 Hours", SI: "පැය 5-7" },
    description: { EN: "A sacred mountain known for the 'Sri Pada' footprint at the summit.", SI: "මුදුනේ සිරිපතුල පිහිටි පූජනීය කන්දකි." },
    image: "https://images.unsplash.com/photo-1705730312722-095ca8123d48?auto=format&fit=crop&w=800&q=80",
    elevation: "2,243m"
  }
];
