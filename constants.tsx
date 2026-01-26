import { Destination, Food, HeritageMusic, TraditionalMedicine, TeaExperience, Phrase, TravelEssential, Festival, Translation, HikingSpot, Transport } from './types.ts';

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
  }
];

export const DESTINATIONS: Destination[] = [
  { id: "sigiriya", name: { EN: "Sigiriya Lion Rock", SI: "සීගිරිය සිංහගිරිය" }, category: "ancient", image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1920&q=80", gallery: ["https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80"], videoUrl: "https://www.youtube.com/shorts/j4ln2UNOnZk", history: { EN: "Sigiriya, the 'Lion Rock', is a UNESCO World Heritage site and one of the best-preserved examples of ancient urban planning.", SI: "සීගිරිය හෙවත් 'සිංහගිරිය' යනු යුනෙස්කෝ ලෝක උරුම අඩවියක් වන අතර පැරණි නගර නිර්මාණකරණයේ විශිෂ්ටතම නිදසුනකි." }, shortStory: { EN: "The 8th Wonder of the World – A fortress in the sky.", SI: "ලොව අටවන පුදුමය - අහස උසට විහිදුණු බලකොටුවකි." }, bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" }, tips: [{ EN: "Climb early morning to avoid the heat.", SI: "රස්නය මග හැරීමට උදෑසන කාලයේ නැගීම ආරම්භ කරන්න." }], location: "Matale District" },
  { id: "polonnaruwa", name: { EN: "Ancient City of Polonnaruwa", SI: "පොළොන්නරුව පැරණි නගරය" }, category: "ancient", image: "https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80"], history: { EN: "The second most ancient kingdom of Sri Lanka, Polonnaruwa features remains of garden-cities and incredible stone sculptures.", SI: "ශ්‍රී ලංකාවේ දෙවන පැරණිතම රාජධානිය වන පොළොන්නරුව, උද්‍යාන නගරවල ශේෂයන් සහ විස්මිත ගල් කැටයම් වලින් සමන්විත වේ." }, shortStory: { EN: "Where stone tells the story of an empire.", SI: "ගල් කැටයම් අධිරාජ්‍යයක කතාව පවසන තැන." }, bestTime: { EN: "July to September", SI: "ජූලි සිට සැප්තැම්බර් දක්වා" }, tips: [{ EN: "Rent a bicycle to explore the massive ruins.", SI: "නටබුන් නැරඹීමට බයිසිකලයක් කුලියට ගන්න." }], location: "Polonnaruwa District" },
  { id: "ella", name: { EN: "Nine Arch Bridge", SI: "ආරුක්කු නවය පාලම" }, category: "mountains", image: "https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80"], history: { EN: "A colonial-era masterpiece, this bridge was built entirely out of rock, bricks, and cement without a single piece of steel.", SI: "යටත් විජිත යුගයේ අගනා නිර්මාණයක් වන මෙම පාලම කිසිදු වානේ කැබැල්ලක් භාවිතා නොකර ගල්, ගඩොල් සහ සිමෙන්ති වලින් පමණක් නිමවා ඇත." }, shortStory: { EN: "The bridge in the sky where time slows down.", SI: "කාලය සෙමින් ගෙවෙන අහස උසට බැඳි පාලම." }, bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" }, tips: [{ EN: "Check the train schedule for the perfect photo op.", SI: "ඡායාරූපයක් ගැනීමට සුදුසුම වේලාව දැන ගැනීමට දුම්රිය කාලසටහන පරීක්ෂා කරන්න." }], location: "Badulla District" }
];

