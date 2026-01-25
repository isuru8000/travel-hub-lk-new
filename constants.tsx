
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
  }
];

export const UI_STRINGS: Translation = {
  heroTitle: {
    EN: "Discover True Beauty of Sri Lanka",
    SI: "ශ්‍රී ලංකාවේ සැබෑ සුන්දරත්වය සොයා ගන්න"
  },
  exploreDestinations: {
    EN: "Explore Destinations",
    SI: "ගමනාන්ත ගවේෂණය කරන්න"
  },
  popularHighlightsTitle: {
    EN: "The Crown Jewels of Lanka",
    SI: "ලංකාවේ අභිමානවත් ස්ථාන"
  },
  popularHighlightsSubtitle: {
    EN: "Journey through the three most iconic landmarks that define our island's spirit.",
    SI: "අපගේ දිවයිනේ ජීවය නිරූපණය කරන සුවිශේෂී ස්ථාන තුනක් හරහා සංචාරය කරන්න."
  },
  planYourTrip: {
    EN: "Plan Your Trip",
    SI: "සංචාරය සැලසුම් කරන්න"
  },
  ancientHighlights: {
    EN: "Ancient Sri Lanka Highlights",
    SI: "පැරණි ශ්‍රී ලංකාවේ විශේෂිත ස්ථාන"
  },
  natureAdventure: {
    EN: "Nature & Adventure",
    SI: "සොබාදහම සහ වික්‍රමය"
  },
  travelMemories: {
    EN: "Travel Memories",
    SI: "සංචාරක මතකයන්"
  },
  lankaGuideTitle: {
    EN: "Lanka Guide AI",
    SI: "ලංකා ගයිඩ් AI"
  },
  searchPlaceholder: {
    EN: "Search destinations...",
    SI: "ගමනාන්ත සොයන්න..."
  },
  filterRegionLabel: {
    EN: "Filter by Region",
    SI: "කලාපය අනුව පෙරන්න"
  },
  allRegions: {
    EN: "All Regions",
    SI: "සියලුම කලාප"
  },
  historyLabel: {
    EN: "The Legend & History",
    SI: "පුරාවෘත්තය සහ ඉතිහාසය"
  },
  bestTimeLabel: {
    EN: "Best Time to Visit",
    SI: "සංචාරය කිරීමට හොඳම කාලය"
  },
  tipsLabel: {
    EN: "Traveler's Wisdom",
    SI: "සංචාරක උපදෙස්"
  },
  close: {
    EN: "Close",
    SI: "වසා දමන්න"
  },
  exploreInterests: {
    EN: "Explore Your Interests",
    SI: "ඔබේ රුචිකත්වයන් ගවේෂණය කරන්න"
  }
};

export const CATEGORIES_DATA = [
  {
    id: "wildlife",
    icon: "PawPrint",
    title: { EN: "Wildlife", SI: "වනජීවී" },
    description: { EN: "Encounter majestic elephants and elusive leopards.", SI: "ගාම්භීර අලි ඇතුන් සහ දුර්ලභ දිවියන් දැකගන්න." }
  },
  {
    id: "hiking",
    icon: "Mountain",
    title: { EN: "Hiking", SI: "කඳු තරණය" },
    description: { EN: "Scale misty peaks and trek through lush green trails.", SI: "මීදුමෙන් වැසුණු කඳු මුදුන් සහ හරිත මාවත් ඔස්සේ ඇවිද යන්න." }
  },
  {
    id: "foods",
    icon: "Utensils",
    title: { EN: "Food Heritage", SI: "ආහාර උරුමය" },
    description: { EN: "Taste the history of Lanka through its ancient spices.", SI: "පැරණි කුළුබඩු රසයෙන් ලංකාවේ ඉතිහාසය අත්විඳින්න." }
  },
  {
    id: "essentials",
    icon: "Backpack",
    title: { EN: "Travel Guide", SI: "සංචාරක උපදෙස්" },
    description: { EN: "Practical info on Visa, Currency, and getting around.", SI: "වීසා, මුදල් සහ ගමනාගමනය පිළිබඳ ප්‍රායෝගික තොරතුරු." }
  },
  {
    id: "festivals",
    icon: "PartyPopper",
    title: { EN: "Festivals", SI: "සංස්කෘතික උත්සව" },
    description: { EN: "Experience the vibrant Peraheras and traditions.", SI: "විචිත්‍රවත් පෙරහැර සහ සම්ප්‍රදායන් අත්විඳින්න." }
  },
  {
    id: "tea",
    icon: "Sprout",
    title: { EN: "Tea Trails", SI: "තේ සංස්කෘතිය" },
    description: { EN: "Explore the journey from leaf to cup in the misty hills.", SI: "මීදුමෙන් වැසුණු කඳුකරයේ තේ දල්ලේ සිට කෝප්පය දක්වා ගමන." }
  },
  {
    id: "phrases",
    icon: "MessageSquare",
    title: { EN: "Local Language", SI: "දේශීය භාෂාව" },
    description: { EN: "Learn basic Sinhala to connect with the locals.", SI: "දේශීය ජනතාව සමඟ සන්නිවේදනය කිරීමට සිංහල භාෂාව ඉගෙන ගන්න." }
  }
];

