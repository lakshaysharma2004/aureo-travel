import { City } from "@/types/city";

export const cities: City[] = [
  {
    slug: "delhi",
    name: "Delhi",
    description:
      "India's vibrant capital city blending ancient history with modern cosmopolitan culture. Home to magnificent historical monuments and delicious street food.",
    heroImage: "/public/delhi-hero.jpg",
    attractions: [
      "Red Fort",
      "India Gate",
      "Jama Masjid",
      "Humayun's Tomb",
      "Qutub Minar",
    ],
    bestTimeToVisit: "October to March",
  },
  {
    slug: "agra",
    name: "Agra",
    description:
      "Home to the iconic Taj Mahal, one of the world's most beautiful monuments. A city that captivates with Mughal architecture and rich heritage.",
    heroImage: "/public/agra-hero.jpg",
    attractions: [
      "Taj Mahal",
      "Agra Fort",
      "Mehtab Bagh",
      "Itmad-ud-Daulah's Tomb",
      "Sikandra",
    ],
    bestTimeToVisit: "October to April",
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    description:
      "The enchanting Pink City known for its distinctive rose-colored buildings and impressive palaces. A perfect blend of royal heritage and vibrant culture.",
    heroImage: "/public/jaipur-hero.jpg",
    attractions: [
      "City Palace",
      "Jantar Mantar",
      "Hawa Mahal",
      "Albert Hall Museum",
      "Nahargarh Fort",
    ],
    bestTimeToVisit: "October to March",
  },
];
