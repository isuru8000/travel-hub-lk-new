import { Destination } from './types.ts';

export const DESTINATIONS_DATA: Destination[] = [
  { 
    id: "sigiriya", 
    name: { EN: "Sigiriya Lion Rock", SI: "සීගිරිය සිංහගිරිය" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1920&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501534159995-5b8c9ad9479b?auto=format&fit=crop&w=1200&q=80"
    ], 
    videoUrl: "https://www.youtube.com/shorts/j4ln2UNOnZk", 
    history: { 
      EN: "Sigiriya, or 'Lion Rock,' is a staggering 200-meter-high ancient fortress and palace complex. Built in the 5th century by King Kasyapa, it is a masterclass in ancient urban planning, hydraulics, and art.\n\nTop 5 Things to See:\n1. The Water Gardens: Among the world's oldest landscaped gardens with gravity-fed fountains.\n2. The Mirror Wall: Ancient graffiti poems etched by visitors over 1,000 years ago.\n3. The Frescoes: Vibrant paintings of 'celestial maidens' surviving 1,500 years.\n4. The Lion’s Paws: Massive stone paws guarding the halfway point of the climb.\n5. The Sky Palace: Ruins of the upper palace with 360-degree jungle views.", 
      SI: "සීගිරිය, හෙවත් 'සිංහගිරිය', මීටර් 200ක් උසැති අතිවිශාල පැරණි බලකොටුවක් සහ මාලිගා සංකීර්ණයකි. 5 වන සියවසේදී කාශ්‍යප රජු විසින් ඉදිකරන ලද මෙය පැරණි නාගරික සැලසුම්කරණය, ජල විද්‍යාව සහ කලාව පිළිබඳ විශිෂ්ටතම නිදසුනකි.\n\nනැරඹිය යුතු ප්‍රධාන ස්ථාන 5:\n1. දිය උද්‍යාන: ක්‍රියාකාරී දිය උල්පත් සහිත ලොව පැරණිතම උද්‍යාන.\n2. කැටපත් පවුර: වසර 1000කට වඩා පැරණි කුරුටු ගී.\n3. සීගිරි බිතුසිතුවම්: වසර 1500ක් පැරණි අලංකාර සිතුවම්.\n4. සිංහ පාදය: මාලිගාවට පිවිසෙන ස්ථානයේ ඇති දැවැන්ත සිංහ පාද.\n5. අහස් මාලිගය: මුදුනේ ඇති මාලිගා නටබුන් සහ මනරම් දර්ශන." 
    }, 
    shortStory: { EN: "The 8th Wonder of the World.", SI: "ලොව අටවන පුදුමය." }, 
    bestTime: { EN: "December to April (Recommended climb at 6:30 AM)", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා (උදෑසන 6:30 ට නැගීම වඩාත් සුදුසුයි)" }, 
    tips: [
      { EN: "Visit the Museum first for historical context before the climb.", SI: "නැගීමට පෙර ඓතිහාසික පසුබිම දැනගැනීම සඳහා කෞතුකාගාරය මුලින්ම නරඹන්න." },
      { EN: "Stay quiet near the Lion's Paws to avoid disturbing hornet nests.", SI: "බඹරුන් ඇවිස්සීම වැළැක්වීමට සිංහ පාදය අසලදී නිශ්ශබ්ද වන්න." },
      { EN: "Carry 1.5L of water and a hat; the summit has no shade.", SI: "වතුර ලීටර් 1.5ක් සහ තොප්පියක් රැගෙන යන්න; මුදුනේ සෙවන නොමැත." },
      { EN: "Budget Alternative: Climb Pidurangala Rock ($3) for the best view OF Sigiriya.", SI: "සීගිරිය නැරඹීමට අසල ඇති පින්දූරංගල කන්ද ($3) නගින්න." },
      { EN: "Monkeys are opportunists; keep snacks inside your bag.", SI: "වඳුරන්ගෙන් ප්‍රවේශම් වන්න; ආහාර බෑගය තුළ සුරක්ෂිතව තබාගන්න." }
    ], 
    location: "Matale", 
    coordinates: { x: 52, y: 38 } 
  },
  { 
    id: "yapahuwa", 
    name: { EN: "Yapahuwa Rock Fortress", SI: "යාපහුව බලකොටුව" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "Yapahuwa was the 13th-century capital of Sri Lanka, built by King Buvanekabahu I to safeguard the Sacred Tooth Relic. It is world-renowned for its magnificent stone staircase, adorned with intricate carvings of lions, dancers, and musicians, rivaling the splendor of Sigiriya.", 
      SI: "13 වන සියවසේදී පළමුවන බුවනෙකබාහු රජු විසින් දළදා වහන්සේ ආරක්ෂා කිරීම සඳහා යාපහුව අගනුවර ලෙස තෝරා ගන්නා ලදී. මෙහි ඇති අලංකාර ශෛලමය පියගැටපෙළ සහ එහි ඇති සිංහ රූප, නර්තන ශිල්පීන්ගේ කැටයම් ලොව පුරා ප්‍රසිද්ධියට පත්ව ඇත්තේ සීගිරියේ අසිරිය සිහිපත් කරමිනි." 
    }, 
    shortStory: { EN: "The Stairway to Ancient Majesty.", SI: "අභිමානවත් අතීතයකට පියගැටපෙළ." }, 
    bestTime: { EN: "January to September", SI: "ජනවාරි සිට සැප්තැම්බර් දක්වා" }, 
    tips: [
      { EN: "The climb is steep; wear shoes with good grip.", SI: "පියගැටපෙළ ඉතා බෑවුම් සහිත බැවින් ලිස්සන්නේ නැති සපත්තු පළඳින්න." },
      { EN: "Don't miss the small museum at the base of the rock.", SI: "පර්වතය පාමුල ඇති කුඩා කෞතුකාගාරය නැරඹීමට අමතක නොකරන්න." }
    ], 
    location: "Kurunegala", 
    coordinates: { x: 45, y: 40 } 
  },
  { 
    id: "dambulla", 
    name: { EN: "Dambulla Cave Temple", SI: "දඹුල්ල රජමහා විහාරය" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "A UNESCO World Heritage site, the Golden Temple of Dambulla is the largest and best-preserved cave temple complex in Sri Lanka. It contains five major caves filled with over 150 Buddha statues and murals that span over 2,000 years of history.", 
      SI: "යුනෙස්කෝ ලෝක උරුමයක් වන දඹුල්ල රන් විහාරය, ලංකාවේ විශාලතම සහ හොඳින්ම සුරැකී ඇති ලෙන් විහාර සංකීර්ණයයි. මෙහි ප්‍රධාන ලෙන් පහක් තුළ බුදු පිළිම 150කට අධික ප්‍රමාණයක් සහ වසර 2000කට වඩා පැරණි බිතුසිතුවම් දැකගත හැකිය." 
    }, 
    shortStory: { EN: "Whispers of Enlightenment in Stone.", SI: "ශෛලමය ගුහාවල නිහඬ පූජනීයත්වය." }, 
    bestTime: { EN: "All year round (Early morning is cooler)", SI: "වසරේ ඕනෑම කාලයක (උදෑසන කාලය සිසිල්ය)" }, 
    tips: [
      { EN: "Avoid wearing socks as the stone floors get very hot at noon.", SI: "දවල් කාලයේදී ගල් පොළොව රත් වන බැවින් මේස් පැළඳීමෙන් වළකින්න." },
      { EN: "Cover your shoulders and knees before entering.", SI: "විහාරයට ඇතුළු වීමට පෙර උරහිස් සහ දණහිස් වැසෙන සේ ඇඳුම් අඳින්න." }
    ], 
    location: "Matale", 
    coordinates: { x: 55, y: 35 } 
  },
  { 
    id: "nuwara-eliya", 
    name: { EN: "Nuwara Eliya (Little England)", SI: "නුවරඑළිය" }, 
    category: "mountains", 
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1594631252845-29fc458695d1?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "Established in the 19th century, Nuwara Eliya was the favorite hill station retreat for British colonialists. Known for its cool climate and Tudor-style architecture, it remains the heart of Sri Lanka's world-class tea industry.", 
      SI: "19 වන සියවසේදී බ්‍රිතාන්‍ය පාලන සමයේදී ආරම්භ වූ නුවරඑළිය, එකල 'පුංචි එංගලන්තය' ලෙස හැඳින්විණි. සිසිල් දේශගුණය සහ පැරණි බ්‍රිතාන්‍ය පන්නයේ ගොඩනැගිලි නිසා අදටත් මෙය ලොව ප්‍රචලිත සංචාරක නගරයකි." 
    }, 
    shortStory: { EN: "Emerald Valleys and Colonial Charms.", SI: "මීදුමෙන් වැසුණු තේ වතු මැද අසිරිය." }, 
    bestTime: { EN: "February to May", SI: "පෙබරවාරි සිට මැයි දක්වා" }, 
    tips: [
      { EN: "Bring warm clothes; temperatures can drop significantly at night.", SI: "රාත්‍රී කාලයේ අධික ශීතලක් පවතින බැවින් උණුසුම් ඇඳුම් රැගෙන යන්න." },
      { EN: "Visit a tea factory to see the orthodox processing method.", SI: "තේ නිෂ්පාදනය කරන ආකාරය බැලීමට තේ කර්මාන්තශාලාවකට යන්න." }
    ], 
    location: "Nuwara Eliya", 
    coordinates: { x: 55, y: 65 } 
  },
  { 
    id: "trincomalee", 
    name: { EN: "Trincomalee (Nilaveli)", SI: "ත්‍රිකුණාමලය (නිලාවේලි)" }, 
    category: "beach", 
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "One of the world's finest natural deep-water harbors, Trincomalee has been a strategic maritime hub for centuries. It is home to the ancient Koneswaram Temple and the pristine white sands of Nilaveli Beach.", 
      SI: "ලොව විශිෂ්ටතම ස්වාභාවික වරායක් හිමි ත්‍රිකුණාමලය, සියවස් ගණනාවක් පුරා වැදගත් නාවික කේන්ද්‍රස්ථානයක් ලෙස පැවතුණි. පූජනීය කෝණේශ්වරම් කෝවිල සහ සුදු වැල්ලෙන් පිරි නිලාවේලි වෙරළ මෙහි සුන්දරත්වය වැඩි කරයි." 
    }, 
    shortStory: { EN: "Where the Sun Kisses the Deep Blue.", SI: "සූර්යයා සහ නිල්වන් සාගරය හමුවන තැන." }, 
    bestTime: { EN: "May to October", SI: "මැයි සිට ඔක්තෝබර් දක්වා" }, 
    tips: [
      { EN: "Take a boat to Pigeon Island for world-class snorkeling.", SI: "ස්නෝකෙලින් (snorkeling) අත්දැකීමක් සඳහා පරෙවි දූපතට බෝට්ටුවකින් යන්න." },
      { EN: "Watch the sunrise over the Indian Ocean from the Swami Rock cliff.", SI: "ස්වාමි පර්වතයේ සිට ඉන්දියන් සාගරයේ හිරු උදාව නරඹන්න." }
    ], 
    location: "Trincomalee", 
    coordinates: { x: 75, y: 25 } 
  },
  { 
    id: "wilpattu", 
    name: { EN: "Wilpattu National Park", SI: "විල්පත්තුව ජාතික උද්‍යානය" }, 
    category: "wildlife", 
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "The largest and oldest national park in Sri Lanka, Wilpattu is famous for its 'Willus'—natural sand-rimmed water basins. It is a prime habitat for the elusive Sri Lankan leopard and sloth bear.", 
      SI: "ශ්‍රී ලංකාවේ විශාලතම සහ පැරණිතම ජාතික උද්‍යානය මෙයයි. විල්පත්තුව එහි ඇති ස්වාභාවික විල් හෙවත් 'විල්ලු' නිසා ප්‍රසිද්ධියට පත්ව ඇත. මෙය ශ්‍රී ලාංකික දිවියා සහ වලසා දැකගත හැකි හොඳම ස්ථානයකි." 
    }, 
    shortStory: { EN: "The Land of the Lakes and the Leopard.", SI: "විල් සහ දිවියන්ගේ අඩවිය." }, 
    bestTime: { EN: "May to early October", SI: "මැයි සිට ඔක්තෝබර් දක්වා" }, 
    tips: [
      { EN: "Book a full-day safari for a higher chance of seeing a leopard.", SI: "දිවියෙකු දැකගැනීමේ වැඩි අවස්ථාවක් සඳහා සම්පූර්ණ දින සෆාරියක් තෝරාගන්න." },
      { EN: "Visit during the dry season when animals gather around the willus.", SI: "සතුන් විල් වටා එක්වන නියං කාලයේදී යාම වඩාත් සුදුසුයි." }
    ], 
    location: "Puttalam", 
    coordinates: { x: 35, y: 30 } 
  },
  { 
    id: "horton-plains", 
    name: { EN: "Horton Plains (World's End)", SI: "හෝර්ටන් තැන්න (ලෝකාන්තය)" }, 
    category: "mountains", 
    image: "https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "Located on a high-altitude plateau, Horton Plains is a biodiversity hotspot. The 'World's End' cliff offers a sheer drop of over 800 meters, providing one of the most dramatic views in the island.", 
      SI: "අති උසස් සානුවක පිහිටි හෝර්ටන් තැන්න ජෛව විවිධත්වයෙන් පිරි කලාපයකි. මෙහි ඇති 'ලෝකාන්තය' මීටර් 800කට වඩා උසැති බෑවුමක් සහිත දර්ශනීය ස්ථානයකි." 
    }, 
    shortStory: { EN: "Standing on the Edge of the World.", SI: "ලෝකයේ කෙළවරක සිටිනවා වැනි හැඟීමක්." }, 
    bestTime: { EN: "January to March (Arrive by 6 AM to avoid mist)", SI: "ජනවාරි සිට මාර්තු දක්වා (මීදුමෙන් වැසීමට පෙර උදෑසන 6 ට යා යුතුය)" }, 
    tips: [
      { EN: "No plastic is allowed inside the park; check your bags at the gate.", SI: "උද්‍යානය තුළට ප්ලාස්ටික් ගෙන යාම තහනම්ය; පිවිසුමේදී බෑග් පරීක්ෂා කරනු ලැබේ." },
      { EN: "The hike is about 9km (loop); bring comfortable walking shoes.", SI: "සංචාරය කිලෝමීටර් 9ක් පමණ වේ; ඇවිදීමට පහසු සපත්තු පළඳින්න." }
    ], 
    location: "Nuwara Eliya", 
    coordinates: { x: 58, y: 72 } 
  },
  { 
    id: "arugam-bay", 
    name: { EN: "Arugam Bay", SI: "ආරුගම්බේ" }, 
    category: "beach", 
    image: "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "Arugam Bay is a world-class surfing destination located on the southeast coast. Originally a small fishing village, it has evolved into a global surfing paradise while maintaining its laid-back island vibe.", 
      SI: "ආරුගම්බේ යනු ගිනිකොනදිග වෙරළේ පිහිටි ලෝක ප්‍රසිද්ධ රළ පැදීමේ (surfing) ගමනාන්තයකි. මුලින් කුඩා ධීවර ගම්මානයක් වූ මෙය අද ලොව පුරා සංචාරකයින්ගේ ප්‍රියතම නිදහස් වෙරළ තීරයකි." 
    }, 
    shortStory: { EN: "Chasing the Perfect Wave.", SI: "සාගර රළ මත යන නිදහස් ගමන." }, 
    bestTime: { EN: "April to October (Surfing season)", SI: "අප්‍රේල් සිට ඔක්තෝබර් දක්වා (රළ පැදීමේ කාලය)" }, 
    tips: [
      { EN: "Rent a surfboard locally if you didn't bring your own.", SI: "ඔබේම එකක් නැතිනම් දේශීය ස්ථානවලින් රළ පැදීමේ ලෑලි කුලියට ගත හැකිය." },
      { EN: "Visit Whiskey Point for sunrise surf sessions.", SI: "හිරු උදාව සමඟ රළ පැදීම සඳහා විස්කි පොයින්ට් (Whiskey Point) වෙත යන්න." }
    ], 
    location: "Ampara", 
    coordinates: { x: 85, y: 75 } 
  },
  { 
    id: "sinharaja", 
    name: { EN: "Sinharaja Rain Forest", SI: "සිංහරාජ වැසි වනාන්තරය" }, 
    category: "wildlife", 
    image: "https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "The Sinharaja Forest Reserve is a UNESCO World Heritage site and the last viable area of primary tropical rainforest in Sri Lanka. It is home to over 50% of the island's endemic species.", 
      SI: "සිංහරාජ වනාන්තරය යුනෙස්කෝ ලෝක උරුමයක් වන අතර, ලංකාවේ ඉතිරිව ඇති ප්‍රධානතම නිවර්තන වැසි වනාන්තරයයි. ලංකාවට පමණක් ආවේණික සතුන්ගෙන් 50%කට වඩා මෙහි වෙසෙති." 
    }, 
    shortStory: { EN: "The Emerald Soul of Lanka.", SI: "ලංකාවේ හරිත හදවත." }, 
    bestTime: { EN: "January to April", SI: "ජනවාරි සිට අප්‍රේල් දක්වා" }, 
    tips: [
      { EN: "Hire a local guide to spot hidden endemic birds and reptiles.", SI: "සැඟවුණු සතුන් දැකගැනීම සඳහා දේශීය මගපෙන්වන්නෙකු ලබාගන්න." },
      { EN: "Wear leech socks; it is very wet and leeches are common.", SI: "කූඩැල්ලන්ගෙන් ආරක්ෂා වීමට 'ලීච් සොක්ස්' (leech socks) පළඳින්න." }
    ], 
    location: "Ratnapura", 
    coordinates: { x: 45, y: 80 } 
  },
  { 
    id: "pidurangala", 
    name: { EN: "Pidurangala Rock", SI: "පින්දූරංගල පර්වතය" }, 
    category: "mountains", 
    image: "https://images.unsplash.com/photo-1501534159995-5b8c9ad9479b?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1501534159995-5b8c9ad9479b?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "Located adjacent to Sigiriya, Pidurangala served as a Buddhist monastery during the reign of King Kasyapa. It offers the most spectacular panoramic view of the Sigiriya fortress and the surrounding jungle.", 
      SI: "සීගිරිය අසලම පිහිටි පින්දූරංගල පර්වතය, කාශ්‍යප රජුගේ කාලයේදී ආරණ්‍ය සේනාසනයක් ලෙස පැවතුණි. මෙහි සිට සීගිරි බලකොටුව අලංකාර ලෙස දැකගත හැකිය." 
    }, 
    shortStory: { EN: "Watching the Lion from Above.", SI: "සීගිරි සිංහයා දෙස බලා සිටින තැන." }, 
    bestTime: { EN: "Sunrise or Sunset", SI: "හිරු උදාව හෝ බැස යන වේලාව" }, 
    tips: [
      { EN: "The last part of the climb involves scrambling over boulders.", SI: "ගමනේ අවසාන කොටස විශාල ගල් පර්වත උඩින් නැගීමට සිදුවේ." },
      { EN: "Bring a headlamp if you are climbing for the sunrise.", SI: "හිරු උදාව නැරඹීමට පාන්දරින් යන්නේ නම් 'හෙඩ් ලෑම්ප්' (headlamp) එකක් රැගෙන යන්න." }
    ], 
    location: "Matale", 
    coordinates: { x: 53, y: 37 } 
  },
  { 
    id: "jaffna-fort", 
    name: { EN: "Jaffna Dutch Fort", SI: "යාපනය ලන්දේසි කොටුව" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "The Jaffna Fort was originally built by the Portuguese in 1618 and later expanded by the Dutch. It is the second largest fort in the island and stands as a symbol of the diverse cultural history of the northern peninsula.", 
      SI: "යාපනය කොටුව මුලින්ම පෘතුගීසීන් විසින් 1618 දී සාදන ලද අතර පසුව ලන්දේසීන් විසින් විශාල කරන ලදී. මෙය ලංකාවේ දෙවන විශාලතම කොටුව වන අතර උතුරේ ඉතිහාසය කියාපාන කදිම ස්ථානයකි." 
    }, 
    shortStory: { EN: "Echoes of the North.", SI: "උතුරේ ඉතිහාසයේ හඬ." }, 
    bestTime: { EN: "December to February", SI: "දෙසැම්බර් සිට පෙබරවාරි දක්වා" }, 
    tips: [
      { EN: "Visit in the late afternoon to catch the sunset over the lagoon.", SI: "කලපුව මත හිරු බැස යන අයුරු බැලීමට සවස් කාලයේ යන්න." },
      { EN: "Combine your visit with the Jaffna Library nearby.", SI: "යාපනය පුස්තකාලයද මේ අසලම පිහිටා ඇත." }
    ], 
    location: "Jaffna", 
    coordinates: { x: 50, y: 5 } 
  },
  { 
    id: "knuckles", 
    name: { EN: "Knuckles Mountain Range", SI: "දුම්බර මිටියාවත (නකල්ස්)" }, 
    category: "mountains", 
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "The Knuckles Mountain Range is named for its shape, which resembles a clenched fist. This rugged area is home to rare cloud forests and diverse endemic flora and fauna, offering some of the best hiking in the island.", 
      SI: "නකල්ස් කඳු පන්තිය එහි නම ලැබී ඇත්තේ මිට මෙලවූ අතක ඇඟිලි පර්වයන්ගේ හැඩය (knuckles) ඇති නිසාය. මෙය දුර්ලභ ශාක සහ සතුන්ගෙන් පිරි, කඳු තරණය කරන්නන්ගේ පාරාදීසයකි." 
    }, 
    shortStory: { EN: "The Misty Fist of Nature.", SI: "මීදුමෙන් වැසුණු කඳු මුදුන්." }, 
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" }, 
    tips: [
      { EN: "Hire an experienced guide; trails can be confusing in the mist.", SI: "මීදුම සහිත කාලයේදී මග වැරදීමට ඉඩ ඇති බැවින් මගපෙන්වන්නෙකු ලබාගන්න." },
      { EN: "The weather changes very quickly; be prepared for rain.", SI: "කාලගුණය ඉතා ඉක්මනින් වෙනස් වන බැවින් වැස්සට සූදානම් වන්න." }
    ], 
    location: "Matale", 
    coordinates: { x: 58, y: 45 } 
  },
  { 
    id: "unawatuna", 
    name: { EN: "Unawatuna Beach", SI: "උණවටුන වෙරළ" }, 
    category: "beach", 
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "Unawatuna is a major tourist destination in Sri Lanka and is known for its beautiful semicircular beach. Legend says that a piece of the Himalayan mountain dropped here when Hanuman carried it to Lanka.", 
      SI: "උණවටුන එහි අර්ධ වෘත්තාකාර හැඩයෙන් යුත් අලංකාර වෙරළ නිසා ප්‍රසිද්ධය. හනුමාන් විසින් හිමාලය කන්ද රැගෙන එන විට ඉන් කොටසක් මෙතැනට වැටුණු බව ජනප්‍රවාදයේ පැවසේ." 
    }, 
    shortStory: { EN: "A Crescent of Golden Sands.", SI: "රන්වන් වැල්ලෙන් පිරි වෙරළ." }, 
    bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" }, 
    tips: [
      { EN: "Visit the Japanese Peace Pagoda on the nearby hill.", SI: "අසල කන්දේ ඇති ජපන් සාම චෛත්‍යය නැරඹීමට යන්න." },
      { EN: "The water is generally calm, making it good for swimming.", SI: "මෙහි මුහුද තරමක් සන්සුන් බැවින් පිහිනීමට සුදුසුය." }
    ], 
    location: "Galle", 
    coordinates: { x: 42, y: 94 } 
  },
  { 
    id: "kumana", 
    name: { EN: "Kumana (Yala East)", SI: "කුමන ජාතික උද්‍යානය" }, 
    category: "wildlife", 
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "Known as the primary bird sanctuary in the island, Kumana is home to thousands of migrating birds and local species. It also holds ancient rock inscriptions dating back to the 1st century BC.", 
      SI: "ලංකාවේ ප්‍රධානතම පක්ෂි අභයභූමිය කුමන වේ. දහස් ගණන් සංක්‍රමණික පක්ෂීන් මෙහි දැකගත හැකි අතර, ක්‍රි.පූ. 1 වන සියවසට අයත් සෙල්ලිපිද මෙහි පවතී." 
    }, 
    shortStory: { EN: "The Symphony of Wings.", SI: "කුරුලු තක්සලාව." }, 
    bestTime: { EN: "April to July (Peak bird season)", SI: "අප්‍රේල් සිට ජූලි දක්වා" }, 
    tips: [
      { EN: "Bring a pair of binoculars for bird watching.", SI: "කුරුල්ලන් නැරඹීමට බයිනොකියුලර් එකක් රැගෙන යන්න." },
      { EN: "Quietness is key to observing the wildlife here.", SI: "සතුන් නැරඹීමේදී නිශ්ශබ්දතාව ඉතා වැදගත් වේ." }
    ], 
    location: "Ampara", 
    coordinates: { x: 88, y: 82 } 
  },
  { 
    id: "ritigala", 
    name: { EN: "Ritigala Monastery", SI: "රිටිගල ආරණ්‍යය" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "Ritigala is a mysterious ancient Buddhist monastery and mountain range. It is unique for its medicinal herbs and ruins of stone bridges and sunken courtyards that are distinct from other ancient sites in the country.", 
      SI: "රිටිගල යනු අභිරහස් පිරුණු පැරණි ආරණ්‍ය සේනාසනයකි. මෙහි ඇති ඖෂධීය පැලෑටි සහ සුවිශේෂී ශෛලමය පාලම්, පොකුණු ලංකාවේ වෙනත් තැන්වල දැකිය නොහැකි තරම් වෙනස්ය." 
    }, 
    shortStory: { EN: "The Mystic Forest of Sages.", SI: "ඍෂිවරුන් සිටි අද්භූත වනාන්තරය." }, 
    bestTime: { EN: "All year round", SI: "වසරේ ඕනෑම කාලයක" }, 
    tips: [
      { EN: "The forest path is very peaceful; walk silently.", SI: "වනාන්තරය තුළ ඇති මාවත ඉතා නිහඬය; සන්සුන්ව ගමන් කරන්න." },
      { EN: "Do not touch or remove any plants or artifacts.", SI: "කිසිදු පැලෑටියක් හෝ නටබුන් කොටසක් ස්පර්ශ කිරීමෙන් වළකින්න." }
    ], 
    location: "Anuradhapura", 
    coordinates: { x: 58, y: 30 } 
  },
  { 
    id: "riverston", 
    name: { EN: "Riverston (Matale)", SI: "රිවර්ස්ටන්" }, 
    category: "mountains", 
    image: "https://images.unsplash.com/photo-1632639521806-cead484cc369?auto=format&fit=crop&w=1200&q=80", 
    gallery: ["https://images.unsplash.com/photo-1632639521806-cead484cc369?auto=format&fit=crop&w=1200&q=80"], 
    history: { 
      EN: "Part of the Knuckles conservation area, Riverston offers some of the most scenic views of the misty hills. It is known for its extreme wind and the beautiful Sera Ella waterfall hidden deep within its valleys.", 
      SI: "නකල්ස් රක්ෂිතයට අයත් රිවර්ස්ටන්, මීදුමෙන් පිරි කඳු මුදුන්වල දර්ශනය සඳහා ප්‍රසිද්ධය. මෙහි පවතින අධික සුළඟ සහ මිටියාවත් මැද සැඟවුණු සේරා ඇල්ල මෙහි සුන්දරත්වය වැඩිකරයි." 
    }, 
    shortStory: { EN: "Walking Through the Clouds.", SI: "වලාකුළු මැදින් යන ගමනක්." }, 
    bestTime: { EN: "January to September", SI: "ජනවාරි සිට සැප්තැම්බර් දක්වා" }, 
    tips: [
      { EN: "Wear a windbreaker; the wind at the peak is very strong.", SI: "රිවර්ස්ටන් මුදුනේ අධික සුළඟක් පවතින බැවින් උණුසුම් කබායක් පළඳින්න." },
      { EN: "The drive up is winding but extremely scenic.", SI: "කඳු මුදුනට යන මාර්ගය වංගු සහිත වුවත් ඉතා අලංකාරය." }
    ], 
    location: "Matale", 
    coordinates: { x: 54, y: 42 } 
  }
];