export const HIKING_DATA: HikingSpot[] = [
  {
    id: "h-1",
    name: { EN: "Adam’s Peak (Sri Pada)", SI: "ශ්‍රී පාදය" },
    location: { EN: "Ratnapura", SI: "රත්නපුර" },
    difficulty: "Hard",
    duration: { EN: "5-7 Hours", SI: "පැය 5-7" },
    elevation: "2,243m",
    description: { EN: "A sacred pilgrimage site with 5,000+ steps, famous for the sunrise and the 'Ira Sewaya'.", SI: "පඩිපෙළ 5,000 කට වඩා වැඩි ප්‍රමාණයක් සහිත පූජනීය කඳු මුදුනකි. මෙහි හිරු උදාව ඉතා ප්‍රසිද්ධය." },
    image: "https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "h-2",
    name: { EN: "Ella Rock", SI: "ඇල්ල රොක්" },
    location: { EN: "Ella", SI: "ඇල්ල" },
    difficulty: "Moderate",
    duration: { EN: "3-4 Hours", SI: "පැය 3-4" },
    elevation: "1,350m",
    description: { EN: "A popular trek through rail tracks and tea estates offering panoramic views of Ella Gap.", SI: "දුම්රිය මාර්ග සහ තේ වතු හරහා දිවෙන, ඇල්ල කපොල්ලේ අලංකාර දසුන් නැරඹිය හැකි සංචාරයකි." },
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "h-3",
    name: { EN: "Knuckles Range", SI: "නකල්ස් කඳු පන්තිය" },
    location: { EN: "Matale/Kandy", SI: "මාතලේ/මහනුවර" },
    difficulty: "Hard",
    duration: { EN: "1-3 Days", SI: "දින 1-3" },
    elevation: "1,863m",
    description: { EN: "A UNESCO World Heritage site with diverse climates and hidden waterfalls.", SI: "යුනෙස්කෝ ලෝක උරුමයක් වන මෙම කඳු පන්තිය ජෛව විවිධත්වයෙන් සහ සැඟවුණු දිය ඇලිවලින් පිරි ඉසව්වකි." },
    image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "h-4",
    name: { EN: "Horton Plains (World’s End)", SI: "හෝර්ටන් තැන්න (ලෝකාන්තය)" },
    location: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" },
    difficulty: "Easy",
    duration: { EN: "3-4 Hours", SI: "පැය 3-4" },
    elevation: "2,100m",
    description: { EN: "A high-altitude plateau trek ending at a 880m vertical drop known as World's End.", SI: "ලෝකාන්තය ලෙස හැඳින්වෙන අඩි 2,800 ක ප්‍රපාතයකින් අවසන් වන සානුමය ගමන් පථයකි." },
    image: "https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80"
  }
];

