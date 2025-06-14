import { Compass, Moon, Star, Sun, Users, Italic as Crystal, Heart } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Sun,
  },
  {
    title: "About Us",
    href: "/about",
    icon: Users,
  },
  {
    title: "Services",
    href: "/services",
    icon: Star,
  },
  {
    title: "Horoscope",
    href: "/horoscope",
    icon: Moon,
  },
  {
    title: "Crystals",
    href: "/crystals",
    icon: Crystal,
  },
  {
    title: "Healing",
    href: "/healing",
    icon: Heart,
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: Compass,
  },
];

export type Service = {
  price: string;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    price: "$99",
    title: "Natal Chart Reading",
    description: "Discover your cosmic blueprint with a detailed birth chart analysis.",
    features: [
      "15-20 minute personal consultation",
      "Detailed birth chart analysis",
      "Life path guidance",
    ]
  },
  {
    price: "$149",
    title: "Relationship Synastry",
    description: "Understand your relationship dynamics through celestial patterns.",
    features: [
      "30 minute consultation",
      "Compatibility analysis",
      "Future trends forecast",
      "Relationship guidance"
    ]
  },
  {
    price: "$79",
    title: "Crystal Healing",
    description: "Balance your energy with personalized crystal therapy sessions.",
    features: [
      "30 minute session",
      "Chakra assessment",
      "Crystal selection guide",
      "Get personalised crystal bracelet"
    ]
  },
  {
    price: "$129",
    title: "Tarot Journey",
    description: "Navigate life's crossroads with intuitive tarot guidance.",
    features: [
      "30 minute reading",
      "Past-present-future spread",
      "Healing session",
      "Follow-up email support"
    ]
  }
];

export type Testimonial = {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Chirag Yadav",
    location: "New Delhi, India",
    testimonial: "The Astronomy reading was incredibly accurate and provided deep insights into my life path. It helped me make important career decisions with confidence.",
    rating: 5
  },
  {
    name: "Sandeep Kumar",
    location: "Gurugram, Haryana",
    testimonial: "The crystal healing session was transformative. I felt a profound shift in my energy, and the crystal bracelet has become an essential part of my daily routine.",
    rating: 5
  },
  {
    name: "Deeksha Mathew",
    location: "Bangaluru, Karnataka",
    testimonial: "The relationship reading helped me understand my partner better. The insights we gained have significantly improved our communication.",
    rating: 4
  },
  {
    name: "Karan",
    location: "Mumbai, Maharashtra",
    testimonial: "The tarot reading was eye-opening. The reader's intuitive guidance helped me navigate a difficult transition period in my life.",
    rating: 5
  }
];

export type Crystal = {
  name: string;
  color: string;
  chakra: string;
  properties: string[];
  description: string;
  uses: string[];
  image: string;
  element: string;
  zodiacAffinity: string[];
  price: number;
};

