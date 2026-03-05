import { notFound } from "next/navigation";
import { stories } from "@/data/stories";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  const formattedDate = new Date(story.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Split content into paragraphs
  const paragraphs = story.content.split("\n\n").filter((p) => p.trim());

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-125 w-full">
        <img
          src={story.heroImage}
          alt={story.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          {/* City Badge */}
          <div className="mb-6">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {story.city}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            {story.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 border-b border-t border-gray-200 py-4">
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                className="h-5 w-5 text-gray-500"
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
            <div className="flex items-center gap-2 text-gray-700">
              <svg
                className="h-5 w-5 text-gray-500"
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
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 leading-relaxed text-gray-700"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Back to Stories Link */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <a
            href="/stories"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold transition-colors hover:text-blue-700"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to All Stories</span>
          </a>
        </div>
      </article>
    </main>
  );
}
