import Link from "next/link";

export default function BookingConfirmedPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-green-100 p-6">
              <svg
                className="h-24 w-24 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Content Card */}
          <div className="rounded-lg bg-white p-8 text-center shadow-xl md:p-12">
            {/* Heading */}
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Booking Request Received!
            </h1>

            {/* Message */}
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Thank you for your interest. Our travel team will contact you
              shortly to confirm your booking.
            </p>

            {/* Divider */}
            <div className="mb-8 border-t border-gray-200"></div>

            {/* Additional Info */}
            <div className="mb-8 rounded-lg bg-orange-50 border border-orange-200 p-6">
              <p className="text-sm text-slate-700">
                <strong className="text-gray-900">What happens next?</strong>
                <br />
                Our team will review your request and reach out within 24 hours
                to discuss your travel plans, answer any questions, and finalize
                your booking details.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/destinations">
                <button className="w-full rounded-lg border-2 border-teal-600 bg-white px-8 py-3 font-semibold text-teal-600 hover:bg-slate-50 transition-colors sm:w-auto">
                  Explore More Destinations
                </button>
              </Link>
              <Link href="/packages">
                <button className="w-full rounded-lg bg-teal-600 px-8 py-3 font-semibold text-white hover:bg-teal-700 transition-colors sm:w-auto">
                  View Packages
                </button>
              </Link>
            </div>

            {/* Home Link */}
            <div className="mt-8">
              <Link
                href="/"
                className="text-sm text-slate-600 hover:text-teal-600 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
