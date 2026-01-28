import React from 'react';
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
  { 
    id: "sigiriya", 
    name: { EN: "Sigiriya Lion Rock", SI: "සීගිරිය සිංහගිරිය" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1920&q=80", 
    gallery: ["https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80"], 
    videoUrl: "https://www.youtube.com/shorts/j4ln2UNOnZk", 
    history: { 
      EN: "Sigiriya, the 'Lion Rock', is a UNESCO World Heritage site and a masterwork of 5th-century urban planning. Built by King Kassapa after he seized the throne, it served as a royal citadel and an aesthetic marvel. The fortress is renowned for its advanced hydraulics, world-famous 'Cloud Maiden' frescoes, and the Mirror Wall which still bears ancient graffiti from voyagers of past millennia.", 
      SI: "සීගිරිය හෙවත් 'සිංහගිරිය' යනු 5 වන සියවසේ නගර නිර්මාණකරණයේ විශිෂ්ටතම නිදසුනක් වන යුනෙස්කෝ ලෝක උරුම අඩවියකි. කාශ්‍යප රජු විසින් අහස උසට ඉදිකළ මෙම බලකොටුව, ලොව සුප්‍රසිද්ධ සීගිරි සිතුවම් සහ කැඩපත් පවුරෙන් විචිත්‍රවත් වී ඇත. එහි පැරණි ජල ශිල්ප ක්‍රම අදටත් ලොව මවිතයට පත් කරයි." 
    }, 
    shortStory: { EN: "The 8th Wonder of the World – A fortress in the sky.", SI: "ලොව අටවන පුදුමය - අහස උසට විහිදුණු බලකොටුවකි." }, 
    bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" }, 
    tips: [
      { EN: "Climb early morning (around 7 AM) to avoid the intense midday heat and large crowds.", SI: "දැඩි හිරු රශ්මිය සහ සෙනඟ මඟ හැරීමට උදෑසන 7 ට පමණ නැගීම ආරම්භ කරන්න." },
      { EN: "Bring plenty of water but dispose of plastic responsibly; reuseable bottles are highly recommended.", SI: "ප්‍රමාණවත් තරම් වතුර රැගෙන යන්න, නමුත් ප්ලාස්ටික් අවිධිමත් ලෙස බැහැර කිරීමෙන් වළකින්න." },
      { EN: "Respect the frescoes; photography is strictly prohibited in the painting gallery to preserve the ancient pigments.", SI: "සීගිරි සිතුවම්වල ආරක්ෂාව සඳහා එහි ඡායාරූප ගැනීම සපුරා තහනම් බව මතක තබා ගන්න." }
    ], 
    location: "Matale District", 
    coordinates: { x: 52, y: 38 } 
  },
  { 
    id: "polonnaruwa", 
    name: { EN: "Ancient City of Polonnaruwa", SI: "පොළොන්නරුව පැරණි නගරය" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "The second most ancient kingdom of Sri Lanka, Polonnaruwa features the monumental remains of a garden-city built in the 12th century. It reached its zenith under King Parakramabahu I, who constructed the massive 'Sea of Parakrama' reservoir. The site is home to the Gal Vihara, a collection of four massive Buddha statues carved from a single granite ledge, representing the pinnacle of Sinhalese rock carving.", 
      SI: "ශ්‍රී ලංකාවේ දෙවන පැරණිතම රාජධානිය වන පොළොන්නරුව, 12 වන සියවසේ උද්‍යාන නගර නිර්මාණකරණයේ විශිෂ්ටත්වය කියාපායි. පළමුවන පරාක්‍රමබාහු රජුගේ යුගයේදී ඉදිවූ පරාක්‍රම සමුද්‍රය සහ ගල් විහාරයේ අසමසම බුද්ධ ප්‍රතිමා වහන්සේලා මෙම රාජධානියේ අභිමානය මනාව විදහා දක්වයි." 
    }, 
    shortStory: { EN: "Where stone tells the story of an empire.", SI: "ගල් කැටයම් අධිරාජ්‍යයක කතාව පවසන තැන." }, 
    bestTime: { EN: "July to September", SI: "ජූලි සිට සැප්තැම්බර් දක්වා" }, 
    tips: [
      { EN: "Rent a bicycle at the entrance; the archaeological site is vast and difficult to cover entirely on foot.", SI: "පූජා භූමිය ඉතා විශාල බැවින් එය නැරඹීමට පිවිසුමෙන් බයිසිකලයක් කුලියට ගැනීම වඩාත් පහසු වේ." },
      { EN: "Wear socks; you'll need to remove your shoes at temples, and the stone floors can become scorchingly hot by noon.", SI: "විහාරස්ථාන වලදී පාවහන් ඉවත් කළ යුතු බැවින්, රත් වූ ගල් පොළොවෙන් ආරක්ෂා වීමට මේස් පැළඳ සිටීම සුදුසුය." },
      { EN: "Visit the Archaeological Museum first to understand the layout and historical context before entering the ruins.", SI: "නටබුන් නැරඹීමට පෙර පුරාවිද්‍යා කෞතුකාගාරය වෙත ගොස් එහි ඉතිහාසය පිළිබඳ අවබෝධයක් ලබාගන්න." }
    ], 
    location: "Polonnaruwa District", 
    coordinates: { x: 62, y: 34 } 
  },
  { 
    id: "ella", 
    name: { EN: "Nine Arch Bridge", SI: "ආරුක්කු නවය පාලම" }, 
    category: "mountains", 
    image: "https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "A colonial-era masterpiece tucked between Ella and Demodara, this bridge was built entirely out of rock, bricks, and cement without using a single piece of steel. Local legend says that when the Great War broke out, steel earmarked for the bridge was diverted, forcing Ceylonese engineers to innovate with local materials. Today, it stands as one of the most picturesque railway crossings in the world.", 
      SI: "ඇල්ල සහ දෙමෝදර අතර පිහිටි මෙම පාලම කිසිදු වානේ කැබැල්ලක් භාවිතා නොකර ගල් සහ ගඩොල් වලින් පමණක් නිමවූ යටත් විජිත යුගයේ අපූරු නිර්මාණයකි. ලෝක යුද්ධය නිසා වානේ හිඟ වූ කාලයක දේශීය ඉංජිනේරුවන්ගේ දස්කම් මින් මනාව නිරූපණය වේ. අද වන විට මෙය ලොව සුන්දරම දුම්රිය මාවතක කොටසක් ලෙස සැලකේ." 
    }, 
    shortStory: { EN: "The bridge in the sky where time slows down.", SI: "කාලය සෙමින් ගෙවෙන අහස උසට බැඳි පාලම." }, 
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" }, 
    tips: [
      { EN: "Check the train schedule at the Ella station; seeing the blue train cross the arches is the quintessential experience.", SI: "නිල් පැහැති දුම්රිය පාලම හරහා යන අයුරු දැක ගැනීමට ඇල්ල දුම්රිය ස්ථානයෙන් වේලාවන් පරීක්ෂා කරගන්න." },
      { EN: "Walk along the tracks from Ella town for a scenic jungle trek, but always listen for approaching trains.", SI: "ඇල්ල නගරයේ සිට දුම්රිය මාවත දිගේ ඇවිද යාම සුන්දර අත්දැකීමකි, නමුත් දුම්රිය පැමිණෙන හඬ පිළිබඳ විමසිලිමත් වන්න." },
      { EN: "The best photography spot is from the tea fields surrounding the bridge, offering a side-profile view of the arches.", SI: "පාලම වටා ඇති තේ වතු අතරින් පාලමේ සම්පූර්ණ දර්ශනයක් සහිත විශිෂ්ට ඡායාරූප ලබාගත හැක." }
    ], 
    location: "Badulla District", 
    coordinates: { x: 62, y: 68 } 
  }
];

