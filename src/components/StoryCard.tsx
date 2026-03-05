import Link from "next/link";
import { TravelStory } from "@/data/stories";

interface StoryCardProps {
  story: TravelStory;
}

export default function StoryCard({ story }: StoryCardProps) {
  const formattedDate = new Date(story.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/stories/${story.slug}`}>
      <article className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        {/* Hero Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={story.heroImage}
            alt={story.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* City Badge */}
          <div className="absolute right-4 top-4">
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-800 backdrop-blur-sm">
              {story.city}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="mb-3 text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-blue-600">
            {story.title}
          </h3>

          {/* Author and Date */}
          <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="font-medium">{story.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{formattedDate}</span>
            </div>
          </div>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-blue-600 font-semibold transition-gap duration-300 group-hover:gap-3">
            <span>Read Story</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
