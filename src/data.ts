/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, ServiceItem, PricingPackage, PortfolioItem, ReviewItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    nameEn: 'Swahili Crispy Sambusa',
    nameSw: 'Sambusa za Nyama / Kuku za Kukaanga',
    descriptionEn: 'Golden, crispy pastries filled with spiced minced beef or chicken, served with fresh lime slices.',
    descriptionSw: 'Sambusa za dhahabu zenye ngozi nyororo na nyama tamu yenye viungo vya maridadi, huandaliwa na ndimu mbichi.',
    priceUsd: 8.50,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80',
    isChefSpecial: true
  },
  {
    id: 'm2',
    nameEn: 'Zanzibari Garlic Pepper Prawns',
    nameSw: 'Kamba wa Garlic na Pilipili Manga Zanzibari',
    descriptionEn: 'Pan-seared jumbo prawns tossed in garlic butter, black pepper, and fresh coriander.',
    descriptionSw: 'Kamba wakubwa waliokaangwa kwenye siagi ya vitunguu saumu, pilipili manga, na majani ya giligilani mapya.',
    priceUsd: 14.00,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm3',
    nameEn: 'Royal Swahili Beef Pilau',
    nameSw: "Pilau ya Ng'ombe ya Kifalme",
    descriptionEn: 'Fragrant basmati rice infused with authentic East African pilau spices, served with fresh Kachumbari.',
    descriptionSw: 'Mchele wa basmati uliopikwa kwa viungo asilia vya pilau ya Pwani ya Afrika Mashariki, huandaliwa na kachumbari safi.',
    priceUsd: 18.50,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80',
    isChefSpecial: true
  },
  {
    id: 'm4',
    nameEn: 'Coconut Fish Curry (Mchuzi wa Nazi)',
    nameSw: 'Mchuzi wa Samaki wa Nazi Pwani',
    descriptionEn: 'Fresh red snapper simmered in a rich, creamy coconut milk gravy with turmeric, bell peppers, and tamarind.',
    descriptionSw: 'Samaki aina ya Red Snapper aliyetokotwa kwenye mchuzi mzito wa nazi, manjano, hoho, na ukwaju wa kupendeza.',
    priceUsd: 21.00,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm5',
    nameEn: 'Signature Charcoal Grilled Tomahawk',
    nameSw: 'Nyama ya Tomahawk ya Kuchoma mkaa',
    descriptionEn: 'Premium grade steak seasoned with local spices, grilled to perfection, served with sweet potato wedges.',
    descriptionSw: 'Mnofu wa nyama ya daraja la kwanza uliokolezwa viungo, ukachomwa kwa ustadi kwenye mkaa, huandaliwa na viazi vitamu.',
    priceUsd: 38.00,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm6',
    nameEn: 'Cardamom Mandazi with Wild Berries',
    nameSw: 'Mandazi ya Hiliki na Beri za Mwitu',
    descriptionEn: 'Soft, puffy East African doughnuts infused with cardamom, dusted with icing sugar and warm honey.',
    descriptionSw: 'Mandazi laini na yenye kupumua yaliyokolezwa hiliki, yakanyunyizwa sukari laini na asali ya vuguvugu.',
    priceUsd: 7.50,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm7',
    nameEn: 'Passion Fruit Mango Panna Cotta',
    nameSw: 'Panna Cotta ya Pasheni na Embe',
    descriptionEn: 'Silky, creamy panna cotta layer topped with a vibrant tropical mango and passion fruit coulis.',
    descriptionSw: 'Panna cotta laini ya maziwa iliyopambwa kwa mchuzi wa matunda ya pasheni na embe bivu la kitropiki.',
    priceUsd: 9.00,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80',
    isChefSpecial: true
  },
  {
    id: 'm8',
    nameEn: 'Spiced Hibiscus Ginger Tea (Karkadeh)',
    nameSw: 'Juisi ya Rosella / Karkadeh ya Tangawizi',
    descriptionEn: 'Chilled, refreshing sweet hibiscus tea brewed with cloves, ginger, and fresh mint leaves.',
    descriptionSw: 'Kinywaji baridi chenye kuburudisha cha maua ya rosella kilichochemshwa kwa karafuu, tangawizi na mnanaa.',
    priceUsd: 5.00,
    category: 'beverage',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'm9',
    nameEn: 'Tamarind Mint Ginger Mocktail',
    nameSw: 'Mchanganyiko wa Ukwaju, Tangawizi na Mnanaa',
    descriptionEn: 'Tangy tamarind nectar blended with fresh ginger, sparkling water, and crushed mint.',
    descriptionSw: 'Ukwaju mtamu na mchachu uliorutubishwa kwa tangawizi, maji ya kupasuka, na majani ya mnanaa yaliyosagwa.',
    priceUsd: 6.50,
    category: 'beverage',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    titleEn: 'Exquisite Gourmet Catering',
    titleSw: 'Huduma Bora ya Upishi (Catering)',
    descriptionEn: 'Tailored dining experiences for corporate galas, elegant weddings, and grand family celebrations with custom menu development.',
    descriptionSw: 'Sanaa ya uandaaji chakula kwa sherehe za makampuni, harusi za kifahari, na sherehe za kifamilia zenye menyu maalum.',
    icon: 'Utensils',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 's2',
    titleEn: 'Private Chef Experience',
    titleSw: 'Mzoefu wa Mpishi Binafsi (Private Chef)',
    descriptionEn: 'Bring our elite culinary team directly into your home. Perfect for intimate anniversaries, micro-weddings, and VIP hosting.',
    descriptionSw: 'Wafanye wapishi wetu mahiri waje nyumbani kwako. Inafaa kwa maadhimisho ya ndoa, harusi ndogo, na ukaribishaji wa wageni maalum.',
    icon: 'ChefHat',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 's3',
    titleEn: 'Corporate Dining & Meetings',
    titleSw: 'Chakula cha Makampuni na Mikutano',
    descriptionEn: 'Power your ideas with nutritious and masterfully plated meals. We provide structured breakfast, lunch, and snack packages.',
    descriptionSw: 'Chochea mawazo ya mikutano yenu kwa chakula bora na chenye nguvu. Tunatoa huduma ya staftahi, chakula cha mchana na vitafunio vya kisasa.',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 's4',
    titleEn: 'Interactive Culinary Workshops',
    titleSw: 'Madarasa ya Mapishi ya Kijamii',
    descriptionEn: 'Join our Master Chefs for hands-on, engaging cooking masterclasses. Learn secrets of spice pairings and modern plating techniques.',
    descriptionSw: 'Ungana na wapishi wetu wakuu kwa madarasa ya vitendo ya mapishi. Jifunze siri za kuchanganya viungo na mbinu za kisasa za uandaaji.',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'p1',
    nameEn: 'Ladha Tasting Experience',
    nameSw: 'Onja Ladha ya Kifalme',
    priceEn: '$45',
    priceSw: 'TSh 115,000',
    periodEn: 'per guest',
    periodSw: 'kwa kila mgeni',
    descriptionEn: 'A balanced 3-course introductory menu featuring our iconic starters, curated mains, and classical dessert.',
    descriptionSw: 'Menyu ya kipekee ya milo 3 inayojumuisha viburudisho vya kwanza, milo mikuu na kitindamlo chetu asilia.',
    featuresEn: [
      'Welcome mocktail or local tea',
      'Choice of 1 Starter (e.g. Sambusa)',
      'Choice of 1 Main Course (Beef Pilau or Fish Coconut)',
      'Choice of 1 Signature Dessert',
      'Mineral water included'
    ],
    featuresSw: [
      'Kinywaji cha kukaribisha (Mocktail au Chai ya viungo)',
      'Chaguo la kiburudisho 1 cha kwanza (Kama Sambusa)',
      'Chaguo la mlo mkuu 1 (Pilau au Mchuzi wa nazi)',
      'Chaguo la kitindamlo 1 cha kipekee',
      'Maji ya madini bure'
    ]
  },
  {
    id: 'p2',
    nameEn: 'The Sherehe Feast (Gourmet)',
    nameSw: 'Karamu ya Sherehe (Gourmet)',
    priceEn: '$75',
    priceSw: 'TSh 190,000',
    periodEn: 'per guest',
    periodSw: 'kwa kila mgeni',
    descriptionEn: 'An immersive 5-course culinary journey presenting our ultra-premium select cuts and exotic seafood options.',
    descriptionSw: 'Safari ya milo mitano ya kupendeza inayohusisha nyama zetu za daraja la juu na vyakula vya baharini vya kipekee.',
    featuresEn: [
      'Premium artisanal welcome beverage',
      'Selection of 2 Gourmet Starters',
      'Intermezzo lemon sorbet palate cleanser',
      'Main Course (including Charcoal Grilled Tomahawk option)',
      'Decadent double-dessert tasting plate',
      'Unlimited specialized beverages & teas'
    ],
    featuresSw: [
      'Kinywaji maalum cha kisanaa cha kukaribisha',
      'Chaguo la viburudisho 2 vya kwanza vya kifahari',
      'Sorbet ya limao ya kusafisha kinywa kabla ya mlo mkuu',
      'Mlo mkuu (Ikiwemo chaguo la Tomahawk ya Kuchoma mkaa)',
      'Sahani ya vitindamlo viwili vya kifahari',
      'Vinywaji maalum na chai zisizo na kikomo'
    ],
    isPopular: true
  },
  {
    id: 'p3',
    nameEn: 'Chef’s Table Elite VIP',
    nameSw: 'Meza ya Mpishi Mkuu (VIP)',
    priceEn: '$150',
    priceSw: 'TSh 380,000',
    periodEn: 'per guest (Min 4)',
    periodSw: 'kwa kila mgeni (Kuanzia watu 4)',
    descriptionEn: 'A bespoke 7-course theater. Our Executive Chef prepares and presents each dish at your private VIP salon or home.',
    descriptionSw: 'Uzoefu maalum wa milo saba. Mpishi wetu mkuu atatayarisha na kuelezea kila sahani kwenye chumba chako maalum cha VIP au nyumbani.',
    featuresEn: [
      'Personal pre-event consultation with Chef',
      'Exclusive off-menu seasonal ingredients',
      '7 custom course tasting journey',
      'Bespoke non-alcoholic beverage pairing per course',
      'Signed culinary recipe guide from our team',
      'Complimentary private VIP room reservation'
    ],
    featuresSw: [
      'Mazungumzo binafsi na Mpishi mkuu kabla ya hafla',
      'Viungo vya kipekee vya msimu vilivyo nje ya menyu ya kawaida',
      'Safari ya milo 7 maalum ya kuonja',
      'Mchanganyiko wa vinywaji maalum vya kulingana na mlo wa kila hatua',
      'Kijitabu cha mapishi kilichosainiwa na wapishi wetu',
      'Chumba cha VIP cha faragha bure'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'g1',
    titleEn: 'Culinary Masterpiece Plating',
    titleSw: 'Sanaa ya Uandaaji Chakula Sahani',
    categoryEn: 'Artistry',
    categorySw: 'Sanaa ya Chakula',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    descriptionEn: 'Each dish is treated as a canvas with vibrant sauces and premium local herbs.',
    descriptionSw: 'Kila sahani inachukuliwa kama turubai yenye michuzi mizito yenye kuvutia na viungo asilia vya kijani kibichi.'
  },
  {
    id: 'g2',
    titleEn: 'The Royal Banquet Hall',
    titleSw: 'Ukumbi wa Karamu ya Kifalme',
    categoryEn: 'Ambiance',
    categorySw: 'Mazingira yetu',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
    descriptionEn: 'Our beautifully lit banquet setup styled for unforgettable weddings and parties.',
    descriptionSw: 'Mazingira yetu ya kuvutia yenye mwanga mwanana yaliyoundwa kwa ajili ya harusi na sherehe zisizofutika akilini.'
  },
  {
    id: 'g3',
    titleEn: 'Artisanal Tropical Crafting',
    titleSw: 'Uandaaji Vinywaji Vya Kitropiki',
    categoryEn: 'Mixology',
    categorySw: 'Uchanganyaji Vinywaji',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    descriptionEn: 'Natural tamarind, hibiscus, ginger and lime crafted with ice carvings.',
    descriptionSw: 'Ukwaju wa asili, rosella, tangawizi na ndimu vikichanganywa kwa ustadi mkubwa na barafu za sanaa.'
  },
  {
    id: 'g4',
    titleEn: 'Interior Elegance & Warmth',
    titleSw: 'Kifahari cha Ndani na Joto',
    categoryEn: 'Ambiance',
    categorySw: 'Mazingira yetu',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    descriptionEn: 'Rustic warmth combined with sleek modern lighting offers a tranquil dining atmosphere.',
    descriptionSw: 'Joto la kiasili lililochanganywa na taa za kisasa hutoa mazingira tulivu ya kufurahia mlo.'
  },
  {
    id: 'g5',
    titleEn: 'Crafting the Perfect Sear',
    titleSw: 'Kutengeneza Chomo Kamili la Nyama',
    categoryEn: 'Kitchen',
    categorySw: 'Jikoni kwetu',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80',
    descriptionEn: 'Our dedicated kitchen team perfecting grilled specialties over natural coals.',
    descriptionSw: 'Timu yetu ya jikoni yenye bidii ikikamilisha uchomaji wa nyama maalum juu ya mkaa wa asili.'
  },
  {
    id: 'g6',
    titleEn: 'The Outdoor Garden Terrace',
    titleSw: 'Baraza la Bustani la Nje',
    categoryEn: 'Ambiance',
    categorySw: 'Mazingira yetu',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80',
    descriptionEn: 'Breathe in the fresh evening breeze on our beautiful green garden terrace.',
    descriptionSw: 'Vuta hewa safi ya jioni kwenye baraza letu maridadi la bustani ya kijani kibichi.'
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Neema Mwangi',
    roleEn: 'Local Food Critic',
    roleSw: 'Mhakiki wa Vyakula wa Ndani',
    rating: 5,
    commentEn: 'The Royal Swahili Beef Pilau blew my mind. It tastes exactly like the traditional weddings in Zanzibar but plated like an fine-dining artwork! Recommended 100%.',
    commentSw: 'Pilau ya Kifalme ya Ng\'ombe ilinigusa moyo sana. Inonja kabisa kama pilau asilia ya harusi za Zanzibar lakini imepambwa kama sanaa ya hali ya juu! Napendekeza kwa 100%.',
    date: 'July 2, 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'r2',
    name: 'David Carter',
    roleEn: 'International Traveler',
    roleSw: 'Msafiri wa Kimataifa',
    rating: 5,
    commentEn: 'Exceptional service and extremely welcoming staff. The Coconut Fish Curry had depth of flavor that is hard to find. Absolutely stunning environment.',
    commentSw: 'Huduma ya kipekee na wafanyakazi wakarimu kupita kiasi. Mchuzi wa samaki wa nazi una ladha ya kina ambayo ni ngumu kuipata kwingineko. Mazingira yanapendeza mno.',
    date: 'June 28, 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'r3',
    name: 'Asha Bakari',
    roleEn: 'Event Planner',
    roleSw: 'Mratibu wa Sherehe na Hafla',
    rating: 4,
    commentEn: 'We booked the Chef’s Table VIP package for a private gathering. The presentation was theatrical, and the mocktails were stellar. A small wait on starters but totally worth it.',
    commentSw: 'Tulitunza meza ya Mpishi mkuu kifurushi cha VIP kwa mkusanyiko wetu wa faragha. Uwasilishaji ulikuwa kama sanaa ya jukwaani na vinywaji vilikuwa safi sana. Tulichelewa kidogo kupata sambusa lakini ilikuwa inastahili kusubiri.',
    date: 'June 15, 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'r4',
    name: 'Juma Ramadhani',
    roleEn: 'Family Diner',
    roleSw: 'Mlo wa Kifamilia',
    rating: 5,
    commentEn: 'The Mandazi dessert was fluffy and perfectly balanced with wild berries. It is wonderful to see high-end Swahili culinary craft being celebrated at this level.',
    commentSw: 'Kitindamlo cha Mandazi kilikuwa laini sana na kilisawazishwa vizuri na beri za mwitu. Ni jambo la kufurahisha kuona sanaa ya upishi wa Kiswahili wa hali ya juu ukiheshimiwa kwa kiwango hiki.',
    date: 'May 30, 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export const DICTIONARY = {
  en: {
    heroTitle: 'Exquisite Culinary Artistry Meets Swahili Hospitality',
    heroSubtitle: 'Savor masterfully crafted spice-fusions, premium grilled meats, and tropical elixirs in an elegant, unforgettable sanctuary.',
    bookTable: 'Book A Table',
    exploreMenu: 'Explore Our Menu',
    all: 'All Dishes',
    starters: 'Starters & Bites',
    mains: 'Main Courses',
    desserts: 'Sweet Desserts',
    beverages: 'Refreshing Elixirs',
    chefSpecial: 'Chef’s Masterpiece',
    aboutTitle: 'Our Culinary Journey',
    aboutSubtitle: 'Crafting luxury dining experiences by celebrating authentic East African spices blended with modern culinary techniques.',
    aboutPara1: 'Founded on the sandy shores and rich spice histories of East Africa, Ladha & Sherehe (Taste & Celebration) is a modern culinary sanctuary. We source organic, local farm produce and the finest coastal spices to tell a story of heritage, passion, and elite hospitality on every plate.',
    aboutPara2: 'Led by Executive Chef Mariam and her team of master roasters and pastry chefs, we merge time-honored traditional techniques—like slow coal roasting and clay-pot simmering—with pristine modern presentation. Here, every meal is not just food, it is a magnificent ceremony.',
    chefLabel: 'Mariam Said, Executive Chef & Founder',
    servicesTitle: 'Our Signature Services',
    servicesSubtitle: 'We extend our high-end gastronomy and exquisite hospitality beyond our restaurant doors to elevate your special moments.',
    pricingTitle: 'Tailored Culinary Packages',
    pricingSubtitle: 'Whether you are seeking a refined personal tasting or hosting a grand coastal feast, we offer masterfully curated dining options.',
    popular: 'Most Loved',
    portfolioTitle: 'The Visual Feast',
    portfolioSubtitle: 'Glimpses into our vibrant kitchen artistry, our magnificent banquet gatherings, and the soothing architectural warmth of our restaurant.',
    reviewsTitle: 'Generous Guest Testimonials',
    reviewsSubtitle: 'Read what culinary critics, local gourmands, and international globetrotters say about their experiences at Ladha & Sherehe.',
    writeReview: 'Share Your Experience',
    addReviewSub: 'Your voice helps us perfect our craft. We read and treasure every single piece of feedback.',
    yourName: 'Your Name',
    yourRole: 'Your Title / Profession (e.g., Food Blogger)',
    yourRating: 'Your Rating',
    comment: 'Your Review Message',
    submitting: 'Submitting Review...',
    submitBtn: 'Submit Review',
    successReview: 'Thank you! Your feedback has been posted successfully.',
    contactTitle: 'Find & Connect with Us',
    contactSubtitle: 'Whether you want to book a grand corporate gala, ask about recipes, or require private chef hosting, we are here for you.',
    ourHours: 'Our Opening Hours',
    weekdays: 'Monday - Thursday',
    weekends: 'Friday - Sunday',
    weekdaysTime: '11:00 AM - 11:00 PM',
    weekendsTime: '10:00 AM - Midnight',
    ourLocation: 'Our Location',
    locationText: '14 Haile Selassie Road, Masaki, Dar es Salaam, Tanzania',
    quickContact: 'Quick Contact',
    sendMessage: 'Send a Message',
    subject: 'Subject',
    message: 'Your Message',
    sendBtn: 'Send Message',
    successMsg: 'Thank you! Your message has been sent successfully. We will contact you shortly.',
    bookingTitle: 'Reserve Your Sacred Table',
    bookingSubtitle: 'Book in advance to secure the best seats, including our private botanical garden and premium VIP lounge.',
    fullName: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number (e.g. +255...)',
    date: 'Preferred Date',
    time: 'Preferred Time',
    guestsCount: 'Number of Guests',
    specialRequests: 'Special Dietary Requests / Celebrations',
    bookingBtn: 'Confirm Reservation',
    bookingSuccess: 'Reservation Confirmed! A confirmation SMS and email have been sent. We cannot wait to host you.',
    allRights: 'All Rights Reserved.',
    tagline: 'Crafting unforgettable memories over legendary plates.'
  },
  sw: {
    heroTitle: 'Sanaa ya Upishi wa Kifahari na Ukarimu wa Kiswahili',
    heroSubtitle: 'Onja mchanganyiko wa kipekee wa viungo, nyama maridadi za kuchoma, na juisi asilia za kitropiki kwenye mazingira ya kuvutia na yasiyosahaulika.',
    bookTable: 'Weka Meza Sasa',
    exploreMenu: 'Gundua Menyu Yetu',
    all: 'Milo Yote',
    starters: 'Viburudisho vya Kwanza',
    mains: 'Milo Mikuu',
    desserts: 'Vitindamlo Vitamu',
    beverages: 'Vinywaji na Juisi',
    chefSpecial: 'Kazi Maalum ya Mpishi',
    aboutTitle: 'Safari Yetu ya Upishi',
    aboutSubtitle: 'Kutengeneza mazingira ya kifahari ya chakula kwa kusherehekea viungo halisi vya Afrika Mashariki vilivyochanganywa na mbinu za kisasa za upishi.',
    aboutPara1: 'Kikiwa kimeanzishwa kwenye mwambao wa mchanga mweupe na historia tajiri ya viungo ya Afrika Mashariki, Ladha & Sherehe ni kituo cha kisasa cha upishi wa kifahari. Tunatumia mazao safi ya asili na viungo bora zaidi vya pwani kusimulia hadithi ya urithi wetu, mapenzi, na ukarimu wa hali ya juu katika kila sahani.',
    aboutPara2: 'Chini ya uongozi wa Mpishi Mkuu Mariam na timu yake ya wataalamu wa kuchoma nyama na kuoka mikate, tunaunganisha mbinu za kitamaduni za kale—kama vile kuchoma polepole kwa mkaa na kutokosa kwa vyungu vya udongo—na uwasilishaji maridadi wa kisasa. Hapa, kila mlo sio chakula tu, ni sherehe kubwa na ya kipekee.',
    chefLabel: 'Mariam Said, Mpishi Mkuu & Mwanzilishi',
    servicesTitle: 'Huduma Zetu Mahususi',
    servicesSubtitle: 'Tunasambaza sanaa yetu ya upishi wa hali ya juu na ukarimu mzuri nje ya milango ya mgahawa wetu ili kuboresha matukio yako maalum.',
    pricingTitle: 'Vifurushi Maalum vya Milo',
    pricingSubtitle: 'Iwe unatafuta kuonja chakula kifahari peke yako au kuandaa karamu kubwa ya pwani, tunatoa vifurushi vya milo vilivyochaguliwa kwa ustadi.',
    popular: 'Inayopendwa Zaidi',
    portfolioTitle: 'Karamu ya Picha na Sanaa',
    portfolioSubtitle: 'Tazama ustadi na sanaa ya jikoni yetu yenye shughuli nyingi, karamu zetu za kifahari, na joto la usanifu wa kuvutia wa mgahawa wetu.',
    reviewsTitle: 'Maoni ya Wageni wetu Wakarimu',
    reviewsSubtitle: 'Soma kile ambacho wahakiki wa vyakula, wapenda milo wa ndani na wasafiri wa kimataifa wanasema kuhusu uzoefu wao hapa Ladha & Sherehe.',
    writeReview: 'Shirikisha Maoni Yako',
    addReviewSub: 'Sauti yako inatusaidia kukamilisha sanaa yetu ya upishi. Tunathamini sana kila maoni unayotupatia.',
    yourName: 'Jina Lako',
    yourRole: 'Kazi / Cheo chako (Kama vile Blogger wa Chakula)',
    yourRating: 'Ukadiriaji Wako (Rating)',
    comment: 'Ujumbe wako wa Maoni',
    submitting: 'Tunaweka Maoni yako...',
    submitBtn: 'Tuma Maoni',
    successReview: 'Asante sana! Maoni yako yamewekwa kwenye tovuti yetu kwa mafanikio.',
    contactTitle: 'Tafuta na Ungana Nasi',
    contactSubtitle: 'Iwe unataka kuweka nafasi ya chakula cha jioni cha kampuni, kuuliza kuhusu mapishi, au unahitaji mpishi binafsi nyumbani kwako, tupo kwa ajili yako.',
    ourHours: 'Muda wa Kazi',
    weekdays: 'Jumatatu - Alhamisi',
    weekends: 'Ijumaa - Jumapili',
    weekdaysTime: 'Saa 5:00 Asubuhi - Saa 5:00 Usiku',
    weekendsTime: 'Saa 4:00 Asubuhi - Saa 6:00 Usiku',
    ourLocation: 'Sehemu Tulipo',
    locationText: '14 Barabara ya Haile Selassie, Masaki, Dar es Salaam, Tanzania',
    quickContact: 'Mawasiliano ya Haraka',
    sendMessage: 'Tuma Ujumbe wa Haraka',
    subject: 'Mada / Kichwa cha Habari',
    message: 'Ujumbe Wako',
    sendBtn: 'Tuma Ujumbe Sasa',
    successMsg: 'Asante! Ujumbe wako umetumwa kwa mafanikio. Tutakujibu hivi karibuni.',
    bookingTitle: 'Weka Meza Yako ya Kifahari',
    bookingSubtitle: 'Weka nafasi mapema ili kupata viti bora zaidi, ikijumuisha bustani yetu ya asili na chumba chetu maalum cha VIP.',
    fullName: 'Jina Kamili',
    email: 'Barua Pepe (Email)',
    phone: 'Namba ya Simu (Mfn. +255...)',
    date: 'Tarehe ya Kufika',
    time: 'Muda wa Kufika',
    guestsCount: 'Idadi ya Wageni',
    specialRequests: 'Mahitaji Maalum ya Chakula / Sherehe',
    bookingBtn: 'Thibitisha Nafasi Yako',
    bookingSuccess: 'Umefanikiwa Kuweka Nafasi! Tumeutumia ujumbe wa SMS na barua pepe ya uthibitisho. Tunasubiri kwa hamu kukukaribisha.',
    allRights: 'Haki zote zimehifadhiwa.',
    tagline: 'Kutengeneza kumbukumbu zisizofutika juu ya sahani za kifalme.'
  }
};
