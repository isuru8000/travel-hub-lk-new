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
      SI: "පස්වැනි සියවසේදී කාශ්‍යප රජු විසින් කරවන ලද සීගිරිය, ශ්‍රී ලංකාවේ සංස්කෘතික ත්‍රිකෝණයේ හදවත බඳුය. මෙය යුනෙස්කෝ (UNESCO) ලෝක උරුමයක් වන අතර, මෙහි ඇති ඉංජිනේරු තාක්ෂණය, චිත්‍ර කලාව සහ නගර නිර්මාණ ශිල්පය අදටත් ලොවම මවිතයට පත් කරයි." 
    }, 
    shortStory: { EN: "The 8th Wonder of the World – A fortress in the sky.", SI: "ලොව අටවන පුදුමය - අහස උසට විහිදුණු බලකොටුවකි." }, 
    bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" }, 
    tips: [
      { EN: "Climb early morning (around 7 AM) to avoid the intense midday heat and large crowds.", SI: "හිරු රශ්මියෙන් සහ අධික සෙනඟින් බේරීමට උදෑසන 7 ට පමණ නැගීම අරඹන්න." },
      { EN: "Bring plenty of water but dispose of plastic responsibly; reuseable bottles are highly recommended.", SI: "ප්‍රමාණවත් තරම් ජලය රැගෙන යන්න, නමුත් ප්ලාස්ටික් බැහැර කිරීමේදී සැලකිලිමත් වන්න." }
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
      SI: "ශ්‍රී ලංකාවේ දෙවන පැරණිතම රාජධානිය වන පොළොන්නරුව, 12 වන සියවසේ උද්‍යාන නගර නිර්මාණකරණයේ විශිෂ්ටත්වය කියාපායි." 
    }, 
    shortStory: { EN: "Where stone tells the story of an empire.", SI: "ගල් කැටයම් අධිරාජ්‍යයක කතාව පවසන තැන." }, 
    bestTime: { EN: "July to September", SI: "ජූලි සිට සැප්තැම්බර් දක්වා" }, 
    tips: [
      { EN: "Rent a bicycle at the entrance; the archaeological site is vast and difficult to cover entirely on foot.", SI: "පිවිසුමෙන් බයිසිකලයක් කුලියට ගන්න; නටබුන් භූමිය ඉතා විශාලය." }
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
      EN: "A colonial-era masterpiece tucked between Ella and Demodara, this bridge was built entirely out of rock, bricks, and cement without using a single piece of steel. Today, it stands as one of the most picturesque railway crossings in the world.", 
      SI: "ඇල්ල සහ දෙමෝදර අතර පිහිටි මෙම පාලම කිසිදු වානේ කැබැල්ලක් භාවිතා නොකර ගල් සහ ගඩොල් වලින් පමණක් නිමවූ යටත් විජිත යුගයේ අපූරු නිර්මාණයකි." 
    }, 
    shortStory: { EN: "The bridge in the sky where time slows down.", SI: "කාලය සෙමින් ගෙවෙන අහස උසට බැඳි පාලම." }, 
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" }, 
    tips: [
      { EN: "Check the train schedule at the Ella station; seeing the blue train cross the arches is the quintessential experience.", SI: "නිල් පැහැති දුම්රිය පාලම හරහා යන අයුරු දැක ගැනීමට දුම්රිය වේලාවන් පරීක්ෂා කරගන්න." }
    ], 
    location: "Badulla District", 
    coordinates: { x: 62, y: 68 } 
  },
  {
    id: "anuradhapura",
    name: { EN: "Sacred City of Anuradhapura", SI: "අනුරාධපුර පූජනීය නගරය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "The first capital of Sri Lanka, Anuradhapura remained a seat of power for over a thousand years. It is home to the Jaya Sri Maha Bodhi, the oldest documented human-planted tree in the world, and massive stupas like Ruwanwelisaya that rival the pyramids of Giza in scale.",
      SI: "ශ්‍රී ලංකාවේ ප්‍රථම අගනුවර වන අනුරාධපුරය, වසර දහසකට වැඩි කාලයක් රාජධානියේ මධ්‍යස්ථානය විය."
    },
    shortStory: { EN: "The eternal capital of kings and saints.", SI: "රජවරුන්ගේ සහ මුනිවරුන්ගේ සදාකාලික අගනුවර." },
    bestTime: { EN: "May to September", SI: "මැයි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Hire a local guide to understand the complex hydraulic civilization.", SI: "දේශීය මගපෙන්වන්නෙකු ලබා ගැනීමෙන් පුරාණ වාරි ශිෂ්ටාචාරය ගැන අවබෝධයක් ලබාගත හැක." }],
    location: "Anuradhapura District",
    coordinates: { x: 48, y: 25 }
  },
  {
    id: "galle-fort",
    name: { EN: "Galle Dutch Fort", SI: "ගාල්ල ලන්දේසි කොටුව" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Built by the Portuguese and later extensively fortified by the Dutch in the 17th century, the Galle Fort is the best-preserved colonial sea fortress in Asia. It is a living monument where history blends with modern art galleries, cafes, and a vibrant community.",
      SI: "ලන්දේසි පාලන සමයේදී ඉදිකළ ගාල්ල කොටුව, ආසියාවේ අතීත උරුමය කියාපාන සුවිශේෂී ස්ථානයකි."
    },
    shortStory: { EN: "A living colonial time capsule by the sea.", SI: "මුහුදු වෙරළේ පිහිටි යටත් විජිත යුගයේ සජීවී සාක්ෂියකි." },
    bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Walk the ramparts at sunset for the most breathtaking views of the lighthouse.", SI: "හිරු බැස යන වේලාවට ප්‍රාකාරය මත ඇවිද යමින් ප්‍රදීපාගාරයේ අලංකාරය නරඹන්න." }],
    location: "Galle District",
    coordinates: { x: 40, y: 92 }
  },
  {
    id: "kandy-temple",
    name: { EN: "Temple of the Tooth Relic", SI: "ශ්‍රී දළදා මාළිගාව" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "The Sri Dalada Maligawa in Kandy houses the sacred tooth relic of Lord Buddha. It was the last royal capital of the Sinhalese kings and remains the most sacred place of worship for Buddhists worldwide. The architecture is a stunning example of Kandyan royal heritage.",
      SI: "මහනුවර පිහිටි ශ්‍රී දළදා මාළිගාව බෞද්ධ ජනතාවගේ පූජනීයම වන්දනා ස්ථානයයි."
    },
    shortStory: { EN: "The spiritual heart of the island.", SI: "දිවයිනේ ආධ්‍යාත්මික හදවත." },
    bestTime: { EN: "July (during Perahera)", SI: "ජූලි මාසයේ (පෙරහැර කාලය)" },
    tips: [{ EN: "Wear white or light-colored modest clothing covering shoulders and knees.", SI: "උරහිස් සහ දණහිස් වැසෙන සේ සුදු හෝ ලා පැහැති ඇඳුම් ඇඳීම අනිවාර්ය වේ." }],
    location: "Kandy District",
    coordinates: { x: 50, y: 50 }
  },
  {
    id: "yala-safari",
    name: { EN: "Yala National Park", SI: "යාල ජාතික උද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Yala is Sri Lanka's most famous national park, having the highest leopard density in the world. Originally a hunting ground for the British elite, it was established as a sanctuary in 1900 and a national park in 1938.",
      SI: "ලොව වැඩිම දිවියන් ප්‍රමාණයක් දැකගත හැකි යාල ජාතික උද්‍යානය වනජීවී ලෝලීන්ගේ පාරාදීසයකි."
    },
    shortStory: { EN: "Domain of the spotted hunter.", SI: "දිවියන්ගේ අඩවිය." },
    bestTime: { EN: "February to June", SI: "පෙබරවාරි සිට ජූනි දක්වා" },
    tips: [{ EN: "Book the early morning 6 AM safari for the best chance of leopard sightings.", SI: "දිවියන් බලා ගැනීමට නම් උදෑසන 6 ට පමණ සෆාරි ගමන ආරම්භ කරන්න." }],
    location: "Hambantota District",
    coordinates: { x: 75, y: 82 }
  },
  {
    id: "mirissa-beach",
    name: { EN: "Mirissa Coast", SI: "මිරිස්ස වෙරළ තීරය" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Once a sleepy fishing village, Mirissa has transformed into a global hub for whale watching and surf culture. Its crescent-shaped beach and the iconic Coconut Tree Hill offer some of the most Instagrammed spots in the country.",
      SI: "මිරිස්ස යනු නිල් තල්මසුන් සහ රළ පැදීම සඳහා ප්‍රචලිත අලංකාර වෙරළ තීරයකි."
    },
    shortStory: { EN: "Sunsets, surfing, and sapphire seas.", SI: "මනරම් හිරු බැසයාම සහ නිල්වන් සාගරය." },
    bestTime: { EN: "November to March", SI: "නොවැම්බර් සිට මාර්තු දක්වා" },
    tips: [{ EN: "Visit Coconut Tree Hill early at dawn to avoid the crowds.", SI: "සෙනඟ මඟ හැරීමට උදෑසනම කොකනට් ට්‍රී හිල් (Coconut Tree Hill) වෙත යන්න." }],
    location: "Matara District",
    coordinates: { x: 50, y: 92 }
  },
  {
    id: "adams-peak",
    name: { EN: "Adam's Peak (Sri Pada)", SI: "ශ්‍රී පාදස්ථානය" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1705730312722-095ca8123d48?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1705730312722-095ca8123d48?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "A 2,243m conical mountain sacred to four religions. Buddhists believe it bears the footprint of the Buddha, Hindus of Shiva, and Christians/Muslims of Adam. The climb of 5,500 steps is a spiritual rite of passage for many locals.",
      SI: "ආගම් කිහිපයකටම පූජනීය වූ ශ්‍රී පාද කන්ද, සොබාදහම සහ භක්තිය එක්වන ස්ථානයකි."
    },
    shortStory: { EN: "The peak of the sacred shadow.", SI: "පූජනීය සිරිපා පියුම." },
    bestTime: { EN: "December to May", SI: "දෙසැම්බර් සිට මැයි දක්වා" },
    tips: [{ EN: "Start the climb at 1 AM to reach the summit in time for the mystical sunrise (Ira Sewaya).", SI: "ඉර සේවය නැරඹීමට නම් මධ්‍යම රාත්‍රී 1 ට පමණ ගමන ආරම්භ කරන්න." }],
    location: "Ratnapura District",
    coordinates: { x: 45, y: 70 }
  },
  {
    id: "horton-plains",
    name: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "A cold, wind-swept plateau 2,100m above sea level. It ends at World's End, a sheer precipice with a drop of 870m. The plains are a vital watershed and home to many endemic species like the Sambar deer.",
      SI: "හෝර්ටන් තැන්න යනු මීදුමෙන් වැසුණු, අලංකාර දියඇලි සහ ලෝකාන්තය පිහිටි ජාතික උද්‍යානයකි."
    },
    shortStory: { EN: "Where the world suddenly ends.", SI: "ලෝකයේ කෙළවර හමුවන තැන." },
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" },
    tips: [{ EN: "Reach World's End before 9 AM, after which the mist usually obscures the view.", SI: "උදෑසන 9 ට පෙර ලෝකාන්තය වෙත ළඟා වන්න; ඉන්පසු මීදුම නිසා දර්ශනය නොපෙනී යා හැක." }],
    location: "Nuwara Eliya District",
    coordinates: { x: 55, y: 72 }
  },
  {
    id: "nilaveli-beach",
    name: { EN: "Nilaveli & Pigeon Island", SI: "නිලාවේලි සහ පරෙවි දූපත" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Nilaveli is considered one of the finest beaches in the country with its powder-soft white sand. Nearby Pigeon Island is a marine national park offering world-class snorkeling with reef sharks and turtles.",
      SI: "නිලාවේලි යනු සුදු වැල්ලෙන් පිරි නිසල වෙරළකි. පරෙවි දූපත මුහුදු ජීවීන් නැරඹීමට කදිම ස්ථානයකි."
    },
    shortStory: { EN: "White sands and coral cathedrals.", SI: "සුදු වැල්ල සහ කොරල් පර." },
    bestTime: { EN: "May to September", SI: "මැයි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Take an early boat to Pigeon Island to avoid the midday sun while snorkeling.", SI: "දහවල් රශ්මියට පෙර පරෙවි දූපත වෙත යාමට උදෑසන බෝට්ටුවක් ලබාගන්න." }],
    location: "Trincomalee District",
    coordinates: { x: 75, y: 22 }
  },
  {
    id: "udawalawe",
    name: { EN: "Udawalawe National Park", SI: "උඩවලව ජාතික උද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1547466750-6a68393e1174?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1547466750-6a68393e1174?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Created to provide a sanctuary for wild animals displaced by the construction of the Udawalawe Reservoir, this park is the best place in Asia to see wild elephants in their hundreds.",
      SI: "වන අලින් සිය ගණනින් එකවර දැකගත හැකි උඩවලව, වනජීවී ලෝලීන්ට අමතක නොවන අත්දැකීමක් ලබා දෙයි."
    },
    shortStory: { EN: "The kingdom of the gentle giants.", SI: "වන අලින්ගේ රජදහන." },
    bestTime: { EN: "January to May", SI: "ජනවාරි සිට මැයි දක්වා" },
    tips: [{ EN: "Visit the Elephant Transit Home nearby during feeding times (9 AM, 12 PM, 3 PM).", SI: "කිරි බොන වේලාවන්හිදී අලි අනාථාගාරය නැරඹීමට අමතක නොකරන්න." }],
    location: "Ratnapura District",
    coordinates: { x: 55, y: 82 }
  },
  {
    id: "dambulla",
    name: { EN: "Dambulla Cave Temple", SI: "දඹුලු රජමහා විහාරය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "A UNESCO site, this is the largest and best-preserved cave temple complex in Sri Lanka. It contains 153 Buddha statues and stunning murals covering 2,100 square meters, dating back over 2,000 years.",
      SI: "දඹුලු ලෙන් විහාරය යනු පුරාණ බිතුසිතුවම් සහ බුද්ධ ප්‍රතිමා විශාල ප්‍රමාණයක් සහිත ඓතිහාසික ස්ථානයකි."
    },
    shortStory: { EN: "Golden murals in a mountain of stone.", SI: "ගල් ගුහාවක නිමවූ රන්වන් බිතුසිතුවම්." },
    bestTime: { EN: "Year-round", SI: "වසරේ ඕනෑම කාලයක" },
    tips: [{ EN: "Beware of monkeys near the entrance; keep your belongings and food securely stored.", SI: "පිවිසුමේ සිටින වඳුරන්ගෙන් ප්‍රවේශම් වන්න; ආහාර පාන ප්‍රවේශමෙන් තබා ගන්න." }],
    location: "Matale District",
    coordinates: { x: 51, y: 35 }
  },
  {
    id: "knuckles",
    name: { EN: "Knuckles Range", SI: "නකල්ස් කඳු පන්තිය" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1632639521806-cead484cc369?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1632639521806-cead484cc369?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Named for its resemblance to a clenched fist, this mountain range is a UNESCO site known for its extreme biodiversity and hidden cloud forests. It is the premier destination for deep jungle trekking.",
      SI: "නකල්ස් කඳු පන්තිය යනු ජෛව විවිධත්වයෙන් පිරි, කඳු නැගීමට කැමති අයට කදිම ස්ථානයකි."
    },
    shortStory: { EN: "The mist-shrouded knuckles of the earth.", SI: "පොළොවේ මීදුමෙන් වැසුණු නකල්ස් කඳු." },
    bestTime: { EN: "June to September", SI: "ජූනි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Hire a licensed guide as the weather can change rapidly and trails are unmarked.", SI: "මග සොයා ගැනීම අපහසු බැවින් අනිවාර්යයෙන්ම මගපෙන්වන්නෙකු ලබා ගන්න." }],
    location: "Matale District",
    coordinates: { x: 54, y: 48 }
  },
  {
    id: "arugam-bay",
    name: { EN: "Arugam Bay Surf Hub", SI: "ආරුගම්බේ රළ පැදීමේ කලාපය" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "One of the top 10 surf spots in the world, Arugam Bay is a crescent-shaped bay on the remote east coast. It retains a laid-back, hippie vibe with beach parties and a vibrant international community.",
      SI: "ලොව හොඳම රළ පැදීමේ ස්ථාන අතරින් එකක් වන ආරුගම්බේ, තරුණයින්ගේ ජනප්‍රියම තේරීමකි."
    },
    shortStory: { EN: "Catch the perfect break.", SI: "පරිපූර්ණ රළ මතින් පාවී යන්න." },
    bestTime: { EN: "May to September", SI: "මැයි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Visit Whiskey Point for beginner-friendly waves and sunset beach vibes.", SI: "ආරම්භකයින්ට රළ පැදීම පුහුණු වීමට විස්කි පොයින්ට් (Whiskey Point) කදිමයි." }],
    location: "Ampara District",
    coordinates: { x: 80, y: 65 }
  },
  {
    id: "wilpattu",
    name: { EN: "Wilpattu National Park", SI: "විල්පත්තුව ජාතික උද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1516422213484-214272336321?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1516422213484-214272336321?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "The largest and oldest national park in Sri Lanka, Wilpattu is unique for its 'Willus'—natural rain-fed water basins. It is less crowded than Yala, offering a more serene safari experience.",
      SI: "විල්පත්තුව යනු ලංකාවේ විශාලතම ජාතික උද්‍යානයයි. මෙහි ඇති විල් (Willus) සුවිශේෂී ලක්ෂණයකි."
    },
    shortStory: { EN: "The land of natural lakes.", SI: "ස්වභාවික විල් පිරි රජදහන." },
    bestTime: { EN: "May to October", SI: "මැයි සිට ඔක්තෝබර් දක්වා" },
    tips: [{ EN: "Pack binoculars for bird watching around the many lakes within the park.", SI: "විල් වටා සිටින පක්ෂීන් නැරඹීමට දුරදක්නයක් රැගෙන යාමට අමතක නොකරන්න." }],
    location: "Anuradhapura District",
    coordinates: { x: 38, y: 35 }
  },
  {
    id: "jaffna-library",
    name: { EN: "Jaffna Heritage", SI: "යාපනය උරුමය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1700315303907-5b222bb8bb47?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1700315303907-5b222bb8bb47?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "The Jaffna Public Library was once one of the largest libraries in Asia. Jaffna serves as the center of Tamil culture in Sri Lanka, with its unique cuisine, the magnificent Nallur Kandaswamy Kovil, and colonial ruins.",
      SI: "යාපනය යනු සුවිශේෂී සංස්කෘතියක් සහ රසවත් ආහාර සහිත උතුරු ලංකාවේ හදවතයි."
    },
    shortStory: { EN: "Resilience in white stone.", SI: "සුදු ගලින් නිමවූ නොසැලෙන උරුමය." },
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" },
    tips: [{ EN: "Try the authentic Jaffna Crab Curry; it's world-famous for its unique spice blend.", SI: "යාපනයටම ආවේණික වූ කකුළු වෑංජනය රස බැලීමට අමතක නොකරන්න." }],
    location: "Jaffna District",
    coordinates: { x: 45, y: 8 }
  },
  {
    id: "sinharaja",
    name: { EN: "Sinharaja Rainforest", SI: "සිංහරාජ වැසි වනාන්තරය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "A UNESCO World Heritage site and a Biosphere Reserve, Sinharaja is the last viable area of primary tropical rainforest in Sri Lanka. 95% of Sri Lanka's endemic birds are found here.",
      SI: "ලෝක උරුමයක් වන සිංහරාජය, ශ්‍රී ලංකාවේ ඇති ප්‍රධානතම නිවර්තන වැසි වනාන්තරයයි."
    },
    shortStory: { EN: "The emerald crown of the island.", SI: "දිවයිනේ හරිත ඔටුන්න." },
    bestTime: { EN: "January to April", SI: "ජනවාරි සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Wear leech socks and carry salt or lime water to protect yourself while trekking.", SI: "කූඩැල්ලන්ගෙන් ආරක්ෂා වීමට 'කූඩැලු මේස්' සහ ලුණු වතුර රැගෙන යන්න." }],
    location: "Ratnapura District",
    coordinates: { x: 48, y: 80 }
  },
  {
    id: "nuwara-eliya",
    name: { EN: "Little England (Nuwara Eliya)", SI: "නුබරඑළිය (පුංචි එංගලන්තය)" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1594631252845-29fc458695d1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1594631252845-29fc458695d1?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Established as a hill station for British colonial officials, it remains famous for its cool climate and Victorian-style architecture. Gregory Lake and the post office are iconic landmarks.",
      SI: "සිසිල් කාලගුණය සහ ලස්සන මල් වතු නිසා නුවරඑළිය සංචාරකයින්ගේ ප්‍රියතම ස්ථානයකි."
    },
    shortStory: { EN: "Mist, tea, and Victorian charm.", SI: "මීදුමෙන් වැසුණු තේ වතු යාය." },
    bestTime: { EN: "April (Spring season)", SI: "අප්‍රේල් මාසය (වසන්ත සමය)" },
    tips: [{ EN: "Dress in layers; the temperature can drop significantly once the sun goes down.", SI: "සවස් කාලයේදී අධික සීතලක් පවතින බැවින් උණුසුම් ඇඳුම් රැගෙන එන්න." }],
    location: "Nuwara Eliya District",
    coordinates: { x: 55, y: 60 }
  },
  {
    id: "haputale",
    name: { EN: "Lipton's Seat", SI: "ලිප්ටන් සීට්" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "This viewpoint was the favorite lookout for Sir Thomas Lipton when surveying his vast tea empire. On a clear day, you can see across 7 provinces of Sri Lanka.",
      SI: "ශ්‍රී ලංකාවේ පළාත් 7ක් පමණ එකවර නැරඹිය හැකි ලිප්ටන් සීට්, ඇදහිය නොහැකි දර්ශනයක් ලබා දෙයි."
    },
    shortStory: { EN: "A view fit for a tea tycoon.", SI: "තේ වතු යාය පෙනෙන මනරම් දර්ශනය." },
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" },
    tips: [{ EN: "Visit at sunrise (5:30 AM) for the clearest views before the clouds roll in.", SI: "වලාකුළු මතු වීමට පෙර දසුන් නැරඹීමට උදෑසන 5:30 ට පමණ එහි යන්න." }],
    location: "Badulla District",
    coordinates: { x: 60, y: 75 }
  },
  {
    id: "bentota-beach",
    name: { EN: "Bentota Golden Mile", SI: "බෙන්තොට වෙරළ තීරය" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1558446791-ac5fec3caddf?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1558446791-ac5fec3caddf?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Famous for its river safaris and high-end luxury resorts, Bentota is where the river meets the sea. It's the water sports capital of the island, offering jet-skiing and parasailing.",
      SI: "බෙන්තොට යනු ජල ක්‍රීඩා සහ මනරම් වෙරළ තීරය නිසා ප්‍රචලිත සංචාරක කලාපයකි."
    },
    shortStory: { EN: "Where the river embraces the ocean.", SI: "ගඟ මුහුද හා එක්වන මනරම් තැන." },
    bestTime: { EN: "October to April", SI: "ඔක්තෝබර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Go on a Madu River safari to see the mangrove forests and cinnamon islands.", SI: "මිරිස්ස මාදු ගඟේ සෆාරි ගමනක් යාමට අමතක නොකරන්න." }],
    location: "Galle District",
    coordinates: { x: 38, y: 82 }
  },
  {
    id: "unawatuna",
    name: { EN: "Unawatuna Bay", SI: "උණවටුන වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1512100356956-c1224c636a0d?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1512100356956-c1224c636a0d?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Consistently ranked among the best beaches in the world, this semi-circular bay is famous for its calm waters and vibrant nightlife. The Japanese Peace Pagoda on the hill nearby adds a spiritual touch.",
      SI: "ලොව හොඳම වෙරළ තීරයන් අතර නිතරම රැඳී සිටින උණවටුන, සංචාරකයින්ගේ ආකර්ෂණීය තෝරා ගැනීමකි."
    },
    shortStory: { EN: "The turquoise crescent of the south.", SI: "දකුණේ පිහිටි නිල්වන් වෙරළ." },
    bestTime: { EN: "November to April", SI: "නොවැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Hike up to the Japanese Peace Pagoda for a panoramic view of the bay.", SI: "අලංකාර දසුන් නැරඹීමට සාම චෛත්‍යය වෙත ඇවිද යන්න." }],
    location: "Galle District",
    coordinates: { x: 42, y: 92 }
  },
  {
    id: "pinnawala",
    name: { EN: "Pinnawala Elephants", SI: "පින්නවල අලි අනාථාගාරය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Established in 1975, this orphanage was created to care for abandoned and wounded wild elephants. Watching the herd bathe in the Ma Oya river is a truly heartwarming sight.",
      SI: "අතහැර දැමූ අලි පැටවුන් රැකබලා ගන්නා පින්නවල අලි අනාථාගාරය, ලොව පුරා ප්‍රසිද්ධියක් උසුලයි."
    },
    shortStory: { EN: "A sanctuary for the gentle giants.", SI: "අලින්ගේ ආරක්ෂිත නිවහන." },
    bestTime: { EN: "Year-round", SI: "වසරේ ඕනෑම කාලයක" },
    tips: [{ EN: "River bathing times are usually from 10 AM to 12 PM and 2 PM to 4 PM.", SI: "අලින් ගඟේ නෑම නැරඹීමට උදෑසන 10 ට හෝ පස්වරු 2 ට පැමිණෙන්න." }],
    location: "Kegalle District",
    coordinates: { x: 42, y: 48 }
  },
  {
    id: "pidurangala",
    name: { EN: "Pidurangala Peak", SI: "පිදුරංගල පර්වතය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1581451291845-66779435b64b?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1581451291845-66779435b64b?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Pidurangala Rock is adjacent to Sigiriya and served as a monastic retreat for the monks. It offers the absolute best panoramic view of the Sigiriya Lion Rock itself.",
      SI: "සීගිරියට ආසන්නව පිහිටි පිදුරංගල පර්වතය, අතීතයේ භික්ෂූන් වහන්සේලාගේ භාවනා මධ්‍යස්ථානයක් ලෙස පැවතිණි."
    },
    shortStory: { EN: "The perfect window to the Lion Rock.", SI: "සීගිරි අභිමන දකින හොඳම පියස." },
    bestTime: { EN: "Sunrise or Sunset", SI: "හිරු උදාව හෝ බැසයාම" },
    tips: [{ EN: "The final climb is steep and requires some scrambling over boulders.", SI: "අවසාන කොටස නැගීම තරමක් අසීරු බැවින් සැහැල්ලු ඇඳුම් සහ පාවහන් පළඳින්න." }],
    location: "Matale District",
    coordinates: { x: 53, y: 37 }
  },
  {
    id: "mihintale",
    name: { EN: "Mihintale Sacred Hill", SI: "මිහින්තලේ පූජා භූමිය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1628236113113-1280392c695c?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "The birthplace of Buddhism in Sri Lanka. It was here that Arahat Mahinda met King Devanampiyatissa, fundamentally changing the island's culture forever.",
      SI: "ශ්‍රී ලංකාවට බුදුදහම ලැබුණේ මිහින්තලා පුදබිමෙනි. මහින්ද හිමියන් සහ දේවානම්පියතිස්ස රජු හමුවූ ස්ථානය මෙයයි."
    },
    shortStory: { EN: "The cradle of a nation's faith.", SI: "සිංහල බෞද්ධ ශිෂ්ටාචාරයේ ආරම්භය." },
    bestTime: { EN: "June (Poson Poya)", SI: "ජූනි මාසය (පොසොන් පෝය)" },
    tips: [{ EN: "Climb the 1,840 granite steps slowly and enjoy the changing landscape.", SI: "පැරණි ගල් පඩි 1,840 නැගීම අපූරු අත්දැකීමකි." }],
    location: "Anuradhapura District",
    coordinates: { x: 50, y: 23 }
  },
  {
    id: "yapahuwa",
    name: { EN: "Yapahuwa Fortress", SI: "යාපහුව බලකොටුව" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "A short-lived but spectacular capital of the 13th century. Its ornamental staircase is one of the most beautiful pieces of stone carving in the island.",
      SI: "13 වන සියවසේ රාජධානියක් වූ යාපහුව, එහි ඇති අලංකාර ගල් කැටයම් සහිත පඩිපෙළ නිසා ප්‍රසිද්ධය."
    },
    shortStory: { EN: "The stone stair of kings.", SI: "ගල් කැටයම් පඩිපෙළ මත පිහිටි අතීතය." },
    bestTime: { EN: "Morning (avoiding heat)", SI: "උදෑසන කාලය" },
    tips: [{ EN: "Look closely at the lions carved into the balustrades; they are unique to Yapahuwa.", SI: "මෙහි ඇති සිංහ රූප අනෙකුත් රාජධානිවල සිංහ රූපවලට වඩා වෙනස්ය." }],
    location: "Kurunegala District",
    coordinates: { x: 45, y: 45 }
  },
  {
    id: "ritigala",
    name: { EN: "Ritigala Monastery", SI: "රිටිගල ආරණ්‍ය සේනාසනය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "An ancient Buddhist monastery hidden in a lush forest mountain. Legend says it was part of the Hanuman myth in the Ramayana.",
      SI: "ඝන වනාන්තරයක සැඟවුණු රිටිගල පුදබිම, රාමායණ කතාව සමඟ ද සම්බන්ධයක් පවතින බව පැවසේ."
    },
    shortStory: { EN: "Mystic ruins in a jungle embrace.", SI: "වනයේ සැඟවුණු අභිරහස් නටබුන්." },
    bestTime: { EN: "Year-round", SI: "වසරේ ඕනෑම කාලයක" },
    tips: [{ EN: "Maintain absolute silence to preserve the peaceful atmosphere of the forest monks.", SI: "මෙහි වෙසෙන භික්ෂූන් වහන්සේලාගේ සාමකාමී බව රැකීමට නිශ්ශබ්දතාවය රකින්න." }],
    location: "Anuradhapura District",
    coordinates: { x: 52, y: 32 }
  },
  {
    id: "jaffna-fort",
    name: { EN: "Jaffna Sea Fort", SI: "යාපනය කොටුව" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1700315303907-5b222bb8bb47?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1700315303907-5b222bb8bb47?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "A sprawling fort built by the Portuguese in 1618, later expanded by the Dutch and British. It is a symbol of Jaffna's colonial and maritime history.",
      SI: "පෘතුගීසීන් විසින් 1618 දී ඉදිකළ යාපනය කොටුව, පසුව ලන්දේසීන් සහ බ්‍රිතාන්‍යයන් විසින් පුළුල් කරන ලදී."
    },
    shortStory: { EN: "Northern sentinel by the sea.", SI: "මුහුදු තීරයේ රැකවලේ සිටින උතුරු කොටුව." },
    bestTime: { EN: "January to April", SI: "ජනවාරි සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Walk along the moat at sunset for a beautiful view of the Jaffna lagoon.", SI: "සවස් කාලයේදී යාපනය කලපුවේ දසුන නැරඹීමට කොටු පවුර මත ඇවිද යන්න." }],
    location: "Jaffna District",
    coordinates: { x: 44, y: 7 }
  },
  {
    id: "nallur-kovil",
    name: { EN: "Nallur Kandaswamy", SI: "නල්ලූර් කන්දසාමි කෝවිල" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "The most important Hindu temple in Jaffna, originally built in the 15th century. It is dedicated to the God of War, Murugan (Lord Skanda).",
      SI: "යාපනයේ පිහිටි ප්‍රධානතම හින්දු කෝවිල මෙයයි. 15 වන සියවසේදී මෙය ප්‍රථම වරට ඉදිකරන ලදී."
    },
    shortStory: { EN: "The golden heart of Jaffna.", SI: "යාපනයේ රන්වන් ආත්මය." },
    bestTime: { EN: "August (Festival)", SI: "අගෝස්තු මාසය (මංගල්‍ය සමය)" },
    tips: [{ EN: "Men must remove their shirts before entering the temple sanctum.", SI: "කෝවිලට ඇතුළු වන පිරිමි පාර්ශවය උඩුකය නිරාවරණය කරගත යුතුය." }],
    location: "Jaffna District",
    coordinates: { x: 46, y: 7 }
  },
  {
    id: "passikudah",
    name: { EN: "Passikudah Beach", SI: "පාසිකුඩා වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Passikudah is famous for its shallow coral reef where one can walk kilometers into the sea with the water barely reaching the waist.",
      SI: "පාසිකුඩා වෙරළ තීරයේ නොගැඹුරු මුහුද නිසා වට කිලෝමීටර් ගණනක් මුහුද මැදට ඇවිද යා හැක."
    },
    shortStory: { EN: "Walking on water in the east.", SI: "නැගෙනහිර මුහුද මැදට පා තබමු." },
    bestTime: { EN: "May to September", SI: "මැයි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Ideal for families with young children due to the extremely calm and shallow water.", SI: "කුඩා දරුවන් සිටින පවුල් සඳහා මෙය ඉතා සුරක්ෂිත වෙරළකි." }],
    location: "Batticaloa District",
    coordinates: { x: 78, y: 48 }
  },
  {
    id: "hikkaduwa",
    name: { EN: "Hikkaduwa Reef", SI: "හික්කඩුව කොරල් පරය" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1512100356956-c1224c636a0d?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1512100356956-c1224c636a0d?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Hikkaduwa was the first beach in Sri Lanka to be discovered by modern tourists in the 60s. It remains a top spot for snorkeling and diving among colorful coral reefs.",
      SI: "1960 දශකයේදී මුලින්ම සොයාගත් සංචාරක කලාපය හික්කඩුවයි. මෙහි ඇති කොරල් පරය ඉතා සුන්දරය."
    },
    shortStory: { EN: "Corals, turtles, and surf vibes.", SI: "කොරල්, කැස්බෑවුන් සහ රළ පෙළ." },
    bestTime: { EN: "November to April", SI: "නොවැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "Take a glass-bottom boat tour if you prefer not to get wet while seeing the fish.", SI: "මාළු නැරඹීමට 'ග්ලාස් බොටම්' බෝට්ටු සංචාරයක් ලබාගත හැක." }],
    location: "Galle District",
    coordinates: { x: 36, y: 85 }
  },
  {
    id: "tangalle",
    name: { EN: "Tangalle Silent Beach", SI: "තංගල්ල සයිලන්ට් වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "The southern-most town with deep blue waters and pristine stretches of sand. Tangalle is less developed, offering a more peaceful and raw ocean experience.",
      SI: "තංගල්ල යනු දකුණු ලංකාවේ පිහිටි නිසල සහ සුන්දරම වෙරළ තීරයන්ගෙන් එකකි."
    },
    shortStory: { EN: "Deep blue peace in the deep south.", SI: "දකුණේ පිහිටි නිල්වන් නිසල වෙරළ." },
    bestTime: { EN: "October to March", SI: "ඔක්තෝබර් සිට මාර්තු දක්වා" },
    tips: [{ EN: "The waves here can be very strong; always check with locals before swimming.", SI: "මෙහි මුහුදු රළ ඉතා සැර විය හැකි බැවින් පිහිනීමේදී සැලකිලිමත් වන්න." }],
    location: "Hambantota District",
    coordinates: { x: 60, y: 95 }
  },
  {
    id: "hiriketiya",
    name: { EN: "Hiriketiya Horseshoe", SI: "හිරිකැටිය වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "A hidden horseshoe-shaped bay that has recently become the hippest surf destination in Sri Lanka. It combines jungle vibes with year-round surfable waves.",
      SI: "අශ්ව ලාඩමක හැඩය ඇති හිරිකැටිය වෙරළ, රළ පැදීම සඳහා ලොව පුරා ප්‍රසිද්ධ වී ඇත."
    },
    shortStory: { EN: "The hidden horseshoe surf gem.", SI: "කැලෑව මැද සැඟවුණු රළ පැදීමේ පාරාදීසය." },
    bestTime: { EN: "Year-round surfing", SI: "වසරේ ඕනෑම කාලයක" },
    tips: [{ EN: "Rent a surfboard and grab a coconut at one of the beach-side cafes.", SI: "සර්ෆින් බෝඩ් එකක් කුලියට ගෙන දවසම විනෝද වෙන්න." }],
    location: "Matara District",
    coordinates: { x: 55, y: 96 }
  },
  {
    id: "weligama",
    name: { EN: "Weligama Bay", SI: "වැලිගම වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Known as the 'Sandy Village', Weligama is famous for its stilt fishermen and as a premier destination for learning how to surf.",
      SI: "වැලිගම යනු රිටි පන්න ධීවර කර්මාන්තයට සහ සර්ෆින් ඉගෙන ගන්න අයට හොඳම ස්ථානයකි."
    },
    shortStory: { EN: "Surfing lessons and stilt fishermen.", SI: "රිටි පන්නයේ ධීවරයින් දකින වැලිගම." },
    bestTime: { EN: "November to March", SI: "නොවැම්බර් සිට මාර්තු දක්වා" },
    tips: [{ EN: "A great place for beginners to catch their first wave; many schools offer certified instructors.", SI: "රළ පැදීමට ආධුනික අයට ඉතා සුදුසුයි." }],
    location: "Matara District",
    coordinates: { x: 48, y: 96 }
  },
  {
    id: "minneriya",
    name: { EN: "Minneriya Elephants", SI: "මින්නේරිය වනෝද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1547466750-6a68393e1174?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1547466750-6a68393e1174?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Famous for 'The Gathering', where hundreds of wild elephants congregate around the ancient Minneriya tank during the dry season.",
      SI: "ලොව විශාලතම වන අලි එකතුව දැකගත හැකි මින්නේරිය වැව ආශ්‍රිත ප්‍රදේශය ඉතා ප්‍රසිද්ධය."
    },
    shortStory: { EN: "Witness the great elephant gathering.", SI: "වන අලි රංචු සිය ගණනින් දකිමු." },
    bestTime: { EN: "July to September", SI: "ජූලි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Afternoon safaris (starting at 3 PM) are best for viewing the elephants by the water.", SI: "සවස් කාලයේ සෆාරි ගමන් වලදී අලින් වැව අසලට පැමිණෙනු දැකිය හැක." }],
    location: "Polonnaruwa District",
    coordinates: { x: 60, y: 32 }
  },
  {
    id: "bundala",
    name: { EN: "Bundala Birds", SI: "බූන්දල කුරුළු පාරාදීසය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1516422213484-214272336321?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1516422213484-214272336321?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "The first Ramsar wetland in Sri Lanka. It's a critical wintering ground for migratory water birds, including the greater flamingo.",
      SI: "ලංකාවේ ප්‍රථම රැම්සා තෙත් බිම බූන්දලයි. මෙහි විදේශීය කුරුළු වර්ග රාශියක් දැකගත හැක."
    },
    shortStory: { EN: "Heaven for migratory water birds.", SI: "විදේශීය කුරුල්ලන්ගේ නවාතැන." },
    bestTime: { EN: "September to March", SI: "සැප්තැම්බර් සිට මාර්තු දක්වා" },
    tips: [{ EN: "Bring a high-zoom camera and binoculars for the best bird watching experience.", SI: "කුරුල්ලන් නැරඹීමට දුරදක්නයක් රැගෙන එන්න." }],
    location: "Hambantota District",
    coordinates: { x: 68, y: 90 }
  },
  {
    id: "kumana",
    name: { EN: "Kumana Sanctuary", SI: "කුමන පක්ෂි අභයභූමිය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1516422213484-214272336321?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1516422213484-214272336321?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Located on the south-east coast, it is renowned for its mangrove-swamp 'Kumana Villu' which attracts a vast number of nesting water birds.",
      SI: "නැගෙනහිර වෙරළේ පිහිටි කුමන වනෝද්‍යානය, පක්ෂීන් බෝ කරන මධ්‍යස්ථානයක් ලෙස ප්‍රචලිතය."
    },
    shortStory: { EN: "Nesting ground of the wild birds.", SI: "වන කුරුල්ලන්ගේ රජදහන." },
    bestTime: { EN: "April to July", SI: "අප්‍රේල් සිට ජූලි දක්වා" },
    tips: [{ EN: "Also a great place to see wild buffaloes and crocodiles in their natural habitat.", SI: "මෙහිදී කුඹුන් සහ කිඹුලන් ද දැකගත හැක." }],
    location: "Ampara District",
    coordinates: { x: 82, y: 85 }
  },
  {
    id: "wasgamuwa",
    name: { EN: "Wasgamuwa Wilds", SI: "වස්ගමුව වනෝද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "One of the least disturbed national parks, it is famous for its large herds of wild elephants and ancient ruins from the era of King Parakramabahu.",
      SI: "පැරණි නටබුන් සහ වන අලි රංචු දැකගත හැකි වස්ගමුව, ඉතා නිසල වනෝද්‍යානයකි."
    },
    shortStory: { EN: "Untamed wilderness in the center.", SI: "දිවයිනේ මධ්‍යයේ පිහිටි රළු වනාන්තරය." },
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" },
    tips: [{ EN: "Wasgamuwa is a great place to see elephants without the heavy tourist traffic of Yala.", SI: "සෙනඟ අඩු වනෝද්‍යානයක් සොයන අයට මෙය කදිමයි." }],
    location: "Matale District",
    coordinates: { x: 60, y: 45 }
  },
  {
    id: "diyaluma",
    name: { EN: "Diyaluma Falls", SI: "දියලුම දියඇල්ල" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "The second highest waterfall in Sri Lanka. It's famous for the natural pools at its summit which offer a spectacular infinity view over the edge.",
      SI: "ලංකාවේ දෙවන උසම දියඇල්ල දියලුමයි. මෙහි ඉහළ පිහිටි ස්වභාවික ජල තටාක ඉතා ප්‍රසිද්ධය."
    },
    shortStory: { EN: "The natural infinity falls.", SI: "ස්වභාවික ජල තටාක සහිත දියඇල්ල." },
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" },
    tips: [{ EN: "Hire a guide to find the trail leading to the upper falls and the natural pools.", SI: "ඉහළ දියඇල්ලට යාමට මගපෙන්වන්නෙකු ලබාගන්න." }],
    location: "Badulla District",
    coordinates: { x: 62, y: 78 }
  },
  {
    id: "ambuluwawa",
    name: { EN: "Ambuluwawa Tower", SI: "අඹුළුවාව කුළුණ" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "A multi-religious sanctuary on a mountain top. Its unique spiral tower is one of the most exciting climbs in the hill country.",
      SI: "කඳු මුදුනක පිහිටි බහු-ආගමික පුදබිමකි. මෙහි ඇති කැරකෙන කුළුණ නැගීම අපූරු වික්‍රමයකි."
    },
    shortStory: { EN: "Spiral to the sky.", SI: "අහසට විහිදුණු කැරකෙන කුළුණ." },
    bestTime: { EN: "Clear mornings", SI: "පැහැදිලි උදෑසන කාලය" },
    tips: [{ EN: "The top of the tower gets extremely narrow; not recommended for those afraid of heights.", SI: "උසට බය අය කුළුණේ ඉහළටම යාමෙන් වළකින්න." }],
    location: "Gampola",
    coordinates: { x: 48, y: 55 }
  },
  {
    id: "ella-rock",
    name: { EN: "Ella Rock Trek", SI: "ඇල්ල රොක් තරණය" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1632639521806-cead484cc369?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1632639521806-cead484cc369?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "A famous hiking trail in Ella that rewards you with a panoramic view of the Ella Gap and Little Adam's Peak.",
      SI: "ඇල්ලේ පිහිටි ජනප්‍රියම කඳු නැගීමේ මාර්ගය මෙයයි. මෙහි මුදුනේ සිට පෙනෙන දර්ශනය අසමසමයි."
    },
    shortStory: { EN: "The grand view of Ella Gap.", SI: "ඇල්ලේ මනරම් දසුන මුදුනේ සිට." },
    bestTime: { EN: "Early Morning (6 AM)", SI: "පෙරවරු 6 ට පමණ" },
    tips: [{ EN: "Follow the railway track for the first part of the hike before starting the climb.", SI: "මුලින් දුම්රිය මාවත දිගේ ගොස් කන්ද නැගීම ආරම්භ කරන්න." }],
    location: "Badulla District",
    coordinates: { x: 63, y: 69 }
  },
  {
    id: "kaudulla",
    name: { EN: "Kaudulla Safari", SI: "කවුඩුල්ල වනෝද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1547466750-6a68393e1174?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1547466750-6a68393e1174?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "Part of an elephant corridor, Kaudulla offers spectacular views of wild elephants roaming in their natural environment by the Kaudulla tank.",
      SI: "අලි කොරිඩෝවක කොටසක් වන කවුඩුල්ලේදී, නිදහසේ හැසිරෙන වන අලින් විශාල ප්‍රමාණයක් දැකගත හැක."
    },
    shortStory: { EN: "The elephant corridor path.", SI: "වන අලි නිදහසේ සැරිසරන මාවත." },
    bestTime: { EN: "August to December", SI: "අගෝස්තු සිට දෙසැම්බර් දක්වා" },
    tips: [{ EN: "Check whether elephants are currently in Kaudulla or Minneriya, as they move between the two based on water levels.", SI: "මින්නේරිය සහ කවුඩුල්ල අතර අලි මාරු වන බැවින් යාමට පෙර විමසා බලන්න." }],
    location: "Polonnaruwa District",
    coordinates: { x: 60, y: 28 }
  },
  {
    id: "kalpitiya-lagoon",
    name: { EN: "Kalpitiya Lagoon", SI: "කල්පිටිය කලපුව" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: {
      EN: "One of the best spots in the world for kite surfing. It is also famous for dolphin watching in the open sea.",
      SI: "කයිට් සර්ෆින් (Kite Surfing) සහ ඩොල්ෆින් නැරඹීම සඳහා කල්පිටිය ලොව පුරා ප්‍රසිද්ධය."
    },
    shortStory: { EN: "The kite-surfing capital.", SI: "වික්‍රමාන්විත ජල ක්‍රීඩා සහ ඩොල්ෆින්." },
    bestTime: { EN: "May to October (Surfing)", SI: "මැයි සිට ඔක්තෝබර් දක්වා" },
    tips: [{ EN: "Go dolphin watching early in the morning (7 AM) when the sea is calm.", SI: "ඩොල්ෆින් නැරඹීමට උදෑසනම මුහුදු යන්න." }],
    location: "Puttalam District",
    coordinates: { x: 30, y: 40 }
  }
];

