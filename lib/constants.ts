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
      "90-minute personal consultation",
      "Detailed birth chart analysis",
      "Life path guidance",
      "PDF report included"
    ]
  },
  {
    price: "$149",
    title: "Relationship Synastry",
    description: "Understand your relationship dynamics through celestial patterns.",
    features: [
      "120-minute consultation",
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
      "60-minute session",
      "Chakra assessment",
      "Crystal selection guide",
      "Take-home crystal kit"
    ]
  },
  {
    price: "$129",
    title: "Tarot Journey",
    description: "Navigate life's crossroads with intuitive tarot guidance.",
    features: [
      "90-minute reading",
      "Past-present-future spread",
      "Recorded session",
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
    name: "Sarah Johnson",
    location: "New York, USA",
    testimonial: "The natal chart reading was incredibly accurate and provided deep insights into my life path. It helped me make important career decisions with confidence.",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "Vancouver, Canada",
    testimonial: "The crystal healing session was transformative. I felt a profound shift in my energy, and the take-home crystal kit has become an essential part of my daily routine.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    location: "London, UK",
    testimonial: "The relationship synastry reading helped me understand my partner better. The insights we gained have significantly improved our communication.",
    rating: 4
  },
  {
    name: "David Rodriguez",
    location: "Miami, USA",
    testimonial: "The tarot journey was eye-opening. The reader's intuitive guidance helped me navigate a difficult transition period in my life.",
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
};

export const crystals: Crystal[] = [
  {
    name: "Amethyst",
    color: "Purple",
    chakra: "Crown and Third Eye",
    properties: ["Spiritual Growth", "Inner Peace", "Intuition", "Protection"],
    description: "Known as a natural tranquilizer, Amethyst is a powerful and protective stone that helps to purify the mind and clear negative thoughts. It promotes spiritual wisdom and understanding.",
    uses: ["Meditation", "Stress Relief", "Sleep Enhancement", "Spiritual Connection"],
    image: "https://images.pexels.com/photos/5368824/pexels-photo-5368824.jpeg",
    element: "Air",
    zodiacAffinity: ["Virgo", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
  },
  {
    name: "Rose Quartz",
    color: "Pink",
    chakra: "Heart",
    properties: ["Love", "Compassion", "Peace", "Emotional Healing"],
    description: "The stone of universal love, Rose Quartz promotes inner healing and self-love. It helps to restore trust and harmony in relationships, encouraging unconditional love.",
    uses: ["Emotional Healing", "Relationship Harmony", "Self-Love", "Heart Opening"],
    image: "https://images.pexels.com/photos/6994985/pexels-photo-6994985.jpeg",
    element: "Water",
    zodiacAffinity: ["Taurus", "Libra", "Cancer"]
  },
  {
    name: "Citrine",
    color: "Yellow to Golden Brown",
    chakra: "Solar Plexus",
    properties: ["Abundance", "Manifestation", "Personal Power", "Joy"],
    description: "Known as the merchant's stone, Citrine is a crystal of abundance, manifestation, and personal will. It carries the power of the sun and is warm and energizing.",
    uses: ["Wealth Attraction", "Confidence Building", "Energy Cleansing", "Success"],
    image: "https://images.pexels.com/photos/6994993/pexels-photo-6994993.jpeg",
    element: "Fire",
    zodiacAffinity: ["Aries", "Leo", "Gemini", "Libra"]
  },
  {
    name: "Clear Quartz",
    color: "Clear/White",
    chakra: "All Chakras",
    properties: ["Clarity", "Amplification", "Healing", "Programming"],
    description: "Known as the master healer, Clear Quartz is the most versatile healing stone among all crystals. It amplifies energy and thought, as well as the effect of other crystals.",
    uses: ["Energy Amplification", "Healing", "Meditation", "Programming"],
    image: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg",
    element: "All Elements",
    zodiacAffinity: ["All Zodiac Signs"]
  },
  {
    name: "Black Tourmaline",
    color: "Black",
    chakra: "Root",
    properties: ["Protection", "Grounding", "EMF Shield", "Negativity Absorption"],
    description: "One of the most powerful protective stones, Black Tourmaline creates a psychic shield, blocking negative energies and promoting grounding with the Earth.",
    uses: ["Protection", "Grounding", "EMF Protection", "Energy Cleansing"],
    image: "https://images.pexels.com/photos/6994986/pexels-photo-6994986.jpeg",
    element: "Earth",
    zodiacAffinity: ["Capricorn", "Scorpio"]
  },
  {
    name: "Lapis Lazuli",
    color: "Deep Blue with Gold Flecks",
    chakra: "Third Eye and Throat",
    properties: ["Wisdom", "Truth", "Self-Expression", "Royal Power"],
    description: "A stone of truth and enlightenment, Lapis Lazuli helps to open the third eye and enhance intellectual ability, memory, and spiritual connection.",
    uses: ["Communication", "Wisdom", "Spiritual Connection", "Truth Seeking"],
    image: "https://images.pexels.com/photos/6994988/pexels-photo-6994988.jpeg",
    element: "Water",
    zodiacAffinity: ["Sagittarius", "Libra"]
  },
  {
    name: "Selenite",
    color: "White/Clear",
    chakra: "Crown",
    properties: ["Light", "Purification", "Peace", "Mental Clarity"],
    description: "Named after the Greek goddess Selene, Selenite is a crystal of light and clarity. It has a fine vibration and facilitates spiritual and mental clarity.",
    uses: ["Energy Cleansing", "Meditation", "Spiritual Work", "Mental Clarity"],
    image: "https://images.pexels.com/photos/6994990/pexels-photo-6994990.jpeg",
    element: "Air",
    zodiacAffinity: ["Taurus", "Cancer", "Capricorn"]
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
    image: "https://images.pexels.com/photos/6791741/pexels-photo-6791741.jpeg"
  },
  {
    name: "Taurus",
    dates: "April 20 - May 20",
    element: "Earth",
    planet: "Venus",
    traits: ["Patient", "Reliable", "Devoted", "Stubborn", "Sensual"],
    description: "Taurus is known for their strong connection to the physical world and their love of comfort and luxury. They are reliable, patient, and devoted to their goals.",
    image: "https://images.pexels.com/photos/6791742/pexels-photo-6791742.jpeg"
  },
  {
    name: "Gemini",
    dates: "May 21 - June 20",
    element: "Air",
    planet: "Mercury",
    traits: ["Adaptable", "Versatile", "Curious", "Communicative", "Witty"],
    description: "Gemini is characterized by duality and adaptability. They are excellent communicators and have a natural curiosity about the world around them.",
    image: "https://images.pexels.com/photos/6791743/pexels-photo-6791743.jpeg"
  },
  {
    name: "Cancer",
    dates: "June 21 - July 22",
    element: "Water",
    planet: "Moon",
    traits: ["Nurturing", "Protective", "Intuitive", "Emotional", "Home-loving"],
    description: "Cancer is deeply connected to home and family. They are nurturing, protective, and highly intuitive, with a strong emotional sensitivity.",
    image: "https://images.pexels.com/photos/6791744/pexels-photo-6791744.jpeg"
  },
  {
    name: "Leo",
    dates: "July 23 - August 22",
    element: "Fire",
    planet: "Sun",
    traits: ["Confident", "Creative", "Generous", "Dramatic", "Natural Leader"],
    description: "Leo is the natural leader of the zodiac, known for their confidence, creativity, and generous spirit. They have a flair for the dramatic and love being in the spotlight.",
    image: "https://images.pexels.com/photos/6791745/pexels-photo-6791745.jpeg"
  },
  {
    name: "Virgo",
    dates: "August 23 - September 22",
    element: "Earth",
    planet: "Mercury",
    traits: ["Analytical", "Practical", "Diligent", "Detail-oriented", "Helpful"],
    description: "Virgo is known for their analytical mind and attention to detail. They are practical, diligent, and always willing to help others.",
    image: "https://images.pexels.com/photos/6791746/pexels-photo-6791746.jpeg"
  },
  {
    name: "Libra",
    dates: "September 23 - October 22",
    element: "Air",
    planet: "Venus",
    traits: ["Diplomatic", "Fair-minded", "Social", "Idealistic", "Graceful"],
    description: "Libra is symbolized by the scales, representing their quest for balance and harmony. They are diplomatic, fair-minded, and naturally graceful.",
    image: "https://images.pexels.com/photos/6791747/pexels-photo-6791747.jpeg"
  },
  {
    name: "Scorpio",
    dates: "October 23 - November 21",
    element: "Water",
    planet: "Pluto",
    traits: ["Passionate", "Determined", "Magnetic", "Mysterious", "Loyal"],
    description: "Scorpio is known for their intensity and passion. They are determined, magnetic, and fiercely loyal to those they trust.",
    image: "https://images.pexels.com/photos/6791748/pexels-photo-6791748.jpeg"
  },
  {
    name: "Sagittarius",
    dates: "November 22 - December 21",
    element: "Fire",
    planet: "Jupiter",
    traits: ["Optimistic", "Adventurous", "Philosophical", "Direct", "Enthusiastic"],
    description: "Sagittarius is the explorer of the zodiac, known for their love of adventure and philosophical nature. They are optimistic and enthusiastic about life.",
    image: "https://images.pexels.com/photos/6791749/pexels-photo-6791749.jpeg"
  },
  {
    name: "Capricorn",
    dates: "December 22 - January 19",
    element: "Earth",
    planet: "Saturn",
    traits: ["Ambitious", "Disciplined", "Patient", "Practical", "Responsible"],
    description: "Capricorn is known for their ambition and discipline. They are patient, practical, and highly responsible in pursuing their goals.",
    image: "https://images.pexels.com/photos/6791750/pexels-photo-6791750.jpeg"
  },
  {
    name: "Aquarius",
    dates: "January 20 - February 18",
    element: "Air",
    planet: "Uranus",
    traits: ["Progressive", "Original", "Independent", "Humanitarian", "Intellectual"],
    description: "Aquarius is the visionary of the zodiac, known for their progressive thinking and humanitarian nature. They are independent and highly intellectual.",
    image: "https://images.pexels.com/photos/6791751/pexels-photo-6791751.jpeg"
  },
  {
    name: "Pisces",
    dates: "February 19 - March 20",
    element: "Water",
    planet: "Neptune",
    traits: ["Intuitive", "Artistic", "Compassionate", "Gentle", "Musical"],
    description: "Pisces is known for their intuitive and artistic nature. They are compassionate, gentle, and deeply connected to the spiritual realm.",
    image: "https://images.pexels.com/photos/6791752/pexels-photo-6791752.jpeg"
  }
];