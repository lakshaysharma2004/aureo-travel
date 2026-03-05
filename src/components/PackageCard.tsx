import Link from "next/link";
import { TravelPackage } from "@/types/package";

interface PackageCardProps {
  package: TravelPackage;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Link href={`/packages/${pkg.slug}`}>
      <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
        {/* Hero Image */}
        <div className="relative h-56 w-full overflow-hidden bg-gray-200">
          <img
            src={pkg.heroImage}
            alt={pkg.title}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Duration Badge */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 -translate-x-4">
            <span className="rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-bold text-gray-800 shadow-lg">
              {pkg.duration}
            </span>
          </div>
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-0 translate-x-4">
            <span className="rounded-full bg-blue-600 backdrop-blur-sm px-4 py-2 text-xs font-bold text-white shadow-lg">
              ₹{pkg.price.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-6">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{pkg.title}</h3>

          {/* Duration and Price */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">{pkg.duration}</span>
            </div>
            <span className="text-xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
              ₹{pkg.price.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Cities Preview */}
          <div className="mt-4 flex flex-wrap gap-2">
            {pkg.cities.slice(0, 3).map((city, index) => (
              <span
                key={index}
                className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs capitalize text-blue-700 transform transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110"
              >
                {city}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform group-hover:scale-105">
            View Details →
          </button>
        </div>
      </div>
    </Link>
  );
}