export const FOODS_DATA: Food[] = [
  // STREET FOOD
  {
    id: "f1",
    name: { EN: "Kottu Roti", SI: "කොත්තු රොටි" },
    category: "street",
    description: { EN: "The definitive street food: chopped flatbread tossed with spices and veggies.", SI: "කැබලි කළ රොටි, එළවළු සහ කුළුබඩු මිශ්‍ර ජනප්‍රියම වීදි ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1601050690597-df056fb04791?q=80&w=800&auto=format&fit=crop",
    spiciness: 5,
    ingredients: [{ EN: "Godamba Roti", SI: "ගොඩම්බා රොටි" }, { EN: "Leeks", SI: "ලීක්ස්" }, { EN: "Chili", SI: "මිරිස්" }],
    tasteProfile: { EN: "Fiery & Savory", SI: "අධික සැර සහ රසවත්" }
  },
  {
    id: "f2",
    name: { EN: "Isso Vade", SI: "ඉස්සෝ වඩේ" },
    category: "street",
    description: { EN: "Spiced lentil cakes topped with crunchy prawns, a coastal street staple.", SI: "නැවුම් ඉස්සන් සහිත කරකුට්ටු වඩේ වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1626082866744-32fe3e0856d7?q=80&w=800&auto=format&fit=crop",
    spiciness: 3,
    ingredients: [{ EN: "Lentils", SI: "පරිප්පු" }, { EN: "Prawns", SI: "ඉස්සන්" }, { EN: "Onions", SI: "ලූණු" }],
    tasteProfile: { EN: "Crunchy & Spicy", SI: "කරකුට්ටු සහ සැර" }
  },
  {
    id: "f3",
    name: { EN: "Egg Hoppers", SI: "බිත්තර ආප්ප" },
    category: "street",
    description: { EN: "Thin, bowl-shaped fermented rice pancakes with a soft-centered egg.", SI: "මැදට බිත්තරයක් එක් කළ රසවත් ආප්ප වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }, { EN: "Egg", SI: "බිත්තර" }],
    tasteProfile: { EN: "Creamy & Light", SI: "මෘදු සහ ප්‍රණීත" }
  },
  {
    id: "f4",
    name: { EN: "Manioc Chips", SI: "මඤ්ඤොක්කා චිප්ස්" },
    category: "street",
    description: { EN: "Thinly sliced cassava fried to a golden crisp with chili salt.", SI: "තෙලේ බැද මිරිස් කුඩු සහ ලුණු එක් කළ මඤ්ඤොක්කා පෙති." },
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=800&auto=format&fit=crop",
    spiciness: 2,
    ingredients: [{ EN: "Cassava", SI: "මඤ්ඤොක්කා" }, { EN: "Chili Powder", SI: "මිරිස් කුඩු" }],
    tasteProfile: { EN: "Salty & Crisp", SI: "ලුණු රස සහ කරකුට්ටු" }
  },
  {
    id: "f5",
    name: { EN: "Saravita", SI: "සාරවිට" },
    category: "street",
    description: { EN: "Sweetened coconut flakes wrapped in betel leaf, a vibrant treat.", SI: "බුලත් කොළයක ඔතා ඇති වර්ණවත් පොල් පිරවූ පැණිරස කෑමකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Betel Leaf", SI: "බුලත් කොළය" }, { EN: "Sweetened Coconut", SI: "පැණි පොල්" }],
    tasteProfile: { EN: "Sweet & Refreshing", SI: "පැණිරස සහ ප්‍රබෝධමත්" }
  },
  {
    id: "f6",
    name: { EN: "Achcharu", SI: "අච්චාරු" },
    category: "street",
    description: { EN: "Sweet and spicy pickled fruits, a sensory explosion.", SI: "මිරිස් සහ විනාකිරි මිශ්‍ර පලතුරු අච්චාරු." },
    image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=800&auto=format&fit=crop",
    spiciness: 4,
    ingredients: [{ EN: "Mango/Amberella", SI: "අඹ/ඇඹරැල්ලා" }, { EN: "Vinegar", SI: "විනාකිරි" }],
    tasteProfile: { EN: "Sour & Tangy", SI: "ඇඹුල් සහ සැර" }
  },
  {
    id: "f7",
    name: { EN: "Fish Cutlets", SI: "මාළු කට්ලට්" },
    category: "street",
    description: { EN: "Breaded, deep-fried spicy fish and potato spheres.", SI: "මාළු සහ අල මිශ්‍ර කර සාදා බැදගත් කුඩා බෝල." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 3,
    ingredients: [{ EN: "Canned Fish", SI: "ටින් මාළු" }, { EN: "Potato", SI: "අල" }],
    tasteProfile: { EN: "Hearty & Crunchy", SI: "පිරුණු සහ කරකුට්ටු" }
  },
  {
    id: "f8",
    name: { EN: "Chinese Rolls", SI: "රෝල්ස්" },
    category: "street",
    description: { EN: "Cylindrical pancakes filled with spicy meat or veg, then crumbed.", SI: "මස් හෝ එළවළු පිරවූ රසවත් බැදපු රෝල්ස්." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 4,
    ingredients: [{ EN: "Flour", SI: "පිටි" }, { EN: "Spiced Filling", SI: "කුළුබඩු පිරවුම" }],
    tasteProfile: { EN: "Crispy & Zesty", SI: "කරකුට්ටු සහ රසවත්" }
  },

  // VILLAGE CLASSICS
  {
    id: "f9",
    name: { EN: "Rice and Curry", SI: "බත් සහ වෑංජන" },
    category: "village",
    description: { EN: "The soul of the island: a spread of diverse seasonal curries.", SI: "දිවයිනේ ප්‍රධාන ආහාර වේල, වෑංජන කිහිපයක එකතුවකි." },
    image: "https://images.unsplash.com/photo-1585932231552-198d75df5584?q=80&w=800&auto=format&fit=crop",
    spiciness: 4,
    ingredients: [{ EN: "Rice", SI: "බත්" }, { EN: "Dhal", SI: "පරිප්පු" }, { EN: "Pol Sambol", SI: "පොල් සම්බෝල" }],
    tasteProfile: { EN: "Complex & Wholesome", SI: "විවිධ සහ පූර්ණ" }
  },
  {
    id: "f10",
    name: { EN: "Kiribath", SI: "කිරි බත්" },
    category: "village",
    description: { EN: "Traditional milk rice, essential for auspicious beginnings.", SI: "පොල් කිරි එක් කර පිසූ බත්, උත්සව අවස්ථාවන්හිදී පිරිනමයි." },
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Rice", SI: "බත්" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Creamy & Milky", SI: "කිරි රස සහ මෘදු" }
  },
  {
    id: "f11",
    name: { EN: "Pol Sambol", SI: "පොල් සම්බෝල" },
    category: "village",
    description: { EN: "Fresh coconut relish with chili, lime, and red onions.", SI: "ගාගත් පොල්, මිරිස්, ලූණු සහ දෙහි මිශ්‍ර කළ අතිරේක ආහාරයකි." },
    image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=800&auto=format&fit=crop",
    spiciness: 5,
    ingredients: [{ EN: "Coconut", SI: "පොල්" }, { EN: "Chili", SI: "මිරිස්" }, { EN: "Lime", SI: "දෙහි" }],
    tasteProfile: { EN: "Zesty & Spicy", SI: "නැවුම් සහ සැර" }
  },
  {
    id: "f12",
    name: { EN: "Wambatu Moju", SI: "වම්බටු මෝජු" },
    category: "village",
    description: { EN: "Deep-fried eggplant pickle with a sweet-sour glaze.", SI: "බැදගත් වම්බටු වලින් සාදන පැණිරස සහ ඇඹුල් සහිත අච්චාරුවකි." },
    image: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=800&auto=format&fit=crop",
    spiciness: 2,
    ingredients: [{ EN: "Eggplant", SI: "වම්බටු" }, { EN: "Sugar/Vinegar", SI: "සීනි/විනාකිරි" }],
    tasteProfile: { EN: "Sweet & Sour", SI: "පැණිරස සහ ඇඹුල්" }
  },
  {
    id: "f13",
    name: { EN: "Parippu", SI: "පරිප්පු වෑංජනය" },
    category: "village",
    description: { EN: "The most comforting lentil curry with turmeric and coconut.", SI: "පොල් කිරි සහ කහ එක් කර පිසූ රසවත් පරිප්පු වෑංජනය." },
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
    spiciness: 2,
    ingredients: [{ EN: "Lentils", SI: "පරිප්පු" }, { EN: "Turmeric", SI: "කහ" }],
    tasteProfile: { EN: "Smooth & Earthy", SI: "මෘදු සහ ප්‍රණීත" }
  },
  {
    id: "f14",
    name: { EN: "Pol Roti", SI: "පොල් රොටි" },
    category: "village",
    description: { EN: "Rustic flatbread with grated coconut and green chilies.", SI: "ගාගත් පොල් සහ අමුමිරිස් එක් කර සාදාගත් රොටි." },
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800&auto=format&fit=crop",
    spiciness: 2,
    ingredients: [{ EN: "Wheat Flour", SI: "තිරිඟු පිටි" }, { EN: "Coconut", SI: "පොල්" }],
    tasteProfile: { EN: "Rustic & Savory", SI: "පාරම්පරික සහ රසවත්" }
  },
  {
    id: "f15",
    name: { EN: "Gotu Kola Mallum", SI: "ගොටුකොළ මැල්ලුම" },
    category: "village",
    description: { EN: "A healthy salad of finely shredded pennywort and coconut.", SI: "හීනියට කපාගත් ගොටුකොළ සහ පොල් මිශ්‍ර මැල්ලුම." },
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Pennywort", SI: "ගොටුකොළ" }, { EN: "Coconut", SI: "පොල්" }],
    tasteProfile: { EN: "Fresh & Green", SI: "නැවුම් සහ ගුණදායක" }
  },
  {
    id: "f16",
    name: { EN: "Jackfruit Curry", SI: "කොස් වෑංජනය" },
    category: "village",
    description: { EN: "Hearty, meat-like young jackfruit in spiced coconut milk.", SI: "පොල් කිරි සහ කුළුබඩු එක් කර පිසූ කොස් වෑංජනය." },
    image: "https://images.unsplash.com/photo-1588633906621-0300a0680327?q=80&w=800&auto=format&fit=crop",
    spiciness: 3,
    ingredients: [{ EN: "Jackfruit", SI: "කොස්" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Meat-like & Rich", SI: "පොහොසත් රසය" }
  },
  {
    id: "f17",
    name: { EN: "Karawala Baduma", SI: "කරවල බැදුම" },
    category: "village",
    description: { EN: "Dried fish tempered with onions and chili flakes.", SI: "ලූණු සහ මිරිස් එක් කර බැදගත් කරවල." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 4,
    ingredients: [{ EN: "Dried Fish", SI: "කරවල" }, { EN: "Onions", SI: "ලූණු" }],
    tasteProfile: { EN: "Salty & Fiery", SI: "ලුණු රස සහ සැර" }
  },
  {
    id: "f18",
    name: { EN: "Ala Theldala", SI: "අල තෙල්දාලා" },
    category: "village",
    description: { EN: "Spiced sautéed potatoes, the ultimate comfort side.", SI: "තෙම්පරාදු කළ අල වෑංජනයකි." },
    image: "https://images.unsplash.com/photo-1518346416281-ce37369ba95a?q=80&w=800&auto=format&fit=crop",
    spiciness: 3,
    ingredients: [{ EN: "Potatoes", SI: "අල" }, { EN: "Chili flakes", SI: "කෑලි මිරිස්" }],
    tasteProfile: { EN: "Zesty & Comforting", SI: "රසවත් සහ තෘප්තිමත්" }
  },

  // SWEETS & TREATS
  {
    id: "f19",
    name: { EN: "Kavum", SI: "කැවුම්" },
    category: "sweets",
    description: { EN: "Oil cakes made from rice flour and treacle with a distinct 'bump'.", SI: "සහල් පිටි සහ පැණි වලින් සාදා තෙලේ බැදගත් රසකැවිල්ලකි." },
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Treacle", SI: "පැණි" }],
    tasteProfile: { EN: "Sweet & Caramelized", SI: "පැණිරස" }
  },
  {
    id: "f20",
    name: { EN: "Kokis", SI: "කොකිස්" },
    category: "sweets",
    description: { EN: "Ornate, crispy deep-fried rosettes for festive seasons.", SI: "සහල් පිටි සහ පොල් කිරි වලින් සාදන කරකුට්ටු රසකැවිල්ලකි." },
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Light & Crunchy", SI: "සැහැල්ලු සහ කරකුට්ටු" }
  },
  {
    id: "f21",
    name: { EN: "Aluwa", SI: "අලුවා" },
    category: "sweets",
    description: { EN: "Flat, diamond-shaped rice flour treats with cardamom.", SI: "සහල් පිටි, පැණි සහ කජු එක් කළ මෘදු රසකැවිල්ලකි." },
    image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Cardamom", SI: "එනසාල්" }],
    tasteProfile: { EN: "Soft & Nutty", SI: "මෘදු සහ කජු රස" }
  },
  {
    id: "f22",
    name: { EN: "Pani Walalu", SI: "පැණි වළලු" },
    category: "sweets",
    description: { EN: "Undu-flour coils soaked in a deep, dark treacle syrup.", SI: "උඳු සහ පැණි වලින් සාදන වළලු හැඩැති රසකැවිල්ලකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Undu Flour", SI: "උඳු පිටි" }, { EN: "Treacle", SI: "පැණි" }],
    tasteProfile: { EN: "Syrupy & Sticky", SI: "පැණි පිරුණු" }
  },
  {
    id: "f23",
    name: { EN: "Watalappam", SI: "වටලප්පන්" },
    category: "sweets",
    description: { EN: "A rich, jaggery-infused steamed custard pudding.", SI: "හකුරු, පොල් කිරි සහ කුළුබඩු එක් කර සාදන රසවත් පුඩිමකි." },
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Jaggery", SI: "හකුරු" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Spiced & Rich", SI: "සුවඳවත් සහ පොහොසත්" }
  },
  {
    id: "f24",
    name: { EN: "Bibikkan", SI: "බිබික්කන්" },
    category: "sweets",
    description: { EN: "A dark, moist heritage coconut cake with plenty of nuts.", SI: "වෙරළබඩ ප්‍රදේශවලට ආවේණික රසවත් පොල් කේක් වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Coconut", SI: "පොල්" }, { EN: "Cashew Nuts", SI: "කජු" }],
    tasteProfile: { EN: "Moist & Sweet", SI: "මෘදු සහ රසවත්" }
  },
  {
    id: "f25",
    name: { EN: "Curd & Treacle", SI: "මී කිරි සහ පැණි" },
    category: "sweets",
    description: { EN: "Creamy buffalo curd with a heavy drizzle of Kithul syrup.", SI: "කිතුල් පැණි සමඟ පිරිනමන නැවුම් මී කිරි." },
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Buffalo Curd", SI: "මී කිරි" }, { EN: "Kithul Treacle", SI: "කිතුල් පැණි" }],
    tasteProfile: { EN: "Tart & Honeyed", SI: "ඇඹුල් සහ පැණිරස" }
  },
  {
    id: "f26",
    name: { EN: "Woodapple Juice", SI: "දිවුල් යුෂ" },
    category: "sweets",
    description: { EN: "Tangy, thick sherbet made from native woodapple fruit.", SI: "දිවුල් පලතුරෙන් සාදන උකු රසවත් පානයකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Woodapple", SI: "දිවුල්" }, { EN: "Sugar", SI: "සීනි" }],
    tasteProfile: { EN: "Tangy & Sweet", SI: "ඇඹුල් සහ පැණිරස" }
  },
  {
    id: "f27",
    name: { EN: "Jaggery (Hakuru)", SI: "හකුරු" },
    category: "sweets",
    description: { EN: "Solid sweet block made from concentrated flower sap.", SI: "කිතුල් මල් පැණි රත් කර සාදා ගන්නා රසකැවිල්ලකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Palm Sap", SI: "කිතුල් පැණි" }],
    tasteProfile: { EN: "Earthy Sweetness", SI: "පැණිරස" }
  },
  {
    id: "f28",
    name: { EN: "Milk Toffee", SI: "කිරි ටොෆි" },
    category: "sweets",
    description: { EN: "Creamy, fudgy squares made from condensed milk.", SI: "කිරි සහ සීනි වලින් සාදන මෘදු රසකැවිල්ලකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Condensed Milk", SI: "උකු කිරි" }, { EN: "Sugar", SI: "සීනි" }],
    tasteProfile: { EN: "Rich & Fudgy", SI: "පැණිරස" }
  },

  // COASTAL FLAVORS
  {
    id: "f29",
    name: { EN: "Jaffna Crab Curry", SI: "යාපනය කකුළුවා වෑංජනය" },
    category: "coastal",
    description: { EN: "A legendary, extremely spicy curry with drumstick leaves.", SI: "මුරුංගා කොළ සහ යාපනය කුළුබඩු එක් කළ අතිශය සැර කකුළු වෑංජනයකි." },
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=800&auto=format&fit=crop",
    spiciness: 5,
    ingredients: [{ EN: "Crab", SI: "කකුළුවන්" }, { EN: "Jaffna Chili", SI: "යාපනය මිරිස්" }],
    tasteProfile: { EN: "Intense & Fiery", SI: "අධික සැර" }
  },
  {
    id: "f30",
    name: { EN: "Negombo Prawns", SI: "මීගමුව ඉස්සෝ වෑංජනය" },
    category: "coastal",
    description: { EN: "Succulent lagoon prawns in a thin, aromatic gravy.", SI: "කුළුබඩු මිශ්‍ර පොල් කිරි හොද්දක පිසූ නැවුම් ඉස්සන්." },
    image: "https://images.unsplash.com/photo-1559742811-822873691df0?q=80&w=800&auto=format&fit=crop",
    spiciness: 4,
    ingredients: [{ EN: "Prawns", SI: "ඉස්සන්" }, { EN: "Ginger/Garlic", SI: "ඉඟුරු/සුදුලූණු" }],
    tasteProfile: { EN: "Savory & Fresh", SI: "රසවත්" }
  },
  {
    id: "f31",
    name: { EN: "Ambul Thiyal", SI: "මාළු ඇඹුල් තියල්" },
    category: "coastal",
    description: { EN: "Dry, sour fish curry preserved with Garcinia (Goraka).", SI: "ගොරකා සහ ගම්මිරිස් එක් කර සාදන සුවිශේෂී මාළු වෑංජනයකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 4,
    ingredients: [{ EN: "Tuna", SI: "කෙලවල්ලා" }, { EN: "Goraka", SI: "ගොරකා" }],
    tasteProfile: { EN: "Sour & Peppery", SI: "ඇඹුල් සහ සැර" }
  },
  {
    id: "f32",
    name: { EN: "Cuttlefish Roast", SI: "දැල්ලෝ රෝස්ට්" },
    category: "coastal",
    description: { EN: "Quick-sautéed cuttlefish with plenty of onions and chili.", SI: "මිරිස් සහ ලූණු එක් කර සාදාගත් දැල්ලෝ බැදුම." },
    image: "https://images.unsplash.com/photo-1539136788836-5699e78bab75?q=80&w=800&auto=format&fit=crop",
    spiciness: 5,
    ingredients: [{ EN: "Cuttlefish", SI: "දැල්ලෝ" }, { EN: "Chili flakes", SI: "කෑලි මිරිස්" }],
    tasteProfile: { EN: "Smoky & Hot", SI: "සැර සහ ප්‍රණීත" }
  },
  {
    id: "f33",
    name: { EN: "Fried Fish", SI: "මාළු බැදුම" },
    category: "coastal",
    description: { EN: "Golden-fried ocean fish slices with salt and turmeric.", SI: "කහ සහ ලුණු එක් කර කරකුට්ටු වෙන්න බැදගත් මාළු." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 2,
    ingredients: [{ EN: "Fish", SI: "මාළු" }, { EN: "Turmeric", SI: "කහ" }],
    tasteProfile: { EN: "Crunchy & Salty", SI: "කරකුට්ටු සහ ලුණු රස" }
  },
  {
    id: "f34",
    name: { EN: "Hot Butter Cuttlefish", SI: "හොට් බටර් දැල්ලෝ" },
    category: "coastal",
    description: { EN: "Fusion favorite: crispy cuttlefish in a buttery, spicy glaze.", SI: "බටර් සහ මිරිස් එක් කළ කරකුට්ටු දැල්ලෝ." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 4,
    ingredients: [{ EN: "Cuttlefish", SI: "දැල්ලෝ" }, { EN: "Butter", SI: "බටර්" }],
    tasteProfile: { EN: "Rich & Savory", SI: "පොහොසත් සහ රසවත්" }
  },
  {
    id: "f35",
    name: { EN: "Lagoon Prawns", SI: "කලපු ඉස්සන්" },
    category: "coastal",
    description: { EN: "Giant prawns simply grilled to highlight their natural sweetness.", SI: "කලපුවේ නැවුම් විශාල ඉස්සන්." },
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=800&auto=format&fit=crop",
    spiciness: 3,
    ingredients: [{ EN: "Prawns", SI: "ඉස්සන්" }, { EN: "Garlic", SI: "සුදුලූණු" }],
    tasteProfile: { EN: "Sweet & Fresh", SI: "පැණිරස සහ නැවුම්" }
  },

  // ROYAL LEGACY
  {
    id: "f36",
    name: { EN: "Lamprais", SI: "ලම්ප්‍රයිස්" },
    category: "royal",
    description: { EN: "Burgher-legacy meal: rice and meats steamed in banana leaf.", SI: "කෙසෙල් කොළයක ඔතා පිසූ බර්ගර් උරුමයේ පූර්ණ ආහාර වේලකි." },
    image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=800&auto=format&fit=crop",
    spiciness: 3,
    ingredients: [{ EN: "Short Rice", SI: "බත්" }, { EN: "Mixed Meats", SI: "මස් වර්ග" }],
    tasteProfile: { EN: "Aromatic & Unique", SI: "සුවඳවත් සහ සුවිශේෂී" }
  },
  {
    id: "f37",
    name: { EN: "Yellow Rice", SI: "කහ බත්" },
    category: "royal",
    description: { EN: "Fragrant rice cooked with turmeric, cloves, and ghee.", SI: "කහ සහ කුළුබඩු එක් කර සාදන උත්සව බත් වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Basmati", SI: "බාස්මතී" }, { EN: "Turmeric", SI: "කහ" }],
    tasteProfile: { EN: "Fragrant & Buttery", SI: "සුවඳවත් සහ ගිතෙල් රස" }
  },
  {
    id: "f38",
    name: { EN: "Dunthel Bath", SI: "දුන්තෙල් බත්" },
    category: "royal",
    description: { EN: "Ancient ghee-rice traditionally served at royal feasts.", SI: "ගිතෙල් එක් කර පිසූ පාරම්පරික රාජකීය බත් වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 2,
    ingredients: [{ EN: "Rice", SI: "බත්" }, { EN: "Ghee", SI: "ගිතෙල්" }],
    tasteProfile: { EN: "Luxurious & Heavy", SI: "පොහොසත් රසය" }
  },
  {
    id: "f39",
    name: { EN: "Saffron String Hoppers", SI: "කහ ඉඳිආප්ප" },
    category: "royal",
    description: { EN: "Vibrant yellow string hoppers served at high-end heritage dinners.", SI: "කහ එක් කළ සුවිශේෂී ඉඳිආප්ප වර්ගයකි." },
    image: "https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Saffron", SI: "කහ" }],
    tasteProfile: { EN: "Smooth & Rich", SI: "මෘදු සහ රසවත්" }
  },
  {
    id: "f40",
    name: { EN: "Stuffed String Hoppers", SI: "පුරවපු ඉඳිආප්ප" },
    category: "royal",
    description: { EN: "Delicate string hoppers with a sweet coconut filling.", SI: "පැණි පොල් පිරවූ රසවත් ඉඳිආප්ප කෑමකි." },
    image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=800&auto=format&fit=crop",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Sweet Coconut", SI: "පැණි පොල්" }],
    tasteProfile: { EN: "Fusion & Sweet", SI: "පැණිරස" }
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

export const CATEGORIES_DATA = [
  {
    id: "foods",
    icon: "Utensils",
    title: { EN: "Food Heritage", SI: "ආහාර උරුමය" },
    description: { EN: "Taste the spices of an island civilization.", SI: "දිවයිනේ කුළුබඩු රසයෙන් පිරි ආහාර සංස්කෘතිය." }
  },
  {
    id: "music",
    icon: "Music",
    title: { EN: "Ancient Music", SI: "පැරණි සංගීතය" },
    description: { EN: "Listen to the heartbeat of a nation.", SI: "ජාතියක හදගැස්ම බඳු වූ රිද්මයන්." }
  },
  {
    id: "medicine",
    icon: "Activity",
    title: { EN: "Hela Wedakama", SI: "හෙළ වෙදකම" },
    description: { EN: "Indigenous neural healing wisdom.", SI: "දේශීය සුව කිරීමේ ප්‍රඥාව." }
  },
  {
    id: "tea",
    icon: "Sprout",
    title: { EN: "Tea Culture", SI: "තේ සංස්කෘතිය" },
    description: { EN: "Journey through the emerald tea hills.", SI: "හරිත පැහැ තේ වතු අතරින් යන ගමන." }
  },
  {
    id: "phrases",
    icon: "MessageSquare",
    title: { EN: "Language", SI: "භාෂාව" },
    description: { EN: "Learn the rhythmic heart of Sinhala.", SI: "සිංහල භාෂාවේ හදගැස්ම ඉගෙන ගන්න." }
  },
  {
    id: "essentials",
    icon: "Backpack",
    title: { EN: "Travel Guide", SI: "සංචාරක උපදෙස්" },
    description: { EN: "Logistics for your island journey.", SI: "ඔබේ සංචාරය සඳහා අවශ්‍ය සියලු දත්ත." }
  },
  {
    id: "festivals",
    icon: "PartyPopper",
    title: { EN: "Festivals", SI: "සංස්කෘතික උත්සව" },
    description: { EN: "Celebrate faith, harvest, and history.", SI: "ඇදහිලි, අස්වනු සහ ඉතිහාසයේ සැමරුම්." }
  },
  {
    id: "hiking",
    icon: "Mountain",
    title: { EN: "Hiking Peaks", SI: "කඳු නැගීම" },
    description: { EN: "Discover summits where nature meets the divine.", SI: "සොබාදහම සහ දේවත්වය හමුවන කඳු මුදුන්." }
  }
];

export const HERITAGE_MUSIC_DATA: HeritageMusic[] = [
  {
    id: 'm1',
    type: 'instrument',
    name: { EN: 'Geta Beraya', SI: 'ගැට බෙරය' },
    description: { EN: 'The traditional drum of the Kandyan highlands.', SI: 'උඩරට සම්ප්‍රදායික බෙරය.' },
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    origin: { EN: 'Kandy', SI: 'මහනුවර' },
    significance: { EN: 'Used in sacred rituals and Kandyan dance.', SI: 'පූජනීය වත්පිළිවෙත් සහ උඩරට නැටුම් සඳහා භාවිතා කරයි.' }
  },
  {
    id: 'm2',
    type: 'song',
    name: { EN: 'Goyam Kavi', SI: 'ගොයම් කවි' },
    description: { EN: 'Folk songs sung by farmers during harvest.', SI: 'අස්වනු නෙළන කාලයේ ගොවියන් ගායනා කරන ජන ගී.' },
    image: 'https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=800&q=80',
    origin: { EN: 'Rural Villages', SI: 'ගම්බද ප්‍රදේශ' },
    significance: { EN: 'Reflects the agricultural heart of the island.', SI: 'දිවයිනේ කෘෂිකාර්මික ජීවය නිරූපණය කරයි.' },
    sampleLyrics: { EN: 'O farmers, the sun is rising over the golden fields...', SI: 'වෙල මැද්දේ ඉර පායන සැන්දෑවට...' }
  }
];

export const TEA_DATA: TeaExperience[] = [
  {
    id: 'tea1',
    name: { EN: 'Ceylon Black Tea', SI: 'ලංකා කළු තේ' },
    description: { EN: 'World famous rich and full-bodied tea.', SI: 'ලොව සුප්‍රසිද්ධ රසවත් සහ පූර්ණ තේ වර්ගයකි.' },
    image: 'https://images.unsplash.com/photo-1594631252845-29fc458695d1?auto=format&fit=crop&w=800&q=80',
    type: 'variety',
    fact: { EN: 'Sri Lanka is the 4th largest tea producer.', SI: 'ලෝකයේ සිව්වන විශාලතම තේ නිෂ්පාදකයා ශ්‍රී ලංකාවයි.' }
  },
  {
    id: 'tea2',
    name: { EN: 'Nuwara Eliya Hills', SI: 'නුවරඑළිය කඳුකරය' },
    description: { EN: 'High grown tea estates in the cool mist.', SI: 'සිසිල් මීදුමෙන් වැසුණු උස් කඳුකර තේ වතු.' },
    image: 'https://images.unsplash.com/photo-1594631252845-29fc458695d1?auto=format&fit=crop&w=800&q=80',
    type: 'location',
    fact: { EN: 'High altitude gives the tea a unique delicate flavor.', SI: 'ඉහළ උන්නතාංශය තේ සඳහා සුවිශේෂී මෘදු රසයක් ලබා දෙයි.' }
  }
];

export const PHRASEBOOK_DATA: Phrase[] = [
  { id: 'p1', english: 'Hello / Welcome', sinhala: 'ආයුබෝවන්', transliteration: 'Ayubowan', category: 'greeting' },
  { id: 'p2', english: 'Thank you', sinhala: 'ස්තූතියි', transliteration: 'Sthuthiy', category: 'greeting' },
  { id: 'p3', english: 'How much is this?', sinhala: 'මේක කීයද?', transliteration: 'Meka kiyada?', category: 'shopping' },
  { id: 'p4', english: 'Where is the restaurant?', sinhala: 'කෑම කඩේ කොහෙද තියෙන්නේ?', transliteration: 'Kaema kade koheda thiyenne?', category: 'dining' },
  { id: 'p5', english: 'Help!', sinhala: 'උදව් කරන්න!', transliteration: 'Udawu karanna!', category: 'emergency' }
];

export const TRAVEL_ESSENTIALS_DATA: TravelEssential[] = [
  {
    id: 'e1',
    title: { EN: 'Visa & Entry', SI: 'වීසා සහ ඇතුළත් වීම' },
    description: { EN: 'Information on tourist visas and entry requirements.', SI: 'සංාරක වීසා සහ ඇතුළත් වීමේ අවශ්‍යතා පිළිබඳ තොරතුරු.' },
    icon: 'ShieldCheck',
    tips: [
      { EN: 'Apply for ETA online via official portal before arrival.', SI: 'පැමිණීමට පෙර නිල වෙබ් අඩවිය හරහා ETA සඳහා අයදුම් කරන්න.' },
      { EN: 'Ensure passport validity is at least 6 months.', SI: 'විදේශ ගමන් බලපත්‍රය මාස 6ක් වලංගු බව තහවුරු කරගන්න.' }
    ]
  },
  {
    id: 'e2',
    title: { EN: 'Connectivity', SI: 'සම්බන්ධතාවය' },
    description: { EN: 'Staying connected with high-speed island data.', SI: 'ඔබගේ සංචාරය තුළ සම්බන්ධතා පවත්වා ගැනීම.' },
    icon: 'Zap',
    tips: [
      { EN: 'Purchase a local SIM (Dialog/Mobitel) at the airport terminal.', SI: 'ගුවන් තොටුපළෙන් දේශීය සිම් පතක් (ඩයලොග්/මොබිටෙල්) ලබාගන්න.' },
      { EN: 'eSIM options are available for immediate synchronization.', SI: 'ක්ෂණිකව සක්‍රිය කළ හැකි eSIM පහසුකම් පවතී.' }
    ]
  },
  {
    id: 'e3',
    title: { EN: 'Currency & Exchange', SI: 'මුදල් සහ විනිමය' },
    description: { EN: 'Managing your travel funds and LKR transactions.', SI: 'මුදල් භාවිතය සහ විනිමය පිළිබඳ තොරතුරු.' },
    icon: 'Coins',
    tips: [
      { EN: 'Carry some LKR cash for local village markets and small tips.', SI: 'දේශීය වෙළඳපල සහ කුඩා ගෙවීම් සඳහා රුපියල් මුදල් ළඟ තබා ගන්න.' },
      { EN: 'ATMs are widely available in major towns; use bank-affiliated ones.', SI: 'ප්‍රධාන නගරවල ATM පහසුකම් පවතින අතර බැංකු සතු ඒවා භාවිතා කරන්න.' }
    ]
  },
  {
    id: 'e4',
    title: { EN: 'Cultural Etiquette', SI: 'සංස්කෘතික සිරිත් විරිත්' },
    description: { EN: 'Respecting local traditions and sacred spaces.', SI: 'දේශීය සිරිත් විරිත් සහ පූජනීය ස්ථානවලට ගරු කිරීම.' },
    icon: 'HeartHandshake',
    tips: [
      { EN: 'Cover shoulders and knees when entering Buddhist temples.', SI: 'පූජනීය ස්ථානවලදී උරහිස් සහ දණහිස් ආවරණය වන සේ ඇඳුම් අඳින්න.' },
      { EN: 'Always ask permission before taking photos of people or monks.', SI: 'මිනිසුන් හෝ භික්ෂූන් වහන්සේලා ඡායාරූප ගැනීමට පෙර අවසර ලබා ගන්න.' }
    ]
  },
  {
    id: 'e5',
    title: { EN: 'Health & Safety', SI: 'සෞඛ්‍යය සහ ආරක්ෂාව' },
    description: { EN: 'Staying vibrant and safe during your island trek.', SI: 'සංචාරය තුළ සෞඛ්‍ය සම්පන්නව සහ ආරක්ෂිතව සිටීම.' },
    icon: 'HeartPulse',
    tips: [
      { EN: 'Drink only bottled or filtered water to maintain gut health.', SI: 'සෞඛ්‍යය ආරක්ෂා කර ගැනීමට බෝතල් කළ හෝ පෙරූ ජලය පමණක් පානය කරන්න.' },
      { EN: 'Use mosquito repellent in the evenings, especially in jungle zones.', SI: 'සැන්දෑ කාලයේදී, විශේෂයෙන් වනාන්තර ආශ්‍රිතව මදුරු මර්දන ආලේපන භාවිතා කරන්න.' }
    ]
  },
  {
    id: 'e6',
    title: { EN: 'Packing Archive', SI: 'ඇසුරුම් ලේඛනාගාරය' },
    description: { EN: 'Essential gear for the diverse micro-climates of Lanka.', SI: 'විවිධ දේශගුණික තත්ත්වයන්ට අවශ්‍ය ද්‍රව්‍ය.' },
    icon: 'Package',
    tips: [
      { EN: 'Bring a light sweater for the cool mist of Nuwara Eliya.', SI: 'නුවරඑළියේ සීතල සඳහා සැහැල්ලු ස්වීටරයක් ළඟ තබා ගන්න.' },
      { EN: 'Sri Lanka uses Type G (British) and Type D power plugs.', SI: 'ලංකාව තුළ Type G (බ්‍රිතාන්්‍ය) සහ Type D විදුලි පේනු භාවිතා වේ.' }
    ]
  }
];

export const FESTIVALS_DATA: Festival[] = [
  {
    id: 'fest1',
    name: { EN: 'Kandy Esala Perahera', SI: 'මහනුවර ඇසළ පෙරහැර' },
    category: 'religious',
    date: { EN: 'July/August', SI: 'ජූලි/අගෝස්තු' },
    description: { EN: 'The most spectacular cultural pageant in Asia with elephants and dancers.', SI: 'ආසියාවේ ඇති විශිෂ්ටතම සංස්කෘතික මංගල්‍යය.' },
    image: 'https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Honoring the Sacred Tooth Relic of Lord Buddha.', SI: 'සර්වඥ ධාතුන් වහන්සේ උදෙසා පවත්වනු ලබන පූජෝපහාරයකි.' }
  },
  {
    id: 'fest2',
    name: { EN: 'Sinhala & Tamil New Year', SI: 'සිංහල සහ දෙමළ අලුත් අවුරුද්ද' },
    category: 'cultural',
    date: { EN: 'April 13/14', SI: 'අප්‍රේල් 13/14' },
    description: { EN: 'National celebration of the solar transition with traditional games.', SI: 'සූර්ය සංක්‍රාන්තිය සමරනු ලබන ජාතික උත්සවය.' },
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Harvest festival and time for family unity.', SI: 'අස්වනු උත්සවය සහ පවුලේ සමගිය උදෙසා වෙන් වූ කාලයකි.' }
  },
  {
    id: 'fest3',
    name: { EN: 'Vesak Poya', SI: 'වෙසක් පෝය' },
    category: 'religious',
    date: { EN: 'May (Full Moon)', SI: 'මැයි (පසළොස්වක)' },
    description: { EN: 'The festival of lights celebrating Buddha\'s birth, enlightenment, and passing.', SI: 'බුදුන් වහන්සේගේ තෙමඟුල සමරන ආලෝක පූජාවකි.' },
    image: 'https://images.unsplash.com/photo-1534073737927-85f1dfa1913f?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Spiritual reflection and celebration of light.', SI: 'අධ්‍යාත්මික ආවර්ජනය සහ ආලෝකයේ උත්සවය.' }
  },
  {
    id: 'fest4',
    name: { EN: 'Thai Pongal', SI: 'තෛපොංගල්' },
    category: 'harvest',
    date: { EN: 'January 14', SI: 'ජනවාරි 14' },
    description: { EN: 'Tamil harvest festival honoring the Sun God for an abundant crop.', SI: 'සූර්ය දෙවියන්ට ස්තූති පූජා පවත්වන අස්වනු මංගල්‍යය.' },
    image: 'https://images.unsplash.com/photo-1616070152767-3eb99cf10509?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Celebration of agriculture and prosperity.', SI: 'කෘෂිකර්මාන්තය සහ සෞභාග්‍යය සැමරීම.' }
  },
  {
    id: 'fest5',
    name: { EN: 'Poson Poya', SI: 'පොසොන් පෝය' },
    category: 'religious',
    date: { EN: 'June (Full Moon)', SI: 'ජූනි (පසළොස්වක)' },
    description: { EN: 'Commemorating the arrival of Buddhism to Sri Lanka at Mihintale.', SI: 'ශ්‍රී ලංකාවට බුදුදහම ලැබීම සමරන උත්සවය.' },
    image: 'https://images.unsplash.com/photo-1578503117502-3162799f9392?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Birth of Buddhist culture in the island.', SI: 'දිවයිනේ බෞද්ධ සංස්කෘතියේ ආරම්භය.' }
  },
  {
    id: 'fest6',
    name: { EN: 'Nallur Festival', SI: 'නල්ලූර් උත්සවය' },
    category: 'religious',
    date: { EN: 'August/September', SI: 'අගෝස්තු/සැප්තැම්බර්' },
    description: { EN: 'Jaffna\'s grandest Hindu festival spanning 25 days of rituals.', SI: 'යාපනයේ විශාලතම හින්දු උත්සවය.' },
    image: 'https://images.unsplash.com/photo-1700315303907-5b222bb8bb47?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Supreme devotion at the Nallur Kandaswamy Kovil.', SI: 'නල්ලූර් කන්දසාමි කෝවිලේ ශ්‍රද්ධාවන්ත සැමරුම.' }
  },
  {
    id: 'fest7',
    name: { EN: 'Galle Literary Festival', SI: 'ගාල්ල සාහිත්‍ය උත්සවය' },
    category: 'art',
    date: { EN: 'January', SI: 'ජනවාරි' },
    description: { EN: 'Global gathering of authors and poets within the historic fort.', SI: 'ලොව සුපතල ලේඛකයින් එක්වන සාහිත්‍ය කලා උළෙල.' },
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Cultural dialogue and artistic expression.', SI: 'සංස්කෘතික සංවාදය සහ කලාත්මක ප්‍රකාශනය.' }
  },
  {
    id: 'fest8',
    name: { EN: 'Kataragama Festival', SI: 'කතරගම උත්සවය' },
    category: 'religious',
    date: { EN: 'July', SI: 'ජූලි' },
    description: { EN: 'A unique multi-religious festival with fire-walking and dancing.', SI: 'ගිනි පෑගීම් සහ විවිධ චාරිත්‍ර සහිත බහු-ආගමික උත්සවය.' },
    image: 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Unity of different faiths at a sacred site.', SI: 'පූජනීය භූමියක විවිධ ආගමික සහජීවනය.' }
  },
  {
    id: 'fest9',
    name: { EN: 'Hikkaduwa Beach Fest', SI: 'හික්කඩුව වෙරළ උත්සවය' },
    category: 'coastal',
    date: { EN: 'July/August', SI: 'ජූලි/අගෝස්තු' },
    description: { EN: 'Modern music and water sports celebration on the southern coast.', SI: 'දකුණු වෙරළේ සංගීතය සහ ජල ක්‍රීඩා සැමරුම.' },
    image: 'https://images.unsplash.com/photo-1512100356956-c1224c636a0d?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Vibrant island lifestyle and tourism.', SI: 'සජීවී දිවයිනේ ජීවන රටාව සහ සංචාරක කර්මාන්තය.' }
  },
  {
    id: 'fest10',
    name: { EN: 'Navam Perahera', SI: 'නවාම් පෙරහැර' },
    category: 'religious',
    date: { EN: 'February (Full Moon)', SI: 'පෙබරවාරි (පසළොස්වක)' },
    description: { EN: 'A massive procession through the streets of Colombo with elephants.', SI: 'කොළඹ නගරය හරහා ගමන් කරන දැවැන්ත පෙරහැරක්.' },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Celebrating the discipline and order of the Sangha.', SI: 'සංඝ සමාජයේ විනය සහ පිළිවෙල සැමරීම.' }
  },
  {
    id: 'fest11',
    name: { EN: 'Madhu Festival', SI: 'මඩු උත්සවය' },
    category: 'religious',
    date: { EN: 'August 15', SI: 'අගෝස්තු 15' },
    description: { EN: 'Major Catholic pilgrimage to the Shrine of Our Lady of Madhu.', SI: 'මඩු මාතා සිද්ධස්ථානය වෙත පැවැත්වෙන ප්‍රධාන කතෝලික වන්දනාව.' },
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Deep faith and healing for thousands.', SI: 'දහස් ගණනක් බැතිමතුන්ගේ විශ්වාසය සහ සුවය.' }
  },
  {
    id: 'fest12',
    name: { EN: 'Vel Festival', SI: 'වේල් උත්සවය' },
    category: 'religious',
    date: { EN: 'July/August', SI: 'ජූලි/අගෝස්තු' },
    description: { EN: 'Hindu procession in Colombo carrying the silver chariot of Lord Murugan.', SI: 'මුරුගන් දෙවිඳුන්ගේ රිදී රථය රැගෙන යන කොළඹ පෙරහැර.' },
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Traditional victory of good over evil.', SI: 'අයහපත පරදා යහපත ජය ගැනීම සැමරීම.' }
  },
  {
    id: 'fest13',
    name: { EN: 'Independence Day', SI: 'නිදහස් දිනය' },
    category: 'cultural',
    date: { EN: 'February 4', SI: 'පෙබරවාරි 4' },
    description: { EN: 'National parade and celebrations marking sovereignty.', SI: 'රටේ ස්වෛරීභාවය සමරන ජාතික පෙළපාලිය.' },
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Birth of a free nation.', SI: 'නිදහස් ජාතියක උපත.' }
  },
  {
    id: 'fest14',
    name: { EN: 'Duruthu Perahera', SI: 'දුරුතු පෙරහැර' },
    category: 'religious',
    date: { EN: 'January (Full Moon)', SI: 'ජනවාරි (පසළොස්වක)' },
    description: { EN: 'First major perahera of the year at Kelaniya Temple.', SI: 'කැලණිය රජමහා විහාරයේ පැවැත්වෙන වසරේ පළමු පෙරහැර.' },
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb04791?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Commemorating Buddha\'s first visit to Sri Lanka.', SI: 'බුදුන් වහන්සේගේ ලංකාගමනය සැමරීම.' }
  },
  {
    id: 'fest15',
    name: { EN: 'Negombo Fish Fest', SI: 'මීගමුව මාළු උත්සවය' },
    category: 'coastal',
    date: { EN: 'September', SI: 'සැප්තැම්බර්' },
    description: { EN: 'Celebration of maritime heritage and culinary seafood delights.', SI: 'මුහුදු උරුමය සහ මාළු ආහාර සංස්කෘතිය සැමරීම.' },
    image: 'https://images.unsplash.com/photo-1559742811-822873691df0?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Coastal livelihood and economy.', SI: 'වෙරළබඩ ජීවන රටාව සහ ආර්ථිකය.' }
  },
  {
    id: 'fest16',
    name: { EN: 'Deepavali', SI: 'දීපවාලි' },
    category: 'religious',
    date: { EN: 'October/November', SI: 'ඔක්තෝබර්/නොවැම්බර්' },
    description: { EN: 'Hindu festival of lights with lamps and sweets.', SI: 'හින්දු බැතිමතුන් පහන් දල්වා සමරන ආලෝක උත්සවය.' },
    image: 'https://images.unsplash.com/photo-1628236113113-1280392c695c?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Triumph of light over darkness.', SI: 'අන්ධකාරය පරදා ආලෝකය ජය ගැනීම.' }
  },
  {
    id: 'fest17',
    name: { EN: 'Jaffna Music Festival', SI: 'යාපනය සංගීත උත්සවය' },
    category: 'art',
    date: { EN: 'Varies', SI: 'විවිධ කාලවල' },
    description: { EN: 'Bringing together musicians from north and south for harmony.', SI: 'සංහිඳියාව උදෙසා උතුරු දකුණු කලාකරුවන්ගේ එකතුව.' },
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Cultural peace and unity.', SI: 'සංස්කෘතික සාමය සහ සමගිය.' }
  },
  {
    id: 'fest18',
    name: { EN: 'Colombo Kite Fest', SI: 'කොළඹ සරුංගල් උත්සවය' },
    category: 'art',
    date: { EN: 'August', SI: 'අගෝස්තු' },
    description: { EN: 'A colorful sky full of kites at Galle Face Green.', SI: 'ගාලු මුවදොර අහස වර්ණවත් කරන සරුංගල් සැමරුම.' },
    image: 'https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Youth creativity and family leisure.', SI: 'නිර්මාණශීලීත්වය සහ පවුලේ සතුට.' }
  },
  {
    id: 'fest19',
    name: { EN: 'Christmas in Colombo', SI: 'නත්තල් සැමරුම' },
    category: 'religious',
    date: { EN: 'December 25', SI: 'දෙසැම්බර් 25' },
    description: { EN: 'City-wide decorations and midnight mass celebrations.', SI: 'නගරය පුරා සැරසිලි සහ ආගමික වතාවත්.' },
    image: 'https://images.unsplash.com/photo-1512100356956-c1224c636a0d?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Season of joy and peace.', SI: 'සාමය සහ සතුට බෙදාගන්නා කාලය.' }
  },
  {
    id: 'fest20',
    name: { EN: 'Nuwara Eliya Season', SI: 'නුවරඑළිය වසන්තය' },
    category: 'cultural',
    date: { EN: 'April', SI: 'අප්‍රේල්' },
    description: { EN: 'Flower shows, horse races, and cool weather events.', SI: 'මල් ප්‍රදර්ශන සහ තුරඟ තරඟ සහිත වසන්ත උළෙල.' },
    image: 'https://images.unsplash.com/photo-1594631252845-29fc458695d1?q=80&w=1200&auto=format&fit=crop',
    significance: { EN: 'Celebration of nature and colonial heritage.', SI: 'ස්වභාවධර්මය සහ පැරණි උරුමය සැමරීම.' }
  }
];

