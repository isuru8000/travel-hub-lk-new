
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
  { id: "h-1", name: { EN: "Adam’s Peak (Sri Pada)", SI: "ශ්‍රී පාදය" }, location: { EN: "Ratnapura", SI: "රත්නපුර" }, difficulty: "Hard", duration: { EN: "5-7 Hours", SI: "පැය 5-7" }, elevation: "2,243m", description: { EN: "A sacred pilgrimage site with 5,000+ steps, famous for the sunrise and the 'Ira Sewaya'.", SI: "පඩිපෙළ 5,000 කට වඩා වැඩි ප්‍රමාණයක් සහිත පූජනීය කඳු මුදුනකි. මෙහි හිරු උදාව ඉතා ප්‍රසිද්ධය." }, image: "https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-2", name: { EN: "Ella Rock", SI: "ඇල්ල රොක්" }, location: { EN: "Ella", SI: "ඇල්ල" }, difficulty: "Moderate", duration: { EN: "3-4 Hours", SI: "පැය 3-4" }, elevation: "1,350m", description: { EN: "A popular trek through rail tracks and tea estates offering panoramic views of Ella Gap.", SI: "දුම්රිය මාර්ග සහ තේ වතු හරහා දිවෙන, ඇල්ල කපොල්ලේ අලංකාර දසුන් නැරඹිය හැකි සංචාරයකි." }, image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-3", name: { EN: "Knuckles Range", SI: "නකල්ස් කඳු පන්තිය" }, location: { EN: "Matale/Kandy", SI: "මාතලේ/මහනුවර" }, difficulty: "Hard", duration: { EN: "1-3 Days", SI: "දින 1-3" }, elevation: "1,863m", description: { EN: "A UNESCO World Heritage site with diverse climates and hidden waterfalls.", SI: "යුනෙස්කෝ ලෝක උරුමයක් වන මෙම කඳු පන්තිය ජෛව විවිධත්වයෙන් සහ සැඟවුණු දිය ඇලිවලින් පිරි ඉසව්වකි." }, image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-4", name: { EN: "Horton Plains (World’s End)", SI: "හෝර්ටන් තැන්න (ලෝකාන්තය)" }, location: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" }, difficulty: "Easy", duration: { EN: "3-4 Hours", SI: "පැය 3-4" }, elevation: "2,100m", description: { EN: "A high-altitude plateau trek ending at a 880m vertical drop known as World's End.", SI: "ලෝකාන්තය ලෙස හැඳින්වෙන අඩි 2,800 ක ප්‍රපාතයකින් අවසන් වන සානුමය ගමන් පථයකි." }, image: "https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-5", name: { EN: "Pidurangala Rock", SI: "පිදුරංගල පර්වතය" }, location: { EN: "Sigiriya", SI: "සීගිරිය" }, difficulty: "Moderate", duration: { EN: "1-2 Hours", SI: "පැය 1-2" }, elevation: "200m", description: { EN: "The best vantage point to see Sigiriya Rock, offering 360-degree views of the cultural triangle.", SI: "සීගිරිය පර්වතය නැරඹීමට ඇති හොඳම ස්ථානය වන මෙය සංස්කෘතික ත්‍රිකෝණයේ අලංකාර දසුන් ලබා දෙයි." }, image: "https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-6", name: { EN: "Riverston (Knuckles)", SI: "රිවර්ස්ටන්" }, location: { EN: "Matale", SI: "මාතලේ" }, difficulty: "Moderate", duration: { EN: "2-3 Hours", SI: "පැය 2-3" }, elevation: "1,424m", description: { EN: "Often called the Mini World's End, it offers misty mountain views and windy trails.", SI: "පුංචි ලෝකාන්තය ලෙස හැඳින්වෙන මෙය මීදුමෙන් පිරි කඳුකර දසුන් සඳහා ප්‍රසිද්ධය." }, image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-7", name: { EN: "Bible Rock (Bathalegala)", SI: "බතලේගල (බයිබල් රොක්)" }, location: { EN: "Kegalle", SI: "කෑගල්ල" }, difficulty: "Moderate", duration: { EN: "3 Hours", SI: "පැය 3" }, elevation: "797m", description: { EN: "A prominent flat-topped mountain shaped like an open book.", SI: "විවෘත කළ පොතක හැඩය ඇති සමතලා මුදුනක් සහිත සුවිශේෂී කන්දකි." }, image: "https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-8", name: { EN: "Ambuluwawa Tower", SI: "අඹුළුවාව කුළුණ" }, location: { EN: "Gampola", SI: "ගම්පොළ" }, difficulty: "Easy", duration: { EN: "1 Hour", SI: "පැය 1" }, elevation: "1,087m", description: { EN: "A multi-religious biodiversity complex featuring a unique spiraling tower hike.", SI: "සුවිශේෂී වූ සර්ව ආගමික ජෛව විවිධත්ව මධ්‍යස්ථානයක් සහ කුළුණක් සහිත නැරඹුම් මධ්‍යස්ථානයකි." }, image: "https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-9", name: { EN: "Alagalla Mountain", SI: "අලගල්ල කන්ද" }, location: { EN: "Kandy/Kegalle", SI: "මහනුවර/කෑගල්ල" }, difficulty: "Hard", duration: { EN: "4-5 Hours", SI: "පැය 4-5" }, elevation: "1,140m", description: { EN: "Known as the Potato Range, it served as a natural lookout during the Kandyan Wars.", SI: "මහනුවර යුගයේදී ස්වභාවික මුරපොළක් ලෙස භාවිතා කළ සුවිශේෂී කඳු වැටියකි." }, image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-10", name: { EN: "Kabaragala Peak", SI: "කබරගල කන්ද" }, location: { EN: "Nawalapitiya", SI: "නාවලපිටිය" }, difficulty: "Hard", duration: { EN: "4 Hours", SI: "පැය 4" }, elevation: "1,500m", description: { EN: "The highest peak in the Dolosbage Range, offering sheer cliff views.", SI: "දොලොස්බාගේ කඳු පන්තියේ උසම මුදුන වන අතර ප්‍රපාතාකාර දසුන් ලබා දෙයි." }, image: "https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-11", name: { EN: "Peacock Hill", SI: "මයුරපාය කන්ද" }, location: { EN: "Pussellawa", SI: "පුස්සැල්ලාව" }, difficulty: "Easy", duration: { EN: "2 Hours", SI: "පැය 2" }, elevation: "1,518m", description: { EN: "Offers one of the best views of the Kotmale Reservoir and surroundings.", SI: "කොත්මලේ ජලාශයේ සහ අවට ප්‍රදේශයේ අලංකාර දසුන් නැරඹිය හැකි ස්ථානයකි." }, image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-12", name: { EN: "Narangala Peak", SI: "නාරංගල කන්ද" }, location: { EN: "Badulla", SI: "බදුල්ල" }, difficulty: "Moderate", duration: { EN: "3 Hours", SI: "පැය 3" }, elevation: "1,527m", description: { EN: "A golden grassy peak offering majestic views of the Uva province.", SI: "ඌව පළාතේ මනරම් දසුන් සහිත රන්වන් පැහැ තණබිම් පිරි කඳු මුදුනකි." }, image: "https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-13", name: { EN: "Great Western Mountain", SI: "ග්‍රේට් වෙස්ටර්න් කන්ද" }, location: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" }, difficulty: "Hard", duration: { EN: "5-6 Hours", SI: "පැය 5-6" }, elevation: "2,212m", description: { EN: "The 6th highest mountain in Sri Lanka, requiring a trek through deep woods.", SI: "ගැඹුරු වනාන්තර හරහා දිවෙන, ලංකාවේ 6 වන උසම කන්දයි." }, image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80" },
  { id: "h-14", name: { EN: "Little Adam's Peak", SI: "පුංචි ශ්‍රී පාදය" }, location: { EN: "Ella", SI: "ඇල්ල" }, difficulty: "Easy", duration: { EN: "1 Hour", SI: "පැය 1" }, elevation: "1,141m", description: { EN: "A must-do easy trek in Ella for amazing sunrise views.", SI: "හිරු උදාව නැරඹීමට ඇල්ලේ පිහිටි ජනප්‍රිය පහසු කඳු තරණයකි." }, image: "https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80" }
];

