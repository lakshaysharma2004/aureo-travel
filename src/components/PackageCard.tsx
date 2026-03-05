import Link from "next/link";
import { TravelPackage } from "@/types/package";

interface PackageCardProps {
  package: TravelPackage;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Link href={`/packages/${pkg.slug}`}>
      <div className="group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
        {/* Hero Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-200">
          <img
            src={pkg.heroImage}
            alt={pkg.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="bg-white p-6">
          <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>

          {/* Duration and Price */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              {pkg.duration}
            </span>
            <span className="text-lg font-bold text-blue-600">
              ₹{pkg.price.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Cities Preview */}
          <div className="mt-4 flex flex-wrap gap-2">
            {pkg.cities.slice(0, 3).map((city, index) => (
              <span
                key={index}
                className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs capitalize text-blue-700"
              >
                {city}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition-colors hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
