import { notFound } from "next/navigation";
import { cities } from "@/data/cities";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl">
        {/* Hero Image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <img
            src={city.heroImage}
            alt={city.name}
            className="h-96 w-full object-cover"
          />
        </div>

        {/* City Name */}
        <h1 className="mb-2 text-5xl font-bold text-gray-900">{city.name}</h1>

        {/* Best Time to Visit */}
        <p className="mb-6 text-lg text-blue-600">
          <strong>Best Time to Visit:</strong> {city.bestTimeToVisit}
        </p>

        {/* Description */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">About</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {city.description}
          </p>
        </section>

        {/* Attractions */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Attractions</h2>
          <ul className="space-y-3">
            {city.attractions.map((attraction, index) => (
              <li
                key={index}
                className="flex items-center rounded-lg bg-white p-4 shadow-sm"
              >
                <span className="mr-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                  {index + 1}
                </span>
                <span className="text-lg text-gray-800">{attraction}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
