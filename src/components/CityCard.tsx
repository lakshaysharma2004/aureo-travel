import Link from "next/link";
import { City } from "@/types/city";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Link href={`/destinations/${city.slug}`}>
      <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
        {/* Hero Image */}
        <div className="relative h-56 w-full overflow-hidden bg-gray-200">
          <img
            src={city.heroImage}
            alt={city.name}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Best Time Badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 translate-x-4">
            <span className="rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-bold text-blue-600 shadow-lg">
              Best: {city.bestTimeToVisit}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-6">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{city.name}</h3>
          <p className="mt-3 line-clamp-2 text-sm text-gray-600 leading-relaxed">
            {city.description}
          </p>

          {/* Attractions Preview */}
          <div className="mt-4 flex flex-wrap gap-2">
            {city.attractions.slice(0, 2).map((attraction, index) => (
              <span
                key={index}
                className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700 transform transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110"
              >
                {attraction}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform group-hover:scale-105">
            Explore Destination →
          </button>
        </div>
      </div>
    </Link>
  );
}
