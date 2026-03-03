import { cities } from "@/data/cities";
import CityCard from "@/components/CityCard";

export const metadata = {
  title: "Destinations | Aureo Travel",
  description: "Explore our premium travel destinations across India",
};

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold md:text-5xl">Explore Destinations</h1>
          <p className="mt-4 text-lg text-blue-100">
            Discover our curated selection of premium travel destinations
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
