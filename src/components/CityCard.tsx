import Link from "next/link";
import { City } from "@/types/city";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Link href={`/destinations/${city.slug}`}>
      <div className="group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
        {/* Hero Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-200">
          <img
            src={city.heroImage}
            alt={city.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="bg-white p-6">
          <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {city.description}
          </p>

          {/* Best Time to Visit */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              Best: {city.bestTimeToVisit}
            </span>
          </div>

          {/* Attractions Preview */}
          <div className="mt-4 flex flex-wrap gap-2">
            {city.attractions.slice(0, 2).map((attraction, index) => (
              <span
                key={index}
                className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700"
              >
                {attraction}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition-colors hover:bg-blue-700">
            Explore
          </button>
        </div>
      </div>
    </Link>
  );
}