export const crystals: Crystal[] = [
  {
    name: "Amethyst",
    color: "Purple",
    chakra: "Crown and Third Eye",
    properties: ["Spiritual Growth", "Inner Peace", "Intuition", "Protection"],
    description: "Known as a natural tranquilizer, Amethyst is a powerful and protective stone that helps to purify the mind and clear negative thoughts. It promotes spiritual wisdom and understanding.",
    uses: ["Meditation", "Stress Relief", "Sleep Enhancement", "Spiritual Connection"],
    image: "/assets/images/1.png",
    element: "Air",
    zodiacAffinity: ["Virgo", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
    price: 799
  },
  {
    name: "Rose Quartz",
    color: "Pink",
    chakra: "Heart",
    properties: ["Love", "Compassion", "Peace", "Emotional Healing"],
    description: "The stone of universal love, Rose Quartz promotes inner healing and self-love. It helps to restore trust and harmony in relationships, encouraging unconditional love.",
    uses: ["Emotional Healing", "Relationship Harmony", "Self-Love", "Heart Opening"],
    image: "/assets/images/2.png",
    element: "Water",
    zodiacAffinity: ["Taurus", "Libra", "Cancer"],
    price: 699
  },
  {
    name: "Citrine",
    color: "Yellow to Golden Brown",
    chakra: "Solar Plexus",
    properties: ["Abundance", "Manifestation", "Personal Power", "Joy"],
    description: "Known as the merchant's stone, Citrine is a crystal of abundance, manifestation, and personal will. It carries the power of the sun and is warm and energizing.",
    uses: ["Wealth Attraction", "Confidence Building", "Energy Cleansing", "Success"],
    image: "/assets/images/3.png",
    element: "Fire",
    zodiacAffinity: ["Aries", "Leo", "Gemini", "Libra"],
    price: 799
  },
  {
    name: "Clear Quartz",
    color: "Clear/White",
    chakra: "All Chakras",
    properties: ["Clarity", "Amplification", "Healing", "Programming"],
    description: "Known as the master healer, Clear Quartz is the most versatile healing stone among all crystals. It amplifies energy and thought, as well as the effect of other crystals.",
    uses: ["Energy Amplification", "Healing", "Meditation", "Programming"],
    image: "/assets/images/4.png",
    element: "All Elements",
    zodiacAffinity: ["All Zodiac Signs"],
    price: 649
  },
  {
    name: "Black Tourmaline",
    color: "Black",
    chakra: "Root",
    properties: ["Protection", "Grounding", "EMF Shield", "Negativity Absorption"],
    description: "One of the most powerful protective stones, Black Tourmaline creates a psychic shield, blocking negative energies and promoting grounding with the Earth.",
    uses: ["Protection", "Grounding", "EMF Protection", "Energy Cleansing"],
    image: "/assets/images/5.png",
    element: "Earth",
    zodiacAffinity: ["Capricorn", "Scorpio"],
    price: 849
  },
  {
  name: "Green Aventurine",
  color: "Green",
  chakra: "Heart",
  properties: ["Luck", "Prosperity", "Healing", "Emotional Calm"],
  description: "Known as the 'Stone of Opportunity', Green Aventurine is thought to be the luckiest of all crystals, especially in manifesting prosperity and wealth. It enhances creativity, motivation, and leadership qualities.",
  uses: ["Manifestation", "Emotional Healing", "Prosperity Rituals", "Heart Chakra Balancing"],
  image: "/assets/images/6.png",
  element: "Earth",
  zodiacAffinity: ["Aries", "Leo", "Virgo"],
  price: 829
  },

  {
  name: "Moonstone",
  color: "Milky White/Iridescent",
  chakra: "Third Eye",
  properties: ["Intuition", "New Beginnings", "Emotional Balance", "Feminine Energy"],
  description: "Moonstone is a crystal of inner growth and strength. It soothes emotional instability and stress, and stabilizes emotions, providing calmness. It enhances intuition, promotes inspiration, and is known to bring success and good fortune.",
  uses: ["Emotional Healing", "Intuition Enhancement", "Meditation", "Feminine Energy Work"],
  image: "/assets/images/x.png",
  element: "Water",
  zodiacAffinity: ["Cancer", "Libra", "Scorpio"],
  price: 1049
  },

  {
  name: "Firoza",
  color: "Blue/Green",
  chakra: "Throat",
  properties: ["Protection", "Communication", "Healing", "Wisdom"],
  description: "Firoza, also known as Turquoise, is a protective and healing stone that has been revered for centuries. It fosters honest and clear communication and is believed to balance and align all chakras, stabilizing mood swings and instilling inner calm.",
  uses: ["Protection", "Communication Enhancement", "Spiritual Connection", "Emotional Healing"],
  image: "/assets/images/8.png",
  element: "Earth",
  zodiacAffinity: ["Sagittarius", "Pisces", "Scorpio"],
  price: 849
},

  {
  name: "Tiger Eye",
  color: "Golden Brown",
  chakra: "Solar Plexus",
  properties: ["Courage", "Confidence", "Grounding", "Protection"],
  description: "Tiger Eye is a powerful stone of courage and motivation. Known for its grounding energy, it helps you stay centered and calm, especially in challenging situations. It’s also a stone of protection that enhances willpower and integrity.",
  uses: ["Confidence Boosting", "Grounding", "Protection Rituals", "Decision Making"],
  image: "/assets/images/9.png",
  element: "Fire",
  zodiacAffinity: ["Leo", "Capricorn", "Gemini"],
  price: 849
},
  {
  name: "7 Chakra",
  color: "Multi-Colored",
  chakra: "All Chakras",
  properties: ["Balance", "Healing", "Alignment", "Energy Flow"],
  description: "The 7 Chakra stone set includes a blend of crystals, each associated with one of the seven major chakras. This set is used to align, balance, and cleanse the energy centers in the body, promoting overall spiritual and physical well-being.",
  uses: ["Chakra Balancing", "Meditation", "Energy Healing", "Spiritual Alignment"],
  image: "/assets/images/10.png",
  element: "All Elements",
  zodiacAffinity: ["All Zodiac Signs"],
  price: 609
  },

  {
  name: "Pyrite",
  color: "Gold/Brassy",
  chakra: "Solar Plexus",
  properties: ["Abundance", "Protection", "Confidence", "Manifestation"],
  description: "Often called 'Fool’s Gold', Pyrite is a symbol of prosperity and good luck. It shields against negative energy, boosts confidence and willpower, and supports manifestation and action-taking energy.",
  uses: ["Wealth Attraction", "Energy Shielding", "Motivation Boost", "Manifestation Work"],
  image: "/assets/images/11.png",
  element: "Fire",
  zodiacAffinity: ["Leo", "Aries"],
  price: 1049
},

{
  name: "Crystal Tree - Pyrite (7 Chakra Gemstone Tree)",
  color: "Gold/Brassy",
  chakra: "Solar Plexus",
  properties: ["Abundance", "Protection", "Confidence", "Manifestation"],
  description: "This handcrafted 7 Chakra Crystal Tree features Pyrite, often known as 'Fool’s Gold'. A powerful symbol of prosperity and good fortune, Pyrite is ideal for those seeking confidence and protection. It helps shield against negative energy, supports manifestation practices, and fuels your motivation to act.",
  uses: ["Wealth Attraction", "Energy Shielding", "Motivation Boost", "Manifestation Work"],
  image: "/assets/images/12.png",
  element: "All elements",
  zodiacAffinity: ["All Zodiac Signs"],
  price: 1049
},

{
  name: "Rudraksha Orgonite Pyramid with Gomati Chakra and Sacred Om",
  color: "Brown/Beige/Gold",
  chakra: "All Chakras (Primarily Root and Crown)",
  properties: ["Spiritual Protection", "Energy Cleansing", "Calmness", "Manifestation", "Vastu Correction"],
  description: "Handmade in India, this Orgonite Pyramid combines the powerful spiritual energies of Rudraksha beads, Gomati Chakra, and the Sacred Om symbol. Designed to purify and harmonize energy, it acts as a strong shield against negativity, boosts inner peace, and aids in spiritual awakening. Ideal for meditation, home Vastu, and energy healing.",
  uses: ["Spiritual Growth", "EMF Protection", "Meditation Aid", "Vastu Correction", "Positive Energy Amplification"],
  image: "/assets/images/13.png",
  element: "Earth",
  zodiacAffinity: ["All Zodiac Signs"],
  price: 899
},
{
  name: "Orgone Pyramid Seven Chakra Onyx Crystals (70–75 mm)",
  color: "Multicolor (Chakra Stones) with Black Onyx Base",
  chakra: "All Seven Chakras",
  properties: ["Energy Balancing", "Grounding", "EMF Protection", "Spiritual Healing"],
  description: "This high-quality, handmade Orgone Pyramid is crafted in India using 100% natural crystal stones. Featuring layers of chakra stones and a solid Black Onyx base, it balances all seven chakras while grounding and protecting your energy field. Orgonite is a powerful blend of resin, metal, and quartz, designed to absorb negative (dead) energy and transmute it into positive, life-enhancing energy. Enhanced with crystals, this pyramid becomes a tool for deep healing, energy cleansing, and EMF shielding.",
  uses: ["Chakra Alignment", "Meditation", "Energy Cleansing", "EMF Neutralization", "Gift & Home Decoration"],
  image: "/assets/images/14.png",
  element: "Earth",
  zodiacAffinity: ["Capricorn", "Scorpio", "All Seeking Balance"],
  price: 999
}





];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Elena Starfield",
    role: "Founder & Lead Astrologer",
    bio: "With over 20 years of experience in astrology, Elena combines traditional wisdom with modern psychological insights.",
    image: "https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg"
  },
  {
    name: "Marcus Chen",
    role: "Senior Astrologer",
    bio: "Specializing in Chinese astrology and its integration with Western traditions, Marcus brings a unique perspective to readings.",
    image: "https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg"
  },
  {
    name: "Luna Thompson",
    role: "Crystal Healer",
    bio: "A certified crystal healer with expertise in chakra balancing and energy work.",
    image: "https://images.pexels.com/photos/5717544/pexels-photo-5717544.jpeg"
  },
  {
    name: "David Rivera",
    role: "Tarot Master",
    bio: "With a deep connection to the Tarot spanning 15 years, David provides insightful and transformative readings.",
    image: "https://images.pexels.com/photos/8090149/pexels-photo-8090149.jpeg"
  }
];

