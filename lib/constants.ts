import { Compass, Moon, Star, Sun, Users } from "lucide-react";

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
    title: "Contact Us",
    href: "/contact",
    icon: Compass,
  },
];

export type ZodiacSign = {
  name: string;
  dates: string;
  element: "Fire" | "Earth" | "Air" | "Water";
  planet: string;
  traits: string[];
  description: string;
  symbol: string;
  compatibility: string[];
  image: string;
};

export const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    dates: "March 21 - April 19",
    element: "Fire",
    planet: "Mars",
    traits: ["Courageous", "Determined", "Confident", "Enthusiastic", "Impulsive"],
    description: "Aries is the first sign of the zodiac, and that's exactly how Aries likes it. Bold and ambitious, Aries dives headfirst into challenging situations.",
    symbol: "♈",
    compatibility: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
    image: "https://yshaastro.in/wp-content/uploads/2024/04/Main-home-aries-png.png"
  },
  {
    name: "Taurus",
    dates: "April 20 - May 20",
    element: "Earth",
    planet: "Venus",
    traits: ["Reliable", "Patient", "Practical", "Devoted", "Stubborn"],
    description: "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments.",
    symbol: "♉",
    compatibility: ["Virgo", "Capricorn", "Cancer", "Pisces"],
    image: "https://images.pexels.com/photos/6498990/pexels-photo-6498990.jpeg"
  },
  {
    name: "Gemini",
    dates: "May 21 - June 20",
    element: "Air",
    planet: "Mercury",
    traits: ["Gentle", "Affectionate", "Curious", "Adaptable", "Inconsistent"],
    description: "Gemini is represented by the celestial twins. This air sign was interested in so many pursuits that it had to double itself.",
    symbol: "♊",
    compatibility: ["Libra", "Aquarius", "Aries", "Leo"],
    image: "https://images.pexels.com/photos/5199761/pexels-photo-5199761.jpeg"
  },
  {
    name: "Cancer",
    dates: "June 21 - July 22",
    element: "Water",
    planet: "Moon",
    traits: ["Tenacious", "Highly Imaginative", "Loyal", "Emotional", "Sympathetic"],
    description: "Cancer is a cardinal water sign. Represented by the crab, this oceanic crustacean seamlessly weaves between the sea and shore.",
    symbol: "♋",
    compatibility: ["Scorpio", "Pisces", "Taurus", "Virgo"],
    image: "https://images.pexels.com/photos/5199766/pexels-photo-5199766.jpeg"
  },
  {
    name: "Leo",
    dates: "July 23 - August 22",
    element: "Fire",
    planet: "Sun",
    traits: ["Creative", "Passionate", "Generous", "Warm-hearted", "Theatrical"],
    description: "Leo is represented by the lion, and these spirited fire signs are the kings and queens of the celestial jungle.",
    symbol: "♌",
    compatibility: ["Aries", "Sagittarius", "Gemini", "Libra"],
    image: "https://images.pexels.com/photos/5199763/pexels-photo-5199763.jpeg"
  },
  {
    name: "Virgo",
    dates: "August 23 - September 22",
    element: "Earth",
    planet: "Mercury",
    traits: ["Loyal", "Analytical", "Kind", "Hardworking", "Practical"],
    description: "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world.",
    symbol: "♍",
    compatibility: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
    image: "https://images.pexels.com/photos/5199764/pexels-photo-5199764.jpeg"
  },
  {
    name: "Libra",
    dates: "September 23 - October 22",
    element: "Air",
    planet: "Venus",
    traits: ["Diplomatic", "Fair-minded", "Social", "Cooperative", "Indecisive"],
    description: "Libra is an air sign represented by the scales, the only inanimate object of the zodiac. Accordingly, Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.",
    symbol: "♎",
    compatibility: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
    image: "https://images.pexels.com/photos/5199765/pexels-photo-5199765.jpeg"
  },
  {
    name: "Scorpio",
    dates: "October 23 - November 21",
    element: "Water",
    planet: "Pluto, Mars",
    traits: ["Resourceful", "Powerful", "Brave", "Passionate", "Stubborn"],
    description: "Scorpio is a water sign that derives its strength from the psychic, emotional realm. Scorpio's power comes from its deep emotional connection to people and situations.",
    symbol: "♏",
    compatibility: ["Cancer", "Pisces", "Virgo", "Capricorn"],
    image: "https://images.pexels.com/photos/5199767/pexels-photo-5199767.jpeg"
  },
  {
    name: "Sagittarius",
    dates: "November 22 - December 21",
    element: "Fire",
    planet: "Jupiter",
    traits: ["Generous", "Idealistic", "Great sense of humor", "Enthusiastic", "Impatient"],
    description: "Sagittarius, the ninth sign of the zodiac, is represented by the archer. Sagittarians are always on a quest for knowledge.",
    symbol: "♐",
    compatibility: ["Aries", "Leo", "Libra", "Aquarius"],
    image: "https://images.pexels.com/photos/5199768/pexels-photo-5199768.jpeg"
  },
  {
    name: "Capricorn",
    dates: "December 22 - January 19",
    element: "Earth",
    planet: "Saturn",
    traits: ["Responsible", "Disciplined", "Self-control", "Good managers", "Unforgiving"],
    description: "Capricorn, the tenth sign of the zodiac, is represented by the sea goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.",
    symbol: "♑",
    compatibility: ["Taurus", "Virgo", "Scorpio", "Pisces"],
    image: "https://images.pexels.com/photos/5199769/pexels-photo-5199769.jpeg"
  },
  {
    name: "Aquarius",
    dates: "January 20 - February 18",
    element: "Air",
    planet: "Uranus, Saturn",
    traits: ["Progressive", "Original", "Independent", "Humanitarian", "Detached"],
    description: "Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign.",
    symbol: "♒",
    compatibility: ["Gemini", "Libra", "Aries", "Sagittarius"],
    image: "https://images.pexels.com/photos/5199770/pexels-photo-5199770.jpeg"
  },
  {
    name: "Pisces",
    dates: "February 19 - March 20",
    element: "Water",
    planet: "Neptune, Jupiter",
    traits: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Fearful"],
    description: "Pisces, the 12th and final sign of the zodiac, is represented by two fish swimming in opposite directions. Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs.",
    symbol: "♓",
    compatibility: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
    image: "https://images.pexels.com/photos/5199771/pexels-photo-5199771.jpeg"
  },
];