export const FOODS_DATA: Food[] = [
  {
    id: "f1",
    name: { EN: "Rice and Curry", SI: "බත් සහ වෑංජන" },
    description: { EN: "The staple meal of the island, featuring a symphony of local curries.", SI: "දිවයිනේ ප්‍රධාන ආහාර වේල." },
    image: "https://images.unsplash.com/photo-1585932231552-198d75df5584?q=80&w=800&auto=format&fit=crop",
    spiciness: 4,
    ingredients: [{ EN: "Rice", SI: "බත්" }, { EN: "Coconut", SI: "පොල්" }, { EN: "Spices", SI: "කුළුබඩු" }],
    tasteProfile: { EN: "Spicy & Savory", SI: "සැර සහ රසවත්" }
  },
  {
    id: "f2",
    name: { EN: "Kottu Roti", SI: "කොත්තු රොටි" },
    description: { EN: "Street food masterpiece made from shredded flatbread and spices.", SI: "කැබලි කළ රොටි සහ කුළුබඩු මිශ්‍ර ජනප්‍රිය ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1601050690597-df056fb04791?q=80&w=800&auto=format&fit=crop",
    spiciness: 5,
    ingredients: [{ EN: "Godamba Roti", SI: "ගොඩම්බා රොටි" }, { EN: "Veggies", SI: "එළවළු" }, { EN: "Meat", SI: "මස්" }],
    tasteProfile: { EN: "Fiery Street Taste", SI: "අධික සැර" }
  },
  {
    id: "f3",
    name: { EN: "Hoppers (Appa)", SI: "ආප්ප" },
    description: { EN: "Bowl-shaped savory pancakes with a soft center and crispy edges.", SI: "මැද මෘදු සහ දාරය කරකුට්ටු වූ පෑන්කේක් වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Creamy & Light", SI: "මෘදු සහ රසවත්" }
  }
];

export const MEDICINE_DATA: TraditionalMedicine[] = [
  {
    id: "herb-1",
    type: "herb",
    name: { EN: "Neem", SI: "කොහොඹ" },
    description: { EN: "Antiseptic properties used in ancient healing for centuries.", SI: "සියවස් ගණනාවක් පුරා සුව කිරීම සඳහා භාවිතා කරන විෂබීජ නාශක ගුණ." },
    image: "https://images.pexels.com/photos/5967550/pexels-photo-5967550.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: { EN: "Promotes skin health and immune system.", SI: "සමේ සෞඛ්‍යය සහ ප්‍රතිශක්තිය වැඩි කරයි." },
    usage: { EN: "Applied as a paste or consumed as a bitter tonic.", SI: "ආලේපනයක් ලෙස හෝ පානයක් ලෙස භාවිතා කරයි." }
  }
];

export const TEA_DATA: TeaExperience[] = [
  {
    id: "tea1",
    name: { EN: "Nuwara Eliya High Grown", SI: "නුවරඑළිය තේ" },
    description: { EN: "Often called the 'Champagne of Ceylon Tea' for its golden color and delicate flavor.", SI: "රන්වන් පැහැය සහ ඉතා මෘදු රසය නිසා මෙය ලංකා තේ වල 'ෂැම්පේන්' ලෙස හැඳින්වේ." },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
    type: "variety",
    fact: { EN: "Grown at 6,000 feet above sea level.", SI: "මුහුදු මට්ටමේ සිට අඩි 6,000 ක් ඉහළින් වගා කෙරේ." }
  },
  {
    id: "tea2",
    name: { EN: "Dimbula Western Highlands", SI: "දිඹුල කඳුකර තේ" },
    description: { EN: "Known for its crisp, refreshing flavor and medium body, perfect for afternoon tea.", SI: "ප්‍රබෝධමත් රසයකින් යුක්ත වන අතර සවස් කාලයේ තේ පානයක් ලෙස වඩාත් සුදුසුය." },
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop",
    type: "variety",
    fact: { EN: "Best quality is produced from January to March.", SI: "හොඳම තත්ත්වයේ තේ ජනවාරි සිට මාර්තු දක්වා නිපදවේ." }
  },
  {
    id: "tea3",
    name: { EN: "Uva Eastern Highlands", SI: "ඌව කඳුකර තේ" },
    description: { EN: "Famous for its unique aromatic 'exotic' flavor that comes from the dry Cachan wind.", SI: "කචන් නම් වියළි සුළඟ නිසා ලැබෙන අසමසම සුවඳ සහ රසය සඳහා ප්‍රසිද්ධය." },
    image: "https://images.unsplash.com/photo-1576091160550-2173bdd99611?q=80&w=800&auto=format&fit=crop",
    type: "variety",
    fact: { EN: "Used as a key base for world-famous blends.", SI: "ලොව සුප්‍රසිද්ධ තේ මිශ්‍රණ සඳහා ප්‍රධාන පදනම ලෙස භාවිතා කරයි." }
  },
  {
    id: "tea4",
    name: { EN: "Kandy Mid Grown", SI: "මහනුවර මධ්‍යම තේ" },
    description: { EN: "Full-bodied and strong, this tea is ideal for those who like a robust morning cup.", SI: "තද රසයකින් යුක්ත වන අතර උදෑසන ප්‍රබෝධමත් පානයක් ලෙස වඩාත් සුදුසුය." },
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop",
    type: "variety",
    fact: { EN: "The birthplace of Sri Lankan tea industry.", SI: "ශ්‍රී ලංකාවේ තේ කර්මාන්තයේ උපන් ස්ථානය මෙයයි." }
  },
  {
    id: "tea5",
    name: { EN: "Ruhuna Low Grown", SI: "රුහුණ පහතරට තේ" },
    description: { EN: "Produced at lower altitudes, offering a deep color and sweet, malty notes.", SI: "පහතරට ප්‍රදේශවල නිපදවන මෙම තේ තද පැහැයෙන් සහ පැණි රසයකින් යුක්තයි." },
    image: "https://images.unsplash.com/photo-1563911191283-d48ebdd072ef?q=80&w=800&auto=format&fit=crop",
    type: "variety",
    fact: { EN: "Grown in soil that results in large, beautiful leaves.", SI: "විශාල පත්‍ර සහිත තේ දලු ලැබෙන සාරවත් පසක වගා කෙරේ." }
  },
  {
    id: "tea6",
    name: { EN: "Silver Tips (White Tea)", SI: "සිල්වර් ටිප්ස් (සුදු තේ)" },
    description: { EN: "The rarest and most expensive tea, made only from un-opened tea buds.", SI: "නොපිපුණු තේ අංකුර වලින් පමණක් සකසන ඉතා දුර්ලභ සහ මිල අධික තේ වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
    type: "variety",
    fact: { EN: "Hand-picked and sun-dried to preserve antioxidants.", SI: "ප්‍රතිඔක්සිකාරක සුරැකීමට අතින් නෙළා අව්වේ වියළනු ලැබේ." }
  },
  {
    id: "tea7",
    name: { EN: "Traditional Plucking", SI: "පාරම්පරික තේ නෙළීම" },
    description: { EN: "The art of selecting 'two leaves and a bud' carefully by hand.", SI: "අතින් ඉතා ප්‍රවේශමෙන් 'දලු දෙකයි එක අංකුරයයි' තෝරා ගැනීමේ කලාව." },
    image: "https://images.unsplash.com/photo-1560947702-86105318182b?q=80&w=800&auto=format&fit=crop",
    type: "process",
    fact: { EN: "Expert pluckers gather up to 20kg of leaves a day.", SI: "දක්ෂ තේ නෙළන්නියක දිනකට දලු කිලෝ 20ක් පමණ නෙළයි." }
  },
  {
    id: "tea8",
    name: { EN: "Tea Rolling & Drying", SI: "තේ පෙරළීම සහ වියළීම" },
    description: { EN: "Modern and traditional machines work to release the essential oils of the leaf.", SI: "තේ පත්‍රයේ සුවඳ සහ රසය මුදා හැරීම සඳහා නවීන සහ පැරණි යන්ත්‍ර භාවිතා කරයි." },
    image: "https://images.unsplash.com/photo-1547849646-97992982d61a?q=80&w=800&auto=format&fit=crop",
    type: "process",
    fact: { EN: "Oxidation levels define if the tea becomes black or green.", SI: "ඔක්සිකරණ මට්ටම අනුව තේ කළු තේ හෝ කොළ තේ බවට පත්වේ." }
  },
  {
    id: "tea9",
    name: { EN: "Afternoon Tea Tradition", SI: "සවස් කාලයේ තේ පැන් කලාව" },
    description: { EN: "A legacy of the British era, serving premium tea with local and colonial treats.", SI: "යටත් විජිත යුගයේ උරුමයක් ලෙස එන, කෙටි ආහාර සමඟ තේ පානය කිරීමේ සම්ප්‍රදාය." },
    image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=800&auto=format&fit=crop",
    type: "location",
    fact: { EN: "Best enjoyed in Nuwara Eliya's colonial hotels.", SI: "නුවරඑළියේ පැරණි හෝටල්වලදී මෙය වඩාත් හොඳින් අත්විඳිය හැක." }
  },
  {
    id: "tea10",
    name: { EN: "Organic Green Tea", SI: "කාබනික කොළ තේ" },
    description: { EN: "Grown without chemicals, preserving the pure healing essence of nature.", SI: "කිසිදු රසායනික ද්‍රව්‍යයක් භාවිතා නොකර වගා කරන ඉතා පිරිසිදු තේ වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1523906630133-f753f11d33c7?q=80&w=800&auto=format&fit=crop",
    type: "variety",
    fact: { EN: "High in antioxidants and known for weight loss benefits.", SI: "ප්‍රතිඔක්සිකාරක බහුල අතර ශරීරයේ බර අඩු කර ගැනීමට උපකාරී වේ." }
  }
];

export const PHRASEBOOK_DATA: Phrase[] = [
  { id: "p1", english: "Hello / Ayubowan", sinhala: "ආයුබෝවන්", transliteration: "Ayubowan", category: "greeting" },
  { id: "p2", english: "Thank you", sinhala: "ස්තූතියියි", transliteration: "Stutiyi", category: "greeting" },
  { id: "p3", english: "Where is the bathroom?", sinhala: "වැසිකිළිය කොහේද?", transliteration: "Vasikiliya koheda?", category: "emergency" },
  { id: "p4", english: "How much?", sinhala: "කීයද?", transliteration: "Keeyada?", category: "shopping" }
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

export const FESTIVALS_DATA: Festival[] = [
  { 
    id: "fest-1", 
    name: { EN: "Vesak Festival", SI: "වෙසක් උත්සවය" }, 
    date: { EN: "May (Full Moon)", SI: "මැයි (පුර පසළොස්වක)" }, 
    description: { EN: "The most sacred festival for Buddhists, commemorating the birth, enlightenment, and passing (Parinirvana) of Lord Buddha. The island transforms into a sea of lanterns and lights.", SI: "බුදුරජාණන් වහන්සේගේ තෙමඟුල (උපත, බුදුවීම සහ පිරිනිවන් පෑම) සැමරීම වෙනුවෙන් පවත්වනු ලබන ඉතා පූජනීය උත්සවයකි. දිවයින පුරා තොරණ සහ වෙසක් පහන් කූඩුවලින් ආලෝකමත් වේ." }, 
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80", 
    significance: { EN: "Global recognition of Buddhist heritage and compassion.", SI: "බෞද්ධ උරුමය සහ කරුණාව ලොව පුරා ප්‍රචලිත කිරීම." } 
  },
  { 
    id: "fest-2", 
    name: { EN: "Sinhala & Tamil New Year", SI: "සිංහල හා හින්දු අලුත් අවුරුද්ද" }, 
    date: { EN: "April 13th & 14th", SI: "අප්‍රේල් 13 සහ 14" }, 
    description: { EN: "The harvest festival marking the end of the harvest season and the beginning of the new year. It is celebrated with traditional rituals, games, and authentic sweets.", SI: "අස්වනු නෙළීමේ කාලය අවසානය සහ නව වසරේ උදාව සැමරෙන උත්සවයකි. පාරම්පරික සිරිත් විරිත්, ජන ක්‍රීඩා සහ කැවිලි පෙවිලි සමඟ මෙය ඉතා උත්කර්ෂවත්ව පවත්වනු ලබයි." }, 
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80", 
    significance: { EN: "Unity between cultures and respect for the sun god.", SI: "සංස්කෘතික සමගිය සහ සූර්ය දෙවියන් කෙරෙහි ගෞරවය දැක්වීම." } 
  },
  { 
    id: "fest-3", 
    name: { EN: "Kandy Esala Perahera", SI: "මහනුවර ඇසළ පෙරහැර" }, 
    date: { EN: "July / August", SI: "ජූලි / අගෝස්තු" }, 
    description: { EN: "One of the oldest and grandest Buddhist festivals in the world, featuring traditional dancers, fire-breathers, and majestically decorated elephants parading the sacred tooth relic.", SI: "පාරම්පරික නැටුම් ශිල්පීන්, ගිනි සිසිලකරුවන් සහ අලංකාර ලෙස සැරසූ අලි ඇතුන් සහිතව ශ්‍රී දන්ත ධාතූන් වහන්සේ විෂයෙහි පවත්වනු ලබන ලොව පැරණිතම හා උත්කර්ෂවත්ම පෙරහැර මංගල්‍යයයි." }, 
    image: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80", 
    significance: { EN: "Protective blessings for the nation and rain for crops.", SI: "රටට ආශිර්වාදය සහ වගා කටයුතු සඳහා වැසි ප්‍රාර්ථනා කිරීම." } 
  },
  { 
    id: "fest-4", 
    name: { EN: "Thai Pongal", SI: "තෛපොංගල් උත්සවය" }, 
    date: { EN: "January (Mid-Month)", SI: "ජනවාරි මැද" }, 
    description: { EN: "A Tamil harvest festival dedicated to the Sun God (Surya) for a bountiful harvest. Farmers prepare 'Pongal' rice in traditional clay pots to offer thanks.", SI: "අස්වැන්න ලබා දීම වෙනුවෙන් සූර්ය දෙවියන් හට ස්තූති පූජා පවත්වන දමිළ ජනතාවගේ අස්වනු උත්සවයකි. මැටි වළඳක පිසූ 'පොංගල්' බත් පූජා කිරීම මෙහි ප්‍රධාන අංගයයි." }, 
    image: "https://images.unsplash.com/photo-1610344741491-da796a5b678e?auto=format&fit=crop&w=1200&q=80", 
    significance: { EN: "Gratitude to nature and agriculture.", SI: "සොබාදහමට සහ කෘෂිකර්මාන්තයට කෘතඥතාවය දැක්වීම." } 
  },
  { 
    id: "fest-5", 
    name: { EN: "Deepavali", SI: "දීපාවලී උත්සවය" }, 
    date: { EN: "October / November", SI: "ඔක්තෝබර් / නොවැම්බර්" }, 
    description: { EN: "The Hindu Festival of Lights symbolizing the spiritual victory of light over darkness, good over evil, and knowledge over ignorance. Houses are adorned with oil lamps.", SI: "අඳුර පරදා ආලෝකයත්, අසත්‍යය පරදා සත්‍යයත් ජය ගැනීම සංකේතවත් කරන හින්දු බැතිමතුන්ගේ පහන් උත්සවයයි. නිවෙස් පහන්වලින් අලංකාර කෙරේ." }, 
    image: "https://images.unsplash.com/photo-1543834316-2585210976ea?auto=format&fit=crop&w=1200&q=80", 
    significance: { EN: "Renewal of life and inner light.", SI: "ජීවිතය අලුත් කිරීම සහ අභ්‍යන්තර ආලෝකය පණ ගැන්වීම." } 
  },
  { 
    id: "fest-6", 
    name: { EN: "Poson Poya", SI: "පොසොන් පෝය" }, 
    date: { EN: "June (Full Moon)", SI: "ජූනි (පුර පසළොස්වක)" }, 
    description: { EN: "Celebrating the introduction of Buddhism to Sri Lanka by Arahat Mahinda. Mihintale is the main focus where thousands of pilgrims gather.", SI: "මිහිඳු මහා රහතන් වහන්සේ විසින් ශ්‍රී ලංකාවට බුදුදහම හඳුන්වා දීම සැමරෙන පූජනීය දිනයයි. දහස් ගණන් බැතිමතුන් මිහින්තලය වන්දනා කිරීමට මෙදින පැමිණෙති." }, 
    image: "https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=1200&q=80", 
    significance: { EN: "Spiritual awakening of the Sinhalese people.", SI: "සිංහල ජනතාවගේ අධ්‍යාත්මික පිබිදීම." } 
  },
  { 
    id: "fest-7", 
    name: { EN: "Nallur Festival", SI: "නල්ලූර් කෝවිල් උත්සවය" }, 
    date: { EN: "August", SI: "අගෝස්තු" }, 
    description: { EN: "The biggest Hindu festival in Jaffna held at the Nallur Kandaswamy Kovil. It spans 25 days with elaborate chariot processions.", SI: "යාපනය නල්ලූර් කන්දසාමි කෝවිලේ පවත්වනු ලබන විශාලතම හින්දු උත්සවයයි. දින 25ක් පුරා පවත්වන මෙහි දේව රථ පෙරහැර ඉතාමත් ආකර්ෂණීය වේ." }, 
    image: "https://images.unsplash.com/photo-1594143247053-91185f0962b1?auto=format&fit=crop&w=1200&q=80", 
    significance: { EN: "Cultural pillar of the Northern Tamil community.", SI: "උතුරුකරයේ දමිළ ජනතාවගේ සංස්කෘතික අනන්‍යතාවය." } 
  },
  { 
    id: "fest-8", 
    name: { EN: "Duruthu Perahera", SI: "දුරුතු පෙරහැර" }, 
    date: { EN: "January (Full Moon)", SI: "ජනවාරි (පුර පසළොස්වක)" }, 
    description: { EN: "Commemorating the Buddha's first visit to Sri Lanka, specifically Kelaniya. A grand parade marks the beginning of the annual pilgrimage season.", SI: "බුදුරජාණන් වහන්සේගේ ප්‍රථම ලංකාගමනය (කැලණිය වෙත වැඩම කිරීම) සැමරීම සඳහා පවත්වනු ලබන අලංකාර පෙරහැර මංගල්‍යයකි." }, 
    image: "https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=1200&q=80", 
    significance: { EN: "Beginning of the religious calendar and pilgrimage season.", SI: "ආගමික දින දර්ශනයේ සහ වන්දනා වාරයේ ආරම්භය." } 
  },
  { 
    id: "fest-9", 
    name: { EN: "Christmas in Lanka", SI: "ශ්‍රී ලාංකීය නත්තල" }, 
    date: { EN: "December 25th", SI: "දෙසැම්බර් 25" }, 
    description: { EN: "Sri Lanka celebrates Christmas with joy, combining Christian traditions with island festivities. Streets are lit, and 'Christmas Cake' is shared by all communities.", SI: "කිතුනු සිරිත් විරිත් සමඟින් ශ්‍රී ලංකාව පුරා උත්කර්ෂවත්ව නත්තල සමරනු ලබයි. වීදි ආලෝකමත් කෙරෙන අතර සියලුම ජාතීන් අතර 'නත්තල් කේක්' බෙදා හදා ගනී." }, 
    image: "https://images.unsplash.com/photo-1543362905-f2423ef4e0f8?auto=format&fit=crop&w=1200&q=80", 
    significance: { EN: "Season of peace and universal brotherhood.", SI: "සාමයේ සහ සහෝදරත්වයේ කාලසීමාව." } 
  },
  { 
    id: "fest-10", 
    name: { EN: "Ramadan (Eid-ul-Fitr)", SI: "ඊදුල් ෆිතර් (රාමසාන්)" }, 
    date: { EN: "Varies (Islamic Calendar)", SI: "ඉස්ලාමීය දින දර්ශනය අනුව වෙනස් වේ" }, 
    description: { EN: "The celebration marking the end of the fasting month of Ramadan. Families gather for prayers and share feasts including 'Biryani' and 'Watalappam'.", SI: "රාමසාන් උපවාස කාලය අවසානයේ පවත්වනු ලබන සැමරුමයි. පවුල් එකතු වී යාච්ඤා කරන අතර බුරියානි සහ වටලප්පන් ඇතුළු රසවත් ආහාර භුක්ති විඳිති." }, 
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1200&q=80", 
    significance: { EN: "Self-discipline, charity, and communal harmony.", SI: "ආත්ම දමනය, දන් දීම සහ සාමූහික සහජීවනය." } 
  }
];

export const TRAVEL_ESSENTIALS_DATA: TravelEssential[] = [
  { 
    id: "e1", 
    title: { EN: "Visa & Entry (ETA)", SI: "වීසා සහ ඇතුල්වීම" }, 
    description: { EN: "Most travelers need an Electronic Travel Authorization (ETA) to enter the island.", SI: "බොහෝ සංචාරකයින් සඳහා දිවයිනට ඇතුළු වීමට විද්‍යුත් සංචාරක බලපත්‍රයක් (ETA) අවශ්‍ය වේ." }, 
    icon: "ShieldCheck", 
    tips: [
      { EN: "Step 1: Visit the official eta.gov.lk portal and apply online before your flight.", SI: "පියවර 1: පියාසැරියට පෙර නිල වෙබ් අඩවිය (eta.gov.lk) හරහා අයදුම් කරන්න." },
      { EN: "Step 2: Ensure your passport is valid for at least 6 months from your date of arrival.", SI: "පියවර 2: ඔබ පැමිණෙන දින සිට අවම වශයෙන් මාස 6 ක් වලංගු විදේශ ගමන් බලපත්‍රයක් ඇති බව තහවුරු කරගන්න." },
      { EN: "Step 3: Keep a digital and printed copy of your approved ETA for immigration check.", SI: "පියවර 3: අනුමත ETA පත්‍රිකාවේ මුද්‍රිත පිටපතක් හෝ ඩිජිටල් පිටපතක් ළඟ තබා ගන්න." }
    ] 
  },
  {
    id: "e2",
    title: { EN: "Connectivity & SIM Cards", SI: "සම්බන්ධතාවය සහ SIM කාඩ්පත්" },
    description: { EN: "Stay connected with high-speed 4G/5G mobile data available across the island.", SI: "දිවයින පුරා පවතින අධිවේගී 4G/5G ජාල සමඟ සම්බන්ධව සිටින්න." },
    icon: "Zap",
    tips: [
      { EN: "Step 1: Purchase a 'Tourist SIM' at the Colombo Airport (BIA) arrival hall counter.", SI: "පියවර 1: කටුනායක ගුවන් තොටුපළේ පැමිණීමේ පර්යන්තයේ ඇති කවුන්ටරයකින් 'Tourist SIM' එකක් ලබාගන්න." },
      { EN: "Step 2: Dialog and Mobitel offer the best coverage in rural and mountainous areas.", SI: "පියවර 2: දුරබැහැර සහ කඳුකර ප්‍රදේශ සඳහා Dialog සහ Mobitel ජාලයන් වඩාත් සුදුසුය." },
      { EN: "Step 3: Download the network app (e.g., MyDialog) to top up data instantly via credit card.", SI: "පියවර 3: ජාලයට අදාළ ඇප් එක (MyDialog වැනි) භාගත කර අවශ්‍ය විටෙක දත්ත ලබාගන්න." }
    ]
  },
  {
    id: "e3",
    title: { EN: "Currency & Banking", SI: "මුදල් සහ බැංකු කටයුතු" },
    description: { EN: "The official currency is the Sri Lankan Rupee (LKR). Card payments are common in cities.", SI: "නිල මුදල් ඒකකය ශ්‍රී ලංකා රුපියල (LKR) වේ. නගරවල කාඩ්පත් මගින් ගෙවීම් කළ හැක." },
    icon: "Wallet",
    tips: [
      { EN: "Step 1: Exchange a small amount of cash at the airport for immediate taxi/bus needs.", SI: "පියවර 1: කුලී රථ හෝ බස් ගාස්තු සඳහා ගුවන් තොටුපළේදීම සුළු මුදලක් රුපියල් බවට පත් කරගන්න." },
      { EN: "Step 2: Use ATMs at major banks (HNB, Sampath, Commercial) for the best exchange rates.", SI: "පියවර 2: හොඳම විනිමය අනුපාත සඳහා ප්‍රධාන බැංකු (HNB, සම්පත්, කොමර්ෂල්) වල ATM භාවිතා කරන්න." },
      { EN: "Step 3: Carry small denominations (Rs. 100, 500) for local markets and tipping.", SI: "පියවර 3: දේශීය වෙළඳසැල් සඳහා කුඩා මුදල් නෝට්ටු (රු. 100, 500) ළඟ තබා ගන්න." }
    ]
  },
  {
    id: "e4",
    title: { EN: "Local Transport Guide", SI: "දේශීය ප්‍රවාහන උපදෙස්" },
    description: { EN: "From scenic trains to Tuk-Tuks, getting around is an adventure itself.", SI: "දුම්රිය ගමනේ සිට ත්‍රිරෝද රථ දක්වා, සංචාරය කිරීම විනෝදජනක අත්දැකීමකි." },
    icon: "Car",
    tips: [
      { EN: "Step 1: Download 'PickMe' or 'Uber' for fair-priced rides in Colombo and Kandy.", SI: "පියවර 1: කොළඹ සහ මහනුවර ප්‍රදේශවල සාධාරණ මිලට ගමන් කිරීමට 'PickMe' හෝ 'Uber' ඇප් භාවිතා කරන්න." },
      { EN: "Step 2: Book train tickets in advance via the official railway portal for reserved seats.", SI: "පියවර 2: දුම්රිය ආසන වෙන්කරවා ගැනීමට රජයේ දුම්රිය වෙබ් අඩවිය හරහා කල්තියා ටිකට් පත් වෙන්කරන්න." },
      { EN: "Step 3: Always agree on a price before entering a Tuk-Tuk if it doesn't have a meter.", SI: "පියවර 3: මීටරයක් නොමැති ත්‍රිරෝද රථයකට ගොඩවීමට පෙර අනිවාර්යයෙන්ම මිල තීරණය කරගන්න." }
    ]
  },
  {
    id: "e5",
    title: { EN: "Cultural Etiquette", SI: "සංස්කෘතික සිරිත් විරිත්" },
    description: { EN: "Respect for local traditions is essential when visiting sacred and rural sites.", SI: "පූජනීය ස්ථානවලදී දේශීය සම්ප්‍රදායන්ට ගරු කිරීම අත්‍යවශ්‍ය වේ." },
    icon: "Heart",
    tips: [
      { EN: "Step 1: Wear clothing that covers shoulders and knees when entering Buddhist or Hindu temples.", SI: "පියවර 1: විහාරස්ථාන වලට ඇතුළු වන විට උරහිස් සහ දණහිස් වැසෙන පරිදි ඇඳුම් අඳින්න." },
      { EN: "Step 2: Remove shoes and headwear before stepping onto temple grounds.", SI: "පියවර 2: විහාර භූමියට ඇතුළු වීමට පෙර පාවහන් සහ හිස්වැසුම් ඉවත් කරන්න." },
      { EN: "Step 3: Never pose with your back to a Buddha statue for photographs; it is considered disrespectful.", SI: "පියවර 3: බුදු පිළිමවලට පිටුපස හරවා ඡායාරූප නොගන්න, එය අගෞරවයක් ලෙස සැලකේ." }
    ]
  },
  {
    id: "e6",
    title: { EN: "Health & Hygiene", SI: "සෞඛ්‍යය සහ සනීපාරක්ෂාව" },
    description: { EN: "Stay healthy by following basic tropical travel hygiene practices.", SI: "නිවර්තන කලාපීය සෞඛ්‍ය උපදෙස් අනුගමනය කිරීමෙන් ඔබේ නීරෝගීභාවය රැකගන්න." },
    icon: "Activity",
    tips: [
      { EN: "Step 1: Drink only bottled or filtered water; avoid tap water at all times.", SI: "පියවර 1: පානය සඳහා බෝතල් කළ හෝ පෙරන ලද ජලය පමණක් භාවිතා කරන්න." },
      { EN: "Step 2: Use mosquito repellent (with DEET) especially during dawn and dusk.", SI: "පියවර 2: විශේෂයෙන් සන්ධ්‍යා කාලයේදී මදුරු මර්දන ආලේපන භාවිතා කරන්න." },
      { EN: "Step 3: Carry a basic first-aid kit with rehydration salts (ORC) for the tropical heat.", SI: "පියවර 3: අධික රශ්මියෙන් ආරක්ෂා වීමට ජීවනී වැනි දේ අඩංගු ප්‍රථමාධාර කට්ටලයක් ළඟ තබා ගන්න." }
    ]
  },
  {
    id: "e7",
    title: { EN: "Smart Packing List", SI: "අවශ්‍ය බඩු බාහිරාදිය" },
    description: { EN: "Pack for diverse climates, from tropical beaches to chilly mountains.", SI: "වෙරළේ සිට කඳුකරය දක්වා ඕනෑම දේශගුණයකට සරිලන පරිදි බඩු අසුරන්න." },
    icon: "Backpack",
    tips: [
      { EN: "Step 1: Pack lightweight cotton clothes for the coast and a warm fleece for Ella/Nuwara Eliya.", SI: "පියවර 1: වෙරළ තීරය සඳහා සැහැල්ලු ඇඳුම්ද, නුවරඑළිය/ඇල්ල සඳහා උණුසුම් ඇඳුම්ද රැගෙන එන්න." },
      { EN: "Step 2: Bring a universal power adapter (Type D/G are common in Sri Lanka).", SI: "පියවර 2: විශ්වීය විදුලි ඇඩැප්ටරයක් රැගෙන එන්න (ලංකාවේ Type D/G බහුලව භාවිතා වේ)." },
      { EN: "Step 3: Don't forget high-SPF sunscreen and a reusable water bottle to reduce plastic waste.", SI: "පියවර 3: හිරු රශ්මියෙන් ආරක්ෂා වීමට ආලේපන සහ ප්ලාස්ටික් අවම කිරීමට වතුර බෝතලයක් රැගෙන එන්න." }
    ]
  },
  {
    id: "e8",
    title: { EN: "Food & Water Safety", SI: "ආහාර සහ ජලයේ ආරක්ෂාව" },
    description: { EN: "Sri Lankan food is delicious but can be very spicy. Eat like a local safely.", SI: "ලංකාවේ ආහාර ඉතා රසවත් නමුත් සැර වැඩි විය හැක. ආරක්ෂිතව දේශීය ආහාර රස විඳින්න." },
    icon: "Utensils",
    tips: [
      { EN: "Step 1: Start with 'mild' spice levels if you aren't used to fiery chilies.", SI: "පියවර 1: ඔබ සැර ආහාරවලට හුරු නැතිනම් 'mild' ලෙස ආහාර ඇණවුම් කරන්න." },
      { EN: "Step 2: Eat at busy local spots; high turnover usually means fresher food.", SI: "පියවර 2: සෙනඟ ගැවසෙන අවන්හල් තෝරාගන්න, එවිට ඔබට නැවුම් ආහාර ලබාගත හැක." },
      { EN: "Step 3: Peel all fruits yourself; enjoy tropical delights like Mango and Papaya safely.", SI: "පියවර 3: පලතුරු අනුභවයට පෙර එහි ලෙලි ඉවත් කර හොඳින් සෝදා ගන්න." }
    ]
  },
  {
    id: "e9",
    title: { EN: "Tipping & Bargaining", SI: "අමතර දීමනා සහ මිල ගණන්" },
    description: { EN: "Understanding the social norms of tipping and shopping.", SI: "අමතර දීමනා සහ සාප්පු සවාරි පිළිබඳ සමාජ සම්මුතීන් තේරුම් ගන්න." },
    icon: "ShoppingBag",
    tips: [
      { EN: "Step 1: Tipping is common; 10% is standard in restaurants if not included in the bill.", SI: "පියවර 1: අවන්හල්වල බිල්පතට එකතු කර නැතිනම් 10% ක අමතර දීමනාවක් (tip) ලබා දීම සිරිතකි." },
      { EN: "Step 2: Bargain politely in street markets (Pettah/Galle Fort), but don't overdo it.", SI: "පියවර 2: පදික වේදිකාවේ වෙළඳසැල්වලදී කාරුණිකව මිල අඩු කරන ලෙස ඉල්ලා සිටින්න." },
      { EN: "Step 3: Fixed-price shops (like Laksala or Odel) do not allow bargaining.", SI: "පියවර 3: මිල නියම කර ඇති ප්‍රධාන වෙළඳසැල්වල මිල අඩු කිරීම් සිදු නොවේ." }
    ]
  },
  {
    id: "e10",
    title: { EN: "Sustainable Travel", SI: "තිරසාර සංචාරක කටයුතු" },
    description: { EN: "Help us protect our island's natural beauty and wildlife.", SI: "අපගේ දිවයිනේ ස්වභාවික සුන්දරත්වය සහ වනජීවීන් රැක ගැනීමට උදවු වන්න." },
    icon: "Leaf",
    tips: [
      { EN: "Step 1: Say no to single-use plastics; many hotels offer filtered water stations.", SI: "පියවර 1: වරක් පමණක් භාවිතා කරන ප්ලාස්ටික් ප්‍රතික්ෂේප කරන්න." },
      { EN: "Step 2: Keep a safe distance from wildlife in National Parks; never feed the animals.", SI: "පියවර 2: ජාතික උද්‍යානවලදී සතුන්ගෙන් ආරක්ෂිත දුරක් තබා ගන්න, ඔවුන්ට ආහාර නොදෙන්න." },
      { EN: "Step 3: Support local artisans by buying authentic handmade crafts instead of mass-produced souvenirs.", SI: "පියවර 3: දේශීය ශිල්පීන්ගේ නිෂ්පාදන මිලදී ගැනීමෙන් අපේ දේශීය කර්මාන්ත ශක්තිමත් කරන්න." }
    ]
  }
];

export const CATEGORIES_DATA = [
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
    significance: { EN: 'Essential for spiritual ceremonies.', SI: 'ආත්මික චාරිත්‍ර සඳහා අත්‍යවශ්‍ය වේ.' }
  }
];