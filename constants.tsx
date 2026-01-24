
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
    image: "https://cdn.pixabay.com/photo/2023/07/04/10/30/mountains-8105952_1280.jpg"
  },
  {
    id: "h-2",
    name: { EN: "Ella Rock", SI: "ඇල්ල රොක්" },
    location: { EN: "Ella", SI: "ඇල්ල" },
    difficulty: "Moderate",
    duration: { EN: "3-4 Hours", SI: "පැය 3-4" },
    elevation: "1,350m",
    description: { EN: "A popular trek through rail tracks and tea estates offering panoramic views of Ella Gap.", SI: "දුම්රිය මාර්ග සහ තේ වතු හරහා දිවෙන, ඇල්ල කපොල්ලේ අලංකාර දසුන් නැරඹිය හැකි සංචාරයකි." },
    image: "https://cdn.pixabay.com/photo/2016/11/21/13/46/background-1845479_1280.jpg"
  },
  {
    id: "h-3",
    name: { EN: "Knuckles Range", SI: "නකල්ස් කඳු පන්තිය" },
    location: { EN: "Matale/Kandy", SI: "මාතලේ/මහනුවර" },
    difficulty: "Hard",
    duration: { EN: "1-3 Days", SI: "දින 1-3" },
    elevation: "1,863m",
    description: { EN: "A UNESCO World Heritage site with diverse climates and hidden waterfalls.", SI: "යුනෙස්කෝ ලෝක උරුමයක් වන මෙම කඳු පන්තිය ජෛව විවිධත්වයෙන් සහ සැඟවුණු දිය ඇලිවලින් පිරි ඉසව්වකි." },
    image: "https://cdn.pixabay.com/photo/2018/11/15/22/41/sri-lanka-3818318_1280.jpg"
  },
  {
    id: "h-4",
    name: { EN: "Horton Plains (World’s End)", SI: "හෝර්ටන් තැන්න (ලෝකාන්තය)" },
    location: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" },
    difficulty: "Easy",
    duration: { EN: "3-4 Hours", SI: "පැය 3-4" },
    elevation: "2,100m",
    description: { EN: "A high-altitude plateau trek ending at a 880m vertical drop known as World's End.", SI: "ලෝකාන්තය ලෙස හැඳින්වෙන අඩි 2,800 ක ප්‍රපාතයකින් අවසන් වන සානුමය ගමන් පථයකි." },
    image: "https://cdn.pixabay.com/photo/2014/11/14/03/57/mountain-530188_1280.jpg"
  }
];