export type ZodiacSign = {
  name: string;
  dates: string;
  element: string;
  planet: string;
  traits: string[];
  description: string;
  image: string;
};

export const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    dates: "March 21 - April 19",
    element: "Fire",
    planet: "Mars",
    traits: ["Confident", "Courageous", "Enthusiastic", "Impulsive", "Natural Leader"],
    description: "Aries is the first sign of the zodiac, representing new beginnings, leadership, and initiative. These natural-born leaders are known for their courage and determination.",
    image: "/assets/images/Aries.jpg"  
  },
  {
    name: "Taurus",
    dates: "April 20 - May 20",
    element: "Earth",
    planet: "Venus",
    traits: ["Patient", "Reliable", "Devoted", "Stubborn", "Sensual"],
    description: "Taurus is known for their strong connection to the physical world and their love of comfort and luxury. They are reliable, patient, and devoted to their goals.",
    image: "/assets/images/Tauras.jpg"
  },
  {
    name: "Gemini",
    dates: "May 21 - June 20",
    element: "Air",
    planet: "Mercury",
    traits: ["Adaptable", "Versatile", "Curious", "Communicative", "Witty"],
    description: "Gemini is characterized by duality and adaptability. They are excellent communicators and have a natural curiosity about the world around them.",
    image: "/assets/images/Gemini.jpg"
  },
  {
    name: "Cancer",
    dates: "June 21 - July 22",
    element: "Water",
    planet: "Moon",
    traits: ["Nurturing", "Protective", "Intuitive", "Emotional", "Home-loving"],
    description: "Cancer is deeply connected to home and family. They are nurturing, protective, and highly intuitive, with a strong emotional sensitivity.",
    image: "/assets/images/Cancer.jpg"
  },
  {
    name: "Leo",
    dates: "July 23 - August 22",
    element: "Fire",
    planet: "Sun",
    traits: ["Confident", "Creative", "Generous", "Dramatic", "Natural Leader"],
    description: "Leo is the natural leader of the zodiac, known for their confidence, creativity, and generous spirit. They have a flair for the dramatic and love being in the spotlight.",
    image: "/assets/images/Leo.jpg"
  },
  {
    name: "Virgo",
    dates: "August 23 - September 22",
    element: "Earth",
    planet: "Mercury",
    traits: ["Analytical", "Practical", "Diligent", "Detail-oriented", "Helpful"],
    description: "Virgo is known for their analytical mind and attention to detail. They are practical, diligent, and always willing to help others.",
    image: "/assets/images/Virgo.png"
  },
  {
    name: "Libra",
    dates: "September 23 - October 22",
    element: "Air",
    planet: "Venus",
    traits: ["Diplomatic", "Fair-minded", "Social", "Idealistic", "Graceful"],
    description: "Libra is symbolized by the scales, representing their quest for balance and harmony. They are diplomatic, fair-minded, and naturally graceful.",
    image: "/assets/images/Libra.jpg"
  },
  {
    name: "Scorpio",
    dates: "October 23 - November 21",
    element: "Water",
    planet: "Pluto",
    traits: ["Passionate", "Determined", "Magnetic", "Mysterious", "Loyal"],
    description: "Scorpio is known for their intensity and passion. They are determined, magnetic, and fiercely loyal to those they trust.",
    image: "/assets/images/Scorpio.jpg"
  },
  {
    name: "Sagittarius",
    dates: "November 22 - December 21",
    element: "Fire",
    planet: "Jupiter",
    traits: ["Optimistic", "Adventurous", "Philosophical", "Direct", "Enthusiastic"],
    description: "Sagittarius is the explorer of the zodiac, known for their love of adventure and philosophical nature. They are optimistic and enthusiastic about life.",
    image: "/assets/images/Sagi.png"
  },
  {
    name: "Capricorn",
    dates: "December 22 - January 19",
    element: "Earth",
    planet: "Saturn",
    traits: ["Ambitious", "Disciplined", "Patient", "Practical", "Responsible"],
    description: "Capricorn is known for their ambition and discipline. They are patient, practical, and highly responsible in pursuing their goals.",
    image: "/assets/images/Capricon.jpg"
  },
  {
    name: "Aquarius",
    dates: "January 20 - February 18",
    element: "Air",
    planet: "Uranus",
    traits: ["Progressive", "Original", "Independent", "Humanitarian", "Intellectual"],
    description: "Aquarius is the visionary of the zodiac, known for their progressive thinking and humanitarian nature. They are independent and highly intellectual.",
    image: "/assets/images/Aquarius.jpg"
  },
  {
    name: "Pisces",
    dates: "February 19 - March 20",
    element: "Water",
    planet: "Neptune",
    traits: ["Intuitive", "Artistic", "Compassionate", "Gentle", "Musical"],
    description: "Pisces is known for their intuitive and artistic nature. They are compassionate, gentle, and deeply connected to the spiritual realm.",
    image: "/assets/images/Pic.jpg"
  }
];