export const FOODS_DATA: Food[] = [
  {
    id: "hoppers",
    name: { EN: "Hoppers (Appa)", SI: "ආප්ප" },
    description: { EN: "Bowl-shaped pancakes made from fermented rice flour and coconut milk, often served with a whole egg in the middle.", SI: "හාල් පිටි සහ පොල් කිරි වලින් සාදන ලද බඳුනක හැඩැති මෘදු ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=1200&q=80",
    spiciness: 1,
    tasteProfile: { EN: "Crispy edges with a soft, creamy center.", SI: "දාරයේ කරකුටු ගතිය සහ මැද මෘදු බව." },
    ingredients: [{ EN: "Rice flour", SI: "හාල් පිටි" }, { EN: "Coconut milk", SI: "පොල් කිරි" }, { EN: "Toddy (for fermentation)", SI: "රා" }]
  },
  {
    id: "kottu",
    name: { EN: "Kottu Roti", SI: "කොත්තු රොටි" },
    description: { EN: "The ultimate street food: chopped Godamba roti mixed with vegetables, egg, spices, and your choice of meat.", SI: "ගෝදම්බ රොටි kැබලි වලට කපා එළවළු, බිත්තර සහ කුළුබඩු සමඟ මිශ්‍ර කර සාදන ජනප්‍රිය ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80",
    spiciness: 4,
    tasteProfile: { EN: "Hearty, spicy, and full of aromatic textures.", SI: "කුළුබඩු සුවඳ රැඳුණු තෘප්තිමත් ආහාරයකි." },
    ingredients: [{ EN: "Godamba Roti", SI: "රොටි" }, { EN: "Curry", SI: "හොදි" }, { EN: "Ginger/Garlic", SI: "ඉඟුරු/සුදුළුණු" }]
  },
  {
    id: "pol-sambol",
    name: { EN: "Pol Sambol", SI: "පොල් සම්බෝල" },
    description: { EN: "A fiery relish made of freshly grated coconut, chilies, onion, lime juice, and Maldive fish.", SI: "පොල්, මිරිස්, ලූණු සහ දෙහි යුෂ මිශ්‍ර කර සාදන ලද රසවත් සම්බෝලයකි." },
    image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=1200&q=80",
    spiciness: 5,
    tasteProfile: { EN: "Zesty, spicy, and tropical.", SI: "දැවෙන මිරිස් රස සහ දෙහි ඇඹුල් රසය." },
    ingredients: [{ EN: "Fresh Coconut", SI: "නැවුම් පොල්" }, { EN: "Red Chili", SI: "රතු මිරිස්" }, { EN: "Lime", SI: "දෙහි" }]
  },
  {
    id: "kiribath",
    name: { EN: "Kiribath (Milk Rice)", SI: "කිරි බත්" },
    description: { EN: "Rice cooked with thick coconut milk, a ceremonial dish served at every auspicious moment in Sri Lanka.", SI: "පොල් කිරි යොදා පිසින ලද බත්, ලාංකීය සංස්කෘතික උත්සව වලදී නැතිවම බැරි ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=1200&q=80",
    spiciness: 1,
    tasteProfile: { EN: "Creamy, mild, and comforting.", SI: "පොල් කිරි රසයෙන් පිරි මෘදු ආහාරයකි." },
    ingredients: [{ EN: "White Rice", SI: "සුදු හාල්" }, { EN: "Thick Coconut Milk", SI: "උකු පොල් කිරි" }, { EN: "Salt", SI: "ලුණු" }]
  },
  {
    id: "ambul-thiyal",
    name: { EN: "Fish Ambul Thiyal", SI: "මාළු ඇඹුල් තියල්" },
    description: { EN: "A unique sour fish curry made with firm fish, heavily spiced with black pepper and dried Goraka for its signature tangy flavor.", SI: "ගම්මිරිස් සහ ගොරකා යොදා සාදන ලද ලාංකීය අනන්‍යතාවය විදහා දක්වන මාළු ව්‍යංජනයකි." },
    image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=1200&q=80",
    spiciness: 4,
    tasteProfile: { EN: "Sour, spicy, and peppery.", SI: "ඇඹුල් සහ ගම්මිරිස් රස මුසු වූ විශේෂිත රසය." },
    ingredients: [{ EN: "Tuna or Bonito", SI: "කෙලවල්ලා හෝ බලයා" }, { EN: "Goraka", SI: "ගොරකා" }, { EN: "Black Pepper", SI: "ගම්මිරිස්" }]
  }
];

export const TEA_DATA: TeaExperience[] = [
  {
    id: "black-tea",
    name: { EN: "Ceylon Black Tea", SI: "ලංකා කළු තේ" },
    description: { EN: "The world-famous full-bodied tea known for its crisp, citrusy aroma.", SI: "මුළු ලොවම දන්නා ලාංකීය අනන්‍යතාවය විදහා දක්වන කළු තේ." },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    type: 'variety',
    fact: { EN: "Sri Lanka is the world's 4th largest tea producer.", SI: "ශ්‍රී ලංකාව ලොව සිව්වන විශාලතම තේ නිෂ්පාදකයා වේ." }
  }
];

export const PHRASEBOOK_DATA: Phrase[] = [
  { id: '1', english: "Hello / May you live long", sinhala: "ආයුබෝවන්", transliteration: "Ayubowan", category: 'greeting' },
  { id: '2', english: "Thank you", sinhala: "ස්තූතියි", transliteration: "Stutiyi", category: 'greeting' }
];

export const MEDICINE_DATA: TraditionalMedicine[] = [
  {
    id: "kohomba",
    type: 'herb',
    name: { EN: "Kohomba (Neem)", SI: "කොහොඹ" },
    description: { EN: "Known as the 'Village Pharmacy', Neem is revered for its potent antibacterial and antifungal properties.", SI: "මෙය දේශීය වෛද්‍ය විද්‍යාවේදී විෂබීජ නාශකයක් ලෙස ඉතාමත් වැදගත් ශාකයකි." },
    image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=1200&q=80",
    benefits: { EN: "Treats skin conditions and detoxifies the blood.", SI: "චර්ම රෝග සමනය කරන අතර රුධිරය පිරිසිදු කරයි." },
    usage: { EN: "Oil, leaf paste, or decoctions.", SI: "තෙල්, කොළ මැල්ලුම හෝ කසාය ලෙස." }
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "sigiriya",
    name: { EN: "Sigiriya Lion Rock", SI: "සීගිරිය සිංහගිරිය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1920&q=80",
    gallery: ["https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80"],
    videoUrl: "https://www.youtube.com/shorts/j4ln2UNOnZk",
    history: { EN: "Sigiriya, the 'Lion Rock', is a UNESCO World Heritage site and one of the best-preserved examples of ancient urban planning.", SI: "සීගිරිය හෙවත් 'සිංහගිරිය' යනු යුනෙස්කෝ ලෝක උරුම අඩවියක් වන අතර පැරණි නගර නිර්මාණකරණයේ විශිෂ්ටතම නිදසුනකි." },
    shortStory: { EN: "The 8th Wonder of the World – A fortress in the sky.", SI: "ලොව අටවන පුදුමය - අහස උසට විහිදුණු බලකොටුවකි." },
    bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Climb early morning to avoid the heat.", SI: "රස්නය මග හැරීමට උදෑසන කාලයේ නැගීම ආරම්භ කරන්න." }],
    location: "Matale District"
  },
  {
    id: "polonnaruwa",
    name: { EN: "Ancient City of Polonnaruwa", SI: "පොළොන්නරුව පැරණි නගරය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "The second most ancient kingdom of Sri Lanka, Polonnaruwa features remains of garden-cities and incredible stone sculptures.", SI: "ශ්‍රී ලංකාවේ දෙවන පැරණිතම රාජධානිය වන පොළොන්නරුව, උද්‍යාන නගරවල ශේෂයන් සහ විස්මිත ගල් කැටයම් වලින් සමන්විත වේ." },
    shortStory: { EN: "Where stone tells the story of an empire.", SI: "ගල් කැටයම් අධිරාජ්‍යයක කතාව පවසන තැන." },
    bestTime: { EN: "July to September", SI: "ජූලි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Rent a bicycle to explore the massive ruins.", SI: "නටබුන් නැරඹීමට බයිසිකලයක් කුලියට ගන්න." }],
    location: "Polonnaruwa District"
  },
  {
    id: "anuradhapura",
    name: { EN: "Sacred City of Anuradhapura", SI: "අනුරාධපුර පූජනීය නගරය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "The first capital and a beacon of Buddhist civilization for over a millennium.", SI: "වසර දහසකට වැඩි කාලයක් බෞද්ධ ශිෂ්ටාචාරයේ කේන්ද්‍රස්ථානය වූ ප්‍රථම අගනුවරයි." },
    shortStory: { EN: "The heart of Sri Lanka's spiritual history.", SI: "ශ්‍රී ලංකාවේ ආධ්‍යාත්මික ඉතිහාසයේ හදවත." },
    bestTime: { EN: "January to May", SI: "ජනවාරි සිට මැයි දක්වා" },
    tips: [{ EN: "Remove shoes and hats when entering temples.", SI: "පන්සල් වලට ඇතුළු වන විට සපත්තු සහ තොප්පි ගලවන්න." }],
    location: "Anuradhapura District"
  },
  {
    id: "dambulla",
    name: { EN: "Dambulla Cave Temple", SI: "දඹුල්ල රන් විහාරය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "The largest and best-preserved cave temple complex in Sri Lanka, housing 153 Buddha statues.", SI: "බුදු පිළිම 153 කින් සමන්විත ශ්‍රී ලංකාවේ විශාලතම සහ හොඳින්ම සංරක්ෂණය කර ඇති ලෙන් විහාර සංකීර්ණයයි." },
    shortStory: { EN: "Five caves, 150 Buddhas, and a mountain of gold.", SI: "ලෙන් පහක්, බුදු පිළිම 150ක් සහ රන් පර්වතයක්." },
    bestTime: { EN: "Year-round", SI: "වසර පුරා" },
    tips: [{ EN: "Beware of monkeys around the temple entrance.", SI: "විහාර ද්වාරය අසල සිටින රිලවුන්ගෙන් ප්‍රවේශම් වන්න." }],
    location: "Matale District"
  },
  {
    id: "kandy-temple",
    name: { EN: "Temple of the Sacred Tooth Relic", SI: "ශ්‍රී දළදා මාළිගාව" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "Located in the royal palace complex of the former Kingdom of Kandy, it houses the relic of the tooth of the Buddha.", SI: "මහනුවර රාජධානියේ රාජකීය මාළිගා සංකීර්ණයේ පිහිටි මෙය බුදුන් වහන්සේගේ දන්ත ධාතූන් වහන්සේ වැඩසිටින ස්ථානයයි." },
    shortStory: { EN: "The holiest shrine in the island.", SI: "දිවයිනේ පූජනීයම සිද්ධස්ථානය." },
    bestTime: { EN: "August (during Perahera)", SI: "අගෝස්තු (පෙරහැර කාලයේ)" },
    tips: [{ EN: "Dress in white for a traditional experience.", SI: "සාම්ප්‍රදායික අත්දැකීමක් සඳහා සුදු පැහැති ඇඳුමින් සැරසෙන්න." }],
    location: "Kandy District"
  },
  {
    id: "yapahuwa",
    name: { EN: "Yapahuwa Rock Fortress", SI: "යාපහුව බලකොටුව" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "A massive rock citadel rising 300 feet above the plain, served as the capital of the 13th-century kingdom.", SI: "තැනිතලාවෙන් අඩි 300 ක් ඉහළට විහිදුණු දැවැන්ත පර්වත බලකොටුවක් වන අතර 13 වන සියවසේ රාජධානියේ අගනුවර විය." },
    shortStory: { EN: "The lion portal to a forgotten throne.", SI: "අමතක වූ සිංහාසනයකට යන සිංහ ද්වාරය." },
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" },
    tips: [{ EN: "Prepare for a very steep climb up the stone stairs.", SI: "ගල් පඩිපෙළේ ඉතා බෑවුම් සහිත නැගීමකට සූදානම් වන්න." }],
    location: "Kurunegala District"
  },
  {
    id: "galle-fort",
    name: { EN: "Galle Dutch Fort", SI: "ගාල්ල ලන්දේසි කොටුව" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "A UNESCO World Heritage site, first built by the Portuguese in 1588 and extensively fortified by the Dutch.", SI: "යුනෙස්කෝ ලෝක උරුමයක් වන මෙය, 1588 දී පෘතුගීසීන් විසින් ඉදිකර පසුව ලන්දේසීන් විසින් ශක්තිමත් කරන ලදී." },
    shortStory: { EN: "Europe in the Tropics.", SI: "නිවර්තන කලාපයේ යුරෝපය." },
    bestTime: { EN: "November to April", SI: "නොවැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Walk the ramparts at sunset for the best views.", SI: "අලංකාර දර්ශන සඳහා හිරු බැස යන විට කොටු බැම්ම මත ඇවිදින්න." }],
    location: "Galle District"
  },
  {
    id: "mirissa",
    name: { EN: "Mirissa Beach", SI: "මිරිස්ස වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "Mirissa is a small town on the south coast, famous for its crescent-shaped beach and whale watching.", SI: "මිරිස්ස යනු දකුණු වෙරළ තීරයේ පිහිටි කුඩා නගරයකි. එහි අඩසඳ හැඩැති වෙරළ සහ තල්මසුන් නැරඹීම සඳහා මෙය ඉතා ප්‍රසිද්ධය." },
    shortStory: { EN: "Turquoise waters and legendary sunsets.", SI: "නිල්වන් සාගරය සහ අලංකාර හිරු බැස යාම් සහිත වෙරළ තීරයකි." },
    bestTime: { EN: "November to April", SI: "නොවැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Book whale watching trips in advance during peak season.", SI: "සංචාරක සමයේදී තල්මසුන් නැරඹීමේ චාරිකා කල්තියා වෙන්කරවා ගන්න." }],
    location: "Matara District"
  },
  {
    id: "unawatuna",
    name: { EN: "Unawatuna Beach", SI: "උණවටුන වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "Known for its coral reefs and palm-fringed beaches, Unawatuna is a prime spot for relaxation and snorkeling.", SI: "කොරල් පර සහ තල් ගස් වලින් වට වූ වෙරළ තීරය නිසා ප්‍රසිද්ධ උණවටුන, විවේකය සහ කිමිදුම් ක්‍රීඩා සඳහා සුදුසුම ස්ථානයකි." },
    shortStory: { EN: "A paradise for ocean lovers.", SI: "සාගර ලෝලීන් සඳහා වූ පාරාදීසයකි." },
    bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Visit the Japanese Peace Pagoda nearby for a great view.", SI: "අලංකාර දර්ශනයක් සඳහා අසල ඇති ජපන් සාම චෛත්‍යය නරඹන්න." }],
    location: "Galle District"
  },
  {
    id: "arugam-bay",
    name: { EN: "Arugam Bay", SI: "ආරුගම් බොක්ක" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "A moon-shaped bay on the East Coast, world-renowned as one of the best surfing destinations.", SI: "නැගෙනහිර වෙරළ තීරයේ පිහිටි අඩසඳ හැඩැති බොක්කක් වන මෙය ලොව හොඳම රළ පැදීමේ ස්ථානයක් ලෙස ප්‍රසිද්ධය." },
    shortStory: { EN: "Ride the endless waves of the East.", SI: "නැගෙනහිර නිමක් නැති රළ මත සවාරියක් යන්න." },
    bestTime: { EN: "May to September", SI: "මැයි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Great for surf beginners and pros alike.", SI: "ආධුනිකයින්ට මෙන්ම ප්‍රවීණයන්ටත් රළ පැදීමට සුදුසුයි." }],
    location: "Ampara District"
  },
  {
    id: "trincomalee",
    name: { EN: "Nilaveli & Uppuveli", SI: "නිලාවේලි සහ උප්පුවේලි" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "Stretches of pure white sand on the Northeast coast, offering access to Pigeon Island National Park.", SI: "ඊසානදිග වෙරළ තීරයේ පිහිටි පිරිසිදු සුදු වැලි සහිත වෙරළ තීරයන් සහ පරෙවි දූපතට පිවිසුම ලබා දෙයි." },
    shortStory: { EN: "The crystal clear depths of the East.", SI: "නැගෙනහිර පළිඟු වන් පැහැදිලි සාගර ගැඹුර." },
    bestTime: { EN: "April to October", SI: "අප්‍රේල් සිට ඔක්තෝබර් දක්වා" },
    tips: [{ EN: "Take a boat to Pigeon Island for world-class snorkeling.", SI: "කිමිදුම් ක්‍රීඩා සඳහා බෝට්ටුවකින් පරෙවි දූපතට යන්න." }],
    location: "Trincomalee District"
  },
  {
    id: "bentota",
    name: { EN: "Bentota Golden Beach", SI: "බෙන්තොට රන්වන් වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1558446791-ac5fec3caddf?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1558446791-ac5fec3caddf?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "A major resort town famous for water sports and its broad, golden sandy beaches.", SI: "ජල ක්‍රීඩා සහ පුළුල් රන්වන් වැලි සහිත වෙරළ තීරය නිසා ප්‍රසිද්ධ ප්‍රධාන සංචාරක නගරයකි." },
    shortStory: { EN: "Adrenaline on the water, peace on the shore.", SI: "ජලය මත ජවය, වෙරළේ සාමය." },
    bestTime: { EN: "October to April", SI: "ඔක්තෝබර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Try the river safari on the Madu Ganga nearby.", SI: "අසල ඇති මාදු ගඟේ බෝට්ටු සවාරියක් අත්විඳින්න." }],
    location: "Galle District"
  },
  {
    id: "hikkaduwa",
    name: { EN: "Hikkaduwa Marine Sanctuary", SI: "හික්කඩුව සාගර රක්ෂිතය" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "Famous for its shallow coral reefs and diverse marine life, including giant sea turtles.", SI: "නොගැඹුරු කොරල් පර සහ යෝධ මුහුදු කැස්බෑවුන් ඇතුළු විවිධ සාගර ජීවීන් සඳහා ප්‍රසිද්ධය." },
    shortStory: { EN: "Swim with the giants of the reef.", SI: "කොරල් පරයේ යෝධයන් සමඟ පිහිනන්න." },
    bestTime: { EN: "November to April", SI: "නොවැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Take a glass-bottom boat if you don't want to get wet.", SI: "දියට බැසීමට අකමැති නම් වීදුරු පතුල සහිත බෝට්ටුවක යන්න." }],
    location: "Galle District"
  },
  {
    id: "tangalle",
    name: { EN: "Tangalle Silent Beach", SI: "තංගල්ල නිහඬ වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "Known for its wild, untouched coastline and deep blue waters on the far south coast.", SI: "ඈත දකුණු වෙරළ තීරයේ පිහිටි ස්වභාවික, ස්පර්ශ නොකළ වෙරළ තීරයන් සහ තද නිල් පැහැති මුහුද සඳහා ප්‍රසිද්ධය." },
    shortStory: { EN: "Unspoiled solitude by the sea.", SI: "මුහුදු වෙරළේ අසමසම හුදෙකලාව." },
    bestTime: { EN: "December to March", SI: "දෙසැම්බර් සිට මාර්තු දක්වා" },
    tips: [{ EN: "The sea here can be rough; swim only in designated areas.", SI: "මෙහි මුහුද රළු විය හැක; නියමිත ස්ථානවල පමණක් පිහිනන්න." }],
    location: "Hambantota District"
  },
  {
    id: "yala",
    name: { EN: "Yala National Park", SI: "යාල ජාතික උද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "Sri Lanka's most famous park, boasting the highest leopard density in the world.", SI: "ලොව වැඩිම දිවි ඝනත්වයක් සහිත ශ්‍රී ලංකාවේ වඩාත් ප්‍රසිද්ධ ජාතික උද්‍යානයයි." },
    shortStory: { EN: "Home of the spotted king.", SI: "දිවි රජුගේ නිවහන." },
    bestTime: { EN: "February to June", SI: "පෙබරවාරි සිට ජූනි දක්වා" },
    tips: [{ EN: "Enter at dawn for the best chance to spot a leopard.", SI: "දිවියන් දැකීමට උදෑසනම උද්‍යානයට ඇතුළු වන්න." }],
    location: "Hambantota District"
  },
  {
    id: "udawalawe",
    name: { EN: "Udawalawe National Park", SI: "උඩවලව ජාතික උද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "An important habitat for Sri Lankan elephants and a premier site for bird watching.", SI: "ශ්‍රී ලංකාවේ අලි ඇතුන්ගේ වැදගත් වාසස්ථානයක් වන අතර පක්ෂි නිරීක්ෂණය සඳහා කදිම ස්ථානයකි." },
    shortStory: { EN: "Where giants roam free.", SI: "යෝධයන් නිදැල්ලේ සැරිසරන තැන." },
    bestTime: { EN: "October to April", SI: "ඔක්තෝබර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Visit the Elephant Transit Home nearby at feeding time.", SI: "ආසන්නයේ ඇති ඇත් අතුරු සෙවණ ආහාර ලබා දෙන වේලාවට නරඹන්න." }],
    location: "Ratnapura District"
  },
  {
    id: "minneriya",
    name: { EN: "Minneriya National Park", SI: "මින්නේරිය ජාතික උද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1549414002-36365a6b0933?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1549414002-36365a6b0933?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "Famous for 'The Gathering', where hundreds of elephants congregate around the Minneriya Tank.", SI: "මින්නේරිය වැව අසල අලි සිය ගණනක් එක්රැස් වන 'අලි රංචුව' (The Gathering) සඳහා ප්‍රසිද්ධය." },
    shortStory: { EN: "The great elephant gathering.", SI: "මහා අලි රංචුවක දර්ශනය." },
    bestTime: { EN: "August to September", SI: "අගෝස්තු සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Late afternoon is the best time for elephant sightings.", SI: "අලි ඇතුන් දැකීමට පස්වරු කාලය වඩාත් සුදුසුය." }],
    location: "Polonnaruwa District"
  },
  {
    id: "wilpattu",
    name: { EN: "Wilpattu National Park", SI: "විල්පත්තු ජාතික උද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "Sri Lanka's largest park, characterized by a unique complex of 'Willus' (natural lakes).", SI: "ස්වභාවික විල් හෙවත් 'විල්ලු' වලින් සමන්විත ශ්‍රී ලංකාවේ විශාලතම ජාතික උද්‍යානයයි." },
    shortStory: { EN: "Lakes of the wild.", SI: "වනයේ ස්වභාවික විල්." },
    bestTime: { EN: "May to early October", SI: "මැයි සිට ඔක්තෝබර් මුල දක්වා" },
    tips: [{ EN: "Great for those seeking a less crowded safari experience.", SI: "අඩු පිරිසක් ගැවසෙන සෆාරි අත්දැකීමක් සොයන්නන්ට ඉතා සුදුසුයි." }],
    location: "Anuradhapura District"
  },
  {
    id: "sinharaja",
    name: { EN: "Sinharaja Forest Reserve", SI: "සිංහරාජ වන රක්ෂිතය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "A UNESCO World Heritage site and the last viable primary tropical rainforest in the island.", SI: "යුනෙස්කෝ ලෝක උරුමයක් වන මෙය, දිවයිනේ ඉතිරිව ඇති එකම ප්‍රාථමික නිවර්තන වැසි වනාන්තරයයි." },
    shortStory: { EN: "The kingdom of the lion forest.", SI: "සිංහරාජයේ හරිත අධිරාජ්‍යය." },
    bestTime: { EN: "January to April", SI: "ජනවාරි සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Wear leech socks and carry repellent.", SI: "කූඩැල්ලන්ගෙන් ආරක්ෂා වීමට මේස් සහ ආලේපන රැගෙන යන්න." }],
    location: "Ratnapura District"
  },
  {
    id: "bundala",
    name: { EN: "Bundala National Park", SI: "බූන්දල ජාතික උද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1549414002-36365a6b0933?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1549414002-36365a6b0933?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "A Ramsar wetland site, crucial for migratory birds including flamingos.", SI: "ෆ්ලෙමින්ගෝ ඇතුළු සංක්‍රමණික පක්ෂීන් සඳහා වැදගත් වන රැම්සාර් තෙත් බිම් අඩවියකි." },
    shortStory: { EN: "A sanctuary for winged travelers.", SI: "පියාපත් ඇති සංචාරකයින්ගේ නවාතැන." },
    bestTime: { EN: "September to March", SI: "සැප්තැම්බර් සිට මාර්තු දක්වා" },
    tips: [{ EN: "A must-visit for serious bird watchers.", SI: "පක්ෂි නිරීක්ෂකයින් අනිවාර්යයෙන්ම නැරඹිය යුතු ස්ථානයකි." }],
    location: "Hambantota District"
  },
  {
    id: "ella",
    name: { EN: "Ella Highlands", SI: "ඇල්ල කඳුකරය" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "A mountain town famous for its iconic Nine Arch Bridge and breathtaking hiking trails.", SI: "ඓතිහාසික ආරුක්කු නවය පාලම සහ මනරම් කඳු තරණ මාවත් නිසා ප්‍රසිද්ධ කඳුකර නගරයකි." },
    shortStory: { EN: "The soul of the tea country.", SI: "තේ කලාපයේ ආත්මය." },
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" },
    tips: [{ EN: "Don't miss the sunrise from Little Adam's Peak.", SI: "පුංචි ශ්‍රී පාදයේ සිට හිරු උදාව නැරඹීමට අමතක නොකරන්න." }],
    location: "Badulla District"
  },
  {
    id: "adams-peak",
    name: { EN: "Adam’s Peak (Sri Pada)", SI: "ශ්‍රී පාදය" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "A sacred site for four religions, famous for the 'sacred footprint' and its night pilgrimage.", SI: "රාත්‍රී වන්දනාව සහ 'ශ්‍රී පතුල' නිසා ප්‍රසිද්ධ, ආගම් හතරකටම පූජනීය වූ ස්ථානයකි." },
    shortStory: { EN: "A climb to the heavens.", SI: "අහස දෙසට යන වන්දනාව." },
    bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Start the climb at midnight to catch the sunrise.", SI: "හිරු උදාව නැරඹීමට මධ්‍යම රාත්‍රියේ නැගීම අරඹන්න." }],
    location: "Ratnapura District"
  },
  {
    id: "knuckles",
    name: { EN: "Knuckles Range", SI: "නකල්ස් කඳු පන්තිය" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "A rugged mountain range shaped like a clenched fist, offering incredible biodiversity.", SI: "මිටි කළ අතක හැඩය ඇති, ජෛව විවිධත්වයෙන් පිරි රළු කඳු පන්තියකි." },
    shortStory: { EN: "Into the misty wilderness.", SI: "මීදුමෙන් වැසුණු වන මැදට." },
    bestTime: { EN: "June to September", SI: "ජූනි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Hiring a local guide is highly recommended.", SI: "දේශීය මගපෙන්වන්නෙකු ලබා ගැනීම බෙහෙවින් නිර්දේශ කෙරේ." }],
    location: "Matale/Kandy Districts"
  },
  {
    id: "horton-plains",
    name: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "A cold, windy plateau ending at World’s End, an 880m vertical drop.", SI: "අඩි 2,800 ක ප්‍රපාතයකින් හෙවත් ලෝකාන්තයෙන් අවසන් වන සිසිල් සානුමය ප්‍රදේශයකි." },
    shortStory: { EN: "Where the world ends.", SI: "ලෝකය අවසන් වන තැන." },
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" },
    tips: [{ EN: "Reach World's End before 9 AM to avoid the mist.", SI: "මීදුමට පෙර ලෝකාන්තය නැරඹීමට පෙරවරු 9 ට පෙර එහි යන්න." }],
    location: "Nuwara Eliya District"
  },
  {
    id: "nuwara-eliya",
    name: { EN: "Little England", SI: "පුංචි එංගලන්තය" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"],
    history: { EN: "Known for its colonial architecture and as the heart of Sri Lanka's tea industry.", SI: "යටත් විජිත සමයේ ගෘහ නිර්මාණ ශිල්පය සහ තේ කර්මාන්තයේ හදවත ලෙස ප්‍රසිද්ධය." },
    shortStory: { EN: "Mist, tea, and colonial charm.", SI: "මීදුම, තේ සහ පැරණි අලංකාරය." },
    bestTime: { EN: "April to June", SI: "අප්‍රේල් සිට ජූනි දක්වා" },
    tips: [{ EN: "Pack warm clothes regardless of the season.", SI: "ඕනෑම කාලයකදී ඇඳීමට උණුසුම් ඇඳුම් රැගෙන යන්න." }],
    location: "Nuwara Eliya District"
  }
];

export const HERITAGE_MUSIC_DATA: HeritageMusic[] = [
  {
    id: "m-1",
    type: 'instrument',
    name: { EN: "Geta Beraya", SI: "ගැට බෙරය" },
    description: { EN: "The most iconic drum of the Kandyan hills.", SI: "මහනුවර කඳුකරයට ආවේණික වූ බෙරයයි." },
    image: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80",
    origin: { EN: "Kandy", SI: "මහනුවර" },
    significance: { EN: "The soul of Kandyan rhythmic art.", SI: "උඩරට රිද්ම කලා ශිල්පයේ හදවතයි." }
  }
];

export const TRAVEL_ESSENTIALS_DATA: TravelEssential[] = [
  {
    id: "e-1",
    title: { EN: "Visa & Entry", SI: "වීසා සහ ඇතුල්වීම" },
    description: { EN: "Most nationalities require an Electronic Travel Authorization (ETA).", SI: "බොහෝ රටවල සංචාරකයින්ට ලංකාවට ඇතුළු වීමට ETA බලපත්‍රයක් අවශ්‍ය වේ." },
    icon: "ShieldCheck",
    tips: []
  }
];

export const FESTIVALS_DATA: Festival[] = [
  {
    id: "fest-1",
    name: { EN: "Vesak Festival", SI: "වෙසක් උත්සවය" },
    date: { EN: "May (Full Moon)", SI: "මැයි (පුර පසළොස්වක)" },
    description: { EN: "Commemorating the birth, enlightenment, and passing of Lord Buddha with lights and lanterns.", SI: "බුදුරජාණන් වහන්සේගේ තෙමඟුල සැමරීම සඳහා පහන් සහ තොරණින් සැරසෙන උත්සවයකි." },
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80",
    significance: { EN: "The most important Buddhist festival in the island.", SI: "දිවයිනේ වැදගත්ම බෞද්ධ උත්සවයයි." }
  },
  {
    id: "fest-2",
    name: { EN: "Kandy Esala Perahera", SI: "මහනුවර ඇසළ පෙරහැර" },
    date: { EN: "July / August", SI: "ජූලි / අගෝස්තු" },
    description: { EN: "A grand procession featuring elephants and dancers to honor the Sacred Tooth Relic.", SI: "දන්ත ධාතූන් වහන්සේ උදෙසා පවත්වන ලොව විචිත්‍රවත්ම පෙරහැරකි." },
    image: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80",
    significance: { EN: "One of the oldest and grandest festivals in Asia.", SI: "ආසියාවේ පැරණිතම සහ විශාලතම උත්සවයකි." }
  },
  {
    id: "fest-3",
    name: { EN: "Sinhala & Tamil New Year", SI: "සිංහල හා දෙමළ අලුත් අවුරුද්ද" },
    date: { EN: "April 13-14", SI: "අප්‍රේල් 13-14" },
    description: { EN: "A major harvest festival celebrated with traditional games, food, and rituals to mark the movement of the sun.", SI: "සාම්ප්‍රදායික ක්‍රීඩා, ආහාර සහ චාරිත්‍ර වාරිත්‍ර සමඟ සමරනු ලබන වසරේ ප්‍රධානතම සංස්කෘතික උත්සවයයි." },
    image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80",
    significance: { EN: "Symbolizes national unity and the end of the harvest season.", SI: "ජාතික සමගිය සහ අස්වනු නෙලීමේ කාලය අවසන් වීම සංකේතවත් කරයි." }
  }
];