export const services = [
  {
    title: "Personal Horoscope Reading",
    description: "Get detailed insights about your future based on your birth chart and planetary positions.",
    price: "$49.99",
    features: [
      "Detailed 30-page personalized report",
      "Month-by-month predictions",
      "Career and relationship guidance",
      "Personalized lucky dates"
    ]
  },
  {
    title: "Compatibility Analysis",
    description: "Discover how compatible you are with your partner or potential love interest based on your zodiac signs.",
    price: "$39.99",
    features: [
      "Comprehensive compatibility report",
      "Relationship strengths and challenges",
      "Communication style analysis",
      "Long-term potential assessment"
    ]
  },
  {
    title: "Career Path Reading",
    description: "Gain insights into your professional future and discover the career path that aligns with your celestial destiny.",
    price: "$59.99",
    features: [
      "Career potential analysis",
      "Best working environments",
      "Financial forecast",
      "Professional development recommendations"
    ]
  },
  {
    title: "Spiritual Guidance",
    description: "Connect with your higher self through astrological insights and spiritual practices tailored to your sign.",
    price: "$69.99",
    features: [
      "Personalized meditation techniques",
      "Spiritual growth roadmap",
      "Energy clearing guidance",
      "Monthly spiritual focus areas"
    ]
  }
];

export const teamMembers = [
  {
    name: "Elena Starfield",
    role: "Founder & Master Astrologer",
    bio: "With over 20 years of experience studying the stars, Elena founded Astral Insights to bring celestial wisdom to those seeking guidance.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Michael Moonstone",
    role: "Vedic Astrology Specialist",
    bio: "Michael specializes in ancient Vedic astrological techniques, bringing time-honored wisdom to modern-day questions.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Sophia Celestial",
    role: "Tarot & Astrology Reader",
    bio: "Combining the powers of tarot and astrology, Sophia provides deeply insightful readings that illuminate your path forward.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Daniel Cosmos",
    role: "Modern Astrology Expert",
    bio: "Daniel blends traditional astrological knowledge with contemporary psychological insights for a holistic approach.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export const testimonials = [
  {
    name: "Sarah J.",
    location: "New York, NY",
    testimonial: "The career reading I received was incredibly accurate. It helped me make the decision to change careers, and I couldn't be happier!",
    rating: 5
  },
  {
    name: "Marcus T.",
    location: "Los Angeles, CA",
    testimonial: "I was skeptical at first, but the compatibility analysis for me and my partner was spot on. It helped us understand our differences and improve our relationship.",
    rating: 5
  },
  {
    name: "Priya K.",
    location: "Chicago, IL",
    testimonial: "The monthly horoscope subscription has been like having a cosmic guide by my side. Highly recommended!",
    rating: 4
  },
  {
    name: "James W.",
    location: "Austin, TX",
    testimonial: "The spiritual guidance session opened my eyes to aspects of myself I had never considered. A truly transformative experience.",
    rating: 5
  }
];