export const FOODS_DATA: Food[] = [
  {
    id: "hoppers",
    name: { EN: "Hoppers (Appa)", SI: "ආප්ප" },
    description: { EN: "Bowl-shaped pancakes made from fermented rice flour and coconut milk, often served with a whole egg in the middle.", SI: "හාල් පිටි සහ පොල් කිරි වලින් සාදන ලද බඳුනක හැඩැති මෘදු ආහාරයකි." },
    image: "https://cdn.pixabay.com/photo/2016/09/01/01/08/pancakes-1634991_1280.jpg",
    spiciness: 1,
    tasteProfile: { EN: "Crispy edges with a soft, creamy center.", SI: "දාරයේ කරකුටු ගතිය සහ මැද මෘදු බව." },
    ingredients: [{ EN: "Rice flour", SI: "හාල් පිටි" }, { EN: "Coconut milk", SI: "පොල් කිරි" }, { EN: "Toddy (for fermentation)", SI: "රා" }]
  },
  {
    id: "kottu",
    name: { EN: "Kottu Roti", SI: "කොත්තු රොටි" },
    description: { EN: "The ultimate street food: chopped Godamba roti mixed with vegetables, egg, spices, and your choice of meat.", SI: "ගෝදම්බ රොටි කැබලි වලට කපා එළවළු, බිත්තර සහ කුළුබඩු සමඟ මිශ්‍ර කර සාදන ජනප්‍රිය ආහාරයකි." },
    image: "https://cdn.pixabay.com/photo/2021/05/25/12/57/kottu-6282361_1280.jpg",
    spiciness: 4,
    tasteProfile: { EN: "Hearty, spicy, and full of aromatic textures.", SI: "කුළුබඩු සුවඳ රැඳුණු තෘප්තිමත් ආහාරයකි." },
    ingredients: [{ EN: "Godamba Roti", SI: "රොටි" }, { EN: "Curry", SI: "හොදි" }, { EN: "Ginger/Garlic", SI: "ඉඟුරු/සුදුළුණු" }]
  },
  {
    id: "pol-sambol",
    name: { EN: "Pol Sambol", SI: "පොල් සම්බෝල" },
    description: { EN: "A fiery relish made of freshly grated coconut, chilies, onion, lime juice, and Maldive fish.", SI: "පොල්, මිරිස්, ලූණු සහ දෙහි යුෂ මිශ්‍ර කර සාදන ලද රසවත් සම්බෝලයකි." },
    image: "https://cdn.pixabay.com/photo/2016/06/25/11/50/coconut-1478716_1280.jpg",
    spiciness: 5,
    tasteProfile: { EN: "Zesty, spicy, and tropical.", SI: "දැවෙන මිරිස් රස සහ දෙහි ඇඹුල් රසය." },
    ingredients: [{ EN: "Fresh Coconut", SI: "නැවුම් පොල්" }, { EN: "Red Chili", SI: "රතු මිරිස්" }, { EN: "Lime", SI: "දෙහි" }]
  },
  {
    id: "kiribath",
    name: { EN: "Kiribath (Milk Rice)", SI: "කිරි බත්" },
    description: { EN: "Rice cooked with thick coconut milk, a ceremonial dish served at every auspicious moment in Sri Lanka.", SI: "පොල් කිරි යොදා පිසින ලද බත්, ලාංකීය සංස්කෘතික උත්සව වලදී නැතිවම බැරි ආහාරයකි." },
    image: "https://cdn.pixabay.com/photo/2018/06/13/11/32/rice-3472591_1280.jpg",
    spiciness: 1,
    tasteProfile: { EN: "Creamy, mild, and comforting.", SI: "පොල් කිරි රසයෙන් පිරි මෘදු ආහාරයකි." },
    ingredients: [{ EN: "White Rice", SI: "සුදු හාල්" }, { EN: "Thick Coconut Milk", SI: "උකු පොල් කිරි" }, { EN: "Salt", SI: "ලුණු" }]
  },
  {
    id: "ambul-thiyal",
    name: { EN: "Fish Ambul Thiyal", SI: "මාළු ඇඹුල් තියල්" },
    description: { EN: "A unique sour fish curry made with firm fish, heavily spiced with black pepper and dried Goraka for its signature tangy flavor.", SI: "ගම්මිරිස් සහ ගොරකා යොදා සාදන ලද ලාංකීය අනන්‍යතාවය විදහා දක්වන මාළු ව්‍යංජනයකි." },
    image: "https://cdn.pixabay.com/photo/2014/11/05/15/57/fish-518022_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2016/07/26/16/16/neem-1543161_1280.jpg",
    benefits: { EN: "Treats skin conditions and detoxifies the blood.", SI: "චර්ම රෝග සමනය කරන අතර රුධිරය පිරිසිදු කරයි." },
    usage: { EN: "Oil, leaf paste, or decoctions.", SI: "තෙල්, කොළ මැල්ලුම හෝ කසාය ලෙස." }
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "sigiriya",
    name: { EN: "Sigiriya Lion Rock", SI: "සීගිරිය සිංහගිරිය" },
    category: "ancient",
    image: "https://cdn.pixabay.com/photo/2017/08/04/17/39/sigiriya-2580795_1280.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2021/01/17/14/40/mountain-5925345_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/11/15/22/41/sri-lanka-3818318_1280.jpg"
    ],
    videoUrl: "https://www.youtube.com/shorts/j4ln2UNOnZk",
    history: {
      EN: "Sigiriya, the 'Lion Rock', is a UNESCO World Heritage site and one of the best-preserved examples of ancient urban planning.",
      SI: "සීගිරිය හෙවත් 'සිංහගිරිය' යනු යුනෙස්කෝ ලෝක උරුම අඩවියක් වන අතර පැරණි නගර නිර්මාණකරණයේ විශිෂ්ටතම නිදසුනකි."
    },
    shortStory: {
      EN: "The 8th Wonder of the World – A fortress in the sky.",
      SI: "ලොව අටවන පුදුමය - අහස උසට විහිදුණු බලකොටුවකි."
    },
    bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [
      { EN: "Climb early morning to avoid the heat.", SI: "රස්නය මග හැරීමට උදෑසන කාලයේ නැගීම ආරම්භ කරන්න." }
    ],
    location: "Matale District"
  },
  {
    id: "mirissa",
    name: { EN: "Mirissa Beach", SI: "මිරිස්ස වෙරළ" },
    category: "beach",
    image: "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg",
    gallery: [],
    history: {
      EN: "Mirissa is a small town on the south coast, famous for its crescent-shaped beach and whale watching.",
      SI: "මිරිස්ස යනු දකුණු වෙරළ තීරයේ පිහිටි කුඩා නගරයකි. එහි අඩසඳ හැඩැති වෙරළ සහ තල්මසුන් නැරඹීම සඳහා මෙය ඉතා ප්‍රසිද්ධය."
    },
    shortStory: {
      EN: "Turquoise waters and legendary sunsets.",
      SI: "නිල්වන් සාගරය සහ අලංකාර හිරු බැස යාම් සහිත වෙරළ තීරයකි."
    },
    bestTime: { EN: "November to April", SI: "නොවැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [],
    location: "Matara District"
  }
];