export const HIKING_DATA: HikingSpot[] = [
  { id: "h1", name: { EN: "Adam's Peak (Sri Pada)", SI: "ශ්‍රී පාදය" }, location: { EN: "Ratnapura", SI: "රත්නපුර" }, difficulty: "Hard", duration: { EN: "5-7 Hours", SI: "පැය 5-7" }, description: { EN: "A sacred mountain known for the 'Sri Pada' footprint at the summit.", SI: "මුදුනේ සිරිපතුල පිහිටි පූජනීය කන්දකි." }, image: "https://images.unsplash.com/photo-1705730312722-095ca8123d48?auto=format&fit=crop&w=800&q=80", elevation: "2,243m" },
  { id: "h2", name: { EN: "Ella Rock", SI: "ඇල්ල රොක්" }, location: { EN: "Ella", SI: "ඇල්ල" }, difficulty: "Moderate", duration: { EN: "3-4 Hours", SI: "පැය 3-4" }, description: { EN: "Panoramic views of the Ella Gap and tea estates.", SI: "ඇල්ල දුර්ගයේ අලංකාර දර්ශනයක් දැකගත හැක." }, image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80", elevation: "1,141m" },
  { id: "h3", name: { EN: "Wangedigala", SI: "වන්ගෙඩිගල" }, location: { EN: "Belihuloya", SI: "බෙලිහුල්ඔය" }, difficulty: "Challenging", duration: { EN: "4-5 Hours", SI: "පැය 4-5" }, description: { EN: "A sharp peak offering vertical views of the Samanalawewa reservoir.", SI: "සමනලවැව ජලාශයේ දර්ශන සහිත උස් කඳු මුදුනකි." }, image: "https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=800&q=80", elevation: "1,400m" },
  { id: "h4", name: { EN: "Kirigalpoththa", SI: "කිරිගල්පොත්ත" }, location: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" }, difficulty: "Hard", duration: { EN: "6-8 Hours", SI: "පැය 6-8" }, description: { EN: "The 2nd highest peak in Sri Lanka, traversing through dense pygmy forests.", SI: "ලංකාවේ දෙවන උසම කන්දයි, වනාන්තර මැදින් දිවෙන මාවතකි." }, image: "https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=800&q=80", elevation: "2,388m" },
  { id: "h5", name: { EN: "Great Western", SI: "ග්‍රේට් වෙස්ටර්න්" }, location: { EN: "Talawakele", SI: "තලවකැලේ" }, difficulty: "Challenging", duration: { EN: "5-6 Hours", SI: "පැය 5-6" }, description: { EN: "A railway-adjacent peak with breathtaking drops and constant mist.", SI: "දුම්රිය මාර්ගයට යාබදව පිහිටි මීදුම සහිත කඳු මුදුනකි." }, image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80", elevation: "2,212m" },
  { id: "h6", name: { EN: "Manigala", SI: "මානිගල" }, location: { EN: "Knuckles Range", SI: "නකල්ස්" }, difficulty: "Moderate", duration: { EN: "4-5 Hours", SI: "පැය 4-5" }, description: { EN: "An iconic flat-topped mountain in the heart of the Knuckles forest.", SI: "නකල්ස් වනාන්තරයේ හදවතේ පිහිටි පැතලි කඳු මුදුනකි." }, image: "https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=800&q=80", elevation: "1,100m" },
  { id: "h7", name: { EN: "Bambarakanda Path", SI: "බඹරකන්ද මාවත" }, location: { EN: "Kalupahana", SI: "කළුපහන" }, difficulty: "Easy", duration: { EN: "2 Hours", SI: "පැය 2" }, description: { EN: "A scenic walk to the base of the tallest waterfall in Sri Lanka.", SI: "ලංකාවේ උසම දිය ඇල්ල පාමුලට යන අලංකාර මාවතකි." }, image: "https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=800&q=80", elevation: "1,200m" },
  { id: "h8", name: { EN: "Mini World's End", SI: "පුංචි ලෝකාන්තය" }, location: { EN: "Haputale", SI: "හපුතලේ" }, difficulty: "Easy", duration: { EN: "1-2 Hours", SI: "පැය 1-2" }, description: { EN: "Eagle-eye views of the southern plains of the island.", SI: "දිවයිනේ දකුණු තැන්න නිරීක්ෂණය කළ හැකි ස්ථානයකි." }, image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80", elevation: "1,100m" },
  { id: "h9", name: { EN: "Thotupola Kanda", SI: "තොටුපොළ කන්ද" }, location: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" }, difficulty: "Easy", duration: { EN: "2 Hours", SI: "පැය 2" }, description: { EN: "An easy trek to the 3rd highest peak with massive biodiversity.", SI: "ජෛව විවිධත්වයෙන් පිරි ලංකාවේ තෙවන උසම කන්දට යන පහසු මාවතකි." }, image: "https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=800&q=80", elevation: "2,357m" },
  { id: "h10", name: { EN: "Kabaragala", SI: "කබරගල" }, location: { EN: "Nawalapitiya", SI: "නාවලපිටිය" }, difficulty: "Moderate", duration: { EN: "4 Hours", SI: "පැය 4" }, description: { EN: "The highest peak of the Dolosbage range with a vertical drop.", SI: "දොළොස්බාගේ කඳු පන්තියේ උසම කඳු මුදුනයි." }, image: "https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=800&q=80", elevation: "1,500m" },
  { id: "h11", name: { EN: "The Pekoe Trail", SI: "පෙකෝ ට්‍රේල්" }, location: { EN: "Central Highlands", SI: "මධ්‍යම කඳුකරය" }, difficulty: "Moderate", duration: { EN: "Multiple Days", SI: "දින කිහිපයක්" }, description: { EN: "300km of interconnected tea trails through the heart of the hills.", SI: "කඳුකරය හරහා විහිදුණු කිලෝමීටර් 300 ක තේ මාවත් පද්ධතියකි." }, image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80", elevation: "Variable" },
  { id: "h12", name: { EN: "Udawatte Kele", SI: "උඩවත්ත කැලේ" }, location: { EN: "Kandy", SI: "මහනුවර" }, difficulty: "Easy", duration: { EN: "2-3 Hours", SI: "පැය 2-3" }, description: { EN: "A historic forest sanctuary adjacent to the Temple of the Tooth.", SI: "දන්ත ධාතූන් වහන්සේට යාබදව පිහිටි ඓතිහාසික වන රක්ෂිතයකි." }, image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=800&q=80", elevation: "600m" }
];

export const FESTIVALS_DATA: Festival[] = [
  { id: "fest-1", name: { EN: "Vesak Festival", SI: "වෙසක් උත්සවය" }, date: { EN: "May (Full Moon)", SI: "මැයි (පුර පසළොස්වක)" }, description: { EN: "Commemorating the birth, enlightenment, and passing of Lord Buddha.", SI: "බුදුරජාණන් වහන්සේගේ තෙමඟුල සැමරීම." }, image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Lights and lanterns across the island.", SI: "දිවයින පුරා පහන් සහ තොරණින් සැරසීම." } },
  { id: "fest-2", name: { EN: "Thai Pongal", SI: "තායි පොංගල්" }, date: { EN: "January", SI: "ජනවාරි" }, description: { EN: "A Tamil harvest festival dedicated to the Sun God.", SI: "සූර්ය දෙවියන් උදෙසා පවත්වන දෙමළ අස්වනු උත්සවය." }, image: "https://images.unsplash.com/photo-1610475306385-d6023d6a9a08?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Celebration of agricultural prosperity.", SI: "කෘෂිකාර්මික සශ්‍රීකත්වය සැමරීම." } },
  { id: "fest-3", name: { EN: "Maha Shivaratri", SI: "මහා ශිවරාත්‍රී" }, date: { EN: "Feb/March", SI: "පෙබ/මාර්තු" }, description: { EN: "The grand night of Lord Shiva observed by Hindu devotees.", SI: "ශිව දෙවියන් උදෙසා හින්දු බැතිමතුන් පවත්වන උත්සවය." }, image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Vigil and prayer across Hindu temples.", SI: "හින්දු කෝවිල්වල පවත්වන ආගමික වතාවත්." } },
  { id: "fest-4", name: { EN: "Kataragama Esala", SI: "කතරගම ඇසළ උත්සවය" }, date: { EN: "July", SI: "ජූලි" }, description: { EN: "A multi-faith pilgrimage featuring fire-walking rituals.", SI: "ගිනි පෑගීමේ චාරිත්‍ර සහිත සුවිශේෂී ආගමික උත්සවය." }, image: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Symbol of religious harmony.", SI: "ආගමික සහජීවනයේ සංකේතයකි." } },
  { id: "fest-5", name: { EN: "Nallur Festival", SI: "නල්ලූර් උත්සවය" }, date: { EN: "August", SI: "අගෝස්තු" }, description: { EN: "25-day festival at the Nallur Kandaswamy Kovil in Jaffna.", SI: "යාපනය නල්ලූර් කෝවිලේ පැවැත්වෙන දින 25 ක උත්සවය." }, image: "https://images.unsplash.com/photo-1700315303907-5b222bb8bb47?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Longest religious festival in the North.", SI: "උතුරේ පවත්වන දීර්ඝතම ආගමික උත්සවය." } },
  { id: "fest-6", name: { EN: "Poson Poya", SI: "පොසොන් පෝය" }, date: { EN: "June", SI: "ජූනි" }, description: { EN: "Arrival of Buddhism to Sri Lanka, centered in Mihintale.", SI: "මිහින්තලය කේන්ද්‍ර කරගනිමින් බුදුදහම පැමිණීම සැමරීම." }, image: "https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Establishment of Buddhist civilization.", SI: "බෞද්ධ ශිෂ්ටාචාරය ස්ථාපිත වීම." } },
  { id: "fest-7", name: { EN: "Deepavali", SI: "දීපාවලී" }, date: { EN: "Oct/Nov", SI: "ඔක්/නොවැ" }, description: { EN: "The festival of lights symbolizing victory over darkness.", SI: "අඳුර පරදා ආලෝකය ජය ගැනීම සැමරෙන පහන් උත්සවය." }, image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Spiritual renewal and celebration.", SI: "ආධ්‍යාත්මික පිබිදීම සහ සැමරුම." } },
  { id: "fest-8", name: { EN: "Madhu Feast", SI: "මඩු මංගල්‍යය" }, date: { EN: "August", SI: "අගෝස්තු" }, description: { EN: "Massive Catholic pilgrimage to the Shrine of Our Lady of Madhu.", SI: "මන්නාරම මඩු පල්ලිය වෙත සිදුකරන කතෝලික වන්දනාව." }, image: "https://images.unsplash.com/photo-1548310504-94676106c59b?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Ancient site of refuge and healing.", SI: "සහනය සහ සුවය ලබා දෙන පෞරාණික ස්ථානයක්." } },
  { id: "fest-9", name: { EN: "Navam Perahera", SI: "නැවැම් පෙරහැර" }, date: { EN: "February", SI: "පෙබරවාරි" }, description: { EN: "A grand street pageant in Colombo by Gangaramaya Temple.", SI: "ගංගාරාම විහාරස්ථානය මඟින් කොළඹ පවත්වන වීදි පෙරහැර." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Highlight of Colombo cultural calendar.", SI: "කොළඹ සංස්කෘතික දින දර්ශනයේ සුවිශේෂී අංගයකි." } },
  { id: "fest-10", name: { EN: "Duruthu Perahera", SI: "දුරුතු පෙරහැර" }, date: { EN: "January", SI: "ජනවාරි" }, description: { EN: "Celebrating Lord Buddha's first visit to Sri Lanka at Kelaniya.", SI: "කැලණිය විහාරයේදී බුදුරජාණන් වහන්සේගේ ප්‍රථම ලංකාගමනය සැමරීම." }, image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Historical start of the year's processions.", SI: "වසරේ පෙරහැර මංගල්‍යයන්හි ඓතිහාසික ආරම්භය." } }
];

export const PHRASEBOOK_DATA: Phrase[] = [
  { id: "p1", english: "Hello / Ayubowan", sinhala: "ආයුබෝවන්", transliteration: "Ayubowan", category: "greeting" },
  { id: "p2", english: "Thank you", sinhala: "ස්තූතියි", transliteration: "Stutiyi", category: "greeting" },
  { id: "p3", english: "How are you?", sinhala: "කොහොමද?", transliteration: "Kohomada?", category: "greeting" },
  { id: "p4", english: "I am fine", sinhala: "මම හොඳින් ඉන්නවා", transliteration: "Mama hondin innawa", category: "greeting" },
  { id: "p5", english: "What is your name?", sinhala: "ඔයාගෙ නම මොකක්ද?", transliteration: "Oyage nama mokakda?", category: "greeting" },
  { id: "p6", english: "Nice to meet you", sinhala: "හමුවීම සතුටක්", transliteration: "Hamuveema sathutak", category: "greeting" },
  { id: "p7", english: "Goodbye", sinhala: "ගිහින් එන්නම්", transliteration: "Gihin ennam", category: "greeting" },
  { id: "p8", english: "Yes", sinhala: "ඔව්", transliteration: "Ow", category: "greeting" },
  { id: "p9", english: "No", sinhala: "නැහැ", transliteration: "Nae", category: "greeting" },
  { id: "p10", english: "Excuse me", sinhala: "සමාවෙන්න", transliteration: "Samavenna", category: "greeting" },
  { id: "p11", english: "Where is the bathroom?", sinhala: "වැසිකිළිය කොහේද?", transliteration: "Vasikiliya koheda?", category: "emergency" },
  { id: "p12", english: "Help me", sinhala: "මට උදව් කරන්න", transliteration: "Mata udavu karanna", category: "emergency" },
  { id: "p13", english: "I am lost", sinhala: "මම අතරමං වෙලා", transliteration: "Mama atharaman vela", category: "emergency" },
  { id: "p14", english: "Stop here, please", sinhala: "මෙතන නවත්තන්න", transliteration: "Methana navatthanna", category: "shopping" },
  { id: "p15", english: "How much?", sinhala: "කීයද?", transliteration: "Keeyada?", category: "shopping" },
  { id: "p16", english: "Too expensive", sinhala: "ගණන් වැඩියි", transliteration: "Ganan vadiyi", category: "shopping" },
  { id: "p17", english: "Water", sinhala: "වතුර", transliteration: "Vathura", category: "dining" },
  { id: "p18", english: "Tea", sinhala: "තේ", transliteration: "Thae", category: "dining" },
  { id: "p19", english: "Rice", sinhala: "බත්", transliteration: "Bath", category: "dining" },
  { id: "p20", english: "Delicious", sinhala: "රසයි", transliteration: "Rasayi", category: "dining" },
  { id: "p21", english: "Wait a minute", sinhala: "විනාඩියක් ඉන්න", transliteration: "Vinadiyak inna", category: "greeting" },
  { id: "p22", english: "Can you help me?", sinhala: "මට උදව් කරන්න පුළුවන්ද?", transliteration: "Mata udavu karanna puluwanda?", category: "emergency" },
  { id: "p23", english: "I don't understand", sinhala: "මට තේරෙන්නේ නැහැ", transliteration: "Mata therenne nae", category: "greeting" },
  { id: "p24", english: "Do you speak English?", sinhala: "ඔයාට ඉංග්‍රීසි පුළුවන්ද?", transliteration: "Oyate Ingrisi puluwanda?", category: "greeting" },
  { id: "p25", english: "Slowly, please", sinhala: "හෙමින් කියන්න", transliteration: "Hemin kiyanna", category: "greeting" },
  { id: "p26", english: "I want this", sinhala: "මට මේක ඕන", transliteration: "Mata meka ona", category: "shopping" },
  { id: "p27", english: "Where is the station?", sinhala: "ස්ටේෂන් එක කොහේද?", transliteration: "Station eka koheda?", category: "emergency" },
  { id: "p28", english: "Straight ahead", sinhala: "කෙලින්ම යන්න", transliteration: "Kelinma yanna", category: "shopping" },
  { id: "p29", english: "Left", sinhala: "වම", transliteration: "Vama", category: "shopping" },
  { id: "p30", english: "Right", sinhala: "දකුණ", transliteration: "Dakuna", category: "shopping" },
  { id: "p31", english: "Bill, please", sinhala: "බිල දෙන්න", transliteration: "Bila denna", category: "dining" },
  { id: "p32", english: "Not spicy", sinhala: "සැර නැතුව", transliteration: "Sara nathuwa", category: "dining" },
  { id: "p33", english: "Very spicy", sinhala: "ගොඩක් සැරයි", transliteration: "Godak sarayi", category: "dining" },
  { id: "p34", english: "Vegetarian", sinhala: "නිර්මාංශ", transliteration: "Nirmansha", category: "dining" },
  { id: "p35", english: "Meat", sinhala: "මස්", transliteration: "Mas", category: "dining" },
  { id: "p36", english: "Fruit", sinhala: "පලතුරු", transliteration: "Palathuru", category: "dining" },
  { id: "p37", english: "Medicine", sinhala: "බේත්", transliteration: "Beth", category: "emergency" },
  { id: "p38", english: "Doctor", sinhala: "දොස්තර", transliteration: "Dosthara", category: "emergency" },
  { id: "p39", english: "Hospital", sinhala: "ඉස්පිරිතාලය", transliteration: "Ispirithalaya", category: "emergency" },
  { id: "p40", english: "Police", sinhala: "පොලිසිය", transliteration: "Polisiya", category: "emergency" },
  { id: "p41", english: "Danger", sinhala: "අනතුරක්", transliteration: "Anathurak", category: "emergency" },
  { id: "p42", english: "Today", sinhala: "අද", transliteration: "Ada", category: "greeting" },
  { id: "p43", english: "Tomorrow", sinhala: "හෙට", transliteration: "Heta", category: "greeting" },
  { id: "p44", english: "Yesterday", sinhala: "ඊයේ", transliteration: "Iye", category: "greeting" },
  { id: "p45", english: "What is this?", sinhala: "මේ මොකක්ද?", transliteration: "Me mokakda?", category: "shopping" },
  { id: "p46", english: "I like it", sinhala: "මම මේකට කැමතියි", transliteration: "Mama mekata kamathiyi", category: "shopping" },
  { id: "p47", english: "Beautiful", sinhala: "ලස්සනයි", transliteration: "Lassanayi", category: "greeting" },
  { id: "p48", english: "Hot (weather)", sinhala: "රස්නෙයි", transliteration: "Rasneyi", category: "greeting" },
  { id: "p49", english: "Cold", sinhala: "සීතලයි", transliteration: "Seethalayi", category: "greeting" },
  { id: "p50", english: "Good luck", sinhala: "සුභ පැතුම්", transliteration: "Subha pathum", category: "greeting" }
];

export const FOODS_DATA: Food[] = [
  {
    id: "f1",
    name: { EN: "Rice and Curry", SI: "බත් සහ වෑංජන" },
    description: { EN: "The staple meal of the island, featuring a symphony of local curries.", SI: "දිවයිනේ ප්‍රධාන ආහාර වේල." },
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    spiciness: 4,
    ingredients: [{ EN: "Rice", SI: "බත්" }, { EN: "Coconut", SI: "පොල්" }, { EN: "Spices", SI: "කුළුබඩු" }],
    tasteProfile: { EN: "Spicy & Savory", SI: "සැර සහ රසවත්" }
  },
  {
    id: "f2",
    name: { EN: "Kottu Roti", SI: "කොත්තු රොටි" },
    description: { EN: "Street food masterpiece made from shredded flatbread and spices.", SI: "කැබලි කළ රොටි සහ කුළුබඩු මිශ්‍ර ජනප්‍රිය ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=800&q=80",
    spiciness: 5,
    ingredients: [{ EN: "Godamba Roti", SI: "ගොඩම්බා රොටි" }, { EN: "Veggies", SI: "එළවළු" }, { EN: "Meat", SI: "මස්" }],
    tasteProfile: { EN: "Fiery Street Taste", SI: "අධික සැර" }
  },
  {
    id: "f3",
    name: { EN: "Hoppers (Appa)", SI: "ආප්ප" },
    description: { EN: "Bowl-shaped savory pancakes with a soft center and crispy edges.", SI: "මැද මෘදු සහ දාරය කරකුට්ටු වූ පෑන්කේක් වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Creamy & Light", SI: "මෘදු සහ රසවත්" }
  },
  {
    id: "f4",
    name: { EN: "String Hoppers (Idiyappa)", SI: "ඉඳිආප්ප" },
    description: { EN: "Steamed circles of rice flour noodles, perfect with dhal curry.", SI: "හුමාලයෙන් තැම්බූ සහල් පිටි නූඩ්ල්ස්." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=800&q=80",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Water", SI: "වතුර" }],
    tasteProfile: { EN: "Mild & Soft", SI: "මෘදු" }
  },
  {
    id: "f5",
    name: { EN: "Pol Sambol", SI: "පොල් සම්බෝල" },
    description: { EN: "Fresh coconut relish with chili, lime, and onions.", SI: "අලුත් පොල්, මිරිස් සහ දෙහි මිශ්‍රිත සම්බෝලයකි." },
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    spiciness: 5,
    ingredients: [{ EN: "Coconut", SI: "පොල්" }, { EN: "Chili", SI: "මිරිස්" }, { EN: "Lime", SI: "දෙහි" }],
    tasteProfile: { EN: "Zesty & Spicy", SI: "නැවුම් සහ සැර" }
  },
  {
    id: "f6",
    name: { EN: "Fish Ambul Thiyal", SI: "මාළු ඇඹුල් තියල්" },
    description: { EN: "Sour and dry fish curry using black pepper and dried goraka.", SI: "ගොරකා සහ ගම්මිරිස් මිශ්‍ර මාළු වෑංජනයකි." },
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    spiciness: 4,
    ingredients: [{ EN: "Tuna Fish", SI: "කෙලවල්ලා" }, { EN: "Goraka", SI: "ගොරකා" }, { EN: "Pepper", SI: "ගම්මිරිස්" }],
    tasteProfile: { EN: "Sour & Peppery", SI: "ඇඹුල් සහ සැර" }
  },
  {
    id: "f7",
    name: { EN: "Wambatu Moju", SI: "වම්බටු මෝජු" },
    description: { EN: "Deep-fried eggplant pickle, sweet, sour, and savory.", SI: "බැදපු වම්බටු අච්චාරුවක් වැනි ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    spiciness: 2,
    ingredients: [{ EN: "Eggplant", SI: "වම්බටු" }, { EN: "Sugar", SI: "සීනි" }, { EN: "Vinegar", SI: "විනාකිරි" }],
    tasteProfile: { EN: "Sweet & Tangy", SI: "පැණි සහ ඇඹුල්" }
  },
  {
    id: "f8",
    name: { EN: "Polos Curry", SI: "පොළොස් ඇඹුල" },
    description: { EN: "Young jackfruit curry with a texture similar to meat.", SI: "මස් වැනි රසයක් ඇති ලපටි කොස් වෑංජනයකි." },
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    spiciness: 4,
    ingredients: [{ EN: "Young Jackfruit", SI: "ලපටි කොස්" }, { EN: "Roasted Curry Powder", SI: "බැදපු තුනපහ" }],
    tasteProfile: { EN: "Rich & Earthy", SI: "තද ගතියක් ඇති" }
  },
  {
    id: "f9",
    name: { EN: "Lamprais", SI: "ලම්ප්‍රයිස්" },
    description: { EN: "Dutch Burgher heritage rice and meat parcels wrapped in banana leaf.", SI: "කෙසෙල් කොළයේ එතූ ලන්දේසි උරුමය සහිත බත් වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    spiciness: 3,
    ingredients: [{ EN: "Basmati Rice", SI: "බත්" }, { EN: "Mixed Meat", SI: "මස් මිශ්‍රණය" }, { EN: "Shrimp Paste", SI: "බෙලි" }],
    tasteProfile: { EN: "Aromatic & Complex", SI: "සුවඳවත්" }
  },
  {
    id: "f10",
    name: { EN: "Kiribath", SI: "කිරිබත්" },
    description: { EN: "Traditional milk rice essential for celebrations and New Year.", SI: "මංගල අවස්ථාවන්හි අනිවාර්ය කිරි බත්." },
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    spiciness: 1,
    ingredients: [{ EN: "Rice", SI: "බත්" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Creamy & Milky", SI: "කිරි රස" }
  },
  {
    id: "f11",
    name: { EN: "Pittu", SI: "පිට්ටු" },
    description: { EN: "Steamed cylinders of ground rice and shredded coconut.", SI: "සහල් පිටි සහ පොල් මිශ්‍ර හුමාලයෙන් පිසූ ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=800&q=80",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Coconut", SI: "පොල්" }],
    tasteProfile: { EN: "Dry & Coconutty", SI: "පොල් රස" }
  },
  {
    id: "f12",
    name: { EN: "Wood Apple Juice", SI: "දිවුල් යුෂ" },
    description: { EN: "A unique tropical fruit smoothie with a sweet and sour kick.", SI: "දිවුල් පලතුරෙන් සාදන සුවිශේෂී පානයකි." },
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80",
    spiciness: 1,
    ingredients: [{ EN: "Wood Apple", SI: "දිවුල්" }, { EN: "Jaggery", SI: "හකුරු" }],
    tasteProfile: { EN: "Tart & Sweet", SI: "ඇඹුල් සහ පැණි" }
  },
  {
    id: "f13",
    name: { EN: "Curd and Treacle", SI: "මුදවපු කිරි සහ පැණි" },
    description: { EN: "Creamy buffalo curd topped with golden kitul palm treacle.", SI: "මුදවපු මීකිරි සහ කිතුල් පැණි සහිත අතුරුපසකි." },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    spiciness: 1,
    ingredients: [{ EN: "Buffalo Milk", SI: "මී කිරි" }, { EN: "Kitul Treacle", SI: "කිතුල් පැණි" }],
    tasteProfile: { EN: "Silky & Rich", SI: "මෘදු සහ පැණිරස" }
  },
  {
    id: "f14",
    name: { EN: "Kokis", SI: "කොකිස්" },
    description: { EN: "Deep-fried crispy heritage snacks made during festival seasons.", SI: "බැදපු කරකුට්ටු දේශීය රසකැවිල්ලකි." },
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=800&q=80",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Crispy & Light", SI: "කරකුට්ටු" }
  },
  {
    id: "f15",
    name: { EN: "Kavum", SI: "කැවුම්" },
    description: { EN: "Traditional oil cake with a distinctive top knot, flavored with treacle.", SI: "තෙලෙන් බදින ලද පැණි රසැති දේශීය කැවිලි වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1610475306385-d6023d6a9a08?auto=format&fit=crop&w=800&q=80",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Treacle", SI: "පැණි" }],
    tasteProfile: { EN: "Oily & Sweet", SI: "තෙල් සහිත සහ පැණි" }
  },
  {
    id: "f16",
    name: { EN: "Cashew Curry", SI: "කජු වෑංජනය" },
    description: { EN: "Creamy and rich curry made from fresh raw cashews.", SI: "නැවුම් කජු යොදා සාදන සුඛෝපභෝගී වෑංජනයකි." },
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    spiciness: 2,
    ingredients: [{ EN: "Raw Cashews", SI: "කජු" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Buttery & Nutty", SI: "කිරි රස" }
  },
  {
    id: "f17",
    name: { EN: "Isso Vadai", SI: "ඉස්සෝ වඩේ" },
    description: { EN: "Deep-fried lentil patties topped with whole fresh prawns.", SI: "ඉස්සන් සහිත පරිප්පු වඩේ, කොළඹ ගාලු මුවදොර ජනප්‍රියයි." },
    image: "https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=800&q=80",
    spiciness: 4,
    ingredients: [{ EN: "Lentils", SI: "පරිප්පු" }, { EN: "Prawns", SI: "ඉස්සන්" }],
    tasteProfile: { EN: "Crunchy & Spicy", SI: "සැර සහ කරකුට්ටු" }
  },
  {
    id: "f18",
    name: { EN: "Gotu Kola Sambol", SI: "ගොටුකොළ සම්බෝලය" },
    description: { EN: "Superfood pennywort salad with coconut and lime.", SI: "පොල් සහ දෙහි මිශ්‍ර සෞඛ්‍ය සම්පන්න ගොටුකොළ සලාදයකි." },
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    spiciness: 2,
    ingredients: [{ EN: "Gotu Kola", SI: "ගොටුකොළ" }, { EN: "Coconut", SI: "පොල්" }],
    tasteProfile: { EN: "Fresh & Grassy", SI: "නැවුම්" }
  },
  {
    id: "f19",
    name: { EN: "Kalu Dodol", SI: "කළු දොදොල්" },
    description: { EN: "Rich, dark, and sticky heritage sweet from the south.", SI: "දකුණේ ජනප්‍රිය තද පැහැති පැණි රස කැවිලි වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
    spiciness: 1,
    ingredients: [{ EN: "Kithul Jaggery", SI: "කිතුල් හකුරු" }, { EN: "Rice Flour", SI: "සහල් පිටි" }],
    tasteProfile: { EN: "Dark & Caramel", SI: "පැණිරස" }
  },
  {
    id: "f20",
    name: { EN: "Bibikkan", SI: "බිබික්කන්" },
    description: { EN: "Coconut cake with palm treacle, ginger, and spices.", SI: "පැණි, පොල් සහ කුළුබඩු මිශ්‍ර දේශීය කේක් වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    spiciness: 1,
    ingredients: [{ EN: "Coconut", SI: "පොල්" }, { EN: "Palm Jaggery", SI: "පැණි" }],
    tasteProfile: { EN: "Spiced & Fruity", SI: "පැණිරස" }
  },
  {
    id: "f21",
    name: { EN: "Parippu (Dhal Curry)", SI: "පරිප්පු වෑංජනය" },
    description: { EN: "The essential comfort food curry, creamy with coconut milk.", SI: "පොල් කිරි යොදා සාදන මෘදු පරිප්පු වෑංජනය." },
    image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=800&q=80",
    spiciness: 2,
    ingredients: [{ EN: "Red Lentils", SI: "පරිප්පු" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Mild & Creamy", SI: "මෘදු" }
  }
];

export const MEDICINE_DATA: TraditionalMedicine[] = [
  { id: "herb-1", type: "herb", name: { EN: "Neem", SI: "කොහොඹ" }, description: { EN: "Antiseptic properties.", SI: "විෂබීජ නාශක ගුණ." }, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Skin health.", SI: "සමේ සෞඛ්‍යය." }, usage: { EN: "Paste.", SI: "ආලේපනයක් ලෙස." } }
];

export const TEA_DATA: TeaExperience[] = [
  { id: "tea1", name: { EN: "Ceylon Black Tea", SI: "කළු තේ" }, description: { EN: "World famous.", SI: "ලොව සුප්‍රසිද්ධයි." }, image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80", type: "variety", fact: { EN: "Pure quality.", SI: "උසස් තත්ත්වයේ." } }
];

export const TRAVEL_ESSENTIALS_DATA: TravelEssential[] = [
  { id: "e1", title: { EN: "Visa", SI: "වීසා" }, description: { EN: "Apply online.", SI: "සබැඳිව අයදුම් කරන්න." }, icon: "ShieldCheck", tips: [{ EN: "Check passport validity.", SI: "වලංගු කාලය පරීක්ෂා කරන්න." }] }
];

export const CATEGORIES_DATA = [
  {
    id: 'hiking',
    icon: 'Mountain',
    title: { EN: 'Heritage Hiking', SI: 'උරුම කඳු තරණය' },
    description: { EN: 'Scale the cloud forests where kings once meditated.', SI: 'රජවරුන් භාවනා කළ මීදුමෙන් වැසුණු කඳු මුදුන් කරා.' }
  },
  {
    id: 'foods',
    icon: 'Utensils',
    title: { EN: 'Food Heritage', SI: 'ආහාර උරුමය' },
    description: { EN: 'Taste the ancient spices of an island civilization.', SI: 'දිවයිනේ පැරණි කුළුබඩු රසයෙන් පිරි ආහාර සංස්කෘතිය.' }
  },
  {
    id: 'music',
    icon: 'Music',
    title: { EN: 'Ancient Music', SI: 'පැරණි සංගීතය' },
    description: { EN: 'Listen to the rhythmic heartbeat of a nation.', SI: 'ජාතියක හදගැස්ම බඳු වූ පාරම්පරික රිද්මයන්.' }
  },
  {
    id: 'medicine',
    icon: 'Activity',
    title: { EN: 'Hela Wedakama', SI: 'හෙළ වෙදකම' },
    description: { EN: '5000 years of indigenous neural healing.', SI: 'වසර 5000 ක් පැරණි දේශීය සුව කිරීමේ ප්‍රඥාව.' }
  },
  {
    id: 'tea',
    icon: 'Sprout',
    title: { EN: 'Tea Culture', SI: 'තේ සංස්කෘතිය' },
    description: { EN: 'Discover the world of Ceylon tea.', SI: 'ලංකා තේ සංස්කෘතිය ගවේෂණය කරන්න.' }
  },
  {
    id: 'phrases',
    icon: 'MessageSquare',
    title: { EN: 'Local Language', SI: 'දේශීය භාෂාව' },
    description: { EN: 'Learn essential Sinhala phrases.', SI: 'මූලික සිංහල වාක්‍ය ඛණ්ඩ ඉගෙන ගන්න.' }
  },
  {
    id: 'essentials',
    icon: 'Backpack',
    title: { EN: 'Travel Guide', SI: 'සංචාරක උපදෙස්' },
    description: { EN: 'Practical tips for your journey.', SI: 'ඔබේ ගමනට ප්‍රායෝගික උපදෙස්.' }
  },
  {
    id: 'festivals',
    icon: 'PartyPopper',
    title: { EN: 'Festivals', SI: 'සංස්කෘතික උත්සව' },
    description: { EN: 'Join the celebrations of the island.', SI: 'දිවයිනේ උත්සව සැමරුම් සමඟ එක්වන්න.' }
  }
];

export const HERITAGE_MUSIC_DATA: HeritageMusic[] = [
  {
    id: 'm1',
    type: 'instrument',
    name: { EN: 'Geta Beraya', SI: 'ගැට බෙරය' },
    description: { EN: 'The traditional drum used in Kandyan dancing.', SI: 'උඩරට නැටුම් සඳහා භාවිතා කරන පාරම්පරික බෙරය.' },
    image: 'https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=800&q=80',
    origin: { EN: 'Hill Country', SI: 'කඳුකරය' },
    significance: { EN: 'Essential for spiritual ceremonies and national pageants.', SI: 'ආත්මික චාරිත්‍ර සහ ජාතික පෙරහැර සඳහා අත්‍යවශ්‍ය වේ.' }
  },
  {
    id: 'm2',
    type: 'song',
    name: { EN: 'Nelum Kavi', SI: 'නෙළුම් කවි' },
    description: { EN: 'Ancient folk songs sung during paddy cultivation.', SI: 'කුඹුරු ගොවිතැන් කරන කාලයේ ගයන ලද පැරණි ජන ගීත.' },
    image: 'https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=800&q=80',
    origin: { EN: 'Dry Zone', SI: 'වියළි කලාපය' },
    significance: { EN: 'Symbols of collective labor and agrarian prosperity.', SI: 'සමූහ ශ්‍රමය සහ කෘෂිකාර්මික සෞභාග්‍යයේ සංකේතයකි.' },
    sampleLyrics: { EN: 'When the sun rises over the lake...\nWe begin our dance with the soil.', SI: 'වැවට උඩින් හිරු උදා වන විට...\nපොළොව සමග අපි අපේ නැටුම අරඹන්නෙමු.' }
  }
];
