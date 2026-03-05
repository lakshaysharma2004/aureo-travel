import { notFound } from "next/navigation";
import { packages } from "@/data/packages";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const packageData = packages.find((p) => p.slug === slug);

  if (!packageData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <img
          src={packageData.heroImage}
          alt={packageData.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              {packageData.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl p-6">
        {/* Duration and Price */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-white p-6 shadow-md">
          <div>
            <p className="text-sm text-gray-600">Duration</p>
            <p className="text-2xl font-bold text-gray-900">
              {packageData.duration}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Price</p>
            <p className="text-3xl font-bold text-blue-600">
              ₹{packageData.price.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        {/* Cities Included */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Cities Included
          </h2>
          <div className="flex flex-wrap gap-3">
            {packageData.cities.map((city, index) => (
              <span
                key={index}
                className="rounded-lg bg-blue-100 px-4 py-2 text-lg font-medium capitalize text-blue-700"
              >
                {city}
              </span>
            ))}
          </div>
        </section>

        {/* Inclusions */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Inclusions</h2>
          <ul className="space-y-3">
            {packageData.inclusions.map((inclusion, index) => (
              <li
                key={index}
                className="flex items-start rounded-lg bg-green-50 p-4 shadow-sm"
              >
                <span className="mr-3 mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                  ✓
                </span>
                <span className="text-lg text-gray-800">{inclusion}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Exclusions */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Exclusions</h2>
          <ul className="space-y-3">
            {packageData.exclusions.map((exclusion, index) => (
              <li
                key={index}
                className="flex items-start rounded-lg bg-red-50 p-4 shadow-sm"
              >
                <span className="mr-3 mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                  ✕
                </span>
                <span className="text-lg text-gray-800">{exclusion}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Itinerary */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Itinerary</h2>
          <div className="space-y-4">
            {packageData.itinerary.map((day, index) => (
              <div
                key={index}
                className="flex items-start rounded-lg bg-white p-5 shadow-sm"
              >
                <span className="mr-4 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-lg text-gray-800">{day}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Button */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <button className="w-full rounded-lg bg-blue-600 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </main>
  );
}
