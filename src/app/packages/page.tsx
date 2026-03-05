"use client";

import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { useSearchParams } from "next/navigation";

export default function PackagesPage() {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination");
  const duration = searchParams.get("duration");
  const budget = searchParams.get("budget");

  // Check if any filters are active
  const hasFilters = destination || duration || budget;

  // Filter packages based on search criteria
  const filteredPackages = packages.filter((pkg) => {
    // Filter by destination
    if (destination) {
      const destinationMatch = pkg.cities.some((city) =>
        city.toLowerCase().includes(destination.toLowerCase())
      );
      if (!destinationMatch) return false;
    }

    // Filter by duration
    if (duration) {
      const packageDays = parseInt(pkg.duration.split(" ")[0]);
      const [minDays, maxDays] = duration.split("-").map(Number);
      if (packageDays < minDays || packageDays > maxDays) return false;
    }

    // Filter by budget
    if (budget) {
      const price = pkg.price;
      const budgetCategory =
        price < 30000 ? "budget" : price <= 50000 ? "standard" : "luxury";
      if (budgetCategory !== budget.toLowerCase()) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold md:text-5xl">Travel Packages</h1>
          <p className="mt-4 text-lg text-blue-100">
            Discover our carefully curated travel packages for unforgettable experiences
          </p>

          {/* Active Filters Display */}
          {hasFilters && (
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="text-sm text-blue-200">Active filters:</span>
              {destination && (
                <span className="rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-sm">
                  📍 {destination}
                </span>
              )}
              {duration && (
                <span className="rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-sm">
                  📅 {duration} days
                </span>
              )}
              {budget && (
                <span className="rounded-full bg-white/20 px-4 py-1 text-sm capitalize backdrop-blur-sm">
                  💰 {budget}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Packages Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Results Count */}
        {hasFilters && (
          <div className="mb-6">
            <p className="text-lg text-gray-700">
              Found <span className="font-bold">{filteredPackages.length}</span>{" "}
              {filteredPackages.length === 1 ? "package" : "packages"} matching
              your criteria
            </p>
          </div>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.slug} package={pkg} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPackages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            {hasFilters ? (
              <>
                <svg
                  className="mb-4 h-16 w-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <p className="text-lg font-semibold text-gray-900">
                  No packages match your search
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Try adjusting your filters or browse all packages
                </p>
                <a
                  href="/packages"
                  className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                >
                  Clear Filters
                </a>
              </>
            ) : (
              <>
                <p className="text-lg text-gray-600">
                  No packages available at the moment.
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Please check back later for exciting travel packages!
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
