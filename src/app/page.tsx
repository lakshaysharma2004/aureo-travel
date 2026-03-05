import Link from "next/link";
import { cities } from "@/data/cities";
import CityCard from "@/components/CityCard";
import TravelSearchBar from "@/components/TravelSearchBar";

export const metadata = {
  title: "Aureo Travel | Premium Travel Experiences",
  description: "Explore India with our curated premium travel experiences",
};

export default function Home() {
  const featuredCities = cities.slice(0, 3);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-linear-to-r from-blue-600 to-blue-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Explore India with Aureo Travel
            </h1>
            <p className="mt-6 max-w-2xl text-xl md:text-2xl text-blue-100">
              Discover curated premium travel experiences across India's most iconic destinations. From the mystique of the Taj Mahal to the colorful streets of Jaipur.
            </p>

            {/* Travel Search Bar */}
            <TravelSearchBar />

            <div className="mt-8">
              <Link href="/destinations">
                <button className="rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-blue-600">
                  Browse All Destinations
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Featured Destinations
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Handpicked cities offering unforgettable experiences
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
              <button className="rounded-lg border-2 border-blue-600 px-8 py-3 text-lg font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                View All Destinations
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
