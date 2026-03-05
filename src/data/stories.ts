export type TravelStory = {
  slug: string;
  title: string;
  author: string;
  publishDate: string;
  city: string;
  heroImage: string;
  content: string;
};

export const stories: TravelStory[] = [
  {
    slug: "discovering-old-delhi",
    title: "Discovering the Hidden Gems of Old Delhi",
    author: "Priya Sharma",
    publishDate: "2026-02-15",
    city: "Delhi",
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80",
    content: `Walking through the narrow lanes of Chandni Chowk felt like stepping back in time. The aroma of freshly prepared parathas from Paranthe Wali Gali filled the air, mixing with the scent of jasmine garlands from nearby flower sellers. Every corner revealed a new story, from the majestic Red Fort standing tall against the Delhi sky to the peaceful Jama Masjid where time seemed to slow down.

The street food here is legendary. I tried everything from crispy jalebis at Dariba Kalan to creamy kulfi at the oldest kulfi shops. The vendors, some whose families have been running these stalls for generations, shared stories of Old Delhi's golden era. Their warmth and hospitality made me feel like a local rather than a tourist.

As the sun set, I climbed the terrace of a heritage haveli and watched the city transform. The calls from Jama Masjid echoed through the streets, and the evening rush began. Old Delhi is not just a place; it's an emotion, a living museum where history breathes in every brick and every face tells a tale.`,
  },
  {
    slug: "sunrise-taj-mahal",
    title: "Witnessing Sunrise at the Taj Mahal",
    author: "Rahul Verma",
    publishDate: "2026-01-28",
    city: "Agra",
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
    content: `They say the Taj Mahal is best experienced at sunrise, and they couldn't be more right. I arrived at the gates while it was still dark, joining a small group of early risers and photography enthusiasts. As we walked through the main gate, the first rays of light began to paint the sky in shades of pink and orange.

The moment the Taj Mahal came into view, I was speechless. The white marble seemed to glow with an ethereal light, changing colors as the sun rose higher. The reflection in the pool was perfect, creating a mirror image that doubled the beauty. I spent hours just sitting there, watching the monument transform with the changing light.

What struck me most was the intricate craftsmanship. Every inch of the marble is adorned with precious stones forming delicate floral patterns. The symmetry is perfect, the acoustics mesmerizing. Standing before this monument of love, I understood why it's considered one of the world's greatest wonders. Shah Jahan's love for Mumtaz Mahal is immortalized in every stone, telling a story that transcends time.`,
  },
  {
    slug: "pink-city-adventures",
    title: "Adventures in the Pink City",
    author: "Maya Patel",
    publishDate: "2026-02-10",
    city: "Jaipur",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
    content: `Jaipur welcomed me with its distinctive pink hue, a color that defines every building in the old city. My journey began at the magnificent City Palace, where the blend of Mughal and Rajasthani architecture left me in awe. The palace museum houses an incredible collection of royal artifacts, including the world's largest silver vessels.

The Hawa Mahal, or Palace of Winds, was my next stop. This five-story facade with its 953 small windows was built so royal ladies could observe street festivals without being seen. Climbing to the top offered stunning views of the bustling bazaar below, where craftsmen sold everything from block-printed textiles to traditional mojaris.

But the highlight of my trip was the Amber Fort. The elephant ride up to the fort felt like traveling back to the era of maharajas. Inside, the Sheesh Mahal or Mirror Palace was breathtaking. Thousands of tiny mirrors embedded in the walls and ceiling create a starry sky effect when lit. As the sun set, I watched from Nahargarh Fort as the entire pink city lit up, a sight I'll never forget.`,
  },
  {
    slug: "spiritual-varanasi",
    title: "Finding Peace in the Chaos of Varanasi",
    author: "Arjun Desai",
    publishDate: "2026-01-20",
    city: "Varanasi",
    heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80",
    content: `Varanasi is unlike any place I've ever visited. The spiritual energy here is palpable, flowing through the ancient ghats and narrow alleys like the Ganges itself. I woke up before dawn to witness the Ganga Aarti at Dashashwamedh Ghat, and what I experienced changed my perspective on life and faith.

As priests performed the ritual with fire lamps, the chanting of mantras filled the air, and hundreds of devotees joined in prayer. Boats filled with tourists and pilgrims floated on the river, their faces illuminated by the flames. The scene was both chaotic and deeply peaceful, a perfect representation of Indian spirituality.

During my days there, I explored the maze-like streets, discovering small temples at every turn, some dating back thousands of years. I tried the famous Banarasi paan, watched silk weavers create intricate Banarasi sarees, and took a boat ride at sunrise. The play of light on the ghats, the sounds of temple bells, and the sight of people starting their day with a holy dip in the Ganges created an experience that touched my soul. Varanasi isn't just a city; it's a living, breathing embodiment of India's spiritual heritage.`,
  },
];