export const FOODS_DATA: Food[] = [
  { id: "hoppers", name: { EN: "Hoppers (Appa)", SI: "ආප්ප" }, description: { EN: "Bowl-shaped pancakes made from fermented rice flour and coconut milk.", SI: "හාල් පිටි සහ පොල් කිරි වලින් සාදන ලද බඳුනක හැඩැති මෘදු ආහාරයකි." }, image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=1200&q=80", spiciness: 1, tasteProfile: { EN: "Crispy edges with a soft center.", SI: "දාරයේ කරකුටු ගතිය සහ මැද මෘදු බව." }, ingredients: [{ EN: "Rice flour", SI: "හාල් පිටි" }, { EN: "Coconut milk", SI: "පොල් කිරි" }] },
  { id: "kottu", name: { EN: "Kottu Roti", SI: "කොත්තු රොටි" }, description: { EN: "The ultimate street food: chopped Godamba roti mixed with vegetables and spices.", SI: "ගෝදම්බ රොටි කැබලි වලට කපා එළවළු සහ කුළුබඩු සමඟ මිශ්‍ර කර සාදන ආහාරයකි." }, image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80", spiciness: 4, tasteProfile: { EN: "Hearty, spicy, and aromatic.", SI: "කුළුබඩු සුවඳ රැඳුණු තෘප්තිමත් ආහාරයකි." }, ingredients: [{ EN: "Roti", SI: "රොටි" }, { EN: "Spices", SI: "කුළුබඩු" }] },
  { id: "pol-sambol", name: { EN: "Pol Sambol", SI: "පොල් සම්බෝල" }, description: { EN: "A relish made of grated coconut, chilies, onion, and lime juice.", SI: "පොල්, මිරිස්, ලූණු සහ දෙහි යුෂ මිශ්‍ර කර සාදන ලද සම්බෝලයකි." }, image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=1200&q=80", spiciness: 5, tasteProfile: { EN: "Zesty, spicy, and tropical.", SI: "මිරිස් සහ දෙහි ඇඹුල් රසය." }, ingredients: [{ EN: "Coconut", SI: "පොල්" }, { EN: "Red Chili", SI: "රතු මිරිස්" }] },
  { id: "kiribath", name: { EN: "Kiribath (Milk Rice)", SI: "කිරි බත්" }, description: { EN: "Rice cooked with thick coconut milk, a ceremonial dish.", SI: "පොල් කිරි යොදා පිසින ලද බත්, ලාංකීය සංස්කෘතික ආහාරයකි." }, image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=1200&q=80", spiciness: 1, tasteProfile: { EN: "Creamy and mild.", SI: "පොල් කිරි රසයෙන් පිරි මෘදු ආහාරයකි." }, ingredients: [{ EN: "White Rice", SI: "සුදු හාල්" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }] },
  { id: "ambul-thiyal", name: { EN: "Fish Ambul Thiyal", SI: "මාළු ඇඹුල් තියල්" }, description: { EN: "Unique sour fish curry spiced with black pepper and Goraka.", SI: "ගම්මිරිස් සහ ගොරකා යොදා සාදන ලද විශේෂිත මාළු ව්‍යංජනයකි." }, image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=1200&q=80", spiciness: 4, tasteProfile: { EN: "Sour and peppery.", SI: "ඇඹුල් සහ ගම්මිරිස් රස මුසු වූ රසය." }, ingredients: [{ EN: "Tuna", SI: "කෙලවල්ලා" }, { EN: "Goraka", SI: "ගොරකා" }] },
  { id: "wambatu-moju", name: { EN: "Wambatu Moju", SI: "වම්බටු මෝජු" }, description: { EN: "Pickled eggplant stir-fry, a classic at weddings and celebrations.", SI: "උත්සව අවස්ථාවන්හි නැතිවම බැරි රසවත් වම්බටු ආහාරයකි." }, image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80", spiciness: 2, tasteProfile: { EN: "Sweet, sour, and tangy.", SI: "පැණිරස සහ ඇඹුල් මිශ්‍ර රසය." }, ingredients: [{ EN: "Eggplant", SI: "වම්බටු" }, { EN: "Mustard", SI: "අබ" }] },
  { id: "polos", name: { EN: "Polos Curry", SI: "පොලොස් ව්‍යංජනය" }, description: { EN: "Young jackfruit curry with a texture remarkably similar to meat.", SI: "මස් රසයට සමාන රසයක් දෙන පදමට ඉදුණු පොලොස් ව්‍යංජනයකි." }, image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=1200&q=80", spiciness: 3, tasteProfile: { EN: "Rich and fibrous.", SI: "පෝෂ්‍යදායී සහ රසවත් ආහාරයකි." }, ingredients: [{ EN: "Young Jackfruit", SI: "පොලොස්" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }] },
  { id: "lamprais", name: { EN: "Lamprais", SI: "ලම්ප්‍රයිස්" }, description: { EN: "Dutch Burgher-influenced dish of rice and meat wrapped in banana leaves.", SI: "කෙසෙල් කොළයේ ඔතා පිළිගන්වන ලන්දේසි බලපෑම සහිත ආහාරයකි." }, image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80", spiciness: 3, tasteProfile: { EN: "Savory and smokey.", SI: "සුවිශේෂී සුවඳකින් සහ රසයකින් යුක්තයි." }, ingredients: [{ EN: "Basmati Rice", SI: "බාස්මතී හාල්" }, { EN: "Banana Leaf", SI: "කෙසෙල් කොළ" }] },
  { id: "parippu", name: { EN: "Parippu (Dhal)", SI: "පරිප්පු" }, description: { EN: "The most common comfort food: red lentils cooked in coconut milk.", SI: "ලාංකීය නිවෙස්වල නිතරම පිසින පොල් කිරි මුසු පරිප්පු ව්‍යංජනයයි." }, image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=1200&q=80", spiciness: 2, tasteProfile: { EN: "Creamy and comforting.", SI: "මෘදු සහ රසවත් ගතිය." }, ingredients: [{ EN: "Red Lentils", SI: "රතු පරිප්පු" }, { EN: "Turmeric", SI: "කහ" }] },
  { id: "wattalappam", name: { EN: "Wattalappam", SI: "වටලප්පන්" }, description: { EN: "Steamed custard pudding made with jaggery and spices.", SI: "හකුරු සහ කුළුබඩු යොදා සාදන ලද රසවත් පැණිරස ආහාරයකි." }, image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80", spiciness: 1, tasteProfile: { EN: "Sweet and spicy (cardamom).", SI: "හකුරු සහ කරදමුංගු රසය." }, ingredients: [{ EN: "Jaggery", SI: "හකුරු" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }] },
  { id: "kokis", name: { EN: "Kokis", SI: "කොකිස්" }, description: { EN: "Deep-fried, rosette-shaped snack iconic to New Year celebrations.", SI: "අලුත් අවුරුදු කාලයට සාදන ලද හැඩැති කරකුටු කෑමකි." }, image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=1200&q=80", spiciness: 1, tasteProfile: { EN: "Crunchy and mild.", SI: "කරකුටු සහ සැහැල්ලු රසය." }, ingredients: [{ EN: "Rice Flour", SI: "හාල් පිටි" }, { EN: "Oil", SI: "තෙල්" }] },
  { id: "pittu", name: { EN: "Pittu", SI: "පිට්ටු" }, description: { EN: "Steamed cylinders of ground rice layered with grated coconut.", SI: "හාල් පිටි සහ ගාන ලද පොල් මිශ්‍ර කර සාදන ලද ආහාරයකි." }, image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=1200&q=80", spiciness: 1, tasteProfile: { EN: "Dry and textured.", SI: "කැබලි සහිත සහ මෘදු රසය." }, ingredients: [{ EN: "Rice Flour", SI: "හාල් පිටි" }, { EN: "Coconut", SI: "පොල්" }] },
  { id: "idiyappam", name: { EN: "String Hoppers", SI: "ඉඳිආප්ප" }, description: { EN: "Steamed rice flour noodles pressed into small circular mats.", SI: "හාල් පිටි වලින් සාදන ලද නූල් වැනි මෘදු ආහාරයකි." }, image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=1200&q=80", spiciness: 1, tasteProfile: { EN: "Light and airy.", SI: "සැහැල්ලු සහ මෘදු රසය." }, ingredients: [{ EN: "Rice Flour", SI: "හාල් පිටි" }, { EN: "Salt", SI: "ලුණු" }] },
  { id: "pol-rotu", name: { EN: "Pol Roti", SI: "පොල් රොටි" }, description: { EN: "Rustic flatbread with coconut and green chili mixed into the dough.", SI: "ගාන ලද පොල් සහ අමුමිරිස් මිශ්‍ර කර සාදන ලද රොටි වර්ගයකි." }, image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80", spiciness: 2, tasteProfile: { EN: "Firm and tropical.", SI: "තද ගතිය සහ පොල් රසය." }, ingredients: [{ EN: "Wheat Flour", SI: "තිරිඟු පිටි" }, { EN: "Coconut", SI: "පොල්" }] },
  { id: "pani-walalu", name: { EN: "Pani Walalu", SI: "පැණි වළලු" }, description: { EN: "Sweet, honey-soaked coils of deep-fried dough.", SI: "පැණි දමා සාදන ලද වළලු හැඩැති රසකැවිල්ලකි." }, image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=1200&q=80", spiciness: 1, tasteProfile: { EN: "Syrupy and rich.", SI: "අධික පැණිරස සහ මෘදු රසය." }, ingredients: [{ EN: "Urad Dhal", SI: "උඳු" }, { EN: "Treacle", SI: "පැණි" }] }
];

export const TEA_DATA: TeaExperience[] = [
  { id: "black-tea", name: { EN: "Ceylon Black Tea", SI: "ලංකා කළු තේ" }, description: { EN: "The world-famous full-bodied tea known for its crisp, citrusy aroma.", SI: "මුළු ලොවම දන්නා ලාංකීය අනන්‍යතාවය විදහා දක්වන කළු තේ." }, image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80", type: 'variety', fact: { EN: "Sri Lanka is the world's 4th largest tea producer.", SI: "ශ්‍රී ලංකාව ලොව සිව්වන විශාලතම තේ නිෂ්පාදකයා වේ." } },
  { id: "liptons-seat", name: { EN: "Lipton’s Seat", SI: "ලිප්ටන් සීට්" }, description: { EN: "The precise spot where Sir Thomas Lipton surveyed his vast tea empire.", SI: "තෝමස් ලිප්ටන් සාමිවරයා සිය තේ වතු අධිරාජ්‍යය නැරඹූ සුවිශේෂී ස්ථානයයි." }, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80", type: 'location', fact: { EN: "On a clear day, you can see the ocean from this high peak.", SI: "පැහැදිලි දිනයකදී මෙම මුදුනේ සිට මුහුද පවා දැකගත හැකිය." } },
  { id: "golden-valley", name: { EN: "Golden Valley", SI: "රන් නිම්නය" }, description: { EN: "Bogawantalawa valley, home to the highest quality tea in the world.", SI: "ලොව උසස්ම තේ නිපදවන බගවන්තලාව නිම්නයයි." }, image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80", type: 'location', fact: { EN: "Known as the Golden Valley for its rich soil.", SI: "මෙහි පසෙහි ඇති සාරවත් බව නිසා රන් නිම්නය ලෙස හැඳින්වේ." } },
  { id: "white-tea", name: { EN: "Virgin White Tea", SI: "වර්ජින් සුදු තේ" }, description: { EN: "Hand-plucked and processed without ever being touched by human hands.", SI: "මිනිස් අතින් ස්පර්ශ නොවී පිරිසිදුව නිපදවන ලොව මිල අධිකම තේ වර්ගයකි." }, image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80", type: 'variety', fact: { EN: "Processed at the Handunugoda Tea Estate.", SI: "හඳුනුගොඩ තේ වතුයායේදී මෙය නිපදවනු ලැබේ." } },
  { id: "labookellie", name: { EN: "Labookellie Centre", SI: "ලබුකැලේ තේ මධ්‍යස්ථානය" }, description: { EN: "The oldest tea factory experience in the high altitudes of Nuwara Eliya.", SI: "නුවරඑළිය කඳුකරයේ පිහිටි පැරණිතම තේ කර්මාන්තශාලා අත්දැකීමයි." }, image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80", type: 'process', fact: { EN: "Situated at 5,000 feet above sea level.", SI: "මුදු මට්ටමේ සිට අඩි 5,000 ක් ඉහළින් පිහිටා ඇත." } },
  { id: "tea-museum", name: { EN: "Ceylon Tea Museum", SI: "ලංකා තේ කෞතුකාගාරය" }, description: { EN: "Housed in the former Hanthana Tea Factory, tracing 150 years of history.", SI: "හන්තාන පැරණි තේ කර්මාන්තශාලාවේ පිහිටි තේ ඉතිහාසය විදහා දක්වන කෞතුකාගාරයයි." }, image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80", type: 'location', fact: { EN: "Exhibits machinery from the James Taylor era.", SI: "ජේම්ස් ටේලර් යුගයේ යන්ත්‍ර සූත්‍ර මෙහි දැකගත හැකිය." } },
  { id: "pedro-estate", name: { EN: "Pedro Tea Estate", SI: "පෙඩ්රෝ තේ වතුයාය" }, description: { EN: "Famous for 'Lovers Leap' tea, grown on the slopes of Pidurutalagala.", SI: "පිදුරුතලාගල කඳු බෑවුම්වල වගා කරන 'ලවර්ස් ලීප්' තේ සඳහා ප්‍රසිද්ධය." }, image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80", type: 'location', fact: { EN: "Tea is plucked here only in the morning mist.", SI: "මෙහි තේ දලු නෙලනු ලබන්නේ උදෑසන මීදුම සහිත වෙලාවට පමණි." } },
  { id: "blue-field", name: { EN: "Blue Field Factory", SI: "බ්ලූ ෆීල්ඩ් තේ කර්මාන්තශාලාව" }, description: { EN: "A sprawling estate offering insight into the Orthodox tea process.", SI: "සාම්ප්‍රදායික තේ නිෂ්පාදන ක්‍රියාවලිය පිළිබඳ දැනුමක් ලබා දෙන විශාල වතුයායකි." }, image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80", type: 'process', fact: { EN: "One of the most visited tea sites in Ramboda.", SI: "රම්බොඩ ප්‍රදේශයේ වැඩිම පිරිසක් නරඹන තේ කර්මාන්තශාලාවකි." } },
  { id: "st-clairs", name: { EN: "St. Clair's View", SI: "ශාන්ත ක්ලෙයාර් නැරඹුම් මධ්‍යස්ථානය" }, description: { EN: "The 'Little Niagara of Lanka' waterfall surrounded by lush tea tiers.", SI: "හරිත පැහැ තේ වතුවලින් වට වූ 'ලංකාවේ පුංචි නයගරා' ලෙස හැඳින්වෙන දිය ඇල්ල අසල පිහිටි ස්ථානයයි." }, image: "https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80", type: 'location', fact: { EN: "Famous for the Pekoe grade tea processing.", SI: "පෙකෝ ශ්‍රේණියේ තේ නිෂ්පාදනය සඳහා ප්‍රසිද්ධය." } },
  { id: "dambatenne", name: { EN: "Dambatenne Factory", SI: "දඹතැන්න තේ කර්මාන්තශාලාව" }, description: { EN: "Built by Sir Thomas Lipton in 1890, it remains one of the largest on the island.", SI: "1890 දී තෝමස් ලිප්ටන් සාමිවරයා විසින් ඉදිකරන ලද දිවයිනේ විශාලතම කර්මාන්තශාලාවකි." }, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80", type: 'process', fact: { EN: "The word 'Lipton Tea' was first coined here.", SI: "'ලිප්ටන් තේ' යන නාමය ප්‍රථමයෙන්ම බිහිවූයේ මෙහිදීය." } },
  { id: "halpewatte", name: { EN: "Halpewatte Experience", SI: "හල්පේවත්ත තේ අත්දැකීම" }, description: { EN: "A high-fidelity modern tea experience in the hills of Ella.", SI: "ඇල්ල කඳුකරයේ පිහිටි නූතන තේ නිෂ්පාදන අත්දැකීමක් ලබා දෙන ස්ථානයකි." }, image: "https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80", type: 'process', fact: { EN: "Features a rooftop tea tasting room with panoramic views.", SI: "වටපිටාව නැරඹිය හැකි උඩුමහලේ තේ රස බැලීමේ කුටියකින් සමන්විත වේ." } }
];

export const PHRASEBOOK_DATA: Phrase[] = [
  { id: '1', english: "Hello / May you live long", sinhala: "ආයුබෝවන්", transliteration: "Ayubowan", category: 'greeting' },
  { id: '2', english: "Thank you", sinhala: "ස්තූතියි", transliteration: "Stutiyi", category: 'greeting' },
  { id: '3', english: "How much is this?", sinhala: "මේක කීයද?", transliteration: "Meka keeyada?", category: 'shopping' },
  { id: '4', english: "Where is the bathroom?", sinhala: "වැසිකිළිය කොහෙද?", transliteration: "Vasikiliya koheda?", category: 'emergency' },
  { id: '5', english: "Very tasty!", sinhala: "හරි රසයි!", transliteration: "Hari rasai!", category: 'dining' },
  { id: '6', english: "I don't understand.", sinhala: "මට තේරෙන්නේ නැහැ.", transliteration: "Mata therenne ne.", category: 'emergency' },
  { id: '7', english: "Excuse me / Sorry", sinhala: "සමා වෙන්න.", transliteration: "Sama wenna.", category: 'greeting' },
  { id: '8', english: "Please", sinhala: "කරුණාකරලා.", transliteration: "Karunakarala.", category: 'greeting' },
  { id: '9', english: "Can you help me?", sinhala: "මට උදව් කරන්න පුළුවන්ද?", transliteration: "Mata udavu karanna puluvanda?", category: 'emergency' },
  { id: '10', english: "Stop here.", sinhala: "මෙතන නවත්වන්න.", transliteration: "Methana navaththanna.", category: 'dining' },
  { id: '11', english: "Yes / No", sinhala: "ඔව් / නැහැ", transliteration: "Ow / Ne", category: 'greeting' },
  { id: '12', english: "Friend", sinhala: "යාලුවා", transliteration: "Yaluwa", category: 'greeting' }
];

export const DESTINATIONS: Destination[] = [
  { id: "sigiriya", name: { EN: "Sigiriya Lion Rock", SI: "සීගිරිය සිංහගිරිය" }, category: "ancient", image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1920&q=80", gallery: ["https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80"], videoUrl: "https://www.youtube.com/shorts/j4ln2UNOnZk", history: { EN: "Sigiriya, the 'Lion Rock', is a UNESCO World Heritage site and one of the best-preserved examples of ancient urban planning.", SI: "සීගිරිය හෙවත් 'සිංහගිරිය' යනු යුනෙස්කෝ ලෝක උරුම අඩවියක් වන අතර පැරණි නගර නිර්මාණකරණයේ විශිෂ්ටතම නිදසුනකි." }, shortStory: { EN: "The 8th Wonder of the World – A fortress in the sky.", SI: "ලොව අටවන පුදුමය - අහස උසට විහිදුණු බලකොටුවකි." }, bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" }, tips: [{ EN: "Climb early morning to avoid the heat.", SI: "රස්නය මග හැරීමට උදෑසන කාලයේ නැගීම ආරම්භ කරන්න." }], location: "Matale District" },
  { id: "polonnaruwa", name: { EN: "Ancient City of Polonnaruwa", SI: "පොළොන්නරුව පැරණි නගරය" }, category: "ancient", image: "https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80"], history: { EN: "The second most ancient kingdom of Sri Lanka, Polonnaruwa features remains of garden-cities and incredible stone sculptures.", SI: "ශ්‍රී ලංකාවේ දෙවන පැරණිතම රාජධානිය වන පොළොන්නරුව, උද්‍යාන නගරවල ශේෂයන් සහ විස්මිත ගල් කැටයම් වලින් සමන්විත වේ." }, shortStory: { EN: "Where stone tells the story of an empire.", SI: "ගල් කැටයම් අධිරාජ්‍යයක කතාව පවසන තැන." }, bestTime: { EN: "July to September", SI: "ජූලි සිට සැප්තැම්බර් දක්වා" }, tips: [{ EN: "Rent a bicycle to explore the massive ruins.", SI: "නටබුන් නැරඹීමට බයිසිකලයක් කුලියට ගන්න." }], location: "Polonnaruwa District" },
  { id: "anuradhapura", name: { EN: "Sacred City of Anuradhapura", SI: "අනුරාධපුර පූජනීය නගරය" }, category: "ancient", image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80"], history: { EN: "The first capital and a beacon of Buddhist civilization for over a millennium.", SI: "වසර දහසකට වැඩි කාලයක් බෞද්ධ ශිෂ්ටාචාරයේ කේන්ද්‍රස්ථානය වූ ප්‍රථම අගනුවරයි." }, shortStory: { EN: "The heart of Sri Lanka's spiritual history.", SI: "ශ්‍රී ලංකාවේ ආධ්‍යාත්මික ඉතිහාසයේ හදවත." }, bestTime: { EN: "January to May", SI: "ජනවාරි සිට මැයි දක්වා" }, tips: [{ EN: "Remove shoes and hats when entering temples.", SI: "පන්සල් වලට ඇතුළු වන විට සපත්තු සහ තොප්පි ගලවන්න." }], location: "Anuradhapura District" },
  { id: "yala", name: { EN: "Yala National Park", SI: "යාල ජාතික උද්‍යානය" }, category: "wildlife", image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"], history: { EN: "Sri Lanka's most famous park, boasting the highest leopard density in the world.", SI: "ලොව වැඩිම දිවි ඝනත්වයක් සහිත ශ්‍රී ලංකාවේ වඩාත් ප්‍රසිද්ධ ජාතික උද්‍යානයයි." }, shortStory: { EN: "Home of the spotted king.", SI: "දිවි රජුගේ නිවහන." }, bestTime: { EN: "February to June", SI: "පෙබරවාරි සිට ජූනි දක්වා" }, tips: [{ EN: "Enter at dawn for the best chance to spot a leopard.", SI: "දිවියන් දැකීමට උදෑසනම උද්‍යානයට ඇතුළු වන්න." }], location: "Hambantota District" },
  { id: "kumana", name: { EN: "Kumana Bird Sanctuary", SI: "කුමන පක්ෂි අභයභූමිය" }, category: "wildlife", image: "https://images.unsplash.com/photo-1549414002-36365a6b0933?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1549414002-36365a6b0933?auto=format&fit=crop&w=1200&q=80"], history: { EN: "Renowned for its avifauna, especially the large flocks of migratory waterfowl.", SI: "විශේෂයෙන්ම සංක්‍රමණික පක්ෂීන් සඳහා ප්‍රසිද්ධ දිවයිනේ සුවිශේෂී පක්ෂි රක්ෂිතයකි." }, shortStory: { EN: "A paradise for bird watchers.", SI: "පක්ෂි නිරීක්ෂකයින්ගේ පාරාදීසයකි." }, bestTime: { EN: "April to July", SI: "අප්‍රේල් සිට ජූලි දක්වා" }, tips: [{ EN: "Bring a pair of high-quality binoculars.", SI: "උසස් තත්ත්වයේ බිනෝකුලර් යුවලක් රැගෙන එන්න." }], location: "Ampara District" },
  { id: "wasgamuwa", name: { EN: "Wasgamuwa National Park", SI: "වස්ගමුව ජාතික උද්‍යානය" }, category: "wildlife", image: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80"], history: { EN: "Known for its large herds of Sri Lankan elephants and ancient ruins hidden in the bush.", SI: "විශාල අලි රංචු සහ වනාන්තරය මැද සැඟවුණු පැරණි නටබුන් සඳහා ප්‍රසිද්ධය." }, shortStory: { EN: "Untouched wilderness in the heartland.", SI: "මැද රට පිහිටි ස්වභාවික වන පියසකි." }, bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" }, tips: [{ EN: "Quiet vehicles increase sighting chances.", SI: "සන්සුන්ව ගමන් කිරීම සතුන් දැකීමට ඇති ඉඩකඩ වැඩි කරයි." }], location: "Matale/Polonnaruwa" },
  { id: "mirissa", name: { EN: "Mirissa Marine Zone", SI: "මිරිස්ස සාගර කලාපය" }, category: "wildlife", image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"], history: { EN: "Global hotspot for Blue Whale and Sperm Whale sightings during migration.", SI: "නිල් තල්මසුන් සහ මෝරුන් නැරඹීම සඳහා ලොව ප්‍රමුඛතම ස්ථානයකි." }, shortStory: { EN: "Encounter the giants of the deep.", SI: "සාගරයේ යෝධයන් හමුවන්න." }, bestTime: { EN: "November to April", SI: "නොවැම්බර් සිට අප්‍රේල් දක්වා" }, tips: [{ EN: "Go with responsible whale-watching operators.", SI: "වගකීම් සහගත සංචාරක සේවාවන් තෝරාගන්න." }], location: "Matara District" },
  { id: "ella", name: { EN: "Ella Highlands", SI: "ඇල්ල කඳුකරය" }, category: "mountains", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80", gallery: ["https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80"], history: { EN: "A mountain town famous for its iconic Nine Arch Bridge and breathtaking hiking trails.", SI: "ඓතිහාසික ආරුක්කු නවය පාලම සහ මනරම් කඳු තරණ මාවත් නිසා ප්‍රසිද්ධ කඳුකර නගරයකි." }, shortStory: { EN: "The soul of the tea country.", SI: "තේ කලාපයේ ආත්මය." }, bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" }, tips: [{ EN: "Don't miss the sunrise from Little Adam's Peak.", SI: "පුංචි ශ්‍රී පාදයේ සිට හිරු උදාව නැරඹීමට අමතක නොකරන්න." }], location: "Badulla District" }
];

export const FESTIVALS_DATA: Festival[] = [
  { id: "fest-1", name: { EN: "Vesak Festival", SI: "වෙසක් උත්සවය" }, date: { EN: "May (Full Moon)", SI: "මැයි (පුර පසළොස්වක)" }, description: { EN: "Commemorating the birth, enlightenment, and passing of Lord Buddha with lights and lanterns.", SI: "බුදුරජාණන් වහන්සේගේ තෙමඟුල සැමරීම සඳහා පහන් සහ තොරණින් සැරසෙන උත්සවයකි." }, image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80", significance: { EN: "The most important Buddhist festival in the island.", SI: "දිවයිනේ වැදගත්ම බෞද්ධ උත්සවයයි." } },
  { id: "fest-2", name: { EN: "Kandy Esala Perahera", SI: "මහනුවර ඇසළ පෙරහැර" }, date: { EN: "July / August", SI: "ජූලි / අගෝස්තු" }, description: { EN: "A grand procession featuring elephants and dancers to honor the Sacred Tooth Relic.", SI: "දන්ත ධාතූන් වහන්සේ උදෙසා පවත්වන ලොව විචිත්‍රවත්ම පෙරහැරකි." }, image: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80", significance: { EN: "One of the oldest and grandest festivals in Asia.", SI: "ආසියාවේ පැරණිතම සහ විශාලතම උත්සවයකි." } },
  { id: "fest-3", name: { EN: "Sinhala & Tamil New Year", SI: "සිංහල හා දෙමළ අලුත් අවුරුද්ද" }, date: { EN: "April 13-14", SI: "අප්‍රේල් 13-14" }, description: { EN: "A major harvest festival celebrated with traditional games, food, and rituals.", SI: "සාම්ප්‍රදායික ක්‍රීඩා, ආහාර සහ චාරිත්‍ර වාරිත්‍ර සමඟ සමරනු ලබන සංස්කෘතික උත්සවයයි." }, image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Symbolizes national unity and the end of the harvest season.", SI: "ජාතික සමගිය සහ අස්වනු නෙලීමේ කාලය අවසන් වීම සංකේතවත් කරයි." } },
  { id: "fest-4", name: { EN: "Thai Pongal", SI: "තායි පොංගල්" }, date: { EN: "January 14", SI: "ජනවාරි 14" }, description: { EN: "A Hindu harvest festival dedicated to the Sun God, Surya.", SI: "සූර්ය දෙවියන්ට කෘතගුණ දැක්වීම සඳහා පවත්වන හින්දු අස්වනු මංගල්‍යයකි." }, image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Celebrating prosperity and a bountiful harvest.", SI: "සෞභාග්‍යය සහ සාර්ථක අස්වැන්න සැමරීම සිදු කරයි." } },
  { id: "fest-5", name: { EN: "Poson Perahera", SI: "පොසොන් පෙරහැර" }, date: { EN: "June (Full Moon)", SI: "ජූනි (පුර පසළොස්වක)" }, description: { EN: "Celebrates the arrival of Buddhism in Sri Lanka at Mihintale.", SI: "ශ්‍රී ලංකාවට බුදුදහම පැමිණීම සැමරීම සඳහා මිහින්තලයේ පැවැත්වේ." }, image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Commemorates the spiritual conversion of the nation.", SI: "ජාතියේ ආධ්‍යාත්මික පරිවර්තනය සැමරීම සිදු කරයි." } },
  { id: "fest-6", name: { EN: "Navam Perahera", SI: "නවම් පෙරහැර" }, date: { EN: "February", SI: "පෙබරවාරි" }, description: { EN: "A majestic pageant held at Gangaramaya Temple, Colombo.", SI: "කොළඹ ගංගාරාම විහාරස්ථානයේ පැවැත්වෙන අලංකාර පෙරහැරකි." }, image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80", significance: { EN: "A showcase of urban Buddhist culture and tradition.", SI: "නාගරික බෞද්ධ සංස්කෘතියේ සහ සම්ප්‍රදායේ විචිත්‍රවත් ප්‍රදර්ශනයකි." } },
  { id: "fest-7", name: { EN: "Deepavali", SI: "දීපාවලි" }, date: { EN: "October/November", SI: "ඔක්තෝබර්/නොවැම්බර්" }, description: { EN: "The festival of lights celebrating the victory of light over darkness.", SI: "අඳුර පරදා ආලෝකය ජය ගැනීම සැමරීම සඳහා පවත්වන ආලෝක උත්සවයකි." }, image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80", significance: { EN: "The most important festival for the Hindu community.", SI: "හින්දු ජනතාවගේ වැදගත්ම උත්සවයකි." } },
  { id: "fest-8", name: { EN: "Kataragama Festival", SI: "කතරගම උත්සවය" }, date: { EN: "July", SI: "ජූලි" }, description: { EN: "Multi-religious festival featuring walking pilgrimages and rituals.", SI: "පා ගමනින් පැමිණෙන වන්දනාකරුවන් සහ විවිධ චාරිත්‍ර රැසක් සහිත සර්ව ආගමික උත්සවයකි." }, image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80", significance: { EN: "A symbol of religious harmony in the south.", SI: "දකුණු පළාතේ ආගමික සහජීවනයේ සංකේතයකි." } },
  { id: "fest-9", name: { EN: "Madhu Festival", SI: "මඩු මංගල්‍යය" }, date: { EN: "July/August", SI: "ජූලි/අගෝස්තු" }, description: { EN: "Annual Catholic pilgrimage to the Our Lady of Madhu Shrine.", SI: "මඩු සිද්ධස්ථානය වෙත වසරකට වරක් පවත්වන කතෝලික වන්දනා උත්සවයකි." }, image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80", significance: { EN: "The holiest Catholic shrine in Sri Lanka.", SI: "ලංකාවේ පූජනීයම කතෝලික සිද්ධස්ථානයයි." } },
  { id: "fest-10", name: { EN: "Hikkaduwa Beach Fest", SI: "හික්කඩුව වෙරළ උත්සවය" }, date: { EN: "August", SI: "අගෝස්තු" }, description: { EN: "A modern celebration of music, water sports, and beach culture.", SI: "සංගීතය, ජල ක්‍රීඩා සහ වෙරළ සංස්කෘතිය සැමරීම සඳහා පවත්වන නවීන උත්සවයකි." }, image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80", significance: { EN: "Lanka's biggest beach party.", SI: "ලංකාවේ විශාලතම වෙරළ සාදය." } }
];

export const HERITAGE_MUSIC_DATA: HeritageMusic[] = [
  { id: "drum-1", type: "instrument", name: { EN: "Geta Beraya", SI: "ගැට බෙරය" }, description: { EN: "A double-headed drum which is the main instrument used in Kandyan dancing.", SI: "උඩරට නැටුම් කලාවේ ප්‍රධානතම වාද්‍ය භාණ්ඩය වන මෙය දෙපසින්ම වැයිය හැකි බෙරයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Kandy", SI: "මහනුවර" }, significance: { EN: "Essential for religious and cultural processions.", SI: "ආගමික සහ සංස්කෘතික පෙරහැර සඳහා අත්‍යවශ්‍ය වේ." } },
  { id: "inst-2", type: "instrument", name: { EN: "Horanewa", SI: "හොරණෑව" }, description: { EN: "An oboe-like instrument used in traditional Buddhist ceremonies.", SI: "බෞද්ධ ආගමික වත්පිළිවෙත් වලදී භාවිතා කරන පාරම්පරික සුළං වාද්‍ය භාණ්ඩයකි." }, image: "https://images.unsplash.com/photo-1599908608021-b6d5ff59430e?auto=format&fit=crop&w=800&q=80", origin: { EN: "Ancient Temples", SI: "පුරාණ විහාරස්ථාන" }, significance: { EN: "Announces the start of sacred rituals.", SI: "පූජනීය වත්පිළිවෙත් ආරම්භය සනිටුහන් කරයි." } },
  { id: "inst-3", type: "instrument", name: { EN: "Ravanahatha", SI: "රාවණහත්ථ" }, description: { EN: "An ancient bowed string instrument believed to be invented by King Ravana.", SI: "රාවණ රජු විසින් නිර්මාණය කරන ලදැයි සැලකෙන ඉතා පැරණි කම්බි වාද්‍ය භාණ්ඩයකි." }, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80", origin: { EN: "Ramayana Era", SI: "රාමායණ යුගය" }, significance: { EN: "One of the world's oldest ancestors of the violin.", SI: "වයලීනයේ ලොව පැරණිතම මුතුන් මිත්තෙකු ලෙස සැලකේ." } },
  { id: "drum-4", type: "instrument", name: { EN: "Yak Beraya", SI: "යක් බෙරය" }, description: { EN: "A cylindrical drum used in low-country devil dancing rituals (Tovil).", SI: "පහතරට ශාන්තිකර්ම සහ තොවිල් වලදී භාවිතා කරන බෙරයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Southern Coast", SI: "දකුණු වෙරළ තීරය" }, significance: { EN: "Drives the rhythmic energy of exorcism ceremonies.", SI: "යක් තොවිල් වල ශක්තිය සහ රිද්මය මෙහෙයවයි." } },
  { id: "drum-5", type: "instrument", name: { EN: "Dawula", SI: "දවුල" }, description: { EN: "Commonly used in Sabaragamuwa dancing styles and temple rituals.", SI: "සබරගමු නැටුම් ශෛලීන් සහ විහාරස්ථාන වල හේවිසි පූජාවන් සඳහා භාවිතා වේ." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Sabaragamuwa", SI: "සබරගමුව" }, significance: { EN: "An integral part of the 'Hevisi' ensemble.", SI: "හේවිසි කණ්ඩායමේ අත්‍යවශ්‍ය වාද්‍ය භාණ්ඩයකි." } },
  { id: "drum-6", type: "instrument", name: { EN: "Thammattama", SI: "තම්මැට්ටම" }, description: { EN: "Twin-drum played with two curved sticks, producing a distinct flat sound.", SI: "වක්‍ර වූ කෝටු දෙකකින් වයන, සුවිශේෂී ශබ්දයක් ඇති නිවුන් බෙරයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Temple Rituals", SI: "විහාර චාරිත්‍ර" }, significance: { EN: "Adds high-pitched rhythmic layers to temple music.", SI: "විහාර සංගීතයට උස් රිද්මයානුකූල ස්තරයන් එක් කරයි." } },
  { id: "drum-7", type: "instrument", name: { EN: "Udekkiya", SI: "උඩැක්කිය" }, description: { EN: "A small hourglass-shaped drum, often accompanied by singing.", SI: "ගායනයට සහාය වන කුඩා ඩමරු හැඩැති වාද්‍ය භාණ්ඩයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Upcountry Hills", SI: "උඩරට කඳුකරය" }, significance: { EN: "Central to folk and ritual dancing.", SI: "ජන සහ චාරිත්‍රානුකූල නැටුම් වල මධ්‍යය වේ." } },
  { id: "drum-8", type: "instrument", name: { EN: "Bummadiya", SI: "බුම්මැඩිය" }, description: { EN: "A pot-shaped drum made of clay and iguana skin.", SI: "මැටි වලින් සහ තලගොයි හමෙන් සාදන ලද කළගෙඩි හැඩැති බෙරයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Rural Farms", SI: "ග්‍රාමීය කෙත්බිම්" }, significance: { EN: "Played during harvest festivals.", SI: "අස්වනු උත්සව කාල වලදී වයනු ලැබේ." } },
  { id: "song-2", type: "song", name: { EN: "Gajaga Vannama", SI: "ගජගා වන්නම" }, description: { EN: "Folk song describing the majestic movements of an elephant.", SI: "අලියාගේ ගාම්භීර ගමන් විලාසය විස්තර කරන ජන ගීතයකි." }, image: "https://images.unsplash.com/photo-1549414002-36365a6b0933?auto=format&fit=crop&w=800&q=80", origin: { EN: "Kandyan Courts", SI: "මහනුවර රාජ සභාව" }, significance: { EN: "One of the 18 classical Vannams.", SI: "සම්භාව්‍ය වන්නම් 18 න් එකකි." } },
  { id: "song-3", type: "song", name: { EN: "Mayura Vannama", SI: "මයුරා වන්නම" }, description: { EN: "Poetic song mimicking the graceful dance of a peacock.", SI: "මයුරෙකුගේ අලංකාර නර්තනය අනුකරණය කරන කාව්‍යමය ගීතයකි." }, image: "https://images.unsplash.com/photo-1582236968856-118f6735c05e?auto=format&fit=crop&w=800&q=80", origin: { EN: "Ancient Temples", SI: "පුරාණ විහාරස්ථාන" }, significance: { EN: "Celebrates the beauty of the bird of Kartikeya.", SI: "කතරගම දෙවියන්ගේ වාහනය වන මොනරාගේ සුන්දරත්වය සමරයි." } },
  { id: "song-4", type: "song", name: { EN: "Pel Kavi", SI: "පැල් කවි" }, description: { EN: "Songs sung by farmers guarding crops at night from watch huts.", SI: "රාත්‍රී කාලයේ පැල් රකිමින් ගොවියන් ගායනා කරන කවි." }, image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", origin: { EN: "Paddy Fields", SI: "කුඹුරු යායවල්" }, significance: { EN: "Wards off sleep and loneliness during watch.", SI: "පැල් රැකීමේදී ඇතිවන තනිකම සහ නිදිමත මඟ හරවා ගනී." } },
  { id: "song-5", type: "song", name: { EN: "Karaththa Kavi", SI: "කරත්ත කවි" }, description: { EN: "Rhythmic chants of cart drivers on long journeys through the jungle.", SI: "දීර්ඝ ගමන් වල යෙදෙන කරත්තකරුවන් ගායනා කරන රිද්මයානුකූල කවි." }, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80", origin: { EN: "Ancient Trade Routes", SI: "පැරණි වෙළඳ මාවත්" }, significance: { EN: "Eases the toil of both the driver and the bulls.", SI: "කරත්තකරුගේ සහ ගවයන්ගේ විඩාව සමනය කරයි." } },
  { id: "song-6", type: "song", name: { EN: "Pathala Kavi", SI: "පතල් කවි" }, description: { EN: "Melancholic songs of gemstone miners deep underground.", SI: "පතල් පතුලේ මැණික් සොයන පතල්කරුවන්ගේ ශෝකී ජන කවි." }, image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80", origin: { EN: "Ratnapura", SI: "රත්නපුර" }, significance: { EN: "Expresses the dangers and hopes of the mining life.", SI: "පතල් ජීවිතයේ අවදානම සහ බලාපොරොත්තුව ප්‍රකාශ කරයි." } },
  { id: "inst-9", type: "instrument", name: { EN: "Hakgediya", SI: "හක්ගෙඩිය" }, description: { EN: "A conch shell used to produce a loud, holy sound.", SI: "පූජනීය සහ ගාම්භීර ශබ්දයක් නැගීමට භාවිතා කරන හක්බෙල්ලෙකි." }, image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=800&q=80", origin: { EN: "Temple Rituals", SI: "විහාර චාරිත්‍ර" }, significance: { EN: "Purifies the atmosphere during spiritual events.", SI: "ආධ්‍යාත්මික උත්සව වලදී වටපිටාව පිරිසිදු කරයි." } },
  { id: "inst-10", type: "instrument", name: { EN: "Pantheruwa", SI: "පන්තේරුව" }, description: { EN: "A circular frame with small brass cymbals, used by elite dancers.", SI: "කුඩා තලම්පොට සවිකරන ලද රවුම් රාමුවකි. මෙය දක්ෂ නර්තන ශිල්පීන් භාවිතා කරයි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Kandyan Dance", SI: "උඩරට නැටුම්" }, significance: { EN: "Used in energetic battlefield victory dances.", SI: "ජයග්‍රාහී සටන් නර්තන වලදී භාවිතා වේ." } },
  { id: "inst-11", type: "instrument", name: { EN: "Thalampota", SI: "තාලම්පොට" }, description: { EN: "Finger cymbals used to maintain the tempo of songs and dance.", SI: "ගීත සහ නැටුම් වල රිද්මය පවත්වා ගැනීමට භාවිතා කරන කුඩා තාලම්පොට යුගලයකි." }, image: "https://images.unsplash.com/photo-1541913007727-4663f21d9620?auto=format&fit=crop&w=800&q=80", origin: { EN: "Traditional Ensembles", SI: "පාරම්පරික වාදක කණ්ඩායම්" }, significance: { EN: "The timekeeper of the heritage orchestra.", SI: "සම්ප්‍රදායික වාද්‍ය වෘන්දයේ කාලය පාලනය කරන්නායි." } },
  { id: "inst-12", type: "instrument", name: { EN: "Saraswati Veena", SI: "වීණාව" }, description: { EN: "A classical string instrument representing wisdom and art.", SI: "ප්‍රඥාව සහ කලාව නිරූපණය කරන සම්භාව්‍ය කම්බි වාද්‍ය භාණ්ඩයකි." }, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80", origin: { EN: "Classical Foundations", SI: "සම්භාව්‍ය පදනම" }, significance: { EN: "Used in devotional music performances.", SI: "භක්ති සංගීත ප්‍රසංග සඳහා භාවිතා වේ." } },
  { id: "inst-13", type: "instrument", name: { EN: "Esraj", SI: "එස්රාජ්" }, description: { EN: "A bowed string instrument often heard in melancholic melodies.", SI: "ශෝකී රිද්මයන් සඳහා නිතර භාවිතා කරන විල් වාද්‍ය භාණ්ඩයකි." }, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80", origin: { EN: "Cultural Melodies", SI: "සංස්කෘතික රිද්මයන්" }, significance: { EN: "Blends Indian and Sri Lankan classical influences.", SI: "ඉන්දියානු සහ ශ්‍රී ලාංකීය සම්භාව්‍ය බලපෑම් එකට මුසු කරයි." } },
  { id: "inst-14", type: "instrument", name: { EN: "Seraphina", SI: "සෙරපිනාව" }, description: { EN: "A hand-pumped organ widely used in light classical music.", SI: "සැහැල්ලු සම්භාව්‍ය සංගීතයේ බහුලව භාවිතා වන අතින් ක්‍රියාත්මක කරන ඕගනයකි." }, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80", origin: { EN: "Theater & Folk", SI: "නාට්‍ය සහ ජන සංගීතය" }, significance: { EN: "The primary melodic support for vocalists.", SI: "ගායකයින්ගේ ප්‍රධාන තනු සහායකයා වේ." } },
  { id: "song-7", type: "song", name: { EN: "Nurthi Gee", SI: "නූර්ති ගී" }, description: { EN: "Theatrical songs from the early 20th century Sri Lankan stage.", SI: "20 වන සියවසේ මුල් භාගයේ ලාංකීය නාට්‍ය වේදිකාවෙන් බිහිවූ ගීත." }, image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80", origin: { EN: "Colombo Theaters", SI: "කොළඹ නාට්‍ය ශාලා" }, significance: { EN: "The birth of modern Sri Lankan musical drama.", SI: "නූතන ශ්‍රී ලාංකීය සංගීත නාට්‍යයේ උපතයි." } }
];

export const MEDICINE_DATA: TraditionalMedicine[] = [
  { id: "herb-1", type: "herb", name: { EN: "Kohomba (Neem)", SI: "කොහොඹ" }, description: { EN: "A powerhouse of traditional healing known for its antibacterial properties.", SI: "බැක්ටීරියා නාශක ගුණ සහිත පාරම්පරික වෛද්‍ය ක්‍රමයේ ඉතා වැදගත් ශාකයකි." }, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Treats skin conditions and purifies blood.", SI: "සමේ රෝග සුව කිරීමට සහ රුධිරය පිරිසිදු කිරීමට උපකාරී වේ." }, usage: { EN: "Leaves are used in baths and as pastes.", SI: "ස්නානය සඳහා සහ ආලේපන සඳහා පත්‍ර භාවිතා වේ." } },
  { id: "treat-1", type: "treatment", name: { EN: "Shirahabyanga", SI: "ශිරෝභ්‍යංග" }, description: { EN: "A specialized Ayurvedic head massage with herb-infused oils.", SI: "ඖෂධීය තෙල් වර්ග භාවිතා කරමින් සිදුකරන විශේෂිත ආයුර්වේද හිස සම්බාහනයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Relieves stress and improves mental clarity.", SI: "මානසික ආතතිය දුරු කිරීමට සහ මනස සන්සුන් කිරීමට උපකාරී වේ." }, usage: { EN: "Administered by trained therapists.", SI: "පුහුණු ප්‍රතිකාරකයින් විසින් සිදු කරනු ලැබේ." } },
  { id: "herb-2", type: "herb", name: { EN: "Gotu Kola", SI: "ගොටුකොළ" }, description: { EN: "The 'Herb of Longevity', vital for brain health.", SI: "මොළයේ සෞඛ්‍යයට අත්‍යවශ්‍ය 'දීර්ඝායුෂ ලබා දෙන ශාකය' ලෙස හැඳින්වේ." }, image: "https://images.unsplash.com/photo-1615485240384-56965002075d?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Improves memory and reduces anxiety.", SI: "මතකය වර්ධනය කරන අතර මානසික නොසන්සුන්තාවය අඩු කරයි." }, usage: { EN: "Consumed as a fresh salad or juice.", SI: "නැවුම් සලාදයක් හෝ පානයක් ලෙස භාවිතා කරයි." } },
  { id: "herb-3", type: "herb", name: { EN: "Inguru (Ginger)", SI: "ඉඟුරු" }, description: { EN: "A versatile spice with powerful digestive properties.", SI: "ජීරණ පද්ධතිය නිරෝගී කරන ඉතා ගුණදායක කුළුබඩුවකි." }, image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Cures nausea and common colds.", SI: "කැරකිල්ල සහ සෙම්ප්‍රතිශ්‍යාව සුව කරයි." }, usage: { EN: "Brewed in tea or used in decoctions.", SI: "තේ සමඟ හෝ කසාය ලෙස භාවිතා කරයි." } },
  { id: "herb-4", type: "herb", name: { EN: "Kaha (Turmeric)", SI: "කහ" }, description: { EN: "The ultimate antiseptic of nature.", SI: "ස්වභාවධර්මයේ ඇති උසස්ම විෂබීජ නාශකයයි." }, image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f1?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Anti-inflammatory and skin healing.", SI: "ප්‍රදාහයන් සමනය කරන අතර සම සුවපත් කරයි." }, usage: { EN: "External application or dietary supplement.", SI: "බාහිර ආලේපනයක් හෝ ආහාර පෝෂකයක් ලෙස." } },
  { id: "herb-5", type: "herb", name: { EN: "Sudu Lunu (Garlic)", SI: "සුදු ලූණු" }, description: { EN: "Ancient medicine for heart health.", SI: "හෘද සෞඛ්‍යය සඳහා භාවිතා කරන ඉතා පැරණි ඖෂධයකි." }, image: "https://images.unsplash.com/photo-1544650038-ca3953507119?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Lowers blood pressure and cholesterol.", SI: "රුධිර පීඩනය සහ කොලෙස්ටරෝල් මට්ටම අඩු කරයි." }, usage: { EN: "Taken fresh or infused in honey.", SI: "නැවුම් ලෙස හෝ මී පැණි සමඟ මිශ්‍ර කර." } },
  { id: "herb-6", type: "herb", name: { EN: "Karapincha (Curry Leaves)", SI: "කරපිංචා" }, description: { EN: "Commonly used in cuisine but highly medicinal.", SI: "ආහාර පිසීමේදී නිතර භාවිතා කරන නමුත් ඉතා උසස් ඖෂධීය ගුණ සහිතයි." }, image: "https://images.unsplash.com/photo-1546271876-af6caec5fae5?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Great for digestion and hair health.", SI: "ජීරණයට සහ කෙස් කළඹේ සෞඛ්‍යයට ඉතා ගුණදායකයි." }, usage: { EN: "Added to curries or dried into powder.", SI: "ව්‍යංජන වලට හෝ කුඩු ලෙස භාවිතා කරයි." } },
  { id: "herb-7", type: "herb", name: { EN: "Aloe Vera (Komarika)", SI: "කෝමාරිකා" }, description: { EN: "A cooling gel-filled plant for skin regeneration.", SI: "සම පෝෂණය කරන සිසිල් ගුණ සහිත ශාකයකි." }, image: "https://images.unsplash.com/photo-1596755389378-7d0d24483247?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Heals burns and hydrates skin.", SI: "පිළිස්සුම් සුව කරන අතර සම තෙතමනය කරයි." }, usage: { EN: "Applied directly as a gel.", SI: "ජෙල් එකක් ලෙස සෘජුවම ආලේප කරයි." } },
  { id: "herb-8", type: "herb", name: { EN: "Aralu (Chebulic Myrobalan)", SI: "අරළු" }, description: { EN: "One of the three fruits in the sacred Triphala.", SI: "පූජනීය ත්‍රිඵලයේ අඩංගු පලතුරු තුනෙන් එකකි." }, image: "https://images.unsplash.com/photo-1615485240384-56965002075d?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Detoxifies the colon and boosts immunity.", SI: "බඩවැල් පිරිසිදු කරන අතර ප්‍රතිශක්තිකරණය වර්ධනය කරයි." }, usage: { EN: "Consumed as part of herbal blends.", SI: "ඖෂධීය මිශ්‍රණයක් ලෙස පානය කරයි." } },
  { id: "herb-9", type: "herb", name: { EN: "Nelli (Amla)", SI: "නෙල්ලි" }, description: { EN: "Rich in Vitamin C, known for anti-aging.", SI: "විටමින් C බහුල, වයසට යාම පාලනය කරන ශාකයකි." }, image: "https://images.unsplash.com/photo-1615485240384-56965002075d?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Strengthens eyes and liver.", SI: "ඇස් සහ අක්මාව ශක්තිමත් කරයි." }, usage: { EN: "Raw fruit, juice, or powder.", SI: "නැවුම් ලෙස, යුෂ හෝ කුඩු ලෙස." } },
  { id: "herb-10", type: "herb", name: { EN: "Amukkara (Ashwagandha)", SI: "අමුක්කරා" }, description: { EN: "The ultimate stress-buster and strength provider.", SI: "මානසික ආතතිය දුරුකරන සහ ශක්තිය ලබා දෙන ප්‍රධාන ඖෂධයකි." }, image: "https://images.unsplash.com/photo-1615485240384-56965002075d?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Boosts energy and balances hormones.", SI: "ජවය වර්ධනය කරන අතර හෝමෝන සමබර කරයි." }, usage: { EN: "Dried root powder with warm milk.", SI: "කිරි සමඟ මුල් කුඩු මිශ්‍ර කර." } },
  { id: "herb-11", type: "herb", name: { EN: "Iramusu (Sarsaparilla)", SI: "ඉරමුසු" }, description: { EN: "A cooling root drink for body temperature regulation.", SI: "ශරීරයේ උෂ්ණත්වය සමනය කරන සිසිල් පානයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Cleanses blood and treats skin issues.", SI: "රුධිරය පිරිසිදු කරන අතර සමේ රෝග වලට ගුණදායකයි." }, usage: { EN: "Herbal tea or syrup.", SI: "ඖෂධීය තේ හෝ පැණියක් ලෙස." } },
  { id: "herb-12", type: "herb", name: { EN: "Polpala", SI: "පොල්පලා" }, description: { EN: "Effective treatment for kidney stones.", SI: "වකුගඩු ආශ්‍රිත රෝග වලට සහ ගල් දියකිරීමට ඉතා ගුණදායකයි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Diuretic and urinary health support.", SI: "මුත්‍රා පද්ධතියේ නිරෝගී බව ආරක්ෂා කරයි." }, usage: { EN: "Boiled as a morning beverage.", SI: "උදෑසන පානයක් ලෙස තම්බා පානය කරයි." } },
  { id: "herb-13", type: "herb", name: { EN: "Ranawara", SI: "රණවරා" }, description: { EN: "The 'Golden Flower' for diabetes management.", SI: "දියවැඩියාව පාලනය සඳහා භාවිතා කරන 'රන්වන් මල'යි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Controls blood sugar and skin complexion.", SI: "සීනි මට්ටම පාලනය කර සමේ පැහැය වර්ධනය කරයි." }, usage: { EN: "Brewed flower tea.", SI: "මල් තම්බා තේ එකක් ලෙස." } },
  { id: "herb-14", type: "herb", name: { EN: "Belimal", SI: "බෙලිමල්" }, description: { EN: "Fragrant flowers used for stomach ailments.", SI: "ආමාශගත රෝග වලට භාවිතා කරන සුවඳවත් මල් වර්ගයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Treats gastritis and body heat.", SI: "ගැස්ට්‍රයිටිස් සහ ශරීරයේ දැවිල්ල සමනය කරයි." }, usage: { EN: "Tea brewed from dried flowers.", SI: "වියළි මල් වලින් සාදන පානයක් ලෙස." } },
  { id: "treat-2", type: "treatment", name: { EN: "Shirodhara", SI: "ශිරෝධාරා" }, description: { EN: "Continuous flow of warm oil on the forehead.", SI: "නළල මතට උණුසුම් තෙල් නොකඩවා වැගිරවීම මඟින් සිදුකරන ප්‍රතිකාරයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Deep relaxation and insomnia relief.", SI: "අධික සැහැල්ලුවක් ලබා දෙන අතර නින්ද නොයාම සුව කරයි." }, usage: { EN: "Specialized clinical procedure.", SI: "විශේෂිත සායනික ප්‍රතිකාරයකි." } },
  { id: "treat-3", type: "treatment", name: { EN: "Abhyanga", SI: "අභ්‍යංග" }, description: { EN: "Full body oil massage for detoxification.", SI: "විෂ ඉවත් කිරීම සඳහා සිදුකරන සම්පූර්ණ ශරීර තෙල් සම්බාහනයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Improves circulation and bone strength.", SI: "රුධිර ගමනාගමනය සහ අස්ථි ශක්තිය වර්ධනය කරයි." }, usage: { EN: "Often precedes a herbal bath.", SI: "සාමාන්‍යයෙන් ඖෂධීය ස්නානයකට පෙර සිදුකරයි." } },
  { id: "treat-4", type: "treatment", name: { EN: "Pinda Sweda", SI: "පිණ්ඩ ස්වේද" }, description: { EN: "Fomentation using hot herbal boluses.", SI: "ඖෂධීය පොට්ටනි භාවිතා කර ශරීරය තැවීම මඟින් සිදුකරන ප්‍රතිකාරයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Reduces joint pain and muscle stiffness.", SI: "සන්ධි වේදනාව සහ මාංශ පේශි තද ගතිය අඩු කරයි." }, usage: { EN: "Focused on specific body zones.", SI: "ශරීරයේ විශේෂිත ස්ථාන වලට සිදුකරනු ලැබේ." } },
  { id: "treat-5", type: "treatment", name: { EN: "Vashpa Sweda", SI: "වාෂ්ප ස්වේද" }, description: { EN: "Inducing sweat in a herbal steam box.", SI: "ඖෂධීය වාෂ්ප කුටියක් තුළ ශරීරයෙන් දහඩිය පිට කිරීමේ ප්‍රතිකාරයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Weight loss and toxin removal.", SI: "බර අඩු කිරීමට සහ විෂ වර්ග ඉවත් කිරීමට උදව් වේ." }, usage: { EN: "Performed after oil massage.", SI: "තෙල් සම්බාහනයකට පසුව සිදු කරයි." } },
  { id: "treat-6", type: "treatment", name: { EN: "Nasya", SI: "නස්‍ය" }, description: { EN: "Nasal administration of herbal preparations.", SI: "නාස් මාර්ගයෙන් ඖෂධ ලබා දීම මඟින් සිදුකරන ප්‍රතිකාරයකි." }, image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80", benefits: { EN: "Cures sinus and headaches.", SI: "සයිනස් රෝග සහ හිසරදය සුව කරයි." }, usage: { EN: "Morning clinical sessions.", SI: "උදෑසන කාලයේ සිදුකරන සායනික ප්‍රතිකාරයකි." } }
];

export const TRAVEL_ESSENTIALS_DATA: TravelEssential[] = [
  {
    id: "e1",
    title: { EN: "Visa & Entry", SI: "වීසා සහ ඇතුල්වීම" },
    description: { EN: "Ensure you have the correct Electronic Travel Authorization (ETA).", SI: "ඔබට නිවැරදි විද්‍යුත් සංචාරක අවසර පත්‍රය (ETA) ඇති බව තහවුරු කරගන්න." },
    icon: "ShieldCheck",
    tips: [
      { EN: "Apply online via the official portal.", SI: "නිල වෙබ් අඩවිය හරහා අයදුම් කරන්න." },
      { EN: "Keep a digital copy of your return ticket.", SI: "ඔබගේ ආපසු යාමේ ගුවන් ටිකට් පතේ ඩිජිටල් පිටපතක් ළඟ තබා ගන්න." }
    ]
  },
  {
    id: "e2",
    title: { EN: "Health & Safety", SI: "සෞඛ්‍යය සහ ආරක්ෂාව" },
    description: { EN: "General health precautions for tropical travel.", SI: "නිවර්තන කලාපීය සංචාර සඳහා සාමාන්‍ය සෞඛ්‍ය උපදෙස්." },
    icon: "Activity",
    tips: [
      { EN: "Drink bottled or boiled water.", SI: "බෝතල් කළ හෝ උණු කළ ජලය පානය කරන්න." },
      { EN: "Use mosquito repellent in forested areas.", SI: "වනගත ප්‍රදේශවලදී මදුරු විකර්ෂක භාවිතා කරන්න." }
    ]
  }
];
