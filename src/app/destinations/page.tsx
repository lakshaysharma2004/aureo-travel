import { cities } from "@/data/cities";
import CityCard from "@/components/CityCard";

export const metadata = {
  title: "Destinations | Aureo Travel",
  description: "Explore our premium travel destinations across India",
};

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=90"
            alt="Explore Destinations"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-br from-teal-900/70 via-teal-800/60 to-slate-900/70" />
        </div>
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h1 className="text-5xl font-bold text-white drop-shadow-2xl md:text-6xl">
              Explore Destinations
            </h1>
            <p className="mt-4 text-xl text-white drop-shadow-lg">
              Discover our curated selection of premium travel destinations across India
            </p>
          </div>
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
