import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold md:text-5xl">Travel Packages</h1>
          <p className="mt-4 text-lg text-blue-100">
            Discover our carefully curated travel packages for unforgettable experiences
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} package={pkg} />
          ))}
        </div>

        {/* Empty State */}
        {packages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-lg text-gray-600">
              No packages available at the moment.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Please check back later for exciting travel packages!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
