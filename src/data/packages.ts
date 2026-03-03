import { TravelPackage } from "@/types/package";

export const packages: TravelPackage[] = [
  {
    slug: "golden-triangle-explorer",
    title: "Golden Triangle Explorer",
    duration: "5 Days / 4 Nights",
    price: 24999,
    cities: ["delhi", "agra", "jaipur"],
    inclusions: [
      "Flight tickets",
      "3-star hotel accommodation",
      "Daily breakfast",
      "All transfers and sightseeing",
      "Taj Mahal entry ticket",
      "Professional tour guide",
    ],
    exclusions: [
      "Travel insurance",
      "Personal expenses",
      "Meals not mentioned in itinerary",
    ],
    itinerary: [
      "Day 1: Arrival in Delhi, explore Red Fort and India Gate",
      "Day 2: Delhi to Agra, visit Taj Mahal and Agra Fort",
      "Day 3: Agra to Jaipur, visit Hawa Mahal and City Palace",
      "Day 4: Jaipur local sightseeing - Jantar Mantar and Nahargarh Fort",
      "Day 5: Return to Delhi, departure",
    ],
    heroImage: "/public/golden-triangle-hero.jpg",
  },
  {
    slug: "royal-rajasthan-experience",
    title: "Royal Rajasthan Experience",
    duration: "7 Days / 6 Nights",
    price: 39999,
    cities: ["delhi", "jaipur", "agra"],
    inclusions: [
      "Flight & train tickets",
      "4-star hotel accommodation",
      "Daily breakfast and dinner",
      "All transfers and guided tours",
      "All monument entry tickets",
      "Welcome dinner at city palace",
      "Professional tour guide and driver",
    ],
    exclusions: [
      "Travel insurance",
      "Visa fees",
      "Shopping and personal expenses",
      "Alcoholic beverages",
    ],
    itinerary: [
      "Day 1: Arrival in Delhi, welcome dinner, explore Chandni Chowk",
      "Day 2: Delhi local tours - Humayun's Tomb, Qutub Minar, India Gate",
      "Day 3: Delhi to Jaipur, city tour, Hawa Mahal and City Palace",
      "Day 4: Jaipur - Jantar Mantar, Nahargarh Fort, traditional dinner",
      "Day 5: Jaipur to Agra, visit Taj Mahal at sunset",
      "Day 6: Agra - Agra Fort, Mehtab Bagh, shopping in local bazaar",
      "Day 7: Agra to Delhi, departure",
    ],
    heroImage: "/public/royal-rajasthan-hero.jpg",
  },
];
