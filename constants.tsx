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
  },
  {
    id: "kandy-temple",
    name: { EN: "Temple of the Tooth", SI: "ශ්‍රී දළදා මාළිගාව" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1616070152767-3eb99cf10509?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Located in the royal palace complex of the former Kingdom of Kandy, this sacred temple houses the tooth relic of the Buddha. Since ancient times, the relic has played a central role in local politics, as it is believed that whoever holds the relic holds the right to govern the country. The temple is a hub of traditional music, vibrant rituals, and the world-renowned Esala Perahera festival.", 
      SI: "මහනුවර රාජධානියේ රාජකීය මාළිගා පරිශ්‍රයේ පිහිටි මෙම පූජනීය ස්ථානය බුදුරජාණන් වහන්සේගේ ශ්‍රී දන්ත ධාතූන් වහන්සේගේ නිවහනයි. අතීතයේ සිටම දන්ත ධාතූන් වහන්සේගේ හිමිකාරිත්වය රටේ පාලන බලයේ සංකේතයක් ලෙස සැලකුණි. මෙය සිංහල බෞද්ධ සංස්කෘතියේ සහ කලා ශිල්පවල ප්‍රධාන මධ්‍යස්ථානයකි." 
    },
    shortStory: { EN: "The guardian of the sacred flame.", SI: "පූජනීය දන්ත ධාතූන් වහන්සේගේ රැකවලයා." },
    bestTime: { EN: "August (Esala Perahera)", SI: "අගෝස්තු (ඇසළ පෙරහැර)" },
    tips: [
      { EN: "Dress code is strict: cover your shoulders and knees. White or light-colored clothing is highly encouraged to show respect.", SI: "උරහිස් සහ දණහිස් වැසෙන සේ සැරසෙන්න. ගෞරවය දැක්වීම සඳහා සුදු හෝ ලා පැහැති ඇඳුම් ඇඳීම ඉතා සුදුසුය." },
      { EN: "Visit during the 'Thewawa' or puja ceremonies (morning, noon, or evening) to hear the traditional drumming and trumpeting.", SI: "පාරම්පරික හේවිසි නාදය ශ්‍රවණය කිරීමට 'තේවාව' පවත්වන වේලාවන්හිදී (උදේ, දවල් හෝ සවස) මාළිගාව වෙත යන්න." },
      { EN: "Leave your shoes at the designated counter outside; you will be walking on cool stone and carpeted areas inside.", SI: "පාවහන් පිටත ඇති කවුන්ටරයේ තබා යන්න; මාළිගා පරිශ්‍රය තුළ පාවහන් නොමැතිව ඇවිදීම සම්ප්‍රදායයි." }
    ],
    location: "Kandy District",
    coordinates: { x: 52, y: 50 }
  },
  {
    id: "galle-fort",
    name: { EN: "Galle Dutch Fort", SI: "ගාල්ල ලන්දේසි කොටුව" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "A living UNESCO heritage site, first built by the Portuguese in 1588 and then extensively fortified by the Dutch during the 17th century. It is the best-preserved example of a fortified city built by Europeans in South and South-East Asia. Today, it is a vibrant blend of colonial architecture, boutique shops, and an active multi-ethnic community living within its heavy granite ramparts.", 
      SI: "යුනෙස්කෝ ලෝක උරුම අඩවියක් වන ගාල්ල කොටුව 1588 දී පෘතුගීසීන් විසින් අරඹා පසුව ලන්දේසීන් විසින් ශක්තිමත් කරන ලදී. යුරෝපීය නිර්මාණ ශිල්පය සහ දේශීය සංස්කෘතිය මුසු වූ මෙය ආසියාවේ හොඳම තත්ත්වයේ පවතින පැරණි බලකොටුවකි. අද වන විට එහි ඇති පැරණි ගොඩනැගිලි සහ වීදි සංචාරකයින්ගේ ප්‍රියතම ස්ථානයකි." 
    },
    shortStory: { EN: "Where colonial charm meets the Indian Ocean.", SI: "යටත් විජිත අලංකාරය ඉන්දියන් සාගරය හමුවන තැන." },
    bestTime: { EN: "November to April", SI: "නොවැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [
      { EN: "Walk the ramparts at sunset; the view from the Flag Rock to the lighthouse is one of the island's most romantic sights.", SI: "හිරු බැස යන වේලාවට කොටු බැම්ම දිගේ ඇවිද යන්න; ප්‍රදීපාගාරය දෙසින් පෙනෙන දර්ශනය ඉතා මනරම්ය." },
      { EN: "Explore the narrow side alleys; you'll find unique jewelry workshops, gelato stands, and hidden art galleries.", SI: "කොටුව තුළ ඇති කුඩා අතුරු මාවත් ගවේෂණය කරන්න; එහි සුවිශේෂී කලාගාර සහ අත්කම් නිර්මාණ මධ්‍යස්ථාන රාශියක් ඇත." },
      { EN: "Visit the Dutch Reformed Church to see the ancient tombstone floors that date back over 300 years.", SI: "වසර 300 කට වඩා පැරණි ලන්දේසි ප්‍රතිසංස්කරණය කරන ලද පල්ලිය වෙත ගොස් එහි ඓතිහාසික වටිනාකම අත්විඳින්න." }
    ],
    location: "Galle District",
    coordinates: { x: 35, y: 88 }
  },
  {
    id: "yala-safari",
    name: { EN: "Yala National Park", SI: "යාල ජාතික උද්‍යානය" },
    category: "wildlife",
    image: "https://plus.unsplash.com/premium_photo-1669447362978-0681d6b3b183?w=1200&auto=format&fit=crop&q=80",
    gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Yala is the most visited national park in Sri Lanka, spanning semi-arid plains and coastal lagoons. It is legendary for having the highest density of leopards per square kilometer in the world. Beyond leopards, it is a sanctuary for elephants, sloth bears, and over 200 bird species, offering a raw and untamed glimpse into the island's incredible biodiversity. The park is uniquely bordered by the Indian Ocean, providing dramatic coastal scenery alongside its dense scrub jungles.", 
      SI: "ශ්‍රී ලංකාවේ ජනප්‍රියම වනෝද්‍යානය වන යාල, ලොව වැඩිම දිවියන් ඝනත්වයක් සහිත ප්‍රදේශයක් ලෙස ප්‍රසිද්ධියක් උසුලයි. දිවියන්ට අමතරව වන අලි, වලසුන් සහ දුර්ලභ කුරුළු විශේෂ රාශියකට සෙවණ දෙන මෙම උද්‍යානය සොබාදහමට ලැදි අයගේ පාරාදීසයකි. ඉන්දියන් සාගරයට මායිම්ව පිහිටි මෙම වනාන්තරය අතිශය විස්මිත සොබාදහමක අත්දැකීමක් ලබාදෙයි." 
    },
    shortStory: { EN: "The kingdom of the silent leopard.", SI: "නිහඬ දිවියාගේ රාජධානිය." },
    bestTime: { EN: "February to June", SI: "පෙබරවාරි සිට ජූනි දක්වා" },
    tips: [
      { EN: "Book the early 5:00 AM safari slot; animals are most active during the first few hours of daylight.", SI: "උදෑසන 5:00 ට ආරම්භ වන සෆාරි ගමන තෝරාගන්න; දිවා ආලෝකය ලැබෙන මුල් පැය කිහිපයේදී සතුන් වැඩිපුර දැකගත හැක." },
      { EN: "Bring a good quality camera with a zoom lens; some of the best sightings happen from a distance for safety.", SI: "දුරදක්නයක් සහ විශාලනය කළ හැකි කැමරාවක් රැගෙන යන්න; සතුන්ට බාධා නොවන සේ ඡායාරූප ගැනීමට එය වැදගත් වේ." },
      { EN: "Check for park closures; Yala often closes for maintenance during the dry season (usually September).", SI: "සැප්තැම්බර් මාසයේදී නඩත්තු කටයුතු සඳහා උද්‍යානය වසා තැබිය හැකි බැවින් කලින් ඒ පිළිබඳ විමසා බලන්න." }
    ],
    location: "Hambantota District",
    coordinates: { x: 75, y: 80 }
  },
  {
    id: "anuradhapura",
    name: { EN: "Anuradhapura Sacred City", SI: "අනුරාධපුර පූජනීය නගරය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "The first capital of Sri Lanka, founded in the 4th century BC, Anuradhapura was the center of Theravada Buddhism for centuries. It is home to the Jaya Sri Maha Bodhi, the oldest human-planted tree in the world with a documented history, and massive stupas like Ruwanwelisaya that rival the pyramids of Giza in size and grandeur. The city is a masterpiece of ancient hydraulic engineering with its vast network of reservoirs and canals.", 
      SI: "ශ්‍රී ලංකාවේ ප්‍රථම රාජධානිය වූ අනුරාධපුරය ක්‍රි.පූ. 4 වන සියවසේදී පිහිටුවන ලදී. ලොව පැණිතම ලිඛිත ඉතිහාසයක් ඇති ජය ශ්‍රී මහා බෝධීන් වහන්සේ සහ ලොව විශාලතම ස්තූප ලෙස සැලකෙන රුවන්වැලිසෑය, ජේතවනාරාමය වැනි පුදුමයන්ගෙන් මෙම පූජනීය නගරය සමන්විත වේ." 
    },
    shortStory: { EN: "The eternal cradle of Buddhist civilization.", SI: "බෞද්ධ ශිෂ්ටාචාරයේ සදාකාලික තොටිල්ල." },
    bestTime: { EN: "June (Poson Poya)", SI: "ජූනි (පොසොන් පෝය)" },
    tips: [
      { EN: "Wear modest clothing (shoulders/knees covered) and prepare to walk barefoot on temple grounds.", SI: "පූජා භූමියට ඇතුළු වන විට උචිත ඇඳුමකින් සැරසෙන්න. සිරිත් පරිදි පාවහන් ඉවත් කිරීමට සූදානම් වන්න." },
      { EN: "The site is sprawling; hiring a guide or tuk-tuk driver for the full day is highly recommended to see all highlights.", SI: "නැරඹීමට ඇති ස්ථාන රාශියක් ඇති බැවින්, දවස පුරා ගමන් කිරීමට මඟපෙන්වන්නෙකු හෝ රථයක් ලබා ගැනීම සුදුසුය." },
      { EN: "Visit Mihintale (15 mins away) at sunset for a breathtaking panoramic view of the ancient reservoir system.", SI: "සවස් කාලයේදී අසල ඇති මිහින්තලය වෙත යන්න; එහි සිට පෙනෙන අතීත වැව් පද්ධතියේ දර්ශනය අතිශය සුන්දරය." }
    ],
    location: "Anuradhapura District",
    coordinates: { x: 45, y: 25 }
  },
  {
    id: "dambulla",
    name: { EN: "Dambulla Golden Cave Temple", SI: "දඹුල්ල රන් විහාරය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1656497107500-a2bc32cbe7d4?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "This sprawling cave temple complex is the best-preserved of its kind in Sri Lanka. Dating back to the 1st century BC, it features five massive caves filled with over 150 Buddha statues and intricate ceiling paintings covering 2,100 square meters. It was used as a refuge by King Valagamba during his years in exile, who later commissioned the temples out of gratitude for the sanctuary provided by the monks.", 
      SI: "ශ්‍රී ලංකාවේ විශාලතම සහ හොඳම තත්ත්වයේ පවතින ලෙන් විහාර පද්ධතිය මෙයයි. වටිනා බුද්ධ ප්‍රතිමා 150 කට අධික සංඛ්‍යාවක් සහ වසර 2,000 කට වඩා පැරණි සිතුවම් වලින් මෙම ලෙන් පහ විචිත්‍රවත් වී ඇත. වළගම්බා රජු සිය පිටුවහල් කාලයේදී රැකවරණය ලැබූ මෙම ස්ථානය පසුව පූජනීය විහාර සංකීර්ණයක් බවට පත් කරන ලදී." 
    },
    shortStory: { EN: "Where silence speaks through golden statues.", SI: "රන් පිළිම අතර නිහඬතාවය කතා කරන තැන." },
    bestTime: { EN: "Year round", SI: "වසර පුරා" },
    tips: [
      { EN: "Prepare for a moderate climb of around 300 steps; the path is paved but monkeys are plentiful and may try to steal snacks.", SI: "පියගැට පෙළ 300 ක් පමණ නැගීමට සිදුවන බැවින් සුවපහසු ලෙස සූදානම් වන්න. පඩිපෙළ අසල සිටින වඳුරන්ගෙන් ප්‍රවේශම් වන්න." },
      { EN: "Avoid using flash when taking photos inside the caves to protect the delicate ancient frescoes from light damage.", SI: "ලෙන් සිතුවම්වල ආරක්ෂාව සඳහා ලෙන් ඇතුළතදී ප්ලෑෂ් භාවිතා කර ඡායාරූප ගැනීමෙන් වළකින්න." },
      { EN: "The ticket office is at the bottom of the hill; make sure you buy your tickets before starting the climb!", SI: "ප්‍රවේශ පත්‍ර නිකුත් කරන ස්ථානය කන්ද පාමුල පිහිටා ඇති බැවින්, නැගීම ආරම්භ කිරීමට පෙර ප්‍රවේශ පත්‍ර ලබාගන්න." }
    ],
    location: "Matale District",
    coordinates: { x: 52, y: 34 }
  },
  {
    id: "mirissa",
    name: { EN: "Mirissa Beach", SI: "මිරිස්ස වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1552055568-f8c4fb8c6320?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1673999298320-b668829e5679?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Once a quiet fishing village, Mirissa has transformed into a world-class destination for marine life enthusiasts. It is the primary hub for whale watching in Sri Lanka, where Blue Whales can be spotted just a few miles offshore. The iconic Parrot Rock and the hidden 'Coconut Tree Hill' offer some of the most Instagrammed views along the southern coast, where sapphire waters meet golden sands.", 
      SI: "දකුණු වෙරළේ සුන්දරම වෙරළ තීරයක් වන මිරිස්ස, තල්මසුන් නැරඹීම සඳහා ලොව සුප්‍රසිද්ධ මධ්‍යස්ථානයකි. නිල් තල්මසුන් සහ ඩොල්ෆින් මසුන් නැරඹීමට අමතරව 'පැරට් රොක්' සහ තේ වතු අතරින් පෙනෙන මුහුදු දර්ශනය මෙහි සුවිශේෂී අංගයන් වේ." 
    },
    shortStory: { EN: "Sunsets and giants of the deep.", SI: "හිරු බැසීම සහ සාගරයේ යෝධයින්." },
    bestTime: { EN: "November to March", SI: "නොවැම්බර් සිට මාර්තු දක්වා" },
    tips: [
      { EN: "Book a whale watching tour with an ethical operator; look for 'WDC' accredited guides who maintain safe distances.", SI: "තල්මසුන් නැරඹීමට යන විට සතුන්ට හානි නොකරන, පිළිගත් සංචාරක මඟපෙන්වන්නන් තෝරාගන්න." },
      { EN: "Visit Coconut Tree Hill early in the morning (6:30 AM) to capture the sunrise without the massive crowds.", SI: "ඡායාරූප ගැනීමට ඉතා සුදුසු 'කොකනට් ට්‍රී හිල්' වෙත උදෑසන 6:30 ට පමණ යන්න." },
      { EN: "Parrot Rock is only accessible during low tide; check the tide times to ensure you don't get stranded on the rock.", SI: "මුහුදු රළ අඩු කාලයේදී පමණක් පැරට් රොක් වෙත යන්න; රළ වැඩි කාලයේදී එහි යාම අවදානම් විය හැක." }
    ],
    location: "Matara District",
    coordinates: { x: 45, y: 92 }
  },
  {
    id: "arugam-bay",
    name: { EN: "Arugam Bay", SI: "ආරුගම්බේ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1552055568-f8c4fb8c6320?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1503384861219-7f20f2f111cc?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Located on the east coast, Arugam Bay is ranked as one of the top ten surf points in the world. Its laid-back, bohemian atmosphere sets it apart from the busier southern resorts. Beyond the waves, the nearby Kumana National Park offers a different side of the island with its vast bird sanctuary and wild elephant herds roaming near ancient lagoons and mangroves.", 
      SI: "නැගෙනහිර වෙරළේ පිහිටි ආරුගම්බේ, ලොව හොඳම රළ පැදීමේ ස්ථාන දහය අතරට ඇතුළත් වේ. මෙහි පවතින නිදහස් සහ සැහැල්ලු පරිසරය සංචාරකයින්ගේ මහත් ආකර්ෂණයට ලක්ව ඇත. රළ පැදීමට අමතරව කුමන ජාතික උද්‍යානයේ කුරුළු පාරාදීසය නැරඹීමටද මෙය කදිම ස්ථානයකි." 
    },
    shortStory: { EN: "Ride the perfect wave.", SI: "පිරිපුන් රළ මත සවාරියක්." },
    bestTime: { EN: "May to September", SI: "මැයි සිට සැප්තැම්බර් දක්වා" },
    tips: [
      { EN: "Even if you aren't a surfer, go to 'Main Point' at dusk to watch the experts tackle the legendary right-hand point break.", SI: "ඔබ රළ පදින්නෙකු නොවුණත්, හවස් කාලයේදී ප්‍රධාන රළ පැදීමේ ස්ථානය වෙත ගොස් එහි ඇති සුන්දරත්වය විඳගන්න." },
      { EN: "Visit Muhudu Maha Vihara, an ancient temple on the beach that holds ruins of a civilization that stood against the ocean.", SI: "වෙරළ අසල ඇති මුහුදු මහා විහාරය නැරඹීමට අමතක නොකරන්න; එහි ඇති ඓතිහාසික නටබුන් ඉතා අගනේය." },
      { EN: "July and August are the peak surfing months; accommodation prices triple, so book your stay months in advance.", SI: "ජූලි සහ අගෝස්තු රළ පැදීමේ කාර්යබහුලම මාස වන බැවින් හෝටල් කල්තියා වෙන් කරවා ගන්න." }
    ],
    location: "Ampara District",
    coordinates: { x: 82, y: 65 }
  },
  {
    id: "horton-plains",
    name: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "A highland plateau at an altitude of 2,100 meters, Horton Plains is a protected area covered by montane grassland and cloud forest. It is famous for 'World's End', a sheer precipice with a vertical drop of about 870 meters. The park is a vital watershed and home to the sambar deer, purple-faced langur, and several endemic bird species found nowhere else on earth, thriving in a cold, windy microclimate.", 
      SI: "මීටර් 2,100 ක් උසින් පිහිටි හෝර්ටන් තැන්න මීදුමෙන් වැසුණු වනාන්තර සහ තණබිම් සහිත සුවිශේෂී පරිසර පද්ධතියකි. මෙහි ඇති 'ලෝකාන්තය' මීටර් 870 ක ප්‍රපාතයකින් සමන්විත වේ. ගෝනුන් සහ දුර්ලභ කුරුළු විශේෂ රාශියක් සැරිසරන මෙම ජාතික උද්‍යානය දේශීය ජල මූලාශ්‍ර රැසක ආරම්භයද වේ." 
    },
    shortStory: { EN: "Standing at the edge of the world.", SI: "ලෝකයේ කෙළවරේ සිටගෙන." },
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" },
    tips: [
      { EN: "Reach World's End before 9:00 AM; after that, the mist usually rolls in and completely obscures the valley view.", SI: "මීදුම ඒමට පෙර උදෑසන 9:00 ට පෙර ලෝකාන්තය වෙත යන්න; ඉන් පසුව නිම්නයේ දර්ශනය මීදුමෙන් වැසී යයි." },
      { EN: "Wear layers; it can be near freezing at dawn but becomes quite warm once the sun is up and you are hiking.", SI: "උදෑසන කාලය ඉතා ශීතල බැවින් උණුසුම් ඇඳුම් ඇඳීම සුදුසුය, නමුත් දහවල් වන විට රස්නය වැඩි විය හැක." },
      { EN: "Strict 'No Plastic' policy is enforced at the gate; your bags will be searched, so remove wrappers beforehand.", SI: "ප්ලාස්ටික් රැගෙන යාම සපුරා තහනම් බැවින්, ඔබගේ බෑග් පරීක්ෂා කිරීමේදී සියලුම ප්ලාස්ටික් දවටන ඉවත් කිරීමට සිදුවේ." }
    ],
    location: "Nuwara Eliya District",
    coordinates: { x: 58, y: 65 }
  },
  {
    id: "knuckles-range",
    name: { EN: "Knuckles Range", SI: "නකල්ස් කඳු පන්තිය" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1563297054-94676106c59b?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "So named for its resemblance to a clenched fist when viewed from Kandy, the Knuckles Mountain Range is a UNESCO World Heritage site and one of the most rugged wilderness areas in Sri Lanka. It contains 34 peaks between 900-1900 meters, featuring everything from tropical rainforests to montane plains. It is a haven for serious hikers and scientists due to its extreme biodiversity and hidden waterfalls.", 
      SI: "මහනුවර දෙසින් බලන විට මිට මොලවන ලද අතක හැඩය ගන්නා නිසා නකල්ස් ලෙස නම් ලැබූ මෙම කඳු පන්තිය යුනෙස්කෝ ලෝක උරුමයකි. විවිධ පරිසර පද්ධති වලින් හෙබි මෙහි කඳු මුදුන් 34 ක් පමණ ඇති අතර, එය කඳු තරණය කරන්නන්ගේ සහ විද්‍යාඥයින්ගේ පාරාදීසයකි." 
    },
    shortStory: { EN: "The rugged spine of the hills.", SI: "කඳුකරයේ රළු කඳු වැටිය." },
    bestTime: { EN: "December to March", SI: "දෙසැම්බර් සිට මාර්තු දක්වා" },
    tips: [
      { EN: "Hire a professional guide; the trails are often unmarked and weather can change in minutes, leading to zero visibility.", SI: "වනාන්තරය තුළ අතරමං නොවීමට පළපුරුදු මඟපෙන්වන්නෙකු ලබාගන්න; කාලගුණය ක්ෂණිකව වෙනස් විය හැක." },
      { EN: "Wear leech socks and carry salt or lime; the damp cloud forests are home to numerous leeches, especially after rain.", SI: "කූඩැල්ලන්ගෙන් ආරක්ෂා වීමට විශේෂ මේස් පැළඳ සිටීම සහ දෙහි හෝ ලුණු රැගෙන යාම ඉතා වැදගත් වේ." },
      { EN: "Pack out everything you pack in; the ecosystem is extremely fragile and has several unique species found only here.", SI: "සොබාදහමට හානි නොකරන්න; මෙහි පමණක් දැකිය හැකි සුවිශේෂී ජීවී විශේෂ රැසක් මෙහි ජීවත් වේ." }
    ],
    location: "Kandy District",
    coordinates: { x: 58, y: 46 }
  },
  {
    id: "trincomalee",
    name: { EN: "Nilaveli Beach", SI: "නිලාවේලි වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1700315303907-5b222bb8bb47?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Trincomalee is built on a peninsula in one of the world's finest deep-water natural harbors. Nilaveli Beach, with its pure white sands and crystal clear waters, is widely considered the best beach on the island. Just 2km offshore lies Pigeon Island National Park, a marine sanctuary containing some of the best coral reefs and shark-watching opportunities in South Asia, along with sacred coastal temples.", 
      SI: "ලොව විශිෂ්ටතම ස්වාභාවික වරායක් අසල පිහිටි නිලාවේලි වෙරළ එහි ඇති සුදු වැලි තලාව නිසා ලොව පුරා ප්‍රසිද්ධය. වෙරළට ආසන්නයේ ඇති පරෙවි දූපත කොරල් පර සහ සාගර ජීවීන් නැරඹීමට ඇති හොඳම ස්ථානයකි. මෙහි ඇති පිරිසිදු නිල් පැහැති මුහුද කිමිදෙන්නන්ගේ ආකර්ෂණය දිනා ඇත." 
    },
    shortStory: { EN: "Pure white sands and ancient shrines.", SI: "සුදු වැලි තලාව සහ පුරාණ කෝවිල්." },
    bestTime: { EN: "May to October", SI: "මැයි සිට ඔක්තෝබර් දක්වා" },
    tips: [
      { EN: "Take a boat to Pigeon Island for snorkeling; go early (8:30 AM) to avoid the afternoon waves and tourist rush.", SI: "පරෙවි දූපතේ කිමිදීම සඳහා උදෑසනම බෝට්ටුවකින් යන්න; දහවල් වන විට මුහුද රළු විය හැක." },
      { EN: "Visit the Koneswaram Temple built on Swami Rock; the cliff-side views of the harbor are spectacular.", SI: "ස්වාමි පර්වතයේ පිහිටි කෝණේශ්වරම් කෝවිල වෙත යන්න; එහි සිට පෙනෙන වරායේ දර්ශනය ඉතා මනරම්ය." },
      { EN: "Try local northern food like Jaffna crab curry if you find specialized spots in town; the flavors are unique.", SI: "යාපනයට ආවේණික කුළුබඩු මිශ්‍ර රසවත් උතුරු පළාතේ ආහාර වර්ග රස බැලීමට අමතක නොකරන්න." }
    ],
    location: "Trincomalee District",
    coordinates: { x: 74, y: 22 }
  },
  {
    id: "nuwara-eliya",
    name: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Established by the British in the 19th century, Nuwara Eliya served as a cool sanctuary for tea planters. Its architecture, including the famous red-brick post office and the Grand Hotel, earned it the nickname 'Little England'. Surrounded by endless emerald tea estates and waterfalls, it remains the heart of the world's finest tea production and a popular retreat for its cool climate and garden culture.", 
      SI: "බ්‍රිතාන්‍යයන් විසින් 19 වන සියවසේදී පිහිටුවන ලද නුවරඑළිය, එහි ඇති ශීතල දේශගුණය නිසා 'පුංචි එංගලන්තය' ලෙස හඳුන්වයි. පැරණි රතු ගඩොල් තැපැල් කාර්යාලය සහ ලොව සුප්‍රසිද්ධ ලංකා තේ නිපදවන හරිත වර්ණ තේ වතු යායවල් මෙහි සුන්දරත්වය වැඩිකරයි. මෙය අදටත් සංචාරකයින්ගේ ප්‍රියතම විවේකී ගමනාන්තයකි." 
    },
    shortStory: { EN: "Emerald hills and English mist.", SI: "හරිත කඳු වැටි සහ ඉංග්‍රීසි මීදුම." },
    bestTime: { EN: "April (Spring season)", SI: "අප්‍රේල් (වසන්ත කාලය)" },
    tips: [
      { EN: "Book a high-tea session at the Grand Hotel; it’s a beautifully preserved ritual of the colonial era.", SI: "ග්‍රෑන්ඩ් හෝටලයේ තේ පැන් සංග්‍රහයකට එක්වන්න; එය යටත් විජිත යුගයේ අලංකාර සම්ප්‍රදායක් අත්විඳීමට හොඳම අවස්ථාවකි." },
      { EN: "Take a walk around Gregory Lake or rent a swan boat at sunset for a relaxing end to your day.", SI: "ග්‍රෙගරි වැව වටා ඇවිද යන්න හෝ හිරු බැස යන වේලාවට බෝට්ටු සවාරියක යෙදෙන්න." },
      { EN: "Visit a tea factory (like Mackwoods or Pedro) to see the entire process from plucking to drying.", SI: "තේ දල්ලේ සිට නිමි තේ දක්වා වූ නිෂ්පාදන ක්‍රියාවලිය නැරඹීමට තේ කර්මාන්ත ශාලාවක් වෙත යන්න." }
    ],
    location: "Nuwara Eliya District",
    coordinates: { x: 58, y: 60 }
  },
  {
    id: "jaffna",
    name: { EN: "Jaffna Nallur Kovil", SI: "යාපනය නල්ලූර් කෝවිල" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1586704235572-9b51fa969cba?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1700315303907-5b222bb8bb47?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "The Nallur Kandaswamy Kovil is one of the most significant Hindu temples in Sri Lanka. The current structure, with its towering golden 'Gopuram', dates back to 1734, though the site has been sacred for over a millennium. It is a symbol of Tamil identity and spiritual resilience, known for its strict discipline, stunning Dravidian architecture, and the vibrant 25-day Nallur festival which attracts thousands of pilgrims.", 
      SI: "යාපනයේ පිහිටි නල්ලූර් කන්දසාමි කෝවිල ශ්‍රී ලංකාවේ හින්දු බැතිමතුන්ගේ පූජනීයම ස්ථානයකි. එහි ඇති රන්වන් පැහැති ගෝපුරය සහ ද්‍රවිඩ ගෘහ නිර්මාණ ශිල්පය අතිශය විස්මිතය. වසරකට වරක් පැවැත්වෙන දින 25 ක මහා උත්සවය උතුරේ සංස්කෘතික අභිමානය ලොවට විදහා දක්වයි." 
    },
    shortStory: { EN: "The golden gateway of the North.", SI: "උතුරේ රන් ද්වාරය." },
    bestTime: { EN: "August (Festival time)", SI: "අගෝස්තු (උත්සව කාලය)" },
    tips: [
      { EN: "Men must remove their shirts to enter the inner sanctum, as per ancient traditions; women should wear sarees or long skirts.", SI: "පාරම්පරික සිරිත් පරිදි පිරිමි අය උඩුකය නිරාවරණය කර කෝවිලට ඇතුළු විය යුතු අතර, කාන්තාවන් උචිත ලෙස සැරසී සිටිය යුතුය." },
      { EN: "Try the Rio Ice Cream nearby; it is a legendary local institution and a favorite treat for those visiting the Kovil.", SI: "කෝවිල අසල ඇති රියෝ අයිස්ක්‍රීම් රස බැලීමට අමතක නොකරන්න; එය යාපනයේ ඉතා ජනප්‍රිය අතුරුපසකි." },
      { EN: "Check out the Jaffna Public Library, once one of the largest in Asia, located just a short tuk-tuk ride away.", SI: "ආසියාවේ විශාලතම පුස්තකාලයක් වූ යාපනය මහජන පුස්තකාලය නැරඹීමටද කාලය වෙන් කරගන්න." }
    ],
    location: "Jaffna District",
    coordinates: { x: 35, y: 5 }
  },
  {
    id: "udawalawe",
    name: { EN: "Udawalawe Safari", SI: "උඩවලව සෆාරි" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Established in 1972 to provide a sanctuary for wild animals displaced by the construction of the reservoir, Udawalawe is now the best place in Asia to see wild elephants in their natural habitat. With an estimated 250 elephants resident in the park, sightings are virtually guaranteed. The park's open terrain, reminiscent of an African savanna, makes it ideal for observing animal behavior without thick jungle cover.", 
      SI: "උඩවලව ජලාශය නිසා අවතැන් වූ වන සතුන් සඳහා 1972 දී පිහිටුවන ලද මෙම වනෝද්‍යානය, අලි ඇතුන් නැරඹීමට ආසියාවේ ඇති හොඳම ස්ථානයයි. වන අලි සිය ගණනක් සැරිසරන මෙම විවෘත භූමිය සතුන්ගේ හැසිරීම් සමීපව නිරීක්ෂණය කිරීමට ඉතා සුදුසුය." 
    },
    shortStory: { EN: "Where elephants roam the dry plains.", SI: "වියළි තැන්නක අලින් සැරිසරන තැන." },
    bestTime: { EN: "December to March", SI: "දෙසැම්බර් සිට මාර්තු දක්වා" },
    tips: [
      { EN: "Visit the Elephant Transit Home (ETH) during feeding times; you can watch orphaned calves being cared for before release.", SI: "අලි සංක්‍රමණික මධ්‍යස්ථානයේ පැටවුන්ට කිරි දෙන වේලාවට එතැනට යන්න; එය ඉතා සංවේදී අත්දැකීමකි." },
      { EN: "Binoculars are a must; while elephants are close, there are also incredible eagles and water birds often perched on dead trees.", SI: "දුරදක්නයක් රැගෙන යන්න; අලින්ට අමතරව විවිධ කොකුන් සහ රාජාලීන් නැරඹීමට එය උපකාරී වේ." },
      { EN: "Sunscreen and a hat are essential as the jeeps are open-top and the sun on the plains can be quite unforgiving.", SI: "දැඩි හිරු රශ්මියෙන් ආරක්ෂා වීමට තොප්පි සහ ආලේපන භාවිතා කරන්න." }
    ],
    location: "Ratnapura District",
    coordinates: { x: 58, y: 75 }
  },
  {
    id: "sinharaja",
    name: { EN: "Sinharaja Forest", SI: "සිංහරාජ වනාන්තරය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1703566567802-e1945c83f0cb?w=1200&auto=format&fit=crop&q=80",
    gallery: ["https://images.unsplash.com/photo-1724939824592-c45fadf8aac3?w=1200&auto=format&fit=crop&q=80"],
    history: { 
      EN: "Sinharaja is Sri Lanka's last viable primary tropical rainforest and a UNESCO World Heritage site. This 'Kingdom of the Lion' is a treasure trove of endemic species, with over 60% of trees and 95% of birds found only here. It is a world of towering giant trees, winding vines, and the constant chorus of insects and rare birds, providing a glimpse of the island as it was for millennia before human intervention.", 
      SI: "ශ්‍රී ලංකාවේ අවසාන නිවර්තන වැසි වනාන්තරය වන සිංහරාජය යුනෙස්කෝ ලෝක උරුමයකි. ලංකාවට පමණක් ආවේණික කුරුල්ලන් සහ ශාක විශේෂ රාශියකට නිවහන වන මෙය ජෛව විවිධත්වයේ පාරාදීසයකි. මෙහි ඇති ඝන වනාන්තරය සහ දිය ඇලි සොබාදහම අගය කරන්නන්ගේ මහත් ප්‍රසාදයට ලක්වේ." 
    },
    shortStory: { EN: "The ancient green lung of Lanka.", SI: "ලංකාවේ පැරණි හරිත පෙනහල්ල." },
    bestTime: { EN: "January to April", SI: "ජනවාරි සිට අප්‍රේල් දක්වා" },
    tips: [
      { EN: "Always hire a forest tracker; they are experts at spotting camouflage lizards, rare frogs, and the elusive Blue Magpie.", SI: "වනාන්තරය පිළිබඳ දන්නා මඟපෙන්වන්නෙකු සමඟ යන්න; දුර්ලභ සතුන් සහ කුරුල්ලන් හඳුනා ගැනීමට ඔවුන්ගේ සහය ඉතා වැදගත් වේ." },
      { EN: "Carry enough water and energy snacks, as trekking through the humid rainforest can be physically demanding.", SI: "වනාන්තරය තුළ ඇවිදීම වෙහෙසකර විය හැකි බැවින් ප්‍රමාණවත් තරම් ජලය සහ ආහාර රැගෙන යන්න." },
      { EN: "Leech protection is non-negotiable; wear long pants and use leech socks provided at the entrance during wet periods.", SI: "කූඩැල්ලන්ගෙන් ආරක්ෂා වීමට අවශ්‍ය පියවර ගන්න; විශේෂයෙන් වැසි කාලයේදී කූඩැලු මේස් පැළඳීම අනිවාර්ය වේ." }
    ],
    location: "Galle District",
    coordinates: { x: 45, y: 80 }
  },
  {
    id: "hikkaduwa",
    name: { EN: "Hikkaduwa Coral Reef", SI: "හික්කඩුව කොරල් පරය" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1558446791-ac5fec3caddf?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Hikkaduwa was one of the first tourist destinations in Sri Lanka to become world-famous in the 1960s. Its marine sanctuary contains a shallow fringing coral reef with over 60 species of hard corals. It is a fantastic spot for snorkeling, where large green sea turtles often swim right up to the shore, and the vibrant coral gardens are teeming with colorful tropical fish in crystal-clear water.", 
      SI: "ශ්‍රී ලංකාවේ මුල්ම සංචාරක මධ්‍යස්ථානයක් වන හික්කඩුව එහි ඇති කොරල් පරය නිසා ප්‍රසිද්ධය. නොගැඹුරු මුහුදේ ඇති කොරල් පර අතර පිහිනන කැස්බෑවුන් සහ විචිත්‍රවත් මසුන් නැරඹීමට මෙය කදිම ස්ථානයකි. මුහුදේ කිමිදීම සහ වීදුරු පතුලක් සහිත බෝට්ටු සවාරි මෙහි වඩාත් ජනප්‍රියයි." 
    },
    shortStory: { EN: "Corals, turtles, and tropical vibes.", SI: "කොරල්, කැස්බෑවුන් සහ නිවර්තන අත්දැකීම." },
    bestTime: { EN: "November to April", SI: "නොවැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [
      { EN: "Do not touch or step on the coral; even a slight touch can kill the delicate organisms that take decades to grow.", SI: "කොරල් පරය ස්පර්ශ කිරීමෙන් හෝ එය මත පය තැබීමෙන් වළකින්න; එය කොරල් වල විනාශයට හේතු වේ." },
      { EN: "Try a glass-bottom boat if you don't want to get wet; it's a great way to see the reefs with children or seniors.", SI: "පිහිනීමට නොහැකි අයට පවා වීදුරු පතුලක් සහිත බෝට්ටු මඟින් කොරල් සහ මසුන් නැරඹිය හැක." },
      { EN: "The best snorkeling is in the protected sanctuary area; rental gear is available everywhere along the beach.", SI: "වඩාත් හොඳින් කොරල් නැරඹීමට ආරක්ෂිත සාගර කලාපය තෝරාගන්න; කිමිදුම් උපකරණ වෙරළේ ඕනෑම තැනකින් ලබාගත හැක." }
    ],
    location: "Galle District",
    coordinates: { x: 32, y: 85 }
  },
  {
    id: "pasikudah",
    name: { EN: "Pasikudah Bay", SI: "පාසිකුඩා වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Pasikudah is world-renowned for its shallow turquoise bay, where one can walk nearly a kilometer into the ocean as the water remains only waist-deep. The calm, pool-like conditions of the bay make it one of the safest swimming spots on the island, particularly for families. The area has seen rapid development, featuring some of the most luxurious beachfront resorts in the country after a period of post-war rejuvenation.", 
      SI: "පාසිකුඩා වෙරළ එහි ඇති ගැඹුර අඩු නිල් පැහැති මුහුද නිසා ලොව පුරා ප්‍රසිද්ධය. කිලෝමීටරයක් පමණ දුරක් මුහුද මැදට පයින් යා හැකි තරම් එහි ජලය නොගැඹුරුය. කුඩා දරුවන්ට සහ පිහිනීමට බිය අයට පවා මෙය ඉතා ආරක්ෂිත සහ සුන්දර වෙරළ තීරයකි." 
    },
    shortStory: { EN: "The mirror of the East.", SI: "නැගෙනහිර කැඩපත." },
    bestTime: { EN: "May to September", SI: "මැයි සිට සැප්තැම්බර් දක්වා" },
    tips: [
      { EN: "Early morning is best for a swim; the water is as still as a mirror and the heat is manageable.", SI: "නෑම සඳහා උදෑසන කාලය තෝරාගන්න; එවිට මුහුද ඉතා සන්සුන්ව සහ සිසිල්ව පවතී." },
      { EN: "Explore the nearby Kalkudah beach for a more rugged and secluded experience away from the resort crowds.", SI: "නිස්කලංක පරිසරයක් සොයන්නෙකු නම් අසල ඇති කල්කුඩා වෙරළ වෙත යන්න." },
      { EN: "Apply plenty of sunscreen; the white sand reflects the intense tropical sun, making it easy to get burnt.", SI: "දැඩි හිරු රශ්මියෙන් ආරක්ෂා වීමට හිරු ආලේපන භාවිතා කිරීමට අමතක නොකරන්න." }
    ],
    location: "Batticaloa District",
    coordinates: { x: 80, y: 40 }
  },
  {
    id: "wilpattu",
    name: { EN: "Wilpattu National Park", SI: "විල්පත්තු ජාතික උද්‍යානය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Wilpattu is Sri Lanka's largest and oldest national park, characterized by a unique complex of nearly 60 natural lakes known as 'Willus'. This landscape provides a serene backdrop for spotting leopards, sloth bears, and crocodiles. Unlike the busier Yala, Wilpattu offers a more solitary and adventurous safari experience through thick dry-zone forest and vast open plains that hold ancient ruins dating back to the dawn of the nation.", 
      SI: "ශ්‍රී ලංකාවේ විශාලතම සහ පැරණිතම වනෝද්‍යානය වන විල්පත්තුව, ස්වාභාවික වැව් හෙවත් 'විල්ලු' රාශියකින් සමන්විත වේ. නිස්කලංක පරිසරයක දිවියන්, වලසුන් සහ කිඹුලන් නැරඹීමට මෙය කදිම ස්ථානයකි. මෙය වනජීවී ලෝලීන්ට අමුතුම අත්දැකීමක් ලබා දෙන අති රමණීය වනාන්තරයකි." 
    },
    shortStory: { EN: "The land of natural lakes.", SI: "ස්වාභාවික විල්වල දේශය." },
    bestTime: { EN: "February to October", SI: "පෙබරවාරි සිට ඔක්තෝබර් දක්වා" },
    tips: [
      { EN: "Plan for a full-day safari; because of its size, a half-day trip barely scratches the surface of this massive park.", SI: "උද්‍යානය ඉතා විශාල බැවින් සම්පූර්ණ දිනක සෆාරි සංචාරයක් සැලසුම් කරගන්න." },
      { EN: "Keep noise to a minimum; Wilpattu is quieter than Yala, and silence increases your chances of spotting shy leopards.", SI: "සතුන් බිය නොවීමට සහ ඔවුන් සමීපව දැක ගැනීමට හැකි තරම් නිශ්ශබ්දව ගමන් කරන්න." },
      { EN: "The best leopard sightings often occur near the many Willus (lakes) during the heat of the afternoon.", SI: "දහවල් කාලයේදී විල්ලු අසලට පැෙනෙන දිවියන් නැරඹීමට වැඩි අවස්ථාවක් පවතී." }
    ],
    location: "Anuradhapura District",
    coordinates: { x: 35, y: 25 }
  },
  {
    id: "minneriya",
    name: { EN: "Minneriya Elephant Gathering", SI: "මින්නේරිය අලි රංචුව" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Minneriya is home to 'The Gathering', a world-famous wildlife spectacle where hundreds of Asian elephants congregate around the Minneriya tank during the dry season. It is recognized as one of the largest seasonal meetings of wild elephants in the world. As the water recedes, the lush green grass provides a massive feast, creating an unforgettable sight of families, including many calves, grazing and playing together on the open bed of the reservoir.", 
      SI: "මින්නේරිය වැව ආශ්‍රිතව සිදුවන 'අලි රංචු හමුව' ලොව සුප්‍රසිද්ධ වනජීවී දසුනකි. වියළි කාලයේදී ජලය අඩුවන වැව් තලාවේ නැවුම් තණබිම් සොයා එන අලි සිය ගණනක් මෙහිදී දැකගත හැක. මෙය ලොව විශාලතම වන අලි රංචු හමුවක් ලෙස විදේශිකයින්ගේ පවා දැඩි අවධානයට ලක්ව ඇත." 
    },
    shortStory: { EN: "The largest meeting of giants.", SI: "යෝධයින්ගේ විශාලතම හමුවීම." },
    bestTime: { EN: "August to September", SI: "අගෝස්තු සිට සැප්තැම්බර් දක්වා" },
    tips: [
      { EN: "Timing is everything; the elephants usually emerge from the forest into the open plains late in the afternoon (after 3 PM).", SI: "අලි රංචු දැක ගැනීමට පස්වරු 3:00 න් පසුව වනාන්තරයෙන් පිටතට එන වේලාව වඩාත් සුදුසුය." },
      { EN: "Bring a light jacket; it can get quite breezy and cool as you wait near the open water of the tank.", SI: "වැව් තාවුල්ල අසලදී දැඩි සුළඟක් ඇති විය හැකි බැවින් සැහැල්ලු කබායක් රැගෙන යාම සුදුසුය." },
      { EN: "Don't forget to look for birds; the tank attracts massive flocks of painted storks, pelicans, and cormorants.", SI: "අලින්ට අමතරව වැව අවට සැරිසරන දුර්ලභ දියකාවුන් සහ පැලිකන් වැනි පක්ෂීන් නැරඹීමටද අවධානය යොමු කරන්න." }
    ],
    location: "Polonnaruwa District",
    coordinates: { x: 58, y: 32 }
  },
  {
    id: "ritigala",
    name: { EN: "Ritigala Monastery", SI: "රිටිගල ආරණ්‍යය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80"],
    history: { 
      EN: "Ritigala is an ancient Buddhist monastery and mountain range that feels lost in time. Located in the dry zone, the mountain's high elevation creates its own microclimate, making it home to rare medicinal herbs found nowhere else in the surrounding region. The ruins are unique because they lack the ornate carvings of Anuradhapura, instead reflecting the austere and meditative life of the forest-dwelling monks who lived here in total seclusion for centuries.", 
      SI: "අතීත ආරණ්‍ය සේනාසනයක් වූ රිටිගල කඳු පන්තිය මීදුමෙන් සහ වනාන්තරයෙන් වැසුණු රහස්‍ය ස්ථානයකි. මෙහි ඇති පැරණි ගල් පඩිපෙළ සහ පොකුණු ඉතා විස්මිතය. අනෙකුත් නගරවල මෙන් නොව මෙහි ඇති සරල ගෘහ නිර්මාණ ශිල්පය එදා වැඩසිටි වනවාසී භික්ෂූන් වහන්සේලාගේ සන්සුන් දිවි පෙවෙත මනාව නිරූපණය කරයි." 
    },
    shortStory: { EN: "A mystic mountain lost in time.", SI: "කාලය තුළ අතරමං වූ අද්භූත කන්ද." },
    bestTime: { EN: "Year round", SI: "වසර පුරා" },
    tips: [
      { EN: "Wear sturdy shoes; the path consists of ancient stone stairs and uneven forest trails that can be slippery.", SI: "වනාන්තරය මැදින් වැටී ඇති ගල් පඩිපෙළ මත ඇවිදීමට සුවපහසු සහ ශක්තිමත් පාවහන් පැළඳ සිටීම වැදගත් වේ." },
      { EN: "Silence is mandatory; this is still a place of deep spiritual significance and the atmosphere is heavy with tranquility.", SI: "මෙය ආරණ්‍යයක් බැවින් හැකි තරම් නිශ්ශබ්දව ඇවිද යන්න; එය එහි ඇති සන්සුන් බව විඳීමට උපකාරී වේ." },
      { EN: "Look for the rare 'Wanda-Manthri' plant; local legend says these were the herbs Hanuman dropped from the Himalayas.", SI: "හනුමාන් රැගෙන ආ ඖෂධ මෙහි පවතින බවට ජනප්‍රවාදයේ එන බැවින්, මෙහි ඇති දුර්ලභ ඖෂධ පැලෑටි පිළිබඳ විමසිලිමත් වන්න." }
    ],
    location: "Anuradhapura District",
    coordinates: { x: 54, y: 28 }
  }
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
    image: "https://images.unsplash.com/photo-1610475306385-d6023d6a9a08?auto=format&fit=crop&w=1200&q=80",
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