export const HERITAGE_MUSIC_DATA: HeritageMusic[] = [
  {
    id: "m-1",
    type: 'instrument',
    name: { EN: "Geta Beraya", SI: "ගැට බෙරය" },
    description: { EN: "The most iconic drum of the Kandyan hills.", SI: "මහනුවර කඳුකරයට ආවේණික වූ බෙරයයි." },
    image: "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg",
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
    image: "https://cdn.pixabay.com/photo/2018/05/23/21/04/vesak-3425141_1280.jpg",
    significance: { EN: "The most important Buddhist festival in the island.", SI: "දිවයිනේ වැදගත්ම බෞද්ධ උත්සවයයි." }
  },
  {
    id: "fest-2",
    name: { EN: "Kandy Esala Perahera", SI: "මහනුවර ඇසළ පෙරහැර" },
    date: { EN: "July / August", SI: "ජූලි / අගෝස්තු" },
    description: { EN: "A grand procession featuring elephants and dancers to honor the Sacred Tooth Relic.", SI: "දන්ත ධාතූන් වහන්සේ උදෙසා පවත්වන ලොව විචිත්‍රවත්ම පෙරහැරකි." },
    image: "https://cdn.pixabay.com/photo/2017/03/24/18/16/dance-2171881_1280.jpg",
    significance: { EN: "One of the oldest and grandest festivals in Asia.", SI: "ආසියාවේ පැරණිතම සහ විශාලතම උත්සවයකි." }
  },
  {
    id: "fest-3",
    name: { EN: "Sinhala & Tamil New Year", SI: "සිංහල හා දෙමළ අලුත් අවුරුද්ද" },
    date: { EN: "April 13-14", SI: "අප්‍රේල් 13-14" },
    description: { EN: "A major harvest festival celebrated with traditional games, food, and rituals to mark the movement of the sun.", SI: "සාම්ප්‍රදායික ක්‍රීඩා, ආහාර සහ චාරිත්‍ර වාරිත්‍ර සමඟ සමරනු ලබන වසරේ ප්‍රධානතම සංස්කෘතික උත්සවයයි." },
    image: "https://cdn.pixabay.com/photo/2016/11/21/13/46/background-1845479_1280.jpg",
    significance: { EN: "Symbolizes national unity and the end of the harvest season.", SI: "ජාතික සමගිය සහ අස්වනු නෙලීමේ කාලය අවසන් වීම සංකේතවත් කරයි." }
  },
  {
    id: "fest-4",
    name: { EN: "Thai Pongal", SI: "තෛපොංගල් උත්සවය" },
    date: { EN: "January", SI: "ජනවාරි" },
    description: { EN: "A Hindu harvest festival dedicated to the Sun God, featuring the cooking of the 'Pongal' rice dish.", SI: "සූර්ය දෙවියන් උදෙසා පවත්වනු ලබන හින්දු අස්වනු මංගල්‍යයයි. මෙහිදී 'පොංගල්' බත් පිසීම විශේෂත්වයකි." },
    image: "https://cdn.pixabay.com/photo/2017/01/14/12/36/pongal-1979410_1280.jpg",
    significance: { EN: "Gratitude to nature for a bountiful harvest.", SI: "සරු අස්වැන්නක් ලබා දීම වෙනුවෙන් සොබාදහමට ස්තූතිය පළ කිරීම." }
  },
  {
    id: "fest-5",
    name: { EN: "Poson Poya", SI: "පොසොන් උත්සවය" },
    date: { EN: "June (Full Moon)", SI: "ජූනි (පුර පසළොස්වක)" },
    description: { EN: "Commemorates the arrival of Buddhism in Sri Lanka at Mihintale.", SI: "මිහින්තලයේදී ලංකාවට බුදුදහම ලැබීම සැමරීම සඳහා පවත්වනු ලබන උත්සවයයි." },
    image: "https://cdn.pixabay.com/photo/2017/09/16/01/22/sri-lanka-2754279_1280.jpg",
    significance: { EN: "The second most important Poya day, focusing on the spread of Dhamma.", SI: "ධර්මය ව්‍යාප්ත වීම පදනම් කරගත් දිවයිනේ දෙවන වැදගත්ම පොහොය දිනයයි." }
  },
  {
    id: "fest-6",
    name: { EN: "Deepavali", SI: "දීපාවලී උත්සවය" },
    date: { EN: "October / November", SI: "ඔක්තෝබර් / නොවැම්බර්" },
    description: { EN: "The Hindu Festival of Lights, celebrating the victory of light over darkness and good over evil.", SI: "අන්ධකාරය පරදා ආලෝකයත්, අයහපත පරදා යහපතත් ජය ගැනීම සැමරෙන හින්දු ආලෝක උත්සවයයි." },
    image: "https://cdn.pixabay.com/photo/2021/01/17/14/40/mountain-5925345_1280.jpg",
    significance: { EN: "Celebrated with oil lamps, vibrant kolams, and sweets.", SI: "පහන් දල්වමින් සහ රටා මවමින් උත්කර්ෂවත් ලෙස සමරනු ලබයි." }
  },
  {
    id: "fest-7",
    name: { EN: "Kataragama Festival", SI: "කතරගම ඇසළ උත්සවය" },
    date: { EN: "July / August", SI: "ජූලි / අගෝස්තු" },
    description: { EN: "A vibrant multi-religious festival featuring fire-walking, water cutting ceremonies, and kavadi dancing.", SI: "ගිනි පෑගීම සහ කාවඩි නැටුම් ඇතුළු විවිධ චාරිත්‍ර පවත්වන සර්ව ආගමික උත්සවයකි." },
    image: "https://cdn.pixabay.com/photo/2016/09/04/21/53/buddhism-1645318_1280.jpg",
    significance: { EN: "Honoring Lord Kataragama with immense devotion.", SI: "කතරගම දෙවියන් උදෙසා මහත් භක්තියෙන් පවත්වනු ලබන පුද පූජා මාලාවකි." }
  },
  {
    id: "fest-8",
    name: { EN: "Nallur Festival", SI: "නල්ලූර් කන්දසාමි කෝවිල් උත්සවය" },
    date: { EN: "August / September", SI: "අගෝස්තු / සැප්තැම්බර්" },
    description: { EN: "The longest festival in Sri Lanka, held at the historic Nallur Kandaswamy Kovil in Jaffna.", SI: "යාපනයේ පිහිටි ඓතිහාසික නල්ලූර් කෝවිල කේන්ද්‍ර කරගෙන පවත්වන ලංකාවේ දීර්ඝතම උත්සවයයි." },
    image: "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg",
    significance: { EN: "A grand showcase of Hindu tradition in the Northern Peninsula.", SI: "උතුරු අර්ධද්වීපයේ හින්දු සම්ප්‍රදායන් විදහා දක්වන සුවිශේෂී මංගල්‍යයකි." }
  },
  {
    id: "fest-9",
    name: { EN: "Christmas", SI: "නත්තල් උත්සවය" },
    date: { EN: "December 25", SI: "දෙසැම්බර් 25" },
    description: { EN: "Celebrated widely across the island, especially in coastal areas, marking the birth of Jesus Christ.", SI: "ජේසුස් ක්‍රිස්තුස් වහන්සේගේ උපත සැමරීම සඳහා දිවයින පුරා පවත්වනු ලබන ආගමික උත්සවයයි." },
    image: "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg",
    significance: { EN: "A time of joy, sharing, and religious harmony.", SI: "ප්‍රීතිය, බෙදාහදා ගැනීම සහ ආගමික සහජීවනය විදහා දක්වන කාලයකි." }
  },
  {
    id: "fest-10",
    name: { EN: "Duruthu Perahera", SI: "දුරුතු පෙරහැර" },
    date: { EN: "January (Full Moon)", SI: "ජනවාරි (පුර පසළොස්වක)" },
    description: { EN: "A spectacular cultural pageant held at the Kelaniya Raja Maha Vihara to mark the Buddha's first visit to Sri Lanka.", SI: "බුදුරජාණන් වහන්සේගේ ප්‍රථම ලංකාගමනය සැමරීම සඳහා කැලණිය රජමහා විහාරයේ පවත්වනු ලබන මනරම් පෙරහැරයි." },
    image: "https://cdn.pixabay.com/photo/2017/03/24/18/16/dance-2171881_1280.jpg",
    significance: { EN: "One of the most elaborate and traditional processions in the island.", SI: "දිවයිනේ පැවැත්වෙන අලංකාරවත් සහ සාම්ප්‍රදායික පෙරහැර වලින් එකකි." }
  }
];
