export interface Photo {
  id: number;
  url: string;
  caption: string;
  category: "Living room" | "Bedrooms" | "Kitchen" | "Exterior & Pool" | "Bathrooms";
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
  location: string;
}

export interface Amenity {
  name: string;
  description?: string;
  iconName: string;
  category: string;
}

export interface SleepingArrangement {
  roomName: string;
  bedType: string;
  icon: string;
}

export interface ListingData {
  id: string;
  title: string;
  propertyType: string;
  location: {
    city: string;
    state: string;
    country: string;
    neighborhood: string;
    description: string;
  };
  rating: number;
  reviewCount: number;
  isSuperhost: boolean;
  isGuestFavorite: boolean;
  host: {
    name: string;
    avatar: string;
    badge: string;
    coHosts?: string[];
    yearsHosting: number;
    responseRate: string;
    responseTime: string;
    bio: string;
    isSuperhost: boolean;
    work: string;
    languages: string[];
  };
  stats: {
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
  };
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  description: {
    summary: string;
    theSpace: string;
    guestAccess: string;
    otherThingsToNote: string;
  };
  sleepingArrangements: SleepingArrangement[];
  amenities: Amenity[];
  photos: Photo[];
  reviews: {
    overall: number;
    categories: {
      cleanliness: number;
      accuracy: number;
      communication: number;
      location: number;
      checkIn: number;
      value: number;
    };
    items: Review[];
  };
  pricing: {
    nightlyRate: number;
    cleaningFee: number;
    serviceFee: number;
    weeklyDiscountPercent: number;
    minNights: number;
  };
}

