import { notFound } from "next/navigation";
import Link from "next/link";
import { cities } from "@/data/cities";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";

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

  // Filter packages that include this city
  const relatedPackages = packages.filter((pkg) =>
    pkg.cities.includes(city.slug)
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src={city.heroImage}
            alt={city.name}
            className="h-full w-full object-cover"
          />
          {/* Vibrant Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-teal-900/60 via-teal-800/50 to-slate-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-6xl font-bold text-white drop-shadow-2xl md:text-7xl animate-fade-in">
              {city.name}
            </h1>
            <p className="mt-4 text-2xl text-white drop-shadow-lg font-light">
              {city.description.split('\n')[0]}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600 transition-colors font-medium">
              Home
            </Link>
            <span className="text-slate-400">→</span>
            <Link href="/destinations" className="hover:text-teal-600 transition-colors font-medium">
              Destinations
            </Link>
            <span className="text-slate-400">→</span>
            <span className="font-semibold text-slate-900">{city.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* About Section */}
            <section className="rounded-xl bg-white p-8 shadow-md border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-10 bg-teal-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-slate-800">
                  About {city.name}
                </h2>
              </div>
              <div className="text-lg leading-relaxed text-slate-700 space-y-4">
                {city.description.split('\n').map((paragraph, index) => (
                  paragraph && <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Top Attractions */}
            <section className="rounded-xl bg-white p-8 shadow-md border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-10 bg-teal-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Top Attractions
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {city.attractions.map((attraction, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 bg-white hover:border-teal-500 hover:shadow-md hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white font-bold shrink-0 shadow-md">
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-slate-900">{attraction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Social Share Section */}
            <section className="rounded-xl bg-white p-8 shadow-md border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-10 bg-teal-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-slate-800">Share This Destination</h3>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-white hover:bg-teal-700 hover:scale-105 shadow-lg hover:shadow-xl transition-all"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=Check out ${city.name}!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-sky-600 px-5 py-3 text-white transition-all hover:from-sky-600 hover:to-sky-700 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=Check out ${city.name}! ${typeof window !== 'undefined' ? window.location.href : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-linear-to-r from-green-500 to-green-600 px-5 py-3 text-white transition-all hover:from-green-600 hover:to-green-700 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Explore More Card */}
            <div className="rounded-xl bg-white p-6 shadow-md border border-slate-200 sticky top-6">
              <h3 className="mb-6 text-2xl font-bold text-slate-800">
                Explore More
              </h3>
              
              {/* Best Time to Visit */}
              <div className="mb-6 p-4 rounded-xl bg-orange-50 border border-orange-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold text-orange-800 uppercase tracking-wide">Best Time to Visit</p>
                    <p className="text-xl font-bold text-orange-900">{city.bestTimeToVisit}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Link
                  href={`/packages?destination=${city.slug}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 bg-white hover:border-teal-500 hover:bg-slate-50 hover:scale-105 hover:shadow-md transition-all"
                >
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Travel Packages</p>
                    <p className="text-xs text-gray-600">Browse curated tours</p>
                  </div>
                </Link>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 bg-white">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Popular Attractions</p>
                    <p className="text-xs text-gray-600">{city.attractions.length} places to visit</p>
                  </div>
                </div>

                <Link
                  href="/stories"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 bg-white hover:border-teal-500 hover:bg-slate-50 hover:scale-105 hover:shadow-md transition-all"
                >
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Travel Stories</p>
                    <p className="text-xs text-gray-600">Read experiences</p>
                  </div>
                </Link>
              </div>

              {/* CTA Button */}
              <Link href="/contact" className="mt-6 block">
                <button className="w-full rounded-xl bg-teal-600 py-4 font-bold text-white hover:bg-teal-700 hover:scale-105 shadow-lg hover:shadow-xl transition-all">
                  Plan Your Trip
                </button>
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Packages Section */}
        {relatedPackages.length > 0 && (
          <section className="mt-16">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold text-gray-900">
                Popular Tours in {city.name}
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Discover our handpicked tour packages featuring this destination
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPackages.map((pkg) => (
                <PackageCard key={pkg.slug} package={pkg} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/packages">
                <button className="rounded-lg border-2 border-teal-600 px-8 py-3 text-lg font-semibold text-teal-600 hover:bg-teal-700 hover:text-white transition-colors">
                  View All Packages
                </button>
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
