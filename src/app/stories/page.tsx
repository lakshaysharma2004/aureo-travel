import { stories } from "@/data/stories";
import StoryCard from "@/components/StoryCard";

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <div className="bg-linear-to-r from-blue-700 via-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">
              Travel Stories
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-blue-100">
              Explore inspiring journeys and authentic experiences from travelers
              who've ventured across India's most captivating destinations
            </p>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Latest Stories
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600"></div>
        </div>

        {/* Stories Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>

        {/* Empty State */}
        {stories.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 rounded-full bg-gray-100 p-6">
              <svg
                className="h-16 w-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              No Stories Yet
            </h3>
            <p className="text-gray-600">
              Check back soon for inspiring travel stories!
            </p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Have Your Own Story to Share?
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            We'd love to hear about your travel experiences and adventures
            across India. Share your journey with fellow travelers.
          </p>
          <button className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700">
            Submit Your Story
          </button>
        </div>
      </div>
    </div>
  );
}