export const HIKING_DATA: HikingSpot[] = [
  {
    id: 'hike1',
    name: { EN: 'Adams Peak (Sri Pada)', SI: 'ශ්‍රී පාදය' },
    location: { EN: 'Ratnapura District', SI: 'රත්නපුර දිස්ත්‍රික්කය' },
    difficulty: 'Challenging',
    duration: { EN: '5-7 Hours', SI: 'පැය 5-7' },
    description: { EN: 'Sacred mountain pilgrimage with breathtaking sunrise.', SI: 'අලංකාර හිරු උදාවක් සහිත පූජනීය කඳු වන්දනාව.' },
    image: 'https://cdn.pixabay.com/photo/2023/07/04/10/30/mountains-8105952_1280.jpg',
    elevation: '2,243m'
  },
  {
    id: 'hike2',
    name: { EN: 'Little Adams Peak', SI: 'පුංචි ශ්‍රී පාදය' },
    location: { EN: 'Ella', SI: 'ඇල්ල' },
    difficulty: 'Easy',
    duration: { EN: '1-2 Hours', SI: 'පැය 1-2' },
    description: { EN: 'Short hike through tea estates to a panoramic viewpoint.', SI: 'තේ වතු හරහා කෙටි ගමනකින් පසු මනරම් දසුනක් නැරඹිය හැක.' },
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    elevation: '1,141m'
  }
];