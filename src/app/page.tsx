import Link from "next/link";
import { cities } from "@/data/cities";
import { packages } from "@/data/packages";
import { stories } from "@/data/stories";
import CityCard from "@/components/CityCard";
import PackageCard from "@/components/PackageCard";
import StoryCard from "@/components/StoryCard";
import TravelSearchBar from "@/components/TravelSearchBar";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata = {
  title: "AureoTravels | Premium Travel Experiences",
  description: "Explore the Golden Triangle and Rajasthan with curated travel packages to Delhi, Agra, Jaipur, Udaipur, and Jodhpur",
};

export default function Home() {
  const featuredCities = cities.slice(0, 5);
  const featuredPackages = packages.slice(0, 3);
  const featuredStories = stories.slice(0, 3);

  const testimonials = [
    {
      id: 1,
      name: "Anjali Mehta",
      location: "Mumbai, Maharashtra",
      rating: 5,
      review: "Our Golden Triangle tour was absolutely spectacular! Aureo Travel took care of every detail, from comfortable accommodations to knowledgeable guides. The Taj Mahal at sunrise was a dream come true. Highly recommend!",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Bangalore, Karnataka",
      rating: 5,
      review: "Exceptional service from start to finish. The Royal Rajasthan package exceeded all expectations. The heritage hotels, the local experiences, and the personalized attention made this trip unforgettable for our family.",
    },
    {
      id: 3,
      name: "Sarah Thompson",
      location: "London, UK",
      rating: 5,
      review: "As a solo traveler, I felt completely safe and well-cared for throughout my journey across India. Aureo Travel's attention to detail and authentic experiences made this the trip of a lifetime. Can't wait to return!",
    },
  ];

  return (
    <main className="w-full bg-gray-50">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Floating Trip Planner */}
      <section className="relative z-10 -mt-24 px-6 pb-12">
        <div className="mx-auto max-w-6xl">
          <TravelSearchBar />
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Your Next Destination
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Journey through the Golden Triangle and royal Rajasthan
            </p>
          </div>

          {/* Cities Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <Link href="/destinations">
              <button className="rounded-lg border-2 border-teal-600 px-8 py-3 text-lg font-semibold text-teal-600 transition-colors hover:bg-teal-700 hover:text-white">
                View All Destinations
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Popular Travel Packages
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Curated journeys designed for unforgettable adventures
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.slug} package={pkg} />
            ))}
          </div>

          {/* View All Packages Button */}
          <div className="mt-12 text-center">
            <Link href="/packages">
              <button className="rounded-lg bg-teal-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-teal-700 hover:scale-105 hover:shadow-lg">
                View All Packages
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Stories Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Travel Stories & Experiences
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real traveler experiences and inspiring journeys across India
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredStories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>

          {/* View All Stories Button */}
          <div className="mt-12 text-center">
            <Link href="/stories">
              <button className="rounded-lg border-2 border-orange-500 px-8 py-3 text-lg font-semibold text-orange-500 transition-all hover:bg-orange-600 hover:text-white hover:scale-105">
                View All Stories
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              What Our Travelers Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover why thousands choose AureoTravels for their journeys
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group flex flex-col rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                {/* Star Rating */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="h-5 w-5 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="mb-6 grow text-gray-700 leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Traveler Info */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
