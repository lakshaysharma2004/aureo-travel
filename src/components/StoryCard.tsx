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
      <article className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
        {/* Hero Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={story.heroImage}
            alt={story.title}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* City Badge */}
          <div className="absolute right-4 top-4 transition-all duration-500 group-hover:scale-110">
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-800 backdrop-blur-sm shadow-lg">
              {story.city}
            </span>
          </div>
          
          {/* Date Badge - appears on hover */}
          <div className="absolute left-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
            <span className="rounded-full bg-teal-600 backdrop-blur-sm px-4 py-2 text-xs font-bold text-white shadow-lg">
              {formattedDate}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="mb-3 text-xl font-bold leading-tight text-slate-800 transition-colors duration-300 group-hover:text-teal-600">
            {story.title}
          </h3>

          {/* Author and Date */}
          <div className="mb-4 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2 transition-all duration-300 group-hover:text-teal-600">
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
          </div>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-4 transition-all duration-300">
            <span className="group-hover:underline">Read More</span>
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
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