export const LISTING_DATA: ListingData = {
  id: "malibu-infinity-villa-101",
  title: "Architectural Oceanfront Luxury Villa with Heated Infinity Pool",
  propertyType: "Entire villa in Malibu, California",
  location: {
    city: "Malibu",
    state: "California",
    country: "United States",
    neighborhood: "Eastern Malibu Coast",
    description:
      "Perched on a private bluff overlooking the Pacific Ocean, this residence offers tranquility while being just 10 minutes from Malibu Country Mart and renowned oceanfront dining.",
  },
  rating: 4.98,
  reviewCount: 142,
  isSuperhost: true,
  isGuestFavorite: true,
  host: {
    name: "Helena & Marcus",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    badge: "Superhost",
    yearsHosting: 6,
    responseRate: "100%",
    responseTime: "within an hour",
    bio: "We are passionate architectural designers and lifelong California residents. We built this coastal sanctuary to harmonize with the ocean breeze and dramatic cliffside sunsets. We love welcoming travelers from across the globe.",
    isSuperhost: true,
    work: "Architectural & Interior Design",
    languages: ["English", "French", "Spanish"],
  },
  stats: {
    guests: 8,
    bedrooms: 4,
    beds: 5,
    baths: 4.5,
  },
  highlights: [
    {
      title: "Fast Wifi at 500+ Mbps",
      description: "Verified speed test. Seamless 4K streaming and remote work video conferences.",
      icon: "Wifi",
    },
    {
      title: "Self check-in with smart lock",
      description: "Check yourself in smoothly with a personalized numeric keypad code.",
      icon: "KeyRound",
    },
    {
      title: "Helena & Marcus is a Superhost",
      description: "Superhosts are experienced, highly rated hosts committed to great stays.",
      icon: "Award",
    },
    {
      title: "Free cancellation for 48 hours",
      description: "Get a full refund if you change your mind within 48 hours of booking.",
      icon: "CalendarCheck",
    },
  ],
  description: {
    summary:
      "Experience California coastal living at its finest in this custom architectural masterpiece. Featuring floor-to-ceiling glass walls, sweeping 270-degree ocean views, a heated saltwater infinity pool, and expansive outdoor teak decks designed for sunset entertaining.",
    theSpace:
      "The residence spans over 4,800 square feet across two levels of minimalist modern luxury. The main open-concept living pavilion features soaring 14-foot ceilings, a floating concrete fireplace, white oak floors, and seamlessly disappearing pocket doors that blur the boundary between indoors and outdoors. The chef's kitchen comes fully appointed with Sub-Zero and Wolf appliances, waterfall marble island, and custom walnut cabinetry.",
    guestAccess:
      "Guests enjoy exclusive private access to the entire estate, including the private driveway with gated security, two-car garage with Level 2 EV charging, heated infinity pool and spa, outdoor barbecue pavilion, fire pit lounge, and direct private trail access down to the shoreline.",
    otherThingsToNote:
      "Quiet hours are strictly observed from 10:00 PM to 8:00 AM in respect of our coastal neighborhood community. No parties or commercial photography without prior written host approval.",
  },
  sleepingArrangements: [
    {
      roomName: "Primary Bedroom",
      bedType: "1 king bed, ocean view terrace, ensuite spa bath",
      icon: "BedDouble",
    },
    {
      roomName: "Bedroom 2",
      bedType: "1 king bed, private balcony, ensuite bath",
      icon: "BedDouble",
    },
    {
      roomName: "Bedroom 3",
      bedType: "1 queen bed, garden view",
      icon: "BedSingle",
    },
    {
      roomName: "Bedroom 4",
      bedType: "2 twin single beds, workspace desk",
      icon: "Bed",
    },
  ],
  amenities: [
    { name: "Fast Wifi (500+ Mbps)", iconName: "Wifi", category: "Internet & Office" },
    { name: "Heated saltwater infinity pool", iconName: "Waves", category: "Outdoor" },
    { name: "Hot tub with ocean views", iconName: "Sparkles", category: "Outdoor" },
    { name: "Private chef's kitchen", iconName: "Utensils", category: "Kitchen & Dining" },
    { name: "Free parking on premises (3 vehicles)", iconName: "Car", category: "Parking & Facilities" },
    { name: "Central air conditioning & climate control", iconName: "Wind", category: "Heating & Cooling" },
    { name: "Sub-Zero refrigerator & wine cooler", iconName: "Refrigerator", category: "Kitchen & Dining" },
    { name: "75\" 4K OLED Smart TV with Sonos sound", iconName: "Tv", category: "Entertainment" },
    { name: "Dedicated modern workspace", iconName: "Laptop", category: "Internet & Office" },
    { name: "In-unit washer and dryer", iconName: "Shirt", category: "Bedroom & Laundry" },
    { name: "Indoor gas fireplace", iconName: "Flame", category: "Heating & Cooling" },
    { name: "Outdoor fire pit & dining lounge", iconName: "Sun", category: "Outdoor" },
    { name: "EV charger (Level 2 J1772 / Tesla adapter)", iconName: "Zap", category: "Parking & Facilities" },
    { name: "Security cameras on property exterior", iconName: "ShieldAlert", category: "Home Safety" },
    { name: "Smoke and carbon monoxide alarms", iconName: "BellRing", category: "Home Safety" },
    { name: "First aid kit and safety essentials", iconName: "HeartPulse", category: "Home Safety" },
  ],
  photos: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      caption: "Panoramic view of the architectural villa and illuminated infinity pool at dusk.",
      category: "Exterior & Pool",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      caption: "Open-concept main living area with custom Italian furnishings and floor-to-ceiling glass.",
      category: "Living room",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      caption: "Gourmet kitchen with calacatta marble waterfall island and premium Sub-Zero appliances.",
      category: "Kitchen",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      caption: "Master bedroom suite with king bed and uninterrupted Pacific Ocean horizon views.",
      category: "Bedrooms",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      caption: "Spa bathroom featuring freestanding soaking tub overlooking private bamboo garden.",
      category: "Bathrooms",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      caption: "Outdoor oceanfront terrace with teak sun loungers and dining gazebo.",
      category: "Exterior & Pool",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      caption: "Sleek architectural exterior facade showing geometric concrete and natural cedar lines.",
      category: "Exterior & Pool",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      caption: "Cozy reading nook and minimalist fireplace in the secondary lounge.",
      category: "Living room",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      caption: "Second master suite with private ensuite bathroom and terrace access.",
      category: "Bedrooms",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      caption: "Ensuite double vanity with matte black fixtures and walk-in rainfall shower.",
      category: "Bathrooms",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      caption: "Custom dining table seating up to 10 guests under architectural pendant lighting.",
      category: "Kitchen",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      caption: "Bedroom 3 featuring queen size canopy bed and warm natural wood finishes.",
      category: "Bedrooms",
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      caption: "Bedroom 4 configured with two twin beds and ergonomic workstation.",
      category: "Bedrooms",
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      caption: "Custom wine cellar and tasting area on the garden terrace level.",
      category: "Living room",
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      caption: "Sunset view from the infinity pool edge looking directly toward Point Dume.",
      category: "Exterior & Pool",
    },
  ],
  reviews: {
    overall: 4.98,
    categories: {
      cleanliness: 5.0,
      accuracy: 4.9,
      communication: 5.0,
      location: 5.0,
      checkIn: 5.0,
      value: 4.9,
    },
    items: [
      {
        id: "rev-1",
        author: "Sarah",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=80",
        date: "October 2024",
        rating: 5,
        location: "San Francisco, California",
        comment:
          "This villa is hands down the most breathtaking property we have ever stayed in. The photos do not do justice to the views! Helena was an exceptional host, greeting us with local wines and a personalized guide.",
      },
      {
        id: "rev-2",
        author: "David",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&q=80",
        date: "September 2024",
        rating: 5,
        location: "London, United Kingdom",
        comment:
          "An architectural dream. The seamless indoor-outdoor living, the heated pool, and the sunsets over the ocean made this a once-in-a-lifetime family vacation. Everything was spotlessly clean and pristine.",
      },
      {
        id: "rev-3",
        author: "Elena",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&q=80",
        date: "August 2024",
        rating: 5,
        location: "New York, New York",
        comment:
          "High speed wifi was flawless for remote work, and finishing the day in the cliffside hot tub was pure bliss. 10/10 recommendation for anyone looking for peaceful luxury.",
      },
      {
        id: "rev-4",
        author: "Michael",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80",
        date: "July 2024",
        rating: 5,
        location: "Austin, Texas",
        comment:
          "The kitchen is equipped better than my own home kitchen! We cooked every evening and dined watching dolphins in the Pacific. Check-in was effortless. We can't wait to return next summer.",
      },
    ],
  },
  pricing: {
    nightlyRate: 750,
    cleaningFee: 250,
    serviceFee: 320,
    weeklyDiscountPercent: 10,
    minNights: 3,
  },
};
